// discord_app/modules/vibegrations/native/VibegrationsConjureDither.android.tsx
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import inlineStyles from "../../../../_runtime/08689_inlineStyles.js";
import _mod16968 from "../../../../_runtime/metro/16968__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const size1 = {
    id: "cells-" + combined,
    patternUnits: "userSpaceOnUse",
    width: state(height[3]).TILE,
    height: state(height[3]).TILE,
    children: null,
  };
  const tmp8 = width(height[4]);
  size1.children = state(height[3]).TILES[band].map((item) => {
    const size = {
      x: item.x,
      y: item.y,
      width: _mod16968.CELL,
      height: _mod16968.CELL,
      rx: _mod16968.CORNER,
      fill,
      fillOpacity,
    };
    return timestampProducer(inlineStyles.Rect, size, "" + item.x + "-" + item.y);
  });
  items = [bound(state(height[4]).Pattern, size1), , ,];
  let obj2 = { id: "bell-" + combined, children: null };
  let obj3 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
  const arr = state(height[3]).TILES[band];
  const obj6 = state(height[3]);
  obj3.offset = obj6.isoStop(state(height[3]).bellReach(tmp3 + state(height[3]).FADE_HALF), bellReachResult);
  const items1 = [
    bound(state(height[4]).Stop, obj3),
    bound(state(height[4]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 }),
  ];
  obj2.children = items1;
  items[1] = combined(state(height[4]).RadialGradient, obj2);
  const BLOBS = state(height[3]).BLOBS;
  items[2] = BLOBS.map((peak, index) => {
    const obj = { id: "blob-" + combined + "-" + index, children: null };
    const obj2 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
    const obj3 = _mod16968;
    ({ peak, radius } = peak);
    const blobReachResult = _mod16968.blobReach(peak, radius, closure_5 + _mod16968.FADE_HALF);
    obj2.offset = obj3.isoStop(blobReachResult, _mod16968.blobReach(peak.peak, peak.radius, bound));
    items = [
      timestampProducer(inlineStyles.Stop, obj2),
      timestampProducer(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 }),
    ];
    obj.children = items;
    return React5(inlineStyles.RadialGradient, obj, index);
  });
  const size2 = { id: "iso-" + combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: null };
  let tmp9Result = null;
  if (bellReachResult > 0) {
    let obj4 = {
      cx: width / 2,
      cy: height,
      rx: (bellReachResult / tmp(tmp2[3]).BELL_H_FACTOR) * width,
      ry: (bellReachResult / tmp(tmp2[3]).BELL_V_SQUASH) * height,
      fill: null,
    };
    let _HermesInternal = HermesInternal;
    obj4.fill = "url(#bell-" + combined + ")";
    tmp9Result = tmp9(tmp(tmp2[4]).Ellipse, obj4);
  }
  const obj5 = { children: null };
  const items2 = [tmp9Result];
  const BLOBS1 = tmp(tmp2[3]).BLOBS;
  items2[1] = BLOBS1.map((peak, index) => {
    const blobReachResult = _mod16968.blobReach(peak.peak, peak.radius, bound);
    if (blobReachResult <= 0) {
      return null;
    } else {
      const _Math = Math;
      ({ x0, ax } = peak);
      const _Math2 = Math;
      const sum = x0 + ax * Math.sin(tmp8 + peak.px);
      ({ y0, ay } = peak);
      const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
      const obj2 = {
        cx: sum * width,
        cy: sum1 * height,
        rx: blobReachResult * width,
        ry: blobReachResult * height,
        fill: null,
      };
      const _HermesInternal = HermesInternal;
      obj2.fill = "url(#blob-" + combined + "-" + index + ")";
      return timestampProducer(inlineStyles.Ellipse, obj2, index);
    }
  });
  size2.children = items2;
  items[3] = combined(state(height[4]).Mask, size2);
  obj5.children = items;
  const items3 = [combined(state(height[4]).Defs, obj5)];
  const size3 = { x: 0, y: 0, width, height, fill: "url(#cells-" + combined + ")", mask: "url(#iso-" + combined + ")" };
  items3[1] = bound(state(height[4]).Rect, size3);
  size.children = items3;
  return combined(tmp8, size);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [0, Math.PI];
