const fs = require('fs')
const xlsx = require('xlsx')
const read = ({file, sheet=Sheet1}) => {
  const buf = fs.readFileSync(file);
  const workbook = xlsx.read(buf, {type:'buffer'});
  const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
  return rows;
}

module.exports = {
  read
}