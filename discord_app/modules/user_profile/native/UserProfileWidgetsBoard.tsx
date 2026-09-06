// === Module 8674: UserProfileWidgetsBoard ===

// Module 8674 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import StringUtils from "StringUtils" /* 1925 */;
import Text_Text from "Text/Text" /* 4556 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7630 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7633 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8658 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8675 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8920 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8923 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    let obj = { userId, widget, cardStyle };
    let tmp3Result = closure_1_10(UserProfileApplicationWidgetCardDefault, obj);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    obj = { userId, widget, cardStyle };
    tmp3Result = tmp3(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    obj = { userId, widget, cardStyle };
    tmp3Result = tmp3(memoResult, obj);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const UserProfileSections = fn(8183).UserProfileSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
fn(4560);
let obj = { board: null, coverPlaceholder: null, favoriteRow: null, favoriteDetails: null, favoriteCover: null, list: null, listRow: null, listCover: null, listDetails: null, comment: null, commentText: null, grid: null, gridCover: null, tags: null, tag: null, viewMore: null };
obj = { gap: nativeDefault.space.PX_16 };
obj.board = obj;
const createStyles = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.coverPlaceholder = createStyles;
obj.favoriteRow = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.favoriteCover = { aspectRatio: 0.75 };
let obj3 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.list = { gap: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16 };
obj.listRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.listCover = { aspectRatio: 0.75 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.listDetails = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj.comment = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.commentText = { flex: 1 };
let obj7 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj.gridCover = { aspectRatio: 0.75 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj.tags = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj9 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.viewMore = { marginTop: nativeDefault.space.PX_12 };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((arg0) => {
  ({ uri, style } = arg0);
  const tmp = closure_14();
  if (null != uri) {
    let obj = { source: null, style: null };
    obj = { uri };
    obj.source = obj;
    const items = [style, tmp.coverPlaceholder];
    obj.style = items;
    let tmp4 = closure_1_10(hasOwnProperty, obj);
  } else {
    obj = { style: null };
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
    let obj = closure_0(dependencyMap[11]);
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      obj = { tag, meta: widgetGameTagMetadata };
      const items = [obj];
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
          let obj = { style: closure_0.tag, children: null };
          obj = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          const items = [closure_2_10(meta.icon, obj), ];
          obj = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
          items[1] = closure_2_10(Text_Text.Text, obj);
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
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  let tmp5Result;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  obj = { style: tmp.favoriteRow, children: null };
  obj = {
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
  const obj1 = { uri: coverImageUrl, style: null };
  const items = [tmp.favoriteCover, { width: coverWidth }];
  obj1.style = items;
  obj.children = closure_1_10(closure_15, obj1);
  const items1 = [closure_1_10(timestampProducer, obj), ];
  const obj2 = { style: tmp.favoriteDetails, children: null };
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
    children: closure_1_10(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  let trimmed;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp8Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj4 = { style: tmp.comment, children: null };
    const obj5 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [tmp10(tmp6(8921).QuoteIcon, obj5), ];
    const obj6 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items3[1] = tmp10(tmp6(4556).Text, obj6);
    obj4.children = items3;
    tmp8Result = tmp8(tmp9, obj4);
  }
  items2[1] = tmp8Result;
  items2[2] = closure_1_10(closure_16, { tags: game.tags });
  obj2.children = items2;
  items1[1] = closure_1_11(React5, obj2);
  obj.children = items1;
  return closure_1_11(React5, obj);
});
let closure_18 = noop.memo((game) => {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  let tmp4Result;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  closure_0 = tmp4Result;
  obj = { style: tmp.listRow, children: null };
  obj = {
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
  const obj1 = { uri: coverImageUrl, style: null };
  const items = [tmp.listCover, { width: coverWidth }];
  obj1.style = items;
  obj.children = closure_1_10(closure_15, obj1);
  const items1 = [closure_1_10(timestampProducer, obj), ];
  const obj2 = { style: tmp.listDetails, children: null };
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
  obj2.children = items2;
  items1[1] = closure_1_11(React5, obj2);
  obj.children = items1;
  return closure_1_11(React5, obj);
});
let closure_19 = noop.memo((game) => {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = useGameNameAndCoverImageDefault(game.gameId);
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = userId;
  let tmp3Result;
  if (!disableInteraction) {
    tmp3Result = tmp3(obj);
  }
  closure_0 = tmp3Result;
  obj = {
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
  obj = { uri: coverImageUrl, style: null };
  const items = [tmp.gridCover, { width: coverWidth }];
  obj.style = items;
  obj.children = closure_1_10(closure_15, obj);
  return closure_1_10(timestampProducer, obj);
});
const memoResult = noop.memo((style) => {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_14();
  let obj = userId(disableInteraction[16]);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  [tmp6, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = _slicedToArray(noop.useState(0), 2);
  const result = (tmp8 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  c5 = result;
  const items1 = [widget.games];
  const memo = noop.useMemo(() => _modDef12.uniqBy(widget.games, "gameId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[18]).WidgetType.FAVORITE_GAMES === type) {
    let tmp33 = tmp8 > 0;
    if (tmp33) {
      obj = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp33 = closure_10(closure_17, obj);
    }
    let tmp13Result = tmp33;
  } else if (tmp2(tmp3[18]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    obj = { style: tmp.list, children: null };
    let mapped = tmp8 > 0;
    if (mapped) {
      mapped = substr.map((game) => closure_2_10(closure_18, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj.children = mapped;
    const items2 = [closure_10(closure_7, obj), ];
    if (memo.length <= 2) {
      const obj1 = { children: null };
      items2[1] = tmp23;
      obj1.children = items2;
      tmp13Result = tmp24(tmp25, obj1);
    } else {
      const obj2 = {
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
        const obj3 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj3);
      }
      const obj4 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      obj2.children = tmp26(tmp2(tmp3[12]).Text, obj4);
      tmp26(closure_6, obj2);
    }
    tmp24 = closure_11;
    tmp25 = closure_12;
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
    const obj5 = { style: tmp.grid, children: null };
    let mapped1 = tmp8 > 0;
    if (mapped1) {
      mapped1 = substr1.map((game) => closure_2_10(closure_19, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj5.children = mapped1;
    const items3 = [closure_10(closure_7, obj5), ];
    if (memo.length <= 6) {
      const obj6 = { children: null };
      items3[1] = tmp12;
      obj6.children = items3;
      tmp13Result = tmp13(tmp14, obj6);
    } else {
      const obj7 = {
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
        const obj8 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj8);
      }
      const obj9 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      obj7.children = tmp15(tmp2(tmp3[12]).Text, obj9);
      tmp15(closure_6, obj7);
    }
    tmp13 = closure_11;
    tmp14 = closure_12;
  }
  const obj10 = { style: style.cardStyle, title: null, trailingAction: null, children: null };
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  const tmp9Result = widget(disableInteraction[20]);
  obj10.title = userId(disableInteraction[21]).getWidgetTitle(widget);
  let tmp36Result = !stateFromStores;
  if (!stateFromStores) {
    tmp36Result = !disableInteraction;
  }
  if (tmp36Result) {
    const obj11 = { userId, widget };
    tmp36Result = tmp36(tmp9(tmp3[22]), obj11);
  }
  obj10.trailingAction = tmp36Result;
  obj10.children = closure_10(closure_7, {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  });
  return closure_10(tmp9Result, obj10);
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
  let obj = userId(9032);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  const tmp = closure_14();
  const trackUserProfileAction = userId(8190).useUserProfileAnalyticsContext().trackUserProfileAction;
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
    obj = { style: tmp.board, children: displayableBoardWidgets.map((widget) => closure_2_10(WidgetRenderer, { userId, widget, cardStyle }, widget.getUniqueKey())) };
    tmp4 = closure_10(closure_7, obj);
  }
  return tmp4;
};
export const WidgetSection = memoResult;