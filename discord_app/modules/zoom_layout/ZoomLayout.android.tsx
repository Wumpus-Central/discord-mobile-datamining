// === Module 10863: ZoomLayout ===

// Module 10863 (ZoomLayout)
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 10864 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["ref"];
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ZoomLayout(ref) {
  const cResult = ref1(576).c(6);
  if (cResult[0] !== ref) {
    const tmp7 = _objectWithoutProperties(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp7;
    cResult[2] = ref.ref;
    let tmp4 = ref;
    let tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  ref1 = noop.useRef(null);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function z() {
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
            const Commands = ref1(10864).Commands;
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
            const Commands = ref1(10864).Commands;
            Commands.unzoom(tmp2.current, tmp);
          }
          tmp = undefined === animated || animated;
        }
      };
    };
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  const imperativeHandle = noop.useImperativeHandle(tmp4, tmp9);
  if (cResult[4] !== tmp3) {
    const obj3 = {};
    const merged = Object.assign(tmp3);
    obj3.ref = ref1;
    const tmp18 = jsx(ZoomLayoutNativeComponentDefault, {});
    cResult[4] = tmp3;
    cResult[5] = tmp18;
    let tmp11 = tmp18;
  } else {
    tmp11 = cResult[5];
  }
  return tmp11;
}) : (function ZoomLayout(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref.ref, () => ({
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
        const Commands = ref(10864).Commands;
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
        const Commands = ref(10864).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    }
  }));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.ref = ref;
  return jsx(ZoomLayoutNativeComponentDefault, {});
});