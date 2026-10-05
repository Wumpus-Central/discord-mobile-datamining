// === Module 17394: CutoutImage ===

// Module 17394 (CutoutImage)
import react_native from "react-native" /* 17 */;
import v1 from "v1" /* 1266 */;
import inlineStylesDefault from "inlineStyles" /* 8136 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let tmp13;
const getReactNativeSVGImageSourceDefault = tmp13(12854);
let Image = react_native.Image;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(function CutoutImage(cutoutTopLeftSize) {
  let _undefined;
  let c1;
  let combined;
  let combined1;
  let imageBackgroundColor;
  let imageBorderRadius;
  let imageSize;
  let imageSource;
  let imageTintColor;
  let items1;
  let items3;
  let obj11;
  let size7;
  let tmp15;
  let tmp15Result14;
  let tmp16;
  let tmp4;
  let num = cutoutTopLeftSize.cutoutTopLeftSize;
  const style = cutoutTopLeftSize.style;
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
  const borderStrokeColor = cutoutTopLeftSize.borderStrokeColor;
  const useState = react.useState;
  const obj2 = imageTintColor(1266);
  [tmp4, c1] = useState(obj2.v4());
  _slicedToArray(useState(obj2.v4()), 2);
  if (null != tmp4) {
    const _HermesInternal = HermesInternal;
    combined = "url(#" + tmp4 + ")";
  }
  let v4Result;
  if (num15 > 0) {
    const tmpResult = imageTintColor(1266);
    v4Result = tmpResult.v4();
  }
  if (null != v4Result) {
    const _HermesInternal2 = HermesInternal;
    combined1 = "url(#" + v4Result + ")";
  }
  const items = [imageTintColor];
  const callback = react.useCallback(() => {
    const obj = v1;
    _undefined(obj.v4());
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    if (null != imageTintColor) {
      const obj = v1;
      _undefined(obj.v4());
    }
  }, items);
  size = { style, height: imageSize, width: imageSize, children: items3 };
  const tmp14 = inlineStylesDefault;
  const Defs = imageTintColor(8136).Defs;
  const size1 = { width: imageSize, height: imageSize, id: tmp4, children: items1 };
  const Mask = imageTintColor(8136).Mask;
  if (imageBorderRadius === imageSize / 2) {
    const obj3 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / 2, fill: "white" };
    tmp16 = closure_6(imageTintColor(8136).Circle, obj3);
    tmp15 = closure_6;
  } else {
    tmp15 = closure_6;
    const size2 = { x: 0, y: 0, width: imageSize, height: imageSize, rx: imageBorderRadius, ry: imageBorderRadius, fill: "white" };
    tmp16 = closure_6(imageTintColor(8136).Rect, size2);
  }
  items1 = [tmp16, , , , , ];
  let tmp15Result = null;
  if (num > 0) {
    const obj4 = { cx: num2, cy: num3, r: num, fill: "black" };
    tmp15Result = tmp15(imageTintColor(8136).Circle, obj4);
  }
  items1[1] = tmp15Result;
  let tmp15Result10 = null;
  if (num4 > 0) {
    const obj5 = { cx: imageSize - num5, cy: num6, r: num4, fill: "black" };
    tmp15Result10 = tmp15(imageTintColor(8136).Circle, obj5);
  }
  items1[2] = tmp15Result10;
  let tmp15Result11 = null;
  if (num7 > 0) {
    const obj6 = { cx: num8, cy: imageSize - num9, r: num7, fill: "black" };
    tmp15Result11 = tmp15(imageTintColor(8136).Circle, obj6);
  }
  items1[3] = tmp15Result11;
  let tmp15Result12 = null;
  if (num10 > 0) {
    const obj7 = { cx: imageSize - num11, cy: imageSize - num12, r: num10, fill: "black" };
    tmp15Result12 = tmp15(imageTintColor(8136).Circle, obj7);
  }
  items1[4] = tmp15Result12;
  let tmp22 = null;
  if (num14 > 0) {
    let tmp15Result13;
    if (imageBorderRadius === imageSize / 2) {
      const obj8 = { cx: imageSize / 2, cy: imageSize / 2, r: num14 / 2, fill: "black" };
      tmp15Result13 = tmp15(imageTintColor(8136).Circle, obj8);
    } else {
      const size3 = { x: (imageSize - num14) / 2, y: (imageSize - num14) / 2, width: num14, height: num14, rx: imageBorderRadius * (num14 / imageSize), ry: imageBorderRadius * (num14 / imageSize), fill: "black" };
      tmp15Result13 = tmp15(imageTintColor(8136).Rect, size3);
    }
    tmp22 = tmp15Result13;
  }
  items1[5] = tmp22;
  const items2 = [closure_7(Mask, size1), ];
  let tmp15Result15 = null;
  if (null != v4Result) {
    const obj9 = { id: v4Result, children: tmp15Result14 };
    const ClipPath = imageTintColor(8136).ClipPath;
    if (imageBorderRadius === imageSize / 2) {
      const obj10 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / 4, fill: "white" };
      tmp15Result14 = tmp15(imageTintColor(8136).Circle, obj10);
    } else {
      const size4 = { x: num15, y: num15, width: imageSize - 2 * num15, height: imageSize - 2 * num15, rx: imageBorderRadius * ((imageSize - 2 * num15) / imageSize), ry: imageBorderRadius * ((imageSize - 2 * num15) / imageSize), fill: "white" };
      tmp15Result14 = tmp15(imageTintColor(8136).Rect, size4);
    }
    tmp15Result15 = tmp15(ClipPath, obj9);
  }
  items2[1] = tmp15Result15;
  items3 = [closure_7(Defs, { children: items2 }), , , ];
  let tmp15Result16 = null;
  if (null != imageBackgroundColor) {
    const size5 = { height: imageSize, width: imageSize, fill: imageBackgroundColor, mask: combined, clipPath: combined1 };
    tmp15Result16 = tmp15(imageTintColor(8136).Rect, size5);
  }
  items3[1] = tmp15Result16;
  let tmp27 = null;
  if (null != imageSource) {
    if (typeof imageSource === "number") {
      let tmp15Result17;
      if (null != imageTintColor) {
        const size6 = { height: imageSize, width: imageSize, mask: combined, clipPath: combined1, children: tmp15(Image, obj11) };
        obj11 = { style: size7, source: imageSource, onLoad: callback };
        size7 = { width: imageSize, height: imageSize, tintColor: imageTintColor };
        const ForeignObject = imageTintColor(8136).ForeignObject;
        tmp15Result17 = tmp15(ForeignObject, size6);
      }
      tmp27 = tmp15Result17;
    }
    const size8 = { height: imageSize, width: imageSize, href: getReactNativeSVGImageSourceDefault(imageSource), mask: combined, clipPath: combined1 };
    Image = imageTintColor(8136).Image;
    tmp15Result17 = tmp15(Image, size8);
  }
  items3[2] = tmp27;
  let tmp15Result18 = null;
  if (null != borderStroke) {
    const size9 = { height: imageSize, width: imageSize, fill: "transparent", stroke: borderStrokeColor, strokeWidth: 2 * borderStroke, mask: combined, clipPath: combined1, rx: imageBorderRadius, ry: imageBorderRadius };
    tmp15Result18 = tmp15(imageTintColor(8136).Rect, size9);
  }
  items3[3] = tmp15Result18;
  return closure_7(tmp14, size);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/CutoutImage.tsx");

export default memoResult;