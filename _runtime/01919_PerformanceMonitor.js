// === Module 1919: PerformanceMonitor ===

// Module 1919 (PerformanceMonitor)
import _mod1885 from "module_1885" /* 1885 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _isNativeReflectConstruct from "module_1821" /* 1821 */;

const require = globalThis.__r;

function JsPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  _require = undefined;
  dependencyMap = undefined;
  const sharedValue = require("module_1885").useSharedValue(null);
  _require = sharedValue;
  require("module_1885");
  if (typeof createCircularDoublesBuffer === "function") {
    const obj2 = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
    const _Float32Array = Float32Array;
    const float32Array = new Float32Array(smoothingFrames);
    obj2.buffer = float32Array;
    obj2.size = smoothingFrames;
    obj2.push = function push(arg0) {
      this.buffer[this.next] = arg0;
      this.next = (this.next + 1) % this.size;
      this.count = Math.min(this.size, this.count + 1);
      let tmp = null;
      if (this.count === this.size) {
        tmp = this.buffer[this.next];
      }
      return tmp;
    };
    obj2.front = function front() {
      const self = this;
      if (this.count > 0) {
        let diff = self.next - 1;
        if (diff < 0) {
          diff = self.size - 1;
        }
        return self.buffer[diff];
      } else {
        return null;
      }
    };
    obj2.back = function back() {
      const self = this;
      let tmp = null;
      if (this.count > 0) {
        tmp = self.buffer[self.next];
      }
      return tmp;
    };
    dependencyMap = tmp6(obj2);
    items = [sharedValue, tmp5];
    closure_2(() => {
      c0 = 0;
      function loop() {
        let animationFrame = requestAnimationFrame((arg0) => {
          if (closure_0 > 0) {
            const _Math2 = Math;
            const current = loop.current;
            if (typeof closure_1_9 === "function") {
              const _Math = Math;
              const rounded = Math.round(tmp8);
              let arr = current.push(rounded);
              if (arr == null) {
                arr = rounded;
              }
              const result = 2 * closure_137_0((rounded - arr) / current.count);
              c0.value = result.toFixed(0);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          closure_0 = arg0;
          const animationFrame = requestAnimationFrame(closure_1_1);
        });
      }
      let animationFrame = requestAnimationFrame((arg0) => {
        if (closure_0 > 0) {
          const _Math2 = Math;
          const current = loop.current;
          if (typeof closure_1_9 === "function") {
            const _Math = Math;
            const rounded = Math.round(tmp8);
            let arr = current.push(rounded);
            if (arr == null) {
              arr = rounded;
            }
            const result = 2 * closure_137_0((rounded - arr) / current.count);
            c0.value = result.toFixed(0);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        closure_0 = arg0;
        const animationFrame = requestAnimationFrame(closure_1_1);
      });
    }, items);
    const items1 = [closure_10, sharedValue];
    _require = undefined;
    [tmp17, tmp18] = items1;
    function pnpm_PerformanceMonitorTsx4() {
      let str = _undefined.value;
      if (str == null) {
        str = "N/A";
      }
      const text = `${"JS: " + str} `;
      return { text, defaultValue: text };
    }
    const items2 = [tmp18];
    pnpm_PerformanceMonitorTsx4.__closure = items2;
    pnpm_PerformanceMonitorTsx4.__workletHash = 6006834679907;
    pnpm_PerformanceMonitorTsx4.__initData = tmp17;
    const obj3 = { style: closure_15.container, children: null };
    const obj4 = { style: closure_15.text, animatedProps: tmp(1885).useAnimatedProps(pnpm_PerformanceMonitorTsx4), editable: false };
    obj3.children = closure_5(closure_8, obj4);
    return closure_5(closure_4, obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj = require("module_1885");
  tmp = _require;
}
function UiPerformance(smoothingFrames) {
  const sharedValue = _mod1885.useSharedValue(null);
  const sharedValue1 = _mod1885.useSharedValue(null);
  items = [closure_12, sharedValue1, createCircularDoublesBuffer, smoothingFrames.smoothingFrames, completeBufferRoutine, sharedValue];
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  function pnpm_PerformanceMonitorTsx5(timestamp) {
    if (null === _undefined.value) {
      _undefined.value = _undefined2(c2);
    }
    c4.value = _undefined3(_undefined.value, Math.round(timestamp.timestamp)).toFixed(0);
    const obj = _undefined3(_undefined.value, Math.round(timestamp.timestamp));
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_PerformanceMonitorTsx5.__closure = items1;
  pnpm_PerformanceMonitorTsx5.__workletHash = 2194415751359;
  pnpm_PerformanceMonitorTsx5.__initData = tmp5;
  _mod1885.useFrameCallback(pnpm_PerformanceMonitorTsx5);
  const items2 = [closure_13, sharedValue];
  c0 = undefined;
  [tmp12, tmp13] = items2;
  function pnpm_PerformanceMonitorTsx6() {
    let str = _undefined.value;
    if (str == null) {
      str = "N/A";
    }
    const text = `${"UI: " + str} `;
    return { text, defaultValue: text };
  }
  const items3 = [tmp13];
  pnpm_PerformanceMonitorTsx6.__closure = items3;
  pnpm_PerformanceMonitorTsx6.__workletHash = 12499189827236;
  pnpm_PerformanceMonitorTsx6.__initData = tmp12;
  const obj4 = { style: closure_15.container, children: null };
  const tmpResult = _mod1885;
  obj4.children = hasOwnProperty(closure_8, { style: closure_15.text, animatedProps: _mod1885.useAnimatedProps(pnpm_PerformanceMonitorTsx6), editable: false });
  return hasOwnProperty(React4, obj4);
}
({ useEffect: c2, useRef: c3 } = noop);
({ StyleSheet, View: closure_4, TextInput } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [{ code: "(function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};})" }];
[tmp5] = items;
function createCircularDoublesBuffer(size) {
  const obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
  const float32Array = new Float32Array(size);
  obj.buffer = float32Array;
  obj.size = size;
  obj.push = function push(arg0) {
    this.buffer[this.next] = arg0;
    this.next = (this.next + 1) % this.size;
    this.count = Math.min(this.size, this.count + 1);
    let tmp = null;
    if (this.count === this.size) {
      tmp = this.buffer[this.next];
    }
    return tmp;
  };
  obj.front = function front() {
    const self = this;
    if (this.count > 0) {
      let diff = self.next - 1;
      if (diff < 0) {
        diff = self.size - 1;
      }
      return self.buffer[diff];
    } else {
      return null;
    }
  };
  obj.back = function back() {
    const self = this;
    let tmp = null;
    if (this.count > 0) {
      tmp = self.buffer[self.next];
    }
    return tmp;
  };
  return obj;
}
createCircularDoublesBuffer.__workletHash = 8460722829114;
createCircularDoublesBuffer.__initData = tmp5;
let closure_8 = _isNativeReflectConstruct.createAnimatedComponent(TextInput);
let items1 = [{ code: "(function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;})" }];
[tmp6] = items1;
function getFps(arg0) {
  return 1000 / arg0;
}
getFps.__workletHash = 4570548508373;
getFps.__initData = tmp6;
let items2 = [{ code: "(function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){let[getFps]=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);})" }, getFps];
let closure_129_0;
[tmp7, tmp8] = items2;
function completeBufferRoutine(count, arg1) {
  const rounded = Math.round(arg1);
  let arr = count.push(rounded);
  if (arr == null) {
    arr = rounded;
  }
  return require((rounded - arr) / count.count);
}
let items3 = [tmp8];
completeBufferRoutine.__closure = items3;
completeBufferRoutine.__workletHash = 3986155444362;
completeBufferRoutine.__initData = tmp7;
let closure_10 = { code: "(function pnpm_PerformanceMonitorTsx4(){let[jsFps]=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};})" };
let closure_12 = { code: "(function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){let[circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps]=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);})" };
let closure_13 = { code: "(function pnpm_PerformanceMonitorTsx6(){let[uiFps]=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};})" };
const styles = StyleSheet.create({ monitor: { flexDirection: "row", position: "absolute", backgroundColor: "#0006", zIndex: 1000 }, header: { fontSize: 14, color: "#ffff", paddingHorizontal: 5 }, text: { fontSize: 13, fontVariant: ["tabular-nums"], color: "#ffff", fontFamily: "monospace", paddingHorizontal: 3 }, container: { alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" } });

export function PerformanceMonitor(smoothingFrames) {
  let num = smoothingFrames.smoothingFrames;
  if (num === undefined) {
    num = 20;
  }
  const obj = { style: closure_15.monitor, children: null };
  items = [hasOwnProperty(JsPerformance, { smoothingFrames: num }), hasOwnProperty(UiPerformance, { smoothingFrames: num })];
  obj.children = items;
  return timestampProducer(React4, obj);
}