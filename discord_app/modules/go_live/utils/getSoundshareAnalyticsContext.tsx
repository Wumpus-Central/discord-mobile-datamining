// === Module 4649: getSoundshareAnalyticsContext ===

// Module 4649 (getSoundshareAnalyticsContext)
import closure_0 from "initialize" /* 4504 */;

const result = require("set").fileFinishedImporting("modules/go_live/utils/getSoundshareAnalyticsContext.tsx");

export default function getSoundshareAnalyticsContext(sourcePid) {
  if (null == sourcePid) {
    return {};
  } else {
    sourcePid = sourcePid.sourcePid;
    let tmp;
    let tmp2;
    if (null != sourcePid) {
      gameForPID = gameForPID.getGameForPID(sourcePid);
      let name;
      if (gameForPID != null) {
        name = gameForPID.name;
      }
      let id;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      tmp = id;
      tmp2 = name;
    }
    const obj = { soundshare_session: null, share_game_name: null, share_game_id: null };
    obj[0] = sourcePid.soundshareSession;
    obj[1] = tmp2;
    obj[2] = tmp;
    return obj;
  }
};