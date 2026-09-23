// === Module 11917: contentHandlers ===

// Module 11917 (contentHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5193 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7513 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8523 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11915 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let obj = {
  onLongPressLink(nativeEvent) {
    const url = nativeEvent.nativeEvent.url;
    let tmp = null != url;
    if (tmp) {
      tmp = "" !== url;
    }
    if (tmp) {
      const obj = { urlString: url };
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
let closure_5 = asyncGeneratorStep(async (arg0) => {
  const nativeEvent = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let attachmentUrl;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  c3 = 2;
                  c4 = 1;
                  const obj7 = { value: closure_130_2(closure_130_3[2]).maybeRefreshAttachmentUrl(attachmentUrl), done: false };
                  return obj7;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            closure_130_1(closure_130_3[3]).trackLinkClicked(closure_129_1);
            const obj = closure_130_1(closure_130_3[3]);
            closure_130_1(closure_130_3[4]).openURL(closure_129_1);
            const obj2 = closure_130_1(closure_130_3[4]);
          }
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
obj.onTapAttachmentLink = function() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_4 = asyncGeneratorStep(async (arg0) => {
  const nativeEvent = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let attachmentUrl;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: closure_130_2(closure_130_3[2]).maybeRefreshAttachmentUrl(attachmentUrl), done: false };
                  return obj6;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            const obj = { urlString: closure_129_1 };
            closure_130_1(closure_130_3[1])(obj);
          }
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
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
obj.onLongPressAttachmentLink = function() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj.onTapMention = function onTapMention(nativeEvent) {
  const nativeSyntheticEventData = parsedUserId(11878).getNativeSyntheticEventData(nativeEvent);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    const obj2 = { userId, channelId, sourceAnalyticsLocations: null };
    const items = [AnalyticsLocationDefault.USER_MENTION];
    obj2.sourceAnalyticsLocations = items;
    showUserProfileActionSheetDefault(obj2);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        const obj3 = { guildId, roleId, channelId };
        ActionSheetActionCreatorsDefault.openLazy(parsedUserId(1980)(11918, dependencyMap.paths), "RoleMembersActionSheet", obj3);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj5 = { guildId, roleId: null, channelId: null };
        const obj6 = ActionSheetActionCreatorsDefault;
        const tmp10 = parsedUserId(1980)(11918, dependencyMap.paths);
        obj5.roleId = SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
        obj5.channelId = channelId;
        obj6.openLazy(tmp10, "RoleMembersActionSheet", obj5);
      }
    }
    if (null == roleName) {
      const DeveloperMode = parsedUserId(2020).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj7 = { secondaryConfirmText: null, onConfirmSecondary: null };
          const intl = parsedUserId(1115).intl;
          obj7.secondaryConfirmText = intl.string(parsedUserId(1115).t["/AXYnE"]);
          obj7.onConfirmSecondary = function onConfirmSecondary() {
            ClipboardUtils.copy(parsedUserId);
            const result = ToastUtils.presentCopiedToClipboard();
          };
          let obj11 = obj7;
        }
        const obj10 = { title: null, body: null, confirmText: null, isDismissable: true };
        const intl2 = parsedUserId(1115).intl;
        obj10.title = intl2.string(parsedUserId(1115).t.r0DLNm);
        const intl3 = parsedUserId(1115).intl;
        obj10.body = intl3.string(parsedUserId(1115).t.Fqqbhg);
        const intl4 = parsedUserId(1115).intl;
        obj10.confirmText = intl4.string(parsedUserId(1115).t.BddRzS);
        const merged = Object.assign(obj11);
        AlertActionCreatorsDefault.show(obj10);
      }
      obj11 = {};
    }
  }
  let obj = parsedUserId(11878);
};
obj.onTapTimestamp = function onTapTimestamp(nativeEvent) {
  ToastUtils.presentTimestamp(nativeEvent.nativeEvent.node.full);
};
obj.onTapInlineCode = function onTapInlineCode(nativeEvent) {
  const node = nativeEvent.nativeEvent.node;
  if (tmp) {
    ClipboardUtils.copy(node.content);
    const result = ToastUtils.presentCopiedToClipboard();
  }
  tmp = null != node.content && typeof node.content === "string";
};
obj.onTapEmoji = function onTapEmoji(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10670, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode: emojiNode.nativeEvent.node });
};
const size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;