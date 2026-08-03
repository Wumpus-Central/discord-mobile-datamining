// === Module 10296: getOrParseMessagePreviewMarkupAST ===

// Module 10296 (getOrParseMessagePreviewMarkupAST)
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
    const items = [importDefault(4626).RULES, importDefault(10297)(layout, color, fontScale, maxFontSizeMultiplier)];
    const tmp11 = importDefault(4625);
    const tmp11Result = importDefault(4625)(items);
    const obj3 = importDefault(4183);
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
    const astParserForResultResult = importDefault(4183).astParserFor(tmp11Result)(tmp3, true, initialParserState, postProcessor);
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
  const items = [importDefault(4626).RULES, importDefault(10297)(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = importDefault(4625);
  const tmpResult = importDefault(4625)(items);
  const obj = importDefault(3892);
  return obj.reactFor(importDefault(3892).ruleOutput(tmpResult, "react"))(tree, initialParserState);
};
export const getMessagePreviewASTParser = function getMessagePreviewASTParser(layout) {
  let color;
  let fontScale;
  let maxFontSizeMultiplier;
  ({ color, fontScale, maxFontSizeMultiplier } = layout);
  const items = [importDefault(4626).RULES, importDefault(10297)(layout.layout, color, fontScale, maxFontSizeMultiplier)];
  const tmp = importDefault(4625);
  const tmpResult = importDefault(4625)(items);
  return importDefault(4183).astParserFor(tmpResult);
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
    layout = require(3871) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
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
    const items = [importDefault(4626).RULES, importDefault(10297)(layout, color, num, maxFontSizeMultiplier)];
    const tmp7 = importDefault(4625);
    const tmp7Result = importDefault(4625)(items);
    const obj2 = importDefault(3892);
    return obj2.reactFor(importDefault(3892).ruleOutput(tmp7Result, "react"))(tmp4, obj);
  }
};
export const messagePreviewASTCache = tmp2;
export { getOrParseMessagePreviewMarkupAST };