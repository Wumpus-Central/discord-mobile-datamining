// discord_app/modules/voice_panel/native/controls/useDrawerToggle.tsx
import VoicePanelControlsConstants from "VoicePanelControlsConstants.tsx";
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const __initData = {
  code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}",
};
const __initData2 = {
  code: "function useDrawerToggleTsx2(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let connected;
      let controlsSpecs;
      let dismissPanel;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(12);
      const context = dismissPanel.useContext(controlsSpecs(connected[4]));
      const tmp4 = controlsSpecs;
      controlsSpecs = context.controlsSpecs;
      connected = context.connected;
      dismissPanel = context.dismissPanel;
      const fn = function c() {
        return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
      };
      const obj3 = { controlsSpecs, VoicePanelControlsModes };
      fn.__closure = obj3;
      fn.__workletHash = 900483810235;
      fn.__initData = __initData;
      const obj2 = require("ReanimatedRexport");
      const derivedValue = obj2.useDerivedValue(fn);
      const tmp7 = controlsSpecs(connected[6])(derivedValue);
      if (cResult[0] === connected) {
        if (cResult[1] === controlsSpecs) {
          if (cResult[2] === dismissPanel) {
            let tmp8;
            let tmp10;
            if (cResult[3] === arg0) {
              tmp8 = cResult[4];
            }
            const tmp9 = tmp4(connected[6])(connected);
            if (cResult[5] !== tmp7) {
              let stringResult;
              const intl = tmp(tmp2[8]).intl;
              const string = intl.string;
              const t = tmp(tmp2[8]).t;
              if (tmp7) {
                stringResult = string(t["awDmr/"]);
              } else {
                stringResult = string(t.OXW7dL);
              }
              cResult[5] = tmp7;
              cResult[6] = stringResult;
              tmp10 = stringResult;
            } else {
              tmp10 = cResult[6];
            }
            if (cResult[7] === tmp10) {
              if (cResult[8] === !tmp9) {
                if (cResult[9] === tmp8) {
                  let tmp13;
                  if (cResult[10] === tmp7) {
                    tmp13 = cResult[11];
                  }
                  return tmp13;
                }
              }
            }
            const obj4 = { isDrawerOpen: tmp7, handlePress: tmp8, accessibilityLabel: tmp10, ariaHidden: !tmp9 };
            cResult[7] = tmp10;
            cResult[8] = !tmp9;
            cResult[9] = tmp8;
            cResult[10] = tmp7;
            cResult[11] = obj4;
            tmp13 = obj4;
          }
        }
      }
      const fn2 = function l() {
        if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
          dismissPanel();
        } else {
          const value = connected.get();
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
      tmp8 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let connected;
      let controlsSpecs;
      let dismissPanel;
      let stringResult;
      let tmp5;
      _require = arg0;
      const context = dismissPanel.useContext(controlsSpecs(connected[4]));
      controlsSpecs = context.controlsSpecs;
      connected = context.connected;
      dismissPanel = context.dismissPanel;
      let obj = require("ReanimatedRexport");
      const fn = function c() {
        return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
      };
      const obj2 = { controlsSpecs, VoicePanelControlsModes };
      fn.__closure = obj2;
      fn.__workletHash = 7227615652248;
      fn.__initData = __initData2;
      const derivedValue = obj.useDerivedValue(fn);
      const tmp3 = controlsSpecs(connected[6])(derivedValue);
      const items = [arg0, dismissPanel, connected, controlsSpecs];
      const callback = dismissPanel.useCallback(() => {
        if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
          dismissPanel();
        } else {
          const value = connected.get();
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
      const obj3 = { isDrawerOpen: tmp3, handlePress: callback, accessibilityLabel: stringResult, ariaHidden: !tmp5 };
      tmp5 = controlsSpecs(connected[6])(connected);
      const intl = require("intl").intl;
      const string = intl.string;
      const t = require("intl").t;
      if (tmp3) {
        stringResult = string(t["awDmr/"]);
      } else {
        stringResult = string(t.OXW7dL);
      }
      return obj3;
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default tmp2;
