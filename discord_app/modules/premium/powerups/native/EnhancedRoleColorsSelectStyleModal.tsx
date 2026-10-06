// discord_app/modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import EnhancedRoleColorUtils from "../../enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useHasEnhancedRoleColors from "../hooks/useHasEnhancedRoleColors.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import _modDef13154 from "../../../../../discord_assets/assets/premium/wumpus-avatar.png.js";
import GuildSettingsRoleConstants from "../../../guild_settings/roles/GuildSettingsRoleConstants.tsx";
import GuildSettingsRolesStore from "../../../guild_settings/roles/GuildSettingsRolesStore.tsx";
import EnhancedRoleColorConstants from "../constants/EnhancedRoleColorConstants.tsx";
import useGuildSettingsRoleExampleMessage2 from "../../../guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
({ Pressable: c3, View: closure_4 } = react_native);
const RoleColorsStyle = GuildSettingsRolesStore.RoleColorsStyle;
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
const STYLE_CONFIGS = GuildSettingsRoleConstants.STYLE_CONFIGS;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let BACKGROUND_SURFACE_HIGH;
  let BACKGROUND_SURFACE_HIGH2;
  const obj = {
    container: { marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 },
    stylesContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 },
    button: size,
    message: {
      width: 400,
      flex: 1,
      marginStart: nativeDefault.space.PX_8,
      marginVertical: nativeDefault.space.PX_8,
      alignSelf: "flex-start",
    },
    text: {
      width: "100%",
      textAlign: "center",
      backgroundColor: BACKGROUND_SURFACE_HIGH,
      paddingVertical: nativeDefault.space.PX_8,
    },
    upsellContainer: {
      backgroundColor: BACKGROUND_SURFACE_HIGH2,
      padding: nativeDefault.space.PX_8,
      marginTop: nativeDefault.space.PX_16,
      borderRadius: nativeDefault.radii.sm,
    },
    upsellText: { textAlign: "center" },
    selected: { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND },
    disabled: { opacity: 0.5 },
  };
  ({ marginHorizontal: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 });
  ({ display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  size = {
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  ({
    width: 400,
    flex: 1,
    marginStart: nativeDefault.space.PX_8,
    marginVertical: nativeDefault.space.PX_8,
    alignSelf: "flex-start",
  });
  if (arg0 === ThemeTypes.LIGHT) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  ({
    width: "100%",
    textAlign: "center",
    backgroundColor: BACKGROUND_SURFACE_HIGH,
    paddingVertical: nativeDefault.space.PX_8,
  });
  if (arg0 === ThemeTypes.LIGHT) {
    BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  ({
    backgroundColor: BACKGROUND_SURFACE_HIGH2,
    padding: nativeDefault.space.PX_8,
    marginTop: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.sm,
  });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (roleStyle) {
      let Text2;
      let VpEDJc;
      let button;
      let first;
      let format;
      let guildId;
      let intl2;
      let intl4;
      let intl5;
      let items;
      let items1;
      let items2;
      let obj5;
      let obj8;
      let obj9;
      let role;
      let tmp10;
      let tmp13;
      const tmp = roleStyle;
      let obj = roleStyle(576);
      const cResult = obj.c(24);
      roleStyle = roleStyle.roleStyle;
      const onStyleChanged = roleStyle.onStyleChanged;
      ({ guildId, role } = roleStyle);
      const tmp5 = closure_11(onStyleChanged(4797)());
      dependencyMap = tmp5;
      let obj2 = roleStyle(5800);
      const hasEnhancedRoleColorsForRole = obj2.useHasEnhancedRoleColorsForRole(guildId, role);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.Mi9Kbe);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      const tmpResult = tmp(17846);
      const guildSettingsRoleExampleMessage = tmpResult.useGuildSettingsRoleExampleMessage(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const self = this;
        const self2 = this;
        const tmp11 = new onStyleChanged(7602)();
        cResult[1] = tmp11;
        tmp10 = tmp11;
      } else {
        tmp10 = cResult[1];
      }
      const rowGenerator = tmp10;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { title: intl2.string(tmp(1126).t["9wVJRB"]) };
        const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
        intl2 = tmp(1126).intl;
        const tmp15 = closure_9(BottomSheetTitleHeader, obj3);
        cResult[2] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === hasEnhancedRoleColorsForRole) {
        if (cResult[4] === guildSettingsRoleExampleMessage) {
          if (cResult[5] === onStyleChanged) {
            if (cResult[6] === roleStyle) {
              if (cResult[7] === tmp5.button) {
                if (cResult[8] === tmp5.disabled) {
                  if (cResult[9] === tmp5.message) {
                    if (cResult[10] === tmp5.selected) {
                      let tmp18;
                      if (cResult[11] === tmp5.text) {
                        tmp18 = cResult[12];
                      }
                      if (cResult[13] === tmp5.stylesContainer) {
                        let tmp20;
                        if (cResult[14] === tmp18) {
                          tmp20 = cResult[15];
                        }
                        if (cResult[16] === hasEnhancedRoleColorsForRole) {
                          if (cResult[17] === tmp5.upsellContainer) {
                            let tmp24;
                            if (cResult[18] === tmp5.upsellText) {
                              tmp24 = cResult[19];
                            }
                            if (cResult[20] === tmp5.container) {
                              if (cResult[21] === tmp20) {
                                let tmp30;
                                if (cResult[22] === tmp24) {
                                  tmp30 = cResult[23];
                                }
                                return tmp30;
                              }
                            }
                            const obj4 = { header: tmp13, children: closure_10(guildSettingsRoleExampleMessage, obj5) };
                            obj5 = { style: tmp16, children: items };
                            items = [tmp20, tmp24];
                            BottomSheet = tmp(6652).BottomSheet;
                            const tmp34 = closure_9(BottomSheet, obj4);
                            cResult[20] = tmp5.container;
                            cResult[21] = tmp20;
                            cResult[22] = tmp24;
                            cResult[23] = tmp34;
                            tmp30 = tmp34;
                          }
                        }
                        let tmp25 = !hasEnhancedRoleColorsForRole;
                        if (tmp25) {
                          const obj6 = { style: tmp5.upsellContainer, children: items2 };
                          const obj7 = {
                            style: tmp5.upsellText,
                            variant: "text-sm/semibold",
                            children: format(VpEDJc, obj8),
                          };
                          let Text = tmp(4892).Text;
                          const intl3 = tmp(1126).intl;
                          format = intl3.format;
                          obj8 = { magical: closure_9(Text2, obj9) };
                          VpEDJc = tmp4(2553).VpEDJc;
                          obj9 = {
                            gradientColors: items1,
                            variant: "text-sm/semibold",
                            children: intl4.string(onStyleChanged(2553)["+/IHLl"]),
                          };
                          items1 = [, ,];
                          ({
                            primary_color: arr[0],
                            secondary_color: arr[1],
                            tertiary_color: arr[2],
                          } = HOLOGRAPHIC_ROLE_COLORS);
                          Text2 = tmp(4892).Text;
                          intl4 = tmp(1126).intl;
                          items2 = [closure_9(Text, obj7)];
                          const obj10 = {
                            style: tmp5.upsellText,
                            variant: "text-sm/normal",
                            children: intl5.string(onStyleChanged(2553).FJZeZF),
                          };
                          const Text3 = tmp(4892).Text;
                          intl5 = tmp(1126).intl;
                          items2[1] = closure_9(Text3, obj10);
                          tmp25 = closure_10(guildSettingsRoleExampleMessage, obj6);
                        }
                        cResult[16] = hasEnhancedRoleColorsForRole;
                        cResult[17] = tmp5.upsellContainer;
                        cResult[18] = tmp5.upsellText;
                        cResult[19] = tmp25;
                        tmp24 = tmp25;
                      }
                      const obj11 = { style: tmp17, children: tmp18 };
                      const tmp23 = closure_9(guildSettingsRoleExampleMessage, obj11);
                      cResult[13] = tmp5.stylesContainer;
                      cResult[14] = tmp18;
                      cResult[15] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const mapped = STYLE_CONFIGS.map((id) => {
        let intl;
        let items1;
        const items = [button.button, ,];
        const selected = id === id.id && button.selected;
        items[1] = selected;
        let obj = {
          style: items,
          disabled: tmp,
          onPress() {
            onStyleChanged(id.id);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
          children: items1,
        };
        const tmp6 = !hasEnhancedRoleColorsForRole && id.id !== rowGenerator.SOLID && button.disabled;
        items[2] = tmp6;
        let obj2 = {
          style: button.message,
          pointerEvents: "none",
          message: guildSettingsRoleExampleMessage,
          rowGenerator,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const obj = EnhancedRoleColorUtils;
            const result = obj.extractColorStringsFromServerColors(id.colors);
            message = message.message;
            const obj2 = enhanced_role_colors_EnhancedRoleColorUtils;
            message.roleColors = obj2.processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = _modDef13154;
          },
        };
        items1 = [closure_1_9(onStyleChanged(button[17]), obj2)];
        const obj3 = { style: button.text, variant: "text-sm/normal", children: intl.string(id.labelString) };
        const Text = roleStyle(button[21]).Text;
        intl = roleStyle(button[12]).intl;
        items1[1] = closure_1_9(Text, obj3);
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
      tmp18 = mapped;
    }
  : (arg0) => {
      let BottomSheetTitleHeader;
      let Text2;
      let VpEDJc;
      let button;
      let format;
      let guildId;
      let intl2;
      let intl4;
      let intl5;
      let items;
      let items1;
      let items2;
      let obj3;
      let obj4;
      let obj8;
      let obj9;
      let role;
      ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
      ({ guildId, role } = arg0);
      const tmp3 = closure_11(useThemeDefault());
      dependencyMap = tmp3;
      let obj = useHasEnhancedRoleColors;
      const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
      let tmp6 = useGuildSettingsRoleExampleMessage2;
      const useGuildSettingsRoleExampleMessage = tmp6.useGuildSettingsRoleExampleMessage;
      let intl = intl6.intl;
      let message = useGuildSettingsRoleExampleMessage(intl.string(intl6.t.Mi9Kbe));
      const rowGenerator = new RowGeneratorDefault();
      let obj2 = { header: closure_9(BottomSheetTitleHeader, obj3), children: closure_10(message, obj4) };
      new RowGeneratorDefault();
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj3 = { title: intl2.string(intl6.t["9wVJRB"]) };
      BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl2 = intl6.intl;
      obj4 = { style: tmp3.container, children: items };
      items = [,];
      const obj5 = {
        style: tmp3.stylesContainer,
        children: STYLE_CONFIGS.map((id) => {
          let intl;
          let items1;
          const items = [button.button, ,];
          const selected = id === id.id && button.selected;
          items[1] = selected;
          let obj = {
            style: items,
            disabled: tmp,
            onPress() {
              importDefault(id.id);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            },
            children: items1,
          };
          const tmp6 = !hasEnhancedRoleColorsForRole && id.id !== rowGenerator.SOLID && button.disabled;
          items[2] = tmp6;
          let obj2 = {
            style: button.message,
            pointerEvents: "none",
            message,
            rowGenerator,
            modifyRow(message) {
              message.message.roleColor = undefined;
              const obj = EnhancedRoleColorUtils;
              const result = obj.extractColorStringsFromServerColors(id.colors);
              message = message.message;
              const obj2 = enhanced_role_colors_EnhancedRoleColorUtils;
              message.roleColors = obj2.processColorStrings(result);
              message.message.shouldShowRoleOnName = true;
              message.message.avatarURL = _modDef13154;
            },
          };
          items1 = [closure_1_9(require("ChatItem"), obj2)];
          const obj3 = { style: button.text, variant: "text-sm/normal", children: intl.string(id.labelString) };
          const Text = require("Text/Text").Text;
          intl = require("intl").intl;
          items1[1] = closure_1_9(Text, obj3);
          return closure_1_10(hasEnhancedRoleColorsForRole, obj, id.id);
        }),
      };
      items[0] = closure_9(message, obj5);
      let tmp9Result = !hasEnhancedRoleColorsForRole;
      if (tmp9Result) {
        const obj6 = { style: tmp3.upsellContainer, children: items2 };
        const obj7 = { style: tmp3.upsellText, variant: "text-sm/semibold", children: format(VpEDJc, obj8) };
        let Text = Text_Text.Text;
        const intl3 = intl6.intl;
        format = intl3.format;
        obj8 = { magical: closure_9(Text2, obj9) };
        VpEDJc = _modDef2553.VpEDJc;
        obj9 = { gradientColors: items1, variant: "text-sm/semibold", children: intl4.string(_modDef2553["+/IHLl"]) };
        items1 = [, ,];
        ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
        Text2 = Text_Text.Text;
        intl4 = intl6.intl;
        items2 = [closure_9(Text, obj7)];
        const obj10 = { style: tmp3.upsellText, variant: "text-sm/normal", children: intl5.string(_modDef2553.FJZeZF) };
        const Text3 = Text_Text.Text;
        intl5 = intl6.intl;
        items2[1] = closure_9(Text3, obj10);
        tmp9Result = closure_10(tmp10, obj6);
      }
      items[1] = tmp9Result;
      return closure_9(BottomSheet, obj2);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default tmp4;
