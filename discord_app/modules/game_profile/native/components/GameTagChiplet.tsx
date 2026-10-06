// === Module 17327: GameTagChiplet ===

// Module 17327 (GameTagChiplet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8353 */;
import GuildTag from "GuildTag" /* 9409 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let game;
  let textColor;
  let tmp5;
  let userId;
  const obj = react2;
  const cResult = obj.c(15);
  ({ game, userId, textColor } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== game) {
    const iconURL = game.getIconURL(32);
    cResult[0] = game;
    cResult[1] = iconURL;
    tmp5 = iconURL;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === game.id) {
    let tmp7;
    if (cResult[3] === userId) {
      tmp7 = cResult[4];
    }
    const tmp9 = useOpenGameProfileModalDefault(tmp7);
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp4.image) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === game.name) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.text) {
              if (cResult[12] === tmp10) {
                let tmp15;
                if (cResult[13] === textColor) {
                  tmp15 = cResult[14];
                }
                return tmp15;
              }
            }
          }
        }
      }
      ({ container: obj5.containerStyles, text: obj5.textStyle } = tmp4);
      const tmp17 = jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: tmp10, containerStyles: null, textStyle: null, onPress: tmp9, textColor });
      cResult[8] = game.name;
      cResult[9] = tmp9;
      cResult[10] = tmp4.container;
      cResult[11] = tmp4.text;
      cResult[12] = tmp10;
      cResult[13] = textColor;
      cResult[14] = tmp17;
      tmp15 = tmp17;
    }
    let tmp12;
    if (null != tmp5) {
      tmp12 = <Image source={{ uri: tmp5 }} alt="" style={tmp4.image} />;
      const obj4 = { uri: tmp5 };
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.image;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const obj9 = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  cResult[2] = game.id;
  cResult[3] = userId;
  cResult[4] = obj9;
  tmp7 = obj9;
}) : ((game) => {
  let textColor;
  let userId;
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_5();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  let tmp5Result;
  const tmp3 = useOpenGameProfileModalDefault;
  const tmp3Result = tmp3(obj);
  const BaseGuildTagChiplet = GuildTag.BaseGuildTagChiplet;
  if (null != iconURL) {
    tmp5Result = <Image source={{ uri: iconURL }} alt="" style={tmp.image} />;
    const obj7 = { uri: iconURL };
  }
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  return <BaseGuildTagChiplet guildTag={game.name} guildBadge={tmp5Result} containerStyles={null} textStyle={null} onPress={tmp3Result} textColor={textColor} />;
}));
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default memoResult;