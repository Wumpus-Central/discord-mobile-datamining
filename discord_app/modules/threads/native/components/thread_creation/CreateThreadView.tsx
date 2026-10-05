// discord_app/modules/threads/native/components/thread_creation/CreateThreadView.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import Types from "../../../../main_tabs_v2/Types.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import DraftStore from "../../../../../stores/DraftStore.tsx";
import SlowmodeStore from "../../../../../stores/SlowmodeStore.tsx";
import DraftActionCreatorsDefault from "../../../../../actions/DraftActionCreators.tsx";
import useCreateThreadViewPropsDefault from "../../useCreateThreadViewProps.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let closure_2, closure_3, guild_id, navigation, v1;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let unpackModuleId;
function useSubmitForm(parentChannel) {
  let closure_5;
  let str;
  parentChannel = parentChannel.parentChannel;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const setNameError = parentChannel.setNameError;
  react = undefined;
  let closure_6;
  const privateThreadMode = parentChannel.privateThreadMode;
  let obj = parentChannel(setNameError[28]);
  navigation = obj.useNavigation();
  let closure_4 = react.useRef(false);
  const tmp3 = null == threadSettingsDraft.parentMessageId;
  const tmp2 = react;
  react = tmp3;
  const items = [tmp3, navigation, , ,];
  ({ location: arr[2], parentMessageId: arr[3] } = threadSettingsDraft);
  items[4] = parentChannel;
  const callback = react.useCallback((guild_id) => {
    if ("Message Shortcut" === threadSettingsDraft.location) {
      const obj4 = {
        channel_id: parentChannel.id,
        guild_id,
        original_message_id: tmp.parentMessageId,
        action: "thread",
      };
      guild_id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const MESSAGE_SHORTCUT_ACTION_SENT = unpackModuleId.MESSAGE_SHORTCUT_ACTION_SENT;
      AnalyticsUtilsDefault;
      if (parentChannel != null) {
        guild_id = parentChannel.guild_id;
      }
      let guild_id1;
      const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
      AppAnalyticsUtils;
      if (parentChannel != null) {
        guild_id1 = parentChannel.guild_id;
      }
      const merged = Object.assign(collectGuildAnalyticsMetadata(guild_id1));
      const obj = AppAnalyticsUtils;
      const merged1 = Object.assign(obj.collectChannelAnalyticsMetadata(parentChannel));
      track(MESSAGE_SHORTCUT_ACTION_SENT, obj4);
    }
    if (null != navigation) {
      ({ guild_id: obj3.guildId, id: obj3.channelId } = guild_id);
      const navigate = navigation.navigate;
      const obj6 = {
        guildId: null,
        channelId: null,
        showCreateThread: false,
        screenKey: Types.CREATE_THREAD_SCREEN_KEY,
      };
      navigate("channel", obj6, { merge: true });
    } else if (closure_5) {
      const obj2 = router_utils;
      obj2.transitionToGuild(guild_id.guild_id, guild_id.id);
    }
  }, items);
  let obj2 = {
    parentChannel,
    parentMessageId: threadSettingsDraft.parentMessageId,
    threadSettings: threadSettingsDraft,
    privateThreadMode,
    location: str,
    onThreadCreated: callback,
    useDefaultThreadName: true,
  };
  str = threadSettingsDraft.location;
  const tmp5 = threadSettingsDraft(setNameError[33]);
  if (str == null) {
    str = "(unknown)";
  }
  const tmp5Result = tmp5(obj2);
  closure_6 = tmp5Result;
  const useCallback = tmp2.useCallback;
  let closure_0 = navigation((arg0, arg1) => {
    let ref;
    closure_0 = arg0;
    const parentMessageId = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function* (arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              if (!tmp59.current) {
                tmp59.current = true;
                closure_2(null);
                c5 = 1;
                if (null == parentMessageId.parentMessageId) {
                  const obj8 = closure_0(setNameError[34]);
                  closure_2(obj8.makeEmptyTitleError());
                  const obj9 = closure_0(setNameError[35]);
                  obj9.dismissKeyboard();
                  tmp59.current = false;
                  c5 = 0;
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
                v1 = 2;
                c7 = 1;
                const obj10 = { value: v1(tmp68, tmp69), done: false };
                return obj10;
              }
            }
          } else {
            if (1 === v1) {
              c5 = 0;
              closure_0 = tmp59;
              const body = closure_0.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.AUTOMOD_TITLE_BLOCKED) {
                const obj5 = closure_0(setNameError[34]);
                closure_2(obj5.makeAutomodViolationError(closure_0.body, closure_0));
                const obj6 = closure_0(setNameError[35]);
                obj6.dismissKeyboard();
              } else {
                const body3 = closure_0.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                let tmp21 = code1 === constants.INVALID_FORM_BODY;
                if (tmp21) {
                  const body2 = closure_0.body;
                  let name;
                  if (body2 != null) {
                    const errors = body2.errors;
                    if (errors != null) {
                      name = errors.name;
                    }
                  }
                  tmp21 = null != name;
                }
                if (tmp21) {
                  const obj3 = closure_0(setNameError[34]);
                  closure_2(obj3.makeApiNameRequiredError());
                  const obj4 = closure_0(setNameError[35]);
                  obj4.dismissKeyboard();
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              const obj = threadSettingsDraft(setNameError[13]);
              obj.saveDraft(closure_0.id, "", FirstThreadMessage.FirstThreadMessage);
              c5 = 0;
            }
            tmp59.current = false;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp59) {
          if (0 === c5) {
            c7 = 3;
            throw tmp59;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  });
  const items1 = [setNameError, , , ,];
  ({ parentMessageId: arr2[1], name: arr2[2] } = threadSettingsDraft);
  items1[3] = tmp5Result;
  items1[4] = parentChannel;
  return useCallback(function () {
    return closure_0(...arguments);
  }, items1);
}
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
const DraftType = DraftStore.DraftType;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ AbortCodes: c10, AnalyticEvents: unpackModuleId, NOOP: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  containerContent: { flexGrow: 0 },
  expander: { flex: 1 },
  border: obj3,
  options: { marginHorizontal: 12 },
  optionsInner: obj4,
  optionPrivateThread: obj5,
  threadIconContainer: size,
  typingWrapper: obj6,
  parentMessageContainer: { marginBottom: 16 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj4 = { paddingBottom: nativeDefault.space.PX_16 };
obj5 = { paddingTop: nativeDefault.space.PX_8 };
size = {
  width: nativeDefault.space.PX_64,
  height: nativeDefault.space.PX_64,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xxl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj6 = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  justifyContent: "flex-end",
  flexDirection: "row",
  borderColor: nativeDefault.colors.CHAT_BORDER,
};
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (threadSettingsDraft) => {
      let TableSwitchRow;
      let intl;
      let intl2;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj13;
      let obj21;
      let tmp10;
      let tmp11;
      let tmp6;
      let tmp7;
      let tmpResult;
      let obj = threadSettingsDraft(576);
      const cResult = obj.c(66);
      threadSettingsDraft = threadSettingsDraft.threadSettingsDraft;
      const parentChannel = threadSettingsDraft.parentChannel;
      const screenIndex = threadSettingsDraft.screenIndex;
      const tmp4 = closure_15();
      let obj2 = threadSettingsDraft(8810);
      const privateThreadMode = obj2.usePrivateThreadMode(parentChannel);
      if (cResult[0] !== parentChannel.id) {
        const fn = function l() {
          let user;
          return () => {
            const obj = parentChannel(dependencyMap[13]);
            obj.clearDraft(user.id, DraftType.ThreadSettings);
            const obj2 = parentChannel(dependencyMap[13]);
            obj2.clearDraft(user.id, DraftType.FirstThreadMessage);
          };
        };
        const items = [parentChannel.id];
        cResult[0] = parentChannel.id;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      [tmp10, tmp11] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      if (cResult[3] === parentChannel) {
        if (cResult[4] === privateThreadMode) {
          let tmp12;
          let tmp19;
          let tmp20;
          let tmp25;
          let tmp29;
          if (cResult[5] === threadSettingsDraft) {
            tmp12 = cResult[6];
          }
          const tmp14 = useSubmitForm(tmp12);
          const tmp16 = parentChannel(6657);
          const analyticsLocations = tmp16(parentChannel(6681).CREATE_THREAD).analyticsLocations;
          const _Symbol = Symbol;
          const tmp17 = parentChannel(1618)();
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true };
            cResult[7] = obj4;
            tmp19 = obj4;
          } else {
            tmp19 = cResult[7];
          }
          const insets = tmp15(6471)(tmp19).insets;
          if (cResult[8] !== parentChannel) {
            const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
            cResult[8] = parentChannel;
            cResult[9] = isForumLikeChannelResult;
            tmp20 = isForumLikeChannelResult;
          } else {
            tmp20 = cResult[9];
          }
          const ref = react.useRef(null);
          const ref1 = react.useRef(null);
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp27 = closure_13(parentChannel(5911), { absolute: true });
            cResult[10] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[10];
          }
          const diff = insets.bottom - tmp17.bottom;
          if (cResult[11] !== diff) {
            const obj5 = { marginBottom: diff };
            cResult[11] = diff;
            cResult[12] = obj5;
            tmp29 = obj5;
          } else {
            tmp29 = cResult[12];
          }
          if (cResult[13] === tmp4.container) {
            let tmp30;
            let tmp31;
            let tmp35;
            let tmp38;
            if (cResult[14] === tmp29) {
              tmp30 = cResult[15];
            }
            if (cResult[16] !== tmp4.expander) {
              const obj6 = { style: tmp4.expander };
              const tmp34 = closure_13(closure_6, obj6);
              cResult[16] = tmp4.expander;
              cResult[17] = tmp34;
              tmp31 = tmp34;
            } else {
              tmp31 = cResult[17];
            }
            const _Symbol3 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp37 = closure_13(threadSettingsDraft(5857).ThreadIcon, { size: "lg" });
              cResult[18] = tmp37;
              tmp35 = tmp37;
            } else {
              tmp35 = cResult[18];
            }
            if (cResult[19] !== tmp4.threadIconContainer) {
              const obj7 = { style: tmp4.threadIconContainer, children: tmp35 };
              const tmp41 = closure_13(closure_6, obj7);
              cResult[19] = tmp4.threadIconContainer;
              cResult[20] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[20];
            }
            if ((cResult[21] === null) != threadSettingsDraft.parentMessageId) {
              if (cResult[22] === tmp10) {
                let tmp42;
                if (cResult[23] === threadSettingsDraft) {
                  tmp42 = cResult[24];
                }
                if (cResult[25] === tmp20) {
                  if (cResult[26] === privateThreadMode) {
                    if (cResult[27] === tmp4.optionPrivateThread) {
                      let tmp45;
                      if (cResult[28] === threadSettingsDraft) {
                        tmp45 = cResult[29];
                      }
                      if (cResult[30] === tmp4.optionsInner) {
                        if (cResult[31] === tmp38) {
                          if (cResult[32] === tmp42) {
                            let tmp47;
                            if (cResult[33] === tmp45) {
                              tmp47 = cResult[34];
                            }
                            if (cResult[35] === parentChannel.id) {
                              if (cResult[36] === tmp4.border) {
                                if (cResult[37] === tmp4.parentMessageContainer) {
                                  let tmp51;
                                  if (cResult[38] === threadSettingsDraft.parentMessageId) {
                                    tmp51 = cResult[39];
                                  }
                                  if (cResult[40] === tmp4.options) {
                                    if (cResult[41] === tmp47) {
                                      let tmp56;
                                      if (cResult[42] === tmp51) {
                                        tmp56 = cResult[43];
                                      }
                                      if (cResult[44] === tmp4.containerContent) {
                                        let tmp60;
                                        if (cResult[45] === tmp56) {
                                          tmp60 = cResult[46];
                                        }
                                        if (cResult[47] === parentChannel) {
                                          let tmp64;
                                          if (cResult[48] === tmp4.typingWrapper) {
                                            tmp64 = cResult[49];
                                          }
                                          if (cResult[50] === tmp14) {
                                            if (cResult[51] === parentChannel) {
                                              let tmp69;
                                              let tmp73;
                                              if (cResult[52] === screenIndex) {
                                                tmp69 = cResult[53];
                                              }
                                              if (cResult[54] !== parentChannel.id) {
                                                const obj8 = { channelId: parentChannel.id };
                                                const tmp75 = closure_13(parentChannel(12308), obj8);
                                                cResult[54] = parentChannel.id;
                                                cResult[55] = tmp75;
                                                tmp73 = tmp75;
                                              } else {
                                                tmp73 = cResult[55];
                                              }
                                              if (cResult[56] === tmp31) {
                                                if (cResult[57] === tmp60) {
                                                  if (cResult[58] === tmp64) {
                                                    if (cResult[59] === tmp69) {
                                                      if (cResult[60] === tmp73) {
                                                        let tmp76;
                                                        if (cResult[61] === tmp30) {
                                                          tmp76 = cResult[62];
                                                        }
                                                        if (cResult[63] === analyticsLocations) {
                                                          let tmp80;
                                                          if (cResult[64] === tmp76) {
                                                            tmp80 = cResult[65];
                                                          }
                                                          return tmp80;
                                                        }
                                                        const obj9 = { value: analyticsLocations, children: items1 };
                                                        items1 = [tmp25, tmp76];
                                                        const tmp82 = closure_14(
                                                          threadSettingsDraft(6657).AnalyticsLocationProvider,
                                                          obj9,
                                                        );
                                                        cResult[63] = analyticsLocations;
                                                        cResult[64] = tmp76;
                                                        cResult[65] = tmp82;
                                                        tmp80 = tmp82;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj10 = { style: tmp30, children: items2 };
                                              items2 = [tmp31, tmp60, tmp64, tmp69, tmp73];
                                              const tmp79 = closure_14(closure_6, obj10);
                                              cResult[56] = tmp31;
                                              cResult[57] = tmp60;
                                              cResult[58] = tmp64;
                                              cResult[59] = tmp69;
                                              cResult[60] = tmp73;
                                              cResult[61] = tmp30;
                                              cResult[62] = tmp79;
                                              tmp76 = tmp79;
                                            }
                                          }
                                          const obj11 = {
                                            ref,
                                            channel: parentChannel,
                                            onJumpToPresent,
                                            screenIndex,
                                            secondaryTextFieldRef: ref1,
                                            threadCreationCallback: tmp14,
                                          };
                                          const tmp72 = closure_13(parentChannel(11572), obj11);
                                          cResult[50] = tmp14;
                                          cResult[51] = parentChannel;
                                          cResult[52] = screenIndex;
                                          cResult[53] = tmp72;
                                          tmp69 = tmp72;
                                        }
                                        let tmp65 = null;
                                        if (parentChannel.rateLimitPerUser > 0) {
                                          const obj12 = {
                                            style: tmp4.typingWrapper,
                                            children: closure_13(parentChannel(11597), obj13),
                                          };
                                          obj13 = {
                                            channel: parentChannel,
                                            hasTypingText: false,
                                            slowmodeType: SlowmodeType.CreateThread,
                                          };
                                          tmp65 = closure_13(closure_6, obj12);
                                        }
                                        cResult[47] = parentChannel;
                                        cResult[48] = tmp4.typingWrapper;
                                        cResult[49] = tmp65;
                                        tmp64 = tmp65;
                                      }
                                      const obj14 = { style: tmp4.containerContent, children: tmp56 };
                                      const tmp63 = closure_13(closure_7, obj14);
                                      cResult[44] = tmp4.containerContent;
                                      cResult[45] = tmp56;
                                      cResult[46] = tmp63;
                                      tmp60 = tmp63;
                                    }
                                  }
                                  const obj15 = { style: tmp4.options, children: items3 };
                                  items3 = [tmp47, tmp51];
                                  const tmp59 = closure_14(closure_6, obj15);
                                  cResult[40] = tmp4.options;
                                  cResult[41] = tmp47;
                                  cResult[42] = tmp51;
                                  cResult[43] = tmp59;
                                  tmp56 = tmp59;
                                }
                              }
                            }
                            let tmp52 = null;
                            if (null != threadSettingsDraft.parentMessageId) {
                              const obj16 = { style: tmp4.parentMessageContainer, children: items4 };
                              const obj17 = { style: tmp4.border };
                              items4 = [closure_13(closure_6, obj17)];
                              const obj18 = {
                                channelId: parentChannel.id,
                                messageId: threadSettingsDraft.parentMessageId,
                              };
                              items4[1] = closure_13(threadSettingsDraft(16784).ThreadCreationStarterMessage, obj18);
                              tmp52 = closure_14(closure_6, obj16);
                            }
                            cResult[35] = parentChannel.id;
                            cResult[36] = tmp4.border;
                            cResult[37] = tmp4.parentMessageContainer;
                            cResult[38] = threadSettingsDraft.parentMessageId;
                            cResult[39] = tmp52;
                            tmp51 = tmp52;
                          }
                        }
                      }
                      const obj19 = { style: tmp4.optionsInner, children: items5 };
                      items5 = [tmp38, tmp42, tmp45];
                      const tmp50 = closure_14(closure_6, obj19);
                      cResult[30] = tmp4.optionsInner;
                      cResult[31] = tmp38;
                      cResult[32] = tmp42;
                      cResult[33] = tmp45;
                      cResult[34] = tmp50;
                      tmp47 = tmp50;
                    }
                  }
                }
                let tmp46 = null;
                if (!tmp20) {
                  tmp46 = null;
                  if (null == threadSettingsDraft.parentMessageId) {
                    tmp46 = null;
                    if (privateThreadMode !== threadSettingsDraft(8810).PrivateThreadMode.Disabled) {
                      const obj20 = { style: tmp4.optionPrivateThread, children: closure_13(TableSwitchRow, obj21) };
                      obj21 = {
                        start: true,
                        end: true,
                        disabled: privateThreadMode !== threadSettingsDraft(8810).PrivateThreadMode.Enabled,
                        label: intl.string(threadSettingsDraft(1126).t.F1zyvU),
                        subLabel: intl2.string(threadSettingsDraft(1126).t.Wy5RIQ),
                        value: tmpResult.getIsPrivate(threadSettingsDraft, privateThreadMode),
                        onValueChange(isPrivate) {
                          const parentChannelId = threadSettingsDraft.parentChannelId;
                          if (null != parentChannelId) {
                            const obj2 = { isPrivate };
                            const obj = DraftActionCreatorsDefault;
                            obj.changeThreadSettings(parentChannelId, obj2);
                          }
                        },
                      };
                      TableSwitchRow = tmp(6698).TableSwitchRow;
                      intl = tmp(1126).intl;
                      intl2 = tmp(1126).intl;
                      tmpResult = threadSettingsDraft(8810);
                      tmp46 = closure_13(closure_6, obj20);
                    }
                  }
                }
                cResult[25] = tmp20;
                cResult[26] = privateThreadMode;
                cResult[27] = tmp4.optionPrivateThread;
                cResult[28] = threadSettingsDraft;
                cResult[29] = tmp46;
                tmp45 = tmp46;
              }
            }
            const obj22 = {
              ref: ref1,
              chatInputRef: ref,
              threadSettingsDraft,
              threadNameError: tmp10,
              optional: null != threadSettingsDraft.parentMessageId,
            };
            const tmp44 = closure_13(parentChannel(16782), obj22);
            cResult[21] = null != threadSettingsDraft.parentMessageId;
            cResult[22] = tmp10;
            cResult[23] = threadSettingsDraft;
            cResult[24] = tmp44;
            tmp42 = tmp44;
          }
          const items6 = [tmp4.container, tmp29];
          cResult[13] = tmp4.container;
          cResult[14] = tmp29;
          cResult[15] = items6;
          tmp30 = items6;
        }
      }
      const obj23 = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp11 };
      cResult[3] = parentChannel;
      cResult[4] = privateThreadMode;
      cResult[5] = threadSettingsDraft;
      cResult[6] = obj23;
      tmp12 = obj23;
    }
  : (threadSettingsDraft) => {
      let TableSwitchRow;
      let intl;
      let intl2;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj11;
      let obj16;
      let obj7;
      let tmp2Result;
      threadSettingsDraft = threadSettingsDraft.threadSettingsDraft;
      const parentChannel = threadSettingsDraft.parentChannel;
      const screenIndex = threadSettingsDraft.screenIndex;
      const tmp = closure_15();
      let obj = threadSettingsDraft(8810);
      const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
      const items = [parentChannel.id];
      const effect = react.useEffect(() => {
        let user;
        return () => {
          const obj = parentChannel(dependencyMap[13]);
          obj.clearDraft(user.id, DraftType.ThreadSettings);
          const obj2 = parentChannel(dependencyMap[13]);
          obj2.clearDraft(user.id, DraftType.FirstThreadMessage);
        };
      }, items);
      const tmp6 = _slicedToArray(react.useState(null), 2);
      let obj2 = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp6[1] };
      const first = tmp6[0];
      const tmp8 = useSubmitForm(obj2);
      const tmp10 = parentChannel(6657);
      const analyticsLocations = tmp10(parentChannel(6681).CREATE_THREAD).analyticsLocations;
      const tmp11 = parentChannel(1618)();
      const insets = parentChannel(6471)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
      const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
      const obj3 = { value: analyticsLocations, children: items1 };
      const tmp15 = null != threadSettingsDraft.parentMessageId;
      const AnalyticsLocationProvider = threadSettingsDraft(6657).AnalyticsLocationProvider;
      items1 = [closure_13(parentChannel(5911), { absolute: true })];
      const obj4 = { style: items2, children: items3 };
      items2 = [tmp.container, { marginBottom: insets.bottom - tmp11.bottom }];
      items3 = [, , , ,];
      const obj5 = { style: tmp.expander };
      items3[0] = closure_13(closure_6, obj5);
      const obj6 = { style: tmp.containerContent, children: closure_14(closure_6, obj7) };
      const obj8 = { style: tmp.optionsInner, children: items4 };
      items4 = [, ,];
      obj7 = { style: tmp.options, children: items5 };
      const obj9 = {
        style: tmp.threadIconContainer,
        children: closure_13(threadSettingsDraft(5857).ThreadIcon, { size: "lg" }),
      };
      items4[0] = closure_13(closure_6, obj9);
      items4[1] = closure_13(parentChannel(16782), {
        ref: ref1,
        chatInputRef: ref,
        threadSettingsDraft,
        threadNameError: first,
        optional: tmp15,
      });
      let tmp17Result = null;
      if (!isForumLikeChannelResult) {
        tmp17Result = null;
        if (null == threadSettingsDraft.parentMessageId) {
          tmp17Result = null;
          if (privateThreadMode !== threadSettingsDraft(8810).PrivateThreadMode.Disabled) {
            const obj10 = { style: tmp.optionPrivateThread, children: closure_13(TableSwitchRow, obj11) };
            obj11 = {
              start: true,
              end: true,
              disabled: privateThreadMode !== threadSettingsDraft(8810).PrivateThreadMode.Enabled,
              label: intl.string(threadSettingsDraft(1126).t.F1zyvU),
              subLabel: intl2.string(threadSettingsDraft(1126).t.Wy5RIQ),
              value: tmp2Result.getIsPrivate(threadSettingsDraft, privateThreadMode),
              onValueChange(isPrivate) {
                const parentChannelId = threadSettingsDraft.parentChannelId;
                if (null != parentChannelId) {
                  const obj2 = { isPrivate };
                  const obj = DraftActionCreatorsDefault;
                  obj.changeThreadSettings(parentChannelId, obj2);
                }
              },
            };
            TableSwitchRow = tmp2(6698).TableSwitchRow;
            intl = tmp2(1126).intl;
            intl2 = tmp2(1126).intl;
            tmp2Result = threadSettingsDraft(8810);
            tmp17Result = closure_13(closure_6, obj10);
          }
        }
      }
      items4[2] = tmp17Result;
      items5 = [closure_14(closure_6, obj8)];
      let tmp16Result = null;
      if (null != threadSettingsDraft.parentMessageId) {
        const obj12 = { style: tmp.parentMessageContainer, children: items6 };
        const obj13 = { style: tmp.border };
        items6 = [closure_13(closure_6, obj13)];
        const obj14 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
        items6[1] = closure_13(threadSettingsDraft(16784).ThreadCreationStarterMessage, obj14);
        tmp16Result = closure_14(closure_6, obj12);
      }
      items5[1] = tmp16Result;
      items3[1] = closure_13(closure_7, obj6);
      let tmp17Result2 = null;
      if (parentChannel.rateLimitPerUser > 0) {
        const obj15 = { style: tmp.typingWrapper, children: closure_13(parentChannel(11597), obj16) };
        obj16 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
        tmp17Result2 = closure_13(closure_6, obj15);
      }
      items3[2] = tmp17Result2;
      const obj17 = {
        ref,
        channel: parentChannel,
        onJumpToPresent,
        screenIndex,
        secondaryTextFieldRef: ref1,
        threadCreationCallback: tmp8,
      };
      items3[3] = closure_13(parentChannel(11572), obj17);
      const obj18 = { channelId: parentChannel.id };
      items3[4] = closure_13(parentChannel(12308), obj18);
      items1[1] = closure_14(closure_6, obj4);
      return closure_14(AnalyticsLocationProvider, obj3);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (screenIndex) => {
        const obj = react2;
        const cResult = obj.c(4);
        screenIndex = screenIndex.screenIndex;
        const tmp2 = useCreateThreadViewPropsDefault(screenIndex.channelId);
        let tmp3 = null;
        if (null != tmp2) {
          if (cResult[0] === tmp2.parentChannel) {
            if (cResult[1] === tmp2.threadSettingsDraft) {
              let tmp4;
              if (cResult[2] === screenIndex) {
                tmp4 = cResult[3];
              }
              tmp3 = tmp4;
            }
          }
          const obj2 = {
            parentChannel: tmp2.parentChannel,
            screenIndex,
            threadSettingsDraft: tmp2.threadSettingsDraft,
          };
          const tmp7 = map1(closure_16, obj2);
          cResult[0] = tmp2.parentChannel;
          cResult[1] = tmp2.threadSettingsDraft;
          cResult[2] = screenIndex;
          cResult[3] = tmp7;
          tmp4 = tmp7;
        }
        return tmp3;
      }
    : (arg0) => {
        let channelId;
        let screenIndex;
        ({ channelId, screenIndex } = arg0);
        const tmp = useCreateThreadViewPropsDefault(channelId);
        let tmp2 = null;
        if (null != tmp) {
          const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
          tmp2 = map1(closure_16, obj);
        }
        return tmp2;
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = memoResult;
