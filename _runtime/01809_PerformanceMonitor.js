// _runtime/01809_PerformanceMonitor.js
import react_mod from "00019_react.js";
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import configureProps from "01742_configureProps.js";
import 01677__ from "metro/01677__.js";

let closure_1_0, dependencyMap;

let StyleSheet;
let TextInput;
let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function push(arg0) {
  this.buffer[this.next] = arg0;
  this.next = (this.next + 1) % this.size;
  const count = this.count;
  const tmp = this.buffer[this.next];
  this.count = Math.min(this.size, this.count + 1);
  let tmp2 = null;
  if (count === this.size) {
    tmp2 = tmp;
  }
  return tmp2;
}
function front() {
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
}
function back() {
  const self = this;
  let tmp = null;
  if (this.count > 0) {
    tmp = self.buffer[self.next];
  }
  return tmp;
}
function JsPerformance(smoothingFrames) {
  let closure_1;
  let float32Array;
  let obj5;
  let tmpResult;
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  dependencyMap = undefined;
  const obj = sharedValue(1786);
  const tmp = sharedValue;
  sharedValue = obj.useSharedValue(null);
  sharedValue(1786);
  if (typeof createCircularDoublesBuffer === "function") {
    const _Float32Array = Float32Array;
    const self = this;
    const self2 = this;
    const obj2 = { next: 0, buffer: float32Array, size: smoothingFrames, count: 0, push, front, back };
    float32Array = new Float32Array(smoothingFrames);
    dependencyMap = tmp6(obj2);
    const items = [sharedValue, tmp5];
    closure_2(() => {
      const f154445 = (arg0) => {
        if (closure_1_0 > 0) {
          const _Math2 = Math;
          const current = loop.current;
          if (typeof closure_1_10 === "function") {
            const _Math = Math;
            const rounded = Math.round(tmp9);
            let arr = current.push(rounded);
            if (arr == null) {
              arr = rounded;
            }
            if (typeof closure_1_9 === "function") {
              const result = 2 * (1000 / tmp5);
              c0.value = result.toFixed(0);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        closure_1_0 = arg0;
        const animationFrame = requestAnimationFrame(closure_1_1);
      };
      let c0 = 0;
      function loop() {
        let animationFrame = requestAnimationFrame(f154445);
      }
      let animationFrame = requestAnimationFrame(f154445);
    }, items);
    const fn = function f() {
      let str = sharedValue.value;
      if (str == null) {
        str = "N/A";
      }
      const text = `${"JS: " + str} `;
      return { text, defaultValue: text };
    };
    const obj3 = { jsFps: sharedValue };
    fn.__closure = obj3;
    fn.__workletHash = 12993491204154;
    fn.__initData = __initData;
    const obj4 = { style: closure_16.container, children: closure_5(closure_8, obj5) };
    obj5 = { style: closure_16.text, animatedProps: tmpResult.useAnimatedProps(fn), editable: false };
    tmpResult = tmp(1786);
    return closure_5(closure_4, obj4);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
function UiPerformance(smoothingFrames) {
  let obj7;
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  let obj = smoothingFrames(sharedValue[5]);
  sharedValue = obj.useSharedValue(null);
  const obj2 = smoothingFrames(sharedValue[5]);
  const sharedValue1 = obj2.useSharedValue(null);
  const fn = function n(arg0) {
    let float32Array;
    if (null === sharedValue1.value) {
      if (typeof createCircularDoublesBuffer === "function") {
        const _Float32Array = Float32Array;
        const self = this;
        const self2 = this;
        const obj = { next: 0, buffer: float32Array, size: smoothingFrames, count: 0, push, front, back };
        float32Array = new Float32Array(smoothingFrames);
        sharedValue1.value = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const value = sharedValue1.value;
    if (typeof completeBufferRoutine === "function") {
      const _Math = Math;
      const rounded = Math.round(tmp7);
      let arr = value.push(rounded);
      if (arr == null) {
        arr = rounded;
      }
      if (typeof getFps === "function") {
        const result = 1000 / tmp11;
        sharedValue.value = result.toFixed(0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj4 = { circularBuffer: sharedValue1, createCircularDoublesBuffer, smoothingFrames, completeBufferRoutine, uiFps: sharedValue };
  fn.__closure = obj4;
  fn.__workletHash = 10137562113926;
  fn.__initData = __initData2;
  const obj3 = smoothingFrames(sharedValue[5]);
  obj3.useFrameCallback(fn);
  const fn2 = function s() {
    let str = sharedValue.value;
    if (str == null) {
      str = "N/A";
    }
    const text = `${"UI: " + str} `;
    return { text, defaultValue: text };
  };
  fn2.__closure = { uiFps: sharedValue };
  fn2.__workletHash = 1865752198941;
  fn2.__initData = __initData3;
  const obj6 = { style: closure_16.container, children: closure_5(closure_8, obj7) };
  const obj5 = smoothingFrames(sharedValue[5]);
  obj7 = { style: closure_16.text, animatedProps: obj5.useAnimatedProps(fn2), editable: false };
  return closure_5(closure_4, obj6);
}
let react = react_mod;
({ useEffect: c2, useRef: c3 } = react);
react = react_mod;
({ StyleSheet, View: closure_4, TextInput } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
function createCircularDoublesBuffer(size) {
  let float32Array;
  const obj = { next: 0, buffer: float32Array, size, count: 0, push, front, back };
  float32Array = new Float32Array(size);
  return obj;
}
createCircularDoublesBuffer.__closure = {};
createCircularDoublesBuffer.__workletHash = 7814494919003;
createCircularDoublesBuffer.__initData = { code: "function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};}" };
let result = configureProps.addWhitelistedNativeProps({ text: true });
let closure_8 = module_1677.createAnimatedComponent(TextInput);
function getFps(arg0) {
  return 1000 / arg0;
}
getFps.__closure = {};
getFps.__workletHash = 14651351045012;
getFps.__initData = { code: "function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;}" };
function completeBufferRoutine(arr, arg1) {
  const rounded = Math.round(arg1);
  arr = arr.push(rounded);
  if (arr == null) {
    arr = rounded;
  }
  if (typeof getFps === "function") {
    return 1000 / tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
completeBufferRoutine.__closure = { getFps };
completeBufferRoutine.__workletHash = 5653450315763;
completeBufferRoutine.__initData = { code: "function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){const{getFps}=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);}" };
const __initData = { code: "function pnpm_PerformanceMonitorTsx4(){const{jsFps}=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
const __initData2 = { code: "function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){const{circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps}=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);}" };
const __initData3 = { code: "function pnpm_PerformanceMonitorTsx6(){const{uiFps}=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
let obj = { monitor: { flexDirection: "row", position: "absolute", backgroundColor: "#0006", zIndex: 1000 }, header: { fontSize: 14, color: "#ffff", paddingHorizontal: 5 }, text: { fontSize: 13, fontVariant: ["tabular-nums"], color: "#ffff", fontFamily: "monospace", paddingHorizontal: 3 }, container: { alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" } };
const styles = StyleSheet.create(obj);

export const PerformanceMonitor = function PerformanceMonitor(smoothingFrames) {
  let items;
  let num = smoothingFrames.smoothingFrames;
  if (num === undefined) {
    num = 20;
  }
  const obj = { style: closure_16.monitor, children: items };
  items = [hasOwnProperty(JsPerformance, { smoothingFrames: num }), hasOwnProperty(UiPerformance, { smoothingFrames: num })];
  return metroRequire(React3, obj);
};