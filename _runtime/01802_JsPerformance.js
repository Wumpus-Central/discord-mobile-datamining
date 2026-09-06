// _runtime/01802_JsPerformance.js
import noop from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import configureProps from "01735_configureProps.js";
import _isNativeReflectConstruct from "metro/01670__.js";

function JsPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  dependencyMap = undefined;
  let obj = sharedValue(1779);
  sharedValue = obj.useSharedValue(null);
  sharedValue(1779);
  if (typeof createCircularDoublesBuffer === "function") {
    obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
    const _Float32Array = Float32Array;
    const float32Array = new Float32Array(smoothingFrames);
    obj.buffer = float32Array;
    obj.size = smoothingFrames;
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
    dependencyMap = tmp6(obj);
    const items = [sharedValue, tmp5];
    closure_2(() => {
      c0 = 0;
      function loop() {
        let animationFrame = requestAnimationFrame((arg0) => {
          if (closure_0 > 0) {
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
          closure_0 = arg0;
          const animationFrame = requestAnimationFrame(closure_1_1);
        });
      }
      let animationFrame = requestAnimationFrame((arg0) => {
        if (closure_0 > 0) {
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
        closure_0 = arg0;
        const animationFrame = requestAnimationFrame(closure_1_1);
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
    obj = { jsFps: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 12993491204154;
    fn.__initData = __initData;
    const obj1 = { style: closure_16.container, children: null };
    const obj2 = { style: closure_16.text, animatedProps: tmp(1779).useAnimatedProps(fn), editable: false };
    obj1.children = closure_5(closure_8, obj2);
    return closure_5(closure_4, obj1);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = sharedValue;
}
function UiPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  let obj = smoothingFrames(sharedValue[5]);
  sharedValue = obj.useSharedValue(null);
  let obj1 = smoothingFrames(sharedValue[5]);
  const sharedValue1 = obj1.useSharedValue(null);
  const fn = function n(arg0) {
    if (null === sharedValue1.value) {
      if (typeof createCircularDoublesBuffer === "function") {
        const obj = { next: 0, buffer: null, size: null, count: 0, push: null, front: null, back: null };
        const _Float32Array = Float32Array;
        const float32Array = new Float32Array(smoothingFrames);
        obj.buffer = float32Array;
        obj.size = smoothingFrames;
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
        sharedValue1.value = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    value = sharedValue1.value;
    if (typeof completeBufferRoutine === "function") {
      const _Math = Math;
      const rounded = Math.round(tmp9);
      let arr = value.push(rounded);
      if (arr == null) {
        arr = rounded;
      }
      if (typeof getFps === "function") {
        const result = 1000 / tmp13;
        sharedValue.value = result.toFixed(0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  obj = {
    circularBuffer: sharedValue1,
    createCircularDoublesBuffer,
    smoothingFrames,
    completeBufferRoutine,
    uiFps: sharedValue,
  };
  fn.__closure = obj;
  fn.__workletHash = 10137562113926;
  fn.__initData = __initData2;
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
  fn2.__initData = __initData3;
  obj = { style: closure_16.container, children: null };
  obj1 = {
    style: closure_16.text,
    animatedProps: smoothingFrames(sharedValue[5]).useAnimatedProps(fn2),
    editable: false,
  };
  obj.children = closure_5(closure_8, obj1);
  return closure_5(closure_4, obj);
}
({ useEffect: c2, useRef: c3 } = noop);
({ StyleSheet, View: closure_4, TextInput } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
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
createCircularDoublesBuffer.__closure = {};
createCircularDoublesBuffer.__workletHash = 7814494919003;
createCircularDoublesBuffer.__initData = {
  code: "function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};}",
};
let result = configureProps.addWhitelistedNativeProps({ text: true });
let closure_8 = _isNativeReflectConstruct.createAnimatedComponent(TextInput);
function getFps(arg0) {
  return 1000 / arg0;
}
getFps.__closure = {};
getFps.__workletHash = 14651351045012;
getFps.__initData = {
  code: "function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;}",
};
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
completeBufferRoutine.__initData = {
  code: "function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){const{getFps}=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);}",
};
const __initData = {
  code: "function pnpm_PerformanceMonitorTsx4(){const{jsFps}=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};}",
};
const __initData2 = {
  code: "function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){const{circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps}=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);}",
};
const __initData3 = {
  code: "function pnpm_PerformanceMonitorTsx6(){const{uiFps}=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};}",
};
const styles = StyleSheet.create({
  monitor: { flexDirection: "row", position: "absolute", backgroundColor: "#0006", zIndex: 1000 },
  header: { fontSize: 14, color: "#ffff", paddingHorizontal: 5 },
  text: { fontSize: 13, fontVariant: ["tabular-nums"], color: "#ffff", fontFamily: "monospace", paddingHorizontal: 3 },
  container: { alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" },
});

export const PerformanceMonitor = function PerformanceMonitor(smoothingFrames) {
  let num = smoothingFrames.smoothingFrames;
  if (num === undefined) {
    num = 20;
  }
  const obj = { style: closure_16.monitor, children: null };
  const items = [
    hasOwnProperty(JsPerformance, { smoothingFrames: num }),
    hasOwnProperty(UiPerformance, { smoothingFrames: num }),
  ];
  obj.children = items;
  return timestampProducer(React4, obj);
};
