// === Module 2055: ChannelRecord ===

// Module 2055 (ChannelRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ForumLayout from "ForumLayout" /* 2062 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 2063 */;
import TypeUtils from "TypeUtils" /* 2064 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import Constants from "Constants" /* 1085 */;
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let applied_tags;

let ChannelTypes;
let Permissions;
let hasOwnProperty;
let metroImportAll;
const f85891 = (arg0, id) => {
  arg0[id.id] = id.nick;
  return arg0;
};
const f85892 = (id) => {
  let emoji_id;
  obj = { id: id.id, name: id.name, emojiId: emoji_id, emojiName: null, moderated: null, color: null };
  emoji_id = undefined;
  if (0 !== id.emoji_id) {
    emoji_id = id.emoji_id;
  }
  ({ emoji_name: obj.emojiName, moderated: obj.moderated, color: obj.color } = id);
  return obj;
};
function createChannelRecord(type) {
  let GUILD_TEXT = type.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp4 = closure_33[GUILD_TEXT];
  if (tmp4 == null) {
    tmp4 = UnknownChannelRecord;
  }
  if ("topic" in type) {
    type.topic_ = type.topic;
    delete type[tmp5];
  }
  if ("position" in type) {
    type.position_ = type.position;
    delete type[tmp6];
  }
  if ("permissionOverwrites" in type) {
    type.permissionOverwrites_ = type.permissionOverwrites;
    delete type[tmp7];
  }
  if ("bitrate" in type) {
    type.bitrate_ = type.bitrate;
    delete type[tmp8];
  }
  if ("userLimit" in type) {
    type.userLimit_ = type.userLimit;
    delete type[tmp9];
  }
  if ("nsfw" in type) {
    type.nsfw_ = type.nsfw;
    delete type[tmp10];
  }
  if ("rateLimitPerUser" in type) {
    type.rateLimitPerUser_ = type.rateLimitPerUser;
    delete type[tmp11];
  }
  if ("flags" in type) {
    type.flags_ = type.flags;
    delete type[tmp12];
  }
  const tmp42 = new tmp4(type);
  return tmp42;
}
({ BITRATE_DEFAULT: hasOwnProperty, ChannelTypes } = Constants);
const BasicPermissions = Constants.BasicPermissions;
({ ChannelTypesSets: metroImportAll, Permissions } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let items = [, , , , , , , , , , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], ANNOUNCEMENT_THREAD: arr[2], PUBLIC_THREAD: arr[3], PRIVATE_THREAD: arr[4], GUILD_DIRECTORY: arr[5], GUILD_FORUM: arr[6], GUILD_MEDIA: arr[7], GUILD_APP: arr[8], DM: arr[9], GROUP_DM: arr[10] } = ChannelTypes);
let set = new Set(items);
let items1 = [, , , , , , , , , , , , , , , , ];
({ DM: arr2[0], GROUP_DM: arr2[1], GUILD_TEXT: arr2[2], GUILD_VOICE: arr2[3], GUILD_STAGE_VOICE: arr2[4], GUILD_CATEGORY: arr2[5], GUILD_ANNOUNCEMENT: arr2[6], GUILD_STORE: arr2[7], ANNOUNCEMENT_THREAD: arr2[8], PUBLIC_THREAD: arr2[9], PRIVATE_THREAD: arr2[10], GUILD_DIRECTORY: arr2[11], GUILD_FORUM: arr2[12], GUILD_MEDIA: arr2[13], GUILD_SPACE: arr2[14], MEDIA_THREAD: arr2[15], GUILD_APP: arr2[16] } = ChannelTypes);
const items2 = [, , , , , ];
({ GUILD_TEXT: arr3[0], GUILD_ANNOUNCEMENT: arr3[1], ANNOUNCEMENT_THREAD: arr3[2], PUBLIC_THREAD: arr3[3], PRIVATE_THREAD: arr3[4], GUILD_APP: arr3[5] } = ChannelTypes);
const set1 = new Set(items1);
let set2 = new Set(items2);
const items3 = [, , , , , , ];
({ GUILD_TEXT: arr4[0], GUILD_ANNOUNCEMENT: arr4[1], GUILD_FORUM: arr4[2], GUILD_MEDIA: arr4[3], GUILD_VOICE: arr4[4], GUILD_STAGE_VOICE: arr4[5], GUILD_APP: arr4[6] } = ChannelTypes);
const items4 = [ChannelTypes.GUILD_TEXT];
const items5 = [, , , , , , , , , , , , , ];
({ GUILD_TEXT: arr6[0], GUILD_VOICE: arr6[1], GUILD_STAGE_VOICE: arr6[2], GUILD_CATEGORY: arr6[3], GUILD_ANNOUNCEMENT: arr6[4], GUILD_STORE: arr6[5], ANNOUNCEMENT_THREAD: arr6[6], PUBLIC_THREAD: arr6[7], PRIVATE_THREAD: arr6[8], GUILD_DIRECTORY: arr6[9], GUILD_FORUM: arr6[10], GUILD_MEDIA: arr6[11], GUILD_SPACE: arr6[12], GUILD_APP: arr6[13] } = ChannelTypes);
const set3 = new Set(items3);
const set4 = new Set(items4);
const set5 = new Set(items5);
const items6 = [, , , , ];
({ GUILD_TEXT: arr7[0], GUILD_ANNOUNCEMENT: arr7[1], GUILD_FORUM: arr7[2], GUILD_MEDIA: arr7[3], GUILD_APP: arr7[4] } = ChannelTypes);
const items7 = [, ];
({ GUILD_VOICE: arr8[0], GUILD_STAGE_VOICE: arr8[1] } = ChannelTypes);
const set6 = new Set(items6);
const set7 = new Set(items7);
const items8 = [ChannelTypes.GUILD_STAGE_VOICE];
const items9 = [, ];
({ DM: arr10[0], GROUP_DM: arr10[1] } = ChannelTypes);
const set8 = new Set(items8);
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
const items17 = [, , , , , , , , , , , , ];
({ DM: arr18[0], GROUP_DM: arr18[1], GUILD_TEXT: arr18[2], GUILD_ANNOUNCEMENT: arr18[3], ANNOUNCEMENT_THREAD: arr18[4], PUBLIC_THREAD: arr18[5], PRIVATE_THREAD: arr18[6], GUILD_FORUM: arr18[7], GUILD_MEDIA: arr18[8], GUILD_DIRECTORY: arr18[9], GUILD_VOICE: arr18[10], GUILD_STAGE_VOICE: arr18[11], GUILD_APP: arr18[12] } = ChannelTypes);
const set16 = new Set(items16);
const set17 = new Set(items17);
const items18 = [, , , , , , , , , , , ];
({ GUILD_TEXT: arr19[0], GUILD_ANNOUNCEMENT: arr19[1], GUILD_STORE: arr19[2], GUILD_VOICE: arr19[3], GUILD_STAGE_VOICE: arr19[4], ANNOUNCEMENT_THREAD: arr19[5], PUBLIC_THREAD: arr19[6], PRIVATE_THREAD: arr19[7], GUILD_DIRECTORY: arr19[8], GUILD_FORUM: arr19[9], GUILD_MEDIA: arr19[10], GUILD_APP: arr19[11] } = ChannelTypes);
const items19 = [, , , , , , , , , ];
({ GUILD_ANNOUNCEMENT: arr20[0], GUILD_CATEGORY: arr20[1], GUILD_STORE: arr20[2], GUILD_TEXT: arr20[3], GUILD_VOICE: arr20[4], GUILD_STAGE_VOICE: arr20[5], GUILD_DIRECTORY: arr20[6], GUILD_FORUM: arr20[7], GUILD_MEDIA: arr20[8], GUILD_APP: arr20[9] } = ChannelTypes);
const items20 = [, ];
({ GUILD_TEXT: arr21[0], GUILD_ANNOUNCEMENT: arr21[1] } = ChannelTypes);
const set18 = new Set(items18);
const items21 = [, , , , ];
({ GUILD_TEXT: arr22[0], GUILD_ANNOUNCEMENT: arr22[1], GUILD_FORUM: arr22[2], GUILD_MEDIA: arr22[3], GUILD_APP: arr22[4] } = ChannelTypes);
const set19 = new Set(items19);
const items22 = [, , , , , , ];
({ GUILD_TEXT: arr23[0], GUILD_ANNOUNCEMENT: arr23[1], GUILD_FORUM: arr23[2], GUILD_MEDIA: arr23[3], GUILD_VOICE: arr23[4], GUILD_STAGE_VOICE: arr23[5], GUILD_APP: arr23[6] } = ChannelTypes);
const set20 = new Set(items20);
const items23 = [, , , , , , , , ];
({ GUILD_TEXT: arr24[0], GUILD_FORUM: arr24[1], GUILD_MEDIA: arr24[2], ANNOUNCEMENT_THREAD: arr24[3], PUBLIC_THREAD: arr24[4], PRIVATE_THREAD: arr24[5], GUILD_VOICE: arr24[6], GUILD_STAGE_VOICE: arr24[7], GUILD_APP: arr24[8] } = ChannelTypes);
const set21 = new Set(items21);
const items24 = [, , , ];
({ PUBLIC_THREAD: arr25[0], PRIVATE_THREAD: arr25[1], GUILD_VOICE: arr25[2], GUILD_STAGE_VOICE: arr25[3] } = ChannelTypes);
const set22 = new Set(items22);
const items25 = [, , ];
({ GUILD_TEXT: arr26[0], GUILD_FORUM: arr26[1], GUILD_MEDIA: arr26[2] } = ChannelTypes);
const set23 = new Set(items23);
const items26 = [, , , , ];
({ GUILD_TEXT: arr27[0], GUILD_CATEGORY: arr27[1], GUILD_FORUM: arr27[2], GUILD_ANNOUNCEMENT: arr27[3], GUILD_APP: arr27[4] } = ChannelTypes);
const set24 = new Set(items24);
const items27 = [, , , , ];
({ GUILD_TEXT: arr28[0], GUILD_ANNOUNCEMENT: arr28[1], GUILD_FORUM: arr28[2], GUILD_VOICE: arr28[3], GUILD_APP: arr28[4] } = ChannelTypes);
const set25 = new Set(items25);
const items28 = [ChannelTypes.GUILD_APP];
const set26 = new Set(items26);
const set27 = new Set(items27);
const set28 = new Set(items28);
const items29 = [...set28];
const set29 = new Set(items29);
const items30 = [...set28, ChannelTypes.GUILD_FORUM, ChannelTypes.GUILD_MEDIA];
const set30 = new Set(items30);
let closure_26 = BigFlagUtils.combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
let closure_27 = BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL;
class ChannelRecordProperties {
  constructor(name) {
    let type;
    obj = Object.create(new.target.prototype);
    ({ id: tmp.id, type } = name);
    if (type == null) {
      type = ChannelTypes.GUILD_TEXT;
    }
    obj.type = type;
    let str = name.name;
    if (str == null) {
      str = "";
    }
    obj.name = str;
    let guild_id = name.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    obj.guild_id = guild_id;
    return obj;
  }
}
let closure_28 = Object.freeze({});
class ChannelRecordBase extends ChannelRecordProperties {
  toJS() {
    obj = {};
    const merged = Object.assign(this);
    return obj;
  }
  set(arg0, arg1) {
    obj = { [arg0]: arg1 };
    const merge = this.merge;
    if ("topic" in obj) {
      obj.topic_ = obj.topic;
      delete obj[tmp];
    }
    if ("position" in obj) {
      obj.position_ = obj.position;
      delete obj[tmp2];
    }
    if ("permissionOverwrites" in obj) {
      obj.permissionOverwrites_ = obj.permissionOverwrites;
      delete obj[tmp3];
    }
    if ("bitrate" in obj) {
      obj.bitrate_ = obj.bitrate;
      delete obj[tmp4];
    }
    if ("userLimit" in obj) {
      obj.userLimit_ = obj.userLimit;
      delete obj[tmp5];
    }
    if ("nsfw" in obj) {
      obj.nsfw_ = obj.nsfw;
      delete obj[tmp6];
    }
    if ("rateLimitPerUser" in obj) {
      obj.rateLimitPerUser_ = obj.rateLimitPerUser;
      delete obj[tmp7];
    }
    if ("flags" in obj) {
      obj.flags_ = obj.flags;
      delete obj[tmp8];
    }
    return merge(obj);
  }
  merge(topic) {
    if ("topic" in topic) {
      topic.topic_ = topic.topic;
      delete topic[tmp3];
    }
    if ("position" in topic) {
      topic.position_ = topic.position;
      delete topic[tmp4];
    }
    if ("permissionOverwrites" in topic) {
      topic.permissionOverwrites_ = topic.permissionOverwrites;
      delete topic[tmp5];
    }
    if ("bitrate" in topic) {
      topic.bitrate_ = topic.bitrate;
      delete topic[tmp6];
    }
    if ("userLimit" in topic) {
      topic.userLimit_ = topic.userLimit;
      delete topic[tmp7];
    }
    if ("nsfw" in topic) {
      topic.nsfw_ = topic.nsfw;
      delete topic[tmp8];
    }
    if ("rateLimitPerUser" in topic) {
      topic.rateLimitPerUser_ = topic.rateLimitPerUser;
      delete topic[tmp9];
    }
    if ("flags" in topic) {
      topic.flags_ = topic.flags;
      delete topic[tmp10];
    }
    const self = this;
    let tmp11 = null;
    let tmp12 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp12 = tmp11;
      while (keys[tmp] !== undefined) {
        let tmp16 = topic.hasOwnProperty(tmp15) && self[tmp15] !== topic[tmp15];
        if (!tmp16) {
          continue;
        } else {
          let toJSResult = tmp14;
          if (null == tmp14) {
            toJSResult = self.toJS();
          }
          toJSResult[tmp15] = topic[tmp15];
          tmp11 = toJSResult;
          continue;
        }
        continue;
      }
    }
    let constructor = self;
    if (null != tmp12) {
      const self2 = this;
      const self3 = this;
      constructor = new self.constructor(tmp12);
    }
    return constructor;
  }
  computeLurkerPermissionsAllowList() {
    if (this.isGuildStageVoice()) {
      if (StageInstanceStore.isPublic(this.id)) {
        return StageChannelPermissions.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST;
      }
    }
  }
  isNSFW() {
    return this.nsfw;
  }
  isManaged() {
    const APPLICATION_MANAGEABLE = metroImportAll.APPLICATION_MANAGEABLE;
    const hasItem = APPLICATION_MANAGEABLE.has(this.type) && null != this.application_id;
    return hasItem;
  }
  isPrivate() {
    return set9.has(this.type);
  }
  isGroupDM() {
    return this.type === ChannelTypes.GROUP_DM;
  }
  isMultiUserDM() {
    return set10.has(this.type);
  }
  isDM() {
    return this.type === ChannelTypes.DM;
  }
  isSystemDM() {
    return false;
  }
  isArchivedThread() {
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
  }
  isLockedThread() {
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
  }
  isScheduledForDeletion() {
    return this.hasFlag(ChannelFlags.IS_SCHEDULED_FOR_DELETION);
  }
  isArchivedLockedThread() {
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
  }
  isForumPost() {
    const self = this;
    let hasItem = this.type === ChannelTypes.PUBLIC_THREAD && null != self.parentChannelThreadType;
    if (hasItem) {
      const GUILD_THREADS_ONLY = metroImportAll.GUILD_THREADS_ONLY;
      hasItem = GUILD_THREADS_ONLY.has(self.parentChannelThreadType);
    }
    return hasItem;
  }
  isMediaThread() {
    return this.type === ChannelTypes.MEDIA_THREAD;
  }
  isRingable() {
    const CALLABLE = metroImportAll.CALLABLE;
    const hasItem = CALLABLE.has(this.type) || this.type === ChannelTypes.GUILD_VOICE;
    return hasItem;
  }
  isCategory() {
    return this.type === ChannelTypes.GUILD_CATEGORY;
  }
  isVocal() {
    return set12.has(this.type);
  }
  isGuildVocal() {
    const type = this.type;
    const hasItem = "SELECTABLE" !== type && set7.has(type);
    return hasItem;
  }
  isGuildVocalOrThread() {
    const self = this;
    const tmp = this.isGuildVocal() || self.isVocalThread();
    return tmp;
  }
  isGuildVoice() {
    return this.type === ChannelTypes.GUILD_VOICE;
  }
  isGuildVoiceOrThread() {
    const self = this;
    const tmp = this.isGuildVoice() || self.isVocalThread();
    return tmp;
  }
  isGuildStageVoice() {
    return this.type === ChannelTypes.GUILD_STAGE_VOICE;
  }
  isListenModeCapable() {
    return this.isGuildStageVoice();
  }
  isThread() {
    return set14.has(this.type);
  }
  isAnnouncementThread() {
    return this.type === ChannelTypes.ANNOUNCEMENT_THREAD;
  }
  isVocalThread() {
    return this.type === ChannelTypes.PUBLIC_THREAD || this.type === tmp.PRIVATE_THREAD;
  }
  isActiveThread() {
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
  }
  isDirectory() {
    return this.type === ChannelTypes.GUILD_DIRECTORY;
  }
  isForumLikeChannel() {
    const self = this;
    const tmp = this.isForumChannel() || self.isMediaChannel();
    return tmp;
  }
  isForumChannel() {
    return this.type === ChannelTypes.GUILD_FORUM;
  }
  isMediaChannel() {
    return this.type === ChannelTypes.GUILD_MEDIA;
  }
  isMediaPost() {
    return this.type === ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === tmp.GUILD_MEDIA;
  }
  isRoleSubscriptionTemplatePreviewChannel() {
    return this.hasFlag(ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
  }
  isOwner(arg0) {
    return this.ownerId === arg0;
  }
  isObfuscated() {
    return this.hasFlag(ChannelFlags.OBFUSCATED);
  }
  getGuildId() {
    return this.guild_id;
  }
  getApplicationId() {
    return this.application_id;
  }
  getDefaultSortOrder() {
    let LATEST_ACTIVITY;
    if (this.isGameInvitesChannel()) {
      LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.CREATION_DATE;
    } else {
      LATEST_ACTIVITY = this.defaultSortOrder;
      if (LATEST_ACTIVITY == null) {
        LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
      }
    }
    return LATEST_ACTIVITY;
  }
  getDefaultLayout() {
    const self = this;
    if (!this.isMediaChannel()) {
      let GRID;
      if (!self.isGameInvitesChannel()) {
        if (null != self.defaultForumLayout) {
          if (self.defaultForumLayout !== ForumLayout.ForumLayout.DEFAULT) {
            GRID = self.defaultForumLayout;
          }
        }
        GRID = ForumLayout.ForumLayout.LIST;
      }
      return GRID;
    }
    GRID = ForumLayout.ForumLayout.GRID;
  }
  getDefaultTagSetting() {
    let MATCH_SOME = this.defaultTagSetting;
    if (MATCH_SOME == null) {
      MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
    }
    return MATCH_SOME;
  }
  isModeratorReportChannel() {
    return this.hasFlag(ChannelFlags.IS_MODERATOR_REPORT_CHANNEL);
  }
  isSpoilerChannel() {
    return this.hasFlag(ChannelFlags.IS_SPOILER_CHANNEL);
  }
  isGameInvitesChannel() {
    return this.hasFlag(ChannelFlags.IS_GAME_INVITES_CHANNEL);
  }
  hasFlag(FIND_BY_EMAIL) {
    obj = FlagUtils;
    return obj.hasFlag(this.flags, FIND_BY_EMAIL);
  }
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
    let str;
    const self = this;
    if (this.type !== ChannelTypes.GUILD_APP) {
      let str2 = self.topic_;
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    } else {
      require("conjureTopicChannel");
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
Object.defineProperty(prototype, "accessPermissions", {
  get: function accessPermissions() {
    let VIEW_CHANNEL;
    const type = this.type;
    const hasItem = "SELECTABLE" !== type && set7.has(type);
    if (hasItem) {
      VIEW_CHANNEL = closure_26;
    } else {
      VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
    }
    return VIEW_CHANNEL;
  },
  set: undefined
});
Object.defineProperty(prototype, "isHDStreamSplashed", {
  get: function isHDStreamSplashed() {
    let tmp2 = null != this.hdStreamingUntil;
    if (tmp2) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(tmp.hdStreamingUntil);
      tmp2 = date > new Date();
      const date1 = new Date();
    }
    return tmp2;
  },
  set: undefined
});
class UnknownChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    const tmp = new UnknownChannelRecord(arg0, new.target);
    ({ application_id: tmp.application_id, appliedTags: tmp.appliedTags, availableTags: tmp.availableTags, bitrate_: tmp.bitrate_, defaultAutoArchiveDuration: tmp.defaultAutoArchiveDuration, defaultForumLayout: tmp.defaultForumLayout, defaultReactionEmoji: tmp.defaultReactionEmoji, defaultSortOrder: tmp.defaultSortOrder, defaultTagSetting: tmp.defaultTagSetting, defaultThreadRateLimitPerUser: tmp.defaultThreadRateLimitPerUser, flags_: tmp.flags_, gameId: tmp.gameId, icon: tmp.icon, iconEmoji: tmp.iconEmoji, isMessageRequest: tmp.isMessageRequest, isMessageRequestTimestamp: tmp.isMessageRequestTimestamp, isSpam: tmp.isSpam, lastMessageId: tmp.lastMessageId, lastNonMessageActivityTimestamp: tmp.lastNonMessageActivityTimestamp, lastPinTimestamp: tmp.lastPinTimestamp, member: tmp.member, memberCount: tmp.memberCount, memberIdsPreview: tmp.memberIdsPreview, memberListId: tmp.memberListId, messageCount: tmp.messageCount, nicks: tmp.nicks, nsfw_: tmp.nsfw_, originChannelId: tmp.originChannelId, ownerId: tmp.ownerId, parent_id: tmp.parent_id, parentChannelThreadType: tmp.parentChannelThreadType, permissionOverwrites_: tmp.permissionOverwrites_, position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, rawRecipients: tmp.rawRecipients, recipients: tmp.recipients, recipientFlags: tmp.recipientFlags, rtcRegion: tmp.rtcRegion, safetyWarnings: tmp.safetyWarnings, blockedUserWarningDismissed: tmp.blockedUserWarningDismissed, template: tmp.template, themeColor: tmp.themeColor, threadMetadata: tmp.threadMetadata, topic_: tmp.topic_, userLimit_: tmp.userLimit_, version: tmp.version, videoQualityMode: tmp.videoQualityMode, linkedLobby: tmp.linkedLobby, hdStreamingUntil: tmp.hdStreamingUntil, hdStreamingBuyerId: tmp.hdStreamingBuyerId, voiceHangout: tmp.voiceHangout } = arg0);
    return tmp;
  }
  static fromServer(application_id, arg1) {
    let UNKNOWN;
    let flag;
    let guild_id;
    let icon_emoji;
    let mapped;
    let name;
    let obj6;
    let obj7;
    let permission_overwrites;
    let tmp;
    let tmp10;
    let tmp2;
    let tmp5;
    let tmp6;
    obj = { application_id: application_id.application_id, appliedTags: application_id.applied_tags, availableTags: tmp, bitrate_: null, defaultAutoArchiveDuration: null, defaultForumLayout: null, defaultReactionEmoji: tmp2, defaultSortOrder: null, defaultTagSetting: null, defaultThreadRateLimitPerUser: null, flags_: null, gameId: null, guild_id, icon: null, iconEmoji: tmp5, id: null, isMessageRequest: null, isMessageRequestTimestamp: null, isSpam: null, lastMessageId: null, lastNonMessageActivityTimestamp: null, lastPinTimestamp: null, member: tmp6, memberCount: null, memberIdsPreview: null, memberListId: null, messageCount: null, name, nicks: obj6, nsfw_: null, originChannelId: null, ownerId: null, parent_id: null, parentChannelThreadType: "formatToPlainString", permissionOverwrites_: obj7, position_: true, rateLimitPerUser_: true, rawRecipients: null != application_id.recipients ? application_id.recipients : [], recipients: mapped, recipientFlags: true, rtcRegion: "audio", safetyWarnings: null, blockedUserWarningDismissed: null, template: null, themeColor: null, threadMetadata: tmp10, topic_: null, totalMessageSent: null, type: UNKNOWN, userLimit_: null, version: null, videoQualityMode: null, linkedLobby: null, hdStreamingUntil: null, hdStreamingBuyerId: null, voiceHangout: null };
    tmp = undefined;
    if (null != application_id.available_tags) {
      let items;
      const available_tags = application_id.available_tags;
      if (null == available_tags) {
        items = [];
      } else {
        items = available_tags.map(f85892);
      }
      tmp = items;
    }
    ({ bitrate: obj.bitrate_, default_auto_archive_duration: obj.defaultAutoArchiveDuration, default_forum_layout: obj.defaultForumLayout } = application_id);
    tmp2 = undefined;
    if (null != application_id.default_reaction_emoji) {
      let emoji_id;
      if (0 !== application_id.default_reaction_emoji.emoji_id) {
        emoji_id = application_id.default_reaction_emoji.emoji_id;
      }
      tmp2 = { emojiId: emoji_id, emojiName: application_id.default_reaction_emoji.emoji_name };
      obj2 = { emojiId: emoji_id, emojiName: application_id.default_reaction_emoji.emoji_name };
    }
    guild_id = arg1;
    ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_, game_id: obj.gameId } = application_id);
    if (arg1 == null) {
      guild_id = application_id.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    ({ icon: obj.icon, icon_emoji } = application_id);
    tmp5 = undefined;
    if (null != icon_emoji) {
      const obj4 = { id: null, name: null };
      ({ id: obj3.id, name: obj3.name } = icon_emoji);
      tmp5 = obj4;
    }
    ({ id: obj.id, is_message_request: obj.isMessageRequest, is_message_request_timestamp: obj.isMessageRequestTimestamp, is_spam: obj.isSpam, last_message_id: obj.lastMessageId, last_non_message_activity_timestamp: obj.lastNonMessageActivityTimestamp, last_pin_timestamp: obj.lastPinTimestamp } = application_id);
    tmp6 = undefined;
    if (null != application_id.member) {
      tmp6 = { flags: application_id.member.flags, muted: application_id.member.muted, muteConfig: application_id.member.mute_config, joinTimestamp: application_id.member.join_timestamp };
      const obj5 = { flags: application_id.member.flags, muted: application_id.member.muted, muteConfig: application_id.member.mute_config, joinTimestamp: application_id.member.join_timestamp };
    }
    ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, member_list_id: obj.memberListId, message_count: obj.messageCount, name } = application_id);
    if (name == null) {
      name = "";
    }
    const nicks = application_id.nicks;
    if (null == nicks) {
      obj6 = {};
    } else {
      const arr3 = _modDef12;
      obj6 = arr3.reduce(nicks, f85891, {});
    }
    ({ nsfw: obj.nsfw_, origin_channel_id: obj.originChannelId, owner_id: obj.ownerId, parent_id: obj.parent_id, permission_overwrites } = application_id);
    obj7 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        let deserializer;
        let deserializer2;
        obj = { id: id.id, type: id.type, allow: deserializer.deserialize(id.allow), deny: deserializer2.deserialize(id.deny) };
        id = id.id;
        deserializer = BigFlagUtils;
        deserializer2 = BigFlagUtils;
        obj8[id] = obj;
      });
    }
    ({ position: obj.position_, rate_limit_per_user: obj.rateLimitPerUser_ } = application_id);
    if (null != application_id.recipients) {
      const recipients = application_id.recipients;
      mapped = recipients.map((id) => id.id);
    } else {
      mapped = [];
    }
    ({ recipient_flags: obj.recipientFlags, rtc_region: obj.rtcRegion, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed, template: obj.template, theme_color: obj.themeColor } = application_id);
    tmp10 = undefined;
    if (null != application_id.thread_metadata) {
      const obj14 = { archived: application_id.thread_metadata.archived, autoArchiveDuration: application_id.thread_metadata.auto_archive_duration, archiveTimestamp: application_id.thread_metadata.archive_timestamp, createTimestamp: application_id.thread_metadata.create_timestamp, locked: application_id.thread_metadata.locked, invitable: flag };
      flag = application_id.thread_metadata.invitable;
      if (flag == null) {
        flag = true;
      }
      tmp10 = obj14;
    }
    ({ topic: obj.topic_, total_message_sent: obj.totalMessageSent } = application_id);
    if (null != application_id.type) {
      UNKNOWN = application_id.type;
    } else {
      UNKNOWN = ChannelTypes.UNKNOWN;
    }
    ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
    const obj8 = obj7(2064);
    return obj8.dangerouslyCast(obj, UnknownChannelRecord);
  }
}
class GuildVocalChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    let permissionOverwrites_;
    const tmp = new GuildVocalChannelRecord(arg0, new.target, this);
    ({ application_id: tmp.application_id, bitrate_: tmp.bitrate_, flags_: tmp.flags_, iconEmoji: tmp.iconEmoji, lastMessageId: tmp.lastMessageId, lastPinTimestamp: tmp.lastPinTimestamp, memberListId: tmp.memberListId, nsfw_: tmp.nsfw_, originChannelId: tmp.originChannelId, parent_id: tmp.parent_id, permissionOverwrites_ } = arg0);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, rtcRegion: tmp.rtcRegion, themeColor: tmp.themeColor, topic_: tmp.topic_, userLimit_: tmp.userLimit_, version: tmp.version, videoQualityMode: tmp.videoQualityMode, hdStreamingUntil: tmp.hdStreamingUntil, hdStreamingBuyerId: tmp.hdStreamingBuyerId, voiceHangout: tmp.voiceHangout } = arg0);
    return tmp;
  }
  static fromServer(application_id, arg1) {
    let GUILD_VOICE;
    let flag;
    let name;
    let obj5;
    let permission_overwrites;
    let rate_limit_per_user;
    let tmp2;
    let guild_id = arg1;
    obj = { application_id: application_id.application_id, bitrate_: application_id.bitrate, flags_: application_id.flags, guild_id, iconEmoji: tmp2, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name, nsfw_: flag, originChannelId: null, parent_id: null, permissionOverwrites_: obj5, position_: null, rateLimitPerUser_: rate_limit_per_user, rtcRegion: null, themeColor: null, topic_: null, type: GUILD_VOICE, userLimit_: null, version: null, videoQualityMode: null, hdStreamingUntil: null, hdStreamingBuyerId: null, voiceHangout: null };
    if (arg1 == null) {
      guild_id = application_id.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const icon_emoji = application_id.icon_emoji;
    tmp2 = undefined;
    if (null != icon_emoji) {
      const obj3 = { id: null, name: null };
      ({ id: obj2.id, name: obj2.name } = icon_emoji);
      tmp2 = obj3;
    }
    ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
    if (name == null) {
      name = "";
    }
    flag = application_id.nsfw;
    if (flag == null) {
      flag = false;
    }
    ({ origin_channel_id: obj.originChannelId, parent_id: obj.parent_id, permission_overwrites } = application_id);
    obj5 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        let deserializer;
        let deserializer2;
        obj = { id: id.id, type: id.type, allow: deserializer.deserialize(id.allow), deny: deserializer2.deserialize(id.deny) };
        id = id.id;
        deserializer = BigFlagUtils;
        deserializer2 = BigFlagUtils;
        obj8[id] = obj;
      });
    }
    ({ position: obj.position_, rate_limit_per_user } = application_id);
    if (rate_limit_per_user == null) {
      rate_limit_per_user = 0;
    }
    ({ rtc_region: obj.rtcRegion, theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
    if (null != application_id.type) {
      GUILD_VOICE = application_id.type;
    } else {
      GUILD_VOICE = ChannelTypes.GUILD_VOICE;
    }
    ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
    const obj4 = obj5(2059);
    const result = obj4.normalizeConjureTopicChannelRecord(obj);
    let GUILD_TEXT = result.type;
    const tmp5 = obj5;
    if (GUILD_TEXT == null) {
      GUILD_TEXT = ChannelTypes.GUILD_TEXT;
    }
    let tmp10 = closure_33[GUILD_TEXT];
    if (tmp10 == null) {
      tmp10 = UnknownChannelRecord;
    }
    const tmp5Result = tmp5(2064);
    return tmp5Result.dangerouslyCast(result, tmp10);
  }
}
class GuildTextualChannelRecord extends ChannelRecordBase {
  constructor(arg0) {
    let permissionOverwrites_;
    const tmp = new GuildTextualChannelRecord(arg0, new.target, this);
    ({ application_id: tmp.application_id, defaultAutoArchiveDuration: tmp.defaultAutoArchiveDuration, defaultThreadRateLimitPerUser: tmp.defaultThreadRateLimitPerUser, flags_: tmp.flags_, iconEmoji: tmp.iconEmoji, lastMessageId: tmp.lastMessageId, lastPinTimestamp: tmp.lastPinTimestamp, memberListId: tmp.memberListId, nsfw_: tmp.nsfw_, parent_id: tmp.parent_id, permissionOverwrites_ } = arg0);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp.position_, rateLimitPerUser_: tmp.rateLimitPerUser_, themeColor: tmp.themeColor, topic_: tmp.topic_, version: tmp.version, linkedLobby: tmp.linkedLobby, hdStreamingBuyerId: tmp.hdStreamingBuyerId, hdStreamingUntil: tmp.hdStreamingUntil } = arg0);
    return tmp;
  }
  static fromServer(application_id, arg1) {
    let GUILD_TEXT;
    let flag;
    let name;
    let obj5;
    let permission_overwrites;
    let rate_limit_per_user;
    let tmp2;
    let guild_id = arg1;
    obj = { application_id: application_id.application_id, defaultAutoArchiveDuration: application_id.default_auto_archive_duration, defaultThreadRateLimitPerUser: application_id.default_thread_rate_limit_per_user, flags_: application_id.flags, guild_id, iconEmoji: tmp2, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name, nsfw_: flag, parent_id: null, permissionOverwrites_: obj5, position_: null, rateLimitPerUser_: rate_limit_per_user, themeColor: null, topic_: null, type: GUILD_TEXT, linkedLobby: null, hdStreamingUntil: null, hdStreamingBuyerId: null, version: null };
    if (arg1 == null) {
      guild_id = application_id.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const icon_emoji = application_id.icon_emoji;
    tmp2 = undefined;
    if (null != icon_emoji) {
      const obj3 = { id: null, name: null };
      ({ id: obj2.id, name: obj2.name } = icon_emoji);
      tmp2 = obj3;
    }
    ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
    if (name == null) {
      name = "";
    }
    flag = application_id.nsfw;
    if (flag == null) {
      flag = false;
    }
    ({ parent_id: obj.parent_id, permission_overwrites } = application_id);
    obj5 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        let deserializer;
        let deserializer2;
        obj = { id: id.id, type: id.type, allow: deserializer.deserialize(id.allow), deny: deserializer2.deserialize(id.deny) };
        id = id.id;
        deserializer = BigFlagUtils;
        deserializer2 = BigFlagUtils;
        obj8[id] = obj;
      });
    }
    ({ position: obj.position_, rate_limit_per_user } = application_id);
    if (rate_limit_per_user == null) {
      rate_limit_per_user = 0;
    }
    ({ theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
    if (null != application_id.type) {
      GUILD_TEXT = application_id.type;
    } else {
      GUILD_TEXT = ChannelTypes.GUILD_TEXT;
    }
    ({ linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, version: obj.version } = application_id);
    const obj4 = obj5(2059);
    const result = obj4.normalizeConjureTopicChannelRecord(obj);
    let GUILD_TEXT2 = result.type;
    const tmp5 = obj5;
    if (GUILD_TEXT2 == null) {
      GUILD_TEXT2 = ChannelTypes.GUILD_TEXT;
    }
    let tmp10 = closure_33[GUILD_TEXT2];
    if (tmp10 == null) {
      tmp10 = UnknownChannelRecord;
    }
    const tmp5Result = tmp5(2064);
    return tmp5Result.dangerouslyCast(result, tmp10);
  }
}
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
class ForumChannelRecord extends ChannelRecordBase {
  constructor(availableTags) {
    let permissionOverwrites_;
    const tmp2 = new ForumChannelRecord(availableTags, tmp);
    availableTags = availableTags.availableTags;
    if (availableTags == null) {
      availableTags = [];
    }
    tmp2.availableTags = availableTags;
    ({ defaultAutoArchiveDuration: tmp2.defaultAutoArchiveDuration, defaultForumLayout: tmp2.defaultForumLayout, defaultReactionEmoji: tmp2.defaultReactionEmoji, defaultSortOrder: tmp2.defaultSortOrder, defaultTagSetting: tmp2.defaultTagSetting, defaultThreadRateLimitPerUser: tmp2.defaultThreadRateLimitPerUser, flags_: tmp2.flags_, gameId: tmp2.gameId, iconEmoji: tmp2.iconEmoji, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, memberListId: tmp2.memberListId, nsfw_: tmp2.nsfw_, parent_id: tmp2.parent_id, permissionOverwrites_ } = availableTags);
    if (permissionOverwrites_ == null) {
      permissionOverwrites_ = {};
    }
    tmp2.permissionOverwrites_ = permissionOverwrites_;
    ({ position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, template: tmp2.template, themeColor: tmp2.themeColor, topic_: tmp2.topic_, version: tmp2.version } = availableTags);
    return tmp2;
  }
  static fromServer(available_tags, arg1) {
    let GUILD_TEXT;
    let flag;
    let guild_id;
    let items1;
    let name;
    let obj8;
    let permission_overwrites;
    let rate_limit_per_user;
    let tmp;
    let tmp4;
    if (null != available_tags.available_tags) {
      let items;
      available_tags = available_tags.available_tags;
      if (null == available_tags) {
        items = [];
      } else {
        items = available_tags.map(f85892);
      }
      items1 = items;
    } else {
      items1 = [];
    }
    obj = { availableTags: items1, defaultAutoArchiveDuration: available_tags.default_auto_archive_duration, defaultForumLayout: available_tags.default_forum_layout, defaultReactionEmoji: tmp, defaultSortOrder: null, defaultTagSetting: null, defaultThreadRateLimitPerUser: null, flags_: null, gameId: null, guild_id, iconEmoji: tmp4, id: null, lastMessageId: null, lastPinTimestamp: null, memberListId: null, name, nsfw_: flag, parent_id: null, permissionOverwrites_: obj8, position_: null, rateLimitPerUser_: rate_limit_per_user, template: null, themeColor: null, topic_: null, type: GUILD_TEXT, version: available_tags.version };
    tmp = undefined;
    if (null != available_tags.default_reaction_emoji) {
      let emoji_id;
      if (0 !== available_tags.default_reaction_emoji.emoji_id) {
        emoji_id = available_tags.default_reaction_emoji.emoji_id;
      }
      tmp = { emojiId: emoji_id, emojiName: available_tags.default_reaction_emoji.emoji_name };
      obj2 = { emojiId: emoji_id, emojiName: available_tags.default_reaction_emoji.emoji_name };
    }
    guild_id = arg1;
    ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_, game_id: obj.gameId } = available_tags);
    if (arg1 == null) {
      guild_id = available_tags.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    const icon_emoji = available_tags.icon_emoji;
    tmp4 = undefined;
    if (null != icon_emoji) {
      const obj4 = { id: null, name: null };
      ({ id: obj3.id, name: obj3.name } = icon_emoji);
      tmp4 = obj4;
    }
    ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = available_tags);
    if (name == null) {
      name = "";
    }
    flag = available_tags.nsfw;
    if (flag == null) {
      flag = false;
    }
    ({ parent_id: obj.parent_id, permission_overwrites } = available_tags);
    obj8 = {};
    if (permission_overwrites != null) {
      const item = permission_overwrites.forEach((id) => {
        let deserializer;
        let deserializer2;
        obj = { id: id.id, type: id.type, allow: deserializer.deserialize(id.allow), deny: deserializer2.deserialize(id.deny) };
        id = id.id;
        deserializer = BigFlagUtils;
        deserializer2 = BigFlagUtils;
        obj8[id] = obj;
      });
    }
    ({ position: obj.position_, rate_limit_per_user } = available_tags);
    if (rate_limit_per_user == null) {
      rate_limit_per_user = 0;
    }
    ({ template: obj.template, theme_color: obj.themeColor, topic: obj.topic_ } = available_tags);
    if (null != available_tags.type) {
      GUILD_TEXT = available_tags.type;
    } else {
      GUILD_TEXT = ChannelTypes.GUILD_TEXT;
    }
    const obj5 = obj8(2064);
    return obj5.dangerouslyCast(obj, ForumChannelRecord);
  }
}
class IdAsNumberCache {
  constructor() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 100;
    }
    obj = Object.create(new.target.prototype);
    obj.cache = new LRUCacheDefault(num);
    new LRUCacheDefault(num);
    return obj;
  }
  getOrCompute(id) {
    const cache = this.cache;
    const value = cache.get(id);
    if (null != value) {
      return value;
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(id, 10);
      const cache2 = this.cache;
      const result = cache2.set(id, parsed);
      return parsed;
    }
  }
}
const prototype2 = IdAsNumberCache.prototype;
let obj = Object.create(IdAsNumberCache.prototype);
obj.cache = new LRUCacheDefault(100);
new LRUCacheDefault(100);
let obj2 = Object.create(IdAsNumberCache.prototype);
obj2.cache = new LRUCacheDefault(100);
new LRUCacheDefault(100);
class PrivateChannelRecord extends ChannelRecordBase {
  constructor(rawRecipients) {
    let safetyWarnings;
    const tmp5 = new PrivateChannelRecord(rawRecipients, tmp4, tmp3, tmp2, tmp, new.target);
    ({ application_id: tmp5.application_id, flags_: tmp5.flags_, icon: tmp5.icon, isMessageRequest: tmp5.isMessageRequest, isMessageRequestTimestamp: tmp5.isMessageRequestTimestamp, isSpam: tmp5.isSpam, lastMessageId: tmp5.lastMessageId, lastPinTimestamp: tmp5.lastPinTimestamp, nicks: tmp5.nicks, ownerId: tmp5.ownerId } = rawRecipients);
    tmp5.rawRecipients = PrivateChannelRecord.sortRecipients(rawRecipients.rawRecipients, tmp5.id);
    let recipients = rawRecipients.recipients;
    if (recipients == null) {
      recipients = [];
    }
    const items = [...recipients];
    tmp5.recipients = items.sort(SnowflakeUtilsDefault.compare);
    ({ recipientFlags: tmp5.recipientFlags, safetyWarnings } = rawRecipients);
    if (safetyWarnings == null) {
      safetyWarnings = [];
    }
    tmp5.safetyWarnings = safetyWarnings;
    tmp5.blockedUserWarningDismissed = rawRecipients.blockedUserWarningDismissed;
    return tmp5;
  }
  static sortRecipients(rawRecipients, id) {
    let closure_0;
    let items = rawRecipients;
    let orCompute = obj.getOrCompute(id);
    if (rawRecipients == null) {
      items = [];
    }
    const items1 = [...items];
    return items1.sort((id, id2) => {
      const orCompute = obj2.getOrCompute(id.id);
      return (orCompute ^ closure_0) - (obj2.getOrCompute(id2.id) ^ closure_0);
    });
  }
  static fromServer(application_id) {
    let DM;
    let flag;
    let name;
    const sortRecipientsResult = PrivateChannelRecord.sortRecipients(application_id.recipients, application_id.id);
    obj = { application_id: application_id.application_id, flags_: application_id.flags, guild_id: null, icon: application_id.icon, id: application_id.id, isMessageRequest: application_id.is_message_request, isMessageRequestTimestamp: application_id.is_message_request_timestamp, isSpam: flag, lastMessageId: null, lastPinTimestamp: null, name, nicks: obj2, ownerId: application_id.owner_id, rawRecipients: sortRecipientsResult, recipients: sortRecipientsResult.map((id) => id.id), recipientFlags: null, safetyWarnings: null, blockedUserWarningDismissed: null, type: DM };
    flag = application_id.is_spam;
    if (flag == null) {
      flag = false;
    }
    ({ last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, name } = application_id);
    if (name == null) {
      name = "";
    }
    const nicks = application_id.nicks;
    if (null == nicks) {
      obj2 = {};
    } else {
      const arr2 = _modDef12;
      obj2 = arr2.reduce(nicks, f85891, {});
    }
    ({ recipient_flags: obj.recipientFlags, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed } = application_id);
    if (null != application_id.type) {
      DM = application_id.type;
    } else {
      DM = ChannelTypes.DM;
    }
    const obj3 = TypeUtils;
    return obj3.dangerouslyCast(obj, PrivateChannelRecord);
  }
  isSystemDM() {
    const first = this.rawRecipients[0];
    return this.type === ChannelTypes.DM && null != first && true === first.system;
  }
  getRecipientId() {
    return this.recipients[0];
  }
  addRecipient(arg0, arg1, arg2) {
    const self = this;
    if (arg0 !== arg2) {
      let recipients = self.recipients;
      set = self.set;
      const uniq = _modDef12.uniq;
      _modDef12;
      if (recipients == null) {
        recipients = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items, recipients, 0)] = arg0;
      const uniqResult = uniq(items);
      const result = set("recipients", uniqResult.sort(SnowflakeUtilsDefault.compare));
      let set2Result = result;
      if (null != arg1) {
        obj = {};
        set2 = result.set;
        const merged = Object.assign(result.nicks);
        obj[arg0] = arg1;
        set2Result = set2("nicks", obj);
      }
      return set2Result;
    } else {
      return self;
    }
  }
  removeRecipient(id2) {
    set = this.set;
    obj = _modDef12;
    return set("recipients", obj.without(this.recipients, id2));
  }
}
const prototype3 = PrivateChannelRecord.prototype;
class DMChannelRecord extends PrivateChannelRecord {
}
class GroupDMChannelRecord extends PrivateChannelRecord {
}
class ThreadChannelRecord extends ChannelRecordBase {
  constructor(appliedTags) {
    const tmp2 = new ThreadChannelRecord(appliedTags, tmp);
    appliedTags = appliedTags.appliedTags;
    if (appliedTags == null) {
      appliedTags = [];
    }
    tmp2.appliedTags = appliedTags;
    ({ bitrate_: tmp2.bitrate_, flags_: tmp2.flags_, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, member: tmp2.member, memberCount: tmp2.memberCount, memberIdsPreview: tmp2.memberIdsPreview, messageCount: tmp2.messageCount, nsfw_: tmp2.nsfw_, ownerId: tmp2.ownerId, parent_id: tmp2.parent_id, parentChannelThreadType: tmp2.parentChannelThreadType, rateLimitPerUser_: tmp2.rateLimitPerUser_, rtcRegion: tmp2.rtcRegion, threadMetadata: tmp2.threadMetadata, userLimit_: tmp2.userLimit_, videoQualityMode: tmp2.videoQualityMode, lastNonMessageActivityTimestamp: tmp2.lastNonMessageActivityTimestamp } = appliedTags);
    return tmp2;
  }
  static fromServer(applied_tags, arg1) {
    let PUBLIC_THREAD;
    let flag;
    let flag2;
    let name;
    let tmp2;
    let tmp3;
    applied_tags = applied_tags.applied_tags;
    if (applied_tags == null) {
      applied_tags = [];
    }
    let guild_id = arg1;
    obj = { appliedTags: applied_tags, bitrate_: applied_tags.bitrate, flags_: applied_tags.flags, guild_id, id: null, lastMessageId: null, lastPinTimestamp: null, member: tmp2, memberCount: null, memberIdsPreview: null, messageCount: null, name, nsfw_: flag, ownerId: null, parent_id: null, parentChannelThreadType: null, rateLimitPerUser_: null, rtcRegion: null, threadMetadata: tmp3, totalMessageSent: applied_tags.total_message_sent, type: PUBLIC_THREAD, userLimit_: null, videoQualityMode: null, lastNonMessageActivityTimestamp: null };
    if (arg1 == null) {
      guild_id = applied_tags.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp } = applied_tags);
    tmp2 = undefined;
    if (null != applied_tags.member) {
      tmp2 = { flags: applied_tags.member.flags, muted: applied_tags.member.muted, muteConfig: applied_tags.member.mute_config, joinTimestamp: applied_tags.member.join_timestamp };
      obj2 = { flags: applied_tags.member.flags, muted: applied_tags.member.muted, muteConfig: applied_tags.member.mute_config, joinTimestamp: applied_tags.member.join_timestamp };
    }
    ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, message_count: obj.messageCount, name } = applied_tags);
    if (name == null) {
      name = "";
    }
    flag = applied_tags.nsfw;
    if (flag == null) {
      flag = false;
    }
    ({ owner_id: obj.ownerId, parent_id: obj.parent_id, parentChannelThreadType: obj.parentChannelThreadType, rate_limit_per_user: obj.rateLimitPerUser_, rtc_region: obj.rtcRegion } = applied_tags);
    tmp3 = undefined;
    if (null != applied_tags.thread_metadata) {
      const obj3 = { archived: applied_tags.thread_metadata.archived, autoArchiveDuration: applied_tags.thread_metadata.auto_archive_duration, archiveTimestamp: applied_tags.thread_metadata.archive_timestamp, createTimestamp: applied_tags.thread_metadata.create_timestamp, locked: applied_tags.thread_metadata.locked, invitable: flag2 };
      flag2 = applied_tags.thread_metadata.invitable;
      if (flag2 == null) {
        flag2 = true;
      }
      tmp3 = obj3;
    }
    if (null != applied_tags.type) {
      PUBLIC_THREAD = applied_tags.type;
    } else {
      PUBLIC_THREAD = ChannelTypes.PUBLIC_THREAD;
    }
    ({ user_limit: obj.userLimit_, video_quality_mode: obj.videoQualityMode, last_non_message_activity_timestamp: obj.lastNonMessageActivityTimestamp } = applied_tags);
    const obj4 = TypeUtils;
    return obj4.dangerouslyCast(obj, ThreadChannelRecord);
  }
}
let closure_32 = { [ChannelTypes.DM]: PrivateChannelRecord.fromServer, [ChannelTypes.GROUP_DM]: PrivateChannelRecord.fromServer, [ChannelTypes.GUILD_TEXT]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_VOICE]: GuildVocalChannelRecord.fromServer, [ChannelTypes.GUILD_STAGE_VOICE]: GuildVocalChannelRecord.fromServer, [ChannelTypes.GUILD_CATEGORY]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_ANNOUNCEMENT]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_STORE]: GuildTextualChannelRecord.fromServer, [ChannelTypes.ANNOUNCEMENT_THREAD]: ThreadChannelRecord.fromServer, [ChannelTypes.PUBLIC_THREAD]: ThreadChannelRecord.fromServer, [ChannelTypes.PRIVATE_THREAD]: ThreadChannelRecord.fromServer, [ChannelTypes.MEDIA_THREAD]: ThreadChannelRecord.fromServer, [ChannelTypes.GUILD_DIRECTORY]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_FORUM]: ForumChannelRecord.fromServer, [ChannelTypes.GUILD_MEDIA]: ForumChannelRecord.fromServer, [ChannelTypes.GUILD_SPACE]: GuildTextualChannelRecord.fromServer, [ChannelTypes.GUILD_APP]: GuildTextualChannelRecord.fromServer };
let closure_33 = { [ChannelTypes.DM]: DMChannelRecord, [ChannelTypes.GROUP_DM]: GroupDMChannelRecord, [ChannelTypes.GUILD_TEXT]: GuildTextChannelRecord, [ChannelTypes.GUILD_VOICE]: GuildVoiceChannelRecord, [ChannelTypes.GUILD_STAGE_VOICE]: GuildStageVoiceChannelRecord, [ChannelTypes.GUILD_CATEGORY]: GuildCategoryChannelRecord, [ChannelTypes.GUILD_ANNOUNCEMENT]: GuildAnnouncementChannelRecord, [ChannelTypes.GUILD_STORE]: GuildStoreChannelRecord, [ChannelTypes.ANNOUNCEMENT_THREAD]: ThreadChannelRecord, [ChannelTypes.PUBLIC_THREAD]: ThreadChannelRecord, [ChannelTypes.PRIVATE_THREAD]: ThreadChannelRecord, [ChannelTypes.MEDIA_THREAD]: ThreadChannelRecord, [ChannelTypes.GUILD_DIRECTORY]: GuildDirectoryChannelRecord, [ChannelTypes.GUILD_FORUM]: ForumChannelRecord, [ChannelTypes.GUILD_MEDIA]: ForumChannelRecord, [ChannelTypes.GUILD_SPACE]: GuildSpaceChannelRecord, [ChannelTypes.GUILD_APP]: GuildAppChannelRecord };
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
  const hasItem = "SELECTABLE" !== type && set7.has(type);
  return hasItem;
};
export const isGuildVocalChannelOrVocalThreadType = function isGuildVocalChannelOrVocalThreadType(arg0) {
  const hasItem = "SELECTABLE" !== arg0 && set7.has(arg0) || set15.has(arg0);
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
export const isVoiceChannel = function isVoiceChannel(type) {
  return set12.has(type);
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
  obj = GlobalUtils;
  return obj.isInSet(type, set28);
};
export const CHANNEL_THREADS_FORCE_OPENED_TO_FULL_VIEW = set29;
export const isChannelThreadsForcedOpenedInFullView = function isChannelThreadsForcedOpenedInFullView(type) {
  obj = GlobalUtils;
  return obj.isInSet(type, set29);
};
export const CHANNEL_MAIN_AREA_NO_FILE_UPLOAD = set30;
export const isChannelMainAreaUploadAllowed = function isChannelMainAreaUploadAllowed(arg0) {
  return !set30.has(arg0);
};
export const getAccessPermissions = function getAccessPermissions(arg0) {
  let VIEW_CHANNEL;
  const hasItem = "SELECTABLE" !== arg0 && set7.has(arg0);
  if (hasItem) {
    VIEW_CHANNEL = closure_26;
  } else {
    VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  }
  return VIEW_CHANNEL;
};
export const getBasicAccessPermissions = function getBasicAccessPermissions(arg0) {
  let VIEW_CHANNEL;
  const hasItem = "SELECTABLE" !== arg0 && set7.has(arg0);
  if (hasItem) {
    VIEW_CHANNEL = closure_27;
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
export { ThreadChannelRecord };
export const createChannelRecordFromServer = function createChannelRecordFromServer(arg0, arg1) {
  obj = require("conjureTopicChannel");
  const result = obj.normalizeConjureTopicChannel(arg0);
  let GUILD_TEXT = result.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let fromServer = closure_32[GUILD_TEXT];
  if (fromServer == null) {
    fromServer = UnknownChannelRecord.fromServer;
  }
  return fromServer(result, arg1);
};
export const createChannelRecordFromInvite = function createChannelRecordFromInvite(type) {
  return createChannelRecord(type);
};
export const castChannelRecord = function castChannelRecord(arg0) {
  obj = require("conjureTopicChannel");
  const result = obj.normalizeConjureTopicChannelRecord(arg0);
  let GUILD_TEXT = result.type;
  if (GUILD_TEXT == null) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp6 = closure_33[GUILD_TEXT];
  if (tmp6 == null) {
    tmp6 = UnknownChannelRecord;
  }
  const tmpResult = TypeUtils;
  return tmpResult.dangerouslyCast(result, tmp6);
};
export { createChannelRecord };