// === Module 1901: ? ===

// Module 1901
import i18nDefault from "i18n" /* 1902 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1951");
  },
  cs() {
    return require("module_1952");
  },
  da() {
    return require("module_1953");
  },
  de() {
    return require("module_1954");
  },
  el() {
    return require("module_1955");
  },
  () => require("module_1956"),
  () => require("module_1957"),
  () => require("module_1958"),
  () => require("module_1959"),
  fi() {
    return require("module_1960");
  },
  fr() {
    return require("module_1961");
  },
  hi() {
    return require("module_1962");
  },
  hr() {
    return require("module_1963");
  },
  hu() {
    return require("module_1964");
  },
  id() {
    return require("module_1965");
  },
  it() {
    return require("module_1966");
  },
  ja() {
    return require("module_1967");
  },
  ko() {
    return require("module_1968");
  },
  lt() {
    return require("module_1969");
  },
  nl() {
    return require("module_1970");
  },
  no() {
    return require("module_1971");
  },
  pl() {
    return require("module_1972");
  },
  () => require("module_1973"),
  ro() {
    return require("module_1974");
  },
  ru() {
    return require("module_1975");
  },
  () => require("module_1976"),
  th() {
    return require("module_1977");
  },
  tr() {
    return require("module_1978");
  },
  uk() {
    return require("module_1979");
  },
  vi() {
    return require("module_1980");
  },
  () => require("module_1981"),
  () => require("module_1982")
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
    return require("module_1983");
  }
});