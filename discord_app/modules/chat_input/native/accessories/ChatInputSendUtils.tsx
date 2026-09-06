// === Module 11997: ChatInputSendUtils ===

// Module 11997 (ChatInputSendUtils)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import KestrelExperiment from "KestrelExperiment" /* 5179 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7777 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7897 */;
import useMessageMaxLength from "useMessageMaxLength" /* 9304 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9307 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 9309 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9313 */;
import ChatRestrictions from "ChatRestrictions" /* 10257 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 11991 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DraftStore from "DraftStore" /* 4901 */;
import SlowmodeStore from "SlowmodeStore" /* 7687 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function recoverDraft(chatInputRef) {
  ({ channel, content, attachmentsToUpload } = chatInputRef);
  let tmp = attachmentsToUpload.length > 0;
  if (tmp) {
    tmp = 0 === UploadAttachmentStore.getUploadCount(channel.id, DraftType.ChannelMessage);
  }
  if (tmp) {
    const obj = { channelId: channel.id, uploads: attachmentsToUpload, draftType: DraftType.ChannelMessage, resetState: true };
    obj.setUploads(obj);
  }
  let tmp8 = "" !== content;
  if (tmp8) {
    tmp8 = "" === DraftStore.getDraft(channel.id, DraftType.ChannelMessage);
  }
  if (tmp8) {
    DraftActionCreatorsDefault.saveDraft(channel.id, content, DraftType.ChannelMessage);
    const current = chatInputRef.chatInputRef.current;
    if (current != null) {
      current.setText(content);
    }
  }
}
function chatInputSendMessage(params) {
  ({ text, parsedMessage, tts } = params);
  if (tts === undefined) {
    tts = false;
  }
  params = params.params;
  const channel = params.channel;
  const chatInputRef = params.chatInputRef;
  ({ hasAttachmentsToUpload, analyticsLocations: dependencyMap } = params);
  let parsed;
  let items;
  let scheduledTimestamp;
  if ("" === text) {
    chatInputRef(1232);
    let obj = { message: null };
    const _HermesInternal = HermesInternal;
    obj.message = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = chatInputRef(7777);
  obj2.saveDraft(channel.id, "", scheduledTimestamp.ChannelMessage);
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (current2 != null) {
    current2.showSideActions();
  }
  let obj3 = channel(11996);
  const handleLegacyCommandsResult = obj3.handleLegacyCommands(text, { channel, isEdit: false });
  let tmp14 = tts;
  parsed = parsedMessage;
  let tmp16 = text;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      text = handleLegacyCommandsResult.content;
    }
    if (null != handleLegacyCommandsResult.tts) {
      tts = handleLegacyCommandsResult.tts;
    }
    tmp14 = tts;
    parsed = parsedMessage;
    tmp16 = text;
  }
  const current3 = chatInputRef.current;
  let applicationCommandManager;
  if (current3 != null) {
    applicationCommandManager = current3.getApplicationCommandManager();
  }
  if (applicationCommandManager != null) {
    const mentionGames = applicationCommandManager.getMentionGames();
  }
  let mentionTimestamps;
  if (applicationCommandManager != null) {
    mentionTimestamps = applicationCommandManager.getMentionTimestamps();
  }
  let result = tmp16;
  if (null != mentionTimestamps) {
    result = tmp16;
    if (mentionTimestamps.size > 0) {
      let tmp12Result = tmp12(11991);
      result = tmp12Result.serializeComposerTimestampMentions(tmp16, mentionTimestamps);
    }
  }
  if (parsed == null) {
    let tmp6Result = tmp6(7682);
    parsed = tmp6Result.parse(channel, result, undefined, mentionGames);
  }
  parsed.tts = tmp14;
  obj = {};
  tmp6Result = tmp6(7456);
  const merged = Object.assign(tmp6Result.getSendMessageOptionsForReply(params.pendingReply));
  obj.location = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = UploadAttachmentStore.getUploads(id, tmp8.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      tmp6(9307).clearAll(id, tmp8.ChannelMessage);
      const tmp6Result1 = tmp6(9307);
    }
  } else {
    items = [];
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      const obj1 = { message: "Parsed empty message content from text", data: null };
      obj2 = { text: tmp16 };
      obj1.data = obj2;
      tmp6(1232).addBreadcrumb(obj1);
      const tmp6Result2 = tmp6(1232);
    }
    const scheduledMessage = items.getScheduledMessage(channel.id);
    scheduledTimestamp = undefined;
    if (scheduledMessage != null) {
      scheduledTimestamp = scheduledMessage.scheduledTimestamp;
    }
    tmp12Result = tmp12(11669);
    tmp12Result.deletePendingReply(channel.id);
    if (applicationCommandManager != null) {
      const result1 = applicationCommandManager.clearTimestampMentions();
    }
    const tmp6Result3 = tmp6(7456);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.scheduledTimestamp = scheduledTimestamp;
    obj3.attachmentsToUpload = items;
    obj3.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      let obj = { file, guildId: channel.getGuildId(), analyticsLocations, code, reason };
      if (obj.handleUploadMessageAttachmentsErrors(obj)) {
        obj = { channel, chatInputRef, content: parsed.content, attachmentsToUpload: items };
        recoverDraft(obj);
      }
    };
    tmp6Result3.sendMessage(id2, parsed, undefined, obj3).catch((error) => {
      if (null != scheduledTimestamp) {
        const obj = { channel, chatInputRef, content: parsed.content, attachmentsToUpload: items };
        recoverDraft(obj);
      }
      throw error;
    });
    const sendMessageResult = tmp6Result3.sendMessage(id2, parsed, undefined, obj3);
  }
}
function chatInputValidateContentLength(params) {
  ({ text, params } = params);
  const current = params.chatInputRef.current;
  let applicationCommandManager;
  if (current != null) {
    applicationCommandManager = current.getApplicationCommandManager();
  }
  let mentionGames;
  if (applicationCommandManager != null) {
    mentionGames = applicationCommandManager.getMentionGames();
  }
  let mentionTimestamps;
  if (applicationCommandManager != null) {
    mentionTimestamps = applicationCommandManager.getMentionTimestamps();
  }
  let result = text;
  if (null != mentionTimestamps) {
    result = text;
    if (mentionTimestamps.size > 0) {
      let obj = ChatInputCommandOptionParser;
      result = obj.serializeComposerTimestampMentions(text, mentionTimestamps);
    }
  }
  let obj1 = MessageParserDefault;
  const parsed = obj1.parse(params.channel, result, undefined, mentionGames);
  let obj2 = useMessageMaxLength;
  if (parsed.content.length <= obj2.getMaxMessageLength()) {
    return parsed;
  } else {
    let tmp7Result = PremiumUtilsDefault;
    if (tmp7Result.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
      tmp7Result = AlertActionCreatorsDefault;
      obj = { title: null, body: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.l8rYLt);
      const intl2 = util.intl;
      obj = { currentLength: length, maxLength: useMessageMaxLength.getMaxMessageLength() };
      obj.body = intl2.formatToPlainString(util.t.FfjF15, obj);
      tmp7Result.show(obj);
      const tmp10Result = useMessageMaxLength;
      obj1 = { type: "Message Too Long Alert iOS", message_content_length: length };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj1);
      const tmp7Result1 = AnalyticsUtilsDefault;
    } else {
      obj2 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations: params.analyticsLocations, analyticsProperties: null };
      const obj3 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj2.analyticsProperties = obj3;
      const result1 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
      const tmp7Result2 = PremiumUpsellUtilsDefault;
    }
  }
}
function showFileSizeExceededAlert(c8, largestFileSize) {
  let sizeStringResult = dependencyMap;
  const currentUser = UserStore.getCurrentUser();
  let obj = PremiumUtilsDefault;
  if (obj.canUploadLargeFiles(currentUser)) {
    let obj6 = require;
    const kestrelConfig = KestrelExperiment.getKestrelConfig({ location: "native.showFileSizeExceededAlert" });
    let tmp2Result = AlertActionCreatorsDefault;
    if (kestrelConfig.enabled) {
      if (!kestrelConfig.isGA) {
        const intl = obj6(1114).intl;
        let stringResult = intl.string(obj6(1114).t.bRYgjH);
      }
      obj = { title: stringResult, body: null };
      const intl3 = obj6(1114).intl;
      obj = { maxSize: null };
      obj6 = obj6(5134);
      sizeStringResult = obj6.sizeString(c8);
      obj.maxSize = sizeStringResult;
      obj.body = intl3.formatToPlainString(obj6(1114).t.fxEKdS, obj);
      tmp11(obj);
    }
    const intl2 = obj6(1114).intl;
    stringResult = intl2.string(obj6(1114).t["/tGlcj"]);
  } else {
    tmp2Result = PremiumUpsellUtilsDefault;
    const obj1 = { initialUpsellKey: constants3.UPLOAD, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    const obj2 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj1.analyticsLocation = obj2;
    const items = [AnalyticsLocationDefault.FILE_UPLOAD_POPOUT];
    obj1.analyticsLocations = items;
    const obj3 = { type: PremiumUpsellTypes.UPLOAD_ERROR_UPSELL };
    obj1.analyticsProperties = obj3;
    obj1.largestFileSize = largestFileSize;
    const result = tmp2Result.handleShowUpsellAlert(obj1);
  }
}
let closure_18 = async function _chatInputSendApplicationCommand(arg0) {
  const channel = params.channel;
  const chatInputRef = params.chatInputRef;
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  let obj7 = closure_130_0(closure_130_2[31]);
  await obj7.installApplicationOnDemandIfNeeded({ applicationId: closure_129_0.applicationId, channel: params.channel, commandIntegrationTypes: closure_129_0.integration_types });
  if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_5 = value;
      let tmp20 = closure_129_0.inputType === closure_130_0(closure_130_2[34]).ApplicationCommandInputType.BUILT_IN_TEXT;
      if (tmp20) {
        tmp20 = null != closure_129_5;
      }
      if (tmp20) {
        closure_130_15({ text: closure_129_5.content, parsedMessage: "Array", tts: closure_129_5.tts, source: null, params });
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else if (value.isAuthorized) {
    const obj = { command: closure_129_0, optionValues: closure_129_1, context: null, maxSizeCallback: null };
    obj7 = { channel, type: "channel" };
    obj.context = closure_130_0(closure_130_2[33]).getCommandContext(obj7);
    obj.maxSizeCallback = closure_130_17;
    c3 = 2;
    c4 = 1;
    closure_130_0(closure_130_2[33]);
    return { value: closure_130_1(closure_130_2[32])(obj), done: false };
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ command: closure_129_0, optionValues: closure_129_1 } = _require.applicationCommand);
  params = _require.params;
  return "PX_16";
};
const DraftType = fn(4901).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, UpsellTypes: closure_11 } = Constants);
const MessageSendLocation = fn(4553).MessageSendLocation;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  const require = text;
  const params = text.params;
  dependencyMap = undefined;
  const channel = params.channel;
  if (!SlowmodeStore.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text, params };
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const RESTRICTIONS = ChatRestrictions.RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(text, channel, null != channel.getGuildId());
          if (false !== checkResult) {
            let obj1 = params(4904);
            obj = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let intl = util.intl;
            obj.title = intl.string(util.t.mY3Y38);
            obj.body = checkResult.body;
            let intl2 = util.intl;
            obj.confirmText = intl2.string(util.t.KJnHq3);
            obj.onConfirm = function onConfirm() {
              chatInputSendMessage({ text, parsedMessage, tts: "accessible", source: null, params });
            };
            let intl3 = util.intl;
            obj.cancelText = intl3.string(util.t.fsBWmS);
            let showResult = obj1.show(obj);
            iter.return();
          }
        }
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          if (obj4.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            obj = {
              threadId: channel.id,
              attachments: uploads,
              sendMessage() {
                          const obj = { text, parsedMessage, tts: "accessible", source: false, params };
                          chatInputSendMessage(obj);
                        }
            };
            params(4527).openLazy(tmp19(1896)(11998, tmp20.paths), "add-media-to-original-forum-post", obj);
            const obj6 = params(4527);
          }
          obj4 = ForumPostMediaUtils;
          tmp19 = require;
          tmp20 = dependencyMap;
        }
        obj1 = { text, parsedMessage: tmp2, tts: "accessible", source: 1090584577, params };
        chatInputSendMessage(obj1);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  let obj = useMessageMaxLength;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
      obj = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsProperties: null };
      obj = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj.analyticsProperties = obj;
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj);
      const tmp2Result = PremiumUpsellUtilsDefault;
    }
    obj2 = PremiumUtilsDefault;
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};