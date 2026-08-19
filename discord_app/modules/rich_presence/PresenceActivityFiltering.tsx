// === Module 7257: doesGameHaveRichPresence ===

// Module 7257 (doesGameHaveRichPresence)
import addApplication from "addApplication" /* 4478 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export const doesGameHaveRichPresence = function doesGameHaveRichPresence(visibleGame, items2) {
  closure_0 = items2;
  if (null !== visibleGame.id) {
    if (undefined !== visibleGame.id) {
      application = application.getApplication(visibleGame.id);
      let tmp3 = null != application && null != application.linkedGames;
      if (tmp3) {
        tmp3 = application.linkedGames.length > 0;
      }
      if (tmp3) {
        const linkedGames = application.linkedGames;
        tmp3 = undefined !== linkedGames.find((item, index) => {
          let tmp = item.type === items2(dependencyMap[1]).GameLinkTypes.LINKED;
          if (tmp) {
            const id = item.id;
            tmp = null != id.find((item, index) => item.application_id === id);
          }
          return tmp;
        });
      }
      return tmp3;
    }
  }
  return false;
};