// === Module 13929: FinalizeTraitTabs ===

// Module 13929 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Text_Text from "Text/Text" /* 5751 */;
import CheckpointPressable from "CheckpointPressable" /* 13906 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13932 */;
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
const CheckpointConstants = fn(6199);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
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
  let isMoreMenuActive;
  let moreTabOption;
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
  const finalizeMoreTabOption = activeCustomizationOption(flag[14]).useFinalizeMoreTabOption(activeCustomizationOption);
  isMoreMenuActive = finalizeMoreTabOption.isMoreMenuActive;
  moreTabOption = finalizeMoreTabOption.moreTabOption;
  if (isMoreMenuActive) {
    const intl = tmp2(tmp3[10]).intl;
    const stringResult = intl.string(tmp6(tmp3[15])["8cGmXF"]);
  }
  const tmp2Result6 = activeCustomizationOption(flag[14]);
  const token = activeCustomizationOption(flag[16]).useToken("text-subtle");
  let tmp12 = token;
  if (!flag) {
    tmp12 = token;
    if (!flag2) {
      if (isMoreMenuActive) {
        let BLACK = c6;
      } else {
        BLACK = tmp6(tmp3[8]).colors.BLACK;
      }
    }
  }
  const tmp15 = flag2;
  const tmp2Result7 = activeCustomizationOption(flag[16]);
  let str;
  if (tmp2Result8.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, style: tmp.scroll, contentContainerStyle: tmp.scrollContent, children: null };
  let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
  const tmp16 = moreTabOption;
  const tmp17 = closure_4;
  tmp2Result8 = activeCustomizationOption(flag[9]);
  let str2;
  if (tmp2Result9.isAndroid()) {
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
      return isMoreMenuActive(TraitTab, obj, item);
    }),

  ];
  const obj3 = { position: sum, tabCount: sum, label: null, isActive: null, disabled: null, accessibilityHint: null, onPress: null, trailing: null };
  if (null != moreTabOption) {
    let customizationOptionName = tmp2(tmp3[13]).getCustomizationOptionName(moreTabOption);
    const tmp2Result10 = tmp2(tmp3[13]);
  } else {
    const intl2 = tmp2(tmp3[10]).intl;
    customizationOptionName = intl2.string(tmp6(tmp3[15])["iXpQc+"]);
  }
  obj3.label = customizationOptionName;
  obj3.isActive = isMoreMenuActive;
  if (!flag) {
    flag = flag2;
  }
  obj3.disabled = flag;
  if (nitroLockedMessage == null) {
    nitroLockedMessage = stringResult;
  }
  obj3.accessibilityHint = nitroLockedMessage;
  obj3.onPress = function handleMorePress() {
    if (!flag2) {
      if (flag) {
        showNitroLockedToastDefault(closure_4);
      } else {
        if (!isMoreMenuActive) {
          if (null != moreTabOption) {
            onSelectOption(tmp3);
          }
        }
        const obj = { selectedOption: activeCustomizationOption, onSelectOption };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13930, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
      }
    }
  };
  obj3.trailing = isMoreMenuActive(activeCustomizationOption(flag[18]).ChevronSmallDownIcon, { color: tmp12, size: "xs" });
  items[1] = isMoreMenuActive(TraitTab, obj3);
  obj2.children = items;
  obj.children = tmp16(tmp17, obj2);
  return isMoreMenuActive(tmp15, obj);
}