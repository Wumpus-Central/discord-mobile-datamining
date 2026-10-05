// === Module 13117: GuildChannelHeader ===

// Module 13117 (GuildChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import useChannelName from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9899 */;
import ChannelHeader from "ChannelHeader" /* 13104 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 13118 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6782 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channelId, dependencyMap;

let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  let stringResult;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  const obj = age_gate_AgeGateUtils;
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t["4WNcpu"]);
  } else if (null == channel) {
    let stringResult1;
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (isConnected) {
      stringResult1 = string(t.ai6Lbr);
    } else {
      stringResult1 = string(t.ZTNur7);
    }
    stringResult = stringResult1;
  } else {
    const tmpResult = useChannelName;
    stringResult = tmpResult.computeChannelName(channel, UserStore, RelationshipStore);
  }
  return stringResult;
}
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let c22 = 500;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let online;
  let total;
  let obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const withSeparator = channel.withSeparator;
  const tmpResult = channel(4580);
  const token = tmpResult.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelMemberStore, ChannelMemberCountStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp9;
    if (cResult[2] === channel.id) {
      tmp9 = cResult[3];
    }
    const tmpResult3 = channel(504);
    const stateFromStoresObject = tmpResult3.useStateFromStoresObject(first, tmp9);
    ({ online, total } = stateFromStoresObject);
    if (cResult[4] === channel.guild_id) {
      let tmp11;
      let tmp12;
      if (cResult[5] === channel.id) {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (null == total) {
        const tmp18 = channel(6104).ICON_SIZE[token];
        if (cResult[8] === online) {
          if (cResult[9] === tmp18) {
            if (cResult[10] === total) {
              let tmp19;
              if (cResult[11] === (undefined !== withSeparator && withSeparator)) {
                tmp19 = cResult[12];
              }
              return tmp19;
            }
          }
        }
        const tmpResult4 = channel(13111);
        const result = tmpResult4.renderMemberCountText(online, total, tmp4, tmp18);
        cResult[8] = online;
        cResult[9] = tmp18;
        cResult[10] = total;
        cResult[11] = undefined !== withSeparator && withSeparator;
        cResult[12] = result;
        tmp19 = result;
      }
    }
    const fn2 = function _() {
      const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
    };
    const items1 = [, ];
    ({ guild_id: arr2[0], id: arr2[1] } = channel);
    let num2 = 4;
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = fn2;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  }
  const fn = function u() {
    let memberCount;
    const groups = ChannelMemberStore.getProps(channel.guild_id, channel.id).groups;
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of groups) {
      let tmp2 = 0 !== item10021.count && item10021.id !== constants.UNKNOWN;
      if (tmp2) {
        flag = true;
        num = num + item10021.count;
        if (item10021.id === constants.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + item10021.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp14 = null;
      if (flag2) {
        tmp14 = num;
      }
      memberCount = { total: tmp14, online: num2 };
      const obj = { total: tmp14, online: num2 };
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp9 = fn;
}) : ((channel) => {
  let online;
  let total;
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  let obj = channel(4580);
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  const items = [ChannelMemberStore, ChannelMemberCountStore];
  const obj2 = channel(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let memberCount;
    const groups = ChannelMemberStore.getProps(channel.guild_id, channel.id).groups;
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of groups) {
      let tmp2 = 0 !== item10021.count && item10021.id !== constants.UNKNOWN;
      if (tmp2) {
        flag = true;
        num = num + item10021.count;
        if (item10021.id === constants.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + item10021.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp14 = null;
      if (flag2) {
        tmp14 = num;
      }
      memberCount = { total: tmp14, online: num2 };
      const obj = { total: tmp14, online: num2 };
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = react.useEffect(() => {
    const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    const tmpResult = channel(13111);
    let tmp8 = tmpResult;
    return tmpResult.renderMemberCountText(online, total, flag, channel(6104).ICON_SIZE[token]);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let connected;
  let disableArrow;
  let disableGuildMemberCount;
  let guildId;
  let icon;
  let parentChannel;
  let showCreateThread;
  let tmp4;
  let tmp5;
  const obj = guildId(576);
  const cResult = obj.c(26);
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
  const tmpResult = guildId(504);
  const obj2 = { channel, guildId, showCreateThread, isConnected: tmpResult.useStateFromStores(tmp4, tmp5) };
  const tmp7 = computeVisibleChannelName(obj2);
  if (cResult[2] === channel) {
    if (cResult[3] === guildId) {
      let tmp8;
      if (cResult[4] === showCreateThread) {
        tmp8 = cResult[5];
      }
      const formatToPlainString = guildId(1126).intl.formatToPlainString;
      const t = guildId(1126).t;
      if (cResult[6] === tmp8) {
        let tmp15;
        if (cResult[7] === parentChannel) {
          tmp15 = cResult[8];
        }
        const items1 = [GuildMemberCountStore];
        const tmpResult6 = guildId(504);
        let num6 = tmpResult6.useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
        if (num6 == null) {
          num6 = 0;
        }
        if (cResult[9] === channel) {
          if (cResult[10] === disableGuildMemberCount) {
            if (cResult[11] === num6) {
              let tmp20;
              if (cResult[12] === showCreateThread) {
                tmp20 = cResult[13];
              }
              let id;
              const useShouldChannelShowLoadingIndicator = guildId(13109).useShouldChannelShowLoadingIndicator;
              guildId(13109);
              if (channel != null) {
                id = channel.id;
              }
              const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
              if (cResult[14] === channel) {
                let tmp27;
                let tmp31Result;
                if (cResult[15] === shouldChannelShowLoadingIndicator) {
                  tmp27 = cResult[16];
                }
                if (cResult[17] === channel) {
                  if (cResult[18] === parentChannel) {
                    if (cResult[19] === tmp15) {
                      if (cResult[20] === tmp27) {
                        let tmp30;
                        if (cResult[21] === tmp20) {
                          tmp30 = cResult[22];
                        }
                        if (!tmp27) {
                          tmp27 = tmp20;
                        }
                        if (!tmp27) {
                          tmp27 = null != tmp15;
                        }
                        const obj4 = { accessibleTitle: tmp14, subtitle: tmp30, disableArrow, guildId, icon };
                        const tmpResult8 = guildId(13111);
                        const renderChannelTitleResult = tmpResult8.renderChannelTitle(tmp7, obj4);
                        if (cResult[23] === tmp27) {
                          let tmp40;
                          if (cResult[24] === renderChannelTitleResult) {
                            tmp40 = cResult[25];
                          }
                          return tmp40;
                        }
                        const obj5 = { node: renderChannelTitleResult, hasSubtitle: tmp27 };
                        cResult[23] = tmp27;
                        cResult[24] = renderChannelTitleResult;
                        cResult[25] = obj5;
                        tmp40 = obj5;
                      }
                    }
                  }
                }
                if (tmp27) {
                  tmp31Result = closure_19(guildId(13109).ChannelHeaderLoadingIndicator, {});
                } else {
                  let tmp33 = tmp20;
                  if (tmp33) {
                    const obj6 = { channel, withSeparator: null != tmp15 };
                    tmp33 = closure_19(closure_23, obj6);
                  }
                  const items2 = [tmp33, ];
                  const obj7 = { children: items2 };
                  const tmp36 = null != parentChannel && tmp15;
                  items2[1] = tmp36;
                  tmp31Result = closure_21(closure_20, obj7);
                }
                cResult[17] = channel;
                cResult[18] = parentChannel;
                cResult[19] = tmp15;
                cResult[20] = tmp27;
                cResult[21] = tmp20;
                cResult[22] = tmp31Result;
                tmp30 = tmp31Result;
              }
              let isForumLikeChannelResult;
              if (channel != null) {
                isForumLikeChannelResult = channel.isForumLikeChannel();
              }
              cResult[14] = channel;
              cResult[15] = shouldChannelShowLoadingIndicator;
              cResult[16] = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
              tmp27 = tmp29;
            }
          }
        }
        let tmp21 = !disableGuildMemberCount && num6 < c22 && null != channel && !channel.isThread();
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
      }
      let result;
      if (tmp8) {
        if (null != parentChannel) {
          const tmpResult9 = guildId(13111);
          result = tmpResult9.renderParentChannelSubTitle(parentChannel);
        }
      }
      cResult[6] = tmp8;
      cResult[7] = parentChannel;
      cResult[8] = result;
      tmp15 = result;
    }
  }
  const tmpResult10 = guildId(9899);
  let tmp10 = !tmpResult10.shouldNSFWGateGuild(guildId);
  tmpResult10.shouldNSFWGateGuild(guildId);
  if (tmp10) {
    let tmp11 = showCreateThread;
    if (!tmp11) {
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
}) : ((arg0) => {
  let channel;
  let connected;
  let disableArrow;
  let disableGuildMemberCount;
  let guildId;
  let icon;
  let parentChannel;
  let result;
  let showCreateThread;
  let tmp20Result;
  let tmpResult6;
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread } = arg0);
  ({ disableArrow, icon } = arg0);
  const items = [GatewayConnectionStore];
  const obj = guildId(504);
  const obj2 = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => connected.isConnected()) };
  const tmp3 = computeVisibleChannelName(obj2);
  const obj3 = guildId(9899);
  let tmp5 = !obj3.shouldNSFWGateGuild(guildId);
  obj3.shouldNSFWGateGuild(guildId);
  if (tmp5) {
    let tmp6 = showCreateThread;
    if (!tmp6) {
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      tmp6 = isThreadResult;
    }
    tmp5 = tmp6;
  }
  const intl = guildId(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = guildId(1126).t;
  const formatToPlainStringResult = formatToPlainString(tmp5 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp3 });
  if (tmp5) {
    if (null != parentChannel) {
      const tmpResult = guildId(13111);
      result = tmpResult.renderParentChannelSubTitle(parentChannel);
    }
  }
  const items1 = [GuildMemberCountStore];
  const tmpResult4 = guildId(504);
  let num = tmpResult4.useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let tmp12 = !disableGuildMemberCount && num < c22 && null != channel && !channel.isThread();
  if (tmp12) {
    const items2 = [, ];
    ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
    tmp12 = !items2.includes(channel.type);
  }
  if (tmp12) {
    tmp12 = !showCreateThread;
  }
  let id;
  const useShouldChannelShowLoadingIndicator = guildId(13109).useShouldChannelShowLoadingIndicator;
  guildId(13109);
  if (channel != null) {
    id = channel.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  let tmp19 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
  if (tmp19) {
    tmp20Result = closure_19(guildId(13109).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp22 = tmp12;
    if (tmp22) {
      const obj4 = { channel, withSeparator: null != result };
      tmp22 = closure_19(closure_23, obj4);
    }
    const items3 = [tmp22, ];
    const obj5 = { children: items3 };
    const tmp25 = null != parentChannel && result;
    items3[1] = tmp25;
    tmp20Result = closure_21(closure_20, obj5);
  }
  const obj6 = { node: tmpResult6.renderChannelTitle(tmp3, { accessibleTitle: formatToPlainStringResult, subtitle: tmp20Result, disableArrow, guildId, icon }), hasSubtitle: tmp19 };
  tmpResult6 = guildId(13111);
  if (!tmp19) {
    tmp19 = tmp12;
  }
  if (!tmp19) {
    tmp19 = null != result;
  }
  return obj6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let closure_0;
  let first;
  let guild;
  let obj4;
  let tmp8;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(12);
  ({ guild, channel } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [require("dismissible_content").DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(first, undefined, true), 2);
  _require = tmp7;
  const first1 = tmp5[0];
  const CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP = tmp(2036).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.YIVr4B);
    const intl2 = tmp(1126).intl;
    const format = intl2.format;
    const obj2 = { helpdeskArticle: obj4.getArticleURL(constants.LINKED_LOBBIES) };
    const w8VWRT = tmp(1126).t.w8VWRT;
    obj4 = HelpdeskUtilsDefault;
    const formatResult = format(w8VWRT, obj2);
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp9 = formatResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  let linkedLobby;
  if (channel != null) {
    linkedLobby = channel.linkedLobby;
  }
  if (cResult[3] !== tmp5[1]) {
    class T {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[3] = tmp5[1];
    cResult[4] = T;
  } else {
    class T {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[5] === channel) {
    class T {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
    if (cResult[8] === (null != linkedLobby && first1 === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP)) {
      class T {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const obj3 = { title: tmp8, description: tmp9, visible: null != linkedLobby && first1 === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP, position: "bottom", offsetY: 15, onDismiss: T, imgSource: tmp17 };
    cResult[8] = null != linkedLobby && first1 === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
    cResult[9] = T;
    cResult[10] = tmp17;
    cResult[11] = obj3;
  }
  let channelIconWithGuild;
  if (null != channel) {
    class T {
      constructor() {
        return closure_0(ContentDismissActionType.USER_DISMISS);
      }
    }
    channelIconWithGuild = obj5.getChannelIconWithGuild(channel, guild);
  }
  cResult[5] = channel;
  cResult[6] = guild;
  cResult[7] = channelIconWithGuild;
}) : ((guild) => {
  let closure_2;
  let closure_3;
  guild = guild.guild;
  const channel = guild.channel;
  _slicedToArray = undefined;
  const iconRef = guild.iconRef;
  const useSelectedDismissibleContent = guild(6891).useSelectedDismissibleContent;
  const items = [];
  guild(6891);
  items[0] = guild(2036).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp3;
  const tmp4 = tmp2[0] === guild(2036).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp4;
  const items1 = [channel, guild, tmp2[1], tmp4];
  const memo = react.useMemo(() => {
    let channelIconWithGuild;
    let format;
    let intl;
    let linkedLobby;
    let obj2;
    let obj3;
    let w8VWRT;
    const obj = {
      title: intl.string(intl4.t.YIVr4B),
      description: format(w8VWRT, obj2),
      visible: null != linkedLobby && closure_3,
      position: "bottom",
      offsetY: 15,
      onDismiss() {
        return closure_1_2(constants.USER_DISMISS);
      },
      imgSource: channelIconWithGuild
    };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    format = intl2.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants.LINKED_LOBBIES) };
    w8VWRT = intl4.t.w8VWRT;
    linkedLobby = undefined;
    obj3 = HelpdeskUtilsDefault;
    if (channel != null) {
      linkedLobby = channel.linkedLobby;
    }
    channelIconWithGuild = undefined;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
      channelIconWithGuild = tmpResult.getChannelIconWithGuild(channel, guild);
    }
    return obj;
  }, items1);
  let obj = guild(9882);
  const coachmark = obj.useCoachmark(iconRef, memo);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let connected;
  let first;
  let guildId;
  let pressable;
  let showCreateThread;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp7;
  let tmp9;
  let obj = channelId(guildId[16]);
  const cResult = obj.c(46);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  stateFromStores.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channelId(guildId[19]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class D {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = D;
    tmp10 = D;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult4 = channelId(guildId[19]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  const tmp13 = screenIndex(guildId[31])(channelId);
  View = tmp13;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class D {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[5] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === showCreateThread) {
      let tmp18;
      if (tmp13 != null) {
        let parentChannelId = tmp13.parentChannelId;
      }
      class D {
        constructor() {
          return connected.isConnected();
        }
      }
      const tmpResult5 = channelId(guildId[19]);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, G);
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
            return connected.isConnected();
          }
        }
        cResult[10] = items3;
        tmp18 = items3;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== guildId) {
        class U {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[11] = guildId;
        class D {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[12] = U;
      } else {
        class U {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult6 = channelId(guildId[19]);
      const stateFromStores3 = tmpResult6.useStateFromStores(tmp18, U);
      if (cResult[13] === stateFromStores) {
        class U {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      let renderChannelIconResult = null;
      if (null != stateFromStores) {
        class U {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        if (!showCreateThread) {
          class U {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
          renderChannelIconResult = obj6.renderChannelIcon(stateFromStores, stateFromStores3);
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = stateFromStores3;
      cResult[15] = showCreateThread;
      cResult[16] = renderChannelIconResult;
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = showCreateThread;
  if (tmp13 != null) {
    class U {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  class G {
    constructor() {
      if (null != stateFromStores) {
        let channel;
        if (!showCreateThread) {
          if (null != stateFromStores) {
            if (null != stateFromStores.parent_id) {
              if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
                channel = ChannelStore.getChannel(stateFromStores.parent_id);
              }
            }
          }
        }
        return channel;
      }
      parentChannelId = undefined;
      const getChannel = ChannelStore.getChannel;
      if (parentChannelId != null) {
        parentChannelId = parentChannelId.parentChannelId;
      }
      channel = getChannel(parentChannelId);
    }
  }
  cResult[8] = undefined;
  cResult[9] = G;
}) : ((channelId) => {
  let combined;
  let connected;
  let hasSubtitle;
  let items5;
  let node;
  let obj7;
  let pressable;
  let showCreateThread;
  let tmp2Result4;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  let stateFromStores;
  let obj = stateFromStores;
  const isGuildMemberCountVisible = channelId.isGuildMemberCountVisible;
  const ref = stateFromStores.useRef(null);
  const items = [ChannelStore];
  const obj2 = channelId(guildId[19]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GatewayConnectionStore];
  const obj3 = channelId(guildId[19]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  let parentChannelId = screenIndex(guildId[31])(channelId);
  const items2 = [ChannelStore];
  const obj4 = channelId(guildId[19]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let channel;
      if (!showCreateThread) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
              channel = ChannelStore.getChannel(stateFromStores.parent_id);
            }
          }
        }
      }
      return channel;
    }
    parentChannelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  const items3 = [GuildStore];
  const tmp2Result = channelId(guildId[19]);
  const stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      const tmp2Result3 = channelId(guildId[21]);
      renderChannelIconResult = tmp2Result3.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  const obj5 = { channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult };
  const items4 = [channelId, screenIndex];
  ({ node, hasSubtitle } = closure_25(obj5));
  closure_25(obj5);
  const callback = obj.useCallback(() => {
    const obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
  }, items4);
  let tmp13 = null;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp13 = null;
    if (null != linkedLobby) {
      const obj6 = { ref, children: closure_19(closure_26, obj7) };
      obj7 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      tmp13 = closure_19(parentChannelId, obj6);
    }
  }
  const obj8 = { children: items5 };
  items5 = [tmp13, node];
  const tmp11Result = closure_21(closure_20, obj8);
  if (null != stateFromStores) {
    const obj9 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const tmp21 = computeVisibleChannelName(obj9);
    const intl = tmp2(tmp3[23]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + tmp21 + ", " + intl.string(tmp2(tmp3[23]).t.x87QCk);
  }
  if (pressable) {
    let num2 = 24;
    if (hasSubtitle) {
      num2 = 44;
    }
    const obj10 = { children: tmp2Result4.renderTitleWrapper(tmp11Result, callback, combined, num2) };
    tmp2Result4 = channelId(guildId[21]);
    return closure_19(closure_20, obj10);
  } else {
    return tmp11Result;
  }
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;