// === Module 7913: maybeSortByProbability ===

// Module 7913 (maybeSortByProbability)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(reduced, userAffinitiesMap, location) {
  let sort = reduced;
  const _require = userAffinitiesMap;
  const voiceUserAffinitySortType = _require(7914).getVoiceUserAffinitySortType(location);
  if (null == voiceUserAffinitySortType) {
    return sort;
  } else if ("vc_probability" === voiceUserAffinitySortType) {
    const items = [];
    HermesBuiltin.arraySpread(sort, 0);
    sort = items.sort;
    let sorted = sort((id, id2) => {
      let value = userAffinitiesMap.get(id2.id);
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
      let value = userAffinitiesMap.get(id2.id);
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