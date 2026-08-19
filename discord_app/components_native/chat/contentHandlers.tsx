// discord_app/components_native/chat/contentHandlers.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import presentAddedFriendToast from "../../modules/toast/native/ToastUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import obj132Default from "../../actions/AlertActionCreators.tsx";
import QUICK_SWITCHERDefault from "../../modules/app_analytics/AnalyticsLocation.tsx";
import _copy from "../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../modules/user_profile/native/showUserProfileActionSheet.tsx";
import showLongPressURLActionSheetDefault from "../../modules/links/native/showLongPressURLActionSheet.tsx";
import importDefaultResult from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
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
      showLongPressURLActionSheetDefault(obj);
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
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp5;
            let callback = tmp2;
            let attachmentUrl;
            attachmentUrl = attachmentUrl.nativeEvent.data.attachmentUrl;
            callback = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "ct", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  let obj3 = attachmentUrl(9085);
                  c3 = 2;
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
            obj = callback(8780);
            obj.trackLinkClicked(callback);
            obj1 = callback(4090);
            obj1.openURL(callback);
          }
          c4 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        }
      } catch (tmp25) {
        c4 = tmp;
        throw tmp25;
      }
    }
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
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp5;
            let callback = tmp2;
            let attachmentUrl;
            attachmentUrl = attachmentUrl.nativeEvent.data.attachmentUrl;
            callback = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "ct", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  let obj2 = attachmentUrl(9085);
                  c3 = 2;
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
            obj = { urlString: null };
            obj[0] = callback;
            callback(10781)(obj);
          }
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        }
      } catch (tmp22) {
        c4 = tmp;
        throw tmp22;
      }
    }
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
  let obj = parsedUserId(10739);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(closure_0);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
    obj[0] = userId;
    obj[1] = channelId;
    const items = [QUICK_SWITCHERDefault.USER_MENTION];
    obj[2] = items;
    showUserProfileActionSheetDefault(obj);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId: null, roleId: null, channelId: null };
        obj[0] = guildId;
        obj[1] = roleId;
        obj[2] = channelId;
        ACTION_SHEET_HEIGHT_HALFDefault.openLazy(parsedUserId(2007)(10784, dependencyMap.paths), "RoleMembersActionSheet", obj);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        obj1 = { guildId: null, roleId: null, channelId: null };
        obj1[0] = guildId;
        const obj6 = ACTION_SHEET_HEIGHT_HALFDefault;
        const tmp10 = parsedUserId(2007)(10784, dependencyMap.paths);
        obj1[1] = DISCORD_EPOCHDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1[2] = channelId;
        obj6.openLazy(tmp10, "RoleMembersActionSheet", obj1);
      }
    }
    if (null == roleName) {
      const DeveloperMode = parsedUserId(4066).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj2 = { secondaryConfirmText: null, onConfirmSecondary: null };
          const intl = parsedUserId(1236).intl;
          obj2[0] = intl.string(parsedUserId(1236).t["/AXYnE"]);
          obj2[1] = function onConfirmSecondary() {
            parsedUserId(dependencyMap[14]).copy(parsedUserId);
            const obj = parsedUserId(dependencyMap[14]);
            const result = parsedUserId(dependencyMap[15]).presentCopiedToClipboard();
          };
          let obj4 = obj2;
        }
        const obj3 = { title: null, body: null, confirmText: null, isDismissable: true };
        const intl2 = parsedUserId(1236).intl;
        obj3[0] = intl2.string(parsedUserId(1236).t.r0DLNm);
        const intl3 = parsedUserId(1236).intl;
        obj3[1] = intl3.string(parsedUserId(1236).t.Fqqbhg);
        const intl4 = parsedUserId(1236).intl;
        obj3[2] = intl4.string(parsedUserId(1236).t.BddRzS);
        const merged = Object.assign(obj4);
        obj3.show(obj3);
      }
      obj4 = {};
    }
  }
};
obj[4] = function onTapTimestamp(nativeEvent) {
  presentAddedFriendToast.presentTimestamp(nativeEvent.nativeEvent.node.full);
};
obj[5] = function onTapInlineCode(nativeEvent) {
  const node = nativeEvent.nativeEvent.node;
  if (tmp) {
    _copy.copy(node.content);
    const result = presentAddedFriendToast.presentCopiedToClipboard();
  }
  tmp = null != node.content && typeof node.content === "string";
};
obj[6] = function onTapEmoji(emojiNode) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9400, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
let result = require("obj132").fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;