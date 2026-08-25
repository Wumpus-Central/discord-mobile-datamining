// === Module 16348: FreezeAfterLayoutPipView ===

// Module 16348 (FreezeAfterLayoutPipView)
import ExternalPipViewVideoUnavailableDefault from "ExternalPipViewVideoUnavailable" /* 16351 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "module_9009" /* 9009 */;
import { jsx } from "jsxProd" /* 21 */;

function FreezeAfterLayoutPipView() {
  importDefault = React.useRef(false);
  const onLayout = React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const state = closure_1_4.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = React.useEffect(() => () => {
    if (ref.current) {
      const state = closure_1_4.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoUnavailableDefault, { onLayout });
}
const result = require("set").fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  const obj = { disabled: null };
  const tmp = importDefault(callback[4]);
  obj[0] = !importDefault(callback[5]).isSupported();
  importDefault = undefined;
  const obj2 = importDefault(callback[5]);
  [tmp3, c0] = callback(React.useState(false), 2);
  callback = React.useCallback((arg0) => {
    _undefined(arg0);
    if (!arg0) {
      const state = closure_1_4.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = React.useEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
  }, []);
  const items = [tmp(obj).externalPipEnabled];
  const effect1 = React.useEffect(() => {
    _undefined(callback[5]).setEnabled(_undefined);
  }, items);
  const items1 = [callback];
  const effect2 = React.useEffect(() => {
    closure_0 = _undefined(callback[5]).addOnPipModeChangedListener((arg0) => {
      callback(arg0);
    });
    return () => {
      let removeResult;
      if (closure_0 != null) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items1);
  const items2 = [callback];
  const effect3 = React.useEffect(() => {
    closure_0 = _undefined(callback[5]).addOnPipModeWillChangeListener(() => {
      callback(true);
    });
    return () => {
      let removeResult;
      if (closure_0 != null) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items2);
  let tmp9 = null;
  if (tmp3) {
    tmp9 = <FreezeAfterLayoutPipView />;
  }
  return tmp9;
};