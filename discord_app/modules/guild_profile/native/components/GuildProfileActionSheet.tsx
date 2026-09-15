// === Module 9317: GuildProfileActionSheet ===

// Module 9317 (GuildProfileActionSheet)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9320 */;
import noop from "module_19" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9197 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const GuildProfileFetchStatus = fn(9197).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = fn(9318).INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let analyticsLocations;
  ({ context, inviteKey } = guildId);
  const tmp = closure_12();
  const tmp4 = fetchGuildProfile(analyticsLocations[8])();
  const guildProfile1 = guildId(analyticsLocations[9]).useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  let obj = guildId(analyticsLocations[9]);
  let items = [GuildProfileStore];
  const stateFromStores = guildId(analyticsLocations[10]).useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
  const obj2 = guildId(analyticsLocations[10]);
  const token = guildId(analyticsLocations[11]).useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, tmp4);
  const obj3 = guildId(analyticsLocations[11]);
  const bottomSheetRef1 = guildId(analyticsLocations[12]).useBottomSheetRef();
  ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef1);
  const obj4 = guildId(analyticsLocations[12]);
  analyticsLocations = fetchGuildProfile(analyticsLocations[13])(fetchGuildProfile(analyticsLocations[14]).GUILD_PROFILE).analyticsLocations;
  const tmp10 = fetchGuildProfile(analyticsLocations[13]);
  const token1 = guildId(analyticsLocations[11]).useToken(fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW);
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
          const obj7 = { size: "lg", text: null, onPress: null };
          const intl2 = tmp5(tmp3[18]).intl;
          obj7.text = intl2.string(tmp5(tmp3[18]).t.cpT0Cq);
          obj7.onPress = bottomSheetClose;
          let tmp18 = closure_10(tmp5(tmp3[17]).Button, obj7);
          let tmp20 = closure_10;
        }
      }
      if (null == guildProfile) {
        const obj8 = { onRetry: callback };
        tmp19 = closure_10(tmp2(tmp3[19]), obj8);
        const obj9 = { size: "lg", text: null, onPress: null };
        const intl = tmp5(tmp3[18]).intl;
        obj9.text = intl.string(tmp5(tmp3[18]).t.cpT0Cq);
        obj9.onPress = bottomSheetClose;
        tmp18 = closure_10(tmp5(tmp3[17]).Button, obj9);
        tmp20 = closure_10;
      } else {
        const obj10 = { guildProfile };
        const obj11 = { profile: guildProfile, context, inviteKey };
        tmp18 = closure_10(tmp2(tmp3[21]), obj11);
        tmp19 = closure_10(tmp2(tmp3[20]), obj10);
        tmp20 = closure_10;
        const tmp17 = closure_10(tmp2(tmp3[20]), obj10);
      }
    }
    const items4 = [token1];
    const memo = obj6.useMemo(() => {
      const obj = _modDef672(token1);
      const items = [_modDef672(token1).alpha(0).hex(), token1];
      return items;
    }, items4);
    const obj12 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: null, children: null };
    const obj13 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo, children: tmp18 };
    obj12.footer = tmp20(tmp2(tmp3[24]), obj13);
    const obj14 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp19 };
    const items5 = [tmp20(tmp5(tmp3[25]).BottomSheetScrollView, obj14), ];
    const obj15 = { variant: "floating", tabStyle: null, onPress: null };
    const obj16 = { backgroundColor: token };
    obj15.tabStyle = obj16;
    obj15.onPress = bottomSheetClose;
    items5[1] = tmp20(tmp5(tmp3[26]).ActionSheetHeaderBar, obj15);
    obj12.children = items5;
    return closure_11(tmp5(tmp3[23]).BottomSheet, obj12);
  }
  const obj5 = guildId(analyticsLocations[11]);
  obj6 = token1;
  tmp19 = closure_10(closure_4, { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) });
  tmp18 = null;
  tmp20 = closure_10;
  const obj17 = { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) };
};