function parse (str) {
  const chrs = str.split('')
  const chrsLowerCase = str.toLowerCase().split('')
  const ret = []
  const iter = chrs.entries()

  let start = 0
  let lastUpper

  iter.next()

  if (chrs[0] !== chrsLowerCase[0]) {
    lastUpper = 0
  }

  for (let [i, chr] of iter) {
    if (chr === chrsLowerCase[i]) {
      if (lastUpper && lastUpper !== start) {
        ret.push(chrs.slice(start, lastUpper).join(''))
        start = lastUpper
      }
    } else {
      if (lastUpper !== i - 1) {
        ret.push(chrs.slice(start, i).join(''))
        start = i
      }
      lastUpper = i
    }
  }
  ret.push(chrs.slice(start).join(''))

  return ret
}

export default function (val) {
  if (typeof val === 'undefined' || val === null) {
    return []
  }

  val = String(val)

  if (val.length < 2) {
    return [val]
  }

  return parse(val)
}
