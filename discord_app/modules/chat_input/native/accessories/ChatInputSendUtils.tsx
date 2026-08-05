// discord_app/modules/chat_input/native/accessories/ChatInputSendUtils.tsx
import closure_3 from "ME";
import { DraftType } from "handleChanged";
import setCooldown from "setCooldown";
import map from "map";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { PremiumUpsellTypes } from "GuildFeatures";

let c10;
let c9;
let metroImportAll;
let require = arg1;
function chatInputSendMessage(params) {
  let chatInputRef;
  let hasAttachmentsToUpload;
  let importDefault;
  let parsedMessage;
  let text;
  let tts;
  ({ text, parsedMessage, tts } = params);
  if (tts === undefined) {
    tts = false;
  }
  params = params.params;
  const channel = params.channel;
  ({ chatInputRef, hasAttachmentsToUpload, analyticsLocations: importDefault } = params);
  let parsed;
  let items;
  if ("" === text) {
    let obj = importDefault(parsed[9]);
    obj = { message: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = importDefault(parsed[10]);
  obj2.saveDraft(channel.id, "", DraftType.ChannelMessage);
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (current2 != null) {
    current2.showSideActions();
  }
  let obj3 = channel(tmp7[11]);
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
  if (current3 != null) {
    const applicationCommandManager = current3.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      const mentionGames = applicationCommandManager.getMentionGames();
    }
  }
  if (parsed == null) {
    let tmp6Result = tmp6(tmp7[12]);
    parsed = tmp6Result.parse(channel, tmp16, undefined, mentionGames);
  }
  parsed.tts = tmp14;
  channel(parsed[13]).deletePendingReply(channel.id);
  obj = {};
  tmp6Result = tmp6(tmp7[14]);
  const merged = Object.assign(tmp6Result.getSendMessageOptionsForReply(params.pendingReply));
  obj.location = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = store.getUploads(id, tmp8.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      tmp6(tmp7[8]).clearAll(id, tmp8.ChannelMessage);
      const tmp6Result1 = tmp6(tmp7[8]);
    }
  } else {
    items = [];
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      const obj1 = { message: "Parsed empty message content from text", data: null };
      obj2 = { text: null };
      obj2[0] = tmp16;
      obj1[1] = obj2;
      tmp6(tmp7[9]).addBreadcrumb(obj1);
      const tmp6Result2 = tmp6(tmp7[9]);
    }
    const tmp6Result3 = tmp6(tmp7[14]);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.attachmentsToUpload = items;
    obj3.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      let obj = channel(parsed[15]);
      obj = { file, guildId: channel.getGuildId(), analyticsLocations: closure_1, code, reason };
      let result = obj.handleUploadMessageAttachmentsErrors(obj);
      if (result) {
        result = items.length > 0;
      }
      if (result) {
        obj = { channelId: null, uploads: null, draftType: null, resetState: true };
        obj[0] = tmp2.id;
        obj[1] = items;
        obj[2] = outer1_4.ChannelMessage;
        outer1_1(tmp[8]).setUploads(obj);
        const obj3 = outer1_1(tmp[8]);
        outer1_1(tmp[10]).saveDraft(tmp2.id, parsed.content, outer1_4.ChannelMessage);
        const obj5 = outer1_1(tmp[10]);
      }
    };
    tmp6Result3.sendMessage(id2, parsed, undefined, obj3);
  }
}
function chatInputValidateContentLength(arg0) {
  let params;
  let text;
  ({ text, params } = arg0);
  const current = params.chatInputRef.current;
  let mentionGames;
  if (current != null) {
    const applicationCommandManager = current.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      mentionGames = applicationCommandManager.getMentionGames();
    }
  }
  let obj1 = importDefault(7062);
  const parsed = obj1.parse(params.channel, text, undefined, mentionGames);
  let obj2 = require(8164) /* useMessageMaxLength */;
  if (parsed.content.length <= obj2.getMaxMessageLength()) {
    return parsed;
  } else {
    let tmp2Result = tmp2(3931);
    if (tmp2Result.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      tmp2Result = tmp2(4623);
      let obj = { title: null, body: null };
      const intl = tmp5(1236).intl;
      obj[0] = intl.string(tmp5(1236).t.l8rYLt);
      const intl2 = tmp5(1236).intl;
      obj = { currentLength: null, maxLength: null };
      obj[0] = length;
      obj[1] = tmp5(8164).getMaxMessageLength();
      obj[1] = intl2.formatToPlainString(tmp5(1236).t.FfjF15, obj);
      tmp2Result.show(obj);
      const tmp5Result = tmp5(8164);
      obj1 = { type: "Message Too Long Alert iOS", message_content_length: null };
      obj1[1] = length;
      tmp2(698).track(constants.OPEN_MODAL, obj1);
      const tmp2Result1 = tmp2(698);
    } else {
      obj2 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      obj2[0] = constants3.LONGER_MESSAGE;
      obj2[1] = {};
      obj2[2] = params.analyticsLocations;
      const obj3 = { type: null };
      obj3[0] = PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL;
      obj2[3] = obj3;
      const result = tmp2(8173).handleShowUpsellAlert(obj2);
      const tmp2Result2 = tmp2(8173);
    }
  }
}
function showFileSizeExceededAlert(c8, outer1_2) {
  let sizeStringResult = dependencyMap;
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(3931);
  if (obj.canUploadLargeFiles(currentUser)) {
    let obj6 = require;
    const kestrelConfig = require(4863) /* KESTREL_GA_UPLOAD_LIMIT_MB */.getKestrelConfig({ location: "native.showFileSizeExceededAlert" });
    let tmp2Result = tmp2(4623);
    if (kestrelConfig.enabled) {
      if (!kestrelConfig.isGA) {
        const intl = obj6(1236).intl;
        let stringResult = intl.string(obj6(1236).t.bRYgjH);
      }
      obj = { title: null, body: null };
      obj[0] = stringResult;
      const intl3 = obj6(1236).intl;
      obj = { maxSize: null };
      obj6 = obj6(4822);
      sizeStringResult = obj6.sizeString(c8);
      obj[0] = sizeStringResult;
      obj[1] = intl3.formatToPlainString(obj6(1236).t.fxEKdS, obj);
      tmp11(obj);
    }
    const intl2 = obj6(1236).intl;
    stringResult = intl2.string(obj6(1236).t["/tGlcj"]);
    const obj7 = require(4863) /* KESTREL_GA_UPLOAD_LIMIT_MB */;
  } else {
    tmp2Result = tmp2(8173);
    const obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    obj1[0] = constants3.UPLOAD;
    const obj2 = { section: null };
    obj2[0] = constants2.FILE_UPLOAD_POPOUT;
    obj1[1] = obj2;
    const items = [tmp2(5630).FILE_UPLOAD_POPOUT];
    obj1[2] = items;
    const obj3 = { type: null };
    obj3[0] = PremiumUpsellTypes.UPLOAD_ERROR_UPSELL;
    obj1[3] = obj3;
    obj1[4] = outer1_2;
    const result = tmp2Result.handleShowUpsellAlert(obj1);
  }
}
function _chatInputSendApplicationCommand() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, isAuthorized) {
      let c0;
      let c1;
      if (ref === 2) {
        ref = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw isAuthorized;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = isAuthorized;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          ref = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              ref = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              ref = 3;
              obj = { value: null, done: true };
              obj[0] = isAuthorized;
              return obj;
            } else {
              let params = tmp5;
              let callback = tmp2;
              let lib;
              callback = undefined;
              params = undefined;
              ({ command: c0, optionValues: c1 } = lib.applicationCommand);
              params = lib.params;
              channel = undefined;
              ref = undefined;
              let setCooldown;
              channel = 1;
              ref = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              ref = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              ref = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = isAuthorized;
              return obj1;
            } else {
              channel = params.channel;
              ref = params.chatInputRef;
              const current = ref.current;
              if (current != null) {
                current.clearText();
              }
              let obj7 = lib(params[30]);
              const obj2 = { applicationId: null, channel: null, commandIntegrationTypes: null };
              obj2[0] = lib.applicationId;
              obj2[1] = params.channel;
              obj2[2] = lib.integration_types;
              channel = 3;
              ref = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj7.installApplicationOnDemandIfNeeded(obj2);
              return obj3;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                ref = 3;
                throw isAuthorized;
              } else if (arg0 === 2) {
                ref = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = isAuthorized;
                return obj4;
              } else {
                setCooldown = isAuthorized;
                let tmp20 = lib.inputType === lib(params[33]).ApplicationCommandInputType.BUILT_IN_TEXT;
                if (tmp20) {
                  tmp20 = null != setCooldown;
                }
                if (tmp20) {
                  const obj5 = { text: null, parsedMessage: "Array", tts: "handleSendApplicationCommand", source: null, params: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z" };
                  obj5[0] = setCooldown.content;
                  obj5[2] = setCooldown.tts;
                  obj5[4] = params;
                  callback2(obj5);
                }
              }
            } else if (arg0 === 1) {
              ref = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              ref = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = isAuthorized;
              return obj6;
            } else if (isAuthorized.isAuthorized) {
              obj = { command: null, optionValues: null, context: null, maxSizeCallback: null };
              obj[0] = lib;
              obj[1] = callback;
              obj1 = lib(params[32]);
              obj7 = { channel: null, type: "channel" };
              obj7[0] = channel;
              obj[2] = obj1.getCommandContext(obj7);
              obj[3] = closure_15;
              channel = 2;
              ref = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = callback(params[31])(obj);
              return obj8;
            }
            ref = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp37) {
          ref = tmp;
          throw tmp37;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _chatInputSendApplicationCommand = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9, UpsellTypes: c10 } = ME);
