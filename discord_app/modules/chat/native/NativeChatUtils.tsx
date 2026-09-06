// discord_app/modules/chat/native/NativeChatUtils.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import ChatNativeComponent from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker.tsx";
import NativeChatModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeChatModule.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

({ NativeModules: c3, findNodeHandle: closure_4 } = get_ActivityIndicator);
let ChatScrollPosition = {
  TOP: 0,
  [0]: "TOP",
  MIDDLE: 1,
  [1]: "MIDDLE",
  BOTTOM: 2,
  [2]: "BOTTOM",
  NONE: 3,
  [3]: "NONE",
};
ChatScrollPosition = {
  scrollTo(arg0, arg1, arg2) {
    if (null != arg0) {
      obj = arg2;
      if (arg2 == null) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      let TOP = obj.position;
      if (undefined === TOP) {
        TOP = obj.TOP;
      }
      if (obj2.isIOS()) {
        const tmp15 = React4(arg0);
        if (null != tmp15) {
          const DCDChatManager = React3.DCDChatManager;
          DCDChatManager.scrollTo(tmp15, arg1, tmp, tmp2, TOP);
        }
      } else {
        const Commands = ChatNativeComponent.Commands;
        Commands.scrollTo(arg0, arg1, tmp, tmp2, TOP);
      }
      obj2 = PlatformUtils;
    }
  },
  scrollToBottom(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp6 = React4(arg0);
        if (null != tmp6) {
          const DCDChatManager = React3.DCDChatManager;
          DCDChatManager.scrollToBottom(tmp6, arg1);
        }
      } else {
        const Commands = ChatNativeComponent.Commands;
        Commands.scrollToBottom(arg0, arg1);
      }
      obj = PlatformUtils;
    }
  },
  scrollToTop(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = React4(arg0);
        if (null != tmp4) {
          const DCDChatManager = React3.DCDChatManager;
          DCDChatManager.scrollToTop(tmp4, arg1);
        }
      }
      obj = PlatformUtils;
    }
  },
  scrollToRelativeOffset(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = React4(arg0);
        if (null != tmp4) {
          const DCDChatManager = React3.DCDChatManager;
          const result = DCDChatManager.scrollToRelativeOffset(tmp4, arg1, arg2);
        }
      }
      obj = PlatformUtils;
    }
  },
  scrollIntoView(arg0, arg1, arg2) {
    if (null != arg0) {
      obj = arg2;
      if (arg2 == null) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      if (obj2.isIOS()) {
        const tmp13 = React4(arg0);
        if (null != tmp13) {
          const DCDChatManager = React3.DCDChatManager;
          DCDChatManager.scrollIntoView(tmp13, arg1, tmp, tmp2);
        }
      } else {
        const Commands = ChatNativeComponent.Commands;
        Commands.scrollIntoView(arg0, arg1, tmp, tmp2);
      }
      obj2 = PlatformUtils;
    }
  },
  updateRows(arg0, rows) {
    if (null != arg0) {
      if (obj6.isIOS()) {
        let tmp31Result = ChatChangesetUpdateTracker;
        const andIncrementChangesetIdForChat = tmp31Result.getAndIncrementChangesetIdForChat(arg0);
        ({ rows, forceReload } = rows);
        if (forceReload == null) {
          forceReload = false;
        }
        let data = { category: "chat.dispatch", message: null, data: null };
        const _HermesInternal = HermesInternal;
        data.message = "updateRows dispatch id=" + andIncrementChangesetIdForChat + " ops=" + rows.length;
        data = { changesetUpdateId: andIncrementChangesetIdForChat, opCount: rows.length, rows, forceReload };
        data.data = data;
        SentryUtilsDefault.addBreadcrumb(data);
        const Commands = ChatNativeComponent.Commands;
        const _JSON2 = JSON;
        const json = JSON.stringify(rows.rows);
        const isLoadingAtTop = rows.isLoadingAtTop;
        let str3 = "";
        if (null != rows.scrollData) {
          const _JSON3 = JSON;
          str3 = JSON.stringify(rows.scrollData);
        }
        let flag4 = rows.HACK_iOSForceAnimations;
        if (flag4 == null) {
          flag4 = false;
        }
        let flag5 = rows.forceReload;
        if (flag5 == null) {
          flag5 = false;
        }
        let flag6 = rows.isAnimated;
        if (flag6 == null) {
          flag6 = true;
        }
        Commands.updateRows(arg0, json, isLoadingAtTop, str3, andIncrementChangesetIdForChat, flag4, flag5, flag6);
      } else {
        const tmp2 = React4(arg0);
        if (null != tmp2) {
          const obj7 = NativeChatModuleDefault;
          const _JSON4 = JSON;
          const json1 = JSON.stringify(rows.rows);
          const isLoadingAtTop2 = rows.isLoadingAtTop;
          let json2 = null;
          if (null != rows.scrollData) {
            const _JSON = JSON;
            json2 = JSON.stringify(rows.scrollData);
          }
          tmp31Result = ChatChangesetUpdateTracker;
          const andIncrementChangesetIdForChat1 = tmp31Result.getAndIncrementChangesetIdForChat(arg0);
          let flag = rows.HACK_iOSForceAnimations;
          if (flag == null) {
            flag = false;
          }
          let flag2 = rows.forceReload;
          if (flag2 == null) {
            flag2 = false;
          }
          let flag3 = rows.isAnimated;
          if (flag3 == null) {
            flag3 = true;
          }
          obj7.updateRows(tmp2, json1, isLoadingAtTop2, json2, andIncrementChangesetIdForChat1, flag, flag2, flag3);
        }
      }
      obj6 = PlatformUtils;
    }
  },
  clearRows(arg0) {
    if (null != arg0) {
      if (obj4.isIOS()) {
        const Commands = ChatNativeComponent.Commands;
        let tmp6Result = ChatChangesetUpdateTracker;
        Commands.clearRows(arg0, tmp6Result.getAndIncrementChangesetIdForChat(arg0));
      } else {
        const tmp2 = React4(arg0);
        if (null != tmp2) {
          tmp6Result = ChatChangesetUpdateTracker;
          NativeChatModuleDefault.clearRows(tmp2, tmp6Result.getAndIncrementChangesetIdForChat(arg0));
        }
      }
      obj4 = PlatformUtils;
    }
  },
  fadeIn(arg0) {
    let isIOSResult = null != arg0;
    if (isIOSResult) {
      isIOSResult = PlatformUtils.isIOS();
    }
    if (isIOSResult) {
      const Commands = ChatNativeComponent.Commands;
      Commands.fadeIn(arg0);
    }
  },
  focus(arg0, arg1) {
    if (obj.isIOS()) {
      if (null != arg0) {
        const tmp4 = React4(arg0);
        if (null != tmp4) {
          const DCDChatManager = React3.DCDChatManager;
          DCDChatManager.focus(tmp4, arg1);
        }
      }
    }
    obj = PlatformUtils;
  },
};
let result = size.fileFinishedImporting("modules/chat/native/NativeChatUtils.tsx");

export default ChatScrollPosition;
export { ChatScrollPosition };
export const ChatScrollType = { SCROLL: 0, [0]: "SCROLL", FOCUS_ONLY: 1, [1]: "FOCUS_ONLY" };
