// _runtime/05677_NativeEventsManager.js
import __INTERNAL_VIEW_CONFIGDefault from "metro/05619___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import { findNodeHandle } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";
import { Reanimated } from "metro/05647__.js";

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
        let num = closure_1_7(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        ref2.current = new closure_1_9({
          props: closure_6,
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
        let num = closure_1_7(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        ref2.current = new closure_1_9({
          props: closure_6,
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
          let num = closure_1_7(ref3.current);
          if (num == null) {
            num = -1;
          }
          ref3.__nativeTag = num;
          ref2.current = new closure_1_9({
            props: closure_6,
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
          ref.current = closure_6;
        }, items1);
        obj = { ref: tmp };
        tmp6 = require("__INTERNAL_VIEW_CONFIG");
        merged = Object.assign(tmp2);
        return jsx(tmp6, obj);
      }
    }
    LeanReanimatedNativeDetector = obj.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
  }
}

export const ReanimatedNativeDetector = LeanReanimatedNativeDetector;