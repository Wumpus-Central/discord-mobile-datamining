// discord_app/modules/coded_links/findCodedLinkUrls.native.tsx
import MarkupTypes from "../markup/MarkupTypes.tsx";
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5547).default;
    const parseToASTResult = tmp(5547).default.parseToAST(content, true, { allowLinks: true });
    tmp(5550).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(5550);
  }
  return items;
}
