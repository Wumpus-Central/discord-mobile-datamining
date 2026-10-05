// _runtime/00055_processBoxShadow.js
import processColorDefault from "00050_processColor.js";

function parseLength(arg0) {
  const match = re4.exec(arg0);
  if (match) {
    let tmp6;
    const _parseFloat = parseFloat;
    const parsed = parseFloat(match[1]);
    if (null != match[2]) {
      tmp6 = parsed;
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

export default function processBoxShadow(str) {
  function parseBoxShadowString(str) {
    const items = [];
    const parts = str.split(closure_1_2);
    const mapped = parts.map((item) => item.trim());
    const found = mapped.filter((item) => "" !== item);
    const iter = found[Symbol.iterator]();
    str = iter.next();
    while (iter !== undefined) {
      let obj = { offsetX: 0, offsetY: 0 };
      let tmp2;
      let flag = false;
      let num = 0;
      let parts1 = str.split(closure_1_3);
      for (const item10041 of parts1) {
        if (null == processColorDefault(item10041)) {
          if ("inset" !== item10041) {
            if (0 === num) {
              tmp2 = item10041;
              num = num + 1;
            } else if (1 === num) {
              let tmp38 = flag;
              if (tmp38) {
                obj2.return();
                let items1 = [];
                iter.return();
                return items1;
              } else {
                num = num + 1;
              }
            } else if (2 === num) {
              let tmp32 = flag;
              if (tmp32) {
                obj2.return();
                let items2 = [];
                iter.return();
                return items2;
              } else {
                obj.blurRadius = item10041;
                num = num + 1;
              }
            } else if (3 === num) {
              let tmp26 = flag;
              if (tmp26) {
                obj2.return();
                let items3 = [];
                iter.return();
                return items3;
              } else {
                obj.spreadDistance = item10041;
                num = num + 1;
              }
            } else {
              obj2.return();
              let items4 = [];
              iter.return();
              return items4;
            }
          } else if (null != obj.inset) {
            obj2.return();
            let items5 = [];
            iter.return();
            return items5;
          } else {
            if (null != tmp2) {
              flag = true;
            }
            obj.inset = true;
          }
        } else if (null != obj.color) {
          obj2.return();
          let items6 = [];
          iter.return();
          return items6;
        } else {
          if (null != tmp2) {
            flag = true;
          }
          obj.color = item10041;
        }
        continue;
      }
      if (null != tmp2) {
        if (null != item10041) {
          obj.offsetX = tmp2;
          obj.offsetY = item10041;
          let arr = items.push(obj);
          continue;
        }
      }
      let items7 = [];
      iter.return();
      return items7;
    }
    return items;
  }
  let items = [];
  if (null == str) {
    return items;
  } else {
    let tmp48 = str;
    if (typeof str === "string") {
      tmp48 = parseBoxShadowString(str.replace(re5, " "));
    }
    let iter = tmp48[Symbol.iterator]();
    let num = 0;
    str = "inset";
    let tmp2 = tmp48;
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      let tmp6 = nextResult;
      for (const key10025 in nextResult) {
        if ("offsetX" === key10025) {
          let offsetX;
          let tmp39 = nextResult;
          if (typeof tmp5.offsetX === "string") {
            let tmp41 = nextResult;
            offsetX = parseLength(tmp5.offsetX);
          } else {
            offsetX = tmp5.offsetX;
          }
          if (null == offsetX) {
            let tmp45 = iter;
            let items1 = [];
            iter.return();
            return items1;
          } else {
            let tmp43 = obj;
            obj.offsetX = tmp42;
            continue;
          }
        } else {
          if ("offsetY" === key10025) {
            let offsetY;
            let tmp32 = nextResult;
            if (typeof tmp5.offsetY === "string") {
              offsetY = parseLength(tmp5.offsetY);
            } else {
              offsetY = tmp5.offsetY;
            }
            if (null == offsetY) {
              let tmp38 = iter;
              let items2 = [];
              iter.return();
              return items2;
            } else {
              let tmp37 = offsetY;
              obj.offsetY = tmp35;
              continue;
            }
          } else {
            if ("spreadDistance" === key10025) {
              let spreadDistance;
              let tmp25 = nextResult;
              if (typeof tmp5.spreadDistance === "string") {
                let tmp27 = nextResult;
                spreadDistance = parseLength(tmp5.spreadDistance);
              } else {
                spreadDistance = tmp5.spreadDistance;
              }
              if (null == spreadDistance) {
                let tmp31 = iter;
                let items3 = [];
                iter.return();
                return items3;
              } else {
                let tmp29 = obj;
                obj.spreadDistance = tmp28;
                continue;
              }
            } else {
              if ("blurRadius" === key10025) {
                let blurRadius;
                if (typeof tmp5.blurRadius === "string") {
                  let tmp19 = nextResult;
                  blurRadius = parseLength(tmp5.blurRadius);
                } else {
                  blurRadius = tmp5.blurRadius;
                }
                let tmp20 = blurRadius;
                if (null != blurRadius) {
                  if (tmp20 >= 0) {
                    let tmp22 = obj;
                    let tmp23 = blurRadius;
                    obj.blurRadius = tmp20;
                    continue;
                  }
                }
                let items4 = [];
                iter.return();
                return items4;
              } else {
                if ("color" === key10025) {
                  let tmp11 = nextResult;
                  let tmp12 = processColorDefault(tmp5.color);
                  if (null == tmp12) {
                    let tmp16 = iter;
                    let items5 = [];
                    iter.return();
                    return items5;
                  } else {
                    obj.color = tmp13;
                    continue;
                  }
                } else {
                  if ("inset" !== key10025) {
                    continue;
                  } else {
                    let tmp7 = obj;
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
}
