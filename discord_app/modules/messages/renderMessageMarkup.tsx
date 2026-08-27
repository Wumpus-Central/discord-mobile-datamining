// === Module 7564: getInitialParserState ===

// Module 7564 (getInitialParserState)
import set from "set" /* 2 */;
import get_defaultRulesDefault from "get defaultRules" /* 4435 */;

function getInitialParserState(channelId) {
  const renderOptions = channelId.renderOptions;
  return { channelId: channelId.channelId, messageId: channelId.messageId, authorId: channelId.authorId, allowLinks: Boolean(renderOptions.allowLinks), allowDevLinks: Boolean(renderOptions.allowDevLinks), allowGameMentions: Boolean(renderOptions.allowGameMentions), allowTimeMentionInput: Boolean(renderOptions.allowTimeMentionInput), formatInline: Boolean(renderOptions.formatInline), noStyleAndInteraction: Boolean(renderOptions.noStyleAndInteraction), allowHeading: Boolean(renderOptions.allowHeading), allowList: Boolean(renderOptions.allowList), previewLinkTarget: Boolean(renderOptions.previewLinkTarget), disableAnimatedEmoji: Boolean(renderOptions.disableAnimatedEmoji), allowEmojiLinks: false, disableAutoBlockNewlines: true, mentionChannels: [], soundboardSounds: [], muted: false, unknownUserMentionPlaceholder: true, viewingChannelId: renderOptions.viewingChannelId, forceWhite: Boolean(renderOptions.forceWhite), textColor: renderOptions.textColor, disablePressableChannelMention: Boolean(renderOptions.disablePressableChannelMention) };
}
function render(arg0, channelId, toAST) {
  closure_0 = channelId;
  toAST = toAST.toAST;
  closure_1 = undefined !== toAST && toAST;
  const hideSimpleEmbedContent = toAST.hideSimpleEmbedContent;
  closure_2 = undefined === hideSimpleEmbedContent || hideSimpleEmbedContent;
  const formatInline = toAST.formatInline;
  closure_3 = undefined !== formatInline && formatInline;
  ({ postProcessor: render, contentMessage } = toAST);
  c6 = false;
  c7 = false;
  if (contentMessage == null) {
    contentMessage = channelId;
  }
  const content = contentMessage.content;
  let obj = { channelId: channelId.channel_id, messageId: channelId.id, authorId: null, renderOptions: null };
  const author = channelId.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  obj[2] = id;
  obj[3] = toAST;
  const tmpResult = closure_3(obj);
  obj = {};
  const merged = Object.assign(tmpResult);
  let allowLinks = tmp4;
  if (null == channelId.webhookId) {
    allowLinks = tmpResult.allowLinks;
  }
  obj.allowLinks = allowLinks;
  obj.allowEmojiLinks = null != channelId.webhookId;
  ({ mentionChannels: obj2.mentionChannels, soundboardSounds } = channelId);
  if (soundboardSounds == null) {
    soundboardSounds = [];
  }
  obj.soundboardSounds = soundboardSounds;
  obj = {
    hasSpoilerEmbeds: c6,
    hasBailedAst: c7,
    content: arg0(content, true, obj, (ast, inline) => {
      let flag = arg2;
      if (arg2 == null) {
        flag = false;
      }
      let obj = channelId(table[0]);
      obj = { ast, inline, hasBailedAst: flag, message: channelId, contentMessage, messageContent: content, hideSimpleEmbedContent: table, formatInline: closure_3, toAST: closure_1 };
      const result = obj.runMessageMarkupPostProcessors(obj);
      ({ ast, hasSpoilerEmbeds: c6 } = result);
      let tmp2 = ast;
      if (null != callback) {
        tmp2 = callback(ast, inline);
      }
      return tmp2;
    })
  };
  return obj;
}
let result = set.fileFinishedImporting("modules/messages/renderMessageMarkup.tsx");

export default function renderMessageMarkup(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp2 = get_defaultRulesDefault;
  return render(obj.formatInline ? tmp2.parseInlineReply : tmp2.parse, arg0, obj);
};
export const getInitialParserStateFromMessage = function getInitialParserStateFromMessage(message, closure_7) {
  let obj = { channelId: message.channel_id, messageId: message.id, authorId: null, renderOptions: null };
  const author = message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  obj[2] = id;
  obj[3] = closure_7;
  const tmpResult = getInitialParserState(obj);
  obj = {};
  const merged = Object.assign(tmpResult);
  let allowLinks = tmp4;
  if (null == message.webhookId) {
    allowLinks = tmpResult.allowLinks;
  }
  obj.allowLinks = allowLinks;
  obj.allowEmojiLinks = null != message.webhookId;
  ({ mentionChannels: obj2.mentionChannels, soundboardSounds } = message);
  if (soundboardSounds == null) {
    soundboardSounds = [];
  }
  obj.soundboardSounds = soundboardSounds;
  return obj;
};
export { getInitialParserState };
export const renderMessageMarkupWithParser = function renderMessageMarkupWithParser(NativeSearchResultLinkPreviewParser, arg1, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return render(NativeSearchResultLinkPreviewParser, arg1, obj);
};
export const renderMessageMarkupToAST = function renderMessageMarkupToAST(message, result) {
  let obj = result;
  if (result === undefined) {
    obj = {};
  }
  const tmp2 = get_defaultRulesDefault;
  obj = {};
  const merged = Object.assign(obj);
  obj.toAST = true;
  return render(obj.formatInline ? tmp2.parseInlineReplyToAST : tmp2.parseToAST, message, obj);
};
export const renderMessageContentMarkup = function renderMessageContentMarkup(notifCenterV2MessagePreviewParser, guildId, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (obj === undefined) {
    obj = {};
  }
  obj = { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], soundboardSounds: [], formatInline: true, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji: true, guildId: guildId.guildId, channelId: guildId.channelId, messageId: guildId.messageId, authorId: guildId.authorId, muted: false, disablePressableChannelMention: true, textColor: obj.textColor };
  return notifCenterV2MessagePreviewParser(guildId.content, true, obj, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};
export const renderAutomodMessageMarkup = function renderAutomodMessageMarkup(arg0, highlightWord, channelId) {
  return get_defaultRulesDefault.parseAutoModerationSystemMessage(arg0, true, { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], soundboardSounds: [], formatInline: false, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, highlightWord, disableAnimatedEmoji: false, channelId, muted: false }, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};
export const renderAutomodMessageMarkupToAST = function renderAutomodMessageMarkupToAST(arg0, highlightWord, channelId) {
  return get_defaultRulesDefault.parseAutoModerationSystemMessageToAST(arg0, true, { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], soundboardSounds: [], formatInline: false, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, highlightWord, disableAnimatedEmoji: false, channelId, muted: false }, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};