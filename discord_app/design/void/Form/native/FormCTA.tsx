// === Module 8046: FormCTA ===

// Module 8046 (FormCTA)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import FormCheckbox2 from "FormCheckbox" /* 5924 */;
import FormRowDefault from "FormRow" /* 6553 */;
import RowButton from "RowButton" /* 8047 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { form: { borderRadius: nativeDefault.radii.xs, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 }, title: null, description: null, icon: null, completedIcon: null, completedText: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.title = { fontSize: nativeDefault.space.PX_16, lineHeight: 18, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj4 = { fontSize: nativeDefault.space.PX_16, lineHeight: 18, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj2.description = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj2.icon = size;
obj2.completedIcon = { opacity: 0.3 };
let obj5 = { fontSize: 12, lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
obj2.completedText = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  ({ title, titleStyle, subtitle, completed, iconSource, trailing, onPress, onLongPress, variant } = arg0);
  ({ style, iconStyle, iconContainerStyle } = arg0);
  const tmp = closure_5();
  let tmp3Result = null;
  if (null != iconSource) {
    const items = [iconContainerStyle, ];
    let completedIcon = null;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    const obj = { style: null, children: null };
    items[1] = completedIcon;
    obj.style = items;
    const obj2 = { style: null, source: null, size: null, disableColor: true };
    const items1 = [tmp.icon, iconStyle];
    obj2.style = items1;
    obj2.source = iconSource;
    obj2.size = native.Icon.Sizes.CUSTOM;
    obj.children = jsx(native.Icon, { style: null, source: null, size: null, disableColor: true });
    tmp3Result = <View style={null}>{null}</View>;
  }
  let tmp9Result = null;
  if (undefined !== subtitle) {
    const items2 = [tmp.description, ];
    let completedText = null;
    if (completed) {
      completedText = tmp.completedText;
    }
    const obj3 = { style: null, text: null };
    items2[1] = completedText;
    obj3.style = items2;
    obj3.text = subtitle;
    tmp9Result = jsx(FormRowDefault.SubLabel, { style: null, text: null });
  }
  if ("row-button" === variant) {
    let FormCheckbox = require;
    const obj4 = { arrow: false, onPress, onLongPress, accessibilityState: null, label: null, subLabel: null, trailing: null, icon: null };
    const obj5 = { checked: completed };
    obj4.accessibilityState = obj5;
    const items3 = [tmp.title, , ];
    let completedText1;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    const obj6 = { style: null, text: null };
    items3[1] = completedText1;
    items3[2] = titleStyle;
    obj6.style = items3;
    obj6.text = title;
    obj4.label = jsx(FormRowDefault.Label, { style: null, text: null });
    obj4.subLabel = tmp9Result;
    if (completed) {
      FormCheckbox = FormCheckbox(5924).FormCheckbox;
      const obj7 = { checked: true };
      trailing = <FormCheckbox checked />;
    } else if (trailing == null) {
      trailing = jsx(FormRowDefault.Arrow, {});
    }
    obj4.trailing = trailing;
    obj4.icon = tmp3Result;
    jsx(RowButton.RowButton, { arrow: false, onPress, onLongPress, accessibilityState: null, label: null, subLabel: null, trailing: null, icon: null });
  } else {
    const obj8 = { start: true, end: true, variant, onPress, onLongPress, DEPRECATED_style: null, accessibilityState: null, label: null, subLabel: null, trailing: null, leading: null };
    const items4 = [tmp.form, style];
    obj8.DEPRECATED_style = items4;
    const obj9 = { checked: completed };
    obj8.accessibilityState = obj9;
    const items5 = [tmp.title, , ];
    let completedText2;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    const obj10 = { style: null, text: null };
    items5[1] = completedText2;
    items5[2] = titleStyle;
    obj10.style = items5;
    obj10.text = title;
    obj8.label = jsx(FormRowDefault.Label, { style: null, text: null });
    obj8.subLabel = tmp9Result;
    if (completed) {
      let tmp20Result = jsx(FormCheckbox2.FormCheckbox, { checked: true });
    } else {
      tmp20Result = trailing;
      if (trailing == null) {
        tmp20Result = jsx(FormRowDefault.Arrow, {});
      }
    }
    obj8.trailing = tmp20Result;
    obj8.leading = tmp3Result;
    return jsx(FormRowDefault, { start: true, end: true, variant, onPress, onLongPress, DEPRECATED_style: null, accessibilityState: null, label: null, subLabel: null, trailing: null, leading: null });
  }
};