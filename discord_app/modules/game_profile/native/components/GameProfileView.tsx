// discord_app/modules/game_profile/native/components/GameProfileView.tsx
import ThemesDefault from "Themes" /* 712 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import GameProfileHeaderDefault from "GameProfileHeader" /* 9130 */;
import ImageItemDefault from "ImageItem" /* 9133 */;
import SteamReviewRowDefault from "SteamReviewRow" /* 9135 */;
import GameProfileSummaryDefault from "GameProfileSummary" /* 9145 */;
import GameProfileLinkAccountDefault from "GameProfileLinkAccount" /* 9146 */;
import GameProfileCommunityServerDefault from "GameProfileCommunityServer" /* 9149 */;
import EmbedAnnouncementCardDefault from "EmbedAnnouncementCard" /* 9162 */;
import HorizontalSpacingDefault from "HorizontalSpacing" /* 9171 */;
import SpacerDefault from "Spacer" /* 12011 */;
import GameProfileWebsiteButtonDefault from "GameProfileWebsiteButton" /* 12013 */;
import GameProfileGameClaimCtaDefault from "GameProfileGameClaimCta" /* 12030 */;
import GameProfileReportButtonDefault from "GameProfileReportButton" /* 12031 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, body: null, buttonsContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
let obj1 = { flexDirection: "column", paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
createCacheKey[2] = { flexDirection: "column", gap: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "column", gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  ({ game, viewId, source, trackAction, closeModal, websiteButtons, onStoreLinksMeasured } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let React;
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = callback2();
  importDefault = React.useRef(null);
  dependencyMap = React.useRef(null);
  const analyticsLocations = contextDefault(QUICK_SWITCHERDefault.GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  React = React.useCallback(() => {
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
  const items1 = [callback(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  obj = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      callback();
    },
    children: null
  };
  const items2 = [callback(ImageItemDefault, { game, viewId, source, trackAction }), , , , , , , , , , ];
  let tmp5Result = websiteButtons.length > 0;
  if (tmp5Result) {
    obj1 = { onLayout: null, children: null };
    obj1[0] = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      closure_2.current = layout.y + layout.height;
      callback();
    };
    const obj2 = { game: null, websiteButtons: null, trackAction: null };
    obj2[0] = game;
    obj2[1] = websiteButtons;
    obj2[2] = trackAction;
    obj1[1] = tmp5(tmp2(9134), obj2);
    tmp5Result = tmp5(tmp7, obj1);
  }
  items2[1] = tmp5Result;
  items2[2] = callback(SteamReviewRowDefault, { game, trackAction });
  items2[3] = callback(GameProfileSummaryDefault, { game, viewId, source, trackAction });
  items2[4] = callback(GameProfileLinkAccountDefault, { game, analyticsLocations, trackAction });
  items2[5] = callback(GameProfileCommunityServerDefault, { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = callback(EmbedAnnouncementCardDefault, { gameId: game.id, invite, closeModal, trackAction, scrollOffsetRef });
  items2[7] = callback(HorizontalSpacingDefault, { game, closeModal, trackAction });
  items2[8] = callback(SpacerDefault, { gameId: game.id, trackAction });
  items2[9] = callback(GameProfileWebsiteButtonDefault, { game, viewId, source, trackAction });
  const obj5 = { style: tmp.buttonsContainer, children: null };
  const items3 = [callback(GameProfileGameClaimCtaDefault, { game, trackAction }), callback(GameProfileReportButtonDefault, { applicationId: game.id, trackAction })];
  obj5[1] = items3;
  items2[10] = closure_6(View, obj5);
  obj[2] = items2;
  items1[1] = closure_6(View, obj);
  obj[1] = items1;
  obj[1] = closure_6(View, obj);
  return callback(onStoreLinksMeasured(7139).AnalyticsLocationProvider, obj);
};