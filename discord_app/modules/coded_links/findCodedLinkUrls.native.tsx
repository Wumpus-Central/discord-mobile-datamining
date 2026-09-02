// discord_app/modules/coded_links/findCodedLinkUrls.native.tsx
import set from "../../../_runtime/00002_set.js";
import trimTrailingPunctuationDefault from "findCodedLinkUrlsUsingRegex.tsx";

const result = set.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = trimTrailingPunctuationDefault(content);
  } else {
    items = [];
    const _default = tmp(4468).default;
    const parseToASTResult = tmp(4468).default.parseToAST(content, true, { allowLinks: true });
    tmp(7907).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === items(closure_1_2[2]).AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7907);
  }
  return items;
}
