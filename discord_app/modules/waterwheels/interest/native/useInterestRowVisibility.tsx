// discord_app/modules/waterwheels/interest/native/useInterestRowVisibility.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestRowVisibility.tsx");

export default function useInterestRowVisibility(onRowSeen, arg1) {
  closure_0 = onRowSeen;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let num = first1;
  if (first1 === undefined) {
    num = 0;
  }
  flag.useRef(0);
  flag.useRef(new Map());
  flag.useRef({ offset: 0, height: 0 });
  flag.useRef(null);
  items = [flag, num, onRowSeen];
  const callback = flag.useCallback(() => {
    if (flag) {
      if (null != num) {
        if (null != ref4.current) {
          if (ref3.current.height > tmp) {
            const offset = ref3.current.offset;
            const current = ref2.current;
            const diff = offset + ref3.current.height - tmp;
            const tmp29 = current[Symbol.iterator]();
            while (tmp29 !== undefined) {
              let tmp7 = _slicedToArray(tmp4, 2);
              [tmp8, tmp9] = tmp7;
              let sum = ref4.current + tmp9.y;
              let tmp13 = tmp9.height > 0;
              if (tmp13) {
                tmp13 = sum < diff;
              }
              if (tmp13) {
                tmp13 = sum + tmp9.height > offset;
              }
              if (tmp13) {
                tmp13 = tmp8 > ref.current;
              }
              if (tmp13) {
                ref.current = tmp8;
                if (closure_0 != null) {
                  let tmp21Result = tmp21(tmp8);
                }
              }
              continue;
            }
          }
        }
      }
    }
  }, items);
  const items1 = [flag, callback];
  const layoutEffect = flag.useLayoutEffect(() => {
    if (!flag) {
      const current = ref2.current;
      current.clear();
    }
    callback();
  }, items1);
  const obj = {
    onScroll: null,
    onScrollTo: flag.useCallback((offset) => {
      ref3.current.offset = offset;
    }, []),
    onViewportLayout: null,
    onContentLayout: null,
    onRowLayout: null,
  };
  const items2 = [callback];
  obj.onScroll = flag.useCallback((offset, height) => {
    closure_5.current = { offset, height };
    callback();
  }, items2);
  const items3 = [callback];
  obj.onViewportLayout = flag.useCallback((nativeEvent) => {
    ref3.current.height = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items3);
  const items4 = [callback];
  obj.onContentLayout = flag.useCallback((nativeEvent) => {
    closure_6.current = nativeEvent.nativeEvent.layout.y;
    callback();
  }, items4);
  const items5 = [flag, callback];
  obj.onRowLayout = flag.useCallback((arg0, nativeEvent) => {
    if (flag) {
      const current = ref2.current;
      const result = current.set(arg0, nativeEvent.nativeEvent.layout);
      callback();
    }
  }, items5);
  return obj;
}
