// === Module 8919: SecureFramesUserVerificationBottomSheet ===

// Module 8919 (SecureFramesUserVerificationBottomSheet)
import Button from "Button";
import trackRTCPanelViewed from "trackRTCPanelViewed";
import get_ActivityIndicator from "getNickname";
import createRTCConnection from "createRTCConnection";
import mergeGuildAvatar from "mergeGuildAvatar";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import { AnalyticsLocations } from "ME";
import jsxProd from "XLargeBoldIcon";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_14;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticsSecureFramesUserVerification: c9, SECURE_FRAMES_PUBLIC_KEY_VERSION: c10, USER_VERIFIED_TOAST_KEY: unpackModuleId } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { iconContainer: null, icon: null, content: null, subtitle: null, buttons: null, helpMessage: null };
createCacheKey = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, marginBottom: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 48, width: 48 };
createCacheKey[2] = { padding: 16, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: 8, marginBottom: 40 };
createCacheKey[4] = { marginTop: 40 };
createCacheKey[5] = { marginTop: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  let tmp17;
  let tmp18;
  userId = userId.userId;
  const channelId = userId.channelId;
  const fingerprint = userId.fingerprint;
  let callback;
  let userKey;
  let fingerprint2;
  let isSecureFramesUIEnabled;
  let isUserSecureFramesVerified;
  let isOtherUserKeyPersistent;
  let stateFromStores;
  let stateFromStores1;
  let isSecureFramesKeyInconsistent;
  let memo;
  let name;
  const tmp = createCacheKey();
  callback = tmp;
  let obj = userId(fingerprint[10]);
  const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
  userKey = secureFramesPairwiseFingerprint.userKey;
  fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  let obj1 = userId(fingerprint[11]);
  isSecureFramesUIEnabled = obj1.useIsSecureFramesUIEnabled({ channelId });
  let obj2 = userId(fingerprint[12]);
  isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId, channelId });
  let obj3 = userId(fingerprint[13]);
  const isPersistentSecureFramesFingerprint = obj3.useIsPersistentSecureFramesFingerprint({ userId });
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let loading = isPersistentSecureFramesFingerprint.loading;
  let obj4 = userId(fingerprint[14]);
  const items = [isUserSecureFramesVerified];
  stateFromStores = obj4.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  let obj5 = userId(fingerprint[14]);
  const items1 = [isUserSecureFramesVerified];
  stateFromStores1 = obj5.useStateFromStores(items1, () => isUserSecureFramesVerified.isUserConnected(userId));
  let obj6 = userId(fingerprint[15]);
  isSecureFramesKeyInconsistent = obj6.useIsSecureFramesKeyInconsistent({ userId });
  const items2 = [fingerprint, channelId, fingerprint2, stateFromStores, isSecureFramesKeyInconsistent, stateFromStores1, isSecureFramesUIEnabled, isUserSecureFramesVerified];
  memo = userKey.useMemo(() => {
    if (null != channelId) {
      if (stateFromStores) {
        if (!stateFromStores1) {
          const OTHER_USER_DISCONNECTED = stateFromStores.OTHER_USER_DISCONNECTED;
        }
        if (!isSecureFramesUIEnabled) {
          const UNABLE_TO_VERIFY = stateFromStores.UNABLE_TO_VERIFY;
        }
        if (isUserSecureFramesVerified) {
          let MATCH = stateFromStores.OTHER_USER_ALREADY_VERIFIED;
        } else if (isSecureFramesKeyInconsistent) {
          MATCH = stateFromStores.OTHER_USER_INCONSISTENT_KEYS;
        } else if (fingerprint !== fingerprint2) {
          MATCH = stateFromStores.FINGERPRINT_MISMATCH;
        } else {
          MATCH = stateFromStores.MATCH;
        }
      }
    }
    return stateFromStores.CURRENT_USER_DISCONNECTED;
  }, items2);
  const items3 = [userId];
  const effect = userKey.useEffect(() => {
    const user = userId(fingerprint[16]).getUser(userId);
  }, items3);
  let obj7 = userId(fingerprint[14]);
  const items4 = [isOtherUserKeyPersistent];
  const stateFromStores2 = obj7.useStateFromStores(items4, () => isOtherUserKeyPersistent.getUser(userId));
  let obj8 = channelId(fingerprint[17]);
  name = obj8.useName(userId.guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const items6 = [channelId, memo, userId];
  [tmp17, tmp18] = callback(userKey.useMemo(() => userId(fingerprint[18]).getUserVerifyStateText(memo, name), items5), 2);
  const effect1 = userKey.useEffect(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = userId(fingerprint[19]);
        obj = { channelId: null, userId: null, reason: null, keyVersion: null };
        obj[0] = channelId;
        obj[1] = userId;
        obj[2] = tmp;
        obj[3] = stateFromStores1;
        const result = obj.trackE2EEUserVerificationFailed(obj);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = userKey.useMemo(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = { style: null, color: null };
        obj[0] = _undefined.icon;
        obj[1] = channelId(fingerprint[9]).colors.TEXT_FEEDBACK_CRITICAL;
        return name(userId(fingerprint[21]).XLargeBoldIcon, obj);
      }
    }
    obj = { style: _undefined.icon, color: null };
    obj[1] = channelId(fingerprint[9]).colors.TEXT_FEEDBACK_POSITIVE;
    return name(userId(fingerprint[20]).CheckmarkLargeBoldIcon, obj);
  }, items7);
  callback = userKey.useCallback(() => {
    channelId(fingerprint[22]).hideActionSheet();
  }, []);
  const items8 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  const callback1 = userKey.useCallback(() => {
    let tmp2 = null != channelId;
    if (tmp2) {
      tmp2 = null != userKey;
    }
    if (tmp2) {
      let obj = userId(fingerprint[18]);
      obj.addVerification(userId, userKey, isOtherUserKeyPersistent, tmp, memo.DEEP_LINK);
      channelId(fingerprint[22]).hideActionSheet();
      const obj2 = channelId(fingerprint[22]);
      obj = { key: null, iconColor: "text-feedback-positive", IconComponent: null, content: null };
      obj[0] = isSecureFramesKeyInconsistent;
      obj[2] = userId(fingerprint[24]).CircleCheckIcon;
      const intl = userId(fingerprint[25]).intl;
      obj = { username: null };
      obj[0] = name;
      obj[3] = intl.formatToPlainString(userId(fingerprint[25]).t.Gwu134, obj);
      channelId(fingerprint[23]).open(obj);
      const obj3 = channelId(fingerprint[23]);
    }
  }, items8);
  obj = { startExpanded: true, header: null, children: null };
  obj = { title: null, leading: null };
  obj[1] = name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback });
  obj[1] = name(userId(fingerprint[27]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content, children: null };
  obj2 = { style: tmp.iconContainer, children: null };
  if (!loading) {
    obj2[1] = memo1;
    const items9 = [tmp23(tmp25, obj2), , , , ];
    obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    obj3[2] = tmp17;
    items9[1] = tmp23(tmp2(tmp3[29]).Text, obj3);
    obj4 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj4[0] = tmp.subtitle;
    obj4[3] = tmp18;
    items9[2] = tmp23(tmp2(tmp3[29]).Text, obj4);
    obj5 = { style: null, userId: null, userKey: null };
    obj5[0] = tmp.helpMessage;
    obj5[1] = userId;
    obj5[2] = userKey;
    items9[3] = tmp23(channelId(tmp3[30]), obj5);
    obj6 = { spacing: 12, style: null, children: null };
    obj6[1] = tmp.buttons;
    obj7 = { variant: "primary", onPress: null, text: null, disabled: null };
    obj7[1] = callback1;
    let intl = tmp2(tmp3[25]).intl;
    obj7[2] = intl.string(tmp2(tmp3[25]).t["0tvNAn"]);
    if (!loading) {
      loading = memo !== stateFromStores.MATCH;
    }
    obj7[3] = loading;
    const items10 = [tmp23(tmp2(tmp3[32]).Button, obj7), ];
    obj8 = { variant: "secondary", onPress: null, text: null };
    obj8[1] = callback;
    const intl2 = tmp2(tmp3[25]).intl;
    obj8[2] = intl2.string(tmp2(tmp3[25]).t["ETE/oC"]);
    items10[1] = tmp23(tmp2(tmp3[32]).Button, obj8);
    obj6[2] = items10;
    items9[4] = tmp24(tmp2(tmp3[31]).Stack, obj6);
    obj1[1] = items9;
    obj[2] = tmp24(tmp25, obj1);
    return tmp23(userId(fingerprint[26]).BottomSheet, obj);
  }
  memo1 = tmp23(fingerprint2, {});
};