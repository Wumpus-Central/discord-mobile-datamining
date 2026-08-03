import participantFromServer from "participantFromServer";
import initialize from "initialize";
import processChannel from "processChannel";
import storeThread from "storeThread";
import withEqualityFn from "withEqualityFn";
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import closure_15 from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import handleRequiredAction from "handleRequiredAction";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_20 from "initialize";
import ME from "ME";
import { ActivityPanelModes } from "ActivityPanelModes";
import { ThreadMemberFlags } from "AbortCodes";

let c9;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let metroImportAll;
const require = arg1;
function shouldNotifyBase(currentUser, user, channel, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  if (user.hasFlag(constants7.SPAMMER)) {
    return false;
  } else if (channel.isManaged()) {
    return false;
  } else {
    if (obj2.isChannelContentGated(channel)) {
      return false;
    } else {
      const guildId = channel.getGuildId();
      let tmp6 = null == guildId;
      if (!tmp6) {
        tmp6 = !lurking.isLurking(guildId);
      }
      if (tmp6) {
        const ignoreSameUser = obj.ignoreSameUser;
        let tmp8 = !ignoreSameUser;
        if (!ignoreSameUser) {
          tmp8 = user.id === currentUser.id;
        }
        let tmp10 = !tmp8;
        if (!tmp8) {
          const isBlockedOrIgnoredResult = upsertRelationship.isBlockedOrIgnored(user.id);
          let tmp13 = !isBlockedOrIgnoredResult;
          if (!isBlockedOrIgnoredResult) {
            const ignoreStatus = obj.ignoreStatus;
            let tmp14 = !ignoreStatus;
            if (!ignoreStatus) {
              tmp14 = store3.getStatus() === constants6.DND;
            }
            let tmp17 = !tmp14;
            if (!tmp14) {
              const FocusMode = tmp2(3866).FocusMode;
              const setting = FocusMode.getSetting();
              let tmp19 = !setting;
              if (!setting) {
                const ignoreNoMessagesSetting = obj.ignoreNoMessagesSetting;
                let allowNoMessagesResult = !ignoreNoMessagesSetting;
                if (!ignoreNoMessagesSetting) {
                  allowNoMessagesResult = updateUserGuildSettingsInternal.allowNoMessages(channel);
                }
                tmp19 = !allowNoMessagesResult;
              }
              tmp17 = tmp19;
            }
            tmp13 = tmp17;
          }
          tmp10 = tmp13;
        }
        tmp6 = tmp10;
      }
      return tmp6;
    }
    obj2 = require(4407) /* shouldShowAgeGateForVoiceChannel */;
    tmp2 = require;
  }
}
function renderTitle(channelName, channel, channel) {
  const obj = require(5973) /* FSI */;
  const isolateResult = require(5973) /* FSI */.isolate(channelName);
  const obj2 = require(5973) /* FSI */;
  const obj3 = require(4384) /* computeChannelName */;
  const tmp4 = mergeGuildAvatar;
  const tmp5 = upsertRelationship;
  let str = "";
  if (null != channel) {
    let tmpResult = tmp(5973);
    tmpResult = tmp(4384);
    const _HermesInternal = HermesInternal;
    str = ", " + tmpResult.isolate(tmpResult.computeChannelName(channel, tmp4, tmp5));
  }
  return "" + isolateResult + " (" + obj2.isolate(require(4384) /* computeChannelName */.computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true)) + str + ")";
}
function getInviteEmbedFormatString(type, _TD0la, _TD0la2, _TD0la3) {
  type = type.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (tmp.GUILD_TEXT !== type) {
      if (tmp.GROUP_DM === type) {
        return _TD0la2;
      } else {
        const DM = tmp.DM;
        return _TD0la3;
      }
    }
  }
  return _TD0la;
}
({ GUILD_VOCAL_CHANNEL_TYPES: metroImportAll, THREAD_CHANNEL_TYPES: c9 } = createChannelRecord);
({ ActivityActionTypes: closure_21, ChannelTypes: closure_22, MessageFlags: closure_23, MessageTypes: closure_24, MessageTypesSets: closure_25, StatusTypes: closure_26, UserFlags: closure_27 } = ME);
let result = require("processChannel").fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

