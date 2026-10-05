// === Module 10063: ChannelSettingsStore ===

// Module 10063 (ChannelSettingsStore)
import _mod12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ForumLayout from "ForumLayout" /* 2062 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import _modDef4461 from "module_4461" /* 4461 */;
import ReactionUtils from "ReactionUtils" /* 4521 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import InviteRecord from "InviteRecord" /* 8056 */;
import UserRecord from "UserRecord" /* 1391 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const module_12 = _mod12;
let OVERVIEW, channel, closure_5, closure_7, set, set2, set3, subsection;

let FormStates;
let closure_14;
let closure_15;
let map1;
const f102548 = (body) => {
  c21 = false;
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: body.body };
  obj.dispatch(obj2);
};
const f102549 = () => {
  c21 = false;
  return false;
};
function normalizeChannelPropertyForCompare(item, toJSResult, type) {
  let obj3;
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
      let LIST;
      if (null == str) {
        LIST = ForumLayout.ForumLayout.LIST;
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
            const obj = ReactionUtils;
            if (obj.isCustomReactionEmojiId(str.emojiId)) {
              tmp2 = { emojiId: str.emojiId };
              const obj2 = { emojiId: str.emojiId };
            } else {
              const emojiName = str.emojiName;
              let tmp5 = null;
              if (null != emojiName) {
                tmp5 = null;
                if ("" !== emojiName) {
                  const obj4 = { emojiName: obj3.translateInlineEmojiToSurrogates(emojiName) };
                  tmp5 = obj4;
                  obj3 = UnicodeEmojisDefault;
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
  let fromInviteGuildResult;
  let tmp2;
  const obj = { code: code.code, temporary: code.temporary, revoked: code.revoked, inviter: tmp2, channel: closure_9(code.channel), guild: fromInviteGuildResult, uses: null, maxUses: null, maxAge: null, createdAt: _modDef4461(code.created_at), type: null, roles: null };
  tmp2 = null;
  if (null != code.inviter) {
    const self = this;
    const self2 = this;
    tmp2 = new UserRecord(code.inviter);
  }
  fromInviteGuildResult = null;
  if (null != code.guild) {
    const obj2 = GuildRecordUtils;
    fromInviteGuildResult = obj2.fromInviteGuild(code.guild);
  }
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  ({ type: obj.type, roles: obj.roles } = code);
  const tmp4 = new InviteRecord(obj);
  return tmp4;
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
          let channel2 = ChannelStore.getChannel(channel.parent_id);
          flag = true;
        }
      } else {
        const channel1 = ChannelStore.getChannel(id);
        flag = false;
        if (null != channel1) {
          closure_5 = channel1;
          flag = true;
          if (null != channel) {
            const result = channel.set("permissionOverwrites", closure_5.permissionOverwrites);
            channel = result.set("availableTags", closure_5.availableTags);
            channel2 = ChannelStore.getChannel(channel.parent_id);
            flag = true;
          }
        }
      }
    }
  }
  let tmp10 = !flag;
  if (flag) {
    tmp10 = null == channel;
  }
  let flag2 = !tmp10;
  if (flag2) {
    flag2 = true;
    const tmp13 = null != overwriteId && null == channel.permissionOverwrites[overwriteId];
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
let closure_26 = module_12.debounce(() => {
  let closure_6;
  if (null != channel) {
    if (null != closure_5) {
      let tmp = channel;
      const toJSResult = channel.toJS();
      require = toJSResult;
      let closure_1 = closure_5.toJS();
      const type = toJSResult.type;
      const everyResult = closure_24.every((item) => {
        const tmp = closure_1[item];
        const tmp2 = normalizeChannelPropertyForCompare(item, require[item], type);
        const tmp3 = normalizeChannelPropertyForCompare(item, tmp, type);
        const obj = module_12;
        return obj.isEqual(tmp2, tmp3);
      }) && channel !== closure_5;
      if (everyResult) {
        channel = closure_5;
        channelSettingsStore.emitChange();
      }
    }
  }
  return false;
}, 500);
const Store = get_initializedDefault.Store;
class ChannelSettingsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  hasChanges() {
    return channel !== closure_5;
  }
  isOpen() {
    return c22;
  }
  getSection() {
    return OVERVIEW;
  }
  getInvites() {
    invites = { invites, loading };
    return invites;
  }
  showNotice() {
    return this.hasChanges();
  }
  getChannel() {
    return channel;
  }
  getFormState() {
    return CLOSED;
  }
  getCategory() {
    return closure_7;
  }
  getProps() {
    invites = { submitting: CLOSED === FormStates.SUBMITTING, errors, channel, section: OVERVIEW, subsection, invites, selectedOverwriteId: overwriteId, hasChanges: this.hasChanges(), analyticsLocation: _location };
    return invites;
  }
}
const prototype = ChannelSettingsStore.prototype;
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
      let tmp11;
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
      let closure_4 = subsection;
      if (null != channel) {
        channel = channel.set("nsfw", channel.isNSFW());
      }
      channel2 = obj.getChannel(channel.parent_id);
      overwriteId = channel.getGuildId();
      if (channel.isModeratorReportChannel()) {
        OVERVIEW = map1.PERMISSIONS;
        tmp11 = map1;
      } else {
        OVERVIEW = map1.OVERVIEW;
        tmp11 = map1;
      }
      let closure_19 = {};
      let tmp12 = OVERVIEW;
      if (OVERVIEW == null) {
        tmp12 = OVERVIEW;
      }
      OVERVIEW = tmp12;
      const tmp15 = null != channel && OVERVIEW === tmp11.INSTANT_INVITES;
      if (tmp15) {
        let c21 = true;
        const HTTP = HTTPUtils.HTTP;
        let obj2 = { url: closure_15.INSTANT_INVITES(channel.id), oldFormErrors: true, rejectWithError: true };
        const get = HTTP.get;
        const value = get(obj2);
        value.then(f102548, f102549);
      }
      return true;
    }
  },
  CHANNEL_SETTINGS_SUBMIT: function handleSettingsSubmit() {
    CLOSED = FormStates.SUBMITTING;
    let closure_19 = {};
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function handleSettingsSubmitSuccess() {
    closure_5 = channel;
    CLOSED = FormStates.OPEN;
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function handleSettingsSubmitFailure(errors) {
    const OPEN = FormStates.OPEN;
    errors = errors.errors;
    const _Object = Object;
    if (errors == null) {
      errors = {};
    }
    const keys1 = keys(errors);
    let closure_19 = keys1.reduce((acc, item) => {
      const obj2 = _mod12;
      if (obj2.isArray(errors.errors[item])) {
        acc[item] = errors.errors[item].join("\n");
      } else {
        acc[item] = errors.errors[item];
      }
      return acc;
    }, {});
  },
  CHANNEL_SETTINGS_CLOSE: function handleSettingsClose() {
    c22 = false;
    CLOSED = FormStates.CLOSED;
    OVERVIEW = null;
    closure_5 = null;
    let closure_6 = null;
    closure_7 = null;
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: handleOverwriteUpdate,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function handlePermissionOverwriteSelect(overwriteId) {
    overwriteId = overwriteId.overwriteId;
  },
  CHANNEL_SETTINGS_UPDATE: function handleSettingsUpdate(arg0) {
    let applicationId;
    let autoArchiveDuration;
    let availableTags;
    let bitrate;
    let channelType;
    let defaultAutoArchiveDuration;
    let defaultForumLayout;
    let defaultReactionEmoji;
    let defaultSortOrder;
    let defaultTagSetting;
    let defaultThreadRateLimitPerUser;
    let flags;
    let iconEmoji;
    let invitable;
    let locked;
    let name;
    let nsfw;
    let rateLimitPerUser;
    let rtcRegion;
    let template;
    let themeColor;
    let topic;
    let userLimit;
    let videoQualityMode;
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
        const obj = { autoArchiveDuration };
        set = channel.set;
        const merged = Object.assign(channel.threadMetadata);
        channel = set("threadMetadata", obj);
      }
      if (null != locked) {
        const obj2 = { locked };
        set2 = channel.set;
        const merged1 = Object.assign(channel.threadMetadata);
        channel = set2("threadMetadata", obj2);
      }
      if (null != invitable) {
        const obj3 = { invitable };
        set3 = channel.set;
        const merged2 = Object.assign(channel.threadMetadata);
        channel = set3("threadMetadata", obj3);
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
      if (undefined !== applicationId) {
        channel = channel.set("application_id", applicationId);
      }
      closure_26();
    }
  },
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    let closure_4;
    ({ section: OVERVIEW, subsection: closure_4 } = arg0);
    const tmp = null != channel && OVERVIEW === map1.INSTANT_INVITES;
    if (tmp) {
      let c21 = true;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj = { url: closure_15.INSTANT_INVITES(channel.id), oldFormErrors: true, rejectWithError: true };
      const value = get(obj);
      value.then(f102548, f102549);
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
    if (null == channel) {
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
    const tmp2 = null != channel && _syncChannelUpdate(tmp.id);
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
    delete obj[arg0.code];
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