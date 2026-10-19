// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import FavoritesHooks from "../../favorites/FavoritesHooks.tsx";
import openFavoritesGuildActionSheetDefault from "../../favorites/native/openFavoritesGuildActionSheet.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import useFavoritesGuildUnreadsDefault from "../../favorites/hooks/useFavoritesGuildUnreads.tsx";
import HomeDrawerFavoritesRow from "../../home_drawer/native/HomeDrawerFavoritesRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../favorites/FavoriteStore.tsx";

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const FAVORITES = fn(1087).FAVORITES;
const jsx = fn(21).jsx;
let c7 = "more-options";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarFavorites() {
        const cResult = c.c(17);
        const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
        const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FavoriteStore];
          const fn = function l() {
            return favoriteChannels.getFavoriteChannels();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = items;
          tmp7 = fn;
        } else {
          [tmp6, tmp7] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
        const tmpResult = initialize;
        ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
        if (cResult[2] !== badge) {
          const obj4 = { mentionCount: badge };
          cResult[2] = badge;
          cResult[3] = obj4;
          let tmp12 = obj4;
        } else {
          tmp12 = cResult[3];
        }
        const tmp11 = useFavoritesGuildUnreadsDefault(stateFromStores);
        ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault(tmp12));
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = {
            onPress() {
              transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
            },
            onLongPress() {
              openFavoritesGuildActionSheetDefault();
            },
          };
          cResult[4] = obj5;
          let tmp14 = obj5;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { accessibilityActions: null, onAccessibilityAction: null };
          const obj7 = { name, label: null };
          const intl = util.intl;
          obj7.label = intl.string(util.t.PdRCRg);
          const items1 = [obj7];
          obj6.accessibilityActions = items1;
          obj6.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
            if (nativeEvent.nativeEvent.actionName === name) {
              openFavoritesGuildActionSheetDefault();
            }
          };
          cResult[5] = obj6;
          let tmp15 = obj6;
        } else {
          tmp15 = cResult[5];
        }
        ({ accessibilityActions, onAccessibilityAction } = tmp15);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.wMWyci);
          cResult[6] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
          cResult[7] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[7];
        }
        const colors = nativeDefault.colors;
        const tmp22 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
        if (cResult[8] !== tmp22) {
          const obj8 = { color: tmp22 };
          const tmp25 = jsx(StarIcon.StarIcon, { color: tmp22 });
          cResult[8] = tmp22;
          cResult[9] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[9];
        }
        if (cResult[10] === badge2) {
          if (cResult[11] === cutouts) {
            if (cResult[12] === isFavoritesGuildSelected) {
              if (cResult[13] === guildsBarAnimatedWrapperStyles) {
                if (cResult[14] === tmp23) {
                  if (cResult[15] === unread) {
                    let tmp26 = cResult[16];
                  }
                  return tmp26;
                }
              }
            }
          }
        }
        const obj9 = {
          selected: isFavoritesGuildSelected,
          circle: false,
          unread,
          styles: guildsBarAnimatedWrapperStyles,
          cutouts,
          overState: "l",
          config: tmp14,
          accessibilityActions,
          onAccessibilityAction,
          label: tmp17,
          externalChildren: badge2,
          expandedChildren: tmp19,
          children: tmp23,
        };
        const tmp27 = jsx(GuildsBarAnimatedItemWrapperDefault, {
          selected: isFavoritesGuildSelected,
          circle: false,
          unread,
          styles: guildsBarAnimatedWrapperStyles,
          cutouts,
          overState: "l",
          config: tmp14,
          accessibilityActions,
          onAccessibilityAction,
          label: tmp17,
          externalChildren: badge2,
          expandedChildren: tmp19,
          children: tmp23,
        });
        cResult[10] = badge2;
        cResult[11] = cutouts;
        cResult[12] = isFavoritesGuildSelected;
        cResult[13] = guildsBarAnimatedWrapperStyles;
        cResult[14] = tmp23;
        cResult[15] = unread;
        cResult[16] = tmp27;
        tmp26 = tmp27;
        const tmp13 = useGuildsBarBottomRightBadgeDefault(tmp12);
      }
    : function GuildsBarFavorites() {
        const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
        const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
        let items = [FavoriteStore];
        const stateFromStores = initialize.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
        ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
        const tmp4 = useFavoritesGuildUnreadsDefault(stateFromStores);
        ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge }));
        const memo = noop.useMemo(
          () => ({
            onPress() {
              closure_1_1(17485)(closure_1_5);
            },
            onLongPress() {
              closure_1_1(17295)();
            },
          }),
          [],
        );
        const memo1 = noop.useMemo(() => {
          const obj = { accessibilityActions: null, onAccessibilityAction: null };
          const obj2 = { name, label: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t.PdRCRg);
          const items = [obj2];
          obj.accessibilityActions = items;
          obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
            if (nativeEvent.nativeEvent.actionName === name) {
              closure_1_1(dependencyMap[12])();
            }
          };
          return obj;
        }, []);
        ({ accessibilityActions, onAccessibilityAction } = memo1);
        const obj4 = {
          selected: isFavoritesGuildSelected,
          circle: false,
          unread,
          styles: guildsBarAnimatedWrapperStyles,
          cutouts,
          overState: "l",
          config: memo,
          accessibilityActions,
          onAccessibilityAction,
          label: 0,
          externalChildren: null,
          expandedChildren: null,
          children: null,
        };
        const tmp5 = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge });
        let intl = util.intl;
        obj4.label = intl.string(util.t.wMWyci);
        obj4.externalChildren = badge2;
        obj4.expandedChildren = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
        const colors = nativeDefault.colors;
        obj4.children = jsx(StarIcon.StarIcon, {
          color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
        });
        return jsx(GuildsBarAnimatedItemWrapperDefault, {
          selected: isFavoritesGuildSelected,
          circle: false,
          unread,
          styles: guildsBarAnimatedWrapperStyles,
          cutouts,
          overState: "l",
          config: memo,
          accessibilityActions,
          onAccessibilityAction,
          label: 0,
          externalChildren: null,
          expandedChildren: null,
          children: null,
        });
      },
);
