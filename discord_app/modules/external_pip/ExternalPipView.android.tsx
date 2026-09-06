// === Module 17000: ExternalPipView ===

// Module 17000 (ExternalPipView)
import ExternalPipDefault from "ExternalPip" /* 9610 */;
import ExternalPipViewVideoDefault from "ExternalPipViewVideo" /* 17003 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 8290 */;

function FreezeAfterLayoutPipView() {
  importDefault = noop.useRef(false);
  const onLayout = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(() => () => {
    if (ref.current) {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoDefault, { onLayout });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  const obj = { disabled: null };
  const tmp = externalPipEnabled(callback[4]);
  obj.disabled = !externalPipEnabled(callback[5]).isSupported();
  externalPipEnabled = tmp(obj).externalPipEnabled;
  closure_129_0 = undefined;
  const obj2 = externalPipEnabled(callback[5]);
  [tmp3, closure_129_0] = _slicedToArray(noop.useState(false), 2);
  callback = noop.useCallback((arg0) => {
    externalPipEnabled(arg0);
    if (!arg0) {
      const state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
  }, []);
  const items = [externalPipEnabled];
  const effect1 = noop.useEffect(() => {
    ExternalPipDefault.setEnabled(externalPipEnabled);
  }, items);
  const items1 = [callback];
  const effect2 = noop.useEffect(() => {
    closure_0 = externalPipEnabled(callback[5]).addOnPipModeChangedListener((arg0) => {
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
  const effect3 = noop.useEffect(() => {
    closure_0 = externalPipEnabled(callback[5]).addOnPipModeWillChangeListener(() => {
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