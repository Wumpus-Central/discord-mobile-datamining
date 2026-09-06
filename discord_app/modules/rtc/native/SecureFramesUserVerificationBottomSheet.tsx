// === Module 9169: SecureFramesUserVerificationBottomSheet ===

// Module 9169 (SecureFramesUserVerificationBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4520 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import UserActionCreators from "UserActionCreators" /* 8181 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8795 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9150 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9161 */;
import XLargeBoldIcon from "XLargeBoldIcon" /* 9171 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SecureFramesConstants = fn(9152);
({ AnalyticsSecureFramesUserVerification: closure_9, SECURE_FRAMES_PUBLIC_KEY_VERSION: c10, USER_VERIFIED_TOAST_KEY: closure_11 } = SecureFramesConstants);
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
const createStyles = { iconContainer: null, icon: null, content: null, subtitle: null, buttons: null, helpMessage: null };
let size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, marginBottom: 16 };
createStyles.iconContainer = size;
createStyles.icon = { height: 48, width: 48 };
createStyles.content = { padding: 16, justifyContent: "center", alignItems: "center" };
createStyles.subtitle = { textAlign: "center", marginTop: 8, marginBottom: 40 };
createStyles.buttons = { marginTop: 40 };
createStyles.helpMessage = { marginTop: 16 };
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const fingerprint = userId.fingerprint;
  const tmp = closure_15();
  _slicedToArray = tmp;
  let obj = userId(fingerprint[10]);
  const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  let obj1 = userId(fingerprint[11]);
  const isSecureFramesUIEnabled = obj1.useIsSecureFramesUIEnabled({ channelId });
  let obj2 = userId(fingerprint[12]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId, channelId, userKey: fingerprintUserKey });
  let obj3 = userId(fingerprint[13]);
  const isPersistentSecureFramesFingerprint = obj3.useIsPersistentSecureFramesFingerprint({ userId, userKey: fingerprintUserKey });
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let loading = isPersistentSecureFramesFingerprint.loading;
  let obj4 = userId(fingerprint[14]);
  const items = [isUserSecureFramesVerified];
  const stateFromStores = obj4.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  let obj5 = userId(fingerprint[14]);
  const items1 = [isUserSecureFramesVerified];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => RTCConnectionStore.isUserConnected(userId));
  let obj6 = userId(fingerprint[15]);
  const isSecureFramesKeyInconsistent = obj6.useIsSecureFramesKeyInconsistent({ userId });
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
  let obj7 = userId(fingerprint[14]);
  const items4 = [isOtherUserKeyPersistent];
  const stateFromStores2 = obj7.useStateFromStores(items4, () => UserStore.getUser(userId));
  let obj8 = channelId(fingerprint[17]);
  const name = obj8.useName(userId.guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const items6 = [channelId, memo, userId];
  [tmp17, tmp18] = _slicedToArray(fingerprintUserKey.useMemo(() => SecureFramesUtils.getUserVerifyStateText(memo, name), items5), 2);
  const effect1 = fingerprintUserKey.useEffect(() => {
    if (constants.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (constants.MATCH !== tmp) {
        const obj = { channelId, userId, reason: tmp, keyVersion };
        const result = obj.trackE2EEUserVerificationFailed(obj);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = fingerprintUserKey.useMemo(() => {
    if (constants.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (constants.MATCH !== tmp) {
        let obj = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
        return map1(XLargeBoldIcon.XLargeBoldIcon, obj);
      }
    }
    obj = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
    return map1(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj);
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
      let obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, tmp, AnalyticsLocations.DEEP_LINK);
      ActionSheetActionCreatorsDefault.hideActionSheet();
      obj = { key, iconColor: "text-feedback-positive", IconComponent: CircleCheckIcon.CircleCheckIcon, content: null };
      const intl = util.intl;
      obj = { username: name };
      obj.content = intl.formatToPlainString(util.t.Gwu134, obj);
      ToastActionCreatorsDefault.open(obj);
    }
  }, items8);
  obj = { startExpanded: true, header: null, children: null };
  obj = { title: null, leading: name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback }) };
  obj.header = name(userId(fingerprint[27]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content, children: null };
  obj2 = { style: tmp.iconContainer, children: null };
  if (!loading) {
    obj2.children = memo1;
    const items9 = [tmp23(tmp25, obj2), , , , ];
    obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp17 };
    items9[1] = tmp23(tmp2(tmp3[29]).Text, obj3);
    obj4 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp18 };
    items9[2] = tmp23(tmp2(tmp3[29]).Text, obj4);
    obj5 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
    items9[3] = tmp23(channelId(tmp3[30]), obj5);
    obj6 = { spacing: 12, style: tmp.buttons, children: null };
    obj7 = { variant: "primary", onPress: callback1, text: null, disabled: null };
    let intl = tmp2(tmp3[25]).intl;
    obj7.text = intl.string(tmp2(tmp3[25]).t["0tvNAn"]);
    if (!loading) {
      loading = memo !== stateFromStores.MATCH;
    }
    obj7.disabled = loading;
    const items10 = [tmp23(tmp2(tmp3[32]).Button, obj7), ];
    obj8 = { variant: "secondary", onPress: callback, text: null };
    const intl2 = tmp2(tmp3[25]).intl;
    obj8.text = intl2.string(tmp2(tmp3[25]).t["ETE/oC"]);
    items10[1] = tmp23(tmp2(tmp3[32]).Button, obj8);
    obj6.children = items10;
    items9[4] = tmp24(tmp2(tmp3[31]).Stack, obj6);
    obj1.children = items9;
    obj.children = tmp24(tmp25, obj1);
    return tmp23(userId(fingerprint[26]).BottomSheet, obj);
  }
  memo1 = tmp23(fingerprint2, {});
};