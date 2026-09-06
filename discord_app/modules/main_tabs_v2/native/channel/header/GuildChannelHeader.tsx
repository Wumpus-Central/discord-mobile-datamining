// === Module 13275: GuildChannelHeader ===

// Module 13275 (GuildChannelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useChannelName from "useChannelName" /* 4713 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import ChannelHeader from "ChannelHeader" /* 13263 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 13276 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7279 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(4262).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(4262);
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
    const tmpResult = tmp(13269);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(6620).ICON_SIZE[token]);
  }
  const obj2 = channel(504);
}
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
function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  _slicedToArray = undefined;
  const items = [guild(1943).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = _slicedToArray(guild(7388).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(1943).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = noop.useMemo(() => {
    let obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 15, onDismiss: null, imgSource: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.YIVr4B);
    const intl2 = util.intl;
    obj = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.LINKED_LOBBIES) };
    obj.description = intl2.format(util.t.w8VWRT, obj);
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
  let obj = guild(7388);
  const coachmark = guild(11127).useCoachmark(guild.iconRef, memo);
  return null;
}
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const Constants = fn(1074);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default noop.memo(function GuildChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  let stateFromStores;
  let obj = stateFromStores;
  const ref = stateFromStores.useRef(null);
  let obj1 = channelId(guildId[17]);
  const items = [ChannelStore];
  stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(guildId[17]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GatewayConnectionStore.isConnected());
  let parentChannelId = screenIndex(guildId[29])(channelId);
  let obj4 = channelId(guildId[17]);
  const items2 = [ChannelStore];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
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
  let tmp2Result = tmp2(tmp3[17]);
  const items3 = [GuildStore];
  const stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      tmp2Result = tmp2(tmp3[18]);
      renderChannelIconResult = tmp2Result.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  closure_129_0 = guildId;
  const items4 = [GatewayConnectionStore];
  obj = { channel: stateFromStores, guildId, showCreateThread, isConnected: channelId(guildId[17]).useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) };
  const tmp12 = computeVisibleChannelName(obj);
  const tmp10 = !isGuildMemberCountVisible;
  const tmp2Result1 = channelId(guildId[17]);
  const tmp9 = !pressable;
  const shouldNSFWGateGuildResult = channelId(guildId[20]).shouldNSFWGateGuild(guildId);
  let tmp14 = !shouldNSFWGateGuildResult;
  if (!shouldNSFWGateGuildResult) {
    let tmp15 = showCreateThread;
    if (!showCreateThread) {
      let isThreadResult;
      if (stateFromStores != null) {
        isThreadResult = stateFromStores.isThread();
      }
      tmp15 = isThreadResult;
    }
    tmp14 = tmp15;
  }
  const intl = tmp2(tmp3[21]).intl;
  const t = tmp2(tmp3[21]).t;
  const tmp2Result2 = channelId(guildId[20]);
  if (tmp14) {
    if (null != stateFromStores2) {
      let result = tmp2(tmp3[18]).renderParentChannelSubTitle(stateFromStores2);
      const tmp2Result3 = tmp2(tmp3[18]);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp14 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp12 });
  const items5 = [GuildMemberCountStore];
  let num = channelId(guildId[17]).useStateFromStores(items5, () => GuildMemberCountStore.getMemberCount(channelId));
  if (num == null) {
    num = 0;
  }
  let tmp19 = !tmp10;
  if (isGuildMemberCountVisible) {
    tmp19 = num < 500;
  }
  if (tmp19) {
    tmp19 = null != stateFromStores;
  }
  if (tmp19) {
    tmp19 = !stateFromStores.isThread();
  }
  if (tmp19) {
    const items6 = [, ];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = closure_15);
    tmp19 = !items6.includes(stateFromStores.type);
  }
  if (tmp19) {
    tmp19 = !showCreateThread;
  }
  const tmp2Result4 = channelId(guildId[17]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = channelId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp24 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp24 = shouldChannelShowLoadingIndicator;
  }
  if (tmp24) {
    let tmp25Result = closure_19(tmp2(tmp3[23]).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp27 = tmp19;
    if (tmp19) {
      obj = { channel: stateFromStores, withSeparator: null != result };
      tmp27 = closure_19(GuildChannelMemberCount, obj);
    }
    const items7 = [tmp27, ];
    obj1 = { children: null };
    items7[1] = null != stateFromStores2 && result;
    obj1.children = items7;
    tmp25Result = closure_21(closure_20, obj1);
    const tmp30 = null != stateFromStores2 && result;
  }
  const tmp2Result5 = channelId(guildId[23]);
  const tmp2Result6 = channelId(guildId[18]);
  if (!tmp24) {
    tmp24 = tmp19;
  }
  if (!tmp24) {
    tmp24 = null != result;
  }
  const items8 = [channelId, screenIndex];
  const callback = obj.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
  }, items8);
  let tmp37 = null;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp37 = null;
    if (null != linkedLobby) {
      const obj2 = { ref, children: null };
      obj3 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      obj2.children = closure_19(ChannelLinkedLobbyCoachmark, obj3);
      tmp37 = closure_19(parentChannelId, obj2);
    }
  }
  obj4 = { children: null };
  const items9 = [tmp37, channelId(guildId[18]).renderChannelTitle(tmp12, { accessibleTitle: formatToPlainStringResult, subtitle: tmp25Result, disableArrow: tmp9, guildId, icon: renderChannelIconResult })];
  obj4.children = items9;
  const tmp35Result = closure_21(closure_20, obj4);
  if (null != stateFromStores) {
    const obj5 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const intl2 = tmp2(tmp3[21]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + computeVisibleChannelName(obj5) + ", " + intl2.string(tmp2(tmp3[21]).t.x87QCk);
    const tmp11Result = computeVisibleChannelName(obj5);
  }
  if (pressable) {
    let num3 = 24;
    if (tmp24) {
      num3 = 44;
    }
    const obj6 = { children: null };
    const tmp2Result7 = tmp2(tmp3[18]);
    obj6.children = tmp2Result7.renderTitleWrapper(tmp35Result, callback, combined, num3);
    return closure_19(closure_20, obj6);
  } else {
    return tmp35Result;
  }
  const renderChannelTitleResult = channelId(guildId[18]).renderChannelTitle(tmp12, { accessibleTitle: formatToPlainStringResult, subtitle: tmp25Result, disableArrow: tmp9, guildId, icon: renderChannelIconResult });
});