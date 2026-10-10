// === Module 17832: GameTagChiplet ===

// Module 17832 (GameTagChiplet)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import GuildTag from "GuildTag" /* 8858 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8879 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameTagChiplet(arg0) {
  const cResult = c.c(15);
  ({ game, userId, textColor } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== game) {
    const iconURL = game.getIconURL(32);
    cResult[0] = game;
    cResult[1] = iconURL;
    let tmp5 = iconURL;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === game.id) {
    if (cResult[3] === userId) {
      let tmp7 = cResult[4];
    }
    const tmp9 = useOpenGameProfileModalDefault(tmp7);
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp4.image) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === game.name) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.text) {
              if (cResult[12] === tmp10) {
                if (cResult[13] === textColor) {
                  let tmp14 = cResult[14];
                }
                return tmp14;
              }
            }
          }
        }
      }
      const obj2 = { guildTag: game.name, guildBadge: tmp10, containerStyles: null, textStyle: null, onPress: null, textColor: null };
      ({ container: obj5.containerStyles, text: obj5.textStyle } = tmp4);
      obj2.onPress = tmp9;
      obj2.textColor = textColor;
      const tmp16 = jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: tmp10, containerStyles: null, textStyle: null, onPress: null, textColor: null });
      cResult[8] = game.name;
      cResult[9] = tmp9;
      cResult[10] = tmp4.container;
      cResult[11] = tmp4.text;
      cResult[12] = tmp10;
      cResult[13] = textColor;
      cResult[14] = tmp16;
      tmp14 = tmp16;
    }
    let tmp12;
    if (null != tmp5) {
      const obj3 = { source: null, accessible: false, style: null };
      const obj4 = { uri: tmp5 };
      obj3.source = obj4;
      obj3.style = tmp4.image;
      tmp12 = jsx(FastImageDefault, { source: null, accessible: false, style: null });
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
}) : (function GameTagChiplet(game) {
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
}));