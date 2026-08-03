// === Module 9421: ViewEmptyState ===

// Module 9421 (ViewEmptyState)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ View: obj1, Image: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 }, emptyImage: { width: 170, height: 130 }, fixOpticalIllusion: { marginTop: -50, alignItems: "center" }, emptyLabel: null, emptyText: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createCacheKey.textAlign = "center";
createCacheKey.marginTop = 32;
createCacheKey.opacity = 0.8;
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  let label;
  let source;
  let style;
  let text;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.emptyContainer, style];
  obj = { style: tmp.fixOpticalIllusion, children: null };
  obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [callback(closure_3, obj), , ];
  let tmp2Result = null;
  if (null != label) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.emptyLabel;
    obj1[1] = label.toUpperCase();
    tmp2Result = tmp2(require(1297) /* Button */.LegacyText, obj1);
  }
  items1[1] = tmp2Result;
  tmp2Result = null;
  if (null != text) {
    const obj2 = { style: null, children: null };
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2[0] = items2;
    obj2[1] = text;
    tmp2Result = tmp2(require(1297) /* Button */.LegacyText, obj2);
  }
  items1[2] = tmp2Result;
  obj[1] = items1;
  obj[1] = closure_5(closure_2, obj);
  return callback(closure_2, obj);
};