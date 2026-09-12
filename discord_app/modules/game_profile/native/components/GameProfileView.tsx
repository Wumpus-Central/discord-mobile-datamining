// discord_app/modules/game_profile/native/components/GameProfileView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
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
import noop from "../../../../../_runtime/metro/00019__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4636);
let createStyles = { container: null, body: null, buttonsContainer: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingBottom: nativeDefault.space.PX_16,
};
createStyles.container = createStyles;
createStyles.body = {
  flexDirection: "column",
  paddingVertical: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
  maxWidth: fn(8837).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
let obj1 = {
  flexDirection: "column",
  paddingVertical: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
  maxWidth: fn(8837).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
createStyles.buttonsContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  ({ game, viewId, source, trackAction, closeModal, scrollY, websiteButtons, onStoreLinksMeasured } = arg0);
  ({ invite, onGuildInviteResolved, onHeaderHeightMeasured } = arg0);
  const tmp = closure_7();
  noop.useRef(null);
  noop.useRef(null);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
  let obj = useGameProfileInvite;
  const items = [onStoreLinksMeasured];
  const result = obj.hasGameProfileDiscordWebsite(game);
  closure_3 = noop.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (onStoreLinksMeasured != null) {
        tmp2(current + current2);
      }
    }
  }, items);
  obj = { value: analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  const items1 = [
    hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }),
  ];
  const obj1 = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      closure_3();
    },
    children: null,
  };
  const items2 = [hasOwnProperty(GameProfileMediaDefault, { game, viewId, source, trackAction }), , , , , , , , , ,];
  let tmp6Result = websiteButtons.length > 0;
  if (tmp6Result) {
    const obj2 = {
      onLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        closure_2.current = layout.y + layout.height;
        closure_3();
      },
      children: null,
    };
    const obj3 = { game, websiteButtons, trackAction };
    obj2.children = hasOwnProperty(GameProfileStoreLinksDefault, obj3);
    tmp6Result = hasOwnProperty(View, obj2);
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
  items2[6] = hasOwnProperty(GameProfileAnnouncementsDefault, {
    gameId: game.id,
    hasDiscordWebsite: result,
    invite,
    closeModal,
    trackAction,
    scrollY,
  });
  items2[7] = hasOwnProperty(GameProfileShopCarouselDefault, { game, closeModal, trackAction });
  items2[8] = hasOwnProperty(GameProfileSimilarGamesDefault, { gameId: game.id, trackAction });
  items2[9] = hasOwnProperty(GameProfileDetailsDefault, { game, viewId, source, trackAction });
  const obj6 = { style: tmp.buttonsContainer, children: null };
  const items3 = [
    hasOwnProperty(GameProfileGameClaimCtaDefault, { game, trackAction }),
    hasOwnProperty(GameProfileReportButtonDefault, { applicationId: game.id, trackAction }),
  ];
  obj6.children = items3;
  items2[10] = timestampProducer(View, obj6);
  obj1.children = items2;
  items1[1] = timestampProducer(View, obj1);
  obj.children = items1;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
