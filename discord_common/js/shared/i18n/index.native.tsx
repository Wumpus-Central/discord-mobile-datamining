// === Module 1889: ? ===

// Module 1889
import I18NDefault from "I18N" /* 1890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("module_1939");
  },
  cs() {
    return require("module_1940");
  },
  da() {
    return require("module_1941");
  },
  de() {
    return require("module_1942");
  },
  el() {
    return require("module_1943");
  },
  "en-GB": () => require("module_1944"),
  "en-US": () => require("module_1945"),
  "es-419": () => require("module_1946"),
  "es-ES": () => require("module_1947"),
  fi() {
    return require("module_1948");
  },
  fr() {
    return require("module_1949");
  },
  hi() {
    return require("module_1950");
  },
  hr() {
    return require("module_1951");
  },
  hu() {
    return require("module_1952");
  },
  id() {
    return require("module_1953");
  },
  it() {
    return require("module_1954");
  },
  ja() {
    return require("module_1955");
  },
  ko() {
    return require("module_1956");
  },
  lt() {
    return require("module_1957");
  },
  nl() {
    return require("module_1958");
  },
  no() {
    return require("module_1959");
  },
  pl() {
    return require("module_1960");
  },
  "pt-BR": () => require("module_1961"),
  ro() {
    return require("module_1962");
  },
  ru() {
    return require("module_1963");
  },
  "sv-SE": () => require("module_1964"),
  th() {
    return require("module_1965");
  },
  tr() {
    return require("module_1966");
  },
  uk() {
    return require("module_1967");
  },
  vi() {
    return require("module_1968");
  },
  "zh-CN": () => require("module_1969"),
  "zh-TW": () => require("module_1970")
};
const obj = {
  getMessages(arg0) {
    if (null == closure_2[arg0]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Unsupported locale: " + arg0);
      throw error;
    } else {
      return closure_2[arg0]();
    }
  },
  getLanguages() {
    return require("module_1971");
  }
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;