// discord_app/modules/messages/renderMessageMarkup.tsx
import MarkupUtilsDefault from "../markup/MarkupUtils.tsx";
import MarkupPostProcessors from "MarkupPostProcessors.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasSpoilerEmbeds;

const f95059 = (arg0) => {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
function getInitialParserState(channelId) {
  const renderOptions = channelId.renderOptions;
  const obj = {
    channelId: channelId.channelId,
    messageId: channelId.messageId,
    authorId: channelId.authorId,
    allowLinks: Boolean(renderOptions.allowLinks),
    allowDevLinks: Boolean(renderOptions.allowDevLinks),
    allowGameMentions: Boolean(renderOptions.allowGameMentions),
    allowTimeMentionInput: Boolean(renderOptions.allowTimeMentionInput),
    formatInline: Boolean(renderOptions.formatInline),
    noStyleAndInteraction: Boolean(renderOptions.noStyleAndInteraction),
    allowHeading: Boolean(renderOptions.allowHeading),
    allowList: Boolean(renderOptions.allowList),
    previewLinkTarget: Boolean(renderOptions.previewLinkTarget),
    disableAnimatedEmoji: Boolean(renderOptions.disableAnimatedEmoji),
    allowEmojiLinks: false,
    disableAutoBlockNewlines: true,
    mentionChannels: [],
    soundboardSounds: [],
    muted: false,
    unknownUserMentionPlaceholder: true,
    viewingChannelId: renderOptions.viewingChannelId,
    forceWhite: Boolean(renderOptions.forceWhite),
    textColor: renderOptions.textColor,
    disablePressableChannelMention: Boolean(renderOptions.disablePressableChannelMention),
  };
  return obj;
}
function render(fn, channelId, toAST) {
  let c6;
  let contentMessage;
  let id;
  let soundboardSounds;
  const message = channelId;
  toAST = toAST.toAST;
  toAST = undefined !== toAST && toAST;
  let hideSimpleEmbedContent = toAST.hideSimpleEmbedContent;
  hideSimpleEmbedContent = undefined === hideSimpleEmbedContent || hideSimpleEmbedContent;
  let formatInline = toAST.formatInline;
  formatInline = undefined !== formatInline && formatInline;
  ({ postProcessor: render, contentMessage } = toAST);
  hasSpoilerEmbeds = false;
  let flag = false;
  if (contentMessage == null) {
    contentMessage = channelId;
  }
  const content = contentMessage.content;
  let obj = { channelId: channelId.channel_id, messageId: channelId.id, authorId: id, renderOptions: toAST };
  const author = channelId.author;
  id = undefined;
  const tmp = formatInline;
  if (author != null) {
    id = author.id;
  }
  const tmpResult = tmp(obj);
  const obj3 = {
    allowLinks: null != channelId.webhookId || tmpResult.allowLinks,
    allowEmojiLinks: null != channelId.webhookId,
    soundboardSounds,
  };
  const merged = Object.assign(tmpResult);
  ({ mentionChannels: obj2.mentionChannels, soundboardSounds } = channelId);
  if (soundboardSounds == null) {
    soundboardSounds = [];
  }
  const obj5 = {
    hasSpoilerEmbeds,
    hasBailedAst: flag,
    content: fn(content, true, obj3, (ast, inline, arg2) => {
      flag = arg2;
      if (arg2 == null) {
        flag = false;
      }
      const obj = MarkupPostProcessors;
      const obj2 = {
        ast,
        inline,
        hasBailedAst: flag,
        message,
        contentMessage,
        messageContent: content,
        hideSimpleEmbedContent,
        formatInline,
        toAST,
      };
      const result = obj.runMessageMarkupPostProcessors(obj2);
      ({ ast, hasSpoilerEmbeds: c6 } = result);
      let tmp2 = ast;
      if (null != render) {
        tmp2 = render(ast, inline);
      }
      return tmp2;
    }),
  };
  return obj5;
}
let result = size.fileFinishedImporting("modules/messages/renderMessageMarkup.tsx");

export default function renderMessageMarkup(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const formatInline = obj.formatInline;
  const tmp2 = MarkupUtilsDefault;
  return render(formatInline ? tmp2.parseInlineReply : tmp2.parse, arg0, obj);
}
export const getInitialParserStateFromMessage = function getInitialParserStateFromMessage(message, renderOptions) {
  let id;
  let soundboardSounds;
  const author = message.author;
  const obj = { channelId: message.channel_id, messageId: message.id, authorId: id, renderOptions };
  id = undefined;
  if (author != null) {
    id = author.id;
  }
  const tmpResult = getInitialParserState(obj);
  const obj3 = {
    allowLinks: null != message.webhookId || tmpResult.allowLinks,
    allowEmojiLinks: null != message.webhookId,
    soundboardSounds,
  };
  const merged = Object.assign(tmpResult);
  ({ mentionChannels: obj2.mentionChannels, soundboardSounds } = message);
  if (soundboardSounds == null) {
    soundboardSounds = [];
  }
  return obj3;
};
export { getInitialParserState };
export const renderMessageMarkupWithParser = function renderMessageMarkupWithParser(
  NativeSearchResultLinkPreviewParser,
  arg1,
  arg2,
) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return render(NativeSearchResultLinkPreviewParser, arg1, obj);
};
export const renderMessageMarkupToAST = function renderMessageMarkupToAST(message, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const formatInline = obj.formatInline;
  const tmp2 = MarkupUtilsDefault;
  const obj2 = { toAST: true };
  const tmp3 = formatInline ? tmp2.parseInlineReplyToAST : tmp2.parseToAST;
  const merged = Object.assign(obj);
  return render(tmp3, message, obj2);
};
export const renderMessageMarkupToASTWithParser = function renderMessageMarkupToASTWithParser(arg0, message, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const obj2 = { toAST: true };
  const merged = Object.assign(obj);
  return render(arg0, message, obj2);
};
export const renderMessageContentMarkup = function renderMessageContentMarkup(
  notifCenterV2MessagePreviewParser,
  guildId,
  arg2,
) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (obj === undefined) {
    obj = {};
  }
  const obj2 = {
    allowLinks: false,
    allowDevLinks: false,
    allowEmojiLinks: false,
    allowGameMentions: false,
    mentionChannels: [],
    soundboardSounds: [],
    formatInline: true,
    noStyleAndInteraction: false,
    allowHeading: false,
    allowList: false,
    disableAutoBlockNewlines: true,
    previewLinkTarget: false,
    disableAnimatedEmoji: true,
    guildId: guildId.guildId,
    channelId: guildId.channelId,
    messageId: guildId.messageId,
    authorId: guildId.authorId,
    muted: false,
    disablePressableChannelMention: true,
    textColor: obj.textColor,
  };
  return notifCenterV2MessagePreviewParser(guildId.content, true, obj2, (arg0) => {
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  });
};
export const renderAutomodMessageMarkup = function renderAutomodMessageMarkup(arg0, highlightWord, channelId) {
  const obj = {
    allowLinks: false,
    allowDevLinks: false,
    allowEmojiLinks: false,
    allowGameMentions: false,
    mentionChannels: [],
    soundboardSounds: [],
    formatInline: false,
    noStyleAndInteraction: false,
    allowHeading: false,
    allowList: false,
    disableAutoBlockNewlines: true,
    highlightWord,
    disableAnimatedEmoji: false,
    channelId,
    muted: false,
  };
  return MarkupUtilsDefault.parseAutoModerationSystemMessage(arg0, true, obj, f95059);
};
export const renderAutomodMessageMarkupToAST = function renderAutomodMessageMarkupToAST(
  arg0,
  highlightWord,
  channelId,
) {
  const obj = {
    allowLinks: false,
    allowDevLinks: false,
    allowEmojiLinks: false,
    allowGameMentions: false,
    mentionChannels: [],
    soundboardSounds: [],
    formatInline: false,
    noStyleAndInteraction: false,
    allowHeading: false,
    allowList: false,
    disableAutoBlockNewlines: true,
    highlightWord,
    disableAnimatedEmoji: false,
    channelId,
    muted: false,
  };
  return MarkupUtilsDefault.parseAutoModerationSystemMessageToAST(arg0, true, obj, f95059);
};
