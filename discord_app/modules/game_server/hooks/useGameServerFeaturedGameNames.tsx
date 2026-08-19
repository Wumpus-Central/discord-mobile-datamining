// discord_app/modules/game_server/hooks/useGameServerFeaturedGameNames.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import importDefaultResult1 from "../../games/hooks/useGame.tsx";
import str11 from "../GameServerConstants.tsx";

({ MINECRAFT_GAME_ID: obj1, HYTALE_GAME_ID: c3 } = str11);
const result = obj132.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = importDefaultResult1;
  const data = obj.useGame(closure_2).data;
  const data2 = importDefaultResult1.useGame(closure_3).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  obj = { gameName: str, gameName2: null };
  let str2;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  obj[1] = str2;
  return obj;
};