// === Module 8463: GuildProfileActionSheet ===

// Module 8463 (GuildProfileActionSheet)
import _slicedToArray from "_slicedToArray";
import _fetchGuildTopGames from "_fetchGuildTopGames";
import get_ActivityIndicator from "QUICK_SWITCHER";
import initialize from "initialize";
import handleUpdateStart from "handleUpdateStart";
import { GuildProfileFetchStatus } from "handleUpdateStart";
import { INVALID_ACCESS_ERROR_CODE } from "BannerPalettePresets";
import { VerticalGradient } from "ME";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let c5;
let closure_12;
let closure_6;
let map1;
const require = arg1;
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, scrollView: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let context;
  let fetchGuildProfile;
  let guildProfile;
  let inviteKey;
  guildId = guildId.guildId;
  let enabled = guildId;
  fetchGuildProfile = undefined;
  bottomSheetRef = undefined;
  let height;
  ({ context, inviteKey } = guildId);
  let tmp = createCacheKey();
  let obj = enabled(bottomSheetRef[12]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const fetchStatus = guildProfile.fetchStatus;
  let obj1 = enabled(bottomSheetRef[13]);
  let items = [handleUpdateStart];
  const stateFromStores = obj1.useStateFromStores(items, () => ref.getErrorCode(enabled));
  let obj2 = enabled(bottomSheetRef[14]);
  const token = obj2.useToken(fetchGuildProfile(bottomSheetRef[9]).colors.INTERACTIVE_TEXT_HOVER, fetchGuildProfile(bottomSheetRef[11])());
  let obj3 = enabled(bottomSheetRef[15]);
  bottomSheetRef = obj3.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp4 = fetchGuildProfile(bottomSheetRef[11])();
  const analyticsLocations = fetchGuildProfile(bottomSheetRef[16])(fetchGuildProfile(bottomSheetRef[17]).GUILD_PROFILE).analyticsLocations;
  bottomSheetRef = analyticsLocations;
  let obj4 = enabled(bottomSheetRef[14]);
  const token1 = obj4.useToken(fetchGuildProfile(bottomSheetRef[9]).colors.BACKGROUND_BASE_LOW);
  height = token1;
  let obj5 = enabled(bottomSheetRef[13]);
  const items1 = [initialize];
  const items2 = [guildId];
  enabled = obj5.useStateFromStores(items1, () => {
    let isLurkingResult = null != enabled;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  }, items2);
  let obj6 = enabled(bottomSheetRef[18]);
  if (enabled) {
    enabled = obj6.useMobileLurkerServerPreview("GuildProfileActionSheet").enabled;
  }
  fetchGuildProfile = tmp12;
  height = undefined;
  let first;
  let closure_5;
  let first1;
  initialize = undefined;
  handleUpdateStart = undefined;
  height = tmp2(tmp3[10])().height;
  let obj7 = first;
  const tmp13 = height(first.useState(null), 2);
  first = tmp13[0];
  closure_5 = tmp13[1];
  const tmp15 = height(first.useState(null), 2);
  first1 = tmp15[0];
  initialize = tmp15[1];
  handleUpdateStart = first.useRef(false);
  const items3 = [enabled, first, first1, height];
  const items4 = [enabled, null != guildProfile];
  const memo = first.useMemo(() => {
    if (enabled) {
      if (null != first) {
        if (null != first1) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const result = 0.95 * height;
          let rounded = Math.round(Math.min(result, Math.max(0.65 * height, tmp + tmp3)));
        }
        return rounded;
      }
      const _Math4 = Math;
      rounded = Math.round(0.65 * height);
    }
  }, items3);
  const items5 = [enabled];
  const callback = first.useCallback((nativeEvent) => {
    let tmp = enabled;
    if (enabled) {
      tmp = fetchGuildProfile;
    }
    if (tmp) {
      callback(nativeEvent.nativeEvent.layout.height);
    }
  }, items4);
  const items6 = [enabled, first, first1, bottomSheetRef];
  const callback1 = first.useCallback((nativeEvent) => {
    if (enabled) {
      lurking(nativeEvent.nativeEvent.layout.height);
    }
  }, items5);
  const effect = first.useEffect(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != first;
    }
    if (tmp) {
      tmp = null != first1;
    }
    if (tmp) {
      if (!ref.current) {
        tmp6.current = true;
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          const current = ref.current;
          if (current != null) {
            current.snapToIndex(0);
          }
        });
      }
    }
  }, items6);
  const items7 = [guildId, analyticsLocations];
  const effect1 = first.useEffect(() => {
    const result = enabled(bottomSheetRef[19]).trackGuildProfileViewed(enabled, bottomSheetRef);
  }, items7);
  const items8 = [fetchGuildProfile];
  const items9 = [fetchGuildProfile];
  const callback2 = first.useCallback(() => {
    fetchGuildProfile(true);
  }, items8);
  const effect2 = first.useEffect(() => {
    fetchGuildProfile();
  }, items9);
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          let tmp28 = callback(tmp2(tmp3[20]), {});
          obj = { size: "lg", text: null, onPress: null };
          const intl2 = tmp5(tmp3[22]).intl;
          obj[1] = intl2.string(tmp5(tmp3[22]).t.cpT0Cq);
          obj[2] = bottomSheetClose;
          let tmp27 = callback(tmp5(tmp3[21]).Button, obj);
          let tmp29 = callback;
        }
      }
      if (null == guildProfile) {
        obj = { onRetry: null };
        obj[0] = callback2;
        tmp28 = callback(tmp2(tmp3[23]), obj);
        obj1 = { size: "lg", text: null, onPress: null };
        const intl = tmp5(tmp3[22]).intl;
        obj1[1] = intl.string(tmp5(tmp3[22]).t.cpT0Cq);
        obj1[2] = bottomSheetClose;
        tmp27 = callback(tmp5(tmp3[21]).Button, obj1);
        tmp29 = callback;
      } else {
        obj2 = { guildProfile: null, isLurkerServerPreview: null };
        obj2[0] = guildProfile;
        obj2[1] = enabled;
        obj3 = { profile: null, context: null, inviteKey: null, isLurkerServerPreview: null };
        obj3[0] = guildProfile;
        obj3[1] = context;
        obj3[2] = inviteKey;
        obj3[3] = enabled;
        tmp27 = callback(tmp2(tmp3[25]), obj3);
        tmp28 = callback(tmp2(tmp3[24]), obj2);
        tmp29 = callback;
        const tmp26 = callback(tmp2(tmp3[24]), obj2);
      }
    }
    const items10 = [token1];
    const memo1 = obj7.useMemo(() => {
      const obj = fetchGuildProfile(bottomSheetRef[26])(height);
      const items = [fetchGuildProfile(bottomSheetRef[26])(height).alpha(0).hex(), height];
      return items;
    }, items10);
    obj4 = { ref: null, scrollable: true, handleDisabled: true, startHeight: null, footer: null, children: null };
    obj4[0] = bottomSheetRef;
    obj4[3] = memo;
    obj5 = { start: null, end: null, style: null, colors: null, onLayout: null, children: null };
    obj5[0] = VerticalGradient.START;
    obj5[1] = { x: 0, y: 0.5 };
    obj5[2] = tmp.footerContainer;
    obj5[3] = memo1;
    let tmp36;
    if (enabled) {
      tmp36 = callback1;
    }
    obj5[4] = tmp36;
    obj5[5] = tmp27;
    obj4[4] = tmp29(tmp2(tmp3[28]), obj5);
    obj6 = { style: null, children: null };
    obj6[0] = tmp.scrollView;
    let tmp29Result = tmp28;
    if (enabled) {
      obj7 = { onLayout: null, children: null };
      obj7[0] = callback;
      obj7[1] = tmp28;
      tmp29Result = tmp29(closure_5, obj7);
    }
    obj6[1] = tmp29Result;
    const items11 = [tmp29(tmp5(tmp3[29]).BottomSheetScrollView, obj6), ];
    const obj8 = { variant: "floating", tabStyle: null, onPress: null };
    const obj9 = { backgroundColor: null };
    obj9[0] = token;
    obj8[1] = obj9;
    obj8[2] = bottomSheetClose;
    items11[1] = tmp29(tmp5(tmp3[30]).ActionSheetHeaderBar, obj8);
    obj4[5] = items11;
    return closure_13(tmp5(tmp3[27]).BottomSheet, obj4);
  }
  const tmp10 = fetchGuildProfile(bottomSheetRef[16]);
  tmp28 = callback(closure_5, { style: tmp.loadingContainer, children: callback(first1, { animating: true, size: "large" }) });
  tmp27 = null;
  tmp29 = callback;
};