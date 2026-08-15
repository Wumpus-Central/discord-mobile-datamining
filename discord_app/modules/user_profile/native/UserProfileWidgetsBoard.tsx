// discord_app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "WidgetType";
import get_ActivityIndicator from "useIsMobileVisualRefreshExperimentEnabled";
import fetchFingerprint from "fetchFingerprint";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "Divider";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { isNullOrEmpty } from "../../../utils/StringUtils.tsx";
import { GameProfileEmbedAction } from "../../game_profile/GameProfileAnalyticUtils.tsx";
import { useOpenGameProfileModal } from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import { useGameNameAndCoverImage } from "../../games/hooks/useGameNameAndCoverImage.tsx";
import { toSubmission } from "../UserProfileApplicationWidgetTypes.tsx";
import { isFieldEmpty } from "../UserProfilePersonalWidget.tsx";
import { UserProfileApplicationWidgetCard } from "UserProfileApplicationWidgetCard.tsx";
import { PersonalWidgetText } from "UserProfilePersonalWidgetCard.tsx";

let c10;
let c5;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function WidgetRenderer(isFirstWidget) {
  let cardStyle;
  let userId;
  let widget;
  ({ userId, widget, cardStyle } = isFirstWidget);
  if (widget instanceof toSubmission.ApplicationWidget) {
    let obj = { userId: null, widget: null, cardStyle: null, isFirstWidget: null };
    obj[0] = userId;
    obj[1] = widget;
    obj[2] = cardStyle;
    obj[3] = isFirstWidget.isFirstWidget;
    let tmp3Result = callback2(UserProfileApplicationWidgetCard, obj);
  } else if (widget instanceof isFieldEmpty.UserProfilePersonalWidget) {
    obj = { userId: null, widget: null, cardStyle: null };
    obj[0] = userId;
    obj[1] = widget;
    obj[2] = cardStyle;
    tmp3Result = tmp3(PersonalWidgetText, obj);
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
obj = { gap: require("Themes").space.PX_16 };
obj[0] = obj;
createCacheKey = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", gap: require("Themes").space.PX_12 };
let obj2 = { flexDirection: "row", gap: require("Themes").space.PX_12 };
obj[3] = { flex: 1, gap: require("Themes").space.PX_8 };
obj[4] = { aspectRatio: 0.75 };
let obj3 = { flex: 1, gap: require("Themes").space.PX_8 };
obj[5] = { gap: require("Themes").space.PX_16 };
let obj4 = { gap: require("Themes").space.PX_16 };
obj[6] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
obj[7] = { aspectRatio: 0.75 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
obj[8] = { flex: 1, gap: require("Themes").space.PX_8 };
let obj6 = { flex: 1, gap: require("Themes").space.PX_8 };
obj[9] = { flexDirection: "row", alignItems: "flex-start", gap: require("Themes").space.PX_4 };
obj[10] = { flex: 1 };
let obj7 = { flexDirection: "row", alignItems: "flex-start", gap: require("Themes").space.PX_4 };
obj[11] = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_16 };
obj[12] = { aspectRatio: 0.75 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_16 };
obj[13] = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_4 };
let obj9 = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_4 };
obj[14] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
let obj10 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
obj[15] = { marginTop: require("Themes").space.PX_12 };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((arg0) => {
  let style;
  let uri;
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
  let c0;
  const tmp = callback4();
  c0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((arg0) => {
    let obj = _undefined(table[11]);
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
      let obj = { style: _undefined.tag, children: null };
      obj = { size: "xs", color: outer1_1(outer1_2[7]).colors.TEXT_MUTED };
      const items = [outer1_10(meta.icon, obj), ];
      obj = { variant: "text-xs/medium", color: "text-muted", children: null };
      obj[2] = meta.getText();
      items[1] = outer1_10(_undefined(outer1_2[12]).Text, obj);
      obj[1] = items;
      return outer1_11(outer1_7, obj, meta.tag);
    });
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
});
let closure_17 = importAllResult.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let userId;
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImage(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = importDefault;
  const tmp4 = useGameNameAndCoverImage(game.gameId);
  obj[2] = _GameProfileEmbedAction.GameProfileSources.UserProfile;
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
      if (_undefined != null) {
        tmp = _undefined();
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
  const obj1 = { style: tmp.favoriteDetails, children: null };
  tmp5 = useOpenGameProfileModal;
  const items2 = [
    callback2(closure_6, {
      onPress() {
        let tmp;
        if (_undefined != null) {
          tmp = _undefined();
        }
        return tmp;
      },
      disabled: null == tmp5Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: callback2(_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
    }),
  ,

  ];
  const obj2 = {
    onPress() {
      let tmp;
      if (_undefined != null) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  let trimmed;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  const isNullOrEmptyResult = _isNullOrEmpty.isNullOrEmpty(trimmed);
  let tmp8Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.comment;
    const obj4 = { size: "xxs", color: null };
    obj4[1] = tmp2(712).colors.TEXT_MUTED;
    const items3 = [tmp10(tmp6(12184).QuoteIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: null, children: null };
    obj5[3] = tmp.commentText;
    obj5[4] = game.comment;
    items3[1] = tmp10(tmp6(4734).Text, obj5);
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
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let userId;
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImage(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp3 = useGameNameAndCoverImage(game.gameId);
  obj[2] = _GameProfileEmbedAction.GameProfileSources.UserProfile;
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
      if (_undefined != null) {
        tmp = _undefined();
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
  const obj1 = { style: tmp.listDetails, children: null };
  tmp4 = useOpenGameProfileModal;
  const tmp5 = _require;
  const items2 = [
    callback2(closure_6, {
      onPress() {
        let tmp;
        if (_undefined != null) {
          tmp = _undefined();
        }
        return tmp;
      },
      disabled: null == tmp4Result,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: callback2(_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
    callback2(closure_16, { tags: game.tags })
  ];
  obj1[1] = items2;
  items1[1] = callback3(closure_7, obj1);
  obj[1] = items1;
  return callback3(closure_7, obj);
});
let closure_19 = importAllResult.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let userId;
  game = game.game;
  let _require;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ coverImageUrl, gameName } = useGameNameAndCoverImage(game.gameId));
  let obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: null, sourceUserId: null, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp2 = useGameNameAndCoverImage(game.gameId);
  obj[2] = _GameProfileEmbedAction.GameProfileSources.UserProfile;
  obj[3] = userId;
  let tmp3Result;
  if (!disableInteraction) {
    tmp3Result = tmp3(obj);
  }
  _require = tmp3Result;
  obj = {
    onPress() {
      let tmp;
      if (_undefined != null) {
        tmp = _undefined();
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
  let c3;
  let c4;
  let tmp10;
  let tmp8;
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  let callback;
  let c5;
  const tmp = callback4();
  let obj = userId(disableInteraction[16]);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getId() === userId);
  const tmp6 = widget(disableInteraction[17])("UserProfileWidgetsBoard");
  [tmp8, c3] = callback(undefined.useState(false), 2);
  const tmp7 = callback(undefined.useState(false), 2);
  [tmp10, c4] = callback(undefined.useState(0), 2);
  const result = (tmp10 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  c5 = result;
  const items1 = [widget.games];
  const memo = importAllResult.useMemo(() => widget(disableInteraction[18]).uniqBy(widget.games, "gameId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[19]).WidgetType.FAVORITE_GAMES === type) {
    let tmp34 = tmp10 > 0;
    if (tmp34) {
      obj = { userId: null, game: null, coverWidth: null, disableInteraction: null };
      obj[0] = userId;
      obj[1] = memo[0];
      obj[2] = result;
      obj[3] = disableInteraction;
      tmp34 = callback2(closure_17, obj);
    }
    let tmp14Result = tmp34;
  } else if (tmp2(tmp3[19]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp8) {
      substr = memo.slice(0, 2);
    }
    obj = { style: null, children: null };
    obj[0] = tmp.list;
    let mapped = tmp10 > 0;
    if (mapped) {
      mapped = substr.map((game) => outer1_10(outer1_18, { userId, game, coverWidth: c5, disableInteraction }, game.gameId));
    }
    obj[1] = mapped;
    const items2 = [callback2(closure_7, obj), ];
    if (memo.length <= 2) {
      const obj1 = { children: null };
      items2[1] = tmp24;
      obj1[0] = items2;
      tmp14Result = tmp25(tmp26, obj1);
    } else {
      const obj2 = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", children: null };
      obj2[0] = tmp.viewMore;
      obj2[1] = closure_13;
      obj2[2] = function onPress() {
        return _undefined((arg0) => !arg0);
      };
      let str2 = "text-sm/semibold";
      if (tmp6) {
        str2 = "text-sm/medium";
      }
      let obj3 = { variant: null, color: "text-muted", children: null };
      obj3[0] = str2;
      const intl2 = tmp2(tmp3[20]).intl;
      if (tmp8) {
        let stringResult = intl2.string(tmp2(tmp3[20]).t["6MwJo/"]);
      } else {
        const obj4 = { numberOfItems: null };
        obj4[0] = memo.length - 2;
        stringResult = intl2.formatToPlainString(tmp2(tmp3[20]).t.zr0Y5R, obj4);
      }
      obj3[2] = stringResult;
      obj3 = tmp27(tmp2(tmp3[12]).Text, obj3);
      obj2[4] = obj3;
      tmp27(closure_6, obj2);
      const tmp30 = closure_6;
    }
    tmp25 = closure_11;
    tmp26 = closure_12;
    const tmp28 = closure_7;
  } else {
    if (tmp2(tmp3[19]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (tmp2(tmp3[19]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let substr1 = memo;
    if (!tmp8) {
      substr1 = memo.slice(0, 6);
    }
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.grid;
    let mapped1 = tmp10 > 0;
    if (mapped1) {
      mapped1 = substr1.map((game) => outer1_10(outer1_19, { userId, game, coverWidth: c5, disableInteraction }, game.gameId));
    }
    obj5[1] = mapped1;
    const items3 = [callback2(closure_7, obj5), ];
    if (memo.length <= 6) {
      const obj6 = { children: null };
      items3[1] = tmp13;
      obj6[0] = items3;
      tmp14Result = tmp14(tmp15, obj6);
    } else {
      const obj7 = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", children: null };
      obj7[0] = tmp.viewMore;
      obj7[1] = closure_13;
      obj7[2] = function onPress() {
        return _undefined((arg0) => !arg0);
      };
      let str = "text-sm/semibold";
      if (tmp6) {
        str = "text-sm/medium";
      }
      let obj8 = { variant: null, color: "text-muted", children: null };
      obj8[0] = str;
      const intl = tmp2(tmp3[20]).intl;
      if (tmp8) {
        let stringResult1 = intl.string(tmp2(tmp3[20]).t["6MwJo/"]);
      } else {
        const obj9 = { numberOfItems: null };
        obj9[0] = memo.length - 6;
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[20]).t.zr0Y5R, obj9);
      }
      obj8[2] = stringResult1;
      obj8 = tmp16(tmp2(tmp3[12]).Text, obj8);
      obj7[4] = obj8;
      tmp16(closure_6, obj7);
      const tmp19 = closure_6;
    }
    tmp14 = closure_11;
    tmp15 = closure_12;
    const tmp17 = closure_7;
  }
  const obj10 = { style: style.cardStyle, title: null, trailingAction: null, children: null };
  const tmp9 = callback(undefined.useState(0), 2);
  const tmp5Result = widget(disableInteraction[21]);
  obj10[1] = userId(disableInteraction[22]).getWidgetTitle(widget);
  let tmp37Result = !stateFromStores;
  if (!stateFromStores) {
    tmp37Result = !disableInteraction;
  }
  if (tmp37Result) {
    const obj11 = { userId: null, widget: null };
    obj11[0] = userId;
    obj11[1] = widget;
    tmp37Result = tmp37(tmp5(tmp3[23]), obj11);
  }
  obj10[2] = tmp37Result;
  obj10[3] = callback2(closure_7, {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp14Result
  });
  return callback2(tmp5Result, obj10);
});
let obj11 = { marginTop: require("Themes").space.PX_12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId;
  flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let cardStyle = userId.cardStyle;
  let obj = flag(trackUserProfileAction[28]);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  cardStyle = tmp2;
  trackUserProfileAction = undefined;
  let _slicedToArray;
  const tmp = callback4();
  trackUserProfileAction = flag(trackUserProfileAction[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  _slicedToArray = importAllResult.useRef(false);
  const items = [flag, displayableBoardWidgets.length > 0, trackUserProfileAction];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      let tmp2 = cardStyle;
      if (cardStyle) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: null };
        obj[1] = outer1_9.WIDGETS;
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
    obj[1] = displayableBoardWidgets.map((getUniqueKey) => outer1_10(outer1_21, { userId: flag, widget: getUniqueKey, cardStyle, isFirstWidget: 0 === arg1 }, getUniqueKey.getUniqueKey()));
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
};
export const WidgetSection = memoResult;