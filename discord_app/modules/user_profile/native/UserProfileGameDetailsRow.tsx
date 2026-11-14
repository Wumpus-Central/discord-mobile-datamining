// discord_app/modules/user_profile/native/UserProfileGameDetailsRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import UserProfileWidgetGameCover from "UserProfileWidgetGameCover.tsx";
import useWidgetGamePressDefault from "useWidgetGamePress.tsx";
import UserProfileWidgetGameCommentInputDefault from "UserProfileWidgetGameCommentInput.tsx";
import QuoteIcon from "../../../design/components/Icon/native/redesign/generated/QuoteIcon.tsx";
import UserProfileWidgetGameTagsDefault from "UserProfileWidgetGameTags.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function InteractiveGameDetailsRow(userId) {
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onGamePress = useWidgetGamePressDefault(userId.userId, merged.game.gameId);
  return hasOwnProperty(closure_8, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj = {
  row: { flexDirection: "row", alignItems: "center", gap: fn(12104).GAME_COVER_DETAILS_GAP },
  editingCommentRow: { alignItems: "flex-start" },
  details: null,
  comment: null,
  commentText: null,
};
let obj3 = { flexDirection: "row", alignItems: "center", gap: fn(12104).GAME_COVER_DETAILS_GAP };
obj.details = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.comment = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.commentText = { flex: 1 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = noop.memo(function UserProfileGameDetailsRowContent(coverWidth) {
  ({ game, compact } = coverWidth);
  if (compact === undefined) {
    compact = false;
  }
  ({ disableInteraction, onGamePress, editableCommentWidgetType } = coverWidth);
  const merged = Object.assign(
    coverWidth,
    Object.assign({
      game: 0,
      coverWidth: 0,
      compact: 0,
      disableInteraction: 0,
      onGamePress: 0,
      editableTagsWidgetType: 0,
      editableCommentWidgetType: 0,
    }),
  );
  onGamePress = undefined;
  const tmp2 = closure_7();
  const gameName = useGameNameAndCoverImageDefault(game.gameId).gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  useFontScale;
  let num = 3;
  if (compact) {
    let num3 = 2;
    if (tmp8 > 1.5) {
      num3 = 1;
    }
    num = num3;
  }
  let num4 = 2;
  if (compact) {
    num4 = 1;
  }
  const tmp9Result = hasOwnProperty(Text_Text.Text, {
    variant: "body-md/medium",
    color: "text-default",
    lineClamp: num4,
    children: gameName,
  });
  items = [tmp2.row];
  const obj = { style: items, children: null };
  items[1] = null != editableCommentWidgetType && tmp2.editingCommentRow;
  const merged1 = Object.assign(merged);
  const items1 = [
    hasOwnProperty(UserProfileWidgetGameCover.UserProfileWidgetGameCoverContent, {
      game,
      coverWidth: coverWidth.coverWidth,
      disableInteraction,
      onGamePress,
    }),
  ];
  const obj3 = { style: tmp2.details, children: null };
  let tmp9Result3 = tmp9Result;
  if (null != tmp5) {
    const obj4 = {
      onPress() {
        return onGamePress();
      },
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: tmp9Result,
    };
    tmp9Result3 = hasOwnProperty(React3, obj4);
  }
  const items2 = [tmp9Result3, ,];
  if (null != editableCommentWidgetType) {
    const obj5 = { widgetType: editableCommentWidgetType, gameId: null, comment: null };
    ({ gameId: obj8.gameId, comment: obj8.comment } = game);
    let tmp9Result4 = hasOwnProperty(UserProfileWidgetGameCommentInputDefault, obj5);
  } else {
    let trimmed;
    if (game.comment != null) {
      trimmed = str.trim();
    }
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
    tmp9Result4 = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj6 = { style: tmp2.comment, children: null };
      const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const items3 = [hasOwnProperty(QuoteIcon.QuoteIcon, obj7)];
      const obj9 = {
        variant: "body-sm/normal",
        color: "text-muted",
        lineClamp: num,
        style: tmp2.commentText,
        children: game.comment,
      };
      items3[1] = hasOwnProperty(Text_Text.Text, obj9);
      obj6.children = items3;
      tmp9Result4 = timestampProducer(React4, obj6);
    }
    const tmp6Result = StringUtils;
  }
  items2[1] = tmp9Result4;
  items2[2] = hasOwnProperty(UserProfileWidgetGameTagsDefault, {
    tags: game.tags,
    gameId: game.gameId,
    gameName,
    editableTagsWidgetType: coverWidth.editableTagsWidgetType,
    singleLineClamp: compact,
  });
  obj3.children = items2;
  items1[1] = timestampProducer(React4, obj3);
  obj.children = items1;
  return timestampProducer(React4, obj);
});
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsRow.tsx");

export default noop.memo(function UserProfileGameDetailsRow(disableInteraction) {
  if (disableInteraction.disableInteraction) {
    const obj2 = {};
    const merged = Object.assign(disableInteraction);
    let tmpResult = hasOwnProperty(closure_8, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(disableInteraction);
    tmpResult = hasOwnProperty(InteractiveGameDetailsRow, obj);
  }
  return tmpResult;
});
