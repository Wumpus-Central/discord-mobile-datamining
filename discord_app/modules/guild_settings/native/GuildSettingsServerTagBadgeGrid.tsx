// discord_app/modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openGuildPowerupsModalDefault from "../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import useGuildTagBadgeCollectionDefault from "../../guild_tag/useGuildTagBadgeCollection.tsx";
import GuildSettingsServerTagPickerCellDefault from "GuildSettingsServerTagPickerCell.tsx";
import getGuildTagBadgeLabelDefault from "../../guild_tag/utils/getGuildTagBadgeLabel.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { GuildTagBadgeSize } from "../../guild_tag/GuildTagConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16, padding: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: closure_3 } = guildId);
  const tmp = callback2();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
  const items = [guildId];
  const callback = React.useCallback(() => {
    openGuildPowerupsModalDefault({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl = guildId(1236).intl;
  obj[3] = intl.string(guildId(1236).t.wRnfnY);
  const items1 = [callback(guildId(4734).Text, obj), , ];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((item, index) => {
      closure_0 = item;
      {
        size: closure_3,
        selected: item.kind === closure_1,
        accessibilityLabel: getGuildTagBadgeLabelDefault(item.kind),
        onPress() {
          return closure_1_2(item.kind);
        },
        children: null
      };
      const obj = { badge: item.kind, width: GuildTagBadgeSize.SIZE_32, height: GuildTagBadgeSize.SIZE_32 };
      obj[4] = closure_1_7(guildId(dependencyMap[13]).GuildBadge, obj);
      return closure_1_7(GuildSettingsServerTagPickerCellDefault, obj, item.kind);
    })
  };
  items1[1] = callback(closure_5, obj);
  let tmp6Result = lockedBadges.length > 0;
  if (tmp6Result) {
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp7(1236).intl;
    obj1[1] = intl2.string(tmp7(1236).t.U5p3GZ);
    obj1[2] = callback;
    obj1[3] = tmp.upsellCard;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.upsellPreview;
    const substr = lockedBadges.slice(0, 10);
    obj2[1] = substr.map((item, index) => callback(guildId(table[13]).GuildBadge, { badge: item.kind, width: 21, height: 21 }, item.kind));
    const items2 = [tmp8(closure_5, obj2), , ];
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    obj3[2] = tmp.upsellText;
    const intl3 = tmp7(1236).intl;
    obj3[3] = intl3.string(tmp7(1236).t.U5p3GZ);
    items2[1] = tmp8(tmp7(4734).Text, obj3);
    const obj4 = { size: "md", color: null };
    obj4[1] = ThemesDefault.colors.ICON_SUBTLE;
    items2[2] = tmp8(tmp7(6685).ChevronSmallRightIcon, obj4);
    obj1[4] = items2;
    tmp6Result = callback(closure_4, obj1);
  }
  items1[2] = tmp6Result;
  obj[1] = items1;
  return callback(guildId(4733).Stack, obj);
};