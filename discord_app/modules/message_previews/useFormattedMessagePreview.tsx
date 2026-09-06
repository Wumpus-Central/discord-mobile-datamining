// === Module 10093: useFormattedMessagePreview ===

// Module 10093 (useFormattedMessagePreview)
import MessageTypes from "MessageTypes" /* 1089 */;
import util from "util" /* 1114 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 4793 */;
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import useIsCallActiveDefault from "useIsCallActive" /* 7981 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7986 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function formatMessagePreview(type, isBlocked) {
  if (isBlocked.isBlocked) {
    let obj = { type: "text", text: null };
    const intl29 = util.intl;
    obj.text = intl29.string(util.t.XAkOo2);
    return obj;
  } else if (tmp) {
    obj = { type: "text", text: null };
    const intl28 = util.intl;
    obj.text = intl28.string(util.t["G7p6v/"]);
    return obj;
  } else {
    type = type.type;
    const tmp4 = require;
    if (MessageTypes.MessageTypes.DEFAULT !== type) {
      if (tmp4(1089).MessageTypes.CHANGELOG !== type) {
        if (tmp4(1089).MessageTypes.REPLY !== type) {
          if (tmp4(1089).MessageTypes.CHAT_INPUT_COMMAND !== type) {
            if (tmp4(1089).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
              if (tmp4(1089).MessageTypes.POLL_RESULT !== type) {
                let flag = false;
              }
              if (flag) {
                if (1 === type.embeds.length) {
                  if (type.embeds[0].url === type.content) {
                    if (null != type.embeds[0].rawTitle) {
                      const obj1 = { type: "markup", markup: type.embeds[0].rawTitle };
                      let tmp10 = obj1;
                    }
                    if (null != tmp10) {
                      const obj2 = {};
                      const merged = Object.assign(tmp10);
                      obj2.authorLabel = tmp2;
                      return obj2;
                    }
                  }
                }
                if (null != type.content) {
                  if ("" !== type.content) {
                    const obj3 = { type: "message", message: type };
                    tmp10 = obj3;
                  }
                }
                if (type.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const obj4 = { type: "text", text: null };
                  const intl11 = tmp4(1114).intl;
                  obj4.text = intl11.string(tmp4(1114).t.slFYgi);
                  tmp10 = obj4;
                } else if (type.attachments.length > 0) {
                  const attachments = type.attachments;
                  const everyResult = attachments.every((filename) => require("MediaFormatTesters").isImageFile(filename.filename));
                  let everyResult1 = !everyResult;
                  if (!everyResult) {
                    const attachments2 = type.attachments;
                    everyResult1 = attachments2.every((filename) => require("MediaFormatTesters").isVideoFile(filename.filename));
                  }
                  let everyResult2 = !everyResult;
                  if (!everyResult) {
                    everyResult2 = !everyResult1;
                  }
                  if (everyResult2) {
                    const attachments3 = type.attachments;
                    everyResult2 = attachments3.every((filename) => require("MediaFormatTesters").isAudioFile(filename.filename));
                  }
                  if (everyResult) {
                    const obj5 = { type: "text", text: null, trailingIcon: "image" };
                    const intl10 = tmp4(1114).intl;
                    const obj6 = { count: type.attachments.length };
                    obj5.text = intl10.formatToPlainString(tmp4(1114).t.h4pFfU, obj6);
                    let obj11 = obj5;
                  } else if (everyResult1) {
                    const obj7 = { type: "text", text: null, trailingIcon: "video" };
                    const intl9 = tmp4(1114).intl;
                    const obj8 = { count: type.attachments.length };
                    obj7.text = intl9.formatToPlainString(tmp4(1114).t.SJ6pPX, obj8);
                    obj11 = obj7;
                  } else if (everyResult2) {
                    const obj9 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl8 = tmp4(1114).intl;
                    const obj10 = { count: type.attachments.length };
                    obj9.text = intl8.formatToPlainString(tmp4(1114).t.fnO3hK, obj10);
                    obj11 = obj9;
                  } else {
                    obj11 = { type: "text", text: null, trailingIcon: "attachment" };
                    const intl7 = tmp4(1114).intl;
                    const obj12 = { count: type.attachments.length };
                    obj11.text = intl7.formatToPlainString(tmp4(1114).t["89ihS8"], obj12);
                  }
                  tmp10 = obj11;
                } else if (type.embeds.length > 0) {
                  const embeds = type.embeds;
                  const everyResult3 = embeds.every((url) => {
                    let isImageUrlResult = null != url.url;
                    if (isImageUrlResult) {
                      isImageUrlResult = require("MediaFormatTesters").isImageUrl(url.url);
                      const obj = require("MediaFormatTesters");
                    }
                    return isImageUrlResult;
                  });
                  let everyResult4 = !everyResult3;
                  if (!everyResult3) {
                    const embeds2 = type.embeds;
                    everyResult4 = embeds2.every((url) => {
                      let isVideoUrlResult = null != url.url;
                      if (isVideoUrlResult) {
                        isVideoUrlResult = require("MediaFormatTesters").isVideoUrl(url.url);
                        const obj = require("MediaFormatTesters");
                      }
                      return isVideoUrlResult;
                    });
                  }
                  let everyResult5 = !everyResult3;
                  if (!everyResult3) {
                    everyResult5 = !everyResult4;
                  }
                  if (everyResult5) {
                    const embeds3 = type.embeds;
                    everyResult5 = embeds3.every((url) => {
                      let isAudioFileResult = null != url.url;
                      if (isAudioFileResult) {
                        isAudioFileResult = require("MediaFormatTesters").isAudioFile(url.url);
                        const obj = require("MediaFormatTesters");
                      }
                      return isAudioFileResult;
                    });
                  }
                  if (everyResult3) {
                    const obj13 = { type: "text", text: null, trailingIcon: "image" };
                    const intl6 = tmp4(1114).intl;
                    const obj14 = { count: type.embeds.length };
                    obj13.text = intl6.formatToPlainString(tmp4(1114).t.h4pFfU, obj14);
                    let obj21 = obj13;
                  } else if (everyResult4) {
                    const obj15 = { type: "text", text: null, trailingIcon: "video" };
                    const intl5 = tmp4(1114).intl;
                    const obj16 = { count: type.embeds.length };
                    obj15.text = intl5.formatToPlainString(tmp4(1114).t.SJ6pPX, obj16);
                    obj21 = obj15;
                  } else if (everyResult5) {
                    const obj17 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl4 = tmp4(1114).intl;
                    const obj18 = { count: type.embeds.length };
                    obj17.text = intl4.formatToPlainString(tmp4(1114).t.fnO3hK, obj18);
                    obj21 = obj17;
                  } else {
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawTitle) {
                        const obj19 = { type: "markup", markup: type.embeds[0].rawTitle };
                        obj21 = obj19;
                      }
                    }
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawDescription) {
                        const obj20 = { type: "markup", markup: type.embeds[0].rawDescription };
                        obj21 = obj20;
                      }
                    }
                    obj21 = { type: "text", text: null, trailingIcon: "link" };
                    const intl3 = tmp4(1114).intl;
                    const obj22 = { count: type.embeds.length };
                    obj21.text = intl3.formatToPlainString(tmp4(1114).t["9XuYjs"], obj22);
                  }
                  tmp10 = obj21;
                } else if (type.stickerItems.length > 0) {
                  const obj23 = { type: "text", text: type.stickerItems[0].name, trailingIcon: "sticker" };
                  tmp10 = obj23;
                } else if (type.isPoll()) {
                  const intl2 = tmp4(1114).intl;
                  const poll = type.poll;
                  let text;
                  if (poll != null) {
                    text = poll.question.text;
                  }
                  const obj24 = { type: "text", text: null };
                  const obj25 = { question: text };
                  obj24.text = intl2.formatToPlainString(tmp4(1114).t.ImizdM, obj25);
                  tmp10 = obj24;
                } else if (isForwardMessageDefault(type)) {
                  obj = { type: "text", text: null };
                  const intl = tmp4(1114).intl;
                  obj.text = intl.string(tmp4(1114).t["9ddYKt"]);
                  tmp10 = obj;
                }
              }
              ({ authorNick, otherUser, otherUserNick, isCallActive, currentUserId } = isBlocked);
              if (type.type === tmp4(1089).MessageTypes.RECIPIENT_ADD) {
                if (null != otherUserNick) {
                  const obj26 = { type: "text", text: null };
                  const intl27 = tmp4(1114).intl;
                  const obj27 = { username: authorNick, usernameHook: tmp4(12).identity, otherUsername: otherUserNick, otherUsernameHook: tmp4(12).identity };
                  obj26.text = intl27.formatToPlainString(tmp4(1114).t.MMN2Jq, obj27);
                  let tmp21 = obj26;
                }
                let tmp29;
                if (null != tmp21) {
                  tmp29 = tmp21;
                }
                return tmp29;
              }
              if (type.type === tmp4(1089).MessageTypes.RECIPIENT_REMOVE) {
                if (null != otherUserNick) {
                  let id;
                  if (otherUser != null) {
                    id = otherUser.id;
                  }
                  if (type.author.id === id) {
                    const intl26 = tmp4(1114).intl;
                    const obj28 = { username: authorNick, usernameHook: tmp4(12).identity };
                    let formatToPlainStringResult = intl26.formatToPlainString(tmp4(1114).t["5v2xa8"], obj28);
                  } else {
                    const intl25 = tmp4(1114).intl;
                    const obj29 = { username: authorNick, usernameHook: tmp4(12).identity, otherUsername: otherUserNick, otherUsernameHook: tmp4(12).identity };
                    formatToPlainStringResult = intl25.formatToPlainString(tmp4(1114).t.L2FyVq, obj29);
                  }
                  const obj30 = { type: "text", text: formatToPlainStringResult };
                  tmp21 = obj30;
                }
              }
              if (type.type === tmp4(1089).MessageTypes.CALL) {
                if (isCallActive) {
                  const intl24 = tmp4(1114).intl;
                  let stringResult = intl24.string(tmp4(1114).t["NGg/fm"]);
                } else {
                  if (null != type.call) {
                    const participants = type.call.participants;
                    if (!participants.includes(currentUserId)) {
                      const intl22 = tmp4(1114).intl;
                      stringResult = intl22.string(tmp4(1114).t["2CnhoI"]);
                    }
                  }
                  const intl23 = tmp4(1114).intl;
                  stringResult = intl23.string(tmp4(1114).t.v05Xd6);
                }
                const obj31 = { type: "text", text: stringResult, color: null, trailingIcon: null };
                let str2;
                if (isCallActive) {
                  str2 = "text-feedback-positive";
                }
                obj31.color = str2;
                let str3 = "call-ended";
                if (isCallActive) {
                  str3 = "call-active";
                }
                obj31.trailingIcon = str3;
                tmp21 = obj31;
              } else if (type.type === tmp4(1089).MessageTypes.CHANNEL_NAME_CHANGE) {
                const obj32 = { type: "text", text: null };
                const intl21 = tmp4(1114).intl;
                const obj33 = { username: authorNick, usernameHook: tmp4(12).identity, channelName: type.content };
                obj32.text = intl21.formatToPlainString(tmp4(1114).t.oItgEw, obj33);
                tmp21 = obj32;
              } else if (type.type === tmp4(1089).MessageTypes.CHANNEL_ICON_CHANGE) {
                const obj34 = { type: "text", text: null };
                const intl20 = tmp4(1114).intl;
                const obj35 = { username: authorNick, usernameHook: tmp4(12).identity };
                obj34.text = intl20.formatToPlainString(tmp4(1114).t.OEdU6X, obj35);
                tmp21 = obj34;
              } else if (type.type === tmp4(1089).MessageTypes.CHANNEL_PINNED_MESSAGE) {
                const obj36 = { type: "text", text: null };
                const intl19 = tmp4(1114).intl;
                const obj37 = { username: authorNick, usernameHook: tmp4(12).identity };
                obj36.text = intl19.formatToPlainString(tmp4(1114).t.vfkjqx, obj37);
                tmp21 = obj36;
              } else if (type.type === tmp4(1089).MessageTypes.USER_JOIN) {
                let obj38 = { type: "text", text: null };
                const intl18 = tmp4(1114).intl;
                obj38 = SystemMessageUtilsDefault;
                const obj39 = { username: authorNick, usernameHook: null };
                const systemMessageUserJoin = obj38.getSystemMessageUserJoin(type.id);
                obj39.usernameHook = tmp4(12).identity;
                obj38.text = intl18.formatToPlainString(systemMessageUserJoin, obj39);
                tmp21 = obj38;
              } else if (type.type === tmp4(1089).MessageTypes.THREAD_CREATED) {
                const obj40 = { type: "text", text: null };
                const intl17 = tmp4(1114).intl;
                const obj41 = { actorName: authorNick, actorHook: tmp4(12).identity, threadName: type.content, threadOnClick: tmp4(12).identity };
                obj40.text = intl17.formatToPlainString(tmp4(1114).t.SGaUAU, obj41);
                tmp21 = obj40;
              } else if (type.type === tmp4(1089).MessageTypes.PREMIUM_REFERRAL) {
                const obj42 = { type: "text", text: null };
                const intl16 = tmp4(1114).intl;
                const obj43 = { username: authorNick };
                obj42.text = intl16.formatToPlainString(tmp4(1114).t.lieTqU, obj43);
                tmp21 = obj42;
              } else if (type.type === tmp4(1089).MessageTypes.STAGE_START) {
                const obj44 = { type: "text", text: null };
                const intl15 = tmp4(1114).intl;
                const obj45 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj44.text = intl15.formatToPlainString(tmp4(1114).t.aZtRW8, obj45);
                tmp21 = obj44;
              } else if (type.type === tmp4(1089).MessageTypes.STAGE_END) {
                const obj46 = { type: "text", text: null };
                const intl14 = tmp4(1114).intl;
                const obj47 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj46.text = intl14.formatToPlainString(tmp4(1114).t.vMJhvG, obj47);
                tmp21 = obj46;
              } else if (type.type === tmp4(1089).MessageTypes.STAGE_SPEAKER) {
                const obj48 = { type: "text", text: null };
                const intl13 = tmp4(1114).intl;
                const obj49 = { username: authorNick, usernameOnClick: tmp4(12).identity };
                obj48.text = intl13.formatToPlainString(tmp4(1114).t.V4uCm4, obj49);
                tmp21 = obj48;
              } else if (type.type === tmp4(1089).MessageTypes.STAGE_TOPIC) {
                const obj50 = { type: "text", text: null };
                const intl12 = tmp4(1114).intl;
                const obj51 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj50.text = intl12.formatToPlainString(tmp4(1114).t.ro3RM0, obj51);
                tmp21 = obj50;
              } else if (type.type === tmp4(1089).MessageTypes.VOICE_SESSION) {
                const obj52 = { type: "text", text: tmp4(8071).getVoiceSessionMessageContent(type) };
                tmp21 = obj52;
                const tmp4Result = tmp4(8071);
              }
            }
          }
        }
      }
    }
    flag = true;
  }
}
const MessageFlags = fn(1074).MessageFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export const isMessageContentPreviewable = function isMessageContentPreviewable(messageRecord) {
  const type = messageRecord.type;
  if (MessageTypes.MessageTypes.DEFAULT !== type) {
    if (tmp(1089).MessageTypes.CHANGELOG !== type) {
      if (tmp(1089).MessageTypes.REPLY !== type) {
        if (tmp(1089).MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (tmp(1089).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (tmp(1089).MessageTypes.POLL_RESULT !== type) {
              if (tmp(1089).MessageTypes.AUTO_MODERATION_ACTION !== type) {
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
};
export const useFormattedMessagePreview = function useFormattedMessagePreview(message, channel) {
  _require = message;
  let obj = require("initialize");
  const items = [RelationshipStore];
  const items1 = [message.author.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isBlocked: RelationshipStore.isBlocked(message.author.id), isIgnored: RelationshipStore.isIgnored(message.author.id) }), items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmp4 = useIsCallActiveDefault(channel.id, message.id);
  const items2 = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => id.getId());
  const nick = useMessageAuthorDefault(message).nick;
  let stringResult = nick;
  if (message.type !== require("MessageTypes").MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (message.author.id === stateFromStores) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.LuZzxn);
    }
  }
  let tmpResult = tmp(504);
  const items3 = [UserStore];
  const stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
    let user;
    if (message.mentions.length > 0) {
      user = UserStore.getUser(tmp.mentions[0]);
    }
    return user;
  });
  tmpResult = tmp(4793);
  obj = { message, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: tmpResult.useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp4 };
  return formatMessagePreview(message, obj);
};
export { formatMessagePreview };