// discord_app/modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../channel/ChannelMemberCountStore.tsx";
import closure_7 from "../../../../gateway/GatewayConnectionStore.tsx";
import { THREAD_CHANNEL_TYPES } from "../../../../../records/ChannelRecord.tsx";
import closure_9 from "../../../../../stores/ChannelMemberStore.tsx";
import closure_10 from "../../../../../stores/ChannelStore.tsx";
import closure_11 from "../../../../../stores/GuildMemberCountStore.tsx";
import closure_12 from "../../../../../stores/GuildStore.tsx";
import closure_13 from "../../../../../stores/RelationshipStore.tsx";
import closure_14 from "../../../../../stores/UserStore.tsx";
import ME from "../../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(4262).useToken(ThemesDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(4262);
  const items = [closure_9, closure_6];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of tmp) {
      let tmp2 = item10021;
      let tmp3 = 0 !== item10021.count;
      if (tmp3) {
        let tmp4 = item10021;
        let tmp5 = closure_1_17;
        tmp3 = tmp2.id !== closure_1_17.UNKNOWN;
      }
      if (tmp3) {
        flag = true;
        let tmp6 = num;
        let tmp7 = item10021;
        num = num + tmp2.count;
        let tmp8 = closure_1_17;
        if (tmp2.id === closure_1_17.OFFLINE) {
          flag2 = true;
        } else {
          let tmp9 = num2;
          let tmp10 = item10021;
          num2 = num2 + tmp2.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp15 = null;
      if (flag2) {
        tmp15 = num;
      }
      const obj = { total: null, online: null };
      obj[0] = tmp15;
      obj[1] = num2;
      let memberCount = obj;
    } else {
      memberCount = closure_1_6.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [,];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    const count = closure_1_6.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    const tmpResult = tmp(13269);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(6620).ICON_SIZE[token]);
  }
}
function computeVisibleChannelName(channel) {
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = tmp(1114).intl;
    let stringResult = intl3.string(tmp(1114).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(tmp(1114).t["4WNcpu"]);
  } else if (null == channel) {
    const intl = tmp(1114).intl;
    const string = intl.string;
    let ai6Lbr = tmp(1114).t;
    if (isConnected) {
      ai6Lbr = ai6Lbr.ai6Lbr;
      let stringResult1 = string(ai6Lbr);
    } else {
      stringResult1 = string(ai6Lbr.ZTNur7);
    }
  } else {
    stringResult = tmp(4713).computeChannelName(channel, closure_14, closure_13);
    const tmpResult = tmp(4713);
  }
  return stringResult;
}
function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  dependencyMap = undefined;
  let callback;
  const items = [guild(1943).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = callback(guild(7388).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(1943).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  callback = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = importAllResult.useMemo(() => {
    let obj = {
      title: null,
      description: null,
      visible: null,
      position: "bottom",
      offsetY: 15,
      onDismiss: null,
      imgSource: null,
    };
    const intl = guild(1114).intl;
    obj[0] = intl.string(guild(1114).t.YIVr4B);
    const intl2 = guild(1114).intl;
    obj = { helpdeskArticle: channel(2024).getArticleURL(closure_1_16.LINKED_LOBBIES) };
    obj[1] = intl2.format(guild(1114).t.w8VWRT, obj);
    let linkedLobby;
    if (channel != null) {
      linkedLobby = tmp3.linkedLobby;
    }
    obj[2] = null != linkedLobby && closure_3;
    obj[5] = function onDismiss() {
      return callback(closure_1_18.USER_DISMISS);
    };
    let channelIconWithGuild;
    if (null != channel) {
      channelIconWithGuild = guild(5028).getChannelIconWithGuild(tmp3, guild);
      const tmpResult = guild(5028);
    }
    obj[6] = channelIconWithGuild;
    return obj;
  }, items1);
  let obj = guild(7388);
  const coachmark = guild(11127).useCoachmark(guild.iconRef, memo);
  return null;
}
let c4 = importAllResult;
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const memoResult = importAllResult.memo(function GuildChannelHeader(channelId) {
  channelId = channelId.channelId;
  let guildId = channelId;
  const screenIndex = channelId.screenIndex;
  guildId = channelId.guildId;
  ({ pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  let stateFromStores;
  closure_5 = undefined;
  let obj = stateFromStores;
  const ref = stateFromStores.useRef(null);
  obj1 = guildId(guildId[17]);
  const items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getChannel(guildId));
  let obj3 = guildId(guildId[17]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => closure_7.isConnected());
  closure_5 = screenIndex(guildId[29])(channelId);
  let obj4 = guildId(guildId[17]);
  const items2 = [closure_10];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      if (!showCreateThread) {
        if (null != tmp) {
          if (null != tmp.parent_id) {
            if (closure_1_8.has(tmp.type)) {
              let channel = closure_1_10.getChannel(tmp.parent_id);
            }
          }
        }
      }
      return channel;
    }
    let parentChannelId;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = closure_1_10.getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  let tmp2Result = tmp2(tmp3[17]);
  const items3 = [closure_12];
  const stateFromStores3 = tmp2Result.useStateFromStores(items3, () => closure_1_12.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      tmp2Result = tmp2(tmp3[18]);
      renderChannelIconResult = tmp2Result.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  const items4 = [closure_7];
  obj = {
    channel: stateFromStores,
    guildId,
    showCreateThread,
    isConnected: guildId(guildId[17]).useStateFromStores(items4, () => closure_7.isConnected()),
  };
  const tmp12 = computeVisibleChannelName(obj);
  const tmp10 = !isGuildMemberCountVisible;
  const tmp11 = computeVisibleChannelName;
  const tmp2Result1 = guildId(guildId[17]);
  const tmp4 = closure_7;
  const tmp9 = !pressable;
  const shouldNSFWGateGuildResult = guildId(guildId[20]).shouldNSFWGateGuild(guildId);
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
  const tmp2Result2 = guildId(guildId[20]);
  if (tmp14) {
    if (null != stateFromStores2) {
      let result = tmp2(tmp3[18]).renderParentChannelSubTitle(stateFromStores2);
      const tmp2Result3 = tmp2(tmp3[18]);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp14 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp12 });
  const items5 = [closure_11];
  let num = guildId(guildId[17]).useStateFromStores(items5, () => closure_1_11.getMemberCount(guildId));
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
    const items6 = [,];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = closure_15);
    tmp19 = !items6.includes(stateFromStores.type);
  }
  if (tmp19) {
    tmp19 = !showCreateThread;
  }
  const tmp2Result4 = guildId(guildId[17]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = guildId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp24 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp24 = shouldChannelShowLoadingIndicator;
  }
  if (tmp24) {
    let tmp25Result = callback2(tmp2(tmp3[23]).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp27 = tmp19;
    if (tmp19) {
      obj = { channel: null, withSeparator: null };
      obj[0] = stateFromStores;
      obj[1] = null != result;
      tmp27 = callback2(GuildChannelMemberCount, obj);
    }
    const items7 = [tmp27];
    obj1 = { children: null };
    items7[1] = null != stateFromStores2 && result;
    obj1[0] = items7;
    tmp25Result = closure_21(closure_20, obj1);
    const tmp25 = closure_21;
    const tmp26 = closure_20;
    const tmp30 = null != stateFromStores2 && result;
  }
  const tmp2Result5 = guildId(guildId[23]);
  const tmp2Result6 = guildId(guildId[18]);
  if (!tmp24) {
    tmp24 = tmp19;
  }
  if (!tmp24) {
    tmp24 = null != result;
  }
  const items8 = [channelId, screenIndex];
  const callback = obj.useCallback(() => {
    const result = guildId(guildId[30]).navigateToChannelDetails(guildId, screenIndex, "guild-channel-header-title");
  }, items8);
  let tmp37 = null;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp37 = null;
    if (null != linkedLobby) {
      const obj2 = { ref: null, children: null };
      obj2[0] = ref;
      obj3 = { iconRef: null, guild: null, channel: null };
      obj3[0] = ref;
      obj3[1] = stateFromStores3;
      obj3[2] = stateFromStores;
      obj2[1] = callback2(ChannelLinkedLobbyCoachmark, obj3);
      tmp37 = callback2(closure_5, obj2);
    }
  }
  const items9 = [
    tmp37,
    guildId(guildId[18]).renderChannelTitle(tmp12, {
      accessibleTitle: formatToPlainStringResult,
      subtitle: tmp25Result,
      disableArrow: tmp9,
      guildId,
      icon: renderChannelIconResult,
    }),
  ];
  const tmp35Result = closure_21(closure_20, { children: items9 });
  if (null != stateFromStores) {
    obj4 = { channel: null, guildId: null, showCreateThread: null, isConnected: null };
    obj4[0] = stateFromStores;
    obj4[1] = guildId;
    obj4[2] = showCreateThread;
    obj4[3] = stateFromStores1;
    const intl2 = tmp2(tmp3[21]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp11(obj4) + ", " + intl2.string(tmp2(tmp3[21]).t.x87QCk);
    const tmp11Result = tmp11(obj4);
  }
  if (pressable) {
    let num3 = 24;
    if (tmp24) {
      num3 = 44;
    }
    const obj5 = { children: null };
    const tmp2Result7 = tmp2(tmp3[18]);
    obj5[0] = tmp2Result7.renderTitleWrapper(tmp35Result, callback, combined, num3);
    return callback2(tmp36, obj5);
  } else {
    return tmp35Result;
  }
  const renderChannelTitleResult = guildId(guildId[18]).renderChannelTitle(tmp12, {
    accessibleTitle: formatToPlainStringResult,
    subtitle: tmp25Result,
    disableArrow: tmp9,
    guildId,
    icon: renderChannelIconResult,
  });
  const tmp35 = closure_21;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
