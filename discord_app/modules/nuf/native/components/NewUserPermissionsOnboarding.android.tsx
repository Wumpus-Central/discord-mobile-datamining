// discord_app/modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scrollContainer: { minHeight: "100%" },
  container: { flexGrow: 1, alignItems: "center", justifyContent: "center" },
  alertContainer: obj2,
  alert: obj3,
  alertContent: { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" },
  alertTitle: { paddingBottom: 8, textAlign: "center" },
  alertSubtitle: obj4,
  buttonWrapper: { flexDirection: "row" },
  primaryButtonContainer: obj5,
  trailing: obj6,
};
obj2 = { paddingTop: 80 + NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Button;
      let header;
      let intl2;
      let items;
      let items1;
      let items2;
      let loading;
      let obj10;
      let onAllow;
      let onDontAllow;
      let showSkip;
      let subtitle;
      let title;
      let trailing;
      const obj = react2;
      const cResult = obj.c(45);
      ({ title, subtitle, header, trailing, loading, showSkip, onAllow, onDontAllow } = arg0);
      const tmp5 = closure_6();
      if (cResult[0] === tmp5.alertTitle) {
        let tmp11;
        if (cResult[1] === title) {
          tmp11 = cResult[2];
        }
        if (cResult[3] === tmp5.alertSubtitle) {
          let tmp13;
          if (cResult[4] === subtitle) {
            tmp13 = cResult[5];
          }
          if (cResult[6] === tmp5.buttonWrapper) {
            let tmp17;
            let tmp19;
            if (cResult[7] === ((undefined === showSkip || showSkip) && tmp5.primaryButtonContainer)) {
              tmp17 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl3.intl;
              const stringResult = intl.string(intl3.t["2nYlT2"]);
              cResult[9] = stringResult;
              tmp19 = stringResult;
            } else {
              tmp19 = cResult[9];
            }
            if (cResult[10] === loading) {
              let tmp21;
              if (cResult[11] === onAllow) {
                tmp21 = cResult[12];
              }
              if (cResult[13] === tmp17) {
                let tmp24;
                if (cResult[14] === tmp21) {
                  tmp24 = cResult[15];
                }
                if (cResult[16] === onDontAllow) {
                  if (cResult[17] === (undefined === showSkip || showSkip)) {
                    let tmp28;
                    if (cResult[18] === tmp5.buttonWrapper) {
                      tmp28 = cResult[19];
                    }
                    if (cResult[20] === tmp5.alertContent) {
                      if (cResult[21] === tmp24) {
                        if (cResult[22] === tmp28) {
                          if (cResult[23] === tmp11) {
                            let tmp32;
                            if (cResult[24] === tmp13) {
                              tmp32 = cResult[25];
                            }
                            if (cResult[26] === tmp5.alert) {
                              let tmp36;
                              if (cResult[27] === tmp32) {
                                tmp36 = cResult[28];
                              }
                              if (cResult[29] === header) {
                                let tmp40;
                                if (cResult[30] === tmp36) {
                                  tmp40 = cResult[31];
                                }
                                if (cResult[32] === tmp5.alertContainer) {
                                  let tmp44;
                                  if (cResult[33] === tmp40) {
                                    tmp44 = cResult[34];
                                  }
                                  if (cResult[35] === tmp5.container) {
                                    let tmp48;
                                    if (cResult[36] === tmp44) {
                                      tmp48 = cResult[37];
                                    }
                                    if (cResult[38] === tmp5.trailing) {
                                      let tmp52;
                                      if (cResult[39] === trailing) {
                                        tmp52 = cResult[40];
                                      }
                                      if (cResult[41] === tmp5.scrollContainer) {
                                        if (cResult[42] === tmp48) {
                                          let tmp56;
                                          if (cResult[43] === tmp52) {
                                            tmp56 = cResult[44];
                                          }
                                          return tmp56;
                                        }
                                      }
                                      const obj2 = { contentContainerStyle: tmp6, children: items };
                                      items = [tmp48, tmp52];
                                      const tmp59 = hasOwnProperty(_false, obj2);
                                      cResult[41] = tmp5.scrollContainer;
                                      cResult[42] = tmp48;
                                      cResult[43] = tmp52;
                                      cResult[44] = tmp59;
                                      tmp56 = tmp59;
                                    }
                                    const obj3 = { style: tmp5.trailing, children: trailing };
                                    const tmp55 = React3(React2, obj3);
                                    cResult[38] = tmp5.trailing;
                                    cResult[39] = trailing;
                                    cResult[40] = tmp55;
                                    tmp52 = tmp55;
                                  }
                                  const obj4 = { style: tmp7, children: tmp44 };
                                  const tmp51 = React3(React2, obj4);
                                  cResult[35] = tmp5.container;
                                  cResult[36] = tmp44;
                                  cResult[37] = tmp51;
                                  tmp48 = tmp51;
                                }
                                const obj5 = { style: tmp8, children: tmp40 };
                                const tmp47 = React3(React2, obj5);
                                cResult[32] = tmp5.alertContainer;
                                cResult[33] = tmp40;
                                cResult[34] = tmp47;
                                tmp44 = tmp47;
                              }
                              const obj6 = { children: items1 };
                              items1 = [header, tmp36];
                              const tmp43 = hasOwnProperty(React2, obj6);
                              cResult[29] = header;
                              cResult[30] = tmp36;
                              cResult[31] = tmp43;
                              tmp40 = tmp43;
                            }
                            const obj7 = { style: tmp9, children: tmp32 };
                            const tmp39 = React3(React2, obj7);
                            cResult[26] = tmp5.alert;
                            cResult[27] = tmp32;
                            cResult[28] = tmp39;
                            tmp36 = tmp39;
                          }
                        }
                      }
                    }
                    const obj8 = { style: tmp10, children: items2 };
                    items2 = [tmp11, tmp13, tmp24, tmp28];
                    const tmp35 = hasOwnProperty(React2, obj8);
                    cResult[20] = tmp5.alertContent;
                    cResult[21] = tmp24;
                    cResult[22] = tmp28;
                    cResult[23] = tmp11;
                    cResult[24] = tmp13;
                    cResult[25] = tmp35;
                    tmp32 = tmp35;
                  }
                }
                let tmp29 = tmp4;
                if (tmp29) {
                  const obj9 = { style: tmp5.buttonWrapper, children: React3(Button, obj10) };
                  obj10 = {
                    variant: "secondary",
                    text: intl2.string(intl3.t["5Wxrcd"]),
                    onPress: onDontAllow,
                    grow: true,
                  };
                  Button = components_Button_Button.Button;
                  intl2 = intl3.intl;
                  tmp29 = React3(React2, obj9);
                }
                cResult[16] = onDontAllow;
                cResult[17] = undefined === showSkip || showSkip;
                cResult[18] = tmp5.buttonWrapper;
                cResult[19] = tmp29;
                tmp28 = tmp29;
              }
              const obj11 = { style: tmp17, children: tmp21 };
              const tmp27 = React3(React2, obj11);
              cResult[13] = tmp17;
              cResult[14] = tmp21;
              cResult[15] = tmp27;
              tmp24 = tmp27;
            }
            const obj12 = { variant: "primary", size: "md", text: tmp19, onPress: onAllow, loading, grow: true };
            const tmp23 = React3(components_Button_Button.Button, obj12);
            cResult[10] = loading;
            cResult[11] = onAllow;
            cResult[12] = tmp23;
            tmp21 = tmp23;
          }
          const items3 = [tmp5.buttonWrapper, (undefined === showSkip || showSkip) && tmp5.primaryButtonContainer];
          cResult[6] = tmp5.buttonWrapper;
          cResult[7] = (undefined === showSkip || showSkip) && tmp5.primaryButtonContainer;
          cResult[8] = items3;
          tmp17 = items3;
        }
        const obj13 = {
          style: tmp5.alertSubtitle,
          variant: "text-sm/medium",
          color: "text-default",
          children: subtitle,
        };
        const tmp15 = React3(Text_Text.Text, obj13);
        cResult[3] = tmp5.alertSubtitle;
        cResult[4] = subtitle;
        cResult[5] = tmp15;
        tmp13 = tmp15;
      }
      const obj14 = { style: tmp5.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
      const tmp12 = React3(Text_Text.Text, obj14);
      cResult[0] = tmp5.alertTitle;
      cResult[1] = title;
      cResult[2] = tmp12;
      tmp11 = tmp12;
    }
  : (showSkip) => {
      let Button;
      let Button2;
      let header;
      let intl;
      let intl2;
      let items1;
      let items3;
      let loading;
      let obj11;
      let obj12;
      let obj3;
      let obj5;
      let obj9;
      let onAllow;
      let onDontAllow;
      let subtitle;
      let title;
      let trailing;
      let flag = showSkip.showSkip;
      ({ title, subtitle, header, trailing, loading } = showSkip);
      if (flag === undefined) {
        flag = true;
      }
      ({ onAllow, onDontAllow } = showSkip);
      const tmp = closure_6();
      const obj = { contentContainerStyle: tmp.scrollContainer, children: items3 };
      const obj2 = { style: tmp.container, children: React3(React2, obj3) };
      const items = [header];
      obj3 = { style: tmp.alertContainer, children: hasOwnProperty(React2, obj12) };
      const obj4 = { style: tmp.alert, children: hasOwnProperty(React2, obj5) };
      obj5 = { style: tmp.alertContent, children: items1 };
      items1 = [, , ,];
      const obj6 = { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
      items1[0] = React3(Text_Text.Text, obj6);
      const obj7 = { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
      items1[1] = React3(Text_Text.Text, obj7);
      const items2 = [tmp.buttonWrapper];
      const tmp8 = flag && tmp.primaryButtonContainer;
      items2[1] = tmp8;
      const obj8 = { style: items2, children: React3(Button, obj9) };
      obj9 = {
        variant: "primary",
        size: "md",
        text: intl.string(intl3.t["2nYlT2"]),
        onPress: onAllow,
        loading,
        grow: true,
      };
      Button = components_Button_Button.Button;
      intl = intl3.intl;
      items1[2] = React3(React2, obj8);
      if (flag) {
        const obj10 = { style: tmp.buttonWrapper, children: React3(Button2, obj11) };
        obj11 = { variant: "secondary", text: intl2.string(intl3.t["5Wxrcd"]), onPress: onDontAllow, grow: true };
        Button2 = components_Button_Button.Button;
        intl2 = intl3.intl;
        flag = React3(React2, obj10);
      }
      obj12 = { children: items };
      items1[3] = flag;
      items[1] = React3(React2, obj4);
      items3 = [React3(React2, obj2)];
      const obj13 = { style: tmp.trailing, children: trailing };
      items3[1] = React3(React2, obj13);
      return hasOwnProperty(_false, obj);
    };
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default tmp7;
