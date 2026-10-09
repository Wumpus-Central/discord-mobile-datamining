// discord_app/modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  scrollContainer: { minHeight: "100%" },
  container: { flexGrow: 1, alignItems: "center", justifyContent: "center" },
  alertContainer: { paddingTop: 80 + fn(6263).NAV_BAR_HEIGHT },
  alertContainerInsideCard: null,
  alert: null,
  alertInsideCard: null,
  alertContent: null,
  alertContentInsideCard: null,
  header: null,
  alertTitle: null,
  alertSubtitle: null,
  buttonWrapper: null,
  primaryButtonContainer: null,
  trailing: null,
};
let obj3 = { paddingTop: 80 + fn(6263).NAV_BAR_HEIGHT };
obj2.alertContainerInsideCard = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
let obj4 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.alert = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.alertInsideCard = { width: "100%", maxWidth: 320, alignSelf: "center" };
obj2.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
obj2.alertContentInsideCard = { width: "100%" };
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.header = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.alertTitle = { paddingBottom: 8, textAlign: "center" };
let obj6 = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.alertSubtitle = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.buttonWrapper = { flexDirection: "row" };
let obj7 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.primaryButtonContainer = { marginBottom: nativeDefault.space.PX_12 };
let obj8 = { marginBottom: nativeDefault.space.PX_12 };
obj2.trailing = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj9 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NewUserPermissionsOnboarding(arg0) {
      const cResult = c.c(59);
      ({ title, subtitle, header, headerInsideCard, trailing, loading, showSkip, onAllow, onDontAllow } = arg0);
      const tmp6 = closure_6();
      let alertContainerInsideCard = tmp4;
      ({ scrollContainer, container } = tmp6);
      if (undefined !== headerInsideCard && headerInsideCard) {
        alertContainerInsideCard = tmp6.alertContainerInsideCard;
      }
      if (cResult[0] === tmp6.alertContainer) {
        if (cResult[1] === alertContainerInsideCard) {
          let tmp7 = cResult[2];
        }
        let tmp8 = !tmp4;
        if (!tmp4) {
          tmp8 = header;
        }
        let alertInsideCard = tmp4;
        if (tmp4) {
          alertInsideCard = tmp6.alertInsideCard;
        }
        if (cResult[3] === tmp6.alert) {
          if (cResult[4] === alertInsideCard) {
            let tmp9 = cResult[5];
          }
          let alertContentInsideCard = tmp4;
          if (tmp4) {
            alertContentInsideCard = tmp6.alertContentInsideCard;
          }
          if (cResult[6] === tmp6.alertContent) {
            if (cResult[7] === alertContentInsideCard) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] === header) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp6.header) {
                  let tmp11 = cResult[12];
                }
                if (cResult[13] === tmp6.alertTitle) {
                  if (cResult[14] === title) {
                    let tmp16 = cResult[15];
                  }
                  if (cResult[16] === tmp6.alertSubtitle) {
                    if (cResult[17] === subtitle) {
                      let tmp19 = cResult[18];
                    }
                    let primaryButtonContainer = tmp5;
                    if (tmp5) {
                      primaryButtonContainer = tmp6.primaryButtonContainer;
                    }
                    if (cResult[19] === tmp6.buttonWrapper) {
                      if (cResult[20] === primaryButtonContainer) {
                        let tmp22 = cResult[21];
                      }
                      const _Symbol = Symbol;
                      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = util.intl;
                        const stringResult = intl.string(util.t["2nYlT2"]);
                        cResult[22] = stringResult;
                        let tmp24 = stringResult;
                      } else {
                        tmp24 = cResult[22];
                      }
                      if (cResult[23] === loading) {
                        if (cResult[24] === onAllow) {
                          let tmp26 = cResult[25];
                        }
                        if (cResult[26] === tmp22) {
                          if (cResult[27] === tmp26) {
                            let tmp29 = cResult[28];
                          }
                          if (cResult[29] === onDontAllow) {
                            if (cResult[30] === tmp5) {
                              if (cResult[31] === tmp6.buttonWrapper) {
                                let tmp33 = cResult[32];
                              }
                              if (cResult[33] === tmp10) {
                                if (cResult[34] === tmp11) {
                                  if (cResult[35] === tmp16) {
                                    if (cResult[36] === tmp19) {
                                      if (cResult[37] === tmp29) {
                                        if (cResult[38] === tmp33) {
                                          let tmp37 = cResult[39];
                                        }
                                        if (cResult[40] === tmp37) {
                                          if (cResult[41] === tmp9) {
                                            let tmp41 = cResult[42];
                                          }
                                          if (cResult[43] === tmp41) {
                                            if (cResult[44] === tmp8) {
                                              let tmp45 = cResult[45];
                                            }
                                            if (cResult[46] === tmp45) {
                                              if (cResult[47] === tmp7) {
                                                let tmp49 = cResult[48];
                                              }
                                              if (cResult[49] === tmp6.container) {
                                                if (cResult[50] === tmp49) {
                                                  let tmp53 = cResult[51];
                                                }
                                                if (cResult[52] === tmp6.trailing) {
                                                  if (cResult[53] === trailing) {
                                                    let tmp57 = cResult[54];
                                                  }
                                                  if (cResult[55] === tmp6.scrollContainer) {
                                                    if (cResult[56] === tmp53) {
                                                      if (cResult[57] === tmp57) {
                                                        let tmp61 = cResult[58];
                                                      }
                                                      return tmp61;
                                                    }
                                                  }
                                                  const obj2 = {
                                                    contentContainerStyle: scrollContainer,
                                                    children: null,
                                                  };
                                                  const items = [tmp53, tmp57];
                                                  obj2.children = items;
                                                  const tmp64 = hasOwnProperty(React3, obj2);
                                                  cResult[55] = tmp6.scrollContainer;
                                                  cResult[56] = tmp53;
                                                  cResult[57] = tmp57;
                                                  cResult[58] = tmp64;
                                                  tmp61 = tmp64;
                                                }
                                                const obj3 = { style: tmp6.trailing, children: trailing };
                                                const tmp60 = React4(React2, obj3);
                                                cResult[52] = tmp6.trailing;
                                                cResult[53] = trailing;
                                                cResult[54] = tmp60;
                                                tmp57 = tmp60;
                                              }
                                              const obj4 = { style: container, children: tmp49 };
                                              const tmp56 = React4(React2, obj4);
                                              cResult[49] = tmp6.container;
                                              cResult[50] = tmp49;
                                              cResult[51] = tmp56;
                                              tmp53 = tmp56;
                                            }
                                            const obj5 = { style: tmp7, children: tmp45 };
                                            const tmp52 = React4(React2, obj5);
                                            cResult[46] = tmp45;
                                            cResult[47] = tmp7;
                                            cResult[48] = tmp52;
                                            tmp49 = tmp52;
                                          }
                                          const obj6 = { children: null };
                                          const items1 = [tmp8, tmp41];
                                          obj6.children = items1;
                                          const tmp48 = hasOwnProperty(React2, obj6);
                                          cResult[43] = tmp41;
                                          cResult[44] = tmp8;
                                          cResult[45] = tmp48;
                                          tmp45 = tmp48;
                                        }
                                        const obj7 = { style: tmp9, children: tmp37 };
                                        const tmp44 = React4(React2, obj7);
                                        cResult[40] = tmp37;
                                        cResult[41] = tmp9;
                                        cResult[42] = tmp44;
                                        tmp41 = tmp44;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj8 = { style: tmp10, children: null };
                              const items2 = [tmp11, tmp16, tmp19, tmp29, tmp33];
                              obj8.children = items2;
                              const tmp40 = hasOwnProperty(React2, obj8);
                              cResult[33] = tmp10;
                              cResult[34] = tmp11;
                              cResult[35] = tmp16;
                              cResult[36] = tmp19;
                              cResult[37] = tmp29;
                              cResult[38] = tmp33;
                              cResult[39] = tmp40;
                              tmp37 = tmp40;
                            }
                          }
                          let tmp34 = tmp5;
                          if (tmp5) {
                            const obj9 = { style: tmp6.buttonWrapper, children: null };
                            const obj10 = { variant: "secondary", text: null, onPress: null, grow: true };
                            const intl2 = util.intl;
                            obj10.text = intl2.string(util.t["5Wxrcd"]);
                            obj10.onPress = onDontAllow;
                            obj9.children = React4(components_Button_Button.Button, obj10);
                            tmp34 = React4(React2, obj9);
                          }
                          cResult[29] = onDontAllow;
                          cResult[30] = tmp5;
                          cResult[31] = tmp6.buttonWrapper;
                          cResult[32] = tmp34;
                          tmp33 = tmp34;
                        }
                        const obj11 = { style: tmp22, children: tmp26 };
                        const tmp32 = React4(React2, obj11);
                        cResult[26] = tmp22;
                        cResult[27] = tmp26;
                        cResult[28] = tmp32;
                        tmp29 = tmp32;
                      }
                      const obj12 = {
                        variant: "primary",
                        size: "md",
                        text: tmp24,
                        onPress: onAllow,
                        loading,
                        grow: true,
                      };
                      const tmp28 = React4(components_Button_Button.Button, obj12);
                      cResult[23] = loading;
                      cResult[24] = onAllow;
                      cResult[25] = tmp28;
                      tmp26 = tmp28;
                    }
                    const items3 = [tmp6.buttonWrapper, primaryButtonContainer];
                    cResult[19] = tmp6.buttonWrapper;
                    cResult[20] = primaryButtonContainer;
                    cResult[21] = items3;
                    tmp22 = items3;
                  }
                  const obj13 = {
                    style: tmp6.alertSubtitle,
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: subtitle,
                  };
                  const tmp21 = React4(Text_Text.Text, obj13);
                  cResult[16] = tmp6.alertSubtitle;
                  cResult[17] = subtitle;
                  cResult[18] = tmp21;
                  tmp19 = tmp21;
                }
                const obj14 = {
                  style: tmp6.alertTitle,
                  variant: "heading-lg/bold",
                  color: "text-default",
                  children: title,
                };
                const tmp18 = React4(Text_Text.Text, obj14);
                cResult[13] = tmp6.alertTitle;
                cResult[14] = title;
                cResult[15] = tmp18;
                tmp16 = tmp18;
              }
            }
            let tmp12 = tmp4;
            if (tmp4) {
              tmp12 = null != header;
            }
            if (tmp12) {
              const obj15 = { style: tmp6.header, children: header };
              tmp12 = React4(React2, obj15);
            }
            cResult[9] = header;
            cResult[10] = tmp4;
            cResult[11] = tmp6.header;
            cResult[12] = tmp12;
            tmp11 = tmp12;
          }
          const items4 = [tmp6.alertContent, alertContentInsideCard];
          cResult[6] = tmp6.alertContent;
          cResult[7] = alertContentInsideCard;
          cResult[8] = items4;
          tmp10 = items4;
        }
        const items5 = [tmp6.alert, alertInsideCard];
        cResult[3] = tmp6.alert;
        cResult[4] = alertInsideCard;
        cResult[5] = items5;
        tmp9 = items5;
      }
      const items6 = [tmp6.alertContainer, alertContainerInsideCard];
      cResult[0] = tmp6.alertContainer;
      cResult[1] = alertContainerInsideCard;
      cResult[2] = items6;
      tmp7 = items6;
    }
  : function NewUserPermissionsOnboarding(arg0) {
      ({ header, headerInsideCard } = arg0);
      ({ title, subtitle } = arg0);
      if (headerInsideCard === undefined) {
        headerInsideCard = false;
      }
      ({ showSkip, trailing, loading } = arg0);
      if (showSkip === undefined) {
        showSkip = true;
      }
      ({ onAllow, onDontAllow } = arg0);
      const tmp = closure_6();
      const obj = { contentContainerStyle: tmp.scrollContainer, children: null };
      const obj2 = { style: tmp.container, children: null };
      const items = [tmp.alertContainer];
      let alertContainerInsideCard = headerInsideCard;
      if (headerInsideCard) {
        alertContainerInsideCard = tmp.alertContainerInsideCard;
      }
      const obj3 = { style: items, children: null };
      items[1] = alertContainerInsideCard;
      let tmp6 = !headerInsideCard;
      if (!headerInsideCard) {
        tmp6 = header;
      }
      const items1 = [tmp6];
      const items2 = [tmp.alert];
      let alertInsideCard = headerInsideCard;
      if (headerInsideCard) {
        alertInsideCard = tmp.alertInsideCard;
      }
      const obj4 = { style: items2, children: null };
      items2[1] = alertInsideCard;
      const items3 = [tmp.alertContent];
      let alertContentInsideCard = headerInsideCard;
      if (headerInsideCard) {
        alertContentInsideCard = tmp.alertContentInsideCard;
      }
      const obj5 = { style: items3, children: null };
      items3[1] = alertContentInsideCard;
      if (headerInsideCard) {
        headerInsideCard = null != header;
      }
      if (headerInsideCard) {
        const obj6 = { style: tmp.header, children: header };
        headerInsideCard = React4(React2, obj6);
      }
      const items4 = [
        headerInsideCard,
        React4(Text_Text.Text, {
          style: tmp.alertTitle,
          variant: "heading-lg/bold",
          color: "text-default",
          children: title,
        }),
        React4(Text_Text.Text, {
          style: tmp.alertSubtitle,
          variant: "text-sm/medium",
          color: "text-default",
          children: subtitle,
        }),
        ,
      ];
      const items5 = [tmp.buttonWrapper];
      let primaryButtonContainer = showSkip;
      if (showSkip) {
        primaryButtonContainer = tmp.primaryButtonContainer;
      }
      const obj9 = { style: items5, children: null };
      items5[1] = primaryButtonContainer;
      const obj10 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
      const intl = util.intl;
      obj10.text = intl.string(util.t["2nYlT2"]);
      obj10.onPress = onAllow;
      obj10.loading = loading;
      obj9.children = React4(components_Button_Button.Button, obj10);
      items4[3] = React4(React2, obj9);
      if (showSkip) {
        const obj11 = { style: tmp.buttonWrapper, children: null };
        const obj12 = { variant: "secondary", text: null, onPress: null, grow: true };
        const intl2 = util.intl;
        obj12.text = intl2.string(util.t["5Wxrcd"]);
        obj12.onPress = onDontAllow;
        obj11.children = React4(components_Button_Button.Button, obj12);
        showSkip = React4(React2, obj11);
      }
      const obj13 = { children: null };
      items4[4] = showSkip;
      obj5.children = items4;
      obj4.children = hasOwnProperty(React2, obj5);
      items1[1] = React4(React2, obj4);
      obj13.children = items1;
      obj3.children = hasOwnProperty(React2, obj13);
      obj2.children = React4(React2, obj3);
      const items6 = [React4(React2, obj2), React4(React2, { style: tmp.trailing, children: trailing })];
      obj.children = items6;
      return hasOwnProperty(React3, obj);
    };
