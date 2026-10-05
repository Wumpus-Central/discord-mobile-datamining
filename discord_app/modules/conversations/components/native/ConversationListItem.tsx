// === Module 7585: ConversationListItem ===

// Module 7585 (ConversationListItem)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ConversationConstants from "ConversationConstants" /* 7105 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7550 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7552 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7568 */;
import ConversationPreviewBlockedMessageDefault from "ConversationPreviewBlockedMessage" /* 7587 */;
import ConversationPreviewMessageDefault from "ConversationPreviewMessage" /* 7590 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, navigation;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
({ View: closure_4, StyleSheet } = react_native);
let closure_6 = ConversationConstants.MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
let createStyles = createStyles_mod;
let obj = { card: obj2, title: { flexShrink: 1, minWidth: 0 }, timestamp: { flexShrink: 0 }, headerContainer: obj3, previewsMask: obj4, previews: obj5, maskColumn: obj6, maskOpaque: { flex: 1 }, maskFade: obj7 };
obj2 = { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { flex: 1, marginTop: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { height: nativeDefault.space.PX_64 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((conversation) => {
  let first;
  let items1;
  let items2;
  let items3;
  let obj = conversation(576);
  const cResult = obj.c(50);
  conversation = conversation.conversation;
  const tmp4 = closure_12();
  let obj2 = conversation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === conversation.channelId) {
    let tmp8;
    let tmp9;
    let arr4;
    if (cResult[2] === conversation.id) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = conversation(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
    if (cResult[5] !== stateFromStores) {
      let substr;
      if (stateFromStores != null) {
        substr = stateFromStores.slice(0, closure_6);
      }
      if (substr == null) {
        substr = null;
      }
      cResult[5] = stateFromStores;
      cResult[6] = substr;
      arr4 = substr;
    } else {
      arr4 = cResult[6];
    }
    if (cResult[7] === conversation.channelId) {
      if (cResult[8] === conversation.guildId) {
        if (cResult[9] === conversation.id) {
          if (cResult[10] === conversation.title) {
            let tmp13;
            if (cResult[11] === navigation) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === conversation.title) {
              let tmp17;
              let tmp20;
              if (cResult[14] === tmp4.title) {
                tmp17 = cResult[15];
              }
              const timestamp = tmp4.timestamp;
              if (cResult[16] !== conversation.messageCount) {
                const intl = tmp(1126).intl;
                let obj3 = { count: conversation.messageCount };
                const formatToPlainStringResult = intl.formatToPlainString(conversation(1126).t.poZZGL, obj3);
                cResult[16] = conversation.messageCount;
                cResult[17] = formatToPlainStringResult;
                tmp20 = formatToPlainStringResult;
              } else {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp4.timestamp) {
                let tmp22;
                if (cResult[19] === tmp20) {
                  tmp22 = cResult[20];
                }
                if (cResult[21] === tmp4.headerContainer) {
                  if (cResult[22] === tmp22) {
                    let tmp25;
                    let tmp29;
                    let tmp34;
                    if (cResult[23] === tmp17) {
                      tmp25 = cResult[24];
                    }
                    if (cResult[25] !== tmp4.maskOpaque) {
                      const obj4 = { colors, style: tmp4.maskOpaque };
                      const tmp33 = closure_8(navigation(5605), obj4);
                      cResult[25] = tmp4.maskOpaque;
                      cResult[26] = tmp33;
                      tmp29 = tmp33;
                    } else {
                      tmp29 = cResult[26];
                    }
                    if (cResult[27] !== tmp4.maskFade) {
                      const obj5 = { colors: colors2, start: null, end: null, style: tmp4.maskFade };
                      ({ START: obj9.start, END: obj9.end } = VerticalGradient);
                      const tmp39 = closure_8(navigation(5605), obj5);
                      cResult[27] = tmp4.maskFade;
                      cResult[28] = tmp39;
                      tmp34 = tmp39;
                    } else {
                      tmp34 = cResult[28];
                    }
                    if (cResult[29] === tmp4.maskColumn) {
                      if (cResult[30] === tmp29) {
                        let tmp40;
                        let mapped;
                        if (cResult[31] === tmp34) {
                          tmp40 = cResult[32];
                        }
                        if (cResult[33] === conversation.channelId) {
                          if (cResult[34] === conversation.guildId) {
                            let tmp44;
                            if (cResult[35] === arr4) {
                              tmp44 = cResult[36];
                            }
                            if (cResult[37] === tmp4.previews) {
                              let tmp49;
                              if (cResult[38] === tmp44) {
                                tmp49 = cResult[39];
                              }
                              if (cResult[40] === tmp4.previewsMask) {
                                if (cResult[41] === tmp40) {
                                  let tmp53;
                                  if (cResult[42] === tmp49) {
                                    tmp53 = cResult[43];
                                  }
                                  if (cResult[44] === conversation.title) {
                                    if (cResult[45] === tmp13) {
                                      if (cResult[46] === tmp4.card) {
                                        if (cResult[47] === tmp25) {
                                          let tmp57;
                                          if (cResult[48] === tmp53) {
                                            tmp57 = cResult[49];
                                          }
                                          return tmp57;
                                        }
                                      }
                                    }
                                  }
                                  const obj6 = { style: tmp14, onPress: tmp13, accessibilityLabel: tmp15, children: items1 };
                                  items1 = [tmp25, tmp53];
                                  const tmp59 = closure_9(conversation(5995).Card, obj6);
                                  cResult[44] = conversation.title;
                                  cResult[45] = tmp13;
                                  cResult[46] = tmp4.card;
                                  cResult[47] = tmp25;
                                  cResult[48] = tmp53;
                                  cResult[49] = tmp59;
                                  tmp57 = tmp59;
                                }
                              }
                              const obj7 = { style: tmp4.previewsMask, maskElement: tmp40, children: tmp49 };
                              const tmp56 = closure_8(navigation(6052), obj7);
                              cResult[40] = tmp4.previewsMask;
                              cResult[41] = tmp40;
                              cResult[42] = tmp49;
                              cResult[43] = tmp56;
                              tmp53 = tmp56;
                            }
                            const obj8 = { style: tmp4.previews, children: tmp44 };
                            const tmp52 = closure_8(closure_4, obj8);
                            cResult[37] = tmp4.previews;
                            cResult[38] = tmp44;
                            cResult[39] = tmp52;
                            tmp49 = tmp52;
                          }
                        }
                        if (null == arr4) {
                          mapped = closure_8(navigation(7586), {});
                        } else {
                          mapped = arr4.map((blocked) => {
                            if (!blocked.blocked) {
                              let tmp6Result;
                              if (!blocked.ignored) {
                                const obj = { message: blocked, guildId: null, channelId: null };
                                ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
                                tmp6Result = metroImportAll(ConversationPreviewMessageDefault, obj, blocked.id);
                              }
                              return tmp6Result;
                            }
                            let str = "ignored";
                            const tmp7 = ConversationPreviewBlockedMessageDefault;
                            if (blocked.blocked) {
                              str = "blocked";
                            }
                            tmp6Result = metroImportAll(tmp7, { reason: str }, blocked.id);
                          });
                        }
                        cResult[33] = conversation.channelId;
                        cResult[34] = conversation.guildId;
                        cResult[35] = arr4;
                        cResult[36] = mapped;
                        tmp44 = mapped;
                      }
                    }
                    const obj10 = { style: tmp4.maskColumn, children: items2 };
                    items2 = [tmp29, tmp34];
                    const tmp43 = closure_9(closure_4, obj10);
                    cResult[29] = tmp4.maskColumn;
                    cResult[30] = tmp29;
                    cResult[31] = tmp34;
                    cResult[32] = tmp43;
                    tmp40 = tmp43;
                  }
                }
                const obj11 = { style: tmp16, children: items3 };
                items3 = [tmp17, tmp22];
                const tmp28 = closure_9(closure_4, obj11);
                cResult[21] = tmp4.headerContainer;
                cResult[22] = tmp22;
                cResult[23] = tmp17;
                cResult[24] = tmp28;
                tmp25 = tmp28;
              }
              const obj12 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: timestamp, children: tmp20 };
              const tmp24 = closure_8(conversation(4886).Text, obj12);
              cResult[18] = tmp4.timestamp;
              cResult[19] = tmp20;
              cResult[20] = tmp24;
              tmp22 = tmp24;
            }
            const obj13 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp4.title, children: conversation.title };
            const tmp19 = closure_8(conversation(4886).Text, obj13);
            cResult[13] = conversation.title;
            cResult[14] = tmp4.title;
            cResult[15] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
    }
    const fn2 = function _() {
      const obj = ConversationsActionCreators;
      const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.id, { includeReactions: true, includeMessageReferences: true });
      const obj2 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
      navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, obj2);
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj3 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
      const result = ConversationsAnalytics.trackTopicsUnitClicked(obj3);
    };
    cResult[7] = conversation.channelId;
    cResult[8] = conversation.guildId;
    cResult[9] = conversation.id;
    cResult[10] = conversation.title;
    cResult[11] = navigation;
    cResult[12] = fn2;
    tmp13 = fn2;
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
}) : ((conversation) => {
  let intl;
  let items4;
  let items5;
  let items6;
  let mapped;
  let obj12;
  let obj7;
  let obj9;
  conversation = conversation.conversation;
  let stateFromStores;
  const tmp = closure_12();
  let obj = conversation(stateFromStores[10]);
  navigation = obj.useNavigation();
  let obj2 = conversation(stateFromStores[11]);
  const items = [ChannelConversationsStore];
  const items1 = [, ];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  const tmp2 = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items, () => ChannelConversationsStore.getHydratedMessages(conversation.channelId, conversation.id), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
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
  const callback = react.useCallback(() => {
    const obj = ConversationsActionCreators;
    const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.id, { includeReactions: true, includeMessageReferences: true });
    const obj2 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
    navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, obj2);
    const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
    const obj3 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj3);
  }, items3);
  let obj3 = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: items5 };
  const obj4 = { style: tmp.headerContainer, children: items4 };
  const Card = conversation(stateFromStores[22]).Card;
  items4 = [, ];
  const obj5 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  items4[0] = closure_8(conversation(stateFromStores[15]).Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: intl.formatToPlainString(conversation(stateFromStores[16]).t.poZZGL, obj7) };
  const Text = conversation(stateFromStores[15]).Text;
  intl = conversation(stateFromStores[16]).intl;
  obj7 = { count: conversation.messageCount };
  items4[1] = closure_8(Text, obj6);
  items5 = [closure_9(closure_4, obj4), ];
  const obj8 = { style: tmp.previewsMask, maskElement: closure_9(closure_4, obj9), children: closure_8(closure_4, obj12) };
  obj9 = { style: tmp.maskColumn, children: items6 };
  items6 = [, ];
  const obj10 = { colors, style: tmp.maskOpaque };
  const tmp10 = navigation(stateFromStores[21]);
  items6[0] = closure_8(navigation(stateFromStores[17]), obj10);
  const obj11 = { colors: colors2, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.maskFade };
  items6[1] = closure_8(navigation(stateFromStores[17]), obj11);
  obj12 = { style: tmp.previews, children: mapped };
  const tmp9 = navigation;
  if (null == memo) {
    mapped = closure_8(tmp9(tmp2[18]), {});
  } else {
    mapped = memo.map((blocked) => {
      if (!blocked.blocked) {
        let tmp6Result;
        if (!blocked.ignored) {
          const obj = { message: blocked, guildId: null, channelId: null };
          ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
          tmp6Result = metroImportAll(ConversationPreviewMessageDefault, obj, blocked.id);
        }
        return tmp6Result;
      }
      let str = "ignored";
      const tmp7 = ConversationPreviewBlockedMessageDefault;
      if (blocked.blocked) {
        str = "blocked";
      }
      tmp6Result = metroImportAll(tmp7, { reason: str }, blocked.id);
    });
  }
  items5[1] = closure_8(tmp10, obj8);
  return closure_9(Card, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  const obj = channelId(576);
  const cResult = obj.c(7);
  const tmp = channelId;
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp6;
    let tmp7;
    let tmp9;
    if (cResult[2] === conversationId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] !== stateFromStores) {
      let tmp10 = null;
      if (null != stateFromStores) {
        const obj2 = { conversation: stateFromStores };
        tmp10 = closure_8(closure_13, obj2);
      }
      cResult[5] = stateFromStores;
      cResult[6] = tmp10;
      tmp9 = tmp10;
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
}) : ((channelId) => {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const items = [ChannelConversationsStore];
  const items1 = [channelId, conversationId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
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
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default memoResult;