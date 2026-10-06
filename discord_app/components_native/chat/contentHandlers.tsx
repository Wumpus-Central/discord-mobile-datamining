// discord_app/components_native/chat/contentHandlers.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import AnalyticsLocationDefault from "../../modules/app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../modules/user_profile/native/showUserProfileActionSheet.tsx";
import showLongPressURLActionSheetDefault from "../../modules/links/native/showLongPressURLActionSheet.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_1, fileName, urlString;

let obj = {
  onLongPressLink(nativeEvent) {
    const url = nativeEvent.nativeEvent.url;
    const tmp = null != url && "" !== url;
    if (tmp) {
      const obj = { urlString: url };
      showLongPressURLActionSheetDefault(obj);
    }
  },
  onTapAttachmentLink: function () {
    return closure_6(...arguments);
  },
  onTapAttachmentTextPreview: function () {
    return closure_5(...arguments);
  },
  onLongPressAttachmentLink: function () {
    return closure_4(...arguments);
  },
  onTapMention(nativeEvent) {
    let channelId;
    let guildId;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let obj6;
    let parsedUserId;
    let roleId;
    let roleName;
    let userId;
    let obj = parsedUserId(11177);
    const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
    ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
    ({ roleId, guildId } = nativeSyntheticEventData);
    if (null != userId) {
      let obj2 = { userId, channelId, sourceAnalyticsLocations: items };
      items = [];
      const tmp17 = showUserProfileActionSheetDefault;
      items[0] = AnalyticsLocationDefault.USER_MENTION;
      tmp17(obj2);
    } else {
      if (null != roleId) {
        if (null != guildId) {
          const obj3 = { guildId, roleId, channelId };
          const obj7 = ActionSheetActionCreatorsDefault;
          obj7.openLazy(parsedUserId(1987)(11222, dependencyMap.paths), "RoleMembersActionSheet", obj3);
        }
      }
      if ("@everyone" === roleName) {
        if (null != guildId) {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj4 = { guildId, roleId: obj6.castGuildIdAsEveryoneGuildRoleId(guildId), channelId };
          ActionSheetActionCreatorsDefault;
          const tmp12 = parsedUserId(1987)(11222, dependencyMap.paths);
          obj6 = SnowflakeUtilsDefault;
          openLazy(tmp12, "RoleMembersActionSheet", obj4);
        }
      }
      if (null == roleName) {
        const DeveloperMode = parsedUserId(2028).DeveloperMode;
        if (DeveloperMode.getSetting()) {
          let obj9;
          if (null != parsedUserId) {
            const obj5 = {
              secondaryConfirmText: intl.string(parsedUserId(1126).t["/AXYnE"]),
              onConfirmSecondary() {
                const obj = ClipboardUtils;
                obj.copy(parsedUserId);
                const obj2 = ToastUtils;
                const result = obj2.presentCopiedToClipboard();
              },
            };
            intl = parsedUserId(1126).intl;
            obj9 = obj5;
          }
          const obj8 = {
            title: intl2.string(parsedUserId(1126).t.r0DLNm),
            body: intl3.string(parsedUserId(1126).t.Fqqbhg),
            confirmText: intl4.string(parsedUserId(1126).t.BddRzS),
            isDismissable: true,
          };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl2 = parsedUserId(1126).intl;
          intl3 = parsedUserId(1126).intl;
          intl4 = parsedUserId(1126).intl;
          const merged = Object.assign(obj9);
          show(obj8);
        }
        obj9 = {};
      }
    }
  },
  onTapTimestamp(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const obj = ToastUtils;
    obj.presentTimestamp(node.full);
  },
  onTapInlineCode(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const tmp = null != node.content && typeof node.content === "string";
    if (tmp) {
      const obj = ClipboardUtils;
      obj.copy(node.content);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  },
  onTapEmoji(nativeEvent) {
    const node = nativeEvent.nativeEvent.node;
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(9946, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: node });
  },
};
let closure_6 = _asyncToGenerator(async (arg0) => {
  let closure_2;
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0) => {
    let attachmentUrl;
    let obj4;
    if (1 === c3) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (null != attachmentUrl) {
        if ("" !== attachmentUrl) {
          c3 = 2;
          c4 = 1;
          const obj7 = { value: obj4.maybeRefreshAttachmentUrl(attachmentUrl), done: false };
          obj4 = closure_130_2(closure_130_3[2]);
          return obj7;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_1 = value;
      const obj = closure_130_1(closure_130_3[3]);
      obj.trackLinkClicked(closure_1);
      const obj2 = closure_130_1(closure_130_3[4]);
      obj2.openURL(closure_1);
    }
    await "IconComponent";
    closure_1 = tmp;
    attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
    return "Reflect";
  })();
  iter.next();
  return iter;
});
let closure_5 = _asyncToGenerator(async (arg0) => {
  let closure_3;
  const nativeEvent = arg0;
  let c4 = 0;
  let c5 = 0;
  const iter = (async (arg0) => {
    let c0;
    let c1;
    let obj3;
    if (1 === c4) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else if (null != c0) {
        if ("" !== c0) {
          c4 = 2;
          c5 = 1;
          const obj6 = { value: obj3.maybeRefreshAttachmentUrl(c0), done: false };
          obj3 = closure_131_2(closure_131_3[2]);
          return obj6;
        }
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      url = value;
      const obj = { url, fileName };
      const openPlaintextFilePreview = closure_131_0(closure_131_3[5]).openPlaintextFilePreview;
      closure_131_0(closure_131_3[5]);
      if (fileName == null) {
        fileName = "";
      }
      const result = openPlaintextFilePreview(obj);
    }
    await "IconComponent";
    url = tmp;
    ({ attachmentUrl: c0, fileName: c1 } = nativeEvent.nativeEvent.data);
    return "Reflect";
  })();
  iter.next();
  return iter;
});
let closure_4 = _asyncToGenerator(async (arg0) => {
  let closure_2;
  const nativeEvent = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0) => {
    let attachmentUrl;
    let obj3;
    if (1 === c3) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (null != attachmentUrl) {
        if ("" !== attachmentUrl) {
          c3 = 2;
          c4 = 1;
          const obj6 = { value: obj3.maybeRefreshAttachmentUrl(attachmentUrl), done: false };
          obj3 = closure_130_2(closure_130_3[2]);
          return obj6;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      urlString = value;
      const obj = { urlString };
      closure_130_1(closure_130_3[1])(obj);
    }
    await "IconComponent";
    urlString = tmp;
    attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
    return "Reflect";
  })();
  iter.next();
  return iter;
});
let result = size.fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
