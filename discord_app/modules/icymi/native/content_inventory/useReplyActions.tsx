// === Module 15863: useReplyActions ===

// Module 15863 (useReplyActions)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { DraftType } from "handleChanged" /* 4742 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { EmojiIntention } from "set" /* 1925 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4373 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/icymi/native/content_inventory/useReplyActions.tsx");

export const useReplyActions = function useReplyActions(content) {
  content = content.content;
  let _require = content;
  let stateFromStores;
  let hotwheels_gaming_activity;
  let stateFromStores1;
  let React;
  let callback;
  let callback1;
  let obj = _require(hotwheels_gaming_activity[8]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getUser(lib.author_id));
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  let content_type = content.content_type;
  if (_require(hotwheels_gaming_activity[9]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp(tmp2[9]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (tmp(tmp2[9]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        str = "hotwheels_custom_status";
      }
    }
    const items1 = [callback];
    stateFromStores1 = tmp(tmp2[8]).useStateFromStores(items1, () => {
      if (null == stateFromStores) {
        return null;
      } else {
        return callback.getChannel(callback.getDMFromUserId(tmp.id));
      }
    });
    React = tmp7;
    const items2 = [null != stateFromStores1, ];
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    items2[1] = id;
    const effect = React.useEffect(() => closure_4 ? (() => {
      let id;
      if (id != null) {
        id = id.id;
      }
      closure_1_1(closure_1_2[10]).clearAll(id, closure_1_6.ChannelMessage);
    }) : undefined, items2);
    _require = undefined;
    _require = stateFromStores1((arg0) => {
      closure_0 = arg0;
      closure_3 = 0;
      closure_4 = 0;
      return (function*(arg0) {
        if (num8 === 2) {
          num8 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            num8 = 2;
            if (0 === c3) {
              num8 = 1;
              if (arg0 === 1) {
                num8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                num8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let channel = tmp5;
                closure_1 = tmp2;
                closure_1 = undefined;
                channel = undefined;
                c3 = undefined;
                num8 = undefined;
                if (null != closure_1_1) {
                  c3 = num8;
                  obj1 = { value: null, done: false };
                  obj1[0] = stateFromStores(hotwheels_gaming_activity[11]).getOrEnsurePrivateChannel(closure_1_1.id);
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
                  throw arg1;
                } else if (arg0 === 2) {
                  num8 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_1 = arg1;
                  channel = callback.getChannel(closure_1);
                  let str3 = null;
                }
              } else if (2 === tmp5) {
                if (arg0 === num8) {
                  num8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  num8 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (arg0 === num8) {
                num8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                num8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              obj2 = stateFromStores(hotwheels_gaming_activity[17]);
              obj2.hideActionSheet();
              obj3 = stateFromStores(hotwheels_gaming_activity[18]);
              const obj4 = { key: "content_inventory_message_sent", content: null, icon: null };
              const intl = lib(hotwheels_gaming_activity[19]).intl;
              obj4[1] = intl.string(lib(hotwheels_gaming_activity[19]).t.fjcCk5);
              obj4[2] = function icon() {
                return callback2(callback(table[20]).ChatCheckIcon, {});
              };
              obj3.open(obj4);
            }
            if (lib.content_type === lib(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS) {
              lib(hotwheels_gaming_activity[12]);
              let obj5 = { status: null, emojiStr: null, reply: null, username: null, attachments: null };
              obj5[0] = lib.extra.status;
              if (str3 == lib.extra.emoji_name) {
                obj5[1] = "";
                obj5[2] = lib;
                let obj9 = stateFromStores(hotwheels_gaming_activity[13]);
                obj5[3] = obj9.getName(closure_1_1);
                obj5[4] = lib.extra.attachments;
                closure_3 = tmp35(obj5);
                closure_4 = stateFromStores(hotwheels_gaming_activity[14]).parse(closure_1_2, closure_3);
                const obj12 = stateFromStores(hotwheels_gaming_activity[15]);
                const obj6 = { location: null };
                obj6[0] = closure_2_9.ICYMI;
                c3 = 3;
                const obj7 = { value: null, done: false };
                obj7[0] = obj12.sendMessage(closure_1_2.id, closure_4, false, obj6);
                return obj7;
              } else {
                if (str3 == lib.extra.emoji_id) {
                  const _HermesInternal = HermesInternal;
                  let combined = "" + lib.extra.emoji_name;
                } else {
                  str3 = globalThis;
                  const _String = String;
                }
                str3 = "`:";
                combined = "`:" + lib.extra.emoji_name + ":`";
              }
            } else {
              obj5 = lib(hotwheels_gaming_activity[16]);
              const obj8 = { channel: null, content: null, entry: null, whenReady: false, doNotNotifyOnError: false, location: null };
              obj8[0] = channel;
              obj8[1] = lib;
              obj8[2] = lib;
              obj8[5] = closure_2_9.ICYMI;
              c3 = 2;
              obj9 = { value: null, done: false };
              obj9[0] = obj5.sendMessageWithEmbed(obj8);
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
    callback = obj3.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items3);
    const items4 = [content.id, str, callback];
    callback1 = obj3.useCallback((id) => {
      let obj = stateFromStores(hotwheels_gaming_activity[21]);
      obj.itemInteracted(lib.id, hotwheels_gaming_activity, "press_emoji_send");
      obj = { itemId: lib.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_reply_button", actionIntentType: "react", actionDestinationType: null } };
      stateFromStores(hotwheels_gaming_activity[21]).feedItemActioned(obj);
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
    const items6 = [stateFromStores, content, callback1, callback];
    const callback2 = obj3.useCallback(() => {
      let obj = lib(hotwheels_gaming_activity[22]);
      obj = { pickerIntention: closure_1_8.REACTION, autoFocus: false, startExpanded: false, onPressEmoji: callback1, channel: stateFromStores1, reactionType: lib(hotwheels_gaming_activity[23]).ReactionTypes.NORMAL };
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items5);
    obj[0] = React.useCallback(() => {
      if (null != stateFromStores) {
        const content_type = lib.content_type;
        let str = "hotwheels_custom_status";
        if (lib(hotwheels_gaming_activity[9]).ContentInventoryEntryType.CUSTOM_STATUS !== content_type) {
          if (tmp9(tmp10[9]).ContentInventoryEntryType.TOP_GAME === content_type) {
            str = "hotwheels_gaming_activity";
          } else {
            str = "unknown";
          }
        }
        let obj = stateFromStores(tmp10[21]);
        obj.itemInteracted(lib.id, str, "press_reply_react");
        obj = { itemId: null, itemType: null, actionParameters: null };
        obj[0] = lib.id;
        obj[1] = str;
        obj[2] = { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null };
        stateFromStores(hotwheels_gaming_activity[21]).feedItemActioned(obj);
        const obj2 = stateFromStores(hotwheels_gaming_activity[21]);
        obj = { content: null, author: null, sendMessage: null, onPressEmoji: null };
        obj[0] = lib;
        obj[1] = tmp;
        obj[2] = callback;
        obj[3] = callback1;
        stateFromStores(hotwheels_gaming_activity[17]).openLazy(lib(hotwheels_gaming_activity[25])(hotwheels_gaming_activity[24], hotwheels_gaming_activity.paths), "ReactActionSheet", obj);
        const obj4 = stateFromStores(hotwheels_gaming_activity[17]);
      }
    }, items6);
    obj[1] = callback2;
    return obj;
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  str = "hotwheels_gaming_activity";
};