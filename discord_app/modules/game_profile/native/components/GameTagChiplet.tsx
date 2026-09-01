// === Module 16740: ? ===

// Module 16740
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8801 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8812 */;
import memoResult1 from "memoResult1" /* 9007 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_5 = createCacheKey.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const memoResult = importAllResult.memo((game) => {
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = callback();
  const iconURL = game.getIconURL(32);
  let obj = { gameId: game.id, source: GameProfileEmbedAction.GameProfileSources.CallTile, sourceUserId: userId };
  const tmp3 = useOpenGameProfileModalDefault;
  obj = { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null };
  let tmp5Result;
  if (null != iconURL) {
    obj = { source: null, alt: "", style: null };
    obj1 = { uri: null };
    obj1[0] = iconURL;
    obj[0] = obj1;
    obj[2] = tmp.image;
    tmp5Result = tmp5(Image, obj);
  }
  obj[1] = tmp5Result;
  ({ container: obj2[2], text: obj2[3] } = tmp);
  obj[4] = useOpenGameProfileModalDefault(obj);
  obj[5] = textColor;
  return jsx(memoResult1.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null });
});
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default memoResult;