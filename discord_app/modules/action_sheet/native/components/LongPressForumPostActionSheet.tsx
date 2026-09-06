// discord_app/modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../ActionSheetActionCreators.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ThreadActionCreatorsDefault from "../../../threads/ThreadActionCreators.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import buildFavoritesSectionButtonsDefault from "../../../favorites/native/buildFavoritesSectionButtons.tsx";
import markChannelUnreadDefault from "../../../channel/markChannelUnread.tsx";
import ForumComposerModalActionCreators from "../../../forums/native/composer/ForumComposerModalActionCreators.tsx";
import useFavoritesGuildChannelActionsDefault from "../../../favorites/native/action/useFavoritesGuildChannelActions.tsx";
import messages_MessagesUtils from "../../../messages/native/MessagesUtils.tsx";
import threadActionSheets from "../../../threads/native/threadActionSheets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import ThreadMessageStore from "../../../threads/ThreadMessageStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  thread = thread.thread;
  ({ parentChannel, onClose: importDefault } = thread);
  dependencyMap = thread.getGuildId();
  const tmp = thread;
  let obj = thread(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj1 = thread(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(thread.id));
  let obj2 = thread(504);
  const items2 = [JoinedThreadsStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => JoinedThreadsStore.isMuted(thread.id));
  let obj3 = thread(504);
  const items3 = [ReadStateStore];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => ReadStateStore.hasUnreadOrMentions(thread.id));
  let obj4 = thread(10246);
  const canMarkChannelUnread = obj4.useCanMarkChannelUnread(thread);
  let obj5 = thread(504);
  const items4 = [LurkingStore];
  const stateFromStores4 = obj5.useStateFromStores(items4, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  let obj6 = thread(7304);
  const firstMessage = obj6.useFirstForumPostMessage(thread).firstMessage;
  let obj7 = thread(7269);
  const isThreadModerator = obj7.useIsThreadModerator(parentChannel);
  let obj8 = thread(7269);
  const canManageThread = obj8.useCanManageThread(thread);
  let obj9 = thread(7269);
  const canUnarchiveThread = obj9.useCanUnarchiveThread(thread);
  let obj10 = thread(7885);
  const existingPin = obj10.useExistingPin(thread);
  let obj11 = thread(504);
  const items5 = [ThreadMessageStore];
  const stateFromStores5 = obj11.useStateFromStores(items5, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(1935).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj12 = thread(504);
  const items6 = [AuthenticationStore];
  let id;
  const stateFromStores6 = obj12.useStateFromStores(items6, () => parentChannel.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const tmp18 = useChannelNameDefault(thread, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: tmp(5584).GuildIconSizes.LARGE };
    let tmp21 = jsx(tmp17(5584), { guild: stateFromStores, size: tmp(5584).GuildIconSizes.LARGE });
    let tmp20 = jsx;
    const tmp17Result = tmp17(5584);
  } else {
    tmp20 = jsx;
    obj = { size: tmp(1178).AvatarSizes.LARGE, channel: thread };
    tmp21 = jsx(tmp(1178).Avatar, { size: tmp(1178).AvatarSizes.LARGE, channel: thread });
  }
  let tmp24 = stateFromStores6 === id;
  closure_129_0 = thread;
  closure_129_1 = stateFromStores2;
  closure_129_2 = isThreadModerator;
  closure_129_3 = tmp24;
  closure_129_4 = canManageThread;
  closure_129_5 = existingPin;
  closure_129_6 = parentChannel;
  const threadMetadata = thread.threadMetadata;
  if (threadMetadata != null) {
    const archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    const locked = threadMetadata2.locked;
  }
  const items7 = [];
  const tmp19 = useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet");
  const tmp26 = buildFavoritesSectionButtonsDefault(tmp19);
  if (null != tmp26) {
    obj1 = { sectionKey: "favorites", buttons: null };
    const items8 = [tmp26];
    obj1.buttons = items8;
    items7.push(obj1);
  }
  obj2 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(10243).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!stateFromStores3) {
      if (canMarkChannelUnread) {
        let buttons = obj2.buttons;
        obj3 = { label: null, IconComponent: null, onPress: null };
        let intl = tmp(1114).intl;
        obj3.label = intl.string(tmp(1114).t.RpE9k7);
        obj3.IconComponent = tmp(10244).ChatMarkUnreadIcon;
        obj3.onPress = function onPress() {
          markChannelUnreadDefault(thread.id);
        };
        buttons.push(obj3);
      }
      items7.push(obj2);
      obj4 = { sectionKey: "channel-actions", buttons: [] };
      if (!stateFromStores4) {
        const buttons1 = obj4.buttons;
        const push = buttons1.push;
        obj5 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp(1114).intl;
        const string = intl3.string;
        const t = tmp(1114).t;
        if (stateFromStores1) {
          obj5.label = string(t["2LsZdT"]);
          obj5.IconComponent = tmp(4501).UserMinusIcon;
          obj5.onPress = function onPress() {
            return ThreadActionCreatorsDefault.leaveThread(thread, "Context Menu");
          };
          push(obj5);
        } else {
          obj5.label = string(t.ihLPiO);
          obj5.IconComponent = tmp(9776).BellIcon;
          obj5.onPress = function onPress() {
            return ThreadActionCreatorsDefault.joinThread(thread, "Context Menu");
          };
          push(obj5);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj4.buttons;
          obj6 = { label: null, IconComponent: null, onPress: null };
          let intl5 = tmp(1114).intl;
          obj6.label = intl5.string(tmp(1114).t.cnRubV);
          obj6.IconComponent = tmp(4523).ClockIcon;
          obj6.onPress = function onPress() {
            ThreadActionCreatorsDefault.unarchiveThread(thread, false);
          };
          buttons2.push(obj6);
        }
      } else if (canManageThread) {
        const buttons3 = obj4.buttons;
        obj7 = { label: null, IconComponent: null, onPress: null };
        let intl4 = tmp(1114).intl;
        obj7.label = intl4.string(tmp(1114).t.BTs4Kb);
        obj7.IconComponent = tmp(4513).XLargeIcon;
        obj7.onPress = function onPress() {
          ThreadActionCreatorsDefault.archiveThread(thread, false);
        };
        buttons3.push(obj7);
      }
      if (canManageThread) {
        const buttons4 = obj4.buttons;
        const push2 = buttons4.push;
        obj8 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp(1114).intl;
        const string2 = intl6.string;
        const t2 = tmp(1114).t;
        if (locked) {
          obj8.label = string2(t2["/OKSxp"]);
          obj8.IconComponent = tmp(10248).LockUnlockedIcon;
          obj8.onPress = function onPress() {
            ThreadActionCreatorsDefault.unlockThread(thread);
          };
          push2(obj8);
        } else {
          obj8.label = string2(t2["Ur/0Na"]);
          obj8.IconComponent = tmp(5095).LockIcon;
          obj8.onPress = function onPress() {
            ThreadActionCreatorsDefault.lockThread(thread);
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
        let intl7 = tmp(1114).intl;
        obj9.label = intl7.string(tmp(1114).t.NP1yHG);
        obj9.IconComponent = tmp(10250).PencilIcon;
        obj9.onPress = function onPress() {
          let obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: SnowflakeUtilsDefault.castChannelIdAsMessageId(thread.id), isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
          const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
          obj.analyticsLocations = items;
          obj = { section: constants3.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
          obj.analyticsLocationObject = obj;
          const result = obj.openCreateForumPostModal(obj);
        };
        buttons5.push(obj9);
      }
      if (canManageThread) {
        const buttons6 = obj4.buttons;
        obj10 = { label: null, IconComponent: null, onPress: null };
        const intl8 = tmp(1114).intl;
        obj10.label = intl8.string(tmp(1114).t.SGuVbR);
        obj10.IconComponent = tmp(7380).SettingsIcon;
        obj10.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
          ChannelSettingsActionCreatorsDefault.open(thread.id);
        };
        buttons6.push(obj10);
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj4.buttons;
          obj11 = { label: null, IconComponent: null, onPress: null };
          const intl9 = tmp(1114).intl;
          obj11.label = intl9.string(tmp(1114).t["436ZFw"]);
          obj11.IconComponent = tmp(11250).TagsIcon;
          obj11.onPress = function onPress() {
            const obj = { thread, parentChannel, canManageThread };
            obj.openLazy(asyncRequireImpl(11248, dependencyMap.paths), "ForumPostTagsActionSheet", obj);
          };
          buttons7.push(obj11);
        }
      }
      const buttons8 = obj4.buttons;
      obj12 = { label: null, IconComponent: null, onPress: null };
      const intl10 = tmp(1114).intl;
      obj12.label = intl10.string(tmp(1114).t.WqhZss);
      obj12.IconComponent = tmp(4503).LinkIcon;
      obj12.onPress = function onPress() {
        const obj = { section: constants3.CONTEXT_MENU };
        const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj);
      };
      buttons8.push(obj12);
      items7.push(obj4);
      if (stateFromStores4) {
        const obj13 = { sectionKey: "admin-actions", buttons: [] };
        if (isThreadModerator) {
          const buttons9 = obj13.buttons;
          const push4 = buttons9.push;
          const obj14 = { label: null, IconComponent: null, onPress: null };
          const intl12 = tmp(1114).intl;
          const string4 = intl12.string;
          const t3 = tmp(1114).t;
          if (hasFlagResult) {
            obj14.label = string4(t3.trD8ao);
            obj14.IconComponent = tmp(10953).PinIcon;
            obj14.onPress = function onPress() {
              return ThreadActionCreatorsDefault.unpin(thread);
            };
            push4(obj14);
          } else {
            obj14.label = string4(t3.EnaWhu);
            obj14.IconComponent = tmp(10953).PinIcon;
            obj14.onPress = function onPress() {
              if (null != ThreadMessageStore) {
                let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                const intl = util.intl;
                obj.title = intl.string(util.t.IMbjxo);
                const intl2 = util.intl;
                obj.body = intl2.string(util.t["mi5+Vl"]);
                const intl3 = util.intl;
                obj.cancelText = intl3.string(util.t.gm1Vej);
                const intl4 = util.intl;
                obj.confirmText = intl4.string(util.t.p89ACt);
                obj.onConfirm = function onConfirm() {
                  require("ThreadActionCreators").replacePin(closure_1_5, thread);
                };
                AlertActionCreatorsDefault.show(obj);
              } else {
                obj = ThreadActionCreatorsDefault;
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
              const intl14 = tmp(1114).intl;
              obj16.label = intl14.string(tmp(1114).t.DQ797g);
              obj16.IconComponent = tmp(10629).IdIcon;
              obj16.onPress = function onPress() {
                ClipboardUtils.copy(thread.id);
                ToastUtils.presentPostIdCopied();
              };
              const items9 = [obj16];
              obj15.buttons = items9;
              items7.push(obj15);
            }
            const obj17 = { showGradient: true, startExpanded: tmp(1608).isMetaQuest(), header: null, children: null };
            const obj18 = { title: tmp18, icon: tmp21 };
            obj17.header = tmp20(tmp(10998).ActionSheetIconHeader, obj18);
            obj17.children = items7.map((buttons) => {
              buttons = buttons.buttons;
              return jsx(ActionSheetRow.ActionSheetRow.Group, {
                hasIcons: true,
                children: buttons.map((item, index) => {
                  ({ label, onPress: closure_0 } = item);
                  ({ IconComponent, disableColor, isDestructive, trailing } = item);
                  const intl = thread(1114).intl;
                  let tmp3 = label === intl.string(thread(1114).t.nEOg1N);
                  if (!tmp3) {
                    const intl2 = tmp(1114).intl;
                    tmp3 = label === intl2.string(tmp(1114).t.xwMqD7);
                  }
                  return closure_1_14(thread(7200).ActionSheetRow, {
                    variant: str,
                    icon: closure_1_14(thread(7200).ActionSheetRow.Icon, { IconComponent, disableColor }),
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
            return tmp20(tmp(7198).ActionSheet, obj17);
          }
        }
        if (tmp24) {
          tmp24 = !isThreadModerator;
        }
        if (tmp24) {
          tmp24 = stateFromStores5 > 0;
        }
        closure_129_7 = tmp24;
        const buttons10 = obj13.buttons;
        const intl13 = tmp(1114).intl;
        const string5 = intl13.string;
        let t4 = tmp(1114).t;
        if (tmp24) {
          let string5Result = string5(t4.xwMqD7);
        } else {
          string5Result = string5(t4.nEOg1N);
        }
        const obj19 = {
          label: string5Result,
          IconComponent: tmp(4518).TrashIcon,
          onPress() {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t.nEOg1N);
                  const intl2 = util.intl;
                  const su3voL = util.t.su3voL;
                  { postName: null }.postName = "\"" + thread.name + "\"";
                  if (GuildStore) {
                    const intl4 = tmp(1114).intl;
                    let stringResult1 = intl4.string(tmp(1114).t.xwMqD7);
                    const intl5 = tmp(1114).intl;
                    let stringResult2 = intl5.string(tmp(1114).t.RUHcyk);
                  } else {
                    let tmp6 = LurkingStore;
                    if (LurkingStore) {
                      tmp6 = !dependencyMap;
                    }
                    stringResult2 = tmp5;
                    stringResult1 = stringResult;
                    if (tmp6) {
                      const intl3 = tmp(1114).intl;
                      let obj = { postName: null };
                      const _HermesInternal = HermesInternal;
                      obj.postName = "\"" + thread.name + "\"";
                      stringResult2 = intl3.format(tmp(1114).t["6/pY2+"], obj);
                      stringResult1 = stringResult;
                    }
                  }
                  obj = { title: stringResult1, body: stringResult2, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
                  const intl6 = tmp(1114).intl;
                  obj.cancelText = intl6.string(util.t.gm1Vej);
                  const intl7 = tmp(1114).intl;
                  obj.confirmText = intl7.string(util.t.p89ACt);
                  obj.onConfirm = function onConfirm() {
                    if (closure_1_7) {
                      let tmpResult = tmp(tmp2[43]);
                      tmpResult.deleteMessage(user.id, SnowflakeUtilsDefault.castChannelIdAsMessageId(user.id));
                    } else {
                      tmpResult = tmp(tmp2[29]);
                      tmpResult.deleteChannel(user.id);
                    }
                  };
                  obj.confirmColor = native.ButtonColors.RED;
                  AlertActionCreatorsDefault.show(obj);
                }
        };
        t4 = buttons10.push(obj19);
      } else {
        const obj20 = { sectionKey: "notifications", buttons: [] };
        let buttons11 = obj20.buttons;
        let push3 = buttons11.push;
        let obj21 = { label: null, IconComponent: null, onPress: null };
        let intl11 = tmp(1114).intl;
        let string3 = intl11.string;
        let onPress = tmp(1114).t;
        if (stateFromStores2) {
          obj21.label = string3(onPress["0JQfsP"]);
          obj21.IconComponent = tmp(9776).BellIcon;
          obj21.onPress = function onPress() {
            const obj = { muted: !closure_1_1 };
            return obj.setNotificationSettings(thread, obj);
          };
          push3(obj21);
        } else {
          obj21.label = string3(onPress["nP+Ykd"]);
          obj21.IconComponent = tmp(9059).BellSlashIcon;
          obj21.onPress = function onPress() {
            const obj = { guildId: null, channelId: null };
            const combined = "muteSettings" + thread.id;
            obj.guildId = thread.getGuildId();
            obj.channelId = thread.id;
            obj.openLazy(asyncRequireImpl(10144, dependencyMap.paths), combined, obj);
          };
          push3(obj21);
        }
        buttons11 = obj20.buttons;
        push3 = buttons11.push;
        const obj22 = { label: null, IconComponent: null, onPress: null, disableColor: true };
        intl11 = tmp(1114).intl;
        string3 = intl11.string;
        obj22.label = string3(tmp(1114).t.HcoRu0);
        obj22.IconComponent = tmp(10961).ChannelNotificationIcon;
        onPress = function onPress() {
          return threadActionSheets.showThreadNotificationsBottomSheet(thread);
        };
        obj22.onPress = onPress;
        push3(obj22);
        obj21 = items7.push(obj20);
      }
    }
  }
  const buttons12 = obj2.buttons;
  const obj23 = { label: null, IconComponent: null, onPress: null };
  let intl2 = tmp(1114).intl;
  obj23.label = intl2.string(tmp(1114).t.e6RscS);
  obj23.IconComponent = tmp(6970).EyeIcon;
  obj23.onPress = function onPress() {
    const obj = { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
    obj.ack(thread.id, obj, true, true);
  };
  buttons12.push(obj23);
};