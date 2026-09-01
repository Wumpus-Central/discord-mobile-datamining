// discord_app/modules/notifications/NotificationTextUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import getRootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import computeChannelName from "../channel/useChannelName.tsx";
import shouldShowAgeGateForVoiceChannel from "../age_gate/AgeGateUtils.tsx";
import isMentioned from "../messages/isMessageMentioned.tsx";
import isSystemMessageDefault from "../messages/isSystemMessage.tsx";
import isForwardMessage from "../forwarding/isForwardMessage.tsx";
import FSI from "../bidi/IsolateString.tsx";
import isChannelCurrentlyVisible from "../channel/ChannelVisibilityUtils.tsx";
import computeThreadNotificationSetting from "../threads/ThreadNotificationSettings.tsx";
import useFocusModeEnabled from "FocusModeUtils.tsx";
import closure_3 from "../activities/EmbeddedActivitiesStore.tsx";
import closure_4 from "../lurker_mode/LurkingStore.tsx";
import closure_5 from "../message_request/MessageRequestStore.tsx";
import closure_6 from "../threads/JoinedThreadsStore.tsx";
import closure_7 from "../voice_panel/VoicePanelStore.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import closure_10 from "../../stores/ChannelStore.tsx";
import closure_11 from "../../stores/GuildStore.tsx";
import closure_12 from "../../stores/RTCConnectionStore.tsx";
import closure_13 from "../../stores/RelationshipStore.tsx";
import closure_14 from "../../stores/SelectedChannelStore.tsx";
import closure_15 from "../../stores/SelectedGuildStore.tsx";
import closure_16 from "../../stores/SelfPresenceStore.tsx";
import closure_17 from "../../stores/UserGuildSettingsStore.tsx";
import closure_18 from "../../stores/UserRequiredActionStore.tsx";
import closure_19 from "../../stores/UserStore.tsx";
import closure_20 from "RpcNotificationSettingsStore.tsx";
import ME from "../../Constants.tsx";
import { ActivityPanelModes } from "../activities/panel/ActivityPanelConstants.tsx";
import { ThreadMemberFlags } from "../threads/ThreadConstants.tsx";

