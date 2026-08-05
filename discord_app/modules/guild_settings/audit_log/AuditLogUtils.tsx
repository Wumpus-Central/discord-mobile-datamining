// discord_app/modules/guild_settings/audit_log/AuditLogUtils.tsx
import getEmojiToGroupId from "getEmojiToGroupId";
import handleUpdate from "handleUpdate";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import { AuditLogChange } from "getTargetType";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import AuditLogActions from "AuditLogActions";
import ME from "ME";
import { ChannelFlags } from "set";
import { AutomodTriggerType } from "AutomodEventType";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { set } from "../../../../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";

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
let closure_32;
let closure_33;
let closure_34;
const require = arg1;
function getPermissionChanges(str, str2) {
  let num = 0;
  if (typeof str === "string") {
    num = str;
  }
  const obj = importAll(506);
  let tmpResult = tmp(506);
  let num2 = 0;
  if (typeof str2 === "string") {
    num2 = str2;
  }
  const deserializeResult = importAll(506).deserialize(num);
  tmpResult = tmp(506);
  const deserializeResult1 = tmpResult.deserialize(num2);
  importAll(506);
  const added = [];
  const removed = [];
  for (const key10027 in closure_23) {
    let tmp10 = key10027;
    let tmp11 = constants7;
    let tmp12 = constants7[key10027];
    let tmp13 = importAll;
    let tmp14 = dependencyMap;
    let obj5 = importAll(506);
    if (obj5.has(removeResult, tmp12)) {
      let arr = added.push(tmp12);
    }
    let tmp13Result = tmp13(506);
    if (!tmp13Result.has(tmp7, tmp12)) {
      continue;
    } else {
      arr = removed.push(tmp12);
      continue;
    }
    continue;
  }
  return { added, removed };
}
function transformAppliedForumTagChange(oldValue, targetId) {
  let tmp = oldValue;
  let arr = Array.isArray(oldValue.oldValue) ? tmp.oldValue : [];
  const arr2 = Array.isArray(tmp.newValue) ? tmp.newValue : [];
  let obj = channel;
  channel = channel.getChannel(targetId.targetId);
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let channel1 = null;
  if (null != parent_id) {
    channel1 = obj.getChannel(channel.parent_id);
  }
  obj = {};
  let availableTags;
  if (channel1 != null) {
    availableTags = channel1.availableTags;
  }
  if (availableTags == null) {
    availableTags = [];
  }
  const item = availableTags.forEach((id) => {
    obj[id.id] = { name: id.name, emojiId: id.emojiId, emojiName: id.emojiName };
  });
  const set = new Set(arr);
  const set1 = new Set(arr2);
  const found = arr2.filter((arg0) => !set.has(arg0));
  const found1 = arr.filter((arg0) => !set1.has(arg0));
  const items = [];
  for (const item10055 of found) {
    let tmp10 = item10055;
    let tmp11 = obj[item10055];
    if (tmp11 == null) {
      obj = { id: null, name: null };
      let tmp12 = item10055;
      obj[0] = tmp10;
      obj[1] = tmp10;
      tmp11 = obj;
    }
    let tmp13 = AuditLogChange;
    let tmp14 = AuditLogChangeKeys;
    let tmp15 = new.target;
    let tmp16 = new.target;
    let tmp17 = null;
    let tmp18 = tmp11;
    let tmp19 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, tmp11);
    let tmp20 = tmp19;
    arr = items.push(tmp19);
    continue;
  }
  for (const item10076 of found1) {
    let tmp22 = item10076;
    let tmp23 = obj[item10076];
    if (tmp23 == null) {
      let obj1 = { id: null, name: null };
      let tmp24 = item10076;
      obj1[0] = tmp22;
      obj1[1] = tmp22;
      tmp23 = obj1;
    }
    let tmp25 = AuditLogChange;
    let tmp26 = AuditLogChangeKeys;
    let tmp27 = new.target;
    let tmp28 = new.target;
    let tmp29 = null;
    let tmp30 = tmp23;
    let tmp31 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, tmp23);
    let tmp32 = tmp31;
    arr = items.push(tmp31);
    continue;
  }
  if (items.length > 0) {
    tmp = items;
  }
  return tmp;
}
function transformAvailableForumTagChange(arg0) {
  let newValue;
  let oldValue;
  ({ oldValue, newValue } = arg0);
  if (!Array.isArray(oldValue)) {
    oldValue = [];
  }
  if (!Array.isArray(newValue)) {
    newValue = [];
  }
  if (0 === oldValue.length) {
    if (0 === newValue.length) {
      return arg0;
    }
  }
  let obj = {};
  obj = {};
  const item = oldValue.forEach((id) => {
    obj[id.id] = id;
  });
  const item1 = newValue.forEach((id) => {
    obj[id.id] = id;
  });
  if (oldValue.length < newValue.length) {
    for (const key10023 in obj) {
      let tmp45 = key10023;
      if (null != obj[key10023]) {
        continue;
      } else {
        let tmp4 = AuditLogChangeKeys;
        let AVAILABLE_TAG_ADD = AuditLogChangeKeys.AVAILABLE_TAG_ADD;
        let tmp5 = obj[key10023];
        let tmp6 = null;
        let tmp3 = AuditLogChange;
        if (null != tmp5) {
          obj = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
          ({ id: obj3[0], name: obj3[1] } = tmp5);
          let emoji_id;
          if (0 !== tmp5.emoji_id) {
            emoji_id = tmp5.emoji_id;
          }
          obj[2] = emoji_id;
          ({ emoji_name: obj3[3], moderated: obj3[4] } = tmp5);
          tmp6 = obj;
        }
        let tmp8 = new.target;
        let tmp9 = new.target;
        let tmp10 = AVAILABLE_TAG_ADD;
        let tmp11 = null;
        let tmp12 = tmp6;
        tmp3 = new tmp3(AVAILABLE_TAG_ADD, null, tmp6);
        let tmp14 = tmp3;
        return tmp3;
      }
    }
  }
  if (oldValue.length > newValue.length) {
    for (const key10046 in obj) {
      let tmp48 = key10046;
      if (null != obj[key10046]) {
        continue;
      } else {
        let tmp16 = AuditLogChangeKeys;
        let AVAILABLE_TAG_DELETE = AuditLogChangeKeys.AVAILABLE_TAG_DELETE;
        let tmp17 = obj[key10046];
        let tmp18 = null;
        let tmp15 = AuditLogChange;
        if (null != tmp17) {
          let obj1 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
          ({ id: obj4[0], name: obj4[1] } = tmp17);
          let emoji_id1;
          if (0 !== tmp17.emoji_id) {
            emoji_id1 = tmp17.emoji_id;
          }
          obj1[2] = emoji_id1;
          ({ emoji_name: obj4[3], moderated: obj4[4] } = tmp17);
          tmp18 = obj1;
        }
        let tmp20 = new.target;
        let tmp21 = new.target;
        let tmp22 = AVAILABLE_TAG_DELETE;
        let tmp23 = null;
        let tmp24 = tmp18;
        tmp15 = new tmp15(AVAILABLE_TAG_DELETE, null, tmp18);
        let tmp26 = tmp15;
        return tmp15;
      }
    }
  }
  for (const key10070 in obj) {
    let tmp49 = key10070;
    let tmp50 = obj[key10070];
    let tmp51 = obj[key10070];
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
    let tmp31 = AuditLogChangeKeys;
    let AVAILABLE_TAG_EDIT = AuditLogChangeKeys.AVAILABLE_TAG_EDIT;
    let tmp32 = null;
    let tmp30 = AuditLogChange;
    if (null != tmp50) {
      let obj2 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
      ({ id: obj5[0], name: obj5[1] } = tmp50);
      let emoji_id3;
      if (0 !== tmp50.emoji_id) {
        emoji_id3 = tmp50.emoji_id;
      }
      obj2[2] = emoji_id3;
      ({ emoji_name: obj5[3], moderated: obj5[4] } = tmp50);
      tmp32 = obj2;
    }
    let tmp34 = null;
    if (null != tmp51) {
      let obj3 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
      ({ id: obj6[0], name: obj6[1] } = tmp51);
      let emoji_id4;
      if (0 !== tmp51.emoji_id) {
        emoji_id4 = tmp51.emoji_id;
      }
      obj3[2] = emoji_id4;
      ({ emoji_name: obj6[3], moderated: obj6[4] } = tmp51);
      tmp34 = obj3;
    }
    let tmp36 = new.target;
    let tmp37 = new.target;
    let tmp38 = AVAILABLE_TAG_EDIT;
    let tmp39 = tmp32;
    let tmp40 = tmp34;
    tmp30 = new tmp30(AVAILABLE_TAG_EDIT, tmp32, tmp34);
    let tmp42 = tmp30;
    return tmp30;
  }
  return arg0;
}
({ AuditLogActions: closure_15, AuditLogChangeKeys } = ME);
const AuditLogTargetTypes = ME.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = ME);
({ GuildScheduledEventEntityTypes: closure_32, GuildScheduledEventStatus: closure_33, GuildScheduledEventPrivacyLevel: closure_34 } = GUILD_EVENT_MAX_NAME_LENGTH);
let closure_35 = new require("handleStageInstanceCreateOrUpdate")("AuditLogUtils");
let items = [require("sleep").TimeUnits.DAYS, require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES, require("sleep").TimeUnits.SECONDS];
let closure_37 = { [AuditLogTargetTypes.CHANNEL]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.CHANNEL_OVERWRITE]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.INVITE]: { [AuditLogChangeKeys.INVITER_ID]: true, [AuditLogChangeKeys.USES]: true }, [AuditLogTargetTypes.WEBHOOK]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.APPLICATION_ID]: true }, [AuditLogTargetTypes.INTEGRATION]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.NAME]: true }, [AuditLogTargetTypes.THREAD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true }, [AuditLogTargetTypes.STICKER]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ASSET]: true, [AuditLogChangeKeys.FORMAT_TYPE]: true, [AuditLogChangeKeys.AVAILABLE]: true, [AuditLogChangeKeys.GUILD_ID]: true }, [AuditLogTargetTypes.GUILD_HOME]: { [AuditLogChangeKeys.ENTITY_TYPE]: true }, [AuditLogTargetTypes.GUILD_ONBOARDING]: { [AuditLogChangeKeys.PROMPTS]: true }, [AuditLogTargetTypes.GUILD_SOUNDBOARD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.SOUND_ID]: true } };
class ACTION_FILTER_ITEMS {
  constructor() {
    obj = { value: AuditLogActions.ALL, label: null, valueLabel: null };
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.QxEVcv);
    intl2 = require("getSystemLocale").intl;
    obj[2] = intl2.string(require("getSystemLocale").t.an9Ry3);
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    obj = { value: AuditLogActions.GUILD_UPDATE, label: null };
    intl3 = require("getSystemLocale").intl;
    obj[1] = intl3.string(require("getSystemLocale").t["5INZa3"]);
    items[1] = obj;
    obj1 = { value: AuditLogActions.CHANNEL_CREATE, label: null };
    intl4 = require("getSystemLocale").intl;
    obj1[1] = intl4.string(require("getSystemLocale").t["2uh4vJ"]);
    items[2] = obj1;
    obj2 = { value: AuditLogActions.CHANNEL_UPDATE, label: null };
    intl5 = require("getSystemLocale").intl;
    obj2[1] = intl5.string(require("getSystemLocale").t.mGsBLV);
    items[3] = obj2;
    obj3 = { value: AuditLogActions.CHANNEL_DELETE, label: null };
    intl6 = require("getSystemLocale").intl;
    obj3[1] = intl6.string(require("getSystemLocale").t.hCHzAr);
    items[4] = obj3;
    obj4 = { value: AuditLogActions.CHANNEL_OVERWRITE_CREATE, label: null };
    intl7 = require("getSystemLocale").intl;
    obj4[1] = intl7.string(require("getSystemLocale").t["8TnAMP"]);
    items[5] = obj4;
    obj5 = { value: AuditLogActions.CHANNEL_OVERWRITE_UPDATE, label: null };
    intl8 = require("getSystemLocale").intl;
    obj5[1] = intl8.string(require("getSystemLocale").t.Jqx0Bi);
    items[6] = obj5;
    obj6 = { value: AuditLogActions.CHANNEL_OVERWRITE_DELETE, label: null };
    intl9 = require("getSystemLocale").intl;
    obj6[1] = intl9.string(require("getSystemLocale").t.gBXOr4);
    items[7] = obj6;
    obj7 = { value: AuditLogActions.MEMBER_KICK, label: null };
    intl10 = require("getSystemLocale").intl;
    obj7[1] = intl10.string(require("getSystemLocale").t["Q1/hN8"]);
    items[8] = obj7;
    obj8 = { value: AuditLogActions.MEMBER_PRUNE, label: null };
    intl11 = require("getSystemLocale").intl;
    obj8[1] = intl11.string(require("getSystemLocale").t.tOTTja);
    items[9] = obj8;
    obj9 = { value: AuditLogActions.MEMBER_BAN_ADD, label: null };
    intl12 = require("getSystemLocale").intl;
    obj9[1] = intl12.string(require("getSystemLocale").t["NfPn+e"]);
    items[10] = obj9;
    obj10 = { value: AuditLogActions.MEMBER_BAN_REMOVE, label: null };
    intl13 = require("getSystemLocale").intl;
    obj10[1] = intl13.string(require("getSystemLocale").t.XCsGfI);
    items[11] = obj10;
    obj11 = { value: AuditLogActions.MEMBER_UPDATE, label: null };
    intl14 = require("getSystemLocale").intl;
    obj11[1] = intl14.string(require("getSystemLocale").t["F/jmNJ"]);
    items[12] = obj11;
    obj12 = { value: AuditLogActions.MEMBER_ROLE_UPDATE, label: null };
    intl15 = require("getSystemLocale").intl;
    obj12[1] = intl15.string(require("getSystemLocale").t.zAveSI);
    items[13] = obj12;
    obj13 = { value: AuditLogActions.MEMBER_MOVE, label: null };
    intl16 = require("getSystemLocale").intl;
    obj13[1] = intl16.string(require("getSystemLocale").t.QshteR);
    items[14] = obj13;
    obj14 = { value: AuditLogActions.MEMBER_DISCONNECT, label: null };
    intl17 = require("getSystemLocale").intl;
    obj14[1] = intl17.string(require("getSystemLocale").t.Z45os7);
    items[15] = obj14;
    obj15 = { value: AuditLogActions.BOT_ADD, label: null };
    intl18 = require("getSystemLocale").intl;
    obj15[1] = intl18.string(require("getSystemLocale").t.vuH24Z);
    items[16] = obj15;
    obj16 = { value: AuditLogActions.THREAD_CREATE, label: null };
    intl19 = require("getSystemLocale").intl;
    obj16[1] = intl19.string(require("getSystemLocale").t["+zl0DG"]);
    items[17] = obj16;
    obj17 = { value: AuditLogActions.THREAD_UPDATE, label: null };
    intl20 = require("getSystemLocale").intl;
    obj17[1] = intl20.string(require("getSystemLocale").t.rbIry3);
    items[18] = obj17;
    obj18 = { value: AuditLogActions.THREAD_DELETE, label: null };
    intl21 = require("getSystemLocale").intl;
    obj18[1] = intl21.string(require("getSystemLocale").t.hFjNEA);
    items[19] = obj18;
    obj19 = { value: AuditLogActions.ROLE_CREATE, label: null };
    intl22 = require("getSystemLocale").intl;
    obj19[1] = intl22.string(require("getSystemLocale").t.AbxKtv);
    items[20] = obj19;
    obj20 = { value: AuditLogActions.ROLE_UPDATE, label: null };
    intl23 = require("getSystemLocale").intl;
    obj20[1] = intl23.string(require("getSystemLocale").t.t3Z6sU);
    items[21] = obj20;
    obj21 = { value: AuditLogActions.ROLE_DELETE, label: null };
    intl24 = require("getSystemLocale").intl;
    obj21[1] = intl24.string(require("getSystemLocale").t.YsFpa4);
    items[22] = obj21;
    obj22 = { value: AuditLogActions.ONBOARDING_PROMPT_CREATE, label: null };
    intl25 = require("getSystemLocale").intl;
    obj22[1] = intl25.string(require("getSystemLocale").t.ZV9tqc);
    items[23] = obj22;
    obj23 = { value: AuditLogActions.ONBOARDING_PROMPT_UPDATE, label: null };
    intl26 = require("getSystemLocale").intl;
    obj23[1] = intl26.string(require("getSystemLocale").t.PcOdvX);
    items[24] = obj23;
    obj24 = { value: AuditLogActions.ONBOARDING_PROMPT_DELETE, label: null };
    intl27 = require("getSystemLocale").intl;
    obj24[1] = intl27.string(require("getSystemLocale").t["+r33Na"]);
    items[25] = obj24;
    obj25 = { value: AuditLogActions.ONBOARDING_CREATE, label: null };
    intl28 = require("getSystemLocale").intl;
    obj25[1] = intl28.string(require("getSystemLocale").t.uDADde);
    items[26] = obj25;
    obj26 = { value: AuditLogActions.ONBOARDING_UPDATE, label: null };
    intl29 = require("getSystemLocale").intl;
    obj26[1] = intl29.string(require("getSystemLocale").t.J1H1wg);
    items[27] = obj26;
    obj27 = { value: AuditLogActions.HOME_SETTINGS_CREATE, label: null };
    intl30 = require("getSystemLocale").intl;
    obj27[1] = intl30.string(require("getSystemLocale").t.Di4cvI);
    items[28] = obj27;
    obj28 = { value: AuditLogActions.HOME_SETTINGS_UPDATE, label: null };
    intl31 = require("getSystemLocale").intl;
    obj28[1] = intl31.string(require("getSystemLocale").t.tzyrJH);
    items[29] = obj28;
    obj29 = { value: AuditLogActions.INVITE_CREATE, label: null };
    intl32 = require("getSystemLocale").intl;
    obj29[1] = intl32.string(require("getSystemLocale").t["0BNJdX"]);
    items[30] = obj29;
    obj30 = { value: AuditLogActions.INVITE_UPDATE, label: null };
    intl33 = require("getSystemLocale").intl;
    obj30[1] = intl33.string(require("getSystemLocale").t["o++obV"]);
    items[31] = obj30;
    obj31 = { value: AuditLogActions.INVITE_DELETE, label: null };
    intl34 = require("getSystemLocale").intl;
    obj31[1] = intl34.string(require("getSystemLocale").t.iP40Az);
    items[32] = obj31;
    obj32 = { value: AuditLogActions.WEBHOOK_CREATE, label: null };
    intl35 = require("getSystemLocale").intl;
    obj32[1] = intl35.string(require("getSystemLocale").t["tBF4+S"]);
    items[33] = obj32;
    obj33 = { value: AuditLogActions.WEBHOOK_UPDATE, label: null };
    intl36 = require("getSystemLocale").intl;
    obj33[1] = intl36.string(require("getSystemLocale").t.eV3McO);
    items[34] = obj33;
    obj34 = { value: AuditLogActions.WEBHOOK_DELETE, label: null };
    intl37 = require("getSystemLocale").intl;
    obj34[1] = intl37.string(require("getSystemLocale").t.AAL3K1);
    items[35] = obj34;
    obj35 = { value: AuditLogActions.EMOJI_CREATE, label: null };
    intl38 = require("getSystemLocale").intl;
    obj35[1] = intl38.string(require("getSystemLocale").t.RuWm0V);
    items[36] = obj35;
    obj36 = { value: AuditLogActions.EMOJI_UPDATE, label: null };
    intl39 = require("getSystemLocale").intl;
    obj36[1] = intl39.string(require("getSystemLocale").t.WzdUY7);
    items[37] = obj36;
    obj37 = { value: AuditLogActions.EMOJI_DELETE, label: null };
    intl40 = require("getSystemLocale").intl;
    obj37[1] = intl40.string(require("getSystemLocale").t.c3dK2L);
    items[38] = obj37;
    obj38 = { value: AuditLogActions.MESSAGE_DELETE, label: null };
    intl41 = require("getSystemLocale").intl;
    obj38[1] = intl41.string(require("getSystemLocale").t.daTfXh);
    items[39] = obj38;
    obj39 = { value: AuditLogActions.MESSAGE_BULK_DELETE, label: null };
    intl42 = require("getSystemLocale").intl;
    obj39[1] = intl42.string(require("getSystemLocale").t.nrBxeh);
    items[40] = obj39;
    obj40 = { value: AuditLogActions.MESSAGE_PIN, label: null };
    intl43 = require("getSystemLocale").intl;
    obj40[1] = intl43.string(require("getSystemLocale").t.MUldyN);
    items[41] = obj40;
    obj41 = { value: AuditLogActions.MESSAGE_UNPIN, label: null };
    intl44 = require("getSystemLocale").intl;
    obj41[1] = intl44.string(require("getSystemLocale").t.n4zKhA);
    items[42] = obj41;
    obj42 = { value: AuditLogActions.INTEGRATION_CREATE, label: null };
    intl45 = require("getSystemLocale").intl;
    obj42[1] = intl45.string(require("getSystemLocale").t.deNm8x);
    items[43] = obj42;
    obj43 = { value: AuditLogActions.INTEGRATION_UPDATE, label: null };
    intl46 = require("getSystemLocale").intl;
    obj43[1] = intl46.string(require("getSystemLocale").t.HT7Sfg);
    items[44] = obj43;
    obj44 = { value: AuditLogActions.INTEGRATION_DELETE, label: null };
    intl47 = require("getSystemLocale").intl;
    obj44[1] = intl47.string(require("getSystemLocale").t["+kJ09q"]);
    items[45] = obj44;
    obj45 = { value: AuditLogActions.STICKER_CREATE, label: null };
    intl48 = require("getSystemLocale").intl;
    obj45[1] = intl48.string(require("getSystemLocale").t["3DzNjU"]);
    items[46] = obj45;
    obj46 = { value: AuditLogActions.STICKER_UPDATE, label: null };
    intl49 = require("getSystemLocale").intl;
    obj46[1] = intl49.string(require("getSystemLocale").t.tdhW5b);
    items[47] = obj46;
    obj47 = { value: AuditLogActions.STICKER_DELETE, label: null };
    intl50 = require("getSystemLocale").intl;
    obj47[1] = intl50.string(require("getSystemLocale").t["+ZhGOk"]);
    items[48] = obj47;
    obj48 = { value: AuditLogActions.STAGE_INSTANCE_CREATE, label: null };
    intl51 = require("getSystemLocale").intl;
    obj48[1] = intl51.string(require("getSystemLocale").t.sPbjA6);
    items[49] = obj48;
    obj49 = { value: AuditLogActions.STAGE_INSTANCE_UPDATE, label: null };
    intl52 = require("getSystemLocale").intl;
    obj49[1] = intl52.string(require("getSystemLocale").t.cW9LfJ);
    items[50] = obj49;
    obj50 = { value: AuditLogActions.STAGE_INSTANCE_DELETE, label: null };
    intl53 = require("getSystemLocale").intl;
    obj50[1] = intl53.string(require("getSystemLocale").t["U1r+yD"]);
    items[51] = obj50;
    obj51 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE, label: null };
    intl54 = require("getSystemLocale").intl;
    obj51[1] = intl54.string(require("getSystemLocale").t.H81Zyy);
    items[52] = obj51;
    obj52 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE, label: null };
    intl55 = require("getSystemLocale").intl;
    obj52[1] = intl55.string(require("getSystemLocale").t["FM69l+"]);
    items[53] = obj52;
    obj53 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE, label: null };
    intl56 = require("getSystemLocale").intl;
    obj53[1] = intl56.string(require("getSystemLocale").t.Rq28Bh);
    items[54] = obj53;
    obj54 = { value: AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE, label: null };
    intl57 = require("getSystemLocale").intl;
    obj54[1] = intl57.string(require("getSystemLocale").t.iPdFOt);
    items[55] = obj54;
    obj55 = { value: AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE, label: null };
    intl58 = require("getSystemLocale").intl;
    obj55[1] = intl58.string(require("getSystemLocale").t.gNq5z6);
    items[56] = obj55;
    obj56 = { value: AuditLogActions.AUTO_MODERATION_RULE_CREATE, label: null };
    intl59 = require("getSystemLocale").intl;
    obj56[1] = intl59.string(require("getSystemLocale").t.f72Zqb);
    items[57] = obj56;
    obj57 = { value: AuditLogActions.AUTO_MODERATION_RULE_UPDATE, label: null };
    intl60 = require("getSystemLocale").intl;
    obj57[1] = intl60.string(require("getSystemLocale").t.XeqIiv);
    items[58] = obj57;
    obj58 = { value: AuditLogActions.AUTO_MODERATION_RULE_DELETE, label: null };
    intl61 = require("getSystemLocale").intl;
    obj58[1] = intl61.string(require("getSystemLocale").t.syAApU);
    items[59] = obj58;
    obj59 = { value: AuditLogActions.GUILD_HOME_FEATURE_ITEM, label: null };
    intl62 = require("getSystemLocale").intl;
    obj59[1] = intl62.string(require("getSystemLocale").t.lhG5KN);
    items[60] = obj59;
    obj60 = { value: AuditLogActions.GUILD_HOME_REMOVE_ITEM, label: null };
    intl63 = require("getSystemLocale").intl;
    obj60[1] = intl63.string(require("getSystemLocale").t.lRPRwS);
    items[61] = obj60;
    obj61 = { value: AuditLogActions.SOUNDBOARD_SOUND_CREATE, label: null };
    intl64 = require("getSystemLocale").intl;
    obj61[1] = intl64.string(require("getSystemLocale").t.yoRi5r);
    items[62] = obj61;
    obj62 = { value: AuditLogActions.SOUNDBOARD_SOUND_UPDATE, label: null };
    intl65 = require("getSystemLocale").intl;
    obj62[1] = intl65.string(require("getSystemLocale").t.uKlG0Z);
    items[63] = obj62;
    obj63 = { value: AuditLogActions.SOUNDBOARD_SOUND_DELETE, label: null };
    intl66 = require("getSystemLocale").intl;
    obj63[1] = intl66.string(require("getSystemLocale").t.gq0iCT);
    items[64] = obj63;
    obj64 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_CREATE, label: null };
    intl67 = require("getSystemLocale").intl;
    obj64[1] = intl67.string(require("getSystemLocale").t.rGr0YM);
    items[65] = obj64;
    obj65 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_DELETE, label: null };
    intl68 = require("getSystemLocale").intl;
    obj65[1] = intl68.string(require("getSystemLocale").t.V9PEQ4);
    items[66] = obj65;
    return items;
  }
}
let obj = {
  [arg1(4330).TimeUnits.SECONDS]: (seconds) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.geSp4K, { seconds });
  },
  [arg1(4330).TimeUnits.MINUTES]: (minutes) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes });
  },
  [arg1(4330).TimeUnits.HOURS]: (hours) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.xCjYxK, { hours });
  },
  [arg1(4330).TimeUnits.DAYS]: (days) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t["k2UNz+"], { days });
  }
};
let tmp4 = new require("handleStageInstanceCreateOrUpdate")("AuditLogUtils");
let result = require("handleSettingsLoadSuccess").fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  targetType = targetType.targetType;
  let merged = AuditLogTargetTypes;
  if (AuditLogTargetTypes.GUILD === targetType) {
    let obj = {};
    merged = AuditLogChangeKeys;
    obj[AuditLogChangeKeys.NAME] = () => __3TkD(1236).t.CkDiNH;
    merged = __3TkD;
    merged = dependencyMap;
    __3TkD = __3TkD(1236).t.RP3Ey3;
    obj[AuditLogChangeKeys.DESCRIPTION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1236).t.iLZ8Q9;
    obj[AuditLogChangeKeys.SPLASH_HASH] = () => __3TkD(1236).t["4VV6dn"];
    obj[AuditLogChangeKeys.DISCOVERY_SPLASH_HASH] = () => __3TkD(1236).t["2pds6p"];
    __3TkD = __3TkD(1236).t.Cxq4zO;
    obj[AuditLogChangeKeys.BANNER_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.OWNER_ID] = () => __3TkD(1236).t["8ltsLT"];
    obj[AuditLogChangeKeys.REGION] = () => __3TkD(1236).t.X9r5Kf;
    obj[AuditLogChangeKeys.PREFERRED_LOCALE] = () => __3TkD(1236).t.UnXuDS;
    __3TkD = __3TkD(1236).t.ClBuA4;
    obj[AuditLogChangeKeys.AFK_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.AFK_TIMEOUT] = () => __3TkD(1236).t.q21fHa;
    __3TkD = __3TkD(1236).t.H1VXaa;
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.OI6MG2;
    obj[AuditLogChangeKeys.RULES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.YxBKrY;
    obj[AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj = {};
    merged = constants2;
    obj[constants2.NONE] = __3TkD(1236).t.voaCCQ;
    obj[constants2.ELEVATED] = __3TkD(1236).t.pRNVwz;
    __3TkD = obj;
    obj[AuditLogChangeKeys.MFA_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1236).t.ADIty8;
    obj[AuditLogChangeKeys.WIDGET_ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["6SBsDc"];
    obj[AuditLogChangeKeys.WIDGET_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj1 = {};
    merged = constants3;
    obj1[constants3.NONE] = __3TkD(1236).t.W27rsc;
    obj1[constants3.LOW] = __3TkD(1236).t["V8P+Pw"];
    obj1[constants3.MEDIUM] = __3TkD(1236).t.ERQFau;
    obj1[constants3.HIGH] = __3TkD(1236).t["83fN0j"];
    obj1[constants3.VERY_HIGH] = __3TkD(1236).t.PnkQJE;
    __3TkD = obj1;
    obj[AuditLogChangeKeys.VERIFICATION_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    const obj2 = {};
    merged = constants4;
    obj2[constants4.ALL_MESSAGES] = __3TkD(1236).t.LDi76A;
    obj2[constants4.ONLY_MENTIONS] = __3TkD(1236).t["6K83ba"];
    __3TkD = obj2;
    obj[AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1236).t.Zplsov;
    obj[AuditLogChangeKeys.VANITY_URL_CODE] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj3 = {};
    merged = constants5;
    obj3[constants5.DISABLED] = __3TkD(1236).t.fmOeL3;
    obj3[constants5.MEMBERS_WITHOUT_ROLES] = __3TkD(1236).t["4FghYw"];
    obj3[constants5.ALL_MEMBERS] = __3TkD(1236).t.olyrSm;
    __3TkD = obj3;
    obj[AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1236).t.rBT0sn;
    obj[AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => __3TkD(1236).t.YbouFH;
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS] = () => __3TkD(1236).t.g3DMjB;
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS] = () => __3TkD(1236).t["+fQAel"];
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS] = () => __3TkD(1236).t.E1fc4v;
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES] = () => __3TkD(1236).t.XbwtSA;
    const obj4 = {};
    obj4[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
    merged = obj;
    merged = obj4;
    merged = Object.assign(obj4);
    return obj;
  } else {
    if (merged.CHANNEL !== targetType) {
      if (merged.CHANNEL_OVERWRITE !== targetType) {
        if (merged.USER === targetType) {
          const obj5 = {};
          merged = AuditLogChangeKeys;
          merged = __3TkD;
          merged = dependencyMap;
          __3TkD = __3TkD(1236).t.qXDsHv;
          lj_A4u = __3TkD(1236).t.DvLvjF;
          obj5[AuditLogChangeKeys.NICK] = (newValue) => {
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
          __3TkD = __3TkD(1236).t.mArLlW;
          obj5[AuditLogChangeKeys.DEAF] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["bxs/lS"];
          obj5[AuditLogChangeKeys.MUTE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj5[AuditLogChangeKeys.ROLES_REMOVE] = () => __3TkD(1236).t["+2SDWV"];
          obj5[AuditLogChangeKeys.ROLES_ADD] = () => __3TkD(1236).t["B3/3IJ"];
          obj5[AuditLogChangeKeys.PRUNE_DELETE_DAYS] = () => __3TkD(1236).t["+Cvc+D"];
          __3TkD = __3TkD(1236).t.LXTQr5;
          lj_A4u = __3TkD(1236).t.ULSdnE;
          obj5[AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL] = (newValue) => {
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
          __3TkD = __3TkD(1236).t.NBPBui;
          obj5[AuditLogChangeKeys.BYPASSES_VERIFICATION] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj5[AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => __3TkD(1236).t.YbouFH;
          const obj6 = {};
          obj6[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          merged = obj5;
          merged = obj6;
          merged = Object.assign(obj6);
          return obj5;
        } else if (merged.ROLE === targetType) {
          const obj7 = {};
          merged = AuditLogChangeKeys;
          merged = __3TkD;
          merged = dependencyMap;
          __3TkD = __3TkD(1236).t.QBmlaD;
          obj7[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.XeYKWJ;
          obj7[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj7[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1236).t["9i/DvE"];
          obj7[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1236).t.pa1ZVh;
          const obj8 = { "#000000": null };
          obj8[0] = __3TkD(1236).t.TK6E1H;
          __3TkD = obj8;
          obj7[AuditLogChangeKeys.COLOR] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          obj7[AuditLogChangeKeys.COLORS] = (newValue) => {
            if (null == newValue.newValue.secondary_color) {
              WnSwL_ = __3TkD(1236).t.U44ttm;
            } else {
              WnSwL_ = __3TkD(1236).t["WnSwL/"];
            }
            return WnSwL_;
          };
          __3TkD = __3TkD(1236).t.gWfe24;
          obj7[AuditLogChangeKeys.HOIST] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.LL8VFF;
          obj7[AuditLogChangeKeys.MENTIONABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj7[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1236).t["iEE79/"];
          obj7[AuditLogChangeKeys.UNICODE_EMOJI] = () => __3TkD(1236).t.KiLMM0;
          const obj9 = {};
          obj9[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          merged = obj7;
          merged = obj9;
          merged = Object.assign(obj9);
          return obj7;
        } else if (merged.ONBOARDING_PROMPT === targetType) {
          const obj10 = {};
          const obj11 = {};
          obj11[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged1 = Object.assign(obj11);
          merged = __3TkD;
          merged = dependencyMap;
          __3TkD = __3TkD(1236).t["sNpuy/"];
          obj10[AuditLogChangeKeys.TITLE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.PP1q0x;
          obj10[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj10[AuditLogChangeKeys.OPTIONS] = () => __3TkD(1236).t["3G5C9+"];
          __3TkD = __3TkD(1236).t.v4WnR3;
          obj10[AuditLogChangeKeys.SINGLE_SELECT] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["0MPAM6"];
          obj10[AuditLogChangeKeys.REQUIRED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          return obj10;
        } else if (merged.GUILD_ONBOARDING === targetType) {
          const obj12 = {};
          const obj13 = {};
          obj13[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged2 = Object.assign(obj13);
          obj12[AuditLogChangeKeys.DEFAULT_CHANNEL_IDS] = () => __3TkD(1236).t["8M+D2s"];
          __3TkD = __3TkD(1236).t["EYd/ls"];
          obj12[AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.V3u8PV;
          obj12[AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.SODVIs;
          obj12[AuditLogChangeKeys.ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          return obj12;
        } else if (merged.HOME_SETTINGS === targetType) {
          const obj14 = {};
          const obj15 = {};
          obj15[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged3 = Object.assign(obj15);
          obj14[AuditLogChangeKeys.WELCOME_MESSAGE] = () => __3TkD(1236).t.dKQ1xd;
          obj14[AuditLogChangeKeys.NEW_MEMBER_ACTIONS] = () => __3TkD(1236).t.jDUIno;
          obj14[AuditLogChangeKeys.RESOURCE_CHANNELS] = () => __3TkD(1236).t.SIX0mr;
          return obj14;
        } else if (merged.INVITE === targetType) {
          const obj16 = {};
          obj16[AuditLogChangeKeys.CODE] = () => __3TkD(1236).t.rrRHgb;
          obj16[AuditLogChangeKeys.CHANNEL_ID] = () => __3TkD(1236).t.Q1vd5q;
          const obj17 = { 0: null };
          obj17[0] = __3TkD(1236).t.Yx8LNm;
          __3TkD = obj17;
          obj16[AuditLogChangeKeys.MAX_USES] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          const obj18 = {};
          const intl = __3TkD(1236).intl;
          obj18[intl.string(__3TkD(1236).t.PqEzn8)] = __3TkD(1236).t.uWrLvw;
          __3TkD = obj18;
          obj16[AuditLogChangeKeys.MAX_AGE] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          __3TkD = __3TkD(1236).t.MWp6H7;
          obj16[AuditLogChangeKeys.TEMPORARY] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          const obj19 = {};
          obj19[__3TkD(7667).GuildInviteFlags.IS_GUEST_INVITE] = __3TkD(1236).t.XYZMbL;
          __3TkD = obj19;
          obj16[AuditLogChangeKeys.FLAGS] = (arg0) => __3TkD[arg0.newValue];
          obj16[AuditLogChangeKeys.ROLE_IDS] = () => __3TkD(1236).t.gb1Owj;
          const obj20 = {};
          obj20[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged4 = Object.assign(obj20);
          return obj16;
        } else if (merged.WEBHOOK === targetType) {
          const obj21 = {};
          __3TkD = __3TkD(1236).t.jhPprR;
          obj21[AuditLogChangeKeys.CHANNEL_ID] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.ZVGrzU;
          obj21[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj21[AuditLogChangeKeys.AVATAR_HASH] = () => __3TkD(1236).t.KB52Uj;
          obj21[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          return obj21;
        } else if (merged.EMOJI === targetType) {
          const obj22 = {};
          __3TkD = __3TkD(1236).t.ahU1o5;
          obj22[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj23 = {};
          obj23[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged5 = Object.assign(obj23);
          return obj22;
        } else if (merged.STICKER === targetType) {
          const obj24 = {};
          __3TkD = __3TkD(1236).t.cdl0Yo;
          obj24[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["zwL+S2"];
          obj24[AuditLogChangeKeys.TAGS] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.XeYKWJ;
          obj24[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj25 = {};
          obj25[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged6 = Object.assign(obj25);
          return obj24;
        } else if (merged.INTEGRATION === targetType) {
          const obj26 = {};
          __3TkD = __3TkD(1236).t.FI0m5x;
          obj26[AuditLogChangeKeys.ENABLE_EMOTICONS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          const obj27 = { 0: null, 1: null };
          obj27[0] = __3TkD(1236).t["1Bb1+u"];
          obj27[1] = __3TkD(1236).t.vjlW6m;
          __3TkD = obj27;
          obj26[AuditLogChangeKeys.EXPIRE_BEHAVIOR] = (arg0) => __3TkD[arg0.newValue];
          obj26[AuditLogChangeKeys.EXPIRE_GRACE_PERIOD] = () => __3TkD(1236).t.iovXMa;
          const obj28 = {};
          obj28[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged7 = Object.assign(obj28);
          return obj26;
        } else if (merged.STAGE_INSTANCE === targetType) {
          const obj29 = {};
          __3TkD = __3TkD(1236).t["m+veAn"];
          obj29[AuditLogChangeKeys.TOPIC] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj30 = {};
          obj30[constants11.GUILD_ONLY] = __3TkD(1236).t["EC+CDt"];
          obj30[constants11.PUBLIC] = __3TkD(1236).t["pK/WG0"];
          __3TkD = obj30;
          obj29[AuditLogChangeKeys.PRIVACY_LEVEL] = (arg0) => __3TkD[arg0.newValue];
          const obj31 = {};
          obj31[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged8 = Object.assign(obj31);
          return obj29;
        } else if (merged.GUILD_SCHEDULED_EVENT === targetType) {
          const obj32 = {};
          obj32[AuditLogChangeKeys.NAME] = () => __3TkD(1236).t["21EXHW"];
          obj32[AuditLogChangeKeys.DESCRIPTION] = () => __3TkD(1236).t.Vm1ofw;
          const obj33 = {};
          obj33[constants11.GUILD_ONLY] = __3TkD(1236).t["EC+CDt"];
          obj33[constants11.PUBLIC] = __3TkD(1236).t["pK/WG0"];
          __3TkD = obj33;
          obj32[AuditLogChangeKeys.PRIVACY_LEVEL] = (arg0) => __3TkD[arg0.newValue];
          const obj34 = {};
          obj34[constants10.SCHEDULED] = __3TkD(1236).t.hXKDgq;
          obj34[constants10.ACTIVE] = __3TkD(1236).t.lRX1nz;
          obj34[constants10.COMPLETED] = __3TkD(1236).t["/eFIhq"];
          obj34[constants10.CANCELED] = __3TkD(1236).t.NWIYhj;
          __3TkD = obj34;
          obj32[AuditLogChangeKeys.STATUS] = (arg0) => __3TkD[arg0.newValue];
          const obj35 = {};
          obj35[constants9.NONE] = __3TkD(1236).t["6sO3Ss"];
          obj35[constants9.STAGE_INSTANCE] = __3TkD(1236).t["Wo+s1y"];
          obj35[constants9.VOICE] = __3TkD(1236).t.XCVaIL;
          obj35[constants9.EXTERNAL] = __3TkD(1236).t.IvhAj2;
          __3TkD = obj35;
          obj32[AuditLogChangeKeys.ENTITY_TYPE] = (arg0) => __3TkD[arg0.newValue];
          __3TkD = __3TkD(1236).t.yJBIcX;
          obj32[AuditLogChangeKeys.CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.GaMBHy;
          obj32[AuditLogChangeKeys.LOCATION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.S3vcRK;
          obj32[AuditLogChangeKeys.IMAGE_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          const obj36 = {};
          obj36[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged9 = Object.assign(obj36);
          return obj32;
        } else if (merged.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          const obj37 = {};
          __3TkD = __3TkD(1236).t.zMIYVg;
          obj37[AuditLogChangeKeys.SCHEDULED_START_TIME] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.vONSQA;
          obj37[AuditLogChangeKeys.SCHEDULED_END_TIME] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          obj37[AuditLogChangeKeys.IS_CANCELED] = (oldValue) => {
            if (null != oldValue.oldValue) {
              if (!oldValue.oldValue) {
                if (oldValue.newValue) {
                  return __3TkD(1236).t["7RkicW"];
                }
              }
              if (oldValue.oldValue) {
                if (!oldValue.newValue) {
                  return __3TkD(1236).t.dRNTWW;
                }
              }
            }
          };
          const obj38 = {};
          obj38[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged10 = Object.assign(obj38);
          return obj37;
        } else if (merged.THREAD === targetType) {
          const obj39 = {};
          __3TkD = __3TkD(1236).t.tUKRzX;
          obj39[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.jDi9FK;
          obj39[AuditLogChangeKeys.ARCHIVED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.JSy1QW;
          obj39[AuditLogChangeKeys.LOCKED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.dxNUs9;
          obj39[AuditLogChangeKeys.INVITABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.LuaG3y;
          obj39[AuditLogChangeKeys.AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["7lirhF"];
          obj39[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj39[AuditLogChangeKeys.FLAGS] = () => __3TkD(1236).t.sSAQtj;
          obj39[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => __3TkD(1236).t.H86QQU;
          obj39[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => __3TkD(1236).t["8QOseg"];
          const obj40 = {};
          obj40[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged11 = Object.assign(obj40);
          return obj39;
        } else if (merged.APPLICATION_COMMAND === targetType) {
          const changes = targetType.changes;
          __3TkD = undefined;
          const obj41 = {};
          const obj42 = {};
          obj42[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged12 = Object.assign(obj42);
          __3TkD = obj41;
          if (changes != null) {
            const item = changes.forEach((newValue) => {
              if (newValue.newValue) {
                if (newValue.newValue.permission) {
                  tmp2[key] = () => callback(1236).t["JH+89C"];
                } else {
                  tmp2[key] = () => callback(1236).t.HUrFDu;
                }
              } else {
                __3TkD[newValue.key] = () => callback(1236).t.vynxnV;
              }
            });
          }
          return obj41;
        } else if (merged.AUTO_MODERATION_RULE === targetType) {
          const obj43 = {};
          obj43[AuditLogChangeKeys.NAME] = () => __3TkD(1236).t.XwxAJT;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE] = () => __3TkD(1236).t.fx0pyl;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE] = () => __3TkD(1236).t["46Y+L5"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_ACTIONS] = () => __3TkD(1236).t["8efxfv"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_ENABLED] = (newValue) => {
            let oldValue = newValue.newValue;
            if (oldValue == null) {
              oldValue = newValue.oldValue;
            }
            if (true === oldValue) {
              let Wrg9Jn = __3TkD(1236).t.fCmxC2;
            } else {
              Wrg9Jn = __3TkD(1236).t.Wrg9Jn;
            }
            return Wrg9Jn;
          };
          obj43[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES] = () => __3TkD(1236).t.TRb7Nx;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS] = () => __3TkD(1236).t.mzitLE;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA] = () => __3TkD(1236).t["h/lM65"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS] = () => __3TkD(1236).t["9V2yaC"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS] = () => __3TkD(1236).t["4Qe9ny"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS] = () => __3TkD(1236).t.GyZtxp;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS] = () => __3TkD(1236).t.OQDadc;
          obj43[AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST] = () => __3TkD(1236).t["FvvR+K"];
          obj43[AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST] = () => __3TkD(1236).t.p5nSvy;
          const obj44 = {};
          obj44[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged13 = Object.assign(obj44);
          return obj43;
        } else if (merged.GUILD_SOUNDBOARD === targetType) {
          const obj45 = {};
          __3TkD = __3TkD(1236).t.VOtRSO;
          obj45[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.igrDB9;
          obj45[AuditLogChangeKeys.VOLUME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.IIanaY;
          lj_A4u = __3TkD(1236).t.V8TfyU;
          obj45[AuditLogChangeKeys.EMOJI_NAME] = (newValue) => {
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
          __3TkD = __3TkD(1236).t.ainxMB;
          lj_A4u = __3TkD(1236).t["8crtns"];
          obj45[AuditLogChangeKeys.EMOJI_ID] = (newValue) => {
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
          const obj46 = {};
          obj46[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged14 = Object.assign(obj46);
          return obj45;
        } else if (merged.VOICE_CHANNEL_STATUS === targetType) {
          const obj47 = {};
          obj47[AuditLogChangeKeys.STATUS] = () => __3TkD(1236).t.HyCSnI;
          const obj48 = {};
          obj48[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged15 = Object.assign(obj48);
          return obj47;
        } else if (merged.GUILD_MEMBER_VERIFICATION === targetType) {
          const obj49 = {};
          obj49[AuditLogChangeKeys.VERIFICATION_ENABLED] = (newValue) => {
            if (true === newValue.newValue) {
              let WYT6ka = __3TkD(1236).t.fnkzDY;
            } else {
              WYT6ka = __3TkD(1236).t.WYT6ka;
            }
            return WYT6ka;
          };
          obj49[AuditLogChangeKeys.MANUAL_APPROVAL_ENABLED] = (newValue) => {
            if (true === newValue.newValue) {
              let WxyOtj = __3TkD(1236).t.jzSvVd;
            } else {
              WxyOtj = __3TkD(1236).t.WxyOtj;
            }
            return WxyOtj;
          };
          const obj50 = {};
          obj50[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged16 = Object.assign(obj50);
          return obj49;
        } else if (merged.GUILD_PROFILE === targetType) {
          const obj51 = {};
          obj51[AuditLogChangeKeys.DESCRIPTION] = () => __3TkD(1236).t.nsUZKY;
          obj51[AuditLogChangeKeys.BRAND_COLOR_PRIMARY] = () => __3TkD(1236).t.qe9mgN;
          obj51[AuditLogChangeKeys.CUSTOM_BANNER_HASH] = () => __3TkD(1236).t["04b5KC"];
          obj51[AuditLogChangeKeys.TRAITS] = () => __3TkD(1236).t.dEy9WO;
          obj51[AuditLogChangeKeys.GAME_APPLICATION_IDS] = () => __3TkD(1236).t["8BOT3x"];
          obj51[AuditLogChangeKeys.VISIBILITY] = () => __3TkD(1236).t.bCl1Ep;
          __3TkD = __3TkD(1236).t.ix1dnX;
          obj51[AuditLogChangeKeys.SERVER_TAG] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          return obj51;
        } else {
          obj = {};
          obj[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          return obj;
        }
      }
    }
    const obj52 = {};
    merged = AuditLogChangeKeys;
    merged = __3TkD;
    merged = dependencyMap;
    __3TkD = __3TkD(1236).t.f8Rh0U;
    obj52[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.isS8te;
    obj52[AuditLogChangeKeys.POSITION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.esQcxn;
    lj_A4u = __3TkD(1236).t["ws/1FA"];
    obj52[AuditLogChangeKeys.TOPIC] = (newValue) => {
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
    __3TkD = __3TkD(1236).t.fw81ak;
    obj52[AuditLogChangeKeys.BITRATE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["6kajxx"];
    lj_A4u = __3TkD(1236).t["0JMZdz"];
    obj52[AuditLogChangeKeys.RTC_REGION_OVERRIDE] = (newValue) => {
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
    __3TkD = __3TkD(1236).t.wk5t7p;
    obj52[AuditLogChangeKeys.USER_LIMIT] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["7lirhF"];
    obj52[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    obj52[AuditLogChangeKeys.PERMISSIONS_RESET] = () => __3TkD(1236).t["+vSBFY"];
    obj52[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1236).t.EKLJv8;
    obj52[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1236).t.U3rO5X;
    obj52[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
    __3TkD = __3TkD(1236).t.H8Ri2Y;
    obj52[AuditLogChangeKeys.NSFW] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.Vn5zn2;
    obj52[AuditLogChangeKeys.TYPE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.e68fAU;
    obj52[AuditLogChangeKeys.VIDEO_QUALITY_MODE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.nYz2mg;
    obj52[AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.tOJ8h7;
    lj_A4u = __3TkD(1236).t["lj+A4u"];
    obj52[AuditLogChangeKeys.DEFAULT_THREAD_RATE_LIMIT_PER_USER] = (newValue) => {
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
    obj52[AuditLogChangeKeys.FLAGS] = () => __3TkD(1236).t.ImCQko;
    obj52[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => __3TkD(1236).t.H86QQU;
    obj52[AuditLogChangeKeys.AVAILABLE_TAG_EDIT] = () => __3TkD(1236).t.YtUzls;
    obj52[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => __3TkD(1236).t["8QOseg"];
    __3TkD = __3TkD(1236).t["+/3TkD"];
    obj52[AuditLogChangeKeys.LINKED_LOBBY] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    return obj52;
  }
};
export const shouldNotRenderChangeDetail = function shouldNotRenderChangeDetail(log, key) {
  if (log.actionType === constants8.DELETE) {
    if (log.action !== constants.MEMBER_BAN_ADD) {
      if (log.action !== tmp.MEMBER_KICK) {
        if (log.action !== tmp.MEMBER_PRUNE) {
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
  let closure_0 = log;
  const changes = log.changes;
  return null != changes && changes.some((key) => {
    if (log.actionType === outer1_29.DELETE) {
      if (tmp.action !== outer1_15.MEMBER_BAN_ADD) {
        if (tmp.action !== tmp2.MEMBER_KICK) {
          if (tmp.action !== tmp2.MEMBER_PRUNE) {
            let tmp4 = key.key !== outer1_16.REASON;
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
  let closure_0 = arg0;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === ROLES_REMOVE);
  }
  return found;
};
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  let _require = changes;
  const found = ACTION_FILTER_ITEMS().find((value) => value.value === action.action);
  _require = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found1 = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found1 = changes.find((key) => key.key === ROLES_REMOVE);
  }
  if (null != found1) {
    const intl = _getSystemLocale.intl;
    let stringResult = intl.string(_getSystemLocale.t.z3wbj8);
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
  let unit;
  let unit2;
  let ROLES_REMOVE = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === ROLES_REMOVE);
  }
  ROLES_REMOVE = tmp.ROLES_ADD;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    let found1 = changes1.filter((key) => key.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  ROLES_REMOVE = tmp.ROLES_REMOVE;
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
      let time = date.getTime();
      const diff = time - DISCORD_EPOCH.extractTimestamp(changes.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const obj2 = DISCORD_EPOCH;
      const tmp25 = ROLES_REMOVE;
      const timeAndUnit = ROLES_REMOVE(4330).getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === tmp25(4330).TimeUnits.SECONDS) {
              const _Math2 = Math;
              time = Math.round(diff / 1000);
            } else {
              time = timeAndUnit.time;
            }
            return tmp28[unit](time);
          }
          tmp28 = obj;
        }
      }
      return null;
    } else {
      let oldValue;
      if (found != null) {
        oldValue = found.oldValue;
      }
      if (null != oldValue) {
        const intl4 = ROLES_REMOVE(1236).intl;
        return intl4.string(ROLES_REMOVE(1236).t.MA1ltr);
      }
    }
    return null;
  } else {
    if (tmp3) {
      if (tmp4) {
        const intl3 = ROLES_REMOVE(1236).intl;
        let stringResult = intl3.string(ROLES_REMOVE(1236).t.RdMMew);
      }
      return stringResult;
    }
    if (tmp3) {
      const intl2 = ROLES_REMOVE(1236).intl;
      stringResult = intl2.string(ROLES_REMOVE(1236).t["4GQqs8"]);
    } else {
      stringResult = null;
      if (tmp4) {
        const intl = ROLES_REMOVE(1236).intl;
        stringResult = intl.string(ROLES_REMOVE(1236).t["8mQ6x0"]);
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
      const intl3 = ROLES_REMOVE(1236).intl;
      let obj = { roleNamesAdded: null, roleNamesRemoved: null };
      obj[0] = joined;
      obj[1] = joined1;
      let formatToPlainStringResult = intl3.formatToPlainString(ROLES_REMOVE(1236).t.tZw1EW, obj);
    }
    return formatToPlainStringResult;
  }
  if (found.length > 0) {
    const intl2 = ROLES_REMOVE(1236).intl;
    obj = { roleNames: null };
    obj[0] = joined;
    formatToPlainStringResult = intl2.formatToPlainString(ROLES_REMOVE(1236).t["/mTqt5"], obj);
  } else {
    formatToPlainStringResult = null;
    if (found1.length > 0) {
      const intl = ROLES_REMOVE(1236).intl;
      const obj1 = { roleNames: null };
      obj1[0] = joined1;
      formatToPlainStringResult = intl.formatToPlainString(ROLES_REMOVE(1236).t.Wk4pAJ, obj1);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  let found = constants;
  if (constants.GUILD_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.LjZO31;
  } else if (found.CHANNEL_CREATE === action) {
    found = null;
    found = null;
    if (null != log.changes) {
      const changes = log.changes;
      found = changes.find((key) => key.key === constants.TYPE);
    }
    if (null == found) {
      found = globalThis;
      const _Error2 = Error;
      found = new.target;
      found = new.target;
      found = new Error("[AuditLog] Could not find type change for channel create");
      throw found;
    } else {
      const newValue3 = found.newValue;
      found = constants6;
      if (constants6.GUILD_STAGE_VOICE === newValue3) {
        found = require;
        found = dependencyMap;
        return getSystemLocale.t["OKp4+o"];
      } else if (found.GUILD_VOICE === newValue3) {
        found = require;
        found = dependencyMap;
        return getSystemLocale.t.NPOy4G;
      } else if (found.GUILD_CATEGORY === newValue3) {
        found = require;
        found = dependencyMap;
        return getSystemLocale.t.T3KIjz;
      } else {
        found = require;
        found = dependencyMap;
        return getSystemLocale.t.wrYNG2;
      }
    }
  } else if (found.CHANNEL_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.nTYk6B;
  } else if (found.CHANNEL_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.ynfvkm;
  } else if (found.CHANNEL_OVERWRITE_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.l5Cu1a;
  } else if (found.CHANNEL_OVERWRITE_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.uhtbNU;
  } else if (found.CHANNEL_OVERWRITE_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["HASt/3"];
  } else if (found.MEMBER_KICK === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.B5hDZX;
  } else if (found.MEMBER_PRUNE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.qKOZTP;
  } else if (found.MEMBER_BAN_ADD === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["XklUm/"];
  } else if (found.MEMBER_BAN_REMOVE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.o3Y6HD;
  } else if (found.MEMBER_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.pznhLN;
  } else if (found.MEMBER_ROLE_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.Vngfia;
  } else if (found.MEMBER_MOVE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.Yt6NkU;
  } else if (found.MEMBER_DISCONNECT === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.K4eCZw;
  } else if (found.BOT_ADD === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.fWvX0G;
  } else if (found.ROLE_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.UTLTx6;
  } else if (found.ROLE_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.NRbN18;
  } else if (found.ROLE_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["4s63tb"];
  } else if (found.INVITE_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.YHOXWy;
  } else if (found.INVITE_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.ja3kGS;
  } else if (found.INVITE_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["3n/iWk"];
  } else if (found.WEBHOOK_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.MhYhil;
  } else if (found.WEBHOOK_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["6GTlWB"];
  } else if (found.WEBHOOK_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.in0VjZ;
  } else if (found.EMOJI_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["7vekRO"];
  } else if (found.EMOJI_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.IsCKfh;
  } else if (found.EMOJI_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.JnUaVG;
  } else if (found.STICKER_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.DRZifq;
  } else if (found.STICKER_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.bhujGc;
  } else if (found.STICKER_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.rGEP9U;
  } else if (found.MESSAGE_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["HPkD+M"];
  } else if (found.MESSAGE_BULK_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["3RIvLE"];
  } else if (found.MESSAGE_PIN === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.Yna7E7;
  } else if (found.MESSAGE_UNPIN === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.NCxXUW;
  } else if (found.INTEGRATION_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.HYvCb3;
  } else if (found.INTEGRATION_UPDATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t.ibCCOS;
  } else if (found.INTEGRATION_DELETE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["8zScWY"];
  } else if (found.STAGE_INSTANCE_CREATE === action) {
    found = require;
    found = dependencyMap;
    return getSystemLocale.t["n7x/DF"];
  } else if (found.STAGE_INSTANCE_UPDATE === action) {
    return getSystemLocale.t["0hQYU4"];
  } else if (found.STAGE_INSTANCE_DELETE === action) {
    if (null != log.userId) {
    } else {
    }
    return _7ZIFm9;
  } else if (found.GUILD_SCHEDULED_EVENT_CREATE === action) {
    return getSystemLocale.t.S7k52p;
  } else if (found.GUILD_SCHEDULED_EVENT_UPDATE === action) {
    return getSystemLocale.t.ebTK11;
  } else if (found.GUILD_SCHEDULED_EVENT_DELETE === action) {
    return getSystemLocale.t["/ARPKQ"];
  } else {
    if (found.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
      if (found.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
        if (found.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
          return getSystemLocale.t.zYb2da;
        } else if (found.THREAD_CREATE === action) {
          let found1 = null;
          if (null != log.changes) {
            const changes1 = log.changes;
            found1 = changes1.find((key) => key.key === constants.TYPE);
          }
          if (null == found1) {
            const _Error = Error;
            const error = new Error("[AuditLog] Could not find type change for thread create");
            throw error;
          } else {
            const newValue2 = found1.newValue;
            if (constants6.PRIVATE_THREAD === newValue2) {
              return getSystemLocale.t.Br0y5w;
            } else if (found.ANNOUNCEMENT_THREAD === newValue2) {
              return getSystemLocale.t["6uaMmO"];
            } else {
              return getSystemLocale.t["2cxQ7G"];
            }
          }
        } else if (found.THREAD_UPDATE === action) {
          return getSystemLocale.t.PSsy4t;
        } else if (found.THREAD_DELETE === action) {
          return getSystemLocale.t.s3Khn8;
        } else if (found.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
          return getSystemLocale.t.uzCqBm;
        } else if (found.AUTO_MODERATION_BLOCK_MESSAGE === action) {
          return getSystemLocale.t.NqWv2K;
        } else if (found.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
          const options = log.options;
          let prop;
          if (options != null) {
            prop = options.auto_moderation_rule_trigger_type;
          }
          if (prop === str.toString()) {
            let SD0PwJ = getSystemLocale.t.YQsjej;
          } else {
            SD0PwJ = getSystemLocale.t.SD0PwJ;
          }
          return SD0PwJ;
        } else if (found.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
          return getSystemLocale.t.Vk4TwX;
        } else if (found.AUTO_MODERATION_QUARANTINE_USER === action) {
          return getSystemLocale.t["/W5u5o"];
        } else if (found.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
          return getSystemLocale.t.ONvWyr;
        } else if (found.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
          return getSystemLocale.t["ryGLk+"];
        } else if (found.AUTO_MODERATION_RULE_CREATE === action) {
          return getSystemLocale.t["NKljj+"];
        } else if (found.AUTO_MODERATION_RULE_UPDATE === action) {
          return getSystemLocale.t["3wEA9u"];
        } else if (found.AUTO_MODERATION_RULE_DELETE === action) {
          return getSystemLocale.t.umua3n;
        } else if (found.ONBOARDING_PROMPT_CREATE === action) {
          return getSystemLocale.t["/8A1g2"];
        } else if (found.ONBOARDING_PROMPT_UPDATE === action) {
          return getSystemLocale.t.ArIrWI;
        } else if (found.ONBOARDING_PROMPT_DELETE === action) {
          return getSystemLocale.t.IuBTao;
        } else if (found.ONBOARDING_CREATE === action) {
          return getSystemLocale.t["wDaq3/"];
        } else if (found.ONBOARDING_UPDATE === action) {
          return getSystemLocale.t["yONu/l"];
        } else if (found.HOME_SETTINGS_CREATE === action) {
          return getSystemLocale.t.dSdCjG;
        } else if (found.HOME_SETTINGS_UPDATE === action) {
          return getSystemLocale.t.XHE8qv;
        } else if (found.GUILD_HOME_FEATURE_ITEM === action) {
          let found2 = null;
          if (null != log.changes) {
            const changes2 = log.changes;
            found2 = changes2.find((key) => key.key === constants.ENTITY_TYPE);
          }
          if (null == found2) {
            return getSystemLocale.t["UZ+U3A"];
          } else {
            const newValue = found2.newValue;
            found = require;
            found = dependencyMap;
            if (set.GuildFeedItemTypes.MESSAGE === newValue) {
              return found(1236).t["PyEa+J"];
            } else if (found(16475).GuildFeedItemTypes.FORUM_POST === newValue) {
              return found(1236).t.hCuAb1;
            } else {
              return found(1236).t["UZ+U3A"];
            }
          }
        } else if (found.GUILD_HOME_REMOVE_ITEM === action) {
          return getSystemLocale.t.kPReun;
        } else if (found.SOUNDBOARD_SOUND_CREATE === action) {
          return getSystemLocale.t["0PD83V"];
        } else if (found.SOUNDBOARD_SOUND_UPDATE === action) {
          return getSystemLocale.t.CM8n1w;
        } else if (found.SOUNDBOARD_SOUND_DELETE === action) {
          return getSystemLocale.t["kVz4/0"];
        } else if (found.VOICE_CHANNEL_STATUS_CREATE === action) {
          return getSystemLocale.t.MWjnU7;
        } else if (found.VOICE_CHANNEL_STATUS_DELETE === action) {
          return getSystemLocale.t.aS8Krq;
        } else if (found.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
          return getSystemLocale.t["NUKUb+"];
        } else if (found.GUILD_PROFILE_UPDATE === action) {
          return getSystemLocale.t.Ed6hF1;
        } else if (found.GUILD_MIGRATE_PIN_PERMISSION === action) {
          return getSystemLocale.t["3Ne7MA"];
        } else if (found.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
          return getSystemLocale.t["naflH+"];
        } else {
          return null;
        }
      }
    }
    return getSystemLocale.t["8qCI36"];
  }
};
export const getStringForAddedChannelFlag = function getStringForAddedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["5G8ZD4"]);
  } else if (tmp.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["4YLtzC"]);
  } else if (tmp.PINNED === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1QLRYb"]);
  } else {
    return null;
  }
};
export const getStringForRemovedChannelFlag = function getStringForRemovedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.S5kuWQ);
  } else if (tmp.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["8qpgcz"]);
  } else if (tmp.PINNED === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(arg0, log) {
  let stringResult = constants7;
  if (constants7.CREATE_INSTANT_INVITE === arg0) {
    stringResult = require;
    stringResult = dependencyMap;
    const intl52 = getSystemLocale.intl;
    return intl52.string(getSystemLocale.t.zJrgTG);
  } else if (stringResult.KICK_MEMBERS === arg0) {
    stringResult = require;
    stringResult = dependencyMap;
    const intl51 = getSystemLocale.intl;
    return intl51.string(getSystemLocale.t.pBNv6i);
  } else if (stringResult.BAN_MEMBERS === arg0) {
    stringResult = require;
    stringResult = dependencyMap;
    const intl50 = getSystemLocale.intl;
    return intl50.string(getSystemLocale.t.oTBA7N);
  } else if (stringResult.ADMINISTRATOR === arg0) {
    stringResult = require;
    stringResult = dependencyMap;
    const intl49 = getSystemLocale.intl;
    return intl49.string(getSystemLocale.t.PGvZqX);
  } else {
    stringResult = log;
    if (stringResult.MANAGE_CHANNELS === arg0) {
      if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
        if (log.targetType !== tmp97.CHANNEL_OVERWRITE) {
          const intl47 = getSystemLocale.intl;
          stringResult = intl47.string(getSystemLocale.t["9qLtWs"]);
        }
        return stringResult;
      }
      stringResult = require;
      stringResult = dependencyMap;
      const intl48 = getSystemLocale.intl;
      stringResult = intl48.string(getSystemLocale.t.nAw15L);
    } else if (stringResult.MANAGE_GUILD === arg0) {
      const intl46 = getSystemLocale.intl;
      return intl46.string(getSystemLocale.t.QZRcfO);
    } else if (stringResult.VIEW_GUILD_ANALYTICS === arg0) {
      const intl45 = getSystemLocale.intl;
      return intl45.string(getSystemLocale.t["rQJBE/"]);
    } else if (stringResult.VIEW_CREATOR_MONETIZATION_ANALYTICS === arg0) {
      const intl44 = getSystemLocale.intl;
      return intl44.string(getSystemLocale.t["0lTLTv"]);
    } else if (stringResult.CHANGE_NICKNAME === arg0) {
      const intl43 = getSystemLocale.intl;
      return intl43.string(getSystemLocale.t.dilOF6);
    } else if (stringResult.MANAGE_NICKNAMES === arg0) {
      const intl42 = getSystemLocale.intl;
      return intl42.string(getSystemLocale.t["t+Ct5x"]);
    } else if (stringResult.MANAGE_ROLES === arg0) {
      const intl41 = getSystemLocale.intl;
      return intl41.string(getSystemLocale.t["C8d+oG"]);
    } else if (stringResult.MANAGE_WEBHOOKS === arg0) {
      const intl40 = getSystemLocale.intl;
      return intl40.string(getSystemLocale.t["/ADKmM"]);
    } else if (stringResult.CREATE_GUILD_EXPRESSIONS === arg0) {
      const intl39 = getSystemLocale.intl;
      return intl39.string(getSystemLocale.t.HarVuP);
    } else if (stringResult.MANAGE_GUILD_EXPRESSIONS === arg0) {
      const intl38 = getSystemLocale.intl;
      return intl38.string(getSystemLocale.t.bbuXIn);
    } else if (stringResult.VIEW_AUDIT_LOG === arg0) {
      const intl37 = getSystemLocale.intl;
      return intl37.string(getSystemLocale.t.fZgLpA);
    } else if (stringResult.VIEW_CHANNEL === arg0) {
      if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
        if (log.targetType !== tmp71.CHANNEL_OVERWRITE) {
          const intl35 = getSystemLocale.intl;
          let stringResult1 = intl35.string(getSystemLocale.t.uV83yi);
        }
        return stringResult1;
      }
      const intl36 = getSystemLocale.intl;
      stringResult1 = intl36.string(getSystemLocale.t["W/A4Qp"]);
    } else if (stringResult.SEND_MESSAGES === arg0) {
      const intl34 = getSystemLocale.intl;
      return intl34.string(getSystemLocale.t.T32rkC);
    } else if (stringResult.SEND_TTS_MESSAGES === arg0) {
      const intl33 = getSystemLocale.intl;
      return intl33.string(getSystemLocale.t.Mg7bku);
    } else if (stringResult.USE_APPLICATION_COMMANDS === arg0) {
      const intl32 = getSystemLocale.intl;
      return intl32.string(getSystemLocale.t.shbR1a);
    } else if (stringResult.MANAGE_MESSAGES === arg0) {
      const intl31 = getSystemLocale.intl;
      return intl31.string(getSystemLocale.t["6lU9xM"]);
    } else if (stringResult.EMBED_LINKS === arg0) {
      const intl30 = getSystemLocale.intl;
      return intl30.string(getSystemLocale.t["969dEL"]);
    } else if (stringResult.ATTACH_FILES === arg0) {
      const intl29 = getSystemLocale.intl;
      return intl29.string(getSystemLocale.t["3AS4UM"]);
    } else if (stringResult.READ_MESSAGE_HISTORY === arg0) {
      const intl28 = getSystemLocale.intl;
      return intl28.string(getSystemLocale.t.l9ufaR);
    } else if (stringResult.MENTION_EVERYONE === arg0) {
      const intl27 = getSystemLocale.intl;
      return intl27.string(getSystemLocale.t.Y78KGC);
    } else if (stringResult.USE_EXTERNAL_EMOJIS === arg0) {
      const intl26 = getSystemLocale.intl;
      return intl26.string(getSystemLocale.t.BpBGZU);
    } else if (stringResult.USE_EXTERNAL_STICKERS === arg0) {
      const intl25 = getSystemLocale.intl;
      return intl25.string(getSystemLocale.t["UeRs+b"]);
    } else if (stringResult.ADD_REACTIONS === arg0) {
      const intl24 = getSystemLocale.intl;
      return intl24.string(getSystemLocale.t.yEoJAr);
    } else if (stringResult.CONNECT === arg0) {
      const intl23 = getSystemLocale.intl;
      return intl23.string(getSystemLocale.t.S0W8Z5);
    } else if (stringResult.SPEAK === arg0) {
      const intl22 = getSystemLocale.intl;
      return intl22.string(getSystemLocale.t["8w1tIR"]);
    } else if (stringResult.MUTE_MEMBERS === arg0) {
      const intl21 = getSystemLocale.intl;
      return intl21.string(getSystemLocale.t["8EI30/"]);
    } else if (stringResult.DEAFEN_MEMBERS === arg0) {
      const intl20 = getSystemLocale.intl;
      return intl20.string(getSystemLocale.t["9L47Fr"]);
    } else if (stringResult.MOVE_MEMBERS === arg0) {
      const intl19 = getSystemLocale.intl;
      return intl19.string(getSystemLocale.t.YtjJPQ);
    } else if (stringResult.USE_VAD === arg0) {
      const intl18 = getSystemLocale.intl;
      return intl18.string(getSystemLocale.t["08zAV7"]);
    } else if (stringResult.PRIORITY_SPEAKER === arg0) {
      const intl17 = getSystemLocale.intl;
      return intl17.string(getSystemLocale.t.BVK71i);
    } else if (stringResult.STREAM === arg0) {
      const intl16 = getSystemLocale.intl;
      return intl16.string(getSystemLocale.t.FlNoSV);
    } else if (stringResult.REQUEST_TO_SPEAK === arg0) {
      const intl15 = getSystemLocale.intl;
      return intl15.string(getSystemLocale.t["5kicT2"]);
    } else if (stringResult.USE_EMBEDDED_ACTIVITIES === arg0) {
      const intl14 = getSystemLocale.intl;
      return intl14.string(getSystemLocale.t.rLSGeh);
    } else if (stringResult.CREATE_EVENTS === arg0) {
      const intl13 = getSystemLocale.intl;
      return intl13.string(getSystemLocale.t.qyjZua);
    } else if (stringResult.MANAGE_EVENTS === arg0) {
      const intl12 = getSystemLocale.intl;
      return intl12.string(getSystemLocale.t.HIgA5a);
    } else if (stringResult.CREATE_PUBLIC_THREADS === arg0) {
      const intl11 = getSystemLocale.intl;
      return intl11.string(getSystemLocale.t["25rKnX"]);
    } else if (stringResult.CREATE_PRIVATE_THREADS === arg0) {
      const intl10 = getSystemLocale.intl;
      return intl10.string(getSystemLocale.t.QwbTSa);
    } else if (stringResult.SEND_MESSAGES_IN_THREADS === arg0) {
      const intl9 = getSystemLocale.intl;
      return intl9.string(getSystemLocale.t.fTE74g);
    } else if (stringResult.MANAGE_THREADS === arg0) {
      const intl8 = getSystemLocale.intl;
      return intl8.string(getSystemLocale.t.kEqgr7);
    } else if (stringResult.MODERATE_MEMBERS === arg0) {
      const intl7 = getSystemLocale.intl;
      return intl7.string(getSystemLocale.t["+RL6pz"]);
    } else if (stringResult.SET_VOICE_CHANNEL_STATUS === arg0) {
      const intl6 = getSystemLocale.intl;
      return intl6.string(getSystemLocale.t.VBwkUf);
    } else if (stringResult.SEND_POLLS === arg0) {
      const intl5 = getSystemLocale.intl;
      return intl5.string(getSystemLocale.t.UMQ7Ww);
    } else if (stringResult.USE_EXTERNAL_APPS === arg0) {
      const intl4 = getSystemLocale.intl;
      return intl4.string(getSystemLocale.t.TtA5rK);
    } else if (stringResult.PIN_MESSAGES === arg0) {
      const intl3 = getSystemLocale.intl;
      return intl3.string(getSystemLocale.t.Y5BI39);
    } else if (stringResult.BYPASS_SLOWMODE === arg0) {
      const intl2 = getSystemLocale.intl;
      return intl2.string(getSystemLocale.t.kqcjeV);
    } else if (stringResult.MANAGE_OFFICIAL_MESSAGES === arg0) {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Aj9ruN);
    } else {
      return null;
    }
  }
};
export const transformLogs = function transformLogs(arr, arg1) {
  let closure_0 = arg1;
  let items = [];
  const item = arr.forEach((targetType) => {
    let found = targetType;
    found = targetType;
    let items = found;
    targetType = targetType.targetType;
    let tmp3 = found;
    if (outer1_17.GUILD !== targetType) {
      tmp3 = found;
      if (tmp2.GUILD_HOME !== targetType) {
        tmp3 = found;
        if (tmp2.GUILD_PROFILE !== targetType) {
          if (tmp2.CHANNEL !== targetType) {
            if (tmp2.CHANNEL_OVERWRITE !== targetType) {
              if (tmp2.USER === targetType) {
                found = outer1_16;
                found = outer1_16.NICK;
                const targetId15 = targetType.targetId;
                found = ((targetId15) => user.getUser(targetId15))(targetId15);
                found = null;
                found = null != found && true;
                found = null;
                if (found) {
                  found = ((found) => found)(found);
                }
                if (null == found) {
                  found = outer1_14;
                  found = outer1_14.deletedTargets[targetType.targetType];
                  found = null != found && null != found[targetId15];
                  if (found) {
                    found = found[targetId15];
                  }
                }
                if (null == found) {
                  if (null != targetType.changes) {
                    const changes = targetType.changes;
                    found = changes.find((key) => key.key === found);
                    if (null != found) {
                      found = found.newValue || found.oldValue;
                    }
                  }
                }
                if (found == null) {
                  found = targetId15;
                }
                tmp3 = found;
              } else if (tmp2.ROLE === targetType) {
                found = outer1_16;
                found = outer1_16.NAME;
                const targetId14 = targetType.targetId;
                found = ((targetId14) => outer1_11.getRole(items.id, targetId14))(targetId14);
                found = null;
                found = null != found && true;
                found = null;
                if (found) {
                  found = ((found) => found.name)(found);
                }
                if (null == found) {
                  found = outer1_14;
                  found = outer1_14.deletedTargets[targetType.targetType];
                  found = null != found && null != found[targetId14];
                  if (found) {
                    found = found[targetId14];
                  }
                }
                if (null == found) {
                  if (null != targetType.changes) {
                    const changes1 = targetType.changes;
                    found = changes1.find((key) => key.key === found);
                    if (null != found) {
                      found = found.newValue || found.oldValue;
                    }
                  }
                }
                if (found == null) {
                  found = targetId14;
                }
                tmp3 = found;
              } else if (tmp2.ONBOARDING_PROMPT === targetType) {
                found = outer1_16;
                found = outer1_16.ID;
                const targetId13 = targetType.targetId;
                found = ((targetId13) => onboardingPrompt.getOnboardingPrompt(targetId13))(targetId13);
                found = null;
                found = null != found && true;
                found = null;
                if (found) {
                  found = ((found) => found.title)(found);
                }
                if (null == found) {
                  found = outer1_14;
                  found = outer1_14.deletedTargets[targetType.targetType];
                  found = null != found && null != found[targetId13];
                  if (found) {
                    found = found[targetId13];
                  }
                }
                if (null == found) {
                  if (null != targetType.changes) {
                    const changes2 = targetType.changes;
                    found = changes2.find((key) => key.key === found);
                    if (null != found) {
                      found = found.newValue || found.oldValue;
                    }
                  }
                }
                if (found == null) {
                  found = targetId13;
                }
                if (null == found) {
                  found = callback;
                  found = outer1_3;
                  let intl = callback(outer1_3[17]).intl;
                  found = intl.string(callback(outer1_3[17]).t.ZNQyiR);
                }
                tmp3 = found;
              } else {
                tmp3 = found;
                if (tmp2.GUILD_ONBOARDING !== targetType) {
                  tmp3 = found;
                  if (tmp2.GUILD_MEMBER_VERIFICATION !== targetType) {
                    if (tmp2.INVITE === targetType) {
                      found = outer1_16;
                      found = outer1_24;
                      found = outer1_16.CODE;
                      const targetId12 = targetType.targetId;
                      found = outer1_24(targetId12);
                      found = null;
                      found = null != found && false;
                      found = null;
                      if (found) {
                        found = undefined(found);
                      }
                      if (null == found) {
                        found = outer1_14;
                        found = outer1_14.deletedTargets[targetType.targetType];
                        found = null != found && null != found[targetId12];
                        if (found) {
                          found = found[targetId12];
                        }
                      }
                      if (null == found) {
                        if (null != targetType.changes) {
                          const changes3 = targetType.changes;
                          found = changes3.find((key) => key.key === found);
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId12;
                      }
                      tmp3 = found;
                    } else if (tmp2.INTEGRATION === targetType) {
                      found = outer1_16;
                      found = outer1_16.TYPE;
                      const targetId11 = targetType.targetId;
                      found = ((targetId11) => {
                        let closure_0 = targetId11;
                        const integrations = AuditLogActions.integrations;
                        return integrations.find((id) => id.id === closure_0);
                      })(targetId11);
                      found = null;
                      found = null != found && true;
                      found = null;
                      if (found) {
                        found = ((found) => found.name)(found);
                      }
                      if (null == found) {
                        found = outer1_14;
                        found = outer1_14.deletedTargets[targetType.targetType];
                        found = null != found && null != found[targetId11];
                        if (found) {
                          found = found[targetId11];
                        }
                      }
                      if (null == found) {
                        if (null != targetType.changes) {
                          const changes4 = targetType.changes;
                          found = changes4.find((key) => key.key === found);
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId11;
                      }
                      tmp3 = found;
                    } else if (tmp2.WEBHOOK === targetType) {
                      found = outer1_16;
                      found = outer1_16.NAME;
                      const targetId10 = targetType.targetId;
                      found = ((targetId10) => {
                        let closure_0 = targetId10;
                        const webhooks = AuditLogActions.webhooks;
                        return webhooks.find((id) => id.id === closure_0);
                      })(targetId10);
                      found = null;
                      found = null != found && true;
                      found = null;
                      if (found) {
                        found = ((found) => found.name)(found);
                      }
                      if (null == found) {
                        found = outer1_14;
                        found = outer1_14.deletedTargets[targetType.targetType];
                        found = null != found && null != found[targetId10];
                        if (found) {
                          found = found[targetId10];
                        }
                      }
                      if (null == found) {
                        if (null != targetType.changes) {
                          const changes5 = targetType.changes;
                          found = changes5.find((key) => key.key === found);
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId10;
                      }
                      tmp3 = found;
                    } else if (tmp2.EMOJI === targetType) {
                      found = outer1_16;
                      found = outer1_16.NAME;
                      const targetId9 = targetType.targetId;
                      found = ((targetId9) => {
                        let closure_0 = targetId9;
                        const guildEmoji = outer1_4.getGuildEmoji(items.id);
                        return guildEmoji.find((id) => id.id === closure_0);
                      })(targetId9);
                      found = null;
                      found = null != found && true;
                      found = null;
                      if (found) {
                        found = ((found) => found.name)(found);
                      }
                      if (null == found) {
                        found = outer1_14;
                        found = outer1_14.deletedTargets[targetType.targetType];
                        found = null != found && null != found[targetId9];
                        if (found) {
                          found = found[targetId9];
                        }
                      }
                      if (null == found) {
                        if (null != targetType.changes) {
                          const changes6 = targetType.changes;
                          found = changes6.find((key) => key.key === found);
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId9;
                      }
                      tmp3 = found;
                    } else if (tmp2.STICKER === targetType) {
                      found = outer1_16;
                      found = outer1_16.NAME;
                      const targetId8 = targetType.targetId;
                      found = ((targetId8) => stickerById.getStickerById(targetId8))(targetId8);
                      found = null;
                      found = null != found && true;
                      found = null;
                      if (found) {
                        found = ((found) => found.name)(found);
                      }
                      if (null == found) {
                        found = outer1_14;
                        found = outer1_14.deletedTargets[targetType.targetType];
                        found = null != found && null != found[targetId8];
                        if (found) {
                          found = found[targetId8];
                        }
                      }
                      if (null == found) {
                        if (null != targetType.changes) {
                          const changes7 = targetType.changes;
                          found = changes7.find((key) => key.key === found);
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId8;
                      }
                      tmp3 = found;
                    } else if (tmp2.STAGE_INSTANCE === targetType) {
                      found = outer1_16.TOPIC;
                      const targetId7 = targetType.targetId;
                      const tmp92 = ((targetId7) => {
                        let closure_0 = targetId7;
                        const values = Object.values(outer1_7.getStageInstancesByGuild(items.id));
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
                        tmp99 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId7];
                      }
                      found = tmp96;
                      if (null == tmp96) {
                        found = tmp96;
                        if (null != targetType.changes) {
                          const changes8 = targetType.changes;
                          found = changes8.find((key) => key.key === found);
                          found = tmp96;
                          if (null != found) {
                            found = found.newValue || found.oldValue;
                          }
                        }
                      }
                      if (found == null) {
                        found = targetId7;
                      }
                      tmp3 = found;
                      tmp94 = null != tmp92 && true;
                    } else {
                      if (tmp2.GUILD_SCHEDULED_EVENT !== targetType) {
                        if (tmp2.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                          if (tmp2.THREAD === targetType) {
                            found = outer1_16.NAME;
                            const targetId5 = targetType.targetId;
                            const tmp68 = ((targetId5) => {
                              let closure_0 = targetId5;
                              const threads = AuditLogActions.threads;
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
                              tmp75 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId5];
                            }
                            let tmp76 = tmp72;
                            if (null == tmp72) {
                              tmp76 = tmp72;
                              if (null != targetType.changes) {
                                const changes9 = targetType.changes;
                                let found1 = changes9.find((key) => key.key === found);
                                tmp76 = tmp72;
                                if (null != found1) {
                                  tmp76 = found1.newValue || found1.oldValue;
                                  const tmp78 = found1.newValue || found1.oldValue;
                                }
                              }
                            }
                            if (tmp76 == null) {
                              tmp76 = targetId5;
                            }
                            tmp3 = tmp76;
                            tmp70 = null != tmp68 && true;
                          } else if (tmp2.APPLICATION_COMMAND === targetType) {
                            if (targetType.targetId === targetType.options.application_id) {
                              let integrations = outer1_14.integrations;
                              let found2 = integrations.find((application) => {
                                application = application.application;
                                let id;
                                if (application != null) {
                                  id = application.id;
                                }
                                return id === found.targetId;
                              });
                              tmp3 = null != found2 ? found2.name : targetType.targetId;
                            } else {
                              found = outer1_16;
                              found = outer1_16.NAME;
                              const targetId18 = targetType.targetId;
                              found = ((targetId18) => {
                                let closure_0 = targetId18;
                                const applicationCommands = AuditLogActions.applicationCommands;
                                return applicationCommands.find((id) => id.id === closure_0);
                              })(targetId18);
                              found = null;
                              let tmp56 = null;
                              if (tmp55) {
                                tmp56 = ((found) => {
                                  if (null != found.name_localized) {
                                    if ("" !== found.name_localized) {
                                      let name = found.name_localized;
                                    }
                                    let combined = name;
                                    if (found.type === found(1906).ApplicationCommandType.CHAT) {
                                      const _HermesInternal = HermesInternal;
                                      combined = "/\u2060" + name;
                                    }
                                    return combined;
                                  }
                                  name = found.name;
                                })(found);
                              }
                              let tmp57 = tmp56;
                              if (null == tmp56) {
                                tmp57 = tmp56;
                                if (tmp60) {
                                  tmp57 = tmp59[targetId18];
                                }
                                tmp60 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId18];
                              }
                              let tmp61 = tmp57;
                              if (null == tmp57) {
                                tmp61 = tmp57;
                                if (null != targetType.changes) {
                                  const changes10 = targetType.changes;
                                  let found3 = changes10.find((key) => key.key === found);
                                  tmp61 = tmp57;
                                  if (null != found3) {
                                    tmp61 = found3.newValue || found3.oldValue;
                                    const tmp63 = found3.newValue || found3.oldValue;
                                  }
                                }
                              }
                              if (tmp61 == null) {
                                tmp61 = targetId18;
                              }
                              tmp3 = tmp61;
                              tmp55 = null != found && true;
                            }
                          } else if (tmp2.AUTO_MODERATION_RULE === targetType) {
                            found = outer1_16.NAME;
                            const targetId4 = targetType.targetId;
                            const tmp44 = ((targetId4) => {
                              let closure_0 = targetId4;
                              const automodRules = AuditLogActions.automodRules;
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
                              tmp51 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId4];
                            }
                            let tmp52 = tmp48;
                            if (null == tmp48) {
                              tmp52 = tmp48;
                              if (null != targetType.changes) {
                                const changes11 = targetType.changes;
                                let found4 = changes11.find((key) => key.key === found);
                                tmp52 = tmp48;
                                if (null != found4) {
                                  tmp52 = found4.newValue || found4.oldValue;
                                  const tmp54 = found4.newValue || found4.oldValue;
                                }
                              }
                            }
                            if (tmp52 == null) {
                              tmp52 = targetId4;
                            }
                            tmp3 = tmp52;
                            tmp46 = null != tmp44 && true;
                          } else if (tmp2.GUILD_SOUNDBOARD === targetType) {
                            found = outer1_16.NAME;
                            const targetId3 = targetType.targetId;
                            const tmp32 = outer1_24(targetId3);
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
                              tmp39 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId3];
                            }
                            let tmp40 = tmp36;
                            if (null == tmp36) {
                              tmp40 = tmp36;
                              if (null != targetType.changes) {
                                const changes12 = targetType.changes;
                                let found5 = changes12.find((key) => key.key === found);
                                tmp40 = tmp36;
                                if (null != found5) {
                                  tmp40 = found5.newValue || found5.oldValue;
                                  const tmp42 = found5.newValue || found5.oldValue;
                                }
                              }
                            }
                            if (tmp40 == null) {
                              tmp40 = targetId3;
                            }
                            tmp3 = tmp40;
                            tmp34 = null != tmp32 && false;
                          } else if (tmp2.HOME_SETTINGS === targetType) {
                            let targetId2 = found.id;
                            found = outer1_16.GUILD_ID;
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
                              tmp22 = ((arg0) => {
                                const intl = found(1236).intl;
                                return intl.string(found(1236).t.VbpLyU);
                              })(tmp20);
                            }
                            let tmp23 = tmp22;
                            if (null == tmp22) {
                              tmp23 = tmp22;
                              if (tmp26) {
                                tmp23 = tmp25[targetId2];
                              }
                              tmp26 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId2];
                            }
                            let tmp27 = tmp23;
                            if (null == tmp23) {
                              tmp27 = tmp23;
                              if (null != targetType.changes) {
                                const changes13 = targetType.changes;
                                const found6 = changes13.find((key) => key.key === found);
                                tmp27 = tmp23;
                                if (null != found6) {
                                  tmp27 = found6.newValue || found6.oldValue;
                                  const tmp29 = found6.newValue || found6.oldValue;
                                }
                              }
                            }
                            if (tmp27 == null) {
                              tmp27 = targetId2;
                            }
                            tmp3 = tmp27;
                          } else if (tmp2.VOICE_CHANNEL_STATUS === targetType) {
                            found = outer1_16.STATUS;
                            const targetId = targetType.targetId;
                            let tmp7 = ((targetId) => store.getChannel(targetId))(targetId);
                            let tmp10 = null;
                            if (tmp9) {
                              tmp10 = ((channel) => found(4445).computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true))(tmp7);
                            }
                            let tmp11 = tmp10;
                            if (null == tmp10) {
                              tmp11 = tmp10;
                              if (tmp14) {
                                tmp11 = tmp13[targetId];
                              }
                              tmp14 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId];
                            }
                            let tmp15 = tmp11;
                            if (null == tmp11) {
                              tmp15 = tmp11;
                              if (null != targetType.changes) {
                                const changes14 = targetType.changes;
                                const found7 = changes14.find((key) => key.key === found);
                                tmp15 = tmp11;
                                if (null != found7) {
                                  tmp15 = found7.newValue || found7.oldValue;
                                  let tmp17 = found7.newValue || found7.oldValue;
                                }
                              }
                            }
                            if (tmp15 == null) {
                              tmp15 = targetId;
                            }
                            tmp3 = tmp15;
                            tmp9 = null != tmp7 && true;
                          } else {
                            outer1_35.warn("Unknown targetType for log", targetType);
                            tmp3 = null;
                          }
                        }
                      }
                      found = outer1_16.NAME;
                      const targetId6 = targetType.targetId;
                      const tmp80 = ((targetId6) => {
                        let closure_0 = targetId6;
                        const guildScheduledEvents = AuditLogActions.guildScheduledEvents;
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
                        tmp87 = null != outer1_14.deletedTargets[targetType.targetType] && null != outer1_14.deletedTargets[targetType.targetType][targetId6];
                      }
                      let tmp88 = tmp84;
                      if (null == tmp84) {
                        tmp88 = tmp84;
                        if (null != targetType.changes) {
                          const changes15 = targetType.changes;
                          const found8 = changes15.find((key) => key.key === found);
                          tmp88 = tmp84;
                          if (null != found8) {
                            tmp88 = found8.newValue || found8.oldValue;
                            const tmp90 = found8.newValue || found8.oldValue;
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
          found = outer1_16;
          found = outer1_16.NAME;
          const targetId16 = targetType.targetId;
          found = ((targetId16) => store.getChannel(targetId16))(targetId16);
          found = null;
          found = null != found && true;
          found = null;
          if (found) {
            found = ((found) => found(4445).computeChannelName(found, mergeGuildAvatar, upsertRelationship, true))(found);
          }
          if (null == found) {
            found = outer1_14;
            found = outer1_14.deletedTargets[targetType.targetType];
            found = null != found && null != found[targetId16];
            if (found) {
              found = found[targetId16];
            }
          }
          if (null == found) {
            if (null != targetType.changes) {
              const changes16 = targetType.changes;
              found = changes16.find((key) => key.key === found);
              if (null != found) {
                found = found.newValue || found.oldValue;
              }
            }
          }
          if (found == null) {
            found = targetId16;
          }
          tmp3 = found;
        }
      }
    }
    if (null != tmp3) {
      const result = targetType.set("user", found);
      found = result;
      const result1 = result.set("target", tmp3);
      found = result1;
      found = result1;
      if (null != result1.options) {
        let obj = {};
        found = obj;
        found = Object.assign(result1.options);
        let type = result1.options.type;
        if (outer1_27.USER === type) {
          let tag = result1.options.id;
          found = outer1_13;
          found = outer1_13.getUser(tag);
          found = null != found && true;
          if (found) {
            tag = found.tag;
          }
          obj.subtarget = tag;
        } else if (found.ROLE === type) {
          let role_name = result1.options.role_name;
          found = outer1_24;
          found = outer1_24(role_name);
          found = null != found && false;
          if (found) {
            role_name = undefined(found);
          }
          obj.subtarget = role_name;
        }
        if (null != result1.options.channel_id) {
          let targetId17 = result1.options.channel_id;
          found = "";
          if (targetId17 == null) {
            targetId17 = result1.targetId;
          }
          found = ((targetId17) => store.getChannel(targetId17))(targetId17);
          found = null != found && true;
          found = null;
          if (found) {
            found = ((found) => found)(found);
          }
          if (null == found) {
            found = outer1_14;
            found = outer1_14.deletedTargets[result1.targetType];
            found = null != found && null != found[targetId17];
            if (found) {
              found = found[targetId17];
            }
          }
          if (null == found) {
            if (null != result1.changes) {
              const changes17 = result1.changes;
              found = changes17.find((key) => key.key === found);
              if (null != found) {
                found = found.newValue || found.oldValue;
              }
            }
          }
          if (found == null) {
            found = targetId17;
          }
          obj.channel = found;
        }
        found = null != result1.options.members_removed;
        if (found) {
          found = 0 !== result1.options.members_removed;
        }
        if (found) {
          obj.count = result1.options.members_removed;
        }
        let options = obj;
        if (null != result1.options.event_exception_id) {
          found = outer1_14;
          let guildScheduledEvents = outer1_14.guildScheduledEvents;
          found = guildScheduledEvents.find((id) => id.id === found.targetId);
          found = undefined;
          if (found != null) {
            const prop = found.guild_scheduled_event_exceptions;
            found = prop.find((event_exception_id) => event_exception_id.event_exception_id === found.options.event_exception_id);
          }
          found = callback;
          found = outer1_3;
          found = items;
          found = items(outer1_3[30]);
          const obj4 = callback(outer1_3[29]);
          let str5;
          if (found != null) {
            str5 = found.event_exception_id;
          }
          if (str5 == null) {
            str5 = "0";
          }
          obj.subtarget = obj4.dateFormat(found(items(outer1_3[19]).extractTimestamp(str5)), "LL");
          options = obj;
          const obj5 = items(outer1_3[19]);
        }
      } else {
        options = result1.options;
      }
      const result2 = result1.set("options", options);
      found = result2;
      found = result2;
      if (null != result2.changes) {
        items = [];
        const changes18 = result2.changes;
        found = changes18.forEach((newValue) => {
          let added;
          let added2;
          let newValue10;
          let newValue11;
          let newValue12;
          let newValue13;
          let newValue14;
          let newValue15;
          let newValue16;
          let newValue18;
          let newValue19;
          let newValue20;
          let newValue21;
          let newValue22;
          let newValue3;
          let newValue4;
          let newValue5;
          let newValue6;
          let newValue8;
          let newValue9;
          let oldValue;
          let oldValue10;
          let oldValue11;
          let oldValue12;
          let oldValue13;
          let oldValue14;
          let oldValue15;
          let oldValue16;
          let oldValue18;
          let oldValue19;
          let oldValue20;
          let oldValue21;
          let oldValue22;
          let oldValue3;
          let oldValue4;
          let oldValue5;
          let oldValue6;
          let oldValue8;
          let oldValue9;
          let removed;
          let removed2;
          let role = lib;
          lib = found;
          if (lib.action === outer2_15.APPLICATION_COMMAND_PERMISSION_UPDATE) {
            role = newValue.newValue || newValue.oldValue;
            const type = role.type;
            role = outer2_26;
            if (outer2_26.ROLE === type) {
              let name = role.id;
              role = outer2_11;
              role = outer2_11.getRole(tmp2.id, name);
              role = null;
              role = null != role && true;
              if (role) {
                name = role.name;
              }
              newValue.subtarget = name;
              role = newValue;
            } else if (role.USER === type) {
              let tag = role.id;
              role = outer2_13;
              role = outer2_13.getUser(tag);
              role = null;
              role = null != role && true;
              if (role) {
                tag = role.tag;
              }
              newValue.subtarget = tag;
              role = newValue;
            } else {
              role = newValue;
              if (role.CHANNEL === type) {
                role = items;
                role = outer2_3;
                const obj26 = items(outer2_3[25])(tmp2.id);
                if (role.id === str23.toString()) {
                  role = lib;
                  const intl11 = lib(role[17]).intl;
                  newValue.subtarget = intl11.string(lib(role[17]).t.MSYhgh);
                  role = newValue;
                } else {
                  let id = role.id;
                  role = outer2_10;
                  role = outer2_10.getChannel(id);
                  role = null;
                  role = null != role && true;
                  if (role) {
                    role = lib;
                    const obj24 = lib(role[23]);
                    role = outer2_13;
                    role = outer2_12;
                    role = obj24;
                    id = obj24.computeChannelName(role, outer2_13, outer2_12, true);
                  }
                  newValue.subtarget = id;
                  role = newValue;
                }
                str23 = items(outer2_3[25])(tmp2.id).subtract(1);
              }
            }
          } else {
            role = outer2_16;
            if (outer2_16.OWNER_ID === newValue.key) {
              ({ newValue: newValue22, oldValue: oldValue22 } = newValue);
              role = null;
              if (null != newValue.newValue) {
                role = outer2_13;
                newValue22 = outer2_13.getUser(newValue.newValue);
              }
              if (null != newValue.oldValue) {
                role = outer2_13;
                oldValue22 = outer2_13.getUser(newValue.oldValue);
              }
              role = outer2_9;
              if (!oldValue22) {
                oldValue22 = newValue.oldValue;
              }
              if (!newValue22) {
                newValue22 = newValue.newValue;
              }
              role = new.target;
              role = new.target;
              role = key18;
              role = oldValue22;
              role = newValue22;
              role = new role(key18, oldValue22, newValue22);
            } else {
              if (role.CHANNEL_ID !== key19) {
                if (role.AFK_CHANNEL_ID !== key19) {
                  if (role.SYSTEM_CHANNEL_ID !== key19) {
                    if (role.RULES_CHANNEL_ID !== key19) {
                      if (role.PUBLIC_UPDATES_CHANNEL_ID !== key19) {
                        if (role.AFK_TIMEOUT === key19) {
                          ({ newValue: newValue20, oldValue: oldValue20 } = newValue);
                          role = null;
                          if (null != newValue.newValue) {
                            newValue20 = newValue.newValue / 60;
                          }
                          if (null != newValue.oldValue) {
                            oldValue20 = newValue.oldValue / 60;
                          }
                          role = outer2_9;
                          if (!oldValue20) {
                            oldValue20 = newValue.oldValue;
                          }
                          if (!newValue20) {
                            newValue20 = newValue.newValue;
                          }
                          role = new.target;
                          role = new.target;
                          role = key16;
                          role = oldValue20;
                          role = newValue20;
                          role = new role(key16, oldValue20, newValue20);
                        } else if (role.BITRATE === key19) {
                          ({ newValue: newValue19, oldValue: oldValue19 } = newValue);
                          role = null;
                          if (null != newValue.newValue) {
                            newValue19 = newValue.newValue / 1000;
                          }
                          if (null != newValue.oldValue) {
                            oldValue19 = newValue.oldValue / 1000;
                          }
                          role = outer2_9;
                          if (!oldValue19) {
                            oldValue19 = newValue.oldValue;
                          }
                          if (!newValue19) {
                            newValue19 = newValue.newValue;
                          }
                          role = new.target;
                          role = new.target;
                          role = key15;
                          role = oldValue19;
                          role = newValue19;
                          role = new role(key15, oldValue19, newValue19);
                        } else if (role.COLOR === key19) {
                          ({ newValue: newValue18, oldValue: oldValue18 } = newValue);
                          role = null;
                          if (null != newValue.newValue) {
                            role = lib;
                            role = outer2_3;
                            const obj20 = lib(outer2_3[26]);
                            newValue18 = lib(outer2_3[26]).int2hex(newValue.newValue).toUpperCase();
                            const str21 = lib(outer2_3[26]).int2hex(newValue.newValue);
                          }
                          if (null != newValue.oldValue) {
                            role = lib;
                            role = outer2_3;
                            const obj21 = lib(outer2_3[26]);
                            oldValue18 = lib(outer2_3[26]).int2hex(newValue.oldValue).toUpperCase();
                            const str22 = lib(outer2_3[26]).int2hex(newValue.oldValue);
                          }
                          role = outer2_9;
                          if (!oldValue18) {
                            oldValue18 = newValue.oldValue;
                          }
                          if (!newValue18) {
                            newValue18 = newValue.newValue;
                          }
                          role = new.target;
                          role = new.target;
                          role = key14;
                          role = oldValue18;
                          role = newValue18;
                          role = new role(key14, oldValue18, newValue18);
                        } else if (role.THEME_COLORS === key19) {
                          ({ newValue: newValue16, oldValue: oldValue16 } = newValue);
                          role = null;
                          if (null != newValue.newValue) {
                            const newValue17 = newValue.newValue;
                            role = lib;
                            role = outer2_3;
                            const obj16 = lib(outer2_3[26]);
                            role = lib(outer2_3[26]).int2hex(newValue17[0]).toUpperCase();
                            const str13 = lib(outer2_3[26]).int2hex(newValue17[0]);
                            const obj17 = lib(outer2_3[26]);
                            role = globalThis;
                            const _HermesInternal = HermesInternal;
                            newValue16 = "" + role + ", " + lib(outer2_3[26]).int2hex(newValue17[1]).toUpperCase();
                            const str14 = lib(outer2_3[26]).int2hex(newValue17[1]);
                          }
                          if (null != newValue.oldValue) {
                            const oldValue17 = newValue.oldValue;
                            role = lib;
                            role = outer2_3;
                            const obj18 = lib(outer2_3[26]);
                            role = lib(outer2_3[26]).int2hex(oldValue17[0]).toUpperCase();
                            const str17 = lib(outer2_3[26]).int2hex(oldValue17[0]);
                            const obj19 = lib(outer2_3[26]);
                            role = globalThis;
                            const _HermesInternal2 = HermesInternal;
                            oldValue16 = "" + role + ", " + lib(outer2_3[26]).int2hex(oldValue17[1]).toUpperCase();
                            const str18 = lib(outer2_3[26]).int2hex(oldValue17[1]);
                          }
                          role = outer2_9;
                          if (!oldValue16) {
                            oldValue16 = newValue.oldValue;
                          }
                          if (!newValue16) {
                            newValue16 = newValue.newValue;
                          }
                          role = new.target;
                          role = new.target;
                          role = key13;
                          role = oldValue16;
                          role = newValue16;
                          role = new role(key13, oldValue16, newValue16);
                        } else if (role.MAX_AGE === key19) {
                          ({ newValue: newValue15, oldValue: oldValue15 } = newValue);
                          role = null;
                          if (null != newValue.newValue) {
                            let label = newValue.newValue;
                            role = items;
                            role = outer2_3;
                            role = items(outer2_3[27]).getMaxAgeOptionByValue(label);
                            if (null !== role) {
                              label = role.label;
                            }
                            newValue15 = label;
                            const obj14 = items(outer2_3[27]);
                          }
                          if (null != newValue.oldValue) {
                            let label2 = newValue.oldValue;
                            role = items;
                            role = outer2_3;
                            role = items(outer2_3[27]).getMaxAgeOptionByValue(label2);
                            if (null !== role) {
                              label2 = role.label;
                            }
                            oldValue15 = label2;
                            const obj15 = items(outer2_3[27]);
                          }
                          role = outer2_9;
                          if (!oldValue15) {
                            oldValue15 = newValue.oldValue;
                          }
                          if (!newValue15) {
                            newValue15 = newValue.newValue;
                          }
                          role = new.target;
                          role = new.target;
                          role = key12;
                          role = oldValue15;
                          role = newValue15;
                          role = new role(key12, oldValue15, newValue15);
                        } else if (role.PERMISSIONS === key19) {
                          items = [];
                          role = outer2_40;
                          role = outer2_40(newValue.oldValue, newValue.newValue);
                          ({ added: added2, removed: removed2 } = role);
                          if (added2.length > 0) {
                            role = outer2_9;
                            role = new.target;
                            role = null;
                            role = new.target;
                            role = added2;
                            role = new outer2_9(role.PERMISSIONS_GRANTED, null, added2);
                            role = items.push(role);
                          }
                          role = items;
                          if (removed2.length > 0) {
                            role = outer2_9;
                            role = new.target;
                            role = null;
                            role = new.target;
                            role = removed2;
                            role = new outer2_9(role.PERMISSIONS_DENIED, null, removed2);
                            role = items.push(role);
                            role = items;
                          }
                        } else {
                          if (role.PERMISSIONS_GRANTED !== key19) {
                            if (role.PERMISSIONS_DENIED !== key19) {
                              if (role.FLAGS === key19) {
                                ({ oldValue: oldValue14, newValue: newValue14 } = newValue);
                                let num6 = 0;
                                if (typeof oldValue14 === "number") {
                                  num6 = oldValue14;
                                }
                                let num7 = 0;
                                if (typeof newValue14 === "number") {
                                  num7 = newValue14;
                                }
                                role = outer2_2;
                                role = outer2_3;
                                role = outer2_2(outer2_3[22]).removeFlag(num7, num6);
                                role = outer2_2(outer2_3[22]);
                                const items1 = [];
                                const items2 = [];
                                role = outer2_30;
                                for (const key10535 in outer2_30) {
                                  role = key10535;
                                  role = outer2_30;
                                  role = outer2_30[key10535];
                                  role = outer2_2;
                                  role = outer2_3;
                                  let obj25 = outer2_2(outer2_3[22]);
                                  if (obj25.hasFlag(role, role)) {
                                    role = items1.push(role);
                                  }
                                  let roleResult = role(role[22]);
                                  if (!roleResult.hasFlag(role, role)) {
                                    continue;
                                  } else {
                                    role = items2.push(role);
                                    continue;
                                  }
                                  continue;
                                }
                                const items3 = [];
                                if (items1.length > 0) {
                                  role = outer2_9;
                                  role = new.target;
                                  role = null;
                                  role = new.target;
                                  role = items1;
                                  role = new outer2_9(newValue.key, null, items1);
                                  role = items3.push(role);
                                }
                                role = items3;
                                if (items2.length > 0) {
                                  role = outer2_9;
                                  role = new.target;
                                  role = null;
                                  role = new.target;
                                  role = items2;
                                  role = new outer2_9(newValue.key, items2, null);
                                  role = items3.push(role);
                                  role = items3;
                                }
                                const obj12 = outer2_2(outer2_3[22]);
                              } else if (role.PREFERRED_LOCALE === key19) {
                                ({ newValue: newValue13, oldValue: oldValue13 } = newValue);
                                role = null;
                                if (null != newValue.newValue) {
                                  lib = newValue.newValue;
                                  role = lib;
                                  role = outer2_3;
                                  const availableLocales = lib(outer2_3[17]).getAvailableLocales();
                                  role = availableLocales.find((value) => value.value === closure_0);
                                  role = null;
                                  if (null != role) {
                                    role = role.name;
                                  }
                                  newValue13 = role;
                                  const obj10 = lib(outer2_3[17]);
                                }
                                if (null != newValue.oldValue) {
                                  lib = newValue.oldValue;
                                  role = lib;
                                  role = outer2_3;
                                  const availableLocales1 = lib(outer2_3[17]).getAvailableLocales();
                                  role = availableLocales1.find((value) => value.value === closure_0);
                                  role = null;
                                  if (null != role) {
                                    role = role.name;
                                  }
                                  oldValue13 = role;
                                  const obj11 = lib(outer2_3[17]);
                                }
                                role = outer2_9;
                                if (!oldValue13) {
                                  oldValue13 = newValue.oldValue;
                                }
                                if (!newValue13) {
                                  newValue13 = newValue.newValue;
                                }
                                role = new.target;
                                role = new.target;
                                role = key11;
                                role = oldValue13;
                                role = newValue13;
                                role = new role(key11, oldValue13, newValue13);
                              } else if (role.VIDEO_QUALITY_MODE === key19) {
                                ({ newValue: newValue12, oldValue: oldValue12 } = newValue);
                                role = null;
                                if (null == newValue.newValue) {
                                  if (null == newValue.oldValue) {
                                    role = outer2_9;
                                    if (!oldValue12) {
                                      oldValue12 = newValue.oldValue;
                                    }
                                    if (!newValue12) {
                                      newValue12 = newValue.newValue;
                                    }
                                    role = new.target;
                                    role = new.target;
                                    role = key10;
                                    role = oldValue12;
                                    role = newValue12;
                                    role = new role(key10, oldValue12, newValue12);
                                  } else {
                                    role = outer2_25;
                                    if (newValue.oldValue === outer2_25.FULL) {
                                      role = lib;
                                      role = outer2_3;
                                      const intl10 = lib(outer2_3[17]).intl;
                                      role = intl10.string(lib(outer2_3[17]).t["7jOoJE"]);
                                    } else {
                                      role = lib;
                                      role = outer2_3;
                                      const intl9 = lib(outer2_3[17]).intl;
                                      role = intl9.string(lib(outer2_3[17]).t.jjKYpu);
                                    }
                                  }
                                } else {
                                  role = outer2_25;
                                  if (newValue.newValue === outer2_25.FULL) {
                                    role = lib;
                                    role = outer2_3;
                                    const intl8 = lib(outer2_3[17]).intl;
                                    role = intl8.string(lib(outer2_3[17]).t["7jOoJE"]);
                                  } else {
                                    role = lib;
                                    role = outer2_3;
                                    const intl7 = lib(outer2_3[17]).intl;
                                    role = intl7.string(lib(outer2_3[17]).t.jjKYpu);
                                  }
                                }
                              } else if (role.SYSTEM_CHANNEL_FLAGS === key19) {
                                lib = newValue;
                                let obj = {};
                                role = outer2_28;
                                ({ SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS: obj9[outer2_28.SUPPRESS_JOIN_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS: obj9[outer2_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS], SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS: obj9[outer2_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES: obj9[outer2_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES] } = role);
                                const items4 = [];
                                role = globalThis;
                                const _Object = Object;
                                const values = Object.values(outer2_28);
                                role = values.forEach((arg0) => {
                                  if ((newValue.oldValue & arg0) === arg0 !== (newValue.newValue & arg0) === arg0) {
                                    const tmp7 = new outer1_9(obj[arg0], !tmp, !tmp2);
                                    items4.push(tmp7);
                                  }
                                });
                                role = items4;
                              } else if (role.AUTO_MODERATION_ACTIONS === key19) {
                                role = outer2_17;
                                role = newValue;
                                if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                  ({ newValue: newValue11, oldValue: oldValue11 } = newValue);
                                  role = null;
                                  if (null != newValue.newValue) {
                                    newValue = newValue.newValue;
                                    const mapped = newValue.map((type) => type.type);
                                    role = mapped;
                                    if (null != mapped) {
                                      role = lib;
                                      role = outer2_3;
                                      const mapped1 = mapped.map(lib(outer2_3[28]).actionTypeToName);
                                      role = mapped1.join(", ");
                                    }
                                    newValue11 = role;
                                  }
                                  if (null != newValue.oldValue) {
                                    oldValue = newValue.oldValue;
                                    const mapped2 = oldValue.map((type) => type.type);
                                    role = mapped2;
                                    if (null != mapped2) {
                                      role = lib;
                                      role = outer2_3;
                                      const mapped3 = mapped2.map(lib(outer2_3[28]).actionTypeToName);
                                      role = mapped3.join(", ");
                                    }
                                    oldValue11 = role;
                                  }
                                  role = outer2_9;
                                  if (!oldValue11) {
                                    oldValue11 = newValue.oldValue;
                                  }
                                  if (!newValue11) {
                                    newValue11 = newValue.newValue;
                                  }
                                  role = new.target;
                                  role = new.target;
                                  role = key9;
                                  role = oldValue11;
                                  role = newValue11;
                                  role = new role(key9, oldValue11, newValue11);
                                }
                              } else if (role.AUTO_MODERATION_EVENT_TYPE === key19) {
                                role = outer2_17;
                                role = newValue;
                                if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                  role = lib;
                                  role = outer2_3;
                                  const eventTypeToName = lib(outer2_3[28]).eventTypeToName;
                                  ({ newValue: newValue10, oldValue: oldValue10 } = newValue);
                                  role = null;
                                  if (null != newValue.newValue) {
                                    newValue10 = eventTypeToName(newValue.newValue);
                                  }
                                  if (null != newValue.oldValue) {
                                    oldValue10 = eventTypeToName(newValue.oldValue);
                                  }
                                  role = outer2_9;
                                  if (!oldValue10) {
                                    oldValue10 = newValue.oldValue;
                                  }
                                  if (!newValue10) {
                                    newValue10 = newValue.newValue;
                                  }
                                  role = new.target;
                                  role = new.target;
                                  role = key8;
                                  role = oldValue10;
                                  role = newValue10;
                                  role = new role(key8, oldValue10, newValue10);
                                }
                              } else if (role.AUTO_MODERATION_TRIGGER_TYPE === key19) {
                                role = outer2_17;
                                role = newValue;
                                if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                  role = lib;
                                  role = outer2_3;
                                  const triggerTypeToName = lib(outer2_3[28]).triggerTypeToName;
                                  ({ newValue: newValue9, oldValue: oldValue9 } = newValue);
                                  role = null;
                                  if (null != newValue.newValue) {
                                    newValue9 = triggerTypeToName(newValue.newValue);
                                  }
                                  if (null != newValue.oldValue) {
                                    oldValue9 = triggerTypeToName(newValue.oldValue);
                                  }
                                  role = outer2_9;
                                  if (!oldValue9) {
                                    oldValue9 = newValue.oldValue;
                                  }
                                  if (!newValue9) {
                                    newValue9 = newValue.newValue;
                                  }
                                  role = new.target;
                                  role = new.target;
                                  role = key7;
                                  role = oldValue9;
                                  role = newValue9;
                                  role = new role(key7, oldValue9, newValue9);
                                }
                              } else if (role.AUTO_MODERATION_TRIGGER_METADATA === key19) {
                                let role1 = newValue;
                                if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                  ({ newValue: newValue8, oldValue: oldValue8 } = newValue);
                                  role = null;
                                  if (null != newValue.newValue) {
                                    let newValue7 = newValue.newValue;
                                    role = newValue7;
                                    if (null != newValue7) {
                                      role = newValue7;
                                      if (typeof newValue7 === "object") {
                                        if (null == newValue7.keyword_filter) {
                                          const _JSON3 = JSON;
                                          let json = JSON.stringify(newValue7);
                                        } else {
                                          const _Array3 = Array;
                                        }
                                        const intl5 = lib(outer2_3[17]).intl;
                                        obj = { newValue: null };
                                        const keyword_filter = newValue7.keyword_filter;
                                        const mapped4 = keyword_filter.map((arg0) => "'" + arg0 + "'");
                                        newValue7 = mapped4.join(", ");
                                        obj[0] = newValue7;
                                        json = intl5.formatToMarkdownString(lib(outer2_3[17]).t.y91UXV, obj);
                                      }
                                    }
                                    newValue8 = role;
                                  }
                                  if (null != newValue.oldValue) {
                                    let oldValue7 = newValue.oldValue;
                                    role = oldValue7;
                                    if (null != oldValue7) {
                                      role = oldValue7;
                                      if (typeof oldValue7 === "object") {
                                        if (null == oldValue7.keyword_filter) {
                                          const _JSON4 = JSON;
                                          let json1 = JSON.stringify(oldValue7);
                                          role = json1;
                                        } else {
                                          const _Array4 = Array;
                                        }
                                        role = outer2_3;
                                        const intl6 = lib(outer2_3[17]).intl;
                                        let obj1 = { newValue: null };
                                        const keyword_filter1 = oldValue7.keyword_filter;
                                        const mapped5 = keyword_filter1.map((arg0) => "'" + arg0 + "'");
                                        oldValue7 = mapped5.join(", ");
                                        obj1[0] = oldValue7;
                                        json1 = intl6.formatToMarkdownString(lib(outer2_3[17]).t.y91UXV, obj1);
                                      }
                                    }
                                    oldValue8 = role;
                                  }
                                  role = outer2_9;
                                  if (!oldValue8) {
                                    oldValue8 = newValue.oldValue;
                                  }
                                  if (!newValue8) {
                                    newValue8 = newValue.newValue;
                                  }
                                  role = new.target;
                                  role = new.target;
                                  role = key6;
                                  role = oldValue8;
                                  role = newValue8;
                                  role1 = new role(key6, oldValue8, newValue8);
                                }
                                role = role1;
                              } else {
                                if (role.AUTO_MODERATION_ADD_KEYWORDS !== key19) {
                                  if (role.AUTO_MODERATION_REMOVE_KEYWORDS !== key19) {
                                    if (role.AUTO_MODERATION_ADD_REGEX_PATTERNS !== key19) {
                                      if (role.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== key19) {
                                        if (role.AUTO_MODERATION_ADD_ALLOW_LIST !== key19) {
                                          if (role.AUTO_MODERATION_REMOVE_ALLOW_LIST !== key19) {
                                            if (role.AUTO_MODERATION_EXEMPT_CHANNELS === key19) {
                                              let tmp66 = newValue;
                                              if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                                ({ newValue: newValue5, oldValue: oldValue5 } = newValue);
                                                role = null;
                                                if (null != newValue.newValue) {
                                                  const newValue1 = newValue.newValue;
                                                  role = outer2_10;
                                                  const mapped6 = newValue1.map(outer2_10.getChannel);
                                                  found = mapped6.filter((arg0) => null != arg0);
                                                  const mapped7 = found.map((channel) => newValue(table[23]).computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true));
                                                  role = mapped7;
                                                  if (null == mapped7) {
                                                    newValue5 = mapped7;
                                                  } else {
                                                    if (null == mapped7) {
                                                      const intl3 = lib(outer2_3[17]).intl;
                                                      let stringResult = intl3.string(lib(outer2_3[17]).t["K/EdV8"]);
                                                    }
                                                    stringResult = mapped7.join(", ");
                                                  }
                                                }
                                                if (null != newValue.oldValue) {
                                                  const oldValue1 = newValue.oldValue;
                                                  role = outer2_10;
                                                  const mapped8 = oldValue1.map(outer2_10.getChannel);
                                                  const found1 = mapped8.filter((arg0) => null != arg0);
                                                  const mapped9 = found1.map((channel) => newValue(table[23]).computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true));
                                                  role = mapped9;
                                                  if (null == mapped9) {
                                                    oldValue5 = mapped9;
                                                  } else {
                                                    if (null == mapped9) {
                                                      const intl4 = lib(outer2_3[17]).intl;
                                                      let stringResult1 = intl4.string(lib(outer2_3[17]).t["K/EdV8"]);
                                                    }
                                                    stringResult1 = mapped9.join(", ");
                                                  }
                                                }
                                                tmp66 = outer2_9;
                                                if (!oldValue5) {
                                                  oldValue5 = newValue.oldValue;
                                                }
                                                if (!newValue5) {
                                                  newValue5 = newValue.newValue;
                                                }
                                                tmp66 = new tmp66(key4, oldValue5, newValue5);
                                              }
                                              role = tmp66;
                                            } else if (role.AUTO_MODERATION_EXEMPT_ROLES === key19) {
                                              let tmp50 = newValue;
                                              if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                                ({ newValue: newValue4, oldValue: oldValue4 } = newValue);
                                                role = null;
                                                if (null != newValue.newValue) {
                                                  let newValue2 = newValue.newValue;
                                                  const mapped10 = newValue2.map((arg0) => outer1_11.getRole(newValue.id, arg0));
                                                  const found2 = mapped10.filter((arg0) => null != arg0);
                                                  const mapped11 = found2.map((name) => name.name);
                                                  role = mapped11;
                                                  if (null == mapped11) {
                                                    newValue4 = mapped11;
                                                  } else {
                                                    if (null == mapped11) {
                                                      const intl = lib(outer2_3[17]).intl;
                                                      let stringResult2 = intl.string(lib(outer2_3[17]).t["K/EdV8"]);
                                                    }
                                                    stringResult2 = mapped11.join(", ");
                                                  }
                                                }
                                                if (null != newValue.oldValue) {
                                                  let oldValue2 = newValue.oldValue;
                                                  const mapped12 = oldValue2.map((arg0) => outer1_11.getRole(newValue.id, arg0));
                                                  const found3 = mapped12.filter((arg0) => null != arg0);
                                                  const mapped13 = found3.map((name) => name.name);
                                                  role = mapped13;
                                                  if (null == mapped13) {
                                                    oldValue4 = mapped13;
                                                  } else {
                                                    if (null == mapped13) {
                                                      const intl2 = lib(outer2_3[17]).intl;
                                                      let stringResult3 = intl2.string(lib(outer2_3[17]).t["K/EdV8"]);
                                                    }
                                                    stringResult3 = mapped13.join(", ");
                                                  }
                                                }
                                                tmp50 = outer2_9;
                                                if (!oldValue4) {
                                                  oldValue4 = newValue.oldValue;
                                                }
                                                if (!newValue4) {
                                                  newValue4 = newValue.newValue;
                                                }
                                                tmp50 = new tmp50(key3, oldValue4, newValue4);
                                              }
                                              role = tmp50;
                                            } else if (role.ROLE_IDS === key19) {
                                              let tmp34 = newValue;
                                              if (role.targetType === outer2_17.INVITE) {
                                                ({ newValue: newValue3, oldValue: oldValue3 } = newValue);
                                                role = null;
                                                if (null != newValue.newValue) {
                                                  newValue3 = newValue.newValue;
                                                  const mapped14 = newValue3.map((arg0) => outer1_11.getRole(newValue.id, arg0));
                                                  const found4 = mapped14.filter((arg0) => null != arg0);
                                                  newValue3 = found4.map((id) => ({ id: id.id, name: id.name }));
                                                }
                                                if (null != newValue.oldValue) {
                                                  oldValue3 = newValue.oldValue;
                                                  const mapped15 = oldValue3.map((arg0) => outer1_11.getRole(newValue.id, arg0));
                                                  const found5 = mapped15.filter((arg0) => null != arg0);
                                                  oldValue3 = found5.map((id) => ({ id: id.id, name: id.name }));
                                                }
                                                tmp34 = outer2_9;
                                                if (!oldValue3) {
                                                  oldValue3 = newValue.oldValue;
                                                }
                                                if (!newValue3) {
                                                  newValue3 = newValue.newValue;
                                                }
                                                tmp34 = new tmp34(key2, oldValue3, newValue3);
                                              }
                                              role = tmp34;
                                            } else if (role.AVAILABLE_TAGS === key19) {
                                              role = outer2_42(newValue);
                                            } else if (role.APPLIED_TAGS === key19) {
                                              role = outer2_41(newValue, role);
                                            } else if (role.SCHEDULED_START_TIME === key19) {
                                              ({ newValue, oldValue } = newValue);
                                              if (null != newValue.newValue) {
                                                newValue2 = newValue.newValue;
                                                obj = lib(outer2_3[29]);
                                                const _Date = Date;
                                                const date = new Date(newValue2);
                                                newValue = obj.dateFormat(items(outer2_3[30])(date), "LLLL");
                                                let tmp7 = items(outer2_3[30]);
                                              }
                                              if (null != newValue.oldValue) {
                                                oldValue2 = newValue.oldValue;
                                                obj1 = lib(outer2_3[29]);
                                                const _Date2 = Date;
                                                const date1 = new Date(oldValue2);
                                                oldValue = obj1.dateFormat(items(outer2_3[30])(date1), "LLLL");
                                                const tmp17 = items(outer2_3[30]);
                                              }
                                              if (!oldValue) {
                                                oldValue = newValue.oldValue;
                                              }
                                              if (!newValue) {
                                                newValue = newValue.newValue;
                                              }
                                              role = new outer2_9(key, oldValue, newValue);
                                              const tmp24 = outer2_9;
                                            } else {
                                              role = newValue;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                let tmp82 = newValue;
                                if (role.targetType === outer2_17.AUTO_MODERATION_RULE) {
                                  ({ newValue: newValue6, oldValue: oldValue6 } = newValue);
                                  role = null;
                                  if (null == newValue.newValue) {
                                    if (null == newValue.oldValue) {
                                      tmp82 = outer2_9;
                                      if (!oldValue6) {
                                        oldValue6 = newValue.oldValue;
                                      }
                                      if (!newValue6) {
                                        newValue6 = newValue.newValue;
                                      }
                                      tmp82 = new tmp82(key5, oldValue6, newValue6);
                                    } else {
                                      oldValue4 = newValue.oldValue;
                                      if (null == oldValue4) {
                                        const _JSON2 = JSON;
                                        let json2 = JSON.stringify(oldValue4);
                                      } else {
                                        const _Array2 = Array;
                                      }
                                      oldValue4 = oldValue4.map((arg0) => "'" + arg0 + "'");
                                      json2 = oldValue4.join(", ");
                                    }
                                  } else {
                                    newValue4 = newValue.newValue;
                                    if (null == newValue4) {
                                      const _JSON = JSON;
                                      let json3 = JSON.stringify(newValue4);
                                    } else {
                                      const _Array = Array;
                                    }
                                    newValue4 = newValue4.map((arg0) => "'" + arg0 + "'");
                                    json3 = newValue4.join(", ");
                                  }
                                }
                                role = tmp82;
                              }
                            }
                          }
                          const items5 = [];
                          role = outer2_40;
                          role = outer2_40(newValue.oldValue, newValue.newValue);
                          ({ added, removed } = role);
                          if (added.length > 0) {
                            role = outer2_9;
                            role = new.target;
                            role = null;
                            role = new.target;
                            role = added;
                            role = new outer2_9(newValue.key, null, added);
                            role = items5.push(role);
                          }
                          role = items5;
                          if (removed.length > 0) {
                            role = outer2_9;
                            role = new.target;
                            role = new.target;
                            role = removed;
                            role = removed;
                            role = new outer2_9(role.PERMISSIONS_RESET, removed, removed);
                            role = items5.push(role);
                            role = items5;
                          }
                        }
                      }
                    }
                  }
                }
              }
              ({ newValue: newValue21, oldValue: oldValue21 } = newValue);
              role = null;
              if (null != newValue.newValue) {
                role = outer2_10;
                role = outer2_10.getChannel(newValue.newValue);
                if (null != role) {
                  role = lib;
                  role = outer2_3;
                  const obj22 = lib(outer2_3[23]);
                  role = outer2_13;
                  role = outer2_12;
                  role = obj22;
                  role = obj22.computeChannelName(role, outer2_13, outer2_12, true);
                }
                newValue21 = role;
              }
              if (null != newValue.oldValue) {
                role = outer2_10;
                role = outer2_10.getChannel(newValue.oldValue);
                if (null != role) {
                  role = lib;
                  role = outer2_3;
                  const obj23 = lib(outer2_3[23]);
                  role = outer2_13;
                  role = outer2_12;
                  role = obj23;
                  role = obj23.computeChannelName(role, outer2_13, outer2_12, true);
                }
                oldValue21 = role;
              }
              role = outer2_9;
              if (!oldValue21) {
                oldValue21 = newValue.oldValue;
              }
              if (!newValue21) {
                newValue21 = newValue.newValue;
              }
              role = new.target;
              role = new.target;
              role = key17;
              role = oldValue21;
              role = newValue21;
              role = new role(key17, oldValue21, newValue21);
            }
          }
          if (Array.isArray(role)) {
            role = role.forEach((arg0) => obj.push(arg0));
          } else {
            role = obj;
            role = obj.push(role);
          }
        });
        found = result2.set("changes", items);
      }
      found = items;
      found = items.push(found);
    } else {
      found = outer1_15;
      let items1 = [, , , , ];
      ({ MEMBER_PRUNE: arr19[0], MEMBER_DISCONNECT: arr19[1], MEMBER_MOVE: arr19[2], CREATOR_MONETIZATION_REQUEST_CREATED: arr19[3], CREATOR_MONETIZATION_TERMS_ACCEPTED: arr19[4] } = outer1_15);
    }
  });
  return items;
};
export { transformAppliedForumTagChange };
export { transformAvailableForumTagChange };