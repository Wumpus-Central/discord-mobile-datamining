// === Module 34: _iterableToArrayLimit ===

// Module 34 (_iterableToArrayLimit)

export default function _iterableToArrayLimit(iterable, arg1) {
  let tmp2 = null;
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
    tmp2 = prop;
  }
  let obj = tmp2;
  if (null != tmp2) {
    let flag = true;
    let flag2 = false;
    try {
      const items = [];
      try {
        const iter = obj.call(iterable);
        obj = iter;
        const next = iter.next;
        if (0 === arg1) {
          const _Object = Object;
          if (Object(obj) !== obj) {
            try {
              const tmp15 = flag;
              if (!tmp15) {
                if (null != obj.return) {
                  const returnResult = obj.return();
                  const _Object2 = Object;
                  if (Object(returnResult) !== returnResult) {
                    const tmp19 = flag2;
                    if (tmp19) {
                      throw tmp;
                    }
                  }
                }
              }
              const tmp21 = flag2;
              if (tmp21) {
                throw tmp;
              }
            } catch (tmp23) {
              const tmp24 = flag2;
              if (tmp24) {
                throw tmp;
              } else {
                throw tmp23;
              }
            }
          } else {
            flag = false;
          }
        } else {
          flag = next.call(obj).done;
          const iter2 = next.call(obj);
          if (!flag) {
            items.push(iter3.value);
            if (items.length !== arg1) {
              while (true) {
                let iter4 = next.call(obj);
                flag = iter4.done;
                if (flag) {
                  break;
                } else {
                  let arr3 = items.push(iter5.value);
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
          const tmp26 = flag;
          if (!tmp26) {
            if (null != obj.return) {
              const returnResult1 = obj.return();
              const _Object3 = Object;
              if (Object(returnResult1) !== returnResult1) {
                const tmp31 = flag2;
                if (tmp31) {
                  throw tmp;
                }
              }
            }
          }
          const tmp33 = flag2;
          if (tmp33) {
            throw tmp;
          } else {
            return items;
          }
        } catch (tmp35) {
          const tmp36 = flag2;
          if (tmp36) {
            throw tmp;
          } else {
            throw tmp35;
          }
        }
      } catch (tmp) {
        flag2 = true;
      }
    } catch (tmp38) {
      try {
        if (!flag) {
          if (null != obj.return) {
            const returnResult2 = obj.return();
            const _Object4 = Object;
            if (Object(returnResult2) !== returnResult2) {
              const tmp43 = flag2;
              if (tmp43) {
                throw tmp;
              }
            }
          }
        }
        const tmp45 = flag2;
        if (tmp45) {
          throw tmp;
        } else {
          throw tmp38;
        }
      } catch (tmp47) {
        if (flag2) {
          throw tmp;
        } else {
          throw tmp47;
        }
      }
    }
  }
};