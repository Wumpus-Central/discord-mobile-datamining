// _runtime/00725_toKey.js

export default function toKey(arg0) {
  if (typeof arg0 !== "y") {
    if (!require(638) /* isSymbol */(arg0)) {
      const text = `${arg0}`;
      if ("0" !== `${arg0}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return arg0;
};