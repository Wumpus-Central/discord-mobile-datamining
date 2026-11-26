// === Module 17472: AnimatedAssetLayout ===

// Module 17472 (AnimatedAssetLayout)
import size from "module_2" /* 2 */;

function getAnimatedAssetBox(padColor) {
  ({ asset, width, height, aspectRatio, measured } = padColor);
  let tmp;
  if (null != measured) {
    if (measured.width > 0) {
      if (measured.height > 0) {
        const obj = { ratio: measured.width / measured.height };
        const merged = Object.assign(measured);
        tmp = obj;
      }
    }
  }
  let tmp5;
  if (typeof width === "number") {
    tmp5 = width;
  }
  if (null != width) {
    if (null != height) {
      const obj2 = { style: null, predicted: null, measured: null };
      const size = { width, height };
      obj2.style = size;
      let result;
      if (null != tmp5) {
        if (typeof height === "number") {
          if (height > 0) {
            result = tmp5 / height;
          }
        }
      }
      const obj3 = { ratio: result, width: tmp5 };
      obj2.predicted = obj3;
      obj2.measured = tmp;
      return obj2;
    }
  }
  if (typeof aspectRatio === "string") {
    const parts = aspectRatio.split("/");
    const _Number = Number;
    let mapped = parts.map(Number);
  } else {
    let num2 = aspectRatio;
    if (aspectRatio == null) {
      num2 = NaN;
    }
    mapped = [num2];
  }
  let num3 = NaN;
  if (mapped.length <= 2) {
    [tmp7, num4] = mapped;
    num3 = tmp7 / num4;
  }
  let result1;
  if (Number.isFinite(num3)) {
    if (num3 > 0) {
      result1 = num3;
    }
  }
  if (result1 == null) {
    result1 = asset.width / asset.height;
  }
  if (null != width) {
    const obj4 = { width, aspectRatio: result1 };
  } else if (null != height) {
    const obj5 = { height, aspectRatio: result1 };
  }
  const obj6 = { style: { width: "100%", aspectRatio: result1 }, predicted: null, measured: null };
  const obj7 = { ratio: result1, width: null };
  let tmp10 = tmp5;
  if (tmp5 == null) {
    let result2;
    if (typeof height === "number") {
      result2 = height * result1;
    }
    tmp10 = result2;
  }
  obj7.width = tmp10;
  obj6.predicted = obj7;
  obj6.measured = tmp;
  return obj6;
}
const dependencyMap = { center: { x: 0.5, y: 0.5 }, top: { x: 0.5, y: 0 }, bottom: { x: 0.5, y: 1 }, left: { x: 0, y: 0.5 }, right: { x: 1, y: 0.5 }, "top-left": { x: 0, y: 0 }, "top-right": { x: 1, y: 0 }, "bottom-left": { x: 0, y: 1 }, "bottom-right": { x: 1, y: 1 } };
let c2 = 0.000001;
let result = size.fileFinishedImporting("design/components/AnimatedAsset/AnimatedAssetLayout.tsx");

