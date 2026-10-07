// discord_app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ThreadActionCreatorsDefault from "../../ThreadActionCreators.tsx";
import markChannelUnreadDefault from "../../../channel/markChannelUnread.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import ChannelActionSheetUtils from "../../../channel/native/ChannelActionSheetUtils.tsx";
import threadActionSheets from "../threadActionSheets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import JoinedThreadsStore from "../../JoinedThreadsStore.tsx";

const require = globalThis.__r;

require = fn;
function getActionSheetButtons(channel) {
  channel = channel.channel;
  ({ canModerateThread, isMuted } = channel);
  ({ isForumPost, handleJoinThreadVoice } = channel);
  let obj = { sectionKey: "mark-as-read", buttons: [] };
  ({ canManageThread, canUnarchiveThread, hasUnread, canMarkUnread, hasJoined, hasActiveThreadVoice, favorites } = channel);
  const MarkChannelUnreadExperiment = channel(10064).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!hasUnread) {
      if (canMarkUnread) {
        const buttons = obj.buttons;
        let obj2 = { label: null, IconComponent: null, onPress: null };
        const intl = tmp(1126).intl;
        obj2.label = intl.string(tmp(1126).t.RpE9k7);
        obj2.IconComponent = tmp(10065).ChatMarkUnreadIcon;
        obj2.onPress = function onPress() {
          markChannelUnreadDefault(channel.id);
        };
        buttons.push(obj2);
      }
      const items = [];
      items.push(obj);
      const tmp7 = isMuted(10047)(favorites);
      if (null != tmp7) {
        const obj3 = { sectionKey: "favorites", buttons: null };
        const items1 = [tmp7];
        obj3.buttons = items1;
        items.push(obj3);
      }
      const obj4 = { sectionKey: "channel-actions", buttons: [] };
      const buttons1 = obj4.buttons;
      const push = buttons1.push;
      if (hasJoined) {
        const intl4 = tmp(1126).intl;
        const string2 = intl4.string;
        let t2 = tmp(1126).t;
        if (isForumPost) {
          let string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        const obj5 = {
          label: string2Result,
          IconComponent: tmp(4843).UserMinusIcon,
          isDestructive: true,
          onPress() {
                  ThreadActionCreatorsDefault.leaveThread(channel, "Context Menu");
                }
        };
        t2 = push(obj5);
      } else {
        const intl3 = tmp(1126).intl;
        const string = intl3.string;
        const t = tmp(1126).t;
        if (isForumPost) {
          let stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        const obj6 = {
          label: stringResult,
          IconComponent: tmp(9729).GroupPlusIcon,
          onPress() {
                  ThreadActionCreatorsDefault.joinThread(channel, "Context Menu");
                }
        };
        push(obj6);
        if (null == handleJoinThreadVoice) {
          const threadMetadata = channel.threadMetadata;
          let archived;
          if (threadMetadata != null) {
            archived = threadMetadata.archived;
          }
          if (archived) {
            if (canUnarchiveThread) {
              const buttons2 = obj4.buttons;
              const intl7 = tmp(1126).intl;
              const string5 = intl7.string;
              let t5 = tmp(1126).t;
              if (isForumPost) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              const obj7 = {
                label: string5Result,
                IconComponent: tmp(4855).ClockIcon,
                onPress() {
                              ThreadActionCreatorsDefault.unarchiveThread(channel, false);
                            }
              };
              t5 = buttons2.push(obj7);
            }
          } else if (canManageThread) {
            const buttons3 = obj4.buttons;
            const intl6 = tmp(1126).intl;
            const string4 = intl6.string;
            const t4 = tmp(1126).t;
            if (isForumPost) {
              let string4Result = string4(t4.BTs4Kb);
            } else {
              string4Result = string4(t4.wiIevd);
            }
            const obj8 = {
              label: string4Result,
              IconComponent: tmp(4801).XLargeIcon,
              onPress() {
                          ThreadActionCreatorsDefault.archiveThread(channel, false);
                        }
            };
            buttons3.push(obj8);
          }
          if (canModerateThread) {
            const buttons4 = obj4.buttons;
            const push2 = buttons4.push;
            let obj9 = { label: null, IconComponent: null, onPress: null };
            const intl8 = tmp(1126).intl;
            const string6 = intl8.string;
            let t1 = tmp(1126).t;
            if (isLockedThreadResult) {
              if (isForumPost) {
                t1 = t1["/OKSxp"];
                let string6Result = string6(t1);
              } else {
                string6Result = string6(t1["jeyb/W"]);
              }
              obj9.label = string6Result;
              obj9.IconComponent = tmp(10069).LockUnlockedIcon;
              obj9.onPress = function onPress() {
                ThreadActionCreatorsDefault.unlockThread(channel);
              };
              obj9 = push2(obj9);
            } else {
              if (isForumPost) {
                let string6Result1 = string6(t1["Ur/0Na"]);
              } else {
                string6Result1 = string6(t1.HoCqm8);
              }
              obj9[0] = string6Result1;
              obj9[1] = tmp(5886).LockIcon;
              obj9[2] = function onPress() {
                ThreadActionCreatorsDefault.lockThread(channel);
              };
              push2(obj9);
            }
            isLockedThreadResult = channel.isLockedThread();
          }
          if (!canModerateThread) {
            const buttons5 = obj4.buttons;
            const obj10 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
            const intl10 = tmp(1126).intl;
            obj10.label = intl10.string(tmp(1126).t.WqhZss);
            obj10.IconComponent = tmp(4845).LinkIcon;
            obj10.onPress = function onPress() {
              const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons5.push(obj10);
            items.push(obj4);
            const obj11 = { sectionKey: "notifications", buttons: [] };
            const buttons6 = obj11.buttons;
            const push3 = buttons6.push;
            let obj12 = { label: null, IconComponent: null, onPress: null };
            const intl11 = tmp(1126).intl;
            const string8 = intl11.string;
            let t7 = tmp(1126).t;
            if (isMuted) {
              if (isForumPost) {
                t7 = t7["0JQfsP"];
                let string8Result = string8(t7);
              } else {
                string8Result = string8(t7["Cq/TzF"]);
              }
              obj12.label = string8Result;
              obj12.IconComponent = tmp(9301).BellIcon;
              obj12.onPress = function onPress() {
                const result = ThreadActionCreatorsDefault.setNotificationSettings(channel, { muted: !isMuted });
              };
              obj12 = push3(obj12);
            } else {
              if (isForumPost) {
                let string8Result1 = string8(t7["nP+Ykd"]);
              } else {
                string8Result1 = string8(t7.bUUd8q);
              }
              obj12[0] = string8Result1;
              obj12[1] = tmp(9826).BellSlashIcon;
              obj12[2] = function onPress() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { guildId: null, channelId: null };
                const combined = "muteSettings" + channel.id;
                obj2.guildId = channel.getGuildId();
                obj2.channelId = channel.id;
                obj.openLazy(asyncRequireImpl(11077, dependencyMap.paths), combined, obj2);
              };
              push3(obj12);
              const buttons7 = obj11.buttons;
              const obj13 = { label: null, IconComponent: null, onPress: null, disableColor: true };
              const intl12 = tmp(1126).intl;
              obj13.label = intl12.string(tmp(1126).t.h850Ss);
              obj13.IconComponent = tmp(10710).ChannelNotificationIcon;
              obj13.onPress = function onPress() {
                const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
              };
              buttons7.push(obj13);
              items.push(obj11);
              return items;
            }
          } else {
            const buttons8 = obj4.buttons;
            const intl9 = tmp(1126).intl;
            const string7 = intl9.string;
            let t6 = tmp(1126).t;
            if (isForumPost) {
              let string7Result = string7(t6.NP1yHG);
            } else {
              string7Result = string7(t6["2Mk1TP"]);
            }
            const obj14 = {
              label: string7Result,
              IconComponent: tmp(10071).PencilIcon,
              onPress() {
                          ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                          ChannelSettingsActionCreatorsDefault.open(channel.id);
                        }
            };
            t6 = buttons8.push(obj14);
          }
        } else {
          const buttons9 = obj4.buttons;
          const intl5 = tmp(1126).intl;
          const string3 = intl5.string;
          let t3 = tmp(1126).t;
          if (hasActiveThreadVoice) {
            let string3Result = string3(t3["0D/6Rz"]);
          } else {
            string3Result = string3(t3.My50nf);
          }
          const obj15 = { label: string3Result, IconComponent: tmp(7534).PhoneCallIcon, onPress: handleJoinThreadVoice };
          t3 = buttons9.push(obj15);
        }
      }
    }
  }
  const buttons10 = obj.buttons;
  const obj16 = { label: null, IconComponent: null, onPress: null };
  const intl2 = tmp(1126).intl;
  obj16.label = intl2.string(channel(1126).t.e6RscS);
  obj16.IconComponent = channel(6465).EyeIcon;
  obj16.onPress = function onPress() {
    ReadStateActionCreators.ack(channel.id, { section: constants3.THREAD_ACTION_SHEET, object: constants2.MARK_THREAD_AS_READ_BUTTON, objectType: constants.ACK_MANUAL }, true, true);
  };
  buttons10.push(obj16);
}
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(35);
  channel = channel.channel;
  const onClose = channel.onClose;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    let tmp4 = guildId;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function b() {
      return GuildStore.getGuild(closure_2);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  let obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [JoinedThreadsStore];
    cResult[5] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== channel.id) {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
    cResult[6] = channel.id;
    cResult[7] = M;
  } else {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp10, M);
  ({ isMuted, hasJoined } = stateFromStoresObject);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
    const items2 = [ReadStateStore];
    cResult[8] = items2;
    const tmp14 = items2;
  } else {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[9] !== channel.id) {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
    cResult[9] = channel.id;
    cResult[10] = tmp16;
  } else {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  const tmpResult10 = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp14, tmp16);
  const tmpResult11 = channel(504);
  const canMarkChannelUnread = channel(10067).useCanMarkChannelUnread(channel);
  const tmpResult12 = channel(10067);
  const canManageThread = channel(6782).useCanManageThread(channel);
  const tmpResult13 = channel(6782);
  const isThreadModerator = channel(6782).useIsThreadModerator(channel);
  const tmpResult14 = channel(6782);
  const canUnarchiveThread = channel(6782).useCanUnarchiveThread(channel);
  const tmpResult15 = channel(6782);
  const canJoinThreadVoice = channel(6782).useCanJoinThreadVoice(channel);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
    const items3 = [VoiceStateStore];
    cResult[11] = items3;
    const tmp23 = items3;
  } else {
    class M {
      constructor() {
        obj = { isMuted: closure_8.isMuted(channel.id), hasJoined: closure_8.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[12] !== channel.id) {
    class E {
      constructor() {
        return closure_7.isInChannel(channel.id);
      }
    }
    cResult[12] = channel.id;
    cResult[13] = E;
  } else {
    class E {
      constructor() {
        return closure_7.isInChannel(channel.id);
      }
    }
  }
  const tmpResult16 = channel(6782);
  const stateFromStores2 = channel(504).useStateFromStores(tmp23, E);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_7.isInChannel(channel.id);
      }
    }
    const items4 = [VoiceStateStore];
    cResult[14] = items4;
    const tmp26 = items4;
  } else {
    class E {
      constructor() {
        return closure_7.isInChannel(channel.id);
      }
    }
  }
  if (cResult[15] !== channel.id) {
    class D {
      constructor() {
        obj = closure_1(closure_2[38]);
        return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
      }
    }
    cResult[15] = channel.id;
    cResult[16] = D;
  } else {
    class D {
      constructor() {
        obj = closure_1(closure_2[38]);
        return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
      }
    }
  }
  const tmpResult17 = channel(504);
  const stateFromStores3 = channel(504).useStateFromStores(tmp26, D);
  onClose(7557)(channel);
  const tmp30 = onClose(5049)(channel);
  const DeveloperMode = tmp(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    class D {
      constructor() {
        obj = closure_1(closure_2[38]);
        return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
      }
    }
  } else {
    class D {
      constructor() {
        obj = closure_1(closure_2[38]);
        return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
      }
    }
    const obj2 = { channel, guild: stateFromStores, canManageThread, canModerateThread: isThreadModerator, canUnarchiveThread, isMuted, hasUnread: stateFromStores1, canMarkUnread: canMarkChannelUnread, hasJoined, isForumPost: channel.isForumPost(), handleJoinThreadVoice: null, hasActiveThreadVoice: null, favorites: null };
    if (canJoinThreadVoice) {
      class D {
        constructor() {
          obj = closure_1(closure_2[38]);
          return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
        }
      }
      if (!stateFromStores2) {
        class D {
          constructor() {
            obj = closure_1(closure_2[38]);
            return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
          }
        }
      }
    }
    obj2.handleJoinThreadVoice = null;
    obj2.hasActiveThreadVoice = stateFromStores3;
    obj2.favorites = tmp32;
    const tmp36Result = getActionSheetButtons(obj2);
    const items5 = [tmp36Result.length, setting, onClose];
    const effect = setting.useEffect(() => {
      if (!tmp) {
        onClose();
      }
      tmp = 0 !== length.length || setting;
    }, items5);
    const ActionSheet = tmp(6708).ActionSheet;
    if (cResult[21] === tmp30) {
      class D {
        constructor() {
          obj = closure_1(closure_2[38]);
          return !obj.isEmpty(closure_7.getVoiceStatesForChannel(channel.id));
        }
      }
      if (cResult[24] !== onClose) {
        class X {
          constructor(arg0) {
            obj = { hasIcons: true, children: null };
            buttons = channel.buttons;
            obj.children = buttons.map((onPress, index) => {
              onPress = onPress.onPress;
              ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
              const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
              let str = "default";
              if (isDestructive) {
                str = "danger";
              }
              obj.variant = str;
              obj.icon = closure_1_13(channel(dependencyMap[47]).ActionSheetRow.Icon, { IconComponent, disableColor });
              obj.trailing = trailing;
              obj.onPress = function onPress() { ... };
              return closure_1_13(channel(dependencyMap[47]).ActionSheetRow, obj, index);
            });
            return jsx(closure_0(closure_2[47]).ActionSheetRow.Group, obj, channel.sectionKey);
          }
        }
        cResult[24] = onClose;
        cResult[25] = X;
      } else {
        class X {
          constructor(arg0) {
            obj = { hasIcons: true, children: null };
            buttons = channel.buttons;
            obj.children = buttons.map((onPress, index) => {
              onPress = onPress.onPress;
              ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
              const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
              let str = "default";
              if (isDestructive) {
                str = "danger";
              }
              obj.variant = str;
              obj.icon = closure_1_13(channel(dependencyMap[47]).ActionSheetRow.Icon, { IconComponent, disableColor });
              obj.trailing = trailing;
              obj.onPress = function onPress() { ... };
              return closure_1_13(channel(dependencyMap[47]).ActionSheetRow, obj, index);
            });
            return jsx(closure_0(closure_2[47]).ActionSheetRow.Group, obj, channel.sectionKey);
          }
        }
      }
      const mapped = tmp36Result.map(X);
      if (cResult[26] === channel.id) {
        class X {
          constructor(arg0) {
            obj = { hasIcons: true, children: null };
            buttons = channel.buttons;
            obj.children = buttons.map((onPress, index) => {
              onPress = onPress.onPress;
              ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
              const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
              let str = "default";
              if (isDestructive) {
                str = "danger";
              }
              obj.variant = str;
              obj.icon = closure_1_13(channel(dependencyMap[47]).ActionSheetRow.Icon, { IconComponent, disableColor });
              obj.trailing = trailing;
              obj.onPress = function onPress() { ... };
              return closure_1_13(channel(dependencyMap[47]).ActionSheetRow, obj, index);
            });
            return jsx(closure_0(closure_2[47]).ActionSheetRow.Group, obj, channel.sectionKey);
          }
        }
      }
      let tmp46 = setting;
      if (setting) {
        class X {
          constructor(arg0) {
            obj = { hasIcons: true, children: null };
            buttons = channel.buttons;
            obj.children = buttons.map((onPress, index) => {
              onPress = onPress.onPress;
              ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
              const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
              let str = "default";
              if (isDestructive) {
                str = "danger";
              }
              obj.variant = str;
              obj.icon = closure_1_13(channel(dependencyMap[47]).ActionSheetRow.Icon, { IconComponent, disableColor });
              obj.trailing = trailing;
              obj.onPress = function onPress() { ... };
              return closure_1_13(channel(dependencyMap[47]).ActionSheetRow, obj, index);
            });
            return jsx(closure_0(closure_2[47]).ActionSheetRow.Group, obj, channel.sectionKey);
          }
        }
        const obj3 = { hasIcons: true, children: null };
        const obj4 = { icon: null, label: null, onPress: null };
        const obj5 = { IconComponent: tmp(10371).IdIcon };
        obj4.icon = closure_13(tmp(6704).ActionSheetRow.Icon, obj5);
        const intl = tmp(1126).intl;
        obj4.label = intl.string(tmp(1126).t.DQ797g);
        obj4.onPress = function onPress() {
          onClose();
          ClipboardUtils.copy(channel.id);
          ToastUtils.presentIdCopied();
        };
        obj3.children = closure_13(tmp(6704).ActionSheetRow, obj4);
        tmp46 = closure_13(tmp(6704).ActionSheetRow.Group, obj3, "developer-actions");
      }
      cResult[26] = channel.id;
      cResult[27] = setting;
      cResult[28] = onClose;
      cResult[29] = tmp46;
    }
    const obj6 = { title: tmp30, icon: tmp33 };
    const tmp42 = closure_13(tmp(10750).ActionSheetIconHeader, obj6);
    cResult[21] = tmp30;
    cResult[22] = tmp33;
    cResult[23] = tmp42;
  }
  const tmpResult18 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  const onClose = channel.onClose;
  dependencyMap = channel.getGuildId();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => ({ isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  const obj2 = channel(504);
  const items2 = [ReadStateStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const obj3 = channel(504);
  const canMarkChannelUnread = channel(10067).useCanMarkChannelUnread(channel);
  const obj4 = channel(10067);
  const canManageThread = channel(6782).useCanManageThread(channel);
  const obj5 = channel(6782);
  const isThreadModerator = channel(6782).useIsThreadModerator(channel);
  const obj6 = channel(6782);
  const canUnarchiveThread = channel(6782).useCanUnarchiveThread(channel);
  const obj7 = channel(6782);
  const canJoinThreadVoice = channel(6782).useCanJoinThreadVoice(channel);
  const obj8 = channel(6782);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(504).useStateFromStores(items3, () => VoiceStateStore.isInChannel(channel.id));
  const obj9 = channel(504);
  const items4 = [VoiceStateStore];
  const stateFromStores3 = channel(504).useStateFromStores(items4, () => !_modDef12.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id)));
  const obj10 = channel(504);
  const tmp13 = onClose;
  const tmp14 = onClose(7557)(channel);
  const DeveloperMode = channel(2028).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp15 = onClose(5049)(channel);
  if (null != stateFromStores) {
    const obj11 = { guild: stateFromStores, size: tmp(5978).GuildIconSizes.LARGE };
    let tmp19 = closure_13(tmp13(5978), obj11);
    let tmp20 = closure_13;
    const tmp13Result = tmp13(5978);
  } else {
    const obj12 = { size: tmp(1188).AvatarSizes.LARGE, channel };
    tmp19 = closure_13(tmp(1188).Avatar, obj12);
    tmp20 = closure_13;
  }
  const obj13 = { channel, guild: stateFromStores, canManageThread, canModerateThread: isThreadModerator, canUnarchiveThread, isMuted, hasUnread: stateFromStores1, canMarkUnread: canMarkChannelUnread, hasJoined, isForumPost: channel.isForumPost(), handleJoinThreadVoice: null, hasActiveThreadVoice: null, favorites: null };
  let tmp24 = null;
  if (canJoinThreadVoice) {
    tmp24 = null;
    if (!stateFromStores2) {
      tmp24 = tmp14;
    }
  }
  obj13.handleJoinThreadVoice = tmp24;
  obj13.hasActiveThreadVoice = stateFromStores3;
  obj13.favorites = onClose(10717)(channel, "ThreadLongPressActionSheet");
  const tmp23Result = getActionSheetButtons(obj13);
  const items5 = [tmp23Result.length, setting, onClose];
  const effect = setting.useEffect(() => {
    if (!tmp) {
      onClose();
    }
    tmp = 0 !== length.length || setting;
  }, items5);
  const obj14 = { header: tmp20(channel(10750).ActionSheetIconHeader, { title: tmp15, icon: tmp19 }), children: null };
  const items6 = [
    tmp23Result.map((buttons) => {
      let obj = { hasIcons: true, children: null };
      buttons = buttons.buttons;
      obj.children = buttons.map((onPress, index) => {
        onPress = onPress.onPress;
        ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
        const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
        let str = "default";
        if (isDestructive) {
          str = "danger";
        }
        obj.variant = str;
        obj.icon = closure_1_13(channel(dependencyMap[47]).ActionSheetRow.Icon, { IconComponent, disableColor });
        obj.trailing = trailing;
        obj.onPress = function onPress() {
          onClose();
          onPress();
        };
        return closure_1_13(channel(dependencyMap[47]).ActionSheetRow, obj, index);
      });
      return __initData2(ActionSheetRow.ActionSheetRow.Group, obj, buttons.sectionKey);
    }),

  ];
  if (setting) {
    const obj15 = { hasIcons: true, children: null };
    const obj16 = { icon: null, label: null, onPress: null };
    const obj17 = { IconComponent: tmp(10371).IdIcon };
    obj16.icon = tmp20(tmp(6704).ActionSheetRow.Icon, obj17);
    const intl = tmp(1126).intl;
    obj16.label = intl.string(tmp(1126).t.DQ797g);
    obj16.onPress = function onPress() {
      onClose();
      ClipboardUtils.copy(channel.id);
      ToastUtils.presentIdCopied();
    };
    obj15.children = tmp20(tmp(6704).ActionSheetRow, obj16);
    setting = tmp20(tmp(6704).ActionSheetRow.Group, obj15, "developer-actions");
  }
  items6[1] = setting;
  obj14.children = items6;
  return closure_14(channel(6708).ActionSheet, obj14);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(stateFromStores[35]).c(10);
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(stateFromStores[35]);
  stateFromStores = channelId(stateFromStores[36]).useStateFromStores(first, tmp6);
  if (cResult[3] === onClose) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    if (cResult[7] === onClose) {
      if (cResult[8] === stateFromStores) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
    let tmp13 = null;
    if (null != stateFromStores) {
      const obj2 = { channel: stateFromStores, onClose };
      tmp13 = closure_13(closure_16, obj2);
    }
    cResult[7] = onClose;
    cResult[8] = stateFromStores;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  class S {
    constructor() {
      if (null == closure_2) {
        tmp = onClose;
        tmp2 = onClose();
      }
      return;
    }
  }
  const items1 = [stateFromStores, onClose];
  cResult[3] = onClose;
  cResult[4] = stateFromStores;
  cResult[5] = S;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = S;
  const tmpResult = channelId(stateFromStores[36]);
}) : ((arg0) => {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(_require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = closure_13(closure_16, obj2);
  }
  return tmp3;
});