// discord_app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import closure_5 from "../../../../stores/GuildStore.tsx";
import closure_6 from "../../../../stores/ReadStateStore.tsx";
import closure_7 from "../../../../stores/VoiceStateStore.tsx";
import closure_8 from "../../JoinedThreadsStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function ThreadLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  isMuted = onClose;
  dependencyMap = undefined;
  let setting;
  let items5;
  dependencyMap = channel.getGuildId();
  const tmp = channel;
  let obj = channel(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(closure_2));
  obj1 = channel(589);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMuted: closure_1_8.isMuted(channel.id), hasJoined: closure_1_8.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = channel(589);
  const items2 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => closure_1_6.hasUnreadOrMentions(channel.id));
  let obj3 = channel(10323);
  const canMarkChannelUnread = obj3.useCanMarkChannelUnread(channel);
  let obj4 = channel(6116);
  const canManageThread = obj4.useCanManageThread(channel);
  let obj5 = channel(6116);
  const isThreadModerator = obj5.useIsThreadModerator(channel);
  let obj6 = channel(6116);
  const canUnarchiveThread = obj6.useCanUnarchiveThread(channel);
  let obj7 = channel(6116);
  const canJoinThreadVoice = obj7.useCanJoinThreadVoice(channel);
  let obj8 = channel(589);
  const items3 = [closure_7];
  const stateFromStores2 = obj8.useStateFromStores(items3, () => closure_1_7.isInChannel(channel.id));
  let obj9 = channel(589);
  const items4 = [closure_7];
  const stateFromStores3 = obj9.useStateFromStores(items4, () => !isMuted(paths[36]).isEmpty(closure_1_7.getVoiceStatesForChannel(channel.id)));
  const tmp14 = isMuted(7645)(channel);
  const DeveloperMode = channel(4166).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp15 = isMuted(4674)(channel, true);
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp(6004).GuildIconSizes.LARGE;
    let tmp19 = callback(tmp13(6004), obj);
    let tmp18 = callback;
    const tmp13Result = tmp13(6004);
  } else {
    tmp18 = callback;
    obj = { size: null, channel: null };
    obj[0] = tmp(1297).AvatarSizes.LARGE;
    obj[1] = channel;
    tmp19 = callback(tmp(1297).Avatar, obj);
  }
  const isForumPostResult = channel.isForumPost();
  let tmp23 = null;
  if (canJoinThreadVoice) {
    tmp23 = null;
    if (!stateFromStores2) {
      tmp23 = tmp14;
    }
  }
  obj1 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(10320).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!stateFromStores1) {
      if (canMarkChannelUnread) {
        let buttons = obj1.buttons;
        obj2 = { label: null, IconComponent: null, onPress: null };
        const intl = tmp(1236).intl;
        obj2[0] = intl.string(tmp(1236).t.RpE9k7);
        obj2[1] = tmp(10321).ChatMarkUnreadIcon;
        obj2[2] = function onPress() {
          isMuted(paths[11])(channel.id);
        };
        buttons.push(obj2);
      }
      items5 = [];
      items5.push(obj1);
      const tmp27 = tmp13(10305)(tmp17);
      if (null != tmp27) {
        obj3 = { sectionKey: "favorites", buttons: null };
        const items6 = [tmp27];
        obj3[1] = items6;
        items5.push(obj3);
      }
      obj4 = { sectionKey: "channel-actions", buttons: null };
      obj4[1] = [];
      const buttons1 = obj4.buttons;
      const push = buttons1.push;
      if (hasJoined) {
        const intl4 = tmp(1236).intl;
        const string2 = intl4.string;
        let t2 = tmp(1236).t;
        if (isForumPostResult) {
          let string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        obj5 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        obj5[0] = string2Result;
        obj5[1] = tmp(4419).UserMinusIcon;
        obj5[3] = function onPress() {
          isMuted(paths[16]).leaveThread(channel, "Context Menu");
        };
        t2 = push(obj5);
      } else {
        const intl3 = tmp(1236).intl;
        const string = intl3.string;
        const t = tmp(1236).t;
        if (isForumPostResult) {
          let stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        obj6 = { label: null, IconComponent: null, onPress: null };
        obj6[0] = stringResult;
        obj6[1] = tmp(10115).GroupPlusIcon;
        obj6[2] = function onPress() {
          isMuted(paths[16]).joinThread(channel, "Context Menu");
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
              const intl7 = tmp(1236).intl;
              const string5 = intl7.string;
              let t5 = tmp(1236).t;
              if (isForumPostResult) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              obj7 = { label: null, IconComponent: null, onPress: null };
              obj7[0] = string5Result;
              obj7[1] = tmp(4441).ClockIcon;
              obj7[2] = function onPress() {
                isMuted(paths[16]).unarchiveThread(channel, false);
              };
              t5 = buttons2.push(obj7);
            }
          } else if (canManageThread) {
            const buttons3 = obj4.buttons;
            const intl6 = tmp(1236).intl;
            const string4 = intl6.string;
            const t4 = tmp(1236).t;
            if (isForumPostResult) {
              let string4Result = string4(t4.BTs4Kb);
            } else {
              string4Result = string4(t4.wiIevd);
            }
            obj8 = { label: null, IconComponent: null, onPress: null };
            obj8[0] = string4Result;
            obj8[1] = tmp(4431).XLargeIcon;
            obj8[2] = function onPress() {
              isMuted(paths[16]).archiveThread(channel, false);
            };
            buttons3.push(obj8);
          }
          if (isThreadModerator) {
            const buttons4 = obj4.buttons;
            const push2 = buttons4.push;
            obj9 = { label: null, IconComponent: null, onPress: null };
            const intl8 = tmp(1236).intl;
            const string6 = intl8.string;
            _OKSxp = tmp(1236).t;
            if (isLockedThreadResult) {
              if (isForumPostResult) {
                _OKSxp = _OKSxp["/OKSxp"];
                let string6Result = string6(_OKSxp);
              } else {
                string6Result = string6(_OKSxp["jeyb/W"]);
              }
              obj9[0] = string6Result;
              obj9[1] = tmp(10325).LockUnlockedIcon;
              obj9[2] = function onPress() {
                isMuted(paths[16]).unlockThread(channel);
              };
              obj9 = push2(obj9);
            } else {
              if (isForumPostResult) {
                let string6Result1 = string6(_OKSxp["Ur/0Na"]);
              } else {
                string6Result1 = string6(_OKSxp.HoCqm8);
              }
              obj9[0] = string6Result1;
              obj9[1] = tmp(5044).LockIcon;
              obj9[2] = function onPress() {
                isMuted(paths[16]).lockThread(channel);
              };
              push2(obj9);
            }
            isLockedThreadResult = channel.isLockedThread();
          }
          if (!isThreadModerator) {
            const buttons5 = obj4.buttons;
            const obj10 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
            const intl10 = tmp(1236).intl;
            obj10[0] = intl10.string(tmp(1236).t.WqhZss);
            obj10[1] = tmp(4421).LinkIcon;
            obj10[3] = function onPress() {
              const result = channel(paths[26]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons5.push(obj10);
            items5.push(obj4);
            const obj11 = { sectionKey: "notifications", buttons: null };
            obj11[1] = [];
            const buttons6 = obj11.buttons;
            const push3 = buttons6.push;
            let obj12 = { label: null, IconComponent: null, onPress: null };
            const intl11 = tmp(1236).intl;
            const string8 = intl11.string;
            if (isMuted) {
              if (isForumPostResult) {
                let string8Result = string8(_0JQfsP);
              } else {
                string8Result = string8(_0JQfsP["Cq/TzF"]);
              }
              obj12[0] = string8Result;
              obj12[1] = tmp(9746).BellIcon;
              obj12[2] = function onPress() {
                let obj = isMuted(paths[16]);
                obj = { muted: !isMuted };
                const result = obj.setNotificationSettings(channel, obj);
              };
              obj12 = push3(obj12);
            } else {
              if (isForumPostResult) {
                let string8Result1 = string8(_0JQfsP["nP+Ykd"]);
              } else {
                string8Result1 = string8(_0JQfsP.bUUd8q);
              }
              obj12[0] = string8Result1;
              obj12[1] = tmp(10238).BellSlashIcon;
              obj12[2] = function onPress() {
                let obj = isMuted(paths[28]);
                obj = { guildId: null, channelId: null };
                const combined = "muteSettings" + channel.id;
                obj[0] = channel.getGuildId();
                obj[1] = channel.id;
                obj.openLazy(channel(paths[30])(paths[29], paths.paths), combined, obj);
              };
              push3(obj12);
              const buttons7 = obj11.buttons;
              const obj13 = { label: null, IconComponent: null, onPress: null, disableColor: true };
              const intl12 = tmp(1236).intl;
              obj13[0] = intl12.string(tmp(1236).t.h850Ss);
              obj13[1] = tmp(10698).ChannelNotificationIcon;
              obj13[2] = function onPress() {
                const result = channel(paths[33]).showThreadNotificationsBottomSheet(channel);
              };
              buttons7.push(obj13);
              items5.push(obj11);
              const items7 = [items5.length, setting, onClose];
              const effect = setting.useEffect(() => {
                if (!tmp) {
                  isMuted();
                }
              }, items7);
              const obj14 = { header: null, children: null };
              const obj15 = { title: null, icon: null };
              obj15[0] = tmp15;
              obj15[1] = tmp19;
              obj14[0] = tmp18(tmp(10735).ActionSheetIconHeader, obj15);
              const items8 = [
                items5.map((buttons) => {
                              buttons = buttons.buttons;
                              return closure_1_13(channel(paths[45]).ActionSheetRow.Group, {
                                hasIcons: true,
                                children: buttons.map((onPress) => {
                                  onPress = onPress.onPress;
                                  ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
                                  const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
                                  let str = "default";
                                  if (isDestructive) {
                                    str = "danger";
                                  }
                                  obj[1] = str;
                                  obj[2] = closure_1_13(closure_1_0(closure_1_2[45]).ActionSheetRow.Icon, { IconComponent, disableColor });
                                  obj[3] = trailing;
                                  obj[4] = function onPress() {
                                    closure_1_1();
                                    onPress();
                                  };
                                  return closure_1_13(closure_1_0(closure_1_2[45]).ActionSheetRow, obj, arg1);
                                })
                              }, buttons.sectionKey);
                            }),

              ];
              if (setting) {
                const obj16 = { hasIcons: true, children: null };
                const obj17 = { icon: null, label: null, onPress: null };
                const obj18 = { IconComponent: null };
                obj18[0] = tmp(9047).IdIcon;
                obj17[0] = tmp18(tmp(5991).ActionSheetRow.Icon, obj18);
                const intl13 = tmp(1236).intl;
                obj17[1] = intl13.string(tmp(1236).t.DQ797g);
                obj17[2] = function onPress() {
                  isMuted();
                  channel(paths[47]).copy(channel.id);
                  const obj = channel(paths[47]);
                  channel(paths[48]).presentIdCopied();
                };
                obj16[1] = tmp18(tmp(5991).ActionSheetRow, obj17);
                setting = tmp18(tmp(5991).ActionSheetRow.Group, obj16, "developer-actions");
              }
              items8[1] = setting;
              obj14[1] = items8;
              return closure_14(tmp(5989).ActionSheet, obj14);
            }
          } else {
            const buttons8 = obj4.buttons;
            const intl9 = tmp(1236).intl;
            const string7 = intl9.string;
            let t6 = tmp(1236).t;
            if (isForumPostResult) {
              let string7Result = string7(t6.NP1yHG);
            } else {
              string7Result = string7(t6["2Mk1TP"]);
            }
            const obj19 = { label: null, IconComponent: null, onPress: null };
            obj19[0] = string7Result;
            obj19[1] = tmp(10327).PencilIcon;
            obj19[2] = function onPress() {
              isMuted(paths[24]).setSection(closure_1_12.OVERVIEW);
              const obj = isMuted(paths[24]);
              isMuted(paths[24]).open(channel.id);
            };
            t6 = buttons8.push(obj19);
          }
        } else {
          const buttons9 = obj4.buttons;
          const intl5 = tmp(1236).intl;
          const string3 = intl5.string;
          let t3 = tmp(1236).t;
          if (stateFromStores3) {
            let string3Result = string3(t3["0D/6Rz"]);
          } else {
            string3Result = string3(t3.My50nf);
          }
          const obj20 = { label: null, IconComponent: null, onPress: null };
          obj20[0] = string3Result;
          obj20[1] = tmp(7623).PhoneCallIcon;
          obj20[2] = tmp23;
          t3 = buttons9.push(obj20);
        }
      }
    }
  }
  const buttons10 = obj1.buttons;
  const obj21 = { label: null, IconComponent: null, onPress: null };
  const intl2 = tmp(1236).intl;
  obj21[0] = intl2.string(tmp(1236).t.e6RscS);
  obj21[1] = tmp(7743).EyeIcon;
  obj21[2] = function onPress() {
    let obj = channel(paths[13]);
    obj = { section: closure_1_11.THREAD_ACTION_SHEET, object: closure_1_10.MARK_THREAD_AS_READ_BUTTON, objectType: closure_1_9.ACK_MANUAL };
    obj.ack(channel.id, obj, true, true);
  };
  buttons10.push(obj21);
}
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId, ChannelSettingsSections: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require(stateFromStores[34]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(closure_0));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: null, onClose: null };
    obj[0] = stateFromStores;
    obj[1] = onClose;
    tmp3 = callback(ThreadLongPressActionSheetConnected, obj);
  }
  return tmp3;
};