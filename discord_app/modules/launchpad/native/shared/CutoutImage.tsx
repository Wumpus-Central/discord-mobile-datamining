// === Module 17224: CutoutImage ===

// Module 17224 (CutoutImage)
import v1 from "v1" /* 1255 */;
import inlineStylesDefault from "inlineStyles" /* 8606 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const getReactNativeSVGImageSourceDefault = tmp13(13186);
require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/CutoutImage.tsx");

export default noop.memo(function CutoutImage(cutoutTopLeftSize) {
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
  const obj2 = imageTintColor(1255);
  [tmp4, c1] = noop.useState(imageTintColor(1255).v4());
  if (null != tmp4) {
    const _HermesInternal = HermesInternal;
    const combined = "url(#" + tmp4 + ")";
  }
  let v4Result;
  if (num15 > 0) {
    v4Result = imageTintColor(1255).v4();
    const tmpResult = imageTintColor(1255);
  }
  if (null != v4Result) {
    const _HermesInternal2 = HermesInternal;
    const combined1 = "url(#" + v4Result + ")";
  }
  const items = [imageTintColor];
  const callback = noop.useCallback(() => {
    _undefined(v1.v4());
  }, []);
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != imageTintColor) {
      _undefined(v1.v4());
    }
  }, items);
  const size = { style: cutoutTopLeftSize.style, height: imageSize, width: imageSize, children: null };
  const tmp3 = _slicedToArray(noop.useState(imageTintColor(1255).v4()), 2);
  const size1 = { width: imageSize, height: imageSize, id: tmp4, children: null };
  if (imageBorderRadius === imageSize / 2) {
    const obj3 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / 2, fill: "white" };
    let tmp16 = closure_6(imageTintColor(8606).Circle, obj3);
    let tmp15 = closure_6;
  } else {
    tmp15 = closure_6;
    const size2 = { x: 0, y: 0, width: imageSize, height: imageSize, rx: imageBorderRadius, ry: imageBorderRadius, fill: "white" };
    tmp16 = closure_6(imageTintColor(8606).Rect, size2);
  }
  const items1 = [tmp16, , , , , ];
  let tmp15Result = null;
  if (num > 0) {
    const obj4 = { cx: num2, cy: num3, r: num, fill: "black" };
    tmp15Result = tmp15(imageTintColor(8606).Circle, obj4);
  }
  items1[1] = tmp15Result;
  let tmp15Result10 = null;
  if (num4 > 0) {
    const obj5 = { cx: imageSize - num5, cy: num6, r: num4, fill: "black" };
    tmp15Result10 = tmp15(imageTintColor(8606).Circle, obj5);
  }
  items1[2] = tmp15Result10;
  let tmp15Result11 = null;
  if (num7 > 0) {
    const obj6 = { cx: num8, cy: imageSize - num9, r: num7, fill: "black" };
    tmp15Result11 = tmp15(imageTintColor(8606).Circle, obj6);
  }
  items1[3] = tmp15Result11;
  let tmp15Result12 = null;
  if (num10 > 0) {
    const obj7 = { cx: imageSize - num11, cy: imageSize - num12, r: num10, fill: "black" };
    tmp15Result12 = tmp15(imageTintColor(8606).Circle, obj7);
  }
  items1[4] = tmp15Result12;
  if (num14 <= 0) {
    items1[5] = null;
    size1.children = items1;
    const items2 = [closure_7(imageTintColor(8606).Mask, size1), ];
    if (null == v4Result) {
      const obj8 = { children: null };
      items2[1] = null;
      obj8.children = items2;
      const items3 = [closure_7(imageTintColor(8606).Defs, obj8), , , ];
      let tmp15Result13 = null;
      if (null != imageBackgroundColor) {
        const size3 = { height: imageSize, width: imageSize, fill: imageBackgroundColor, mask: combined, clipPath: combined1 };
        tmp15Result13 = tmp15(imageTintColor(8606).Rect, size3);
      }
      items3[1] = tmp15Result13;
      if (null == imageSource) {
        items3[2] = null;
        let tmp15Result14 = null;
        if (null != borderStroke) {
          const size4 = { height: imageSize, width: imageSize, fill: "transparent", stroke: cutoutTopLeftSize.borderStrokeColor, strokeWidth: 2 * borderStroke, mask: combined, clipPath: combined1, rx: imageBorderRadius, ry: imageBorderRadius };
          tmp15Result14 = tmp15(imageTintColor(8606).Rect, size4);
        }
        items3[3] = tmp15Result14;
        size.children = items3;
        return closure_7(tmp14, size);
      } else {
        if (typeof imageSource !== "number") {
          const size5 = { height: imageSize, width: imageSize, href: getReactNativeSVGImageSourceDefault(imageSource), mask: combined, clipPath: combined1 };
          let tmp15Result15 = tmp15(imageTintColor(8606).Image, size5);
        }
        const size6 = { height: imageSize, width: imageSize, mask: combined, clipPath: combined1, children: null };
        const obj9 = { style: null, source: null, onLoad: null };
        const size7 = { width: imageSize, height: imageSize, tintColor: imageTintColor };
        obj9.style = size7;
        obj9.source = imageSource;
        obj9.onLoad = callback;
        size6.children = tmp15(Image, obj9);
        tmp15Result15 = tmp15(imageTintColor(8606).ForeignObject, size6);
      }
    } else {
      const obj10 = { id: v4Result, children: null };
      if (imageBorderRadius === imageSize / 2) {
        const obj11 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / 4, fill: "white" };
        let tmp15Result16 = tmp15(imageTintColor(8606).Circle, obj11);
      } else {
        const size8 = { x: num15, y: num15, width: imageSize - 2 * num15, height: imageSize - 2 * num15, rx: imageBorderRadius * ((imageSize - 2 * num15) / imageSize), ry: imageBorderRadius * ((imageSize - 2 * num15) / imageSize), fill: "white" };
        tmp15Result16 = tmp15(imageTintColor(8606).Rect, size8);
      }
      obj10.children = tmp15Result16;
      tmp15(imageTintColor(8606).ClipPath, obj10);
    }
  } else if (imageBorderRadius === imageSize / 2) {
    const obj12 = { cx: imageSize / 2, cy: imageSize / 2, r: num14 / 2, fill: "black" };
    let tmp15Result18 = tmp15(imageTintColor(8606).Circle, obj12);
  } else {
    const size9 = { x: (imageSize - num14) / 2, y: (imageSize - num14) / 2, width: num14, height: num14, rx: imageBorderRadius * (num14 / imageSize), ry: imageBorderRadius * (num14 / imageSize), fill: "black" };
    tmp15Result18 = tmp15(imageTintColor(8606).Rect, size9);
  }
  tmp14 = inlineStylesDefault;
});