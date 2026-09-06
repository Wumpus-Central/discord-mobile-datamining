// === Module 6728: ? ===

// Module 6728
import _modDef6670 from "module_6670" /* 6670 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_2 = ["onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedTouchEvent"];
const noop = fn(19);
({ useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire } = noop);
const findNodeHandle = fn(17).findNodeHandle;
const jsx = fn(21).jsx;
const Reanimated = fn(6698).Reanimated;
let NativeEventsManager;
if (Reanimated != null) {
  NativeEventsManager = Reanimated.NativeEventsManager;
}
let tmp4 = NativeEventsManager;
if (!NativeEventsManager) {
  try {
    NativeEventsManager = fn(1743).NativeEventsManager;
    tmp4 = NativeEventsManager;
  } catch (err) {
  }
}
if (tmp4) {
  class LeanReanimatedNativeDetector {
    constructor(arg0) {
      closure_0 = closure_6(null);
      closure_1 = closure_6(null);
      tmp = closure_6(null);
      closure_2 = tmp;
      onGestureHandlerReanimatedStateChange = global.onGestureHandlerReanimatedStateChange;
      closure_3 = onGestureHandlerReanimatedStateChange;
      onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
      closure_4 = onGestureHandlerReanimatedEvent;
      onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
      closure_5 = onGestureHandlerReanimatedTouchEvent;
      tmp2 = closure_3(global, closure_2);
      items = [, , ];
      items[0] = onGestureHandlerReanimatedEvent;
      items[1] = onGestureHandlerReanimatedStateChange;
      items[2] = onGestureHandlerReanimatedTouchEvent;
      tmp3 = closure_5(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
      closure_6 = tmp3;
      tmp4 = closure_4(() => {
        let num = findNodeHandle(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        ref2.current = new NativeEventsManager({
          props,
          _componentRef: ref3,
          _componentViewTag: num,
          getComponentViewTag() {
            return num;
          }
        });
        let current = ref2.current;
        current.attachEvents();
        return () => {
          const current = ref.current;
          if (current != null) {
            current.detachEvents();
          }
        };
      }, []);
      items1 = [];
      items1[0] = tmp3;
      tmp5 = closure_4(() => {
        if (ref.current) {
          const current = ref2.current;
          if (current != null) {
            current.updateEvents(tmp.current);
          }
        }
        ref.current = current;
      }, items1);
      obj = { ref: tmp };
      tmp6 = closure_0(closure_1[6]);
      merged = Object.assign(tmp2);
      return jsx(tmp6, obj);
    }
  }
} else {
  class LeanReanimatedNativeDetector {
    constructor(arg0) {
      closure_0 = closure_6(null);
      closure_1 = closure_6(null);
      tmp = closure_6(null);
      closure_2 = tmp;
      onGestureHandlerReanimatedStateChange = global.onGestureHandlerReanimatedStateChange;
      closure_3 = onGestureHandlerReanimatedStateChange;
      onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
      closure_4 = onGestureHandlerReanimatedEvent;
      onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
      closure_5 = onGestureHandlerReanimatedTouchEvent;
      tmp2 = closure_3(global, closure_2);
      items = [, , ];
      items[0] = onGestureHandlerReanimatedEvent;
      items[1] = onGestureHandlerReanimatedStateChange;
      items[2] = onGestureHandlerReanimatedTouchEvent;
      tmp3 = closure_5(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
      closure_6 = tmp3;
      tmp4 = closure_4(() => {
        let num = findNodeHandle(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        ref2.current = new NativeEventsManager({
          props,
          _componentRef: ref3,
          _componentViewTag: num,
          getComponentViewTag() {
            return num;
          }
        });
        let current = ref2.current;
        current.attachEvents();
        return () => {
          const current = ref.current;
          if (current != null) {
            current.detachEvents();
          }
        };
      }, []);
      items1 = [];
      items1[0] = tmp3;
      tmp5 = closure_4(() => {
        if (ref.current) {
          const current = ref2.current;
          if (current != null) {
            current.updateEvents(tmp.current);
          }
        }
        ref.current = current;
      }, items1);
      obj = { ref: tmp };
      tmp6 = closure_0(closure_1[6]);
      merged = Object.assign(tmp2);
      return jsx(tmp6, obj);
    }
  }
  let LeanReanimatedNativeDetector;
  if (tmp5 != null) {
    class LeanReanimatedNativeDetector {
      constructor(arg0) {
        closure_0 = closure_6(null);
        closure_1 = closure_6(null);
        tmp = closure_6(null);
        closure_2 = tmp;
        onGestureHandlerReanimatedStateChange = global.onGestureHandlerReanimatedStateChange;
        closure_3 = onGestureHandlerReanimatedStateChange;
        onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
        closure_4 = onGestureHandlerReanimatedEvent;
        onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
        closure_5 = onGestureHandlerReanimatedTouchEvent;
        tmp2 = closure_3(global, closure_2);
        items = [, , ];
        items[0] = onGestureHandlerReanimatedEvent;
        items[1] = onGestureHandlerReanimatedStateChange;
        items[2] = onGestureHandlerReanimatedTouchEvent;
        tmp3 = closure_5(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
        closure_6 = tmp3;
        tmp4 = closure_4(() => {
          let num = findNodeHandle(ref3.current);
          if (num == null) {
            num = -1;
          }
          ref3.__nativeTag = num;
          ref2.current = new NativeEventsManager({
            props,
            _componentRef: ref3,
            _componentViewTag: num,
            getComponentViewTag() {
              return num;
            }
          });
          let current = ref2.current;
          current.attachEvents();
          return () => {
            const current = ref.current;
            if (current != null) {
              current.detachEvents();
            }
          };
        }, []);
        items1 = [];
        items1[0] = tmp3;
        tmp5 = closure_4(() => {
          if (ref.current) {
            const current = ref2.current;
            if (current != null) {
              current.updateEvents(tmp.current);
            }
          }
          ref.current = current;
        }, items1);
        obj = { ref: tmp };
        tmp6 = closure_0(closure_1[6]);
        merged = Object.assign(tmp2);
        return jsx(tmp6, obj);
      }
    }
    LeanReanimatedNativeDetector = obj.createAnimatedComponent(_modDef6670);
  }
}

export const ReanimatedNativeDetector = LeanReanimatedNativeDetector;