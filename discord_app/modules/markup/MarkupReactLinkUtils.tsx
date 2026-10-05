// discord_app/modules/markup/MarkupReactLinkUtils.tsx
import MarkupParser from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import MaskedLinkUtils from "../../utils/MaskedLinkUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
