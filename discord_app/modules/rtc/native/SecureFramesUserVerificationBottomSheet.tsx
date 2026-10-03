// discord_app/modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import CheckmarkLargeBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import SecureFramesUtils from "../SecureFramesUtils.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import XLargeBoldIcon from "../../../design/components/Icon/native/redesign/generated/XLargeBoldIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SecureFramesConstants = fn(9366);
({
  AnalyticsSecureFramesUserVerification: closure_9,
  SECURE_FRAMES_PUBLIC_KEY_VERSION: c10,
  USER_VERIFIED_TOAST_KEY: closure_11,
} = SecureFramesConstants);
const AnalyticsLocations = fn(1085).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { iconContainer: null, icon: null, content: null, subtitle: null, buttons: null, helpMessage: null };
let size = {
  height: 80,
  width: 80,
  borderRadius: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  marginBottom: 16,
};
obj2.iconContainer = size;
obj2.icon = { height: 48, width: 48 };
obj2.content = { padding: 16, justifyContent: "center", alignItems: "center" };
obj2.subtitle = { textAlign: "center", marginTop: 8, marginBottom: 40 };
obj2.buttons = { marginTop: 40 };
obj2.helpMessage = { marginTop: 16 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(fingerprintUserKey[11]).c(76);
      userId = userId.userId;
      const channelId = userId.channelId;
      ({ guildId, fingerprint } = userId);
      closure_15();
      if (cResult[0] !== userId) {
        let obj2 = { userId };
        cResult[0] = userId;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      let obj = userId(fingerprintUserKey[11]);
      const secureFramesPairwiseFingerprint = userId(fingerprintUserKey[12]).useSecureFramesPairwiseFingerprint(tmp5);
      fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      ({ fingerprint: fingerprint2, loading } = secureFramesPairwiseFingerprint);
      if (cResult[2] !== channelId) {
        let obj3 = { channelId };
        cResult[2] = channelId;
        cResult[3] = obj3;
      }
      userId(fingerprintUserKey[13]);
      if (cResult[4] === channelId) {
        if (cResult[5] === fingerprintUserKey) {
          tmp(tmp2[14]);
          if (cResult[8] === fingerprintUserKey) {
            if (cResult[9] === userId) {
              let tmp13 = cResult[10];
            }
            const isPersistentSecureFramesFingerprint = tmp(tmp2[15]).useIsPersistentSecureFramesFingerprint(tmp13);
            const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
            const loading2 = isPersistentSecureFramesFingerprint.loading;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [RTCConnectionStore];
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[11] = items;
              cResult[12] = H;
              let tmp18 = H;
              let tmp17 = items;
            } else {
              tmp17 = cResult[11];
              tmp18 = cResult[12];
            }
            const tmpResult11 = tmp(tmp2[15]);
            const _Symbol2 = Symbol;
            const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp17, tmp18);
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [RTCConnectionStore];
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[13] = items1;
              let tmp21 = items1;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] !== userId) {
              const fn = function w() {
                return RTCConnectionStore.isUserConnected(userId);
              };
              cResult[14] = userId;
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[15] = fn;
              let tmp23 = fn;
            } else {
              tmp23 = cResult[15];
            }
            const tmpResult12 = tmp(tmp2[16]);
            const stateFromStores1 = tmp(tmp2[16]).useStateFromStores(tmp21, tmp23);
            if (cResult[16] !== userId) {
              let obj4 = { userId };
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[17] = obj4;
            }
            tmp(tmp2[17]);
            if (null != channelId) {
              if (stateFromStores) {
                if (!stateFromStores1) {
                  const OTHER_USER_DISCONNECTED = constants.OTHER_USER_DISCONNECTED;
                }
                if (!tmp9) {
                  const UNABLE_TO_VERIFY = constants.UNABLE_TO_VERIFY;
                }
                if (tmp12) {
                  let MATCH = constants.OTHER_USER_ALREADY_VERIFIED;
                } else if (tmp27) {
                  MATCH = constants.OTHER_USER_INCONSISTENT_KEYS;
                } else if (fingerprint !== fingerprint2) {
                  MATCH = constants.FINGERPRINT_MISMATCH;
                } else {
                  MATCH = constants.MATCH;
                }
                class H {
                  constructor() {
                    return closure_1_7.isConnected();
                  }
                }
              }
            }
            const CURRENT_USER_DISCONNECTED = constants.CURRENT_USER_DISCONNECTED;
            if (cResult[18] !== userId) {
              const fn2 = function q() {
                const user = UserActionCreators.getUser(userId);
              };
              const items2 = [userId];
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[18] = userId;
              cResult[19] = fn2;
              cResult[20] = items2;
              let tmp38 = items2;
              let tmp37 = fn2;
            } else {
              tmp37 = cResult[19];
              tmp38 = cResult[20];
            }
            const effect = CURRENT_USER_DISCONNECTED.useEffect(tmp37, tmp38);
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const items3 = [UserStore];
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[21] = items3;
              let tmp41 = items3;
            } else {
              tmp41 = cResult[21];
            }
            if (cResult[22] !== userId) {
              class Q {
                constructor() {
                  return closure_8.getUser(userId);
                }
              }
              cResult[22] = userId;
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              cResult[23] = Q;
            } else {
              class Q {
                constructor() {
                  return closure_8.getUser(userId);
                }
              }
            }
            const tmpResult13 = tmp(tmp2[16]);
            const stateFromStores2 = tmp(tmp2[16]).useStateFromStores(tmp41, Q);
            const tmpResult15 = tmp(tmp2[16]);
            const name = channelId(tmp2[19]).useName(guildId, channelId, stateFromStores2);
            if (cResult[24] === name) {
              class Q {
                constructor() {
                  return closure_8.getUser(userId);
                }
              }
              class H {
                constructor() {
                  return closure_1_7.isConnected();
                }
              }
              [r10169, r10170] = tmp50;
              if (cResult[27] === channelId) {
                class Q {
                  constructor() {
                    return closure_8.getUser(userId);
                  }
                }
              }
              function re() {
                if (constants.OTHER_USER_ALREADY_VERIFIED !== CURRENT_USER_DISCONNECTED) {
                  if (constants.MATCH !== CURRENT_USER_DISCONNECTED) {
                    const obj2 = { channelId, userId, reason: CURRENT_USER_DISCONNECTED, keyVersion };
                    const result = SecureFramesTracking.trackE2EEUserVerificationFailed(obj2);
                  }
                }
              }
              const items4 = [channelId, CURRENT_USER_DISCONNECTED, userId];
              cResult[27] = channelId;
              cResult[28] = userId;
              cResult[29] = CURRENT_USER_DISCONNECTED;
              cResult[30] = re;
              cResult[31] = items4;
            }
            const obj11 = channelId(tmp2[19]);
            const userVerifyStateText = tmp(tmp2[20]).getUserVerifyStateText(CURRENT_USER_DISCONNECTED, name);
            cResult[24] = name;
            cResult[25] = CURRENT_USER_DISCONNECTED;
            cResult[26] = userVerifyStateText;
            const tmpResult16 = tmp(tmp2[20]);
          }
          tmp14[0] = userId;
          tmp14[1] = fingerprintUserKey;
          cResult[8] = fingerprintUserKey;
          cResult[9] = userId;
          cResult[10] = tmp14;
          tmp13 = tmp14;
        }
      }
      cResult[4] = channelId;
      cResult[5] = fingerprintUserKey;
      cResult[6] = userId;
      cResult[7] = { userId, channelId, userKey: fingerprintUserKey };
      let obj5 = { userId, channelId, userKey: fingerprintUserKey };
      const tmpResult = userId(fingerprintUserKey[12]);
    }
  : (userId) => {
      userId = userId.userId;
      const channelId = userId.channelId;
      const fingerprint = userId.fingerprint;
      const tmp = closure_15();
      _slicedToArray = tmp;
      const secureFramesPairwiseFingerprint = userId(fingerprint[12]).useSecureFramesPairwiseFingerprint({ userId });
      const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
      let obj = userId(fingerprint[12]);
      const isSecureFramesUIEnabled = userId(fingerprint[13]).useIsSecureFramesUIEnabled({ channelId });
      let obj2 = userId(fingerprint[13]);
      const isUserSecureFramesVerified = userId(fingerprint[14]).useIsUserSecureFramesVerified({
        userId,
        channelId,
        userKey: fingerprintUserKey,
      });
      let obj3 = userId(fingerprint[14]);
      const isPersistentSecureFramesFingerprint = userId(fingerprint[15]).useIsPersistentSecureFramesFingerprint({
        userId,
        userKey: fingerprintUserKey,
      });
      const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
      let loading = isPersistentSecureFramesFingerprint.loading;
      let obj4 = userId(fingerprint[15]);
      const items = [isUserSecureFramesVerified];
      const stateFromStores = userId(fingerprint[16]).useStateFromStores(items, () =>
        isUserSecureFramesVerified.isConnected(),
      );
      let obj5 = userId(fingerprint[16]);
      const items1 = [isUserSecureFramesVerified];
      const stateFromStores1 = userId(fingerprint[16]).useStateFromStores(items1, () =>
        RTCConnectionStore.isUserConnected(userId),
      );
      const obj6 = userId(fingerprint[16]);
      const isSecureFramesKeyInconsistent = userId(fingerprint[17]).useIsSecureFramesKeyInconsistent({ userId });
      const items2 = [
        fingerprint,
        channelId,
        fingerprint2,
        stateFromStores,
        isSecureFramesKeyInconsistent,
        stateFromStores1,
        isSecureFramesUIEnabled,
        isUserSecureFramesVerified,
      ];
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
      const obj7 = userId(fingerprint[17]);
      const items4 = [isOtherUserKeyPersistent];
      const stateFromStores2 = userId(fingerprint[16]).useStateFromStores(items4, () => UserStore.getUser(userId));
      const obj8 = userId(fingerprint[16]);
      const tmp14 = channelId;
      const name = channelId(fingerprint[19]).useName(userId.guildId, channelId, stateFromStores2);
      const items5 = [memo, name];
      const obj9 = channelId(fingerprint[19]);
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
            return __initData2(XLargeBoldIcon.XLargeBoldIcon, obj);
          }
        }
        return __initData2(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, {
          style: closure_3.icon,
          color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE,
        });
      }, items7);
      const callback = fingerprintUserKey.useCallback(() => {
        channelId(fingerprint[24]).hideActionSheet();
      }, []);
      const items8 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
      const callback1 = fingerprintUserKey.useCallback(() => {
        let tmp2 = null != channelId;
        if (tmp2) {
          tmp2 = null != fingerprintUserKey;
        }
        if (tmp2) {
          const obj = SecureFramesUtils;
          obj.addVerification(
            userId,
            fingerprintUserKey,
            isOtherUserKeyPersistent,
            channelId,
            AnalyticsLocations.DEEP_LINK,
          );
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj4 = {
            key,
            iconColor: "text-feedback-positive",
            IconComponent: CircleCheckIcon.CircleCheckIcon,
            content: null,
          };
          const intl = util.intl;
          const obj5 = { username: name };
          obj4.content = intl.formatToPlainString(util.t.Gwu134, obj5);
          ToastActionCreatorsDefault.open(obj4);
        }
      }, items8);
      const obj10 = { startExpanded: true, header: null, children: null };
      const tmp16 = _slicedToArray(
        fingerprintUserKey.useMemo(() => SecureFramesUtils.getUserVerifyStateText(memo, name), items5),
        2,
      );
      obj10.header = name(userId(fingerprint[28]).BottomSheetTitleHeader, {
        title: null,
        leading: name(userId(fingerprint[29]).ActionSheetCloseButton, { onPress: callback }),
      });
      const obj12 = { style: tmp.content, children: null };
      const obj13 = { style: tmp.iconContainer, children: null };
      if (!loading) {
        obj13.children = memo1;
        const items9 = [tmp23(tmp25, obj13), , , ,];
        const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp17 };
        items9[1] = tmp23(tmp2(tmp3[30]).Text, obj14);
        const obj15 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp18 };
        items9[2] = tmp23(tmp2(tmp3[30]).Text, obj15);
        const obj16 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
        items9[3] = tmp23(tmp14(tmp3[31]), obj16);
        const obj17 = { spacing: 12, style: tmp.buttons, children: null };
        const obj18 = { variant: "primary", onPress: callback1, text: null, disabled: null };
        let intl = tmp2(tmp3[27]).intl;
        obj18.text = intl.string(tmp2(tmp3[27]).t["0tvNAn"]);
        if (!loading) {
          loading = memo !== stateFromStores.MATCH;
        }
        obj18.disabled = loading;
        const items10 = [tmp23(tmp2(tmp3[32]).Button, obj18)];
        const obj19 = { variant: "secondary", onPress: callback, text: null };
        const intl2 = tmp2(tmp3[27]).intl;
        obj19.text = intl2.string(tmp2(tmp3[27]).t["ETE/oC"]);
        items10[1] = tmp23(tmp2(tmp3[32]).Button, obj19);
        obj17.children = items10;
        items9[4] = closure_14(tmp2(tmp3[33]).Stack, obj17);
        obj12.children = items9;
        obj10.children = closure_14(tmp25, obj12);
        return tmp23(userId(fingerprint[34]).BottomSheet, obj10);
      }
      memo1 = tmp23(fingerprint2, {});
      const obj11 = {
        title: null,
        leading: name(userId(fingerprint[29]).ActionSheetCloseButton, { onPress: callback }),
      };
    };
