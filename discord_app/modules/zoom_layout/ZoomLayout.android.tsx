// === Module 9116: ZoomLayout ===

// Module 9116 (ZoomLayout)
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 9117 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = ref(576).c(3);
  ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return {
        zoomTo(arg0) {
          ({ scale, animated } = arg0);
          let num = 2;
          ({ x, y } = arg0);
          if (undefined !== scale) {
            num = scale;
          }
          if (null != ref.current) {
            value = PixelRatio.get();
            const result = x * value;
            const result1 = y * value;
            const Commands = ref(9117).Commands;
            Commands.zoomTo(tmp2.current, result / num - result, result1 / num - result1, num, tmp);
          }
        },
        unzoom(arg0) {
          let obj = arg0;
          if (undefined === arg0) {
            obj = {};
          }
          const animated = obj.animated;
          if (null != ref.current) {
            const Commands = ref(9117).Commands;
            Commands.unzoom(tmp2.current, tmp);
          }
          tmp = undefined === animated || animated;
        }
      };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const imperativeHandle = noop.useImperativeHandle(arg1, first);
  if (cResult[1] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj3.ref = ref;
    const tmp13 = jsx(ZoomLayoutNativeComponentDefault, {});
    cResult[1] = arg0;
    cResult[2] = tmp13;
    let tmp6 = tmp13;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((arg0, arg1) => {
  const ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    zoomTo(scale) {
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
        value = PixelRatio.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = ref(9117).Commands;
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
        const Commands = ref(9117).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    }
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(ZoomLayoutNativeComponentDefault, {});
}));