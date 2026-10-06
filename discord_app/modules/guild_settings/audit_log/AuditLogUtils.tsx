// === Module 17761: AuditLogUtils ===

// Module 17761 (AuditLogUtils)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef14 from "module_14" /* 14 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl71 from "intl" /* 1126 */;
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef4467 from "module_4467" /* 4467 */;
import DateUtils from "DateUtils" /* 4558 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import TimeUtils from "TimeUtils" /* 4925 */;
import useChannelName from "useChannelName" /* 5049 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6603 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9496 */;
import Constants2 from "Constants" /* 11487 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17724 */;
import AuditLogRecord from "AuditLogRecord" /* 17760 */;
import GuildFeedItemTypes from "GuildFeedItemTypes" /* 17762 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6602 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import StickersStore from "StickersStore" /* 5694 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17759 */;
import Constants from "Constants" /* 1085 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import size from "module_2" /* 2 */;

let EYd_ls, H7eE_9, Lfs4r_, Q_5kcO, VYfKA_, _PqSsi, __3TkD, _tb8kN, application, bxs_lS, gc_te5, guildEmoji, integrations, lj_A4u, m_qury, m_veAn, ms_xtL, r66lc_, role, sNpuy_, set, user, ws_1FA, wxs_vZ, z4w4U_, zwL_S2;

