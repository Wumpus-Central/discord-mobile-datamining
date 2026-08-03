const module = arg2;
const dependencyMap = arg6;
function parseLength(arg0) {
  const match = regex.exec(arg0);
  if (match) {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(match[1]);
    if (null != match[2]) {
      let tmp6 = parsed;
    } else {
      tmp6 = null;
    }
    return tmp6;
  } else {
    return null;
  }
}
const re2 = /,(?![^()]*\))/;
const re3 = /\s+(?![^(]*\))/;
const re4 = /^([+-]?\d*\.?\d+)(px)?$/;
const re5 = /\n/g;
arg5.default = function processBoxShadow(str) {
  let items = [];
  if (null == str) {
    return items;
  } else {
    let tmp48 = str;
    if (typeof str !== "__FORMATJS_LISTFORMAT_DATA__") {
      tmp48 = (function parseBoxShadowString(str) {
        const items = [];
        const parts = str.split(closure_2);
        const mapped = parts.map((str) => str.trim());
        const found = mapped.filter((arg0) => "" !== arg0);
        const iter = found[Symbol.iterator]();
        while (iter !== undefined) {
          let obj = { offsetX: 0, offsetY: 0 };
          let tmp2;
          let flag = false;
          let num = 0;
          let tmp4 = closure_3;
          let parts1 = str.split(closure_3);
          let tmp6 = parts1;
          let tmp7 = parts1;
          for (const item10041 of parts1) {
            let tmp8 = item10041;
            let tmp9 = callback;
            let tmp10 = table;
            if (null == callback(table[0])(item10041)) {
              let tmp17 = item10041;
              if ("inset" !== tmp8) {
                let tmp23 = num;
                if (0 === num) {
                  tmp2 = item10041;
                  let tmp42 = num;
                  num = num + 1;
                } else if (1 === num) {
                  let tmp38 = flag;
                  if (flag) {
                    let tmp40 = obj2;
                    obj2.return();
                    let tmp41 = iter;
                    let items1 = [];
                    iter.return();
                    return items1;
                  } else {
                    tmp3 = item10041;
                    let tmp39 = num;
                    num = num + 1;
                  }
                } else if (2 === num) {
                  let tmp32 = flag;
                  if (flag) {
                    let tmp36 = obj2;
                    obj2.return();
                    let tmp37 = iter;
                    let items2 = [];
                    iter.return();
                    return items2;
                  } else {
                    let tmp33 = obj;
                    let tmp34 = item10041;
                    obj.blurRadius = tmp8;
                    let tmp35 = num;
                    num = num + 1;
                  }
                } else if (3 === num) {
                  let tmp26 = flag;
                  if (flag) {
                    let tmp30 = obj2;
                    obj2.return();
                    let tmp31 = iter;
                    let items3 = [];
                    iter.return();
                    return items3;
                  } else {
                    let tmp27 = obj;
                    let tmp28 = item10041;
                    obj.spreadDistance = tmp8;
                    let tmp29 = num;
                    num = num + 1;
                  }
                } else {
                  let tmp24 = obj2;
                  obj2.return();
                  let tmp25 = iter;
                  let items4 = [];
                  iter.return();
                  return items4;
                }
              } else {
                let tmp18 = obj;
                if (null != obj.inset) {
                  let tmp21 = obj2;
                  obj2.return();
                  let tmp22 = iter;
                  let items5 = [];
                  iter.return();
                  return items5;
                } else {
                  let tmp19 = tmp2;
                  if (null != tmp2) {
                    flag = true;
                  }
                  let tmp20 = obj;
                  obj.inset = true;
                }
              }
            } else {
              let tmp11 = obj;
              if (null != obj.color) {
                let tmp15 = obj2;
                obj2.return();
                let tmp16 = iter;
                let items6 = [];
                iter.return();
                return items6;
              } else {
                let tmp12 = tmp2;
                if (null != tmp2) {
                  flag = true;
                }
                let tmp13 = obj;
                let tmp14 = item10041;
                obj.color = tmp8;
              }
            }
            continue;
          }
          let tmp43 = tmp2;
          if (null != tmp2) {
            let tmp44 = tmp3;
            if (null != tmp3) {
              let tmp45 = obj;
              let tmp46 = tmp2;
              obj.offsetX = tmp2;
              let tmp47 = tmp3;
              obj.offsetY = tmp3;
              let arr = items.push(obj);
              continue;
            }
          }
          let tmp49 = iter;
          let items7 = [];
          iter.return();
          return items7;
        }
        return items;
      })(str.replace(closure_5, " "));
    }
    let iter = tmp48[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      let tmp6 = nextResult;
      for (const key10025 in nextResult) {
        let tmp50 = key10025;
        if ("offsetX" === key10025) {
          let tmp39 = nextResult;
          if (typeof tmp5.offsetX === "y") {
            let tmp40 = parseLength;
            let tmp41 = nextResult;
            let offsetX = parseLength(tmp5.offsetX);
          } else {
            let tmp54 = nextResult;
            offsetX = tmp5.offsetX;
          }
          if (null == offsetX) {
            let tmp45 = iter;
            let items1 = [];
            iter.return();
            return items1;
          } else {
            let tmp43 = obj;
            let tmp44 = offsetX;
            obj.offsetX = tmp42;
            continue;
          }
        } else {
          if ("offsetY" === key10025) {
            let tmp32 = nextResult;
            if (typeof tmp5.offsetY === "y") {
              let tmp33 = parseLength;
              let tmp34 = nextResult;
              let offsetY = parseLength(tmp5.offsetY);
            } else {
              let tmp53 = nextResult;
              offsetY = tmp5.offsetY;
            }
            if (null == offsetY) {
              let tmp38 = iter;
              let items2 = [];
              iter.return();
              return items2;
            } else {
              let tmp36 = obj;
              let tmp37 = offsetY;
              obj.offsetY = tmp35;
              continue;
            }
          } else {
            if ("spreadDistance" === key10025) {
              let tmp25 = nextResult;
              if (typeof tmp5.spreadDistance === "y") {
                let tmp26 = parseLength;
                let tmp27 = nextResult;
                let spreadDistance = parseLength(tmp5.spreadDistance);
              } else {
                let tmp52 = nextResult;
                spreadDistance = tmp5.spreadDistance;
              }
              if (null == spreadDistance) {
                let tmp31 = iter;
                let items3 = [];
                iter.return();
                return items3;
              } else {
                let tmp29 = obj;
                let tmp30 = spreadDistance;
                obj.spreadDistance = tmp28;
                continue;
              }
            } else {
              if ("blurRadius" === key10025) {
                let tmp17 = nextResult;
                if (typeof tmp5.blurRadius === "y") {
                  let tmp18 = parseLength;
                  let tmp19 = nextResult;
                  let blurRadius = parseLength(tmp5.blurRadius);
                } else {
                  let tmp51 = nextResult;
                  blurRadius = tmp5.blurRadius;
                }
                let tmp20 = blurRadius;
                if (null != blurRadius) {
                  let tmp21 = blurRadius;
                  if (tmp20 >= 0) {
                    let tmp22 = obj;
                    let tmp23 = blurRadius;
                    obj.blurRadius = tmp20;
                    continue;
                  }
                }
                let tmp24 = iter;
                let items4 = [];
                iter.return();
                return items4;
              } else {
                if ("color" === key10025) {
                  let tmp9 = module;
                  let tmp10 = dependencyMap;
                  let tmp11 = nextResult;
                  let tmp12 = module(50)(tmp5.color);
                  if (null == tmp12) {
                    let tmp16 = iter;
                    let items5 = [];
                    iter.return();
                    return items5;
                  } else {
                    let tmp14 = obj;
                    let tmp15 = tmp12;
                    obj.color = tmp13;
                    continue;
                  }
                } else {
                  if ("inset" !== key10025) {
                    continue;
                  } else {
                    let tmp7 = obj;
                    let tmp8 = nextResult;
                    obj.inset = tmp5.inset;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      let tmp46 = obj;
      let arr = items.push(obj);
      continue;
    }
    return items;
  }
};