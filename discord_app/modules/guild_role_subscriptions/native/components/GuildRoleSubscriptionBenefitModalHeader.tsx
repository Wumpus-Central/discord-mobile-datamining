// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  headerContainer: obj2,
  headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 },
  headerButtonStart: { alignItems: "flex-start" },
  headerButtonEnd: { alignItems: "flex-end" },
  headerButton: obj3,
  disabledButton: obj4,
  titleContainer: { flex: 1, flexDirection: "column" },
  title: obj5,
  subtitle: { textAlign: "center" },
};
obj2 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 8,
  paddingHorizontal: 16,
};
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj5 = { textAlign: "center" };
TextStyles = TextStyles_mod;
const merged2 = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
);
let closure_8 = createStyles(obj);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (listingId) => {
      let canSave;
      let items;
      let items3;
      let onClose;
      let onSave;
      let title;
      const obj = react2;
      const cResult = obj.c(39);
      ({ title, canSave, onSave, onClose } = listingId);
      listingId = listingId.listingId;
      const tmp4 = closure_8();
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj2.useName(listingId), 1)[0];
      if (cResult[0] === tmp4.headerButtonContainer) {
        let tmp7;
        let tmp9;
        let tmp11;
        if (cResult[1] === tmp4.headerButtonStart) {
          tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        const headerButton = tmp4.headerButton;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["ETE/oC"]);
          cResult[3] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== tmp4.headerButton) {
          const obj3 = {
            style: headerButton,
            variant: "text-md/medium",
            color: "interactive-text-active",
            children: tmp9,
          };
          const tmp13 = metroRequire(Text_Text.Text, obj3);
          cResult[4] = tmp4.headerButton;
          cResult[5] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === onClose) {
          if (cResult[7] === tmp7) {
            let tmp14;
            if (cResult[8] === tmp11) {
              tmp14 = cResult[9];
            }
            if (cResult[10] === tmp4.title) {
              let tmp18;
              if (cResult[11] === title) {
                tmp18 = cResult[12];
              }
              if (cResult[13] === tmp4.subtitle) {
                let tmp21;
                if (cResult[14] === first) {
                  tmp21 = cResult[15];
                }
                if (cResult[16] === tmp4.titleContainer) {
                  if (cResult[17] === tmp18) {
                    let tmp24;
                    if (cResult[18] === tmp21) {
                      tmp24 = cResult[19];
                    }
                    if (cResult[20] === tmp4.headerButtonContainer) {
                      let tmp28;
                      if (cResult[21] === tmp4.headerButtonEnd) {
                        tmp28 = cResult[22];
                      }
                      if (cResult[23] === tmp4.headerButton) {
                        let tmp31;
                        let tmp32;
                        let tmp34;
                        if (cResult[24] === (!canSave && tmp4.disabledButton)) {
                          tmp31 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = intl3.intl;
                          const stringResult1 = intl2.string(intl3.t["R3BPH+"]);
                          cResult[26] = stringResult1;
                          tmp32 = stringResult1;
                        } else {
                          tmp32 = cResult[26];
                        }
                        if (cResult[27] !== tmp31) {
                          const obj4 = { style: tmp31, children: tmp32 };
                          const tmp36 = metroRequire(native.LegacyText, obj4);
                          cResult[27] = tmp31;
                          cResult[28] = tmp36;
                          tmp34 = tmp36;
                        } else {
                          tmp34 = cResult[28];
                        }
                        if (cResult[29] === onSave) {
                          if (cResult[30] === tmp28) {
                            if (cResult[31] === !canSave) {
                              let tmp37;
                              if (cResult[32] === tmp34) {
                                tmp37 = cResult[33];
                              }
                              if (cResult[34] === tmp4.headerContainer) {
                                if (cResult[35] === tmp37) {
                                  if (cResult[36] === tmp14) {
                                    let tmp41;
                                    if (cResult[37] === tmp24) {
                                      tmp41 = cResult[38];
                                    }
                                    return tmp41;
                                  }
                                }
                              }
                              const obj5 = { top: true, style: tmp6, children: items };
                              items = [tmp14, tmp24, tmp37];
                              const tmp43 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, obj5);
                              cResult[34] = tmp4.headerContainer;
                              cResult[35] = tmp37;
                              cResult[36] = tmp14;
                              cResult[37] = tmp24;
                              cResult[38] = tmp43;
                              tmp41 = tmp43;
                            }
                          }
                        }
                        const obj6 = {
                          style: tmp28,
                          accessibilityRole: "button",
                          disabled: !canSave,
                          onPress: onSave,
                          children: tmp34,
                        };
                        const tmp40 = metroRequire(TouchableHitBoxDefault, obj6);
                        cResult[29] = onSave;
                        cResult[30] = tmp28;
                        cResult[31] = !canSave;
                        cResult[32] = tmp34;
                        cResult[33] = tmp40;
                        tmp37 = tmp40;
                      }
                      const items1 = [tmp4.headerButton, !canSave && tmp4.disabledButton];
                      cResult[23] = tmp4.headerButton;
                      cResult[24] = !canSave && tmp4.disabledButton;
                      cResult[25] = items1;
                      tmp31 = items1;
                    }
                    const items2 = [,];
                    ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp4);
                    cResult[20] = tmp4.headerButtonContainer;
                    cResult[21] = tmp4.headerButtonEnd;
                    cResult[22] = items2;
                    tmp28 = items2;
                  }
                }
                const obj7 = { style: tmp4.titleContainer, children: items3 };
                items3 = [tmp18, tmp21];
                const tmp27 = metroImportDefault(View, obj7);
                cResult[16] = tmp4.titleContainer;
                cResult[17] = tmp18;
                cResult[18] = tmp21;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
              const obj8 = { style: tmp4.subtitle, variant: "text-xs/medium", color: "text-default", children: first };
              const tmp23 = metroRequire(Text_Text.Text, obj8);
              cResult[13] = tmp4.subtitle;
              cResult[14] = first;
              cResult[15] = tmp23;
              tmp21 = tmp23;
            }
            const obj9 = { style: tmp4.title, accessibilityRole: "header", children: title };
            const tmp20 = metroRequire(native.LegacyText, obj9);
            cResult[10] = tmp4.title;
            cResult[11] = title;
            cResult[12] = tmp20;
            tmp18 = tmp20;
          }
        }
        const obj10 = { style: tmp7, accessibilityRole: "button", onPress: onClose, children: tmp11 };
        const tmp17 = metroRequire(TouchableHitBoxDefault, obj10);
        cResult[6] = onClose;
        cResult[7] = tmp7;
        cResult[8] = tmp11;
        cResult[9] = tmp17;
        tmp14 = tmp17;
      }
      const items4 = [,];
      ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp4);
      ({ headerButtonContainer: tmp3[0], headerButtonStart: tmp3[1] } = tmp4);
      cResult[2] = items4;
      tmp7 = items4;
    }
  : (canSave) => {
      let LegacyText;
      let Text;
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      let items3;
      let listingId;
      let obj4;
      let obj9;
      let onClose;
      let onSave;
      let title;
      canSave = canSave.canSave;
      ({ title, onSave, onClose, listingId } = canSave);
      const tmp = closure_8();
      const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj.useName(listingId), 1)[0];
      const obj2 = { top: true, style: tmp.headerContainer, children: items1 };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      const obj3 = { style: items, accessibilityRole: "button", onPress: onClose, children: metroRequire(Text, obj4) };
      items = [,];
      ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
      obj4 = {
        style: tmp.headerButton,
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: intl.string(intl3.t["ETE/oC"]),
      };
      const tmp7 = TouchableHitBoxDefault;
      Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [metroRequire(tmp7, obj3), ,];
      const obj5 = { style: tmp.titleContainer, children: items2 };
      items2 = [,];
      const obj6 = { style: tmp.title, accessibilityRole: "header", children: title };
      items2[0] = metroRequire(native.LegacyText, obj6);
      const obj7 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-default", children: first };
      items2[1] = metroRequire(Text_Text.Text, obj7);
      items1[1] = metroImportDefault(View, obj5);
      const obj8 = {
        style: items3,
        accessibilityRole: "button",
        disabled: !canSave,
        onPress: onSave,
        children: metroRequire(LegacyText, obj9),
      };
      items3 = [,];
      ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
      const items4 = [tmp.headerButton];
      let disabledButton = !canSave;
      const tmp8 = TouchableHitBoxDefault;
      LegacyText = native.LegacyText;
      if (!canSave) {
        disabledButton = tmp.disabledButton;
      }
      items4[1] = disabledButton;
      obj9 = { style: items4, children: intl2.string(intl3.t["R3BPH+"]) };
      intl2 = intl3.intl;
      items1[2] = metroRequire(tmp8, obj8);
      return metroImportDefault(SafeAreaPaddingView, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx",
);

export default tmp11;
