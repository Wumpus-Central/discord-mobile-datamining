// discord_app/modules/devtools/native/components/screens/performance/MountMeasure.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  let View;
  let children;
  let dependencyMap;
  let require;
  let style;
  ({ batchKey: require, onMeasure: dependencyMap, onCancel: View } = arg0);
  ({ style, children } = arg0);
  let obj = require("../../../../../../hooks/useMountEffect.tsx") /* useMountLayoutEffect */;
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