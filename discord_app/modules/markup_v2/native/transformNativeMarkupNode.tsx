// discord_app/modules/markup_v2/native/transformNativeMarkupNode.tsx
import HighlightJsAnsiLanguage from "../../../utils/HighlightJsAnsiLanguage.tsx";
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function textNode(arg0) {
  const obj = { type: MarkupTypes.AST_KEY.TEXT, content: "\n" };
  return obj;
}
function transformNode(type, channelId) {
  let arr2;
  let result;
  switch (type.type) {
    case "text": {
      const obj5 = { type: require("MarkupTypes").AST_KEY.TEXT, content: result };
      const obj20 = require("MarkupInvisibleUnicode");
      result = obj20.stripLeadingInvisibleUnicode(type.value);
      return obj5;
    }
    case "paragraph": {
      return transformNativeInline(type.value, channelId);
    }
    case "bold": {
      const obj6 = {
        type: require("MarkupTypes").AST_KEY.STRONG,
        content: transformNativeInline(type.value, channelId),
      };
      return obj6;
    }
    case "italic": {
      const obj7 = {
        type: require("MarkupTypes").AST_KEY.ITALICS,
        content: transformNativeInline(type.value, channelId),
      };
      return obj7;
    }
    case "underline": {
      const obj8 = {
        type: require("MarkupTypes").AST_KEY.UNDERLINE,
        content: transformNativeInline(type.value, channelId),
      };
      return obj8;
    }
    case "strikethrough": {
      const obj10 = {
        type: require("MarkupTypes").AST_KEY.STRIKETHROUGH,
        content: transformNativeInline(type.value, channelId),
      };
      return obj10;
    }
    case "spoiler": {
      const obj11 = {
        type: require("MarkupTypes").AST_KEY.SPOILER,
        content: transformNativeInline(type.value, channelId),
        channelId: channelId.channelId,
      };
      return obj11;
    }
    case "code": {
      const obj12 = { type: require("MarkupTypes").AST_KEY.INLINE_CODE, content: type.value };
      return obj12;
    }
    case "code_block": {
      let obj14;
      const str4 = type.value.content;
      const replaced = str4.replace(/^\n+|\n+$/g, "");
      let replaced1 = replaced;
      if ("ansi" === (type.value.language ?? "").toLowerCase()) {
        replaced1 = replaced.replaceAll(regExp, "");
      }
      if (true === channelId.formatInline) {
        obj14 = { type: require("MarkupTypes").AST_KEY.INLINE_CODE, content: replaced1 };
        const obj13 = { type: require("MarkupTypes").AST_KEY.INLINE_CODE, content: replaced1 };
      } else {
        obj14 = {
          type: require("MarkupTypes").AST_KEY.CODE_BLOCK,
          content: replaced1,
          lang: str3,
          inQuote: true === channelId.inQuote,
        };
      }
      return obj14;
    }
    case "heading": {
      const obj15 = {
        type: require("MarkupTypes").AST_KEY.HEADING,
        level: type.value.level,
        content: transformNativeInline(type.value.content, channelId),
      };
      return obj15;
    }
    case "list": {
      let items;
      const value = type.value;
      _require = channelId;
      const obj16 = {
        type: require("MarkupTypes").AST_KEY.LIST,
        ordered: "ordered" === value.type,
        start: null,
        items: items.map((content) => transformNativeBlocks(content.content, channelId, "listItem")),
      };
      ({ value: obj9.start, items } = value);
      return obj16;
    }
    case "quote": {
      let obj17;
      if (true === channelId.formatInline) {
        obj17 = transformNativeBlocks(type.value, channelId, "quote");
      } else {
        obj17 = { type: require("MarkupTypes").AST_KEY.BLOCK_QUOTE, content: arr2, channelId: channelId.channelId };
        const value2 = type.value;
        const obj18 = { inQuote: true };
        const merged = Object.assign(channelId);
        arr2 = transformNativeBlocks(value2, obj18, "quote");
        const tmp51 = _require;
        if (arr2.length <= 0) {
          const items1 = [{ type: tmp51(5792).AST_KEY.TEXT, content: " " }];
          arr2 = items1;
          const obj19 = { type: tmp51(5792).AST_KEY.TEXT, content: " " };
        }
      }
      return obj17;
    }
    case "small": {
      const obj21 = {
        type: require("MarkupTypes").AST_KEY.SUBTEXT,
        content: transformNativeInline(type.value.content, channelId),
      };
      return obj21;
    }
    case "empty": {
      const obj22 = { type: require("MarkupTypes").AST_KEY.TEXT, content: "\n" };
      return obj22;
    }
    case "emoji": {
      const obj4 = require("transformNativeMarkupEmoji");
      return obj4.transformNativeEmoji(type.value, channelId);
    }
    case "timestamp": {
      const obj3 = require("transformNativeMarkupTimestamp");
      return obj3.transformNativeTimestamp(type.value);
    }
    case "mention": {
      const obj2 = require("transformNativeMarkupMention");
      return obj2.transformNativeMention(type.value, channelId);
    }
    case "link": {
      const obj = require("transformNativeMarkupLink");
      return obj.transformNativeLink(type.value, channelId, transformNativeInline);
    }
    default: {
      const obj23 = { type: require("MarkupTypes").AST_KEY.TEXT, content: "" };
      return obj23;
    }
  }
}
function transformNativeInline(value, channelId) {
  const items = [];
  const tmp2 = value[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = transformNode(tmp3, channelId);
    let tmp6 = tmp5;
    let _Array = Array;
    let push = items.push;
    if (Array.isArray(tmp5)) {
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp7, 0);
      let applyResult = HermesBuiltin.apply(push, items1, items);
    } else {
      let arr = push(tmp6);
    }
    continue;
  }
  return items;
}
function transformNativeBlocks(content, channelId, quote) {
  let tmp8;
  let tmp9;
  const items = [];
  let flag = false;
  const entries = content.entries();
  const tmp3 = entries[Symbol.iterator]();
  const tmp4 = "listItem" === quote;
  while (tmp3 !== undefined) {
    let items1;
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let tmp12 = transformNode(tmp9, channelId);
    let tmp13 = tmp12;
    let push = items.push;
    let _Array = Array;
    if (Array.isArray(tmp12)) {
      items1 = tmp13;
    } else {
      items1 = [tmp13];
    }
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, items1, 0);
    let applyResult = HermesBuiltin.apply(push, items2, items);
    let tmp22 = tmp4;
    if (tmp22) {
      let tmp24 = content[tmp8 + 1];
      let type;
      if (tmp24 != null) {
        type = tmp24.type;
      }
      tmp22 = "list" === type;
    }
    if (!tmp22) {
      if (set.has(tmp9.type)) {
        let arr = items.push(textNode("\n"));
        flag = true;
      } else if ("empty" !== tmp9.type) {
        flag = false;
      }
    }
    continue;
  }
  if (null != quote) {
    if (flag) {
      items.pop();
    }
  } else if (items.length > 0) {
    const atResult = items.at(-1);
    if (atResult.type === MarkupTypes.AST_KEY.TEXT) {
      if ("\n" === atResult.content) {
        items.pop();
        while (items.length > 0) {
          let atResult1 = items.at(-1);
          if (atResult1.type !== MarkupTypes.AST_KEY.TEXT) {
            break;
          } else {
            if ("\n" === atResult1.content) {
              continue;
            } else {
              break;
            }
            break;
          }
        }
      }
    }
  }
  return items;
}
const set = new Set(["paragraph", "quote"]);
const regExp = new RegExp(HighlightJsAnsiLanguage.ANSI_CONTROL_SEQUENCE_RE, "g");
let result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupNode.tsx");

export { transformNativeInline };
export { transformNativeBlocks };
