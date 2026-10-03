// === Module 15614: MountMeasure ===

// Module 15614 (MountMeasure)
import c from "c" /* 576 */;
import useMountEffect from "useMountEffect" /* 5590 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((batchKey) => {
  const cResult = c.c(10);
  batchKey = batchKey.batchKey;
  const onMeasure = batchKey.onMeasure;
  const onCancel = batchKey.onCancel;
  ({ style, children } = batchKey);
  if (cResult[0] === batchKey) {
    if (cResult[1] === onCancel) {
      let tmp4 = cResult[2];
    }
    const unmountEffect = useMountEffect.useUnmountEffect(tmp4);
    if (cResult[3] === batchKey) {
      if (cResult[4] === onMeasure) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === style) {
          if (cResult[8] === tmp6) {
            let tmp7 = cResult[9];
          }
          return tmp7;
        }
      }
      const obj2 = { style, onLayout: tmp6, children };
      const tmp10 = <View style={style} onLayout={tmp6}>{children}</View>;
      cResult[6] = children;
      cResult[7] = style;
      cResult[8] = tmp6;
      cResult[9] = tmp10;
      tmp7 = tmp10;
    }
    const fn2 = function c() {
      return onMeasure(batchKey);
    };
    cResult[3] = batchKey;
    cResult[4] = onMeasure;
    cResult[5] = fn2;
    tmp6 = fn2;
    const tmpResult = useMountEffect;
  }
  const fn = function s() {
    return onCancel(batchKey);
  };
  cResult[0] = batchKey;
  cResult[1] = onCancel;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  ({ batchKey: require, onMeasure: dependencyMap, onCancel: View } = arg0);
  ({ style, children } = arg0);
  const unmountEffect = useMountEffect.useUnmountEffect(() => View(require));
  return <View style={style} onLayout={function onLayout() {
    return dependencyMap(require);
  }}>{children}</View>;
});