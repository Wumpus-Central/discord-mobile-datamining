// discord_app/modules/coded_links/findCodedLinkUrls.native.tsx
import MarkupTypes from "../markup/MarkupTypes.tsx";
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  let items;
  let tmp = items;
  const obj = items(13675);
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4883).default;
    const parseToASTResult = _default.parseToAST(content, true, { allowLinks: true });
    const tmpResult = tmp(7659);
    tmpResult.walkAst(parseToASTResult, (type) => {
      const tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string" && type.target.length > 0;
      if (tmp) {
        items.push(type.target);
      }
    });
  }
  return items;
}
