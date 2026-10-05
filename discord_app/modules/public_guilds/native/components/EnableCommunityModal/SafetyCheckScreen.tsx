// === Module 17838: SafetyCheckScreen ===

// Module 17838 (SafetyCheckScreen)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
({ VerificationLevels: metroImportAll, GuildExplicitContentFilterTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first1;
  let guild;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj15;
  let props;
  let tmp10;
  let tmp9;
  let verificationLevel;
  const tmp = guild;
  const tmp2 = first1;
  let obj = guild(first1[7]);
  const cResult = obj.c(51);
  const ref = react.useRef(null);
  let obj2 = guild(first1[8]);
  const token = obj2.useToken(verificationLevel(first1[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(first1[10]);
  const enableCommunitySharedStyles = obj3.useEnableCommunitySharedStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function u() {
      return props.getProps();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  guild = tmpResult.useStateFromStoresObject(tmp9, tmp10).guild;
  const tmp12 = verificationLevel(tmp2[12])();
  verificationLevel = undefined;
  const useState = react.useState;
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(useState(verificationLevel), 1)[0];
  let prop;
  const useState2 = react.useState;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = _slicedToArray(useState2(prop), 1)[0];
  if (null == guild) {
    return null;
  } else {
    if (cResult[2] === guild) {
      let tmp24;
      if (cResult[3] === verificationLevel) {
        tmp24 = cResult[4];
      }
      if (cResult[5] === guild) {
        let tmp25;
        let tmp27;
        let tmp30;
        let tmp34;
        let tmp36;
        let tmp39;
        let tmp41;
        if (cResult[6] === first1) {
          tmp25 = cResult[7];
        }
        const _Symbol = Symbol;
        const content = enableCommunitySharedStyles.content;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl.formatToPlainString(tmp(tmp2[15]).t.tInpJj, { number: 1, total: 3 }) };
          const Text = tmp(tmp2[14]).Text;
          intl = tmp(tmp2[15]).intl;
          const tmp29 = closure_10(Text, obj4);
          cResult[8] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[8];
        }
        if (cResult[9] !== tmp12.safetyCheck) {
          const obj5 = { resizeMode: "contain", source: tmp12.safetyCheck };
          const tmp33 = closure_10(closure_5, obj5);
          cResult[9] = tmp12.safetyCheck;
          cResult[10] = tmp33;
          tmp30 = tmp33;
        } else {
          tmp30 = cResult[10];
        }
        const _Symbol2 = Symbol;
        const header = enableCommunitySharedStyles.header;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[15]).intl;
          const stringResult = intl2.string(tmp(tmp2[15]).t.QrjLYl);
          cResult[11] = stringResult;
          tmp34 = stringResult;
        } else {
          tmp34 = cResult[11];
        }
        if (cResult[12] !== enableCommunitySharedStyles.header) {
          const obj6 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp34 };
          const tmp38 = closure_10(tmp(tmp2[14]).Heading, obj6);
          cResult[12] = enableCommunitySharedStyles.header;
          cResult[13] = tmp38;
          tmp36 = tmp38;
        } else {
          tmp36 = cResult[13];
        }
        const _Symbol3 = Symbol;
        const description = enableCommunitySharedStyles.description;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(tmp2[15]).intl;
          const stringResult1 = intl3.string(tmp(tmp2[15]).t.i1STwu);
          cResult[14] = stringResult1;
          tmp39 = stringResult1;
        } else {
          tmp39 = cResult[14];
        }
        if (cResult[15] !== enableCommunitySharedStyles.description) {
          const obj7 = { style: description, variant: "text-md/medium", color: "text-subtle", children: tmp39 };
          const tmp43 = closure_10(tmp(tmp2[14]).Text, obj7);
          cResult[15] = enableCommunitySharedStyles.description;
          cResult[16] = tmp43;
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[16];
        }
        if (cResult[17] === enableCommunitySharedStyles.content) {
          if (cResult[18] === tmp36) {
            if (cResult[19] === tmp41) {
              if (cResult[20] === tmp27) {
                let tmp44;
                let tmp48;
                let tmp49;
                let tmp51;
                if (cResult[21] === tmp30) {
                  tmp44 = cResult[22];
                }
                if (cResult[23] !== token) {
                  const obj8 = { paddingHorizontal: token };
                  cResult[23] = token;
                  cResult[24] = obj8;
                  tmp48 = obj8;
                } else {
                  tmp48 = cResult[24];
                }
                const _Symbol4 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(tmp2[15]).intl;
                  const stringResult2 = intl4.string(tmp(tmp2[15]).t.fHiGA0);
                  cResult[25] = stringResult2;
                  tmp49 = stringResult2;
                } else {
                  tmp49 = cResult[25];
                }
                const _Symbol5 = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(tmp2[15]).intl;
                  const stringResult3 = intl5.string(tmp(tmp2[15]).t["rkA56+"]);
                  cResult[26] = stringResult3;
                  tmp51 = stringResult3;
                } else {
                  tmp51 = cResult[26];
                }
                if (cResult[27] === verificationLevel !== tmp21) {
                  if (cResult[28] === tmp24) {
                    let tmp55;
                    if (cResult[29] === guild.verificationLevel !== constants.NONE) {
                      tmp55 = cResult[30];
                    }
                    if (cResult[31] === verificationLevel !== tmp21) {
                      let tmp58;
                      let tmp61;
                      let tmp63;
                      if (cResult[32] === tmp55) {
                        tmp58 = cResult[33];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl6 = tmp(tmp2[15]).intl;
                        const stringResult4 = intl6.string(tmp(tmp2[15]).t.b0MaDV);
                        cResult[34] = stringResult4;
                        tmp61 = stringResult4;
                      } else {
                        tmp61 = cResult[34];
                      }
                      const _Symbol7 = Symbol;
                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = tmp(tmp2[15]).intl;
                        const stringResult5 = intl7.string(tmp(tmp2[15]).t.zOuzl7);
                        cResult[35] = stringResult5;
                        tmp63 = stringResult5;
                      } else {
                        tmp63 = cResult[35];
                      }
                      if (cResult[36] === first1 === tmp23) {
                        if (cResult[37] === tmp25) {
                          let tmp67;
                          if (cResult[38] === guild.explicitContentFilter === constants2.ALL_MEMBERS) {
                            tmp67 = cResult[39];
                          }
                          if (cResult[40] === first1 === tmp23) {
                            let tmp70;
                            if (cResult[41] === tmp67) {
                              tmp70 = cResult[42];
                            }
                            if (cResult[43] === tmp48) {
                              if (cResult[44] === tmp58) {
                                let tmp73;
                                if (cResult[45] === tmp70) {
                                  tmp73 = cResult[46];
                                }
                                if (cResult[47] === tmp44) {
                                  if (cResult[48] === tmp73) {
                                    let tmp76;
                                    if (cResult[49] === (guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE)) {
                                      tmp76 = cResult[50];
                                    }
                                    return tmp76;
                                  }
                                }
                                const obj9 = { headerRef: ref, currentStep: tmp(tmp2[20]).EnableCommunityModalSteps.STEP_1, disableNextStep: guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE, children: items1 };
                                const EnableCommunityModalScreen = tmp(tmp2[20]).EnableCommunityModalScreen;
                                items1 = [tmp44, tmp73];
                                const tmp78 = closure_11(EnableCommunityModalScreen, obj9);
                                cResult[47] = tmp44;
                                cResult[48] = tmp73;
                                cResult[49] = guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE;
                                cResult[50] = tmp78;
                                tmp76 = tmp78;
                              }
                            }
                            const obj10 = { spacing: 24, style: tmp48, children: items2 };
                            items2 = [tmp58, tmp70];
                            const tmp75 = closure_11(tmp(tmp2[19]).Stack, obj10);
                            cResult[43] = tmp48;
                            cResult[44] = tmp58;
                            cResult[45] = tmp70;
                            cResult[46] = tmp75;
                            tmp73 = tmp75;
                          }
                          const obj11 = { helperText: tmp61, hasIcons: false, children: closure_10(verificationLevel(tmp2[18]), obj12) };
                          const TableRowGroup2 = tmp(tmp2[17]).TableRowGroup;
                          obj12 = { formSwitchDisabled: first1 === tmp23, children: tmp67 };
                          const tmp72 = closure_10(TableRowGroup2, obj11);
                          cResult[40] = first1 === tmp23;
                          cResult[41] = tmp67;
                          cResult[42] = tmp72;
                          tmp70 = tmp72;
                        }
                      }
                      const obj13 = { label: tmp63, value: guild.explicitContentFilter === constants2.ALL_MEMBERS, disabled: first1 === tmp23, onValueChange: tmp25 };
                      const tmp69 = closure_10(tmp(tmp2[16]).TableSwitchRow, obj13);
                      cResult[36] = first1 === tmp23;
                      cResult[37] = tmp25;
                      cResult[38] = guild.explicitContentFilter === constants2.ALL_MEMBERS;
                      cResult[39] = tmp69;
                      tmp67 = tmp69;
                    }
                    const obj14 = { helperText: tmp49, hasIcons: false, children: closure_10(verificationLevel(tmp2[18]), obj15) };
                    const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
                    obj15 = { formSwitchDisabled: verificationLevel !== tmp21, children: tmp55 };
                    const tmp60 = closure_10(TableRowGroup, obj14);
                    cResult[31] = verificationLevel !== tmp21;
                    cResult[32] = tmp55;
                    cResult[33] = tmp60;
                    tmp58 = tmp60;
                  }
                }
                const obj16 = { label: tmp51, value: guild.verificationLevel !== constants.NONE, disabled: verificationLevel !== tmp21, onValueChange: tmp24 };
                const tmp57 = closure_10(tmp(tmp2[16]).TableSwitchRow, obj16);
                cResult[27] = verificationLevel !== tmp21;
                cResult[28] = tmp24;
                cResult[29] = guild.verificationLevel !== constants.NONE;
                cResult[30] = tmp57;
                tmp55 = tmp57;
              }
            }
          }
        }
        const obj17 = { style: content, children: items3 };
        items3 = [tmp27, tmp30, tmp36, tmp41];
        const tmp47 = closure_11(closure_6, obj17);
        cResult[17] = enableCommunitySharedStyles.content;
        cResult[18] = tmp36;
        cResult[19] = tmp41;
        cResult[20] = tmp27;
        cResult[21] = tmp30;
        cResult[22] = tmp47;
        tmp44 = tmp47;
      }
      const fn3 = function w(arg0) {
        if (null != guild) {
          const tmp10 = arg0;
          if (tmp10) {
            if (tmp.explicitContentFilter < constants.ALL_MEMBERS) {
              const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
              const obj3 = GuildSettingsActionCreatorsDefault;
              obj3.updateGuild(obj2);
            }
          }
          if (!arg0) {
            const obj4 = { explicitContentFilter: first1 };
            const obj = GuildSettingsActionCreatorsDefault;
            obj.updateGuild(obj4);
          }
        }
      };
      cResult[5] = guild;
      cResult[6] = first1;
      cResult[7] = fn3;
      tmp25 = fn3;
    }
    const fn2 = function x(arg0) {
      if (null != guild) {
        const tmp10 = arg0;
        if (tmp10) {
          if (tmp.verificationLevel < metroImportAll.LOW) {
            const obj2 = { verificationLevel: tmp2.LOW };
            const obj3 = GuildSettingsActionCreatorsDefault;
            obj3.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { verificationLevel };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateGuild(obj4);
        }
      }
    };
    cResult[2] = guild;
    cResult[3] = verificationLevel;
    cResult[4] = fn2;
    tmp24 = fn2;
  }
}) : (() => {
  let TableSwitchRow;
  let TableSwitchRow2;
  let first1;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let props;
  let tmp22;
  let tmp5Result;
  let tmp5Result2;
  let verificationLevel;
  const ref = react.useRef(null);
  let obj = guild(first1[8]);
  const token = obj.useToken(verificationLevel(first1[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[10]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(first1[11]);
  const items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  verificationLevel = undefined;
  const useState = react.useState;
  const tmp8 = verificationLevel(first1[12])();
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(useState(verificationLevel), 1)[0];
  let prop;
  const useState2 = react.useState;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = _slicedToArray(useState2(prop), 1)[0];
  let tmp21Result = null;
  if (null != guild) {
    let obj4 = { headerRef: ref, currentStep: guild(first1[20]).EnableCommunityModalSteps.STEP_1, disableNextStep: tmp22, children: items2 };
    const EnableCommunityModalScreen = tmp3(tmp4[20]).EnableCommunityModalScreen;
    const obj5 = { style: enableCommunitySharedStyles.content, children: items1 };
    tmp22 = guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE;
    const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl.formatToPlainString(guild(first1[15]).t.tInpJj, { number: 1, total: 3 }) };
    const Text = tmp3(tmp4[14]).Text;
    intl = tmp3(tmp4[15]).intl;
    items1 = [closure_10(Text, obj6), , , ];
    const obj7 = { resizeMode: "contain", source: tmp8.safetyCheck };
    items1[1] = closure_10(closure_5, obj7);
    const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(guild(first1[15]).t.QrjLYl) };
    const Heading = tmp3(tmp4[14]).Heading;
    intl2 = tmp3(tmp4[15]).intl;
    items1[2] = closure_10(Heading, obj8);
    const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl3.string(guild(first1[15]).t.i1STwu) };
    const Text2 = tmp3(tmp4[14]).Text;
    intl3 = tmp3(tmp4[15]).intl;
    items1[3] = closure_10(Text2, obj9);
    items2 = [closure_11(closure_6, obj5), ];
    const obj10 = { spacing: 24, style: obj11, children: items3 };
    obj11 = { paddingHorizontal: token };
    const Stack = tmp3(tmp4[19]).Stack;
    const obj12 = { helperText: intl4.string(guild(first1[15]).t.fHiGA0), hasIcons: false, children: closure_10(tmp5Result, obj13) };
    const TableRowGroup = tmp3(tmp4[17]).TableRowGroup;
    intl4 = tmp3(tmp4[15]).intl;
    obj13 = { formSwitchDisabled: verificationLevel !== tmp17, children: closure_10(TableSwitchRow, obj14) };
    obj14 = {
      label: intl5.string(guild(first1[15]).t["rkA56+"]),
      value: guild.verificationLevel !== constants.NONE,
      disabled: verificationLevel !== tmp17,
      onValueChange(arg0) {
          if (null != guild) {
            const tmp10 = arg0;
            if (tmp10) {
              if (tmp.verificationLevel < metroImportAll.LOW) {
                const obj2 = { verificationLevel: tmp2.LOW };
                const obj3 = GuildSettingsActionCreatorsDefault;
                obj3.updateGuild(obj2);
              }
            }
            if (!arg0) {
              const obj4 = { verificationLevel };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateGuild(obj4);
            }
          }
        }
    };
    tmp5Result = verificationLevel(first1[18]);
    TableSwitchRow = tmp3(tmp4[16]).TableSwitchRow;
    intl5 = tmp3(tmp4[15]).intl;
    items3 = [closure_10(TableRowGroup, obj12), ];
    const obj15 = { helperText: intl6.string(guild(first1[15]).t.b0MaDV), hasIcons: false, children: closure_10(tmp5Result2, obj16) };
    const TableRowGroup2 = tmp3(tmp4[17]).TableRowGroup;
    intl6 = tmp3(tmp4[15]).intl;
    obj16 = { formSwitchDisabled: first1 === tmp19, children: closure_10(TableSwitchRow2, obj17) };
    obj17 = {
      label: intl7.string(guild(first1[15]).t.zOuzl7),
      value: guild.explicitContentFilter === constants2.ALL_MEMBERS,
      disabled: first1 === tmp19,
      onValueChange(arg0) {
          if (null != guild) {
            const tmp10 = arg0;
            if (tmp10) {
              if (tmp.explicitContentFilter < constants.ALL_MEMBERS) {
                const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
                const obj3 = GuildSettingsActionCreatorsDefault;
                obj3.updateGuild(obj2);
              }
            }
            if (!arg0) {
              const obj4 = { explicitContentFilter: first1 };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateGuild(obj4);
            }
          }
        }
    };
    tmp5Result2 = verificationLevel(first1[18]);
    TableSwitchRow2 = tmp3(tmp4[16]).TableSwitchRow;
    intl7 = tmp3(tmp4[15]).intl;
    items3[1] = closure_10(TableRowGroup2, obj15);
    items2[1] = closure_11(Stack, obj10);
    tmp21Result = closure_11(EnableCommunityModalScreen, obj4);
  }
  return tmp21Result;
});
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default tmp5;