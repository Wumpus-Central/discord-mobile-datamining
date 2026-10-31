// === Module 19268: GameTagChiplet ===

// Module 19268 (GameTagChiplet)
import FastImageDefault from "FastImage" /* 5717 */;
import GuildTag from "GuildTag" /* 9295 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9316 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default noop.memo(function GameTagChiplet(game) {
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_4();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  const obj3 = { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null };
  let tmp7Result;
  if (null != iconURL) {
    const obj4 = { source: null, accessible: false, style: null };
    const obj7 = { uri: iconURL };
    obj4.source = obj7;
    obj4.style = tmp.image;
    tmp7Result = jsx(FastImageDefault, { source: null, accessible: false, style: null });
  }
  obj3.guildBadge = tmp7Result;
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  obj3.onPress = useOpenGameProfileModalDefault(obj);
  obj3.textColor = textColor;
  return jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null });
});