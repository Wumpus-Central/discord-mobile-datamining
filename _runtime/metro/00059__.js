// _runtime/metro/00059__.js
function isBackgroundRepeatKeyword(arg0) {
  let tmp = "repeat" === arg0;
  if (!tmp) {
    tmp = "space" === arg0;
  }
  if (!tmp) {
    tmp = "round" === arg0;
  }
  if (!tmp) {
    tmp = "no-repeat" === arg0;
  }
  return tmp;
}

export default function processBackgroundRepeat(str) {
  if (null == str) {
    let items = [];
  } else {
    const _Array = Array;
    items = str;
    if (!Array.isArray(str)) {
      let items1 = [];
      if (typeof str === "string") {
        items1 = (function parseBackgroundRepeatCSSString(str) {
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
              let arr11 = found;
              if (1 === found.length) {
                let first = arr11[0];
                let str2 = first;
                if (null == first) {
                  let items2 = [];
                  iter.return();
                  return items2;
                } else {
                  let formatted = str2.toLowerCase();
                  let tmp35 = formatted;
                  if ("repeat-x" === formatted) {
                    let arr = items.push({ x: "repeat", y: "no-repeat" });
                  } else if ("repeat-y" === tmp35) {
                    arr = items.push({ x: "no-repeat", y: "repeat" });
                  } else if ("repeat" === tmp35) {
                    let arr1 = items.push({ x: "repeat", y: "repeat" });
                  } else if ("space" === tmp35) {
                    let arr2 = items.push({ x: "space", y: "space" });
                  } else if ("round" === tmp35) {
                    let arr3 = items.push({ x: "round", y: "round" });
                  } else if ("no-repeat" !== tmp35) {
                    let items3 = [];
                    iter.return();
                    return items3;
                  } else {
                    let arr4 = items.push({ x: "no-repeat", y: "no-repeat" });
                  }
                }
              } else if (2 === arr11.length) {
                let first1 = arr11[0];
                let str3 = first1;
                let str4 = arr11[1];
                if (null != first1) {
                  if (null != str4) {
                    let formatted1 = str3.toLowerCase();
                    let tmp5 = formatted1;
                    let formatted2 = str4.toLowerCase();
                    let tmp8 = isBackgroundRepeatKeyword;
                    if (isBackgroundRepeatKeyword(formatted1)) {
                      if (tmp8(formatted2)) {
                        let point = { x: null, y: null };
                        point.x = tmp5;
                        point.y = formatted2;
                        let arr5 = items.push(point);
                      }
                    }
                    let items4 = [];
                    iter.return();
                    return items4;
                  }
                }
                let items5 = [];
                iter.return();
                return items5;
              }
              continue;
            }
          }
          return items;
        })(str.replace(/\n/g, " "));
      }
      items = items1;
    }
  }
  return items;
}
