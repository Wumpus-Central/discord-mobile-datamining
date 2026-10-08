// === Module 11957: ChatInputActionButtonApps ===

// Module 11957 (ChatInputActionButtonApps)
import setAccessibilityFocus from "setAccessibilityFocus" /* 5369 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 11803 */;
import AppLauncherOnboardingChatInputButtonAnimation from "AppLauncherOnboardingChatInputButtonAnimation" /* 11958 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ChatInputActionType = fn(11652).ChatInputActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputActionButtonApps(onPress) {
  const cResult = channel(ref[5]).c(37);
  ({ accessible, active, disabled, styleButton, styleActive, styleActiveIcon, channel } = onPress);
  onPress = onPress.onPress;
  ref = canShowBotsBanner.useRef(null);
  if (cResult[0] !== channel.id) {
    let obj3 = { channelId: channel.id };
    cResult[0] = channel.id;
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = onPress(ref[6])(tmp5);
  ({ canShowOnboarding, canShowBotsBanner } = tmp7);
  const canShowAppsOrActivitiesBanner = tmp7.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp7.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp7.fromTriggeredOnboarding;
  }
  ref = canShowBotsBanner.useRef(-1);
  if (cResult[2] === canShowOnboarding) {
    if (cResult[3] === canShowAppsOrActivitiesBanner) {
      if (cResult[4] === canShowBotsBanner) {
        if (cResult[5] === channel.guild_id) {
          if (cResult[6] === channel.id) {
            if (cResult[7] === willShowGlobalSearchOnboarding) {
              let tmp8 = cResult[8];
            }
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            if (cResult[9] === canShowOnboarding) {
              if (cResult[10] === canShowAppsOrActivitiesBanner) {
                if (cResult[11] === canShowBotsBanner) {
                  if (cResult[12] === channel.id) {
                    if (cResult[13] === guild_id) {
                      if (cResult[14] === willShowGlobalSearchOnboarding) {
                        let tmp10 = cResult[15];
                      }
                      const effect = canShowBotsBanner.useEffect(tmp8, tmp10);
                      if (cResult[16] === active) {
                        if (cResult[17] === canShowOnboarding) {
                          if (cResult[20] !== onPress) {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                            cResult[20] = onPress;
                            cResult[21] = G;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                          }
                          const _Symbol = Symbol;
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                            const stringResult = obj5.string(channel(tmp2[10]).t.rugBPp);
                            cResult[22] = stringResult;
                            const tmp16 = stringResult;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                          }
                          if (cResult[23] !== active) {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                            tmp19[0] = active;
                            cResult[23] = active;
                            cResult[24] = tmp19;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                          }
                          if (cResult[25] === accessible) {
                            class G {
                              constructor(arg0) {
                                clearTimeoutResult = clearTimeout(closure_7.current);
                                tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                                obj = closure_0(closure_2[9]);
                                obj1 = { ref: closure_2 };
                                result = obj.setAccessibilityFocus(obj1);
                                return;
                              }
                            }
                          }
                          let obj4 = { ref, accessible, style: styleButton, disabled, active, activeIconStyle: styleActiveIcon, activeStyle: styleActive, onPress: G, IconComponent: channel(tmp2[12]).AppLauncherButtonIcon, accessibilityLabel: tmp16, accessibilityState: tmp19 };
                          const tmp23 = canShowOnboarding(tmp6(tmp2[11]), obj4);
                          cResult[25] = accessible;
                          cResult[26] = active;
                          cResult[27] = disabled;
                          cResult[28] = styleActive;
                          cResult[29] = styleActiveIcon;
                          cResult[30] = styleButton;
                          cResult[31] = G;
                          cResult[32] = tmp19;
                          cResult[33] = tmp23;
                          const tmp6Result = tmp6(tmp2[11]);
                        }
                      }
                      let tmp13 = null;
                      if (canShowOnboarding) {
                        class G {
                          constructor(arg0) {
                            clearTimeoutResult = clearTimeout(closure_7.current);
                            tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                            obj = closure_0(closure_2[9]);
                            obj1 = { ref: closure_2 };
                            result = obj.setAccessibilityFocus(obj1);
                            return;
                          }
                        }
                        if (!active) {
                          class G {
                            constructor(arg0) {
                              clearTimeoutResult = clearTimeout(closure_7.current);
                              tmp2 = onPress(onPress, ChatInputActionType.APPS, closure_2);
                              obj = closure_0(closure_2[9]);
                              obj1 = { ref: closure_2 };
                              result = obj.setAccessibilityFocus(obj1);
                              return;
                            }
                          }
                          let obj6 = { channelId: channel.id };
                          tmp13 = canShowOnboarding(channel(tmp2[8]).AppLauncherOnboardingChatInputButtonAnimation, obj6);
                        }
                      }
                      cResult[16] = active;
                      cResult[17] = canShowOnboarding;
                      cResult[18] = channel.id;
                      cResult[19] = tmp13;
                    }
                  }
                }
              }
            }
            const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, guild_id, channel.id, willShowGlobalSearchOnboarding];
            cResult[9] = canShowOnboarding;
            cResult[10] = canShowAppsOrActivitiesBanner;
            cResult[11] = canShowBotsBanner;
            cResult[12] = channel.id;
            cResult[13] = guild_id;
            cResult[14] = willShowGlobalSearchOnboarding;
            cResult[15] = items;
            tmp10 = items;
          }
        }
      }
    }
  }
  const fn = function _() {
    if (canShowOnboarding) {
      if (canShowBotsBanner) {
        const obj2 = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: null };
        const _Date2 = Date;
        obj2.timeMs = Date.now();
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj2.guildId = guild_id;
        obj2.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj2);
      } else if (canShowAppsOrActivitiesBanner) {
        const obj4 = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding: null };
        const _Date = Date;
        obj4.timeMs = Date.now();
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        obj4.guildId = guild_id1;
        obj4.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result1 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj4);
      }
      if (willShowGlobalSearchOnboarding) {
        const obj6 = { channelId: channel.id, timeMs: null, guildId: null, canShowAppsOrActivitiesBanner: null, canShowBotsBanner: null, willShowGlobalSearchOnboarding: true };
        const _Date3 = Date;
        obj6.timeMs = Date.now();
        let guild_id2;
        if (channel != null) {
          guild_id2 = channel.guild_id;
        }
        obj6.guildId = guild_id2;
        obj6.canShowAppsOrActivitiesBanner = canShowAppsOrActivitiesBanner;
        obj6.canShowBotsBanner = canShowBotsBanner;
        const result2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj6);
      }
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        channel(ref[7]).setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  };
  cResult[2] = canShowOnboarding;
  cResult[3] = canShowAppsOrActivitiesBanner;
  cResult[4] = canShowBotsBanner;
  cResult[5] = channel.guild_id;
  cResult[6] = channel.id;
  cResult[7] = willShowGlobalSearchOnboarding;
  cResult[8] = fn;
  tmp8 = fn;
  let obj = channel(ref[5]);
  tmp6 = onPress;
}) : (function ChatInputActionButtonApps(onPress) {
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowBotsBanner = undefined;
  canShowOnboarding = undefined;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  let ref = canShowBotsBanner.useRef(null);
  const tmp4 = onPress(ref[6])({ channelId: channel.id });
  ({ canShowOnboarding, canShowBotsBanner } = tmp4);
  const canShowAppsOrActivitiesBanner = tmp4.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp4.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp4.fromTriggeredOnboarding;
  }
  ref = obj.useRef(-1);
  const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, , , ];
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  items[3] = guild_id;
  items[4] = channel.id;
  items[5] = willShowGlobalSearchOnboarding;
  const effect = obj.useEffect(() => {
    if (canShowOnboarding) {
      if (canShowBotsBanner) {
        const obj2 = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: null };
        const _Date2 = Date;
        obj2.timeMs = Date.now();
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj2.guildId = guild_id;
        obj2.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj2);
      } else if (canShowAppsOrActivitiesBanner) {
        const obj4 = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding: null };
        const _Date = Date;
        obj4.timeMs = Date.now();
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        obj4.guildId = guild_id1;
        obj4.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result1 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj4);
      }
      if (willShowGlobalSearchOnboarding) {
        const obj6 = { channelId: channel.id, timeMs: null, guildId: null, canShowAppsOrActivitiesBanner: null, canShowBotsBanner: null, willShowGlobalSearchOnboarding: true };
        const _Date3 = Date;
        obj6.timeMs = Date.now();
        let guild_id2;
        if (channel != null) {
          guild_id2 = channel.guild_id;
        }
        obj6.guildId = guild_id2;
        obj6.canShowAppsOrActivitiesBanner = canShowAppsOrActivitiesBanner;
        obj6.canShowBotsBanner = canShowBotsBanner;
        const result2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj6);
      }
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        channel(ref[7]).setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  let tmp9 = null;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      let obj3 = { channelId: channel.id };
      tmp9 = canShowOnboarding(channel(tmp3[8]).AppLauncherOnboardingChatInputButtonAnimation, obj3);
    }
  }
  let obj4 = { children: null };
  const items1 = [tmp9, ];
  let obj5 = {
    ref,
    accessible,
    style: styleButton,
    disabled,
    active,
    activeIconStyle: styleActiveIcon,
    activeStyle: styleActive,
    onPress(arg0) {
      clearTimeout(ref.current);
      onPress(arg0, ChatInputActionType.APPS, ref);
      const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
    },
    IconComponent: channel(ref[12]).AppLauncherButtonIcon,
    accessibilityLabel: null,
    accessibilityState: null
  };
  const intl = channel(tmp3[10]).intl;
  obj5.accessibilityLabel = intl.string(channel(ref[10]).t.rugBPp);
  obj5.accessibilityState = { expanded: active };
  items1[1] = canShowOnboarding(onPress(ref[11]), obj5);
  obj4.children = items1;
  return ref(canShowAppsOrActivitiesBanner, obj4);
}));