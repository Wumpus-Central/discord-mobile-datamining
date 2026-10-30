// discord_app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileApplicationWidgetTypes from "../UserProfileApplicationWidgetTypes.tsx";
import UserProfilePersonalWidget from "../UserProfilePersonalWidget.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import GameCoverImageDefault from "GameCoverImage.tsx";
import QuoteIcon from "../../../design/components/Icon/native/redesign/generated/QuoteIcon.tsx";
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function WidgetRenderer(arg0) {
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle };
    let tmp3Result = React6(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle };
    tmp3Result = React6(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle };
    tmp3Result = React6(memoResult, obj);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8746).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5009);
let obj = {
  board: { gap: nativeDefault.space.PX_16 },
  favoriteRow: null,
  favoriteDetails: null,
  list: null,
  listRow: null,
  listDetails: null,
  comment: null,
  commentText: null,
  grid: null,
  tags: null,
  tag: null,
  viewMore: null,
};
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
obj.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj.tags = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj12 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.viewMore = { marginTop: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo(function WidgetTags(tags) {
  tags = tags.tags;
  const tmp = closure_12();
  closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = closure_0(dependencyMap[10]).getWidgetGameTagMetadata(tag);
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
        const items = [React6(meta.icon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED })];
        const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        items[1] = React6(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: meta.getText() });
        obj.children = items;
        return React7(timestampProducer, obj, meta.tag);
      }),
    };
    tmp2 = closure_8(closure_6, obj);
  }
  return tmp2;
});
let closure_14 = noop.memo(function FavoriteGameItem(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = {
    location: "UserProfileWidgetsBoard",
    applicationId: game.gameId,
    source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
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
    children: null,
  };
  const obj4 = {};
  tmp5 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp4);
  obj4.width = coverWidth;
  obj3.children = React6(GameCoverImageDefault, obj4);
  const items = [React6(hasOwnProperty, obj3)];
  const obj5 = { style: tmp.favoriteDetails, children: null };
  const tmp2Result = GameCoverImageDefault;
  const items1 = [
    React6(hasOwnProperty, {
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
      children: React6(Text_Text.Text, {
        variant: "text-md/semibold",
        color: "text-default",
        lineClamp: 2,
        children: gameName,
      }),
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
    children: React6(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "text-default",
      lineClamp: 2,
      children: gameName,
    }),
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
    const items2 = [React6(QuoteIcon.QuoteIcon, obj8)];
    const obj9 = {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 3,
      style: tmp.commentText,
      children: game.comment,
    };
    items2[1] = React6(Text_Text.Text, obj9);
    obj7.children = items2;
    tmp8Result = React7(timestampProducer, obj7);
  }
  items1[1] = tmp8Result;
  items1[2] = React6(closure_13, { tags: game.tags });
  obj5.children = items1;
  items[1] = React7(timestampProducer, obj5);
  obj2.children = items;
  return React7(timestampProducer, obj2);
});
let closure_15 = noop.memo(function GameListRow(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = {
    location: "UserProfileWidgetsBoard",
    applicationId: game.gameId,
    source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
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
    children: null,
  };
  const obj4 = {};
  tmp5 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp4);
  obj4.width = coverWidth;
  obj3.children = React6(GameCoverImageDefault, obj4);
  const items = [React6(hasOwnProperty, obj3)];
  const obj5 = { style: tmp.listDetails, children: null };
  const tmp2Result = GameCoverImageDefault;
  const items1 = [
    React6(hasOwnProperty, {
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
      children: React6(Text_Text.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 2,
        children: gameName,
      }),
    }),
    React6(closure_13, { tags: game.tags }),
  ];
  obj5.children = items1;
  items[1] = React7(timestampProducer, obj5);
  obj2.children = items;
  return React7(timestampProducer, obj2);
});
let closure_16 = noop.memo(function GameGridCover(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  const obj = {
    location: "UserProfileWidgetsBoard",
    applicationId: game.gameId,
    source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
    sourceUserId: userId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
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
    children: null,
  };
  const obj3 = {};
  tmp4 = useOpenGameProfileModalDefault;
  const merged = Object.assign(tmp3);
  obj3.width = coverWidth;
  obj2.children = React6(GameCoverImageDefault, obj3);
  return React6(hasOwnProperty, obj2);
});
const memoResult = noop.memo(function WidgetSection(style) {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_12();
  [tmp3, c3] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, c4] = noop.useState(0);
  const result = (tmp5 - 2 * widget(disableInteraction[6]).space.PX_16) / 3;
  c5 = result;
  const items = [widget.games];
  const memo = noop.useMemo(() => _modDef12.uniqBy(widget.games, "gameId"), items);
  const type = widget.type;
  if (userId(disableInteraction[17]).WidgetType.FAVORITE_GAMES === type) {
    let tmp32 = tmp5 > 0;
    if (tmp32) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp32 = closure_8(closure_14, obj2);
    }
    let tmp12Result = tmp32;
  } else if (tmp9(tmp7[17]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp3) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: null };
    let mapped = tmp5 > 0;
    if (mapped) {
      mapped = substr.map((game) => React6(closure_15, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj3.children = mapped;
    const items1 = [closure_8(closure_6, obj3)];
    if (memo.length <= 2) {
      const obj4 = { children: null };
      items1[1] = tmp22;
      obj4.children = items1;
      tmp12Result = closure_9(closure_10, obj4);
    } else {
      const obj5 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
          return _undefined((arg0) => !arg0);
        },
        accessibilityRole: "button",
        children: null,
      };
      const intl2 = tmp9(tmp7[18]).intl;
      if (tmp3) {
        let stringResult = intl2.string(tmp9(tmp7[18]).t["6MwJo/"]);
      } else {
        const obj6 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp9(tmp7[18]).t.zr0Y5R, obj6);
      }
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      obj5.children = closure_8(tmp9(tmp7[11]).Text, obj7);
      closure_8(c5, obj5);
    }
  } else {
    if (tmp9(tmp7[17]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (tmp9(tmp7[17]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let substr1 = memo;
    if (!tmp3) {
      substr1 = memo.slice(0, 6);
    }
    const obj = { style: tmp.grid, children: null };
    let mapped1 = tmp5 > 0;
    if (mapped1) {
      mapped1 = substr1.map((game) =>
        React6(closure_16, { userId, game, coverWidth, disableInteraction }, game.gameId),
      );
    }
    obj.children = mapped1;
    const items2 = [closure_8(closure_6, obj)];
    if (memo.length <= 6) {
      const obj8 = { children: null };
      items2[1] = tmp11;
      obj8.children = items2;
      tmp12Result = closure_9(closure_10, obj8);
    } else {
      const obj9 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
          return _undefined((arg0) => !arg0);
        },
        accessibilityRole: "button",
        children: null,
      };
      const intl = tmp9(tmp7[18]).intl;
      if (tmp3) {
        let stringResult1 = intl.string(tmp9(tmp7[18]).t["6MwJo/"]);
      } else {
        const obj10 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp9(tmp7[18]).t.zr0Y5R, obj10);
      }
      const obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      obj9.children = closure_8(tmp9(tmp7[11]).Text, obj11);
      closure_8(c5, obj9);
    }
  }
  const obj12 = { userId, widget, style: style.cardStyle, disableInteraction, children: null };
  const obj13 = {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp12Result,
  };
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  obj12.children = closure_8(closure_6, obj13);
  return closure_8(widget(disableInteraction[19]), obj12);
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
  const tmp = closure_12();
  const displayableBoardWidgets = userId(14929).useDisplayableBoardWidgets(userId);
  closure_129_0 = flag;
  closure_129_1 = tmp2;
  let obj = userId(14929);
  const trackUserProfileAction = userId(8753).useUserProfileAnalyticsContext().trackUserProfileAction;
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
    const obj3 = {
      style: tmp.board,
      children: displayableBoardWidgets.map((widget) =>
        React6(WidgetRenderer, { userId, widget, cardStyle }, widget.getUniqueKey()),
      ),
    };
    tmp4 = closure_8(closure_6, obj3);
  }
  return tmp4;
}
export const WidgetSection = memoResult;
