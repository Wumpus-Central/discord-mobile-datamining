// === Module 15163: UserProfileWidgetsBoard ===

// Module 15163 (UserProfileWidgetsBoard)
import applyDefault from "apply" /* 12 */;
import nativeDefault from "native" /* 575 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6179 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7876 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7877 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12432 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15164 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 15174 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 15176 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 15193 */;
import noop from "module_19" /* 19 */;

require = fn;
function AddGameButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const obj = { ref, size: "sm", variant: "secondary", icon: jsx(ref(9677).PlusSmallIcon, { size: "sm", color: widgetType(575).colors.ICON_DEFAULT }), accessibilityLabel: null, disabled: null, onPress: null };
  const intl = ref(1113).intl;
  obj.accessibilityLabel = intl.string(ref(1113).t.E3l3Zx);
  obj.disabled = ref.disabled;
  obj.onPress = function onPress() {
    return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
  };
  return jsx(ref(8119).IconButton, { ref, size: "sm", variant: "secondary", icon: jsx(ref(9677).PlusSmallIcon, { size: "sm", color: widgetType(575).colors.ICON_DEFAULT }), accessibilityLabel: null, disabled: null, onPress: null });
}
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle, isEditing } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle, isEditing };
    let tmp3Result = jsx(UserProfileApplicationWidgetCardDefault, { userId, widget, cardStyle, isEditing });
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle, isEditing };
    tmp3Result = jsx(UserProfilePersonalWidgetCardDefault, { userId, widget, cardStyle, isEditing });
  } else {
    const obj = { userId, widget, cardStyle, isEditing };
    tmp3Result = <memoResult userId={userId} widget={widget} cardStyle={cardStyle} isEditing={isEditing} />;
  }
  return tmp3Result;
}
const View = fn(17).View;
const UserProfileSections = fn(8846).UserProfileSections;
const UserProfileWidgetConstants = fn(7874);
({ widgetSupportsComment: closure_6, widgetSupportsTags: metroImportDefault } = UserProfileWidgetConstants);
let jsx = fn(21).jsx;
const createStyles = fn(5170);
let obj = { board: { gap: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo(function WidgetSection(userId) {
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  if (flag === undefined) {
    flag = false;
  }
  c4 = undefined;
  let type2;
  const tmp3 = widget(disableInteraction[12])();
  ({ isMeasured, coverWidth: c4 } = tmp3);
  items = [widget.games];
  ({ ref, onLayout, columns } = tmp3);
  const memo = flag.useMemo(() => applyDefault.uniqBy(widget.games, "gameId"), items);
  const ref1 = flag.useRef(null);
  ref = flag.useRef(new Map());
  jsx = flag.useCallback((arg0, arg1) => {
    if (null != arg1) {
      const current2 = ref.current;
      const result = current2.set(arg0, arg1);
    } else {
      const current = ref.current;
      current.delete(arg0);
    }
  }, []);
  const items1 = [memo];
  const onRemoveGame = flag.useCallback((arg0) => {
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
        tmp2 = ref1;
      }
      const result = setAccessibilityFocus.setAccessibilityFocus({ ref: tmp2 });
    }, 100);
  }, items1);
  let type1;
  if (flag) {
    if (ref(widget.type)) {
      type1 = widget.type;
    }
  }
  type2 = undefined;
  if (flag) {
    if (ref1(widget.type)) {
      type2 = widget.type;
    }
  }
  let type = widget.type;
  if (userId(disableInteraction[15]).WidgetType.FAVORITE_GAMES !== type) {
    if (tmp11(tmp2[15]).WidgetType.CURRENT_GAMES !== type) {
      if (tmp11(tmp2[15]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
        if (tmp11(tmp2[15]).WidgetType.PLAYED_GAMES !== type) {
          return null;
        }
      }
      let tmp12 = isMeasured;
      if (isMeasured) {
        let obj = {
          games: memo,
          columns,
          renderCover(game) {
                  const obj = { userId, game, coverWidth, disableInteraction, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
                  let type;
                  if (flag) {
                    type = widget.type;
                  }
                  obj.editableWidgetType = type;
                  obj.registerCoverRef = registerCoverRef;
                  obj.onRemoveGame = onRemoveGame;
                  return jsx(UserProfileWidgetGameCoverDefault, { userId, game, coverWidth, disableInteraction, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null }, game.gameId);
                }
        };
        tmp12 = jsx(tmp(tmp2[18]), {
          games: memo,
          columns,
          renderCover(game) {
                  const obj = { userId, game, coverWidth, disableInteraction, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
                  let type;
                  if (flag) {
                    type = widget.type;
                  }
                  obj.editableWidgetType = type;
                  obj.registerCoverRef = registerCoverRef;
                  obj.onRemoveGame = onRemoveGame;
                  return jsx(UserProfileWidgetGameCoverDefault, { userId, game, coverWidth, disableInteraction, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null }, game.gameId);
                }
        });
      }
    }
    let obj2 = { userId, widget, style: userId.cardStyle, disableInteraction, actionButtons: null, children: null };
    let tmp17;
    if (flag) {
      const obj3 = { ref: ref1, widgetType: widget.type, disabled: tmp11(tmp2[21]).isGameLimitReached(widget) };
      const items2 = [tmp15(type1, obj3, "add-game"), ];
      const obj4 = { widget };
      items2[1] = tmp15(tmp(tmp2[22]), obj4, "edit-options");
      tmp17 = items2;
      const tmp11Result = tmp11(tmp2[21]);
    }
    obj2.actionButtons = tmp17;
    const obj5 = { ref, onLayout, children: tmp12 };
    obj2.children = <c4 ref={ref} onLayout={onLayout}>{tmp12}</c4>;
    return jsx(tmp(tmp2[20]), { userId, widget, style: userId.cardStyle, disableInteraction, actionButtons: null, children: null });
  }
  if (isMeasured) {
    const obj6 = {
      games: memo,
      renderRow(game) {
          const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
          let type;
          if (flag) {
            type = widget.type;
          }
          obj.editableWidgetType = type;
          obj.registerCoverRef = registerCoverRef;
          obj.onRemoveGame = onRemoveGame;
          return jsx(UserProfileGameDetailsRowDefault, { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null }, game.gameId);
        }
    };
    isMeasured = jsx(tmp(tmp2[16]), {
      games: memo,
      renderRow(game) {
          const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null };
          let type;
          if (flag) {
            type = widget.type;
          }
          obj.editableWidgetType = type;
          obj.registerCoverRef = registerCoverRef;
          obj.onRemoveGame = onRemoveGame;
          return jsx(UserProfileGameDetailsRowDefault, { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: null, registerCoverRef: null, onRemoveGame: null }, game.gameId);
        }
    });
  }
  tmp12 = isMeasured;
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
  const tmp = closure_9();
  const displayableBoardWidgets = userId(isEditing[27]).useDisplayableBoardWidgets(userId, isEditing);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(isEditing[27]);
  const trackUserProfileAction = userId(isEditing[7]).useUserProfileAnalyticsContext().trackUserProfileAction;
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
    const obj3 = { style: tmp.board, children: displayableBoardWidgets.map((widget) => <WidgetRenderer key={widget.getUniqueKey()} userId={userId} widget={widget} cardStyle={cardStyle} isEditing={isEditing} />) };
    tmp4 = <View style={tmp.board}>{displayableBoardWidgets.map((widget) => <WidgetRenderer key={widget.getUniqueKey()} userId={userId} widget={widget} cardStyle={cardStyle} isEditing={isEditing} />)}</View>;
  }
  return tmp4;
};
export const WidgetSection = memoResult;