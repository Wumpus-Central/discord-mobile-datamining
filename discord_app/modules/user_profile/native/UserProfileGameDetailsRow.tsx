// === Module 15212: UserProfileGameDetailsRow ===

// Module 15212 (UserProfileGameDetailsRow)
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2150 */;
import Text_Text from "Text/Text" /* 5751 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15179 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 15213 */;
import UserProfileWidgetGameCover from "UserProfileWidgetGameCover" /* 15214 */;
import UserProfileWidgetGameCommentInputDefault from "UserProfileWidgetGameCommentInput" /* 15217 */;
import QuoteIcon from "QuoteIcon" /* 15218 */;
import UserProfileWidgetGameTagsDefault from "UserProfileWidgetGameTags" /* 15220 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
let obj = { row: { flexDirection: "row", alignItems: "center", gap: fn(15197).GAME_COVER_DETAILS_GAP }, editingCommentRow: { alignItems: "flex-start" }, details: null, comment: null, commentText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: fn(15197).GAME_COVER_DETAILS_GAP };
obj.details = { flex: 1, gap: nativeDefault.space.PX_8 };
const obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.comment = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.commentText = { flex: 1 };
let closure_7 = createStyles.createStyles(obj);
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsRow.tsx");

export default noop.memo(function UserProfileGameDetailsRow(arg0) {
  ({ game, disableInteraction, editableCommentWidgetType } = arg0);
  ({ userId, coverWidth, editableTagsWidgetType } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, game: 0, coverWidth: 0, disableInteraction: 0, editableTagsWidgetType: 0, editableCommentWidgetType: 0 }));
  closure_0 = undefined;
  const tmp2 = closure_7();
  const gameName = useGameNameAndCoverImageDefault(game.gameId).gameName;
  const tmp5 = useWidgetGamePressDefault(userId, game.gameId);
  let tmp6;
  if (!disableInteraction) {
    tmp6 = tmp5;
  }
  closure_0 = tmp6;
  items = [tmp2.row, ];
  const obj = { style: items, children: null };
  items[1] = null != editableCommentWidgetType && tmp2.editingCommentRow;
  const merged1 = Object.assign(merged);
  const items1 = [hasOwnProperty(UserProfileWidgetGameCover.UserProfileWidgetGameCoverContent, { game, coverWidth, disableInteraction, onGamePress: tmp5 }), ];
  const obj3 = { style: tmp2.details, children: null };
  const items2 = [
    hasOwnProperty(React3, {
      onPress() {
        let tmp;
        if (closure_0 != null) {
          tmp = closure_0();
        }
        return tmp;
      },
      disabled: null == tmp6,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: hasOwnProperty(Text_Text.Text, { variant: "body-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
  ,

  ];
  if (null != editableCommentWidgetType) {
    const obj5 = { widgetType: editableCommentWidgetType, gameId: null, comment: null };
    ({ gameId: obj8.gameId, comment: obj8.comment } = game);
    let tmp7Result = hasOwnProperty(UserProfileWidgetGameCommentInputDefault, obj5);
  } else {
    let trimmed;
    if (game.comment != null) {
      trimmed = str.trim();
    }
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
    tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj6 = { style: tmp2.comment, children: null };
      const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const items3 = [hasOwnProperty(QuoteIcon.QuoteIcon, obj7), ];
      const obj9 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 3, style: tmp2.commentText, children: game.comment };
      items3[1] = hasOwnProperty(Text_Text.Text, obj9);
      obj6.children = items3;
      tmp7Result = timestampProducer(React4, obj6);
    }
    const tmp11Result = StringUtils;
  }
  items2[1] = tmp7Result;
  items2[2] = hasOwnProperty(UserProfileWidgetGameTagsDefault, { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType });
  obj3.children = items2;
  items1[1] = timestampProducer(React4, obj3);
  obj.children = items1;
  return timestampProducer(React4, obj);
});