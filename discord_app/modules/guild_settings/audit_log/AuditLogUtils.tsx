// === Module 17747: AuditLogUtils ===

// Module 17747 (AuditLogUtils)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import IntegerDefault from "Integer" /* 14 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import util from "util" /* 1115 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import _modDef4229 from "module_4229" /* 4229 */;
import DateUtils from "DateUtils" /* 4319 */;
import UserUtilsDefault from "UserUtils" /* 4482 */;
import TimeUtils from "TimeUtils" /* 4667 */;
import useChannelName from "useChannelName" /* 4791 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9962 */;
import GuildFeedItemTypes from "GuildFeedItemTypes" /* 17748 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17749 */;
import EmojiStore from "EmojiStore" /* 5545 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7210 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4825 */;
import StageInstanceStore from "StageInstanceStore" /* 1963 */;
import StickersStore from "StickersStore" /* 5588 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17745 */;

require = fn;
function getPermissionChanges(oldValue, newValue) {
  const deserializer = BigFlagUtilsAll;
  let num = 0;
  if (typeof oldValue === "string") {
    num = oldValue;
  }
  const deserializer2 = BigFlagUtilsAll;
  let num2 = 0;
  if (typeof newValue === "string") {
    num2 = newValue;
  }
  const deserializeResult = deserializer.deserialize(num);
  const deserializeResult1 = deserializer2.deserialize(num2);
  const tmpResult = BigFlagUtilsAll;
  BigFlagUtilsAll;
  const added = [];
  const removed = [];
  for (const key10027 in closure_1_23) {
    let tmp12 = constants7[key10027];
    let obj3 = BigFlagUtilsAll;
    if (obj3.has(removeResult, tmp12)) {
      let arr = added.push(tmp12);
    }
    let tmp13Result = BigFlagUtilsAll;
    if (!tmp13Result.has(tmp7, tmp12)) {
      continue;
    } else {
      let arr2 = removed.push(tmp12);
      continue;
    }
    continue;
  }
  return { added, removed };
}
function transformAppliedForumTagChange(oldValue, result3) {
  let tmp = oldValue;
  const arr = Array.isArray(oldValue.oldValue) ? tmp.oldValue : [];
  const arr2 = Array.isArray(tmp.newValue) ? tmp.newValue : [];
  const channel = ChannelStore.getChannel(result3.targetId);
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let channel1 = null;
  if (null != parent_id) {
    channel1 = ChannelStore.getChannel(channel.parent_id);
  }
  const obj2 = {};
  let availableTags;
  if (channel1 != null) {
    availableTags = channel1.availableTags;
  }
  if (availableTags == null) {
    availableTags = [];
  }
  const item = availableTags.forEach((id) => {
    obj2[id.id] = { name: id.name, emojiId: id.emojiId, emojiName: id.emojiName };
  });
  new Set(arr);
  new Set(arr2);
  const found = arr2.filter((item) => !set.has(item));
  const found1 = arr.filter((item) => !set1.has(item));
  items = [];
  for (const item10055 of found) {
    let tmp11 = obj2[item10055];
    if (tmp11 == null) {
      let obj3 = { id: item10055, name: item10055 };
      tmp11 = obj3;
    }
    let tmp15 = new.target;
    let tmp16 = new.target;
    let tmp19 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, tmp11);
    let arr3 = items.push(tmp19);
    continue;
  }
  for (const item10076 of found1) {
    let tmp23 = obj2[item10076];
    if (tmp23 == null) {
      let obj4 = { id: item10076, name: item10076 };
      tmp23 = obj4;
    }
    let tmp27 = new.target;
    let tmp28 = new.target;
    let tmp31 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, tmp23);
    let arr4 = items.push(tmp31);
    continue;
  }
  if (items.length > 0) {
    tmp = items;
  }
  return tmp;
}
function transformAvailableForumTagChange(newValue) {
  ({ oldValue, newValue } = newValue);
  if (!Array.isArray(oldValue)) {
    oldValue = [];
  }
  if (!Array.isArray(newValue)) {
    newValue = [];
  }
  if (0 === oldValue.length) {
    if (0 === newValue.length) {
      return newValue;
    }
  }
  obj = {};
  const obj2 = {};
  const item = oldValue.forEach((id) => {
    obj[id.id] = id;
  });
  const item1 = newValue.forEach((id) => {
    obj2[id.id] = id;
  });
  if (oldValue.length < newValue.length) {
    for (const key10023 in obj2) {
      if (null != obj[key10023]) {
        continue;
      } else {
        let AVAILABLE_TAG_ADD = AuditLogChangeKeys.AVAILABLE_TAG_ADD;
        let tmp5 = obj2[key10023];
        let tmp6 = null;
        if (null != tmp5) {
          let obj11 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
          ({ id: obj3.id, name: obj3.name } = tmp5);
          let emoji_id;
          if (0 !== tmp5.emoji_id) {
            emoji_id = tmp5.emoji_id;
          }
          obj11.emojiId = emoji_id;
          ({ emoji_name: obj3.emojiName, moderated: obj3.moderated } = tmp5);
          tmp6 = obj11;
        }
        let tmp8 = new.target;
        let tmp9 = new.target;
        let tmp33 = new AuditLogChange(AVAILABLE_TAG_ADD, null, tmp6);
        return tmp33;
      }
    }
  }
  if (oldValue.length > newValue.length) {
    for (const key10046 in obj) {
      if (null != obj2[key10046]) {
        continue;
      } else {
        let AVAILABLE_TAG_DELETE = AuditLogChangeKeys.AVAILABLE_TAG_DELETE;
        let tmp17 = obj[key10046];
        let tmp18 = null;
        if (null != tmp17) {
          let obj12 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
          ({ id: obj4.id, name: obj4.name } = tmp17);
          let emoji_id1;
          if (0 !== tmp17.emoji_id) {
            emoji_id1 = tmp17.emoji_id;
          }
          obj12.emojiId = emoji_id1;
          ({ emoji_name: obj4.emojiName, moderated: obj4.moderated } = tmp17);
          tmp18 = obj12;
        }
        let tmp20 = new.target;
        let tmp21 = new.target;
        let tmp152 = new AuditLogChange(AVAILABLE_TAG_DELETE, null, tmp18);
        return tmp152;
      }
    }
  }
  for (const key10070 in obj) {
    let tmp50 = obj[key10070];
    let tmp51 = obj2[key10070];
    let name;
    if (tmp51 != null) {
      name = tmp51.name;
    }
    if (name === tmp50.name) {
      let emoji_id2;
      if (tmp51 != null) {
        emoji_id2 = tmp51.emoji_id;
      }
      if (emoji_id2 === tmp50.emoji_id) {
        let emoji_name;
        if (tmp51 != null) {
          emoji_name = tmp51.emoji_name;
        }
      }
    }
    let AVAILABLE_TAG_EDIT = AuditLogChangeKeys.AVAILABLE_TAG_EDIT;
    let tmp32 = null;
    if (null != tmp50) {
      let obj13 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
      ({ id: obj5.id, name: obj5.name } = tmp50);
      let emoji_id3;
      if (0 !== tmp50.emoji_id) {
        emoji_id3 = tmp50.emoji_id;
      }
      obj13.emojiId = emoji_id3;
      ({ emoji_name: obj5.emojiName, moderated: obj5.moderated } = tmp50);
      tmp32 = obj13;
    }
    let tmp34 = null;
    if (null != tmp51) {
      let obj14 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
      ({ id: obj6.id, name: obj6.name } = tmp51);
      let emoji_id4;
      if (0 !== tmp51.emoji_id) {
        emoji_id4 = tmp51.emoji_id;
      }
      obj14.emojiId = emoji_id4;
      ({ emoji_name: obj6.emojiName, moderated: obj6.moderated } = tmp51);
      tmp34 = obj14;
    }
    let tmp36 = new.target;
    let tmp37 = new.target;
    let tmp302 = new AuditLogChange(AVAILABLE_TAG_EDIT, tmp32, tmp34);
    return tmp302;
  }
  return newValue;
}
const AuditLogChange = fn(17746).AuditLogChange;
const Constants = fn(1074);
({ AuditLogActions: closure_15, AuditLogChangeKeys } = Constants);
const AuditLogTargetTypes = Constants.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = Constants);
const ChannelFlags = fn(1965).ChannelFlags;
const AutomodTriggerType = fn(12005).AutomodTriggerType;
const GuildOnboardingMode = fn(7211).GuildOnboardingMode;
const GuildScheduledEventsConstants = fn(1964);
({ GuildScheduledEventEntityTypes: closure_33, GuildScheduledEventStatus: closure_34, GuildScheduledEventPrivacyLevel: closure_35 } = GuildScheduledEventsConstants);
let closure_36 = new LoggerDefault("AuditLogUtils");
let items = [fn(4667).TimeUnits.DAYS, fn(4667).TimeUnits.HOURS, fn(4667).TimeUnits.MINUTES, fn(4667).TimeUnits.SECONDS];
let closure_38 = { [AuditLogTargetTypes.CHANNEL]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.CHANNEL_OVERWRITE]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.INVITE]: { [AuditLogChangeKeys.INVITER_ID]: true, [AuditLogChangeKeys.USES]: true }, [AuditLogTargetTypes.WEBHOOK]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.APPLICATION_ID]: true }, [AuditLogTargetTypes.INTEGRATION]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.NAME]: true }, [AuditLogTargetTypes.THREAD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true }, [AuditLogTargetTypes.STICKER]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ASSET]: true, [AuditLogChangeKeys.FORMAT_TYPE]: true, [AuditLogChangeKeys.AVAILABLE]: true, [AuditLogChangeKeys.GUILD_ID]: true }, [AuditLogTargetTypes.GUILD_HOME]: { [AuditLogChangeKeys.ENTITY_TYPE]: true }, [AuditLogTargetTypes.GUILD_ONBOARDING]: { [AuditLogChangeKeys.PROMPTS]: true }, [AuditLogTargetTypes.GUILD_SOUNDBOARD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.SOUND_ID]: true } };
class ACTION_FILTER_ITEMS {
  constructor() {
    obj = { value: AuditLogActions.ALL, label: null, valueLabel: null };
    intl = closure_0(closure_3[18]).intl;
    obj.label = intl.string(closure_0(closure_3[18]).t.QxEVcv);
    intl2 = closure_0(closure_3[18]).intl;
    obj.valueLabel = intl2.string(closure_0(closure_3[18]).t.an9Ry3);
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    obj1 = { value: AuditLogActions.GUILD_UPDATE, label: null };
    intl3 = closure_0(closure_3[18]).intl;
    obj1.label = intl3.string(closure_0(closure_3[18]).t["5INZa3"]);
    items[1] = obj1;
    obj68 = { value: AuditLogActions.CHANNEL_CREATE, label: null };
    intl4 = closure_0(closure_3[18]).intl;
    obj68.label = intl4.string(closure_0(closure_3[18]).t["2uh4vJ"]);
    items[2] = obj68;
    obj69 = { value: AuditLogActions.CHANNEL_UPDATE, label: null };
    intl5 = closure_0(closure_3[18]).intl;
    obj69.label = intl5.string(closure_0(closure_3[18]).t.mGsBLV);
    items[3] = obj69;
    obj70 = { value: AuditLogActions.CHANNEL_DELETE, label: null };
    intl6 = closure_0(closure_3[18]).intl;
    obj70.label = intl6.string(closure_0(closure_3[18]).t.hCHzAr);
    items[4] = obj70;
    obj71 = { value: AuditLogActions.CHANNEL_OVERWRITE_CREATE, label: null };
    intl7 = closure_0(closure_3[18]).intl;
    obj71.label = intl7.string(closure_0(closure_3[18]).t["8TnAMP"]);
    items[5] = obj71;
    obj72 = { value: AuditLogActions.CHANNEL_OVERWRITE_UPDATE, label: null };
    intl8 = closure_0(closure_3[18]).intl;
    obj72.label = intl8.string(closure_0(closure_3[18]).t.Jqx0Bi);
    items[6] = obj72;
    obj73 = { value: AuditLogActions.CHANNEL_OVERWRITE_DELETE, label: null };
    intl9 = closure_0(closure_3[18]).intl;
    obj73.label = intl9.string(closure_0(closure_3[18]).t.gBXOr4);
    items[7] = obj73;
    obj74 = { value: AuditLogActions.MEMBER_KICK, label: null };
    intl10 = closure_0(closure_3[18]).intl;
    obj74.label = intl10.string(closure_0(closure_3[18]).t["Q1/hN8"]);
    items[8] = obj74;
    obj75 = { value: AuditLogActions.MEMBER_PRUNE, label: null };
    intl11 = closure_0(closure_3[18]).intl;
    obj75.label = intl11.string(closure_0(closure_3[18]).t.tOTTja);
    items[9] = obj75;
    obj76 = { value: AuditLogActions.MEMBER_BAN_ADD, label: null };
    intl12 = closure_0(closure_3[18]).intl;
    obj76.label = intl12.string(closure_0(closure_3[18]).t["NfPn+e"]);
    items[10] = obj76;
    obj77 = { value: AuditLogActions.MEMBER_BAN_REMOVE, label: null };
    intl13 = closure_0(closure_3[18]).intl;
    obj77.label = intl13.string(closure_0(closure_3[18]).t.XCsGfI);
    items[11] = obj77;
    obj78 = { value: AuditLogActions.MEMBER_UPDATE, label: null };
    intl14 = closure_0(closure_3[18]).intl;
    obj78.label = intl14.string(closure_0(closure_3[18]).t["F/jmNJ"]);
    items[12] = obj78;
    obj79 = { value: AuditLogActions.MEMBER_ROLE_UPDATE, label: null };
    intl15 = closure_0(closure_3[18]).intl;
    obj79.label = intl15.string(closure_0(closure_3[18]).t.zAveSI);
    items[13] = obj79;
    obj80 = { value: AuditLogActions.MEMBER_MOVE, label: null };
    intl16 = closure_0(closure_3[18]).intl;
    obj80.label = intl16.string(closure_0(closure_3[18]).t.QshteR);
    items[14] = obj80;
    obj81 = { value: AuditLogActions.MEMBER_DISCONNECT, label: null };
    intl17 = closure_0(closure_3[18]).intl;
    obj81.label = intl17.string(closure_0(closure_3[18]).t.Z45os7);
    items[15] = obj81;
    obj82 = { value: AuditLogActions.BOT_ADD, label: null };
    intl18 = closure_0(closure_3[18]).intl;
    obj82.label = intl18.string(closure_0(closure_3[18]).t.vuH24Z);
    items[16] = obj82;
    obj83 = { value: AuditLogActions.THREAD_CREATE, label: null };
    intl19 = closure_0(closure_3[18]).intl;
    obj83.label = intl19.string(closure_0(closure_3[18]).t["+zl0DG"]);
    items[17] = obj83;
    obj84 = { value: AuditLogActions.THREAD_UPDATE, label: null };
    intl20 = closure_0(closure_3[18]).intl;
    obj84.label = intl20.string(closure_0(closure_3[18]).t.rbIry3);
    items[18] = obj84;
    obj85 = { value: AuditLogActions.THREAD_DELETE, label: null };
    intl21 = closure_0(closure_3[18]).intl;
    obj85.label = intl21.string(closure_0(closure_3[18]).t.hFjNEA);
    items[19] = obj85;
    obj86 = { value: AuditLogActions.ROLE_CREATE, label: null };
    intl22 = closure_0(closure_3[18]).intl;
    obj86.label = intl22.string(closure_0(closure_3[18]).t.AbxKtv);
    items[20] = obj86;
    obj87 = { value: AuditLogActions.ROLE_UPDATE, label: null };
    intl23 = closure_0(closure_3[18]).intl;
    obj87.label = intl23.string(closure_0(closure_3[18]).t.t3Z6sU);
    items[21] = obj87;
    obj88 = { value: AuditLogActions.ROLE_DELETE, label: null };
    intl24 = closure_0(closure_3[18]).intl;
    obj88.label = intl24.string(closure_0(closure_3[18]).t.YsFpa4);
    items[22] = obj88;
    obj89 = { value: AuditLogActions.ONBOARDING_PROMPT_CREATE, label: null };
    intl25 = closure_0(closure_3[18]).intl;
    obj89.label = intl25.string(closure_0(closure_3[18]).t.ZV9tqc);
    items[23] = obj89;
    obj90 = { value: AuditLogActions.ONBOARDING_PROMPT_UPDATE, label: null };
    intl26 = closure_0(closure_3[18]).intl;
    obj90.label = intl26.string(closure_0(closure_3[18]).t.PcOdvX);
    items[24] = obj90;
    obj91 = { value: AuditLogActions.ONBOARDING_PROMPT_DELETE, label: null };
    intl27 = closure_0(closure_3[18]).intl;
    obj91.label = intl27.string(closure_0(closure_3[18]).t["+r33Na"]);
    items[25] = obj91;
    obj92 = { value: AuditLogActions.ONBOARDING_CREATE, label: null };
    intl28 = closure_0(closure_3[18]).intl;
    obj92.label = intl28.string(closure_0(closure_3[18]).t.uDADde);
    items[26] = obj92;
    obj93 = { value: AuditLogActions.ONBOARDING_UPDATE, label: null };
    intl29 = closure_0(closure_3[18]).intl;
    obj93.label = intl29.string(closure_0(closure_3[18]).t.J1H1wg);
    items[27] = obj93;
    obj94 = { value: AuditLogActions.HOME_SETTINGS_CREATE, label: null };
    intl30 = closure_0(closure_3[18]).intl;
    obj94.label = intl30.string(closure_0(closure_3[18]).t.Di4cvI);
    items[28] = obj94;
    obj95 = { value: AuditLogActions.HOME_SETTINGS_UPDATE, label: null };
    intl31 = closure_0(closure_3[18]).intl;
    obj95.label = intl31.string(closure_0(closure_3[18]).t.tzyrJH);
    items[29] = obj95;
    obj96 = { value: AuditLogActions.INVITE_CREATE, label: null };
    intl32 = closure_0(closure_3[18]).intl;
    obj96.label = intl32.string(closure_0(closure_3[18]).t["0BNJdX"]);
    items[30] = obj96;
    obj97 = { value: AuditLogActions.INVITE_UPDATE, label: null };
    intl33 = closure_0(closure_3[18]).intl;
    obj97.label = intl33.string(closure_0(closure_3[18]).t["o++obV"]);
    items[31] = obj97;
    obj98 = { value: AuditLogActions.INVITE_DELETE, label: null };
    intl34 = closure_0(closure_3[18]).intl;
    obj98.label = intl34.string(closure_0(closure_3[18]).t.iP40Az);
    items[32] = obj98;
    obj99 = { value: AuditLogActions.WEBHOOK_CREATE, label: null };
    intl35 = closure_0(closure_3[18]).intl;
    obj99.label = intl35.string(closure_0(closure_3[18]).t["tBF4+S"]);
    items[33] = obj99;
    obj100 = { value: AuditLogActions.WEBHOOK_UPDATE, label: null };
    intl36 = closure_0(closure_3[18]).intl;
    obj100.label = intl36.string(closure_0(closure_3[18]).t.eV3McO);
    items[34] = obj100;
    obj101 = { value: AuditLogActions.WEBHOOK_DELETE, label: null };
    intl37 = closure_0(closure_3[18]).intl;
    obj101.label = intl37.string(closure_0(closure_3[18]).t.AAL3K1);
    items[35] = obj101;
    obj102 = { value: AuditLogActions.EMOJI_CREATE, label: null };
    intl38 = closure_0(closure_3[18]).intl;
    obj102.label = intl38.string(closure_0(closure_3[18]).t.RuWm0V);
    items[36] = obj102;
    obj103 = { value: AuditLogActions.EMOJI_UPDATE, label: null };
    intl39 = closure_0(closure_3[18]).intl;
    obj103.label = intl39.string(closure_0(closure_3[18]).t.WzdUY7);
    items[37] = obj103;
    obj104 = { value: AuditLogActions.EMOJI_DELETE, label: null };
    intl40 = closure_0(closure_3[18]).intl;
    obj104.label = intl40.string(closure_0(closure_3[18]).t.c3dK2L);
    items[38] = obj104;
    obj105 = { value: AuditLogActions.MESSAGE_DELETE, label: null };
    intl41 = closure_0(closure_3[18]).intl;
    obj105.label = intl41.string(closure_0(closure_3[18]).t.daTfXh);
    items[39] = obj105;
    obj106 = { value: AuditLogActions.MESSAGE_BULK_DELETE, label: null };
    intl42 = closure_0(closure_3[18]).intl;
    obj106.label = intl42.string(closure_0(closure_3[18]).t.nrBxeh);
    items[40] = obj106;
    obj107 = { value: AuditLogActions.MESSAGE_PIN, label: null };
    intl43 = closure_0(closure_3[18]).intl;
    obj107.label = intl43.string(closure_0(closure_3[18]).t.MUldyN);
    items[41] = obj107;
    obj108 = { value: AuditLogActions.MESSAGE_UNPIN, label: null };
    intl44 = closure_0(closure_3[18]).intl;
    obj108.label = intl44.string(closure_0(closure_3[18]).t.n4zKhA);
    items[42] = obj108;
    obj109 = { value: AuditLogActions.INTEGRATION_CREATE, label: null };
    intl45 = closure_0(closure_3[18]).intl;
    obj109.label = intl45.string(closure_0(closure_3[18]).t.deNm8x);
    items[43] = obj109;
    obj110 = { value: AuditLogActions.INTEGRATION_UPDATE, label: null };
    intl46 = closure_0(closure_3[18]).intl;
    obj110.label = intl46.string(closure_0(closure_3[18]).t.HT7Sfg);
    items[44] = obj110;
    obj111 = { value: AuditLogActions.INTEGRATION_DELETE, label: null };
    intl47 = closure_0(closure_3[18]).intl;
    obj111.label = intl47.string(closure_0(closure_3[18]).t["+kJ09q"]);
    items[45] = obj111;
    obj112 = { value: AuditLogActions.STICKER_CREATE, label: null };
    intl48 = closure_0(closure_3[18]).intl;
    obj112.label = intl48.string(closure_0(closure_3[18]).t["3DzNjU"]);
    items[46] = obj112;
    obj113 = { value: AuditLogActions.STICKER_UPDATE, label: null };
    intl49 = closure_0(closure_3[18]).intl;
    obj113.label = intl49.string(closure_0(closure_3[18]).t.tdhW5b);
    items[47] = obj113;
    obj114 = { value: AuditLogActions.STICKER_DELETE, label: null };
    intl50 = closure_0(closure_3[18]).intl;
    obj114.label = intl50.string(closure_0(closure_3[18]).t["+ZhGOk"]);
    items[48] = obj114;
    obj115 = { value: AuditLogActions.STAGE_INSTANCE_CREATE, label: null };
    intl51 = closure_0(closure_3[18]).intl;
    obj115.label = intl51.string(closure_0(closure_3[18]).t.sPbjA6);
    items[49] = obj115;
    obj116 = { value: AuditLogActions.STAGE_INSTANCE_UPDATE, label: null };
    intl52 = closure_0(closure_3[18]).intl;
    obj116.label = intl52.string(closure_0(closure_3[18]).t.cW9LfJ);
    items[50] = obj116;
    obj117 = { value: AuditLogActions.STAGE_INSTANCE_DELETE, label: null };
    intl53 = closure_0(closure_3[18]).intl;
    obj117.label = intl53.string(closure_0(closure_3[18]).t["U1r+yD"]);
    items[51] = obj117;
    obj118 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE, label: null };
    intl54 = closure_0(closure_3[18]).intl;
    obj118.label = intl54.string(closure_0(closure_3[18]).t.H81Zyy);
    items[52] = obj118;
    obj119 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE, label: null };
    intl55 = closure_0(closure_3[18]).intl;
    obj119.label = intl55.string(closure_0(closure_3[18]).t["FM69l+"]);
    items[53] = obj119;
    obj120 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE, label: null };
    intl56 = closure_0(closure_3[18]).intl;
    obj120.label = intl56.string(closure_0(closure_3[18]).t.Rq28Bh);
    items[54] = obj120;
    obj121 = { value: AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE, label: null };
    intl57 = closure_0(closure_3[18]).intl;
    obj121.label = intl57.string(closure_0(closure_3[18]).t.iPdFOt);
    items[55] = obj121;
    obj122 = { value: AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE, label: null };
    intl58 = closure_0(closure_3[18]).intl;
    obj122.label = intl58.string(closure_0(closure_3[18]).t.gNq5z6);
    items[56] = obj122;
    obj123 = { value: AuditLogActions.AUTO_MODERATION_RULE_CREATE, label: null };
    intl59 = closure_0(closure_3[18]).intl;
    obj123.label = intl59.string(closure_0(closure_3[18]).t.f72Zqb);
    items[57] = obj123;
    obj124 = { value: AuditLogActions.AUTO_MODERATION_RULE_UPDATE, label: null };
    intl60 = closure_0(closure_3[18]).intl;
    obj124.label = intl60.string(closure_0(closure_3[18]).t.XeqIiv);
    items[58] = obj124;
    obj125 = { value: AuditLogActions.AUTO_MODERATION_RULE_DELETE, label: null };
    intl61 = closure_0(closure_3[18]).intl;
    obj125.label = intl61.string(closure_0(closure_3[18]).t.syAApU);
    items[59] = obj125;
    obj126 = { value: AuditLogActions.GUILD_HOME_FEATURE_ITEM, label: null };
    intl62 = closure_0(closure_3[18]).intl;
    obj126.label = intl62.string(closure_0(closure_3[18]).t.lhG5KN);
    items[60] = obj126;
    obj127 = { value: AuditLogActions.GUILD_HOME_REMOVE_ITEM, label: null };
    intl63 = closure_0(closure_3[18]).intl;
    obj127.label = intl63.string(closure_0(closure_3[18]).t.lRPRwS);
    items[61] = obj127;
    obj128 = { value: AuditLogActions.SOUNDBOARD_SOUND_CREATE, label: null };
    intl64 = closure_0(closure_3[18]).intl;
    obj128.label = intl64.string(closure_0(closure_3[18]).t.yoRi5r);
    items[62] = obj128;
    obj129 = { value: AuditLogActions.SOUNDBOARD_SOUND_UPDATE, label: null };
    intl65 = closure_0(closure_3[18]).intl;
    obj129.label = intl65.string(closure_0(closure_3[18]).t.uKlG0Z);
    items[63] = obj129;
    obj130 = { value: AuditLogActions.SOUNDBOARD_SOUND_DELETE, label: null };
    intl66 = closure_0(closure_3[18]).intl;
    obj130.label = intl66.string(closure_0(closure_3[18]).t.gq0iCT);
    items[64] = obj130;
    obj131 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_CREATE, label: null };
    intl67 = closure_0(closure_3[18]).intl;
    obj131.label = intl67.string(closure_0(closure_3[18]).t.rGr0YM);
    items[65] = obj131;
    obj132 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_DELETE, label: null };
    intl68 = closure_0(closure_3[18]).intl;
    obj132.label = intl68.string(closure_0(closure_3[18]).t.V9PEQ4);
    items[66] = obj132;
    return items;
  }
}
let obj = {
  [fn(4667).TimeUnits.SECONDS]: (seconds) => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.geSp4K, { seconds });
  },
  [fn(4667).TimeUnits.MINUTES]: (minutes) => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.iXLF9W, { minutes });
  },
  [fn(4667).TimeUnits.HOURS]: (hours) => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.xCjYxK, { hours });
  },
  [fn(4667).TimeUnits.DAYS]: (days) => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t["k2UNz+"], { days });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  targetType = targetType.targetType;
  if (AuditLogTargetTypes.GUILD === targetType) {
    const obj2 = {};
    obj2[AuditLogChangeKeys.NAME] = () => __3TkD(1115).t.CkDiNH;
    __3TkD = __3TkD(1115).t.RP3Ey3;
    __3TkD(1115).t.QAVj1Y;
    obj2[AuditLogChangeKeys.DESCRIPTION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj2[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1115).t.iLZ8Q9;
    obj2[AuditLogChangeKeys.SPLASH_HASH] = () => __3TkD(1115).t["4VV6dn"];
    obj2[AuditLogChangeKeys.DISCOVERY_SPLASH_HASH] = () => __3TkD(1115).t["2pds6p"];
    __3TkD = __3TkD(1115).t.Cxq4zO;
    __3TkD(1115).t["H7eE/9"];
    obj2[AuditLogChangeKeys.BANNER_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj2[AuditLogChangeKeys.OWNER_ID] = () => __3TkD(1115).t["8ltsLT"];
    obj2[AuditLogChangeKeys.REGION] = () => __3TkD(1115).t.X9r5Kf;
    obj2[AuditLogChangeKeys.PREFERRED_LOCALE] = () => __3TkD(1115).t.UnXuDS;
    __3TkD = __3TkD(1115).t.ClBuA4;
    __3TkD(1115).t["ms+xtL"];
    obj2[AuditLogChangeKeys.AFK_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj2[AuditLogChangeKeys.AFK_TIMEOUT] = () => __3TkD(1115).t.q21fHa;
    __3TkD = __3TkD(1115).t.H1VXaa;
    __3TkD(1115).t.XhtmxJ;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.OI6MG2;
    __3TkD(1115).t.lik3tI;
    obj2[AuditLogChangeKeys.RULES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.YxBKrY;
    __3TkD(1115).t.Ehsnij;
    obj2[AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj3 = {};
    obj3[constants2.NONE] = __3TkD(1115).t.voaCCQ;
    obj3[constants2.ELEVATED] = __3TkD(1115).t.pRNVwz;
    __3TkD = obj3;
    obj2[AuditLogChangeKeys.MFA_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1115).t.ADIty8;
    __3TkD(1115).t.nf58VY;
    obj2[AuditLogChangeKeys.WIDGET_ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t["6SBsDc"];
    __3TkD(1115).t.deQ5wO;
    obj2[AuditLogChangeKeys.WIDGET_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj4 = {};
    obj4[constants3.NONE] = __3TkD(1115).t.W27rsc;
    obj4[constants3.LOW] = __3TkD(1115).t["V8P+Pw"];
    obj4[constants3.MEDIUM] = __3TkD(1115).t.ERQFau;
    obj4[constants3.HIGH] = __3TkD(1115).t["83fN0j"];
    obj4[constants3.VERY_HIGH] = __3TkD(1115).t.PnkQJE;
    __3TkD = obj4;
    obj2[AuditLogChangeKeys.VERIFICATION_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    const obj5 = {};
    obj5[constants4.ALL_MESSAGES] = __3TkD(1115).t.LDi76A;
    obj5[constants4.ONLY_MENTIONS] = __3TkD(1115).t["6K83ba"];
    __3TkD = obj5;
    obj2[AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1115).t.Zplsov;
    __3TkD(1115).t.u6cArh;
    obj2[AuditLogChangeKeys.VANITY_URL_CODE] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj6 = {};
    obj6[constants5.DISABLED] = __3TkD(1115).t.fmOeL3;
    obj6[constants5.MEMBERS_WITHOUT_ROLES] = __3TkD(1115).t["4FghYw"];
    obj6[constants5.ALL_MEMBERS] = __3TkD(1115).t.olyrSm;
    __3TkD = obj6;
    obj2[AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1115).t.rBT0sn;
    obj2[AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    obj2[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => __3TkD(1115).t.YbouFH;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS] = () => __3TkD(1115).t.g3DMjB;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS] = () => __3TkD(1115).t["+fQAel"];
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS] = () => __3TkD(1115).t.E1fc4v;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES] = () => __3TkD(1115).t.XbwtSA;
    const obj7 = {};
    obj7[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
    const merged = Object.assign(obj7);
    return obj2;
  } else {
    if (AuditLogTargetTypes.CHANNEL !== targetType) {
      if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
        if (AuditLogTargetTypes.USER === targetType) {
          const obj8 = {};
          __3TkD = __3TkD(1115).t.qXDsHv;
          __3TkD(1115).t["m+qury"];
          __3TkD(1115).t.DvLvjF;
          obj8[AuditLogChangeKeys.NICK] = (newValue) => {
            if (null != newValue.newValue) {
              if (null != newValue.oldValue) {
                let tmp = __3TkD;
              }
              return tmp;
            }
            if (null != newValue.newValue) {
              tmp = _5kDYS3;
            } else if (null != newValue.oldValue) {
              tmp = lj_A4u;
            }
          };
          __3TkD = __3TkD(1115).t.mArLlW;
          __3TkD(1115).t.ddvVYG;
          obj8[AuditLogChangeKeys.DEAF] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t["bxs/lS"];
          __3TkD(1115).t.FjecQM;
          obj8[AuditLogChangeKeys.MUTE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj8[AuditLogChangeKeys.ROLES_REMOVE] = () => __3TkD(1115).t["+2SDWV"];
          obj8[AuditLogChangeKeys.ROLES_ADD] = () => __3TkD(1115).t["B3/3IJ"];
          obj8[AuditLogChangeKeys.PRUNE_DELETE_DAYS] = () => __3TkD(1115).t["+Cvc+D"];
          __3TkD = __3TkD(1115).t.LXTQr5;
          __3TkD(1115).t.LXTQr5;
          lj_A4u = __3TkD(1115).t.ULSdnE;
          obj8[AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL] = (newValue) => {
            if (null != newValue.newValue) {
              if (null != newValue.oldValue) {
                let tmp = __3TkD;
              }
              return tmp;
            }
            if (null != newValue.newValue) {
              tmp = _5kDYS3;
            } else if (null != newValue.oldValue) {
              tmp = lj_A4u;
            }
          };
          __3TkD = __3TkD(1115).t.NBPBui;
          obj8[AuditLogChangeKeys.BYPASSES_VERIFICATION] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj8[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => __3TkD(1115).t.YbouFH;
          const obj9 = {};
          obj9[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged1 = Object.assign(obj9);
          return obj8;
        } else if (AuditLogTargetTypes.ROLE === targetType) {
          const obj10 = {};
          __3TkD = __3TkD(1115).t.QBmlaD;
          __3TkD(1115).t["Lfs4r+"];
          obj10[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.XeYKWJ;
          __3TkD(1115).t.PSfeIj;
          obj10[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj10[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1115).t["9i/DvE"];
          obj10[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1115).t.pa1ZVh;
          const obj11 = { "#000000": __3TkD(1115).t.TK6E1H };
          __3TkD = obj11;
          __3TkD(1115).t["2FQFiw"];
          obj10[AuditLogChangeKeys.COLOR] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          obj10[AuditLogChangeKeys.COLORS] = (newValue) => {
            if (null == newValue.newValue.secondary_color) {
              let U44ttm = __3TkD(1115).t.U44ttm;
            } else {
              U44ttm = __3TkD(1115).t["WnSwL/"];
            }
            return U44ttm;
          };
          __3TkD = __3TkD(1115).t.gWfe24;
          __3TkD(1115).t["+tb8kN"];
          obj10[AuditLogChangeKeys.HOIST] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.LL8VFF;
          obj10[AuditLogChangeKeys.MENTIONABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj10[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1115).t["iEE79/"];
          obj10[AuditLogChangeKeys.UNICODE_EMOJI] = () => __3TkD(1115).t.KiLMM0;
          const obj12 = {};
          obj12[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged2 = Object.assign(obj12);
          return obj10;
        } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
          const obj13 = {};
          const obj14 = {};
          obj14[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged3 = Object.assign(obj14);
          __3TkD = __3TkD(1115).t["sNpuy/"];
          __3TkD(1115).t["3Ukc/g"];
          obj13[AuditLogChangeKeys.TITLE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.PP1q0x;
          __3TkD(1115).t.z7pYLg;
          obj13[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj13[AuditLogChangeKeys.OPTIONS] = () => __3TkD(1115).t["3G5C9+"];
          __3TkD = __3TkD(1115).t.v4WnR3;
          __3TkD(1115).t["6Qg3uC"];
          obj13[AuditLogChangeKeys.SINGLE_SELECT] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t["0MPAM6"];
          obj13[AuditLogChangeKeys.REQUIRED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          return obj13;
        } else if (AuditLogTargetTypes.GUILD_ONBOARDING === targetType) {
          const obj15 = {};
          const obj16 = {};
          obj16[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged4 = Object.assign(obj16);
          obj15[AuditLogChangeKeys.DEFAULT_CHANNEL_IDS] = () => __3TkD(1115).t["8M+D2s"];
          __3TkD = __3TkD(1115).t["EYd/ls"];
          __3TkD(1115).t["36OZeQ"];
          obj15[AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.V3u8PV;
          __3TkD(1115).t["r66lc/"];
          obj15[AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.SODVIs;
          obj15[AuditLogChangeKeys.ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          const obj17 = {};
          obj17[GuildOnboardingMode.ONBOARDING_ADVANCED] = __3TkD(1115).t.JbzVsh;
          obj17[GuildOnboardingMode.ONBOARDING_DEFAULT] = __3TkD(1115).t.aCgU0S;
          __3TkD = obj17;
          obj15[AuditLogChangeKeys.MODE] = (arg0) => __3TkD[arg0.newValue];
          return obj15;
        } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
          const obj18 = {};
          const obj19 = {};
          obj19[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged5 = Object.assign(obj19);
          obj18[AuditLogChangeKeys.WELCOME_MESSAGE] = () => __3TkD(1115).t.dKQ1xd;
          obj18[AuditLogChangeKeys.NEW_MEMBER_ACTIONS] = () => __3TkD(1115).t.jDUIno;
          obj18[AuditLogChangeKeys.RESOURCE_CHANNELS] = () => __3TkD(1115).t.SIX0mr;
          return obj18;
        } else if (AuditLogTargetTypes.INVITE === targetType) {
          const obj20 = {};
          obj20[AuditLogChangeKeys.CODE] = () => __3TkD(1115).t.rrRHgb;
          obj20[AuditLogChangeKeys.CHANNEL_ID] = () => __3TkD(1115).t.Q1vd5q;
          const obj21 = { 0: null };
          obj21[0] = __3TkD(1115).t.Yx8LNm;
          __3TkD = obj21;
          __3TkD(1115).t["3ygnwU"];
          obj20[AuditLogChangeKeys.MAX_USES] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          const obj22 = {};
          const intl = __3TkD(1115).intl;
          obj22[intl.string(__3TkD(1115).t.PqEzn8)] = __3TkD(1115).t.uWrLvw;
          __3TkD = obj22;
          __3TkD(1115).t["Q+5kcO"];
          obj20[AuditLogChangeKeys.MAX_AGE] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          __3TkD = __3TkD(1115).t.MWp6H7;
          obj20[AuditLogChangeKeys.TEMPORARY] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          const obj23 = {};
          obj23[__3TkD(8522).GuildInviteFlags.IS_GUEST_INVITE] = __3TkD(1115).t.XYZMbL;
          __3TkD = obj23;
          obj20[AuditLogChangeKeys.FLAGS] = (arg0) => __3TkD[arg0.newValue];
          obj20[AuditLogChangeKeys.ROLE_IDS] = () => __3TkD(1115).t.gb1Owj;
          const obj24 = {};
          obj24[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged6 = Object.assign(obj24);
          return obj20;
        } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
          const obj25 = {};
          __3TkD = __3TkD(1115).t.jhPprR;
          __3TkD(1115).t.ar4qYO;
          obj25[AuditLogChangeKeys.CHANNEL_ID] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.ZVGrzU;
          obj25[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj25[AuditLogChangeKeys.AVATAR_HASH] = () => __3TkD(1115).t.KB52Uj;
          obj25[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          return obj25;
        } else if (AuditLogTargetTypes.EMOJI === targetType) {
          const obj26 = {};
          __3TkD = __3TkD(1115).t.ahU1o5;
          obj26[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj27 = {};
          obj27[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged7 = Object.assign(obj27);
          return obj26;
        } else if (AuditLogTargetTypes.STICKER === targetType) {
          const obj28 = {};
          __3TkD = __3TkD(1115).t.cdl0Yo;
          __3TkD(1115).t.o3W2ly;
          obj28[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t["zwL+S2"];
          __3TkD(1115).t["VYfKA+"];
          obj28[AuditLogChangeKeys.TAGS] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.XeYKWJ;
          obj28[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj29 = {};
          obj29[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged8 = Object.assign(obj29);
          return obj28;
        } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
          const obj30 = {};
          __3TkD = __3TkD(1115).t.FI0m5x;
          obj30[AuditLogChangeKeys.ENABLE_EMOTICONS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          const obj31 = { 0: null, 1: null };
          obj31[0] = __3TkD(1115).t["1Bb1+u"];
          obj31[1] = __3TkD(1115).t.vjlW6m;
          __3TkD = obj31;
          obj30[AuditLogChangeKeys.EXPIRE_BEHAVIOR] = (arg0) => __3TkD[arg0.newValue];
          obj30[AuditLogChangeKeys.EXPIRE_GRACE_PERIOD] = () => __3TkD(1115).t.iovXMa;
          const obj32 = {};
          obj32[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged9 = Object.assign(obj32);
          return obj30;
        } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
          const obj33 = {};
          __3TkD = __3TkD(1115).t["m+veAn"];
          obj33[AuditLogChangeKeys.TOPIC] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj34 = {};
          obj34[constants13.GUILD_ONLY] = __3TkD(1115).t["EC+CDt"];
          obj34[constants13.PUBLIC] = __3TkD(1115).t["pK/WG0"];
          __3TkD = obj34;
          obj33[AuditLogChangeKeys.PRIVACY_LEVEL] = (arg0) => __3TkD[arg0.newValue];
          const obj35 = {};
          obj35[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged10 = Object.assign(obj35);
          return obj33;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT === targetType) {
          const obj36 = {};
          obj36[AuditLogChangeKeys.NAME] = () => __3TkD(1115).t["21EXHW"];
          obj36[AuditLogChangeKeys.DESCRIPTION] = () => __3TkD(1115).t.Vm1ofw;
          const obj37 = {};
          obj37[constants13.GUILD_ONLY] = __3TkD(1115).t["EC+CDt"];
          obj37[constants13.PUBLIC] = __3TkD(1115).t["pK/WG0"];
          __3TkD = obj37;
          obj36[AuditLogChangeKeys.PRIVACY_LEVEL] = (arg0) => __3TkD[arg0.newValue];
          const obj38 = {};
          obj38[constants12.SCHEDULED] = __3TkD(1115).t.hXKDgq;
          obj38[constants12.ACTIVE] = __3TkD(1115).t.lRX1nz;
          obj38[constants12.COMPLETED] = __3TkD(1115).t["/eFIhq"];
          obj38[constants12.CANCELED] = __3TkD(1115).t.NWIYhj;
          __3TkD = obj38;
          obj36[AuditLogChangeKeys.STATUS] = (arg0) => __3TkD[arg0.newValue];
          const obj39 = {};
          obj39[constants11.NONE] = __3TkD(1115).t["6sO3Ss"];
          obj39[constants11.STAGE_INSTANCE] = __3TkD(1115).t["Wo+s1y"];
          obj39[constants11.VOICE] = __3TkD(1115).t.XCVaIL;
          obj39[constants11.EXTERNAL] = __3TkD(1115).t.IvhAj2;
          __3TkD = obj39;
          obj36[AuditLogChangeKeys.ENTITY_TYPE] = (arg0) => __3TkD[arg0.newValue];
          __3TkD = __3TkD(1115).t.yJBIcX;
          __3TkD(1115).t["+PqSsi"];
          obj36[AuditLogChangeKeys.CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.GaMBHy;
          __3TkD(1115).t.PsICk0;
          obj36[AuditLogChangeKeys.LOCATION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.S3vcRK;
          obj36[AuditLogChangeKeys.IMAGE_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          const obj40 = {};
          obj40[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged11 = Object.assign(obj40);
          return obj36;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          const obj41 = {};
          __3TkD = __3TkD(1115).t.zMIYVg;
          __3TkD(1115).t.fzF8Gd;
          obj41[AuditLogChangeKeys.SCHEDULED_START_TIME] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.vONSQA;
          obj41[AuditLogChangeKeys.SCHEDULED_END_TIME] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          obj41[AuditLogChangeKeys.IS_CANCELED] = (oldValue) => {
            if (null != oldValue.oldValue) {
              if (!oldValue.oldValue) {
                if (oldValue.newValue) {
                  return __3TkD(1115).t["7RkicW"];
                }
              }
              if (oldValue.oldValue) {
                if (!oldValue.newValue) {
                  return __3TkD(1115).t.dRNTWW;
                }
              }
            }
          };
          const obj42 = {};
          obj42[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged12 = Object.assign(obj42);
          return obj41;
        } else if (AuditLogTargetTypes.THREAD === targetType) {
          const obj43 = {};
          __3TkD = __3TkD(1115).t.tUKRzX;
          __3TkD(1115).t.kPCHON;
          obj43[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.jDi9FK;
          __3TkD(1115).t.F6dvbT;
          obj43[AuditLogChangeKeys.ARCHIVED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.JSy1QW;
          __3TkD(1115).t.C7Jgo8;
          obj43[AuditLogChangeKeys.LOCKED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.dxNUs9;
          __3TkD(1115).t.biJvYG;
          obj43[AuditLogChangeKeys.INVITABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.LuaG3y;
          __3TkD(1115).t["18d9qr"];
          obj43[AuditLogChangeKeys.AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t["7lirhF"];
          obj43[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj43[AuditLogChangeKeys.FLAGS] = () => __3TkD(1115).t.sSAQtj;
          obj43[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => __3TkD(1115).t.H86QQU;
          obj43[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => __3TkD(1115).t["8QOseg"];
          const obj44 = {};
          obj44[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged13 = Object.assign(obj44);
          return obj43;
        } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
          const changes = targetType.changes;
          const obj45 = {};
          const obj46 = {};
          obj46[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged14 = Object.assign(obj46);
          __3TkD = obj45;
          if (changes != null) {
            const item = changes.forEach((newValue) => {
              if (newValue.newValue) {
                if (newValue.newValue.permission) {
                  __3TkD[key] = () => closure_1_0(1115).t["JH+89C"];
                } else {
                  __3TkD[key] = () => closure_1_0(1115).t.HUrFDu;
                }
              } else {
                __3TkD[newValue.key] = () => closure_1_0(1115).t.vynxnV;
              }
            });
          }
          return obj45;
        } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
          const obj47 = {};
          obj47[AuditLogChangeKeys.NAME] = () => __3TkD(1115).t.XwxAJT;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE] = () => __3TkD(1115).t.fx0pyl;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE] = () => __3TkD(1115).t["46Y+L5"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ACTIONS] = () => __3TkD(1115).t["8efxfv"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ENABLED] = (newValue) => {
            let oldValue = newValue.newValue;
            if (oldValue == null) {
              oldValue = newValue.oldValue;
            }
            if (true === oldValue) {
              let Wrg9Jn = __3TkD(1115).t.fCmxC2;
            } else {
              Wrg9Jn = __3TkD(1115).t.Wrg9Jn;
            }
            return Wrg9Jn;
          };
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES] = () => __3TkD(1115).t.TRb7Nx;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS] = () => __3TkD(1115).t.mzitLE;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA] = () => __3TkD(1115).t["h/lM65"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS] = () => __3TkD(1115).t["9V2yaC"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS] = () => __3TkD(1115).t["4Qe9ny"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS] = () => __3TkD(1115).t.GyZtxp;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS] = () => __3TkD(1115).t.OQDadc;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST] = () => __3TkD(1115).t["FvvR+K"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST] = () => __3TkD(1115).t.p5nSvy;
          const obj48 = {};
          obj48[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged15 = Object.assign(obj48);
          return obj47;
        } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
          const obj49 = {};
          __3TkD = __3TkD(1115).t.VOtRSO;
          __3TkD(1115).t.OK7B8E;
          obj49[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.igrDB9;
          __3TkD(1115).t.L5lDFJ;
          obj49[AuditLogChangeKeys.VOLUME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1115).t.IIanaY;
          __3TkD(1115).t["z4w4U/"];
          __3TkD(1115).t.V8TfyU;
          obj49[AuditLogChangeKeys.EMOJI_NAME] = (newValue) => {
            if (null != newValue.newValue) {
              if (null != newValue.oldValue) {
                let tmp = __3TkD;
              }
              return tmp;
            }
            if (null != newValue.newValue) {
              tmp = _5kDYS3;
            } else if (null != newValue.oldValue) {
              tmp = lj_A4u;
            }
          };
          __3TkD = __3TkD(1115).t.ainxMB;
          lj_A4u = __3TkD(1115).t["8crtns"];
          obj49[AuditLogChangeKeys.EMOJI_ID] = (newValue) => {
            if (null != newValue.newValue) {
              if (null != newValue.oldValue) {
                let tmp = __3TkD;
              }
              return tmp;
            }
            if (null != newValue.newValue) {
              tmp = _5kDYS3;
            } else if (null != newValue.oldValue) {
              tmp = lj_A4u;
            }
          };
          const obj50 = {};
          obj50[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged16 = Object.assign(obj50);
          return obj49;
        } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
          const obj51 = {};
          obj51[AuditLogChangeKeys.STATUS] = () => __3TkD(1115).t.HyCSnI;
          const obj52 = {};
          obj52[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged17 = Object.assign(obj52);
          return obj51;
        } else if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION === targetType) {
          const obj53 = {};
          obj53[AuditLogChangeKeys.VERIFICATION_ENABLED] = (newValue) => {
            if (true === newValue.newValue) {
              let WYT6ka = __3TkD(1115).t.fnkzDY;
            } else {
              WYT6ka = __3TkD(1115).t.WYT6ka;
            }
            return WYT6ka;
          };
          obj53[AuditLogChangeKeys.MANUAL_APPROVAL_ENABLED] = (newValue) => {
            if (true === newValue.newValue) {
              let WxyOtj = __3TkD(1115).t.jzSvVd;
            } else {
              WxyOtj = __3TkD(1115).t.WxyOtj;
            }
            return WxyOtj;
          };
          const obj54 = {};
          obj54[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          const merged18 = Object.assign(obj54);
          return obj53;
        } else if (AuditLogTargetTypes.GUILD_PROFILE === targetType) {
          const obj55 = {};
          obj55[AuditLogChangeKeys.DESCRIPTION] = () => __3TkD(1115).t.nsUZKY;
          obj55[AuditLogChangeKeys.BRAND_COLOR_PRIMARY] = () => __3TkD(1115).t.qe9mgN;
          obj55[AuditLogChangeKeys.CUSTOM_BANNER_HASH] = () => __3TkD(1115).t["04b5KC"];
          obj55[AuditLogChangeKeys.TRAITS] = () => __3TkD(1115).t.dEy9WO;
          obj55[AuditLogChangeKeys.GAME_APPLICATION_IDS] = () => __3TkD(1115).t["8BOT3x"];
          obj55[AuditLogChangeKeys.VISIBILITY] = () => __3TkD(1115).t.bCl1Ep;
          __3TkD = __3TkD(1115).t.ix1dnX;
          obj55[AuditLogChangeKeys.SERVER_TAG] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          return obj55;
        } else {
          obj = {};
          obj[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
          return obj;
        }
      }
    }
    const obj56 = {};
    __3TkD = __3TkD(1115).t.f8Rh0U;
    __3TkD(1115).t.ebD4Qp;
    obj56[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.isS8te;
    __3TkD(1115).t.t5uBis;
    obj56[AuditLogChangeKeys.POSITION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.esQcxn;
    __3TkD(1115).t["m+veAn"];
    __3TkD(1115).t["ws/1FA"];
    obj56[AuditLogChangeKeys.TOPIC] = (newValue) => {
      if (null != newValue.newValue) {
        if (null != newValue.oldValue) {
          let tmp = __3TkD;
        }
        return tmp;
      }
      if (null != newValue.newValue) {
        tmp = _5kDYS3;
      } else if (null != newValue.oldValue) {
        tmp = lj_A4u;
      }
    };
    __3TkD = __3TkD(1115).t.fw81ak;
    __3TkD(1115).t.MFNlgZ;
    obj56[AuditLogChangeKeys.BITRATE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t["6kajxx"];
    __3TkD(1115).t.eGOlmU;
    __3TkD(1115).t["0JMZdz"];
    obj56[AuditLogChangeKeys.RTC_REGION_OVERRIDE] = (newValue) => {
      if (null != newValue.newValue) {
        if (null != newValue.oldValue) {
          let tmp = __3TkD;
        }
        return tmp;
      }
      if (null != newValue.newValue) {
        tmp = _5kDYS3;
      } else if (null != newValue.oldValue) {
        tmp = lj_A4u;
      }
    };
    __3TkD = __3TkD(1115).t.wk5t7p;
    __3TkD(1115).t.XgjCEh;
    obj56[AuditLogChangeKeys.USER_LIMIT] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t["7lirhF"];
    __3TkD(1115).t.j4CCJR;
    obj56[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.fnhin8;
    __3TkD(1115).t.mcNs5B;
    obj56[AuditLogChangeKeys.APPLICATION_ID] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    obj56[AuditLogChangeKeys.PERMISSIONS_RESET] = () => __3TkD(1115).t["+vSBFY"];
    obj56[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1115).t.EKLJv8;
    obj56[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1115).t.U3rO5X;
    obj56[AuditLogChangeKeys.REASON] = () => __3TkD(1115).t["2IW3C5"];
    __3TkD = __3TkD(1115).t.H8Ri2Y;
    __3TkD(1115).t.WW6cJw;
    obj56[AuditLogChangeKeys.NSFW] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.Vn5zn2;
    __3TkD(1115).t.aq4uWI;
    obj56[AuditLogChangeKeys.TYPE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.e68fAU;
    __3TkD(1115).t.djbES0;
    obj56[AuditLogChangeKeys.VIDEO_QUALITY_MODE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.nYz2mg;
    __3TkD(1115).t.oczvRI;
    obj56[AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1115).t.tOJ8h7;
    __3TkD(1115).t.WaSgzk;
    lj_A4u = __3TkD(1115).t["lj+A4u"];
    obj56[AuditLogChangeKeys.DEFAULT_THREAD_RATE_LIMIT_PER_USER] = (newValue) => {
      if (null != newValue.newValue) {
        if (null != newValue.oldValue) {
          let tmp = __3TkD;
        }
        return tmp;
      }
      if (null != newValue.newValue) {
        tmp = _5kDYS3;
      } else if (null != newValue.oldValue) {
        tmp = lj_A4u;
      }
    };
    obj56[AuditLogChangeKeys.FLAGS] = () => __3TkD(1115).t.ImCQko;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => __3TkD(1115).t.H86QQU;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_EDIT] = () => __3TkD(1115).t.YtUzls;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => __3TkD(1115).t["8QOseg"];
    __3TkD = __3TkD(1115).t["+/3TkD"];
    obj56[AuditLogChangeKeys.LINKED_LOBBY] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    return obj56;
  }
};
export const shouldNotRenderChangeDetail = function shouldNotRenderChangeDetail(log, key) {
  if (log.actionType === constants10.DELETE) {
    if (log.action !== constants.MEMBER_BAN_ADD) {
      if (log.action !== constants.MEMBER_KICK) {
        if (log.action !== constants.MEMBER_PRUNE) {
          return key.key !== AuditLogChangeKeys.REASON;
        }
      }
    }
  }
  let tmp3 = null != tmp2;
  if (tmp3) {
    tmp3 = true === tmp2[key.key];
  }
  return tmp3;
};
export const checkChangesToRender = function checkChangesToRender(log) {
  const changes = log.changes;
  return null != changes && changes.some((key) => {
    if (log.actionType === constants10.DELETE) {
      if (log.action !== constants.MEMBER_BAN_ADD) {
        if (log.action !== constants.MEMBER_KICK) {
          if (log.action !== constants.MEMBER_PRUNE) {
            let tmp4 = key.key !== AuditLogChangeKeys.REASON;
          }
          return !tmp4;
        }
      }
    }
    tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = true === tmp3[key.key];
    }
  });
};
export { ACTION_FILTER_ITEMS };
export const findChangeByKey = function findChangeByKey(arg0, changes) {
  closure_0 = arg0;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === ROLES_REMOVE);
  }
  return found;
};
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  const found = ACTION_FILTER_ITEMS().find((value) => value.value === action.action);
  const action = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found1 = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found1 = changes.find((key) => key.key === ROLES_REMOVE);
  }
  if (null != found1) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.z3wbj8);
  } else {
    stringResult = undefined;
    if (found != null) {
      stringResult = found.label;
    }
    if (stringResult == null) {
      stringResult = null;
    }
  }
  return stringResult;
};
export const getSimpleAuditLogTitleContextFromChange = function getSimpleAuditLogTitleContextFromChange(changes) {
  let ROLES_REMOVE = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === ROLES_REMOVE);
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_ADD;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    let found1 = changes1.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes2 = changes.changes;
    let found2 = changes2.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found2 = [];
  }
  if (null != found) {
    let newValue;
    if (found != null) {
      newValue = found.newValue;
    }
    if (null != newValue) {
      let newValue1;
      if (found != null) {
        newValue1 = found.newValue;
      }
      const date = new Date(newValue1);
      const time1 = date.getTime();
      const diff = time1 - SnowflakeUtilsDefault.extractTimestamp(changes.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const timeAndUnit = TimeUtils.getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === TimeUtils.TimeUnits.SECONDS) {
              const _Math2 = Math;
              let time = Math.round(diff / 1000);
            } else {
              time = timeAndUnit.time;
            }
            return obj[unit](time);
          }
        }
      }
      return null;
    } else {
      let oldValue;
      if (found != null) {
        oldValue = found.oldValue;
      }
      if (null != oldValue) {
        const intl4 = util.intl;
        return intl4.string(util.t.MA1ltr);
      }
    }
    return null;
  } else {
    if (tmp3) {
      if (tmp4) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.RdMMew);
      }
      return stringResult;
    }
    if (tmp3) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["4GQqs8"]);
    } else {
      stringResult = null;
      if (tmp4) {
        const intl = util.intl;
        stringResult = intl.string(util.t["8mQ6x0"]);
      }
    }
  }
};
export const getSimpleAuditLogChangeDetails = function getSimpleAuditLogChangeDetails(changes) {
  let ROLES_REMOVE = AuditLogChangeKeys.ROLES_ADD;
  if (null != changes.changes) {
    changes = changes.changes;
    let found = changes.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found = [];
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    let found1 = changes1.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  if (found != null) {
    let mapped = found.map((newValue) => {
      newValue = newValue.newValue;
      let joined;
      if (newValue != null) {
        const mapped = newValue.map((name) => name.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    let joined = mapped.join(", ");
  }
  if (found1 != null) {
    const mapped1 = found1.map((newValue) => {
      newValue = newValue.newValue;
      let joined;
      if (newValue != null) {
        const mapped = newValue.map((name) => name.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    const joined1 = mapped1.join(", ");
  }
  if (found.length > 0) {
    if (found1.length > 0) {
      const intl3 = util.intl;
      obj = { roleNamesAdded: joined, roleNamesRemoved: joined1 };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t.tZw1EW, obj);
    }
    return formatToPlainStringResult;
  }
  if (found.length > 0) {
    const intl2 = util.intl;
    const obj2 = { roleNames: joined };
    formatToPlainStringResult = intl2.formatToPlainString(util.t["/mTqt5"], obj2);
  } else {
    formatToPlainStringResult = null;
    if (found1.length > 0) {
      const intl = util.intl;
      const obj3 = { roleNames: joined1 };
      formatToPlainStringResult = intl.formatToPlainString(util.t.Wk4pAJ, obj3);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  if (constants.GUILD_UPDATE === action) {
    return util.t.LjZO31;
  } else if (constants.CHANNEL_CREATE === action) {
    let found = null;
    if (null != log.changes) {
      const changes = log.changes;
      found = changes.find((key) => key.key === constants.TYPE);
    }
    if (null == found) {
      const _Error2 = Error;
      const error = new Error("[AuditLog] Could not find type change for channel create");
      throw error;
    } else {
      const newValue3 = found.newValue;
      if (constants6.GUILD_STAGE_VOICE === newValue3) {
        return util.t["OKp4+o"];
      } else if (constants6.GUILD_VOICE === newValue3) {
        return util.t.NPOy4G;
      } else if (constants6.GUILD_CATEGORY === newValue3) {
        return util.t.T3KIjz;
      } else if (constants6.GUILD_FORUM === newValue3) {
        return util.t.VvNgHX;
      } else if (constants6.GUILD_MEDIA === newValue3) {
        return util.t["4NWSxa"];
      } else if (constants6.GUILD_ANNOUNCEMENT === newValue3) {
        return util.t.eYP6UV;
      } else {
        return util.t.wrYNG2;
      }
    }
  } else if (constants.CHANNEL_UPDATE === action) {
    return util.t.nTYk6B;
  } else if (constants.CHANNEL_DELETE === action) {
    return util.t.ynfvkm;
  } else if (constants.CHANNEL_OVERWRITE_CREATE === action) {
    return util.t.l5Cu1a;
  } else if (constants.CHANNEL_OVERWRITE_UPDATE === action) {
    return util.t.uhtbNU;
  } else if (constants.CHANNEL_OVERWRITE_DELETE === action) {
    return util.t["HASt/3"];
  } else if (constants.MEMBER_KICK === action) {
    return util.t.B5hDZX;
  } else if (constants.MEMBER_PRUNE === action) {
    return util.t.qKOZTP;
  } else if (constants.MEMBER_BAN_ADD === action) {
    return util.t["XklUm/"];
  } else if (constants.MEMBER_BAN_REMOVE === action) {
    return util.t.o3Y6HD;
  } else if (constants.MEMBER_UPDATE === action) {
    return util.t.pznhLN;
  } else if (constants.MEMBER_ROLE_UPDATE === action) {
    return util.t.Vngfia;
  } else if (constants.MEMBER_MOVE === action) {
    return util.t.Yt6NkU;
  } else if (constants.MEMBER_DISCONNECT === action) {
    return util.t.K4eCZw;
  } else if (constants.BOT_ADD === action) {
    return util.t.fWvX0G;
  } else if (constants.ROLE_CREATE === action) {
    return util.t.UTLTx6;
  } else if (constants.ROLE_UPDATE === action) {
    return util.t.NRbN18;
  } else if (constants.ROLE_DELETE === action) {
    return util.t["4s63tb"];
  } else if (constants.INVITE_CREATE === action) {
    return util.t.YHOXWy;
  } else if (constants.INVITE_UPDATE === action) {
    return util.t.ja3kGS;
  } else if (constants.INVITE_DELETE === action) {
    return util.t["3n/iWk"];
  } else if (constants.WEBHOOK_CREATE === action) {
    return util.t.MhYhil;
  } else if (constants.WEBHOOK_UPDATE === action) {
    return util.t["6GTlWB"];
  } else if (constants.WEBHOOK_DELETE === action) {
    return util.t.in0VjZ;
  } else if (constants.EMOJI_CREATE === action) {
    return util.t["7vekRO"];
  } else if (constants.EMOJI_UPDATE === action) {
    return util.t.IsCKfh;
  } else if (constants.EMOJI_DELETE === action) {
    return util.t.JnUaVG;
  } else if (constants.STICKER_CREATE === action) {
    return util.t.DRZifq;
  } else if (constants.STICKER_UPDATE === action) {
    return util.t.bhujGc;
  } else if (constants.STICKER_DELETE === action) {
    return util.t.rGEP9U;
  } else if (constants.MESSAGE_DELETE === action) {
    return util.t["HPkD+M"];
  } else if (constants.MESSAGE_BULK_DELETE === action) {
    return util.t["3RIvLE"];
  } else if (constants.MESSAGE_PIN === action) {
    return util.t.Yna7E7;
  } else if (constants.MESSAGE_UNPIN === action) {
    return util.t.NCxXUW;
  } else if (constants.INTEGRATION_CREATE === action) {
    return util.t.HYvCb3;
  } else if (constants.INTEGRATION_UPDATE === action) {
    return util.t.ibCCOS;
  } else if (constants.INTEGRATION_DELETE === action) {
    return util.t["8zScWY"];
  } else if (constants.STAGE_INSTANCE_CREATE === action) {
    return util.t["n7x/DF"];
  } else if (constants.STAGE_INSTANCE_UPDATE === action) {
    return util.t["0hQYU4"];
  } else if (constants.STAGE_INSTANCE_DELETE === action) {
    if (null != log.userId) {
      let prop = util.t["Oi/in9"];
    } else {
      prop = util.t["7ZIFm9"];
    }
    return prop;
  } else if (constants.GUILD_SCHEDULED_EVENT_CREATE === action) {
    return util.t.S7k52p;
  } else if (constants.GUILD_SCHEDULED_EVENT_UPDATE === action) {
    return util.t.ebTK11;
  } else if (constants.GUILD_SCHEDULED_EVENT_DELETE === action) {
    return util.t["/ARPKQ"];
  } else {
    if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
      if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
        if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
          return util.t.zYb2da;
        } else if (constants.THREAD_CREATE === action) {
          let found1 = null;
          if (null != log.changes) {
            const changes1 = log.changes;
            found1 = changes1.find((key) => key.key === constants.TYPE);
          }
          if (null == found1) {
            const _Error = Error;
            const error1 = new Error("[AuditLog] Could not find type change for thread create");
            throw error1;
          } else {
            const newValue2 = found1.newValue;
            if (constants6.PRIVATE_THREAD === newValue2) {
              return util.t.Br0y5w;
            } else if (tmp200.ANNOUNCEMENT_THREAD === newValue2) {
              return util.t["6uaMmO"];
            } else {
              return util.t["2cxQ7G"];
            }
          }
        } else if (constants.THREAD_UPDATE === action) {
          return util.t.PSsy4t;
        } else if (constants.THREAD_DELETE === action) {
          return util.t.s3Khn8;
        } else if (constants.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
          return util.t.uzCqBm;
        } else if (constants.AUTO_MODERATION_BLOCK_MESSAGE === action) {
          return util.t.NqWv2K;
        } else if (constants.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
          const options = log.options;
          let prop1;
          if (options != null) {
            prop1 = options.auto_moderation_rule_trigger_type;
          }
          if (prop1 === str.toString()) {
            let SD0PwJ = util.t.YQsjej;
          } else {
            SD0PwJ = util.t.SD0PwJ;
          }
          return SD0PwJ;
        } else if (constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
          return util.t.Vk4TwX;
        } else if (constants.AUTO_MODERATION_QUARANTINE_USER === action) {
          return util.t["/W5u5o"];
        } else if (constants.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
          return util.t.ONvWyr;
        } else if (constants.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
          return util.t["ryGLk+"];
        } else if (constants.AUTO_MODERATION_RULE_CREATE === action) {
          return util.t["NKljj+"];
        } else if (constants.AUTO_MODERATION_RULE_UPDATE === action) {
          return util.t["3wEA9u"];
        } else if (constants.AUTO_MODERATION_RULE_DELETE === action) {
          return util.t.umua3n;
        } else if (constants.ONBOARDING_PROMPT_CREATE === action) {
          return util.t["/8A1g2"];
        } else if (constants.ONBOARDING_PROMPT_UPDATE === action) {
          return util.t.ArIrWI;
        } else if (constants.ONBOARDING_PROMPT_DELETE === action) {
          return util.t.IuBTao;
        } else if (constants.ONBOARDING_CREATE === action) {
          return util.t["wDaq3/"];
        } else if (constants.ONBOARDING_UPDATE === action) {
          return util.t["yONu/l"];
        } else if (constants.HOME_SETTINGS_CREATE === action) {
          return util.t.dSdCjG;
        } else if (constants.HOME_SETTINGS_UPDATE === action) {
          return util.t.XHE8qv;
        } else if (constants.GUILD_HOME_FEATURE_ITEM === action) {
          let found2 = null;
          if (null != log.changes) {
            const changes2 = log.changes;
            found2 = changes2.find((key) => key.key === constants.ENTITY_TYPE);
          }
          if (null == found2) {
            return util.t["UZ+U3A"];
          } else {
            const newValue = found2.newValue;
            if (GuildFeedItemTypes.GuildFeedItemTypes.MESSAGE === newValue) {
              return util.t["PyEa+J"];
            } else if (GuildFeedItemTypes.GuildFeedItemTypes.FORUM_POST === newValue) {
              return util.t.hCuAb1;
            } else {
              return util.t["UZ+U3A"];
            }
          }
        } else if (constants.GUILD_HOME_REMOVE_ITEM === action) {
          return util.t.kPReun;
        } else if (constants.SOUNDBOARD_SOUND_CREATE === action) {
          return util.t["0PD83V"];
        } else if (constants.SOUNDBOARD_SOUND_UPDATE === action) {
          return util.t.CM8n1w;
        } else if (constants.SOUNDBOARD_SOUND_DELETE === action) {
          return util.t["kVz4/0"];
        } else if (constants.VOICE_CHANNEL_STATUS_CREATE === action) {
          return util.t.MWjnU7;
        } else if (constants.VOICE_CHANNEL_STATUS_DELETE === action) {
          return util.t.aS8Krq;
        } else if (constants.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
          return util.t["NUKUb+"];
        } else if (constants.GUILD_PROFILE_UPDATE === action) {
          return util.t.Ed6hF1;
        } else if (constants.GUILD_MIGRATE_PIN_PERMISSION === action) {
          return util.t["3Ne7MA"];
        } else if (constants.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
          return util.t["naflH+"];
        } else {
          return null;
        }
      }
    }
    return util.t["8qCI36"];
  }
};
export const getStringForAddedChannelFlag = function getStringForAddedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["5G8ZD4"]);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["4YLtzC"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = util.intl;
    return intl.string(util.t["1QLRYb"]);
  } else {
    return null;
  }
};
export const getStringForRemovedChannelFlag = function getStringForRemovedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.S5kuWQ);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["8qpgcz"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = util.intl;
    return intl.string(util.t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(item, log) {
  if (constants7.CREATE_INSTANT_INVITE === item) {
    const intl55 = util.intl;
    return intl55.string(util.t.zJrgTG);
  } else if (constants7.KICK_MEMBERS === item) {
    const intl54 = util.intl;
    return intl54.string(util.t.pBNv6i);
  } else if (constants7.BAN_MEMBERS === item) {
    const intl53 = util.intl;
    return intl53.string(util.t.oTBA7N);
  } else if (constants7.ADMINISTRATOR === item) {
    const intl52 = util.intl;
    return intl52.string(util.t.PGvZqX);
  } else if (constants7.MANAGE_CHANNELS === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      if (log.targetType !== tmp103.CHANNEL_OVERWRITE) {
        const intl50 = util.intl;
        let stringResult = intl50.string(util.t["9qLtWs"]);
      }
      return stringResult;
    }
    const intl51 = util.intl;
    stringResult = intl51.string(util.t.nAw15L);
  } else if (constants7.MANAGE_GUILD === item) {
    const intl49 = util.intl;
    return intl49.string(util.t.QZRcfO);
  } else if (constants7.VIEW_GUILD_ANALYTICS === item) {
    const intl48 = util.intl;
    return intl48.string(util.t["rQJBE/"]);
  } else if (constants7.VIEW_CREATOR_MONETIZATION_ANALYTICS === item) {
    const intl47 = util.intl;
    return intl47.string(util.t["0lTLTv"]);
  } else if (constants7.CHANGE_NICKNAME === item) {
    const intl46 = util.intl;
    return intl46.string(util.t.dilOF6);
  } else if (constants7.MANAGE_NICKNAMES === item) {
    const intl45 = util.intl;
    return intl45.string(util.t["t+Ct5x"]);
  } else if (constants7.MANAGE_ROLES === item) {
    const intl44 = util.intl;
    return intl44.string(util.t["C8d+oG"]);
  } else if (constants7.MANAGE_WEBHOOKS === item) {
    const intl43 = util.intl;
    return intl43.string(util.t["/ADKmM"]);
  } else if (constants7.CREATE_GUILD_EXPRESSIONS === item) {
    const intl42 = util.intl;
    return intl42.string(util.t.HarVuP);
  } else if (constants7.MANAGE_GUILD_EXPRESSIONS === item) {
    const intl41 = util.intl;
    return intl41.string(util.t.bbuXIn);
  } else if (constants7.VIEW_AUDIT_LOG === item) {
    const intl40 = util.intl;
    return intl40.string(util.t.fZgLpA);
  } else if (constants7.VIEW_CHANNEL === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      if (log.targetType !== tmp77.CHANNEL_OVERWRITE) {
        const intl38 = util.intl;
        let stringResult1 = intl38.string(util.t.uV83yi);
      }
      return stringResult1;
    }
    const intl39 = util.intl;
    stringResult1 = intl39.string(util.t["W/A4Qp"]);
  } else if (constants7.SEND_MESSAGES === item) {
    const intl37 = util.intl;
    return intl37.string(util.t.T32rkC);
  } else if (constants7.SEND_TTS_MESSAGES === item) {
    const intl36 = util.intl;
    return intl36.string(util.t.Mg7bku);
  } else if (constants7.USE_APPLICATION_COMMANDS === item) {
    const intl35 = util.intl;
    return intl35.string(util.t.shbR1a);
  } else if (constants7.MANAGE_MESSAGES === item) {
    const intl34 = util.intl;
    return intl34.string(util.t["6lU9xM"]);
  } else if (constants7.EMBED_LINKS === item) {
    const intl33 = util.intl;
    return intl33.string(util.t["969dEL"]);
  } else if (constants7.ATTACH_FILES === item) {
    const intl32 = util.intl;
    return intl32.string(util.t["3AS4UM"]);
  } else if (constants7.READ_MESSAGE_HISTORY === item) {
    const intl31 = util.intl;
    return intl31.string(util.t.l9ufaR);
  } else if (constants7.MENTION_EVERYONE === item) {
    const intl30 = util.intl;
    return intl30.string(util.t.Y78KGC);
  } else if (constants7.USE_EXTERNAL_EMOJIS === item) {
    const intl29 = util.intl;
    return intl29.string(util.t.BpBGZU);
  } else if (constants7.USE_EXTERNAL_STICKERS === item) {
    const intl28 = util.intl;
    return intl28.string(util.t["UeRs+b"]);
  } else if (constants7.ADD_REACTIONS === item) {
    const intl27 = util.intl;
    return intl27.string(util.t.yEoJAr);
  } else if (constants7.CONNECT === item) {
    const intl26 = util.intl;
    return intl26.string(util.t.S0W8Z5);
  } else if (constants7.SPEAK === item) {
    const intl25 = util.intl;
    return intl25.string(util.t["8w1tIR"]);
  } else if (constants7.MUTE_MEMBERS === item) {
    const intl24 = util.intl;
    return intl24.string(util.t["8EI30/"]);
  } else if (constants7.DEAFEN_MEMBERS === item) {
    const intl23 = util.intl;
    return intl23.string(util.t["9L47Fr"]);
  } else if (constants7.MOVE_MEMBERS === item) {
    const intl22 = util.intl;
    return intl22.string(util.t.YtjJPQ);
  } else if (constants7.USE_VAD === item) {
    const intl21 = util.intl;
    return intl21.string(util.t["08zAV7"]);
  } else if (constants7.PRIORITY_SPEAKER === item) {
    const intl20 = util.intl;
    return intl20.string(util.t.BVK71i);
  } else if (constants7.STREAM === item) {
    const intl19 = util.intl;
    return intl19.string(util.t.FlNoSV);
  } else if (constants7.USE_SOUNDBOARD === item) {
    const intl18 = util.intl;
    return intl18.string(util.t.Bco7NG);
  } else if (constants7.USE_EXTERNAL_SOUNDS === item) {
    const intl17 = util.intl;
    return intl17.string(util.t.pwaVJ6);
  } else if (constants7.REQUEST_TO_SPEAK === item) {
    const intl16 = util.intl;
    return intl16.string(util.t["5kicT2"]);
  } else if (constants7.USE_EMBEDDED_ACTIVITIES === item) {
    const intl15 = util.intl;
    return intl15.string(util.t.rLSGeh);
  } else if (constants7.CREATE_EVENTS === item) {
    const intl14 = util.intl;
    return intl14.string(util.t.qyjZua);
  } else if (constants7.MANAGE_EVENTS === item) {
    const intl13 = util.intl;
    return intl13.string(util.t.HIgA5a);
  } else if (constants7.CREATE_PUBLIC_THREADS === item) {
    const intl12 = util.intl;
    return intl12.string(util.t["25rKnX"]);
  } else if (constants7.CREATE_PRIVATE_THREADS === item) {
    const intl11 = util.intl;
    return intl11.string(util.t.QwbTSa);
  } else if (constants7.SEND_MESSAGES_IN_THREADS === item) {
    const intl10 = util.intl;
    return intl10.string(util.t.fTE74g);
  } else if (constants7.MANAGE_THREADS === item) {
    const intl9 = util.intl;
    return intl9.string(util.t.kEqgr7);
  } else if (constants7.MODERATE_MEMBERS === item) {
    const intl8 = util.intl;
    return intl8.string(util.t["+RL6pz"]);
  } else if (constants7.SET_VOICE_CHANNEL_STATUS === item) {
    const intl7 = util.intl;
    return intl7.string(util.t.VBwkUf);
  } else if (constants7.SEND_POLLS === item) {
    const intl6 = util.intl;
    return intl6.string(util.t.UMQ7Ww);
  } else if (constants7.SEND_VOICE_MESSAGES === item) {
    const intl5 = util.intl;
    return intl5.string(util.t.WlWSBT);
  } else if (constants7.USE_EXTERNAL_APPS === item) {
    const intl4 = util.intl;
    return intl4.string(util.t.TtA5rK);
  } else if (constants7.PIN_MESSAGES === item) {
    const intl3 = util.intl;
    return intl3.string(util.t.Y5BI39);
  } else if (constants7.BYPASS_SLOWMODE === item) {
    const intl2 = util.intl;
    return intl2.string(util.t.kqcjeV);
  } else if (constants7.MANAGE_OFFICIAL_MESSAGES === item) {
    const intl = util.intl;
    return intl.string(util.t.Aj9ruN);
  } else {
    return null;
  }
};
export const transformLogs = function transformLogs(arr, arg1) {
  closure_0 = arg1;
  items = [];
  let item = arr.forEach((targetType) => {
    let result3 = targetType;
    items = result3;
    targetType = targetType.targetType;
    let tmp3 = result3;
    if (constants2.GUILD !== targetType) {
      tmp3 = tmp;
      if (constants2.GUILD_HOME !== targetType) {
        tmp3 = tmp;
        if (constants2.GUILD_PROFILE !== targetType) {
          if (constants2.CHANNEL !== targetType) {
            if (constants2.CHANNEL_OVERWRITE !== targetType) {
              if (constants2.USER === targetType) {
                result3 = constants.NICK;
                const targetId15 = targetType.targetId;
                let tmp192 = ((targetId15) => user.getUser(targetId15))(targetId15);
                let tmp195 = null;
                if (tmp194) {
                  ((arg0) => arg0)(tmp192);
                  tmp195 = tmp192;
                }
                let tmp197 = tmp195;
                if (null == tmp195) {
                  tmp197 = tmp195;
                  if (tmp200) {
                    tmp197 = tmp199[targetId15];
                  }
                  tmp200 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId15];
                }
                let tmp201 = tmp197;
                if (null == tmp197) {
                  tmp201 = tmp197;
                  if (null != targetType.changes) {
                    const changes = targetType.changes;
                    let found = changes.find((key) => key.key === result3);
                    tmp201 = tmp197;
                    if (null != found) {
                      tmp201 = found.newValue || found.oldValue;
                      const tmp203 = found.newValue || found.oldValue;
                    }
                  }
                }
                if (tmp201 == null) {
                  tmp201 = targetId15;
                }
                tmp3 = tmp201;
                tmp194 = null != tmp192 && true;
              } else if (constants2.ROLE === targetType) {
                result3 = constants.NAME;
                const targetId14 = targetType.targetId;
                const tmp180 = ((targetId14) => role.getRole(items.id, targetId14))(targetId14);
                let tmp183 = null;
                if (tmp182) {
                  tmp183 = ((name) => name.name)(tmp180);
                }
                let tmp184 = tmp183;
                if (null == tmp183) {
                  tmp184 = tmp183;
                  if (tmp187) {
                    tmp184 = tmp186[targetId14];
                  }
                  tmp187 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId14];
                }
                let tmp188 = tmp184;
                if (null == tmp184) {
                  tmp188 = tmp184;
                  if (null != targetType.changes) {
                    const changes1 = targetType.changes;
                    let found1 = changes1.find((key) => key.key === result3);
                    tmp188 = tmp184;
                    if (null != found1) {
                      tmp188 = found1.newValue || found1.oldValue;
                      const tmp190 = found1.newValue || found1.oldValue;
                    }
                  }
                }
                if (tmp188 == null) {
                  tmp188 = targetId14;
                }
                tmp3 = tmp188;
                tmp182 = null != tmp180 && true;
              } else if (constants2.ONBOARDING_PROMPT === targetType) {
                result3 = constants.ID;
                const targetId13 = targetType.targetId;
                const tmp165 = ((targetId13) => onboardingPrompt.getOnboardingPrompt(targetId13))(targetId13);
                let tmp168 = null;
                if (tmp167) {
                  tmp168 = ((title) => title.title)(tmp165);
                }
                let tmp169 = tmp168;
                if (null == tmp168) {
                  tmp169 = tmp168;
                  if (tmp172) {
                    tmp169 = tmp171[targetId13];
                  }
                  tmp172 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId13];
                }
                let stringResult = tmp169;
                if (null == tmp169) {
                  stringResult = tmp169;
                  if (null != targetType.changes) {
                    const changes2 = targetType.changes;
                    let found2 = changes2.find((key) => key.key === result3);
                    stringResult = tmp169;
                    if (null != found2) {
                      stringResult = found2.newValue || found2.oldValue;
                      const tmp175 = found2.newValue || found2.oldValue;
                    }
                  }
                }
                if (stringResult == null) {
                  stringResult = targetId13;
                }
                if (null == stringResult) {
                  let intl = closure_0(1115).intl;
                  stringResult = intl.string(closure_0(1115).t.ZNQyiR);
                }
                tmp3 = stringResult;
                tmp167 = null != tmp165 && true;
              } else {
                tmp3 = tmp;
                if (constants2.GUILD_ONBOARDING !== targetType) {
                  tmp3 = tmp;
                  if (constants2.GUILD_MEMBER_VERIFICATION !== targetType) {
                    if (constants2.INVITE === targetType) {
                      result3 = constants.CODE;
                      const targetId12 = targetType.targetId;
                      const tmp153 = closure_1_24(targetId12);
                      let tmp156 = null;
                      if (tmp155) {
                        tmp156 = undefined(tmp153);
                      }
                      let tmp157 = tmp156;
                      if (null == tmp156) {
                        tmp157 = tmp156;
                        if (tmp160) {
                          tmp157 = tmp159[targetId12];
                        }
                        tmp160 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId12];
                      }
                      let tmp161 = tmp157;
                      if (null == tmp157) {
                        tmp161 = tmp157;
                        if (null != targetType.changes) {
                          const changes3 = targetType.changes;
                          let found3 = changes3.find((key) => key.key === result3);
                          tmp161 = tmp157;
                          if (null != found3) {
                            tmp161 = found3.newValue || found3.oldValue;
                            const tmp163 = found3.newValue || found3.oldValue;
                          }
                        }
                      }
                      if (tmp161 == null) {
                        tmp161 = targetId12;
                      }
                      tmp3 = tmp161;
                      tmp155 = null != tmp153 && false;
                    } else if (constants2.INTEGRATION === targetType) {
                      result3 = constants.TYPE;
                      const targetId11 = targetType.targetId;
                      const tmp140 = ((targetId11) => {
                        closure_0 = targetId11;
                        const integrations = closure_1_14.integrations;
                        return integrations.find((id) => id.id === closure_0);
                      })(targetId11);
                      let tmp143 = null;
                      if (tmp142) {
                        tmp143 = ((name) => name.name)(tmp140);
                      }
                      let tmp144 = tmp143;
                      if (null == tmp143) {
                        tmp144 = tmp143;
                        if (tmp147) {
                          tmp144 = tmp146[targetId11];
                        }
                        tmp147 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId11];
                      }
                      let tmp148 = tmp144;
                      if (null == tmp144) {
                        tmp148 = tmp144;
                        if (null != targetType.changes) {
                          const changes4 = targetType.changes;
                          let found4 = changes4.find((key) => key.key === result3);
                          tmp148 = tmp144;
                          if (null != found4) {
                            tmp148 = found4.newValue || found4.oldValue;
                            const tmp150 = found4.newValue || found4.oldValue;
                          }
                        }
                      }
                      if (tmp148 == null) {
                        tmp148 = targetId11;
                      }
                      tmp3 = tmp148;
                      tmp142 = null != tmp140 && true;
                    } else if (constants2.WEBHOOK === targetType) {
                      result3 = constants.NAME;
                      const targetId10 = targetType.targetId;
                      const tmp128 = ((targetId10) => {
                        closure_0 = targetId10;
                        const webhooks = closure_1_14.webhooks;
                        return webhooks.find((id) => id.id === closure_0);
                      })(targetId10);
                      let tmp131 = null;
                      if (tmp130) {
                        tmp131 = ((name) => name.name)(tmp128);
                      }
                      let tmp132 = tmp131;
                      if (null == tmp131) {
                        tmp132 = tmp131;
                        if (tmp135) {
                          tmp132 = tmp134[targetId10];
                        }
                        tmp135 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId10];
                      }
                      let tmp136 = tmp132;
                      if (null == tmp132) {
                        tmp136 = tmp132;
                        if (null != targetType.changes) {
                          const changes5 = targetType.changes;
                          let found5 = changes5.find((key) => key.key === result3);
                          tmp136 = tmp132;
                          if (null != found5) {
                            tmp136 = found5.newValue || found5.oldValue;
                            const tmp138 = found5.newValue || found5.oldValue;
                          }
                        }
                      }
                      if (tmp136 == null) {
                        tmp136 = targetId10;
                      }
                      tmp3 = tmp136;
                      tmp130 = null != tmp128 && true;
                    } else if (constants2.EMOJI === targetType) {
                      result3 = constants.NAME;
                      const targetId9 = targetType.targetId;
                      const tmp116 = ((targetId9) => {
                        closure_0 = targetId9;
                        guildEmoji = guildEmoji.getGuildEmoji(items.id);
                        return guildEmoji.find((id) => id.id === closure_0);
                      })(targetId9);
                      let tmp119 = null;
                      if (tmp118) {
                        tmp119 = ((name) => name.name)(tmp116);
                      }
                      let tmp120 = tmp119;
                      if (null == tmp119) {
                        tmp120 = tmp119;
                        if (tmp123) {
                          tmp120 = tmp122[targetId9];
                        }
                        tmp123 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId9];
                      }
                      let tmp124 = tmp120;
                      if (null == tmp120) {
                        tmp124 = tmp120;
                        if (null != targetType.changes) {
                          const changes6 = targetType.changes;
                          let found6 = changes6.find((key) => key.key === result3);
                          tmp124 = tmp120;
                          if (null != found6) {
                            tmp124 = found6.newValue || found6.oldValue;
                            const tmp126 = found6.newValue || found6.oldValue;
                          }
                        }
                      }
                      if (tmp124 == null) {
                        tmp124 = targetId9;
                      }
                      tmp3 = tmp124;
                      tmp118 = null != tmp116 && true;
                    } else if (constants2.STICKER === targetType) {
                      result3 = constants.NAME;
                      const targetId8 = targetType.targetId;
                      const tmp104 = ((targetId8) => stickerById.getStickerById(targetId8))(targetId8);
                      let tmp107 = null;
                      if (tmp106) {
                        tmp107 = ((name) => name.name)(tmp104);
                      }
                      let tmp108 = tmp107;
                      if (null == tmp107) {
                        tmp108 = tmp107;
                        if (tmp111) {
                          tmp108 = tmp110[targetId8];
                        }
                        tmp111 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId8];
                      }
                      let tmp112 = tmp108;
                      if (null == tmp108) {
                        tmp112 = tmp108;
                        if (null != targetType.changes) {
                          const changes7 = targetType.changes;
                          let found7 = changes7.find((key) => key.key === result3);
                          tmp112 = tmp108;
                          if (null != found7) {
                            tmp112 = found7.newValue || found7.oldValue;
                            const tmp114 = found7.newValue || found7.oldValue;
                          }
                        }
                      }
                      if (tmp112 == null) {
                        tmp112 = targetId8;
                      }
                      tmp3 = tmp112;
                      tmp106 = null != tmp104 && true;
                    } else if (constants2.STAGE_INSTANCE === targetType) {
                      result3 = constants.TOPIC;
                      const targetId7 = targetType.targetId;
                      const tmp92 = ((targetId7) => {
                        closure_0 = targetId7;
                        const values = Object.values(stageInstancesByGuild.getStageInstancesByGuild(items.id));
                        let found;
                        if (values != null) {
                          found = values.find((id) => id.id === closure_0);
                        }
                        return found;
                      })(targetId7);
                      let tmp95 = null;
                      if (tmp94) {
                        tmp95 = ((topic) => topic.topic)(tmp92);
                      }
                      let tmp96 = tmp95;
                      if (null == tmp95) {
                        tmp96 = tmp95;
                        if (tmp99) {
                          tmp96 = tmp98[targetId7];
                        }
                        tmp99 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId7];
                      }
                      let tmp100 = tmp96;
                      if (null == tmp96) {
                        tmp100 = tmp96;
                        if (null != targetType.changes) {
                          const changes8 = targetType.changes;
                          const found8 = changes8.find((key) => key.key === result3);
                          tmp100 = tmp96;
                          if (null != found8) {
                            tmp100 = found8.newValue || found8.oldValue;
                            const tmp102 = found8.newValue || found8.oldValue;
                          }
                        }
                      }
                      if (tmp100 == null) {
                        tmp100 = targetId7;
                      }
                      tmp3 = tmp100;
                      tmp94 = null != tmp92 && true;
                    } else {
                      if (constants2.GUILD_SCHEDULED_EVENT !== targetType) {
                        if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                          if (constants2.THREAD === targetType) {
                            result3 = constants.NAME;
                            const targetId5 = targetType.targetId;
                            const tmp68 = ((targetId5) => {
                              closure_0 = targetId5;
                              const threads = closure_1_14.threads;
                              return threads.find((id) => id.id === closure_0);
                            })(targetId5);
                            let tmp71 = null;
                            if (tmp70) {
                              tmp71 = ((name) => name.name)(tmp68);
                            }
                            let tmp72 = tmp71;
                            if (null == tmp71) {
                              tmp72 = tmp71;
                              if (tmp75) {
                                tmp72 = tmp74[targetId5];
                              }
                              tmp75 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId5];
                            }
                            let tmp76 = tmp72;
                            if (null == tmp72) {
                              tmp76 = tmp72;
                              if (null != targetType.changes) {
                                const changes9 = targetType.changes;
                                const found9 = changes9.find((key) => key.key === result3);
                                tmp76 = tmp72;
                                if (null != found9) {
                                  tmp76 = found9.newValue || found9.oldValue;
                                  const tmp78 = found9.newValue || found9.oldValue;
                                }
                              }
                            }
                            if (tmp76 == null) {
                              tmp76 = targetId5;
                            }
                            tmp3 = tmp76;
                            tmp70 = null != tmp68 && true;
                          } else if (constants2.APPLICATION_COMMAND === targetType) {
                            if (targetType.targetId === targetType.options.application_id) {
                              let integrations = GuildSettingsAuditLogStore.integrations;
                              const found10 = integrations.find((application) => {
                                application = application.application;
                                let id;
                                if (application != null) {
                                  id = application.id;
                                }
                                return id === result3.targetId;
                              });
                              tmp3 = null != found10 ? found10.name : targetType.targetId;
                            } else {
                              result3 = constants.NAME;
                              const targetId18 = targetType.targetId;
                              const tmp253 = ((targetId18) => {
                                closure_0 = targetId18;
                                const applicationCommands = closure_1_14.applicationCommands;
                                return applicationCommands.find((id) => id.id === closure_0);
                              })(targetId18);
                              let tmp56 = null;
                              if (tmp55) {
                                tmp56 = ((name_localized) => {
                                  if (null != name_localized.name_localized) {
                                    if ("" !== name_localized.name_localized) {
                                      let name = name_localized.name_localized;
                                    }
                                    let combined = name;
                                    if (name_localized.type === result3(1895).ApplicationCommandType.CHAT) {
                                      const _HermesInternal = HermesInternal;
                                      combined = "/\u2060" + name;
                                    }
                                    return combined;
                                  }
                                  name = name_localized.name;
                                })(tmp253);
                              }
                              let tmp57 = tmp56;
                              if (null == tmp56) {
                                tmp57 = tmp56;
                                if (tmp60) {
                                  tmp57 = tmp59[targetId18];
                                }
                                tmp60 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId18];
                              }
                              let tmp61 = tmp57;
                              if (null == tmp57) {
                                tmp61 = tmp57;
                                if (null != targetType.changes) {
                                  const changes10 = targetType.changes;
                                  const found11 = changes10.find((key) => key.key === result3);
                                  tmp61 = tmp57;
                                  if (null != found11) {
                                    tmp61 = found11.newValue || found11.oldValue;
                                    const tmp63 = found11.newValue || found11.oldValue;
                                  }
                                }
                              }
                              if (tmp61 == null) {
                                tmp61 = targetId18;
                              }
                              tmp3 = tmp61;
                              tmp55 = null != tmp253 && true;
                            }
                          } else if (constants2.AUTO_MODERATION_RULE === targetType) {
                            result3 = constants.NAME;
                            const targetId4 = targetType.targetId;
                            const tmp44 = ((targetId4) => {
                              closure_0 = targetId4;
                              const automodRules = closure_1_14.automodRules;
                              return automodRules.find((id) => id.id === closure_0);
                            })(targetId4);
                            let tmp47 = null;
                            if (tmp46) {
                              tmp47 = ((name) => name.name)(tmp44);
                            }
                            let tmp48 = tmp47;
                            if (null == tmp47) {
                              tmp48 = tmp47;
                              if (tmp51) {
                                tmp48 = tmp50[targetId4];
                              }
                              tmp51 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId4];
                            }
                            let tmp52 = tmp48;
                            if (null == tmp48) {
                              tmp52 = tmp48;
                              if (null != targetType.changes) {
                                const changes11 = targetType.changes;
                                const found12 = changes11.find((key) => key.key === result3);
                                tmp52 = tmp48;
                                if (null != found12) {
                                  tmp52 = found12.newValue || found12.oldValue;
                                  const tmp54 = found12.newValue || found12.oldValue;
                                }
                              }
                            }
                            if (tmp52 == null) {
                              tmp52 = targetId4;
                            }
                            tmp3 = tmp52;
                            tmp46 = null != tmp44 && true;
                          } else if (constants2.GUILD_SOUNDBOARD === targetType) {
                            result3 = constants.NAME;
                            const targetId3 = targetType.targetId;
                            const tmp32 = closure_1_24(targetId3);
                            let tmp35 = null;
                            if (tmp34) {
                              tmp35 = undefined(tmp32);
                            }
                            let tmp36 = tmp35;
                            if (null == tmp35) {
                              tmp36 = tmp35;
                              if (tmp39) {
                                tmp36 = tmp38[targetId3];
                              }
                              tmp39 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId3];
                            }
                            let tmp40 = tmp36;
                            if (null == tmp36) {
                              tmp40 = tmp36;
                              if (null != targetType.changes) {
                                const changes12 = targetType.changes;
                                const found13 = changes12.find((key) => key.key === result3);
                                tmp40 = tmp36;
                                if (null != found13) {
                                  tmp40 = found13.newValue || found13.oldValue;
                                  const tmp42 = found13.newValue || found13.oldValue;
                                }
                              }
                            }
                            if (tmp40 == null) {
                              tmp40 = targetId3;
                            }
                            tmp3 = tmp40;
                            tmp34 = null != tmp32 && false;
                          } else if (constants2.HOME_SETTINGS === targetType) {
                            let targetId2 = tmp.id;
                            result3 = constants.GUILD_ID;
                            if (targetId2 == null) {
                              targetId2 = targetType.targetId;
                            }
                            const tmp20 = ((targetId2) => settings.getSettings(targetId2))(targetId2);
                            let flag = null != tmp20;
                            if (flag) {
                              flag = true;
                            }
                            let tmp22 = null;
                            if (flag) {
                              tmp22 = (() => {
                                const intl = result3(1115).intl;
                                return intl.string(result3(1115).t.VbpLyU);
                              })(tmp20);
                            }
                            let tmp23 = tmp22;
                            if (null == tmp22) {
                              tmp23 = tmp22;
                              if (tmp26) {
                                tmp23 = tmp25[targetId2];
                              }
                              tmp26 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId2];
                            }
                            let tmp27 = tmp23;
                            if (null == tmp23) {
                              tmp27 = tmp23;
                              if (null != targetType.changes) {
                                const changes13 = targetType.changes;
                                const found14 = changes13.find((key) => key.key === result3);
                                tmp27 = tmp23;
                                if (null != found14) {
                                  tmp27 = found14.newValue || found14.oldValue;
                                  const tmp29 = found14.newValue || found14.oldValue;
                                }
                              }
                            }
                            if (tmp27 == null) {
                              tmp27 = targetId2;
                            }
                            tmp3 = tmp27;
                          } else if (constants2.VOICE_CHANNEL_STATUS === targetType) {
                            result3 = constants.STATUS;
                            const targetId = targetType.targetId;
                            let tmp7 = ((targetId) => closure_1_10.getChannel(targetId))(targetId);
                            let tmp10 = null;
                            if (tmp9) {
                              tmp10 = ((channel) => result3(4791).computeChannelName(channel, user, closure_1_12, true))(tmp7);
                            }
                            let tmp11 = tmp10;
                            if (null == tmp10) {
                              tmp11 = tmp10;
                              if (tmp14) {
                                tmp11 = tmp13[targetId];
                              }
                              tmp14 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId];
                            }
                            let tmp15 = tmp11;
                            if (null == tmp11) {
                              tmp15 = tmp11;
                              if (null != targetType.changes) {
                                const changes14 = targetType.changes;
                                const found15 = changes14.find((key) => key.key === result3);
                                tmp15 = tmp11;
                                if (null != found15) {
                                  tmp15 = found15.newValue || found15.oldValue;
                                  let tmp17 = found15.newValue || found15.oldValue;
                                }
                              }
                            }
                            if (tmp15 == null) {
                              tmp15 = targetId;
                            }
                            tmp3 = tmp15;
                            tmp9 = null != tmp7 && true;
                          } else {
                            logger.warn("Unknown targetType for log", targetType);
                            tmp3 = null;
                          }
                        }
                      }
                      result3 = constants.NAME;
                      const targetId6 = targetType.targetId;
                      const tmp80 = ((targetId6) => {
                        closure_0 = targetId6;
                        const guildScheduledEvents = closure_1_14.guildScheduledEvents;
                        return guildScheduledEvents.find((id) => id.id === closure_0);
                      })(targetId6);
                      let tmp83 = null;
                      if (tmp82) {
                        tmp83 = ((name) => name.name)(tmp80);
                      }
                      let tmp84 = tmp83;
                      if (null == tmp83) {
                        tmp84 = tmp83;
                        if (tmp87) {
                          tmp84 = tmp86[targetId6];
                        }
                        tmp87 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId6];
                      }
                      let tmp88 = tmp84;
                      if (null == tmp84) {
                        tmp88 = tmp84;
                        if (null != targetType.changes) {
                          const changes15 = targetType.changes;
                          const found16 = changes15.find((key) => key.key === result3);
                          tmp88 = tmp84;
                          if (null != found16) {
                            tmp88 = found16.newValue || found16.oldValue;
                            const tmp90 = found16.newValue || found16.oldValue;
                          }
                        }
                      }
                      if (tmp88 == null) {
                        tmp88 = targetId6;
                      }
                      tmp3 = tmp88;
                      tmp82 = null != tmp80 && true;
                    }
                  }
                }
              }
            }
          }
          result3 = constants.NAME;
          const targetId16 = targetType.targetId;
          const tmp205 = ((targetId16) => closure_1_10.getChannel(targetId16))(targetId16);
          let tmp208 = null;
          if (tmp207) {
            tmp208 = ((channel) => result3(4791).computeChannelName(channel, user, closure_1_12, true))(tmp205);
          }
          let tmp209 = tmp208;
          if (null == tmp208) {
            tmp209 = tmp208;
            if (tmp212) {
              tmp209 = tmp211[targetId16];
            }
            tmp212 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId16];
          }
          let tmp213 = tmp209;
          if (null == tmp209) {
            tmp213 = tmp209;
            if (null != targetType.changes) {
              const changes16 = targetType.changes;
              const found17 = changes16.find((key) => key.key === result3);
              tmp213 = tmp209;
              if (null != found17) {
                tmp213 = found17.newValue || found17.oldValue;
                const tmp215 = found17.newValue || found17.oldValue;
              }
            }
          }
          if (tmp213 == null) {
            tmp213 = targetId16;
          }
          tmp3 = tmp213;
          tmp207 = null != tmp205 && true;
        }
      }
    }
    if (null != tmp3) {
      const result = targetType.set("user", tmp216);
      const result1 = result.set("target", tmp3);
      result3 = result1;
      if (null != result1.options) {
        obj = {};
        const merged = Object.assign(result1.options);
        let type = result1.options.type;
        if (constants3.USER === type) {
          let id = result1.options.id;
          user = user.getUser(id);
          if (tmp224) {
            id = items(4482).getUserTag(user);
            let obj4 = items(4482);
          }
          obj.subtarget = id;
          tmp224 = null != user && true;
        } else if (tmp220.ROLE === type) {
          let role_name = result1.options.role_name;
          const tmp256 = closure_1_24(role_name);
          if (tmp221) {
            role_name = undefined(tmp256);
          }
          obj.subtarget = role_name;
          tmp221 = null != tmp256 && false;
        }
        if (null != result1.options.channel_id) {
          let targetId17 = result1.options.channel_id;
          result3 = "";
          if (targetId17 == null) {
            targetId17 = result1.targetId;
          }
          const tmp227 = ((targetId17) => closure_1_10.getChannel(targetId17))(targetId17);
          let tmp229 = null;
          if (tmp228) {
            ((arg0) => arg0)(tmp227);
            tmp229 = tmp227;
          }
          let tmp231 = tmp229;
          if (null == tmp229) {
            tmp231 = tmp229;
            if (tmp234) {
              tmp231 = tmp233[targetId17];
            }
            tmp234 = null != GuildSettingsAuditLogStore.deletedTargets[result1.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[result1.targetType][targetId17];
          }
          let tmp235 = tmp231;
          if (null == tmp231) {
            tmp235 = tmp231;
            if (null != result1.changes) {
              const changes17 = result1.changes;
              const found18 = changes17.find((key) => key.key === result3);
              tmp235 = tmp231;
              if (null != found18) {
                tmp235 = found18.newValue || found18.oldValue;
                const tmp237 = found18.newValue || found18.oldValue;
              }
            }
          }
          if (tmp235 == null) {
            tmp235 = targetId17;
          }
          obj.channel = tmp235;
          tmp228 = null != tmp227 && true;
        }
        let tmp238 = null != result1.options.members_removed;
        if (tmp238) {
          tmp238 = 0 !== result1.options.members_removed;
        }
        if (tmp238) {
          obj.count = result1.options.members_removed;
        }
        let options = obj;
        if (null != result1.options.event_exception_id) {
          let guildScheduledEvents = GuildSettingsAuditLogStore.guildScheduledEvents;
          const found19 = guildScheduledEvents.find((id) => id.id === result3.targetId);
          let found20;
          if (found19 != null) {
            const prop = found19.guild_scheduled_event_exceptions;
            found20 = prop.find((event_exception_id) => event_exception_id.event_exception_id === result3.options.event_exception_id);
          }
          let obj5 = closure_0(4319);
          const tmp244 = items(4229);
          let str5;
          if (found20 != null) {
            str5 = found20.event_exception_id;
          }
          if (str5 == null) {
            str5 = "0";
          }
          obj.subtarget = obj5.dateFormat(tmp244(items(11).extractTimestamp(str5)), "LL");
          options = obj;
          const obj6 = items(11);
        }
      } else {
        options = result1.options;
      }
      const result2 = result1.set("options", options);
      result3 = result2;
      let tmp247 = result2;
      if (null != result2.changes) {
        items = [];
        const changes18 = result2.changes;
        let item = changes18.forEach((newValue) => {
          if (result3.action === constants.APPLICATION_COMMAND_PERMISSION_UPDATE) {
            const type = tmp298.type;
            if (constants9.ROLE === type) {
              let name = tmp298.id;
              role = GuildRoleStore.getRole(tmp2.id, name);
              if (tmp319) {
                name = role.name;
              }
              newValue.subtarget = name;
              let tmp2922 = newValue;
              tmp319 = null != role && true;
            } else if (constants9.USER === type) {
              let id2 = tmp298.id;
              user = UserStore.getUser(id2);
              if (tmp313) {
                id2 = UserUtilsDefault.getUserTag(user);
              }
              newValue.subtarget = id2;
              tmp2922 = newValue;
              tmp313 = null != user && true;
            } else {
              tmp2922 = newValue;
              if (constants9.CHANNEL === type) {
                const obj27 = IntegerDefault(tmp2.id);
                if (tmp298.id === str23.toString()) {
                  const intl11 = util.intl;
                  newValue.subtarget = intl11.string(util.t.MSYhgh);
                  tmp2922 = newValue;
                } else {
                  let id = tmp298.id;
                  const channel = ChannelStore.getChannel(id);
                  if (tmp303) {
                    const obj24 = useChannelName;
                    id = obj24.computeChannelName(channel, UserStore, RelationshipStore, true);
                  }
                  newValue.subtarget = id;
                  tmp2922 = newValue;
                  tmp303 = null != channel && true;
                }
                str23 = IntegerDefault(tmp2.id).subtract(1);
              }
            }
          } else if (AuditLogChangeKeys.OWNER_ID === newValue.key) {
            ({ newValue: newValue22, oldValue: oldValue22 } = newValue);
            if (null != newValue.newValue) {
              newValue22 = UserStore.getUser(newValue.newValue);
            }
            if (null != newValue.oldValue) {
              oldValue22 = UserStore.getUser(newValue.oldValue);
            }
            if (!oldValue22) {
              oldValue22 = newValue.oldValue;
            }
            if (!newValue22) {
              newValue22 = newValue.newValue;
            }
            tmp2922 = new AuditLogChange(key18, oldValue22, newValue22);
          } else {
            if (AuditLogChangeKeys.CHANNEL_ID !== key19) {
              if (AuditLogChangeKeys.AFK_CHANNEL_ID !== key19) {
                if (AuditLogChangeKeys.SYSTEM_CHANNEL_ID !== key19) {
                  if (AuditLogChangeKeys.RULES_CHANNEL_ID !== key19) {
                    if (AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID !== key19) {
                      if (AuditLogChangeKeys.AFK_TIMEOUT === key19) {
                        ({ newValue: newValue20, oldValue: oldValue20 } = newValue);
                        if (null != newValue.newValue) {
                          newValue20 = newValue.newValue / 60;
                        }
                        if (null != newValue.oldValue) {
                          oldValue20 = newValue.oldValue / 60;
                        }
                        if (!oldValue20) {
                          oldValue20 = newValue.oldValue;
                        }
                        if (!newValue20) {
                          newValue20 = newValue.newValue;
                        }
                        tmp2922 = new AuditLogChange(key16, oldValue20, newValue20);
                      } else if (AuditLogChangeKeys.BITRATE === key19) {
                        ({ newValue: newValue19, oldValue: oldValue19 } = newValue);
                        if (null != newValue.newValue) {
                          newValue19 = newValue.newValue / 1000;
                        }
                        if (null != newValue.oldValue) {
                          oldValue19 = newValue.oldValue / 1000;
                        }
                        if (!oldValue19) {
                          oldValue19 = newValue.oldValue;
                        }
                        if (!newValue19) {
                          newValue19 = newValue.newValue;
                        }
                        tmp2922 = new AuditLogChange(key15, oldValue19, newValue19);
                      } else if (AuditLogChangeKeys.COLOR === key19) {
                        ({ newValue: newValue18, oldValue: oldValue18 } = newValue);
                        if (null != newValue.newValue) {
                          newValue18 = utils_ColorUtils.int2hex(newValue.newValue).toUpperCase();
                          const str21 = utils_ColorUtils.int2hex(newValue.newValue);
                        }
                        if (null != newValue.oldValue) {
                          oldValue18 = utils_ColorUtils.int2hex(newValue.oldValue).toUpperCase();
                          const str22 = utils_ColorUtils.int2hex(newValue.oldValue);
                        }
                        if (!oldValue18) {
                          oldValue18 = newValue.oldValue;
                        }
                        if (!newValue18) {
                          newValue18 = newValue.newValue;
                        }
                        tmp2922 = new AuditLogChange(key14, oldValue18, newValue18);
                      } else if (AuditLogChangeKeys.THEME_COLORS === key19) {
                        ({ newValue: newValue16, oldValue: oldValue16 } = newValue);
                        if (null != newValue.newValue) {
                          const newValue17 = newValue.newValue;
                          const formatted = utils_ColorUtils.int2hex(newValue17[0]).toUpperCase();
                          const str13 = utils_ColorUtils.int2hex(newValue17[0]);
                          const _HermesInternal = HermesInternal;
                          newValue16 = "" + formatted + ", " + utils_ColorUtils.int2hex(newValue17[1]).toUpperCase();
                          const str14 = utils_ColorUtils.int2hex(newValue17[1]);
                        }
                        if (null != newValue.oldValue) {
                          const oldValue17 = newValue.oldValue;
                          const formatted1 = utils_ColorUtils.int2hex(oldValue17[0]).toUpperCase();
                          const str17 = utils_ColorUtils.int2hex(oldValue17[0]);
                          const _HermesInternal2 = HermesInternal;
                          oldValue16 = "" + formatted1 + ", " + utils_ColorUtils.int2hex(oldValue17[1]).toUpperCase();
                          const str18 = utils_ColorUtils.int2hex(oldValue17[1]);
                        }
                        if (!oldValue16) {
                          oldValue16 = newValue.oldValue;
                        }
                        if (!newValue16) {
                          newValue16 = newValue.newValue;
                        }
                        tmp2922 = new AuditLogChange(key13, oldValue16, newValue16);
                      } else if (AuditLogChangeKeys.MAX_AGE === key19) {
                        ({ newValue: newValue15, oldValue: oldValue15 } = newValue);
                        if (null != newValue.newValue) {
                          let label = newValue.newValue;
                          const maxAgeOptionByValue = InstantInviteUtilsDefault.getMaxAgeOptionByValue(label);
                          if (null !== maxAgeOptionByValue) {
                            label = maxAgeOptionByValue.label;
                          }
                          newValue15 = label;
                        }
                        if (null != newValue.oldValue) {
                          let label2 = newValue.oldValue;
                          const maxAgeOptionByValue1 = InstantInviteUtilsDefault.getMaxAgeOptionByValue(label2);
                          if (null !== maxAgeOptionByValue1) {
                            label2 = maxAgeOptionByValue1.label;
                          }
                          oldValue15 = label2;
                        }
                        if (!oldValue15) {
                          oldValue15 = newValue.oldValue;
                        }
                        if (!newValue15) {
                          newValue15 = newValue.newValue;
                        }
                        tmp2922 = new AuditLogChange(key12, oldValue15, newValue15);
                      } else if (AuditLogChangeKeys.PERMISSIONS === key19) {
                        items = [];
                        ({ added: added2, removed: removed2 } = getPermissionChanges(newValue.oldValue, newValue.newValue));
                        if (added2.length > 0) {
                          const tmp208 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_GRANTED, null, added2);
                          items.push(tmp208);
                        }
                        tmp2922 = items;
                        if (removed2.length > 0) {
                          const tmp372 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_DENIED, null, removed2);
                          items.push(tmp372);
                          tmp2922 = items;
                        }
                        const tmp202 = getPermissionChanges(newValue.oldValue, newValue.newValue);
                      } else {
                        if (AuditLogChangeKeys.PERMISSIONS_GRANTED !== key19) {
                          if (AuditLogChangeKeys.PERMISSIONS_DENIED !== key19) {
                            if (AuditLogChangeKeys.FLAGS === key19) {
                              ({ oldValue: oldValue14, newValue: newValue14 } = newValue);
                              let num6 = 0;
                              if (typeof oldValue14 === "number") {
                                num6 = oldValue14;
                              }
                              let num7 = 0;
                              if (typeof newValue14 === "number") {
                                num7 = newValue14;
                              }
                              FlagUtilsAll;
                              const items1 = [];
                              const items2 = [];
                              for (const key10535 in ChannelFlags) {
                                let tmp348 = ChannelFlags[key10535];
                                let obj26 = FlagUtilsAll;
                                if (obj26.hasFlag(removeFlagResult, tmp348)) {
                                  let arr3 = items1.push(tmp348);
                                }
                                let tmp349Result = FlagUtilsAll;
                                if (!tmp349Result.hasFlag(tmp179, tmp348)) {
                                  continue;
                                } else {
                                  let arr4 = items2.push(tmp348);
                                  continue;
                                }
                                continue;
                              }
                              const items3 = [];
                              if (items1.length > 0) {
                                const tmp188 = new AuditLogChange(newValue.key, null, items1);
                                items3.push(tmp188);
                              }
                              tmp2922 = items3;
                              if (items2.length > 0) {
                                const tmp356 = new AuditLogChange(newValue.key, items2, null);
                                items3.push(tmp356);
                                tmp2922 = items3;
                              }
                              const removeFlagResult = FlagUtilsAll.removeFlag(num7, num6);
                            } else if (AuditLogChangeKeys.PREFERRED_LOCALE === key19) {
                              ({ newValue: newValue13, oldValue: oldValue13 } = newValue);
                              if (null != newValue.newValue) {
                                newValue = newValue.newValue;
                                const availableLocales = util.getAvailableLocales();
                                const found = availableLocales.find((value) => value.value === closure_0);
                                let name1 = null;
                                if (null != found) {
                                  name1 = found.name;
                                }
                                newValue13 = name1;
                              }
                              if (null != newValue.oldValue) {
                                newValue = newValue.oldValue;
                                const availableLocales1 = util.getAvailableLocales();
                                const found1 = availableLocales1.find((value) => value.value === closure_0);
                                let name2 = null;
                                if (null != found1) {
                                  name2 = found1.name;
                                }
                                oldValue13 = name2;
                              }
                              if (!oldValue13) {
                                oldValue13 = newValue.oldValue;
                              }
                              if (!newValue13) {
                                newValue13 = newValue.newValue;
                              }
                              tmp2922 = new AuditLogChange(key11, oldValue13, newValue13);
                            } else if (AuditLogChangeKeys.VIDEO_QUALITY_MODE === key19) {
                              ({ newValue: newValue12, oldValue: oldValue12 } = newValue);
                              if (null == newValue.newValue) {
                                if (null == newValue.oldValue) {
                                  if (!oldValue12) {
                                    oldValue12 = newValue.oldValue;
                                  }
                                  if (!newValue12) {
                                    newValue12 = newValue.newValue;
                                  }
                                  tmp2922 = new AuditLogChange(key10, oldValue12, newValue12);
                                } else if (newValue.oldValue === constants8.FULL) {
                                  const intl10 = util.intl;
                                  let stringResult = intl10.string(util.t["7jOoJE"]);
                                } else {
                                  const intl9 = util.intl;
                                  stringResult = intl9.string(util.t.jjKYpu);
                                }
                              } else if (newValue.newValue === constants8.FULL) {
                                const intl8 = util.intl;
                                let stringResult1 = intl8.string(util.t["7jOoJE"]);
                              } else {
                                const intl7 = util.intl;
                                stringResult1 = intl7.string(util.t.jjKYpu);
                              }
                            } else if (AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS === key19) {
                              ({ SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS: obj9[closure_3_28.SUPPRESS_JOIN_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS: obj9[closure_3_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS], SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS: obj9[closure_3_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES: obj9[closure_3_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES] } = AuditLogChangeKeys);
                              const items4 = [];
                              const _Object = Object;
                              const values = Object.values(__initData6);
                              const item = values.forEach((item) => {
                                if ((newValue.oldValue & item) === item !== (newValue.newValue & item) === item) {
                                  const tmp7 = new closure_2_9(obj3[item], !tmp, !tmp2);
                                  items4.push(tmp7);
                                }
                              });
                              tmp2922 = items4;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_ACTIONS === key19) {
                              let tmp1322 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue11, oldValue: oldValue11 } = newValue);
                                if (null != newValue.newValue) {
                                  const newValue1 = newValue.newValue;
                                  const mapped = newValue1.map((type) => type.type);
                                  let joined = mapped;
                                  if (null != mapped) {
                                    const mapped1 = mapped.map(AutomodRuleUtils.actionTypeToName);
                                    joined = mapped1.join(", ");
                                  }
                                  newValue11 = joined;
                                }
                                if (null != newValue.oldValue) {
                                  const oldValue1 = newValue.oldValue;
                                  const mapped2 = oldValue1.map((type) => type.type);
                                  let joined1 = mapped2;
                                  if (null != mapped2) {
                                    const mapped3 = mapped2.map(AutomodRuleUtils.actionTypeToName);
                                    joined1 = mapped3.join(", ");
                                  }
                                  oldValue11 = joined1;
                                }
                                if (!oldValue11) {
                                  oldValue11 = newValue.oldValue;
                                }
                                if (!newValue11) {
                                  newValue11 = newValue.newValue;
                                }
                                tmp1322 = new AuditLogChange(key9, oldValue11, newValue11);
                              }
                              tmp2922 = tmp1322;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE === key19) {
                              let tmp1182 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const eventTypeToName = AutomodRuleUtils.eventTypeToName;
                                ({ newValue: newValue10, oldValue: oldValue10 } = newValue);
                                if (null != newValue.newValue) {
                                  newValue10 = eventTypeToName(newValue.newValue);
                                }
                                if (null != newValue.oldValue) {
                                  oldValue10 = eventTypeToName(newValue.oldValue);
                                }
                                if (!oldValue10) {
                                  oldValue10 = newValue.oldValue;
                                }
                                if (!newValue10) {
                                  newValue10 = newValue.newValue;
                                }
                                tmp1182 = new AuditLogChange(key8, oldValue10, newValue10);
                              }
                              tmp2922 = tmp1182;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE === key19) {
                              let tmp1102 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const triggerTypeToName = AutomodRuleUtils.triggerTypeToName;
                                ({ newValue: newValue9, oldValue: oldValue9 } = newValue);
                                if (null != newValue.newValue) {
                                  newValue9 = triggerTypeToName(newValue.newValue);
                                }
                                if (null != newValue.oldValue) {
                                  oldValue9 = triggerTypeToName(newValue.oldValue);
                                }
                                if (!oldValue9) {
                                  oldValue9 = newValue.oldValue;
                                }
                                if (!newValue9) {
                                  newValue9 = newValue.newValue;
                                }
                                tmp1102 = new AuditLogChange(key7, oldValue9, newValue9);
                              }
                              tmp2922 = tmp1102;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA === key19) {
                              let tmp1022 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue8, oldValue: oldValue8 } = newValue);
                                if (null != newValue.newValue) {
                                  let newValue7 = newValue.newValue;
                                  let tmp335 = newValue7;
                                  if (null != newValue7) {
                                    tmp335 = newValue7;
                                    if (typeof newValue7 === "object") {
                                      if (null == newValue7.keyword_filter) {
                                        const _JSON3 = JSON;
                                        let json = JSON.stringify(newValue7);
                                      } else {
                                        const _Array3 = Array;
                                      }
                                      const intl5 = util.intl;
                                      const obj4 = { newValue: null };
                                      const keyword_filter = newValue7.keyword_filter;
                                      const mapped4 = keyword_filter.map((item) => "'" + item + "'");
                                      newValue7 = mapped4.join(", ");
                                      obj4.newValue = newValue7;
                                      json = intl5.formatToMarkdownString(util.t.y91UXV, obj4);
                                    }
                                  }
                                  newValue8 = tmp335;
                                }
                                if (null != newValue.oldValue) {
                                  let oldValue7 = newValue.oldValue;
                                  let tmp336 = oldValue7;
                                  if (null != oldValue7) {
                                    tmp336 = oldValue7;
                                    if (typeof oldValue7 === "object") {
                                      if (null == oldValue7.keyword_filter) {
                                        const _JSON4 = JSON;
                                        let json1 = JSON.stringify(oldValue7);
                                      } else {
                                        const _Array4 = Array;
                                      }
                                      const intl6 = util.intl;
                                      const obj5 = { newValue: null };
                                      const keyword_filter1 = oldValue7.keyword_filter;
                                      const mapped5 = keyword_filter1.map((item) => "'" + item + "'");
                                      oldValue7 = mapped5.join(", ");
                                      obj5.newValue = oldValue7;
                                      json1 = intl6.formatToMarkdownString(util.t.y91UXV, obj5);
                                    }
                                  }
                                  oldValue8 = tmp336;
                                }
                                if (!oldValue8) {
                                  oldValue8 = newValue.oldValue;
                                }
                                if (!newValue8) {
                                  newValue8 = newValue.newValue;
                                }
                                tmp1022 = new AuditLogChange(key6, oldValue8, newValue8);
                              }
                              tmp2922 = tmp1022;
                            } else {
                              if (AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS !== key19) {
                                if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS !== key19) {
                                  if (AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS !== key19) {
                                    if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== key19) {
                                      if (AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST !== key19) {
                                        if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST !== key19) {
                                          if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS === key19) {
                                            let tmp662 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue5, oldValue: oldValue5 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue23 = newValue.newValue;
                                                const mapped6 = newValue23.map(ChannelStore.getChannel);
                                                const found2 = mapped6.filter((item) => null != item);
                                                const mapped7 = found2.map((item) => newValue(dependencyMap[24]).computeChannelName(item, user, closure_1_12, true));
                                                if (null == mapped7) {
                                                  newValue5 = mapped7;
                                                } else {
                                                  if (null == mapped7) {
                                                    const intl3 = util.intl;
                                                    let stringResult2 = intl3.string(util.t["K/EdV8"]);
                                                  }
                                                  stringResult2 = mapped7.join(", ");
                                                }
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue23 = newValue.oldValue;
                                                const mapped8 = oldValue23.map(ChannelStore.getChannel);
                                                const found3 = mapped8.filter((item) => null != item);
                                                const mapped9 = found3.map((item) => newValue(dependencyMap[24]).computeChannelName(item, user, closure_1_12, true));
                                                if (null == mapped9) {
                                                  oldValue5 = mapped9;
                                                } else {
                                                  if (null == mapped9) {
                                                    const intl4 = util.intl;
                                                    let stringResult3 = intl4.string(util.t["K/EdV8"]);
                                                  }
                                                  stringResult3 = mapped9.join(", ");
                                                }
                                              }
                                              if (!oldValue5) {
                                                oldValue5 = newValue.oldValue;
                                              }
                                              if (!newValue5) {
                                                newValue5 = newValue.newValue;
                                              }
                                              tmp662 = new AuditLogChange(key4, oldValue5, newValue5);
                                            }
                                            tmp2922 = tmp662;
                                          } else if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES === key19) {
                                            let tmp502 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue4, oldValue: oldValue4 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue24 = newValue.newValue;
                                                const mapped10 = newValue24.map((item) => role.getRole(newValue.id, item));
                                                const found4 = mapped10.filter((item) => null != item);
                                                const mapped11 = found4.map((name) => name.name);
                                                if (null == mapped11) {
                                                  newValue4 = mapped11;
                                                } else {
                                                  if (null == mapped11) {
                                                    const intl = util.intl;
                                                    let stringResult4 = intl.string(util.t["K/EdV8"]);
                                                  }
                                                  stringResult4 = mapped11.join(", ");
                                                }
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue24 = newValue.oldValue;
                                                const mapped12 = oldValue24.map((item) => role.getRole(newValue.id, item));
                                                const found5 = mapped12.filter((item) => null != item);
                                                const mapped13 = found5.map((name) => name.name);
                                                if (null == mapped13) {
                                                  oldValue4 = mapped13;
                                                } else {
                                                  if (null == mapped13) {
                                                    const intl2 = util.intl;
                                                    let stringResult5 = intl2.string(util.t["K/EdV8"]);
                                                  }
                                                  stringResult5 = mapped13.join(", ");
                                                }
                                              }
                                              if (!oldValue4) {
                                                oldValue4 = newValue.oldValue;
                                              }
                                              if (!newValue4) {
                                                newValue4 = newValue.newValue;
                                              }
                                              tmp502 = new AuditLogChange(key3, oldValue4, newValue4);
                                            }
                                            tmp2922 = tmp502;
                                          } else if (AuditLogChangeKeys.ROLE_IDS === key19) {
                                            let tmp3411 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.INVITE) {
                                              ({ newValue: newValue3, oldValue: oldValue3 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue25 = newValue.newValue;
                                                const mapped14 = newValue25.map((item) => role.getRole(newValue.id, item));
                                                const found6 = mapped14.filter((item) => null != item);
                                                newValue3 = found6.map((id) => ({ id: id.id, name: id.name }));
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue25 = newValue.oldValue;
                                                const mapped15 = oldValue25.map((item) => role.getRole(newValue.id, item));
                                                const found7 = mapped15.filter((item) => null != item);
                                                oldValue3 = found7.map((id) => ({ id: id.id, name: id.name }));
                                              }
                                              if (!oldValue3) {
                                                oldValue3 = newValue.oldValue;
                                              }
                                              if (!newValue3) {
                                                newValue3 = newValue.newValue;
                                              }
                                              tmp3411 = new AuditLogChange(key2, oldValue3, newValue3);
                                            }
                                            tmp2922 = tmp3411;
                                          } else if (AuditLogChangeKeys.AVAILABLE_TAGS === key19) {
                                            tmp2922 = transformAvailableForumTagChange(newValue);
                                          } else if (AuditLogChangeKeys.APPLIED_TAGS === key19) {
                                            tmp2922 = transformAppliedForumTagChange(newValue, result3);
                                          } else if (AuditLogChangeKeys.SCHEDULED_START_TIME === key19) {
                                            ({ newValue, oldValue } = newValue);
                                            if (null != newValue.newValue) {
                                              const newValue2 = newValue.newValue;
                                              const _Date = Date;
                                              obj = DateUtils;
                                              const date = new Date(newValue2);
                                              newValue = obj.dateFormat(_modDef4229(date), "LLLL");
                                            }
                                            if (null != newValue.oldValue) {
                                              const oldValue2 = newValue.oldValue;
                                              const _Date2 = Date;
                                              const obj2 = DateUtils;
                                              const date1 = new Date(oldValue2);
                                              oldValue = obj2.dateFormat(_modDef4229(date1), "LLLL");
                                            }
                                            if (!oldValue) {
                                              oldValue = newValue.oldValue;
                                            }
                                            if (!newValue) {
                                              newValue = newValue.newValue;
                                            }
                                            tmp2922 = new AuditLogChange(key, oldValue, newValue);
                                          } else {
                                            tmp2922 = newValue;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp822 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue6, oldValue: oldValue6 } = newValue);
                                if (null == newValue.newValue) {
                                  if (null == newValue.oldValue) {
                                    if (!oldValue6) {
                                      oldValue6 = newValue.oldValue;
                                    }
                                    if (!newValue6) {
                                      newValue6 = newValue.newValue;
                                    }
                                    tmp822 = new AuditLogChange(key5, oldValue6, newValue6);
                                  } else {
                                    let oldValue26 = newValue.oldValue;
                                    if (null == oldValue26) {
                                      const _JSON2 = JSON;
                                      let json2 = JSON.stringify(oldValue26);
                                    } else {
                                      const _Array2 = Array;
                                    }
                                    oldValue26 = oldValue26.map((item) => "'" + item + "'");
                                    json2 = oldValue26.join(", ");
                                  }
                                } else {
                                  let newValue26 = newValue.newValue;
                                  if (null == newValue26) {
                                    const _JSON = JSON;
                                    let json3 = JSON.stringify(newValue26);
                                  } else {
                                    const _Array = Array;
                                  }
                                  newValue26 = newValue26.map((item) => "'" + item + "'");
                                  json3 = newValue26.join(", ");
                                }
                              }
                              tmp2922 = tmp822;
                            }
                          }
                        }
                        const items5 = [];
                        ({ added, removed } = getPermissionChanges(newValue.oldValue, newValue.newValue));
                        if (added.length > 0) {
                          const tmp198 = new AuditLogChange(newValue.key, null, added);
                          items5.push(tmp198);
                        }
                        tmp2922 = items5;
                        if (removed.length > 0) {
                          const tmp364 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_RESET, removed, removed);
                          items5.push(tmp364);
                          tmp2922 = items5;
                        }
                        const tmp192 = getPermissionChanges(newValue.oldValue, newValue.newValue);
                      }
                    }
                  }
                }
              }
            }
            ({ newValue: newValue21, oldValue: oldValue21 } = newValue);
            if (null != newValue.newValue) {
              const channel1 = ChannelStore.getChannel(newValue.newValue);
              let channelName = channel1;
              if (null != channel1) {
                const obj22 = useChannelName;
                channelName = obj22.computeChannelName(channel1, UserStore, RelationshipStore, true);
              }
              newValue21 = channelName;
            }
            if (null != newValue.oldValue) {
              const channel2 = ChannelStore.getChannel(newValue.oldValue);
              let channelName1 = channel2;
              if (null != channel2) {
                const obj23 = useChannelName;
                channelName1 = obj23.computeChannelName(channel2, UserStore, RelationshipStore, true);
              }
              oldValue21 = channelName1;
            }
            if (!oldValue21) {
              oldValue21 = newValue.oldValue;
            }
            if (!newValue21) {
              newValue21 = newValue.newValue;
            }
            tmp2922 = new AuditLogChange(key17, oldValue21, newValue21);
          }
          if (Array.isArray(tmp2922)) {
            const item1 = tmp2922.forEach((item) => obj3.push(item));
          } else {
            items.push(tmp2922);
          }
        });
        result3 = result2.set("changes", items);
        tmp247 = result3;
      }
      items.push(tmp247);
    } else {
      let items1 = [, , , , ];
      ({ MEMBER_PRUNE: arr19[0], MEMBER_DISCONNECT: arr19[1], MEMBER_MOVE: arr19[2], CREATOR_MONETIZATION_REQUEST_CREATED: arr19[3], CREATOR_MONETIZATION_TERMS_ACCEPTED: arr19[4] } = closure_1_15);
    }
  });
  return items;
};
export { transformAppliedForumTagChange };
export { transformAvailableForumTagChange };