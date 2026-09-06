// _runtime/metro/00057__.js
function getValidLengthPercentageSizeOrNull(str) {
  if (null == str) {
    return null;
  } else {
    if (str.endsWith("px")) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(str);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        if (parsed >= 0) {
          return parsed;
        }
      }
    }
    if (!str.endsWith("%")) {
      let tmp4 = null;
      return tmp4;
    } else {
      const _parseFloat2 = parseFloat;
    }
    tmp4 = str;
  }
}

export default function processBackgroundSize(str) {
  if (null == str) {
    let items = [];
  } else if (typeof str === "string") {
    items = (function parseBackgroundSizeCSSString(str) {
      const items = [];
      const parts = str.split(",");
      const mapped = parts.map((item) => item.trim());
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
          let found = parts1.filter((item) => item.length > 0);
          let arr9 = found;
          if (2 === found.length) {
            let str2 = arr9[0];
            let tmp8 = getValidLengthPercentageSizeOrNull(str2.toLowerCase());
            let str3 = arr9[1];
            let tmp9 = tmp8;
            let tmp10 = getValidLengthPercentageSizeOrNull(str3.toLowerCase());
            if (null != tmp8) {
              if (null != tmp10) {
                let point = { x: null, y: null };
                point.x = tmp9;
                point.y = tmp10;
                let arr = items.push(point);
              }
            }
            let items2 = [];
            iter.return();
            return items2;
          } else if (1 === arr9.length) {
            let str4 = arr9[0];
            let tmp20 = getValidLengthPercentageSizeOrNull(str4.toLowerCase());
            if (null == tmp20) {
              let items3 = [];
              iter.return();
              return items3;
            } else {
              let point1 = { x: null, y: "auto" };
              point1.x = tmp21;
              arr = items.push(point1);
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
}
