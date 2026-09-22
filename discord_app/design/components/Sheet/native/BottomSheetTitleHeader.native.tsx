// discord_app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function RedesignBottomSheetTitleHeaderBase(children) {
  const subtitle = children.subtitle;
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.titles, children: null };
  const items = [timestampProducer(Title, { lineClamp: 2, children: children.title })];
  let tmp2Result = null;
  if (null != subtitle) {
    const obj3 = { children: subtitle };
    tmp2Result = timestampProducer(Subtitle, obj3);
  }
  items[1] = tmp2Result;
  obj2.children = items;
  obj.children = React5(View, obj2);
  return timestampProducer(View, obj);
}
function RedesignBottomSheetTitleHeaderStacked(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing } = subtitle);
  const tmp = closure_8();
  const tmp2 = closure_10();
  const obj = { style: null, children: null };
  const items = [tmp.container, tmp2.container];
  obj.style = items;
  const obj2 = { style: tmp2.accessories, children: null };
  const items1 = [
    timestampProducer(View, { style: tmp2.item, children: leading }),
    timestampProducer(View, { style: tmp2.item, children: trailing }),
  ];
  obj2.children = items1;
  const items2 = [React5(View, obj2)];
  const obj5 = { style: tmp.titles, children: null };
  const items3 = [timestampProducer(Title, { children: title })];
  let tmp5Result = null;
  if (null != subtitle) {
    const obj6 = { children: subtitle };
    tmp5Result = timestampProducer(Subtitle, obj6);
  }
  items3[1] = tmp5Result;
  obj5.children = items3;
  items2[1] = React5(View, obj5);
  obj.children = items2;
  return React5(View, obj);
}
function RedesignBottomSheetTitleHeaderComplex(subtitle) {
  subtitle = subtitle.subtitle;
  c0 = undefined;
  ({ title, leading, trailing, onTitleTextLayout } = subtitle);
  const tmp = closure_8();
  const tmp2 = closure_12();
  const diff =
    useWindowDimensionsDefault().width -
    2 * useToken.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
  [tmp5, c0] = noop.useState(undefined);
  const callback = noop.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    _undefined((arg0) => {
      let num = arg0;
      if (arg0 == null) {
        num = 0;
      }
      return Math.max(num, width);
    });
  }, []);
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(View, { style: { width: tmp5 } }), , , ,];
  const obj4 = { style: tmp.titles, children: null };
  const items1 = [timestampProducer(Title, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title })];
  let tmp9Result = null;
  if (null != subtitle) {
    const obj5 = { children: subtitle };
    tmp9Result = timestampProducer(Subtitle, obj5);
  }
  const result = diff / 4;
  items1[1] = tmp9Result;
  obj4.children = items1;
  items[1] = React5(View, obj4);
  items[2] = timestampProducer(View, { style: { width: tmp5 } });
  const obj7 = { onLayout: callback, style: null, children: leading };
  const items2 = [, ,];
  ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
  items2[2] = { maxWidth: result };
  obj7.style = items2;
  items[3] = timestampProducer(View, obj7);
  const obj8 = { onLayout: callback, style: null, children: trailing };
  const items3 = [, ,];
  ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
  items3[2] = { maxWidth: result };
  obj8.style = items3;
  items[4] = timestampProducer(View, obj8);
  obj2.children = items;
  return React5(View, obj2);
}
function Title(arg0) {
  const tmp = closure_8();
  const merged = Object.assign(arg0);
  return timestampProducer(Text_Text.Text, {
    variant: "redesign/heading-18/semibold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    style: closure_8().title,
  });
}
function Subtitle(children) {
  const tmp = closure_8();
  return timestampProducer(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "text-muted",
    lineClamp: 1,
    style: closure_8().subtitle,
    children: children.children,
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4757);
let closure_8 = createStyles.createStyles(() => {
  const obj = {
    container: {
      paddingHorizontal: nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL,
      flexDirection: "row",
      gap: 4,
      position: "relative",
    },
    titles: { flexGrow: 1, flexShrink: 1, gap: 2 },
    subtitle: { textAlign: "center" },
    title: { textAlign: "center" },
  };
  return obj;
});
createStyles = fn(4757);
let closure_10 = createStyles.createStyles(() => ({
  container: { flexDirection: "column" },
  accessories: { flexDirection: "row", justifyContent: "space-between" },
  item: { flexShrink: 0 },
}));
createStyles = fn(4757);
let closure_12 = createStyles.createStyles(() => {
  const obj = {
    accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 },
    leading: { left: nativeDefault.space.PX_16, justifyContent: "flex-start" },
    trailing: null,
  };
  const obj2 = { left: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  obj.trailing = { right: nativeDefault.space.PX_16, justifyContent: "flex-end" };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = function BottomSheetTitleHeader(arg0) {
  let merged = arg0;
  ({ leading, trailing } = arg0);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2[1];
  const tmp3 = HeaderDebugOverlayDefault("sheet");
  if (null != leading) {
    if (tmp2[0]) {
      const obj2 = {};
      merged = Object.assign(merged);
      let tmp6Result = timestampProducer(RedesignBottomSheetTitleHeaderStacked, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.onTitleTextLayout = function onTitleTextLayout(nativeEvent) {
        closure_0(nativeEvent.nativeEvent.lines.length > 2);
      };
      tmp6Result = timestampProducer(RedesignBottomSheetTitleHeaderComplex, obj3);
    }
  }
  const merged2 = Object.assign(merged);
  const tmp5 = timestampProducer(RedesignBottomSheetTitleHeaderBase, {});
  let tmp16 = tmp5;
  if (null != tmp3) {
    const obj4 = { style: { position: "relative" }, children: null };
    const items = [tmp5, tmp3];
    obj4.children = items;
    tmp16 = React5(View, obj4);
  }
  return tmp16;
};
