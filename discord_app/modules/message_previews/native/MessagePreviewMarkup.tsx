// === Module 11234: MessagePreviewMarkup ===

// Module 11234 (MessagePreviewMarkup)
import privDefault from "priv" /* 1453 */;
import _modDef2072 from "module_2072" /* 2072 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5826 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5888 */;
import MarkupTypes from "MarkupTypes" /* 6167 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 6168 */;
import MarkupRulesDefault from "MarkupRules" /* 6169 */;
import MarkupMessagePreviewReactRulesDefault from "MarkupMessagePreviewReactRules" /* 11235 */;
import size from "module_2" /* 2 */;

function parseMessagePreviewMarkup(fontScale) {
  ({ muted, layout } = fontScale);
  ({ content, guildId, channelId } = fontScale);
  if (layout === undefined) {
    layout = ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT;
  }
  ({ color, disableAnimatedEmoji, postProcessor } = fontScale);
  if (disableAnimatedEmoji === undefined) {
    disableAnimatedEmoji = true;
  }
  let num = fontScale.fontScale;
  if (num === undefined) {
    num = 1;
  }
  const maxFontSizeMultiplier = fontScale.maxFontSizeMultiplier;
  const obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: true, mentionChannels: [], soundboardSounds: [], formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji, unknownUserMentionPlaceholder: true, guildId, channelId, muted: null };
  if (muted == null) {
    muted = false;
  }
  obj.muted = muted;
  return { tree: getOrParseMessagePreviewMarkupAST({ content, layout, color, initialParserState: obj, fontScale: num, maxFontSizeMultiplier, postProcessor }), initialParserState: obj, ruleParams: { layout, color, fontScale: num, maxFontSizeMultiplier } };
}
function getOrParseMessagePreviewMarkupAST(arg0) {
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  value = closure_5.get(content);
  if (null != value) {
    return value;
  } else {
    items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp11Result = combineMarkupRulesDefault(items);
    let startsWithResult = content.startsWith("```");
    let tmp3;
    if (!startsWithResult) {
      const first = content.split("\n")[0];
      startsWithResult = first.includes("||");
      tmp3 = first;
    }
    if (startsWithResult) {
      tmp3 = content;
    }
    const astParserForResultResult = MarkupUtilsDefault.astParserFor(tmp11Result)(tmp3, true, initialParserState, postProcessor);
    const result = closure_5.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
}
let items = [MarkupTypes.AST_KEY.GAME_MENTION];
const set = new Set(items);
let tmp3 = new privDefault({ max: 2000 });
let closure_5 = tmp3;
let result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export function renderASTToReact(layout) {
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmpResult = combineMarkupRulesDefault(items);
  const obj = _modDef2072;
  return obj.reactFor(_modDef2072.ruleOutput(tmpResult, "react"))(tree, initialParserState);
}
export function getMessagePreviewASTParser(layout) {
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmpResult = combineMarkupRulesDefault(items);
  return MarkupUtilsDefault.astParserFor(tmpResult);
}
export function renderMessagePreviewMarkup(content) {
  if ("" === content.content) {
    return null;
  } else {
    const tmp3 = parseMessagePreviewMarkup(content);
    const obj = { tree: null, initialParserState: null };
    ({ tree: obj.tree, initialParserState: obj.initialParserState } = tmp3);
    const merged = Object.assign(tmp3.ruleParams);
    const layout = obj.layout;
    ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj);
    items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp8Result = combineMarkupRulesDefault(items);
    const obj2 = _modDef2072;
    return obj2.reactFor(_modDef2072.ruleOutput(tmp8Result, "react"))(tree, initialParserState);
  }
}
export function renderMeasuredMessagePreviewMarkup(content) {
  if ("" === content.content) {
    let obj2 = { content: null, mentions: [] };
    return obj2;
  } else {
    const tmp11 = parseMessagePreviewMarkup(content);
    ({ tree: tree2, initialParserState: initialParserState2 } = tmp11);
    const ruleParams = tmp11.ruleParams;
    const _Array = Array;
    let obj = tree2;
    if (!Array.isArray(tree2)) {
      items = [tree2];
      obj = items;
    }
    let obj3 = { content: null, mentions: null };
    const obj6 = { tree: tree2, initialParserState: initialParserState2 };
    let merged = Object.assign(ruleParams);
    let layout = obj6.layout;
    ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj6);
    const flatMapResult = obj.flatMap((type, index) => {
      if (set.has(type.type)) {
        obj = { node: type, prefix: null };
        const obj2 = { tree: obj.slice(0, index), initialParserState: initialParserState2 };
        const merged = Object.assign(ruleParams);
        const layout = obj2.layout;
        ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = obj2);
        items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier)];
        const tmp9Result = combineMarkupRulesDefault(items);
        const obj3 = _modDef2072;
        obj.prefix = obj3.reactFor(_modDef2072.ruleOutput(tmp9Result, "react"))(tree, initialParserState);
        const items1 = [obj];
        let items2 = items1;
      } else {
        items2 = [];
      }
      return items2;
    });
    let items1 = [ruleParams(obj[2]).RULES, ruleParams(obj[3])(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp7 = ruleParams(obj[1]);
    const tmp7Result = ruleParams(obj[1])(items1);
    let obj4 = ruleParams(obj[4]);
    obj3.content = obj4.reactFor(ruleParams(obj[4]).ruleOutput(tmp7Result, "react"))(tree, initialParserState);
    obj3.mentions = flatMapResult;
    return obj3;
  }
}
export const messagePreviewASTCache = tmp3;
export { getOrParseMessagePreviewMarkupAST };