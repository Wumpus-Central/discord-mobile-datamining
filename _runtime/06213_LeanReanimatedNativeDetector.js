// _runtime/06213_LeanReanimatedNativeDetector.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import NativeEventsManager2 from "01750_NativeEventsManager.js";
import _modDef6155 from "metro/06155__.js";
import Reanimated2 from "06183_Reanimated.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";

let closure_6, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj;
let closure_2 = [
  "onGestureHandlerReanimatedStateChange",
  "onGestureHandlerReanimatedEvent",
  "onGestureHandlerReanimatedTouchEvent",
];
({ useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire } = react);
const findNodeHandle = react_native.findNodeHandle;
const jsx = Fragment.jsx;
const Reanimated = Reanimated2.Reanimated;
let NativeEventsManager1;
if (Reanimated != null) {
  NativeEventsManager1 = Reanimated.NativeEventsManager;
}
let tmp4 = NativeEventsManager1;
if (!tmp4) {
  try {
    const NativeEventsManager = NativeEventsManager2.NativeEventsManager;
    tmp4 = NativeEventsManager;
    NativeEventsManager1 = NativeEventsManager;
  } catch (err) {}
}
if (tmp4) {
  class LeanReanimatedNativeDetector {
    constructor(onGestureHandlerReanimatedStateChange) {
      let ref;
      let ref2;
      importDefault = closure_6(null);
      dependencyMap = closure_6(null);
      const tmp = closure_6(null);
      const ref3 = tmp;
      onGestureHandlerReanimatedStateChange =
        onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedStateChange;
      const onGestureHandlerReanimatedEvent = onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedEvent;
      const onGestureHandlerReanimatedTouchEvent =
        onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedTouchEvent;
      const tmp2 = onGestureHandlerReanimatedStateChange(onGestureHandlerReanimatedStateChange, ref3);
      const items = [
        onGestureHandlerReanimatedEvent,
        onGestureHandlerReanimatedStateChange,
        onGestureHandlerReanimatedTouchEvent,
      ];
      const tmp3 = onGestureHandlerReanimatedTouchEvent(
        () => ({
          onGestureHandlerReanimatedStateChange,
          onGestureHandlerReanimatedEvent,
          onGestureHandlerReanimatedTouchEvent,
        }),
        items,
      );
      closure_6 = tmp3;
      onGestureHandlerReanimatedEvent(() => {
        let num = findNodeHandle(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        const obj = {
          props,
          _componentRef: ref3,
          _componentViewTag: num,
          getComponentViewTag() {
            return num;
          },
        };
        ref2.current = new NativeEventsManager1(obj);
        let current = ref2.current;
        new NativeEventsManager1(obj);
        current.attachEvents();
        return () => {
          const current = ref.current;
          if (current != null) {
            current.detachEvents();
          }
        };
      }, []);
      const items1 = [tmp3];
      onGestureHandlerReanimatedEvent(() => {
        let current;
        if (ref.current) {
          current = ref2.current;
          if (current != null) {
            current.updateEvents(ref.current);
          }
        }
        ref.current = current;
      }, items1);
      _modDef6155;
      const merged = Object.assign(tmp2);
      return <tmp6 ref={tmp} />;
    }
  }
} else {
  class LeanReanimatedNativeDetector {
    constructor(onGestureHandlerReanimatedStateChange) {
      let ref;
      let ref2;
      importDefault = closure_6(null);
      dependencyMap = closure_6(null);
      const tmp = closure_6(null);
      const ref3 = tmp;
      onGestureHandlerReanimatedStateChange =
        onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedStateChange;
      const onGestureHandlerReanimatedEvent = onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedEvent;
      const onGestureHandlerReanimatedTouchEvent =
        onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedTouchEvent;
      const tmp2 = onGestureHandlerReanimatedStateChange(onGestureHandlerReanimatedStateChange, ref3);
      const items = [
        onGestureHandlerReanimatedEvent,
        onGestureHandlerReanimatedStateChange,
        onGestureHandlerReanimatedTouchEvent,
      ];
      const tmp3 = onGestureHandlerReanimatedTouchEvent(
        () => ({
          onGestureHandlerReanimatedStateChange,
          onGestureHandlerReanimatedEvent,
          onGestureHandlerReanimatedTouchEvent,
        }),
        items,
      );
      closure_6 = tmp3;
      onGestureHandlerReanimatedEvent(() => {
        let num = findNodeHandle(ref3.current);
        if (num == null) {
          num = -1;
        }
        ref3.__nativeTag = num;
        const obj = {
          props,
          _componentRef: ref3,
          _componentViewTag: num,
          getComponentViewTag() {
            return num;
          },
        };
        ref2.current = new NativeEventsManager1(obj);
        let current = ref2.current;
        new NativeEventsManager1(obj);
        current.attachEvents();
        return () => {
          const current = ref.current;
          if (current != null) {
            current.detachEvents();
          }
        };
      }, []);
      const items1 = [tmp3];
      onGestureHandlerReanimatedEvent(() => {
        let current;
        if (ref.current) {
          current = ref2.current;
          if (current != null) {
            current.updateEvents(ref.current);
          }
        }
        ref.current = current;
      }, items1);
      _modDef6155;
      const merged = Object.assign(tmp2);
      return <tmp6 ref={tmp} />;
    }
  }
  let LeanReanimatedNativeDetector;
  if (tmp5 != null) {
    class LeanReanimatedNativeDetector {
      constructor(onGestureHandlerReanimatedStateChange) {
        let ref;
        let ref2;
        importDefault = closure_6(null);
        dependencyMap = closure_6(null);
        const tmp = closure_6(null);
        const ref3 = tmp;
        onGestureHandlerReanimatedStateChange =
          onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedStateChange;
        const onGestureHandlerReanimatedEvent = onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedEvent;
        const onGestureHandlerReanimatedTouchEvent =
          onGestureHandlerReanimatedStateChange.onGestureHandlerReanimatedTouchEvent;
        const tmp2 = onGestureHandlerReanimatedStateChange(onGestureHandlerReanimatedStateChange, ref3);
        const items = [
          onGestureHandlerReanimatedEvent,
          onGestureHandlerReanimatedStateChange,
          onGestureHandlerReanimatedTouchEvent,
        ];
        const tmp3 = onGestureHandlerReanimatedTouchEvent(
          () => ({
            onGestureHandlerReanimatedStateChange,
            onGestureHandlerReanimatedEvent,
            onGestureHandlerReanimatedTouchEvent,
          }),
          items,
        );
        closure_6 = tmp3;
        onGestureHandlerReanimatedEvent(() => {
          let num = findNodeHandle(ref3.current);
          if (num == null) {
            num = -1;
          }
          ref3.__nativeTag = num;
          const obj = {
            props,
            _componentRef: ref3,
            _componentViewTag: num,
            getComponentViewTag() {
              return num;
            },
          };
          ref2.current = new NativeEventsManager1(obj);
          let current = ref2.current;
          new NativeEventsManager1(obj);
          current.attachEvents();
          return () => {
            const current = ref.current;
            if (current != null) {
              current.detachEvents();
            }
          };
        }, []);
        const items1 = [tmp3];
        onGestureHandlerReanimatedEvent(() => {
          let current;
          if (ref.current) {
            current = ref2.current;
            if (current != null) {
              current.updateEvents(ref.current);
            }
          }
          ref.current = current;
        }, items1);
        _modDef6155;
        const merged = Object.assign(tmp2);
        return <tmp6 ref={tmp} />;
      }
    }
    LeanReanimatedNativeDetector = obj.createAnimatedComponent(_modDef6155);
  }
}

export const ReanimatedNativeDetector = LeanReanimatedNativeDetector;
