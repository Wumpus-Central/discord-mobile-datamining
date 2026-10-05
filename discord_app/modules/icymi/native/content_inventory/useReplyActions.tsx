// discord_app/modules/icymi/native/content_inventory/useReplyActions.tsx
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
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
const DraftType = fn(7031).DraftType;
const EmojiIntention = fn(1380).EmojiIntention;
const MessageSendLocation = fn(4883).MessageSendLocation;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(cResult) {
  const content = cResult.content;
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
    _require = stateFromStores1((entry) => {
      c3 = 0;
      c4 = 0;
      return (function* (arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_2 = tmp5;
                closure_129_0 = entry;
                closure_129_1 = undefined;
                let channel;
                closure_129_3 = undefined;
                closure_129_4 = undefined;
                if (null != tmp2) {
                  c3 = 1;
                  c4 = 1;
                  const obj8 = {
                    value: stateFromStores(hotwheels_gaming_activity[11]).getOrEnsurePrivateChannel(tmp2.id),
                    done: false,
                  };
                  return obj8;
                } else {
                  c4 = 3;
                }
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  closure_129_1 = value;
                  channel = callback.getChannel(closure_129_1);
                  let str5 = null;
                  if (null != channel) {
                    if (
                      entry.content_type === entry(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS
                    ) {
                      entry(hotwheels_gaming_activity[12]);
                      const obj11 = {
                        status: entry.extra.status,
                        emojiStr: null,
                        reply: null,
                        username: null,
                        attachments: null,
                      };
                      if (str5 == entry.extra.emoji_name) {
                        obj11.emojiStr = "";
                        obj11.reply = closure_129_0;
                        obj11.username = stateFromStores(hotwheels_gaming_activity[13]).getName(tmp2);
                        obj11.attachments = entry.extra.attachments;
                        closure_129_3 = tmp47(obj11);
                        const obj13 = stateFromStores(hotwheels_gaming_activity[13]);
                        closure_129_4 = stateFromStores(hotwheels_gaming_activity[14]).parse(channel, closure_129_3);
                        const obj15 = stateFromStores(hotwheels_gaming_activity[15]);
                        const obj12 = { location: constants.ICYMI };
                        c3 = 3;
                        c4 = 1;
                        const obj16 = {
                          value: obj15.sendMessage(channel.id, closure_129_4, false, obj12),
                          done: false,
                        };
                        return obj16;
                      } else {
                        if (str5 == entry.extra.emoji_id) {
                          const _HermesInternal = HermesInternal;
                          let combined = "" + entry.extra.emoji_name;
                        } else {
                          str5 = globalThis;
                          const _String = String;
                        }
                        str5 = "`:";
                        combined = "`:" + entry.extra.emoji_name + ":`";
                      }
                    } else {
                      const obj17 = {
                        channel,
                        content: closure_129_0,
                        entry,
                        whenReady: false,
                        doNotNotifyOnError: false,
                        location: constants.ICYMI,
                      };
                      c3 = 2;
                      c4 = 1;
                      const obj18 = {
                        value: entry(hotwheels_gaming_activity[16]).sendMessageWithEmbed(obj17),
                        done: false,
                      };
                      return obj18;
                    }
                  }
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj20 = { value, done: true };
                  return obj20;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              }
              stateFromStores(hotwheels_gaming_activity[17]).hideActionSheet();
              const obj3 = stateFromStores(hotwheels_gaming_activity[17]);
              if (!obj4.getDesignSystemsNotificationComponents("useReplyActions")) {
                const obj21 = { key: "content_inventory_message_sent", content: null, icon: null };
                const intl = entry(hotwheels_gaming_activity[20]).intl;
                obj21.content = intl.string(entry(hotwheels_gaming_activity[20]).t.fjcCk5);
                obj21.icon = function icon() {
                  return closure_1_10(entry(closure_1_2[21]).ChatCheckIcon, {});
                };
                stateFromStores(hotwheels_gaming_activity[19]).open(obj21);
                const obj5 = stateFromStores(hotwheels_gaming_activity[19]);
              }
              obj4 = entry(hotwheels_gaming_activity[18]);
            }
            const obj22 = { text: null, icon: null };
            const intl2 = entry(hotwheels_gaming_activity[20]).intl;
            obj22.text = intl2.string(entry(hotwheels_gaming_activity[20]).t.fjcCk5);
            obj22.icon = entry(hotwheels_gaming_activity[21]).ChatCheckIcon;
            stateFromStores(hotwheels_gaming_activity[19]).openMana("content_inventory_message_sent", obj22);
            const obj7 = stateFromStores(hotwheels_gaming_activity[19]);
          } catch (tmp82) {
            c4 = tmp;
            throw tmp82;
          }
        }
      })();
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
          asyncRequireImpl(16449, dependencyMap.paths),
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
