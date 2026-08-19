// discord_app/modules/routing/native/useBackPressHandler.tsx
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const require = fn;
({ BackHandler: c3, NativeModules: c4 } = get_ActivityIndicator);
const result = require("obj132").fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(stateFromStores) {
  closure_0 = stateFromStores;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let React;
  React = React.useRef(stateFromStores);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = closure_0;
  });
  const items = [flag];
  const effect = React.useEffect(() => {
    if (!obj.isIOS()) {
      if (flag) {
        stateFromStores = closure_1_3.addEventListener("hardwareBackPress", (event) => ref.current());
        return () => closure_0.remove();
      }
    }
    obj = stateFromStores(flag[2]);
  }, items);
};
export const BackPressHandler = {
  minimize() {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};