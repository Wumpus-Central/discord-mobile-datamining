// === Module 15391: UserSettingsPushNotificationLogs ===

// Module 15391 (UserSettingsPushNotificationLogs)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, list: null, searchWrap: null, shareButton: null, log: null, code: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.searchWrap = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
let size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, height: fn(6106).InputHeights.MD, width: fn(6106).InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj2.shareButton = size;
let obj5 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
obj2.log = { paddingBottom: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1085).Fonts.CODE_BOLD };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { paddingBottom: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first1(576).c(34);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const Storage = first1(510).Storage;
      let str = Storage.get("push-notification-logs-query", "");
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = _slicedToArray(noop.useState(first), 2);
  first1 = tmp6[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  [first2, dependencyMap] = noop.useState(tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  let obj = first1(576);
  [r10046, asyncGeneratorStep] = noop.useState(tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_0 = async function _load() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp5;
                  closure_0 = tmp2;
                  closure_128_0 = undefined;
                  v1 = 1;
                  c3 = 1;
                  const obj4 = { value: first2(dependencyMap[12])(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                v1(closure_128_0);
                c3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp13) {
              c3 = tmp;
              throw tmp13;
            }
          }
        };
        tmp = !(function load() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        return;
      }
    }
    let items2 = [];
    cResult[3] = P;
    cResult[4] = items2;
    let tmp14 = items2;
  } else {
    class P {
      constructor() {
        closure_0 = async function _load() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp5;
                  closure_0 = tmp2;
                  closure_128_0 = undefined;
                  v1 = 1;
                  c3 = 1;
                  const obj4 = { value: first2(dependencyMap[12])(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                v1(closure_128_0);
                c3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp13) {
              c3 = tmp;
              throw tmp13;
            }
          }
        };
        tmp = !(function load() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        return;
      }
    }
    tmp14 = cResult[4];
  }
  const effect = noop.useEffect(P, tmp14);
  if (cResult[5] === first2) {
    class P {
      constructor() {
        closure_0 = async function _load() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp5;
                  closure_0 = tmp2;
                  closure_128_0 = undefined;
                  v1 = 1;
                  c3 = 1;
                  const obj4 = { value: first2(dependencyMap[12])(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                v1(closure_128_0);
                c3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp13) {
              c3 = tmp;
              throw tmp13;
            }
          }
        };
        tmp = !(function load() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        return;
      }
    }
    const effect1 = noop.useEffect(C, items4);
    const tmp18 = closure_9();
    _slicedToArray = tmp18;
    const bottom = first2(1618)().bottom;
    ({ wrap, searchWrap } = tmp18);
    if (cResult[9] !== first1) {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      let obj3 = { size: "md", placeholder: "Filter (regex)", onChange: tmp6[1], defaultValue: first1 };
      const tmp21 = closure_7(tmp(6547).SearchField, obj3);
      cResult[9] = first1;
      cResult[10] = tmp21;
    } else {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      const stringResult = obj4.string(tmp(1126).t.leICvh);
      closure_129_0 = asyncGeneratorStep(async () => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: tmp5(12531)(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = value;
              const obj6 = { message: tmp5(12532)(closure_128_0, false) };
              tmp2(8038).showShareActionSheet(obj6, "push-notification-logs");
              c3 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp16) {
            c3 = tmp;
            throw tmp16;
          }
        }
      });
      function t12() {
        const self = this;
        const apply = first1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      const tmp28 = closure_7(tmp(12715).ShareIcon, {});
      cResult[11] = stringResult;
      cResult[12] = t12;
      cResult[13] = tmp28;
      let tmp24 = tmp28;
      let tmp23 = t12;
      const tmp22 = stringResult;
    } else {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      tmp23 = cResult[12];
      tmp24 = cResult[13];
    }
    if (cResult[14] !== tmp18.shareButton) {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
      let obj5 = { style: tmp18.shareButton, accessibilityLabel: tmp22, onPress: tmp23, children: tmp24 };
      const tmp30 = closure_7(tmp(5909).PressableOpacity, obj5);
      cResult[14] = tmp18.shareButton;
      cResult[15] = tmp30;
    } else {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    if (cResult[16] === tmp18.searchWrap) {
      class P {
        constructor() {
          closure_0 = async function _load() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first2(dependencyMap[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  v1(closure_128_0);
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          };
          tmp = !(function load() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          return;
        }
      }
    }
    let obj6 = { style: searchWrap, children: null };
    const items3 = [tmp20, tmp29];
    obj6.children = items3;
    const tmp34 = closure_8(View, obj6);
    cResult[16] = tmp18.searchWrap;
    cResult[17] = tmp29;
    cResult[18] = tmp20;
    cResult[19] = tmp34;
  }
  class C {
    constructor() {
      if ("" !== closure_0) {
        tmp8 = globalThis;
        _setTimeout = setTimeout;
        num = 300;
        closure_0 = setTimeout(() => {
          try {
            const _RegExp = RegExp;
            const regExp = new RegExp(closure_0, "i");
            closure_1_3(first2.filter(() => { ... }));
            const Storage = first1(closure_2[11]).Storage;
            const result = Storage.set("push-notification-logs-query", closure_0);
          } catch (err) {
          }
        }, 300);
        return () => clearTimeout(closure_0);
      } else {
        tmp2 = closure_3;
        tmp3 = closure_1;
        tmp4 = closure_3(closure_1);
        tmp5 = closure_0;
        tmp6 = closure_2;
        Storage = closure_0(closure_2[11]).Storage;
        str = "push-notification-logs-query";
        result = Storage.set("push-notification-logs-query", tmp);
        return;
      }
    }
  }
  items4 = [first2, first1];
  cResult[5] = first2;
  cResult[6] = first1;
  cResult[7] = C;
  cResult[8] = items4;
  const tmp5Result2 = _slicedToArray(noop.useState(tmp11), 2);
}) : (function UserSettingsPushNotificationLogs() {
  const tmp = _slicedToArray(noop.useState(() => {
    const Storage = first(510).Storage;
    let str = Storage.get("push-notification-logs-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const defaultValue = tmp[0];
  [first1, dependencyMap] = noop.useState([]);
  [tmp6, asyncGeneratorStep] = noop.useState([]);
  const effect = noop.useEffect(() => {
    closure_0 = async function _load2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              v1 = 1;
              c3 = 1;
              const obj4 = { value: first1(dependencyMap[12])(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v1(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    };
    !(function load() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  let items = [first1, defaultValue];
  const effect1 = noop.useEffect(() => {
    if ("" !== timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        try {
          const _RegExp = RegExp;
          const regExp = new RegExp(closure_0, "i");
          closure_1_3(first1.filter((type) => {
            let tmp2 = null != type.type.match(regExp);
            if (!tmp2) {
              tmp2 = null != type.title.match(regExp);
            }
            if (!tmp2) {
              let match;
              if (type.content != null) {
                match = str3.match(regExp);
              }
              tmp2 = null != match;
            }
            return tmp2;
          }));
          const Storage = first(closure_2[11]).Storage;
          const result = Storage.set("push-notification-logs-query", closure_0);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      closure_3(first1);
      let Storage = first(510).Storage;
      let result = Storage.set("push-notification-logs-query", tmp);
    }
  }, items);
  const tmp9 = closure_9();
  _slicedToArray = tmp9;
  let obj = { style: tmp9.wrap, children: null };
  let obj2 = { style: tmp9.searchWrap, children: null };
  let items1 = [closure_7(defaultValue(6547).SearchField, { size: "md", placeholder: "Filter (regex)", onChange: tmp[1], defaultValue }), ];
  let obj3 = { style: tmp9.shareButton, accessibilityLabel: null, onPress: null, children: null };
  const intl = defaultValue(1126).intl;
  obj3.accessibilityLabel = intl.string(defaultValue(1126).t.leICvh);
  obj3.onPress = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: tmp5(12531)(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          const obj6 = { message: tmp5(12532)(closure_128_0, false) };
          tmp2(8038).showShareActionSheet(obj6, "push-notification-logs");
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  });
  obj3.children = closure_7(defaultValue(12715).ShareIcon, {});
  items1[1] = closure_7(defaultValue(5909).PressableOpacity, obj3);
  obj2.children = items1;
  let items2 = [closure_8(View, obj2), ];
  let obj4 = { contentContainerStyle: null, data: null, renderItem: null };
  let obj5 = {};
  const merged = Object.assign(tmp9.list);
  obj5.paddingBottom = first1(1618)().bottom + first1(587).space.PX_16;
  obj4.contentContainerStyle = obj5;
  obj4.data = tmp6;
  obj4.renderItem = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    const obj = { style: closure_4.log, children: null };
    const obj2 = { style: closure_4.code, variant: "text-xs/normal", children: new Date(item.receivedTimestamp).toISOString() };
    const items = [React5(Text_Text.Text, obj2), ];
    const obj3 = { style: closure_4.code, variant: "text-sm/normal", children: null };
    const obj4 = { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: null };
    const items1 = [str, "[", item.type, "]", " "];
    obj4.children = items1;
    const items2 = [closure_2_8(Text_Text.Text, obj4), item.title, " - ", item.content];
    obj3.children = items2;
    items[1] = closure_2_8(Text_Text.Text, obj3);
    obj.children = items;
    return closure_2_8(View, obj, item.index);
  };
  items2[1] = closure_7(defaultValue(8371).FlashList, obj4);
  obj.children = items2;
  return closure_8(View, obj);
});