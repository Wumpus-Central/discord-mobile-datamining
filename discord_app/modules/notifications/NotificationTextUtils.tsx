// === Module 12485: NotificationTextUtils ===

// Module 12485 (NotificationTextUtils)
import LoggerDefault from "Logger" /* 3 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import intl10 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import Server from "Server" /* 1985 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import useChannelName from "useChannelName" /* 5049 */;
import AgeGateUtils from "AgeGateUtils" /* 5106 */;
import isMessageMentioned from "isMessageMentioned" /* 5316 */;
import isSystemMessageDefault from "isSystemMessage" /* 6783 */;
import isForwardMessage from "isForwardMessage" /* 6815 */;
import MessageParserDefault from "MessageParser" /* 7179 */;
import IsolateString from "IsolateString" /* 7182 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 7656 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 7951 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import ThreadNotificationSettings from "ThreadNotificationSettings" /* 11082 */;
import isChannelFocused from "isChannelFocused" /* 11839 */;
import ChannelVisibilityUtils from "ChannelVisibilityUtils" /* 12487 */;
import FocusModeUtils from "FocusModeUtils" /* 12488 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import MessageRequestStore from "MessageRequestStore" /* 6734 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import VoicePanelStore from "VoicePanelStore" /* 5104 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import RpcNotificationSettingsStore from "RpcNotificationSettingsStore" /* 12486 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const isForwardMessageDefault = isForwardMessage;

let c9;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let metroImportAll;
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
    const obj2 = AgeGateUtils;
    if (obj2.isChannelContentGated(channel)) {
      return false;
    } else {
      const guildId = channel.getGuildId();
      let tmp6 = null == guildId || !LurkingStore.isLurking(guildId);
      if (tmp6) {
        let tmp10 = !(!obj.ignoreSameUser && user.id === currentUser.id);
        const tmp8 = !obj.ignoreSameUser && user.id === currentUser.id;
        if (tmp10) {
          let tmp13 = !RelationshipStore.isBlockedOrIgnored(user.id);
          RelationshipStore.isBlockedOrIgnored(user.id);
          if (tmp13) {
            let tmp17 = !(!obj.ignoreStatus && SelfPresenceStore.getStatus() === constants6.DND);
            const tmp14 = !obj.ignoreStatus && SelfPresenceStore.getStatus() === constants6.DND;
            if (tmp17) {
              const FocusMode = UserSettings.FocusMode;
              const setting = FocusMode.getSetting();
              let tmp19 = !setting;
              if (tmp19) {
                tmp19 = !(!obj.ignoreNoMessagesSetting && UserGuildSettingsStore.allowNoMessages(channel));
                const allowNoMessagesResult = !obj.ignoreNoMessagesSetting && UserGuildSettingsStore.allowNoMessages(channel);
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
  }
}
function renderTitle(channelName, channel, channel2) {
  const obj = IsolateString;
  const isolateResult = obj.isolate(channelName);
  const isolate = IsolateString.isolate;
  IsolateString;
  let str = "";
  const obj2 = useChannelName;
  const isolateResult1 = isolate(obj2.computeChannelName(channel, UserStore, RelationshipStore, true));
  if (null != channel) {
    const isolate2 = IsolateString.isolate;
    IsolateString;
    const _HermesInternal = HermesInternal;
    const tmpResult2 = useChannelName;
    str = ", " + isolate2(tmpResult2.computeChannelName(channel, UserStore, RelationshipStore));
  }
  return "" + isolateResult + " (" + isolateResult1 + str + ")";
}
function getInviteEmbedFormatString(type, E8CgCh, _TD0la, _TD0la2) {
  type = type.type;
  if (constants2.GROUP_DM === type) {
    return _TD0la;
  } else if (constants2.DM === type) {
    return _TD0la2;
  } else {
    if (constants2.GUILD_TEXT !== type) {
      if (constants2.GUILD_ANNOUNCEMENT !== type) {
        if (constants2.GUILD_APP !== type) {
          if (constants2.GUILD_FORUM !== type) {
            if (constants2.GUILD_MEDIA !== type) {
              if (constants2.GUILD_VOICE !== type) {
                if (constants2.GUILD_STAGE_VOICE !== type) {
                  if (constants2.ANNOUNCEMENT_THREAD !== type) {
                    if (constants2.PUBLIC_THREAD !== type) {
                      if (constants2.PRIVATE_THREAD !== type) {
                        if (constants2.MEDIA_THREAD !== type) {
                          if (constants2.GUILD_CATEGORY !== type) {
                            if (constants2.GUILD_STORE !== type) {
                              if (constants2.GUILD_DIRECTORY !== type) {
                                if (constants2.GUILD_SPACE !== type) {
                                  const UNKNOWN = constants2.UNKNOWN;
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
    return E8CgCh;
  }
}
({ GUILD_VOCAL_CHANNEL_TYPES: metroImportAll, THREAD_CHANNEL_TYPES: c9 } = ChannelRecord);
({ ActivityActionTypes: closure_21, ChannelTypes: closure_22, MessageFlags: closure_23, MessageTypes: closure_24, MessageTypesSets: closure_25, StatusTypes: closure_26, UserFlags: closure_27 } = Constants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(2);
  const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const obj2 = FocusModeUtils;
  const focusModeEnabled = obj2.useFocusModeEnabled();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserRequiredActionStore];
    const fn = function t() {
      return UserRequiredActionStore.hasAction();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  return !stateFromStores && setting && !focusModeEnabled;
}) : (() => {
  const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
  const setting = ShowInAppNotifications.useSetting();
  const obj = FocusModeUtils;
  const focusModeEnabled = obj.useFocusModeEnabled();
  const items = [UserRequiredActionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => UserRequiredActionStore.hasAction());
  return !stateFromStores && setting && !focusModeEnabled;
});
let result = size.fileFinishedImporting("modules/notifications/NotificationTextUtils.tsx");

export { shouldNotifyBase };
export const shouldNotify = function shouldNotify(message, channel_id) {
  let SELF_MENTIONABLE_SYSTEM;
  let result;
  let flag = result;
  if (result === undefined) {
    flag = true;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  if (null != message.flags) {
    const obj = FlagUtils;
    if (obj.hasFlag(message.flags, constants3.SUPPRESS_NOTIFICATIONS)) {
      return false;
    }
  }
  const channel = ChannelStore.getChannel(channel_id);
  let channel1 = channel;
  if (message.type === constants4.THREAD_STARTER_MESSAGE) {
    let parent_id;
    const getChannel = ChannelStore.getChannel;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    channel1 = getChannel(parent_id);
  }
  const currentUser = UserStore.getCurrentUser();
  const author = message.author;
  let id;
  const getUser = UserStore.getUser;
  if (author != null) {
    id = author.id;
  }
  const user = getUser(id);
  if (null != channel1) {
    if (null != currentUser) {
      if (null != user) {
        if (channel1.type === constants2.GROUP_DM) {
          if (message.type === constants4.RECIPIENT_REMOVE) {
            return false;
          }
        }
        if (RpcNotificationSettingsStore.areSlayerNotificationsSuppressed()) {
          const tmp13 = channel1.type === constants2.DM || null != channel1.linkedLobby;
          if (tmp13) {
            return false;
          }
        }
        const obj2 = { ignoreStatus: flag2, ignoreSameUser: SELF_MENTIONABLE_SYSTEM.has(message.type) };
        SELF_MENTIONABLE_SYSTEM = constants5.SELF_MENTIONABLE_SYSTEM;
        if (shouldNotifyBase(currentUser, user, channel1, obj2)) {
          if (MessageRequestStore.isMessageRequest(channel_id)) {
            return false;
          } else {
            if (!flag) {
              const obj4 = ChannelVisibilityUtils;
              if (obj4.isChannelCurrentlyVisible(channel1.id)) {
                return false;
              }
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
                  const obj8 = ThreadNotificationSettings;
                  const threadNotificationSetting = obj8.computeThreadNotificationSetting(channel1);
                  let tmp40 = threadNotificationSetting !== ThreadMemberFlags.NO_MESSAGES;
                  if (tmp40) {
                    result = threadNotificationSetting === ThreadMemberFlags.ALL_MESSAGES;
                    if (!result) {
                      const obj3 = { rawMessage: message, userId: currentUser.id, suppressEveryone: false, suppressRoles: false };
                      const tmp37Result = isMessageMentioned;
                      result = tmp37Result.isRawMessageMentioned(obj3);
                    }
                    tmp40 = result;
                  }
                  return tmp40;
                }
              } else {
                const hasItem = metroImportAll.has(channel1.type);
                let tmp30 = !hasItem;
                if (hasItem) {
                  tmp30 = RTCConnectionStore.getChannelId() === channel1.id;
                }
                if (UserGuildSettingsStore.allowAllMessages(channel1)) {
                  if (tmp30) {
                    return true;
                  }
                }
                const result1 = UserGuildSettingsStore.isSuppressEveryoneEnabled(channel1.getGuildId());
                const result2 = UserGuildSettingsStore.isSuppressRolesEnabled(channel1.getGuildId());
                const obj7 = { rawMessage: message, userId: currentUser.id, suppressEveryone: result1, suppressRoles: result2 };
                const obj6 = isMessageMentioned;
                return obj6.isRawMessageMentioned(obj7);
              }
            }
          }
        } else {
          return false;
        }
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
      const getChannel = ChannelStore.getChannel;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      channel1 = getChannel(parent_id);
    }
    const currentUser = UserStore.getCurrentUser();
    const author = type.author;
    let id;
    const getUser = UserStore.getUser;
    if (author != null) {
      id = author.id;
    }
    const user = getUser(id);
    let tmp7 = null != channel1 && null != currentUser && null != user;
    if (tmp7) {
      let tmp9 = !channel1.isManaged();
      channel1.isManaged();
      if (tmp9) {
        let tmp12 = !user.hasFlag(constants7.SPAMMER);
        user.hasFlag(constants7.SPAMMER);
        if (tmp12) {
          const result = RelationshipStore.isBlockedOrIgnoredForMessage(type);
          let tmp15 = !result;
          if (tmp15) {
            let tmp16 = user.id !== currentUser.id;
            if (tmp16) {
              let tmp19 = SelfPresenceStore.getStatus() !== constants6.DND;
              if (tmp19) {
                const FocusMode = UserSettings.FocusMode;
                const setting = FocusMode.getSetting();
                tmp19 = !setting && !UserGuildSettingsStore.allowNoMessages(channel1);
                const tmp23 = !setting && !UserGuildSettingsStore.allowNoMessages(channel1);
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
export const shouldNotifyForForumThreadCreation = function shouldNotifyForForumThreadCreation(channel, channel1, arg2) {
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
  let tmp3 = null != channel1 && null != currentUser && null != user;
  if (tmp3) {
    const obj = { ignoreStatus: flag2, ignoreNoMessagesSetting: true };
    let tmp9 = shouldNotifyBase(currentUser, user, channel1, obj);
    if (tmp9) {
      const result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel1.guild_id, channel1.id);
      let tmp11 = !result;
      if (tmp11) {
        let result1 = !flag;
        if (result1) {
          const obj3 = ChannelVisibilityUtils;
          result1 = obj3.isChannelCurrentlyVisible(channel1.id);
        }
        tmp11 = !result1 && UserGuildSettingsStore.getNewForumThreadsCreated(channel1);
        !result1 && UserGuildSettingsStore.getNewForumThreadsCreated(channel1);
      }
      tmp9 = tmp11;
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
  const currentUser = UserStore.getCurrentUser();
  const author = message.author;
  let id;
  const getUser = UserStore.getUser;
  if (author != null) {
    id = author.id;
  }
  const user = getUser(id);
  let tmp5 = null != currentUser && null != user;
  if (tmp5) {
    let tmp10 = shouldNotifyBase(currentUser, user, channel, { ignoreSameUser: true });
    if (tmp10) {
      let tmp11 = null == reactor || !RelationshipStore.isBlockedOrIgnored(reactor.id);
      if (tmp11) {
        let result = !includeSelectedChannel;
        if (result) {
          const obj = ChannelVisibilityUtils;
          result = obj.isChannelCurrentlyVisible(channel.id);
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
      const obj3 = RootNavigationRef;
      const rootNavigationRef = obj3.getRootNavigationRef();
      let tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
      if (!tmp5) {
        const tmp3Result = isChannelFocused;
        tmp5 = !tmp3Result.isChannelFocused();
      }
      flag = tmp5;
    } else {
      flag = true;
    }
  }
  return flag;
};
export { renderTitle };
export const makeTextChatNotification = function makeTextChatNotification(getGuildId, content, bot) {
  let emoji;
  let tmp5;
  let tmpResult3;
  function getContentlessNotificationBody(embeds) {
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
    let num2 = embeds.flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (num2 == null) {
      num2 = 0;
    }
    if (hasFlag(num2, constants.IS_VOICE_MESSAGE)) {
      const intl2 = intl10.intl;
      return intl2.string(intl10.t.slFYgi);
    } else {
      if (undefined !== embeds.attachments) {
        if (embeds.attachments.length > 0) {
          const tmp9 = getDisplayFilenameDefault(embeds.attachments[0]);
          const intl = intl10.intl;
          const obj = { filename: tmp9 };
          return intl.formatToPlainString(intl10.t["51OkwL"], obj);
        }
      }
      return "";
    }
  }
  let obj = NicknameUtilsDefault;
  const name = obj.getName(getGuildId.getGuildId(), getGuildId.id, bot);
  const type = getGuildId.type;
  if (constants2.GUILD_ANNOUNCEMENT !== type) {
    if (constants2.GUILD_TEXT !== type) {
      if (constants2.GUILD_APP !== type) {
        if (constants2.GUILD_VOICE !== type) {
          if (constants2.ANNOUNCEMENT_THREAD !== type) {
            if (constants2.PUBLIC_THREAD !== type) {
              let sticker_items;
              let result;
              let stringResult;
              let tmp26;
              if (constants2.PRIVATE_THREAD !== type) {
                tmp5 = name;
                if (constants2.GROUP_DM === type) {
                  let tmp6 = getGuildId.isManaged() && bot.bot;
                  if (tmp6) {
                    const obj2 = useChannelName;
                    tmp6 = name === obj2.computeChannelName(getGuildId, UserStore, RelationshipStore);
                  }
                  tmp5 = name;
                  if (!tmp6) {
                    tmp5 = renderTitle(name, getGuildId);
                  }
                }
              }
              let content1 = content.content;
              if (isSystemMessageDefault(content)) {
                const tmpResult = SystemMessageUtilsDefault;
                content1 = tmpResult.stringify(content, getGuildId);
                if (null == content1) {
                  const self = this;
                  const self2 = this;
                  const obj15 = new LoggerDefault("NotificationTextUtils");
                  const obj4 = { message: content };
                  obj15.warn("SystemMessageUtils.stringify(...) could not convert", obj4);
                  const _Error = Error;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("failed to stringify system message");
                  throw error;
                }
              }
              if ("sticker_items" in content) {
                sticker_items = content.sticker_items;
              } else {
                sticker_items = "stickerItems" in content ? content.stickerItems : content.stickers;
              }
              if ("message_reference" in content) {
                const obj5 = isForwardMessage;
                result = obj5.isForwardServerMessage(content);
              } else {
                result = isForwardMessageDefault(content);
              }
              const items = [];
              if (result) {
                const intl8 = intl10.intl;
                stringResult = intl8.string(intl10.t["9ddYKt"]);
                tmp26 = items;
              } else {
                if (null != content.activity) {
                  if (null != content.application) {
                    let str7;
                    if (content.activity.type === constants.JOIN) {
                      const intl7 = intl10.intl;
                      const formatToPlainString2 = intl7.formatToPlainString;
                      const E8CgCh = intl10.t.E8CgCh;
                      const obj6 = { user: name, game: content.application.name };
                      str7 = formatToPlainString2(getInviteEmbedFormatString(getGuildId, E8CgCh, intl10.t.c6KHWJ, intl10.t.Fy7rJN), obj6);
                    } else {
                      str7 = "";
                      if (content.activity.type === tmp43.JOIN_REQUEST) {
                        const intl9 = intl10.intl;
                        const formatToPlainString3 = intl9.formatToPlainString;
                        const prop = intl10.t["/TD0la"];
                        const obj7 = { user: name, game: content.application.name };
                        str7 = formatToPlainString3(getInviteEmbedFormatString(getGuildId, prop, intl10.t["/TD0la"], intl10.t["/TD0la"]), obj7);
                      }
                    }
                    stringResult = str7;
                    tmp26 = items;
                  }
                }
                if (null != content.activity) {
                  if (content.activity.type === constants.LISTEN) {
                    const SaDdmN = intl10.t.SaDdmN;
                    const tmp42 = getInviteEmbedFormatString(getGuildId, SaDdmN, intl10.t.qsODhp, intl10.t.WeiMTW);
                    const intl6 = intl10.intl;
                    const obj8 = { user: name };
                    stringResult = intl6.formatToPlainString(tmp42, obj8);
                    tmp26 = items;
                  }
                }
                if (null != sticker_items) {
                  if (sticker_items.length > 0) {
                    const intl5 = intl10.intl;
                    const obj9 = { stickerName: sticker_items[0].name };
                    stringResult = intl5.formatToPlainString(intl10.t.zY4v1B, obj9);
                    tmp26 = items;
                  }
                }
                if (content.type === constants4.PREMIUM_REFERRAL) {
                  const intl4 = intl10.intl;
                  const formatToPlainString = intl4.formatToPlainString;
                  const obj10 = { username: tmpResult3.getName(bot) };
                  const lieTqU = intl10.t.lieTqU;
                  tmpResult3 = UserUtilsDefault;
                  stringResult = formatToPlainString(lieTqU, obj10);
                  tmp26 = items;
                } else if (null != content.poll) {
                  const intl3 = intl10.intl;
                  const obj11 = { question: content.poll.question.text };
                  stringResult = intl3.formatToPlainString(intl10.t.ImizdM, obj11);
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
                  let str5 = "";
                  if (null != found) {
                    str5 = "value" in found ? found.value : found.rawValue;
                  }
                  let intl2 = intl10.intl;
                  const obj12 = { question: str5 };
                  stringResult = intl2.formatToPlainString(intl10.t["9WrecI"], obj12);
                  tmp26 = items;
                } else {
                  if (null != content.components) {
                    let num2 = 0;
                    if (content.components.length > 0) {
                      if (content.components[0].type === Server.ComponentType.CHECKPOINT_CARD) {
                        let intl = intl10.intl;
                        stringResult = intl.string(intl10.t.HWnMTQ);
                        tmp26 = items;
                      }
                    }
                  }
                  const tmpResult4 = MessageParserDefault;
                  ({ content, emoji } = tmpResult4.unparseWithMeta(content1, getGuildId.id, true));
                  tmp26 = emoji;
                  stringResult = content;
                  tmpResult4.unparseWithMeta(content1, getGuildId.id, true);
                  if (0 !== content1.length) {
                    tmp26 = emoji;
                    stringResult = content;
                    if (getGuildId.type === constants2.DM) {
                      tmp26 = emoji;
                      stringResult = content;
                      if (!bot.bot) {
                        tmp26 = emoji;
                        stringResult = content;
                        if (content1.startsWith("> -# *")) {
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
                }
              }
              if (0 === stringResult.length) {
                stringResult = getContentlessNotificationBody(content);
              }
              const obj13 = { icon: bot.getAvatarURL(getGuildId.guild_id, 128), title: tmp5, body: stringResult, emoji: tmp26 };
              return obj13;
            }
          }
        }
      }
    }
  }
  const channel = ChannelStore.getChannel(getGuildId.parent_id);
  if (content.type === constants4.THREAD_STARTER_MESSAGE) {
    if (null != channel) {
      tmp5 = renderTitle(name, channel, ChannelStore.getChannel(channel.parent_id));
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
    const obj = FocusModeUtils;
    if (setting) {
      setting = !obj.getFocusModeEnabled();
    }
    return setting;
  }
};
export const useAllowInAppNotifications = tmp4;