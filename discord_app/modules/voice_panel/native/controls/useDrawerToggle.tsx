// discord_app/modules/voice_panel/native/controls/useDrawerToggle.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { VoicePanelControlsModes } from "VoicePanelControlsConstants.tsx";

const require = arg1;
let closure_5 = { code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  const _require = arg0;
  const context = dismissPanel.useContext(controlsSpecs(connected[2]));
  controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  dismissPanel = context.dismissPanel;
  let obj = _require(connected[3]);
  const fn = function l() {
    return controlsSpecs.get().mode === closure_1_4.DRAWER;
  };
  obj = { controlsSpecs, VoicePanelControlsModes };
  fn.__closure = obj;
  fn.__workletHash = 900483810235;
  fn.__initData = closure_5;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp3 = controlsSpecs(connected[4])(derivedValue);
  const items = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = dismissPanel.useCallback(() => {
    if (controlsSpecs.get().mode === closure_1_4.DRAWER) {
      dismissPanel();
    } else {
      const value = connected.get();
      const VoicePanelTabAnalyticsSources = callback(connected[5]).VoicePanelTabAnalyticsSources;
      const obj = { tab: "settings", source: null };
      obj[1] = value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON;
      callback(obj);
      const tmp = callback;
    }
  }, items);
  obj = { isDrawerOpen: tmp3, handlePress: callback, accessibilityLabel: null, ariaHidden: null };
  const intl = _require(connected[6]).intl;
  const string = intl.string;
  const t = _require(connected[6]).t;
  if (tmp3) {
    let stringResult = string(t["awDmr/"]);
  } else {
    stringResult = string(t.OXW7dL);
  }
  obj[2] = stringResult;
  obj[3] = !controlsSpecs(connected[4])(connected);
  return obj;
};