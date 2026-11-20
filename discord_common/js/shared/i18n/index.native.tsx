// === Module 2026: ? ===

// Module 2026
import i18nDefault from "i18n" /* 2027 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_2071");
  },
  cs() {
    return require("module_2072");
  },
  da() {
    return require("module_2073");
  },
  de() {
    return require("module_2074");
  },
  el() {
    return require("module_2075");
  },
  () => require("module_2076"),
  () => require("module_2077"),
  () => require("module_2078"),
  () => require("module_2079"),
  fi() {
    return require("module_2080");
  },
  fr() {
    return require("module_2081");
  },
  hi() {
    return require("module_2082");
  },
  hr() {
    return require("module_2083");
  },
  hu() {
    return require("module_2084");
  },
  id() {
    return require("module_2085");
  },
  it() {
    return require("module_2086");
  },
  ja() {
    return require("module_2087");
  },
  ko() {
    return require("module_2088");
  },
  lt() {
    return require("module_2089");
  },
  nl() {
    return require("module_2090");
  },
  no() {
    return require("module_2091");
  },
  pl() {
    return require("module_2092");
  },
  () => require("module_2093"),
  ro() {
    return require("module_2094");
  },
  ru() {
    return require("module_2095");
  },
  () => require("module_2096"),
  th() {
    return require("module_2097");
  },
  tr() {
    return require("module_2098");
  },
  uk() {
    return require("module_2099");
  },
  vi() {
    return require("module_2100");
  },
  () => require("module_2101"),
  () => require("module_2102")
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default new i18nDefault({
  getMessages(arg0) {
    if (null == closure_2[arg0]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unsupported locale: " + arg0);
      throw error;
    } else {
      return tmp();
    }
  },
  getLanguages() {
    return require("module_2103");
  }
});