// === Module 12456: ChannelNavbar ===

// Module 12456 (ChannelNavbar)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelName from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import Pressables from "Pressables" /* 5909 */;
import isStreamingDefault from "isStreaming" /* 7931 */;
import ActivityStatusDefault from "ActivityStatus" /* 10609 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onPress, parentChannel, threadDraft;

let Fonts;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_12, Fonts } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = DismissibleContentConstants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: obj2, navbarTitleSecondaryText: obj3, channelIcon: { height: 18, width: 18, marginRight: 8 }, channelIconColor: obj4, homeIcon: size, premiumIcon: { marginRight: 4 }, status: { marginLeft: 1, marginTop: 4 }, channelTextContainer: { flex: 1, flexGrow: 1 }, channelNameContainer: { flexGrow: 1 }, channelName: { textAlign: "left" }, flexRow: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexShrink: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj4 = { color: nativeDefault.colors.CHANNEL_ICON };
size = { height: 20, width: 20, tintColor: nativeDefault.colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let connected;
  let first;
  let onPressTitle;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(39);
  ({ onPressTitle, channelId } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = C;
    tmp9 = C;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult4 = channelId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[5] !== stateFromStores1) {
    const string = channelId(1126).intl.string;
    const t = channelId(1126).t;
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    let channelIcon = null;
    if (null != stateFromStores) {
      const tmpResult5 = channelId(5812);
      channelIcon = tmpResult5.getChannelIcon(stateFromStores);
    }
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[8] = channelIcon;
    tmp14 = channelIcon;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] !== stateFromStores) {
    if (null != stateFromStores) {
      channelId(5043);
      class C {
        constructor() {
          return connected.isConnected();
        }
      }
    }
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[10] = null;
    tmp16 = tmp17;
  } else {
    tmp16 = cResult[10];
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    let tmp28;
    let tmp30;
    if (cResult[11] !== stateFromStores) {
      const recipientId = stateFromStores.getRecipientId();
      cResult[11] = stateFromStores;
      class C {
        constructor() {
          return connected.isConnected();
        }
      }
      cResult[12] = recipientId;
      tmp28 = recipientId;
    } else {
      tmp28 = cResult[12];
    }
    if (cResult[13] !== stateFromStores) {
      const isSystemDMResult = stateFromStores.isSystemDM();
      cResult[13] = stateFromStores;
      class C {
        constructor() {
          return connected.isConnected();
        }
      }
      cResult[14] = isSystemDMResult;
      tmp30 = isSystemDMResult;
    } else {
      tmp30 = cResult[14];
    }
    if (cResult[15] === tmp4.navbarTitlePrimaryText) {
      let tmp32;
      if (cResult[16] === tmp28) {
        tmp32 = cResult[17];
      }
      if (cResult[18] === tmp30) {
        if (cResult[19] === tmp4.status) {
          let tmp35;
          if (cResult[20] === tmp28) {
            tmp35 = cResult[21];
          }
          if (cResult[22] === stateFromStores.guild_id) {
            let tmp37;
            if (cResult[23] === tmp28) {
              tmp37 = cResult[24];
            }
            if (cResult[25] === tmp14) {
              if (cResult[26] === tmp32) {
                if (cResult[27] === tmp37) {
                  let tmp40;
                  if (cResult[28] === tmp35) {
                    tmp40 = cResult[29];
                  }
                  if (cResult[30] === onPressTitle) {
                    let tmp43;
                    if (cResult[31] === tmp40) {
                      tmp43 = cResult[32];
                    }
                    return tmp43;
                  }
                  class C {
                    constructor() {
                      return connected.isConnected();
                    }
                  }
                  const obj2 = { onPressTitle, children: tmp40 };
                  const tmp45 = closure_16(closure_19, obj2);
                  cResult[30] = onPressTitle;
                  cResult[31] = tmp40;
                  cResult[32] = tmp45;
                  tmp43 = tmp45;
                }
              }
            }
            class C {
              constructor() {
                return connected.isConnected();
              }
            }
            const obj3 = { title: tmp32, icon: tmp14, titleSuffix: tmp35, subTitle: tmp37 };
            const tmp42 = closure_16(closure_20, obj3);
            cResult[25] = tmp14;
            cResult[26] = tmp32;
            cResult[27] = tmp37;
            cResult[28] = tmp35;
            cResult[29] = tmp42;
            tmp40 = tmp42;
          }
          class C {
            constructor() {
              return connected.isConnected();
            }
          }
          const obj4 = { userId: tmp28, guildId: stateFromStores.guild_id };
          const tmp39 = closure_16(ActivityStatusDefault, obj4);
          cResult[22] = stateFromStores.guild_id;
          cResult[23] = tmp28;
          cResult[24] = tmp39;
          tmp37 = tmp39;
        }
      }
      class C {
        constructor() {
          return connected.isConnected();
        }
      }
      cResult[18] = tmp30;
      cResult[19] = tmp4.status;
      cResult[20] = tmp28;
      cResult[21] = null;
      tmp35 = tmp36;
    }
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    const obj5 = { userId: tmp28, style: tmp4.navbarTitlePrimaryText };
    const tmp34 = closure_16(closure_22, obj5);
    cResult[15] = tmp4.navbarTitlePrimaryText;
    cResult[16] = tmp28;
    cResult[17] = tmp34;
    tmp32 = tmp34;
  } else {
    if (tmp16 == null) {
      tmp16 = tmp12;
    }
    if (cResult[33] === tmp14) {
      let tmp22;
      if (cResult[34] === tmp16) {
        tmp22 = cResult[35];
      }
      if (cResult[36] === onPressTitle) {
        let tmp25;
        if (cResult[37] === tmp22) {
          tmp25 = cResult[38];
        }
        return tmp25;
      }
      class C {
        constructor() {
          return connected.isConnected();
        }
      }
      const obj6 = { onPressTitle, children: tmp22 };
      const tmp27 = closure_16(closure_19, obj6);
      cResult[36] = onPressTitle;
      cResult[37] = tmp22;
      cResult[38] = tmp27;
      tmp25 = tmp27;
    }
    class C {
      constructor() {
        return connected.isConnected();
      }
    }
    const obj7 = { title: tmp16, icon: tmp14 };
    const tmp24 = closure_16(closure_20, obj7);
    cResult[33] = tmp14;
    cResult[34] = tmp16;
    cResult[35] = tmp24;
    tmp22 = tmp24;
  }
}) : ((arg0) => {
  let connected;
  let obj7;
  let obj9;
  let onPressTitle;
  let stringResult;
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = closure_18();
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [GatewayConnectionStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  const intl = intl10.intl;
  const string = intl.string;
  const t = intl10.t;
  if (stateFromStores1) {
    stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    const tmp2Result = utils_ChannelUtils;
    channelIcon = tmp2Result.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    const tmp2Result2 = useChannelName;
    channelName = tmp2Result2.computeChannelName(stateFromStores, UserStore, RelationshipStore);
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    let tmp16Result = null;
    const obj2 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
    const isSystemDMResult = stateFromStores.isSystemDM();
    const tmp18 = closure_16(closure_22, obj2);
    if (!isSystemDMResult) {
      const obj4 = { userId: recipientId, style: tmp.status };
      tmp16Result = closure_16(closure_23, obj4);
    }
    const obj5 = { userId: recipientId, guildId: stateFromStores.guild_id };
    const obj6 = { onPressTitle, children: closure_16(closure_20, obj7) };
    obj7 = { title: tmp18, icon: channelIcon, titleSuffix: tmp16Result, subTitle: closure_16(ActivityStatusDefault, obj5) };
    return closure_16(closure_19, obj6);
  } else {
    const obj8 = { onPressTitle, children: closure_16(closure_20, obj9) };
    if (channelName == null) {
      channelName = stringResult;
    }
    obj9 = { title: channelName, icon: channelIcon };
    return closure_16(closure_19, obj8);
  }
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((threadDraft) => {
  let channelId;
  let connected;
  let intl;
  let items4;
  let onPressTitle;
  let stateFromStores1;
  let tmp13;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = channelId(stateFromStores1[17]);
  const cResult = obj.c(115);
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore];
    const fn = function c() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = channelId(stateFromStores1[18]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class L {
      constructor() {
        let channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
            channel = ChannelStore.getChannel(channelId);
          }
        }
        return channel;
      }
    }
    cResult[3] = channelId;
    cResult[4] = L;
  } else {
    class L {
      constructor() {
        let channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
            channel = ChannelStore.getChannel(channelId);
          }
        }
        return channel;
      }
    }
  }
  const tmpResult5 = channelId(stateFromStores1[18]);
  stateFromStores1 = tmpResult5.useStateFromStores(tmp9, L);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        let channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
            channel = ChannelStore.getChannel(channelId);
          }
        }
        return channel;
      }
    }
    const items2 = [GuildStore];
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    class L {
      constructor() {
        let channel = null;
        if (channelId !== StaticChannelRoute.GUILD_HOME) {
          channel = null;
          if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
            channel = ChannelStore.getChannel(channelId);
          }
        }
        return channel;
      }
    }
  }
  if (cResult[6] !== stateFromStores1) {
    class F {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guildId = stateFromStores1.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    cResult[6] = stateFromStores1;
    cResult[7] = F;
  } else {
    class F {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guildId = stateFromStores1.getGuildId();
        }
        return getGuild(guildId);
      }
    }
  }
  const tmpResult6 = channelId(stateFromStores1[18]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp13, F);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guildId = stateFromStores1.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    const items3 = [ChannelStore];
    cResult[8] = items3;
    tmp16 = items3;
  } else {
    class F {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guildId = stateFromStores1.getGuildId();
        }
        return getGuild(guildId);
      }
    }
  }
  if (cResult[9] === stateFromStores1) {
    class F {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guildId = stateFromStores1.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    const tmpResult7 = channelId(stateFromStores1[18]);
    const stateFromStores3 = tmpResult7.useStateFromStores(tmp16, U, items4);
    const tmpResult8 = channelId(stateFromStores1[23]);
    const selectedSpecialNavigationPath = tmpResult8.useSelectedSpecialNavigationPath();
    threadDraft(stateFromStores1[24])();
    if (cResult[13] !== stateFromStores) {
      class F {
        constructor() {
          let guildId;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores1 != null) {
            guildId = stateFromStores1.getGuildId();
          }
          return getGuild(guildId);
        }
      }
      const string = tmp22.string;
      const t = channelId(tmp2[19]).t;
      if (stateFromStores) {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
      } else {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = tmp23;
    } else {
      class F {
        constructor() {
          let guildId;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores1 != null) {
            guildId = stateFromStores1.getGuildId();
          }
          return getGuild(guildId);
        }
      }
    }
    if (selectedSpecialNavigationPath === channelId(stateFromStores1[23]).SpecialNavigationPath.FRIENDS) {
      let tmp24;
      let tmp27;
      class F {
        constructor() {
          let guildId;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores1 != null) {
            guildId = stateFromStores1.getGuildId();
          }
          return getGuild(guildId);
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
        const obj2 = { title: intl.string(channelId(stateFromStores1[19]).t.TdEu5X) };
        intl = channelId(tmp2[19]).intl;
        const tmp26 = closure_16(closure_20, obj2);
        cResult[15] = tmp26;
        tmp24 = tmp26;
      } else {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
      }
      if (cResult[16] !== style) {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
        const obj3 = { style, children: tmp24 };
        const tmp29 = closure_16(closure_19, obj3);
        cResult[16] = style;
        cResult[17] = tmp29;
        tmp27 = tmp29;
      } else {
        class F {
          constructor() {
            let guildId;
            const getGuild = GuildStore.getGuild;
            if (stateFromStores1 != null) {
              guildId = stateFromStores1.getGuildId();
            }
            return getGuild(guildId);
          }
        }
      }
      return tmp27;
    } else {
      class F {
        constructor() {
          let guildId;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores1 != null) {
            guildId = stateFromStores1.getGuildId();
          }
          return getGuild(guildId);
        }
      }
    }
  }
  class U {
    constructor() {
      let channel;
      if (null != threadDraft) {
        if (null != threadDraft.parentChannelId) {
          channel = ChannelStore.getChannel(threadDraft.parentChannelId);
        }
        return channel;
      }
      channel = null;
      if (null != stateFromStores1) {
        channel = null;
        if (null != stateFromStores1.parent_id) {
          channel = null;
          if (THREAD_CHANNEL_TYPES.has(stateFromStores1.type)) {
            channel = ChannelStore.getChannel(stateFromStores1.parent_id);
          }
        }
      }
    }
  }
  items4 = [stateFromStores1, threadDraft];
  cResult[9] = stateFromStores1;
  cResult[10] = threadDraft;
  cResult[11] = U;
  cResult[12] = items4;
}) : ((threadDraft) => {
  let channelId;
  let connected;
  let guild_id;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj10;
  let obj13;
  let obj16;
  let obj19;
  let obj22;
  let obj24;
  let obj29;
  let obj32;
  let obj36;
  let obj7;
  let onPressTitle;
  let stringResult;
  let tmp15Result;
  let tmp24Result;
  let tmp48;
  let tmp52;
  let tmp56;
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  let guildId = threadDraft.guildId;
  const tmp = closure_18();
  const items = [GatewayConnectionStore];
  const obj = channelId(stateFromStores1[18]);
  const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const items1 = [ChannelStore];
  const obj2 = channelId(stateFromStores1[18]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== StaticChannelRoute.GUILD_HOME) {
      channel = null;
      if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
        channel = ChannelStore.getChannel(channelId);
      }
    }
    return channel;
  });
  const items2 = [GuildStore];
  const obj4 = channelId(stateFromStores1[18]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores1 != null) {
      guildId = stateFromStores1.getGuildId();
    }
    return getGuild(guildId);
  });
  const items3 = [ChannelStore];
  const items4 = [stateFromStores1, threadDraft];
  const obj5 = channelId(stateFromStores1[18]);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    let channel;
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        channel = ChannelStore.getChannel(threadDraft.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (THREAD_CHANNEL_TYPES.has(stateFromStores1.type)) {
          channel = ChannelStore.getChannel(stateFromStores1.parent_id);
        }
      }
    }
  }, items4);
  const obj6 = channelId(stateFromStores1[23]);
  const selectedSpecialNavigationPath = obj6.useSelectedSpecialNavigationPath();
  const tmp9 = threadDraft(stateFromStores1[24])();
  const intl = channelId(stateFromStores1[19]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[19]).t;
  if (stateFromStores) {
    stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === channelId(stateFromStores1[23]).SpecialNavigationPath.FRIENDS) {
    const obj3 = { style, children: closure_16(closure_20, obj7) };
    obj7 = { title: intl9.string(channelId(stateFromStores1[19]).t.TdEu5X) };
    intl9 = channelId(tmp3[19]).intl;
    return closure_16(closure_19, obj3);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj8 = { size: channelId(stateFromStores1[25]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[26]), style: tmp.homeIcon };
    const Icon2 = channelId(tmp3[25]).Icon;
    const obj9 = { onPressTitle, style, children: closure_16(closure_20, obj10) };
    obj10 = { title: intl8.string(channelId(stateFromStores1[19]).t.Ym2Ri6), icon: tmp56 };
    tmp56 = closure_16(Icon2, obj8);
    intl8 = channelId(tmp3[19]).intl;
    return closure_16(closure_19, obj9);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    const obj11 = { size: channelId(stateFromStores1[25]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[27]), style: tmp.homeIcon };
    const Icon = channelId(tmp3[25]).Icon;
    const obj12 = { onPressTitle, style, children: closure_16(closure_20, obj13) };
    obj13 = { title: intl7.string(channelId(stateFromStores1[19]).t["9Oq93m"]), icon: tmp52 };
    tmp52 = closure_16(Icon, obj11);
    intl7 = channelId(tmp3[19]).intl;
    return closure_16(closure_19, obj12);
  } else if (tmp9) {
    const obj14 = { source: threadDraft(stateFromStores1[29]), style: tmp.premiumIcon };
    const tmp8Result = threadDraft(stateFromStores1[28]);
    const obj15 = { style, children: closure_16(closure_20, obj16) };
    obj16 = { title: intl6.string(channelId(stateFromStores1[19]).t["KzCF/6"]), icon: tmp48 };
    tmp48 = closure_16(tmp8Result, obj14);
    intl6 = channelId(tmp3[19]).intl;
    return closure_16(closure_19, obj15);
  } else {
    if (null != threadDraft) {
      let isForumLikeChannelResult;
      if (stateFromStores1 != null) {
        isForumLikeChannelResult = stateFromStores1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        if (null != threadDraft.name) {
          let name;
          if (threadDraft.name.length > 0) {
            name = threadDraft.name;
          }
          const tmp2Result = channelId(stateFromStores1[20]);
          const threadChannelIcon = tmp2Result.getThreadChannelIcon(threadDraft.isPrivate ? constants.PRIVATE_THREAD : constants.PUBLIC_THREAD);
          const intl3 = channelId(tmp3[19]).intl;
          const obj17 = { channelName: name };
          const obj18 = { style, children: closure_16(closure_20, obj19) };
          obj19 = { title: name, accessibleTitle: intl3.formatToPlainString(channelId(stateFromStores1[19]).t["OkzL+Q"], obj17), icon: threadChannelIcon, subTitle: tmp15Result };
          tmp15Result = null != stateFromStores3;
          if (tmp15Result) {
            const obj20 = { parentChannel: stateFromStores3 };
            tmp15Result = closure_16(closure_21, obj20);
          }
          return closure_16(closure_19, obj18);
        }
        const intl2 = channelId(tmp3[19]).intl;
        name = intl2.string(channelId(tmp3[19]).t["4WNcpu"]);
      }
    }
    const tmp2Result4 = channelId(stateFromStores1[30]);
    if (tmp2Result4.shouldNSFWGateGuild(guildId)) {
      const obj21 = { style, children: closure_16(closure_20, obj22) };
      obj22 = { title: intl5.string(channelId(stateFromStores1[19]).t.HbPHt1) };
      intl5 = channelId(tmp3[19]).intl;
      return closure_16(closure_19, obj21);
    } else if (null == stateFromStores1) {
      const obj23 = { style, children: closure_16(closure_20, obj24) };
      obj24 = { title: stringResult };
      return closure_16(closure_19, obj23);
    } else {
      const tmp2Result5 = channelId(stateFromStores1[21]);
      const channelName = tmp2Result5.computeChannelName(stateFromStores1, UserStore, RelationshipStore);
      const tmp2Result6 = channelId(stateFromStores1[20]);
      const channelIconWithGuild = tmp2Result6.getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        let tmp31Result = null;
        const obj25 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
        const isSystemDMResult = stateFromStores1.isSystemDM();
        const tmp33 = closure_16(closure_22, obj25);
        if (!isSystemDMResult) {
          const obj26 = { userId: recipientId, style: tmp.status };
          tmp31Result = closure_16(closure_23, obj26);
        }
        const obj27 = { userId: recipientId, guildId: guild_id };
        guild_id = undefined;
        const tmp8Result2 = threadDraft(stateFromStores1[22]);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        const obj28 = { onPressTitle, style, children: closure_16(closure_20, obj29) };
        obj29 = { title: tmp33, icon: channelIconWithGuild, titleSuffix: tmp31Result, subTitle: closure_16(tmp8Result2, obj27) };
        return closure_16(closure_19, obj28);
      } else {
        const isThreadResult = stateFromStores1.isThread();
        const intl4 = channelId(tmp3[19]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = channelId(tmp3[19]).t;
        if (isThreadResult) {
          const obj30 = { channelName };
          const obj31 = { onPressTitle, style, children: closure_16(closure_20, obj32) };
          obj32 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj30), icon: channelIconWithGuild, subTitle: tmp24Result };
          tmp24Result = null != stateFromStores3;
          if (tmp24Result) {
            const obj33 = { parentChannel: stateFromStores3 };
            tmp24Result = closure_16(closure_21, obj33);
          }
          return closure_16(closure_19, obj31);
        } else {
          const obj34 = { channelName };
          const obj35 = { onPressTitle, style, children: closure_16(closure_20, obj36) };
          obj36 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj34), icon: channelIconWithGuild };
          return closure_16(closure_19, obj35);
        }
      }
    }
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let onPressTitle;
  let style;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  ({ children, onPressTitle, style } = arg0);
  const tmp4 = closure_18();
  if (null == onPressTitle) {
    if (cResult[0] === style) {
      let tmp11;
      if (cResult[1] === tmp4.navbarTitleContainer) {
        tmp11 = cResult[2];
      }
      if (cResult[3] === children) {
        let tmp12;
        if (cResult[4] === tmp11) {
          tmp12 = cResult[5];
        }
        tmp8 = tmp12;
      }
      const obj2 = { style: tmp11, children };
      const tmp15 = authStore3(View, obj2);
      cResult[3] = children;
      cResult[4] = tmp11;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    }
    const items = [tmp4.navbarTitleContainer, style];
    cResult[0] = style;
    cResult[1] = tmp4.navbarTitleContainer;
    cResult[2] = items;
    tmp11 = items;
  } else {
    if (cResult[6] === style) {
      let tmp5;
      let tmp7;
      if (cResult[7] === tmp4.navbarTitleContainer) {
        tmp5 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return null;
        };
        cResult[9] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[9];
      }
      if (cResult[10] === children) {
        if (cResult[11] === onPressTitle) {
          if (cResult[12] === tmp5) {
            tmp8 = cResult[13];
          }
        }
      }
      const obj3 = { style: tmp5, accessibilityRole: "header", onPress: onPressTitle, onAccessibilityTap: tmp7, children };
      const tmp10 = authStore3(Pressables.PressableOpacity, obj3);
      cResult[10] = children;
      cResult[11] = onPressTitle;
      cResult[12] = tmp5;
      cResult[13] = tmp10;
      tmp8 = tmp10;
    }
    const items1 = [tmp4.navbarTitleContainer, style];
    cResult[6] = style;
    cResult[7] = tmp4.navbarTitleContainer;
    cResult[8] = items1;
    tmp5 = items1;
  }
  return tmp8;
}) : ((arg0) => {
  let children;
  let items;
  let items1;
  let onPressTitle;
  let style;
  let tmp5;
  ({ children, onPressTitle, style } = arg0);
  const tmp = closure_18();
  if (null == onPressTitle) {
    const obj2 = { style: items, children };
    items = [tmp.navbarTitleContainer, style];
    tmp5 = authStore3(View, obj2);
  } else {
    const obj = {
      style: items1,
      accessibilityRole: "header",
      onPress: onPressTitle,
      onAccessibilityTap() {
          return null;
        },
      children
    };
    items1 = [tmp.navbarTitleContainer, style];
    tmp5 = authStore3(Pressables.PressableOpacity, obj);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibleTitle;
  let icon;
  let items;
  let items1;
  let items2;
  let obj7;
  let subTitle;
  let title;
  let titleSuffix;
  const obj = react2;
  const cResult = obj.c(21);
  ({ title, icon, titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp4 = closure_18();
  let tmp5 = null;
  if (null != icon) {
    if (cResult[0] === icon) {
      if (cResult[1] === tmp4.channelIcon) {
        let tmp6;
        if (cResult[2] === tmp4.channelIconColor) {
          tmp6 = cResult[3];
        }
        tmp5 = tmp6;
      }
    }
    let tmp8 = icon;
    if (!react.isValidElement(icon)) {
      const obj2 = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp4.channelIcon, color: tmp4.channelIconColor.color };
      const Icon = native.Icon;
      tmp8 = authStore3(Icon, obj2);
    }
    cResult[0] = icon;
    cResult[1] = tmp4.channelIcon;
    cResult[2] = tmp4.channelIconColor;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  }
  if (cResult[4] === accessibleTitle) {
    if (cResult[5] === tmp4.channelName) {
      if (cResult[6] === tmp4.channelNameContainer) {
        let tmp10;
        if (cResult[7] === title) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp4.flexRow) {
            let tmp14;
            if (cResult[11] === titleSuffix) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp4.channelTextContainer) {
              if (cResult[14] === subTitle) {
                let tmp18;
                if (cResult[15] === tmp14) {
                  tmp18 = cResult[16];
                }
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp4.flexRow) {
                    let tmp22;
                    if (cResult[19] === tmp18) {
                      tmp22 = cResult[20];
                    }
                    return tmp22;
                  }
                }
                const obj3 = { style: tmp4.flexRow, children: items };
                items = [tmp5, tmp18];
                const tmp25 = closure_17(View, obj3);
                cResult[17] = tmp5;
                cResult[18] = tmp4.flexRow;
                cResult[19] = tmp18;
                cResult[20] = tmp25;
                tmp22 = tmp25;
              }
            }
            const obj4 = { style: tmp4.channelTextContainer, children: items1 };
            items1 = [tmp14, subTitle];
            const tmp21 = closure_17(View, obj4);
            cResult[13] = tmp4.channelTextContainer;
            cResult[14] = subTitle;
            cResult[15] = tmp14;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj5 = { style: tmp4.flexRow, children: items2 };
        items2 = [tmp10, titleSuffix];
        const tmp17 = closure_17(View, obj5);
        cResult[9] = tmp10;
        cResult[10] = tmp4.flexRow;
        cResult[11] = titleSuffix;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  let tmp11 = title;
  if (!react.isValidElement(title)) {
    const obj6 = { style: tmp4.channelNameContainer, children: authStore3(Text_Text.Text, obj7) };
    obj7 = { style: tmp4.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    tmp11 = authStore3(View, obj6);
  }
  cResult[4] = accessibleTitle;
  cResult[5] = tmp4.channelName;
  cResult[6] = tmp4.channelNameContainer;
  cResult[7] = title;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let accessibleTitle;
  let icon;
  let items;
  let items1;
  let items2;
  let obj3;
  let subTitle;
  let title;
  let titleSuffix;
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = closure_18();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!react.isValidElement(icon)) {
      const obj = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      const Icon = native.Icon;
      tmp4 = authStore3(Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!react.isValidElement(title)) {
    const obj2 = { style: tmp.channelNameContainer, children: authStore3(Text_Text.Text, obj3) };
    obj3 = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    tmp8 = authStore3(View, obj2);
  }
  const obj4 = { style: tmp.flexRow, children: items };
  items = [tmp2, ];
  const obj6 = { style: tmp.flexRow, children: items1 };
  items1 = [tmp8, titleSuffix];
  const obj5 = { style: tmp.channelTextContainer, children: items2 };
  items2 = [closure_17(View, obj6), subTitle];
  items[1] = closure_17(View, obj5);
  return closure_17(View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  let tmp5;
  let tmp9;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(8);
  parentChannel = parentChannel.parentChannel;
  const tmp4 = closure_18();
  const navbarTitleSecondaryText = tmp4.navbarTitleSecondaryText;
  if (cResult[0] !== parentChannel) {
    const intl = intl10.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { channelName: tmpResult.computeChannelName(parentChannel, UserStore, RelationshipStore) };
    const BjYvHO = intl10.t.BjYvHO;
    tmpResult = useChannelName;
    const formatToPlainStringResult = formatToPlainString(BjYvHO, obj2);
    cResult[0] = parentChannel;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== parentChannel) {
    const tmpResult2 = useChannelName;
    const channelName = tmpResult2.computeChannelName(parentChannel, UserStore, RelationshipStore, true);
    cResult[2] = parentChannel;
    cResult[3] = channelName;
    tmp9 = channelName;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.navbarTitleSecondaryText) {
    if (cResult[5] === tmp5) {
      let tmp15;
      if (cResult[6] === tmp9) {
        tmp15 = cResult[7];
      }
      return tmp15;
    }
  }
  const tmp16 = authStore3(Text_Text.Text, { lineClamp: 1, style: navbarTitleSecondaryText, accessibilityLabel: tmp5, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: tmp9 });
  cResult[4] = tmp4.navbarTitleSecondaryText;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : ((parentChannel) => {
  let BjYvHO;
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  parentChannel = parentChannel.parentChannel;
  const obj = { lineClamp: 1, style: closure_18().navbarTitleSecondaryText, accessibilityLabel: formatToPlainString(BjYvHO, obj2), maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: obj4.computeChannelName(parentChannel, UserStore, RelationshipStore, true) };
  const Text = Text_Text.Text;
  const intl = intl10.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { channelName: obj3.computeChannelName(parentChannel, UserStore, RelationshipStore) };
  BjYvHO = intl10.t.BjYvHO;
  obj3 = useChannelName;
  obj4 = useChannelName;
  return authStore3(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let tmp10;
  let tmp7;
  let tmp8;
  const tmp = userId;
  let obj = userId(576);
  const cResult = obj.c(10);
  userId = userId.userId;
  const style = userId.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function t() {
      let str = RelationshipStore.getNickname(userId);
      if (str == null) {
        const obj = UserUtilsDefault;
        str = obj.getName(tmp);
      }
      if (str == null) {
        str = "";
      }
      return str;
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const intl = tmp(1126).intl;
    const obj2 = { channelName: stateFromStores };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.fYqXVY, obj2);
    cResult[4] = stateFromStores;
    cResult[5] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === style) {
      let tmp12;
      if (cResult[8] === tmp10) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const tmp13 = closure_16(tmp(1188).LegacyText, { numberOfLines: 1, style, accessibilityLabel: tmp10, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: stateFromStores });
  cResult[6] = stateFromStores;
  cResult[7] = style;
  cResult[8] = tmp10;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((userId) => {
  let intl;
  userId = userId.userId;
  const style = userId.style;
  let obj = userId(504);
  const items = [UserStore, RelationshipStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let str = RelationshipStore.getNickname(userId);
    if (str == null) {
      const obj = UserUtilsDefault;
      str = obj.getName(tmp);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  const obj2 = { numberOfLines: 1, style, accessibilityLabel: intl.formatToPlainString(userId(1126).t.fYqXVY, { channelName: stateFromStores }), maxFontSizeMultiplier: 1, accessibilityRole: "header", children: stateFromStores };
  const LegacyText = userId(1188).LegacyText;
  intl = userId(1126).intl;
  return closure_16(LegacyText, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  let style;
  let tmp6;
  let userId;
  let obj = userId(576);
  const cResult = obj.c(9);
  ({ style, userId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function t() {
      let tmp;
      const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: tmp(PresenceStore.getActivities(userId)) };
      tmp = isStreamingDefault;
      return obj;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  if (cResult[3] === isMobileOnline) {
    if (cResult[4] === isVROnline) {
      if (cResult[5] === status) {
        if (cResult[6] === streaming) {
          let tmp8;
          if (cResult[7] === style) {
            tmp8 = cResult[8];
          }
          return tmp8;
        }
      }
    }
  }
  const obj2 = { isMobileOnline, isVROnline, status, streaming, size: userId(1188).StatusSizes.SMALL, style };
  const Status = userId(1188).Status;
  const tmp9 = closure_16(Status, obj2);
  cResult[3] = isMobileOnline;
  cResult[4] = isVROnline;
  cResult[5] = status;
  cResult[6] = streaming;
  cResult[7] = style;
  cResult[8] = tmp9;
  tmp8 = tmp9;
}) : ((userId) => {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  userId = userId.userId;
  const style = userId.style;
  let obj = userId(504);
  const items = [PresenceStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tmp;
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: tmp(PresenceStore.getActivities(userId)) };
    tmp = isStreamingDefault;
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  const obj2 = { isMobileOnline, isVROnline, status, streaming, size: userId(1188).StatusSizes.SMALL, style };
  const Status = userId(1188).Status;
  return closure_16(Status, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttons;
  let constants2;
  let style;
  let tmp2;
  let obj = react2;
  const cResult = obj.c(5);
  ({ buttons, style } = arg0);
  if (cResult[0] !== buttons) {
    let mapped;
    if (buttons != null) {
      mapped = buttons.map((onPress, index) => {
        let accessibilityLabel;
        let children;
        let color;
        let disabled;
        let items1;
        let onLongPress;
        let source;
        let style;
        onPress = onPress.onPress;
        const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
        ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
        let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress, onLongPress, disabled, style, children };
        const tmp6 = closure_1(closure_2[35]);
        if (hasActivitiesPrivateChannelTooltip) {
          onPress = (arg0) => {
            if (null != fn) {
              tmp(arg0);
            }
            const obj = DismissibleContentUnsafeUtils;
            const obj2 = { dismissAction: constants.AUTO };
            const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
          };
        }
        const children1 = [closure_16(tmp6, obj), ];
        let tmp3Result = null;
        if (hasActivitiesPrivateChannelTooltip) {
          let obj2 = {
            contentTypes: items1,
            groupName: constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS,
            children(markAsDismissed) {
                markAsDismissed = markAsDismissed.markAsDismissed;
                let tmp2 = null;
                if (markAsDismissed.visibleContent === markAsDismissed(closure_2[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
                  const obj = {
                    onClosePress() {
                        return markAsDismissed(constants.UNKNOWN);
                      }
                  };
                  tmp2 = closure_16(closure_1(closure_2[39]), obj);
                }
                return tmp2;
              }
          };
          items1 = [];
          const tmp4Result = closure_1(closure_2[38]);
          items1[0] = onPress(closure_2[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP;
          tmp3Result = closure_16(tmp4Result, obj2);
        }
        children1[1] = tmp3Result;
        return closure_17(closure_4, { children: children1 }, index);
      });
    }
    cResult[0] = buttons;
    cResult[1] = mapped;
    tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp5;
    if (cResult[3] === tmp2) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  let tmp6 = authStore3(View, { style, children: tmp2 });
  cResult[2] = style;
  cResult[3] = tmp2;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((buttons) => {
  let constants2;
  let mapped;
  buttons = buttons.buttons;
  let obj = { style: buttons.style, children: mapped };
  mapped = undefined;
  if (buttons != null) {
    mapped = buttons.map((onPress, index) => {
      let accessibilityLabel;
      let children;
      let color;
      let disabled;
      let items1;
      let onLongPress;
      let source;
      let style;
      onPress = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress, onLongPress, disabled, style, children };
      const tmp6 = closure_1(closure_2[35]);
      if (hasActivitiesPrivateChannelTooltip) {
        onPress = (arg0) => {
          if (null != fn) {
            tmp(arg0);
          }
          const obj = DismissibleContentUnsafeUtils;
          const obj2 = { dismissAction: constants.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
        };
      }
      const children1 = [closure_16(tmp6, obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        let obj2 = {
          contentTypes: items1,
          groupName: constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS,
          children(markAsDismissed) {
              markAsDismissed = markAsDismissed.markAsDismissed;
              let tmp2 = null;
              if (markAsDismissed.visibleContent === markAsDismissed(closure_2[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
                const obj = {
                  onClosePress() {
                      return markAsDismissed(constants.UNKNOWN);
                    }
                };
                tmp2 = closure_16(closure_1(closure_2[39]), obj);
              }
              return tmp2;
            }
        };
        items1 = [];
        const tmp4Result = closure_1(closure_2[38]);
        items1[0] = onPress(closure_2[37]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP;
        tmp3Result = closure_16(tmp4Result, obj2);
      }
      children1[1] = tmp3Result;
      return closure_17(closure_4, { children: children1 }, index);
    });
  }
  return authStore3(View, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = tmp9;
export const ChannelTitle = memoResult;
export const ChannelButtons = tmp11;