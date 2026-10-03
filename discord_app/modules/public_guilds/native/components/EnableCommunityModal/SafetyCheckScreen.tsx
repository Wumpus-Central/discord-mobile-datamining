// === Module 17814: SafetyCheckScreen ===

// Module 17814 (SafetyCheckScreen)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ VerificationLevels: closure_8, GuildExplicitContentFilterTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = guild(first1[7]).c(51);
  const ref = noop.useRef(null);
  let obj = guild(first1[7]);
  const token = guild(first1[8]).useToken(verificationLevel(first1[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(first1[8]);
  const enableCommunitySharedStyles = guild(first1[10]).useEnableCommunitySharedStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function u() {
      return props.getProps();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let obj4 = guild(first1[10]);
  guild = guild(first1[11]).useStateFromStoresObject(tmp8, tmp9).guild;
  const tmp11 = verificationLevel(first1[12])();
  verificationLevel = undefined;
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(noop.useState(verificationLevel), 1)[0];
  let prop;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = _slicedToArray(noop.useState(prop), 1)[0];
  if (null == guild) {
    return null;
  } else {
    if (cResult[2] === guild) {
      if (cResult[3] === verificationLevel) {
        let tmp23 = cResult[4];
      }
      if (cResult[5] === guild) {
        if (cResult[6] === first1) {
          let tmp24 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
          const intl = tmp(tmp2[15]).intl;
          obj5.children = intl.formatToPlainString(tmp(tmp2[15]).t.tInpJj, { number: 1, total: 3 });
          const tmp28 = closure_10(tmp(tmp2[14]).Text, obj5);
          cResult[8] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[8];
        }
        if (cResult[9] !== tmp11.safetyCheck) {
          const obj6 = { resizeMode: "contain", source: tmp11.safetyCheck };
          const tmp32 = closure_10(closure_5, obj6);
          cResult[9] = tmp11.safetyCheck;
          cResult[10] = tmp32;
          let tmp29 = tmp32;
        } else {
          tmp29 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[15]).intl;
          const stringResult = intl2.string(tmp(tmp2[15]).t.QrjLYl);
          cResult[11] = stringResult;
          let tmp33 = stringResult;
        } else {
          tmp33 = cResult[11];
        }
        if (cResult[12] !== enableCommunitySharedStyles.header) {
          const obj7 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp33 };
          const tmp37 = closure_10(tmp(tmp2[14]).Heading, obj7);
          cResult[12] = enableCommunitySharedStyles.header;
          cResult[13] = tmp37;
          let tmp35 = tmp37;
        } else {
          tmp35 = cResult[13];
        }
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[15]).intl;
          const stringResult1 = intl3.string(tmp(tmp2[15]).t.i1STwu);
          cResult[14] = stringResult1;
          let tmp38 = stringResult1;
        } else {
          tmp38 = cResult[14];
        }
        if (cResult[15] !== enableCommunitySharedStyles.description) {
          const obj8 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: tmp38 };
          const tmp42 = closure_10(tmp(tmp2[14]).Text, obj8);
          cResult[15] = enableCommunitySharedStyles.description;
          cResult[16] = tmp42;
          let tmp40 = tmp42;
        } else {
          tmp40 = cResult[16];
        }
        if (cResult[17] === enableCommunitySharedStyles.content) {
          if (cResult[18] === tmp35) {
            if (cResult[19] === tmp40) {
              if (cResult[20] === tmp26) {
                if (cResult[21] === tmp29) {
                  let tmp43 = cResult[22];
                }
                if (cResult[23] !== token) {
                  const obj9 = { paddingHorizontal: token };
                  cResult[23] = token;
                  cResult[24] = obj9;
                  let tmp47 = obj9;
                } else {
                  tmp47 = cResult[24];
                }
                const _Symbol4 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(tmp2[15]).intl;
                  const stringResult2 = intl4.string(tmp(tmp2[15]).t.fHiGA0);
                  cResult[25] = stringResult2;
                  let tmp48 = stringResult2;
                } else {
                  tmp48 = cResult[25];
                }
                const _Symbol5 = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(tmp2[15]).intl;
                  const stringResult3 = intl5.string(tmp(tmp2[15]).t["rkA56+"]);
                  cResult[26] = stringResult3;
                  let tmp50 = stringResult3;
                } else {
                  tmp50 = cResult[26];
                }
                if (cResult[27] === verificationLevel !== tmp20) {
                  if (cResult[28] === tmp23) {
                    if (cResult[29] === tmp53) {
                      let tmp54 = cResult[30];
                    }
                    if (cResult[31] === tmp52) {
                      if (cResult[32] === tmp54) {
                        let tmp57 = cResult[33];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl6 = tmp(tmp2[15]).intl;
                        const stringResult4 = intl6.string(tmp(tmp2[15]).t.b0MaDV);
                        cResult[34] = stringResult4;
                        let tmp60 = stringResult4;
                      } else {
                        tmp60 = cResult[34];
                      }
                      const _Symbol7 = Symbol;
                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = tmp(tmp2[15]).intl;
                        const stringResult5 = intl7.string(tmp(tmp2[15]).t.zOuzl7);
                        cResult[35] = stringResult5;
                        let tmp62 = stringResult5;
                      } else {
                        tmp62 = cResult[35];
                      }
                      if (cResult[36] === first1 === tmp22) {
                        if (cResult[37] === tmp24) {
                          if (cResult[38] === tmp65) {
                            let tmp66 = cResult[39];
                          }
                          if (cResult[40] === tmp64) {
                            if (cResult[41] === tmp66) {
                              let tmp69 = cResult[42];
                            }
                            if (cResult[43] === tmp47) {
                              if (cResult[44] === tmp57) {
                                if (cResult[45] === tmp69) {
                                  let tmp72 = cResult[46];
                                }
                                if (cResult[47] === tmp43) {
                                  if (cResult[48] === tmp72) {
                                    if (cResult[49] === tmp25) {
                                      let tmp75 = cResult[50];
                                    }
                                    return tmp75;
                                  }
                                }
                                const obj10 = { headerRef: ref, currentStep: tmp(tmp2[20]).EnableCommunityModalSteps.STEP_1, disableNextStep: tmp25, children: null };
                                const items1 = [tmp43, tmp72];
                                obj10.children = items1;
                                const tmp77 = closure_11(tmp(tmp2[20]).EnableCommunityModalScreen, obj10);
                                cResult[47] = tmp43;
                                cResult[48] = tmp72;
                                cResult[49] = tmp25;
                                cResult[50] = tmp77;
                                tmp75 = tmp77;
                              }
                            }
                            const obj11 = { spacing: 24, style: tmp47, children: null };
                            const items2 = [tmp57, tmp69];
                            obj11.children = items2;
                            const tmp74 = closure_11(tmp(tmp2[19]).Stack, obj11);
                            cResult[43] = tmp47;
                            cResult[44] = tmp57;
                            cResult[45] = tmp69;
                            cResult[46] = tmp74;
                            tmp72 = tmp74;
                          }
                          const obj12 = { helperText: tmp60, hasIcons: false, children: null };
                          const obj13 = { formSwitchDisabled: tmp64, children: tmp66 };
                          obj12.children = closure_10(tmp5(tmp2[18]), obj13);
                          const tmp71 = closure_10(tmp(tmp2[17]).TableRowGroup, obj12);
                          cResult[40] = tmp64;
                          cResult[41] = tmp66;
                          cResult[42] = tmp71;
                          tmp69 = tmp71;
                        }
                      }
                      const obj14 = { label: tmp62, value: guild.explicitContentFilter === constants2.ALL_MEMBERS, disabled: first1 === tmp22, onValueChange: tmp24 };
                      const tmp68 = closure_10(tmp(tmp2[16]).TableSwitchRow, obj14);
                      cResult[36] = first1 === tmp22;
                      cResult[37] = tmp24;
                      cResult[38] = guild.explicitContentFilter === constants2.ALL_MEMBERS;
                      cResult[39] = tmp68;
                      tmp66 = tmp68;
                    }
                    const obj15 = { helperText: tmp48, hasIcons: false, children: null };
                    const obj16 = { formSwitchDisabled: tmp52, children: tmp54 };
                    obj15.children = closure_10(tmp5(tmp2[18]), obj16);
                    const tmp59 = closure_10(tmp(tmp2[17]).TableRowGroup, obj15);
                    cResult[31] = tmp52;
                    cResult[32] = tmp54;
                    cResult[33] = tmp59;
                    tmp57 = tmp59;
                  }
                }
                const obj17 = { label: tmp50, value: guild.verificationLevel !== constants.NONE, disabled: verificationLevel !== tmp20, onValueChange: tmp23 };
                const tmp56 = closure_10(tmp(tmp2[16]).TableSwitchRow, obj17);
                cResult[27] = verificationLevel !== tmp20;
                cResult[28] = tmp23;
                cResult[29] = guild.verificationLevel !== constants.NONE;
                cResult[30] = tmp56;
                tmp54 = tmp56;
              }
            }
          }
        }
        const obj18 = { style: enableCommunitySharedStyles.content, children: null };
        const items3 = [tmp26, tmp29, tmp35, tmp40];
        obj18.children = items3;
        const tmp46 = closure_11(closure_6, obj18);
        cResult[17] = enableCommunitySharedStyles.content;
        cResult[18] = tmp35;
        cResult[19] = tmp40;
        cResult[20] = tmp26;
        cResult[21] = tmp29;
        cResult[22] = tmp46;
        tmp43 = tmp46;
      }
      const fn3 = function w(arg0) {
        if (null != guild) {
          if (arg0) {
            if (tmp.explicitContentFilter < constants2.ALL_MEMBERS) {
              const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
              GuildSettingsActionCreatorsDefault.updateGuild(obj2);
            }
          }
          if (!arg0) {
            const obj4 = { explicitContentFilter: first1 };
            GuildSettingsActionCreatorsDefault.updateGuild(obj4);
          }
        }
      };
      cResult[5] = guild;
      cResult[6] = first1;
      cResult[7] = fn3;
      tmp24 = fn3;
    }
    const fn2 = function x(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.verificationLevel < constants.LOW) {
            const obj2 = { verificationLevel: tmp2.LOW };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { verificationLevel };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }
    };
    cResult[2] = guild;
    cResult[3] = verificationLevel;
    cResult[4] = fn2;
    tmp23 = fn2;
  }
  const tmpResult = guild(first1[11]);
}) : (() => {
  const ref = noop.useRef(null);
  const token = guild(first1[8]).useToken(verificationLevel(first1[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[8]);
  const enableCommunitySharedStyles = guild(first1[10]).useEnableCommunitySharedStyles();
  let obj3 = guild(first1[10]);
  const items = [GuildSettingsStore];
  guild = guild(first1[11]).useStateFromStoresObject(items, () => props.getProps()).guild;
  verificationLevel = undefined;
  let obj4 = guild(first1[11]);
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(noop.useState(verificationLevel), 1)[0];
  let prop;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = _slicedToArray(noop.useState(prop), 1)[0];
  let tmp20Result = null;
  if (null != guild) {
    const obj5 = { headerRef: ref, currentStep: tmp2(tmp3[20]).EnableCommunityModalSteps.STEP_1, disableNextStep: guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE, children: null };
    const obj6 = { style: enableCommunitySharedStyles.content, children: null };
    const obj7 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj7.children = intl.formatToPlainString(tmp2(tmp3[15]).t.tInpJj, { number: 1, total: 3 });
    const items1 = [closure_10(tmp2(tmp3[14]).Text, obj7), , , ];
    const obj8 = { resizeMode: "contain", source: tmp7.safetyCheck };
    items1[1] = closure_10(closure_5, obj8);
    const obj9 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    obj9.children = intl2.string(tmp2(tmp3[15]).t.QrjLYl);
    items1[2] = closure_10(tmp2(tmp3[14]).Heading, obj9);
    const obj10 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[15]).intl;
    obj10.children = intl3.string(tmp2(tmp3[15]).t.i1STwu);
    items1[3] = closure_10(tmp2(tmp3[14]).Text, obj10);
    obj6.children = items1;
    const items2 = [closure_11(closure_6, obj6), ];
    const obj11 = { spacing: 24, style: null, children: null };
    const obj12 = { paddingHorizontal: token };
    obj11.style = obj12;
    const obj13 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp2(tmp3[15]).intl;
    obj13.helperText = intl4.string(tmp2(tmp3[15]).t.fHiGA0);
    const obj14 = { formSwitchDisabled: verificationLevel !== tmp16, children: null };
    const obj15 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl5 = tmp2(tmp3[15]).intl;
    obj15.label = intl5.string(tmp2(tmp3[15]).t["rkA56+"]);
    obj15.value = guild.verificationLevel !== constants.NONE;
    obj15.disabled = verificationLevel !== tmp16;
    obj15.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.verificationLevel < constants.LOW) {
            const obj2 = { verificationLevel: tmp2.LOW };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { verificationLevel };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }
    };
    obj14.children = closure_10(tmp2(tmp3[16]).TableSwitchRow, obj15);
    obj13.children = closure_10(tmp4(tmp3[18]), obj14);
    const items3 = [closure_10(tmp2(tmp3[17]).TableRowGroup, obj13), ];
    const obj16 = { helperText: null, hasIcons: false, children: null };
    const intl6 = tmp2(tmp3[15]).intl;
    obj16.helperText = intl6.string(tmp2(tmp3[15]).t.b0MaDV);
    const obj17 = { formSwitchDisabled: first1 === tmp18, children: null };
    const tmp21 = guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE;
    const tmp4Result = tmp4(tmp3[18]);
    const obj18 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl7 = tmp2(tmp3[15]).intl;
    obj18.label = intl7.string(tmp2(tmp3[15]).t.zOuzl7);
    obj18.value = guild.explicitContentFilter === constants2.ALL_MEMBERS;
    obj18.disabled = first1 === tmp18;
    obj18.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.explicitContentFilter < constants2.ALL_MEMBERS) {
            const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { explicitContentFilter: first1 };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }
    };
    obj17.children = closure_10(tmp2(tmp3[16]).TableSwitchRow, obj18);
    obj16.children = closure_10(tmp4(tmp3[18]), obj17);
    items3[1] = closure_10(tmp2(tmp3[17]).TableRowGroup, obj16);
    obj11.children = items3;
    items2[1] = closure_11(tmp2(tmp3[19]).Stack, obj11);
    obj5.children = items2;
    tmp20Result = closure_11(tmp2(tmp3[20]).EnableCommunityModalScreen, obj5);
    const tmp4Result2 = tmp4(tmp3[18]);
  }
  return tmp20Result;
});