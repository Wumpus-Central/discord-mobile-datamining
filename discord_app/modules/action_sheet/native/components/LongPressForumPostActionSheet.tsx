// discord_app/modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../ActionSheetActionCreators.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
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

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11, ChannelSettingsSections: closure_12 } = Constants);
const ChannelFlags = fn(1965).ChannelFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  thread = thread.thread;
  ({ parentChannel, onClose: importDefault } = thread);
  dependencyMap = thread.getGuildId();
  const tmp = thread;
  let items = [GuildStore];
  const stateFromStores = thread(504).useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj = thread(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = thread(504).useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(thread.id));
  let obj2 = thread(504);
  const items2 = [JoinedThreadsStore];
  const stateFromStores2 = thread(504).useStateFromStores(items2, () => JoinedThreadsStore.isMuted(thread.id));
  let obj3 = thread(504);
  const items3 = [ReadStateStore];
  const stateFromStores3 = thread(504).useStateFromStores(items3, () => ReadStateStore.hasUnreadOrMentions(thread.id));
  const obj4 = thread(504);
  const canMarkChannelUnread = thread(10393).useCanMarkChannelUnread(thread);
  const obj5 = thread(10393);
  const items4 = [LurkingStore];
  const stateFromStores4 = thread(504).useStateFromStores(items4, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  const obj6 = thread(504);
  const firstMessage = thread(7418).useFirstForumPostMessage(thread).firstMessage;
  const obj7 = thread(7418);
  const isThreadModerator = thread(7383).useIsThreadModerator(parentChannel);
  const obj8 = thread(7383);
  const canManageThread = thread(7383).useCanManageThread(thread);
  const obj9 = thread(7383);
  const canUnarchiveThread = thread(7383).useCanUnarchiveThread(thread);
  const obj10 = thread(7383);
  const existingPin = thread(8007).useExistingPin(thread);
  const obj11 = thread(8007);
  const items5 = [ThreadMessageStore];
  const stateFromStores5 = thread(504).useStateFromStores(items5, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(1936).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj12 = thread(504);
  const items6 = [AuthenticationStore];
  let id;
  const stateFromStores6 = thread(504).useStateFromStores(items6, () => parentChannel.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const obj13 = thread(504);
  const tmp18 = useChannelNameDefault(thread);
  if (null != stateFromStores) {
    const obj14 = { guild: stateFromStores, size: tmp(5672).GuildIconSizes.LARGE };
    let tmp21 = jsx(GuildIconDefault, { guild: stateFromStores, size: tmp(5672).GuildIconSizes.LARGE });
    let tmp20 = jsx;
    const tmp17Result = GuildIconDefault;
  } else {
    tmp20 = jsx;
    const obj15 = { size: tmp(1177).AvatarSizes.LARGE, channel: thread };
    tmp21 = jsx(tmp(1177).Avatar, { size: tmp(1177).AvatarSizes.LARGE, channel: thread });
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
    const obj16 = { sectionKey: "favorites", buttons: null };
    const items8 = [tmp26];
    obj16.buttons = items8;
    items7.push(obj16);
  }
  const obj17 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(10390).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!stateFromStores3) {
      if (canMarkChannelUnread) {
        let buttons = obj17.buttons;
        const obj18 = { label: null, IconComponent: null, onPress: null };
        let intl = tmp(1115).intl;
        obj18.label = intl.string(tmp(1115).t.RpE9k7);
        obj18.IconComponent = tmp(10391).ChatMarkUnreadIcon;
        obj18.onPress = function onPress() {
          markChannelUnreadDefault(thread.id);
        };
        buttons.push(obj18);
      }
      items7.push(obj17);
      const obj19 = { sectionKey: "channel-actions", buttons: [] };
      if (!stateFromStores4) {
        const buttons1 = obj19.buttons;
        const push = buttons1.push;
        const obj20 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp(1115).intl;
        const string = intl3.string;
        const t = tmp(1115).t;
        if (stateFromStores1) {
          obj20.label = string(t["2LsZdT"]);
          obj20.IconComponent = tmp(4580).UserMinusIcon;
          obj20.onPress = function onPress() {
            return ThreadActionCreatorsDefault.leaveThread(thread, "Context Menu");
          };
          push(obj20);
        } else {
          obj20.label = string(t.ihLPiO);
          obj20.IconComponent = tmp(9927).BellIcon;
          obj20.onPress = function onPress() {
            return ThreadActionCreatorsDefault.joinThread(thread, "Context Menu");
          };
          push(obj20);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj19.buttons;
          const obj21 = { label: null, IconComponent: null, onPress: null };
          let intl5 = tmp(1115).intl;
          obj21.label = intl5.string(tmp(1115).t.cnRubV);
          obj21.IconComponent = tmp(4602).ClockIcon;
          obj21.onPress = function onPress() {
            ThreadActionCreatorsDefault.unarchiveThread(thread, false);
          };
          buttons2.push(obj21);
        }
      } else if (canManageThread) {
        const buttons3 = obj19.buttons;
        const obj22 = { label: null, IconComponent: null, onPress: null };
        let intl4 = tmp(1115).intl;
        obj22.label = intl4.string(tmp(1115).t.BTs4Kb);
        obj22.IconComponent = tmp(4592).XLargeIcon;
        obj22.onPress = function onPress() {
          ThreadActionCreatorsDefault.archiveThread(thread, false);
        };
        buttons3.push(obj22);
      }
      if (canManageThread) {
        const buttons4 = obj19.buttons;
        const push2 = buttons4.push;
        const obj23 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp(1115).intl;
        const string2 = intl6.string;
        const t2 = tmp(1115).t;
        if (locked) {
          obj23.label = string2(t2["/OKSxp"]);
          obj23.IconComponent = tmp(10395).LockUnlockedIcon;
          obj23.onPress = function onPress() {
            ThreadActionCreatorsDefault.unlockThread(thread);
          };
          push2(obj23);
        } else {
          obj23.label = string2(t2["Ur/0Na"]);
          obj23.IconComponent = tmp(5182).LockIcon;
          obj23.onPress = function onPress() {
            ThreadActionCreatorsDefault.lockThread(thread);
          };
          push2(obj23);
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
        const buttons5 = obj19.buttons;
        const obj24 = { label: null, IconComponent: null, onPress: null };
        let intl7 = tmp(1115).intl;
        obj24.label = intl7.string(tmp(1115).t.NP1yHG);
        obj24.IconComponent = tmp(10397).PencilIcon;
        obj24.onPress = function onPress() {
          const obj2 = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
          const obj = ForumComposerModalActionCreators;
          obj2.messageId = SnowflakeUtilsDefault.castChannelIdAsMessageId(thread.id);
          const items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
          obj2.analyticsLocations = items;
          obj2.analyticsLocationObject = { section: constants3.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
          const result = obj.openCreateForumPostModal(obj2);
        };
        buttons5.push(obj24);
      }
      if (canManageThread) {
        const buttons6 = obj19.buttons;
        const obj25 = { label: null, IconComponent: null, onPress: null };
        const intl8 = tmp(1115).intl;
        obj25.label = intl8.string(tmp(1115).t.SGuVbR);
        obj25.IconComponent = tmp(7494).SettingsIcon;
        obj25.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
          ChannelSettingsActionCreatorsDefault.open(thread.id);
        };
        buttons6.push(obj25);
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj19.buttons;
          const obj26 = { label: null, IconComponent: null, onPress: null };
          const intl9 = tmp(1115).intl;
          obj26.label = intl9.string(tmp(1115).t["436ZFw"]);
          obj26.IconComponent = tmp(11404).TagsIcon;
          obj26.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11402, dependencyMap.paths), "ForumPostTagsActionSheet", { thread, parentChannel, canManageThread });
          };
          buttons7.push(obj26);
        }
      }
      const buttons8 = obj19.buttons;
      const obj27 = { label: null, IconComponent: null, onPress: null };
      const intl10 = tmp(1115).intl;
      obj27.label = intl10.string(tmp(1115).t.WqhZss);
      obj27.IconComponent = tmp(4582).LinkIcon;
      obj27.onPress = function onPress() {
        const result = messages_MessagesUtils.handleCopyLinkForumPost(thread.guild_id, thread.id, { section: constants3.CONTEXT_MENU });
      };
      buttons8.push(obj27);
      items7.push(obj19);
      if (stateFromStores4) {
        const obj28 = { sectionKey: "admin-actions", buttons: [] };
        if (isThreadModerator) {
          const buttons9 = obj28.buttons;
          const push4 = buttons9.push;
          const obj29 = { label: null, IconComponent: null, onPress: null };
          const intl12 = tmp(1115).intl;
          const string4 = intl12.string;
          const t3 = tmp(1115).t;
          if (hasFlagResult) {
            obj29.label = string4(t3.trD8ao);
            obj29.IconComponent = tmp(11112).PinIcon;
            obj29.onPress = function onPress() {
              return ThreadActionCreatorsDefault.unpin(thread);
            };
            push4(obj29);
          } else {
            obj29.label = string4(t3.EnaWhu);
            obj29.IconComponent = tmp(11112).PinIcon;
            obj29.onPress = function onPress() {
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
                  require("ThreadActionCreators").replacePin(closure_1_5, thread);
                };
                AlertActionCreatorsDefault.show(obj3);
              } else {
                ThreadActionCreatorsDefault.pin(thread);
              }
            };
            push4(obj29);
          }
        }
        if (!isThreadModerator) {
          if (!tmp24) {
            items7.push(obj28);
            if (setting) {
              const obj30 = { sectionKey: "developer-actions", buttons: null };
              const obj31 = { label: null, IconComponent: null, onPress: null };
              const intl14 = tmp(1115).intl;
              obj31.label = intl14.string(tmp(1115).t.DQ797g);
              obj31.IconComponent = tmp(10778).IdIcon;
              obj31.onPress = function onPress() {
                ClipboardUtils.copy(thread.id);
                ToastUtils.presentPostIdCopied();
              };
              const items9 = [obj31];
              obj30.buttons = items9;
              items7.push(obj30);
            }
            const obj32 = { showGradient: true, startExpanded: tmp(1609).isMetaQuest(), header: null, children: null };
            const obj33 = { title: tmp18, icon: tmp21 };
            obj32.header = tmp20(tmp(11159).ActionSheetIconHeader, obj33);
            obj32.children = items7.map((buttons) => {
              buttons = buttons.buttons;
              return jsx(ActionSheetRow.ActionSheetRow.Group, {
                hasIcons: true,
                children: buttons.map((item, index) => {
                  ({ label, onPress: closure_0 } = item);
                  ({ IconComponent, disableColor, isDestructive, trailing } = item);
                  const intl = thread(1115).intl;
                  let tmp3 = label === intl.string(thread(1115).t.nEOg1N);
                  if (!tmp3) {
                    const intl2 = thread(1115).intl;
                    tmp3 = label === intl2.string(thread(1115).t.xwMqD7);
                  }
                  return closure_1_14(thread(7313).ActionSheetRow, {
                    variant: str,
                    icon: closure_1_14(thread(7313).ActionSheetRow.Icon, { IconComponent, disableColor }),
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
            return tmp20(tmp(7311).ActionSheet, obj32);
          }
        }
        if (tmp24) {
          tmp24 = !isThreadModerator;
        }
        if (tmp24) {
          tmp24 = stateFromStores5 > 0;
        }
        closure_129_7 = tmp24;
        const buttons10 = obj28.buttons;
        const intl13 = tmp(1115).intl;
        const string5 = intl13.string;
        let t4 = tmp(1115).t;
        if (tmp24) {
          let string5Result = string5(t4.xwMqD7);
        } else {
          string5Result = string5(t4.nEOg1N);
        }
        const obj34 = {
          label: string5Result,
          IconComponent: tmp(4597).TrashIcon,
          onPress() {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t.nEOg1N);
                  const intl2 = util.intl;
                  const su3voL = util.t.su3voL;
                  { postName: null }.postName = "\"" + thread.name + "\"";
                  if (GuildStore) {
                    const intl4 = util.intl;
                    let stringResult1 = intl4.string(util.t.xwMqD7);
                    const intl5 = util.intl;
                    let stringResult2 = intl5.string(util.t.RUHcyk);
                  } else {
                    let tmp6 = LurkingStore;
                    if (LurkingStore) {
                      tmp6 = !dependencyMap;
                    }
                    stringResult2 = tmp5;
                    stringResult1 = stringResult;
                    if (tmp6) {
                      const intl3 = util.intl;
                      const obj = { postName: null };
                      const _HermesInternal = HermesInternal;
                      obj.postName = "\"" + thread.name + "\"";
                      stringResult2 = intl3.format(util.t["6/pY2+"], obj);
                      stringResult1 = stringResult;
                    }
                  }
                  let obj3 = { title: stringResult1, body: stringResult2, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
                  const intl6 = util.intl;
                  obj3.cancelText = intl6.string(util.t.gm1Vej);
                  const intl7 = util.intl;
                  obj3.confirmText = intl7.string(util.t.p89ACt);
                  obj3.onConfirm = function onConfirm() {
                    if (closure_1_7) {
                      const tmpResult = MessageActionCreatorsDefault;
                      tmpResult.deleteMessage(user.id, SnowflakeUtilsDefault.castChannelIdAsMessageId(user.id));
                    } else {
                      ChannelSettingsActionCreatorsDefault.deleteChannel(user.id);
                      const tmpResult2 = ChannelSettingsActionCreatorsDefault;
                    }
                  };
                  obj3.confirmColor = native.ButtonColors.RED;
                  AlertActionCreatorsDefault.show(obj3);
                }
        };
        t4 = buttons10.push(obj34);
      } else {
        const obj35 = { sectionKey: "notifications", buttons: [] };
        let buttons11 = obj35.buttons;
        let push3 = buttons11.push;
        let obj36 = { label: null, IconComponent: null, onPress: null };
        let intl11 = tmp(1115).intl;
        let string3 = intl11.string;
        let onPress = tmp(1115).t;
        if (stateFromStores2) {
          obj36.label = string3(onPress["0JQfsP"]);
          obj36.IconComponent = tmp(9927).BellIcon;
          obj36.onPress = function onPress() {
            return ThreadActionCreatorsDefault.setNotificationSettings(thread, { muted: !closure_1_1 });
          };
          push3(obj36);
        } else {
          obj36.label = string3(onPress["nP+Ykd"]);
          obj36.IconComponent = tmp(9213).BellSlashIcon;
          obj36.onPress = function onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { guildId: null, channelId: null };
            const combined = "muteSettings" + thread.id;
            obj2.guildId = thread.getGuildId();
            obj2.channelId = thread.id;
            obj.openLazy(asyncRequireImpl(10290, dependencyMap.paths), combined, obj2);
          };
          push3(obj36);
        }
        buttons11 = obj35.buttons;
        push3 = buttons11.push;
        const obj37 = { label: null, IconComponent: null, onPress: null, disableColor: true };
        intl11 = tmp(1115).intl;
        string3 = intl11.string;
        obj37.label = string3(tmp(1115).t.HcoRu0);
        obj37.IconComponent = tmp(11120).ChannelNotificationIcon;
        onPress = function onPress() {
          return threadActionSheets.showThreadNotificationsBottomSheet(thread);
        };
        obj37.onPress = onPress;
        push3(obj37);
        obj36 = items7.push(obj35);
      }
    }
  }
  const buttons12 = obj17.buttons;
  const obj38 = { label: null, IconComponent: null, onPress: null };
  let intl2 = tmp(1115).intl;
  obj38.label = intl2.string(tmp(1115).t.e6RscS);
  obj38.IconComponent = tmp(7082).EyeIcon;
  obj38.onPress = function onPress() {
    ReadStateActionCreators.ack(thread.id, { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL }, true, true);
  };
  buttons12.push(obj38);
  hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
};