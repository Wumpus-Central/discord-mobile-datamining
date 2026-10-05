// discord_app/modules/game_profile/native/components/GameProfileView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import GameProfileConstants from "../../GameProfileConstants.tsx";
import useGameProfileInvite from "../../hooks/useGameProfileInvite.tsx";
import GameProfileHeaderDefault from "GameProfileHeader.tsx";
import GameProfileMediaDefault from "GameProfileMedia.tsx";
import GameProfileStoreLinksDefault from "GameProfileStoreLinks.tsx";
import GameProfileReviewsDefault from "GameProfileReviews.tsx";
import GameProfileSummaryDefault from "GameProfileSummary.tsx";
import GameProfileLinkAccountDefault from "GameProfileLinkAccount.tsx";
import GameProfileCommunityDefault from "GameProfileCommunity.tsx";
import GameProfileAnnouncementsDefault from "GameProfileAnnouncements.tsx";
import GameProfileShopCarouselDefault from "GameProfileShopCarousel.tsx";
import GameProfileSimilarGamesDefault from "GameProfileSimilarGames.tsx";
import GameProfileDetailsDefault from "GameProfileDetails.tsx";
import GameProfileGameClaimCtaDefault from "GameProfileGameClaimCta.tsx";
import GameProfileReportButtonDefault from "GameProfileReportButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let dependencyMap, importDefault, tmp2Result;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const MOBILE_GAME_PROFILE_MAX_WIDTH = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: obj3, buttonsContainer: obj4 };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingBottom: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "column",
  paddingVertical: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
  maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
