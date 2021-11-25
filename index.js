const Reader = require('./modules/Reader');
const Processor = require('./modules/Processor')
const Table = require('./modules/Table')
const HtmlParser = require('./modules/HtmlParser')
const Writer = require('./modules/Writer')
const PDFWriter = require('./modules/PdfWriter')

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const dados = await leitor.Read('./input/nomes.csv')
  const dadosProcessados = Processor.process(dados)

  const usuarios = new Table(dadosProcessados)

  const html = await HtmlParser.parse(usuarios)
  
  escritor.write('./output/index.html', html)
  PDFWriter.WriterPDF('./output/index.pdf', html)
}

main();