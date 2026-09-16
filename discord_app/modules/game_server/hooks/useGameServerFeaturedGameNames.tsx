// === Module 12720: useGameServerFeaturedGameNames ===

// Module 12720 (useGameServerFeaturedGameNames)
import useGame from "useGame" /* 7419 */;
import GameServerConstants from "GameServerConstants" /* 4528 */;
import size from "module_2" /* 2 */;

({ MINECRAFT_GAME_ID: c2, HYTALE_GAME_ID: c3 } = GameServerConstants);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  const data = useGame.useGame(React2).data;
  const data2 = useGame.useGame(React3).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  const obj3 = { gameName: str, gameName2: null };
  let str2;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  obj3.gameName2 = str2;
  return obj3;
};