// === Module 8626: ChannelSettingsStore ===

// Module 8626 (ChannelSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ForumLayout from "ForumLayout" /* 1967 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import InviteRecord from "InviteRecord" /* 8380 */;
import UserRecord from "UserRecord" /* 1385 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import Constants from "Constants" /* 1074 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

function normalizeChannelPropertyForCompare(item, toJSResult, type) {
  let str = toJSResult;
  if ("topic_" === item) {
    if (str == null) {
      str = "";
    }
    return str;
  } else if ("defaultAutoArchiveDuration" === item) {
    let tmp21 = str;
    if (str == null) {
      tmp21 = closure_17;
    }
    return tmp21;
  } else if ("defaultSortOrder" === item) {
    let LATEST_ACTIVITY = str;
    if (str == null) {
      LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
    }
    return LATEST_ACTIVITY;
  } else if ("defaultForumLayout" === item) {
    if (type === constants2.GUILD_MEDIA) {
      return ForumLayout.ForumLayout.GRID;
    } else {
      if (null == str) {
        let LIST = ForumLayout.ForumLayout.LIST;
      } else {
        LIST = str;
      }
      return LIST;
    }
  } else {
    if ("rateLimitPerUser_" !== item) {
      if ("defaultThreadRateLimitPerUser" !== item) {
        if ("defaultReactionEmoji" === item) {
          let tmp2 = null;
          if (null != str) {
            let obj = ReactionUtils;
            if (obj.isCustomReactionEmojiId(str.emojiId)) {
              obj = { emojiId: str.emojiId };
              tmp2 = obj;
            } else {
              const emojiName = str.emojiName;
              let tmp5 = null;
              if (null != emojiName) {
                tmp5 = null;
                if ("" !== emojiName) {
                  obj = { emojiName: UnicodeEmojisDefault.translateInlineEmojiToSurrogates(emojiName) };
                  tmp5 = obj;
                }
              }
              tmp2 = tmp5;
            }
          }
          return tmp2;
        } else {
          return str;
        }
      }
    }
    let num = str;
    if (str == null) {
      num = 0;
    }
    return num;
  }
}
function _createInvite(code) {
  const obj = { code: code.code, temporary: code.temporary, revoked: code.revoked, inviter: null, channel: null, guild: null, uses: null, maxUses: null, maxAge: null, createdAt: null, type: null, roles: null };
  let tmp2 = null;
  let tmp = InviteRecord;
  if (null != code.inviter) {
    tmp2 = new UserRecord(code.inviter);
  }
  obj.inviter = tmp2;
  obj.channel = closure_9(code.channel);
  let fromInviteGuildResult = null;
  if (null != code.guild) {
    fromInviteGuildResult = GuildRecordUtils.fromInviteGuild(code.guild);
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  obj.createdAt = _modDef4153(code.created_at);
  ({ type: obj.type, roles: obj.roles } = code);
  tmp = new tmp(obj);
  return tmp;
}
function _syncChannelUpdate(id) {
  let flag = false;
  if (null != closure_5) {
    flag = false;
    if (closure_5.id === id) {
      if (closure_5 === channel) {
        channel = ChannelStore.getChannel(id);
        flag = false;
        if (null != channel) {
          closure_5 = channel;
          let channel2 = obj2.getChannel(channel.parent_id);
          flag = true;
        }
        obj2 = ChannelStore;
      } else {
        const channel1 = ChannelStore.getChannel(id);
        flag = false;
        if (null != channel1) {
          closure_5 = channel1;
          flag = true;
          if (null != channel) {
            const result = channel.set("permissionOverwrites", closure_5.permissionOverwrites);
            channel = result.set("availableTags", closure_5.availableTags);
            channel2 = obj3.getChannel(channel.parent_id);
            flag = true;
          }
        }
        obj3 = ChannelStore;
      }
    }
  }
  let tmp10 = !flag;
  if (flag) {
    tmp10 = null == channel;
  }
  let flag2 = !tmp10;
  if (!tmp10) {
    let tmp13 = null != overwriteId;
    if (tmp13) {
      tmp13 = null == channel.permissionOverwrites[overwriteId];
    }
    flag2 = true;
    if (tmp13) {
      overwriteId = channel.getGuildId();
      flag2 = true;
    }
  }
  return flag2;
}
function handleOverwriteUpdate(channelId) {
  return _syncChannelUpdate(channelId.channelId);
}
let closure_9 = ChannelRecord.createChannelRecordFromInvite;
({ ChannelSettingsSections: map1, ChannelTypes: closure_14, Endpoints: closure_15, FormStates } = Constants);
let closure_17 = ThreadConstants.DEFAULT_AUTO_ARCHIVE_DURATION;
let CLOSED = FormStates.CLOSED;
let errors = {};
let invites = {};
let c21 = false;
let c22 = false;
let _location = null;
let closure_24 = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "defaultTagSetting", "iconEmoji", "themeColor", "application_id"];
let closure_26 = apply.debounce(() => {
  if (null != channel) {
    if (null != closure_5) {
      const toJSResult = channel.toJS();
      require = toJSResult;
      closure_1 = closure_5.toJS();
      const type = toJSResult.type;
      let everyResult = closure_24.every((item) => {
        const tmp = normalizeChannelPropertyForCompare(item, toJSResult[item], type);
        const tmp2 = normalizeChannelPropertyForCompare(item, closure_1[item], type);
        return apply.isEqual(tmp, tmp2);
      });
      if (everyResult) {
        everyResult = channel !== closure_5;
      }
      if (everyResult) {
        channel = closure_5;
        channelSettingsStore.emitChange();
      }
    }
  }
  return false;
}, 500);
const Store = initializeDefault.Store;
class ChannelSettingsStore extends Store {
}
const prototype = ChannelSettingsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
};
prototype["hasChanges"] = function hasChanges() {
  return closure_6 !== closure_5;
};
prototype["isOpen"] = function isOpen() {
  return c22;
};
prototype["getSection"] = function getSection() {
  return OVERVIEW;
};
prototype["getInvites"] = function getInvites() {
  invites = { invites, loading };
  return invites;
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getChannel"] = function getChannel() {
  return closure_6;
};
prototype["getFormState"] = function getFormState() {
  return CLOSED;
};
prototype["getCategory"] = function getCategory() {
  return closure_7;
};
prototype["getProps"] = function getProps() {
  invites = { submitting: CLOSED === FormStates.SUBMITTING, errors, channel, section: OVERVIEW, subsection, invites, selectedOverwriteId: overwriteId, hasChanges: this.hasChanges(), analyticsLocation: _location };
  return invites;
};
ChannelSettingsStore.displayName = "ChannelSettingsStore";
invites = {
  CHANNEL_SETTINGS_INIT: function handleSettingsInit(channelId) {
    let obj = ChannelStore;
    channel = ChannelStore.getChannel(channelId.channelId);
    if (null == channel) {
      c22 = false;
      CLOSED = FormStates.CLOSED;
      OVERVIEW = null;
      closure_5 = null;
      channel = null;
      let channel2 = null;
      obj = {};
    } else {
      CLOSED = FormStates.OPEN;
      closure_5 = channel;
      _location = null;
      if ("location" in channelId) {
        _location = null;
        if (null != channelId.location) {
          _location = channelId.location;
        }
      }
      subsection = null;
      if ("subsection" in channelId) {
        subsection = channelId.subsection;
      }
      closure_4 = subsection;
      if (null != channel) {
        channel = channel.set("nsfw", channel.isNSFW());
      }
      channel2 = obj.getChannel(channel.parent_id);
      overwriteId = channel.getGuildId();
      if (channel.isModeratorReportChannel()) {
        OVERVIEW = tmp10.PERMISSIONS;
        let tmp11 = tmp10;
      } else {
        OVERVIEW = tmp10.OVERVIEW;
        tmp11 = tmp10;
      }
      closure_19 = {};
      let tmp12 = OVERVIEW;
      if (OVERVIEW == null) {
        tmp12 = OVERVIEW;
      }
      OVERVIEW = tmp12;
      let tmp15 = null != channel;
      if (tmp15) {
        tmp15 = OVERVIEW === tmp11.INSTANT_INVITES;
      }
      if (tmp15) {
        c21 = true;
        const HTTP = HTTPUtils.HTTP;
        obj = { url: __initData.INSTANT_INVITES(channel.id), oldFormErrors: true, rejectWithError: true };
        value = HTTP.get(obj);
        value.then((body) => {
          c21 = false;
          const obj = { type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: body.body };
          obj.dispatch(obj);
        }, () => {
          c21 = false;
          return false;
        });
      }
      return true;
    }
  },
  CHANNEL_SETTINGS_SUBMIT: function handleSettingsSubmit() {
    CLOSED = FormStates.SUBMITTING;
    closure_19 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    closure_5 = closure_6;
    CLOSED = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    const OPEN = FormStates.OPEN;
    errors = errors.errors;
    if (errors == null) {
      errors = {};
    }
    const keys = Object.keys(errors);
    closure_19 = keys.reduce((acc, item) => {
      if (obj2.isArray(errors.errors[item])) {
        acc[item] = obj.join("\n");
      } else {
        acc[item] = obj;
      }
      return acc;
    }, {});
  },
  CHANNEL_SETTINGS_CLOSE: function handleSettingsClose() {
    c22 = false;
    CLOSED = FormStates.CLOSED;
    OVERVIEW = null;
    closure_5 = null;
    closure_6 = null;
    closure_7 = null;
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function handlePermissionOverwriteSelect(overwriteId) {
    overwriteId = overwriteId.overwriteId;
  },
  CHANNEL_SETTINGS_UPDATE: function handleSettingsUpdate(arg0) {
    ({ name, channelType, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, autoArchiveDuration, locked, invitable, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor, applicationId } = arg0);
    if (null == channel) {
      return false;
    } else {
      if (null != name) {
        channel = channel.set("name", name);
      }
      if (null != topic) {
        channel = channel.set("topic", topic);
      }
      if (null != bitrate) {
        channel = channel.set("bitrate", bitrate);
      }
      if (null != userLimit) {
        channel = channel.set("userLimit", userLimit);
      }
      if (null != nsfw) {
        channel = channel.set("nsfw", nsfw);
      }
      if (null != flags) {
        channel = channel.set("flags", flags);
      }
      if (null != rateLimitPerUser) {
        channel = channel.set("rateLimitPerUser", rateLimitPerUser);
      }
      if (null != defaultThreadRateLimitPerUser) {
        channel = channel.set("defaultThreadRateLimitPerUser", defaultThreadRateLimitPerUser);
      }
      if (null != autoArchiveDuration) {
        let obj = {};
        const merged = Object.assign(channel.threadMetadata);
        obj.autoArchiveDuration = autoArchiveDuration;
        channel = channel.set("threadMetadata", obj);
      }
      if (null != locked) {
        obj = {};
        const merged1 = Object.assign(channel.threadMetadata);
        obj.locked = locked;
        channel = channel.set("threadMetadata", obj);
      }
      if (null != invitable) {
        obj = {};
        const merged2 = Object.assign(channel.threadMetadata);
        obj.invitable = invitable;
        channel = channel.set("threadMetadata", obj);
      }
      if (null != defaultAutoArchiveDuration) {
        channel = channel.set("defaultAutoArchiveDuration", defaultAutoArchiveDuration);
      }
      if (null != template) {
        channel = channel.set("template", template);
      }
      if (null != channelType) {
        channel = channel.set("type", channelType);
      }
      if (undefined !== rtcRegion) {
        channel = channel.set("rtcRegion", rtcRegion);
      }
      if (null != videoQualityMode) {
        channel = channel.set("videoQualityMode", videoQualityMode);
      }
      if (undefined !== defaultReactionEmoji) {
        channel = channel.set("defaultReactionEmoji", defaultReactionEmoji);
      }
      if (null != availableTags) {
        channel = channel.set("availableTags", availableTags);
      }
      if (null != defaultSortOrder) {
        channel = channel.set("defaultSortOrder", defaultSortOrder);
      }
      if (null != defaultTagSetting) {
        channel = channel.set("defaultTagSetting", defaultTagSetting);
      }
      if (null != defaultForumLayout) {
        channel = channel.set("defaultForumLayout", defaultForumLayout);
      }
      if (undefined !== iconEmoji) {
        channel = channel.set("iconEmoji", iconEmoji);
      }
      if (null != themeColor) {
        channel = channel.set("themeColor", themeColor);
      }
      if (null != applicationId) {
        channel = channel.set("application_id", applicationId);
      }
      closure_26();
    }
  },
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    ({ section: OVERVIEW, subsection: closure_4 } = arg0);
    let tmp = null != channel;
    if (tmp) {
      tmp = OVERVIEW === constants.INSTANT_INVITES;
    }
    if (tmp) {
      c21 = true;
      const HTTP = HTTPUtils.HTTP;
      const obj = { url: __initData.INSTANT_INVITES(channel.id), oldFormErrors: true, rejectWithError: true };
      value = HTTP.get(obj);
      value.then((body) => {
        c21 = false;
        const obj = { type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: body.body };
        obj.dispatch(obj);
      }, () => {
        c21 = false;
        return false;
      });
    }
  },
  CHANNEL_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    invites = invites.invites;
    const item = invites.forEach((code) => {
      invites[code.code] = _createInvite(code);
    });
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    if (null == closure_6) {
      return false;
    } else {
      let flag = false;
      const tmp2 = channels[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp7 = _syncChannelUpdate(tmp4.id) || flag;
        flag = tmp7;
        continue;
      }
      return flag;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(arg0) {
    let tmp2 = null != closure_6;
    if (tmp2) {
      tmp2 = _syncChannelUpdate(tmp.id);
    }
    return tmp2;
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = null != channel;
    if (tmp2) {
      if (channel.id === tmp) {
        CLOSED = FormStates.CLOSED;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  }
};
const channelSettingsStore = new ChannelSettingsStore(DispatcherDefault, invites);
let result = size.fileFinishedImporting("stores/ChannelSettingsStore.tsx");

export default channelSettingsStore;