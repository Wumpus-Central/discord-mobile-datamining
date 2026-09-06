// === Module 6859: ? ===

// Module 6859

export default function _iterableToArrayLimit(iterable, arg1) {
  let tmp7 = null;
  if (null != iterable) {
    const _Symbol = Symbol;
    let prop = typeof Symbol !== "undefined";
    if (typeof Symbol !== "undefined") {
      const _Symbol2 = Symbol;
      prop = iterable[Symbol.iterator];
    }
    if (!prop) {
      prop = iterable[Symbol.iterator];
    }
    tmp7 = prop;
  }
  if (null != tmp7) {
    let flag2 = false;
    try {
      const items = [];
      try {
        const call = tmp10.call;
        if (typeof call === "unknown") {
          let iter = tmp10();
        } else {
          iter = call(iterable);
        }
        const next = iter.next;
        if (0 === arg1) {
          const _Object = Object;
          if (Object(obj2) !== obj2) {
            try {
              if (flag2) {
                throw tmp6;
              }
            } catch (tmp23) {
              if (tmp2) {
                throw tmp;
              } else {
                throw tmp23;
              }
            }
          } else {
            let flag3 = false;
          }
        } else {
          const call3 = next.call;
          if (typeof call3 === "unknown") {
            let iter2 = next();
          } else {
            iter2 = call3(obj2);
          }
          const done = iter2.done;
          flag3 = done;
          if (!done) {
            items.push(iter3.value);
            if (items.length !== arg1) {
              while (true) {
                let flag4 = true;
                let call2 = next.call;
                if (typeof call2 === "unknown") {
                  let iter4 = next();
                } else {
                  iter4 = call2(obj2);
                }
                let done2 = iter4.done;
                flag3 = done2;
                if (done2) {
                  break;
                } else {
                  let arr = items.push(iter5.value);
                  if (items.length !== arg1) {
                    continue;
                  } else {
                    break;
                  }
                  break;
                }
              }
            }
          }
        }
        try {
          if (!flag3) {
            if (null != obj2.return) {
              const returnResult = obj2.return();
              const _Object2 = Object;
              if (Object(returnResult) !== returnResult) {
                if (flag2) {
                  throw tmp6;
                }
              }
            }
          }
          if (flag2) {
            throw tmp6;
          } else {
            return items;
          }
        } catch (tmp35) {
          if (tmp2) {
            throw tmp;
          } else {
            throw tmp35;
          }
        }
      } catch (tmp6) {
        flag2 = true;
      }
    } catch (tmp38) {
      try {
        if (!tmp4) {
          if (tmp5 != obj.return) {
            const returnResult1 = obj.return();
            const _Object3 = Object;
            if (Object(returnResult1) !== returnResult1) {
              if (tmp2) {
                throw tmp;
              } else {
                return tmp3;
              }
            }
          }
        }
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp38;
        }
      } catch (tmp47) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp47;
        }
      }
    }
  }
};