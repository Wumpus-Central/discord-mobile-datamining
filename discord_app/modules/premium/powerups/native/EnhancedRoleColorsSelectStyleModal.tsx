// === Module 17628: EnhancedRoleColorsSelectStyleModal ===

// Module 17628 (EnhancedRoleColorsSelectStyleModal)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1114 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 2018 */;
import _modDef2428 from "module_2428" /* 2428 */;
import useThemeDefault from "useTheme" /* 4495 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 5004 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import _modDef13293 from "module_13293" /* 13293 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17609 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17610 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17612 */;
import useGuildSettingsRoleExampleMessage from "useGuildSettingsRoleExampleMessage" /* 17629 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = GuildSettingsRoleConstants.STYLE_CONFIGS;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = createStyles.createStyles((arg0) => {
  let obj = { container: null, stylesContainer: null, button: null, message: null, text: null, upsellContainer: null, upsellText: null, selected: null, disabled: null };
  obj = { marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.container = obj;
  obj = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.stylesContainer = obj;
  const size = { borderRadius: nativeDefault.radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj.button = size;
  obj.message = { width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj1 = { width: 400, flex: 1, marginStart: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8, alignSelf: "flex-start" };
  obj.text = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj2 = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_8 };
  obj.upsellContainer = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm };
  obj.upsellText = { textAlign: "center" };
  const obj3 = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm };
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
  let obj = useHasEnhancedRoleColors;
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  let obj1 = useGuildSettingsRoleExampleMessage;
  let intl = util.intl;
  const message = obj1.useGuildSettingsRoleExampleMessage(intl.string(util.t.Mi9Kbe));
  const rowGenerator = new RowGeneratorDefault();
  obj = { header: null, children: null };
  obj = { title: null };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t["9wVJRB"]);
  obj.header = closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
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
        obj = {
          style: button.message,
          pointerEvents: "none",
          message,
          rowGenerator,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
            message.message.roleColors = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = _modDef13293;
          }
        };
        const items1 = [closure_1_9(require("ChatItem"), obj), ];
        obj = { style: button.text, variant: "text-sm/normal", children: null };
        const intl = require("util").intl;
        obj.children = intl.string(id.labelString);
        items1[1] = closure_1_9(require("Text/Text").Text, obj);
        obj.children = items1;
        return closure_1_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8Result = !hasEnhancedRoleColorsForRole;
  if (!hasEnhancedRoleColorsForRole) {
    const obj3 = { style: tmp3.upsellContainer, children: null };
    const obj4 = { style: tmp3.upsellText, variant: "text-sm/semibold", children: null };
    const intl3 = util.intl;
    const obj5 = { magical: null };
    const obj6 = { gradientColors: null, variant: "text-sm/semibold", children: null };
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6.gradientColors = items1;
    const intl4 = util.intl;
    obj6.children = intl4.string(_modDef2428["+/IHLl"]);
    obj5.magical = closure_9(Text_Text.Text, obj6);
    obj4.children = intl3.format(_modDef2428.VpEDJc, obj5);
    const items2 = [closure_9(Text_Text.Text, obj4), ];
    const obj7 = { style: tmp3.upsellText, variant: "text-sm/normal", children: null };
    const intl5 = util.intl;
    obj7.children = intl5.string(_modDef2428.FJZeZF);
    items2[1] = closure_9(Text_Text.Text, obj7);
    obj3.children = items2;
    tmp8Result = closure_10(tmp9, obj3);
  }
  items[1] = tmp8Result;
  obj1.children = items;
  obj.children = closure_10(message, obj1);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj);
};