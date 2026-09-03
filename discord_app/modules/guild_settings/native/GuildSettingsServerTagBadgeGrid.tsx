// discord_app/modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useGuildTagBadgeCollectionDefault from "../../guild_tag/useGuildTagBadgeCollection.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { GuildTagBadgeSize } from "../../guild_tag/GuildTagConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  grid: { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 },
  upsellCard: null,
  upsellPreview: null,
  upsellText: null,
};
createCacheKey = {
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_16,
  padding: ThemesDefault.space.PX_16,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting(
  "modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx",
);

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: closure_3 } = guildId);
  const tmp = callback2();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
  const items = [guildId];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[7])({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { spacing: ThemesDefault.space.PX_8, children: null };
  obj = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl = guildId(1233).intl;
  obj[3] = intl.string(guildId(1233).t.wRnfnY);
  const items1 = [callback(guildId(4474).Text, obj), ,];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      closure_0 = badge;
      let obj = {
        size: closure_3,
        selected: badge.kind === closure_1,
        accessibilityLabel: closure_1_1(closure_1_2[12])(badge.kind),
        onPress() {
          return closure_1_2(badge.kind);
        },
        children: null,
      };
      obj = { badge: badge.kind, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32 };
      obj[4] = closure_1_7(guildId(closure_1_2[13]).GuildBadge, obj);
      return closure_1_7(closure_1_1(closure_1_2[11]), obj, badge.kind);
    }),
  };
  items1[1] = callback(closure_5, obj);
  let tmp6Result = lockedBadges.length > 0;
  if (tmp6Result) {
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp7(1233).intl;
    obj1[1] = intl2.string(tmp7(1233).t.U5p3GZ);
    obj1[2] = callback;
    obj1[3] = tmp.upsellCard;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.upsellPreview;
    const substr = lockedBadges.slice(0, 10);
    obj2[1] = substr.map((badge) =>
      callback(guildId(table[13]).GuildBadge, { badge: badge.kind, width: 21, height: 21 }, badge.kind),
    );
    const items2 = [tmp8(closure_5, obj2), ,];
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    obj3[2] = tmp.upsellText;
    const intl3 = tmp7(1233).intl;
    obj3[3] = intl3.string(tmp7(1233).t.U5p3GZ);
    items2[1] = tmp8(tmp7(4474).Text, obj3);
    const obj4 = { size: "md", color: null };
    obj4[1] = ThemesDefault.colors.ICON_SUBTLE;
    items2[2] = tmp8(tmp7(6012).ChevronSmallRightIcon, obj4);
    obj1[4] = items2;
    tmp6Result = tmp6(closure_4, obj1);
  }
  items1[2] = tmp6Result;
  obj[1] = items1;
  return closure_8(guildId(4927).Stack, obj);
}
