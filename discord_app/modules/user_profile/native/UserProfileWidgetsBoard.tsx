// === Module 15196: UserProfileWidgetsBoard ===

// Module 15196 (UserProfileWidgetsBoard)
import applyDefault from "apply" /* 12 */;
import nativeDefault from "native" /* 575 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6153 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7853 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7854 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12445 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15201 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 15212 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 15214 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 15227 */;
import noop from "module_19" /* 19 */;

require = fn;
function AddGameButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const obj = { ref, size: "sm", variant: "secondary", icon: closure_8(ref(9659).PlusSmallIcon, { size: "sm", color: widgetType(575).colors.ICON_DEFAULT }), accessibilityLabel: null, disabled: null, onPress: null };
  const intl = ref(1113).intl;
  obj.accessibilityLabel = intl.string(ref(1113).t.E3l3Zx);
  obj.disabled = ref.disabled;
  obj.onPress = function onPress() {
    return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
  };
  return closure_8(ref(8098).IconButton, obj);
}
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle, isEditing } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle, isEditing };
    let tmp3Result = React5(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle, isEditing };
    tmp3Result = React5(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle, isEditing };
    tmp3Result = React5(memoResult, obj);
  }
  return tmp3Result;
}
const View = fn(17).View;
const UserProfileSections = fn(8825).UserProfileSections;
const UserProfileWidgetConstants = fn(7851);
({ widgetSupportsComment: closure_6, widgetSupportsTags: metroImportDefault } = UserProfileWidgetConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5140);
let obj = { board: { gap: nativeDefault.space.PX_16 }, emptyState: null, singleGameEmptyState: null, singleGameEmptyStateText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj.emptyState = { paddingVertical: nativeDefault.space.PX_16, textAlign: "center" };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, textAlign: "center" };
obj.singleGameEmptyState = { flexDirection: "row", alignItems: "center", gap: fn(15197).GAME_COVER_DETAILS_GAP, paddingVertical: nativeDefault.space.PX_8 };
obj.singleGameEmptyStateText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo(function WidgetSection(userId) {
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  if (flag === undefined) {
    flag = false;
  }
  coverWidth = undefined;
  let type;
  ref = undefined;
  let registerCoverRef;
  let onRemoveGame;
  let type1;
  let type3;
  let singleGameEmptyStateText = onRemoveGame();
  const tmp3 = widget(disableInteraction[13])();
  ({ isMeasured, coverWidth } = tmp3);
  items = [widget.games];
  ({ ref, onLayout, columns } = tmp3);
  const memo = flag.useMemo(() => applyDefault.uniqBy(widget.games, "gameId"), items);
  let Text = userId;
  const widgetMaxGamesResult = userId(disableInteraction[15]).widgetMaxGames(widget.type);
  closure_6 = tmp5;
  let tmp6 = flag;
  if (flag) {
    tmp6 = tmp5;
  }
  type = obj.useRef(null);
  let obj2 = userId(disableInteraction[15]);
  ref = obj.useRef(new Map());
  const items1 = [1 === widgetMaxGamesResult];
  registerCoverRef = obj.useCallback((arg0, current) => {
    if (null != current) {
      const current2 = ref.current;
      const result = current2.set(arg0, current);
    } else {
      current = ref.current;
      current.delete(arg0);
    }
    if (closure_6) {
      type.current = current;
    }
  }, items1);
  const items2 = [memo];
  onRemoveGame = obj.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((gameId) => gameId.gameId === closure_0);
    let gameId;
    if (memo[findIndexResult + 1] != null) {
      gameId = tmp3.gameId;
    }
    items = [gameId, ];
    let gameId1;
    if (memo[findIndexResult - 1] != null) {
      gameId1 = tmp5.gameId;
    }
    items[1] = gameId1;
    const timerId = setTimeout(() => {
      const mapped = items.map((item) => {
        value = undefined;
        if (null != item) {
          const current = ref.current;
          value = current.get(item);
        }
        return value;
      });
      const found = mapped.find((item) => null != item);
      if (null != found) {
        const obj2 = { current: found };
        let tmp2 = obj2;
      } else {
        tmp2 = type;
      }
      const result = setAccessibilityFocus.setAccessibilityFocus({ ref: tmp2 });
    }, 100);
  }, items2);
  type1 = undefined;
  if (flag) {
    if (type(widget.type)) {
      type1 = widget.type;
    }
  }
  type3 = undefined;
  if (flag) {
    if (closure_6(widget.type)) {
      type3 = widget.type;
    }
  }
  if (flag) {
    let tmp13 = !tmp6;
    if (!tmp6) {
      const obj3 = { ref: type, widgetType: widget.type, disabled: Text(tmp2[15]).isGameLimitReached(widget) };
      tmp13 = ref(type1, obj3, "add-game");
      const TextResult = Text(tmp2[15]);
    }
    const items3 = [tmp13, ];
    const obj4 = { widget };
    items3[1] = ref(tmp(tmp2[17]), obj4, "edit-options");
    const tmp12 = items3;
  }
  if (0 === memo.length) {
    const intl = Text(tmp2[11]).intl;
    if (tmp5) {
      let stringResult = intl.string(Text(tmp2[11]).t["3FdPBT"]);
    } else {
      const obj5 = { maxGames: widgetMaxGamesResult };
      stringResult = intl.formatToPlainString(Text(tmp2[11]).t.W8K2GH, obj5);
    }
    if (tmp6) {
      if (isMeasured) {
        const obj6 = { style: singleGameEmptyStateText.singleGameEmptyState, children: null };
        const obj7 = { ref: type, widgetType: null, coverWidth: null };
        type = widget.type;
        obj7.widgetType = type;
        obj7.coverWidth = coverWidth;
        const items4 = [ref(tmp(tmp2[18]), obj7), ];
        Text = Text(tmp2[19]).Text;
        const obj8 = { variant: "body-sm/medium", color: "text-muted", style: null, children: null };
        singleGameEmptyStateText = singleGameEmptyStateText.singleGameEmptyStateText;
        obj8.style = singleGameEmptyStateText;
        obj8.children = stringResult;
        items4[1] = ref(Text, obj8);
        obj6.children = items4;
        isMeasured = registerCoverRef(coverWidth, obj6);
      }
    } else {
      const obj9 = { variant: "body-sm/medium", color: "text-muted", style: singleGameEmptyStateText.emptyState, children: stringResult };
      const tmp23 = ref(Text(tmp2[19]).Text, obj9);
    }
  } else {
    const type2 = widget.type;
    if (Text(tmp2[20]).WidgetType.FAVORITE_GAMES !== type2) {
      if (Text(tmp2[20]).WidgetType.CURRENT_GAMES !== type2) {
        if (Text(tmp2[20]).WidgetType.WANT_TO_PLAY_GAMES !== type2) {
          if (Text(tmp2[20]).WidgetType.PLAYED_GAMES !== type2) {
            return null;
          }
        }
        let tmp17 = isMeasured;
        if (isMeasured) {
          const obj10 = {
            games: memo,
            columns,
            renderCover(game) {
                      const obj = { userId, game, coverWidth, disableInteraction, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
                      type = undefined;
                      if (flag) {
                        type = widget.type;
                      }
                      obj.editableWidgetType = type;
                      obj.registerCoverRef = registerCoverRef;
                      obj.onRemoveGame = onRemoveGame;
                      return React5(UserProfileWidgetGameCoverDefault, obj, game.gameId);
                    }
          };
          tmp17 = ref(tmp(tmp2[23]), obj10);
        }
      }
      const obj11 = { userId, widget, style: userId.cardStyle, disableInteraction, actionButtons: tmp12, children: null };
      const obj12 = { ref, onLayout, children: tmp17 };
      obj11.children = ref(coverWidth, obj12);
      return ref(tmp(tmp2[25]), obj11);
    }
    let tmp19 = isMeasured;
    if (isMeasured) {
      const obj13 = {
        games: memo,
        renderRow(game) {
              const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type3, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
              type = undefined;
              if (flag) {
                type = widget.type;
              }
              obj.editableWidgetType = type;
              obj.registerCoverRef = registerCoverRef;
              obj.onRemoveGame = onRemoveGame;
              return React5(UserProfileGameDetailsRowDefault, obj, game.gameId);
            }
      };
      tmp19 = ref(tmp(tmp2[21]), obj13);
    }
    tmp17 = tmp19;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  ({ cardStyle: importDefault, isEditing } = userId);
  const tmp = closure_10();
  const displayableBoardWidgets = userId(isEditing[30]).useDisplayableBoardWidgets(userId, isEditing);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(isEditing[30]);
  const trackUserProfileAction = userId(isEditing[8]).useUserProfileAnalyticsContext().trackUserProfileAction;
  closure_129_2 = trackUserProfileAction;
  closure_129_3 = noop.useRef(false);
  items = [flag, displayableBoardWidgets.length > 0, trackUserProfileAction];
  const effect = noop.useEffect(() => {
    if (userId) {
      let tmp2 = cardStyle;
      if (cardStyle) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        isEditing(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
  let tmp4 = null;
  if (0 !== displayableBoardWidgets.length) {
    const obj3 = { style: tmp.board, children: displayableBoardWidgets.map((widget) => React5(WidgetRenderer, { userId, widget, cardStyle, isEditing }, widget.getUniqueKey())) };
    tmp4 = closure_8(View, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;