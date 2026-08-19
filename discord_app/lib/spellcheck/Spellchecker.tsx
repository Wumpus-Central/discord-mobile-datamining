// discord_app/lib/spellcheck/Spellchecker.tsx
import timestampDefault from "../../modules/debug/Logger.tsx";
import set2 from "../../../discord_common/js/shared/utils/DOMUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _getSystemLocale from "../../modules/user_settings/LocaleStore.tsx";
import importDefaultResult from "../DiscordNative.tsx";
import importDefaultResult1 from "../../../_runtime/00012_apply.js";

require = fn;
function _install() {
  const self = this;
  const tmp = callback(function*() {
    closure_2 = tmp2;
    let usesMultilang = tmp3;
    closure_0 = yield closure_1_7.getAvailableDictionaries();
    if (arg1 == null) {
      closure_0 = [];
    }
    usesMultilang = new closure_8(closure_0);
    if (!usesMultilang.usesMultilang) {
      (function attachToInput(closure_1) {
        closure_0 = closure_1;
        if (null != document.body) {
          const _document = document;
          const listener = body.addEventListener("beforeinput", (event) => closure_1_9(closure_0, event.target), true);
        }
      })(usesMultilang);
    }
    return closure_1_1;
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
let closure_6 = new timestampDefault("Spellchecker");
let spellCheck;
if (importDefaultResult != null) {
  spellCheck = importDefaultResult.spellCheck;
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
    item = global.forEach((item, index) => {
      let str = "nb";
      if ("no" !== item) {
        str = item;
      }
      let str2 = first(obj[5])[str];
      if (str2 == null) {
        str2 = str;
      }
      obj = items(obj[6]);
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
      closure_1_6.error("" + str2 + " is not a valid locale.");
    });
    obj.availableLocales = items;
    tmp2 = closure_2;
    obj2 = require("apexExperiment");
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
      tmp11 = new require("language")(first, (arg0) => {
        const combined = "" + arg0 + "-" + obj.regionPreference;
        const availableLocales = obj.availableLocales;
        if (-1 !== availableLocales.indexOf(combined)) {
          obj.applyLocale(combined);
        } else {
          let tmp2 = obj.availableLanguagesByLanguage[arg0];
          if (tmp2 == null) {
            tmp2 = first(obj[5])[first];
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
prototype["getCorrectionsForMisspelling"] = function getCorrectionsForMisspelling(closure_0, flag) {
  return this.isMisspelled(closure_0, flag) ? this.corrections : [];
};
prototype["getCachedMisspelling"] = function getCachedMisspelling() {
  return { misspelledWord: this.misspelledWord, corrections: this.corrections };
};
prototype["replaceMisspelling"] = function replaceMisspelling(closure_0) {
  spellCheck.replaceMisspelling(closure_0);
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
      closure_1_6.info(combined, str);
    });
  }
};
prototype["applyLanguages"] = function applyLanguages(locale) {
  const self = this;
  const items = [locale, ...navigator.languages];
  const mapped = items.map((item, index) => {
    let str = "nb";
    if ("no" !== item) {
      str = item;
    }
    let str2 = self(dependencyMap[5])[str];
    if (str2 == null) {
      str2 = str;
    }
    const parsed = mapped1(dependencyMap[6]).parse(str2.replace(/[_-]/g, "-"));
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
        const str7 = closure_1_4(item.replace(/_/g, "-").split("-"), 1)[0];
        let tmp10 = self.availableLanguagesByLanguage[str7.toLowerCase(str7)];
        if (tmp10 == null) {
          tmp10 = null;
        }
        return tmp10;
      }
    }
    closure_1_6.error("" + str2 + " is not a valid locale.");
    const obj = mapped1(dependencyMap[6]);
  });
  const arr = Array.from(new Set(mapped.filter(mapped1(1370).isNotNullish)));
  if (0 !== arr.length) {
    mapped1 = arr.map((item, index) => {
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
          const info = closure_1_6.info;
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
  const set = new Set(mapped.filter(mapped1(1370).isNotNullish));
};
prototype["buildLanguageIndex"] = function buildLanguageIndex(items) {
  const obj = {};
  const item = items.forEach((item, index) => {
    const first = closure_1_4(item.split("-"), 1)[0];
    let tmp3 = obj[first];
    if (tmp3 == null) {
      tmp3 = item;
    }
    obj[first] = tmp3;
  });
  return obj;
};
let tmp2 = new timestampDefault("Spellchecker");
let closure_9 = importDefaultResult1.debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      let tmp2Result = set2;
      if (!tmp2Result.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        tmp2Result = set2;
        if (tmp2Result.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
      }
    }
    textContent = hasAttribute.value;
    obj = set2;
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
let result = require("obj132").fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

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