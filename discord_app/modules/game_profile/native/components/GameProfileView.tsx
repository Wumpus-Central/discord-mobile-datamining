// === Module 8839: GameProfileView ===

// Module 8839 (GameProfileView)
import nativeDefault from "native" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7269 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7289 */;
import useGameProfileInvite from "useGameProfileInvite" /* 8841 */;
import GameProfileHeaderDefault from "GameProfileHeader" /* 8842 */;
import GameProfileMediaDefault from "GameProfileMedia" /* 8846 */;
import GameProfileStoreLinksDefault from "GameProfileStoreLinks" /* 8849 */;
import GameProfileReviewsDefault from "GameProfileReviews" /* 8850 */;
import GameProfileSummaryDefault from "GameProfileSummary" /* 8860 */;
import GameProfileLinkAccountDefault from "GameProfileLinkAccount" /* 8861 */;
import GameProfileCommunityDefault from "GameProfileCommunity" /* 8866 */;
import GameProfileAnnouncementsDefault from "GameProfileAnnouncements" /* 8879 */;
import GameProfileShopCarouselDefault from "GameProfileShopCarousel" /* 8892 */;
import GameProfileSimilarGamesDefault from "GameProfileSimilarGames" /* 9007 */;
import GameProfileDetailsDefault from "GameProfileDetails" /* 9009 */;
import GameProfileGameClaimCtaDefault from "GameProfileGameClaimCta" /* 9028 */;
import GameProfileReportButtonDefault from "GameProfileReportButton" /* 9029 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingBottom: nativeDefault.space.PX_16 }, body: null, buttonsContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingBottom: nativeDefault.space.PX_16 };
obj2.body = { flexDirection: "column", paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32, maxWidth: fn(8840).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { flexDirection: "column", paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32, maxWidth: fn(8840).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj2.buttonsContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  ({ game, viewId, source, trackAction, closeModal, scrollY, websiteButtons, onStoreLinksMeasured } = arg0);
  ({ invite, onGuildInviteResolved, onHeaderHeightMeasured } = arg0);
  const tmp = closure_7();
  noop.useRef(null);
  noop.useRef(null);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  const result = useGameProfileInvite.hasGameProfileDiscordWebsite(game);
  closure_3 = noop.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (onStoreLinksMeasured != null) {
        tmp2(current + current2);
      }
    }
  }, items);
  const obj2 = { value: analyticsLocations, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items1 = [hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  const obj4 = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      closure_3();
    },
    children: null
  };
  const items2 = [hasOwnProperty(GameProfileMediaDefault, { game, viewId, source, trackAction }), , , , , , , , , , ];
  let tmp6Result = websiteButtons.length > 0;
  if (tmp6Result) {
    const obj5 = {
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          closure_2.current = layout.y + layout.height;
          closure_3();
        },
      children: null
    };
    const obj6 = { game, websiteButtons, trackAction };
    obj5.children = hasOwnProperty(GameProfileStoreLinksDefault, obj6);
    tmp6Result = hasOwnProperty(View, obj5);
  }
  items2[1] = tmp6Result;
  items2[2] = hasOwnProperty(GameProfileReviewsDefault, { game, trackAction });
  items2[3] = hasOwnProperty(GameProfileSummaryDefault, { game, viewId, source, trackAction });
  items2[4] = hasOwnProperty(GameProfileLinkAccountDefault, { game, analyticsLocations, trackAction });
  items2[5] = hasOwnProperty(GameProfileCommunityDefault, { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = hasOwnProperty(GameProfileAnnouncementsDefault, { gameId: game.id, hasDiscordWebsite: result, invite, closeModal, trackAction, scrollY });
  items2[7] = hasOwnProperty(GameProfileShopCarouselDefault, { game, closeModal, trackAction });
  items2[8] = hasOwnProperty(GameProfileSimilarGamesDefault, { gameId: game.id, trackAction });
  items2[9] = hasOwnProperty(GameProfileDetailsDefault, { game, viewId, source, trackAction });
  const obj9 = { style: tmp.buttonsContainer, children: null };
  const items3 = [hasOwnProperty(GameProfileGameClaimCtaDefault, { game, trackAction }), hasOwnProperty(GameProfileReportButtonDefault, { applicationId: game.id, trackAction })];
  obj9.children = items3;
  items2[10] = timestampProducer(View, obj9);
  obj4.children = items2;
  items1[1] = timestampProducer(View, obj4);
  obj3.children = items1;
  obj2.children = timestampProducer(View, obj3);
  return hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
};