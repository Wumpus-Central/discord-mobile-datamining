// === Module 12833: ConjureDither ===

// Module 12833 (ConjureDither)
import _modDef1652 from "module_1652" /* 1652 */;
import inlineStyles from "inlineStyles" /* 8176 */;
import _mod12834 from "module_12834" /* 12834 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function BandPicture(width) {
  ({ band, state } = width);
  width = width.width;
  const height = width.height;
  ({ fill: noop, fillOpacity: closure_4 } = width);
  const tmp3 = state(height[3]).LEVELS[band];
  closure_5 = tmp3;
  const bound = Math.max(0.02, tmp3 - state(height[3]).FADE_HALF);
  const bellReachResult = state(height[3]).bellReach(bound);
  const combined = "" + band + "-" + state;
  let size = { width, height, style: fillOpacity.absoluteFill, children: null };
  let obj = state(height[3]);
  const size1 = { id: "cells-" + combined, patternUnits: "userSpaceOnUse", width: state(height[3]).TILE, height: state(height[3]).TILE, children: null };
  const tmp8 = width(height[4]);
  size1.children = state(height[3]).TILES[band].map((item) => {
    const size = { x: item.x, y: item.y, width: _mod12834.CELL, height: _mod12834.CELL, rx: _mod12834.CORNER, fill, fillOpacity };
    return timestampProducer(inlineStyles.Rect, size, "" + item.x + "-" + item.y);
  });
  items = [bound(state(height[4]).Pattern, size1), , , ];
  let obj2 = { id: "bell-" + combined, children: null };
  let obj3 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
  const arr = state(height[3]).TILES[band];
  const obj6 = state(height[3]);
  obj3.offset = obj6.isoStop(state(height[3]).bellReach(tmp3 + state(height[3]).FADE_HALF), bellReachResult);
  const items1 = [bound(state(height[4]).Stop, obj3), bound(state(height[4]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
  obj2.children = items1;
  items[1] = combined(state(height[4]).RadialGradient, obj2);
  const BLOBS = state(height[3]).BLOBS;
  items[2] = BLOBS.map((peak, index) => {
    const obj = { id: "blob-" + combined + "-" + index, children: null };
    const obj2 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
    const obj3 = _mod12834;
    ({ peak, radius } = peak);
    const blobReachResult = _mod12834.blobReach(peak, radius, closure_5 + _mod12834.FADE_HALF);
    obj2.offset = obj3.isoStop(blobReachResult, _mod12834.blobReach(peak.peak, peak.radius, bound));
    items = [timestampProducer(inlineStyles.Stop, obj2), timestampProducer(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
    obj.children = items;
    return metroImportDefault(inlineStyles.RadialGradient, obj, index);
  });
  const size2 = { id: "iso-" + combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: null };
  let tmp9Result = null;
  if (bellReachResult > 0) {
    let obj4 = { cx: width / 2, cy: height, rx: bellReachResult / tmp(tmp2[3]).BELL_H_FACTOR * width, ry: bellReachResult / tmp(tmp2[3]).BELL_V_SQUASH * height, fill: null };
    let _HermesInternal = HermesInternal;
    obj4.fill = "url(#bell-" + combined + ")";
    tmp9Result = tmp9(tmp(tmp2[4]).Ellipse, obj4);
  }
  const obj5 = { children: null };
  const items2 = [tmp9Result, ];
  const BLOBS1 = tmp(tmp2[3]).BLOBS;
  items2[1] = BLOBS1.map((peak, index) => {
    const blobReachResult = _mod12834.blobReach(peak.peak, peak.radius, bound);
    if (blobReachResult <= 0) {
      return null;
    } else {
      const _Math = Math;
      ({ x0, ax } = peak);
      const _Math2 = Math;
      const sum = x0 + ax * Math.sin(tmp8 + peak.px);
      ({ y0, ay } = peak);
      const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
      const obj2 = { cx: sum * width, cy: sum1 * height, rx: blobReachResult * width, ry: blobReachResult * height, fill: null };
      const _HermesInternal = HermesInternal;
      obj2.fill = "url(#blob-" + combined + "-" + index + ")";
      return timestampProducer(inlineStyles.Ellipse, obj2, index);
    }
  });
  size2.children = items2;
  items[3] = combined(state(height[4]).Mask, size2);
  obj5.children = items;
  const items3 = [combined(state(height[4]).Defs, obj5), ];
  const size3 = { x: 0, y: 0, width, height, fill: "url(#cells-" + combined + ")", mask: "url(#iso-" + combined + ")" };
  items3[1] = bound(state(height[4]).Rect, size3);
  size.children = items3;
  return combined(tmp8, size);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let items = [0, Math.PI];
let closure_10 = { code: "(function ConjureDitherAndroidTsx1(frame){let[STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS]=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());})" };
let closure_11 = { code: "(function ConjureDitherAndroidTsx2(){let[phase]=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};})" };
let closure_12 = { code: "(function ConjureDitherAndroidTsx3(){let[phase]=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureDither.android.tsx");

export default function ConjureDither(width) {
  width = width.width;
  _require = width;
  ({ height: c1, thinking } = width);
  dependencyMap = thinking;
  ({ fill: c3, fillOpacity: c4 } = width);
  let sharedValue2;
  closure_6 = undefined;
  closure_7 = undefined;
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj = require("module_1652");
  let num = 1;
  let num2 = 1;
  if (thinking) {
    num2 = 3;
  }
  const sharedValue1 = require("module_1652").useSharedValue(num2);
  const obj2 = require("module_1652");
  if (thinking) {
    num = 3;
  }
  sharedValue2 = require("module_1652").useSharedValue(num);
  items = [sharedValue2, thinking];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c2) {
      num = 3;
    }
    const result = sharedValue2.set(num);
  }, items);
  const tmpResult = require("module_1652");
  const items1 = [closure_10, 80, sharedValue1, sharedValue2, sharedValue, 9000];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  absoluteFill = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class ConjureDitherAndroidTsx1 {
    constructor(arg0) {
      num = width.timeSincePreviousFrame;
      if (num == null) {
        num = 16;
      }
      bound = Math.min(64, num);
      diff = 1 - Math.exp(-bound / closure_0);
      value = closure_1.get();
      value1 = closure_2.get();
      result = closure_1.set(value + (value1 - closure_1.get()) * diff);
      value2 = closure_3.get();
      result1 = bound / closure_4 * 2 * Math.PI;
      result2 = closure_3.set(value2 + result1 * closure_1.get());
      return;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  ConjureDitherAndroidTsx1.__closure = items2;
  ConjureDitherAndroidTsx1.__workletHash = 13577503851898;
  ConjureDitherAndroidTsx1.__initData = tmp7;
  require("module_1652").useFrameCallback(ConjureDitherAndroidTsx1);
  const tmpResult4 = require("module_1652");
  const items3 = [closure_11, sharedValue];
  _require = undefined;
  [tmp14, tmp15] = items3;
  class ConjureDitherAndroidTsx2 {
    constructor() {
      obj = { opacity: (1 + Math.cos(closure_0.get())) / 2 };
      return obj;
    }
  }
  const items4 = [tmp15];
  ConjureDitherAndroidTsx2.__closure = items4;
  ConjureDitherAndroidTsx2.__workletHash = 2589685812342;
  ConjureDitherAndroidTsx2.__initData = tmp14;
  closure_6 = require("module_1652").useAnimatedStyle(ConjureDitherAndroidTsx2);
  const tmpResult5 = require("module_1652");
  const items5 = [closure_12, sharedValue];
  _require = undefined;
  [tmp16, tmp17] = items5;
  class ConjureDitherAndroidTsx3 {
    constructor() {
      obj = { opacity: (1 - Math.cos(closure_0.get())) / 2 };
      return obj;
    }
  }
  const items6 = [tmp17];
  ConjureDitherAndroidTsx3.__closure = items6;
  ConjureDitherAndroidTsx3.__workletHash = 9176560266449;
  ConjureDitherAndroidTsx3.__initData = tmp16;
  closure_7 = require("module_1652").useAnimatedStyle(ConjureDitherAndroidTsx3);
  let tmp18 = null;
  if (width > 0) {
    const obj3 = { style: absoluteFill.absoluteFill, pointerEvents: "none", children: null };
    const LEVELS = tmp(12834).LEVELS;
    obj3.children = LEVELS.map((item, index) => items.map((item, state) => {
      items = [React4.absoluteFill, ];
      const obj = { style: items, renderToHardwareTextureAndroid: true, children: null };
      items[1] = 0 === state ? closure_6 : closure_7;
      const size = { band: index, state, width: index, height, fill, fillOpacity };
      obj.children = timestampProducer(BandPicture, size);
      return timestampProducer(_modDef1652.View, obj, "" + index + "-" + state);
    }));
    tmp18 = closure_6(sharedValue2, obj3);
  }
  return tmp18;
};