// === Module 16041: ThreadLongPressActionSheet ===

// Module 16041 (ThreadLongPressActionSheet)
import _modDef12 from "module_12" /* 12 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6697 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10054 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10062 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10694 */;
import threadActionSheets from "threadActionSheets" /* 11067 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId, dependencyMap;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function getActionSheetButtons(channel) {
  let canManageThread;
  let canMarkUnread;
  let canModerateThread;
  let canUnarchiveThread;
  let favorites;
  let handleJoinThreadVoice;
  let hasActiveThreadVoice;
  let hasJoined;
  let hasUnread;
  let intl;
  let intl10;
  let intl12;
  let intl2;
  let isForumPost;
  let isMuted;
  let items1;
  channel = channel.channel;
  ({ canModerateThread, isMuted } = channel);
  ({ isForumPost, handleJoinThreadVoice } = channel);
  let obj = { sectionKey: "mark-as-read", buttons: [] };
  const tmp = channel;
  ({ canManageThread, canUnarchiveThread, hasUnread, canMarkUnread, hasJoined, hasActiveThreadVoice, favorites } = channel);
  const MarkChannelUnreadExperiment = channel(10051).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!hasUnread) {
      if (canMarkUnread) {
        const buttons = obj.buttons;
        let obj2 = {
          label: intl.string(tmp(1126).t.RpE9k7),
          IconComponent: tmp(10052).ChatMarkUnreadIcon,
          onPress() {
                  markChannelUnreadDefault(channel.id);
                }
        };
        const push = buttons.push;
        intl = tmp(1126).intl;
        push(obj2);
      }
      const items = [];
      items.push(obj);
      const tmp7 = isMuted(10034)(favorites);
      if (null != tmp7) {
        const obj3 = { sectionKey: "favorites", buttons: items1 };
        items1 = [tmp7];
        items.push(obj3);
      }
      const obj4 = { sectionKey: "channel-actions", buttons: [] };
      const buttons1 = obj4.buttons;
      const push3 = buttons1.push;
      if (hasJoined) {
        let string2Result;
        const intl4 = tmp(1126).intl;
        const string2 = intl4.string;
        const t2 = tmp(1126).t;
        if (isForumPost) {
          string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        const obj5 = {
          label: string2Result,
          IconComponent: tmp(4837).UserMinusIcon,
          isDestructive: true,
          onPress() {
                  const obj = ThreadActionCreatorsDefault;
                  obj.leaveThread(channel, "Context Menu");
                }
        };
        push3(obj5);
      } else {
        let stringResult;
        const intl3 = tmp(1126).intl;
        const string = intl3.string;
        const t = tmp(1126).t;
        if (isForumPost) {
          stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        const obj6 = {
          label: stringResult,
          IconComponent: tmp(9716).GroupPlusIcon,
          onPress() {
                  const obj = ThreadActionCreatorsDefault;
                  obj.joinThread(channel, "Context Menu");
                }
        };
        push3(obj6);
      }
      if (null != handleJoinThreadVoice) {
        let string3Result;
        const buttons2 = obj4.buttons;
        const push4 = buttons2.push;
        const intl5 = tmp(1126).intl;
        const string3 = intl5.string;
        const t3 = tmp(1126).t;
        if (hasActiveThreadVoice) {
          string3Result = string3(t3["0D/6Rz"]);
        } else {
          string3Result = string3(t3.My50nf);
        }
        const obj7 = { label: string3Result, IconComponent: tmp(7523).PhoneCallIcon, onPress: handleJoinThreadVoice };
        push4(obj7);
      }
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      if (archived) {
        if (canUnarchiveThread) {
          let string5Result;
          const buttons3 = obj4.buttons;
          const push6 = buttons3.push;
          const intl7 = tmp(1126).intl;
          const string5 = intl7.string;
          const t5 = tmp(1126).t;
          if (isForumPost) {
            string5Result = string5(t5.cnRubV);
          } else {
            string5Result = string5(t5.S9E4G7);
          }
          const obj8 = {
            label: string5Result,
            IconComponent: tmp(4849).ClockIcon,
            onPress() {
                      const obj = ThreadActionCreatorsDefault;
                      obj.unarchiveThread(channel, false);
                    }
          };
          push6(obj8);
        }
      } else if (canManageThread) {
        let string4Result;
        const buttons4 = obj4.buttons;
        const push5 = buttons4.push;
        const intl6 = tmp(1126).intl;
        const string4 = intl6.string;
        const t4 = tmp(1126).t;
        if (isForumPost) {
          string4Result = string4(t4.BTs4Kb);
        } else {
          string4Result = string4(t4.wiIevd);
        }
        const obj9 = {
          label: string4Result,
          IconComponent: tmp(4795).XLargeIcon,
          onPress() {
                  const obj = ThreadActionCreatorsDefault;
                  obj.archiveThread(channel, false);
                }
        };
        push5(obj9);
      }
      if (canModerateThread) {
        const buttons5 = obj4.buttons;
        const push7 = buttons5.push;
        const obj10 = { label: null, IconComponent: null, onPress: null };
        const isLockedThreadResult = channel.isLockedThread();
        const intl8 = tmp(1126).intl;
        const string6 = intl8.string;
        const t6 = tmp(1126).t;
        if (isLockedThreadResult) {
          let string6Result;
          if (isForumPost) {
            string6Result = string6(t6["/OKSxp"]);
          } else {
            string6Result = string6(t6["jeyb/W"]);
          }
          obj10.label = string6Result;
          obj10.IconComponent = tmp(10056).LockUnlockedIcon;
          obj10.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            obj.unlockThread(channel);
          };
          push7(obj10);
        } else {
          let string6Result1;
          if (isForumPost) {
            string6Result1 = string6(t6["Ur/0Na"]);
          } else {
            string6Result1 = string6(t6.HoCqm8);
          }
          obj10.label = string6Result1;
          obj10.IconComponent = tmp(5879).LockIcon;
          obj10.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            obj.lockThread(channel);
          };
          push7(obj10);
        }
      }
      if (canModerateThread) {
        let string7Result;
        const buttons6 = obj4.buttons;
        const push8 = buttons6.push;
        const intl9 = tmp(1126).intl;
        const string7 = intl9.string;
        const t7 = tmp(1126).t;
        if (isForumPost) {
          string7Result = string7(t7.NP1yHG);
        } else {
          string7Result = string7(t7["2Mk1TP"]);
        }
        const obj11 = {
          label: string7Result,
          IconComponent: tmp(10058).PencilIcon,
          onPress() {
                  const obj = ChannelSettingsActionCreatorsDefault;
                  obj.setSection(constants3.OVERVIEW);
                  const obj2 = ChannelSettingsActionCreatorsDefault;
                  obj2.open(channel.id);
                }
        };
        push8(obj11);
      }
      const buttons7 = obj4.buttons;
      const push9 = buttons7.push;
      const obj12 = {
        label: intl10.string(tmp(1126).t.WqhZss),
        IconComponent: tmp(4839).LinkIcon,
        isDestructive: false,
        onPress() {
              const obj = ChannelActionSheetUtils;
              const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            }
      };
      intl10 = tmp(1126).intl;
      push9(obj12);
      items.push(obj4);
      const obj13 = { sectionKey: "notifications", buttons: [] };
      const buttons8 = obj13.buttons;
      const push10 = buttons8.push;
      const obj14 = { label: null, IconComponent: null, onPress: null };
      const intl11 = tmp(1126).intl;
      const string8 = intl11.string;
      const t8 = tmp(1126).t;
      if (isMuted) {
        let string8Result;
        if (isForumPost) {
          string8Result = string8(t8["0JQfsP"]);
        } else {
          string8Result = string8(t8["Cq/TzF"]);
        }
        obj14.label = string8Result;
        obj14.IconComponent = tmp(9266).BellIcon;
        obj14.onPress = function onPress() {
          const obj = ThreadActionCreatorsDefault;
          const obj2 = { muted: !isMuted };
          const result = obj.setNotificationSettings(channel, obj2);
        };
        push10(obj14);
      } else {
        let string8Result1;
        if (isForumPost) {
          string8Result1 = string8(t8["nP+Ykd"]);
        } else {
          string8Result1 = string8(t8.bUUd8q);
        }
        obj14.label = string8Result1;
        obj14.IconComponent = tmp(9813).BellSlashIcon;
        obj14.onPress = function onPress() {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const obj = { guildId: channel.getGuildId(), channelId: channel.id };
          const tmp2 = asyncRequire(11064, dependencyMap.paths);
          const combined = "muteSettings" + channel.id;
          openLazy(tmp2, combined, obj);
        };
        push10(obj14);
      }
      const buttons9 = obj13.buttons;
      const push11 = buttons9.push;
      const obj15 = {
        label: intl12.string(tmp(1126).t.h850Ss),
        IconComponent: tmp(10697).ChannelNotificationIcon,
        onPress() {
              const obj = threadActionSheets;
              const result = obj.showThreadNotificationsBottomSheet(channel);
            },
        disableColor: true
      };
      intl12 = tmp(1126).intl;
      push11(obj15);
      items.push(obj13);
      return items;
    }
  }
  const buttons10 = obj.buttons;
  const push2 = buttons10.push;
  const obj16 = {
    label: intl2.string(tmp(1126).t.e6RscS),
    IconComponent: tmp(6458).EyeIcon,
    onPress() {
      const obj = ReadStateActionCreators;
      const obj2 = { section: unpackModuleId.THREAD_ACTION_SHEET, object: constants2.MARK_THREAD_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(channel.id, obj2, true, true);
    }
  };
  intl2 = tmp(1126).intl;
  push2(obj16);
}
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId, ChannelSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let ActionSheetRow;
  let Icon;
  let closure_2;
  let hasJoined;
  let intl;
  let isMuted;
  let obj4;
  let obj5;
  let tmp10;
  let tmp14;
  let tmp23;
  let tmp26;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(35);
  channel = channel.channel;
  const onClose = channel.onClose;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp4 = guildId;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function b() {
      return GuildStore.getGuild(closure_2);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [JoinedThreadsStore];
    cResult[5] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== channel.id) {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
    cResult[6] = channel.id;
    cResult[7] = M;
  } else {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  const tmpResult10 = tmp(504);
  const stateFromStoresObject = tmpResult10.useStateFromStoresObject(tmp10, M);
  ({ isMuted, hasJoined } = stateFromStoresObject);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
    const items2 = [ReadStateStore];
    cResult[8] = items2;
    tmp14 = items2;
  } else {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[9] !== channel.id) {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
    cResult[9] = channel.id;
    cResult[10] = tmp16;
  } else {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  const tmpResult11 = tmp(504);
  const stateFromStores1 = tmpResult11.useStateFromStores(tmp14, tmp16);
  const tmpResult12 = tmp(10054);
  const canMarkChannelUnread = tmpResult12.useCanMarkChannelUnread(channel);
  const tmpResult13 = tmp(6772);
  const canManageThread = tmpResult13.useCanManageThread(channel);
  const tmpResult14 = tmp(6772);
  const isThreadModerator = tmpResult14.useIsThreadModerator(channel);
  const tmpResult15 = tmp(6772);
  const canUnarchiveThread = tmpResult15.useCanUnarchiveThread(channel);
  const tmpResult16 = tmp(6772);
  const canJoinThreadVoice = tmpResult16.useCanJoinThreadVoice(channel);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
    const items3 = [VoiceStateStore];
    cResult[11] = items3;
    tmp23 = items3;
  } else {
    class M {
      constructor() {
        const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
        return obj;
      }
    }
  }
  if (cResult[12] !== channel.id) {
    class E {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
    cResult[12] = channel.id;
    cResult[13] = E;
  } else {
    class E {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
  }
  const tmpResult17 = tmp(504);
  const stateFromStores2 = tmpResult17.useStateFromStores(tmp23, E);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
    const items4 = [VoiceStateStore];
    cResult[14] = items4;
    tmp26 = items4;
  } else {
    class E {
      constructor() {
        return VoiceStateStore.isInChannel(channel.id);
      }
    }
  }
  if (cResult[15] !== channel.id) {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
    cResult[15] = channel.id;
    cResult[16] = D;
  } else {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
  }
  const tmpResult18 = tmp(504);
  const stateFromStores3 = tmpResult18.useStateFromStores(tmp26, D);
  onClose(7546)(channel);
  const tmp30 = onClose(5043)(channel);
  const DeveloperMode = tmp(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const tmp32 = onClose(10704)(channel, "ThreadLongPressActionSheet");
  if (null != stateFromStores) {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
  } else {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
  }
  let obj2 = { channel, guild: stateFromStores, canManageThread, canModerateThread: isThreadModerator, canUnarchiveThread, isMuted, hasUnread: stateFromStores1, canMarkUnread: canMarkChannelUnread, hasJoined, isForumPost: channel.isForumPost(), handleJoinThreadVoice: null, hasActiveThreadVoice: stateFromStores3, favorites: tmp32 };
  if (canJoinThreadVoice) {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
    if (!stateFromStores2) {
      class D {
        constructor() {
          const obj = _modDef12;
          return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        }
      }
    }
  }
  const tmp35Result = getActionSheetButtons(obj2);
  const length = tmp35Result;
  const items5 = [tmp35Result.length, setting, onClose];
  const effect = setting.useEffect(() => {
    const tmp = 0 !== length.length || setting;
    if (!tmp) {
      onClose();
    }
  }, items5);
  const ActionSheet = tmp(6701).ActionSheet;
  if (cResult[21] === tmp30) {
    class D {
      constructor() {
        const obj = _modDef12;
        return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      }
    }
    if (cResult[24] !== onClose) {
      class X {
        constructor(arg0) {
          obj = { hasIcons: true, children: null };
          buttons = channel.buttons;
          Group = closure_0(closure_2[47]).ActionSheetRow.Group;
          obj.children = buttons.map((onPress, index) => {
            let IconComponent;
            let disableColor;
            let isDestructive;
            let label;
            let str;
            let trailing;
            onPress = onPress.onPress;
            ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
            const obj = { label, variant: str, icon: closure_1_13(channel(closure_1_2[47]).ActionSheetRow.Icon, { IconComponent, disableColor }), trailing, onPress() { /* body not rendered: F153337 */ } };
            str = "default";
            const ActionSheetRow = channel(closure_1_2[47]).ActionSheetRow;
            if (isDestructive) {
              str = "danger";
            }
            return closure_1_13(ActionSheetRow, obj, index);
          });
          return jsx(Group, obj, channel.sectionKey);
        }
      }
      cResult[24] = onClose;
      cResult[25] = X;
    } else {
      class X {
        constructor(arg0) {
          obj = { hasIcons: true, children: null };
          buttons = channel.buttons;
          Group = closure_0(closure_2[47]).ActionSheetRow.Group;
          obj.children = buttons.map((onPress, index) => {
            let IconComponent;
            let disableColor;
            let isDestructive;
            let label;
            let str;
            let trailing;
            onPress = onPress.onPress;
            ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
            const obj = { label, variant: str, icon: closure_1_13(channel(closure_1_2[47]).ActionSheetRow.Icon, { IconComponent, disableColor }), trailing, onPress() { /* body not rendered: F153337 */ } };
            str = "default";
            const ActionSheetRow = channel(closure_1_2[47]).ActionSheetRow;
            if (isDestructive) {
              str = "danger";
            }
            return closure_1_13(ActionSheetRow, obj, index);
          });
          return jsx(Group, obj, channel.sectionKey);
        }
      }
    }
    const mapped = tmp35Result.map(X);
    if (cResult[26] === channel.id) {
      class X {
        constructor(arg0) {
          obj = { hasIcons: true, children: null };
          buttons = channel.buttons;
          Group = closure_0(closure_2[47]).ActionSheetRow.Group;
          obj.children = buttons.map((onPress, index) => {
            let IconComponent;
            let disableColor;
            let isDestructive;
            let label;
            let str;
            let trailing;
            onPress = onPress.onPress;
            ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
            const obj = { label, variant: str, icon: closure_1_13(channel(closure_1_2[47]).ActionSheetRow.Icon, { IconComponent, disableColor }), trailing, onPress() { /* body not rendered: F153337 */ } };
            str = "default";
            const ActionSheetRow = channel(closure_1_2[47]).ActionSheetRow;
            if (isDestructive) {
              str = "danger";
            }
            return closure_1_13(ActionSheetRow, obj, index);
          });
          return jsx(Group, obj, channel.sectionKey);
        }
      }
    }
    let tmp41 = setting;
    if (tmp41) {
      class X {
        constructor(arg0) {
          obj = { hasIcons: true, children: null };
          buttons = channel.buttons;
          Group = closure_0(closure_2[47]).ActionSheetRow.Group;
          obj.children = buttons.map((onPress, index) => {
            let IconComponent;
            let disableColor;
            let isDestructive;
            let label;
            let str;
            let trailing;
            onPress = onPress.onPress;
            ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
            const obj = { label, variant: str, icon: closure_1_13(channel(closure_1_2[47]).ActionSheetRow.Icon, { IconComponent, disableColor }), trailing, onPress() { /* body not rendered: F153337 */ } };
            str = "default";
            const ActionSheetRow = channel(closure_1_2[47]).ActionSheetRow;
            if (isDestructive) {
              str = "danger";
            }
            return closure_1_13(ActionSheetRow, obj, index);
          });
          return jsx(Group, obj, channel.sectionKey);
        }
      }
      const obj3 = { hasIcons: true, children: closure_13(ActionSheetRow, obj4) };
      let Group = tmp(6697).ActionSheetRow.Group;
      obj4 = {
        icon: closure_13(Icon, obj5),
        label: intl.string(tmp(1126).t.DQ797g),
        onPress() {
              onClose();
              const obj = ClipboardUtils;
              obj.copy(channel.id);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            }
      };
      ActionSheetRow = tmp(6697).ActionSheetRow;
      obj5 = { IconComponent: tmp(10358).IdIcon };
      Icon = tmp(6697).ActionSheetRow.Icon;
      intl = tmp(1126).intl;
      let str = "developer-actions";
      tmp41 = closure_13(Group, obj3, "developer-actions");
    }
    cResult[26] = channel.id;
    cResult[27] = setting;
    cResult[28] = onClose;
    cResult[29] = tmp41;
  }
  cResult[21] = tmp30;
  cResult[22] = tmp34;
  cResult[23] = closure_13(tmp(10737).ActionSheetIconHeader, { title: tmp30, icon: tmp34 });
  closure_13(tmp(10737).ActionSheetIconHeader, { title: tmp30, icon: tmp34 });
}) : ((channel) => {
  let ActionSheetRow;
  let Icon;
  let closure_2;
  let hasJoined;
  let intl;
  let isMuted;
  let items6;
  let obj16;
  let obj17;
  let tmp19;
  let tmp20;
  let tmp24;
  channel = channel.channel;
  const onClose = channel.onClose;
  let length;
  dependencyMap = channel.getGuildId();
  let tmp = channel;
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj2 = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
    return obj;
  });
  ({ isMuted, hasJoined } = stateFromStoresObject);
  const items2 = [ReadStateStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const obj4 = channel(10054);
  const canMarkChannelUnread = obj4.useCanMarkChannelUnread(channel);
  const obj5 = channel(6772);
  const canManageThread = obj5.useCanManageThread(channel);
  const obj6 = channel(6772);
  const isThreadModerator = obj6.useIsThreadModerator(channel);
  const obj7 = channel(6772);
  const canUnarchiveThread = obj7.useCanUnarchiveThread(channel);
  const obj8 = channel(6772);
  const canJoinThreadVoice = obj8.useCanJoinThreadVoice(channel);
  const items3 = [VoiceStateStore];
  const obj9 = channel(504);
  const stateFromStores2 = obj9.useStateFromStores(items3, () => VoiceStateStore.isInChannel(channel.id));
  const items4 = [VoiceStateStore];
  const obj10 = channel(504);
  const stateFromStores3 = obj10.useStateFromStores(items4, () => {
    const obj = _modDef12;
    return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
  });
  const tmp14 = onClose(7546)(channel);
  const tmp15 = onClose(5043)(channel);
  const DeveloperMode = channel(2028).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp13 = onClose;
  const tmp17 = onClose(10704)(channel, "ThreadLongPressActionSheet");
  if (null != stateFromStores) {
    const obj11 = { guild: stateFromStores, size: tmp(5971).GuildIconSizes.LARGE };
    const tmp13Result = tmp13(5971);
    tmp19 = closure_13(tmp13Result, obj11);
    tmp20 = closure_13;
  } else {
    const obj12 = { size: tmp(1188).AvatarSizes.LARGE, channel };
    const Avatar = tmp(1188).Avatar;
    tmp19 = closure_13(Avatar, obj12);
    tmp20 = closure_13;
  }
  const obj13 = { channel, guild: stateFromStores, canManageThread, canModerateThread: isThreadModerator, canUnarchiveThread, isMuted, hasUnread: stateFromStores1, canMarkUnread: canMarkChannelUnread, hasJoined, isForumPost: channel.isForumPost(), handleJoinThreadVoice: tmp24, hasActiveThreadVoice: stateFromStores3, favorites: tmp17 };
  tmp24 = null;
  if (canJoinThreadVoice) {
    tmp24 = null;
    if (!stateFromStores2) {
      tmp24 = tmp14;
    }
  }
  const tmp23Result = getActionSheetButtons(obj13);
  length = tmp23Result;
  const items5 = [tmp23Result.length, setting, onClose];
  const effect = setting.useEffect(() => {
    const tmp = 0 !== length.length || setting;
    if (!tmp) {
      onClose();
    }
  }, items5);
  const obj14 = { header: tmp20(tmp(10737).ActionSheetIconHeader, { title: tmp15, icon: tmp19 }), children: items6 };
  const ActionSheet = tmp(6701).ActionSheet;
  items6 = [
    tmp23Result.map((buttons) => {
      let obj = {
        hasIcons: true,
        children: buttons.map((onPress, index) => {
          let IconComponent;
          let disableColor;
          let isDestructive;
          let label;
          let str;
          let trailing;
          onPress = onPress.onPress;
          ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
          const obj = {
            label,
            variant: str,
            icon: closure_1_13(channel(closure_1_2[47]).ActionSheetRow.Icon, { IconComponent, disableColor }),
            trailing,
            onPress() {
              onClose();
              onPress();
            }
          };
          str = "default";
          const ActionSheetRow = channel(closure_1_2[47]).ActionSheetRow;
          if (isDestructive) {
            str = "danger";
          }
          return closure_1_13(ActionSheetRow, obj, index);
        })
      };
      buttons = buttons.buttons;
      const Group = ActionSheetRow2.ActionSheetRow.Group;
      return map1(Group, obj, buttons.sectionKey);
    }),

  ];
  if (setting) {
    const obj15 = { hasIcons: true, children: tmp20(ActionSheetRow, obj16) };
    let Group = tmp(6697).ActionSheetRow.Group;
    obj16 = {
      icon: tmp20(Icon, obj17),
      label: intl.string(tmp(1126).t.DQ797g),
      onPress() {
          onClose();
          const obj = ClipboardUtils;
          obj.copy(channel.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        }
    };
    ActionSheetRow = tmp(6697).ActionSheetRow;
    obj17 = { IconComponent: tmp(10358).IdIcon };
    Icon = tmp(6697).ActionSheetRow.Icon;
    intl = tmp(1126).intl;
    let str = "developer-actions";
    setting = tmp20(Group, obj15, "developer-actions");
  }
  items6[1] = setting;
  return closure_14(ActionSheet, obj14);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let stateFromStores;
  let tmp6;
  const obj = channelId(stateFromStores[35]);
  const cResult = obj.c(10);
  const tmp = channelId;
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[36]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === onClose) {
    let tmp8;
    let tmp9;
    if (cResult[4] === stateFromStores) {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    const effect = react.useEffect(tmp8, tmp9);
    if (cResult[7] === onClose) {
      let tmp12;
      if (cResult[8] === stateFromStores) {
        tmp12 = cResult[9];
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
      if (null == stateFromStores) {
        onClose();
      }
    }
  }
  const items1 = [stateFromStores, onClose];
  cResult[3] = onClose;
  cResult[4] = stateFromStores;
  cResult[5] = S;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = S;
}) : ((arg0) => {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
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
let result = size.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default tmp4;