// === Module 16849: EnhancedRoleColorsSelectStyleModal ===

// Module 16849 (EnhancedRoleColorsSelectStyleModal)
import obj132 from "obj132" /* 2 */;
import sum from "sum" /* 505 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import extractColorStringsFromServerColors from "extractColorStringsFromServerColors" /* 1986 */;
import messagesProxyDefault from "messagesProxy" /* 2367 */;
import useThemeDefault from "useTheme" /* 4310 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 6814 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import setOptionsDefault from "setOptions" /* 8157 */;
import processColorStrings from "processColorStrings" /* 8186 */;
import obj132Default from "obj132" /* 12733 */;
import title from "title" /* 16830 */;
import handleSetSection from "handleSetSection" /* 16831 */;
import HOLOGRAPHIC_ROLE_COLORS2 from "HOLOGRAPHIC_ROLE_COLORS" /* 16833 */;
import useGuildSettingsRoleExampleMessage from "useGuildSettingsRoleExampleMessage" /* 16850 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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