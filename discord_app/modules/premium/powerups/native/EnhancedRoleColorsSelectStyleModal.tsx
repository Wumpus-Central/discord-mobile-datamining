// === Module 17212: EnhancedRoleColorsSelectStyleModal ===

// Module 17212 (EnhancedRoleColorsSelectStyleModal)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4413 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 4957 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5621 */;
import Background from "Background" /* 5622 */;
import setOptionsDefault from "setOptions" /* 7841 */;
import title from "title" /* 17193 */;
import handleSetSection from "handleSetSection" /* 17194 */;
import HOLOGRAPHIC_ROLE_COLORS2 from "HOLOGRAPHIC_ROLE_COLORS" /* 17196 */;
import useGuildSettingsRoleExampleMessage from "useGuildSettingsRoleExampleMessage" /* 17213 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ Pressable: c3, View: c4 } = get_ActivityIndicator);
const RoleColorsStyle = handleSetSection.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = HOLOGRAPHIC_ROLE_COLORS2.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = title.STYLE_CONFIGS;
const ThemeTypes = sum.ThemeTypes;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, stylesContainer: null, button: null, message: null, text: null, upsellContainer: null, upsellText: null, selected: null, disabled: null };
  obj = { marginHorizontal: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_32 };
  obj[0] = obj;
  obj = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj1 = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj[3] = { width: 400, flex: 1, marginStart: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = tmp(712).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = tmp(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj2 = { width: 400, flex: 1, marginStart: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_8, alignSelf: "flex-start" };
  const tmp3 = ThemeTypes;
  obj[4] = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: ThemesDefault.space.PX_8 };
  if (arg0 === tmp3.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = tmp(712).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = tmp(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj3 = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: ThemesDefault.space.PX_8 };
  obj[5] = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm };
  obj[6] = { textAlign: "center" };
  const obj4 = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm };
  obj[7] = { borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
  obj[8] = { opacity: 0.5 };
  return obj;
});
let result = set.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  dependencyMap = undefined;
  let hasEnhancedRoleColorsForRole;
  closure_4 = undefined;
  closure_5 = undefined;
  ({ guildId, role } = arg0);
  const tmp3 = callback2(useThemeDefault());
  dependencyMap = tmp3;
  let obj = useHasEnhancedRoleColors;
  hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  obj1 = useGuildSettingsRoleExampleMessage;
  let intl = getSystemLocale.intl;
  closure_4 = obj1.useGuildSettingsRoleExampleMessage(intl.string(getSystemLocale.t.Mi9Kbe));
  closure_5 = new setOptionsDefault();
  obj = { header: null, children: null };
  obj = { title: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["9wVJRB"]);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  const tmp6 = new setOptionsDefault();
  let items = [
    callback(closure_4, {
      style: tmp3.stylesContainer,
      children: STYLE_CONFIGS.map((id) => {
        closure_0 = id;
        let tmp = !hasEnhancedRoleColorsForRole;
        if (!hasEnhancedRoleColorsForRole) {
          tmp = id.id !== constants.SOLID;
        }
        const items = [button.button, , ];
        let selected = closure_0 === id.id;
        if (selected) {
          selected = tmp5.selected;
        }
        items[1] = selected;
        let disabled = tmp;
        if (tmp) {
          disabled = tmp5.disabled;
        }
        let obj = {
          style: items,
          disabled: tmp,
          onPress() {
            closure_1_1(id.id);
            closure_2_1(4445).hideActionSheet();
          },
          children: null
        };
        items[2] = disabled;
        obj = {
          style: tmp5.message,
          pointerEvents: "none",
          message: closure_4,
          rowGenerator: constants,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = closure_2_0(1988).extractColorStringsFromServerColors(id.colors);
            const obj = closure_2_0(1988);
            message.message.roleColors = closure_2_0(7870).processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = closure_2_1(12954);
          }
        };
        const items1 = [closure_1_9(closure_1_1(button[16]), obj), ];
        obj = { style: tmp5.text, variant: "text-sm/normal", children: null };
        const intl = closure_1_0(button[11]).intl;
        obj[2] = intl.string(id.labelString);
        items1[1] = closure_1_9(closure_1_0(button[20]).Text, obj);
        obj[3] = items1;
        return closure_1_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8Result = !hasEnhancedRoleColorsForRole;
  if (!hasEnhancedRoleColorsForRole) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp3.upsellContainer;
    const obj4 = { style: null, variant: "text-sm/semibold", children: null };
    obj4[0] = tmp3.upsellText;
    const intl3 = tmp4(1236).intl;
    const obj5 = { magical: null };
    const obj6 = { gradientColors: null, variant: "text-sm/semibold", children: null };
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6[0] = items1;
    const intl4 = tmp4(1236).intl;
    obj6[2] = intl4.string(tmp(2401)["+/IHLl"]);
    obj5[0] = tmp7(tmp4(4474).Text, obj6);
    obj4[2] = intl3.format(tmp(2401).VpEDJc, obj5);
    const items2 = [tmp7(tmp4(4474).Text, obj4), ];
    const obj7 = { style: null, variant: "text-sm/normal", children: null };
    obj7[0] = tmp3.upsellText;
    const intl5 = tmp4(1236).intl;
    obj7[2] = intl5.string(tmp(2401).FJZeZF);
    items2[1] = tmp7(tmp4(4474).Text, obj7);
    obj3[1] = items2;
    tmp8Result = tmp8(tmp9, obj3);
  }
  items[1] = tmp8Result;
  obj1[1] = items;
  obj[1] = closure_10(closure_4, obj1);
  return callback(Background.BottomSheet, obj);
};