// discord_app/modules/search/native/message_parsers/MessageSearchResultParser.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";

require = fn;
let closure_3 = fn(7878).EMBED_TYPES_WITHOUT_DESCRIPTION;
fn(16711).CachedSearchResultParser;
const prototype = function SearchResultMessageParser(searchQueryString, lineClamp) {
  const tmp4 = new prototype(tmp3, tmp2, tmp, new.target, new.target);
  _require = tmp4;
  tmp4.truncateMessage = function truncateMessage(content, tokenizedQueryContent, lineClamp) {
    let num = lineClamp;
    if (lineClamp === undefined) {
      num = 1;
    }
    set = undefined;
    if (null == content) {
      return null;
    } else {
      const str4 = content.replace(/(\r\n|\n|\r)/gm, " ");
      const _Set = Set;
      set = new Set(set(16712).analyze(tokenizedQueryContent));
      const parts = str4.split(/(\W+)/g);
      const found = parts.find((item) => set(16712).shouldHighlight(item, set));
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
      const obj = set(16712);
    }
  };
  tmp4.getSearchResults = function getSearchResults(content) {
    let obj = closure_0;
    if (null != closure_0.tokenizedQueryContent) {
      if ("" !== obj.tokenizedQueryContent) {
        let truncateMessageResult = obj.truncateMessage(content.content, obj.tokenizedQueryContent, obj.lineClamp);
        if (null != truncateMessageResult) {
          const tmp18 = new MessageRecord(content);
          tmp18.content = truncateMessageResult;
          return tmp18;
        } else {
          const mapped = _mod12.chain(content.embeds).map((rawTitle, index) => {
            let obj = closure_1_0;
            const truncateMessageResult = closure_1_0.truncateMessage(
              rawTitle.rawTitle,
              closure_1_0.tokenizedQueryContent,
              closure_1_0.lineClamp,
            );
            if (null != truncateMessageResult) {
              obj = { truncated: truncateMessageResult, index, contentType: "title" };
            } else {
              let rawDescription;
              if (!set.has(rawTitle.type)) {
                rawDescription = rawTitle.rawDescription;
              }
              const truncateMessageResult1 = obj.truncateMessage(
                rawDescription,
                obj.tokenizedQueryContent,
                obj.lineClamp,
              );
              obj = { truncated: truncateMessageResult1, index, contentType: "description" };
            }
            return obj;
          });
          const chainResult = _mod12.chain(content.embeds);
          const valueResult = mapped.find((truncated) => null != truncated.truncated).value();
          if (null != valueResult) {
            const tmp5 = new MessageRecord(content);
            const items = [];
            HermesBuiltin.arraySpread(tmp5.embeds, 0);
            tmp5.embeds = items;
            obj = {};
            const merged = Object.assign(tmp5.embeds[valueResult.index]);
            if ("title" === valueResult.contentType) {
              obj = { rawTitle: valueResult.truncated };
              let obj1 = obj;
            } else {
              obj1 = { rawDescription: valueResult.truncated };
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
  let obj = require("SearchUtils");
  const tokenizeQueryResult = require("SearchUtils").tokenizeQuery(searchQueryString);
  const searchQueryFromTokens = require("SearchUtils").getSearchQueryFromTokens(tokenizeQueryResult);
  const obj2 = require("SearchUtils");
  const str = require("SearchUtils").getQueryContentString(searchQueryFromTokens);
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
class prototype extends CachedSearchResultParser {}
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/message_parsers/MessageSearchResultParser.tsx");

export default prototype;
