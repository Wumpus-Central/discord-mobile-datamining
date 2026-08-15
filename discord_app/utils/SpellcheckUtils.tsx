// discord_app/utils/SpellcheckUtils.tsx
import closure_3 from "set";
import set from "set";
import set from "set";
import { set } from "../lib/DiscordNative.tsx";
import { set } from "PlatformUtils.tsx";

const require = arg1;
function _setEnabled() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_1 = tmp2;
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_5;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _setEnabled = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_5;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _setLearnedWords = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp5;
              let misspelled = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              misspelled = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = c5;
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            misspelled = arg1;
            let isMisspelledResult = null != misspelled;
            if (isMisspelledResult) {
              isMisspelledResult = misspelled.isMisspelled(closure_0, flag);
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = isMisspelledResult;
            return obj;
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _isMisspelled = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_4 = tmp5;
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
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
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
  const _getCorrections = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let cachedMisspelling2 = tmp5;
              let cachedMisspelling = tmp2;
              let num11;
              if (num11 === undefined) {
                num11 = 5;
              }
              cachedMisspelling = undefined;
              cachedMisspelling2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_5;
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            cachedMisspelling = arg1;
            if (null == cachedMisspelling) {
              const obj4 = { misspelledWord: "", corrections: null };
              obj4[1] = [];
              c4 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = obj4;
              return obj5;
            } else {
              cachedMisspelling2 = cachedMisspelling.getCachedMisspelling();
              obj = { misspelledWord: null, corrections: null };
              obj[0] = cachedMisspelling2.misspelledWord;
              const corrections = cachedMisspelling2.corrections;
              obj[1] = corrections.slice(0, num11);
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = obj;
              return obj6;
            }
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getCachedMisspelling = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_1 = tmp2;
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_5;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _replaceWithCorrection = tmp;
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
  const importDefaultResult = require("set");
  let spellCheck;
  if (importDefaultResult != null) {
    spellCheck = importDefaultResult.spellCheck;
  }
  set = null != spellCheck;
}
let promise = null;
if (set) {
  promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const resolved = Promise.resolve();
    resolved.then(() => outer1_4(() => callback(outer1_0(outer1_2[4]).install())));
  });
}
let c6 = null;
if (promise != null) {
  promise.then((arg0) => {
    let closure_6 = arg0;
  });
}
function isSupported() {
  let isDesktopResult = set.isDesktop();
  if (isDesktopResult) {
    const tmp4 = set;
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
  const tmp3 = set;
  let spellCheck;
  if (tmp3 != null) {
    spellCheck = tmp3.spellCheck;
  }
  if (null != spellCheck) {
    spellCheck = set.spellCheck;
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