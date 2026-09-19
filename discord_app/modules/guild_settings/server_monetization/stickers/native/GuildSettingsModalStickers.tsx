// === Module 17997: GuildSettingsModalStickers ===

// Module 17997 (GuildSettingsModalStickers)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4649 */;
import LockIcon from "LockIcon" /* 5306 */;
import TableRow from "TableRow" /* 5817 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal" /* 18001 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_8, BoostedGuildTiers } = Constants);
const GuildFeatures = Constants.GuildFeatures;
const MAX_STICKER_FILE_SIZE = fn(2022).MAX_STICKER_FILE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE, title: null, IconComponent: "Array" };
let intl = fn(1115).intl;
obj.title = intl.string(fn(1115).t.tfVXhP);
let items = [obj, , , ];
let obj2 = { tier: BoostedGuildTiers.TIER_1, title: null, IconComponent: null };
let intl2 = fn(1115).intl;
obj2.title = intl2.string(fn(1115).t.nzXtaS);
obj2.IconComponent = fn(17998).BoostGemOutlineIcon;
items[1] = obj2;
let obj3 = { tier: BoostedGuildTiers.TIER_2, title: null, IconComponent: null };
let intl3 = fn(1115).intl;
obj3.title = intl3.string(fn(1115).t["h33/uW"]);
obj3.IconComponent = fn(9488).BoostGemIcon;
items[2] = obj3;
let obj4 = { tier: BoostedGuildTiers.TIER_3, title: null, IconComponent: null };
const intl4 = fn(1115).intl;
obj4.title = intl4.string(fn(1115).t.BfF6ED);
obj4.IconComponent = fn(13783).BoostTier3Icon;
items[3] = obj4;
const createStyles = fn(4756);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 }, label: null, divider: null, stickerSlot: null, userRow: null };
  const obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.label = { marginBottom: nativeDefault.space.PX_8 };
  const obj3 = { marginBottom: nativeDefault.space.PX_8 };
  obj.divider = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
  const size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  obj.stickerSlot = size;
  const obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
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
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = guildId(guild[15]).useStateFromStoresObject(items, () => {
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
  let obj = guildId(guild[15]);
  const tmp = importDefault;
  const manageResourcePermissions = guildId(guild[16]).getManageResourcePermissions(guild, c6, UserStore);
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
    let obj3 = { contentContainerStyle: tmp3.container, children: null };
    let obj4 = { variant: "heading-md/semibold", style: tmp3.label, children: null };
    let intl = tmp4(tmp2[8]).intl;
    obj4.children = intl.string(tmp4(tmp2[8]).t.yxVsBJ);
    const items2 = [closure_12(tmp4(tmp2[20]).Text, obj4), , , , ];
    let obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp3.label, children: null };
    const intl2 = tmp4(tmp2[8]).intl;
    let obj6 = { fileSize: tmp4(tmp2[21]).formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true }) };
    obj5.children = intl2.format(tmp4(tmp2[8]).t.kpcMft, obj6);
    items2[1] = closure_12(tmp4(tmp2[20]).Text, obj5);
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    let t = tmp4(tmp2[8]).t;
    if (canCreateExpressions) {
      let stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    let obj7 = {
      text: stringResult,
      onPress() {
          showGuildSettingsStickerCreateModalDefault({ guildId });
        },
      disabled: !canCreateExpressions
    };
    items2[2] = closure_12(tmp4(tmp2[22]).Button, obj7);
    let obj8 = { outer: true, style: tmp3.divider };
    items2[3] = closure_12(tmp4(tmp2[24]).FormDivider, obj8);
    const obj9 = {
      spacing: tmp(tmp2[13]).space.PX_16,
      children: items.map((label) => {
          ({ tier, IconComponent } = label);
          const incrementalStickerCountForTier = GuildBoostingUtils.getIncrementalStickerCountForTier(tier);
          const availableStickerSlotCount = GuildBoostingUtils.getAvailableStickerSlotCount(stickers, tier);
          let tmp7Result;
          if (null != IconComponent) {
            let str = "premium-nitro-pink-text";
            if (tmp) {
              str = "icon-muted";
            }
            let obj3 = { color: str };
            tmp7Result = closure_2_12(IconComponent, obj3);
          }
          let obj4 = { icon: tmp7Result, label: label.title, subLabel: null, trailing: null };
          const intl = util.intl;
          const format = intl.format;
          const t = util.t;
          if (guildTier < tier) {
            let obj5 = { required: React6[tier], decorator: "" };
            let formatResult = format(t.t2Wbo1, obj5);
          } else {
            let obj6 = { numTotal: incrementalStickerCountForTier, numAvailable: availableStickerSlotCount };
            formatResult = format(t.ZLoNtm, obj6);
          }
          obj4.subLabel = formatResult;
          let tmp7Result2;
          if (guildTier < tier) {
            tmp7Result2 = closure_2_12(LockIcon.LockIcon, { color: "icon-muted" });
          }
          let obj7 = { hasIcons: true, children: null };
          obj4.trailing = tmp7Result2;
          items = [closure_2_12(TableRow.TableRow, obj4), ];
          items[1] = Array.from({ length: incrementalStickerCountForTier }).map((item, index) => {
            closure_6 = tmp + 1;
            guildId = tmp2;
            if (null == closure_5[+closure_6]) {
              return null;
            } else {
              const tmp8 = closure_4(tmp2);
              const user = tmp2.user;
              const obj2 = { icon: null, label: null, trailing: null, onPress: null };
              const obj3 = { style: closure_1.stickerSlot, children: null };
              const obj4 = { sticker: tmp2, size: closure_1_1(576).space.PX_48, animated: true };
              obj3.children = closure_1_12(closure_1_1(10432), obj4);
              obj2.icon = closure_1_12(closure_1_4, obj3);
              const obj5 = { variant: "heading-sm/semibold", color: "text-strong", style: closure_1.label, children: tmp2.name };
              items = [closure_1_12(guildId(4752).Text, obj5), ];
              let tmp16Result = null;
              if (null != user) {
                const obj = { style: closure_1.userRow, children: null };
                const obj6 = { user, size: tmp10(1177).AvatarSizes.XSMALL_20, guildId };
                const items1 = [closure_1_12(tmp10(1177).Avatar, obj6), ];
                const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: closure_1_1(4908).getName(guildId, undefined, user) };
                items1[1] = closure_1_12(tmp10(4752).Text, obj7);
                obj.children = items1;
                tmp16Result = closure_1_13(closure_1_4, obj);
                const tmp14Result = closure_1_1(4908);
              }
              const obj8 = { children: null };
              items[1] = tmp16Result;
              obj8.children = items;
              obj2.label = closure_1_13(closure_1_4, obj8);
              let tmp9Result;
              if (tmp8) {
                tmp9Result = closure_1_12(tmp10(5824).TableRowArrow, {});
              }
              obj2.trailing = tmp9Result;
              let fn;
              if (tmp8) {
                fn = () => {
                  const result = guildId(guild[33]).showGuildSettingsModalStickerInfoActionSheet({ guildId, stickerId: id.id });
                };
              }
              obj2.onPress = fn;
              return closure_1_12(guildId(5817).TableRow, obj2, index);
            }
          });
          obj7.children = items;
          return map1(TableRowGroup.TableRowGroup, obj7, tier);
        })
    };
    items2[4] = closure_12(tmp4(tmp2[25]).Stack, obj9);
    obj3.children = items2;
    return closure_13(guildTier, obj3);
  }
  let obj2 = guildId(guild[16]);
});