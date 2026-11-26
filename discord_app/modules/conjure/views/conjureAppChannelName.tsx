// === Module 18466: conjureAppChannelName ===

// Module 18466 (conjureAppChannelName)
import size from "module_2" /* 2 */;

const re0 = /(?:[\0-\x1F\x7F-\x9F\xAD\u034F\u061C\u115F\u1160\u17B4\u180B-\u180E\u200B\u200C\u200E\u200F\u202A-\u202F\u2060-\u206F\u2800\u3164\uFA70-\uFAD9\uFEFF\uFFA0\uFFF0-\uFFFF]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB7F][\uDC00-\uDFFF])/g;
const re1 = /[\x20\xa0\u1680\u2000-\u200a\u2028\u2029\u205f\u3000~-]+/g;
const re2 = /[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
const result = size.fileFinishedImporting("modules/conjure/views/conjureAppChannelName.tsx");

export default function conjureAppChannelSlug(str) {
  str = str.replace(re0, "");
  const str2 = str.replace(re1, "-");
  const str3 = str.replace(re1, "-").replace(/^-+/, "");
  const str4 = str.replace(re1, "-").replace(/^-+/, "").replace(/-+$/, "");
  const str6 = str.replace(re1, "-").replace(/^-+/, "").replace(/-+$/, "").replace(re2, "").toLowerCase();
  let str7 = "";
  if ("" !== str6) {
    const str8 = str6.replace(re1, "-");
    const str9 = str6.replace(re1, "-").replace(/^-+/, "");
    const str10 = str6.replace(re1, "-").replace(/^-+/, "").replace(/-+$/, "");
    str7 = str6.replace(re1, "-").replace(/^-+/, "").replace(/-+$/, "").replace(re2, "").toLowerCase();
    const str11 = str6.replace(re1, "-").replace(/^-+/, "").replace(/-+$/, "").replace(re2, "");
  }
  return str7;
};