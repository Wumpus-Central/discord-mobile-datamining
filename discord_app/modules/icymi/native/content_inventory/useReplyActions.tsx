// discord_app/modules/icymi/native/content_inventory/useReplyActions.tsx
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MessageReactionsTypes from "../../../messages/MessageReactionsTypes.tsx";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const DraftType = fn(4981).DraftType;
const EmojiIntention = fn(1375).EmojiIntention;
const MessageSendLocation = fn(4633).MessageSendLocation;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(content) {
  content = content.content;
  _require = content;
  let hotwheels_gaming_activity;
  let stateFromStores1;
  noop = undefined;
  let sendMessage;
  let callback1;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(user.author_id));
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  let content_type = content.content_type;
  if (require("ContentInventoryEntryType").ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp(tmp2[9]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (tmp(tmp2[9]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    const items1 = [sendMessage];
    stateFromStores1 = tmp(tmp2[8]).useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return ChannelStore.getChannel(ChannelStore.getDMFromUserId(tmp.id));
      }
    });
    noop = tmp7;
    const items2 = [null != stateFromStores1];
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = noop.useEffect(
      () =>
        closure_4
          ? () => {
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              stateFromStores(hotwheels_gaming_activity[10]).clearAll(id, callback1.ChannelMessage);
            }
          : undefined,
      items2,
    );
    _require = stateFromStores1(function* (entry) {
      if (num8 === 2) {
        num8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (entry === 1) {
          throw value;
        } else if (entry === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          num8 = 2;
          if (0 === c3) {
            num8 = 1;
            if (entry === 1) {
              num8 = 3;
              throw value;
            } else if (entry === 2) {
              num8 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = tmp5;
              closure_129_0 = entry;
              closure_129_1 = undefined;
              let channel;
              closure_129_3 = undefined;
              closure_129_4 = undefined;
              if (null != tmp2) {
                c3 = num8;
                const obj7 = {
                  value: stateFromStores(hotwheels_gaming_activity[11]).getOrEnsurePrivateChannel(tmp2.id),
                  done: false,
                };
                return obj7;
              } else {
                num8 = 3;
              }
            }
          } else {
            num8 = 1;
            if (1 === tmp5) {
              if (entry === num8) {
                num8 = 3;
                throw value;
              } else if (entry === 2) {
                num8 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_129_1 = value;
                channel = callback.getChannel(closure_129_1);
                let str3 = null;
              }
            } else if (2 === tmp5) {
              if (entry === num8) {
                num8 = 3;
                throw value;
              } else if (entry === 2) {
                num8 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (entry === num8) {
              num8 = 3;
              throw value;
            } else if (entry === 2) {
              num8 = 3;
              const obj = { value, done: true };
              return obj;
            }
            stateFromStores(hotwheels_gaming_activity[17]).hideActionSheet();
            const obj3 = stateFromStores(hotwheels_gaming_activity[17]);
            const obj13 = { key: "content_inventory_message_sent", content: null, icon: null };
            const intl = entry(hotwheels_gaming_activity[19]).intl;
            obj13.content = intl.string(entry(hotwheels_gaming_activity[19]).t.fjcCk5);
            obj13.icon = function icon() {
              return closure_1_10(entry(closure_1_2[20]).ChatCheckIcon, {});
            };
            stateFromStores(hotwheels_gaming_activity[18]).open(obj13);
            const obj4 = stateFromStores(hotwheels_gaming_activity[18]);
          }
          if (entry.content_type === entry(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS) {
            entry(hotwheels_gaming_activity[12]);
            const obj14 = {
              status: entry.extra.status,
              emojiStr: null,
              reply: null,
              username: null,
              attachments: null,
            };
            if (str3 == entry.extra.emoji_name) {
              obj14.emojiStr = "";
              obj14.reply = closure_129_0;
              obj14.username = stateFromStores(hotwheels_gaming_activity[13]).getName(tmp2);
              obj14.attachments = entry.extra.attachments;
              closure_129_3 = tmp35(obj14);
              const obj10 = stateFromStores(hotwheels_gaming_activity[13]);
              closure_129_4 = stateFromStores(hotwheels_gaming_activity[14]).parse(channel, closure_129_3);
              const obj12 = stateFromStores(hotwheels_gaming_activity[15]);
              const obj15 = { location: constants.ICYMI };
              c3 = 3;
              const obj17 = { value: obj12.sendMessage(channel.id, closure_129_4, false, obj15), done: false };
              return obj17;
            } else {
              if (str3 == entry.extra.emoji_id) {
                const _HermesInternal = HermesInternal;
                let combined = "" + entry.extra.emoji_name;
              } else {
                str3 = globalThis;
                const _String = String;
              }
              str3 = "`:";
              combined = "`:" + entry.extra.emoji_name + ":`";
            }
          } else {
            const obj18 = {
              channel,
              content: closure_129_0,
              entry,
              whenReady: false,
              doNotNotifyOnError: false,
              location: constants.ICYMI,
            };
            c3 = 2;
            const obj19 = { value: entry(hotwheels_gaming_activity[16]).sendMessageWithEmbed(obj18), done: false };
            return obj19;
          }
        } catch (tmp72) {
          num8 = tmp;
          throw tmp72;
        }
      }
    });
    const items3 = [stateFromStores, content];
    sendMessage = obj3.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items3);
    const items4 = [content.id, str, sendMessage];
    callback1 = obj3.useCallback((id) => {
      ICYMIActionCreatorsDefault.itemInteracted(user.id, hotwheels_gaming_activity, "press_emoji_send");
      ICYMIActionCreatorsDefault.feedItemActioned({
        itemId: user.id,
        itemType: hotwheels_gaming_activity,
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "reaction_reply_button",
          actionIntentType: "react",
          actionDestinationType: null,
        },
      });
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        let surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return callback(surrogates);
    }, items4);
    const items5 = [stateFromStores1, callback1];
    let obj2 = { openReplyActionSheet: null, openEmojiPicker: null };
    const items6 = [stateFromStores, content, callback1, sendMessage];
    const callback2 = obj3.useCallback(() => {
      const obj2 = {
        pickerIntention: EmojiIntention.REACTION,
        autoFocus: false,
        startExpanded: false,
        onPressEmoji: callback1,
        channel: stateFromStores1,
        reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
      };
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
    }, items5);
    obj2.openReplyActionSheet = noop.useCallback(() => {
      if (null != stateFromStores) {
        const content_type = user.content_type;
        let str = "hotwheels_custom_status";
        if (ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
          if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME === content_type) {
            str = "hotwheels_gaming_activity";
          } else {
            str = "unknown";
          }
        }
        ICYMIActionCreatorsDefault.itemInteracted(user.id, str, "press_reply_react");
        const obj3 = {
          itemId: user.id,
          itemType: str,
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "item_container",
            actionIntentType: "open",
            actionDestinationType: null,
          },
        };
        ICYMIActionCreatorsDefault.feedItemActioned(obj3);
        const obj5 = { content: user, author: tmp, sendMessage, onPressEmoji: callback1 };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(16667, dependencyMap.paths),
          "ReactActionSheet",
          obj5,
        );
      }
    }, items6);
    obj2.openEmojiPicker = callback2;
    return obj2;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};
