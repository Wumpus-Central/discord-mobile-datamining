// === Module 5954: SpellcheckUtils ===

// Module 5954 (SpellcheckUtils)
import DiscordNativeDefault from "DiscordNative" /* 4496 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5955 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _setEnabled() {
  let value;
  obj = _asyncToGenerator(async (enabled) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
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
              return { value, done: true };
            } else {
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              return { value, done: false };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            if (null != closure_1) {
              closure_1.enabled = enabled;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _setLearnedWords() {
  let value;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let learnedWords;
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
            learnedWords = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value, done: false };
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
          learnedWords = value;
          if (null != learnedWords) {
            learnedWords.setLearnedWords(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isMisspelled() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let misspelled;
        let flag;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            misspelled = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            misspelled = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 2;
            c5 = 1;
            const obj5 = { value: closure_131_5, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          misspelled = value;
          const isMisspelledResult = null != misspelled && misspelled.isMisspelled(closure_0, flag);
          c5 = 3;
          obj = { value: isMisspelledResult, done: true };
          return obj;
        }
      } catch (tmp15) {
        c5 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getCorrections() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let correctionsForMisspelling;
        let num10;
        let flag;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            correctionsForMisspelling = tmp;
            num10 = undefined;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            num10 = closure_2;
            if (closure_2 === undefined) {
              num10 = 5;
            }
            correctionsForMisspelling = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c5 = 2;
            c6 = 1;
            const obj5 = { value: closure_132_5, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let items;
          correctionsForMisspelling = value;
          if (null == correctionsForMisspelling) {
            items = [];
          } else {
            correctionsForMisspelling = correctionsForMisspelling.getCorrectionsForMisspelling(closure_0, flag);
            items = correctionsForMisspelling.slice(0, num10);
          }
          c6 = 3;
          obj = { value: items, done: true };
          return obj;
        }
      } catch (tmp15) {
        c6 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getCachedMisspelling() {
  obj = _asyncToGenerator(async () => {
    let closure_2;
    let corrections;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let cachedMisspelling2;
        let cachedMisspelling;
        let num11;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            cachedMisspelling2 = tmp4;
            cachedMisspelling = tmp;
            num11 = closure_0;
            if (closure_0 === undefined) {
              num11 = 5;
            }
            cachedMisspelling = undefined;
            cachedMisspelling2 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 2;
            c4 = 1;
            const obj5 = { value: closure_130_5, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          cachedMisspelling = value;
          if (null == cachedMisspelling) {
            const obj7 = { misspelledWord: "", corrections: [] };
            c4 = 3;
            const obj8 = { value: obj7, done: true };
            return obj8;
          } else {
            cachedMisspelling2 = cachedMisspelling.getCachedMisspelling();
            obj = { misspelledWord: cachedMisspelling2.misspelledWord, corrections: corrections.slice(0, num11) };
            corrections = cachedMisspelling2.corrections;
            c4 = 3;
            const obj9 = { value: obj, done: true };
            return obj9;
          }
        }
      } catch (tmp11) {
        c4 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _replaceWithCorrection() {
  let value;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_0 = arg0;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
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
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value, done: false };
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
          tmp = value;
          if (null != tmp) {
            tmp.replaceMisspelling(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isDesktop();
if (PlatformUtils) {
  const importDefaultResult = DiscordNativeDefault;
  let tmp4 = null;
  let spellCheck;
  if (importDefaultResult != null) {
    spellCheck = importDefaultResult.spellCheck;
  }
  PlatformUtils = null != spellCheck;
}
let promise = null;
if (PlatformUtils) {
  const self = this;
  const self2 = this;
  promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const resolved = Promise.resolve();
    resolved.then(() => addPostConnectionCallback(() => {
      obj = closure_0(dependencyMap[4]);
      return closure_1_0(obj.install());
    }));
  });
}
let c6 = null;
if (promise != null) {
  promise.then((result) => {
    let c6 = result;
  });
}
function isSupported() {
  obj = PlatformUtils;
  let isDesktopResult = obj.isDesktop();
  if (isDesktopResult) {
    const tmp4 = DiscordNativeDefault;
    let spellCheck;
    if (tmp4 != null) {
      spellCheck = tmp4.spellCheck;
    }
    isDesktopResult = null != spellCheck;
  }
  return isDesktopResult;
}
const result = size.fileFinishedImporting("utils/SpellcheckUtils.tsx");

export { isSupported };
export const setEnabled = function setEnabled() {
  return obj(...arguments);
};
export const setLearnedWords = function setLearnedWords() {
  return obj(...arguments);
};
export const isMisspelled = function isMisspelled() {
  return obj(...arguments);
};
export const getCorrections = function getCorrections() {
  return obj(...arguments);
};
export const getCachedMisspelling = function getCachedMisspelling() {
  return obj(...arguments);
};
export const replaceWithCorrection = function replaceWithCorrection() {
  return obj(...arguments);
};
export const setAppLocale = function setAppLocale(arg0) {
  if (null != appLocale) {
    appLocale.setAppLocale(arg0);
  }
};
export const addResultListener = function addResultListener(arg0) {
  let fn;
  const tmp3 = DiscordNativeDefault;
  let spellCheck1;
  if (tmp3 != null) {
    spellCheck1 = tmp3.spellCheck;
  }
  if (null != spellCheck1) {
    const spellCheck = DiscordNativeDefault.spellCheck;
    let fn2 = spellCheck.on("spellcheck-result", arg0);
    if (fn2 == null) {
      fn2 = () => {

      };
    }
    fn = fn2;
  } else {
    fn = () => {

    };
  }
  return fn;
};