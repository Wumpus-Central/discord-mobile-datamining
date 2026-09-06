// discord_app/design/components/TableRow/native/TableRow.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import useFontScale from "../../../../modules/screen/native/useFontScale.tsx";
import TableRowDivider from "TableRowDivider.native.tsx";
import TableRowGroupContext from "TableRowGroupContext.native.tsx";
import Card from "../../Card/native/Card.native.tsx";
import TableRowArrow from "TableRowArrow.native.tsx";
import TableRowTrailingText from "TableRowTrailingText.native.tsx";
import DragIcon from "../../Icon/native/redesign/generated/DragIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
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
    merged = Object.assign(
      global,
      Object.assign({
        label: 0,
        subLabel: 0,
        icon: 0,
        trailing: 0,
        arrow: 0,
        onPress: 0,
        disabled: 0,
        start: 0,
        end: 0,
        labelLineClamp: 0,
        subLabelLineClamp: 0,
        variant: 0,
        draggable: 0,
        dragHandlePressableProps: 0,
        height: 0,
      }),
    );
    tmp2 = closure_0;
    tmp3 = closure_2;
    context = closure_3.useContext(closure_0(closure_2[5]).TableRowGroupContext);
    tmp5 = !context;
    if (!context) {
      flag = true;
      tmp5 = true === end;
    }
    tmp2Result = tmp2(tmp3[6]);
    tmp7 = jsx;
    token = tmp2Result.useToken(closure_1(tmp3[4]).modules.mobile.TABLE_ROW_BORDER_RADIUS);
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
    obj.start = tmp8;
    obj.end = tmp5;
    obj.onPress = onPress;
    obj.disabled = disabled;
    obj.style = closure_9;
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
    tmp7Result = tmp7(tmp2(tmp3[7]).InternalCard, obj);
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
        obj2.adjustSpacingForIcon = null != icon;
        items[1] = tmp7(tmp2(tmp3[8]).TableRowDivider, obj2);
        obj1.children = items;
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
      if (trailing.type === closure_0(closure_2[11]).TableRowTrailingText) {
        tmp = trailing;
      }
    }
    tmp4 = closure_0;
    tmp5 = closure_2;
    obj2 = closure_0(closure_2[12]);
    fontScale = obj2.useFontScale();
    obj3 = closure_0(closure_2[13]);
    if (obj3.isAndroid()) {
      num2 = 1.2;
      tmp7 = fontScale > 1.2;
    } else {
      num = 1.5;
      tmp7 = fontScale > 1.5;
    }
    tmp8 = closure_10(true === disabled, null != tmp, tmp7);
    tmp4Result = tmp4(tmp5[6]);
    token = tmp4Result.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    tmp4Result1 = tmp4(tmp5[6]);
    tmp11 = jsxs;
    tmp12 = View;
    obj = { style: null, children: null };
    items = [,];
    items[0] = tmp8.row;
    items[1] = { borderRadius, height };
    obj.style = items;
    tmp13 = flag;
    token1 = tmp4Result1.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      tmp14 = jsx;
      tmp15 = Pressable;
      obj1 = {};
      tmp16 = obj1;
      tmp17 = dragHandlePressableProps;
      merged = Object.assign(dragHandlePressableProps);
      obj2 = { size: "xs", style: null };
      obj2.style = tmp8.dragHandle;
      obj1.children = jsx(tmp4(tmp5[14]).DragIcon, obj2);
      tmp13 = jsx(Pressable, obj1);
    }
    items1 = [, , , ,];
    items1[0] = tmp13;
    tmp19 = null != icon;
    if (tmp19) {
      tmp20 = jsx;
      obj3 = { style: null, children: null };
      obj3.style = tmp8.iconContainer;
      obj3.children = icon;
      tmp19 = jsx(tmp12, obj3);
    }
    items1[1] = tmp19;
    obj4 = { style: tmp8.content, children: null };
    obj5 = { style: tmp8.labels, accessible: null, accessibilityRole: null, children: null };
    tmp21 = flag;
    obj5.accessible = tmp21;
    str = undefined;
    if (flag) {
      str = "text";
    }
    obj5.accessibilityRole = str;
    tmp23Result = label;
    if (!obj.isValidElement(label)) {
      tmp23 = jsx;
      obj6 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj6.variant = token;
      str2 = "text-feedback-critical";
      str3 = "danger";
      if ("danger" !== variant) {
        str2 = token1;
      }
      obj6.color = str2;
      obj6.lineClamp = labelLineClamp;
      obj6.children = label;
      tmp23Result = tmp23(tmp4(tmp5[15]).Text, obj6);
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
        obj7.color = str4;
        obj7.lineClamp = subLabelLineClamp;
        obj7.children = subLabel;
        tmp26Result = tmp26(tmp4(tmp5[15]).Text, obj7);
      }
      tmp24 = tmp26Result;
    }
    items2[1] = tmp24;
    obj5.children = items2;
    items3 = [,];
    items3[0] = tmp11(tmp12, obj5);
    tmp27 = null != tmp;
    if (tmp27) {
      tmp28 = jsx;
      obj8 = { style: null, children: null };
      items4 = [,];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
      obj8.style = items4;
      obj8.children = tmp;
      tmp27 = jsx(tmp12, obj8);
    }
    items3[1] = tmp27;
    obj4.children = items3;
    items1[2] = tmp11(tmp12, obj4);
    tmp29 = null != trailing && null == tmp;
    if (tmp29) {
      tmp30 = jsx;
      obj9 = { style: null, children: null };
      obj9.style = tmp8.trailing;
      obj9.children = trailing;
      tmp29 = jsx(tmp12, obj9);
    }
    items1[3] = tmp29;
    if (arrow) {
      tmp31 = jsx;
      arrow = jsx(tmp4(tmp5[10]).TableRowArrow, {});
    }
    items1[4] = arrow;
    obj.children = items1;
    return tmp11(tmp12, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const React7 = { padding: 0 };
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let obj = {
    padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
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
    row: null,
    iconContainer: null,
    trailing: null,
    content: null,
    labels: null,
    trailingText: null,
    dragHandle: null,
    opacity: num,
    borderRadius: nativeDefault.radii.md,
  };
  obj.row = obj;
  obj = {
    minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
    marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.iconContainer = obj;
  obj.trailing = { marginStart: 18 };
  let str = "row";
  if (arg2) {
    str = "column";
  }
  const obj1 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
  let str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  obj1.alignItems = str2;
  obj.content = obj1;
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
  obj2.flexGrow = num2;
  let num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  obj2.flexShrink = num3;
  let str4;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  obj2.maxWidth = str4;
  obj.labels = obj2;
  let num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  obj.trailingText = { flexShrink: 1, marginStart: num4 };
  obj.dragHandle = { marginEnd: 8 };
  return obj;
});
TableRow.Icon = fn(5611).TableRowIcon;
TableRow.Arrow = fn(5612).TableRowArrow;
TableRow.TrailingText = fn(5614).TableRowTrailingText;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };
