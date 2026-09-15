// === Module 5690: TableRow ===

// Module 5690 (TableRow)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4341 */;
import Text_Text from "Text/Text" /* 4635 */;
import useFontScale from "useFontScale" /* 5066 */;
import TableRowDivider from "TableRowDivider" /* 5687 */;
import TableRowGroupContext from "TableRowGroupContext" /* 5691 */;
import Card from "Card" /* 5692 */;
import TableRowArrow from "TableRowArrow" /* 5697 */;
import TableRowTrailingText from "TableRowTrailingText" /* 5699 */;
import DragIcon from "DragIcon" /* 5700 */;
import noop from "module_19" /* 19 */;

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
    merged = Object.assign(global, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 }));
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
    obj1 = { radius: token, shadow: "none", border: "none", variant: "muted", start: null, end: null, onPress: null, disabled: null, style: null };
    tmp8 = !context;
    if (!context) {
      flag2 = true;
      tmp8 = true === start;
    }
    obj1.start = tmp8;
    obj1.end = tmp5;
    obj1.onPress = onPress;
    obj1.disabled = disabled;
    obj1.style = closure_9;
    merged1 = Object.assign(merged);
    obj1.children = tmp7(TableRowInner, { height, label, subLabel, icon, trailing, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps });
    tmp7Result = tmp7(tmp2(tmp3[7]).InternalCard, obj1);
    tmp11 = tmp7Result;
    if (!context) {
      tmp11 = tmp7Result;
      if (!tmp5) {
        tmp12 = jsxs;
        tmp13 = Fragment;
        obj5 = { children: null };
        items = [, ];
        items[0] = tmp7Result;
        obj6 = { adjustSpacingForIcon: null };
        obj6.adjustSpacingForIcon = null != icon;
        items[1] = tmp7(tmp2(tmp3[8]).TableRowDivider, obj6);
        obj5.children = items;
        tmp11 = jsxs(Fragment, obj5);
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
    obj1 = { style: null, children: null };
    items = [, ];
    items[0] = tmp8.row;
    items[1] = { borderRadius, height };
    obj1.style = items;
    tmp13 = flag;
    token1 = tmp4Result1.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      tmp14 = jsx;
      tmp15 = Pressable;
      obj16 = {};
      tmp16 = obj16;
      tmp17 = dragHandlePressableProps;
      merged = Object.assign(dragHandlePressableProps);
      obj17 = { size: "xs", style: null };
      obj17.style = tmp8.dragHandle;
      obj16.children = jsx(tmp4(tmp5[14]).DragIcon, obj17);
      tmp13 = jsx(Pressable, obj16);
    }
    items1 = [, , , , ];
    items1[0] = tmp13;
    tmp19 = null != icon;
    if (tmp19) {
      tmp20 = jsx;
      obj18 = { style: null, children: null };
      obj18.style = tmp8.iconContainer;
      obj18.children = icon;
      tmp19 = jsx(tmp12, obj18);
    }
    items1[1] = tmp19;
    obj19 = { style: tmp8.content, children: null };
    obj20 = { style: tmp8.labels, accessible: null, accessibilityRole: null, children: null };
    tmp21 = flag;
    obj20.accessible = tmp21;
    str = undefined;
    if (flag) {
      str = "text";
    }
    obj20.accessibilityRole = str;
    tmp23Result = label;
    if (!obj.isValidElement(label)) {
      tmp23 = jsx;
      obj21 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj21.variant = token;
      str2 = "text-feedback-critical";
      str3 = "danger";
      if ("danger" !== variant) {
        str2 = token1;
      }
      obj21.color = str2;
      obj21.lineClamp = labelLineClamp;
      obj21.children = label;
      tmp23Result = tmp23(tmp4(tmp5[15]).Text, obj21);
    }
    items2 = [, ];
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
        obj22 = { variant: "text-xs/medium", color: null, lineClamp: null, includeFontPadding: true, children: null };
        obj22.color = str4;
        obj22.lineClamp = subLabelLineClamp;
        obj22.children = subLabel;
        tmp26Result = tmp26(tmp4(tmp5[15]).Text, obj22);
      }
      tmp24 = tmp26Result;
    }
    items2[1] = tmp24;
    obj20.children = items2;
    items3 = [, ];
    items3[0] = tmp11(tmp12, obj20);
    tmp27 = null != tmp;
    if (tmp27) {
      tmp28 = jsx;
      obj23 = { style: null, children: null };
      items4 = [, ];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
      obj23.style = items4;
      obj23.children = tmp;
      tmp27 = jsx(tmp12, obj23);
    }
    items3[1] = tmp27;
    obj19.children = items3;
    items1[2] = tmp11(tmp12, obj19);
    tmp29 = null != trailing && null == tmp;
    if (tmp29) {
      tmp30 = jsx;
      obj24 = { style: null, children: null };
      obj24.style = tmp8.trailing;
      obj24.children = trailing;
      tmp29 = jsx(tmp12, obj24);
    }
    items1[3] = tmp29;
    if (arrow) {
      tmp31 = jsx;
      arrow = jsx(tmp4(tmp5[10]).TableRowArrow, {});
    }
    items1[4] = arrow;
    obj1.children = items1;
    return tmp11(tmp12, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const React7 = { padding: 0 };
const createStyles = fn(4639);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: null, borderRadius: null };
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  const obj2 = { row: null, iconContainer: null, trailing: null, content: null, labels: null, trailingText: null, dragHandle: null };
  obj.opacity = num;
  obj.borderRadius = nativeDefault.radii.md;
  obj2.row = obj;
  obj2.iconContainer = { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
  obj2.trailing = { marginStart: 18 };
  let str = "row";
  if (arg2) {
    str = "column";
  }
  const obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
  let str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  obj4.alignItems = str2;
  obj2.content = obj4;
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  const obj5 = { width: str3, flexGrow: null, flexShrink: null, maxWidth: null };
  let num2;
  if (arg1) {
    if (!arg2) {
      num2 = 1;
    }
  }
  obj5.flexGrow = num2;
  let num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  obj5.flexShrink = num3;
  let str4;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  obj5.maxWidth = str4;
  obj2.labels = obj5;
  let num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  obj2.trailingText = { flexShrink: 1, marginStart: num4 };
  obj2.dragHandle = { marginEnd: 8 };
  return obj2;
});
TableRow.Icon = fn(5696).TableRowIcon;
TableRow.Arrow = fn(5697).TableRowArrow;
TableRow.TrailingText = fn(5699).TableRowTrailingText;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };