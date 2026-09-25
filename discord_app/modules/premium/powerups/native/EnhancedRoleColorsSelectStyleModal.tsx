// === Module 17396: EnhancedRoleColorsSelectStyleModal ===

// Module 17396 (EnhancedRoleColorsSelectStyleModal)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1115 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 2104 */;
import _modDef2518 from "module_2518" /* 2518 */;
import useThemeDefault from "useTheme" /* 4763 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 5303 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6565 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6566 */;
import RowGeneratorDefault from "RowGenerator" /* 7369 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7398 */;
import _modDef12855 from "module_12855" /* 12855 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17375 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17376 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17378 */;
import useGuildSettingsRoleExampleMessage from "useGuildSettingsRoleExampleMessage" /* 17397 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = GuildSettingsRoleConstants.STYLE_CONFIGS;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { container: { marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 }, stylesContainer: null, button: null, message: null, text: null, upsellContainer: null, upsellText: null, selected: null, disabled: null };
  const obj2 = { marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.stylesContainer = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  const size = { borderRadius: nativeDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj.button = size;
  const obj3 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.message = { width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj4 = { width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" };
  obj.text = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj5 = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 };
  obj.upsellContainer = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm };
  obj.upsellText = { textAlign: "center" };
  const obj6 = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm };
  obj.selected = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.disabled = { opacity: 0.5 };
  return obj;
});
let result = size.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  ({ guildId, role } = arg0);
  const tmp3 = closure_11(useThemeDefault());
  dependencyMap = tmp3;
  const hasEnhancedRoleColorsForRole = useHasEnhancedRoleColors.useHasEnhancedRoleColorsForRole(guildId, role);
  let intl = util.intl;
  const message = useGuildSettingsRoleExampleMessage.useGuildSettingsRoleExampleMessage(intl.string(util.t.Mi9Kbe));
  const rowGenerator = new RowGeneratorDefault();
  let obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl2 = util.intl;
  obj4.title = intl2.string(util.t["9wVJRB"]);
  obj3.header = closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
  const obj5 = { style: tmp3.container, children: null };
  const tmp6 = new RowGeneratorDefault();
  let items = [
    closure_9(message, {
      style: tmp3.stylesContainer,
      children: STYLE_CONFIGS.map((id) => {
        let tmp = !hasEnhancedRoleColorsForRole;
        if (!hasEnhancedRoleColorsForRole) {
          tmp = id.id !== rowGenerator.SOLID;
        }
        const items = [button.button, , ];
        let selected = id === id.id;
        if (selected) {
          selected = button.selected;
        }
        items[1] = selected;
        let disabled = tmp;
        if (tmp) {
          disabled = button.disabled;
        }
        let obj = {
          style: items,
          disabled: tmp,
          onPress() {
            closure_2_1(id.id);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          },
          children: null
        };
        items[2] = disabled;
        const items1 = [
          closure_1_9(require("ChatItem"), {
            style: button.message,
            pointerEvents: "none",
            message,
            rowGenerator,
            modifyRow(message) {
              message.message.roleColor = undefined;
              const result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
              message.message.roleColors = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(result);
              message.message.shouldShowRoleOnName = true;
              message.message.avatarURL = _modDef12855;
            }
          }),

        ];
        const obj3 = { style: button.text, variant: "text-sm/normal", children: null };
        const intl = require("util").intl;
        obj3.children = intl.string(id.labelString);
        items1[1] = closure_1_9(require("Text/Text").Text, obj3);
        obj.children = items1;
        return closure_1_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8Result = !hasEnhancedRoleColorsForRole;
  if (!hasEnhancedRoleColorsForRole) {
    const obj7 = { style: tmp3.upsellContainer, children: null };
    const obj8 = { style: tmp3.upsellText, variant: "text-sm/semibold", children: null };
    const intl3 = util.intl;
    const obj9 = { magical: null };
    const obj10 = { gradientColors: null, variant: "text-sm/semibold", children: null };
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj10.gradientColors = items1;
    const intl4 = util.intl;
    obj10.children = intl4.string(_modDef2518["+/IHLl"]);
    obj9.magical = closure_9(Text_Text.Text, obj10);
    obj8.children = intl3.format(_modDef2518.VpEDJc, obj9);
    const items2 = [closure_9(Text_Text.Text, obj8), ];
    const obj11 = { style: tmp3.upsellText, variant: "text-sm/normal", children: null };
    const intl5 = util.intl;
    obj11.children = intl5.string(_modDef2518.FJZeZF);
    items2[1] = closure_9(Text_Text.Text, obj11);
    obj7.children = items2;
    tmp8Result = closure_10(tmp9, obj7);
  }
  items[1] = tmp8Result;
  obj5.children = items;
  obj3.children = closure_10(message, obj5);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj3);
};