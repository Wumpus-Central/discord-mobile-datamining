// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../../stores/GuildStore.tsx";
import closure_6 from "../../../../../stores/PermissionStore.tsx";
import closure_7 from "../../../../../stores/UserStore.tsx";
import ME from "../../../../../Constants.tsx";
import { MAX_STICKER_FILE_SIZE } from "../../../../stickers/StickersConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import { intl, intl as intl2, intl as intl3, intl as intl4 } from "../../../../../intl/index.native.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

const require = arg1;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_8, BoostedGuildTiers } = ME);
const GuildFeatures = ME.GuildFeatures;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE, title: null, IconComponent: "r" };
obj[1] = intl.string(require("getSystemLocale").t.tfVXhP);
let items = [obj, , ,];
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
  obj = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 + arg0 };
  obj[0] = obj;
  obj = { marginBottom: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
  obj1 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
  obj[3] = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: ThemesDefault.radii.lg,
    width: ThemesDefault.space.PX_64,
    height: ThemesDefault.space.PX_64,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  };
  const obj2 = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: ThemesDefault.radii.lg,
    width: ThemesDefault.space.PX_64,
    height: ThemesDefault.space.PX_64,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  };
  obj[4] = { gap: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
  return obj;
});
const memoResult = importAllResult.memo(function GuildSettingsModalStickers(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let guild;
  let guildTier;
  c4 = undefined;
  let stickers;
  c6 = undefined;
  const tmp3 = callback2(importDefault(guild[14])().bottom);
  importDefault = tmp3;
  let obj = guildId(guild[15]);
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      guild = stickers.getGuild(guildId);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(closure_1_10.MORE_STICKERS);
      }
      if (true !== hasItem) {
        let premiumTier;
        if (guild != null) {
          premiumTier = guild.premiumTier;
        }
        if (premiumTier == null) {
          premiumTier = closure_1_9.NONE;
        }
        guildTier = premiumTier;
      } else {
        guildTier = closure_1_9.TIER_3;
      }
      return { guild, guildTier };
    },
    items1,
  );
  guild = stateFromStoresObject.guild;
  guildTier = stateFromStoresObject.guildTier;
  obj1 = guildId(guild[16]);
  const manageResourcePermissions = obj1.getManageResourcePermissions(guild, c6, closure_7);
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
    const items2 = [callback(tmp4(tmp2[20]).Text, obj), , , ,];
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
      callback(guild[23])({ guildId });
    };
    obj3[2] = !canCreateExpressions;
    items2[2] = callback(tmp4(tmp2[22]).Button, obj3);
    let obj4 = { outer: true, style: null };
    obj4[1] = tmp3.divider;
    items2[3] = callback(tmp4(tmp2[24]).FormDivider, obj4);
    let obj5 = { spacing: null, children: null };
    obj5[0] = tmp(tmp2[13]).space.PX_16;
    obj5[1] = items.map((label) => {
      ({ tier, IconComponent } = label);
      let obj = guildId(guild[19]);
      const incrementalStickerCountForTier = obj.getIncrementalStickerCountForTier(tier);
      obj1 = guildId(guild[19]);
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
        obj1[0] = closure_1_8[tier];
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
      items = [
        closure_1_12(guildId(guild[27]).TableRow, obj),
        Array.from({ length: incrementalStickerCountForTier }).map((arg0, arg1) => {
          closure_6 = tmp + 1;
          closure_0 = tmp2;
          if (null == table[+closure_6]) {
            return null;
          } else {
            const tmp8 = callback(tmp2);
            const user = tmp2.user;
            let obj = { icon: null, label: null, trailing: null, onPress: null };
            obj = { style: null, children: null };
            obj[0] = closure_1.stickerSlot;
            obj1 = { sticker: null, size: null, animated: true };
            obj1[0] = tmp2;
            obj1[1] = closure_1_1(closure_1_2[13]).space.PX_48;
            obj[1] = closure_1_12(closure_1_1(closure_1_2[29]), obj1);
            obj[0] = closure_1_12(closure_1_4, obj);
            const obj2 = { variant: "heading-sm/semibold", color: "text-strong", style: null, children: null };
            obj2[2] = closure_1.label;
            obj2[3] = tmp2.name;
            items = [closure_1_12(closure_1_0(closure_1_2[20]).Text, obj2)];
            let tmp16Result = null;
            if (null != user) {
              obj = { style: null, children: null };
              obj[0] = closure_1.userRow;
              const obj3 = { user: null, size: null, guildId: null };
              obj3[0] = user;
              obj3[1] = tmp10(tmp11[30]).AvatarSizes.XSMALL_20;
              obj3[2] = closure_0;
              const items1 = [tmp9(tmp10(tmp11[30]).Avatar, obj3)];
              const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
              obj4[2] = closure_1_1(tmp11[31]).getName(user);
              items1[1] = tmp9(tmp10(tmp11[20]).Text, obj4);
              obj[1] = items1;
              tmp16Result = tmp16(tmp12, obj);
              const tmp14Result = closure_1_1(tmp11[31]);
            }
            const obj5 = { children: null };
            items[1] = tmp16Result;
            obj5[0] = items;
            obj[1] = closure_1_13(closure_1_4, obj5);
            let tmp9Result;
            if (tmp8) {
              tmp9Result = tmp9(tmp10(tmp11[32]).TableRowArrow, {});
            }
            obj[2] = tmp9Result;
            let fn;
            if (tmp8) {
              fn = () => {
                let obj = closure_2_0(closure_2_2[33]);
                obj = { guildId: id, stickerId: id.id };
                const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj);
              };
            }
            obj[3] = fn;
            return closure_1_12(closure_1_0(closure_1_2[27]).TableRow, obj, arg1);
          }
        }),
      ];
      obj3[1] = items;
      return closure_1_13(guildId(guild[26]).TableRowGroup, obj3, tier);
    });
    items2[4] = callback(tmp4(tmp2[25]).Stack, obj5);
    obj[1] = items2;
    return closure_13(guildTier, obj);
  }
  tmp = importDefault;
});
let result = require("set").fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx",
);

export default memoResult;
