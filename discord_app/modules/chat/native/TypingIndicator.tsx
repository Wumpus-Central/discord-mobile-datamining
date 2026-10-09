// discord_app/modules/chat/native/TypingIndicator.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import useTypingUsersIds from "../useTypingUsersIds.tsx";
import CustomTypingIndicatorUtils from "../../custom_typing_indicator/CustomTypingIndicatorUtils.tsx";
import CustomTypingIndicatorAnalytics from "../../custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx";
import openCustomTypingIndicatorAnnounceActionSheet from "../../custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import RawGuildEmojiStore from "../../emojis/RawGuildEmojiStore.tsx";
import TypingStore from "../../../stores/TypingStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.transitionState = transitionState;
  obj.cleanUp = cleanUp;
  return __initData(closure_23, obj, arg0);
}
const View = fn(17).View;
let style_owner_user_id = fn(9356).useChatShowingAutoComplete;
const SlowmodeType = fn(7368).SlowmodeType;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTypingUserIdsForDisplay(arg0, arg1) {
      const cResult = c.c(8);
      const typingUserIds = useTypingUsersIds.useTypingUserIds(arg0, arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function s() {
          return DevSettingsStore.get("preview_own_typing_indicator");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function _() {
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === typingUserIds) {
            let tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      let tmp14 = typingUserIds;
      if (stateFromStores) {
        tmp14 = typingUserIds;
        if (null != stateFromStores1) {
          const items2 = [stateFromStores1];
          tmp14 = items2;
        }
      }
      cResult[4] = stateFromStores1;
      cResult[5] = stateFromStores;
      cResult[6] = typingUserIds;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      const tmpResult2 = initialize;
    }
  : function useTypingUserIdsForDisplay(arg0, arg1) {
      typingUserIds = typingUserIds(stateFromStores1[12]).useTypingUserIds(arg0, arg1);
      const obj = typingUserIds(stateFromStores1[12]);
      let items = [DevSettingsStore];
      const stateFromStores = typingUserIds(stateFromStores1[13]).useStateFromStores(items, () =>
        DevSettingsStore.get("preview_own_typing_indicator"),
      );
      const obj2 = typingUserIds(stateFromStores1[13]);
      const items1 = [UserStore];
      stateFromStores1 = typingUserIds(stateFromStores1[13]).useStateFromStores(items1, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const items2 = [stateFromStores, stateFromStores1, typingUserIds];
      return noop.useMemo(() => {
        if (stateFromStores) {
          if (null != stateFromStores1) {
            const items = [tmp];
            let tmp3 = items;
          }
          return tmp3;
        }
        tmp3 = typingUserIds;
      }, items2);
    };
let closure_15 = tmp3;
const createStyles = fn(5091);
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = {
    typingWrapper: {
      paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
      paddingBottom: 4,
      paddingHorizontal: 16,
      alignSelf: "stretch",
      backgroundColor: "transparent",
      paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
      paddingLeft: 2 * arg0,
    },
    wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" },
    horiz: null,
    text: null,
  };
  const obj2 = {
    paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP,
    paddingBottom: 4,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingLeft: 2 * arg0,
  };
  obj.horiz = { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
  obj.text = { flex: 1 };
  return obj;
});
let closure_17 = {
  code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
let closure_18 = {
  code: 'function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev){return;}if(current==null){return;}if(current.y.toFixed(2)!==current.height.toFixed(2)){return;}translateYValue.set(withSpring(-current.height,springStandard,"respect-motion-settings"));}',
};
let closure_19 = {
  code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
const __initData = {
  code: "function TypingIndicatorTsx4(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}",
};
const __initData2 = {
  code: "function TypingIndicatorTsx5(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}",
};
const __initData3 = {
  code: "function TypingIndicatorTsx6(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}",
};
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TypingIndicatorInner(channel) {
      const cResult = channel(cleanUp[11]).c(58);
      channel = channel.channel;
      ({ typingUserIds, transitionState } = channel);
      cleanUp = channel.cleanUp;
      let obj = channel(cleanUp[11]);
      let customTypingIndicatorConfig = channel(cleanUp[16]).useCustomTypingIndicatorConfig("TypingIndicatorInner");
      const canView = customTypingIndicatorConfig.canView;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [DevSettingsStore];
        class S {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj2 = channel(cleanUp[16]);
      const stateFromStores = channel(cleanUp[13]).useStateFromStores(tmp5, S);
      if (cResult[2] !== channel) {
        let guildId = channel.getGuildId();
        cResult[2] = channel;
        class S {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
        cResult[3] = guildId;
        let tmp9 = guildId;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === channel.id) {
        if (cResult[5] === tmp9) {
          if (cResult[6] === typingUserIds) {
            let tmp11 = cResult[7];
          }
          transitionState(tmp2[17])(tmp11);
          class S {
            constructor() {
              return closure_6.get("preview_own_typing_indicator");
            }
          }
          style_owner_user_id = null;
          if (1 === typingUserIds.length) {
            style_owner_user_id = typingUserIds[0];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [TypingStore, ,];
            class S {
              constructor() {
                return closure_6.get("preview_own_typing_indicator");
              }
            }
            items1[1] = UserStore;
            items1[2] = RawGuildEmojiStore;
            cResult[8] = items1;
            let tmp15 = items1;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === channel) {
            if (cResult[10] === canView) {
              if (cResult[11] === stateFromStores) {
                if (cResult[12] === style_owner_user_id) {
                  let tmp18 = cResult[13];
                  let tmp19 = cResult[14];
                }
                const stateFromStoresObject = tmp(tmp2[13]).useStateFromStoresObject(tmp15, tmp18, tmp19);
                class S {
                  constructor() {
                    return closure_6.get("preview_own_typing_indicator");
                  }
                }
                RawGuildEmojiStore = tmp21;
                if (cResult[15] === channel.id) {
                  if (cResult[16] === channel.type) {
                    if (cResult[17] === tmp21) {
                      let tmp22 = cResult[18];
                      let tmp23 = cResult[19];
                    }
                    const effect = canView.useEffect(tmp23, tmp22);
                    class S {
                      constructor() {
                        return closure_6.get("preview_own_typing_indicator");
                      }
                    }
                    const analyticsLocations = tmp26(
                      transitionState(tmp2[22]).CHAT_TYPING_INDICATOR,
                    ).analyticsLocations;
                    if (cResult[20] === analyticsLocations) {
                      if (cResult[21] === channel.id) {
                        if (cResult[22] === channel.type) {
                          if (cResult[23] === style_owner_user_id) {
                            const sharedValue = tmp(tmp2[25]).useSharedValue(undefined);
                            class S {
                              constructor() {
                                return closure_6.get("preview_own_typing_indicator");
                              }
                            }
                            if (cResult[26] !== sharedValue) {
                              class B {
                                constructor(arg0) {
                                  result = closure_9.set(channel.nativeEvent.layout);
                                  return;
                                }
                              }
                              cResult[26] = sharedValue;
                              class S {
                                constructor() {
                                  return closure_6.get("preview_own_typing_indicator");
                                }
                              }
                              cResult[27] = B;
                            } else {
                              class B {
                                constructor(arg0) {
                                  result = closure_9.set(channel.nativeEvent.layout);
                                  return;
                                }
                              }
                            }
                            const tmpResult6 = tmp(tmp2[25]);
                            class Z {
                              constructor() {
                                config = closure_6.config;
                                tmp = null != config;
                                if (tmp) {
                                  tmp2 = closure_5;
                                  tmp = null != closure_5;
                                }
                                if (tmp) {
                                  tmp3 = closure_1;
                                  tmp4 = closure_2;
                                  obj = closure_1(closure_2[20]);
                                  tmp5 = AnalyticEvents;
                                  obj1 = { channel_id: null, channel_type: null, style_owner_user_id: null };
                                  tmp6 = channel;
                                  ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
                                  tmp7 = closure_5;
                                  obj1.style_owner_user_id = closure_5;
                                  tmp8 = closure_0;
                                  tmp9 = closure_2;
                                  obj3 = closure_0(closure_2[23]);
                                  tmp10 = obj1;
                                  merged = Object.assign(obj3.getTypingIndicatorStyleAnalytics(config));
                                  trackResult = obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED, obj1);
                                }
                                obj4 = closure_0(closure_2[24]);
                                result = obj4.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
                                return;
                              }
                            }
                            closure_16(
                              tmp(tmp2[26]).useToken(
                                transitionState(tmp2[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
                              ),
                            );
                            const tmpResult7 = tmp(tmp2[26]);
                            const sharedValue1 = tmp(tmp2[25]).useSharedValue(0);
                            class O {
                              constructor() {
                                tmp = closure_5;
                                if (null != closure_5) {
                                  tmp18 = canView;
                                  if (canView) {
                                    tmp2 = closure_10;
                                    user = closure_10.getUser(tmp);
                                    tmp4 = closure_4;
                                    if (closure_4) {
                                      typingIndicatorStyle = undefined;
                                      if (user != null) {
                                        typingIndicatorStyle = user.typingIndicatorStyle;
                                      }
                                      if (typingIndicatorStyle == null) {
                                        typingIndicatorStyle = null;
                                      }
                                      customTypingIndicatorConfig = typingIndicatorStyle;
                                    } else {
                                      tmp5 = closure_9;
                                      customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                                    }
                                    if (null != customTypingIndicatorConfig) {
                                      if (null != user) {
                                        tmp19 = channel;
                                        guildId = channel.getGuildId();
                                        guildEmojis = null;
                                        if (null != guildId) {
                                          tmp8 = closure_7;
                                          guildEmojis = closure_7.getGuildEmojis(guildId);
                                        }
                                        obj = { config: null, name: null };
                                        tmp10 = closure_0;
                                        tmp11 = closure_2;
                                        obj2 = closure_0(closure_2[18]);
                                        tmp12 = obj2;
                                        tmp13 = customTypingIndicatorConfig;
                                        tmp14 = tmp19;
                                        tmp15 = tmp;
                                        tmp16 = guildEmojis;
                                        obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                                          customTypingIndicatorConfig,
                                          tmp19,
                                          tmp,
                                          guildEmojis,
                                        );
                                        tmp17 = closure_1;
                                        obj3 = closure_1(closure_2[19]);
                                        obj.name = obj3.getName(guildId, tmp19.id, user);
                                        return obj;
                                      }
                                    }
                                    return { config: null, name: null };
                                  }
                                }
                                return { config: null, name: null };
                              }
                            }
                            if (cResult[28] === cleanUp) {
                              class B {
                                constructor(arg0) {
                                  result = closure_9.set(channel.nativeEvent.layout);
                                  return;
                                }
                              }
                            }
                            class J {
                              constructor() {
                                if (transitionState === closure_0(closure_2[27]).TransitionStates.YEETED) {
                                  tmp = closure_10;
                                  num = 0;
                                  result = closure_10.set(0);
                                  tmp3 = cleanUp;
                                  tmp4 = cleanUp();
                                }
                                return;
                              }
                            }
                            const items2 = [cleanUp, transitionState, sharedValue1];
                            cResult[28] = cleanUp;
                            cResult[29] = transitionState;
                            cResult[30] = sharedValue1;
                            cResult[31] = J;
                            cResult[32] = items2;
                            const tmpResult8 = tmp(tmp2[25]);
                          }
                        }
                      }
                    }
                    class Z {
                      constructor() {
                        config = closure_6.config;
                        tmp = null != config;
                        if (tmp) {
                          tmp2 = closure_5;
                          tmp = null != closure_5;
                        }
                        if (tmp) {
                          tmp3 = closure_1;
                          tmp4 = closure_2;
                          obj = closure_1(closure_2[20]);
                          tmp5 = AnalyticEvents;
                          obj1 = { channel_id: null, channel_type: null, style_owner_user_id: null };
                          tmp6 = channel;
                          ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
                          tmp7 = closure_5;
                          obj1.style_owner_user_id = closure_5;
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj3 = closure_0(closure_2[23]);
                          tmp10 = obj1;
                          merged = Object.assign(obj3.getTypingIndicatorStyleAnalytics(config));
                          trackResult = obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED, obj1);
                        }
                        obj4 = closure_0(closure_2[24]);
                        result = obj4.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
                        return;
                      }
                    }
                    cResult[20] = analyticsLocations;
                    cResult[21] = channel.id;
                    class O {
                      constructor() {
                        tmp = closure_5;
                        if (null != closure_5) {
                          tmp18 = canView;
                          if (canView) {
                            tmp2 = closure_10;
                            user = closure_10.getUser(tmp);
                            tmp4 = closure_4;
                            if (closure_4) {
                              typingIndicatorStyle = undefined;
                              if (user != null) {
                                typingIndicatorStyle = user.typingIndicatorStyle;
                              }
                              if (typingIndicatorStyle == null) {
                                typingIndicatorStyle = null;
                              }
                              customTypingIndicatorConfig = typingIndicatorStyle;
                            } else {
                              tmp5 = closure_9;
                              customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                            }
                            if (null != customTypingIndicatorConfig) {
                              if (null != user) {
                                tmp19 = channel;
                                guildId = channel.getGuildId();
                                guildEmojis = null;
                                if (null != guildId) {
                                  tmp8 = closure_7;
                                  guildEmojis = closure_7.getGuildEmojis(guildId);
                                }
                                obj = { config: null, name: null };
                                tmp10 = closure_0;
                                tmp11 = closure_2;
                                obj2 = closure_0(closure_2[18]);
                                tmp12 = obj2;
                                tmp13 = customTypingIndicatorConfig;
                                tmp14 = tmp19;
                                tmp15 = tmp;
                                tmp16 = guildEmojis;
                                obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                                  customTypingIndicatorConfig,
                                  tmp19,
                                  tmp,
                                  guildEmojis,
                                );
                                tmp17 = closure_1;
                                obj3 = closure_1(closure_2[19]);
                                obj.name = obj3.getName(guildId, tmp19.id, user);
                                return obj;
                              }
                            }
                            return { config: null, name: null };
                          }
                        }
                        return { config: null, name: null };
                      }
                    }
                    cResult[22] = channel.type;
                    cResult[23] = style_owner_user_id;
                    cResult[24] = stateFromStoresObject;
                    cResult[25] = Z;
                  }
                }
                class M {
                  constructor() {
                    if (closure_7) {
                      tmp = closure_1;
                      tmp2 = closure_2;
                      obj = closure_1(closure_2[20]);
                      tmp3 = AnalyticEvents;
                      obj1 = { channel_id: null, channel_type: null };
                      tmp4 = channel;
                      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
                      trackResult = obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj1);
                    }
                    return;
                  }
                }
                const items3 = [null != stateFromStoresObject.config, ,];
                ({ id: arr4[1], type: arr4[2] } = channel);
                class O {
                  constructor() {
                    tmp = closure_5;
                    if (null != closure_5) {
                      tmp18 = canView;
                      if (canView) {
                        tmp2 = closure_10;
                        user = closure_10.getUser(tmp);
                        tmp4 = closure_4;
                        if (closure_4) {
                          typingIndicatorStyle = undefined;
                          if (user != null) {
                            typingIndicatorStyle = user.typingIndicatorStyle;
                          }
                          if (typingIndicatorStyle == null) {
                            typingIndicatorStyle = null;
                          }
                          customTypingIndicatorConfig = typingIndicatorStyle;
                        } else {
                          tmp5 = closure_9;
                          customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                        }
                        if (null != customTypingIndicatorConfig) {
                          if (null != user) {
                            tmp19 = channel;
                            guildId = channel.getGuildId();
                            guildEmojis = null;
                            if (null != guildId) {
                              tmp8 = closure_7;
                              guildEmojis = closure_7.getGuildEmojis(guildId);
                            }
                            obj = { config: null, name: null };
                            tmp10 = closure_0;
                            tmp11 = closure_2;
                            obj2 = closure_0(closure_2[18]);
                            tmp12 = obj2;
                            tmp13 = customTypingIndicatorConfig;
                            tmp14 = tmp19;
                            tmp15 = tmp;
                            tmp16 = guildEmojis;
                            obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                              customTypingIndicatorConfig,
                              tmp19,
                              tmp,
                              guildEmojis,
                            );
                            tmp17 = closure_1;
                            obj3 = closure_1(closure_2[19]);
                            obj.name = obj3.getName(guildId, tmp19.id, user);
                            return obj;
                          }
                        }
                        return { config: null, name: null };
                      }
                    }
                    return { config: null, name: null };
                  }
                }
                ({ id: tmp3[15], type: tmp3[16] } = channel);
                cResult[17] = null != stateFromStoresObject.config;
                cResult[18] = items3;
                cResult[19] = M;
                tmp23 = M;
                tmp22 = items3;
                const tmpResult5 = tmp(tmp2[13]);
              }
            }
          }
          class O {
            constructor() {
              tmp = closure_5;
              if (null != closure_5) {
                tmp18 = canView;
                if (canView) {
                  tmp2 = closure_10;
                  user = closure_10.getUser(tmp);
                  tmp4 = closure_4;
                  if (closure_4) {
                    typingIndicatorStyle = undefined;
                    if (user != null) {
                      typingIndicatorStyle = user.typingIndicatorStyle;
                    }
                    if (typingIndicatorStyle == null) {
                      typingIndicatorStyle = null;
                    }
                    customTypingIndicatorConfig = typingIndicatorStyle;
                  } else {
                    tmp5 = closure_9;
                    customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                  }
                  if (null != customTypingIndicatorConfig) {
                    if (null != user) {
                      tmp19 = channel;
                      guildId = channel.getGuildId();
                      guildEmojis = null;
                      if (null != guildId) {
                        tmp8 = closure_7;
                        guildEmojis = closure_7.getGuildEmojis(guildId);
                      }
                      obj = { config: null, name: null };
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj2 = closure_0(closure_2[18]);
                      tmp12 = obj2;
                      tmp13 = customTypingIndicatorConfig;
                      tmp14 = tmp19;
                      tmp15 = tmp;
                      tmp16 = guildEmojis;
                      obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                        customTypingIndicatorConfig,
                        tmp19,
                        tmp,
                        guildEmojis,
                      );
                      tmp17 = closure_1;
                      obj3 = closure_1(closure_2[19]);
                      obj.name = obj3.getName(guildId, tmp19.id, user);
                      return obj;
                    }
                  }
                  return { config: null, name: null };
                }
              }
              return { config: null, name: null };
            }
          }
          const items4 = [, canView, stateFromStores, channel];
          cResult[9] = channel;
          cResult[10] = canView;
          cResult[11] = stateFromStores;
          cResult[12] = style_owner_user_id;
          cResult[13] = O;
          cResult[14] = items4;
          tmp19 = items4;
          tmp18 = O;
        }
      }
      let obj3 = { channelId: channel.id, guildId: tmp9, typingUserIds };
      cResult[4] = channel.id;
      cResult[5] = tmp9;
      cResult[6] = typingUserIds;
      cResult[7] = obj3;
      tmp11 = obj3;
      const tmpResult = channel(cleanUp[13]);
    }
  : function TypingIndicatorInner(channel) {
      channel = channel.channel;
      ({ typingUserIds, transitionState } = channel);
      const cleanUp = channel.cleanUp;
      let stateFromStoresObject;
      closure_7 = undefined;
      let analyticsLocations;
      let sharedValue;
      let sharedValue1;
      let customTypingIndicatorConfig = channel(cleanUp[16]).useCustomTypingIndicatorConfig("TypingIndicatorInner");
      const canView = customTypingIndicatorConfig.canView;
      let obj = channel(cleanUp[16]);
      let items = [stateFromStoresObject];
      const stateFromStores = channel(cleanUp[13]).useStateFromStores(items, () =>
        stateFromStoresObject.get("preview_own_typing_indicator"),
      );
      let obj3 = { channelId: channel.id, guildId: null, typingUserIds: null };
      let obj2 = channel(cleanUp[13]);
      obj3.guildId = channel.getGuildId();
      obj3.typingUserIds = typingUserIds;
      const tmp6Result = transitionState(cleanUp[17])(obj3);
      style_owner_user_id = null;
      if (1 === typingUserIds.length) {
        style_owner_user_id = typingUserIds[0];
      }
      const tmp6 = transitionState(cleanUp[17]);
      const items1 = [sharedValue, sharedValue1, closure_7];
      const items2 = [style_owner_user_id, canView, stateFromStores, channel];
      stateFromStoresObject = channel(cleanUp[13]).useStateFromStoresObject(
        items1,
        () => {
          if (null != first) {
            if (canView) {
              const user = UserStore.getUser(first);
              if (stateFromStores) {
                let typingIndicatorStyle;
                if (user != null) {
                  typingIndicatorStyle = user.typingIndicatorStyle;
                }
                if (typingIndicatorStyle == null) {
                  typingIndicatorStyle = null;
                }
                let customTypingIndicatorConfig = typingIndicatorStyle;
              } else {
                customTypingIndicatorConfig = TypingStore.getCustomTypingIndicatorConfig(first);
              }
              if (null != customTypingIndicatorConfig) {
                if (null != user) {
                  const guildId = channel.getGuildId();
                  let guildEmojis = null;
                  if (null != guildId) {
                    guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
                  }
                  const obj = { config: null, name: null };
                  const obj2 = CustomTypingIndicatorUtils;
                  obj.config = obj2.getViewableCustomTypingIndicatorConfig(
                    customTypingIndicatorConfig,
                    channel,
                    first,
                    guildEmojis,
                  );
                  obj.name = NicknameUtilsDefault.getName(guildId, channel.id, user);
                  return obj;
                }
              }
              return { config: null, name: null };
            }
          }
          return { config: null, name: null };
        },
        items2,
      );
      closure_7 = tmp10;
      const items3 = [null != stateFromStoresObject.config, ,];
      ({ id: arr4[1], type: arr4[2] } = channel);
      const effect = canView.useEffect(() => {
        if (closure_7) {
          ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
          AnalyticsUtilsDefault.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, {
            channel_id: null,
            channel_type: null,
          });
          const obj3 = { channel_id: null, channel_type: null };
        }
      }, items3);
      const tmpResult = channel(cleanUp[13]);
      analyticsLocations = transitionState(cleanUp[21])(
        transitionState(tmp2[22]).CHAT_TYPING_INDICATOR,
      ).analyticsLocations;
      const items4 = [stateFromStoresObject, style_owner_user_id, , ,];
      ({ id: arr5[2], type: arr5[3] } = channel);
      items4[4] = analyticsLocations;
      const callback = canView.useCallback(() => {
        const config = stateFromStoresObject.config;
        let tmp = null != config;
        if (tmp) {
          tmp = null != style_owner_user_id;
        }
        if (tmp) {
          const obj5 = { channel_id: null, channel_type: null, style_owner_user_id: null };
          ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
          obj5.style_owner_user_id = style_owner_user_id;
          const obj = AnalyticsUtilsDefault;
          const merged = Object.assign(CustomTypingIndicatorAnalytics.getTypingIndicatorStyleAnalytics(config));
          obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED, obj5);
        }
        const result =
          openCustomTypingIndicatorAnnounceActionSheet.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
      }, items4);
      const tmp5Result = transitionState(cleanUp[21]);
      sharedValue = channel(cleanUp[25]).useSharedValue(undefined);
      const items5 = [sharedValue];
      const callback1 = canView.useCallback((nativeEvent) => {
        const result = sharedValue.set(nativeEvent.nativeEvent.layout);
      }, items5);
      const tmpResult6 = channel(cleanUp[25]);
      const tmp16 = closure_16(
        channel(cleanUp[26]).useToken(
          transitionState(cleanUp[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
        ),
      );
      const tmpResult7 = channel(cleanUp[26]);
      sharedValue1 = channel(cleanUp[25]).useSharedValue(0);
      const items6 = [cleanUp, transitionState, sharedValue1];
      const effect1 = canView.useEffect(() => {
        if (transitionState === native.TransitionStates.YEETED) {
          const result = sharedValue1.set(0);
          cleanUp();
        }
      }, items6);
      const tmpResult8 = channel(cleanUp[25]);
      const fn = function b() {
        return sharedValue.get();
      };
      fn.__closure = { typingIndicatorLayout: sharedValue };
      fn.__workletHash = 13600672167329;
      fn.__initData = __initData;
      class V {
        constructor(arg0, arg1) {
          tmp = channel !== arg1;
          if (tmp) {
            tmp2 = null;
            tmp = null != channel;
          }
          if (tmp) {
            y = channel.y;
            num = 2;
            height = channel.height;
            toFixedResult = y.toFixed(2);
            tmp = toFixedResult === height.toFixed(2);
          }
          if (tmp) {
            tmp4 = closure_10;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = closure_0(closure_2[28]);
            tmp7 = -channel.height;
            str = "respect-motion-settings";
            result = closure_10.set(
              obj.withSpring(tmp7, closure_0(closure_2[29]).springStandard, "respect-motion-settings"),
            );
          }
          return;
        }
      }
      const tmpResult9 = channel(cleanUp[25]);
      V.__closure = {
        translateYValue: sharedValue1,
        withSpring: channel(cleanUp[28]).withSpring,
        springStandard: channel(cleanUp[29]).springStandard,
      };
      V.__workletHash = 16463416523660;
      V.__initData = __initData2;
      const animatedReaction = tmpResult9.useAnimatedReaction(fn, V);
      let obj4 = {
        translateYValue: sharedValue1,
        withSpring: channel(cleanUp[28]).withSpring,
        springStandard: channel(cleanUp[29]).springStandard,
      };
      class M {
        constructor() {
          value = closure_9.get();
          obj = closure_10;
          if (0 === closure_10.get()) {
            num = 0;
          } else {
            tmp2 = transitionState;
            tmp3 = closure_0;
            tmp4 = closure_2;
            num = 1;
          }
          obj1 = { opacity: num, top: null, transform: null };
          height = undefined;
          if (value != null) {
            height = value.height;
          }
          obj1.top = height;
          obj4 = { translateY: obj.get() };
          items = [];
          items[0] = obj4;
          obj1.transform = items;
          return obj1;
        }
      }
      const tmpResult10 = channel(cleanUp[25]);
      M.__closure = {
        typingIndicatorLayout: sharedValue,
        translateYValue: sharedValue1,
        transitionState,
        TransitionStates: channel(cleanUp[27]).TransitionStates,
      };
      M.__workletHash = 12928775581926;
      M.__initData = __initData3;
      const animatedStyle = tmpResult10.useAnimatedStyle(M);
      const obj6 = { style: null, onLayout: callback1, children: null };
      const items7 = [tmp16.typingWrapper, animatedStyle];
      obj6.style = items7;
      const obj7 = { style: tmp16.wrapperHoriz, children: null };
      const obj8 = { style: tmp16.horiz, children: null };
      if (null != stateFromStoresObject.config) {
        const obj9 = { config: null, username: null, onPress: null };
        ({ config: obj17.config, name: obj17.username } = stateFromStoresObject);
        let tmp28;
        if (customTypingIndicatorConfig.canSet) {
          tmp28 = callback;
        }
        obj9.onPress = tmp28;
        let tmp22Result = closure_12(transitionState(tmp2[30]), obj9);
        const tmp5Result2 = transitionState(tmp2[30]);
      } else {
        let tmp21Result3 = null;
        if (null != tmp6Result) {
          tmp21Result3 = closure_12(tmp(tmp2[31]).Ellipsis, {});
        }
        const obj10 = { children: null };
        const items8 = [tmp21Result3];
        const obj11 = {
          style: tmp16.text,
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          includeFontPadding: true,
          ellipsizeMode: "tail",
          children: tmp6Result,
        };
        items8[1] = closure_12(tmp(tmp2[32]).Text, obj11);
        obj10.children = items8;
        tmp22Result = closure_14(closure_13, obj10);
      }
      obj8.children = tmp22Result;
      const items9 = [closure_12(stateFromStores, obj8)];
      let tmp21Result4 = null;
      if (channel.rateLimitPerUser > 0) {
        const obj12 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
        tmp21Result4 = closure_12(transitionState(tmp2[33]), obj12);
      }
      items9[1] = tmp21Result4;
      obj7.children = items9;
      obj6.children = closure_14(stateFromStores, obj7);
      return closure_12(transitionState(cleanUp[25]).View, obj6);
    };
ReactCompilerGating = fn(558);
function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  let tmp = channel.rateLimitPerUser > 0;
  if (!tmp) {
    tmp = typingUserIdsForDisplay.length > 0;
  }
  if (tmp) {
    tmp = !arg2;
  }
  return tmp;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function TypingIndicator(channel) {
        const cResult = c.c(6);
        channel = channel.channel;
        const tmp4 = style_owner_user_id(channel.screenIndex);
        const arr = closure_15(channel.id, 4);
        if (cResult[0] === channel) {
          if (cResult[1] === tmp4) {
            if (cResult[2] === arr) {
              let tmp5 = cResult[3];
            }
            if (cResult[4] !== tmp5) {
              const obj2 = { item: tmp5, renderItem: renderTypingIndicator };
              const tmp11 = __initData(native.TransitionItem, obj2);
              cResult[4] = tmp5;
              cResult[5] = tmp11;
              let tmp8 = tmp11;
            } else {
              tmp8 = cResult[5];
            }
            return tmp8;
          }
        }
        let tmp7;
        if (tmp6) {
          const obj3 = { channel, typingUserIds: arr };
          tmp7 = obj3;
        }
        cResult[0] = channel;
        cResult[1] = tmp4;
        cResult[2] = arr;
        cResult[3] = tmp7;
        tmp5 = tmp7;
        tmp6 = (channel.rateLimitPerUser > 0 || arr.length > 0) && !tmp4;
      }
    : function TypingIndicator(channel) {
        channel = channel.channel;
        const tmp = style_owner_user_id(channel.screenIndex);
        closure_1 = tmp;
        const tmp2 = closure_15(channel.id, 4);
        const typingUserIds = tmp2;
        const items = [channel, tmp2, tmp];
        const memo = noop.useMemo(() => {
          let tmp3 = channel.rateLimitPerUser > 0;
          if (!tmp3) {
            tmp3 = typingUserIds.length > 0;
          }
          if (tmp3) {
            tmp3 = !closure_1;
          }
          let tmp4;
          if (tmp3) {
            const obj = { channel, typingUserIds };
            tmp4 = obj;
          }
          return tmp4;
        }, items);
        return __initData(native.TransitionItem, { item: memo, renderItem: renderTypingIndicator });
      },
);
export { hasTypingIndicatorContent };
export const useTypingUserIdsForDisplay = tmp3;
