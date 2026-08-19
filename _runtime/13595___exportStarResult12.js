// _runtime/13595___exportStarResult12.js
arg5.CollapseNumberRange = function CollapseNumberRange(arg0, items, getInternalSlots) {
  const internalSlots = getInternalSlots.getInternalSlots(arg0);
  const regExp = new RegExp("s?[".concat(internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, "]s?"));
  const findIndexResult = items.findIndex((item, index) => {
    let isMatch = "literal" === item.type;
    if (isMatch) {
      isMatch = regExp.test(item.value);
    }
    return isMatch;
  });
  items = [];
  let diff = findIndexResult - 1;
  if (0 <= diff) {
    if (regExp.has(items[diff].type)) {
      let arr = items.unshift(items[diff]);
      const diff1 = diff - 1;
      while (0 <= diff1) {
        diff = diff1;
        if (!regExp.has(items[diff1].type)) {
          break;
        }
      }
    }
  }
  const mapped = items.map((item, index) => item.value);
  if (Array.from(mapped.join("")).length > 1) {
    const _Array3 = Array;
    arr = Array.from(items);
    arr.splice(findIndexResult - items.length, items.length);
    return arr;
  } else {
    const items1 = [];
    let sum = findIndexResult + 1;
    if (sum < items.length) {
      if (regExp.has(items[sum].type)) {
        items1.push(items[sum]);
        const sum1 = sum + 1;
        while (sum1 < items.length) {
          sum = sum1;
          if (!regExp.has(items[sum1].type)) {
            break;
          }
        }
      }
    }
    const _Array = Array;
    const mapped1 = items1.map((item, index) => item.value);
    if (Array.from(mapped1.join("")).length > 1) {
      const _Array2 = Array;
      const arr2 = Array.from(items);
      arr2.splice(findIndexResult + 1, items1.length);
      return arr2;
    } else {
      return items;
    }
  }
};
const set = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);