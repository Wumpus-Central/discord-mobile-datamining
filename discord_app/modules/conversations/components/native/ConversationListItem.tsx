// === Module 9767: ConversationListItem ===

// Module 9767 (ConversationListItem)
import nativeDefault from "native" /* 587 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9736 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 9739 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 9754 */;
import ConversationPreviewBlockedMessageDefault from "ConversationPreviewBlockedMessage" /* 9769 */;
import ConversationPreviewMessageDefault from "ConversationPreviewMessage" /* 9771 */;
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7697 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(5607).MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = fn(1087).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
const createStyles = fn(4971);
let obj = { card: { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 }, title: { flexShrink: 1, minWidth: 0 }, timestamp: { flexShrink: 0 }, headerContainer: null, previewsMask: null, previews: null, maskColumn: null, maskOpaque: null, maskFade: null };
let obj3 = { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 };
obj.headerContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj.previewsMask = { flex: 1, marginTop: nativeDefault.space.PX_8 };
let obj5 = { flex: 1, marginTop: nativeDefault.space.PX_8 };
obj.previews = { gap: nativeDefault.space.PX_16 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.maskColumn = {};
obj.maskOpaque = { flex: 1 };
let obj6 = { gap: nativeDefault.space.PX_16 };
let obj7 = {};
obj.maskFade = { height: nativeDefault.space.PX_64 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationListItemBase(conversation) {
  const cResult = conversation(576).c(50);
  conversation = conversation.conversation;
  const tmp4 = closure_12();
  let obj = conversation(576);
  const navigation = conversation(1505).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === conversation.channelId) {
    if (cResult[2] === conversation.id) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp8, tmp9);
    if (cResult[5] !== stateFromStores) {
      let substr;
      if (stateFromStores != null) {
        substr = stateFromStores.slice(0, closure_6);
      }
      if (substr == null) {
        substr = null;
      }
      class T {
        constructor() {
          obj = closure_0(closure_2[12]);
          result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
          obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
          navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
          ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
          obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
          result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
          return;
        }
      }
      cResult[6] = substr;
      let arr4 = substr;
    } else {
      arr4 = cResult[6];
    }
    if (cResult[7] === conversation.channelId) {
      if (cResult[8] === conversation.guildId) {
        if (cResult[9] === conversation.id) {
          if (cResult[10] === conversation.title) {
            if (cResult[11] === navigation) {
              let tmp13 = cResult[12];
            }
            if (cResult[13] === conversation.title) {
              if (cResult[14] === tmp4.title) {
                let tmp16 = cResult[15];
              }
              if (cResult[16] !== conversation.messageCount) {
                const intl = tmp(1128).intl;
                const obj3 = { count: conversation.messageCount };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.poZZGL, obj3);
                class T {
                  constructor() {
                    obj = closure_0(closure_2[12]);
                    result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                    obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                    navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                    ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                    obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                    result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                    return;
                  }
                }
                cResult[16] = conversation.messageCount;
                cResult[17] = formatToPlainStringResult;
                let tmp19 = formatToPlainStringResult;
              } else {
                tmp19 = cResult[17];
              }
              if (cResult[18] === tmp4.timestamp) {
                if (cResult[19] === tmp19) {
                  let tmp21 = cResult[20];
                }
                if (cResult[21] === tmp4.headerContainer) {
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp16) {
                      let tmp25 = cResult[24];
                    }
                    if (cResult[25] !== tmp4.maskOpaque) {
                      const obj4 = { colors, style: null };
                      class T {
                        constructor() {
                          obj = closure_0(closure_2[12]);
                          result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                          obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                          navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                          ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                          obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                          result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                          return;
                        }
                      }
                      const tmp33 = closure_8(navigation(5258), obj4);
                      cResult[25] = tmp4.maskOpaque;
                      cResult[26] = tmp33;
                      let tmp29 = tmp33;
                    } else {
                      tmp29 = cResult[26];
                    }
                    if (cResult[27] !== tmp4.maskFade) {
                      const obj5 = { colors: colors2, start: null, end: null, style: null };
                      class T {
                        constructor() {
                          obj = closure_0(closure_2[12]);
                          result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                          obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                          navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                          ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                          obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                          result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                          return;
                        }
                      }
                      ({ START: obj8.start, END: obj8.end } = VerticalGradient);
                      obj5.style = tmp4.maskFade;
                      const tmp38 = closure_8(navigation(5258), obj5);
                      cResult[27] = tmp4.maskFade;
                      cResult[28] = tmp38;
                      let tmp34 = tmp38;
                    } else {
                      tmp34 = cResult[28];
                    }
                    if (cResult[29] === tmp4.maskColumn) {
                      if (cResult[30] === tmp29) {
                        if (cResult[31] === tmp34) {
                          let tmp39 = cResult[32];
                        }
                        if (cResult[33] === conversation.channelId) {
                          if (cResult[34] === conversation.guildId) {
                            if (cResult[35] === arr4) {
                              if (cResult[37] === tmp4.previews) {
                                if (cResult[38] === tmp42) {
                                  let tmp48 = cResult[39];
                                }
                                if (cResult[40] === tmp4.previewsMask) {
                                  if (cResult[41] === tmp39) {
                                    if (cResult[42] === tmp48) {
                                      let tmp52 = cResult[43];
                                    }
                                    if (cResult[44] === conversation.title) {
                                      if (cResult[45] === tmp13) {
                                        if (cResult[46] === tmp4.card) {
                                          if (cResult[47] === tmp25) {
                                            if (cResult[48] === tmp52) {
                                              let tmp56 = cResult[49];
                                            }
                                            return tmp56;
                                          }
                                        }
                                      }
                                    }
                                    const obj6 = { style: tmp14, onPress: null, accessibilityLabel: null, children: null };
                                    class T {
                                      constructor() {
                                        obj = closure_0(closure_2[12]);
                                        result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                                        obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                                        navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                                        ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                                        obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                                        result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                                        return;
                                      }
                                    }
                                    obj6.accessibilityLabel = tmp15;
                                    const items1 = [tmp25, tmp52];
                                    obj6.children = items1;
                                    const tmp58 = closure_9(tmp(6905).Card, obj6);
                                    cResult[44] = conversation.title;
                                    cResult[45] = tmp13;
                                    cResult[46] = tmp4.card;
                                    cResult[47] = tmp25;
                                    cResult[48] = tmp52;
                                    cResult[49] = tmp58;
                                    tmp56 = tmp58;
                                  }
                                }
                                const obj7 = { style: null, maskElement: null, children: null };
                                class T {
                                  constructor() {
                                    obj = closure_0(closure_2[12]);
                                    result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                                    obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                                    navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                                    ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                                    obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                                    result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                                    return;
                                  }
                                }
                                obj7.maskElement = tmp39;
                                obj7.children = tmp48;
                                const tmp55 = closure_8(navigation(6966), obj7);
                                cResult[40] = tmp4.previewsMask;
                                cResult[41] = tmp39;
                                cResult[42] = tmp48;
                                cResult[43] = tmp55;
                                tmp52 = tmp55;
                              }
                              const obj9 = { style: null, children: null };
                              class T {
                                constructor() {
                                  obj = closure_0(closure_2[12]);
                                  result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                                  obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                                  navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                                  ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                                  obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                                  result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                                  return;
                                }
                              }
                              obj9.children = cResult[36];
                              const tmp51 = closure_8(closure_4, obj9);
                              cResult[37] = tmp4.previews;
                              cResult[38] = cResult[36];
                              cResult[39] = tmp51;
                              tmp48 = tmp51;
                            }
                          }
                        }
                        if (null == arr4) {
                          let mapped = closure_8(navigation(9768), {});
                        } else {
                          mapped = arr4.map((blocked) => {
                            if (!blocked.blocked) {
                              if (!blocked.ignored) {
                                const obj = { message: blocked, guildId: null, channelId: null };
                                ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
                                let tmp6Result = closure_2_8(ConversationPreviewMessageDefault, obj, blocked.id);
                              }
                              return tmp6Result;
                            }
                            let str = "ignored";
                            if (blocked.blocked) {
                              str = "blocked";
                            }
                            tmp6Result = closure_2_8(ConversationPreviewBlockedMessageDefault, { reason: str }, blocked.id);
                          });
                        }
                        class T {
                          constructor() {
                            obj = closure_0(closure_2[12]);
                            result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                            obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                            navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                            ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                            obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                            result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                            return;
                          }
                        }
                        cResult[34] = conversation.guildId;
                        cResult[35] = arr4;
                        cResult[36] = mapped;
                      }
                    }
                    class T {
                      constructor() {
                        obj = closure_0(closure_2[12]);
                        result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                        obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                        navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                        ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                        obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                        result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                        return;
                      }
                    }
                    const obj10 = { style: tmp4.maskColumn, children: null };
                    const items2 = [tmp29, tmp34];
                    obj10.children = items2;
                    const tmp41 = closure_9(closure_4, obj10);
                    cResult[29] = tmp4.maskColumn;
                    cResult[30] = tmp29;
                    cResult[31] = tmp34;
                    cResult[32] = tmp41;
                    tmp39 = tmp41;
                  }
                }
                const obj11 = { style: null, children: null };
                class T {
                  constructor() {
                    obj = closure_0(closure_2[12]);
                    result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                    obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                    navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                    ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                    obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                    result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                    return;
                  }
                }
                const items3 = [tmp16, tmp21];
                obj11.children = items3;
                const tmp28 = closure_9(closure_4, obj11);
                cResult[21] = tmp4.headerContainer;
                cResult[22] = tmp21;
                cResult[23] = tmp16;
                cResult[24] = tmp28;
                tmp25 = tmp28;
              }
              class T {
                constructor() {
                  obj = closure_0(closure_2[12]);
                  result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                  obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                  navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                  ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                  obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                  result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                  return;
                }
              }
              tmp23[3] = tmp4.timestamp;
              tmp23[4] = tmp19;
              const tmp24 = closure_8(tmp(5234).Text, tmp23);
              cResult[18] = tmp4.timestamp;
              cResult[19] = tmp19;
              cResult[20] = tmp24;
              tmp21 = tmp24;
            }
            const obj12 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp4.title, children: null };
            class T {
              constructor() {
                obj = closure_0(closure_2[12]);
                result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
                obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
                navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
                ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
                obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
                result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
                return;
              }
            }
            const tmp18 = closure_8(tmp(5234).Text, obj12);
            cResult[13] = conversation.title;
            cResult[14] = tmp4.title;
            cResult[15] = tmp18;
            tmp16 = tmp18;
          }
        }
      }
    }
    class T {
      constructor() {
        obj = closure_0(closure_2[12]);
        result = obj.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
        obj1 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
        navigateResult = closure_1.navigate(closure_0(closure_2[13]).ConversationNavigatorScreens.FOCUS, obj1);
        ConversationsAnalytics = closure_0(closure_2[14]).ConversationsAnalytics;
        obj4 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
        result1 = ConversationsAnalytics.trackTopicsUnitClicked(obj4);
        return;
      }
    }
    cResult[7] = conversation.channelId;
    cResult[8] = conversation.guildId;
    cResult[9] = conversation.id;
    cResult[10] = conversation.title;
    cResult[11] = navigation;
    cResult[12] = T;
    tmp13 = T;
    const tmpResult = tmp(504);
  }
  const fn = function l() {
    return ChannelConversationsStore.getHydratedMessages(conversation.channelId, conversation.id);
  };
  const items4 = [, ];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  cResult[1] = conversation.channelId;
  cResult[2] = conversation.id;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp9 = items4;
  tmp8 = fn;
  const obj2 = conversation(1505);
}) : (function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  let stateFromStores;
  const tmp = closure_12();
  const navigation = conversation(stateFromStores[10]).useNavigation();
  let obj = conversation(stateFromStores[10]);
  const tmp2 = stateFromStores;
  const items = [ChannelConversationsStore];
  const items1 = [, ];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  stateFromStores = conversation(stateFromStores[11]).useStateFromStores(items, () => ChannelConversationsStore.getHydratedMessages(conversation.channelId, conversation.id), items1);
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let substr;
    if (stateFromStores != null) {
      substr = stateFromStores.slice(0, closure_6);
    }
    if (substr == null) {
      substr = null;
    }
    return substr;
  }, items2);
  const items3 = [navigation, , , , ];
  ({ channelId: arr5[1], guildId: arr5[2], id: arr5[3], title: arr5[4] } = conversation);
  const callback = noop.useCallback(() => {
    const result = ConversationsActionCreators.setSelectedConversation(conversation.channelId, conversation.id, { cacheType: "channel", shouldJump: false });
    navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title });
    const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
    const result1 = ConversationsAnalytics.trackTopicsUnitClicked({ channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false });
  }, items3);
  const obj3 = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: null };
  const obj4 = { style: tmp.headerContainer, children: null };
  const items4 = [closure_8(conversation(stateFromStores[15]).Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: null };
  const intl = conversation(stateFromStores[16]).intl;
  obj6.children = intl.formatToPlainString(conversation(stateFromStores[16]).t.poZZGL, { count: conversation.messageCount });
  items4[1] = closure_8(conversation(stateFromStores[15]).Text, obj6);
  obj4.children = items4;
  const items5 = [closure_9(closure_4, obj4), ];
  const obj8 = { style: tmp.previewsMask, maskElement: null, children: null };
  const obj9 = { style: tmp.maskColumn, children: null };
  const obj2 = conversation(stateFromStores[11]);
  const obj5 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  const obj7 = { count: conversation.messageCount };
  const tmp9 = navigation;
  const items6 = [closure_8(navigation(stateFromStores[17]), { colors, style: tmp.maskOpaque }), closure_8(navigation(stateFromStores[17]), { colors: colors2, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.maskFade })];
  obj9.children = items6;
  obj8.maskElement = closure_9(closure_4, obj9);
  const obj12 = { style: tmp.previews, children: null };
  if (null == memo) {
    let mapped = closure_8(tmp9(tmp2[18]), {});
  } else {
    mapped = memo.map((blocked) => {
      if (!blocked.blocked) {
        if (!blocked.ignored) {
          const obj = { message: blocked, guildId: null, channelId: null };
          ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
          let tmp6Result = closure_2_8(ConversationPreviewMessageDefault, obj, blocked.id);
        }
        return tmp6Result;
      }
      let str = "ignored";
      if (blocked.blocked) {
        str = "blocked";
      }
      tmp6Result = closure_2_8(ConversationPreviewBlockedMessageDefault, { reason: str }, blocked.id);
    });
  }
  obj12.children = mapped;
  obj8.children = closure_8(closure_4, obj12);
  items5[1] = closure_8(navigation(stateFromStores[21]), obj8);
  obj3.children = items5;
  return closure_9(conversation(stateFromStores[22]).Card, obj3);
});
ReactCompilerGating = fn(558);
let obj8 = { height: nativeDefault.space.PX_64 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationListItem(channelId) {
  const cResult = channelId(576).c(7);
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === conversationId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] !== stateFromStores) {
      let tmp10 = null;
      if (null != stateFromStores) {
        const obj2 = { conversation: stateFromStores };
        tmp10 = closure_8(closure_13, obj2);
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp10;
      let tmp9 = tmp10;
    } else {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
  const fn = function l() {
    const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  };
  const items1 = [channelId, conversationId];
  cResult[1] = channelId;
  cResult[2] = conversationId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = channelId(576);
  tmp = channelId;
}) : (function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const items = [ChannelConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  }, items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { conversation: stateFromStores };
    tmp2 = closure_8(closure_13, obj2);
  }
  return tmp2;
}));