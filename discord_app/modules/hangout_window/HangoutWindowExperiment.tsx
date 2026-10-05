// discord_app/modules/hangout_window/HangoutWindowExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = {
  kind: "guild",
  id: "2026-02_hangout_window",
  label: "Hangout Window",
  defaultConfig: { enableHangoutWindow: false },
  commonTriggerPoint: CommonTriggerPoints.VOICE_CALL,
  treatments: items,
};
items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let guildId;
      const obj = react;
      const cResult = obj.c(4);
      ({ guildId, location: _location } = arg0);
      if (cResult[0] === guildId) {
        let tmp2;
        let tmp4;
        if (cResult[1] === _location) {
          tmp2 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { autoTrackExposure: true };
          cResult[3] = obj2;
          tmp4 = obj2;
        } else {
          tmp4 = cResult[3];
        }
        return experiment.useExperiment(tmp2, tmp4);
      }
      const obj3 = { guildId, location: _location };
      cResult[0] = guildId;
      cResult[1] = _location;
      cResult[2] = obj3;
      tmp2 = obj3;
    }
  : (guildId) => {
      const obj = { guildId: guildId.guildId, location: guildId.location };
      return experiment.useExperiment(obj, { autoTrackExposure: true });
    };
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = tmp3;
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true });
};
