// discord_app/design/void/Form/native/FormCTA.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../native.tsx";
import _modDef5539 from "FormRow.tsx";
import FormCheckbox2 from "../../../components/Forms/native/FormCheckbox.native.tsx";
import RowButtonWrapper from "../../../components/TableRow/native/RowButton.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { form: null, title: null, description: null, icon: null, completedIcon: null, completedText: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: ThemesDefault.space.PX_16, lineHeight: 18, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj1 = { fontSize: ThemesDefault.space.PX_16, lineHeight: 18, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[2] = { fontSize: 12, lineHeight: 18, color: ThemesDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj2 = { fontSize: 12, lineHeight: 18, color: ThemesDefault.colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_MEDIUM };
createCacheKey[3] = { width: ThemesDefault.space.PX_40, height: ThemesDefault.space.PX_40 };
createCacheKey[4] = { opacity: 0.3 };
let obj3 = { width: ThemesDefault.space.PX_40, height: ThemesDefault.space.PX_40 };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_MUTED };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj4 = { color: ThemesDefault.colors.TEXT_MUTED };
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCTA.tsx");

export default function FormCTA(arg0) {
  ({ title, titleStyle, subtitle, completed, iconSource, trailing, onPress, onLongPress, variant } = arg0);
  ({ style, iconStyle, iconContainerStyle } = arg0);
  const tmp = callback();
  let tmp3Result = null;
  if (null != iconSource) {
    const items = [iconContainerStyle, ];
    let completedIcon = null;
    if (completed) {
      completedIcon = tmp.completedIcon;
    }
    let obj = { style: null, children: null };
    items[1] = completedIcon;
    obj[0] = items;
    obj = { style: null, source: null, size: null, disableColor: true };
    const items1 = [tmp.icon, iconStyle];
    obj[0] = items1;
    obj[1] = iconSource;
    obj[2] = Button.Icon.Sizes.CUSTOM;
    obj[1] = jsx(Button.Icon, { style: null, source: null, size: null, disableColor: true });
    tmp3Result = tmp3(View, obj);
    const tmp4 = View;
  }
  let tmp9Result = null;
  if (undefined !== subtitle) {
    const items2 = [tmp.description, ];
    let completedText = null;
    if (completed) {
      completedText = tmp.completedText;
    }
    obj = { style: null, text: null };
    items2[1] = completedText;
    obj[0] = items2;
    obj[1] = subtitle;
    tmp9Result = jsx(_modDef5539.SubLabel, { style: null, text: null });
    const tmp9 = jsx;
  }
  if ("row-button" === variant) {
    let FormCheckbox = require;
    let obj4 = dependencyMap;
    obj1 = { arrow: false, onPress: null, onLongPress: null, accessibilityState: null, label: null, subLabel: null, trailing: null, icon: null };
    obj1[1] = onPress;
    obj1[2] = onLongPress;
    const obj2 = { checked: null };
    obj2[0] = completed;
    obj1[3] = obj2;
    const items3 = [tmp.title, , ];
    let completedText1;
    if (completed) {
      completedText1 = tmp.completedText;
    }
    const obj3 = { style: null, text: null };
    items3[1] = completedText1;
    items3[2] = titleStyle;
    obj3[0] = items3;
    obj3[1] = title;
    obj1[4] = jsx(_modDef5539.Label, { style: null, text: null });
    obj1[5] = tmp9Result;
    if (completed) {
      FormCheckbox = FormCheckbox(8187).FormCheckbox;
      obj4 = { checked: true };
      trailing = tmp16(FormCheckbox, obj4);
    } else if (trailing == null) {
      trailing = tmp16(tmp17(5539).Arrow, {});
    }
    obj1[6] = trailing;
    obj1[7] = tmp3Result;
    jsx(RowButtonWrapper.RowButton, { arrow: false, onPress: null, onLongPress: null, accessibilityState: null, label: null, subLabel: null, trailing: null, icon: null });
    tmp17 = importDefault;
  } else {
    const obj5 = { start: true, end: true, variant: null, onPress: null, onLongPress: null, DEPRECATED_style: null, accessibilityState: null, label: null, subLabel: null, trailing: null, leading: null };
    obj5[2] = variant;
    obj5[3] = onPress;
    obj5[4] = onLongPress;
    const items4 = [tmp.form, style];
    obj5[5] = items4;
    const obj6 = { checked: null };
    obj6[0] = completed;
    obj5[6] = obj6;
    const items5 = [tmp.title, , ];
    let completedText2;
    if (completed) {
      completedText2 = tmp.completedText;
    }
    const obj7 = { style: null, text: null };
    items5[1] = completedText2;
    items5[2] = titleStyle;
    obj7[0] = items5;
    obj7[1] = title;
    obj5[7] = jsx(_modDef5539.Label, { style: null, text: null });
    obj5[8] = tmp9Result;
    if (completed) {
      let tmp20Result = tmp20(FormCheckbox2.FormCheckbox, { checked: true });
    } else {
      tmp20Result = trailing;
      if (trailing == null) {
        tmp20Result = tmp20(_modDef5539.Arrow, {});
      }
    }
    obj5[9] = tmp20Result;
    obj5[10] = tmp3Result;
    return jsx(_modDef5539, { start: true, end: true, variant: null, onPress: null, onLongPress: null, DEPRECATED_style: null, accessibilityState: null, label: null, subLabel: null, trailing: null, leading: null });
  }
};