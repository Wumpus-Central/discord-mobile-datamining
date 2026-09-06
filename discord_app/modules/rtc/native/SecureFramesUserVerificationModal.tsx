// discord_app/modules/rtc/native/SecureFramesUserVerificationModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import SecureFramesUtils from "../SecureFramesUtils.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SecureFramesConstants = fn(9152);
({
  USER_VERIFICATION_CHUNK_SIZE: closure_9,
  USER_VERIFICATION_LENGTH: c10,
  USER_VERIFICATION_NUM_COLUMNS: closure_11,
  USER_VERIFIED_TOAST_KEY: closure_12,
} = SecureFramesConstants);
const Constants = fn(1074);
({ AnalyticsLocations: map1, AnalyticsSections: closure_14 } = Constants);
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  footer: null,
  footerText: null,
  header: null,
  subtitle: null,
  code: null,
  helpMessage: null,
};
createStyles = {
  flex: 1,
  padding: 16,
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = createStyles;
createStyles.footer = { flex: 1, gap: 16, justifyContent: "flex-end" };
createStyles.footerText = { textAlign: "center" };
createStyles.header = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles.subtitle = { textAlign: "center" };
createStyles.code = { marginTop: 24 };
createStyles.helpMessage = { marginBottom: 16 };
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  let name;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let enabled;
  let analyticsLocations;
  const tmp = closure_18();
  let obj = userId(name[11]);
  let items = [isOtherUserKeyPersistent];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj1 = userId(name[11]);
  let items1 = [isCurrentUserKeyPersistent];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
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
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  let obj4 = userId(name[14]);
  obj = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
  const readableSecureFramesFingerprint = obj4.useReadableSecureFramesFingerprint(obj);
  let obj6 = userId(name[15]);
  const isUserSecureFramesVerified = obj6.useIsUserSecureFramesVerified({
    userId,
    channelId,
    userKey: fingerprintUserKey,
  });
  let obj7 = userId(name[16]);
  const isPersistentSecureFramesFingerprint = obj7.useIsPersistentSecureFramesFingerprint({
    userId,
    userKey: fingerprintUserKey,
  });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  let callback = fingerprintUserKey.useCallback(() => {
    if (null != fingerprintUserKey) {
      let obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, map1.E2EE_USER_VERIFY_MODAL);
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
      obj = { key, iconColor: "text-feedback-positive", IconComponent: CircleCheckIcon.CircleCheckIcon, content: null };
      const intl = util.intl;
      obj = { username: name };
      obj.content = intl.formatToPlainString(util.t.Gwu134, obj);
      ToastActionCreatorsDefault.open(obj);
    }
  }, items2);
  const items3 = [fingerprintUserKey, isOtherUserKeyPersistent, userId];
  const callback1 = fingerprintUserKey.useCallback(() => {
    if (null != fingerprintUserKey) {
      SecureFramesUtils.deleteVerification(userId, tmp, isOtherUserKeyPersistent);
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
    }
  }, items3);
  let obj8 = userId(name[22]);
  enabled = obj8.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = fingerprintUserKey.useCallback(() => {
    if (null != fingerprint) {
      if (null != readableSecureFramesFingerprint) {
        let arr = ModalActionCreatorsDefault;
        arr = arr.pop();
        let showShareActionSheet = require;
        let obj = { userId, channelId };
        const result = SecureFramesTracking.trackE2EEUserVerificationShareClicked(obj);
        if (enabled) {
          let userVerificationDeeplink = showShareActionSheet(9150).getUserVerificationDeeplink(userId, tmp);
          const showShareActionSheetResult = showShareActionSheet(9150);
        } else {
          userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
        }
        showShareActionSheet = showShareActionSheet(8361).showShareActionSheet;
        obj = { message: userVerificationDeeplink };
        showShareActionSheet(obj, constants.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
        const showShareActionSheetResult1 = showShareActionSheet(8361);
      }
    }
  }, items4);
  analyticsLocations = channelId(name[25])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = fingerprintUserKey.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    showUserProfileActionSheetDefault({
      userId,
      channelId,
      isVoiceContext: true,
      sourceAnalyticsLocations: analyticsLocations,
    });
  }, items5);
  let obj9 = userId(name[27]);
  obj = { channelId, userId, nickname: name, onAlertOpen: channelId(name[18]).pop };
  const alertIfSecureFramesKeyInconsistent = obj9.useAlertIfSecureFramesKeyInconsistent(obj);
  const items6 = [isUserSecureFramesVerified];
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  [tmp18, tmp19] = fingerprint(
    fingerprintUserKey.useMemo(() => {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isUserSecureFramesVerified) {
        const items = [string(t.UNUuem), native.BadgeColors.INFO];
        let items1 = items;
      } else {
        items1 = [string(t.y2b7CA), native.BadgeColors.DANGER];
      }
      return items1;
    }, items6),
    2,
  );
  const items8 = [channelId, userId];
  const memo = fingerprintUserKey.useMemo(() => {
    const obj = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj);
  }, items7);
  const effect = fingerprintUserKey.useEffect(() => {
    const obj = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj);
  }, items8);
  const rect = { top: true, bottom: true, style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  obj2 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    androidRippleConfig: null,
    hitSlop: 8,
    onPress: null,
    children: null,
  };
  let intl = userId(name[21]).intl;
  obj2.accessibilityLabel = intl.string(userId(name[21]).t.cpT0Cq);
  obj2.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
  obj2.onPress = callback3;
  obj2.children = closure_16(userId(name[31]).ArrowLargeLeftIcon, { size: "md" });
  const items9 = [closure_16(userId(name[30]).PressableOpacity, obj2)];
  let tmp24Result = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp24Result) {
    obj3 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      androidRippleConfig: null,
      hitSlop: 8,
      onPress: null,
      children: null,
    };
    const intl2 = tmp2(tmp3[21]).intl;
    obj3.accessibilityLabel = intl2.string(tmp2(tmp3[21]).t.RDE0Sc);
    obj3.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj3.onPress = callback2;
    obj4 = { variant: "text-md/semibold", color: "text-brand", children: null };
    const intl3 = tmp2(tmp3[21]).intl;
    obj4.children = intl3.string(tmp2(tmp3[21]).t.RDE0Sc);
    obj3.children = closure_16(tmp2(tmp3[32]).Text, obj4);
    tmp24Result = closure_16(tmp2(tmp3[30]).PressableOpacity, obj3);
  }
  items9[1] = tmp24Result;
  obj1.children = items9;
  const items10 = [closure_17(isUserSecureFramesVerified, obj1), , ,];
  const obj5 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[21]).intl;
  obj6.children = intl4.string(userId(name[21]).t["/WPGnF"]);
  const items11 = [closure_16(userId(name[32]).Text, obj6)];
  obj7 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(tmp3[21]).intl;
  obj7.children = intl5.format(userId(name[21]).t.oc2kce, { username: name });
  items11[1] = closure_16(userId(name[32]).Text, obj7);
  obj5.children = items11;
  items10[1] = closure_17(userId(name[33]).Stack, obj5);
  obj8 = { style: tmp.code, children: null };
  obj9 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
  const items12 = [closure_16(channelId(name[34]), obj9)];
  const obj10 = { title: null, chunks: null, columns: null, trailing: null };
  const tmp17 = fingerprint(
    fingerprintUserKey.useMemo(() => {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isUserSecureFramesVerified) {
        const items = [string(t.UNUuem), native.BadgeColors.INFO];
        let items1 = items;
      } else {
        items1 = [string(t.y2b7CA), native.BadgeColors.DANGER];
      }
      return items1;
    }, items6),
    2,
  );
  const intl6 = tmp2(tmp3[21]).intl;
  obj10.title = intl6.string(userId(name[21]).t["/WPGnF"]);
  obj10.chunks = readableSecureFramesFingerprint;
  obj10.columns = columns;
  if (null == readableSecureFramesFingerprint) {
    tmp24Result = closure_16(readableSecureFramesFingerprint, {});
  } else {
    const obj11 = { color: tmp19, text: tmp18 };
    tmp24Result = closure_16(tmp2(tmp3[28]).TextBadge, obj11);
  }
  obj10.trailing = tmp24Result;
  items12[1] = closure_16(channelId(name[35]), obj10);
  obj8.children = items12;
  items10[2] = closure_17(isUserSecureFramesVerified, obj8);
  const obj12 = { style: tmp.footer, children: null };
  const items13 = [
    closure_16(userId(name[32]).Text, {
      style: tmp.footerText,
      variant: "text-xs/normal",
      color: "text-default",
      children: memo,
    }),
  ];
  let loading = null == readableSecureFramesFingerprint;
  if (!loading) {
    loading = isPersistentSecureFramesFingerprint.loading;
  }
  const obj14 = { disabled: loading, variant: "primary", onPress: null, text: null };
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  obj14.onPress = callback;
  const intl7 = tmp2(tmp3[21]).intl;
  let string = intl7.string;
  let t = tmp2(tmp3[21]).t;
  if (isUserSecureFramesVerified) {
    let stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  obj14.text = stringResult;
  items13[1] = closure_16(userId(name[36]).Button, obj14);
  obj12.children = items13;
  items10[3] = closure_17(isUserSecureFramesVerified, obj12);
  rect.children = items10;
  return closure_17(userId(name[29]).SafeAreaPaddingView, rect);
}
