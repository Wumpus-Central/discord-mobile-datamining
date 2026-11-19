// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GuildBoostingUtils2 from "../../../../../utils/GuildBoostingUtils.tsx";
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal.tsx";
import showGuildSettingsModalStickerInfoActionSheet from "showGuildSettingsModalStickerInfoActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1072);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
const GuildFeatures = Constants.GuildFeatures;
const MAX_STICKER_FILE_SIZE = fn(4620).MAX_STICKER_FILE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE, title: null, numSlots: null };
let intl = fn(1113).intl;
obj.title = intl.string(fn(1113).t.tfVXhP);
let GuildBoostingUtils = fn(8624);
obj.numSlots = GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.NONE);
let items = [obj, , ,];
let obj2 = { tier: BoostedGuildTiers.TIER_1, title: null, IconComponent: null, numSlots: null };
let intl2 = fn(1113).intl;
obj2.title = intl2.string(fn(1113).t.nzXtaS);
obj2.IconComponent = fn(19841).BoostGemOutlineIcon;
GuildBoostingUtils = fn(8624);
obj2.numSlots = GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_1);
items[1] = obj2;
let obj4 = { tier: BoostedGuildTiers.TIER_2, title: null, IconComponent: null, numSlots: null };
let intl3 = fn(1113).intl;
obj4.title = intl3.string(fn(1113).t["h33/uW"]);
obj4.IconComponent = fn(9250).BoostGemIcon;
GuildBoostingUtils = fn(8624);
obj4.numSlots = GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_2);
items[2] = obj4;
let obj6 = { tier: BoostedGuildTiers.TIER_3, title: null, IconComponent: null, numSlots: null };
const intl4 = fn(1113).intl;
obj6.title = intl4.string(fn(1113).t.BfF6ED);
obj6.IconComponent = fn(14042).BoostTier3Icon;
GuildBoostingUtils = fn(8624);
obj6.numSlots = GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_3);
items[3] = obj6;
const createStyles = fn(4792);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 },
    label: null,
    divider: null,
    stickerSlot: null,
    userRow: null,
  };
  const obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.label = { marginBottom: nativeDefault.space.PX_8 };
  const obj3 = { marginBottom: nativeDefault.space.PX_8 };
  obj.divider = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.lg,
    width: nativeDefault.space.PX_64,
    height: nativeDefault.space.PX_64,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  };
  obj.stickerSlot = size;
  const obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
  obj.userRow = { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx",
);

export default noop.memo(function GuildSettingsModalStickers(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  guild = undefined;
  c4 = undefined;
  let stickers;
  const tmp3 = closure_14(require("useSafeAreaInsets")().bottom);
  importDefault = tmp3;
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = guildId(guild[16]).useStateFromStoresObject(
    items,
    () => {
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
    },
    items1,
  );
  guild = stateFromStoresObject.guild;
  let guildTier = stateFromStoresObject.guildTier;
  let obj = guildId(guild[16]);
  const tmp = importDefault;
  const manageResourcePermissions = guildId(guild[17]).getManageResourcePermissions(guild, PermissionStore, UserStore);
  ({ canCreateExpressions, canManageGuildExpression: c4 } = manageResourcePermissions);
  const tmp7 = require("useLoadGuildStickerWithCreator")(guildId);
  if ("success" !== tmp7.status) {
    return closure_11(tmp4(tmp2[19]).SceneLoadingIndicator, {});
  } else {
    stickers = tmp7.stickers;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp15;
    }
    let obj3 = { contentContainerStyle: tmp3.container, children: null };
    let obj4 = { variant: "heading-sm/semibold", style: tmp3.label, children: null };
    let intl = tmp4(tmp2[8]).intl;
    obj4.children = intl.string(tmp4(tmp2[8]).t.yxVsBJ);
    const items2 = [closure_11(tmp4(tmp2[20]).Text, obj4), , , ,];
    let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.label, children: null };
    const intl2 = tmp4(tmp2[8]).intl;
    let obj6 = { fileSize: tmp4(tmp2[21]).formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true }) };
    obj5.children = intl2.format(tmp4(tmp2[8]).t.kpcMft, obj6);
    items2[1] = closure_11(tmp4(tmp2[20]).Text, obj5);
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    const t = tmp4(tmp2[8]).t;
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
      disabled: !canCreateExpressions,
    };
    items2[2] = closure_11(tmp4(tmp2[22]).Button, obj7);
    let obj8 = { outer: true, style: tmp3.divider };
    items2[3] = closure_11(tmp4(tmp2[24]).FormDivider, obj8);
    const obj9 = {
      tiers: items,
      guildTier,
      hasIcons: false,
      renderUnlockedSubLabel(arg0) {
        ({ tier, numSlots } = arg0);
        const intl = util.intl;
        const obj = {
          numTotal: numSlots,
          numAvailable: GuildBoostingUtils2.getAvailableStickerSlotCount(stickers, tier),
        };
        return intl.format(util.t.ZLoNtm, obj);
      },
      renderSlot(arg0, arg1) {
        guildId = tmp;
        if (null == stickers[arg1]) {
          return null;
        } else {
          const tmp6 = _undefined(tmp);
          const user = tmp.user;
          const obj2 = { icon: null, label: null, trailing: null, onPress: null };
          const obj3 = { style: closure_1.stickerSlot, children: null };
          const obj4 = { sticker: tmp, size: closure_1(guild[14]).space.PX_48, animated: true };
          obj3.children = closure_1_11(closure_1(guild[27]), obj4);
          obj2.icon = closure_1_11(_undefined, obj3);
          const obj5 = {
            variant: "heading-xs/semibold",
            color: "text-strong",
            style: closure_1.label,
            children: tmp.name,
          };
          items = [closure_1_11(guildId(guild[20]).Text, obj5)];
          let tmp14Result = null;
          if (null != user) {
            const obj = { style: closure_1.userRow, children: null };
            const obj6 = { user, size: tmp8(guild[28]).AvatarSizes.XSMALL_20, guildId };
            const items1 = [closure_1_11(tmp8(guild[28]).Avatar, obj6)];
            const obj7 = {
              variant: "body-sm/medium",
              color: "text-subtle",
              children: closure_1(guild[29]).getName(guildId, undefined, user),
            };
            items1[1] = closure_1_11(tmp8(guild[20]).Text, obj7);
            obj.children = items1;
            tmp14Result = closure_1_12(_undefined, obj);
            const tmp12Result = closure_1(guild[29]);
          }
          const obj8 = { children: null };
          items[1] = tmp14Result;
          obj8.children = items;
          obj2.label = closure_1_12(_undefined, obj8);
          let tmp7Result;
          if (tmp6) {
            tmp7Result = closure_1_11(tmp8(guild[30]).TableRowArrow, {});
          }
          obj2.trailing = tmp7Result;
          let fn;
          if (tmp6) {
            fn = () => {
              const result = showGuildSettingsModalStickerInfoActionSheet.showGuildSettingsModalStickerInfoActionSheet({
                guildId,
                stickerId: id.id,
              });
            };
          }
          obj2.onPress = fn;
          return closure_1_11(guildId(guild[26]).TableRow, obj2, tmp.id);
        }
      },
    };
    items2[4] = closure_11(tmp(tmp2[25]), obj9);
    obj3.children = items2;
    return closure_12(guildTier, obj3);
  }
  let obj2 = guildId(guild[17]);
});
