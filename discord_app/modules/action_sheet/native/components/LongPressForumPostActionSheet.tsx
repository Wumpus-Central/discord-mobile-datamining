// discord_app/modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl16 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../ActionSheetActionCreators.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow2 from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ThreadActionCreatorsDefault from "../../../threads/ThreadActionCreators.tsx";
import messages_MessagesUtils from "../../../messages/native/MessagesUtils.tsx";
import markChannelUnreadDefault from "../../../channel/markChannelUnread.tsx";
import ForumComposerModalActionCreators from "../../../forums/native/composer/ForumComposerModalActionCreators.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import useFavoritesGuildChannelActionsDefault from "../../../favorites/native/action/useFavoritesGuildChannelActions.tsx";
import threadActionSheets from "../../../threads/native/threadActionSheets.tsx";
import react from "../../../../../_runtime/00019_react.js";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import ThreadMessageStore from "../../../threads/ThreadMessageStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let c10;
let c9;
let closure_12;
let unpackModuleId;
function getActionSheetButtons(thread) {
  let archived;
  let canMarkUnread;
  let canUnarchiveThread;
  let developerModeEnabled;
  let favorites;
  let hasJoinedPost;
  let hasUnread;
  let intl;
  let intl10;
  let intl12;
  let intl15;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let locked;
  let messageCount;
  let parentChannel;
  thread = thread.thread;
  const muted = thread.muted;
  const isModerator = thread.isModerator;
  const canManageThread = thread.canManageThread;
  ({ existingPin: ThreadMessageStore, parentChannel } = thread);
  const isLurking = thread.isLurking;
  let isAuthor;
  const threadMetadata = thread.threadMetadata;
  ({ hasJoinedPost, hasUnread, canMarkUnread, developerModeEnabled, messageCount, canUnarchiveThread, favorites } =
    thread);
  if (threadMetadata != null) {
    archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    locked = threadMetadata2.locked;
  }
  let items = [];
  let tmp2 = isModerator;
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const tmp3 = muted(isModerator[10])(favorites);
  if (null != tmp3) {
    let obj = { sectionKey: "favorites", buttons: items1 };
    items1 = [tmp3];
    items.push(obj);
  }
  let obj2 = { sectionKey: "mark-as-read", buttons: [] };
  const tmp5 = thread;
  const MarkChannelUnreadExperiment = thread(tmp2[11]).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!hasUnread) {
      if (canMarkUnread) {
        const buttons = obj2.buttons;
        let obj3 = {
          label: intl.string(tmp5(tmp2[12]).t.RpE9k7),
          IconComponent: tmp5(tmp2[13]).ChatMarkUnreadIcon,
          onPress() {
            markChannelUnreadDefault(thread.id);
          },
        };
        const push = buttons.push;
        intl = tmp5(tmp2[12]).intl;
        push(obj3);
      }
      items.push(obj2);
      const obj4 = { sectionKey: "channel-actions", buttons: [] };
      if (!isLurking) {
        const buttons1 = obj4.buttons;
        const push3 = buttons1.push;
        const obj5 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp5(tmp2[12]).intl;
        const string = intl3.string;
        const t = tmp5(tmp2[12]).t;
        if (hasJoinedPost) {
          obj5.label = string(t["2LsZdT"]);
          obj5.IconComponent = tmp5(tmp2[17]).UserMinusIcon;
          obj5.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.leaveThread(thread, "Context Menu");
          };
          push3(obj5);
        } else {
          obj5.label = string(t.ihLPiO);
          obj5.IconComponent = tmp5(tmp2[19]).BellIcon;
          obj5.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.joinThread(thread, "Context Menu");
          };
          push3(obj5);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj4.buttons;
          const push5 = buttons2.push;
          const obj6 = {
            label: intl5.string(tmp5(tmp2[12]).t.cnRubV),
            IconComponent: tmp5(tmp2[20]).ClockIcon,
            onPress() {
              const obj = ThreadActionCreatorsDefault;
              obj.unarchiveThread(thread, false);
            },
          };
          intl5 = tmp5(tmp2[12]).intl;
          push5(obj6);
        }
      } else if (canManageThread) {
        const buttons3 = obj4.buttons;
        const push4 = buttons3.push;
        const obj7 = {
          label: intl4.string(tmp5(tmp2[12]).t.BTs4Kb),
          IconComponent: tmp5(tmp2[21]).XLargeIcon,
          onPress() {
            const obj = ThreadActionCreatorsDefault;
            obj.archiveThread(thread, false);
          },
        };
        intl4 = tmp5(tmp2[12]).intl;
        push4(obj7);
      }
      if (canManageThread) {
        const buttons4 = obj4.buttons;
        const push6 = buttons4.push;
        const obj8 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp5(tmp2[12]).intl;
        const string2 = intl6.string;
        const t2 = tmp5(tmp2[12]).t;
        if (locked) {
          obj8.label = string2(t2["/OKSxp"]);
          obj8.IconComponent = tmp5(tmp2[22]).LockUnlockedIcon;
          obj8.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            obj.unlockThread(thread);
          };
          push6(obj8);
        } else {
          obj8.label = string2(t2["Ur/0Na"]);
          obj8.IconComponent = tmp5(tmp2[23]).LockIcon;
          obj8.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            obj.lockThread(thread);
          };
          push6(obj8);
        }
      }
      const tmp16 = isAuthor && !(!isModerator && thread.isLockedThread());
      if (tmp16) {
        const buttons5 = obj4.buttons;
        const push7 = buttons5.push;
        const obj9 = {
          label: intl7.string(tmp5(tmp2[12]).t.NP1yHG),
          IconComponent: tmp5(tmp2[24]).PencilIcon,
          onPress() {
            let items;
            let obj2;
            let obj3;
            const obj = {
              guildId: parentChannel.guild_id,
              parentChannelId: parentChannel.id,
              threadId: thread.id,
              messageId: obj2.castChannelIdAsMessageId(thread.id),
              isEdit: true,
              analyticsLocations: items,
              analyticsLocationObject: obj3,
            };
            const openCreateForumPostModal = ForumComposerModalActionCreators.openCreateForumPostModal;
            ForumComposerModalActionCreators;
            obj2 = SnowflakeUtilsDefault;
            items = [AnalyticsLocationDefault.FORUM_CHANNEL, AnalyticsLocationDefault.GUILD_CHANNEL];
            obj3 = { section: unpackModuleId.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
            const result = openCreateForumPostModal(obj);
          },
        };
        intl7 = tmp5(tmp2[12]).intl;
        push7(obj9);
      }
      if (canManageThread) {
        const buttons6 = obj4.buttons;
        const push8 = buttons6.push;
        const obj10 = {
          label: intl8.string(tmp5(tmp2[12]).t.SGuVbR),
          IconComponent: tmp5(tmp2[28]).SettingsIcon,
          onPress() {
            const obj = ChannelSettingsActionCreatorsDefault;
            obj.setSection(constants3.OVERVIEW);
            const obj2 = ChannelSettingsActionCreatorsDefault;
            obj2.open(thread.id);
          },
        };
        intl8 = tmp5(tmp2[12]).intl;
        push8(obj10);
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj4.buttons;
          const push9 = buttons7.push;
          const obj11 = {
            label: intl9.string(tmp5(tmp2[12]).t["436ZFw"]),
            IconComponent: tmp5(tmp2[30]).TagsIcon,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { thread, parentChannel, canManageThread };
              obj.openLazy(asyncRequire(11060, dependencyMap.paths), "ForumPostTagsActionSheet", obj2);
            },
          };
          intl9 = tmp5(tmp2[12]).intl;
          push9(obj11);
        }
      }
      const buttons8 = obj4.buttons;
      const push10 = buttons8.push;
      const obj12 = {
        label: intl10.string(tmp5(tmp2[12]).t.WqhZss),
        IconComponent: tmp5(tmp2[34]).LinkIcon,
        onPress() {
          const obj = messages_MessagesUtils;
          const obj2 = { section: unpackModuleId.CONTEXT_MENU };
          const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj2);
        },
      };
      intl10 = tmp5(tmp2[12]).intl;
      push10(obj12);
      items.push(obj4);
      if (!isLurking) {
        const obj13 = { sectionKey: "notifications", buttons: [] };
        const buttons9 = obj13.buttons;
        const push11 = buttons9.push;
        const obj14 = { label: null, IconComponent: null, onPress: null };
        const intl11 = tmp5(tmp2[12]).intl;
        const string3 = intl11.string;
        const t3 = tmp5(tmp2[12]).t;
        if (muted) {
          obj14.label = string3(t3["0JQfsP"]);
          obj14.IconComponent = tmp5(tmp2[19]).BellIcon;
          obj14.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            const obj2 = { muted: !muted };
            return obj.setNotificationSettings(thread, obj2);
          };
          push11(obj14);
        } else {
          obj14.label = string3(t3["nP+Ykd"]);
          obj14.IconComponent = tmp5(tmp2[36]).BellSlashIcon;
          obj14.onPress = function onPress() {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            ActionSheetActionCreatorsDefault;
            const obj = { guildId: thread.getGuildId(), channelId: thread.id };
            const tmp2 = asyncRequire(11064, dependencyMap.paths);
            const combined = "muteSettings" + thread.id;
            openLazy(tmp2, combined, obj);
          };
          push11(obj14);
        }
        const buttons10 = obj13.buttons;
        const push12 = buttons10.push;
        const obj15 = {
          label: intl12.string(tmp5(tmp2[12]).t.HcoRu0),
          IconComponent: tmp5(tmp2[38]).ChannelNotificationIcon,
          onPress() {
            const obj = threadActionSheets;
            return obj.showThreadNotificationsBottomSheet(thread);
          },
          disableColor: true,
        };
        intl12 = tmp5(tmp2[12]).intl;
        push12(obj15);
        items.push(obj13);
      }
      const obj16 = { sectionKey: "admin-actions", buttons: [] };
      if (isModerator) {
        const buttons11 = obj16.buttons;
        const push13 = buttons11.push;
        const obj17 = { label: null, IconComponent: null, onPress: null };
        const intl13 = tmp5(tmp2[12]).intl;
        const string4 = intl13.string;
        const t4 = tmp5(tmp2[12]).t;
        if (hasFlagResult) {
          obj17.label = string4(t4.trD8ao);
          obj17.IconComponent = tmp5(tmp2[40]).PinIcon;
          obj17.onPress = function onPress() {
            const obj = ThreadActionCreatorsDefault;
            return obj.unpin(thread);
          };
          push13(obj17);
        } else {
          obj17.label = string4(t4.EnaWhu);
          obj17.IconComponent = tmp5(tmp2[40]).PinIcon;
          obj17.onPress = function onPress() {
            let intl;
            let intl2;
            let intl3;
            let intl4;
            if (null != ThreadMessageStore) {
              const obj2 = {
                title: intl.string(intl16.t.IMbjxo),
                body: intl2.string(intl16.t["mi5+Vl"]),
                cancelText: intl3.string(intl16.t.gm1Vej),
                confirmText: intl4.string(intl16.t.p89ACt),
                onConfirm() {
                  const obj = muted(isModerator[18]);
                  obj.replacePin(closure_1_5, thread);
                },
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl = intl16.intl;
              intl2 = intl16.intl;
              intl3 = intl16.intl;
              intl4 = intl16.intl;
              show(obj2);
            } else {
              let obj = ThreadActionCreatorsDefault;
              obj.pin(thread);
            }
          };
          push13(obj17);
        }
      }
      if (isModerator) {
        let string5Result;
        if (isAuthor) {
          isAuthor = !isModerator;
        }
        if (isAuthor) {
          isAuthor = messageCount > 0;
        }
        const buttons12 = obj16.buttons;
        const push14 = buttons12.push;
        const intl14 = tmp5(tmp2[12]).intl;
        const string5 = intl14.string;
        const t5 = tmp5(tmp2[12]).t;
        if (isAuthor) {
          string5Result = string5(t5.xwMqD7);
        } else {
          string5Result = string5(t5.nEOg1N);
        }
        const obj18 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[42]).TrashIcon,
          onPress() {
            let intl6;
            let intl7;
            let stringResult1;
            let user;
            const intl = intl16.intl;
            const stringResult = intl.string(intl16.t.nEOg1N);
            const intl2 = intl16.intl;
            const format = intl2.format;
            const obj = { postName: '"' + thread.name + '"' };
            const su3voL = intl16.t.su3voL;
            let formatResult = format(su3voL, obj);
            if (isAuthor) {
              const intl4 = intl16.intl;
              stringResult1 = intl4.string(intl16.t.xwMqD7);
              const intl5 = intl16.intl;
              formatResult = intl5.string(intl16.t.RUHcyk);
            } else {
              stringResult1 = stringResult;
              const tmp7 = isAuthor && !isModerator;
              if (tmp7) {
                const intl3 = intl16.intl;
                const format2 = intl3.format;
                let obj2 = { postName: '"' + thread.name + '"' };
                const _HermesInternal = HermesInternal;
                const prop = intl16.t["6/pY2+"];
                formatResult = format2(prop, obj2);
                stringResult1 = stringResult;
              }
            }
            const obj3 = {
              title: stringResult1,
              body: formatResult,
              cancelText: intl6.string(intl16.t.gm1Vej),
              confirmText: intl7.string(intl16.t.p89ACt),
              onConfirm() {
                if (isAuthor) {
                  const deleteMessage = muted(isModerator[43]).deleteMessage;
                  const id = user.id;
                  muted(isModerator[43]);
                  const obj2 = muted(isModerator[26]);
                  deleteMessage(id, obj2.castChannelIdAsMessageId(user.id));
                } else {
                  const tmpResult2 = muted(isModerator[29]);
                  tmpResult2.deleteChannel(user.id);
                }
              },
              confirmColor: native.ButtonColors.RED,
            };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl6 = intl16.intl;
            intl7 = intl16.intl;
            show(obj3);
          },
        };
        push14(obj18);
      }
      items.push(obj16);
      if (developerModeEnabled) {
        const obj19 = { sectionKey: "developer-actions", buttons: items2 };
        const push15 = items.push;
        const obj20 = {
          label: intl15.string(tmp5(tmp2[12]).t.DQ797g),
          IconComponent: tmp5(tmp2[45]).IdIcon,
          onPress() {
            const obj = ClipboardUtils;
            obj.copy(thread.id);
            const obj2 = ToastUtils;
            obj2.presentPostIdCopied();
          },
        };
        intl15 = tmp5(tmp2[12]).intl;
        items2 = [obj20];
        push15(obj19);
      }
      return items;
    }
  }
  const buttons13 = obj2.buttons;
  const push2 = buttons13.push;
  const obj21 = {
    label: intl2.string(tmp5(tmp2[12]).t.e6RscS),
    IconComponent: tmp5(tmp2[15]).EyeIcon,
    onPress() {
      const obj = ReadStateActionCreators;
      const obj2 = { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(thread.id, obj2, true, true);
    },
  };
  intl2 = tmp5(tmp2[12]).intl;
  push2(obj21);
}
({
  AnalyticsObjectTypes: c9,
  AnalyticsObjects: c10,
  AnalyticsSections: unpackModuleId,
  ChannelSettingsSections: closure_12,
} = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (thread) => {
      let closure_2;
      let id;
      let onClose;
      let parentChannel;
      let tmp10;
      let tmp14;
      let tmp18;
      let tmp22;
      let tmp30;
      let tmp34;
      let tmp35;
      let tmp4;
      let tmp43;
      let tmp45;
      let tmp6;
      let tmp8;
      const tmp = thread;
      let obj = thread(576);
      const cResult = obj.c(51);
      thread = thread.thread;
      ({ parentChannel, onClose } = thread);
      if (cResult[0] !== thread) {
        const guildId = thread.getGuildId();
        let num = 0;
        cResult[0] = thread;
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
        const fn = function v() {
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
      if (cResult[6] !== thread.id) {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
        cResult[6] = thread.id;
        cResult[7] = A;
      } else {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
      }
      const tmpResult13 = tmp(504);
      const stateFromStores1 = tmpResult13.useStateFromStores(tmp10, A);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
        const items2 = [JoinedThreadsStore];
        cResult[8] = items2;
        tmp14 = items2;
      } else {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
      }
      if (cResult[9] !== thread.id) {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
        cResult[9] = thread.id;
        cResult[10] = tmp16;
      } else {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
      }
      const tmpResult14 = tmp(504);
      const stateFromStores2 = tmpResult14.useStateFromStores(tmp14, tmp16);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
        const items3 = [ReadStateStore];
        cResult[11] = items3;
        tmp18 = items3;
      } else {
        class A {
          constructor() {
            return JoinedThreadsStore.hasJoined(thread.id);
          }
        }
      }
      if (cResult[12] !== thread.id) {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
        cResult[12] = thread.id;
        cResult[13] = L;
      } else {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
      }
      const tmpResult15 = tmp(504);
      const stateFromStores3 = tmpResult15.useStateFromStores(tmp18, L);
      const tmpResult16 = tmp(10054);
      const canMarkChannelUnread = tmpResult16.useCanMarkChannelUnread(thread);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
        const items4 = [LurkingStore];
        cResult[14] = items4;
        tmp22 = items4;
      } else {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
      }
      if (cResult[15] !== tmp4) {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
        cResult[15] = tmp4;
        cResult[16] = tmp24;
      } else {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
      }
      const tmpResult17 = tmp(504);
      const stateFromStores4 = tmpResult17.useStateFromStores(tmp22, tmp24);
      const tmpResult18 = tmp(6807);
      const firstMessage = tmpResult18.useFirstForumPostMessage(thread).firstMessage;
      const tmpResult19 = tmp(6772);
      const isThreadModerator = tmpResult19.useIsThreadModerator(parentChannel);
      const tmpResult20 = tmp(6772);
      const canManageThread = tmpResult20.useCanManageThread(thread);
      const tmpResult21 = tmp(6772);
      const canUnarchiveThread = tmpResult21.useCanUnarchiveThread(thread);
      const tmpResult22 = tmp(7528);
      const existingPin = tmpResult22.useExistingPin(thread);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
        const items5 = [ThreadMessageStore];
        cResult[17] = items5;
        tmp30 = items5;
      } else {
        class L {
          constructor() {
            return ReadStateStore.hasUnreadOrMentions(thread.id);
          }
        }
      }
      if (cResult[18] !== thread.id) {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
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
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
      }
      const tmpResult23 = tmp(504);
      const stateFromStores5 = tmpResult23.useStateFromStores(tmp30, O);
      const DeveloperMode = tmp(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
        const items6 = [AuthenticationStore];
        class H {
          constructor() {
            return id.getId();
          }
        }
        cResult[20] = items6;
        cResult[21] = H;
        tmp35 = H;
        tmp34 = items6;
      } else {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
        tmp35 = cResult[21];
      }
      const tmpResult24 = tmp(504);
      const stateFromStores6 = tmpResult24.useStateFromStores(tmp34, tmp35);
      if (firstMessage != null) {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
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
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
      } else {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
      }
      if (cResult[26] === canManageThread) {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
      }
      const arr8 = getActionSheetButtons({
        thread,
        parentChannel,
        hasJoinedPost: stateFromStores1,
        muted: stateFromStores2,
        hasUnread: stateFromStores3,
        canMarkUnread: canMarkChannelUnread,
        isModerator: isThreadModerator,
        isAuthor: stateFromStores6 === undefined,
        canManageThread,
        developerModeEnabled: setting,
        existingPin,
        messageCount: stateFromStores5,
        canUnarchiveThread,
        isLurking: stateFromStores4,
        favorites: tmp38,
      });
      if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
        const isMetaQuestResult = obj15.isMetaQuest();
        class H {
          constructor() {
            return id.getId();
          }
        }
        tmp43 = isMetaQuestResult;
      } else {
        class O {
          constructor() {
            let num = ThreadMessageStore.getCount(thread.id);
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
            let num = ThreadMessageStore.getCount(thread.id);
            if (num == null) {
              num = 0;
            }
            return num;
          }
        }
        if (cResult[49] !== onClose) {
          class O {
            constructor() {
              let num = ThreadMessageStore.getCount(thread.id);
              if (num == null) {
                num = 0;
              }
              return num;
            }
          }
          cResult[49] = onClose;
          class H {
            constructor() {
              return id.getId();
            }
          }
          cResult[50] = tmp47;
        } else {
          class O {
            constructor() {
              let num = ThreadMessageStore.getCount(thread.id);
              if (num == null) {
                num = 0;
              }
              return num;
            }
          }
        }
        class H {
          constructor() {
            return id.getId();
          }
        }
        tmp49[1] = tmp43;
        tmp49[2] = tmp45;
        const ActionSheet = tmp(6701).ActionSheet;
        tmp49[3] = arr8.map(tmp47);
        const tmp50 = <ActionSheet {...tmp49} />;
        cResult[26] = canManageThread;
        cResult[27] = canMarkChannelUnread;
        cResult[28] = canUnarchiveThread;
        cResult[29] = tmp37;
        cResult[30] = setting;
        cResult[31] = existingPin;
        cResult[32] = tmp38;
        cResult[33] = stateFromStores1;
        cResult[34] = stateFromStores3;
        cResult[35] = tmp40;
        cResult[36] = stateFromStores6 === undefined;
        cResult[37] = stateFromStores4;
        cResult[38] = isThreadModerator;
        cResult[39] = stateFromStores5;
        cResult[40] = stateFromStores2;
        cResult[41] = onClose;
        cResult[42] = parentChannel;
        cResult[43] = thread;
        cResult[44] = tmp50;
      }
      tmp45 = jsx(tmp(10737).ActionSheetIconHeader, { title: tmp37, icon: tmp40 });
      cResult[46] = tmp37;
      cResult[47] = tmp40;
      cResult[48] = tmp45;
    }
  : (thread) => {
      let arr8;
      let closure_2;
      let parentChannel;
      let tmp20;
      let tmp21;
      let tmpResult;
      thread = thread.thread;
      ({ parentChannel, onClose: importDefault } = thread);
      dependencyMap = thread.getGuildId();
      const tmp = thread;
      let obj = thread(504);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
      const items1 = [JoinedThreadsStore];
      const obj2 = thread(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(thread.id));
      const items2 = [JoinedThreadsStore];
      const obj3 = thread(504);
      const stateFromStores2 = obj3.useStateFromStores(items2, () => JoinedThreadsStore.isMuted(thread.id));
      const items3 = [ReadStateStore];
      const obj4 = thread(504);
      const stateFromStores3 = obj4.useStateFromStores(items3, () => ReadStateStore.hasUnreadOrMentions(thread.id));
      const obj5 = thread(10054);
      const canMarkChannelUnread = obj5.useCanMarkChannelUnread(thread);
      const items4 = [LurkingStore];
      const obj6 = thread(504);
      const stateFromStores4 = obj6.useStateFromStores(items4, () => {
        const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      });
      const obj7 = thread(6807);
      const firstMessage = obj7.useFirstForumPostMessage(thread).firstMessage;
      const obj8 = thread(6772);
      const isThreadModerator = obj8.useIsThreadModerator(parentChannel);
      const obj9 = thread(6772);
      const canManageThread = obj9.useCanManageThread(thread);
      const obj10 = thread(6772);
      const canUnarchiveThread = obj10.useCanUnarchiveThread(thread);
      const obj11 = thread(7528);
      const existingPin = obj11.useExistingPin(thread);
      const items5 = [ThreadMessageStore];
      const obj12 = thread(504);
      const stateFromStores5 = obj12.useStateFromStores(items5, () => {
        let num = ThreadMessageStore.getCount(thread.id);
        if (num == null) {
          num = 0;
        }
        return num;
      });
      const DeveloperMode = thread(2028).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      const items6 = [AuthenticationStore];
      let id;
      const obj13 = thread(504);
      const stateFromStores6 = obj13.useStateFromStores(items6, () => id.getId());
      if (firstMessage != null) {
        id = firstMessage.author.id;
      }
      const tmp18 = useChannelNameDefault(thread);
      const tmp19 = useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet");
      if (null != stateFromStores) {
        GuildIconDefault;
        tmp21 = <tmp17Result guild={stateFromStores} size={tmp(5971).GuildIconSizes.LARGE} />;
        tmp20 = jsx;
      } else {
        tmp20 = jsx;
        const Avatar = tmp(1188).Avatar;
        tmp21 = <Avatar size={tmp(1188).AvatarSizes.LARGE} channel={thread} />;
      }
      const obj16 = {
        thread,
        parentChannel,
        hasJoinedPost: stateFromStores1,
        muted: stateFromStores2,
        hasUnread: stateFromStores3,
        canMarkUnread: canMarkChannelUnread,
        isModerator: isThreadModerator,
        isAuthor: stateFromStores6 === id,
        canManageThread,
        developerModeEnabled: setting,
        existingPin,
        messageCount: stateFromStores5,
        canUnarchiveThread,
        isLurking: stateFromStores4,
        favorites: tmp19,
      };
      const obj17 = {
        showGradient: true,
        startExpanded: tmpResult.isMetaQuest(),
        header: tmp20(tmp(10737).ActionSheetIconHeader, { title: tmp18, icon: tmp21 }),
        children: arr8.map((buttons) => {
          buttons = buttons.buttons;
          const sectionKey = buttons.sectionKey;
          const Group = ActionSheetRow2.ActionSheetRow.Group;
          return (
            <Group key={sectionKey} hasIcons>
              {buttons.map((item, index) => {
                let IconComponent;
                let closure_0;
                let disableColor;
                let isDestructive;
                let label;
                let trailing;
                ({ label, onPress: closure_0 } = item);
                ({ IconComponent, disableColor, isDestructive, trailing } = item);
                const intl = thread(closure_1_2[12]).intl;
                let tmp3 = label === intl.string(thread(closure_1_2[12]).t.nEOg1N);
                if (!tmp3) {
                  const intl2 = thread(closure_1_2[12]).intl;
                  tmp3 = label === intl2.string(thread(closure_1_2[12]).t.xwMqD7);
                }
                const ActionSheetRow = thread(closure_1_2[60]).ActionSheetRow;
                const obj = {
                  variant: str,
                  icon: closure_1_14(thread(closure_1_2[60]).ActionSheetRow.Icon, { IconComponent, disableColor }),
                  label,
                  trailing,
                  onPress() {
                    closure_0();
                    closure_2_1();
                  },
                };
                return closure_1_14(ActionSheetRow, obj, index);
              })}
            </Group>
          );
        }),
      };
      arr8 = getActionSheetButtons(obj16);
      const ActionSheet = tmp(6701).ActionSheet;
      tmpResult = tmp(1615);
      return tmp20(ActionSheet, obj17);
    };
let result = size.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default tmp4;
