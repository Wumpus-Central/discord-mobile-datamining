// discord_app/modules/go_live/utils/getSoundshareAnalyticsContext.tsx
import RunningGameStore from "../../game_detection/RunningGameStore.native.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getSoundshareAnalyticsContext.tsx");

export default function getSoundshareAnalyticsContext(sourcePid) {
  if (null == sourcePid) {
    return {};
  } else {
    sourcePid = sourcePid.sourcePid;
    let tmp;
    let tmp2;
    if (null != sourcePid) {
      const gameForPID = RunningGameStore.getGameForPID(sourcePid);
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
    const obj = { soundshare_session: sourcePid.soundshareSession, share_game_name: tmp2, share_game_id: tmp };
    return obj;
  }
}
