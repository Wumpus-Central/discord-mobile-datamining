// === Module 14872: UserProfileWidgetsBoard ===

// Module 14872 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import StringUtils from "StringUtils" /* 2031 */;
import Text_Text from "Text/Text" /* 5271 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7765 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7766 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9282 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9283 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 11888 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14878 */;
import GameCoverImageDefault from "GameCoverImage" /* 14879 */;
import QuoteIcon from "QuoteIcon" /* 14880 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 14888 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8712).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5005);
let obj = { board: { gap: nativeDefault.space.PX_16 }, favoriteRow: null, favoriteDetails: null, list: null, listRow: null, listDetails: null, comment: null, commentText: null, grid: null, tags: null, tag: null, viewMore: null };
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
obj.tag = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.viewMore = { marginTop: nativeDefault.space.PX_12 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGamePress(sourceUserId, applicationId) {
  const cResult = c.c(3);
  if (cResult[0] === applicationId) {
    if (cResult[1] === sourceUserId) {
      let tmp4 = cResult[2];
    }
    return useOpenGameProfileModalDefault(tmp4);
  }
  const obj2 = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  cResult[0] = applicationId;
  cResult[1] = sourceUserId;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  return useOpenGameProfileModalDefault(obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackUserProfileWidgetsView(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  let obj = require("c");
  trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  noop.useRef(false);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === trackUserProfileAction) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  }
  const fn = function n() {
    if (closure_0) {
      let tmp2 = closure_1;
      if (closure_1) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  };
  const items = [arg0, arg1, trackUserProfileAction];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = trackUserProfileAction;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
  const obj2 = require("UserProfileAnalyticsContext");
}) : (function useTrackUserProfileWidgetsView(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  noop.useRef(false);
  const items = [arg0, arg1, trackUserProfileAction];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      let tmp2 = closure_1;
      if (closure_1) {
        tmp2 = !ref.current;
      }
      if (tmp2) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
});
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetTags(tags) {
  const cResult = require("c").c(13);
  tags = tags.tags;
  const tmp2 = closure_13();
  _require = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === tags) {
      let tmp6 = cResult[5];
    }
    const _Symbol = Symbol;
    if (tmp6 !== Symbol.for("react.early_return_sentinel")) {
      return tmp6;
    } else {
      if (cResult[9] === tmp3) {
        if (cResult[10] === tmp4) {
        }
      }
      const obj3 = { style: tmp4, children: tmp5 };
      const tmp18 = closure_9(tmp3, obj3);
      cResult[9] = tmp3;
      cResult[10] = tmp4;
      cResult[11] = tmp5;
      cResult[12] = tmp18;
    }
  }
  let obj = require("c");
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    cResult[6] = I;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
  }
  if (tags == null) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
  }
  const flatMapResult = tags.flatMap(I);
  if (0 === flatMapResult.length) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    cResult[1] = tags;
    cResult[2] = undefined;
    cResult[3] = undefined;
    cResult[4] = undefined;
    cResult[5] = null;
    tmp6 = null;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    if (cResult[7] !== tmp2.tag) {
      class I {
        constructor(arg0) {
          obj = closure_0(closure_1_2[13]);
          widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
          if (null != widgetGameTagMetadata) {
            obj1 = { tag: null, meta: null };
            obj1.tag = tags;
            obj1.meta = widgetGameTagMetadata;
            items = [];
            items[0] = obj1;
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }
      }
      cResult[7] = tmp2.tag;
      cResult[8] = tmp11;
    } else {
      class I {
        constructor(arg0) {
          obj = closure_0(closure_1_2[13]);
          widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
          if (null != widgetGameTagMetadata) {
            obj1 = { tag: null, meta: null };
            obj1.tag = tags;
            obj1.meta = widgetGameTagMetadata;
            items = [];
            items[0] = obj1;
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }
      }
    }
    const mapped = flatMapResult.map(tmp11);
    const tags2 = tmp2.tags;
  }
  const forResult = Symbol.for("react.early_return_sentinel");
}) : (function WidgetTags(tags) {
  tags = tags.tags;
  const tmp = closure_13();
  closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = closure_0(dependencyMap[13]).getWidgetGameTagMetadata(tag);
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
          const items = [React6(meta.icon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED }), ];
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items[1] = React6(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: meta.getText() });
          obj.children = items;
          return v65535(timestampProducer, obj, meta.tag);
        })
    };
    tmp2 = closure_9(closure_6, obj);
  }
  return tmp2;
}));
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FavoriteGameItem(arg0) {
  const cResult = c.c(34);
  ({ game, coverWidth } = arg0);
  ({ userId, disableInteraction } = arg0);
  const tmp4 = closure_13();
  const tmp6 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp6.gameName;
  let tmp7;
  if (!disableInteraction) {
    tmp7 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp7;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === coverWidth) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp10) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp7) {
            const fn2 = function _() {
              let tmp;
              if (closure_0 != null) {
                tmp = closure_0();
              }
              return tmp;
            };
            cResult[10] = tmp7;
            cResult[11] = fn2;
            let tmp18 = fn2;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== gameName) {
            const obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName };
            const tmp22 = React6(Text_Text.Text, obj2);
            cResult[12] = gameName;
            cResult[13] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === gameName) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp19) {
                if (cResult[17] === tmp20) {
                  let tmp23 = cResult[18];
                }
                if (cResult[19] === game.comment) {
                  if (cResult[20] === tmp4.comment) {
                    if (cResult[21] === tmp4.commentText) {
                      let tmp27 = cResult[22];
                    }
                    if (cResult[23] !== game.tags) {
                      const obj3 = { tags: game.tags };
                      const tmp37 = React6(closure_16, obj3);
                      cResult[23] = game.tags;
                      cResult[24] = tmp37;
                      let tmp34 = tmp37;
                    } else {
                      tmp34 = cResult[24];
                    }
                    if (cResult[25] === tmp4.favoriteDetails) {
                      if (cResult[26] === tmp34) {
                        if (cResult[27] === tmp23) {
                          if (cResult[28] === tmp27) {
                            let tmp38 = cResult[29];
                          }
                          if (cResult[30] === tmp4.favoriteRow) {
                            if (cResult[31] === tmp38) {
                              if (cResult[32] === tmp14) {
                                let tmp42 = cResult[33];
                              }
                              return tmp42;
                            }
                          }
                          const obj4 = { style: tmp4.favoriteRow, children: null };
                          const items = [tmp14, tmp38];
                          obj4.children = items;
                          const tmp45 = v65535(timestampProducer, obj4);
                          cResult[30] = tmp4.favoriteRow;
                          cResult[31] = tmp38;
                          cResult[32] = tmp14;
                          cResult[33] = tmp45;
                          tmp42 = tmp45;
                        }
                      }
                    }
                    const obj5 = { style: tmp4.favoriteDetails, children: null };
                    const items1 = [tmp23, tmp27, tmp34];
                    obj5.children = items1;
                    const tmp41 = v65535(timestampProducer, obj5);
                    cResult[25] = tmp4.favoriteDetails;
                    cResult[26] = tmp34;
                    cResult[27] = tmp23;
                    cResult[28] = tmp27;
                    cResult[29] = tmp41;
                    tmp38 = tmp41;
                  }
                }
                let trimmed;
                if (game.comment != null) {
                  trimmed = str.trim();
                }
                const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
                let tmp30 = !isNullOrEmptyResult;
                if (!isNullOrEmptyResult) {
                  const obj6 = { style: tmp4.comment, children: null };
                  const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
                  const items2 = [React6(QuoteIcon.QuoteIcon, obj7), ];
                  const obj8 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp4.commentText, children: game.comment };
                  items2[1] = React6(Text_Text.Text, obj8);
                  obj6.children = items2;
                  tmp30 = v65535(timestampProducer, obj6);
                }
                cResult[19] = game.comment;
                cResult[20] = tmp4.comment;
                cResult[21] = tmp4.commentText;
                cResult[22] = tmp30;
                tmp27 = tmp30;
                const tmpResult = StringUtils;
              }
            }
          }
          const obj9 = { onPress: tmp18, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp20 };
          const tmp26 = React6(hasOwnProperty, obj9);
          cResult[14] = gameName;
          cResult[15] = tmp18;
          cResult[16] = null == tmp7;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
    const obj10 = { onPress: tmp8, disabled: tmp9, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp10 };
    const tmp17 = React6(hasOwnProperty, obj10);
    cResult[5] = gameName;
    cResult[6] = tmp8;
    cResult[7] = tmp9;
    cResult[8] = tmp10;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj11 = {};
  const merged = Object.assign(tmp6);
  obj11.width = coverWidth;
  const tmp13 = React6(GameCoverImageDefault, obj11);
  cResult[2] = tmp6;
  cResult[3] = coverWidth;
  cResult[4] = tmp13;
  tmp10 = tmp13;
  const tmp5Result = GameCoverImageDefault;
}) : (function FavoriteGameItem(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_13();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp5;
  const obj = { style: tmp.favoriteRow, children: null };
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.width = coverWidth;
  obj2.children = React6(GameCoverImageDefault, obj3);
  const items = [React6(hasOwnProperty, obj2), ];
  const obj4 = { style: tmp.favoriteDetails, children: null };
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
      disabled: null == tmp5,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: React6(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
    }),
  ,

  ];
  const obj5 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React6(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  let trimmed;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp6Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj7 = { style: tmp.comment, children: null };
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const items2 = [React6(QuoteIcon.QuoteIcon, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = React6(Text_Text.Text, obj9);
    obj7.children = items2;
    tmp6Result = v65535(timestampProducer, obj7);
  }
  items1[1] = tmp6Result;
  items1[2] = React6(closure_16, { tags: game.tags });
  obj4.children = items1;
  items[1] = v65535(timestampProducer, obj4);
  obj.children = items;
  return v65535(timestampProducer, obj);
}));
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameListRow(arg0) {
  const cResult = c.c(29);
  ({ game, coverWidth } = arg0);
  ({ userId, disableInteraction } = arg0);
  const tmp4 = closure_13();
  const tmp6 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp6.gameName;
  let tmp7;
  if (!disableInteraction) {
    tmp7 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp7;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === coverWidth) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp10) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp7) {
            const fn2 = function _() {
              let tmp;
              if (closure_0 != null) {
                tmp = closure_0();
              }
              return tmp;
            };
            cResult[10] = tmp7;
            cResult[11] = fn2;
            let tmp18 = fn2;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== gameName) {
            const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName };
            const tmp22 = React6(Text_Text.Text, obj2);
            cResult[12] = gameName;
            cResult[13] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === gameName) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp19) {
                if (cResult[17] === tmp20) {
                  let tmp23 = cResult[18];
                }
                if (cResult[19] !== game.tags) {
                  const obj3 = { tags: game.tags };
                  const tmp30 = React6(closure_16, obj3);
                  cResult[19] = game.tags;
                  cResult[20] = tmp30;
                  let tmp27 = tmp30;
                } else {
                  tmp27 = cResult[20];
                }
                if (cResult[21] === tmp4.listDetails) {
                  if (cResult[22] === tmp23) {
                    if (cResult[23] === tmp27) {
                      let tmp31 = cResult[24];
                    }
                    if (cResult[25] === tmp4.listRow) {
                      if (cResult[26] === tmp31) {
                        if (cResult[27] === tmp14) {
                          let tmp35 = cResult[28];
                        }
                        return tmp35;
                      }
                    }
                    const obj4 = { style: tmp4.listRow, children: null };
                    const items = [tmp14, tmp31];
                    obj4.children = items;
                    const tmp38 = v65535(timestampProducer, obj4);
                    cResult[25] = tmp4.listRow;
                    cResult[26] = tmp31;
                    cResult[27] = tmp14;
                    cResult[28] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj5 = { style: tmp4.listDetails, children: null };
                const items1 = [tmp23, tmp27];
                obj5.children = items1;
                const tmp34 = v65535(timestampProducer, obj5);
                cResult[21] = tmp4.listDetails;
                cResult[22] = tmp23;
                cResult[23] = tmp27;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
            }
          }
          const obj6 = { onPress: tmp18, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp20 };
          const tmp26 = React6(hasOwnProperty, obj6);
          cResult[14] = gameName;
          cResult[15] = tmp18;
          cResult[16] = null == tmp7;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
    const obj7 = { onPress: tmp8, disabled: tmp9, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp10 };
    const tmp17 = React6(hasOwnProperty, obj7);
    cResult[5] = gameName;
    cResult[6] = tmp8;
    cResult[7] = tmp9;
    cResult[8] = tmp10;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj8 = {};
  const merged = Object.assign(tmp6);
  obj8.width = coverWidth;
  const tmp13 = React6(GameCoverImageDefault, obj8);
  cResult[2] = tmp6;
  cResult[3] = coverWidth;
  cResult[4] = tmp13;
  tmp10 = tmp13;
  const tmp5Result = GameCoverImageDefault;
}) : (function GameListRow(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_13();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp5;
  const obj = { style: tmp.listRow, children: null };
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: null
  };
  const obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.width = coverWidth;
  obj2.children = React6(GameCoverImageDefault, obj3);
  const items = [React6(hasOwnProperty, obj2), ];
  const obj4 = { style: tmp.listDetails, children: null };
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
      disabled: null == tmp5,
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: React6(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
    }),
    React6(closure_16, { tags: game.tags })
  ];
  obj4.children = items1;
  items[1] = v65535(timestampProducer, obj4);
  obj.children = items;
  return v65535(timestampProducer, obj);
}));
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameGridCover(arg0) {
  const cResult = c.c(10);
  ({ game, coverWidth, userId, disableInteraction } = arg0);
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp5;
  if (cResult[0] !== tmp5) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp5;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === coverWidth) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
    const obj2 = { onPress: tmp6, disabled: tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp8 };
    const tmp15 = React6(hasOwnProperty, obj2);
    cResult[5] = gameName;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp8;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const obj3 = {};
  const merged = Object.assign(tmp4);
  obj3.width = coverWidth;
  const tmp11 = React6(GameCoverImageDefault, obj3);
  cResult[2] = tmp4;
  cResult[3] = coverWidth;
  cResult[4] = tmp11;
  tmp8 = tmp11;
  const tmp3Result = GameCoverImageDefault;
}) : (function GameGridCover(game) {
  game = game.game;
  closure_0 = undefined;
  ({ userId, coverWidth, disableInteraction } = game);
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  let tmp4;
  if (!disableInteraction) {
    tmp4 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp4;
  const obj = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp4,
    accessibilityRole: "button",
    accessibilityLabel: tmp3.gameName,
    children: null
  };
  const obj2 = {};
  const merged = Object.assign(tmp3);
  obj2.width = coverWidth;
  obj.children = React6(GameCoverImageDefault, obj2);
  return React6(hasOwnProperty, obj);
}));
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetSection(userId) {
  const cResult = userId(576).c(66);
  userId = userId.userId;
  ({ widget, cardStyle, disableInteraction } = userId);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function b() {
      return AuthenticationStore.getId() === userId;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7);
  const tmpResult = userId(504);
  [tmp10, dependencyMap] = noop.useState(false);
  let num4 = 0;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  [tmp12, _slicedToArray] = noop.useState(0);
  const result = (tmp12 - 2 * disableInteraction(587).space.PX_16) / 3;
  noop = result;
  if (cResult[3] !== widget.games) {
    const uniqByResult = disableInteraction(12).uniqBy(widget.games, "gameId");
    cResult[3] = widget.games;
    cResult[4] = uniqByResult;
    let arr2 = uniqByResult;
    const tmp13Result = disableInteraction(12);
  } else {
    arr2 = cResult[4];
  }
  const type = widget.type;
  if (userId(7761).WidgetType.FAVORITE_GAMES === type) {
    if (cResult[5] === tmp12) {
      if (cResult[6] === result) {
        if (cResult[7] === disableInteraction) {
          if (cResult[8] === arr2) {
          }
        }
      }
    }
    let tmp56 = tmp12 > num4;
    if (tmp56) {
      const obj2 = { userId, game: arr2[0], coverWidth: result, disableInteraction };
      tmp56 = closure_9(closure_17, obj2);
    }
    cResult[5] = tmp12;
    cResult[6] = result;
    cResult[7] = disableInteraction;
    cResult[8] = arr2;
    cResult[9] = userId;
    num4 = 10;
    cResult[10] = tmp56;
  } else {
    if (tmp(7761).WidgetType.CURRENT_GAMES === type) {
      if (cResult[11] === tmp10) {
        if (cResult[12] === arr2) {
          let arr5 = cResult[13];
        }
        if (cResult[14] === tmp12) {
          if (cResult[15] === result) {
            if (cResult[16] === disableInteraction) {
              if (cResult[17] === arr5) {
                if (cResult[18] === userId) {
                  let tmp38 = cResult[19];
                }
                if (cResult[20] === tmp4.list) {
                  if (cResult[21] === tmp38) {
                    let tmp40 = cResult[22];
                  }
                  if (cResult[23] === tmp10) {
                    if (cResult[24] === arr2.length) {
                      if (cResult[25] === tmp36) {
                        if (cResult[26] === tmp4.viewMore) {
                          let tmp44 = cResult[27];
                        }
                        if (cResult[28] === tmp40) {
                          if (cResult[29] === tmp44) {
                            let tmp51 = cResult[30];
                          }
                          let tmp32 = tmp51;
                        }
                        const obj3 = { children: null };
                        const items1 = [tmp40, tmp44];
                        obj3.children = items1;
                        const tmp54 = closure_10(closure_11, obj3);
                        cResult[28] = tmp40;
                        cResult[29] = tmp44;
                        cResult[30] = tmp54;
                        tmp51 = tmp54;
                      }
                    }
                  }
                  if (!tmp36) {
                    cResult[23] = tmp10;
                    cResult[24] = arr2.length;
                    cResult[25] = tmp36;
                    cResult[26] = tmp4.viewMore;
                    cResult[27] = tmp36;
                    tmp44 = tmp36;
                  } else {
                    const obj4 = {
                      style: tmp4.viewMore,
                      hitSlop,
                      onPress() {
                                          return dependencyMap((arg0) => !arg0);
                                        },
                      accessibilityRole: "button",
                      children: null
                    };
                    const intl2 = tmp(1125).intl;
                    if (tmp10) {
                      let stringResult = intl2.string(tmp(1125).t["6MwJo/"]);
                    } else {
                      const obj5 = { numberOfItems: arr2.length - 2 };
                      stringResult = intl2.formatToPlainString(tmp(1125).t.zr0Y5R, obj5);
                    }
                    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
                    obj4.children = closure_9(tmp(5271).Text, obj6);
                    closure_9(closure_5, obj4);
                  }
                }
                const obj7 = { style: tmp4.list, children: tmp38 };
                const tmp43 = closure_9(closure_6, obj7);
                cResult[20] = tmp4.list;
                cResult[21] = tmp38;
                cResult[22] = tmp43;
                tmp40 = tmp43;
              }
            }
          }
        }
        const tmp39 = tmp12 > num4 && arr5.map((game) => React6(closure_18, { userId, game, coverWidth: result, disableInteraction }, game.gameId));
        cResult[14] = tmp12;
        cResult[15] = result;
        cResult[16] = disableInteraction;
        cResult[17] = arr5;
        cResult[18] = userId;
        cResult[19] = tmp39;
        tmp38 = tmp39;
      }
      let substr = arr2;
      if (!tmp10) {
        substr = arr2.slice(num4, 2);
      }
      cResult[11] = tmp10;
      cResult[12] = arr2;
      cResult[13] = substr;
      arr5 = substr;
    } else {
      if (tmp(7761).WidgetType.WANT_TO_PLAY_GAMES !== type) {
        if (tmp(7761).WidgetType.PLAYED_GAMES !== type) {
          return null;
        }
      }
      if (cResult[31] === tmp10) {
        if (cResult[32] === arr2) {
          let arr3 = cResult[33];
        }
        if (cResult[34] === tmp12) {
          if (cResult[35] === result) {
            if (cResult[36] === disableInteraction) {
              if (cResult[37] === arr3) {
                if (cResult[38] === userId) {
                  let tmp19 = cResult[39];
                }
                if (cResult[40] === tmp4.grid) {
                  if (cResult[41] === tmp19) {
                    let tmp21 = cResult[42];
                  }
                  if (cResult[43] === tmp10) {
                    if (cResult[44] === arr2.length) {
                      if (cResult[45] === tmp17) {
                        if (cResult[46] === tmp4.viewMore) {
                          let tmp25 = cResult[47];
                        }
                        if (cResult[48] === tmp21) {
                          if (cResult[49] === tmp25) {
                            tmp32 = cResult[50];
                          }
                        }
                        const obj8 = { children: null };
                        const items2 = [tmp21, tmp25];
                        obj8.children = items2;
                        const tmp35 = closure_10(closure_11, obj8);
                        cResult[48] = tmp21;
                        cResult[49] = tmp25;
                        cResult[50] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                  }
                  if (!tmp17) {
                    cResult[43] = tmp10;
                    cResult[44] = arr2.length;
                    cResult[45] = tmp17;
                    cResult[46] = tmp4.viewMore;
                    cResult[47] = tmp17;
                    tmp25 = tmp17;
                  } else {
                    const obj9 = {
                      style: tmp4.viewMore,
                      hitSlop,
                      onPress() {
                                          return dependencyMap((arg0) => !arg0);
                                        },
                      accessibilityRole: "button",
                      children: null
                    };
                    const intl = tmp(1125).intl;
                    if (tmp10) {
                      let stringResult1 = intl.string(tmp(1125).t["6MwJo/"]);
                    } else {
                      const obj10 = { numberOfItems: arr2.length - 6 };
                      stringResult1 = intl.formatToPlainString(tmp(1125).t.zr0Y5R, obj10);
                    }
                    const obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
                    obj9.children = closure_9(tmp(5271).Text, obj11);
                    closure_9(closure_5, obj9);
                  }
                }
                const obj12 = { style: tmp4.grid, children: tmp19 };
                const tmp24 = closure_9(closure_6, obj12);
                cResult[40] = tmp4.grid;
                cResult[41] = tmp19;
                cResult[42] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
        const tmp20 = tmp12 > num4 && arr3.map((game) => React6(closure_19, { userId, game, coverWidth: result, disableInteraction }, game.gameId));
        cResult[34] = tmp12;
        cResult[35] = result;
        cResult[36] = disableInteraction;
        cResult[37] = arr3;
        cResult[38] = userId;
        cResult[39] = tmp20;
        tmp19 = tmp20;
      }
      let substr1 = arr2;
      if (!tmp10) {
        substr1 = arr2.slice(num4, 6);
      }
      cResult[31] = tmp10;
      cResult[32] = arr2;
      cResult[33] = substr1;
      arr3 = substr1;
    }
    if (cResult[51] !== widget) {
      const widgetTitle = tmp(14882).getWidgetTitle(widget);
      cResult[51] = widget;
      cResult[52] = widgetTitle;
      let tmp60 = widgetTitle;
      const tmpResult2 = tmp(14882);
    } else {
      tmp60 = cResult[52];
    }
    if (cResult[53] === disableInteraction) {
      if (cResult[54] === stateFromStores) {
        if (cResult[55] === userId) {
          if (cResult[56] === widget) {
            let tmp62 = cResult[57];
          }
          const _Symbol = Symbol;
          if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function z(nativeEvent) {
              return _slicedToArray(nativeEvent.nativeEvent.layout.width);
            };
            cResult[58] = fn2;
            let tmp65 = fn2;
          } else {
            tmp65 = cResult[58];
          }
          if (cResult[59] !== tmp32) {
            const obj13 = { onLayout: tmp65, children: tmp32 };
            const tmp69 = closure_9(closure_6, obj13);
            cResult[59] = tmp32;
            cResult[60] = tmp69;
            let tmp66 = tmp69;
          } else {
            tmp66 = cResult[60];
          }
          if (cResult[61] === cardStyle) {
            if (cResult[62] === tmp60) {
              if (cResult[63] === tmp62) {
                if (cResult[64] === tmp66) {
                  let tmp70 = cResult[65];
                }
                return tmp70;
              }
            }
          }
          const obj14 = { style: cardStyle, title: tmp60, trailingAction: tmp62, children: tmp66 };
          const tmp72 = closure_9(disableInteraction(7363), obj14);
          cResult[61] = cardStyle;
          cResult[62] = tmp60;
          cResult[63] = tmp62;
          cResult[64] = tmp66;
          cResult[65] = tmp72;
          tmp70 = tmp72;
        }
      }
    }
    let tmp63 = !stateFromStores;
    if (!stateFromStores) {
      tmp63 = !disableInteraction;
    }
    if (tmp63) {
      const obj15 = { userId, widget };
      tmp63 = closure_9(disableInteraction(14886), obj15);
    }
    cResult[53] = disableInteraction;
    cResult[54] = stateFromStores;
    cResult[55] = userId;
    cResult[56] = widget;
    cResult[57] = tmp63;
    tmp62 = tmp63;
  }
  const tmp11 = _slicedToArray(noop.useState(0), 2);
}) : (function WidgetSection(style) {
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_13();
  const items = [AuthenticationStore];
  const stateFromStores = userId(disableInteraction[19]).useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  const obj = userId(disableInteraction[19]);
  [tmp6, c3] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = noop.useState(0);
  const result = (tmp8 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  c5 = result;
  const items1 = [widget.games];
  const memo = noop.useMemo(() => _modDef12.uniqBy(widget.games, "gameId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[21]).WidgetType.FAVORITE_GAMES === type) {
    let tmp33 = tmp8 > 0;
    if (tmp33) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp33 = closure_9(closure_17, obj2);
    }
    let tmp13Result = tmp33;
  } else if (tmp2(tmp3[21]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: null };
    let mapped = tmp8 > 0;
    if (mapped) {
      mapped = substr.map((game) => React6(closure_18, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj3.children = mapped;
    const items2 = [closure_9(closure_6, obj3), ];
    if (memo.length <= 2) {
      const obj4 = { children: null };
      items2[1] = tmp23;
      obj4.children = items2;
      tmp13Result = closure_10(closure_11, obj4);
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
      const intl2 = tmp2(tmp3[22]).intl;
      if (tmp6) {
        let stringResult = intl2.string(tmp2(tmp3[22]).t["6MwJo/"]);
      } else {
        const obj6 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj6);
      }
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      obj5.children = closure_9(tmp2(tmp3[14]).Text, obj7);
      closure_9(c5, obj5);
    }
  } else {
    if (tmp2(tmp3[21]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (tmp2(tmp3[21]).WidgetType.PLAYED_GAMES !== type) {
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
      mapped1 = substr1.map((game) => React6(closure_19, { userId, game, coverWidth, disableInteraction }, game.gameId));
    }
    obj8.children = mapped1;
    const items3 = [closure_9(closure_6, obj8), ];
    if (memo.length <= 6) {
      const obj9 = { children: null };
      items3[1] = tmp12;
      obj9.children = items3;
      tmp13Result = closure_10(closure_11, obj9);
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
      const intl = tmp2(tmp3[22]).intl;
      if (tmp6) {
        let stringResult1 = intl.string(tmp2(tmp3[22]).t["6MwJo/"]);
      } else {
        const obj11 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj11);
      }
      const obj12 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      obj10.children = closure_9(tmp2(tmp3[14]).Text, obj12);
      closure_9(c5, obj10);
    }
  }
  const obj13 = { style: style.cardStyle, title: null, trailingAction: null, children: null };
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  const tmp9Result = widget(disableInteraction[25]);
  obj13.title = userId(disableInteraction[23]).getWidgetTitle(widget);
  let tmp36Result = !stateFromStores;
  if (!stateFromStores) {
    tmp36Result = !disableInteraction;
  }
  if (tmp36Result) {
    const obj14 = { userId, widget };
    tmp36Result = closure_9(tmp9(tmp3[24]), obj14);
  }
  obj13.trailingAction = tmp36Result;
  obj13.children = closure_9(closure_6, {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  });
  return closure_9(tmp9Result, obj13);
}));
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetRenderer(arg0) {
  let tmp2 = dependencyMap;
  const cResult = c.c(12);
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    if (cResult[0] === cardStyle) {
      if (cResult[1] === userId) {
      }
    }
    const obj2 = { userId, widget, cardStyle };
    tmp2 = React6(UserProfileApplicationWidgetCardDefault, obj2);
    cResult[0] = cardStyle;
    cResult[1] = userId;
    cResult[2] = widget;
    cResult[3] = tmp2;
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    if (cResult[4] === cardStyle) {
      if (cResult[5] === userId) {
      }
    }
    const obj3 = { userId, widget, cardStyle };
    const tmp11 = React6(UserProfilePersonalWidgetCardDefault, obj3);
    cResult[4] = cardStyle;
    cResult[5] = userId;
    cResult[6] = widget;
    cResult[7] = tmp11;
  } else {
    if (cResult[8] === cardStyle) {
      if (cResult[9] === userId) {
        if (cResult[10] === widget) {
          let tmp4 = cResult[11];
        }
        return tmp4;
      }
    }
    const obj4 = { userId, widget, cardStyle };
    const tmp7 = React6(memoResult, obj4);
    cResult[8] = cardStyle;
    cResult[9] = userId;
    cResult[10] = widget;
    cResult[11] = tmp7;
    tmp4 = tmp7;
  }
}) : (function WidgetRenderer(arg0) {
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
});
ReactCompilerGating = fn(558);
let obj13 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsBoard(userId) {
  const cResult = userId(576).c(10);
  userId = userId.userId;
  ({ isVisible, cardStyle } = userId);
  const tmp5 = closure_13();
  const obj = userId(576);
  const tmp4 = undefined === isVisible || isVisible;
  const displayableBoardWidgets = userId(14892).useDisplayableBoardWidgets(userId);
  let num = 0;
  closure_15(tmp4, displayableBoardWidgets.length > 0);
  if (0 === displayableBoardWidgets.length) {
    return null;
  } else {
    if (cResult[0] === cardStyle) {
      if (cResult[1] === userId) {
        if (cResult[2] === displayableBoardWidgets) {
          if (cResult[7] === tmp5.board) {
            if (cResult[8] === tmp7) {
              let tmp11 = cResult[9];
            }
            return tmp11;
          }
          const obj2 = { style: tmp16, children: cResult[3] };
          const tmp14 = closure_9(closure_6, obj2);
          cResult[7] = tmp5.board;
          cResult[8] = cResult[3];
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
      }
    }
    if (cResult[4] === cardStyle) {
      if (cResult[5] === userId) {
        let tmp8 = cResult[6];
      }
      const mapped = displayableBoardWidgets.map(tmp8);
      cResult[num] = cardStyle;
      cResult[1] = userId;
      cResult[2] = displayableBoardWidgets;
      num = 3;
      cResult[3] = mapped;
    }
    const fn = function f(widget) {
      return React6(closure_21, { userId, widget, cardStyle }, widget.getUniqueKey());
    };
    cResult[4] = cardStyle;
    cResult[5] = userId;
    cResult[6] = fn;
    tmp8 = fn;
  }
  const tmpResult = userId(14892);
}) : (function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  const tmp = closure_13();
  const displayableBoardWidgets = userId(14892).useDisplayableBoardWidgets(userId);
  closure_15(flag, displayableBoardWidgets.length > 0);
  let tmp3 = null;
  if (0 !== displayableBoardWidgets.length) {
    const obj2 = { style: tmp.board, children: displayableBoardWidgets.map((widget) => React6(closure_21, { userId, widget, cardStyle }, widget.getUniqueKey())) };
    tmp3 = closure_9(closure_6, obj2);
  }
  return tmp3;
});
export const WidgetSection = memoResult;