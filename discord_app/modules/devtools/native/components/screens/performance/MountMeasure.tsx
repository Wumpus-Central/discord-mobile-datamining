// === Module 15189: MountMeasure ===

// Module 15189 (MountMeasure)
import noopAll from "noop" /* 19 */;
import useMountLayoutEffect from "useMountLayoutEffect" /* 4761 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  ({ batchKey: require, onMeasure: dependencyMap, onCancel: View } = arg0);
  ({ style, children } = arg0);
  let obj = useMountLayoutEffect;
  const unmountEffect = obj.useUnmountEffect(() => callback2(closure_0));
  obj = {
    style,
    onLayout() {
      return callback(closure_0);
    },
    children
  };
  return <View style={style} onLayout={function onLayout() {
    return callback(closure_0);
  }}>{children}</View>;
};