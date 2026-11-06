// === Module 19611: useDrawerToggle ===

// Module 19611 (useDrawerToggle)
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19612 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const VoicePanelControlsModes = fn(11379).VoicePanelControlsModes;
let closure_5 = { code: "(function useDrawerToggleTsx1(){let[controlsSpecs,VoicePanelControlsModes]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  const context = dismissPanel.useContext(require("VoicePanelStateContext"));
  const controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  dismissPanel = context.dismissPanel;
  items = [closure_5, controlsSpecs, VoicePanelControlsModes];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items;
  function useDrawerToggleTsx1() {
    return _undefined.get().mode === _undefined2.DRAWER;
  }
  const items1 = [tmp6, tmp7];
  useDrawerToggleTsx1.__closure = items1;
  useDrawerToggleTsx1.__workletHash = 13427978758146;
  useDrawerToggleTsx1.__initData = tmp5;
  const derivedValue = require("module_1652").useDerivedValue(useDrawerToggleTsx1);
  const tmp9 = require("useStateFromSharedValue")(derivedValue);
  const items2 = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = dismissPanel.useCallback(() => {
    if (_undefined2.get().mode === VoicePanelControlsModes.DRAWER) {
      dismissPanel();
    } else {
      value = connected.get();
      const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
      const obj = { tab: "settings", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
      _undefined(obj);
    }
  }, items2);
  const obj3 = { isDrawerOpen: tmp9, handlePress: callback, accessibilityLabel: null, ariaHidden: null };
  const obj2 = require("module_1652");
  const intl = tmp4(tmp2[6]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[6]).t;
  if (tmp9) {
    let stringResult = string(t["awDmr/"]);
  } else {
    stringResult = string(t.OXW7dL);
  }
  obj3.accessibilityLabel = stringResult;
  obj3.ariaHidden = !require("useStateFromSharedValue")(connected);
  return obj3;
};