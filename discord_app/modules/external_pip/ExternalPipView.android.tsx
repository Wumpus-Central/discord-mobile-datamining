// discord_app/modules/external_pip/ExternalPipView.android.tsx
import ExternalPipDefault from "ExternalPip.android.tsx";
import ExternalPipAutoEnterExperiment from "ExternalPipAutoEnterExperiment.tsx";
import ExternalPipViewVideoDefault from "ExternalPipViewVideo.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AppFreezeStore from "../panels/morphable/AppFreezeStore.tsx";

require = fn;
function FreezeAfterLayoutPipView() {
  noop.useRef(false);
  const onLayout = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(
    () => () => {
      if (ref.current) {
        state = state.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
      }
    },
    [],
  );
  return jsx(ExternalPipViewVideoDefault, { onLayout });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  let obj = { disabled: null };
  const tmp = callback(19100);
  obj.disabled = !callback(5874).isSupported();
  const externalPipEnabled = tmp(obj).externalPipEnabled;
  closure_129_0 = undefined;
  let obj2 = callback(5874);
  [tmp3, closure_129_0] = noop.useState(false);
  callback = noop.useCallback((arg0) => {
    externalPipEnabled(arg0);
    if (!arg0) {
      const state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(
    () => () => {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    },
    [],
  );
  const items = [externalPipEnabled];
  const effect1 = noop.useEffect(() => {
    if (externalPipEnabled) {
      const obj = ExternalPipDefault;
      obj.setAutoEnterEnabled(ExternalPipAutoEnterExperiment.isExternalPipAutoEnterEnabled());
    }
    ExternalPipDefault.setEnabled(externalPipEnabled);
  }, items);
  const items1 = [callback];
  const effect2 = noop.useEffect(() => {
    closure_0 = callback(5874).addOnPipModeChangedListener((arg0) => {
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
    closure_0 = callback(5874).addOnPipModeWillChangeListener(() => {
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
}