let AuditLogChangeKeys;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_33;
let closure_34;
let closure_35;
function getPermissionChanges(oldValue, newValue) {
  let num = 0;
  const deserialize = BigFlagUtilsAll.deserialize;
  BigFlagUtilsAll;
  if (typeof oldValue === "string") {
    num = oldValue;
  }
  let num2 = 0;
  const deserializeResult = deserialize(num);
  const deserialize2 = BigFlagUtilsAll.deserialize;
  BigFlagUtilsAll;
  if (typeof newValue === "string") {
    num2 = newValue;
  }
  const deserialize2Result = deserialize2(num2);
  const tmpResult3 = BigFlagUtilsAll;
  const removeResult = tmpResult3.remove(deserialize2Result, deserializeResult);
  BigFlagUtilsAll;
  const added = [];
  const removed = [];
  for (const key10027 in constants7) {
    let tmp14 = constants7[key10027];
    let obj3 = BigFlagUtilsAll;
    if (obj3.has(removeResult, tmp14)) {
      let arr = added.push(tmp14);
    }
    let tmp15Result = BigFlagUtilsAll;
    if (!tmp15Result.has(tmp9, tmp14)) {
      continue;
    } else {
      let arr2 = removed.push(tmp14);
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
  set = new Set(arr);
  const set1 = new Set(arr2);
  const found = arr2.filter((item) => !set.has(item));
  const found1 = arr.filter((item) => !set1.has(item));
  items = [];
  for (const item10055 of found) {
    let tmp11 = obj2[item10055];
    if (tmp11 == null) {
      let obj3 = { id: item10055, name: item10055 };
      tmp11 = obj3;
    }
    let self = this;
    let self2 = this;
    let push = items.push;
    let tmp17 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, tmp11);
    let arr3 = push(tmp17);
    continue;
  }
  for (const item10076 of found1) {
    let tmp21 = obj2[item10076];
    if (tmp21 == null) {
      let obj4 = { id: item10076, name: item10076 };
      tmp21 = obj4;
    }
    let self3 = this;
    let self4 = this;
    let push2 = items.push;
    let tmp27 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, tmp21);
    let push2Result = push2(tmp27);
    continue;
  }
  if (items.length > 0) {
    tmp = items;
  }
  return tmp;
}
function transformAvailableForumTagChange(newValue) {
  let oldValue;
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
          let obj11 = { id: null, name: null, emojiId: emoji_id, emojiName: null, moderated: null };
          ({ id: obj3.id, name: obj3.name } = tmp5);
          let emoji_id;
          if (0 !== tmp5.emoji_id) {
            emoji_id = tmp5.emoji_id;
          }
          ({ emoji_name: obj3.emojiName, moderated: obj3.moderated } = tmp5);
          tmp6 = obj11;
        }
        let self = this;
        let self2 = this;
        let tmp31 = new AuditLogChange(AVAILABLE_TAG_ADD, null, tmp6);
        return tmp31;
      }
    }
  }
  if (oldValue.length > newValue.length) {
    for (const key10046 in obj) {
      if (null != obj2[key10046]) {
        continue;
      } else {
        let AVAILABLE_TAG_DELETE = AuditLogChangeKeys.AVAILABLE_TAG_DELETE;
        let tmp15 = obj[key10046];
        let tmp16 = null;
        if (null != tmp15) {
          let obj12 = { id: null, name: null, emojiId: emoji_id1, emojiName: null, moderated: null };
          ({ id: obj4.id, name: obj4.name } = tmp15);
          let emoji_id1;
          if (0 !== tmp15.emoji_id) {
            emoji_id1 = tmp15.emoji_id;
          }
          ({ emoji_name: obj4.emojiName, moderated: obj4.moderated } = tmp15);
          tmp16 = obj12;
        }
        let self3 = this;
        let self4 = this;
        let tmp132 = new AuditLogChange(AVAILABLE_TAG_DELETE, null, tmp16);
        return tmp132;
      }
    }
  }
  for (const key10070 in obj) {
    let tmp44 = obj[key10070];
    let tmp45 = obj2[key10070];
    let name;
    if (tmp45 != null) {
      name = tmp45.name;
    }
    if (name === tmp44.name) {
      let emoji_id2;
      if (tmp45 != null) {
        emoji_id2 = tmp45.emoji_id;
      }
      if (emoji_id2 === tmp44.emoji_id) {
        let emoji_name;
        if (tmp45 != null) {
          emoji_name = tmp45.emoji_name;
        }
      }
    }
    let AVAILABLE_TAG_EDIT = AuditLogChangeKeys.AVAILABLE_TAG_EDIT;
    let tmp28 = null;
    if (null != tmp44) {
      let obj13 = { id: null, name: null, emojiId: emoji_id3, emojiName: null, moderated: null };
      ({ id: obj5.id, name: obj5.name } = tmp44);
      let emoji_id3;
      if (0 !== tmp44.emoji_id) {
        emoji_id3 = tmp44.emoji_id;
      }
      ({ emoji_name: obj5.emojiName, moderated: obj5.moderated } = tmp44);
      tmp28 = obj13;
    }
    let tmp30 = null;
    if (null != tmp45) {
      let obj14 = { id: null, name: null, emojiId: emoji_id4, emojiName: null, moderated: null };
      ({ id: obj6.id, name: obj6.name } = tmp45);
      let emoji_id4;
      if (0 !== tmp45.emoji_id) {
        emoji_id4 = tmp45.emoji_id;
      }
      ({ emoji_name: obj6.emojiName, moderated: obj6.moderated } = tmp45);
      tmp30 = obj14;
    }
    let self5 = this;
    let self6 = this;
    let tmp262 = new AuditLogChange(AVAILABLE_TAG_EDIT, tmp28, tmp30);
    return tmp262;
  }
  return newValue;
}
const AuditLogChange = AuditLogRecord.AuditLogChange;
({ AuditLogActions: closure_15, AuditLogChangeKeys } = Constants);
const AuditLogTargetTypes = Constants.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const AutomodTriggerType = Constants2.AutomodTriggerType;
const GuildOnboardingMode = GuildOnboardingPromptsConstants.GuildOnboardingMode;
({ GuildScheduledEventEntityTypes: closure_33, GuildScheduledEventStatus: closure_34, GuildScheduledEventPrivacyLevel: closure_35 } = GuildScheduledEventsConstants);
let tmp4 = new LoggerDefault("AuditLogUtils");
let closure_36 = tmp4;
let items = [TimeUtils.TimeUnits.DAYS, TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES, TimeUtils.TimeUnits.SECONDS];
let closure_38 = { [AuditLogTargetTypes.CHANNEL]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.CHANNEL_OVERWRITE]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.INVITE]: { [AuditLogChangeKeys.INVITER_ID]: true, [AuditLogChangeKeys.USES]: true }, [AuditLogTargetTypes.WEBHOOK]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.APPLICATION_ID]: true }, [AuditLogTargetTypes.INTEGRATION]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.NAME]: true }, [AuditLogTargetTypes.THREAD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true }, [AuditLogTargetTypes.STICKER]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ASSET]: true, [AuditLogChangeKeys.FORMAT_TYPE]: true, [AuditLogChangeKeys.AVAILABLE]: true, [AuditLogChangeKeys.GUILD_ID]: true }, [AuditLogTargetTypes.GUILD_HOME]: { [AuditLogChangeKeys.ENTITY_TYPE]: true }, [AuditLogTargetTypes.GUILD_ONBOARDING]: { [AuditLogChangeKeys.PROMPTS]: true }, [AuditLogTargetTypes.GUILD_SOUNDBOARD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.SOUND_ID]: true } };
class ACTION_FILTER_ITEMS {
  constructor() {
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl17;
    let intl18;
    let intl19;
    let intl2;
    let intl20;
    let intl21;
    let intl22;
    let intl23;
    let intl24;
    let intl25;
    let intl26;
    let intl27;
    let intl28;
    let intl29;
    let intl3;
    let intl30;
    let intl31;
    let intl32;
    let intl33;
    let intl34;
    let intl35;
    let intl36;
    let intl37;
    let intl38;
    let intl39;
    let intl4;
    let intl40;
    let intl41;
    let intl42;
    let intl43;
    let intl44;
    let intl45;
    let intl46;
    let intl47;
    let intl48;
    let intl49;
    let intl5;
    let intl50;
    let intl51;
    let intl52;
    let intl53;
    let intl54;
    let intl55;
    let intl56;
    let intl57;
    let intl58;
    let intl59;
    let intl6;
    let intl60;
    let intl61;
    let intl62;
    let intl63;
    let intl64;
    let intl65;
    let intl66;
    let intl67;
    let intl68;
    let intl69;
    let intl7;
    let intl70;
    let intl8;
    let intl9;
    obj = { value: constants.ALL, label: intl.string(intl71.t.QxEVcv), valueLabel: intl2.string(intl71.t.an9Ry3) };
    intl = intl71.intl;
    intl2 = intl71.intl;
    items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    const obj2 = { value: constants.GUILD_UPDATE, label: intl3.string(intl71.t["5INZa3"]) };
    intl3 = intl71.intl;
    items[1] = obj2;
    const obj3 = { value: constants.CHANNEL_CREATE, label: intl4.string(intl71.t["2uh4vJ"]) };
    intl4 = intl71.intl;
    items[2] = obj3;
    const obj4 = { value: constants.CHANNEL_UPDATE, label: intl5.string(intl71.t.mGsBLV) };
    intl5 = intl71.intl;
    items[3] = obj4;
    const obj5 = { value: constants.CHANNEL_DELETE, label: intl6.string(intl71.t.hCHzAr) };
    intl6 = intl71.intl;
    items[4] = obj5;
    const obj6 = { value: constants.CHANNEL_OVERWRITE_CREATE, label: intl7.string(intl71.t["8TnAMP"]) };
    intl7 = intl71.intl;
    items[5] = obj6;
    const obj7 = { value: constants.CHANNEL_OVERWRITE_UPDATE, label: intl8.string(intl71.t.Jqx0Bi) };
    intl8 = intl71.intl;
    items[6] = obj7;
    const obj8 = { value: constants.CHANNEL_OVERWRITE_DELETE, label: intl9.string(intl71.t.gBXOr4) };
    intl9 = intl71.intl;
    items[7] = obj8;
    const obj9 = { value: constants.CHANNEL_POSITION_UPDATE, label: intl10.string(intl71.t.hKfSwp) };
    intl10 = intl71.intl;
    items[8] = obj9;
    const obj10 = { value: constants.MEMBER_KICK, label: intl11.string(intl71.t["Q1/hN8"]) };
    intl11 = intl71.intl;
    items[9] = obj10;
    const obj11 = { value: constants.MEMBER_PRUNE, label: intl12.string(intl71.t.tOTTja) };
    intl12 = intl71.intl;
    items[10] = obj11;
    const obj12 = { value: constants.MEMBER_BAN_ADD, label: intl13.string(intl71.t["NfPn+e"]) };
    intl13 = intl71.intl;
    items[11] = obj12;
    const obj13 = { value: constants.MEMBER_BAN_REMOVE, label: intl14.string(intl71.t.XCsGfI) };
    intl14 = intl71.intl;
    items[12] = obj13;
    const obj14 = { value: constants.MEMBER_UPDATE, label: intl15.string(intl71.t["F/jmNJ"]) };
    intl15 = intl71.intl;
    items[13] = obj14;
    const obj15 = { value: constants.MEMBER_ROLE_UPDATE, label: intl16.string(intl71.t.zAveSI) };
    intl16 = intl71.intl;
    items[14] = obj15;
    const obj16 = { value: constants.MEMBER_MOVE, label: intl17.string(intl71.t.QshteR) };
    intl17 = intl71.intl;
    items[15] = obj16;
    const obj17 = { value: constants.MEMBER_DISCONNECT, label: intl18.string(intl71.t.Z45os7) };
    intl18 = intl71.intl;
    items[16] = obj17;
    const obj18 = { value: constants.BOT_ADD, label: intl19.string(intl71.t.vuH24Z) };
    intl19 = intl71.intl;
    items[17] = obj18;
    const obj19 = { value: constants.THREAD_CREATE, label: intl20.string(intl71.t["+zl0DG"]) };
    intl20 = intl71.intl;
    items[18] = obj19;
    const obj20 = { value: constants.THREAD_UPDATE, label: intl21.string(intl71.t.rbIry3) };
    intl21 = intl71.intl;
    items[19] = obj20;
    const obj21 = { value: constants.THREAD_DELETE, label: intl22.string(intl71.t.hFjNEA) };
    intl22 = intl71.intl;
    items[20] = obj21;
    const obj22 = { value: constants.ROLE_CREATE, label: intl23.string(intl71.t.AbxKtv) };
    intl23 = intl71.intl;
    items[21] = obj22;
    const obj23 = { value: constants.ROLE_UPDATE, label: intl24.string(intl71.t.t3Z6sU) };
    intl24 = intl71.intl;
    items[22] = obj23;
    const obj24 = { value: constants.ROLE_DELETE, label: intl25.string(intl71.t.YsFpa4) };
    intl25 = intl71.intl;
    items[23] = obj24;
    const obj25 = { value: constants.ROLE_POSITION_UPDATE, label: intl26.string(intl71.t["g+lLUV"]) };
    intl26 = intl71.intl;
    items[24] = obj25;
    const obj26 = { value: constants.ONBOARDING_PROMPT_CREATE, label: intl27.string(intl71.t.ZV9tqc) };
    intl27 = intl71.intl;
    items[25] = obj26;
    const obj27 = { value: constants.ONBOARDING_PROMPT_UPDATE, label: intl28.string(intl71.t.PcOdvX) };
    intl28 = intl71.intl;
    items[26] = obj27;
    const obj28 = { value: constants.ONBOARDING_PROMPT_DELETE, label: intl29.string(intl71.t["+r33Na"]) };
    intl29 = intl71.intl;
    items[27] = obj28;
    const obj29 = { value: constants.ONBOARDING_CREATE, label: intl30.string(intl71.t.uDADde) };
    intl30 = intl71.intl;
    items[28] = obj29;
    const obj30 = { value: constants.ONBOARDING_UPDATE, label: intl31.string(intl71.t.J1H1wg) };
    intl31 = intl71.intl;
    items[29] = obj30;
    const obj31 = { value: constants.HOME_SETTINGS_CREATE, label: intl32.string(intl71.t.Di4cvI) };
    intl32 = intl71.intl;
    items[30] = obj31;
    const obj32 = { value: constants.HOME_SETTINGS_UPDATE, label: intl33.string(intl71.t.tzyrJH) };
    intl33 = intl71.intl;
    items[31] = obj32;
    const obj33 = { value: constants.INVITE_CREATE, label: intl34.string(intl71.t["0BNJdX"]) };
    intl34 = intl71.intl;
    items[32] = obj33;
    const obj34 = { value: constants.INVITE_UPDATE, label: intl35.string(intl71.t["o++obV"]) };
    intl35 = intl71.intl;
    items[33] = obj34;
    const obj35 = { value: constants.INVITE_DELETE, label: intl36.string(intl71.t.iP40Az) };
    intl36 = intl71.intl;
    items[34] = obj35;
    const obj36 = { value: constants.WEBHOOK_CREATE, label: intl37.string(intl71.t["tBF4+S"]) };
    intl37 = intl71.intl;
    items[35] = obj36;
    const obj37 = { value: constants.WEBHOOK_UPDATE, label: intl38.string(intl71.t.eV3McO) };
    intl38 = intl71.intl;
    items[36] = obj37;
    const obj38 = { value: constants.WEBHOOK_DELETE, label: intl39.string(intl71.t.AAL3K1) };
    intl39 = intl71.intl;
    items[37] = obj38;
    const obj39 = { value: constants.EMOJI_CREATE, label: intl40.string(intl71.t.RuWm0V) };
    intl40 = intl71.intl;
    items[38] = obj39;
    const obj40 = { value: constants.EMOJI_UPDATE, label: intl41.string(intl71.t.WzdUY7) };
    intl41 = intl71.intl;
    items[39] = obj40;
    const obj41 = { value: constants.EMOJI_DELETE, label: intl42.string(intl71.t.c3dK2L) };
    intl42 = intl71.intl;
    items[40] = obj41;
    const obj42 = { value: constants.MESSAGE_DELETE, label: intl43.string(intl71.t.daTfXh) };
    intl43 = intl71.intl;
    items[41] = obj42;
    const obj43 = { value: constants.MESSAGE_BULK_DELETE, label: intl44.string(intl71.t.nrBxeh) };
    intl44 = intl71.intl;
    items[42] = obj43;
    const obj44 = { value: constants.MESSAGE_PIN, label: intl45.string(intl71.t.MUldyN) };
    intl45 = intl71.intl;
    items[43] = obj44;
    const obj45 = { value: constants.MESSAGE_UNPIN, label: intl46.string(intl71.t.n4zKhA) };
    intl46 = intl71.intl;
    items[44] = obj45;
    const obj46 = { value: constants.INTEGRATION_CREATE, label: intl47.string(intl71.t.deNm8x) };
    intl47 = intl71.intl;
    items[45] = obj46;
    const obj47 = { value: constants.INTEGRATION_UPDATE, label: intl48.string(intl71.t.HT7Sfg) };
    intl48 = intl71.intl;
    items[46] = obj47;
    const obj48 = { value: constants.INTEGRATION_DELETE, label: intl49.string(intl71.t["+kJ09q"]) };
    intl49 = intl71.intl;
    items[47] = obj48;
    const obj49 = { value: constants.STICKER_CREATE, label: intl50.string(intl71.t["3DzNjU"]) };
    intl50 = intl71.intl;
    items[48] = obj49;
    const obj50 = { value: constants.STICKER_UPDATE, label: intl51.string(intl71.t.tdhW5b) };
    intl51 = intl71.intl;
    items[49] = obj50;
    const obj51 = { value: constants.STICKER_DELETE, label: intl52.string(intl71.t["+ZhGOk"]) };
    intl52 = intl71.intl;
    items[50] = obj51;
    const obj52 = { value: constants.STAGE_INSTANCE_CREATE, label: intl53.string(intl71.t.sPbjA6) };
    intl53 = intl71.intl;
    items[51] = obj52;
    const obj53 = { value: constants.STAGE_INSTANCE_UPDATE, label: intl54.string(intl71.t.cW9LfJ) };
    intl54 = intl71.intl;
    items[52] = obj53;
    const obj54 = { value: constants.STAGE_INSTANCE_DELETE, label: intl55.string(intl71.t["U1r+yD"]) };
    intl55 = intl71.intl;
    items[53] = obj54;
    const obj55 = { value: constants.GUILD_SCHEDULED_EVENT_CREATE, label: intl56.string(intl71.t.H81Zyy) };
    intl56 = intl71.intl;
    items[54] = obj55;
    const obj56 = { value: constants.GUILD_SCHEDULED_EVENT_UPDATE, label: intl57.string(intl71.t["FM69l+"]) };
    intl57 = intl71.intl;
    items[55] = obj56;
    const obj57 = { value: constants.GUILD_SCHEDULED_EVENT_DELETE, label: intl58.string(intl71.t.Rq28Bh) };
    intl58 = intl71.intl;
    items[56] = obj57;
    const obj58 = { value: constants.APPLICATION_COMMAND_PERMISSION_UPDATE, label: intl59.string(intl71.t.iPdFOt) };
    intl59 = intl71.intl;
    items[57] = obj58;
    const obj59 = { value: constants.AUTO_MODERATION_BLOCK_MESSAGE, label: intl60.string(intl71.t.gNq5z6) };
    intl60 = intl71.intl;
    items[58] = obj59;
    const obj60 = { value: constants.AUTO_MODERATION_RULE_CREATE, label: intl61.string(intl71.t.f72Zqb) };
    intl61 = intl71.intl;
    items[59] = obj60;
    const obj61 = { value: constants.AUTO_MODERATION_RULE_UPDATE, label: intl62.string(intl71.t.XeqIiv) };
    intl62 = intl71.intl;
    items[60] = obj61;
    const obj62 = { value: constants.AUTO_MODERATION_RULE_DELETE, label: intl63.string(intl71.t.syAApU) };
    intl63 = intl71.intl;
    items[61] = obj62;
    const obj63 = { value: constants.GUILD_HOME_FEATURE_ITEM, label: intl64.string(intl71.t.lhG5KN) };
    intl64 = intl71.intl;
    items[62] = obj63;
    const obj64 = { value: constants.GUILD_HOME_REMOVE_ITEM, label: intl65.string(intl71.t.lRPRwS) };
    intl65 = intl71.intl;
    items[63] = obj64;
    const obj65 = { value: constants.SOUNDBOARD_SOUND_CREATE, label: intl66.string(intl71.t.yoRi5r) };
    intl66 = intl71.intl;
    items[64] = obj65;
    const obj66 = { value: constants.SOUNDBOARD_SOUND_UPDATE, label: intl67.string(intl71.t.uKlG0Z) };
    intl67 = intl71.intl;
    items[65] = obj66;
    const obj67 = { value: constants.SOUNDBOARD_SOUND_DELETE, label: intl68.string(intl71.t.gq0iCT) };
    intl68 = intl71.intl;
    items[66] = obj67;
    const obj68 = { value: constants.VOICE_CHANNEL_STATUS_CREATE, label: intl69.string(intl71.t.rGr0YM) };
    intl69 = intl71.intl;
    items[67] = obj68;
    const obj69 = { value: constants.VOICE_CHANNEL_STATUS_DELETE, label: intl70.string(intl71.t.V9PEQ4) };
    intl70 = intl71.intl;
    items[68] = obj69;
    return items;
  }
}
let obj = {
  [TimeUtils.TimeUnits.SECONDS]: (seconds) => {
    const intl = intl71.intl;
    obj = { seconds };
    return intl.formatToPlainString(intl71.t.geSp4K, obj);
  },
  [TimeUtils.TimeUnits.MINUTES]: (minutes) => {
    const intl = intl71.intl;
    obj = { minutes };
    return intl.formatToPlainString(intl71.t.iXLF9W, obj);
  },
  [TimeUtils.TimeUnits.HOURS]: (hours) => {
    const intl = intl71.intl;
    obj = { hours };
    return intl.formatToPlainString(intl71.t.xCjYxK, obj);
  },
  [TimeUtils.TimeUnits.DAYS]: (days) => {
    const intl = intl71.intl;
    obj = { days };
    return intl.formatToPlainString(intl71.t["k2UNz+"], obj);
  }
};
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  let obj45;
  const f131949 = () => obj45(dependencyMap[18]).t["2IW3C5"];
  const f131958 = (oldValue) => null == oldValue.oldValue ? nYz2mg : oczvRI;
  const f131959 = (newValue) => null == newValue.newValue ? Zplsov : u6cArh;
  const f131960 = (newValue) => {
    let tmp;
    if (null != newValue.newValue) {
      if (null != newValue.oldValue) {
        tmp = tOJ8h7;
      }
      return tmp;
    }
    if (null != newValue.newValue) {
      tmp = WaSgzk;
    } else if (null != newValue.oldValue) {
      tmp = lj_A4u;
    }
  };
  const f131961 = (newValue) => newValue.newValue ? rBT0sn : gc_te5;
  const f131962 = (arg0) => obj6[arg0.newValue];
  const f131963 = (arg0) => {
    let tmp = obj11[arg0.newValue];
    if (tmp == null) {
      tmp = _2FQFiw;
    }
    return tmp;
  };
  targetType = targetType.targetType;
  if (AuditLogTargetTypes.GUILD === targetType) {
    const obj2 = {};
    obj2[AuditLogChangeKeys.NAME] = () => obj45(dependencyMap[18]).t.CkDiNH;
    const DESCRIPTION4 = AuditLogChangeKeys.DESCRIPTION;
    const RP3Ey3 = obj45(1126).t.RP3Ey3;
    const QAVj1Y = obj45(1126).t.QAVj1Y;
    obj2[DESCRIPTION4] = f131959;
    obj2[AuditLogChangeKeys.ICON_HASH] = () => obj45(dependencyMap[18]).t.iLZ8Q9;
    obj2[AuditLogChangeKeys.SPLASH_HASH] = () => obj45(dependencyMap[18]).t["4VV6dn"];
    obj2[AuditLogChangeKeys.DISCOVERY_SPLASH_HASH] = () => obj45(dependencyMap[18]).t["2pds6p"];
    const BANNER_HASH = AuditLogChangeKeys.BANNER_HASH;
    const Cxq4zO = obj45(1126).t.Cxq4zO;
    H7eE_9 = obj45(1126).t["H7eE/9"];
    obj2[BANNER_HASH] = f131959;
    obj2[AuditLogChangeKeys.OWNER_ID] = () => obj45(dependencyMap[18]).t["8ltsLT"];
    obj2[AuditLogChangeKeys.REGION] = () => obj45(dependencyMap[18]).t.X9r5Kf;
    obj2[AuditLogChangeKeys.PREFERRED_LOCALE] = () => obj45(dependencyMap[18]).t.UnXuDS;
    const AFK_CHANNEL_ID = AuditLogChangeKeys.AFK_CHANNEL_ID;
    const ClBuA4 = obj45(1126).t.ClBuA4;
    ms_xtL = obj45(1126).t["ms+xtL"];
    obj2[AFK_CHANNEL_ID] = f131959;
    obj2[AuditLogChangeKeys.AFK_TIMEOUT] = () => obj45(dependencyMap[18]).t.q21fHa;
    const SYSTEM_CHANNEL_ID = AuditLogChangeKeys.SYSTEM_CHANNEL_ID;
    const H1VXaa = obj45(1126).t.H1VXaa;
    const XhtmxJ = obj45(1126).t.XhtmxJ;
    obj2[SYSTEM_CHANNEL_ID] = f131959;
    const RULES_CHANNEL_ID = AuditLogChangeKeys.RULES_CHANNEL_ID;
    const OI6MG2 = obj45(1126).t.OI6MG2;
    const lik3tI = obj45(1126).t.lik3tI;
    obj2[RULES_CHANNEL_ID] = f131959;
    const PUBLIC_UPDATES_CHANNEL_ID = AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID;
    const YxBKrY = obj45(1126).t.YxBKrY;
    const Ehsnij = obj45(1126).t.Ehsnij;
    obj2[PUBLIC_UPDATES_CHANNEL_ID] = f131959;
    const obj3 = {};
    const MFA_LEVEL = AuditLogChangeKeys.MFA_LEVEL;
    obj3[constants2.NONE] = obj45(1126).t.voaCCQ;
    obj3[constants2.ELEVATED] = obj45(1126).t.pRNVwz;
    obj2[MFA_LEVEL] = f131962;
    const WIDGET_ENABLED = AuditLogChangeKeys.WIDGET_ENABLED;
    const ADIty8 = obj45(1126).t.ADIty8;
    const nf58VY = obj45(1126).t.nf58VY;
    obj2[WIDGET_ENABLED] = f131961;
    const WIDGET_CHANNEL_ID = AuditLogChangeKeys.WIDGET_CHANNEL_ID;
    const deQ5wO = obj45(1126).t.deQ5wO;
    obj2[WIDGET_CHANNEL_ID] = f131959;
    const obj4 = {};
    const VERIFICATION_LEVEL = AuditLogChangeKeys.VERIFICATION_LEVEL;
    obj4[constants3.NONE] = obj45(1126).t.W27rsc;
    obj4[constants3.LOW] = obj45(1126).t["V8P+Pw"];
    obj4[constants3.MEDIUM] = obj45(1126).t.ERQFau;
    obj4[constants3.HIGH] = obj45(1126).t["83fN0j"];
    obj4[constants3.VERY_HIGH] = obj45(1126).t.PnkQJE;
    obj2[VERIFICATION_LEVEL] = f131962;
    const obj5 = {};
    const DEFAULT_MESSAGE_NOTIFICATIONS = AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS;
    obj5[constants4.ALL_MESSAGES] = obj45(1126).t.LDi76A;
    obj5[constants4.ONLY_MENTIONS] = obj45(1126).t["6K83ba"];
    obj2[DEFAULT_MESSAGE_NOTIFICATIONS] = f131962;
    const VANITY_URL_CODE = AuditLogChangeKeys.VANITY_URL_CODE;
    const Zplsov = obj45(1126).t.Zplsov;
    const u6cArh = obj45(1126).t.u6cArh;
    obj2[VANITY_URL_CODE] = f131959;
    const obj6 = {};
    const EXPLICIT_CONTENT_FILTER = AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER;
    obj6[constants5.DISABLED] = obj45(1126).t.fmOeL3;
    obj6[constants5.MEMBERS_WITHOUT_ROLES] = obj45(1126).t["4FghYw"];
    obj6[constants5.ALL_MEMBERS] = obj45(1126).t.olyrSm;
    obj2[EXPLICIT_CONTENT_FILTER] = f131962;
    const PREMIUM_PROGRESS_BAR_ENABLED = AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED;
    const rBT0sn = obj45(1126).t.rBT0sn;
    gc_te5 = obj45(1126).t["gc+te5"];
    obj2[PREMIUM_PROGRESS_BAR_ENABLED] = f131961;
    obj2[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => obj45(dependencyMap[18]).t.YbouFH;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS] = () => obj45(dependencyMap[18]).t.g3DMjB;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS] = () => obj45(dependencyMap[18]).t["+fQAel"];
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS] = () => obj45(dependencyMap[18]).t.E1fc4v;
    obj2[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES] = () => obj45(dependencyMap[18]).t.XbwtSA;
    const obj7 = {};
    obj7[AuditLogChangeKeys.REASON] = f131949;
    const merged = Object.assign(obj7);
    return obj2;
  } else {
    if (AuditLogTargetTypes.CHANNEL !== targetType) {
      if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
        if (AuditLogTargetTypes.USER === targetType) {
          const obj8 = {};
          const NICK = AuditLogChangeKeys.NICK;
          const qXDsHv = obj45(1126).t.qXDsHv;
          m_qury = obj45(1126).t["m+qury"];
          const DvLvjF = obj45(1126).t.DvLvjF;
          obj8[NICK] = f131960;
          const DEAF = AuditLogChangeKeys.DEAF;
          const mArLlW = obj45(1126).t.mArLlW;
          const ddvVYG = obj45(1126).t.ddvVYG;
          obj8[DEAF] = f131961;
          const MUTE = AuditLogChangeKeys.MUTE;
          bxs_lS = obj45(1126).t["bxs/lS"];
          const FjecQM = obj45(1126).t.FjecQM;
          obj8[MUTE] = f131961;
          obj8[AuditLogChangeKeys.ROLES_REMOVE] = () => obj45(dependencyMap[18]).t["+2SDWV"];
          obj8[AuditLogChangeKeys.ROLES_ADD] = () => obj45(dependencyMap[18]).t["B3/3IJ"];
          obj8[AuditLogChangeKeys.PRUNE_DELETE_DAYS] = () => obj45(dependencyMap[18]).t["+Cvc+D"];
          const COMMUNICATION_DISABLED_UNTIL = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
          const LXTQr5 = obj45(1126).t.LXTQr5;
          const LXTQr52 = obj45(1126).t.LXTQr5;
          const ULSdnE = obj45(1126).t.ULSdnE;
          obj8[COMMUNICATION_DISABLED_UNTIL] = f131960;
          const BYPASSES_VERIFICATION = AuditLogChangeKeys.BYPASSES_VERIFICATION;
          const NBPBui = obj45(1126).t.NBPBui;
          const zATost = obj45(1126).t.zATost;
          obj8[BYPASSES_VERIFICATION] = f131961;
          obj8[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => obj45(dependencyMap[18]).t.YbouFH;
          const obj9 = {};
          obj9[AuditLogChangeKeys.REASON] = f131949;
          const merged1 = Object.assign(obj9);
          return obj8;
        } else if (AuditLogTargetTypes.ROLE === targetType) {
          const obj10 = {};
          const NAME6 = AuditLogChangeKeys.NAME;
          const QBmlaD = obj45(1126).t.QBmlaD;
          Lfs4r_ = obj45(1126).t["Lfs4r+"];
          obj10[NAME6] = f131958;
          const DESCRIPTION3 = AuditLogChangeKeys.DESCRIPTION;
          let XeYKWJ = obj45(1126).t.XeYKWJ;
          let PSfeIj = obj45(1126).t.PSfeIj;
          obj10[DESCRIPTION3] = f131958;
          obj10[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => obj45(dependencyMap[18]).t["9i/DvE"];
          obj10[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => obj45(dependencyMap[18]).t.pa1ZVh;
          const obj11 = { "#000000": obj45(1126).t.TK6E1H };
          const COLOR = AuditLogChangeKeys.COLOR;
          obj10[COLOR] = f131963;
          obj10[AuditLogChangeKeys.COLORS] = (newValue) => {
            let U44ttm;
            if (null == newValue.newValue.secondary_color) {
              U44ttm = obj45(dependencyMap[18]).t.U44ttm;
            } else {
              U44ttm = obj45(dependencyMap[18]).t["WnSwL/"];
            }
            return U44ttm;
          };
          const HOIST = AuditLogChangeKeys.HOIST;
          const gWfe24 = obj45(1126).t.gWfe24;
          _tb8kN = obj45(1126).t["+tb8kN"];
          obj10[HOIST] = f131961;
          const MENTIONABLE = AuditLogChangeKeys.MENTIONABLE;
          const LL8VFF = obj45(1126).t.LL8VFF;
          const Z7xzmC = obj45(1126).t.Z7xzmC;
          obj10[MENTIONABLE] = f131961;
          obj10[AuditLogChangeKeys.ICON_HASH] = () => obj45(dependencyMap[18]).t["iEE79/"];
          obj10[AuditLogChangeKeys.UNICODE_EMOJI] = () => obj45(dependencyMap[18]).t.KiLMM0;
          const obj12 = {};
          obj12[AuditLogChangeKeys.REASON] = f131949;
          const merged2 = Object.assign(obj12);
          return obj10;
        } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
          const obj13 = {};
          const obj14 = {};
          obj14[AuditLogChangeKeys.REASON] = f131949;
          const merged3 = Object.assign(obj14);
          const TITLE = AuditLogChangeKeys.TITLE;
          sNpuy_ = obj45(1126).t["sNpuy/"];
          obj13[TITLE] = f131958;
          const DESCRIPTION2 = AuditLogChangeKeys.DESCRIPTION;
          const PP1q0x = obj45(1126).t.PP1q0x;
          const z7pYLg = obj45(1126).t.z7pYLg;
          obj13[DESCRIPTION2] = f131958;
          obj13[AuditLogChangeKeys.OPTIONS] = () => obj45(dependencyMap[18]).t["3G5C9+"];
          const SINGLE_SELECT = AuditLogChangeKeys.SINGLE_SELECT;
          const v4WnR3 = obj45(1126).t.v4WnR3;
          obj13[SINGLE_SELECT] = f131961;
          const REQUIRED = AuditLogChangeKeys.REQUIRED;
          const pwsXir = obj45(1126).t.pwsXir;
          obj13[REQUIRED] = f131961;
          return obj13;
        } else if (AuditLogTargetTypes.GUILD_ONBOARDING === targetType) {
          const obj15 = {};
          const obj16 = {};
          obj16[AuditLogChangeKeys.REASON] = f131949;
          const merged4 = Object.assign(obj16);
          obj15[AuditLogChangeKeys.DEFAULT_CHANNEL_IDS] = () => obj45(dependencyMap[18]).t["8M+D2s"];
          const ENABLE_DEFAULT_CHANNELS = AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS;
          EYd_ls = obj45(1126).t["EYd/ls"];
          obj15[ENABLE_DEFAULT_CHANNELS] = f131961;
          const ENABLE_ONBOARDING_PROMPTS = AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS;
          const V3u8PV = obj45(1126).t.V3u8PV;
          r66lc_ = obj45(1126).t["r66lc/"];
          obj15[ENABLE_ONBOARDING_PROMPTS] = f131961;
          const ENABLED = AuditLogChangeKeys.ENABLED;
          const SODVIs = obj45(1126).t.SODVIs;
          const u8HY5U = obj45(1126).t.u8HY5U;
          obj15[ENABLED] = f131961;
          const obj17 = {};
          const MODE = AuditLogChangeKeys.MODE;
          obj17[GuildOnboardingMode.ONBOARDING_ADVANCED] = obj45(1126).t.JbzVsh;
          obj17[GuildOnboardingMode.ONBOARDING_DEFAULT] = obj45(1126).t.aCgU0S;
          obj15[MODE] = f131962;
          return obj15;
        } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
          const obj18 = {};
          const obj19 = {};
          obj19[AuditLogChangeKeys.REASON] = f131949;
          const merged5 = Object.assign(obj19);
          obj18[AuditLogChangeKeys.WELCOME_MESSAGE] = () => obj45(dependencyMap[18]).t.dKQ1xd;
          obj18[AuditLogChangeKeys.NEW_MEMBER_ACTIONS] = () => obj45(dependencyMap[18]).t.jDUIno;
          obj18[AuditLogChangeKeys.RESOURCE_CHANNELS] = () => obj45(dependencyMap[18]).t.SIX0mr;
          return obj18;
        } else if (AuditLogTargetTypes.INVITE === targetType) {
          const obj20 = {};
          obj20[AuditLogChangeKeys.CODE] = () => obj45(dependencyMap[18]).t.rrRHgb;
          obj20[AuditLogChangeKeys.CHANNEL_ID] = () => obj45(dependencyMap[18]).t.Q1vd5q;
          const MAX_USES = AuditLogChangeKeys.MAX_USES;
          const obj21 = { 0: null };
          obj21[0] = obj45(1126).t.Yx8LNm;
          obj20[MAX_USES] = f131963;
          const MAX_AGE = AuditLogChangeKeys.MAX_AGE;
          const obj22 = {};
          const intl = obj45(1126).intl;
          const stringResult = intl.string(obj45(1126).t.PqEzn8);
          obj22[stringResult] = obj45(1126).t.uWrLvw;
          Q_5kcO = obj45(1126).t["Q+5kcO"];
          obj20[MAX_AGE] = f131963;
          const TEMPORARY = AuditLogChangeKeys.TEMPORARY;
          const MWp6H7 = obj45(1126).t.MWp6H7;
          const omiqTH = obj45(1126).t.omiqTH;
          obj20[TEMPORARY] = f131961;
          const FLAGS = AuditLogChangeKeys.FLAGS;
          const obj23 = {};
          obj23[obj45(8078).GuildInviteFlags.IS_GUEST_INVITE] = obj45(1126).t.XYZMbL;
          obj20[FLAGS] = f131962;
          obj20[AuditLogChangeKeys.ROLE_IDS] = () => obj45(dependencyMap[18]).t.gb1Owj;
          const obj24 = {};
          obj24[AuditLogChangeKeys.REASON] = f131949;
          const merged6 = Object.assign(obj24);
          return obj20;
        } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
          const obj25 = {};
          const CHANNEL_ID2 = AuditLogChangeKeys.CHANNEL_ID;
          const jhPprR = obj45(1126).t.jhPprR;
          const ar4qYO = obj45(1126).t.ar4qYO;
          obj25[CHANNEL_ID2] = f131958;
          const NAME5 = AuditLogChangeKeys.NAME;
          const ZVGrzU = obj45(1126).t.ZVGrzU;
          const tywdZR = obj45(1126).t.tywdZR;
          obj25[NAME5] = f131958;
          obj25[AuditLogChangeKeys.AVATAR_HASH] = () => obj45(dependencyMap[18]).t.KB52Uj;
          obj25[AuditLogChangeKeys.REASON] = () => obj45(dependencyMap[18]).t["2IW3C5"];
          return obj25;
        } else if (AuditLogTargetTypes.EMOJI === targetType) {
          const obj26 = {};
          const NAME4 = AuditLogChangeKeys.NAME;
          const ahU1o5 = obj45(1126).t.ahU1o5;
          wxs_vZ = obj45(1126).t["wxs+vZ"];
          obj26[NAME4] = f131958;
          const obj27 = {};
          obj27[AuditLogChangeKeys.REASON] = f131949;
          const merged7 = Object.assign(obj27);
          return obj26;
        } else if (AuditLogTargetTypes.STICKER === targetType) {
          const obj28 = {};
          const NAME3 = AuditLogChangeKeys.NAME;
          const cdl0Yo = obj45(1126).t.cdl0Yo;
          const o3W2ly = obj45(1126).t.o3W2ly;
          obj28[NAME3] = f131958;
          const TAGS = AuditLogChangeKeys.TAGS;
          zwL_S2 = obj45(1126).t["zwL+S2"];
          VYfKA_ = obj45(1126).t["VYfKA+"];
          obj28[TAGS] = f131958;
          const DESCRIPTION = AuditLogChangeKeys.DESCRIPTION;
          XeYKWJ = obj45(1126).t.XeYKWJ;
          PSfeIj = obj45(1126).t.PSfeIj;
          obj28[DESCRIPTION] = f131958;
          const obj29 = {};
          obj29[AuditLogChangeKeys.REASON] = f131949;
          const merged8 = Object.assign(obj29);
          return obj28;
        } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
          const obj30 = {};
          const ENABLE_EMOTICONS = AuditLogChangeKeys.ENABLE_EMOTICONS;
          const FI0m5x = obj45(1126).t.FI0m5x;
          const olpKC6 = obj45(1126).t.olpKC6;
          obj30[ENABLE_EMOTICONS] = f131961;
          const obj31 = { 0: null, 1: null };
          const EXPIRE_BEHAVIOR = AuditLogChangeKeys.EXPIRE_BEHAVIOR;
          obj31[0] = obj45(1126).t["1Bb1+u"];
          obj31[1] = obj45(1126).t.vjlW6m;
          obj30[EXPIRE_BEHAVIOR] = f131962;
          obj30[AuditLogChangeKeys.EXPIRE_GRACE_PERIOD] = () => obj45(dependencyMap[18]).t.iovXMa;
          const obj32 = {};
          obj32[AuditLogChangeKeys.REASON] = f131949;
          const merged9 = Object.assign(obj32);
          return obj30;
        } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
          const obj33 = {};
          const TOPIC = AuditLogChangeKeys.TOPIC;
          m_veAn = obj45(1126).t["m+veAn"];
          let esQcxn = obj45(1126).t.esQcxn;
          obj33[TOPIC] = f131958;
          const obj34 = {};
          const PRIVACY_LEVEL2 = AuditLogChangeKeys.PRIVACY_LEVEL;
          obj34[constants13.GUILD_ONLY] = obj45(1126).t["EC+CDt"];
          obj34[constants13.PUBLIC] = obj45(1126).t["pK/WG0"];
          obj33[PRIVACY_LEVEL2] = f131962;
          const obj35 = {};
          obj35[AuditLogChangeKeys.REASON] = f131949;
          const merged10 = Object.assign(obj35);
          return obj33;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT === targetType) {
          const obj36 = {};
          obj36[AuditLogChangeKeys.NAME] = () => obj45(dependencyMap[18]).t["21EXHW"];
          obj36[AuditLogChangeKeys.DESCRIPTION] = () => obj45(dependencyMap[18]).t.Vm1ofw;
          const obj37 = {};
          const PRIVACY_LEVEL = AuditLogChangeKeys.PRIVACY_LEVEL;
          obj37[constants13.GUILD_ONLY] = obj45(1126).t["EC+CDt"];
          obj37[constants13.PUBLIC] = obj45(1126).t["pK/WG0"];
          obj36[PRIVACY_LEVEL] = f131962;
          const obj38 = {};
          const STATUS = AuditLogChangeKeys.STATUS;
          obj38[constants12.SCHEDULED] = obj45(1126).t.hXKDgq;
          obj38[constants12.ACTIVE] = obj45(1126).t.lRX1nz;
          obj38[constants12.COMPLETED] = obj45(1126).t["/eFIhq"];
          obj38[constants12.CANCELED] = obj45(1126).t.NWIYhj;
          obj36[STATUS] = f131962;
          const obj39 = {};
          const ENTITY_TYPE = AuditLogChangeKeys.ENTITY_TYPE;
          obj39[constants11.NONE] = obj45(1126).t["6sO3Ss"];
          obj39[constants11.STAGE_INSTANCE] = obj45(1126).t["Wo+s1y"];
          obj39[constants11.VOICE] = obj45(1126).t.XCVaIL;
          obj39[constants11.EXTERNAL] = obj45(1126).t.IvhAj2;
          obj36[ENTITY_TYPE] = f131962;
          const CHANNEL_ID = AuditLogChangeKeys.CHANNEL_ID;
          const yJBIcX = obj45(1126).t.yJBIcX;
          _PqSsi = obj45(1126).t["+PqSsi"];
          obj36[CHANNEL_ID] = f131959;
          const LOCATION = AuditLogChangeKeys.LOCATION;
          const GaMBHy = obj45(1126).t.GaMBHy;
          const PsICk0 = obj45(1126).t.PsICk0;
          obj36[LOCATION] = f131959;
          const IMAGE_HASH = AuditLogChangeKeys.IMAGE_HASH;
          const S3vcRK = obj45(1126).t.S3vcRK;
          const KQu47I = obj45(1126).t.KQu47I;
          obj36[IMAGE_HASH] = f131959;
          const obj40 = {};
          obj40[AuditLogChangeKeys.REASON] = f131949;
          const merged11 = Object.assign(obj40);
          return obj36;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          const obj41 = {};
          const SCHEDULED_START_TIME = AuditLogChangeKeys.SCHEDULED_START_TIME;
          const zMIYVg = obj45(1126).t.zMIYVg;
          const fzF8Gd = obj45(1126).t.fzF8Gd;
          obj41[SCHEDULED_START_TIME] = f131959;
          const SCHEDULED_END_TIME = AuditLogChangeKeys.SCHEDULED_END_TIME;
          const vONSQA = obj45(1126).t.vONSQA;
          const IlIti3 = obj45(1126).t.IlIti3;
          obj41[SCHEDULED_END_TIME] = f131959;
          obj41[AuditLogChangeKeys.IS_CANCELED] = (oldValue) => {
            if (null != oldValue.oldValue) {
              if (!oldValue.oldValue) {
                if (oldValue.newValue) {
                  return obj45(dependencyMap[18]).t["7RkicW"];
                }
              }
              if (oldValue.oldValue) {
                if (!oldValue.newValue) {
                  return obj45(dependencyMap[18]).t.dRNTWW;
                }
              }
            }
          };
          const obj42 = {};
          obj42[AuditLogChangeKeys.REASON] = f131949;
          const merged12 = Object.assign(obj42);
          return obj41;
        } else if (AuditLogTargetTypes.THREAD === targetType) {
          const obj43 = {};
          const NAME2 = AuditLogChangeKeys.NAME;
          const tUKRzX = obj45(1126).t.tUKRzX;
          const kPCHON = obj45(1126).t.kPCHON;
          obj43[NAME2] = f131958;
          const ARCHIVED = AuditLogChangeKeys.ARCHIVED;
          const jDi9FK = obj45(1126).t.jDi9FK;
          const F6dvbT = obj45(1126).t.F6dvbT;
          obj43[ARCHIVED] = f131961;
          const LOCKED = AuditLogChangeKeys.LOCKED;
          const JSy1QW = obj45(1126).t.JSy1QW;
          const C7Jgo8 = obj45(1126).t.C7Jgo8;
          obj43[LOCKED] = f131961;
          const INVITABLE = AuditLogChangeKeys.INVITABLE;
          const dxNUs9 = obj45(1126).t.dxNUs9;
          const biJvYG = obj45(1126).t.biJvYG;
          obj43[INVITABLE] = f131961;
          const AUTO_ARCHIVE_DURATION = AuditLogChangeKeys.AUTO_ARCHIVE_DURATION;
          const LuaG3y = obj45(1126).t.LuaG3y;
          obj43[AUTO_ARCHIVE_DURATION] = f131958;
          const RATE_LIMIT_PER_USER = AuditLogChangeKeys.RATE_LIMIT_PER_USER;
          let j4CCJR = obj45(1126).t.j4CCJR;
          obj43[RATE_LIMIT_PER_USER] = f131958;
          obj43[AuditLogChangeKeys.FLAGS] = () => obj45(dependencyMap[18]).t.sSAQtj;
          obj43[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => obj45(dependencyMap[18]).t.H86QQU;
          obj43[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => obj45(dependencyMap[18]).t["8QOseg"];
          const obj44 = {};
          obj44[AuditLogChangeKeys.REASON] = f131949;
          const merged13 = Object.assign(obj44);
          return obj43;
        } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
          const changes = targetType.changes;
          obj45 = {};
          const obj46 = {};
          obj46[AuditLogChangeKeys.REASON] = f131949;
          const merged14 = Object.assign(obj46);
          if (changes != null) {
            const item = changes.forEach((newValue) => {
              if (newValue.newValue) {
                if (newValue.newValue.permission) {
                  obj45[newValue.key] = () => obj45(closure_1_3[18]).t["JH+89C"];
                } else {
                  obj45[newValue.key] = () => obj45(closure_1_3[18]).t.HUrFDu;
                }
              } else {
                obj45[newValue.key] = () => obj45(closure_1_3[18]).t.vynxnV;
              }
            });
          }
          return obj45;
        } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
          const obj47 = {};
          obj47[AuditLogChangeKeys.NAME] = () => obj45(dependencyMap[18]).t.XwxAJT;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE] = () => obj45(dependencyMap[18]).t.fx0pyl;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE] = () => obj45(dependencyMap[18]).t["46Y+L5"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ACTIONS] = () => obj45(dependencyMap[18]).t["8efxfv"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ENABLED] = (newValue) => {
            let Wrg9Jn;
            let oldValue = newValue.newValue;
            if (oldValue == null) {
              oldValue = newValue.oldValue;
            }
            if (true === oldValue) {
              Wrg9Jn = obj45(dependencyMap[18]).t.fCmxC2;
            } else {
              Wrg9Jn = obj45(dependencyMap[18]).t.Wrg9Jn;
            }
            return Wrg9Jn;
          };
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES] = () => obj45(dependencyMap[18]).t.TRb7Nx;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS] = () => obj45(dependencyMap[18]).t.mzitLE;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA] = () => obj45(dependencyMap[18]).t["h/lM65"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS] = () => obj45(dependencyMap[18]).t["9V2yaC"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS] = () => obj45(dependencyMap[18]).t["4Qe9ny"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS] = () => obj45(dependencyMap[18]).t.GyZtxp;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS] = () => obj45(dependencyMap[18]).t.OQDadc;
          obj47[AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST] = () => obj45(dependencyMap[18]).t["FvvR+K"];
          obj47[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST] = () => obj45(dependencyMap[18]).t.p5nSvy;
          const obj48 = {};
          obj48[AuditLogChangeKeys.REASON] = f131949;
          const merged15 = Object.assign(obj48);
          return obj47;
        } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
          const obj49 = {};
          const NAME = AuditLogChangeKeys.NAME;
          const VOtRSO = obj45(1126).t.VOtRSO;
          const OK7B8E = obj45(1126).t.OK7B8E;
          obj49[NAME] = f131958;
          const VOLUME = AuditLogChangeKeys.VOLUME;
          const igrDB9 = obj45(1126).t.igrDB9;
          const L5lDFJ = obj45(1126).t.L5lDFJ;
          obj49[VOLUME] = f131958;
          const EMOJI_NAME = AuditLogChangeKeys.EMOJI_NAME;
          const IIanaY = obj45(1126).t.IIanaY;
          z4w4U_ = obj45(1126).t["z4w4U/"];
          const V8TfyU = obj45(1126).t.V8TfyU;
          obj49[EMOJI_NAME] = f131960;
          const EMOJI_ID = AuditLogChangeKeys.EMOJI_ID;
          const ainxMB = obj45(1126).t.ainxMB;
          obj49[EMOJI_ID] = f131960;
          const obj50 = {};
          obj50[AuditLogChangeKeys.REASON] = f131949;
          const merged16 = Object.assign(obj50);
          return obj49;
        } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
          const obj51 = {};
          obj51[AuditLogChangeKeys.STATUS] = () => obj45(dependencyMap[18]).t.HyCSnI;
          const obj52 = {};
          obj52[AuditLogChangeKeys.REASON] = f131949;
          const merged17 = Object.assign(obj52);
          return obj51;
        } else if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION === targetType) {
          const obj53 = {};
          obj53[AuditLogChangeKeys.VERIFICATION_ENABLED] = (newValue) => {
            let WYT6ka;
            if (true === newValue.newValue) {
              WYT6ka = obj45(dependencyMap[18]).t.fnkzDY;
            } else {
              WYT6ka = obj45(dependencyMap[18]).t.WYT6ka;
            }
            return WYT6ka;
          };
          obj53[AuditLogChangeKeys.MANUAL_APPROVAL_ENABLED] = (newValue) => {
            let WxyOtj;
            if (true === newValue.newValue) {
              WxyOtj = obj45(dependencyMap[18]).t.jzSvVd;
            } else {
              WxyOtj = obj45(dependencyMap[18]).t.WxyOtj;
            }
            return WxyOtj;
          };
          const obj54 = {};
          obj54[AuditLogChangeKeys.REASON] = f131949;
          const merged18 = Object.assign(obj54);
          return obj53;
        } else if (AuditLogTargetTypes.GUILD_PROFILE === targetType) {
          const obj55 = {};
          obj55[AuditLogChangeKeys.DESCRIPTION] = () => obj45(dependencyMap[18]).t.nsUZKY;
          obj55[AuditLogChangeKeys.BRAND_COLOR_PRIMARY] = () => obj45(dependencyMap[18]).t.qe9mgN;
          obj55[AuditLogChangeKeys.CUSTOM_BANNER_HASH] = () => obj45(dependencyMap[18]).t["04b5KC"];
          obj55[AuditLogChangeKeys.TRAITS] = () => obj45(dependencyMap[18]).t.dEy9WO;
          obj55[AuditLogChangeKeys.GAME_APPLICATION_IDS] = () => obj45(dependencyMap[18]).t["8BOT3x"];
          obj55[AuditLogChangeKeys.VISIBILITY] = () => obj45(dependencyMap[18]).t.bCl1Ep;
          const SERVER_TAG = AuditLogChangeKeys.SERVER_TAG;
          const ix1dnX = obj45(1126).t.ix1dnX;
          obj55[SERVER_TAG] = f131959;
          return obj55;
        } else {
          obj = {};
          obj[AuditLogChangeKeys.REASON] = f131949;
          return obj;
        }
      }
    }
    const obj56 = {};
    const NAME7 = AuditLogChangeKeys.NAME;
    const f8Rh0U = obj45(1126).t.f8Rh0U;
    const ebD4Qp = obj45(1126).t.ebD4Qp;
    obj56[NAME7] = f131958;
    const POSITION = AuditLogChangeKeys.POSITION;
    const isS8te = obj45(1126).t.isS8te;
    const t5uBis = obj45(1126).t.t5uBis;
    obj56[POSITION] = f131958;
    const TOPIC2 = AuditLogChangeKeys.TOPIC;
    esQcxn = obj45(1126).t.esQcxn;
    m_veAn = obj45(1126).t["m+veAn"];
    ws_1FA = obj45(1126).t["ws/1FA"];
    obj56[TOPIC2] = f131960;
    const BITRATE = AuditLogChangeKeys.BITRATE;
    const fw81ak = obj45(1126).t.fw81ak;
    const MFNlgZ = obj45(1126).t.MFNlgZ;
    obj56[BITRATE] = f131958;
    const RTC_REGION_OVERRIDE = AuditLogChangeKeys.RTC_REGION_OVERRIDE;
    const v6kajxx = obj45(1126).t["6kajxx"];
    const eGOlmU = obj45(1126).t.eGOlmU;
    obj56[RTC_REGION_OVERRIDE] = f131960;
    const USER_LIMIT = AuditLogChangeKeys.USER_LIMIT;
    const wk5t7p = obj45(1126).t.wk5t7p;
    const XgjCEh = obj45(1126).t.XgjCEh;
    obj56[USER_LIMIT] = f131958;
    const RATE_LIMIT_PER_USER2 = AuditLogChangeKeys.RATE_LIMIT_PER_USER;
    j4CCJR = obj45(1126).t.j4CCJR;
    obj56[RATE_LIMIT_PER_USER2] = f131958;
    const APPLICATION_ID = AuditLogChangeKeys.APPLICATION_ID;
    const fnhin8 = obj45(1126).t.fnhin8;
    const mcNs5B = obj45(1126).t.mcNs5B;
    obj56[APPLICATION_ID] = f131958;
    obj56[AuditLogChangeKeys.PERMISSIONS_RESET] = () => obj45(dependencyMap[18]).t["+vSBFY"];
    obj56[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => obj45(dependencyMap[18]).t.EKLJv8;
    obj56[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => obj45(dependencyMap[18]).t.U3rO5X;
    obj56[AuditLogChangeKeys.REASON] = () => obj45(dependencyMap[18]).t["2IW3C5"];
    const NSFW = AuditLogChangeKeys.NSFW;
    const H8Ri2Y = obj45(1126).t.H8Ri2Y;
    const WW6cJw = obj45(1126).t.WW6cJw;
    obj56[NSFW] = f131961;
    const TYPE = AuditLogChangeKeys.TYPE;
    const Vn5zn2 = obj45(1126).t.Vn5zn2;
    const aq4uWI = obj45(1126).t.aq4uWI;
    obj56[TYPE] = f131958;
    const VIDEO_QUALITY_MODE = AuditLogChangeKeys.VIDEO_QUALITY_MODE;
    const e68fAU = obj45(1126).t.e68fAU;
    const djbES0 = obj45(1126).t.djbES0;
    obj56[VIDEO_QUALITY_MODE] = f131958;
    const DEFAULT_AUTO_ARCHIVE_DURATION = AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION;
    const nYz2mg = obj45(1126).t.nYz2mg;
    const oczvRI = obj45(1126).t.oczvRI;
    obj56[DEFAULT_AUTO_ARCHIVE_DURATION] = f131958;
    const DEFAULT_THREAD_RATE_LIMIT_PER_USER = AuditLogChangeKeys.DEFAULT_THREAD_RATE_LIMIT_PER_USER;
    const tOJ8h7 = obj45(1126).t.tOJ8h7;
    const WaSgzk = obj45(1126).t.WaSgzk;
    lj_A4u = obj45(1126).t["lj+A4u"];
    obj56[DEFAULT_THREAD_RATE_LIMIT_PER_USER] = f131960;
    obj56[AuditLogChangeKeys.FLAGS] = () => obj45(dependencyMap[18]).t.ImCQko;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => obj45(dependencyMap[18]).t.H86QQU;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_EDIT] = () => obj45(dependencyMap[18]).t.YtUzls;
    obj56[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => obj45(dependencyMap[18]).t["8QOseg"];
    const LINKED_LOBBY = AuditLogChangeKeys.LINKED_LOBBY;
    __3TkD = obj45(1126).t["+/3TkD"];
    obj56[LINKED_LOBBY] = f131959;
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
  return null != tmp2 && true === tmp2[key.key];
};
export const checkChangesToRender = function checkChangesToRender(log) {
  const changes = log.changes;
  const tmp = null != changes && changes.some((key) => {
    if (log.actionType === constants2.DELETE) {
      if (log.action !== constants.MEMBER_BAN_ADD) {
        if (log.action !== constants.MEMBER_KICK) {
          let tmp4;
          if (log.action !== constants.MEMBER_PRUNE) {
            tmp4 = key.key !== AuditLogChangeKeys.REASON;
          }
          return !tmp4;
        }
      }
    }
    tmp4 = null != tmp3 && true === tmp3[key.key];
  });
  return tmp;
};
export { ACTION_FILTER_ITEMS };
export const findChangeByKey = function findChangeByKey(arg0, changes) {
  let closure_0 = arg0;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === closure_0);
  }
  return found;
};
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  let stringResult;
  const arr = ACTION_FILTER_ITEMS();
  const found = arr.find((value) => value.value === action.action);
  let closure_0 = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found1 = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found1 = changes.find((key) => key.key === closure_0);
  }
  if (null != found1) {
    const intl = intl71.intl;
    stringResult = intl.string(intl71.t.z3wbj8);
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
  let COMMUNICATION_DISABLED_UNTIL;
  let found1;
  let found2;
  let unit;
  let unit2;
  let closure_0 = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === closure_0);
  }
  const ROLES_ADD = AuditLogChangeKeys.ROLES_ADD;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    found1 = changes1.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  const ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes2 = changes.changes;
    found2 = changes2.filter((key) => key.key === ROLES_REMOVE);
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
      const _Date = Date;
      if (found != null) {
        newValue1 = found.newValue;
      }
      const self = this;
      const self2 = this;
      const _Date1 = new _Date(newValue1);
      const time1 = _Date1.getTime();
      const obj2 = SnowflakeUtilsDefault;
      const diff = time1 - obj2.extractTimestamp(changes.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const obj3 = TimeUtils;
      const timeAndUnit = obj3.getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            let time;
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === TimeUtils.TimeUnits.SECONDS) {
              const _Math2 = Math;
              time = Math.round(diff / 1000);
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
        const intl4 = intl71.intl;
        return intl4.string(intl71.t.MA1ltr);
      }
    }
    return null;
  } else {
    let stringResult;
    if (found1.length > 0) {
      if (found2.length > 0) {
        const intl3 = intl71.intl;
        stringResult = intl3.string(intl71.t.RdMMew);
      }
      return stringResult;
    }
    if (found1.length > 0) {
      const intl2 = intl71.intl;
      stringResult = intl2.string(intl71.t["4GQqs8"]);
    } else {
      stringResult = null;
      if (found2.length > 0) {
        const intl = intl71.intl;
        stringResult = intl.string(intl71.t["8mQ6x0"]);
      }
    }
  }
};
export const getSimpleAuditLogChangeDetails = function getSimpleAuditLogChangeDetails(changes) {
  let formatToPlainStringResult;
  let found;
  let found1;
  let joined;
  let joined1;
  const ROLES_ADD = AuditLogChangeKeys.ROLES_ADD;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found = [];
  }
  const ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    found1 = changes1.filter((key) => key.key === ROLES_REMOVE);
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
    joined = mapped.join(", ");
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
    joined1 = mapped1.join(", ");
  }
  if (found.length > 0) {
    if (found1.length > 0) {
      const intl3 = intl71.intl;
      obj = { roleNamesAdded: joined, roleNamesRemoved: joined1 };
      formatToPlainStringResult = intl3.formatToPlainString(intl71.t.tZw1EW, obj);
    }
    return formatToPlainStringResult;
  }
  if (found.length > 0) {
    const intl2 = intl71.intl;
    const obj2 = { roleNames: joined };
    formatToPlainStringResult = intl2.formatToPlainString(intl71.t["/mTqt5"], obj2);
  } else {
    formatToPlainStringResult = null;
    if (found1.length > 0) {
      const intl = intl71.intl;
      const obj3 = { roleNames: joined1 };
      formatToPlainStringResult = intl.formatToPlainString(intl71.t.Wk4pAJ, obj3);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  if (constants.GUILD_UPDATE === action) {
    return intl71.t.LjZO31;
  } else if (constants.CHANNEL_CREATE === action) {
    let found = null;
    if (null != log.changes) {
      const changes = log.changes;
      found = changes.find((key) => key.key === constants.TYPE);
    }
    if (null == found) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("[AuditLog] Could not find type change for channel create");
      throw error;
    } else {
      const newValue3 = found.newValue;
      if (constants6.GUILD_STAGE_VOICE === newValue3) {
        return intl71.t["OKp4+o"];
      } else if (constants6.GUILD_VOICE === newValue3) {
        return intl71.t.NPOy4G;
      } else if (constants6.GUILD_CATEGORY === newValue3) {
        return intl71.t.T3KIjz;
      } else if (constants6.GUILD_FORUM === newValue3) {
        return intl71.t.VvNgHX;
      } else if (constants6.GUILD_MEDIA === newValue3) {
        return intl71.t["4NWSxa"];
      } else if (constants6.GUILD_ANNOUNCEMENT === newValue3) {
        return intl71.t.eYP6UV;
      } else {
        return intl71.t.wrYNG2;
      }
    }
  } else if (constants.CHANNEL_UPDATE === action) {
    return intl71.t.nTYk6B;
  } else if (constants.CHANNEL_DELETE === action) {
    return intl71.t.ynfvkm;
  } else if (constants.CHANNEL_OVERWRITE_CREATE === action) {
    return intl71.t.l5Cu1a;
  } else if (constants.CHANNEL_OVERWRITE_UPDATE === action) {
    return intl71.t.uhtbNU;
  } else if (constants.CHANNEL_OVERWRITE_DELETE === action) {
    return intl71.t["HASt/3"];
  } else if (constants.CHANNEL_POSITION_UPDATE === action) {
    return intl71.t.d3aX5b;
  } else if (constants.MEMBER_KICK === action) {
    return intl71.t.B5hDZX;
  } else if (constants.MEMBER_PRUNE === action) {
    return intl71.t.qKOZTP;
  } else if (constants.MEMBER_BAN_ADD === action) {
    return intl71.t["XklUm/"];
  } else if (constants.MEMBER_BAN_REMOVE === action) {
    return intl71.t.o3Y6HD;
  } else if (constants.MEMBER_UPDATE === action) {
    return intl71.t.pznhLN;
  } else if (constants.MEMBER_ROLE_UPDATE === action) {
    return intl71.t.Vngfia;
  } else if (constants.MEMBER_MOVE === action) {
    return intl71.t.Yt6NkU;
  } else if (constants.MEMBER_DISCONNECT === action) {
    return intl71.t.K4eCZw;
  } else if (constants.BOT_ADD === action) {
    return intl71.t.fWvX0G;
  } else if (constants.ROLE_CREATE === action) {
    return intl71.t.UTLTx6;
  } else if (constants.ROLE_UPDATE === action) {
    return intl71.t.NRbN18;
  } else if (constants.ROLE_DELETE === action) {
    return intl71.t["4s63tb"];
  } else if (constants.ROLE_POSITION_UPDATE === action) {
    return intl71.t.jZeaoW;
  } else if (constants.INVITE_CREATE === action) {
    return intl71.t.YHOXWy;
  } else if (constants.INVITE_UPDATE === action) {
    return intl71.t.ja3kGS;
  } else if (constants.INVITE_DELETE === action) {
    return intl71.t["3n/iWk"];
  } else if (constants.WEBHOOK_CREATE === action) {
    return intl71.t.MhYhil;
  } else if (constants.WEBHOOK_UPDATE === action) {
    return intl71.t["6GTlWB"];
  } else if (constants.WEBHOOK_DELETE === action) {
    return intl71.t.in0VjZ;
  } else if (constants.EMOJI_CREATE === action) {
    return intl71.t["7vekRO"];
  } else if (constants.EMOJI_UPDATE === action) {
    return intl71.t.IsCKfh;
  } else if (constants.EMOJI_DELETE === action) {
    return intl71.t.JnUaVG;
  } else if (constants.STICKER_CREATE === action) {
    return intl71.t.DRZifq;
  } else if (constants.STICKER_UPDATE === action) {
    return intl71.t.bhujGc;
  } else if (constants.STICKER_DELETE === action) {
    return intl71.t.rGEP9U;
  } else if (constants.MESSAGE_DELETE === action) {
    return intl71.t["HPkD+M"];
  } else if (constants.MESSAGE_BULK_DELETE === action) {
    return intl71.t["3RIvLE"];
  } else if (constants.MESSAGE_PIN === action) {
    return intl71.t.Yna7E7;
  } else if (constants.MESSAGE_UNPIN === action) {
    return intl71.t.NCxXUW;
  } else if (constants.INTEGRATION_CREATE === action) {
    return intl71.t.HYvCb3;
  } else if (constants.INTEGRATION_UPDATE === action) {
    return intl71.t.ibCCOS;
  } else if (constants.INTEGRATION_DELETE === action) {
    return intl71.t["8zScWY"];
  } else if (constants.STAGE_INSTANCE_CREATE === action) {
    return intl71.t["n7x/DF"];
  } else if (constants.STAGE_INSTANCE_UPDATE === action) {
    return intl71.t["0hQYU4"];
  } else if (constants.STAGE_INSTANCE_DELETE === action) {
    let prop;
    if (null != log.userId) {
      prop = intl71.t["Oi/in9"];
    } else {
      prop = intl71.t["7ZIFm9"];
    }
    return prop;
  } else if (constants.GUILD_SCHEDULED_EVENT_CREATE === action) {
    return intl71.t.S7k52p;
  } else if (constants.GUILD_SCHEDULED_EVENT_UPDATE === action) {
    return intl71.t.ebTK11;
  } else if (constants.GUILD_SCHEDULED_EVENT_DELETE === action) {
    return intl71.t["/ARPKQ"];
  } else {
    if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
      if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
        if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
          return intl71.t.zYb2da;
        } else if (constants.THREAD_CREATE === action) {
          let found1 = null;
          if (null != log.changes) {
            const changes1 = log.changes;
            found1 = changes1.find((key) => key.key === constants.TYPE);
          }
          if (null == found1) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("[AuditLog] Could not find type change for thread create");
            throw error1;
          } else {
            const newValue2 = found1.newValue;
            if (constants6.PRIVATE_THREAD === newValue2) {
              return intl71.t.Br0y5w;
            } else if (tmp200.ANNOUNCEMENT_THREAD === newValue2) {
              return intl71.t["6uaMmO"];
            } else {
              return intl71.t["2cxQ7G"];
            }
          }
        } else if (constants.THREAD_UPDATE === action) {
          return intl71.t.PSsy4t;
        } else if (constants.THREAD_DELETE === action) {
          return intl71.t.s3Khn8;
        } else if (constants.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
          return intl71.t.uzCqBm;
        } else if (constants.AUTO_MODERATION_BLOCK_MESSAGE === action) {
          return intl71.t.NqWv2K;
        } else if (constants.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
          let SD0PwJ;
          const options = log.options;
          let prop1;
          if (options != null) {
            prop1 = options.auto_moderation_rule_trigger_type;
          }
          const str = AutomodTriggerType.USER_PROFILE;
          if (prop1 === str.toString()) {
            SD0PwJ = intl71.t.YQsjej;
          } else {
            SD0PwJ = intl71.t.SD0PwJ;
          }
          return SD0PwJ;
        } else if (constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
          return intl71.t.Vk4TwX;
        } else if (constants.AUTO_MODERATION_QUARANTINE_USER === action) {
          return intl71.t["/W5u5o"];
        } else if (constants.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
          return intl71.t.ONvWyr;
        } else if (constants.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
          return intl71.t["ryGLk+"];
        } else if (constants.AUTO_MODERATION_RULE_CREATE === action) {
          return intl71.t["NKljj+"];
        } else if (constants.AUTO_MODERATION_RULE_UPDATE === action) {
          return intl71.t["3wEA9u"];
        } else if (constants.AUTO_MODERATION_RULE_DELETE === action) {
          return intl71.t.umua3n;
        } else if (constants.ONBOARDING_PROMPT_CREATE === action) {
          return intl71.t["/8A1g2"];
        } else if (constants.ONBOARDING_PROMPT_UPDATE === action) {
          return intl71.t.ArIrWI;
        } else if (constants.ONBOARDING_PROMPT_DELETE === action) {
          return intl71.t.IuBTao;
        } else if (constants.ONBOARDING_CREATE === action) {
          return intl71.t["wDaq3/"];
        } else if (constants.ONBOARDING_UPDATE === action) {
          return intl71.t["yONu/l"];
        } else if (constants.HOME_SETTINGS_CREATE === action) {
          return intl71.t.dSdCjG;
        } else if (constants.HOME_SETTINGS_UPDATE === action) {
          return intl71.t.XHE8qv;
        } else if (constants.GUILD_HOME_FEATURE_ITEM === action) {
          let found2 = null;
          if (null != log.changes) {
            const changes2 = log.changes;
            found2 = changes2.find((key) => key.key === constants.ENTITY_TYPE);
          }
          if (null == found2) {
            return intl71.t["UZ+U3A"];
          } else {
            const newValue = found2.newValue;
            if (GuildFeedItemTypes.GuildFeedItemTypes.MESSAGE === newValue) {
              return intl71.t["PyEa+J"];
            } else if (GuildFeedItemTypes.GuildFeedItemTypes.FORUM_POST === newValue) {
              return intl71.t.hCuAb1;
            } else {
              return intl71.t["UZ+U3A"];
            }
          }
        } else if (constants.GUILD_HOME_REMOVE_ITEM === action) {
          return intl71.t.kPReun;
        } else if (constants.SOUNDBOARD_SOUND_CREATE === action) {
          return intl71.t["0PD83V"];
        } else if (constants.SOUNDBOARD_SOUND_UPDATE === action) {
          return intl71.t.CM8n1w;
        } else if (constants.SOUNDBOARD_SOUND_DELETE === action) {
          return intl71.t["kVz4/0"];
        } else if (constants.VOICE_CHANNEL_STATUS_CREATE === action) {
          return intl71.t.MWjnU7;
        } else if (constants.VOICE_CHANNEL_STATUS_DELETE === action) {
          return intl71.t.aS8Krq;
        } else if (constants.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
          return intl71.t["NUKUb+"];
        } else if (constants.GUILD_PROFILE_UPDATE === action) {
          return intl71.t.Ed6hF1;
        } else if (constants.GUILD_MIGRATE_PIN_PERMISSION === action) {
          return intl71.t["3Ne7MA"];
        } else if (constants.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
          return intl71.t["naflH+"];
        } else {
          return null;
        }
      }
    }
    return intl71.t["8qCI36"];
  }
};
export const getStringForAddedChannelFlag = function getStringForAddedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = intl71.intl;
    return intl3.string(intl71.t["5G8ZD4"]);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = intl71.intl;
    return intl2.string(intl71.t["4YLtzC"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = intl71.intl;
    return intl.string(intl71.t["1QLRYb"]);
  } else {
    return null;
  }
};
export const getStringForRemovedChannelFlag = function getStringForRemovedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = intl71.intl;
    return intl3.string(intl71.t.S5kuWQ);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = intl71.intl;
    return intl2.string(intl71.t["8qpgcz"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = intl71.intl;
    return intl.string(intl71.t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(item, log) {
  if (constants7.CREATE_INSTANT_INVITE === item) {
    const intl55 = intl71.intl;
    return intl55.string(intl71.t.zJrgTG);
  } else if (constants7.KICK_MEMBERS === item) {
    const intl54 = intl71.intl;
    return intl54.string(intl71.t.pBNv6i);
  } else if (constants7.BAN_MEMBERS === item) {
    const intl53 = intl71.intl;
    return intl53.string(intl71.t.oTBA7N);
  } else if (constants7.ADMINISTRATOR === item) {
    const intl52 = intl71.intl;
    return intl52.string(intl71.t.PGvZqX);
  } else if (constants7.MANAGE_CHANNELS === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      let stringResult;
      if (log.targetType !== tmp103.CHANNEL_OVERWRITE) {
        const intl50 = intl71.intl;
        stringResult = intl50.string(intl71.t["9qLtWs"]);
      }
      return stringResult;
    }
    const intl51 = intl71.intl;
    stringResult = intl51.string(intl71.t.nAw15L);
  } else if (constants7.MANAGE_GUILD === item) {
    const intl49 = intl71.intl;
    return intl49.string(intl71.t.QZRcfO);
  } else if (constants7.VIEW_GUILD_ANALYTICS === item) {
    const intl48 = intl71.intl;
    return intl48.string(intl71.t["rQJBE/"]);
  } else if (constants7.VIEW_CREATOR_MONETIZATION_ANALYTICS === item) {
    const intl47 = intl71.intl;
    return intl47.string(intl71.t["0lTLTv"]);
  } else if (constants7.CHANGE_NICKNAME === item) {
    const intl46 = intl71.intl;
    return intl46.string(intl71.t.dilOF6);
  } else if (constants7.MANAGE_NICKNAMES === item) {
    const intl45 = intl71.intl;
    return intl45.string(intl71.t["t+Ct5x"]);
  } else if (constants7.MANAGE_ROLES === item) {
    const intl44 = intl71.intl;
    return intl44.string(intl71.t["C8d+oG"]);
  } else if (constants7.MANAGE_WEBHOOKS === item) {
    const intl43 = intl71.intl;
    return intl43.string(intl71.t["/ADKmM"]);
  } else if (constants7.CREATE_GUILD_EXPRESSIONS === item) {
    const intl42 = intl71.intl;
    return intl42.string(intl71.t.HarVuP);
  } else if (constants7.MANAGE_GUILD_EXPRESSIONS === item) {
    const intl41 = intl71.intl;
    return intl41.string(intl71.t.bbuXIn);
  } else if (constants7.VIEW_AUDIT_LOG === item) {
    const intl40 = intl71.intl;
    return intl40.string(intl71.t.fZgLpA);
  } else if (constants7.VIEW_CHANNEL === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      let stringResult1;
      if (log.targetType !== tmp77.CHANNEL_OVERWRITE) {
        const intl38 = intl71.intl;
        stringResult1 = intl38.string(intl71.t.uV83yi);
      }
      return stringResult1;
    }
    const intl39 = intl71.intl;
    stringResult1 = intl39.string(intl71.t["W/A4Qp"]);
  } else if (constants7.SEND_MESSAGES === item) {
    const intl37 = intl71.intl;
    return intl37.string(intl71.t.T32rkC);
  } else if (constants7.SEND_TTS_MESSAGES === item) {
    const intl36 = intl71.intl;
    return intl36.string(intl71.t.Mg7bku);
  } else if (constants7.USE_APPLICATION_COMMANDS === item) {
    const intl35 = intl71.intl;
    return intl35.string(intl71.t.shbR1a);
  } else if (constants7.MANAGE_MESSAGES === item) {
    const intl34 = intl71.intl;
    return intl34.string(intl71.t["6lU9xM"]);
  } else if (constants7.EMBED_LINKS === item) {
    const intl33 = intl71.intl;
    return intl33.string(intl71.t["969dEL"]);
  } else if (constants7.ATTACH_FILES === item) {
    const intl32 = intl71.intl;
    return intl32.string(intl71.t["3AS4UM"]);
  } else if (constants7.READ_MESSAGE_HISTORY === item) {
    const intl31 = intl71.intl;
    return intl31.string(intl71.t.l9ufaR);
  } else if (constants7.MENTION_EVERYONE === item) {
    const intl30 = intl71.intl;
    return intl30.string(intl71.t.Y78KGC);
  } else if (constants7.USE_EXTERNAL_EMOJIS === item) {
    const intl29 = intl71.intl;
    return intl29.string(intl71.t.BpBGZU);
  } else if (constants7.USE_EXTERNAL_STICKERS === item) {
    const intl28 = intl71.intl;
    return intl28.string(intl71.t["UeRs+b"]);
  } else if (constants7.ADD_REACTIONS === item) {
    const intl27 = intl71.intl;
    return intl27.string(intl71.t.yEoJAr);
  } else if (constants7.CONNECT === item) {
    const intl26 = intl71.intl;
    return intl26.string(intl71.t.S0W8Z5);
  } else if (constants7.SPEAK === item) {
    const intl25 = intl71.intl;
    return intl25.string(intl71.t["8w1tIR"]);
  } else if (constants7.MUTE_MEMBERS === item) {
    const intl24 = intl71.intl;
    return intl24.string(intl71.t["8EI30/"]);
  } else if (constants7.DEAFEN_MEMBERS === item) {
    const intl23 = intl71.intl;
    return intl23.string(intl71.t["9L47Fr"]);
  } else if (constants7.MOVE_MEMBERS === item) {
    const intl22 = intl71.intl;
    return intl22.string(intl71.t.YtjJPQ);
  } else if (constants7.USE_VAD === item) {
    const intl21 = intl71.intl;
    return intl21.string(intl71.t["08zAV7"]);
  } else if (constants7.PRIORITY_SPEAKER === item) {
    const intl20 = intl71.intl;
    return intl20.string(intl71.t.BVK71i);
  } else if (constants7.STREAM === item) {
    const intl19 = intl71.intl;
    return intl19.string(intl71.t.FlNoSV);
  } else if (constants7.USE_SOUNDBOARD === item) {
    const intl18 = intl71.intl;
    return intl18.string(intl71.t.Bco7NG);
  } else if (constants7.USE_EXTERNAL_SOUNDS === item) {
    const intl17 = intl71.intl;
    return intl17.string(intl71.t.pwaVJ6);
  } else if (constants7.REQUEST_TO_SPEAK === item) {
    const intl16 = intl71.intl;
    return intl16.string(intl71.t["5kicT2"]);
  } else if (constants7.USE_EMBEDDED_ACTIVITIES === item) {
    const intl15 = intl71.intl;
    return intl15.string(intl71.t.rLSGeh);
  } else if (constants7.CREATE_EVENTS === item) {
    const intl14 = intl71.intl;
    return intl14.string(intl71.t.qyjZua);
  } else if (constants7.MANAGE_EVENTS === item) {
    const intl13 = intl71.intl;
    return intl13.string(intl71.t.HIgA5a);
  } else if (constants7.CREATE_PUBLIC_THREADS === item) {
    const intl12 = intl71.intl;
    return intl12.string(intl71.t["25rKnX"]);
  } else if (constants7.CREATE_PRIVATE_THREADS === item) {
    const intl11 = intl71.intl;
    return intl11.string(intl71.t.QwbTSa);
  } else if (constants7.SEND_MESSAGES_IN_THREADS === item) {
    const intl10 = intl71.intl;
    return intl10.string(intl71.t.fTE74g);
  } else if (constants7.MANAGE_THREADS === item) {
    const intl9 = intl71.intl;
    return intl9.string(intl71.t.kEqgr7);
  } else if (constants7.MODERATE_MEMBERS === item) {
    const intl8 = intl71.intl;
    return intl8.string(intl71.t["+RL6pz"]);
  } else if (constants7.SET_VOICE_CHANNEL_STATUS === item) {
    const intl7 = intl71.intl;
    return intl7.string(intl71.t.VBwkUf);
  } else if (constants7.SEND_POLLS === item) {
    const intl6 = intl71.intl;
    return intl6.string(intl71.t.UMQ7Ww);
  } else if (constants7.SEND_VOICE_MESSAGES === item) {
    const intl5 = intl71.intl;
    return intl5.string(intl71.t.WlWSBT);
  } else if (constants7.USE_EXTERNAL_APPS === item) {
    const intl4 = intl71.intl;
    return intl4.string(intl71.t.TtA5rK);
  } else if (constants7.PIN_MESSAGES === item) {
    const intl3 = intl71.intl;
    return intl3.string(intl71.t.Y5BI39);
  } else if (constants7.BYPASS_SLOWMODE === item) {
    const intl2 = intl71.intl;
    return intl2.string(intl71.t.kqcjeV);
  } else if (constants7.MANAGE_OFFICIAL_MESSAGES === item) {
    const intl = intl71.intl;
    return intl.string(intl71.t.Aj9ruN);
  } else {
    return null;
  }
};
export const transformLogs = function transformLogs(arr, arg1) {
  let logger;
  let closure_0 = arg1;
  items = [];
  let item = arr.forEach((targetType) => {
    let onboardingPrompt;
    let settings;
    let stageInstancesByGuild;
    let stickerById;
    const f131957 = (key) => key.key === c0;
    let result3 = targetType;
    let id = targetType;
    let closure_1 = result3;
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
                const NICK = constants.NICK;
                const targetId15 = targetType.targetId;
                const tmp192 = ((targetId15) => user.getUser(targetId15))(targetId15);
                let tmp195 = null;
                const tmp194 = null != tmp192 && true;
                if (tmp194) {
                  ((arg0) => arg0)(tmp192);
                  tmp195 = tmp192;
                }
                let tmp197 = tmp195;
                if (null == tmp195) {
                  tmp197 = tmp195;
                  const tmp200 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId15];
                  if (tmp200) {
                    tmp197 = tmp199[targetId15];
                  }
                }
                let tmp201 = tmp197;
                if (null == tmp197) {
                  tmp201 = tmp197;
                  if (null != targetType.changes) {
                    const changes = targetType.changes;
                    let found = changes.find(f131957);
                    tmp201 = tmp197;
                    if (null != found) {
                      tmp201 = found.newValue || found.oldValue;
                    }
                  }
                }
                if (tmp201 == null) {
                  tmp201 = targetId15;
                }
                tmp3 = tmp201;
              } else if (constants2.ROLE === targetType) {
                let NAME = constants.NAME;
                const targetId14 = targetType.targetId;
                const tmp180 = ((targetId14) => role.getRole(user.id, targetId14))(targetId14);
                let tmp183 = null;
                const tmp182 = null != tmp180 && true;
                if (tmp182) {
                  tmp183 = ((name) => name.name)(tmp180);
                }
                let tmp184 = tmp183;
                if (null == tmp183) {
                  tmp184 = tmp183;
                  const tmp187 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId14];
                  if (tmp187) {
                    tmp184 = tmp186[targetId14];
                  }
                }
                let tmp188 = tmp184;
                if (null == tmp184) {
                  tmp188 = tmp184;
                  if (null != targetType.changes) {
                    const changes1 = targetType.changes;
                    let found1 = changes1.find(f131957);
                    tmp188 = tmp184;
                    if (null != found1) {
                      tmp188 = found1.newValue || found1.oldValue;
                    }
                  }
                }
                if (tmp188 == null) {
                  tmp188 = targetId14;
                }
                tmp3 = tmp188;
              } else if (constants2.ONBOARDING_PROMPT === targetType) {
                const ID = constants.ID;
                const targetId13 = targetType.targetId;
                const tmp165 = ((targetId13) => onboardingPrompt.getOnboardingPrompt(targetId13))(targetId13);
                let tmp166 = null;
                let tmp168 = null;
                const tmp167 = null != tmp165 && true;
                if (tmp167) {
                  tmp168 = ((title) => title.title)(tmp165);
                }
                let tmp169 = tmp168;
                if (null == tmp168) {
                  tmp169 = tmp168;
                  const tmp172 = null != tmp171 && null != tmp171[targetId13];
                  if (tmp172) {
                    tmp169 = tmp171[targetId13];
                  }
                }
                let stringResult = tmp169;
                if (null == tmp169) {
                  stringResult = tmp169;
                  if (null != targetType.changes) {
                    const changes2 = targetType.changes;
                    let found2 = changes2.find(f131957);
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
                  let intl = id(dependencyMap[18]).intl;
                  stringResult = intl.string(id(dependencyMap[18]).t.ZNQyiR);
                }
                tmp3 = stringResult;
              } else {
                tmp3 = tmp;
                if (constants2.GUILD_ONBOARDING !== targetType) {
                  tmp3 = tmp;
                  if (constants2.GUILD_MEMBER_VERIFICATION !== targetType) {
                    if (constants2.INVITE === targetType) {
                      const CODE = constants.CODE;
                      const targetId12 = targetType.targetId;
                      const tmp153 = closure_1_24(targetId12);
                      let tmp156 = null;
                      const tmp155 = null != tmp153 && false;
                      if (tmp155) {
                        tmp156 = undefined(tmp153);
                      }
                      let tmp157 = tmp156;
                      if (null == tmp156) {
                        tmp157 = tmp156;
                        const tmp160 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId12];
                        if (tmp160) {
                          tmp157 = tmp159[targetId12];
                        }
                      }
                      let tmp161 = tmp157;
                      if (null == tmp157) {
                        tmp161 = tmp157;
                        if (null != targetType.changes) {
                          const changes3 = targetType.changes;
                          let found3 = changes3.find(f131957);
                          tmp161 = tmp157;
                          if (null != found3) {
                            tmp161 = found3.newValue || found3.oldValue;
                          }
                        }
                      }
                      if (tmp161 == null) {
                        tmp161 = targetId12;
                      }
                      tmp3 = tmp161;
                    } else if (constants2.INTEGRATION === targetType) {
                      const TYPE = constants.TYPE;
                      const targetId11 = targetType.targetId;
                      const tmp140 = ((targetId11) => {
                        closure_0 = targetId11;
                        integrations = closure_1_14.integrations;
                        return integrations.find((id) => id.id === closure_0);
                      })(targetId11);
                      let tmp143 = null;
                      const tmp142 = null != tmp140 && true;
                      if (tmp142) {
                        tmp143 = ((name) => name.name)(tmp140);
                      }
                      let tmp144 = tmp143;
                      if (null == tmp143) {
                        tmp144 = tmp143;
                        const tmp147 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId11];
                        if (tmp147) {
                          tmp144 = tmp146[targetId11];
                        }
                      }
                      let tmp148 = tmp144;
                      if (null == tmp144) {
                        tmp148 = tmp144;
                        if (null != targetType.changes) {
                          const changes4 = targetType.changes;
                          let found4 = changes4.find(f131957);
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
                    } else if (constants2.WEBHOOK === targetType) {
                      NAME = constants.NAME;
                      const targetId10 = targetType.targetId;
                      const tmp128 = ((targetId10) => {
                        closure_0 = targetId10;
                        const webhooks = closure_1_14.webhooks;
                        return webhooks.find((id) => id.id === closure_0);
                      })(targetId10);
                      let tmp131 = null;
                      const tmp130 = null != tmp128 && true;
                      if (tmp130) {
                        tmp131 = ((name) => name.name)(tmp128);
                      }
                      let tmp132 = tmp131;
                      if (null == tmp131) {
                        tmp132 = tmp131;
                        const tmp135 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId10];
                        if (tmp135) {
                          tmp132 = tmp134[targetId10];
                        }
                      }
                      let tmp136 = tmp132;
                      if (null == tmp132) {
                        tmp136 = tmp132;
                        if (null != targetType.changes) {
                          const changes5 = targetType.changes;
                          let found5 = changes5.find(f131957);
                          tmp136 = tmp132;
                          if (null != found5) {
                            tmp136 = found5.newValue || found5.oldValue;
                          }
                        }
                      }
                      if (tmp136 == null) {
                        tmp136 = targetId10;
                      }
                      tmp3 = tmp136;
                    } else if (constants2.EMOJI === targetType) {
                      NAME = constants.NAME;
                      const targetId9 = targetType.targetId;
                      const tmp116 = ((targetId9) => {
                        closure_0 = targetId9;
                        guildEmoji = guildEmoji.getGuildEmoji(user.id);
                        return guildEmoji.find((id) => id.id === closure_0);
                      })(targetId9);
                      let tmp119 = null;
                      const tmp118 = null != tmp116 && true;
                      if (tmp118) {
                        tmp119 = ((name) => name.name)(tmp116);
                      }
                      let tmp120 = tmp119;
                      if (null == tmp119) {
                        tmp120 = tmp119;
                        const tmp123 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId9];
                        if (tmp123) {
                          tmp120 = tmp122[targetId9];
                        }
                      }
                      let tmp124 = tmp120;
                      if (null == tmp120) {
                        tmp124 = tmp120;
                        if (null != targetType.changes) {
                          const changes6 = targetType.changes;
                          let found6 = changes6.find(f131957);
                          tmp124 = tmp120;
                          if (null != found6) {
                            tmp124 = found6.newValue || found6.oldValue;
                          }
                        }
                      }
                      if (tmp124 == null) {
                        tmp124 = targetId9;
                      }
                      tmp3 = tmp124;
                    } else if (constants2.STICKER === targetType) {
                      NAME = constants.NAME;
                      const targetId8 = targetType.targetId;
                      let num7 = 0;
                      const tmp104 = ((targetId8) => stickerById.getStickerById(targetId8))(targetId8);
                      let tmp107 = null;
                      const tmp106 = null != tmp104 && true;
                      if (tmp106) {
                        tmp107 = ((name) => name.name)(tmp104);
                      }
                      let tmp108 = tmp107;
                      if (null == tmp107) {
                        tmp108 = tmp107;
                        const tmp111 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId8];
                        if (tmp111) {
                          tmp108 = tmp110[targetId8];
                        }
                      }
                      let tmp112 = tmp108;
                      if (null == tmp108) {
                        tmp112 = tmp108;
                        if (null != targetType.changes) {
                          const changes7 = targetType.changes;
                          let found7 = changes7.find(f131957);
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
                    } else if (constants2.STAGE_INSTANCE === targetType) {
                      const TOPIC = constants.TOPIC;
                      const targetId7 = targetType.targetId;
                      let num6 = 0;
                      const tmp92 = ((targetId7) => {
                        closure_0 = targetId7;
                        const values = Object.values(stageInstancesByGuild.getStageInstancesByGuild(user.id));
                        let found;
                        if (values != null) {
                          found = values.find((id) => id.id === closure_0);
                        }
                        return found;
                      })(targetId7);
                      let tmp95 = null;
                      const tmp94 = null != tmp92 && true;
                      if (tmp94) {
                        tmp95 = ((topic) => topic.topic)(tmp92);
                      }
                      let tmp96 = tmp95;
                      if (null == tmp95) {
                        tmp96 = tmp95;
                        const tmp99 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId7];
                        if (tmp99) {
                          tmp96 = tmp98[targetId7];
                        }
                      }
                      let tmp100 = tmp96;
                      if (null == tmp96) {
                        tmp100 = tmp96;
                        if (null != targetType.changes) {
                          const changes8 = targetType.changes;
                          const found8 = changes8.find(f131957);
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
                    } else {
                      if (constants2.GUILD_SCHEDULED_EVENT !== targetType) {
                        if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                          if (constants2.THREAD === targetType) {
                            NAME = constants.NAME;
                            const targetId5 = targetType.targetId;
                            const tmp68 = ((targetId5) => {
                              closure_0 = targetId5;
                              const threads = closure_1_14.threads;
                              return threads.find((id) => id.id === closure_0);
                            })(targetId5);
                            let tmp71 = null;
                            const tmp70 = null != tmp68 && true;
                            if (tmp70) {
                              tmp71 = ((name) => name.name)(tmp68);
                            }
                            let tmp72 = tmp71;
                            if (null == tmp71) {
                              tmp72 = tmp71;
                              const tmp75 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId5];
                              if (tmp75) {
                                tmp72 = tmp74[targetId5];
                              }
                            }
                            let tmp76 = tmp72;
                            if (null == tmp72) {
                              tmp76 = tmp72;
                              if (null != targetType.changes) {
                                const changes9 = targetType.changes;
                                const found9 = changes9.find(f131957);
                                tmp76 = tmp72;
                                if (null != found9) {
                                  tmp76 = found9.newValue || found9.oldValue;
                                }
                              }
                            }
                            if (tmp76 == null) {
                              tmp76 = targetId5;
                            }
                            tmp3 = tmp76;
                          } else if (constants2.APPLICATION_COMMAND === targetType) {
                            if (targetType.targetId === targetType.options.application_id) {
                              integrations = GuildSettingsAuditLogStore.integrations;
                              const found10 = integrations.find((application) => {
                                application = application.application;
                                id = undefined;
                                if (application != null) {
                                  id = application.id;
                                }
                                return id === targetId.targetId;
                              });
                              tmp3 = null != found10 ? found10.name : targetType.targetId;
                            } else {
                              NAME = constants.NAME;
                              const targetId18 = targetType.targetId;
                              const tmp256 = ((targetId18) => {
                                closure_0 = targetId18;
                                const applicationCommands = closure_1_14.applicationCommands;
                                return applicationCommands.find((id) => id.id === closure_0);
                              })(targetId18);
                              let tmp56 = null;
                              const tmp55 = null != tmp256 && true;
                              if (tmp55) {
                                tmp56 = ((name_localized) => {
                                  if (null != name_localized.name_localized) {
                                    let name;
                                    if ("" !== name_localized.name_localized) {
                                      name = name_localized.name_localized;
                                    }
                                    let combined = name;
                                    if (name_localized.type === result3(closure_1_3[25]).ApplicationCommandType.CHAT) {
                                      const _HermesInternal = HermesInternal;
                                      combined = "/\u2060" + name;
                                    }
                                    return combined;
                                  }
                                  name = name_localized.name;
                                })(tmp256);
                              }
                              let tmp57 = tmp56;
                              if (null == tmp56) {
                                tmp57 = tmp56;
                                const tmp60 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId18];
                                if (tmp60) {
                                  tmp57 = tmp59[targetId18];
                                }
                              }
                              let tmp61 = tmp57;
                              if (null == tmp57) {
                                tmp61 = tmp57;
                                if (null != targetType.changes) {
                                  const changes10 = targetType.changes;
                                  const found11 = changes10.find(f131957);
                                  tmp61 = tmp57;
                                  if (null != found11) {
                                    tmp61 = found11.newValue || found11.oldValue;
                                  }
                                }
                              }
                              if (tmp61 == null) {
                                tmp61 = targetId18;
                              }
                              tmp3 = tmp61;
                            }
                          } else if (constants2.AUTO_MODERATION_RULE === targetType) {
                            NAME = constants.NAME;
                            const targetId4 = targetType.targetId;
                            const tmp44 = ((targetId4) => {
                              closure_0 = targetId4;
                              const automodRules = closure_1_14.automodRules;
                              return automodRules.find((id) => id.id === closure_0);
                            })(targetId4);
                            let tmp47 = null;
                            const tmp46 = null != tmp44 && true;
                            if (tmp46) {
                              tmp47 = ((name) => name.name)(tmp44);
                            }
                            let tmp48 = tmp47;
                            if (null == tmp47) {
                              tmp48 = tmp47;
                              const tmp51 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId4];
                              if (tmp51) {
                                tmp48 = tmp50[targetId4];
                              }
                            }
                            let tmp52 = tmp48;
                            if (null == tmp48) {
                              tmp52 = tmp48;
                              if (null != targetType.changes) {
                                const changes11 = targetType.changes;
                                const found12 = changes11.find(f131957);
                                tmp52 = tmp48;
                                if (null != found12) {
                                  tmp52 = found12.newValue || found12.oldValue;
                                }
                              }
                            }
                            if (tmp52 == null) {
                              tmp52 = targetId4;
                            }
                            tmp3 = tmp52;
                          } else if (constants2.GUILD_SOUNDBOARD === targetType) {
                            NAME = constants.NAME;
                            const targetId3 = targetType.targetId;
                            const tmp32 = closure_1_24(targetId3);
                            let tmp35 = null;
                            const tmp34 = null != tmp32 && false;
                            if (tmp34) {
                              tmp35 = undefined(tmp32);
                            }
                            let tmp36 = tmp35;
                            if (null == tmp35) {
                              let tmp39 = null != tmp38 && null != tmp38[targetId3];
                              tmp36 = tmp35;
                              if (tmp39) {
                                tmp36 = tmp38[targetId3];
                              }
                            }
                            let tmp40 = tmp36;
                            if (null == tmp36) {
                              tmp40 = tmp36;
                              if (null != targetType.changes) {
                                const changes12 = targetType.changes;
                                const found13 = changes12.find(f131957);
                                tmp40 = tmp36;
                                if (null != found13) {
                                  tmp40 = found13.newValue || found13.oldValue;
                                }
                              }
                            }
                            if (tmp40 == null) {
                              tmp40 = targetId3;
                            }
                            tmp3 = tmp40;
                          } else if (constants2.HOME_SETTINGS === targetType) {
                            let targetId2 = tmp.id;
                            const GUILD_ID = constants.GUILD_ID;
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
                                const intl = result3(closure_1_3[18]).intl;
                                return intl.string(result3(closure_1_3[18]).t.VbpLyU);
                              })(tmp20);
                            }
                            let tmp23 = tmp22;
                            if (null == tmp22) {
                              tmp23 = tmp22;
                              const tmp26 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId2];
                              if (tmp26) {
                                tmp23 = tmp25[targetId2];
                              }
                            }
                            let tmp27 = tmp23;
                            if (null == tmp23) {
                              tmp27 = tmp23;
                              if (null != targetType.changes) {
                                const changes13 = targetType.changes;
                                const found14 = changes13.find(f131957);
                                tmp27 = tmp23;
                                if (null != found14) {
                                  tmp27 = found14.newValue || found14.oldValue;
                                }
                              }
                            }
                            if (tmp27 == null) {
                              tmp27 = targetId2;
                            }
                            tmp3 = tmp27;
                          } else if (constants2.VOICE_CHANNEL_STATUS === targetType) {
                            const STATUS = constants.STATUS;
                            const targetId = targetType.targetId;
                            const tmp7 = ((targetId) => closure_1_10.getChannel(targetId))(targetId);
                            let tmp8 = null;
                            let tmp10 = null;
                            const tmp9 = null != tmp7 && true;
                            if (tmp9) {
                              tmp10 = ((channel) => {
                                obj = result3(closure_1_3[24]);
                                return obj.computeChannelName(channel, user, closure_1_12, true);
                              })(tmp7);
                            }
                            let tmp11 = tmp10;
                            if (null == tmp10) {
                              tmp11 = tmp10;
                              const tmp14 = null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[targetType.targetType][targetId];
                              if (tmp14) {
                                tmp11 = tmp13[targetId];
                              }
                            }
                            let tmp15 = tmp11;
                            if (null == tmp11) {
                              tmp15 = tmp11;
                              if (null != targetType.changes) {
                                const changes14 = targetType.changes;
                                const found15 = changes14.find(f131957);
                                tmp15 = tmp11;
                                if (null != found15) {
                                  let tmp17 = found15.newValue || found15.oldValue;
                                  tmp15 = tmp17;
                                }
                              }
                            }
                            if (tmp15 == null) {
                              tmp15 = targetId;
                            }
                            tmp3 = tmp15;
                          } else {
                            logger.warn("Unknown targetType for log", targetType);
                            tmp3 = null;
                          }
                        }
                      }
                      NAME = constants.NAME;
                      const targetId6 = targetType.targetId;
                      const tmp80 = ((targetId6) => {
                        closure_0 = targetId6;
                        const guildScheduledEvents = closure_1_14.guildScheduledEvents;
                        return guildScheduledEvents.find((id) => id.id === closure_0);
                      })(targetId6);
                      let tmp81 = null;
                      let tmp83 = null;
                      const tmp82 = null != tmp80 && true;
                      if (tmp82) {
                        tmp83 = ((name) => name.name)(tmp80);
                      }
                      let tmp84 = tmp83;
                      if (null == tmp83) {
                        let tmp87 = null != tmp86 && null != tmp86[targetId6];
                        tmp84 = tmp83;
                        if (tmp87) {
                          tmp84 = tmp86[targetId6];
                        }
                      }
                      let tmp88 = tmp84;
                      if (null == tmp84) {
                        tmp88 = tmp84;
                        if (null != targetType.changes) {
                          const changes15 = targetType.changes;
                          const found16 = changes15.find(f131957);
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
                    }
                  }
                }
              }
            }
          }
          NAME = constants.NAME;
          const targetId16 = targetType.targetId;
          const tmp205 = ((targetId16) => closure_1_10.getChannel(targetId16))(targetId16);
          let tmp208 = null;
          const tmp207 = null != tmp205 && true;
          if (tmp207) {
            tmp208 = ((channel) => {
              obj = result3(closure_1_3[24]);
              return obj.computeChannelName(channel, user, closure_1_12, true);
            })(tmp205);
          }
          let tmp209 = tmp208;
          if (null == tmp208) {
            tmp209 = tmp208;
            const tmp212 = null != tmp211 && null != tmp211[targetId16];
            if (tmp212) {
              tmp209 = tmp211[targetId16];
            }
          }
          let tmp213 = tmp209;
          if (null == tmp209) {
            tmp213 = tmp209;
            if (null != targetType.changes) {
              const changes16 = targetType.changes;
              const found17 = changes16.find(f131957);
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
        }
      }
    }
    if (null != tmp3) {
      let options;
      let result = targetType.set("user", tmp216);
      let result1 = result.set("target", tmp3);
      result3 = result1;
      set = result1.set;
      if (null != result1.options) {
        obj = {};
        const merged = Object.assign(result1.options);
        let type = result1.options.type;
        if (constants3.USER === type) {
          id = result1.options.id;
          user = user.getUser(id);
          const tmp225 = null != user && true;
          if (tmp225) {
            let obj3 = items(dependencyMap[26]);
            id = obj3.getUserTag(user);
          }
          obj.subtarget = id;
        } else if (tmp221.ROLE === type) {
          let role_name = result1.options.role_name;
          const tmp259 = closure_1_24(role_name);
          const tmp222 = null != tmp259 && false;
          if (tmp222) {
            role_name = undefined(tmp259);
          }
          obj.subtarget = role_name;
        }
        if (null != result1.options.channel_id) {
          let targetId17 = result1.options.channel_id;
          let c0 = "";
          if (targetId17 == null) {
            targetId17 = result1.targetId;
          }
          const tmp228 = ((targetId17) => closure_1_10.getChannel(targetId17))(targetId17);
          let tmp230 = null;
          const tmp229 = null != tmp228 && true;
          if (tmp229) {
            ((arg0) => arg0)(tmp228);
            tmp230 = tmp228;
          }
          let tmp232 = tmp230;
          if (null == tmp230) {
            tmp232 = tmp230;
            const tmp235 = null != GuildSettingsAuditLogStore.deletedTargets[result1.targetType] && null != GuildSettingsAuditLogStore.deletedTargets[result1.targetType][targetId17];
            if (tmp235) {
              tmp232 = tmp234[targetId17];
            }
          }
          let tmp236 = tmp232;
          if (null == tmp232) {
            tmp236 = tmp232;
            if (null != result1.changes) {
              const changes17 = result1.changes;
              const found18 = changes17.find(f131957);
              tmp236 = tmp232;
              if (null != found18) {
                tmp236 = found18.newValue || found18.oldValue;
                const tmp238 = found18.newValue || found18.oldValue;
              }
            }
          }
          if (tmp236 == null) {
            tmp236 = targetId17;
          }
          obj.channel = tmp236;
        }
        const tmp239 = null != result1.options.members_removed && 0 !== result1.options.members_removed;
        if (tmp239) {
          obj.count = result1.options.members_removed;
        }
        options = obj;
        if (null != result1.options.event_exception_id) {
          let guildScheduledEvents = GuildSettingsAuditLogStore.guildScheduledEvents;
          const found19 = guildScheduledEvents.find((id) => id.id === result1.targetId);
          let found20;
          if (found19 != null) {
            const prop = found19.guild_scheduled_event_exceptions;
            found20 = prop.find((event_exception_id) => event_exception_id.event_exception_id === result1.options.event_exception_id);
          }
          let dateFormat = id(dependencyMap[31]).dateFormat;
          const tmp243 = id(dependencyMap[31]);
          const tmp246 = items(dependencyMap[32]);
          let str5;
          const extractTimestamp = items(dependencyMap[20]).extractTimestamp;
          const tmp249 = items(dependencyMap[20]);
          if (found20 != null) {
            str5 = found20.event_exception_id;
          }
          if (str5 == null) {
            str5 = "0";
          }
          obj.subtarget = dateFormat(tmp246(extractTimestamp(str5)), "LL");
          options = obj;
        }
      } else {
        options = result1.options;
      }
      const result2 = set("options", options);
      result3 = result2;
      let tmp250 = result2;
      if (null != result2.changes) {
        items = [];
        const changes18 = result2.changes;
        let item = changes18.forEach(function(newValue) {
          let added;
          let added2;
          let mapped4;
          let mapped5;
          let newValue10;
          let newValue11;
          let newValue12;
          let newValue13;
          let newValue14;
          let newValue15;
          let newValue17;
          let newValue19;
          let newValue20;
          let newValue21;
          let newValue22;
          let newValue3;
          let newValue4;
          let newValue5;
          let newValue6;
          let newValue7;
          let newValue8;
          let newValue9;
          let oldValue;
          let oldValue10;
          let oldValue11;
          let oldValue12;
          let oldValue13;
          let oldValue14;
          let oldValue15;
          let oldValue17;
          let oldValue19;
          let oldValue20;
          let oldValue21;
          let oldValue22;
          let oldValue3;
          let oldValue4;
          let oldValue5;
          let oldValue6;
          let oldValue7;
          let oldValue8;
          let oldValue9;
          let removed;
          let removed2;
          let tmp2462;
          const f155805 = (value) => value.value === oldValue;
          const f155807 = (type) => type.type;
          const f155808 = (item) => "'" + item + "'";
          const f155809 = (item) => "'" + item + "'";
          const f155810 = (item) => null != item;
          const f155811 = (item) => {
            obj = result3(closure_1_3[24]);
            return obj.computeChannelName(item, user, closure_1_12, true);
          };
          const f155812 = (item) => role.getRole(user.id, item);
          const f155813 = (item) => null != item;
          const f155814 = (name) => name.name;
          const f155815 = (item) => role.getRole(user.id, item);
          const f155816 = (item) => null != item;
          const f155817 = (id) => ({ id: id.id, name: id.name });
          if (result3.action === constants.APPLICATION_COMMAND_PERMISSION_UPDATE) {
            const type = tmp250.type;
            if (constants3.ROLE === type) {
              let name = tmp250.id;
              role = GuildRoleStore.getRole(tmp2.id, name);
              const tmp271 = null != role && true;
              if (tmp271) {
                name = role.name;
              }
              newValue.subtarget = name;
              tmp2462 = newValue;
            } else if (constants3.USER === type) {
              let id2 = tmp250.id;
              user = UserStore.getUser(id2);
              const tmp265 = null != user && true;
              if (tmp265) {
                const obj25 = UserUtilsDefault;
                id2 = obj25.getUserTag(user);
              }
              newValue.subtarget = id2;
              tmp2462 = newValue;
            } else {
              tmp2462 = newValue;
              if (constants3.CHANNEL === type) {
                const id3 = tmp250.id;
                const obj27 = _modDef14(id.id);
                const str23 = obj27.subtract(1);
                if (id3 === str23.toString()) {
                  const intl11 = intl71.intl;
                  newValue.subtarget = intl11.string(intl71.t.MSYhgh);
                  tmp2462 = newValue;
                } else {
                  id = tmp250.id;
                  const channel = ChannelStore.getChannel(id);
                  const tmp255 = null != channel && true;
                  if (tmp255) {
                    const obj24 = useChannelName;
                    id = obj24.computeChannelName(channel, UserStore, RelationshipStore, true);
                  }
                  newValue.subtarget = id;
                  tmp2462 = newValue;
                }
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
            const self45 = this;
            const self46 = this;
            tmp2462 = new AuditLogChange(key18, oldValue22, newValue22);
          } else {
            if (AuditLogChangeKeys.CHANNEL_ID !== newValue.key) {
              if (AuditLogChangeKeys.AFK_CHANNEL_ID !== newValue.key) {
                if (AuditLogChangeKeys.SYSTEM_CHANNEL_ID !== newValue.key) {
                  if (AuditLogChangeKeys.RULES_CHANNEL_ID !== newValue.key) {
                    if (AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID !== newValue.key) {
                      if (AuditLogChangeKeys.AFK_TIMEOUT === newValue.key) {
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
                        const self41 = this;
                        const self42 = this;
                        tmp2462 = new AuditLogChange(key16, oldValue20, newValue20);
                      } else if (AuditLogChangeKeys.BITRATE === newValue.key) {
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
                        const self39 = this;
                        const self40 = this;
                        tmp2462 = new AuditLogChange(key15, oldValue19, newValue19);
                      } else if (AuditLogChangeKeys.COLOR === newValue.key) {
                        ({ newValue: newValue17, oldValue: oldValue17 } = newValue);
                        if (null != newValue.newValue) {
                          const newValue18 = newValue.newValue;
                          const obj20 = utils_ColorUtils;
                          const str21 = obj20.int2hex(newValue18);
                          newValue17 = str21.toUpperCase();
                        }
                        if (null != newValue.oldValue) {
                          const oldValue18 = newValue.oldValue;
                          const obj21 = utils_ColorUtils;
                          const str22 = obj21.int2hex(oldValue18);
                          oldValue17 = str22.toUpperCase();
                        }
                        if (!oldValue17) {
                          oldValue17 = newValue.oldValue;
                        }
                        if (!newValue17) {
                          newValue17 = newValue.newValue;
                        }
                        const self37 = this;
                        const self38 = this;
                        tmp2462 = new AuditLogChange(key14, oldValue17, newValue17);
                      } else if (AuditLogChangeKeys.THEME_COLORS === newValue.key) {
                        ({ newValue: newValue15, oldValue: oldValue15 } = newValue);
                        if (null != newValue.newValue) {
                          const newValue16 = newValue.newValue;
                          const obj16 = utils_ColorUtils;
                          const str13 = obj16.int2hex(newValue16[0]);
                          const formatted = str13.toUpperCase();
                          const _HermesInternal = HermesInternal;
                          const obj17 = utils_ColorUtils;
                          const str14 = obj17.int2hex(newValue16[1]);
                          newValue15 = "" + formatted + ", " + str14.toUpperCase();
                        }
                        if (null != newValue.oldValue) {
                          const oldValue16 = newValue.oldValue;
                          const obj18 = utils_ColorUtils;
                          const str17 = obj18.int2hex(oldValue16[0]);
                          const formatted1 = str17.toUpperCase();
                          const _HermesInternal2 = HermesInternal;
                          const obj19 = utils_ColorUtils;
                          const str18 = obj19.int2hex(oldValue16[1]);
                          oldValue15 = "" + formatted1 + ", " + str18.toUpperCase();
                        }
                        if (!oldValue15) {
                          oldValue15 = newValue.oldValue;
                        }
                        if (!newValue15) {
                          newValue15 = newValue.newValue;
                        }
                        const self35 = this;
                        const self36 = this;
                        tmp2462 = new AuditLogChange(key13, oldValue15, newValue15);
                      } else if (AuditLogChangeKeys.MAX_AGE === newValue.key) {
                        ({ newValue: newValue14, oldValue: oldValue14 } = newValue);
                        if (null != newValue.newValue) {
                          let label = newValue.newValue;
                          const obj14 = InstantInviteUtilsDefault;
                          const maxAgeOptionByValue = obj14.getMaxAgeOptionByValue(label);
                          if (null !== maxAgeOptionByValue) {
                            label = maxAgeOptionByValue.label;
                          }
                          newValue14 = label;
                        }
                        if (null != newValue.oldValue) {
                          let label2 = newValue.oldValue;
                          const obj15 = InstantInviteUtilsDefault;
                          const maxAgeOptionByValue1 = obj15.getMaxAgeOptionByValue(label2);
                          if (null !== maxAgeOptionByValue1) {
                            label2 = maxAgeOptionByValue1.label;
                          }
                          oldValue14 = label2;
                        }
                        if (!oldValue14) {
                          oldValue14 = newValue.oldValue;
                        }
                        if (!newValue14) {
                          newValue14 = newValue.newValue;
                        }
                        const self33 = this;
                        const self34 = this;
                        tmp2462 = new AuditLogChange(key12, oldValue14, newValue14);
                      } else if (AuditLogChangeKeys.PERMISSIONS === newValue.key) {
                        items = [];
                        ({ added: added2, removed: removed2 } = getPermissionChanges(newValue.oldValue, newValue.newValue));
                        getPermissionChanges(newValue.oldValue, newValue.newValue);
                        if (added2.length > 0) {
                          const self31 = this;
                          const self32 = this;
                          const tmp174 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_GRANTED, null, added2);
                          items.push(tmp174);
                        }
                        tmp2462 = items;
                        if (removed2.length > 0) {
                          const self51 = this;
                          const self52 = this;
                          const tmp312 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_DENIED, null, removed2);
                          items.push(tmp312);
                          tmp2462 = items;
                        }
                      } else {
                        if (AuditLogChangeKeys.PERMISSIONS_GRANTED !== newValue.key) {
                          if (AuditLogChangeKeys.PERMISSIONS_DENIED !== newValue.key) {
                            if (AuditLogChangeKeys.FLAGS === newValue.key) {
                              ({ oldValue: oldValue13, newValue: newValue13 } = newValue);
                              let num6 = 0;
                              if (typeof oldValue13 === "number") {
                                num6 = oldValue13;
                              }
                              let num7 = 0;
                              if (typeof newValue13 === "number") {
                                num7 = newValue13;
                              }
                              const obj12 = FlagUtilsAll;
                              const removeFlagResult = obj12.removeFlag(num7, num6);
                              FlagUtilsAll;
                              const items1 = [];
                              const items2 = [];
                              for (const key10533 in ChannelFlags) {
                                let tmp294 = ChannelFlags[key10533];
                                let obj26 = FlagUtilsAll;
                                if (obj26.hasFlag(removeFlagResult, tmp294)) {
                                  let arr3 = items1.push(tmp294);
                                }
                                let tmp295Result = FlagUtilsAll;
                                if (!tmp295Result.hasFlag(tmp151, tmp294)) {
                                  continue;
                                } else {
                                  let arr4 = items2.push(tmp294);
                                  continue;
                                }
                                continue;
                              }
                              const items3 = [];
                              if (items1.length > 0) {
                                const self27 = this;
                                const self28 = this;
                                const tmp158 = new AuditLogChange(newValue.key, null, items1);
                                items3.push(tmp158);
                              }
                              tmp2462 = items3;
                              if (items2.length > 0) {
                                const self47 = this;
                                const self48 = this;
                                const tmp300 = new AuditLogChange(newValue.key, items2, null);
                                items3.push(tmp300);
                                tmp2462 = items3;
                              }
                            } else if (AuditLogChangeKeys.PREFERRED_LOCALE === newValue.key) {
                              ({ newValue: newValue12, oldValue: oldValue12 } = newValue);
                              if (null != newValue.newValue) {
                                newValue = newValue.newValue;
                                const obj10 = intl71;
                                const availableLocales = obj10.getAvailableLocales();
                                const found = availableLocales.find(f155805);
                                let name1 = null;
                                if (null != found) {
                                  name1 = found.name;
                                }
                                newValue12 = name1;
                              }
                              if (null != newValue.oldValue) {
                                oldValue = newValue.oldValue;
                                const obj11 = intl71;
                                const availableLocales1 = obj11.getAvailableLocales();
                                const found1 = availableLocales1.find(f155805);
                                let name2 = null;
                                if (null != found1) {
                                  name2 = found1.name;
                                }
                                oldValue12 = name2;
                              }
                              if (!oldValue12) {
                                oldValue12 = newValue.oldValue;
                              }
                              if (!newValue12) {
                                newValue12 = newValue.newValue;
                              }
                              const self25 = this;
                              const self26 = this;
                              tmp2462 = new AuditLogChange(key11, oldValue12, newValue12);
                            } else if (AuditLogChangeKeys.VIDEO_QUALITY_MODE === newValue.key) {
                              ({ newValue: newValue11, oldValue: oldValue11 } = newValue);
                              if (null != newValue.newValue) {
                                let stringResult;
                                if (newValue.newValue === constants2.FULL) {
                                  const intl8 = intl71.intl;
                                  stringResult = intl8.string(intl71.t["7jOoJE"]);
                                } else {
                                  const intl7 = intl71.intl;
                                  stringResult = intl7.string(intl71.t.jjKYpu);
                                }
                                newValue11 = stringResult;
                              }
                              if (null != newValue.oldValue) {
                                let stringResult1;
                                if (newValue.oldValue === constants2.FULL) {
                                  const intl10 = intl71.intl;
                                  stringResult1 = intl10.string(intl71.t["7jOoJE"]);
                                } else {
                                  const intl9 = intl71.intl;
                                  stringResult1 = intl9.string(intl71.t.jjKYpu);
                                }
                                oldValue11 = stringResult1;
                              }
                              if (!oldValue11) {
                                oldValue11 = newValue.oldValue;
                              }
                              if (!newValue11) {
                                newValue11 = newValue.newValue;
                              }
                              const self23 = this;
                              const self24 = this;
                              tmp2462 = new AuditLogChange(key10, oldValue11, newValue11);
                            } else if (AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS === newValue.key) {
                              id = newValue;
                              obj = {};
                              ({ SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS: obj9[closure_3_28.SUPPRESS_JOIN_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS: obj9[closure_3_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS], SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS: obj9[closure_3_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES: obj9[closure_3_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES] } = AuditLogChangeKeys);
                              const items4 = [];
                              const _Object = Object;
                              const values = Object.values(closure_28);
                              const item = values.forEach(function(item) {
                                if ((closure_0.oldValue & item) === item !== (closure_0.newValue & item) === item) {
                                  const self = this;
                                  const self2 = this;
                                  const tmp5 = new closure_2_9(obj[item], (closure_0.oldValue & item) !== item, (closure_0.newValue & item) !== item);
                                  items4.push(tmp5);
                                }
                              });
                              tmp2462 = items4;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_ACTIONS === newValue.key) {
                              let tmp1122 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue10, oldValue: oldValue10 } = newValue);
                                if (null != newValue.newValue) {
                                  const newValue1 = newValue.newValue;
                                  const mapped = newValue1.map(f155807);
                                  let joined = mapped;
                                  if (null != mapped) {
                                    const mapped1 = mapped.map(AutomodRuleUtils.actionTypeToName);
                                    joined = mapped1.join(", ");
                                  }
                                  newValue10 = joined;
                                }
                                if (null != newValue.oldValue) {
                                  const oldValue1 = newValue.oldValue;
                                  const mapped2 = oldValue1.map(f155807);
                                  let joined1 = mapped2;
                                  if (null != mapped2) {
                                    const mapped3 = mapped2.map(AutomodRuleUtils.actionTypeToName);
                                    joined1 = mapped3.join(", ");
                                  }
                                  oldValue10 = joined1;
                                }
                                if (!oldValue10) {
                                  oldValue10 = newValue.oldValue;
                                }
                                if (!newValue10) {
                                  newValue10 = newValue.newValue;
                                }
                                const self21 = this;
                                const self22 = this;
                                tmp1122 = new AuditLogChange(key9, oldValue10, newValue10);
                              }
                              tmp2462 = tmp1122;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE === newValue.key) {
                              let tmp1002 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const eventTypeToName = AutomodRuleUtils.eventTypeToName;
                                ({ newValue: newValue9, oldValue: oldValue9 } = newValue);
                                if (null != newValue.newValue) {
                                  newValue9 = eventTypeToName(newValue.newValue);
                                }
                                if (null != newValue.oldValue) {
                                  oldValue9 = eventTypeToName(newValue.oldValue);
                                }
                                if (!oldValue9) {
                                  oldValue9 = newValue.oldValue;
                                }
                                if (!newValue9) {
                                  newValue9 = newValue.newValue;
                                }
                                const self19 = this;
                                const self20 = this;
                                tmp1002 = new AuditLogChange(key8, oldValue9, newValue9);
                              }
                              tmp2462 = tmp1002;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE === newValue.key) {
                              let tmp942 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const triggerTypeToName = AutomodRuleUtils.triggerTypeToName;
                                ({ newValue: newValue8, oldValue: oldValue8 } = newValue);
                                if (null != newValue.newValue) {
                                  newValue8 = triggerTypeToName(newValue.newValue);
                                }
                                if (null != newValue.oldValue) {
                                  oldValue8 = triggerTypeToName(newValue.oldValue);
                                }
                                if (!oldValue8) {
                                  oldValue8 = newValue.oldValue;
                                }
                                if (!newValue8) {
                                  newValue8 = newValue.newValue;
                                }
                                const self17 = this;
                                const self18 = this;
                                tmp942 = new AuditLogChange(key7, oldValue8, newValue8);
                              }
                              tmp2462 = tmp942;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA === newValue.key) {
                              let tmp882 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue7, oldValue: oldValue7 } = newValue);
                                if (null != newValue.newValue) {
                                  const newValue23 = newValue.newValue;
                                  let tmp81 = newValue23;
                                  if (null != newValue23) {
                                    tmp81 = newValue23;
                                    if (typeof newValue23 === "object") {
                                      if (null != newValue23.keyword_filter) {
                                        let result;
                                        const _Array3 = Array;
                                        if (Array.isArray(newValue23.keyword_filter)) {
                                          const intl5 = intl71.intl;
                                          const formatToMarkdownString = intl5.formatToMarkdownString;
                                          const keyword_filter = newValue23.keyword_filter;
                                          const obj2 = { newValue: mapped4.join(", ") };
                                          const y91UXV = intl71.t.y91UXV;
                                          mapped4 = keyword_filter.map(f155808);
                                          result = formatToMarkdownString(y91UXV, obj2);
                                        }
                                        tmp81 = result;
                                      }
                                      const _JSON3 = JSON;
                                      result = JSON.stringify(newValue23);
                                    }
                                  }
                                  newValue7 = tmp81;
                                }
                                if (null != newValue.oldValue) {
                                  const oldValue23 = newValue.oldValue;
                                  let tmp87 = oldValue23;
                                  if (null != oldValue23) {
                                    tmp87 = oldValue23;
                                    if (typeof oldValue23 === "object") {
                                      if (null != oldValue23.keyword_filter) {
                                        let result1;
                                        const _Array4 = Array;
                                        if (Array.isArray(oldValue23.keyword_filter)) {
                                          const intl6 = intl71.intl;
                                          const formatToMarkdownString2 = intl6.formatToMarkdownString;
                                          const keyword_filter1 = oldValue23.keyword_filter;
                                          const obj3 = { newValue: mapped5.join(", ") };
                                          const y91UXV2 = intl71.t.y91UXV;
                                          mapped5 = keyword_filter1.map(f155808);
                                          result1 = formatToMarkdownString2(y91UXV2, obj3);
                                        }
                                        tmp87 = result1;
                                      }
                                      const _JSON4 = JSON;
                                      result1 = JSON.stringify(oldValue23);
                                    }
                                  }
                                  oldValue7 = tmp87;
                                }
                                if (!oldValue7) {
                                  oldValue7 = newValue.oldValue;
                                }
                                if (!newValue7) {
                                  newValue7 = newValue.newValue;
                                }
                                const self15 = this;
                                const self16 = this;
                                tmp882 = new AuditLogChange(key6, oldValue7, newValue7);
                              }
                              tmp2462 = tmp882;
                            } else {
                              if (AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS !== newValue.key) {
                                if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS !== newValue.key) {
                                  if (AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS !== newValue.key) {
                                    if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== newValue.key) {
                                      if (AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST !== newValue.key) {
                                        if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST !== newValue.key) {
                                          if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS === newValue.key) {
                                            let tmp582 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue5, oldValue: oldValue5 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue24 = newValue.newValue;
                                                const mapped6 = newValue24.map(ChannelStore.getChannel);
                                                const found2 = mapped6.filter(f155810);
                                                const mapped7 = found2.map(f155811);
                                                let tmp53 = mapped7;
                                                if (null != mapped7) {
                                                  if (null != mapped7) {
                                                    let joined2;
                                                    if (mapped7.length > 0) {
                                                      joined2 = mapped7.join(", ");
                                                    }
                                                    tmp53 = joined2;
                                                  }
                                                  const intl3 = intl71.intl;
                                                  joined2 = intl3.string(intl71.t["K/EdV8"]);
                                                }
                                                newValue5 = tmp53;
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue24 = newValue.oldValue;
                                                const mapped8 = oldValue24.map(ChannelStore.getChannel);
                                                const found3 = mapped8.filter(f155810);
                                                const mapped9 = found3.map(f155811);
                                                let tmp57 = mapped9;
                                                if (null != mapped9) {
                                                  if (null != mapped9) {
                                                    let joined3;
                                                    if (mapped9.length > 0) {
                                                      joined3 = mapped9.join(", ");
                                                    }
                                                    tmp57 = joined3;
                                                  }
                                                  const intl4 = intl71.intl;
                                                  joined3 = intl4.string(intl71.t["K/EdV8"]);
                                                }
                                                oldValue5 = tmp57;
                                              }
                                              if (!oldValue5) {
                                                oldValue5 = newValue.oldValue;
                                              }
                                              if (!newValue5) {
                                                newValue5 = newValue.newValue;
                                              }
                                              const self11 = this;
                                              const self12 = this;
                                              tmp582 = new AuditLogChange(key4, oldValue5, newValue5);
                                            }
                                            tmp2462 = tmp582;
                                          } else if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES === newValue.key) {
                                            let tmp442 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue4, oldValue: oldValue4 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue25 = newValue.newValue;
                                                const mapped10 = newValue25.map(f155812);
                                                const found4 = mapped10.filter(f155813);
                                                const mapped11 = found4.map(f155814);
                                                let tmp39 = mapped11;
                                                if (null != mapped11) {
                                                  if (null != mapped11) {
                                                    let joined4;
                                                    if (mapped11.length > 0) {
                                                      joined4 = mapped11.join(", ");
                                                    }
                                                    tmp39 = joined4;
                                                  }
                                                  const intl = intl71.intl;
                                                  joined4 = intl.string(intl71.t["K/EdV8"]);
                                                }
                                                newValue4 = tmp39;
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue25 = newValue.oldValue;
                                                const mapped12 = oldValue25.map(f155812);
                                                const found5 = mapped12.filter(f155813);
                                                const mapped13 = found5.map(f155814);
                                                let tmp43 = mapped13;
                                                if (null != mapped13) {
                                                  if (null != mapped13) {
                                                    let joined5;
                                                    if (mapped13.length > 0) {
                                                      joined5 = mapped13.join(", ");
                                                    }
                                                    tmp43 = joined5;
                                                  }
                                                  const intl2 = intl71.intl;
                                                  joined5 = intl2.string(intl71.t["K/EdV8"]);
                                                }
                                                oldValue4 = tmp43;
                                              }
                                              if (!oldValue4) {
                                                oldValue4 = newValue.oldValue;
                                              }
                                              if (!newValue4) {
                                                newValue4 = newValue.newValue;
                                              }
                                              const self9 = this;
                                              const self10 = this;
                                              tmp442 = new AuditLogChange(key3, oldValue4, newValue4);
                                            }
                                            tmp2462 = tmp442;
                                          } else if (AuditLogChangeKeys.ROLE_IDS === newValue.key) {
                                            let tmp302 = newValue;
                                            if (result3.targetType === AuditLogTargetTypes.INVITE) {
                                              ({ newValue: newValue3, oldValue: oldValue3 } = newValue);
                                              if (null != newValue.newValue) {
                                                const newValue26 = newValue.newValue;
                                                const mapped14 = newValue26.map(f155815);
                                                const found6 = mapped14.filter(f155816);
                                                newValue3 = found6.map(f155817);
                                              }
                                              if (null != newValue.oldValue) {
                                                const oldValue26 = newValue.oldValue;
                                                const mapped15 = oldValue26.map(f155815);
                                                const found7 = mapped15.filter(f155816);
                                                oldValue3 = found7.map(f155817);
                                              }
                                              if (!oldValue3) {
                                                oldValue3 = newValue.oldValue;
                                              }
                                              if (!newValue3) {
                                                newValue3 = newValue.newValue;
                                              }
                                              const self7 = this;
                                              const self8 = this;
                                              tmp302 = new AuditLogChange(key2, oldValue3, newValue3);
                                            }
                                            tmp2462 = tmp302;
                                          } else if (AuditLogChangeKeys.AVAILABLE_TAGS === newValue.key) {
                                            tmp2462 = transformAvailableForumTagChange(newValue);
                                          } else if (AuditLogChangeKeys.APPLIED_TAGS === newValue.key) {
                                            tmp2462 = transformAppliedForumTagChange(newValue, result3);
                                          } else if (AuditLogChangeKeys.SCHEDULED_START_TIME === newValue.key) {
                                            ({ newValue, oldValue } = newValue);
                                            if (null != newValue.newValue) {
                                              const newValue2 = newValue.newValue;
                                              const dateFormat = DateUtils.dateFormat;
                                              const _Date = Date;
                                              let self = this;
                                              let self2 = this;
                                              DateUtils;
                                              const tmp8 = _modDef4467;
                                              const date = new Date(newValue2);
                                              newValue = dateFormat(tmp8(date), "LLLL");
                                            }
                                            if (null != newValue.oldValue) {
                                              const oldValue2 = newValue.oldValue;
                                              const dateFormat2 = DateUtils.dateFormat;
                                              const _Date2 = Date;
                                              const self3 = this;
                                              const self4 = this;
                                              DateUtils;
                                              const tmp17 = _modDef4467;
                                              const date1 = new Date(oldValue2);
                                              oldValue = dateFormat2(tmp17(date1), "LLLL");
                                            }
                                            if (!oldValue) {
                                              oldValue = newValue.oldValue;
                                            }
                                            if (!newValue) {
                                              newValue = newValue.newValue;
                                            }
                                            const self5 = this;
                                            const self6 = this;
                                            tmp2462 = new AuditLogChange(key, oldValue, newValue);
                                          } else {
                                            tmp2462 = newValue;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp702 = newValue;
                              if (result3.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue6, oldValue: oldValue6 } = newValue);
                                if (null != newValue.newValue) {
                                  const newValue27 = newValue.newValue;
                                  if (null != newValue27) {
                                    let joined6;
                                    const _Array = Array;
                                    if (Array.isArray(newValue27)) {
                                      const mapped16 = newValue27.map(f155809);
                                      joined6 = mapped16.join(", ");
                                    }
                                    newValue6 = joined6;
                                  }
                                  const _JSON = JSON;
                                  joined6 = JSON.stringify(newValue27);
                                }
                                if (null != newValue.oldValue) {
                                  const oldValue27 = newValue.oldValue;
                                  if (null != oldValue27) {
                                    let joined7;
                                    const _Array2 = Array;
                                    if (Array.isArray(oldValue27)) {
                                      const mapped17 = oldValue27.map(f155809);
                                      joined7 = mapped17.join(", ");
                                    }
                                    oldValue6 = joined7;
                                  }
                                  const _JSON2 = JSON;
                                  joined7 = JSON.stringify(oldValue27);
                                }
                                if (!oldValue6) {
                                  oldValue6 = newValue.oldValue;
                                }
                                if (!newValue6) {
                                  newValue6 = newValue.newValue;
                                }
                                const self13 = this;
                                const self14 = this;
                                tmp702 = new AuditLogChange(key5, oldValue6, newValue6);
                              }
                              tmp2462 = tmp702;
                            }
                          }
                        }
                        const items5 = [];
                        ({ added, removed } = getPermissionChanges(newValue.oldValue, newValue.newValue));
                        getPermissionChanges(newValue.oldValue, newValue.newValue);
                        if (added.length > 0) {
                          const self29 = this;
                          const self30 = this;
                          const tmp166 = new AuditLogChange(newValue.key, null, added);
                          items5.push(tmp166);
                        }
                        tmp2462 = items5;
                        if (removed.length > 0) {
                          const self49 = this;
                          const self50 = this;
                          const tmp306 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_RESET, removed, removed);
                          items5.push(tmp306);
                          tmp2462 = items5;
                        }
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
            const self43 = this;
            const self44 = this;
            tmp2462 = new AuditLogChange(key17, oldValue21, newValue21);
          }
          if (Array.isArray(tmp2462)) {
            const item1 = tmp2462.forEach((item) => result3.push(item));
          } else {
            items.push(tmp2462);
          }
        });
        result3 = result2.set("changes", items);
        tmp250 = result3;
      }
      const arr = items.push(tmp250);
    } else {
      let items1 = [, , , , , , ];
      ({ MEMBER_PRUNE: arr19[0], MEMBER_DISCONNECT: arr19[1], MEMBER_MOVE: arr19[2], CHANNEL_POSITION_UPDATE: arr19[3], ROLE_POSITION_UPDATE: arr19[4], CREATOR_MONETIZATION_REQUEST_CREATED: arr19[5], CREATOR_MONETIZATION_TERMS_ACCEPTED: arr19[6] } = closure_1_15);
    }
  });
  return items;
};
export { transformAppliedForumTagChange };
export { transformAvailableForumTagChange };