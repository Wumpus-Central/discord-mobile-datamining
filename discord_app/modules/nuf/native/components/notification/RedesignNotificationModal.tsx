// discord_app/modules/nuf/native/components/notification/RedesignNotificationModal.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PushNotificationPermissionStore from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import NotificationPermissionUtil from "../../NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../../actions/native/PushNotificationActionCreators.tsx";
import NewUserPermissionsOnboardingDefault from "../NewUserPermissionsOnboarding.android.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/15961_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import NotificationPermissionConstants from "NotificationPermissionConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
({ EventActionLocation: metroImportDefault, EventActionType: metroImportAll } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = {
  container: obj2,
  notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 },
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onComplete) => {
      let tmp12;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp7;
      const tmp = onComplete;
      let obj = onComplete(576);
      const cResult = obj.c(15);
      onComplete = onComplete.onComplete;
      const tmp4 = closure_11();
      if (cResult[0] !== onComplete) {
        const fn = function n() {
          const obj = NotificationPermissionUtil;
          const pushNotificationPermission = obj.requestPushNotificationPermission(
            metroImportAll.ALLOW_TO_REQUEST,
            metroImportDefault.ALERT,
            () => {
              if (onComplete != null) {
                tmp();
              }
            },
          );
        };
        cResult[0] = onComplete;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== onComplete) {
        const fn2 = function p() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
          obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
          const obj3 = PushNotificationActionCreators;
          const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
          const obj4 = NotificationPermissionUtil;
          const result1 = obj4.enableProvisionalPushNotification();
          if (onComplete != null) {
            tmp4(true);
          }
        };
        cResult[2] = onComplete;
        cResult[3] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
      }
      const container = tmp4.container;
      if (cResult[4] !== tmp4.notificationHeaderImage) {
        const tmp11 = (
          <closure_4 resizeMode="contain" style={tmp4.notificationHeaderImage} source={AssetRegistryDefault} />
        );
        cResult[4] = tmp4.notificationHeaderImage;
        cResult[5] = tmp11;
        tmp7 = tmp11;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["3nx0b5"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.Gf7U1T);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        tmp13 = stringResult1;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          let tmp16;
          if (cResult[10] === tmp7) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp4.container) {
            let tmp18;
            if (cResult[13] === tmp16) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
          const tmp21 = <closure_5 style={container}>{tmp16}</closure_5>;
          cResult[12] = tmp4.container;
          cResult[13] = tmp16;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const tmp17 = jsx(NewUserPermissionsOnboardingDefault, {
        onAllow: tmp5,
        onDontAllow: tmp6,
        header: tmp7,
        title: tmp12,
        subtitle: tmp13,
      });
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp7;
      cResult[11] = tmp17;
      tmp16 = tmp17;
    }
  : (onComplete) => {
      let intl;
      let intl2;
      onComplete = onComplete.onComplete;
      const tmp = closure_11();
      const items = [onComplete];
      const items1 = [onComplete];
      const callback = react.useCallback(() => {
        const obj = NotificationPermissionUtil;
        const pushNotificationPermission = obj.requestPushNotificationPermission(
          metroImportAll.ALLOW_TO_REQUEST,
          metroImportDefault.ALERT,
          () => {
            if (onComplete != null) {
              tmp();
            }
          },
        );
      }, items);
      const callback1 = react.useCallback(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }, items1);
      let obj2 = {
        onAllow: callback,
        onDontAllow: callback1,
        header: null,
        title: intl.string(onComplete(1126).t["3nx0b5"]),
        subtitle: intl2.string(onComplete(1126).t.Gf7U1T),
      };
      let obj3 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: AssetRegistryDefault };
      const tmp4 = NewUserPermissionsOnboardingDefault;
      intl = onComplete(1126).intl;
      intl2 = onComplete(1126).intl;
      return <closure_5 style={tmp.container}>{null}</closure_5>;
    };
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      const onComplete = route.route.params.onComplete;
      if (cResult[0] !== onComplete) {
        const tmp5 = <closure_12 onComplete={onComplete} />;
        cResult[0] = onComplete;
        cResult[1] = tmp5;
        tmp2 = tmp5;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (onComplete) => <closure_12 onComplete={onComplete.route.params.onComplete} />;
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp4;
export const RedesignNotificationScreen = tmp5;
