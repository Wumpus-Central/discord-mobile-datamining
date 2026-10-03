// === Module 16279: GuildsBarDirectMessage ===

// Module 16279 (GuildsBarDirectMessage)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9260 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5437 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ChannelTypes = fn(1085).ChannelTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { dm: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.dm = size;
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(channel[12]).c(32);
  channelId = channelId.channelId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableSelectedColor: true, disableBGColor: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = channelId(channel[12]);
  channelId(channel[13]).useGuildsBarAnimatedWrapperStyles(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== channelId) {
    class I {
      constructor() {
        return closure_7.getMentionCountForPrivateChannel(channelId).count;
      }
    }
    cResult[2] = channelId;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        return closure_7.getMentionCountForPrivateChannel(channelId).count;
      }
    }
  }
  const tmpResult = channelId(channel[13]);
  const stateFromStores = channelId(channel[14]).useStateFromStores(tmp7, I);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_7.getMentionCountForPrivateChannel(channelId).count;
      }
    }
    const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
    cResult[4] = items1;
    const tmp11 = items1;
  } else {
    class I {
      constructor() {
        return closure_7.getMentionCountForPrivateChannel(channelId).count;
      }
    }
  }
  if (cResult[5] === channelId) {
    class I {
      constructor() {
        return closure_7.getMentionCountForPrivateChannel(channelId).count;
      }
    }
    const stateFromStoresObject = tmp(tmp2[14]).useStateFromStoresObject(tmp11, fn);
    channel = stateFromStoresObject.channel;
    ({ dmRecipient, label } = stateFromStoresObject);
    if (cResult[8] !== stateFromStores) {
      class I {
        constructor() {
          return closure_7.getMentionCountForPrivateChannel(channelId).count;
        }
      }
      tmp18[0] = stateFromStores;
      cResult[8] = stateFromStores;
      cResult[9] = tmp18;
    } else {
      class I {
        constructor() {
          return closure_7.getMentionCountForPrivateChannel(channelId).count;
        }
      }
    }
    const tmpResult4 = tmp(tmp2[14]);
    ({ badge, cutouts } = stateFromStores(tmp2[17])(tmp18));
    if (cResult[10] === channel) {
      class I {
        constructor() {
          return closure_7.getMentionCountForPrivateChannel(channelId).count;
        }
      }
      if (cResult[13] !== channel) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
        tmp27[0] = function onPress() {
          if (null != channel) {
            transitionToChannel.transitionToChannel(tmp.id);
          }
        };
        tmp27[1] = function onLongPress() {
          if (null != channel) {
            const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(tmp.id);
          }
        };
        cResult[13] = channel;
        cResult[14] = tmp27;
      } else {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      if (cResult[15] !== channel) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
        if (channel != null) {
          class I {
            constructor() {
              return closure_7.getMentionCountForPrivateChannel(channelId).count;
            }
          }
        }
        cResult[15] = channel;
        cResult[16] = undefined;
      } else {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      if (cResult[17] !== channel) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
        if (null != channel) {
          class I {
            constructor() {
              return closure_7.getMentionCountForPrivateChannel(channelId).count;
            }
          }
          let obj3 = { channel };
          const tmp32 = jsx(tmp19(tmp2[20]), { channel });
        }
        cResult[17] = channel;
        cResult[18] = tmp32;
      } else {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      if (cResult[19] === channel) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      if (channel != null) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      if (undefined) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
        const obj4 = { channel, size: tmp(tmp2[22]).AvatarSizes.LARGE_48, pileSizeOverride: tmp(tmp2[22]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
        let tmp35 = jsx(tmp19(tmp2[21]), { channel, size: tmp(tmp2[22]).AvatarSizes.LARGE_48, pileSizeOverride: tmp(tmp2[22]).AvatarSizes.REFRESH_MEDIUM_32, animate: true });
        const tmp19Result = tmp19(tmp2[21]);
      } else {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
        if (null != tmp21) {
          class I {
            constructor() {
              return closure_7.getMentionCountForPrivateChannel(channelId).count;
            }
          }
          const obj5 = { style: tmp4.dm, source: tmp21 };
          tmp35 = jsx(tmp19(tmp2[23]), { style: tmp4.dm, source: tmp21 });
        }
      }
      cResult[19] = channel;
      cResult[20] = tmp21;
      cResult[21] = tmp4;
      cResult[22] = tmp35;
    }
    if (channel != null) {
      class I {
        constructor() {
          return closure_7.getMentionCountForPrivateChannel(channelId).count;
        }
      }
    }
    let tmp24;
    if (undefined) {
      class I {
        constructor() {
          return closure_7.getMentionCountForPrivateChannel(channelId).count;
        }
      }
      if (dmRecipient != null) {
        class I {
          constructor() {
            return closure_7.getMentionCountForPrivateChannel(channelId).count;
          }
        }
      }
      tmp24 = tmp25;
    }
    cResult[10] = channel;
    cResult[11] = dmRecipient;
    cResult[12] = tmp24;
    const tmp20 = stateFromStores(tmp2[17])(tmp18);
  }
  fn = function y() {
    channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === ChannelTypes.DM) {
      user = UserStore.getUser(channel.getRecipientId());
    }
    const call = CallStore.getCall(channelId);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      const obj3 = { channel, unread: stateFromStores > 0, mentionCount: stateFromStores, isIncomingCall: hasItem, isOngoingCall: tmp8 };
      let stringResult = getChannelA11yLabelDefault(obj3);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  };
  cResult[5] = channelId;
  cResult[6] = stateFromStores;
  cResult[7] = fn;
  const tmpResult3 = channelId(channel[14]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  let channel;
  const tmp = closure_12();
  let obj = channelId(channel[13]);
  const guildsBarAnimatedWrapperStyles = channelId(channel[13]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items = [GuildReadStateStore];
  const stateFromStores = channelId(channel[14]).useStateFromStores(items, () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count);
  const obj2 = channelId(channel[14]);
  const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
  const stateFromStoresObject = channelId(channel[14]).useStateFromStoresObject(items1, () => {
    channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === ChannelTypes.DM) {
      user = UserStore.getUser(channel.getRecipientId());
    }
    const call = CallStore.getCall(channelId);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      const obj3 = { channel, unread: stateFromStores > 0, mentionCount: stateFromStores, isIncomingCall: hasItem, isOngoingCall: tmp8 };
      let stringResult = getChannelA11yLabelDefault(obj3);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  let obj3 = channelId(channel[14]);
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = stateFromStores(channel[17])({ mentionCount: stateFromStores }));
  const memo = dmRecipient.useMemo(() => {
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp2;
    if (isDMResult) {
      let avatarSource;
      if (dmRecipient != null) {
        avatarSource = dmRecipient.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => ({
    onPress() {
      if (null != closure_1_2) {
        channelId(channel[18]).transitionToChannel(tmp.id);
        const obj = channelId(channel[18]);
      }
    },
    onLongPress() {
      if (null != closure_1_2) {
        const result = channelId(channel[19]).openChannelLongPressActionSheet(tmp.id);
        const obj = channelId(channel[19]);
      }
    }
  }), items3);
  let isMultiUserDMResult;
  const tmp8 = stateFromStores(channel[17])({ mentionCount: stateFromStores });
  if (channel != null) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  const obj4 = { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: memo1, cutouts, externalChildren: badge, expandedChildren: null, children: null };
  let tmp11Result = null;
  if (null != channel) {
    const obj5 = { channel };
    tmp11Result = jsx(tmp7(tmp3[20]), { channel });
  }
  obj4.expandedChildren = tmp11Result;
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    const obj6 = { channel, size: tmp2(tmp3[22]).AvatarSizes.LARGE_48, pileSizeOverride: tmp2(tmp3[22]).AvatarSizes.REFRESH_MEDIUM_32, animate: true };
    let tmp11Result2 = jsx(tmp7(tmp3[21]), { channel, size: tmp2(tmp3[22]).AvatarSizes.LARGE_48, pileSizeOverride: tmp2(tmp3[22]).AvatarSizes.REFRESH_MEDIUM_32, animate: true });
    const tmp7Result = tmp7(tmp3[21]);
  } else {
    tmp11Result2 = null;
    if (null != memo) {
      const obj7 = { style: tmp.dm, source: memo };
      tmp11Result2 = jsx(tmp7(tmp3[23]), { style: tmp.dm, source: memo });
    }
  }
  obj4.children = tmp11Result2;
  return jsx(stateFromStores(channel[13]), { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: memo1, cutouts, externalChildren: badge, expandedChildren: null, children: null });
}));