// === Module 1897: ? ===

// Module 1897
import i18nDefault from "i18n" /* 1898 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1947");
  },
  cs() {
    return require("module_1948");
  },
  da() {
    return require("module_1949");
  },
  de() {
    return require("module_1950");
  },
  el() {
    return require("module_1951");
  },
  () => require("module_1952"),
  () => require("module_1953"),
  () => require("module_1954"),
  () => require("module_1955"),
  fi() {
    return require("module_1956");
  },
  fr() {
    return require("module_1957");
  },
  hi() {
    return require("module_1958");
  },
  hr() {
    return require("module_1959");
  },
  hu() {
    return require("module_1960");
  },
  id() {
    return require("module_1961");
  },
  it() {
    return require("module_1962");
  },
  ja() {
    return require("module_1963");
  },
  ko() {
    return require("module_1964");
  },
  lt() {
    return require("module_1965");
  },
  nl() {
    return require("module_1966");
  },
  no() {
    return require("module_1967");
  },
  pl() {
    return require("module_1968");
  },
  () => require("module_1969"),
  ro() {
    return require("module_1970");
  },
  ru() {
    return require("module_1971");
  },
  () => require("module_1972"),
  th() {
    return require("module_1973");
  },
  tr() {
    return require("module_1974");
  },
  uk() {
    return require("module_1975");
  },
  vi() {
    return require("module_1976");
  },
  () => require("module_1977"),
  () => require("module_1978")
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
    return require("module_1979");
  }
});