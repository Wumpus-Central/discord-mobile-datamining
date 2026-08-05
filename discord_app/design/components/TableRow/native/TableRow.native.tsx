// discord_app/design/components/TableRow/native/TableRow.native.tsx
import noop from "noop";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
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
    MobileVisualRefreshExperiment = require("useIsMobileVisualRefreshExperimentEnabled").MobileVisualRefreshExperiment;
    enabled = MobileVisualRefreshExperiment.useConfig({ location: "TableRow" }).enabled;
    context = noop.useContext(require("context").TableRowGroupContext);
    tmp5 = !context;
    if (!context) {
      flag = true;
      tmp5 = true === end;
    }
    tmp2Result = require("map");
    tmp7 = jsx;
    token = tmp2Result.useToken(require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS);
    obj = { radius: token, shadow: "none", border: "none", variant: null, start: null, end: null, onPress: null, disabled: null, style: null };
    str = undefined;
    if (enabled) {
      str = "muted";
    }
    obj[3] = str;
    tmp8 = !context;
    if (!context) {
      flag2 = true;
      tmp8 = true === start;
    }
    obj[4] = tmp8;
    obj[5] = tmp5;
    obj[6] = onPress;
    obj[7] = disabled;
    obj[8] = jsxs;
    merged1 = Object.assign(merged);
    obj.children = tmp7(TableRowInner, { height, label, subLabel, icon, trailing, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps, isRefreshEnabled: enabled });
    tmp7Result = tmp7(require("PressableCard").InternalCard, obj);
    tmp11 = tmp7Result;
    if (!context) {
      tmp11 = tmp7Result;
      if (!tmp5) {
        tmp12 = jsxs;
        tmp13 = Fragment;
        obj1 = { children: null };
        items = [, ];
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
    tmp = closure_1;
    tmp2 = closure_2;
    ({ borderRadius, height } = global);
    tmp3 = require("useIsMobileVisualRefreshExperimentEnabled")("TableRowInner");
    obj = noop;
    tmp4 = undefined;
    if (noop.isValidElement(trailing)) {
      tmp5 = closure_0;
      if (trailing.type === require("TableRowTrailingText").TableRowTrailingText) {
        tmp4 = trailing;
      }
    }
    tmp6 = closure_0;
    obj2 = require("getFontScale");
    fontScale = obj2.useFontScale();
    obj3 = require("set");
    if (obj3.isAndroid()) {
      num2 = 1.2;
      tmp8 = fontScale > 1.2;
    } else {
      num = 1.5;
      tmp8 = fontScale > 1.5;
    }
    tmp9 = f35376(true === disabled, null != tmp4, tmp8, tmp3);
    tmp6Result = require("map");
    token = tmp6Result.useToken(require("Themes").modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
    tmp6Result1 = require("map");
    tmp12 = jsxs;
    tmp13 = View;
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp9.row;
    items[1] = { borderRadius, height };
    token1 = tmp6Result1.useToken(require("Themes").modules.mobile.TABLE_ROW_LABEL_COLOR);
    if (flag) {
      tmp14 = jsx;
      tmp15 = Pressable;
      obj1 = {};
      tmp16 = obj1;
      tmp17 = dragHandlePressableProps;
      merged = Object.assign(dragHandlePressableProps);
      obj2 = { size: "xs", style: null };
      obj2[1] = tmp9.dragHandle;
      obj1.children = jsx(require("DragIcon").DragIcon, obj2);
      flag = jsx(Pressable, obj1);
    }
    items1 = [, , , , ];
    items1[0] = flag;
    tmp19 = null != icon;
    if (tmp19) {
      tmp20 = jsx;
      obj3 = { style: null, children: null };
      obj3[0] = tmp9.iconContainer;
      obj3[1] = icon;
      tmp19 = jsx(tmp13, obj3);
    }
    items1[1] = tmp19;
    obj4 = { style: tmp9.content, children: null };
    obj5 = { style: tmp9.labels, children: null };
    tmp22Result = label;
    if (!obj.isValidElement(label)) {
      tmp22 = jsx;
      obj6 = { variant: null, color: null, lineClamp: null, includeFontPadding: true, children: null };
      obj6[0] = token;
      str = "text-feedback-critical";
      str2 = "danger";
      if ("danger" !== variant) {
        str = token1;
      }
      obj6[1] = str;
      obj6[2] = labelLineClamp;
      obj6[4] = label;
      tmp22Result = tmp22(require("Text").Text, obj6);
    }
    items2 = [, ];
    items2[0] = tmp22Result;
    tmp23 = null != subLabel;
    if (tmp23) {
      tmp25Result = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp25 = jsx;
        str3 = "text-subtle";
        str4 = "danger";
        if ("danger" === variant) {
          str3 = "text-feedback-critical";
        }
        obj7 = { variant: "text-xs/medium", color: null, lineClamp: null, includeFontPadding: true, children: null };
        obj7[1] = str3;
        obj7[2] = subLabelLineClamp;
        obj7[4] = subLabel;
        tmp25Result = tmp25(require("Text").Text, obj7);
      }
      tmp23 = tmp25Result;
    }
    items2[1] = tmp23;
    obj5[1] = items2;
    items3 = [, ];
    items3[0] = tmp12(tmp13, obj5);
    tmp26 = null != tmp4;
    if (tmp26) {
      tmp27 = jsx;
      obj8 = { style: null, children: null };
      items4 = [, ];
      ({ trailing: arr5[0], trailingText: arr5[1] } = tmp9);
      obj8[0] = items4;
      obj8[1] = tmp4;
      tmp26 = jsx(tmp13, obj8);
    }
    items3[1] = tmp26;
    obj4[1] = items3;
    items1[2] = tmp12(tmp13, obj4);
    tmp28 = null != trailing && null == tmp4;
    if (tmp28) {
      tmp29 = jsx;
      obj9 = { style: null, children: null };
      obj9[0] = tmp9.trailing;
      obj9[1] = trailing;
      tmp28 = jsx(tmp13, obj9);
    }
    items1[3] = tmp28;
    if (arrow) {
      tmp30 = jsx;
      arrow = jsx(require("TableRowArrow").TableRowArrow, {});
    }
    items1[4] = arrow;
    obj[1] = items1;
    return tmp12(tmp13, obj);
  }
}
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = { padding: 0 };
let closure_10 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = { padding: Themes.modules.mobile.TABLE_ROW_PADDING, minHeight: Themes.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: null, borderRadius: null };
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  obj[4] = num;
  let md;
  if (flag) {
    md = tmp(712).radii.md;
  }
  obj = { row: obj, iconContainer: null, trailing: null, content: null, labels: null, trailingText: null, dragHandle: null };
  obj[5] = md;
  obj = { minWidth: tmp(712).modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: tmp(712).modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
  obj[1] = obj;
  obj[2] = { marginStart: 18 };
  let str = "row";
  if (arg2) {
    str = "column";
  }
  const obj1 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
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
const result = require("jsxProd").fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export { TableRow };
export { TableRowInner };