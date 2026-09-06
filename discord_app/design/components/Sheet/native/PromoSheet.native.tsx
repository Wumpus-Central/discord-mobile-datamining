// === Module 10230: PromoSheet ===

// Module 10230 (PromoSheet)
import nativeDefault from "native" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" }, graphic: null };
createStyles = { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
createStyles.graphic = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp2 = closure_9();
  const items = [gradientColor];
  const memo = noop.useMemo(() => null != gradientColor ? ((arg0) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj = { offsetBottom: 0.25, color, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
    obj.children = closure_2_7(gradientColor(10231).ExpressiveGradient, obj);
    return closure_2_7(View, obj);
  }) : undefined, items);
  let obj = {};
  let merged = Object.assign(_objectWithoutProperties(arg0, closure_3));
  obj.startExpanded = true;
  obj.contentStyles = tmp2.content;
  obj.backgroundComponent = memo;
  if (null != graphic) {
    obj = {};
    const merged1 = Object.assign(graphic);
    obj.style = tmp2.graphic;
    let tmp4Result = tmp4(tmp5(10232).Graphic, obj);
  } else {
    tmp4Result = null;
    if (null != illustration) {
      obj = { style: tmp2.illustration, children: illustration };
      tmp4Result = tmp4(View, obj);
    }
  }
  const items1 = [tmp4Result, , ];
  const items2 = [closure_7(gradientColor(4556).Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp2.title, children: title }), ];
  tmp4Result = null;
  if (null != description) {
    const obj2 = { variant: "redesign/heading-18/medium", color: "text-subtle", style: tmp2.description, children: description };
    tmp4Result = tmp4(tmp5(4556).Text, obj2);
  }
  const obj3 = { spacing: 24, children: null };
  items2[1] = tmp4Result;
  items1[1] = closure_8(gradientColor(4973).Stack, { children: items2 });
  items1[2] = actions;
  obj3.children = items1;
  obj.children = closure_8(gradientColor(4973).Stack, obj3);
  return closure_7(gradientColor(7150).BottomSheet, obj);
};