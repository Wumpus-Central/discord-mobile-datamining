// discord_app/modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openGuildPowerupsModalDefault from "../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import useGuildTagBadgeCollectionDefault from "../../guild_tag/useGuildTagBadgeCollection.tsx";
import GuildSettingsServerTagPickerCellDefault from "GuildSettingsServerTagPickerCell.tsx";
import getGuildTagBadgeLabelDefault from "../../guild_tag/utils/getGuildTagBadgeLabel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  grid: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 },
  upsellCard: null,
  upsellPreview: null,
  upsellText: null,
};
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.upsellCard = createStyles;
createStyles.upsellPreview = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles.upsellText = { flex: 1 };
let closure_9 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: noop } = guildId);
  const tmp = closure_9();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
  const items = [guildId];
  const callback = noop.useCallback(() => {
    openGuildPowerupsModalDefault({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { spacing: nativeDefault.space.PX_8, children: null };
  obj = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl = guildId(1114).intl;
  obj.children = intl.string(guildId(1114).t.wRnfnY);
  const items1 = [closure_7(guildId(4556).Text, obj), ,];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      const obj = {
        size,
        selected: badge.kind === closure_1,
        accessibilityLabel: getGuildTagBadgeLabelDefault(badge.kind),
        onPress() {
          return dependencyMap(badge.kind);
        },
        children: null,
      };
      size = { badge: badge.kind, width: GuildTagBadgeSize.SIZE_32, height: GuildTagBadgeSize.SIZE_32 };
      obj.children = closure_1_7(guildId(13915).GuildBadge, size);
      return closure_1_7(GuildSettingsServerTagPickerCellDefault, obj, badge.kind);
    }),
  };
  items1[1] = closure_7(closure_5, obj);
  let tmp6Result = lockedBadges.length > 0;
  if (tmp6Result) {
    const obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp7(1114).intl;
    obj1.accessibilityLabel = intl2.string(tmp7(1114).t.U5p3GZ);
    obj1.onPress = callback;
    obj1.style = tmp.upsellCard;
    const obj2 = { style: tmp.upsellPreview, children: null };
    const substr = lockedBadges.slice(0, 10);
    obj2.children = substr.map((badge) => {
      size = { badge: badge.kind, width: 21, height: 21 };
      return closure_1_7(guildId(13915).GuildBadge, size, badge.kind);
    });
    const items2 = [tmp8(closure_5, obj2), ,];
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.upsellText, children: null };
    const intl3 = tmp7(1114).intl;
    obj3.children = intl3.string(tmp7(1114).t.U5p3GZ);
    items2[1] = tmp8(tmp7(4556).Text, obj3);
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_SUBTLE };
    items2[2] = tmp8(tmp7(7209).ChevronSmallRightIcon, obj4);
    obj1.children = items2;
    tmp6Result = tmp6(closure_4, obj1);
  }
  items1[2] = tmp6Result;
  obj.children = items1;
  return closure_8(guildId(4973).Stack, obj);
}
