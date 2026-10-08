// === Module 15840: FinalizeTraitTabs ===

// Module 15840 (FinalizeTraitTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import CheckpointPressable from "CheckpointPressable" /* 15842 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 15843 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const CheckpointPressableDefault = CheckpointPressable;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CheckpointConstants = fn(5433);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [fn(15811).CheckpointCustomizationOption.BASE, fn(15811).CheckpointCustomizationOption.OUTFIT_COLOR];
let closure_10 = items.length + 1;
const createStyles = fn(5090);
let obj2 = { scrollContent: { paddingHorizontal: nativeDefault.space.PX_16 }, row: null, tabContainerActive: null, tab: null, tabActive: null, tabDisabled: null, tabLabel: null, tabLabelActive: null, tabLabelDisabled: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tabContainerActive = { paddingRight: 0, paddingBottom: 0 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tab = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
let obj5 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj2.tabActive = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
const obj6 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
obj2.tabDisabled = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
const obj7 = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj2.tabLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelActive = { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" };
const obj8 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitTab(arg0) {
  const cResult = c.c(28);
  ({ label, position, isActive, disabled, accessibilityHint, onPress, trailing } = arg0);
  let tabLabelDisabled = undefined !== disabled && disabled;
  const tmp4 = closure_11();
  if (cResult[0] !== position) {
    let formatToPlainStringResult;
    if (tmpResult.isAndroid()) {
      const intl = util.intl;
      const obj2 = { position, tabCount };
      formatToPlainStringResult = intl.formatToPlainString(util.t["4EsQA1"], obj2);
    }
    cResult[0] = position;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
    tmpResult = PlatformUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === accessibilityHint) {
    if (cResult[3] === tmp5) {
      let arr = cResult[4];
    }
    if (arr.length > 0) {
      const joined = arr.join(", ");
    }
    let tabContainerActive = isActive;
    if (isActive) {
      tabContainerActive = tmp4.tabContainerActive;
    }
    let tabActive = isActive;
    if (isActive) {
      tabActive = tmp4.tabActive;
    }
    let tabDisabled = tabLabelDisabled;
    if (tabLabelDisabled) {
      tabDisabled = tmp4.tabDisabled;
    }
    if (cResult[5] === tmp4.tab) {
      if (cResult[6] === tabActive) {
        if (cResult[7] === tabDisabled) {
          let tmp10 = cResult[8];
        }
        let tmp11 = isActive;
        if (!isActive) {
          tmp11 = tabLabelDisabled;
        }
        if (cResult[9] === tabLabelDisabled) {
          if (cResult[10] === isActive) {
            let tmp12 = cResult[11];
          }
          if (isActive) {
            isActive = tmp4.tabLabelActive;
          }
          if (tabLabelDisabled) {
            tabLabelDisabled = tmp4.tabLabelDisabled;
          }
          if (cResult[12] === tmp4.tabLabel) {
            if (cResult[13] === isActive) {
              if (cResult[14] === tabLabelDisabled) {
                let tmp13 = cResult[15];
              }
              if (cResult[16] === label) {
                if (cResult[17] === tmp13) {
                  let tmp14 = cResult[18];
                }
                if (cResult[19] === joined) {
                  if (cResult[20] === onPress) {
                    if (cResult[21] === tmp14) {
                      if (cResult[22] === tabContainerActive) {
                        if (cResult[23] === tmp10) {
                          if (cResult[24] === tmp11) {
                            if (cResult[25] === tmp12) {
                              if (cResult[26] === trailing) {
                                let tmp17 = cResult[27];
                              }
                              return tmp17;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj3 = { size: "sm", containerStyle: tabContainerActive, style: tmp10, disabled: tmp11, onPress, accessibilityRole: "tab", accessibilityHint: joined, accessibilityState: tmp12, shadowColor, children: null };
                items = [tmp14, trailing];
                obj3.children = items;
                const tmp21 = closure_1_8(CheckpointPressableDefault, obj3);
                cResult[19] = joined;
                cResult[20] = onPress;
                cResult[21] = tmp14;
                cResult[22] = tabContainerActive;
                cResult[23] = tmp10;
                cResult[24] = tmp11;
                cResult[25] = tmp12;
                cResult[26] = trailing;
                cResult[27] = tmp21;
                tmp17 = tmp21;
              }
              const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: tmp13, children: label };
              const tmp16 = React5(Text_Text.Text, obj4);
              cResult[16] = label;
              cResult[17] = tmp13;
              cResult[18] = tmp16;
              tmp14 = tmp16;
            }
          }
          const items1 = [tmp4.tabLabel, isActive, tabLabelDisabled];
          cResult[12] = tmp4.tabLabel;
          cResult[13] = isActive;
          cResult[14] = tabLabelDisabled;
          cResult[15] = items1;
          tmp13 = items1;
        }
        const obj5 = { selected: isActive, disabled: tabLabelDisabled };
        cResult[9] = tabLabelDisabled;
        cResult[10] = isActive;
        cResult[11] = obj5;
        tmp12 = obj5;
      }
    }
    const items2 = [tmp4.tab, tabActive, tabDisabled];
    cResult[5] = tmp4.tab;
    cResult[6] = tabActive;
    cResult[7] = tabDisabled;
    cResult[8] = items2;
    tmp10 = items2;
  }
  const items3 = [tmp5, accessibilityHint];
  const found = items3.filter((item) => null != item);
  cResult[2] = accessibilityHint;
  cResult[3] = tmp5;
  cResult[4] = found;
  arr = found;
}) : (function TraitTab(arg0) {
  ({ isActive, disabled } = arg0);
  ({ label, position } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ accessibilityHint, onPress, trailing } = arg0);
  const tmp = closure_11();
  let formatToPlainStringResult;
  if (obj.isAndroid()) {
    const intl = util.intl;
    const obj2 = { position, tabCount };
    formatToPlainStringResult = intl.formatToPlainString(util.t["4EsQA1"], obj2);
  }
  items = [formatToPlainStringResult, accessibilityHint];
  const found = items.filter((item) => null != item);
  let joined;
  if (found.length > 0) {
    joined = found.join(", ");
  }
  let tabContainerActive = isActive;
  obj = PlatformUtils;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  const obj3 = { size: "sm", containerStyle: tabContainerActive, style: null, disabled: null, onPress: null, accessibilityRole: "tab", accessibilityHint: null, accessibilityState: null, shadowColor: null, children: null };
  const items1 = [tmp.tab, , ];
  let tabActive = isActive;
  if (isActive) {
    tabActive = tmp.tabActive;
  }
  items1[1] = tabActive;
  let tabDisabled = disabled;
  if (disabled) {
    tabDisabled = tmp.tabDisabled;
  }
  items1[2] = tabDisabled;
  obj3.style = items1;
  let tmp9 = isActive;
  if (!isActive) {
    tmp9 = disabled;
  }
  obj3.disabled = tmp9;
  obj3.onPress = onPress;
  obj3.accessibilityHint = joined;
  obj3.accessibilityState = { selected: isActive, disabled };
  obj3.shadowColor = shadowColor;
  const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: null, children: null };
  const items2 = [tmp.tabLabel, , ];
  if (isActive) {
    isActive = tmp.tabLabelActive;
  }
  items2[1] = isActive;
  if (disabled) {
    disabled = tmp.tabLabelDisabled;
  }
  items2[2] = disabled;
  obj4.style = items2;
  obj4.children = label;
  const items3 = [React5(Text_Text.Text, obj4), trailing];
  obj3.children = items3;
  return closure_1_8(CheckpointPressableDefault, obj3);
});
ReactCompilerGating = fn(558);
const obj9 = { color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export const FinalizeTraitTabs = ReactCompilerGating.isReactCompilerEnabled() ? (function FinalizeTraitTabs(activeCustomizationOption) {
  const cResult = activeCustomizationOption(576).c(44);
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  ({ disableSwitching, disabled } = activeCustomizationOption);
  let tmp4 = undefined !== disableSwitching && disableSwitching;
  dependencyMap = tmp4;
  closure_3 = tmp5;
  const tmp6 = closure_11();
  const tmp7 = activeCustomizationOption(15811).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  closure_4 = tmp7;
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp5) {
        let tmp8 = cResult[3];
      }
      const accessibilityHint = tmp8;
      if (cResult[4] !== activeCustomizationOption) {
        const hasItem = items.includes(activeCustomizationOption);
        cResult[4] = activeCustomizationOption;
        cResult[5] = hasItem;
        let tmp10 = hasItem;
      } else {
        tmp10 = cResult[5];
      }
      const token = tmp(4778).useToken("text-subtle");
      let tmp15 = token;
      if (!tmp4) {
        tmp15 = token;
        if (!tmp5) {
          if (tmp10) {
            let BLACK = onSelectOption(587).colors.BLACK;
          } else {
            BLACK = closure_6;
          }
        }
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === onSelectOption) {
              let tmp18 = cResult[10];
            }
            closure_6 = tmp18;
            if (cResult[11] === activeCustomizationOption) {
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === onSelectOption) {
                      let tmp19 = cResult[16];
                    }
                    if (cResult[17] === activeCustomizationOption) {
                      if (cResult[18] === tmp4) {
                        if (cResult[19] === tmp5) {
                          if (cResult[20] === tmp8) {
                            if (cResult[21] === tmp18) {
                              let tmp22 = cResult[22];
                            }
                            if (cResult[23] === activeCustomizationOption) {
                              if (cResult[24] === tmp13) {
                                if (!tmp4) {
                                  tmp4 = tmp5;
                                }
                                if (cResult[26] !== tmp8) {
                                  let stringResult = tmp8;
                                  if (tmp8 == null) {
                                    const intl2 = tmp(1126).intl;
                                    stringResult = intl2.string(onSelectOption(3115)["8cGmXF"]);
                                  }
                                  cResult[26] = tmp8;
                                  cResult[27] = stringResult;
                                  let tmp29 = stringResult;
                                } else {
                                  tmp29 = cResult[27];
                                }
                                if (cResult[28] !== tmp15) {
                                  let obj2 = { color: tmp15, size: "xs" };
                                  const tmp35 = closure_7(tmp(10508).ChevronSmallDownIcon, obj2);
                                  cResult[28] = tmp15;
                                  cResult[29] = tmp35;
                                  let tmp33 = tmp35;
                                } else {
                                  tmp33 = cResult[29];
                                }
                                if (cResult[30] === tmp19) {
                                  if (cResult[31] === tmp13) {
                                    if (cResult[32] === tmp25) {
                                      if (cResult[33] === tmp4) {
                                        if (cResult[34] === tmp29) {
                                          if (cResult[35] === tmp33) {
                                            let tmp36 = cResult[36];
                                          }
                                          if (cResult[37] === tmp6.row) {
                                            if (cResult[38] === tmp36) {
                                              if (cResult[39] === tmp22) {
                                                let tmp41 = cResult[40];
                                              }
                                              if (cResult[41] === tmp6.scrollContent) {
                                                if (cResult[42] === tmp41) {
                                                  let tmp45 = cResult[43];
                                                }
                                                return tmp45;
                                              }
                                              let str3;
                                              if (tmpResult5.isIOS()) {
                                                str3 = "tabbar";
                                              }
                                              const obj3 = { horizontal: true, accessibilityRole: str3, alwaysBounceHorizontal: false, contentContainerStyle: tmp20, children: tmp41 };
                                              const tmp46Result = closure_7(closure_3, obj3);
                                              cResult[41] = tmp6.scrollContent;
                                              cResult[42] = tmp41;
                                              cResult[43] = tmp46Result;
                                              tmp45 = tmp46Result;
                                              tmpResult5 = tmp(1381);
                                            }
                                          }
                                          const obj4 = { style: tmp21, accessibilityRole: null, children: null };
                                          let str2;
                                          if (tmpResult6.isAndroid()) {
                                            str2 = "tablist";
                                          }
                                          obj4.accessibilityRole = str2;
                                          items = [tmp22, tmp36];
                                          obj4.children = items;
                                          const tmp42Result = closure_8(closure_4, obj4);
                                          cResult[37] = tmp6.row;
                                          cResult[38] = tmp36;
                                          cResult[39] = tmp22;
                                          cResult[40] = tmp42Result;
                                          tmp41 = tmp42Result;
                                          tmpResult6 = tmp(1381);
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj5 = { position, label: cResult[25], isActive: tmp13, disabled: tmp4, accessibilityHint: tmp29, onPress: tmp19, trailing: tmp33 };
                                const tmp40 = closure_7(closure_12, obj5);
                                cResult[30] = tmp19;
                                cResult[31] = tmp13;
                                cResult[32] = cResult[25];
                                cResult[33] = tmp4;
                                cResult[34] = tmp29;
                                cResult[35] = tmp33;
                                cResult[36] = tmp40;
                                tmp36 = tmp40;
                              }
                            }
                            if (tmp10) {
                              const intl = tmp(1126).intl;
                              let stringResult1 = intl.string(onSelectOption(3115)["iXpQc+"]);
                            } else {
                              stringResult1 = tmp(15811).getCustomizationOptionName(activeCustomizationOption);
                              const tmpResult7 = tmp(15811);
                            }
                            cResult[23] = activeCustomizationOption;
                            cResult[24] = tmp13;
                            cResult[25] = stringResult1;
                          }
                        }
                      }
                    }
                    const mapped = items.map((item, index) => {
                      closure_0 = item;
                      const obj = { label: activeCustomizationOption(closure_2[4]).getCustomizationOptionName(item), position: index + 1, isActive: closure_0 === item, disabled: null, accessibilityHint: null, onPress: null };
                      let tmp3 = closure_2;
                      if (!closure_2) {
                        tmp3 = closure_3;
                      }
                      obj.disabled = tmp3;
                      obj.accessibilityHint = accessibilityHint;
                      obj.onPress = function onPress() {
                        return closure_6(closure_0);
                      };
                      return closure_1_7(closure_1_12, obj, item);
                    });
                    cResult[17] = activeCustomizationOption;
                    cResult[18] = tmp4;
                    cResult[19] = tmp5;
                    cResult[20] = tmp8;
                    cResult[21] = tmp18;
                    cResult[22] = mapped;
                    tmp22 = mapped;
                  }
                }
              }
            }
            function handleMorePress() {
              if (!closure_3) {
                if (closure_2) {
                  showNitroLockedToastDefault(closure_4);
                } else {
                  const obj = { selectedOption: activeCustomizationOption, onSelectOption };
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15841, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
                }
              }
            }
            cResult[11] = activeCustomizationOption;
            cResult[12] = tmp7;
            cResult[13] = tmp4;
            cResult[14] = tmp5;
            cResult[15] = onSelectOption;
            cResult[16] = handleMorePress;
            tmp19 = handleMorePress;
          }
        }
      }
      function handleSelectOption(arg0) {
        if (!closure_3) {
          if (closure_2) {
            showNitroLockedToastDefault(closure_4);
          } else {
            onSelectOption(arg0);
          }
        }
      }
      cResult[6] = tmp7;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = onSelectOption;
      cResult[10] = handleSelectOption;
      tmp18 = handleSelectOption;
      const tmpResult = tmp(4778);
    }
  }
  let nitroLockedMessage;
  if (tmp4) {
    if (!tmp5) {
      nitroLockedMessage = tmp(15843).getNitroLockedMessage(tmp7);
      const tmpResult8 = tmp(15843);
    }
  }
  cResult[0] = tmp7;
  cResult[1] = tmp4;
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = nitroLockedMessage;
  tmp8 = nitroLockedMessage;
  let obj = activeCustomizationOption(576);
}) : (function FinalizeTraitTabs(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  ({ onSelectOption: importDefault, disableSwitching } = activeCustomizationOption);
  if (disableSwitching === undefined) {
    disableSwitching = false;
  }
  let flag = activeCustomizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_11();
  const tmp4 = activeCustomizationOption(disableSwitching[4]).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  closure_4 = tmp4;
  let nitroLockedMessage;
  if (disableSwitching) {
    if (!flag) {
      nitroLockedMessage = tmp2(tmp3[16]).getNitroLockedMessage(tmp4);
      const tmp2Result = tmp2(tmp3[16]);
    }
  }
  const hasItem = items.includes(activeCustomizationOption);
  const token = activeCustomizationOption(disableSwitching[17]).useToken("text-subtle");
  let tmp9 = token;
  if (!disableSwitching) {
    tmp9 = token;
    if (!flag) {
      if (hasItem) {
        let BLACK = require("native").colors.BLACK;
      } else {
        BLACK = CHECKPOINT_PRIMARY;
      }
    }
  }
  const arr = items;
  const tmp13 = flag;
  const tmp2Result5 = activeCustomizationOption(disableSwitching[17]);
  const tmp7 = !hasItem;
  let str;
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, contentContainerStyle: tmp.scrollContent, children: null };
  let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
  const tmp15 = closure_4;
  tmp2Result6 = activeCustomizationOption(disableSwitching[12]);
  let str2;
  if (tmp2Result7.isAndroid()) {
    str2 = "tablist";
  }
  obj2.accessibilityRole = str2;
  items = [
    arr.map((item, index) => {
      closure_0 = item;
      const obj = { label: activeCustomizationOption(disableSwitching[4]).getCustomizationOptionName(item), position: index + 1, isActive: closure_0 === item, disabled: null, accessibilityHint: null, onPress: null };
      let tmp3 = disableSwitching;
      if (!disableSwitching) {
        tmp3 = flag;
      }
      obj.disabled = tmp3;
      obj.accessibilityHint = nitroLockedMessage;
      obj.onPress = function onPress() {
        if (!flag) {
          if (disableSwitching) {
            showNitroLockedToastDefault(closure_4);
          } else {
            onSelectOption(tmp);
          }
        }
      };
      return closure_1_7(closure_1_12, obj, item);
    }),

  ];
  const obj3 = { position, label: null, isActive: null, disabled: null, accessibilityHint: null, onPress: null, trailing: null };
  if (hasItem) {
    const intl = tmp2(tmp3[13]).intl;
    let stringResult = intl.string(require("module_3115")["iXpQc+"]);
  } else {
    stringResult = tmp2(tmp3[4]).getCustomizationOptionName(activeCustomizationOption);
    const tmp2Result8 = tmp2(tmp3[4]);
  }
  obj3.label = stringResult;
  obj3.isActive = tmp7;
  if (!disableSwitching) {
    disableSwitching = flag;
  }
  obj3.disabled = disableSwitching;
  if (nitroLockedMessage == null) {
    const intl2 = tmp2(tmp3[13]).intl;
    nitroLockedMessage = intl2.string(require("module_3115")["8cGmXF"]);
  }
  obj3.accessibilityHint = nitroLockedMessage;
  obj3.onPress = function handleMorePress() {
    if (!flag) {
      if (disableSwitching) {
        showNitroLockedToastDefault(closure_4);
      } else {
        const obj = { selectedOption: activeCustomizationOption, onSelectOption };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15841, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
      }
    }
  };
  obj3.trailing = closure_7(activeCustomizationOption(disableSwitching[19]).ChevronSmallDownIcon, { color: tmp9, size: "xs" });
  items[1] = closure_7(closure_12, obj3);
  obj2.children = items;
  obj.children = closure_8(tmp15, obj2);
  return closure_7(tmp13, obj);
});