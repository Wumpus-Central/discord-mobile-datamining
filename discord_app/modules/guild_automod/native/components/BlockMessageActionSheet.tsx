// discord_app/modules/guild_automod/native/components/BlockMessageActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const Constants = fn(12106);
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default function BlockMessageActionSheet(triggerType) {
  ({ action, onConfirm: require, onRemove: importDefault } = triggerType);
  value = undefined;
  let str;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  const tmp2 = _slicedToArray(noop.useState(str), 2);
  value = tmp2[0];
  const actionInfo = require("getActionInfo").getActionInfo(constants.BLOCK_MESSAGE, action, triggerType.triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    function handleConfirm() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(first);
    }
    const obj2 = { keyboardShouldPersistTaps: "handled", header: null, children: null };
    const obj3 = { title: actionInfo.headerText };
    obj2.header = closure_7(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
    const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
    const items = [closure_7(require("Text/Text").Text, obj4), , ,];
    const obj5 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = require("util").intl;
    obj5.children = intl2.string(require("util").t.Oa9oWJ);
    items[1] = closure_7(require("Text/Text").Text, obj5);
    const obj6 = { label: null, description: null, placeholder: null, maxLength: null, value: null, onChange: null };
    const intl3 = require("util").intl;
    obj6.label = intl3.string(require("util").t.Df4aUN);
    const intl4 = require("util").intl;
    obj6.description = intl4.string(require("util").t.eOWEmL);
    const intl5 = require("util").intl;
    obj6.placeholder = intl5.string(require("util").t.gDZw7A);
    obj6.maxLength = maxLength;
    obj6.value = value;
    obj6.onChange = tmp2[1];
    items[2] = closure_7(require("TextArea").TextArea, obj6);
    if (null == action) {
      const obj7 = { grow: true, text: null, onPress: null };
      const intl = require("util").intl;
      obj7.text = intl.string(require("util").t.JFfins);
      obj7.onPress = handleConfirm;
      let tmp8Result = closure_7(require("components/Button/Button").Button, obj7);
    } else {
      const obj8 = { children: null };
      const obj9 = { grow: true, variant: "secondary", text: null, onPress: null };
      const intl6 = require("util").intl;
      obj9.text = intl6.string(require("util").t.R9GHya);
      obj9.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        closure_1_1();
      };
      const items1 = [closure_7(require("components/Button/Button").Button, obj9)];
      const obj10 = { grow: true, text: null, onPress: null };
      const intl7 = require("util").intl;
      obj10.text = intl7.string(require("util").t["R3BPH+"]);
      obj10.onPress = handleConfirm;
      items1[1] = closure_7(require("components/Button/Button").Button, obj10);
      obj8.children = items1;
      tmp8Result = closure_8(require("native").TwinButtons, obj8);
    }
    items[3] = tmp8Result;
    obj2.children = items;
    return closure_8(require("ActionSheet").ActionSheet, obj2);
  }
  const obj = require("getActionInfo");
}
