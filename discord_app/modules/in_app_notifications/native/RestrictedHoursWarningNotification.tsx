// discord_app/modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const lineClamp = fn(12576).NOTIFICATION_PREVIEW_LINE_CLAMP;
const Constants = fn(1085);
({ InAppNotificationTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { iconContainer: null };
let size = {
  width: 48,
  height: 48,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconContainer = size;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function RestrictedHoursWarningNotification(notification) {
        const cResult = type(576).c(15);
        notification = notification.notification;
        const tmp4 = closure_9();
        type = notification.type;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { size: "sm", color: nativeDefault.colors.WHITE };
          const tmp8 = jsx(tmp(12682).ThemeDarkIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.iconContainer) {
          let obj3 = { style: tmp4.iconContainer, children: first };
          const tmp12 = <View style={tmp4.iconContainer}>{first}</View>;
          cResult[1] = tmp4.iconContainer;
          cResult[2] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== notification.title) {
          let obj4 = { type: "simple", text: notification.title };
          cResult[3] = notification.title;
          cResult[4] = obj4;
          let tmp13 = obj4;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] !== type) {
          class N {
            constructor() {
              if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[10]);
                popAllResult = obj.popAll();
                obj2 = closure_1(closure_2[11]);
                clearNotificationResult = obj2.clearNotification();
              }
              obj3 = closure_0(closure_2[12]);
              obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
              openUserSettingsResult = obj3.openUserSettings(obj1);
              return;
            }
          }
          cResult[5] = type;
          cResult[6] = N;
        } else {
          class N {
            constructor() {
              if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[10]);
                popAllResult = obj.popAll();
                obj2 = closure_1(closure_2[11]);
                clearNotificationResult = obj2.clearNotification();
              }
              obj3 = closure_0(closure_2[12]);
              obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
              openUserSettingsResult = obj3.openUserSettings(obj1);
              return;
            }
          }
        }
        if (cResult[7] !== notification.subtitle) {
          class N {
            constructor() {
              if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[10]);
                popAllResult = obj.popAll();
                obj2 = closure_1(closure_2[11]);
                clearNotificationResult = obj2.clearNotification();
              }
              obj3 = closure_0(closure_2[12]);
              obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
              openUserSettingsResult = obj3.openUserSettings(obj1);
              return;
            }
          }
          const obj5 = {
            variant: "redesign/message-preview/medium",
            color: "text-subtle",
            lineClamp,
            children: notification.subtitle,
          };
          const tmp17 = jsx(tmp(5088).Text, {
            variant: "redesign/message-preview/medium",
            color: "text-subtle",
            lineClamp,
            children: notification.subtitle,
          });
          cResult[7] = notification.subtitle;
          cResult[8] = tmp17;
        } else {
          class N {
            constructor() {
              if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[10]);
                popAllResult = obj.popAll();
                obj2 = closure_1(closure_2[11]);
                clearNotificationResult = obj2.clearNotification();
              }
              obj3 = closure_0(closure_2[12]);
              obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
              openUserSettingsResult = obj3.openUserSettings(obj1);
              return;
            }
          }
        }
        if (cResult[9] === tmp13) {
          class N {
            constructor() {
              if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[10]);
                popAllResult = obj.popAll();
                obj2 = closure_1(closure_2[11]);
                clearNotificationResult = obj2.clearNotification();
              }
              obj3 = closure_0(closure_2[12]);
              obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
              openUserSettingsResult = obj3.openUserSettings(obj1);
              return;
            }
          }
        }
        let obj = type(576);
        cResult[9] = tmp13;
        cResult[10] = tmp9;
        cResult[11] = notification;
        cResult[12] = N;
        cResult[13] = tmp15;
        cResult[14] = jsx(type(12614).NotificationPressable, {
          icon: tmp9,
          header: tmp13,
          children: tmp15,
          onPress: N,
          notification,
        });
        const tmp18 = jsx(type(12614).NotificationPressable, {
          icon: tmp9,
          header: tmp13,
          children: tmp15,
          onPress: N,
          notification,
        });
      }
    : function RestrictedHoursWarningNotification(notification) {
        notification = notification.notification;
        const type = notification.type;
        let obj = {
          style: closure_9().iconContainer,
          children: jsx(notification(12682).ThemeDarkIcon, { size: "sm", color: type(587).colors.WHITE }),
        };
        const items = [notification.title];
        let obj2 = { size: "sm", color: type(587).colors.WHITE };
        const items1 = [type];
        const memo = noop.useMemo(() => ({ type: "simple", text: notification.title }), items);
        const callback = noop.useCallback(() => {
          if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
            ModalActionCreatorsDefault.popAll();
            InAppNotificationActionCreatorsDefault.clearNotification();
          }
          openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
          const obj4 = { screen: constants2.FAMILY_CENTER };
        }, items1);
        let obj3 = {
          icon: (
            <View style={closure_9().iconContainer}>
              {jsx(notification(12682).ThemeDarkIcon, { size: "sm", color: type(587).colors.WHITE })}
            </View>
          ),
          header: memo,
          children: jsx(notification(5088).Text, {
            variant: "redesign/message-preview/medium",
            color: "text-subtle",
            lineClamp,
            children: notification.subtitle,
          }),
          onPress: callback,
          notification,
        };
        return jsx(notification(12614).NotificationPressable, {
          icon: (
            <View style={closure_9().iconContainer}>
              {jsx(notification(12682).ThemeDarkIcon, { size: "sm", color: type(587).colors.WHITE })}
            </View>
          ),
          header: memo,
          children: jsx(notification(5088).Text, {
            variant: "redesign/message-preview/medium",
            color: "text-subtle",
            lineClamp,
            children: notification.subtitle,
          }),
          onPress: callback,
          notification,
        });
      },
);
