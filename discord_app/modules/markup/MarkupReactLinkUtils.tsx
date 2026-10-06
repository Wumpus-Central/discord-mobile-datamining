// === Module 11250: MarkupReactLinkUtils ===

// Module 11250 (MarkupReactLinkUtils)
import MarkupParser from "MarkupParser" /* 7657 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8057 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupReactLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(target) {
  let tmp = null != target.target;
  if (tmp) {
    MaskedLinkUtils;
    if (null != target.title) {
      let title;
      if ("" !== target.title) {
        title = target.title;
      }
      tmp = tmp5(tmp6, title);
    }
    const tmp2Result = MarkupParser;
    title = tmp2Result.astToString(target.content);
  }
  return tmp;
};