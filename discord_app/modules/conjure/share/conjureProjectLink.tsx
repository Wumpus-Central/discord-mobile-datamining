// === Module 15921: conjureProjectLink ===

// Module 15921 (conjureProjectLink)
import size from "module_2" /* 2 */;

const set = new Set(["conjure.town", "conjure.city"]);
const re1 = /^\/([0-9]{17,20})\/[a-z0-9-]{1,48}(?:\/([A-Za-z0-9_-]{16,200}\.[A-Za-z0-9_-]{16,64}))?\/?$/;
const result = size.fileFinishedImporting("modules/conjure/share/conjureProjectLink.tsx");

export function parseConjureProjectLink(url) {
  if ("https:" !== url.protocol) {
    if ("http:" !== url.protocol) {
      return null;
    }
  }
  let replaced;
  if (url.host != null) {
    replaced = str2.toLowerCase().replace(/^www[.]/, "");
    const str3 = str2.toLowerCase();
  }
  if (null != replaced) {
    if (set.has(replaced)) {
      let match;
      if (url.pathname != null) {
        match = str5.match(re1);
      }
      let tmp5 = null;
      if (null != match) {
        const obj = { applicationId: match[1], ticket: null };
        let tmp6 = match[2];
        if (tmp6 == null) {
          tmp6 = null;
        }
        obj.ticket = tmp6;
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  return null;
}