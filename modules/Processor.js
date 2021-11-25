class Processor{
  static process(data) {
    let rows = [];
    const array = data.split('\r\n')
    array.forEach(row => {
      rows.push(row.split(';'))
    })
    return rows;
  }
}

module.exports = Processor;