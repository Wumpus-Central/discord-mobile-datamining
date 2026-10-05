// === Module 12236: useGameServerFeaturedGameNames ===

// Module 12236 (useGameServerFeaturedGameNames)
import react from "react" /* 576 */;
import useGame from "useGame" /* 6812 */;
import GameServerConstants from "GameServerConstants" /* 4769 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ MINECRAFT_GAME_ID: c2, HYTALE_GAME_ID: c3 } = GameServerConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useGame;
  const data = obj2.useGame(React2).data;
  const obj3 = useGame;
  const data2 = obj3.useGame(_false).data;
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
    let tmp2;
    if (cResult[1] === str2) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const obj4 = { gameName: str, gameName2: str2 };
  cResult[0] = str;
  cResult[1] = str2;
  cResult[2] = obj4;
  tmp2 = obj4;
}) : (() => {
  let str2;
  const obj = useGame;
  const data = obj.useGame(React2).data;
  const obj2 = useGame;
  const data2 = obj2.useGame(_false).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  const obj3 = { gameName: str, gameName2: str2 };
  str2 = undefined;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default tmp3;