// discord_app/modules/voice_panel/native/controls/useDrawerToggle.tsx
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const VoicePanelControlsModes = fn(11924).VoicePanelControlsModes;
const __initData = {
  code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}",
};
const __initData2 = {
  code: "function useDrawerToggleTsx2(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useDrawerToggle(arg0) {
      _require = arg0;
      const cResult = require("c").c(12);
      const context = dismissPanel.useContext(controlsSpecs(connected[4]));
      controlsSpecs = context.controlsSpecs;
      connected = context.connected;
      dismissPanel = context.dismissPanel;
      let obj = require("c");
      const fn = function l() {
        return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
      };
      fn.__closure = { controlsSpecs, VoicePanelControlsModes };
      fn.__workletHash = 900483810235;
      fn.__initData = __initData;
      const derivedValue = require("ReanimatedRexport").useDerivedValue(fn);
      const tmp6 = controlsSpecs(connected[6])(derivedValue);
      if (cResult[0] === connected) {
        if (cResult[1] === controlsSpecs) {
          if (cResult[2] === dismissPanel) {
            if (cResult[3] === arg0) {
              let tmp7 = cResult[4];
            }
            if (cResult[5] !== tmp6) {
              const intl = tmp(tmp2[8]).intl;
              const string = intl.string;
              let t = tmp(tmp2[8]).t;
              if (tmp6) {
                t = t["awDmr/"];
                let stringResult = string(t);
              } else {
                stringResult = string(t.OXW7dL);
              }
              cResult[5] = tmp6;
              cResult[6] = stringResult;
            } else {
              if (cResult[7] === cResult[6]) {
                if (cResult[8] === tmp13) {
                  if (cResult[9] === tmp7) {
                    if (cResult[10] === tmp6) {
                      let tmp14 = cResult[11];
                    }
                    return tmp14;
                  }
                }
              }
              const obj4 = { isDrawerOpen: tmp6, handlePress: tmp7, accessibilityLabel: cResult[6], ariaHidden: !tmp8 };
              cResult[7] = cResult[6];
              cResult[8] = !tmp8;
              cResult[9] = tmp7;
              cResult[10] = tmp6;
              cResult[11] = obj4;
              tmp14 = obj4;
            }
          }
        }
      }
      const fn2 = function c() {
        if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
          dismissPanel();
        } else {
          value = connected.get();
          const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
          const obj = {
            tab: "settings",
            source: value
              ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON
              : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
          };
          closure_0(obj);
        }
      };
      cResult[0] = connected;
      cResult[1] = controlsSpecs;
      cResult[2] = dismissPanel;
      cResult[3] = arg0;
      cResult[4] = fn2;
      tmp7 = fn2;
    }
  : function useDrawerToggle(arg0) {
      _require = arg0;
      const context = dismissPanel.useContext(controlsSpecs(connected[4]));
      controlsSpecs = context.controlsSpecs;
      connected = context.connected;
      dismissPanel = context.dismissPanel;
      const fn = function l() {
        return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
      };
      fn.__closure = { controlsSpecs, VoicePanelControlsModes };
      fn.__workletHash = 7227615652248;
      fn.__initData = __initData2;
      const derivedValue = require("ReanimatedRexport").useDerivedValue(fn);
      const tmp3 = controlsSpecs(connected[6])(derivedValue);
      const items = [arg0, dismissPanel, connected, controlsSpecs];
      const callback = dismissPanel.useCallback(() => {
        if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
          dismissPanel();
        } else {
          value = connected.get();
          const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
          const obj = {
            tab: "settings",
            source: value
              ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON
              : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
          };
          closure_0(obj);
        }
      }, items);
      const obj3 = { isDrawerOpen: tmp3, handlePress: callback, accessibilityLabel: null, ariaHidden: null };
      let obj = require("ReanimatedRexport");
      const obj2 = { controlsSpecs, VoicePanelControlsModes };
      const intl = require("util").intl;
      const string = intl.string;
      const t = require("util").t;
      if (tmp3) {
        let stringResult = string(t["awDmr/"]);
      } else {
        stringResult = string(t.OXW7dL);
      }
      obj3.accessibilityLabel = stringResult;
      obj3.ariaHidden = !controlsSpecs(connected[6])(connected);
      return obj3;
    };
