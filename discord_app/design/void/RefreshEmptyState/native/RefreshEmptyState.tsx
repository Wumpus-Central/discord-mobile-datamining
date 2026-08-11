// discord_app/design/void/RefreshEmptyState/native/RefreshEmptyState.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { AccessibilityAnnouncer } from "../../../shared.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
class EmptyState {
  constructor(arg0) {
    ({ source, title, callToAction } = global);
    ({ body, containerStyle, imageStyle, titleStyle, bodyStyle } = global);
    tmp = jsxs();
    tmp3 = View;
    obj = { style: items, children: null };
    items = [, ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    tmp4 = null;
    tmp2 = jsxs;
    if (null != source) {
      tmp5 = jsx;
      tmp6 = Image;
      obj = { source: null, style: null };
      obj[0] = source;
      items1 = [, ];
      items1[0] = tmp.image;
      items1[1] = imageStyle;
      obj[1] = items1;
      tmp4 = jsx(Image, obj);
    }
    items2 = [, , , ];
    items2[0] = tmp4;
    tmp7 = null;
    if (null != title) {
      tmp8 = jsx;
      tmp9 = closure_1;
      tmp10 = closure_2;
      obj1 = { style: null, children: null };
      items3 = [, ];
      items3[0] = tmp.title;
      items3[1] = titleStyle;
      obj1[0] = items3;
      obj1[1] = title;
      tmp7 = jsx(require("module_8001"), obj1);
    }
    items2[1] = tmp7;
    tmp11 = jsx;
    tmp12 = closure_2;
    items4 = [, ];
    items4[0] = tmp.body;
    items4[1] = bodyStyle;
    items2[2] = jsx(require("module_8001"), { style: items4, children: body });
    tmp11Result = null;
    if (null != callToAction) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp.cta;
      tmp14 = closure_0;
      obj3 = { shrink: true, text: null, onPress: null, size: "sm" };
      ({ label: obj5[1], onPress: obj5[2] } = callToAction);
      obj2[1] = tmp11(require("Button").Button, obj3);
      tmp11Result = tmp11(tmp3, obj2);
    }
    items2[3] = tmp11Result;
    obj[1] = items2;
    return tmp2(tmp3, obj);
  }
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignItems: "center", justifyContent: "center", padding: 16 }, title: null, body: null, image: null, cta: null };
createCacheKey = {};
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createCacheKey.textAlign = "center";
createCacheKey.marginBottom = 8;
createCacheKey[1] = createCacheKey;
let obj1 = {};
let merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_SUBTLE, 14));
obj1.textAlign = "center";
createCacheKey[2] = obj1;
createCacheKey[3] = { marginBottom: 32 };
createCacheKey[4] = { alignSelf: "center", marginTop: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("design/void/RefreshEmptyState/native/RefreshEmptyState.tsx");

export default EmptyState;
export const ThemedEmptyState = function ThemedEmptyState(darkSource) {
  let lightSource = darkSource.darkSource;
  const merged = Object.assign(darkSource, Object.create(null));
  let obj = AccessibilityAnnouncer;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    lightSource = darkSource.lightSource;
  }
  obj = { source: lightSource };
  const merged1 = Object.assign(merged);
  return callback(EmptyState, obj);
};