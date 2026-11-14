// === Module 7443: TableRow ===

// Module 7443 (TableRow)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useToken from "useToken" /* 5902 */;
import Text_Text from "Text/Text" /* 5929 */;
import useFontScale from "useFontScale" /* 5944 */;
import TableRowGroupContext from "TableRowGroupContext" /* 7444 */;
import Card from "Card" /* 7445 */;
import TableRowDivider from "TableRowDivider" /* 7453 */;
import TableRowArrow from "TableRowArrow" /* 7456 */;
import TableRowTrailingText from "TableRowTrailingText" /* 7458 */;
import Badge from "Badge" /* 7459 */;
import TableRowBadge from "TableRowBadge" /* 7461 */;
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
    draggable = global.draggable;
    merged = Object.assign(global, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, badge: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, height: 0 }));
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
    obj1 = { radius: token, shadow: "none", border: "none", padding: "none", variant: "muted", start: null, end: null, onPress: null, disabled: null, draggable: null };
    tmp8 = !context;
    if (!context) {
      flag2 = true;
      tmp8 = true === start;
    }
    obj1.start = tmp8;
    obj1.end = tmp5;
    obj1.onPress = onPress;
    obj1.disabled = disabled;
    obj1.draggable = draggable;
    merged1 = Object.assign(merged);
    obj1.children = tmp7(TableRowInner, { height: global.height, label, subLabel, icon, trailing, badge, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable });
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
        obj6 = { adjustSpacingForIcon: null, adjustSpacingForDragHandle: null };
        obj6.adjustSpacingForIcon = null != icon;
        obj6.adjustSpacingForDragHandle = draggable;
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
    tmp8 = closure_8(true === disabled, true === flag, null != tmp, tmp7);
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
    obj19 = { style: null, children: null };
    items = [, ];
    items[0] = tmp8.row;
    items[1] = { borderRadius, height };
    obj19.style = items;
    tmp17 = null != icon;
    token1 = tmp4Result2.useToken(closure_1(tmp5[4]).modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (tmp17) {
      tmp18 = jsx;
      obj20 = { style: null, children: null };
      obj20.style = tmp8.iconContainer;
      obj20.children = icon;
      tmp17 = jsx(tmp16, obj20);
    }
    items1 = [, , , , ];
    items1[0] = tmp17;
    obj21 = { style: tmp8.content, children: null };
    obj22 = { style: tmp8.labels, accessible: null, accessibilityRole: null, children: null };
    tmp19 = flag;
    obj22.accessible = tmp19;
    str = undefined;
    if (flag) {
      str = "text";
    }
    obj22.accessibilityRole = str;
    tmp21Result = label;
    if (!obj.isValidElement(label)) {
      tmp21 = jsx;
      obj23 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj23.variant = token;
      str2 = "text-feedback-critical";
      str3 = "danger";
      if ("danger" !== variant) {
        str2 = token1;
      }
      obj23.color = str2;
      obj23.lineClamp = labelLineClamp;
      obj23.children = label;
      tmp21Result = tmp21(tmp4(tmp5[16]).Text, obj23);
    }
    items2 = [, ];
    items2[0] = tmp21Result;
    tmp22 = null != subLabel;
    if (tmp22) {
      tmp24Result = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp24 = jsx;
        str4 = "text-subtle";
        str5 = "danger";
        if ("danger" === variant) {
          str4 = "text-feedback-critical";
        }
        obj24 = { variant: "body-xs/medium", color: null, lineClamp: null, includeFontPadding: true, children: null };
        obj24.color = str4;
        obj24.lineClamp = subLabelLineClamp;
        obj24.children = subLabel;
        tmp24Result = tmp24(tmp4(tmp5[16]).Text, obj24);
      }
      tmp22 = tmp24Result;
    }
    items2[1] = tmp22;
    obj22.children = items2;
    items3 = [, ];
    items3[0] = tmp15(tmp16, obj22);
    tmp25 = null != tmp;
    if (!tmp25) {
      items3[1] = tmp25;
      obj21.children = items3;
      items1[1] = tmp15(tmp16, obj21);
      tmp30 = null != tmp9 && null == tmp;
      if (tmp30) {
        tmp31 = jsx;
        obj25 = { style: null, children: null };
        obj25.style = tmp8.badge;
        obj25.children = tmp9;
        tmp30 = jsx(tmp16, obj25);
      }
      items1[2] = tmp30;
      tmp33Result = null != trailing && null == tmp;
      if (tmp33Result) {
        items4 = [, ];
        items4[0] = tmp8.trailing;
        trailingAfterBadge = null != tmp9;
        tmp33 = jsx;
        if (trailingAfterBadge) {
          trailingAfterBadge = tmp8.trailingAfterBadge;
        }
        obj26 = { style: null, children: null };
        items4[1] = trailingAfterBadge;
        obj26.style = items4;
        obj26.children = trailing;
        tmp33Result = tmp33(tmp16, obj26);
      }
      items1[3] = tmp33Result;
      if (arrow) {
        tmp34 = jsx;
        arrow = jsx(tmp4(tmp5[10]).TableRowArrow, {});
      }
      items1[4] = arrow;
      obj19.children = items1;
      return tmp15(tmp16, obj19);
    } else {
      if (null != tmp9) {
        obj27 = { style: null, children: null };
        items5 = [, , ];
        ({ trailing: arr6[0], trailingText: arr6[1], trailingTextWithBadge: arr6[2] } = tmp8);
        obj27.style = items5;
        items6 = [, ];
        items6[0] = tmp9;
        tmp28 = jsx;
        obj28 = { style: null, children: null };
        obj28.style = tmp8.trailingTextContent;
        obj28.children = tmp;
        items6[1] = jsx(tmp16, obj28);
        obj27.children = items6;
        tmp15Result = tmp15(tmp16, obj27);
      } else {
        tmp26 = jsx;
        obj29 = { style: null, children: null };
        items7 = [, ];
        ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
        obj29.style = items7;
        obj29.children = tmp;
        tmp15Result = jsx(tmp16, obj29);
      }
      tmp29 = tmp15Result;
    }
    return;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
