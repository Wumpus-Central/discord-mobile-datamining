// === Module 12359: GuildTemplates ===

// Module 12359 (GuildTemplates)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4886 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import ListSelectionItemDefault from "ListSelectionItem" /* 11960 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12332 */;
import CreateGuildIcons from "CreateGuildIcons" /* 12360 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CreateGuildConstants_mod from "create_guild/CreateGuildConstants" /* 12356 */;
import CreateGuildConstants_mod2 from "CreateGuildConstants" /* 6468 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation, trigger;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
let CreateGuildConstants = CreateGuildConstants_mod2;
({ getGuildTemplatesMap: metroImportDefault, GuildTemplateId: metroImportAll } = CreateGuildConstants);
CreateGuildConstants = CreateGuildConstants_mod2;
({ CreateGuildModalStates: c9, GuildTemplateTriggers: c10, NUXGuildTemplatesAnalytics: unpackModuleId } = CreateGuildConstants);
({ AnalyticEvents: closure_12, AnalyticsLocations: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, contentContainer: obj2, scrollContainer: obj3, sections: obj4, headerContainer: { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" }, footerSafeAreaContainer: obj5, footerContainer: { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" }, footerTitle: { alignSelf: "center", textAlign: "center" } };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let headerContainer;
  let headerTitle;
  let items;
  let tmp10;
  let tmp12;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_16();
  ({ headerContainer, headerTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["5HZu07"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerTitle) {
    const obj2 = { style: headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = authStore2(Text_Text.Text, obj2);
    cResult[1] = tmp4.headerTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  const headerDescription = tmp4.headerDescription;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t["/k/L/j"]);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.headerDescription) {
    const obj3 = { style: headerDescription, variant: "text-sm/medium", color: "text-default", children: tmp10 };
    const tmp14 = authStore2(Text_Text.Text, obj3);
    cResult[4] = tmp4.headerDescription;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.headerContainer) {
    if (cResult[7] === tmp7) {
      let tmp15;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const obj4 = { style: headerContainer, children: items };
  items = [tmp7, tmp12];
  const tmp16 = closure_15(hasOwnProperty, obj4);
  cResult[6] = tmp4.headerContainer;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  let intl;
  let intl2;
  let items;
  const tmp = closure_16();
  const obj = { style: tmp.headerContainer, children: items };
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["5HZu07"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [authStore2(Text, obj2), ];
  const obj3 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t["/k/L/j"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = authStore2(Text2, obj3);
  return closure_15(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((trigger) => {
  let footerContainer;
  let footerTitle;
  let items;
  let tmp10;
  let tmp6;
  let tmp9;
  const tmp = trigger;
  const tmp2 = navigation;
  let obj = trigger(navigation[11]);
  const cResult = obj.c(26);
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp4 = closure_16();
  let obj2 = trigger(navigation[14]);
  navigation = obj2.useNavigation();
  const bottom = onHeightChange(navigation[15])().bottom;
  if (cResult[0] !== trigger) {
    let stringResult;
    if (trigger === constants3.NUF) {
      const intl2 = tmp(tmp2[12]).intl;
      stringResult = intl2.string(tmp(tmp2[12]).t.INo2NK);
    } else {
      const intl = tmp(tmp2[12]).intl;
      stringResult = intl.string(tmp(tmp2[12]).t.riOUtB);
    }
    cResult[0] = trigger;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== onHeightChange) {
    const fn = function f(nativeEvent) {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    };
    cResult[2] = onHeightChange;
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== bottom) {
    let obj3 = { paddingBottom: bottom };
    cResult[4] = bottom;
    cResult[5] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4.footerSafeAreaContainer) {
    let tmp11;
    let tmp13;
    let tmp15;
    if (cResult[7] === tmp10) {
      tmp11 = cResult[8];
    }
    const _Symbol = Symbol;
    ({ footerContainer, footerTitle } = tmp4);
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[12]).intl;
      const stringResult1 = intl3.string(tmp(tmp2[12]).t["N+Mi/U"]);
      cResult[9] = stringResult1;
      tmp13 = stringResult1;
    } else {
      tmp13 = cResult[9];
    }
    if (cResult[10] !== tmp4.footerTitle) {
      let obj4 = { style: footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp13 };
      const tmp17 = closure_14(tmp(tmp2[13]).Text, obj4);
      cResult[10] = tmp4.footerTitle;
      cResult[11] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[11];
    }
    if (cResult[12] === navigation) {
      let tmp18;
      if (cResult[13] === trigger) {
        tmp18 = cResult[14];
      }
      if (cResult[15] === tmp18) {
        let tmp19;
        if (cResult[16] === tmp6) {
          tmp19 = cResult[17];
        }
        if (cResult[18] === tmp4.footerContainer) {
          if (cResult[19] === tmp19) {
            let tmp22;
            if (cResult[20] === tmp15) {
              tmp22 = cResult[21];
            }
            if (cResult[22] === tmp9) {
              if (cResult[23] === tmp22) {
                let tmp26;
                if (cResult[24] === tmp11) {
                  tmp26 = cResult[25];
                }
                return tmp26;
              }
            }
            const obj5 = { style: tmp11, onLayout: tmp9, children: tmp22 };
            const tmp29 = closure_14(closure_5, obj5);
            cResult[22] = tmp9;
            cResult[23] = tmp22;
            cResult[24] = tmp11;
            cResult[25] = tmp29;
            tmp26 = tmp29;
          }
        }
        const obj6 = { style: footerContainer, children: items };
        items = [tmp15, tmp19];
        const tmp25 = closure_15(closure_5, obj6);
        cResult[18] = tmp4.footerContainer;
        cResult[19] = tmp19;
        cResult[20] = tmp15;
        cResult[21] = tmp25;
        tmp22 = tmp25;
      }
      const obj7 = { variant: "primary", grow: true, text: tmp6, onPress: tmp18 };
      const tmp21 = closure_14(tmp(tmp2[18]).Button, obj7);
      cResult[15] = tmp18;
      cResult[16] = tmp6;
      cResult[17] = tmp21;
      tmp19 = tmp21;
    }
    const fn2 = function v() {
      if (constants2.NUF === trigger) {
        const obj = NewUserAnalyticsUtils;
        obj.trackNUFStep(unpackModuleId.STEP_GUILD_TEMPLATE, unpackModuleId.STEP_GUILD_JOIN, { skip: false });
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants3.JOIN_GUILD_VIEWED);
      } else if (tmp2.IN_APP === tmp) {
        const obj4 = { location_section: map1.CREATE_JOIN_GUILD_MODAL };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(constants3.JOIN_GUILD_VIEWED, obj4);
      }
      navigation.push(constants.JOIN_SERVER, {});
    };
    cResult[12] = navigation;
    cResult[13] = trigger;
    cResult[14] = fn2;
    tmp18 = fn2;
  }
  const items1 = [tmp4.footerSafeAreaContainer, tmp10];
  cResult[6] = tmp4.footerSafeAreaContainer;
  cResult[7] = tmp10;
  cResult[8] = items1;
  tmp11 = items1;
}) : ((trigger) => {
  let closure_2;
  let intl3;
  let items1;
  let items2;
  let obj3;
  let stringResult;
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp = closure_16();
  const tmp2 = trigger;
  let obj = trigger(1490);
  dependencyMap = obj.useNavigation();
  const bottom = onHeightChange(1618)().bottom;
  if (trigger === constants3.NUF) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.INo2NK);
  } else {
    const intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t.riOUtB);
  }
  const items = [onHeightChange];
  let obj2 = {
    style: items1,
    onLayout: react.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items),
    children: closure_15(closure_5, obj3)
  };
  items1 = [tmp.footerSafeAreaContainer, { paddingBottom: bottom }];
  obj3 = { style: tmp.footerContainer, children: items2 };
  let obj4 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(tmp2(1126).t["N+Mi/U"]) };
  const Text = tmp2(4886).Text;
  intl3 = tmp2(1126).intl;
  items2 = [closure_14(Text, obj4), ];
  const obj5 = {
    variant: "primary",
    grow: true,
    text: stringResult,
    onPress() {
      if (constants2.NUF === trigger) {
        const obj = NewUserAnalyticsUtils;
        obj.trackNUFStep(unpackModuleId.STEP_GUILD_TEMPLATE, unpackModuleId.STEP_GUILD_JOIN, { skip: false });
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants3.JOIN_GUILD_VIEWED);
      } else if (tmp2.IN_APP === tmp) {
        const obj4 = { location_section: map1.CREATE_JOIN_GUILD_MODAL };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(constants3.JOIN_GUILD_VIEWED, obj4);
      }
      closure_2.push(constants.JOIN_SERVER, {});
    }
  };
  items2[1] = closure_14(tmp2(5594).Button, obj5);
  return closure_14(closure_5, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  const obj = react2;
  const cResult = obj.c(7);
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const tmp3 = CreateGuildIcons.GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id];
  if (cResult[0] === guildTemplate) {
    let tmp4;
    if (cResult[1] === onGuildTemplatePress) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === guildTemplate.label) {
      if (cResult[4] === tmp3) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
    const obj2 = { Icon: tmp3, message: guildTemplate.label, onPress: tmp4 };
    const tmp8 = authStore2(ListSelectionItemDefault, obj2);
    cResult[3] = guildTemplate.label;
    cResult[4] = tmp3;
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
  const fn = function n() {
    return onGuildTemplatePress(guildTemplate);
  };
  cResult[0] = guildTemplate;
  cResult[1] = onGuildTemplatePress;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((guildTemplate) => {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: CreateGuildIcons.GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  };
  const tmp = ListSelectionItemDefault;
  return authStore2(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((trigger) => {
  let closure_4;
  let flex;
  let fromStep;
  let items;
  let items1;
  let items2;
  let items3;
  let obj17;
  let scrollContainer;
  const tmp = trigger;
  const tmp2 = fromStep;
  let obj = trigger(fromStep[11]);
  const cResult = obj.c(62);
  trigger = trigger.trigger;
  const _location = trigger.location;
  fromStep = trigger.fromStep;
  const tmp4 = closure_16();
  const bottom = _location(fromStep[15])().bottom;
  let obj2 = trigger(fromStep[14]);
  navigation = obj2.useNavigation();
  if (cResult[0] === fromStep) {
    if (cResult[1] === _location) {
      let tmp6;
      let tmp7;
      if (cResult[2] === trigger) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let obj3 = react;
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[5] === navigation) {
        let tmp9;
        let tmp11;
        let tmp18;
        if (cResult[6] === trigger) {
          tmp9 = cResult[7];
        }
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_7();
          cResult[8] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        const first = navigation(obj3.useState(tmp11), 1)[0];
        const tmp16 = navigation(obj3.useState(110), 2);
        react = tmp16[1];
        const _Symbol2 = Symbol;
        const first1 = tmp16[0];
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function k(arg0) {
            closure_4(arg0);
          };
          cResult[9] = fn3;
          tmp18 = fn3;
        } else {
          tmp18 = cResult[9];
        }
        const sum = first1 + bottom + 16;
        if (cResult[10] === tmp4.contentContainer) {
          let tmp20;
          let tmp21;
          let tmp22;
          if (cResult[11] === tmp4.flex) {
            tmp20 = cResult[12];
          }
          ({ flex, scrollContainer } = tmp4);
          if (cResult[13] !== sum) {
            const obj4 = { paddingBottom: sum };
            cResult[13] = sum;
            cResult[14] = obj4;
            tmp21 = obj4;
          } else {
            tmp21 = cResult[14];
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_14(closure_17, {});
            cResult[15] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[15];
          }
          if (cResult[16] === tmp9) {
            let tmp29;
            let tmp33;
            if (cResult[17] === first[constants.CREATE]) {
              tmp29 = cResult[18];
            }
            const _Symbol4 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[12]).intl;
              const stringResult = intl.string(tmp(tmp2[12]).t.JGDkfg);
              cResult[19] = stringResult;
              tmp33 = stringResult;
            } else {
              tmp33 = cResult[19];
            }
            if (cResult[20] === tmp9) {
              let tmp36;
              if (cResult[21] === first[constants.GAMING]) {
                tmp36 = cResult[22];
              }
              if (cResult[23] === tmp9) {
                let tmp41;
                if (cResult[24] === first[constants.SCHOOL_CLUB]) {
                  tmp41 = cResult[25];
                }
                if (cResult[26] === tmp9) {
                  let tmp46;
                  if (cResult[27] === first[constants.STUDY]) {
                    tmp46 = cResult[28];
                  }
                  if (cResult[29] === tmp9) {
                    let tmp51;
                    if (cResult[30] === first[constants.FRIENDS]) {
                      tmp51 = cResult[31];
                    }
                    if (cResult[32] === tmp9) {
                      let tmp56;
                      if (cResult[33] === first[constants.CREATORS]) {
                        tmp56 = cResult[34];
                      }
                      if (cResult[35] === tmp9) {
                        let tmp61;
                        if (cResult[36] === first[constants.LOCAL_COMMUNITY]) {
                          tmp61 = cResult[37];
                        }
                        if (cResult[38] === tmp36) {
                          if (cResult[39] === tmp41) {
                            if (cResult[40] === tmp46) {
                              if (cResult[41] === tmp51) {
                                if (cResult[42] === tmp56) {
                                  let tmp65;
                                  if (cResult[43] === tmp61) {
                                    tmp65 = cResult[44];
                                  }
                                  if (cResult[45] === tmp4.sections) {
                                    if (cResult[46] === tmp29) {
                                      let tmp68;
                                      if (cResult[47] === tmp65) {
                                        tmp68 = cResult[48];
                                      }
                                      if (cResult[49] === tmp4.scrollContainer) {
                                        if (cResult[50] === tmp68) {
                                          let tmp72;
                                          let tmp76;
                                          if (cResult[51] === tmp21) {
                                            tmp72 = cResult[52];
                                          }
                                          if (cResult[53] !== trigger) {
                                            const obj5 = { trigger, onHeightChange: tmp18 };
                                            const tmp79 = closure_14(closure_18, obj5);
                                            cResult[53] = trigger;
                                            cResult[54] = tmp79;
                                            tmp76 = tmp79;
                                          } else {
                                            tmp76 = cResult[54];
                                          }
                                          if (cResult[55] === tmp4.flex) {
                                            if (cResult[56] === tmp72) {
                                              let tmp80;
                                              if (cResult[57] === tmp76) {
                                                tmp80 = cResult[58];
                                              }
                                              if (cResult[59] === tmp80) {
                                                let tmp84;
                                                if (cResult[60] === tmp20) {
                                                  tmp84 = cResult[61];
                                                }
                                                return tmp84;
                                              }
                                              const rect = { top: true, left: true, right: true, style: tmp20, children: tmp80 };
                                              const tmp86 = closure_14(tmp(tmp2[22]).SafeAreaPaddingView, rect);
                                              cResult[59] = tmp80;
                                              cResult[60] = tmp20;
                                              cResult[61] = tmp86;
                                              tmp84 = tmp86;
                                            }
                                          }
                                          const obj6 = { style: flex, children: items };
                                          items = [tmp72, tmp76];
                                          const tmp83 = closure_15(closure_5, obj6);
                                          cResult[55] = tmp4.flex;
                                          cResult[56] = tmp72;
                                          cResult[57] = tmp76;
                                          cResult[58] = tmp83;
                                          tmp80 = tmp83;
                                        }
                                      }
                                      const obj7 = { style: scrollContainer, contentContainerStyle: tmp21, children: items1 };
                                      items1 = [tmp22, tmp68];
                                      const tmp75 = closure_15(closure_6, obj7);
                                      cResult[49] = tmp4.scrollContainer;
                                      cResult[50] = tmp68;
                                      cResult[51] = tmp21;
                                      cResult[52] = tmp75;
                                      tmp72 = tmp75;
                                    }
                                  }
                                  const obj8 = { style: tmp26, children: items2 };
                                  items2 = [tmp29, tmp65];
                                  const tmp71 = closure_15(closure_5, obj8);
                                  cResult[45] = tmp4.sections;
                                  cResult[46] = tmp29;
                                  cResult[47] = tmp65;
                                  cResult[48] = tmp71;
                                  tmp68 = tmp71;
                                }
                              }
                            }
                          }
                        }
                        const obj9 = { title: tmp33, hasIcons: true, children: items3 };
                        items3 = [tmp36, tmp41, tmp46, tmp51, tmp56, tmp61];
                        const tmp67 = closure_15(tmp(tmp2[21]).TableRowGroup, obj9);
                        cResult[38] = tmp36;
                        cResult[39] = tmp41;
                        cResult[40] = tmp46;
                        cResult[41] = tmp51;
                        cResult[42] = tmp56;
                        cResult[43] = tmp61;
                        cResult[44] = tmp67;
                        tmp65 = tmp67;
                      }
                      const obj10 = { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress: tmp9 };
                      const tmp64 = closure_14(closure_19, obj10);
                      cResult[35] = tmp9;
                      cResult[36] = first[constants.LOCAL_COMMUNITY];
                      cResult[37] = tmp64;
                      tmp61 = tmp64;
                    }
                    const obj11 = { guildTemplate: first[constants.CREATORS], onGuildTemplatePress: tmp9 };
                    const tmp59 = closure_14(closure_19, obj11);
                    cResult[32] = tmp9;
                    cResult[33] = first[constants.CREATORS];
                    cResult[34] = tmp59;
                    tmp56 = tmp59;
                  }
                  const obj12 = { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress: tmp9 };
                  const tmp54 = closure_14(closure_19, obj12);
                  cResult[29] = tmp9;
                  cResult[30] = first[constants.FRIENDS];
                  cResult[31] = tmp54;
                  tmp51 = tmp54;
                }
                const obj13 = { guildTemplate: first[constants.STUDY], onGuildTemplatePress: tmp9 };
                const tmp49 = closure_14(closure_19, obj13);
                cResult[26] = tmp9;
                cResult[27] = first[constants.STUDY];
                cResult[28] = tmp49;
                tmp46 = tmp49;
              }
              const obj14 = { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress: tmp9 };
              const tmp44 = closure_14(closure_19, obj14);
              cResult[23] = tmp9;
              cResult[24] = first[constants.SCHOOL_CLUB];
              cResult[25] = tmp44;
              tmp41 = tmp44;
            }
            const obj15 = { guildTemplate: first[constants.GAMING], onGuildTemplatePress: tmp9 };
            const tmp39 = closure_14(closure_19, obj15);
            cResult[20] = tmp9;
            cResult[21] = first[constants.GAMING];
            cResult[22] = tmp39;
            tmp36 = tmp39;
          }
          const obj16 = { hasIcons: true, children: closure_14(closure_19, obj17) };
          obj17 = { guildTemplate: first[constants.CREATE], onGuildTemplatePress: tmp9 };
          const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
          const tmp32 = closure_14(TableRowGroup, obj16);
          cResult[16] = tmp9;
          cResult[17] = first[constants.CREATE];
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
        const items4 = [, ];
        ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
        cResult[10] = tmp4.contentContainer;
        cResult[11] = tmp4.flex;
        cResult[12] = items4;
        tmp20 = items4;
      }
      const fn2 = function f(guildTemplate) {
        const obj = { guildTemplate, trigger };
        navigation.push(constants.CREATION_INTENT, obj);
        if (trigger === constants2.IN_APP) {
          const obj3 = { template_name: guildTemplate.id };
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(constants3.GUILD_TEMPLATE_SELECTED, obj3);
        }
      };
      cResult[5] = navigation;
      cResult[6] = trigger;
      cResult[7] = fn2;
      tmp9 = fn2;
    }
  }
  const fn = function c() {
    if (constants2.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      const trackNUFStep = NewUserAnalyticsUtils.trackNUFStep;
      NewUserAnalyticsUtils;
      if (fromStep == null) {
        STEP_REGISTRATION = unpackModuleId.STEP_REGISTRATION;
      }
      trackNUFStep(STEP_REGISTRATION, unpackModuleId.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      const track = AnalyticsUtilsDefault.track;
      const OPEN_MODAL = constants3.OPEN_MODAL;
      AnalyticsUtilsDefault;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      track(OPEN_MODAL, obj);
    }
  };
  const items5 = [trigger, _location, fromStep];
  cResult[0] = fromStep;
  cResult[1] = _location;
  cResult[2] = trigger;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp7 = items5;
  tmp6 = fn;
}) : ((trigger) => {
  let _undefined;
  let c4;
  let closure_3;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj2;
  let obj4;
  let obj7;
  let tmp5;
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  react = undefined;
  function onGuildTemplatePress(guildTemplate) {
    const obj = { guildTemplate, trigger };
    closure_3.push(constants.CREATION_INTENT, obj);
    if (trigger === constants2.IN_APP) {
      const obj3 = { template_name: guildTemplate.id };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants3.GUILD_TEMPLATE_SELECTED, obj3);
    }
  }
  const tmp = closure_16();
  const bottom = _location(fromStep[15])().bottom;
  let obj = trigger(fromStep[14]);
  _slicedToArray = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = react.useEffect(() => {
    if (constants2.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      const trackNUFStep = NewUserAnalyticsUtils.trackNUFStep;
      NewUserAnalyticsUtils;
      if (fromStep == null) {
        STEP_REGISTRATION = unpackModuleId.STEP_REGISTRATION;
      }
      trackNUFStep(STEP_REGISTRATION, unpackModuleId.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      const track = AnalyticsUtilsDefault.track;
      const OPEN_MODAL = constants3.OPEN_MODAL;
      AnalyticsUtilsDefault;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      track(OPEN_MODAL, obj);
    }
  }, items);
  const first = _slicedToArray(react.useState(closure_7()), 1)[0];
  [tmp5, c4] = react.useState(110);
  _slicedToArray(react.useState(110), 2);
  const callback = react.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  const rect = { top: true, left: true, right: true, style: items1, children: closure_15(closure_5, obj2) };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj2 = { style: tmp.flex, children: items5 };
  let obj3 = { style: tmp.scrollContainer, contentContainerStyle: obj4, children: items2 };
  obj4 = { paddingBottom: tmp5 + bottom + 16 };
  const SafeAreaPaddingView = trigger(fromStep[22]).SafeAreaPaddingView;
  items2 = [closure_14(closure_17, {}), ];
  const obj5 = { style: tmp.sections, children: items3 };
  const obj6 = { hasIcons: true, children: closure_14(closure_19, obj7) };
  obj7 = { guildTemplate: first[constants.CREATE], onGuildTemplatePress };
  const TableRowGroup = trigger(fromStep[21]).TableRowGroup;
  items3 = [closure_14(TableRowGroup, obj6), ];
  const obj8 = { title: intl.string(trigger(fromStep[12]).t.JGDkfg), hasIcons: true, children: items4 };
  const TableRowGroup2 = trigger(fromStep[21]).TableRowGroup;
  intl = trigger(fromStep[12]).intl;
  items4 = [, , , , , ];
  const obj9 = { guildTemplate: first[constants.GAMING], onGuildTemplatePress };
  items4[0] = closure_14(closure_19, obj9);
  const obj10 = { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress };
  items4[1] = closure_14(closure_19, obj10);
  const obj11 = { guildTemplate: first[constants.STUDY], onGuildTemplatePress };
  items4[2] = closure_14(closure_19, obj11);
  const obj12 = { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress };
  items4[3] = closure_14(closure_19, obj12);
  const obj13 = { guildTemplate: first[constants.CREATORS], onGuildTemplatePress };
  items4[4] = closure_14(closure_19, obj13);
  const obj14 = { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress };
  items4[5] = closure_14(closure_19, obj14);
  items3[1] = closure_15(TableRowGroup2, obj8);
  items2[1] = closure_15(closure_5, obj5);
  items5 = [closure_15(closure_6, obj3), closure_14(closure_18, { trigger, onHeightChange: callback })];
  return closure_14(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default tmp8;