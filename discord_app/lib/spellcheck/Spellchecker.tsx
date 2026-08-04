// discord_app/lib/spellcheck/Spellchecker.tsx
import set from "set";
import _slicedToArray from "_slicedToArray";
import _getSystemLocale from "_getSystemLocale";
import importDefaultResult from "set";
import importDefaultResult1 from "apply";

const require = arg1;
function normalizeLocale(arg0) {
  let str = importDefault(5198)[arg0];
  if (str == null) {
    str = arg0;
  }
  const parsed = require(5199) /* parse */.parse(str.replace(/[_-]/g, "-"));
  if (null != parsed) {
    if (null != parsed.langtag.language) {
      if (null != parsed.langtag.region) {
        const langtag = parsed.langtag;
        const formatted = langtag.language.language.toLowerCase();
        const _HermesInternal = HermesInternal;
        return "" + formatted + "-" + langtag.region.toUpperCase();
      }
    }
  }
  tmp2.error("" + str + " is not a valid locale.");
}
function _install() {
  const self = this;
  const tmp = callback(function*() {
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
            const table = tmp2;
            let closure_1 = 0;
            let lib;
            closure_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_7.getAvailableDictionaries();
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          lib = arg1;
          if (arg1 == null) {
            lib = [];
          }
          const mapped = lib.map(closure_8);
          lib = mapped.filter(lib(table[10]).isNotNullish);
          closure_1 = new closure_9(lib);
          (function attachToInput(closure_1) {
            let closure_0 = closure_1;
            if (null != document.body) {
              const _document = document;
              const listener = body.addEventListener("beforeinput", (target) => outer1_10(closure_0, target.target), true);
            }
          })(closure_1);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1;
          return obj;
        }
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  });
  const _install = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = new require("timestamp")("Spellchecker");
let spellCheck;
if (importDefaultResult != null) {
  spellCheck = importDefaultResult.spellCheck;
}
class Spellchecker {
  constructor(arg0) {
    closure_0 = global;
    obj = Object.create(new.target.prototype);
    _install = obj;
    obj._enabled = true;
    obj.misspelledWord = "";
    obj.corrections = [];
    str = _install.locale;
    tmp = _install(str.split("-"), 2);
    first = tmp[0];
    locale = first;
    obj.regionPreference = tmp[1];
    getAvailableLanguages = obj.getAvailableLanguages(global);
    tmp3 = new require("language")(first, (arg0) => {
      const combined = "" + arg0 + "-" + obj.regionPreference;
      if (-1 !== arr.indexOf(combined)) {
        obj.setLocale(combined);
      } else {
        let tmp3 = dependencyMap[arg0];
        if (tmp3 == null) {
          tmp3 = first(5198)[first];
        }
        if (null != tmp3) {
          obj.setLocale(tmp3);
        }
      }
    });
    obj.languageDetector = tmp3;
    onResult = spellCheck.on("spellcheck-result", (arg0, arg1) => {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      let items = arg1;
      obj.misspelledWord = str;
      if (arg1 == null) {
        items = [];
      }
      obj.corrections = items;
    });
    return obj;
  }
}
const prototype = Spellchecker.prototype;
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return this._enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "enabled", {
  get: undefined,
  set: function enabled(_enabled) {
    this._enabled = _enabled;
  }
});
prototype["setLearnedWords"] = function setLearnedWords(arg0) {
  spellCheck.setLearnedWords(arg0);
};
prototype["setLocale"] = function setLocale(arg0) {
  let closure_0 = arg0;
  const setLocaleResult = spellCheck.setLocale(arg0);
  if (setLocaleResult != null) {
    setLocaleResult.then((arg0) => {
      let str = "(unavailable)";
      const combined = "Switching to " + closure_0;
      if (arg0) {
        str = "(available)";
      }
      outer1_6.info(combined, str);
    });
  }
};
prototype["setAppLocale"] = function setAppLocale(arg0) {
  this.regionPreference = arg0.split("-")[1];
};
prototype["detectLanguage"] = function detectLanguage(textContent) {
  if (this.enabled) {
    const languageDetector = tmp.languageDetector;
    languageDetector.process(textContent);
  }
};
prototype["getAvailableLanguages"] = function getAvailableLanguages(arr) {
  const obj = {};
  const item = arr.forEach((arg0) => {
    const first = outer1_4(arg0.split("-"), 1)[0];
    let tmp3 = obj[first];
    if (tmp3 == null) {
      tmp3 = arg0;
    }
    obj[first] = tmp3;
  });
  return obj;
};
prototype["isMisspelled"] = function isMisspelled(arg0) {
  let tmp2 = "" !== this.misspelledWord;
  if (tmp2) {
    tmp2 = arg0 === tmp.misspelledWord;
  }
  return tmp2;
};
prototype["getCorrectionsForMisspelling"] = function getCorrectionsForMisspelling(closure_0, flag) {
  return this.isMisspelled(closure_0, flag) ? this.corrections : [];
};
prototype["getCachedMisspelling"] = function getCachedMisspelling() {
  return { misspelledWord: this.misspelledWord, corrections: this.corrections };
};
prototype["replaceMisspelling"] = function replaceMisspelling(closure_0) {
  spellCheck.replaceMisspelling(closure_0);
};
let tmp2 = new require("timestamp")("Spellchecker");
let closure_10 = require("apply").debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      let tmp2Result = tmp2(1859);
      if (!tmp2Result.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        tmp2Result = tmp2(1859);
        if (tmp2Result.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
      }
    }
    textContent = hasAttribute.value;
    obj = require(1859) /* set */;
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
const result = require("_getSystemLocale").fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

export { Spellchecker };
export const install = function install() {
  const self = this;
  const apply = _install.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};