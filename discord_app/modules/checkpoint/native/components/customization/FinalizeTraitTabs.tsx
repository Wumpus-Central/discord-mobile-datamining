// === Module 12937: FinalizeTraitTabs ===

// Module 12937 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import CheckpointPressable from "CheckpointPressable" /* 12873 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 12878 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;

const CheckpointPressableDefault = CheckpointPressable;

require = fn;
function TraitTab(arg0) {
  ({ label, isActive, isBlocked } = arg0);
  ({ accessibilityLabel, position, tabCount, disabled, accessibilityHint, onPress, onLayout, trailing } = arg0);
  const tmp = closure_12();
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
  const obj3 = { onLayout, children: null };
  let tabContainerActive = isActive;
  obj = PlatformUtils;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  const obj4 = { size: "sm", containerStyle: tabContainerActive, style: null, disabled: null, onPress: null, accessibilityRole: "tab", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, shadowColor: null, children: null };
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
  obj4.style = items1;
  let tmp10 = isActive;
  if (!isActive) {
    tmp10 = isBlocked;
  }
  obj4.disabled = tmp10;
  obj4.onPress = onPress;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = joined;
  const obj5 = { selected: isActive, disabled: null };
  let tmp11 = isBlocked;
  if (!isBlocked) {
    tmp11 = disabled;
  }
  obj5.disabled = tmp11;
  obj4.accessibilityState = obj5;
  obj4.shadowColor = shadowColor;
  let tmp6Result = null != label;
  if (tmp6Result) {
    const obj6 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: null, children: null };
    const items2 = [tmp.tabLabel, , ];
    if (isActive) {
      isActive = tmp.tabLabelActive;
    }
    items2[1] = isActive;
    if (isBlocked) {
      isBlocked = tmp.tabLabelDisabled;
    }
    items2[2] = isBlocked;
    obj6.style = items2;
    obj6.children = label;
    tmp6Result = React6(Text_Text.Text, obj6);
  }
  const items3 = [tmp6Result, trailing];
  obj4.children = items3;
  obj3.children = refs(CheckpointPressableDefault, obj4);
  return React6(hasOwnProperty, obj3);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(6396);