const React5 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingStart: null, minHeight: null, flexDirection: "row", alignItems: "center", opacity: null, borderRadius: null };
  let num;
  if (arg1) {
    num = 0;
  }
  obj.paddingStart = num;
  obj.minHeight = nativeDefault.modules.mobile.TABLE_ROW_HEIGHT;
  let num2 = 1;
  if (arg0) {
    num2 = 0.5;
  }
  const obj2 = { row: null, iconContainer: null, trailing: null, trailingAfterBadge: null, badge: null, trailingTextWithBadge: null, trailingTextContent: null, content: null, labels: null, trailingText: null };
  obj.opacity = num2;
  obj.borderRadius = nativeDefault.radii.md;
  obj2.row = obj;
  obj2.iconContainer = { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
  obj2.trailing = { marginStart: 18 };
  obj2.trailingAfterBadge = { marginStart: 8 };
  obj2.badge = { marginStart: 18, flexShrink: 0 };
  obj2.trailingTextWithBadge = { flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.trailingTextContent = { flexShrink: 1 };
  let str = "row";
  if (arg3) {
    str = "column";
  }
  const obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
  let str2 = "center";
  if (arg3) {
    str2 = "stretch";
  }
  obj4.alignItems = str2;
  obj2.content = obj4;
  let str3 = "100%";
  if (arg2) {
    str3 = "100%";
  }
  const obj5 = { width: str3, flexGrow: null, flexShrink: null, maxWidth: null };
  let num3;
  if (arg2) {
    if (!arg3) {
      num3 = 1;
    }
  }
  obj5.flexGrow = num3;
  let num4 = 1;
  if (arg2) {
    num4 = 1;
  }
  obj5.flexShrink = num4;
  let str4;
  if (arg2) {
    if (!arg3) {
      str4 = "70%";
    }
  }
  obj5.maxWidth = str4;
  obj2.labels = obj5;
  let num5 = 18;
  if (arg3) {
    num5 = 0;
  }
  obj2.trailingText = { flexShrink: 1, marginStart: num5 };
  return obj2;
});
TableRow.Icon = fn(7455).TableRowIcon;
TableRow.Arrow = fn(7456).TableRowArrow;
TableRow.TrailingText = fn(7458).TableRowTrailingText;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };