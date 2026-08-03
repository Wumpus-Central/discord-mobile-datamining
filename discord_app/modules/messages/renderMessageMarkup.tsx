function getInitialParserState(channelId) {
  const renderOptions = channelId.renderOptions;
  const obj = { channelId: channelId.channelId, messageId: channelId.messageId, authorId: channelId.authorId, allowLinks: Boolean(renderOptions.allowLinks), allowDevLinks: Boolean(renderOptions.allowDevLinks), allowGameMentions: Boolean(renderOptions.allowGameMentions), allowTimeMentionInput: Boolean(renderOptions.allowTimeMentionInput), formatInline: Boolean(renderOptions.formatInline), noStyleAndInteraction: Boolean(renderOptions.noStyleAndInteraction), allowHeading: Boolean(renderOptions.allowHeading), allowList: Boolean(renderOptions.allowList), previewLinkTarget: Boolean(renderOptions.previewLinkTarget), disableAnimatedEmoji: Boolean(renderOptions.disableAnimatedEmoji), allowEmojiLinks: false, disableAutoBlockNewlines: true, mentionChannels: [], mentionGames: null, soundboardSounds: null, muted: false, unknownUserMentionPlaceholder: true, viewingChannelId: null, forceWhite: null, textColor: null, disablePressableChannelMention: null };
  obj[16] = new Map();
  obj[17] = [];
  obj[20] = renderOptions.viewingChannelId;
  obj[21] = Boolean(renderOptions.forceWhite);
  obj[22] = renderOptions.textColor;
  obj[23] = Boolean(renderOptions.disablePressableChannelMention);
  return obj;
}
function render(arg0, channelId, toAST) {
  let contentMessage;
  let mentionGames;
  let render;
  let closure_0 = channelId;
  toAST = toAST.toAST;
  let closure_1 = undefined !== toAST && toAST;
  const hideSimpleEmbedContent = toAST.hideSimpleEmbedContent;
  let closure_2 = undefined === hideSimpleEmbedContent || hideSimpleEmbedContent;
  const formatInline = toAST.formatInline;
  let closure_3 = undefined !== formatInline && formatInline;
  ({ postProcessor: render, contentMessage } = toAST);
  let c6 = false;
  let c7 = false;
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
  ({ mentionChannels: obj2.mentionChannels, mentionGames } = channelId);
  if (mentionGames == null) {
    const _Map = Map;
    mentionGames = new Map();
  }
  obj.mentionGames = mentionGames;
  let soundboardSounds = channelId.soundboardSounds;
  if (soundboardSounds == null) {
    soundboardSounds = [];
  }
  obj.soundboardSounds = soundboardSounds;
  obj = {
    hasSpoilerEmbeds: c6,
    hasBailedAst: c7,
    content: arg0(content, true, obj, (ast, inline) => {
      let c6;
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
let result = require("set").fileFinishedImporting("modules/messages/renderMessageMarkup.tsx");

export default function renderMessageMarkup(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp2 = importDefault(4183);
  return render(obj.formatInline ? tmp2.parseInlineReply : tmp2.parse, arg0, obj);
};
export const getInitialParserStateFromMessage = function getInitialParserStateFromMessage(message, closure_7) {
  let mentionGames;
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
  ({ mentionChannels: obj2.mentionChannels, mentionGames } = message);
  if (mentionGames == null) {
    const _Map = Map;
    mentionGames = new Map();
  }
  obj.mentionGames = mentionGames;
  let soundboardSounds = message.soundboardSounds;
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
  const tmp2 = importDefault(4183);
  obj = {};
  const merged = Object.assign(obj);
  obj.toAST = true;
  return render(obj.formatInline ? tmp2.parseInlineReplyToAST : tmp2.parseToAST, message, obj);
};
export const renderMessageContentMarkup = function renderMessageContentMarkup(notifCenterV2MessagePreviewParser, arg1, arg2) {
  let authorId;
  let channelId;
  let content;
  let guildId;
  let messageId;
  const obj = { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], mentionGames: null, soundboardSounds: null, formatInline: true, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, previewLinkTarget: false, disableAnimatedEmoji: true, guildId: null, channelId: null, messageId: null, authorId: null, muted: false, disablePressableChannelMention: true };
  ({ content, guildId, channelId, messageId, authorId } = arg1);
  obj[5] = new Map();
  obj[6] = [];
  obj[14] = guildId;
  obj[15] = channelId;
  obj[16] = messageId;
  obj[17] = authorId;
  return notifCenterV2MessagePreviewParser(content, true, obj, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};
export const renderAutomodMessageMarkup = function renderAutomodMessageMarkup(arg0, arg1, arg2) {
  const obj = { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], mentionGames: null, soundboardSounds: null, formatInline: false, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, highlightWord: null, disableAnimatedEmoji: false, channelId: null, muted: false };
  obj[5] = new Map();
  obj[6] = [];
  obj[12] = arg1;
  obj[14] = arg2;
  return importDefault(4183).parseAutoModerationSystemMessage(arg0, true, obj, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};
export const renderAutomodMessageMarkupToAST = function renderAutomodMessageMarkupToAST(arg0, arg1, arg2) {
  const obj = { allowLinks: false, allowDevLinks: false, allowEmojiLinks: false, allowGameMentions: false, mentionChannels: [], mentionGames: null, soundboardSounds: null, formatInline: false, noStyleAndInteraction: false, allowHeading: false, allowList: false, disableAutoBlockNewlines: true, highlightWord: null, disableAnimatedEmoji: false, channelId: null, muted: false };
  obj[5] = new Map();
  obj[6] = [];
  obj[12] = arg1;
  obj[14] = arg2;
  return importDefault(4183).parseAutoModerationSystemMessageToAST(arg0, true, obj, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};