// === Module 13683: GuildChannelHeader ===

// Module 13683 (GuildChannelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import useChannelName from "useChannelName" /* 4982 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5327 */;
import ChannelHeader from "ChannelHeader" /* 13670 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 13684 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5582 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7609 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(4526).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(4526);
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
    const tmpResult = tmp(13677);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(6950).ICON_SIZE[token]);
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
  const items = [guild(2028).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = _slicedToArray(guild(7718).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(2028).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
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
  let obj = guild(7718);
  const coachmark = guild(11480).useCoachmark(guild.iconRef, memo);
  return null;
}
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(2048).THREAD_CHANNEL_TYPES;
const Constants = fn(1074);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
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
  const ref = stateFromStores.useRef(null);
  const items = [ChannelStore];
  stateFromStores = channelId(guildId[17]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = stateFromStores;
  const obj2 = channelId(guildId[17]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = channelId(guildId[17]).useStateFromStores(items1, () => GatewayConnectionStore.isConnected());
  let parentChannelId = screenIndex(guildId[29])(channelId);
  const obj4 = channelId(guildId[17]);
  const items2 = [ChannelStore];
  const stateFromStores2 = channelId(guildId[17]).useStateFromStores(items2, () => {
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
  const obj5 = channelId(guildId[17]);
  const items3 = [GuildStore];
  const stateFromStores3 = channelId(guildId[17]).useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      renderChannelIconResult = tmp2(tmp3[18]).renderChannelIcon(stateFromStores, stateFromStores3);
      const tmp2Result9 = tmp2(tmp3[18]);
    }
  }
  closure_129_0 = guildId;
  const tmp10 = !isGuildMemberCountVisible;
  const tmp2Result = channelId(guildId[17]);
  const tmp9 = !pressable;
  const items4 = [GatewayConnectionStore];
  const tmp2Result10 = channelId(guildId[17]);
  const tmp12 = computeVisibleChannelName({ channel: stateFromStores, guildId, showCreateThread, isConnected: channelId(guildId[17]).useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) });
  const obj3 = { channel: stateFromStores, guildId, showCreateThread, isConnected: channelId(guildId[17]).useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) };
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
  const tmp2Result11 = channelId(guildId[20]);
  if (tmp14) {
    if (null != stateFromStores2) {
      let result = tmp2(tmp3[18]).renderParentChannelSubTitle(stateFromStores2);
      const tmp2Result12 = tmp2(tmp3[18]);
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
  const tmp2Result13 = channelId(guildId[17]);
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
      const obj6 = { channel: stateFromStores, withSeparator: null != result };
      tmp27 = closure_19(GuildChannelMemberCount, obj6);
    }
    const items7 = [tmp27, ];
    const obj7 = { children: null };
    items7[1] = null != stateFromStores2 && result;
    obj7.children = items7;
    tmp25Result = closure_21(closure_20, obj7);
    const tmp30 = null != stateFromStores2 && result;
  }
  const tmp2Result14 = channelId(guildId[23]);
  const tmp2Result15 = channelId(guildId[18]);
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
      const obj8 = { ref, children: null };
      const obj9 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      obj8.children = closure_19(ChannelLinkedLobbyCoachmark, obj9);
      tmp37 = closure_19(parentChannelId, obj8);
    }
  }
  const obj10 = { children: null };
  const items9 = [tmp37, channelId(guildId[18]).renderChannelTitle(tmp12, { accessibleTitle: formatToPlainStringResult, subtitle: tmp25Result, disableArrow: tmp9, guildId, icon: renderChannelIconResult })];
  obj10.children = items9;
  const tmp35Result = closure_21(closure_20, obj10);
  if (null != stateFromStores) {
    const obj11 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const intl2 = tmp2(tmp3[21]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + computeVisibleChannelName(obj11) + ", " + intl2.string(tmp2(tmp3[21]).t.x87QCk);
    const tmp11Result = computeVisibleChannelName(obj11);
  }
  if (pressable) {
    let num3 = 24;
    if (tmp24) {
      num3 = 44;
    }
    const obj12 = { children: null };
    const tmp2Result16 = tmp2(tmp3[18]);
    obj12.children = tmp2Result16.renderTitleWrapper(tmp35Result, callback, combined, num3);
    return closure_19(closure_20, obj12);
  } else {
    return tmp35Result;
  }
  const renderChannelTitleResult = channelId(guildId[18]).renderChannelTitle(tmp12, { accessibleTitle: formatToPlainStringResult, subtitle: tmp25Result, disableArrow: tmp9, guildId, icon: renderChannelIconResult });
});