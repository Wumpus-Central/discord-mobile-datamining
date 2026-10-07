// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  headerContainer: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 },
  headerButtonStart: { alignItems: "flex-start" },
  headerButtonEnd: { alignItems: "flex-end" },
  headerButton: null,
  disabledButton: null,
  titleContainer: null,
  title: null,
  subtitle: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj2.headerButton = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.disabledButton = {};
obj2.titleContainer = { flex: 1, flexDirection: "column" };
let obj6 = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
);
obj6.textAlign = "center";
obj2.title = obj6;
obj2.subtitle = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 8,
  paddingHorizontal: 16,
};
let obj4 = {};
let obj5 = {};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(39);
      ({ title, canSave, onSave, onClose } = arg0);
      const tmp4 = closure_8();
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(arg0.listingId), 1)[0];
      if (cResult[0] === tmp4.headerButtonContainer) {
        if (cResult[1] === tmp4.headerButtonStart) {
          let tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["ETE/oC"]);
          cResult[3] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== tmp4.headerButton) {
          const obj3 = {
            style: tmp4.headerButton,
            variant: "text-md/medium",
            color: "interactive-text-active",
            children: tmp9,
          };
          const tmp13 = timestampProducer(Text_Text.Text, obj3);
          cResult[4] = tmp4.headerButton;
          cResult[5] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === onClose) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp11) {
              let tmp14 = cResult[9];
            }
            if (cResult[10] === tmp4.title) {
              if (cResult[11] === title) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === tmp4.subtitle) {
                if (cResult[14] === first) {
                  let tmp21 = cResult[15];
                }
                if (cResult[16] === tmp4.titleContainer) {
                  if (cResult[17] === tmp18) {
                    if (cResult[18] === tmp21) {
                      let tmp24 = cResult[19];
                    }
                    if (cResult[20] === tmp4.headerButtonContainer) {
                      if (cResult[21] === tmp4.headerButtonEnd) {
                        let tmp28 = cResult[22];
                      }
                      let disabledButton = !canSave;
                      if (!canSave) {
                        disabledButton = tmp4.disabledButton;
                      }
                      if (cResult[23] === tmp4.headerButton) {
                        if (cResult[24] === disabledButton) {
                          let tmp30 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = util.intl;
                          const stringResult1 = intl2.string(util.t["R3BPH+"]);
                          cResult[26] = stringResult1;
                          let tmp31 = stringResult1;
                        } else {
                          tmp31 = cResult[26];
                        }
                        if (cResult[27] !== tmp30) {
                          const obj4 = { style: tmp30, children: tmp31 };
                          const tmp35 = timestampProducer(native.LegacyText, obj4);
                          cResult[27] = tmp30;
                          cResult[28] = tmp35;
                          let tmp33 = tmp35;
                        } else {
                          tmp33 = cResult[28];
                        }
                        if (cResult[29] === onSave) {
                          if (cResult[30] === tmp28) {
                            if (cResult[31] === tmp29) {
                              if (cResult[32] === tmp33) {
                                let tmp36 = cResult[33];
                              }
                              if (cResult[34] === tmp4.headerContainer) {
                                if (cResult[35] === tmp36) {
                                  if (cResult[36] === tmp14) {
                                    if (cResult[37] === tmp24) {
                                      let tmp40 = cResult[38];
                                    }
                                    return tmp40;
                                  }
                                }
                              }
                              const obj5 = { top: true, style: tmp6, children: null };
                              const items = [tmp14, tmp24, tmp36];
                              obj5.children = items;
                              const tmp42 = React5(common_SafeAreaView.SafeAreaPaddingView, obj5);
                              cResult[34] = tmp4.headerContainer;
                              cResult[35] = tmp36;
                              cResult[36] = tmp14;
                              cResult[37] = tmp24;
                              cResult[38] = tmp42;
                              tmp40 = tmp42;
                            }
                          }
                        }
                        const obj6 = {
                          style: tmp28,
                          accessibilityRole: "button",
                          disabled: tmp29,
                          onPress: onSave,
                          children: tmp33,
                        };
                        const tmp39 = timestampProducer(TouchableHitBoxDefault, obj6);
                        cResult[29] = onSave;
                        cResult[30] = tmp28;
                        cResult[31] = tmp29;
                        cResult[32] = tmp33;
                        cResult[33] = tmp39;
                        tmp36 = tmp39;
                      }
                      const items1 = [tmp4.headerButton, disabledButton];
                      cResult[23] = tmp4.headerButton;
                      cResult[24] = disabledButton;
                      cResult[25] = items1;
                      tmp30 = items1;
                    }
                    const items2 = [,];
                    ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp4);
                    cResult[20] = tmp4.headerButtonContainer;
                    cResult[21] = tmp4.headerButtonEnd;
                    cResult[22] = items2;
                    tmp28 = items2;
                  }
                }
                const obj7 = { style: tmp4.titleContainer, children: null };
                const items3 = [tmp18, tmp21];
                obj7.children = items3;
                const tmp27 = React5(View, obj7);
                cResult[16] = tmp4.titleContainer;
                cResult[17] = tmp18;
                cResult[18] = tmp21;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
              const obj8 = { style: tmp4.subtitle, variant: "text-xs/medium", color: "text-default", children: first };
              const tmp23 = timestampProducer(Text_Text.Text, obj8);
              cResult[13] = tmp4.subtitle;
              cResult[14] = first;
              cResult[15] = tmp23;
              tmp21 = tmp23;
            }
            const obj9 = { style: tmp4.title, accessibilityRole: "header", children: title };
            const tmp20 = timestampProducer(native.LegacyText, obj9);
            cResult[10] = tmp4.title;
            cResult[11] = title;
            cResult[12] = tmp20;
            tmp18 = tmp20;
          }
        }
        const obj10 = { style: tmp7, accessibilityRole: "button", onPress: onClose, children: tmp11 };
        const tmp17 = timestampProducer(TouchableHitBoxDefault, obj10);
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
      canSave = canSave.canSave;
      ({ title, onSave, onClose, listingId } = canSave);
      const tmp = closure_8();
      const obj2 = { top: true, style: tmp.headerContainer, children: null };
      const obj3 = { style: null, accessibilityRole: "button", onPress: onClose, children: null };
      const items = [,];
      ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
      obj3.style = items;
      const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      const obj4 = {
        style: tmp.headerButton,
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t["ETE/oC"]);
      obj3.children = timestampProducer(Text_Text.Text, obj4);
      const items1 = [timestampProducer(TouchableHitBoxDefault, obj3), ,];
      const obj5 = { style: tmp.titleContainer, children: null };
      const items2 = [
        timestampProducer(native.LegacyText, { style: tmp.title, accessibilityRole: "header", children: title }),
      ];
      const obj6 = { style: tmp.title, accessibilityRole: "header", children: title };
      items2[1] = timestampProducer(Text_Text.Text, {
        style: tmp.subtitle,
        variant: "text-xs/medium",
        color: "text-default",
        children: _slicedToArray(obj.useName(listingId), 1)[0],
      });
      obj5.children = items2;
      items1[1] = React5(View, obj5);
      const obj8 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
      const items3 = [,];
      ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
      obj8.style = items3;
      const obj7 = {
        style: tmp.subtitle,
        variant: "text-xs/medium",
        color: "text-default",
        children: _slicedToArray(obj.useName(listingId), 1)[0],
      };
      const items4 = [tmp.headerButton];
      let disabledButton = !canSave;
      if (!canSave) {
        disabledButton = tmp.disabledButton;
      }
      const obj9 = { style: items4, children: null };
      items4[1] = disabledButton;
      const intl2 = util.intl;
      obj9.children = intl2.string(util.t["R3BPH+"]);
      obj8.children = timestampProducer(native.LegacyText, obj9);
      items1[2] = timestampProducer(TouchableHitBoxDefault, obj8);
      obj2.children = items1;
      return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
    };
