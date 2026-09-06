// discord_app/modules/voice_panel/native/controls/useDrawerToggle.tsx
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const __initData = {
  code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  _require = arg0;
  const context = dismissPanel.useContext(controlsSpecs(connected[2]));
  controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  dismissPanel = context.dismissPanel;
  require("ReanimatedRexport");
  const fn = function l() {
    return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
  };
  let obj = { controlsSpecs, VoicePanelControlsModes };
  fn.__closure = obj;
  fn.__workletHash = 900483810235;
  fn.__initData = __initData;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp3 = controlsSpecs(connected[4])(derivedValue);
  const items = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = dismissPanel.useCallback(() => {
    if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
      dismissPanel();
    } else {
      value = connected.get();
      const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
      const obj = {
        tab: "settings",
        source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
      };
      closure_0(obj);
    }
  }, items);
  obj = { isDrawerOpen: tmp3, handlePress: callback, accessibilityLabel: null, ariaHidden: null };
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (tmp3) {
    let stringResult = string(t["awDmr/"]);
  } else {
    stringResult = string(t.OXW7dL);
  }
  obj.accessibilityLabel = stringResult;
  obj.ariaHidden = !controlsSpecs(connected[4])(connected);
  return obj;
}
