// === Module 9185: GuildProfileActionSheet ===

// Module 9185 (GuildProfileActionSheet)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9188 */;
import noop from "module_19" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9065 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = fn(9186).INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, scrollView: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.scrollView = createStyles;
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let analyticsLocations;
  ({ context, inviteKey } = guildId);
  const tmp = closure_12();
  let obj = guildId(analyticsLocations[9]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const fetchStatus = guildProfile.fetchStatus;
  let obj1 = guildId(analyticsLocations[10]);
  let items = [GuildProfileStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
  let obj2 = guildId(analyticsLocations[11]);
  const token = obj2.useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, fetchGuildProfile(analyticsLocations[8])());
  let obj3 = guildId(analyticsLocations[12]);
  bottomSheetRef = obj3.useBottomSheetRef();
  ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef);
  const tmp4 = fetchGuildProfile(analyticsLocations[8])();
  analyticsLocations = fetchGuildProfile(analyticsLocations[13])(fetchGuildProfile(analyticsLocations[14]).GUILD_PROFILE).analyticsLocations;
  let obj4 = guildId(analyticsLocations[11]);
  const token1 = obj4.useToken(fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW);
  let obj5 = token1;
  const items1 = [guildId, analyticsLocations];
  const effect = token1.useEffect(() => {
    const result = GuildProfileActionCreators.trackGuildProfileViewed(guildId, analyticsLocations);
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
          let tmp19 = closure_10(tmp2(tmp3[16]), {});
          obj = { size: "lg", text: null, onPress: null };
          const intl2 = tmp5(tmp3[18]).intl;
          obj.text = intl2.string(tmp5(tmp3[18]).t.cpT0Cq);
          obj.onPress = bottomSheetClose;
          let tmp18 = closure_10(tmp5(tmp3[17]).Button, obj);
          let tmp20 = closure_10;
        }
      }
      if (null == guildProfile) {
        obj = { onRetry: callback };
        tmp19 = closure_10(tmp2(tmp3[19]), obj);
        obj1 = { size: "lg", text: null, onPress: null };
        const intl = tmp5(tmp3[18]).intl;
        obj1.text = intl.string(tmp5(tmp3[18]).t.cpT0Cq);
        obj1.onPress = bottomSheetClose;
        tmp18 = closure_10(tmp5(tmp3[17]).Button, obj1);
        tmp20 = closure_10;
      } else {
        obj2 = { guildProfile };
        obj3 = { profile: guildProfile, context, inviteKey };
        tmp18 = closure_10(tmp2(tmp3[21]), obj3);
        tmp19 = closure_10(tmp2(tmp3[20]), obj2);
        tmp20 = closure_10;
        const tmp17 = closure_10(tmp2(tmp3[20]), obj2);
      }
    }
    const items4 = [token1];
    const memo = obj5.useMemo(() => {
      const obj = _modDef672(token1);
      const items = [_modDef672(token1).alpha(0).hex(), token1];
      return items;
    }, items4);
    obj4 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: null, children: null };
    obj5 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo, children: tmp18 };
    obj4.footer = tmp20(tmp2(tmp3[24]), obj5);
    const obj6 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp19 };
    const items5 = [tmp20(tmp5(tmp3[25]).BottomSheetScrollView, obj6), ];
    const obj7 = { variant: "floating", tabStyle: null, onPress: null };
    const obj8 = { backgroundColor: token };
    obj7.tabStyle = obj8;
    obj7.onPress = bottomSheetClose;
    items5[1] = tmp20(tmp5(tmp3[26]).ActionSheetHeaderBar, obj7);
    obj4.children = items5;
    return closure_11(tmp5(tmp3[23]).BottomSheet, obj4);
  }
  const tmp10 = fetchGuildProfile(analyticsLocations[13]);
  tmp19 = closure_10(closure_4, { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) });
  tmp18 = null;
  tmp20 = closure_10;
  const obj9 = { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) };
};