// === Module 11831: conjureLinkifyBareDomains ===

// Module 11831 (conjureLinkifyBareDomains)
import size from "module_2" /* 2 */;

function linkifyToken(arg0) {
  let combined = arg0;
  const match = re2.exec(arg0);
  let str;
  if (match != null) {
    str = match[0];
  }
  if (str == null) {
    str = "";
  }
  const substr = combined.slice(str.length);
  const match1 = re3.exec(substr);
  let str2;
  if (match1 != null) {
    str2 = match1[0];
  }
  if (str2 == null) {
    str2 = "";
  }
  const substr1 = substr.slice(0, substr.length - str2.length);
  if (regExp.test(substr1)) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + "[" + substr1 + "](https://" + substr1 + ")" + str2;
  }
  return combined;
}
const regExp = new RegExp("^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:com|org|net|gov|edu|io|dev|app|gg|co|ai|me|tv|xyz|info|us|uk|de|fr|jp|ca|au)(?:/[^\\s?#]*)?$", "i");
const re1 = /(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>\s]+>|\b[a-z][a-z0-9+.-]*:\/\/\S+)/gi;
const re2 = /^[("']+/;
const re3 = /[.,!?;:)"']+$/;
const result = size.fileFinishedImporting("modules/conjure/shared/conjureLinkifyBareDomains.tsx");

export const linkifyBareDomains = function linkifyBareDomains(text) {
  let parts = text.split(re1);
  let mapped = parts.map((item, index) => {
    let joined = item;
    if (index % 2 !== 1) {
      const parts = item.split(/(\s+)/);
      const mapped = parts.map(linkifyToken);
      joined = mapped.join("");
    }
    return joined;
  });
  return mapped.join("");
};