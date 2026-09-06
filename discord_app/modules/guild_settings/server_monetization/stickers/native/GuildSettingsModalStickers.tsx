// === Module 17573: GuildSettingsModalStickers ===

// Module 17573 (GuildSettingsModalStickers)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4454 */;
import LockIcon from "LockIcon" /* 5095 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal" /* 17577 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_8, BoostedGuildTiers } = Constants);
const GuildFeatures = Constants.GuildFeatures;
const MAX_STICKER_FILE_SIZE = fn(1938).MAX_STICKER_FILE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE, title: null, IconComponent: "Array" };
let intl = fn(1114).intl;
obj.title = intl.string(fn(1114).t.tfVXhP);
let items = [obj, , , ];
obj = { tier: BoostedGuildTiers.TIER_1, title: null, IconComponent: null };
let intl2 = fn(1114).intl;
obj.title = intl2.string(fn(1114).t.nzXtaS);
obj.IconComponent = fn(17574).BoostGemOutlineIcon;
items[1] = obj;
let obj1 = { tier: BoostedGuildTiers.TIER_2, title: null, IconComponent: null };
let intl3 = fn(1114).intl;
obj1.title = intl3.string(fn(1114).t["h33/uW"]);
obj1.IconComponent = fn(9375).BoostGemIcon;
items[2] = obj1;
let obj2 = { tier: BoostedGuildTiers.TIER_3, title: null, IconComponent: null };
const intl4 = fn(1114).intl;
obj2.title = intl4.string(fn(1114).t.BfF6ED);
obj2.IconComponent = fn(13525).BoostTier3Icon;
items[3] = obj2;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles((arg0) => {
  let obj = { container: null, label: null, divider: null, stickerSlot: null, userRow: null };
  obj = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.container = obj;
  obj = { marginBottom: nativeDefault.space.PX_8 };
  obj.label = obj;
  obj.divider = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
  const size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  obj.stickerSlot = size;
  const obj1 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
  obj.userRow = { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx");

export default noop.memo(function GuildSettingsModalStickers(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let guild;
  c4 = undefined;
  let stickers;
  c6 = undefined;
  const tmp3 = closure_15(require("useSafeAreaInsets")().bottom);
  importDefault = tmp3;
  let obj = guildId(guild[15]);
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.MORE_STICKERS);
    }
    if (true !== hasItem) {
      let premiumTier;
      if (guild != null) {
        premiumTier = guild.premiumTier;
      }
      if (premiumTier == null) {
        premiumTier = BoostedGuildTiers.NONE;
      }
      guildTier = premiumTier;
    } else {
      guildTier = BoostedGuildTiers.TIER_3;
    }
    return { guild, guildTier };
  }, items1);
  guild = stateFromStoresObject.guild;
  let guildTier = stateFromStoresObject.guildTier;
  let obj1 = guildId(guild[16]);
  const manageResourcePermissions = obj1.getManageResourcePermissions(guild, c6, UserStore);
  ({ canCreateExpressions, canManageGuildExpression: c4 } = manageResourcePermissions);
  const tmp7 = require("useLoadGuildStickerWithCreator")(guildId);
  if ("success" !== tmp7.status) {
    return closure_12(tmp4(tmp2[18]).SceneLoadingIndicator, {});
  } else {
    stickers = tmp7.stickers;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp14;
    }
    c6 = 0;
    obj = { contentContainerStyle: tmp3.container, children: null };
    obj = { variant: "heading-md/semibold", style: tmp3.label, children: null };
    let intl = tmp4(tmp2[8]).intl;
    obj.children = intl.string(tmp4(tmp2[8]).t.yxVsBJ);
    const items2 = [closure_12(tmp4(tmp2[20]).Text, obj), , , , ];
    obj1 = { variant: "text-sm/medium", color: "text-muted", style: tmp3.label, children: null };
    const intl2 = tmp4(tmp2[8]).intl;
    let obj2 = { fileSize: tmp4(tmp2[21]).formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true }) };
    obj1.children = intl2.format(tmp4(tmp2[8]).t.kpcMft, obj2);
    items2[1] = closure_12(tmp4(tmp2[20]).Text, obj1);
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    let t = tmp4(tmp2[8]).t;
    if (canCreateExpressions) {
      let stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    let obj3 = {
      text: stringResult,
      onPress() {
          showGuildSettingsStickerCreateModalDefault({ guildId });
        },
      disabled: !canCreateExpressions
    };
    items2[2] = closure_12(tmp4(tmp2[22]).Button, obj3);
    let obj4 = { outer: true, style: tmp3.divider };
    items2[3] = closure_12(tmp4(tmp2[24]).FormDivider, obj4);
    let obj5 = {
      spacing: tmp(tmp2[13]).space.PX_16,
      children: items.map((label) => {
          ({ tier, IconComponent } = label);
          let obj = GuildBoostingUtils;
          const incrementalStickerCountForTier = obj.getIncrementalStickerCountForTier(tier);
          let obj1 = GuildBoostingUtils;
          const availableStickerSlotCount = obj1.getAvailableStickerSlotCount(stickers, tier);
          let tmp7Result;
          if (null != IconComponent) {
            let str = "premium-nitro-pink-text";
            if (tmp) {
              str = "icon-muted";
            }
            obj = { color: str };
            tmp7Result = closure_2_12(IconComponent, obj);
          }
          obj = { icon: tmp7Result, label: label.title, subLabel: null, trailing: null };
          const intl = util.intl;
          const format = intl.format;
          const t = util.t;
          if (guildTier < tier) {
            obj1 = { required: React6[tier], decorator: "" };
            let formatResult = format(t.t2Wbo1, obj1);
          } else {
            let obj2 = { numTotal: incrementalStickerCountForTier, numAvailable: availableStickerSlotCount };
            formatResult = format(t.ZLoNtm, obj2);
          }
          obj.subLabel = formatResult;
          tmp7Result = undefined;
          if (guildTier < tier) {
            tmp7Result = closure_2_12(LockIcon.LockIcon, { color: "icon-muted" });
          }
          let obj3 = { hasIcons: true, children: null };
          obj.trailing = tmp7Result;
          items = [
            closure_2_12(TableRow.TableRow, obj),
            Array.from({ length: incrementalStickerCountForTier }).map((item, index) => {
              closure_6 = tmp + 1;
              guildId = tmp2;
              if (null == closure_5[+closure_6]) {
                return null;
              } else {
                const tmp8 = closure_4(tmp2);
                const user = tmp2.user;
                let obj = { icon: null, label: null, trailing: null, onPress: null };
                obj = { style: closure_1.stickerSlot, children: null };
                const obj1 = { sticker: tmp2, size: closure_1_1(576).space.PX_48, animated: true };
                obj.children = closure_1_12(closure_1_1(10176), obj1);
                obj.icon = closure_1_12(closure_1_4, obj);
                const obj2 = { variant: "heading-sm/semibold", color: "text-strong", style: closure_1.label, children: tmp2.name };
                items = [closure_1_12(guildId(4556).Text, obj2), ];
                let tmp16Result = null;
                if (null != user) {
                  obj = { style: closure_1.userRow, children: null };
                  const obj3 = { user, size: tmp10(1178).AvatarSizes.XSMALL_20, guildId };
                  const items1 = [closure_1_12(tmp10(1178).Avatar, obj3), ];
                  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: closure_1_1(4404).getName(user) };
                  items1[1] = closure_1_12(tmp10(4556).Text, obj4);
                  obj.children = items1;
                  tmp16Result = closure_1_13(closure_1_4, obj);
                  const tmp14Result = closure_1_1(4404);
                }
                const obj5 = { children: null };
                items[1] = tmp16Result;
                obj5.children = items;
                obj.label = closure_1_13(closure_1_4, obj5);
                let tmp9Result;
                if (tmp8) {
                  tmp9Result = closure_1_12(tmp10(5612).TableRowArrow, {});
                }
                obj.trailing = tmp9Result;
                let fn;
                if (tmp8) {
                  fn = () => {
                    guildId(guild[33]);
                    const obj = { guildId, stickerId: id.id };
                    const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj);
                  };
                }
                obj.onPress = fn;
                return closure_1_12(guildId(5605).TableRow, obj, index);
              }
            })
          ];
          obj3.children = items;
          return map1(TableRowGroup.TableRowGroup, obj3, tier);
        })
    };
    items2[4] = closure_12(tmp4(tmp2[25]).Stack, obj5);
    obj.children = items2;
    return closure_13(guildTier, obj);
  }
  tmp = importDefault;
});