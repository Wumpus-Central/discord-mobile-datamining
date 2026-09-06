// === Module 9185: GuildProfileActionSheet ===

// Module 9185 (GuildProfileActionSheet)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleUpdateStart" /* 9065 */;
import { GuildProfileFetchStatus } from "handleUpdateStart" /* 9065 */;
import { INVALID_ACCESS_ERROR_CODE } from "BannerPalettePresets" /* 9186 */;
import { VerticalGradient } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, scrollView: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let analyticsLocations;
  let token1;
  ({ context, inviteKey } = guildId);
  const tmp = callback3();
  let obj = guildId(analyticsLocations[9]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const fetchStatus = guildProfile.fetchStatus;
  obj1 = guildId(analyticsLocations[10]);
  let items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getErrorCode(guildId));
  let obj2 = guildId(analyticsLocations[11]);
  const token = obj2.useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, fetchGuildProfile(analyticsLocations[8])());
  let obj3 = guildId(analyticsLocations[12]);
  bottomSheetRef = obj3.useBottomSheetRef();
  ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef);
  const tmp4 = fetchGuildProfile(analyticsLocations[8])();
  analyticsLocations = fetchGuildProfile(analyticsLocations[13])(fetchGuildProfile(analyticsLocations[14]).GUILD_PROFILE).analyticsLocations;
  let obj4 = guildId(analyticsLocations[11]);
  token1 = obj4.useToken(fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW);
  let obj5 = token1;
  const items1 = [guildId, analyticsLocations];
  const effect = token1.useEffect(() => {
    const result = guildId(analyticsLocations[15]).trackGuildProfileViewed(guildId, analyticsLocations);
  }, items1);
  const items2 = [fetchGuildProfile];
  const items3 = [fetchGuildProfile];
  const callback = token1.useCallback(() => {
    fetchGuildProfile(true);
  }, items2);
  const effect1 = token1.useEffect(() => {
    fetchGuildProfile();
  }, items3);
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          let tmp19 = callback(tmp2(tmp3[16]), {});
          obj = { size: "lg", text: null, onPress: null };
          const intl2 = tmp5(tmp3[18]).intl;
          obj[1] = intl2.string(tmp5(tmp3[18]).t.cpT0Cq);
          obj[2] = bottomSheetClose;
          let tmp18 = callback(tmp5(tmp3[17]).Button, obj);
          let tmp20 = callback;
        }
      }
      if (null == guildProfile) {
        obj = { onRetry: null };
        obj[0] = callback;
        tmp19 = callback(tmp2(tmp3[19]), obj);
        obj1 = { size: "lg", text: null, onPress: null };
        const intl = tmp5(tmp3[18]).intl;
        obj1[1] = intl.string(tmp5(tmp3[18]).t.cpT0Cq);
        obj1[2] = bottomSheetClose;
        tmp18 = callback(tmp5(tmp3[17]).Button, obj1);
        tmp20 = callback;
      } else {
        obj2 = { guildProfile: null };
        obj2[0] = guildProfile;
        obj3 = { profile: null, context: null, inviteKey: null };
        obj3[0] = guildProfile;
        obj3[1] = context;
        obj3[2] = inviteKey;
        tmp18 = callback(tmp2(tmp3[21]), obj3);
        tmp19 = callback(tmp2(tmp3[20]), obj2);
        tmp20 = callback;
        const tmp17 = callback(tmp2(tmp3[20]), obj2);
      }
    }
    const items4 = [token1];
    const memo = obj5.useMemo(() => {
      const obj = fetchGuildProfile(analyticsLocations[22])(token1);
      const items = [fetchGuildProfile(analyticsLocations[22])(token1).alpha(0).hex(), token1];
      return items;
    }, items4);
    obj4 = { ref: null, scrollable: true, handleDisabled: true, footer: null, children: null };
    obj4[0] = bottomSheetRef;
    obj5 = { start: null, end: null, style: null, colors: null, children: null };
    obj5[0] = VerticalGradient.START;
    obj5[1] = { x: 0, y: 0.5 };
    obj5[2] = tmp.footerContainer;
    obj5[3] = memo;
    obj5[4] = tmp18;
    obj4[3] = tmp20(tmp2(tmp3[24]), obj5);
    const obj6 = { enableFooterMarginAdjustment: true, style: null, children: null };
    obj6[1] = tmp.scrollView;
    obj6[2] = tmp19;
    const items5 = [tmp20(tmp5(tmp3[25]).BottomSheetScrollView, obj6), ];
    const obj7 = { variant: "floating", tabStyle: null, onPress: null };
    const obj8 = { backgroundColor: null };
    obj8[0] = token;
    obj7[1] = obj8;
    obj7[2] = bottomSheetClose;
    items5[1] = tmp20(tmp5(tmp3[26]).ActionSheetHeaderBar, obj7);
    obj4[4] = items5;
    return callback2(tmp5(tmp3[23]).BottomSheet, obj4);
  }
  const tmp10 = fetchGuildProfile(analyticsLocations[13]);
  tmp19 = callback(closure_4, { style: tmp.loadingContainer, children: callback(closure_5, { animating: true, size: "large" }) });
  tmp18 = null;
  tmp20 = callback;
};