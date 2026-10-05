// === Module 17807: GuildSettingsRoleEditConnectionConfiguration ===

// Module 17807 (GuildSettingsRoleEditConnectionConfiguration)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import Text_Text from "Text/Text" /* 4886 */;
import PlatformsDefault from "Platforms" /* 5442 */;
import Pressables from "Pressables" /* 5909 */;
import TableRow2 from "TableRow" /* 5993 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import TableRowGroup3 from "TableRowGroup" /* 6074 */;
import useGetOrFetchApplicationBatched2 from "useGetOrFetchApplicationBatched" /* 11180 */;
import RoleConnectionRequirementUtils from "RoleConnectionRequirementUtils" /* 17808 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 6679 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, map, onChangeText, operator, value;

let c10;
let c9;
let closure_12;
let closure_14;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let unpackModuleId;
function ApplicationMetadataRules(arg0) {
  let integration;
  let locked;
  let onConfigurationChange;
  let require;
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        let id;
        let id1;
        type = type.type;
        if (constants.INTEGER_LESS_THAN_EQUAL !== type) {
          let LESS_THAN;
          if (constants.DATETIME_LESS_THAN_EQUAL !== type) {
            if (constants.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (constants.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (constants.INTEGER_EQUAL !== type) {
                  if (constants.BOOLEAN_EQUAL !== type) {
                    if (constants.INTEGER_NOT_EQUAL !== type) {
                      if (constants.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    LESS_THAN = metroImportAll.NOT_EQUAL;
                  }
                }
                LESS_THAN = metroImportAll.EQUAL;
              }
            }
            LESS_THAN = metroImportAll.GREATER_THAN;
          }
          const type2 = type.type;
          if (constants.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (constants.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (constants.INTEGER_EQUAL !== type2) {
                if (constants.INTEGER_NOT_EQUAL !== type2) {
                  if (constants.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (constants.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      const obj = { fieldText: null, metadataField: null, existingPendingConfiguration: _require.get(type.key), platform: null, onConfigurationChange: importDefault, locked: dependencyMap, operator: LESS_THAN, applicationId: id };
                      ({ description: obj.fieldText, key: obj.metadataField } = type);
                      const application = integration.application;
                      id = undefined;
                      if (application != null) {
                        id = application.id;
                      }
                      return closure_12(closure_17, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          const application2 = integration.application;
          const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: _require.get(type.key), platform: null, onConfigurationChange: importDefault, locked: dependencyMap, operator: LESS_THAN, applicationId: id1 };
          id1 = undefined;
          if (application2 != null) {
            id1 = application2.id;
          }
          return closure_12(closure_18, obj3, type.key);
        }
        LESS_THAN = metroImportAll.LESS_THAN;
      });
    }
  }
  return mapped;
}
let react = react_mod;
const View = react_native.View;
let PlatformTypes = Constants2.PlatformTypes;
({ MetadataFields: metroImportDefault, OperatorTypes: metroImportAll, MetadataItemTypes: c9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: obj2, numericalInputContainerBase: obj3, numericalInput: size, appNumericalInput: size1, appNumericalInputContainer: { flexDirection: "row", alignItems: "center" }, appNumericalInputText: { flexShrink: 1 }, numericalInputDisabled: obj4, metadataRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, metadataRowText: { lineHeight: 32 } };
obj2 = { transform: items };
items = [{ translateY: 10 }];
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { width: 54, height: 32, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
size1 = { width: 54, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let integration;
  let locked;
  let name;
  let onRemove;
  let platform;
  let tmp16;
  const obj = react2;
  const cResult = obj.c(20);
  ({ platform, integration, applicationId, onRemove, locked } = arg0);
  let application1;
  const tmp4 = useThemeDefault();
  const useGetOrFetchApplicationBatched = useGetOrFetchApplicationBatched2.useGetOrFetchApplicationBatched;
  useGetOrFetchApplicationBatched2;
  if (integration != null) {
    application1 = integration.application;
  }
  let tmp7;
  if (null == application1) {
    tmp7 = applicationId;
  }
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched(tmp7);
  let application2;
  if (integration != null) {
    application2 = integration.application;
  }
  if (null != application2) {
    let tmp24;
    let bot;
    if (integration != null) {
      const application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    if (cResult[0] !== bot) {
      const obj2 = { size: native.AvatarSizes.XSMALL, user: bot, guildId: "r" };
      const Avatar2 = native.Avatar;
      const tmp26 = onChangeText(Avatar2, obj2);
      cResult[0] = bot;
      cResult[1] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[1];
    }
    name = integration.application.name;
    tmp16 = tmp24;
  } else if (null != applicationId) {
    if (undefined === getOrFetchApplicationBatched) {
      return null;
    } else {
      let bot1;
      if (getOrFetchApplicationBatched != null) {
        bot1 = getOrFetchApplicationBatched.bot;
      }
      let tmp18;
      if (null != bot1) {
        let tmp19;
        if (cResult[2] !== getOrFetchApplicationBatched.bot) {
          const obj3 = { size: native.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "r" };
          const Avatar = native.Avatar;
          const tmp21 = onChangeText(Avatar, obj3);
          cResult[2] = getOrFetchApplicationBatched.bot;
          cResult[3] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[3];
        }
        tmp18 = tmp19;
      }
      let name1;
      if (getOrFetchApplicationBatched != null) {
        name1 = getOrFetchApplicationBatched.name;
      }
      name = name1;
      tmp16 = tmp18;
    }
  } else if (null != platform) {
    let tmp11;
    let tmp13;
    const icon = platform.icon;
    const tmpResult = shared;
    const tmp10 = tmpResult.isThemeDark(tmp4) ? icon.darkPNG : icon.lightPNG;
    if (cResult[4] !== tmp10) {
      const tmpResult2 = AvatarUtils;
      const source = tmpResult2.makeSource(tmp10);
      cResult[4] = tmp10;
      cResult[5] = source;
      tmp11 = source;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp11) {
      const obj4 = { source: tmp11, disableColor: true };
      const tmp15 = onChangeText(native.Icon, obj4);
      cResult[6] = tmp11;
      cResult[7] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    tmp16 = tmp13;
  }
  let name2;
  const tmp27 = cResult[8];
  if (platform != null) {
    name2 = platform.name;
  }
  if (tmp27 === name2) {
    let tmp29;
    let tmp34;
    let tmp36;
    if (cResult[9] === name) {
      tmp29 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const stringResult = intl2.string(intl3.t.N86XcP);
      cResult[11] = stringResult;
      tmp34 = stringResult;
    } else {
      tmp34 = cResult[11];
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp38 = onChangeText(XSmallIcon.XSmallIcon, {});
      cResult[12] = tmp38;
      tmp36 = tmp38;
    } else {
      tmp36 = cResult[12];
    }
    if (cResult[13] === locked) {
      let tmp39;
      if (cResult[14] === onRemove) {
        tmp39 = cResult[15];
      }
      if (cResult[16] === tmp16) {
        if (cResult[17] === tmp29) {
          let tmp42;
          if (cResult[18] === tmp39) {
            tmp42 = cResult[19];
          }
          return tmp42;
        }
      }
      const obj5 = { icon: tmp16, label: tmp29, trailing: tmp39 };
      const tmp44 = onChangeText(TableRow2.TableRow, obj5);
      cResult[16] = tmp16;
      cResult[17] = tmp29;
      cResult[18] = tmp39;
      cResult[19] = tmp44;
      tmp42 = tmp44;
    }
    const obj6 = { "aria-label": tmp34, onPress: onRemove, disabled: locked, children: tmp36 };
    const tmp41 = onChangeText(Pressables.PressableOpacity, obj6);
    cResult[13] = locked;
    cResult[14] = onRemove;
    cResult[15] = tmp41;
    tmp39 = tmp41;
  }
  const intl = intl3.intl;
  const format = intl.format;
  let name3;
  const Nj0a3j = intl3.t.Nj0a3j;
  if (platform != null) {
    name3 = platform.name;
  }
  if (name3 == null) {
    name3 = name;
  }
  const formatResult = format(Nj0a3j, { platformName: name3 });
  let name4;
  if (platform != null) {
    name4 = platform.name;
  }
  cResult[8] = name4;
  cResult[9] = name;
  cResult[10] = formatResult;
  tmp29 = formatResult;
}) : ((arg0) => {
  let Nj0a3j;
  let PressableOpacity;
  let applicationId;
  let bot;
  let format;
  let integration;
  let intl2;
  let locked;
  let name;
  let name2;
  let obj5;
  let onRemove;
  let platform;
  let tmp3Result2;
  let tmp9Result;
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let application1;
  const tmp2 = useThemeDefault();
  const useGetOrFetchApplicationBatched = useGetOrFetchApplicationBatched2.useGetOrFetchApplicationBatched;
  useGetOrFetchApplicationBatched2;
  if (integration != null) {
    application1 = integration.application;
  }
  let tmp6;
  if (null == application1) {
    tmp6 = applicationId;
  }
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched(tmp6);
  let application2;
  if (integration != null) {
    application2 = integration.application;
  }
  if (null != application2) {
    const obj = { size: native.AvatarSizes.XSMALL, user: bot, guildId: "r" };
    const Avatar2 = native.Avatar;
    bot = undefined;
    if (integration != null) {
      const application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    tmp9Result = onChangeText(Avatar2, obj);
    name = integration.application.name;
  } else if (null != applicationId) {
    if (undefined === getOrFetchApplicationBatched) {
      return null;
    } else {
      let bot1;
      if (getOrFetchApplicationBatched != null) {
        bot1 = getOrFetchApplicationBatched.bot;
      }
      let tmp13;
      if (null != bot1) {
        const obj2 = { size: native.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "r" };
        const Avatar = native.Avatar;
        tmp13 = onChangeText(Avatar, obj2);
      }
      let name1;
      if (getOrFetchApplicationBatched != null) {
        name1 = getOrFetchApplicationBatched.name;
      }
      name = name1;
      tmp9Result = tmp13;
    }
  } else if (null != platform) {
    const Icon = native.Icon;
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    const icon = platform.icon;
    const obj3 = { source: makeSource(tmp3Result2.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    tmp3Result2 = shared;
    tmp9Result = onChangeText(Icon, obj3);
  }
  const obj4 = { icon: tmp9Result, label: format(Nj0a3j, { platformName: name2 }), trailing: onChangeText(PressableOpacity, obj5) };
  const TableRow = TableRow2.TableRow;
  const intl = intl3.intl;
  format = intl.format;
  name2 = undefined;
  Nj0a3j = intl3.t.Nj0a3j;
  if (platform != null) {
    name2 = platform.name;
  }
  if (name2 == null) {
    name2 = name;
  }
  obj5 = { "aria-label": intl2.string(intl3.t.N86XcP), onPress: onRemove, disabled: locked, children: onChangeText(XSmallIcon.XSmallIcon, {}) };
  PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl3.intl;
  return onChangeText(TableRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((existingPendingConfiguration) => {
  let applicationId;
  let fieldText;
  let locked;
  let metadataField;
  let platform;
  let obj = metadataField(platform[9]);
  const cResult = obj.c(13);
  ({ fieldText, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  const tmp2 = platform;
  platform = existingPendingConfiguration.platform;
  const onConfigurationChange = existingPendingConfiguration.onConfigurationChange;
  ({ locked, applicationId } = existingPendingConfiguration);
  let EQUAL = existingPendingConfiguration.operator;
  if (EQUAL == null) {
    EQUAL = constants.EQUAL;
  }
  if (existingPendingConfiguration != null) {
    value = existingPendingConfiguration.configuration.value;
  }
  if (cResult[0] === applicationId) {
    let index;
    const tmp5 = cResult[1];
    if (existingPendingConfiguration != null) {
      index = existingPendingConfiguration.index;
    }
    if (tmp5 === index) {
      if (cResult[2] === metadataField) {
        if (cResult[3] === onConfigurationChange) {
          let type;
          const tmp7 = cResult[4];
          if (platform != null) {
            type = platform.type;
          }
          if (tmp7 === type) {
            let tmp9;
            if (cResult[5] === EQUAL) {
              tmp9 = cResult[6];
            }
            if (cResult[7] === fieldText) {
              if (cResult[8] === locked) {
                if (cResult[9] === metadataField) {
                  if (cResult[10] === "1" === value) {
                    let tmp13;
                    if (cResult[11] === tmp9) {
                      tmp13 = cResult[12];
                    }
                    return tmp13;
                  }
                }
              }
            }
            const obj2 = { label: fieldText, value: "1" === value, disabled: locked, onValueChange: tmp9 };
            const tmp15 = onChangeText(metadataField(tmp2[19]).TableSwitchRow, obj2, metadataField);
            let num = 7;
            cResult[7] = fieldText;
            cResult[8] = locked;
            cResult[9] = metadataField;
            cResult[10] = "1" === value;
            cResult[11] = tmp9;
            cResult[12] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
    }
  }
  cResult[0] = applicationId;
  let index1;
  if (existingPendingConfiguration != null) {
    index1 = existingPendingConfiguration.index;
  }
  cResult[1] = index1;
  cResult[2] = metadataField;
  cResult[3] = onConfigurationChange;
  let type1;
  if (platform != null) {
    type1 = platform.type;
  }
  const fn = function t(arg0) {
    let tmp = null;
    if (arg0) {
      let type;
      if (platform != null) {
        type = platform.type;
      }
      if (type == null) {
        type = authStore;
      }
      tmp = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: EQUAL, value: "1" };
      const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: EQUAL, value: "1" };
    }
    let num;
    if (existingPendingConfiguration != null) {
      num = existingPendingConfiguration.index;
    }
    if (num == null) {
      num = -1;
    }
    onConfigurationChange(tmp, num);
  };
  cResult[4] = type1;
  cResult[5] = EQUAL;
  cResult[6] = fn;
  tmp9 = fn;
}) : ((metadataField) => {
  let applicationId;
  let fieldText;
  let locked;
  let type;
  metadataField = metadataField.metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, applicationId: react, operator } = metadataField);
  operator = undefined;
  ({ fieldText, locked } = metadataField);
  if (operator == null) {
    operator = constants.EQUAL;
  }
  let obj = {
    label: fieldText,
    value: "1" === value,
    disabled: locked,
    onValueChange(arg0) {
      let tmp = null;
      if (arg0) {
        dependencyMap = undefined;
        if (dependencyMap != null) {
          dependencyMap = dependencyMap.type;
        }
        if (dependencyMap == null) {
          dependencyMap = authStore;
        }
        tmp = { connectionType: dependencyMap, applicationId: react, connectionMetadataField: metadataField, operator, value: "1" };
        const obj = { connectionType: dependencyMap, applicationId: react, connectionMetadataField: metadataField, operator, value: "1" };
      }
      let num;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      _slicedToArray(tmp, num);
    }
  };
  value = undefined;
  const TableSwitchRow = metadataField(6698).TableSwitchRow;
  if (existingPendingConfiguration != null) {
    value = existingPendingConfiguration.configuration.value;
  }
  return onChangeText(TableSwitchRow, obj, metadataField);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((existingPendingConfiguration) => {
  let applicationId;
  let closure_6;
  let fieldText;
  let fieldTextHook;
  let locked;
  let metadataField;
  let obj6;
  let require;
  let tmp = require;
  let obj = require("react");
  const cResult = obj.c(76);
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  const platform = existingPendingConfiguration.platform;
  const onConfigurationChange = existingPendingConfiguration.onConfigurationChange;
  ({ locked, operator, applicationId } = existingPendingConfiguration);
  const tmp4 = closure_15();
  PlatformTypes = tmp4;
  let num;
  if (existingPendingConfiguration != null) {
    num = existingPendingConfiguration.index;
  }
  if (num == null) {
    num = -1;
  }
  value = undefined;
  const first = cResult[0];
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  if (first === value) {
    let tmp8;
    let tmp9;
    if (cResult[1] === operator) {
      require = cResult[2];
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    let closure_8 = tmp9;
    const tmp16 = platform(onConfigurationChange.useState(tmp9), 2);
    const first1 = tmp16[0];
    let closure_10 = tmp18;
    let tmp19 = null != tmp8;
    const tmp14 = onConfigurationChange;
    if (tmp19) {
      tmp19 = "" !== first1;
    }
    if (tmp19) {
      tmp19 = first1 !== tmp9;
    }
    if (tmp19) {
      tmp16[1](tmp9);
    }
    let configuration;
    if (existingPendingConfiguration != null) {
      configuration = existingPendingConfiguration.configuration;
    }
    let closure_11 = tmp23;
    if (cResult[5] === applicationId) {
      if (cResult[6] === existingPendingConfiguration) {
        if (cResult[7] === num) {
          if (cResult[8] === metadataField) {
            if (cResult[9] === onConfigurationChange) {
              let type;
              const tmp24 = cResult[10];
              if (platform != null) {
                type = platform.type;
              }
              if (tmp24 === type) {
                let tmp26;
                let closure_13;
                let tmp42;
                if (cResult[11] === tmp7) {
                  tmp26 = cResult[12];
                }
                onChangeText = tmp26;
                if (undefined !== fieldTextHook) {
                  if (cResult[13] === tmp4.numericalInputContainerAndroidInline) {
                    let tmp43;
                    let tmp47;
                    let tmp46;
                    let tmp45;
                    if (cResult[14] === tmp4.numericalInputContainerIOSInline) {
                      tmp43 = cResult[15];
                    }
                    closure_13 = tmp43;
                    if (cResult[16] === fieldTextHook) {
                      if (cResult[17] === tmp43) {
                        if (cResult[18] === (locked || null == configuration)) {
                          if (cResult[19] === first1) {
                            if (cResult[20] === metadataField) {
                              if (cResult[21] === tmp26) {
                                if (cResult[22] === tmp4.metadataRow) {
                                  if (cResult[23] === tmp4.metadataRowText) {
                                    if (cResult[24] === tmp4.numericalInput) {
                                      if (cResult[25] === tmp4.numericalInputContainerBase) {
                                        if (cResult[26] === tmp4.numericalInputDisabled) {
                                          tmp45 = cResult[27];
                                          tmp46 = cResult[28];
                                          tmp47 = cResult[29];
                                        }
                                        if (cResult[41] === tmp45) {
                                          if (cResult[42] === tmp46) {
                                            let tmp53;
                                            if (cResult[43] === tmp47) {
                                              tmp53 = cResult[44];
                                            }
                                            tmp42 = tmp53;
                                          }
                                        }
                                        let obj2 = { style: null, children: tmp47 };
                                        class Z {
                                          constructor() {
                                            let TextInput;
                                            let items;
                                            let obj2;
                                            const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                            items = [closure_13, closure_6.numericalInputContainerBase];
                                            const items1 = [closure_6.numericalInput, ];
                                            let numericalInputDisabled = closure_11;
                                            TextInput = native.TextInput;
                                            if (closure_11) {
                                              numericalInputDisabled = closure_6.numericalInputDisabled;
                                            }
                                            obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                            items1[1] = numericalInputDisabled;
                                            return onChangeText(View, obj, "_numericalInputContainer");
                                          }
                                        }
                                        const tmp55 = onChangeText(tmp45, obj2);
                                        cResult[41] = tmp45;
                                        cResult[42] = tmp46;
                                        cResult[43] = tmp47;
                                        cResult[44] = tmp55;
                                        tmp53 = tmp55;
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
                    if (cResult[30] === tmp43) {
                      if (cResult[31] === (locked || null == configuration)) {
                        if (cResult[32] === first1) {
                          if (cResult[33] === metadataField) {
                            if (cResult[34] === tmp26) {
                              if (cResult[35] === tmp4.numericalInput) {
                                if (cResult[36] === tmp4.numericalInputContainerBase) {
                                  let tmp48;
                                  let tmp51;
                                  if (cResult[37] === tmp4.numericalInputDisabled) {
                                    tmp48 = cResult[38];
                                  }
                                  const intl = tmp(tmp2[15]).intl;
                                  const obj3 = { metadataHook: tmp48 };
                                  class Z {
                                    constructor() {
                                      let TextInput;
                                      let items;
                                      let obj2;
                                      const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                      items = [closure_13, closure_6.numericalInputContainerBase];
                                      const items1 = [closure_6.numericalInput, ];
                                      let numericalInputDisabled = closure_11;
                                      TextInput = native.TextInput;
                                      if (closure_11) {
                                        numericalInputDisabled = closure_6.numericalInputDisabled;
                                      }
                                      obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                      items1[1] = numericalInputDisabled;
                                      return onChangeText(View, obj, "_numericalInputContainer");
                                    }
                                  }
                                  const metadataRow = tmp4.metadataRow;
                                  const formatResult = intl.format(fieldTextHook, obj3);
                                  if (cResult[39] !== tmp4.metadataRowText) {
                                    const fn2 = function z(children, arg1) {
                                      let tmp = children;
                                      if (typeof children === "string") {
                                        const _HermesInternal = HermesInternal;
                                        const obj = { variant: "text-md/semibold", style: closure_6.metadataRowText, children };
                                        tmp = onChangeText(Text_Text.Text, obj, "t-" + arg1);
                                      }
                                      return tmp;
                                    };
                                    cResult[39] = tmp4.metadataRowText;
                                    class Z {
                                      constructor() {
                                        let TextInput;
                                        let items;
                                        let obj2;
                                        const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                        items = [closure_13, closure_6.numericalInputContainerBase];
                                        const items1 = [closure_6.numericalInput, ];
                                        let numericalInputDisabled = closure_11;
                                        TextInput = native.TextInput;
                                        if (closure_11) {
                                          numericalInputDisabled = closure_6.numericalInputDisabled;
                                        }
                                        obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                        items1[1] = numericalInputDisabled;
                                        return onChangeText(View, obj, "_numericalInputContainer");
                                      }
                                    }
                                    tmp51 = fn2;
                                  } else {
                                    tmp51 = cResult[40];
                                  }
                                  const Children = tmp14.Children;
                                  const mapped = Children.map(formatResult, tmp51);
                                  cResult[16] = fieldTextHook;
                                  cResult[17] = tmp43;
                                  cResult[18] = locked || null == configuration;
                                  cResult[19] = first1;
                                  class K {
                                    constructor(arg0) {
                                      let obj2;
                                      let tmp = first1;
                                      if ("" === first1) {
                                        tmp = closure_8;
                                      }
                                      c10(tmp);
                                      let tmp3 = null;
                                      if (arg0) {
                                        let type;
                                        if (platform != null) {
                                          type = platform.type;
                                        }
                                        if (type == null) {
                                          type = authStore;
                                        }
                                        const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                                        tmp3 = obj;
                                        obj2 = RoleConnectionRequirementUtils;
                                      }
                                      num = undefined;
                                      if (existingPendingConfiguration != null) {
                                        num = existingPendingConfiguration.index;
                                      }
                                      if (num == null) {
                                        num = -1;
                                      }
                                      onConfigurationChange(tmp3, num);
                                    }
                                  }
                                  cResult[20] = metadataField;
                                  cResult[21] = tmp26;
                                  cResult[22] = tmp4.metadataRow;
                                  cResult[23] = tmp4.metadataRowText;
                                  cResult[24] = tmp4.numericalInput;
                                  cResult[25] = tmp4.numericalInputContainerBase;
                                  cResult[26] = tmp4.numericalInputDisabled;
                                  cResult[27] = tmp50;
                                  cResult[28] = metadataRow;
                                  cResult[29] = mapped;
                                  tmp47 = mapped;
                                  tmp46 = metadataRow;
                                  tmp45 = tmp50;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class Z {
                      constructor() {
                        let TextInput;
                        let items;
                        let obj2;
                        const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                        items = [closure_13, closure_6.numericalInputContainerBase];
                        const items1 = [closure_6.numericalInput, ];
                        let numericalInputDisabled = closure_11;
                        TextInput = native.TextInput;
                        if (closure_11) {
                          numericalInputDisabled = closure_6.numericalInputDisabled;
                        }
                        obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                        items1[1] = numericalInputDisabled;
                        return onChangeText(View, obj, "_numericalInputContainer");
                      }
                    }
                    cResult[30] = tmp43;
                    cResult[31] = locked || null == configuration;
                    cResult[32] = first1;
                    cResult[33] = metadataField;
                    cResult[34] = tmp26;
                    cResult[35] = tmp4.numericalInput;
                    class K {
                      constructor(arg0) {
                        let obj2;
                        let tmp = first1;
                        if ("" === first1) {
                          tmp = closure_8;
                        }
                        c10(tmp);
                        let tmp3 = null;
                        if (arg0) {
                          let type;
                          if (platform != null) {
                            type = platform.type;
                          }
                          if (type == null) {
                            type = authStore;
                          }
                          const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                          tmp3 = obj;
                          obj2 = RoleConnectionRequirementUtils;
                        }
                        num = undefined;
                        if (existingPendingConfiguration != null) {
                          num = existingPendingConfiguration.index;
                        }
                        if (num == null) {
                          num = -1;
                        }
                        onConfigurationChange(tmp3, num);
                      }
                    }
                    cResult[37] = tmp4.numericalInputDisabled;
                    cResult[38] = Z;
                    tmp48 = Z;
                  }
                  const tmpResult = tmp(existingPendingConfiguration[21]);
                  const tmp44 = tmpResult.isIOS() ? tmp4.numericalInputContainerIOSInline : tmp4.numericalInputContainerAndroidInline;
                  cResult[14] = tmp4.numericalInputContainerIOSInline;
                  cResult[15] = tmp44;
                  tmp43 = tmp44;
                } else if (undefined !== fieldText) {
                  if (cResult[45] === tmp4.appNumericalInput) {
                    let tmp29;
                    if (cResult[46] === ((locked || null == configuration) && tmp4.numericalInputDisabled)) {
                      tmp29 = cResult[47];
                    }
                    if (cResult[48] === first1) {
                      if (cResult[49] === metadataField) {
                        if (cResult[50] === tmp26) {
                          if (cResult[51] === tmp29) {
                            let tmp31;
                            if (cResult[52] === !(locked || null == configuration)) {
                              tmp31 = cResult[53];
                            }
                            if (cResult[54] === fieldText) {
                              let tmp34;
                              if (cResult[55] === tmp4.appNumericalInputText) {
                                tmp34 = cResult[56];
                              }
                              if (cResult[57] === tmp4.appNumericalInputContainer) {
                                if (cResult[58] === tmp31) {
                                  let tmp37;
                                  if (cResult[59] === tmp34) {
                                    tmp37 = cResult[60];
                                  }
                                  tmp42 = tmp37;
                                }
                              }
                              class Z {
                                constructor() {
                                  let TextInput;
                                  let items;
                                  let obj2;
                                  const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                  items = [closure_13, closure_6.numericalInputContainerBase];
                                  const items1 = [closure_6.numericalInput, ];
                                  let numericalInputDisabled = closure_11;
                                  TextInput = native.TextInput;
                                  if (closure_11) {
                                    numericalInputDisabled = closure_6.numericalInputDisabled;
                                  }
                                  obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                  items1[1] = numericalInputDisabled;
                                  return onChangeText(View, obj, "_numericalInputContainer");
                                }
                              }
                              tmp40[0] = tmp4.appNumericalInputContainer;
                              let items = [tmp31, tmp34];
                              tmp40[1] = items;
                              cResult[57] = tmp4.appNumericalInputContainer;
                              cResult[58] = tmp31;
                              cResult[59] = tmp34;
                              const tmp41 = closure_13(applicationId, tmp40);
                              class K {
                                constructor(arg0) {
                                  let obj2;
                                  let tmp = first1;
                                  if ("" === first1) {
                                    tmp = closure_8;
                                  }
                                  c10(tmp);
                                  let tmp3 = null;
                                  if (arg0) {
                                    let type;
                                    if (platform != null) {
                                      type = platform.type;
                                    }
                                    if (type == null) {
                                      type = authStore;
                                    }
                                    const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                                    tmp3 = obj;
                                    obj2 = RoleConnectionRequirementUtils;
                                  }
                                  num = undefined;
                                  if (existingPendingConfiguration != null) {
                                    num = existingPendingConfiguration.index;
                                  }
                                  if (num == null) {
                                    num = -1;
                                  }
                                  onConfigurationChange(tmp3, num);
                                }
                              }
                              tmp37 = tmp41;
                            }
                            const obj4 = { variant: "text-md/semibold", style: null, children: fieldText };
                            class Z {
                              constructor() {
                                let TextInput;
                                let items;
                                let obj2;
                                const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                items = [closure_13, closure_6.numericalInputContainerBase];
                                const items1 = [closure_6.numericalInput, ];
                                let numericalInputDisabled = closure_11;
                                TextInput = native.TextInput;
                                if (closure_11) {
                                  numericalInputDisabled = closure_6.numericalInputDisabled;
                                }
                                obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                items1[1] = numericalInputDisabled;
                                return onChangeText(View, obj, "_numericalInputContainer");
                              }
                            }
                            const tmp36 = onChangeText(tmp(existingPendingConfiguration[22]).Text, obj4);
                            cResult[54] = fieldText;
                            cResult[55] = tmp4.appNumericalInputText;
                            cResult[56] = tmp36;
                            tmp34 = tmp36;
                          }
                        }
                      }
                    }
                    class Z {
                      constructor() {
                        let TextInput;
                        let items;
                        let obj2;
                        const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                        items = [closure_13, closure_6.numericalInputContainerBase];
                        const items1 = [closure_6.numericalInput, ];
                        let numericalInputDisabled = closure_11;
                        TextInput = native.TextInput;
                        if (closure_11) {
                          numericalInputDisabled = closure_6.numericalInputDisabled;
                        }
                        obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                        items1[1] = numericalInputDisabled;
                        return onChangeText(View, obj, "_numericalInputContainer");
                      }
                    }
                    const obj5 = { children: onChangeText(tmp(existingPendingConfiguration[12]).TextInput, obj6, metadataField) };
                    obj6 = { keyboardType: "number-pad", style: tmp29, editable: !(locked || null == configuration), value: first1, onChangeText: tmp26 };
                    const tmp33 = onChangeText(applicationId, obj5, "_numericalInputContainer");
                    cResult[48] = first1;
                    cResult[49] = metadataField;
                    class K {
                      constructor(arg0) {
                        let obj2;
                        let tmp = first1;
                        if ("" === first1) {
                          tmp = closure_8;
                        }
                        c10(tmp);
                        let tmp3 = null;
                        if (arg0) {
                          let type;
                          if (platform != null) {
                            type = platform.type;
                          }
                          if (type == null) {
                            type = authStore;
                          }
                          const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                          tmp3 = obj;
                          obj2 = RoleConnectionRequirementUtils;
                        }
                        num = undefined;
                        if (existingPendingConfiguration != null) {
                          num = existingPendingConfiguration.index;
                        }
                        if (num == null) {
                          num = -1;
                        }
                        onConfigurationChange(tmp3, num);
                      }
                    }
                    cResult[50] = tmp26;
                    cResult[51] = tmp29;
                    cResult[52] = !(locked || null == configuration);
                    cResult[53] = tmp33;
                    tmp31 = tmp33;
                  }
                  let items1 = [tmp4.appNumericalInput, ];
                  class Z {
                    constructor() {
                      let TextInput;
                      let items;
                      let obj2;
                      const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                      items = [closure_13, closure_6.numericalInputContainerBase];
                      const items1 = [closure_6.numericalInput, ];
                      let numericalInputDisabled = closure_11;
                      TextInput = native.TextInput;
                      if (closure_11) {
                        numericalInputDisabled = closure_6.numericalInputDisabled;
                      }
                      obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                      items1[1] = numericalInputDisabled;
                      return onChangeText(View, obj, "_numericalInputContainer");
                    }
                  }
                  cResult[45] = tmp4.appNumericalInput;
                  cResult[46] = (locked || null == configuration) && tmp4.numericalInputDisabled;
                  cResult[47] = items1;
                  tmp29 = items1;
                }
                if (cResult[61] === applicationId) {
                  let index;
                  const tmp56 = cResult[62];
                  if (existingPendingConfiguration != null) {
                    index = existingPendingConfiguration.index;
                  }
                  if (tmp56 === index) {
                    if (cResult[63] === first1) {
                      if (cResult[64] === metadataField) {
                        if (cResult[65] === onConfigurationChange) {
                          let type1;
                          const tmp58 = cResult[66];
                          if (platform != null) {
                            type1 = platform.type;
                          }
                          if (tmp58 === type1) {
                            if (cResult[67] === tmp7) {
                              let tmp60;
                              if (cResult[68] === tmp9) {
                                tmp60 = cResult[69];
                              }
                              if (cResult[70] === null != configuration) {
                                if (cResult[71] === tmp42) {
                                  if (cResult[72] === locked) {
                                    if (cResult[73] === metadataField) {
                                      let tmp63;
                                      if (cResult[74] === tmp60) {
                                        tmp63 = cResult[75];
                                      }
                                      return tmp63;
                                    }
                                  }
                                }
                              }
                              const obj7 = { label: null, value: null != configuration, disabled: locked, onValueChange: tmp60 };
                              class Z {
                                constructor() {
                                  let TextInput;
                                  let items;
                                  let obj2;
                                  const obj = { style: items, children: onChangeText(TextInput, obj2, metadataField) };
                                  items = [closure_13, closure_6.numericalInputContainerBase];
                                  const items1 = [closure_6.numericalInput, ];
                                  let numericalInputDisabled = closure_11;
                                  TextInput = native.TextInput;
                                  if (closure_11) {
                                    numericalInputDisabled = closure_6.numericalInputDisabled;
                                  }
                                  obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value: first1, onChangeText, hitSlop: 8 };
                                  items1[1] = numericalInputDisabled;
                                  return onChangeText(View, obj, "_numericalInputContainer");
                                }
                              }
                              const tmp65 = onChangeText(tmp(existingPendingConfiguration[19]).TableSwitchRow, obj7, metadataField);
                              cResult[70] = null != configuration;
                              cResult[71] = tmp42;
                              cResult[72] = locked;
                              cResult[73] = metadataField;
                              class K {
                                constructor(arg0) {
                                  let obj2;
                                  let tmp = first1;
                                  if ("" === first1) {
                                    tmp = closure_8;
                                  }
                                  c10(tmp);
                                  let tmp3 = null;
                                  if (arg0) {
                                    let type;
                                    if (platform != null) {
                                      type = platform.type;
                                    }
                                    if (type == null) {
                                      type = authStore;
                                    }
                                    const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                                    tmp3 = obj;
                                    obj2 = RoleConnectionRequirementUtils;
                                  }
                                  num = undefined;
                                  if (existingPendingConfiguration != null) {
                                    num = existingPendingConfiguration.index;
                                  }
                                  if (num == null) {
                                    num = -1;
                                  }
                                  onConfigurationChange(tmp3, num);
                                }
                              }
                              cResult[75] = tmp65;
                              tmp63 = tmp65;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                cResult[61] = applicationId;
                let index1;
                if (existingPendingConfiguration != null) {
                  index1 = existingPendingConfiguration.index;
                }
                cResult[62] = index1;
                cResult[63] = first1;
                cResult[64] = metadataField;
                cResult[65] = onConfigurationChange;
                let type2;
                if (platform != null) {
                  type2 = platform.type;
                }
                class K {
                  constructor(arg0) {
                    let obj2;
                    let tmp = first1;
                    if ("" === first1) {
                      tmp = closure_8;
                    }
                    c10(tmp);
                    let tmp3 = null;
                    if (arg0) {
                      let type;
                      if (platform != null) {
                        type = platform.type;
                      }
                      if (type == null) {
                        type = authStore;
                      }
                      const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(tmp, require) };
                      tmp3 = obj;
                      obj2 = RoleConnectionRequirementUtils;
                    }
                    num = undefined;
                    if (existingPendingConfiguration != null) {
                      num = existingPendingConfiguration.index;
                    }
                    if (num == null) {
                      num = -1;
                    }
                    onConfigurationChange(tmp3, num);
                  }
                }
                cResult[66] = type2;
                cResult[67] = tmp7;
                cResult[68] = tmp9;
                cResult[69] = K;
                tmp60 = K;
              }
            }
          }
        }
      }
    }
    cResult[5] = applicationId;
    cResult[6] = existingPendingConfiguration;
    cResult[7] = num;
    cResult[8] = metadataField;
    cResult[9] = onConfigurationChange;
    let type3;
    if (platform != null) {
      type3 = platform.type;
    }
    const fn = function b(TableSwitchRow) {
      let obj2;
      c10(TableSwitchRow);
      let isFiniteResult = null != existingPendingConfiguration && "" !== TableSwitchRow;
      if (isFiniteResult) {
        const _Number = Number;
        const _Number2 = Number;
        isFiniteResult = Number.isFinite(Number(TableSwitchRow));
      }
      if (isFiniteResult) {
        let type;
        if (platform != null) {
          type = platform.type;
        }
        if (type == null) {
          type = authStore;
        }
        const obj = { connectionType: type, applicationId, connectionMetadataField: metadataField, operator: require, value: obj2.storedValueFor(TableSwitchRow, require) };
        obj2 = RoleConnectionRequirementUtils;
        onConfigurationChange(obj, num);
      }
    };
    cResult[10] = type3;
    cResult[11] = tmp7;
    cResult[12] = fn;
    tmp26 = fn;
  }
  const tmpResult3 = tmp(existingPendingConfiguration[20]);
  const realizedOperatorForResult = tmpResult3.realizedOperatorFor(operator);
  require = realizedOperatorForResult;
  let value3;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value3 = iter2.value;
    }
  }
  const tmpResult4 = tmp(existingPendingConfiguration[20]);
  const str = tmpResult4.displayedValueFor(value3, realizedOperatorForResult);
  const str1 = str.toString();
  let value4;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value4 = iter3.value;
    }
  }
  cResult[0] = value4;
  cResult[1] = operator;
  cResult[2] = realizedOperatorForResult;
  cResult[3] = value3;
  cResult[4] = str1;
  tmp9 = str1;
  tmp8 = value3;
}) : ((existingPendingConfiguration) => {
  let Children;
  let applicationId;
  let fieldText;
  let fieldTextHook;
  let items1;
  let locked;
  let metadataField;
  let obj6;
  let tmp19Result;
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, locked, applicationId: react } = existingPendingConfiguration);
  let c7;
  let str1;
  value = undefined;
  let closure_10;
  let closure_11;
  let closure_13;
  function onInputValueChange(TableSwitchRow) {
    let obj2;
    c10(TableSwitchRow);
    let isFiniteResult = null != existingPendingConfiguration && "" !== TableSwitchRow;
    if (isFiniteResult) {
      const _Number = Number;
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(Number(TableSwitchRow));
    }
    if (isFiniteResult) {
      let type;
      if (dependencyMap != null) {
        type = dependencyMap.type;
      }
      if (type == null) {
        type = authStore;
      }
      const obj = { connectionType: type, applicationId: react, connectionMetadataField: metadataField, operator, value: obj2.storedValueFor(TableSwitchRow, operator) };
      obj2 = RoleConnectionRequirementUtils;
      _slicedToArray(obj, num);
    }
  }
  operator = existingPendingConfiguration.operator;
  let tmp = closure_15();
  let closure_5 = tmp;
  let num;
  if (existingPendingConfiguration != null) {
    num = existingPendingConfiguration.index;
  }
  if (num == null) {
    num = -1;
  }
  let obj = metadataField(17808);
  const realizedOperatorForResult = obj.realizedOperatorFor(operator);
  c7 = realizedOperatorForResult;
  value = undefined;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  const tmp2Result = metadataField(17808);
  const str = tmp2Result.displayedValueFor(value, realizedOperatorForResult);
  str1 = str.toString();
  [value] = react.useState(str1);
  closure_10 = tmp10;
  const tmp11 = null != value && "" !== value && value !== str1;
  if (tmp11) {
    tmp10(str1);
  }
  let configuration;
  if (existingPendingConfiguration != null) {
    configuration = existingPendingConfiguration.configuration;
  }
  closure_11 = tmp15;
  if (undefined !== fieldTextHook) {
    const tmp2Result2 = metadataField(1369);
    closure_13 = tmp2Result2.isIOS() ? tmp.numericalInputContainerIOSInline : tmp.numericalInputContainerAndroidInline;
    const intl = metadataField(1126).intl;
    let obj2 = {
      metadataHook() {
          let TextInput;
          let items;
          let obj2;
          const obj = { style: items, children: onInputValueChange(TextInput, obj2, metadataField) };
          items = [closure_13, closure_5.numericalInputContainerBase];
          const items1 = [closure_5.numericalInput, ];
          let numericalInputDisabled = closure_11;
          TextInput = native.TextInput;
          if (closure_11) {
            numericalInputDisabled = closure_5.numericalInputDisabled;
          }
          obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value, onChangeText: onInputValueChange, hitSlop: 8 };
          items1[1] = numericalInputDisabled;
          return onInputValueChange(View, obj, "_numericalInputContainer");
        }
    };
    const obj3 = {
      style: tmp.metadataRow,
      children: Children.map(intl.format(fieldTextHook, obj2), (children, arg1) => {
          let tmp = children;
          if (typeof children === "string") {
            const _HermesInternal = HermesInternal;
            const obj = { variant: "text-md/semibold", style: closure_5.metadataRowText, children };
            tmp = onInputValueChange(Text_Text.Text, obj, "t-" + arg1);
          }
          return tmp;
        })
    };
    Children = react.Children;
    tmp19Result = onInputValueChange(closure_5, obj3);
  } else if (undefined !== fieldText) {
    let items = [tmp.appNumericalInput, ];
    let numericalInputDisabled = tmp15;
    const obj4 = { style: tmp.appNumericalInputContainer, children: items1 };
    let TextInput = metadataField(1188).TextInput;
    const tmp19 = closure_13;
    if (locked || null == configuration) {
      numericalInputDisabled = tmp.numericalInputDisabled;
    }
    const obj5 = { children: onInputValueChange(TextInput, obj6, metadataField) };
    obj6 = { keyboardType: "number-pad", style: items, editable: !(locked || null == configuration), value, onChangeText: onInputValueChange };
    items[1] = numericalInputDisabled;
    items1 = [onInputValueChange(closure_5, obj5, "_numericalInputContainer"), ];
    const obj7 = { variant: "text-md/semibold", style: tmp.appNumericalInputText, children: fieldText };
    items1[1] = onInputValueChange(metadataField(4886).Text, obj7);
    tmp19Result = tmp19(tmp20, obj4);
  }
  const obj8 = {
    label: tmp19Result,
    value: null != configuration,
    disabled: locked,
    onValueChange(arg0) {
      let obj2;
      let tmp = first;
      if ("" === first) {
        tmp = str1;
      }
      c10(tmp);
      let tmp3 = null;
      if (arg0) {
        let type;
        if (dependencyMap != null) {
          type = dependencyMap.type;
        }
        if (type == null) {
          type = authStore;
        }
        const obj = { connectionType: type, applicationId: react, connectionMetadataField: metadataField, operator, value: obj2.storedValueFor(tmp, operator) };
        tmp3 = obj;
        obj2 = RoleConnectionRequirementUtils;
      }
      num = undefined;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      _slicedToArray(tmp3, num);
    }
  };
  return onInputValueChange(metadataField(6698).TableSwitchRow, obj8, metadataField);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(23);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.BLUESKY);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value4 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value4;
    tmp8 = value4;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== configMetadataMap) {
        const value5 = configMetadataMap.get(metroImportDefault.BLUESKY_FOLLOWERS_COUNT);
        cResult[7] = configMetadataMap;
        cResult[8] = value5;
        tmp13 = value5;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === locked) {
        if (cResult[10] === onConfigurationChange) {
          let tmp16;
          let tmp21;
          if (cResult[11] === tmp13) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== configMetadataMap) {
            const value6 = configMetadataMap.get(metroImportDefault.BLUESKY_STATUSES_COUNT);
            cResult[13] = configMetadataMap;
            cResult[14] = value6;
            tmp21 = value6;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === locked) {
            if (cResult[16] === onConfigurationChange) {
              let tmp24;
              if (cResult[17] === tmp21) {
                tmp24 = cResult[18];
              }
              if (cResult[19] === tmp11) {
                if (cResult[20] === tmp16) {
                  let tmp29;
                  if (cResult[21] === tmp24) {
                    tmp29 = cResult[22];
                  }
                  return tmp29;
                }
              }
              const obj3 = { children: items };
              items = [tmp11, tmp16, tmp24];
              const tmp32 = map1(authStore2, obj3);
              cResult[19] = tmp11;
              cResult[20] = tmp16;
              cResult[21] = tmp24;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj4 = { fieldTextHook: intl3.t["5I4mVS"], metadataField: metroImportDefault.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: tmp21, platform: first, onConfigurationChange, locked };
          const tmp28 = onChangeText(closure_18, obj4);
          cResult[15] = locked;
          cResult[16] = onConfigurationChange;
          cResult[17] = tmp21;
          cResult[18] = tmp28;
          tmp24 = tmp28;
        }
      }
      const obj5 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: tmp13, platform: first, onConfigurationChange, locked };
      const tmp20 = onChangeText(closure_18, obj5);
      cResult[9] = locked;
      cResult[10] = onConfigurationChange;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp16 = tmp20;
    }
  }
  const obj6 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj6);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.BLUESKY);
  const obj2 = { children: items };
  items = [, , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldTextHook: intl3.t["5I4mVS"], metadataField: metroImportDefault.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = onChangeText(closure_18, obj5);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(30);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.STEAM);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value5 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value5;
    tmp8 = value5;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== configMetadataMap) {
        const value6 = configMetadataMap.get(metroImportDefault.STEAM_GAME_COUNT);
        cResult[7] = configMetadataMap;
        cResult[8] = value6;
        tmp13 = value6;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === locked) {
        if (cResult[10] === onConfigurationChange) {
          let tmp16;
          let tmp21;
          if (cResult[11] === tmp13) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== configMetadataMap) {
            const value7 = configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_DOTA2);
            cResult[13] = configMetadataMap;
            cResult[14] = value7;
            tmp21 = value7;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === locked) {
            if (cResult[16] === onConfigurationChange) {
              let tmp24;
              let tmp29;
              if (cResult[17] === tmp21) {
                tmp24 = cResult[18];
              }
              if (cResult[19] !== configMetadataMap) {
                const value8 = configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_TF2);
                cResult[19] = configMetadataMap;
                cResult[20] = value8;
                tmp29 = value8;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === locked) {
                if (cResult[22] === onConfigurationChange) {
                  let tmp32;
                  if (cResult[23] === tmp29) {
                    tmp32 = cResult[24];
                  }
                  if (cResult[25] === tmp11) {
                    if (cResult[26] === tmp16) {
                      if (cResult[27] === tmp24) {
                        let tmp37;
                        if (cResult[28] === tmp32) {
                          tmp37 = cResult[29];
                        }
                        return tmp37;
                      }
                    }
                  }
                  const obj3 = { children: items };
                  items = [tmp11, tmp16, tmp24, tmp32];
                  const tmp40 = map1(authStore2, obj3);
                  cResult[25] = tmp11;
                  cResult[26] = tmp16;
                  cResult[27] = tmp24;
                  cResult[28] = tmp32;
                  cResult[29] = tmp40;
                  tmp37 = tmp40;
                }
              }
              const obj4 = { fieldTextHook: intl3.t["MCHnK+"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: tmp29, platform: first, onConfigurationChange, locked };
              const tmp36 = onChangeText(closure_18, obj4);
              cResult[21] = locked;
              cResult[22] = onConfigurationChange;
              cResult[23] = tmp29;
              cResult[24] = tmp36;
              tmp32 = tmp36;
            }
          }
          const obj5 = { fieldTextHook: intl3.t["ZCNdD/"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: tmp21, platform: first, onConfigurationChange, locked };
          const tmp28 = onChangeText(closure_18, obj5);
          cResult[15] = locked;
          cResult[16] = onConfigurationChange;
          cResult[17] = tmp21;
          cResult[18] = tmp28;
          tmp24 = tmp28;
        }
      }
      const obj6 = { fieldTextHook: intl3.t.zVJxqj, metadataField: metroImportDefault.STEAM_GAME_COUNT, existingPendingConfiguration: tmp13, platform: first, onConfigurationChange, locked };
      const tmp20 = onChangeText(closure_18, obj6);
      cResult[9] = locked;
      cResult[10] = onConfigurationChange;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp16 = tmp20;
    }
  }
  const obj7 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj7);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.STEAM);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldTextHook: intl3.t.zVJxqj, metadataField: metroImportDefault.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldTextHook: intl3.t["ZCNdD/"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[2] = onChangeText(closure_18, obj5);
  const obj6 = { fieldTextHook: intl3.t["MCHnK+"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked };
  items[3] = onChangeText(closure_18, obj6);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(31);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.TWITTER);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value5 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value5;
    tmp8 = value5;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== configMetadataMap) {
        const value6 = configMetadataMap.get(metroImportDefault.TWITTER_FOLLOWERS_COUNT);
        cResult[7] = configMetadataMap;
        cResult[8] = value6;
        tmp13 = value6;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === locked) {
        if (cResult[10] === onConfigurationChange) {
          let tmp16;
          let tmp21;
          if (cResult[11] === tmp13) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== configMetadataMap) {
            const value7 = configMetadataMap.get(metroImportDefault.TWITTER_STATUSES_COUNT);
            cResult[13] = configMetadataMap;
            cResult[14] = value7;
            tmp21 = value7;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === locked) {
            if (cResult[16] === onConfigurationChange) {
              let tmp24;
              let tmp29;
              let tmp31;
              if (cResult[17] === tmp21) {
                tmp24 = cResult[18];
              }
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl3.intl;
                const stringResult = intl.string(intl3.t.E2iT8K);
                cResult[19] = stringResult;
                tmp29 = stringResult;
              } else {
                tmp29 = cResult[19];
              }
              if (cResult[20] !== configMetadataMap) {
                const value8 = configMetadataMap.get(metroImportDefault.TWITTER_VERIFIED);
                cResult[20] = configMetadataMap;
                cResult[21] = value8;
                tmp31 = value8;
              } else {
                tmp31 = cResult[21];
              }
              if (cResult[22] === locked) {
                if (cResult[23] === onConfigurationChange) {
                  let tmp34;
                  if (cResult[24] === tmp31) {
                    tmp34 = cResult[25];
                  }
                  if (cResult[26] === tmp34) {
                    if (cResult[27] === tmp11) {
                      if (cResult[28] === tmp16) {
                        let tmp39;
                        if (cResult[29] === tmp24) {
                          tmp39 = cResult[30];
                        }
                        return tmp39;
                      }
                    }
                  }
                  const obj3 = { children: items };
                  items = [tmp11, tmp16, tmp24, tmp34];
                  const tmp42 = map1(authStore2, obj3);
                  cResult[26] = tmp34;
                  cResult[27] = tmp11;
                  cResult[28] = tmp16;
                  cResult[29] = tmp24;
                  cResult[30] = tmp42;
                  tmp39 = tmp42;
                }
              }
              const obj4 = { fieldText: tmp29, metadataField: metroImportDefault.TWITTER_VERIFIED, existingPendingConfiguration: tmp31, platform: first, onConfigurationChange, locked };
              const tmp38 = onChangeText(closure_17, obj4);
              cResult[22] = locked;
              cResult[23] = onConfigurationChange;
              cResult[24] = tmp31;
              cResult[25] = tmp38;
              tmp34 = tmp38;
            }
          }
          const obj5 = { fieldTextHook: intl3.t["+NFH7k"], metadataField: metroImportDefault.TWITTER_STATUSES_COUNT, existingPendingConfiguration: tmp21, platform: first, onConfigurationChange, locked };
          const tmp28 = onChangeText(closure_18, obj5);
          cResult[15] = locked;
          cResult[16] = onConfigurationChange;
          cResult[17] = tmp21;
          cResult[18] = tmp28;
          tmp24 = tmp28;
        }
      }
      const obj6 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: tmp13, platform: first, onConfigurationChange, locked };
      const tmp20 = onChangeText(closure_18, obj6);
      cResult[9] = locked;
      cResult[10] = onConfigurationChange;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp16 = tmp20;
    }
  }
  const obj7 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj7);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.TWITTER);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldTextHook: intl3.t["+NFH7k"], metadataField: metroImportDefault.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = onChangeText(closure_18, obj5);
  const obj6 = { fieldText: intl.string(intl3.t.E2iT8K), metadataField: metroImportDefault.TWITTER_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[3] = onChangeText(closure_17, obj6);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(32);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.REDDIT);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value5 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value5;
    tmp8 = value5;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== configMetadataMap) {
        const value6 = configMetadataMap.get(metroImportDefault.REDDIT_TOTAL_KARMA);
        cResult[7] = configMetadataMap;
        cResult[8] = value6;
        tmp13 = value6;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === locked) {
        if (cResult[10] === onConfigurationChange) {
          let tmp16;
          let tmp21;
          let tmp23;
          if (cResult[11] === tmp13) {
            tmp16 = cResult[12];
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl3.intl;
            const stringResult = intl.string(intl3.t["0cKdka"]);
            cResult[13] = stringResult;
            tmp21 = stringResult;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== configMetadataMap) {
            const value7 = configMetadataMap.get(metroImportDefault.REDDIT_MOD);
            cResult[14] = configMetadataMap;
            cResult[15] = value7;
            tmp23 = value7;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] === locked) {
            if (cResult[17] === onConfigurationChange) {
              let tmp26;
              let tmp31;
              let tmp33;
              if (cResult[18] === tmp23) {
                tmp26 = cResult[19];
              }
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = intl3.intl;
                const stringResult1 = intl2.string(intl3.t.kCAN58);
                cResult[20] = stringResult1;
                tmp31 = stringResult1;
              } else {
                tmp31 = cResult[20];
              }
              if (cResult[21] !== configMetadataMap) {
                const value8 = configMetadataMap.get(metroImportDefault.REDDIT_GOLD);
                cResult[21] = configMetadataMap;
                cResult[22] = value8;
                tmp33 = value8;
              } else {
                tmp33 = cResult[22];
              }
              if (cResult[23] === locked) {
                if (cResult[24] === onConfigurationChange) {
                  let tmp36;
                  if (cResult[25] === tmp33) {
                    tmp36 = cResult[26];
                  }
                  if (cResult[27] === tmp36) {
                    if (cResult[28] === tmp11) {
                      if (cResult[29] === tmp16) {
                        let tmp41;
                        if (cResult[30] === tmp26) {
                          tmp41 = cResult[31];
                        }
                        return tmp41;
                      }
                    }
                  }
                  const obj3 = { children: items };
                  items = [tmp11, tmp16, tmp26, tmp36];
                  const tmp44 = map1(authStore2, obj3);
                  cResult[27] = tmp36;
                  cResult[28] = tmp11;
                  cResult[29] = tmp16;
                  cResult[30] = tmp26;
                  cResult[31] = tmp44;
                  tmp41 = tmp44;
                }
              }
              const obj4 = { fieldText: tmp31, metadataField: metroImportDefault.REDDIT_GOLD, existingPendingConfiguration: tmp33, platform: first, onConfigurationChange, locked };
              const tmp40 = onChangeText(closure_17, obj4);
              cResult[23] = locked;
              cResult[24] = onConfigurationChange;
              cResult[25] = tmp33;
              cResult[26] = tmp40;
              tmp36 = tmp40;
            }
          }
          const obj5 = { fieldText: tmp21, metadataField: metroImportDefault.REDDIT_MOD, existingPendingConfiguration: tmp23, platform: first, onConfigurationChange, locked };
          const tmp30 = onChangeText(closure_17, obj5);
          cResult[16] = locked;
          cResult[17] = onConfigurationChange;
          cResult[18] = tmp23;
          cResult[19] = tmp30;
          tmp26 = tmp30;
        }
      }
      const obj6 = { fieldTextHook: intl3.t.TLgZhv, metadataField: metroImportDefault.REDDIT_TOTAL_KARMA, existingPendingConfiguration: tmp13, platform: first, onConfigurationChange, locked };
      const tmp20 = onChangeText(closure_18, obj6);
      cResult[9] = locked;
      cResult[10] = onConfigurationChange;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp16 = tmp20;
    }
  }
  const obj7 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj7);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let intl;
  let intl2;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.REDDIT);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldTextHook: intl3.t.TLgZhv, metadataField: metroImportDefault.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldText: intl.string(intl3.t["0cKdka"]), metadataField: metroImportDefault.REDDIT_MOD, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_MOD), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[2] = onChangeText(closure_17, obj5);
  const obj6 = { fieldText: intl2.string(intl3.t.kCAN58), metadataField: metroImportDefault.REDDIT_GOLD, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_GOLD), platform: value, onConfigurationChange, locked };
  intl2 = intl3.intl;
  items[3] = onChangeText(closure_17, obj6);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.PAYPAL);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value3 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value3;
    tmp8 = value3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      let tmp15;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["0JyE8I"]);
        cResult[7] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== configMetadataMap) {
        const value4 = configMetadataMap.get(metroImportDefault.PAYPAL_VERIFIED);
        cResult[8] = configMetadataMap;
        cResult[9] = value4;
        tmp15 = value4;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === locked) {
        if (cResult[11] === onConfigurationChange) {
          let tmp18;
          if (cResult[12] === tmp15) {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            let tmp23;
            if (cResult[15] === tmp18) {
              tmp23 = cResult[16];
            }
            return tmp23;
          }
          const obj3 = { children: items };
          items = [tmp11, tmp18];
          const tmp26 = map1(authStore2, obj3);
          cResult[14] = tmp11;
          cResult[15] = tmp18;
          cResult[16] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj4 = { fieldText: tmp13, metadataField: metroImportDefault.PAYPAL_VERIFIED, existingPendingConfiguration: tmp15, platform: first, onConfigurationChange, locked };
      const tmp22 = onChangeText(closure_17, obj4);
      cResult[10] = locked;
      cResult[11] = onConfigurationChange;
      cResult[12] = tmp15;
      cResult[13] = tmp22;
      tmp18 = tmp22;
    }
  }
  const obj5 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj5);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.PAYPAL);
  const obj2 = { children: items };
  items = [, ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldText: intl.string(intl3.t["0JyE8I"]), metadataField: metroImportDefault.PAYPAL_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.PAYPAL_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[1] = onChangeText(closure_17, obj4);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(38);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.EBAY);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== configMetadataMap) {
    const value6 = configMetadataMap.get(metroImportDefault.CREATED_AT);
    cResult[1] = configMetadataMap;
    cResult[2] = value6;
    tmp8 = value6;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === locked) {
    if (cResult[4] === onConfigurationChange) {
      let tmp11;
      let tmp13;
      if (cResult[5] === tmp8) {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== configMetadataMap) {
        const value7 = configMetadataMap.get(metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE);
        cResult[7] = configMetadataMap;
        cResult[8] = value7;
        tmp13 = value7;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === locked) {
        if (cResult[10] === onConfigurationChange) {
          let tmp16;
          let tmp21;
          if (cResult[11] === tmp13) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== configMetadataMap) {
            const value8 = configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT);
            cResult[13] = configMetadataMap;
            cResult[14] = value8;
            tmp21 = value8;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] === locked) {
            if (cResult[16] === onConfigurationChange) {
              let tmp24;
              let tmp29;
              if (cResult[17] === tmp21) {
                tmp24 = cResult[18];
              }
              if (cResult[19] !== configMetadataMap) {
                const value9 = configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT);
                cResult[19] = configMetadataMap;
                cResult[20] = value9;
                tmp29 = value9;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === locked) {
                if (cResult[22] === onConfigurationChange) {
                  let tmp32;
                  let tmp38;
                  let tmp40;
                  if (cResult[23] === tmp29) {
                    tmp32 = cResult[24];
                  }
                  const _Symbol = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = intl3.intl;
                    const stringResult = intl.string(intl3.t["39wASN"]);
                    cResult[25] = stringResult;
                    tmp38 = stringResult;
                  } else {
                    tmp38 = cResult[25];
                  }
                  if (cResult[26] !== configMetadataMap) {
                    const value10 = configMetadataMap.get(metroImportDefault.EBAY_TOP_RATED_SELLER);
                    cResult[26] = configMetadataMap;
                    cResult[27] = value10;
                    tmp40 = value10;
                  } else {
                    tmp40 = cResult[27];
                  }
                  if (cResult[28] === locked) {
                    if (cResult[29] === onConfigurationChange) {
                      let tmp43;
                      if (cResult[30] === tmp40) {
                        tmp43 = cResult[31];
                      }
                      if (cResult[32] === tmp43) {
                        if (cResult[33] === tmp11) {
                          if (cResult[34] === tmp16) {
                            if (cResult[35] === tmp24) {
                              let tmp48;
                              if (cResult[36] === tmp32) {
                                tmp48 = cResult[37];
                              }
                              return tmp48;
                            }
                          }
                        }
                      }
                      const obj3 = { children: items };
                      items = [tmp11, tmp16, tmp24, tmp32, tmp43];
                      const tmp51 = map1(authStore2, obj3);
                      cResult[32] = tmp43;
                      cResult[33] = tmp11;
                      cResult[34] = tmp16;
                      cResult[35] = tmp24;
                      cResult[36] = tmp32;
                      cResult[37] = tmp51;
                      tmp48 = tmp51;
                    }
                  }
                  const obj4 = { fieldText: tmp38, metadataField: metroImportDefault.EBAY_TOP_RATED_SELLER, existingPendingConfiguration: tmp40, platform: first, onConfigurationChange, locked };
                  const tmp47 = onChangeText(closure_17, obj4);
                  cResult[28] = locked;
                  cResult[29] = onConfigurationChange;
                  cResult[30] = tmp40;
                  cResult[31] = tmp47;
                  tmp43 = tmp47;
                }
              }
              const obj5 = { fieldTextHook: intl3.t.yYbR2r, metadataField: metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: tmp29, platform: first, onConfigurationChange, locked, operator: metroImportAll.LESS_THAN };
              const tmp37 = onChangeText(closure_18, obj5);
              cResult[21] = locked;
              cResult[22] = onConfigurationChange;
              cResult[23] = tmp29;
              cResult[24] = tmp37;
              tmp32 = tmp37;
            }
          }
          const obj6 = { fieldTextHook: intl3.t["v5a2+Q"], metadataField: metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: tmp21, platform: first, onConfigurationChange, locked };
          const tmp28 = onChangeText(closure_18, obj6);
          cResult[15] = locked;
          cResult[16] = onConfigurationChange;
          cResult[17] = tmp21;
          cResult[18] = tmp28;
          tmp24 = tmp28;
        }
      }
      const obj7 = { fieldTextHook: intl3.t.oTFOe5, metadataField: metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: tmp13, platform: first, onConfigurationChange, locked };
      const tmp20 = onChangeText(closure_18, obj7);
      cResult[9] = locked;
      cResult[10] = onConfigurationChange;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp16 = tmp20;
    }
  }
  const obj8 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: tmp8, platform: first, onConfigurationChange, locked };
  const tmp12 = onChangeText(closure_18, obj8);
  cResult[3] = locked;
  cResult[4] = onConfigurationChange;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.EBAY);
  const obj2 = { children: items };
  items = [, , , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = onChangeText(closure_18, obj3);
  const obj4 = { fieldTextHook: intl3.t.oTFOe5, metadataField: metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldTextHook: intl3.t["v5a2+Q"], metadataField: metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = onChangeText(closure_18, obj5);
  const obj6 = { fieldTextHook: intl3.t.yYbR2r, metadataField: metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: metroImportAll.LESS_THAN };
  items[3] = onChangeText(closure_18, obj6);
  const obj7 = { fieldText: intl.string(intl3.t["39wASN"]), metadataField: metroImportDefault.EBAY_TOP_RATED_SELLER, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_TOP_RATED_SELLER), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[4] = onChangeText(closure_17, obj7);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let configMetadataMap;
  let first;
  let items;
  let locked;
  let onConfigurationChange;
  let tmp10;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(31);
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = PlatformsDefault;
    value = obj2.get(PlatformTypes.TIKTOK);
    cResult[0] = value;
    first = value;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.E2iT8K);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== configMetadataMap) {
    const value5 = configMetadataMap.get(metroImportDefault.TIKTOK_VERIFIED);
    cResult[2] = configMetadataMap;
    cResult[3] = value5;
    tmp10 = value5;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === locked) {
    if (cResult[5] === onConfigurationChange) {
      let tmp13;
      let tmp15;
      if (cResult[6] === tmp10) {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== configMetadataMap) {
        const value6 = configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWER_COUNT);
        cResult[8] = configMetadataMap;
        cResult[9] = value6;
        tmp15 = value6;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === locked) {
        if (cResult[11] === onConfigurationChange) {
          let tmp18;
          let tmp23;
          if (cResult[12] === tmp15) {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== configMetadataMap) {
            const value7 = configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWING_COUNT);
            cResult[14] = configMetadataMap;
            cResult[15] = value7;
            tmp23 = value7;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] === locked) {
            if (cResult[17] === onConfigurationChange) {
              let tmp26;
              let tmp31;
              if (cResult[18] === tmp23) {
                tmp26 = cResult[19];
              }
              if (cResult[20] !== configMetadataMap) {
                const value8 = configMetadataMap.get(metroImportDefault.TIKTOK_LIKES_COUNT);
                cResult[20] = configMetadataMap;
                cResult[21] = value8;
                tmp31 = value8;
              } else {
                tmp31 = cResult[21];
              }
              if (cResult[22] === locked) {
                if (cResult[23] === onConfigurationChange) {
                  let tmp34;
                  if (cResult[24] === tmp31) {
                    tmp34 = cResult[25];
                  }
                  if (cResult[26] === tmp34) {
                    if (cResult[27] === tmp13) {
                      if (cResult[28] === tmp18) {
                        let tmp39;
                        if (cResult[29] === tmp26) {
                          tmp39 = cResult[30];
                        }
                        return tmp39;
                      }
                    }
                  }
                  const obj3 = { children: items };
                  items = [tmp13, tmp18, tmp26, tmp34];
                  const tmp42 = map1(authStore2, obj3);
                  cResult[26] = tmp34;
                  cResult[27] = tmp13;
                  cResult[28] = tmp18;
                  cResult[29] = tmp26;
                  cResult[30] = tmp42;
                  tmp39 = tmp42;
                }
              }
              const obj4 = { fieldTextHook: intl3.t.tEFCYA, metadataField: metroImportDefault.TIKTOK_LIKES_COUNT, existingPendingConfiguration: tmp31, platform: first, onConfigurationChange, locked };
              const tmp38 = onChangeText(closure_18, obj4);
              cResult[22] = locked;
              cResult[23] = onConfigurationChange;
              cResult[24] = tmp31;
              cResult[25] = tmp38;
              tmp34 = tmp38;
            }
          }
          const obj5 = { fieldTextHook: intl3.t.JHEsYw, metadataField: metroImportDefault.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: tmp23, platform: first, onConfigurationChange, locked };
          const tmp30 = onChangeText(closure_18, obj5);
          cResult[16] = locked;
          cResult[17] = onConfigurationChange;
          cResult[18] = tmp23;
          cResult[19] = tmp30;
          tmp26 = tmp30;
        }
      }
      const obj6 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: tmp15, platform: first, onConfigurationChange, locked };
      const tmp22 = onChangeText(closure_18, obj6);
      cResult[10] = locked;
      cResult[11] = onConfigurationChange;
      cResult[12] = tmp15;
      cResult[13] = tmp22;
      tmp18 = tmp22;
    }
  }
  const obj7 = { fieldText: tmp8, metadataField: metroImportDefault.TIKTOK_VERIFIED, existingPendingConfiguration: tmp10, platform: first, onConfigurationChange, locked };
  const tmp14 = onChangeText(closure_17, obj7);
  cResult[4] = locked;
  cResult[5] = onConfigurationChange;
  cResult[6] = tmp10;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : ((arg0) => {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  value = obj.get(PlatformTypes.TIKTOK);
  const obj2 = { children: items };
  const obj3 = { fieldText: intl.string(intl3.t.E2iT8K), metadataField: metroImportDefault.TIKTOK_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items = [onChangeText(closure_17, obj3), , , ];
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = onChangeText(closure_18, obj4);
  const obj5 = { fieldTextHook: intl3.t.JHEsYw, metadataField: metroImportDefault.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = onChangeText(closure_18, obj5);
  const obj6 = { fieldTextHook: intl3.t.tEFCYA, metadataField: metroImportDefault.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = onChangeText(closure_18, obj6);
  return map1(authStore2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(configurationItems) {
  let locked;
  let obj3;
  const obj = react2;
  const cResult = obj.c(48);
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  if (configurationItems.length < 1) {
    return null;
  } else {
    const applicationId = configurationItems[0].configuration.applicationId;
    if (cResult[0] === applicationId) {
      if (cResult[1] === integrations) {
        let tmp4;
        if (cResult[2] === configurationItems[0].configuration.connectionType === unpackModuleId) {
          tmp4 = cResult[3];
        }
        if (null != applicationId) {
          if (configurationItems[0].configuration.connectionType !== unpackModuleId) {
            if (null == tmp4) {
              return null;
            }
          }
        }
        if (configurationItems[0].configuration.connectionType === unpackModuleId) {
          if (cResult[4] === configurationItems[0].index) {
            let tmp74;
            if (cResult[5] === onConfigurationChange) {
              tmp74 = cResult[6];
            }
            class I {
              constructor() {
                return onConfigurationChange(null, configurationItems[0].index);
              }
            }
            const obj2 = { hasIcons: true, children: onChangeText(closure_16, obj3) };
            obj3 = { platform: null, integration: "a", applicationId, onRemove: tmp74, locked };
            const TableRowGroup = TableRowGroup3.TableRowGroup;
            cResult[7] = applicationId;
            cResult[8] = locked;
            cResult[9] = tmp74;
            cResult[10] = onChangeText(TableRowGroup, obj2);
            const tmp78 = onChangeText(TableRowGroup, obj2);
          }
          class I {
            constructor() {
              return onConfigurationChange(null, configurationItems[0].index);
            }
          }
          cResult[4] = configurationItems[0].index;
          cResult[5] = onConfigurationChange;
          cResult[6] = I;
          tmp74 = I;
        } else {
          let tmp9;
          class I {
            constructor() {
              return onConfigurationChange(null, configurationItems[0].index);
            }
          }
          if (cResult[13] !== configurationItems) {
            class I {
              constructor() {
                return onConfigurationChange(null, configurationItems[0].index);
              }
            }
            const self = this;
            const self2 = this;
            map = new Map();
            const item = configurationItems.forEach((configuration) => {
              if (null != configuration.configuration.connectionMetadataField) {
                const result = map.set(configuration.configuration.connectionMetadataField, configuration);
              } else {
                const tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
                if (tmp) {
                  let closure_4 = configuration;
                }
              }
            });
            cResult[13] = configurationItems;
            cResult[14] = map;
            cResult[15] = react;
            tmp9 = map;
          } else {
            tmp9 = cResult[14];
            class I {
              constructor() {
                return onConfigurationChange(null, configurationItems[0].index);
              }
            }
            react = cResult[15];
          }
          if (cResult[16] === tmp9) {
            if (cResult[17] === locked) {
              let tmp15;
              if (cResult[18] === onConfigurationChange) {
                tmp15 = cResult[19];
              }
              class I {
                constructor() {
                  return onConfigurationChange(null, configurationItems[0].index);
                }
              }
              let type;
              if (null != null) {
                type = tmp8.type;
              }
              if (PlatformTypes.STEAM === type) {
                if (cResult[20] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj4 = {};
                  const merged = Object.assign(tmp15);
                  const tmp65 = onChangeText(closure_20, obj4);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[20] = tmp15;
                  cResult[21] = tmp65;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.TWITTER === type) {
                if (cResult[22] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj5 = {};
                  const merged1 = Object.assign(tmp15);
                  const tmp59 = onChangeText(closure_21, obj5);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[22] = tmp15;
                  cResult[23] = tmp59;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.REDDIT === type) {
                if (cResult[24] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj6 = {};
                  const merged2 = Object.assign(tmp15);
                  const tmp53 = onChangeText(closure_22, obj6);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[24] = tmp15;
                  cResult[25] = tmp53;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.BLUESKY === type) {
                if (cResult[26] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj7 = {};
                  const merged3 = Object.assign(tmp15);
                  const tmp47 = onChangeText(closure_19, obj7);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[26] = tmp15;
                  cResult[27] = tmp47;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.PAYPAL === type) {
                if (cResult[28] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj8 = {};
                  const merged4 = Object.assign(tmp15);
                  const tmp41 = onChangeText(closure_23, obj8);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[28] = tmp15;
                  cResult[29] = tmp41;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.EBAY === type) {
                if (cResult[30] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj9 = {};
                  const merged5 = Object.assign(tmp15);
                  const tmp35 = onChangeText(closure_24, obj9);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[30] = tmp15;
                  cResult[31] = tmp35;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else if (PlatformTypes.TIKTOK === type) {
                if (cResult[32] !== tmp15) {
                  class I {
                    constructor() {
                      return onConfigurationChange(null, configurationItems[0].index);
                    }
                  }
                  const obj10 = {};
                  const merged6 = Object.assign(tmp15);
                  const tmp29 = onChangeText(closure_25, obj10);
                  class M {
                    constructor() {
                      return onConfigurationChange(null, index.index);
                    }
                  }
                  cResult[32] = tmp15;
                  cResult[33] = tmp29;
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
              } else {
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
                const obj11 = {};
                const merged7 = Object.assign(tmp15);
                class M {
                  constructor() {
                    return onConfigurationChange(null, index.index);
                  }
                }
                cResult[34] = tmp15;
                cResult[35] = tmp4;
                cResult[36] = onChangeText(ApplicationMetadataRules, obj11);
                const tmp23 = onChangeText(ApplicationMetadataRules, obj11);
              }
              if (cResult[37] === onConfigurationChange) {
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
                if (cResult[40] === tmp4) {
                  if (cResult[41] === locked) {
                    class I {
                      constructor() {
                        return onConfigurationChange(null, configurationItems[0].index);
                      }
                    }
                  }
                }
                const obj12 = { platform: null, integration: null, onRemove: M, locked };
                class M {
                  constructor() {
                    return onConfigurationChange(null, index.index);
                  }
                }
                cResult[40] = tmp4;
                cResult[41] = locked;
                cResult[42] = null;
                cResult[43] = M;
                cResult[44] = onChangeText(closure_16, obj12);
                const tmp73 = onChangeText(closure_16, obj12);
              }
              class M {
                constructor() {
                  return onConfigurationChange(null, index.index);
                }
              }
              cResult[37] = onConfigurationChange;
              cResult[38] = react.index;
              cResult[39] = M;
            }
          }
          const obj13 = { configMetadataMap: tmp9, onConfigurationChange, locked: null };
          cResult[16] = tmp9;
          cResult[17] = locked;
          cResult[18] = onConfigurationChange;
          cResult[19] = obj13;
          tmp15 = obj13;
        }
      }
    }
    cResult[0] = applicationId;
    cResult[1] = integrations;
    cResult[2] = configurationItems[0].configuration.connectionType === unpackModuleId;
    cResult[3] = undefined;
    tmp4 = tmp6;
  }
}) : (function(configurationItems) {
  let items;
  let locked;
  let obj3;
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let applicationId;
  let c3;
  map = undefined;
  if (configurationItems.length < 1) {
    return null;
  } else {
    let tmp;
    applicationId = configurationItems[0].configuration.applicationId;
    if (null != applicationId) {
      if (configurationItems[0].configuration.connectionType !== unpackModuleId) {
        let found;
        if (integrations != null) {
          found = integrations.find((application) => {
            application = application.application;
            let id;
            if (application != null) {
              id = application.id;
            }
            return id === applicationId;
          });
        }
        tmp = found;
      }
    }
    if (null != applicationId) {
      if (configurationItems[0].configuration.connectionType !== unpackModuleId) {
        if (null == tmp) {
          return null;
        }
      }
    }
    if (configurationItems[0].configuration.connectionType === unpackModuleId) {
      const obj2 = { hasIcons: true, children: onChangeText(closure_16, obj3) };
      obj3 = {
        platform: null,
        integration: "a",
        applicationId,
        onRemove() {
              return onConfigurationChange(null, configurationItems[0].index);
            },
        locked
      };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      return onChangeText(TableRowGroup2, obj2);
    } else {
      let tmp18;
      let tmp19;
      value = null;
      try {
        const obj = PlatformsDefault;
        value = obj.get(configurationItems[0].configuration.connectionType);
      } catch (err) {
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const item = configurationItems.forEach((configuration) => {
        if (null != configuration.configuration.connectionMetadataField) {
          const result = map.set(configuration.configuration.connectionMetadataField, configuration);
        } else {
          const tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
          if (tmp) {
            let c3 = configuration;
          }
        }
      });
      const obj4 = { configMetadataMap: map, onConfigurationChange, locked };
      let type;
      if (value != null) {
        type = value.type;
      }
      if (PlatformTypes.STEAM === type) {
        const obj5 = {};
        const merged = Object.assign(obj4);
        tmp18 = onChangeText(closure_20, obj5);
        tmp19 = onChangeText;
      } else if (PlatformTypes.TWITTER === type) {
        const obj6 = {};
        const merged1 = Object.assign(obj4);
        tmp18 = onChangeText(closure_21, obj6);
        tmp19 = onChangeText;
      } else if (PlatformTypes.REDDIT === type) {
        const obj7 = {};
        const merged2 = Object.assign(obj4);
        tmp18 = onChangeText(closure_22, obj7);
        tmp19 = onChangeText;
      } else if (PlatformTypes.BLUESKY === type) {
        const obj8 = {};
        const merged3 = Object.assign(obj4);
        tmp18 = onChangeText(closure_19, obj8);
        tmp19 = onChangeText;
      } else if (PlatformTypes.PAYPAL === type) {
        const obj9 = {};
        const merged4 = Object.assign(obj4);
        tmp18 = onChangeText(closure_23, obj9);
        tmp19 = onChangeText;
      } else if (PlatformTypes.EBAY === type) {
        const obj10 = {};
        const merged5 = Object.assign(obj4);
        tmp18 = onChangeText(closure_24, obj10);
        tmp19 = onChangeText;
      } else if (PlatformTypes.TIKTOK === type) {
        const obj11 = {};
        const merged6 = Object.assign(obj4);
        tmp18 = onChangeText(closure_25, obj11);
        tmp19 = onChangeText;
      } else {
        const obj12 = { integration: tmp };
        const merged7 = Object.assign(obj4);
        tmp18 = onChangeText(ApplicationMetadataRules, obj12);
        tmp19 = onChangeText;
      }
      const obj13 = { hasIcons: true, children: items };
      const obj14 = {
        platform: value,
        integration: tmp,
        onRemove() {
              return onConfigurationChange(null, _undefined.index);
            },
        locked
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      items = [tmp19(closure_16, obj14), tmp18];
      return map1(TableRowGroup, obj13);
    }
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default tmp5;