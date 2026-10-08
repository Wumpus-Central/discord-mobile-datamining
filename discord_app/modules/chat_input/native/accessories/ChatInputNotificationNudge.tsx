// discord_app/modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useIsAppDMDefault from "../../../app_dms/useIsAppDM.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../actions/native/PushNotificationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const PostReactionPermissionNudgeExperimentDefault = tmp9(12151);
require = fn;
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const PermissionPromptType = fn(12140).PermissionPromptType;
const Constants = fn(1085);
({ AnalyticEvents: c10, NOOP: closure_11 } = Constants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const NotificationPermissionConstants = fn(12141);
({
  EventActionLocation: map1,
  EventActionType: closure_14,
  NotificationNudgeAnalyticsAction: closure_15,
  NotificationNudgeSurface: closure_16,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5090);
let closure_19 = createStyles.createStyles(() => {
  const obj = {
    container: {
      display: "flex",
      flexDirection: "row",
      padding: nativeDefault.space.PX_12,
      backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
      alignItems: "center",
      borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH,
      borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
      borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
      borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
      marginBottom: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM,
      gap: 12,
    },
    containerRefreshShadow: null,
    iconContainer: null,
    contentContainer: null,
    ctaButton: null,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
  obj.containerRefreshShadow = {};
  const obj2 = {
    display: "flex",
    flexDirection: "row",
    padding: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
    alignItems: "center",
    borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH,
    borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
    borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    marginBottom: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM,
    gap: 12,
  };
  const obj3 = {};
  obj.iconContainer = { backgroundColor: "transparent", borderRadius: nativeDefault.radii.round };
  obj.contentContainer = { flex: 1 };
  obj.ctaButton = { alignSelf: "flex-start" };
  return obj;
});
let c20 = 604800000;
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatInputNotificationNudgeImpl(promptType) {
      const cResult = promptType(surface[13]).c(35);
      promptType = promptType.promptType;
      const _location = promptType.location;
      surface = promptType.surface;
      ({ body, onDismiss } = promptType);
      const tmp4 = closure_19();
      if (cResult[0] !== surface) {
        const fn = function o() {
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.IMPRESSION,
            prompt_type: surface,
          });
        };
        const items = [surface];
        cResult[0] = surface;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      closure_5(tmp5, tmp6);
      if (cResult[3] === _location) {
        if (cResult[4] === surface) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] === onDismiss) {
          if (cResult[7] === promptType) {
            if (cResult[8] === surface) {
              let tmp9 = cResult[9];
            }
            if (cResult[10] === tmp4.container) {
              if (cResult[11] === tmp4.containerRefreshShadow) {
                let tmp10 = cResult[12];
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { size: "sm", color: _location(tmp2[11]).colors.ICON_STRONG };
                const tmp15 = closure_17(tmp(tmp2[17]).BellSlashIcon, obj2);
                cResult[13] = tmp15;
                let tmp12 = tmp15;
              } else {
                tmp12 = cResult[13];
              }
              if (cResult[14] !== tmp4.iconContainer) {
                const obj3 = { style: tmp4.iconContainer, children: tmp12 };
                const tmp19 = closure_17(View, obj3);
                cResult[14] = tmp4.iconContainer;
                cResult[15] = tmp19;
                let tmp16 = tmp19;
              } else {
                tmp16 = cResult[15];
              }
              if (cResult[16] !== body) {
                const obj4 = { variant: "text-sm/medium", color: "text-default", children: body };
                const tmp22 = closure_17(tmp(tmp2[18]).Text, obj4);
                cResult[16] = body;
                cResult[17] = tmp22;
                let tmp20 = tmp22;
              } else {
                tmp20 = cResult[17];
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "text-xs/medium", color: "text-brand", children: null };
                const intl = tmp(tmp2[19]).intl;
                obj5.children = intl.string(tmp(tmp2[19]).t["+7MDbQ"]);
                const tmp25 = closure_17(tmp(tmp2[18]).Text, obj5);
                cResult[18] = tmp25;
                let tmp23 = tmp25;
              } else {
                tmp23 = cResult[18];
              }
              if (cResult[19] === tmp8) {
                if (cResult[20] === tmp4.ctaButton) {
                  let tmp26 = cResult[21];
                }
                if (cResult[22] === tmp4.contentContainer) {
                  if (cResult[23] === tmp26) {
                    if (cResult[24] === tmp20) {
                      let tmp29 = cResult[25];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(tmp2[19]).intl;
                      const stringResult = intl2.string(tmp(tmp2[19]).t.WAI6xu);
                      const tmp37 = closure_17(tmp(tmp2[21]).XSmallIcon, { size: "sm", color: "icon-subtle" });
                      cResult[26] = stringResult;
                      cResult[27] = tmp37;
                      let tmp34 = tmp37;
                      let tmp33 = stringResult;
                    } else {
                      tmp33 = cResult[26];
                      tmp34 = cResult[27];
                    }
                    if (cResult[28] !== tmp9) {
                      const obj6 = {
                        onPress: tmp9,
                        hitSlop: 8,
                        accessibilityRole: "button",
                        accessibilityLabel: tmp33,
                        children: tmp34,
                      };
                      const tmp40 = closure_17(tmp(tmp2[20]).PressableHighlight, obj6);
                      cResult[28] = tmp9;
                      cResult[29] = tmp40;
                      let tmp38 = tmp40;
                    } else {
                      tmp38 = cResult[29];
                    }
                    if (cResult[30] === tmp29) {
                      if (cResult[31] === tmp38) {
                        if (cResult[32] === tmp10) {
                          if (cResult[33] === tmp16) {
                            let tmp41 = cResult[34];
                          }
                          return tmp41;
                        }
                      }
                    }
                    const obj7 = { style: tmp10, children: null };
                    const items1 = [tmp16, tmp29, tmp38];
                    obj7.children = items1;
                    const tmp44 = closure_18(View, obj7);
                    cResult[30] = tmp29;
                    cResult[31] = tmp38;
                    cResult[32] = tmp10;
                    cResult[33] = tmp16;
                    cResult[34] = tmp44;
                    tmp41 = tmp44;
                  }
                }
                const obj8 = { style: tmp4.contentContainer, children: null };
                const items2 = [tmp20, tmp26];
                obj8.children = items2;
                const tmp32 = closure_18(View, obj8);
                cResult[22] = tmp4.contentContainer;
                cResult[23] = tmp26;
                cResult[24] = tmp20;
                cResult[25] = tmp32;
                tmp29 = tmp32;
              }
              const obj9 = {
                hitSlop: 8,
                onPress: tmp8,
                style: tmp4.ctaButton,
                accessibilityRole: "button",
                children: tmp23,
              };
              const tmp28 = closure_17(tmp(tmp2[20]).PressableOpacity, obj9);
              cResult[19] = tmp8;
              cResult[20] = tmp4.ctaButton;
              cResult[21] = tmp28;
              tmp26 = tmp28;
            }
            const items3 = [,];
            ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp4);
            cResult[10] = tmp4.container;
            cResult[11] = tmp4.containerRefreshShadow;
            cResult[12] = items3;
            tmp10 = items3;
          }
        }
        function handleDismiss() {
          const result = PushNotificationActionCreators.setPushPermissionReactivationSeen(promptType);
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.DISMISS,
            prompt_type: surface,
            dismiss_logic: "relaxed",
          });
          onDismiss();
        }
        cResult[6] = onDismiss;
        cResult[7] = promptType;
        cResult[8] = surface;
        cResult[9] = handleDismiss;
        tmp9 = handleDismiss;
      }
      function handlePress() {
        const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
          constants3.ALLOW_TO_REQUEST,
          _location,
          closure_2_11,
        );
        AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
          action: constants4.ACCEPT,
          prompt_type: surface,
        });
      }
      cResult[3] = _location;
      cResult[4] = surface;
      cResult[5] = handlePress;
      tmp8 = handlePress;
      let obj = promptType(surface[13]);
    }
  : function ChatInputNotificationNudgeImpl(children) {
      ({ promptType: require, location: importDefault, surface } = children);
      const onDismiss = children.onDismiss;
      const tmp = closure_19();
      const items = [surface];
      closure_5(() => {
        AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
          action: constants4.IMPRESSION,
          prompt_type: surface,
        });
      }, items);
      let obj = { style: null, children: null };
      const items1 = [,];
      ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp);
      obj.style = items1;
      const obj2 = {
        style: tmp.iconContainer,
        children: closure_17(require("BellSlashIcon").BellSlashIcon, {
          size: "sm",
          color: require("native").colors.ICON_STRONG,
        }),
      };
      const items2 = [closure_17(View, obj2), ,];
      const obj4 = { style: tmp.contentContainer, children: null };
      const items3 = [
        closure_17(require("Text/Text").Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: children.body,
        }),
      ];
      const obj5 = {
        hitSlop: 8,
        onPress: function handlePress() {
          const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
            constants3.ALLOW_TO_REQUEST,
            closure_1_1,
            closure_2_11,
          );
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.ACCEPT,
            prompt_type: surface,
          });
        },
        style: tmp.ctaButton,
        accessibilityRole: "button",
        children: null,
      };
      const obj6 = { variant: "text-xs/medium", color: "text-brand", children: null };
      const intl = require("util").intl;
      obj6.children = intl.string(require("util").t["+7MDbQ"]);
      obj5.children = closure_17(require("Text/Text").Text, obj6);
      items3[1] = closure_17(require("Pressables").PressableOpacity, obj5);
      obj4.children = items3;
      items2[1] = closure_18(View, obj4);
      const obj7 = {
        onPress: function handleDismiss() {
          const result = PushNotificationActionCreators.setPushPermissionReactivationSeen(closure_1_0);
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.DISMISS,
            prompt_type: surface,
            dismiss_logic: "relaxed",
          });
          onDismiss();
        },
        hitSlop: 8,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl2 = require("util").intl;
      obj7.accessibilityLabel = intl2.string(require("util").t.WAI6xu);
      obj7.children = closure_17(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-subtle" });
      items2[2] = closure_17(require("Pressables").PressableHighlight, obj7);
      obj.children = items2;
      return closure_18(View, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatInputNotificationNudge(channel) {
      const cResult = channel(576).c(16);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [JoinedThreadsStore, UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function s() {
          const guildId = channel.getGuildId();
          if (channel.isThread()) {
            let isMutedResult = JoinedThreadsStore.isMuted(channel.id);
          } else {
            isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
          }
          return isMutedResult;
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      let tmp10 = !stateFromStores;
      if (!stateFromStores) {
        tmp10 = !useIsAppDMDefault(channel);
      }
      const tmpResult = channel(504);
      let CHANNEL_BANNER = PermissionPromptType;
      const shouldShowPushNotificationNudgeByPromptType = channel(12142).useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.CHANNEL_BANNER,
      );
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ChatInputNotificationNudge" };
        cResult[3] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[3];
      }
      const tmpResult5 = channel(12142);
      const tmp9Result = PostReactionPermissionNudgeExperimentDefault;
      const shouldShowPushNotificationNudgeByPromptType1 = channel(
        12142,
      ).useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER.POST_REACTION_BANNER);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { cooldownDurationMs };
        cResult[4] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[4];
      }
      const tmpResult6 = channel(12142);
      let prop = null;
      if (tmp10) {
        prop = null;
        if (shouldShowPushNotificationNudgeByPromptType) {
          prop = tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
        }
      }
      const tmpResult7 = channel(7090);
      [tmp19, tmp20] = channel(7090).useSelectedTimeRecurringDismissibleContent(prop, tmp14, undefined, true);
      importDefault = tmp20;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { cooldownDurationMs };
        cResult[5] = obj4;
        let tmp21 = obj4;
      } else {
        tmp21 = cResult[5];
      }
      const tmp18 = _slicedToArray(
        channel(7090).useSelectedTimeRecurringDismissibleContent(prop, tmp14, undefined, true),
        2,
      );
      let prop1 = null;
      if (tmp10) {
        prop1 = null;
        if (tmp9Result.useConfig(tmp12).enabled) {
          prop1 = null;
          if (shouldShowPushNotificationNudgeByPromptType1) {
            prop1 = null;
            if (null == tmp19) {
              prop1 = tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
            }
          }
        }
      }
      const tmp17Result = _slicedToArray(
        channel(7090).useSelectedTimeRecurringDismissibleContent(prop1, tmp21, undefined, true),
        2,
      );
      dependencyMap = tmp25;
      if (cResult[6] !== tmp20) {
        class U {
          constructor() {
            return closure_1(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[6] = tmp20;
        cResult[7] = U;
      } else {
        class U {
          constructor() {
            return closure_1(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[8] !== tmp17Result[1]) {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[8] = tmp25;
        cResult[9] = F;
      } else {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (tmp19 === channel(2048).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
          const stringResult = obj13.string(tmp(1126).t["/6SnPw"]);
          cResult[10] = stringResult;
          const tmp36 = stringResult;
        } else {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[11] !== U) {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj5 = {
            promptType: CHANNEL_BANNER.CHANNEL_BANNER,
            location: null,
            surface: null,
            body: null,
            onDismiss: null,
          };
          CHANNEL_BANNER = constants2.CHANNEL_BANNER;
          obj5.location = CHANNEL_BANNER;
          obj5.surface = constants5.CHANNEL_BANNER;
          obj5.body = tmp36;
          obj5.onDismiss = U;
          const tmp42 = closure_17(closure_21, obj5);
          cResult[11] = U;
          cResult[12] = tmp42;
        } else {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
      } else {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (tmp17Result[0] !== tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
        } else {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                return closure_2(ContentDismissActionType.USER_DISMISS);
              }
            }
            const stringResult1 = obj11.string(tmp(1126).t.VS6ey0);
            cResult[13] = stringResult1;
            const tmp28 = stringResult1;
          } else {
            class F {
              constructor() {
                return closure_2(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[14] !== F) {
            class F {
              constructor() {
                return closure_2(ContentDismissActionType.USER_DISMISS);
              }
            }
            const obj6 = {
              promptType: CHANNEL_BANNER.POST_REACTION_BANNER,
              location: constants2.POST_REACTION,
              surface: constants5.POST_REACTION_BANNER,
              body: tmp28,
              onDismiss: F,
            };
            const tmp34 = closure_17(closure_21, obj6);
            cResult[14] = F;
            cResult[15] = tmp34;
          } else {
            class F {
              constructor() {
                return closure_2(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
        }
      }
      const tmpResult8 = channel(7090);
    }
  : function ChatInputNotificationNudge(channel) {
      channel = channel.channel;
      importDefault = undefined;
      dependencyMap = undefined;
      const items = [JoinedThreadsStore, UserGuildSettingsStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => {
        const guildId = channel.getGuildId();
        if (channel.isThread()) {
          let isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        } else {
          isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
        }
        return isMutedResult;
      });
      let tmp5 = !stateFromStores;
      if (!stateFromStores) {
        tmp5 = !useIsAppDMDefault(channel);
      }
      const obj = channel(504);
      const shouldShowPushNotificationNudgeByPromptType = channel(12142).useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.CHANNEL_BANNER,
      );
      const tmpResult = channel(12142);
      const tmp4Result = PostReactionPermissionNudgeExperimentDefault;
      const shouldShowPushNotificationNudgeByPromptType1 = channel(
        12142,
      ).useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
      const tmpResult4 = channel(12142);
      let prop = null;
      if (tmp5) {
        prop = null;
        if (shouldShowPushNotificationNudgeByPromptType) {
          prop = tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
        }
      }
      const obj2 = { cooldownDurationMs };
      const tmpResult5 = channel(7090);
      [tmp13, tmp14] = channel(7090).useSelectedTimeRecurringDismissibleContent(
        prop,
        { cooldownDurationMs },
        undefined,
        true,
      );
      importDefault = tmp14;
      const tmp12 = _slicedToArray(
        channel(7090).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs }, undefined, true),
        2,
      );
      let prop1 = null;
      if (tmp5) {
        prop1 = null;
        if (tmp4Result.useConfig({ location: "ChatInputNotificationNudge" }).enabled) {
          prop1 = null;
          if (shouldShowPushNotificationNudgeByPromptType1) {
            prop1 = null;
            if (null == tmp13) {
              prop1 = tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
            }
          }
        }
      }
      const tmp11Result = _slicedToArray(
        channel(7090).useSelectedTimeRecurringDismissibleContent(prop1, { cooldownDurationMs }, undefined, true),
        2,
      );
      dependencyMap = tmp17;
      const items1 = [tmp14];
      const items2 = [tmp11Result[1]];
      const obj3 = { cooldownDurationMs };
      const tmpResult6 = channel(7090);
      const tmp18 = closure_4(() => _undefined(ContentDismissActionType.USER_DISMISS), items1);
      if (tmp13 === channel(2048).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
        const obj4 = {
          promptType: PermissionPromptType.CHANNEL_BANNER,
          location: constants2.CHANNEL_BANNER,
          surface: constants5.CHANNEL_BANNER,
          body: null,
          onDismiss: null,
        };
        const intl2 = tmp(1126).intl;
        obj4.body = intl2.string(tmp(1126).t["/6SnPw"]);
        obj4.onDismiss = tmp18;
        let tmp24 = closure_17(closure_21, obj4);
      } else {
        tmp24 = null;
        if (tmp11Result[0] === tmp(2048).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
          const obj5 = {
            promptType: PermissionPromptType.POST_REACTION_BANNER,
            location: constants2.POST_REACTION,
            surface: constants5.POST_REACTION_BANNER,
            body: null,
            onDismiss: null,
          };
          const intl = tmp(1126).intl;
          obj5.body = intl.string(tmp(1126).t.VS6ey0);
          obj5.onDismiss = tmp19;
          tmp24 = closure_17(closure_21, obj5);
        }
      }
      return tmp24;
    };
