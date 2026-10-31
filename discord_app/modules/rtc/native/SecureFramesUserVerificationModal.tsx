// discord_app/modules/rtc/native/SecureFramesUserVerificationModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import SecureFramesUtils from "../SecureFramesUtils.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SecureFramesConstants = fn(9266);
({
  USER_VERIFICATION_CHUNK_SIZE: closure_8,
  USER_VERIFICATION_LENGTH: closure_9,
  USER_VERIFICATION_NUM_COLUMNS: c10,
  USER_VERIFIED_TOAST_KEY: closure_11,
} = SecureFramesConstants);
const Constants = fn(1072);
({ AnalyticsLocations: closure_12, AnalyticsSections: map1 } = Constants);
const ANDROID_FOREGROUND_RIPPLE = fn(1191).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  footer: { flex: 1, gap: 16, justifyContent: "flex-end" },
  footerText: { textAlign: "center" },
  header: { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  subtitle: { textAlign: "center" },
  code: { marginTop: 24 },
  helpMessage: { marginBottom: 16 },
};
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  let name;
  let isUserSecureFramesVerified;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let enabled;
  const tmp = closure_17();
  const items = [isCurrentUserKeyPersistent];
  const stateFromStores = userId(name[10]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj = userId(name[10]);
  const items1 = [isUserSecureFramesVerified];
  const stateFromStores1 = userId(name[10]).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj2 = userId(name[10]);
  name = channelId(name[11]).useName(stateFromStores1, null, stateFromStores);
  let obj3 = channelId(name[11]);
  const secureFramesPairwiseFingerprint = userId(name[12]).useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  let obj4 = userId(name[12]);
  const readableSecureFramesFingerprint = userId(name[13]).useReadableSecureFramesFingerprint({
    fingerprintBase64: fingerprint,
    chunkSize: isOtherUserKeyPersistent,
    desiredLength: enabled,
  });
  const obj5 = userId(name[13]);
  const obj6 = { fingerprintBase64: fingerprint, chunkSize: isOtherUserKeyPersistent, desiredLength: enabled };
  isUserSecureFramesVerified = userId(name[14]).useIsUserSecureFramesVerified({
    userId,
    channelId,
    userKey: fingerprintUserKey,
  });
  const obj7 = userId(name[14]);
  const isPersistentSecureFramesFingerprint = userId(name[15]).useIsPersistentSecureFramesFingerprint({
    userId,
    userKey: fingerprintUserKey,
  });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  let callback = fingerprint.useCallback(() => {
    if (null != fingerprintUserKey) {
      const obj = SecureFramesUtils;
      obj.addVerification(
        userId,
        fingerprintUserKey,
        isOtherUserKeyPersistent,
        channelId,
        closure_2_12.E2EE_USER_VERIFY_MODAL,
      );
      ModalActionCreatorsDefault.pop();
      const obj3 = { text: null, variant: "success" };
      const intl = util.intl;
      const obj4 = { username: name };
      obj3.text = intl.formatToPlainString(util.t.Gwu134, obj4);
      ToastActionCreatorsDefault.open(closure_2_11, obj3);
    }
  }, items2);
  const items3 = [fingerprintUserKey, isOtherUserKeyPersistent, userId];
  const callback1 = fingerprint.useCallback(() => {
    if (null != fingerprintUserKey) {
      SecureFramesUtils.deleteVerification(userId, tmp, isOtherUserKeyPersistent);
      ModalActionCreatorsDefault.pop();
    }
  }, items3);
  const obj8 = userId(name[15]);
  enabled = userId(name[20]).useSecureFramesDeeplinkExperiment({
    location: "SecureFramesUserVerificationModal",
  }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = fingerprint.useCallback(() => {
    if (null != fingerprint) {
      if (null != readableSecureFramesFingerprint) {
        let obj2 = dependencyMap;
        ModalActionCreatorsDefault.pop();
        let showShareActionSheet = require;
        const obj = { userId, channelId };
        const result = SecureFramesTracking.trackE2EEUserVerificationShareClicked(obj);
        if (enabled) {
          let userVerificationDeeplink = showShareActionSheet(9265).getUserVerificationDeeplink(userId, tmp);
          const showShareActionSheetResult = showShareActionSheet(9265);
        } else {
          userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
        }
        showShareActionSheet = showShareActionSheet(8931).showShareActionSheet;
        obj2 = { message: userVerificationDeeplink };
        showShareActionSheet(obj2, constants.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
        const showShareActionSheetResult1 = showShareActionSheet(8931);
      }
    }
  }, items4);
  const analyticsLocations = channelId(name[23])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = fingerprint.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    showUserProfileActionSheetDefault({
      userId,
      channelId,
      isVoiceContext: true,
      sourceAnalyticsLocations: analyticsLocations,
    });
  }, items5);
  const obj9 = userId(name[20]);
  const obj10 = userId(name[25]);
  const alertIfSecureFramesKeyInconsistent = obj10.useAlertIfSecureFramesKeyInconsistent({
    channelId,
    userId,
    nickname: name,
    onAlertOpen: channelId(name[17]).pop,
  });
  const items6 = [isUserSecureFramesVerified];
  const memo = fingerprint.useMemo(() => {
    if (isUserSecureFramesVerified) {
      const obj2 = { type: null, variant: "primary" };
      const obj3 = { text: null };
      const intl = util.intl;
      obj3.text = intl.string(util.t.UNUuem);
      obj2.type = obj3;
      let obj = obj2;
    } else {
      obj = { type: "new", variant: "notification" };
    }
    return obj;
  }, items6);
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  const items8 = [channelId, userId];
  const memo1 = fingerprint.useMemo(
    () =>
      SecureFramesUtils.getUserVerificationFooterText({
        isCurrentUserKeyPersistent,
        isOtherUserKeyPersistent,
        otherUserNickname: name,
      }),
    items7,
  );
  const effect = fingerprint.useEffect(() => {
    const result = SecureFramesTracking.trackE2EEUserVerificationViewed({ userId, channelId });
  }, items8);
  const rect = { top: true, bottom: true, style: tmp.container, children: null };
  const obj12 = { style: tmp.header, children: null };
  const obj13 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    androidRippleConfig: null,
    hitSlop: 8,
    onPress: null,
    children: null,
  };
  let intl = userId(name[19]).intl;
  obj13.accessibilityLabel = intl.string(userId(name[19]).t.cpT0Cq);
  obj13.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
  obj13.onPress = callback3;
  obj13.children = closure_15(userId(name[28]).ArrowLargeLeftIcon, { size: "md" });
  const items9 = [closure_15(userId(name[27]).PressableOpacity, obj13)];
  let tmp22Result = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp22Result) {
    const obj14 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      androidRippleConfig: null,
      hitSlop: 8,
      onPress: null,
      children: null,
    };
    const intl2 = tmp2(tmp3[19]).intl;
    obj14.accessibilityLabel = intl2.string(tmp2(tmp3[19]).t.RDE0Sc);
    obj14.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj14.onPress = callback2;
    const obj15 = { variant: "text-md/semibold", color: "text-brand", children: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj15.children = intl3.string(tmp2(tmp3[19]).t.RDE0Sc);
    obj14.children = closure_15(tmp2(tmp3[29]).Text, obj15);
    tmp22Result = closure_15(tmp2(tmp3[27]).PressableOpacity, obj14);
  }
  items9[1] = tmp22Result;
  obj12.children = items9;
  const items10 = [closure_16(readableSecureFramesFingerprint, obj12), , ,];
  const obj16 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[19]).intl;
  obj17.children = intl4.string(userId(name[19]).t["/WPGnF"]);
  const items11 = [closure_15(userId(name[29]).Text, obj17)];
  const obj18 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(tmp3[19]).intl;
  obj18.children = intl5.format(userId(name[19]).t.oc2kce, { username: name });
  items11[1] = closure_15(userId(name[29]).Text, obj18);
  obj16.children = items11;
  items10[1] = closure_16(userId(name[30]).Stack, obj16);
  const obj19 = { style: tmp.code, children: null };
  const items12 = [closure_15(channelId(name[31]), { style: tmp.helpMessage, userId, userKey: fingerprintUserKey })];
  const obj21 = { title: null, chunks: null, columns: null, trailing: null };
  const obj11 = { channelId, userId, nickname: name, onAlertOpen: channelId(name[17]).pop };
  const obj20 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
  const intl6 = tmp2(tmp3[19]).intl;
  obj21.title = intl6.string(userId(name[19]).t["/WPGnF"]);
  obj21.chunks = readableSecureFramesFingerprint;
  obj21.columns = analyticsLocations;
  if (null == readableSecureFramesFingerprint) {
    let tmp22Result2 = closure_15(fingerprintUserKey, {});
  } else {
    const obj22 = {};
    const merged = Object.assign(memo);
    tmp22Result2 = closure_15(tmp2(tmp3[33]).Badge, obj22);
  }
  obj21.trailing = tmp22Result2;
  items12[1] = closure_15(channelId(name[32]), obj21);
  obj19.children = items12;
  items10[2] = closure_16(readableSecureFramesFingerprint, obj19);
  const obj23 = { style: tmp.footer, children: null };
  const items13 = [
    closure_15(userId(name[29]).Text, {
      style: tmp.footerText,
      variant: "text-xs/normal",
      color: "text-default",
      children: memo1,
    }),
  ];
  let loading = null == readableSecureFramesFingerprint;
  if (!loading) {
    loading = isPersistentSecureFramesFingerprint.loading;
  }
  const obj25 = { disabled: loading, variant: "primary", onPress: null, text: null };
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  obj25.onPress = callback;
  const intl7 = tmp2(tmp3[19]).intl;
  const string = intl7.string;
  const t = tmp2(tmp3[19]).t;
  if (isUserSecureFramesVerified) {
    let stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  obj25.text = stringResult;
  items13[1] = closure_15(userId(name[34]).Button, obj25);
  obj23.children = items13;
  items10[3] = closure_16(readableSecureFramesFingerprint, obj23);
  rect.children = items10;
  return closure_16(userId(name[26]).SafeAreaPaddingView, rect);
}
