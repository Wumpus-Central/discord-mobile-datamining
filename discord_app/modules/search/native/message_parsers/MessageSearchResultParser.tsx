// === Module 16523: prototype ===

// Module 16523 (prototype)
import closure_2 from "hasFlag" /* 4131 */;
import { EMBED_TYPES_WITHOUT_DESCRIPTION as closure_3 } from "MessageEmbedTypes" /* 7632 */;

const require = arg1;
require("CachedSearchResultParser").CachedSearchResultParser;
const prototype = function SearchResultMessageParser(searchQueryString, lineClamp) {
  const tmp4 = new prototype(tmp3, tmp2, tmp, new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  const _require = tmp4;
  tmp4.truncateMessage = function truncateMessage(content, tokenizedQueryContent, lineClamp) {
    let num = lineClamp;
    if (lineClamp === undefined) {
      num = 1;
    }
    let set;
    if (null == content) {
      return null;
    } else {
      const str4 = content.replace(/(\r\n|\n|\r)/gm, " ");
      const _Set = Set;
      set = new Set(set(table[4]).analyze(tokenizedQueryContent));
      const parts = str4.split(/(\W+)/g);
      const found = parts.find((arg0) => set(closure_1_1[4]).shouldHighlight(arg0, set));
      if (null == found) {
        return null;
      } else {
        const _RegExp = RegExp;
        const regExp = new RegExp("\\b" + found + "\\b");
        const searchResult = str4.search(regExp);
        if (-1 === searchResult) {
          return null;
        } else {
          const _Math = Math;
          const bound = Math.max(0, searchResult - (30 * num - found.length));
          let str2 = "";
          if (bound > 0) {
            str2 = "...";
          }
          const _HermesInternal = HermesInternal;
          return "" + str2 + str4.substring(bound);
        }
      }
      const obj = set(table[4]);
    }
  };
  tmp4.getSearchResults = function getSearchResults(content) {
    let obj = lib;
    if (null != lib.tokenizedQueryContent) {
      if ("" !== obj.tokenizedQueryContent) {
        let truncateMessageResult = obj.truncateMessage(content.content, obj.tokenizedQueryContent, obj.lineClamp);
        if (null != truncateMessageResult) {
          const tmp18 = new closure_1_2(content);
          tmp18.content = truncateMessageResult;
          return tmp18;
        } else {
          const obj5 = lib(closure_1_1[5]);
          const mapped = lib(closure_1_1[5]).chain(content.embeds).map((rawTitle) => {
            let obj = closure_0;
            const truncateMessageResult = closure_0.truncateMessage(rawTitle.rawTitle, closure_0.tokenizedQueryContent, closure_0.lineClamp);
            if (null != truncateMessageResult) {
              obj = { truncated: null, index: null, contentType: "title" };
              obj[0] = truncateMessageResult;
              obj[1] = arg1;
            } else {
              let rawDescription;
              if (!closure_1_3.has(rawTitle.type)) {
                rawDescription = rawTitle.rawDescription;
              }
              const truncateMessageResult1 = obj.truncateMessage(rawDescription, obj.tokenizedQueryContent, obj.lineClamp);
              obj = { truncated: null, index: null, contentType: "description" };
              obj[0] = truncateMessageResult1;
              obj[1] = arg1;
            }
            return obj;
          });
          const chainResult = lib(closure_1_1[5]).chain(content.embeds);
          const valueResult = mapped.find((truncated) => null != truncated.truncated).value();
          if (null != valueResult) {
            const tmp5 = new closure_1_2(content);
            const items = [];
            HermesBuiltin.arraySpread(tmp5.embeds, 0);
            tmp5.embeds = items;
            obj = {};
            const merged = Object.assign(tmp5.embeds[valueResult.index]);
            if ("title" === valueResult.contentType) {
              obj = { rawTitle: null };
              obj[0] = valueResult.truncated;
              obj1 = obj;
            } else {
              obj1 = { rawDescription: null };
              obj1[0] = valueResult.truncated;
            }
            const merged1 = Object.assign(obj1);
            tmp5.embeds[valueResult.index] = obj;
            return tmp5;
          } else {
            return content;
          }
          const iter = mapped.find((truncated) => null != truncated.truncated);
        }
      }
    }
    return content;
  };
  let obj = _require(12130);
  const tokenizeQueryResult = _require(12130).tokenizeQuery(searchQueryString);
  const searchQueryFromTokens = _require(12130).getSearchQueryFromTokens(tokenizeQueryResult);
  const obj2 = _require(12130);
  const str = _require(12130).getQueryContentString(searchQueryFromTokens);
  let str2;
  if (str != null) {
    str2 = str.trim();
  }
  if (str2 == null) {
    str2 = "";
  }
  tmp4.tokenizedQueryContent = str2;
  tmp4.lineClamp = lineClamp;
  return tmp4;
}.prototype;
class prototype extends CachedSearchResultParser {
}
const result = require("set").fileFinishedImporting("modules/search/native/message_parsers/MessageSearchResultParser.tsx");

export default prototype;