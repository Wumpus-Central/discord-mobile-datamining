// === Module 9151: ZoomLayout ===

// Module 9151 (ZoomLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 9152 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first;
  let ref;
  let tmp6;
  let obj = ref(576);
  const cResult = obj.c(3);
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      let obj = {
        zoomTo(arg0) {
          let animated;
          let scale;
          let x;
          let y;
          ({ scale, animated } = arg0);
          let num = 2;
          ({ x, y } = arg0);
          if (undefined !== scale) {
            num = scale;
          }
          if (null != ref.current) {
            const value = PixelRatio.get();
            const result = x * value;
            const result1 = y * value;
            const Commands = ref(dependencyMap[5]).Commands;
            Commands.zoomTo(tmp2.current, result / num - result, result1 / num - result1, num, undefined === animated || animated);
          }
        },
        unzoom(arg0) {
          let obj = arg0;
          if (undefined === arg0) {
            obj = {};
          }
          const animated = obj.animated;
          const tmp = undefined === animated || animated;
          if (null != ref.current) {
            const Commands = ref(dependencyMap[5]).Commands;
            Commands.unzoom(tmp2.current, tmp);
          }
        }
      };
      return obj;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, first);
  if (cResult[1] !== arg0) {
    const obj3 = { ref };
    ZoomLayoutNativeComponentDefault;
    const merged = Object.assign(arg0);
    const tmp13 = <tmp9 ref={ref} />;
    cResult[1] = arg0;
    cResult[2] = tmp13;
    tmp6 = tmp13;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((arg0, arg1) => {
  const ref = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(arg1, () => {
    let obj = {
      zoomTo(scale) {
        let x;
        let y;
        let num = scale.scale;
        ({ x, y } = scale);
        if (num === undefined) {
          num = 2;
        }
        let flag = scale.animated;
        if (flag === undefined) {
          flag = true;
        }
        if (null != ref.current) {
          const value = PixelRatio.get();
          const result = x * value;
          const result1 = y * value;
          const Commands = ref(dependencyMap[5]).Commands;
          Commands.zoomTo(tmp.current, result / num - result, result1 / num - result1, num, flag);
        }
      },
      unzoom() {
        let obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        let flag = obj.animated;
        if (flag === undefined) {
          flag = true;
        }
        if (null != ref.current) {
          const Commands = ref(dependencyMap[5]).Commands;
          Commands.unzoom(tmp.current, flag);
        }
      }
    };
    return obj;
  });
  ZoomLayoutNativeComponentDefault;
  const merged = Object.assign(arg0);
  return <tmp3 ref={ref} />;
}));
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;