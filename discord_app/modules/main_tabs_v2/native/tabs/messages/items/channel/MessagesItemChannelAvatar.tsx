// === Module 16446: MessagesItemChannelAvatar ===

// Module 16446 (MessagesItemChannelAvatar)
import nativeDefault from "native" /* 587 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10279 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import TypingStore from "TypingStore" /* 11637 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const MUTED_OPACITY_CONTENT = fn(11758).MUTED_OPACITY_CONTENT;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles((arg0) => {
  const avatar = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, opacity: null };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  avatar.opacity = num;
  return { avatar };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemChannelAvatar(channel) {
  let obj = first;
  const cResult = channel(first[11]).c(27);
  channel = channel.channel;
  const hasUnreadMessages = channel.hasUnreadMessages;
  ({ isStreaming, muted, status, channelSelected, blocked } = channel);
  if (!muted) {
    muted = channel.ignored;
  }
  if (!muted) {
    muted = blocked;
  }
  if (muted) {
    muted = !channelSelected;
  }
  const tmp3Result = closure_10(muted);
  let avatar = tmp(obj[12]).AvatarSizes.REFRESH_MEDIUM_32;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    first = id;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TypingStore];
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== channel.id) {
    class F {
      constructor() {
        typingUsers = closure_6.getTypingUsers(channel.id);
        for (const key10007 in typingUsers) {
          tmp2 = key10007;
          tmp3 = closure_2;
          if (key10007 === closure_2) {
            continue;
          } else {
            flag = true;
            return true;
          }
        }
        return false;
      }
    }
    cResult[2] = channel.id;
    cResult[3] = F;
  } else {
    class F {
      constructor() {
        typingUsers = closure_6.getTypingUsers(channel.id);
        for (const key10007 in typingUsers) {
          tmp2 = key10007;
          tmp3 = closure_2;
          if (key10007 === closure_2) {
            continue;
          } else {
            flag = true;
            return true;
          }
        }
        return false;
      }
    }
  }
  const obj2 = channel(first[11]);
  const stateFromStores = channel(obj[13]).useStateFromStores(tmp8, F);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        typingUsers = closure_6.getTypingUsers(channel.id);
        for (const key10007 in typingUsers) {
          tmp2 = key10007;
          tmp3 = closure_2;
          if (key10007 === closure_2) {
            continue;
          } else {
            flag = true;
            return true;
          }
        }
        return false;
      }
    }
    const items1 = [stateFromStores];
    cResult[4] = items1;
    const tmp12 = items1;
  } else {
    class F {
      constructor() {
        typingUsers = closure_6.getTypingUsers(channel.id);
        for (const key10007 in typingUsers) {
          tmp2 = key10007;
          tmp3 = closure_2;
          if (key10007 === closure_2) {
            continue;
          } else {
            flag = true;
            return true;
          }
        }
        return false;
      }
    }
  }
  if (cResult[5] === hasUnreadMessages) {
    class F {
      constructor() {
        typingUsers = closure_6.getTypingUsers(channel.id);
        for (const key10007 in typingUsers) {
          tmp2 = key10007;
          tmp3 = closure_2;
          if (key10007 === closure_2) {
            continue;
          } else {
            flag = true;
            return true;
          }
        }
        return false;
      }
    }
    const stateFromStores1 = tmp(obj[13]).useStateFromStores(tmp12, O);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          typingUsers = closure_6.getTypingUsers(channel.id);
          for (const key10007 in typingUsers) {
            tmp2 = key10007;
            tmp3 = closure_2;
            if (key10007 === closure_2) {
              continue;
            } else {
              flag = true;
              return true;
            }
          }
          return false;
        }
      }
      const items2 = [UserStore];
      cResult[8] = items2;
      const tmp14 = items2;
    } else {
      class F {
        constructor() {
          typingUsers = closure_6.getTypingUsers(channel.id);
          for (const key10007 in typingUsers) {
            tmp2 = key10007;
            tmp3 = closure_2;
            if (key10007 === closure_2) {
              continue;
            } else {
              flag = true;
              return true;
            }
          }
          return false;
        }
      }
    }
    if (cResult[9] !== channel) {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return closure_7.getUser(recipientId);
        }
      }
      cResult[9] = channel;
      cResult[10] = V;
    } else {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return closure_7.getUser(recipientId);
        }
      }
    }
    const tmpResult5 = tmp(obj[13]);
    const stateFromStores2 = tmp(obj[13]).useStateFromStores(tmp14, V);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return closure_7.getUser(recipientId);
        }
      }
      const items3 = [PresenceStore];
      cResult[11] = items3;
      const tmp16 = items3;
    } else {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return closure_7.getUser(recipientId);
        }
      }
    }
    if (cResult[12] !== channel) {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
      cResult[12] = channel;
      cResult[13] = H;
    } else {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
    }
    const tmpResult6 = tmp(obj[13]);
    const stateFromStores3 = tmp(obj[13]).useStateFromStores(tmp16, H);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
      const items4 = [PresenceStore];
      cResult[14] = items4;
      const tmp19 = items4;
    } else {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
    }
    if (cResult[15] !== channel) {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
      cResult[15] = channel;
      cResult[16] = tmp21;
    } else {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
    }
    const tmpResult7 = tmp(obj[13]);
    const stateFromStores4 = tmp(obj[13]).useStateFromStores(tmp19, tmp21);
    if (cResult[17] === stateFromStores1) {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
    }
    if (channel.isGroupDM()) {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
      obj = { status, size: avatar, channel, animate: stateFromStores1, style: null };
      avatar = tmp3Result.avatar;
      obj.style = avatar;
      let tmp24Result = jsx(hasUnreadMessages(obj[14]), { status, size: avatar, channel, animate: stateFromStores1, style: null });
      const tmp27 = hasUnreadMessages(obj[14]);
    } else {
      class H {
        constructor() {
          obj = channel;
          isMobileOnlineResult = channel.isDM();
          if (isMobileOnlineResult) {
            tmp2 = closure_5;
            isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
          }
          return isMobileOnlineResult;
        }
      }
      tmp24Result = null;
      if (null != stateFromStores2) {
        class H {
          constructor() {
            obj = channel;
            isMobileOnlineResult = channel.isDM();
            if (isMobileOnlineResult) {
              tmp2 = closure_5;
              isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
            }
            return isMobileOnlineResult;
          }
        }
        const obj3 = { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: "e", isMobileOnline: stateFromStores3, isVROnline: stateFromStores4, status: null, streaming: "803693e032df6c7df40fd0c7af437d2c", style: "da.messages.803693e032df6c7df40fd0c7af437d2c.compiled.messages", size: "jsona", animate: "VOICE_CATEGORY_EXPAND", typing: null, autoStatusCutout: true };
        if (!stateFromStores2.isSystemUser()) {
          class H {
            constructor() {
              obj = channel;
              isMobileOnlineResult = channel.isDM();
              if (isMobileOnlineResult) {
                tmp2 = closure_5;
                isMobileOnlineResult = closure_5.isMobileOnline(obj.getRecipientId());
              }
              return isMobileOnlineResult;
            }
          }
        }
        obj3.status = null;
        obj3.streaming = isStreaming;
        obj3.style = tmp3Result.avatar;
        obj3.size = avatar;
        obj3.animate = stateFromStores1;
        obj3.typing = stateFromStores;
        tmp24Result = tmp24(tmp(obj[12]).Avatar, obj3);
      }
    }
    cResult[17] = stateFromStores1;
    cResult[18] = channel;
    cResult[19] = isStreaming;
    cResult[20] = stateFromStores;
    cResult[21] = status;
    cResult[22] = tmp3Result;
    cResult[23] = stateFromStores2;
    cResult[24] = stateFromStores3;
    class O {
      constructor() {
        useReducedMotion = closure_3.useReducedMotion;
        tmp = !useReducedMotion;
        if (!useReducedMotion) {
          tmp2 = closure_3;
          if (!closure_3) {
            tmp2 = hasUnreadMessages;
          }
          tmp = tmp2;
        }
        return tmp;
      }
    }
    cResult[25] = stateFromStores4;
    cResult[26] = tmp24Result;
    const tmpResult8 = tmp(obj[13]);
  }
  class O {
    constructor() {
      useReducedMotion = closure_3.useReducedMotion;
      tmp = !useReducedMotion;
      if (!useReducedMotion) {
        tmp2 = closure_3;
        if (!closure_3) {
          tmp2 = hasUnreadMessages;
        }
        tmp = tmp2;
      }
      return tmp;
    }
  }
  cResult[5] = hasUnreadMessages;
  cResult[6] = stateFromStores;
  cResult[7] = O;
  const tmpResult = channel(obj[13]);
}) : (function MessagesItemChannelAvatar(channel) {
  channel = channel.channel;
  ({ hasUnreadMessages: importDefault, muted, status } = channel);
  dependencyMap = undefined;
  let stateFromStores;
  ({ channelSelected, isStreaming, blocked } = channel);
  if (!muted) {
    muted = channel.ignored;
  }
  if (!muted) {
    muted = blocked;
  }
  if (muted) {
    muted = !channelSelected;
  }
  const tmpResult = closure_10(muted);
  const REFRESH_MEDIUM_32 = channel(1200).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = AuthenticationStore.getId();
  const items = [TypingStore];
  stateFromStores = channel(504).useStateFromStores(items, () => {
    const typingUsers = TypingStore.getTypingUsers(channel.id);
    for (const key10007 in typingUsers) {
      if (key10007 === closure_2) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  });
  const obj = channel(504);
  const tmp3 = channel;
  const items1 = [stateFromStores];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    let tmp = !useReducedMotion;
    if (!useReducedMotion) {
      let tmp2 = stateFromStores;
      if (!stateFromStores) {
        tmp2 = importDefault;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  const obj2 = channel(504);
  const items2 = [UserStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return UserStore.getUser(recipientId);
  });
  const obj3 = channel(504);
  const items3 = [PresenceStore];
  const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
    let isMobileOnlineResult = channel.isDM();
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = channel(504);
  const items4 = [PresenceStore];
  const stateFromStores4 = channel(504).useStateFromStores(items4, () => {
    let isVROnlineResult = channel.isDM();
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(channel.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    const obj4 = { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar };
    let tmp11Result = jsx(GroupDMAvatarDefault, { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      const obj7 = { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: "e", isMobileOnline: stateFromStores3, isVROnline: stateFromStores4, status: null, streaming: "803693e032df6c7df40fd0c7af437d2c", style: "da.messages.803693e032df6c7df40fd0c7af437d2c.compiled.messages", size: "jsona", animate: "VOICE_CATEGORY_EXPAND", typing: null, autoStatusCutout: true };
      let tmp12 = null;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      obj7.status = tmp12;
      obj7.streaming = isStreaming;
      obj7.style = tmpResult.avatar;
      obj7.size = REFRESH_MEDIUM_32;
      obj7.animate = stateFromStores1;
      obj7.typing = stateFromStores;
      tmp11Result = jsx(tmp3(1200).Avatar, { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: "e", isMobileOnline: stateFromStores3, isVROnline: stateFromStores4, status: null, streaming: "803693e032df6c7df40fd0c7af437d2c", style: "da.messages.803693e032df6c7df40fd0c7af437d2c.compiled.messages", size: "jsona", animate: "VOICE_CATEGORY_EXPAND", typing: null, autoStatusCutout: true });
    }
  }
  return tmp11Result;
}));