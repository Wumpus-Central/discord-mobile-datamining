// discord_app/modules/notifications/NotificationTextUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import util from "../../intl/index.native.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import Server from "../../flow/Server.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import AgeGateUtils from "../age_gate/AgeGateUtils.tsx";
import isMessageMentioned from "../messages/isMessageMentioned.tsx";
import isSystemMessageDefault from "../messages/isSystemMessage.tsx";
import isForwardMessage from "../forwarding/isForwardMessage.tsx";
import IsolateString from "../bidi/IsolateString.tsx";
import ChannelVisibilityUtils from "../channel/ChannelVisibilityUtils.tsx";
import ThreadNotificationSettings from "../threads/ThreadNotificationSettings.tsx";
import FocusModeUtils from "FocusModeUtils.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import LurkingStore from "../lurker_mode/LurkingStore.tsx";
import MessageRequestStore from "../message_request/MessageRequestStore.tsx";
import JoinedThreadsStore from "../threads/JoinedThreadsStore.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserRequiredActionStore from "../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import RpcNotificationSettingsStore from "RpcNotificationSettingsStore.tsx";

require = fn;
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
        tmp6 = !LurkingStore.isLurking(guildId);
      }
      if (tmp6) {
        const ignoreSameUser = obj.ignoreSameUser;
        let tmp8 = !ignoreSameUser;
        if (!ignoreSameUser) {
          tmp8 = user.id === currentUser.id;
        }
        let tmp10 = !tmp8;
        if (!tmp8) {
          const isBlockedOrIgnoredResult = RelationshipStore.isBlockedOrIgnored(user.id);
          let tmp13 = !isBlockedOrIgnoredResult;
          if (!isBlockedOrIgnoredResult) {
            const ignoreStatus = obj.ignoreStatus;
            let tmp14 = !ignoreStatus;
            if (!ignoreStatus) {
              tmp14 = SelfPresenceStore.getStatus() === constants6.DND;
            }
            let tmp17 = !tmp14;
            if (!tmp14) {
              const FocusMode = tmp2(1935).FocusMode;
              const setting = FocusMode.getSetting();
              let tmp19 = !setting;
              if (!setting) {
                const ignoreNoMessagesSetting = obj.ignoreNoMessagesSetting;
                let allowNoMessagesResult = !ignoreNoMessagesSetting;
                if (!ignoreNoMessagesSetting) {
                  allowNoMessagesResult = UserGuildSettingsStore.allowNoMessages(channel);
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
    obj2 = AgeGateUtils;
    tmp2 = require;
  }
}
function renderTitle(channelName, channel, channel) {
  const isolateResult = IsolateString.isolate(channelName);
  const obj2 = IsolateString;
  const tmp4 = UserStore;
  const tmp5 = RelationshipStore;
  let str = "";
  if (null != channel) {
    tmp(7685);
    const tmpResult = tmp(4713);
    const _HermesInternal = HermesInternal;
    str = ", " + tmpResult.isolate(tmpResult.computeChannelName(channel, tmp4, tmp5));
  }
  return (
    "" +
    isolateResult +
    " (" +
    obj2.isolate(useChannelName.computeChannelName(channel, UserStore, RelationshipStore, true)) +
    str +
    ")"
  );
}
function getInviteEmbedFormatString(type, _TD0la, _TD0la2, _TD0la3) {
  type = type.type;
  if (constants2.GROUP_DM === type) {
    return _TD0la2;
  } else if (tmp.DM === type) {
    return _TD0la3;
  } else {
    if (tmp.GUILD_TEXT !== type) {
      if (tmp.GUILD_ANNOUNCEMENT !== type) {
        if (tmp.GUILD_APP !== type) {
          if (tmp.GUILD_FORUM !== type) {
            if (tmp.GUILD_MEDIA !== type) {
              if (tmp.GUILD_VOICE !== type) {
                if (tmp.GUILD_STAGE_VOICE !== type) {
                  if (tmp.ANNOUNCEMENT_THREAD !== type) {
                    if (tmp.PUBLIC_THREAD !== type) {
                      if (tmp.PRIVATE_THREAD !== type) {
                        if (tmp.MEDIA_THREAD !== type) {
                          if (tmp.GUILD_CATEGORY !== type) {
                            if (tmp.GUILD_STORE !== type) {
                              if (tmp.GUILD_DIRECTORY !== type) {
                                if (tmp.GUILD_SPACE !== type) {
                                  const UNKNOWN = tmp.UNKNOWN;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return _TD0la;
  }
}
const ChannelRecord = fn(1961);
({ GUILD_VOCAL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = ChannelRecord);
const Constants = fn(1074);
({
  ActivityActionTypes: closure_21,
  ChannelTypes: closure_22,
  MessageFlags: closure_23,
  MessageTypes: closure_24,
  MessageTypesSets: closure_25,
  StatusTypes: closure_26,
  UserFlags: closure_27,
} = Constants);
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const ThreadMemberFlags = fn(1113).ThreadMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

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
    let obj = FlagUtils;
    if (obj.hasFlag(message.flags, constants3.SUPPRESS_NOTIFICATIONS)) {
      return false;
    }
  }
  let obj1 = ChannelStore;
  const channel = ChannelStore.getChannel(channel_id);
  let channel1 = channel;
  if (message.type === constants4.THREAD_STARTER_MESSAGE) {
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    channel1 = obj1.getChannel(parent_id);
  }
  const currentUser = UserStore.getCurrentUser();
  const author = message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  const user = UserStore.getUser(id);
  if (null != channel1) {
    if (null != currentUser) {
      if (null != user) {
        if (channel1.type === constants2.GROUP_DM) {
          if (message.type === constants4.RECIPIENT_REMOVE) {
            return false;
          }
        }
        if (RpcNotificationSettingsStore.areSlayerNotificationsSuppressed()) {
          if (tmp12) {
            return false;
          }
          tmp12 = channel1.type === tmp41.DM || null != channel1.linkedLobby;
        }
        obj = { ignoreStatus: flag2, ignoreSameUser: null };
        const SELF_MENTIONABLE_SYSTEM = constants5.SELF_MENTIONABLE_SYSTEM;
        obj.ignoreSameUser = SELF_MENTIONABLE_SYSTEM.has(message.type);
        if (shouldNotifyBase(currentUser, user, channel1, obj)) {
          if (MessageRequestStore.isMessageRequest(channel_id)) {
            return false;
          } else {
            if (!flag) {
              if (obj5.isChannelCurrentlyVisible(channel1.id)) {
                return false;
              }
              obj5 = ChannelVisibilityUtils;
            }
            if (RelationshipStore.isBlockedOrIgnoredForMessage(message)) {
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
                const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
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
                if (JoinedThreadsStore.isMuted(channel1.id)) {
                  return false;
                } else {
                  const threadNotificationSetting =
                    ThreadNotificationSettings.computeThreadNotificationSetting(channel1);
                  let tmp39 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp39) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      obj = {
                        rawMessage: message,
                        userId: currentUser.id,
                        suppressEveryone: false,
                        suppressRoles: false,
                      };
                      result = isMessageMentioned.isRawMessageMentioned(obj);
                      const tmp36Result = isMessageMentioned;
                    }
                    tmp39 = result;
                  }
                  return tmp39;
                }
              } else {
                const hasItem = set.has(channel1.type);
                let tmp29 = !hasItem;
                if (hasItem) {
                  tmp29 = RTCConnectionStore.getChannelId() === channel1.id;
                }
                if (UserGuildSettingsStore.allowAllMessages(channel1)) {
                  if (tmp29) {
                    return true;
                  }
                }
                const result1 = obj6.isSuppressEveryoneEnabled(channel1.getGuildId());
                const result2 = obj6.isSuppressRolesEnabled(channel1.getGuildId());
                obj1 = {
                  rawMessage: message,
                  userId: currentUser.id,
                  suppressEveryone: result1,
                  suppressRoles: result2,
                };
                return isMessageMentioned.isRawMessageMentioned(obj1);
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
export const shouldNotifyForSelectedChannel = function shouldNotifyForSelectedChannel(type, arg1) {
  if (SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId()) !== arg1) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(arg1);
    let channel1 = channel;
    if (type.type === constants4.THREAD_STARTER_MESSAGE) {
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      channel1 = ChannelStore.getChannel(parent_id);
    }
    const currentUser = UserStore.getCurrentUser();
    const author = type.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    const user = UserStore.getUser(id);
    let tmp7 = null != channel1 && null != currentUser && null != user;
    if (tmp7) {
      const isManagedResult = channel1.isManaged();
      let tmp9 = !isManagedResult;
      if (!isManagedResult) {
        const hasFlagResult = user.hasFlag(constants7.SPAMMER);
        let tmp12 = !hasFlagResult;
        if (!hasFlagResult) {
          const result = RelationshipStore.isBlockedOrIgnoredForMessage(type);
          let tmp15 = !result;
          if (!result) {
            let tmp16 = user.id !== currentUser.id;
            if (tmp16) {
              let tmp19 = SelfPresenceStore.getStatus() !== constants6.DND;
              if (tmp19) {
                const FocusMode = UserSettings.FocusMode;
                const setting = FocusMode.getSetting();
                let tmp23 = !setting;
                if (!setting) {
                  tmp23 = !UserGuildSettingsStore.allowNoMessages(channel1);
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
  const currentUser = UserStore.getCurrentUser();
  const user = UserStore.getUser(channel.ownerId);
  let tmp3 = null != channel2 && null != currentUser && null != user;
  if (tmp3) {
    const obj = { ignoreStatus: flag2, ignoreNoMessagesSetting: true };
    let tmp9 = shouldNotifyBase(currentUser, user, channel2, obj);
    if (tmp9) {
      const result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel2.guild_id, channel2.id);
      let tmp11 = !result;
      if (!result) {
        let result1 = !flag;
        if (!flag) {
          result1 = ChannelVisibilityUtils.isChannelCurrentlyVisible(channel2.id);
        }
        let newForumThreadsCreated = !result1;
        if (!result1) {
          newForumThreadsCreated = obj2.getNewForumThreadsCreated(channel2);
        }
        tmp11 = newForumThreadsCreated;
      }
      tmp9 = tmp11;
      obj2 = UserGuildSettingsStore;
    }
    tmp3 = tmp9;
  }
  return tmp3;
};
export const shouldNotifyForReaction = function shouldNotifyForReaction(arg0) {
  ({ channel, reactor, includeSelectedChannel, message } = arg0);
  const currentUser = UserStore.getCurrentUser();
  const author = message.author;
  let id;
  if (author != null) {
    id = author.id;
  }
  const user = UserStore.getUser(id);
  let tmp5 = null != currentUser && null != user;
  if (tmp5) {
    let tmp10 = shouldNotifyBase(currentUser, user, channel, { ignoreSameUser: true });
    if (tmp10) {
      let tmp11 = null == reactor;
      if (!tmp11) {
        tmp11 = !RelationshipStore.isBlockedOrIgnored(reactor.id);
      }
      if (tmp11) {
        let result = !includeSelectedChannel;
        if (!includeSelectedChannel) {
          result = ChannelVisibilityUtils.isChannelCurrentlyVisible(channel.id);
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
  const state = VoicePanelStore.getState();
  let flag = true;
  if (!state.isVoicePanelFullscreen()) {
    if (null == EmbeddedActivitiesStore.getConnectedActivityLocation()) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp5) {
        tmp5 = !tmp3(10089).isChannelFocused();
        const tmp3Result = tmp3(10089);
      }
      flag = tmp5;
      tmp3 = require;
    } else {
      flag = true;
    }
  }
  return flag;
};
export { renderTitle };
export const makeTextChatNotification = function makeTextChatNotification(getGuildId, content, bot) {
  let obj = NicknameUtilsDefault;
  const name = obj.getName(getGuildId.getGuildId(), getGuildId.id, bot);
  const type = getGuildId.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (tmp4.GUILD_TEXT !== type) {
      if (tmp4.GUILD_APP !== type) {
        if (tmp4.GUILD_VOICE !== type) {
          if (tmp4.ANNOUNCEMENT_THREAD !== type) {
            if (tmp4.PUBLIC_THREAD !== type) {
              if (tmp4.PRIVATE_THREAD !== type) {
                let tmp5 = name;
                if (tmp4.GROUP_DM === type) {
                  let tmp6 = getGuildId.isManaged() && bot.bot;
                  if (tmp6) {
                    let obj1 = useChannelName;
                    tmp6 = name === obj1.computeChannelName(getGuildId, UserStore, RelationshipStore);
                  }
                  tmp5 = name;
                  if (!tmp6) {
                    tmp5 = renderTitle(name, getGuildId);
                  }
                }
              }
              content = content.content;
              if (tmp(7270)(content)) {
                let tmpResult = tmp(7986);
                content = tmpResult.stringify(content, getGuildId);
                if (null == content) {
                  const obj15 = new tmp(3)("NotificationTextUtils");
                  obj = { message: content };
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
                let obj4 = isForwardMessage;
                let result = obj4.isForwardServerMessage(content);
              } else {
                result = tmp(7302)(content);
              }
              const items = [];
              if (result) {
                const intl8 = util.intl;
                let stringResult = intl8.string(util.t["9ddYKt"]);
                let tmp26 = items;
              } else {
                if (null != content.activity) {
                  if (null != content.application) {
                    if (content.activity.type === constants.JOIN) {
                      const intl7 = util.intl;
                      obj = { user: name, game: content.application.name };
                      let str7 = intl7.formatToPlainString(
                        getInviteEmbedFormatString(getGuildId, util.t.E8CgCh, util.t.c6KHWJ, util.t.Fy7rJN),
                        obj,
                      );
                    } else {
                      str7 = "";
                      if (content.activity.type === tmp44.JOIN_REQUEST) {
                        const intl9 = util.intl;
                        obj1 = { user: name, game: content.application.name };
                        str7 = intl9.formatToPlainString(
                          getInviteEmbedFormatString(getGuildId, util.t["/TD0la"], util.t["/TD0la"], util.t["/TD0la"]),
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
                    const intl6 = util.intl;
                    let obj2 = { user: name };
                    stringResult = intl6.formatToPlainString(
                      getInviteEmbedFormatString(getGuildId, util.t.SaDdmN, util.t.qsODhp, util.t.WeiMTW),
                      obj2,
                    );
                    tmp26 = items;
                    const tmp43 = getInviteEmbedFormatString(getGuildId, util.t.SaDdmN, util.t.qsODhp, util.t.WeiMTW);
                  }
                }
                if (null != sticker_items) {
                  if (sticker_items.length > 0) {
                    const intl5 = util.intl;
                    const obj3 = { stickerName: sticker_items[0].name };
                    stringResult = intl5.formatToPlainString(util.t.zY4v1B, obj3);
                    tmp26 = items;
                  }
                }
                if (content.type === constants4.PREMIUM_REFERRAL) {
                  const intl4 = util.intl;
                  obj4 = { username: null };
                  tmpResult = tmp(4404);
                  obj4.username = tmpResult.getName(bot);
                  stringResult = intl4.formatToPlainString(util.t.lieTqU, obj4);
                  tmp26 = items;
                } else if (null != content.poll) {
                  const intl3 = util.intl;
                  const obj5 = { question: content.poll.question.text };
                  stringResult = intl3.formatToPlainString(util.t.ImizdM, obj5);
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
                    let intl2 = util.intl;
                    const obj6 = { question: "" };
                    stringResult = intl2.formatToPlainString(util.t["9WrecI"], obj6);
                    tmp26 = items;
                  }
                } else {
                  if (null != content.components) {
                    if (content.components.length > 0) {
                      if (content.components[0].type === Server.ComponentType.CHECKPOINT_CARD) {
                        let intl = tmp24(1114).intl;
                        stringResult = intl.string(tmp24(1114).t.HWnMTQ);
                        tmp26 = items;
                      }
                    }
                  }
                  const tmpResult1 = tmp(7682);
                  ({ content, emoji } = tmp(7682).unparseWithMeta(content, getGuildId.id, true));
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
                  const unparseWithMetaResult = tmp(7682).unparseWithMeta(content, getGuildId.id, true);
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
                  let obj = FlagUtils;
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
                        obj = { filename: require("getDisplayFilename")(embeds.attachments[0]) };
                        return intl.formatToPlainString(tmp5(tmp6[30]).t["51OkwL"], obj);
                      }
                    }
                    return "";
                  }
                })(content);
              }
              const obj7 = {
                icon: bot.getAvatarURL(getGuildId.guild_id, 128),
                title: tmp5,
                body: stringResult,
                emoji: tmp26,
              };
              return obj7;
            }
          }
        }
      }
    }
  }
  obj2 = ChannelStore;
  const channel = ChannelStore.getChannel(getGuildId.parent_id);
  if (content.type === constants4.THREAD_STARTER_MESSAGE) {
    if (null != channel) {
      tmp5 = renderTitle(name, channel, obj2.getChannel(channel.parent_id));
    }
  }
  if (isSystemMessageDefault(content)) {
    tmp5 = name;
    if (null != GuildStore.getGuild(getGuildId.getGuildId())) {
      tmp5 = renderTitle(name, getGuildId, channel);
    }
  } else {
    tmp5 = renderTitle(name, getGuildId, channel);
  }
};
export const allowInAppNotifications = function allowInAppNotifications() {
  if (UserRequiredActionStore.hasAction()) {
    return false;
  } else {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    let setting = ShowInAppNotifications.getSetting();
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = function useAllowInAppNotifications() {
  const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const items = [UserRequiredActionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserRequiredActionStore.hasAction());
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = setting;
  }
  if (tmp4) {
    tmp4 = !focusModeEnabled;
  }
  return tmp4;
};
