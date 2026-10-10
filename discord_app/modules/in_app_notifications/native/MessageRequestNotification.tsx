// discord_app/modules/in_app_notifications/native/MessageRequestNotification.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import MessagePreviewText from "MessagePreviewText.tsx";
import Notification from "Notification.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageRequestInAppNotification(notification) {
      const cResult = c.c(13);
      notification = notification.notification;
      ({ author, numMutualGuilds } = notification);
      if (cResult[0] === author.username) {
        if (cResult[1] === numMutualGuilds) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj2 = { type: "simple", text: tmp4 };
          cResult[3] = tmp4;
          cResult[4] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v() {
            InAppNotificationActionCreatorsDefault.clearNotification();
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (rootNavigationRef != null) {
              rootNavigationRef.navigate("message-requests");
            }
          };
          cResult[5] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== author) {
          const obj3 = { user: author, size: native.AvatarSizes.NORMAL, guildId: "Array" };
          const tmp11 = jsx(native.Avatar, { user: author, size: native.AvatarSizes.NORMAL, guildId: "Array" });
          cResult[6] = author;
          cResult[7] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { text: null };
          const intl2 = util.intl;
          obj4.text = intl2.string(util.t["Bx4/Lf"]);
          const tmp14 = jsx(MessagePreviewText.SystemMessageText, { text: null });
          cResult[8] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === notification) {
            if (cResult[11] === tmp9) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const obj5 = { icon: tmp9, header: tmp6, children: tmp12, onPress: tmp8, notification };
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
      const intl = util.intl;
      const formatToPlainStringResult = intl.formatToPlainString(util.t.LeYU4d, {
        name: author.username,
        count: numMutualGuilds,
      });
      cResult[0] = author.username;
      cResult[1] = numMutualGuilds;
      cResult[2] = formatToPlainStringResult;
      tmp4 = formatToPlainStringResult;
      const obj6 = { name: author.username, count: numMutualGuilds };
    }
  : function MessageRequestInAppNotification(notification) {
      notification = notification.notification;
      const author = notification.author;
      const numMutualGuilds = notification.numMutualGuilds;
      const items = [author.username, numMutualGuilds];
      const memo = noop.useMemo(() => {
        const obj = { type: "simple", text: null };
        const intl = util.intl;
        obj.text = intl.formatToPlainString(util.t.LeYU4d, { name: author.username, count: numMutualGuilds });
        return obj;
      }, items);
      const callback = noop.useCallback(() => {
        numMutualGuilds(12577).clearNotification();
        const obj = numMutualGuilds(12577);
        const rootNavigationRef = author(4977).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("message-requests");
        }
      }, []);
      let obj = {
        icon: jsx(author(1200).Avatar, { user: author, size: author(1200).AvatarSizes.NORMAL, guildId: "Array" }),
        header: memo,
        children: null,
        onPress: null,
        notification: null,
      };
      const obj3 = { text: null };
      let intl = author(1126).intl;
      obj3.text = intl.string(author(1126).t["Bx4/Lf"]);
      obj.children = jsx(author(12584).SystemMessageText, { text: null });
      obj.onPress = callback;
      obj.notification = notification;
      return jsx(author(12614).NotificationPressable, {
        icon: jsx(author(1200).Avatar, { user: author, size: author(1200).AvatarSizes.NORMAL, guildId: "Array" }),
        header: memo,
        children: null,
        onPress: null,
        notification: null,
      });
    };
