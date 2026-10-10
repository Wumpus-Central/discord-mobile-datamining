// === Module 14882: GuildTagCreateGuildListBottomSheet ===

// Module 14882 (GuildTagCreateGuildListBottomSheet)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Powerups from "Powerups" /* 5011 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import GuildIconDefault from "GuildIcon" /* 6158 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import ActionSheet from "ActionSheet" /* 6898 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12215 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5020 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRow(guild) {
  const cResult = guild(576).c(14);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function u() {
      return GuildMemberCountStore.getMemberCount(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let formatToPlainStringResult = null;
    if (null != stateFromStores) {
      const intl = tmp(1126).intl;
      let obj2 = { count: stateFromStores };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.zRl6XR, obj2);
    }
    cResult[3] = stateFromStores;
    cResult[4] = formatToPlainStringResult;
    let tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj3 = { guild, size: tmp(6158).GuildIconSizes.SMALL_32 };
    const tmp14 = closure_4(GuildIconDefault, obj3);
    cResult[5] = guild;
    cResult[6] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] !== guild.id) {
    const fn2 = function h() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj2 = { guildId: guild.id, autoOpenPerkId: null, analyticsLocation: null };
      obj2.autoOpenPerkId = Powerups.GUILD_POWERUP_TAG_SKU_ID;
      obj2.analyticsLocation = AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE;
      openGuildPowerupsModalDefault(obj2);
    };
    cResult[7] = guild.id;
    cResult[8] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] === guild.name) {
    if (cResult[10] === tmp8) {
      if (cResult[11] === tmp10) {
        if (cResult[12] === tmp15) {
          let tmp16 = cResult[13];
        }
        return tmp16;
      }
    }
  }
  const tmp17 = closure_4(guild(6179).TableRow, { label: guild.name, subLabel: tmp8, icon: tmp10, arrow: true, onPress: tmp15 });
  cResult[9] = guild.name;
  cResult[10] = tmp8;
  cResult[11] = tmp10;
  cResult[12] = tmp15;
  cResult[13] = tmp17;
  tmp16 = tmp17;
  const obj4 = { label: guild.name, subLabel: tmp8, icon: tmp10, arrow: true, onPress: tmp15 };
  const tmpResult = guild(504);
}) : (function GuildRow(guild) {
  guild = guild.guild;
  const items = [GuildMemberCountStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild.id));
  let obj2 = { label: guild.name, subLabel: null, icon: null, arrow: true, onPress: null };
  let formatToPlainStringResult = null;
  if (null != stateFromStores) {
    const intl = tmp(1126).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.zRl6XR, obj3);
  }
  obj2.subLabel = formatToPlainStringResult;
  const obj4 = { guild, size: null };
  let obj = guild(504);
  obj4.size = guild(6158).GuildIconSizes.SMALL_32;
  obj2.icon = closure_4(GuildIconDefault, obj4);
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = { guildId: guild.id, autoOpenPerkId: null, analyticsLocation: null };
    obj2.autoOpenPerkId = Powerups.GUILD_POWERUP_TAG_SKU_ID;
    obj2.analyticsLocation = AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE;
    openGuildPowerupsModalDefault(obj2);
  };
  return closure_4(guild(6179).TableRow, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTagCreateGuildListBottomSheet(guilds) {
  const cResult = c.c(6);
  guilds = guilds.guilds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null, subtitle: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.xO5QzM);
    const intl2 = util.intl;
    obj2.subtitle = intl2.string(util.t["h+7Yx3"]);
    const tmp6 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guilds) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(guild) {
        return closure_1_4(closure_1_6, { guild }, guild.id);
      };
      cResult[3] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const mapped = guilds.map(tmp8);
    cResult[1] = guilds;
    cResult[2] = mapped;
  } else {
    if (cResult[4] !== cResult[2]) {
      const obj3 = { children: null };
      const items = [first, ];
      const obj4 = { hasIcons: true, children: tmp7 };
      items[1] = React4(TableRowGroup.TableRowGroup, obj4);
      obj3.children = items;
      const tmp14 = hasOwnProperty(ActionSheet.ActionSheet, obj3);
      cResult[4] = tmp7;
      cResult[5] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
}) : (function GuildTagCreateGuildListBottomSheet(guilds) {
  guilds = guilds.guilds;
  const obj = { children: null };
  const obj2 = { title: null, subtitle: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.xO5QzM);
  const intl2 = util.intl;
  obj2.subtitle = intl2.string(util.t["h+7Yx3"]);
  const items = [React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), React4(TableRowGroup.TableRowGroup, { hasIcons: true, children: guilds.map((guild) => closure_1_4(closure_1_6, { guild }, guild.id)) })];
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
});