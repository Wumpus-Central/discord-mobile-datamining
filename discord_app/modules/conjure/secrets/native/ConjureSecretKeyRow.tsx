// discord_app/modules/conjure/secrets/native/ConjureSecretKeyRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ConjureNativeFieldHeadingDefault from "../../shared/native/ConjureNativeFieldHeading.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GlobeEarthIcon = tmp11(8547);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  row: {
    gap: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_16,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  connected: null,
  inputSurface: null,
  stored: null,
  hosts: null,
  hostsText: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.connected = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_4,
  bottom: nativeDefault.space.PX_4,
  left: 0,
  right: 0,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.inputSurface = rect;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.stored = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingStart: nativeDefault.space.PX_12,
  paddingEnd: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingStart: nativeDefault.space.PX_12,
  paddingEnd: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.hosts = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.hostsText = { flexShrink: 1 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretKeyRow.tsx");

export default function ConjureSecretKeyRow(onReplace) {
  ({ label, help, hosts, stored, replacing, required } = onReplace);
  if (required === undefined) {
    required = false;
  }
  ({ value, disabled, onChange, onFocus, onBlur, errorMessage } = onReplace);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.row, children: null };
  const obj2 = { label, help, status: null };
  let tmp2Result;
  if (stored) {
    const obj3 = { style: tmp.connected, children: null };
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    items = [React4(CircleCheckIcon.CircleCheckIcon, obj4)];
    const obj5 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: null };
    const intl = util.intl;
    obj5.children = intl.string(_modDef4245["6KzZZY"]);
    items[1] = React4(Text_Text.Text, obj5);
    obj3.children = items;
    tmp2Result = hasOwnProperty(View, obj3);
  }
  obj2.status = tmp2Result;
  const items1 = [React4(ConjureNativeFieldHeadingDefault, obj2), ,];
  if (stored) {
    if (!replacing) {
      if ("" === value) {
        let obj6 = { style: tmp.stored, children: null };
        const items2 = [
          React4(Text_Text.Text, {
            variant: "body-sm/normal",
            color: "text-muted",
            accessible: false,
            importantForAccessibility: "no",
            children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          }),
        ];
        const obj7 = {
          variant: "secondary",
          size: "sm",
          text: null,
          accessibilityLabel: null,
          disabled: null,
          onPress: null,
        };
        const intl3 = util.intl;
        obj7.text = intl3.string(_modDef4245.du47JY);
        const intl4 = util.intl;
        const obj8 = { label };
        obj7.accessibilityLabel = intl4.formatToPlainString(_modDef4245.hqR5SF, obj8);
        obj7.disabled = disabled;
        obj7.onPress = onReplace.onReplace;
        items2[1] = React4(components_Button_Button.Button, obj7);
        obj6.children = items2;
      }
      items1[1] = hasOwnProperty(View, obj6);
      let tmp2Result2 = null;
      if (null != hosts) {
        tmp2Result2 = null;
        if (hosts.length > 0) {
          const obj9 = { style: tmp.hosts, children: null };
          const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          const items3 = [React4(GlobeEarthIcon.GlobeEarthIcon, obj10)];
          const obj11 = { variant: "body-xs/normal", color: "text-muted", style: tmp.hostsText, children: null };
          const intl2 = util.intl;
          const obj12 = { hosts: hosts.join(", ") };
          obj11.children = intl2.formatToPlainString(_modDef4245.Ww9HFO, obj12);
          items3[1] = React4(Text_Text.Text, obj11);
          obj9.children = items3;
          tmp2Result2 = hasOwnProperty(View, obj9);
        }
      }
      items1[2] = tmp2Result2;
      obj.children = items1;
      return hasOwnProperty(View, obj);
    }
  }
  const items4 = [React4(View, { style: tmp.inputSurface })];
  const obj14 = {
    accessibilityLabel: label,
    accessibilityHint: help,
    secureTextEntry: true,
    revealable: true,
    autoComplete: "off",
    autoCapitalize: "none",
    autoCorrect: false,
    autoFocus: replacing,
    required: null,
    value: null,
    errorMessage: null,
    onChange: null,
    onFocus: null,
    onBlur: null,
    disabled: null,
  };
  if (required) {
    required = !stored;
  }
  const obj15 = { children: null };
  obj14.required = required;
  obj14.value = value;
  obj14.errorMessage = errorMessage;
  obj14.onChange = onChange;
  obj14.onFocus = onFocus;
  obj14.onBlur = onBlur;
  obj14.disabled = disabled;
  items4[1] = React4(TextInput.TextInput, obj14);
  obj15.children = items4;
  obj6 = obj15;
  const obj13 = { style: tmp.inputSurface };
}
