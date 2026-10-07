// === Module 16802: CreateThreadView ===

// Module 16802 (CreateThreadView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Types from "Types" /* 4750 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7416 */;
import useCreateThreadViewPropsDefault from "useCreateThreadViewProps" /* 9791 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function useSubmitForm(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const setNameError = parentChannel.setNameError;
  noop = undefined;
  closure_6 = undefined;
  const navigation = require("Link").useNavigation();
  closure_4 = noop.useRef(false);
  noop = tmp2;
  const items = [null == threadSettingsDraft.parentMessageId, navigation, , , ];
  ({ location: arr[2], parentMessageId: arr[3] } = threadSettingsDraft);
  items[4] = parentChannel;
  const callback = noop.useCallback((guild_id) => {
    if ("Message Shortcut" === threadSettingsDraft.location) {
      const obj7 = { channel_id: id.id, guild_id: null, original_message_id: null, action: "thread" };
      guild_id = undefined;
      if (id != null) {
        guild_id = id.guild_id;
      }
      obj7.guild_id = guild_id;
      obj7.original_message_id = tmp.parentMessageId;
      const obj6 = AnalyticsUtilsDefault;
      let guild_id1;
      if (id != null) {
        guild_id1 = id.guild_id;
      }
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id1));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(id));
      obj6.track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj7);
    }
    if (null != navigation) {
      const obj9 = { guildId: null, channelId: null, showCreateThread: false, screenKey: null };
      ({ guild_id: obj5.guildId, id: obj5.channelId } = guild_id);
      obj9.screenKey = Types.CREATE_THREAD_SCREEN_KEY;
      navigation.navigate("channel", obj9, { merge: true });
    } else if (closure_5) {
      router_utils.transitionToGuild(guild_id.guild_id, guild_id.id);
    }
  }, items);
  let obj3 = { parentChannel, parentMessageId: threadSettingsDraft.parentMessageId, threadSettings: threadSettingsDraft, privateThreadMode: parentChannel.privateThreadMode, location: null, onThreadCreated: null, useDefaultThreadName: true };
  let str = threadSettingsDraft.location;
  let obj = require("Link");
  let obj2 = noop;
  if (str == null) {
    str = "(unknown)";
  }
  obj3.location = str;
  obj3.onThreadCreated = callback;
  const tmp4Result = threadSettingsDraft(setNameError[33])(obj3);
  closure_6 = tmp4Result;
  _require = navigation((arg0, arg1) => {
    closure_0 = arg0;
    const parentMessageId = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c7 = 2;
          current = v2;
          if (0 === v2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_3 = tmp3;
              current = tmp60.current;
              if (!current) {
                tmp60.current = true;
                current(null);
                c5 = 1;
                if (null == parentMessageId.parentMessageId) {
                  current(closure_0(setNameError[34]).makeEmptyTitleError());
                  const obj8 = closure_0(setNameError[34]);
                  closure_0(setNameError[35]).dismissKeyboard();
                  tmp60.current = false;
                  c5 = 0;
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
                v2 = 2;
                c7 = 1;
                const obj10 = { value: v2(tmp70, tmp71), done: false };
                return obj10;
              }
            }
          } else {
            if (1 === current) {
              c5 = 0;
              closure_130_0 = tmp60;
              const body = closure_130_0.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.AUTOMOD_TITLE_BLOCKED) {
                current(closure_0(setNameError[34]).makeAutomodViolationError(closure_130_0.body, closure_0));
                const obj5 = closure_0(setNameError[34]);
                closure_0(setNameError[35]).dismissKeyboard();
                const obj6 = closure_0(setNameError[35]);
              } else {
                const body3 = closure_130_0.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                let tmp23 = code1 === constants.INVALID_FORM_BODY;
                if (tmp23) {
                  const body2 = closure_130_0.body;
                  let name;
                  if (body2 != null) {
                    const errors = body2.errors;
                    if (errors != null) {
                      name = errors.name;
                    }
                  }
                  tmp23 = null != name;
                }
                if (tmp23) {
                  current(closure_0(setNameError[34]).makeApiNameRequiredError());
                  const obj3 = closure_0(setNameError[34]);
                  closure_0(setNameError[35]).dismissKeyboard();
                  const obj4 = closure_0(setNameError[35]);
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              threadSettingsDraft(setNameError[13]).saveDraft(closure_0.id, "", FirstThreadMessage.FirstThreadMessage);
              c5 = 0;
              const obj = threadSettingsDraft(setNameError[13]);
            }
            current = tmp60;
            tmp60.current = false;
          }
          c7 = 3;
        } catch (tmp60) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp60;
          } else {
            v2 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [setNameError, , , , ];
  ({ parentMessageId: arr2[1], name: arr2[2] } = threadSettingsDraft);
  items1[3] = tmp4Result;
  items1[4] = parentChannel;
  return obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const DraftType = fn(7044).DraftType;
const SlowmodeType = fn(7184).SlowmodeType;
const Constants = fn(1085);
({ AbortCodes: c10, AnalyticEvents: closure_11, NOOP: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4896);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, containerContent: { flexGrow: 0 }, expander: { flex: 1 }, border: null, options: null, optionsInner: null, optionPrivateThread: null, threadIconContainer: null, typingWrapper: null, parentMessageContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.border = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj.options = { marginHorizontal: 12 };
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj.optionsInner = { paddingBottom: nativeDefault.space.PX_16 };
let obj5 = { paddingBottom: nativeDefault.space.PX_16 };
obj.optionPrivateThread = { paddingTop: nativeDefault.space.PX_8 };
let size = { width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj.threadIconContainer = size;
let obj6 = { paddingTop: nativeDefault.space.PX_8 };
obj.typingWrapper = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: nativeDefault.colors.CHAT_BORDER };
obj.parentMessageContainer = { marginBottom: 16 };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((threadSettingsDraft) => {
  const cResult = threadSettingsDraft(576).c(66);
  threadSettingsDraft = threadSettingsDraft.threadSettingsDraft;
  const parentChannel = threadSettingsDraft.parentChannel;
  const screenIndex = threadSettingsDraft.screenIndex;
  const tmp4 = closure_15();
  let obj = threadSettingsDraft(576);
  const privateThreadMode = threadSettingsDraft(8840).usePrivateThreadMode(parentChannel);
  if (cResult[0] !== parentChannel.id) {
    const fn = function l() {
      return () => {
        parentChannel(7416).clearDraft(user.id, DraftType.ThreadSettings);
        const obj = parentChannel(7416);
        parentChannel(7416).clearDraft(user.id, DraftType.FirstThreadMessage);
      };
    };
    const items = [parentChannel.id];
    cResult[0] = parentChannel.id;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  let obj2 = threadSettingsDraft(8840);
  [tmp10, tmp11] = noop.useState(null);
  if (cResult[3] === parentChannel) {
    if (cResult[4] === privateThreadMode) {
      if (cResult[5] === threadSettingsDraft) {
        let tmp12 = cResult[6];
      }
      const tmp14 = useSubmitForm(tmp12);
      const analyticsLocations = parentChannel(6664)(parentChannel(6688).CREATE_THREAD).analyticsLocations;
      const _Symbol = Symbol;
      const tmp16 = parentChannel(6664);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true };
        cResult[7] = obj4;
        let tmp19 = obj4;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== parentChannel) {
        const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
        cResult[8] = parentChannel;
        cResult[9] = isForumLikeChannelResult;
        let tmp20 = isForumLikeChannelResult;
      } else {
        tmp20 = cResult[9];
      }
      const ref = noop.useRef(null);
      const ref1 = noop.useRef(null);
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = closure_13(tmp15(5918), { absolute: true });
        cResult[10] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[10];
      }
      const diff = tmp15(6478)(tmp19).insets.bottom - parentChannel(1618)().bottom;
      if (cResult[11] !== diff) {
        const obj5 = { marginBottom: diff };
        cResult[11] = diff;
        cResult[12] = obj5;
        let tmp29 = obj5;
      } else {
        tmp29 = cResult[12];
      }
      if (cResult[13] === tmp4.container) {
        if (cResult[14] === tmp29) {
          let tmp30 = cResult[15];
        }
        if (cResult[16] !== tmp4.expander) {
          const obj6 = { style: tmp4.expander };
          const tmp34 = closure_13(closure_6, obj6);
          cResult[16] = tmp4.expander;
          cResult[17] = tmp34;
          let tmp31 = tmp34;
        } else {
          tmp31 = cResult[17];
        }
        const _Symbol3 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp37 = closure_13(tmp(5864).ThreadIcon, { size: "lg" });
          cResult[18] = tmp37;
          let tmp35 = tmp37;
        } else {
          tmp35 = cResult[18];
        }
        if (cResult[19] !== tmp4.threadIconContainer) {
          const obj7 = { style: tmp4.threadIconContainer, children: tmp35 };
          const tmp41 = closure_13(closure_6, obj7);
          cResult[19] = tmp4.threadIconContainer;
          cResult[20] = tmp41;
          let tmp38 = tmp41;
        } else {
          tmp38 = cResult[20];
        }
        if (cResult[21] === tmp24) {
          if (cResult[22] === tmp10) {
            if (cResult[23] === threadSettingsDraft) {
              let tmp42 = cResult[24];
            }
            if (cResult[25] === tmp20) {
              if (cResult[26] === privateThreadMode) {
                if (cResult[27] === tmp4.optionPrivateThread) {
                  if (cResult[28] === threadSettingsDraft) {
                    let tmp45 = cResult[29];
                  }
                  if (cResult[30] === tmp4.optionsInner) {
                    if (cResult[31] === tmp38) {
                      if (cResult[32] === tmp42) {
                        if (cResult[33] === tmp45) {
                          let tmp47 = cResult[34];
                        }
                        if (cResult[35] === parentChannel.id) {
                          if (cResult[36] === tmp4.border) {
                            if (cResult[37] === tmp4.parentMessageContainer) {
                              if (cResult[38] === threadSettingsDraft.parentMessageId) {
                                let tmp51 = cResult[39];
                              }
                              if (cResult[40] === tmp4.options) {
                                if (cResult[41] === tmp47) {
                                  if (cResult[42] === tmp51) {
                                    let tmp56 = cResult[43];
                                  }
                                  if (cResult[44] === tmp4.containerContent) {
                                    if (cResult[45] === tmp56) {
                                      let tmp60 = cResult[46];
                                    }
                                    if (cResult[47] === parentChannel) {
                                      if (cResult[48] === tmp4.typingWrapper) {
                                        let tmp64 = cResult[49];
                                      }
                                      if (cResult[50] === tmp14) {
                                        if (cResult[51] === parentChannel) {
                                          if (cResult[52] === screenIndex) {
                                            let tmp69 = cResult[53];
                                          }
                                          if (cResult[54] !== parentChannel.id) {
                                            const obj8 = { channelId: parentChannel.id };
                                            const tmp75 = closure_13(tmp15(12323), obj8);
                                            cResult[54] = parentChannel.id;
                                            cResult[55] = tmp75;
                                            let tmp73 = tmp75;
                                          } else {
                                            tmp73 = cResult[55];
                                          }
                                          if (cResult[56] === tmp31) {
                                            if (cResult[57] === tmp60) {
                                              if (cResult[58] === tmp64) {
                                                if (cResult[59] === tmp69) {
                                                  if (cResult[60] === tmp73) {
                                                    if (cResult[61] === tmp30) {
                                                      let tmp76 = cResult[62];
                                                    }
                                                    if (cResult[63] === analyticsLocations) {
                                                      if (cResult[64] === tmp76) {
                                                        let tmp80 = cResult[65];
                                                      }
                                                      return tmp80;
                                                    }
                                                    const obj9 = { value: analyticsLocations, children: null };
                                                    const items1 = [tmp25, tmp76];
                                                    obj9.children = items1;
                                                    const tmp82 = closure_14(tmp(6664).AnalyticsLocationProvider, obj9);
                                                    cResult[63] = analyticsLocations;
                                                    cResult[64] = tmp76;
                                                    cResult[65] = tmp82;
                                                    tmp80 = tmp82;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj10 = { style: tmp30, children: null };
                                          const items2 = [tmp31, tmp60, tmp64, tmp69, tmp73];
                                          obj10.children = items2;
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
                                      const obj11 = { ref, channel: parentChannel, onJumpToPresent, screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: tmp14 };
                                      const tmp72 = closure_13(tmp15(11585), obj11);
                                      cResult[50] = tmp14;
                                      cResult[51] = parentChannel;
                                      cResult[52] = screenIndex;
                                      cResult[53] = tmp72;
                                      tmp69 = tmp72;
                                    }
                                    let tmp65 = null;
                                    if (parentChannel.rateLimitPerUser > 0) {
                                      const obj12 = { style: tmp4.typingWrapper, children: null };
                                      const obj13 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
                                      obj12.children = closure_13(tmp15(11611), obj13);
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
                              const obj15 = { style: tmp4.options, children: null };
                              const items3 = [tmp47, tmp51];
                              obj15.children = items3;
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
                          const obj16 = { style: tmp4.parentMessageContainer, children: null };
                          const obj17 = { style: tmp4.border };
                          const items4 = [closure_13(closure_6, obj17), ];
                          const obj18 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
                          items4[1] = closure_13(tmp(16805).ThreadCreationStarterMessage, obj18);
                          obj16.children = items4;
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
                  const obj19 = { style: tmp4.optionsInner, children: null };
                  const items5 = [tmp38, tmp42, tmp45];
                  obj19.children = items5;
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
                if (privateThreadMode !== tmp(8840).PrivateThreadMode.Disabled) {
                  const obj20 = { style: tmp4.optionPrivateThread, children: null };
                  const obj21 = { start: true, end: true, disabled: privateThreadMode !== tmp(8840).PrivateThreadMode.Enabled, label: null, subLabel: null, value: null, onValueChange: null };
                  const intl = tmp(1126).intl;
                  obj21.label = intl.string(tmp(1126).t.F1zyvU);
                  const intl2 = tmp(1126).intl;
                  obj21.subLabel = intl2.string(tmp(1126).t.Wy5RIQ);
                  obj21.value = tmp(8840).getIsPrivate(threadSettingsDraft, privateThreadMode);
                  obj21.onValueChange = function onValueChange(isPrivate) {
                    const parentChannelId = threadSettingsDraft.parentChannelId;
                    if (null != parentChannelId) {
                      const obj2 = { isPrivate };
                      DraftActionCreatorsDefault.changeThreadSettings(parentChannelId, obj2);
                    }
                  };
                  obj20.children = closure_13(tmp(6705).TableSwitchRow, obj21);
                  tmp46 = closure_13(closure_6, obj20);
                  const tmpResult = tmp(8840);
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
        const obj22 = { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp10, optional: tmp24 };
        const tmp44 = closure_13(tmp15(16803), obj22);
        cResult[21] = tmp24;
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
      const tmp17 = parentChannel(1618)();
    }
  }
  const obj23 = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp11 };
  cResult[3] = parentChannel;
  cResult[4] = privateThreadMode;
  cResult[5] = threadSettingsDraft;
  cResult[6] = obj23;
  tmp12 = obj23;
  const tmp9 = _slicedToArray(noop.useState(null), 2);
}) : ((screenIndex) => {
  const threadSettingsDraft = screenIndex.threadSettingsDraft;
  const parentChannel = screenIndex.parentChannel;
  const tmp = closure_15();
  const privateThreadMode = threadSettingsDraft(8840).usePrivateThreadMode(parentChannel);
  const items = [parentChannel.id];
  const effect = noop.useEffect(() => () => {
    parentChannel(7416).clearDraft(user.id, DraftType.ThreadSettings);
    const obj = parentChannel(7416);
    parentChannel(7416).clearDraft(user.id, DraftType.FirstThreadMessage);
  }, items);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  let obj = threadSettingsDraft(8840);
  let obj2 = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp6[1] };
  const tmp7 = useSubmitForm({ parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp6[1] });
  const tmp9 = parentChannel(6664);
  const tmp10 = parentChannel(1618)();
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const obj3 = { value: tmp9(parentChannel(6688).CREATE_THREAD).analyticsLocations, children: null };
  const items1 = [closure_13(parentChannel(5918), { absolute: true }), ];
  const obj4 = { style: null, children: null };
  const items2 = [tmp.container, { marginBottom: parentChannel(6478)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets.bottom - tmp10.bottom }];
  obj4.style = items2;
  const items3 = [closure_13(closure_6, { style: tmp.expander }), , , , ];
  const obj6 = { style: tmp.containerContent, children: null };
  const obj7 = { style: tmp.options, children: null };
  const obj8 = { style: tmp.optionsInner, children: null };
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const obj5 = { style: tmp.expander };
  const tmp14 = null != threadSettingsDraft.parentMessageId;
  const items4 = [closure_13(closure_6, { style: tmp.threadIconContainer, children: closure_13(threadSettingsDraft(5864).ThreadIcon, { size: "lg" }) }), closure_13(parentChannel(16803), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp6[0], optional: tmp14 }), ];
  let tmp16Result = null;
  if (!isForumLikeChannelResult) {
    tmp16Result = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp16Result = null;
      if (privateThreadMode !== tmp2(8840).PrivateThreadMode.Disabled) {
        const obj10 = { style: tmp.optionPrivateThread, children: null };
        const obj11 = { start: true, end: true, disabled: privateThreadMode !== tmp2(8840).PrivateThreadMode.Enabled, label: null, subLabel: null, value: null, onValueChange: null };
        const intl = tmp2(1126).intl;
        obj11.label = intl.string(tmp2(1126).t.F1zyvU);
        const intl2 = tmp2(1126).intl;
        obj11.subLabel = intl2.string(tmp2(1126).t.Wy5RIQ);
        obj11.value = tmp2(8840).getIsPrivate(threadSettingsDraft, privateThreadMode);
        obj11.onValueChange = function onValueChange(isPrivate) {
          const parentChannelId = threadSettingsDraft.parentChannelId;
          if (null != parentChannelId) {
            const obj2 = { isPrivate };
            DraftActionCreatorsDefault.changeThreadSettings(parentChannelId, obj2);
          }
        };
        obj10.children = closure_13(tmp2(6705).TableSwitchRow, obj11);
        tmp16Result = closure_13(closure_6, obj10);
        const tmp2Result = tmp2(8840);
      }
    }
  }
  items4[2] = tmp16Result;
  obj8.children = items4;
  const items5 = [closure_14(closure_6, obj8), ];
  let tmp15Result = null;
  if (null != threadSettingsDraft.parentMessageId) {
    const obj12 = { style: tmp.parentMessageContainer, children: null };
    const obj13 = { style: tmp.border };
    const items6 = [closure_13(closure_6, obj13), ];
    const obj14 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
    items6[1] = closure_13(tmp2(16805).ThreadCreationStarterMessage, obj14);
    obj12.children = items6;
    tmp15Result = closure_14(closure_6, obj12);
  }
  items5[1] = tmp15Result;
  obj7.children = items5;
  obj6.children = closure_14(closure_6, obj7);
  items3[1] = closure_13(closure_7, obj6);
  let tmp16Result2 = null;
  if (parentChannel.rateLimitPerUser > 0) {
    const obj15 = { style: tmp.typingWrapper, children: null };
    const obj16 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    obj15.children = closure_13(tmp8(11611), obj16);
    tmp16Result2 = closure_13(closure_6, obj15);
  }
  items3[2] = tmp16Result2;
  items3[3] = closure_13(parentChannel(11585), { ref, channel: parentChannel, onJumpToPresent, screenIndex: screenIndex.screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: tmp7 });
  items3[4] = closure_13(parentChannel(12323), { channelId: parentChannel.id });
  obj4.children = items3;
  items1[1] = closure_14(closure_6, obj4);
  obj3.children = items1;
  return closure_14(threadSettingsDraft(6664).AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = fn(558);
let obj7 = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: nativeDefault.colors.CHAT_BORDER };
size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((screenIndex) => {
  const cResult = c.c(4);
  screenIndex = screenIndex.screenIndex;
  threadSettingsDraft = useCreateThreadViewPropsDefault(screenIndex.channelId);
  if (null == threadSettingsDraft) {
    return null;
  } else {
    if (cResult[0] === threadSettingsDraft.parentChannel) {
      if (cResult[1] === threadSettingsDraft.threadSettingsDraft) {
      }
    }
    const obj2 = { parentChannel: threadSettingsDraft.parentChannel, screenIndex, threadSettingsDraft: threadSettingsDraft.threadSettingsDraft };
    const tmp5 = __initData2(closure_16, obj2);
    ({ parentChannel: tmp[0], threadSettingsDraft } = threadSettingsDraft);
    cResult[1] = threadSettingsDraft;
    cResult[2] = screenIndex;
    cResult[3] = tmp5;
  }
}) : ((arg0) => {
  ({ channelId, screenIndex } = arg0);
  const tmp = useCreateThreadViewPropsDefault(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
    tmp2 = __initData2(closure_16, obj);
  }
  return tmp2;
}));