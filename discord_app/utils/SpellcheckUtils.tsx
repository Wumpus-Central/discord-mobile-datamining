// === Module 5568: _setEnabled ===

// Module 5568 (_setEnabled)
import set2 from "set" /* 500 */;
import setDefault from "set" /* 4104 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import set from "set" /* 500 */;

require = arg1;
function _setEnabled() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_5;
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            if (null != closure_1) {
              closure_1.enabled = closure_0;
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
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
function _setLearnedWords() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let learnedWords = tmp2;
              learnedWords = undefined;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_5;
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            learnedWords = arg1;
            if (null != learnedWords) {
              learnedWords.setLearnedWords(closure_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
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
function _isMisspelled() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      let misspelled = tmp2;
      if (flag === undefined) {
        flag = false;
      }
      yield "PX_16";
      misspelled = yield c5;
      let isMisspelledResult = null != misspelled;
      if (isMisspelledResult) {
        isMisspelledResult = misspelled.isMisspelled(closure_0, flag);
      }
      return isMisspelledResult;
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCorrections() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              let correctionsForMisspelling = tmp2;
              let flag;
              let num10;
              if (flag === undefined) {
                flag = false;
              }
              if (num10 === undefined) {
                num10 = 5;
              }
              correctionsForMisspelling = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = c5;
              return obj2;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            correctionsForMisspelling = arg1;
            if (null == correctionsForMisspelling) {
              const items = [];
            } else {
              correctionsForMisspelling = correctionsForMisspelling.getCorrectionsForMisspelling(closure_0, flag);
              const substr = correctionsForMisspelling.slice(0, num10);
            }
            c6 = 3;
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCachedMisspelling() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      let cachedMisspelling = tmp2;
      if (num11 === undefined) {
        num11 = 5;
      }
      yield "PX_16";
      cachedMisspelling = yield closure_5;
      if (null == cachedMisspelling) {
        const obj4 = { misspelledWord: "", corrections: null };
        obj4[1] = [];
        return obj4;
      }
      const cachedMisspelling2 = cachedMisspelling.getCachedMisspelling();
      const obj = { misspelledWord: null, corrections: null };
      obj[0] = cachedMisspelling2.misspelledWord;
      const corrections = cachedMisspelling2.corrections;
      obj[1] = corrections.slice(0, num11);
      return obj;
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _replaceWithCorrection() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_5;
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            if (null != closure_1) {
              closure_1.replaceMisspelling(closure_0);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
require("processCallbacks").addPostConnectionCallback;
set = set.isDesktop();
if (set) {
  const importDefaultResult = setDefault;
  let spellCheck;
  if (importDefaultResult != null) {
    spellCheck = importDefaultResult.spellCheck;
  }
  set = null != spellCheck;
}
let promise = null;
if (set) {
  promise = new Promise((arg0) => {
    closure_0 = arg0;
    const resolved = Promise.resolve();
    resolved.then(() => closure_1_4(() => callback(closure_1_0(closure_1_2[4]).install())));
  });
}
let c6 = null;
if (promise != null) {
  promise.then((arg0) => {
    closure_6 = arg0;
  });
}
function isSupported() {
  let isDesktopResult = set2.isDesktop();
  if (isDesktopResult) {
    const tmp4 = setDefault;
    let spellCheck;
    if (tmp4 != null) {
      spellCheck = tmp4.spellCheck;
    }
    isDesktopResult = null != spellCheck;
  }
  return isDesktopResult;
}
const result = set.fileFinishedImporting("utils/SpellcheckUtils.tsx");

export { isSupported };
export const setEnabled = function setEnabled() {
  const self = this;
  const apply = _setEnabled.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setLearnedWords = function setLearnedWords() {
  const self = this;
  const apply = _setLearnedWords.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isMisspelled = function isMisspelled() {
  const self = this;
  const apply = _isMisspelled.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCorrections = function getCorrections() {
  const self = this;
  const apply = _getCorrections.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCachedMisspelling = function getCachedMisspelling() {
  const self = this;
  const apply = _getCachedMisspelling.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const replaceWithCorrection = function replaceWithCorrection() {
  const self = this;
  const apply = _replaceWithCorrection.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setAppLocale = function setAppLocale(arg0) {
  if (null != _null) {
    _null.setAppLocale(arg0);
  }
};
export const addResultListener = function addResultListener(arg0) {
  const tmp3 = setDefault;
  let spellCheck;
  if (tmp3 != null) {
    spellCheck = tmp3.spellCheck;
  }
  if (null != spellCheck) {
    spellCheck = setDefault.spellCheck;
    let fn2 = spellCheck.on("spellcheck-result", arg0);
    if (fn2 == null) {
      fn2 = () => {

      };
    }
    let fn = fn2;
  } else {
    fn = () => {

    };
  }
  return fn;
};