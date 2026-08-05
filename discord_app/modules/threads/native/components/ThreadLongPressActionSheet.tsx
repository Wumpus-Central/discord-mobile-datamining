// discord_app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
import PencilIcon from "PencilIcon";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateVoiceState from "updateVoiceState";
import storeThread from "storeThread";
import ME from "ME";
import jsxProd from "LinkIcon";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function ThreadLongPressActionSheetConnected(channel) {
  let hasJoined;
  let isMuted;
  channel = channel.channel;
  const onClose = channel.onClose;
  isMuted = onClose;
  let dependencyMap;
  let setting;
  let items4;
  dependencyMap = channel.getGuildId();
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(closure_2));
  let obj1 = channel(589);
  const items1 = [storeThread];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMuted: outer1_7.isMuted(channel.id), hasJoined: outer1_7.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = channel(5783);
  const canManageThread = obj2.useCanManageThread(channel);
  let obj3 = channel(5783);
  const isThreadModerator = obj3.useIsThreadModerator(channel);
  let obj4 = channel(5783);
  const canUnarchiveThread = obj4.useCanUnarchiveThread(channel);
  let obj5 = channel(5783);
  const canJoinThreadVoice = obj5.useCanJoinThreadVoice(channel);
  let obj6 = channel(589);
  const items2 = [updateVoiceState];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => outer1_6.isInChannel(channel.id));
  let obj7 = channel(589);
  const items3 = [updateVoiceState];
  const stateFromStores2 = obj7.useStateFromStores(items3, () => !isMuted(paths[32]).isEmpty(outer1_6.getVoiceStatesForChannel(channel.id)));
  const tmp12 = isMuted(8194)(channel);
  const DeveloperMode = channel(3928).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp13 = isMuted(4445)(channel, true);
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp(5646).GuildIconSizes.LARGE;
    let tmp17 = callback(tmp11(5646), obj);
    let tmp16 = callback;
    const tmp11Result = tmp11(5646);
  } else {
    tmp16 = callback;
    obj = { size: null, channel: null };
    obj[0] = tmp(1297).AvatarSizes.LARGE;
    obj[1] = channel;
    tmp17 = callback(tmp(1297).Avatar, obj);
  }
  const isForumPostResult = channel.isForumPost();
  let tmp21 = null;
  if (canJoinThreadVoice) {
    tmp21 = null;
    if (!stateFromStores1) {
      tmp21 = tmp12;
    }
  }
  items4 = [];
  obj1 = { sectionKey: "mark-as-read", buttons: null };
  obj2 = { label: null, IconComponent: null, onPress: null };
  const intl = tmp(1236).intl;
  obj2[0] = intl.string(channel(1236).t.e6RscS);
  obj2[1] = channel(8280).EyeIcon;
  obj2[2] = function onPress() {
    let obj = channel(paths[9]);
    obj = { section: outer1_10.THREAD_ACTION_SHEET, object: outer1_9.MARK_THREAD_AS_READ_BUTTON, objectType: outer1_8.ACK_MANUAL };
    obj.ack(channel.id, obj, true, true);
  };
  const items5 = [obj2];
  obj1[1] = items5;
  items4.push(obj1);
  const tmp23 = isMuted(9598)(isMuted(10082)(channel, "ThreadLongPressActionSheet"));
  if (null != tmp23) {
    obj3 = { sectionKey: "favorites", buttons: null };
    const items6 = [tmp23];
    obj3[1] = items6;
    items4.push(obj3);
  }
  obj4 = { sectionKey: "channel-actions", buttons: [] };
  let buttons = obj4.buttons;
  const push = buttons.push;
  if (hasJoined) {
    const intl3 = tmp(1236).intl;
    const string2 = intl3.string;
    let t2 = tmp(1236).t;
    if (isForumPostResult) {
      let string2Result = string2(t2["2LsZdT"]);
    } else {
      string2Result = string2(t2["fa/84m"]);
    }
    obj5 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
    obj5[0] = string2Result;
    obj5[1] = tmp(4197).UserMinusIcon;
    obj5[3] = function onPress() {
      isMuted(paths[12]).leaveThread(channel, "Context Menu");
    };
    t2 = push(obj5);
  } else {
    const intl2 = tmp(1236).intl;
    const string = intl2.string;
    const t = tmp(1236).t;
    if (isForumPostResult) {
      let stringResult = string(t.ihLPiO);
    } else {
      stringResult = string(t["10kukS"]);
    }
    obj6 = { label: null, IconComponent: null, onPress: null };
    obj6[0] = stringResult;
    obj6[1] = tmp(9608).GroupPlusIcon;
    obj6[2] = function onPress() {
      isMuted(paths[12]).joinThread(channel, "Context Menu");
    };
    push(obj6);
    if (null == tmp21) {
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons1 = obj4.buttons;
          const intl6 = tmp(1236).intl;
          const string5 = intl6.string;
          let t5 = tmp(1236).t;
          if (isForumPostResult) {
            let string5Result = string5(t5.cnRubV);
          } else {
            string5Result = string5(t5.S9E4G7);
          }
          obj7 = { label: null, IconComponent: null, onPress: null };
          obj7[0] = string5Result;
          obj7[1] = tmp(4219).ClockIcon;
          obj7[2] = function onPress() {
            isMuted(paths[12]).unarchiveThread(channel, false);
          };
          t5 = buttons1.push(obj7);
        }
      } else if (canManageThread) {
        const buttons2 = obj4.buttons;
        const intl5 = tmp(1236).intl;
        const string4 = intl5.string;
        const t4 = tmp(1236).t;
        if (isForumPostResult) {
          let string4Result = string4(t4.BTs4Kb);
        } else {
          string4Result = string4(t4.wiIevd);
        }
        const obj8 = { label: null, IconComponent: null, onPress: null };
        obj8[0] = string4Result;
        obj8[1] = tmp(4209).XLargeIcon;
        obj8[2] = function onPress() {
          isMuted(paths[12]).archiveThread(channel, false);
        };
        buttons2.push(obj8);
      }
      if (isThreadModerator) {
        const buttons3 = obj4.buttons;
        const push2 = buttons3.push;
        let obj9 = { label: null, IconComponent: null, onPress: null };
        const intl7 = tmp(1236).intl;
        const string6 = intl7.string;
        _OKSxp = tmp(1236).t;
        if (isLockedThreadResult) {
          if (isForumPostResult) {
            _OKSxp = _OKSxp["/OKSxp"];
            let string6Result = string6(_OKSxp);
          } else {
            string6Result = string6(_OKSxp["jeyb/W"]);
          }
          obj9[0] = string6Result;
          obj9[1] = tmp(9789).LockUnlockedIcon;
          obj9[2] = function onPress() {
            isMuted(paths[12]).unlockThread(channel);
          };
          obj9 = push2(obj9);
        } else {
          if (isForumPostResult) {
            let string6Result1 = string6(_OKSxp["Ur/0Na"]);
          } else {
            string6Result1 = string6(_OKSxp.HoCqm8);
          }
          obj9[0] = string6Result1;
          obj9[1] = tmp(4774).LockIcon;
          obj9[2] = function onPress() {
            isMuted(paths[12]).lockThread(channel);
          };
          push2(obj9);
        }
        isLockedThreadResult = channel.isLockedThread();
      }
      if (!isThreadModerator) {
        const buttons4 = obj4.buttons;
        const obj10 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
        const intl9 = tmp(1236).intl;
        obj10[0] = intl9.string(tmp(1236).t.WqhZss);
        obj10[1] = tmp(4199).LinkIcon;
        obj10[3] = function onPress() {
          const result = channel(paths[22]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
        };
        buttons4.push(obj10);
        items4.push(obj4);
        const obj11 = { sectionKey: "notifications", buttons: null };
        obj11[1] = [];
        const buttons5 = obj11.buttons;
        const push3 = buttons5.push;
        let obj12 = { label: null, IconComponent: null, onPress: null };
        const intl10 = tmp(1236).intl;
        const string8 = intl10.string;
        if (isMuted) {
          if (isForumPostResult) {
            let string8Result = string8(_0JQfsP);
          } else {
            string8Result = string8(_0JQfsP["Cq/TzF"]);
          }
          obj12[0] = string8Result;
          obj12[1] = tmp(9030).BellIcon;
          obj12[2] = function onPress() {
            let obj = isMuted(paths[12]);
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
          obj12[1] = tmp(9618).BellSlashIcon;
          obj12[2] = function onPress() {
            let obj = isMuted(paths[24]);
            obj = { guildId: null, channelId: null };
            const combined = "muteSettings" + channel.id;
            obj[0] = channel.getGuildId();
            obj[1] = channel.id;
            obj.openLazy(channel(paths[26])(paths[25], paths.paths), combined, obj);
          };
          push3(obj12);
          const buttons6 = obj11.buttons;
          const obj13 = { label: null, IconComponent: null, onPress: null, disableColor: true };
          const intl11 = tmp(1236).intl;
          obj13[0] = intl11.string(tmp(1236).t.h850Ss);
          obj13[1] = tmp(9620).ChannelNotificationIcon;
          obj13[2] = function onPress() {
            const result = channel(paths[29]).showThreadNotificationsBottomSheet(channel);
          };
          buttons6.push(obj13);
          items4.push(obj11);
          const items7 = [items4.length, setting, onClose];
          const effect = setting.useEffect(() => {
            if (!tmp) {
              isMuted();
            }
          }, items7);
          const obj14 = { header: null, children: null };
          const obj15 = { title: null, icon: null };
          obj15[0] = tmp13;
          obj15[1] = tmp17;
          obj14[0] = tmp16(tmp(10083).ActionSheetIconHeader, obj15);
          const items8 = [
            items4.map((buttons) => {
                      let obj = { hasIcons: true, children: null };
                      buttons = buttons.buttons;
                      obj[1] = buttons.map((onPress) => {
                        let IconComponent;
                        let disableColor;
                        let isDestructive;
                        let label;
                        let trailing;
                        onPress = onPress.onPress;
                        ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
                        const obj = { label, variant: null, icon: null, trailing: null, onPress: null };
                        let str = "default";
                        if (isDestructive) {
                          str = "danger";
                        }
                        obj[1] = str;
                        obj[2] = outer1_12(outer1_0(outer1_2[41]).ActionSheetRow.Icon, { IconComponent, disableColor });
                        obj[3] = trailing;
                        obj[4] = function onPress() {
                          outer1_1();
                          onPress();
                        };
                        return outer1_12(outer1_0(outer1_2[41]).ActionSheetRow, obj, arg1);
                      });
                      return outer1_12(channel(paths[41]).ActionSheetRow.Group, obj, buttons.sectionKey);
                    }),

          ];
          if (setting) {
            const obj16 = { hasIcons: true, children: null };
            const obj17 = { icon: null, label: null, onPress: null };
            const obj18 = { IconComponent: null };
            obj18[0] = tmp(9435).IdIcon;
            obj17[0] = tmp16(tmp(5633).ActionSheetRow.Icon, obj18);
            const intl12 = tmp(1236).intl;
            obj17[1] = intl12.string(tmp(1236).t.DQ797g);
            obj17[2] = function onPress() {
              isMuted();
              channel(paths[43]).copy(channel.id);
              const obj = channel(paths[43]);
              channel(paths[44]).presentIdCopied();
            };
            obj16[1] = tmp16(tmp(5633).ActionSheetRow, obj17);
            setting = tmp16(tmp(5633).ActionSheetRow.Group, obj16, "developer-actions");
          }
          items8[1] = setting;
          obj14[1] = items8;
          return closure_13(tmp(5631).ActionSheet, obj14);
        }
      } else {
        const buttons7 = obj4.buttons;
        const intl8 = tmp(1236).intl;
        const string7 = intl8.string;
        let t6 = tmp(1236).t;
        if (isForumPostResult) {
          let string7Result = string7(t6.NP1yHG);
        } else {
          string7Result = string7(t6["2Mk1TP"]);
        }
        const obj19 = { label: null, IconComponent: null, onPress: null };
        obj19[0] = string7Result;
        obj19[1] = tmp(9562).PencilIcon;
        obj19[2] = function onPress() {
          isMuted(paths[20]).setSection(outer1_11.OVERVIEW);
          const obj = isMuted(paths[20]);
          isMuted(paths[20]).open(channel.id);
        };
        t6 = buttons7.push(obj19);
      }
    } else {
      const buttons8 = obj4.buttons;
      const intl4 = tmp(1236).intl;
      const string3 = intl4.string;
      let t3 = tmp(1236).t;
      if (stateFromStores2) {
        let string3Result = string3(t3["0D/6Rz"]);
      } else {
        string3Result = string3(t3.My50nf);
      }
      const obj20 = { label: null, IconComponent: null, onPress: null };
      obj20[0] = string3Result;
      obj20[1] = tmp(8181).PhoneCallIcon;
      obj20[2] = tmp21;
      t3 = buttons8.push(obj20);
    }
  }
}
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10, ChannelSettingsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require(stateFromStores[30]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(closure_0));
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