// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx
import get_ActivityIndicator from "useLoadGuildStickersWithCreator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { MAX_STICKER_FILE_SIZE } from "STICKER_PICKER_TAB_PANEL_ID";
import jsxProd from "formatSize";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import createCacheKey from "createCacheKey";
import importAllResult from "getGuildTierFromGuild";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";

let BoostedGuildTiers;
let c3;
let c4;
let closure_12;
let map1;
let metroImportAll;
const require = arg1;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroImportAll, BoostedGuildTiers } = ME);
const GuildFeatures = ME.GuildFeatures;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE, title: null, IconComponent: "Array" };
obj[1] = intl.string(require("getSystemLocale").t.tfVXhP);
let items = [obj, , , ];
obj = { tier: BoostedGuildTiers.TIER_1, title: null, IconComponent: null };
obj[1] = intl2.string(require("getSystemLocale").t.nzXtaS);
obj[2] = require("BoostGemOutlineIcon").BoostGemOutlineIcon;
items[1] = obj;
let obj1 = { tier: BoostedGuildTiers.TIER_2, title: null, IconComponent: null };
obj1[1] = intl3.string(require("getSystemLocale").t["h33/uW"]);
obj1[2] = require("BoostGemIcon").BoostGemIcon;
items[2] = obj1;
let obj2 = { tier: BoostedGuildTiers.TIER_3, title: null, IconComponent: null };
obj2[1] = intl4.string(require("getSystemLocale").t.BfF6ED);
obj2[2] = require("BoostTier3Icon").BoostTier3Icon;
items[3] = obj2;
let closure_15 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, label: null, divider: null, stickerSlot: null, userRow: null };
  obj = { padding: Themes.space.PX_16, paddingBottom: Themes.space.PX_16 + arg0 };
  obj[0] = obj;
  obj = { marginBottom: Themes.space.PX_8 };
  obj[1] = obj;
  obj[2] = { marginTop: Themes.space.PX_16, marginBottom: Themes.space.PX_16 };
  const obj1 = { marginTop: Themes.space.PX_16, marginBottom: Themes.space.PX_16 };
  obj[3] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST, borderRadius: Themes.radii.lg, width: Themes.space.PX_64, height: Themes.space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  const obj2 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST, borderRadius: Themes.radii.lg, width: Themes.space.PX_64, height: Themes.space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  obj[4] = { gap: Themes.space.PX_8, flexDirection: "row", alignItems: "center" };
  return obj;
});
const memoResult = require("getGuildTierFromGuild").memo(function GuildSettingsModalStickers(guildId) {
  let c4;
  let canCreateExpressions;
  guildId = guildId.guildId;
  let importDefault;
  let guild;
  let guildTier;
  c4 = undefined;
  let stickers;
  let c6;
  const tmp3 = callback2(importDefault(guild[14])().bottom);
  importDefault = tmp3;
  let obj = guildId(guild[15]);
  let items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guild = stickers.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_10.MORE_STICKERS);
    }
    if (true !== hasItem) {
      let premiumTier;
      if (guild != null) {
        premiumTier = guild.premiumTier;
      }
      if (premiumTier == null) {
        premiumTier = outer1_9.NONE;
      }
      let guildTier = premiumTier;
    } else {
      guildTier = outer1_9.TIER_3;
    }
    return { guild, guildTier };
  }, items1);
  guild = stateFromStoresObject.guild;
  guildTier = stateFromStoresObject.guildTier;
  let obj1 = guildId(guild[16]);
  const manageResourcePermissions = obj1.getManageResourcePermissions(guild, c6, mergeGuildAvatar);
  ({ canCreateExpressions, canManageGuildExpression: c4 } = manageResourcePermissions);
  const tmp7 = importDefault(guild[17])(guildId);
  if ("success" !== tmp7.status) {
    return callback(tmp4(tmp2[18]).SceneLoadingIndicator, {});
  } else {
    stickers = tmp7.stickers;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp14;
    }
    c6 = 0;
    obj = { contentContainerStyle: null, children: null };
    obj[0] = tmp3.container;
    obj = { variant: "heading-md/semibold", style: null, children: null };
    obj[1] = tmp3.label;
    let intl = tmp4(tmp2[8]).intl;
    obj[2] = intl.string(tmp4(tmp2[8]).t.yxVsBJ);
    const items2 = [callback(tmp4(tmp2[20]).Text, obj), , , , ];
    obj1 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    obj1[2] = tmp3.label;
    const intl2 = tmp4(tmp2[8]).intl;
    let obj2 = { fileSize: null };
    obj2[0] = tmp4(tmp2[21]).formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true });
    obj1[3] = intl2.format(tmp4(tmp2[8]).t.kpcMft, obj2);
    items2[1] = callback(tmp4(tmp2[20]).Text, obj1);
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    let t = tmp4(tmp2[8]).t;
    if (canCreateExpressions) {
      let stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    let obj3 = { text: null, onPress: null, disabled: null };
    obj3[0] = stringResult;
    obj3[1] = function onPress() {
      _undefined(guild[23])({ guildId });
    };
    obj3[2] = !canCreateExpressions;
    items2[2] = callback(tmp4(tmp2[22]).Button, obj3);
    let obj4 = { outer: true, style: null };
    obj4[1] = tmp3.divider;
    items2[3] = callback(tmp4(tmp2[24]).FormDivider, obj4);
    let obj5 = { spacing: null, children: null };
    obj5[0] = tmp(tmp2[13]).space.PX_16;
    obj5[1] = items.map((label) => {
      let IconComponent;
      let tier;
      ({ tier, IconComponent } = label);
      let obj = guildId(guild[19]);
      const incrementalStickerCountForTier = obj.getIncrementalStickerCountForTier(tier);
      let obj1 = guildId(guild[19]);
      const availableStickerSlotCount = obj1.getAvailableStickerSlotCount(stickers, tier);
      let tmp7Result;
      if (null != IconComponent) {
        let str = "premium-nitro-pink-text";
        if (tmp) {
          str = "icon-muted";
        }
        obj = { color: null };
        obj[0] = str;
        tmp7Result = tmp7(IconComponent, obj);
      }
      obj = { icon: tmp7Result, label: label.title, subLabel: null, trailing: null };
      const intl = tmp2(tmp3[8]).intl;
      const format = intl.format;
      const t = tmp2(tmp3[8]).t;
      if (guildTier < tier) {
        obj1 = { required: null, decorator: "" };
        obj1[0] = outer1_8[tier];
        let formatResult = format(t.t2Wbo1, obj1);
      } else {
        let obj2 = { numTotal: null, numAvailable: null };
        obj2[0] = incrementalStickerCountForTier;
        obj2[1] = availableStickerSlotCount;
        formatResult = format(t.ZLoNtm, obj2);
      }
      obj[2] = formatResult;
      tmp7Result = undefined;
      if (guildTier < tier) {
        tmp7Result = tmp7(tmp2(tmp3[28]).LockIcon, { color: "icon-muted" });
      }
      let obj3 = { hasIcons: true, children: null };
      obj[3] = tmp7Result;
      let items = [
        outer1_12(guildId(guild[27]).TableRow, obj),
        Array.from({ length: incrementalStickerCountForTier }).map((arg0, arg1) => {
          let getUncachedChannelPermissions = tmp + 1;
          let closure_0 = tmp2;
          if (null == table[+getUncachedChannelPermissions]) {
            return null;
          } else {
            const tmp8 = callback(tmp2);
            const user = tmp2.user;
            let obj = { icon: null, label: null, trailing: null, onPress: null };
            obj = { style: null, children: null };
            obj[0] = closure_1.stickerSlot;
            const obj1 = { sticker: null, size: null, animated: true };
            obj1[0] = tmp2;
            obj1[1] = outer1_1(outer1_2[13]).space.PX_48;
            obj[1] = outer1_12(outer1_1(outer1_2[29]), obj1);
            obj[0] = outer1_12(outer1_4, obj);
            const obj2 = { variant: "heading-sm/semibold", color: "text-strong", style: null, children: null };
            obj2[2] = closure_1.label;
            obj2[3] = tmp2.name;
            const items = [outer1_12(outer1_0(outer1_2[20]).Text, obj2), ];
            let tmp16Result = null;
            if (null != user) {
              obj = { style: null, children: null };
              obj[0] = closure_1.userRow;
              const obj3 = { user: null, size: null, guildId: null };
              obj3[0] = user;
              obj3[1] = tmp10(tmp11[30]).AvatarSizes.XSMALL_20;
              obj3[2] = closure_0;
              const items1 = [tmp9(tmp10(tmp11[30]).Avatar, obj3), ];
              const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
              obj4[2] = outer1_1(tmp11[31]).getName(user);
              items1[1] = tmp9(tmp10(tmp11[20]).Text, obj4);
              obj[1] = items1;
              tmp16Result = tmp16(tmp12, obj);
              const tmp14Result = outer1_1(tmp11[31]);
            }
            const obj5 = { children: null };
            items[1] = tmp16Result;
            obj5[0] = items;
            obj[1] = outer1_13(outer1_4, obj5);
            let tmp9Result;
            if (tmp8) {
              tmp9Result = tmp9(tmp10(tmp11[32]).TableRowArrow, {});
            }
            obj[2] = tmp9Result;
            let fn;
            if (tmp8) {
              fn = () => {
                let obj = outer2_0(outer2_2[33]);
                obj = { guildId: tmp2, stickerId: tmp2.id };
                const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj);
              };
            }
            obj[3] = fn;
            return outer1_12(outer1_0(outer1_2[27]).TableRow, obj, arg1);
          }
        })
      ];
      obj3[1] = items;
      return outer1_13(guildId(guild[26]).TableRowGroup, obj3, tier);
    });
    items2[4] = callback(tmp4(tmp2[25]).Stack, obj5);
    obj[1] = items2;
    return closure_13(guildTier, obj);
  }
  tmp = importDefault;
});
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx");

export default memoResult;