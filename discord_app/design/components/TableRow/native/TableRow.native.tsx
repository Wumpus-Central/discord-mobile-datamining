// === Module 7041: TableRow ===

// Module 7041 (TableRow)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useToken from "useToken" /* 5726 */;
import Text_Text from "Text/Text" /* 5753 */;
import useFontScale from "useFontScale" /* 5768 */;
import TableRowDivider from "TableRowDivider" /* 7038 */;
import TableRowGroupContext from "TableRowGroupContext" /* 7042 */;
import Card from "Card" /* 7043 */;
import TableRowArrow from "TableRowArrow" /* 7050 */;
import TableRowTrailingText from "TableRowTrailingText" /* 7052 */;
import Badge from "Badge" /* 7053 */;
import TableRowBadge from "TableRowBadge" /* 7055 */;
import DragIcon from "DragIcon" /* 7056 */;
import noop from "module_19" /* 19 */;

require = fn;
class TableRow {
  constructor(arg0) {
    ({ icon, disabled } = global);
    ({ label, subLabel, trailing, badge, arrow, onPress } = global);
    if (disabled === undefined) {
      disabled = false;
    }
    ({ variant, start, end, labelLineClamp, subLabelLineClamp } = global);
    if (variant === undefined) {
      variant = "default";
    }
    ({ draggable, dragHandlePressableProps, height } = global);
    merged = Object.assign(global, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, badge: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 }));
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
    obj1.children = tmp7(TableRowInner, { height, label, subLabel, icon, trailing, badge, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps });
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
    ({ label, subLabel, icon, trailing, badge, arrow, variant } = global);
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
    tmp9 = null;
    if (null != badge) {
      tmp10 = jsx;
      obj1 = {};
      tmp4Result = tmp4(tmp5[15]);
      tmp11 = obj1;
      merged = Object.assign(tmp4Result.resolveTableRowBadgeProps(badge));
      tmp9 = jsx(tmp4(tmp5[14]).Badge, obj1);
    }
    tmp4Result1 = tmp4(tmp5[6]);
    token = tmp4Result1.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    tmp4Result2 = tmp4(tmp5[6]);
    tmp15 = jsxs;
    tmp16 = View;
    obj21 = { style: null, children: null };
    items = [, ];
    items[0] = tmp8.row;
    items[1] = { borderRadius, height };
    obj21.style = items;
    tmp17 = flag;
    token1 = tmp4Result2.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      tmp18 = jsx;
      tmp19 = Pressable;
      obj22 = {};
      tmp20 = obj22;
      tmp21 = dragHandlePressableProps;
      merged1 = Object.assign(dragHandlePressableProps);
      obj23 = { size: "xs", style: null };
      obj23.style = tmp8.dragHandle;
      obj22.children = jsx(tmp4(tmp5[16]).DragIcon, obj23);
      tmp17 = jsx(Pressable, obj22);
    }
    items1 = [, , , , , ];
    items1[0] = tmp17;
    tmp23 = null != icon;
    if (tmp23) {
      tmp24 = jsx;
      obj24 = { style: null, children: null };
      obj24.style = tmp8.iconContainer;
      obj24.children = icon;
      tmp23 = jsx(tmp16, obj24);
    }
    items1[1] = tmp23;
    obj25 = { style: tmp8.content, children: null };
    obj26 = { style: tmp8.labels, accessible: null, accessibilityRole: null, children: null };
    tmp25 = flag;
    obj26.accessible = tmp25;
    str = undefined;
    if (flag) {
      str = "text";
    }
    obj26.accessibilityRole = str;
    tmp27Result = label;
    if (!obj.isValidElement(label)) {
      tmp27 = jsx;
      obj27 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj27.variant = token;
      str2 = "text-feedback-critical";
      str3 = "danger";
      if ("danger" !== variant) {
        str2 = token1;
      }
      obj27.color = str2;
      obj27.lineClamp = labelLineClamp;
      obj27.children = label;
      tmp27Result = tmp27(tmp4(tmp5[17]).Text, obj27);
    }
    items2 = [, ];
    items2[0] = tmp27Result;
    tmp28 = null != subLabel;
    if (tmp28) {
      tmp30Result = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp30 = jsx;
        str4 = "text-subtle";
        str5 = "danger";
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        obj28 = { variant: "body-xs/medium", color: null, lineClamp: null, includeFontPadding: true, children: null };
        obj28.color = str4;
        obj28.lineClamp = subLabelLineClamp;
        obj28.children = subLabel;
        tmp30Result = tmp30(tmp4(tmp5[17]).Text, obj28);
      }
      tmp28 = tmp30Result;
    }
    items2[1] = tmp28;
    obj26.children = items2;
    items3 = [, ];
    items3[0] = tmp15(tmp16, obj26);
    tmp31 = null != tmp;
    if (!tmp31) {
      items3[1] = tmp31;
      obj25.children = items3;
      items1[2] = tmp15(tmp16, obj25);
      tmp36 = null != tmp9 && null == tmp;
      if (tmp36) {
        tmp37 = jsx;
        obj29 = { style: null, children: null };
        obj29.style = tmp8.badge;
        obj29.children = tmp9;
        tmp36 = jsx(tmp16, obj29);
      }
      items1[3] = tmp36;
      tmp39Result = null != trailing && null == tmp;
      if (tmp39Result) {
        items4 = [, ];
        items4[0] = tmp8.trailing;
        trailingAfterBadge = null != tmp9;
        tmp39 = jsx;
        if (trailingAfterBadge) {
          trailingAfterBadge = tmp8.trailingAfterBadge;
        }
        obj30 = { style: null, children: null };
        items4[1] = trailingAfterBadge;
        obj30.style = items4;
        obj30.children = trailing;
        tmp39Result = tmp39(tmp16, obj30);
      }
      items1[4] = tmp39Result;
      if (arrow) {
        tmp40 = jsx;
        arrow = jsx(tmp4(tmp5[10]).TableRowArrow, {});
      }
      items1[5] = arrow;
      obj21.children = items1;
      return tmp15(tmp16, obj21);
    } else {
      if (null != tmp9) {
        obj31 = { style: null, children: null };
        items5 = [, , ];
        ({ trailing: arr6[0], trailingText: arr6[1], trailingTextWithBadge: arr6[2] } = tmp8);
        obj31.style = items5;
        items6 = [, ];
        items6[0] = tmp9;
        tmp34 = jsx;
        obj32 = { style: null, children: null };
        obj32.style = tmp8.trailingTextContent;
        obj32.children = tmp;
        items6[1] = jsx(tmp16, obj32);
        obj31.children = items6;
        tmp15Result = tmp15(tmp16, obj31);
      } else {
        tmp32 = jsx;
        obj33 = { style: null, children: null };
        items7 = [, ];
        ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
        obj33.style = items7;
        obj33.children = tmp;
        tmp15Result = jsx(tmp16, obj33);
      }
      tmp35 = tmp15Result;
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const React6 = { padding: 0 };
const createStyles = fn(5142);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: null, borderRadius: null };
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  const obj2 = { row: null, iconContainer: null, trailing: null, trailingAfterBadge: null, badge: null, trailingTextWithBadge: null, trailingTextContent: null, content: null, labels: null, trailingText: null, dragHandle: null };
  obj.opacity = num;
  obj.borderRadius = nativeDefault.radii.md;
  obj2.row = obj;
  obj2.iconContainer = { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
  obj2.trailing = { marginStart: 18 };
  obj2.trailingAfterBadge = { marginStart: 8 };
  obj2.badge = { marginStart: 18, flexShrink: 0 };
  obj2.trailingTextWithBadge = { flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.trailingTextContent = { flexShrink: 1 };
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
TableRow.Icon = fn(7049).TableRowIcon;
TableRow.Arrow = fn(7050).TableRowArrow;
TableRow.TrailingText = fn(7052).TableRowTrailingText;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };