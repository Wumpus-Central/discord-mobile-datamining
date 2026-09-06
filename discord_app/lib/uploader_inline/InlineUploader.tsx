// discord_app/lib/uploader_inline/InlineUploader.tsx
import DiscordMd5Default from "../../modules/discord_md5/DiscordMd5.tsx";
import originalMd5Header from "originalMd5Header.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const re4 = /^[a-f0-9]{32}$/;
let InlineUploader;
class InlineUploader {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.surface = global;
    obj.originalMd5Promise = fn;
    return obj;
  }
}
const prototype = InlineUploader.prototype;
InlineUploader["fromBlob"] = function fromBlob(surface, arg1) {
  let obj = DiscordMd5Default;
  obj.fromBlob(arg1);
  if (typeof InlineUploader === "function") {
    obj = Object.create(InlineUploader.prototype);
    obj.surface = surface;
    obj.originalMd5Promise = tmp3;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getOriginalMd5"] = function getOriginalMd5() {
  return this.originalMd5Promise;
};
InlineUploader["buildHeadersForMd5"] = function buildHeadersForMd5(originalMd5, arg1) {
  const tmp = (function serializeOriginalMd5Header(originalMd5) {
    if (null == originalMd5) {
      return null;
    } else if (typeof originalMd5 === "string") {
      let tmp14 = null;
      if (regex.test(originalMd5)) {
        tmp14 = originalMd5;
      }
      return tmp14;
    } else {
      const items = [];
      const _Object = Object;
      const keys = Object.keys(originalMd5);
      for (const item10006 of keys) {
        let tmp3 = arg0[item10006];
        let tmp4 = tmp3;
        let isMatch = null != tmp3;
        if (isMatch) {
          isMatch = regex.test(tmp4);
        }
        if (isMatch) {
          let items1 = [item10006];
          items1[1] = tmp4;
          let arr = items.push(items1);
        }
        continue;
      }
      let joined = null;
      if (0 !== items.length) {
        const sorted = items.sort((arg0, arg1) => {
          [tmp] = arg0;
          [tmp2] = arg1;
          let num = -1;
          if (tmp >= tmp2) {
            let num2 = 0;
            if (tmp > tmp2) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        const mapped = items.map((item) => {
          [str, tmp] = item;
          return "" + str.toLowerCase() + '="' + tmp + '"';
        });
        joined = mapped.join(", ");
      }
      return joined;
    }
  })(originalMd5);
  let tmp2 = arg1;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(arg1);
    obj[originalMd5Header.ORIGINAL_MD5_HEADER] = tmp;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["buildHeaders"] = function buildHeaders(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    closure_2 = tmp4;
    closure_1 = buildHeadersForMd5;
    buildHeadersForMd5 = buildHeadersForMd5.buildHeadersForMd5;
    await self.originalMd5Promise;
    return buildHeadersForMd5(value, closure_130_0);
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader_inline/InlineUploader.tsx");

export default InlineUploader;
