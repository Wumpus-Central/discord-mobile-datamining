// discord_app/modules/quests/native/useIsCarouselInView.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_3;
      let tmp11;
      let tmp3;
      let tmp4;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      let ref = react.useRef(null);
      const height = useWindowDimensionsDefault().height;
      let closure_2 = react.useRef(height);
      if (cResult[0] !== height) {
        const fn = function u() {
          closure_2.current = height;
        };
        const items = [height];
        cResult[0] = height;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = react.useEffect(tmp3, tmp4);
      [tmp7, closure_129_3] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      let closure_4 = react.useRef(tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          ref = setInterval(() => {
            let ref2;
            if (null != ref.current) {
              const current = ref.current;
              current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                const bound = Math.min(arg5 + arg3, ref.current);
                const tmp2 = arg3 > 0 && max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
                if (tmp2 !== ref2.current) {
                  ref2.current = tmp2;
                  closure_1_3(tmp2);
                }
              });
            }
          }, 1000);
          return () => clearInterval(ref);
        };
        const items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp9 = items1;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect1 = react.useEffect(tmp8, tmp9);
      if (cResult[5] !== tmp7) {
        const obj3 = { containerRef: ref, isInView: tmp7 };
        cResult[5] = tmp7;
        cResult[6] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  : () => {
      let closure_129_3;
      let tmp4;
      const containerRef = react.useRef(null);
      const height = useWindowDimensionsDefault().height;
      let closure_2 = react.useRef(height);
      const items = [height];
      const effect = react.useEffect(() => {
        closure_2.current = height;
      }, items);
      [tmp4, closure_129_3] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      let closure_4 = react.useRef(isInView);
      const effect1 = react.useEffect(() => {
        const ref = setInterval(() => {
          let ref2;
          if (null != ref.current) {
            const current = ref.current;
            current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
              const bound = Math.min(arg5 + arg3, ref.current);
              const tmp2 = arg3 > 0 && max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
              if (tmp2 !== ref2.current) {
                ref2.current = tmp2;
                closure_1_3(tmp2);
              }
            });
          }
        }, 1000);
        return () => clearInterval(ref);
      }, []);
      return { containerRef, isInView };
    };
const result = size.fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default tmp2;
