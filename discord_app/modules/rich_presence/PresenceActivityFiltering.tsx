// === Module 11461: PresenceActivityFiltering ===

// Module 11461 (PresenceActivityFiltering)
import Server from "Server" /* 1894 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rich_presence/PresenceActivityFiltering.tsx");

export const doesGameHaveRichPresence = function doesGameHaveRichPresence(visibleGame, items2) {
  if (null !== visibleGame.id) {
    if (undefined !== visibleGame.id) {
      const application = ApplicationStore.getApplication(visibleGame.id);
      let tmp3 = null != application && null != application.linkedGames;
      if (tmp3) {
        tmp3 = application.linkedGames.length > 0;
      }
      if (tmp3) {
        const linkedGames = application.linkedGames;
        tmp3 = undefined !== linkedGames.find((type) => {
          let tmp = type.type === Server.GameLinkTypes.LINKED;
          if (tmp) {
            const id = type.id;
            tmp = null != items2.find((application_id) => application_id.application_id === id);
          }
          return tmp;
        });
      }
      return tmp3;
    }
  }
  return false;
};