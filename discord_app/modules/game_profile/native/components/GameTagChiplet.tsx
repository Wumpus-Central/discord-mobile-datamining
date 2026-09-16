// discord_app/modules/game_profile/native/components/GameTagChiplet.tsx
import useOpenGameProfileModalDefault from "../../hooks/useOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GuildTag from "../../../guild_tag/native/GuildTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_5 = createStyles.createStyles({
  container: { flexShrink: 1, minWidth: 0, overflow: "hidden" },
  text: { flexShrink: 1, minWidth: 0 },
  image: { width: 12, height: 12 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default noop.memo((game) => {
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_5();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  const obj3 = {
    guildTag: game.name,
    guildBadge: null,
    containerStyles: null,
    textStyle: null,
    onPress: null,
    textColor: null,
  };
  let tmp5Result;
  if (null != iconURL) {
    const obj4 = { source: null, alt: "", style: null };
    const obj7 = { uri: iconURL };
    obj4.source = obj7;
    obj4.style = tmp.image;
    tmp5Result = <Image source={null} alt="" style={null} />;
  }
  obj3.guildBadge = tmp5Result;
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  obj3.onPress = useOpenGameProfileModalDefault(obj);
  obj3.textColor = textColor;
  return jsx(GuildTag.BaseGuildTagChiplet, {
    guildTag: game.name,
    guildBadge: null,
    containerStyles: null,
    textStyle: null,
    onPress: null,
    textColor: null,
  });
});
