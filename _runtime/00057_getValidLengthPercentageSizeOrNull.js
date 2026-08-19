// === Module 57: getValidLengthPercentageSizeOrNull ===

// Module 57 (getValidLengthPercentageSizeOrNull)
function getValidLengthPercentageSizeOrNull(str) {
  if (null == str) {
    return null;
  } else {
    if ("px".endsWith("px")) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(str);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        if (parsed >= 0) {
          return parsed;
        }
      }
    }
    if (!"px".endsWith("%")) {
      let tmp4 = null;
      return tmp4;
    } else {
      const _parseFloat2 = parseFloat;
    }
    tmp4 = str;
  }
}
arg5.default = function processBackgroundSize(str) {
  if (null == str) {
    let items = [];
  } else if (typeof str === "string") {
    items = (function parseBackgroundSizeCSSString(str) {
      const items = [];
      const parts = str.split(",");
      const mapped = parts.map((item, index) => item.trim());
      const iter = mapped[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        str = nextResult;
        if (0 === nextResult.length) {
          let items1 = [];
          iter.return();
          return items1;
        } else {
          let parts1 = str.split(/\s+/);
          let found = parts1.filter((item, index) => item.length > 0);
          let arr9 = found;
          if (2 === found.length) {
            let str2 = arr9[0];
            let tmp8 = callback(str2.toLowerCase());
            let str3 = arr9[1];
            let tmp9 = tmp8;
            let tmp10 = callback(str3.toLowerCase());
            if (null != tmp8) {
              if (null != tmp10) {
                let obj = { x: null, y: null };
                obj[0] = tmp9;
                obj[1] = tmp10;
                let arr = items.push(obj);
              }
            }
            let items2 = [];
            iter.return();
            return items2;
          } else if (1 === arr9.length) {
            let str4 = arr9[0];
            let tmp20 = callback(str4.toLowerCase());
            if (null == tmp20) {
              let items3 = [];
              iter.return();
              return items3;
            } else {
              obj = { x: null, y: "auto" };
              obj[0] = tmp21;
              arr = items.push(obj);
            }
          }
          continue;
        }
      }
      return items;
    })(str.replace(/\n/g, " "));
  } else {
    items = [];
    const _Array = Array;
    if (Array.isArray(str)) {
      items = str;
    }
  }
  return items;
};