// === Module 2028: ? ===

// Module 2028
import i18nDefault from "i18n" /* 2029 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_2078");
  },
  cs() {
    return require("module_2079");
  },
  da() {
    return require("module_2080");
  },
  de() {
    return require("module_2081");
  },
  el() {
    return require("module_2082");
  },
  () => require("module_2083"),
  () => require("module_2084"),
  () => require("module_2085"),
  () => require("module_2086"),
  fi() {
    return require("module_2087");
  },
  fr() {
    return require("module_2088");
  },
  hi() {
    return require("module_2089");
  },
  hr() {
    return require("module_2090");
  },
  hu() {
    return require("module_2091");
  },
  id() {
    return require("module_2092");
  },
  it() {
    return require("module_2093");
  },
  ja() {
    return require("module_2094");
  },
  ko() {
    return require("module_2095");
  },
  lt() {
    return require("module_2096");
  },
  nl() {
    return require("module_2097");
  },
  no() {
    return require("module_2098");
  },
  pl() {
    return require("module_2099");
  },
  () => require("module_2100"),
  ro() {
    return require("module_2101");
  },
  ru() {
    return require("module_2102");
  },
  () => require("module_2103"),
  th() {
    return require("module_2104");
  },
  tr() {
    return require("module_2105");
  },
  uk() {
    return require("module_2106");
  },
  vi() {
    return require("module_2107");
  },
  () => require("module_2108"),
  () => require("module_2109")
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
    return require("module_2110");
  }
});