// discord_app/modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import ChannelHeader from "ChannelHeader.tsx";
import openConjureAppChannelSheetDefault from "../../../../conjure/app_channel/native/openConjureAppChannelSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelMemberCountStore from "../../../../channel/ChannelMemberCountStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import ChannelMemberStore from "../../../../../stores/ChannelMemberStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

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
const THREAD_CHANNEL_TYPES = fn(4861).THREAD_CHANNEL_TYPES;
const Constants = fn(1084);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = fn(4854).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
let c22 = 500;
const mobile_channel_header_label = "mobile_channel_header_label";
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelMemberCount(channel) {
  const cResult = channel(576).c(13);
  channel = channel.channel;
  const withSeparator = channel.withSeparator;
  let obj = channel(576);
  const token = channel(5289).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
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
        const tmp18 = tmp(7082).ICON_SIZE[token];
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
        const tmpResult4 = tmp(11079);
        class S {
          constructor() {
            count = closure_6.requestCount(channel.guild_id, channel.id);
            return;
          }
        }
        const result = tmpResult4.renderMemberCountText(online, total, tmp4, tmp18);
        cResult[8] = online;
        cResult[9] = tmp18;
        cResult[10] = total;
        cResult[11] = tmp4;
        cResult[12] = result;
        tmp19 = result;
      }
    }
    class S {
      constructor() {
        count = closure_6.requestCount(channel.guild_id, channel.id);
        return;
      }
    }
    const items1 = [, ];
    ({ guild_id: arr2[0], id: arr2[1] } = channel);
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = S;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = S;
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
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp9 = fn;
  const tmpResult = channel(5289);
}) : (function GuildChannelMemberCount(channel) {
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(5289).useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(5289);
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
    const tmpResult = tmp(11079);
    return tmpResult.renderMemberCountText(online, total, flag, tmp(7082).ICON_SIZE[token]);
  }
  const obj2 = channel(504);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelName(arg0) {
  const cResult = guildId(576).c(39);
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread, appSubTitle } = arg0);
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
      const formatToPlainString = guildId(1125).intl.formatToPlainString;
      const t = guildId(1125).t;
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
        const tmpResult7 = guildId(504);
        let id;
        if (channel != null) {
          id = channel.id;
        }
        const shouldChannelShowLoadingIndicator = guildId(14492).useShouldChannelShowLoadingIndicator(id);
        if (cResult[9] === channel) {
          if (cResult[10] === shouldChannelShowLoadingIndicator) {
            let tmp22 = cResult[11];
          }
          let tmp25 = null;
          if (!showCreateThread) {
            tmp25 = channel;
          }
          const tmp27 = guildId(11067).useIsPinotChannelLabelVisible(tmp25, mobile_channel_header_label) && null == appSubTitle && !tmp22;
          if (cResult[12] === appSubTitle) {
            if (cResult[13] === channel) {
              if (cResult[14] === disableGuildMemberCount) {
                if (cResult[15] === num6) {
                  if (cResult[16] === tmp27) {
                    if (cResult[17] === showCreateThread) {
                      let tmp28 = cResult[18];
                    }
                    let tmp32 = appSubTitle;
                    if (null == appSubTitle) {
                      if (tmp22) {
                        const _Symbol = Symbol;
                        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp50 = closure_19(guildId(14492).ChannelHeaderLoadingIndicator, {});
                          cResult[19] = tmp50;
                        }
                      } else {
                        if (cResult[20] === channel) {
                          if (cResult[21] === tmp15) {
                            if (cResult[22] === tmp28) {
                              let tmp33 = cResult[23];
                            }
                            if (cResult[24] === tmp15) {
                              if (cResult[25] === tmp27) {
                                let tmp38 = cResult[26];
                              }
                              if (cResult[27] === channel) {
                                if (cResult[28] === tmp27) {
                                  let tmp41 = cResult[29];
                                }
                                if (cResult[30] === tmp41) {
                                  if (cResult[31] === tmp33) {
                                    if (cResult[32] === tmp37) {
                                      if (cResult[33] === tmp38) {
                                        let tmp44 = cResult[34];
                                      }
                                      tmp32 = tmp44;
                                    }
                                  }
                                }
                                const obj4 = { children: null };
                                const items2 = [tmp33, tmp37, tmp38, tmp41];
                                obj4.children = items2;
                                const tmp47 = closure_21(closure_20, obj4);
                                cResult[30] = tmp41;
                                cResult[31] = tmp33;
                                cResult[32] = tmp37;
                                cResult[33] = tmp38;
                                cResult[34] = tmp47;
                                tmp44 = tmp47;
                              }
                              let tmp42 = null;
                              if (tmp27) {
                                tmp42 = null;
                                if (null != channel) {
                                  const obj5 = { channelId: channel.id };
                                  tmp42 = closure_19(guildId(11067).PinotChannelLabel, obj5);
                                }
                              }
                              cResult[27] = channel;
                              cResult[28] = tmp27;
                              cResult[29] = tmp42;
                              tmp41 = tmp42;
                            }
                            let tmp39 = null;
                            if (tmp27) {
                              tmp39 = null;
                              if (null != tmp15) {
                                tmp39 = closure_19(guildId(5271).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
                              }
                            }
                            cResult[24] = tmp15;
                            cResult[25] = tmp27;
                            cResult[26] = tmp39;
                            tmp38 = tmp39;
                          }
                        }
                        let tmp34 = tmp28;
                        if (tmp28) {
                          const obj6 = { channel, withSeparator: null != tmp15 };
                          tmp34 = closure_19(closure_24, obj6);
                        }
                        cResult[20] = channel;
                        cResult[21] = tmp15;
                        cResult[22] = tmp28;
                        cResult[23] = tmp34;
                        tmp33 = tmp34;
                      }
                    }
                    const tmp52 = null != appSubTitle || tmp22 || tmp28 || null != tmp15 || tmp27;
                    const obj7 = { accessibleTitle: tmp14, subtitle: tmp32, disableArrow, guildId, icon };
                    const renderChannelTitleResult = guildId(11079).renderChannelTitle(tmp7, obj7);
                    if (cResult[35] === tmp52) {
                      if (cResult[36] === tmp27) {
                        if (cResult[37] === renderChannelTitleResult) {
                          let tmp54 = cResult[38];
                        }
                        return tmp54;
                      }
                    }
                    const obj8 = { node: renderChannelTitleResult, hasSubtitle: tmp52, showsPinotLabel: tmp27 };
                    cResult[35] = tmp52;
                    cResult[36] = tmp27;
                    cResult[37] = renderChannelTitleResult;
                    cResult[38] = obj8;
                    tmp54 = obj8;
                    const tmpResult10 = guildId(11079);
                  }
                }
              }
            }
          }
          let tmp29 = !disableGuildMemberCount;
          if (!disableGuildMemberCount) {
            tmp29 = !tmp27;
          }
          if (tmp29) {
            tmp29 = num6 < c22;
          }
          if (tmp29) {
            tmp29 = null != channel;
          }
          if (tmp29) {
            tmp29 = !channel.isThread();
          }
          if (tmp29) {
            const items3 = [, ];
            ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
            tmp29 = !items3.includes(channel.type);
          }
          if (tmp29) {
            tmp29 = !showCreateThread;
          }
          if (tmp29) {
            tmp29 = null == appSubTitle;
          }
          cResult[12] = appSubTitle;
          cResult[13] = channel;
          cResult[14] = disableGuildMemberCount;
          cResult[15] = num6;
          cResult[16] = tmp27;
          cResult[17] = showCreateThread;
          cResult[18] = tmp29;
          tmp28 = tmp29;
          const tmpResult9 = guildId(11067);
        }
        let isForumLikeChannelResult;
        if (channel != null) {
          isForumLikeChannelResult = channel.isForumLikeChannel();
        }
        let tmp24 = !isForumLikeChannelResult;
        if (!isForumLikeChannelResult) {
          tmp24 = shouldChannelShowLoadingIndicator;
        }
        cResult[9] = channel;
        cResult[10] = shouldChannelShowLoadingIndicator;
        cResult[11] = tmp24;
        tmp22 = tmp24;
        const tmpResult8 = guildId(14492);
      }
      let result;
      if (tmp8) {
        if (null != parentChannel) {
          result = guildId(11079).renderParentChannelSubTitle(parentChannel);
          const tmpResult11 = guildId(11079);
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
  const shouldNSFWGateGuildResult = guildId(9924).shouldNSFWGateGuild(guildId);
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
  const tmpResult12 = guildId(9924);
}) : (function useChannelName(arg0) {
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread, appSubTitle } = arg0);
  ({ disableArrow, icon } = arg0);
  const items = [GatewayConnectionStore];
  const obj = guildId(504);
  const tmp3 = computeVisibleChannelName({ channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(items, () => connected.isConnected()) });
  const obj2 = { channel, guildId, showCreateThread, isConnected: guildId(504).useStateFromStores(items, () => connected.isConnected()) };
  const shouldNSFWGateGuildResult = guildId(9924).shouldNSFWGateGuild(guildId);
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
  const intl = guildId(1125).intl;
  const t = guildId(1125).t;
  const obj3 = guildId(9924);
  if (tmp5) {
    if (null != parentChannel) {
      const result = guildId(11079).renderParentChannelSubTitle(parentChannel);
      const tmpResult = guildId(11079);
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(tmp5 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp3 });
  const items1 = [GuildMemberCountStore];
  let num = guildId(504).useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  const tmpResult5 = guildId(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = guildId(14492).useShouldChannelShowLoadingIndicator(id);
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  let tmp15 = !isForumLikeChannelResult;
  if (!isForumLikeChannelResult) {
    tmp15 = shouldChannelShowLoadingIndicator;
  }
  const tmpResult6 = guildId(14492);
  let tmp16 = null;
  if (!showCreateThread) {
    tmp16 = channel;
  }
  const tmp17 = guildId(11067).useIsPinotChannelLabelVisible(tmp16, mobile_channel_header_label) && null == appSubTitle && !tmp15;
  let tmp18 = !disableGuildMemberCount;
  if (!disableGuildMemberCount) {
    tmp18 = !tmp17;
  }
  if (tmp18) {
    tmp18 = num < c22;
  }
  if (tmp18) {
    tmp18 = null != channel;
  }
  if (tmp18) {
    tmp18 = !channel.isThread();
  }
  if (tmp18) {
    const items2 = [, ];
    ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
    tmp18 = !items2.includes(channel.type);
  }
  if (tmp18) {
    tmp18 = !showCreateThread;
  }
  if (tmp18) {
    tmp18 = null == appSubTitle;
  }
  if (null != appSubTitle) {
    const obj4 = { node: null, hasSubtitle: null, showsPinotLabel: null };
    const obj5 = { accessibleTitle: formatToPlainStringResult, subtitle: appSubTitle, disableArrow, guildId, icon };
    obj4.node = guildId(11079).renderChannelTitle(tmp3, obj5);
    obj4.hasSubtitle = null != appSubTitle || tmp15 || tmp18 || null != result || tmp17;
    obj4.showsPinotLabel = tmp17;
    return obj4;
  } else if (tmp15) {
    let tmp21Result = closure_19(guildId(14492).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp23 = tmp18;
    if (tmp18) {
      const obj6 = { channel, withSeparator: null != result };
      tmp23 = closure_19(closure_24, obj6);
    }
    const items3 = [tmp23, null != parentChannel && result, , ];
    let tmp26 = null;
    if (tmp17) {
      tmp26 = null;
      if (null != result) {
        tmp26 = closure_19(guildId(5271).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
      }
    }
    items3[2] = tmp26;
    let tmp28 = null;
    if (tmp17) {
      tmp28 = null;
      if (null != channel) {
        const obj7 = { channelId: channel.id };
        tmp28 = closure_19(guildId(11067).PinotChannelLabel, obj7);
      }
    }
    const obj8 = { children: null };
    items3[3] = tmp28;
    obj8.children = items3;
    tmp21Result = closure_21(closure_20, obj8);
  }
  const tmpResult7 = guildId(11067);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLinkedLobbyCoachmark(iconRef) {
  const cResult = require("c").c(13);
  ({ guild, channel } = iconRef);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
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
    const intl = tmp(1125).intl;
    const stringResult = intl.string(tmp(1125).t.YIVr4B);
    const intl2 = tmp(1125).intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants2.LINKED_LOBBIES) };
    const formatResult = intl2.format(tmp(1125).t.w8VWRT, obj3);
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
        const coachmark = tmp(9906).useCoachmark(iconRef.iconRef, tmp19);
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
    channelIconWithGuild = tmp(8561).getChannelIconWithGuild(channel, guild);
    const tmpResult4 = tmp(8561);
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
  const items = [guild(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = _slicedToArray(guild(7555).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
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
  let obj = guild(7555);
  const coachmark = guild(9906).useCoachmark(guild.iconRef, memo);
  return null;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelHeader(channelId) {
  const cResult = channelId(guildId[16]).c(56);
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
    const fn = function h() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(guildId[16]);
  stateFromStores = channelId(guildId[19]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class O {
      constructor() {
        return closure_1_7.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    let tmp10 = O;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = channelId(guildId[19]);
  const stateFromStores1 = channelId(guildId[19]).useStateFromStores(tmp9, tmp10);
  const tmp13 = screenIndex(guildId[33])(channelId);
  View = tmp13;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class O {
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
      class O {
        constructor() {
          return closure_1_7.isConnected();
        }
      }
      const stateFromStores2 = tmp(tmp2[19]).useStateFromStores(tmp14, F);
      if (pressable) {
        pressable = null != stateFromStores;
      }
      if (pressable) {
        pressable = !showCreateThread;
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [GuildStore];
        class O {
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
        class O {
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
  class F {
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
  cResult[9] = F;
  const tmpResult4 = channelId(guildId[19]);
}) : (function GuildChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  let stateFromStores;
  let isConjureChannelCandidate;
  const ref = stateFromStores.useRef(null);
  const items = [ChannelStore];
  stateFromStores = channelId(guildId[19]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = stateFromStores;
  const obj2 = channelId(guildId[19]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores1 = channelId(guildId[19]).useStateFromStores(items1, () => connected.isConnected());
  let parentChannelId = screenIndex(guildId[33])(channelId);
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
      const tmp2Result7 = tmp2(tmp3[21]);
    }
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp11 = type === constants.GUILD_APP;
  if (tmp11) {
    tmp11 = !showCreateThread;
  }
  if (tmp11) {
    tmp11 = "channel-secondary-view-chat" !== screenIndex;
  }
  const tmp2Result = channelId(guildId[19]);
  let tmp12 = null;
  if (tmp11) {
    tmp12 = stateFromStores;
  }
  const appChannelApplication = channelId(guildId[34]).useAppChannelApplication(tmp12);
  const tmp2Result8 = channelId(guildId[34]);
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
  isConjureChannelCandidate = channelId(guildId[35]).useIsConjureChannelCandidate(tmp15, "GuildChannelHeader");
  let renderAppSubTitleResult;
  if (tmp11) {
    renderAppSubTitleResult = tmp2(tmp3[21]).renderAppSubTitle(appChannelApplication, null != stateFromStores.application_id);
    const tmp2Result10 = tmp2(tmp3[21]);
  }
  const obj5 = { channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult, appSubTitle: renderAppSubTitleResult };
  const tmp2Result9 = channelId(guildId[35]);
  const items4 = [channelId, screenIndex, isConjureChannelCandidate];
  ({ node, hasSubtitle, showsPinotLabel } = closure_26({ channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult, appSubTitle: renderAppSubTitleResult }));
  const callback = obj.useCallback(() => {
    if (isConjureChannelCandidate) {
      openConjureAppChannelSheetDefault(channelId);
    } else {
      const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
    }
  }, items4);
  let tmp22 = null;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp22 = null;
    if (null != linkedLobby) {
      const obj6 = { ref, children: null };
      const obj7 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      obj6.children = closure_19(closure_27, obj7);
      tmp22 = closure_19(parentChannelId, obj6);
    }
  }
  const obj8 = { children: null };
  const items5 = [tmp22, node];
  obj8.children = items5;
  const tmp20Result = closure_21(closure_20, obj8);
  let pinotChannelLabelText = null;
  if (showsPinotLabel) {
    pinotChannelLabelText = tmp2(tmp3[26]).getPinotChannelLabelText();
    const tmp2Result11 = tmp2(tmp3[26]);
  }
  if (null == stateFromStores) {
    if (pressable) {
      let num2 = 24;
      if (hasSubtitle) {
        num2 = 44;
      }
      const obj9 = { children: null };
      const tmp2Result12 = tmp2(tmp3[21]);
      obj9.children = tmp2Result12.renderTitleWrapper(tmp20Result, callback, undefined, num2);
      return closure_19(closure_20, obj9);
    } else {
      return tmp20Result;
    }
  } else {
    const obj10 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    let items6 = [computeVisibleChannelName(obj10), pinotChannelLabelText, ];
    const intl = tmp2(tmp3[23]).intl;
    let join = intl.string;
    const t = tmp2(tmp3[23]).t;
    items6[2] = join(isConjureChannelCandidate ? t.OBr7Cw : t.x87QCk);
    items6 = items6.filter((item) => null != item);
    join = items6.join;
    const joined = join(", ");
  }
  const tmp18 = closure_26({ channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult, appSubTitle: renderAppSubTitleResult });
}));