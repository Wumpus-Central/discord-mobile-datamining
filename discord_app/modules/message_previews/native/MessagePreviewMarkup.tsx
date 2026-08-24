// discord_app/modules/message_previews/native/MessagePreviewMarkup.tsx
import privDefault from "../../../../_runtime/01405_priv.js";
import ChannelListLayoutTypes from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import tDefault from "../../../../_runtime/04095_t.js";
import get_defaultRulesDefault from "../../markup/MarkupUtils.tsx";
import combineMarkupRulesDefault from "../../markup/combineMarkupRules.tsx";
import parseLinkDefault from "../../markup/MarkupRules.tsx";
import defaultReactFnDefault from "../../markup/native/MarkupMessagePreviewReactRules.tsx";

require = arg1;
function getOrParseMessagePreviewMarkupAST(arg0) {
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  const value = closure_3.get(content);
  if (null != value) {
    return value;
  } else {
    const items = [parseLinkDefault.RULES, defaultReactFnDefault(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp11 = combineMarkupRulesDefault;
    const tmp11Result = combineMarkupRulesDefault(items);
    const obj3 = get_defaultRulesDefault;
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
    const astParserForResultResult = get_defaultRulesDefault.astParserFor(tmp11Result)(tmp3, true, initialParserState, postProcessor);
    const result = obj.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
  obj = closure_3;
}
const tmp2 = new privDefault({ max: 2000 });
let closure_3 = tmp2;
let result = require("set").fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export const renderASTToReact = function renderASTToReact(layout) {
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [parseLinkDefault.RULES, defaultReactFnDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = combineMarkupRulesDefault;
  const tmpResult = combineMarkupRulesDefault(items);
  const obj = tDefault;
  return obj.reactFor(tDefault.ruleOutput(tmpResult, "react"))(tree, initialParserState);
};
export const getMessagePreviewASTParser = function getMessagePreviewASTParser(layout) {
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [parseLinkDefault.RULES, defaultReactFnDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = combineMarkupRulesDefault;
  const tmpResult = combineMarkupRulesDefault(items);
  return get_defaultRulesDefault.astParserFor(tmpResult);
};
export const renderMessagePreviewMarkup = function renderMessagePreviewMarkup(fontScale) {
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
    let obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: null, soundboardSounds: null, formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji: null, unknownUserMentionPlaceholder: true, guildId: null, channelId: null, muted: null };
    obj[4] = [];
    obj[5] = [];
    obj[12] = disableAnimatedEmoji;
    obj[14] = guildId;
    obj[15] = channelId;
    if (muted == null) {
      muted = false;
    }
    obj[16] = muted;
    obj = { content: null, layout: null, color: null, initialParserState: null, fontScale: null, maxFontSizeMultiplier: null, postProcessor: null };
    obj[0] = content;
    obj[1] = layout;
    obj[2] = color;
    obj[3] = obj;
    obj[4] = num;
    obj[5] = maxFontSizeMultiplier;
    obj[6] = postProcessor;
    const tmp4 = getOrParseMessagePreviewMarkupAST(obj);
    const items = [parseLinkDefault.RULES, defaultReactFnDefault(layout, color, num, maxFontSizeMultiplier)];
    const tmp7 = combineMarkupRulesDefault;
    const tmp7Result = combineMarkupRulesDefault(items);
    const obj2 = tDefault;
    return obj2.reactFor(tDefault.ruleOutput(tmp7Result, "react"))(tmp4, obj);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };