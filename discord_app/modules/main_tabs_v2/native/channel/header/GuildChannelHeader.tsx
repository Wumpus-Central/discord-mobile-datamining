// === Module 14529: GuildChannelHeader ===

// Module 14529 (GuildChannelHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import useChannelName from "useChannelName" /* 5647 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import ChannelHeader from "ChannelHeader" /* 14520 */;
import openConjureAppChannelSheetDefault from "openConjureAppChannelSheet" /* 14531 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 14530 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7440 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(5591).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(5591);
  const items = [ChannelMemberStore, ChannelMemberCountStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of tmp) {
      let tmp3 = 0 !== item10021.count;
      if (tmp3) {
        tmp3 = item10021.id !== constants3.UNKNOWN;
      }
      if (tmp3) {
        flag = true;
        num = num + item10021.count;
        if (item10021.id === constants3.OFFLINE) {
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
    const tmpResult = tmp(11305);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(7090).ICON_SIZE[token]);
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
  const items = [guild(4842).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = _slicedToArray(guild(7563).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(4842).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 15, onDismiss: null, imgSource: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.YIVr4B);
    const intl2 = util.intl;
    const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants2.LINKED_LOBBIES) };
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
  let obj = guild(7563);
  const coachmark = guild(9933).useCoachmark(guild.iconRef, memo);
  return null;
}
const View = fn(17).View;
const THREAD_CHANNEL_TYPES = fn(4862).THREAD_CHANNEL_TYPES;
const Constants = fn(1072);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = fn(4855).ContentDismissActionType;
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
  let isConjureChannelCandidate;
  const ref = stateFromStores.useRef(null);
  const items = [ChannelStore];
  stateFromStores = channelId(guildId[17]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = stateFromStores;
  const obj2 = channelId(guildId[17]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = channelId(guildId[17]).useStateFromStores(items1, () => GatewayConnectionStore.isConnected());
  let parentChannelId = screenIndex(guildId[31])(channelId);
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
      const tmp2Result14 = tmp2(tmp3[18]);
    }
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp11 = type === constants.GUILD_APP && !showCreateThread;
  if (tmp11) {
    tmp11 = "channel-secondary-view-chat" !== screenIndex;
  }
  const tmp2Result = channelId(guildId[17]);
  let tmp12 = null;
  if (tmp11) {
    tmp12 = stateFromStores;
  }
  const appChannelApplication = channelId(guildId[32]).useAppChannelApplication(tmp12);
  const tmp2Result15 = channelId(guildId[32]);
  let type1;
  if (stateFromStores != null) {
    type1 = stateFromStores.type;
  }
  let tmp15 = null;
  if (type1 === constants.GUILD_APP) {
    tmp15 = null;
    if (!showCreateThread) {
      tmp15 = stateFromStores;
    }
  }
  isConjureChannelCandidate = channelId(guildId[33]).useIsConjureChannelCandidate(tmp15, "GuildChannelHeader");
  let renderAppSubTitleResult;
  if (tmp11) {
    renderAppSubTitleResult = tmp2(tmp3[18]).renderAppSubTitle(appChannelApplication, null != stateFromStores.application_id);
    const tmp2Result17 = tmp2(tmp3[18]);
  }
  closure_129_0 = guildId;
  const tmp18 = !pressable;
  const tmp19 = !isGuildMemberCountVisible;
  const tmp2Result16 = channelId(guildId[33]);
  const items4 = [GatewayConnectionStore];
  const tmp2Result18 = channelId(guildId[17]);
  const tmp21 = computeVisibleChannelName({ channel: stateFromStores, guildId, showCreateThread, isConnected: channelId(guildId[17]).useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) });
  const obj3 = { channel: stateFromStores, guildId, showCreateThread, isConnected: channelId(guildId[17]).useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) };
  const shouldNSFWGateGuildResult = channelId(guildId[20]).shouldNSFWGateGuild(guildId);
  let tmp23 = !shouldNSFWGateGuildResult;
  if (!shouldNSFWGateGuildResult) {
    let tmp24 = showCreateThread;
    if (!showCreateThread) {
      let isThreadResult;
      if (stateFromStores != null) {
        isThreadResult = stateFromStores.isThread();
      }
      tmp24 = isThreadResult;
    }
    tmp23 = tmp24;
  }
  const intl = tmp2(tmp3[21]).intl;
  const t = tmp2(tmp3[21]).t;
  const tmp2Result19 = channelId(guildId[20]);
  if (tmp23) {
    if (null != stateFromStores2) {
      let result = tmp2(tmp3[18]).renderParentChannelSubTitle(stateFromStores2);
      const tmp2Result20 = tmp2(tmp3[18]);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp23 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp21 });
  const items5 = [GuildMemberCountStore];
  let num = channelId(guildId[17]).useStateFromStores(items5, () => GuildMemberCountStore.getMemberCount(channelId));
  if (num == null) {
    num = 0;
  }
  const tmp2Result21 = channelId(guildId[17]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = channelId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp31 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp31 = shouldChannelShowLoadingIndicator;
  }
  const tmp2Result22 = channelId(guildId[23]);
  let tmp32 = null;
  if (!showCreateThread) {
    tmp32 = stateFromStores;
  }
  const tmp33 = channelId(guildId[24]).useIsPinotChannelLabelVisible(tmp32, "mobile_channel_header_label") && null == renderAppSubTitleResult && !tmp31;
  let tmp34 = !tmp19;
  if (isGuildMemberCountVisible) {
    tmp34 = !tmp33;
  }
  if (tmp34) {
    tmp34 = num < 500;
  }
  if (tmp34) {
    tmp34 = null != stateFromStores;
  }
  if (tmp34) {
    tmp34 = !stateFromStores.isThread();
  }
  if (tmp34) {
    const items6 = [, ];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = constants);
    tmp34 = !items6.includes(stateFromStores.type);
  }
  if (tmp34) {
    tmp34 = !showCreateThread;
  }
  if (tmp34) {
    tmp34 = null == renderAppSubTitleResult;
  }
  if (null != renderAppSubTitleResult) {
    const obj6 = { accessibleTitle: formatToPlainStringResult, subtitle: renderAppSubTitleResult, disableArrow: tmp18, guildId, icon: renderChannelIconResult };
    let tmp48 = null != renderAppSubTitleResult;
    const tmp2Result24 = tmp2(tmp3[18]);
    if (!tmp48) {
      tmp48 = tmp31;
    }
    if (!tmp48) {
      tmp48 = tmp34;
    }
    if (!tmp48) {
      tmp48 = null != result;
    }
    if (!tmp48) {
      tmp48 = tmp33;
    }
    const items7 = [channelId, screenIndex, isConjureChannelCandidate];
    const callback = obj.useCallback(() => {
      if (isConjureChannelCandidate) {
        openConjureAppChannelSheetDefault(channelId);
      } else {
        const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
      }
    }, items7);
    let tmp52 = null;
    if (null != stateFromStores3) {
      let linkedLobby;
      if (stateFromStores != null) {
        linkedLobby = stateFromStores.linkedLobby;
      }
      tmp52 = null;
      if (null != linkedLobby) {
        const obj7 = { ref, children: null };
        const obj8 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
        obj7.children = closure_19(ChannelLinkedLobbyCoachmark, obj8);
        tmp52 = closure_19(parentChannelId, obj7);
      }
    }
    const obj9 = { children: null };
    const items8 = [tmp52, tmp2(tmp3[18]).renderChannelTitle(tmp21, obj6)];
    obj9.children = items8;
    const tmp50Result = closure_21(closure_20, obj9);
    let pinotChannelLabelText = null;
    if (tmp33) {
      pinotChannelLabelText = tmp2(tmp3[24]).getPinotChannelLabelText();
      const tmp2Result25 = tmp2(tmp3[24]);
    }
    if (null == stateFromStores) {
      if (pressable) {
        let num3 = 24;
        if (tmp48) {
          num3 = 44;
        }
        const obj10 = { children: null };
        const tmp2Result26 = tmp2(tmp3[18]);
        obj10.children = tmp2Result26.renderTitleWrapper(tmp50Result, callback, undefined, num3);
        return closure_19(closure_20, obj10);
      } else {
        return tmp50Result;
      }
    } else {
      const obj11 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
      let items9 = [computeVisibleChannelName(obj11), pinotChannelLabelText, ];
      const intl2 = tmp2(tmp3[21]).intl;
      let join = intl2.string;
      const t2 = tmp2(tmp3[21]).t;
      items9[2] = join(isConjureChannelCandidate ? t2.OBr7Cw : t2.x87QCk);
      items9 = items9.filter((item) => null != item);
      join = items9.join;
      const joined = join(", ");
    }
    const renderChannelTitleResult = tmp2(tmp3[18]).renderChannelTitle(tmp21, obj6);
  } else if (tmp31) {
    let tmp35Result = closure_19(tmp2(tmp3[23]).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp37 = tmp34;
    if (tmp34) {
      const obj12 = { channel: stateFromStores, withSeparator: null != result };
      tmp37 = closure_19(GuildChannelMemberCount, obj12);
    }
    const items10 = [tmp37, null != stateFromStores2 && result, , ];
    let tmp40 = null;
    if (tmp33) {
      tmp40 = null;
      if (null != result) {
        tmp40 = closure_19(tmp2(tmp3[25]).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
      }
    }
    items10[2] = tmp40;
    let tmp42 = null;
    if (tmp33) {
      tmp42 = null;
      if (null != stateFromStores) {
        const obj13 = { channelId: stateFromStores.id };
        tmp42 = closure_19(tmp2(tmp3[24]).PinotChannelLabel, obj13);
      }
    }
    const obj14 = { children: null };
    items10[3] = tmp42;
    obj14.children = items10;
    tmp35Result = closure_21(closure_20, obj14);
  }
  const tmp2Result23 = channelId(guildId[24]);
});