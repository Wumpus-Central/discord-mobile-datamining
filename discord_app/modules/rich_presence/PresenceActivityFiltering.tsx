// discord_app/modules/rich_presence/PresenceActivityFiltering.tsx
import addApplication from "addApplication";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export const doesGameHaveRichPresence = function doesGameHaveRichPresence(id, items2) {
  let closure_0 = items2;
  if (null !== id.id) {
    if (undefined !== id.id) {
      application = application.getApplication(id.id);
      let tmp3 = null != application && null != application.linkedGames;
      if (tmp3) {
        tmp3 = application.linkedGames.length > 0;
      }
      if (tmp3) {
        const linkedGames = application.linkedGames;
        tmp3 = undefined !== linkedGames.find((type) => {
          let tmp = type.type === items2(outer1_1[1]).GameLinkTypes.LINKED;
          if (tmp) {
            const id = type.id;
            tmp = null != id.find((application_id) => application_id.application_id === id);
          }
          return tmp;
        });
      }
      return tmp3;
    }
  }
  return false;
};