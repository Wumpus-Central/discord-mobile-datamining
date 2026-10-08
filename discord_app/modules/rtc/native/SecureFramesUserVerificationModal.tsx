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
const SecureFramesConstants = fn(8801);
({
  USER_VERIFICATION_CHUNK_SIZE: closure_9,
  USER_VERIFICATION_LENGTH: c10,
  USER_VERIFICATION_NUM_COLUMNS: closure_11,
  USER_VERIFIED_TOAST_KEY: closure_12,
} = SecureFramesConstants);
const Constants = fn(1085);
({ AnalyticsLocations: map1, AnalyticsSections: closure_14 } = Constants);
const ANDROID_FOREGROUND_RIPPLE = fn(1204).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5090);
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
let closure_18 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, padding: 16, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SecureFramesUserVerificationModal(userId) {
      const cResult = userId(name[12]).c(105);
      userId = userId.userId;
      const channelId = userId.channelId;
      closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
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
      let obj = userId(name[12]);
      const stateFromStores = userId(name[13]).useStateFromStores(first, I);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
        const items1 = [ChannelStore];
        cResult[3] = items1;
        const tmp9 = items1;
      } else {
        class I {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
      }
      if (cResult[4] !== channelId) {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
        cResult[4] = channelId;
        cResult[5] = V;
      } else {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
      }
      const tmpResult = userId(name[13]);
      const stateFromStores1 = userId(name[13]).useStateFromStores(tmp9, V);
      const tmpResult4 = userId(name[13]);
      name = channelId(name[14]).useName(stateFromStores1, null, stateFromStores);
      if (cResult[6] !== userId) {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
        tmp14[0] = userId;
        cResult[6] = userId;
        cResult[7] = tmp14;
      } else {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
      }
      let obj4 = channelId(name[14]);
      const secureFramesPairwiseFingerprint = userId(name[15]).useSecureFramesPairwiseFingerprint(tmp14);
      const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
      const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      if (cResult[8] !== fingerprint) {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
        tmp17[0] = fingerprint;
        tmp17[1] = closure_9;
        tmp17[2] = closure_10;
        cResult[8] = fingerprint;
        cResult[9] = tmp17;
      } else {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
      }
      const tmpResult5 = userId(name[15]);
      const readableSecureFramesFingerprint = userId(name[16]).useReadableSecureFramesFingerprint(tmp17);
      if (cResult[10] === channelId) {
        class V {
          constructor() {
            channel = closure_7.getChannel(channelId);
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            return guildId;
          }
        }
      }
      cResult[10] = channelId;
      cResult[11] = fingerprintUserKey;
      cResult[12] = userId;
      cResult[13] = { userId, channelId, userKey: fingerprintUserKey };
      let obj2 = { userId, channelId, userKey: fingerprintUserKey };
      const tmpResult6 = userId(name[16]);
    }
  : function SecureFramesUserVerificationModal(userId) {
      userId = userId.userId;
      const channelId = userId.channelId;
      let name;
      let isCurrentUserKeyPersistent;
      let isOtherUserKeyPersistent;
      let enabled;
      let analyticsLocations;
      const tmp = closure_18();
      let items = [isOtherUserKeyPersistent];
      const stateFromStores = userId(name[13]).useStateFromStores(items, () => UserStore.getUser(userId));
      let obj = userId(name[13]);
      let items1 = [isCurrentUserKeyPersistent];
      const stateFromStores1 = userId(name[13]).useStateFromStores(items1, () => {
        const channel = ChannelStore.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        return guildId;
      });
      let obj2 = userId(name[13]);
      name = channelId(name[14]).useName(stateFromStores1, null, stateFromStores);
      let obj3 = channelId(name[14]);
      const secureFramesPairwiseFingerprint = userId(name[15]).useSecureFramesPairwiseFingerprint({ userId });
      const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
      const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
      let obj4 = userId(name[15]);
      const readableSecureFramesFingerprint = userId(name[16]).useReadableSecureFramesFingerprint({
        fingerprintBase64: fingerprint,
        chunkSize: enabled,
        desiredLength: analyticsLocations,
      });
      const obj5 = userId(name[16]);
      const obj6 = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
      const isUserSecureFramesVerified = userId(name[17]).useIsUserSecureFramesVerified({
        userId,
        channelId,
        userKey: fingerprintUserKey,
      });
      const obj7 = userId(name[17]);
      const isPersistentSecureFramesFingerprint = userId(name[18]).useIsPersistentSecureFramesFingerprint({
        userId,
        userKey: fingerprintUserKey,
      });
      isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
      isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
      const items2 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
      let callback = fingerprintUserKey.useCallback(() => {
        if (null != fingerprintUserKey) {
          const obj = SecureFramesUtils;
          obj.addVerification(
            userId,
            fingerprintUserKey,
            isOtherUserKeyPersistent,
            channelId,
            __initData2.E2EE_USER_VERIFY_MODAL,
          );
          ModalActionCreatorsDefault.pop();
          const obj3 = {
            key,
            iconColor: "text-feedback-positive",
            IconComponent: CircleCheckIcon.CircleCheckIcon,
            content: null,
          };
          const intl = util.intl;
          const obj4 = { username: name };
          obj3.content = intl.formatToPlainString(util.t.Gwu134, obj4);
          ToastActionCreatorsDefault.open(obj3);
        }
      }, items2);
      const items3 = [fingerprintUserKey, isOtherUserKeyPersistent, userId];
      const callback1 = fingerprintUserKey.useCallback(() => {
        if (null != fingerprintUserKey) {
          SecureFramesUtils.deleteVerification(userId, tmp, isOtherUserKeyPersistent);
          ModalActionCreatorsDefault.pop();
        }
      }, items3);
      const obj8 = userId(name[18]);
      enabled = userId(name[24]).useSecureFramesDeeplinkExperiment({
        location: "SecureFramesUserVerificationModal",
      }).enabled;
      const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
      const callback2 = fingerprintUserKey.useCallback(() => {
        if (null != fingerprint) {
          if (null != readableSecureFramesFingerprint) {
            let obj2 = dependencyMap;
            ModalActionCreatorsDefault.pop();
            let showShareActionSheet = require;
            const obj = { userId, channelId };
            const result = SecureFramesTracking.trackE2EEUserVerificationShareClicked(obj);
            if (enabled) {
              let userVerificationDeeplink = showShareActionSheet(8800).getUserVerificationDeeplink(userId, tmp);
              const showShareActionSheetResult = showShareActionSheet(8800);
            } else {
              userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
            }
            showShareActionSheet = showShareActionSheet(8457).showShareActionSheet;
            obj2 = { message: userVerificationDeeplink };
            showShareActionSheet(obj2, constants.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
            const showShareActionSheetResult1 = showShareActionSheet(8457);
          }
        }
      }, items4);
      analyticsLocations = channelId(name[27])().analyticsLocations;
      const items5 = [analyticsLocations, channelId, userId];
      const callback3 = fingerprintUserKey.useCallback(() => {
        ModalActionCreatorsDefault.pop();
        showUserProfileActionSheetDefault({
          userId,
          channelId,
          isVoiceContext: true,
          sourceAnalyticsLocations: analyticsLocations,
        });
      }, items5);
      const obj9 = userId(name[24]);
      const obj10 = userId(name[29]);
      const alertIfSecureFramesKeyInconsistent = obj10.useAlertIfSecureFramesKeyInconsistent({
        channelId,
        userId,
        nickname: name,
        onAlertOpen: channelId(name[20]).pop,
      });
      const items6 = [isUserSecureFramesVerified];
      const obj11 = { channelId, userId, nickname: name, onAlertOpen: channelId(name[20]).pop };
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
      const memo = fingerprintUserKey.useMemo(
        () =>
          SecureFramesUtils.getUserVerificationFooterText({
            isCurrentUserKeyPersistent,
            isOtherUserKeyPersistent,
            otherUserNickname: name,
          }),
        items7,
      );
      const effect = fingerprintUserKey.useEffect(() => {
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
      let intl = userId(name[23]).intl;
      obj13.accessibilityLabel = intl.string(userId(name[23]).t.cpT0Cq);
      obj13.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
      obj13.onPress = callback3;
      obj13.children = closure_16(userId(name[31]).ArrowLargeLeftIcon, { size: "md" });
      const items9 = [closure_16(userId(name[32]).PressableOpacity, obj13)];
      let tmp24Result = null != fingerprint && null != readableSecureFramesFingerprint;
      if (tmp24Result) {
        const obj14 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          androidRippleConfig: null,
          hitSlop: 8,
          onPress: null,
          children: null,
        };
        const intl2 = tmp2(tmp3[23]).intl;
        obj14.accessibilityLabel = intl2.string(tmp2(tmp3[23]).t.RDE0Sc);
        obj14.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
        obj14.onPress = callback2;
        const obj15 = { variant: "text-md/semibold", color: "text-brand", children: null };
        const intl3 = tmp2(tmp3[23]).intl;
        obj15.children = intl3.string(tmp2(tmp3[23]).t.RDE0Sc);
        obj14.children = closure_16(tmp2(tmp3[33]).Text, obj15);
        tmp24Result = closure_16(tmp2(tmp3[32]).PressableOpacity, obj14);
      }
      items9[1] = tmp24Result;
      obj12.children = items9;
      const items10 = [closure_17(isUserSecureFramesVerified, obj12), , ,];
      const obj16 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
      const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
      const intl4 = tmp2(tmp3[23]).intl;
      obj17.children = intl4.string(userId(name[23]).t["/WPGnF"]);
      const items11 = [closure_16(userId(name[33]).Text, obj17)];
      const obj18 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
      const intl5 = tmp2(tmp3[23]).intl;
      obj18.children = intl5.format(userId(name[23]).t.oc2kce, { username: name });
      items11[1] = closure_16(userId(name[33]).Text, obj18);
      obj16.children = items11;
      items10[1] = closure_17(userId(name[34]).Stack, obj16);
      const obj19 = { style: tmp.code, children: null };
      const items12 = [
        closure_16(channelId(name[35]), { style: tmp.helpMessage, userId, userKey: fingerprintUserKey }),
      ];
      const obj21 = { title: null, chunks: null, columns: null, trailing: null };
      const obj20 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
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
      const intl6 = tmp2(tmp3[23]).intl;
      obj21.title = intl6.string(userId(name[23]).t["/WPGnF"]);
      obj21.chunks = readableSecureFramesFingerprint;
      obj21.columns = columns;
      if (null == readableSecureFramesFingerprint) {
        let tmp24Result2 = closure_16(readableSecureFramesFingerprint, {});
      } else {
        const obj22 = { color: tmp19, text: tmp18 };
        tmp24Result2 = closure_16(tmp2(tmp3[30]).TextBadge, obj22);
      }
      obj21.trailing = tmp24Result2;
      items12[1] = closure_16(channelId(name[36]), obj21);
      obj19.children = items12;
      items10[2] = closure_17(isUserSecureFramesVerified, obj19);
      const obj23 = { style: tmp.footer, children: null };
      const items13 = [
        closure_16(userId(name[33]).Text, {
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
      const obj25 = { disabled: loading, variant: "primary", onPress: null, text: null };
      if (isUserSecureFramesVerified) {
        callback = callback1;
      }
      obj25.onPress = callback;
      const intl7 = tmp2(tmp3[23]).intl;
      let string = intl7.string;
      let t = tmp2(tmp3[23]).t;
      if (isUserSecureFramesVerified) {
        let stringResult = string(t["Osb+/n"]);
      } else {
        stringResult = string(t["0tvNAn"]);
      }
      obj25.text = stringResult;
      items13[1] = closure_16(userId(name[37]).Button, obj25);
      obj23.children = items13;
      items10[3] = closure_17(isUserSecureFramesVerified, obj23);
      rect.children = items10;
      return closure_17(userId(name[38]).SafeAreaPaddingView, rect);
    };
