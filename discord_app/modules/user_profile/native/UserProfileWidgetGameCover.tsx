// === Module 12061: UserProfileWidgetGameCover ===

// Module 12061 (UserProfileWidgetGameCover)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 12059 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 12060 */;
import GameCoverImageDefault from "GameCoverImage" /* 12062 */;
import UserProfileWidgetRemoveGameButtonDefault from "UserProfileWidgetRemoveGameButton" /* 12063 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj = { removeGameButton: { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 } };
let closure_8 = createStyles.createStyles(obj);
const memoResult = noop.memo(function UserProfileWidgetGameCoverContent(game) {
  game = game.game;
  ({ editableWidgetType, registerCoverRef } = game);
  onGamePress = undefined;
  ({ coverWidth, disableInteraction, onRemoveGame, onGamePress } = game);
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  items = [registerCoverRef, game.gameId];
  const obj = {
    ref: noop.useCallback((arg0) => {
      let tmpResult;
      if (registerCoverRef != null) {
        tmpResult = tmp(game.gameId, arg0);
      }
      return tmpResult;
    }, items),
    onPress() {
      let tmp;
      if (onGamePress != null) {
        tmp = onGamePress();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  let formatToPlainStringResult = gameName;
  if (null != tmp5) {
    const intl = util.intl;
    const obj2 = { gameName };
    formatToPlainStringResult = intl.formatToPlainString(util.t["8QLQB+"], obj2);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = {};
  let tmp = closure_8();
  const merged = Object.assign(tmp4);
  obj3.width = coverWidth;
  obj.children = timestampProducer(GameCoverImageDefault, obj3);
  const children = [timestampProducer(React4, obj), ];
  let tmp8Result = null != editableWidgetType;
  if (tmp8Result) {
    const obj4 = { style: tmp.removeGameButton, children: null };
    const obj5 = { widgetType: editableWidgetType, gameId: game.gameId, gameName, onRemove: onRemoveGame };
    obj4.children = timestampProducer(UserProfileWidgetRemoveGameButtonDefault, obj5);
    tmp8Result = timestampProducer(hasOwnProperty, obj4);
  }
  children[1] = tmp8Result;
  return metroImportDefault(hasOwnProperty, { children });
});
let obj3 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCover.tsx");

export default noop.memo(function UserProfileWidgetGameCover(userId) {
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onGamePress = useWidgetGamePressDefault(userId.userId, merged.game.gameId);
  return timestampProducer(memoResult, obj);
});
export const UserProfileWidgetGameCoverContent = memoResult;