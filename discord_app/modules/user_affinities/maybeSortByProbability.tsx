// === Module 8072: maybeSortByProbability ===

// Module 8072 (maybeSortByProbability)
import VoiceUserAffinityExperiment from "VoiceUserAffinityExperiment" /* 8073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(reduced, userAffinitiesMap, location) {
  let sort = reduced;
  const voiceUserAffinitySortType = VoiceUserAffinityExperiment.getVoiceUserAffinitySortType(location);
  if (null == voiceUserAffinitySortType) {
    return sort;
  } else if ("vc_probability" === voiceUserAffinitySortType) {
    const items = [];
    HermesBuiltin.arraySpread(sort, 0);
    sort = items.sort;
    let sorted = sort((id, id2) => {
      value = userAffinitiesMap.get(id2.id);
      let num;
      if (value != null) {
        num = value.vcProbability;
      }
      if (num == null) {
        num = 0;
      }
      value = userAffinitiesMap.get(id.id);
      let num2;
      if (value != null) {
        num2 = value.vcProbability;
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
      value = userAffinitiesMap.get(id2.id);
      let num;
      if (value != null) {
        num = value.communicationProbability;
      }
      if (num == null) {
        num = 0;
      }
      value = userAffinitiesMap.get(id.id);
      let num2;
      if (value != null) {
        num2 = value.communicationProbability;
      }
      if (num2 == null) {
        num2 = 0;
      }
      return num - num2;
    });
  }
};