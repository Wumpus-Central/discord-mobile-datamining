// === Module 8119: UserProfileWidgetsBoard ===

// Module 8119 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import StringUtils from "StringUtils" /* 2010 */;
import Text_Text from "Text/Text" /* 4825 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7039 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7042 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8110 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8120 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8131 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8376 */;
import QuoteIcon from "QuoteIcon" /* 8377 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8379 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle };
    let tmp3Result = closure_1_10(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle };
    tmp3Result = closure_1_10(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle };
    tmp3Result = closure_1_10(memoResult, obj);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const UserProfileSections = fn(7621).UserProfileSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(4829);
let obj = { board: { gap: nativeDefault.space.PX_16 }, coverPlaceholder: null, favoriteRow: null, favoriteDetails: null, favoriteCover: null, list: null, listRow: null, listCover: null, listDetails: null, comment: null, commentText: null, grid: null, gridCover: null, tags: null, tag: null, viewMore: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj.coverPlaceholder = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.favoriteRow = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.favoriteCover = { aspectRatio: 0.75 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.list = { gap: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_16 };
obj.listRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.listCover = { aspectRatio: 0.75 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.listDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj9 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.comment = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.commentText = { flex: 1 };
let obj10 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj.gridCover = { aspectRatio: 0.75 };
let obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj.tags = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.viewMore = { marginTop: nativeDefault.space.PX_12 };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((arg0) => {
  ({ uri, style } = arg0);
  const tmp = closure_14();
  if (null != uri) {
    const obj2 = { source: null, style: null };
    const obj3 = { uri };
    obj2.source = obj3;
    const items = [style, tmp.coverPlaceholder];
    obj2.style = items;
    let tmp4 = closure_1_10(hasOwnProperty, obj2);
  } else {
    const obj = { style: null };
    const items1 = [style, tmp.coverPlaceholder];
    obj.style = items1;
    tmp4 = closure_1_10(React5, obj);
  }
  return tmp4;
});
let closure_16 = noop.memo((tags) => {
  tags = tags.tags;
  const tmp = closure_14();
  closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = closure_0(dependencyMap[11]).getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const obj2 = { tag, meta: widgetGameTagMetadata };
      const items = [obj2];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  let tmp2 = null;
  if (0 !== flatMapResult.length) {
    let obj = {
      style: tmp.tags,
      children: flatMapResult.map((meta) => {
          meta = meta.meta;
          const obj = { style: closure_0.tag, children: null };
          const items = [closure_2_10(meta.icon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED }), ];
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items[1] = closure_2_10(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: meta.getText() });
          obj.children = items;
          return closure_2_11(React5, obj, meta.tag);
        })
    };
    tmp2 = closure_10(closure_7, obj);
  }
  return tmp2;
});
let closure_17 = noop.memo((game) => {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
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
  const obj4 = { uri: coverImageUrl, style: null };
  const items = [tmp.favoriteCover, { width: coverWidth }];
  obj4.style = items;
  obj3.children = closure_1_10(closure_15, obj4);
  const items1 = [closure_1_10(timestampProducer, obj3), ];
  const obj5 = { style: tmp.favoriteDetails, children: null };
  tmp5 = useOpenGameProfileModalDefault;
  const items2 = [
    closure_1_10(timestampProducer, {
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
      children: closure_1_10(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
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
    children: closure_1_10(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
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
    const items3 = [closure_1_10(QuoteIcon.QuoteIcon, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items3[1] = closure_1_10(Text_Text.Text, obj9);
    obj7.children = items3;
    tmp8Result = closure_1_11(React5, obj7);
  }
  items2[1] = tmp8Result;
  items2[2] = closure_1_10(closure_16, { tags: game.tags });
  obj5.children = items2;
  items1[1] = closure_1_11(React5, obj5);
  obj2.children = items1;
  return closure_1_11(React5, obj2);
});
let closure_18 = noop.memo((game) => {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  let tmp4Result;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  closure_0 = tmp4Result;
  const obj2 = { style: tmp.listRow, children: null };
  const obj3 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp4Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj4 = { uri: coverImageUrl, style: null };
  const items = [tmp.listCover, { width: coverWidth }];
  obj4.style = items;
  obj3.children = closure_1_10(closure_15, obj4);
  const items1 = [closure_1_10(timestampProducer, obj3), ];
  const obj5 = { style: tmp.listDetails, children: null };
  tmp4 = useOpenGameProfileModalDefault;
  const items2 = [
    closure_1_10(timestampProducer, {
      onPress() {
        let tmp;
        if (closure_0 != null) {
          tmp = closure_0();
        }
        return tmp;
      },
      disabled: null == tmp4Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: closure_1_10(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
    closure_1_10(closure_16, { tags: game.tags })
  ];
  obj5.children = items2;
  items1[1] = closure_1_11(React5, obj5);
  obj2.children = items1;
  return closure_1_11(React5, obj2);
});
let closure_19 = noop.memo((game) => {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  let tmp3Result;
  if (!disableInteraction) {
    tmp3Result = tmp3(obj);
  }
  closure_0 = tmp3Result;
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp3Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj3 = { uri: coverImageUrl, style: null };
  const items = [tmp.gridCover, { width: coverWidth }];
  obj3.style = items;
  obj2.children = closure_1_10(closure_15, obj3);
  return closure_1_10(timestampProducer, obj2);
});
const memoResult = noop.memo((style) => {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_14();
  const items = [AuthenticationStore];
  const stateFromStores = userId(disableInteraction[16]).useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  const obj = userId(disableInteraction[16]);
  [tmp6, c3] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = noop.useState(0);
  const result = (tmp8 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  c5 = result;
  const items1 = [widget.games];
  const memo = noop.useMemo(() => _modDef12.uniqBy(widget.games, "gameId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[18]).WidgetType.FAVORITE_GAMES === type) {
    let tmp33 = tmp8 > 0;
    if (tmp33) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp33 = closure_10(closure_17, obj2);
    }
    let tmp13Result = tmp33;
  } else if (tmp2(tmp3[18]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: null };
    let mapped = tmp8 > 0;
    if (mapped) {
      mapped = substr.map((game) => closure_2_10(closure_18, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj3.children = mapped;
    const items2 = [closure_10(closure_7, obj3), ];
    if (memo.length <= 2) {
      const obj4 = { children: null };
      items2[1] = tmp23;
      obj4.children = items2;
      tmp13Result = closure_11(closure_12, obj4);
    } else {
      const obj5 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: null
      };
      const intl2 = tmp2(tmp3[19]).intl;
      if (tmp6) {
        let stringResult = intl2.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj6 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj6);
      }
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      obj5.children = closure_10(tmp2(tmp3[12]).Text, obj7);
      closure_10(closure_6, obj5);
    }
  } else {
    if (tmp2(tmp3[18]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (tmp2(tmp3[18]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let substr1 = memo;
    if (!tmp6) {
      substr1 = memo.slice(0, 6);
    }
    const obj8 = { style: tmp.grid, children: null };
    let mapped1 = tmp8 > 0;
    if (mapped1) {
      mapped1 = substr1.map((game) => closure_2_10(closure_19, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj8.children = mapped1;
    const items3 = [closure_10(closure_7, obj8), ];
    if (memo.length <= 6) {
      const obj9 = { children: null };
      items3[1] = tmp12;
      obj9.children = items3;
      tmp13Result = closure_11(closure_12, obj9);
    } else {
      const obj10 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: null
      };
      const intl = tmp2(tmp3[19]).intl;
      if (tmp6) {
        let stringResult1 = intl.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj11 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj11);
      }
      const obj12 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      obj10.children = closure_10(tmp2(tmp3[12]).Text, obj12);
      closure_10(closure_6, obj10);
    }
  }
  const obj13 = { style: style.cardStyle, title: null, trailingAction: null, children: null };
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  const tmp9Result = widget(disableInteraction[20]);
  obj13.title = userId(disableInteraction[21]).getWidgetTitle(widget);
  let tmp36Result = !stateFromStores;
  if (!stateFromStores) {
    tmp36Result = !disableInteraction;
  }
  if (tmp36Result) {
    const obj14 = { userId, widget };
    tmp36Result = closure_10(tmp9(tmp3[22]), obj14);
  }
  obj13.trailingAction = tmp36Result;
  obj13.children = closure_10(closure_7, {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  });
  return closure_10(tmp9Result, obj13);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  const tmp = closure_14();
  const displayableBoardWidgets = userId(12440).useDisplayableBoardWidgets(userId);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(12440);
  const trackUserProfileAction = userId(7628).useUserProfileAnalyticsContext().trackUserProfileAction;
  closure_129_2 = trackUserProfileAction;
  closure_129_3 = noop.useRef(false);
  const items = [flag, displayableBoardWidgets.length > 0, trackUserProfileAction];
  const effect = noop.useEffect(() => {
    if (userId) {
      let tmp2 = cardStyle;
      if (cardStyle) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        dependencyMap(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
  let tmp4 = null;
  if (0 !== displayableBoardWidgets.length) {
    const obj3 = { style: tmp.board, children: displayableBoardWidgets.map((widget) => closure_2_10(WidgetRenderer, { userId, widget, cardStyle }, widget.getUniqueKey())) };
    tmp4 = closure_10(closure_7, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;