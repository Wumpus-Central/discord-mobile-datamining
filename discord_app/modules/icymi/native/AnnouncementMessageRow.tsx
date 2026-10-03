// discord_app/modules/icymi/native/AnnouncementMessageRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import showLongPressMessageActionSheet from "../../messages/native/long_press/showLongPressMessageActionSheet.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ITEM_PADDING = fn(16430).ITEM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16390);
let closure_13 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = {
    pressable: { flex: 1, paddingLeft: paddingLeft.inset },
    footer: {
      marginVertical: paddingLeft.margin,
      gap: nativeDefault.space.PX_8,
      paddingHorizontal: ITEM_PADDING,
      marginLeft: paddingLeft.inset,
    },
  };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        const cResult = message(channel[12]).c(56);
        ({ unread, message } = guild);
        guild = guild.guild;
        channel = guild.channel;
        const visible = guild.visible;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [UserGuildSettingsStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function l() {
            return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
          };
          cResult[1] = channel;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        let obj = message(channel[12]);
        const stateFromStores = message(channel[13]).useStateFromStores(first, tmp6);
        const tmp8 = closure_13();
        if (cResult[3] === guild.id) {
          if (cResult[4] === message.author.id) {
            let tmp9 = cResult[5];
          }
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (cResult[6] === message.author.id) {
            if (cResult[7] === id) {
              let tmp12 = cResult[8];
            }
            const effect = noop.useEffect(tmp9, tmp12);
            if (cResult[9] === channel.id) {
              if (cResult[10] === message.id) {
                let tmp15 = cResult[11];
              }
              if (cResult[12] === channel) {
                if (cResult[13] === message) {
                  let tmp16 = cResult[14];
                }
                if (cResult[15] === channel.id) {
                  if (cResult[16] === guild.id) {
                    if (cResult[17] === message) {
                      let tmp17 = cResult[18];
                    }
                    message(tmp2[19]);
                    class E {
                      constructor() {
                        tmp2 = closure_2;
                        tmp = closure_1;
                        obj = closure_1(closure_2[15]);
                        tmp3 = message;
                        itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                        obj2 = closure_1(closure_2[15]);
                        obj1 = {
                          itemId: message.id,
                          itemType: "announcement",
                          actionParameters: {
                            actionGestureType: "press",
                            actionTargetElement: "item_container",
                            actionIntentType: "navigate",
                            actionDestinationType: "channel",
                          },
                        };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        if (null != message) {
                          tmpResult = tmp(tmp2[15]);
                          obj7 = { id: null, timestamp: null };
                          obj7.id = tmp3.id;
                          tmp6 = globalThis;
                          _Date = Date;
                          obj7.timestamp = Date.now();
                          items = [];
                          items[0] = obj7;
                          ackGravityItemsResult = tmpResult.ackGravityItems(items);
                          tmp8 = closure_0;
                          obj6 = closure_0(tmp2[18]);
                          tmp9 = channel;
                          tmp10 = guild;
                          navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                        }
                        return;
                      }
                    }
                    const _Symbol = Symbol;
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[15]);
                        itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                        obj2 = closure_1(closure_2[15]);
                        obj1 = {
                          itemId: message.id,
                          itemType: "announcement",
                          actionParameters: {
                            actionGestureType: "long_press",
                            actionTargetElement: "item_header",
                            actionIntentType: "open",
                            actionDestinationType: "channel",
                          },
                        };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[16]);
                        result = obj4.openChannelLongPressActionSheet(channel.id);
                        return;
                      }
                    }
                    if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
                      const string = message(tmp2[20]).intl.string;
                      class E {
                        constructor() {
                          tmp2 = closure_2;
                          tmp = closure_1;
                          obj = closure_1(closure_2[15]);
                          tmp3 = message;
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          if (null != message) {
                            tmpResult = tmp(tmp2[15]);
                            obj7 = { id: null, timestamp: null };
                            obj7.id = tmp3.id;
                            tmp6 = globalThis;
                            _Date = Date;
                            obj7.timestamp = Date.now();
                            items = [];
                            items[0] = obj7;
                            ackGravityItemsResult = tmpResult.ackGravityItems(items);
                            tmp8 = closure_0;
                            obj6 = closure_0(tmp2[18]);
                            tmp9 = channel;
                            tmp10 = guild;
                            navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                          }
                          return;
                        }
                      }
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[15]);
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "long_press",
                              actionTargetElement: "item_header",
                              actionIntentType: "open",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[16]);
                          result = obj4.openChannelLongPressActionSheet(channel.id);
                          return;
                        }
                      }
                      let tmp21 = tmp22;
                    } else {
                      tmp21 = cResult[19];
                    }
                    if (cResult[20] !== message.id) {
                      guild(tmp2[21]);
                      class E {
                        constructor() {
                          tmp2 = closure_2;
                          tmp = closure_1;
                          obj = closure_1(closure_2[15]);
                          tmp3 = message;
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          if (null != message) {
                            tmpResult = tmp(tmp2[15]);
                            obj7 = { id: null, timestamp: null };
                            obj7.id = tmp3.id;
                            tmp6 = globalThis;
                            _Date = Date;
                            obj7.timestamp = Date.now();
                            items = [];
                            items[0] = obj7;
                            ackGravityItemsResult = tmpResult.ackGravityItems(items);
                            tmp8 = closure_0;
                            obj6 = closure_0(tmp2[18]);
                            tmp9 = channel;
                            tmp10 = guild;
                            navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                          }
                          return;
                        }
                      }
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[15]);
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "long_press",
                              actionTargetElement: "item_header",
                              actionIntentType: "open",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[16]);
                          result = obj4.openChannelLongPressActionSheet(channel.id);
                          return;
                        }
                      }
                      cResult[21] = tmp26;
                      let tmp23 = tmp26;
                    } else {
                      tmp23 = cResult[21];
                    }
                    if (cResult[22] === channel) {
                      if (cResult[23] === unread) {
                        let tmp27 = cResult[24];
                      }
                      if (cResult[25] === channel) {
                        if (cResult[26] === stateFromStores) {
                          let tmp30 = cResult[27];
                        }
                        if (cResult[28] === channel) {
                          if (cResult[29] === guild) {
                            if (cResult[30] === message) {
                              if (cResult[31] === visible) {
                                let tmp32 = cResult[32];
                              }
                              if (cResult[33] === tmp16) {
                                if (cResult[34] === tmp17) {
                                  if (cResult[35] === tmp8.pressable) {
                                    if (cResult[36] === tmp27) {
                                      if (cResult[37] === tmp30) {
                                        if (cResult[38] === tmp32) {
                                          let tmp34 = cResult[39];
                                        }
                                        if (cResult[40] === channel) {
                                          if (cResult[41] === guild) {
                                            if (cResult[42] === message) {
                                              let tmp36 = cResult[43];
                                            }
                                            if (cResult[44] === tmp8.footer) {
                                              if (cResult[45] === tmp36) {
                                                let tmp40 = cResult[46];
                                              }
                                              if (cResult[47] === channel.id) {
                                                if (cResult[48] === tmp19) {
                                                  if (cResult[49] === tmp15) {
                                                    if (cResult[50] === tmp17) {
                                                      if (cResult[51] === message.id) {
                                                        if (cResult[52] === tmp23) {
                                                          if (cResult[53] === tmp34) {
                                                            if (cResult[54] === tmp40) {
                                                              let tmp44 = cResult[55];
                                                            }
                                                            return tmp44;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              class E {
                                                constructor() {
                                                  tmp2 = closure_2;
                                                  tmp = closure_1;
                                                  obj = closure_1(closure_2[15]);
                                                  tmp3 = message;
                                                  itemInteractedResult = obj.itemInteracted(
                                                    message.id,
                                                    "announcement",
                                                    "press_message",
                                                  );
                                                  obj2 = closure_1(closure_2[15]);
                                                  obj1 = {
                                                    itemId: message.id,
                                                    itemType: "announcement",
                                                    actionParameters: {
                                                      actionGestureType: "press",
                                                      actionTargetElement: "item_container",
                                                      actionIntentType: "navigate",
                                                      actionDestinationType: "channel",
                                                    },
                                                  };
                                                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                  if (null != message) {
                                                    tmpResult = tmp(tmp2[15]);
                                                    obj7 = { id: null, timestamp: null };
                                                    obj7.id = tmp3.id;
                                                    tmp6 = globalThis;
                                                    _Date = Date;
                                                    obj7.timestamp = Date.now();
                                                    items = [];
                                                    items[0] = obj7;
                                                    ackGravityItemsResult = tmpResult.ackGravityItems(items);
                                                    tmp8 = closure_0;
                                                    obj6 = closure_0(tmp2[18]);
                                                    tmp9 = channel;
                                                    tmp10 = guild;
                                                    navigateToPostResult = obj6.navigateToPost(
                                                      channel.id,
                                                      guild.id,
                                                      tmp3.id,
                                                    );
                                                  }
                                                  return;
                                                }
                                              }
                                              class M {
                                                constructor() {
                                                  obj = closure_1(closure_2[15]);
                                                  itemInteractedResult = obj.itemInteracted(
                                                    message.id,
                                                    "announcement",
                                                    "long_press_channel",
                                                  );
                                                  obj2 = closure_1(closure_2[15]);
                                                  obj1 = {
                                                    itemId: message.id,
                                                    itemType: "announcement",
                                                    actionParameters: {
                                                      actionGestureType: "long_press",
                                                      actionTargetElement: "item_header",
                                                      actionIntentType: "open",
                                                      actionDestinationType: "channel",
                                                    },
                                                  };
                                                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                  obj4 = closure_0(closure_2[16]);
                                                  result = obj4.openChannelLongPressActionSheet(channel.id);
                                                  return;
                                                }
                                              }
                                              tmp46[0] = tmp21;
                                              tmp46[1] = message.id;
                                              tmp46[3] = channel.id;
                                              tmp46[4] = tmp23;
                                              tmp46[5] = tmp17;
                                              tmp46[6] = tmp15;
                                              tmp46[7] = tmp19;
                                              const items1 = [tmp34, tmp40];
                                              tmp46[9] = items1;
                                              const tmp47 = closure_12(guild(tmp2[26]), tmp46);
                                              cResult[47] = channel.id;
                                              cResult[48] = tmp19;
                                              cResult[49] = tmp15;
                                              cResult[50] = tmp17;
                                              class P {
                                                constructor() {
                                                  tmp = guild;
                                                  id = undefined;
                                                  if (guild != null) {
                                                    id = tmp.id;
                                                  }
                                                  if (null != id) {
                                                    tmp3 = closure_1;
                                                    tmp4 = closure_2;
                                                    obj = closure_1(closure_2[14]);
                                                    id1 = undefined;
                                                    if (tmp != null) {
                                                      id1 = tmp.id;
                                                    }
                                                    tmp6 = message;
                                                    membersById = obj.requestMembersById(id1, message.author.id);
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[52] = tmp23;
                                              cResult[53] = tmp34;
                                              cResult[54] = tmp40;
                                              cResult[55] = tmp47;
                                              tmp44 = tmp47;
                                            }
                                            class E {
                                              constructor() {
                                                tmp2 = closure_2;
                                                tmp = closure_1;
                                                obj = closure_1(closure_2[15]);
                                                tmp3 = message;
                                                itemInteractedResult = obj.itemInteracted(
                                                  message.id,
                                                  "announcement",
                                                  "press_message",
                                                );
                                                obj2 = closure_1(closure_2[15]);
                                                obj1 = {
                                                  itemId: message.id,
                                                  itemType: "announcement",
                                                  actionParameters: {
                                                    actionGestureType: "press",
                                                    actionTargetElement: "item_container",
                                                    actionIntentType: "navigate",
                                                    actionDestinationType: "channel",
                                                  },
                                                };
                                                feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                if (null != message) {
                                                  tmpResult = tmp(tmp2[15]);
                                                  obj7 = { id: null, timestamp: null };
                                                  obj7.id = tmp3.id;
                                                  tmp6 = globalThis;
                                                  _Date = Date;
                                                  obj7.timestamp = Date.now();
                                                  items = [];
                                                  items[0] = obj7;
                                                  ackGravityItemsResult = tmpResult.ackGravityItems(items);
                                                  tmp8 = closure_0;
                                                  obj6 = closure_0(tmp2[18]);
                                                  tmp9 = channel;
                                                  tmp10 = guild;
                                                  navigateToPostResult = obj6.navigateToPost(
                                                    channel.id,
                                                    guild.id,
                                                    tmp3.id,
                                                  );
                                                }
                                                return;
                                              }
                                            }
                                            class M {
                                              constructor() {
                                                obj = closure_1(closure_2[15]);
                                                itemInteractedResult = obj.itemInteracted(
                                                  message.id,
                                                  "announcement",
                                                  "long_press_channel",
                                                );
                                                obj2 = closure_1(closure_2[15]);
                                                obj1 = {
                                                  itemId: message.id,
                                                  itemType: "announcement",
                                                  actionParameters: {
                                                    actionGestureType: "long_press",
                                                    actionTargetElement: "item_header",
                                                    actionIntentType: "open",
                                                    actionDestinationType: "channel",
                                                  },
                                                };
                                                feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                obj4 = closure_0(closure_2[16]);
                                                result = obj4.openChannelLongPressActionSheet(channel.id);
                                                return;
                                              }
                                            }
                                            tmp42[0] = tmp8.footer;
                                            tmp42[1] = tmp36;
                                            const tmp43 = closure_11(View, tmp42);
                                            cResult[44] = tmp8.footer;
                                            cResult[45] = tmp36;
                                            cResult[46] = tmp43;
                                            tmp40 = tmp43;
                                          }
                                        }
                                        class E {
                                          constructor() {
                                            tmp2 = closure_2;
                                            tmp = closure_1;
                                            obj = closure_1(closure_2[15]);
                                            tmp3 = message;
                                            itemInteractedResult = obj.itemInteracted(
                                              message.id,
                                              "announcement",
                                              "press_message",
                                            );
                                            obj2 = closure_1(closure_2[15]);
                                            obj1 = {
                                              itemId: message.id,
                                              itemType: "announcement",
                                              actionParameters: {
                                                actionGestureType: "press",
                                                actionTargetElement: "item_container",
                                                actionIntentType: "navigate",
                                                actionDestinationType: "channel",
                                              },
                                            };
                                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                                            if (null != message) {
                                              tmpResult = tmp(tmp2[15]);
                                              obj7 = { id: null, timestamp: null };
                                              obj7.id = tmp3.id;
                                              tmp6 = globalThis;
                                              _Date = Date;
                                              obj7.timestamp = Date.now();
                                              items = [];
                                              items[0] = obj7;
                                              ackGravityItemsResult = tmpResult.ackGravityItems(items);
                                              tmp8 = closure_0;
                                              obj6 = closure_0(tmp2[18]);
                                              tmp9 = channel;
                                              tmp10 = guild;
                                              navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                                            }
                                            return;
                                          }
                                        }
                                        class M {
                                          constructor() {
                                            obj = closure_1(closure_2[15]);
                                            itemInteractedResult = obj.itemInteracted(
                                              message.id,
                                              "announcement",
                                              "long_press_channel",
                                            );
                                            obj2 = closure_1(closure_2[15]);
                                            obj1 = {
                                              itemId: message.id,
                                              itemType: "announcement",
                                              actionParameters: {
                                                actionGestureType: "long_press",
                                                actionTargetElement: "item_header",
                                                actionIntentType: "open",
                                                actionDestinationType: "channel",
                                              },
                                            };
                                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                                            obj4 = closure_0(closure_2[16]);
                                            result = obj4.openChannelLongPressActionSheet(channel.id);
                                            return;
                                          }
                                        }
                                        tmp38[0] = message;
                                        tmp38[1] = channel;
                                        tmp38[2] = guild;
                                        tmp38[4] = message.id;
                                        const tmp39 = closure_11(guild(tmp2[25]), tmp38);
                                        cResult[40] = channel;
                                        cResult[41] = guild;
                                        cResult[42] = message;
                                        cResult[43] = tmp39;
                                        tmp36 = tmp39;
                                      }
                                    }
                                  }
                                }
                              }
                              class E {
                                constructor() {
                                  tmp2 = closure_2;
                                  tmp = closure_1;
                                  obj = closure_1(closure_2[15]);
                                  tmp3 = message;
                                  itemInteractedResult = obj.itemInteracted(
                                    message.id,
                                    "announcement",
                                    "press_message",
                                  );
                                  obj2 = closure_1(closure_2[15]);
                                  obj1 = {
                                    itemId: message.id,
                                    itemType: "announcement",
                                    actionParameters: {
                                      actionGestureType: "press",
                                      actionTargetElement: "item_container",
                                      actionIntentType: "navigate",
                                      actionDestinationType: "channel",
                                    },
                                  };
                                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                                  if (null != message) {
                                    tmpResult = tmp(tmp2[15]);
                                    obj7 = { id: null, timestamp: null };
                                    obj7.id = tmp3.id;
                                    tmp6 = globalThis;
                                    _Date = Date;
                                    obj7.timestamp = Date.now();
                                    items = [];
                                    items[0] = obj7;
                                    ackGravityItemsResult = tmpResult.ackGravityItems(items);
                                    tmp8 = closure_0;
                                    obj6 = closure_0(tmp2[18]);
                                    tmp9 = channel;
                                    tmp10 = guild;
                                    navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                                  }
                                  return;
                                }
                              }
                              let obj2 = {
                                onPress: null,
                                onLongPress: null,
                                accessibilityRole: "button",
                                accessibilityLabel: null,
                                accessibilityHint: null,
                                unstable_pressDelay: 130,
                                style: null,
                                children: null,
                              };
                              class M {
                                constructor() {
                                  obj = closure_1(closure_2[15]);
                                  itemInteractedResult = obj.itemInteracted(
                                    message.id,
                                    "announcement",
                                    "long_press_channel",
                                  );
                                  obj2 = closure_1(closure_2[15]);
                                  obj1 = {
                                    itemId: message.id,
                                    itemType: "announcement",
                                    actionParameters: {
                                      actionGestureType: "long_press",
                                      actionTargetElement: "item_header",
                                      actionIntentType: "open",
                                      actionDestinationType: "channel",
                                    },
                                  };
                                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                                  obj4 = closure_0(closure_2[16]);
                                  result = obj4.openChannelLongPressActionSheet(channel.id);
                                  return;
                                }
                              }
                              obj2.onLongPress = tmp16;
                              obj2.accessibilityLabel = tmp27;
                              obj2.accessibilityHint = tmp30;
                              obj2.style = tmp8.pressable;
                              obj2.children = tmp32;
                              const tmp35 = closure_11(message(tmp2[24]).PressableHighlight, obj2);
                              cResult[33] = tmp16;
                              cResult[34] = tmp17;
                              cResult[35] = tmp8.pressable;
                              cResult[36] = tmp27;
                              cResult[37] = tmp30;
                              cResult[38] = tmp32;
                              cResult[39] = tmp35;
                              tmp34 = tmp35;
                            }
                          }
                        }
                        class E {
                          constructor() {
                            tmp2 = closure_2;
                            tmp = closure_1;
                            obj = closure_1(closure_2[15]);
                            tmp3 = message;
                            itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                            obj2 = closure_1(closure_2[15]);
                            obj1 = {
                              itemId: message.id,
                              itemType: "announcement",
                              actionParameters: {
                                actionGestureType: "press",
                                actionTargetElement: "item_container",
                                actionIntentType: "navigate",
                                actionDestinationType: "channel",
                              },
                            };
                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                            if (null != message) {
                              tmpResult = tmp(tmp2[15]);
                              obj7 = { id: null, timestamp: null };
                              obj7.id = tmp3.id;
                              tmp6 = globalThis;
                              _Date = Date;
                              obj7.timestamp = Date.now();
                              items = [];
                              items[0] = obj7;
                              ackGravityItemsResult = tmpResult.ackGravityItems(items);
                              tmp8 = closure_0;
                              obj6 = closure_0(tmp2[18]);
                              tmp9 = channel;
                              tmp10 = guild;
                              navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                            }
                            return;
                          }
                        }
                        let obj3 = { message: null, channel: null, guild: null, lineClamp: 5, visible: null };
                        class M {
                          constructor() {
                            obj = closure_1(closure_2[15]);
                            itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                            obj2 = closure_1(closure_2[15]);
                            obj1 = {
                              itemId: message.id,
                              itemType: "announcement",
                              actionParameters: {
                                actionGestureType: "long_press",
                                actionTargetElement: "item_header",
                                actionIntentType: "open",
                                actionDestinationType: "channel",
                              },
                            };
                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                            obj4 = closure_0(closure_2[16]);
                            result = obj4.openChannelLongPressActionSheet(channel.id);
                            return;
                          }
                        }
                        obj3.channel = channel;
                        obj3.guild = guild;
                        obj3.visible = visible;
                        const tmp33 = closure_11(message(tmp2[23]).MessageRowContent, obj3);
                        cResult[28] = channel;
                        cResult[29] = guild;
                        cResult[30] = message;
                        cResult[31] = visible;
                        cResult[32] = tmp33;
                        tmp32 = tmp33;
                      }
                      class E {
                        constructor() {
                          tmp2 = closure_2;
                          tmp = closure_1;
                          obj = closure_1(closure_2[15]);
                          tmp3 = message;
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          if (null != message) {
                            tmpResult = tmp(tmp2[15]);
                            obj7 = { id: null, timestamp: null };
                            obj7.id = tmp3.id;
                            tmp6 = globalThis;
                            _Date = Date;
                            obj7.timestamp = Date.now();
                            items = [];
                            items[0] = obj7;
                            ackGravityItemsResult = tmpResult.ackGravityItems(items);
                            tmp8 = closure_0;
                            obj6 = closure_0(tmp2[18]);
                            tmp9 = channel;
                            tmp10 = guild;
                            navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                          }
                          return;
                        }
                      }
                      const obj5 = { channel: null, muted: null };
                      class M {
                        constructor() {
                          obj = closure_1(closure_2[15]);
                          itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                          obj2 = closure_1(closure_2[15]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "announcement",
                            actionParameters: {
                              actionGestureType: "long_press",
                              actionTargetElement: "item_header",
                              actionIntentType: "open",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[16]);
                          result = obj4.openChannelLongPressActionSheet(channel.id);
                          return;
                        }
                      }
                      obj5.muted = stateFromStores;
                      const channelA11yHint = obj4.getChannelA11yHint(obj5);
                      cResult[25] = channel;
                      cResult[26] = stateFromStores;
                      cResult[27] = channelA11yHint;
                      tmp30 = channelA11yHint;
                    }
                    let obj6 = { channel, unread };
                    const tmp29 = guild(tmp2[22])(obj6);
                    cResult[22] = channel;
                    cResult[23] = unread;
                    cResult[24] = tmp29;
                    tmp27 = tmp29;
                  }
                }
                class E {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_1;
                    obj = closure_1(closure_2[15]);
                    tmp3 = message;
                    itemInteractedResult = obj.itemInteracted(message.id, "announcement", "press_message");
                    obj2 = closure_1(closure_2[15]);
                    obj1 = {
                      itemId: message.id,
                      itemType: "announcement",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "item_container",
                        actionIntentType: "navigate",
                        actionDestinationType: "channel",
                      },
                    };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    if (null != message) {
                      tmpResult = tmp(tmp2[15]);
                      obj7 = { id: null, timestamp: null };
                      obj7.id = tmp3.id;
                      tmp6 = globalThis;
                      _Date = Date;
                      obj7.timestamp = Date.now();
                      items = [];
                      items[0] = obj7;
                      ackGravityItemsResult = tmpResult.ackGravityItems(items);
                      tmp8 = closure_0;
                      obj6 = closure_0(tmp2[18]);
                      tmp9 = channel;
                      tmp10 = guild;
                      navigateToPostResult = obj6.navigateToPost(channel.id, guild.id, tmp3.id);
                    }
                    return;
                  }
                }
                class M {
                  constructor() {
                    obj = closure_1(closure_2[15]);
                    itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                    obj2 = closure_1(closure_2[15]);
                    obj1 = {
                      itemId: message.id,
                      itemType: "announcement",
                      actionParameters: {
                        actionGestureType: "long_press",
                        actionTargetElement: "item_header",
                        actionIntentType: "open",
                        actionDestinationType: "channel",
                      },
                    };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[16]);
                    result = obj4.openChannelLongPressActionSheet(channel.id);
                    return;
                  }
                }
                cResult[16] = guild.id;
                cResult[17] = message;
                cResult[18] = E;
                tmp17 = E;
              }
              class L {
                constructor() {
                  obj = closure_1(closure_2[15]);
                  itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_message");
                  obj2 = closure_1(closure_2[15]);
                  obj1 = {
                    itemId: message.id,
                    itemType: "announcement",
                    actionParameters: {
                      actionGestureType: "long_press",
                      actionTargetElement: "item_container",
                      actionIntentType: "open",
                      actionDestinationType: "channel",
                    },
                  };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  user = closure_9.getUser(message.author.id);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { channel, message, user };
                  result = obj4.showLongPressMessageActionSheet(obj6);
                  return;
                }
              }
              class M {
                constructor() {
                  obj = closure_1(closure_2[15]);
                  itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                  obj2 = closure_1(closure_2[15]);
                  obj1 = {
                    itemId: message.id,
                    itemType: "announcement",
                    actionParameters: {
                      actionGestureType: "long_press",
                      actionTargetElement: "item_header",
                      actionIntentType: "open",
                      actionDestinationType: "channel",
                    },
                  };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[16]);
                  result = obj4.openChannelLongPressActionSheet(channel.id);
                  return;
                }
              }
              cResult[13] = message;
              cResult[14] = L;
              tmp16 = L;
            }
            class M {
              constructor() {
                obj = closure_1(closure_2[15]);
                itemInteractedResult = obj.itemInteracted(message.id, "announcement", "long_press_channel");
                obj2 = closure_1(closure_2[15]);
                obj1 = {
                  itemId: message.id,
                  itemType: "announcement",
                  actionParameters: {
                    actionGestureType: "long_press",
                    actionTargetElement: "item_header",
                    actionIntentType: "open",
                    actionDestinationType: "channel",
                  },
                };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[16]);
                result = obj4.openChannelLongPressActionSheet(channel.id);
                return;
              }
            }
            cResult[9] = channel.id;
            cResult[10] = message.id;
            cResult[11] = M;
            tmp15 = M;
          }
          const items2 = [id, message.author.id];
          cResult[6] = message.author.id;
          cResult[7] = id;
          cResult[8] = items2;
          tmp12 = items2;
        }
        class P {
          constructor() {
            tmp = guild;
            id = undefined;
            if (guild != null) {
              id = tmp.id;
            }
            if (null != id) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[14]);
              id1 = undefined;
              if (tmp != null) {
                id1 = tmp.id;
              }
              tmp6 = message;
              membersById = obj.requestMembersById(id1, message.author.id);
            }
            return;
          }
        }
        cResult[3] = guild.id;
        cResult[4] = message.author.id;
        cResult[5] = P;
        tmp9 = P;
        let tmpResult = message(channel[13]);
      }
    : (message) => {
        message = message.message;
        guild = message.guild;
        const channel = message.channel;
        ({ unread, visible } = message);
        let items = [UserGuildSettingsStore];
        const stateFromStores = message(channel[13]).useStateFromStores(items, () =>
          UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
        );
        const tmp4 = closure_13();
        let id;
        if (guild != null) {
          id = guild.id;
        }
        const items1 = [id, message.author.id];
        const effect = noop.useEffect(() => {
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            let id1;
            if (guild != null) {
              id1 = guild.id;
            }
            const membersById = GuildActionCreatorsDefault.requestMembersById(id1, message.author.id);
          }
        }, items1);
        const items2 = [channel.id, message.id];
        const items3 = [channel, message];
        const callback = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "long_press_channel");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_header",
              actionIntentType: "open",
              actionDestinationType: "channel",
            },
          });
          const obj3 = {
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_header",
              actionIntentType: "open",
              actionDestinationType: "channel",
            },
          };
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
        }, items2);
        const items4 = [message, channel.id, guild.id];
        const callback1 = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "long_press_message");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: "channel",
            },
          });
          const user = UserStore.getUser(message.author.id);
          const obj3 = {
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: "channel",
            },
          };
          const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet({ channel, message, user });
        }, items3);
        const callback2 = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "press_message");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "navigate",
              actionDestinationType: "channel",
            },
          });
          if (null != message) {
            const obj4 = { id: message.id, timestamp: null };
            const _Date = Date;
            obj4.timestamp = Date.now();
            const items = [obj4];
            ICYMIActionCreatorsDefault.ackGravityItems(items);
            const tmpResult = ICYMIActionCreatorsDefault;
            ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
          }
          const obj3 = {
            itemId: message.id,
            itemType: "announcement",
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "navigate",
              actionDestinationType: "channel",
            },
          };
        }, items4);
        let obj = message(channel[13]);
        const gravityMessage = message(channel[19]).useGravityMessage(message);
        let obj3 = {
          actionLabel: null,
          id: null,
          interactionType: "announcement",
          channelId: null,
          timestamp: null,
          onHeaderPress: null,
          onHeaderLongPress: null,
          message: null,
          shouldFeatureUser: true,
          children: null,
        };
        let tmpResult = message(channel[19]);
        const intl = tmp(tmp2[20]).intl;
        obj3.actionLabel = intl.string(message(channel[20]).t["8P08G9"]);
        obj3.id = message.id;
        obj3.channelId = channel.id;
        const tmp11 = guild(channel[26]);
        obj3.timestamp = guild(channel[21]).extractTimestamp(message.id);
        obj3.onHeaderPress = callback2;
        obj3.onHeaderLongPress = callback;
        obj3.message = gravityMessage;
        let obj4 = {
          onPress: callback2,
          onLongPress: callback1,
          accessibilityRole: "button",
          accessibilityLabel: guild(channel[22])({ channel, unread }),
          accessibilityHint: null,
          unstable_pressDelay: 130,
          style: null,
          children: null,
        };
        const obj5 = guild(channel[21]);
        obj4.accessibilityHint = message(channel[22]).getChannelA11yHint({ channel, muted: stateFromStores });
        obj4.style = tmp4.pressable;
        obj4.children = closure_11(message(channel[23]).MessageRowContent, {
          message,
          channel,
          guild,
          lineClamp: 5,
          visible,
        });
        const items5 = [closure_11(message(channel[24]).PressableHighlight, obj4)];
        let obj6 = {
          style: tmp4.footer,
          children: closure_11(guild(channel[25]), {
            message,
            channel,
            guild,
            backgroundVariant: "base",
            id: message.id,
            itemType: "announcement",
          }),
        };
        items5[1] = closure_11(View, obj6);
        obj3.children = items5;
        return closure_12(tmp11, obj3);
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      const cResult = message(author[12]).c(15);
      ({ unread, message } = visible);
      visible = visible.visible;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== message) {
        const fn = function c() {
          return ChannelStore.getChannel(message.getChannelId());
        };
        cResult[1] = message;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = message(author[12]);
      const stateFromStores = message(author[13]).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (cResult[4] !== guild_id) {
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        class T {
          constructor() {
            guild_id = undefined;
            tmp = closure_6;
            if (closure_1 != null) {
              guild_id = closure_1.guild_id;
            }
            return closure_6.getGuild(guild_id);
          }
        }
        cResult[4] = guild_id1;
        cResult[5] = T;
        let tmp11 = T;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult = message(author[13]);
      const stateFromStores1 = message(author[13]).useStateFromStores(tmp8, tmp11);
      const tmpResult4 = message(author[13]);
      const gravityMessage = message(author[19]).useGravityMessage(message);
      author = undefined;
      if (gravityMessage != null) {
        author = gravityMessage.author;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [];
        class T {
          constructor() {
            guild_id = undefined;
            tmp = closure_6;
            if (closure_1 != null) {
              guild_id = closure_1.guild_id;
            }
            return closure_6.getGuild(guild_id);
          }
        }
        cResult[6] = items2;
      }
      let id;
      if (author != null) {
        id = author.id;
      }
      if (cResult[7] !== id) {
        let id1;
        if (author != null) {
          id1 = author.id;
        }
        class P {
          constructor() {
            id = undefined;
            tmp = closure_7;
            if (author != null) {
              id = author.id;
            }
            return closure_7.isBlockedOrIgnored(id);
          }
        }
        cResult[7] = id1;
        cResult[8] = P;
      }
      message(author[13]);
      let tmp23 = null;
      if (null != stateFromStores) {
        tmp23 = null;
        if (null != stateFromStores1) {
          tmp23 = null;
          if (null != gravityMessage) {
            tmp23 = null;
            if (null != author) {
              tmp23 = null;
              if (!tmp22) {
                if (cResult[9] === stateFromStores) {
                  if (cResult[10] === stateFromStores1) {
                    if (cResult[11] === gravityMessage) {
                      if (cResult[12] === unread) {
                      }
                    }
                  }
                }
                class P {
                  constructor() {
                    id = undefined;
                    tmp = closure_7;
                    if (author != null) {
                      id = author.id;
                    }
                    return closure_7.isBlockedOrIgnored(id);
                  }
                }
                const obj2 = {
                  unread,
                  message: gravityMessage,
                  channel: stateFromStores,
                  guild: stateFromStores1,
                  visible,
                };
                const tmp26 = closure_11(closure_14, obj2);
                cResult[9] = stateFromStores;
                cResult[10] = stateFromStores1;
                cResult[11] = gravityMessage;
                cResult[12] = unread;
                cResult[13] = visible;
                cResult[14] = tmp26;
              }
            }
          }
        }
      }
      return tmp23;
    }
  : (message) => {
      message = message.message;
      let author;
      ({ unread, visible } = message);
      const items = [ChannelStore];
      const stateFromStores = message(author[13]).useStateFromStores(items, () =>
        ChannelStore.getChannel(message.getChannelId()),
      );
      const obj = message(author[13]);
      const tmp = message;
      const tmp2 = author;
      const items1 = [GuildStore];
      const stateFromStores1 = message(author[13]).useStateFromStores(items1, () => {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return GuildStore.getGuild(guild_id);
      });
      const obj2 = message(author[13]);
      const gravityMessage = message(author[19]).useGravityMessage(message);
      author = undefined;
      if (gravityMessage != null) {
        author = gravityMessage.author;
      }
      tmp(tmp2[13]);
      [][0] = RelationshipStore;
      let tmp9 = null;
      if (null != stateFromStores) {
        tmp9 = null;
        if (null != stateFromStores1) {
          tmp9 = null;
          if (null != gravityMessage) {
            tmp9 = null;
            if (null != author) {
              tmp9 = null;
              if (!tmp8) {
                const obj4 = {
                  unread,
                  message: gravityMessage,
                  channel: stateFromStores,
                  guild: stateFromStores1,
                  visible,
                };
                tmp9 = closure_11(closure_14, obj4);
              }
            }
          }
        }
      }
      return tmp9;
    };
