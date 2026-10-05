// discord_app/modules/activities/utils/getPartySize.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

export const getPartySize = function getPartySize(activity) {
  if (null != activity) {
    if (null != activity.party) {
      if (null != activity.party.size) {
        if (activity.party.size.length >= 2) {
          const obj = { partySize: null, maxPartySize: null };
          [obj.partySize, obj.maxPartySize] = activity.party.size;
          _slicedToArray(activity.party.size, 2);
          return obj;
        }
      }
    }
  }
  return { partySize: -1, maxPartySize: -1 };
};
