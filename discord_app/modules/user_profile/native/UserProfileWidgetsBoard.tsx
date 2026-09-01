// === Module 8800: WidgetRenderer ===

// Module 8800 (WidgetRenderer)
import ThemesDefault from "Themes" /* 712 */;
import createDefaultFieldsSection from "createDefaultFieldsSection" /* 7375 */;
import toSubmission from "toSubmission" /* 7378 */;
import PersonalWidgetTextDefault from "PersonalWidgetText" /* 8785 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8801 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 12663 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12666 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY" /* 8556 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof toSubmission.ApplicationWidget) {
    let obj = { userId: null, widget: null, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    obj[2] = cardStyle;
    let tmp3Result = callback2(UserProfileApplicationWidgetCardDefault, obj);
  } else if (widget instanceof createDefaultFieldsSection.UserProfilePersonalWidget) {
    obj = { userId: null, widget: null, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    obj[2] = cardStyle;
    tmp3Result = tmp3(PersonalWidgetTextDefault, obj);
  } else {
    obj = { userId: null, widget: null, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    obj[2] = cardStyle;
    tmp3Result = tmp3(closure_20, obj);
  }
  return tmp3Result;
}
let c4 = importAllResult;
({ Image: c5, Pressable: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = { top: 8, bottom: 8, left: 8, right: 8 };
let obj = { board: null, coverPlaceholder: null, favoriteRow: null, favoriteDetails: null, favoriteCover: null, list: null, listRow: null, listCover: null, listDetails: null, comment: null, commentText: null, grid: null, gridCover: null, tags: null, tag: null, viewMore: null };
obj = { gap: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
let obj2 = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
obj[3] = { flex: 1, gap: ThemesDefault.space.PX_8 };
obj[4] = { aspectRatio: 0.75 };
let obj3 = { flex: 1, gap: ThemesDefault.space.PX_8 };
obj[5] = { gap: ThemesDefault.space.PX_16 };
let obj4 = { gap: ThemesDefault.space.PX_16 };
obj[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
obj[7] = { aspectRatio: 0.75 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
obj[8] = { flex: 1, gap: ThemesDefault.space.PX_8 };
let obj6 = { flex: 1, gap: ThemesDefault.space.PX_8 };
obj[9] = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_4 };
obj[10] = { flex: 1 };
let obj7 = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_4 };
obj[11] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16 };
obj[12] = { aspectRatio: 0.75 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16 };
obj[13] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
let obj9 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
obj[14] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj10 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[15] = { marginTop: ThemesDefault.space.PX_12 };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((arg0) => {
  ({ uri, style } = arg0);
  const tmp = callback4();
  if (null != uri) {
    let obj = { source: null, style: null };
    obj = { uri: null };
    obj[0] = uri;
    obj[0] = obj;
    const items = [style, tmp.coverPlaceholder];
    obj[1] = items;
    let tmp4 = callback2(closure_5, obj);
  } else {
    obj = { style: null };
    const items1 = [style, tmp.coverPlaceholder];
    obj[0] = items1;
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
});
let closure_16 = importAllResult.memo((tags) => {
  tags = tags.tags;
  closure_0 = undefined;
  const tmp = callback4();
  closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((arg0) => {
    let obj = lib(table[11]);
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(arg0);
    if (null != widgetGameTagMetadata) {
      obj = { tag: null, meta: null };
      obj[0] = arg0;
      obj[1] = widgetGameTagMetadata;
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  let tmp2 = null;
  if (0 !== flatMapResult.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.tags;
    obj[1] = flatMapResult.map((meta) => {
      meta = meta.meta;
      let obj = { style: lib.tag, children: null };
      obj = { size: "xs", color: closure_1_1(closure_1_2[7]).colors.TEXT_MUTED };
      const items = [closure_1_10(meta.icon, obj), ];
      obj = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
      items[1] = closure_1_10(lib(closure_1_2[12]).Text, obj);
      obj[1] = items;
      return closure_1_11(closure_1_7, obj, meta.tag);
    });
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
});
let closure_17 = importAllResult.memo((game) => {
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = importDefault;
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  obj[2] = _require(8812).GameProfileSources.UserProfile;
  obj[3] = userId;
  let tmp5Result;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  _require = tmp5Result;
  obj = { style: tmp.favoriteRow, children: null };
  obj = {
    onPress() {
      let tmp;
      if (callback != null) {
        tmp = callback();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(closure_15, { uri: coverImageUrl, style: items })
  };
  items = [tmp.favoriteCover, { width: coverWidth }];
  const items1 = [callback2(closure_6, obj), ];
  obj1 = { style: tmp.favoriteDetails, children: null };
  tmp5 = useOpenGameProfileModalDefault;
  const items2 = [
    callback2(closure_6, {
      onPress() {
        let tmp;
        if (callback != null) {
          tmp = callback();
        }
        return tmp;
      },
      disabled: null == tmp5Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: callback2(_require(4474).Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
    }),
  ,

  ];
  const obj2 = {
    onPress() {
      let tmp;
      if (callback != null) {
        tmp = callback();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(_require(4474).Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  let trimmed;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  const isNullOrEmptyResult = _require(1902).isNullOrEmpty(trimmed);
  let tmp8Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.comment;
    const obj4 = { size: "xxs", color: null };
    obj4[1] = ThemesDefault.colors.TEXT_MUTED;
    const items3 = [tmp10(tmp6(12664).QuoteIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: null, children: null };
    obj5[3] = tmp.commentText;
    obj5[4] = game.comment;
    items3[1] = tmp10(tmp6(4474).Text, obj5);
    obj3[1] = items3;
    tmp8Result = tmp8(tmp9, obj3);
  }
  items2[1] = tmp8Result;
  items2[2] = callback2(closure_16, { tags: game.tags });
  obj1[1] = items2;
  items1[1] = closure_11(closure_7, obj1);
  obj[1] = items1;
  return closure_11(closure_7, obj);
});
let closure_18 = importAllResult.memo((game) => {
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  obj[2] = _require(8812).GameProfileSources.UserProfile;
  obj[3] = userId;
  let tmp4Result;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  _require = tmp4Result;
  obj = { style: tmp.listRow, children: null };
  obj = {
    onPress() {
      let tmp;
      if (callback != null) {
        tmp = callback();
      }
      return tmp;
    },
    disabled: null == tmp4Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(closure_15, { uri: coverImageUrl, style: items })
  };
  items = [tmp.listCover, { width: coverWidth }];
  const items1 = [callback2(closure_6, obj), ];
  obj1 = { style: tmp.listDetails, children: null };
  tmp4 = useOpenGameProfileModalDefault;
  const tmp5 = _require;
  const items2 = [
    callback2(closure_6, {
      onPress() {
        let tmp;
        if (callback != null) {
          tmp = callback();
        }
        return tmp;
      },
      disabled: null == tmp4Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: callback2(_require(4474).Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
    callback2(closure_16, { tags: game.tags })
  ];
  obj1[1] = items2;
  items1[1] = callback3(closure_7, obj1);
  obj[1] = items1;
  return callback3(closure_7, obj);
});
let closure_19 = importAllResult.memo((game) => {
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = useGameNameAndCoverImageDefault(game.gameId);
  obj[2] = _require(8812).GameProfileSources.UserProfile;
  obj[3] = userId;
  let tmp3Result;
  if (!disableInteraction) {
    tmp3Result = tmp3(obj);
  }
  _require = tmp3Result;
  obj = {
    onPress() {
      let tmp;
      if (callback != null) {
        tmp = callback();
      }
      return tmp;
    },
    disabled: null == tmp3Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(closure_15, { uri: coverImageUrl, style: items })
  };
  items = [tmp.gridCover, { width: coverWidth }];
  return callback2(closure_6, obj);
});
const memoResult = importAllResult.memo((style) => {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  let callback;
  c5 = undefined;
  const tmp = callback4();
  let obj = userId(disableInteraction[16]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getId() === userId);
  [tmp6, c3] = callback(undefined.useState(false), 2);
  const tmp5 = callback(undefined.useState(false), 2);
  [tmp8, c4] = callback(undefined.useState(0), 2);
  const result = (tmp8 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  c5 = result;
  const items1 = [widget.games];
  const memo = importAllResult.useMemo(() => widget(disableInteraction[17]).uniqBy(widget.games, "gameId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[18]).WidgetType.FAVORITE_GAMES === type) {
    let tmp33 = tmp8 > 0;
    if (tmp33) {
      obj = { userId: null, game: null, coverWidth: null, disableInteraction: null };
      obj[0] = userId;
      obj[1] = memo[0];
      obj[2] = result;
      obj[3] = disableInteraction;
      tmp33 = callback2(closure_17, obj);
    }
    let tmp13Result = tmp33;
  } else if (tmp2(tmp3[18]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.list;
    let mapped = tmp8 > 0;
    if (mapped) {
      mapped = substr.map((game) => closure_1_10(closure_1_18, { userId, game, coverWidth: c5, disableInteraction }, game.gameId));
    }
    obj[1] = mapped;
    const items2 = [callback2(closure_7, obj), ];
    if (memo.length <= 2) {
      obj1 = { children: null };
      items2[1] = tmp23;
      obj1[0] = items2;
      tmp13Result = tmp24(tmp25, obj1);
    } else {
      const obj2 = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", children: null };
      obj2[0] = tmp.viewMore;
      obj2[1] = closure_13;
      obj2[2] = function onPress() {
        return _undefined((arg0) => !arg0);
      };
      const intl2 = tmp2(tmp3[19]).intl;
      if (tmp6) {
        let stringResult = intl2.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj3 = { numberOfItems: null };
        obj3[0] = memo.length - 2;
        stringResult = intl2.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj3);
      }
      const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
      obj4[2] = stringResult;
      obj2[4] = tmp26(tmp2(tmp3[12]).Text, obj4);
      tmp26(closure_6, obj2);
      const tmp29 = closure_6;
    }
    tmp24 = closure_11;
    tmp25 = closure_12;
    const tmp27 = closure_7;
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
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.grid;
    let mapped1 = tmp8 > 0;
    if (mapped1) {
      mapped1 = substr1.map((game) => closure_1_10(closure_1_19, { userId, game, coverWidth: c5, disableInteraction }, game.gameId));
    }
    obj5[1] = mapped1;
    const items3 = [callback2(closure_7, obj5), ];
    if (memo.length <= 6) {
      const obj6 = { children: null };
      items3[1] = tmp12;
      obj6[0] = items3;
      tmp13Result = tmp13(tmp14, obj6);
    } else {
      const obj7 = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", children: null };
      obj7[0] = tmp.viewMore;
      obj7[1] = closure_13;
      obj7[2] = function onPress() {
        return _undefined((arg0) => !arg0);
      };
      const intl = tmp2(tmp3[19]).intl;
      if (tmp6) {
        let stringResult1 = intl.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj8 = { numberOfItems: null };
        obj8[0] = memo.length - 6;
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj8);
      }
      const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
      obj9[2] = stringResult1;
      obj7[4] = tmp15(tmp2(tmp3[12]).Text, obj9);
      tmp15(closure_6, obj7);
      const tmp18 = closure_6;
    }
    tmp13 = closure_11;
    tmp14 = closure_12;
    const tmp16 = closure_7;
  }
  const obj10 = { style: style.cardStyle, title: null, trailingAction: null, children: null };
  const tmp7 = callback(undefined.useState(0), 2);
  const tmp9Result = widget(disableInteraction[20]);
  obj10[1] = userId(disableInteraction[21]).getWidgetTitle(widget);
  let tmp36Result = !stateFromStores;
  if (!stateFromStores) {
    tmp36Result = !disableInteraction;
  }
  if (tmp36Result) {
    const obj11 = { userId: null, widget: null };
    obj11[0] = userId;
    obj11[1] = widget;
    tmp36Result = tmp36(tmp9(tmp3[22]), obj11);
  }
  obj10[2] = tmp36Result;
  obj10[3] = callback2(closure_7, {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  });
  return callback2(tmp9Result, obj10);
});
let obj11 = { marginTop: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId;
  flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let cardStyle = userId.cardStyle;
  let obj = flag(trackUserProfileAction[27]);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  cardStyle = tmp2;
  trackUserProfileAction = undefined;
  closure_3 = undefined;
  const tmp = callback4();
  trackUserProfileAction = flag(trackUserProfileAction[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  closure_3 = importAllResult.useRef(false);
  const items = [flag, displayableBoardWidgets.length > 0, trackUserProfileAction];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      let tmp2 = closure_1;
      if (closure_1) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: null };
        obj[1] = closure_1_9.WIDGETS;
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
  let tmp4 = null;
  if (0 !== displayableBoardWidgets.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.board;
    obj[1] = displayableBoardWidgets.map((getUniqueKey) => closure_1_10(closure_1_21, { userId: flag, widget: getUniqueKey, cardStyle: closure_1 }, getUniqueKey.getUniqueKey()));
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
};
export const WidgetSection = memoResult;