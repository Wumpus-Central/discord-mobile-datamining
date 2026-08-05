// discord_app/modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
import set from "set";
import importAllResult from "ICON_SIZE";
import { View } from "initialize";
import initialize from "initialize";
import _handleConnectionOpen from "_handleConnectionOpen";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import getMemberListId from "getMemberListId";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "getSystemLocale";

let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function GuildChannelMemberCount(channel) {
  let online;
  let total;
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(3989).useToken(require("../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(3989);
  const items = [getMemberListId, initialize];
  const stateFromStoresObject = channel(589).useStateFromStoresObject(items, () => {
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of tmp) {
      let tmp2 = item10021;
      let tmp3 = 0 !== item10021.count;
      if (tmp3) {
        let tmp4 = item10021;
        let tmp5 = outer1_17;
        tmp3 = tmp2.id !== outer1_17.UNKNOWN;
      }
      if (tmp3) {
        flag = true;
        let tmp6 = num;
        let tmp7 = item10021;
        num = num + tmp2.count;
        let tmp8 = outer1_17;
        if (tmp2.id === outer1_17.OFFLINE) {
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
      memberCount = outer1_6.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    const count = outer1_6.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    const tmpResult = tmp(12455);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(5659).ICON_SIZE[token]);
  }
}
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = tmp(1236).intl;
    let stringResult = intl3.string(tmp(1236).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = tmp(1236).intl;
    stringResult = intl2.string(tmp(1236).t["4WNcpu"]);
  } else if (null == channel) {
    const intl = tmp(1236).intl;
    const string = intl.string;
    let ai6Lbr = tmp(1236).t;
    if (isConnected) {
      ai6Lbr = ai6Lbr.ai6Lbr;
      let stringResult1 = string(ai6Lbr);
    } else {
      stringResult1 = string(ai6Lbr.ZTNur7);
    }
  } else {
    stringResult = tmp(4475).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    const tmpResult = tmp(4475);
  }
  return stringResult;
}
function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let dependencyMap;
  let callback;
  const items = [guild(1358).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = callback(guild(5931).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(1358).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  callback = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = importAllResult.useMemo(() => {
    let obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 15, onDismiss: null, imgSource: null };
    const intl = guild(_undefined[21]).intl;
    obj[0] = intl.string(guild(_undefined[21]).t.YIVr4B);
    const intl2 = guild(_undefined[21]).intl;
    obj = { helpdeskArticle: null };
    obj[0] = channel(_undefined[26]).getArticleURL(outer1_16.LINKED_LOBBIES);
    obj[1] = intl2.format(guild(_undefined[21]).t.w8VWRT, obj);
    let linkedLobby;
    if (channel != null) {
      linkedLobby = tmp3.linkedLobby;
    }
    obj[2] = null != linkedLobby && c3;
    obj[5] = function onDismiss() {
      return callback(outer1_18.USER_DISMISS);
    };
    let channelIconWithGuild;
    if (null != channel) {
      channelIconWithGuild = guild(_undefined[27]).getChannelIconWithGuild(tmp3, guild);
      const tmpResult = guild(_undefined[27]);
    }
    obj[6] = channelIconWithGuild;
    return obj;
  }, items1);
  let obj = guild(5931);
  const coachmark = guild(8575).useCoachmark(guild.iconRef, memo);
  return null;
}
let c4 = importAllResult;
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const memoResult = importAllResult.memo(function GuildChannelHeader(channelId) {
  let isGuildMemberCountVisible;
  let pressable;
  let showCreateThread;
  channelId = channelId.channelId;
  let guildId = channelId;
  const screenIndex = channelId.screenIndex;
  guildId = channelId.guildId;
  ({ pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  let stateFromStores;
  let closure_5;
  const tmp2 = screenIndex(guildId[29])("GuildChannelHeader");
  let obj = stateFromStores;
  const ref = stateFromStores.useRef(null);
  let obj1 = guildId(guildId[17]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getChannel(guildId));
  let obj3 = guildId(guildId[17]);
  const items1 = [_handleConnectionOpen];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => _handleConnectionOpen.isConnected());
  closure_5 = screenIndex(guildId[30])(channelId);
  let obj4 = guildId(guildId[17]);
  const items2 = [ensureGuildLoaded];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      if (!showCreateThread) {
        if (null != tmp) {
          if (null != tmp.parent_id) {
            if (outer1_8.has(tmp.type)) {
              let channel = outer1_10.getChannel(tmp.parent_id);
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
    channel = outer1_10.getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  let tmp4Result = tmp4(tmp[17]);
  const items3 = [createGuildRecordFromRust];
  const stateFromStores3 = tmp4Result.useStateFromStores(items3, () => outer1_12.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      tmp4Result = tmp4(tmp[18]);
      renderChannelIconResult = tmp4Result.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  let tmp12 = null;
  if (tmp2) {
    tmp12 = renderChannelIconResult;
  }
  const items4 = [_handleConnectionOpen];
  obj = { channel: stateFromStores, guildId, showCreateThread, isConnected: guildId(guildId[17]).useStateFromStores(items4, () => _handleConnectionOpen.isConnected()) };
  const tmp14 = computeVisibleChannelName(obj);
  const tmp10 = !pressable;
  const tmp11 = !isGuildMemberCountVisible;
  const tmp13 = computeVisibleChannelName;
  const tmp4Result1 = guildId(guildId[17]);
  const tmp5 = _handleConnectionOpen;
  const shouldNSFWGateGuildResult = guildId(guildId[20]).shouldNSFWGateGuild(guildId);
  let tmp16 = !shouldNSFWGateGuildResult;
  if (!shouldNSFWGateGuildResult) {
    let tmp17 = showCreateThread;
    if (!showCreateThread) {
      let isThreadResult;
      if (stateFromStores != null) {
        isThreadResult = stateFromStores.isThread();
      }
      tmp17 = isThreadResult;
    }
    tmp16 = tmp17;
  }
  const intl = tmp4(tmp[21]).intl;
  const t = tmp4(tmp[21]).t;
  const tmp4Result2 = guildId(guildId[20]);
  if (tmp16) {
    if (null != stateFromStores2) {
      let result = tmp4(tmp[18]).renderParentChannelSubTitle(stateFromStores2);
      const tmp4Result3 = tmp4(tmp[18]);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp16 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp14 });
  const items5 = [handleInviteData];
  let num = guildId(guildId[17]).useStateFromStores(items5, () => outer1_11.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let tmp21 = !tmp11;
  if (isGuildMemberCountVisible) {
    tmp21 = num < 500;
  }
  if (tmp21) {
    tmp21 = null != stateFromStores;
  }
  if (tmp21) {
    tmp21 = !stateFromStores.isThread();
  }
  if (tmp21) {
    const items6 = [, ];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = closure_15);
    tmp21 = !items6.includes(stateFromStores.type);
  }
  if (tmp21) {
    tmp21 = !showCreateThread;
  }
  const tmp4Result4 = guildId(guildId[17]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = guildId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp26 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp26 = shouldChannelShowLoadingIndicator;
  }
  if (tmp26) {
    let tmp27Result = callback2(tmp4(tmp[23]).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp29 = tmp21;
    if (tmp21) {
      obj = { channel: null, withSeparator: null };
      obj[0] = stateFromStores;
      obj[1] = null != result;
      tmp29 = callback2(GuildChannelMemberCount, obj);
    }
    const items7 = [tmp29, ];
    obj1 = { children: null };
    items7[1] = null != stateFromStores2 && result;
    obj1[0] = items7;
    tmp27Result = closure_21(closure_20, obj1);
    const tmp27 = closure_21;
    const tmp28 = closure_20;
    const tmp32 = null != stateFromStores2 && result;
  }
  const tmp4Result5 = guildId(guildId[23]);
  const tmp4Result6 = guildId(guildId[18]);
  if (!tmp26) {
    tmp26 = tmp21;
  }
  if (!tmp26) {
    tmp26 = null != result;
  }
  const items8 = [channelId, screenIndex];
  const callback = obj.useCallback(() => {
    const result = guildId(guildId[31]).navigateToChannelDetails(guildId, screenIndex, "guild-channel-header-title");
  }, items8);
  if (tmp2) {
    let tmp45 = null;
    if (null != stateFromStores3) {
      let linkedLobby;
      if (stateFromStores != null) {
        linkedLobby = stateFromStores.linkedLobby;
      }
      tmp45 = null;
      if (null != linkedLobby) {
        const obj2 = { ref: null, children: null };
        obj2[0] = ref;
        obj3 = { iconRef: null, guild: null, channel: null };
        obj3[0] = ref;
        obj3[1] = stateFromStores3;
        obj3[2] = stateFromStores;
        obj2[1] = callback2(ChannelLinkedLobbyCoachmark, obj3);
        tmp45 = callback2(closure_5, obj2);
      }
    }
    let tmp37Result = tmp45;
  } else {
    obj4 = { ref: null, style: null, children: null };
    obj4[0] = ref;
    obj4[1] = { marginRight: 8 };
    const items9 = [renderChannelIconResult, ];
    let tmp40 = null;
    if (null != stateFromStores3) {
      let linkedLobby1;
      if (stateFromStores != null) {
        linkedLobby1 = stateFromStores.linkedLobby;
      }
      tmp40 = null;
      if (null != linkedLobby1) {
        const obj5 = { iconRef: null, guild: null, channel: null };
        obj5[0] = ref;
        obj5[1] = stateFromStores3;
        obj5[2] = stateFromStores;
        tmp40 = callback2(ChannelLinkedLobbyCoachmark, obj5);
      }
    }
    items9[1] = tmp40;
    obj4[2] = items9;
    tmp37Result = tmp37(closure_5, obj4);
    const tmp39 = closure_5;
  }
  const items10 = [tmp37Result, guildId(guildId[18]).renderChannelTitle(tmp14, { accessibleTitle: formatToPlainStringResult, subtitle: tmp27Result, disableArrow: tmp10, guildId, icon: tmp12 })];
  tmp37Result = tmp37(tmp38, { children: items10 });
  if (null != stateFromStores) {
    const obj6 = { channel: null, guildId: null, showCreateThread: null, isConnected: null };
    obj6[0] = stateFromStores;
    obj6[1] = guildId;
    obj6[2] = showCreateThread;
    obj6[3] = stateFromStores1;
    const intl2 = tmp4(tmp[21]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp13(obj6) + ", " + intl2.string(tmp4(tmp[21]).t.x87QCk);
    const tmp13Result = tmp13(obj6);
  }
  if (pressable) {
    let num3 = 24;
    if (tmp26) {
      num3 = 44;
    }
    const obj7 = { children: null };
    const tmp4Result7 = tmp4(tmp[18]);
    obj7[0] = tmp4Result7.renderTitleWrapper(tmp37Result, callback, combined, num3);
    return callback2(tmp38, obj7);
  } else {
    return tmp37Result;
  }
  const renderChannelTitleResult = guildId(guildId[18]).renderChannelTitle(tmp14, { accessibleTitle: formatToPlainStringResult, subtitle: tmp27Result, disableArrow: tmp10, guildId, icon: tmp12 });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;