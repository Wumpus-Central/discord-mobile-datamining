// === Module 13950: FinalizeTraitTabs ===

// Module 13950 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import Text_Text from "Text/Text" /* 5753 */;
import CheckpointPressable from "CheckpointPressable" /* 13927 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13953 */;
import noop from "module_19" /* 19 */;

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
function TraitTab(arg0) {
  ({ isActive, disabled } = arg0);
  ({ label, position, tabCount } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ accessibilityHint, onPress, trailing } = arg0);
  const tmp = closure_9();
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
  let tmp8 = isActive;
  if (!isActive) {
    tmp8 = disabled;
  }
  obj3.disabled = tmp8;
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
  const items3 = [metroImportDefault(Text_Text.Text, obj4), trailing];
  obj3.children = items3;
  return React5(CheckpointPressableDefault, obj3);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CheckpointConstants = fn(6201);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { scroll: { flexGrow: 0 }, scrollContent: { paddingHorizontal: nativeDefault.space.PX_16 }, row: null, tabContainerActive: null, tab: null, tabActive: null, tabDisabled: null, tabLabel: null, tabLabelActive: null, tabLabelDisabled: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tabContainerActive = { paddingRight: 0, paddingBottom: 0 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tab = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
const obj5 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj2.tabActive = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
const obj6 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
obj2.tabDisabled = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
const obj7 = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj2.tabLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelActive = { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" };
const obj8 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  let flag = activeCustomizationOption.disableSwitching;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = activeCustomizationOption.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c6 = undefined;
  const tmp = closure_9();
  const tmp4 = activeCustomizationOption(flag[13]).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  closure_4 = tmp4;
  let nitroLockedMessage;
  if (flag) {
    if (!flag2) {
      nitroLockedMessage = tmp2(tmp3[13]).getNitroLockedMessage(tmp4);
      const tmp2Result = tmp2(tmp3[13]);
    }
  }
  const arr = onSelectOption(flag[14])(activeCustomizationOption, onSelectOption);
  const sum = arr.length + 1;
  c6 = sum;
  const FINALIZE_TRAIT_TAB_ITEMS = tmp2(tmp3[14]).FINALIZE_TRAIT_TAB_ITEMS;
  const hasItem = FINALIZE_TRAIT_TAB_ITEMS.includes(activeCustomizationOption);
  const token = activeCustomizationOption(flag[15]).useToken("text-subtle");
  let tmp11 = token;
  if (!flag) {
    tmp11 = token;
    if (!flag2) {
      if (hasItem) {
        let BLACK = tmp6(tmp3[8]).colors.BLACK;
      } else {
        BLACK = c6;
      }
    }
  }
  const tmp14 = flag2;
  const tmp2Result5 = activeCustomizationOption(flag[15]);
  const tmp9 = !hasItem;
  let str;
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, style: tmp.scroll, contentContainerStyle: tmp.scrollContent, children: null };
  let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
  const tmp16 = closure_4;
  tmp2Result6 = activeCustomizationOption(flag[9]);
  let str2;
  if (tmp2Result7.isAndroid()) {
    str2 = "tablist";
  }
  obj2.accessibilityRole = str2;
  items = [
    arr.map((item, index) => {
      closure_0 = item;
      const obj = { label: activeCustomizationOption(flag[13]).getCustomizationOptionName(item), position: index + 1, tabCount, isActive: closure_0 === item, disabled: null, accessibilityHint: null, onPress: null };
      let tmp3 = flag;
      if (!flag) {
        tmp3 = flag2;
      }
      obj.disabled = tmp3;
      obj.accessibilityHint = nitroLockedMessage;
      obj.onPress = function onPress() {
        if (!flag2) {
          if (flag) {
            showNitroLockedToastDefault(closure_4);
          } else {
            onSelectOption(tmp);
          }
        }
      };
      return closure_1_7(TraitTab, obj, item);
    }),

  ];
  const obj3 = { position: sum, tabCount: sum, label: null, isActive: null, disabled: null, accessibilityHint: null, onPress: null, trailing: null };
  if (hasItem) {
    const intl = tmp2(tmp3[10]).intl;
    let stringResult = intl.string(tmp6(tmp3[17])["iXpQc+"]);
  } else {
    stringResult = tmp2(tmp3[13]).getCustomizationOptionName(activeCustomizationOption);
    const tmp2Result8 = tmp2(tmp3[13]);
  }
  obj3.label = stringResult;
  obj3.isActive = tmp9;
  if (!flag) {
    flag = flag2;
  }
  obj3.disabled = flag;
  if (nitroLockedMessage == null) {
    const intl2 = tmp2(tmp3[10]).intl;
    nitroLockedMessage = intl2.string(tmp6(tmp3[17])["8cGmXF"]);
  }
  obj3.accessibilityHint = nitroLockedMessage;
  obj3.onPress = function handleMorePress() {
    if (!flag2) {
      if (flag) {
        showNitroLockedToastDefault(closure_4);
      } else {
        const obj = { selectedOption: activeCustomizationOption, onSelectOption };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13951, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
      }
    }
  };
  obj3.trailing = closure_7(activeCustomizationOption(flag[18]).ChevronSmallDownIcon, { color: tmp11, size: "xs" });
  items[1] = closure_7(TraitTab, obj3);
  obj2.children = items;
  obj.children = closure_8(tmp16, obj2);
  return closure_7(tmp14, obj);
}