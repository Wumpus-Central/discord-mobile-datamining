// discord_app/components_native/chat/contentHandlers.tsx
import importDefaultResult from "castNativeSyntheticEventData";

const require = arg1;
let obj = {
  onLongPressLink(nativeEvent) {
    const url = nativeEvent.nativeEvent.url;
    let tmp = null != url;
    if (tmp) {
      tmp = "" !== url;
    }
    if (tmp) {
      const obj = { urlString: null };
      obj[0] = url;
      require("../../modules/links/native/showLongPressURLActionSheet.tsx")(obj);
    }
  },
  onTapAttachmentLink: null,
  onLongPressAttachmentLink: null,
  onTapMention: null,
  onTapTimestamp: null,
  onTapInlineCode: null,
  onTapEmoji: null
};
let closure_4 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (function*(arg0) {
    let callback = tmp2;
    attachmentUrl = attachmentUrl.nativeEvent.data.attachmentUrl;
    yield "ct";
    if (1 === tmp5) {
      if (arg0 === 1) {
        let c4 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj1 = { value: null, done: true };
        obj1[0] = arg1;
        return obj1;
      } else {
        if (null != attachmentUrl) {
          if ("" !== attachmentUrl) {
            const obj3 = attachmentUrl(9661);
            let c3 = 2;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj3.maybeRefreshAttachmentUrl(attachmentUrl);
            return obj2;
          }
        }
        c4 = 3;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback = arg1;
      const obj = callback(8859);
      obj.trackLinkClicked(callback);
      obj1 = callback(3982);
      obj1.openURL(callback);
    }
    return arg1;
  })();
  iter.next();
  return iter;
});
obj[1] = function() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_3 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (function*(arg0) {
    let callback = tmp2;
    attachmentUrl = attachmentUrl.nativeEvent.data.attachmentUrl;
    yield "ct";
    if (1 === tmp5) {
      if (arg0 === 1) {
        let c4 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj1 = { value: null, done: true };
        obj1[0] = arg1;
        return obj1;
      } else {
        if (null != attachmentUrl) {
          if ("" !== attachmentUrl) {
            let obj2 = attachmentUrl(9661);
            let c3 = 2;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj2.maybeRefreshAttachmentUrl(attachmentUrl);
            return obj2;
          }
        }
        c4 = 3;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback = arg1;
      const obj = { urlString: null };
      obj[0] = callback;
      callback(10971)(obj);
    }
    return arg1;
  })();
  iter.next();
  return iter;
});
obj[2] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj[3] = function onTapMention(closure_0) {
  let channelId;
  let guildId;
  let parsedUserId;
  let roleId;
  let roleName;
  let userId;
  let obj = parsedUserId(10934);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
    obj[0] = userId;
    obj[1] = channelId;
    const items = [require("../../modules/app_analytics/AnalyticsLocation.tsx").USER_MENTION];
    obj[2] = items;
    require("../../modules/user_profile/native/showUserProfileActionSheet.tsx")(obj);
    const tmp15 = require("../../modules/user_profile/native/showUserProfileActionSheet.tsx");
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId: null, roleId: null, channelId: null };
        obj[0] = guildId;
        obj[1] = roleId;
        obj[2] = channelId;
        require("../../modules/action_sheet/native/ActionSheetActionCreators.tsx").openLazy(tmp(1959)(10974, tmp2.paths), "RoleMembersActionSheet", obj);
        const obj9 = require("../../modules/action_sheet/native/ActionSheetActionCreators.tsx");
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj1 = { guildId: null, roleId: null, channelId: null };
        obj1[0] = guildId;
        const obj6 = require("../../modules/action_sheet/native/ActionSheetActionCreators.tsx");
        const tmp10 = tmp(1959)(10974, tmp2.paths);
        obj1[1] = require("../../utils/SnowflakeUtils.tsx").castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1[2] = channelId;
        obj6.openLazy(tmp10, "RoleMembersActionSheet", obj1);
        const obj8 = require("../../utils/SnowflakeUtils.tsx");
      }
    }
    if (null == roleName) {
      const DeveloperMode = tmp(3958).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj2 = { secondaryConfirmText: null, onConfirmSecondary: null };
          const intl = tmp(1236).intl;
          obj2[0] = intl.string(tmp(1236).t["/AXYnE"]);
          obj2[1] = function onConfirmSecondary() {
            parsedUserId(outer1_2[14]).copy(parsedUserId);
            const obj = parsedUserId(outer1_2[14]);
            const result = parsedUserId(outer1_2[15]).presentCopiedToClipboard();
          };
          let obj4 = obj2;
        }
        let obj3 = require("../../actions/AlertActionCreators.tsx");
        obj3 = { title: null, body: null, confirmText: null, isDismissable: true };
        const intl2 = tmp(1236).intl;
        obj3[0] = intl2.string(tmp(1236).t.r0DLNm);
        const intl3 = tmp(1236).intl;
        obj3[1] = intl3.string(tmp(1236).t.Fqqbhg);
        const intl4 = tmp(1236).intl;
        obj3[2] = intl4.string(tmp(1236).t.BddRzS);
        const merged = Object.assign(obj4);
        obj3.show(obj3);
      }
      obj4 = {};
    }
  }
};
obj[4] = function onTapTimestamp(nativeEvent) {
  require("../../modules/toast/native/ToastUtils.tsx") /* presentAddedFriendToast */.presentTimestamp(nativeEvent.nativeEvent.node.full);
};
obj[5] = function onTapInlineCode(nativeEvent) {
  const node = nativeEvent.nativeEvent.node;
  if (tmp) {
    require("../../utils/ClipboardUtils.native.tsx") /* _copy */.copy(node.content);
    const obj = require("../../utils/ClipboardUtils.native.tsx") /* _copy */;
    const result = require("../../modules/toast/native/ToastUtils.tsx") /* presentAddedFriendToast */.presentCopiedToClipboard();
    const obj2 = require("../../modules/toast/native/ToastUtils.tsx") /* presentAddedFriendToast */;
  }
};
obj[6] = function onTapEmoji(emojiNode) {
  require("../../modules/action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8656, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
let result = require("shouldRefreshAttachmentUrl").fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;