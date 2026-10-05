// discord_app/modules/search/native/message_parsers/MessageSearchResultParser.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import SearchConstants from "../../SearchConstants.tsx";
import CachedSearchResultParser2 from "CachedSearchResultParser.tsx";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let closure_3 = SearchConstants.EMBED_TYPES_WITHOUT_DESCRIPTION;
const CachedSearchResultParser = CachedSearchResultParser2.CachedSearchResultParser;
class SearchResultMessageParser extends CachedSearchResultParser {
  constructor(searchQueryString, lineClamp) {
    let closure_0;
    let tmp3;
    const tmp4 = new SearchResultMessageParser(tmp3, tmp2, tmp, new.target, this);
    _require = tmp4;
    tmp4.truncateMessage = function truncateMessage(content, tokenizedQueryContent) {
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
        let obj = set(closure_1[4]);
        const self = this;
        const self2 = this;
        set = new Set(obj.analyze(tokenizedQueryContent));
        const parts = str4.split(/(\W+)/g);
        const found = parts.find((item) => {
          const obj = set(dependencyMap[4]);
          return obj.shouldHighlight(item, set);
        });
        if (null == found) {
          return null;
        } else {
          const _RegExp = RegExp;
          const self3 = this;
          const self4 = this;
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
      }
    };
    tmp4.getSearchResults = function getSearchResults(content) {
      if (null != closure_0.tokenizedQueryContent) {
        if ("" !== closure_0.tokenizedQueryContent) {
          let truncateMessageResult = closure_0.truncateMessage(
            content.content,
            closure_0.tokenizedQueryContent,
            closure_0.lineClamp,
          );
          if (null != truncateMessageResult) {
            const self3 = this;
            const self4 = this;
            const tmp14 = new MessageRecord(content);
            tmp14.content = truncateMessageResult;
            return tmp14;
          } else {
            const obj5 = _mod12;
            const chainResult = obj5.chain(content.embeds);
            const mapped = chainResult.map((rawTitle, index) => {
              let obj;
              const truncateMessageResult = closure_1_0.truncateMessage(
                rawTitle.rawTitle,
                closure_1_0.tokenizedQueryContent,
                closure_1_0.lineClamp,
              );
              if (null != truncateMessageResult) {
                obj = { truncated: truncateMessageResult, index, contentType: "title" };
                const obj2 = { truncated: truncateMessageResult, index, contentType: "title" };
              } else {
                const truncateMessage = closure_1_0.truncateMessage;
                let rawDescription;
                if (!set.has(rawTitle.type)) {
                  rawDescription = rawTitle.rawDescription;
                }
                obj = {
                  truncated: truncateMessage(rawDescription, closure_1_0.tokenizedQueryContent, closure_1_0.lineClamp),
                  index,
                  contentType: "description",
                };
                truncateMessage(rawDescription, closure_1_0.tokenizedQueryContent, closure_1_0.lineClamp);
              }
              return obj;
            });
            const iter = mapped.find((truncated) => null != truncated.truncated);
            const valueResult = iter.value();
            if (null != valueResult) {
              let obj4;
              const self = this;
              const self2 = this;
              const tmp3 = new MessageRecord(content);
              const items = [];
              HermesBuiltin.arraySpread(items, tmp3.embeds, 0);
              tmp3.embeds = items;
              let obj2 = {};
              const embeds = tmp3.embeds;
              const index = valueResult.index;
              const merged = Object.assign(tmp3.embeds[valueResult.index]);
              if ("title" === valueResult.contentType) {
                obj4 = { rawTitle: valueResult.truncated };
                const obj3 = { rawTitle: valueResult.truncated };
              } else {
                obj4 = { rawDescription: valueResult.truncated };
              }
              const merged1 = Object.assign(obj4);
              embeds[index] = obj2;
              return tmp3;
            } else {
              return content;
            }
          }
        }
      }
      return content;
    };
    let obj = require("SearchUtils");
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    let obj2 = require("SearchUtils");
    const searchQueryFromTokens = obj2.getSearchQueryFromTokens(tokenizeQueryResult);
    let obj3 = require("SearchUtils");
    const str = obj3.getQueryContentString(searchQueryFromTokens);
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
  }
}
const result = size.fileFinishedImporting("modules/search/native/message_parsers/MessageSearchResultParser.tsx");

export default SearchResultMessageParser;
