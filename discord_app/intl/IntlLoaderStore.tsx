// === Module 2113: IntlLoaderStore ===

// Module 2113 (IntlLoaderStore)
import util from "util" /* 1115 */;
import _modDef2114 from "module_2114" /* 2114 */;
import bg from "bg" /* 3913 */;
import formatjs from "formatjs" /* 4388 */;
import moment from "moment" /* 4419 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import module_1883 from "module_1883" /* 1883 */;

require = fn;
let closure_6 = async function _setAppLocale(arg0) {
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
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          const loadingFailed = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          state = state.getState();
          closure_129_1 = state;
          state.setLoadingStarted(closure_0);
          const items = [];
          const intl = util.intl;
          intl.setLocale(closure_0);
          items.push();
          items.push(asyncGeneratorStep(async () => {
            if (dependencyMap === 2) {
              dependencyMap = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                dependencyMap = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_0 = tmp4;
                    c1 = 1;
                    dependencyMap = 1;
                    const obj6 = { value: closure_0(2124).preloadAllIntlMessageFiles(), done: false };
                    return obj6;
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    c1 = 2;
                    dependencyMap = 1;
                    const obj8 = { value: closure_0(1154).loadAllMessagesInLocale(closure_128_0), done: false };
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  dependencyMap = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp11) {
                dependencyMap = tmp;
                throw tmp11;
              }
            }
          })());
          locale.setLocale(closure_0);
          items.push(locale.loadPromise);
          items.push((function loadDateFnsLocale() {
            const self = this;
            const apply = closure_1_7.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0));
          items.push((function loadFormatJsLocale() {
            const self = this;
            const apply = closure_1_8.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0));
          items.push((function setMomentLocale() {
            const self = this;
            const apply = closure_1_9.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0));
          items.push((function sentryLocale(locale) {
            closure_1_0(closure_1_2[11]).default.setTags({ locale });
            return Promise.resolve();
          })(closure_0));
          c2 = 1;
          c3 = 1;
          let obj4 = { value: Promise.all(items).catch((error) => loadingFailed.setLoadingFailed(error, closure_1_0)), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        closure_129_1.setLoadingSucceeded(closure_129_0);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c3 = tmp;
      throw tmp10;
    }
  }
};
let closure_7 = async function _loadDateFnsLocale(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp4;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          state = state.getState();
          closure_129_0 = state;
          const tmp20 = bg.dateFnsLocales[closure_0];
          if (null != tmp20) {
            c2 = 1;
            c3 = 1;
            const obj4 = { value: tmp20(), done: false };
            return obj4;
          } else {
            state.setLocaleData(_modDef2114);
            c3 = 3;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_1 = value;
        closure_129_0.setLocaleData(closure_129_1);
      }
      c3 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp11) {
      c3 = tmp;
      throw tmp11;
    }
  }
};
let closure_8 = async function _loadFormatJsLocale(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const tmp8 = formatjs.formatjsLocales[closure_0];
          if (null != tmp8) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: tmp8(), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c1 = tmp;
      throw tmp10;
    }
  }
};
let closure_9 = async function _setMomentLocale(arg0) {
  let length;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          const tmp34 = moment.momentLocales[closure_0];
          if (null != tmp34) {
            c3 = 1;
            c4 = 1;
            const obj5 = { value: tmp34(), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
      closure_129_1 = [];
      let str = "nb";
      if ("no" !== closure_129_0) {
        str = closure_129_0;
      }
      closure_129_2 = str.split("-");
      if (closure_129_2.length > 0) {
        do {
          let arr = closure_129_1.push(closure_129_2.join("-"));
          let arr3 = closure_129_2.pop();
          length = closure_129_2.length;
        } while (length > 0);
      }
      closure_129_1.push("en-US");
      closure_130_0(closure_130_2[10]).locale(closure_129_1);
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
const identity = fn(1243);
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    isLoading: false,
    inProgressLocale: "Boolean",
    error: "paddingHorizontal",
    localeData: _modDef2114,
    setLoadingStarted(inProgressLocale) {
      return closure_0({ isLoading: true, inProgressLocale });
    },
    setLoadingSucceeded(arg0) {
      if (closure_1().inProgressLocale === arg0) {
        closure_0({ isLoading: false, inProgressLocale: "Boolean", error: "paddingHorizontal" });
      }
    },
    setLoadingFailed(error, arg1) {
      if (closure_1().inProgressLocale === arg1) {
        const obj = { isLoading: false, inProgressLocale: "Array", error };
        closure_0(obj);
      }
    },
    setLocaleData(localeData) {
      closure_0({ localeData });
    }
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("intl/IntlLoaderStore.tsx");

export const useIntlLoaderStore = withEqualityFn;
export const subscribeToIntlLoadingSuccess = function subscribeToIntlLoadingSuccess(arg0) {
  closure_0 = arg0;
  return withEqualityFn.subscribe((inProgressLocale, inProgressLocale2) => {
    if (tmp) {
      closure_0(inProgressLocale2.inProgressLocale);
    }
    tmp = null != inProgressLocale2.inProgressLocale && null == inProgressLocale.inProgressLocale && null == inProgressLocale.error;
  });
};
export const setAppLocale = function setAppLocale() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useLocaleData = function useLocaleData() {
  let tmp = withEqualityFn((localeData) => localeData.localeData);
  if (tmp == null) {
    tmp = _modDef2114;
  }
  return tmp;
};