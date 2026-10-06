// discord_app/lib/spellcheck/Spellchecker.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import DOMUtils from "../../../discord_common/js/shared/utils/DOMUtils.tsx";
import fallbackLocalesDefault from "fallbackLocales.tsx";
import _mod5959 from "../../../_runtime/metro/05959__.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import DiscordNative from "../DiscordNative.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

let set;

let obj = function _install() {
  let availableDictionaries;
  obj = _asyncToGenerator(async function() {
    let c3;
    let c4;
    let closure_2;
    function attachToInput(value) {
      closure_0 = value;
      if (null != document.body) {
        const _document = document;
        const listener = body.addEventListener("beforeinput", (event) => closure_2_9(closure_0, event.target), true);
      }
    }
    let value = tmp2;
    await availableDictionaries.getAvailableDictionaries();
    let closure_0 = value;
    if (value == null) {
      closure_0 = [];
    }
    const self = this;
    value = new closure_130_8(closure_0);
    if (!value.usesMultilang) {
      attachToInput(value);
    }
    return value;
  });
  return obj(...arguments);
};
let tmp2 = new LoggerDefault("Spellchecker");
const metroRequire = tmp2;
let spellCheck;
if (DiscordNative != null) {
  spellCheck = DiscordNative.spellCheck;
}
class Spellchecker {
  constructor(arr) {
    let first;
    obj = Object.create(new.target.prototype);
    obj.rawLocaleByNormalized = {};
    obj.languageDetector = null;
    obj.availableLanguagesByLanguage = {};
    obj._enabled = true;
    obj.misspelledWord = "";
    obj.corrections = [];
    let items = [];
    const item = arr.forEach((item) => {
      let str = "nb";
      if ("no" !== item) {
        str = item;
      }
      let str2 = fallbackLocalesDefault[str];
      if (str2 == null) {
        str2 = str;
      }
      obj = _mod5959;
      const parsed = obj.parse(str2.replace(/[_-]/g, "-"));
      if (null != parsed) {
        if (null != parsed.langtag.language) {
          let combined;
          if (null != parsed.langtag.region) {
            const langtag = parsed.langtag;
            const str3 = langtag.region;
            const str4 = langtag.language.language;
            const formatted = str4.toLowerCase();
            const _HermesInternal = HermesInternal;
            combined = "" + formatted + "-" + str3.toUpperCase();
          }
          if (null != combined) {
            items.push(combined);
            let tmp10 = obj.rawLocaleByNormalized[combined];
            const rawLocaleByNormalized = obj.rawLocaleByNormalized;
            if (tmp10 == null) {
              tmp10 = item;
            }
            rawLocaleByNormalized[combined] = tmp10;
          }
        }
      }
      logger.error("" + str2 + " is not a valid locale.");
    });
    obj.availableLocales = items;
    let tmp2 = obj;
    const obj2 = items(obj[7]);
    obj.useMultilang = obj2.isElectronMultilangSpellcheckEnabled();
    obj.availableLanguagesByLanguage = obj.buildLanguageIndex(items);
    if (obj.useMultilang) {
      obj.applyLanguages(LocaleStore.locale);
    } else {
      let str = LocaleStore.locale;
      let str2 = "-";
      [first, obj.regionPreference] = str.split("-");
      const self = this;
      const self2 = this;
      const tmp9 = new first(tmp2[8])(first, (arg0) => {
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
      let tmp10 = tmp9;
      obj.languageDetector = tmp9;
    }
    spellCheck.on("spellcheck-result", (arg0, arg1) => {
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
  setLearnedWords(arg0) {
    spellCheck.setLearnedWords(arg0);
  }
  setAppLocale(locale) {
    const self = this;
    if (this.useMultilang) {
      self.applyLanguages(locale);
    } else {
      self.regionPreference = locale.split("-")[1];
    }
  }
  detectLanguage(textContent) {
    const self = this;
    const tmp = !this.useMultilang && self.enabled;
    if (tmp) {
      const languageDetector = self.languageDetector;
      if (languageDetector != null) {
        languageDetector.process(textContent);
      }
    }
  }
  isMisspelled(arg0) {
    return "" !== this.misspelledWord && arg0 === tmp.misspelledWord;
  }
  getCorrectionsForMisspelling(arg0, flag) {
    return this.isMisspelled(arg0, flag) ? this.corrections : [];
  }
  getCachedMisspelling() {
    return { misspelledWord: this.misspelledWord, corrections: this.corrections };
  }
  replaceMisspelling(arg0) {
    spellCheck.replaceMisspelling(arg0);
  }
  applyLocale(mapped1) {
    let closure_0 = mapped1;
    const setLocaleResult = spellCheck.setLocale(mapped1);
    if (setLocaleResult != null) {
      setLocaleResult.then((result) => {
        info = info.info;
        let str = "(unavailable)";
        const combined = "Switching to " + mapped1;
        if (result) {
          str = "(available)";
        }
        info(combined, str);
      });
    }
  }
  applyLanguages(locale) {
    let mapped1;
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
      obj = _mod5959;
      const parsed = obj.parse(str2.replace(/[_-]/g, "-"));
      if (null != parsed) {
        if (null != parsed.langtag.language) {
          let combined;
          if (null != parsed.langtag.region) {
            const langtag = parsed.langtag;
            const str3 = langtag.region;
            const str4 = langtag.language.language;
            const formatted = str4.toLowerCase();
            const _HermesInternal = HermesInternal;
            combined = "" + formatted + "-" + str3.toUpperCase();
          }
          if (null != combined) {
            const availableLocales = self.availableLocales;
            if (availableLocales.includes(combined)) {
              return combined;
            }
          }
          const str6 = item.replace(/_/g, "-");
          const str7 = _slicedToArray(str6.split("-"), 1)[0];
          let tmp10 = self.availableLanguagesByLanguage[str7.toLowerCase(str7)];
          if (tmp10 == null) {
            tmp10 = null;
          }
          return tmp10;
        }
      }
      logger.error("" + str2 + " is not a valid locale.");
    });
    set = new Set(mapped.filter(mapped1(1375).isNotNullish));
    const fromResult = from(set);
    if (0 !== fromResult.length) {
      mapped1 = fromResult.map((item) => {
        let tmp = self.rawLocaleByNormalized[item];
        if (tmp == null) {
          tmp = item;
        }
        return tmp;
      });
      if (null == spellCheck.setSpellCheckerLanguages) {
        let _HermesInternal2 = HermesInternal;
        let str3 = "setSpellCheckerLanguages unavailable, falling back to single-locale: ";
        logger.info("setSpellCheckerLanguages unavailable, falling back to single-locale: " + mapped1[0]);
        self.applyLocale(mapped1[0]);
      } else {
        const result = spellCheck.setSpellCheckerLanguages(mapped1);
        if (result != null) {
          result.then((result) => {
            const info = logger.info;
            const tmp2 = result;
            if (tmp2) {
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
      let str = ", ";
      let _HermesInternal = HermesInternal;
      let str2 = "No spellcheck languages resolved from candidates: ";
      logger.info("No spellcheck languages resolved from candidates: " + items.join(", "));
    }
  }
  buildLanguageIndex(items) {
    obj = {};
    const item = items.forEach((item) => {
      const first = _slicedToArray(item.split("-"), 1)[0];
      let tmp3 = obj[first];
      if (tmp3 == null) {
        tmp3 = item;
      }
      obj[first] = tmp3;
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
let closure_9 = module_12.debounce((detectLanguage, hasAttribute) => {
  let textContent = null;
  if (null != hasAttribute) {
    obj = DOMUtils;
    if (!obj.isElement(hasAttribute, globalThis.HTMLInputElement)) {
      const tmp2Result = DOMUtils;
      if (!tmp2Result.isElement(hasAttribute, globalThis.HTMLTextAreaElement)) {
        const tmp2Result2 = DOMUtils;
        if (tmp2Result2.isElement(hasAttribute)) {
          if (hasAttribute.hasAttribute("contenteditable")) {
            textContent = hasAttribute.textContent;
          }
        }
      }
    }
    textContent = hasAttribute.value;
  }
  if (null != textContent) {
    detectLanguage.detectLanguage(textContent);
  }
}, 250);
let result = size.fileFinishedImporting("lib/spellcheck/Spellchecker.tsx");

export { Spellchecker };
export const install = function install() {
  return obj(...arguments);
};