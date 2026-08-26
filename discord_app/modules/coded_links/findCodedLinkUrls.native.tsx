// === Module 4433: findCodedLinkUrls ===

// Module 4433 (findCodedLinkUrls)
import set from "set" /* 2 */;
import trimTrailingPunctuationDefault from "trimTrailingPunctuation" /* 13473 */;

const result = set.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = trimTrailingPunctuationDefault(content);
  } else {
    items = [];
    const _default = tmp(4434).default;
    const parseToASTResult = tmp(4434).default.parseToAST(content, true, { allowLinks: true });
    tmp(8316).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === items(closure_1_2[2]).AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8316);
  }
  return items;
};