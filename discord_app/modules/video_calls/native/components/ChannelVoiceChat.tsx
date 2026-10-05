// discord_app/modules/video_calls/native/components/ChannelVoiceChat.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import MessageManagerDefault from "../../../messages/MessageManager.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
const View = react_native.View;
const useIsVoiceChatFocused = ChannelCallStore.useIsVoiceChatFocused;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  chat: obj2,
  chatHeaderSpacer: obj3,
  chatHeader: rect,
  chatHeaderBackIconContainer: { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" },
  chatHeaderTitleContainer: { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 },
  safeAreaTop: obj4,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = {
  flexDirection: "row",
  alignSelf: "stretch",
  height: 44,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "flex-start",
  position: "absolute",
  left: 0,
  right: 0,
  paddingHorizontal: 16,
};
obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let id;
        let inModal;
        let items;
        let items1;
        let items2;
        let items4;
        let items5;
        let left;
        let right;
        let str3;
        let top;
        let obj = id(576);
        const cResult = obj.c(65);
        ({ channel, inModal } = channel);
        id = channel.id;
        const guild_id = channel.guild_id;
        let tmp4 = undefined !== inModal;
        const channel2 = channel.channel;
        if (tmp4) {
          tmp4 = inModal;
        }
        const tmp5 = closure_8();
        const tmp6 = useIsVoiceChatFocused();
        if (cResult[0] === id) {
          let tmp7;
          let tmp8;
          if (cResult[1] === guild_id) {
            tmp7 = cResult[2];
            tmp8 = cResult[3];
          }
          const effect = react.useEffect(tmp7, tmp8);
          ({ top, left, right } = guild_id(1618)());
          guild_id(1618)();
          const tmpResult = id(9087);
          const voiceChatNavigationContext = tmpResult.useVoiceChatNavigationContext();
          let openVoice;
          if (voiceChatNavigationContext != null) {
            openVoice = voiceChatNavigationContext.openVoice;
          }
          if (openVoice == null) {
            openVoice = tmp10(12).noop;
          }
          const tmpResult3 = id(9054);
          const isConnectedToVoiceChannel = tmpResult3.useIsConnectedToVoiceChannel(channel2);
          const ref = react.useRef(null);
          const tmp17 = guild_id(4791)();
          let str = "no-hide-descendants";
          if (tmp6) {
            str = "yes";
          }
          if (cResult[4] === tmp4) {
            if (cResult[5] === left) {
              let tmp19;
              if (cResult[6] === right) {
                tmp19 = cResult[7];
              }
              if (cResult[8] === tmp5.chat) {
                let tmp21;
                let tmp23;
                if (cResult[9] === tmp19) {
                  tmp21 = cResult[10];
                }
                const _Symbol = Symbol;
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp25 = closure_6(guild_id(5911), { absolute: true, tall: true });
                  cResult[11] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[11];
                }
                if (cResult[12] === isConnectedToVoiceChannel) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === tmp6) {
                      let tmp26;
                      if (cResult[15] === tmp17) {
                        tmp26 = cResult[16];
                      }
                      let str4;
                      if (tmp4) {
                        str4 = "none";
                      }
                      if (cResult[17] === str4) {
                        let tmp31;
                        if (cResult[18] === top) {
                          tmp31 = cResult[19];
                        }
                        if (cResult[20] === tmp5.safeAreaTop) {
                          let tmp32;
                          let tmp36;
                          if (cResult[21] === tmp31) {
                            tmp32 = cResult[22];
                          }
                          let str5;
                          if (tmp4) {
                            str5 = "none";
                          }
                          if (cResult[23] !== str5) {
                            const obj3 = { display: str5 };
                            cResult[23] = str5;
                            cResult[24] = obj3;
                            tmp36 = obj3;
                          } else {
                            tmp36 = cResult[24];
                          }
                          if (cResult[25] === tmp5.chatHeaderSpacer) {
                            let tmp37;
                            if (cResult[26] === tmp36) {
                              tmp37 = cResult[27];
                            }
                            if (cResult[28] === id) {
                              let tmp41;
                              if (cResult[29] === guild_id) {
                                tmp41 = cResult[30];
                              }
                              let str6;
                              if (tmp4) {
                                str6 = "none";
                              }
                              if (cResult[31] === str6) {
                                let tmp44;
                                if (cResult[32] === top) {
                                  tmp44 = cResult[33];
                                }
                                if (cResult[34] === tmp5.chatHeader) {
                                  let tmp45;
                                  let tmp46;
                                  let tmp48;
                                  if (cResult[35] === tmp44) {
                                    tmp45 = cResult[36];
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl = tmp(1126).intl;
                                    const stringResult = intl.string(id(1126).t["13/7kX"]);
                                    cResult[37] = stringResult;
                                    tmp46 = stringResult;
                                  } else {
                                    tmp46 = cResult[37];
                                  }
                                  const _Symbol3 = Symbol;
                                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                    const obj4 = { source: guild_id(11196), size: id(1188).Icon.Sizes.MEDIUM };
                                    const Icon = tmp(1188).Icon;
                                    const tmp50 = closure_6(Icon, obj4);
                                    cResult[38] = tmp50;
                                    tmp48 = tmp50;
                                  } else {
                                    tmp48 = cResult[38];
                                  }
                                  if (cResult[39] === openVoice) {
                                    let tmp51;
                                    if (cResult[40] === tmp5.chatHeaderBackIconContainer) {
                                      tmp51 = cResult[41];
                                    }
                                    if (cResult[42] === id) {
                                      let tmp54;
                                      if (cResult[43] === guild_id) {
                                        tmp54 = cResult[44];
                                      }
                                      if (cResult[45] === tmp5.chatHeaderTitleContainer) {
                                        let tmp57;
                                        if (cResult[46] === tmp54) {
                                          tmp57 = cResult[47];
                                        }
                                        if (cResult[48] === tmp45) {
                                          if (cResult[49] === tmp51) {
                                            let tmp61;
                                            if (cResult[50] === tmp57) {
                                              tmp61 = cResult[51];
                                            }
                                            if (cResult[52] === id) {
                                              if (cResult[53] === guild_id) {
                                                if (cResult[54] === tmp26) {
                                                  if (cResult[55] === tmp32) {
                                                    if (cResult[56] === tmp37) {
                                                      if (cResult[57] === tmp41) {
                                                        let tmp65;
                                                        if (cResult[58] === tmp61) {
                                                          tmp65 = cResult[59];
                                                        }
                                                        if (cResult[60] === tmp65) {
                                                          if (cResult[61] === str) {
                                                            if (cResult[62] === !tmp6) {
                                                              let tmp68;
                                                              if (cResult[63] === tmp21) {
                                                                tmp68 = cResult[64];
                                                              }
                                                              return tmp68;
                                                            }
                                                          }
                                                        }
                                                        const obj5 = {
                                                          importantForAccessibility: str,
                                                          accessibilityElementsHidden: !tmp6,
                                                          style: tmp21,
                                                          children: items,
                                                        };
                                                        items = [tmp23, tmp65];
                                                        const tmp71 = closure_7(View, obj5);
                                                        cResult[60] = tmp65;
                                                        cResult[61] = str;
                                                        cResult[62] = !tmp6;
                                                        cResult[63] = tmp21;
                                                        cResult[64] = tmp71;
                                                        tmp68 = tmp71;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj6 = { guildId: guild_id, channelId: id, children: items1 };
                                            items1 = [tmp26, tmp32, tmp37, tmp41, tmp61];
                                            const tmp67 = closure_7(id(12463).ChannelContainer, obj6);
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
                                        const obj7 = { style: tmp45, children: items2 };
                                        items2 = [tmp51, tmp57];
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
                                    const tmp56 = closure_6(id(12456).ChannelTitle, obj9);
                                    cResult[42] = id;
                                    cResult[43] = guild_id;
                                    cResult[44] = tmp56;
                                    tmp54 = tmp56;
                                  }
                                  const obj10 = {
                                    accessibilityRole: "button",
                                    onPress: openVoice,
                                    accessibilityLabel: tmp46,
                                    style: tmp5.chatHeaderBackIconContainer,
                                    children: tmp48,
                                  };
                                  const tmp53 = closure_6(id(5909).PressableOpacity, obj10);
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
                            const obj12 = {
                              guildId: guild_id,
                              channelId: id,
                              chatInputRef: ref,
                              screenIndex: "voice-panel",
                            };
                            const tmp43 = closure_6(guild_id(9760), obj12);
                            cResult[28] = id;
                            cResult[29] = guild_id;
                            cResult[30] = tmp43;
                            tmp41 = tmp43;
                          }
                          const obj13 = { style: items4 };
                          items4 = [tmp5.chatHeaderSpacer, tmp36];
                          const tmp40 = closure_6(View, obj13);
                          cResult[25] = tmp5.chatHeaderSpacer;
                          cResult[26] = tmp36;
                          cResult[27] = tmp40;
                          tmp37 = tmp40;
                        }
                        const obj14 = { style: items5 };
                        items5 = [tmp5.safeAreaTop, tmp31];
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
                  const obj16 = { hidden: !tmp6, animated: true, barStyle: str3 };
                  const tmp10Result = guild_id(9060);
                  if (isConnectedToVoiceChannel) {
                    str3 = "light-content";
                  } else {
                    id(4729);
                    str3 = "dark-content";
                  }
                  tmp28Result = closure_6(tmp10Result, obj16);
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
            tmp20 = { paddingLeft: left, paddingRight: right };
            const obj17 = { paddingLeft: left, paddingRight: right };
          }
          cResult[4] = tmp4;
          cResult[5] = left;
          cResult[6] = right;
          cResult[7] = tmp20;
          tmp19 = tmp20;
        }
        const fn = function u() {
          const obj = MessageManagerDefault;
          const obj2 = { guildId: guild_id, channelId: id };
          const messages = obj.fetchMessages(obj2);
        };
        const items7 = [id, guild_id];
        cResult[0] = id;
        cResult[1] = guild_id;
        cResult[2] = fn;
        cResult[3] = items7;
        tmp8 = items7;
        tmp7 = fn;
      }
    : (channel) => {
        let Icon;
        let intl;
        let items1;
        let items2;
        let items3;
        let items7;
        let left;
        let obj11;
        let right;
        let str2;
        let str3;
        let str5;
        channel = channel.channel;
        const id = channel.id;
        const guild_id = channel.guild_id;
        let flag = channel.inModal;
        const channel2 = channel.channel;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_8();
        const tmp2 = useIsVoiceChatFocused();
        const items = [id, guild_id];
        const effect = react.useEffect(() => {
          const obj = MessageManagerDefault;
          const obj2 = { guildId: guild_id, channelId: id };
          const messages = obj.fetchMessages(obj2);
        }, items);
        const tmp6 = guild_id(1618)();
        const top = tmp6.top;
        ({ left, right } = tmp6);
        let obj2 = id(9087);
        const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
        let openVoice;
        if (voiceChatNavigationContext != null) {
          openVoice = voiceChatNavigationContext.openVoice;
        }
        if (openVoice == null) {
          openVoice = tmp4(12).noop;
        }
        const tmp7Result = id(9054);
        const isConnectedToVoiceChannel = tmp7Result.useIsConnectedToVoiceChannel(channel2);
        let str = "no-hide-descendants";
        const ref = react.useRef(null);
        guild_id(4791)();
        if (tmp2) {
          str = "yes";
        }
        const obj3 = {
          importantForAccessibility: str,
          accessibilityElementsHidden: !tmp2,
          style: items1,
          children: items2,
        };
        items1 = [tmp.chat];
        let tmp15;
        if (!flag) {
          tmp15 = { paddingLeft: left, paddingRight: right };
          const obj4 = { paddingLeft: left, paddingRight: right };
        }
        items1[1] = tmp15;
        items2 = [closure_6(guild_id(5911), { absolute: true, tall: true })];
        let tmp16Result = null;
        const obj5 = { guildId: guild_id, channelId: id, children: items3 };
        const ChannelContainer = tmp7(12463).ChannelContainer;
        if (!flag) {
          const obj6 = { hidden: !tmp2, animated: true, barStyle: str2 };
          const tmp4Result = guild_id(9060);
          if (isConnectedToVoiceChannel) {
            str2 = "light-content";
          } else {
            id(4729);
            str2 = "dark-content";
          }
          tmp16Result = closure_6(tmp4Result, obj6);
        }
        items3 = [tmp16Result, , , ,];
        const items4 = [tmp.safeAreaTop];
        const obj7 = { height: top, display: str3 };
        str3 = undefined;
        if (flag) {
          str3 = "none";
        }
        items4[1] = obj7;
        items3[1] = closure_6(View, { style: items4 });
        const items5 = [tmp.chatHeaderSpacer];
        let str4;
        if (flag) {
          str4 = "none";
        }
        items5[1] = { display: str4 };
        items3[2] = closure_6(View, { style: items5 });
        items3[3] = closure_6(guild_id(9760), {
          guildId: guild_id,
          channelId: id,
          chatInputRef: ref,
          screenIndex: "voice-panel",
        });
        const items6 = [tmp.chatHeader];
        const obj8 = { top, display: str5 };
        str5 = undefined;
        if (flag) {
          str5 = "none";
        }
        const obj9 = { style: items6, children: items7 };
        items6[1] = obj8;
        const obj10 = {
          accessibilityRole: "button",
          onPress: openVoice,
          accessibilityLabel: intl.string(id(1126).t["13/7kX"]),
          style: tmp.chatHeaderBackIconContainer,
          children: closure_6(Icon, obj11),
        };
        const PressableOpacity = tmp7(5909).PressableOpacity;
        intl = tmp7(1126).intl;
        obj11 = { source: guild_id(11196), size: id(1188).Icon.Sizes.MEDIUM };
        Icon = tmp7(1188).Icon;
        items7 = [closure_6(PressableOpacity, obj10)];
        const obj12 = {
          style: tmp.chatHeaderTitleContainer,
          children: closure_6(id(12456).ChannelTitle, { guildId: guild_id, channelId: id }),
        };
        items7[1] = closure_6(View, obj12);
        items3[4] = closure_7(View, obj9);
        items2[1] = closure_7(ChannelContainer, obj5);
        return closure_7(View, obj3);
      },
);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;
