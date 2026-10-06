// === Module 9384: SecureFramesUserVerificationModal ===

// Module 9384 (SecureFramesUserVerificationModal)
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4798 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9378 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9382 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9380 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userId;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ USER_VERIFICATION_CHUNK_SIZE: c9, USER_VERIFICATION_LENGTH: c10, USER_VERIFICATION_NUM_COLUMNS: unpackModuleId, USER_VERIFIED_TOAST_KEY: closure_12 } = SecureFramesConstants);
({ AnalyticsLocations: map1, AnalyticsSections: closure_14 } = Constants);
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let obj = { container: obj2, footer: { flex: 1, gap: 16, justifyContent: "flex-end" }, footerText: { textAlign: "center" }, header: { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, subtitle: { textAlign: "center" }, code: { marginTop: 24 }, helpMessage: { marginBottom: 16 } };
obj2 = { flex: 1, padding: 16, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_18 = createStyles.createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let name;
  let sourceAnalyticsLocations;
  let tmp9;
  const tmp = userId;
  let obj = userId(name[12]);
  const cResult = obj.c(105);
  userId = userId.userId;
  const channelId = userId.channelId;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    cResult[1] = userId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult = tmp(name[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, I);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  if (cResult[4] !== channelId) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    cResult[4] = channelId;
    cResult[5] = tmp11;
  } else {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult4 = tmp(name[13]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  const obj4 = channelId(name[14]);
  name = obj4.useName(stateFromStores1, null, stateFromStores);
  if (cResult[6] !== userId) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    tmp15[0] = userId;
    cResult[6] = userId;
    cResult[7] = tmp15;
  } else {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult5 = tmp(name[15]);
  const secureFramesPairwiseFingerprint = tmpResult5.useSecureFramesPairwiseFingerprint(tmp15);
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  if (cResult[8] !== fingerprint) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    tmp18[0] = fingerprint;
    tmp18[1] = closure_9;
    tmp18[2] = closure_10;
    cResult[8] = fingerprint;
    cResult[9] = tmp18;
  } else {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult6 = tmp(name[16]);
  const readableSecureFramesFingerprint = tmpResult6.useReadableSecureFramesFingerprint(tmp18);
  if (cResult[10] === channelId) {
    class I {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  let obj2 = { userId, channelId, userKey: fingerprintUserKey };
  cResult[10] = channelId;
  cResult[11] = fingerprintUserKey;
  cResult[12] = userId;
  cResult[13] = obj2;
}) : ((userId) => {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items12;
  let items13;
  let items9;
  let obj15;
  let stringResult;
  let tmp18;
  let tmp19;
  let tmp24Result2;
  const f100516 = () => {
    let items1;
    const intl = intl8.intl;
    const string = intl.string;
    const t = intl8.t;
    if (isUserSecureFramesVerified) {
      const items = [string(t.UNUuem), native.BadgeColors.INFO];
      items1 = items;
    } else {
      items1 = [string(t.y2b7CA), native.BadgeColors.DANGER];
    }
    return items1;
  };
  userId = userId.userId;
  const channelId = userId.channelId;
  let name;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let enabled;
  let analyticsLocations;
  const tmp = closure_18();
  let obj = userId(name[13]);
  let items = [isOtherUserKeyPersistent];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(name[13]);
  let items1 = [isCurrentUserKeyPersistent];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj3 = channelId(name[14]);
  name = obj3.useName(stateFromStores1, null, stateFromStores);
  const obj4 = userId(name[15]);
  const secureFramesPairwiseFingerprint = obj4.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  let obj5 = userId(name[16]);
  const obj6 = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
  const readableSecureFramesFingerprint = obj5.useReadableSecureFramesFingerprint(obj6);
  const obj7 = userId(name[17]);
  const isUserSecureFramesVerified = obj7.useIsUserSecureFramesVerified({ userId, channelId, userKey: fingerprintUserKey });
  const obj8 = userId(name[18]);
  const isPersistentSecureFramesFingerprint = obj8.useIsPersistentSecureFramesFingerprint({ userId, userKey: fingerprintUserKey });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  const loading = isPersistentSecureFramesFingerprint.loading;
  let callback = fingerprintUserKey.useCallback(() => {
    let intl;
    let obj3;
    if (null != fingerprintUserKey) {
      const obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, map1.E2EE_USER_VERIFY_MODAL);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      const obj2 = { key, iconColor: "text-feedback-positive", IconComponent: CircleCheckIcon.CircleCheckIcon, content: intl.formatToPlainString(intl8.t.Gwu134, obj3) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl8.intl;
      obj3 = { username: name };
      open(obj2);
    }
  }, items2);
  const items3 = [fingerprintUserKey, isOtherUserKeyPersistent, userId];
  const callback1 = fingerprintUserKey.useCallback(() => {
    if (null != fingerprintUserKey) {
      const obj = SecureFramesUtils;
      obj.deleteVerification(userId, tmp, isOtherUserKeyPersistent);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  }, items3);
  const obj9 = userId(name[24]);
  enabled = obj9.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = fingerprintUserKey.useCallback(() => {
    if (null != fingerprint) {
      if (null != readableSecureFramesFingerprint) {
        let userVerificationDeeplink;
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = { userId, channelId };
        const obj5 = SecureFramesTracking;
        const result = obj5.trackE2EEUserVerificationShareClicked(obj);
        if (enabled) {
          const tmp8Result = SecureFramesUtils;
          userVerificationDeeplink = tmp8Result.getUserVerificationDeeplink(userId, tmp);
        } else {
          userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
        }
        const obj2 = { message: userVerificationDeeplink };
        const tmp8Result2 = showShareActionSheet;
        tmp8Result2.showShareActionSheet(obj2, constants.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
      }
    }
  }, items4);
  analyticsLocations = channelId(name[27])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = fingerprintUserKey.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const obj = { userId, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items5);
  const obj10 = userId(name[29]);
  const obj11 = { channelId, userId, nickname: name, onAlertOpen: channelId(name[20]).pop };
  const alertIfSecureFramesKeyInconsistent = obj10.useAlertIfSecureFramesKeyInconsistent(obj11);
  const items6 = [isUserSecureFramesVerified];
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  [tmp18, tmp19] = fingerprint(fingerprintUserKey.useMemo(f100516, items6), 2);
  const items8 = [channelId, userId];
  fingerprint(fingerprintUserKey.useMemo(f100516, items6), 2);
  const memo = fingerprintUserKey.useMemo(() => {
    const obj = SecureFramesUtils;
    const obj2 = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj2);
  }, items7);
  const effect = fingerprintUserKey.useEffect(() => {
    const obj = SecureFramesTracking;
    const obj2 = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj2);
  }, items8);
  const rect = { top: true, bottom: true, style: tmp.container, children: items10 };
  const obj12 = { style: tmp.header, children: items9 };
  const SafeAreaPaddingView = userId(name[38]).SafeAreaPaddingView;
  const obj13 = { accessibilityRole: "button", accessibilityLabel: intl.string(userId(name[23]).t.cpT0Cq), androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, hitSlop: 8, onPress: callback3, children: closure_16(userId(name[31]).ArrowLargeLeftIcon, { size: "md" }) };
  const PressableOpacity = userId(name[32]).PressableOpacity;
  intl = userId(name[23]).intl;
  items9 = [closure_16(PressableOpacity, obj13), ];
  let tmp24Result = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp24Result) {
    const obj14 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(name[23]).t.RDE0Sc), androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, hitSlop: 8, onPress: callback2, children: closure_16(Text, obj15) };
    const PressableOpacity2 = tmp2(tmp3[32]).PressableOpacity;
    intl2 = tmp2(tmp3[23]).intl;
    obj15 = { variant: "text-md/semibold", color: "text-brand", children: intl3.string(userId(name[23]).t.RDE0Sc) };
    Text = tmp2(tmp3[33]).Text;
    intl3 = tmp2(tmp3[23]).intl;
    tmp24Result = closure_16(PressableOpacity2, obj14);
  }
  items9[1] = tmp24Result;
  items10 = [closure_17(isUserSecureFramesVerified, obj12), , , ];
  const obj16 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: items11 };
  const Stack = tmp2(tmp3[34]).Stack;
  const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl4.string(userId(name[23]).t["/WPGnF"]) };
  const Text2 = tmp2(tmp3[33]).Text;
  intl4 = tmp2(tmp3[23]).intl;
  items11 = [closure_16(Text2, obj17), ];
  const obj18 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl5.format(userId(name[23]).t.oc2kce, { username: name }) };
  const Text3 = tmp2(tmp3[33]).Text;
  intl5 = tmp2(tmp3[23]).intl;
  items11[1] = closure_16(Text3, obj18);
  items10[1] = closure_17(Stack, obj16);
  const obj19 = { style: tmp.code, children: items12 };
  items12 = [, ];
  const obj20 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
  items12[0] = closure_16(channelId(name[35]), obj20);
  const obj21 = { title: intl6.string(userId(name[23]).t["/WPGnF"]), chunks: readableSecureFramesFingerprint, columns, trailing: tmp24Result2 };
  const tmp6Result = channelId(name[36]);
  intl6 = tmp2(tmp3[23]).intl;
  if (null == readableSecureFramesFingerprint) {
    tmp24Result2 = closure_16(readableSecureFramesFingerprint, {});
  } else {
    const obj22 = { color: tmp19, text: tmp18 };
    tmp24Result2 = closure_16(tmp2(tmp3[30]).TextBadge, obj22);
  }
  items12[1] = closure_16(tmp6Result, obj21);
  items10[2] = closure_17(isUserSecureFramesVerified, obj19);
  const obj23 = { style: tmp.footer, children: items13 };
  items13 = [, ];
  const obj24 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-default", children: memo };
  items13[0] = closure_16(userId(name[33]).Text, obj24);
  let tmp30 = null == readableSecureFramesFingerprint;
  const Button = tmp2(tmp3[37]).Button;
  if (!tmp30) {
    tmp30 = loading;
  }
  const obj25 = { disabled: tmp30, variant: "primary", onPress: callback, text: stringResult };
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  const intl7 = tmp2(tmp3[23]).intl;
  let string = intl7.string;
  let t = tmp2(tmp3[23]).t;
  if (isUserSecureFramesVerified) {
    stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  items13[1] = closure_16(Button, obj25);
  items10[3] = closure_17(isUserSecureFramesVerified, obj23);
  return closure_17(SafeAreaPaddingView, rect);
});
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default tmp6;