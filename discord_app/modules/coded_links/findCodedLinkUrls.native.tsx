// discord_app/modules/coded_links/findCodedLinkUrls.native.tsx
import MarkupTypes from "../markup/MarkupTypes.tsx";
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4550).default;
    const parseToASTResult = tmp(4550).default.parseToAST(content, true, { allowLinks: true });
    tmp(7989).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7989);
  }
  return items;
}
