// === Module 15961: MessagesItemChannelAvatar ===

// Module 15961 (MessagesItemChannelAvatar)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10648 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import TypingStore from "TypingStore" /* 11579 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, dependencyMap;

const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles((arg0) => {
  let num;
  const avatar = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, opacity: num };
  num = 1;
  const tmp = arg0;
  if (tmp) {
    num = MUTED_OPACITY_CONTENT;
  }
  return { avatar };
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let blocked;
  let channelSelected;
  let first;
  let isStreaming;
  let muted;
  let status;
  let tmp13;
  let tmp9;
  let tmp = channel;
  const tmp2 = first;
  const obj = channel(first[11]);
  const cResult = obj.c(27);
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
  const tmp4Result = closure_10(muted);
  const REFRESH_MEDIUM_32 = tmp(tmp2[12]).AvatarSizes.REFRESH_MEDIUM_32;
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
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
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
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, F);
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
    tmp13 = items1;
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
    let tmp15;
    let tmp17;
    let tmp20;
    let tmp26Result;
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
    const tmpResult5 = tmp(tmp2[13]);
    const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, U);
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
      tmp15 = items2;
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
          getUser = closure_7.getUser;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return getUser(recipientId);
        }
      }
      cResult[9] = channel;
      cResult[10] = V;
    } else {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          getUser = closure_7.getUser;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return getUser(recipientId);
        }
      }
    }
    const tmpResult6 = tmp(tmp2[13]);
    const stateFromStores2 = tmpResult6.useStateFromStores(tmp15, V);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          getUser = closure_7.getUser;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return getUser(recipientId);
        }
      }
      const items3 = [PresenceStore];
      cResult[11] = items3;
      tmp17 = items3;
    } else {
      class V {
        constructor() {
          obj = channel;
          tmp = closure_7;
          getUser = closure_7.getUser;
          recipientId = undefined;
          if (true === channel.isDM()) {
            recipientId = obj.getRecipientId();
          }
          return getUser(recipientId);
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
    const tmpResult7 = tmp(tmp2[13]);
    const stateFromStores3 = tmpResult7.useStateFromStores(tmp17, H);
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
      tmp20 = items4;
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
      cResult[16] = tmp22;
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
    const tmpResult8 = tmp(tmp2[13]);
    const stateFromStores4 = tmpResult8.useStateFromStores(tmp20, tmp22);
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
      tmp26Result = jsx(hasUnreadMessages(tmp2[14]), { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmp4Result.avatar });
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
      tmp26Result = null;
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
        const obj3 = { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: "e", isMobileOnline: stateFromStores3, isVROnline: stateFromStores4, status: null, streaming: isStreaming, style: tmp4Result.avatar, size: REFRESH_MEDIUM_32, animate: stateFromStores1, typing: stateFromStores, autoStatusCutout: null };
        const Avatar = tmp(tmp2[12]).Avatar;
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
        tmp26Result = tmp26(Avatar, obj3);
      }
    }
    cResult[17] = stateFromStores1;
    cResult[18] = channel;
    cResult[19] = isStreaming;
    cResult[20] = stateFromStores;
    cResult[21] = status;
    cResult[22] = tmp4Result;
    cResult[23] = stateFromStores2;
    cResult[24] = stateFromStores3;
    class U {
      constructor() {
        tmp = !closure_3.useReducedMotion;
        if (tmp) {
          tmp2 = closure_3 || hasUnreadMessages;
          tmp = tmp2;
        }
        return tmp;
      }
    }
    cResult[25] = stateFromStores4;
    cResult[26] = tmp26Result;
  }
  class U {
    constructor() {
      tmp = !closure_3.useReducedMotion;
      if (tmp) {
        tmp2 = closure_3 || hasUnreadMessages;
        tmp = tmp2;
      }
      return tmp;
    }
  }
  cResult[5] = hasUnreadMessages;
  cResult[6] = stateFromStores;
  cResult[7] = U;
}) : ((channel) => {
  let blocked;
  let channelSelected;
  let closure_2;
  let isStreaming;
  let muted;
  let status;
  let tmp11Result;
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
  const REFRESH_MEDIUM_32 = channel(1188).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = AuthenticationStore.getId();
  const items = [TypingStore];
  const obj = channel(504);
  stateFromStores = obj.useStateFromStores(items, () => {
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
  const items1 = [stateFromStores];
  const obj2 = channel(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp = !AccessibilityStore.useReducedMotion;
    if (tmp) {
      tmp = stateFromStores || importDefault;
    }
    return tmp;
  });
  const items2 = [UserStore];
  const obj3 = channel(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const getUser = UserStore.getUser;
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return getUser(recipientId);
  });
  const items3 = [PresenceStore];
  const obj5 = channel(504);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    const isMobileOnlineResult = channel.isDM() && PresenceStore.isMobileOnline(channel.getRecipientId());
    return isMobileOnlineResult;
  });
  const items4 = [PresenceStore];
  const obj6 = channel(504);
  const stateFromStores4 = obj6.useStateFromStores(items4, () => {
    const isVROnlineResult = channel.isDM() && PresenceStore.isVROnline(channel.getRecipientId());
    return isVROnlineResult;
  });
  const tmp3 = channel;
  if (channel.isGroupDM()) {
    tmp11Result = jsx(GroupDMAvatarDefault, { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      const Avatar = tmp3(1188).Avatar;
      let tmp12 = null;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      tmp11Result = <Avatar user={stateFromStores2} avatarDecoration={stateFromStores2.avatarDecoration} guildId="e" isMobileOnline={stateFromStores3} isVROnline={stateFromStores4} status={tmp12} streaming={isStreaming} style={tmpResult.avatar} size={REFRESH_MEDIUM_32} animate={stateFromStores1} typing={stateFromStores} autoStatusCutout={null} />;
    }
  }
  return tmp11Result;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;