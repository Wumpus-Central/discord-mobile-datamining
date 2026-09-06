// discord_app/modules/game_profile/native/components/GameProfileView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import GameProfileHeaderDefault from "GameProfileHeader.tsx";
import GameProfileMediaDefault from "GameProfileMedia.tsx";
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
fn(4560);
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
  maxWidth: 520,
  alignSelf: "center",
  width: "100%",
};
let obj1 = {
  flexDirection: "column",
  paddingVertical: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
  maxWidth: 520,
  alignSelf: "center",
  width: "100%",
};
createStyles.buttonsContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  ({ game, viewId, source, trackAction, closeModal, websiteButtons, onStoreLinksMeasured } = arg0);
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = closure_7();
  noop.useRef(null);
  noop.useRef(null);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  closure_3 = noop.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (onStoreLinksMeasured != null) {
        tmp2(current + current2);
      }
    }
  }, items);
  let obj = { value: analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  const items1 = [
    hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }),
  ];
  obj = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      closure_3();
    },
    children: null,
  };
  const items2 = [hasOwnProperty(GameProfileMediaDefault, { game, viewId, source, trackAction }), , , , , , , , , ,];
  let tmp5Result = websiteButtons.length > 0;
  if (tmp5Result) {
    const obj1 = {
      onLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        closure_2.current = layout.y + layout.height;
        closure_3();
      },
      children: null,
    };
    const obj2 = { game, websiteButtons, trackAction };
    obj1.children = tmp5(tmp2(8721), obj2);
    tmp5Result = tmp5(tmp7, obj1);
  }
  items2[1] = tmp5Result;
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
    invite,
    closeModal,
    trackAction,
    scrollOffsetRef,
  });
  items2[7] = hasOwnProperty(GameProfileShopCarouselDefault, { game, closeModal, trackAction });
  items2[8] = hasOwnProperty(GameProfileSimilarGamesDefault, { gameId: game.id, trackAction });
  items2[9] = hasOwnProperty(GameProfileDetailsDefault, { game, viewId, source, trackAction });
  const obj5 = { style: tmp.buttonsContainer, children: null };
  const items3 = [
    hasOwnProperty(GameProfileGameClaimCtaDefault, { game, trackAction }),
    hasOwnProperty(GameProfileReportButtonDefault, { applicationId: game.id, trackAction }),
  ];
  obj5.children = items3;
  items2[10] = timestampProducer(View, obj5);
  obj.children = items2;
  items1[1] = timestampProducer(View, obj);
  obj.children = items1;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
