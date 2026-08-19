// discord_app/modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import extractColorStringsFromServerColors from "../../enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useHasEnhancedRoleColors from "../hooks/useHasEnhancedRoleColors.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import setOptionsDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import processColorStrings from "../../enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import obj132Default from "../../../../../discord_assets/assets/premium/wumpus-avatar.png.js";
import title from "../../../guild_settings/roles/GuildSettingsRoleConstants.tsx";
import handleSetSection from "../../../guild_settings/roles/GuildSettingsRolesStore.tsx";
import HOLOGRAPHIC_ROLE_COLORS2 from "../constants/EnhancedRoleColorConstants.tsx";
import useGuildSettingsRoleExampleMessage from "../../../guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

({ Pressable: c3, View: c4 } = get_ActivityIndicator);
const RoleColorsStyle = handleSetSection.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = HOLOGRAPHIC_ROLE_COLORS2.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = title.STYLE_CONFIGS;
const ThemeTypes = sum.ThemeTypes;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { marginHorizontal: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_32 };
  obj[0] = obj;
  obj = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj[3] = { width: 400, flex: 1, marginStart: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  obj[4] = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: ThemesDefault.space.PX_8 };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  obj[5] = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm };
  obj[6] = { textAlign: "center" };
  obj[7] = { borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
  obj[8] = { opacity: 0.5 };
  return obj;
});
let result = obj132.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  ({ guildId, role } = arg0);
  const tmp3 = callback2(useThemeDefault());
  dependencyMap = tmp3;
  let obj = useHasEnhancedRoleColors;
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  obj1 = useGuildSettingsRoleExampleMessage;
  let intl = getSystemLocale.intl;
  closure_4 = obj1.useGuildSettingsRoleExampleMessage(intl.string(getSystemLocale.t.Mi9Kbe));
  closure_5 = new setOptionsDefault();
  obj = { title: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["9wVJRB"]);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  const tmp6 = new setOptionsDefault();
  let items = [
    callback(closure_4, {
      style: tmp3.stylesContainer,
      children: STYLE_CONFIGS.map((item, index) => {
        closure_0 = item;
        let tmp = !hasEnhancedRoleColorsForRole;
        if (!hasEnhancedRoleColorsForRole) {
          tmp = item.id !== constants.SOLID;
        }
        const items = [button.button, , ];
        let selected = closure_0 === item.id;
        if (selected) {
          selected = button.selected;
        }
        items[1] = selected;
        let disabled = tmp;
        if (tmp) {
          disabled = button.disabled;
        }
        items[2] = disabled;
        let obj = {
          style: button.message,
          pointerEvents: "none",
          message: closure_4,
          rowGenerator: constants,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = extractColorStringsFromServerColors.extractColorStringsFromServerColors(item.colors);
            message.message.roleColors = processColorStrings.processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = obj132Default;
          }
        };
        const items1 = [closure_1_9(importDefault(button[16]), obj), ];
        obj = { style: button.text, variant: "text-sm/normal", children: null };
        const intl = require(button[11]).intl;
        obj[2] = intl.string(item.labelString);
        items1[1] = closure_1_9(require(button[20]).Text, obj);
        obj[3] = items1;
        return closure_1_10(hasEnhancedRoleColorsForRole, obj, item.id);
      })
    }),

  ];
  let tmp8Result = !hasEnhancedRoleColorsForRole;
  if (!hasEnhancedRoleColorsForRole) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp3.upsellContainer;
    const obj4 = { style: null, variant: "text-sm/semibold", children: null };
    obj4[0] = tmp3.upsellText;
    const intl3 = getSystemLocale.intl;
    const obj5 = { magical: null };
    const obj6 = { gradientColors: null, variant: "text-sm/semibold", children: null };
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6[0] = items1;
    const intl4 = getSystemLocale.intl;
    obj6[2] = intl4.string(messagesProxyDefault["+/IHLl"]);
    obj5[0] = callback(Text.Text, obj6);
    obj4[2] = intl3.format(messagesProxyDefault.VpEDJc, obj5);
    const items2 = [callback(Text.Text, obj4), ];
    const obj7 = { style: null, variant: "text-sm/normal", children: null };
    obj7[0] = tmp3.upsellText;
    const intl5 = getSystemLocale.intl;
    obj7[2] = intl5.string(messagesProxyDefault.FJZeZF);
    items2[1] = callback(Text.Text, obj7);
    obj3[1] = items2;
    tmp8Result = callback(tmp9, obj3);
  }
  items[1] = tmp8Result;
  obj1[1] = items;
  obj[1] = callback(closure_4, obj1);
  return callback(Background.BottomSheet, obj);
};