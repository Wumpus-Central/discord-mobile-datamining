// === Module 8387: UserProfileOverscrollBanner ===

// Module 8387 (UserProfileOverscrollBanner)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import module_8388 from "module_8388";
import importDefaultResult from "module_4054";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let privateBanner;
  let showBlur;
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = { style: bannerAnimatedStyle, children: null };
  const items = [privateBanner, ];
  obj = { style: bannerImageAnimatedStyle, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  const items1 = [callback(importDefault(8105), obj), ];
  const tmp3 = callback;
  const tmp4 = importDefault(8105);
  let tmp3Result = require(500) /* set */.isIOS() && showBlur;
  if (tmp3Result) {
    const obj1 = { animatedProps: null, style: null };
    obj1[0] = blurAnimatedProps;
    obj1[1] = StyleSheet.absoluteFillObject;
    tmp3Result = tmp3(module_8388, obj1);
  }
  items1[1] = tmp3Result;
  obj[1] = items1;
  items[1] = closure_5(importDefault(4054).View, obj);
  obj[1] = items;
  return closure_5(importDefault(4054).View, obj);
};