// discord_app/design/components/TableRow/native/TableRow.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import set from "../../../../utils/PlatformUtils.tsx";
import map from "../../../tokens/native/useToken.tsx";
import getFontScale from "../../../../modules/screen/native/useFontScale.tsx";
import context2 from "TableRowGroupContext.native.tsx";
import PressableCard from "../../Card/native/Card.native.tsx";
import TableRowTrailingText from "TableRowTrailingText.native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
class TableRow {
  constructor(arg0) {
    ({ icon, disabled } = global);
    ({ label, subLabel, trailing, arrow, onPress } = global);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = global);
    if (variant === undefined) {
      variant = "default";
    }
    ({ draggable, dragHandlePressableProps, height } = global);
    merged = Object.assign(global, Object.create(null));
    tmp2 = closure_0;
    tmp3 = closure_2;
    context = closure_3.useContext(require("context").TableRowGroupContext);
    tmp5 = !context;
    if (!context) {
      flag = true;
      tmp5 = true === end;
    }
    tmp2Result = require("map");
    tmp7 = jsx;
    token = tmp2Result.useToken(require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS);
    obj = {
      radius: token,
      shadow: "none",
      border: "none",
      variant: "muted",
      start: null,
      end: null,
      onPress: null,
      disabled: null,
      style: null,
    };
    tmp8 = !context;
    if (!context) {
      flag2 = true;
      tmp8 = true === start;
    }
    obj[4] = tmp8;
    obj[5] = tmp5;
    obj[6] = onPress;
    obj[7] = disabled;
    obj[8] = closure_9;
    merged1 = Object.assign(merged);
    obj.children = tmp7(TableRowInner, {
      height,
      label,
      subLabel,
      icon,
      trailing,
      arrow,
      disabled,
      labelLineClamp,
      subLabelLineClamp,
      variant,
      draggable,
      dragHandlePressableProps,
    });
    tmp7Result = tmp7(require("PressableCard").InternalCard, obj);
    tmp11 = tmp7Result;
    if (!context) {
      tmp11 = tmp7Result;
      if (!tmp5) {
        tmp12 = jsxs;
        tmp13 = Fragment;
        obj1 = { children: null };
        items = [,];
        items[0] = tmp7Result;
        obj2 = { adjustSpacingForIcon: null };
        obj2[0] = null != icon;
        items[1] = tmp7(require("TableRowDivider").TableRowDivider, obj2);
        obj1[0] = items;
        tmp11 = jsxs(Fragment, obj1);
      }
    }
    return tmp11;
  }
}
class TableRowInner {
  constructor(arg0) {
    ({ label, subLabel, icon, trailing, arrow, variant } = global);
    ({ labelLineClamp, subLabelLineClamp, disabled } = global);
    if (variant === undefined) {
      variant = "default";
    }
    flag = global.draggable;
    if (flag === undefined) {
      flag = false;
    }
    dragHandlePressableProps = global.dragHandlePressableProps;
    obj = closure_3;
    ({ borderRadius, height } = global);
    tmp = undefined;
    if (closure_3.isValidElement(trailing)) {
      tmp2 = closure_0;
      tmp3 = closure_2;
      if (trailing.type === require("TableRowTrailingText").TableRowTrailingText) {
        tmp = trailing;
      }
    }
    tmp4 = closure_0;
    tmp5 = closure_2;
    obj2 = require("getFontScale");
    fontScale = obj2.useFontScale();
    obj3 = require("set");
    if (obj3.isAndroid()) {
      num2 = 1.2;
      tmp7 = fontScale > 1.2;
    } else {
      num = 1.5;
      tmp7 = fontScale > 1.5;
    }
    tmp8 = closure_10(true === disabled, null != tmp, tmp7);
    tmp4Result = require("map");
    token = tmp4Result.useToken(require("Themes").modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    tmp4Result1 = require("map");
    tmp11 = jsxs;
    tmp12 = View;
    obj = { style: items, children: null };
    items = [,];
    items[0] = tmp8.row;
    items[1] = { borderRadius, height };
    tmp13 = flag;
    token1 = tmp4Result1.useToken(require("Themes").modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      tmp14 = jsx;
      tmp15 = Pressable;
      obj1 = {};
      tmp16 = obj1;
      tmp17 = dragHandlePressableProps;
      merged = Object.assign(dragHandlePressableProps);
      obj2 = { size: "xs", style: null };
      obj2[1] = tmp8.dragHandle;
      obj1.children = jsx(require("DragIcon").DragIcon, obj2);
      tmp13 = jsx(Pressable, obj1);
    }
    items1 = [, , , ,];
    items1[0] = tmp13;
    tmp19 = null != icon;
    if (tmp19) {
      tmp20 = jsx;
      obj3 = { style: null, children: null };
      obj3[0] = tmp8.iconContainer;
      obj3[1] = icon;
      tmp19 = jsx(tmp12, obj3);
    }
    items1[1] = tmp19;
    obj4 = { style: tmp8.content, children: null };
    obj5 = { style: tmp8.labels, accessible: null, accessibilityRole: null, children: null };
    tmp21 = flag;
    obj5[1] = tmp21;
    str = undefined;
    if (flag) {
      str = "text";
    }
    obj5[2] = str;
    tmp23Result = label;
    if (!obj.isValidElement(label)) {
      tmp23 = jsx;
      obj6 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj6[0] = token;
      str2 = "text-feedback-critical";
      str3 = "danger";
      if ("danger" !== variant) {
        str2 = token1;
      }
      obj6[1] = str2;
      obj6[2] = labelLineClamp;
      obj6[4] = label;
      tmp23Result = tmp23(require("Text").Text, obj6);
    }
    items2 = [,];
    items2[0] = tmp23Result;
    tmp24 = null != subLabel;
    if (tmp24) {
      tmp26Result = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp26 = jsx;
        str4 = "text-subtle";
        str5 = "danger";
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        obj7 = { variant: "text-xs/medium", color: null, lineClamp: null, includeFontPadding: true, children: null };
        obj7[1] = str4;
        obj7[2] = subLabelLineClamp;
        obj7[4] = subLabel;
        tmp26Result = tmp26(require("Text").Text, obj7);
      }
      tmp24 = tmp26Result;
    }
    items2[1] = tmp24;
    obj5[3] = items2;
    items3 = [,];
    items3[0] = tmp11(tmp12, obj5);
    tmp27 = null != tmp;
    if (tmp27) {
      tmp28 = jsx;
      obj8 = { style: null, children: null };
      items4 = [,];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
      obj8[0] = items4;
      obj8[1] = tmp;
      tmp27 = jsx(tmp12, obj8);
    }
    items3[1] = tmp27;
    obj4[1] = items3;
    items1[2] = tmp11(tmp12, obj4);
    tmp29 = null != trailing && null == tmp;
    if (tmp29) {
      tmp30 = jsx;
      obj9 = { style: null, children: null };
      obj9[0] = tmp8.trailing;
      obj9[1] = trailing;
      tmp29 = jsx(tmp12, obj9);
    }
    items1[3] = tmp29;
    if (arrow) {
      tmp31 = jsx;
      arrow = jsx(require("TableRowArrow").TableRowArrow, {});
    }
    items1[4] = arrow;
    obj[1] = items1;
    return tmp11(tmp12, obj);
  }
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let closure_9 = { padding: 0 };
let closure_10 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let obj = {
    padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING,
    minHeight: ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    opacity: null,
    borderRadius: null,
  };
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  obj = {
    row: obj,
    iconContainer: null,
    trailing: null,
    content: null,
    labels: num,
    trailingText: tmp(576).radii.md,
    dragHandle: null,
  };
  obj = {
    minWidth: tmp(576).modules.mobile.TABLE_ROW_ICON_SIZE,
    marginEnd: tmp(576).modules.mobile.TABLE_ROW_PADDING,
    alignItems: "center",
    justifyContent: "center",
  };
  obj[1] = obj;
  obj[2] = { marginStart: 18 };
  let str = "row";
  if (arg2) {
    str = "column";
  }
  obj1 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
  let str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  obj1[3] = str2;
  obj[3] = obj1;
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  const obj2 = { width: str3, flexGrow: null, flexShrink: null, maxWidth: null };
  let num2;
  if (arg1) {
    if (!arg2) {
      num2 = 1;
    }
  }
  obj2[1] = num2;
  let num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  obj2[2] = num3;
  let str4;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  obj2[3] = str4;
  obj[4] = obj2;
  let num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  obj[5] = { flexShrink: 1, marginStart: num4 };
  obj[6] = { marginEnd: 8 };
  return obj;
});
TableRow.Icon = require("TableRowIcon").TableRowIcon;
TableRow.Arrow = require("TableRowArrow").TableRowArrow;
TableRow.TrailingText = require("TableRowTrailingText").TableRowTrailingText;
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