const __initData = {
  code: "function VibegrationsConjureDitherAndroidTsx1(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}",
};
const __initData2 = {
  code: "function VibegrationsConjureDitherAndroidTsx2(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}",
};
const __initData3 = {
  code: "function VibegrationsConjureDitherAndroidTsx3(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureDither.android.tsx");

export default function VibegrationsConjureDither(width) {
  width = width.width;
  ({ height: importDefault, thinking } = width);
  ({ fill: noop, fillOpacity: closure_4 } = width);
  let sharedValue1;
  let sharedValue2;
  closure_8 = undefined;
  closure_9 = undefined;
  const sharedValue = width(thinking[5]).useSharedValue(0);
  let obj = width(thinking[5]);
  let num = 1;
  let num2 = 1;
  if (thinking) {
    num2 = 3;
  }
  sharedValue1 = width(thinking[5]).useSharedValue(num2);
  const obj2 = width(thinking[5]);
  if (thinking) {
    num = 3;
  }
  sharedValue2 = width(thinking[5]).useSharedValue(num);
  items = [sharedValue2, thinking];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (thinking) {
      num = 3;
    }
    const result = sharedValue2.set(num);
  }, items);
  const tmpResult = width(thinking[5]);
  const fn = function b(timeSincePreviousFrame) {
    let num = timeSincePreviousFrame.timeSincePreviousFrame;
    if (num == null) {
      num = 16;
    }
    const bound = Math.min(64, num);
    const diff = 1 - Math.exp(-bound / 80);
    value = sharedValue1.get();
    const value3 = sharedValue2.get();
    const result = sharedValue1.set(value + (value3 - sharedValue1.get()) * diff);
    const value4 = sharedValue.get();
    const result1 = (bound / 9000) * 2 * Math.PI;
    const result2 = sharedValue.set(value4 + result1 * sharedValue1.get());
  };
  fn.__closure = {
    STATE_LERP_MS: 80,
    speed: sharedValue1,
    targetSpeed: sharedValue2,
    phase: sharedValue,
    CYCLE_MS: 9000,
  };
  fn.__workletHash = 4536504687968;
  fn.__initData = __initData;
  width(thinking[5]).useFrameCallback(fn);
  const tmpResult4 = width(thinking[5]);
  class L {
    constructor() {
      obj = { opacity: (1 + Math.cos(closure_5.get())) / 2 };
      return obj;
    }
  }
  L.__closure = { phase: sharedValue };
  L.__workletHash = 10967678983116;
  L.__initData = __initData2;
  closure_8 = width(thinking[5]).useAnimatedStyle(L);
  const tmpResult5 = width(thinking[5]);
  class M {
    constructor() {
      obj = { opacity: (1 - Math.cos(closure_5.get())) / 2 };
      return obj;
    }
  }
  M.__closure = { phase: sharedValue };
  M.__workletHash = 9179963715851;
  M.__initData = __initData3;
  closure_9 = width(thinking[5]).useAnimatedStyle(M);
  let tmp8 = null;
  if (width > 0) {
    const obj3 = { style: fillOpacity.absoluteFill, pointerEvents: "none", children: null };
    const LEVELS = tmp(thinking[3]).LEVELS;
    obj3.children = LEVELS.map((item, index) => {
      const band = index;
      return closure_8.map((item, state) => {
        items = [React4.absoluteFill];
        const obj = { style: items, renderToHardwareTextureAndroid: true, children: null };
        items[1] = 0 === state ? closure_8 : closure_9;
        const size = { band, state, width, height, fill, fillOpacity };
        obj.children = timestampProducer(BandPicture, size);
        return timestampProducer(ReanimatedRexportDefault.View, obj, "" + band + "-" + state);
      });
    });
    tmp8 = sharedValue1(sharedValue, obj3);
  }
  return tmp8;
}
