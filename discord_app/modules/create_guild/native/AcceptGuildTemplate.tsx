// === Module 11406: AcceptGuildTemplate ===

// Module 11406 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl11 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2108 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6829 */;
import FormDividerDefault from "FormDivider" /* 8899 */;
import AssetRegistryDefault from "AssetRegistry" /* 9189 */;
import RolePillDefault from "RolePill" /* 10685 */;
import InvalidLink from "InvalidLink" /* 11407 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11409 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11414 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11415 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles_mod from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channels, guildTemplate;

let Fonts;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
({ MarketingURLs: metroImportAll, Fonts, ChannelTypes: c9 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, header: obj3, description: { textAlign: "center", marginTop: 8, marginBottom: 32 }, iconUploader: { alignSelf: "center", marginBottom: 12 }, hint: { marginVertical: 8 }, createButtonWrapper: { marginTop: 8 }, resolvingContainer: { alignItems: "center", flex: 1, justifyContent: "center" }, divider: { marginTop: 8 }, sectionHeader: obj4, rolesChannelsWrapper: obj5, channelsWrapper: { flexDirection: "column", paddingVertical: 0 }, rolesWrapper: { flexDirection: "row", flexWrap: "wrap" }, channelRow: { alignItems: "center", flexDirection: "row", height: 40 }, channelIcon: { marginLeft: 12, marginRight: 8, height: 20, width: 20 }, channelCategoryIcon: { marginLeft: 0, marginRight: 2, height: 12, width: 12 }, channelName: obj6, channelCategoryName: obj7, sectionTip: { marginTop: 8 }, protip: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center" };
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj4 = { marginTop: 24 };
TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj6 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
obj7 = {};
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj8 = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = unpackModuleId(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.resolvingContainer) {
    const obj2 = { style: tmp4.resolvingContainer, children: first };
    const tmp11 = unpackModuleId(React3, obj2);
    cResult[1] = tmp4.resolvingContainer;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  const obj = { style: closure_14().resolvingContainer, children: unpackModuleId(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return unpackModuleId(React3, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { Illustration: InvalidLink.InvalidLink, title: intl.string(intl11.t.C7ZRNw), body: intl2.string(intl11.t.A6MwXE) };
    const EmptyState = native.EmptyState;
    intl = intl11.intl;
    intl2 = intl11.intl;
    const tmp6 = unpackModuleId(EmptyState, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let intl;
  let intl2;
  const obj = { Illustration: InvalidLink.InvalidLink, title: intl.string(intl11.t.C7ZRNw), body: intl2.string(intl11.t.A6MwXE) };
  const EmptyState = native.EmptyState;
  intl = intl11.intl;
  intl2 = intl11.intl;
  return unpackModuleId(EmptyState, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  let chooseIcon;
  let createServer;
  let errors;
  let icon;
  let intl10;
  let intl6;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let name;
  let setName;
  let obj = guildTemplate(576);
  const cResult = obj.c(72);
  guildTemplate = guildTemplate.guildTemplate;
  ({ createServer, name, setName, icon, chooseIcon, errors } = guildTemplate);
  const tmp4 = closure_14();
  const obj2 = guildTemplate(6469);
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === guildTemplate.serializedSourceGuild.id) {
    let arr;
    let tmp14;
    if (cResult[1] === guildTemplate.serializedSourceGuild.roles) {
      arr = cResult[2];
    }
    if (cResult[6] !== bottom) {
      const obj3 = { marginBottom: bottom };
      cResult[6] = bottom;
      cResult[7] = obj3;
      tmp14 = obj3;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp4.wrapper) {
      let tmp15;
      let tmp17;
      let tmp19;
      if (cResult[9] === tmp14) {
        tmp15 = cResult[10];
      }
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildTemplate(1126).t.QzUORX);
        cResult[11] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp4.header) {
        const obj4 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp17 };
        const tmp21 = closure_11(guildTemplate(4886).Text, obj4);
        cResult[12] = tmp4.header;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] === guildTemplate.name) {
        let tmp22;
        if (cResult[15] === tmp4.description) {
          tmp22 = cResult[16];
        }
        if (cResult[17] === chooseIcon) {
          if (cResult[18] === icon) {
            if (cResult[19] === tmp4.iconUploader) {
              let tmp25;
              let tmp28;
              if (cResult[20] === tmp4.wrapper.backgroundColor) {
                tmp25 = cResult[21];
              }
              const _Symbol2 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult1 = intl2.string(guildTemplate(1126).t.dBih7e);
                cResult[22] = stringResult1;
                tmp28 = stringResult1;
              } else {
                tmp28 = cResult[22];
              }
              let name1;
              if (errors != null) {
                name1 = errors.name;
              }
              if (cResult[23] === name) {
                if (cResult[24] === setName) {
                  let tmp31;
                  let tmp34;
                  let tmp37;
                  let tmp40;
                  if (cResult[25] === name1) {
                    tmp31 = cResult[26];
                  }
                  const _Symbol3 = Symbol;
                  const hint = tmp4.hint;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(1126).intl;
                    const obj5 = { guidelinesURL: constants.GUIDELINES };
                    const formatResult = intl3.format(guildTemplate(1126).t["2bprXx"], obj5);
                    cResult[27] = formatResult;
                    tmp34 = formatResult;
                  } else {
                    tmp34 = cResult[27];
                  }
                  if (cResult[28] !== tmp4.hint) {
                    const obj6 = { style: hint, variant: "text-xs/medium", color: "text-muted", children: tmp34 };
                    const tmp39 = closure_11(guildTemplate(4886).Text, obj6);
                    cResult[28] = tmp4.hint;
                    cResult[29] = tmp39;
                    tmp37 = tmp39;
                  } else {
                    tmp37 = cResult[29];
                  }
                  const _Symbol4 = Symbol;
                  const createButtonWrapper = tmp4.createButtonWrapper;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(guildTemplate(1126).t["O0p/lS"]);
                    cResult[30] = stringResult2;
                    tmp40 = stringResult2;
                  } else {
                    tmp40 = cResult[30];
                  }
                  if (cResult[31] === createServer) {
                    if (cResult[32] === guildTemplate.state === GuildTemplateStates.ACCEPTING) {
                      let tmp44;
                      if (cResult[33] === guildTemplate.state === GuildTemplateStates.ACCEPTING) {
                        tmp44 = cResult[34];
                      }
                      if (cResult[35] === tmp4.createButtonWrapper) {
                        let tmp47;
                        let tmp51;
                        let tmp54;
                        let tmp56;
                        let tmp59;
                        let tmp62;
                        if (cResult[36] === tmp44) {
                          tmp47 = cResult[37];
                        }
                        if (cResult[38] !== tmp4.divider) {
                          const obj7 = { style: tmp4.divider, outer: true };
                          const tmp53 = closure_11(FormDividerDefault, obj7);
                          cResult[38] = tmp4.divider;
                          cResult[39] = tmp53;
                          tmp51 = tmp53;
                        } else {
                          tmp51 = cResult[39];
                        }
                        const _Symbol5 = Symbol;
                        const sectionHeader = tmp4.sectionHeader;
                        if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl5 = tmp(1126).intl;
                          const stringResult3 = intl5.string(guildTemplate(1126).t.OGiMXJ);
                          cResult[40] = stringResult3;
                          tmp54 = stringResult3;
                        } else {
                          tmp54 = cResult[40];
                        }
                        if (cResult[41] !== tmp4.sectionHeader) {
                          const obj8 = { style: sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: tmp54 };
                          const tmp58 = closure_11(guildTemplate(4886).Text, obj8);
                          cResult[41] = tmp4.sectionHeader;
                          cResult[42] = tmp58;
                          tmp56 = tmp58;
                        } else {
                          tmp56 = cResult[42];
                        }
                        const _Symbol6 = Symbol;
                        if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj9 = { variant: "text-xs/medium", color: "text-default", children: intl6.string(guildTemplate(1126).t.Ztwyoz) };
                          const Text = tmp(4886).Text;
                          intl6 = tmp(1126).intl;
                          const tmp61 = closure_11(Text, obj9);
                          cResult[43] = tmp61;
                          tmp59 = tmp61;
                        } else {
                          tmp59 = cResult[43];
                        }
                        if (cResult[44] !== guildTemplate.serializedSourceGuild.channels) {
                          const obj10 = { channels: guildTemplate.serializedSourceGuild.channels };
                          const tmp65 = closure_11(closure_18, obj10);
                          cResult[44] = guildTemplate.serializedSourceGuild.channels;
                          cResult[45] = tmp65;
                          tmp62 = tmp65;
                        } else {
                          tmp62 = cResult[45];
                        }
                        if (cResult[46] === tmp4.protip) {
                          let tmp67;
                          let tmp68;
                          let tmp70;
                          let tmp73;
                          if (cResult[47] === typeConsolidationTextTransform) {
                            tmp67 = cResult[48];
                          }
                          const _Symbol7 = Symbol;
                          if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl7 = tmp(1126).intl;
                            const stringResult4 = intl7.string(guildTemplate(1126).t["8tvIiN"]);
                            cResult[49] = stringResult4;
                            tmp68 = stringResult4;
                          } else {
                            tmp68 = cResult[49];
                          }
                          if (cResult[50] !== tmp67) {
                            const obj11 = { style: tmp67, children: items };
                            items = [tmp68, ": "];
                            const tmp72 = closure_12(guildTemplate(1188).LegacyText, obj11);
                            cResult[50] = tmp67;
                            cResult[51] = tmp72;
                            tmp70 = tmp72;
                          } else {
                            tmp70 = cResult[51];
                          }
                          const _Symbol8 = Symbol;
                          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl8 = tmp(1126).intl;
                            const stringResult5 = intl8.string(guildTemplate(1126).t.de7DpI);
                            cResult[52] = stringResult5;
                            tmp73 = stringResult5;
                          } else {
                            tmp73 = cResult[52];
                          }
                          if (cResult[53] === tmp4.sectionTip) {
                            let tmp75;
                            if (cResult[54] === tmp70) {
                              tmp75 = cResult[55];
                            }
                            if (cResult[56] === arr) {
                              let tmp78;
                              if (cResult[57] === tmp4.sectionHeader) {
                                tmp78 = cResult[58];
                              }
                              if (cResult[59] === tmp31) {
                                if (cResult[60] === tmp37) {
                                  if (cResult[61] === tmp47) {
                                    if (cResult[62] === tmp51) {
                                      if (cResult[63] === tmp56) {
                                        if (cResult[64] === tmp62) {
                                          if (cResult[65] === tmp15) {
                                            if (cResult[66] === tmp75) {
                                              if (cResult[67] === tmp78) {
                                                if (cResult[68] === tmp19) {
                                                  if (cResult[69] === tmp22) {
                                                    let tmp84;
                                                    if (cResult[70] === tmp25) {
                                                      tmp84 = cResult[71];
                                                    }
                                                    return tmp84;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj12 = { contentContainerStyle: tmp15, keyboardShouldPersistTaps: "handled", children: items1 };
                              items1 = [tmp19, tmp22, tmp25, tmp31, tmp37, tmp47, tmp51, tmp56, tmp59, tmp62, tmp75, tmp78];
                              const tmp87 = closure_12(closure_5, obj12);
                              cResult[59] = tmp31;
                              cResult[60] = tmp37;
                              cResult[61] = tmp47;
                              cResult[62] = tmp51;
                              cResult[63] = tmp56;
                              cResult[64] = tmp62;
                              cResult[65] = tmp15;
                              cResult[66] = tmp75;
                              cResult[67] = tmp78;
                              cResult[68] = tmp19;
                              cResult[69] = tmp22;
                              cResult[70] = tmp25;
                              cResult[71] = tmp87;
                              tmp84 = tmp87;
                            }
                            let tmp79 = null;
                            if (arr.length > 0) {
                              const obj13 = { children: items2 };
                              const obj14 = { style: tmp4.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl9.string(guildTemplate(1126).t.mQ0H1p) };
                              const Text2 = tmp(4886).Text;
                              intl9 = tmp(1126).intl;
                              items2 = [closure_11(Text2, obj14), , ];
                              const obj15 = { variant: "text-xs/medium", color: "text-default", children: intl10.string(guildTemplate(1126).t.jOPEYC) };
                              const Text3 = tmp(4886).Text;
                              intl10 = tmp(1126).intl;
                              items2[1] = closure_11(Text3, obj15);
                              const obj16 = { roles: arr };
                              items2[2] = closure_11(closure_19, obj16);
                              tmp79 = closure_12(closure_13, obj13);
                            }
                            cResult[56] = arr;
                            cResult[57] = tmp4.sectionHeader;
                            cResult[58] = tmp79;
                            tmp78 = tmp79;
                          }
                          const obj17 = { style: tmp66, variant: "text-xs/medium", color: "interactive-text-default", children: items3 };
                          items3 = [tmp70, tmp73];
                          const tmp77 = closure_12(guildTemplate(4886).Text, obj17);
                          cResult[53] = tmp4.sectionTip;
                          cResult[54] = tmp70;
                          cResult[55] = tmp77;
                          tmp75 = tmp77;
                        }
                        const items4 = [tmp4.protip, typeConsolidationTextTransform];
                        cResult[46] = tmp4.protip;
                        cResult[47] = typeConsolidationTextTransform;
                        cResult[48] = items4;
                        tmp67 = items4;
                      }
                      const obj18 = { style: createButtonWrapper, children: tmp44 };
                      const tmp50 = closure_11(closure_4, obj18);
                      cResult[35] = tmp4.createButtonWrapper;
                      cResult[36] = tmp44;
                      cResult[37] = tmp50;
                      tmp47 = tmp50;
                    }
                  }
                  const obj19 = { size: "md", text: tmp40, onPress: createServer, loading: guildTemplate.state === GuildTemplateStates.ACCEPTING, disabled: guildTemplate.state === GuildTemplateStates.ACCEPTING, grow: true };
                  const tmp46 = closure_11(guildTemplate(5594).Button, obj19);
                  cResult[31] = createServer;
                  cResult[32] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
                  cResult[33] = guildTemplate.state === GuildTemplateStates.ACCEPTING;
                  cResult[34] = tmp46;
                  tmp44 = tmp46;
                }
              }
              const obj20 = { label: tmp28, errorMessage: name1, value: name, onChange: setName, autoFocus: true, autoCorrect: false, returnKeyType: "done", clearable: true };
              const tmp33 = closure_11(guildTemplate(6098).TextInput, obj20);
              cResult[23] = name;
              cResult[24] = setName;
              cResult[25] = name1;
              cResult[26] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        const obj21 = { iconBackgroundColor: tmp4.wrapper.backgroundColor, style: tmp4.iconUploader, onPress: chooseIcon, icon };
        const tmp27 = closure_11(GuildIconUploaderDefault, obj21);
        cResult[17] = chooseIcon;
        cResult[18] = icon;
        cResult[19] = tmp4.iconUploader;
        cResult[20] = tmp4.wrapper.backgroundColor;
        cResult[21] = tmp27;
        tmp25 = tmp27;
      }
      const obj22 = { style: tmp4.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
      const tmp24 = closure_11(guildTemplate(4886).Text, obj22);
      cResult[14] = guildTemplate.name;
      cResult[15] = tmp4.description;
      cResult[16] = tmp24;
      tmp22 = tmp24;
    }
    const items5 = [tmp4.wrapper, tmp14];
    cResult[8] = tmp4.wrapper;
    cResult[9] = tmp14;
    cResult[10] = items5;
    tmp15 = items5;
  }
  if (cResult[3] !== guildTemplate.serializedSourceGuild.id) {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
    cResult[3] = guildTemplate.serializedSourceGuild.id;
    cResult[4] = A;
  } else {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
    cResult[5] = tmp12;
  } else {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
  }
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map(A);
  const found = mapped.filter(tmp12);
  cResult[0] = guildTemplate.serializedSourceGuild.id;
  cResult[1] = guildTemplate.serializedSourceGuild.roles;
  cResult[2] = found;
  arr = found;
}) : ((guildTemplate) => {
  let Button;
  let chooseIcon;
  let createServer;
  let icon;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let name;
  let name1;
  let obj10;
  let obj8;
  let setName;
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  let obj = guildTemplate(6469);
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const mapped = roles.map((item) => {
    const obj = GuildRoleRecordUtilsAll;
    return obj.fromServer(guildTemplate.serializedSourceGuild.id, item);
  });
  const found = mapped.filter((item) => !isEveryoneRole(item));
  const obj2 = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled", children: items1 };
  items = [tmp.wrapper, { marginBottom: bottom }];
  const obj3 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(guildTemplate(1126).t.QzUORX) };
  const Text = guildTemplate(4886).Text;
  intl = guildTemplate(1126).intl;
  items1 = [closure_11(Text, obj3), , , , , , , , , , , ];
  const obj4 = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = closure_11(guildTemplate(4886).Text, obj4);
  const obj5 = { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon };
  items1[2] = closure_11(GuildIconUploaderDefault, obj5);
  const obj6 = { label: intl2.string(guildTemplate(1126).t.dBih7e), errorMessage: name1, value: name, onChange: setName, autoFocus: true, autoCorrect: false, returnKeyType: "done", clearable: true };
  const TextInput = guildTemplate(6098).TextInput;
  intl2 = guildTemplate(1126).intl;
  name1 = undefined;
  if (errors != null) {
    name1 = errors.name;
  }
  items1[3] = closure_11(TextInput, obj6);
  const obj7 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: intl3.format(guildTemplate(1126).t["2bprXx"], obj8) };
  const Text2 = tmp2(4886).Text;
  intl3 = tmp2(1126).intl;
  obj8 = { guidelinesURL: constants.GUIDELINES };
  items1[4] = closure_11(Text2, obj7);
  const obj9 = { style: tmp.createButtonWrapper, children: closure_11(Button, obj10) };
  obj10 = { size: "md", text: intl4.string(guildTemplate(1126).t["O0p/lS"]), onPress: createServer, loading: guildTemplate.state === GuildTemplateStates.ACCEPTING, disabled: guildTemplate.state === GuildTemplateStates.ACCEPTING, grow: true };
  Button = tmp2(5594).Button;
  intl4 = tmp2(1126).intl;
  items1[5] = closure_11(closure_4, obj9);
  const obj11 = { style: tmp.divider, outer: true };
  items1[6] = closure_11(FormDividerDefault, obj11);
  const obj12 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl5.string(guildTemplate(1126).t.OGiMXJ) };
  const Text3 = tmp2(4886).Text;
  intl5 = tmp2(1126).intl;
  items1[7] = closure_11(Text3, obj12);
  const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl6.string(guildTemplate(1126).t.Ztwyoz) };
  const Text4 = tmp2(4886).Text;
  intl6 = tmp2(1126).intl;
  items1[8] = closure_11(Text4, obj13);
  const obj14 = { channels: guildTemplate.serializedSourceGuild.channels };
  items1[9] = closure_11(closure_18, obj14);
  const obj15 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: items4 };
  const Text5 = tmp2(4886).Text;
  const obj16 = { style: items2, children: items3 };
  items2 = [tmp.protip, typeConsolidationTextTransform];
  const LegacyText = tmp2(1188).LegacyText;
  const intl7 = tmp2(1126).intl;
  items3 = [intl7.string(guildTemplate(1126).t["8tvIiN"]), ": "];
  items4 = [closure_12(LegacyText, obj16), ];
  const intl8 = tmp2(1126).intl;
  items4[1] = intl8.string(guildTemplate(1126).t.de7DpI);
  items1[10] = closure_12(Text5, obj15);
  let tmp9Result = null;
  if (found.length > 0) {
    const obj17 = { children: items5 };
    const obj18 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl9.string(guildTemplate(1126).t.mQ0H1p) };
    const Text6 = tmp2(4886).Text;
    intl9 = tmp2(1126).intl;
    items5 = [closure_11(Text6, obj18), , ];
    const obj19 = { variant: "text-xs/medium", color: "text-default", children: intl10.string(guildTemplate(1126).t.jOPEYC) };
    const Text7 = tmp2(4886).Text;
    intl10 = tmp2(1126).intl;
    items5[1] = closure_11(Text7, obj19);
    const obj20 = { roles: found };
    items5[2] = closure_11(closure_19, obj20);
    tmp9Result = closure_12(closure_13, obj17);
  }
  items1[11] = tmp9Result;
  return closure_12(closure_5, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((channels) => {
  let closure_0;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(20);
  channels = channels.channels;
  const tmp3 = closure_14();
  _require = tmp3;
  if (cResult[0] === channels) {
    if (cResult[1] === tmp3.channelCategoryIcon) {
      if (cResult[2] === tmp3.channelCategoryName) {
        if (cResult[3] === tmp3.channelIcon) {
          if (cResult[4] === tmp3.channelName) {
            if (cResult[5] === tmp3.channelRow) {
              tmp4 = cResult[6];
            }
            if (cResult[14] === tmp3.channelsWrapper) {
              let tmp9;
              if (cResult[15] === tmp3.rolesChannelsWrapper) {
                tmp9 = cResult[16];
              }
              if (cResult[17] === tmp4) {
                let tmp10;
                if (cResult[18] === tmp9) {
                  tmp10 = cResult[19];
                }
                return tmp10;
              }
              let obj3 = { style: tmp9, children: tmp4 };
              const tmp13 = closure_11(closure_4, obj3);
              cResult[17] = tmp4;
              cResult[18] = tmp9;
              cResult[19] = tmp13;
              tmp10 = tmp13;
            }
            let items = [, ];
            ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp3);
            cResult[14] = tmp3.channelsWrapper;
            cResult[15] = tmp3.rolesChannelsWrapper;
            cResult[16] = items;
            tmp9 = items;
          }
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(parent_id) {
      let result;
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    };
    cResult[7] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[7];
  }
  if (cResult[8] === tmp3.channelCategoryIcon) {
    if (cResult[9] === tmp3.channelCategoryName) {
      if (cResult[10] === tmp3.channelIcon) {
        if (cResult[11] === tmp3.channelName) {
          let tmp6;
          if (cResult[12] === tmp3.channelRow) {
            tmp6 = cResult[13];
          }
          let obj2 = _modDef12(channels);
          const sortByResult = obj2.sortBy(tmp5);
          const iter = sortByResult.map(tmp6);
          const valueResult = iter.value();
          cResult[0] = channels;
          cResult[1] = tmp3.channelCategoryIcon;
          cResult[2] = tmp3.channelCategoryName;
          cResult[3] = tmp3.channelIcon;
          cResult[4] = tmp3.channelName;
          cResult[5] = tmp3.channelRow;
          cResult[6] = valueResult;
          tmp4 = valueResult;
        }
      }
    }
  }
  const fn2 = function c(children) {
    let items1;
    let tmp10Result;
    const items = [closure_0.channelIcon, ];
    let channelCategoryIcon = null;
    const obj = { style: closure_0.channelRow, children: items1 };
    const Icon = native.Icon;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryIcon = closure_0.channelCategoryIcon;
    }
    items[1] = channelCategoryIcon;
    const type = children.type;
    const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: tmp10Result };
    if (isGuildVocalChannelType(type)) {
      tmp10Result = AssetRegistryDefault;
    } else if (type === constants.GUILD_CATEGORY) {
      tmp10Result = AssetRegistryDefault2;
    } else {
      tmp10Result = AssetRegistryDefault3;
    }
    items1 = [unpackModuleId(Icon, obj2), ];
    const items2 = [closure_0.channelName, ];
    let channelCategoryName = null;
    const LegacyText = native.LegacyText;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryName = closure_0.channelCategoryName;
    }
    const obj3 = { numberOfLines: 1, style: items2, children: children.name };
    items2[1] = channelCategoryName;
    items1[1] = unpackModuleId(LegacyText, obj3);
    return closure_12(React3, obj, children.id);
  };
  cResult[8] = tmp3.channelCategoryIcon;
  cResult[9] = tmp3.channelCategoryName;
  cResult[10] = tmp3.channelIcon;
  cResult[11] = tmp3.channelName;
  cResult[12] = tmp3.channelRow;
  cResult[13] = fn2;
  tmp6 = fn2;
}) : ((channels) => {
  let items;
  channels = channels.channels;
  const tmp = closure_14();
  let closure_0 = tmp;
  let obj = _modDef12(channels);
  const sortByResult = obj.sortBy((parent_id) => {
    let result;
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  const iter = sortByResult.map((children) => {
    let items1;
    let tmp10Result;
    const items = [closure_0.channelIcon, ];
    let channelCategoryIcon = null;
    const obj = { style: closure_0.channelRow, children: items1 };
    const Icon = native.Icon;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryIcon = closure_0.channelCategoryIcon;
    }
    items[1] = channelCategoryIcon;
    const type = children.type;
    const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: tmp10Result };
    if (isGuildVocalChannelType(type)) {
      tmp10Result = AssetRegistryDefault;
    } else if (type === constants.GUILD_CATEGORY) {
      tmp10Result = AssetRegistryDefault2;
    } else {
      tmp10Result = AssetRegistryDefault3;
    }
    items1 = [unpackModuleId(Icon, obj2), ];
    const items2 = [closure_0.channelName, ];
    let channelCategoryName = null;
    const LegacyText = native.LegacyText;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryName = closure_0.channelCategoryName;
    }
    const obj3 = { numberOfLines: 1, style: items2, children: children.name };
    items2[1] = channelCategoryName;
    items1[1] = unpackModuleId(LegacyText, obj3);
    return closure_12(React3, obj, children.id);
  });
  let obj2 = { style: items, children: iter.value() };
  items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return closure_11(closure_4, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((roles) => {
  let tmp3;
  let obj = react2;
  const cResult = obj.c(9);
  roles = roles.roles;
  const tmp2 = closure_14();
  if (cResult[0] !== roles) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(role) {
        let int2hexResult;
        const obj = { disableInteraction: true, role, color: int2hexResult };
        int2hexResult = undefined;
        const tmp3 = RolePillDefault;
        if (0 !== role.color) {
          const obj2 = require("utils/ColorUtils");
          int2hexResult = obj2.int2hex(role.color);
        }
        return closure_1_11(tmp3, obj, role.id);
      };
      cResult[2] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[2];
    }
    const substr = roles.slice();
    const reversed = substr.reverse();
    const mapped = reversed.map(tmp5);
    cResult[0] = roles;
    cResult[1] = mapped;
    tmp3 = mapped;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[3] === tmp2.rolesChannelsWrapper) {
    let tmp7;
    if (cResult[4] === tmp2.rolesWrapper) {
      tmp7 = cResult[5];
    }
    if (cResult[6] === tmp3) {
      let tmp8;
      if (cResult[7] === tmp7) {
        tmp8 = cResult[8];
      }
      return tmp8;
    }
    let obj2 = { style: tmp7, children: tmp3 };
    const tmp11 = unpackModuleId(React3, obj2);
    cResult[6] = tmp3;
    cResult[7] = tmp7;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp2);
  cResult[3] = tmp2.rolesChannelsWrapper;
  cResult[4] = tmp2.rolesWrapper;
  cResult[5] = items;
  tmp7 = items;
}) : ((roles) => {
  let items;
  roles = roles.roles;
  const tmp = closure_14();
  const substr = roles.slice();
  const reversed = substr.reverse();
  let obj = {
    style: items,
    children: reversed.map((role) => {
      let int2hexResult;
      const obj = { disableInteraction: true, role, color: int2hexResult };
      int2hexResult = undefined;
      const tmp3 = RolePillDefault;
      if (0 !== role.color) {
        const obj2 = require("utils/ColorUtils");
        int2hexResult = obj2.int2hex(role.color);
      }
      return closure_1_11(tmp3, obj, role.id);
    })
  };
  items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp);
  return unpackModuleId(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(7);
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    let tmp22;
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (GuildTemplateStates.ACCEPTING !== state) {
        if (GuildTemplateStates.ACCEPTED !== state) {
          if (GuildTemplateStates.RESOLVING === state) {
            let tmp15;
            if (cResult[2] !== guildTemplate) {
              const obj2 = {};
              const merged = Object.assign(guildTemplate);
              const tmp21 = unpackModuleId(closure_15, obj2);
              cResult[2] = guildTemplate;
              cResult[3] = tmp21;
              tmp15 = tmp21;
            } else {
              tmp15 = cResult[3];
            }
            return tmp15;
          } else if (GuildTemplateStates.EXPIRED === state) {
            let tmp11;
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp14 = unpackModuleId(closure_16, {});
              cResult[4] = tmp14;
              tmp11 = tmp14;
            } else {
              tmp11 = cResult[4];
            }
            return tmp11;
          }
        }
      }
    }
    if (cResult[0] !== guildTemplate) {
      const obj3 = {};
      const merged1 = Object.assign(guildTemplate);
      const tmp28 = unpackModuleId(closure_17, obj3);
      cResult[0] = guildTemplate;
      cResult[1] = tmp28;
      tmp22 = tmp28;
    } else {
      tmp22 = cResult[1];
    }
    return tmp22;
  }
  if (cResult[5] !== guildTemplate) {
    const obj4 = {};
    const merged2 = Object.assign(guildTemplate);
    const tmp9 = unpackModuleId(closure_15, obj4);
    cResult[5] = guildTemplate;
    cResult[6] = tmp9;
    tmp3 = tmp9;
  } else {
    tmp3 = cResult[6];
  }
  return tmp3;
}) : ((guildTemplate) => {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (GuildTemplateStates.ACCEPTING !== state) {
        if (GuildTemplateStates.ACCEPTED !== state) {
          if (GuildTemplateStates.RESOLVING === state) {
            const obj2 = {};
            const merged = Object.assign(guildTemplate);
            return unpackModuleId(closure_15, obj2);
          } else if (GuildTemplateStates.EXPIRED === state) {
            return unpackModuleId(closure_16, {});
          }
        }
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(guildTemplate);
    return unpackModuleId(closure_17, obj3);
  }
  const obj = {};
  const merged2 = Object.assign(guildTemplate);
  return unpackModuleId(closure_15, obj);
});
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default tmp12;