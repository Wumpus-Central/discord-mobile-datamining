// discord_app/modules/conjure/shared/conjureShortLinks.tsx
import size from "../../../../_runtime/metro/00002__.js";

const re0 = /(`[^`]*`|\[[^\]]*\]\((?:[^()]|\([^()]*\))*\)|<[^>\s]+>)/g;
const re1 = /\bhttps?:\/\/[^\s<]+/gi;
const re2 = /[.,!?;:"'\]]$/;
const re3 = /^(?:[^()\s\\]|\([^()\s\\]*\))+$/;
const re4 = /^https?:\/\/(?:www\.)?([^/?#:]+)/i;
const result = size.fileFinishedImporting("modules/conjure/shared/conjureShortLinks.tsx");

export function shortenConjureLinks(text) {
  const parts = text.split(re0);
  const mapped = parts.map((item, index) => {
    let replaced = item;
    if (index % 2 !== 1) {
      replaced = item.replace(closure_1_1, (str) => {
        let isMatch;
        let str3;
        let arr = str;
        if (regex.test(str)) {
          do {
            str3 = arr.slice(0, -1);
            arr = str3;
            isMatch = regex.test(str3);
          } while (isMatch);
          let arr2 = str3;
          if (str3.endsWith(")")) {
            const diff = str3.split(")").length - 1;
            arr = str3;
            arr2 = str3;
          }
        } else {
          arr2 = str;
          if (")".endsWith(")")) {
            const diff1 = str.split(")").length - 1;
            arr = str;
            arr2 = str;
          }
        }
        const match = regex3.exec(arr2);
        let tmp7;
        if (match != null) {
          tmp7 = match[1];
        }
        let combined = str;
        if (null != tmp7) {
          combined = str;
          if (regex2.test(arr2)) {
            const _HermesInternal = HermesInternal;
            combined = "[" + tmp7 + "](" + arr2 + ")" + str.slice(arr2.length);
          }
        }
        return combined;
      });
    }
    return replaced;
  });
  return mapped.join("");
}
