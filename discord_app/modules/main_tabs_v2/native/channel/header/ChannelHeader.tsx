// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx
import ComponentDispatchUtils from "../../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import SwipeToMemberListUtils from "../../sidebar/member_list/SwipeToMemberListUtils.tsx";
import GuildRoleSubscriptionsChannelHeaderDefault from "../../../../guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx";
import HomeChannelHeaderDefault from "HomeChannelHeader.tsx";
import PrivateChannelHeaderDefault from "PrivateChannelHeader.tsx";
import ForumChannelHeaderDefault from "ForumChannelHeader.tsx";
import GuildChannelHeaderDefault from "GuildChannelHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const ComponentActions = fn(1085).ComponentActions;
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelHeader(channelId) {
      const cResult = channelId(576).c(27);
      channelId = channelId.channelId;
      ({ screenIndex, isNavigationScreen, pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
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
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const obj = channelId(576);
      const tmp4 = undefined === pressable || pressable;
      const stateFromStores = channelId(573).useStateFromStores(first, tmp9);
      const tmpResult = channelId(573);
      const isChannelContentGated = channelId(5930).useIsChannelContentGated(stateFromStores);
      let tmp11 = !isChannelContentGated;
      if (!isChannelContentGated) {
        tmp11 = tmp4;
      }
      if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp39 = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
          cResult[3] = tmp39;
          let tmp36 = tmp39;
        } else {
          tmp36 = cResult[3];
        }
        return tmp36;
      } else if (channelId === tmp12.GUILD_HOME) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp35 = jsx(HomeChannelHeaderDefault, {});
          cResult[4] = tmp35;
          let tmp32 = tmp35;
        } else {
          tmp32 = cResult[4];
        }
        return tmp32;
      } else {
        let isPrivateResult;
        if (stateFromStores != null) {
          isPrivateResult = stateFromStores.isPrivate();
        }
        if (isPrivateResult) {
          if (cResult[5] === tmp11) {
            if (cResult[6] === channelId) {
              if (cResult[7] === screenIndex) {
                let tmp28 = cResult[8];
              }
              return tmp28;
            }
          }
          const obj2 = { channelId, pressable: tmp11, screenIndex };
          const tmp31 = jsx(PrivateChannelHeaderDefault, { channelId, pressable: tmp11, screenIndex });
          cResult[5] = tmp11;
          cResult[6] = channelId;
          cResult[7] = screenIndex;
          cResult[8] = tmp31;
          tmp28 = tmp31;
        } else {
          let isForumLikeChannelResult;
          if (stateFromStores != null) {
            isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
          }
          if (isForumLikeChannelResult) {
            let guild_id;
            if (!tmp15) {
              guild_id = stateFromStores.guild_id;
            }
            if (cResult[9] !== stateFromStores) {
              let stringResult;
              if (!stateFromStores.isForumChannel()) {
                const intl = tmp(1126).intl;
                stringResult = intl.string(tmp(1126).t["L9fR+P"]);
              }
              cResult[9] = stateFromStores;
              cResult[10] = stringResult;
              let tmp22 = stringResult;
            } else {
              tmp22 = cResult[10];
            }
            if (cResult[11] === tmp11) {
              if (cResult[12] === channelId) {
                if (cResult[13] === tmp5) {
                  if (cResult[14] === isNavigationScreen) {
                    if (cResult[15] === screenIndex) {
                      if (cResult[16] === guild_id) {
                        if (cResult[17] === tmp22) {
                          let tmp24 = cResult[18];
                        }
                        return tmp24;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = {
              channelId,
              guildId: guild_id,
              pressable: tmp11,
              isGuildMemberCountVisible: tmp5,
              isNavigationScreen,
              screenIndex,
              searchPlaceholder: tmp22,
            };
            const tmp27 = jsx(ForumChannelHeaderDefault, {
              channelId,
              guildId: guild_id,
              pressable: tmp11,
              isGuildMemberCountVisible: tmp5,
              isNavigationScreen,
              screenIndex,
              searchPlaceholder: tmp22,
            });
            cResult[11] = tmp11;
            cResult[12] = channelId;
            cResult[13] = tmp5;
            cResult[14] = isNavigationScreen;
            cResult[15] = screenIndex;
            cResult[16] = guild_id;
            cResult[17] = tmp22;
            cResult[18] = tmp27;
            tmp24 = tmp27;
          } else {
            let guild_id1;
            if (!tmp15) {
              guild_id1 = stateFromStores.guild_id;
            }
            if (cResult[19] === tmp11) {
              if (cResult[20] === channelId) {
                if (cResult[21] === tmp5) {
                  if (cResult[22] === isNavigationScreen) {
                    if (cResult[23] === screenIndex) {
                      if (cResult[24] === tmp6) {
                        if (cResult[25] === guild_id1) {
                          let tmp17 = cResult[26];
                        }
                        return tmp17;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = {
              channelId,
              guildId: guild_id1,
              pressable: tmp11,
              isGuildMemberCountVisible: tmp5,
              isNavigationScreen,
              screenIndex,
              showCreateThread: tmp6,
            };
            const tmp20 = jsx(GuildChannelHeaderDefault, {
              channelId,
              guildId: guild_id1,
              pressable: tmp11,
              isGuildMemberCountVisible: tmp5,
              isNavigationScreen,
              screenIndex,
              showCreateThread: tmp6,
            });
            cResult[19] = tmp11;
            cResult[20] = channelId;
            cResult[21] = tmp5;
            cResult[22] = isNavigationScreen;
            cResult[23] = screenIndex;
            cResult[24] = tmp6;
            cResult[25] = guild_id1;
            cResult[26] = tmp20;
            tmp17 = tmp20;
          }
        }
      }
      const tmpResult2 = channelId(5930);
    }
  : function ChannelHeader(channelId) {
      channelId = channelId.channelId;
      ({ screenIndex, isNavigationScreen, pressable } = channelId);
      if (pressable === undefined) {
        pressable = true;
      }
      let flag = channelId.isGuildMemberCountVisible;
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = channelId.showCreateThread;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const items = [ChannelStore];
      const stateFromStores = channelId(573).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const obj = channelId(573);
      const isChannelContentGated = channelId(5930).useIsChannelContentGated(stateFromStores);
      let tmp4 = !isChannelContentGated;
      if (!isChannelContentGated) {
        tmp4 = pressable;
      }
      if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        let tmp8Result = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
      } else if (channelId === tmp5.GUILD_HOME) {
        tmp8Result = jsx(HomeChannelHeaderDefault, {});
      } else {
        let isPrivateResult;
        if (stateFromStores != null) {
          isPrivateResult = stateFromStores.isPrivate();
        }
        if (isPrivateResult) {
          const obj2 = { channelId, pressable: tmp4, screenIndex };
          tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: tmp4, screenIndex });
        } else {
          let isForumLikeChannelResult;
          if (stateFromStores != null) {
            isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
          }
          if (isForumLikeChannelResult) {
            const obj4 = {
              channelId,
              guildId: null,
              pressable: null,
              isGuildMemberCountVisible: null,
              isNavigationScreen: null,
              screenIndex: null,
              searchPlaceholder: null,
            };
            let guild_id;
            if (stateFromStores != null) {
              guild_id = stateFromStores.guild_id;
            }
            obj4.guildId = guild_id;
            obj4.pressable = tmp4;
            obj4.isGuildMemberCountVisible = flag;
            obj4.isNavigationScreen = isNavigationScreen;
            obj4.screenIndex = screenIndex;
            let stringResult;
            if (!stateFromStores.isForumChannel()) {
              const intl = tmp(1126).intl;
              stringResult = intl.string(tmp(1126).t["L9fR+P"]);
            }
            obj4.searchPlaceholder = stringResult;
            tmp8Result = jsx(ForumChannelHeaderDefault, {
              channelId,
              guildId: null,
              pressable: null,
              isGuildMemberCountVisible: null,
              isNavigationScreen: null,
              screenIndex: null,
              searchPlaceholder: null,
            });
            const tmp9Result = ForumChannelHeaderDefault;
          } else {
            const obj5 = {
              channelId,
              guildId: null,
              pressable: null,
              isGuildMemberCountVisible: null,
              isNavigationScreen: null,
              screenIndex: null,
              showCreateThread: null,
            };
            let guild_id1;
            if (stateFromStores != null) {
              guild_id1 = stateFromStores.guild_id;
            }
            obj5.guildId = guild_id1;
            obj5.pressable = tmp4;
            obj5.isGuildMemberCountVisible = flag;
            obj5.isNavigationScreen = isNavigationScreen;
            obj5.screenIndex = screenIndex;
            obj5.showCreateThread = flag2;
            tmp8Result = jsx(GuildChannelHeaderDefault, {
              channelId,
              guildId: null,
              pressable: null,
              isGuildMemberCountVisible: null,
              isNavigationScreen: null,
              screenIndex: null,
              showCreateThread: null,
            });
            const tmp9Result2 = GuildChannelHeaderDefault;
          }
        }
      }
      return tmp8Result;
    };
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  if (obj.isIOS()) {
    const chatInputRef = ChatInputUtils.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
    const tmpResult = ChatInputUtils;
  }
  obj = PlatformUtils;
  if (tmpResult3.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj2 = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj2);
  } else {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      const obj3 = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj3);
    }
    const tmpResult4 = RootNavigationRef;
  }
  tmpResult3 = SwipeToMemberListUtils;
};
