// === Module 12313: useGameServerFeaturedGameNames ===

// Module 12313 (useGameServerFeaturedGameNames)
import c from "c" /* 576 */;
import useGame from "useGame" /* 7008 */;
import GameServerConstants from "GameServerConstants" /* 5009 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ MINECRAFT_GAME_ID: c2, HYTALE_GAME_ID: c3 } = GameServerConstants);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameServerFeaturedGameNames() {
  const cResult = c.c(3);
  const data = useGame.useGame(React2).data;
  const data2 = useGame.useGame(React3).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  let str2;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  if (cResult[0] === str) {
    if (cResult[1] === str2) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const obj4 = { gameName: str, gameName2: str2 };
  cResult[0] = str;
  cResult[1] = str2;
  cResult[2] = obj4;
  tmp2 = obj4;
}) : (function useGameServerFeaturedGameNames() {
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
});