// === Module 7753: maybeSortByProbability ===

// Module 7753 (maybeSortByProbability)
import VoiceUserAffinityExperiment from "VoiceUserAffinityExperiment" /* 7754 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(reduced, stateFromStores, location) {
  let sort = reduced;
  const voiceUserAffinitySortType = VoiceUserAffinityExperiment.getVoiceUserAffinitySortType(location);
  if (null == voiceUserAffinitySortType) {
    return sort;
  } else if ("vc_probability" === voiceUserAffinitySortType) {
    const items = [];
    HermesBuiltin.arraySpread(sort, 0);
    sort = items.sort;
    let sorted = sort((id, id2) => {
      value = stateFromStores.get(id2.id);
      let num;
      if (value != null) {
        num = value.vcProbability;
      }
      if (num == null) {
        num = 0;
      }
      value2 = stateFromStores.get(id.id);
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
    HermesBuiltin.arraySpread(sort, 0);
    sorted = items1.sort((id, id2) => {
      value = stateFromStores.get(id2.id);
      let num;
      if (value != null) {
        num = value.communicationProbability;
      }
      if (num == null) {
        num = 0;
      }
      value2 = stateFromStores.get(id.id);
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
};