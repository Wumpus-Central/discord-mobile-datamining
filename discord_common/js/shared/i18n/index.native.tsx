// === Module 1882: ? ===

// Module 1882
import i18nDefault from "i18n" /* 1883 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1932");
  },
  cs() {
    return require("module_1933");
  },
  da() {
    return require("module_1934");
  },
  de() {
    return require("module_1935");
  },
  el() {
    return require("module_1936");
  },
  () => require("module_1937"),
  () => require("module_1938"),
  () => require("module_1939"),
  () => require("module_1940"),
  fi() {
    return require("module_1941");
  },
  fr() {
    return require("module_1942");
  },
  hi() {
    return require("module_1943");
  },
  hr() {
    return require("module_1944");
  },
  hu() {
    return require("module_1945");
  },
  id() {
    return require("module_1946");
  },
  it() {
    return require("module_1947");
  },
  ja() {
    return require("module_1948");
  },
  ko() {
    return require("module_1949");
  },
  lt() {
    return require("module_1950");
  },
  nl() {
    return require("module_1951");
  },
  no() {
    return require("module_1952");
  },
  pl() {
    return require("module_1953");
  },
  () => require("module_1954"),
  ro() {
    return require("module_1955");
  },
  ru() {
    return require("module_1956");
  },
  () => require("module_1957"),
  th() {
    return require("module_1958");
  },
  tr() {
    return require("module_1959");
  },
  uk() {
    return require("module_1960");
  },
  vi() {
    return require("module_1961");
  },
  () => require("module_1962"),
  () => require("module_1963")
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
    return require("module_1964");
  }
});