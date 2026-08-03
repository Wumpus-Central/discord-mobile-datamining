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
arg5.default = function processBackgroundSize(str) {
  if (null == str) {
    let items = [];
  } else if (typeof str === "y") {
    items = (function parseBackgroundSizeCSSString(str) {
      const items = [];
      const parts = str.split(",");
      const mapped = parts.map((str) => str.trim());
      const iter = mapped[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        str = nextResult;
        if (0 === nextResult.length) {
          let tmp16 = iter;
          let items1 = [];
          iter.return();
          return items1;
        } else {
          let tmp17 = nextResult;
          let parts1 = str.split(/\s+/);
          let found = parts1.filter((arg0) => arg0.length > 0);
          let arr9 = found;
          if (2 === found.length) {
            let tmp6 = callback;
            let tmp7 = found;
            let str2 = arr9[0];
            let tmp8 = callback(str2.toLowerCase());
            let str3 = arr9[1];
            let tmp9 = tmp8;
            let tmp10 = callback(str3.toLowerCase());
            if (null != tmp8) {
              let tmp11 = tmp10;
              if (null != tmp10) {
                let obj = { x: null, y: null };
                let tmp12 = tmp8;
                obj[0] = tmp9;
                let tmp13 = tmp10;
                obj[1] = tmp10;
                let arr = items.push(obj);
              }
            }
            let tmp15 = iter;
            let items2 = [];
            iter.return();
            return items2;
          } else {
            let tmp2 = found;
            if (1 === arr9.length) {
              let tmp18 = callback;
              let tmp19 = found;
              let str4 = arr9[0];
              let tmp20 = callback(str4.toLowerCase());
              if (null == tmp20) {
                let tmp5 = iter;
                let items3 = [];
                iter.return();
                return items3;
              } else {
                obj = { x: null, y: "auto" };
                let tmp3 = tmp20;
                obj[0] = tmp21;
                arr = items.push(obj);
              }
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