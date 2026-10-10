// === Module 10352: ChannelVoiceChat ===

// Module 10352 (ChannelVoiceChat)
import nativeDefault from "native" /* 587 */;
import MessageManagerDefault from "MessageManager" /* 9316 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const useIsVoiceChatFocused = fn(10353).useIsVoiceChatFocused;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj = { chat: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" }, chatHeaderSpacer: null, chatHeader: null, chatHeaderBackIconContainer: null, chatHeaderTitleContainer: null, safeAreaTop: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
obj.chatHeaderSpacer = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const rect = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj.chatHeader = rect;
obj.chatHeaderBackIconContainer = { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" };
obj.chatHeaderTitleContainer = { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 };
let obj4 = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.safeAreaTop = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelVoice(channel) {
  const cResult = id(576).c(65);
  ({ channel, inModal } = channel);
  id = channel.id;
  const guild_id = channel.guild_id;
  let tmp4 = undefined !== inModal;
  if (tmp4) {
    tmp4 = inModal;
  }
  const tmp5 = closure_8();
  const tmp6 = useIsVoiceChatFocused();
  if (cResult[0] === id) {
    if (cResult[1] === guild_id) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    ({ top, left, right } = guild_id(1631)());
    const tmp11 = guild_id(1631)();
    const voiceChatNavigationContext = tmp(10359).useVoiceChatNavigationContext();
    let openVoice;
    if (voiceChatNavigationContext != null) {
      openVoice = voiceChatNavigationContext.openVoice;
    }
    if (openVoice == null) {
      openVoice = tmp10(12).noop;
    }
    const tmpResult = tmp(10359);
    const isConnectedToVoiceChannel = tmp(10357).useIsConnectedToVoiceChannel(channel.channel);
    const tmpResult3 = tmp(10357);
    const tmp17 = guild_id(5031)();
    let str = "no-hide-descendants";
    if (tmp6) {
      str = "yes";
    }
    if (cResult[4] === tmp4) {
      if (cResult[5] === left) {
        if (cResult[6] === right) {
          let tmp19 = cResult[7];
        }
        if (cResult[8] === tmp5.chat) {
          if (cResult[9] === tmp19) {
            let tmp21 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_6(tmp10(10225), { absolute: true, tall: true });
            cResult[11] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[11];
          }
          if (cResult[12] === isConnectedToVoiceChannel) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp17) {
                  let tmp26 = cResult[16];
                }
                let str4;
                if (tmp4) {
                  str4 = "none";
                }
                if (cResult[17] === str4) {
                  if (cResult[18] === top) {
                    let tmp31 = cResult[19];
                  }
                  if (cResult[20] === tmp5.safeAreaTop) {
                    if (cResult[21] === tmp31) {
                      let tmp32 = cResult[22];
                    }
                    let str5;
                    if (tmp4) {
                      str5 = "none";
                    }
                    if (cResult[23] !== str5) {
                      const obj3 = { display: str5 };
                      cResult[23] = str5;
                      cResult[24] = obj3;
                      let tmp36 = obj3;
                    } else {
                      tmp36 = cResult[24];
                    }
                    if (cResult[25] === tmp5.chatHeaderSpacer) {
                      if (cResult[26] === tmp36) {
                        let tmp37 = cResult[27];
                      }
                      if (cResult[28] === id) {
                        if (cResult[29] === guild_id) {
                          let tmp41 = cResult[30];
                        }
                        let str6;
                        if (tmp4) {
                          str6 = "none";
                        }
                        if (cResult[31] === str6) {
                          if (cResult[32] === top) {
                            let tmp44 = cResult[33];
                          }
                          if (cResult[34] === tmp5.chatHeader) {
                            if (cResult[35] === tmp44) {
                              let tmp45 = cResult[36];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp(1126).intl;
                              const stringResult = intl.string(tmp(1126).t["13/7kX"]);
                              cResult[37] = stringResult;
                              let tmp46 = stringResult;
                            } else {
                              tmp46 = cResult[37];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj4 = { source: tmp10(10734), size: tmp(1200).Icon.Sizes.MEDIUM };
                              const tmp50 = closure_6(tmp(1200).Icon, obj4);
                              cResult[38] = tmp50;
                              let tmp48 = tmp50;
                            } else {
                              tmp48 = cResult[38];
                            }
                            if (cResult[39] === openVoice) {
                              if (cResult[40] === tmp5.chatHeaderBackIconContainer) {
                                let tmp51 = cResult[41];
                              }
                              if (cResult[42] === id) {
                                if (cResult[43] === guild_id) {
                                  let tmp54 = cResult[44];
                                }
                                if (cResult[45] === tmp5.chatHeaderTitleContainer) {
                                  if (cResult[46] === tmp54) {
                                    let tmp57 = cResult[47];
                                  }
                                  if (cResult[48] === tmp45) {
                                    if (cResult[49] === tmp51) {
                                      if (cResult[50] === tmp57) {
                                        let tmp61 = cResult[51];
                                      }
                                      if (cResult[52] === id) {
                                        if (cResult[53] === guild_id) {
                                          if (cResult[54] === tmp26) {
                                            if (cResult[55] === tmp32) {
                                              if (cResult[56] === tmp37) {
                                                if (cResult[57] === tmp41) {
                                                  if (cResult[58] === tmp61) {
                                                    let tmp65 = cResult[59];
                                                  }
                                                  if (cResult[60] === tmp65) {
                                                    if (cResult[61] === str) {
                                                      if (cResult[62] === tmp18) {
                                                        if (cResult[63] === tmp21) {
                                                          let tmp68 = cResult[64];
                                                        }
                                                        return tmp68;
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { importantForAccessibility: str, accessibilityElementsHidden: tmp18, style: tmp21, children: null };
                                                  const items = [tmp23, tmp65];
                                                  obj5.children = items;
                                                  const tmp71 = closure_7(View, obj5);
                                                  cResult[60] = tmp65;
                                                  cResult[61] = str;
                                                  cResult[62] = tmp18;
                                                  cResult[63] = tmp21;
                                                  cResult[64] = tmp71;
                                                  tmp68 = tmp71;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = { guildId: guild_id, channelId: id, children: null };
                                      const items1 = [tmp26, tmp32, tmp37, tmp41, tmp61];
                                      obj6.children = items1;
                                      const tmp67 = closure_7(tmp(12561).ChannelContainer, obj6);
                                      cResult[52] = id;
                                      cResult[53] = guild_id;
                                      cResult[54] = tmp26;
                                      cResult[55] = tmp32;
                                      cResult[56] = tmp37;
                                      cResult[57] = tmp41;
                                      cResult[58] = tmp61;
                                      cResult[59] = tmp67;
                                      tmp65 = tmp67;
                                    }
                                  }
                                  const obj7 = { style: tmp45, children: null };
                                  const items2 = [tmp51, tmp57];
                                  obj7.children = items2;
                                  const tmp64 = closure_7(View, obj7);
                                  cResult[48] = tmp45;
                                  cResult[49] = tmp51;
                                  cResult[50] = tmp57;
                                  cResult[51] = tmp64;
                                  tmp61 = tmp64;
                                }
                                const obj8 = { style: tmp5.chatHeaderTitleContainer, children: tmp54 };
                                const tmp60 = closure_6(View, obj8);
                                cResult[45] = tmp5.chatHeaderTitleContainer;
                                cResult[46] = tmp54;
                                cResult[47] = tmp60;
                                tmp57 = tmp60;
                              }
                              const obj9 = { guildId: guild_id, channelId: id };
                              const tmp56 = closure_6(tmp(12554).ChannelTitle, obj9);
                              cResult[42] = id;
                              cResult[43] = guild_id;
                              cResult[44] = tmp56;
                              tmp54 = tmp56;
                            }
                            const obj10 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: tmp46, style: tmp5.chatHeaderBackIconContainer, children: tmp48 };
                            const tmp53 = closure_6(tmp(6184).PressableOpacity, obj10);
                            cResult[39] = openVoice;
                            cResult[40] = tmp5.chatHeaderBackIconContainer;
                            cResult[41] = tmp53;
                            tmp51 = tmp53;
                          }
                          const items3 = [tmp5.chatHeader, tmp44];
                          cResult[34] = tmp5.chatHeader;
                          cResult[35] = tmp44;
                          cResult[36] = items3;
                          tmp45 = items3;
                        }
                        const obj11 = { top, display: str6 };
                        cResult[31] = str6;
                        cResult[32] = top;
                        cResult[33] = obj11;
                        tmp44 = obj11;
                      }
                      const obj12 = { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" };
                      const tmp43 = closure_6(tmp10(10362), obj12);
                      cResult[28] = id;
                      cResult[29] = guild_id;
                      cResult[30] = tmp43;
                      tmp41 = tmp43;
                    }
                    const obj13 = { style: null };
                    const items4 = [tmp5.chatHeaderSpacer, tmp36];
                    obj13.style = items4;
                    const tmp40 = closure_6(View, obj13);
                    cResult[25] = tmp5.chatHeaderSpacer;
                    cResult[26] = tmp36;
                    cResult[27] = tmp40;
                    tmp37 = tmp40;
                  }
                  const obj14 = { style: null };
                  const items5 = [tmp5.safeAreaTop, tmp31];
                  obj14.style = items5;
                  const tmp35 = closure_6(View, obj14);
                  cResult[20] = tmp5.safeAreaTop;
                  cResult[21] = tmp31;
                  cResult[22] = tmp35;
                  tmp32 = tmp35;
                }
                const obj15 = { height: top, display: str4 };
                cResult[17] = str4;
                cResult[18] = top;
                cResult[19] = obj15;
                tmp31 = obj15;
              }
            }
          }
          let tmp28Result = null;
          if (!tmp4) {
            const obj16 = { hidden: !tmp6, animated: true, barStyle: null };
            if (isConnectedToVoiceChannel) {
              let str3 = "light-content";
            } else {
              tmp(4969);
              str3 = "dark-content";
            }
            obj16.barStyle = str3;
            tmp28Result = closure_6(tmp10(10360), obj16);
            const tmp10Result = tmp10(10360);
            const tmp30 = !tmp6;
          }
          cResult[12] = isConnectedToVoiceChannel;
          cResult[13] = tmp4;
          cResult[14] = tmp6;
          cResult[15] = tmp17;
          cResult[16] = tmp28Result;
          tmp26 = tmp28Result;
        }
        const items6 = [tmp5.chat, tmp19];
        cResult[8] = tmp5.chat;
        cResult[9] = tmp19;
        cResult[10] = items6;
        tmp21 = items6;
      }
    }
    let tmp20;
    if (!tmp4) {
      const obj17 = { paddingLeft: left, paddingRight: right };
      tmp20 = obj17;
    }
    cResult[4] = tmp4;
    cResult[5] = left;
    cResult[6] = right;
    cResult[7] = tmp20;
    tmp19 = tmp20;
    ref = noop.useRef(null);
  }
  const fn = function u() {
    const messages = MessageManagerDefault.fetchMessages({ guildId: guild_id, channelId: id });
  };
  const items7 = [id, guild_id];
  cResult[0] = id;
  cResult[1] = guild_id;
  cResult[2] = fn;
  cResult[3] = items7;
  tmp8 = items7;
  tmp7 = fn;
  const obj = id(576);
}) : (function ChannelVoice(channel) {
  channel = channel.channel;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let flag = channel.inModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const tmp2 = useIsVoiceChatFocused();
  const items = [id, guild_id];
  const effect = noop.useEffect(() => {
    const messages = MessageManagerDefault.fetchMessages({ guildId: guild_id, channelId: id });
  }, items);
  const tmp6 = guild_id(1631)();
  const top = tmp6.top;
  ({ left, right } = tmp6);
  const voiceChatNavigationContext = id(10359).useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = tmp4(12).noop;
  }
  const obj2 = id(10359);
  const isConnectedToVoiceChannel = id(10357).useIsConnectedToVoiceChannel(channel.channel);
  const tmp7Result = id(10357);
  let str = "no-hide-descendants";
  guild_id(5031)();
  if (tmp2) {
    str = "yes";
  }
  const obj3 = { importantForAccessibility: str, accessibilityElementsHidden: !tmp2, style: null, children: null };
  const items1 = [tmp.chat, ];
  let tmp15;
  if (!flag) {
    const obj4 = { paddingLeft: left, paddingRight: right };
    tmp15 = obj4;
  }
  items1[1] = tmp15;
  obj3.style = items1;
  const items2 = [closure_6(guild_id(10225), { absolute: true, tall: true }), ];
  const obj5 = { guildId: guild_id, channelId: id, children: null };
  let tmp16Result = null;
  if (!flag) {
    const obj6 = { hidden: !tmp2, animated: true, barStyle: null };
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      tmp7(4969);
      str2 = "dark-content";
    }
    obj6.barStyle = str2;
    tmp16Result = closure_6(tmp4(10360), obj6);
    const tmp19 = !tmp2;
    const tmp4Result = tmp4(10360);
  }
  const items3 = [tmp16Result, , , , ];
  const items4 = [tmp.safeAreaTop, ];
  const obj7 = { height: top, display: null };
  let str3;
  if (flag) {
    str3 = "none";
  }
  obj7.display = str3;
  items4[1] = obj7;
  items3[1] = closure_6(View, { style: items4 });
  const items5 = [tmp.chatHeaderSpacer, ];
  let str4;
  if (flag) {
    str4 = "none";
  }
  items5[1] = { display: str4 };
  items3[2] = closure_6(View, { style: items5 });
  items3[3] = closure_6(guild_id(10362), { guildId: guild_id, channelId: id, chatInputRef: noop.useRef(null), screenIndex: "voice-panel" });
  const items6 = [tmp.chatHeader, ];
  const obj8 = { top, display: null };
  let str5;
  if (flag) {
    str5 = "none";
  }
  const obj9 = { style: items6, children: null };
  obj8.display = str5;
  items6[1] = obj8;
  const obj10 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: null, style: null, children: null };
  const intl = tmp7(1126).intl;
  obj10.accessibilityLabel = intl.string(id(1126).t["13/7kX"]);
  obj10.style = tmp.chatHeaderBackIconContainer;
  const ref = noop.useRef(null);
  obj10.children = closure_6(id(1200).Icon, { source: guild_id(10734), size: id(1200).Icon.Sizes.MEDIUM });
  const items7 = [closure_6(id(6184).PressableOpacity, obj10), ];
  const obj11 = { source: guild_id(10734), size: id(1200).Icon.Sizes.MEDIUM };
  items7[1] = closure_6(View, { style: tmp.chatHeaderTitleContainer, children: closure_6(id(12554).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj9.children = items7;
  items3[4] = closure_7(View, obj9);
  obj5.children = items3;
  items2[1] = closure_7(id(12561).ChannelContainer, obj5);
  obj3.children = items2;
  return closure_7(View, obj3);
}));