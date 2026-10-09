// === Module 1902: ? ===

// Module 1902
import i18nDefault from "i18n" /* 1903 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1952");
  },
  cs() {
    return require("module_1953");
  },
  da() {
    return require("module_1954");
  },
  de() {
    return require("module_1955");
  },
  el() {
    return require("module_1956");
  },
  () => require("module_1957"),
  () => require("module_1958"),
  () => require("module_1959"),
  () => require("module_1960"),
  fi() {
    return require("module_1961");
  },
  fr() {
    return require("module_1962");
  },
  hi() {
    return require("module_1963");
  },
  hr() {
    return require("module_1964");
  },
  hu() {
    return require("module_1965");
  },
  id() {
    return require("module_1966");
  },
  it() {
    return require("module_1967");
  },
  ja() {
    return require("module_1968");
  },
  ko() {
    return require("module_1969");
  },
  lt() {
    return require("module_1970");
  },
  nl() {
    return require("module_1971");
  },
  no() {
    return require("module_1972");
  },
  pl() {
    return require("module_1973");
  },
  () => require("module_1974"),
  ro() {
    return require("module_1975");
  },
  ru() {
    return require("module_1976");
  },
  () => require("module_1977"),
  th() {
    return require("module_1978");
  },
  tr() {
    return require("module_1979");
  },
  uk() {
    return require("module_1980");
  },
  vi() {
    return require("module_1981");
  },
  () => require("module_1982"),
  () => require("module_1983")
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
    return require("module_1984");
  }
});