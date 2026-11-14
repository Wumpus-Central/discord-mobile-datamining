// discord_app/modules/user_profile/native/UserProfileWidgetGameCover.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import GameCoverImageDefault from "GameCoverImage.tsx";
import UserProfileWidgetRemoveGameButtonDefault from "UserProfileWidgetRemoveGameButton.tsx";
import useWidgetGamePressDefault from "useWidgetGamePress.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function InteractiveGameCover(userId) {
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onGamePress = useWidgetGamePressDefault(userId.userId, merged.game.gameId);
  return timestampProducer(memoResult, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj = { removeGameButton: { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 } };
let closure_8 = createStyles.createStyles(obj);
const memoResult = noop.memo(function UserProfileWidgetGameCoverContent(game) {
  game = game.game;
  ({ coverWidth, editableWidgetType, registerCoverRef } = game);
  onGamePress = undefined;
  ({ disableInteraction, onRemoveGame, onGamePress } = game);
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  items = [registerCoverRef, game.gameId];
  const callback = noop.useCallback((arg0) => {
    let tmpResult;
    if (registerCoverRef != null) {
      tmpResult = tmp(game.gameId, arg0);
    }
    return tmpResult;
  }, items);
  if (null != tmp5) {
    const obj2 = {
      ref: callback,
      onPress() {
        return onGamePress();
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = util.intl;
    const obj3 = { gameName };
    obj2.accessibilityLabel = intl.formatToPlainString(util.t["8QLQB+"], obj3);
    const obj4 = {};
    const merged = Object.assign(tmp4);
    obj4.width = coverWidth;
    obj4.accessible = false;
    obj2.children = timestampProducer(GameCoverImageDefault, obj4);
    let tmp14 = timestampProducer(React4, obj2);
    let tmp15 = timestampProducer;
    const tmp2Result = GameCoverImageDefault;
  } else {
    const obj = {};
    const merged1 = Object.assign(tmp4);
    obj.ref = callback;
    obj.width = coverWidth;
    tmp14 = timestampProducer(GameCoverImageDefault, obj);
    tmp15 = timestampProducer;
    const tmp2Result2 = GameCoverImageDefault;
  }
  const children = [tmp14];
  let tmp15Result = null != editableWidgetType;
  if (tmp15Result) {
    const obj5 = { style: tmp.removeGameButton, children: null };
    const obj6 = { widgetType: editableWidgetType, gameId: game.gameId, gameName, onRemove: onRemoveGame };
    obj5.children = tmp15(UserProfileWidgetRemoveGameButtonDefault, obj6);
    tmp15Result = tmp15(hasOwnProperty, obj5);
  }
  children[1] = tmp15Result;
  return metroImportDefault(hasOwnProperty, { children });
});
let obj3 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCover.tsx");

export default noop.memo(function UserProfileWidgetGameCover(disableInteraction) {
  if (disableInteraction.disableInteraction) {
    const obj2 = {};
    const merged = Object.assign(disableInteraction);
    let tmpResult = timestampProducer(memoResult, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(disableInteraction);
    tmpResult = timestampProducer(InteractiveGameCover, obj);
  }
  return tmpResult;
});
export const UserProfileWidgetGameCoverContent = memoResult;
