import { FormSwitch } from "../../../design/components/Forms/native/FormSwitch.native.tsx";
import { Input } from "../../../design/components/Input/native/Input.native.tsx";
import { TableRowArrow } from "../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
// discord_app/modules/user_profile/native/UserProfileEditFormControls.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
let require = arg1;
function FormControlText(children) {
  const tmp = createCacheKey();
  return callback2(Text /* Text */.Text, { variant: "text-sm/medium", color: "text-default", style: createCacheKey().formControlText, children: children.text });
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
    obj[2] = tmp.formControlText;
    obj[3] = text;
    tmp2 = callback2(Text /* Text */.Text, obj);
  }
  return tmp2;
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { button: null, buttonTextContainer: null, formControlText: null };
createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: require("Themes").colors.BORDER_STRONG, borderWidth: 1, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1, flexShrink: 1, flexDirection: "column" };
createCacheKey[2] = { marginRight: "auto", flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormButton = function UserProfileEditFormButton(loading) {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let label;
  let labelTrailing;
  let leading;
  let onPress;
  let trailing;
  ({ label, buttonText, content, disabled } = loading);
  ({ labelTrailing, buttonSubtext, onPress, leading, trailing, accessibilityValue } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hideArrow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = createCacheKey();
  let obj = { label, labelTrailing, children: null };
  obj = { onPress, style: tmp.button, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: null, accessibilityState: null, disabled: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[5] = intl.string(getSystemLocale /* getSystemLocale */.t["4lAcxv"]);
  obj[6] = { disabled, busy: flag };
  obj[7] = disabled;
  const items = [leading, , , ];
  if (content == null) {
    obj = { style: null, children: null };
    obj[0] = tmp.buttonTextContainer;
    let tmp2Result = null != buttonText;
    if (tmp2Result) {
      const obj1 = { text: null };
      obj1[0] = buttonText;
      tmp2Result = tmp2(FormControlText, obj1);
    }
    const items1 = [tmp2Result, ];
    const obj2 = { text: null };
    obj2[0] = buttonSubtext;
    items1[1] = tmp2(FormControlSubtext, obj2);
    obj[1] = items1;
    content = tmp5(closure_5, obj);
    const tmp6 = closure_5;
  }
  items[1] = content;
  items[2] = trailing;
  tmp2Result = !flag2;
  if (!flag2) {
    tmp2Result = tmp2(TableRowArrow /* TableRowArrow */.TableRowArrow, {});
  }
  items[3] = tmp2Result;
  obj[8] = items;
  obj[2] = closure_7(PressableBase /* PressableBase */.PressableHighlight, obj);
  return closure_6(Input /* Input */.Input, obj);
};
export const UserProfileEditFormSwitch = function UserProfileEditFormSwitch(arg0) {
  let accessibilityHint;
  let accessibilityLabel;
  let dependencyMap;
  let disabled;
  let label;
  let subLabel;
  let value;
  ({ subLabel, value } = arg0);
  const require = value;
  ({ onValueChange: dependencyMap, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let callback;
  let obj = set /* set */;
  const isAndroidResult = obj.isAndroid();
  const tmp5 = callback(React.useState(value), 2);
  callback = tmp5[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  if (isAndroidResult) {
    let PressableHighlight = tmp2(4812).PressableHighlight;
  } else {
    PressableHighlight = closure_4;
  }
  function handleOnPress() {
    let tmpResult;
    if (closure_1 != null) {
      tmpResult = tmp(!closure_0);
    }
    return tmpResult;
  }
  obj = { label, children: null };
  let tmp9;
  if (isAndroidResult) {
    tmp9 = handleOnPress;
  }
  obj = {
    onPress: tmp9,
    onAccessibilityTap() {
      callback(!closure_0);
      const timerId = setTimeout(() => {
        if (closure_1 != null) {
          tmp(!closure_0);
        }
      });
    },
    style: createCacheKey().button,
    accessibilityRole: "switch",
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityState: null,
    disabled: null,
    children: null
  };
  if (accessibilityLabel == null) {
    accessibilityLabel = subLabel;
  }
  obj[4] = accessibilityLabel;
  obj[5] = accessibilityHint;
  obj[6] = { disabled, checked: tmp5[0] };
  obj[7] = disabled;
  const items1 = [closure_6(FormControlText, { text: subLabel }), closure_6(FormSwitch /* FormSwitch */.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  obj[8] = items1;
  obj[1] = closure_7(PressableHighlight, obj);
  return closure_6(Input /* Input */.Input, obj);
};