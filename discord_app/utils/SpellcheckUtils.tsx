// discord_app/utils/SpellcheckUtils.tsx
import PlatformUtils2 from "PlatformUtils.tsx";
import DiscordNativeDefault from "../lib/DiscordNative.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_7 = async function _setEnabled(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value, done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_1 = value;
        if (null != closure_129_1) {
          closure_129_1.enabled = closure_129_0;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c3 = tmp;
      throw tmp13;
    }
  }
};
let closure_8 = async function _setLearnedWords(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value, done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_1 = value;
        if (null != closure_129_1) {
          closure_129_1.setLearnedWords(closure_129_0);
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp14) {
      c3 = tmp;
      throw tmp14;
    }
  }
};
let closure_9 = async function _isMisspelled(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          closure_130_2 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 2;
          c5 = 1;
          const obj2 = { value: closure_131_5, done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_130_2 = value;
        let isMisspelledResult = null != closure_130_2;
        if (isMisspelledResult) {
          isMisspelledResult = closure_130_2.isMisspelled(closure_130_0, closure_130_1);
        }
        c5 = 3;
        obj = { value: isMisspelledResult, done: true };
        return obj;
      }
    } catch (tmp16) {
      c5 = tmp;
      throw tmp16;
    }
  }
};
let closure_10 = async function _getCorrections(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          let num10 = closure_2;
          if (closure_2 === undefined) {
            num10 = 5;
          }
          closure_131_2 = num10;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c5 = 2;
          c6 = 1;
          const obj2 = { value: closure_132_5, done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_131_3 = value;
        if (null == closure_131_3) {
          const items = [];
        } else {
          const correctionsForMisspelling = closure_131_3.getCorrectionsForMisspelling(closure_131_0, closure_131_1);
          const substr = correctionsForMisspelling.slice(0, closure_131_2);
        }
        c6 = 3;
      }
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
let closure_11 = async function _getCachedMisspelling() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let num11 = closure_0;
          if (closure_0 === undefined) {
            num11 = 5;
          }
          closure_129_0 = num11;
          closure_129_1 = undefined;
          let cachedMisspelling;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c3 = 2;
          c4 = 1;
          const obj2 = { value: closure_130_5, done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_1 = value;
        if (null == closure_129_1) {
          const obj4 = { misspelledWord: "", corrections: [] };
          c4 = 3;
          const obj5 = { value: obj4, done: true };
          return obj5;
        } else {
          cachedMisspelling = closure_129_1.getCachedMisspelling();
          obj = { misspelledWord: cachedMisspelling.misspelledWord, corrections: null };
          const corrections = cachedMisspelling.corrections;
          obj.corrections = corrections.slice(0, closure_129_0);
          c4 = 3;
          const obj6 = { value: obj, done: true };
          return obj6;
        }
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
let closure_12 = async function _replaceWithCorrection(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value, done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_1 = value;
        if (null != closure_129_1) {
          closure_129_1.replaceMisspelling(closure_129_0);
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp14) {
      c3 = tmp;
      throw tmp14;
    }
  }
};
fn(5558).addPostConnectionCallback;
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isDesktop();
if (PlatformUtils) {
  const importDefaultResult = DiscordNativeDefault;
  let spellCheck;
  if (importDefaultResult != null) {
    spellCheck = importDefaultResult.spellCheck;
  }
  PlatformUtils = null != spellCheck;
}
let promise = null;
if (PlatformUtils) {
  promise = new Promise((arg0) => {
    closure_0 = arg0;
    const resolved = Promise.resolve();
    resolved.then(() => addPostConnectionCallback(() => closure_1_0(closure_0(dependencyMap[4]).install())));
  });
}
let global = null;
if (promise != null) {
  promise.then((result) => {
    global = result;
  });
}
function isSupported() {
  let isDesktopResult = PlatformUtils2.isDesktop();
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
const size = fn(2);
const result = size.fileFinishedImporting("utils/SpellcheckUtils.tsx");

export { isSupported };
export const setEnabled = function setEnabled() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setLearnedWords = function setLearnedWords() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isMisspelled = function isMisspelled() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCorrections = function getCorrections() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCachedMisspelling = function getCachedMisspelling() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const replaceWithCorrection = function replaceWithCorrection() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setAppLocale = function setAppLocale(arg0) {
  if (null != global) {
    global.setAppLocale(arg0);
  }
};
export const addResultListener = function addResultListener(arg0) {
  const tmp3 = DiscordNativeDefault;
  let spellCheck;
  if (tmp3 != null) {
    spellCheck = tmp3.spellCheck;
  }
  if (null != spellCheck) {
    spellCheck = DiscordNativeDefault.spellCheck;
    let fn2 = spellCheck.on("spellcheck-result", arg0);
    if (fn2 == null) {
      fn2 = () => {};
    }
    let fn = fn2;
  } else {
    fn = () => {};
  }
  return fn;
};
