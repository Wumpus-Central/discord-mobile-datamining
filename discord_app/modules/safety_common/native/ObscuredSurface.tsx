// discord_app/modules/safety_common/native/ObscuredSurface.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { position: "relative", overflow: "hidden" }, content: { pointerEvents: "none", userSelect: "none" }, cover: null, warning: null };
createCacheKey = { position: "absolute", inset: 0, zIndex: 1, backgroundColor: require("Themes").colors.SPOILER_HIDDEN_BACKGROUND };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { position: "absolute", insetInlineStart: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_8, textAlign: "center", userSelect: "none", zIndex: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", insetInlineStart: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_8, textAlign: "center", userSelect: "none", zIndex: 2 };
const result = require("jsxProd").fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  let children;
  let description;
  let heading;
  ({ heading, description, children } = obscured);
  const tmp = createCacheKey();
  let tmp3Result = children;
  if (obscured.obscured) {
    let obj = { value: null, children: null };
    obj[0] = require("../ObscuredSurfaceContext.tsx") /* context */.OBSCURED_VALUE;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessible: false, "aria-hidden": true, children: null };
    obj[0] = tmp.content;
    obj[5] = children;
    const items = [callback(View, obj), , ];
    const obj1 = { style: null };
    obj1[0] = tmp.cover;
    items[1] = callback(View, obj1);
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.warning;
    const obj3 = { size: "lg", color: null };
    obj3[1] = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.TEXT_DEFAULT;
    const items1 = [callback(require("../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx") /* ImageWarningIcon */.ImageWarningIcon, obj3), , ];
    if (heading == null) {
      const intl = tmp4(1236).intl;
      heading = intl.string(tmp4(1236).t.xC8Saf);
    }
    const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: null };
    obj4[2] = heading;
    items1[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj4);
    if (description == null) {
      const intl2 = tmp4(1236).intl;
      description = intl2.string(tmp4(1236).t["0fc/DG"]);
    }
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj5[2] = description;
    items1[2] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj5);
    obj2[1] = items1;
    items[2] = closure_5(View, obj2);
    obj[1] = items;
    obj[1] = closure_5(View, obj);
    tmp3Result = tmp3(require("../ObscuredSurfaceContext.tsx") /* context */.ObscuredSurfaceContext.Provider, obj);
  }
  return tmp3Result;
};