// === Module 10221: ForumPostLongPressActionSheet ===

// Module 10221 (ForumPostLongPressActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "initialize" /* 4200 */;
import closure_4 from "storeThread" /* 4201 */;
import closure_5 from "updateState" /* 7306 */;
import closure_6 from "fetchFingerprint" /* 502 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import closure_8 from "generateOldThreadCutoff" /* 4575 */;
import ME from "ME" /* 1074 */;
import { ChannelFlags } from "set" /* 1964 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId, ChannelSettingsSections: closure_12 } = ME);
let result = require("set").fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  thread = thread.thread;
  ({ parentChannel, onClose: stateFromStores2 } = thread);
  let isThreadModerator = thread.getGuildId();
  const tmp = thread;
  const tmp2 = isThreadModerator;
  let obj = thread(isThreadModerator[48]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(isThreadModerator));
  obj1 = thread(isThreadModerator[48]);
  const items1 = [canManageThread];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => canManageThread.hasJoined(thread.id));
  let obj2 = thread(isThreadModerator[48]);
  const items2 = [canManageThread];
  stateFromStores2 = obj2.useStateFromStores(items2, () => canManageThread.isMuted(thread.id));
  let obj3 = thread(isThreadModerator[48]);
  const items3 = [closure_8];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => closure_1_8.hasUnreadOrMentions(thread.id));
  let obj4 = thread(isThreadModerator[14]);
  const canMarkChannelUnread = obj4.useCanMarkChannelUnread(thread);
  let obj5 = thread(isThreadModerator[48]);
  const items4 = [closure_3];
  const stateFromStores4 = obj5.useStateFromStores(items4, () => {
    let isLurkingResult = null != isThreadModerator;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(tmp);
    }
    return isLurkingResult;
  });
  let obj6 = thread(isThreadModerator[49]);
  const firstMessage = obj6.useFirstForumPostMessage(thread).firstMessage;
  let obj7 = thread(isThreadModerator[50]);
  isThreadModerator = obj7.useIsThreadModerator(parentChannel);
  let obj8 = thread(isThreadModerator[50]);
  canManageThread = obj8.useCanManageThread(thread);
  let obj9 = thread(isThreadModerator[50]);
  const canUnarchiveThread = obj9.useCanUnarchiveThread(thread);
  let obj10 = thread(isThreadModerator[51]);
  const existingPin = obj10.useExistingPin(thread);
  let obj11 = thread(isThreadModerator[48]);
  const items5 = [existingPin];
  const stateFromStores5 = obj11.useStateFromStores(items5, () => {
    let num = existingPin.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(isThreadModerator[52]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj12 = thread(isThreadModerator[48]);
  const items6 = [parentChannel];
  let id;
  const stateFromStores6 = obj12.useStateFromStores(items6, () => parentChannel.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const tmp18 = stateFromStores2(tmp2[53])(thread, true);
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp(tmp2[55]).GuildIconSizes.LARGE;
    let tmp21 = jsx(tmp17(tmp2[55]), { guild: null, size: null });
    let tmp20 = jsx;
    const tmp17Result = tmp17(tmp2[55]);
  } else {
    tmp20 = jsx;
    obj = { size: null, channel: null };
    obj[0] = tmp(tmp2[44]).AvatarSizes.LARGE;
    obj[1] = thread;
    tmp21 = jsx(tmp(tmp2[44]).Avatar, { size: null, channel: null });
  }
  let tmp24 = stateFromStores6 === id;
  closure_3 = tmp24;
  const threadMetadata = thread.threadMetadata;
  if (threadMetadata != null) {
    const archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    const locked = threadMetadata2.locked;
  }
  const items7 = [];
  const tmp19 = stateFromStores2(tmp2[54])(thread, "ForumPostLongPressActionSheet");
  const tmp26 = stateFromStores2(tmp2[10])(tmp19);
  if (null != tmp26) {
    obj1 = { sectionKey: "favorites", buttons: null };
    const items8 = [tmp26];
    obj1[1] = items8;
    items7.push(obj1);
  }
  obj2 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(tmp2[11]).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!stateFromStores3) {
      if (canMarkChannelUnread) {
        let buttons = obj2.buttons;
        obj3 = { label: null, IconComponent: null, onPress: null };
        let intl = tmp(tmp2[12]).intl;
        obj3[0] = intl.string(tmp(tmp2[12]).t.RpE9k7);
        obj3[1] = tmp(tmp2[13]).ChatMarkUnreadIcon;
        obj3[2] = function onPress() {
          stateFromStores2(isThreadModerator[14])(thread.id);
        };
        buttons.push(obj3);
      }
      items7.push(obj2);
      obj4 = { sectionKey: "channel-actions", buttons: null };
      obj4[1] = [];
      if (!stateFromStores4) {
        const buttons1 = obj4.buttons;
        const push = buttons1.push;
        obj5 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp(tmp2[12]).intl;
        const string = intl3.string;
        const t = tmp(tmp2[12]).t;
        if (stateFromStores1) {
          obj5[0] = string(t["2LsZdT"]);
          obj5[1] = tmp(tmp2[17]).UserMinusIcon;
          obj5[2] = function onPress() {
            return stateFromStores2(isThreadModerator[18]).leaveThread(thread, "Context Menu");
          };
          push(obj5);
        } else {
          obj5[0] = string(t.ihLPiO);
          obj5[1] = tmp(tmp2[19]).BellIcon;
          obj5[2] = function onPress() {
            return stateFromStores2(isThreadModerator[18]).joinThread(thread, "Context Menu");
          };
          push(obj5);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj4.buttons;
          obj6 = { label: null, IconComponent: null, onPress: null };
          let intl5 = tmp(tmp2[12]).intl;
          obj6[0] = intl5.string(tmp(tmp2[12]).t.cnRubV);
          obj6[1] = tmp(tmp2[20]).ClockIcon;
          obj6[2] = function onPress() {
            stateFromStores2(isThreadModerator[18]).unarchiveThread(thread, false);
          };
          buttons2.push(obj6);
        }
      } else if (canManageThread) {
        const buttons3 = obj4.buttons;
        obj7 = { label: null, IconComponent: null, onPress: null };
        let intl4 = tmp(tmp2[12]).intl;
        obj7[0] = intl4.string(tmp(tmp2[12]).t.BTs4Kb);
        obj7[1] = tmp(tmp2[21]).XLargeIcon;
        obj7[2] = function onPress() {
          stateFromStores2(isThreadModerator[18]).archiveThread(thread, false);
        };
        buttons3.push(obj7);
      }
      if (canManageThread) {
        const buttons4 = obj4.buttons;
        const push2 = buttons4.push;
        obj8 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp(tmp2[12]).intl;
        const string2 = intl6.string;
        const t2 = tmp(tmp2[12]).t;
        if (locked) {
          obj8[0] = string2(t2["/OKSxp"]);
          obj8[1] = tmp(tmp2[22]).LockUnlockedIcon;
          obj8[2] = function onPress() {
            stateFromStores2(isThreadModerator[18]).unlockThread(thread);
          };
          push2(obj8);
        } else {
          obj8[0] = string2(t2["Ur/0Na"]);
          obj8[1] = tmp(tmp2[23]).LockIcon;
          obj8[2] = function onPress() {
            stateFromStores2(isThreadModerator[18]).lockThread(thread);
          };
          push2(obj8);
        }
      }
      let isLockedThreadResult = !isThreadModerator;
      if (!isThreadModerator) {
        isLockedThreadResult = thread.isLockedThread();
      }
      let tmp38 = tmp24;
      if (tmp24) {
        tmp38 = !isLockedThreadResult;
      }
      if (tmp38) {
        const buttons5 = obj4.buttons;
        obj9 = { label: null, IconComponent: null, onPress: null };
        let intl7 = tmp(tmp2[12]).intl;
        obj9[0] = intl7.string(tmp(tmp2[12]).t.NP1yHG);
        obj9[1] = tmp(tmp2[24]).PencilIcon;
        obj9[2] = function onPress() {
          let obj = thread(isThreadModerator[25]);
          obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: stateFromStores2(isThreadModerator[26]).castChannelIdAsMessageId(thread.id), isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
          const items = [stateFromStores2(isThreadModerator[27]).FORUM_CHANNEL, stateFromStores2(isThreadModerator[27]).GUILD_CHANNEL];
          obj[5] = items;
          obj = { section: closure_1_11.CHANNEL_LIST, object: closure_1_10.CONTEXT_MENU };
          obj[6] = obj;
          const result = obj.openCreateForumPostModal(obj);
        };
        buttons5.push(obj9);
      }
      if (canManageThread) {
        const buttons6 = obj4.buttons;
        obj10 = { label: null, IconComponent: null, onPress: null };
        const intl8 = tmp(tmp2[12]).intl;
        obj10[0] = intl8.string(tmp(tmp2[12]).t.SGuVbR);
        obj10[1] = tmp(tmp2[28]).SettingsIcon;
        obj10[2] = function onPress() {
          stateFromStores2(isThreadModerator[29]).setSection(closure_1_12.OVERVIEW);
          const obj = stateFromStores2(isThreadModerator[29]);
          stateFromStores2(isThreadModerator[29]).open(thread.id);
        };
        buttons6.push(obj10);
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj4.buttons;
          obj11 = { label: null, IconComponent: null, onPress: null };
          const intl9 = tmp(tmp2[12]).intl;
          obj11[0] = intl9.string(tmp(tmp2[12]).t["436ZFw"]);
          obj11[1] = tmp(tmp2[30]).TagsIcon;
          obj11[2] = function onPress() {
            let obj = stateFromStores2(isThreadModerator[31]);
            obj = { thread, parentChannel, canManageThread };
            obj.openLazy(thread(isThreadModerator[33])(isThreadModerator[32], isThreadModerator.paths), "ForumPostTagsActionSheet", obj);
          };
          buttons7.push(obj11);
        }
      }
      const buttons8 = obj4.buttons;
      obj12 = { label: null, IconComponent: null, onPress: null };
      const intl10 = tmp(tmp2[12]).intl;
      obj12[0] = intl10.string(tmp(tmp2[12]).t.WqhZss);
      obj12[1] = tmp(tmp2[34]).LinkIcon;
      obj12[2] = function onPress() {
        let obj = thread(isThreadModerator[35]);
        obj = { section: closure_1_11.CONTEXT_MENU };
        const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj);
      };
      buttons8.push(obj12);
      items7.push(obj4);
      if (stateFromStores4) {
        const obj13 = { sectionKey: "admin-actions", buttons: null };
        obj13[1] = [];
        if (isThreadModerator) {
          const buttons9 = obj13.buttons;
          const push4 = buttons9.push;
          const obj14 = { label: null, IconComponent: null, onPress: null };
          const intl12 = tmp(tmp2[12]).intl;
          const string4 = intl12.string;
          const t3 = tmp(tmp2[12]).t;
          if (hasFlagResult) {
            obj14[0] = string4(t3.trD8ao);
            obj14[1] = tmp(tmp2[40]).PinIcon;
            obj14[2] = function onPress() {
              return stateFromStores2(isThreadModerator[18]).unpin(thread);
            };
            push4(obj14);
          } else {
            obj14[0] = string4(t3.EnaWhu);
            obj14[1] = tmp(tmp2[40]).PinIcon;
            obj14[2] = function onPress() {
              if (null != existingPin) {
                let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                const intl = thread(isThreadModerator[12]).intl;
                obj[0] = intl.string(thread(isThreadModerator[12]).t.IMbjxo);
                const intl2 = thread(isThreadModerator[12]).intl;
                obj[1] = intl2.string(thread(isThreadModerator[12]).t["mi5+Vl"]);
                const intl3 = thread(isThreadModerator[12]).intl;
                obj[2] = intl3.string(thread(isThreadModerator[12]).t.gm1Vej);
                const intl4 = thread(isThreadModerator[12]).intl;
                obj[3] = intl4.string(thread(isThreadModerator[12]).t.p89ACt);
                obj[4] = function onConfirm() {
                  closure_1_1(closure_1_2[18]).replacePin(closure_5, closure_0);
                };
                stateFromStores2(isThreadModerator[41]).show(obj);
                const obj2 = stateFromStores2(isThreadModerator[41]);
              } else {
                obj = stateFromStores2(isThreadModerator[18]);
                obj.pin(thread);
              }
            };
            push4(obj14);
          }
        }
        if (!isThreadModerator) {
          if (!tmp24) {
            items7.push(obj13);
            if (setting) {
              const obj15 = { sectionKey: "developer-actions", buttons: null };
              const obj16 = { label: null, IconComponent: null, onPress: null };
              const intl14 = tmp(tmp2[12]).intl;
              obj16[0] = intl14.string(tmp(tmp2[12]).t.DQ797g);
              obj16[1] = tmp(tmp2[45]).IdIcon;
              obj16[2] = function onPress() {
                thread(isThreadModerator[46]).copy(thread.id);
                const obj = thread(isThreadModerator[46]);
                thread(isThreadModerator[47]).presentPostIdCopied();
              };
              const items9 = [obj16];
              obj15[1] = items9;
              items7.push(obj15);
            }
            const obj17 = { showGradient: true, startExpanded: null, header: null, children: null };
            obj17[1] = tmp(tmp2[57]).isMetaQuest();
            const obj18 = { title: null, icon: null };
            obj18[0] = tmp18;
            obj18[1] = tmp21;
            obj17[2] = tmp20(tmp(tmp2[58]).ActionSheetIconHeader, obj18);
            obj17[3] = items7.map((buttons) => {
              buttons = buttons.buttons;
              return closure_1_14(thread(isThreadModerator[59]).ActionSheetRow.Group, {
                hasIcons: true,
                children: buttons.map((arg0, arg1) => {
                  ({ label, onPress: closure_0 } = arg0);
                  ({ IconComponent, disableColor, isDestructive, trailing } = arg0);
                  const intl = closure_1_0(closure_1_2[12]).intl;
                  let tmp3 = label === intl.string(closure_1_0(closure_1_2[12]).t.nEOg1N);
                  if (!tmp3) {
                    const intl2 = tmp(tmp2[12]).intl;
                    tmp3 = label === intl2.string(tmp(tmp2[12]).t.xwMqD7);
                  }
                  return closure_1_14(closure_1_0(closure_1_2[59]).ActionSheetRow, {
                    variant: str,
                    icon: closure_1_14(closure_1_0(closure_1_2[59]).ActionSheetRow.Icon, { IconComponent, disableColor }),
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
            return tmp20(tmp(tmp2[56]).ActionSheet, obj17);
          }
        }
        if (tmp24) {
          tmp24 = !isThreadModerator;
        }
        if (tmp24) {
          tmp24 = stateFromStores5 > 0;
        }
        closure_7 = tmp24;
        const buttons10 = obj13.buttons;
        const intl13 = tmp(tmp2[12]).intl;
        const string5 = intl13.string;
        let t4 = tmp(tmp2[12]).t;
        if (tmp24) {
          let string5Result = string5(t4.xwMqD7);
        } else {
          string5Result = string5(t4.nEOg1N);
        }
        const obj19 = { label: null, IconComponent: null, onPress: null };
        obj19[0] = string5Result;
        obj19[1] = tmp(tmp2[42]).TrashIcon;
        obj19[2] = function onPress() {
          const intl = thread(isThreadModerator[12]).intl;
          const stringResult = intl.string(thread(isThreadModerator[12]).t.nEOg1N);
          const intl2 = thread(isThreadModerator[12]).intl;
          const su3voL = thread(isThreadModerator[12]).t.su3voL;
          { postName: null }[0] = "\"" + thread.name + "\"";
          if (closure_7) {
            const intl4 = tmp(tmp2[12]).intl;
            let stringResult1 = intl4.string(tmp(tmp2[12]).t.xwMqD7);
            const intl5 = tmp(tmp2[12]).intl;
            let stringResult2 = intl5.string(tmp(tmp2[12]).t.RUHcyk);
          } else {
            let tmp6 = closure_3;
            if (closure_3) {
              tmp6 = !isThreadModerator;
            }
            stringResult2 = tmp5;
            stringResult1 = stringResult;
            if (tmp6) {
              const intl3 = tmp(tmp2[12]).intl;
              let obj = { postName: null };
              const _HermesInternal = HermesInternal;
              obj[0] = "\"" + thread.name + "\"";
              stringResult2 = intl3.format(tmp(tmp2[12]).t["6/pY2+"], obj);
              stringResult1 = stringResult;
            }
          }
          obj = { title: stringResult1, body: stringResult2, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl6 = tmp(tmp2[12]).intl;
          obj[2] = intl6.string(thread(isThreadModerator[12]).t.gm1Vej);
          const intl7 = tmp(tmp2[12]).intl;
          obj[3] = intl7.string(thread(isThreadModerator[12]).t.p89ACt);
          obj[4] = function onConfirm() {
            if (closure_7) {
              let tmpResult = tmp(tmp2[43]);
              tmpResult.deleteMessage(user.id, closure_1_1(closure_1_2[26]).castChannelIdAsMessageId(user.id));
              const obj3 = closure_1_1(closure_1_2[26]);
            } else {
              tmpResult = tmp(tmp2[29]);
              tmpResult.deleteChannel(user.id);
            }
          };
          obj[5] = thread(isThreadModerator[44]).ButtonColors.RED;
          stateFromStores2(isThreadModerator[41]).show(obj);
        };
        t4 = buttons10.push(obj19);
      } else {
        const obj20 = { sectionKey: "notifications", buttons: null };
        obj20[1] = [];
        let buttons11 = obj20.buttons;
        let push3 = buttons11.push;
        let obj21 = { label: null, IconComponent: null, onPress: null };
        let intl11 = tmp(tmp2[12]).intl;
        let string3 = intl11.string;
        let onPress = tmp(tmp2[12]).t;
        if (stateFromStores2) {
          obj21[0] = string3(onPress["0JQfsP"]);
          obj21[1] = tmp(tmp2[19]).BellIcon;
          obj21[2] = function onPress() {
            let obj = stateFromStores2(isThreadModerator[18]);
            obj = { muted: !stateFromStores2 };
            return obj.setNotificationSettings(thread, obj);
          };
          push3(obj21);
        } else {
          obj21[0] = string3(onPress["nP+Ykd"]);
          obj21[1] = tmp(tmp2[36]).BellSlashIcon;
          obj21[2] = function onPress() {
            let obj = stateFromStores2(isThreadModerator[31]);
            obj = { guildId: null, channelId: null };
            const combined = "muteSettings" + thread.id;
            obj[0] = thread.getGuildId();
            obj[1] = thread.id;
            obj.openLazy(thread(isThreadModerator[33])(isThreadModerator[37], isThreadModerator.paths), combined, obj);
          };
          push3(obj21);
        }
        buttons11 = obj20.buttons;
        push3 = buttons11.push;
        const obj22 = { label: null, IconComponent: null, onPress: null, disableColor: true };
        intl11 = tmp(tmp2[12]).intl;
        string3 = intl11.string;
        obj22[0] = string3(tmp(tmp2[12]).t.HcoRu0);
        obj22[1] = tmp(tmp2[38]).ChannelNotificationIcon;
        onPress = function onPress() {
          return thread(isThreadModerator[39]).showThreadNotificationsBottomSheet(thread);
        };
        obj22[2] = onPress;
        push3(obj22);
        obj21 = items7.push(obj20);
      }
    }
  }
  const buttons12 = obj2.buttons;
  const obj23 = { label: null, IconComponent: null, onPress: null };
  let intl2 = tmp(tmp2[12]).intl;
  obj23[0] = intl2.string(tmp(tmp2[12]).t.e6RscS);
  obj23[1] = tmp(tmp2[15]).EyeIcon;
  obj23[2] = function onPress() {
    let obj = thread(isThreadModerator[16]);
    obj = { object: closure_1_10.MARK_FORUM_POST_AS_READ_BUTTON, objectType: closure_1_9.ACK_MANUAL };
    obj.ack(thread.id, obj, true, true);
  };
  buttons12.push(obj23);
};