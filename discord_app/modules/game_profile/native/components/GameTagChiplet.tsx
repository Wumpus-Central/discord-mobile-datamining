// === Module 17159: GameTagChiplet ===

// Module 17159 (GameTagChiplet)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8675 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import GuildTag from "GuildTag" /* 9184 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default noop.memo((game) => {
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_5();
  const iconURL = game.getIconURL(32);
  let obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  obj = { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null };
  let tmp5Result;
  if (null != iconURL) {
    obj = { source: null, alt: "", style: null };
    const obj1 = { uri: iconURL };
    obj.source = obj1;
    obj.style = tmp.image;
    tmp5Result = <Image source={null} alt="" style={null} />;
  }
  obj.guildBadge = tmp5Result;
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  obj.onPress = useOpenGameProfileModalDefault(obj);
  obj.textColor = textColor;
  return jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null });
});