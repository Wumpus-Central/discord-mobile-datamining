// discord_app/modules/voice_panel/native/dock/useMeasureDockGlowOffset.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useMeasureDockGlowOffset.tsx");

export default function useMeasureDockGlowOffset() {
  const ref = noop.useRef(null);
  [first, closure_2] = noop.useState(null);
  items = [first];
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_2((arg0) => {
      let size = arg0;
      let width;
      if (arg0 != null) {
        width = size.width;
      }
      if (width !== layout.width) {
        const size1 = { width: null, height: null };
        ({ width: obj.width, height: obj.height } = layout);
        size = size1;
      }
      return size;
    });
  }, []);
  return {
    dockRef: ref,
    handleDockLayout: callback,
    measureGlowOffset: noop.useMemo(() => {
      let fn = null;
      if (null != first) {
        fn = (measureLayout, arg1) => {
          const current = arg1.current;
          if (null != current) {
            measureLayout.measureLayout(current, (arg0, arg1, width, height) => {
              const diff = styles.width / 2 - (arg0 + width / 2);
              const size = {
                width,
                height,
                dx: diff,
                dy: styles.height + 8 - (arg1 + height / 2),
                offCenter: Math.min(Math.abs(diff) / (styles.width / 2), 1),
              };
              closure_0(size);
            });
          }
        };
      }
      return fn;
    }, items),
  };
}
export function getDockGlowHotSpot(width) {
  const point = { x: width.width / 2, y: width.height + 8 };
  return point;
}