obj4 = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onHeaderHeightMeasured) => {
      let closeModal;
      let game;
      let invite;
      let onGuildInviteResolved;
      let onStoreLinksMeasured;
      let scrollY;
      let source;
      let tmp9;
      let trackAction;
      let viewId;
      let websiteButtons;
      const tmp2 = dependencyMap;
      const obj = react2;
      const cResult = obj.c(87);
      ({
        game,
        invite,
        viewId,
        source,
        trackAction,
        onGuildInviteResolved,
        closeModal,
        scrollY,
        websiteButtons,
        onStoreLinksMeasured,
      } = onHeaderHeightMeasured);
      onHeaderHeightMeasured = onHeaderHeightMeasured.onHeaderHeightMeasured;
      closure_7();
      importDefault = react.useRef(null);
      dependencyMap = react.useRef(null);
      const tmp6 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp6(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
      if (cResult[0] !== game) {
        const tmpResult = useGameProfileInvite;
        const result = tmpResult.hasGameProfileDiscordWebsite(game);
        cResult[0] = game;
        cResult[1] = result;
      }
      if (cResult[2] !== onStoreLinksMeasured) {
        class R {
          constructor() {
            current = closure_1.current;
            current2 = closure_2.current;
            tmp = null != current && null != current2;
            if (tmp) {
              if (onStoreLinksMeasured != null) {
                tmp2Result = tmp2(current + current2);
              }
            }
            return;
          }
        }
        cResult[2] = onStoreLinksMeasured;
        cResult[3] = R;
        tmp9 = R;
      } else {
        class R {
          constructor() {
            current = closure_1.current;
            current2 = closure_2.current;
            tmp = null != current && null != current2;
            if (tmp) {
              if (onStoreLinksMeasured != null) {
                tmp2Result = tmp2(current + current2);
              }
            }
            return;
          }
        }
      }
      R = tmp9;
      if (cResult[4] === game) {
        class R {
          constructor() {
            current = closure_1.current;
            current2 = closure_2.current;
            tmp = null != current && null != current2;
            if (tmp) {
              if (onStoreLinksMeasured != null) {
                tmp2Result = tmp2(current + current2);
              }
            }
            return;
          }
        }
      }
      cResult[4] = game;
      cResult[5] = onHeaderHeightMeasured;
      cResult[6] = scrollY;
      cResult[7] = hasOwnProperty(GameProfileHeaderDefault, {
        game,
        scrollY,
        onHeightMeasured: onHeaderHeightMeasured,
      });
      hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured });
    }
  : (arg0) => {
      let closeModal;
      let game;
      let invite;
      let items1;
      let items2;
      let items3;
      let obj3;
      let obj6;
      let onGuildInviteResolved;
      let onHeaderHeightMeasured;
      let onStoreLinksMeasured;
      let scrollY;
      let source;
      let trackAction;
      let viewId;
      let websiteButtons;
      ({ game, viewId, source, trackAction, closeModal, scrollY, websiteButtons, onStoreLinksMeasured } = arg0);
      ({ invite, onGuildInviteResolved, onHeaderHeightMeasured } = arg0);
      let tmp = closure_7();
      let closure_1 = react.useRef(null);
      let closure_2 = react.useRef(null);
      const tmp4 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp4(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
      const items = [onStoreLinksMeasured];
      const obj = useGameProfileInvite;
      const result = obj.hasGameProfileDiscordWebsite(game);
      let closure_3 = react.useCallback(() => {
        const current = ref.current;
        const current2 = ref2.current;
        const tmp = null != current && null != current2;
        if (tmp) {
          if (onStoreLinksMeasured != null) {
            tmp2(current + current2);
          }
        }
      }, items);
      const obj2 = { value: analyticsLocations, children: metroRequire(View, obj3) };
      obj3 = { style: tmp.container, children: items1 };
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      items1 = [hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured })];
      const obj4 = {
        style: tmp.body,
        onLayout(nativeEvent) {
          ref.current = nativeEvent.nativeEvent.layout.y;
          closure_3();
        },
        children: items2,
      };
      items2 = [hasOwnProperty(GameProfileMediaDefault, { game, viewId, source, trackAction }), , , , , , , , , ,];
      let tmp6Result = websiteButtons.length > 0;
      if (tmp6Result) {
        const obj5 = {
          onLayout(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            ref2.current = layout.y + layout.height;
            closure_3();
          },
          children: hasOwnProperty(GameProfileStoreLinksDefault, obj6),
        };
        obj6 = { game, websiteButtons, trackAction };
        tmp6Result = hasOwnProperty(View, obj5);
      }
      items2[1] = tmp6Result;
      items2[2] = hasOwnProperty(GameProfileReviewsDefault, { game, trackAction });
      items2[3] = hasOwnProperty(GameProfileSummaryDefault, { game, viewId, source, trackAction });
      items2[4] = hasOwnProperty(GameProfileLinkAccountDefault, { game, analyticsLocations, trackAction });
      items2[5] = hasOwnProperty(GameProfileCommunityDefault, {
        closeModal,
        game,
        onInviteResolved: onGuildInviteResolved,
        trackAction,
      });
      const obj7 = { gameId: game.id, hasDiscordWebsite: result, invite, closeModal, trackAction, scrollY };
      items2[6] = hasOwnProperty(GameProfileAnnouncementsDefault, obj7);
      items2[7] = hasOwnProperty(GameProfileShopCarouselDefault, { game, closeModal, trackAction });
      const obj8 = { gameId: game.id, trackAction };
      items2[8] = hasOwnProperty(GameProfileSimilarGamesDefault, obj8);
      items2[9] = hasOwnProperty(GameProfileDetailsDefault, { game, viewId, source, trackAction });
      const obj9 = { style: tmp.buttonsContainer, children: items3 };
      items3 = [hasOwnProperty(GameProfileGameClaimCtaDefault, { game, trackAction })];
      const obj10 = { applicationId: game.id, trackAction };
      items3[1] = hasOwnProperty(GameProfileReportButtonDefault, obj10);
      items2[10] = metroRequire(View, obj9);
      items1[1] = metroRequire(View, obj4);
      return hasOwnProperty(AnalyticsLocationProvider, obj2);
    };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default tmp4;
