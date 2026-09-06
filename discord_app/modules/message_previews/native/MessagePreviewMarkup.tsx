// === Module 10116: MessagePreviewMarkup ===

// Module 10116 (MessagePreviewMarkup)
import privDefault from "priv" /* 1437 */;
import _modDef4257 from "module_4257" /* 4257 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 4997 */;
import MarkupRulesDefault from "MarkupRules" /* 4998 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7879 */;
import MarkupMessagePreviewReactRulesDefault from "MarkupMessagePreviewReactRules" /* 10117 */;

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
  const obj = _modDef4257;
  return obj.reactFor(_modDef4257.ruleOutput(tmpResult, "react"))(tree, initialParserState);
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
    let obj = { allowLinks: true, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], soundboardSounds: [], formatInline: true, noStyleAndInteraction: true, allowHeading: true, allowList: true, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji, unknownUserMentionPlaceholder: true, guildId, channelId, muted: null };
    if (muted == null) {
      muted = false;
    }
    obj.muted = muted;
    obj = { content, layout, color, initialParserState: null, fontScale: null, maxFontSizeMultiplier: null, postProcessor: null };
    obj.initialParserState = obj;
    obj.fontScale = num;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    obj.postProcessor = postProcessor;
    const tmp4 = getOrParseMessagePreviewMarkupAST(obj);
    const items = [MarkupRulesDefault.RULES, MarkupMessagePreviewReactRulesDefault(layout, color, num, maxFontSizeMultiplier)];
    const tmp7Result = combineMarkupRulesDefault(items);
    const obj2 = _modDef4257;
    return obj2.reactFor(_modDef4257.ruleOutput(tmp7Result, "react"))(tmp4, obj);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };