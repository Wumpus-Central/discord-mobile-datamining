// discord_app/intl/IntlLoaderStore.tsx
import codeDefault from "../../_runtime/01997_code.js";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import identity from "../../_runtime/00697_identity.js";

const require = arg1;
function _setAppLocale() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function* (arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let state = tmp2;
              state = undefined;
              state = closure_1_4.getState();
              state.setLoadingStarted(callback);
              const items = [];
              const intl = callback(table[3]).intl;
              intl.setLocale(callback);
              items.push();
              items.push(
                v0(function* () {
                  if (dependencyMap === 2) {
                    dependencyMap = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      dependencyMap = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          dependencyMap = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          dependencyMap = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          closure_0 = tmp4;
                          c1 = 1;
                          dependencyMap = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = closure_1_0(2007).preloadAllIntlMessageFiles();
                          return obj1;
                        }
                      } else if (1 === tmp4) {
                        if (arg0 === 1) {
                          dependencyMap = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          dependencyMap = 3;
                          const obj2 = { value: null, done: true };
                          obj2[0] = arg1;
                          return obj2;
                        } else {
                          obj1 = closure_1_0(1273);
                          c1 = 2;
                          dependencyMap = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = obj1.loadAllMessagesInLocale(closure_0);
                          return obj3;
                        }
                      } else if (arg0 === 1) {
                        dependencyMap = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        dependencyMap = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
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
                })(),
              );
              items.push(
                (function loadDateFnsLocale(closure_0) {
                  const self = this;
                  const apply = closure_6.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(callback),
              );
              items.push(
                (function loadFormatJsLocale(closure_0) {
                  const self = this;
                  const apply = closure_7.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(callback),
              );
              items.push(
                (function setMomentLocale(closure_0) {
                  const self = this;
                  const apply = closure_8.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(callback),
              );
              items.push(
                (function sentryLocale(closure_0) {
                  callback(table[10]).default.setTags({ locale: closure_0 });
                  return Promise.resolve();
                })(callback),
              );
              table = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items).catch((arg0) => state.setLoadingFailed(arg0, closure_0));
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            state.setLoadingSucceeded(callback);
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          v0 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_5 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadDateFnsLocale() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function* (arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              let state;
              closure_1 = undefined;
              state = closure_1_4.getState();
              const tmp21 = callback(table[6]).dateFnsLocales[state];
              if (null != tmp21) {
                table = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp21();
                return obj1;
              } else {
                state.setLocaleData(closure_1_1(tmp20[2]));
                c3 = 3;
              }
              tmp20 = table;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            state.setLocaleData(closure_1);
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadFormatJsLocale() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const tmp8 = callback(table[7]).formatjsLocales[callback];
              if (null != tmp8) {
                table = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp8();
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          c1 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setMomentLocale() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
      let length;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let arr2 = tmp2;
              let arr = tmp3;
              arr = undefined;
              arr2 = undefined;
              const tmp35 = callback(closure_1_2[8]).momentLocales[callback];
              if (null != tmp35) {
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp35();
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          arr = [];
          let str = "nb";
          if ("no" !== callback) {
            str = callback;
          }
          arr2 = str.split("-");
          if (arr2.length > 0) {
            do {
              let tmp10 = arr;
              let tmp11 = arr;
              let tmp12 = arr2;
              arr = arr.push(arr2.join("-"));
              let tmp14 = arr2;
              arr = arr2.pop();
              let tmp16 = arr;
              let tmp17 = arr2;
              length = arr2.length;
            } while (length > 0);
          }
          arr.push("en-US");
          obj1 = callback(arr2[9]);
          obj1.locale(arr);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp26) {
          c4 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const withEqualityFn = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  importDefault = arg1;
  return {
    isLoading: false,
    inProgressLocale: "Boolean",
    error: "call",
    localeData: codeDefault,
    setLoadingStarted(closure_0) {
      return callback({ isLoading: true, inProgressLocale: closure_0 });
    },
    setLoadingSucceeded(closure_0) {
      if (callback2().inProgressLocale === closure_0) {
        callback({ isLoading: false, inProgressLocale: "Boolean", error: "call" });
      }
    },
    setLoadingFailed(arg0, closure_0) {
      if (callback2().inProgressLocale === closure_0) {
        const obj = { isLoading: false, inProgressLocale: "Array", error: "Bunny" };
        obj[2] = arg0;
        callback(obj);
      }
    },
    setLocaleData(closure_1) {
      callback({ localeData: closure_1 });
    },
  };
});
const result = require("set").fileFinishedImporting("intl/IntlLoaderStore.tsx");

export const useIntlLoaderStore = withEqualityFn;
export const subscribeToIntlLoadingSuccess = function subscribeToIntlLoadingSuccess(arg0) {
  closure_0 = arg0;
  return withEqualityFn.subscribe((inProgressLocale, inProgressLocale2) => {
    if (tmp) {
      callback(inProgressLocale2.inProgressLocale);
    }
  });
};
export const setAppLocale = function setAppLocale() {
  const self = this;
  const apply = _setAppLocale.apply;
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
    tmp = codeDefault;
  }
  return tmp;
};
