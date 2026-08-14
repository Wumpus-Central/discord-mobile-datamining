// discord_app/modules/chat/native/NativeChatUtils.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeChatModule.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { SentryUtils.native } from "../../../utils/SentryUtils.native.tsx";

let c3;
let c4;
({ NativeModules: c3, findNodeHandle: c4 } = get_ActivityIndicator);
let obj = { TOP: 0, [0]: "TOP", MIDDLE: 1, [1]: "MIDDLE", BOTTOM: 2, [2]: "BOTTOM", NONE: 3, [3]: "NONE" };
obj = {
  scrollTo(arg0, arg1, arg2) {
    if (null != arg0) {
      let obj = arg2;
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
        const tmp15 = callback(arg0);
        if (null != tmp15) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollTo(tmp15, arg1, tmp, tmp2, TOP);
        }
      } else {
        const Commands = tmp5(10999).Commands;
        Commands.scrollTo(arg0, arg1, tmp, tmp2, TOP);
      }
      obj2 = set;
      tmp5 = require;
    }
  },
  scrollToBottom(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp6 = callback(arg0);
        if (null != tmp6) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollToBottom(tmp6, arg1);
        }
      } else {
        const Commands = tmp2(10999).Commands;
        Commands.scrollToBottom(arg0, arg1);
      }
      obj = set;
      tmp2 = require;
    }
  },
  scrollToTop(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = callback(arg0);
        if (null != tmp4) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollToTop(tmp4, arg1);
        }
      }
      obj = set;
    }
  },
  scrollToRelativeOffset(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = callback(arg0);
        if (null != tmp4) {
          const DCDChatManager = closure_3.DCDChatManager;
          const result = DCDChatManager.scrollToRelativeOffset(tmp4, arg1, arg2);
        }
      }
      obj = set;
    }
  },
  scrollIntoView(arg0, arg1, arg2) {
    if (null != arg0) {
      let obj = arg2;
      if (arg2 == null) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      if (obj2.isIOS()) {
        const tmp13 = callback(arg0);
        if (null != tmp13) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollIntoView(tmp13, arg1, tmp, tmp2);
        }
      } else {
        const Commands = tmp4(10999).Commands;
        Commands.scrollIntoView(arg0, arg1, tmp, tmp2);
      }
      obj2 = set;
      tmp4 = require;
    }
  },
  updateRows(arg0, rows) {
    let forceReload;
    if (null != arg0) {
      if (obj6.isIOS()) {
        let tmp31Result = tmp31(11000);
        const andIncrementChangesetIdForChat = tmp31Result.getAndIncrementChangesetIdForChat(arg0);
        ({ rows, forceReload } = rows);
        if (forceReload == null) {
          forceReload = false;
        }
        let obj = { category: "chat.dispatch", message: null, data: null };
        const _HermesInternal = HermesInternal;
        obj[1] = "updateRows dispatch id=" + andIncrementChangesetIdForChat + " ops=" + rows.length;
        obj = { changesetUpdateId: null, opCount: null, rows: null, forceReload: null };
        obj[0] = andIncrementChangesetIdForChat;
        obj[1] = rows.length;
        obj[2] = rows;
        obj[3] = forceReload;
        obj[2] = obj;
        SentryUtils.native.addBreadcrumb(obj);
        const Commands = tmp31(10999).Commands;
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
        const obj3 = SentryUtils.native;
      } else {
        const tmp2 = callback(arg0);
        if (null != tmp2) {
          const obj7 = enforcing;
          const _JSON4 = JSON;
          const json1 = JSON.stringify(rows.rows);
          const isLoadingAtTop2 = rows.isLoadingAtTop;
          let json2 = null;
          if (null != rows.scrollData) {
            const _JSON = JSON;
            json2 = JSON.stringify(rows.scrollData);
          }
          tmp31Result = tmp31(11000);
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
      obj6 = set;
    }
  },
  clearRows(arg0) {
    if (null != arg0) {
      if (obj4.isIOS()) {
        const Commands = tmp6(10999).Commands;
        let tmp6Result = tmp6(11000);
        Commands.clearRows(arg0, tmp6Result.getAndIncrementChangesetIdForChat(arg0));
      } else {
        const tmp2 = callback(arg0);
        if (null != tmp2) {
          tmp6Result = tmp6(11000);
          enforcing.clearRows(tmp2, tmp6Result.getAndIncrementChangesetIdForChat(arg0));
          const obj = enforcing;
        }
      }
      obj4 = set;
    }
  },
  fadeIn(arg0) {
    let isIOSResult = null != arg0;
    if (isIOSResult) {
      isIOSResult = set.isIOS();
      const obj = set;
    }
    if (isIOSResult) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.fadeIn(arg0);
    }
  },
  focus(arg0, arg1) {
    if (obj.isIOS()) {
      if (null != arg0) {
        const tmp4 = callback(arg0);
        if (null != tmp4) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.focus(tmp4, arg1);
        }
      }
    }
  }
};
let result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/chat/native/NativeChatUtils.tsx");

export default obj;
export const ChatScrollPosition = obj;
export const ChatScrollType = { SCROLL: 0, [0]: "SCROLL", FOCUS_ONLY: 1, [1]: "FOCUS_ONLY" };