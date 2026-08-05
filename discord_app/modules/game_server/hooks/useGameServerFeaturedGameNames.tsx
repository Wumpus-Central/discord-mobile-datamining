import { importDefaultResult1 } from "../../games/hooks/useGame.tsx";
// discord_app/modules/game_server/hooks/useGameServerFeaturedGameNames.tsx
import str11 from "str11";

let c3;
let obj1;
({ MINECRAFT_GAME_ID: obj1, HYTALE_GAME_ID: c3 } = require("str11"));
const result = require("set").fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = importDefaultResult1 /* importDefaultResult1 */;
  const data = obj.useGame(closure_2).data;
  const data2 = importDefaultResult1 /* importDefaultResult1 */.useGame(closure_3).data;
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