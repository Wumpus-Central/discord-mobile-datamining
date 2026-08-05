// _runtime/13428_InsertUnicodeExtensionAndCanonicalize.js
const require = arg1;
const dependencyMap = arg6;
arg5.InsertUnicodeExtensionAndCanonicalize = function InsertUnicodeExtensionAndCanonicalize(arr) {
  let length;
  require(13421) /* isMatched */.invariant(-1 === arr.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
  let num = 0;
  let str = "-u";
  let str2 = "-u";
  if (0 < arg1.length) {
    do {
      let concat = "-".concat;
      str = `-u${"-".concat(arg1[num])}`;
      num = num + 1;
      str2 = str;
      length = arg1.length;
    } while (num < length);
  }
  let tmp2 = str2;
  let num2 = 0;
  let tmp3 = str2;
  if (0 < arg2.length) {
    do {
      let iter = arg2[num2];
      let value = iter.value;
      let concat2 = "-".concat;
      let sum = tmp2 + "-".concat(iter.key);
      let tmp5 = num2;
      let sum1 = sum;
      if ("" !== value) {
        let concat3 = "-".concat;
        sum1 = sum + "-".concat(value);
      }
      num2 = num2 + 1;
      tmp2 = sum1;
      tmp3 = sum1;
    } while (num2 < arg2.length);
  }
  if ("-u" === tmp3) {
    return require(13429) /* CanonicalizeUnicodeLocaleId */.CanonicalizeUnicodeLocaleId(arr);
  } else {
    const index = arr.indexOf("-x-");
    if (-1 === index) {
      let sum2 = arr + tmp3;
    } else {
      const sum3 = arr.slice(0, index) + tmp3;
      sum2 = sum3 + arr.slice(index);
    }
    return require(13429) /* CanonicalizeUnicodeLocaleId */.CanonicalizeUnicodeLocaleId(sum2);
  }
};