// discord_app/modules/launchpad/native/shared/CutoutImage.tsx
import getReactNativeSVGImageSourceDefault from "../../../svg/native/getReactNativeSVGImageSource.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { Image } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
const memoResult = importAllResult.memo(function CutoutImage(cutoutTopLeftSize) {
  let num = cutoutTopLeftSize.cutoutTopLeftSize;
  if (num === undefined) {
    num = 0;
  }
  let num2 = cutoutTopLeftSize.cutoutTopLeftInsetX;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = cutoutTopLeftSize.cutoutTopLeftInsetY;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = cutoutTopLeftSize.cutoutTopRightSize;
  if (num4 === undefined) {
    num4 = 0;
  }
  let num5 = cutoutTopLeftSize.cutoutTopRightInsetX;
  if (num5 === undefined) {
    num5 = 0;
  }
  let num6 = cutoutTopLeftSize.cutoutTopRightInsetY;
  if (num6 === undefined) {
    num6 = 0;
  }
  let num7 = cutoutTopLeftSize.cutoutBottomLeftSize;
  if (num7 === undefined) {
    num7 = 0;
  }
  let num8 = cutoutTopLeftSize.cutoutBottomLeftInsetX;
  if (num8 === undefined) {
    num8 = 0;
  }
  let num9 = cutoutTopLeftSize.cutoutBottomLeftInsetY;
  if (num9 === undefined) {
    num9 = 0;
  }
  let num10 = cutoutTopLeftSize.cutoutBottomRightSize;
  if (num10 === undefined) {
    num10 = 0;
  }
  let num11 = cutoutTopLeftSize.cutoutBottomRightInsetX;
  if (num11 === undefined) {
    num11 = 0;
  }
  let num12 = cutoutTopLeftSize.cutoutBottomRightInsetY;
  if (num12 === undefined) {
    num12 = 0;
  }
  ({ imageSize, imageSource, imageBorderRadius } = cutoutTopLeftSize);
  if (imageBorderRadius === undefined) {
    imageBorderRadius = imageSize / 2;
  }
  ({ imageBackgroundColor, imageTintColor } = cutoutTopLeftSize);
  let num14 = cutoutTopLeftSize.clipInnerAmount;
  if (num14 === undefined) {
    num14 = 0;
  }
  let num15 = cutoutTopLeftSize.clipOuterAmount;
  if (num15 === undefined) {
    num15 = 0;
  }
  const borderStroke = cutoutTopLeftSize.borderStroke;
  importDefault = undefined;
  let obj = importAllResult;
  obj1 = imageTintColor(514);
  [tmp4, c1] = callback(importAllResult.useState(obj1.v4()), 2);
  if (null != tmp4) {
    const _HermesInternal = HermesInternal;
    const combined = "url(#" + tmp4 + ")";
  }
  let v4Result;
  if (num15 > 0) {
    v4Result = tmp(514).v4();
    const tmpResult = tmp(514);
  }
  if (null != v4Result) {
    const _HermesInternal2 = HermesInternal;
    const combined1 = "url(#" + v4Result + ")";
  }
  const items = [imageTintColor];
  callback = obj.useCallback(() => {
    _undefined(imageTintColor(closure_1_2[4]).v4());
  }, []);
  const layoutEffect = obj.useLayoutEffect(() => {
    if (null != imageTintColor) {
      _undefined(imageTintColor(closure_1_2[4]).v4());
      const obj = imageTintColor(closure_1_2[4]);
    }
  }, items);
  obj = { style: cutoutTopLeftSize.style, height: imageSize, width: imageSize, children: null };
  const tmp13 = importDefault;
  const tmp3 = callback(importAllResult.useState(obj1.v4()), 2);
  obj = { width: imageSize, height: imageSize, id: tmp4, children: null };
  if (imageBorderRadius === imageSize / 2) {
    obj1 = { cx: null, cy: null, r: null, fill: "white" };
    obj1[0] = imageSize / 2;
    obj1[1] = imageSize / 2;
    obj1[2] = imageSize / 2;
    let tmp16 = callback2(tmp(8241).Circle, obj1);
    let tmp15 = callback2;
  } else {
    tmp15 = callback2;
    const obj2 = { x: 0, y: 0, width: null, height: null, rx: null, ry: null, fill: "white" };
    obj2[2] = imageSize;
    obj2[3] = imageSize;
    obj2[4] = imageBorderRadius;
    obj2[5] = imageBorderRadius;
    tmp16 = callback2(tmp(8241).Rect, obj2);
  }
  const items1 = [tmp16, , , , ,];
  let tmp15Result = null;
  if (num > 0) {
    const obj3 = { cx: null, cy: null, r: null, fill: "black" };
    obj3[0] = num2;
    obj3[1] = num3;
    obj3[2] = num;
    tmp15Result = tmp15(tmp(8241).Circle, obj3);
  }
  items1[1] = tmp15Result;
  tmp15Result = null;
  if (num4 > 0) {
    const obj4 = { cx: null, cy: null, r: null, fill: "black" };
    obj4[0] = imageSize - num5;
    obj4[1] = num6;
    obj4[2] = num4;
    tmp15Result = tmp15(tmp(8241).Circle, obj4);
  }
  items1[2] = tmp15Result;
  let tmp15Result1 = null;
  if (num7 > 0) {
    const obj5 = { cx: null, cy: null, r: null, fill: "black" };
    obj5[0] = num8;
    obj5[1] = imageSize - num9;
    obj5[2] = num7;
    tmp15Result1 = tmp15(tmp(8241).Circle, obj5);
  }
  items1[3] = tmp15Result1;
  let tmp15Result2 = null;
  if (num10 > 0) {
    const obj6 = { cx: null, cy: null, r: null, fill: "black" };
    obj6[0] = imageSize - num11;
    obj6[1] = imageSize - num12;
    obj6[2] = num10;
    tmp15Result2 = tmp15(tmp(8241).Circle, obj6);
  }
  items1[4] = tmp15Result2;
  if (num14 <= 0) {
    items1[5] = null;
    obj[3] = items1;
    const items2 = [tmp12(tmp(8241).Mask, obj)];
    if (null == v4Result) {
      const obj7 = { children: null };
      items2[1] = null;
      obj7[0] = items2;
      const items3 = [tmp12(tmp(8241).Defs, obj7), , ,];
      let tmp15Result3 = null;
      if (null != imageBackgroundColor) {
        const obj8 = { height: null, width: null, fill: null, mask: null, clipPath: null };
        obj8[0] = imageSize;
        obj8[1] = imageSize;
        obj8[2] = imageBackgroundColor;
        obj8[3] = combined;
        obj8[4] = combined1;
        tmp15Result3 = tmp15(tmp(8241).Rect, obj8);
      }
      items3[1] = tmp15Result3;
      if (null == imageSource) {
        items3[2] = null;
        let tmp15Result4 = null;
        if (null != borderStroke) {
          const obj9 = {
            height: null,
            width: null,
            fill: "transparent",
            stroke: null,
            strokeWidth: null,
            mask: null,
            clipPath: null,
            rx: null,
            ry: null,
          };
          obj9[0] = imageSize;
          obj9[1] = imageSize;
          obj9[3] = cutoutTopLeftSize.borderStrokeColor;
          obj9[4] = 2 * borderStroke;
          obj9[5] = combined;
          obj9[6] = combined1;
          obj9[7] = imageBorderRadius;
          obj9[8] = imageBorderRadius;
          tmp15Result4 = tmp15(tmp(8241).Rect, obj9);
        }
        items3[3] = tmp15Result4;
        obj[3] = items3;
        return tmp12(tmp14, obj);
      } else {
        if (typeof imageSource !== "number") {
          const obj10 = { height: null, width: null, href: null, mask: null, clipPath: null };
          obj10[0] = imageSize;
          obj10[1] = imageSize;
          obj10[2] = getReactNativeSVGImageSourceDefault(imageSource);
          obj10[3] = combined;
          obj10[4] = combined1;
          let tmp15Result5 = tmp15(tmp(8241).Image, obj10);
        }
        const obj11 = { height: null, width: null, mask: null, clipPath: null, children: null };
        obj11[0] = imageSize;
        obj11[1] = imageSize;
        obj11[2] = combined;
        obj11[3] = combined1;
        const obj12 = { style: null, source: null, onLoad: null };
        const obj13 = { width: null, height: null, tintColor: null };
        obj13[0] = imageSize;
        obj13[1] = imageSize;
        obj13[2] = imageTintColor;
        obj12[0] = obj13;
        obj12[1] = imageSource;
        obj12[2] = callback;
        obj11[4] = tmp15(Image, obj12);
        tmp15Result5 = tmp15(tmp(8241).ForeignObject, obj11);
      }
    } else {
      const obj14 = { id: null, children: null };
      obj14[0] = v4Result;
      if (imageBorderRadius === imageSize / 2) {
        const obj15 = { cx: null, cy: null, r: null, fill: "white" };
        obj15[0] = imageSize / 2;
        obj15[1] = imageSize / 2;
        obj15[2] = imageSize / 4;
        let tmp15Result6 = tmp15(tmp(8241).Circle, obj15);
      } else {
        const obj16 = { x: null, y: null, width: null, height: null, rx: null, ry: null, fill: "white" };
        obj16[0] = num15;
        obj16[1] = num15;
        obj16[2] = imageSize - 2 * num15;
        obj16[3] = imageSize - 2 * num15;
        obj16[4] = imageBorderRadius * ((imageSize - 2 * num15) / imageSize);
        obj16[5] = imageBorderRadius * ((imageSize - 2 * num15) / imageSize);
        tmp15Result6 = tmp15(tmp(8241).Rect, obj16);
      }
      obj14[1] = tmp15Result6;
      tmp15(tmp(8241).ClipPath, obj14);
    }
  } else if (imageBorderRadius === imageSize / 2) {
    const obj17 = { cx: null, cy: null, r: null, fill: "black" };
    obj17[0] = imageSize / 2;
    obj17[1] = imageSize / 2;
    obj17[2] = num14 / 2;
    let tmp15Result8 = tmp15(tmp(8241).Circle, obj17);
  } else {
    const obj18 = { x: null, y: null, width: null, height: null, rx: null, ry: null, fill: "black" };
    obj18[0] = (imageSize - num14) / 2;
    obj18[1] = (imageSize - num14) / 2;
    obj18[2] = num14;
    obj18[3] = num14;
    obj18[4] = imageBorderRadius * (num14 / imageSize);
    obj18[5] = imageBorderRadius * (num14 / imageSize);
    tmp15Result8 = tmp15(tmp(8241).Rect, obj18);
  }
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/CutoutImage.tsx");

export default memoResult;
