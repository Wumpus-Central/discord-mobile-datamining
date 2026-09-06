// === Module 1961: ChannelRecord ===

// Module 1961 (ChannelRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import privDefault from "priv" /* 1437 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1965 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ForumLayout from "ForumLayout" /* 1967 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 1968 */;
import TypeUtils from "TypeUtils" /* 1969 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;

require = fn;
function createChannelRecord(type) {
  let GUILD_TEXT = type.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp5 = dependencyMap[GUILD_TEXT];
  if (tmp5 == null) {
    tmp5 = UnknownChannelRecord;
  }
  if ("topic" in type) {
    type.topic_ = type.topic;
    delete tmp2[tmp];
  }
  if ("position" in type) {
    type.position_ = type.position;
    delete tmp2[tmp];
  }
  if ("permissionOverwrites" in type) {
    type.permissionOverwrites_ = type.permissionOverwrites;
    delete tmp2[tmp];
  }
  if ("bitrate" in type) {
    type.bitrate_ = type.bitrate;
    delete tmp2[tmp];
  }
  if ("userLimit" in type) {
    type.userLimit_ = type.userLimit;
    delete tmp2[tmp];
  }
  if ("nsfw" in type) {
    type.nsfw_ = type.nsfw;
    delete tmp2[tmp];
  }
  if ("rateLimitPerUser" in type) {
    type.rateLimitPerUser_ = type.rateLimitPerUser;
    delete tmp2[tmp];
  }
  if ("flags" in type) {
    type.flags_ = type.flags;
    delete tmp2[tmp];
  }
  tmp5 = new tmp5(type);
  return tmp5;
}
const Constants = fn(1074);
({ BITRATE_DEFAULT: hasOwnProperty, ChannelTypes } = Constants);
const BasicPermissions = Constants.BasicPermissions;
({ ChannelTypesSets: closure_8, Permissions } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
let items = [, , , , , , , , , , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], ANNOUNCEMENT_THREAD: arr[2], PUBLIC_THREAD: arr[3], PRIVATE_THREAD: arr[4], GUILD_DIRECTORY: arr[5], GUILD_FORUM: arr[6], GUILD_MEDIA: arr[7], GUILD_APP: arr[8], DM: arr[9], GROUP_DM: arr[10] } = ChannelTypes);
const set = new Set(items);
let items1 = [, , , , , , , , , , , , , , , , ];
({ DM: arr2[0], GROUP_DM: arr2[1], GUILD_TEXT: arr2[2], GUILD_VOICE: arr2[3], GUILD_STAGE_VOICE: arr2[4], GUILD_CATEGORY: arr2[5], GUILD_ANNOUNCEMENT: arr2[6], GUILD_STORE: arr2[7], ANNOUNCEMENT_THREAD: arr2[8], PUBLIC_THREAD: arr2[9], PRIVATE_THREAD: arr2[10], GUILD_DIRECTORY: arr2[11], GUILD_FORUM: arr2[12], GUILD_MEDIA: arr2[13], GUILD_SPACE: arr2[14], MEDIA_THREAD: arr2[15], GUILD_APP: arr2[16] } = ChannelTypes);
const items2 = [, , , , , ];
({ GUILD_TEXT: arr3[0], GUILD_ANNOUNCEMENT: arr3[1], ANNOUNCEMENT_THREAD: arr3[2], PUBLIC_THREAD: arr3[3], PRIVATE_THREAD: arr3[4], GUILD_APP: arr3[5] } = ChannelTypes);
const set2 = new Set(items2);
const items3 = [, , , , , , ];
({ GUILD_TEXT: arr4[0], GUILD_ANNOUNCEMENT: arr4[1], GUILD_FORUM: arr4[2], GUILD_MEDIA: arr4[3], GUILD_VOICE: arr4[4], GUILD_STAGE_VOICE: arr4[5], GUILD_APP: arr4[6] } = ChannelTypes);
const set1 = new Set(items1);
const items4 = [ChannelTypes.GUILD_TEXT];
const set3 = new Set(items3);
const items5 = [, , , , , , , , , , , , , ];
({ GUILD_TEXT: arr6[0], GUILD_VOICE: arr6[1], GUILD_STAGE_VOICE: arr6[2], GUILD_CATEGORY: arr6[3], GUILD_ANNOUNCEMENT: arr6[4], GUILD_STORE: arr6[5], ANNOUNCEMENT_THREAD: arr6[6], PUBLIC_THREAD: arr6[7], PRIVATE_THREAD: arr6[8], GUILD_DIRECTORY: arr6[9], GUILD_FORUM: arr6[10], GUILD_MEDIA: arr6[11], GUILD_SPACE: arr6[12], GUILD_APP: arr6[13] } = ChannelTypes);
const set5 = new Set(items5);
const items6 = [, , , , ];
({ GUILD_TEXT: arr7[0], GUILD_ANNOUNCEMENT: arr7[1], GUILD_FORUM: arr7[2], GUILD_MEDIA: arr7[3], GUILD_APP: arr7[4] } = ChannelTypes);
const set4 = new Set(items4);
const items7 = [, ];
({ GUILD_VOICE: arr8[0], GUILD_STAGE_VOICE: arr8[1] } = ChannelTypes);
const set7 = new Set(items7);
const items8 = [ChannelTypes.GUILD_STAGE_VOICE];
const set6 = new Set(items6);
const items9 = [, ];
({ DM: arr10[0], GROUP_DM: arr10[1] } = ChannelTypes);
const set9 = new Set(items9);
const items10 = [ChannelTypes.GROUP_DM];
const set10 = new Set(items10);
const items11 = [, , , , , , , ];
({ DM: arr12[0], GROUP_DM: arr12[1], GUILD_TEXT: arr12[2], GUILD_ANNOUNCEMENT: arr12[3], ANNOUNCEMENT_THREAD: arr12[4], PUBLIC_THREAD: arr12[5], PRIVATE_THREAD: arr12[6], GUILD_APP: arr12[7] } = ChannelTypes);
const set11 = new Set(items11);
const items12 = [, , , , , ];
({ DM: arr13[0], GROUP_DM: arr13[1], GUILD_VOICE: arr13[2], GUILD_STAGE_VOICE: arr13[3], PUBLIC_THREAD: arr13[4], PRIVATE_THREAD: arr13[5] } = ChannelTypes);
const set12 = new Set(items12);
const items13 = [, , , , , , , , , , ];
({ GUILD_TEXT: arr14[0], GUILD_ANNOUNCEMENT: arr14[1], ANNOUNCEMENT_THREAD: arr14[2], PUBLIC_THREAD: arr14[3], PRIVATE_THREAD: arr14[4], GUILD_DIRECTORY: arr14[5], GUILD_FORUM: arr14[6], GUILD_MEDIA: arr14[7], GUILD_APP: arr14[8], DM: arr14[9], GROUP_DM: arr14[10] } = ChannelTypes);
const set13 = new Set(items13);
const items14 = [, , , ];
({ ANNOUNCEMENT_THREAD: arr15[0], PUBLIC_THREAD: arr15[1], PRIVATE_THREAD: arr15[2], MEDIA_THREAD: arr15[3] } = ChannelTypes);
const set14 = new Set(items14);
const items15 = [, ];
({ PUBLIC_THREAD: arr16[0], PRIVATE_THREAD: arr16[1] } = ChannelTypes);
const set15 = new Set(items15);
const items16 = [, , , , ];
({ GUILD_TEXT: arr17[0], GUILD_ANNOUNCEMENT: arr17[1], GUILD_FORUM: arr17[2], GUILD_MEDIA: arr17[3], GUILD_APP: arr17[4] } = ChannelTypes);
const set8 = new Set(items8);
const items17 = [, , , , , , , , , , , , ];
({ DM: arr18[0], GROUP_DM: arr18[1], GUILD_TEXT: arr18[2], GUILD_ANNOUNCEMENT: arr18[3], ANNOUNCEMENT_THREAD: arr18[4], PUBLIC_THREAD: arr18[5], PRIVATE_THREAD: arr18[6], GUILD_FORUM: arr18[7], GUILD_MEDIA: arr18[8], GUILD_DIRECTORY: arr18[9], GUILD_VOICE: arr18[10], GUILD_STAGE_VOICE: arr18[11], GUILD_APP: arr18[12] } = ChannelTypes);
const set17 = new Set(items17);
const items18 = [, , , , , , , , , , , ];
({ GUILD_TEXT: arr19[0], GUILD_ANNOUNCEMENT: arr19[1], GUILD_STORE: arr19[2], GUILD_VOICE: arr19[3], GUILD_STAGE_VOICE: arr19[4], ANNOUNCEMENT_THREAD: arr19[5], PUBLIC_THREAD: arr19[6], PRIVATE_THREAD: arr19[7], GUILD_DIRECTORY: arr19[8], GUILD_FORUM: arr19[9], GUILD_MEDIA: arr19[10], GUILD_APP: arr19[11] } = ChannelTypes);
const set16 = new Set(items16);
const items19 = [, , , , , , , , , ];
({ GUILD_ANNOUNCEMENT: arr20[0], GUILD_CATEGORY: arr20[1], GUILD_STORE: arr20[2], GUILD_TEXT: arr20[3], GUILD_VOICE: arr20[4], GUILD_STAGE_VOICE: arr20[5], GUILD_DIRECTORY: arr20[6], GUILD_FORUM: arr20[7], GUILD_MEDIA: arr20[8], GUILD_APP: arr20[9] } = ChannelTypes);
const set18 = new Set(items18);
const items20 = [, ];
({ GUILD_TEXT: arr21[0], GUILD_ANNOUNCEMENT: arr21[1] } = ChannelTypes);
const set19 = new Set(items19);
const items21 = [, , , , ];
({ GUILD_TEXT: arr22[0], GUILD_ANNOUNCEMENT: arr22[1], GUILD_FORUM: arr22[2], GUILD_MEDIA: arr22[3], GUILD_APP: arr22[4] } = ChannelTypes);
const set20 = new Set(items20);
const items22 = [, , , , , , ];
({ GUILD_TEXT: arr23[0], GUILD_ANNOUNCEMENT: arr23[1], GUILD_FORUM: arr23[2], GUILD_MEDIA: arr23[3], GUILD_VOICE: arr23[4], GUILD_STAGE_VOICE: arr23[5], GUILD_APP: arr23[6] } = ChannelTypes);
const set21 = new Set(items21);
const items23 = [, , , , , , , , ];
({ GUILD_TEXT: arr24[0], GUILD_FORUM: arr24[1], GUILD_MEDIA: arr24[2], ANNOUNCEMENT_THREAD: arr24[3], PUBLIC_THREAD: arr24[4], PRIVATE_THREAD: arr24[5], GUILD_VOICE: arr24[6], GUILD_STAGE_VOICE: arr24[7], GUILD_APP: arr24[8] } = ChannelTypes);
const set22 = new Set(items22);
const items24 = [, , , ];
({ PUBLIC_THREAD: arr25[0], PRIVATE_THREAD: arr25[1], GUILD_VOICE: arr25[2], GUILD_STAGE_VOICE: arr25[3] } = ChannelTypes);
const set23 = new Set(items23);
const items25 = [, , ];
({ GUILD_TEXT: arr26[0], GUILD_FORUM: arr26[1], GUILD_MEDIA: arr26[2] } = ChannelTypes);
const set24 = new Set(items24);
const items26 = [, , , , ];
({ GUILD_TEXT: arr27[0], GUILD_CATEGORY: arr27[1], GUILD_FORUM: arr27[2], GUILD_ANNOUNCEMENT: arr27[3], GUILD_APP: arr27[4] } = ChannelTypes);
const set25 = new Set(items25);
const items27 = [, , , , ];
({ GUILD_TEXT: arr28[0], GUILD_ANNOUNCEMENT: arr28[1], GUILD_FORUM: arr28[2], GUILD_VOICE: arr28[3], GUILD_APP: arr28[4] } = ChannelTypes);
const set26 = new Set(items26);
const items28 = [ChannelTypes.GUILD_APP];
const set28 = new Set(items28);
const items29 = [...set28];
const set29 = new Set(items29);
const items30 = [...set28, ChannelTypes.GUILD_FORUM, ChannelTypes.GUILD_MEDIA];
const set30 = new Set(items30);
let closure_26 = BigFlagUtils.combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
let closure_27 = BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL;
class ChannelRecordProperties {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    ({ id: tmp.id, type } = global);
    if (type == null) {
      tmp2 = ChannelTypes;
      type = ChannelTypes.GUILD_TEXT;
    }
    obj.type = type;
    str = global.name;
    if (str == null) {
      str = "";
    }
    obj.name = str;
    guild_id = global.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    obj.guild_id = guild_id;
    return obj;
  }
}
let closure_28 = Object.freeze({});
class ChannelRecordBase extends ChannelRecordProperties {
}
const prototype = ChannelRecordBase.prototype;
Object.defineProperty(prototype, "permissionOverwrites", {
  get: function permissionOverwrites() {
    let permissionOverwrites_ = this.permissionOverwrites_;
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = closure_28;
    }
    return permissionOverwrites_;
  },
  set: undefined
});
Object.defineProperty(prototype, "topic", {
  get: function topic() {
    let str = this.topic_;
    if (str == null) {
      str = "";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype, "position", {
  get: function position() {
    let num = this.position_;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "bitrate", {
  get: function bitrate() {
    let bitrate_ = this.bitrate_;
    if (bitrate_ == null) {
      bitrate_ = hasOwnProperty;
    }
    return bitrate_;
  },
  set: undefined
});
Object.defineProperty(prototype, "userLimit", {
  get: function userLimit() {
    let num = this.userLimit_;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "nsfw", {
  get: function nsfw() {
    let flag = this.nsfw_;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "rateLimitPerUser", {
  get: function rateLimitPerUser() {
    let num = this.rateLimitPerUser_;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "flags", {
  get: function flags() {
    let num = this.flags_;
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
prototype["toJS"] = function toJS() {
  const merged = Object.assign(this);
  return {};
};
prototype["set"] = function set(arg0, arg1) {
  obj = { [arg0]: arg1 };
  if ("topic" in obj) {
    obj.topic_ = obj.topic;
    delete tmp[tmp2];
  }
  if ("position" in obj) {
    obj.position_ = obj.position;
    delete tmp[tmp2];
  }
  if ("permissionOverwrites" in obj) {
    obj.permissionOverwrites_ = obj.permissionOverwrites;
    delete tmp[tmp2];
  }
  if ("bitrate" in obj) {
    obj.bitrate_ = obj.bitrate;
    delete tmp[tmp2];
  }
  if ("userLimit" in obj) {
    obj.userLimit_ = obj.userLimit;
    delete tmp[tmp2];
  }
  if ("nsfw" in obj) {
    obj.nsfw_ = obj.nsfw;
    delete tmp[tmp2];
  }
  if ("rateLimitPerUser" in obj) {
    obj.rateLimitPerUser_ = obj.rateLimitPerUser;
    delete tmp[tmp2];
  }
  if ("flags" in obj) {
    obj.flags_ = obj.flags;
    delete tmp[tmp2];
  }
  return this.merge(obj);
};
prototype["merge"] = function merge(topic) {
  if ("topic" in topic) {
    topic.topic_ = topic.topic;
    delete tmp3[tmp2];
  }
  if ("position" in topic) {
    topic.position_ = topic.position;
    delete tmp3[tmp2];
  }
  if ("permissionOverwrites" in topic) {
    topic.permissionOverwrites_ = topic.permissionOverwrites;
    delete tmp3[tmp2];
  }
  if ("bitrate" in topic) {
    topic.bitrate_ = topic.bitrate;
    delete tmp3[tmp2];
  }
  if ("userLimit" in topic) {
    topic.userLimit_ = topic.userLimit;
    delete tmp3[tmp2];
  }
  if ("nsfw" in topic) {
    topic.nsfw_ = topic.nsfw;
    delete tmp3[tmp2];
  }
  if ("rateLimitPerUser" in topic) {
    topic.rateLimitPerUser_ = topic.rateLimitPerUser;
    delete tmp3[tmp2];
  }
  if ("flags" in topic) {
    topic.flags_ = topic.flags;
    delete tmp3[tmp2];
  }
  const self = this;
  let tmp4 = null;
  let tmp5 = null;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp9 = topic.hasOwnProperty(tmp8) && self[tmp8] !== topic[tmp8];
      if (!tmp9) {
        continue;
      } else {
        let toJSResult = tmp7;
        if (null == tmp7) {
          toJSResult = self.toJS();
        }
        toJSResult[tmp8] = topic[tmp8];
        tmp4 = toJSResult;
        continue;
      }
      continue;
    }
  }
  let constructor = self;
  if (null != tmp5) {
    constructor = new self.constructor(tmp5);
  }
  return constructor;
};
prototype["computeLurkerPermissionsAllowList"] = function computeLurkerPermissionsAllowList() {
  if (this.isGuildStageVoice()) {
    if (StageInstanceStore.isPublic(this.id)) {
      return StageChannelPermissions.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST;
    }
  }
};
prototype["isNSFW"] = function isNSFW() {
  return this.nsfw;
};
prototype["isManaged"] = function isManaged() {
  const APPLICATION_MANAGEABLE = constants.APPLICATION_MANAGEABLE;
  let hasItem = APPLICATION_MANAGEABLE.has(this.type);
  if (hasItem) {
    hasItem = null != this.application_id;
  }
  return hasItem;
};
prototype["isPrivate"] = function isPrivate() {
  return set9.has(this.type);
};
prototype["isGroupDM"] = function isGroupDM() {
  return this.type === ChannelTypes.GROUP_DM;
};
prototype["isMultiUserDM"] = function isMultiUserDM() {
  return set10.has(this.type);
};
prototype["isDM"] = function isDM() {
  return this.type === ChannelTypes.DM;
};
prototype["isSystemDM"] = function isSystemDM() {
  return false;
};
prototype["isArchivedThread"] = function isArchivedThread() {
  let isThreadResult = this.isThread();
  if (isThreadResult) {
    const threadMetadata = this.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    isThreadResult = true === archived;
  }
  return isThreadResult;
};
prototype["isLockedThread"] = function isLockedThread() {
  let isThreadResult = this.isThread();
  if (isThreadResult) {
    const threadMetadata = this.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    isThreadResult = true === locked;
  }
  return isThreadResult;
};
prototype["isScheduledForDeletion"] = function isScheduledForDeletion() {
  return this.hasFlag(ChannelFlags.IS_SCHEDULED_FOR_DELETION);
};
prototype["isArchivedLockedThread"] = function isArchivedLockedThread() {
  const self = this;
  let hasItem = set14.has(this.type);
  if (hasItem) {
    const threadMetadata = self.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    hasItem = true === archived;
  }
  if (hasItem) {
    const threadMetadata2 = self.threadMetadata;
    let locked;
    if (threadMetadata2 != null) {
      locked = threadMetadata2.locked;
    }
    hasItem = true === locked;
  }
  return hasItem;
};
prototype["isForumPost"] = function isForumPost() {
  const self = this;
  let hasItem = this.type === ChannelTypes.PUBLIC_THREAD;
  if (hasItem) {
    hasItem = null != self.parentChannelThreadType;
  }
  if (hasItem) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    hasItem = GUILD_THREADS_ONLY.has(self.parentChannelThreadType);
  }
  return hasItem;
};
prototype["isMediaThread"] = function isMediaThread() {
  return this.type === ChannelTypes.MEDIA_THREAD;
};
prototype["isRingable"] = function isRingable() {
  const CALLABLE = constants.CALLABLE;
  let hasItem = CALLABLE.has(this.type);
  if (!hasItem) {
    hasItem = this.type === ChannelTypes.GUILD_VOICE;
  }
  return hasItem;
};
prototype["isCategory"] = function isCategory() {
  return this.type === ChannelTypes.GUILD_CATEGORY;
};
prototype["isVocal"] = function isVocal() {
  return set12.has(this.type);
};
prototype["isGuildVocal"] = function isGuildVocal() {
  const type = this.type;
  let hasItem = "SELECTABLE" !== type;
  if (hasItem) {
    hasItem = set7.has(type);
  }
  return hasItem;
};
prototype["isGuildVocalOrThread"] = function isGuildVocalOrThread() {
  const self = this;
  return this.isGuildVocal() || self.isVocalThread();
};
prototype["isGuildVoice"] = function isGuildVoice() {
  return this.type === ChannelTypes.GUILD_VOICE;
};
prototype["isGuildVoiceOrThread"] = function isGuildVoiceOrThread() {
  const self = this;
  return this.isGuildVoice() || self.isVocalThread();
};
prototype["isGuildStageVoice"] = function isGuildStageVoice() {
  return this.type === ChannelTypes.GUILD_STAGE_VOICE;
};
prototype["isListenModeCapable"] = function isListenModeCapable() {
  return this.isGuildStageVoice();
};
prototype["isThread"] = function isThread() {
  return set14.has(this.type);
};
prototype["isAnnouncementThread"] = function isAnnouncementThread() {
  return this.type === ChannelTypes.ANNOUNCEMENT_THREAD;
};
prototype["isVocalThread"] = function isVocalThread() {
  return this.type === ChannelTypes.PUBLIC_THREAD || this.type === tmp.PRIVATE_THREAD;
};
prototype["isActiveThread"] = function isActiveThread() {
  let isThreadResult = this.isThread();
  if (isThreadResult) {
    const threadMetadata = this.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    isThreadResult = true !== archived;
  }
  return isThreadResult;
};
prototype["isDirectory"] = function isDirectory() {
  return this.type === ChannelTypes.GUILD_DIRECTORY;
};
prototype["isForumLikeChannel"] = function isForumLikeChannel() {
  const self = this;
  return this.isForumChannel() || self.isMediaChannel();
};
prototype["isForumChannel"] = function isForumChannel() {
  return this.type === ChannelTypes.GUILD_FORUM;
};
prototype["isMediaChannel"] = function isMediaChannel() {
  return this.type === ChannelTypes.GUILD_MEDIA;
};
prototype["isMediaPost"] = function isMediaPost() {
  return this.type === ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === tmp.GUILD_MEDIA;
};
prototype["isRoleSubscriptionTemplatePreviewChannel"] = function isRoleSubscriptionTemplatePreviewChannel() {
  return this.hasFlag(ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
};
prototype["isOwner"] = function isOwner(arg0) {
  return this.ownerId === arg0;
};
prototype["isObfuscated"] = function isObfuscated() {
  return this.hasFlag(ChannelFlags.OBFUSCATED);
};
prototype["getGuildId"] = function getGuildId() {
  return this.guild_id;
};
prototype["getApplicationId"] = function getApplicationId() {
  return this.application_id;
};
prototype["getDefaultSortOrder"] = function getDefaultSortOrder() {
  if (this.isGameInvitesChannel()) {
    let LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.CREATION_DATE;
  } else {
    LATEST_ACTIVITY = this.defaultSortOrder;
    if (LATEST_ACTIVITY == null) {
      LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
    }
  }
  return LATEST_ACTIVITY;
};
prototype["getDefaultLayout"] = function getDefaultLayout() {
  const self = this;
  if (!this.isMediaChannel()) {
    if (!self.isGameInvitesChannel()) {
      if (null != self.defaultForumLayout) {
        if (self.defaultForumLayout !== ForumLayout.ForumLayout.DEFAULT) {
          let GRID = self.defaultForumLayout;
        }
      }
      GRID = ForumLayout.ForumLayout.LIST;
    }
    return GRID;
  }
  GRID = ForumLayout.ForumLayout.GRID;
};
prototype["getDefaultTagSetting"] = function getDefaultTagSetting() {
  let MATCH_SOME = this.defaultTagSetting;
  if (MATCH_SOME == null) {
    MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
  }
  return MATCH_SOME;
};
prototype["isModeratorReportChannel"] = function isModeratorReportChannel() {
  return this.hasFlag(ChannelFlags.IS_MODERATOR_REPORT_CHANNEL);
};
prototype["isSpoilerChannel"] = function isSpoilerChannel() {
  return this.hasFlag(ChannelFlags.IS_SPOILER_CHANNEL);
};
prototype["isGameInvitesChannel"] = function isGameInvitesChannel() {
  return this.hasFlag(ChannelFlags.IS_GAME_INVITES_CHANNEL);
};
Object.defineProperty(prototype, "accessPermissions", {
  get: function accessPermissions() {
    const type = this.type;
    let hasItem = "SELECTABLE" !== type;
    if (hasItem) {
      hasItem = set7.has(type);
    }
    if (hasItem) {
      let VIEW_CHANNEL = closure_26;
    } else {
      VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
    }
    return VIEW_CHANNEL;
  },
  set: undefined
});
prototype["hasFlag"] = function hasFlag(arg0) {
  return FlagUtils.hasFlag(this.flags, arg0);
};
Object.defineProperty(prototype, "isHDStreamSplashed", {
  get: function isHDStreamSplashed() {
    let tmp2 = null != this.hdStreamingUntil;
    if (tmp2) {
      const _Date = Date;
      const date = new Date(tmp.hdStreamingUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp2 = date > date1;
    }
    return tmp2;
  },
  set: undefined
});
let UnknownChannelRecord;
class UnknownChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    tmp = new UnknownChannelRecord(global, new.target);
    ({ application_id: tmp.application_id, appliedTags: tmp.appliedTags, availableTags: tmp.availableTags, bitrate_: tmp.bitrate_, defaultAutoArchiveDuration: tmp.defaultAutoArchiveDuration, defaultForumLayout: tmp.defaultForumLayout, defaultReactionEmoji: tmp.defaultReactionEmoji, defaultSortOrder: tmp.defaultSortOrder, defaultTagSetting: tmp.defaultTagSetting, defaultThreadRateLimitPerUser: tmp.defaultThreadRateLimitPerUser, flags_: tmp.flags_, gameId: tmp.gameId, icon: tmp.icon, iconEmoji: tmp.iconEmoji, isMessageRequest: tmp.isMessageRequest, isMessageRequestTimestamp: tmp.isMessageRequestTimestamp, isSpam: tmp.isSpam, lastMessageId: tmp.lastMessageId, lastNonMessageActivityTimestamp: tmp.lastNonMessageActivityTimestamp, lastPinTimestamp: tmp.lastPinTimestamp, member: tmp.member, memberCount: tmp.memberCount, memberIdsPreview: tmp.memberIdsPreview, memberListId: tmp.memberListId, messageCount: tmp.messageCount, nicks: tmp.nicks, nsfw_: tmp.nsfw_, originChannelId: tmp.originChannelId, ownerId: tmp.ownerId, parent_id: tmp.parent_id, parentChannelThreadType: tmp.parentChannelThreadType, permissionOverwrites_: tmp.permissionOverwrites_, position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, rawRecipients: tmp.rawRecipients, recipients: tmp.recipients, recipientFlags: tmp.recipientFlags, rtcRegion: tmp.rtcRegion, safetyWarnings: tmp.safetyWarnings, blockedUserWarningDismissed: tmp.blockedUserWarningDismissed, template: tmp.template, themeColor: tmp.themeColor, threadMetadata: tmp.threadMetadata, topic_: tmp.topic_, userLimit_: tmp.userLimit_, version: tmp.version, videoQualityMode: tmp.videoQualityMode, linkedLobby: tmp.linkedLobby, hdStreamingUntil: tmp.hdStreamingUntil, hdStreamingBuyerId: tmp.hdStreamingBuyerId, voiceHangout: tmp.voiceHangout } = global);
    return tmp;
  }
}
UnknownChannelRecord["fromServer"] = function fromServer(application_id, arg1) {
  obj = { application_id: application_id.application_id, appliedTags: application_id.applied_tags, availableTags: null, bitrate_: null, defaultAutoArchiveDuration: null, defaultForumLayout: null, defaultReactionEmoji: null, defaultSortOrder: null, defaultTagSetting: null, defaultThreadRateLimitPerUser: null, flags_: null, gameId: null, guild_id: null, icon: null, iconEmoji: null, id: null, isMessageRequest: null, isMessageRequestTimestamp: null, isSpam: null, lastMessageId: null, lastNonMessageActivityTimestamp: null, lastPinTimestamp: null, member: null, memberCount: null, memberIdsPreview: null, memberListId: null, messageCount: null, name: null, nicks: null, nsfw_: null, originChannelId: null, ownerId: null, parent_id: null, parentChannelThreadType: "fill", permissionOverwrites_: true, position_: true, rateLimitPerUser_: true, rawRecipients: true, recipients: true, recipientFlags: true, rtcRegion: "D", safetyWarnings: "DD", blockedUserWarningDismissed: null, template: null, themeColor: null, threadMetadata: null, topic_: null, totalMessageSent: null, type: null, userLimit_: null, version: null, videoQualityMode: null, linkedLobby: null, hdStreamingUntil: null, hdStreamingBuyerId: null, voiceHangout: null };
  if (null == application_id.available_tags) {
    obj.availableTags = undefined;
    ({ bitrate: obj.bitrate_, default_auto_archive_duration: obj.defaultAutoArchiveDuration, default_forum_layout: obj.defaultForumLayout } = application_id);
    let tmp2;
    if (null != application_id.default_reaction_emoji) {
      let emoji_id;
      if (0 !== application_id.default_reaction_emoji.emoji_id) {
        emoji_id = application_id.default_reaction_emoji.emoji_id;
      }
      obj = { emojiId: emoji_id, emojiName: application_id.default_reaction_emoji.emoji_name };
      tmp2 = obj;
    }
    let guild_id = arg1;
    obj.defaultReactionEmoji = tmp2;
    ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_, game_id: obj.gameId } = application_id);
    if (arg1 == null) {
      guild_id = application_id.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj.guild_id = guild_id;
    ({ icon: obj.icon, icon_emoji } = application_id);
    let tmp5;
    if (null != icon_emoji) {
      obj = { id: null, name: null };
      ({ id: obj3.id, name: obj3.name } = icon_emoji);
      tmp5 = obj;
    }
    obj.iconEmoji = tmp5;
    ({ id: obj.id, is_message_request: obj.isMessageRequest, is_message_request_timestamp: obj.isMessageRequestTimestamp, is_spam: obj.isSpam, last_message_id: obj.lastMessageId, last_non_message_activity_timestamp: obj.lastNonMessageActivityTimestamp, last_pin_timestamp: obj.lastPinTimestamp } = application_id);
    let tmp6;
    if (null != application_id.member) {
      const obj1 = { flags: application_id.member.flags, muted: application_id.member.muted, muteConfig: application_id.member.mute_config, joinTimestamp: application_id.member.join_timestamp };
      tmp6 = obj1;
    }
    obj.member = tmp6;
    ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, member_list_id: obj.memberListId, message_count: obj.messageCount, name } = application_id);
    if (name == null) {
      name = "";
    }
    obj.name = name;
    const nicks = application_id.nicks;
    if (null == nicks) {
      let obj2 = {};
    } else {
      obj2 = _modDef12.reduce(nicks, (arg0, id) => {
        arg0[id.id] = id.nick;
        return arg0;
      }, {});
    }
    obj.nicks = obj2;
    ({ nsfw: obj.nsfw_, origin_channel_id: obj.originChannelId, owner_id: obj.ownerId, parent_id: obj.parent_id, permission_overwrites } = application_id);
    const obj3 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        obj = { id: id.id, type: id.type, allow: null, deny: null };
        const deserializer = BigFlagUtils;
        obj.allow = deserializer.deserialize(id.allow);
        const deserializer2 = BigFlagUtils;
        obj.deny = deserializer2.deserialize(id.deny);
        obj1[id.id] = obj;
      });
    }
    obj.permissionOverwrites_ = obj3;
    ({ position: obj.position_, rate_limit_per_user: obj.rateLimitPerUser_ } = application_id);
    obj.rawRecipients = null != application_id.recipients ? application_id.recipients : [];
    if (null != application_id.recipients) {
      const recipients = application_id.recipients;
      let mapped = recipients.map((id) => id.id);
    } else {
      mapped = [];
    }
    obj.recipients = mapped;
    ({ recipient_flags: obj.recipientFlags, rtc_region: obj.rtcRegion, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed, template: obj.template, theme_color: obj.themeColor } = application_id);
    let tmp10;
    if (null != application_id.thread_metadata) {
      const obj4 = { archived: application_id.thread_metadata.archived, autoArchiveDuration: application_id.thread_metadata.auto_archive_duration, archiveTimestamp: application_id.thread_metadata.archive_timestamp, createTimestamp: application_id.thread_metadata.create_timestamp, locked: application_id.thread_metadata.locked, invitable: null };
      let flag = application_id.thread_metadata.invitable;
      if (flag == null) {
        flag = true;
      }
      obj4.invitable = flag;
      tmp10 = obj4;
    }
    obj.threadMetadata = tmp10;
    ({ topic: obj.topic_, total_message_sent: obj.totalMessageSent } = application_id);
    if (null != application_id.type) {
      let UNKNOWN = application_id.type;
    } else {
      UNKNOWN = ChannelTypes.UNKNOWN;
    }
    obj.type = UNKNOWN;
    ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
    return obj3(1969).dangerouslyCast(obj, UnknownChannelRecord);
  } else {
    const available_tags = application_id.available_tags;
    if (null == available_tags) {
      let items = [];
    } else {
      items = available_tags.map((id) => {
        obj = { id: id.id, name: id.name, emojiId: null, emojiName: null, moderated: null, color: null };
        let emoji_id;
        if (0 !== id.emoji_id) {
          emoji_id = id.emoji_id;
        }
        obj.emojiId = emoji_id;
        ({ emoji_name: obj.emojiName, moderated: obj.moderated, color: obj.color } = id);
        return obj;
      });
    }
  }
};
class GuildVocalChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    tmp = new GuildVocalChannelRecord(global, new.target, new.target);
    ({ application_id: tmp.application_id, bitrate_: tmp.bitrate_, flags_: tmp.flags_, iconEmoji: tmp.iconEmoji, lastMessageId: tmp.lastMessageId, lastPinTimestamp: tmp.lastPinTimestamp, memberListId: tmp.memberListId, nsfw_: tmp.nsfw_, originChannelId: tmp.originChannelId, parent_id: tmp.parent_id, permissionOverwrites_ } = global);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, rtcRegion: tmp.rtcRegion, themeColor: tmp.themeColor, topic_: tmp.topic_, userLimit_: tmp.userLimit_, version: tmp.version, videoQualityMode: tmp.videoQualityMode, hdStreamingUntil: tmp.hdStreamingUntil, hdStreamingBuyerId: tmp.hdStreamingBuyerId, voiceHangout: tmp.voiceHangout } = global);
    return tmp;
  }
}
GuildVocalChannelRecord["fromServer"] = function fromServer(application_id, arg1) {
  let guild_id = arg1;
  let permissionOverwrites_ = { application_id: application_id.application_id, bitrate_: application_id.bitrate, flags_: application_id.flags, guild_id: null, iconEmoji: null, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name: null, nsfw_: null, originChannelId: null, parent_id: null, permissionOverwrites_: null, position_: null, rateLimitPerUser_: null, rtcRegion: null, themeColor: null, topic_: null, type: null, userLimit_: null, version: null, videoQualityMode: null, hdStreamingUntil: null, hdStreamingBuyerId: null, voiceHangout: null };
  if (arg1 == null) {
    guild_id = application_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  permissionOverwrites_.guild_id = guild_id;
  const icon_emoji = application_id.icon_emoji;
  let tmp2;
  if (null != icon_emoji) {
    permissionOverwrites_ = { id: null, name: null };
    ({ id: obj2.id, name: obj2.name } = icon_emoji);
    tmp2 = permissionOverwrites_;
  }
  permissionOverwrites_.iconEmoji = tmp2;
  ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
  if (name == null) {
    name = "";
  }
  permissionOverwrites_.name = name;
  let flag = application_id.nsfw;
  if (flag == null) {
    flag = false;
  }
  permissionOverwrites_.nsfw_ = flag;
  ({ origin_channel_id: obj.originChannelId, parent_id: obj.parent_id, permission_overwrites } = application_id);
  permissionOverwrites_ = {};
  if (permission_overwrites != null) {
    const item = permission_overwrites.forEach((id) => {
      obj = { id: id.id, type: id.type, allow: null, deny: null };
      const deserializer = BigFlagUtils;
      obj.allow = deserializer.deserialize(id.allow);
      const deserializer2 = BigFlagUtils;
      obj.deny = deserializer2.deserialize(id.deny);
      obj1[id.id] = obj;
    });
  }
  permissionOverwrites_.permissionOverwrites_ = permissionOverwrites_;
  ({ position: obj.position_, rate_limit_per_user } = application_id);
  if (rate_limit_per_user == null) {
    rate_limit_per_user = 0;
  }
  permissionOverwrites_.rateLimitPerUser_ = rate_limit_per_user;
  ({ rtc_region: obj.rtcRegion, theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
  if (null != application_id.type) {
    let GUILD_VOICE = application_id.type;
  } else {
    GUILD_VOICE = ChannelTypes.GUILD_VOICE;
  }
  permissionOverwrites_.type = GUILD_VOICE;
  ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
  let GUILD_TEXT = permissionOverwrites_.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp7 = dependencyMap[GUILD_TEXT];
  if (tmp7 == null) {
    tmp7 = UnknownChannelRecord;
  }
  return permissionOverwrites_(1969).dangerouslyCast(permissionOverwrites_, tmp7);
};
class GuildTextualChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    tmp = new GuildTextualChannelRecord(global, new.target, new.target);
    ({ application_id: tmp.application_id, defaultAutoArchiveDuration: tmp.defaultAutoArchiveDuration, defaultThreadRateLimitPerUser: tmp.defaultThreadRateLimitPerUser, flags_: tmp.flags_, iconEmoji: tmp.iconEmoji, lastMessageId: tmp.lastMessageId, lastPinTimestamp: tmp.lastPinTimestamp, memberListId: tmp.memberListId, nsfw_: tmp.nsfw_, parent_id: tmp.parent_id, permissionOverwrites_ } = global);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, themeColor: tmp.themeColor, topic_: tmp.topic_, version: tmp.version, linkedLobby: tmp.linkedLobby, hdStreamingBuyerId: tmp.hdStreamingBuyerId, hdStreamingUntil: tmp.hdStreamingUntil } = global);
    return tmp;
  }
}
GuildTextualChannelRecord["fromServer"] = function fromServer(application_id, arg1) {
  let guild_id = arg1;
  let permissionOverwrites_ = { application_id: application_id.application_id, defaultAutoArchiveDuration: application_id.default_auto_archive_duration, defaultThreadRateLimitPerUser: application_id.default_thread_rate_limit_per_user, flags_: application_id.flags, guild_id: null, iconEmoji: null, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name: null, nsfw_: null, parent_id: null, permissionOverwrites_: null, position_: null, rateLimitPerUser_: null, themeColor: null, topic_: null, type: null, linkedLobby: null, hdStreamingUntil: null, hdStreamingBuyerId: null, version: null };
  if (arg1 == null) {
    guild_id = application_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  permissionOverwrites_.guild_id = guild_id;
  const icon_emoji = application_id.icon_emoji;
  let tmp2;
  if (null != icon_emoji) {
    permissionOverwrites_ = { id: null, name: null };
    ({ id: obj2.id, name: obj2.name } = icon_emoji);
    tmp2 = permissionOverwrites_;
  }
  permissionOverwrites_.iconEmoji = tmp2;
  ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
  if (name == null) {
    name = "";
  }
  permissionOverwrites_.name = name;
  let flag = application_id.nsfw;
  if (flag == null) {
    flag = false;
  }
  permissionOverwrites_.nsfw_ = flag;
  ({ parent_id: obj.parent_id, permission_overwrites } = application_id);
  permissionOverwrites_ = {};
  if (permission_overwrites != null) {
    const item = permission_overwrites.forEach((id) => {
      obj = { id: id.id, type: id.type, allow: null, deny: null };
      const deserializer = BigFlagUtils;
      obj.allow = deserializer.deserialize(id.allow);
      const deserializer2 = BigFlagUtils;
      obj.deny = deserializer2.deserialize(id.deny);
      obj1[id.id] = obj;
    });
  }
  permissionOverwrites_.permissionOverwrites_ = permissionOverwrites_;
  ({ position: obj.position_, rate_limit_per_user } = application_id);
  if (rate_limit_per_user == null) {
    rate_limit_per_user = 0;
  }
  permissionOverwrites_.rateLimitPerUser_ = rate_limit_per_user;
  ({ theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
  if (null != application_id.type) {
    let GUILD_TEXT = application_id.type;
  } else {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  permissionOverwrites_.type = GUILD_TEXT;
  ({ linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, version: obj.version } = application_id);
  let GUILD_TEXT2 = permissionOverwrites_.type;
  if (GUILD_TEXT2 == null) {
    GUILD_TEXT2 = ChannelTypes.GUILD_TEXT;
  }
  let tmp7 = dependencyMap[GUILD_TEXT2];
  if (tmp7 == null) {
    tmp7 = UnknownChannelRecord;
  }
  return permissionOverwrites_(1969).dangerouslyCast(permissionOverwrites_, tmp7);
};
class GuildAnnouncementChannelRecord extends GuildTextualChannelRecord {
}
class GuildCategoryChannelRecord extends GuildTextualChannelRecord {
}
class GuildDirectoryChannelRecord extends GuildTextualChannelRecord {
}
class GuildStageVoiceChannelRecord extends GuildVocalChannelRecord {
}
class GuildStoreChannelRecord extends GuildTextualChannelRecord {
}
class GuildTextChannelRecord extends GuildTextualChannelRecord {
}
class GuildSpaceChannelRecord extends GuildTextualChannelRecord {
}
class GuildVoiceChannelRecord extends GuildVocalChannelRecord {
}
class GuildAppChannelRecord extends GuildTextualChannelRecord {
}
let ForumChannelRecord;
class ForumChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    tmp2 = new ForumChannelRecord(global, tmp);
    availableTags = global.availableTags;
    if (availableTags == null) {
      availableTags = [];
    }
    tmp2.availableTags = availableTags;
    ({ defaultAutoArchiveDuration: tmp2.defaultAutoArchiveDuration, defaultForumLayout: tmp2.defaultForumLayout, defaultReactionEmoji: tmp2.defaultReactionEmoji, defaultSortOrder: tmp2.defaultSortOrder, defaultTagSetting: tmp2.defaultTagSetting, defaultThreadRateLimitPerUser: tmp2.defaultThreadRateLimitPerUser, flags_: tmp2.flags_, gameId: tmp2.gameId, iconEmoji: tmp2.iconEmoji, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, memberListId: tmp2.memberListId, nsfw_: tmp2.nsfw_, parent_id: tmp2.parent_id, permissionOverwrites_ } = global);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp2.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, template: tmp2.template, themeColor: tmp2.themeColor, topic_: tmp2.topic_, version: tmp2.version } = global);
    return tmp2;
  }
}
ForumChannelRecord["fromServer"] = function fromServer(available_tags, arg1) {
  if (null != available_tags.available_tags) {
    available_tags = available_tags.available_tags;
    if (null == available_tags) {
      let items = [];
    } else {
      items = available_tags.map((id) => {
        obj = { id: id.id, name: id.name, emojiId: null, emojiName: null, moderated: null, color: null };
        let emoji_id;
        if (0 !== id.emoji_id) {
          emoji_id = id.emoji_id;
        }
        obj.emojiId = emoji_id;
        ({ emoji_name: obj.emojiName, moderated: obj.moderated, color: obj.color } = id);
        return obj;
      });
    }
  } else {
    obj = { availableTags: [], defaultAutoArchiveDuration: null, defaultForumLayout: null, defaultReactionEmoji: null, defaultSortOrder: null, defaultTagSetting: null, defaultThreadRateLimitPerUser: null, flags_: null, gameId: null, guild_id: null, iconEmoji: null, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name: null, nsfw_: null, parent_id: null, permissionOverwrites_: null, position_: null, rateLimitPerUser_: null, template: null, themeColor: null, topic_: null, type: null, version: null };
    ({ default_auto_archive_duration: obj.defaultAutoArchiveDuration, default_forum_layout: obj.defaultForumLayout } = available_tags);
    let tmp2;
    if (null != available_tags.default_reaction_emoji) {
      let emoji_id;
      if (0 !== available_tags.default_reaction_emoji.emoji_id) {
        emoji_id = available_tags.default_reaction_emoji.emoji_id;
      }
      obj = { emojiId: emoji_id, emojiName: available_tags.default_reaction_emoji.emoji_name };
      tmp2 = obj;
    }
    let guild_id = arg1;
    obj.defaultReactionEmoji = tmp2;
    ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_, game_id: obj.gameId } = available_tags);
    if (arg1 == null) {
      guild_id = available_tags.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj.guild_id = guild_id;
    const icon_emoji = available_tags.icon_emoji;
    let tmp5;
    if (null != icon_emoji) {
      obj = { id: null, name: null };
      ({ id: obj3.id, name: obj3.name } = icon_emoji);
      tmp5 = obj;
    }
    obj.iconEmoji = tmp5;
    ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = available_tags);
    if (name == null) {
      name = "";
    }
    obj.name = name;
    let flag = available_tags.nsfw;
    if (flag == null) {
      flag = false;
    }
    obj.nsfw_ = flag;
    ({ parent_id: obj.parent_id, permission_overwrites } = available_tags);
    const obj1 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        obj = { id: id.id, type: id.type, allow: null, deny: null };
        const deserializer = BigFlagUtils;
        obj.allow = deserializer.deserialize(id.allow);
        const deserializer2 = BigFlagUtils;
        obj.deny = deserializer2.deserialize(id.deny);
        obj1[id.id] = obj;
      });
    }
    obj.permissionOverwrites_ = obj1;
    ({ position: obj.position_, rate_limit_per_user } = available_tags);
    if (rate_limit_per_user == null) {
      rate_limit_per_user = 0;
    }
    obj.rateLimitPerUser_ = rate_limit_per_user;
    ({ template: obj.template, theme_color: obj.themeColor, topic: obj.topic_ } = available_tags);
    if (null != available_tags.type) {
      let GUILD_TEXT = available_tags.type;
    } else {
      GUILD_TEXT = ChannelTypes.GUILD_TEXT;
    }
    obj.type = GUILD_TEXT;
    obj.version = available_tags.version;
    return obj1(1969).dangerouslyCast(obj, ForumChannelRecord);
  }
};
class IdAsNumberCache {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 100;
    }
    obj = Object.create(new.target.prototype);
    tmp2 = new closure_1(closure_3[12])(num);
    obj.cache = tmp2;
    return obj;
  }
}
IdAsNumberCache.prototype["getOrCompute"] = function getOrCompute(id) {
  const cache = this.cache;
  value = cache.get(id);
  if (null != value) {
    return value;
  } else {
    const _parseInt = parseInt;
    const parsed = parseInt(id, 10);
    const cache2 = this.cache;
    const result = cache2.set(id, parsed);
    return parsed;
  }
};
let obj = Object.create(IdAsNumberCache.prototype);
const set27 = new Set(items27);
obj.cache = new privDefault(100);
obj = Object.create(IdAsNumberCache.prototype);
const tmp35 = new privDefault(100);
obj.cache = new privDefault(100);
let PrivateChannelRecord;
class PrivateChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    tmp5 = new PrivateChannelRecord(global, tmp4, tmp3, tmp2, tmp, new.target);
    ({ application_id: tmp5.application_id, flags_: tmp5.flags_, icon: tmp5.icon, isMessageRequest: tmp5.isMessageRequest, isMessageRequestTimestamp: tmp5.isMessageRequestTimestamp, isSpam: tmp5.isSpam, lastMessageId: tmp5.lastMessageId, lastPinTimestamp: tmp5.lastPinTimestamp, nicks: tmp5.nicks, ownerId: tmp5.ownerId } = global);
    tmp5.rawRecipients = PrivateChannelRecord.sortRecipients(global.rawRecipients, tmp5.id);
    recipients = global.recipients;
    if (recipients == null) {
      recipients = [];
    }
    items = [...recipients];
    tmp5.recipients = items.sort(closure_1(closure_3[13]).compare);
    ({ recipientFlags: tmp5.recipientFlags, safetyWarnings } = global);
    if (safetyWarnings == null) {
      safetyWarnings = [];
    }
    tmp5.safetyWarnings = safetyWarnings;
    tmp5.blockedUserWarningDismissed = global.blockedUserWarningDismissed;
    return tmp5;
  }
}
const prototype2 = PrivateChannelRecord.prototype;
PrivateChannelRecord["sortRecipients"] = function sortRecipients(rawRecipients, id) {
  let items = rawRecipients;
  let orCompute = obj.getOrCompute(id);
  if (rawRecipients == null) {
    items = [];
  }
  const items1 = [...items];
  return items1.sort((id, id2) => {
    const orCompute = obj.getOrCompute(id.id);
    return (orCompute ^ closure_0) - (obj.getOrCompute(id2.id) ^ closure_0);
  });
};
PrivateChannelRecord["fromServer"] = function fromServer(application_id) {
  const sortRecipientsResult = PrivateChannelRecord.sortRecipients(application_id.recipients, application_id.id);
  let reduced = { application_id: application_id.application_id, flags_: application_id.flags, guild_id: null, icon: application_id.icon, id: application_id.id, isMessageRequest: application_id.is_message_request, isMessageRequestTimestamp: application_id.is_message_request_timestamp, isSpam: null, lastMessageId: null, lastPinTimestamp: null, name: null, nicks: null, ownerId: null, rawRecipients: null, recipients: null, recipientFlags: null, safetyWarnings: null, blockedUserWarningDismissed: null, type: null };
  let flag = application_id.is_spam;
  if (flag == null) {
    flag = false;
  }
  reduced.isSpam = flag;
  ({ last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, name } = application_id);
  if (name == null) {
    name = "";
  }
  reduced.name = name;
  const nicks = application_id.nicks;
  if (null == nicks) {
    reduced = {};
  } else {
    reduced = _modDef12.reduce(nicks, (arg0, id) => {
      arg0[id.id] = id.nick;
      return arg0;
    }, {});
  }
  reduced.nicks = reduced;
  reduced.ownerId = application_id.owner_id;
  reduced.rawRecipients = sortRecipientsResult;
  reduced.recipients = sortRecipientsResult.map((id) => id.id);
  ({ recipient_flags: obj.recipientFlags, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed } = application_id);
  if (null != application_id.type) {
    let DM = application_id.type;
  } else {
    DM = ChannelTypes.DM;
  }
  reduced.type = DM;
  return TypeUtils.dangerouslyCast(reduced, PrivateChannelRecord);
};
prototype2["isSystemDM"] = function isSystemDM() {
  const first = this.rawRecipients[0];
  let tmp2 = this.type === ChannelTypes.DM;
  if (tmp2) {
    tmp2 = null != first;
  }
  if (tmp2) {
    tmp2 = true === first.system;
  }
  return tmp2;
};
prototype2["getRecipientId"] = function getRecipientId() {
  return this.recipients[0];
};
prototype2["addRecipient"] = function addRecipient(arg0, arg1, arg2) {
  const self = this;
  if (arg0 !== arg2) {
    obj = _modDef12;
    let recipients = self.recipients;
    if (recipients == null) {
      recipients = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(recipients, 0)] = arg0;
    const result = self.set("recipients", obj.uniq(items).sort(SnowflakeUtilsDefault.compare));
    let result1 = result;
    if (null != arg1) {
      obj = {};
      const merged = Object.assign(result.nicks);
      obj[arg0] = arg1;
      result1 = result.set("nicks", obj);
    }
    return result1;
  } else {
    return self;
  }
};
prototype2["removeRecipient"] = function removeRecipient(id2) {
  return this.set("recipients", _modDef12.without(this.recipients, id2));
};
class DMChannelRecord extends PrivateChannelRecord {
}
class GroupDMChannelRecord extends PrivateChannelRecord {
}
const prototype3 = function ThreadChannelRecord(appliedTags) {
  const tmp2 = new prototype3(appliedTags, tmp);
  appliedTags = appliedTags.appliedTags;
  if (appliedTags == null) {
    appliedTags = [];
  }
  tmp2.appliedTags = appliedTags;
  ({ bitrate_: tmp2.bitrate_, flags_: tmp2.flags_, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, member: tmp2.member, memberCount: tmp2.memberCount, memberIdsPreview: tmp2.memberIdsPreview, messageCount: tmp2.messageCount, nsfw_: tmp2.nsfw_, ownerId: tmp2.ownerId, parent_id: tmp2.parent_id, parentChannelThreadType: tmp2.parentChannelThreadType, rateLimitPerUser_: tmp2.rateLimitPerUser_, rtcRegion: tmp2.rtcRegion, threadMetadata: tmp2.threadMetadata, userLimit_: tmp2.userLimit_, videoQualityMode: tmp2.videoQualityMode, lastNonMessageActivityTimestamp: tmp2.lastNonMessageActivityTimestamp } = appliedTags);
  return tmp2;
}.prototype;
class prototype3 extends ChannelRecordBase {
}
prototype3["fromServer"] = function fromServer(applied_tags, arg1) {
  applied_tags = applied_tags.applied_tags;
  if (applied_tags == null) {
    applied_tags = [];
  }
  let guild_id = arg1;
  obj = { appliedTags: applied_tags, bitrate_: applied_tags.bitrate, flags_: applied_tags.flags, guild_id: null, id: null, lastMessageId: null, lastPinTimestamp: null, member: null, memberCount: null, memberIdsPreview: null, messageCount: null, name: null, nsfw_: null, ownerId: null, parent_id: null, parentChannelThreadType: null, rateLimitPerUser_: null, rtcRegion: null, threadMetadata: null, totalMessageSent: null, type: null, userLimit_: null, videoQualityMode: null, lastNonMessageActivityTimestamp: null };
  if (arg1 == null) {
    guild_id = applied_tags.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  obj.guild_id = guild_id;
  ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp } = applied_tags);
  let tmp2;
  if (null != applied_tags.member) {
    obj = { flags: applied_tags.member.flags, muted: applied_tags.member.muted, muteConfig: applied_tags.member.mute_config, joinTimestamp: applied_tags.member.join_timestamp };
    tmp2 = obj;
  }
  obj.member = tmp2;
  ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, message_count: obj.messageCount, name } = applied_tags);
  if (name == null) {
    name = "";
  }
  obj.name = name;
  let flag = applied_tags.nsfw;
  if (flag == null) {
    flag = false;
  }
  obj.nsfw_ = flag;
  ({ owner_id: obj.ownerId, parent_id: obj.parent_id, parentChannelThreadType: obj.parentChannelThreadType, rate_limit_per_user: obj.rateLimitPerUser_, rtc_region: obj.rtcRegion } = applied_tags);
  let tmp3;
  if (null != applied_tags.thread_metadata) {
    obj = { archived: applied_tags.thread_metadata.archived, autoArchiveDuration: applied_tags.thread_metadata.auto_archive_duration, archiveTimestamp: applied_tags.thread_metadata.archive_timestamp, createTimestamp: applied_tags.thread_metadata.create_timestamp, locked: applied_tags.thread_metadata.locked, invitable: null };
    let flag2 = applied_tags.thread_metadata.invitable;
    if (flag2 == null) {
      flag2 = true;
    }
    obj.invitable = flag2;
    tmp3 = obj;
  }
  obj.threadMetadata = tmp3;
  obj.totalMessageSent = applied_tags.total_message_sent;
  if (null != applied_tags.type) {
    let PUBLIC_THREAD = applied_tags.type;
  } else {
    PUBLIC_THREAD = ChannelTypes.PUBLIC_THREAD;
  }
  obj.type = PUBLIC_THREAD;
  ({ user_limit: obj.userLimit_, video_quality_mode: obj.videoQualityMode, last_non_message_activity_timestamp: obj.lastNonMessageActivityTimestamp } = applied_tags);
  return TypeUtils.dangerouslyCast(obj, prototype3);
};
let closure_32 = { [ChannelTypes.DM]: PrivateChannelRecord.fromServer, [ChannelTypes.GROUP_DM]: PrivateChannelRecord.fromServer, [ChannelTypes.GUILD_TEXT]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_VOICE]: GuildVocalChannelRecord.fromServer, [ChannelTypes.GUILD_STAGE_VOICE]: GuildVocalChannelRecord.fromServer, [ChannelTypes.GUILD_CATEGORY]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_ANNOUNCEMENT]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_STORE]: GuildTextualChannelRecord.fromServer, [ChannelTypes.ANNOUNCEMENT_THREAD]: prototype3.fromServer, [ChannelTypes.PUBLIC_THREAD]: prototype3.fromServer, [ChannelTypes.PRIVATE_THREAD]: prototype3.fromServer, [ChannelTypes.MEDIA_THREAD]: prototype3.fromServer, [ChannelTypes.GUILD_DIRECTORY]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_FORUM]: ForumChannelRecord.fromServer, [ChannelTypes.GUILD_MEDIA]: ForumChannelRecord.fromServer, [ChannelTypes.GUILD_SPACE]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_APP]: GuildTextualChannelRecord.fromServer };
const dependencyMap = { [ChannelTypes.DM]: DMChannelRecord, [ChannelTypes.GROUP_DM]: GroupDMChannelRecord, [ChannelTypes.GUILD_TEXT]: GuildTextChannelRecord, [ChannelTypes.GUILD_VOICE]: GuildVoiceChannelRecord, [ChannelTypes.GUILD_STAGE_VOICE]: GuildStageVoiceChannelRecord, [ChannelTypes.GUILD_CATEGORY]: GuildCategoryChannelRecord, [ChannelTypes.GUILD_ANNOUNCEMENT]: GuildAnnouncementChannelRecord, [ChannelTypes.GUILD_STORE]: GuildStoreChannelRecord, [ChannelTypes.ANNOUNCEMENT_THREAD]: prototype3, [ChannelTypes.PUBLIC_THREAD]: prototype3, [ChannelTypes.PRIVATE_THREAD]: prototype3, [ChannelTypes.MEDIA_THREAD]: prototype3, [ChannelTypes.GUILD_DIRECTORY]: GuildDirectoryChannelRecord, [ChannelTypes.GUILD_FORUM]: ForumChannelRecord, [ChannelTypes.GUILD_MEDIA]: ForumChannelRecord, [ChannelTypes.GUILD_SPACE]: GuildSpaceChannelRecord, [ChannelTypes.GUILD_APP]: GuildAppChannelRecord };
const size = fn(2);
let result = size.fileFinishedImporting("records/ChannelRecord.tsx");

export const isGuildSelectableChannelType = function isGuildSelectableChannelType(arg0) {
  return set.has(arg0);
};
export const ALL_CHANNEL_TYPES = set1;
export const isGuildTextChannelType = function isGuildTextChannelType(type) {
  return set2.has(type);
};
export const GUILD_WEBHOOK_CHANNEL_TYPES = set3;
export const GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES = set4;
export const GUILD_CHANNEL_TYPES = set5;
export const isGuildChannelType = function isGuildChannelType(arg0) {
  return set5.has(arg0);
};
export const GUILD_CAN_CONTAIN_THREADS_CHANNEL_TYPES = set6;
export const GUILD_VOCAL_CHANNEL_TYPES = set7;
export const isGuildVocalChannelType = function isGuildVocalChannelType(type) {
  let hasItem = "SELECTABLE" !== type;
  if (hasItem) {
    hasItem = set7.has(type);
  }
  return hasItem;
};
export const isGuildVocalChannelOrVocalThreadType = function isGuildVocalChannelOrVocalThreadType(arg0) {
  let hasItem = "SELECTABLE" !== arg0;
  if (hasItem) {
    hasItem = set7.has(arg0);
  }
  if (!hasItem) {
    hasItem = set15.has(arg0);
  }
  return hasItem;
};
export const SILENT_JOIN_LEAVE_CHANNEL_TYPES = set8;
export const isPrivate = function isPrivate(arg0) {
  return set9.has(arg0);
};
export const isMultiUserDM = function isMultiUserDM(arg0) {
  return set10.has(arg0);
};
export const TEXT_CHANNEL_TYPES = set11;
export const isTextChannel = function isTextChannel(type) {
  return set11.has(type);
};
export const isVoiceChannel = function isVoiceChannel(arg0) {
  return set12.has(arg0);
};
export const isGuildReadableType = function isGuildReadableType(type) {
  return set13.has(type);
};
export const THREAD_CHANNEL_TYPES = set14;
export const VOCAL_THREAD_CHANNEL_TYPES = set15;
export const THREADED_CHANNEL_TYPES = set16;
export const isThread = function isThread(arg0) {
  return set14.has(arg0);
};
export const isVocalThreadType = function isVocalThreadType(arg0) {
  return set15.has(arg0);
};
export const isReadableType = function isReadableType(type) {
  return set17.has(type);
};
export const GUILD_NON_CATEGORY_CHANNEL_TYPES = set18;
export const EDITABLE_CHANNEL_TYPES = set19;
export const TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES = set20;
export const TOPIC_CHANNEL_TYPES = set21;
export const NSFW_CHANNEL_TYPES = set22;
export const SLOWMODE_CHANNEL_TYPES = set23;
export const EDITABLE_VOICE_SETTINGS_TYPES = set24;
export const VOICE_THREAD_PARENT_CHANNEL_TYPES = set25;
export const CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING = set26;
export const GUILD_FAVORITES_CHANNEL_TYPES = set27;
export const CHANNEL_CHAT_IN_SIDEBAR = set28;
export const isChannelChatInSidebar = function isChannelChatInSidebar(type) {
  return GlobalUtils.isInSet(type, set28);
};
export const CHANNEL_THREADS_FORCE_OPENED_TO_FULL_VIEW = set29;
export const isChannelThreadsForcedOpenedInFullView = function isChannelThreadsForcedOpenedInFullView(type) {
  return GlobalUtils.isInSet(type, set29);
};
export const CHANNEL_MAIN_AREA_NO_FILE_UPLOAD = set30;
export const isChannelMainAreaUploadAllowed = function isChannelMainAreaUploadAllowed(arg0) {
  return !set30.has(arg0);
};
export const getAccessPermissions = function getAccessPermissions(arg0) {
  let hasItem = "SELECTABLE" !== arg0;
  if (hasItem) {
    hasItem = set7.has(arg0);
  }
  if (hasItem) {
    let VIEW_CHANNEL = closure_26;
  } else {
    VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  }
  return VIEW_CHANNEL;
};
export const getBasicAccessPermissions = function getBasicAccessPermissions(arg0) {
  let hasItem = "SELECTABLE" !== arg0;
  if (hasItem) {
    hasItem = set7.has(arg0);
  }
  if (hasItem) {
    let VIEW_CHANNEL = closure_27;
  } else {
    VIEW_CHANNEL = BasicPermissions.VIEW_CHANNEL;
  }
  return VIEW_CHANNEL;
};
export { ChannelRecordProperties };
export { ChannelRecordBase };
export { UnknownChannelRecord };
export { GuildVocalChannelRecord };
export { GuildTextualChannelRecord };
export { GuildAnnouncementChannelRecord };
export { GuildCategoryChannelRecord };
export { GuildDirectoryChannelRecord };
export { GuildStageVoiceChannelRecord };
export { GuildStoreChannelRecord };
export { GuildTextChannelRecord };
export { GuildSpaceChannelRecord };
export { GuildVoiceChannelRecord };
export { GuildAppChannelRecord };
export { ForumChannelRecord };
export { PrivateChannelRecord };
export { DMChannelRecord };
export { GroupDMChannelRecord };
export const ThreadChannelRecord = prototype3;
export const createChannelRecordFromServer = function createChannelRecordFromServer(type, arg1) {
  let GUILD_TEXT = type.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let fromServer = closure_32[GUILD_TEXT];
  if (fromServer == null) {
    fromServer = UnknownChannelRecord.fromServer;
  }
  return fromServer(type, arg1);
};
export const createChannelRecordFromInvite = function createChannelRecordFromInvite(type) {
  return createChannelRecord(type);
};
export const castChannelRecord = function castChannelRecord(type) {
  let GUILD_TEXT = type.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp3 = dependencyMap[GUILD_TEXT];
  if (tmp3 == null) {
    tmp3 = UnknownChannelRecord;
  }
  return TypeUtils.dangerouslyCast(type, tmp3);
};
export { createChannelRecord };