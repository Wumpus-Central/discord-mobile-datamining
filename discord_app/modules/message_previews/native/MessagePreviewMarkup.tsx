// discord_app/modules/message_previews/native/MessagePreviewMarkup.tsx
import LRUCacheDefault from "../../../../_runtime/01444_LRUCache.js";
import _modDef1936 from "../../../../_runtime/metro/01936__.js";
import MarkupUtilsDefault from "../../markup/MarkupUtils.tsx";
import combineMarkupRulesDefault from "../../markup/combineMarkupRules.tsx";
import MarkupRulesDefault from "../../markup/MarkupRules.tsx";
import ChannelListLayoutTypes from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import MarkupMessagePreviewReactRulesDefault from "../../markup/native/MarkupMessagePreviewReactRules.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getOrParseMessagePreviewMarkupAST(arg0) {
  let color;
  let content;
  let fontScale;
  let initialParserState;
  let layout;
  let maxFontSizeMultiplier;
  let postProcessor;
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  const value = closure_3.get(content);
  if (null != value) {
    return value;
  } else {
    const items = [,];
    const tmp11 = combineMarkupRulesDefault;
    items[0] = MarkupRulesDefault.RULES;
    items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
    const tmp11Result = tmp11(items);
    const obj3 = MarkupUtilsDefault;
    const astParserForResult = obj3.astParserFor(tmp11Result);
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
    const astParserForResultResult = astParserForResult(tmp3, true, initialParserState, postProcessor);
    const result = closure_3.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
}
const tmp2 = new LRUCacheDefault({ max: 2000 });
let closure_3 = tmp2;
let result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export const renderASTToReact = function renderASTToReact(layout) {
  let color;
  let fontScale;
  let initialParserState;
  let maxFontSizeMultiplier;
  let tree;
  layout = layout.layout;
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [,];
  const tmp = combineMarkupRulesDefault;
  items[0] = MarkupRulesDefault.RULES;
  items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
  const tmpResult = tmp(items);
  const reactFor = _modDef1936.reactFor;
  _modDef1936;
  const obj = _modDef1936;
  return reactFor(obj.ruleOutput(tmpResult, "react"))(tree, initialParserState);
};
export const getMessagePreviewASTParser = function getMessagePreviewASTParser(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  layout = layout.layout;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [,];
  const tmp = combineMarkupRulesDefault;
  items[0] = MarkupRulesDefault.RULES;
  items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier);
  const tmpResult = tmp(items);
  const obj = MarkupUtilsDefault;
  return obj.astParserFor(tmpResult);
};
export const renderMessagePreviewMarkup = function renderMessagePreviewMarkup(fontScale) {
  let channelId;
  let color;
  let content;
  let disableAnimatedEmoji;
  let guildId;
  let layout;
  let muted;
  let postProcessor;
  ({ content, muted, layout } = fontScale);
  ({ guildId, channelId } = fontScale);
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
  if ("" === content) {
    return null;
  } else {
    const obj3 = {
      allowLinks: true,
      allowDevLinks: false,
      allowEmojiLinks: false,
      allowGameMentions: false,
      mentionChannels: [],
      soundboardSounds: [],
      formatInline: true,
      noStyleAndInteraction: true,
      allowHeading: true,
      allowList: true,
      disableAutoBlockNewlines: true,
      previewLinkTarget: false,
      disableAnimatedEmoji,
      unknownUserMentionPlaceholder: true,
      guildId,
      channelId,
      muted,
    };
    if (muted == null) {
      muted = false;
    }
    const obj = {
      content,
      layout,
      color,
      initialParserState: obj3,
      fontScale: num,
      maxFontSizeMultiplier,
      postProcessor,
    };
    const items = [,];
    const tmp4 = getOrParseMessagePreviewMarkupAST(obj);
    const tmp7 = combineMarkupRulesDefault;
    items[0] = MarkupRulesDefault.RULES;
    items[1] = MarkupMessagePreviewReactRulesDefault(layout, color, num, maxFontSizeMultiplier);
    const tmp7Result = tmp7(items);
    const reactFor = _modDef1936.reactFor;
    _modDef1936;
    const obj2 = _modDef1936;
    return reactFor(obj2.ruleOutput(tmp7Result, "react"))(tmp4, obj3);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };
