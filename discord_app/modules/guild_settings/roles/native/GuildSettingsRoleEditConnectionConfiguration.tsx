// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useGetOrFetchApplicationBatched from "../../../applications/useGetOrFetchApplicationBatched.tsx";
import RoleConnectionRequirementUtils from "../../../connections/RoleConnectionRequirementUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ApplicationMetadataRules(arg0) {
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        type = type.type;
        if (value.INTEGER_LESS_THAN_EQUAL !== type) {
          if (value.DATETIME_LESS_THAN_EQUAL !== type) {
            if (value.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (value.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (value.INTEGER_EQUAL !== type) {
                  if (value.BOOLEAN_EQUAL !== type) {
                    if (value.INTEGER_NOT_EQUAL !== type) {
                      if (value.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    let LESS_THAN = constants.NOT_EQUAL;
                  }
                }
                LESS_THAN = constants.EQUAL;
              }
            }
            LESS_THAN = constants.GREATER_THAN;
          }
          const type2 = type.type;
          if (value.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (value.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (value.INTEGER_EQUAL !== type2) {
                if (value.INTEGER_NOT_EQUAL !== type2) {
                  if (value.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (value.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      const obj = {
                        fieldText: null,
                        metadataField: null,
                        existingPendingConfiguration: null,
                        platform: null,
                        onConfigurationChange: null,
                        locked: null,
                        operator: null,
                        applicationId: null,
                      };
                      ({ description: obj.fieldText, key: obj.metadataField } = type);
                      obj.existingPendingConfiguration = _require.get(type.key);
                      obj.onConfigurationChange = onConfigurationChange;
                      obj.locked = locked;
                      obj.operator = LESS_THAN;
                      const application = integration.application;
                      let id;
                      if (application != null) {
                        id = application.id;
                      }
                      obj.applicationId = id;
                      return onChangeText(closure_17, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          const obj3 = {
            fieldText: null,
            metadataField: null,
            existingPendingConfiguration: null,
            platform: null,
            onConfigurationChange: null,
            locked: null,
            operator: null,
            applicationId: null,
          };
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          obj3.existingPendingConfiguration = _require.get(type.key);
          obj3.onConfigurationChange = onConfigurationChange;
          obj3.locked = locked;
          obj3.operator = LESS_THAN;
          const application2 = integration.application;
          let id1;
          if (application2 != null) {
            id1 = application2.id;
          }
          obj3.applicationId = id1;
          return onChangeText(closure_18, obj3, type.key);
        }
        LESS_THAN = constants.LESS_THAN;
      });
    }
  }
  return mapped;
}
const View = fn(17).View;
const PlatformTypes = fn(1085).PlatformTypes;
const Constants = fn(6679);
({
  MetadataFields: closure_7,
  OperatorTypes: closure_8,
  MetadataItemTypes: closure_9,
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  numericalInputContainerIOSInline: { marginTop: -2 },
  numericalInputContainerAndroidInline: null,
  numericalInputContainerBase: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.sm,
  },
  numericalInput: null,
  appNumericalInput: null,
  appNumericalInputContainer: null,
  appNumericalInputText: null,
  numericalInputDisabled: null,
  metadataRow: null,
  metadataRowText: null,
};
let obj3 = { transform: null };
let items = [{ translateY: 10 }];
obj3.transform = items;
obj2.numericalInputContainerAndroidInline = obj3;
let size = {
  width: 54,
  height: 32,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 4,
  paddingVertical: 0,
  marginTop: -4,
};
obj2.numericalInput = size;
const size1 = {
  width: 54,
  height: 32,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 8,
  paddingVertical: 0,
  marginRight: 8,
};
obj2.appNumericalInput = size1;
obj2.appNumericalInputContainer = { flexDirection: "row", alignItems: "center" };
obj2.appNumericalInputText = { flexShrink: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm };
obj2.numericalInputDisabled = { color: nativeDefault.colors.TEXT_MUTED };
obj2.metadataRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
obj2.metadataRowText = { lineHeight: 32 };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ platform, integration: application, applicationId, onRemove, locked } = arg0);
      const tmp4 = useThemeDefault();
      let application1;
      if (application != null) {
        application1 = application.application;
      }
      let tmp6;
      if (null == application1) {
        tmp6 = applicationId;
      }
      const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(tmp6);
      let application3;
      if (application != null) {
        application3 = application.application;
      }
      if (null != application3) {
        let bot;
        if (application != null) {
          const application2 = application.application;
          if (application2 != null) {
            bot = application2.bot;
          }
        }
        if (cResult[0] !== bot) {
          const obj3 = { size: native.AvatarSizes.XSMALL, user: bot, guildId: "Array" };
          const tmp26 = onChangeText(native.Avatar, obj3);
          cResult[0] = bot;
          cResult[1] = tmp26;
        }
        ({ application, name } = application);
      } else {
        if (null != applicationId) {
          if (undefined === getOrFetchApplicationBatched) {
            return null;
          } else {
            let bot1;
            if (getOrFetchApplicationBatched != null) {
              bot1 = getOrFetchApplicationBatched.bot;
            }
            if (null == bot1) {
              let name1;
              if (getOrFetchApplicationBatched != null) {
                name1 = getOrFetchApplicationBatched.name;
              }
            } else if (cResult[2] !== getOrFetchApplicationBatched.bot) {
              const obj4 = {
                size: native.AvatarSizes.XSMALL,
                user: getOrFetchApplicationBatched.bot,
                guildId: "Array",
              };
              const tmp20 = onChangeText(native.Avatar, obj4);
              cResult[2] = getOrFetchApplicationBatched.bot;
              cResult[3] = tmp20;
            }
          }
        } else if (null != platform) {
          const icon = platform.icon;
          const tmp9 = shared.isThemeDark(tmp4) ? icon.darkPNG : icon.lightPNG;
          if (cResult[4] !== tmp9) {
            const source = AvatarUtils.makeSource(tmp9);
            cResult[4] = tmp9;
            cResult[5] = source;
            let tmp10 = source;
            const tmpResult2 = AvatarUtils;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] !== tmp10) {
            const obj5 = { source: tmp10, disableColor: true };
            const tmp14 = onChangeText(native.Icon, obj5);
            cResult[6] = tmp10;
            cResult[7] = tmp14;
          }
          const tmpResult = shared;
        }
        let name2;
        if (platform != null) {
          name2 = platform.name;
        }
        if (cResult[8] === name2) {
          if (cResult[9] === tmp16) {
            let tmp29 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult = intl2.string(util.t.N86XcP);
            cResult[11] = stringResult;
            let tmp34 = stringResult;
          } else {
            tmp34 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp38 = onChangeText(XSmallIcon.XSmallIcon, {});
            cResult[12] = tmp38;
            let tmp36 = tmp38;
          } else {
            tmp36 = cResult[12];
          }
          if (cResult[13] === locked) {
            if (cResult[14] === onRemove) {
              let tmp39 = cResult[15];
            }
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp29) {
                if (cResult[18] === tmp39) {
                  let tmp42 = cResult[19];
                }
                return tmp42;
              }
            }
            const obj6 = { icon: tmp15, label: tmp29, trailing: tmp39 };
            const tmp44 = onChangeText(TableRow.TableRow, obj6);
            cResult[16] = tmp15;
            cResult[17] = tmp29;
            cResult[18] = tmp39;
            cResult[19] = tmp44;
            tmp42 = tmp44;
          }
          const obj7 = { "aria-label": tmp34, onPress: onRemove, disabled: locked, children: tmp36 };
          const tmp41 = onChangeText(Pressables.PressableOpacity, obj7);
          cResult[13] = locked;
          cResult[14] = onRemove;
          cResult[15] = tmp41;
          tmp39 = tmp41;
        }
        const intl = util.intl;
        let name3;
        if (platform != null) {
          name3 = platform.name;
        }
        if (name3 == null) {
          name3 = tmp16;
        }
        const obj8 = { platformName: name3 };
        const formatResult = intl.format(util.t.Nj0a3j, obj8);
        let name4;
        if (platform != null) {
          name4 = platform.name;
        }
        cResult[8] = name4;
        cResult[9] = tmp16;
        cResult[10] = formatResult;
        tmp29 = formatResult;
      }
    }
  : (arg0) => {
      ({ platform, integration, applicationId } = arg0);
      ({ onRemove, locked } = arg0);
      const tmp2 = useThemeDefault();
      let application1;
      if (integration != null) {
        application1 = integration.application;
      }
      let tmp5;
      if (null == application1) {
        tmp5 = applicationId;
      }
      const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(tmp5);
      let application2;
      if (integration != null) {
        application2 = integration.application;
      }
      if (null != application2) {
        const obj2 = { size: native.AvatarSizes.XSMALL, user: null, guildId: "Array" };
        let bot;
        if (integration != null) {
          const application = integration.application;
          if (application != null) {
            bot = application.bot;
          }
        }
        obj2.user = bot;
        let tmp8Result = onChangeText(native.Avatar, obj2);
        let name = integration.application.name;
      } else if (null != applicationId) {
        if (undefined === getOrFetchApplicationBatched) {
          return null;
        } else {
          let bot1;
          if (getOrFetchApplicationBatched != null) {
            bot1 = getOrFetchApplicationBatched.bot;
          }
          let tmp11;
          if (null != bot1) {
            const obj3 = { size: native.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "Array" };
            tmp11 = onChangeText(native.Avatar, obj3);
          }
          let name1;
          if (getOrFetchApplicationBatched != null) {
            name1 = getOrFetchApplicationBatched.name;
          }
          name = name1;
          tmp8Result = tmp11;
        }
      } else if (null != platform) {
        const tmp3Result = AvatarUtils;
        const icon = platform.icon;
        const obj4 = {
          source: tmp3Result.makeSource(shared.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG),
          disableColor: true,
        };
        tmp8Result = onChangeText(native.Icon, obj4);
        const tmp3Result2 = shared;
      }
      const obj5 = { icon: tmp8Result, label: null, trailing: null };
      const intl = util.intl;
      let name2;
      if (platform != null) {
        name2 = platform.name;
      }
      if (name2 == null) {
        name2 = name;
      }
      obj5.label = intl.format(util.t.Nj0a3j, { platformName: name2 });
      const obj6 = { "aria-label": null, onPress: null, disabled: null, children: null };
      const intl2 = util.intl;
      obj6["aria-label"] = intl2.string(util.t.N86XcP);
      obj6.onPress = onRemove;
      obj6.disabled = locked;
      obj6.children = onChangeText(XSmallIcon.XSmallIcon, {});
      obj5.trailing = onChangeText(Pressables.PressableOpacity, obj6);
      return onChangeText(TableRow.TableRow, obj5);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (existingPendingConfiguration) => {
      const cResult = metadataField(platform[9]).c(13);
      ({ fieldText, metadataField } = existingPendingConfiguration);
      existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
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
        if (existingPendingConfiguration != null) {
          index = existingPendingConfiguration.index;
        }
        if (cResult[1] === index) {
          if (cResult[2] === metadataField) {
            if (cResult[3] === onConfigurationChange) {
              let type;
              if (platform != null) {
                type = platform.type;
              }
              if (cResult[4] === type) {
                if (cResult[5] === EQUAL) {
                  let tmp7 = cResult[6];
                }
                if (cResult[7] === fieldText) {
                  if (cResult[8] === locked) {
                    if (cResult[9] === metadataField) {
                      if (cResult[10] === tmp10) {
                        if (cResult[11] === tmp7) {
                          let tmp11 = cResult[12];
                        }
                        return tmp11;
                      }
                    }
                  }
                }
                const obj2 = { label: fieldText, value: "1" === value, disabled: locked, onValueChange: tmp7 };
                const tmp13 = onChangeText(metadataField(tmp2[19]).TableSwitchRow, obj2, metadataField);
                cResult[7] = fieldText;
                cResult[8] = locked;
                cResult[9] = metadataField;
                cResult[10] = "1" === value;
                cResult[11] = tmp7;
                cResult[12] = tmp13;
                tmp11 = tmp13;
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
            type = v65535;
          }
          const obj = {
            connectionType: type,
            applicationId,
            connectionMetadataField: metadataField,
            operator: EQUAL,
            value: "1",
          };
          tmp = obj;
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
      tmp7 = fn;
      let obj = metadataField(platform[9]);
      tmp2 = platform;
    }
  : (metadataField) => {
      metadataField = metadataField.metadataField;
      const existingPendingConfiguration = metadataField.existingPendingConfiguration;
      ({
        platform: dependencyMap,
        onConfigurationChange: _slicedToArray,
        applicationId: noop,
        operator,
      } = metadataField);
      operator = undefined;
      ({ fieldText, locked } = metadataField);
      if (operator == null) {
        operator = constants.EQUAL;
      }
      let obj = { label: fieldText, value: null, disabled: null, onValueChange: null };
      value = undefined;
      if (existingPendingConfiguration != null) {
        value = existingPendingConfiguration.configuration.value;
      }
      obj.value = "1" === value;
      obj.disabled = locked;
      obj.onValueChange = function onValueChange(arg0) {
        let tmp = null;
        if (arg0) {
          type = undefined;
          if (type != null) {
            type = type.type;
          }
          if (type == null) {
            type = v65535;
          }
          const obj = {
            connectionType: type,
            applicationId,
            connectionMetadataField: metadataField,
            operator,
            value: "1",
          };
          tmp = obj;
        }
        let num;
        if (existingPendingConfiguration != null) {
          num = existingPendingConfiguration.index;
        }
        if (num == null) {
          num = -1;
        }
        _slicedToArray(tmp, num);
      };
      return onChangeText(metadataField(6698).TableSwitchRow, obj, metadataField);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (existingPendingConfiguration) => {
      const cResult = require("c").c(76);
      ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
      existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
      const platform = existingPendingConfiguration.platform;
      const onConfigurationChange = existingPendingConfiguration.onConfigurationChange;
      ({ locked, operator, applicationId } = existingPendingConfiguration);
      let numericalInputDisabled = closure_15();
      let num;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      value = undefined;
      if (existingPendingConfiguration != null) {
        if (existingPendingConfiguration.configuration != null) {
          value = iter.value;
        }
      }
      if (cResult[0] === value) {
        if (cResult[1] === operator) {
          require = cResult[2];
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        closure_8 = tmp7;
        let mapped = onConfigurationChange;
        const tmp14 = platform(onConfigurationChange.useState(tmp7), 2);
        value = tmp14[0];
        closure_10 = tmp16;
        let tmp17 = null != tmp6;
        if (tmp17) {
          tmp17 = "" !== value;
        }
        if (tmp17) {
          tmp17 = value !== tmp7;
        }
        if (tmp17) {
          tmp16(tmp7);
        }
        let configuration;
        if (existingPendingConfiguration != null) {
          configuration = existingPendingConfiguration.configuration;
        }
        let tmp21 = locked;
        if (!locked) {
          tmp21 = !tmp20;
        }
        closure_11 = tmp21;
        if (cResult[5] === applicationId) {
          if (cResult[6] === existingPendingConfiguration) {
            if (cResult[7] === num) {
              if (cResult[8] === metadataField) {
                if (cResult[9] === onConfigurationChange) {
                  let type;
                  if (platform != null) {
                    type = platform.type;
                  }
                  if (cResult[10] === type) {
                    if (cResult[11] === tmp5) {
                      numericalInputContainerBase = cResult[12];
                    }
                    if (undefined !== fieldTextHook) {
                      if (cResult[13] === numericalInputDisabled.numericalInputContainerAndroidInline) {
                        if (cResult[14] === numericalInputDisabled.numericalInputContainerIOSInline) {
                          closure_13 = tmp38;
                          if (cResult[16] === fieldTextHook) {
                            if (cResult[17] === tmp38) {
                              if (cResult[18] === tmp21) {
                                if (cResult[19] === value) {
                                  if (cResult[20] === metadataField) {
                                    if (cResult[21] === numericalInputContainerBase) {
                                      if (cResult[22] === numericalInputDisabled.metadataRow) {
                                        if (cResult[23] === numericalInputDisabled.metadataRowText) {
                                          if (cResult[24] === numericalInputDisabled.numericalInput) {
                                            if (cResult[25] === numericalInputDisabled.numericalInputContainerBase) {
                                              if (cResult[26] === numericalInputDisabled.numericalInputDisabled) {
                                                if (cResult[41] === cResult[27]) {
                                                  if (cResult[42] === tmp42) {
                                                  }
                                                }
                                                class Z {
                                                  constructor() {
                                                    tmp = jsx;
                                                    obj = { style: null, children: null };
                                                    items = [,];
                                                    items[0] = closure_13;
                                                    items[1] = closure_6.numericalInputContainerBase;
                                                    obj.style = items;
                                                    tmp2 = View;
                                                    tmp3 = closure_6;
                                                    items1 = [,];
                                                    items1[0] = closure_6.numericalInput;
                                                    numericalInputDisabled = closure_11;
                                                    tmp4 = closure_11;
                                                    if (closure_11) {
                                                      numericalInputDisabled = tmp3.numericalInputDisabled;
                                                    }
                                                    obj1 = {
                                                      keyboardType: "number-pad",
                                                      style: items1,
                                                      editable: !tmp4,
                                                      value: closure_9,
                                                      onChangeText: closure_12,
                                                      hitSlop: 8,
                                                    };
                                                    items1[1] = numericalInputDisabled;
                                                    obj.children = tmp(
                                                      closure_0(closure_2[12]).TextInput,
                                                      obj1,
                                                      metadataField,
                                                    );
                                                    return tmp(tmp2, obj, "_numericalInputContainer");
                                                  }
                                                }
                                                let obj2 = { style: cResult[28], children: cResult[29] };
                                                const tmp52 = numericalInputContainerBase(cResult[27], obj2);
                                                cResult[41] = cResult[27];
                                                cResult[42] = cResult[28];
                                                cResult[43] = cResult[29];
                                                cResult[44] = tmp52;
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
                          if (cResult[30] === cResult[15]) {
                            if (cResult[31] === tmp21) {
                              if (cResult[32] === value) {
                                if (cResult[33] === metadataField) {
                                  if (cResult[34] === numericalInputContainerBase) {
                                    if (cResult[35] === numericalInputDisabled.numericalInput) {
                                      if (cResult[36] === numericalInputDisabled.numericalInputContainerBase) {
                                        if (cResult[37] === numericalInputDisabled.numericalInputDisabled) {
                                          let tmp44 = cResult[38];
                                        }
                                        const intl = tmp(tmp2[15]).intl;
                                        const obj3 = { metadataHook: tmp44 };
                                        class Z {
                                          constructor() {
                                            tmp = jsx;
                                            obj = { style: null, children: null };
                                            items = [,];
                                            items[0] = closure_13;
                                            items[1] = closure_6.numericalInputContainerBase;
                                            obj.style = items;
                                            tmp2 = View;
                                            tmp3 = closure_6;
                                            items1 = [,];
                                            items1[0] = closure_6.numericalInput;
                                            numericalInputDisabled = closure_11;
                                            tmp4 = closure_11;
                                            if (closure_11) {
                                              numericalInputDisabled = tmp3.numericalInputDisabled;
                                            }
                                            obj1 = {
                                              keyboardType: "number-pad",
                                              style: items1,
                                              editable: !tmp4,
                                              value: closure_9,
                                              onChangeText: closure_12,
                                              hitSlop: 8,
                                            };
                                            items1[1] = numericalInputDisabled;
                                            obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                                            return tmp(tmp2, obj, "_numericalInputContainer");
                                          }
                                        }
                                        const metadataRow = numericalInputDisabled.metadataRow;
                                        if (cResult[39] !== numericalInputDisabled.metadataRowText) {
                                          const fn2 = function z(children, arg1) {
                                            let tmp = children;
                                            if (typeof children === "string") {
                                              const obj = {
                                                variant: "text-md/semibold",
                                                style: numericalInputDisabled.metadataRowText,
                                                children,
                                              };
                                              const _HermesInternal = HermesInternal;
                                              tmp = onChangeText(Text_Text.Text, obj, "t-" + arg1);
                                            }
                                            return tmp;
                                          };
                                          cResult[39] = numericalInputDisabled.metadataRowText;
                                          class Z {
                                            constructor() {
                                              tmp = jsx;
                                              obj = { style: null, children: null };
                                              items = [,];
                                              items[0] = closure_13;
                                              items[1] = closure_6.numericalInputContainerBase;
                                              obj.style = items;
                                              tmp2 = View;
                                              tmp3 = closure_6;
                                              items1 = [,];
                                              items1[0] = closure_6.numericalInput;
                                              numericalInputDisabled = closure_11;
                                              tmp4 = closure_11;
                                              if (closure_11) {
                                                numericalInputDisabled = tmp3.numericalInputDisabled;
                                              }
                                              obj1 = {
                                                keyboardType: "number-pad",
                                                style: items1,
                                                editable: !tmp4,
                                                value: closure_9,
                                                onChangeText: closure_12,
                                                hitSlop: 8,
                                              };
                                              items1[1] = numericalInputDisabled;
                                              obj.children = tmp(
                                                closure_0(closure_2[12]).TextInput,
                                                obj1,
                                                metadataField,
                                              );
                                              return tmp(tmp2, obj, "_numericalInputContainer");
                                            }
                                          }
                                          let tmp47 = fn2;
                                        } else {
                                          tmp47 = cResult[40];
                                        }
                                        const Children = mapped.Children;
                                        mapped = Children.map(intl.format(fieldTextHook, obj3), tmp47);
                                        cResult[16] = fieldTextHook;
                                        cResult[17] = tmp38;
                                        cResult[18] = tmp21;
                                        cResult[19] = value;
                                        cResult[20] = metadataField;
                                        cResult[21] = numericalInputContainerBase;
                                        cResult[22] = numericalInputDisabled.metadataRow;
                                        cResult[23] = numericalInputDisabled.metadataRowText;
                                        ({ numericalInput: tmp3[24], numericalInputContainerBase } =
                                          numericalInputDisabled);
                                        cResult[25] = numericalInputContainerBase;
                                        numericalInputDisabled = numericalInputDisabled.numericalInputDisabled;
                                        cResult[26] = numericalInputDisabled;
                                        cResult[27] = tmp46;
                                        cResult[28] = metadataRow;
                                        cResult[29] = mapped;
                                        const formatResult = intl.format(fieldTextHook, obj3);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class Z {
                            constructor() {
                              tmp = jsx;
                              obj = { style: null, children: null };
                              items = [,];
                              items[0] = closure_13;
                              items[1] = closure_6.numericalInputContainerBase;
                              obj.style = items;
                              tmp2 = View;
                              tmp3 = closure_6;
                              items1 = [,];
                              items1[0] = closure_6.numericalInput;
                              numericalInputDisabled = closure_11;
                              tmp4 = closure_11;
                              if (closure_11) {
                                numericalInputDisabled = tmp3.numericalInputDisabled;
                              }
                              obj1 = {
                                keyboardType: "number-pad",
                                style: items1,
                                editable: !tmp4,
                                value: closure_9,
                                onChangeText: closure_12,
                                hitSlop: 8,
                              };
                              items1[1] = numericalInputDisabled;
                              obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                              return tmp(tmp2, obj, "_numericalInputContainer");
                            }
                          }
                          cResult[30] = cResult[15];
                          cResult[31] = tmp21;
                          cResult[32] = value;
                          cResult[33] = metadataField;
                          cResult[34] = numericalInputContainerBase;
                          cResult[35] = numericalInputDisabled.numericalInput;
                          cResult[36] = numericalInputDisabled.numericalInputContainerBase;
                          cResult[37] = numericalInputDisabled.numericalInputDisabled;
                          cResult[38] = Z;
                          tmp44 = Z;
                        }
                      }
                      const tmp39 = tmp(tmp2[21]).isIOS()
                        ? numericalInputDisabled.numericalInputContainerIOSInline
                        : numericalInputDisabled.numericalInputContainerAndroidInline;
                      cResult[14] = numericalInputDisabled.numericalInputContainerIOSInline;
                      cResult[15] = tmp39;
                      const tmpResult = tmp(tmp2[21]);
                    } else {
                      if (undefined !== fieldText) {
                        let numericalInputDisabled2 = tmp21;
                        if (tmp21) {
                          numericalInputDisabled2 = numericalInputDisabled.numericalInputDisabled;
                        }
                        if (cResult[45] === numericalInputDisabled.appNumericalInput) {
                          if (cResult[46] === numericalInputDisabled2) {
                            let tmp24 = cResult[47];
                          }
                          if (cResult[48] === value) {
                            if (cResult[49] === metadataField) {
                              if (cResult[50] === numericalInputContainerBase) {
                                if (cResult[51] === tmp24) {
                                  if (cResult[52] === tmp25) {
                                    let tmp26 = cResult[53];
                                  }
                                  if (cResult[54] === fieldText) {
                                    if (cResult[55] === numericalInputDisabled.appNumericalInputText) {
                                      let tmp29 = cResult[56];
                                    }
                                    if (cResult[57] === numericalInputDisabled.appNumericalInputContainer) {
                                      if (cResult[58] === tmp26) {
                                      }
                                    }
                                    class Z {
                                      constructor() {
                                        tmp = jsx;
                                        obj = { style: null, children: null };
                                        items = [,];
                                        items[0] = closure_13;
                                        items[1] = closure_6.numericalInputContainerBase;
                                        obj.style = items;
                                        tmp2 = View;
                                        tmp3 = closure_6;
                                        items1 = [,];
                                        items1[0] = closure_6.numericalInput;
                                        numericalInputDisabled = closure_11;
                                        tmp4 = closure_11;
                                        if (closure_11) {
                                          numericalInputDisabled = tmp3.numericalInputDisabled;
                                        }
                                        obj1 = {
                                          keyboardType: "number-pad",
                                          style: items1,
                                          editable: !tmp4,
                                          value: closure_9,
                                          onChangeText: closure_12,
                                          hitSlop: 8,
                                        };
                                        items1[1] = numericalInputDisabled;
                                        obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                                        return tmp(tmp2, obj, "_numericalInputContainer");
                                      }
                                    }
                                    tmp35[0] = numericalInputDisabled.appNumericalInputContainer;
                                    let items = [tmp26, tmp29];
                                    tmp35[1] = items;
                                    const tmp36 = closure_13(applicationId, tmp35);
                                    cResult[57] = numericalInputDisabled.appNumericalInputContainer;
                                    cResult[58] = tmp26;
                                    cResult[59] = tmp29;
                                    class K {
                                      constructor(arg0) {
                                        tmp = closure_9;
                                        if ("" === closure_9) {
                                          tmp = closure_8;
                                        }
                                        tmp2 = closure_10(tmp);
                                        tmp3 = null;
                                        if (existingPendingConfiguration) {
                                          type = undefined;
                                          if (platform != null) {
                                            type = platform.type;
                                          }
                                          if (type == null) {
                                            type = closure_10;
                                          }
                                          obj = {
                                            connectionType: null,
                                            applicationId: null,
                                            connectionMetadataField: null,
                                            operator: null,
                                            value: null,
                                          };
                                          obj.connectionType = type;
                                          tmp5 = applicationId;
                                          obj.applicationId = applicationId;
                                          tmp6 = metadataField;
                                          obj.connectionMetadataField = metadataField;
                                          tmp7 = closure_0;
                                          obj.operator = closure_0;
                                          tmp8 = closure_0;
                                          tmp9 = closure_2;
                                          obj2 = closure_0(closure_2[20]);
                                          obj.value = obj2.storedValueFor(tmp, closure_0);
                                          tmp3 = obj;
                                        }
                                        num = undefined;
                                        tmp10 = onConfigurationChange;
                                        if (closure_2 != null) {
                                          num = closure_2.index;
                                        }
                                        if (num == null) {
                                          num = -1;
                                        }
                                        tmp10Result = tmp10(tmp3, num);
                                        return;
                                      }
                                    }
                                    cResult[60] = tmp36;
                                  }
                                  const obj4 = { variant: "text-md/semibold", style: null, children: null };
                                  class Z {
                                    constructor() {
                                      tmp = jsx;
                                      obj = { style: null, children: null };
                                      items = [,];
                                      items[0] = closure_13;
                                      items[1] = closure_6.numericalInputContainerBase;
                                      obj.style = items;
                                      tmp2 = View;
                                      tmp3 = closure_6;
                                      items1 = [,];
                                      items1[0] = closure_6.numericalInput;
                                      numericalInputDisabled = closure_11;
                                      tmp4 = closure_11;
                                      if (closure_11) {
                                        numericalInputDisabled = tmp3.numericalInputDisabled;
                                      }
                                      obj1 = {
                                        keyboardType: "number-pad",
                                        style: items1,
                                        editable: !tmp4,
                                        value: closure_9,
                                        onChangeText: closure_12,
                                        hitSlop: 8,
                                      };
                                      items1[1] = numericalInputDisabled;
                                      obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                                      return tmp(tmp2, obj, "_numericalInputContainer");
                                    }
                                  }
                                  obj4.children = fieldText;
                                  const tmp31 = numericalInputContainerBase(tmp(tmp2[22]).Text, obj4);
                                  cResult[54] = fieldText;
                                  cResult[55] = numericalInputDisabled.appNumericalInputText;
                                  cResult[56] = tmp31;
                                  tmp29 = tmp31;
                                }
                              }
                            }
                          }
                          class Z {
                            constructor() {
                              tmp = jsx;
                              obj = { style: null, children: null };
                              items = [,];
                              items[0] = closure_13;
                              items[1] = closure_6.numericalInputContainerBase;
                              obj.style = items;
                              tmp2 = View;
                              tmp3 = closure_6;
                              items1 = [,];
                              items1[0] = closure_6.numericalInput;
                              numericalInputDisabled = closure_11;
                              tmp4 = closure_11;
                              if (closure_11) {
                                numericalInputDisabled = tmp3.numericalInputDisabled;
                              }
                              obj1 = {
                                keyboardType: "number-pad",
                                style: items1,
                                editable: !tmp4,
                                value: closure_9,
                                onChangeText: closure_12,
                                hitSlop: 8,
                              };
                              items1[1] = numericalInputDisabled;
                              obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                              return tmp(tmp2, obj, "_numericalInputContainer");
                            }
                          }
                          const obj5 = { children: null };
                          const obj6 = {
                            keyboardType: "number-pad",
                            style: tmp24,
                            editable: !tmp21,
                            value,
                            onChangeText: numericalInputContainerBase,
                          };
                          obj5.children = numericalInputContainerBase(tmp(tmp2[12]).TextInput, obj6, metadataField);
                          const tmp28 = numericalInputContainerBase(applicationId, obj5, "_numericalInputContainer");
                          cResult[48] = value;
                          class K {
                            constructor(arg0) {
                              tmp = closure_9;
                              if ("" === closure_9) {
                                tmp = closure_8;
                              }
                              tmp2 = closure_10(tmp);
                              tmp3 = null;
                              if (existingPendingConfiguration) {
                                type = undefined;
                                if (platform != null) {
                                  type = platform.type;
                                }
                                if (type == null) {
                                  type = closure_10;
                                }
                                obj = {
                                  connectionType: null,
                                  applicationId: null,
                                  connectionMetadataField: null,
                                  operator: null,
                                  value: null,
                                };
                                obj.connectionType = type;
                                tmp5 = applicationId;
                                obj.applicationId = applicationId;
                                tmp6 = metadataField;
                                obj.connectionMetadataField = metadataField;
                                tmp7 = closure_0;
                                obj.operator = closure_0;
                                tmp8 = closure_0;
                                tmp9 = closure_2;
                                obj2 = closure_0(closure_2[20]);
                                obj.value = obj2.storedValueFor(tmp, closure_0);
                                tmp3 = obj;
                              }
                              num = undefined;
                              tmp10 = onConfigurationChange;
                              if (closure_2 != null) {
                                num = closure_2.index;
                              }
                              if (num == null) {
                                num = -1;
                              }
                              tmp10Result = tmp10(tmp3, num);
                              return;
                            }
                          }
                          cResult[50] = numericalInputContainerBase;
                          cResult[51] = tmp24;
                          cResult[52] = !tmp21;
                          cResult[53] = tmp28;
                          tmp26 = tmp28;
                        }
                        let items1 = [,];
                        class Z {
                          constructor() {
                            tmp = jsx;
                            obj = { style: null, children: null };
                            items = [,];
                            items[0] = closure_13;
                            items[1] = closure_6.numericalInputContainerBase;
                            obj.style = items;
                            tmp2 = View;
                            tmp3 = closure_6;
                            items1 = [,];
                            items1[0] = closure_6.numericalInput;
                            numericalInputDisabled = closure_11;
                            tmp4 = closure_11;
                            if (closure_11) {
                              numericalInputDisabled = tmp3.numericalInputDisabled;
                            }
                            obj1 = {
                              keyboardType: "number-pad",
                              style: items1,
                              editable: !tmp4,
                              value: closure_9,
                              onChangeText: closure_12,
                              hitSlop: 8,
                            };
                            items1[1] = numericalInputDisabled;
                            obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                            return tmp(tmp2, obj, "_numericalInputContainer");
                          }
                        }
                        items1[1] = numericalInputDisabled2;
                        cResult[45] = numericalInputDisabled.appNumericalInput;
                        cResult[46] = numericalInputDisabled2;
                        cResult[47] = items1;
                        tmp24 = items1;
                      }
                      if (cResult[61] === applicationId) {
                        let index;
                        if (existingPendingConfiguration != null) {
                          index = existingPendingConfiguration.index;
                        }
                        if (cResult[62] === index) {
                          if (cResult[63] === value) {
                            if (cResult[64] === metadataField) {
                              if (cResult[65] === onConfigurationChange) {
                                let type1;
                                if (platform != null) {
                                  type1 = platform.type;
                                }
                                if (cResult[66] === type1) {
                                  if (cResult[67] === tmp5) {
                                    if (cResult[68] === tmp7) {
                                      let tmp56 = cResult[69];
                                    }
                                    if (cResult[70] === tmp20) {
                                      if (cResult[71] === tmp37) {
                                        if (cResult[72] === locked) {
                                          if (cResult[73] === metadataField) {
                                            if (cResult[74] === tmp56) {
                                              let tmp59 = cResult[75];
                                            }
                                            return tmp59;
                                          }
                                        }
                                      }
                                    }
                                    const obj7 = { label: null, value: null, disabled: null, onValueChange: null };
                                    class Z {
                                      constructor() {
                                        tmp = jsx;
                                        obj = { style: null, children: null };
                                        items = [,];
                                        items[0] = closure_13;
                                        items[1] = closure_6.numericalInputContainerBase;
                                        obj.style = items;
                                        tmp2 = View;
                                        tmp3 = closure_6;
                                        items1 = [,];
                                        items1[0] = closure_6.numericalInput;
                                        numericalInputDisabled = closure_11;
                                        tmp4 = closure_11;
                                        if (closure_11) {
                                          numericalInputDisabled = tmp3.numericalInputDisabled;
                                        }
                                        obj1 = {
                                          keyboardType: "number-pad",
                                          style: items1,
                                          editable: !tmp4,
                                          value: closure_9,
                                          onChangeText: closure_12,
                                          hitSlop: 8,
                                        };
                                        items1[1] = numericalInputDisabled;
                                        obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                                        return tmp(tmp2, obj, "_numericalInputContainer");
                                      }
                                    }
                                    obj7.value = tmp20;
                                    obj7.disabled = locked;
                                    obj7.onValueChange = tmp56;
                                    const tmp61 = numericalInputContainerBase(
                                      tmp(tmp2[19]).TableSwitchRow,
                                      obj7,
                                      metadataField,
                                    );
                                    cResult[70] = tmp20;
                                    cResult[71] = tmp37;
                                    cResult[72] = locked;
                                    cResult[73] = metadataField;
                                    class K {
                                      constructor(arg0) {
                                        tmp = closure_9;
                                        if ("" === closure_9) {
                                          tmp = closure_8;
                                        }
                                        tmp2 = closure_10(tmp);
                                        tmp3 = null;
                                        if (existingPendingConfiguration) {
                                          type = undefined;
                                          if (platform != null) {
                                            type = platform.type;
                                          }
                                          if (type == null) {
                                            type = closure_10;
                                          }
                                          obj = {
                                            connectionType: null,
                                            applicationId: null,
                                            connectionMetadataField: null,
                                            operator: null,
                                            value: null,
                                          };
                                          obj.connectionType = type;
                                          tmp5 = applicationId;
                                          obj.applicationId = applicationId;
                                          tmp6 = metadataField;
                                          obj.connectionMetadataField = metadataField;
                                          tmp7 = closure_0;
                                          obj.operator = closure_0;
                                          tmp8 = closure_0;
                                          tmp9 = closure_2;
                                          obj2 = closure_0(closure_2[20]);
                                          obj.value = obj2.storedValueFor(tmp, closure_0);
                                          tmp3 = obj;
                                        }
                                        num = undefined;
                                        tmp10 = onConfigurationChange;
                                        if (closure_2 != null) {
                                          num = closure_2.index;
                                        }
                                        if (num == null) {
                                          num = -1;
                                        }
                                        tmp10Result = tmp10(tmp3, num);
                                        return;
                                      }
                                    }
                                    cResult[74] = tmp56;
                                    cResult[75] = tmp61;
                                    tmp59 = tmp61;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class Z {
                        constructor() {
                          tmp = jsx;
                          obj = { style: null, children: null };
                          items = [,];
                          items[0] = closure_13;
                          items[1] = closure_6.numericalInputContainerBase;
                          obj.style = items;
                          tmp2 = View;
                          tmp3 = closure_6;
                          items1 = [,];
                          items1[0] = closure_6.numericalInput;
                          numericalInputDisabled = closure_11;
                          tmp4 = closure_11;
                          if (closure_11) {
                            numericalInputDisabled = tmp3.numericalInputDisabled;
                          }
                          obj1 = {
                            keyboardType: "number-pad",
                            style: items1,
                            editable: !tmp4,
                            value: closure_9,
                            onChangeText: closure_12,
                            hitSlop: 8,
                          };
                          items1[1] = numericalInputDisabled;
                          obj.children = tmp(closure_0(closure_2[12]).TextInput, obj1, metadataField);
                          return tmp(tmp2, obj, "_numericalInputContainer");
                        }
                      }
                      let index1;
                      if (existingPendingConfiguration != null) {
                        index1 = existingPendingConfiguration.index;
                      }
                      cResult[62] = index1;
                      cResult[63] = value;
                      cResult[64] = metadataField;
                      cResult[65] = onConfigurationChange;
                      let type2;
                      if (platform != null) {
                        type2 = platform.type;
                      }
                      class K {
                        constructor(arg0) {
                          tmp = closure_9;
                          if ("" === closure_9) {
                            tmp = closure_8;
                          }
                          tmp2 = closure_10(tmp);
                          tmp3 = null;
                          if (existingPendingConfiguration) {
                            type = undefined;
                            if (platform != null) {
                              type = platform.type;
                            }
                            if (type == null) {
                              type = closure_10;
                            }
                            obj = {
                              connectionType: null,
                              applicationId: null,
                              connectionMetadataField: null,
                              operator: null,
                              value: null,
                            };
                            obj.connectionType = type;
                            tmp5 = applicationId;
                            obj.applicationId = applicationId;
                            tmp6 = metadataField;
                            obj.connectionMetadataField = metadataField;
                            tmp7 = closure_0;
                            obj.operator = closure_0;
                            tmp8 = closure_0;
                            tmp9 = closure_2;
                            obj2 = closure_0(closure_2[20]);
                            obj.value = obj2.storedValueFor(tmp, closure_0);
                            tmp3 = obj;
                          }
                          num = undefined;
                          tmp10 = onConfigurationChange;
                          if (closure_2 != null) {
                            num = closure_2.index;
                          }
                          if (num == null) {
                            num = -1;
                          }
                          tmp10Result = tmp10(tmp3, num);
                          return;
                        }
                      }
                      cResult[66] = type2;
                      cResult[67] = tmp5;
                      cResult[68] = tmp7;
                      cResult[69] = K;
                      tmp56 = K;
                    }
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
          closure_10(TableSwitchRow);
          let isFiniteResult = null != existingPendingConfiguration;
          if (isFiniteResult) {
            isFiniteResult = "" !== TableSwitchRow;
          }
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
              type = v65535;
            }
            const obj = {
              connectionType: type,
              applicationId,
              connectionMetadataField: metadataField,
              operator: realizedOperatorForResult,
              value: RoleConnectionRequirementUtils.storedValueFor(TableSwitchRow, realizedOperatorForResult),
            };
            onConfigurationChange(obj, num);
          }
        };
        cResult[10] = type3;
        cResult[11] = tmp5;
        cResult[12] = fn;
        numericalInputContainerBase = fn;
      }
      let obj = require("c");
      const realizedOperatorForResult = require("RoleConnectionRequirementUtils").realizedOperatorFor(operator);
      require = realizedOperatorForResult;
      value3 = undefined;
      if (existingPendingConfiguration != null) {
        if (existingPendingConfiguration.configuration != null) {
          value3 = iter2.value;
        }
      }
      const tmpResult3 = require("RoleConnectionRequirementUtils");
      const tmpResult4 = require("RoleConnectionRequirementUtils");
      const str1 = require("RoleConnectionRequirementUtils")
        .displayedValueFor(value3, realizedOperatorForResult)
        .toString();
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
      tmp7 = str1;
      tmp6 = value3;
      const str = require("RoleConnectionRequirementUtils").displayedValueFor(value3, realizedOperatorForResult);
    }
  : (existingPendingConfiguration) => {
      ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
      existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
      ({
        platform: dependencyMap,
        onConfigurationChange: _slicedToArray,
        locked,
        applicationId: noop,
      } = existingPendingConfiguration);
      c7 = undefined;
      let str1;
      value = undefined;
      closure_10 = undefined;
      closure_11 = undefined;
      closure_13 = undefined;
      function onInputValueChange(TableSwitchRow) {
        closure_10(TableSwitchRow);
        let isFiniteResult = null != existingPendingConfiguration;
        if (isFiniteResult) {
          isFiniteResult = "" !== TableSwitchRow;
        }
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
            type = v65535;
          }
          const obj = {
            connectionType: type,
            applicationId,
            connectionMetadataField: metadataField,
            operator,
            value: RoleConnectionRequirementUtils.storedValueFor(TableSwitchRow, operator),
          };
          _slicedToArray(obj, num);
        }
      }
      let map = closure_15();
      let num;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      const realizedOperatorForResult = metadataField(17784).realizedOperatorFor(existingPendingConfiguration.operator);
      c7 = realizedOperatorForResult;
      value = undefined;
      if (existingPendingConfiguration != null) {
        if (existingPendingConfiguration.configuration != null) {
          value = iter.value;
        }
      }
      let obj = metadataField(17784);
      const tmpResult = metadataField(17784);
      str1 = metadataField(17784).displayedValueFor(value, realizedOperatorForResult).toString();
      let mapped = noop;
      [value] = noop.useState(str1);
      closure_10 = tmp9;
      let tmp10 = null != value;
      if (tmp10) {
        tmp10 = "" !== value;
      }
      if (tmp10) {
        tmp10 = value !== str1;
      }
      if (tmp10) {
        tmp9(str1);
      }
      let configuration;
      if (existingPendingConfiguration != null) {
        configuration = existingPendingConfiguration.configuration;
      }
      let tmp14 = locked;
      if (!locked) {
        tmp14 = !tmp13;
      }
      closure_11 = tmp14;
      if (undefined !== fieldTextHook) {
        closure_13 = metadataField(1369).isIOS()
          ? map.numericalInputContainerIOSInline
          : map.numericalInputContainerAndroidInline;
        const intl = metadataField(1126).intl;
        let obj2 = {
          metadataHook() {
            const obj = { style: null, children: null };
            const items = [closure_13, map.numericalInputContainerBase];
            obj.style = items;
            const items1 = [map.numericalInput];
            let numericalInputDisabled = closure_11;
            if (closure_11) {
              numericalInputDisabled = map.numericalInputDisabled;
            }
            items1[1] = numericalInputDisabled;
            obj.children = onChangeText(
              native.TextInput,
              {
                keyboardType: "number-pad",
                style: items1,
                editable: !closure_11,
                value,
                onChangeText: onInputValueChange,
                hitSlop: 8,
              },
              metadataField,
            );
            return onChangeText(View, obj, "_numericalInputContainer");
          },
        };
        const obj3 = { style: map.metadataRow, children: null };
        const tmpResult2 = metadataField(1369);
        fieldTextHook = mapped.Children;
        map = fieldTextHook.map;
        mapped = map(intl.format(fieldTextHook, obj2), (children, arg1) => {
          let tmp = children;
          if (typeof children === "string") {
            const obj = { variant: "text-md/semibold", style: map.metadataRowText, children };
            const _HermesInternal = HermesInternal;
            tmp = onChangeText(Text_Text.Text, obj, "t-" + arg1);
          }
          return tmp;
        });
        obj3.children = mapped;
        onInputValueChange(map, obj3);
        const formatResult = intl.format(fieldTextHook, obj2);
      } else {
        let tmp21Result;
        if (undefined !== fieldText) {
          const obj4 = { style: map.appNumericalInputContainer, children: null };
          let items = [map.appNumericalInput];
          let numericalInputDisabled = tmp14;
          if (tmp14) {
            numericalInputDisabled = map.numericalInputDisabled;
          }
          const obj5 = { children: null };
          const obj6 = { keyboardType: "number-pad", style: null, editable: null, value: null, onChangeText: null };
          items[1] = numericalInputDisabled;
          obj6.style = items;
          obj6.editable = !tmp14;
          obj6.value = value;
          obj6.onChangeText = onInputValueChange;
          obj5.children = onInputValueChange(metadataField(1188).TextInput, obj6, metadataField);
          let items1 = [onInputValueChange(map, obj5, "_numericalInputContainer")];
          const obj7 = { variant: "text-md/semibold", style: map.appNumericalInputText, children: fieldText };
          items1[1] = onInputValueChange(metadataField(4886).Text, obj7);
          obj4.children = items1;
          tmp21Result = closure_13(tmp22, obj4);
        }
        const obj8 = {
          label: tmp21Result,
          value: tmp13,
          disabled: locked,
          onValueChange(arg0) {
            let tmp = first;
            if ("" === first) {
              tmp = str1;
            }
            closure_10(tmp);
            let tmp3 = null;
            if (arg0) {
              let type;
              if (dependencyMap != null) {
                type = dependencyMap.type;
              }
              if (type == null) {
                type = v65535;
              }
              const obj = {
                connectionType: type,
                applicationId,
                connectionMetadataField: metadataField,
                operator,
                value: RoleConnectionRequirementUtils.storedValueFor(tmp, operator),
              };
              tmp3 = obj;
            }
            num = undefined;
            if (existingPendingConfiguration != null) {
              num = existingPendingConfiguration.index;
            }
            if (num == null) {
              num = -1;
            }
            _slicedToArray(tmp3, num);
          },
        };
        return onInputValueChange(metadataField(6698).TableSwitchRow, obj8, metadataField);
      }
      const str = metadataField(17784).displayedValueFor(value, realizedOperatorForResult);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(23);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.BLUESKY);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        const value4 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value4;
        let tmp8 = value4;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== configMetadataMap) {
            const value5 = configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT);
            cResult[7] = configMetadataMap;
            cResult[8] = value5;
            let tmp13 = value5;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === locked) {
            if (cResult[10] === onConfigurationChange) {
              if (cResult[11] === tmp13) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] !== configMetadataMap) {
                const value6 = configMetadataMap.get(React5.BLUESKY_STATUSES_COUNT);
                cResult[13] = configMetadataMap;
                cResult[14] = value6;
                let tmp21 = value6;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === locked) {
                if (cResult[16] === onConfigurationChange) {
                  if (cResult[17] === tmp21) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] === tmp11) {
                    if (cResult[20] === tmp16) {
                      if (cResult[21] === tmp24) {
                        let tmp29 = cResult[22];
                      }
                      return tmp29;
                    }
                  }
                  const obj3 = { children: null };
                  const items = [tmp11, tmp16, tmp24];
                  obj3.children = items;
                  const tmp32 = __initData2(state, obj3);
                  cResult[19] = tmp11;
                  cResult[20] = tmp16;
                  cResult[21] = tmp24;
                  cResult[22] = tmp32;
                  tmp29 = tmp32;
                }
              }
              const obj4 = {
                fieldTextHook: util.t["5I4mVS"],
                metadataField: React5.BLUESKY_STATUSES_COUNT,
                existingPendingConfiguration: tmp21,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp28 = onChangeText(closure_18, obj4);
              cResult[15] = locked;
              cResult[16] = onConfigurationChange;
              cResult[17] = tmp21;
              cResult[18] = tmp28;
              tmp24 = tmp28;
            }
          }
          const obj5 = {
            fieldTextHook: util.t["/w/EYk"],
            metadataField: React5.BLUESKY_FOLLOWERS_COUNT,
            existingPendingConfiguration: tmp13,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp20 = onChangeText(closure_18, obj5);
          cResult[9] = locked;
          cResult[10] = onConfigurationChange;
          cResult[11] = tmp13;
          cResult[12] = tmp20;
          tmp16 = tmp20;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj6 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.BLUESKY);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
        ,
      ];
      const obj3 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.BLUESKY_FOLLOWERS_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj4 = {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.BLUESKY_FOLLOWERS_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_FOLLOWERS_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[2] = onChangeText(closure_18, {
        fieldTextHook: util.t["5I4mVS"],
        metadataField: React5.BLUESKY_STATUSES_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.BLUESKY_STATUSES_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(30);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.STEAM);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        const value5 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value5;
        let tmp8 = value5;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== configMetadataMap) {
            const value6 = configMetadataMap.get(React5.STEAM_GAME_COUNT);
            cResult[7] = configMetadataMap;
            cResult[8] = value6;
            let tmp13 = value6;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === locked) {
            if (cResult[10] === onConfigurationChange) {
              if (cResult[11] === tmp13) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] !== configMetadataMap) {
                const value7 = configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2);
                cResult[13] = configMetadataMap;
                cResult[14] = value7;
                let tmp21 = value7;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === locked) {
                if (cResult[16] === onConfigurationChange) {
                  if (cResult[17] === tmp21) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] !== configMetadataMap) {
                    const value8 = configMetadataMap.get(React5.STEAM_ITEM_COUNT_TF2);
                    cResult[19] = configMetadataMap;
                    cResult[20] = value8;
                    let tmp29 = value8;
                  } else {
                    tmp29 = cResult[20];
                  }
                  if (cResult[21] === locked) {
                    if (cResult[22] === onConfigurationChange) {
                      if (cResult[23] === tmp29) {
                        let tmp32 = cResult[24];
                      }
                      if (cResult[25] === tmp11) {
                        if (cResult[26] === tmp16) {
                          if (cResult[27] === tmp24) {
                            if (cResult[28] === tmp32) {
                              let tmp37 = cResult[29];
                            }
                            return tmp37;
                          }
                        }
                      }
                      const obj3 = { children: null };
                      const items = [tmp11, tmp16, tmp24, tmp32];
                      obj3.children = items;
                      const tmp40 = __initData2(state, obj3);
                      cResult[25] = tmp11;
                      cResult[26] = tmp16;
                      cResult[27] = tmp24;
                      cResult[28] = tmp32;
                      cResult[29] = tmp40;
                      tmp37 = tmp40;
                    }
                  }
                  const obj4 = {
                    fieldTextHook: util.t["MCHnK+"],
                    metadataField: React5.STEAM_ITEM_COUNT_TF2,
                    existingPendingConfiguration: tmp29,
                    platform: first,
                    onConfigurationChange,
                    locked,
                  };
                  const tmp36 = onChangeText(closure_18, obj4);
                  cResult[21] = locked;
                  cResult[22] = onConfigurationChange;
                  cResult[23] = tmp29;
                  cResult[24] = tmp36;
                  tmp32 = tmp36;
                }
              }
              const obj5 = {
                fieldTextHook: util.t["ZCNdD/"],
                metadataField: React5.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: tmp21,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp28 = onChangeText(closure_18, obj5);
              cResult[15] = locked;
              cResult[16] = onConfigurationChange;
              cResult[17] = tmp21;
              cResult[18] = tmp28;
              tmp24 = tmp28;
            }
          }
          const obj6 = {
            fieldTextHook: util.t.zVJxqj,
            metadataField: React5.STEAM_GAME_COUNT,
            existingPendingConfiguration: tmp13,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp20 = onChangeText(closure_18, obj6);
          cResult[9] = locked;
          cResult[10] = onConfigurationChange;
          cResult[11] = tmp13;
          cResult[12] = tmp20;
          tmp16 = tmp20;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj7 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.STEAM);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
        ,
        ,
      ];
      const obj3 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t.zVJxqj,
        metadataField: React5.STEAM_GAME_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj4 = {
        fieldTextHook: util.t.zVJxqj,
        metadataField: React5.STEAM_GAME_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.STEAM_GAME_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[2] = onChangeText(closure_18, {
        fieldTextHook: util.t["ZCNdD/"],
        metadataField: React5.STEAM_ITEM_COUNT_DOTA2,
        existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj5 = {
        fieldTextHook: util.t["ZCNdD/"],
        metadataField: React5.STEAM_ITEM_COUNT_DOTA2,
        existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_DOTA2),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[3] = onChangeText(closure_18, {
        fieldTextHook: util.t["MCHnK+"],
        metadataField: React5.STEAM_ITEM_COUNT_TF2,
        existingPendingConfiguration: configMetadataMap.get(React5.STEAM_ITEM_COUNT_TF2),
        platform: value,
        onConfigurationChange,
        locked,
      });
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(31);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.TWITTER);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        const value5 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value5;
        let tmp8 = value5;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== configMetadataMap) {
            const value6 = configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT);
            cResult[7] = configMetadataMap;
            cResult[8] = value6;
            let tmp13 = value6;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === locked) {
            if (cResult[10] === onConfigurationChange) {
              if (cResult[11] === tmp13) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] !== configMetadataMap) {
                const value7 = configMetadataMap.get(React5.TWITTER_STATUSES_COUNT);
                cResult[13] = configMetadataMap;
                cResult[14] = value7;
                let tmp21 = value7;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === locked) {
                if (cResult[16] === onConfigurationChange) {
                  if (cResult[17] === tmp21) {
                    let tmp24 = cResult[18];
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = util.intl;
                    const stringResult = intl.string(util.t.E2iT8K);
                    cResult[19] = stringResult;
                    let tmp29 = stringResult;
                  } else {
                    tmp29 = cResult[19];
                  }
                  if (cResult[20] !== configMetadataMap) {
                    const value8 = configMetadataMap.get(React5.TWITTER_VERIFIED);
                    cResult[20] = configMetadataMap;
                    cResult[21] = value8;
                    let tmp31 = value8;
                  } else {
                    tmp31 = cResult[21];
                  }
                  if (cResult[22] === locked) {
                    if (cResult[23] === onConfigurationChange) {
                      if (cResult[24] === tmp31) {
                        let tmp34 = cResult[25];
                      }
                      if (cResult[26] === tmp34) {
                        if (cResult[27] === tmp11) {
                          if (cResult[28] === tmp16) {
                            if (cResult[29] === tmp24) {
                              let tmp39 = cResult[30];
                            }
                            return tmp39;
                          }
                        }
                      }
                      const obj3 = { children: null };
                      const items = [tmp11, tmp16, tmp24, tmp34];
                      obj3.children = items;
                      const tmp42 = __initData2(state, obj3);
                      cResult[26] = tmp34;
                      cResult[27] = tmp11;
                      cResult[28] = tmp16;
                      cResult[29] = tmp24;
                      cResult[30] = tmp42;
                      tmp39 = tmp42;
                    }
                  }
                  const obj4 = {
                    fieldText: tmp29,
                    metadataField: React5.TWITTER_VERIFIED,
                    existingPendingConfiguration: tmp31,
                    platform: first,
                    onConfigurationChange,
                    locked,
                  };
                  const tmp38 = onChangeText(closure_17, obj4);
                  cResult[22] = locked;
                  cResult[23] = onConfigurationChange;
                  cResult[24] = tmp31;
                  cResult[25] = tmp38;
                  tmp34 = tmp38;
                }
              }
              const obj5 = {
                fieldTextHook: util.t["+NFH7k"],
                metadataField: React5.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: tmp21,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp28 = onChangeText(closure_18, obj5);
              cResult[15] = locked;
              cResult[16] = onConfigurationChange;
              cResult[17] = tmp21;
              cResult[18] = tmp28;
              tmp24 = tmp28;
            }
          }
          const obj6 = {
            fieldTextHook: util.t["/w/EYk"],
            metadataField: React5.TWITTER_FOLLOWERS_COUNT,
            existingPendingConfiguration: tmp13,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp20 = onChangeText(closure_18, obj6);
          cResult[9] = locked;
          cResult[10] = onConfigurationChange;
          cResult[11] = tmp13;
          cResult[12] = tmp20;
          tmp16 = tmp20;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj7 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.TWITTER);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
        ,
        ,
      ];
      const obj3 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.TWITTER_FOLLOWERS_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj4 = {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.TWITTER_FOLLOWERS_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_FOLLOWERS_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[2] = onChangeText(closure_18, {
        fieldTextHook: util.t["+NFH7k"],
        metadataField: React5.TWITTER_STATUSES_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TWITTER_STATUSES_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj6 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl = util.intl;
      obj6.fieldText = intl.string(util.t.E2iT8K);
      obj6.metadataField = React5.TWITTER_VERIFIED;
      obj6.existingPendingConfiguration = configMetadataMap.get(React5.TWITTER_VERIFIED);
      obj6.platform = value;
      obj6.onConfigurationChange = onConfigurationChange;
      obj6.locked = locked;
      items[3] = onChangeText(closure_17, obj6);
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(32);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.REDDIT);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        const value5 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value5;
        let tmp8 = value5;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== configMetadataMap) {
            const value6 = configMetadataMap.get(React5.REDDIT_TOTAL_KARMA);
            cResult[7] = configMetadataMap;
            cResult[8] = value6;
            let tmp13 = value6;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === locked) {
            if (cResult[10] === onConfigurationChange) {
              if (cResult[11] === tmp13) {
                let tmp16 = cResult[12];
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t["0cKdka"]);
                cResult[13] = stringResult;
                let tmp21 = stringResult;
              } else {
                tmp21 = cResult[13];
              }
              if (cResult[14] !== configMetadataMap) {
                const value7 = configMetadataMap.get(React5.REDDIT_MOD);
                cResult[14] = configMetadataMap;
                cResult[15] = value7;
                let tmp23 = value7;
              } else {
                tmp23 = cResult[15];
              }
              if (cResult[16] === locked) {
                if (cResult[17] === onConfigurationChange) {
                  if (cResult[18] === tmp23) {
                    let tmp26 = cResult[19];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = util.intl;
                    const stringResult1 = intl2.string(util.t.kCAN58);
                    cResult[20] = stringResult1;
                    let tmp31 = stringResult1;
                  } else {
                    tmp31 = cResult[20];
                  }
                  if (cResult[21] !== configMetadataMap) {
                    const value8 = configMetadataMap.get(React5.REDDIT_GOLD);
                    cResult[21] = configMetadataMap;
                    cResult[22] = value8;
                    let tmp33 = value8;
                  } else {
                    tmp33 = cResult[22];
                  }
                  if (cResult[23] === locked) {
                    if (cResult[24] === onConfigurationChange) {
                      if (cResult[25] === tmp33) {
                        let tmp36 = cResult[26];
                      }
                      if (cResult[27] === tmp36) {
                        if (cResult[28] === tmp11) {
                          if (cResult[29] === tmp16) {
                            if (cResult[30] === tmp26) {
                              let tmp41 = cResult[31];
                            }
                            return tmp41;
                          }
                        }
                      }
                      const obj3 = { children: null };
                      const items = [tmp11, tmp16, tmp26, tmp36];
                      obj3.children = items;
                      const tmp44 = __initData2(state, obj3);
                      cResult[27] = tmp36;
                      cResult[28] = tmp11;
                      cResult[29] = tmp16;
                      cResult[30] = tmp26;
                      cResult[31] = tmp44;
                      tmp41 = tmp44;
                    }
                  }
                  const obj4 = {
                    fieldText: tmp31,
                    metadataField: React5.REDDIT_GOLD,
                    existingPendingConfiguration: tmp33,
                    platform: first,
                    onConfigurationChange,
                    locked,
                  };
                  const tmp40 = onChangeText(closure_17, obj4);
                  cResult[23] = locked;
                  cResult[24] = onConfigurationChange;
                  cResult[25] = tmp33;
                  cResult[26] = tmp40;
                  tmp36 = tmp40;
                }
              }
              const obj5 = {
                fieldText: tmp21,
                metadataField: React5.REDDIT_MOD,
                existingPendingConfiguration: tmp23,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp30 = onChangeText(closure_17, obj5);
              cResult[16] = locked;
              cResult[17] = onConfigurationChange;
              cResult[18] = tmp23;
              cResult[19] = tmp30;
              tmp26 = tmp30;
            }
          }
          const obj6 = {
            fieldTextHook: util.t.TLgZhv,
            metadataField: React5.REDDIT_TOTAL_KARMA,
            existingPendingConfiguration: tmp13,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp20 = onChangeText(closure_18, obj6);
          cResult[9] = locked;
          cResult[10] = onConfigurationChange;
          cResult[11] = tmp13;
          cResult[12] = tmp20;
          tmp16 = tmp20;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj7 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.REDDIT);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
        ,
        ,
      ];
      const obj3 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t.TLgZhv,
        metadataField: React5.REDDIT_TOTAL_KARMA,
        existingPendingConfiguration: configMetadataMap.get(React5.REDDIT_TOTAL_KARMA),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj5 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl = util.intl;
      obj5.fieldText = intl.string(util.t["0cKdka"]);
      obj5.metadataField = React5.REDDIT_MOD;
      obj5.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_MOD);
      obj5.platform = value;
      obj5.onConfigurationChange = onConfigurationChange;
      obj5.locked = locked;
      items[2] = onChangeText(closure_17, obj5);
      const obj6 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl2 = util.intl;
      obj6.fieldText = intl2.string(util.t.kCAN58);
      obj6.metadataField = React5.REDDIT_GOLD;
      obj6.existingPendingConfiguration = configMetadataMap.get(React5.REDDIT_GOLD);
      obj6.platform = value;
      obj6.onConfigurationChange = onConfigurationChange;
      obj6.locked = locked;
      items[3] = onChangeText(closure_17, obj6);
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(17);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.PAYPAL);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        value3 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value3;
        let tmp8 = value3;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["0JyE8I"]);
            cResult[7] = stringResult;
            let tmp13 = stringResult;
          } else {
            tmp13 = cResult[7];
          }
          if (cResult[8] !== configMetadataMap) {
            const value4 = configMetadataMap.get(React5.PAYPAL_VERIFIED);
            cResult[8] = configMetadataMap;
            cResult[9] = value4;
            let tmp15 = value4;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === locked) {
            if (cResult[11] === onConfigurationChange) {
              if (cResult[12] === tmp15) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] === tmp11) {
                if (cResult[15] === tmp18) {
                  let tmp23 = cResult[16];
                }
                return tmp23;
              }
              const obj3 = { children: null };
              const items = [tmp11, tmp18];
              obj3.children = items;
              const tmp26 = __initData2(state, obj3);
              cResult[14] = tmp11;
              cResult[15] = tmp18;
              cResult[16] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj4 = {
            fieldText: tmp13,
            metadataField: React5.PAYPAL_VERIFIED,
            existingPendingConfiguration: tmp15,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp22 = onChangeText(closure_17, obj4);
          cResult[10] = locked;
          cResult[11] = onConfigurationChange;
          cResult[12] = tmp15;
          cResult[13] = tmp22;
          tmp18 = tmp22;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj5 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.PAYPAL);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
      ];
      const obj4 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl = util.intl;
      obj4.fieldText = intl.string(util.t["0JyE8I"]);
      obj4.metadataField = React5.PAYPAL_VERIFIED;
      obj4.existingPendingConfiguration = configMetadataMap.get(React5.PAYPAL_VERIFIED);
      obj4.platform = value;
      obj4.onConfigurationChange = onConfigurationChange;
      obj4.locked = locked;
      items[1] = onChangeText(closure_17, obj4);
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(38);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.EBAY);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== configMetadataMap) {
        const value6 = configMetadataMap.get(React5.CREATED_AT);
        cResult[1] = configMetadataMap;
        cResult[2] = value6;
        let tmp8 = value6;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === locked) {
        if (cResult[4] === onConfigurationChange) {
          if (cResult[5] === tmp8) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== configMetadataMap) {
            const value7 = configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE);
            cResult[7] = configMetadataMap;
            cResult[8] = value7;
            let tmp13 = value7;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === locked) {
            if (cResult[10] === onConfigurationChange) {
              if (cResult[11] === tmp13) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] !== configMetadataMap) {
                const value8 = configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT);
                cResult[13] = configMetadataMap;
                cResult[14] = value8;
                let tmp21 = value8;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === locked) {
                if (cResult[16] === onConfigurationChange) {
                  if (cResult[17] === tmp21) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] !== configMetadataMap) {
                    const value9 = configMetadataMap.get(React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT);
                    cResult[19] = configMetadataMap;
                    cResult[20] = value9;
                    let tmp29 = value9;
                  } else {
                    tmp29 = cResult[20];
                  }
                  if (cResult[21] === locked) {
                    if (cResult[22] === onConfigurationChange) {
                      if (cResult[23] === tmp29) {
                        let tmp32 = cResult[24];
                      }
                      const _Symbol = Symbol;
                      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = util.intl;
                        const stringResult = intl.string(util.t["39wASN"]);
                        cResult[25] = stringResult;
                        let tmp38 = stringResult;
                      } else {
                        tmp38 = cResult[25];
                      }
                      if (cResult[26] !== configMetadataMap) {
                        const value10 = configMetadataMap.get(React5.EBAY_TOP_RATED_SELLER);
                        cResult[26] = configMetadataMap;
                        cResult[27] = value10;
                        let tmp40 = value10;
                      } else {
                        tmp40 = cResult[27];
                      }
                      if (cResult[28] === locked) {
                        if (cResult[29] === onConfigurationChange) {
                          if (cResult[30] === tmp40) {
                            let tmp43 = cResult[31];
                          }
                          if (cResult[32] === tmp43) {
                            if (cResult[33] === tmp11) {
                              if (cResult[34] === tmp16) {
                                if (cResult[35] === tmp24) {
                                  if (cResult[36] === tmp32) {
                                    let tmp48 = cResult[37];
                                  }
                                  return tmp48;
                                }
                              }
                            }
                          }
                          const obj3 = { children: null };
                          const items = [tmp11, tmp16, tmp24, tmp32, tmp43];
                          obj3.children = items;
                          const tmp51 = __initData2(state, obj3);
                          cResult[32] = tmp43;
                          cResult[33] = tmp11;
                          cResult[34] = tmp16;
                          cResult[35] = tmp24;
                          cResult[36] = tmp32;
                          cResult[37] = tmp51;
                          tmp48 = tmp51;
                        }
                      }
                      const obj4 = {
                        fieldText: tmp38,
                        metadataField: React5.EBAY_TOP_RATED_SELLER,
                        existingPendingConfiguration: tmp40,
                        platform: first,
                        onConfigurationChange,
                        locked,
                      };
                      const tmp47 = onChangeText(closure_17, obj4);
                      cResult[28] = locked;
                      cResult[29] = onConfigurationChange;
                      cResult[30] = tmp40;
                      cResult[31] = tmp47;
                      tmp43 = tmp47;
                    }
                  }
                  const obj5 = {
                    fieldTextHook: util.t.yYbR2r,
                    metadataField: React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                    existingPendingConfiguration: tmp29,
                    platform: first,
                    onConfigurationChange,
                    locked,
                    operator: constants.LESS_THAN,
                  };
                  const tmp37 = onChangeText(closure_18, obj5);
                  cResult[21] = locked;
                  cResult[22] = onConfigurationChange;
                  cResult[23] = tmp29;
                  cResult[24] = tmp37;
                  tmp32 = tmp37;
                }
              }
              const obj6 = {
                fieldTextHook: util.t["v5a2+Q"],
                metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: tmp21,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp28 = onChangeText(closure_18, obj6);
              cResult[15] = locked;
              cResult[16] = onConfigurationChange;
              cResult[17] = tmp21;
              cResult[18] = tmp28;
              tmp24 = tmp28;
            }
          }
          const obj7 = {
            fieldTextHook: util.t.oTFOe5,
            metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            existingPendingConfiguration: tmp13,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp20 = onChangeText(closure_18, obj7);
          cResult[9] = locked;
          cResult[10] = onConfigurationChange;
          cResult[11] = tmp13;
          cResult[12] = tmp20;
          tmp16 = tmp20;
        }
      }
      const tmp12 = onChangeText(closure_18, {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[3] = locked;
      cResult[4] = onConfigurationChange;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const obj8 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: tmp8,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.EBAY);
      const obj2 = { children: null };
      const items = [
        onChangeText(closure_18, {
          fieldTextHook: util.t["REyUZ/"],
          metadataField: React5.CREATED_AT,
          existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
          platform: value,
          onConfigurationChange,
          locked,
        }),
        ,
        ,
        ,
      ];
      const obj3 = {
        fieldTextHook: util.t["REyUZ/"],
        metadataField: React5.CREATED_AT,
        existingPendingConfiguration: configMetadataMap.get(React5.CREATED_AT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t.oTFOe5,
        metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
        existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj4 = {
        fieldTextHook: util.t.oTFOe5,
        metadataField: React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
        existingPendingConfiguration: configMetadataMap.get(React5.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[2] = onChangeText(closure_18, {
        fieldTextHook: util.t["v5a2+Q"],
        metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj5 = {
        fieldTextHook: util.t["v5a2+Q"],
        metadataField: React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[3] = onChangeText(closure_18, {
        fieldTextHook: util.t.yYbR2r,
        metadataField: React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
        operator: constants.LESS_THAN,
      });
      const obj7 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl = util.intl;
      obj7.fieldText = intl.string(util.t["39wASN"]);
      obj7.metadataField = React5.EBAY_TOP_RATED_SELLER;
      obj7.existingPendingConfiguration = configMetadataMap.get(React5.EBAY_TOP_RATED_SELLER);
      obj7.platform = value;
      obj7.onConfigurationChange = onConfigurationChange;
      obj7.locked = locked;
      items[4] = onChangeText(closure_17, obj7);
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(31);
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        value = PlatformsDefault.get(PlatformTypes.TIKTOK);
        cResult[0] = value;
        let first = value;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.E2iT8K);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== configMetadataMap) {
        const value5 = configMetadataMap.get(React5.TIKTOK_VERIFIED);
        cResult[2] = configMetadataMap;
        cResult[3] = value5;
        let tmp10 = value5;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === locked) {
        if (cResult[5] === onConfigurationChange) {
          if (cResult[6] === tmp10) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] !== configMetadataMap) {
            const value6 = configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT);
            cResult[8] = configMetadataMap;
            cResult[9] = value6;
            let tmp15 = value6;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === locked) {
            if (cResult[11] === onConfigurationChange) {
              if (cResult[12] === tmp15) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] !== configMetadataMap) {
                const value7 = configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT);
                cResult[14] = configMetadataMap;
                cResult[15] = value7;
                let tmp23 = value7;
              } else {
                tmp23 = cResult[15];
              }
              if (cResult[16] === locked) {
                if (cResult[17] === onConfigurationChange) {
                  if (cResult[18] === tmp23) {
                    let tmp26 = cResult[19];
                  }
                  if (cResult[20] !== configMetadataMap) {
                    const value8 = configMetadataMap.get(React5.TIKTOK_LIKES_COUNT);
                    cResult[20] = configMetadataMap;
                    cResult[21] = value8;
                    let tmp31 = value8;
                  } else {
                    tmp31 = cResult[21];
                  }
                  if (cResult[22] === locked) {
                    if (cResult[23] === onConfigurationChange) {
                      if (cResult[24] === tmp31) {
                        let tmp34 = cResult[25];
                      }
                      if (cResult[26] === tmp34) {
                        if (cResult[27] === tmp13) {
                          if (cResult[28] === tmp18) {
                            if (cResult[29] === tmp26) {
                              let tmp39 = cResult[30];
                            }
                            return tmp39;
                          }
                        }
                      }
                      const obj3 = { children: null };
                      const items = [tmp13, tmp18, tmp26, tmp34];
                      obj3.children = items;
                      const tmp42 = __initData2(state, obj3);
                      cResult[26] = tmp34;
                      cResult[27] = tmp13;
                      cResult[28] = tmp18;
                      cResult[29] = tmp26;
                      cResult[30] = tmp42;
                      tmp39 = tmp42;
                    }
                  }
                  const obj4 = {
                    fieldTextHook: util.t.tEFCYA,
                    metadataField: React5.TIKTOK_LIKES_COUNT,
                    existingPendingConfiguration: tmp31,
                    platform: first,
                    onConfigurationChange,
                    locked,
                  };
                  const tmp38 = onChangeText(closure_18, obj4);
                  cResult[22] = locked;
                  cResult[23] = onConfigurationChange;
                  cResult[24] = tmp31;
                  cResult[25] = tmp38;
                  tmp34 = tmp38;
                }
              }
              const obj5 = {
                fieldTextHook: util.t.JHEsYw,
                metadataField: React5.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: tmp23,
                platform: first,
                onConfigurationChange,
                locked,
              };
              const tmp30 = onChangeText(closure_18, obj5);
              cResult[16] = locked;
              cResult[17] = onConfigurationChange;
              cResult[18] = tmp23;
              cResult[19] = tmp30;
              tmp26 = tmp30;
            }
          }
          const obj6 = {
            fieldTextHook: util.t["/w/EYk"],
            metadataField: React5.TIKTOK_FOLLOWER_COUNT,
            existingPendingConfiguration: tmp15,
            platform: first,
            onConfigurationChange,
            locked,
          };
          const tmp22 = onChangeText(closure_18, obj6);
          cResult[10] = locked;
          cResult[11] = onConfigurationChange;
          cResult[12] = tmp15;
          cResult[13] = tmp22;
          tmp18 = tmp22;
        }
      }
      const tmp14 = onChangeText(closure_17, {
        fieldText: tmp8,
        metadataField: React5.TIKTOK_VERIFIED,
        existingPendingConfiguration: tmp10,
        platform: first,
        onConfigurationChange,
        locked,
      });
      cResult[4] = locked;
      cResult[5] = onConfigurationChange;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      const obj7 = {
        fieldText: tmp8,
        metadataField: React5.TIKTOK_VERIFIED,
        existingPendingConfiguration: tmp10,
        platform: first,
        onConfigurationChange,
        locked,
      };
    }
  : (arg0) => {
      ({ configMetadataMap, onConfigurationChange, locked } = arg0);
      value = PlatformsDefault.get(PlatformTypes.TIKTOK);
      const obj2 = { children: null };
      const obj3 = {
        fieldText: null,
        metadataField: null,
        existingPendingConfiguration: null,
        platform: null,
        onConfigurationChange: null,
        locked: null,
      };
      const intl = util.intl;
      obj3.fieldText = intl.string(util.t.E2iT8K);
      obj3.metadataField = React5.TIKTOK_VERIFIED;
      obj3.existingPendingConfiguration = configMetadataMap.get(React5.TIKTOK_VERIFIED);
      obj3.platform = value;
      obj3.onConfigurationChange = onConfigurationChange;
      obj3.locked = locked;
      const items = [onChangeText(closure_17, obj3), , ,];
      items[1] = onChangeText(closure_18, {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.TIKTOK_FOLLOWER_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj4 = {
        fieldTextHook: util.t["/w/EYk"],
        metadataField: React5.TIKTOK_FOLLOWER_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWER_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[2] = onChangeText(closure_18, {
        fieldTextHook: util.t.JHEsYw,
        metadataField: React5.TIKTOK_FOLLOWING_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      const obj5 = {
        fieldTextHook: util.t.JHEsYw,
        metadataField: React5.TIKTOK_FOLLOWING_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_FOLLOWING_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      };
      items[3] = onChangeText(closure_18, {
        fieldTextHook: util.t.tEFCYA,
        metadataField: React5.TIKTOK_LIKES_COUNT,
        existingPendingConfiguration: configMetadataMap.get(React5.TIKTOK_LIKES_COUNT),
        platform: value,
        onConfigurationChange,
        locked,
      });
      obj2.children = items;
      return __initData2(state, obj2);
    };
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_MUTED };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (configurationItems) => {
      const cResult = c.c(48);
      configurationItems = configurationItems.configurationItems;
      const onConfigurationChange = configurationItems.onConfigurationChange;
      ({ locked, integrations } = configurationItems);
      if (configurationItems.length < 1) {
        return null;
      } else {
        const applicationId = configurationItems[0].configuration.applicationId;
        if (cResult[0] === applicationId) {
          if (cResult[1] === integrations) {
            if (cResult[2] === tmp16) {
              let tmp4 = cResult[3];
            }
            if (null != applicationId) {
              if (!tmp16) {
                if (null == tmp4) {
                  return null;
                }
              }
            }
            if (tmp16) {
              if (cResult[4] === configurationItems[0].index) {
                if (cResult[5] === onConfigurationChange) {
                  let tmp9 = cResult[6];
                }
                class I {
                  constructor() {
                    return onConfigurationChange(null, configurationItems[0].index);
                  }
                }
                const obj2 = { hasIcons: true, children: null };
                const obj3 = { platform: null, integration: "a", applicationId, onRemove: tmp9, locked };
                obj2.children = onChangeText(closure_16, obj3);
                const tmp13 = onChangeText(TableRowGroup.TableRowGroup, obj2);
                cResult[7] = applicationId;
                cResult[8] = locked;
                cResult[9] = tmp9;
                cResult[10] = tmp13;
              }
              class I {
                constructor() {
                  return onConfigurationChange(null, configurationItems[0].index);
                }
              }
              cResult[4] = configurationItems[0].index;
              cResult[5] = onConfigurationChange;
              cResult[6] = I;
              tmp9 = I;
            } else {
              class I {
                constructor() {
                  return onConfigurationChange(null, configurationItems[0].index);
                }
              }
            }
          }
        }
        if (null != applicationId) {
          class I {
            constructor() {
              return onConfigurationChange(null, configurationItems[0].index);
            }
          }
        }
        cResult[0] = applicationId;
        cResult[1] = integrations;
        cResult[2] = configurationItems[0].configuration.connectionType === closure_1_11;
        cResult[3] = undefined;
        tmp4 = tmp6;
      }
    }
  : (configurationItems) => {
      configurationItems = configurationItems.configurationItems;
      const onConfigurationChange = configurationItems.onConfigurationChange;
      ({ locked, integrations } = configurationItems);
      let applicationId;
      let index;
      let map;
      if (configurationItems.length < 1) {
        return null;
      } else {
        applicationId = configurationItems[0].configuration.applicationId;
        if (null != applicationId) {
          if (!tmp68) {
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
          }
        }
        if (null != applicationId) {
          if (!tmp68) {
            if (null == tmp) {
              return null;
            }
          }
        }
        if (configurationItems[0].configuration.connectionType === closure_1_11) {
          const obj2 = { hasIcons: true, children: null };
          const obj3 = {
            platform: null,
            integration: "a",
            applicationId,
            onRemove() {
              return onConfigurationChange(null, configurationItems[0].index);
            },
            locked,
          };
          obj2.children = onChangeText(closure_16, obj3);
          return onChangeText(TableRowGroup.TableRowGroup, obj2);
        } else {
          try {
            value = PlatformsDefault.get(configurationItems[0].configuration.connectionType);
            const _Map = Map;
            map = new Map();
            const item = configurationItems.forEach((configuration) => {
              if (null != configuration.configuration.connectionMetadataField) {
                const result = map.set(configuration.configuration.connectionMetadataField, configuration);
              } else {
                if (tmp) {
                  closure_3 = configuration;
                }
                tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
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
              let tmp21 = onChangeText(closure_20, obj5);
              let tmp22 = onChangeText;
            } else if (PlatformTypes.TWITTER === type) {
              const obj6 = {};
              const merged1 = Object.assign(obj4);
              tmp21 = onChangeText(closure_21, obj6);
              tmp22 = onChangeText;
            } else if (PlatformTypes.REDDIT === type) {
              const obj7 = {};
              const merged2 = Object.assign(obj4);
              tmp21 = onChangeText(closure_22, obj7);
              tmp22 = onChangeText;
            } else if (PlatformTypes.BLUESKY === type) {
              const obj8 = {};
              const merged3 = Object.assign(obj4);
              tmp21 = onChangeText(closure_19, obj8);
              tmp22 = onChangeText;
            } else if (PlatformTypes.PAYPAL === type) {
              const obj9 = {};
              const merged4 = Object.assign(obj4);
              tmp21 = onChangeText(closure_23, obj9);
              tmp22 = onChangeText;
            } else if (PlatformTypes.EBAY === type) {
              const obj10 = {};
              const merged5 = Object.assign(obj4);
              tmp21 = onChangeText(closure_24, obj10);
              tmp22 = onChangeText;
            } else if (PlatformTypes.TIKTOK === type) {
              const obj11 = {};
              const merged6 = Object.assign(obj4);
              tmp21 = onChangeText(closure_25, obj11);
              tmp22 = onChangeText;
            } else {
              const obj12 = {};
              const merged7 = Object.assign(obj4);
              obj12.integration = tmp;
              tmp21 = onChangeText(ApplicationMetadataRules, obj12);
              tmp22 = onChangeText;
            }
            const obj13 = { hasIcons: true, children: null };
            const obj14 = {
              platform: value,
              integration: tmp,
              onRemove() {
                return onConfigurationChange(null, index.index);
              },
              locked,
            };
            const items = [tmp22(closure_16, obj14), tmp21];
            obj13.children = items;
            return __initData2(TableRowGroup.TableRowGroup, obj13);
          } catch (err) {}
        }
      }
    };