let result = require("setCooldown").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  const require = text;
  const params = text.params;
  let dependencyMap;
  const channel = params.channel;
  if (!channelOnCooldown.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text: null, params: null };
      obj[0] = text;
      obj[1] = params;
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const RESTRICTIONS = require(9826) /* items */.RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(text, channel, null != channel.getGuildId());
          let tmp7 = checkResult;
          if (false !== checkResult) {
            let tmp8 = params;
            let tmp9 = dependencyMap;
            let tmp10 = dependencyMap;
            let obj1 = params(4623);
            obj = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let tmp11 = require;
            let tmp12 = require;
            let intl = require(1236) /* getSystemLocale */.intl;
            obj[0] = intl.string(require(1236) /* getSystemLocale */.t.mY3Y38);
            obj[1] = checkResult.body;
            let intl2 = require(1236) /* getSystemLocale */.intl;
            obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.KJnHq3);
            obj[3] = function onConfirm() {
              const obj = { text: closure_0, parsedMessage: c2, tts: "accessibilityRole", source: "Array", params: "isArray" };
              obj[4] = params;
              outer1_13(obj);
            };
            let intl3 = require(1236) /* getSystemLocale */.intl;
            obj[4] = intl3.string(require(1236) /* getSystemLocale */.t.fsBWmS);
            let showResult = obj1.show(obj);
            let tmp14 = iter;
            iter.return();
          }
        }
        const uploads = store.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          if (obj4.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            obj = { threadId: null, attachments: null, sendMessage: null };
            obj[0] = channel.id;
            obj[1] = uploads;
            obj[2] = function sendMessage() {
              const obj = { text: closure_0, parsedMessage: c2, tts: "accessibilityRole", source: "captureReplay", params: "isArrayBuffer" };
              obj[4] = params;
              outer1_13(obj);
            };
            params(4253).openLazy(tmp19(1959)(11301, tmp20.paths), "add-media-to-original-forum-post", obj);
            const obj6 = params(4253);
          }
          obj4 = require(8216) /* isMediaAttachment */;
          const tmp18 = require;
          tmp19 = require;
          tmp20 = dependencyMap;
        }
        obj1 = { text: null, parsedMessage: null, tts: "accessibilityRole", source: "<string:16777688>", params: "<string:33405505>" };
        obj1[0] = text;
        obj1[1] = tmp2;
        obj1[4] = params;
        chatInputSendMessage(obj1);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  let obj = require(8164) /* useMessageMaxLength */;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      obj = { initialUpsellKey: null, analyticsProperties: null };
      obj[0] = constants3.LONGER_MESSAGE;
      obj = { type: null };
      obj[0] = PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL;
      obj[1] = obj;
      const result = tmp2(8173).handleShowUpsellAlert(obj);
    }
    obj2 = importDefault(3931);
    tmp2 = importDefault;
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand(arg0) {
  const self = this;
  const apply = _chatInputSendApplicationCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};