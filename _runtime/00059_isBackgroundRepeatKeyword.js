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
arg5.default = function processBackgroundRepeat(str) {
  if (null == str) {
    let items = [];
  } else {
    const _Array = Array;
    items = str;
    if (!Array.isArray(str)) {
      let items1 = [];
      if (typeof str !== "_iter") {
        items1 = (function parseBackgroundRepeatCSSString(str) {
          const items = [];
          const parts = str.split(",");
          const mapped = parts.map((str) => str.trim());
          const iter = mapped[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            str = nextResult;
            if (0 === nextResult.length) {
              let tmp28 = iter;
              let items1 = [];
              iter.return();
              return items1;
            } else {
              let tmp29 = nextResult;
              let parts1 = str.split(/\s+/);
              let found = parts1.filter((arg0) => arg0.length > 0);
              let arr11 = found;
              if (1 === found.length) {
                let tmp15 = found;
                let first = arr11[0];
                let str2 = first;
                if (null == first) {
                  let tmp27 = iter;
                  let items2 = [];
                  iter.return();
                  return items2;
                } else {
                  let tmp33 = first;
                  let formatted = str2.toLowerCase();
                  let tmp35 = formatted;
                  if ("repeat-x" === formatted) {
                    let arr = items.push({ x: "repeat", y: "no-repeat" });
                  } else {
                    let tmp36 = formatted;
                    if ("repeat-y" === tmp35) {
                      arr = items.push({ x: "no-repeat", y: "repeat" });
                    } else {
                      let tmp37 = formatted;
                      if ("repeat" === tmp35) {
                        let arr1 = items.push({ x: "repeat", y: "repeat" });
                      } else {
                        let tmp17 = formatted;
                        if ("space" === tmp35) {
                          let arr2 = items.push({ x: "space", y: "space" });
                        } else {
                          let tmp18 = formatted;
                          if ("round" === tmp35) {
                            let arr3 = items.push({ x: "round", y: "round" });
                          } else {
                            let tmp19 = formatted;
                            if ("no-repeat" !== tmp35) {
                              let tmp21 = iter;
                              let items3 = [];
                              iter.return();
                              return items3;
                            } else {
                              let arr4 = items.push({ x: "no-repeat", y: "no-repeat" });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                let tmp30 = found;
                if (2 === arr11.length) {
                  let tmp31 = found;
                  let first1 = arr11[0];
                  let str3 = first1;
                  let str4 = arr11[1];
                  if (null != first1) {
                    let tmp2 = str4;
                    if (null != str4) {
                      let tmp3 = first1;
                      let formatted1 = str3.toLowerCase();
                      let tmp6 = str4;
                      let tmp5 = formatted1;
                      let formatted2 = str4.toLowerCase();
                      let tmp8 = callback;
                      if (callback(formatted1)) {
                        let tmp9 = formatted2;
                        if (tmp8(formatted2)) {
                          let obj = { x: null, y: null };
                          let tmp11 = formatted1;
                          obj[0] = tmp5;
                          let tmp12 = formatted2;
                          obj[1] = formatted2;
                          let arr5 = items.push(obj);
                        }
                      }
                      let tmp10 = iter;
                      let items4 = [];
                      iter.return();
                      return items4;
                    }
                  }
                  let tmp14 = iter;
                  let items5 = [];
                  iter.return();
                  return items5;
                }
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
};