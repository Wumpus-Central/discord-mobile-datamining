// === Module 1904: ? ===

// Module 1904
import i18nDefault from "i18n" /* 1905 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1954");
  },
  cs() {
    return require("module_1955");
  },
  da() {
    return require("module_1956");
  },
  de() {
    return require("module_1957");
  },
  el() {
    return require("module_1958");
  },
  () => require("module_1959"),
  () => require("module_1960"),
  () => require("module_1961"),
  () => require("module_1962"),
  fi() {
    return require("module_1963");
  },
  fr() {
    return require("module_1964");
  },
  hi() {
    return require("module_1965");
  },
  hr() {
    return require("module_1966");
  },
  hu() {
    return require("module_1967");
  },
  id() {
    return require("module_1968");
  },
  it() {
    return require("module_1969");
  },
  ja() {
    return require("module_1970");
  },
  ko() {
    return require("module_1971");
  },
  lt() {
    return require("module_1972");
  },
  nl() {
    return require("module_1973");
  },
  no() {
    return require("module_1974");
  },
  pl() {
    return require("module_1975");
  },
  () => require("module_1976"),
  ro() {
    return require("module_1977");
  },
  ru() {
    return require("module_1978");
  },
  () => require("module_1979"),
  th() {
    return require("module_1980");
  },
  tr() {
    return require("module_1981");
  },
  uk() {
    return require("module_1982");
  },
  vi() {
    return require("module_1983");
  },
  () => require("module_1984"),
  () => require("module_1985")
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
    return require("module_1986");
  }
});