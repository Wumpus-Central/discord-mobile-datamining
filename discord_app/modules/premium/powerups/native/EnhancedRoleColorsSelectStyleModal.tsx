// === Module 17845: EnhancedRoleColorsSelectStyleModal ===

// Module 17845 (EnhancedRoleColorsSelectStyleModal)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import util from "util" /* 1126 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 2109 */;
import _modDef2553 from "module_2553" /* 2553 */;
import useThemeDefault from "useTheme" /* 4797 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 5800 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7631 */;
import _modDef13154 from "module_13154" /* 13154 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17826 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17827 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17829 */;
import useGuildSettingsRoleExampleMessage from "useGuildSettingsRoleExampleMessage" /* 17846 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((roleStyle) => {
  const cResult = roleStyle(576).c(24);
  roleStyle = roleStyle.roleStyle;
  const onStyleChanged = roleStyle.onStyleChanged;
  ({ guildId, role } = roleStyle);
  const tmp5 = closure_11(onStyleChanged(4797)());
  dependencyMap = tmp5;
  let obj = roleStyle(576);
  const hasEnhancedRoleColorsForRole = roleStyle(5800).useHasEnhancedRoleColorsForRole(guildId, role);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.Mi9Kbe);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const obj2 = roleStyle(5800);
  const guildSettingsRoleExampleMessage = roleStyle(17846).useGuildSettingsRoleExampleMessage(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = new tmp4(7602)();
    cResult[1] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[1];
  }
  const rowGenerator = tmp10;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { title: null };
    const intl2 = tmp(1126).intl;
    obj3.title = intl2.string(tmp(1126).t["9wVJRB"]);
    const tmp17 = closure_9(tmp(6651).BottomSheetTitleHeader, obj3);
    cResult[2] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === hasEnhancedRoleColorsForRole) {
    if (cResult[4] === guildSettingsRoleExampleMessage) {
      if (cResult[5] === onStyleChanged) {
        if (cResult[6] === roleStyle) {
          if (cResult[7] === tmp5.button) {
            if (cResult[8] === tmp5.disabled) {
              if (cResult[9] === tmp5.message) {
                if (cResult[10] === tmp5.selected) {
                  if (cResult[11] === tmp5.text) {
                    let tmp20 = cResult[12];
                  }
                  if (cResult[13] === tmp5.stylesContainer) {
                    if (cResult[14] === tmp20) {
                      let tmp22 = cResult[15];
                    }
                    if (cResult[16] === hasEnhancedRoleColorsForRole) {
                      if (cResult[17] === tmp5.upsellContainer) {
                        if (cResult[18] === tmp5.upsellText) {
                          let tmp26 = cResult[19];
                        }
                        if (cResult[20] === tmp5.container) {
                          if (cResult[21] === tmp22) {
                            if (cResult[22] === tmp26) {
                              let tmp32 = cResult[23];
                            }
                            return tmp32;
                          }
                        }
                        const obj4 = { header: tmp15, children: null };
                        const obj5 = { style: tmp18, children: null };
                        let items = [tmp22, tmp26];
                        obj5.children = items;
                        obj4.children = closure_10(guildSettingsRoleExampleMessage, obj5);
                        const tmp36 = closure_9(tmp(6652).BottomSheet, obj4);
                        cResult[20] = tmp5.container;
                        cResult[21] = tmp22;
                        cResult[22] = tmp26;
                        cResult[23] = tmp36;
                        tmp32 = tmp36;
                      }
                    }
                    let tmp27 = !hasEnhancedRoleColorsForRole;
                    if (!hasEnhancedRoleColorsForRole) {
                      const obj6 = { style: tmp5.upsellContainer, children: null };
                      const obj7 = { style: tmp5.upsellText, variant: "text-sm/semibold", children: null };
                      const intl3 = tmp(1126).intl;
                      const obj8 = { magical: null };
                      const obj9 = { gradientColors: null, variant: "text-sm/semibold", children: null };
                      let items1 = [, , ];
                      ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = HOLOGRAPHIC_ROLE_COLORS);
                      obj9.gradientColors = items1;
                      const intl4 = tmp(1126).intl;
                      obj9.children = intl4.string(tmp4(2553)["+/IHLl"]);
                      obj8.magical = closure_9(tmp(4892).Text, obj9);
                      obj7.children = intl3.format(tmp4(2553).VpEDJc, obj8);
                      const items2 = [closure_9(tmp(4892).Text, obj7), ];
                      const obj10 = { style: tmp5.upsellText, variant: "text-sm/normal", children: null };
                      const intl5 = tmp(1126).intl;
                      obj10.children = intl5.string(tmp4(2553).FJZeZF);
                      items2[1] = closure_9(tmp(4892).Text, obj10);
                      obj6.children = items2;
                      tmp27 = closure_10(guildSettingsRoleExampleMessage, obj6);
                    }
                    cResult[16] = hasEnhancedRoleColorsForRole;
                    cResult[17] = tmp5.upsellContainer;
                    cResult[18] = tmp5.upsellText;
                    cResult[19] = tmp27;
                    tmp26 = tmp27;
                  }
                  const obj11 = { style: tmp19, children: tmp20 };
                  const tmp25 = closure_9(guildSettingsRoleExampleMessage, obj11);
                  cResult[13] = tmp5.stylesContainer;
                  cResult[14] = tmp20;
                  cResult[15] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
          }
        }
      }
    }
  }
  const mapped = STYLE_CONFIGS.map((id) => {
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
        onStyleChanged(id.id);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
      children: null
    };
    items[2] = disabled;
    const items1 = [
      closure_1_9(onStyleChanged(button[17]), {
        style: button.message,
        pointerEvents: "none",
        message: guildSettingsRoleExampleMessage,
        rowGenerator,
        modifyRow(message) {
          message.message.roleColor = undefined;
          const result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
          message.message.roleColors = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(result);
          message.message.shouldShowRoleOnName = true;
          message.message.avatarURL = _modDef13154;
        }
      }),

    ];
    const obj3 = { style: button.text, variant: "text-sm/normal", children: null };
    const intl = roleStyle(button[12]).intl;
    obj3.children = intl.string(id.labelString);
    items1[1] = closure_1_9(roleStyle(button[21]).Text, obj3);
    obj.children = items1;
    return closure_1_10(hasEnhancedRoleColorsForRole, obj, id.id);
  });
  cResult[3] = hasEnhancedRoleColorsForRole;
  cResult[4] = guildSettingsRoleExampleMessage;
  cResult[5] = onStyleChanged;
  cResult[6] = roleStyle;
  cResult[7] = tmp5.button;
  cResult[8] = tmp5.disabled;
  cResult[9] = tmp5.message;
  cResult[10] = tmp5.selected;
  cResult[11] = tmp5.text;
  cResult[12] = mapped;
  tmp20 = mapped;
  const tmpResult = roleStyle(17846);
}) : ((arg0) => {
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
              message.message.avatarURL = _modDef13154;
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
    obj10.children = intl4.string(_modDef2553["+/IHLl"]);
    obj9.magical = closure_9(Text_Text.Text, obj10);
    obj8.children = intl3.format(_modDef2553.VpEDJc, obj9);
    const items2 = [closure_9(Text_Text.Text, obj8), ];
    const obj11 = { style: tmp3.upsellText, variant: "text-sm/normal", children: null };
    const intl5 = util.intl;
    obj11.children = intl5.string(_modDef2553.FJZeZF);
    items2[1] = closure_9(Text_Text.Text, obj11);
    obj7.children = items2;
    tmp8Result = closure_10(tmp9, obj7);
  }
  items[1] = tmp8Result;
  obj5.children = items;
  obj3.children = closure_10(message, obj5);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj3);
});