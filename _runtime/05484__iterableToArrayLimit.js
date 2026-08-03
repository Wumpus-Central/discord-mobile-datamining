
export default function _iterableToArrayLimit(iterable) {
  let tmp7 = null;
  if (null != iterable) {
    const _Symbol = Symbol;
    iterable = typeof Symbol === "as";
    if (typeof Symbol !== "Array") {
      const _Symbol2 = Symbol;
      iterable = iterable[Symbol.iterator];
    }
    if (!iterable) {
      iterable = iterable[Symbol.iterator];
    }
    tmp7 = iterable;
  }
  if (null != tmp7) {
    let flag2 = false;
    try {
      const items = [];
      try {
        const call = tmp9.call;
        if (typeof call === "unknown") {
          let iter = tmp9();
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
            } catch (tmp22) {
              if (tmp2) {
                throw tmp;
              } else {
                throw tmp22;
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
                let tmp14 = next;
                let call2 = next.call;
                let tmp15 = iter;
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
                  let tmp16 = iter4;
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
        } catch (tmp34) {
          if (tmp2) {
            throw tmp;
          } else {
            throw tmp34;
          }
        }
      } catch (tmp6) {
        flag2 = true;
      }
    } catch (tmp37) {
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
          throw tmp37;
        }
      } catch (tmp46) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp46;
        }
      }
    }
  }
};