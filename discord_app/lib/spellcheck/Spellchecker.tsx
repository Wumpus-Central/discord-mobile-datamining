// === Module 5560: Spellchecker ===

// Module 5560 (Spellchecker)
import LoggerDefault from "Logger" /* 3 */;
import DOMUtils from "DOMUtils" /* 1928 */;
import fallbackLocalesDefault from "fallbackLocales" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import DiscordNative from "DiscordNative" /* 4182 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_10 = async function _install() {
  closure_2 = tmp2;
  closure_1 = tmp3;
  await availableDictionaries.getAvailableDictionaries();
  closure_0 = value;
  if (value == null) {
    closure_0 = [];
  }
  closure_129_0 = closure_0;
  closure_129_1 = new closure_130_8(closure_129_0);
  if (!closure_129_1.usesMultilang) {
    (function attachToInput(arg0) {
      closure_0 = arg0;
      if (null != document.body) {
        const _document = document;
        const listener = body.addEventListener("beforeinput", (event) => closure_2_9(closure_0, event.target), true);
      }
    })(closure_129_1);
  }
  return closure_129_1;
};
const logger = new LoggerDefault("Spellchecker");
let spellCheck;
if (DiscordNative != null) {
  spellCheck = DiscordNative.spellCheck;
}
class Spellchecker {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_2 = obj;
    obj.rawLocaleByNormalized = {};
    obj.languageDetector = null;
    obj.availableLanguagesByLanguage = {};
    obj._enabled = true;
    obj.misspelledWord = "";
    obj.corrections = [];
    items = [];
    closure_0 = items;
    item = global.forEach((item) => {
      let str = "nb";
      if ("no" !== item) {
        str = item;
      }
      let str2 = fallbackLocalesDefault[str];
      if (str2 == null) {
        str2 = str;
      }
      obj = _mod5562;
      const parsed = obj.parse(str2.replace(/[_-]/g, "-"));
      if (null != parsed) {
        if (null != parsed.langtag.language) {
          if (null != parsed.langtag.region) {
            const langtag = parsed.langtag;
            const formatted = langtag.language.language.toLowerCase();
            const _HermesInternal = HermesInternal;
            const combined = "" + formatted + "-" + langtag.region.toUpperCase();
          }
          if (null != combined) {
            items.push(combined);
            let tmp10 = obj.rawLocaleByNormalized[combined];
            if (tmp10 == null) {
              tmp10 = item;
            }
            obj.rawLocaleByNormalized[combined] = tmp10;
          }
        }
      }
      logger.error("" + str2 + " is not a valid locale.");
    });
    obj.availableLocales = items;
    tmp2 = closure_2;
    obj2 = closure_0(closure_2[7]);
    obj.useMultilang = obj2.isElectronMultilangSpellcheckEnabled();
    obj.availableLanguagesByLanguage = obj.buildLanguageIndex(items);
    if (obj.useMultilang) {
      tmp13 = closure_5;
      applyLanguagesResult = obj.applyLanguages(closure_5.locale);
    } else {
      tmp3 = closure_5;
      str = closure_5.locale;
      str2 = "-";
      tmp4 = closure_4;
      num = 2;
      tmp5 = closure_4(str.split("-"), 2);
      first = tmp5[0];
      closure_1 = first;
      obj.regionPreference = tmp5[1];
      tmp7 = closure_1;
      tmp8 = new.target;
      tmp9 = new.target;
      tmp10 = first;
      tmp11 = new closure_1(tmp2[8])(first, (arg0) => {
        const combined = "" + arg0 + "-" + obj.regionPreference;
        const availableLocales = obj.availableLocales;
        if (-1 !== availableLocales.indexOf(combined)) {
          obj.applyLocale(combined);
        } else {
          let tmp2 = obj.availableLanguagesByLanguage[arg0];
          if (tmp2 == null) {
            tmp2 = fallbackLocalesDefault[first];
          }
          if (null != tmp2) {
            obj.applyLocale(tmp2);
          }
        }
      });
      tmp12 = tmp11;
      obj.languageDetector = tmp11;
    }
    onResult = spellCheck.on("spellcheck-result", (arg0, arg1) => {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      items = arg1;
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
Object.defineProperty(prototype, "usesMultilang", {
  get: function usesMultilang() {
    return this.useMultilang;
  },
  set: undefined
});
prototype["setLearnedWords"] = function setLearnedWords(arg0) {
  spellCheck.setLearnedWords(arg0);
};
prototype["setAppLocale"] = function setAppLocale(locale) {
  const self = this;
  if (this.useMultilang) {
    self.applyLanguages(locale);
  } else {
    self.regionPreference = locale.split("-")[1];
  }
};
prototype["detectLanguage"] = function detectLanguage(textContent) {
  const self = this;
  const useMultilang = this.useMultilang;
  let enabled = !useMultilang;
  if (!useMultilang) {
    enabled = self.enabled;
  }
  if (enabled) {
    const languageDetector = self.languageDetector;
    if (languageDetector != null) {
      languageDetector.process(textContent);
    }
  }
};
prototype["isMisspelled"] = function isMisspelled(arg0) {
  let tmp2 = "" !== this.misspelledWord;
  if (tmp2) {
    tmp2 = arg0 === tmp.misspelledWord;
  }
  return tmp2;
};
prototype["getCorrectionsForMisspelling"] = function getCorrectionsForMisspelling(arg0, arg1) {
  return this.isMisspelled(arg0, arg1) ? this.corrections : [];
};
prototype["getCachedMisspelling"] = function getCachedMisspelling() {
  return { misspelledWord: this.misspelledWord, corrections: this.corrections };
};
prototype["replaceMisspelling"] = function replaceMisspelling(arg0) {
  spellCheck.replaceMisspelling(arg0);
};
prototype["applyLocale"] = function applyLocale(mapped1) {
  closure_0 = mapped1;
  const setLocaleResult = spellCheck.setLocale(mapped1);
  if (setLocaleResult != null) {
    setLocaleResult.then((result) => {
      let str = "(unavailable)";
      const combined = "Switching to " + closure_0;
      if (result) {
        str = "(available)";
      }
      logger.info(combined, str);
    });
  }
};
prototype["applyLanguages"] = function applyLanguages(locale) {
  const self = this;
  const items = [locale, ...navigator.languages];
  const mapped = items.map((item) => {
    let str = "nb";
    if ("no" !== item) {
      str = item;
    }
    let str2 = fallbackLocalesDefault[str];
    if (str2 == null) {
      str2 = str;
    }
    const parsed = _mod5562.parse(str2.replace(/[_-]/g, "-"));
    if (null != parsed) {
      if (null != parsed.langtag.language) {
        if (null != parsed.langtag.region) {
          const langtag = parsed.langtag;
          const formatted = langtag.language.language.toLowerCase();
          const _HermesInternal = HermesInternal;
          const combined = "" + formatted + "-" + langtag.region.toUpperCase();
        }
        if (null != combined) {
          const availableLocales = self.availableLocales;
          if (availableLocales.includes(combined)) {
            return combined;
          }
        }
        const str7 = _slicedToArray(item.replace(/_/g, "-").split("-"), 1)[0];
        let tmp10 = self.availableLanguagesByLanguage[str7.toLowerCase(str7)];
        if (tmp10 == null) {
          tmp10 = null;
        }
        return tmp10;
      }
    }
    logger.error("" + str2 + " is not a valid locale.");
  });
  const arr = Array.from(new Set(mapped.filter(mapped1(1369).isNotNullish)));
  if (0 !== arr.length) {
    mapped1 = arr.map((item) => {
      let tmp = self.rawLocaleByNormalized[item];
      if (tmp == null) {
        tmp = item;
      }
      return tmp;
    });
    if (null == spellCheck.setSpellCheckerLanguages) {
      let _HermesInternal2 = HermesInternal;
      logger.info("setSpellCheckerLanguages unavailable, falling back to single-locale: " + mapped1[0]);
      self.applyLocale(mapped1[0]);
    } else {
      const result = spellCheck.setSpellCheckerLanguages(mapped1);
      if (result != null) {
        result.then((result) => {
          const info = logger.info;
          if (result) {
            const _HermesInternal2 = HermesInternal;
            info("Spellcheck languages: " + mapped1.join(", "), "(applied)");
          } else {
            const _HermesInternal = HermesInternal;
            info("Failed to set spellcheck languages, falling back to single-locale: " + mapped1[0]);
            self.applyLocale(mapped1[0]);
          }
        });
      }
    }
  } else {
    let _HermesInternal = HermesInternal;
    logger.info("No spellcheck languages resolved from candidates: " + items.join(", "));
  }
  const set = new Set(mapped.filter(mapped1(1369).isNotNullish));
};
prototype["buildLanguageIndex"] = function buildLanguageIndex(items) {
  const obj = {};
  const item = items.forEach((item) => {
    const first = _slicedToArray(item.split("-"), 1)[0];
    let tmp3 = obj[first];
    if (tmp3 == null) {
      tmp3 = item;
    }
    obj[first] = tmp3;
  });
  return obj;
};
let closure_9 = apply.debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      let tmp2Result = DOMUtils;
      if (!tmp2Result.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        tmp2Result = DOMUtils;
        if (tmp2Result.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
      }
    }
    textContent = hasAttribute.value;
    obj = DOMUtils;
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
const size = fn(2);
let result = size.fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

export { Spellchecker };
export const install = function install() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};