require = arg1;
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
          const isBlockedOrIgnoredResult = closure_13.isBlockedOrIgnored(user.id);
          let tmp13 = !isBlockedOrIgnoredResult;
          if (!isBlockedOrIgnoredResult) {
            const ignoreStatus = obj.ignoreStatus;
            let tmp14 = !ignoreStatus;
            if (!ignoreStatus) {
              tmp14 = store3.getStatus() === constants6.DND;
            }
            let tmp17 = !tmp14;
            if (!tmp14) {
              const FocusMode = tmp2(4166).FocusMode;
              const setting = FocusMode.getSetting();
              let tmp19 = !setting;
              if (!setting) {
                const ignoreNoMessagesSetting = obj.ignoreNoMessagesSetting;
                let allowNoMessagesResult = !ignoreNoMessagesSetting;
                if (!ignoreNoMessagesSetting) {
                  allowNoMessagesResult = closure_17.allowNoMessages(channel);
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
    obj2 = shouldShowAgeGateForVoiceChannel;
    tmp2 = require;
  }
}
function renderTitle(channelName, channel, channel) {
  const obj = FSI;
  const isolateResult = FSI.isolate(channelName);
  const obj2 = FSI;
  const obj3 = computeChannelName;
  const tmp4 = closure_19;
  const tmp5 = closure_13;
  let str = "";
  if (null != channel) {
    let tmpResult = tmp(7429);
    tmpResult = tmp(4674);
    const _HermesInternal = HermesInternal;
    str = ", " + tmpResult.isolate(tmpResult.computeChannelName(channel, tmp4, tmp5));
  }
  return (
    "" +
    isolateResult +
    " (" +
    obj2.isolate(computeChannelName.computeChannelName(channel, closure_19, closure_13, true)) +
    str +
    ")"
  );
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
({ GUILD_VOCAL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: c9 } = createChannelRecord);
({
  ActivityActionTypes: closure_21,
  ChannelTypes: closure_22,
  MessageFlags: closure_23,
  MessageTypes: closure_24,
  MessageTypesSets: closure_25,
  StatusTypes: closure_26,
  UserFlags: closure_27,
} = ME);
let result = require("set").fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

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
    let obj = hasFlag;
    if (obj.hasFlag(message.flags, constants3.SUPPRESS_NOTIFICATIONS)) {
      return false;
    }
  }
  obj1 = store2;
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
              obj5 = isChannelCurrentlyVisible;
            }
            if (closure_13.isBlockedOrIgnoredForMessage(message)) {
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
                  const threadNotificationSetting =
                    computeThreadNotificationSetting.computeThreadNotificationSetting(channel1);
                  let tmp39 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp39) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      obj = { rawMessage: null, userId: null, suppressEveryone: false, suppressRoles: false };
                      obj[0] = message;
                      obj[1] = currentUser.id;
                      result = isMentioned.isRawMessageMentioned(obj);
                      const tmp36Result = isMentioned;
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
                if (closure_17.allowAllMessages(channel1)) {
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
                return isMentioned.isRawMessageMentioned(obj1);
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
          const result = closure_13.isBlockedOrIgnoredForMessage(type);
          let tmp15 = !result;
          if (!result) {
            let tmp16 = user.id !== currentUser.id;
            if (tmp16) {
              let tmp19 = store3.getStatus() !== constants6.DND;
              if (tmp19) {
                const FocusMode = explicitContentFromProto.FocusMode;
                const setting = FocusMode.getSetting();
                let tmp23 = !setting;
                if (!setting) {
                  tmp23 = !closure_17.allowNoMessages(channel1);
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
      const result = closure_17.isGuildOrCategoryOrChannelMuted(channel2.guild_id, channel2.id);
      let tmp11 = !result;
      if (!result) {
        let result1 = !flag;
        if (!flag) {
          result1 = isChannelCurrentlyVisible.isChannelCurrentlyVisible(channel2.id);
          const obj3 = isChannelCurrentlyVisible;
        }
        let newForumThreadsCreated = !result1;
        if (!result1) {
          newForumThreadsCreated = obj2.getNewForumThreadsCreated(channel2);
        }
        tmp11 = newForumThreadsCreated;
      }
      tmp9 = tmp11;
      obj2 = closure_17;
    }
    tmp3 = tmp9;
  }
  return tmp3;
};
export const shouldNotifyForReaction = function shouldNotifyForReaction(arg0) {
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
        tmp11 = !closure_13.isBlockedOrIgnored(reactor.id);
      }
      if (tmp11) {
        let result = !includeSelectedChannel;
        if (!includeSelectedChannel) {
          result = isChannelCurrentlyVisible.isChannelCurrentlyVisible(channel.id);
          const obj = isChannelCurrentlyVisible;
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
      const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
      let tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp5) {
        tmp5 = !tmp3(10172).isChannelFocused();
        const tmp3Result = tmp3(10172);
      }
      flag = tmp5;
      const obj3 = getRootNavigationRef;
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
  let obj = getNicknameDefault;
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
                  obj1 = computeChannelName;
                  tmp6 = name === obj1.computeChannelName(getGuildId, closure_19, closure_13);
                }
                tmp5 = name;
                if (!tmp6) {
                  tmp5 = renderTitle(name, getGuildId);
                }
              }
            }
            content = content.content;
            if (tmp(6117)(content)) {
              let tmpResult = tmp(7895);
              content = tmpResult.stringify(content, getGuildId);
              if (null == content) {
                const obj15 = new tmp(3)("NotificationTextUtils");
                obj = { message: null };
                obj[0] = content;
                obj15.warn("SystemMessageUtils.stringify(...) could not convert", obj);
                const _Error = Error;
                error = new Error("failed to stringify system message");
                throw error;
              }
            }
            if ("sticker_items" in content) {
              let sticker_items = content.sticker_items;
            } else {
              sticker_items = "stickerItems" in content ? content.stickerItems : content.stickers;
            }
            if ("message_reference" in content) {
              let obj4 = isForwardMessage;
              let result = obj4.isForwardServerMessage(content);
            } else {
              result = tmp(6147)(content);
            }
            const items = [];
            if (result) {
              const intl8 = getSystemLocale.intl;
              let stringResult = intl8.string(getSystemLocale.t["9ddYKt"]);
              let tmp26 = items;
            } else {
              if (null != content.activity) {
                if (null != content.application) {
                  if (content.activity.type === constants.JOIN) {
                    const intl7 = getSystemLocale.intl;
                    obj = { user: null, game: null };
                    obj[0] = name;
                    obj[1] = content.application.name;
                    let str7 = intl7.formatToPlainString(
                      getInviteEmbedFormatString(
                        getGuildId,
                        getSystemLocale.t.E8CgCh,
                        getSystemLocale.t.c6KHWJ,
                        getSystemLocale.t.Fy7rJN,
                      ),
                      obj,
                    );
                  } else {
                    str7 = "";
                    if (content.activity.type === tmp44.JOIN_REQUEST) {
                      const intl9 = getSystemLocale.intl;
                      obj1 = { user: null, game: null };
                      obj1[0] = name;
                      obj1[1] = content.application.name;
                      str7 = intl9.formatToPlainString(
                        getInviteEmbedFormatString(
                          getGuildId,
                          getSystemLocale.t["/TD0la"],
                          getSystemLocale.t["/TD0la"],
                          getSystemLocale.t["/TD0la"],
                        ),
                        obj1,
                      );
                    }
                  }
                  stringResult = str7;
                  tmp26 = items;
                }
              }
              if (null != content.activity) {
                if (content.activity.type === constants.LISTEN) {
                  const intl6 = getSystemLocale.intl;
                  let obj2 = { user: null };
                  obj2[0] = name;
                  stringResult = intl6.formatToPlainString(
                    getInviteEmbedFormatString(
                      getGuildId,
                      getSystemLocale.t.SaDdmN,
                      getSystemLocale.t.qsODhp,
                      getSystemLocale.t.WeiMTW,
                    ),
                    obj2,
                  );
                  tmp26 = items;
                  const tmp43 = getInviteEmbedFormatString(
                    getGuildId,
                    getSystemLocale.t.SaDdmN,
                    getSystemLocale.t.qsODhp,
                    getSystemLocale.t.WeiMTW,
                  );
                }
              }
              if (null != sticker_items) {
                if (sticker_items.length > 0) {
                  const intl5 = getSystemLocale.intl;
                  const obj3 = { stickerName: null };
                  obj3[0] = sticker_items[0].name;
                  stringResult = intl5.formatToPlainString(getSystemLocale.t.zY4v1B, obj3);
                  tmp26 = items;
                }
              }
              if (content.type === constants4.PREMIUM_REFERRAL) {
                const intl4 = getSystemLocale.intl;
                obj4 = { username: null };
                tmpResult = tmp(4322);
                obj4[0] = tmpResult.getName(bot);
                stringResult = intl4.formatToPlainString(getSystemLocale.t.lieTqU, obj4);
                tmp26 = items;
              } else if (null != content.poll) {
                const intl3 = getSystemLocale.intl;
                const obj5 = { question: null };
                obj5[0] = content.poll.question.text;
                stringResult = intl3.formatToPlainString(getSystemLocale.t.ImizdM, obj5);
                tmp26 = items;
              } else if (content.type === tmp23.POLL_RESULT) {
                const embeds = content.embeds;
                let found;
                if (embeds != null) {
                  let first = embeds[0];
                  if (first != null) {
                    const fields = first.fields;
                    if (fields != null) {
                      found = fields.find(
                        (name) => "poll_question_text" === ("name" in name ? name.name : name.rawName),
                      );
                    }
                  }
                }
                if (null == found) {
                  let intl2 = getSystemLocale.intl;
                  const obj6 = { question: null };
                  obj6[0] = "";
                  stringResult = intl2.formatToPlainString(getSystemLocale.t["9WrecI"], obj6);
                  tmp26 = items;
                }
              } else {
                if (null != content.components) {
                  if (content.components.length > 0) {
                    if (content.components[0].type === PermissionOverwriteType.ComponentType.CHECKPOINT_CARD) {
                      let intl = tmp24(1236).intl;
                      stringResult = intl.string(tmp24(1236).t.HWnMTQ);
                      tmp26 = items;
                    }
                  }
                }
                const tmpResult1 = tmp(7427);
                ({ content, emoji } = tmp(7427).unparseWithMeta(content, getGuildId.id, true));
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
                const unparseWithMetaResult = tmp(7427).unparseWithMeta(content, getGuildId.id, true);
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
                        return "" + "name" in first.fields[0]
                          ? first.fields[0].name
                          : first.fields[0].rawName + " " + "value" in first.fields[0]
                            ? first.fields[0].value
                            : first.fields[0].rawValue;
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
  if (isSystemMessageDefault(content)) {
    tmp5 = name;
    if (null != guild.getGuild(getGuildId.getGuildId())) {
      tmp5 = renderTitle(name, getGuildId, channel);
    }
  } else {
    tmp5 = renderTitle(name, getGuildId, channel);
  }
};
export const allowInAppNotifications = function allowInAppNotifications() {
  if (closure_18.hasAction()) {
    return false;
  } else {
    const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
    let setting = ShowInAppNotifications.getSetting();
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = function useAllowInAppNotifications() {
  const ShowInAppNotifications = explicitContentFromProto.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const focusModeEnabled = useFocusModeEnabled.useFocusModeEnabled();
  const obj = useFocusModeEnabled;
  const items = [closure_18];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_18.hasAction());
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = setting;
  }
  if (tmp4) {
    tmp4 = !focusModeEnabled;
  }
  return tmp4;
};
