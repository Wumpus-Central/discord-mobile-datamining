// === Module 12337: NewUserPermissionsOnboarding ===

// Module 12337 (NewUserPermissionsOnboarding)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: { paddingTop: 80 + fn(6068).NAV_BAR_HEIGHT }, alert: null, alertContent: null, alertTitle: null, alertSubtitle: null, buttonWrapper: null, primaryButtonContainer: null, trailing: null };
let obj3 = { paddingTop: 80 + fn(6068).NAV_BAR_HEIGHT };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.alert = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
obj2.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
obj2.alertTitle = { paddingBottom: 8, textAlign: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
obj2.alertSubtitle = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.buttonWrapper = { flexDirection: "row" };
let obj5 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.primaryButtonContainer = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.trailing = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(45);
  ({ title, subtitle, header, trailing, loading, showSkip, onAllow, onDontAllow } = arg0);
  const tmp5 = closure_6();
  if (cResult[0] === tmp5.alertTitle) {
    if (cResult[1] === title) {
      let tmp11 = cResult[2];
    }
    if (cResult[3] === tmp5.alertSubtitle) {
      if (cResult[4] === subtitle) {
        let tmp13 = cResult[5];
      }
      let primaryButtonContainer = tmp4;
      if (tmp4) {
        primaryButtonContainer = tmp5.primaryButtonContainer;
      }
      if (cResult[6] === tmp5.buttonWrapper) {
        if (cResult[7] === primaryButtonContainer) {
          let tmp16 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["2nYlT2"]);
          cResult[9] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] === loading) {
          if (cResult[11] === onAllow) {
            let tmp20 = cResult[12];
          }
          if (cResult[13] === tmp16) {
            if (cResult[14] === tmp20) {
              let tmp23 = cResult[15];
            }
            if (cResult[16] === onDontAllow) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp5.buttonWrapper) {
                  let tmp27 = cResult[19];
                }
                if (cResult[20] === tmp5.alertContent) {
                  if (cResult[21] === tmp23) {
                    if (cResult[22] === tmp27) {
                      if (cResult[23] === tmp11) {
                        if (cResult[24] === tmp13) {
                          let tmp31 = cResult[25];
                        }
                        if (cResult[26] === tmp5.alert) {
                          if (cResult[27] === tmp31) {
                            let tmp35 = cResult[28];
                          }
                          if (cResult[29] === header) {
                            if (cResult[30] === tmp35) {
                              let tmp39 = cResult[31];
                            }
                            if (cResult[32] === tmp5.alertContainer) {
                              if (cResult[33] === tmp39) {
                                let tmp43 = cResult[34];
                              }
                              if (cResult[35] === tmp5.container) {
                                if (cResult[36] === tmp43) {
                                  let tmp47 = cResult[37];
                                }
                                if (cResult[38] === tmp5.trailing) {
                                  if (cResult[39] === trailing) {
                                    let tmp51 = cResult[40];
                                  }
                                  if (cResult[41] === tmp5.scrollContainer) {
                                    if (cResult[42] === tmp47) {
                                      if (cResult[43] === tmp51) {
                                        let tmp55 = cResult[44];
                                      }
                                      return tmp55;
                                    }
                                  }
                                  const obj2 = { contentContainerStyle: tmp6, children: null };
                                  const items = [tmp47, tmp51];
                                  obj2.children = items;
                                  const tmp58 = hasOwnProperty(React3, obj2);
                                  cResult[41] = tmp5.scrollContainer;
                                  cResult[42] = tmp47;
                                  cResult[43] = tmp51;
                                  cResult[44] = tmp58;
                                  tmp55 = tmp58;
                                }
                                const obj3 = { style: tmp5.trailing, children: trailing };
                                const tmp54 = React4(React2, obj3);
                                cResult[38] = tmp5.trailing;
                                cResult[39] = trailing;
                                cResult[40] = tmp54;
                                tmp51 = tmp54;
                              }
                              const obj4 = { style: tmp7, children: tmp43 };
                              const tmp50 = React4(React2, obj4);
                              cResult[35] = tmp5.container;
                              cResult[36] = tmp43;
                              cResult[37] = tmp50;
                              tmp47 = tmp50;
                            }
                            const obj5 = { style: tmp8, children: tmp39 };
                            const tmp46 = React4(React2, obj5);
                            cResult[32] = tmp5.alertContainer;
                            cResult[33] = tmp39;
                            cResult[34] = tmp46;
                            tmp43 = tmp46;
                          }
                          const obj6 = { children: null };
                          const items1 = [header, tmp35];
                          obj6.children = items1;
                          const tmp42 = hasOwnProperty(React2, obj6);
                          cResult[29] = header;
                          cResult[30] = tmp35;
                          cResult[31] = tmp42;
                          tmp39 = tmp42;
                        }
                        const obj7 = { style: tmp9, children: tmp31 };
                        const tmp38 = React4(React2, obj7);
                        cResult[26] = tmp5.alert;
                        cResult[27] = tmp31;
                        cResult[28] = tmp38;
                        tmp35 = tmp38;
                      }
                    }
                  }
                }
                const obj8 = { style: tmp10, children: null };
                const items2 = [tmp11, tmp13, tmp23, tmp27];
                obj8.children = items2;
                const tmp34 = hasOwnProperty(React2, obj8);
                cResult[20] = tmp5.alertContent;
                cResult[21] = tmp23;
                cResult[22] = tmp27;
                cResult[23] = tmp11;
                cResult[24] = tmp13;
                cResult[25] = tmp34;
                tmp31 = tmp34;
              }
            }
            let tmp28 = tmp4;
            if (tmp4) {
              const obj9 = { style: tmp5.buttonWrapper, children: null };
              const obj10 = { variant: "secondary", text: null, onPress: null, grow: true };
              const intl2 = util.intl;
              obj10.text = intl2.string(util.t["5Wxrcd"]);
              obj10.onPress = onDontAllow;
              obj9.children = React4(components_Button_Button.Button, obj10);
              tmp28 = React4(React2, obj9);
            }
            cResult[16] = onDontAllow;
            cResult[17] = tmp4;
            cResult[18] = tmp5.buttonWrapper;
            cResult[19] = tmp28;
            tmp27 = tmp28;
          }
          const obj11 = { style: tmp16, children: tmp20 };
          const tmp26 = React4(React2, obj11);
          cResult[13] = tmp16;
          cResult[14] = tmp20;
          cResult[15] = tmp26;
          tmp23 = tmp26;
        }
        const obj12 = { variant: "primary", size: "md", text: tmp18, onPress: onAllow, loading, grow: true };
        const tmp22 = React4(components_Button_Button.Button, obj12);
        cResult[10] = loading;
        cResult[11] = onAllow;
        cResult[12] = tmp22;
        tmp20 = tmp22;
      }
      const items3 = [tmp5.buttonWrapper, primaryButtonContainer];
      cResult[6] = tmp5.buttonWrapper;
      cResult[7] = primaryButtonContainer;
      cResult[8] = items3;
      tmp16 = items3;
    }
    const obj13 = { style: tmp5.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    const tmp15 = React4(Text_Text.Text, obj13);
    cResult[3] = tmp5.alertSubtitle;
    cResult[4] = subtitle;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  }
  const tmp12 = React4(Text_Text.Text, { style: tmp5.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title });
  cResult[0] = tmp5.alertTitle;
  cResult[1] = title;
  cResult[2] = tmp12;
  tmp11 = tmp12;
  const obj14 = { style: tmp5.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
}) : ((showSkip) => {
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.alertContainer, children: null };
  const items = [header, ];
  const obj4 = { style: tmp.alert, children: null };
  const obj5 = { style: tmp.alertContent, children: null };
  const items1 = [React4(Text_Text.Text, { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title }), React4(Text_Text.Text, { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle }), , ];
  const items2 = [tmp.buttonWrapper, ];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  const obj8 = { style: items2, children: null };
  items2[1] = primaryButtonContainer;
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
  const intl = util.intl;
  obj9.text = intl.string(util.t["2nYlT2"]);
  obj9.onPress = onAllow;
  obj9.loading = loading;
  obj8.children = React4(components_Button_Button.Button, obj9);
  items1[2] = React4(React2, obj8);
  if (flag) {
    const obj10 = { style: tmp.buttonWrapper, children: null };
    const obj11 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl2 = util.intl;
    obj11.text = intl2.string(util.t["5Wxrcd"]);
    obj11.onPress = onDontAllow;
    obj10.children = React4(components_Button_Button.Button, obj11);
    flag = React4(React2, obj10);
  }
  const obj12 = { children: null };
  items1[3] = flag;
  obj5.children = items1;
  obj4.children = hasOwnProperty(React2, obj5);
  items[1] = React4(React2, obj4);
  obj12.children = items;
  obj3.children = hasOwnProperty(React2, obj12);
  obj2.children = React4(React2, obj3);
  const items3 = [React4(React2, obj2), React4(React2, { style: tmp.trailing, children: trailing })];
  obj.children = items3;
  return hasOwnProperty(React3, obj);
});