// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default function ConjureLinkedAppBuildSheet(arg0) {
  ({ sheetKey: require, onPick: importDefault, onRemove } = arg0);
  ({ title, value } = arg0);
  const intl = require("util").intl;
  const stringResult = intl.string(require("../../intl/ConjureUntranslated.messages.js").Odrcmq);
  let obj = { header: closure_3(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: null };
  let obj2 = {
    spacing: require("native").space.PX_16,
    style: closure_5(require("useSafeAreaInsets")().bottom).content,
    children: null,
  };
  const obj3 = {
    hasIcons: false,
    title: stringResult,
    accessibilityLabel: stringResult,
    value,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      closure_1_1(arg0);
    },
    children: null,
  };
  const prop = require("conjureLinkedApps").CONJURE_LINKED_APP_BUILDS;
  obj3.children = prop.map((value) => {
    const obj = { value, label: require("conjureLinkedApps").linkedAppBuildLabel(value), subLabel: null };
    const obj2 = require("conjureLinkedApps");
    obj.subLabel = require("conjureLinkedApps").linkedAppBuildDescription(value);
    return closure_1_3(require("TableRadioRow").TableRadioRow, obj, value);
  });
  const items = [closure_3(require("TableRadioGroup").TableRadioGroup, obj3)];
  let tmp6Result = null;
  if (null != onRemove) {
    const obj4 = { hasIcons: false, children: null };
    const obj5 = { variant: "danger", label: null, onPress: null };
    const intl2 = require("util").intl;
    obj5.label = intl2.string(require("../../intl/ConjureUntranslated.messages.js").bN1S9T);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      onRemove();
    };
    obj4.children = closure_3(require("ActionSheetRow").ActionSheetRow, obj5);
    tmp6Result = closure_3(require("ActionSheetRow").ActionSheetRow.Group, obj4);
  }
  items[1] = tmp6Result;
  obj2.children = items;
  obj.children = closure_4(require("Stack/Stack").Stack, obj2);
  return closure_3(require("ActionSheet").ActionSheet, obj);
}
