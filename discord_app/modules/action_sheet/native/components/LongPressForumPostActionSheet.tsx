// === Module 10033: LongPressForumPostActionSheet ===

// Module 10033 (LongPressForumPostActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ActionSheetRow from "ActionSheetRow" /* 6697 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10054 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10059 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10062 */;
import useFavoritesGuildChannelActionsDefault from "useFavoritesGuildChannelActions" /* 10704 */;
import threadActionSheets from "threadActionSheets" /* 11067 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6809 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

require = fn;
function getActionSheetButtons(thread) {
  thread = thread.thread;
  const muted = thread.muted;
  const isModerator = thread.isModerator;
  const canManageThread = thread.canManageThread;
  ({ existingPin: ThreadMessageStore, parentChannel } = thread);
  const isLurking = thread.isLurking;
  let isAuthor;
  const threadMetadata = thread.threadMetadata;
  ({ hasJoinedPost, hasUnread, canMarkUnread, developerModeEnabled, messageCount, canUnarchiveThread, favorites } = thread);
  if (threadMetadata != null) {
    const archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    const locked = threadMetadata2.locked;
  }
  let items = [];
  const tmp2 = isModerator;
  const tmp3 = muted(isModerator[10])(favorites);
  if (null != tmp3) {
    let obj = { sectionKey: "favorites", buttons: null };
    const items1 = [tmp3];
    obj.buttons = items1;
    items.push(obj);
  }
  let obj2 = { sectionKey: "mark-as-read", buttons: [] };
  const tmp5 = thread;
  const MarkChannelUnreadExperiment = thread(tmp2[11]).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!hasUnread) {
      if (canMarkUnread) {
        const buttons = obj2.buttons;
        let obj3 = { label: null, IconComponent: null, onPress: null };
        let intl = tmp5(tmp2[12]).intl;
        obj3.label = intl.string(tmp5(tmp2[12]).t.RpE9k7);
        obj3.IconComponent = tmp5(tmp2[13]).ChatMarkUnreadIcon;
        obj3.onPress = function onPress() {
          markChannelUnreadDefault(thread.id);
        };
        buttons.push(obj3);
      }
      items.push(obj2);
      let obj4 = { sectionKey: "channel-actions", buttons: [] };
      if (!isLurking) {
        const buttons1 = obj4.buttons;
        const push = buttons1.push;
        const obj5 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp5(tmp2[12]).intl;
        const string = intl3.string;
        const t = tmp5(tmp2[12]).t;
        if (hasJoinedPost) {
          obj5.label = string(t["2LsZdT"]);
          obj5.IconComponent = tmp5(tmp2[17]).UserMinusIcon;
          obj5.onPress = function onPress() {
            return ThreadActionCreatorsDefault.leaveThread(thread, "Context Menu");
          };
          push(obj5);
        } else {
          obj5.label = string(t.ihLPiO);
          obj5.IconComponent = tmp5(tmp2[19]).BellIcon;
          obj5.onPress = function onPress() {
            return ThreadActionCreatorsDefault.joinThread(thread, "Context Menu");
          };
          push(obj5);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj4.buttons;
          const obj6 = { label: null, IconComponent: null, onPress: null };
          let intl5 = tmp5(tmp2[12]).intl;
          obj6.label = intl5.string(tmp5(tmp2[12]).t.cnRubV);
          obj6.IconComponent = tmp5(tmp2[20]).ClockIcon;
          obj6.onPress = function onPress() {
            ThreadActionCreatorsDefault.unarchiveThread(thread, false);
          };
          buttons2.push(obj6);
        }
      } else if (canManageThread) {
        const buttons3 = obj4.buttons;
        const obj7 = { label: null, IconComponent: null, onPress: null };
        let intl4 = tmp5(tmp2[12]).intl;
        obj7.label = intl4.string(tmp5(tmp2[12]).t.BTs4Kb);
        obj7.IconComponent = tmp5(tmp2[21]).XLargeIcon;
        obj7.onPress = function onPress() {
          ThreadActionCreatorsDefault.archiveThread(thread, false);
        };
        buttons3.push(obj7);
      }
      if (canManageThread) {
        const buttons4 = obj4.buttons;
        const push2 = buttons4.push;
        const obj8 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp5(tmp2[12]).intl;
        const string2 = intl6.string;
        const t2 = tmp5(tmp2[12]).t;
        if (locked) {
          obj8.label = string2(t2["/OKSxp"]);
          obj8.IconComponent = tmp5(tmp2[22]).LockUnlockedIcon;
          obj8.onPress = function onPress() {
            ThreadActionCreatorsDefault.unlockThread(thread);
          };
          push2(obj8);
        } else {
          obj8.label = string2(t2["Ur/0Na"]);
          obj8.IconComponent = tmp5(tmp2[23]).LockIcon;
          obj8.onPress = function onPress() {
            ThreadActionCreatorsDefault.lockThread(thread);
          };
          push2(obj8);
        }
      }
      let isLockedThreadResult = !isModerator;
      if (!isModerator) {
        isLockedThreadResult = thread.isLockedThread();
      }
      let tmp16 = isAuthor;
      if (isAuthor) {
        tmp16 = !isLockedThreadResult;
      }
      if (tmp16) {
        const buttons5 = obj4.buttons;
        const obj9 = { label: null, IconComponent: null, onPress: null };
        let intl7 = tmp5(tmp2[12]).intl;
        obj9.label = intl7.string(tmp5(tmp2[12]).t.NP1yHG);
        obj9.IconComponent = tmp5(tmp2[24]).PencilIcon;
        obj9.onPress = function onPress() {
          const obj2 = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
          const obj = ForumComposerModalActionCreators;
          obj2.messageId = SnowflakeUtilsDefault.castChannelIdAsMessageId(thread.id);
          const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
          obj2.analyticsLocations = items;
          obj2.analyticsLocationObject = { section: constants3.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
          const result = obj.openCreateForumPostModal(obj2);
        };
        buttons5.push(obj9);
      }
      if (canManageThread) {
        const buttons6 = obj4.buttons;
        const obj10 = { label: null, IconComponent: null, onPress: null };
        const intl8 = tmp5(tmp2[12]).intl;
        obj10.label = intl8.string(tmp5(tmp2[12]).t.SGuVbR);
        obj10.IconComponent = tmp5(tmp2[28]).SettingsIcon;
        obj10.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
          ChannelSettingsActionCreatorsDefault.open(thread.id);
        };
        buttons6.push(obj10);
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj4.buttons;
          const obj11 = { label: null, IconComponent: null, onPress: null };
          const intl9 = tmp5(tmp2[12]).intl;
          obj11.label = intl9.string(tmp5(tmp2[12]).t["436ZFw"]);
          obj11.IconComponent = tmp5(tmp2[30]).TagsIcon;
          obj11.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11060, dependencyMap.paths), "ForumPostTagsActionSheet", { thread, parentChannel, canManageThread });
          };
          buttons7.push(obj11);
        }
      }
      const buttons8 = obj4.buttons;
      const obj12 = { label: null, IconComponent: null, onPress: null };
      const intl10 = tmp5(tmp2[12]).intl;
      obj12.label = intl10.string(tmp5(tmp2[12]).t.WqhZss);
      obj12.IconComponent = tmp5(tmp2[34]).LinkIcon;
      obj12.onPress = function onPress() {
        const result = messages_MessagesUtils.handleCopyLinkForumPost(thread.guild_id, thread.id, { section: constants3.CONTEXT_MENU });
      };
      buttons8.push(obj12);
      items.push(obj4);
      if (isLurking) {
        const obj13 = { sectionKey: "admin-actions", buttons: [] };
        if (isModerator) {
          const buttons9 = obj13.buttons;
          const push4 = buttons9.push;
          const obj14 = { label: null, IconComponent: null, onPress: null };
          const intl12 = tmp5(tmp2[12]).intl;
          const string4 = intl12.string;
          const t3 = tmp5(tmp2[12]).t;
          if (hasFlagResult) {
            obj14.label = string4(t3.trD8ao);
            obj14.IconComponent = tmp5(tmp2[40]).PinIcon;
            obj14.onPress = function onPress() {
              return ThreadActionCreatorsDefault.unpin(thread);
            };
            push4(obj14);
          } else {
            obj14.label = string4(t3.EnaWhu);
            obj14.IconComponent = tmp5(tmp2[40]).PinIcon;
            obj14.onPress = function onPress() {
              if (null != ThreadMessageStore) {
                const obj3 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                const intl = util.intl;
                obj3.title = intl.string(util.t.IMbjxo);
                const intl2 = util.intl;
                obj3.body = intl2.string(util.t["mi5+Vl"]);
                const intl3 = util.intl;
                obj3.cancelText = intl3.string(util.t.gm1Vej);
                const intl4 = util.intl;
                obj3.confirmText = intl4.string(util.t.p89ACt);
                obj3.onConfirm = function onConfirm() {
                  muted(isModerator[18]).replacePin(closure_1_5, thread);
                };
                AlertActionCreatorsDefault.show(obj3);
              } else {
                ThreadActionCreatorsDefault.pin(thread);
              }
            };
            push4(obj14);
          }
        }
        if (!isModerator) {
          if (!isAuthor) {
            items.push(obj13);
            if (developerModeEnabled) {
              const obj15 = { sectionKey: "developer-actions", buttons: null };
              const obj16 = { label: null, IconComponent: null, onPress: null };
              const intl14 = tmp5(tmp2[12]).intl;
              obj16.label = intl14.string(tmp5(tmp2[12]).t.DQ797g);
              obj16.IconComponent = tmp5(tmp2[45]).IdIcon;
              obj16.onPress = function onPress() {
                ClipboardUtils.copy(thread.id);
                ToastUtils.presentPostIdCopied();
              };
              const items2 = [obj16];
              obj15.buttons = items2;
              items.push(obj15);
            }
            return items;
          }
        }
        if (isAuthor) {
          isAuthor = !isModerator;
        }
        if (isAuthor) {
          isAuthor = messageCount > 0;
        }
        const buttons10 = obj13.buttons;
        const intl13 = tmp5(tmp2[12]).intl;
        const string5 = intl13.string;
        let t4 = tmp5(tmp2[12]).t;
        if (isAuthor) {
          let string5Result = string5(t4.xwMqD7);
        } else {
          string5Result = string5(t4.nEOg1N);
        }
        const obj17 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[42]).TrashIcon,
          onPress() {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t.nEOg1N);
                  const intl2 = util.intl;
                  let formatResult = intl2.format(util.t.su3voL, { postName: "\"" + thread.name + "\"" });
                  if (isAuthor) {
                    const intl4 = util.intl;
                    let stringResult1 = intl4.string(util.t.xwMqD7);
                    const intl5 = util.intl;
                    formatResult = intl5.string(util.t.RUHcyk);
                  } else {
                    let tmp6 = isAuthor;
                    if (isAuthor) {
                      tmp6 = !isModerator;
                    }
                    stringResult1 = stringResult;
                    if (tmp6) {
                      const intl3 = util.intl;
                      const obj2 = { postName: null };
                      const _HermesInternal = HermesInternal;
                      obj2.postName = "\"" + thread.name + "\"";
                      formatResult = intl3.format(util.t["6/pY2+"], obj2);
                      stringResult1 = stringResult;
                    }
                  }
                  const obj = { postName: "\"" + thread.name + "\"" };
                  const obj4 = { title: stringResult1, body: formatResult, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
                  const intl6 = util.intl;
                  obj4.cancelText = intl6.string(util.t.gm1Vej);
                  const intl7 = util.intl;
                  obj4.confirmText = intl7.string(util.t.p89ACt);
                  obj4.onConfirm = function onConfirm() {
                    if (isAuthor) {
                      const tmpResult = muted(isModerator[43]);
                      tmpResult.deleteMessage(user.id, muted(isModerator[26]).castChannelIdAsMessageId(user.id));
                      const obj3 = muted(isModerator[26]);
                    } else {
                      muted(isModerator[29]).deleteChannel(user.id);
                      const tmpResult2 = muted(isModerator[29]);
                    }
                  };
                  obj4.confirmColor = native.ButtonColors.RED;
                  AlertActionCreatorsDefault.show(obj4);
                }
        };
        t4 = buttons10.push(obj17);
      } else {
        const obj18 = { sectionKey: "notifications", buttons: [] };
        let buttons11 = obj18.buttons;
        let push3 = buttons11.push;
        let obj19 = { label: null, IconComponent: null, onPress: null };
        let intl11 = tmp5(tmp2[12]).intl;
        let string3 = intl11.string;
        let onPress = tmp5(tmp2[12]).t;
        if (muted) {
          obj19.label = string3(onPress["0JQfsP"]);
          obj19.IconComponent = tmp5(tmp2[19]).BellIcon;
          obj19.onPress = function onPress() {
            return ThreadActionCreatorsDefault.setNotificationSettings(thread, { muted: !muted });
          };
          push3(obj19);
        } else {
          obj19.label = string3(onPress["nP+Ykd"]);
          obj19.IconComponent = tmp5(tmp2[36]).BellSlashIcon;
          obj19.onPress = function onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { guildId: null, channelId: null };
            const combined = "muteSettings" + thread.id;
            obj2.guildId = thread.getGuildId();
            obj2.channelId = thread.id;
            obj.openLazy(asyncRequireImpl(11064, dependencyMap.paths), combined, obj2);
          };
          push3(obj19);
        }
        buttons11 = obj18.buttons;
        push3 = buttons11.push;
        const obj20 = { label: null, IconComponent: null, onPress: null, disableColor: true };
        intl11 = tmp5(tmp2[12]).intl;
        string3 = intl11.string;
        obj20.label = string3(tmp5(tmp2[12]).t.HcoRu0);
        obj20.IconComponent = tmp5(tmp2[38]).ChannelNotificationIcon;
        onPress = function onPress() {
          return threadActionSheets.showThreadNotificationsBottomSheet(thread);
        };
        obj20.onPress = onPress;
        push3(obj20);
        obj19 = items.push(obj18);
      }
    }
  }
  const buttons12 = obj2.buttons;
  const obj21 = { label: null, IconComponent: null, onPress: null };
  let intl2 = tmp5(tmp2[12]).intl;
  obj21.label = intl2.string(tmp5(tmp2[12]).t.e6RscS);
  obj21.IconComponent = tmp5(tmp2[15]).EyeIcon;
  obj21.onPress = function onPress() {
    ReadStateActionCreators.ack(thread.id, { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL }, true, true);
  };
  buttons12.push(obj21);
}
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const ChannelFlags = fn(2058).ChannelFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let tmp2 = dependencyMap;
  const cResult = thread(576).c(51);
  thread = thread.thread;
  ({ parentChannel, onClose } = thread);
  if (cResult[0] !== thread) {
    const guildId = thread.getGuildId();
    cResult[0] = thread;
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
    const fn = function v() {
      return GuildStore.getGuild(closure_2);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const obj = thread(576);
  const stateFromStores = thread(504).useStateFromStores(tmp6, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [JoinedThreadsStore];
    cResult[5] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== thread.id) {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
    cResult[6] = thread.id;
    cResult[7] = A;
  } else {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
  }
  const tmpResult = thread(504);
  const stateFromStores1 = thread(504).useStateFromStores(tmp10, A);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
    const items2 = [JoinedThreadsStore];
    cResult[8] = items2;
    const tmp14 = items2;
  } else {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
  }
  if (cResult[9] !== thread.id) {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
    cResult[9] = thread.id;
    cResult[10] = tmp16;
  } else {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
  }
  const tmpResult13 = thread(504);
  const stateFromStores2 = thread(504).useStateFromStores(tmp14, tmp16);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
    const items3 = [ReadStateStore];
    cResult[11] = items3;
    const tmp18 = items3;
  } else {
    class A {
      constructor() {
        return closure_4.hasJoined(thread.id);
      }
    }
  }
  if (cResult[12] !== thread.id) {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
    cResult[12] = thread.id;
    cResult[13] = L;
  } else {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
  }
  const tmpResult14 = thread(504);
  const stateFromStores3 = thread(504).useStateFromStores(tmp18, L);
  const tmpResult15 = thread(504);
  const canMarkChannelUnread = thread(10054).useCanMarkChannelUnread(thread);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
    const items4 = [LurkingStore];
    cResult[14] = items4;
    const tmp22 = items4;
  } else {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
  }
  if (cResult[15] !== tmp4) {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
    cResult[15] = tmp4;
    cResult[16] = tmp24;
  } else {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
  }
  const tmpResult16 = thread(10054);
  const stateFromStores4 = thread(504).useStateFromStores(tmp22, tmp24);
  const tmpResult17 = thread(504);
  const tmpResult18 = thread(6807);
  const isThreadModerator = thread(6772).useIsThreadModerator(parentChannel);
  const tmpResult19 = thread(6772);
  const canManageThread = thread(6772).useCanManageThread(thread);
  const tmpResult20 = thread(6772);
  const canUnarchiveThread = thread(6772).useCanUnarchiveThread(thread);
  const tmpResult21 = thread(6772);
  const existingPin = thread(7528).useExistingPin(thread);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
    const items5 = [ThreadMessageStore];
    cResult[17] = items5;
    const tmp30 = items5;
  } else {
    class L {
      constructor() {
        return closure_8.hasUnreadOrMentions(thread.id);
      }
    }
  }
  if (cResult[18] !== thread.id) {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    cResult[18] = thread.id;
    cResult[19] = O;
  } else {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  }
  const tmpResult22 = thread(7528);
  const stateFromStores5 = thread(504).useStateFromStores(tmp30, O);
  const DeveloperMode = tmp(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    const items6 = [AuthenticationStore];
    class H {
      constructor() {
        return closure_1_6.getId();
      }
    }
    cResult[20] = items6;
    cResult[21] = H;
    let tmp35 = H;
    const tmp34 = items6;
  } else {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    tmp35 = cResult[21];
  }
  const tmpResult23 = thread(504);
  const stateFromStores6 = thread(504).useStateFromStores(tmp34, tmp35);
  if (tmpResult18.useFirstForumPostMessage(thread).firstMessage != null) {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  }
  const tmp37 = onClose(5043)(thread);
  const tmp38 = onClose(10704)(thread, "ForumPostLongPressActionSheet");
  if (null != stateFromStores) {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  } else {
    class O {
      constructor() {
        num = closure_5.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    if (cResult[26] === canManageThread) {
      class O {
        constructor() {
          num = closure_5.getCount(thread.id);
          if (num == null) {
            num = 0;
          }
          return num;
        }
      }
    }
    class H {
      constructor() {
        return closure_1_6.getId();
      }
    }
    const obj2 = { thread, parentChannel, hasJoinedPost: stateFromStores1, muted: stateFromStores2, hasUnread: stateFromStores3, canMarkUnread: canMarkChannelUnread, isModerator: isThreadModerator, isAuthor: stateFromStores6 === undefined, canManageThread, developerModeEnabled: setting, existingPin, messageCount: stateFromStores5, canUnarchiveThread, isLurking: stateFromStores4, favorites: tmp38 };
    const _Symbol = Symbol;
    if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          num = closure_5.getCount(thread.id);
          if (num == null) {
            num = 0;
          }
          return num;
        }
      }
      class H {
        constructor() {
          return closure_1_6.getId();
        }
      }
      const isMetaQuestResult = obj16.isMetaQuest();
      const tmp43 = obj16.isMetaQuest();
    } else {
      class O {
        constructor() {
          num = closure_5.getCount(thread.id);
          if (num == null) {
            num = 0;
          }
          return num;
        }
      }
    }
    if (cResult[46] === tmp37) {
      class O {
        constructor() {
          num = closure_5.getCount(thread.id);
          if (num == null) {
            num = 0;
          }
          return num;
        }
      }
      if (cResult[49] !== onClose) {
        class O {
          constructor() {
            num = closure_5.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
        cResult[49] = onClose;
        class H {
          constructor() {
            return closure_1_6.getId();
          }
        }
        cResult[50] = tmp49;
      } else {
        class O {
          constructor() {
            num = closure_5.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
      }
      class H {
        constructor() {
          return closure_1_6.getId();
        }
      }
      const obj3 = { showGradient: true, startExpanded: tmp43, header: mapped, children: null };
      mapped = arr8.map(tmp49);
      obj3.children = mapped;
      tmp2 = <tmp showGradient startExpanded={tmp43} header={mapped}>{null}</tmp>;
      cResult[26] = canManageThread;
      cResult[27] = canMarkChannelUnread;
      cResult[28] = canUnarchiveThread;
      cResult[29] = tmp37;
      cResult[30] = setting;
      cResult[31] = existingPin;
      cResult[32] = tmp38;
      cResult[33] = stateFromStores1;
      cResult[34] = stateFromStores3;
      cResult[35] = tmp39;
      cResult[36] = tmp42;
      cResult[37] = stateFromStores4;
      cResult[38] = isThreadModerator;
      cResult[39] = stateFromStores5;
      cResult[40] = stateFromStores2;
      cResult[41] = onClose;
      cResult[42] = parentChannel;
      cResult[43] = thread;
      cResult[44] = tmp2;
    }
    const obj4 = { title: tmp37, icon: tmp39 };
    const tmp47 = jsx(tmp(10737).ActionSheetIconHeader, { title: tmp37, icon: tmp39 });
    cResult[46] = tmp37;
    cResult[47] = tmp39;
    cResult[48] = tmp47;
    mapped = tmp47;
    arr8 = getActionSheetButtons(obj2);
  }
  const tmpResult24 = thread(504);
}) : ((thread) => {
  thread = thread.thread;
  ({ parentChannel, onClose: importDefault } = thread);
  dependencyMap = thread.getGuildId();
  const items = [GuildStore];
  const stateFromStores = thread(504).useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  const obj = thread(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = thread(504).useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(thread.id));
  const obj2 = thread(504);
  const items2 = [JoinedThreadsStore];
  const stateFromStores2 = thread(504).useStateFromStores(items2, () => JoinedThreadsStore.isMuted(thread.id));
  const obj3 = thread(504);
  const items3 = [ReadStateStore];
  const stateFromStores3 = thread(504).useStateFromStores(items3, () => ReadStateStore.hasUnreadOrMentions(thread.id));
  const obj4 = thread(504);
  const canMarkChannelUnread = thread(10054).useCanMarkChannelUnread(thread);
  const obj5 = thread(10054);
  const items4 = [LurkingStore];
  const stateFromStores4 = thread(504).useStateFromStores(items4, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const obj6 = thread(504);
  const firstMessage = thread(6807).useFirstForumPostMessage(thread).firstMessage;
  const obj7 = thread(6807);
  const isThreadModerator = thread(6772).useIsThreadModerator(parentChannel);
  const obj8 = thread(6772);
  const canManageThread = thread(6772).useCanManageThread(thread);
  const obj9 = thread(6772);
  const canUnarchiveThread = thread(6772).useCanUnarchiveThread(thread);
  const obj10 = thread(6772);
  const existingPin = thread(7528).useExistingPin(thread);
  const obj11 = thread(7528);
  const items5 = [ThreadMessageStore];
  const stateFromStores5 = thread(504).useStateFromStores(items5, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj12 = thread(504);
  const items6 = [AuthenticationStore];
  let id;
  const stateFromStores6 = thread(504).useStateFromStores(items6, () => id.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const obj13 = thread(504);
  const tmp18 = useChannelNameDefault(thread);
  if (null != stateFromStores) {
    const obj14 = { guild: stateFromStores, size: tmp(5971).GuildIconSizes.LARGE };
    let tmp21 = jsx(GuildIconDefault, { guild: stateFromStores, size: tmp(5971).GuildIconSizes.LARGE });
    let tmp20 = jsx;
    const tmp17Result = GuildIconDefault;
  } else {
    tmp20 = jsx;
    const obj15 = { size: tmp(1188).AvatarSizes.LARGE, channel: thread };
    tmp21 = jsx(tmp(1188).Avatar, { size: tmp(1188).AvatarSizes.LARGE, channel: thread });
  }
  const tmp19 = useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet");
  const obj16 = { thread, parentChannel, hasJoinedPost: stateFromStores1, muted: stateFromStores2, hasUnread: stateFromStores3, canMarkUnread: canMarkChannelUnread, isModerator: isThreadModerator, isAuthor: stateFromStores6 === id, canManageThread, developerModeEnabled: setting, existingPin, messageCount: stateFromStores5, canUnarchiveThread, isLurking: stateFromStores4, favorites: useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet") };
  const obj17 = { showGradient: true, startExpanded: null, header: null, children: null };
  const arr8 = getActionSheetButtons({ thread, parentChannel, hasJoinedPost: stateFromStores1, muted: stateFromStores2, hasUnread: stateFromStores3, canMarkUnread: canMarkChannelUnread, isModerator: isThreadModerator, isAuthor: stateFromStores6 === id, canManageThread, developerModeEnabled: setting, existingPin, messageCount: stateFromStores5, canUnarchiveThread, isLurking: stateFromStores4, favorites: useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet") });
  obj17.startExpanded = thread(1615).isMetaQuest();
  obj17.header = tmp20(thread(10737).ActionSheetIconHeader, { title: tmp18, icon: tmp21 });
  obj17.children = arr8.map((buttons) => {
    buttons = buttons.buttons;
    return jsx(ActionSheetRow.ActionSheetRow.Group, {
      hasIcons: true,
      children: buttons.map((item, index) => {
        ({ label, onPress: closure_0 } = item);
        ({ IconComponent, disableColor, isDestructive, trailing } = item);
        const intl = thread(1126).intl;
        let tmp3 = label === intl.string(thread(1126).t.nEOg1N);
        if (!tmp3) {
          const intl2 = thread(1126).intl;
          tmp3 = label === intl2.string(thread(1126).t.xwMqD7);
        }
        return closure_1_14(thread(6697).ActionSheetRow, {
          variant: str,
          icon: closure_1_14(thread(6697).ActionSheetRow.Icon, { IconComponent, disableColor }),
          label,
          trailing,
          onPress() {
            closure_1_0();
            closure_2_1();
          }
        }, index);
      })
    }, buttons.sectionKey);
  });
  return tmp20(thread(6701).ActionSheet, obj17);
});