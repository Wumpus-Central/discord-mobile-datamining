// === Module 16759: getPermissionChanges ===

// Module 16759 (getPermissionChanges)
import timestampDefault from "timestamp" /* 3 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import fromStringAll from "fromString" /* 506 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import set from "set" /* 16760 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import handleUpdate from "handleUpdate" /* 6788 */;
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess" /* 5048 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import loadSavedGuildStickers from "loadSavedGuildStickers" /* 6769 */;
import { AuditLogChange } from "getTargetType" /* 16758 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import AuditLogActions from "AuditLogActions" /* 16757 */;
import ME from "ME" /* 676 */;
import { ChannelFlags } from "set" /* 1398 */;
import { AutomodTriggerType } from "AutomodEventType" /* 11042 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;

require = fn;
function getPermissionChanges(str, str2) {
  const deserializer = fromStringAll;
  let num = 0;
  if (typeof str === "string") {
    num = str;
  }
  const deserializer2 = fromStringAll;
  let num2 = 0;
  if (typeof str2 === "string") {
    num2 = str2;
  }
  const deserializeResult = deserializer.deserialize(num);
  const deserializeResult1 = deserializer2.deserialize(num2);
  const tmpResult = fromStringAll;
  const added = [];
  const removed = [];
  for (const key10027 in closure_23) {
    let tmp12 = constants7[key10027];
    let obj3 = fromStringAll;
    if (obj3.has(removeResult, tmp12)) {
      let arr = added.push(tmp12);
    }
    let tmp13Result = fromStringAll;
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
  obj = channel;
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
  const item = availableTags.forEach((item, index) => {
    obj[item.id] = { name: item.name, emojiId: item.emojiId, emojiName: item.emojiName };
  });
  new Set(arr);
  new Set(arr2);
  const found = arr2.filter((item, index) => !set.has(item));
  const found1 = arr.filter((item, index) => !set1.has(item));
  items = [];
  for (const item10055 of found) {
    let tmp11 = obj[item10055];
    if (tmp11 == null) {
      obj = { id: null, name: null };
      obj[0] = item10055;
      obj[1] = item10055;
      tmp11 = obj;
    }
    let tmp19 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, tmp11);
    arr = items.push(tmp19);
    continue;
  }
  for (const item10076 of found1) {
    let tmp23 = obj[item10076];
    if (tmp23 == null) {
      obj1 = { id: null, name: null };
      obj1[0] = item10076;
      obj1[1] = item10076;
      tmp23 = obj1;
    }
    let tmp31 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, tmp23);
    arr = items.push(tmp31);
    continue;
  }
  if (items.length > 0) {
    tmp = items;
  }
  return tmp;
}
function transformAvailableForumTagChange(item) {
  ({ oldValue, newValue } = item);
  if (!Array.isArray(oldValue)) {
    oldValue = [];
  }
  if (!Array.isArray(newValue)) {
    newValue = [];
  }
  if (0 === oldValue.length) {
    if (0 === newValue.length) {
      return item;
    }
  }
  obj = {};
  item = oldValue.forEach((item, index) => {
    obj[item.id] = item;
  });
  const item1 = newValue.forEach((item, index) => {
    obj[item.id] = item;
  });
  if (oldValue.length < newValue.length) {
    for (const key10023 in obj) {
      if (null != obj[key10023]) {
        continue;
      } else {
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
        tmp3 = new tmp3(AVAILABLE_TAG_ADD, null, tmp6);
        return tmp3;
      }
    }
  }
  if (oldValue.length > newValue.length) {
    for (const key10046 in obj) {
      if (null != obj[key10046]) {
        continue;
      } else {
        let AVAILABLE_TAG_DELETE = AuditLogChangeKeys.AVAILABLE_TAG_DELETE;
        let tmp17 = obj[key10046];
        let tmp18 = null;
        let tmp15 = AuditLogChange;
        if (null != tmp17) {
          obj1 = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
          ({ id: obj4[0], name: obj4[1] } = tmp17);
          let emoji_id1;
          if (0 !== tmp17.emoji_id) {
            emoji_id1 = tmp17.emoji_id;
          }
          obj1[2] = emoji_id1;
          ({ emoji_name: obj4[3], moderated: obj4[4] } = tmp17);
          tmp18 = obj1;
        }
        tmp15 = new tmp15(AVAILABLE_TAG_DELETE, null, tmp18);
        return tmp15;
      }
    }
  }
  for (const key10070 in obj) {
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
    tmp30 = new tmp30(AVAILABLE_TAG_EDIT, tmp32, tmp34);
    return tmp30;
  }
  return item;
}
({ AuditLogActions: closure_15, AuditLogChangeKeys } = ME);
const AuditLogTargetTypes = ME.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = ME);
({ GuildScheduledEventEntityTypes: closure_32, GuildScheduledEventStatus: closure_33, GuildScheduledEventPrivacyLevel: closure_34 } = GUILD_EVENT_MAX_NAME_LENGTH);
let closure_35 = new timestampDefault("AuditLogUtils");
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
  [fn(4548).TimeUnits.SECONDS]: (seconds) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.geSp4K, { seconds });
  },
  [fn(4548).TimeUnits.MINUTES]: (minutes) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes });
  },
  [fn(4548).TimeUnits.HOURS]: (hours) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.xCjYxK, { hours });
  },
  [fn(4548).TimeUnits.DAYS]: (days) => {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t["k2UNz+"], { days });
  }
};
let tmp4 = new timestampDefault("AuditLogUtils");
let result = require("obj132").fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  targetType = targetType.targetType;
  if (AuditLogTargetTypes.GUILD === targetType) {
    obj = {};
    obj[AuditLogChangeKeys.NAME] = () => __3TkD(1236).t.CkDiNH;
    __3TkD = __3TkD(1236).t.RP3Ey3;
    __3TkD(1236).t.QAVj1Y;
    obj[AuditLogChangeKeys.DESCRIPTION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1236).t.iLZ8Q9;
    obj[AuditLogChangeKeys.SPLASH_HASH] = () => __3TkD(1236).t["4VV6dn"];
    obj[AuditLogChangeKeys.DISCOVERY_SPLASH_HASH] = () => __3TkD(1236).t["2pds6p"];
    __3TkD = __3TkD(1236).t.Cxq4zO;
    __3TkD(1236).t["H7eE/9"];
    obj[AuditLogChangeKeys.BANNER_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.OWNER_ID] = () => __3TkD(1236).t["8ltsLT"];
    obj[AuditLogChangeKeys.REGION] = () => __3TkD(1236).t.X9r5Kf;
    obj[AuditLogChangeKeys.PREFERRED_LOCALE] = () => __3TkD(1236).t.UnXuDS;
    __3TkD = __3TkD(1236).t.ClBuA4;
    __3TkD(1236).t["ms+xtL"];
    obj[AuditLogChangeKeys.AFK_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj[AuditLogChangeKeys.AFK_TIMEOUT] = () => __3TkD(1236).t.q21fHa;
    __3TkD = __3TkD(1236).t.H1VXaa;
    __3TkD(1236).t.XhtmxJ;
    obj[AuditLogChangeKeys.SYSTEM_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.OI6MG2;
    __3TkD(1236).t.lik3tI;
    obj[AuditLogChangeKeys.RULES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.YxBKrY;
    __3TkD(1236).t.Ehsnij;
    obj[AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj = {};
    obj[constants2.NONE] = __3TkD(1236).t.voaCCQ;
    obj[constants2.ELEVATED] = __3TkD(1236).t.pRNVwz;
    __3TkD = obj;
    obj[AuditLogChangeKeys.MFA_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1236).t.ADIty8;
    __3TkD(1236).t.nf58VY;
    obj[AuditLogChangeKeys.WIDGET_ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["6SBsDc"];
    __3TkD(1236).t.deQ5wO;
    obj[AuditLogChangeKeys.WIDGET_CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    obj1 = {};
    obj1[constants3.NONE] = __3TkD(1236).t.W27rsc;
    obj1[constants3.LOW] = __3TkD(1236).t["V8P+Pw"];
    obj1[constants3.MEDIUM] = __3TkD(1236).t.ERQFau;
    obj1[constants3.HIGH] = __3TkD(1236).t["83fN0j"];
    obj1[constants3.VERY_HIGH] = __3TkD(1236).t.PnkQJE;
    __3TkD = obj1;
    obj[AuditLogChangeKeys.VERIFICATION_LEVEL] = (arg0) => __3TkD[arg0.newValue];
    const obj2 = {};
    obj2[constants4.ALL_MESSAGES] = __3TkD(1236).t.LDi76A;
    obj2[constants4.ONLY_MENTIONS] = __3TkD(1236).t["6K83ba"];
    __3TkD = obj2;
    obj[AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS] = (arg0) => __3TkD[arg0.newValue];
    __3TkD = __3TkD(1236).t.Zplsov;
    __3TkD(1236).t.u6cArh;
    obj[AuditLogChangeKeys.VANITY_URL_CODE] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
    const obj3 = {};
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
    const merged = Object.assign(obj4);
    return obj;
  } else {
    if (AuditLogTargetTypes.CHANNEL !== targetType) {
      if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
        if (AuditLogTargetTypes.USER === targetType) {
          const obj5 = {};
          __3TkD = __3TkD(1236).t.qXDsHv;
          __3TkD(1236).t["m+qury"];
          __3TkD(1236).t.DvLvjF;
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
          __3TkD(1236).t.ddvVYG;
          obj5[AuditLogChangeKeys.DEAF] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["bxs/lS"];
          __3TkD(1236).t.FjecQM;
          obj5[AuditLogChangeKeys.MUTE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj5[AuditLogChangeKeys.ROLES_REMOVE] = () => __3TkD(1236).t["+2SDWV"];
          obj5[AuditLogChangeKeys.ROLES_ADD] = () => __3TkD(1236).t["B3/3IJ"];
          obj5[AuditLogChangeKeys.PRUNE_DELETE_DAYS] = () => __3TkD(1236).t["+Cvc+D"];
          __3TkD = __3TkD(1236).t.LXTQr5;
          __3TkD(1236).t.LXTQr5;
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
          const merged1 = Object.assign(obj6);
          return obj5;
        } else if (AuditLogTargetTypes.ROLE === targetType) {
          const obj7 = {};
          __3TkD = __3TkD(1236).t.QBmlaD;
          __3TkD(1236).t["Lfs4r+"];
          obj7[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.XeYKWJ;
          __3TkD(1236).t.PSfeIj;
          obj7[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj7[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1236).t["9i/DvE"];
          obj7[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1236).t.pa1ZVh;
          const obj8 = { "#000000": null };
          obj8[0] = __3TkD(1236).t.TK6E1H;
          __3TkD = obj8;
          __3TkD(1236).t["2FQFiw"];
          obj7[AuditLogChangeKeys.COLOR] = (arg0) => {
            let tmp = __3TkD[arg0.newValue];
            if (tmp == null) {
              tmp = _5kDYS3;
            }
            return tmp;
          };
          obj7[AuditLogChangeKeys.COLORS] = (newValue) => {
            if (null == newValue.newValue.secondary_color) {
              let U44ttm = __3TkD(1236).t.U44ttm;
            } else {
              U44ttm = __3TkD(1236).t["WnSwL/"];
            }
            return U44ttm;
          };
          __3TkD = __3TkD(1236).t.gWfe24;
          __3TkD(1236).t["+tb8kN"];
          obj7[AuditLogChangeKeys.HOIST] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.LL8VFF;
          obj7[AuditLogChangeKeys.MENTIONABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          obj7[AuditLogChangeKeys.ICON_HASH] = () => __3TkD(1236).t["iEE79/"];
          obj7[AuditLogChangeKeys.UNICODE_EMOJI] = () => __3TkD(1236).t.KiLMM0;
          const obj9 = {};
          obj9[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged2 = Object.assign(obj9);
          return obj7;
        } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
          const obj10 = {};
          const obj11 = {};
          obj11[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged3 = Object.assign(obj11);
          __3TkD = __3TkD(1236).t["sNpuy/"];
          __3TkD(1236).t["3Ukc/g"];
          obj10[AuditLogChangeKeys.TITLE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.PP1q0x;
          __3TkD(1236).t.z7pYLg;
          obj10[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj10[AuditLogChangeKeys.OPTIONS] = () => __3TkD(1236).t["3G5C9+"];
          __3TkD = __3TkD(1236).t.v4WnR3;
          __3TkD(1236).t["6Qg3uC"];
          obj10[AuditLogChangeKeys.SINGLE_SELECT] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["0MPAM6"];
          obj10[AuditLogChangeKeys.REQUIRED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          return obj10;
        } else if (AuditLogTargetTypes.GUILD_ONBOARDING === targetType) {
          const obj12 = {};
          const obj13 = {};
          obj13[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged4 = Object.assign(obj13);
          obj12[AuditLogChangeKeys.DEFAULT_CHANNEL_IDS] = () => __3TkD(1236).t["8M+D2s"];
          __3TkD = __3TkD(1236).t["EYd/ls"];
          __3TkD(1236).t["36OZeQ"];
          obj12[AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.V3u8PV;
          __3TkD(1236).t["r66lc/"];
          obj12[AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.SODVIs;
          obj12[AuditLogChangeKeys.ENABLED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          return obj12;
        } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
          const obj14 = {};
          const obj15 = {};
          obj15[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged5 = Object.assign(obj15);
          obj14[AuditLogChangeKeys.WELCOME_MESSAGE] = () => __3TkD(1236).t.dKQ1xd;
          obj14[AuditLogChangeKeys.NEW_MEMBER_ACTIONS] = () => __3TkD(1236).t.jDUIno;
          obj14[AuditLogChangeKeys.RESOURCE_CHANNELS] = () => __3TkD(1236).t.SIX0mr;
          return obj14;
        } else if (AuditLogTargetTypes.INVITE === targetType) {
          const obj16 = {};
          obj16[AuditLogChangeKeys.CODE] = () => __3TkD(1236).t.rrRHgb;
          obj16[AuditLogChangeKeys.CHANNEL_ID] = () => __3TkD(1236).t.Q1vd5q;
          const obj17 = { 0: null };
          obj17[0] = __3TkD(1236).t.Yx8LNm;
          __3TkD = obj17;
          __3TkD(1236).t["3ygnwU"];
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
          __3TkD(1236).t["Q+5kcO"];
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
          obj19[__3TkD(8056).GuildInviteFlags.IS_GUEST_INVITE] = __3TkD(1236).t.XYZMbL;
          __3TkD = obj19;
          obj16[AuditLogChangeKeys.FLAGS] = (arg0) => __3TkD[arg0.newValue];
          obj16[AuditLogChangeKeys.ROLE_IDS] = () => __3TkD(1236).t.gb1Owj;
          const obj20 = {};
          obj20[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged6 = Object.assign(obj20);
          return obj16;
        } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
          const obj21 = {};
          __3TkD = __3TkD(1236).t.jhPprR;
          __3TkD(1236).t.ar4qYO;
          obj21[AuditLogChangeKeys.CHANNEL_ID] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.ZVGrzU;
          obj21[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj21[AuditLogChangeKeys.AVATAR_HASH] = () => __3TkD(1236).t.KB52Uj;
          obj21[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          return obj21;
        } else if (AuditLogTargetTypes.EMOJI === targetType) {
          const obj22 = {};
          __3TkD = __3TkD(1236).t.ahU1o5;
          obj22[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj23 = {};
          obj23[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged7 = Object.assign(obj23);
          return obj22;
        } else if (AuditLogTargetTypes.STICKER === targetType) {
          const obj24 = {};
          __3TkD = __3TkD(1236).t.cdl0Yo;
          __3TkD(1236).t.o3W2ly;
          obj24[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["zwL+S2"];
          __3TkD(1236).t["VYfKA+"];
          obj24[AuditLogChangeKeys.TAGS] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.XeYKWJ;
          obj24[AuditLogChangeKeys.DESCRIPTION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          const obj25 = {};
          obj25[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged8 = Object.assign(obj25);
          return obj24;
        } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
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
          const merged9 = Object.assign(obj28);
          return obj26;
        } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
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
          const merged10 = Object.assign(obj31);
          return obj29;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT === targetType) {
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
          __3TkD(1236).t["+PqSsi"];
          obj32[AuditLogChangeKeys.CHANNEL_ID] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.GaMBHy;
          __3TkD(1236).t.PsICk0;
          obj32[AuditLogChangeKeys.LOCATION] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.S3vcRK;
          obj32[AuditLogChangeKeys.IMAGE_HASH] = (newValue) => null == newValue.newValue ? __3TkD : _5kDYS3;
          const obj36 = {};
          obj36[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged11 = Object.assign(obj36);
          return obj32;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          const obj37 = {};
          __3TkD = __3TkD(1236).t.zMIYVg;
          __3TkD(1236).t.fzF8Gd;
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
          const merged12 = Object.assign(obj38);
          return obj37;
        } else if (AuditLogTargetTypes.THREAD === targetType) {
          const obj39 = {};
          __3TkD = __3TkD(1236).t.tUKRzX;
          __3TkD(1236).t.kPCHON;
          obj39[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.jDi9FK;
          __3TkD(1236).t.F6dvbT;
          obj39[AuditLogChangeKeys.ARCHIVED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.JSy1QW;
          __3TkD(1236).t.C7Jgo8;
          obj39[AuditLogChangeKeys.LOCKED] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.dxNUs9;
          __3TkD(1236).t.biJvYG;
          obj39[AuditLogChangeKeys.INVITABLE] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.LuaG3y;
          __3TkD(1236).t["18d9qr"];
          obj39[AuditLogChangeKeys.AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t["7lirhF"];
          obj39[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          obj39[AuditLogChangeKeys.FLAGS] = () => __3TkD(1236).t.sSAQtj;
          obj39[AuditLogChangeKeys.AVAILABLE_TAG_ADD] = () => __3TkD(1236).t.H86QQU;
          obj39[AuditLogChangeKeys.AVAILABLE_TAG_DELETE] = () => __3TkD(1236).t["8QOseg"];
          const obj40 = {};
          obj40[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged13 = Object.assign(obj40);
          return obj39;
        } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
          const changes = targetType.changes;
          const obj41 = {};
          const obj42 = {};
          obj42[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged14 = Object.assign(obj42);
          __3TkD = obj41;
          if (changes != null) {
            const item = changes.forEach((item, index) => {
              if (item.newValue) {
                if (item.newValue.permission) {
                  __3TkD[key] = () => callback(1236).t["JH+89C"];
                } else {
                  __3TkD[key] = () => callback(1236).t.HUrFDu;
                }
              } else {
                __3TkD[item.key] = () => callback(1236).t.vynxnV;
              }
            });
          }
          return obj41;
        } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
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
          const merged15 = Object.assign(obj44);
          return obj43;
        } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
          const obj45 = {};
          __3TkD = __3TkD(1236).t.VOtRSO;
          __3TkD(1236).t.OK7B8E;
          obj45[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.igrDB9;
          __3TkD(1236).t.L5lDFJ;
          obj45[AuditLogChangeKeys.VOLUME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
          __3TkD = __3TkD(1236).t.IIanaY;
          __3TkD(1236).t["z4w4U/"];
          __3TkD(1236).t.V8TfyU;
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
          const merged16 = Object.assign(obj46);
          return obj45;
        } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
          const obj47 = {};
          obj47[AuditLogChangeKeys.STATUS] = () => __3TkD(1236).t.HyCSnI;
          const obj48 = {};
          obj48[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
          const merged17 = Object.assign(obj48);
          return obj47;
        } else if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION === targetType) {
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
          const merged18 = Object.assign(obj50);
          return obj49;
        } else if (AuditLogTargetTypes.GUILD_PROFILE === targetType) {
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
    __3TkD = __3TkD(1236).t.f8Rh0U;
    __3TkD(1236).t.ebD4Qp;
    obj52[AuditLogChangeKeys.NAME] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.isS8te;
    __3TkD(1236).t.t5uBis;
    obj52[AuditLogChangeKeys.POSITION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.esQcxn;
    __3TkD(1236).t["m+veAn"];
    __3TkD(1236).t["ws/1FA"];
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
    __3TkD(1236).t.MFNlgZ;
    obj52[AuditLogChangeKeys.BITRATE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["6kajxx"];
    __3TkD(1236).t.eGOlmU;
    __3TkD(1236).t["0JMZdz"];
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
    __3TkD(1236).t.XgjCEh;
    obj52[AuditLogChangeKeys.USER_LIMIT] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t["7lirhF"];
    __3TkD(1236).t.j4CCJR;
    obj52[AuditLogChangeKeys.RATE_LIMIT_PER_USER] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    obj52[AuditLogChangeKeys.PERMISSIONS_RESET] = () => __3TkD(1236).t["+vSBFY"];
    obj52[AuditLogChangeKeys.PERMISSIONS_GRANTED] = () => __3TkD(1236).t.EKLJv8;
    obj52[AuditLogChangeKeys.PERMISSIONS_DENIED] = () => __3TkD(1236).t.U3rO5X;
    obj52[AuditLogChangeKeys.REASON] = () => __3TkD(1236).t["2IW3C5"];
    __3TkD = __3TkD(1236).t.H8Ri2Y;
    __3TkD(1236).t.WW6cJw;
    obj52[AuditLogChangeKeys.NSFW] = (newValue) => newValue.newValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.Vn5zn2;
    __3TkD(1236).t.aq4uWI;
    obj52[AuditLogChangeKeys.TYPE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.e68fAU;
    __3TkD(1236).t.djbES0;
    obj52[AuditLogChangeKeys.VIDEO_QUALITY_MODE] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.nYz2mg;
    __3TkD(1236).t.oczvRI;
    obj52[AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION] = (oldValue) => null == oldValue.oldValue ? __3TkD : _5kDYS3;
    __3TkD = __3TkD(1236).t.tOJ8h7;
    __3TkD(1236).t.WaSgzk;
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
  closure_0 = log;
  const changes = log.changes;
  return null != changes && changes.some((item, index) => {
    if (log.actionType === closure_1_29.DELETE) {
      if (log.action !== closure_1_15.MEMBER_BAN_ADD) {
        if (log.action !== closure_1_15.MEMBER_KICK) {
          if (log.action !== closure_1_15.MEMBER_PRUNE) {
            let tmp4 = item.key !== AuditLogChangeKeys.REASON;
          }
          return !tmp4;
        }
      }
    }
    tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = true === tmp3[item.key];
    }
  });
};
export { ACTION_FILTER_ITEMS };
export const findChangeByKey = function findChangeByKey(arg0, changes) {
  closure_0 = arg0;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((item, index) => item.key === ROLES_REMOVE);
  }
  return found;
};
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  const found = ACTION_FILTER_ITEMS().find((item, index) => item.value === action.action);
  const _require = AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL;
  let found1 = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found1 = changes.find((item, index) => item.key === ROLES_REMOVE);
  }
  if (null != found1) {
    const intl = _require(1236).intl;
    let stringResult = intl.string(_require(1236).t.z3wbj8);
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
    found = changes.find((item, index) => item.key === ROLES_REMOVE);
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_ADD;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    let found1 = changes1.filter((item, index) => item.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes2 = changes.changes;
    let found2 = changes2.filter((item, index) => item.key === ROLES_REMOVE);
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
      const diff = time - DISCORD_EPOCHDefault.extractTimestamp(changes.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const tmp25 = ROLES_REMOVE;
      const timeAndUnit = ROLES_REMOVE(4548).getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === tmp25(4548).TimeUnits.SECONDS) {
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
    let found = changes.filter((item, index) => item.key === ROLES_REMOVE);
  } else {
    found = [];
  }
  ROLES_REMOVE = AuditLogChangeKeys.ROLES_REMOVE;
  if (null != changes.changes) {
    const changes1 = changes.changes;
    let found1 = changes1.filter((item, index) => item.key === ROLES_REMOVE);
  } else {
    found1 = [];
  }
  if (found != null) {
    let mapped = found.map((item, index) => {
      const newValue = item.newValue;
      let joined;
      if (newValue != null) {
        const mapped = newValue.map((item, index) => item.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    let joined = mapped.join(", ");
  }
  if (found1 != null) {
    const mapped1 = found1.map((item, index) => {
      const newValue = item.newValue;
      let joined;
      if (newValue != null) {
        const mapped = newValue.map((item, index) => item.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    const joined1 = mapped1.join(", ");
  }
  if (found.length > 0) {
    if (found1.length > 0) {
      const intl3 = ROLES_REMOVE(1236).intl;
      obj = { roleNamesAdded: null, roleNamesRemoved: null };
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
      obj1 = { roleNames: null };
      obj1[0] = joined1;
      formatToPlainStringResult = intl.formatToPlainString(ROLES_REMOVE(1236).t.Wk4pAJ, obj1);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  if (constants.GUILD_UPDATE === action) {
    return getSystemLocale.t.LjZO31;
  } else if (constants.CHANNEL_CREATE === action) {
    let found = null;
    if (null != log.changes) {
      const changes = log.changes;
      found = changes.find((item, index) => item.key === constants.TYPE);
    }
    if (null == found) {
      const _Error2 = Error;
      error = new Error("[AuditLog] Could not find type change for channel create");
      throw error;
    } else {
      const newValue3 = found.newValue;
      if (constants6.GUILD_STAGE_VOICE === newValue3) {
        return getSystemLocale.t["OKp4+o"];
      } else if (constants6.GUILD_VOICE === newValue3) {
        return getSystemLocale.t.NPOy4G;
      } else if (constants6.GUILD_CATEGORY === newValue3) {
        return getSystemLocale.t.T3KIjz;
      } else if (constants6.GUILD_FORUM === newValue3) {
        return getSystemLocale.t.VvNgHX;
      } else if (constants6.GUILD_MEDIA === newValue3) {
        return getSystemLocale.t["4NWSxa"];
      } else if (constants6.GUILD_ANNOUNCEMENT === newValue3) {
        return getSystemLocale.t.eYP6UV;
      } else {
        return getSystemLocale.t.wrYNG2;
      }
    }
  } else if (constants.CHANNEL_UPDATE === action) {
    return getSystemLocale.t.nTYk6B;
  } else if (constants.CHANNEL_DELETE === action) {
    return getSystemLocale.t.ynfvkm;
  } else if (constants.CHANNEL_OVERWRITE_CREATE === action) {
    return getSystemLocale.t.l5Cu1a;
  } else if (constants.CHANNEL_OVERWRITE_UPDATE === action) {
    return getSystemLocale.t.uhtbNU;
  } else if (constants.CHANNEL_OVERWRITE_DELETE === action) {
    return getSystemLocale.t["HASt/3"];
  } else if (constants.MEMBER_KICK === action) {
    return getSystemLocale.t.B5hDZX;
  } else if (constants.MEMBER_PRUNE === action) {
    return getSystemLocale.t.qKOZTP;
  } else if (constants.MEMBER_BAN_ADD === action) {
    return getSystemLocale.t["XklUm/"];
  } else if (constants.MEMBER_BAN_REMOVE === action) {
    return getSystemLocale.t.o3Y6HD;
  } else if (constants.MEMBER_UPDATE === action) {
    return getSystemLocale.t.pznhLN;
  } else if (constants.MEMBER_ROLE_UPDATE === action) {
    return getSystemLocale.t.Vngfia;
  } else if (constants.MEMBER_MOVE === action) {
    return getSystemLocale.t.Yt6NkU;
  } else if (constants.MEMBER_DISCONNECT === action) {
    return getSystemLocale.t.K4eCZw;
  } else if (constants.BOT_ADD === action) {
    return getSystemLocale.t.fWvX0G;
  } else if (constants.ROLE_CREATE === action) {
    return getSystemLocale.t.UTLTx6;
  } else if (constants.ROLE_UPDATE === action) {
    return getSystemLocale.t.NRbN18;
  } else if (constants.ROLE_DELETE === action) {
    return getSystemLocale.t["4s63tb"];
  } else if (constants.INVITE_CREATE === action) {
    return getSystemLocale.t.YHOXWy;
  } else if (constants.INVITE_UPDATE === action) {
    return getSystemLocale.t.ja3kGS;
  } else if (constants.INVITE_DELETE === action) {
    return getSystemLocale.t["3n/iWk"];
  } else if (constants.WEBHOOK_CREATE === action) {
    return getSystemLocale.t.MhYhil;
  } else if (constants.WEBHOOK_UPDATE === action) {
    return getSystemLocale.t["6GTlWB"];
  } else if (constants.WEBHOOK_DELETE === action) {
    return getSystemLocale.t.in0VjZ;
  } else if (constants.EMOJI_CREATE === action) {
    return getSystemLocale.t["7vekRO"];
  } else if (constants.EMOJI_UPDATE === action) {
    return getSystemLocale.t.IsCKfh;
  } else if (constants.EMOJI_DELETE === action) {
    return getSystemLocale.t.JnUaVG;
  } else if (constants.STICKER_CREATE === action) {
    return getSystemLocale.t.DRZifq;
  } else if (constants.STICKER_UPDATE === action) {
    return getSystemLocale.t.bhujGc;
  } else if (constants.STICKER_DELETE === action) {
    return getSystemLocale.t.rGEP9U;
  } else if (constants.MESSAGE_DELETE === action) {
    return getSystemLocale.t["HPkD+M"];
  } else if (constants.MESSAGE_BULK_DELETE === action) {
    return getSystemLocale.t["3RIvLE"];
  } else if (constants.MESSAGE_PIN === action) {
    return getSystemLocale.t.Yna7E7;
  } else if (constants.MESSAGE_UNPIN === action) {
    return getSystemLocale.t.NCxXUW;
  } else if (constants.INTEGRATION_CREATE === action) {
    return getSystemLocale.t.HYvCb3;
  } else if (constants.INTEGRATION_UPDATE === action) {
    return getSystemLocale.t.ibCCOS;
  } else if (constants.INTEGRATION_DELETE === action) {
    return getSystemLocale.t["8zScWY"];
  } else if (constants.STAGE_INSTANCE_CREATE === action) {
    return getSystemLocale.t["n7x/DF"];
  } else if (constants.STAGE_INSTANCE_UPDATE === action) {
    return getSystemLocale.t["0hQYU4"];
  } else if (constants.STAGE_INSTANCE_DELETE === action) {
    if (null != log.userId) {
      let prop = getSystemLocale.t["Oi/in9"];
    } else {
      prop = getSystemLocale.t["7ZIFm9"];
    }
    return prop;
  } else if (constants.GUILD_SCHEDULED_EVENT_CREATE === action) {
    return getSystemLocale.t.S7k52p;
  } else if (constants.GUILD_SCHEDULED_EVENT_UPDATE === action) {
    return getSystemLocale.t.ebTK11;
  } else if (constants.GUILD_SCHEDULED_EVENT_DELETE === action) {
    return getSystemLocale.t["/ARPKQ"];
  } else {
    if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
      if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
        if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
          return getSystemLocale.t.zYb2da;
        } else if (constants.THREAD_CREATE === action) {
          let found1 = null;
          if (null != log.changes) {
            const changes1 = log.changes;
            found1 = changes1.find((item, index) => item.key === constants.TYPE);
          }
          if (null == found1) {
            const _Error = Error;
            const error1 = new Error("[AuditLog] Could not find type change for thread create");
            throw error1;
          } else {
            const newValue2 = found1.newValue;
            if (constants6.PRIVATE_THREAD === newValue2) {
              return getSystemLocale.t.Br0y5w;
            } else if (tmp200.ANNOUNCEMENT_THREAD === newValue2) {
              return getSystemLocale.t["6uaMmO"];
            } else {
              return getSystemLocale.t["2cxQ7G"];
            }
          }
        } else if (constants.THREAD_UPDATE === action) {
          return getSystemLocale.t.PSsy4t;
        } else if (constants.THREAD_DELETE === action) {
          return getSystemLocale.t.s3Khn8;
        } else if (constants.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
          return getSystemLocale.t.uzCqBm;
        } else if (constants.AUTO_MODERATION_BLOCK_MESSAGE === action) {
          return getSystemLocale.t.NqWv2K;
        } else if (constants.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
          const options = log.options;
          let prop1;
          if (options != null) {
            prop1 = options.auto_moderation_rule_trigger_type;
          }
          if (prop1 === str.toString()) {
            let SD0PwJ = getSystemLocale.t.YQsjej;
          } else {
            SD0PwJ = getSystemLocale.t.SD0PwJ;
          }
          return SD0PwJ;
        } else if (constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
          return getSystemLocale.t.Vk4TwX;
        } else if (constants.AUTO_MODERATION_QUARANTINE_USER === action) {
          return getSystemLocale.t["/W5u5o"];
        } else if (constants.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
          return getSystemLocale.t.ONvWyr;
        } else if (constants.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
          return getSystemLocale.t["ryGLk+"];
        } else if (constants.AUTO_MODERATION_RULE_CREATE === action) {
          return getSystemLocale.t["NKljj+"];
        } else if (constants.AUTO_MODERATION_RULE_UPDATE === action) {
          return getSystemLocale.t["3wEA9u"];
        } else if (constants.AUTO_MODERATION_RULE_DELETE === action) {
          return getSystemLocale.t.umua3n;
        } else if (constants.ONBOARDING_PROMPT_CREATE === action) {
          return getSystemLocale.t["/8A1g2"];
        } else if (constants.ONBOARDING_PROMPT_UPDATE === action) {
          return getSystemLocale.t.ArIrWI;
        } else if (constants.ONBOARDING_PROMPT_DELETE === action) {
          return getSystemLocale.t.IuBTao;
        } else if (constants.ONBOARDING_CREATE === action) {
          return getSystemLocale.t["wDaq3/"];
        } else if (constants.ONBOARDING_UPDATE === action) {
          return getSystemLocale.t["yONu/l"];
        } else if (constants.HOME_SETTINGS_CREATE === action) {
          return getSystemLocale.t.dSdCjG;
        } else if (constants.HOME_SETTINGS_UPDATE === action) {
          return getSystemLocale.t.XHE8qv;
        } else if (constants.GUILD_HOME_FEATURE_ITEM === action) {
          let found2 = null;
          if (null != log.changes) {
            const changes2 = log.changes;
            found2 = changes2.find((item, index) => item.key === constants.ENTITY_TYPE);
          }
          if (null == found2) {
            return getSystemLocale.t["UZ+U3A"];
          } else {
            const newValue = found2.newValue;
            if (set.GuildFeedItemTypes.MESSAGE === newValue) {
              return getSystemLocale.t["PyEa+J"];
            } else if (set.GuildFeedItemTypes.FORUM_POST === newValue) {
              return getSystemLocale.t.hCuAb1;
            } else {
              return getSystemLocale.t["UZ+U3A"];
            }
          }
        } else if (constants.GUILD_HOME_REMOVE_ITEM === action) {
          return getSystemLocale.t.kPReun;
        } else if (constants.SOUNDBOARD_SOUND_CREATE === action) {
          return getSystemLocale.t["0PD83V"];
        } else if (constants.SOUNDBOARD_SOUND_UPDATE === action) {
          return getSystemLocale.t.CM8n1w;
        } else if (constants.SOUNDBOARD_SOUND_DELETE === action) {
          return getSystemLocale.t["kVz4/0"];
        } else if (constants.VOICE_CHANNEL_STATUS_CREATE === action) {
          return getSystemLocale.t.MWjnU7;
        } else if (constants.VOICE_CHANNEL_STATUS_DELETE === action) {
          return getSystemLocale.t.aS8Krq;
        } else if (constants.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
          return getSystemLocale.t["NUKUb+"];
        } else if (constants.GUILD_PROFILE_UPDATE === action) {
          return getSystemLocale.t.Ed6hF1;
        } else if (constants.GUILD_MIGRATE_PIN_PERMISSION === action) {
          return getSystemLocale.t["3Ne7MA"];
        } else if (constants.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
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
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["4YLtzC"]);
  } else if (ChannelFlags.PINNED === arg0) {
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
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["8qpgcz"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(item, log) {
  if (constants7.CREATE_INSTANT_INVITE === item) {
    const intl55 = getSystemLocale.intl;
    return intl55.string(getSystemLocale.t.zJrgTG);
  } else if (constants7.KICK_MEMBERS === item) {
    const intl54 = getSystemLocale.intl;
    return intl54.string(getSystemLocale.t.pBNv6i);
  } else if (constants7.BAN_MEMBERS === item) {
    const intl53 = getSystemLocale.intl;
    return intl53.string(getSystemLocale.t.oTBA7N);
  } else if (constants7.ADMINISTRATOR === item) {
    const intl52 = getSystemLocale.intl;
    return intl52.string(getSystemLocale.t.PGvZqX);
  } else if (constants7.MANAGE_CHANNELS === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      if (log.targetType !== tmp103.CHANNEL_OVERWRITE) {
        const intl50 = getSystemLocale.intl;
        let stringResult = intl50.string(getSystemLocale.t["9qLtWs"]);
      }
      return stringResult;
    }
    const intl51 = getSystemLocale.intl;
    stringResult = intl51.string(getSystemLocale.t.nAw15L);
  } else if (constants7.MANAGE_GUILD === item) {
    const intl49 = getSystemLocale.intl;
    return intl49.string(getSystemLocale.t.QZRcfO);
  } else if (constants7.VIEW_GUILD_ANALYTICS === item) {
    const intl48 = getSystemLocale.intl;
    return intl48.string(getSystemLocale.t["rQJBE/"]);
  } else if (constants7.VIEW_CREATOR_MONETIZATION_ANALYTICS === item) {
    const intl47 = getSystemLocale.intl;
    return intl47.string(getSystemLocale.t["0lTLTv"]);
  } else if (constants7.CHANGE_NICKNAME === item) {
    const intl46 = getSystemLocale.intl;
    return intl46.string(getSystemLocale.t.dilOF6);
  } else if (constants7.MANAGE_NICKNAMES === item) {
    const intl45 = getSystemLocale.intl;
    return intl45.string(getSystemLocale.t["t+Ct5x"]);
  } else if (constants7.MANAGE_ROLES === item) {
    const intl44 = getSystemLocale.intl;
    return intl44.string(getSystemLocale.t["C8d+oG"]);
  } else if (constants7.MANAGE_WEBHOOKS === item) {
    const intl43 = getSystemLocale.intl;
    return intl43.string(getSystemLocale.t["/ADKmM"]);
  } else if (constants7.CREATE_GUILD_EXPRESSIONS === item) {
    const intl42 = getSystemLocale.intl;
    return intl42.string(getSystemLocale.t.HarVuP);
  } else if (constants7.MANAGE_GUILD_EXPRESSIONS === item) {
    const intl41 = getSystemLocale.intl;
    return intl41.string(getSystemLocale.t.bbuXIn);
  } else if (constants7.VIEW_AUDIT_LOG === item) {
    const intl40 = getSystemLocale.intl;
    return intl40.string(getSystemLocale.t.fZgLpA);
  } else if (constants7.VIEW_CHANNEL === item) {
    if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
      if (log.targetType !== tmp77.CHANNEL_OVERWRITE) {
        const intl38 = getSystemLocale.intl;
        let stringResult1 = intl38.string(getSystemLocale.t.uV83yi);
      }
      return stringResult1;
    }
    const intl39 = getSystemLocale.intl;
    stringResult1 = intl39.string(getSystemLocale.t["W/A4Qp"]);
  } else if (constants7.SEND_MESSAGES === item) {
    const intl37 = getSystemLocale.intl;
    return intl37.string(getSystemLocale.t.T32rkC);
  } else if (constants7.SEND_TTS_MESSAGES === item) {
    const intl36 = getSystemLocale.intl;
    return intl36.string(getSystemLocale.t.Mg7bku);
  } else if (constants7.USE_APPLICATION_COMMANDS === item) {
    const intl35 = getSystemLocale.intl;
    return intl35.string(getSystemLocale.t.shbR1a);
  } else if (constants7.MANAGE_MESSAGES === item) {
    const intl34 = getSystemLocale.intl;
    return intl34.string(getSystemLocale.t["6lU9xM"]);
  } else if (constants7.EMBED_LINKS === item) {
    const intl33 = getSystemLocale.intl;
    return intl33.string(getSystemLocale.t["969dEL"]);
  } else if (constants7.ATTACH_FILES === item) {
    const intl32 = getSystemLocale.intl;
    return intl32.string(getSystemLocale.t["3AS4UM"]);
  } else if (constants7.READ_MESSAGE_HISTORY === item) {
    const intl31 = getSystemLocale.intl;
    return intl31.string(getSystemLocale.t.l9ufaR);
  } else if (constants7.MENTION_EVERYONE === item) {
    const intl30 = getSystemLocale.intl;
    return intl30.string(getSystemLocale.t.Y78KGC);
  } else if (constants7.USE_EXTERNAL_EMOJIS === item) {
    const intl29 = getSystemLocale.intl;
    return intl29.string(getSystemLocale.t.BpBGZU);
  } else if (constants7.USE_EXTERNAL_STICKERS === item) {
    const intl28 = getSystemLocale.intl;
    return intl28.string(getSystemLocale.t["UeRs+b"]);
  } else if (constants7.ADD_REACTIONS === item) {
    const intl27 = getSystemLocale.intl;
    return intl27.string(getSystemLocale.t.yEoJAr);
  } else if (constants7.CONNECT === item) {
    const intl26 = getSystemLocale.intl;
    return intl26.string(getSystemLocale.t.S0W8Z5);
  } else if (constants7.SPEAK === item) {
    const intl25 = getSystemLocale.intl;
    return intl25.string(getSystemLocale.t["8w1tIR"]);
  } else if (constants7.MUTE_MEMBERS === item) {
    const intl24 = getSystemLocale.intl;
    return intl24.string(getSystemLocale.t["8EI30/"]);
  } else if (constants7.DEAFEN_MEMBERS === item) {
    const intl23 = getSystemLocale.intl;
    return intl23.string(getSystemLocale.t["9L47Fr"]);
  } else if (constants7.MOVE_MEMBERS === item) {
    const intl22 = getSystemLocale.intl;
    return intl22.string(getSystemLocale.t.YtjJPQ);
  } else if (constants7.USE_VAD === item) {
    const intl21 = getSystemLocale.intl;
    return intl21.string(getSystemLocale.t["08zAV7"]);
  } else if (constants7.PRIORITY_SPEAKER === item) {
    const intl20 = getSystemLocale.intl;
    return intl20.string(getSystemLocale.t.BVK71i);
  } else if (constants7.STREAM === item) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.FlNoSV);
  } else if (constants7.USE_SOUNDBOARD === item) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t.Bco7NG);
  } else if (constants7.USE_EXTERNAL_SOUNDS === item) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t.pwaVJ6);
  } else if (constants7.REQUEST_TO_SPEAK === item) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t["5kicT2"]);
  } else if (constants7.USE_EMBEDDED_ACTIVITIES === item) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t.rLSGeh);
  } else if (constants7.CREATE_EVENTS === item) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.qyjZua);
  } else if (constants7.MANAGE_EVENTS === item) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.HIgA5a);
  } else if (constants7.CREATE_PUBLIC_THREADS === item) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t["25rKnX"]);
  } else if (constants7.CREATE_PRIVATE_THREADS === item) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.QwbTSa);
  } else if (constants7.SEND_MESSAGES_IN_THREADS === item) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.fTE74g);
  } else if (constants7.MANAGE_THREADS === item) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.kEqgr7);
  } else if (constants7.MODERATE_MEMBERS === item) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t["+RL6pz"]);
  } else if (constants7.SET_VOICE_CHANNEL_STATUS === item) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.VBwkUf);
  } else if (constants7.SEND_POLLS === item) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.UMQ7Ww);
  } else if (constants7.SEND_VOICE_MESSAGES === item) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.WlWSBT);
  } else if (constants7.USE_EXTERNAL_APPS === item) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.TtA5rK);
  } else if (constants7.PIN_MESSAGES === item) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Y5BI39);
  } else if (constants7.BYPASS_SLOWMODE === item) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.kqcjeV);
  } else if (constants7.MANAGE_OFFICIAL_MESSAGES === item) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Aj9ruN);
  } else {
    return null;
  }
};
export const transformLogs = function transformLogs(arr, arg1) {
  closure_0 = arg1;
  items = [];
  let item = arr.forEach((item, index) => {
    let result3 = item;
    items = result3;
    const targetType = item.targetType;
    let tmp3 = result3;
    if (AuditLogTargetTypes.GUILD !== targetType) {
      tmp3 = tmp;
      if (AuditLogTargetTypes.GUILD_HOME !== targetType) {
        tmp3 = tmp;
        if (AuditLogTargetTypes.GUILD_PROFILE !== targetType) {
          if (AuditLogTargetTypes.CHANNEL !== targetType) {
            if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
              if (AuditLogTargetTypes.USER === targetType) {
                result3 = AuditLogChangeKeys.NICK;
                const targetId15 = item.targetId;
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
                  tmp200 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId15];
                }
                let tmp201 = tmp197;
                if (null == tmp197) {
                  tmp201 = tmp197;
                  if (null != item.changes) {
                    const changes = item.changes;
                    let found = changes.find((item, index) => item.key === result3);
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
                tmp194 = null != tmp192 && true;
              } else if (AuditLogTargetTypes.ROLE === targetType) {
                result3 = AuditLogChangeKeys.NAME;
                const targetId14 = item.targetId;
                const tmp180 = ((targetId14) => closure_1_11.getRole(items.id, targetId14))(targetId14);
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
                  tmp187 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId14];
                }
                let tmp188 = tmp184;
                if (null == tmp184) {
                  tmp188 = tmp184;
                  if (null != item.changes) {
                    const changes1 = item.changes;
                    let found1 = changes1.find((item, index) => item.key === result3);
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
                tmp182 = null != tmp180 && true;
              } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
                result3 = AuditLogChangeKeys.ID;
                const targetId13 = item.targetId;
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
                  tmp172 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId13];
                }
                let stringResult = tmp169;
                if (null == tmp169) {
                  stringResult = tmp169;
                  if (null != item.changes) {
                    const changes2 = item.changes;
                    let found2 = changes2.find((item, index) => item.key === result3);
                    stringResult = tmp169;
                    if (null != found2) {
                      stringResult = found2.newValue || found2.oldValue;
                    }
                  }
                }
                if (stringResult == null) {
                  stringResult = targetId13;
                }
                if (null == stringResult) {
                  let intl = callback(dependencyMap[17]).intl;
                  stringResult = intl.string(callback(dependencyMap[17]).t.ZNQyiR);
                }
                tmp3 = stringResult;
                tmp167 = null != tmp165 && true;
              } else {
                tmp3 = tmp;
                if (AuditLogTargetTypes.GUILD_ONBOARDING !== targetType) {
                  tmp3 = tmp;
                  if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION !== targetType) {
                    if (AuditLogTargetTypes.INVITE === targetType) {
                      result3 = AuditLogChangeKeys.CODE;
                      const targetId12 = item.targetId;
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
                        tmp160 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId12];
                      }
                      let tmp161 = tmp157;
                      if (null == tmp157) {
                        tmp161 = tmp157;
                        if (null != item.changes) {
                          const changes3 = item.changes;
                          let found3 = changes3.find((item, index) => item.key === result3);
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
                      tmp155 = null != tmp153 && false;
                    } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
                      result3 = AuditLogChangeKeys.TYPE;
                      const targetId11 = item.targetId;
                      const tmp140 = ((targetId11) => {
                        closure_0 = targetId11;
                        const integrations = closure_14.integrations;
                        return integrations.find((item, index) => item.id === closure_0);
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
                        tmp147 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId11];
                      }
                      let tmp148 = tmp144;
                      if (null == tmp144) {
                        tmp148 = tmp144;
                        if (null != item.changes) {
                          const changes4 = item.changes;
                          let found4 = changes4.find((item, index) => item.key === result3);
                          tmp148 = tmp144;
                          if (null != found4) {
                            tmp148 = found4.newValue || found4.oldValue;
                          }
                        }
                      }
                      if (tmp148 == null) {
                        tmp148 = targetId11;
                      }
                      tmp3 = tmp148;
                      tmp142 = null != tmp140 && true;
                    } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
                      result3 = AuditLogChangeKeys.NAME;
                      const targetId10 = item.targetId;
                      const tmp128 = ((targetId10) => {
                        closure_0 = targetId10;
                        const webhooks = closure_14.webhooks;
                        return webhooks.find((item, index) => item.id === closure_0);
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
                        tmp135 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId10];
                      }
                      let tmp136 = tmp132;
                      if (null == tmp132) {
                        tmp136 = tmp132;
                        if (null != item.changes) {
                          const changes5 = item.changes;
                          let found5 = changes5.find((item, index) => item.key === result3);
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
                      tmp130 = null != tmp128 && true;
                    } else if (AuditLogTargetTypes.EMOJI === targetType) {
                      result3 = AuditLogChangeKeys.NAME;
                      const targetId9 = item.targetId;
                      const tmp116 = ((targetId9) => {
                        closure_0 = targetId9;
                        const guildEmoji = closure_1_4.getGuildEmoji(items.id);
                        return guildEmoji.find((item, index) => item.id === closure_0);
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
                        tmp123 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId9];
                      }
                      let tmp124 = tmp120;
                      if (null == tmp120) {
                        tmp124 = tmp120;
                        if (null != item.changes) {
                          const changes6 = item.changes;
                          let found6 = changes6.find((item, index) => item.key === result3);
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
                      tmp118 = null != tmp116 && true;
                    } else if (AuditLogTargetTypes.STICKER === targetType) {
                      result3 = AuditLogChangeKeys.NAME;
                      const targetId8 = item.targetId;
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
                        tmp111 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId8];
                      }
                      let tmp112 = tmp108;
                      if (null == tmp108) {
                        tmp112 = tmp108;
                        if (null != item.changes) {
                          const changes7 = item.changes;
                          let found7 = changes7.find((item, index) => item.key === result3);
                          tmp112 = tmp108;
                          if (null != found7) {
                            tmp112 = found7.newValue || found7.oldValue;
                          }
                        }
                      }
                      if (tmp112 == null) {
                        tmp112 = targetId8;
                      }
                      tmp3 = tmp112;
                      tmp106 = null != tmp104 && true;
                    } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
                      result3 = AuditLogChangeKeys.TOPIC;
                      const targetId7 = item.targetId;
                      const tmp92 = ((targetId7) => {
                        closure_0 = targetId7;
                        const values = Object.values(closure_1_7.getStageInstancesByGuild(items.id));
                        let found;
                        if (values != null) {
                          found = values.find((item, index) => item.id === closure_0);
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
                        tmp99 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId7];
                      }
                      let tmp100 = tmp96;
                      if (null == tmp96) {
                        tmp100 = tmp96;
                        if (null != item.changes) {
                          const changes8 = item.changes;
                          const found8 = changes8.find((item, index) => item.key === result3);
                          tmp100 = tmp96;
                          if (null != found8) {
                            tmp100 = found8.newValue || found8.oldValue;
                          }
                        }
                      }
                      if (tmp100 == null) {
                        tmp100 = targetId7;
                      }
                      tmp3 = tmp100;
                      tmp94 = null != tmp92 && true;
                    } else {
                      if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT !== targetType) {
                        if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                          if (AuditLogTargetTypes.THREAD === targetType) {
                            result3 = AuditLogChangeKeys.NAME;
                            const targetId5 = item.targetId;
                            const tmp68 = ((targetId5) => {
                              closure_0 = targetId5;
                              const threads = closure_14.threads;
                              return threads.find((item, index) => item.id === closure_0);
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
                              tmp75 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId5];
                            }
                            let tmp76 = tmp72;
                            if (null == tmp72) {
                              tmp76 = tmp72;
                              if (null != item.changes) {
                                const changes9 = item.changes;
                                const found9 = changes9.find((item, index) => item.key === result3);
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
                            tmp70 = null != tmp68 && true;
                          } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
                            if (item.targetId === item.options.application_id) {
                              let integrations = closure_1_14.integrations;
                              const found10 = integrations.find((item, index) => {
                                const application = item.application;
                                let id;
                                if (application != null) {
                                  id = application.id;
                                }
                                return id === result3.targetId;
                              });
                              tmp3 = null != found10 ? found10.name : item.targetId;
                            } else {
                              result3 = AuditLogChangeKeys.NAME;
                              const targetId18 = item.targetId;
                              const tmp253 = ((targetId18) => {
                                closure_0 = targetId18;
                                const applicationCommands = closure_14.applicationCommands;
                                return applicationCommands.find((item, index) => item.id === closure_0);
                              })(targetId18);
                              let tmp56 = null;
                              if (tmp55) {
                                tmp56 = ((name_localized) => {
                                  if (null != name_localized.name_localized) {
                                    if ("" !== name_localized.name_localized) {
                                      let name = name_localized.name_localized;
                                    }
                                    let combined = name;
                                    if (name_localized.type === result3(1954).ApplicationCommandType.CHAT) {
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
                                tmp60 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId18];
                              }
                              let tmp61 = tmp57;
                              if (null == tmp57) {
                                tmp61 = tmp57;
                                if (null != item.changes) {
                                  const changes10 = item.changes;
                                  const found11 = changes10.find((item, index) => item.key === result3);
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
                              tmp55 = null != tmp253 && true;
                            }
                          } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
                            result3 = AuditLogChangeKeys.NAME;
                            const targetId4 = item.targetId;
                            const tmp44 = ((targetId4) => {
                              closure_0 = targetId4;
                              const automodRules = closure_14.automodRules;
                              return automodRules.find((item, index) => item.id === closure_0);
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
                              tmp51 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId4];
                            }
                            let tmp52 = tmp48;
                            if (null == tmp48) {
                              tmp52 = tmp48;
                              if (null != item.changes) {
                                const changes11 = item.changes;
                                const found12 = changes11.find((item, index) => item.key === result3);
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
                            tmp46 = null != tmp44 && true;
                          } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
                            result3 = AuditLogChangeKeys.NAME;
                            const targetId3 = item.targetId;
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
                              tmp39 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId3];
                            }
                            let tmp40 = tmp36;
                            if (null == tmp36) {
                              tmp40 = tmp36;
                              if (null != item.changes) {
                                const changes12 = item.changes;
                                const found13 = changes12.find((item, index) => item.key === result3);
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
                            tmp34 = null != tmp32 && false;
                          } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
                            let targetId2 = tmp.id;
                            result3 = AuditLogChangeKeys.GUILD_ID;
                            if (targetId2 == null) {
                              targetId2 = item.targetId;
                            }
                            const tmp20 = ((targetId2) => settings.getSettings(targetId2))(targetId2);
                            let flag = null != tmp20;
                            if (flag) {
                              flag = true;
                            }
                            let tmp22 = null;
                            if (flag) {
                              tmp22 = ((arg0) => {
                                const intl = result3(1236).intl;
                                return intl.string(result3(1236).t.VbpLyU);
                              })(tmp20);
                            }
                            let tmp23 = tmp22;
                            if (null == tmp22) {
                              tmp23 = tmp22;
                              if (tmp26) {
                                tmp23 = tmp25[targetId2];
                              }
                              tmp26 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId2];
                            }
                            let tmp27 = tmp23;
                            if (null == tmp23) {
                              tmp27 = tmp23;
                              if (null != item.changes) {
                                const changes13 = item.changes;
                                const found14 = changes13.find((item, index) => item.key === result3);
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
                          } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
                            result3 = AuditLogChangeKeys.STATUS;
                            const targetId = item.targetId;
                            let tmp7 = ((targetId) => store.getChannel(targetId))(targetId);
                            let tmp10 = null;
                            if (tmp9) {
                              tmp10 = ((channel) => result3(4984).computeChannelName(channel, closure_13, closure_12, true))(tmp7);
                            }
                            let tmp11 = tmp10;
                            if (null == tmp10) {
                              tmp11 = tmp10;
                              if (tmp14) {
                                tmp11 = tmp13[targetId];
                              }
                              tmp14 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId];
                            }
                            let tmp15 = tmp11;
                            if (null == tmp11) {
                              tmp15 = tmp11;
                              if (null != item.changes) {
                                const changes14 = item.changes;
                                const found15 = changes14.find((item, index) => item.key === result3);
                                tmp15 = tmp11;
                                if (null != found15) {
                                  tmp15 = found15.newValue || found15.oldValue;
                                }
                              }
                            }
                            if (tmp15 == null) {
                              tmp15 = targetId;
                            }
                            tmp3 = tmp15;
                            tmp9 = null != tmp7 && true;
                          } else {
                            closure_1_35.warn("Unknown targetType for log", item);
                            tmp3 = null;
                          }
                        }
                      }
                      result3 = AuditLogChangeKeys.NAME;
                      const targetId6 = item.targetId;
                      const tmp80 = ((targetId6) => {
                        closure_0 = targetId6;
                        const guildScheduledEvents = closure_14.guildScheduledEvents;
                        return guildScheduledEvents.find((item, index) => item.id === closure_0);
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
                        tmp87 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId6];
                      }
                      let tmp88 = tmp84;
                      if (null == tmp84) {
                        tmp88 = tmp84;
                        if (null != item.changes) {
                          const changes15 = item.changes;
                          const found16 = changes15.find((item, index) => item.key === result3);
                          tmp88 = tmp84;
                          if (null != found16) {
                            tmp88 = found16.newValue || found16.oldValue;
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
          result3 = AuditLogChangeKeys.NAME;
          const targetId16 = item.targetId;
          const tmp205 = ((targetId16) => store.getChannel(targetId16))(targetId16);
          let tmp208 = null;
          if (tmp207) {
            tmp208 = ((channel) => result3(4984).computeChannelName(channel, closure_13, closure_12, true))(tmp205);
          }
          let tmp209 = tmp208;
          if (null == tmp208) {
            tmp209 = tmp208;
            if (tmp212) {
              tmp209 = tmp211[targetId16];
            }
            tmp212 = null != closure_1_14.deletedTargets[item.targetType] && null != closure_1_14.deletedTargets[item.targetType][targetId16];
          }
          let tmp213 = tmp209;
          if (null == tmp209) {
            tmp213 = tmp209;
            if (null != item.changes) {
              const changes16 = item.changes;
              const found17 = changes16.find((item, index) => item.key === result3);
              tmp213 = tmp209;
              if (null != found17) {
                tmp213 = found17.newValue || found17.oldValue;
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
      const result = item.set("user", tmp216);
      const result1 = result.set("target", tmp3);
      result3 = result1;
      if (null != result1.options) {
        obj = {};
        const merged = Object.assign(result1.options);
        let type = result1.options.type;
        if (closure_1_27.USER === type) {
          let id = result1.options.id;
          let user = closure_1_13.getUser(id);
          if (tmp224) {
            id = items(dependencyMap[25]).getUserTag(user);
            const obj4 = items(dependencyMap[25]);
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
          const tmp227 = ((targetId17) => store.getChannel(targetId17))(targetId17);
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
            tmp234 = null != closure_1_14.deletedTargets[result1.targetType] && null != closure_1_14.deletedTargets[result1.targetType][targetId17];
          }
          let tmp235 = tmp231;
          if (null == tmp231) {
            tmp235 = tmp231;
            if (null != result1.changes) {
              const changes17 = result1.changes;
              const found18 = changes17.find((item, index) => item.key === result3);
              tmp235 = tmp231;
              if (null != found18) {
                tmp235 = found18.newValue || found18.oldValue;
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
          let guildScheduledEvents = closure_1_14.guildScheduledEvents;
          const found19 = guildScheduledEvents.find((item, index) => item.id === result3.targetId);
          let found20;
          if (found19 != null) {
            const prop = found19.guild_scheduled_event_exceptions;
            found20 = prop.find((item, index) => item.event_exception_id === result3.options.event_exception_id);
          }
          const obj5 = callback(dependencyMap[30]);
          const tmp244 = items(dependencyMap[31]);
          let str5;
          if (found20 != null) {
            str5 = found20.event_exception_id;
          }
          if (str5 == null) {
            str5 = "0";
          }
          obj.subtarget = obj5.dateFormat(tmp244(items(dependencyMap[19]).extractTimestamp(str5)), "LL");
          options = obj;
          const obj6 = items(dependencyMap[19]);
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
        item = changes18.forEach((item, index) => {
          let lib = result3;
          if (lib.action === closure_2_15.APPLICATION_COMMAND_PERMISSION_UPDATE) {
            const type = tmp298.type;
            if (closure_2_26.ROLE === type) {
              let name = tmp298.id;
              const role = closure_2_11.getRole(result3.id, name);
              if (tmp319) {
                name = role.name;
              }
              item.subtarget = name;
              let tmp258 = item;
              tmp319 = null != role && true;
            } else if (closure_2_26.USER === type) {
              let id2 = tmp298.id;
              const user = closure_2_13.getUser(id2);
              if (tmp313) {
                id2 = items(dependencyMap[25]).getUserTag(user);
                const obj25 = items(dependencyMap[25]);
              }
              item.subtarget = id2;
              tmp258 = item;
              tmp313 = null != user && true;
            } else {
              tmp258 = item;
              if (closure_2_26.CHANNEL === type) {
                const obj27 = items(dependencyMap[26])(result3.id);
                if (tmp298.id === str23.toString()) {
                  const intl11 = lib(dependencyMap[17]).intl;
                  item.subtarget = intl11.string(lib(dependencyMap[17]).t.MSYhgh);
                  tmp258 = item;
                } else {
                  let id = tmp298.id;
                  const channel = closure_2_10.getChannel(id);
                  if (tmp303) {
                    const obj24 = lib(dependencyMap[23]);
                    id = obj24.computeChannelName(channel, closure_2_13, closure_2_12, true);
                  }
                  item.subtarget = id;
                  tmp258 = item;
                  tmp303 = null != channel && true;
                }
                str23 = items(dependencyMap[26])(result3.id).subtract(1);
              }
            }
          } else if (AuditLogChangeKeys.OWNER_ID === item.key) {
            ({ newValue: newValue22, oldValue: oldValue22 } = item);
            if (null != item.newValue) {
              newValue22 = closure_2_13.getUser(item.newValue);
            }
            if (null != item.oldValue) {
              oldValue22 = closure_2_13.getUser(item.oldValue);
            }
            tmp258 = AuditLogChange;
            if (!oldValue22) {
              oldValue22 = item.oldValue;
            }
            if (!newValue22) {
              newValue22 = item.newValue;
            }
            tmp258 = new tmp258(key18, oldValue22, newValue22);
          } else {
            if (AuditLogChangeKeys.CHANNEL_ID !== key19) {
              if (AuditLogChangeKeys.AFK_CHANNEL_ID !== key19) {
                if (AuditLogChangeKeys.SYSTEM_CHANNEL_ID !== key19) {
                  if (AuditLogChangeKeys.RULES_CHANNEL_ID !== key19) {
                    if (AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID !== key19) {
                      if (AuditLogChangeKeys.AFK_TIMEOUT === key19) {
                        ({ newValue: newValue20, oldValue: oldValue20 } = item);
                        if (null != item.newValue) {
                          newValue20 = item.newValue / 60;
                        }
                        if (null != item.oldValue) {
                          oldValue20 = item.oldValue / 60;
                        }
                        tmp258 = AuditLogChange;
                        if (!oldValue20) {
                          oldValue20 = item.oldValue;
                        }
                        if (!newValue20) {
                          newValue20 = item.newValue;
                        }
                        tmp258 = new tmp258(key16, oldValue20, newValue20);
                      } else if (AuditLogChangeKeys.BITRATE === key19) {
                        ({ newValue: newValue19, oldValue: oldValue19 } = item);
                        if (null != item.newValue) {
                          newValue19 = item.newValue / 1000;
                        }
                        if (null != item.oldValue) {
                          oldValue19 = item.oldValue / 1000;
                        }
                        if (!oldValue19) {
                          oldValue19 = item.oldValue;
                        }
                        if (!newValue19) {
                          newValue19 = item.newValue;
                        }
                        tmp258 = new AuditLogChange(key15, oldValue19, newValue19);
                      } else if (AuditLogChangeKeys.COLOR === key19) {
                        ({ newValue: newValue18, oldValue: oldValue18 } = item);
                        if (null != item.newValue) {
                          const obj20 = lib(dependencyMap[27]);
                          newValue18 = lib(dependencyMap[27]).int2hex(item.newValue).toUpperCase();
                          const str21 = lib(dependencyMap[27]).int2hex(item.newValue);
                        }
                        if (null != item.oldValue) {
                          const obj21 = lib(dependencyMap[27]);
                          oldValue18 = lib(dependencyMap[27]).int2hex(item.oldValue).toUpperCase();
                          const str22 = lib(dependencyMap[27]).int2hex(item.oldValue);
                        }
                        if (!oldValue18) {
                          oldValue18 = item.oldValue;
                        }
                        if (!newValue18) {
                          newValue18 = item.newValue;
                        }
                        tmp258 = new AuditLogChange(key14, oldValue18, newValue18);
                      } else if (AuditLogChangeKeys.THEME_COLORS === key19) {
                        ({ newValue: newValue16, oldValue: oldValue16 } = item);
                        if (null != item.newValue) {
                          const newValue17 = item.newValue;
                          const obj16 = lib(dependencyMap[27]);
                          const formatted = lib(dependencyMap[27]).int2hex(newValue17[0]).toUpperCase();
                          const str13 = lib(dependencyMap[27]).int2hex(newValue17[0]);
                          const obj17 = lib(dependencyMap[27]);
                          const _HermesInternal = HermesInternal;
                          newValue16 = "" + formatted + ", " + lib(dependencyMap[27]).int2hex(newValue17[1]).toUpperCase();
                          const str14 = lib(dependencyMap[27]).int2hex(newValue17[1]);
                        }
                        if (null != item.oldValue) {
                          const oldValue17 = item.oldValue;
                          const obj18 = lib(dependencyMap[27]);
                          const formatted1 = lib(dependencyMap[27]).int2hex(oldValue17[0]).toUpperCase();
                          const str17 = lib(dependencyMap[27]).int2hex(oldValue17[0]);
                          const obj19 = lib(dependencyMap[27]);
                          const _HermesInternal2 = HermesInternal;
                          oldValue16 = "" + formatted1 + ", " + lib(dependencyMap[27]).int2hex(oldValue17[1]).toUpperCase();
                          const str18 = lib(dependencyMap[27]).int2hex(oldValue17[1]);
                        }
                        if (!oldValue16) {
                          oldValue16 = item.oldValue;
                        }
                        if (!newValue16) {
                          newValue16 = item.newValue;
                        }
                        tmp258 = new AuditLogChange(key13, oldValue16, newValue16);
                      } else if (AuditLogChangeKeys.MAX_AGE === key19) {
                        ({ newValue: newValue15, oldValue: oldValue15 } = item);
                        if (null != item.newValue) {
                          let label = item.newValue;
                          const maxAgeOptionByValue = items(dependencyMap[28]).getMaxAgeOptionByValue(label);
                          if (null !== maxAgeOptionByValue) {
                            label = maxAgeOptionByValue.label;
                          }
                          newValue15 = label;
                          const obj14 = items(dependencyMap[28]);
                        }
                        if (null != item.oldValue) {
                          let label2 = item.oldValue;
                          const maxAgeOptionByValue1 = items(dependencyMap[28]).getMaxAgeOptionByValue(label2);
                          if (null !== maxAgeOptionByValue1) {
                            label2 = maxAgeOptionByValue1.label;
                          }
                          oldValue15 = label2;
                          const obj15 = items(dependencyMap[28]);
                        }
                        if (!oldValue15) {
                          oldValue15 = item.oldValue;
                        }
                        if (!newValue15) {
                          newValue15 = item.newValue;
                        }
                        tmp258 = new AuditLogChange(key12, oldValue15, newValue15);
                      } else if (AuditLogChangeKeys.PERMISSIONS === key19) {
                        items = [];
                        ({ added: added2, removed: removed2 } = getPermissionChanges(item.oldValue, item.newValue));
                        if (added2.length > 0) {
                          const tmp208 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_GRANTED, null, added2);
                          items.push(tmp208);
                        }
                        tmp258 = items;
                        if (removed2.length > 0) {
                          const tmp372 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_DENIED, null, removed2);
                          items.push(tmp372);
                          tmp258 = items;
                        }
                        const tmp202 = getPermissionChanges(item.oldValue, item.newValue);
                      } else {
                        if (AuditLogChangeKeys.PERMISSIONS_GRANTED !== key19) {
                          if (AuditLogChangeKeys.PERMISSIONS_DENIED !== key19) {
                            if (AuditLogChangeKeys.FLAGS === key19) {
                              ({ oldValue: oldValue14, newValue: newValue14 } = item);
                              let num6 = 0;
                              if (typeof oldValue14 === "number") {
                                num6 = oldValue14;
                              }
                              let num7 = 0;
                              if (typeof newValue14 === "number") {
                                num7 = newValue14;
                              }
                              hasFlagAll;
                              const items1 = [];
                              const items2 = [];
                              for (const key10535 in closure_2_30) {
                                let tmp348 = ChannelFlags[key10535];
                                let obj26 = hasFlagAll;
                                if (obj26.hasFlag(removeFlagResult, tmp348)) {
                                  let arr1 = items1.push(tmp348);
                                }
                                let tmp349Result = hasFlagAll;
                                if (!tmp349Result.hasFlag(tmp179, tmp348)) {
                                  continue;
                                } else {
                                  let arr2 = items2.push(tmp348);
                                  continue;
                                }
                                continue;
                              }
                              const items3 = [];
                              if (items1.length > 0) {
                                const tmp188 = new AuditLogChange(item.key, null, items1);
                                items3.push(tmp188);
                              }
                              tmp258 = items3;
                              if (items2.length > 0) {
                                const tmp356 = new AuditLogChange(item.key, items2, null);
                                items3.push(tmp356);
                                tmp258 = items3;
                              }
                              const removeFlagResult = hasFlagAll.removeFlag(num7, num6);
                            } else if (AuditLogChangeKeys.PREFERRED_LOCALE === key19) {
                              ({ newValue: newValue13, oldValue: oldValue13 } = item);
                              if (null != item.newValue) {
                                lib = item.newValue;
                                const availableLocales = lib(dependencyMap[17]).getAvailableLocales();
                                const found = availableLocales.find((item, index) => item.value === closure_0);
                                name = null;
                                if (null != found) {
                                  name = found.name;
                                }
                                newValue13 = name;
                                const obj10 = lib(dependencyMap[17]);
                              }
                              if (null != item.oldValue) {
                                lib = item.oldValue;
                                const availableLocales1 = lib(dependencyMap[17]).getAvailableLocales();
                                const found1 = availableLocales1.find((item, index) => item.value === closure_0);
                                let name1 = null;
                                if (null != found1) {
                                  name1 = found1.name;
                                }
                                oldValue13 = name1;
                                const obj11 = lib(dependencyMap[17]);
                              }
                              if (!oldValue13) {
                                oldValue13 = item.oldValue;
                              }
                              if (!newValue13) {
                                newValue13 = item.newValue;
                              }
                              tmp258 = new AuditLogChange(key11, oldValue13, newValue13);
                            } else if (AuditLogChangeKeys.VIDEO_QUALITY_MODE === key19) {
                              ({ newValue: newValue12, oldValue: oldValue12 } = item);
                              if (null == item.newValue) {
                                if (null == item.oldValue) {
                                  if (!oldValue12) {
                                    oldValue12 = item.oldValue;
                                  }
                                  if (!newValue12) {
                                    newValue12 = item.newValue;
                                  }
                                  tmp258 = new AuditLogChange(key10, oldValue12, newValue12);
                                } else if (item.oldValue === closure_2_25.FULL) {
                                  const intl10 = lib(dependencyMap[17]).intl;
                                  let stringResult = intl10.string(lib(dependencyMap[17]).t["7jOoJE"]);
                                } else {
                                  const intl9 = lib(dependencyMap[17]).intl;
                                  stringResult = intl9.string(lib(dependencyMap[17]).t.jjKYpu);
                                }
                              } else if (item.newValue === closure_2_25.FULL) {
                                const intl8 = lib(dependencyMap[17]).intl;
                                let stringResult1 = intl8.string(lib(dependencyMap[17]).t["7jOoJE"]);
                              } else {
                                const intl7 = lib(dependencyMap[17]).intl;
                                stringResult1 = intl7.string(lib(dependencyMap[17]).t.jjKYpu);
                              }
                            } else if (AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS === key19) {
                              lib = item;
                              obj = {};
                              ({ SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS: obj9[closure_2_28.SUPPRESS_JOIN_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS: obj9[closure_2_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS], SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS: obj9[closure_2_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS], SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES: obj9[closure_2_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES] } = AuditLogChangeKeys);
                              const items4 = [];
                              const _Object = Object;
                              const values = Object.values(closure_2_28);
                              item = values.forEach((item, index) => {
                                if ((item.oldValue & item) === item !== (item.newValue & item) === item) {
                                  const tmp7 = new closure_1_9(obj[item], !tmp, !tmp2);
                                  items4.push(tmp7);
                                }
                              });
                              tmp258 = items4;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_ACTIONS === key19) {
                              let tmp132 = item;
                              if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue11, oldValue: oldValue11 } = item);
                                if (null != item.newValue) {
                                  newValue = item.newValue;
                                  const mapped = newValue.map((item, index) => item.type);
                                  let joined = mapped;
                                  if (null != mapped) {
                                    const mapped1 = mapped.map(lib(dependencyMap[29]).actionTypeToName);
                                    joined = mapped1.join(", ");
                                  }
                                  newValue11 = joined;
                                }
                                if (null != item.oldValue) {
                                  oldValue = item.oldValue;
                                  const mapped2 = oldValue.map((item, index) => item.type);
                                  let joined1 = mapped2;
                                  if (null != mapped2) {
                                    const mapped3 = mapped2.map(lib(dependencyMap[29]).actionTypeToName);
                                    joined1 = mapped3.join(", ");
                                  }
                                  oldValue11 = joined1;
                                }
                                tmp132 = AuditLogChange;
                                if (!oldValue11) {
                                  oldValue11 = item.oldValue;
                                }
                                if (!newValue11) {
                                  newValue11 = item.newValue;
                                }
                                tmp132 = new tmp132(key9, oldValue11, newValue11);
                              }
                              tmp258 = tmp132;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE === key19) {
                              let tmp118 = item;
                              if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const eventTypeToName = lib(dependencyMap[29]).eventTypeToName;
                                ({ newValue: newValue10, oldValue: oldValue10 } = item);
                                if (null != item.newValue) {
                                  newValue10 = eventTypeToName(item.newValue);
                                }
                                if (null != item.oldValue) {
                                  oldValue10 = eventTypeToName(item.oldValue);
                                }
                                tmp118 = AuditLogChange;
                                if (!oldValue10) {
                                  oldValue10 = item.oldValue;
                                }
                                if (!newValue10) {
                                  newValue10 = item.newValue;
                                }
                                tmp118 = new tmp118(key8, oldValue10, newValue10);
                              }
                              tmp258 = tmp118;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE === key19) {
                              let tmp110 = item;
                              if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                const triggerTypeToName = lib(dependencyMap[29]).triggerTypeToName;
                                ({ newValue: newValue9, oldValue: oldValue9 } = item);
                                if (null != item.newValue) {
                                  newValue9 = triggerTypeToName(item.newValue);
                                }
                                if (null != item.oldValue) {
                                  oldValue9 = triggerTypeToName(item.oldValue);
                                }
                                tmp110 = AuditLogChange;
                                if (!oldValue9) {
                                  oldValue9 = item.oldValue;
                                }
                                if (!newValue9) {
                                  newValue9 = item.newValue;
                                }
                                tmp110 = new tmp110(key7, oldValue9, newValue9);
                              }
                              tmp258 = tmp110;
                            } else if (AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA === key19) {
                              let tmp102 = item;
                              if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue8, oldValue: oldValue8 } = item);
                                if (null != item.newValue) {
                                  let newValue7 = item.newValue;
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
                                      const intl5 = lib(dependencyMap[17]).intl;
                                      obj = { newValue: null };
                                      const keyword_filter = newValue7.keyword_filter;
                                      const mapped4 = keyword_filter.map((item, index) => "'" + item + "'");
                                      newValue7 = mapped4.join(", ");
                                      obj[0] = newValue7;
                                      json = intl5.formatToMarkdownString(lib(dependencyMap[17]).t.y91UXV, obj);
                                    }
                                  }
                                  newValue8 = tmp335;
                                }
                                if (null != item.oldValue) {
                                  let oldValue7 = item.oldValue;
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
                                      const intl6 = lib(dependencyMap[17]).intl;
                                      obj1 = { newValue: null };
                                      const keyword_filter1 = oldValue7.keyword_filter;
                                      const mapped5 = keyword_filter1.map((item, index) => "'" + item + "'");
                                      oldValue7 = mapped5.join(", ");
                                      obj1[0] = oldValue7;
                                      json1 = intl6.formatToMarkdownString(lib(dependencyMap[17]).t.y91UXV, obj1);
                                    }
                                  }
                                  oldValue8 = tmp336;
                                }
                                tmp102 = AuditLogChange;
                                if (!oldValue8) {
                                  oldValue8 = item.oldValue;
                                }
                                if (!newValue8) {
                                  newValue8 = item.newValue;
                                }
                                tmp102 = new tmp102(key6, oldValue8, newValue8);
                              }
                              tmp258 = tmp102;
                            } else {
                              if (AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS !== key19) {
                                if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS !== key19) {
                                  if (AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS !== key19) {
                                    if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== key19) {
                                      if (AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST !== key19) {
                                        if (AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST !== key19) {
                                          if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS === key19) {
                                            let tmp66 = item;
                                            if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue5, oldValue: oldValue5 } = item);
                                              if (null != item.newValue) {
                                                const newValue1 = item.newValue;
                                                const mapped6 = newValue1.map(closure_2_10.getChannel);
                                                const found2 = mapped6.filter((item, index) => null != item);
                                                const mapped7 = found2.map((item, index) => item(table[23]).computeChannelName(item, closure_13, closure_12, true));
                                                if (null == mapped7) {
                                                  newValue5 = mapped7;
                                                } else {
                                                  if (null == mapped7) {
                                                    const intl3 = lib(dependencyMap[17]).intl;
                                                    let stringResult2 = intl3.string(lib(dependencyMap[17]).t["K/EdV8"]);
                                                  }
                                                  stringResult2 = mapped7.join(", ");
                                                }
                                              }
                                              if (null != item.oldValue) {
                                                const oldValue1 = item.oldValue;
                                                const mapped8 = oldValue1.map(closure_2_10.getChannel);
                                                const found3 = mapped8.filter((item, index) => null != item);
                                                const mapped9 = found3.map((item, index) => item(table[23]).computeChannelName(item, closure_13, closure_12, true));
                                                if (null == mapped9) {
                                                  oldValue5 = mapped9;
                                                } else {
                                                  if (null == mapped9) {
                                                    const intl4 = lib(dependencyMap[17]).intl;
                                                    let stringResult3 = intl4.string(lib(dependencyMap[17]).t["K/EdV8"]);
                                                  }
                                                  stringResult3 = mapped9.join(", ");
                                                }
                                              }
                                              tmp66 = AuditLogChange;
                                              if (!oldValue5) {
                                                oldValue5 = item.oldValue;
                                              }
                                              if (!newValue5) {
                                                newValue5 = item.newValue;
                                              }
                                              tmp66 = new tmp66(key4, oldValue5, newValue5);
                                            }
                                            tmp258 = tmp66;
                                          } else if (AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES === key19) {
                                            let tmp50 = item;
                                            if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                              ({ newValue: newValue4, oldValue: oldValue4 } = item);
                                              if (null != item.newValue) {
                                                let newValue2 = item.newValue;
                                                const mapped10 = newValue2.map((item, index) => closure_1_11.getRole(item.id, item));
                                                const found4 = mapped10.filter((item, index) => null != item);
                                                const mapped11 = found4.map((item, index) => item.name);
                                                if (null == mapped11) {
                                                  newValue4 = mapped11;
                                                } else {
                                                  if (null == mapped11) {
                                                    const intl = lib(dependencyMap[17]).intl;
                                                    let stringResult4 = intl.string(lib(dependencyMap[17]).t["K/EdV8"]);
                                                  }
                                                  stringResult4 = mapped11.join(", ");
                                                }
                                              }
                                              if (null != item.oldValue) {
                                                let oldValue2 = item.oldValue;
                                                const mapped12 = oldValue2.map((item, index) => closure_1_11.getRole(item.id, item));
                                                const found5 = mapped12.filter((item, index) => null != item);
                                                const mapped13 = found5.map((item, index) => item.name);
                                                if (null == mapped13) {
                                                  oldValue4 = mapped13;
                                                } else {
                                                  if (null == mapped13) {
                                                    const intl2 = lib(dependencyMap[17]).intl;
                                                    let stringResult5 = intl2.string(lib(dependencyMap[17]).t["K/EdV8"]);
                                                  }
                                                  stringResult5 = mapped13.join(", ");
                                                }
                                              }
                                              tmp50 = AuditLogChange;
                                              if (!oldValue4) {
                                                oldValue4 = item.oldValue;
                                              }
                                              if (!newValue4) {
                                                newValue4 = item.newValue;
                                              }
                                              tmp50 = new tmp50(key3, oldValue4, newValue4);
                                            }
                                            tmp258 = tmp50;
                                          } else if (AuditLogChangeKeys.ROLE_IDS === key19) {
                                            let tmp34 = item;
                                            if (tmp.targetType === AuditLogTargetTypes.INVITE) {
                                              ({ newValue: newValue3, oldValue: oldValue3 } = item);
                                              if (null != item.newValue) {
                                                newValue3 = item.newValue;
                                                const mapped14 = newValue3.map((item, index) => closure_1_11.getRole(item.id, item));
                                                const found6 = mapped14.filter((item, index) => null != item);
                                                newValue3 = found6.map((item, index) => ({ id: item.id, name: item.name }));
                                              }
                                              if (null != item.oldValue) {
                                                oldValue3 = item.oldValue;
                                                const mapped15 = oldValue3.map((item, index) => closure_1_11.getRole(item.id, item));
                                                const found7 = mapped15.filter((item, index) => null != item);
                                                oldValue3 = found7.map((item, index) => ({ id: item.id, name: item.name }));
                                              }
                                              tmp34 = AuditLogChange;
                                              if (!oldValue3) {
                                                oldValue3 = item.oldValue;
                                              }
                                              if (!newValue3) {
                                                newValue3 = item.newValue;
                                              }
                                              tmp34 = new tmp34(key2, oldValue3, newValue3);
                                            }
                                            tmp258 = tmp34;
                                          } else if (AuditLogChangeKeys.AVAILABLE_TAGS === key19) {
                                            tmp258 = transformAvailableForumTagChange(item);
                                          } else if (AuditLogChangeKeys.APPLIED_TAGS === key19) {
                                            tmp258 = transformAppliedForumTagChange(item, tmp);
                                          } else if (AuditLogChangeKeys.SCHEDULED_START_TIME === key19) {
                                            ({ newValue, oldValue } = item);
                                            if (null != item.newValue) {
                                              newValue2 = item.newValue;
                                              obj = lib(dependencyMap[30]);
                                              const _Date = Date;
                                              const date = new Date(newValue2);
                                              newValue = obj.dateFormat(items(dependencyMap[31])(date), "LLLL");
                                              let tmp7 = items(dependencyMap[31]);
                                            }
                                            if (null != item.oldValue) {
                                              oldValue2 = item.oldValue;
                                              obj1 = lib(dependencyMap[30]);
                                              const _Date2 = Date;
                                              const date1 = new Date(oldValue2);
                                              oldValue = obj1.dateFormat(items(dependencyMap[31])(date1), "LLLL");
                                              const tmp17 = items(dependencyMap[31]);
                                            }
                                            if (!oldValue) {
                                              oldValue = item.oldValue;
                                            }
                                            if (!newValue) {
                                              newValue = item.newValue;
                                            }
                                            tmp258 = new AuditLogChange(key, oldValue, newValue);
                                          } else {
                                            tmp258 = item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp82 = item;
                              if (tmp.targetType === AuditLogTargetTypes.AUTO_MODERATION_RULE) {
                                ({ newValue: newValue6, oldValue: oldValue6 } = item);
                                if (null == item.newValue) {
                                  if (null == item.oldValue) {
                                    tmp82 = AuditLogChange;
                                    if (!oldValue6) {
                                      oldValue6 = item.oldValue;
                                    }
                                    if (!newValue6) {
                                      newValue6 = item.newValue;
                                    }
                                    tmp82 = new tmp82(key5, oldValue6, newValue6);
                                  } else {
                                    oldValue4 = item.oldValue;
                                    if (null == oldValue4) {
                                      const _JSON2 = JSON;
                                      let json2 = JSON.stringify(oldValue4);
                                    } else {
                                      const _Array2 = Array;
                                    }
                                    oldValue4 = oldValue4.map((item, index) => "'" + item + "'");
                                    json2 = oldValue4.join(", ");
                                  }
                                } else {
                                  newValue4 = item.newValue;
                                  if (null == newValue4) {
                                    const _JSON = JSON;
                                    let json3 = JSON.stringify(newValue4);
                                  } else {
                                    const _Array = Array;
                                  }
                                  newValue4 = newValue4.map((item, index) => "'" + item + "'");
                                  json3 = newValue4.join(", ");
                                }
                              }
                              tmp258 = tmp82;
                            }
                          }
                        }
                        const items5 = [];
                        ({ added, removed } = getPermissionChanges(item.oldValue, item.newValue));
                        if (added.length > 0) {
                          const tmp198 = new AuditLogChange(item.key, null, added);
                          items5.push(tmp198);
                        }
                        tmp258 = items5;
                        if (removed.length > 0) {
                          const tmp364 = new AuditLogChange(AuditLogChangeKeys.PERMISSIONS_RESET, removed, removed);
                          items5.push(tmp364);
                          tmp258 = items5;
                        }
                        const tmp192 = getPermissionChanges(item.oldValue, item.newValue);
                      }
                    }
                  }
                }
              }
            }
            ({ newValue: newValue21, oldValue: oldValue21 } = item);
            if (null != item.newValue) {
              const channel1 = closure_2_10.getChannel(item.newValue);
              let channelName = channel1;
              if (null != channel1) {
                const obj22 = lib(dependencyMap[23]);
                channelName = obj22.computeChannelName(channel1, closure_2_13, closure_2_12, true);
              }
              newValue21 = channelName;
            }
            if (null != item.oldValue) {
              const channel2 = closure_2_10.getChannel(item.oldValue);
              let channelName1 = channel2;
              if (null != channel2) {
                const obj23 = lib(dependencyMap[23]);
                channelName1 = obj23.computeChannelName(channel2, closure_2_13, closure_2_12, true);
              }
              oldValue21 = channelName1;
            }
            if (!oldValue21) {
              oldValue21 = item.oldValue;
            }
            if (!newValue21) {
              newValue21 = item.newValue;
            }
            tmp258 = new AuditLogChange(key17, oldValue21, newValue21);
          }
          if (Array.isArray(tmp258)) {
            const item1 = tmp258.forEach((item, index) => obj.push(item));
          } else {
            obj.push(tmp258);
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