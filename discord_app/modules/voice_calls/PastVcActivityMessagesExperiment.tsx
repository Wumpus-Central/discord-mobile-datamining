// discord_app/modules/voice_calls/PastVcActivityMessagesExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = {
  kind: "guild",
  id: "2026-02_past_vc_activity_messages",
  label: "Past VC Activity Messages",
  commonTriggerPoint: CommonTriggerPoints.VOICE_CALL,
  defaultConfig: { enabled: false },
  treatments: items,
};
items = [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, location) => {
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === guildId) {
        let tmp2;
        let tmp4;
        if (cResult[1] === location) {
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
        return experiment.useExperiment(tmp2, tmp4).enabled;
      }
      const obj3 = { guildId, location };
      cResult[0] = guildId;
      cResult[1] = location;
      cResult[2] = obj3;
      tmp2 = obj3;
    }
  : (guildId, location) => {
      const obj = { guildId, location };
      return experiment.useExperiment(obj, { autoTrackExposure: true }).enabled;
    };
const result = size.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(
  id,
  GuildSettingsModalOverview,
) {
  const obj = { guildId: id, location: GuildSettingsModalOverview };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = tmp3;
