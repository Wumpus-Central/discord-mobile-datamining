// === Module 2028: ? ===

// Module 2028
import i18nDefault from "i18n" /* 2029 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_2073");
  },
  cs() {
    return require("module_2074");
  },
  da() {
    return require("module_2075");
  },
  de() {
    return require("module_2076");
  },
  el() {
    return require("module_2077");
  },
  () => require("module_2078"),
  () => require("module_2079"),
  () => require("module_2080"),
  () => require("module_2081"),
  fi() {
    return require("module_2082");
  },
  fr() {
    return require("module_2083");
  },
  hi() {
    return require("module_2084");
  },
  hr() {
    return require("module_2085");
  },
  hu() {
    return require("module_2086");
  },
  id() {
    return require("module_2087");
  },
  it() {
    return require("module_2088");
  },
  ja() {
    return require("module_2089");
  },
  ko() {
    return require("module_2090");
  },
  lt() {
    return require("module_2091");
  },
  nl() {
    return require("module_2092");
  },
  no() {
    return require("module_2093");
  },
  pl() {
    return require("module_2094");
  },
  () => require("module_2095"),
  ro() {
    return require("module_2096");
  },
  ru() {
    return require("module_2097");
  },
  () => require("module_2098"),
  th() {
    return require("module_2099");
  },
  tr() {
    return require("module_2100");
  },
  uk() {
    return require("module_2101");
  },
  vi() {
    return require("module_2102");
  },
  () => require("module_2103"),
  () => require("module_2104")
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
    return require("module_2105");
  }
});