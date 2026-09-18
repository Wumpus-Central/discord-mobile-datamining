// === Module 10359: MessagePreviewMarkup ===

// Module 10359 (MessagePreviewMarkup)
import privDefault from "priv" /* 1438 */;
import _modDef2075 from "module_2075" /* 2075 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4712 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 5166 */;
import MarkupRulesDefault from "MarkupRules" /* 5167 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 8084 */;
import MarkupMessagePreviewReactRulesDefault from "MarkupMessagePreviewReactRules" /* 10360 */;

require = fn;
function getOrParseMessagePreviewMarkupAST(arg0) {
  ({ content, layout, color, initialParserState, postProcessor, fontScale, maxFontSizeMultiplier } = arg0);
  value = closure_3.get(content);
  if (null != value) {
    return value;
  } else {
    const items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, fontScale, maxFontSizeMultiplier)];
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
    const result = closure_3.set(content, astParserForResultResult);
    return astParserForResultResult;
  }
}
const tmp2 = new privDefault({ max: 2000 });
let closure_3 = tmp2;
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewMarkup.tsx");

export const renderASTToReact = function renderASTToReact(layout) {
  ({ tree, initialParserState, color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmpResult = combineMarkupRulesDefault(items);
  const obj = _modDef2075;
  return obj.reactFor(_modDef2075.ruleOutput(tmpResult, "react"))(tree, initialParserState);
};
export const getMessagePreviewASTParser = function getMessagePreviewASTParser(layout) {
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmpResult = combineMarkupRulesDefault(items);
  return MarkupUtilsDefault.astParserFor(tmpResult);
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
    const obj4 = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], soundboardSounds: [], formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji, unknownUserMentionPlaceholder: true, guildId, channelId, muted: null };
    if (muted == null) {
      muted = false;
    }
    obj4.muted = muted;
    const obj = { content, layout, color, initialParserState: obj4, fontScale: num, maxFontSizeMultiplier, postProcessor };
    const tmp4 = getOrParseMessagePreviewMarkupAST(obj);
    const items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, num, maxFontSizeMultiplier)];
    const tmp7Result = combineMarkupRulesDefault(items);
    const obj2 = _modDef2075;
    return obj2.reactFor(_modDef2075.ruleOutput(tmp7Result, "react"))(tmp4, obj4);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };