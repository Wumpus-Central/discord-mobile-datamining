// discord_app/modules/in_app_notifications/native/MessageFailedToSendNotification.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import flow_Client from "../../../flow/Client.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let notification;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { iconContainer: size };
size = {
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (notification) => {
        let channelId;
        let first;
        let intl;
        let obj = channelId(576);
        const cResult = obj.c(12);
        notification = notification.notification;
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { type: "simple", text: intl.string(channelId(1126).t.Q0x94X) };
          intl = tmp(1126).intl;
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        channelId = notification.channelId;
        const messageId = notification.messageId;
        if (cResult[1] === channelId) {
          let tmp6;
          let tmp7;
          let tmp11;
          let tmp15;
          if (cResult[2] === messageId) {
            tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const RetryIcon = tmp(11377).RetryIcon;
            const tmp10 = <RetryIcon size="md" color={messageId(587).colors.ICON_SUBTLE} />;
            cResult[4] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
          if (cResult[5] !== tmp4.iconContainer) {
            const tmp14 = <View style={tmp4.iconContainer}>{tmp7}</View>;
            cResult[5] = tmp4.iconContainer;
            cResult[6] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const SystemMessageText = tmp(12501).SystemMessageText;
            const intl2 = tmp(1126).intl;
            const tmp17 = <SystemMessageText text={intl2.string(channelId(1126).t.xxRPOT)} />;
            cResult[7] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] === notification) {
            if (cResult[9] === tmp6) {
              let tmp18;
              if (cResult[10] === tmp11) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
          const tmp20 = jsx(channelId(12531).NotificationPressable, {
            icon: tmp11,
            children: tmp15,
            header: first,
            onPress: tmp6,
            notification,
          });
          cResult[8] = notification;
          cResult[9] = tmp6;
          cResult[10] = tmp11;
          cResult[11] = tmp20;
          tmp18 = tmp20;
        }
        const fn = function p() {
          const obj = transitionToChannel;
          const obj2 = { jumpType: flow_Client.JumpType.INSTANT };
          obj.transitionToMessage(channelId, messageId, obj2);
        };
        cResult[1] = channelId;
        cResult[2] = messageId;
        cResult[3] = fn;
        tmp6 = fn;
      }
    : (notification) => {
        let intl;
        let intl2;
        notification = notification.notification;
        let channelId;
        let obj = { type: "simple", text: intl.string(channelId(1126).t.Q0x94X) };
        const tmp = closure_6();
        intl = channelId(1126).intl;
        channelId = notification.channelId;
        const messageId = notification.messageId;
        const items = [channelId, messageId];
        const callback = react.useCallback(() => {
          const obj = transitionToChannel;
          const obj2 = { jumpType: flow_Client.JumpType.INSTANT };
          obj.transitionToMessage(channelId, messageId, obj2);
        }, items);
        const NotificationPressable = channelId(12531).NotificationPressable;
        ({ size: "md", color: messageId(587).colors.ICON_SUBTLE });
        const RetryIcon = channelId(11377).RetryIcon;
        ({ text: intl2.string(channelId(1126).t.xxRPOT) });
        const SystemMessageText = channelId(12501).SystemMessageText;
        intl2 = channelId(1126).intl;
        return (
          <NotificationPressable icon={null} header={obj} onPress={callback} notification={notification}>
            {null}
          </NotificationPressable>
        );
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;
