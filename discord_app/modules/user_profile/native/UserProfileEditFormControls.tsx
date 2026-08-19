// discord_app/modules/user_profile/native/UserProfileEditFormControls.tsx
import obj132 from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import TableRowArrow from "../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import FormSwitch from "../../../design/components/Forms/native/FormSwitch.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import Input from "../../../design/components/Input/native/Input.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function FormControlText(children) {
  const tmp = callback3();
  return callback2(Text.Text, { variant: "text-sm/medium", color: "text-default", style: callback3().formControlText, children: children.text });
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
    obj[2] = tmp.formControlText;
    obj[3] = text;
    tmp2 = callback2(Text.Text, obj);
  }
  return tmp2;
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: ThemesDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1, flexShrink: 1, flexDirection: "column" };
createCacheKey[2] = { marginRight: "auto", flexShrink: 1 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginLeft: ThemesDefault.space.PX_4, gap: ThemesDefault.space.PX_4 };
createCacheKey[4] = { paddingTop: 0 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormLabelBadges = function UserProfileEditFormLabelBadges(showPremiumIcon) {
  let flag = showPremiumIcon.showPremiumIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showPremiumIcon.showNewBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback3();
  if (flag) {
    let obj = { style: null, "aria-hidden": true, children: null };
    obj[0] = tmp.labelTrailing;
    let tmp5 = null;
    if (flag) {
      tmp5 = callback2(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
    }
    const items = [tmp5, ];
    let tmp9 = null;
    if (flag2) {
      obj = { text: null, style: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.y2b7CA);
      obj[1] = tmp.newBadge;
      tmp9 = callback2(Button.TextBadge, obj);
    }
    items[1] = tmp9;
    obj[2] = items;
    let tmp3Result = callback2(closure_5, obj);
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
  const tmp = callback3();
  let obj = { onPress, style: tmp.button, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: null, accessibilityState: null, disabled: null, children: null };
  const intl = getSystemLocale.intl;
  obj[5] = intl.string(getSystemLocale.t["4lAcxv"]);
  obj[6] = { disabled, busy: flag };
  obj[7] = disabled;
  const items = [leading, , , ];
  if (content == null) {
    obj = { style: null, children: null };
    obj[0] = tmp.buttonTextContainer;
    let tmp2Result = null != buttonText;
    if (tmp2Result) {
      obj1 = { text: null };
      obj1[0] = buttonText;
      tmp2Result = callback(FormControlText, obj1);
    }
    const items1 = [tmp2Result, ];
    const obj2 = { text: null };
    obj2[0] = buttonSubtext;
    items1[1] = callback(FormControlSubtext, obj2);
    obj[1] = items1;
    content = callback2(closure_5, obj);
  }
  items[1] = content;
  items[2] = trailing;
  tmp2Result = !flag2;
  if (!flag2) {
    tmp2Result = callback(TableRowArrow.TableRowArrow, {});
  }
  items[3] = tmp2Result;
  obj[8] = items;
  obj[2] = callback2(PressableBase.PressableHighlight, obj);
  return callback(Input.Input, obj);
};
export const UserProfileEditFormSwitch = function UserProfileEditFormSwitch(arg0) {
  ({ subLabel, value } = arg0);
  require = value;
  ({ onValueChange: dependencyMap, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let callback;
  let obj = obj132;
  const isAndroidResult = obj.isAndroid();
  const tmp5 = callback(React.useState(value), 2);
  callback = tmp5[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  if (isAndroidResult) {
    let PressableHighlight = tmp2(5433).PressableHighlight;
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
    style: callback3().button,
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
  const items1 = [callback(FormControlText, { text: subLabel }), callback(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  obj[8] = items1;
  obj[1] = callback2(PressableHighlight, obj);
  return callback(Input.Input, obj);
};