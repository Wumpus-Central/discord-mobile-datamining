// discord_app/modules/user_affinities/maybeSortByProbability.tsx
import VoiceUserAffinityExperiment from "VoiceUserAffinityExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(reduced, stateFromStores, location) {
  let closure_0 = stateFromStores;
  const obj = VoiceUserAffinityExperiment;
  const voiceUserAffinitySortType = obj.getVoiceUserAffinitySortType(location);
  let tmp3 = reduced;
  if (null != voiceUserAffinitySortType) {
    let sorted;
    if ("vc_probability" === voiceUserAffinitySortType) {
      const items = [];
      let num2 = 0;
      HermesBuiltin.arraySpread(items, reduced, 0);
      sorted = items.sort((id, id2) => {
        const value = closure_0.get(id2.id);
        let num;
        if (value != null) {
          num = value.vcProbability;
        }
        if (num == null) {
          num = 0;
        }
        const value2 = closure_0.get(id.id);
        let num2;
        if (value2 != null) {
          num2 = value2.vcProbability;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num - num2;
      });
    } else {
      const items1 = [];
      let num = 0;
      HermesBuiltin.arraySpread(items1, reduced, 0);
      sorted = items1.sort((id, id2) => {
        const value = closure_0.get(id2.id);
        let num;
        if (value != null) {
          num = value.communicationProbability;
        }
        if (num == null) {
          num = 0;
        }
        const value2 = closure_0.get(id.id);
        let num2;
        if (value2 != null) {
          num2 = value2.communicationProbability;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num - num2;
      });
    }
    tmp3 = sorted;
  }
  return tmp3;
};
