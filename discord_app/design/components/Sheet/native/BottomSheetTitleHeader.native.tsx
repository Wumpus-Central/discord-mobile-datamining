// discord_app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import Text from "../../Text/native/Text.tsx";
import useHeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import { map } from "../../../tokens/native/useToken.tsx";

require = arg1;
function RedesignBottomSheetTitleHeaderBase(children) {
  const subtitle = children.subtitle;
  const tmp = callback4();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.titles, children: null };
  const items = [callback2(Title, { lineClamp: 2, children: children.title }), ];
  let tmp2Result = null;
  if (null != subtitle) {
    obj = { children: null };
    obj[0] = subtitle;
    tmp2Result = tmp2(Subtitle, obj);
  }
  items[1] = tmp2Result;
  obj[1] = items;
  obj[1] = closure_7(View, obj);
  return callback2(View, obj);
}
function RedesignBottomSheetTitleHeaderStacked(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing } = subtitle);
  const tmp = callback4();
  const tmp2 = callback5();
  let obj = { style: items, children: null };
  items = [tmp.container, tmp2.container];
  obj = { style: tmp2.accessories, children: null };
  obj = { style: tmp2.item, children: leading };
  const items1 = [callback2(View, obj), callback2(View, { style: tmp2.item, children: trailing })];
  obj[1] = items1;
  const items2 = [callback3(View, obj), ];
  const obj2 = { style: tmp.titles, children: null };
  const items3 = [callback2(Title, { children: title }), ];
  let tmp5Result = null;
  if (null != subtitle) {
    const obj3 = { children: null };
    obj3[0] = subtitle;
    tmp5Result = callback2(Subtitle, obj3);
  }
  items3[1] = tmp5Result;
  obj2[1] = items3;
  items2[1] = callback3(View, obj2);
  obj[1] = items2;
  return callback3(View, obj);
}
function RedesignBottomSheetTitleHeaderComplex(subtitle) {
  subtitle = subtitle.subtitle;
  let _require;
  ({ title, leading, trailing, onTitleTextLayout } = subtitle);
  const tmp = callback4();
  const tmp2 = callback6();
  let obj = _map;
  const diff = useWindowDimensionsDefault().width - 2 * obj.useToken(ThemesDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
  [tmp5, c0] = callback(React.useState(undefined), 2);
  callback = React.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    width((arg0) => {
      let num = arg0;
      if (arg0 == null) {
        num = 0;
      }
      return Math.max(num, width);
    });
  }, []);
  obj = { style: tmp.container, children: null };
  const items = [callback2(View, { style: { width: tmp5 } }), , , , ];
  obj = { style: tmp.titles, children: null };
  const items1 = [callback2(Title, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title }), ];
  let tmp9Result = null;
  if (null != subtitle) {
    obj1 = { children: null };
    obj1[0] = subtitle;
    tmp9Result = tmp9(Subtitle, obj1);
  }
  const result = diff / 4;
  items1[1] = tmp9Result;
  obj[1] = items1;
  items[1] = closure_7(View, obj);
  items[2] = callback2(View, { style: { width: tmp5 } });
  const items2 = [, , ];
  ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
  items2[2] = { maxWidth: result };
  items[3] = callback2(View, { onLayout: callback, style: items2, children: leading });
  const items3 = [, , ];
  ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
  items3[2] = { maxWidth: result };
  items[4] = callback2(View, { onLayout: callback, style: items3, children: trailing });
  obj[1] = items;
  return closure_7(View, obj);
}
function Title(arg0) {
  let str = "redesign/heading-18/bold";
  if (useIsMobileVisualRefreshExperimentEnabledDefault("BottomSheetTitleHeader")) {
    str = "redesign/heading-18/semibold";
  }
  const tmp = callback4();
  const merged = Object.assign(arg0);
  return callback2(Text.Text, { variant: str, color: "mobile-text-heading-primary", accessibilityRole: "header", style: callback4().title });
}
function Subtitle(children) {
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("BottomSheetTitleHeader");
  let str = "text-default";
  if (tmp3) {
    str = "text-muted";
  }
  let str2 = "text-xs/medium";
  if (tmp3) {
    str2 = "text-sm/medium";
  }
  const tmp = callback4();
  return callback2(Text.Text, { variant: str2, color: str, lineClamp: 1, style: callback4().subtitle, children: children.children });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles(() => {
  let obj = { container: null, titles: null, subtitle: null, title: null };
  obj = { paddingHorizontal: ThemesDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL, flexDirection: "row", gap: 4, position: "relative" };
  obj[0] = obj;
  obj[1] = { flexGrow: 1, flexShrink: 1, gap: 2 };
  obj[2] = { textAlign: "center" };
  obj[3] = { textAlign: "center" };
  return obj;
});
let closure_10 = createCacheKey.createStyles(() => ({ container: { flexDirection: "column" }, accessories: { flexDirection: "row", justifyContent: "space-between" }, item: { flexShrink: 0 } }));
let closure_12 = createCacheKey.createStyles(() => {
  let obj = { accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 }, leading: null, trailing: null };
  obj = { left: ThemesDefault.space.PX_16, justifyContent: "flex-start" };
  obj[1] = obj;
  obj = { right: ThemesDefault.space.PX_16, justifyContent: "flex-end" };
  obj[2] = obj;
  return obj;
});
let result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = function BottomSheetTitleHeader(arg0) {
  let merged = arg0;
  ({ leading, trailing } = arg0);
  const tmp2 = callback(React.useState(false), 2);
  closure_0 = tmp2[1];
  const tmp3 = useHeaderDebugOverlayDefault("sheet");
  if (null != leading) {
    if (tmp2[0]) {
      let obj = {};
      merged = Object.assign(merged);
      let tmp6Result = tmp6(RedesignBottomSheetTitleHeaderStacked, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(merged);
      obj.onTitleTextLayout = function onTitleTextLayout(nativeEvent) {
        callback(nativeEvent.nativeEvent.lines.length > 2);
      };
      tmp6Result = tmp6(RedesignBottomSheetTitleHeaderComplex, obj);
    }
  }
  obj = {};
  const merged2 = Object.assign(merged);
  const tmp5 = callback2(RedesignBottomSheetTitleHeaderBase, obj);
  let tmp16 = tmp5;
  if (null != tmp3) {
    obj1 = { style: null, children: null };
    obj1[0] = { position: "relative" };
    const items = [tmp5, tmp3];
    obj1[1] = items;
    tmp16 = callback3(View, obj1);
  }
  return tmp16;
};