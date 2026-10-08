// === Module 5076: findCodedLinkUrls ===

// Module 5076 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5396 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13898 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5077).default;
    const parseToASTResult = tmp(5077).default.parseToAST(content, true, { allowLinks: true });
    tmp(7980).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7980);
  }
  return items;
};