// === Module 16473: AnnouncementMessageRow ===

// Module 16473 (AnnouncementMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11293 */;
import DesignConstants from "DesignConstants" /* 16474 */;
import ICYMIShared from "ICYMIShared" /* 16475 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16434 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_12;
let unpackModuleId;
const View = react_native.View;
const ITEM_PADDING = DesignConstants.ITEM_PADDING;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset }, footer: { marginVertical: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: paddingLeft.inset } };
  ({ marginVertical: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: paddingLeft.inset });
  return obj;
});
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let channel;
  let first;
  let message;
  let obj4;
  let tmp6;
  let unread;
  let obj = message(channel[12]);
  const cResult = obj.c(56);
  ({ unread, message } = guild);
  guild = guild.guild;
  channel = guild.channel;
  const visible = guild.visible;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = message(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = closure_13();
  if (cResult[3] === guild.id) {
    let tmp9;
    if (cResult[4] === message.author.id) {
      tmp9 = cResult[5];
    }
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    if (cResult[6] === message.author.id) {
      let tmp12;
      if (cResult[7] === id1) {
        tmp12 = cResult[8];
      }
      const effect = react.useEffect(tmp9, tmp12);
      if (cResult[9] === channel.id) {
        let tmp15;
        if (cResult[10] === message.id) {
          tmp15 = cResult[11];
        }
        if (cResult[12] === channel) {
          let tmp16;
          if (cResult[13] === message) {
            tmp16 = cResult[14];
          }
          if (cResult[15] === channel.id) {
            if (cResult[16] === guild.id) {
              let tmp17;
              let tmp21;
              let tmp23;
              if (cResult[17] === message) {
                tmp17 = cResult[18];
              }
              message(channel[19]);
              class E {
                constructor() {
                  const obj = ICYMIActionCreatorsDefault;
                  obj.itemInteracted(message.id, "announcement", "press_message");
                  const obj2 = ICYMIActionCreatorsDefault;
                  const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                  obj2.feedItemActioned(obj3);
                  if (null != message) {
                    const _Date = Date;
                    const obj4 = { id: message.id, timestamp: Date.now() };
                    const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                    ICYMIActionCreatorsDefault;
                    const items = [obj4];
                    ackGravityItems(items);
                    const obj5 = ICYMIShared;
                    obj5.navigateToPost(channel.id, guild.id, message.id);
                  }
                }
              }
              const _Symbol = Symbol;
              class M {
                constructor() {
                  const obj = ICYMIActionCreatorsDefault;
                  obj.itemInteracted(message.id, "announcement", "long_press_channel");
                  const obj2 = ICYMIActionCreatorsDefault;
                  const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                  obj2.feedItemActioned(obj3);
                  const obj4 = openChannelLongPressActionSheet;
                  const result = obj4.openChannelLongPressActionSheet(channel.id);
                }
              }
              if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
                const string = message(tmp2[20]).intl.string;
                class E {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    if (null != message) {
                      const _Date = Date;
                      const obj4 = { id: message.id, timestamp: Date.now() };
                      const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                      ICYMIActionCreatorsDefault;
                      const items = [obj4];
                      ackGravityItems(items);
                      const obj5 = ICYMIShared;
                      obj5.navigateToPost(channel.id, guild.id, message.id);
                    }
                  }
                }
                class M {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "long_press_channel");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = openChannelLongPressActionSheet;
                    const result = obj4.openChannelLongPressActionSheet(channel.id);
                  }
                }
                tmp21 = tmp22;
              } else {
                tmp21 = cResult[19];
              }
              let id = message.id;
              const id2 = channel.id;
              if (cResult[20] !== message.id) {
                guild(channel[21]);
                class E {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    if (null != message) {
                      const _Date = Date;
                      const obj4 = { id: message.id, timestamp: Date.now() };
                      const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                      ICYMIActionCreatorsDefault;
                      const items = [obj4];
                      ackGravityItems(items);
                      const obj5 = ICYMIShared;
                      obj5.navigateToPost(channel.id, guild.id, message.id);
                    }
                  }
                }
                class M {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "long_press_channel");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = openChannelLongPressActionSheet;
                    const result = obj4.openChannelLongPressActionSheet(channel.id);
                  }
                }
                cResult[21] = tmp26;
                tmp23 = tmp26;
              } else {
                tmp23 = cResult[21];
              }
              if (cResult[22] === channel) {
                let tmp27;
                if (cResult[23] === unread) {
                  tmp27 = cResult[24];
                }
                if (cResult[25] === channel) {
                  let tmp30;
                  if (cResult[26] === stateFromStores) {
                    tmp30 = cResult[27];
                  }
                  if (cResult[28] === channel) {
                    if (cResult[29] === guild) {
                      if (cResult[30] === message) {
                        let tmp32;
                        if (cResult[31] === visible) {
                          tmp32 = cResult[32];
                        }
                        if (cResult[33] === tmp16) {
                          if (cResult[34] === tmp17) {
                            if (cResult[35] === tmp8.pressable) {
                              if (cResult[36] === tmp27) {
                                if (cResult[37] === tmp30) {
                                  let tmp34;
                                  if (cResult[38] === tmp32) {
                                    tmp34 = cResult[39];
                                  }
                                  if (cResult[40] === channel) {
                                    if (cResult[41] === guild) {
                                      let tmp36;
                                      if (cResult[42] === message) {
                                        tmp36 = cResult[43];
                                      }
                                      if (cResult[44] === tmp8.footer) {
                                        let tmp40;
                                        if (cResult[45] === tmp36) {
                                          tmp40 = cResult[46];
                                        }
                                        if (cResult[47] === channel.id) {
                                          if (cResult[48] === tmp19) {
                                            if (cResult[49] === tmp15) {
                                              if (cResult[50] === tmp17) {
                                                if (cResult[51] === message.id) {
                                                  if (cResult[52] === tmp23) {
                                                    if (cResult[53] === tmp34) {
                                                      let tmp44;
                                                      if (cResult[54] === tmp40) {
                                                        tmp44 = cResult[55];
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
                                            const obj = ICYMIActionCreatorsDefault;
                                            obj.itemInteracted(message.id, "announcement", "press_message");
                                            const obj2 = ICYMIActionCreatorsDefault;
                                            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                            obj2.feedItemActioned(obj3);
                                            if (null != message) {
                                              const _Date = Date;
                                              const obj4 = { id: message.id, timestamp: Date.now() };
                                              const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                                              ICYMIActionCreatorsDefault;
                                              const items = [obj4];
                                              ackGravityItems(items);
                                              const obj5 = ICYMIShared;
                                              obj5.navigateToPost(channel.id, guild.id, message.id);
                                            }
                                          }
                                        }
                                        class M {
                                          constructor() {
                                            const obj = ICYMIActionCreatorsDefault;
                                            obj.itemInteracted(message.id, "announcement", "long_press_channel");
                                            const obj2 = ICYMIActionCreatorsDefault;
                                            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                                            obj2.feedItemActioned(obj3);
                                            const obj4 = openChannelLongPressActionSheet;
                                            const result = obj4.openChannelLongPressActionSheet(channel.id);
                                          }
                                        }
                                        tmp46[0] = tmp21;
                                        tmp46[1] = id;
                                        tmp46[3] = id2;
                                        tmp46[4] = tmp23;
                                        tmp46[5] = tmp17;
                                        tmp46[6] = tmp15;
                                        tmp46[7] = tmp19;
                                        const items1 = [tmp34, tmp40];
                                        tmp46[9] = items1;
                                        const tmp47 = closure_12(guild(channel[26]), tmp46);
                                        cResult[47] = channel.id;
                                        cResult[48] = tmp19;
                                        cResult[49] = tmp15;
                                        cResult[50] = tmp17;
                                        class P {
                                          constructor() {
                                            let id;
                                            if (guild != null) {
                                              id = guild.id;
                                            }
                                            if (null != id) {
                                              let id1;
                                              const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
                                              GuildActionCreatorsDefault;
                                              if (guild != null) {
                                                id1 = guild.id;
                                              }
                                              const membersById = requestMembersById(id1, message.author.id);
                                            }
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
                                          const obj = ICYMIActionCreatorsDefault;
                                          obj.itemInteracted(message.id, "announcement", "press_message");
                                          const obj2 = ICYMIActionCreatorsDefault;
                                          const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                          obj2.feedItemActioned(obj3);
                                          if (null != message) {
                                            const _Date = Date;
                                            const obj4 = { id: message.id, timestamp: Date.now() };
                                            const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                                            ICYMIActionCreatorsDefault;
                                            const items = [obj4];
                                            ackGravityItems(items);
                                            const obj5 = ICYMIShared;
                                            obj5.navigateToPost(channel.id, guild.id, message.id);
                                          }
                                        }
                                      }
                                      class M {
                                        constructor() {
                                          const obj = ICYMIActionCreatorsDefault;
                                          obj.itemInteracted(message.id, "announcement", "long_press_channel");
                                          const obj2 = ICYMIActionCreatorsDefault;
                                          const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                                          obj2.feedItemActioned(obj3);
                                          const obj4 = openChannelLongPressActionSheet;
                                          const result = obj4.openChannelLongPressActionSheet(channel.id);
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
                                      const obj = ICYMIActionCreatorsDefault;
                                      obj.itemInteracted(message.id, "announcement", "press_message");
                                      const obj2 = ICYMIActionCreatorsDefault;
                                      const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                      obj2.feedItemActioned(obj3);
                                      if (null != message) {
                                        const _Date = Date;
                                        const obj4 = { id: message.id, timestamp: Date.now() };
                                        const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                                        ICYMIActionCreatorsDefault;
                                        const items = [obj4];
                                        ackGravityItems(items);
                                        const obj5 = ICYMIShared;
                                        obj5.navigateToPost(channel.id, guild.id, message.id);
                                      }
                                    }
                                  }
                                  class M {
                                    constructor() {
                                      const obj = ICYMIActionCreatorsDefault;
                                      obj.itemInteracted(message.id, "announcement", "long_press_channel");
                                      const obj2 = ICYMIActionCreatorsDefault;
                                      const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                                      obj2.feedItemActioned(obj3);
                                      const obj4 = openChannelLongPressActionSheet;
                                      const result = obj4.openChannelLongPressActionSheet(channel.id);
                                    }
                                  }
                                  tmp38[0] = message;
                                  tmp38[1] = channel;
                                  tmp38[2] = guild;
                                  tmp38[4] = message.id;
                                  const tmp39 = closure_11(guild(channel[25]), tmp38);
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
                            const obj = ICYMIActionCreatorsDefault;
                            obj.itemInteracted(message.id, "announcement", "press_message");
                            const obj2 = ICYMIActionCreatorsDefault;
                            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                            obj2.feedItemActioned(obj3);
                            if (null != message) {
                              const _Date = Date;
                              const obj4 = { id: message.id, timestamp: Date.now() };
                              const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                              ICYMIActionCreatorsDefault;
                              const items = [obj4];
                              ackGravityItems(items);
                              const obj5 = ICYMIShared;
                              obj5.navigateToPost(channel.id, guild.id, message.id);
                            }
                          }
                        }
                        let obj2 = { onPress: null, onLongPress: tmp16, accessibilityRole: "button", accessibilityLabel: tmp27, accessibilityHint: tmp30, unstable_pressDelay: 130, style: tmp8.pressable, children: tmp32 };
                        class M {
                          constructor() {
                            const obj = ICYMIActionCreatorsDefault;
                            obj.itemInteracted(message.id, "announcement", "long_press_channel");
                            const obj2 = ICYMIActionCreatorsDefault;
                            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                            obj2.feedItemActioned(obj3);
                            const obj4 = openChannelLongPressActionSheet;
                            const result = obj4.openChannelLongPressActionSheet(channel.id);
                          }
                        }
                        const tmp35 = closure_11(message(channel[24]).PressableHighlight, obj2);
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
                      const obj = ICYMIActionCreatorsDefault;
                      obj.itemInteracted(message.id, "announcement", "press_message");
                      const obj2 = ICYMIActionCreatorsDefault;
                      const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                      obj2.feedItemActioned(obj3);
                      if (null != message) {
                        const _Date = Date;
                        const obj4 = { id: message.id, timestamp: Date.now() };
                        const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                        ICYMIActionCreatorsDefault;
                        const items = [obj4];
                        ackGravityItems(items);
                        const obj5 = ICYMIShared;
                        obj5.navigateToPost(channel.id, guild.id, message.id);
                      }
                    }
                  }
                  let obj3 = { message: null, channel, guild, lineClamp: 5, visible };
                  class M {
                    constructor() {
                      const obj = ICYMIActionCreatorsDefault;
                      obj.itemInteracted(message.id, "announcement", "long_press_channel");
                      const obj2 = ICYMIActionCreatorsDefault;
                      const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                      obj2.feedItemActioned(obj3);
                      const obj4 = openChannelLongPressActionSheet;
                      const result = obj4.openChannelLongPressActionSheet(channel.id);
                    }
                  }
                  const tmp33 = closure_11(message(channel[23]).MessageRowContent, obj3);
                  cResult[28] = channel;
                  cResult[29] = guild;
                  cResult[30] = message;
                  cResult[31] = visible;
                  cResult[32] = tmp33;
                  tmp32 = tmp33;
                }
                class E {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    if (null != message) {
                      const _Date = Date;
                      const obj4 = { id: message.id, timestamp: Date.now() };
                      const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                      ICYMIActionCreatorsDefault;
                      const items = [obj4];
                      ackGravityItems(items);
                      const obj5 = ICYMIShared;
                      obj5.navigateToPost(channel.id, guild.id, message.id);
                    }
                  }
                }
                let obj5 = { channel: null, muted: stateFromStores };
                class M {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "announcement", "long_press_channel");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = openChannelLongPressActionSheet;
                    const result = obj4.openChannelLongPressActionSheet(channel.id);
                  }
                }
                const channelA11yHint = obj4.getChannelA11yHint(obj5);
                cResult[25] = channel;
                cResult[26] = stateFromStores;
                cResult[27] = channelA11yHint;
                tmp30 = channelA11yHint;
              }
              const obj6 = { channel, unread };
              const tmp29 = guild(channel[22])(obj6);
              cResult[22] = channel;
              cResult[23] = unread;
              cResult[24] = tmp29;
              tmp27 = tmp29;
            }
          }
          class E {
            constructor() {
              const obj = ICYMIActionCreatorsDefault;
              obj.itemInteracted(message.id, "announcement", "press_message");
              const obj2 = ICYMIActionCreatorsDefault;
              const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
              obj2.feedItemActioned(obj3);
              if (null != message) {
                const _Date = Date;
                const obj4 = { id: message.id, timestamp: Date.now() };
                const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
                ICYMIActionCreatorsDefault;
                const items = [obj4];
                ackGravityItems(items);
                const obj5 = ICYMIShared;
                obj5.navigateToPost(channel.id, guild.id, message.id);
              }
            }
          }
          class M {
            constructor() {
              const obj = ICYMIActionCreatorsDefault;
              obj.itemInteracted(message.id, "announcement", "long_press_channel");
              const obj2 = ICYMIActionCreatorsDefault;
              const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
              obj2.feedItemActioned(obj3);
              const obj4 = openChannelLongPressActionSheet;
              const result = obj4.openChannelLongPressActionSheet(channel.id);
            }
          }
          cResult[16] = guild.id;
          cResult[17] = message;
          cResult[18] = E;
          tmp17 = E;
        }
        class L {
          constructor() {
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted(message.id, "announcement", "long_press_message");
            const obj2 = ICYMIActionCreatorsDefault;
            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
            obj2.feedItemActioned(obj3);
            const user = UserStore.getUser(message.author.id);
            const obj4 = showLongPressMessageActionSheet;
            const obj5 = { channel, message, user };
            const result = obj4.showLongPressMessageActionSheet(obj5);
          }
        }
        class M {
          constructor() {
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted(message.id, "announcement", "long_press_channel");
            const obj2 = ICYMIActionCreatorsDefault;
            const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
            obj2.feedItemActioned(obj3);
            const obj4 = openChannelLongPressActionSheet;
            const result = obj4.openChannelLongPressActionSheet(channel.id);
          }
        }
        cResult[13] = message;
        cResult[14] = L;
        tmp16 = L;
      }
      class M {
        constructor() {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(message.id, "announcement", "long_press_channel");
          const obj2 = ICYMIActionCreatorsDefault;
          const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
          obj2.feedItemActioned(obj3);
          const obj4 = openChannelLongPressActionSheet;
          const result = obj4.openChannelLongPressActionSheet(channel.id);
        }
      }
      cResult[9] = channel.id;
      cResult[10] = message.id;
      cResult[11] = M;
      tmp15 = M;
    }
    const items2 = [id1, message.author.id];
    cResult[6] = message.author.id;
    cResult[7] = id1;
    cResult[8] = items2;
    tmp12 = items2;
  }
  class P {
    constructor() {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      if (null != id) {
        let id1;
        const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
        GuildActionCreatorsDefault;
        if (guild != null) {
          id1 = guild.id;
        }
        const membersById = requestMembersById(id1, message.author.id);
      }
    }
  }
  cResult[3] = guild.id;
  cResult[4] = message.author.id;
  cResult[5] = P;
  tmp9 = P;
}) : ((message) => {
  let intl;
  let items5;
  let obj5;
  let obj7;
  let tmpResult2;
  let unread;
  let visible;
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  ({ unread, visible } = message);
  let obj = message(channel[13]);
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const tmp4 = closure_13();
  let id;
  const useEffect = react.useEffect;
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = useEffect(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      GuildActionCreatorsDefault;
      if (guild != null) {
        id1 = guild.id;
      }
      const membersById = requestMembersById(id1, message.author.id);
    }
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel, message];
  const callback = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_channel");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const obj4 = openChannelLongPressActionSheet;
    const result = obj4.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const user = UserStore.getUser(message.author.id);
    const obj4 = showLongPressMessageActionSheet;
    const obj5 = { channel, message, user };
    const result = obj4.showLongPressMessageActionSheet(obj5);
  }, items3);
  const callback2 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    if (null != message) {
      const _Date = Date;
      const obj4 = { id: message.id, timestamp: Date.now() };
      const ackGravityItems = ICYMIActionCreatorsDefault.ackGravityItems;
      ICYMIActionCreatorsDefault;
      const items = [obj4];
      ackGravityItems(items);
      const obj5 = ICYMIShared;
      obj5.navigateToPost(channel.id, guild.id, message.id);
    }
  }, items4);
  const tmpResult = tmp(tmp2[19]);
  const gravityMessage = tmpResult.useGravityMessage(message);
  let obj3 = { actionLabel: intl.string(message(channel[20]).t["8P08G9"]), id: message.id, interactionType: "announcement", channelId: channel.id, timestamp: obj5.extractTimestamp(message.id), onHeaderPress: callback2, onHeaderLongPress: callback, message: gravityMessage, shouldFeatureUser: true, children: items5 };
  const tmp11 = guild(channel[26]);
  intl = tmp(tmp2[20]).intl;
  obj5 = guild(tmp2[21]);
  let obj4 = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: guild(channel[22])({ channel, unread }), accessibilityHint: tmpResult2.getChannelA11yHint({ channel, muted: stateFromStores }), unstable_pressDelay: 130, style: tmp4.pressable, children: closure_11(message(channel[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible }) };
  const PressableHighlight = tmp(tmp2[24]).PressableHighlight;
  tmpResult2 = message(channel[22]);
  items5 = [closure_11(PressableHighlight, obj4), ];
  const obj6 = { style: tmp4.footer, children: closure_11(guild(channel[25]), obj7) };
  obj7 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "announcement" };
  items5[1] = closure_11(View, obj6);
  return closure_12(tmp11, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let author;
  let first;
  let message;
  let tmp12;
  let tmp6;
  let tmp8;
  let unread;
  const obj = message(author[12]);
  const cResult = obj.c(15);
  ({ unread, message } = visible);
  visible = visible.visible;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message) {
    const fn = function c() {
      return ChannelStore.getChannel(message.getChannelId());
    };
    cResult[1] = message;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = message(author[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  let guild_id;
  const tmp10 = cResult[4];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp10 !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    class T {
      constructor() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return getGuild(guild_id);
      }
    }
    cResult[4] = guild_id1;
    cResult[5] = T;
    tmp12 = T;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult4 = message(author[13]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp12);
  const tmpResult5 = message(author[19]);
  const gravityMessage = tmpResult5.useGravityMessage(message);
  author = undefined;
  if (gravityMessage != null) {
    author = gravityMessage.author;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class T {
      constructor() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return getGuild(guild_id);
      }
    }
    cResult[6] = items2;
  }
  let id;
  const tmp19 = cResult[7];
  if (author != null) {
    id = author.id;
  }
  if (tmp19 !== id) {
    let id1;
    if (author != null) {
      id1 = author.id;
    }
    class P {
      constructor() {
        let id;
        const isBlockedOrIgnored = RelationshipStore.isBlockedOrIgnored;
        if (author != null) {
          id = author.id;
        }
        return isBlockedOrIgnored(id);
      }
    }
    cResult[7] = id1;
    cResult[8] = P;
  }
  message(author[13]);
  let tmp25 = null;
  if (null != stateFromStores) {
    tmp25 = null;
    if (null != stateFromStores1) {
      tmp25 = null;
      if (null != gravityMessage) {
        tmp25 = null;
        if (null != author) {
          tmp25 = null;
          if (!tmp24) {
            if (cResult[9] === stateFromStores) {
              if (cResult[10] === stateFromStores1) {
                if (cResult[11] === gravityMessage) {
                  if (cResult[12] === unread) {
                    let tmp26;
                    if (cResult[13] === visible) {
                      tmp26 = cResult[14];
                    }
                    tmp25 = tmp26;
                  }
                }
              }
            }
            class P {
              constructor() {
                let id;
                const isBlockedOrIgnored = RelationshipStore.isBlockedOrIgnored;
                if (author != null) {
                  id = author.id;
                }
                return isBlockedOrIgnored(id);
              }
            }
            const obj2 = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            const tmp28 = closure_11(closure_14, obj2);
            cResult[9] = stateFromStores;
            cResult[10] = stateFromStores1;
            cResult[11] = gravityMessage;
            cResult[12] = unread;
            cResult[13] = visible;
            cResult[14] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
    }
  }
  return tmp25;
}) : ((message) => {
  let unread;
  let visible;
  message = message.message;
  let author;
  ({ unread, visible } = message);
  const items = [ChannelStore];
  const obj = message(author[13]);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  const items1 = [GuildStore];
  const obj2 = message(author[13]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const obj3 = message(author[19]);
  const gravityMessage = obj3.useGravityMessage(message);
  const tmp2 = author;
  author = undefined;
  const tmp = message;
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
            const obj4 = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            tmp9 = closure_11(closure_14, obj4);
          }
        }
      }
    }
  }
  return tmp9;
});
let result = size.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default tmp4;