// === Module 12374: GuildTemplates ===

// Module 12374 (GuildTemplates)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4892 */;
import ListSelectionItemDefault from "ListSelectionItem" /* 11974 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12347 */;
import CreateGuildIcons from "CreateGuildIcons" /* 12375 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
let CreateGuildConstants = fn(12371);
({ getGuildTemplatesMap: closure_7, GuildTemplateId: closure_8 } = CreateGuildConstants);
CreateGuildConstants = fn(6475);
({ CreateGuildModalStates: closure_9, GuildTemplateTriggers: c10, NUXGuildTemplatesAnalytics: closure_11 } = CreateGuildConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_12, AnalyticsLocations: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { flex: { flex: 1 }, contentContainer: { marginTop: fn(6075).NAV_BAR_HEIGHT }, scrollContainer: null, sections: null, headerContainer: null, headerTitle: null, headerDescription: null, footerSafeAreaContainer: null, footerContainer: null, footerTitle: null };
let obj3 = { marginTop: fn(6075).NAV_BAR_HEIGHT };
obj2.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj2.headerContainer = { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj5 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj2.footerSafeAreaContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj2.footerContainer = { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" };
obj2.footerTitle = { alignSelf: "center", textAlign: "center" };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_16();
  ({ headerContainer, headerTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["5HZu07"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerTitle) {
    const obj2 = { style: headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = state(Text_Text.Text, obj2);
    cResult[1] = tmp4.headerTitle;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["/k/L/j"]);
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.headerDescription) {
    const obj3 = { style: tmp4.headerDescription, variant: "text-sm/medium", color: "text-default", children: tmp10 };
    const tmp14 = state(Text_Text.Text, obj3);
    cResult[4] = tmp4.headerDescription;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.headerContainer) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp12) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const obj4 = { style: headerContainer, children: null };
  const items = [tmp7, tmp12];
  obj4.children = items;
  const tmp16 = closure_1_15(hasOwnProperty, obj4);
  cResult[6] = tmp4.headerContainer;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  const tmp = closure_16();
  const obj = { style: tmp.headerContainer, children: null };
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["5HZu07"]);
  const items = [state(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["/k/L/j"]);
  items[1] = state(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_15(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((trigger) => {
  const cResult = trigger(navigation[11]).c(26);
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp4 = closure_16();
  let obj = trigger(navigation[11]);
  navigation = trigger(navigation[14]).useNavigation();
  const bottom = onHeightChange(navigation[15])().bottom;
  if (cResult[0] !== trigger) {
    if (trigger === constants3.NUF) {
      const intl2 = tmp(tmp2[12]).intl;
      let stringResult = intl2.string(tmp(tmp2[12]).t.INo2NK);
    } else {
      const intl = tmp(tmp2[12]).intl;
      stringResult = intl.string(tmp(tmp2[12]).t.riOUtB);
    }
    cResult[0] = trigger;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== onHeightChange) {
      const fn = function f(nativeEvent) {
        onHeightChange(nativeEvent.nativeEvent.layout.height);
      };
      cResult[2] = onHeightChange;
      cResult[3] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== bottom) {
      let obj3 = { paddingBottom: bottom };
      cResult[4] = bottom;
      cResult[5] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.footerSafeAreaContainer) {
      if (cResult[7] === tmp11) {
        let tmp12 = cResult[8];
      }
      const _Symbol = Symbol;
      ({ footerContainer, footerTitle } = tmp4);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[12]).intl;
        const stringResult1 = intl3.string(tmp(tmp2[12]).t["N+Mi/U"]);
        cResult[9] = stringResult1;
        let tmp14 = stringResult1;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp4.footerTitle) {
        let obj4 = { style: footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp14 };
        const tmp18 = closure_14(tmp(tmp2[13]).Text, obj4);
        cResult[10] = tmp4.footerTitle;
        cResult[11] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] === navigation) {
        if (cResult[13] === trigger) {
          let tmp19 = cResult[14];
        }
        if (cResult[15] === tmp19) {
          if (cResult[16] === tmp6) {
            let tmp20 = cResult[17];
          }
          if (cResult[18] === tmp4.footerContainer) {
            if (cResult[19] === tmp20) {
              if (cResult[20] === tmp16) {
                let tmp23 = cResult[21];
              }
              if (cResult[22] === tmp10) {
                if (cResult[23] === tmp23) {
                  if (cResult[24] === tmp12) {
                    let tmp27 = cResult[25];
                  }
                  return tmp27;
                }
              }
              const obj5 = { style: tmp12, onLayout: tmp10, children: tmp23 };
              const tmp30 = closure_14(closure_5, obj5);
              cResult[22] = tmp10;
              cResult[23] = tmp23;
              cResult[24] = tmp12;
              cResult[25] = tmp30;
              tmp27 = tmp30;
            }
          }
          const obj6 = { style: footerContainer, children: null };
          const items = [tmp16, tmp20];
          obj6.children = items;
          const tmp26 = closure_15(closure_5, obj6);
          cResult[18] = tmp4.footerContainer;
          cResult[19] = tmp20;
          cResult[20] = tmp16;
          cResult[21] = tmp26;
          tmp23 = tmp26;
        }
        const obj7 = { variant: "primary", grow: true, text: tmp6, onPress: tmp19 };
        const tmp22 = closure_14(tmp(tmp2[18]).Button, obj7);
        cResult[15] = tmp19;
        cResult[16] = tmp6;
        cResult[17] = tmp22;
        tmp20 = tmp22;
      }
      const fn2 = function v() {
        if (constants3.NUF === trigger) {
          NewUserAnalyticsUtils.trackNUFStep(constants4.STEP_GUILD_TEMPLATE, constants4.STEP_GUILD_JOIN, { skip: false });
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED);
        } else if (tmp2.IN_APP === tmp) {
          const obj4 = { location_section: constants6.CREATE_JOIN_GUILD_MODAL };
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED, obj4);
        }
        navigation.push(constants2.JOIN_SERVER, {});
      };
      cResult[12] = navigation;
      cResult[13] = trigger;
      cResult[14] = fn2;
      tmp19 = fn2;
    }
    const items1 = [tmp4.footerSafeAreaContainer, tmp11];
    cResult[6] = tmp4.footerSafeAreaContainer;
    cResult[7] = tmp11;
    cResult[8] = items1;
    tmp12 = items1;
  }
  let obj2 = trigger(navigation[14]);
}) : ((trigger) => {
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp = closure_16();
  dependencyMap = trigger(1490).useNavigation();
  if (trigger === constants3.NUF) {
    const intl2 = tmp2(1126).intl;
    let stringResult = intl2.string(tmp2(1126).t.INo2NK);
  } else {
    const intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t.riOUtB);
  }
  const items = [onHeightChange];
  let obj2 = {
    style: null,
    onLayout: noop.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items),
    children: null
  };
  const items1 = [tmp.footerSafeAreaContainer, { paddingBottom: onHeightChange(1618)().bottom }];
  obj2.style = items1;
  let obj3 = { style: tmp.footerContainer, children: null };
  let obj4 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1126).intl;
  obj4.children = intl3.string(trigger(1126).t["N+Mi/U"]);
  const items2 = [
    closure_14(trigger(4892).Text, obj4),
    closure_14(trigger(5601).Button, {
      variant: "primary",
      grow: true,
      text: stringResult,
      onPress() {
        if (constants3.NUF === trigger) {
          NewUserAnalyticsUtils.trackNUFStep(constants4.STEP_GUILD_TEMPLATE, constants4.STEP_GUILD_JOIN, { skip: false });
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED);
        } else if (tmp2.IN_APP === tmp) {
          const obj4 = { location_section: constants6.CREATE_JOIN_GUILD_MODAL };
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED, obj4);
        }
        closure_2.push(constants2.JOIN_SERVER, {});
      }
    })
  ];
  obj3.children = items2;
  obj2.children = closure_15(closure_5, obj3);
  return closure_14(closure_5, obj2);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  const cResult = c.c(7);
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const tmp3 = CreateGuildIcons.GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id];
  if (cResult[0] === guildTemplate) {
    if (cResult[1] === onGuildTemplatePress) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === guildTemplate.label) {
      if (cResult[4] === tmp3) {
        if (cResult[5] === tmp4) {
          let tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
    const obj2 = { Icon: tmp3, message: guildTemplate.label, onPress: tmp4 };
    const tmp8 = state(ListSelectionItemDefault, obj2);
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
  return state(ListSelectionItemDefault, obj);
});
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((trigger) => {
  const cResult = trigger(fromStep[11]).c(62);
  trigger = trigger.trigger;
  const _location = trigger.location;
  fromStep = trigger.fromStep;
  const tmp4 = closure_16();
  let obj = trigger(fromStep[11]);
  const navigation = trigger(fromStep[14]).useNavigation();
  if (cResult[0] === fromStep) {
    if (cResult[1] === _location) {
      if (cResult[2] === trigger) {
        let tmp6 = cResult[3];
        let tmp7 = cResult[4];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[5] === navigation) {
        if (cResult[6] === trigger) {
          let tmp9 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_7();
          cResult[8] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        const first = navigation(obj3.useState(tmp11), 1)[0];
        const tmp16 = navigation(obj3.useState(110), 2);
        noop = tmp16[1];
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function k(arg0) {
            closure_4(arg0);
          };
          cResult[9] = fn3;
          let tmp17 = fn3;
        } else {
          tmp17 = cResult[9];
        }
        const sum = tmp16[0] + _location(fromStep[15])().bottom + 16;
        if (cResult[10] === tmp4.contentContainer) {
          if (cResult[11] === tmp4.flex) {
            let tmp19 = cResult[12];
          }
          ({ flex, scrollContainer } = tmp4);
          if (cResult[13] !== sum) {
            const obj4 = { paddingBottom: sum };
            cResult[13] = sum;
            cResult[14] = obj4;
            let tmp20 = obj4;
          } else {
            tmp20 = cResult[14];
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = closure_14(closure_17, {});
            cResult[15] = tmp24;
            let tmp21 = tmp24;
          } else {
            tmp21 = cResult[15];
          }
          if (cResult[16] === tmp9) {
            if (cResult[17] === tmp27) {
              let tmp28 = cResult[18];
            }
            const _Symbol4 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[12]).intl;
              const stringResult = intl.string(tmp(tmp2[12]).t.JGDkfg);
              cResult[19] = stringResult;
              let tmp32 = stringResult;
            } else {
              tmp32 = cResult[19];
            }
            if (cResult[20] === tmp9) {
              if (cResult[21] === tmp34) {
                let tmp35 = cResult[22];
              }
              if (cResult[23] === tmp9) {
                if (cResult[24] === tmp39) {
                  let tmp40 = cResult[25];
                }
                if (cResult[26] === tmp9) {
                  if (cResult[27] === tmp44) {
                    let tmp45 = cResult[28];
                  }
                  if (cResult[29] === tmp9) {
                    if (cResult[30] === tmp49) {
                      let tmp50 = cResult[31];
                    }
                    if (cResult[32] === tmp9) {
                      if (cResult[33] === tmp54) {
                        let tmp55 = cResult[34];
                      }
                      if (cResult[35] === tmp9) {
                        if (cResult[36] === tmp59) {
                          let tmp60 = cResult[37];
                        }
                        if (cResult[38] === tmp35) {
                          if (cResult[39] === tmp40) {
                            if (cResult[40] === tmp45) {
                              if (cResult[41] === tmp50) {
                                if (cResult[42] === tmp55) {
                                  if (cResult[43] === tmp60) {
                                    let tmp64 = cResult[44];
                                  }
                                  if (cResult[45] === tmp4.sections) {
                                    if (cResult[46] === tmp28) {
                                      if (cResult[47] === tmp64) {
                                        let tmp67 = cResult[48];
                                      }
                                      if (cResult[49] === tmp4.scrollContainer) {
                                        if (cResult[50] === tmp67) {
                                          if (cResult[51] === tmp20) {
                                            let tmp71 = cResult[52];
                                          }
                                          if (cResult[53] !== trigger) {
                                            const obj5 = { trigger, onHeightChange: tmp17 };
                                            const tmp78 = closure_14(closure_18, obj5);
                                            cResult[53] = trigger;
                                            cResult[54] = tmp78;
                                            let tmp75 = tmp78;
                                          } else {
                                            tmp75 = cResult[54];
                                          }
                                          if (cResult[55] === tmp4.flex) {
                                            if (cResult[56] === tmp71) {
                                              if (cResult[57] === tmp75) {
                                                let tmp79 = cResult[58];
                                              }
                                              if (cResult[59] === tmp79) {
                                                if (cResult[60] === tmp19) {
                                                  let tmp83 = cResult[61];
                                                }
                                                return tmp83;
                                              }
                                              const rect = { top: true, left: true, right: true, style: tmp19, children: tmp79 };
                                              const tmp85 = closure_14(tmp(tmp2[22]).SafeAreaPaddingView, rect);
                                              cResult[59] = tmp79;
                                              cResult[60] = tmp19;
                                              cResult[61] = tmp85;
                                              tmp83 = tmp85;
                                            }
                                          }
                                          const obj6 = { style: flex, children: null };
                                          const items = [tmp71, tmp75];
                                          obj6.children = items;
                                          const tmp82 = closure_15(closure_5, obj6);
                                          cResult[55] = tmp4.flex;
                                          cResult[56] = tmp71;
                                          cResult[57] = tmp75;
                                          cResult[58] = tmp82;
                                          tmp79 = tmp82;
                                        }
                                      }
                                      const obj7 = { style: scrollContainer, contentContainerStyle: tmp20, children: null };
                                      const items1 = [tmp21, tmp67];
                                      obj7.children = items1;
                                      const tmp74 = closure_15(closure_6, obj7);
                                      cResult[49] = tmp4.scrollContainer;
                                      cResult[50] = tmp67;
                                      cResult[51] = tmp20;
                                      cResult[52] = tmp74;
                                      tmp71 = tmp74;
                                    }
                                  }
                                  const obj8 = { style: tmp25, children: null };
                                  const items2 = [tmp28, tmp64];
                                  obj8.children = items2;
                                  const tmp70 = closure_15(closure_5, obj8);
                                  cResult[45] = tmp4.sections;
                                  cResult[46] = tmp28;
                                  cResult[47] = tmp64;
                                  cResult[48] = tmp70;
                                  tmp67 = tmp70;
                                }
                              }
                            }
                          }
                        }
                        const obj9 = { title: tmp32, hasIcons: true, children: null };
                        const items3 = [tmp35, tmp40, tmp45, tmp50, tmp55, tmp60];
                        obj9.children = items3;
                        const tmp66 = closure_15(tmp(tmp2[21]).TableRowGroup, obj9);
                        cResult[38] = tmp35;
                        cResult[39] = tmp40;
                        cResult[40] = tmp45;
                        cResult[41] = tmp50;
                        cResult[42] = tmp55;
                        cResult[43] = tmp60;
                        cResult[44] = tmp66;
                        tmp64 = tmp66;
                      }
                      const obj10 = { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress: tmp9 };
                      const tmp63 = closure_14(closure_19, obj10);
                      cResult[35] = tmp9;
                      cResult[36] = first[constants.LOCAL_COMMUNITY];
                      cResult[37] = tmp63;
                      tmp60 = tmp63;
                    }
                    const obj11 = { guildTemplate: first[constants.CREATORS], onGuildTemplatePress: tmp9 };
                    const tmp58 = closure_14(closure_19, obj11);
                    cResult[32] = tmp9;
                    cResult[33] = first[constants.CREATORS];
                    cResult[34] = tmp58;
                    tmp55 = tmp58;
                  }
                  const obj12 = { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress: tmp9 };
                  const tmp53 = closure_14(closure_19, obj12);
                  cResult[29] = tmp9;
                  cResult[30] = first[constants.FRIENDS];
                  cResult[31] = tmp53;
                  tmp50 = tmp53;
                }
                const obj13 = { guildTemplate: first[constants.STUDY], onGuildTemplatePress: tmp9 };
                const tmp48 = closure_14(closure_19, obj13);
                cResult[26] = tmp9;
                cResult[27] = first[constants.STUDY];
                cResult[28] = tmp48;
                tmp45 = tmp48;
              }
              const obj14 = { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress: tmp9 };
              const tmp43 = closure_14(closure_19, obj14);
              cResult[23] = tmp9;
              cResult[24] = first[constants.SCHOOL_CLUB];
              cResult[25] = tmp43;
              tmp40 = tmp43;
            }
            const obj15 = { guildTemplate: first[constants.GAMING], onGuildTemplatePress: tmp9 };
            const tmp38 = closure_14(closure_19, obj15);
            cResult[20] = tmp9;
            cResult[21] = first[constants.GAMING];
            cResult[22] = tmp38;
            tmp35 = tmp38;
          }
          const obj16 = { hasIcons: true, children: null };
          const obj17 = { guildTemplate: first[constants.CREATE], onGuildTemplatePress: tmp9 };
          obj16.children = closure_14(closure_19, obj17);
          const tmp31 = closure_14(tmp(tmp2[21]).TableRowGroup, obj16);
          cResult[16] = tmp9;
          cResult[17] = first[constants.CREATE];
          cResult[18] = tmp31;
          tmp28 = tmp31;
        }
        const items4 = [, ];
        ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
        cResult[10] = tmp4.contentContainer;
        cResult[11] = tmp4.flex;
        cResult[12] = items4;
        tmp19 = items4;
      }
      const fn2 = function f(guildTemplate) {
        navigation.push(constants2.CREATION_INTENT, { guildTemplate, trigger });
        if (trigger === constants3.IN_APP) {
          const obj3 = { template_name: guildTemplate.id };
          AnalyticsUtilsDefault.track(constants5.GUILD_TEMPLATE_SELECTED, obj3);
        }
        const obj = { guildTemplate, trigger };
      };
      cResult[5] = navigation;
      cResult[6] = trigger;
      cResult[7] = fn2;
      tmp9 = fn2;
    }
  }
  const fn = function c() {
    if (constants3.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      if (fromStep == null) {
        STEP_REGISTRATION = constants4.STEP_REGISTRATION;
      }
      NewUserAnalyticsUtils.trackNUFStep(STEP_REGISTRATION, constants4.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      AnalyticsUtilsDefault.track(constants5.OPEN_MODAL, obj);
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
  let obj2 = trigger(fromStep[14]);
}) : ((trigger) => {
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  noop = undefined;
  function onGuildTemplatePress(guildTemplate) {
    closure_3.push(constants2.CREATION_INTENT, { guildTemplate, trigger });
    if (trigger === constants3.IN_APP) {
      const obj3 = { template_name: guildTemplate.id };
      AnalyticsUtilsDefault.track(constants5.GUILD_TEMPLATE_SELECTED, obj3);
    }
    const obj = { guildTemplate, trigger };
  }
  const tmp = closure_16();
  _slicedToArray = trigger(fromStep[14]).useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = noop.useEffect(() => {
    if (constants3.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      if (fromStep == null) {
        STEP_REGISTRATION = constants4.STEP_REGISTRATION;
      }
      NewUserAnalyticsUtils.trackNUFStep(STEP_REGISTRATION, constants4.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      AnalyticsUtilsDefault.track(constants5.OPEN_MODAL, obj);
    }
  }, items);
  const first = _slicedToArray(noop.useState(closure_7()), 1)[0];
  let obj = trigger(fromStep[14]);
  [tmp5, c4] = noop.useState(110);
  const callback = noop.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  const rect = { top: true, left: true, right: true, style: null, children: null };
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  rect.style = items1;
  let obj2 = { style: tmp.flex, children: null };
  let obj3 = { style: tmp.scrollContainer, contentContainerStyle: null, children: null };
  const tmp4 = _slicedToArray(noop.useState(110), 2);
  obj3.contentContainerStyle = { paddingBottom: tmp5 + _location(fromStep[15])().bottom + 16 };
  const items2 = [closure_14(closure_17, {}), ];
  const obj5 = { style: tmp.sections, children: null };
  const obj6 = { hasIcons: true, children: closure_14(closure_19, { guildTemplate: first[constants.CREATE], onGuildTemplatePress }) };
  const items3 = [closure_14(trigger(fromStep[21]).TableRowGroup, obj6), ];
  const obj8 = { title: null, hasIcons: true, children: null };
  const intl = trigger(fromStep[12]).intl;
  obj8.title = intl.string(trigger(fromStep[12]).t.JGDkfg);
  const items4 = [closure_14(closure_19, { guildTemplate: first[constants.GAMING], onGuildTemplatePress }), closure_14(closure_19, { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress }), closure_14(closure_19, { guildTemplate: first[constants.STUDY], onGuildTemplatePress }), closure_14(closure_19, { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress }), closure_14(closure_19, { guildTemplate: first[constants.CREATORS], onGuildTemplatePress }), closure_14(closure_19, { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress })];
  obj8.children = items4;
  items3[1] = closure_15(trigger(fromStep[21]).TableRowGroup, obj8);
  obj5.children = items3;
  items2[1] = closure_15(closure_5, obj5);
  obj3.children = items2;
  const items5 = [closure_15(closure_6, obj3), closure_14(closure_18, { trigger, onHeightChange: callback })];
  obj2.children = items5;
  rect.children = closure_15(closure_5, obj2);
  return closure_14(trigger(fromStep[22]).SafeAreaPaddingView, rect);
});