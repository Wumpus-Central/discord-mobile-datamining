// discord_app/modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { useGuildTagBadgeCollection } from "../../guild_tag/useGuildTagBadgeCollection.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { grid: { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 }, upsellCard: null, upsellPreview: null, upsellText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_16, padding: require("Themes").space.PX_16, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_4 };
const result = require("items").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  let noop;
  let dependencyMap;
  let importDefault;
  let lockedBadges;
  let unlockedBadges;
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: noop } = guildId);
  const tmp = createCacheKey();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollection());
  const items = [guildId];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[7])({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { spacing: null, children: null };
  obj[0] = Themes.space.PX_8;
  obj = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl = guildId(1236).intl;
  obj[3] = intl.string(guildId(1236).t.wRnfnY);
  const items1 = [callback(guildId(4340).Text, obj), , ];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      let closure_0 = badge;
      let obj = { size: noop, selected: badge.kind === closure_1, accessibilityLabel: null, onPress: null, children: null };
      obj[2] = outer1_1(outer1_2[12])(badge.kind);
      obj[3] = function onPress() {
        return outer1_2(badge.kind);
      };
      obj = { badge: badge.kind, width: outer1_6.SIZE_32, height: outer1_6.SIZE_32 };
      obj[4] = outer1_7(guildId(outer1_2[13]).GuildBadge, obj);
      return outer1_7(outer1_1(outer1_2[11]), obj, badge.kind);
    })
  };
  items1[1] = callback(closure_5, obj);
  let tmp6Result = lockedBadges.length > 0;
  if (tmp6Result) {
    const obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp7(1236).intl;
    obj1[1] = intl2.string(tmp7(1236).t.U5p3GZ);
    obj1[2] = callback;
    obj1[3] = tmp.upsellCard;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.upsellPreview;
    const substr = lockedBadges.slice(0, 10);
    obj2[1] = substr.map((badge) => callback(guildId(table[13]).GuildBadge, { badge: badge.kind, width: 21, height: 21 }, badge.kind));
    const items2 = [tmp8(closure_5, obj2), , ];
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    obj3[2] = tmp.upsellText;
    const intl3 = tmp7(1236).intl;
    obj3[3] = intl3.string(tmp7(1236).t.U5p3GZ);
    items2[1] = tmp8(tmp7(4340).Text, obj3);
    const obj4 = { size: "md", color: null };
    obj4[1] = Themes.colors.ICON_SUBTLE;
    items2[2] = tmp8(tmp7(5817).ChevronSmallRightIcon, obj4);
    obj1[4] = items2;
    tmp6Result = tmp6(closure_4, obj1);
  }
  items1[2] = tmp6Result;
  obj[1] = items1;
  return closure_8(guildId(4752).Stack, obj);
};