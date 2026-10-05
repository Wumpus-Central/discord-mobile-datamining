// discord_app/modules/icymi/native/content_inventory/useReplyActions.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import EmojiConstants from "../../../emojis/EmojiConstants.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MessageConstants from "../../../messages/MessageConstants.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";
import MessageReactionsTypes from "../../../messages/MessageReactionsTypes.tsx";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import openEmojiPickerActionSheet2 from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3, c4, channel, closure_4;

let react = react_mod;
const DraftType = DraftStore.DraftType;
const EmojiIntention = EmojiConstants.EmojiIntention;
const MessageSendLocation = MessageConstants.MessageSendLocation;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(cResult) {
  let callback2;
  let items6;
  const content = cResult.content;
  let hotwheels_gaming_activity;
  let stateFromStores1;
  react = undefined;
  let sendMessage;
  let callback1;
  const tmp = content;
  let obj = content(hotwheels_gaming_activity[8]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(content.author_id));
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  let content_type = content.content_type;
  if (content(hotwheels_gaming_activity[9]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp(hotwheels_gaming_activity[9]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (tmp(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    const tmp4 = sendMessage;
    const items1 = [sendMessage];
    const tmpResult = tmp(hotwheels_gaming_activity[8]);
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return ChannelStore.getChannel(ChannelStore.getDMFromUserId(tmp.id));
      }
    });
    react = tmp7;
    let obj3 = react;
    const items2 = [null != stateFromStores1];
    let id;
    const useEffect = react.useEffect;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = useEffect(
      () =>
        closure_4
          ? () => {
              id = undefined;
              const clearAll = stateFromStores(hotwheels_gaming_activity[10]).clearAll;
              stateFromStores(hotwheels_gaming_activity[10]);
              if (id != null) {
                id = id.id;
              }
              clearAll(id, callback1.ChannelMessage);
            }
          : undefined,
      items2,
    );
    const useCallback = obj3.useCallback;
    let closure_0 = stateFromStores1(function* (arg0) {
      let intl;
      let intl2;
      let obj11;
      let obj17;
      let obj7;
      let str4;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let closure_3;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              id = undefined;
              channel = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              if (null != id) {
                c3 = 1;
                c4 = 1;
                const obj6 = { value: obj17.getOrEnsurePrivateChannel(id.id), done: false };
                obj17 = stateFromStores(hotwheels_gaming_activity[11]);
                return obj6;
              }
            }
          } else {
            if (1 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                id = value;
                channel = channel.getChannel(id);
                if (null != channel) {
                  if (
                    entry.content_type === entry(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS
                  ) {
                    const obj9 = {
                      status: entry.extra.status,
                      emojiStr: str4,
                      reply: entry,
                      username: obj11.getName(id),
                      attachments: entry.extra.attachments,
                    };
                    str4 = "";
                    const getStatusReplyContent = entry(hotwheels_gaming_activity[12]).getStatusReplyContent;
                    const tmp47 = entry(hotwheels_gaming_activity[12]);
                    if (null != entry.extra.emoji_name) {
                      if (null != entry.extra.emoji_id) {
                        let combined;
                        const _String = String;
                        if ("0" !== String(entry.extra.emoji_id)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "`:" + entry.extra.emoji_name + ":`";
                        }
                        str4 = combined;
                      }
                      const _HermesInternal = HermesInternal;
                      combined = "" + entry.extra.emoji_name;
                    }
                    obj11 = stateFromStores(hotwheels_gaming_activity[13]);
                    closure_3 = getStatusReplyContent(obj9);
                    const obj12 = stateFromStores(hotwheels_gaming_activity[14]);
                    closure_4 = obj12.parse(channel, closure_3);
                    const obj13 = stateFromStores(hotwheels_gaming_activity[15]);
                    const obj10 = { location: constants.ICYMI };
                    c3 = 3;
                    c4 = 1;
                    const obj14 = { value: obj13.sendMessage(channel.id, closure_4, false, obj10), done: false };
                    return obj14;
                  } else {
                    const obj15 = {
                      channel,
                      content: entry,
                      entry,
                      whenReady: false,
                      doNotNotifyOnError: false,
                      location: constants.ICYMI,
                    };
                    c3 = 2;
                    c4 = 1;
                    const obj16 = { value: obj7.sendMessageWithEmbed(obj15), done: false };
                    obj7 = entry(hotwheels_gaming_activity[16]);
                    return obj16;
                  }
                }
              }
            } else if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj18 = { value, done: true };
                return obj18;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj3 = stateFromStores(hotwheels_gaming_activity[17]);
            obj3.hideActionSheet();
            const obj4 = entry(hotwheels_gaming_activity[18]);
            if (obj4.getDesignSystemsNotificationComponents("useReplyActions")) {
              const obj19 = {
                text: intl2.string(entry(hotwheels_gaming_activity[20]).t.fjcCk5),
                icon: entry(hotwheels_gaming_activity[21]).ChatCheckIcon,
              };
              const openMana = stateFromStores(hotwheels_gaming_activity[19]).openMana;
              const tmp24 = stateFromStores(hotwheels_gaming_activity[19]);
              intl2 = entry(hotwheels_gaming_activity[20]).intl;
              openMana("content_inventory_message_sent", obj19);
            } else {
              const obj20 = {
                key: "content_inventory_message_sent",
                content: intl.string(entry(hotwheels_gaming_activity[20]).t.fjcCk5),
                icon() {
                  return closure_1_10(closure_1_0(channel[21]).ChatCheckIcon, {});
                },
              };
              const open = stateFromStores(hotwheels_gaming_activity[19]).open;
              const tmp15 = stateFromStores(hotwheels_gaming_activity[19]);
              intl = entry(hotwheels_gaming_activity[20]).intl;
              open(obj20);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp82) {
          c4 = 3;
          throw tmp82;
        }
      }
    });
    const items3 = [stateFromStores, content];
    sendMessage = useCallback(function () {
      return closure_0(...arguments);
    }, items3);
    const items4 = [content.id, str, sendMessage];
    callback1 = obj3.useCallback((id) => {
      let surrogates;
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_emoji_send");
      const obj2 = ICYMIActionCreatorsDefault;
      const obj3 = {
        itemId: content.id,
        itemType: hotwheels_gaming_activity,
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "reaction_reply_button",
          actionIntentType: "react",
          actionDestinationType: null,
        },
      };
      obj2.feedItemActioned(obj3);
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return callback(surrogates);
    }, items4);
    const items5 = [stateFromStores1, callback1];
    let obj2 = {
      openReplyActionSheet: obj3.useCallback(() => {
        if (null != stateFromStores) {
          const content_type = content.content_type;
          let str = "hotwheels_custom_status";
          if (ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
            if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME === content_type) {
              str = "hotwheels_gaming_activity";
            } else {
              str = "unknown";
            }
          }
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(content.id, str, "press_reply_react");
          const obj3 = {
            itemId: content.id,
            itemType: str,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          const obj2 = ICYMIActionCreatorsDefault;
          obj2.feedItemActioned(obj3);
          const obj5 = { content, author: tmp, sendMessage, onPressEmoji: callback1 };
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.openLazy(asyncRequire(16449, dependencyMap.paths), "ReactActionSheet", obj5);
        }
      }, items6),
      openEmojiPicker: callback2,
    };
    items6 = [stateFromStores, content, callback1, sendMessage];
    callback2 = obj3.useCallback(() => {
      const obj = {
        pickerIntention: EmojiIntention.REACTION,
        autoFocus: false,
        startExpanded: false,
        onPressEmoji: callback1,
        channel: stateFromStores1,
        reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
      };
      const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
      openEmojiPickerActionSheet2;
      const result = openEmojiPickerActionSheet(obj);
    }, items5);
    return obj2;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};
