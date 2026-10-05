// === Module 12476: useFormattedMessagePreview ===

// Module 12476 (useFormattedMessagePreview)
import _mod12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import MessageTypes from "MessageTypes" /* 1101 */;
import intl30 from "intl" /* 1126 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 5304 */;
import isForwardMessageDefault from "isForwardMessage" /* 6805 */;
import useIsCallActiveDefault from "useIsCallActive" /* 7640 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7645 */;
import VoiceSessionUtils from "VoiceSessionUtils" /* 7741 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function formatMessagePreview(type, isBlocked) {
  let MMN2Jq;
  let OEdU6X;
  let SGaUAU;
  let V4uCm4;
  let aZtRW8;
  let authorNick;
  let currentUserId;
  let formatToPlainString10;
  let formatToPlainString13;
  let formatToPlainString2;
  let formatToPlainString3;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainString6;
  let formatToPlainString7;
  let formatToPlainString8;
  let formatToPlainString9;
  let intl;
  let intl10;
  let intl11;
  let intl16;
  let intl28;
  let intl29;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isCallActive;
  let oItgEw;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj21;
  let obj25;
  let obj28;
  let obj30;
  let obj36;
  let obj38;
  let obj41;
  let obj43;
  let obj45;
  let obj47;
  let obj49;
  let obj51;
  let obj53;
  let obj55;
  let obj9;
  let otherUser;
  let otherUserNick;
  let ro3RM0;
  let str2;
  let str3;
  let systemMessageUserJoin;
  let tmp4Result;
  let vMJhvG;
  let vfkjqx;
  if (isBlocked.isBlocked) {
    const obj2 = { type: "text", text: intl29.string(intl30.t.XAkOo2) };
    intl29 = intl30.intl;
    return obj2;
  } else if (tmp) {
    const obj3 = { type: "text", text: intl28.string(intl30.t["G7p6v/"]) };
    intl28 = intl30.intl;
    return obj3;
  } else {
    type = type.type;
    if (MessageTypes.MessageTypes.DEFAULT !== type) {
      if (MessageTypes.MessageTypes.CHANGELOG !== type) {
        if (MessageTypes.MessageTypes.REPLY !== type) {
          if (MessageTypes.MessageTypes.CHAT_INPUT_COMMAND !== type) {
            if (MessageTypes.MessageTypes.CONTEXT_MENU_COMMAND !== type) {
              let flag;
              let tmp21;
              if (MessageTypes.MessageTypes.POLL_RESULT !== type) {
                flag = false;
              }
              if (flag) {
                let tmp10;
                if (1 === type.embeds.length) {
                  if (type.embeds[0].url === type.content) {
                    if (null != type.embeds[0].rawTitle) {
                      tmp10 = { type: "markup", markup: type.embeds[0].rawTitle };
                      const obj4 = { type: "markup", markup: type.embeds[0].rawTitle };
                    }
                    if (null != tmp10) {
                      const obj5 = { authorLabel: tmp2 };
                      const merged = Object.assign(tmp10);
                      return obj5;
                    }
                  }
                }
                if (null != type.content) {
                  if ("" !== type.content) {
                    tmp10 = { type: "message", message: type };
                    const obj6 = { type: "message", message: type };
                  }
                }
                if (type.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const obj7 = { type: "text", text: intl11.string(intl30.t.slFYgi) };
                  intl11 = intl30.intl;
                  tmp10 = obj7;
                } else if (type.attachments.length > 0) {
                  let obj14;
                  const attachments = type.attachments;
                  const everyResult = attachments.every((filename) => {
                    const obj = require("MediaFormatTesters");
                    return obj.isImageFile(filename.filename);
                  });
                  let everyResult1 = !everyResult;
                  if (everyResult1) {
                    const attachments2 = type.attachments;
                    everyResult1 = attachments2.every((filename) => {
                      const obj = require("MediaFormatTesters");
                      return obj.isVideoFile(filename.filename);
                    });
                  }
                  let everyResult2 = !everyResult && !everyResult1;
                  if (everyResult2) {
                    const attachments3 = type.attachments;
                    everyResult2 = attachments3.every((filename) => {
                      const obj = require("MediaFormatTesters");
                      return obj.isAudioFile(filename.filename);
                    });
                  }
                  if (everyResult) {
                    const obj8 = { type: "text", text: intl10.formatToPlainString(intl30.t.h4pFfU, obj9), trailingIcon: "image" };
                    intl10 = intl30.intl;
                    obj14 = obj8;
                    obj9 = { count: type.attachments.length };
                  } else if (everyResult1) {
                    const obj10 = { type: "text", text: intl9.formatToPlainString(intl30.t.SJ6pPX, obj11), trailingIcon: "video" };
                    intl9 = intl30.intl;
                    obj14 = obj10;
                    obj11 = { count: type.attachments.length };
                  } else if (everyResult2) {
                    const obj12 = { type: "text", text: intl8.formatToPlainString(intl30.t.fnO3hK, obj13), trailingIcon: "audio" };
                    intl8 = intl30.intl;
                    obj14 = obj12;
                    obj13 = { count: type.attachments.length };
                  } else {
                    obj14 = { type: "text", text: intl7.formatToPlainString(intl30.t["89ihS8"], obj15), trailingIcon: "attachment" };
                    intl7 = intl30.intl;
                    obj15 = { count: type.attachments.length };
                  }
                  tmp10 = obj14;
                } else if (type.embeds.length > 0) {
                  let obj24;
                  const embeds = type.embeds;
                  const everyResult3 = embeds.every((url) => {
                    let isImageUrlResult = null != url.url;
                    if (isImageUrlResult) {
                      const obj = require("MediaFormatTesters");
                      isImageUrlResult = obj.isImageUrl(url.url);
                    }
                    return isImageUrlResult;
                  });
                  let everyResult4 = !everyResult3;
                  if (everyResult4) {
                    const embeds2 = type.embeds;
                    everyResult4 = embeds2.every((url) => {
                      let isVideoUrlResult = null != url.url;
                      if (isVideoUrlResult) {
                        const obj = require("MediaFormatTesters");
                        isVideoUrlResult = obj.isVideoUrl(url.url);
                      }
                      return isVideoUrlResult;
                    });
                  }
                  let everyResult5 = !everyResult3 && !everyResult4;
                  if (everyResult5) {
                    const embeds3 = type.embeds;
                    everyResult5 = embeds3.every((url) => {
                      let isAudioFileResult = null != url.url;
                      if (isAudioFileResult) {
                        const obj = require("MediaFormatTesters");
                        isAudioFileResult = obj.isAudioFile(url.url);
                      }
                      return isAudioFileResult;
                    });
                  }
                  if (everyResult3) {
                    const obj16 = { type: "text", text: intl6.formatToPlainString(intl30.t.h4pFfU, obj17), trailingIcon: "image" };
                    intl6 = intl30.intl;
                    obj24 = obj16;
                    obj17 = { count: type.embeds.length };
                  } else if (everyResult4) {
                    const obj18 = { type: "text", text: intl5.formatToPlainString(intl30.t.SJ6pPX, obj19), trailingIcon: "video" };
                    intl5 = intl30.intl;
                    obj24 = obj18;
                    obj19 = { count: type.embeds.length };
                  } else if (everyResult5) {
                    const obj20 = { type: "text", text: intl4.formatToPlainString(intl30.t.fnO3hK, obj21), trailingIcon: "audio" };
                    intl4 = intl30.intl;
                    obj24 = obj20;
                    obj21 = { count: type.embeds.length };
                  } else {
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawTitle) {
                        obj24 = { type: "markup", markup: type.embeds[0].rawTitle };
                        const obj22 = { type: "markup", markup: type.embeds[0].rawTitle };
                      }
                    }
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawDescription) {
                        obj24 = { type: "markup", markup: type.embeds[0].rawDescription };
                        const obj23 = { type: "markup", markup: type.embeds[0].rawDescription };
                      }
                    }
                    obj24 = { type: "text", text: intl3.formatToPlainString(intl30.t["9XuYjs"], obj25), trailingIcon: "link" };
                    intl3 = intl30.intl;
                    obj25 = { count: type.embeds.length };
                  }
                  tmp10 = obj24;
                } else if (type.stickerItems.length > 0) {
                  tmp10 = { type: "text", text: type.stickerItems[0].name, trailingIcon: "sticker" };
                  const obj26 = { type: "text", text: type.stickerItems[0].name, trailingIcon: "sticker" };
                } else if (type.isPoll()) {
                  const intl2 = intl30.intl;
                  const formatToPlainString = intl2.formatToPlainString;
                  const poll = type.poll;
                  let text;
                  const ImizdM = intl30.t.ImizdM;
                  if (poll != null) {
                    text = poll.question.text;
                  }
                  const obj27 = { type: "text", text: formatToPlainString(ImizdM, obj28) };
                  tmp10 = obj27;
                  obj28 = { question: text };
                } else if (isForwardMessageDefault(type)) {
                  let obj = { type: "text", text: intl.string(intl30.t["9ddYKt"]) };
                  intl = intl30.intl;
                  tmp10 = obj;
                }
              }
              ({ authorNick, otherUser, otherUserNick, isCallActive, currentUserId } = isBlocked);
              if (type.type === MessageTypes.MessageTypes.RECIPIENT_ADD) {
                if (null != otherUserNick) {
                  const obj29 = { type: "text", text: formatToPlainString13(MMN2Jq, obj30) };
                  const intl27 = intl30.intl;
                  formatToPlainString13 = intl27.formatToPlainString;
                  obj30 = { username: authorNick, usernameHook: _mod12.identity, otherUsername: otherUserNick, otherUsernameHook: _mod12.identity };
                  MMN2Jq = intl30.t.MMN2Jq;
                  tmp21 = obj29;
                }
                let tmp30;
                if (null != tmp21) {
                  tmp30 = tmp21;
                }
                return tmp30;
              }
              if (type.type === MessageTypes.MessageTypes.RECIPIENT_REMOVE) {
                if (null != otherUserNick) {
                  let result;
                  let id1;
                  const id = type.author.id;
                  if (otherUser != null) {
                    id1 = otherUser.id;
                  }
                  if (id === id1) {
                    const intl26 = intl30.intl;
                    const formatToPlainString12 = intl26.formatToPlainString;
                    const obj31 = { username: authorNick, usernameHook: _mod12.identity };
                    const v5v2xa8 = intl30.t["5v2xa8"];
                    result = formatToPlainString12(v5v2xa8, obj31);
                  } else {
                    const intl25 = intl30.intl;
                    const formatToPlainString11 = intl25.formatToPlainString;
                    const obj32 = { username: authorNick, usernameHook: _mod12.identity, otherUsername: otherUserNick, otherUsernameHook: _mod12.identity };
                    const L2FyVq = intl30.t.L2FyVq;
                    result = formatToPlainString11(L2FyVq, obj32);
                  }
                  tmp21 = { type: "text", text: result };
                  const obj33 = { type: "text", text: result };
                }
              }
              if (type.type === MessageTypes.MessageTypes.CALL) {
                let stringResult;
                if (isCallActive) {
                  const intl24 = intl30.intl;
                  stringResult = intl24.string(intl30.t["NGg/fm"]);
                } else {
                  if (null != type.call) {
                    const participants = type.call.participants;
                    if (!participants.includes(currentUserId)) {
                      const intl22 = intl30.intl;
                      stringResult = intl22.string(intl30.t["2CnhoI"]);
                    }
                  }
                  const intl23 = intl30.intl;
                  stringResult = intl23.string(intl30.t.v05Xd6);
                }
                const obj34 = { type: "text", text: stringResult, color: str2, trailingIcon: str3 };
                str2 = undefined;
                if (isCallActive) {
                  str2 = "text-feedback-positive";
                }
                str3 = "call-ended";
                if (isCallActive) {
                  str3 = "call-active";
                }
                tmp21 = obj34;
              } else if (type.type === MessageTypes.MessageTypes.CHANNEL_NAME_CHANGE) {
                const obj35 = { type: "text", text: formatToPlainString10(oItgEw, obj36) };
                const intl21 = intl30.intl;
                formatToPlainString10 = intl21.formatToPlainString;
                obj36 = { username: authorNick, usernameHook: _mod12.identity, channelName: type.content };
                oItgEw = intl30.t.oItgEw;
                tmp21 = obj35;
              } else if (type.type === MessageTypes.MessageTypes.CHANNEL_ICON_CHANGE) {
                const obj37 = { type: "text", text: formatToPlainString9(OEdU6X, obj38) };
                const intl20 = intl30.intl;
                formatToPlainString9 = intl20.formatToPlainString;
                obj38 = { username: authorNick, usernameHook: _mod12.identity };
                OEdU6X = intl30.t.OEdU6X;
                tmp21 = obj37;
              } else if (type.type === MessageTypes.MessageTypes.CHANNEL_PINNED_MESSAGE) {
                const obj40 = { type: "text", text: formatToPlainString8(vfkjqx, obj41) };
                const intl19 = intl30.intl;
                formatToPlainString8 = intl19.formatToPlainString;
                obj41 = { username: authorNick, usernameHook: _mod12.identity };
                vfkjqx = intl30.t.vfkjqx;
                tmp21 = obj40;
              } else if (type.type === MessageTypes.MessageTypes.USER_JOIN) {
                const obj42 = { type: "text", text: formatToPlainString7(systemMessageUserJoin, obj43) };
                const intl18 = intl30.intl;
                formatToPlainString7 = intl18.formatToPlainString;
                obj43 = { username: authorNick, usernameHook: _mod12.identity };
                const obj39 = SystemMessageUtilsDefault;
                systemMessageUserJoin = obj39.getSystemMessageUserJoin(type.id);
                tmp21 = obj42;
              } else if (type.type === MessageTypes.MessageTypes.THREAD_CREATED) {
                const obj44 = { type: "text", text: formatToPlainString6(SGaUAU, obj45) };
                const intl17 = intl30.intl;
                formatToPlainString6 = intl17.formatToPlainString;
                obj45 = { actorName: authorNick, actorHook: _mod12.identity, threadName: type.content, threadOnClick: _mod12.identity };
                SGaUAU = intl30.t.SGaUAU;
                tmp21 = obj44;
              } else if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
                const obj46 = { type: "text", text: intl16.formatToPlainString(intl30.t.lieTqU, obj47) };
                intl16 = intl30.intl;
                tmp21 = obj46;
                obj47 = { username: authorNick };
              } else if (type.type === MessageTypes.MessageTypes.STAGE_START) {
                const obj48 = { type: "text", text: formatToPlainString5(aZtRW8, obj49) };
                const intl15 = intl30.intl;
                formatToPlainString5 = intl15.formatToPlainString;
                obj49 = { username: authorNick, usernameOnClick: _mod12.identity, topic: type.content };
                aZtRW8 = intl30.t.aZtRW8;
                tmp21 = obj48;
              } else if (type.type === MessageTypes.MessageTypes.STAGE_END) {
                const obj50 = { type: "text", text: formatToPlainString4(vMJhvG, obj51) };
                const intl14 = intl30.intl;
                formatToPlainString4 = intl14.formatToPlainString;
                obj51 = { username: authorNick, usernameOnClick: _mod12.identity, topic: type.content };
                vMJhvG = intl30.t.vMJhvG;
                tmp21 = obj50;
              } else if (type.type === MessageTypes.MessageTypes.STAGE_SPEAKER) {
                const obj52 = { type: "text", text: formatToPlainString3(V4uCm4, obj53) };
                const intl13 = intl30.intl;
                formatToPlainString3 = intl13.formatToPlainString;
                obj53 = { username: authorNick, usernameOnClick: _mod12.identity };
                V4uCm4 = intl30.t.V4uCm4;
                tmp21 = obj52;
              } else if (type.type === MessageTypes.MessageTypes.STAGE_TOPIC) {
                const obj54 = { type: "text", text: formatToPlainString2(ro3RM0, obj55) };
                const intl12 = intl30.intl;
                formatToPlainString2 = intl12.formatToPlainString;
                obj55 = { username: authorNick, usernameOnClick: _mod12.identity, topic: type.content };
                ro3RM0 = intl30.t.ro3RM0;
                tmp21 = obj54;
              } else if (type.type === MessageTypes.MessageTypes.VOICE_SESSION) {
                const obj56 = { type: "text", text: tmp4Result.getVoiceSessionMessageContent(type) };
                tmp21 = obj56;
                tmp4Result = VoiceSessionUtils;
              }
            }
          }
        }
      }
    }
    flag = true;
  }
}
const MessageFlags = Constants.MessageFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((author, id) => {
  let first;
  let isBlocked;
  let isIgnored;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmpResult6;
  const _require = author;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== author.author.id) {
    const fn = function c() {
      const obj = { isBlocked: RelationshipStore.isBlocked(author.author.id), isIgnored: RelationshipStore.isIgnored(author.author.id) };
      return obj;
    };
    const items1 = [author.author.id];
    cResult[1] = author.author.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmp10 = useIsCallActiveDefault(id.id, author.id);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    const fn2 = function h() {
      return id.getId();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    tmp12 = fn2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp11, tmp12);
  const nick = useMessageAuthorDefault(author).nick;
  let stringResult = nick;
  if (author.type !== tmp(1101).MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (author.author.id === stateFromStores) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.LuZzxn);
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    cResult[6] = items3;
    tmp16 = items3;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === author.mentions[0]) {
    let tmp18;
    if (cResult[8] === author.mentions.length) {
      tmp18 = cResult[9];
    }
    const tmpResult5 = tmp(504);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp16, tmp18);
    const obj2 = { message: author, channel: id, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: tmpResult6.useNullableUserAuthor(stateFromStores1, id).nick, isBlocked, isIgnored, isCallActive: tmp10 };
    tmpResult6 = tmp(5304);
    return formatMessagePreview(author, obj2);
  }
  class I {
    constructor() {
      let user;
      if (author.mentions.length > 0) {
        user = UserStore.getUser(tmp.mentions[0]);
      }
      return user;
    }
  }
  cResult[7] = author.mentions[0];
  cResult[8] = author.mentions.length;
  cResult[9] = I;
  tmp18 = I;
}) : ((author, channel) => {
  let id;
  let isBlocked;
  let isIgnored;
  const _require = author;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [RelationshipStore];
  const items1 = [author.author.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isBlocked: RelationshipStore.isBlocked(author.author.id), isIgnored: RelationshipStore.isIgnored(author.author.id) };
    return obj;
  }, items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const items2 = [AuthenticationStore];
  const tmp4 = useIsCallActiveDefault(channel.id, author.id);
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items2, () => id.getId());
  const nick = useMessageAuthorDefault(author).nick;
  let stringResult = nick;
  if (author.type !== require("MessageTypes").MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (author.author.id === stateFromStores) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.LuZzxn);
    }
  }
  const items3 = [UserStore];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
    let user;
    if (author.mentions.length > 0) {
      user = UserStore.getUser(tmp.mentions[0]);
    }
    return user;
  });
  const tmpResult2 = tmp(5304);
  const obj3 = { message: author, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: tmpResult2.useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp4 };
  return formatMessagePreview(author, obj3);
});
function isMessageContentPreviewable(message) {
  const type = message.type;
  if (MessageTypes.MessageTypes.DEFAULT !== type) {
    if (MessageTypes.MessageTypes.CHANGELOG !== type) {
      if (MessageTypes.MessageTypes.REPLY !== type) {
        if (MessageTypes.MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (MessageTypes.MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (MessageTypes.MessageTypes.POLL_RESULT !== type) {
              if (MessageTypes.MessageTypes.AUTO_MODERATION_ACTION !== type) {
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
}
let result = size.fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export { isMessageContentPreviewable };
export const useFormattedMessagePreview = tmp2;
export { formatMessagePreview };