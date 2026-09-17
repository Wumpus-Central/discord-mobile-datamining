// === Module 8246: transformNativeMarkupNode ===

// Module 8246 (transformNativeMarkupNode)
import MarkupTypes from "MarkupTypes" /* 5083 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function textNode(arg0) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: "\n" };
}
function transformNode(type, channelId) {
  switch (type.type) {
    case "text":
      const obj2 = { type: null, content: null };
      const result = require("MarkupInvisibleUnicode").stripLeadingInvisibleUnicode(type.value);
      obj2.type = require("MarkupTypes").AST_KEY.TEXT;
      obj2.content = result;
      return obj2;
    case "paragraph":
      return transformNativeInline(type.value, channelId);
    case "bold":
      const obj7 = { type: require("MarkupTypes").AST_KEY.STRONG, content: transformNativeInline(type.value, channelId) };
      return obj7;
    case "italic":
      const obj8 = { type: require("MarkupTypes").AST_KEY.ITALICS, content: transformNativeInline(type.value, channelId) };
      return obj8;
    case "underline":
      const obj9 = { type: require("MarkupTypes").AST_KEY.UNDERLINE, content: transformNativeInline(type.value, channelId) };
      return obj9;
    case "strikethrough":
      const obj10 = { type: require("MarkupTypes").AST_KEY.STRIKETHROUGH, content: transformNativeInline(type.value, channelId) };
      return obj10;
    case "spoiler":
      const obj12 = { type: require("MarkupTypes").AST_KEY.SPOILER, content: transformNativeInline(type.value, channelId), channelId: channelId.channelId };
      return obj12;
    case "code":
      const obj13 = { type: require("MarkupTypes").AST_KEY.INLINE_CODE, content: type.value };
      return obj13;
    case "code_block":
      let str4 = type.value.language;
      if (str4 == null) {
        str4 = "";
      }
      const replaced = type.value.content.replace(/^\n+|\n+$/g, "");
      let replaced1 = replaced;
      if ("ansi" === str4.toLowerCase()) {
        replaced1 = replaced.replaceAll(regExp, "");
      }
      if (true === channelId.formatInline) {
        const obj14 = { type: require("MarkupTypes").AST_KEY.INLINE_CODE, content: replaced1 };
        let obj15 = obj14;
      } else {
        obj15 = { type: require("MarkupTypes").AST_KEY.CODE_BLOCK, content: replaced1, lang: str4, inQuote: true === channelId.inQuote };
      }
      return obj15;
    case "heading":
      const obj16 = { type: require("MarkupTypes").AST_KEY.HEADING, level: type.value.level, content: transformNativeInline(type.value.content, channelId) };
      return obj16;
    case "list":
      value = type.value;
      _require = channelId;
      const obj17 = { type: require("MarkupTypes").AST_KEY.LIST, ordered: "ordered" === value.type, start: null, items: null };
      ({ value: obj11.start, items } = value);
      obj17.items = items.map((content) => transformNativeBlocks(content.content, closure_0, "listItem"));
      return obj17;
    case "quote":
      if (true === channelId.formatInline) {
        let obj18 = transformNativeBlocks(type.value, channelId, "quote");
      } else {
        obj18 = { type: require("MarkupTypes").AST_KEY.BLOCK_QUOTE, content: null, channelId: null };
        const obj19 = {};
        const merged = Object.assign(channelId);
        obj19.inQuote = true;
        let arr2 = transformNativeBlocks(type.value, obj19, "quote");
        if (arr2.length <= 0) {
          const obj20 = { type: tmp55(5083).AST_KEY.TEXT, content: " " };
          const items1 = [obj20];
          arr2 = items1;
        }
        obj18.content = arr2;
        obj18.channelId = channelId.channelId;
        tmp55 = _require;
      }
      return obj18;
    case "small":
      const obj21 = { type: require("MarkupTypes").AST_KEY.SUBTEXT, content: transformNativeInline(type.value.content, channelId) };
      return obj21;
    case "empty":
      const obj23 = { type: require("MarkupTypes").AST_KEY.TEXT, content: "\n" };
      return obj23;
    case "emoji":
      return require("transformNativeMarkupEmoji").transformNativeEmoji(type.value, channelId);
    case "timestamp":
      return require("transformNativeMarkupTimestamp").transformNativeTimestamp(type.value);
    case "mention":
      return require("transformNativeMarkupMention").transformNativeMention(type.value, channelId);
    case "link":
      if ("mention" === type.value.type) {
        let result1 = require("transformNativeMarkupMentionLink").transformNativeMentionLink(type.value.value, channelId);
        const obj3 = require("transformNativeMarkupMentionLink");
      } else {
        result1 = require("transformNativeMarkupLink").transformNativeLink(type.value, channelId, transformNativeInline);
        if (result1 == null) {
          const obj24 = { type: tmp(5083).AST_KEY.TEXT, content: "" };
          result1 = obj24;
        }
        const obj = require("transformNativeMarkupLink");
        tmp = _require;
      }
      return result1;
    default:
      const obj25 = { type: require("MarkupTypes").AST_KEY.TEXT, content: "" };
      return obj25;
  }
}
function transformNativeInline(value, channelId) {
  const items = [];
  while (tmp !== undefined) {
    let tmp4 = transformNode(tmp2, channelId);
    let tmp5 = tmp4;
    let _Array = Array;
    let push = items.push;
    if (Array.isArray(tmp4)) {
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp6, 0);
      let applyResult = HermesBuiltin.apply(items1, items);
    } else {
      let arr = push(tmp5);
    }
    continue;
  }
  return items;
}
function transformNativeBlocks(value, channelId, quote) {
  const items = [];
  let flag = false;
  const entries = value.entries();
  while (tmp2 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let tmp11 = transformNode(tmp8, channelId);
    let tmp12 = tmp11;
    let push = items.push;
    let _Array = Array;
    if (Array.isArray(tmp11)) {
      let items1 = tmp12;
    } else {
      items1 = [tmp12];
    }
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
    let applyResult = HermesBuiltin.apply(items2, items);
    let tmp21 = tmp3;
    if (tmp3) {
      let tmp23 = value[tmp7 + 1];
      let type;
      if (tmp23 != null) {
        type = tmp23.type;
      }
      tmp21 = "list" === type;
    }
    if (!tmp21) {
      if (set.has(tmp8.type)) {
        let arr = items.push(textNode("\n"));
        flag = true;
      } else if ("empty" !== tmp8.type) {
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
const regExp = new RegExp(fn(4635).ANSI_CONTROL_SEQUENCE_RE, "g");
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupNode.tsx");

export { transformNativeInline };
export { transformNativeBlocks };