// === Module 2117: IntlLoaderStore ===

// Module 2117 (IntlLoaderStore)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2118 from "module_2118" /* 2118 */;
import dateFnsLocales from "dateFnsLocales" /* 3959 */;
import formatjs from "formatjs" /* 4434 */;
import moment from "moment" /* 4465 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1889 from "module_1889" /* 1889 */;
import module_1254 from "module_1254" /* 1254 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, state;

let obj = function _setAppLocale() {
  let locale;
  obj = _asyncToGenerator(async (arg0) => {
    let allPromises;
    function loadDateFnsLocale() {
      return closure_1_7(...arguments);
    }
    function loadFormatJsLocale() {
      return closure_1_8(...arguments);
    }
    function setMomentLocale() {
      return closure_1_9(...arguments);
    }
    function sentryLocale(locale) {
      obj = { locale };
      closure_1_0(closure_1_2[11]).default.setTags(obj);
      return Promise.resolve();
    }
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp10 = value;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              let closure_1 = tmp;
              state = undefined;
              state = state.getState();
              state.setLoadingStarted(closure_0);
              const items = [];
              const intl = intl2.intl;
              intl.setLocale(closure_0);
              items.push();
              items.push(_asyncToGenerator(async () => {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        closure_0 = tmp3;
                        c1 = 1;
                        const obj5 = closure_0(c2[5]);
                        c2 = 1;
                        const obj6 = { value: obj5.preloadAllIntlMessageFiles(), done: false };
                        return obj6;
                      }
                    } else if (1 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj7 = { value, done: true };
                        return obj7;
                      } else {
                        c1 = 2;
                        const obj2 = closure_0(c2[6]);
                        c2 = 1;
                        const obj8 = { value: obj2.loadAllMessagesInLocale(closure_128_0), done: false };
                        return obj8;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp10) {
                    c2 = 3;
                    throw tmp10;
                  }
                }
              })());
              locale.setLocale(closure_0);
              items.push(locale.loadPromise);
              items.push(loadDateFnsLocale(closure_0));
              items.push(loadFormatJsLocale(closure_0));
              items.push(setMomentLocale(closure_0));
              items.push(sentryLocale(closure_0));
              c2 = 1;
              c3 = 1;
              let obj4 = { value: allPromises.catch((error) => state.setLoadingFailed(error, closure_0)), done: false };
              allPromises = Promise.all(items);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            state.setLoadingSucceeded(closure_0);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _loadDateFnsLocale() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
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
            state = undefined;
            closure_1 = undefined;
            state = state.getState();
            const tmp18 = dateFnsLocales.dateFnsLocales[closure_0];
            if (null != tmp18) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: tmp18(), done: false };
              return obj4;
            } else {
              state.setLocaleData(_modDef2118);
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = value;
          state.setLocaleData(closure_1);
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _loadFormatJsLocale() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const tmp7 = formatjs.formatjsLocales[closure_0];
            if (null != tmp7) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: tmp7(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setMomentLocale() {
  obj = _asyncToGenerator(async (arg0) => {
    let length;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let closure_2;
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
            closure_1 = undefined;
            closure_2 = undefined;
            const tmp32 = moment.momentLocales[closure_0];
            if (null != tmp32) {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp32(), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        closure_1 = [];
        let str = "nb";
        if ("no" !== closure_0) {
          str = closure_0;
        }
        closure_2 = str.split("-");
        if (closure_2.length > 0) {
          do {
            let arr = closure_1.push(closure_2.join("-"));
            let arr3 = closure_2.pop();
            length = closure_2.length;
          } while (length > 0);
        }
        closure_1.push("en-US");
        const obj2 = closure_130_0(closure_130_2[10]);
        obj2.locale(closure_1);
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp25) {
        c4 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
const withEqualityFn = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj = {
    isLoading: false,
    inProgressLocale: "Boolean",
    error: "unicodeVersion",
    localeData: _modDef2118,
    setLoadingStarted(inProgressLocale) {
      obj = { isLoading: true, inProgressLocale };
      return closure_0(obj);
    },
    setLoadingSucceeded(arg0) {
      if (closure_1().inProgressLocale === arg0) {
        closure_0({ isLoading: false, inProgressLocale: "Boolean", error: "unicodeVersion" });
      }
    },
    setLoadingFailed(error, arg1) {
      if (closure_1().inProgressLocale === arg1) {
        obj = { isLoading: false, inProgressLocale: "Array", error };
        closure_0(obj);
      }
    },
    setLocaleData(localeData) {
      obj = { localeData };
      closure_0(obj);
    }
  };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(localeData) {
      return localeData.localeData;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp4 = withEqualityFn(first);
  if (tmp4 == null) {
    tmp4 = _modDef2118;
  }
  return tmp4;
}) : (() => {
  let tmp = withEqualityFn((localeData) => localeData.localeData);
  if (tmp == null) {
    tmp = _modDef2118;
  }
  return tmp;
});
const result = size.fileFinishedImporting("intl/IntlLoaderStore.tsx");

export const useIntlLoaderStore = withEqualityFn;
export const subscribeToIntlLoadingSuccess = function subscribeToIntlLoadingSuccess(arg0) {
  let closure_0 = arg0;
  return withEqualityFn.subscribe((inProgressLocale, inProgressLocale2) => {
    const tmp = null != inProgressLocale2.inProgressLocale && null == inProgressLocale.inProgressLocale && null == inProgressLocale.error;
    if (tmp) {
      closure_0(inProgressLocale2.inProgressLocale);
    }
  });
};
export const setAppLocale = function setAppLocale() {
  return obj(...arguments);
};
export const useLocaleData = tmp3;