export { shouldNotifyBase };
export const shouldNotify = function shouldNotify(message, channel_id, result) {
  let flag = result;
  if (result === undefined) {
    flag = true;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  if (null != message.flags) {
    let obj = require(1384) /* hasFlag */;
    if (obj.hasFlag(message.flags, constants3.SUPPRESS_NOTIFICATIONS)) {
      return false;
    }
  }
  let obj1 = store2;
  const channel = store2.getChannel(channel_id);
  let channel1 = channel;
  if (message.type === constants4.THREAD_STARTER_MESSAGE) {
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    channel1 = obj1.getChannel(parent_id);
  }
  const currentUser = authStore.getCurrentUser();
  const author = message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  const user = authStore.getUser(id);
  if (null != channel1) {
    if (null != currentUser) {
      if (null != user) {
        if (channel1.type === constants2.GROUP_DM) {
          if (message.type === constants4.RECIPIENT_REMOVE) {
            return false;
          }
        }
        if (closure_20.areSlayerNotificationsSuppressed()) {
          if (tmp12) {
            return false;
          }
          tmp12 = channel1.type === tmp41.DM || null != channel1.linkedLobby;
        }
        obj = { ignoreStatus: null, ignoreSameUser: null };
        obj[0] = flag2;
        const SELF_MENTIONABLE_SYSTEM = constants5.SELF_MENTIONABLE_SYSTEM;
        obj[1] = SELF_MENTIONABLE_SYSTEM.has(message.type);
        if (shouldNotifyBase(currentUser, user, channel1, obj)) {
          if (messageRequest.isMessageRequest(channel_id)) {
            return false;
          } else {
            if (!flag) {
              if (obj5.isChannelCurrentlyVisible(channel1.id)) {
                return false;
              }
              obj5 = require(10265) /* isChannelCurrentlyVisible */;
            }
            if (upsertRelationship.isBlockedOrIgnoredForMessage(message)) {
              return false;
            } else {
              if (undefined !== message.activity_instance) {
                if (null != message.interaction) {
                  if (message.interaction.user.id === currentUser.id) {
                    return false;
                  }
                }
              }
              if (null != message.application_id) {
                const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
                let applicationId;
                if (currentEmbeddedActivity != null) {
                  applicationId = currentEmbeddedActivity.applicationId;
                }
                if (applicationId === message.application_id) {
                  if (currentEmbeddedActivity.location.channel_id === channel_id) {
                    return false;
                  }
                }
              }
              if (set2.has(channel1.type)) {
                if (muted.isMuted(channel1.id)) {
                  return false;
                } else {
                  const threadNotificationSetting = require(10266) /* computeThreadNotificationSetting */.computeThreadNotificationSetting(channel1);
                  let tmp39 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp39) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      obj = { rawMessage: null, userId: null, suppressEveryone: false, suppressRoles: false };
                      obj[0] = message;
                      obj[1] = currentUser.id;
                      result = require(4427) /* isMentioned */.isRawMessageMentioned(obj);
                      const tmp36Result = require(4427) /* isMentioned */;
                    }
                    tmp39 = result;
                  }
                  return tmp39;
                }
              } else {
                const hasItem = set.has(channel1.type);
                let tmp29 = !hasItem;
                if (hasItem) {
                  tmp29 = channelId.getChannelId() === channel1.id;
                }
                if (updateUserGuildSettingsInternal.allowAllMessages(channel1)) {
                  if (tmp29) {
                    return true;
                  }
                }
                const result1 = obj6.isSuppressEveryoneEnabled(channel1.getGuildId());
                const result2 = obj6.isSuppressRolesEnabled(channel1.getGuildId());
                obj1 = { rawMessage: null, userId: null, suppressEveryone: null, suppressRoles: null };
                obj1[0] = message;
                obj1[1] = currentUser.id;
                obj1[2] = result1;
                obj1[3] = result2;
                return require(4427) /* isMentioned */.isRawMessageMentioned(obj1);
              }
            }
          }
        } else {
          return false;
        }
        tmp41 = constants2;
      }
    }
  }
  return false;
};
export const shouldNotifyForSelectedChannel = function shouldNotifyForSelectedChannel(type) {
  if (channelId2.getChannelId(guildId.getGuildId()) !== arg1) {
    return false;
  } else {
    const channel = store2.getChannel(arg1);
    let channel1 = channel;
    if (type.type === constants4.THREAD_STARTER_MESSAGE) {
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      channel1 = store2.getChannel(parent_id);
    }
    const currentUser = authStore.getCurrentUser();
    const author = type.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    const user = authStore.getUser(id);
    let tmp7 = null != channel1 && null != currentUser && null != user;
    if (tmp7) {
      const isManagedResult = channel1.isManaged();
      let tmp9 = !isManagedResult;
      if (!isManagedResult) {
        const hasFlagResult = user.hasFlag(constants7.SPAMMER);
        let tmp12 = !hasFlagResult;
        if (!hasFlagResult) {
          const result = upsertRelationship.isBlockedOrIgnoredForMessage(type);
          let tmp15 = !result;
          if (!result) {
            let tmp16 = user.id !== currentUser.id;
            if (tmp16) {
              let tmp19 = store3.getStatus() !== constants6.DND;
              if (tmp19) {
                const FocusMode = require(3866) /* explicitContentFromProto */.FocusMode;
                const setting = FocusMode.getSetting();
                let tmp23 = !setting;
                if (!setting) {
                  tmp23 = !updateUserGuildSettingsInternal.allowNoMessages(channel1);
                }
                tmp19 = tmp23;
              }
              tmp16 = tmp19;
            }
            tmp15 = tmp16;
          }
          tmp12 = tmp15;
        }
        tmp9 = tmp12;
      }
      tmp7 = tmp9;
    }
    return tmp7;
  }
};
export const shouldNotifyForForumThreadCreation = function shouldNotifyForForumThreadCreation(channel, channel2, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  const currentUser = authStore.getCurrentUser();
  const user = authStore.getUser(channel.ownerId);
  let tmp3 = null != channel2 && null != currentUser && null != user;
  if (tmp3) {
    const obj = { ignoreStatus: null, ignoreNoMessagesSetting: true };
    obj[0] = flag2;
    let tmp9 = shouldNotifyBase(currentUser, user, channel2, obj);
    if (tmp9) {
      const result = updateUserGuildSettingsInternal.isGuildOrCategoryOrChannelMuted(channel2.guild_id, channel2.id);
      let tmp11 = !result;
      if (!result) {
        let result1 = !flag;
        if (!flag) {
          result1 = require(10265) /* isChannelCurrentlyVisible */.isChannelCurrentlyVisible(channel2.id);
          const obj3 = require(10265) /* isChannelCurrentlyVisible */;
        }
        let newForumThreadsCreated = !result1;
        if (!result1) {
          newForumThreadsCreated = obj2.getNewForumThreadsCreated(channel2);
        }
        tmp11 = newForumThreadsCreated;
      }
      tmp9 = tmp11;
      obj2 = updateUserGuildSettingsInternal;
    }
    tmp3 = tmp9;
  }
  return tmp3;
};
export const shouldNotifyForReaction = function shouldNotifyForReaction(arg0) {
  let channel;
  let includeSelectedChannel;
  let message;
  let reactor;
  ({ channel, reactor, includeSelectedChannel, message } = arg0);
  const currentUser = authStore.getCurrentUser();
  const author = message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  const user = authStore.getUser(id);
  let tmp5 = null != currentUser && null != user;
  if (tmp5) {
    let tmp10 = shouldNotifyBase(currentUser, user, channel, { ignoreSameUser: true });
    if (tmp10) {
      let tmp11 = null == reactor;
      if (!tmp11) {
        tmp11 = !upsertRelationship.isBlockedOrIgnored(reactor.id);
      }
      if (tmp11) {
        let result = !includeSelectedChannel;
        if (!includeSelectedChannel) {
          result = require(10265) /* isChannelCurrentlyVisible */.isChannelCurrentlyVisible(channel.id);
          const obj = require(10265) /* isChannelCurrentlyVisible */;
        }
        tmp11 = !result;
      }
      tmp10 = tmp11;
    }
    tmp5 = tmp10;
  }
  return tmp5;
};
export const shouldIncludeSelectedChannel = function shouldIncludeSelectedChannel() {
  state = state.getState();
  let flag = true;
  if (!state.isVoicePanelFullscreen()) {
    if (null == store.getConnectedActivityLocation()) {
      const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
      let tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp5) {
        tmp5 = !tmp3(10267).isChannelFocused();
        const tmp3Result = tmp3(10267);
      }
      flag = tmp5;
      const obj3 = require(4045) /* getRootNavigationRef */;
      tmp3 = require;
    } else {
      flag = true;
    }
    const obj2 = store;
  }
  return flag;
};
export { renderTitle };
export const makeTextChatNotification = function makeTextChatNotification(getGuildId, content, bot) {
  let emoji;
  let obj = importDefault(4383);
  const name = obj.getName(getGuildId.getGuildId(), getGuildId.id, bot);
  const type = getGuildId.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (tmp4.GUILD_TEXT !== type) {
      if (tmp4.GUILD_VOICE !== type) {
        if (tmp4.ANNOUNCEMENT_THREAD !== type) {
          if (tmp4.PUBLIC_THREAD !== type) {
            if (tmp4.PRIVATE_THREAD !== type) {
              let tmp5 = name;
              if (tmp4.GROUP_DM === type) {
                let tmp6 = getGuildId.isManaged() && bot.bot;
                if (tmp6) {
                  let obj1 = require(4384) /* computeChannelName */;
                  tmp6 = name === obj1.computeChannelName(getGuildId, mergeGuildAvatar, upsertRelationship);
                }
                tmp5 = name;
                if (!tmp6) {
                  tmp5 = renderTitle(name, getGuildId);
                }
              }
            }
            content = content.content;
            if (tmp(5927)(content)) {
              let tmpResult = tmp(7772);
              content = tmpResult.stringify(content, getGuildId);
              if (null == content) {
                const obj15 = new tmp(3)("NotificationTextUtils");
                obj = { message: null };
                obj[0] = content;
                obj15.warn("SystemMessageUtils.stringify(...) could not convert", obj);
                const _Error = Error;
                const error = new Error("failed to stringify system message");
                throw error;
              }
            }
            if ("sticker_items" in content) {
              let sticker_items = content.sticker_items;
            } else {
              sticker_items = "stickerItems" in content ? content.stickerItems : content.stickers;
            }
            if ("message_reference" in content) {
              let obj4 = require(5887) /* isForwardMessage */;
              let result = obj4.isForwardServerMessage(content);
            } else {
              result = tmp(5887)(content);
            }
            const items = [];
            if (result) {
              const intl8 = require(1236) /* getSystemLocale */.intl;
              let stringResult = intl8.string(require(1236) /* getSystemLocale */.t["9ddYKt"]);
              let tmp26 = items;
            } else {
              if (null != content.activity) {
                if (null != content.application) {
                  if (content.activity.type === constants.JOIN) {
                    const intl7 = require(1236) /* getSystemLocale */.intl;
                    obj = { user: null, game: null };
                    obj[0] = name;
                    obj[1] = content.application.name;
                    let str7 = intl7.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1236) /* getSystemLocale */.t.E8CgCh, require(1236) /* getSystemLocale */.t.c6KHWJ, require(1236) /* getSystemLocale */.t.Fy7rJN), obj);
                  } else {
                    str7 = "";
                    if (content.activity.type === tmp44.JOIN_REQUEST) {
                      const intl9 = require(1236) /* getSystemLocale */.intl;
                      obj1 = { user: null, game: null };
                      obj1[0] = name;
                      obj1[1] = content.application.name;
                      str7 = intl9.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1236) /* getSystemLocale */.t["/TD0la"], require(1236) /* getSystemLocale */.t["/TD0la"], require(1236) /* getSystemLocale */.t["/TD0la"]), obj1);
                    }
                  }
                  stringResult = str7;
                  tmp26 = items;
                }
              }
              if (null != content.activity) {
                if (content.activity.type === constants.LISTEN) {
                  const intl6 = require(1236) /* getSystemLocale */.intl;
                  let obj2 = { user: null };
                  obj2[0] = name;
                  stringResult = intl6.formatToPlainString(getInviteEmbedFormatString(getGuildId, require(1236) /* getSystemLocale */.t.SaDdmN, require(1236) /* getSystemLocale */.t.qsODhp, require(1236) /* getSystemLocale */.t.WeiMTW), obj2);
                  tmp26 = items;
                  const tmp43 = getInviteEmbedFormatString(getGuildId, require(1236) /* getSystemLocale */.t.SaDdmN, require(1236) /* getSystemLocale */.t.qsODhp, require(1236) /* getSystemLocale */.t.WeiMTW);
                }
              }
              if (null != sticker_items) {
                if (sticker_items.length > 0) {
                  const intl5 = require(1236) /* getSystemLocale */.intl;
                  const obj3 = { stickerName: null };
                  obj3[0] = sticker_items[0].name;
                  stringResult = intl5.formatToPlainString(require(1236) /* getSystemLocale */.t.zY4v1B, obj3);
                  tmp26 = items;
                }
              }
              if (content.type === constants4.PREMIUM_REFERRAL) {
                const intl4 = require(1236) /* getSystemLocale */.intl;
                obj4 = { username: null };
                tmpResult = tmp(4032);
                obj4[0] = tmpResult.getName(bot);
                stringResult = intl4.formatToPlainString(require(1236) /* getSystemLocale */.t.lieTqU, obj4);
                tmp26 = items;
              } else if (null != content.poll) {
                const intl3 = require(1236) /* getSystemLocale */.intl;
                const obj5 = { question: null };
                obj5[0] = content.poll.question.text;
                stringResult = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t.ImizdM, obj5);
                tmp26 = items;
              } else if (content.type === tmp23.POLL_RESULT) {
                const embeds = content.embeds;
                let found;
                if (embeds != null) {
                  let first = embeds[0];
                  if (first != null) {
                    const fields = first.fields;
                    if (fields != null) {
                      found = fields.find((name) => "poll_question_text" === ("name" in name ? name.name : name.rawName));
                    }
                  }
                }
                if (null == found) {
                  let intl2 = require(1236) /* getSystemLocale */.intl;
                  const obj6 = { question: null };
                  obj6[0] = "";
                  stringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t["9WrecI"], obj6);
                  tmp26 = items;
                }
              } else {
                if (null != content.components) {
                  if (content.components.length > 0) {
                    if (content.components[0].type === require(1906) /* PermissionOverwriteType */.ComponentType.CHECKPOINT_CARD) {
                      let intl = tmp24(1236).intl;
                      stringResult = intl.string(tmp24(1236).t.HWnMTQ);
                      tmp26 = items;
                    }
                  }
                }
                const tmpResult1 = tmp(5971);
                ({ content, emoji } = tmp(5971).unparseWithMeta(content, getGuildId.id, true));
                tmp26 = emoji;
                stringResult = content;
                if (0 !== content.length) {
                  tmp26 = emoji;
                  stringResult = content;
                  if (getGuildId.type === tmp4.DM) {
                    tmp26 = emoji;
                    stringResult = content;
                    if (!bot.bot) {
                      tmp26 = emoji;
                      stringResult = content;
                      if (content.startsWith("> -# *")) {
                        const substr = content.substring(0, 1);
                        const sum = substr + content.substring(4);
                        const iter = emoji[Symbol.iterator]();
                        const nextResult = iter.next();
                        tmp26 = emoji;
                        stringResult = sum;
                        while (iter !== undefined) {
                          nextResult.position = nextResult.position - 2;
                          continue;
                        }
                      }
                    }
                  }
                }
                const unparseWithMetaResult = tmp(5971).unparseWithMeta(content, getGuildId.id, true);
              }
            }
            if (0 === stringResult.length) {
              stringResult = (function getContentlessNotificationBody(embeds) {
                if (undefined !== embeds.embeds) {
                  if (embeds.embeds.length > 0) {
                    const first = embeds.embeds[0];
                    const tmp2 = "description" in first ? first.description : first.rawDescription;
                    const tmp3 = "title" in first ? first.title : first.rawTitle;
                    if (null != tmp2) {
                      let combined = tmp2;
                      if (null != tmp3) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + tmp3 + " " + tmp2;
                      }
                      return combined;
                    } else if (null != tmp3) {
                      return tmp3;
                    } else if (null != first.fields) {
                      if (first.fields.length > 0) {
                        const _HermesInternal = HermesInternal;
                        return "" + "name" in first.fields[0] ? first.fields[0].name : first.fields[0].rawName + " " + "value" in first.fields[0] ? first.fields[0].value : first.fields[0].rawValue;
                      }
                    }
                  }
                }
                let obj = callback(table[22]);
                let num2 = embeds.flags;
                if (num2 == null) {
                  num2 = 0;
                }
                if (obj.hasFlag(num2, constants.IS_VOICE_MESSAGE)) {
                  const intl2 = tmp5(tmp6[30]).intl;
                  return intl2.string(tmp5(tmp6[30]).t.slFYgi);
                } else {
                  if (undefined !== embeds.attachments) {
                    if (embeds.attachments.length > 0) {
                      const intl = tmp5(tmp6[30]).intl;
                      obj = { filename: null };
                      obj[0] = callback2(tmp6[31])(embeds.attachments[0]);
                      return intl.formatToPlainString(tmp5(tmp6[30]).t["51OkwL"], obj);
                    }
                  }
                  return "";
                }
              })(content);
            }
            const obj7 = { icon: null, title: null, body: null, emoji: null };
            obj7[0] = bot.getAvatarURL(getGuildId.guild_id, 128);
            obj7[1] = tmp5;
            obj7[2] = stringResult;
            obj7[3] = tmp26;
            return obj7;
          }
        }
      }
    }
  }
  obj2 = store2;
  const channel = store2.getChannel(getGuildId.parent_id);
  if (content.type === constants4.THREAD_STARTER_MESSAGE) {
    if (null != channel) {
      tmp5 = renderTitle(name, channel, obj2.getChannel(channel.parent_id));
    }
  }
  if (importDefault(5927)(content)) {
    tmp5 = name;
    if (null != guild.getGuild(getGuildId.getGuildId())) {
      tmp5 = renderTitle(name, getGuildId, channel);
    }
  } else {
    tmp5 = renderTitle(name, getGuildId, channel);
  }
};
export const allowInAppNotifications = function allowInAppNotifications() {
  if (handleRequiredAction.hasAction()) {
    return false;
  } else {
    const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
    let setting = ShowInAppNotifications.getSetting();
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = function useAllowInAppNotifications() {
  const ShowInAppNotifications = require(3866) /* explicitContentFromProto */.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const focusModeEnabled = require(10269) /* useFocusModeEnabled */.useFocusModeEnabled();
  const obj = require(10269) /* useFocusModeEnabled */;
  const items = [handleRequiredAction];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => handleRequiredAction.hasAction());
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = setting;
  }
  if (tmp4) {
    tmp4 = !focusModeEnabled;
  }
  return tmp4;
};