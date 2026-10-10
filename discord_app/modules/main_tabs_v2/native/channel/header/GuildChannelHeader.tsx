// === Module 12865: GuildChannelHeader ===

// Module 12865 (GuildChannelHeader)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import useChannelName from "useChannelName" /* 5421 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8158 */;
import ChannelHeader from "ChannelHeader" /* 12852 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 12866 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6980 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5020 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function computeVisibleChannelName(channel) {
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t["4WNcpu"]);
  } else if (null == channel) {
    const intl = util.intl;
    const string = intl.string;
    let ai6Lbr = util.t;
    if (isConnected) {
      ai6Lbr = ai6Lbr.ai6Lbr;
      let stringResult1 = string(ai6Lbr);
    } else {
      stringResult1 = string(ai6Lbr.ZTNur7);
    }
  } else {
    stringResult = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = useChannelName;
  }
  return stringResult;
}
let View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(2069).THREAD_CHANNEL_TYPES;
const Constants = fn(1085);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
let c22 = 500;
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelMemberCount(channel) {
  const cResult = channel(576).c(13);
  channel = channel.channel;
  const withSeparator = channel.withSeparator;
  let obj = channel(576);
  const token = channel(4818).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelMemberStore, ChannelMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === channel.id) {
      let tmp9 = cResult[3];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp9);
    ({ online, total } = stateFromStoresObject);
    if (cResult[4] === channel.guild_id) {
      if (cResult[5] === channel.id) {
        let tmp11 = cResult[6];
        let tmp12 = cResult[7];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      if (null == total) {
        const tmp18 = tmp(6299).ICON_SIZE[token];
        if (cResult[8] === online) {
          if (cResult[9] === tmp18) {
            if (cResult[10] === total) {
              if (cResult[11] === tmp4) {
                let tmp19 = cResult[12];
              }
              return tmp19;
            }
          }
        }
        const tmpResult4 = tmp(12859);
        const result = tmpResult4.renderMemberCountText(online, total, tmp4, tmp18);
        cResult[8] = online;
        cResult[9] = tmp18;
        cResult[10] = total;
        cResult[11] = tmp4;
        cResult[12] = result;
        tmp19 = result;
      }
    }
    const fn2 = function _() {
      const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
    };
    const items1 = [, ];
    ({ guild_id: arr2[0], id: arr2[1] } = channel);
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = fn2;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = fn2;
    const tmpResult3 = tmp(504);
  }
  const fn = function u() {
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of tmp) {
      let tmp3 = 0 !== item10021.count;
      if (tmp3) {
        tmp3 = item10021.id !== constants2.UNKNOWN;
      }
      if (tmp3) {
        flag = true;
        num = num + item10021.count;
        if (item10021.id === constants2.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + item10021.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp15 = null;
      if (flag2) {
        tmp15 = num;
      }
      const obj = { total: tmp15, online: num2 };
      let memberCount = obj;
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp9 = fn;
  const tmpResult = channel(4818);
}) : (function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(4818).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(4818);
  const items = [ChannelMemberStore, ChannelMemberCountStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of tmp) {
      let tmp3 = 0 !== item10021.count;
      if (tmp3) {
        tmp3 = item10021.id !== constants2.UNKNOWN;
      }
      if (tmp3) {
        flag = true;
        num = num + item10021.count;
        if (item10021.id === constants2.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + item10021.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp15 = null;
      if (flag2) {
        tmp15 = num;
      }
      const obj = { total: tmp15, online: num2 };
      let memberCount = obj;
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = noop.useEffect(() => {
    const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    const tmpResult = tmp(12859);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(6299).ICON_SIZE[token]);
  }
  const obj2 = channel(504);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelName(arg0) {
  const cResult = guildId(576).c(26);
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread } = arg0);
  ({ disableArrow, icon } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore];
    const fn = function t() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = guildId(576);
  const tmpResult = guildId(504);
  const tmp7 = computeVisibleChannelName({ channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(tmp4, tmp5) });
  if (cResult[2] === channel) {
    if (cResult[3] === guildId) {
      if (cResult[4] === showCreateThread) {
        let tmp8 = cResult[5];
      }
      const formatToPlainString = guildId(1126).intl.formatToPlainString;
      const t = guildId(1126).t;
      { channelName: null }.channelName = tmp7;
      if (cResult[6] === tmp8) {
        if (cResult[7] === parentChannel) {
          let tmp15 = cResult[8];
        }
        const items1 = [GuildMemberCountStore];
        let num6 = guildId(504).useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
        if (num6 == null) {
          num6 = 0;
        }
        if (cResult[9] === channel) {
          if (cResult[10] === disableGuildMemberCount) {
            if (cResult[11] === num6) {
              if (cResult[12] === showCreateThread) {
                let tmp20 = cResult[13];
              }
              let id;
              if (channel != null) {
                id = channel.id;
              }
              const shouldChannelShowLoadingIndicator = guildId(12857).useShouldChannelShowLoadingIndicator(id);
              if (cResult[14] === channel) {
                if (cResult[15] === shouldChannelShowLoadingIndicator) {
                  let tmp26 = cResult[16];
                }
                if (cResult[17] === channel) {
                  if (cResult[18] === parentChannel) {
                    if (cResult[19] === tmp15) {
                      if (cResult[20] === tmp26) {
                        if (cResult[21] === tmp20) {
                          if (!tmp26) {
                            tmp26 = tmp20;
                          }
                          if (!tmp26) {
                            tmp26 = null != tmp15;
                          }
                          const obj4 = { accessibleTitle: tmp14, subtitle: cResult[22], disableArrow, guildId, icon };
                          const renderChannelTitleResult = guildId(12859).renderChannelTitle(tmp7, obj4);
                          if (cResult[23] === tmp26) {
                            if (cResult[24] === renderChannelTitleResult) {
                              let tmp39 = cResult[25];
                            }
                            return tmp39;
                          }
                          const obj5 = { node: renderChannelTitleResult, hasSubtitle: tmp26 };
                          cResult[23] = tmp26;
                          cResult[24] = renderChannelTitleResult;
                          cResult[25] = obj5;
                          tmp39 = obj5;
                          const tmpResult8 = guildId(12859);
                        }
                      }
                    }
                  }
                }
                if (tmp26) {
                  let tmp29Result = closure_19(guildId(12857).ChannelHeaderLoadingIndicator, {});
                } else {
                  let tmp31 = tmp20;
                  if (tmp20) {
                    const obj6 = { channel, withSeparator: null != tmp15 };
                    tmp31 = closure_19(closure_23, obj6);
                  }
                  const items2 = [tmp31, ];
                  const obj7 = { children: null };
                  items2[1] = null != parentChannel && tmp15;
                  obj7.children = items2;
                  tmp29Result = closure_21(closure_20, obj7);
                  const tmp34 = null != parentChannel && tmp15;
                }
                cResult[17] = channel;
                cResult[18] = parentChannel;
                cResult[19] = tmp15;
                cResult[20] = tmp26;
                cResult[21] = tmp20;
                cResult[22] = tmp29Result;
              }
              let isForumLikeChannelResult;
              if (channel != null) {
                isForumLikeChannelResult = channel.isForumLikeChannel();
              }
              let tmp28 = !isForumLikeChannelResult;
              if (!isForumLikeChannelResult) {
                tmp28 = shouldChannelShowLoadingIndicator;
              }
              cResult[14] = channel;
              cResult[15] = shouldChannelShowLoadingIndicator;
              cResult[16] = tmp28;
              tmp26 = tmp28;
              const tmpResult7 = guildId(12857);
            }
          }
        }
        let tmp21 = !disableGuildMemberCount;
        if (!disableGuildMemberCount) {
          tmp21 = num6 < c22;
        }
        if (tmp21) {
          tmp21 = null != channel;
        }
        if (tmp21) {
          tmp21 = !channel.isThread();
        }
        if (tmp21) {
          const items3 = [, ];
          ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
          tmp21 = !items3.includes(channel.type);
        }
        if (tmp21) {
          tmp21 = !showCreateThread;
        }
        cResult[9] = channel;
        cResult[10] = disableGuildMemberCount;
        cResult[11] = num6;
        cResult[12] = showCreateThread;
        cResult[13] = tmp21;
        tmp20 = tmp21;
        const tmpResult6 = guildId(504);
      }
      let result;
      if (tmp8) {
        if (null != parentChannel) {
          result = guildId(12859).renderParentChannelSubTitle(parentChannel);
          const tmpResult9 = guildId(12859);
        }
      }
      cResult[6] = tmp8;
      cResult[7] = parentChannel;
      cResult[8] = result;
      tmp15 = result;
      const obj3 = { channelName: null };
    }
  }
  const obj2 = { channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(tmp4, tmp5) };
  const shouldNSFWGateGuildResult = guildId(9460).shouldNSFWGateGuild(guildId);
  let tmp10 = !shouldNSFWGateGuildResult;
  if (!shouldNSFWGateGuildResult) {
    let tmp11 = showCreateThread;
    if (!showCreateThread) {
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      tmp11 = isThreadResult;
    }
    tmp10 = tmp11;
  }
  cResult[2] = channel;
  cResult[3] = guildId;
  cResult[4] = showCreateThread;
  cResult[5] = tmp10;
  tmp8 = tmp10;
  const tmpResult10 = guildId(9460);
}) : (function useChannelName(arg0) {
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread } = arg0);
  ({ disableArrow, icon } = arg0);
  const items = [GatewayConnectionStore];
  const obj = guildId(504);
  const tmp3 = computeVisibleChannelName({ channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(items, () => connected.isConnected()) });
  const obj2 = { channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(items, () => connected.isConnected()) };
  const shouldNSFWGateGuildResult = guildId(9460).shouldNSFWGateGuild(guildId);
  let tmp5 = !shouldNSFWGateGuildResult;
  if (!shouldNSFWGateGuildResult) {
    let tmp6 = showCreateThread;
    if (!showCreateThread) {
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      tmp6 = isThreadResult;
    }
    tmp5 = tmp6;
  }
  const intl = guildId(1126).intl;
  const t = guildId(1126).t;
  const obj3 = guildId(9460);
  if (tmp5) {
    if (null != parentChannel) {
      const result = guildId(12859).renderParentChannelSubTitle(parentChannel);
      const tmpResult = guildId(12859);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp5 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp3 });
  const items1 = [GuildMemberCountStore];
  let num = guildId(504).useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let tmp12 = !disableGuildMemberCount;
  if (!disableGuildMemberCount) {
    tmp12 = num < c22;
  }
  if (tmp12) {
    tmp12 = null != channel;
  }
  if (tmp12) {
    tmp12 = !channel.isThread();
  }
  if (tmp12) {
    const items2 = [, ];
    ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
    tmp12 = !items2.includes(channel.type);
  }
  if (tmp12) {
    tmp12 = !showCreateThread;
  }
  const tmpResult4 = guildId(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = guildId(12857).useShouldChannelShowLoadingIndicator(id);
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  let tmp18 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp18 = shouldChannelShowLoadingIndicator;
  }
  if (tmp18) {
    let tmp19Result = closure_19(guildId(12857).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp21 = tmp12;
    if (tmp12) {
      const obj4 = { channel, withSeparator: null != result };
      tmp21 = closure_19(closure_23, obj4);
    }
    const items3 = [tmp21, ];
    const obj5 = { children: null };
    items3[1] = null != parentChannel && result;
    obj5.children = items3;
    tmp19Result = closure_21(closure_20, obj5);
    const tmp24 = null != parentChannel && result;
  }
  const obj6 = { node: null, hasSubtitle: null };
  const tmpResult5 = guildId(12857);
  obj6.node = guildId(12859).renderChannelTitle(tmp3, { accessibleTitle: formatToPlainStringResult, subtitle: tmp19Result, disableArrow, guildId, icon });
  if (!tmp18) {
    tmp18 = tmp12;
  }
  if (!tmp18) {
    tmp18 = null != result;
  }
  obj6.hasSubtitle = tmp18;
  return obj6;
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLinkedLobbyCoachmark(iconRef) {
  const cResult = require("c").c(13);
  ({ guild, channel } = iconRef);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(2049).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
    const obj2 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj2;
    tmp4 = items;
    tmp5 = obj2;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(tmp4, tmp5), 2);
  _require = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.YIVr4B);
    const intl2 = tmp(1126).intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.LINKED_LOBBIES) };
    const formatResult = intl2.format(tmp(1126).t.w8VWRT, obj3);
    cResult[2] = stringResult;
    cResult[3] = formatResult;
    let tmp9 = formatResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let linkedLobby;
  if (channel != null) {
    linkedLobby = channel.linkedLobby;
  }
  const tmp15 = null != linkedLobby && tmp6[0] === require("dismissible_content").DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  if (cResult[4] !== tmp6[1]) {
    const fn = function f() {
      return closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = tmp7;
    cResult[5] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === channel) {
    if (cResult[7] === guild) {
      let tmp17 = cResult[8];
    }
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp16) {
        if (cResult[11] === tmp17) {
          let tmp19 = cResult[12];
        }
        const coachmark = tmp(9442).useCoachmark(iconRef.iconRef, tmp19);
        return null;
      }
    }
    const obj4 = { title: tmp8, description: tmp9, visible: tmp15, position: "bottom", offsetY: 15, onDismiss: tmp16, imgSource: tmp17 };
    cResult[9] = tmp15;
    cResult[10] = tmp16;
    cResult[11] = tmp17;
    cResult[12] = obj4;
    tmp19 = obj4;
  }
  let channelIconWithGuild;
  if (null != channel) {
    channelIconWithGuild = tmp(8158).getChannelIconWithGuild(channel, guild);
    const tmpResult4 = tmp(8158);
  }
  cResult[6] = channel;
  cResult[7] = guild;
  cResult[8] = channelIconWithGuild;
  tmp17 = channelIconWithGuild;
  const tmpResult = require("useSelectedDismissibleContent");
}) : (function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  _slicedToArray = undefined;
  const items = [guild(2049).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = _slicedToArray(guild(7099).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(2049).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 15, onDismiss: null, imgSource: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.YIVr4B);
    const intl2 = util.intl;
    const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.LINKED_LOBBIES) };
    obj.description = intl2.format(util.t.w8VWRT, obj2);
    let linkedLobby;
    if (channel != null) {
      linkedLobby = channel.linkedLobby;
    }
    obj.visible = null != linkedLobby && closure_3;
    obj.onDismiss = function onDismiss() {
      return closure_1_2(constants.USER_DISMISS);
    };
    let channelIconWithGuild;
    if (null != channel) {
      channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, guild);
      const tmpResult = utils_ChannelUtils;
    }
    obj.imgSource = channelIconWithGuild;
    return obj;
  }, items1);
  let obj = guild(7099);
  const coachmark = guild(9442).useCoachmark(guild.iconRef, memo);
  return null;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelHeader(channelId) {
  const cResult = channelId(guildId[16]).c(46);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  stateFromStores.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channelId(guildId[16]);
  stateFromStores = channelId(guildId[19]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class D {
      constructor() {
        return closure_1_7.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = D;
    let tmp10 = D;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = channelId(guildId[19]);
  const stateFromStores1 = channelId(guildId[19]).useStateFromStores(tmp9, tmp10);
  const tmp13 = screenIndex(guildId[31])(channelId);
  View = tmp13;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class D {
      constructor() {
        return closure_1_7.isConnected();
      }
    }
    cResult[5] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === showCreateThread) {
      if (tmp13 != null) {
        let parentChannelId = tmp13.parentChannelId;
      }
      class D {
        constructor() {
          return closure_1_7.isConnected();
        }
      }
      const stateFromStores2 = tmp(tmp2[19]).useStateFromStores(tmp14, R);
      if (pressable) {
        pressable = null != stateFromStores;
      }
      if (pressable) {
        pressable = !showCreateThread;
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [GuildStore];
        class D {
          constructor() {
            return closure_1_7.isConnected();
          }
        }
        cResult[10] = items3;
        let tmp18 = items3;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== guildId) {
        class H {
          constructor() {
            return closure_12.getGuild(guildId);
          }
        }
        cResult[11] = guildId;
        class D {
          constructor() {
            return closure_1_7.isConnected();
          }
        }
        cResult[12] = H;
      } else {
        class H {
          constructor() {
            return closure_12.getGuild(guildId);
          }
        }
      }
      const tmpResult5 = tmp(tmp2[19]);
      const stateFromStores3 = tmp(tmp2[19]).useStateFromStores(tmp18, H);
      if (cResult[13] === stateFromStores) {
        class H {
          constructor() {
            return closure_12.getGuild(guildId);
          }
        }
      }
      let renderChannelIconResult = null;
      if (null != stateFromStores) {
        class H {
          constructor() {
            return closure_12.getGuild(guildId);
          }
        }
        if (!showCreateThread) {
          class H {
            constructor() {
              return closure_12.getGuild(guildId);
            }
          }
          renderChannelIconResult = obj6.renderChannelIcon(stateFromStores, stateFromStores3);
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = stateFromStores3;
      cResult[15] = showCreateThread;
      cResult[16] = renderChannelIconResult;
      const tmpResult6 = tmp(tmp2[19]);
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = showCreateThread;
  if (tmp13 != null) {
    class H {
      constructor() {
        return closure_12.getGuild(guildId);
      }
    }
  }
  class R {
    constructor() {
      tmp = closure_4;
      if (null != closure_4) {
        tmp2 = showCreateThread;
        if (!showCreateThread) {
          if (null != tmp) {
            if (null != tmp.parent_id) {
              tmp4 = THREAD_CHANNEL_TYPES;
              if (THREAD_CHANNEL_TYPES.has(tmp.type)) {
                tmp5 = closure_10;
                channel = closure_10.getChannel(tmp.parent_id);
              }
            }
          }
        }
        return channel;
      }
      parentChannelId = undefined;
      tmp6 = closure_10;
      if (closure_5 != null) {
        parentChannelId = closure_5.parentChannelId;
      }
      channel = closure_10.getChannel(parentChannelId);
      return;
    }
  }
  cResult[8] = undefined;
  cResult[9] = R;
  const tmpResult4 = channelId(guildId[19]);
}) : (function GuildChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  let stateFromStores;
  const ref = stateFromStores.useRef(null);
  const items = [ChannelStore];
  stateFromStores = channelId(guildId[19]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = stateFromStores;
  const obj2 = channelId(guildId[19]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = channelId(guildId[19]).useStateFromStores(items1, () => connected.isConnected());
  let parentChannelId = screenIndex(guildId[31])(channelId);
  const obj3 = channelId(guildId[19]);
  const items2 = [ChannelStore];
  const stateFromStores2 = channelId(guildId[19]).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      if (!showCreateThread) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
              let channel = ChannelStore.getChannel(stateFromStores.parent_id);
            }
          }
        }
      }
      return channel;
    }
    parentChannelId = undefined;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = ChannelStore.getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  const obj4 = channelId(guildId[19]);
  const items3 = [GuildStore];
  const stateFromStores3 = channelId(guildId[19]).useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      renderChannelIconResult = tmp2(tmp3[21]).renderChannelIcon(stateFromStores, stateFromStores3);
      const tmp2Result3 = tmp2(tmp3[21]);
    }
  }
  const obj5 = { channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult };
  const tmp2Result = channelId(guildId[19]);
  const items4 = [channelId, screenIndex];
  ({ node, hasSubtitle } = closure_25({ channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult }));
  const callback = obj.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
  }, items4);
  let tmp13 = null;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp13 = null;
    if (null != linkedLobby) {
      const obj6 = { ref, children: null };
      const obj7 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      obj6.children = closure_19(closure_26, obj7);
      tmp13 = closure_19(parentChannelId, obj6);
    }
  }
  const obj8 = { children: null };
  const items5 = [tmp13, node];
  obj8.children = items5;
  const tmp11Result = closure_21(closure_20, obj8);
  if (null != stateFromStores) {
    const obj9 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const intl = tmp2(tmp3[23]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + computeVisibleChannelName(obj9) + ", " + intl.string(tmp2(tmp3[23]).t.x87QCk);
    const tmp21 = computeVisibleChannelName(obj9);
  }
  if (pressable) {
    let num2 = 24;
    if (hasSubtitle) {
      num2 = 44;
    }
    const obj10 = { children: null };
    const tmp2Result4 = tmp2(tmp3[21]);
    obj10.children = tmp2Result4.renderTitleWrapper(tmp11Result, callback, combined, num2);
    return closure_19(closure_20, obj10);
  } else {
    return tmp11Result;
  }
  const tmp9 = closure_25({ channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult });
}));