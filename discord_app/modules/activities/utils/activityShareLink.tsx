// === Module 14346: activityShareLink ===

// Module 14346 (activityShareLink)
import URLUtilsDefault from "URLUtils" /* 1371 */;
import findCodedLinks from "findCodedLinks" /* 4876 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const items = [findCodedLinks.parseQuestsEmbedCode];
const result = size.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, name, link) {
  _require = false;
  const replaced = items.replaceAll(URLUtilsDefault.URL_REGEX, (arg0) => {
    closure_0 = arg0;
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
    const intl = require("util").intl;
    const obj = { applicationName: name.name, link };
    let _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("util").t.dZJpdG, obj);
  }
  return combined;
};