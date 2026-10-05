// discord_app/modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import CheckmarkLargeBoldIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import SecureFramesUtils from "../SecureFramesUtils.tsx";
import SecureFramesTracking from "../SecureFramesTracking.tsx";
import XLargeBoldIcon2 from "../../../design/components/Icon/native/redesign/generated/XLargeBoldIcon.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SecureFramesConstants from "../SecureFramesConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, userId;

let c10;
let c9;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({
  AnalyticsSecureFramesUserVerification: c9,
  SECURE_FRAMES_PUBLIC_KEY_VERSION: c10,
  USER_VERIFIED_TOAST_KEY: unpackModuleId,
} = SecureFramesConstants);
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = {
  iconContainer: size,
  icon: { height: 48, width: 48 },
  content: { padding: 16, justifyContent: "center", alignItems: "center" },
  subtitle: { textAlign: "center", marginTop: 8, marginBottom: 40 },
  buttons: { marginTop: 40 },
  helpMessage: { marginTop: 16 },
};
size = {
  height: 80,
  width: 80,
  borderRadius: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  marginBottom: 16,
};
let closure_15 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let connected;
      let fingerprint;
      let fingerprint2;
      let fingerprintUserKey;
      let guildId;
      let loading;
      let tmp5;
      let tmp2 = fingerprintUserKey;
      let obj = userId(fingerprintUserKey[11]);
      const cResult = obj.c(76);
      userId = userId.userId;
      const channelId = userId.channelId;
      ({ guildId, fingerprint } = userId);
      closure_15();
      if (cResult[0] !== userId) {
        let obj2 = { userId };
        cResult[0] = userId;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = userId(tmp2[12]);
      const secureFramesPairwiseFingerprint = tmpResult.useSecureFramesPairwiseFingerprint(tmp5);
      fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      ({ fingerprint: fingerprint2, loading } = secureFramesPairwiseFingerprint);
      if (cResult[2] !== channelId) {
        let obj3 = { channelId };
        cResult[2] = channelId;
        cResult[3] = obj3;
      }
      userId(tmp2[13]);
      if (cResult[4] === channelId) {
        if (cResult[5] === fingerprintUserKey) {
          userId(tmp2[14]);
          if (cResult[8] === fingerprintUserKey) {
            let tmp13;
            let tmp18;
            let tmp17;
            let tmp21;
            let tmp23;
            if (cResult[9] === userId) {
              tmp13 = cResult[10];
            }
            const tmpResult11 = userId(tmp2[15]);
            const isPersistentSecureFramesFingerprint = tmpResult11.useIsPersistentSecureFramesFingerprint(tmp13);
            const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
            const loading2 = isPersistentSecureFramesFingerprint.loading;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [RTCConnectionStore];
              class H {
                constructor() {
                  return connected.isConnected();
                }
              }
              cResult[11] = items;
              cResult[12] = H;
              tmp18 = H;
              tmp17 = items;
            } else {
              tmp17 = cResult[11];
              tmp18 = cResult[12];
            }
            const _Symbol2 = Symbol;
            const tmpResult12 = userId(tmp2[16]);
            const stateFromStores = tmpResult12.useStateFromStores(tmp17, tmp18);
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [RTCConnectionStore];
              class H {
                constructor() {
                  return connected.isConnected();
                }
              }
              cResult[13] = items1;
              tmp21 = items1;
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
                  return connected.isConnected();
                }
              }
              cResult[15] = fn;
              tmp23 = fn;
            } else {
              tmp23 = cResult[15];
            }
            const tmpResult13 = userId(tmp2[16]);
            const stateFromStores1 = tmpResult13.useStateFromStores(tmp21, tmp23);
            if (cResult[16] !== userId) {
              let obj4 = { userId };
              class H {
                constructor() {
                  return connected.isConnected();
                }
              }
              cResult[17] = obj4;
            }
            userId(tmp2[17]);
            if (null != channelId) {
              let CURRENT_USER_DISCONNECTED;
              let tmp37;
              let tmp36;
              let tmp39;
              if (stateFromStores) {
                let OTHER_USER_DISCONNECTED;
                if (stateFromStores1) {
                  let UNABLE_TO_VERIFY;
                  if (tmp9) {
                    let MATCH;
                    if (tmp12) {
                      MATCH = constants.OTHER_USER_ALREADY_VERIFIED;
                    } else if (tmp27) {
                      MATCH = constants.OTHER_USER_INCONSISTENT_KEYS;
                    } else if (fingerprint !== fingerprint2) {
                      MATCH = constants.FINGERPRINT_MISMATCH;
                    } else {
                      MATCH = constants.MATCH;
                    }
                    UNABLE_TO_VERIFY = MATCH;
                  } else {
                    UNABLE_TO_VERIFY = constants.UNABLE_TO_VERIFY;
                  }
                  OTHER_USER_DISCONNECTED = UNABLE_TO_VERIFY;
                } else {
                  OTHER_USER_DISCONNECTED = constants.OTHER_USER_DISCONNECTED;
                }
                CURRENT_USER_DISCONNECTED = OTHER_USER_DISCONNECTED;
              }
              if (cResult[18] !== userId) {
                const fn2 = function q() {
                  const obj = UserActionCreators;
                  const user = obj.getUser(userId);
                };
                const items2 = [userId];
                class H {
                  constructor() {
                    return connected.isConnected();
                  }
                }
                cResult[18] = userId;
                cResult[19] = fn2;
                cResult[20] = items2;
                tmp37 = items2;
                tmp36 = fn2;
              } else {
                tmp36 = cResult[19];
                tmp37 = cResult[20];
              }
              class H {
                constructor() {
                  return connected.isConnected();
                }
              }
              const effect = CURRENT_USER_DISCONNECTED.useEffect(tmp36, tmp37);
              const _Symbol3 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const items3 = [UserStore];
                class H {
                  constructor() {
                    return connected.isConnected();
                  }
                }
                cResult[21] = items3;
                tmp39 = items3;
              } else {
                tmp39 = cResult[21];
              }
              if (cResult[22] !== userId) {
                class Q {
                  constructor() {
                    return UserStore.getUser(userId);
                  }
                }
                cResult[22] = userId;
                class H {
                  constructor() {
                    return connected.isConnected();
                  }
                }
                cResult[23] = Q;
              } else {
                class Q {
                  constructor() {
                    return UserStore.getUser(userId);
                  }
                }
              }
              const tmpResult15 = userId(tmp2[16]);
              const stateFromStores2 = tmpResult15.useStateFromStores(tmp39, Q);
              const obj11 = channelId(tmp2[19]);
              const name = obj11.useName(guildId, channelId, stateFromStores2);
              if (cResult[24] === name) {
                class Q {
                  constructor() {
                    return UserStore.getUser(userId);
                  }
                }
                class H {
                  constructor() {
                    return connected.isConnected();
                  }
                }
                [r10163, r10164] = tmp48;
                if (cResult[27] === channelId) {
                  class Q {
                    constructor() {
                      return UserStore.getUser(userId);
                    }
                  }
                }
                function re() {
                  if (constants.OTHER_USER_ALREADY_VERIFIED !== CURRENT_USER_DISCONNECTED) {
                    if (constants.MATCH !== CURRENT_USER_DISCONNECTED) {
                      const obj2 = { channelId, userId, reason: CURRENT_USER_DISCONNECTED, keyVersion };
                      const obj = SecureFramesTracking;
                      const result = obj.trackE2EEUserVerificationFailed(obj2);
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
              const tmpResult16 = userId(tmp2[20]);
              const userVerifyStateText = tmpResult16.getUserVerifyStateText(CURRENT_USER_DISCONNECTED, name);
              cResult[24] = name;
              cResult[25] = CURRENT_USER_DISCONNECTED;
              cResult[26] = userVerifyStateText;
            }
            CURRENT_USER_DISCONNECTED = constants.CURRENT_USER_DISCONNECTED;
          }
          tmp14[0] = userId;
          tmp14[1] = fingerprintUserKey;
          cResult[8] = fingerprintUserKey;
          cResult[9] = userId;
          cResult[10] = tmp14;
          tmp13 = tmp14;
        }
      }
      const obj5 = { userId, channelId, userKey: fingerprintUserKey };
      cResult[4] = channelId;
      cResult[5] = fingerprintUserKey;
      cResult[6] = userId;
      cResult[7] = obj5;
    }
  : (userId) => {
      let BottomSheetTitleHeader;
      let closure_3;
      let intl;
      let intl2;
      let items10;
      let obj11;
      let tmp17;
      let tmp18;
      const f100416 = () => {
        const obj = SecureFramesUtils;
        return obj.getUserVerifyStateText(memo, name);
      };
      userId = userId.userId;
      const channelId = userId.channelId;
      const fingerprint = userId.fingerprint;
      const guildId = userId.guildId;
      const tmp = closure_15();
      _slicedToArray = tmp;
      let tmp2 = userId;
      let obj = userId(fingerprint[12]);
      const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
      const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
      const loading = secureFramesPairwiseFingerprint.loading;
      let obj2 = userId(fingerprint[13]);
      const isSecureFramesUIEnabled = obj2.useIsSecureFramesUIEnabled({ channelId });
      let obj3 = userId(fingerprint[14]);
      const isUserSecureFramesVerified = obj3.useIsUserSecureFramesVerified({
        userId,
        channelId,
        userKey: fingerprintUserKey,
      });
      let obj4 = userId(fingerprint[15]);
      const isPersistentSecureFramesFingerprint = obj4.useIsPersistentSecureFramesFingerprint({
        userId,
        userKey: fingerprintUserKey,
      });
      const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
      let loading2 = isPersistentSecureFramesFingerprint.loading;
      const items = [isUserSecureFramesVerified];
      const obj5 = userId(fingerprint[16]);
      const stateFromStores = obj5.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
      const items1 = [isUserSecureFramesVerified];
      const obj6 = userId(fingerprint[16]);
      const stateFromStores1 = obj6.useStateFromStores(items1, () => RTCConnectionStore.isUserConnected(userId));
      const obj7 = userId(fingerprint[17]);
      const isSecureFramesKeyInconsistent = obj7.useIsSecureFramesKeyInconsistent({ userId });
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
          let CURRENT_USER_DISCONNECTED;
          if (stateFromStores) {
            let OTHER_USER_DISCONNECTED;
            if (stateFromStores1) {
              let UNABLE_TO_VERIFY;
              if (isSecureFramesUIEnabled) {
                let MATCH;
                if (isUserSecureFramesVerified) {
                  MATCH = stateFromStores.OTHER_USER_ALREADY_VERIFIED;
                } else if (isSecureFramesKeyInconsistent) {
                  MATCH = stateFromStores.OTHER_USER_INCONSISTENT_KEYS;
                } else if (fingerprint !== fingerprint2) {
                  MATCH = stateFromStores.FINGERPRINT_MISMATCH;
                } else {
                  MATCH = stateFromStores.MATCH;
                }
                UNABLE_TO_VERIFY = MATCH;
              } else {
                UNABLE_TO_VERIFY = stateFromStores.UNABLE_TO_VERIFY;
              }
              OTHER_USER_DISCONNECTED = UNABLE_TO_VERIFY;
            } else {
              OTHER_USER_DISCONNECTED = stateFromStores.OTHER_USER_DISCONNECTED;
            }
            CURRENT_USER_DISCONNECTED = OTHER_USER_DISCONNECTED;
          }
          return CURRENT_USER_DISCONNECTED;
        }
        CURRENT_USER_DISCONNECTED = stateFromStores.CURRENT_USER_DISCONNECTED;
      }, items2);
      const items3 = [userId];
      const effect = fingerprintUserKey.useEffect(() => {
        const obj = UserActionCreators;
        const user = obj.getUser(userId);
      }, items3);
      const items4 = [isOtherUserKeyPersistent];
      const obj8 = userId(fingerprint[16]);
      const stateFromStores2 = obj8.useStateFromStores(items4, () => UserStore.getUser(userId));
      const obj9 = channelId(fingerprint[19]);
      const name = obj9.useName(guildId, channelId, stateFromStores2);
      const items5 = [memo, name];
      const items6 = [channelId, memo, userId];
      [tmp17, tmp18] = fingerprintUserKey.useMemo(f100416, items5);
      _slicedToArray(fingerprintUserKey.useMemo(f100416, items5), 2);
      const effect1 = fingerprintUserKey.useEffect(() => {
        if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
          if (stateFromStores.MATCH !== memo) {
            const obj2 = { channelId, userId, reason: memo, keyVersion };
            const obj = SecureFramesTracking;
            const result = obj.trackE2EEUserVerificationFailed(obj2);
          }
        }
      }, items6);
      const items7 = [memo, tmp.icon];
      let memo1 = fingerprintUserKey.useMemo(() => {
        if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
          if (stateFromStores.MATCH !== tmp) {
            const obj = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
            const XLargeBoldIcon = XLargeBoldIcon2.XLargeBoldIcon;
            return map1(XLargeBoldIcon, obj);
          }
        }
        const obj2 = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
        const CheckmarkLargeBoldIcon = CheckmarkLargeBoldIcon2.CheckmarkLargeBoldIcon;
        return map1(CheckmarkLargeBoldIcon, obj2);
      }, items7);
      const callback = fingerprintUserKey.useCallback(() => {
        const obj = channelId(fingerprint[24]);
        obj.hideActionSheet();
      }, []);
      const items8 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
      const callback1 = fingerprintUserKey.useCallback(() => {
        let intl;
        let obj4;
        const tmp2 = null != channelId && null != fingerprintUserKey;
        if (tmp2) {
          const obj = SecureFramesUtils;
          obj.addVerification(
            userId,
            fingerprintUserKey,
            isOtherUserKeyPersistent,
            channelId,
            AnalyticsLocations.DEEP_LINK,
          );
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
          const obj3 = {
            key: unpackModuleId,
            iconColor: "text-feedback-positive",
            IconComponent: CircleCheckIcon.CircleCheckIcon,
            content: intl.formatToPlainString(intl3.t.Gwu134, obj4),
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          obj4 = { username: name };
          open(obj3);
        }
      }, items8);
      const obj10 = { startExpanded: true, header: name(BottomSheetTitleHeader, obj11), children: null };
      BottomSheet = userId(fingerprint[34]).BottomSheet;
      obj11 = { title: null, leading: name(userId(fingerprint[29]).ActionSheetCloseButton, { onPress: callback }) };
      BottomSheetTitleHeader = userId(fingerprint[28]).BottomSheetTitleHeader;
      const obj12 = { style: tmp.content, children: null };
      const obj13 = { style: tmp.iconContainer, children: null };
      const tmp14 = channelId;
      if (!loading2) {
        obj13.children = memo1;
        const items9 = [name(isSecureFramesUIEnabled, obj13), , , ,];
        const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp17 };
        items9[1] = name(tmp2(fingerprint[30]).Text, obj14);
        const obj15 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp18 };
        items9[2] = name(tmp2(fingerprint[30]).Text, obj15);
        const obj16 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
        items9[3] = name(tmp14(fingerprint[31]), obj16);
        const obj17 = { spacing: 12, style: tmp.buttons, children: items10 };
        const Stack = tmp2(tmp3[33]).Stack;
        const obj18 = {
          variant: "primary",
          onPress: callback1,
          text: intl.string(tmp2(fingerprint[27]).t["0tvNAn"]),
          disabled: loading2,
        };
        const Button = tmp2(tmp3[32]).Button;
        intl = tmp2(tmp3[27]).intl;
        if (!loading2) {
          loading2 = memo !== stateFromStores.MATCH;
        }
        items10 = [name(Button, obj18)];
        const obj19 = {
          variant: "secondary",
          onPress: callback,
          text: intl2.string(tmp2(fingerprint[27]).t["ETE/oC"]),
        };
        const Button2 = tmp2(tmp3[32]).Button;
        intl2 = tmp2(tmp3[27]).intl;
        items10[1] = name(Button2, obj19);
        items9[4] = closure_14(Stack, obj17);
        obj12.children = items9;
        obj10.children = closure_14(isSecureFramesUIEnabled, obj12);
        return name(BottomSheet, obj10);
      }
      memo1 = tmp23(fingerprint2, {});
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default tmp5;
