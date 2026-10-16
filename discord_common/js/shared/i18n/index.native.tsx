// discord_common/js/shared/i18n/index.native.tsx
import i18nDefault from "../../packages/i18n/index.tsx";

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("../../../../_runtime/metro/01954__.js");
  },
  cs() {
    return require("../../../../_runtime/metro/01955__.js");
  },
  da() {
    return require("../../../../_runtime/metro/01956__.js");
  },
  de() {
    return require("../../../../_runtime/metro/01957__.js");
  },
  el() {
    return require("../../../../_runtime/metro/01958__.js");
  },
  () => require("../../../../_runtime/metro/01959__.js"),
  () => require("../../../../_runtime/metro/01960__.js"),
  () => require("../../../../_runtime/metro/01961__.js"),
  () => require("../../../../_runtime/metro/01962__.js"),
  fi() {
    return require("../../../../_runtime/metro/01963__.js");
  },
  fr() {
    return require("../../../../_runtime/metro/01964__.js");
  },
  hi() {
    return require("../../../../_runtime/metro/01965__.js");
  },
  hr() {
    return require("../../../../_runtime/metro/01966__.js");
  },
  hu() {
    return require("../../../../_runtime/metro/01967__.js");
  },
  id() {
    return require("../../../../_runtime/metro/01968__.js");
  },
  it() {
    return require("../../../../_runtime/metro/01969__.js");
  },
  ja() {
    return require("../../../../_runtime/metro/01970__.js");
  },
  ko() {
    return require("../../../../_runtime/metro/01971__.js");
  },
  lt() {
    return require("../../../../_runtime/metro/01972__.js");
  },
  nl() {
    return require("../../../../_runtime/metro/01973__.js");
  },
  no() {
    return require("../../../../_runtime/metro/01974__.js");
  },
  pl() {
    return require("../../../../_runtime/metro/01975__.js");
  },
  () => require("../../../../_runtime/metro/01976__.js"),
  ro() {
    return require("../../../../_runtime/metro/01977__.js");
  },
  ru() {
    return require("../../../../_runtime/metro/01978__.js");
  },
  () => require("../../../../_runtime/metro/01979__.js"),
  th() {
    return require("../../../../_runtime/metro/01980__.js");
  },
  tr() {
    return require("../../../../_runtime/metro/01981__.js");
  },
  uk() {
    return require("../../../../_runtime/metro/01982__.js");
  },
  vi() {
    return require("../../../../_runtime/metro/01983__.js");
  },
  () => require("../../../../_runtime/metro/01984__.js"),
  () => require("../../../../_runtime/metro/01985__.js")
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
    return require("../../../../_runtime/metro/01986__.js");
  }
});