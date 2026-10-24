// === Module 5704: findCodedLinkUrls ===

// Module 5704 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5980 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 15085 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5705).default;
    const parseToASTResult = tmp(5705).default.parseToAST(content, true, { allowLinks: true });
    tmp(8346).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8346);
  }
  return items;
};