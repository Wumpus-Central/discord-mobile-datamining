// discord_app/design/void/Form/native/FormCTA.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import FormCheckbox2 from "../../../components/Forms/native/FormCheckbox.native.tsx";
import FormRowDefault from "FormRow.tsx";
import RowButton from "../../../components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { form: null, title: null, description: null, icon: null, completedIcon: null, completedText: null };
createStyles = {
  borderRadius: nativeDefault.radii.xs,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles.form = createStyles;
createStyles.title = {
  fontSize: nativeDefault.space.PX_16,
  lineHeight: 18,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
let obj1 = {
  fontSize: nativeDefault.space.PX_16,
  lineHeight: 18,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
createStyles.description = {
  fontSize: 12,
  lineHeight: 18,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontFamily: Fonts.PRIMARY_MEDIUM,
};
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
createStyles.icon = size;
createStyles.completedIcon = { opacity: 0.3 };
let obj2 = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
createStyles.completedText = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  ({ title, titleStyle, subtitle, completed, iconSource, trailing, onPress, onLongPress, variant } = arg0);
  ({ style, iconStyle, iconContainerStyle } = arg0);
  const tmp = closure_5();
  let tmp3Result = null;
  if (null != iconSource) {
    const items = [iconContainerStyle];
    let completedIcon = null;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    let obj = { style: null, children: null };
    items[1] = completedIcon;
    obj.style = items;
    obj = { style: null, source: null, size: null, disableColor: true };
    const items1 = [tmp.icon, iconStyle];
    obj.style = items1;
    obj.source = iconSource;
    obj.size = native.Icon.Sizes.CUSTOM;
    obj.children = jsx(native.Icon, { style: null, source: null, size: null, disableColor: true });
    tmp3Result = tmp3(View, obj);
  }
  let tmp9Result = null;
  if (undefined !== subtitle) {
    const items2 = [tmp.description];
    let completedText = null;
    if (completed) {
      completedText = tmp.completedText;
    }
    obj = { style: null, text: null };
    items2[1] = completedText;
    obj.style = items2;
    obj.text = subtitle;
    tmp9Result = jsx(FormRowDefault.SubLabel, { style: null, text: null });
  }
  if ("row-button" === variant) {
    let FormCheckbox = require;
    let obj4 = dependencyMap;
    const obj1 = {
      arrow: false,
      onPress,
      onLongPress,
      accessibilityState: null,
      label: null,
      subLabel: null,
      trailing: null,
      icon: null,
    };
    const obj2 = { checked: completed };
    obj1.accessibilityState = obj2;
    const items3 = [tmp.title, ,];
    let completedText1;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    const obj3 = { style: null, text: null };
    items3[1] = completedText1;
    items3[2] = titleStyle;
    obj3.style = items3;
    obj3.text = title;
    obj1.label = jsx(FormRowDefault.Label, { style: null, text: null });
    obj1.subLabel = tmp9Result;
    if (completed) {
      FormCheckbox = FormCheckbox(5617).FormCheckbox;
      obj4 = { checked: true };
      trailing = tmp16(FormCheckbox, obj4);
    } else if (trailing == null) {
      trailing = tmp16(tmp17(7137).Arrow, {});
    }
    obj1.trailing = trailing;
    obj1.icon = tmp3Result;
    jsx(RowButton.RowButton, {
      arrow: false,
      onPress,
      onLongPress,
      accessibilityState: null,
      label: null,
      subLabel: null,
      trailing: null,
      icon: null,
    });
    tmp17 = importDefault;
  } else {
    const obj5 = {
      start: true,
      end: true,
      variant,
      onPress,
      onLongPress,
      DEPRECATED_style: null,
      accessibilityState: null,
      label: null,
      subLabel: null,
      trailing: null,
      leading: null,
    };
    const items4 = [tmp.form, style];
    obj5.DEPRECATED_style = items4;
    const obj6 = { checked: completed };
    obj5.accessibilityState = obj6;
    const items5 = [tmp.title, ,];
    let completedText2;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    const obj7 = { style: null, text: null };
    items5[1] = completedText2;
    items5[2] = titleStyle;
    obj7.style = items5;
    obj7.text = title;
    obj5.label = jsx(FormRowDefault.Label, { style: null, text: null });
    obj5.subLabel = tmp9Result;
    if (completed) {
      let tmp20Result = tmp20(FormCheckbox2.FormCheckbox, { checked: true });
    } else {
      tmp20Result = trailing;
      if (trailing == null) {
        tmp20Result = tmp20(FormRowDefault.Arrow, {});
      }
    }
    obj5.trailing = tmp20Result;
    obj5.leading = tmp3Result;
    return jsx(FormRowDefault, {
      start: true,
      end: true,
      variant,
      onPress,
      onLongPress,
      DEPRECATED_style: null,
      accessibilityState: null,
      label: null,
      subLabel: null,
      trailing: null,
      leading: null,
    });
  }
}
