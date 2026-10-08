// discord_app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import UserProfileApplicationWidgetTypes from "../UserProfileApplicationWidgetTypes.tsx";
import UserProfilePersonalWidget from "../UserProfilePersonalWidget.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import QuoteIcon from "../../../design/components/Icon/native/redesign/generated/QuoteIcon.tsx";
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard.tsx";
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8283).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5090);
let obj = {
  board: { gap: nativeDefault.space.PX_16 },
  coverPlaceholder: null,
  favoriteRow: null,
  favoriteDetails: null,
  favoriteCover: null,
  list: null,
  listRow: null,
  listCover: null,
  listDetails: null,
  comment: null,
  commentText: null,
  grid: null,
  gridCover: null,
  tags: null,
  tag: null,
  viewMore: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj.coverPlaceholder = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
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
let obj13 = {
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
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGamePress(sourceUserId, applicationId) {
      const cResult = c.c(3);
      if (cResult[0] === applicationId) {
        if (cResult[1] === sourceUserId) {
          let tmp4 = cResult[2];
        }
        return useOpenGameProfileModalDefault(tmp4);
      }
      const obj2 = {
        location: "UserProfileWidgetsBoard",
        applicationId,
        source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
        sourceUserId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      cResult[0] = applicationId;
      cResult[1] = sourceUserId;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : function useGamePress(sourceUserId, applicationId) {
      const obj = {
        location: "UserProfileWidgetsBoard",
        applicationId,
        source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
        sourceUserId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      return useOpenGameProfileModalDefault(obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackUserProfileWidgetsView(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(5);
      let obj = require("c");
      trackUserProfileAction =
        require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
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
      const fn = function o() {
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
    }
  : function useTrackUserProfileWidgetsView(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      trackUserProfileAction =
        require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
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
    };
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Cover(arg0) {
        let obj = dependencyMap;
        const cResult = c.c(4);
        ({ uri, style } = arg0);
        let coverPlaceholder = closure_13();
        if (cResult[0] === style) {
          if (cResult[1] === coverPlaceholder.coverPlaceholder) {
            if (cResult[2] === uri) {
              return cResult[3];
            }
          }
        }
        if (null != uri) {
          obj = { source: null, style: null };
          const obj3 = { uri };
          obj.source = obj3;
          const items = [style, coverPlaceholder.coverPlaceholder];
          obj.style = items;
          let tmp4 = options(FastImageDefault, obj);
        } else {
          const obj4 = { style: null };
          const items1 = [style, coverPlaceholder.coverPlaceholder];
          obj4.style = items1;
          tmp4 = options(timestampProducer, obj4);
        }
        cResult[0] = style;
        coverPlaceholder = coverPlaceholder.coverPlaceholder;
        cResult[1] = coverPlaceholder;
        cResult[2] = uri;
        cResult[3] = tmp4;
      }
    : function Cover(arg0) {
        ({ uri, style } = arg0);
        const tmp = closure_13();
        if (null != uri) {
          const obj2 = { source: null, style: null };
          const obj3 = { uri };
          obj2.source = obj3;
          const items = [style, tmp.coverPlaceholder];
          obj2.style = items;
          let tmp4 = options(FastImageDefault, obj2);
        } else {
          const obj = { style: null };
          const items1 = [style, tmp.coverPlaceholder];
          obj.style = items1;
          tmp4 = options(timestampProducer, obj);
        }
        return tmp4;
      },
);
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function WidgetTags(tags) {
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
            let obj2 = { style: tmp4, children: tmp5 };
            const tmp17 = closure_9(tmp3, obj2);
            cResult[9] = tmp3;
            cResult[10] = tmp4;
            cResult[11] = tmp5;
            cResult[12] = tmp17;
          }
        }
        let obj = require("c");
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p(tag) {
            const widgetGameTagMetadata = closure_0(dependencyMap[14]).getWidgetGameTagMetadata(tag);
            if (null != widgetGameTagMetadata) {
              const obj2 = { tag, meta: widgetGameTagMetadata };
              const items = [obj2];
              let items1 = items;
            } else {
              items1 = [];
            }
            return items1;
          };
          cResult[6] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[6];
        }
        let items = tags;
        if (tags == null) {
          items = [];
        }
        const flatMapResult = items.flatMap(tmp8);
        if (0 === flatMapResult.length) {
          cResult[0] = tmp2;
          cResult[1] = tags;
          cResult[2] = undefined;
          cResult[3] = undefined;
          cResult[4] = undefined;
          cResult[5] = null;
          tmp6 = null;
        } else {
          if (cResult[7] !== tmp2.tag) {
            class P {
              constructor(arg0) {
                meta = tags.meta;
                obj = { style: closure_0.tag, children: null };
                obj1 = { size: "xs", color: closure_1(closure_2[7]).colors.TEXT_MUTED };
                items = [,];
                items[0] = jsx(meta.icon, obj1);
                obj4 = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
                items[1] = jsx(closure_0(closure_2[15]).Text, obj4);
                obj.children = items;
                return jsxs(View, obj, tags.tag);
              }
            }
            cResult[7] = tmp2.tag;
            cResult[8] = P;
          } else {
            class P {
              constructor(arg0) {
                meta = tags.meta;
                obj = { style: closure_0.tag, children: null };
                obj1 = { size: "xs", color: closure_1(closure_2[7]).colors.TEXT_MUTED };
                items = [,];
                items[0] = jsx(meta.icon, obj1);
                obj4 = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
                items[1] = jsx(closure_0(closure_2[15]).Text, obj4);
                obj.children = items;
                return jsxs(View, obj, tags.tag);
              }
            }
          }
          const mapped = flatMapResult.map(P);
          const tags2 = tmp2.tags;
        }
        const forResult = Symbol.for("react.early_return_sentinel");
      }
    : function WidgetTags(tags) {
        tags = tags.tags;
        const tmp = closure_13();
        closure_0 = tmp;
        if (tags == null) {
          tags = [];
        }
        const flatMapResult = tags.flatMap((tag) => {
          const widgetGameTagMetadata = closure_0(dependencyMap[14]).getWidgetGameTagMetadata(tag);
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
              const items = [options(meta.icon, { size: "xs", color: nativeDefault.colors.TEXT_MUTED })];
              const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
              items[1] = options(Text_Text.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: meta.getText(),
              });
              obj.children = items;
              return collapsed(timestampProducer, obj, meta.tag);
            }),
          };
          tmp2 = closure_9(closure_6, obj);
        }
        return tmp2;
      },
);
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function FavoriteGameItem(arg0) {
        const cResult = c.c(39);
        ({ game, coverWidth } = arg0);
        ({ userId, disableInteraction } = arg0);
        const tmp4 = closure_13();
        ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
        let tmp6;
        if (!disableInteraction) {
          tmp6 = closure_14(userId, game.gameId);
        }
        _require = tmp6;
        if (cResult[0] !== tmp6) {
          const fn = function l() {
            let tmp;
            if (closure_0 != null) {
              tmp = closure_0();
            }
            return tmp;
          };
          cResult[0] = tmp6;
          cResult[1] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] !== coverWidth) {
          const obj2 = { width: coverWidth };
          cResult[2] = coverWidth;
          cResult[3] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.favoriteCover) {
          if (cResult[5] === tmp9) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] === coverImageUrl) {
            if (cResult[8] === tmp10) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] === gameName) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp8) {
                  if (cResult[15] !== tmp6) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                    cResult[15] = tmp6;
                    cResult[16] = M;
                  } else {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  if (cResult[17] !== gameName) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                    const obj3 = {
                      variant: "text-md/semibold",
                      color: "text-default",
                      lineClamp: 2,
                      children: gameName,
                    };
                    const tmp22 = options(Text_Text.Text, obj3);
                    cResult[17] = gameName;
                    cResult[18] = tmp22;
                  } else {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  if (cResult[19] === gameName) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  const obj4 = {
                    onPress: M,
                    disabled: null == tmp6,
                    accessibilityRole: "button",
                    accessibilityLabel: gameName,
                    children: tmp21,
                  };
                  const tmp26 = options(hasOwnProperty, obj4);
                  cResult[19] = gameName;
                  cResult[20] = M;
                  cResult[21] = null == tmp6;
                  cResult[22] = tmp21;
                  cResult[23] = tmp26;
                }
              }
            }
            const obj5 = {
              onPress: tmp7,
              disabled: tmp8,
              accessibilityRole: "button",
              accessibilityLabel: gameName,
              children: tmp11,
            };
            const tmp18 = options(hasOwnProperty, obj5);
            cResult[10] = gameName;
            cResult[11] = tmp7;
            cResult[12] = tmp8;
            cResult[13] = tmp11;
            cResult[14] = tmp18;
          }
          const obj6 = { uri: coverImageUrl, style: tmp10 };
          const tmp14 = options(closure_16, obj6);
          cResult[7] = coverImageUrl;
          cResult[8] = tmp10;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
        const items = [tmp4.favoriteCover, tmp9];
        cResult[4] = tmp4.favoriteCover;
        cResult[5] = tmp9;
        cResult[6] = items;
        tmp10 = items;
        const tmp5 = useGameNameAndCoverImageDefault(game.gameId);
      }
    : function FavoriteGameItem(game) {
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
          children: null,
        };
        const obj3 = { uri: tmp4.coverImageUrl, style: null };
        const items = [tmp.favoriteCover, { width: coverWidth }];
        obj3.style = items;
        obj2.children = options(closure_16, obj3);
        const items1 = [options(hasOwnProperty, obj2)];
        const obj4 = { style: tmp.favoriteDetails, children: null };
        const items2 = [
          options(hasOwnProperty, {
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
            children: options(Text_Text.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              lineClamp: 2,
              children: gameName,
            }),
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
          children: options(Text_Text.Text, {
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
        let tmp6Result = !isNullOrEmptyResult;
        if (!isNullOrEmptyResult) {
          const obj7 = { style: tmp.comment, children: null };
          const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
          const items3 = [options(QuoteIcon.QuoteIcon, obj8)];
          const obj9 = {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 3,
            style: tmp.commentText,
            children: game.comment,
          };
          items3[1] = options(Text_Text.Text, obj9);
          obj7.children = items3;
          tmp6Result = collapsed(timestampProducer, obj7);
        }
        items2[1] = tmp6Result;
        items2[2] = options(closure_17, { tags: game.tags });
        obj4.children = items2;
        items1[1] = collapsed(timestampProducer, obj4);
        obj.children = items1;
        return collapsed(timestampProducer, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameListRow(arg0) {
        const cResult = c.c(34);
        ({ game, coverWidth } = arg0);
        ({ userId, disableInteraction } = arg0);
        const tmp4 = closure_13();
        ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
        let tmp6;
        if (!disableInteraction) {
          tmp6 = closure_14(userId, game.gameId);
        }
        _require = tmp6;
        if (cResult[0] !== tmp6) {
          const fn = function l() {
            let tmp;
            if (closure_0 != null) {
              tmp = closure_0();
            }
            return tmp;
          };
          cResult[0] = tmp6;
          cResult[1] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] !== coverWidth) {
          const obj2 = { width: coverWidth };
          cResult[2] = coverWidth;
          cResult[3] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.listCover) {
          if (cResult[5] === tmp9) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] === coverImageUrl) {
            if (cResult[8] === tmp10) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] === gameName) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp8) {
                  if (cResult[15] !== tmp6) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                    cResult[15] = tmp6;
                    cResult[16] = M;
                  } else {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  if (cResult[17] !== gameName) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                    const obj3 = { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName };
                    const tmp22 = options(Text_Text.Text, obj3);
                    cResult[17] = gameName;
                    cResult[18] = tmp22;
                  } else {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  if (cResult[19] === gameName) {
                    class M {
                      constructor() {
                        tmp = undefined;
                        if (closure_0 != null) {
                          tmp = closure_0();
                        }
                        return tmp;
                      }
                    }
                  }
                  const obj4 = {
                    onPress: M,
                    disabled: null == tmp6,
                    accessibilityRole: "button",
                    accessibilityLabel: gameName,
                    children: tmp21,
                  };
                  const tmp26 = options(hasOwnProperty, obj4);
                  cResult[19] = gameName;
                  cResult[20] = M;
                  cResult[21] = null == tmp6;
                  cResult[22] = tmp21;
                  cResult[23] = tmp26;
                }
              }
            }
            const obj5 = {
              onPress: tmp7,
              disabled: tmp8,
              accessibilityRole: "button",
              accessibilityLabel: gameName,
              children: tmp11,
            };
            const tmp18 = options(hasOwnProperty, obj5);
            cResult[10] = gameName;
            cResult[11] = tmp7;
            cResult[12] = tmp8;
            cResult[13] = tmp11;
            cResult[14] = tmp18;
          }
          const obj6 = { uri: coverImageUrl, style: tmp10 };
          const tmp14 = options(closure_16, obj6);
          cResult[7] = coverImageUrl;
          cResult[8] = tmp10;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
        const items = [tmp4.listCover, tmp9];
        cResult[4] = tmp4.listCover;
        cResult[5] = tmp9;
        cResult[6] = items;
        tmp10 = items;
        const tmp5 = useGameNameAndCoverImageDefault(game.gameId);
      }
    : function GameListRow(game) {
        game = game.game;
        closure_0 = undefined;
        ({ userId, coverWidth, disableInteraction } = game);
        let tmp = closure_13();
        const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
        const gameName = tmp3.gameName;
        let tmp4;
        if (!disableInteraction) {
          tmp4 = closure_14(userId, game.gameId);
        }
        closure_0 = tmp4;
        const obj = { style: tmp.listRow, children: null };
        const obj2 = {
          onPress() {
            let tmp;
            if (closure_0 != null) {
              tmp = closure_0();
            }
            return tmp;
          },
          disabled: null == tmp4,
          accessibilityRole: "button",
          accessibilityLabel: gameName,
          children: null,
        };
        const obj3 = { uri: tmp3.coverImageUrl, style: null };
        const items = [tmp.listCover, { width: coverWidth }];
        obj3.style = items;
        obj2.children = options(closure_16, obj3);
        const items1 = [options(hasOwnProperty, obj2)];
        const obj4 = { style: tmp.listDetails, children: null };
        const items2 = [
          options(hasOwnProperty, {
            onPress() {
              let tmp;
              if (closure_0 != null) {
                tmp = closure_0();
              }
              return tmp;
            },
            disabled: null == tmp4,
            accessibilityRole: "button",
            accessibilityLabel: gameName,
            children: options(Text_Text.Text, {
              variant: "text-md/medium",
              color: "text-default",
              lineClamp: 2,
              children: gameName,
            }),
          }),
          options(closure_17, { tags: game.tags }),
        ];
        obj4.children = items2;
        items1[1] = collapsed(timestampProducer, obj4);
        obj.children = items1;
        return collapsed(timestampProducer, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameGridCover(arg0) {
        const cResult = c.c(15);
        ({ game, coverWidth } = arg0);
        ({ userId, disableInteraction } = arg0);
        const tmp2 = closure_13();
        ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
        let tmp4;
        if (!disableInteraction) {
          tmp4 = closure_14(userId, game.gameId);
        }
        closure_0 = tmp4;
        if (cResult[0] !== tmp4) {
          const fn = function l() {
            let tmp;
            if (closure_0 != null) {
              tmp = closure_0();
            }
            return tmp;
          };
          cResult[0] = tmp4;
          cResult[1] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== coverWidth) {
          const obj2 = { width: coverWidth };
          cResult[2] = coverWidth;
          cResult[3] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp2.gridCover) {
          if (cResult[5] === tmp7) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] === coverImageUrl) {
            if (cResult[8] === tmp8) {
              let tmp9 = cResult[9];
            }
            if (cResult[10] === gameName) {
              if (cResult[11] === tmp5) {
                if (cResult[12] === tmp6) {
                  if (cResult[13] === tmp9) {
                    let tmp13 = cResult[14];
                  }
                  return tmp13;
                }
              }
            }
            const obj3 = {
              onPress: tmp5,
              disabled: tmp6,
              accessibilityRole: "button",
              accessibilityLabel: gameName,
              children: tmp9,
            };
            const tmp16 = options(hasOwnProperty, obj3);
            cResult[10] = gameName;
            cResult[11] = tmp5;
            cResult[12] = tmp6;
            cResult[13] = tmp9;
            cResult[14] = tmp16;
            tmp13 = tmp16;
          }
          const obj4 = { uri: coverImageUrl, style: tmp8 };
          const tmp12 = options(closure_16, obj4);
          cResult[7] = coverImageUrl;
          cResult[8] = tmp8;
          cResult[9] = tmp12;
          tmp9 = tmp12;
        }
        const items = [tmp2.gridCover, tmp7];
        cResult[4] = tmp2.gridCover;
        cResult[5] = tmp7;
        cResult[6] = items;
        tmp8 = items;
        const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
      }
    : function GameGridCover(game) {
        game = game.game;
        closure_0 = undefined;
        ({ userId, coverWidth, disableInteraction } = game);
        let tmp = closure_13();
        ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
        let tmp3;
        if (!disableInteraction) {
          tmp3 = closure_14(userId, game.gameId);
        }
        closure_0 = tmp3;
        const obj = {
          onPress() {
            let tmp;
            if (closure_0 != null) {
              tmp = closure_0();
            }
            return tmp;
          },
          disabled: null == tmp3,
          accessibilityRole: "button",
          accessibilityLabel: gameName,
          children: null,
        };
        const obj2 = { uri: coverImageUrl, style: null };
        const items = [tmp.gridCover, { width: coverWidth }];
        obj2.style = items;
        obj.children = options(closure_16, obj2);
        return options(hasOwnProperty, obj);
      },
);
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function WidgetSection(userId) {
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
          const fn = function v() {
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
        if (userId(7310).WidgetType.FAVORITE_GAMES === type) {
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
            tmp56 = closure_9(closure_18, obj2);
          }
          cResult[5] = tmp12;
          cResult[6] = result;
          cResult[7] = disableInteraction;
          cResult[8] = arr2;
          cResult[9] = userId;
          num4 = 10;
          cResult[10] = tmp56;
        } else {
          if (tmp(7310).WidgetType.CURRENT_GAMES === type) {
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
                            children: null,
                          };
                          const intl2 = tmp(1126).intl;
                          if (tmp10) {
                            let stringResult = intl2.string(tmp(1126).t["6MwJo/"]);
                          } else {
                            const obj5 = { numberOfItems: arr2.length - 2 };
                            stringResult = intl2.formatToPlainString(tmp(1126).t.zr0Y5R, obj5);
                          }
                          const obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
                          obj4.children = closure_9(tmp(5086).Text, obj6);
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
              const tmp39 =
                tmp12 > num4 &&
                arr5.map((game) =>
                  options(closure_19, { userId, game, coverWidth: result, disableInteraction }, game.gameId),
                );
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
            if (tmp(7310).WidgetType.WANT_TO_PLAY_GAMES !== type) {
              if (tmp(7310).WidgetType.PLAYED_GAMES !== type) {
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
                            children: null,
                          };
                          const intl = tmp(1126).intl;
                          if (tmp10) {
                            let stringResult1 = intl.string(tmp(1126).t["6MwJo/"]);
                          } else {
                            const obj10 = { numberOfItems: arr2.length - 6 };
                            stringResult1 = intl.formatToPlainString(tmp(1126).t.zr0Y5R, obj10);
                          }
                          const obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
                          obj9.children = closure_9(tmp(5086).Text, obj11);
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
              const tmp20 =
                tmp12 > num4 &&
                arr3.map((game) =>
                  options(closure_20, { userId, game, coverWidth: result, disableInteraction }, game.gameId),
                );
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
            const widgetTitle = tmp(13093).getWidgetTitle(widget);
            cResult[51] = widget;
            cResult[52] = widgetTitle;
            let tmp60 = widgetTitle;
            const tmpResult2 = tmp(13093);
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
                const tmp72 = closure_9(disableInteraction(6890), obj14);
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
            tmp63 = closure_9(disableInteraction(13097), obj15);
          }
          cResult[53] = disableInteraction;
          cResult[54] = stateFromStores;
          cResult[55] = userId;
          cResult[56] = widget;
          cResult[57] = tmp63;
          tmp62 = tmp63;
        }
        const tmp11 = _slicedToArray(noop.useState(0), 2);
      }
    : function WidgetSection(style) {
        const userId = style.userId;
        const widget = style.widget;
        const disableInteraction = style.disableInteraction;
        _slicedToArray = undefined;
        noop = undefined;
        const tmp = closure_13();
        const items = [AuthenticationStore];
        const stateFromStores = userId(disableInteraction[19]).useStateFromStores(
          items,
          () => AuthenticationStore.getId() === userId,
        );
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
            tmp33 = closure_9(closure_18, obj2);
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
            mapped = substr.map((game) =>
              options(closure_19, { userId, game, coverWidth, disableInteraction }, game.gameId),
            );
          }
          obj3.children = mapped;
          const items2 = [closure_9(closure_6, obj3)];
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
              children: null,
            };
            const intl2 = tmp2(tmp3[22]).intl;
            if (tmp6) {
              let stringResult = intl2.string(tmp2(tmp3[22]).t["6MwJo/"]);
            } else {
              const obj6 = { numberOfItems: memo.length - 2 };
              stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj6);
            }
            const obj7 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
            obj5.children = closure_9(tmp2(tmp3[15]).Text, obj7);
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
            mapped1 = substr1.map((game) =>
              options(closure_20, { userId, game, coverWidth, disableInteraction }, game.gameId),
            );
          }
          obj8.children = mapped1;
          const items3 = [closure_9(closure_6, obj8)];
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
              children: null,
            };
            const intl = tmp2(tmp3[22]).intl;
            if (tmp6) {
              let stringResult1 = intl.string(tmp2(tmp3[22]).t["6MwJo/"]);
            } else {
              const obj11 = { numberOfItems: memo.length - 6 };
              stringResult1 = intl.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj11);
            }
            const obj12 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
            obj10.children = closure_9(tmp2(tmp3[15]).Text, obj12);
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
          children: tmp13Result,
        });
        return closure_9(tmp9Result, obj13);
      },
);
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WidgetRenderer(arg0) {
      let tmp2 = dependencyMap;
      const cResult = c.c(12);
      ({ userId, widget, cardStyle } = arg0);
      if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
        if (cResult[0] === cardStyle) {
          if (cResult[1] === userId) {
          }
        }
        const obj2 = { userId, widget, cardStyle };
        tmp2 = options(UserProfileApplicationWidgetCardDefault, obj2);
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
        const tmp11 = options(UserProfilePersonalWidgetCardDefault, obj3);
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
        const tmp7 = options(memoResult, obj4);
        cResult[8] = cardStyle;
        cResult[9] = userId;
        cResult[10] = widget;
        cResult[11] = tmp7;
        tmp4 = tmp7;
      }
    }
  : function WidgetRenderer(arg0) {
      ({ userId, widget, cardStyle } = arg0);
      if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
        const obj2 = { userId, widget, cardStyle };
        let tmp3Result = options(UserProfileApplicationWidgetCardDefault, obj2);
      } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
        const obj3 = { userId, widget, cardStyle };
        tmp3Result = options(UserProfilePersonalWidgetCardDefault, obj3);
      } else {
        const obj = { userId, widget, cardStyle };
        tmp3Result = options(memoResult, obj);
      }
      return tmp3Result;
    };
