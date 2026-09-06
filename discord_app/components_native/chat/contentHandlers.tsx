// discord_app/components_native/chat/contentHandlers.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import AnalyticsLocationDefault from "../../modules/app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../modules/user_profile/native/showUserProfileActionSheet.tsx";
import showLongPressURLActionSheetDefault from "../../modules/links/native/showLongPressURLActionSheet.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

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
  onTapEmoji: null,
};
let closure_5 = asyncGeneratorStep(async (arg0) => {
  const nativeEvent = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let attachmentUrl;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj1 = { value, done: true };
              return obj1;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  let obj3 = closure_130_2(closure_130_3[2]);
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: obj3.maybeRefreshAttachmentUrl(attachmentUrl), done: false };
                  return obj2;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            obj = closure_130_1(closure_130_3[3]);
            obj.trackLinkClicked(closure_129_1);
            obj1 = closure_130_1(closure_130_3[4]);
            obj1.openURL(closure_129_1);
          }
          c4 = 3;
          obj3 = { value, done: true };
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
obj.onTapAttachmentLink = function () {
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
  const iter = (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let attachmentUrl;
            attachmentUrl = nativeEvent.nativeEvent.data.attachmentUrl;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else {
              if (null != attachmentUrl) {
                if ("" !== attachmentUrl) {
                  let obj2 = closure_130_2(closure_130_3[2]);
                  c3 = 2;
                  c4 = 1;
                  obj2 = { value: null, done: false };
                  obj2.value = obj2.maybeRefreshAttachmentUrl(attachmentUrl);
                  return obj2;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            obj = { urlString: closure_129_1 };
            closure_130_1(closure_130_3[1])(obj);
          }
          c4 = 3;
          const obj3 = { value, done: true };
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
obj.onLongPressAttachmentLink = function () {
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
  let obj = parsedUserId(11547);
  const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
  ({ userId, channelId, roleName, parsedUserId } = nativeSyntheticEventData);
  ({ roleId, guildId } = nativeSyntheticEventData);
  if (null != userId) {
    obj = { userId, channelId, sourceAnalyticsLocations: null };
    const items = [AnalyticsLocationDefault.USER_MENTION];
    obj.sourceAnalyticsLocations = items;
    showUserProfileActionSheetDefault(obj);
  } else {
    if (null != roleId) {
      if (null != guildId) {
        obj = { guildId, roleId, channelId };
        ActionSheetActionCreatorsDefault.openLazy(tmp(1896)(11587, tmp2.paths), "RoleMembersActionSheet", obj);
      }
    }
    if ("@everyone" === roleName) {
      if (null != guildId) {
        const obj1 = { guildId, roleId: null, channelId: null };
        const obj6 = ActionSheetActionCreatorsDefault;
        const tmp10 = tmp(1896)(11587, tmp2.paths);
        obj1.roleId = SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
        obj1.channelId = channelId;
        obj6.openLazy(tmp10, "RoleMembersActionSheet", obj1);
      }
    }
    if (null == roleName) {
      const DeveloperMode = tmp(1935).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        if (null != parsedUserId) {
          const obj2 = { secondaryConfirmText: null, onConfirmSecondary: null };
          const intl = tmp(1114).intl;
          obj2.secondaryConfirmText = intl.string(tmp(1114).t["/AXYnE"]);
          obj2.onConfirmSecondary = function onConfirmSecondary() {
            ClipboardUtils.copy(parsedUserId);
            const result = ToastUtils.presentCopiedToClipboard();
          };
          let obj4 = obj2;
        }
        const obj3 = { title: null, body: null, confirmText: null, isDismissable: true };
        const intl2 = tmp(1114).intl;
        obj3.title = intl2.string(tmp(1114).t.r0DLNm);
        const intl3 = tmp(1114).intl;
        obj3.body = intl3.string(tmp(1114).t.Fqqbhg);
        const intl4 = tmp(1114).intl;
        obj3.confirmText = intl4.string(tmp(1114).t.BddRzS);
        const merged = Object.assign(obj4);
        obj3.show(obj3);
      }
      obj4 = {};
    }
  }
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
};
obj.onTapEmoji = function onTapEmoji(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10329, dependencyMap.paths), "MessageEmojiActionSheet", {
    emojiNode: emojiNode.nativeEvent.node,
  });
};
const size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/contentHandlers.tsx");

export const contentHandlers = obj;
