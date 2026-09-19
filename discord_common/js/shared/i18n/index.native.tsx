// discord_common/js/shared/i18n/index.native.tsx
import i18nDefault from "../../packages/i18n/index.tsx";

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("../../../../_runtime/metro/01932__.js");
  },
  cs() {
    return require("../../../../_runtime/metro/01933__.js");
  },
  da() {
    return require("../../../../_runtime/metro/01934__.js");
  },
  de() {
    return require("../../../../_runtime/metro/01935__.js");
  },
  el() {
    return require("../../../../_runtime/metro/01936__.js");
  },
  () => require("../../../../_runtime/metro/01937__.js"),
  () => require("../../../../_runtime/metro/01938__.js"),
  () => require("../../../../_runtime/metro/01939__.js"),
  () => require("../../../../_runtime/metro/01940__.js"),
  fi() {
    return require("../../../../_runtime/metro/01941__.js");
  },
  fr() {
    return require("../../../../_runtime/metro/01942__.js");
  },
  hi() {
    return require("../../../../_runtime/metro/01943__.js");
  },
  hr() {
    return require("../../../../_runtime/metro/01944__.js");
  },
  hu() {
    return require("../../../../_runtime/metro/01945__.js");
  },
  id() {
    return require("../../../../_runtime/metro/01946__.js");
  },
  it() {
    return require("../../../../_runtime/metro/01947__.js");
  },
  ja() {
    return require("../../../../_runtime/metro/01948__.js");
  },
  ko() {
    return require("../../../../_runtime/metro/01949__.js");
  },
  lt() {
    return require("../../../../_runtime/metro/01950__.js");
  },
  nl() {
    return require("../../../../_runtime/metro/01951__.js");
  },
  no() {
    return require("../../../../_runtime/metro/01952__.js");
  },
  pl() {
    return require("../../../../_runtime/metro/01953__.js");
  },
  () => require("../../../../_runtime/metro/01954__.js"),
  ro() {
    return require("../../../../_runtime/metro/01955__.js");
  },
  ru() {
    return require("../../../../_runtime/metro/01956__.js");
  },
  () => require("../../../../_runtime/metro/01957__.js"),
  th() {
    return require("../../../../_runtime/metro/01958__.js");
  },
  tr() {
    return require("../../../../_runtime/metro/01959__.js");
  },
  uk() {
    return require("../../../../_runtime/metro/01960__.js");
  },
  vi() {
    return require("../../../../_runtime/metro/01961__.js");
  },
  () => require("../../../../_runtime/metro/01962__.js"),
  () => require("../../../../_runtime/metro/01963__.js")
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
    return require("../../../../_runtime/metro/01964__.js");
  }
});