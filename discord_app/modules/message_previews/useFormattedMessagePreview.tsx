// === Module 10096: formatMessagePreview ===

// Module 10096 (formatMessagePreview)
import set from "set" /* 686 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useNullableMessageAuthorDefault from "useNullableMessageAuthor" /* 4699 */;
import isForwardMessageDefault from "isForwardMessage" /* 6099 */;
import useIsCallActiveDefault from "useIsCallActive" /* 7822 */;
import getSystemMessageUserJoinMobileDefault from "getSystemMessageUserJoinMobile" /* 7827 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "markAllUserIdListsStale" /* 4098 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { MessageFlags } from "ME" /* 676 */;

require = arg1;
function formatMessagePreview(type, isBlocked) {
  if (isBlocked.isBlocked) {
    let obj = { type: "text", text: null };
    const intl29 = getSystemLocale.intl;
    obj[1] = intl29.string(getSystemLocale.t.XAkOo2);
    return obj;
  } else if (tmp) {
    obj = { type: "text", text: null };
    const intl28 = getSystemLocale.intl;
    obj[1] = intl28.string(getSystemLocale.t["G7p6v/"]);
    return obj;
  } else {
    type = type.type;
    const tmp4 = require;
    if (set.MessageTypes.DEFAULT !== type) {
      if (tmp4(686).MessageTypes.CHANGELOG !== type) {
        if (tmp4(686).MessageTypes.REPLY !== type) {
          if (tmp4(686).MessageTypes.CHAT_INPUT_COMMAND !== type) {
            if (tmp4(686).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
              if (tmp4(686).MessageTypes.POLL_RESULT !== type) {
                let flag = false;
              }
              if (flag) {
                if (1 === type.embeds.length) {
                  if (type.embeds[0].url === type.content) {
                    if (null != type.embeds[0].rawTitle) {
                      obj1 = { type: "markup", markup: null };
                      obj1[1] = type.embeds[0].rawTitle;
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
                    const obj3 = { type: "message", message: null };
                    obj3[1] = type;
                    tmp10 = obj3;
                  }
                }
                if (type.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const obj4 = { type: "text", text: null };
                  const intl11 = tmp4(1236).intl;
                  obj4[1] = intl11.string(tmp4(1236).t.slFYgi);
                  tmp10 = obj4;
                } else if (type.attachments.length > 0) {
                  const attachments = type.attachments;
                  const everyResult = attachments.every((filename) => callback(4636).isImageFile(filename.filename));
                  let everyResult1 = !everyResult;
                  if (!everyResult) {
                    const attachments2 = type.attachments;
                    everyResult1 = attachments2.every((filename) => callback(4636).isVideoFile(filename.filename));
                  }
                  let everyResult2 = !everyResult;
                  if (!everyResult) {
                    everyResult2 = !everyResult1;
                  }
                  if (everyResult2) {
                    const attachments3 = type.attachments;
                    everyResult2 = attachments3.every((filename) => callback(4636).isAudioFile(filename.filename));
                  }
                  if (everyResult) {
                    const obj5 = { type: "text", text: null, trailingIcon: "image" };
                    const intl10 = tmp4(1236).intl;
                    const obj6 = { count: null };
                    obj6[0] = type.attachments.length;
                    obj5[1] = intl10.formatToPlainString(tmp4(1236).t.h4pFfU, obj6);
                    let obj11 = obj5;
                  } else if (everyResult1) {
                    const obj7 = { type: "text", text: null, trailingIcon: "video" };
                    const intl9 = tmp4(1236).intl;
                    const obj8 = { count: null };
                    obj8[0] = type.attachments.length;
                    obj7[1] = intl9.formatToPlainString(tmp4(1236).t.SJ6pPX, obj8);
                    obj11 = obj7;
                  } else if (everyResult2) {
                    const obj9 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl8 = tmp4(1236).intl;
                    const obj10 = { count: null };
                    obj10[0] = type.attachments.length;
                    obj9[1] = intl8.formatToPlainString(tmp4(1236).t.fnO3hK, obj10);
                    obj11 = obj9;
                  } else {
                    obj11 = { type: "text", text: null, trailingIcon: "attachment" };
                    const intl7 = tmp4(1236).intl;
                    const obj12 = { count: null };
                    obj12[0] = type.attachments.length;
                    obj11[1] = intl7.formatToPlainString(tmp4(1236).t["89ihS8"], obj12);
                  }
                  tmp10 = obj11;
                } else if (type.embeds.length > 0) {
                  const embeds = type.embeds;
                  const everyResult3 = embeds.every((url) => {
                    let isImageUrlResult = null != url.url;
                    if (isImageUrlResult) {
                      isImageUrlResult = callback(4636).isImageUrl(url.url);
                      const obj = callback(4636);
                    }
                    return isImageUrlResult;
                  });
                  let everyResult4 = !everyResult3;
                  if (!everyResult3) {
                    const embeds2 = type.embeds;
                    everyResult4 = embeds2.every((url) => {
                      let isVideoUrlResult = null != url.url;
                      if (isVideoUrlResult) {
                        isVideoUrlResult = callback(4636).isVideoUrl(url.url);
                        const obj = callback(4636);
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
                        isAudioFileResult = callback(4636).isAudioFile(url.url);
                        const obj = callback(4636);
                      }
                      return isAudioFileResult;
                    });
                  }
                  if (everyResult3) {
                    const obj13 = { type: "text", text: null, trailingIcon: "image" };
                    const intl6 = tmp4(1236).intl;
                    const obj14 = { count: null };
                    obj14[0] = type.embeds.length;
                    obj13[1] = intl6.formatToPlainString(tmp4(1236).t.h4pFfU, obj14);
                    let obj21 = obj13;
                  } else if (everyResult4) {
                    const obj15 = { type: "text", text: null, trailingIcon: "video" };
                    const intl5 = tmp4(1236).intl;
                    const obj16 = { count: null };
                    obj16[0] = type.embeds.length;
                    obj15[1] = intl5.formatToPlainString(tmp4(1236).t.SJ6pPX, obj16);
                    obj21 = obj15;
                  } else if (everyResult5) {
                    const obj17 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl4 = tmp4(1236).intl;
                    const obj18 = { count: null };
                    obj18[0] = type.embeds.length;
                    obj17[1] = intl4.formatToPlainString(tmp4(1236).t.fnO3hK, obj18);
                    obj21 = obj17;
                  } else {
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawTitle) {
                        const obj19 = { type: "markup", markup: null };
                        obj19[1] = type.embeds[0].rawTitle;
                        obj21 = obj19;
                      }
                    }
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawDescription) {
                        const obj20 = { type: "markup", markup: null };
                        obj20[1] = type.embeds[0].rawDescription;
                        obj21 = obj20;
                      }
                    }
                    obj21 = { type: "text", text: null, trailingIcon: "link" };
                    const intl3 = tmp4(1236).intl;
                    const obj22 = { count: null };
                    obj22[0] = type.embeds.length;
                    obj21[1] = intl3.formatToPlainString(tmp4(1236).t["9XuYjs"], obj22);
                  }
                  tmp10 = obj21;
                } else if (type.stickerItems.length > 0) {
                  const obj23 = { type: "text", text: null, trailingIcon: "sticker" };
                  obj23[1] = type.stickerItems[0].name;
                  tmp10 = obj23;
                } else if (type.isPoll()) {
                  const intl2 = tmp4(1236).intl;
                  const poll = type.poll;
                  let text;
                  if (poll != null) {
                    text = poll.question.text;
                  }
                  const obj24 = { type: "text", text: null };
                  const obj25 = { question: null };
                  obj25[0] = text;
                  obj24[1] = intl2.formatToPlainString(tmp4(1236).t.ImizdM, obj25);
                  tmp10 = obj24;
                } else if (isForwardMessageDefault(type)) {
                  obj = { type: "text", text: null };
                  const intl = tmp4(1236).intl;
                  obj[1] = intl.string(tmp4(1236).t["9ddYKt"]);
                  tmp10 = obj;
                }
              }
              ({ authorNick, otherUser, otherUserNick, isCallActive, currentUserId } = isBlocked);
              if (type.type === tmp4(686).MessageTypes.RECIPIENT_ADD) {
                if (null != otherUserNick) {
                  const obj26 = { type: "text", text: null };
                  const intl27 = tmp4(1236).intl;
                  const obj27 = { username: null, usernameHook: null, otherUsername: null, otherUsernameHook: null };
                  obj27[0] = authorNick;
                  obj27[1] = tmp4(12).identity;
                  obj27[2] = otherUserNick;
                  obj27[3] = tmp4(12).identity;
                  obj26[1] = intl27.formatToPlainString(tmp4(1236).t.MMN2Jq, obj27);
                  let tmp21 = obj26;
                }
                let tmp29;
                if (null != tmp21) {
                  tmp29 = tmp21;
                }
                return tmp29;
              }
              if (type.type === tmp4(686).MessageTypes.RECIPIENT_REMOVE) {
                if (null != otherUserNick) {
                  let id;
                  if (otherUser != null) {
                    id = otherUser.id;
                  }
                  if (type.author.id === id) {
                    const intl26 = tmp4(1236).intl;
                    const obj28 = { username: null, usernameHook: null };
                    obj28[0] = authorNick;
                    obj28[1] = tmp4(12).identity;
                    let formatToPlainStringResult = intl26.formatToPlainString(tmp4(1236).t["5v2xa8"], obj28);
                  } else {
                    const intl25 = tmp4(1236).intl;
                    const obj29 = { username: null, usernameHook: null, otherUsername: null, otherUsernameHook: null };
                    obj29[0] = authorNick;
                    obj29[1] = tmp4(12).identity;
                    obj29[2] = otherUserNick;
                    obj29[3] = tmp4(12).identity;
                    formatToPlainStringResult = intl25.formatToPlainString(tmp4(1236).t.L2FyVq, obj29);
                  }
                  const obj30 = { type: "text", text: null };
                  obj30[1] = formatToPlainStringResult;
                  tmp21 = obj30;
                }
              }
              if (type.type === tmp4(686).MessageTypes.CALL) {
                if (isCallActive) {
                  const intl24 = tmp4(1236).intl;
                  let stringResult = intl24.string(tmp4(1236).t["NGg/fm"]);
                } else {
                  if (null != type.call) {
                    const participants = type.call.participants;
                    if (!participants.includes(currentUserId)) {
                      const intl22 = tmp4(1236).intl;
                      stringResult = intl22.string(tmp4(1236).t["2CnhoI"]);
                    }
                  }
                  const intl23 = tmp4(1236).intl;
                  stringResult = intl23.string(tmp4(1236).t.v05Xd6);
                }
                const obj31 = { type: "text", text: null, color: null, trailingIcon: null };
                obj31[1] = stringResult;
                let str2;
                if (isCallActive) {
                  str2 = "text-feedback-positive";
                }
                obj31[2] = str2;
                let str3 = "call-ended";
                if (isCallActive) {
                  str3 = "call-active";
                }
                obj31[3] = str3;
                tmp21 = obj31;
              } else if (type.type === tmp4(686).MessageTypes.CHANNEL_NAME_CHANGE) {
                const obj32 = { type: "text", text: null };
                const intl21 = tmp4(1236).intl;
                const obj33 = { username: null, usernameHook: null, channelName: null };
                obj33[0] = authorNick;
                obj33[1] = tmp4(12).identity;
                obj33[2] = type.content;
                obj32[1] = intl21.formatToPlainString(tmp4(1236).t.oItgEw, obj33);
                tmp21 = obj32;
              } else if (type.type === tmp4(686).MessageTypes.CHANNEL_ICON_CHANGE) {
                const obj34 = { type: "text", text: null };
                const intl20 = tmp4(1236).intl;
                const obj35 = { username: null, usernameHook: null };
                obj35[0] = authorNick;
                obj35[1] = tmp4(12).identity;
                obj34[1] = intl20.formatToPlainString(tmp4(1236).t.OEdU6X, obj35);
                tmp21 = obj34;
              } else if (type.type === tmp4(686).MessageTypes.CHANNEL_PINNED_MESSAGE) {
                const obj36 = { type: "text", text: null };
                const intl19 = tmp4(1236).intl;
                const obj37 = { username: null, usernameHook: null };
                obj37[0] = authorNick;
                obj37[1] = tmp4(12).identity;
                obj36[1] = intl19.formatToPlainString(tmp4(1236).t.vfkjqx, obj37);
                tmp21 = obj36;
              } else if (type.type === tmp4(686).MessageTypes.USER_JOIN) {
                let obj38 = { type: "text", text: null };
                const intl18 = tmp4(1236).intl;
                obj38 = getSystemMessageUserJoinMobileDefault;
                const obj39 = { username: null, usernameHook: null };
                obj39[0] = authorNick;
                const systemMessageUserJoin = obj38.getSystemMessageUserJoin(type.id);
                obj39[1] = tmp4(12).identity;
                obj38[1] = intl18.formatToPlainString(systemMessageUserJoin, obj39);
                tmp21 = obj38;
              } else if (type.type === tmp4(686).MessageTypes.THREAD_CREATED) {
                const obj40 = { type: "text", text: null };
                const intl17 = tmp4(1236).intl;
                const obj41 = { actorName: null, actorHook: null, threadName: null, threadOnClick: null };
                obj41[0] = authorNick;
                obj41[1] = tmp4(12).identity;
                obj41[2] = type.content;
                obj41[3] = tmp4(12).identity;
                obj40[1] = intl17.formatToPlainString(tmp4(1236).t.SGaUAU, obj41);
                tmp21 = obj40;
              } else if (type.type === tmp4(686).MessageTypes.PREMIUM_REFERRAL) {
                const obj42 = { type: "text", text: null };
                const intl16 = tmp4(1236).intl;
                const obj43 = { username: null };
                obj43[0] = authorNick;
                obj42[1] = intl16.formatToPlainString(tmp4(1236).t.lieTqU, obj43);
                tmp21 = obj42;
              } else if (type.type === tmp4(686).MessageTypes.STAGE_START) {
                const obj44 = { type: "text", text: null };
                const intl15 = tmp4(1236).intl;
                const obj45 = { username: null, usernameOnClick: null, topic: null };
                obj45[0] = authorNick;
                obj45[1] = tmp4(12).identity;
                obj45[2] = type.content;
                obj44[1] = intl15.formatToPlainString(tmp4(1236).t.aZtRW8, obj45);
                tmp21 = obj44;
              } else if (type.type === tmp4(686).MessageTypes.STAGE_END) {
                const obj46 = { type: "text", text: null };
                const intl14 = tmp4(1236).intl;
                const obj47 = { username: null, usernameOnClick: null, topic: null };
                obj47[0] = authorNick;
                obj47[1] = tmp4(12).identity;
                obj47[2] = type.content;
                obj46[1] = intl14.formatToPlainString(tmp4(1236).t.vMJhvG, obj47);
                tmp21 = obj46;
              } else if (type.type === tmp4(686).MessageTypes.STAGE_SPEAKER) {
                const obj48 = { type: "text", text: null };
                const intl13 = tmp4(1236).intl;
                const obj49 = { username: null, usernameOnClick: null };
                obj49[0] = authorNick;
                obj49[1] = tmp4(12).identity;
                obj48[1] = intl13.formatToPlainString(tmp4(1236).t.V4uCm4, obj49);
                tmp21 = obj48;
              } else if (type.type === tmp4(686).MessageTypes.STAGE_TOPIC) {
                const obj50 = { type: "text", text: null };
                const intl12 = tmp4(1236).intl;
                const obj51 = { username: null, usernameOnClick: null, topic: null };
                obj51[0] = authorNick;
                obj51[1] = tmp4(12).identity;
                obj51[2] = type.content;
                obj50[1] = intl12.formatToPlainString(tmp4(1236).t.ro3RM0, obj51);
                tmp21 = obj50;
              } else if (type.type === tmp4(686).MessageTypes.VOICE_SESSION) {
                const obj52 = { type: "text", text: null };
                obj52[1] = tmp4(7912).getVoiceSessionMessageContent(type);
                tmp21 = obj52;
                const tmp4Result = tmp4(7912);
              }
            }
          }
        }
      }
    }
    flag = true;
  }
}
const result = require("set").fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export const isMessageContentPreviewable = function isMessageContentPreviewable(messageRecord) {
  const type = messageRecord.type;
  if (set.MessageTypes.DEFAULT !== type) {
    if (tmp(686).MessageTypes.CHANGELOG !== type) {
      if (tmp(686).MessageTypes.REPLY !== type) {
        if (tmp(686).MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (tmp(686).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (tmp(686).MessageTypes.POLL_RESULT !== type) {
              if (tmp(686).MessageTypes.AUTO_MODERATION_ACTION !== type) {
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
  const _require = message;
  let obj = _require(589);
  const items = [closure_4];
  const items1 = [message.author.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isBlocked: closure_1_4.isBlocked(message.author.id), isIgnored: closure_1_4.isIgnored(message.author.id) }), items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmp4 = useIsCallActiveDefault(channel.id, message.id);
  const items2 = [closure_3];
  const stateFromStores = _require(589).useStateFromStores(items2, () => id.getId());
  const nick = useNullableMessageAuthorDefault(message).nick;
  let stringResult = nick;
  if (message.type !== _require(686).MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (message.author.id === stateFromStores) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.LuZzxn);
    }
  }
  let tmpResult = tmp(589);
  const items3 = [closure_5];
  const stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
    let user;
    if (message.mentions.length > 0) {
      user = closure_1_5.getUser(tmp.mentions[0]);
    }
    return user;
  });
  tmpResult = tmp(4699);
  obj = { message, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: tmpResult.useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp4 };
  return formatMessagePreview(message, obj);
};
export { formatMessagePreview };