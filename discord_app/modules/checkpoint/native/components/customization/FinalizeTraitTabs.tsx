// discord_app/modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CheckpointPressable from "../CheckpointPressable.tsx";
import showNitroLockedToastDefault from "../../showNitroLockedToast.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const CheckpointPressableDefault = CheckpointPressable;

require = fn;
function TraitTab(arg0) {
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
  const obj3 = {
    size: "sm",
    containerStyle: tabContainerActive,
    style: null,
    disabled: null,
    onPress: null,
    accessibilityRole: "tab",
    accessibilityHint: null,
    accessibilityState: null,
    shadowColor: null,
    children: null,
  };
  const items1 = [tmp.tab, ,];
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
  const items2 = [tmp.tabLabel, ,];
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
  return React6(CheckpointPressableDefault, obj3);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CheckpointConstants = fn(6061);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [fn(6429).CheckpointCustomizationOption.BASE, fn(6429).CheckpointCustomizationOption.OUTFIT_COLOR];
let closure_10 = items.length + 1;
const createStyles = fn(5009);
let obj2 = {
  scrollContent: { paddingHorizontal: nativeDefault.space.PX_16 },
  row: null,
  tabContainerActive: null,
  tab: null,
  tabActive: null,
  tabDisabled: null,
  tabLabel: null,
  tabLabelActive: null,
  tabLabelDisabled: null,
};
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
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
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
  const tmp4 = activeCustomizationOption(disableSwitching[4]).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  closure_4 = tmp4;
  let nitroLockedMessage;
  if (disableSwitching) {
    if (!flag) {
      nitroLockedMessage = tmp2(tmp3[4]).getNitroLockedMessage(tmp4);
      const tmp2Result = tmp2(tmp3[4]);
    }
  }
  const hasItem = items.includes(activeCustomizationOption);
  const token = activeCustomizationOption(disableSwitching[14]).useToken("text-subtle");
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
  const tmp2Result5 = activeCustomizationOption(disableSwitching[14]);
  const tmp7 = !hasItem;
  let str;
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = {
    horizontal: true,
    accessibilityRole: str,
    alwaysBounceHorizontal: false,
    contentContainerStyle: tmp.scrollContent,
    children: null,
  };
  let obj2 = { style: tmp.row, accessibilityRole: null, children: null };
  const tmp15 = closure_4;
  tmp2Result6 = activeCustomizationOption(disableSwitching[10]);
  let str2;
  if (tmp2Result7.isAndroid()) {
    str2 = "tablist";
  }
  obj2.accessibilityRole = str2;
  items = [
    arr.map((item, index) => {
      closure_0 = item;
      const obj = {
        label: activeCustomizationOption(disableSwitching[4]).getCustomizationOptionName(item),
        position: index + 1,
        isActive: closure_0 === item,
        disabled: null,
        accessibilityHint: null,
        onPress: null,
      };
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
      return closure_1_7(TraitTab, obj, item);
    }),
  ];
  const obj3 = {
    position,
    label: null,
    isActive: null,
    disabled: null,
    accessibilityHint: null,
    onPress: null,
    trailing: null,
  };
  if (hasItem) {
    const intl = tmp2(tmp3[11]).intl;
    let stringResult = intl.string(require("../../../Checkpoint2026.messages.js")["iXpQc+"]);
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
    const intl2 = tmp2(tmp3[11]).intl;
    nitroLockedMessage = intl2.string(require("../../../Checkpoint2026.messages.js")["8cGmXF"]);
  }
  obj3.accessibilityHint = nitroLockedMessage;
  obj3.onPress = function handleMorePress() {
    if (!flag) {
      if (disableSwitching) {
        showNitroLockedToastDefault(closure_4);
      } else {
        const obj = { selectedOption: activeCustomizationOption, onSelectOption };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(13640, dependencyMap.paths),
          "CheckpointFinalizeTraitPicker",
          obj,
        );
      }
    }
  };
  obj3.trailing = closure_7(activeCustomizationOption(disableSwitching[17]).ChevronSmallDownIcon, {
    color: tmp9,
    size: "xs",
  });
  items[1] = closure_7(TraitTab, obj3);
  obj2.children = items;
  obj.children = closure_8(tmp15, obj2);
  return closure_7(tmp13, obj);
}
