// discord_app/components_native/common/ViewEmptyState.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../design/void/native.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../modules/rebrand/native/TextStyles.tsx";

require = fn;
noopAll;
({ View: obj1, Image: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createCacheKey.textAlign = "center";
createCacheKey.marginTop = 32;
createCacheKey.opacity = 0.8;
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = callback2();
  const items = [tmp.emptyContainer, style];
  const obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [callback(closure_3, obj), , ];
  let tmp2Result = null;
  if (null != label) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.emptyLabel;
    obj1[1] = label.toUpperCase();
    tmp2Result = callback(Button.LegacyText, obj1);
  }
  items1[1] = tmp2Result;
  tmp2Result = null;
  if (null != text) {
    const obj2 = { style: null, children: null };
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2[0] = items2;
    obj2[1] = text;
    tmp2Result = callback(Button.LegacyText, obj2);
  }
  items1[2] = tmp2Result;
  obj[1] = items1;
  obj[1] = callback(closure_2, obj);
  return callback(closure_2, obj);
};