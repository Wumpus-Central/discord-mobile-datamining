// discord_app/modules/activities/utils/getPartySize.tsx
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

export const getPartySize = function getPartySize(activity) {
  if (null != activity) {
    if (null != activity.party) {
      if (null != activity.party.size) {
        if (activity.party.size.length >= 2) {
          const obj = { partySize: null, maxPartySize: null };
          [obj[0], obj[1]] = callback(activity.party.size, 2);
          return obj;
        }
      }
    }
  }
  return { partySize: -1, maxPartySize: -1 };
};