// discord_app/modules/rtc/native/SecureFramesUserVerificationModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "../SecureFramesConstants.tsx";
import ME from "../../../Constants.tsx";
import { ANDROID_FOREGROUND_RIPPLE } from "../../../design/void/Form/native/FormConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ USER_VERIFICATION_CHUNK_SIZE: c9, USER_VERIFICATION_LENGTH: c10, USER_VERIFICATION_NUM_COLUMNS: unpackModuleId, USER_VERIFIED_TOAST_KEY: closure_12 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ AnalyticsLocations: map1, AnalyticsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = { flex: 1, padding: 16, flexDirection: "column", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: 16, justifyContent: "flex-end" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { marginTop: 24 };
createCacheKey[6] = { marginBottom: 16 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  let name;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let enabled;
  let analyticsLocations;
  const tmp = callback2();
  let obj = userId(name[11]);
  let items = [isOtherUserKeyPersistent];
  const stateFromStores = obj.useStateFromStores(items, () => isOtherUserKeyPersistent.getUser(userId));
  obj1 = userId(name[11]);
  let items1 = [isCurrentUserKeyPersistent];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const channel = isCurrentUserKeyPersistent.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj2 = channelId(name[12]);
  name = obj2.useName(stateFromStores1, null, stateFromStores);
  let obj3 = userId(name[13]);
  const secureFramesPairwiseFingerprint = obj3.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const userKey = secureFramesPairwiseFingerprint.userKey;
  let obj4 = userId(name[14]);
  obj = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
  const readableSecureFramesFingerprint = obj4.useReadableSecureFramesFingerprint(obj);
  let obj6 = userId(name[15]);
  const isUserSecureFramesVerified = obj6.useIsUserSecureFramesVerified({ userId, channelId });
  let obj7 = userId(name[16]);
  const isPersistentSecureFramesFingerprint = obj7.useIsPersistentSecureFramesFingerprint({ userId });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  let callback = userKey.useCallback(() => {
    if (null != userKey) {
      let obj = userId(name[17]);
      obj.addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, closure_1_13.E2EE_USER_VERIFY_MODAL);
      let arr = channelId(name[18]);
      arr = arr.pop();
      obj = { key: null, iconColor: "text-feedback-positive", IconComponent: null, content: null };
      obj[0] = closure_1_12;
      obj[2] = userId(name[20]).CircleCheckIcon;
      const intl = userId(name[21]).intl;
      obj = { username: null };
      obj[0] = name;
      obj[3] = intl.formatToPlainString(userId(name[21]).t.Gwu134, obj);
      channelId(name[19]).open(obj);
      const obj2 = channelId(name[19]);
    }
  }, items2);
  const items3 = [userKey, isOtherUserKeyPersistent, userId];
  const callback1 = userKey.useCallback(() => {
    if (null != userKey) {
      userId(name[17]).deleteVerification(userId, tmp, isOtherUserKeyPersistent);
      let arr = channelId(name[18]);
      arr = arr.pop();
      const obj = userId(name[17]);
    }
  }, items3);
  let obj8 = userId(name[22]);
  enabled = obj8.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  callback2 = userKey.useCallback(() => {
    if (null != fingerprint) {
      if (null != readableSecureFramesFingerprint) {
        let arr = channelId(name[18]);
        arr = arr.pop();
        let showShareActionSheet = userId;
        let obj = { userId: null, channelId: null };
        obj[0] = userId;
        obj[1] = channelId;
        const result = userId(name[23]).trackE2EEUserVerificationShareClicked(obj);
        if (enabled) {
          let userVerificationDeeplink = showShareActionSheet(obj[17]).getUserVerificationDeeplink(userId, tmp);
          const showShareActionSheetResult = showShareActionSheet(obj[17]);
        } else {
          userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
        }
        const obj4 = userId(name[23]);
        showShareActionSheet = showShareActionSheet(obj[24]).showShareActionSheet;
        obj = { message: null };
        obj[0] = userVerificationDeeplink;
        showShareActionSheet(obj, closure_1_14.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
        const showShareActionSheetResult1 = showShareActionSheet(obj[24]);
      }
    }
  }, items4);
  analyticsLocations = channelId(name[25])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = userKey.useCallback(() => {
    let arr = channelId(name[18]);
    arr = arr.pop();
    channelId(name[26])({ userId, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items5);
  let obj9 = userId(name[27]);
  obj = { channelId, userId, nickname: name, onAlertOpen: channelId(name[18]).pop };
  const alertIfSecureFramesKeyInconsistent = obj9.useAlertIfSecureFramesKeyInconsistent(obj);
  const items6 = [isUserSecureFramesVerified];
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  [tmp18, tmp19] = fingerprint(userKey.useMemo(() => {
    const intl = userId(name[21]).intl;
    const string = intl.string;
    const t = userId(name[21]).t;
    if (isUserSecureFramesVerified) {
      const items = [string(t.UNUuem), userId(name[28]).BadgeColors.INFO];
      let items1 = items;
    } else {
      items1 = [string(t.y2b7CA), userId(name[28]).BadgeColors.DANGER];
    }
    return items1;
  }, items6), 2);
  const items8 = [channelId, userId];
  const memo = userKey.useMemo(() => {
    userId(name[17]);
    const obj = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj);
  }, items7);
  const effect = userKey.useEffect(() => {
    userId(name[23]);
    const obj = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj);
  }, items8);
  obj1 = { top: true, bottom: true, style: tmp.container, children: null };
  obj2 = { style: tmp.header, children: null };
  obj3 = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
  let intl = userId(name[21]).intl;
  obj3[1] = intl.string(userId(name[21]).t.cpT0Cq);
  obj3[2] = ANDROID_FOREGROUND_RIPPLE;
  obj3[4] = callback3;
  obj3[5] = callback(userId(name[31]).ArrowLargeLeftIcon, { size: "md" });
  const items9 = [callback(userId(name[30]).PressableOpacity, obj3), ];
  let tmp24Result = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp24Result) {
    obj4 = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
    const intl2 = tmp2(tmp3[21]).intl;
    obj4[1] = intl2.string(tmp2(tmp3[21]).t.RDE0Sc);
    obj4[2] = ANDROID_FOREGROUND_RIPPLE;
    obj4[4] = callback2;
    const obj5 = { variant: "text-md/semibold", color: "text-brand", children: null };
    const intl3 = tmp2(tmp3[21]).intl;
    obj5[2] = intl3.string(tmp2(tmp3[21]).t.RDE0Sc);
    obj4[5] = tmp24(tmp2(tmp3[32]).Text, obj5);
    tmp24Result = tmp24(tmp2(tmp3[30]).PressableOpacity, obj4);
  }
  items9[1] = tmp24Result;
  obj2[1] = items9;
  const items10 = [callback(isUserSecureFramesVerified, obj2), , , ];
  obj6 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[21]).intl;
  obj7[2] = intl4.string(userId(name[21]).t["/WPGnF"]);
  const items11 = [callback(userId(name[32]).Text, obj7), ];
  obj8 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(tmp3[21]).intl;
  obj8[3] = intl5.format(userId(name[21]).t.oc2kce, { username: name });
  items11[1] = callback(userId(name[32]).Text, obj8);
  obj6[4] = items11;
  items10[1] = callback(userId(name[33]).Stack, obj6);
  obj9 = { style: tmp.code, children: null };
  const items12 = [callback(channelId(name[34]), { style: tmp.helpMessage, userId, userKey }), ];
  const obj11 = { title: null, chunks: null, columns: null, trailing: null };
  const tmp17 = fingerprint(userKey.useMemo(() => {
    const intl = userId(name[21]).intl;
    const string = intl.string;
    const t = userId(name[21]).t;
    if (isUserSecureFramesVerified) {
      const items = [string(t.UNUuem), userId(name[28]).BadgeColors.INFO];
      let items1 = items;
    } else {
      items1 = [string(t.y2b7CA), userId(name[28]).BadgeColors.DANGER];
    }
    return items1;
  }, items6), 2);
  const intl6 = tmp2(tmp3[21]).intl;
  obj11[0] = intl6.string(userId(name[21]).t["/WPGnF"]);
  obj11[1] = readableSecureFramesFingerprint;
  obj11[2] = closure_11;
  if (null == readableSecureFramesFingerprint) {
    tmp24Result = tmp24(readableSecureFramesFingerprint, {});
  } else {
    const obj12 = { color: null, text: null };
    obj12[0] = tmp19;
    obj12[1] = tmp18;
    tmp24Result = tmp24(tmp2(tmp3[28]).TextBadge, obj12);
  }
  obj11[3] = tmp24Result;
  items12[1] = callback(channelId(name[35]), obj11);
  obj9[1] = items12;
  items10[2] = callback(isUserSecureFramesVerified, obj9);
  const obj13 = { style: tmp.footer, children: null };
  const items13 = [callback(userId(name[32]).Text, { style: tmp.footerText, variant: "text-xs/normal", color: "text-default", children: memo }), ];
  let loading = null == readableSecureFramesFingerprint;
  if (!loading) {
    loading = isPersistentSecureFramesFingerprint.loading;
  }
  const obj15 = { disabled: loading, variant: "primary", onPress: null, text: null };
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  obj15[2] = callback;
  const intl7 = tmp2(tmp3[21]).intl;
  let string = intl7.string;
  let t = tmp2(tmp3[21]).t;
  if (isUserSecureFramesVerified) {
    let stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  obj15[3] = stringResult;
  items13[1] = callback(userId(name[36]).Button, obj15);
  obj13[1] = items13;
  items10[3] = callback(isUserSecureFramesVerified, obj13);
  obj1[3] = items10;
  return callback(userId(name[29]).SafeAreaPaddingView, obj1);
};