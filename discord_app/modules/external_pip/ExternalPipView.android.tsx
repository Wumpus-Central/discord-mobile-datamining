// discord_app/modules/external_pip/ExternalPipView.android.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import AppFreezeStore from "../panels/morphable/AppFreezeStore.tsx";
import { jsx } from "jsxProd";
import { ExternalPipViewVideoUnavailable } from "ExternalPipViewVideo.android.tsx";

function FreezeAfterLayoutPipView() {
  const importDefault = React.useRef(false);
  const onLayout = React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const state = outer1_4.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = React.useEffect(() => () => {
    if (ref.current) {
      const state = outer1_4.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoUnavailable, { onLayout });
}
const result = require("module_8802").fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  let c0;
  let tmp3;
  const obj = { disabled: null };
  const tmp = importDefault(callback[4]);
  obj[0] = !importDefault(callback[5]).isSupported();
  importDefault = undefined;
  const obj2 = importDefault(callback[5]);
  [tmp3, c0] = callback(React.useState(false), 2);
  callback = React.useCallback((arg0) => {
    _undefined(arg0);
    if (!arg0) {
      const state = outer1_4.getState();
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
    let closure_0 = _undefined(callback[5]).addOnPipModeChangedListener((arg0) => {
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
    let closure_0 = _undefined(callback[5]).addOnPipModeWillChangeListener(() => {
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