// === Module 10201: ForumPostLongPressActionSheet ===

// Module 10201 (ForumPostLongPressActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "initialize" /* 4025 */;
import closure_4 from "storeThread" /* 4026 */;
import closure_5 from "updateState" /* 7309 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;
import { ChannelFlags } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: c9, AnalyticsSections: c10, ChannelSettingsSections: unpackModuleId } = ME);
let result = require("set").fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  thread = thread.thread;
  ({ parentChannel, onClose: stateFromStores2 } = thread);
  let isThreadModerator = thread.getGuildId();
  const tmp = thread;
  const tmp2 = isThreadModerator;
  let obj = thread(isThreadModerator[44]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(isThreadModerator));
  obj1 = thread(isThreadModerator[44]);
  const items1 = [canManageThread];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => canManageThread.hasJoined(thread.id));
  let obj2 = thread(isThreadModerator[44]);
  const items2 = [canManageThread];
  stateFromStores2 = obj2.useStateFromStores(items2, () => canManageThread.isMuted(thread.id));
  let obj3 = thread(isThreadModerator[44]);
  const items3 = [closure_3];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => {
    let isLurkingResult = null != isThreadModerator;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  });
  let obj4 = thread(isThreadModerator[45]);
  const firstMessage = obj4.useFirstForumPostMessage(thread).firstMessage;
  let obj5 = thread(isThreadModerator[46]);
  isThreadModerator = obj5.useIsThreadModerator(parentChannel);
  let obj6 = thread(isThreadModerator[46]);
  canManageThread = obj6.useCanManageThread(thread);
  let obj7 = thread(isThreadModerator[46]);
  const canUnarchiveThread = obj7.useCanUnarchiveThread(thread);
  let obj8 = thread(isThreadModerator[47]);
  const existingPin = obj8.useExistingPin(thread);
  let obj9 = thread(isThreadModerator[44]);
  const items4 = [existingPin];
  const stateFromStores4 = obj9.useStateFromStores(items4, () => {
    let num = existingPin.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(isThreadModerator[48]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj10 = thread(isThreadModerator[44]);
  const items5 = [parentChannel];
  let id;
  const stateFromStores5 = obj10.useStateFromStores(items5, () => parentChannel.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const tmp16 = stateFromStores2(tmp2[49])(thread, true);
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp(tmp2[51]).GuildIconSizes.LARGE;
    let tmp19 = jsx(tmp15(tmp2[51]), { guild: null, size: null });
    let tmp18 = jsx;
    const tmp15Result = tmp15(tmp2[51]);
  } else {
    tmp18 = jsx;
    obj = { size: null, channel: null };
    obj[0] = tmp(tmp2[40]).AvatarSizes.LARGE;
    obj[1] = thread;
    tmp19 = jsx(tmp(tmp2[40]).Avatar, { size: null, channel: null });
  }
  let tmp22 = stateFromStores5 === id;
  closure_3 = tmp22;
  const threadMetadata = thread.threadMetadata;
  let archived;
  if (threadMetadata != null) {
    archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    const locked = threadMetadata2.locked;
  }
  const items6 = [];
  const tmp17 = stateFromStores2(tmp2[50])(thread, "ForumPostLongPressActionSheet");
  const tmp25 = stateFromStores2(tmp2[9])(tmp17);
  if (null != tmp25) {
    obj1 = { sectionKey: "favorites", buttons: null };
    const items7 = [tmp25];
    obj1[1] = items7;
    items6.push(obj1);
  }
  obj2 = { sectionKey: "mark-as-read", buttons: null };
  obj3 = { label: null, IconComponent: null, onPress: null };
  let intl = tmp(tmp2[10]).intl;
  obj3[0] = intl.string(tmp(tmp2[10]).t.e6RscS);
  obj3[1] = tmp(tmp2[11]).EyeIcon;
  obj3[2] = function onPress() {
    let obj = thread(isThreadModerator[12]);
    obj = { object: closure_1_9.MARK_FORUM_POST_AS_READ_BUTTON, objectType: closure_1_8.ACK_MANUAL };
    obj.ack(thread.id, obj, true, true);
  };
  const items8 = [obj3];
  obj2[1] = items8;
  items6.push(obj2);
  obj4 = { sectionKey: "channel-actions", buttons: [] };
  if (!stateFromStores3) {
    let buttons = obj4.buttons;
    const push = buttons.push;
    obj5 = { label: null, IconComponent: null, onPress: null };
    let intl2 = tmp(tmp2[10]).intl;
    const string = intl2.string;
    const t = tmp(tmp2[10]).t;
    if (stateFromStores1) {
      obj5[0] = string(t["2LsZdT"]);
      obj5[1] = tmp(tmp2[13]).UserMinusIcon;
      obj5[2] = function onPress() {
        return stateFromStores2(isThreadModerator[14]).leaveThread(thread, "Context Menu");
      };
      push(obj5);
    } else {
      obj5[0] = string(t.ihLPiO);
      obj5[1] = tmp(tmp2[15]).BellIcon;
      obj5[2] = function onPress() {
        return stateFromStores2(isThreadModerator[14]).joinThread(thread, "Context Menu");
      };
      push(obj5);
    }
  }
  if (archived) {
    if (canUnarchiveThread) {
      const buttons1 = obj4.buttons;
      obj6 = { label: null, IconComponent: null, onPress: null };
      let intl4 = tmp(tmp2[10]).intl;
      obj6[0] = intl4.string(tmp(tmp2[10]).t.cnRubV);
      obj6[1] = tmp(tmp2[16]).ClockIcon;
      obj6[2] = function onPress() {
        stateFromStores2(isThreadModerator[14]).unarchiveThread(thread, false);
      };
      buttons1.push(obj6);
    }
  } else if (canManageThread) {
    const buttons2 = obj4.buttons;
    obj7 = { label: null, IconComponent: null, onPress: null };
    let intl3 = tmp(tmp2[10]).intl;
    obj7[0] = intl3.string(tmp(tmp2[10]).t.BTs4Kb);
    obj7[1] = tmp(tmp2[17]).XLargeIcon;
    obj7[2] = function onPress() {
      stateFromStores2(isThreadModerator[14]).archiveThread(thread, false);
    };
    buttons2.push(obj7);
  }
  if (canManageThread) {
    const buttons3 = obj4.buttons;
    const push2 = buttons3.push;
    obj8 = { label: null, IconComponent: null, onPress: null };
    let intl5 = tmp(tmp2[10]).intl;
    const string2 = intl5.string;
    const t2 = tmp(tmp2[10]).t;
    if (locked) {
      obj8[0] = string2(t2["/OKSxp"]);
      obj8[1] = tmp(tmp2[18]).LockUnlockedIcon;
      obj8[2] = function onPress() {
        stateFromStores2(isThreadModerator[14]).unlockThread(thread);
      };
      push2(obj8);
    } else {
      obj8[0] = string2(t2["Ur/0Na"]);
      obj8[1] = tmp(tmp2[19]).LockIcon;
      obj8[2] = function onPress() {
        stateFromStores2(isThreadModerator[14]).lockThread(thread);
      };
      push2(obj8);
    }
  }
  let isLockedThreadResult = !isThreadModerator;
  if (!isThreadModerator) {
    isLockedThreadResult = thread.isLockedThread();
  }
  let tmp35 = tmp22;
  if (tmp22) {
    tmp35 = !isLockedThreadResult;
  }
  if (tmp35) {
    const buttons4 = obj4.buttons;
    obj9 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp(tmp2[10]).intl;
    obj9[0] = intl6.string(tmp(tmp2[10]).t.NP1yHG);
    obj9[1] = tmp(tmp2[20]).PencilIcon;
    obj9[2] = function onPress() {
      let obj = thread(isThreadModerator[21]);
      obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: stateFromStores2(isThreadModerator[22]).castChannelIdAsMessageId(thread.id), isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
      const items = [stateFromStores2(isThreadModerator[23]).FORUM_CHANNEL, stateFromStores2(isThreadModerator[23]).GUILD_CHANNEL];
      obj[5] = items;
      obj = { section: closure_1_10.CHANNEL_LIST, object: closure_1_9.CONTEXT_MENU };
      obj[6] = obj;
      const result = obj.openCreateForumPostModal(obj);
    };
    buttons4.push(obj9);
  }
  if (canManageThread) {
    const buttons5 = obj4.buttons;
    obj10 = { label: null, IconComponent: null, onPress: null };
    let intl7 = tmp(tmp2[10]).intl;
    obj10[0] = intl7.string(tmp(tmp2[10]).t.SGuVbR);
    obj10[1] = tmp(tmp2[24]).SettingsIcon;
    obj10[2] = function onPress() {
      stateFromStores2(isThreadModerator[25]).setSection(closure_1_11.OVERVIEW);
      const obj = stateFromStores2(isThreadModerator[25]);
      stateFromStores2(isThreadModerator[25]).open(thread.id);
    };
    buttons5.push(obj10);
    if (parentChannel.availableTags.length > 0) {
      const buttons6 = obj4.buttons;
      const obj11 = { label: null, IconComponent: null, onPress: null };
      const intl8 = tmp(tmp2[10]).intl;
      obj11[0] = intl8.string(tmp(tmp2[10]).t["436ZFw"]);
      obj11[1] = tmp(tmp2[26]).TagsIcon;
      obj11[2] = function onPress() {
        let obj = stateFromStores2(isThreadModerator[27]);
        obj = { thread, parentChannel, canManageThread };
        obj.openLazy(thread(isThreadModerator[29])(isThreadModerator[28], isThreadModerator.paths), "ForumPostTagsActionSheet", obj);
      };
      buttons6.push(obj11);
    }
  }
  const buttons7 = obj4.buttons;
  const obj12 = { label: null, IconComponent: null, onPress: null };
  const intl9 = tmp(tmp2[10]).intl;
  obj12[0] = intl9.string(tmp(tmp2[10]).t.WqhZss);
  obj12[1] = tmp(tmp2[30]).LinkIcon;
  obj12[2] = function onPress() {
    let obj = thread(isThreadModerator[31]);
    obj = { section: closure_1_10.CONTEXT_MENU };
    const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj);
  };
  buttons7.push(obj12);
  items6.push(obj4);
  if (stateFromStores3) {
    const obj13 = { sectionKey: "admin-actions", buttons: null };
    obj13[1] = [];
    if (isThreadModerator) {
      const buttons8 = obj13.buttons;
      const push4 = buttons8.push;
      const obj14 = { label: null, IconComponent: null, onPress: null };
      const intl11 = tmp(tmp2[10]).intl;
      const string4 = intl11.string;
      const t3 = tmp(tmp2[10]).t;
      if (hasFlagResult) {
        obj14[0] = string4(t3.trD8ao);
        obj14[1] = tmp(tmp2[36]).PinIcon;
        obj14[2] = function onPress() {
          return stateFromStores2(isThreadModerator[14]).unpin(thread);
        };
        push4(obj14);
      } else {
        obj14[0] = string4(t3.EnaWhu);
        obj14[1] = tmp(tmp2[36]).PinIcon;
        obj14[2] = function onPress() {
          if (null != existingPin) {
            let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
            const intl = thread(isThreadModerator[10]).intl;
            obj[0] = intl.string(thread(isThreadModerator[10]).t.IMbjxo);
            const intl2 = thread(isThreadModerator[10]).intl;
            obj[1] = intl2.string(thread(isThreadModerator[10]).t["mi5+Vl"]);
            const intl3 = thread(isThreadModerator[10]).intl;
            obj[2] = intl3.string(thread(isThreadModerator[10]).t.gm1Vej);
            const intl4 = thread(isThreadModerator[10]).intl;
            obj[3] = intl4.string(thread(isThreadModerator[10]).t.p89ACt);
            obj[4] = function onConfirm() {
              closure_1_1(closure_1_2[14]).replacePin(closure_5, closure_0);
            };
            stateFromStores2(isThreadModerator[37]).show(obj);
            const obj2 = stateFromStores2(isThreadModerator[37]);
          } else {
            obj = stateFromStores2(isThreadModerator[14]);
            obj.pin(thread);
          }
        };
        push4(obj14);
      }
    }
    if (!isThreadModerator) {
      if (!tmp22) {
        items6.push(obj13);
        if (setting) {
          const obj15 = { sectionKey: "developer-actions", buttons: null };
          const obj16 = { label: null, IconComponent: null, onPress: null };
          const intl13 = tmp(tmp2[10]).intl;
          obj16[0] = intl13.string(tmp(tmp2[10]).t.DQ797g);
          obj16[1] = tmp(tmp2[41]).IdIcon;
          obj16[2] = function onPress() {
            thread(isThreadModerator[42]).copy(thread.id);
            const obj = thread(isThreadModerator[42]);
            thread(isThreadModerator[43]).presentPostIdCopied();
          };
          const items9 = [obj16];
          obj15[1] = items9;
          items6.push(obj15);
        }
        const obj17 = { showGradient: true, startExpanded: null, header: null, children: null };
        obj17[1] = tmp(tmp2[53]).isMetaQuest();
        const obj18 = { title: null, icon: null };
        obj18[0] = tmp16;
        obj18[1] = tmp19;
        obj17[2] = tmp18(tmp(tmp2[54]).ActionSheetIconHeader, obj18);
        obj17[3] = items6.map((buttons) => {
          buttons = buttons.buttons;
          return closure_1_13(thread(isThreadModerator[55]).ActionSheetRow.Group, {
            hasIcons: true,
            children: buttons.map((arg0, arg1) => {
              ({ label, onPress: closure_0 } = arg0);
              ({ IconComponent, disableColor, isDestructive, trailing } = arg0);
              const intl = closure_1_0(closure_1_2[10]).intl;
              let tmp3 = label === intl.string(closure_1_0(closure_1_2[10]).t.nEOg1N);
              if (!tmp3) {
                const intl2 = tmp(tmp2[10]).intl;
                tmp3 = label === intl2.string(tmp(tmp2[10]).t.xwMqD7);
              }
              return closure_1_13(closure_1_0(closure_1_2[55]).ActionSheetRow, {
                variant: str,
                icon: closure_1_13(closure_1_0(closure_1_2[55]).ActionSheetRow.Icon, { IconComponent, disableColor }),
                label,
                trailing,
                onPress() {
                  callback();
                  closure_1_1();
                }
              }, arg1);
            })
          }, buttons.sectionKey);
        });
        return tmp18(tmp(tmp2[52]).ActionSheet, obj17);
      }
    }
    if (tmp22) {
      tmp22 = !isThreadModerator;
    }
    if (tmp22) {
      tmp22 = stateFromStores4 > 0;
    }
    closure_7 = tmp22;
    const buttons9 = obj13.buttons;
    const intl12 = tmp(tmp2[10]).intl;
    const string5 = intl12.string;
    let t4 = tmp(tmp2[10]).t;
    if (tmp22) {
      let string5Result = string5(t4.xwMqD7);
    } else {
      string5Result = string5(t4.nEOg1N);
    }
    const obj19 = { label: null, IconComponent: null, onPress: null };
    obj19[0] = string5Result;
    obj19[1] = tmp(tmp2[38]).TrashIcon;
    obj19[2] = function onPress() {
      const intl = thread(isThreadModerator[10]).intl;
      const stringResult = intl.string(thread(isThreadModerator[10]).t.nEOg1N);
      const intl2 = thread(isThreadModerator[10]).intl;
      const su3voL = thread(isThreadModerator[10]).t.su3voL;
      { postName: null }[0] = "\"" + thread.name + "\"";
      if (closure_7) {
        const intl4 = tmp(tmp2[10]).intl;
        let stringResult1 = intl4.string(tmp(tmp2[10]).t.xwMqD7);
        const intl5 = tmp(tmp2[10]).intl;
        let stringResult2 = intl5.string(tmp(tmp2[10]).t.RUHcyk);
      } else {
        let tmp6 = closure_3;
        if (closure_3) {
          tmp6 = !isThreadModerator;
        }
        stringResult2 = tmp5;
        stringResult1 = stringResult;
        if (tmp6) {
          const intl3 = tmp(tmp2[10]).intl;
          let obj = { postName: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "\"" + thread.name + "\"";
          stringResult2 = intl3.format(tmp(tmp2[10]).t["6/pY2+"], obj);
          stringResult1 = stringResult;
        }
      }
      obj = { title: stringResult1, body: stringResult2, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl6 = tmp(tmp2[10]).intl;
      obj[2] = intl6.string(thread(isThreadModerator[10]).t.gm1Vej);
      const intl7 = tmp(tmp2[10]).intl;
      obj[3] = intl7.string(thread(isThreadModerator[10]).t.p89ACt);
      obj[4] = function onConfirm() {
        if (closure_7) {
          let tmpResult = tmp(tmp2[39]);
          tmpResult.deleteMessage(user.id, closure_1_1(closure_1_2[22]).castChannelIdAsMessageId(user.id));
          const obj3 = closure_1_1(closure_1_2[22]);
        } else {
          tmpResult = tmp(tmp2[25]);
          tmpResult.deleteChannel(user.id);
        }
      };
      obj[5] = thread(isThreadModerator[40]).ButtonColors.RED;
      stateFromStores2(isThreadModerator[37]).show(obj);
    };
    t4 = buttons9.push(obj19);
  } else {
    const obj20 = { sectionKey: "notifications", buttons: null };
    obj20[1] = [];
    let buttons10 = obj20.buttons;
    let push3 = buttons10.push;
    let obj21 = { label: null, IconComponent: null, onPress: null };
    let intl10 = tmp(tmp2[10]).intl;
    let string3 = intl10.string;
    let onPress = tmp(tmp2[10]).t;
    if (stateFromStores2) {
      obj21[0] = string3(onPress["0JQfsP"]);
      obj21[1] = tmp(tmp2[15]).BellIcon;
      obj21[2] = function onPress() {
        let obj = stateFromStores2(isThreadModerator[14]);
        obj = { muted: !stateFromStores2 };
        return obj.setNotificationSettings(thread, obj);
      };
      push3(obj21);
    } else {
      obj21[0] = string3(onPress["nP+Ykd"]);
      obj21[1] = tmp(tmp2[32]).BellSlashIcon;
      obj21[2] = function onPress() {
        let obj = stateFromStores2(isThreadModerator[27]);
        obj = { guildId: null, channelId: null };
        const combined = "muteSettings" + thread.id;
        obj[0] = thread.getGuildId();
        obj[1] = thread.id;
        obj.openLazy(thread(isThreadModerator[29])(isThreadModerator[33], isThreadModerator.paths), combined, obj);
      };
      push3(obj21);
    }
    buttons10 = obj20.buttons;
    push3 = buttons10.push;
    const obj22 = { label: null, IconComponent: null, onPress: null, disableColor: true };
    intl10 = tmp(tmp2[10]).intl;
    string3 = intl10.string;
    obj22[0] = string3(tmp(tmp2[10]).t.HcoRu0);
    obj22[1] = tmp(tmp2[34]).ChannelNotificationIcon;
    onPress = function onPress() {
      return thread(isThreadModerator[35]).showThreadNotificationsBottomSheet(thread);
    };
    obj22[2] = onPress;
    push3(obj22);
    obj21 = items6.push(obj20);
  }
};