// === Module 14544: FinalizeTraitTabs ===

// Module 14544 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import CheckpointPressable from "CheckpointPressable" /* 14491 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 14496 */;
import noop from "module_19" /* 19 */;

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
function TraitTab(arg0) {
  ({ isActive, isBlocked } = arg0);
  ({ label, position, tabCount, disabled, accessibilityHint, onPress, trailing } = arg0);
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
  let tabDisabled = isBlocked;
  if (isBlocked) {
    tabDisabled = tmp.tabDisabled;
  }
  items1[2] = tabDisabled;
  obj3.style = items1;
  let tmp8 = isActive;
  if (!isActive) {
    tmp8 = isBlocked;
  }
  obj3.disabled = tmp8;
  obj3.onPress = onPress;
  obj3.accessibilityHint = joined;
  const obj4 = { selected: isActive, disabled: null };
  let tmp9 = isBlocked;
  if (!isBlocked) {
    tmp9 = disabled;
  }
  obj4.disabled = tmp9;
  obj3.accessibilityState = obj4;
  obj3.shadowColor = shadowColor;
  const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: null, children: null };
  const items2 = [tmp.tabLabel, , ];
  if (isActive) {
    isActive = tmp.tabLabelActive;
  }
  items2[1] = isActive;
  if (isBlocked) {
    isBlocked = tmp.tabLabelDisabled;
  }
  items2[2] = isBlocked;
  obj5.style = items2;
  obj5.children = label;
  const items3 = [metroImportDefault(Text_Text.Text, obj5), trailing];
  obj3.children = items3;
  return React5(CheckpointPressableDefault, obj3);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CheckpointConstants = fn(6377);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { scroll: { flexGrow: 0 }, scrollContent: { paddingHorizontal: nativeDefault.space.PX_16 }, row: null, tabContainerActive: null, tab: null, tabActive: null, tabDisabled: null, tabLabel: null, tabLabelActive: null, tabLabelDisabled: null };
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
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  let flag = activeCustomizationOption.isCurrentTraitBlocked;
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
  activeCustomizationOption(flag[15]);
  if (flag) {
    let str;
    if (tmp2Result6.isIOS()) {
      str = "tabbar";
    }
    let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, style: null, contentContainerStyle: null, children: null };
    ({ scroll: obj3.style, scrollContent: obj3.contentContainerStyle } = tmp);
    let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
    const tmp14 = flag2;
    const tmp16 = closure_4;
    tmp2Result6 = tmp2(tmp3[9]);
    let str2;
    if (tmp2Result7.isAndroid()) {
      str2 = "tablist";
    }
    obj2.accessibilityRole = str2;
    items = [
      arr.map((item, index) => {
          closure_0 = item;
          const obj = {
            label: activeCustomizationOption(flag[13]).getCustomizationOptionName(item),
            position: index + 1,
            tabCount,
            isActive: closure_0 === item,
            isBlocked: flag,
            disabled: flag2,
            accessibilityHint: nitroLockedMessage,
            onPress() {
              if (!flag2) {
                if (flag) {
                  showNitroLockedToastDefault(closure_4);
                } else {
                  onSelectOption(tmp);
                }
              }
            }
          };
          return closure_1_7(TraitTab, obj, item);
        }),

    ];
    const obj4 = { position: sum, tabCount: sum, label: null, isActive: null, isBlocked: null, disabled: null, accessibilityHint: null, onPress: null, trailing: null };
    if (hasItem) {
      const intl = tmp2(tmp3[10]).intl;
      let stringResult = intl.string(tmp6(tmp3[17])["iXpQc+"]);
    } else {
      stringResult = tmp2(tmp3[13]).getCustomizationOptionName(activeCustomizationOption);
      const tmp2Result8 = tmp2(tmp3[13]);
    }
    obj4.label = stringResult;
    obj4.isActive = tmp9;
    obj4.isBlocked = flag;
    obj4.disabled = flag2;
    if (nitroLockedMessage == null) {
      const intl2 = tmp2(tmp3[10]).intl;
      nitroLockedMessage = intl2.string(tmp6(tmp3[17])["8cGmXF"]);
    }
    obj4.accessibilityHint = nitroLockedMessage;
    obj4.onPress = function handleMorePress() {
      if (!flag2) {
        if (flag) {
          showNitroLockedToastDefault(closure_4);
        } else {
          const obj = { selectedOption: activeCustomizationOption, onSelectOption };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14545, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        }
      }
    };
    const obj5 = { color: tmp11, size: "xs" };
    obj4.trailing = closure_7(tmp2(tmp3[18]).ChevronSmallDownIcon, obj5);
    items[1] = closure_7(TraitTab, obj4);
    obj2.children = items;
    obj.children = closure_8(tmp16, obj2);
    return closure_7(tmp14, obj);
  } else if (hasItem) {
    let BLACK = tmp6(tmp3[8]).colors.BLACK;
  } else {
    BLACK = c6;
  }
  tmp9 = !hasItem;
}