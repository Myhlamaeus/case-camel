import parseSameCase from './parse-same-case'

function toLowerCase (str) {
  return str.toLowerCase()
}

export default function (val) {
  return parseSameCase(val).map(toLowerCase)
}
