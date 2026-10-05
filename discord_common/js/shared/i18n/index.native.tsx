// discord_common/js/shared/i18n/index.native.tsx
import I18NDefault from "../../packages/i18n/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("../../../../_runtime/metro/01939__.js");
  },
  cs() {
    return require("../../../../_runtime/metro/01940__.js");
  },
  da() {
    return require("../../../../_runtime/metro/01941__.js");
  },
  de() {
    return require("../../../../_runtime/metro/01942__.js");
  },
  el() {
    return require("../../../../_runtime/metro/01943__.js");
  },
  "en-GB": () => require("../../../../_runtime/metro/01944__.js"),
  "en-US": () => require("../../../../_runtime/metro/01945__.js"),
  "es-419": () => require("../../../../_runtime/metro/01946__.js"),
  "es-ES": () => require("../../../../_runtime/metro/01947__.js"),
  fi() {
    return require("../../../../_runtime/metro/01948__.js");
  },
  fr() {
    return require("../../../../_runtime/metro/01949__.js");
  },
  hi() {
    return require("../../../../_runtime/metro/01950__.js");
  },
  hr() {
    return require("../../../../_runtime/metro/01951__.js");
  },
  hu() {
    return require("../../../../_runtime/metro/01952__.js");
  },
  id() {
    return require("../../../../_runtime/metro/01953__.js");
  },
  it() {
    return require("../../../../_runtime/metro/01954__.js");
  },
  ja() {
    return require("../../../../_runtime/metro/01955__.js");
  },
  ko() {
    return require("../../../../_runtime/metro/01956__.js");
  },
  lt() {
    return require("../../../../_runtime/metro/01957__.js");
  },
  nl() {
    return require("../../../../_runtime/metro/01958__.js");
  },
  no() {
    return require("../../../../_runtime/metro/01959__.js");
  },
  pl() {
    return require("../../../../_runtime/metro/01960__.js");
  },
  "pt-BR": () => require("../../../../_runtime/metro/01961__.js"),
  ro() {
    return require("../../../../_runtime/metro/01962__.js");
  },
  ru() {
    return require("../../../../_runtime/metro/01963__.js");
  },
  "sv-SE": () => require("../../../../_runtime/metro/01964__.js"),
  th() {
    return require("../../../../_runtime/metro/01965__.js");
  },
  tr() {
    return require("../../../../_runtime/metro/01966__.js");
  },
  uk() {
    return require("../../../../_runtime/metro/01967__.js");
  },
  vi() {
    return require("../../../../_runtime/metro/01968__.js");
  },
  "zh-CN": () => require("../../../../_runtime/metro/01969__.js"),
  "zh-TW": () => require("../../../../_runtime/metro/01970__.js"),
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
    return require("../../../../_runtime/metro/01971__.js");
  },
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;
