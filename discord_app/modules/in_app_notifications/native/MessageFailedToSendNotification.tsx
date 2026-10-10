// discord_app/modules/in_app_notifications/native/MessageFailedToSendNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Client from "../../../flow/Client.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { iconContainer: null };
let size = {
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
obj.iconContainer = size;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessageFailedToSendNotification(notification) {
        const cResult = channelId(576).c(12);
        notification = notification.notification;
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { type: "simple", text: null };
          const intl = tmp(1126).intl;
          obj2.text = intl.string(tmp(1126).t.Q0x94X);
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        channelId = notification.channelId;
        const messageId = notification.messageId;
        if (cResult[1] === channelId) {
          if (cResult[2] === messageId) {
            let tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "md", color: messageId(587).colors.ICON_SUBTLE };
            const tmp10 = jsx(tmp(12620).RetryIcon, { size: "md", color: messageId(587).colors.ICON_SUBTLE });
            cResult[4] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
          if (cResult[5] !== tmp4.iconContainer) {
            const obj4 = { style: tmp4.iconContainer, children: tmp7 };
            const tmp14 = <View style={tmp4.iconContainer}>{tmp7}</View>;
            cResult[5] = tmp4.iconContainer;
            cResult[6] = tmp14;
            let tmp11 = tmp14;
          } else {
            tmp11 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { text: null };
            const intl2 = tmp(1126).intl;
            obj5.text = intl2.string(tmp(1126).t.xxRPOT);
            const tmp17 = jsx(tmp(12584).SystemMessageText, { text: null });
            cResult[7] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] === notification) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp11) {
                let tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
          const obj6 = { icon: tmp11, children: tmp15, header: first, onPress: tmp6, notification };
          const tmp20 = jsx(tmp(12614).NotificationPressable, {
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
        const fn = function y() {
          const obj = transitionToChannel;
          obj.transitionToMessage(channelId, messageId, { jumpType: Client.JumpType.INSTANT });
        };
        cResult[1] = channelId;
        cResult[2] = messageId;
        cResult[3] = fn;
        tmp6 = fn;
        let obj = channelId(576);
      }
    : function MessageFailedToSendNotification(notification) {
        notification = notification.notification;
        let channelId;
        let obj = { type: "simple", text: null };
        const intl = channelId(1126).intl;
        obj.text = intl.string(channelId(1126).t.Q0x94X);
        channelId = notification.channelId;
        const messageId = notification.messageId;
        const items = [channelId, messageId];
        const callback = noop.useCallback(() => {
          const obj = transitionToChannel;
          obj.transitionToMessage(channelId, messageId, { jumpType: Client.JumpType.INSTANT });
        }, items);
        const obj2 = { icon: null, children: null, header: null, onPress: null, notification: null };
        const obj3 = { style: closure_6().iconContainer, children: null };
        const tmp = closure_6();
        obj3.children = jsx(channelId(12620).RetryIcon, { size: "md", color: messageId(587).colors.ICON_SUBTLE });
        obj2.icon = <View style={closure_6().iconContainer}>{null}</View>;
        const obj5 = { text: null };
        const intl2 = channelId(1126).intl;
        obj5.text = intl2.string(channelId(1126).t.xxRPOT);
        obj2.children = jsx(channelId(12584).SystemMessageText, { text: null });
        obj2.header = obj;
        obj2.onPress = callback;
        obj2.notification = notification;
        return jsx(channelId(12614).NotificationPressable, {
          icon: null,
          children: null,
          header: null,
          onPress: null,
          notification: null,
        });
      },
);
