// === Module 18057: useInterestRowVisibility ===

// Module 18057 (useInterestRowVisibility)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestRowVisibility.tsx");

export default function useInterestRowVisibility(onRowSeen, arg1) {
  importDefault = onRowSeen;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let num = first1;
  if (first1 === undefined) {
    num = 0;
  }
  noop = undefined;
  noop = noop.useRef(0);
  closure_4 = noop.useRef(new Map());
  noop.useRef({ offset: 0, height: 0 });
  noop.useRef(null);
  noop.useRef(true);
  items = [flag, num, onRowSeen];
  const callback = noop.useCallback(() => {
    if (flag) {
      if (ref4.current) {
        if (null != num) {
          if (null != ref3.current) {
            if (ref2.current.height > tmp2) {
              const offset = ref2.current.offset;
              const current = closure_4.current;
              const diff = offset + ref2.current.height - tmp2;
              const tmp30 = current[Symbol.iterator]();
              while (tmp30 !== undefined) {
                let tmp8 = _slicedToArray(tmp5, 2);
                [tmp9, tmp10] = tmp8;
                let sum = ref3.current + tmp10.y;
                let tmp14 = tmp10.height > 0;
                if (tmp14) {
                  tmp14 = sum < diff;
                }
                if (tmp14) {
                  tmp14 = sum + tmp10.height > offset;
                }
                if (tmp14) {
                  tmp14 = tmp9 > ref.current;
                }
                if (tmp14) {
                  ref.current = tmp9;
                  if (closure_0 != null) {
                    let tmp22Result = tmp22(tmp9);
                  }
                }
                continue;
              }
            }
          }
        }
      }
    }
  }, items);
  const items1 = [flag, callback];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (!flag) {
      const current = closure_4.current;
      current.clear();
    }
    callback();
  }, items1);
  const obj = { onScroll: null, onScrollTo: null, onViewportLayout: null, onContentLayout: null, onRowLayout: null, setGridRevealed: null };
  const items2 = [callback];
  const map = new Map();
  obj.onScroll = noop.useCallback((offset, height) => {
    closure_5.current = { offset, height };
    callback();
  }, items2);
  obj.onScrollTo = noop.useCallback((offset) => {
    ref2.current.offset = offset;
  }, []);
  const items3 = [callback];
  obj.onViewportLayout = noop.useCallback((nativeEvent) => {
    ref2.current.height = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items3);
  const items4 = [callback];
  obj.onContentLayout = noop.useCallback((nativeEvent) => {
    closure_6.current = nativeEvent.nativeEvent.layout.y;
    callback();
  }, items4);
  const items5 = [flag, callback];
  obj.onRowLayout = noop.useCallback((arg0, nativeEvent) => {
    if (flag) {
      const current = closure_4.current;
      const result = current.set(arg0, nativeEvent.nativeEvent.layout);
      callback();
    }
  }, items5);
  obj.setGridRevealed = require("useStableCallback")((current) => {
    closure_7.current = current;
    if (current) {
      callback();
    } else {
      current = closure_4.current;
      current.clear();
    }
  });
  return obj;
};