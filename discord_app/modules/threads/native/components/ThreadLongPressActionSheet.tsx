// === Module 16115: ThreadLongPressActionSheet ===

// Module 16115 (ThreadLongPressActionSheet)
import _modDef12 from "module_12" /* 12 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10246 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10955 */;
import threadActionSheets from "threadActionSheets" /* 11312 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

require = fn;
function ThreadLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let items5;
  dependencyMap = channel.getGuildId();
  const tmp = channel;
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj1 = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = channel(504);
  const items2 = [ReadStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  let obj3 = channel(10246);
  const canMarkChannelUnread = obj3.useCanMarkChannelUnread(channel);
  let obj4 = channel(7269);
  const canManageThread = obj4.useCanManageThread(channel);
  let obj5 = channel(7269);
  const isThreadModerator = obj5.useIsThreadModerator(channel);
  let obj6 = channel(7269);
  const canUnarchiveThread = obj6.useCanUnarchiveThread(channel);
  let obj7 = channel(7269);
  const canJoinThreadVoice = obj7.useCanJoinThreadVoice(channel);
  let obj8 = channel(504);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj8.useStateFromStores(items3, () => VoiceStateStore.isInChannel(channel.id));
  let obj9 = channel(504);
  const items4 = [VoiceStateStore];
  const stateFromStores3 = obj9.useStateFromStores(items4, () => !_modDef12.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id)));
  const tmp14 = onClose(7903)(channel);
  const DeveloperMode = channel(1935).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp15 = onClose(4713)(channel, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: tmp(5584).GuildIconSizes.LARGE };
    let tmp19 = closure_13(tmp13(5584), obj);
    let tmp18 = closure_13;
    const tmp13Result = tmp13(5584);
  } else {
    tmp18 = closure_13;
    obj = { size: tmp(1178).AvatarSizes.LARGE, channel };
    tmp19 = closure_13(tmp(1178).Avatar, obj);
  }
  const isForumPostResult = channel.isForumPost();
  let tmp23 = null;
  if (canJoinThreadVoice) {
    tmp23 = null;
    if (!stateFromStores2) {
      tmp23 = tmp14;
    }
  }
  closure_129_0 = channel;
  closure_129_1 = isMuted;
  obj1 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(10243).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!stateFromStores1) {
      if (canMarkChannelUnread) {
        let buttons = obj1.buttons;
        obj2 = { label: null, IconComponent: null, onPress: null };
        const intl = tmp(1114).intl;
        obj2.label = intl.string(tmp(1114).t.RpE9k7);
        obj2.IconComponent = tmp(10244).ChatMarkUnreadIcon;
        obj2.onPress = function onPress() {
          markChannelUnreadDefault(channel.id);
        };
        buttons.push(obj2);
      }
      items5 = [];
      items5.push(obj1);
      const tmp27 = tmp13(10222)(tmp17);
      if (null != tmp27) {
        obj3 = { sectionKey: "favorites", buttons: null };
        const items6 = [tmp27];
        obj3.buttons = items6;
        items5.push(obj3);
      }
      obj4 = { sectionKey: "channel-actions", buttons: [] };
      const buttons1 = obj4.buttons;
      const push = buttons1.push;
      if (hasJoined) {
        const intl4 = tmp(1114).intl;
        const string2 = intl4.string;
        let t2 = tmp(1114).t;
        if (isForumPostResult) {
          let string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        obj5 = {
          label: string2Result,
          IconComponent: tmp(4501).UserMinusIcon,
          isDestructive: true,
          onPress() {
                  ThreadActionCreatorsDefault.leaveThread(channel, "Context Menu");
                }
        };
        t2 = push(obj5);
      } else {
        const intl3 = tmp(1114).intl;
        const string = intl3.string;
        let t = tmp(1114).t;
        if (isForumPostResult) {
          let stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        obj6 = {
          label: stringResult,
          IconComponent: tmp(10032).GroupPlusIcon,
          onPress() {
                  ThreadActionCreatorsDefault.joinThread(channel, "Context Menu");
                }
        };
        push(obj6);
        if (null == tmp23) {
          const threadMetadata = channel.threadMetadata;
          let archived;
          if (threadMetadata != null) {
            archived = threadMetadata.archived;
          }
          if (archived) {
            if (canUnarchiveThread) {
              const buttons2 = obj4.buttons;
              const intl7 = tmp(1114).intl;
              const string5 = intl7.string;
              let t5 = tmp(1114).t;
              if (isForumPostResult) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              obj7 = {
                label: string5Result,
                IconComponent: tmp(4523).ClockIcon,
                onPress() {
                              ThreadActionCreatorsDefault.unarchiveThread(channel, false);
                            }
              };
              t5 = buttons2.push(obj7);
            }
          } else if (canManageThread) {
            const buttons3 = obj4.buttons;
            const intl6 = tmp(1114).intl;
            const string4 = intl6.string;
            const t4 = tmp(1114).t;
            if (isForumPostResult) {
              let string4Result = string4(t4.BTs4Kb);
            } else {
              string4Result = string4(t4.wiIevd);
            }
            obj8 = {
              label: string4Result,
              IconComponent: tmp(4513).XLargeIcon,
              onPress() {
                          ThreadActionCreatorsDefault.archiveThread(channel, false);
                        }
            };
            buttons3.push(obj8);
          }
          if (isThreadModerator) {
            const buttons4 = obj4.buttons;
            const push2 = buttons4.push;
            obj9 = { label: null, IconComponent: null, onPress: null };
            const intl8 = tmp(1114).intl;
            const string6 = intl8.string;
            t = tmp(1114).t;
            if (isLockedThreadResult) {
              if (isForumPostResult) {
                t = t["/OKSxp"];
                let string6Result = string6(t);
              } else {
                string6Result = string6(t["jeyb/W"]);
              }
              obj9.label = string6Result;
              obj9.IconComponent = tmp(10248).LockUnlockedIcon;
              obj9.onPress = function onPress() {
                ThreadActionCreatorsDefault.unlockThread(channel);
              };
              obj9 = push2(obj9);
            } else {
              if (isForumPostResult) {
                let string6Result1 = string6(t["Ur/0Na"]);
              } else {
                string6Result1 = string6(t.HoCqm8);
              }
              obj9[0] = string6Result1;
              obj9[1] = tmp(5095).LockIcon;
              obj9[2] = function onPress() {
                ThreadActionCreatorsDefault.lockThread(channel);
              };
              push2(obj9);
            }
            isLockedThreadResult = channel.isLockedThread();
          }
          if (!isThreadModerator) {
            const buttons5 = obj4.buttons;
            const obj10 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
            const intl10 = tmp(1114).intl;
            obj10.label = intl10.string(tmp(1114).t.WqhZss);
            obj10.IconComponent = tmp(4503).LinkIcon;
            obj10.onPress = function onPress() {
              const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons5.push(obj10);
            items5.push(obj4);
            const obj11 = { sectionKey: "notifications", buttons: [] };
            const buttons6 = obj11.buttons;
            const push3 = buttons6.push;
            let obj12 = { label: null, IconComponent: null, onPress: null };
            const intl11 = tmp(1114).intl;
            const string8 = intl11.string;
            let t1 = tmp(1114).t;
            if (isMuted) {
              if (isForumPostResult) {
                t1 = t1["0JQfsP"];
                let string8Result = string8(t1);
              } else {
                string8Result = string8(t1["Cq/TzF"]);
              }
              obj12.label = string8Result;
              obj12.IconComponent = tmp(9776).BellIcon;
              obj12.onPress = function onPress() {
                const obj = { muted: !onClose };
                const result = obj.setNotificationSettings(channel, obj);
              };
              obj12 = push3(obj12);
            } else {
              if (isForumPostResult) {
                let string8Result1 = string8(t1["nP+Ykd"]);
              } else {
                string8Result1 = string8(t1.bUUd8q);
              }
              obj12[0] = string8Result1;
              obj12[1] = tmp(9059).BellSlashIcon;
              obj12[2] = function onPress() {
                const obj = { guildId: null, channelId: null };
                const combined = "muteSettings" + channel.id;
                obj.guildId = channel.getGuildId();
                obj.channelId = channel.id;
                obj.openLazy(asyncRequireImpl(10144, dependencyMap.paths), combined, obj);
              };
              push3(obj12);
              const buttons7 = obj11.buttons;
              const obj13 = { label: null, IconComponent: null, onPress: null, disableColor: true };
              const intl12 = tmp(1114).intl;
              obj13.label = intl12.string(tmp(1114).t.h850Ss);
              obj13.IconComponent = tmp(10961).ChannelNotificationIcon;
              obj13.onPress = function onPress() {
                const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
              };
              buttons7.push(obj13);
              items5.push(obj11);
              const items7 = [items5.length, setting, onClose];
              const effect = setting.useEffect(() => {
                if (!tmp) {
                  onClose();
                }
              }, items7);
              const obj14 = { header: null, children: null };
              const obj15 = { title: tmp15, icon: tmp19 };
              obj14.header = tmp18(tmp(10998).ActionSheetIconHeader, obj15);
              const items8 = [
                items5.map((buttons) => {
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
                                obj.icon = closure_1_13(channel(dependencyMap[45]).ActionSheetRow.Icon, { IconComponent, disableColor });
                                obj.trailing = trailing;
                                obj.onPress = function onPress() {
                                  onClose();
                                  onPress();
                                };
                                return closure_1_13(channel(dependencyMap[45]).ActionSheetRow, obj, index);
                              });
                              return map1(ActionSheetRow.ActionSheetRow.Group, obj, buttons.sectionKey);
                            }),

              ];
              if (setting) {
                const obj16 = { hasIcons: true, children: null };
                const obj17 = { icon: null, label: null, onPress: null };
                const obj18 = { IconComponent: tmp(10629).IdIcon };
                obj17.icon = tmp18(tmp(7200).ActionSheetRow.Icon, obj18);
                const intl13 = tmp(1114).intl;
                obj17.label = intl13.string(tmp(1114).t.DQ797g);
                obj17.onPress = function onPress() {
                  onClose();
                  ClipboardUtils.copy(channel.id);
                  ToastUtils.presentIdCopied();
                };
                obj16.children = tmp18(tmp(7200).ActionSheetRow, obj17);
                setting = tmp18(tmp(7200).ActionSheetRow.Group, obj16, "developer-actions");
              }
              items8[1] = setting;
              obj14.children = items8;
              return closure_14(tmp(7198).ActionSheet, obj14);
            }
          } else {
            const buttons8 = obj4.buttons;
            const intl9 = tmp(1114).intl;
            const string7 = intl9.string;
            let t6 = tmp(1114).t;
            if (isForumPostResult) {
              let string7Result = string7(t6.NP1yHG);
            } else {
              string7Result = string7(t6["2Mk1TP"]);
            }
            const obj19 = {
              label: string7Result,
              IconComponent: tmp(10250).PencilIcon,
              onPress() {
                          ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                          ChannelSettingsActionCreatorsDefault.open(channel.id);
                        }
            };
            t6 = buttons8.push(obj19);
          }
        } else {
          const buttons9 = obj4.buttons;
          const intl5 = tmp(1114).intl;
          const string3 = intl5.string;
          let t3 = tmp(1114).t;
          if (stateFromStores3) {
            let string3Result = string3(t3["0D/6Rz"]);
          } else {
            string3Result = string3(t3.My50nf);
          }
          const obj20 = { label: string3Result, IconComponent: tmp(7880).PhoneCallIcon, onPress: tmp23 };
          t3 = buttons9.push(obj20);
        }
      }
    }
  }
  const buttons10 = obj1.buttons;
  const obj21 = { label: null, IconComponent: null, onPress: null };
  const intl2 = tmp(1114).intl;
  obj21.label = intl2.string(tmp(1114).t.e6RscS);
  obj21.IconComponent = tmp(6970).EyeIcon;
  obj21.onPress = function onPress() {
    const obj = { section: constants3.THREAD_ACTION_SHEET, object: constants2.MARK_THREAD_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
    obj.ack(channel.id, obj, true, true);
  };
  buttons10.push(obj21);
}
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require("initialize");
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onClose };
    tmp3 = closure_13(ThreadLongPressActionSheetConnected, obj);
  }
  return tmp3;
};