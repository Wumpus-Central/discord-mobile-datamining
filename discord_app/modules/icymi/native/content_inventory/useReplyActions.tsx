// === Module 16506: useReplyActions ===

// Module 16506 (useReplyActions)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8130 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const DraftType = fn(4901).DraftType;
const EmojiIntention = fn(1374).EmojiIntention;
const MessageSendLocation = fn(4553).MessageSendLocation;
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
  let obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(user.author_id));
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
    const items2 = [null != stateFromStores1, ];
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = noop.useEffect(() => closure_4 ? (() => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      stateFromStores(hotwheels_gaming_activity[10]).clearAll(id, callback1.ChannelMessage);
    }) : undefined, items2);
    _require = stateFromStores1((entry) => {
      c3 = 0;
      return (function*(arg0, value) {
        if (num8 === 2) {
          num8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            num8 = 2;
            if (0 === c3) {
              num8 = 1;
              if (arg0 === 1) {
                num8 = 3;
                throw value;
              } else if (arg0 === 2) {
                num8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp5;
                closure_129_0 = entry;
                closure_129_1 = undefined;
                let channel;
                closure_129_3 = undefined;
                closure_129_4 = undefined;
                if (null != tmp2) {
                  c3 = num8;
                  const obj1 = { value: stateFromStores(hotwheels_gaming_activity[11]).getOrEnsurePrivateChannel(tmp2.id), done: false };
                  return obj1;
                } else {
                  num8 = 3;
                }
              }
            } else {
              num8 = 1;
              if (1 === tmp5) {
                if (arg0 === num8) {
                  num8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  num8 = 3;
                  let obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_129_1 = value;
                  channel = callback.getChannel(closure_129_1);
                  let str3 = null;
                }
              } else if (2 === tmp5) {
                if (arg0 === num8) {
                  num8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  num8 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                }
              } else if (arg0 === num8) {
                num8 = 3;
                throw value;
              } else if (arg0 === 2) {
                num8 = 3;
                obj = { value, done: true };
                return obj;
              }
              obj2 = stateFromStores(hotwheels_gaming_activity[17]);
              obj2.hideActionSheet();
              obj3 = stateFromStores(hotwheels_gaming_activity[18]);
              const obj4 = { key: "content_inventory_message_sent", content: null, icon: null };
              const intl = entry(hotwheels_gaming_activity[19]).intl;
              obj4.content = intl.string(entry(hotwheels_gaming_activity[19]).t.fjcCk5);
              obj4.icon = function icon() {
                return closure_1_10(entry(closure_1_2[20]).ChatCheckIcon, {});
              };
              obj3.open(obj4);
            }
            if (entry.content_type === entry(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS) {
              entry(hotwheels_gaming_activity[12]);
              let obj5 = { status: entry.extra.status, emojiStr: null, reply: null, username: null, attachments: null };
              if (str3 == entry.extra.emoji_name) {
                obj5.emojiStr = "";
                obj5.reply = closure_129_0;
                let obj9 = stateFromStores(hotwheels_gaming_activity[13]);
                obj5.username = obj9.getName(tmp2);
                obj5.attachments = entry.extra.attachments;
                closure_129_3 = tmp35(obj5);
                closure_129_4 = stateFromStores(hotwheels_gaming_activity[14]).parse(channel, closure_129_3);
                const obj12 = stateFromStores(hotwheels_gaming_activity[15]);
                const obj6 = { location: constants.ICYMI };
                c3 = 3;
                const obj7 = { value: obj12.sendMessage(channel.id, closure_129_4, false, obj6), done: false };
                return obj7;
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
              obj5 = entry(hotwheels_gaming_activity[16]);
              const obj8 = { channel, content: closure_129_0, entry, whenReady: false, doNotNotifyOnError: false, location: constants.ICYMI };
              c3 = 2;
              obj9 = { value: obj5.sendMessageWithEmbed(obj8), done: false };
              return obj9;
            }
          } catch (tmp72) {
            num8 = tmp;
            throw tmp72;
          }
        }
      })();
    });
    const items3 = [stateFromStores, content];
    sendMessage = obj3.useCallback(function() {
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
      let obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(user.id, hotwheels_gaming_activity, "press_emoji_send");
      obj = { itemId: user.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_reply_button", actionIntentType: "react", actionDestinationType: null } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj);
      if (null != id.id) {
        const _HermesInternal = HermesInternal;
        let surrogates = ":" + id.name + ":";
      } else {
        surrogates = id.surrogates;
      }
      return callback(surrogates);
    }, items4);
    const items5 = [stateFromStores1, callback1];
    obj = { openReplyActionSheet: null, openEmojiPicker: null };
    const items6 = [stateFromStores, content, callback1, sendMessage];
    const callback2 = obj3.useCallback(() => {
      const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji: callback1, channel: stateFromStores1, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL };
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items5);
    obj.openReplyActionSheet = noop.useCallback(() => {
      if (null != stateFromStores) {
        const content_type = user.content_type;
        let str = "hotwheels_custom_status";
        if (ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
          if (tmp9(8130).ContentInventoryEntryType.TOP_GAME === content_type) {
            str = "hotwheels_gaming_activity";
          } else {
            str = "unknown";
          }
        }
        let obj = ICYMIActionCreatorsDefault;
        obj.itemInteracted(user.id, str, "press_reply_react");
        obj = { itemId: user.id, itemType: str, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
        ICYMIActionCreatorsDefault.feedItemActioned(obj);
        const tmp10 = dependencyMap;
        obj = { content: user, author: tmp, sendMessage, onPressEmoji: callback1 };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16507, tmp10.paths), "ReactActionSheet", obj);
      }
    }, items6);
    obj.openEmojiPicker = callback2;
    return obj;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};