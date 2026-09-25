// === Module 9171: SecureFramesUserVerificationBottomSheet ===

// Module 9171 (SecureFramesUserVerificationBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4525 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4788 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import UserActionCreators from "UserActionCreators" /* 7619 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8250 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9152 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9163 */;
import XLargeBoldIcon from "XLargeBoldIcon" /* 9173 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SecureFramesConstants = fn(9154);
({ AnalyticsSecureFramesUserVerification: closure_9, SECURE_FRAMES_PUBLIC_KEY_VERSION: c10, USER_VERIFIED_TOAST_KEY: closure_11 } = SecureFramesConstants);
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { iconContainer: null, icon: null, content: null, subtitle: null, buttons: null, helpMessage: null };
let size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, marginBottom: 16 };
obj2.iconContainer = size;
obj2.icon = { height: 48, width: 48 };
obj2.content = { padding: 16, justifyContent: "center", alignItems: "center" };
obj2.subtitle = { textAlign: "center", marginTop: 8, marginBottom: 40 };
obj2.buttons = { marginTop: 40 };
obj2.helpMessage = { marginTop: 16 };
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const fingerprint = userId.fingerprint;
  const tmp = closure_15();
  _slicedToArray = tmp;
  const secureFramesPairwiseFingerprint = userId(fingerprint[10]).useSecureFramesPairwiseFingerprint({ userId });
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  let obj = userId(fingerprint[10]);
  const isSecureFramesUIEnabled = userId(fingerprint[11]).useIsSecureFramesUIEnabled({ channelId });
  let obj2 = userId(fingerprint[11]);
  const isUserSecureFramesVerified = userId(fingerprint[12]).useIsUserSecureFramesVerified({ userId, channelId, userKey: fingerprintUserKey });
  let obj3 = userId(fingerprint[12]);
  const isPersistentSecureFramesFingerprint = userId(fingerprint[13]).useIsPersistentSecureFramesFingerprint({ userId, userKey: fingerprintUserKey });
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let loading = isPersistentSecureFramesFingerprint.loading;
  let obj4 = userId(fingerprint[13]);
  const items = [isUserSecureFramesVerified];
  const stateFromStores = userId(fingerprint[14]).useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  let obj5 = userId(fingerprint[14]);
  const items1 = [isUserSecureFramesVerified];
  const stateFromStores1 = userId(fingerprint[14]).useStateFromStores(items1, () => RTCConnectionStore.isUserConnected(userId));
  const obj6 = userId(fingerprint[14]);
  const isSecureFramesKeyInconsistent = userId(fingerprint[15]).useIsSecureFramesKeyInconsistent({ userId });
  const items2 = [fingerprint, channelId, fingerprint2, stateFromStores, isSecureFramesKeyInconsistent, stateFromStores1, isSecureFramesUIEnabled, isUserSecureFramesVerified];
  const memo = fingerprintUserKey.useMemo(() => {
    if (null != channelId) {
      if (stateFromStores) {
        if (!stateFromStores1) {
          const OTHER_USER_DISCONNECTED = constants.OTHER_USER_DISCONNECTED;
        }
        if (!isSecureFramesUIEnabled) {
          const UNABLE_TO_VERIFY = constants.UNABLE_TO_VERIFY;
        }
        if (isUserSecureFramesVerified) {
          let MATCH = constants.OTHER_USER_ALREADY_VERIFIED;
        } else if (isSecureFramesKeyInconsistent) {
          MATCH = constants.OTHER_USER_INCONSISTENT_KEYS;
        } else if (fingerprint !== fingerprint2) {
          MATCH = constants.FINGERPRINT_MISMATCH;
        } else {
          MATCH = constants.MATCH;
        }
      }
    }
    return constants.CURRENT_USER_DISCONNECTED;
  }, items2);
  const items3 = [userId];
  const effect = fingerprintUserKey.useEffect(() => {
    const user = UserActionCreators.getUser(userId);
  }, items3);
  const obj7 = userId(fingerprint[15]);
  const items4 = [isOtherUserKeyPersistent];
  const stateFromStores2 = userId(fingerprint[14]).useStateFromStores(items4, () => UserStore.getUser(userId));
  const obj8 = userId(fingerprint[14]);
  const tmp14 = channelId;
  const name = channelId(fingerprint[17]).useName(userId.guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const obj9 = channelId(fingerprint[17]);
  const items6 = [channelId, memo, userId];
  [tmp17, tmp18] = fingerprintUserKey.useMemo(() => SecureFramesUtils.getUserVerifyStateText(memo, name), items5);
  const effect1 = fingerprintUserKey.useEffect(() => {
    if (constants.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (constants.MATCH !== memo) {
        const obj2 = { channelId, userId, reason: memo, keyVersion };
        const result = SecureFramesTracking.trackE2EEUserVerificationFailed(obj2);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = fingerprintUserKey.useMemo(() => {
    if (constants.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (constants.MATCH !== tmp) {
        const obj = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
        return map1(XLargeBoldIcon.XLargeBoldIcon, obj);
      }
    }
    return map1(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
  }, items7);
  const callback = fingerprintUserKey.useCallback(() => {
    channelId(fingerprint[22]).hideActionSheet();
  }, []);
  const items8 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  const callback1 = fingerprintUserKey.useCallback(() => {
    let tmp2 = null != channelId;
    if (tmp2) {
      tmp2 = null != fingerprintUserKey;
    }
    if (tmp2) {
      const obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, AnalyticsLocations.DEEP_LINK);
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj4 = { key, iconColor: "text-feedback-positive", IconComponent: CircleCheckIcon.CircleCheckIcon, content: null };
      const intl = util.intl;
      const obj5 = { username: name };
      obj4.content = intl.formatToPlainString(util.t.Gwu134, obj5);
      ToastActionCreatorsDefault.open(obj4);
    }
  }, items8);
  const obj10 = { startExpanded: true, header: null, children: null };
  const tmp16 = _slicedToArray(fingerprintUserKey.useMemo(() => SecureFramesUtils.getUserVerifyStateText(memo, name), items5), 2);
  obj10.header = name(userId(fingerprint[27]).BottomSheetTitleHeader, { title: null, leading: name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback }) });
  const obj12 = { style: tmp.content, children: null };
  const obj13 = { style: tmp.iconContainer, children: null };
  if (!loading) {
    obj13.children = memo1;
    const items9 = [tmp23(tmp25, obj13), , , , ];
    const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp17 };
    items9[1] = tmp23(tmp2(tmp3[29]).Text, obj14);
    const obj15 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp18 };
    items9[2] = tmp23(tmp2(tmp3[29]).Text, obj15);
    const obj16 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
    items9[3] = tmp23(tmp14(tmp3[30]), obj16);
    const obj17 = { spacing: 12, style: tmp.buttons, children: null };
    const obj18 = { variant: "primary", onPress: callback1, text: null, disabled: null };
    let intl = tmp2(tmp3[25]).intl;
    obj18.text = intl.string(tmp2(tmp3[25]).t["0tvNAn"]);
    if (!loading) {
      loading = memo !== stateFromStores.MATCH;
    }
    obj18.disabled = loading;
    const items10 = [tmp23(tmp2(tmp3[32]).Button, obj18), ];
    const obj19 = { variant: "secondary", onPress: callback, text: null };
    const intl2 = tmp2(tmp3[25]).intl;
    obj19.text = intl2.string(tmp2(tmp3[25]).t["ETE/oC"]);
    items10[1] = tmp23(tmp2(tmp3[32]).Button, obj19);
    obj17.children = items10;
    items9[4] = closure_14(tmp2(tmp3[31]).Stack, obj17);
    obj12.children = items9;
    obj10.children = closure_14(tmp25, obj12);
    return tmp23(userId(fingerprint[26]).BottomSheet, obj10);
  }
  memo1 = tmp23(fingerprint2, {});
  const obj11 = { title: null, leading: name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback }) };
};