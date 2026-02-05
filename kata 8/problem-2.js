function digitize(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();

  //   number ==> string  ==> array of string ===> array of numbers ==> reversed array of numbber
}
