// === Module 15173: UserProfileWidgetsBoard ===

// Module 15173 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import StringUtils from "StringUtils" /* 2155 */;
import Text_Text from "Text/Text" /* 5763 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7922 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7923 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9469 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9493 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12467 */;
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet" /* 15178 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15181 */;
import GameCoverImageDefault from "GameCoverImage" /* 15182 */;
import QuoteIcon from "QuoteIcon" /* 15183 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15185 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 15198 */;
import noop from "module_19" /* 19 */;

require = fn;
function AddGameButton(widgetType) {
  widgetType = widgetType.widgetType;
  const ref = noop.useRef(null);
  const obj = { ref, size: "sm", variant: "secondary", icon: closure_8(widgetType(9728).PlusSmallIcon, { size: "sm", color: ref(575).colors.ICON_DEFAULT }), accessibilityLabel: null, disabled: null, onPress: null };
  const intl = widgetType(1113).intl;
  obj.accessibilityLabel = intl.string(widgetType(1113).t.E3l3Zx);
  obj.disabled = widgetType.disabled;
  obj.onPress = function onPress() {
    return openUserProfileAddGameActionSheetDefault({ widgetType, returnFocusRef: ref });
  };
  return closure_8(widgetType(8173).IconButton, obj);
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
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserProfileSections = fn(8900).UserProfileSections;
const widgetSupportsTags = fn(7920).widgetSupportsTags;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const hitSlop = { top: 10, bottom: 10 };
const createStyles = fn(5143);
let obj = { board: { gap: nativeDefault.space.PX_16 }, favoriteRow: null, favoriteDetails: null, list: null, listRow: null, listDetails: null, comment: null, commentText: null, tags: null, tag: null, addTag: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj.favoriteRow = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.list = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj.listRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.listDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj8 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.comment = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.commentText = { flex: 1 };
let obj9 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.tags = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
const obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.addTag = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo(function WidgetTags(gameName) {
  ({ tags, gameId: require, editableTagsWidgetType } = gameName);
  const tmp = closure_12();
  dependencyMap = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = gameId(tag[10]).getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const obj2 = { tag, meta: widgetGameTagMetadata };
      items = [obj2];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 !== flatMapResult.length) {
    let obj = { style: tmp.tags, children: null };
    items = [
      flatMapResult.map((meta) => {
          meta = meta.meta;
          const obj = { style: tag.tag, children: null };
          items = [React5(meta.icon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED }), ];
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items[1] = React5(Text_Text.Text, { variant: "body-xs/medium", color: "text-muted", children: meta.getText() });
          obj.children = items;
          return React6(hasOwnProperty, obj, meta.tag);
        }),

    ];
    let tmp5 = null != editableTagsWidgetType;
    if (tmp5) {
      let obj2 = {
        style: tmp.addTag,
        onPress() {
              return openUserProfileAddTagActionSheetDefault({ widgetType: editableTagsWidgetType, gameId });
            },
        accessibilityRole: "button",
        hitSlop,
        accessibilityLabel: null,
        children: null
      };
      const intl = util.intl;
      const obj3 = { gameName: gameName.gameName };
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.uLUHj4, obj3);
      const obj4 = { variant: "body-xs/medium", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.fZSejy);
      obj2.children = closure_8(Text_Text.Text, obj4);
      tmp5 = closure_8(closure_4, obj2);
    }
    items[1] = tmp5;
    obj.children = items;
    let tmp3Result = closure_9(closure_5, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
let closure_14 = noop.memo(function FavoriteGameItem(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction, editableTagsWidgetType } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp5Result;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  const obj2 = { style: tmp.favoriteRow, children: null };
  const obj3 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj4 = {};
  tmp5 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp4);
  obj4.width = coverWidth;
  obj3.children = React5(GameCoverImageDefault, obj4);
  items = [React5(React4, obj3), ];
  const obj5 = { style: tmp.favoriteDetails, children: null };
  const tmp2Result = GameCoverImageDefault;
  const items1 = [
    React5(React4, {
      onPress() {
        let tmp;
        if (closure_0 != null) {
          tmp = closure_0();
        }
        return tmp;
      },
      disabled: null == tmp5Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: React5(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
    }),
  ,

  ];
  const obj6 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React5(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  let trimmed;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp8Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj7 = { style: tmp.comment, children: null };
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const items2 = [React5(QuoteIcon.QuoteIcon, obj8), ];
    const obj9 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = React5(Text_Text.Text, obj9);
    obj7.children = items2;
    tmp8Result = React6(hasOwnProperty, obj7);
  }
  items1[1] = tmp8Result;
  items1[2] = React5(closure_13, { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType });
  obj5.children = items1;
  items[1] = React6(hasOwnProperty, obj5);
  obj2.children = items;
  return React6(hasOwnProperty, obj2);
});
let closure_15 = noop.memo(function GameListRow(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction, editableTagsWidgetType } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp5Result;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  const obj2 = { style: tmp.listRow, children: null };
  const obj3 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj4 = {};
  tmp5 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp4);
  obj4.width = coverWidth;
  obj3.children = React5(GameCoverImageDefault, obj4);
  items = [React5(React4, obj3), ];
  const obj5 = { style: tmp.listDetails, children: null };
  const tmp2Result = GameCoverImageDefault;
  const items1 = [
    React5(React4, {
      onPress() {
        let tmp;
        if (closure_0 != null) {
          tmp = closure_0();
        }
        return tmp;
      },
      disabled: null == tmp5Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: React5(Text_Text.Text, { variant: "body-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
    React5(closure_13, { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType })
  ];
  obj5.children = items1;
  items[1] = React6(hasOwnProperty, obj5);
  obj2.children = items;
  return React6(hasOwnProperty, obj2);
});
let closure_16 = noop.memo(function GameGridCover(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp4Result;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  closure_0 = tmp4Result;
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp4Result,
    accessibilityRole: "button",
    accessibilityLabel: tmp3.gameName,
    children: null
  };
  const obj3 = {};
  tmp4 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp3);
  obj3.width = coverWidth;
  obj2.children = React5(GameCoverImageDefault, obj3);
  return React5(React4, obj2);
});
const memoResult = noop.memo(function WidgetSection(style) {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  let flag = style.isEditing;
  if (flag === undefined) {
    flag = false;
  }
  coverWidth = undefined;
  const tmp4 = widget(disableInteraction[21])();
  ({ isMeasured, coverWidth } = tmp4);
  items = [widget.games];
  ({ ref, onLayout, columns } = tmp4);
  const memo = coverWidth.useMemo(() => _modDef12.uniqBy(widget.games, "gameId"), items);
  let type1;
  if (flag) {
    if (widgetSupportsTags(widget.type)) {
      type1 = widget.type;
    }
  }
  const tmp = closure_12();
  const expandableItems = userId(disableInteraction[23]).useExpandableItems(memo, 2);
  const visibleItems = expandableItems.visibleItems;
  const type = widget.type;
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  if (userId(disableInteraction[24]).WidgetType.FAVORITE_GAMES === type) {
    if (isMeasured) {
      const obj2 = { userId, game: memo[0], coverWidth, disableInteraction, editableTagsWidgetType: type1 };
      isMeasured = closure_8(closure_14, obj2);
    }
    let tmp13Result = isMeasured;
  } else if (tmp8(tmp3[24]).WidgetType.CURRENT_GAMES === type) {
    const obj3 = { style: tmp.list, children: null };
    let mapped = isMeasured;
    if (isMeasured) {
      mapped = visibleItems.map((game) => React5(closure_15, { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1 }, game.gameId));
    }
    const obj4 = { children: null };
    obj3.children = mapped;
    const items1 = [closure_8(closure_5, obj3), ];
    const obj5 = { expanded, hiddenCount, onPress: toggleExpanded };
    items1[1] = closure_8(tmp8(tmp3[23]).WidgetViewMoreButton, obj5);
    obj4.children = items1;
    tmp13Result = closure_9(closure_10, obj4);
  } else {
    if (tmp8(tmp3[24]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (tmp8(tmp3[24]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    tmp13Result = isMeasured;
    if (isMeasured) {
      const obj6 = {
        games: memo,
        columns,
        renderCover(game) {
              return React5(closure_16, { userId, game, coverWidth, disableInteraction }, game.gameId);
            }
      };
      tmp13Result = closure_8(tmp2(tmp3[25]), obj6);
    }
  }
  const obj7 = { userId, widget, style: style.cardStyle, disableInteraction, actionButtons: null, children: null };
  let tmp22;
  const obj = userId(disableInteraction[23]);
  if (flag) {
    const obj8 = { widgetType: widget.type, disabled: tmp8(tmp3[27]).isGameLimitReached(widget) };
    const items2 = [closure_8(AddGameButton, obj8, "add-game"), ];
    const obj9 = { widget };
    items2[1] = closure_8(tmp2(tmp3[28]), obj9, "edit-options");
    tmp22 = items2;
    const tmp8Result = tmp8(tmp3[27]);
  }
  obj7.actionButtons = tmp22;
  obj7.children = closure_8(closure_5, { ref, onLayout, children: tmp13Result });
  return closure_8(widget(disableInteraction[26]), obj7);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  ({ cardStyle: importDefault, isEditing: dependencyMap } = userId);
  const tmp = closure_12();
  const displayableBoardWidgets = userId(15202).useDisplayableBoardWidgets(userId);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(15202);
  const trackUserProfileAction = userId(8907).useUserProfileAnalyticsContext().trackUserProfileAction;
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
    tmp4 = closure_8(closure_5, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;