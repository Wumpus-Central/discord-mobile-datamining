import { t } from "../../../../_runtime/03984_t.js";
import { ChannelListLayoutTypes } from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import { combineMarkupRules } from "../../markup/combineMarkupRules.tsx";
import { parseLink } from "../../markup/MarkupRules.tsx";
import { defaultReactFn } from "../../markup/native/MarkupMessagePreviewReactRules.tsx";
// discord_app/modules/message_previews/native/MessagePreviewMarkup.tsx
const require = arg1;
function getOrParseMessagePreviewMarkupAST(arg0) {
  let color;
  let content;
  let fontScale;
  let initialParserState;
  let layout;
  let maxFontSizeMultiplier;
  let postProcessor;
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  const value = tmp2.get(content);
  if (null != value) {
    return value;
  } else {
    const items = [parseLink.RULES, defaultReactFn(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp11 = combineMarkupRules;
    const tmp11Result = combineMarkupRules(items);
    const obj3 = require("../../markup/MarkupUtils.tsx") /* get defaultRules */;
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
    const astParserForResultResult = require("../../markup/MarkupUtils.tsx") /* get defaultRules */.astParserFor(tmp11Result)(tmp3, true, initialParserState, postProcessor);
    const result = obj.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
  obj = tmp2;
}
const tmp2 = new require("priv")({ max: 2000 });
let c3 = tmp2;
let result = require("defaultReactFn").fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export const renderASTToReact = function renderASTToReact(layout) {
  let color;
  let fontScale;
  let initialParserState;
  let maxFontSizeMultiplier;
  let tree;
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [parseLink.RULES, defaultReactFn(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = combineMarkupRules;
  const tmpResult = combineMarkupRules(items);
  const obj = t;
  return obj.reactFor(t.ruleOutput(tmpResult, "react"))(tree, initialParserState);
};
export const getMessagePreviewASTParser = function getMessagePreviewASTParser(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [parseLink.RULES, defaultReactFn(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = combineMarkupRules;
  const tmpResult = combineMarkupRules(items);
  return require("../../markup/MarkupUtils.tsx") /* get defaultRules */.astParserFor(tmpResult);
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
    layout = ChannelListLayoutTypes /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
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
    let obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: null, mentionGames: null, soundboardSounds: null, formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji: null, unknownUserMentionPlaceholder: true, guildId: null, channelId: null, muted: null };
    obj[4] = [];
    const _Map = Map;
    const map = new Map();
    obj[5] = map;
    obj[6] = [];
    obj[13] = disableAnimatedEmoji;
    obj[15] = guildId;
    obj[16] = channelId;
    if (muted == null) {
      muted = false;
    }
    obj[17] = muted;
    obj = { content: null, layout: null, color: null, initialParserState: null, fontScale: null, maxFontSizeMultiplier: null, postProcessor: null };
    obj[0] = content;
    obj[1] = layout;
    obj[2] = color;
    obj[3] = obj;
    obj[4] = num;
    obj[5] = maxFontSizeMultiplier;
    obj[6] = postProcessor;
    const tmp4 = getOrParseMessagePreviewMarkupAST(obj);
    const items = [parseLink.RULES, defaultReactFn(layout, color, num, maxFontSizeMultiplier)];
    const tmp7 = combineMarkupRules;
    const tmp7Result = combineMarkupRules(items);
    const obj2 = t;
    return obj2.reactFor(t.ruleOutput(tmp7Result, "react"))(tmp4, obj);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };