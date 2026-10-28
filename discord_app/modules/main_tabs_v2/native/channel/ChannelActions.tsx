// === Module 9745: ChannelActions ===

// Module 9745 (ChannelActions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import RootNavigationRef from "RootNavigationRef" /* 5187 */;
import ChatInputUtils from "ChatInputUtils" /* 5195 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7902 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8609 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9750 */;
import PhoneCallIcon from "PhoneCallIcon" /* 9754 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 9756 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9761 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10917 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11246 */;
import useSearchContext from "useSearchContext" /* 13417 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13418 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13477 */;
import IconActionButtonDefault from "IconActionButton" /* 14235 */;
import ConversationCoachmark from "ConversationCoachmark" /* 14244 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 14247 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6825 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;

require = fn;
const View = fn(17).View;
const ChannelRecord = fn(4860);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, isChannelChatInSidebar: metroRequire } = ChannelRecord);
let closure_9 = fn(9746).setIsChannelDetailsSearchActive;
const Constants = fn(1084);
({ ChannelTypes: c10, ChannelTypesSets: closure_11, ComponentActions: closure_12 } = Constants);
let closure_13 = fn(9747).SearchEntrypointAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(5004);
let closure_17 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelChatButton(id, arg1) {
  _require = id;
  const cResult = require("c").c(5);
  const obj = require("c");
  id = null;
  if (arg1) {
    id = id.id;
  }
  const channelChatUnread = require("useChannelChatUnread").useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  if (arg1) {
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    if (cResult[0] === id) {
      if (cResult[1] === hasUnread) {
        if (cResult[2] === mentionCount) {
          let tmp6 = cResult[3];
        }
        return tmp6;
      }
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(tmp(1125).t.kkKapG);
      cResult[4] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[4];
    }
    const obj3 = {
      IconComponent: tmp(8579).ChatIcon,
      onPress() {
          openChannelSecondaryViewChatDefault(id.guild_id, id.id);
        },
      accessibilityLabel: tmp8,
      badge: hasUnread,
      badgePosition: "right",
      buttonText: null
    };
    let StringResult;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    obj3.buttonText = StringResult;
    cResult[0] = id;
    cResult[1] = hasUnread;
    cResult[2] = mentionCount;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    return null;
  }
  const obj2 = require("useChannelChatUnread");
}) : (function useChannelChatButton(id, arg1) {
  _require = id;
  id = null;
  if (arg1) {
    id = id.id;
  }
  const channelChatUnread = require("useChannelChatUnread").useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  if (arg1) {
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    const obj2 = {
      IconComponent: tmp(8579).ChatIcon,
      onPress() {
          openChannelSecondaryViewChatDefault(id.guild_id, id.id);
        },
      accessibilityLabel: null,
      badge: null,
      badgePosition: "right",
      buttonText: null
    };
    const intl = tmp(1125).intl;
    obj2.accessibilityLabel = intl.string(tmp(1125).t.kkKapG);
    obj2.badge = hasUnread;
    let StringResult;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    obj2.buttonText = StringResult;
    return obj2;
  } else {
    return null;
  }
  const obj = require("useChannelChatUnread");
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinCallIcon() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const tmp7 = closure_1_14(PhoneCallIcon.PhoneCallIcon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function JoinCallIcon() {
  return closure_1_14(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EndCallIcon() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
    const tmp7 = closure_1_14(PhoneHangUpIcon.PhoneHangUpIcon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function EndCallIcon() {
  return closure_1_14(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 });
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function LfgVoiceActiveIcon() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const tmp7 = closure_1_14(VoiceNormalIcon.VoiceNormalIcon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LfgVoiceActiveIcon() {
  return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function LfgVoiceInactiveIcon() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LfgVoiceInactiveIcon() {
  return closure_1_14(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelActionButtons(channel) {
  const cResult = channel(items1[12]).c(31);
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  const tmp4 = closure_17();
  screenIndex(items1[21])(channel);
  let obj = channel(items1[12]);
  const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
  let tmp8 = screenIndex(items1[23])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === channel.id) {
      let tmp11 = cResult[3];
    }
    items1 = [];
    const stateFromStores = tmp(tmp2[24]).useStateFromStores(first, tmp11);
    const tmpResult = tmp(tmp2[24]);
    const _Symbol = Symbol;
    const canJoinThreadVoice = tmp(tmp2[25]).useCanJoinThreadVoice(channel);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VoiceStateStore];
      cResult[4] = items2;
      let tmp14 = items2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== channel.id) {
      class G {
        constructor() {
          return closure_8.isInChannel(channel.id);
        }
      }
      cResult[5] = channel.id;
      cResult[6] = G;
    } else {
      class G {
        constructor() {
          return closure_8.isInChannel(channel.id);
        }
      }
    }
    const tmpResult8 = tmp(tmp2[25]);
    const stateFromStores1 = tmp(tmp2[24]).useStateFromStores(tmp14, G);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return closure_8.isInChannel(channel.id);
        }
      }
      const items3 = [VoiceStateStore];
      cResult[7] = items3;
      const tmp18 = items3;
    } else {
      class G {
        constructor() {
          return closure_8.isInChannel(channel.id);
        }
      }
    }
    if (cResult[8] !== channel.id) {
      class H {
        constructor() {
          return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      cResult[8] = channel.id;
      cResult[9] = H;
    } else {
      class H {
        constructor() {
          return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
        }
      }
    }
    const tmpResult9 = tmp(tmp2[24]);
    const stateFromStores2 = tmp(tmp2[24]).useStateFromStores(tmp18, H);
    tmp5(tmp2[26])(channel);
    const tmpResult10 = tmp(tmp2[24]);
    const conversationsHeaderButton = tmp(tmp2[27]).useConversationsHeaderButton(channel);
    const tmpResult11 = tmp(tmp2[27]);
    const isGameInvitePostVoiceEnabled = tmp(tmp2[28]).useIsGameInvitePostVoiceEnabled(channel);
    tmp(tmp2[28]);
    if (cResult[10] === channel.type) {
      class H {
        constructor() {
          return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      if (cResult[13] === channel) {
        class H {
          constructor() {
            return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        ActiveThreadsStore = tmp31;
        if (canJoinThreadVoice) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (constants.GUILD_DIRECTORY === channel.type) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          tmp36[0] = tmp5(tmp2[31]);
          tmp36[1] = tmp(tmp2[32]).MagnifyingGlassIcon;
          tmp36[2] = function onPress() {
            GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
          };
          const intl2 = tmp(tmp2[14]).intl;
          tmp36[3] = intl2.string(tmp(tmp2[14]).t["5h0QOP"]);
          items1.push(tmp36);
        } else {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          if (canSearchForumPosts) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            tmp34[0] = tmp5(tmp2[31]);
            tmp34[1] = tmp(tmp2[32]).MagnifyingGlassIcon;
            tmp34[2] = function onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            };
            const intl = tmp(tmp2[14]).intl;
            tmp34[3] = intl.string(tmp(tmp2[14]).t["5h0QOP"]);
            items1.push(tmp34);
          }
        }
        if (null != tmp30) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (tmp8) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (!tmp8) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const hasItem = set.has(channel.type);
          let tmp40 = !hasItem;
          if (!hasItem) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (tmp40) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
            const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
            tmp40 = !GUILD_THREADS_ONLY.has(channel.type);
          }
          if (hasItem) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          if (hasItem) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          tmp8 = !hasItem;
        }
        if (!tmp8) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          tmp41[0] = tmp5(tmp2[42]);
          tmp41[1] = tmp(tmp2[43]).ThreadIcon;
          tmp41[2] = function onPress() {
            return showThreadBrowserModalDefault(channel);
          };
          const intl3 = tmp(tmp2[14]).intl;
          tmp41[3] = intl3.string(tmp(tmp2[14]).t.B2panI);
          items1.unshift(tmp41);
        }
        const mapped = items1.map((accessibilityLabel, index) => {
          closure_0 = accessibilityLabel;
          let tmp = index === items1.length - 1;
          if (tmp) {
            tmp = !closure_4;
          }
          if (accessibilityLabel === conversationsHeaderButton) {
            const obj2 = {
              isLast: tmp,
              children(arg0) {
                  closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj.onPress = function onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  };
                  return closure_1_14(screenIndex(items1[46]), obj);
                }
            };
            let tmp10 = closure_2_14(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
          } else {
            let obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp10 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp10;
        });
        if (cResult[24] === channel) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          if (cResult[27] === tmp4.actionWrapper) {
            class H {
              constructor() {
                return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
              }
            }
          }
          let obj3 = { style: tmp4.actionWrapper, children: null };
          const items4 = [mapped, tmp44];
          obj3.children = items4;
          const tmp49 = closure_15(conversationsHeaderButton, obj3);
          cResult[27] = tmp4.actionWrapper;
          cResult[28] = mapped;
          cResult[29] = tmp44;
          cResult[30] = tmp49;
        }
        let tmp45 = tmp31;
        if (tmp31) {
          class H {
            constructor() {
              return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          let obj4 = { channel };
          tmp45 = closure_14(tmp5(tmp2[29]), obj4);
        }
        cResult[24] = channel;
        cResult[25] = tmp31;
        cResult[26] = tmp45;
      }
      tmp30 = closure_18(channel, tmp26);
      let result = tmp(tmp2[29]).hasChannelOverflowMenu(channel, screenIndex);
      cResult[13] = channel;
      cResult[14] = screenIndex;
      cResult[15] = result;
      const tmpResult14 = tmp(tmp2[29]);
    }
    let tmp28 = closure_6(channel.type);
    if (tmp28) {
      class H {
        constructor() {
          return Object.keys(closure_8.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      tmp28 = "channel-secondary-view-chat" !== screenIndex;
    }
    cResult[10] = channel.type;
    cResult[11] = screenIndex;
    cResult[12] = tmp28;
    tmp26 = tmp28;
    const tmpResult12 = tmp(tmp2[28]);
  }
  const fn = function l() {
    return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp11 = fn;
  let obj2 = channel(items1[22]);
}) : (function ChannelActionButtons(channel) {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  c4 = undefined;
  let tmp = closure_17();
  const tmp4 = screenIndex(items1[21])(channel);
  const canSearchForumPosts = channel(items1[22]).useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[23])();
  let obj = channel(items1[22]);
  const items = [c4];
  items1 = [];
  const stateFromStores = channel(items1[24]).useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[24]);
  const canJoinThreadVoice = channel(items1[25]).useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[25]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = channel(items1[24]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[24]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(items1[24]).useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[26])(channel);
  let obj5 = channel(items1[24]);
  const conversationsHeaderButton = channel(items1[27]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[27]);
  const isGameInvitePostVoiceEnabled = channel(items1[28]).useIsGameInvitePostVoiceEnabled(channel);
  const obj7 = channel(items1[28]);
  const isGameInvitesPost = channel(items1[28]).useIsGameInvitesPost(channel);
  let tmp16 = closure_6(channel.type);
  if (tmp16) {
    tmp16 = "channel-secondary-view-chat" !== screenIndex;
  }
  const tmp17 = closure_18(channel, tmp16);
  const obj8 = channel(items1[28]);
  let result = channel(items1[29]).hasChannelOverflowMenu(channel, screenIndex);
  c4 = result;
  if (canJoinThreadVoice) {
    if (isGameInvitesPost) {
      if (isGameInvitePostVoiceEnabled) {
        let tmp22 = stateFromStores1;
        if (!stateFromStores1) {
          tmp22 = tmp12;
        }
        let obj9 = { IconComponent: tmp22 ? closure_21 : closure_22, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
        let StringResult;
        if (tmp22) {
          if (stateFromStores2 > 0) {
            const _String = String;
            StringResult = String(stateFromStores2);
          }
        }
        obj9.buttonText = StringResult;
        if (stateFromStores1) {
          fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
        }
        obj9.onPress = fn;
        const intl2 = tmp5(tmp3[14]).intl;
        const string2 = intl2.string;
        let t1 = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          t1 = t1["4ry6yi"];
          let string2Result = string2(t1);
        } else {
          string2Result = string2(t1.My50nf);
        }
        obj9.accessibilityLabel = string2Result;
        obj9 = items1.push(obj9);
      }
    } else {
      if (tmp19) {
        const obj10 = { IconComponent: stateFromStores1 ? closure_20 : closure_19, onPress: null, accessibilityLabel: null };
        let fn2 = fn;
        if (!stateFromStores1) {
          fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
        }
        obj10.onPress = fn2;
        const intl = tmp5(tmp3[14]).intl;
        const string = intl.string;
        const t = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          let stringResult = string(t["4ry6yi"]);
        } else {
          stringResult = string(t.My50nf);
        }
        obj10.accessibilityLabel = stringResult;
        items1.push(obj10);
      }
      tmp19 = channel.isVocalThread() && tmp12;
    }
  }
  const type = channel.type;
  if (constants.GUILD_DIRECTORY === type) {
    const obj11 = {
      source: tmp2(tmp3[31]),
      IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
      onPress() {
          GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
        },
      accessibilityLabel: null
    };
    const intl5 = tmp5(tmp3[14]).intl;
    obj11.accessibilityLabel = intl5.string(tmp5(tmp3[14]).t["5h0QOP"]);
    items1.push(obj11);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        if (!tmp16) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const obj12 = {
            source: tmp2(tmp3[31]),
            IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
            onPress() {
                      closure_9(channel.id, true, "initial");
                      if (obj2.isIOS()) {
                        const chatInputRef = ChatInputUtils.getChatInputRef(channel.id, screenIndex);
                        if (chatInputRef != null) {
                          chatInputRef.blur();
                        }
                        const tmp2Result = ChatInputUtils;
                      }
                      obj2 = PlatformUtils;
                      const guildId = channel.getGuildId();
                      const isThreadResult = channel.isThread();
                      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(channel.id, guildId, isThreadResult);
                      const tmp2Result4 = useSearchContext;
                      search_tracking_TrackingDefault.trackSearchOpened({ searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER });
                      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                      if (tmp2Result5.isSwipeToMemberListEnabledForChannel(channel.id)) {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        const obj4 = { source: "channel-header-search", channelId: channel.id, screenIndex };
                        ComponentDispatch.dispatch(constants3.SHOW_CHANNEL_DETAILS, obj4);
                      } else {
                        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            const obj5 = { channelId: channel.id, search: true, source: "channel-header-search" };
                            rootNavigationRef.navigate("sidebar", obj5);
                          }
                        }
                        const tmp2Result6 = RootNavigationRef;
                      }
                      tmp2Result5 = SwipeToMemberListUtils;
                    },
            accessibilityLabel: null
          };
          const intl3 = tmp5(tmp3[14]).intl;
          obj12.accessibilityLabel = intl3.string(tmp5(tmp3[14]).t["5h0QOP"]);
          items1.push(obj12);
        }
      }
    }
    if (canSearchForumPosts) {
      const obj13 = {
        source: tmp2(tmp3[31]),
        IconComponent: tmp5(tmp3[32]).MagnifyingGlassIcon,
        onPress() {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
            },
        accessibilityLabel: null
      };
      const intl4 = tmp5(tmp3[14]).intl;
      obj13.accessibilityLabel = intl4.string(tmp5(tmp3[14]).t["5h0QOP"]);
      items1.push(obj13);
    }
  }
  if (null != tmp17) {
    items1.push(tmp17);
  }
  if (tmp7) {
    tmp7 = 0 !== items1.length;
  }
  if (!tmp7) {
    let hasItem = set.has(channel.type);
    let tmp36 = !hasItem;
    if (!hasItem) {
      tmp36 = stateFromStores;
    }
    if (tmp36) {
      const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
      tmp36 = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (hasItem) {
      hasItem = !tmp4;
    }
    if (hasItem) {
      hasItem = !channel.isForumLikeChannel();
    }
    if (hasItem) {
      hasItem = tmp36;
    }
    tmp7 = !hasItem;
  }
  if (!tmp7) {
    const obj14 = {
      source: tmp2(tmp3[42]),
      IconComponent: tmp5(tmp3[43]).ThreadIcon,
      onPress() {
          return showThreadBrowserModalDefault(channel);
        },
      accessibilityLabel: null
    };
    const intl6 = tmp5(tmp3[14]).intl;
    obj14.accessibilityLabel = intl6.string(tmp5(tmp3[14]).t.B2panI);
    items1.unshift(obj14);
  }
  const obj15 = { style: tmp.actionWrapper, children: null };
  const items4 = [
    items1.map((accessibilityLabel, index) => {
      closure_0 = accessibilityLabel;
      let tmp = index === items1.length - 1;
      if (tmp) {
        tmp = !c4;
      }
      if (accessibilityLabel === conversationsHeaderButton) {
        const obj2 = {
          isLast: tmp,
          children(arg0) {
              closure_0 = arg0;
              const obj = { noMargin: true };
              const merged = Object.assign(closure_0);
              obj.onPress = function onPress(arg0) {
                closure_0();
                const onPress = closure_0.onPress;
                if (onPress != null) {
                  onPress(arg0);
                }
              };
              return closure_1_14(screenIndex(items1[46]), obj);
            }
        };
        let tmp10 = closure_2_14(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
      } else {
        let obj = { noMargin: tmp };
        let merged = Object.assign(accessibilityLabel);
        obj.key = accessibilityLabel.accessibilityLabel;
        tmp10 = createElement(IconActionButtonDefault, { noMargin: tmp });
      }
      return tmp10;
    }),

  ];
  if (result) {
    const obj16 = { channel };
    result = closure_14(tmp2(tmp3[29]), obj16);
  }
  items4[1] = result;
  obj15.children = items4;
  return closure_15(conversationsHeaderButton, obj15);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function WrappedChannelNavButtons(channelId) {
  const cResult = channelId(576).c(6);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function t() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  channelId(6697);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (!tmp9) {
      tmp10 = null;
      if (!channelId.showCreateThread) {
        if (cResult[3] === stateFromStores) {
        }
        const obj2 = { channel: stateFromStores, screenIndex };
        const tmp14 = closure_14(closure_23, obj2);
        cResult[3] = stateFromStores;
        cResult[4] = screenIndex;
        cResult[5] = tmp14;
      }
    }
  }
  return tmp10;
}) : (function WrappedChannelNavButtons(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(6697);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = closure_14(closure_23, obj2);
      }
    }
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelActions(channelId) {
  let ForumChannelCloseSearchButton = channelId;
  let obj = dependencyMap;
  const cResult = channelId(576).c(13);
  channelId = channelId.channelId;
  ({ screenIndex, containerStyle, showCreateThread } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      const channel = ChannelStore.getChannel(channelId);
      let flag;
      if (channel != null) {
        flag = channel.isMultiUserDM();
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = { isMultiUserDM: flag, isDM: null };
      const channel1 = ChannelStore.getChannel(channelId);
      let flag2;
      if (channel1 != null) {
        flag2 = channel1.isDM();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj2.isDM = flag2;
      return obj2;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
  }
  const result = ForumChannelCloseSearchButton(504);
  const stateFromStoresObject = result.useStateFromStoresObject(first, tmp4);
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  const result1 = ForumChannelCloseSearchButton(9759);
  const hasForumSearchQuery = result1.useHasForumSearchQuery(channelId);
  if (cResult[3] === channelId) {
    if (cResult[4] === hasForumSearchQuery) {
      if (cResult[5] === isDM) {
        if (cResult[6] === isMultiUserDM) {
          if (cResult[7] === screenIndex) {
            if (cResult[8] === showCreateThread) {
              if (cResult[10] === containerStyle) {
                if (cResult[11] === tmp7) {
                  let tmp14 = cResult[12];
                }
                return tmp14;
              }
              const obj3 = { style: containerStyle, children: cResult[9] };
              const tmp17 = closure_14(View, obj3);
              cResult[10] = containerStyle;
              cResult[11] = cResult[9];
              cResult[12] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
      }
    }
  }
  if (hasForumSearchQuery) {
    ForumChannelCloseSearchButton = ForumChannelCloseSearchButton(14245).ForumChannelCloseSearchButton;
    obj = { channelId };
    let tmp10 = closure_14(ForumChannelCloseSearchButton, obj);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj4 = { channelId, screenIndex, showCreateThread };
        tmp10 = closure_14(closure_24, obj4);
      }
    }
    const obj5 = { channelId, screenIndex };
    tmp10 = closure_14(PrivateChannelButtonsDefault, obj5);
  }
  cResult[3] = channelId;
  cResult[4] = hasForumSearchQuery;
  cResult[5] = isDM;
  cResult[6] = isMultiUserDM;
  cResult[7] = screenIndex;
  cResult[8] = showCreateThread;
  cResult[9] = tmp10;
  let obj2 = channelId(576);
}) : (function ChannelActions(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isMultiUserDM();
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { isMultiUserDM: flag, isDM: null };
    const channel1 = ChannelStore.getChannel(channelId);
    let flag2;
    if (channel1 != null) {
      flag2 = channel1.isDM();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj2.isDM = flag2;
    return obj2;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  const obj = channelId(504);
  const tmp = channelId;
  const obj3 = { style: containerStyle, children: null };
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    let tmp4Result = closure_14(tmp(14245).ForumChannelCloseSearchButton, obj4);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = closure_14(closure_24, obj5);
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = closure_14(PrivateChannelButtonsDefault, obj6);
  }
  obj3.children = tmp4Result;
  return closure_14(View, obj3);
});