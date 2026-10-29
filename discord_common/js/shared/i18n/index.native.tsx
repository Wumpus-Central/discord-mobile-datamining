// discord_common/js/shared/i18n/index.native.tsx
import i18nDefault from "../../packages/i18n/index.tsx";

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("../../../../_runtime/metro/01952__.js");
  },
  cs() {
    return require("../../../../_runtime/metro/01953__.js");
  },
  da() {
    return require("../../../../_runtime/metro/01954__.js");
  },
  de() {
    return require("../../../../_runtime/metro/01955__.js");
  },
  el() {
    return require("../../../../_runtime/metro/01956__.js");
  },
  () => require("../../../../_runtime/metro/01957__.js"),
  () => require("../../../../_runtime/metro/01958__.js"),
  () => require("../../../../_runtime/metro/01959__.js"),
  () => require("../../../../_runtime/metro/01960__.js"),
  fi() {
    return require("../../../../_runtime/metro/01961__.js");
  },
  fr() {
    return require("../../../../_runtime/metro/01962__.js");
  },
  hi() {
    return require("../../../../_runtime/metro/01963__.js");
  },
  hr() {
    return require("../../../../_runtime/metro/01964__.js");
  },
  hu() {
    return require("../../../../_runtime/metro/01965__.js");
  },
  id() {
    return require("../../../../_runtime/metro/01966__.js");
  },
  it() {
    return require("../../../../_runtime/metro/01967__.js");
  },
  ja() {
    return require("../../../../_runtime/metro/01968__.js");
  },
  ko() {
    return require("../../../../_runtime/metro/01969__.js");
  },
  lt() {
    return require("../../../../_runtime/metro/01970__.js");
  },
  nl() {
    return require("../../../../_runtime/metro/01971__.js");
  },
  no() {
    return require("../../../../_runtime/metro/01972__.js");
  },
  pl() {
    return require("../../../../_runtime/metro/01973__.js");
  },
  () => require("../../../../_runtime/metro/01974__.js"),
  ro() {
    return require("../../../../_runtime/metro/01975__.js");
  },
  ru() {
    return require("../../../../_runtime/metro/01976__.js");
  },
  () => require("../../../../_runtime/metro/01977__.js"),
  th() {
    return require("../../../../_runtime/metro/01978__.js");
  },
  tr() {
    return require("../../../../_runtime/metro/01979__.js");
  },
  uk() {
    return require("../../../../_runtime/metro/01980__.js");
  },
  vi() {
    return require("../../../../_runtime/metro/01981__.js");
  },
  () => require("../../../../_runtime/metro/01982__.js"),
  () => require("../../../../_runtime/metro/01983__.js")
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
    return require("../../../../_runtime/metro/01984__.js");
  }
});