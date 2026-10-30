// discord_app/modules/zoom_layout/ZoomLayout.android.tsx
import ZoomLayoutNativeComponentDefault from "../../../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default function ZoomLayout(ref) {
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
        const Commands = ref(11734).Commands;
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
        const Commands = ref(11734).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    },
  }));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.ref = ref;
  return jsx(ZoomLayoutNativeComponentDefault, {});
}
