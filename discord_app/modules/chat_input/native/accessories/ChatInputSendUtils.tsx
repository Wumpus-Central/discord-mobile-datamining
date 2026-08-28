// discord_app/modules/chat_input/native/accessories/ChatInputSendUtils.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import getPremiumPlanItemDefault from "../../../../utils/PremiumUtils.tsx";
import KESTREL_GA_UPLOAD_LIMIT_MB from "../../../media_uploads/experiments/KestrelExperiment.tsx";
import rebuildDefault from "../../../messages/MessageParser.tsx";
import dispatcherDefault from "../../../../actions/DraftActionCreators.tsx";
import isMediaAttachment from "../../../forums/ForumPostMediaUtils.tsx";
import useMessageMaxLength from "../../../messages/useMessageMaxLength.tsx";
import _modDef8109 from "../../../../actions/UploadAttachmentActionCreators.tsx";
import items2 from "../../../../utils/ChatRestrictions.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../stores/DraftStore.tsx";
import { DraftType } from "../../../../stores/DraftStore.tsx";
import closure_6 from "../../../../stores/SlowmodeStore.tsx";
import closure_7 from "../../../../stores/UploadAttachmentStore.tsx";
import closure_8 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import { MessageSendLocation } from "../../../messages/MessageConstants.tsx";
import { PremiumUpsellTypes } from "../../../premium/PremiumConstants.tsx";

