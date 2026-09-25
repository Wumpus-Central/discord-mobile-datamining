// discord_app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ThreadActionCreatorsDefault from "../../ThreadActionCreators.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import markChannelUnreadDefault from "../../../channel/markChannelUnread.tsx";
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
function ThreadLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let items5;
  dependencyMap = channel.getGuildId();
  let tmp = channel;
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => ({
    isMuted: JoinedThreadsStore.isMuted(channel.id),
    hasJoined: JoinedThreadsStore.hasJoined(channel.id),
  }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = channel(504);
  const items2 = [ReadStateStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () =>
    ReadStateStore.hasUnreadOrMentions(channel.id),
  );
  const obj3 = channel(504);
  const canMarkChannelUnread = channel(9698).useCanMarkChannelUnread(channel);
  const obj4 = channel(9698);
  const canManageThread = channel(6682).useCanManageThread(channel);
  const obj5 = channel(6682);
  const isThreadModerator = channel(6682).useIsThreadModerator(channel);
  const obj6 = channel(6682);
  const canUnarchiveThread = channel(6682).useCanUnarchiveThread(channel);
  const obj7 = channel(6682);
  const canJoinThreadVoice = channel(6682).useCanJoinThreadVoice(channel);
  const obj8 = channel(6682);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(504).useStateFromStores(items3, () => VoiceStateStore.isInChannel(channel.id));
  const obj9 = channel(504);
  const items4 = [VoiceStateStore];
  const stateFromStores3 = channel(504).useStateFromStores(
    items4,
    () => !_modDef12.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id)),
  );
  const obj10 = channel(504);
  const tmp14 = onClose(7324)(channel);
  const DeveloperMode = channel(2020).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp15 = onClose(4982)(channel);
  if (null != stateFromStores) {
    const obj11 = { guild: stateFromStores, size: tmp(5891).GuildIconSizes.LARGE };
    let tmp19 = closure_13(tmp13(5891), obj11);
    let tmp18 = closure_13;
    const tmp13Result = tmp13(5891);
  } else {
    tmp18 = closure_13;
    const obj12 = { size: tmp(1177).AvatarSizes.LARGE, channel };
    tmp19 = closure_13(tmp(1177).Avatar, obj12);
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
  const obj13 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(9695).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!stateFromStores1) {
      if (canMarkChannelUnread) {
        let buttons = obj13.buttons;
        const obj14 = { label: null, IconComponent: null, onPress: null };
        const intl = tmp(1115).intl;
        obj14.label = intl.string(tmp(1115).t.RpE9k7);
        obj14.IconComponent = tmp(9696).ChatMarkUnreadIcon;
        obj14.onPress = function onPress() {
          markChannelUnreadDefault(channel.id);
        };
        buttons.push(obj14);
      }
      items5 = [];
      items5.push(obj13);
      const tmp27 = tmp13(9672)(tmp17);
      if (null != tmp27) {
        const obj15 = { sectionKey: "favorites", buttons: null };
        const items6 = [tmp27];
        obj15.buttons = items6;
        items5.push(obj15);
      }
      const obj16 = { sectionKey: "channel-actions", buttons: [] };
      const buttons1 = obj16.buttons;
      const push = buttons1.push;
      if (hasJoined) {
        const intl4 = tmp(1115).intl;
        const string2 = intl4.string;
        let t2 = tmp(1115).t;
        if (isForumPostResult) {
          let string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        const obj17 = {
          label: string2Result,
          IconComponent: tmp(4769).UserMinusIcon,
          isDestructive: true,
          onPress() {
            ThreadActionCreatorsDefault.leaveThread(channel, "Context Menu");
          },
        };
        t2 = push(obj17);
      } else {
        const intl3 = tmp(1115).intl;
        const string = intl3.string;
        const t = tmp(1115).t;
        if (isForumPostResult) {
          let stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        const obj18 = {
          label: stringResult,
          IconComponent: tmp(9481).GroupPlusIcon,
          onPress() {
            ThreadActionCreatorsDefault.joinThread(channel, "Context Menu");
          },
        };
        push(obj18);
        if (null == tmp23) {
          const threadMetadata = channel.threadMetadata;
          let archived;
          if (threadMetadata != null) {
            archived = threadMetadata.archived;
          }
          if (archived) {
            if (canUnarchiveThread) {
              const buttons2 = obj16.buttons;
              const intl7 = tmp(1115).intl;
              const string5 = intl7.string;
              let t5 = tmp(1115).t;
              if (isForumPostResult) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              const obj19 = {
                label: string5Result,
                IconComponent: tmp(4791).ClockIcon,
                onPress() {
                  ThreadActionCreatorsDefault.unarchiveThread(channel, false);
                },
              };
              t5 = buttons2.push(obj19);
            }
          } else if (canManageThread) {
            const buttons3 = obj16.buttons;
            const intl6 = tmp(1115).intl;
            const string4 = intl6.string;
            const t4 = tmp(1115).t;
            if (isForumPostResult) {
              let string4Result = string4(t4.BTs4Kb);
            } else {
              string4Result = string4(t4.wiIevd);
            }
            const obj20 = {
              label: string4Result,
              IconComponent: tmp(4781).XLargeIcon,
              onPress() {
                ThreadActionCreatorsDefault.archiveThread(channel, false);
              },
            };
            buttons3.push(obj20);
          }
          if (isThreadModerator) {
            const buttons4 = obj16.buttons;
            const push2 = buttons4.push;
            let obj21 = { label: null, IconComponent: null, onPress: null };
            const intl8 = tmp(1115).intl;
            const string6 = intl8.string;
            let t1 = tmp(1115).t;
            if (isLockedThreadResult) {
              if (isForumPostResult) {
                t1 = t1["/OKSxp"];
                let string6Result = string6(t1);
              } else {
                string6Result = string6(t1["jeyb/W"]);
              }
              obj21.label = string6Result;
              obj21.IconComponent = tmp(9700).LockUnlockedIcon;
              obj21.onPress = function onPress() {
                ThreadActionCreatorsDefault.unlockThread(channel);
              };
              obj21 = push2(obj21);
            } else {
              if (isForumPostResult) {
                let string6Result1 = string6(t1["Ur/0Na"]);
              } else {
                string6Result1 = string6(t1.HoCqm8);
              }
              obj21[0] = string6Result1;
              obj21[1] = tmp(5402).LockIcon;
              obj21[2] = function onPress() {
                ThreadActionCreatorsDefault.lockThread(channel);
              };
              push2(obj21);
            }
            isLockedThreadResult = channel.isLockedThread();
          }
          if (!isThreadModerator) {
            const buttons5 = obj16.buttons;
            const obj22 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
            const intl10 = tmp(1115).intl;
            obj22.label = intl10.string(tmp(1115).t.WqhZss);
            obj22.IconComponent = tmp(4771).LinkIcon;
            obj22.onPress = function onPress() {
              const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons5.push(obj22);
            items5.push(obj16);
            const obj23 = { sectionKey: "notifications", buttons: [] };
            const buttons6 = obj23.buttons;
            const push3 = buttons6.push;
            let obj24 = { label: null, IconComponent: null, onPress: null };
            const intl11 = tmp(1115).intl;
            const string8 = intl11.string;
            let t7 = tmp(1115).t;
            if (isMuted) {
              if (isForumPostResult) {
                t7 = t7["0JQfsP"];
                let string8Result = string8(t7);
              } else {
                string8Result = string8(t7["Cq/TzF"]);
              }
              obj24.label = string8Result;
              obj24.IconComponent = tmp(9056).BellIcon;
              obj24.onPress = function onPress() {
                const result = ThreadActionCreatorsDefault.setNotificationSettings(channel, { muted: !onClose });
              };
              obj24 = push3(obj24);
            } else {
              if (isForumPostResult) {
                let string8Result1 = string8(t7["nP+Ykd"]);
              } else {
                string8Result1 = string8(t7.bUUd8q);
              }
              obj24[0] = string8Result1;
              obj24[1] = tmp(9602).BellSlashIcon;
              obj24[2] = function onPress() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { guildId: null, channelId: null };
                const combined = "muteSettings" + channel.id;
                obj2.guildId = channel.getGuildId();
                obj2.channelId = channel.id;
                obj.openLazy(asyncRequireImpl(9589, dependencyMap.paths), combined, obj2);
              };
              push3(obj24);
              const buttons7 = obj23.buttons;
              const obj25 = { label: null, IconComponent: null, onPress: null, disableColor: true };
              const intl12 = tmp(1115).intl;
              obj25.label = intl12.string(tmp(1115).t.h850Ss);
              obj25.IconComponent = tmp(10413).ChannelNotificationIcon;
              obj25.onPress = function onPress() {
                const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
              };
              buttons7.push(obj25);
              items5.push(obj23);
              const items7 = [items5.length, setting, onClose];
              const effect = setting.useEffect(() => {
                if (!tmp) {
                  onClose();
                }
                tmp = 0 !== items5.length || setting;
              }, items7);
              const obj26 = { header: null, children: null };
              const obj27 = { title: tmp15, icon: tmp19 };
              obj26.header = tmp18(tmp(10453).ActionSheetIconHeader, obj27);
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
                    obj.icon = closure_1_13(channel(dependencyMap[45]).ActionSheetRow.Icon, {
                      IconComponent,
                      disableColor,
                    });
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
                const obj28 = { hasIcons: true, children: null };
                const obj29 = { icon: null, label: null, onPress: null };
                const obj30 = { IconComponent: tmp(10081).IdIcon };
                obj29.icon = tmp18(tmp(6615).ActionSheetRow.Icon, obj30);
                const intl13 = tmp(1115).intl;
                obj29.label = intl13.string(tmp(1115).t.DQ797g);
                obj29.onPress = function onPress() {
                  onClose();
                  ClipboardUtils.copy(channel.id);
                  ToastUtils.presentIdCopied();
                };
                obj28.children = tmp18(tmp(6615).ActionSheetRow, obj29);
                setting = tmp18(tmp(6615).ActionSheetRow.Group, obj28, "developer-actions");
              }
              items8[1] = setting;
              obj26.children = items8;
              return closure_14(tmp(6613).ActionSheet, obj26);
            }
          } else {
            const buttons8 = obj16.buttons;
            const intl9 = tmp(1115).intl;
            const string7 = intl9.string;
            let t6 = tmp(1115).t;
            if (isForumPostResult) {
              let string7Result = string7(t6.NP1yHG);
            } else {
              string7Result = string7(t6["2Mk1TP"]);
            }
            const obj31 = {
              label: string7Result,
              IconComponent: tmp(9702).PencilIcon,
              onPress() {
                ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                ChannelSettingsActionCreatorsDefault.open(channel.id);
              },
            };
            t6 = buttons8.push(obj31);
          }
        } else {
          const buttons9 = obj16.buttons;
          const intl5 = tmp(1115).intl;
          const string3 = intl5.string;
          let t3 = tmp(1115).t;
          if (stateFromStores3) {
            let string3Result = string3(t3["0D/6Rz"]);
          } else {
            string3Result = string3(t3.My50nf);
          }
          const obj32 = { label: string3Result, IconComponent: tmp(7300).PhoneCallIcon, onPress: tmp23 };
          t3 = buttons9.push(obj32);
        }
      }
    }
  }
  const buttons10 = obj13.buttons;
  const obj33 = { label: null, IconComponent: null, onPress: null };
  const intl2 = tmp(1115).intl;
  obj33.label = intl2.string(tmp(1115).t.e6RscS);
  obj33.IconComponent = tmp(6384).EyeIcon;
  obj33.onPress = function onPress() {
    ReadStateActionCreators.ack(
      channel.id,
      {
        section: constants3.THREAD_ACTION_SHEET,
        object: constants2.MARK_THREAD_AS_READ_BUTTON,
        objectType: constants.ACK_MANUAL,
      },
      true,
      true,
    );
  };
  buttons10.push(obj33);
  tmp17 = onClose(10426)(channel, "ThreadLongPressActionSheet");
}
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_9,
  AnalyticsObjects: c10,
  AnalyticsSections: closure_11,
  ChannelSettingsSections: closure_12,
} = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = closure_13(ThreadLongPressActionSheetConnected, obj2);
  }
  return tmp3;
}