ReactCompilerGating = fn(558);
let obj14 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileWidgetsBoard(userId) {
      const cResult = userId(576).c(10);
      userId = userId.userId;
      ({ isVisible, cardStyle } = userId);
      const tmp5 = closure_13();
      const obj = userId(576);
      const tmp4 = undefined === isVisible || isVisible;
      const displayableBoardWidgets = userId(13211).useDisplayableBoardWidgets(userId);
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
          return options(closure_22, { userId, widget, cardStyle }, widget.getUniqueKey());
        };
        cResult[4] = cardStyle;
        cResult[5] = userId;
        cResult[6] = fn;
        tmp8 = fn;
      }
      const tmpResult = userId(13211);
    }
  : function UserProfileWidgetsBoard(userId) {
      userId = userId.userId;
      let flag = userId.isVisible;
      if (flag === undefined) {
        flag = true;
      }
      const cardStyle = userId.cardStyle;
      const tmp = closure_13();
      const displayableBoardWidgets = userId(13211).useDisplayableBoardWidgets(userId);
      closure_15(flag, displayableBoardWidgets.length > 0);
      let tmp3 = null;
      if (0 !== displayableBoardWidgets.length) {
        const obj2 = {
          style: tmp.board,
          children: displayableBoardWidgets.map((widget) =>
            options(closure_22, { userId, widget, cardStyle }, widget.getUniqueKey()),
          ),
        };
        tmp3 = closure_9(closure_6, obj2);
      }
      return tmp3;
    };
export const WidgetSection = memoResult;
