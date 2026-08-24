// discord_app/modules/devtools/native/components/screens/performance/MountMeasure.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import useMountLayoutEffect from "../../../../../../hooks/useMountEffect.tsx";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

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