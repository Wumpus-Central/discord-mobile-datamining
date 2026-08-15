// _runtime/06450_NativeEventsManager.js
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { findNodeHandle } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Reanimated } from "module_6420";

let c4;
let c5;
let closure_6;
let closure_2 = ["onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedTouchEvent"];
({ useEffect: c4, useMemo: c5, useRef: closure_6 } = noop);
let NativeEventsManager;
if (Reanimated != null) {
  NativeEventsManager = Reanimated.NativeEventsManager;
}
let tmp4 = NativeEventsManager;
if (!NativeEventsManager) {
  try {
    NativeEventsManager = require("importDefaultResult1").NativeEventsManager;
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
      _objectWithoutProperties = onGestureHandlerReanimatedStateChange;
      onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
      useEffect = onGestureHandlerReanimatedEvent;
      onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
      useMemo = onGestureHandlerReanimatedTouchEvent;
      tmp2 = _objectWithoutProperties(global, closure_2);
      items = [, , ];
      items[0] = onGestureHandlerReanimatedEvent;
      items[1] = onGestureHandlerReanimatedStateChange;
      items[2] = onGestureHandlerReanimatedTouchEvent;
      tmp3 = useMemo(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
      closure_6 = tmp3;
      tmp4 = useEffect(() => {
        let num = outer1_7(tmp.current);
        if (num == null) {
          num = -1;
        }
        tmp.__nativeTag = num;
        ref2.current = new outer1_9({
          props: closure_6,
          _componentRef: tmp,
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
      tmp5 = useEffect(() => {
        if (ref.current) {
          const current = ref2.current;
          if (current != null) {
            current.updateEvents(tmp.current);
          }
        }
        ref.current = closure_6;
      }, items1);
      obj = { ref: tmp };
      tmp6 = require("__INTERNAL_VIEW_CONFIG");
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
      _objectWithoutProperties = onGestureHandlerReanimatedStateChange;
      onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
      useEffect = onGestureHandlerReanimatedEvent;
      onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
      useMemo = onGestureHandlerReanimatedTouchEvent;
      tmp2 = _objectWithoutProperties(global, closure_2);
      items = [, , ];
      items[0] = onGestureHandlerReanimatedEvent;
      items[1] = onGestureHandlerReanimatedStateChange;
      items[2] = onGestureHandlerReanimatedTouchEvent;
      tmp3 = useMemo(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
      closure_6 = tmp3;
      tmp4 = useEffect(() => {
        let num = outer1_7(tmp.current);
        if (num == null) {
          num = -1;
        }
        tmp.__nativeTag = num;
        ref2.current = new outer1_9({
          props: closure_6,
          _componentRef: tmp,
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
      tmp5 = useEffect(() => {
        if (ref.current) {
          const current = ref2.current;
          if (current != null) {
            current.updateEvents(tmp.current);
          }
        }
        ref.current = closure_6;
      }, items1);
      obj = { ref: tmp };
      tmp6 = require("__INTERNAL_VIEW_CONFIG");
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
        _objectWithoutProperties = onGestureHandlerReanimatedStateChange;
        onGestureHandlerReanimatedEvent = global.onGestureHandlerReanimatedEvent;
        useEffect = onGestureHandlerReanimatedEvent;
        onGestureHandlerReanimatedTouchEvent = global.onGestureHandlerReanimatedTouchEvent;
        useMemo = onGestureHandlerReanimatedTouchEvent;
        tmp2 = _objectWithoutProperties(global, closure_2);
        items = [, , ];
        items[0] = onGestureHandlerReanimatedEvent;
        items[1] = onGestureHandlerReanimatedStateChange;
        items[2] = onGestureHandlerReanimatedTouchEvent;
        tmp3 = useMemo(() => ({ onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent }), items);
        closure_6 = tmp3;
        tmp4 = useEffect(() => {
          let num = outer1_7(tmp.current);
          if (num == null) {
            num = -1;
          }
          tmp.__nativeTag = num;
          ref2.current = new outer1_9({
            props: closure_6,
            _componentRef: tmp,
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
        tmp5 = useEffect(() => {
          if (ref.current) {
            const current = ref2.current;
            if (current != null) {
              current.updateEvents(tmp.current);
            }
          }
          ref.current = closure_6;
        }, items1);
        obj = { ref: tmp };
        tmp6 = require("__INTERNAL_VIEW_CONFIG");
        merged = Object.assign(tmp2);
        return jsx(tmp6, obj);
      }
    }
    LeanReanimatedNativeDetector = obj.createAnimatedComponent(require("__INTERNAL_VIEW_CONFIG"));
  }
}

export const ReanimatedNativeDetector = LeanReanimatedNativeDetector;