require = arg1;
function recoverDraft(chatInputRef) {
  ({ channel, content, attachmentsToUpload } = chatInputRef);
  let tmp = attachmentsToUpload.length > 0;
  if (tmp) {
    tmp = 0 === store.getUploadCount(channel.id, DraftType.ChannelMessage);
  }
  if (tmp) {
    let obj = _modDef8109;
    obj = { channelId: null, uploads: null, draftType: null, resetState: true };
    obj[0] = channel.id;
    obj[1] = attachmentsToUpload;
    obj[2] = DraftType.ChannelMessage;
    obj.setUploads(obj);
  }
  let tmp8 = "" !== content;
  if (tmp8) {
    tmp8 = "" === draft.getDraft(channel.id, DraftType.ChannelMessage);
  }
  if (tmp8) {
    dispatcherDefault.saveDraft(channel.id, content, DraftType.ChannelMessage);
    const current = chatInputRef.chatInputRef.current;
    if (current != null) {
      current.setText(content);
    }
    const obj3 = dispatcherDefault;
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
    let obj = chatInputRef(1208);
    obj = { message: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = chatInputRef(7468);
  obj2.saveDraft(channel.id, "", scheduledTimestamp.ChannelMessage);
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (current2 != null) {
    current2.showSideActions();
  }
  let obj3 = channel(11508);
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
    let tmp6Result = tmp6(7374);
    parsed = tmp6Result.parse(channel, tmp16, undefined, mentionGames);
  }
  parsed.tts = tmp14;
  obj = {};
  tmp6Result = tmp6(7148);
  const merged = Object.assign(tmp6Result.getSendMessageOptionsForReply(params.pendingReply));
  obj.location = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = store.getUploads(id, tmp8.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      tmp6(8109).clearAll(id, tmp8.ChannelMessage);
      const tmp6Result1 = tmp6(8109);
    }
  } else {
    items = [];
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      obj1 = { message: "Parsed empty message content from text", data: null };
      obj2 = { text: null };
      obj2[0] = tmp16;
      obj1[1] = obj2;
      tmp6(1208).addBreadcrumb(obj1);
      const tmp6Result2 = tmp6(1208);
    }
    const scheduledMessage = items.getScheduledMessage(channel.id);
    scheduledTimestamp = undefined;
    if (scheduledMessage != null) {
      scheduledTimestamp = scheduledMessage.scheduledTimestamp;
    }
    channel(11186).deletePendingReply(channel.id);
    const tmp6Result3 = tmp6(7148);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.scheduledTimestamp = scheduledTimestamp;
    obj3.attachmentsToUpload = items;
    obj3.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      let obj = channel(closure_1_2[15]);
      obj = { file, guildId: channel.getGuildId(), analyticsLocations: closure_2, code, reason };
      if (obj.handleUploadMessageAttachmentsErrors(obj)) {
        obj = { channel: null, chatInputRef: null, content: null, attachmentsToUpload: null };
        obj[0] = channel;
        obj[1] = chatInputRef;
        obj[2] = parsed.content;
        obj[3] = items;
        closure_1_14(obj);
      }
    };
    const tmp12Result = channel(11186);
    tmp6Result3.sendMessage(id2, parsed, undefined, obj3).catch((arg0) => {
      if (null != scheduledTimestamp) {
        const obj = { channel: null, chatInputRef: null, content: null, attachmentsToUpload: null };
        obj[0] = channel;
        obj[1] = chatInputRef;
        obj[2] = parsed.content;
        obj[3] = items;
        closure_1_14(obj);
      }
      throw arg0;
    });
  }
}
function chatInputValidateContentLength(arg0) {
  ({ text, params } = arg0);
  const current = params.chatInputRef.current;
  let mentionGames;
  if (current != null) {
    const applicationCommandManager = current.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      mentionGames = applicationCommandManager.getMentionGames();
    }
  }
  obj1 = rebuildDefault;
  const parsed = obj1.parse(params.channel, text, undefined, mentionGames);
  let obj2 = useMessageMaxLength;
  if (parsed.content.length <= obj2.getMaxMessageLength()) {
    return parsed;
  } else {
    let tmp2Result = tmp2(4108);
    if (tmp2Result.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      tmp2Result = tmp2(4822);
      let obj = { title: null, body: null };
      const intl = tmp5(1236).intl;
      obj[0] = intl.string(tmp5(1236).t.l8rYLt);
      const intl2 = tmp5(1236).intl;
      obj = { currentLength: null, maxLength: null };
      obj[0] = length;
      obj[1] = tmp5(8106).getMaxMessageLength();
      obj[1] = intl2.formatToPlainString(tmp5(1236).t.FfjF15, obj);
      tmp2Result.show(obj);
      const tmp5Result = tmp5(8106);
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
      const result = tmp2(8115).handleShowUpsellAlert(obj2);
      const tmp2Result2 = tmp2(8115);
    }
  }
}
function showFileSizeExceededAlert(c8, closure_1_2) {
  let sizeStringResult = dependencyMap;
  const currentUser = authStore.getCurrentUser();
  let obj = getPremiumPlanItemDefault;
  if (obj.canUploadLargeFiles(currentUser)) {
    let obj6 = require;
    const kestrelConfig = KESTREL_GA_UPLOAD_LIMIT_MB.getKestrelConfig({ location: "native.showFileSizeExceededAlert" });
    let tmp2Result = tmp2(4822);
    if (kestrelConfig.enabled) {
      if (!kestrelConfig.isGA) {
        const intl = obj6(1236).intl;
        let stringResult = intl.string(obj6(1236).t.bRYgjH);
      }
      obj = { title: null, body: null };
      obj[0] = stringResult;
      const intl3 = obj6(1236).intl;
      obj = { maxSize: null };
      obj6 = obj6(5043);
      sizeStringResult = obj6.sizeString(c8);
      obj[0] = sizeStringResult;
      obj[1] = intl3.formatToPlainString(obj6(1236).t.fxEKdS, obj);
      tmp11(obj);
    }
    const intl2 = obj6(1236).intl;
    stringResult = intl2.string(obj6(1236).t["/tGlcj"]);
    const obj7 = KESTREL_GA_UPLOAD_LIMIT_MB;
  } else {
    tmp2Result = tmp2(8115);
    obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    obj1[0] = constants3.UPLOAD;
    const obj2 = { section: null };
    obj2[0] = constants2.FILE_UPLOAD_POPOUT;
    obj1[1] = obj2;
    const items = [tmp2(5938).FILE_UPLOAD_POPOUT];
    obj1[2] = items;
    const obj3 = { type: null };
    obj3[0] = PremiumUpsellTypes.UPLOAD_ERROR_UPSELL;
    obj1[3] = obj3;
    obj1[4] = closure_1_2;
    const result = tmp2Result.handleShowUpsellAlert(obj1);
  }
}
function _chatInputSendApplicationCommand() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0, isAuthorized) {
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
              closure_5 = undefined;
              channel = 1;
              ref = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              ref = 3;
              throw isAuthorized;
            } else if (arg0 === 2) {
              ref = 3;
              obj1 = { value: null, done: true };
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
                closure_5 = isAuthorized;
                let tmp20 = lib.inputType === lib(params[33]).ApplicationCommandInputType.BUILT_IN_TEXT;
                if (tmp20) {
                  tmp20 = null != closure_5;
                }
                if (tmp20) {
                  const obj5 = { text: null, parsedMessage: "Array", tts: "handleSendApplicationCommand", source: null, params: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z" };
                  obj5[0] = closure_5.content;
                  obj5[2] = closure_5.tts;
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
              obj[3] = closure_17;
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
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c9, AnalyticsSections: c10, UpsellTypes: unpackModuleId } = ME);
let result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  require = text;
  const params = text.params;
  dependencyMap = undefined;
  const channel = params.channel;
  if (!channelOnCooldown.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text: null, params: null };
      obj[0] = text;
      obj[1] = params;
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const RESTRICTIONS = items2.RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(text, channel, null != channel.getGuildId());
          let tmp7 = checkResult;
          if (false !== checkResult) {
            let tmp8 = params;
            let tmp9 = dependencyMap;
            let tmp10 = dependencyMap;
            obj1 = params(4822);
            obj = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let tmp11 = require;
            let tmp12 = require;
            let intl = getSystemLocale.intl;
            obj[0] = intl.string(getSystemLocale.t.mY3Y38);
            obj[1] = checkResult.body;
            let intl2 = getSystemLocale.intl;
            obj[2] = intl2.string(getSystemLocale.t.KJnHq3);
            obj[3] = function onConfirm() {
              const obj = { text: closure_0, parsedMessage: closure_2, tts: "accessibilityRole", source: 1359020033, params: 1359227781 };
              obj[4] = params;
              closure_1_15(obj);
            };
            let intl3 = getSystemLocale.intl;
            obj[4] = intl3.string(getSystemLocale.t.fsBWmS);
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
              const obj = { text: closure_0, parsedMessage: closure_2, tts: "accessibilityRole", source: false, params: false };
              obj[4] = params;
              closure_1_15(obj);
            };
            params(4413).openLazy(tmp19(2010)(11510, tmp20.paths), "add-media-to-original-forum-post", obj);
            const obj6 = params(4413);
          }
          obj4 = isMediaAttachment;
          const tmp18 = require;
          tmp19 = require;
          tmp20 = dependencyMap;
        }
        obj1 = { text: null, parsedMessage: null, tts: "accessibilityRole", source: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000778287032280436, params: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012863764834332644 };
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
  let obj = useMessageMaxLength;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      obj = { initialUpsellKey: null, analyticsProperties: null };
      obj[0] = constants3.LONGER_MESSAGE;
      obj = { type: null };
      obj[0] = PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL;
      obj[1] = obj;
      const result = tmp2(8115).handleShowUpsellAlert(obj);
    }
    obj2 = getPremiumPlanItemDefault;
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