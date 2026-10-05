// discord_app/lib/uploader_inline/InlineUploader.tsx
import DiscordMd5Default from "../../modules/discord_md5/DiscordMd5.tsx";
import originalMd5Header from "originalMd5Header.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const re4 = /^[a-f0-9]{32}$/;
class InlineUploader {
  constructor(surface, originalMd5Promise) {
    const obj = Object.create(new.target.prototype);
    obj.surface = surface;
    obj.originalMd5Promise = originalMd5Promise;
    return obj;
  }
  static fromBlob(surface, arg1) {
    const obj = DiscordMd5Default;
    obj.fromBlob(arg1);
    if (typeof InlineUploader === "function") {
      const obj2 = Object.create(InlineUploader.prototype);
      obj2.surface = surface;
      obj2.originalMd5Promise = tmp3;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getOriginalMd5() {
    return this.originalMd5Promise;
  }
  static buildHeadersForMd5(originalMd5, arg1) {
    let regex;
    function serializeOriginalMd5Header(originalMd5) {
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
        const tmp = keys;
        for (const item10006 of keys) {
          let tmp3 = originalMd5[item10006];
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
        let num = 0;
        let joined = null;
        if (0 !== items.length) {
          const sorted = items.sort((arg0, arg1) => {
            let tmp;
            let tmp2;
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
            let str;
            let tmp;
            [str, tmp] = item;
            return "" + str.toLowerCase() + '="' + tmp + '"';
          });
          const str = ", ";
          joined = mapped.join(", ");
        }
        return joined;
      }
    }
    let tmp = serializeOriginalMd5Header(originalMd5);
    let tmp2 = arg1;
    if (null != tmp) {
      const obj = {};
      let tmp3 = obj;
      let tmp4 = arg1;
      const merged = Object.assign(arg1);
      obj[originalMd5Header.ORIGINAL_MD5_HEADER] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }
  buildHeaders(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let buildHeadersForMd5;
      let c3;
      let c4;
      let closure_2;
      let closure_1 = buildHeadersForMd5;
      buildHeadersForMd5 = buildHeadersForMd5.buildHeadersForMd5;
      await self.originalMd5Promise;
      return buildHeadersForMd5(value, closure_130_0);
    })();
  }
}
const prototype = InlineUploader.prototype;
const result = size.fileFinishedImporting("lib/uploader_inline/InlineUploader.tsx");

export default InlineUploader;
