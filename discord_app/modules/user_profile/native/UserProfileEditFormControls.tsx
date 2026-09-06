// === Module 14618: UserProfileEditFormControls ===

// Module 14618 (UserProfileEditFormControls)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import Input from "Input" /* 6607 */;
import FormSwitch from "FormSwitch" /* 7202 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FormControlText(children) {
  const tmp = closure_8();
  return timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", style: closure_8().formControlText, children: children.text });
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
    tmp2 = timestampProducer(Text_Text.Text, obj);
  }
  return tmp2;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { button: null, buttonDisabled: null, buttonTextContainer: null, formControlText: null, labelTrailing: null, newBadge: null };
createStyles = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles.button = createStyles;
createStyles.buttonDisabled = { opacity: 0.5 };
createStyles.buttonTextContainer = { flexGrow: 1, flexShrink: 1, flexDirection: "column" };
createStyles.formControlText = { marginRight: "auto", flexShrink: 1 };
createStyles.labelTrailing = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
createStyles.newBadge = { paddingTop: 0 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormLabelBadges = function UserProfileEditFormLabelBadges(showPremiumIcon) {
  let flag = showPremiumIcon.showPremiumIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showPremiumIcon.showNewBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_8();
  if (flag) {
    let obj = { style: tmp.labelTrailing, "aria-hidden": true, children: null };
    let tmp5 = null;
    if (flag) {
      tmp5 = timestampProducer(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
    }
    const items = [tmp5, ];
    let tmp9 = null;
    if (flag2) {
      obj = { text: null, style: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.y2b7CA);
      obj.style = tmp.newBadge;
      tmp9 = timestampProducer(native.TextBadge, obj);
    }
    items[1] = tmp9;
    obj.children = items;
    let tmp3Result = React5(hasOwnProperty, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};
export const UserProfileEditFormButton = function UserProfileEditFormButton(loading) {
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
  const tmp = closure_8();
  let obj = { label, labelTrailing, children: null };
  obj = { onPress, style: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, accessibilityHint: null, accessibilityState: null, disabled: null, children: null };
  const items = [tmp.button, ];
  let buttonDisabled = disabled;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items[1] = buttonDisabled;
  obj.style = items;
  obj.accessibilityLabel = label;
  obj.accessibilityValue = accessibilityValue;
  let stringResult;
  if (!disabled) {
    const intl = tmp3(1114).intl;
    stringResult = intl.string(tmp3(1114).t["4lAcxv"]);
  }
  obj.accessibilityHint = stringResult;
  obj.accessibilityState = { disabled, busy: flag };
  obj.disabled = disabled;
  const items1 = [leading, , , ];
  if (content == null) {
    obj = { style: tmp.buttonTextContainer, children: null };
    let tmp2Result = null != buttonText;
    if (tmp2Result) {
      const obj1 = { text: buttonText };
      tmp2Result = tmp2(FormControlText, obj1);
    }
    const items2 = [tmp2Result, ];
    const obj2 = { text: buttonSubtext };
    items2[1] = tmp2(FormControlSubtext, obj2);
    obj.children = items2;
    content = tmp5(hasOwnProperty, obj);
  }
  items1[1] = content;
  items1[2] = trailing;
  tmp2Result = !flag2;
  if (!flag2) {
    tmp2Result = tmp2(tmp3(5612).TableRowArrow, {});
  }
  items1[3] = tmp2Result;
  obj.children = items1;
  obj.children = React5(Pressables.PressableHighlight, obj);
  return timestampProducer(Input.Input, obj);
};
export const UserProfileEditFormSwitch = function UserProfileEditFormSwitch(arg0) {
  ({ subLabel, value } = arg0);
  require = value;
  ({ onValueChange: dependencyMap, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const tmp5 = _slicedToArray(noop.useState(value), 2);
  closure_2 = tmp5[1];
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_2(value);
  }, items);
  if (isAndroidResult) {
    let PressableHighlight = tmp2(5123).PressableHighlight;
  } else {
    PressableHighlight = React4;
  }
  function handleOnPress() {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(!value);
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
      closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    style: closure_8().button,
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
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.accessibilityState = { disabled, checked: tmp5[0] };
  obj.disabled = disabled;
  const items1 = [timestampProducer(FormControlText, { text: subLabel }), timestampProducer(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  obj.children = items1;
  obj.children = React5(PressableHighlight, obj);
  return timestampProducer(Input.Input, obj);
};