// _runtime/01772_JsPerformance.js
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import configureProps from "configureProps";
import createAnimatedComponent from "createAnimatedComponent";

let StyleSheet;
let TextInput;
let c3;
let c4;
let c5;
let closure_6;
let obj1;
function JsPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  let dependencyMap;
  let obj = sharedValue(1749);
  sharedValue = obj.useSharedValue(null);
  let obj1 = sharedValue(1749);
  const sharedValue1 = obj1.useSharedValue(0);
  if (typeof createCircularDoublesBuffer !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
  const float32Array = new Float32Array(smoothingFrames);
  obj[1] = float32Array;
  obj[2] = smoothingFrames;
  obj[4] = function push(arg0) {
    this.buffer[this.next] = arg0;
    this.next = (this.next + 1) % this.size;
    this.count = Math.min(this.size, this.count + 1);
    let tmp = null;
    if (this.count === this.size) {
      tmp = this.buffer[this.next];
    }
    return tmp;
  };
  obj[5] = function front() {
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
  obj[6] = function back() {
    const self = this;
    let tmp = null;
    if (this.count > 0) {
      tmp = self.buffer[self.next];
    }
    return tmp;
  };
  dependencyMap = closure_3(obj);
  const items = [sharedValue, sharedValue1];
  callback(() => {
    let c0 = 0;
    function loop() {
      let animationFrame = requestAnimationFrame((arg0) => {
        if (closure_0 > 0) {
          const _Math2 = Math;
          const current = outer1_1.current;
          const rounded = Math.round(arg0);
          if (typeof outer1_10 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          const _Math = Math;
          const rounded1 = Math.round(rounded);
          let arr = current.push(rounded1);
          if (arr == null) {
            arr = rounded1;
          }
          const result = (rounded1 - arr) / current.count;
          if (typeof outer1_9 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          const result1 = 2 * (1000 / result);
          outer1_0.value = result1.toFixed(0);
        }
        closure_0 = arg0;
        const animationFrame = requestAnimationFrame(closure_1);
      });
    }
    let animationFrame = requestAnimationFrame((arg0) => {
      if (closure_0 > 0) {
        const _Math2 = Math;
        const current = outer1_1.current;
        const rounded = Math.round(arg0);
        if (typeof outer1_10 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        const _Math = Math;
        const rounded1 = Math.round(rounded);
        let arr = current.push(rounded1);
        if (arr == null) {
          arr = rounded1;
        }
        const result = (rounded1 - arr) / current.count;
        if (typeof outer1_9 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        const result1 = 2 * (1000 / result);
        outer1_0.value = result1.toFixed(0);
      }
      closure_0 = arg0;
      const animationFrame = requestAnimationFrame(closure_1);
    });
  }, items);
  const fn = function f() {
    let str = sharedValue.value;
    if (str == null) {
      str = "N/A";
    }
    const text = `${"JS: " + str} `;
    return { text, defaultValue: text };
  };
  fn.__closure = { jsFps: sharedValue };
  fn.__workletHash = 12993491204154;
  fn.__initData = closure_11;
  obj = { style: closure_16.container, children: null };
  obj1 = { style: closure_16.text, animatedProps: sharedValue(1749).useAnimatedProps(fn), editable: false };
  obj[1] = callback2(closure_8, obj1);
  return callback2(closure_4, obj);
}
function UiPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  let sharedValue1;
  let obj = smoothingFrames(sharedValue[5]);
  sharedValue = obj.useSharedValue(null);
  let obj1 = smoothingFrames(sharedValue[5]);
  sharedValue1 = obj1.useSharedValue(null);
  const fn = function n(timestamp) {
    if (null === sharedValue1.value) {
      if (typeof outer1_7 !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
      const _Float32Array = Float32Array;
      const float32Array = new Float32Array(tmp2);
      obj[1] = float32Array;
      obj[2] = smoothingFrames;
      obj[4] = function push(arg0) {
        this.buffer[this.next] = arg0;
        this.next = (this.next + 1) % this.size;
        this.count = Math.min(this.size, this.count + 1);
        let tmp = null;
        if (this.count === this.size) {
          tmp = this.buffer[this.next];
        }
        return tmp;
      };
      obj[5] = function front() {
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
      obj[6] = function back() {
        const self = this;
        let tmp = null;
        if (this.count > 0) {
          tmp = self.buffer[self.next];
        }
        return tmp;
      };
      iter.value = obj;
    }
    const value = iter.value;
    const rounded = Math.round(timestamp.timestamp);
    if (typeof outer1_10 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const rounded1 = Math.round(rounded);
    let arr = value.push(rounded1);
    if (arr == null) {
      arr = rounded1;
    }
    const result = (rounded1 - arr) / value.count;
    if (typeof outer1_9 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const result1 = 1000 / result;
    sharedValue.value = result1.toFixed(0);
  };
  obj = { circularBuffer: sharedValue1, createCircularDoublesBuffer, smoothingFrames, completeBufferRoutine, uiFps: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 10137562113926;
  fn.__initData = closure_13;
  smoothingFrames(sharedValue[5]).useFrameCallback(fn);
  const obj3 = smoothingFrames(sharedValue[5]);
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
  fn2.__initData = closure_14;
  obj = { style: closure_16.container, children: null };
  obj1 = { style: closure_16.text, animatedProps: smoothingFrames(sharedValue[5]).useAnimatedProps(fn2), editable: false };
  obj[1] = callback2(closure_8, obj1);
  return callback2(closure_4, obj);
}
({ useEffect: obj1, useRef: c3 } = noop);
({ StyleSheet, View: c4, TextInput } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
function createCircularDoublesBuffer(arg0) {
  const obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
  const float32Array = new Float32Array(arg0);
  obj[1] = float32Array;
  obj[2] = arg0;
  obj[4] = function push(arg0) {
    this.buffer[this.next] = arg0;
    this.next = (this.next + 1) % this.size;
    this.count = Math.min(this.size, this.count + 1);
    let tmp = null;
    if (this.count === this.size) {
      tmp = this.buffer[this.next];
    }
    return tmp;
  };
  obj[5] = function front() {
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
  obj[6] = function back() {
    const self = this;
    let tmp = null;
    if (this.count > 0) {
      tmp = self.buffer[self.next];
    }
    return tmp;
  };
  return obj;
}
createCircularDoublesBuffer.__closure = {};
createCircularDoublesBuffer.__workletHash = 7814494919003;
createCircularDoublesBuffer.__initData = { code: "function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};}" };
let result = configureProps.addWhitelistedNativeProps({ text: true });
let closure_8 = createAnimatedComponent.createAnimatedComponent(TextInput);
function getFps(arg0) {
  return 1000 / arg0;
}
getFps.__closure = {};
getFps.__workletHash = 14651351045012;
getFps.__initData = { code: "function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;}" };
function completeBufferRoutine(arr) {
  const rounded = Math.round(arg1);
  arr = arr.push(rounded);
  if (arr == null) {
    arr = rounded;
  }
  const result = (rounded - arr) / arr.count;
  if (typeof getFps !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  return 1000 / result;
}
completeBufferRoutine.__closure = { getFps };
completeBufferRoutine.__workletHash = 5653450315763;
completeBufferRoutine.__initData = { code: "function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){const{getFps}=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);}" };
let closure_11 = { code: "function pnpm_PerformanceMonitorTsx4(){const{jsFps}=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
let closure_13 = { code: "function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){const{circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps}=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);}" };
let closure_14 = { code: "function pnpm_PerformanceMonitorTsx6(){const{uiFps}=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
const styles = StyleSheet.create({ monitor: { flexDirection: "row", position: "absolute", backgroundColor: "#0006", zIndex: 1000 }, header: { fontSize: 14, color: "#ffff", paddingHorizontal: 5 }, text: { fontSize: 13, fontVariant: ["tabular-nums"], color: "#ffff", fontFamily: "monospace", paddingHorizontal: 3 }, container: { alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" } });

export const PerformanceMonitor = function PerformanceMonitor(smoothingFrames) {
  let num = smoothingFrames.smoothingFrames;
  if (num === undefined) {
    num = 20;
  }
  const obj = { style: closure_16.monitor, children: null };
  const items = [callback2(JsPerformance, { smoothingFrames: num }), callback2(UiPerformance, { smoothingFrames: num })];
  obj[1] = items;
  return callback3(closure_4, obj);
};