export function getAnimatedAssetLayout(padColor) {
  ({ asset, fit, anchor, pixelRatio } = padColor);
  const tmp = getAnimatedAssetBox(padColor);
  ({ predicted, measured } = tmp);
  let ratio;
  if (measured != null) {
    ratio = measured.ratio;
  }
  if (ratio == null) {
    ratio = predicted.ratio;
  }
  let width1;
  if (measured != null) {
    width1 = measured.width;
  }
  if (width1 == null) {
    width1 = predicted.width;
  }
  let tmp4;
  if (null != ratio) {
    const result = asset.width / asset.height / ratio;
    if ("crop" === fit) {
      let tmp6 = result < 1;
    } else {
      tmp6 = result >= 1;
    }
    let num4 = 1;
    if (!tmp6) {
      num4 = result;
    }
    const result1 = num4 * ratio * asset.height / asset.width;
    const point = dependencyMap[anchor];
    const result2 = (1 - num4) * point.x;
    const result3 = (1 - result1) * point.y;
    closure_0 = tmp13;
    const sum = result2 + num4;
    const sum1 = result3 + result1;
    if (measured == null) {
      measured = { width: 100, height: 100 };
    }
    const rect = { left: result2 * measured.width, top: result3 * measured.height, right: sum * measured.width, bottom: sum1 * measured.height };
    let rect2 = rect;
    if (null != measured) {
      rect2 = rect;
      if ("pad" === fit) {
        const left2 = rect.left;
        let width = measured.width;
        let num5 = 0;
        if (left2 * pixelRatio >= 0.5) {
          if ((width - left2) * pixelRatio >= 0.5) {
            const _Math = Math;
            width = Math.round(left2 * pixelRatio) / pixelRatio;
          }
          num5 = width;
        }
        const rect1 = { left: num5, top: null, right: null, bottom: null };
        let top = rect.top;
        let height = measured.height;
        let num6 = 0;
        if (top * pixelRatio >= 0.5) {
          if ((height - top) * pixelRatio >= 0.5) {
            const _Math2 = Math;
            height = Math.round(top * pixelRatio) / pixelRatio;
          }
          num6 = height;
        }
        rect1.top = num6;
        const right = rect.right;
        let width2 = measured.width;
        let num7 = 0;
        if (right * pixelRatio >= 0.5) {
          if ((width2 - right) * pixelRatio >= 0.5) {
            const _Math3 = Math;
            width2 = Math.round(right * pixelRatio) / pixelRatio;
          }
          num7 = width2;
        }
        rect1.right = num7;
        const bottom = rect.bottom;
        let height2 = measured.height;
        let num8 = 0;
        if (bottom * pixelRatio >= 0.5) {
          if ((height2 - bottom) * pixelRatio >= 0.5) {
            const _Math4 = Math;
            height2 = Math.round(bottom * pixelRatio) / pixelRatio;
          }
          num8 = height2;
        }
        rect1.bottom = num8;
        rect2 = rect1;
      }
    }
    let left = rect2.left;
    let combined = left;
    if (null == measured) {
      let _HermesInternal = HermesInternal;
      combined = "" + left + "%";
    }
    let size = { left: combined, top: null, width: null, height: null };
    const top2 = rect2.top;
    let combined1 = top2;
    if (null == measured) {
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + top2 + "%";
    }
    size.top = combined1;
    let diff = rect2.right - rect2.left;
    let combined2 = diff;
    if (null == measured) {
      let _HermesInternal3 = HermesInternal;
      combined2 = "" + diff + "%";
    }
    size.width = combined2;
    let diff1 = rect2.bottom - rect2.top;
    let combined3 = diff1;
    if (null == measured) {
      let _HermesInternal4 = HermesInternal;
      combined3 = "" + diff1 + "%";
    }
    const obj = { mediaRect: null, padRects: null };
    size.height = combined3;
    obj.mediaRect = size;
    const _Math5 = Math;
    const bound = Math.max(rect2.top, 0);
    const _Math6 = Math;
    const bound1 = Math.min(rect2.bottom, measured.height);
    const rect3 = { left: 0, top: 0, right: measured.width, bottom: bound };
    items = [rect3, , , ];
    const rect4 = { left: 0, top: bound1, right: null, bottom: null };
    ({ width: obj5.right, height: obj5.bottom } = measured);
    items[1] = rect4;
    const rect5 = { left: 0, top: bound, right: null, bottom: null };
    const _Math7 = Math;
    rect5.right = Math.max(rect2.left, 0);
    rect5.bottom = bound1;
    items[2] = rect5;
    const rect6 = { left: null, top: null, right: null, bottom: null };
    const _Math8 = Math;
    rect6.left = Math.min(rect2.right, measured.width);
    rect6.top = bound;
    rect6.right = measured.width;
    rect6.bottom = bound1;
    items[3] = rect6;
    const found = items.filter((right) => right.right - right.left > closure_1_2 && right.bottom - right.top > tmp);
    obj.padRects = found.map((left) => {
      left = left.left;
      let combined = left;
      if (closure_0) {
        const _HermesInternal = HermesInternal;
        combined = "" + left + "%";
      }
      const size = { left: combined, top: null, width: null, height: null };
      const top = left.top;
      let combined1 = top;
      if (closure_0) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + top + "%";
      }
      size.top = combined1;
      const diff = left.right - left.left;
      let combined2 = diff;
      if (closure_0) {
        const _HermesInternal3 = HermesInternal;
        combined2 = "" + diff + "%";
      }
      size.width = combined2;
      const diff1 = left.bottom - left.top;
      let combined3 = diff1;
      if (closure_0) {
        const _HermesInternal4 = HermesInternal;
        combined3 = "" + diff1 + "%";
      }
      size.height = combined3;
      return size;
    });
    tmp4 = obj;
  }
  const point2 = dependencyMap[anchor];
  const obj2 = { boxStyle: tmp.style, objectFitStyle: null, mediaRect: null, padRects: null, mediaPixelWidth: null };
  let str11 = "contain";
  if ("crop" === fit) {
    str11 = "cover";
  }
  obj2.objectFitStyle = { objectFit: str11, objectPosition: "" + 100 * point2.x + "% " + 100 * point2.y + "%" };
  let mediaRect;
  if (tmp4 != null) {
    mediaRect = tmp4.mediaRect;
  }
  obj2.mediaRect = mediaRect;
  if ("pad" === fit) {
    if ("transparent" !== padColor.padColor) {
      if (null != tmp4) {
        const padRects = tmp4.padRects;
      }
      obj2.padRects = [];
      let result5;
      if (null != width1) {
        if (null != ratio) {
          const result4 = asset.width / asset.height / ratio;
          let num10 = 1;
          if (!(tmp31 ? result4 < num10 : result4 >= num10)) {
            num10 = result4;
          }
          result5 = width1 * num10;
        }
      }
      obj2.mediaPixelWidth = result5;
      return obj2;
    }
  }
  const obj3 = { objectFit: str11, objectPosition: "" + 100 * point2.x + "% " + 100 * point2.y + "%" };
}
export { getAnimatedAssetBox };
export function getMediaWidthScale(arg0, width, arg2) {
  const result = width.width / width.height / arg0;
  if ("crop" === arg2) {
    let tmp2 = result < 1;
  } else {
    tmp2 = result >= 1;
  }
  let num3 = 1;
  if (!tmp2) {
    num3 = result;
  }
  return num3;
}