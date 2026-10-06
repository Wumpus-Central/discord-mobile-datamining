// discord_app/modules/in_app_notifications/native/MessageRequestNotification.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import MessagePreviewText from "MessagePreviewText.tsx";
import Notification from "Notification.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let notification;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      let author;
      let numMutualGuilds;
      let obj = react2;
      const cResult = obj.c(13);
      notification = notification.notification;
      ({ author, numMutualGuilds } = notification);
      if (cResult[0] === author.username) {
        let tmp4;
        let tmp6;
        let tmp8;
        let tmp9;
        let tmp12;
        if (cResult[1] === numMutualGuilds) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          let obj2 = { type: "simple", text: tmp4 };
          cResult[3] = tmp4;
          cResult[4] = obj2;
          tmp6 = obj2;
        } else {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v() {
            const obj = InAppNotificationActionCreatorsDefault;
            obj.clearNotification();
            const obj2 = RootNavigationRef;
            const rootNavigationRef = obj2.getRootNavigationRef();
            if (rootNavigationRef != null) {
              rootNavigationRef.navigate("message-requests");
            }
          };
          cResult[5] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== author) {
          const Avatar = native.Avatar;
          const tmp11 = <Avatar user={author} size={native.AvatarSizes.NORMAL} guildId="Array" />;
          cResult[6] = author;
          cResult[7] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const SystemMessageText = MessagePreviewText.SystemMessageText;
          const intl2 = intl3.intl;
          const tmp14 = <SystemMessageText text={intl2.string(intl3.t["Bx4/Lf"])} />;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === notification) {
            let tmp15;
            if (cResult[11] === tmp9) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const tmp17 = jsx(Notification.NotificationPressable, {
          icon: tmp9,
          header: tmp6,
          children: tmp12,
          onPress: tmp8,
          notification,
        });
        cResult[9] = tmp6;
        cResult[10] = notification;
        cResult[11] = tmp9;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      const intl = intl3.intl;
      const obj6 = { name: author.username, count: numMutualGuilds };
      const formatToPlainStringResult = intl.formatToPlainString(intl3.t.LeYU4d, obj6);
      cResult[0] = author.username;
      cResult[1] = numMutualGuilds;
      cResult[2] = formatToPlainStringResult;
      tmp4 = formatToPlainStringResult;
    }
  : (notification) => {
      let intl;
      notification = notification.notification;
      const author = notification.author;
      const numMutualGuilds = notification.numMutualGuilds;
      const items = [author.username, numMutualGuilds];
      const memo = react.useMemo(() => {
        let intl;
        const obj = { type: "simple", text: intl.formatToPlainString(intl3.t.LeYU4d, obj2) };
        intl = intl3.intl;
        return obj;
      }, items);
      const callback = react.useCallback(() => {
        const obj = numMutualGuilds(dependencyMap[5]);
        obj.clearNotification();
        const obj2 = author(dependencyMap[6]);
        const rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("message-requests");
        }
      }, []);
      const NotificationPressable = author(12531).NotificationPressable;
      let obj2 = { user: author, size: author(1188).AvatarSizes.NORMAL, guildId: "Array" };
      const Avatar = author(1188).Avatar;
      ({ text: intl.string(author(1126).t["Bx4/Lf"]) });
      const SystemMessageText = author(12501).SystemMessageText;
      intl = author(1126).intl;
      return (
        <NotificationPressable icon={null} header={memo} onPress={callback} notification={notification}>
          {null}
        </NotificationPressable>
      );
    };
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default tmp2;
