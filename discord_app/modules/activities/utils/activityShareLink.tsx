// === Module 14328: activityShareLink ===

// Module 14328 (activityShareLink)
import URLUtilsDefault from "URLUtils" /* 1371 */;
import findCodedLinks from "findCodedLinks" /* 4870 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

const items = [findCodedLinks.parseQuestsEmbedCode];
const result = size.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, name, link) {
  _require = false;
  const replaced = items.replaceAll(URLUtilsDefault.URL_REGEX, (arg0) => {
    let closure_0 = arg0;
    const someResult = items.some((fn) => null != fn(closure_0));
    if (someResult) {
      c0 = true;
    }
    let combined = arg0;
    if (!someResult) {
      const _HermesInternal = HermesInternal;
      combined = "`" + arg0 + "`";
    }
    return combined;
  });
  let combined = replaced;
  if (!_require) {
    const intl = require("intl").intl;
    let _HermesInternal = HermesInternal;
    const obj = { applicationName: name.name, link };
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("intl").t.dZJpdG, obj);
  }
  return combined;
};