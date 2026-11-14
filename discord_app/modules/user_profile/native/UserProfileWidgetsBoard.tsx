// discord_app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import UserProfileApplicationWidgetTypes from "../UserProfileApplicationWidgetTypes.tsx";
import UserProfilePersonalWidget from "../UserProfilePersonalWidget.tsx";
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import UserProfileGameWidgetConstants from "../UserProfileGameWidgetConstants.native.tsx";
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow.tsx";
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover.tsx";
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet.tsx";
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AddGameButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const obj = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: closure_8(ref(10449).PlusSmallIcon, { size: "sm", color: widgetType(575).colors.ICON_DEFAULT }),
    accessibilityLabel: null,
    disabled: null,
    onPress: null,
  };
  const intl = ref(1113).intl;
  obj.accessibilityLabel = intl.string(ref(1113).t.E3l3Zx);
  obj.disabled = ref.disabled;
  obj.onPress = function onPress() {
    return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
  };
  return closure_8(ref(7988).IconButton, obj);
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
const UserProfileSections = fn(8479).UserProfileSections;
const UserProfileWidgetConstants = fn(7355);
({ widgetSupportsComment: closure_6, widgetSupportsTags: metroImportDefault } = UserProfileWidgetConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj = {
  board: { gap: nativeDefault.space.PX_16 },
  emptyState: null,
  singleGameEmptyState: null,
  singleGameEmptyStateText: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj.emptyState = { paddingVertical: nativeDefault.space.PX_16, textAlign: "center" };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, textAlign: "center" };
obj.singleGameEmptyState = {
  flexDirection: "row",
  alignItems: "center",
  gap: fn(12104).GAME_COVER_DETAILS_GAP,
  paddingVertical: nativeDefault.space.PX_8,
};
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
  let handleDismissSuggestions;
  let type;
  ref = undefined;
  let ref2;
  let registerCoverRef;
  let onRemoveGame;
  let type1;
  let type3;
  let singleGameEmptyStateText = ref2();
  const tmp3 = widget(disableInteraction[13])();
  ({ isMeasured, coverWidth } = tmp3);
  items = [widget];
  ({ ref, onLayout, width, columns } = tmp3);
  const memo = flag.useMemo(() => WidgetUtils.getUniqueWidgetGames(widget), items);
  let Text = userId;
  const widgetMaxGamesResult = userId(disableInteraction[14]).widgetMaxGames(widget.type);
  closure_6 = tmp5;
  let tmp6 = flag;
  if (flag) {
    tmp6 = tmp5;
  }
  let obj2 = userId(disableInteraction[14]);
  const shouldShowSuggestedGames = Text(disableInteraction[15]).useShouldShowSuggestedGames(widget);
  handleDismissSuggestions = shouldShowSuggestedGames.handleDismissSuggestions;
  type = obj.useRef(null);
  const TextResult = Text(disableInteraction[15]);
  ref = obj.useRef(new Map());
  ref2 = obj.useRef(null);
  const items1 = [1 === widgetMaxGamesResult];
  registerCoverRef = obj.useCallback((arg0, current) => {
    if (null != current) {
      const current2 = ref.current;
      const result = current2.set(arg0, current);
      if (ref2.current === arg0) {
        ref2.current = null;
        const obj2 = { ref: null, delay: null };
        const obj3 = { current };
        obj2.ref = obj3;
        obj2.delay = UserProfileGameWidgetConstants.WIDGET_FOCUS_DELAY_MS;
        const result1 = setAccessibilityFocus.setAccessibilityFocus(obj2);
      }
    } else {
      current = ref.current;
      current.delete(arg0);
    }
    if (closure_6) {
      type.current = current;
    }
  }, items1);
  const items2 = [handleDismissSuggestions];
  const callback = obj.useCallback(() => {
    handleDismissSuggestions();
    const obj = setAccessibilityFocus;
    const result = obj.setAccessibilityFocus({
      ref: type,
      delay: UserProfileGameWidgetConstants.WIDGET_FOCUS_DELAY_MS,
    });
  }, items2);
  const items3 = [memo];
  const callback1 = obj.useCallback((current) => {
    closure_10.current = current;
  }, []);
  onRemoveGame = obj.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((gameId) => gameId.gameId === closure_0);
    let gameId;
    if (memo[findIndexResult + 1] != null) {
      gameId = tmp3.gameId;
    }
    items = [gameId];
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
    }, userId(disableInteraction[7]).WIDGET_FOCUS_DELAY_MS);
  }, items3);
  type1 = undefined;
  if (flag) {
    if (handleDismissSuggestions(widget.type)) {
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
    let tmp16 = !tmp6;
    if (!tmp6) {
      let obj3 = { ref: type, widgetType: widget.type, disabled: Text(tmp2[14]).isGameLimitReached(widget) };
      tmp16 = type(registerCoverRef, obj3, "add-game");
      const TextResult1 = Text(tmp2[14]);
    }
    const items4 = [tmp16];
    const obj4 = { widget };
    items4[1] = type(tmp(tmp2[17]), obj4, "edit-options");
    const tmp15 = items4;
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
        const items5 = [type(tmp(tmp2[18]), obj7)];
        Text = Text(tmp2[19]).Text;
        const obj8 = { variant: "body-sm/medium", color: "text-muted", style: null, children: null };
        singleGameEmptyStateText = singleGameEmptyStateText.singleGameEmptyStateText;
        obj8.style = singleGameEmptyStateText;
        obj8.children = stringResult;
        items5[1] = type(Text, obj8);
        obj6.children = items5;
        const tmp27 = ref(coverWidth, obj6);
      }
    } else {
      const obj9 = {
        variant: "body-sm/medium",
        color: "text-muted",
        style: singleGameEmptyStateText.emptyState,
        children: stringResult,
      };
      const tmp26 = type(Text(tmp2[19]).Text, obj9);
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
        let tmp20 = isMeasured;
        if (isMeasured) {
          const obj10 = {
            games: memo,
            columns,
            renderCover(game) {
              const obj = {
                userId,
                game,
                coverWidth,
                disableInteraction,
                editableWidgetType: null,
                registerCoverRef: null,
                onRemoveGame: null,
              };
              type = undefined;
              if (flag) {
                type = widget.type;
              }
              obj.editableWidgetType = type;
              obj.registerCoverRef = registerCoverRef;
              obj.onRemoveGame = onRemoveGame;
              return React5(UserProfileWidgetGameCoverDefault, obj, game.gameId);
            },
          };
          tmp20 = type(tmp(tmp2[23]), obj10);
        }
      }
      const obj11 = {
        userId,
        widget,
        style: userId.cardStyle,
        disableInteraction,
        actionButtons: tmp15,
        children: null,
      };
      const obj12 = { ref, onLayout, children: tmp20 };
      const items6 = [type(coverWidth, obj12)];
      if (flag) {
        flag = !disableInteraction;
      }
      if (flag) {
        flag = shouldShowSuggestedGames.shouldShowSuggestions;
      }
      if (flag) {
        flag = isMeasured;
      }
      if (flag) {
        const obj13 = {
          widgetType: widget.type,
          addedGames: memo,
          containerWidth: width,
          onDismiss: callback,
          onFillWidget: callback1,
        };
        flag = type(tmp(tmp2[26]), obj13);
      }
      items6[1] = flag;
      obj11.children = items6;
      return ref(tmp(tmp2[25]), obj11);
    }
    let tmp22 = isMeasured;
    if (isMeasured) {
      const obj14 = {
        games: memo,
        renderRow(game) {
          const obj = {
            userId,
            game,
            coverWidth,
            disableInteraction,
            editableTagsWidgetType: type1,
            editableCommentWidgetType: type3,
            editableWidgetType: null,
            registerCoverRef: null,
            onRemoveGame: null,
          };
          type = undefined;
          if (flag) {
            type = widget.type;
          }
          obj.editableWidgetType = type;
          obj.registerCoverRef = registerCoverRef;
          obj.onRemoveGame = onRemoveGame;
          return React5(UserProfileGameDetailsRowDefault, obj, game.gameId);
        },
      };
      tmp22 = type(tmp(tmp2[21]), obj14);
    }
    tmp20 = tmp22;
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
  const displayableBoardWidgets = userId(isEditing[31]).useDisplayableBoardWidgets(userId, isEditing);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(isEditing[31]);
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
    const obj3 = {
      style: tmp.board,
      children: displayableBoardWidgets.map((widget) =>
        React5(WidgetRenderer, { userId, widget, cardStyle, isEditing }, widget.getUniqueKey()),
      ),
    };
    tmp4 = closure_8(View, obj3);
  }
  return tmp4;
}
export const WidgetSection = memoResult;
