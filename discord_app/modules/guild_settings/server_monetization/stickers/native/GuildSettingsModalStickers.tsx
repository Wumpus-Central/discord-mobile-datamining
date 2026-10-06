// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import StickersConstants from "../../../../stickers/StickersConstants.tsx";
import BoostGemIcon from "../../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import LockIcon from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TableRow2 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import GuildBoostingUtils from "../../../../../utils/GuildBoostingUtils.tsx";
import BoostTier3Icon from "../../../../../design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx";
import BoostGemOutlineIcon from "../../../../../design/components/Icon/native/redesign/generated/BoostGemOutlineIcon.tsx";
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, title;

let BoostedGuildTiers;
let c3;
let closure_12;
let closure_4;
let intl;
let intl2;
let intl3;
let intl4;
let map1;
let metroImportAll;
({ ScrollView: c3, View: closure_4 } = react_native);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroImportAll, BoostedGuildTiers } = Constants);
const GuildFeatures = Constants.GuildFeatures;
const MAX_STICKER_FILE_SIZE = StickersConstants.MAX_STICKER_FILE_SIZE;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { tier: BoostedGuildTiers.NONE, title: intl.string(intl5.t.tfVXhP), IconComponent: "Array" };
intl = intl5.intl;
let items = [obj, , ,];
let obj2 = {
  tier: BoostedGuildTiers.TIER_1,
  title: intl2.string(intl5.t.nzXtaS),
  IconComponent: BoostGemOutlineIcon.BoostGemOutlineIcon,
};
intl2 = intl5.intl;
items[1] = obj2;
let obj3 = {
  tier: BoostedGuildTiers.TIER_2,
  title: intl3.string(intl5.t["h33/uW"]),
  IconComponent: BoostGemIcon.BoostGemIcon,
};
intl3 = intl5.intl;
items[2] = obj3;
let obj4 = {
  tier: BoostedGuildTiers.TIER_3,
  title: intl4.string(intl5.t.BfF6ED),
  IconComponent: BoostTier3Icon.BoostTier3Icon,
};
intl4 = intl5.intl;
items[3] = obj4;
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 },
    label: { marginBottom: nativeDefault.space.PX_8 },
    divider: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 },
    stickerSlot: size,
    userRow: { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" },
  };
  ({ padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 });
  size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.lg,
    width: nativeDefault.space.PX_64,
    height: nativeDefault.space.PX_64,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  };
  ({ gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" });
  return obj;
});
const memoResult = react.memo(function GuildSettingsModalStickers(guildId) {
  let c4;
  let canCreateExpressions;
  let closure_1;
  let format;
  let intl;
  let items2;
  let kpcMft;
  let obj6;
  let tmp4Result;
  guildId = guildId.guildId;
  importDefault = undefined;
  let guild;
  c4 = undefined;
  let stickers;
  let c6;
  const tmp2 = guild;
  let tmp = importDefault;
  const tmp3 = closure_15(require("useSafeAreaInsets")().bottom);
  importDefault = tmp3;
  let obj = guildId(guild[15]);
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
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
  let obj2 = guildId(guild[16]);
  const manageResourcePermissions = obj2.getManageResourcePermissions(guild, c6, UserStore);
  ({ canCreateExpressions, canManageGuildExpression: c4 } = manageResourcePermissions);
  const tmp7 = require("useLoadGuildStickerWithCreator")(guildId);
  if ("success" !== tmp7.status) {
    return closure_12(guildId(tmp2[18]).SceneLoadingIndicator, {});
  } else {
    let stringResult;
    stickers = tmp7.stickers;
    const arr5 = items;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp14;
    }
    c6 = 0;
    let obj3 = { contentContainerStyle: tmp3.container, children: items2 };
    let obj4 = { variant: "heading-md/semibold", style: tmp3.label, children: intl.string(guildId(tmp2[8]).t.yxVsBJ) };
    let Text = tmp4(tmp2[20]).Text;
    intl = tmp4(tmp2[8]).intl;
    items2 = [closure_12(Text, obj4), , , ,];
    let obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp3.label, children: format(kpcMft, obj6) };
    const Text2 = tmp4(tmp2[20]).Text;
    const intl2 = tmp4(tmp2[8]).intl;
    format = intl2.format;
    obj6 = { fileSize: tmp4Result.formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true }) };
    kpcMft = tmp4(tmp2[8]).t.kpcMft;
    tmp4Result = guildId(tmp2[21]);
    items2[1] = closure_12(Text2, obj5);
    const Button = tmp4(tmp2[22]).Button;
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    let t = tmp4(tmp2[8]).t;
    const tmp9 = guildTier;
    if (canCreateExpressions) {
      stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    let obj7 = {
      text: stringResult,
      onPress() {
        const obj = { guildId };
        showGuildSettingsStickerCreateModalDefault(obj);
      },
      disabled: !canCreateExpressions,
    };
    items2[2] = closure_12(Button, obj7);
    let obj8 = { outer: true, style: tmp3.divider };
    items2[3] = closure_12(guildId(tmp2[24]).FormDivider, obj8);
    const obj9 = {
      spacing: tmp(tmp2[13]).space.PX_16,
      children: arr5.map((title) => {
        let IconComponent;
        let formatResult;
        let tier;
        let tmp8Result2;
        ({ tier, IconComponent } = title);
        const tmp = guildTier < tier;
        title = title.title;
        let obj = GuildBoostingUtils;
        const incrementalStickerCountForTier = obj.getIncrementalStickerCountForTier(tier);
        let obj2 = GuildBoostingUtils;
        const availableStickerSlotCount = obj2.getAvailableStickerSlotCount(stickers, tier);
        const tmp6 = metroImportAll[tier];
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        let tmp8Result;
        let TableRow = TableRow2.TableRow;
        if (null != IconComponent) {
          let str = "premium-nitro-pink-text";
          if (tmp) {
            str = "icon-muted";
          }
          let obj3 = { color: str };
          tmp8Result = closure_12(IconComponent, obj3);
        }
        let obj4 = { icon: tmp8Result, label: title, subLabel: formatResult, trailing: tmp8Result2 };
        const intl = intl5.intl;
        const format = intl.format;
        const t = intl5.t;
        if (tmp) {
          let obj5 = { required: tmp6, decorator: "" };
          formatResult = format(t.t2Wbo1, obj5);
        } else {
          let obj6 = { numTotal: incrementalStickerCountForTier, numAvailable: availableStickerSlotCount };
          formatResult = format(t.ZLoNtm, obj6);
        }
        tmp8Result2 = undefined;
        if (tmp) {
          tmp8Result2 = closure_12(LockIcon.LockIcon, { color: "icon-muted" });
        }
        let obj7 = { hasIcons: true, children: items };
        items = [closure_12(TableRow, obj4)];
        const arr = Array.from({ length: incrementalStickerCountForTier });
        items[1] = arr.map((item, index) => {
          let fn;
          let id;
          let items1;
          let obj3;
          let obj4;
          let obj8;
          let tmp14Result;
          let tmp15;
          let tmp9Result;
          let closure_6 = tmp + 1;
          guildId = tmp2;
          if (null == closure_5[+closure_6]) {
            return null;
          } else {
            const tmp8 = closure_4(closure_5[+closure_6]);
            const user = tmp2.user;
            let obj2 = {
              icon: closure_1_12(closure_1_4, obj3),
              label: closure_1_13(closure_1_4, obj8),
              trailing: tmp9Result,
              onPress: fn,
            };
            obj3 = { style: closure_1.stickerSlot, children: closure_1_12(tmp15, obj4) };
            const TableRow = guildId(guild[27]).TableRow;
            obj4 = { sticker: closure_5[+closure_6], size: closure_1_1(guild[13]).space.PX_48, animated: true };
            const obj5 = {
              variant: "heading-sm/semibold",
              color: "text-strong",
              style: closure_1.label,
              children: closure_5[+closure_6].name,
            };
            tmp15 = closure_1_1(guild[29]);
            items = [closure_1_12(guildId(guild[20]).Text, obj5)];
            let tmp16Result = null;
            if (null != user) {
              let obj = { style: closure_1.userRow, children: items1 };
              const obj6 = { user, size: guildId(guild[30]).AvatarSizes.XSMALL_20, guildId };
              const Avatar = tmp10(guild[30]).Avatar;
              items1 = [closure_1_12(Avatar, obj6)];
              const obj7 = {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: tmp14Result.getName(guildId, undefined, user),
              };
              const Text = tmp10(guild[20]).Text;
              tmp14Result = closure_1_1(guild[31]);
              items1[1] = closure_1_12(Text, obj7);
              tmp16Result = closure_1_13(closure_1_4, obj);
            }
            obj8 = { children: items };
            items[1] = tmp16Result;
            tmp9Result = undefined;
            if (tmp8) {
              tmp9Result = closure_1_12(tmp10(guild[32]).TableRowArrow, {});
            }
            fn = undefined;
            if (tmp8) {
              fn = () => {
                const obj = guildId(guild[33]);
                const obj2 = { guildId, stickerId: id.id };
                const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj2);
              };
            }
            return closure_1_12(TableRow, obj2, index);
          }
        });
        return map1(TableRowGroup, obj7, tier);
      }),
    };
    const Stack = tmp4(tmp2[25]).Stack;
    items2[4] = closure_12(Stack, obj9);
    return closure_13(tmp9, obj3);
  }
});
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx",
);

export default memoResult;