({ CHECKPOINT_DARK_CYAN: metroImportDefault, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5043);
let obj2 = { scroll: { flexGrow: 0 }, scrollContent: { paddingHorizontal: PX_16 }, row: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, tabContainerActive: { paddingRight: 0, paddingBottom: 0 }, tab: null, tabActive: null, tabDisabled: null, tabLabel: null, tabLabelActive: null, tabLabelDisabled: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tab = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
let obj4 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj2.tabActive = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
let obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
obj2.tabDisabled = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
let obj6 = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj2.tabLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelActive = { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" };
const obj7 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.tabLabelDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const moreTabOption = activeCustomizationOption.moreTabOption;
  ({ onSelectOption: dependencyMap, isCurrentTraitBlocked } = activeCustomizationOption);
  if (isCurrentTraitBlocked === undefined) {
    isCurrentTraitBlocked = false;
  }
  let flag = activeCustomizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  c7 = undefined;
  closure_8 = undefined;
  let str;
  let stateFromStores;
  let ref;
  let ref2;
  function handleTabLayout(more, nativeEvent) {
    const layout = nativeEvent.nativeEvent.layout;
    const current = ref.current;
    const result = current.set(more, { x: layout.x, width: layout.width });
    if (more === str) {
      const current3 = ref.current;
      value = current3.get(tmp3);
      const current4 = ref3.current;
      if (null != value) {
        if (0 !== current4) {
          let x = value.x;
          const diff = value.x + value.width + 2 * PX_16 - current4;
          const current5 = ref2.current;
          if (current5 <= x) {
            let tmp4 = null;
            if (current5 < diff) {
              tmp4 = diff;
            }
            x = tmp4;
          }
          if (null != x) {
            const current2 = ref.current;
            if (current2 != null) {
              const obj2 = { x, animated: !stateFromStores };
              current2.scrollTo(obj2);
            }
          }
        }
      }
    }
    const obj = { x: layout.x, width: layout.width };
  }
  const tmp = ref();
  let tmp4 = activeCustomizationOption(6765).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  closure_5 = tmp4;
  let nitroLockedMessage;
  if (isCurrentTraitBlocked) {
    if (!flag) {
      nitroLockedMessage = tmp2(6765).getNitroLockedMessage(tmp4);
      const tmp2Result = tmp2(6765);
    }
  }
  const sum = tmp2(6765).FINALIZE_TAB_OPTIONS.length + 1;
  c7 = sum;
  const FINALIZE_MORE_OPTIONS = tmp2(6765).FINALIZE_MORE_OPTIONS;
  const hasItem = FINALIZE_MORE_OPTIONS.includes(activeCustomizationOption);
  if (null != moreTabOption) {
    const customizationOptionName = tmp2(6765).getCustomizationOptionName(moreTabOption);
    const tmp2Result6 = tmp2(6765);
  }
  closure_8 = tmp9;
  str = "more";
  if (!hasItem) {
    str = activeCustomizationOption;
  }
  function scrollActiveTabIntoView() {
    const current = ref.current;
    value = current.get(str);
    const current2 = ref3.current;
    if (null != value) {
      if (0 !== current2) {
        let x = value.x;
        const diff = value.x + value.width + 2 * PX_16 - current2;
        const current4 = ref2.current;
        if (current4 <= x) {
          let tmp2 = null;
          if (current4 < diff) {
            tmp2 = diff;
          }
          x = tmp2;
        }
        if (null != x) {
          const current3 = ref.current;
          if (current3 != null) {
            const obj = { x, animated: !stateFromStores };
            current3.scrollTo(obj);
          }
        }
      }
    }
  }
  items = [nitroLockedMessage];
  stateFromStores = activeCustomizationOption(504).useStateFromStores(items, () => nitroLockedMessage.useReducedMotion);
  isCurrentTraitBlocked.useRef(null);
  const tmp2Result7 = activeCustomizationOption(504);
  ref = isCurrentTraitBlocked.useRef(new Map());
  ref2 = isCurrentTraitBlocked.useRef(0);
  isCurrentTraitBlocked.useRef(0);
  const items1 = [str, stateFromStores];
  const effect = isCurrentTraitBlocked.useEffect(scrollActiveTabIntoView, items1);
  activeCustomizationOption(5607);
  if (isCurrentTraitBlocked) {
    let obj = {
      ref,
      horizontal: true,
      onLayout: function handleLayout(nativeEvent) {
          ref3.current = nativeEvent.nativeEvent.layout.width;
          const current = ref.current;
          value = current.get(str);
          const current2 = ref3.current;
          if (null != value) {
            if (0 !== current2) {
              let x = value.x;
              const diff = value.x + value.width + 2 * PX_16 - current2;
              const current4 = ref2.current;
              if (current4 <= x) {
                let tmp2 = null;
                if (current4 < diff) {
                  tmp2 = diff;
                }
                x = tmp2;
              }
              if (null != x) {
                const current3 = ref.current;
                if (current3 != null) {
                  const obj = { x, animated: !stateFromStores };
                  current3.scrollTo(obj);
                }
              }
            }
          }
        },
      onScroll: function handleScroll(nativeEvent) {
          closure_13.current = nativeEvent.nativeEvent.contentOffset.x;
        },
      scrollEventThrottle: 16,
      accessibilityRole: null,
      alwaysBounceHorizontal: false,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      children: null
    };
    let str2;
    if (tmp2Result9.isIOS()) {
      str2 = "tabbar";
    }
    obj.accessibilityRole = str2;
    ({ scroll: obj4.style, scrollContent: obj4.contentContainerStyle } = tmp);
    let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
    const tmp19 = flag;
    const tmp20 = stateFromStores;
    const tmp21 = closure_5;
    tmp2Result9 = tmp2(1379);
    let str3;
    if (tmp2Result10.isAndroid()) {
      str3 = "tablist";
    }
    obj2.accessibilityRole = str3;
    const FINALIZE_TAB_OPTIONS = tmp2(6765).FINALIZE_TAB_OPTIONS;
    const items2 = [
      FINALIZE_TAB_OPTIONS.map((item, index) => {
          closure_0 = item;
          const obj = {
            label: activeCustomizationOption(onSelectOption[14]).getCustomizationOptionName(item),
            position: index + 1,
            tabCount,
            isActive: closure_0 === item,
            isBlocked: isCurrentTraitBlocked,
            disabled: flag,
            accessibilityHint: nitroLockedMessage,
            onPress() {
              if (!flag) {
                if (isCurrentTraitBlocked) {
                  showNitroLockedToastDefault(closure_5);
                } else {
                  onSelectOption(tmp);
                }
              }
            },
            onLayout(nativeEvent) {
              handleTabLayout(closure_0, nativeEvent);
            }
          };
          return str(closure_13, obj, item);
        }),

    ];
    const obj3 = { position: sum, tabCount: sum, label: customizationOptionName, accessibilityLabel: null, isActive: null, isBlocked: null, disabled: null, accessibilityHint: null, onPress: null, onLayout: null, trailing: null };
    if (null != customizationOptionName) {
      const intl2 = tmp2(1112).intl;
      const obj5 = { category: customizationOptionName };
      let formatToPlainStringResult = intl2.formatToPlainString(moreTabOption(3495).QX1VPx, obj5);
      let tmp23 = moreTabOption;
    } else {
      const intl = tmp2(1112).intl;
      tmp23 = moreTabOption;
      formatToPlainStringResult = intl.string(moreTabOption(3495).jepsQ6);
    }
    obj3.accessibilityLabel = formatToPlainStringResult;
    obj3.isActive = hasItem;
    obj3.isBlocked = isCurrentTraitBlocked;
    obj3.disabled = flag;
    if (nitroLockedMessage == null) {
      let stringResult;
      if (tmp9) {
        const intl3 = tmp2(1112).intl;
        stringResult = intl3.string(tmp23(3495)["8cGmXF"]);
      }
      nitroLockedMessage = stringResult;
    }
    obj3.accessibilityHint = nitroLockedMessage;
    obj3.onPress = function handleMorePress() {
      if (!flag) {
        if (isCurrentTraitBlocked) {
          showNitroLockedToastDefault(closure_5);
        } else if (closure_8) {
          const obj = { selectedOption: activeCustomizationOption, onSelectOption };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12938, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        } else if (null != moreTabOption) {
          onSelectOption(tmp3);
        }
      }
    };
    obj3.onLayout = function onLayout(nativeEvent) {
      handleTabLayout("more", nativeEvent);
    };
    const obj6 = { color: tmp15, size: "xs" };
    obj3.trailing = str(tmp2(9817).ChevronSmallDownIcon, obj6);
    items2[1] = str(ref2, obj3);
    obj2.children = items2;
    obj.children = tmp20(tmp21, obj2);
    return str(tmp19, obj);
  } else if (hasItem) {
    let BLACK = closure_8;
  } else {
    BLACK = moreTabOption(575).colors.BLACK;
  }
  const map = new Map();
}