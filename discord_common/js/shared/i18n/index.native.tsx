// discord_common/js/shared/i18n/index.native.tsx
import i18nDefault from "../../packages/i18n/index.tsx";

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("../../../../_runtime/metro/02073__.js");
  },
  cs() {
    return require("../../../../_runtime/metro/02074__.js");
  },
  da() {
    return require("../../../../_runtime/metro/02075__.js");
  },
  de() {
    return require("../../../../_runtime/metro/02076__.js");
  },
  el() {
    return require("../../../../_runtime/metro/02077__.js");
  },
  () => require("../../../../_runtime/metro/02078__.js"),
  () => require("../../../../_runtime/metro/02079__.js"),
  () => require("../../../../_runtime/metro/02080__.js"),
  () => require("../../../../_runtime/metro/02081__.js"),
  fi() {
    return require("../../../../_runtime/metro/02082__.js");
  },
  fr() {
    return require("../../../../_runtime/metro/02083__.js");
  },
  hi() {
    return require("../../../../_runtime/metro/02084__.js");
  },
  hr() {
    return require("../../../../_runtime/metro/02085__.js");
  },
  hu() {
    return require("../../../../_runtime/metro/02086__.js");
  },
  id() {
    return require("../../../../_runtime/metro/02087__.js");
  },
  it() {
    return require("../../../../_runtime/metro/02088__.js");
  },
  ja() {
    return require("../../../../_runtime/metro/02089__.js");
  },
  ko() {
    return require("../../../../_runtime/metro/02090__.js");
  },
  lt() {
    return require("../../../../_runtime/metro/02091__.js");
  },
  nl() {
    return require("../../../../_runtime/metro/02092__.js");
  },
  no() {
    return require("../../../../_runtime/metro/02093__.js");
  },
  pl() {
    return require("../../../../_runtime/metro/02094__.js");
  },
  () => require("../../../../_runtime/metro/02095__.js"),
  ro() {
    return require("../../../../_runtime/metro/02096__.js");
  },
  ru() {
    return require("../../../../_runtime/metro/02097__.js");
  },
  () => require("../../../../_runtime/metro/02098__.js"),
  th() {
    return require("../../../../_runtime/metro/02099__.js");
  },
  tr() {
    return require("../../../../_runtime/metro/02100__.js");
  },
  uk() {
    return require("../../../../_runtime/metro/02101__.js");
  },
  vi() {
    return require("../../../../_runtime/metro/02102__.js");
  },
  () => require("../../../../_runtime/metro/02103__.js"),
  () => require("../../../../_runtime/metro/02104__.js")
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
    return require("../../../../_runtime/metro/02105__.js");
  }
});