// === Module 12577: useGameServerFeaturedGameNames ===

// Module 12577 (useGameServerFeaturedGameNames)
import useGame from "useGame" /* 7309 */;
import GameServerConstants from "GameServerConstants" /* 4451 */;
import size from "module_2" /* 2 */;

({ MINECRAFT_GAME_ID: c2, HYTALE_GAME_ID: c3 } = GameServerConstants);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = useGame;
  const data = obj.useGame(React2).data;
  const data2 = useGame.useGame(React3).data;
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
  obj.gameName2 = str2;
  return obj;
};