// discord_app/modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import useIsAppDMDefault from "../../../app_dms/useIsAppDM.tsx";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../actions/native/PushNotificationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import NotificationPermissionConstants from "../../../nuf/native/components/notification/NotificationPermissionConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channel, dependencyMap, importDefault, promptType;

let c10;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let tmp9;
let unpackModuleId;
const PostReactionPermissionNudgeExperimentDefault = tmp9(12062);
({ useCallback: closure_4, useEffect: hasOwnProperty } = react);
const View = react_native.View;
const PermissionPromptType = PushNotificationPermissionStore.PermissionPromptType;
({ AnalyticEvents: c10, NOOP: unpackModuleId } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({
  EventActionLocation: map1,
  EventActionType: closure_14,
  NotificationNudgeAnalyticsAction: closure_15,
  NotificationNudgeSurface: closure_16,
} = NotificationPermissionConstants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles(() => {
  let obj3;
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
    containerRefreshShadow: obj3,
    iconContainer: { backgroundColor: "transparent", borderRadius: nativeDefault.radii.round },
    contentContainer: { flex: 1 },
    ctaButton: { alignSelf: "flex-start" },
  };
  ({
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
  });
  obj3 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
  ({ backgroundColor: "transparent", borderRadius: nativeDefault.radii.round });
  return obj;
});
let c20 = 604800000;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (promptType) => {
      let body;
      let intl;
      let items1;
      let items2;
      let onDismiss;
      let surface;
      let tmp5;
      let tmp6;
      let obj = promptType(surface[13]);
      const cResult = obj.c(35);
      promptType = promptType.promptType;
      const _location = promptType.location;
      surface = promptType.surface;
      ({ body, onDismiss } = promptType);
      const tmp4 = closure_19();
      if (cResult[0] !== surface) {
        const fn = function o() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { action: constants3.IMPRESSION, prompt_type: surface };
          obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
        };
        const items = [surface];
        cResult[0] = surface;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      closure_5(tmp5, tmp6);
      if (cResult[3] === _location) {
        let tmp8;
        if (cResult[4] === surface) {
          tmp8 = cResult[5];
        }
        if (cResult[6] === onDismiss) {
          if (cResult[7] === promptType) {
            let tmp9;
            if (cResult[8] === surface) {
              tmp9 = cResult[9];
            }
            if (cResult[10] === tmp4.container) {
              let tmp10;
              let tmp12;
              let tmp16;
              let tmp20;
              let tmp23;
              if (cResult[11] === tmp4.containerRefreshShadow) {
                tmp10 = cResult[12];
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { size: "sm", color: _location(surface[11]).colors.ICON_STRONG };
                const BellSlashIcon = tmp(tmp2[17]).BellSlashIcon;
                const tmp15 = closure_17(BellSlashIcon, obj2);
                cResult[13] = tmp15;
                tmp12 = tmp15;
              } else {
                tmp12 = cResult[13];
              }
              if (cResult[14] !== tmp4.iconContainer) {
                let obj3 = { style: tmp4.iconContainer, children: tmp12 };
                const tmp19 = closure_17(View, obj3);
                cResult[14] = tmp4.iconContainer;
                cResult[15] = tmp19;
                tmp16 = tmp19;
              } else {
                tmp16 = cResult[15];
              }
              if (cResult[16] !== body) {
                const obj4 = { variant: "text-sm/medium", color: "text-default", children: body };
                const tmp22 = closure_17(promptType(surface[18]).Text, obj4);
                cResult[16] = body;
                cResult[17] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[17];
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  variant: "text-xs/medium",
                  color: "text-brand",
                  children: intl.string(promptType(surface[19]).t["+7MDbQ"]),
                };
                const Text = tmp(tmp2[18]).Text;
                intl = tmp(tmp2[19]).intl;
                const tmp25 = closure_17(Text, obj5);
                cResult[18] = tmp25;
                tmp23 = tmp25;
              } else {
                tmp23 = cResult[18];
              }
              if (cResult[19] === tmp8) {
                let tmp26;
                if (cResult[20] === tmp4.ctaButton) {
                  tmp26 = cResult[21];
                }
                if (cResult[22] === tmp4.contentContainer) {
                  if (cResult[23] === tmp26) {
                    let tmp29;
                    let tmp34;
                    let tmp33;
                    let tmp38;
                    if (cResult[24] === tmp20) {
                      tmp29 = cResult[25];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(tmp2[19]).intl;
                      const stringResult = intl2.string(promptType(surface[19]).t.WAI6xu);
                      const tmp37 = closure_17(promptType(surface[21]).XSmallIcon, {
                        size: "sm",
                        color: "icon-subtle",
                      });
                      cResult[26] = stringResult;
                      cResult[27] = tmp37;
                      tmp34 = tmp37;
                      tmp33 = stringResult;
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
                      const tmp40 = closure_17(promptType(surface[20]).PressableHighlight, obj6);
                      cResult[28] = tmp9;
                      cResult[29] = tmp40;
                      tmp38 = tmp40;
                    } else {
                      tmp38 = cResult[29];
                    }
                    if (cResult[30] === tmp29) {
                      if (cResult[31] === tmp38) {
                        if (cResult[32] === tmp10) {
                          let tmp41;
                          if (cResult[33] === tmp16) {
                            tmp41 = cResult[34];
                          }
                          return tmp41;
                        }
                      }
                    }
                    const obj7 = { style: tmp10, children: items1 };
                    items1 = [tmp16, tmp29, tmp38];
                    const tmp44 = closure_18(View, obj7);
                    cResult[30] = tmp29;
                    cResult[31] = tmp38;
                    cResult[32] = tmp10;
                    cResult[33] = tmp16;
                    cResult[34] = tmp44;
                    tmp41 = tmp44;
                  }
                }
                const obj8 = { style: tmp4.contentContainer, children: items2 };
                items2 = [tmp20, tmp26];
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
              const tmp28 = closure_17(promptType(surface[20]).PressableOpacity, obj9);
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
        const fn3 = function h() {
          const obj = PushNotificationActionCreators;
          const result = obj.setPushPermissionReactivationSeen(promptType);
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { action: constants3.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
          obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
          onDismiss();
        };
        cResult[6] = onDismiss;
        cResult[7] = promptType;
        cResult[8] = surface;
        cResult[9] = fn3;
        tmp9 = fn3;
      }
      const fn2 = function c() {
        const obj = NotificationPermissionUtil;
        const pushNotificationPermission = obj.requestPushNotificationPermission(
          constants2.ALLOW_TO_REQUEST,
          _location,
          unpackModuleId,
        );
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = { action: constants3.ACCEPT, prompt_type: surface };
        obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
      };
      cResult[3] = _location;
      cResult[4] = surface;
      cResult[5] = fn2;
      tmp8 = fn2;
    }
  : (onDismiss) => {
      let BellSlashIcon;
      let Text;
      let intl;
      let intl2;
      let items1;
      let items2;
      let items3;
      let obj3;
      let obj6;
      let surface;
      ({ promptType: require, location: importDefault, surface } = onDismiss);
      onDismiss = onDismiss.onDismiss;
      const body = onDismiss.body;
      const tmp = closure_19();
      const items = [surface];
      closure_5(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action: constants3.IMPRESSION, prompt_type: surface };
        obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
      }, items);
      let obj = { style: items1, children: items2 };
      items1 = [,];
      ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp);
      let obj2 = { style: tmp.iconContainer, children: closure_17(BellSlashIcon, obj3) };
      obj3 = { size: "sm", color: require("native").colors.ICON_STRONG };
      BellSlashIcon = require("BellSlashIcon").BellSlashIcon;
      items2 = [closure_17(View, obj2), ,];
      const obj4 = { style: tmp.contentContainer, children: items3 };
      items3 = [
        closure_17(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-default", children: body }),
      ];
      const obj5 = {
        hitSlop: 8,
        onPress() {
          const obj = NotificationPermissionUtil;
          const pushNotificationPermission = obj.requestPushNotificationPermission(
            constants2.ALLOW_TO_REQUEST,
            importDefault,
            unpackModuleId,
          );
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { action: constants3.ACCEPT, prompt_type: surface };
          obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
        },
        style: tmp.ctaButton,
        accessibilityRole: "button",
        children: closure_17(Text, obj6),
      };
      const PressableOpacity = require("Pressables").PressableOpacity;
      obj6 = { variant: "text-xs/medium", color: "text-brand", children: intl.string(require("intl").t["+7MDbQ"]) };
      Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items3[1] = closure_17(PressableOpacity, obj5);
      items2[1] = closure_18(View, obj4);
      const obj7 = {
        onPress() {
          const obj = PushNotificationActionCreators;
          const result = obj.setPushPermissionReactivationSeen(require);
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { action: constants3.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
          obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
          onDismiss();
        },
        hitSlop: 8,
        accessibilityRole: "button",
        accessibilityLabel: intl2.string(require("intl").t.WAI6xu),
        children: closure_17(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-subtle" }),
      };
      const PressableHighlight = require("Pressables").PressableHighlight;
      intl2 = require("intl").intl;
      items2[2] = closure_17(PressableHighlight, obj7);
      return closure_18(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_1;
      let closure_2;
      let first;
      let tmp13;
      let tmp15;
      let tmp21;
      let tmp22;
      let tmp23;
      let tmp39;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(16);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [JoinedThreadsStore, UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function s() {
          let isMutedResult;
          const guildId = channel.getGuildId();
          if (channel.isThread()) {
            isMutedResult = JoinedThreadsStore.isMuted(channel.id);
          } else {
            isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
          }
          return isMutedResult;
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmp10 = !stateFromStores && !useIsAppDMDefault(channel);
      const tmpResult5 = channel(12054);
      const shouldShowPushNotificationNudgeByPromptType = tmpResult5.useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.CHANNEL_BANNER,
      );
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ChatInputNotificationNudge" };
        cResult[3] = obj2;
        tmp13 = obj2;
      } else {
        tmp13 = cResult[3];
      }
      const tmp9Result = PostReactionPermissionNudgeExperimentDefault;
      const enabled = tmp9Result.useConfig(tmp13).enabled;
      const tmpResult6 = channel(12054);
      const shouldShowPushNotificationNudgeByPromptType1 = tmpResult6.useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.POST_REACTION_BANNER,
      );
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { cooldownDurationMs };
        cResult[4] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[4];
      }
      let prop = null;
      const useSelectedTimeRecurringDismissibleContent = channel(6891).useSelectedTimeRecurringDismissibleContent;
      channel(6891);
      if (tmp10) {
        prop = null;
        if (shouldShowPushNotificationNudgeByPromptType) {
          prop = tmp(2036).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
        }
      }
      [tmp21, tmp22] = useSelectedTimeRecurringDismissibleContent(prop, tmp15, undefined, true);
      importDefault = tmp22;
      _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, tmp15, undefined, true), 2);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { cooldownDurationMs };
        cResult[5] = obj4;
        tmp23 = obj4;
      } else {
        tmp23 = cResult[5];
      }
      let prop1 = null;
      const useSelectedTimeRecurringDismissibleContent2 = channel(6891).useSelectedTimeRecurringDismissibleContent;
      channel(6891);
      if (tmp10) {
        prop1 = null;
        if (enabled) {
          prop1 = null;
          if (shouldShowPushNotificationNudgeByPromptType1) {
            prop1 = null;
            if (null == tmp21) {
              prop1 = tmp(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
            }
          }
        }
      }
      const tmp19Result = _slicedToArray(useSelectedTimeRecurringDismissibleContent2(prop1, tmp23, undefined, true), 2);
      dependencyMap = tmp29;
      const first1 = tmp19Result[0];
      if (cResult[6] !== tmp22) {
        class U {
          constructor() {
            return tmp22(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[6] = tmp22;
        cResult[7] = U;
      } else {
        class U {
          constructor() {
            return tmp22(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[8] !== tmp19Result[1]) {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[8] = tmp19Result[1];
        cResult[9] = F;
      } else {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (tmp21 === channel(2036).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
        let tmp40;
        let tmp42;
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
          const stringResult = obj11.string(channel(1126).t["/6SnPw"]);
          cResult[10] = stringResult;
          tmp40 = stringResult;
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
            promptType: PermissionPromptType.CHANNEL_BANNER,
            location: constants2.CHANNEL_BANNER,
            surface: constants5.CHANNEL_BANNER,
            body: tmp40,
            onDismiss: U,
          };
          const tmp46 = closure_17(closure_21, obj5);
          cResult[11] = U;
          cResult[12] = tmp46;
          tmp42 = tmp46;
        } else {
          class F {
            constructor() {
              return closure_2(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        tmp39 = tmp42;
      } else {
        class F {
          constructor() {
            return closure_2(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (first1 === channel(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
          let tmp32;
          let tmp34;
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
            const stringResult1 = obj9.string(channel(1126).t.VS6ey0);
            cResult[13] = stringResult1;
            tmp32 = stringResult1;
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
              promptType: PermissionPromptType.POST_REACTION_BANNER,
              location: constants2.POST_REACTION,
              surface: constants5.POST_REACTION_BANNER,
              body: tmp32,
              onDismiss: F,
            };
            const tmp38 = closure_17(closure_21, obj6);
            cResult[14] = F;
            cResult[15] = tmp38;
            tmp34 = tmp38;
          } else {
            class F {
              constructor() {
                return closure_2(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          tmp39 = tmp34;
        }
      }
      return tmp39;
    }
  : (channel) => {
      let _undefined;
      let closure_2;
      let intl;
      let intl2;
      let tmp14;
      let tmp15;
      let tmp27;
      channel = channel.channel;
      importDefault = undefined;
      dependencyMap = undefined;
      const items = [JoinedThreadsStore, UserGuildSettingsStore];
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        let isMutedResult;
        const guildId = channel.getGuildId();
        if (channel.isThread()) {
          isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        } else {
          isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
        }
        return isMutedResult;
      });
      const tmp5 = !stateFromStores && !useIsAppDMDefault(channel);
      const tmpResult = channel(12054);
      const shouldShowPushNotificationNudgeByPromptType = tmpResult.useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.CHANNEL_BANNER,
      );
      const tmp4Result = PostReactionPermissionNudgeExperimentDefault;
      const enabled = tmp4Result.useConfig({ location: "ChatInputNotificationNudge" }).enabled;
      const tmpResult4 = channel(12054);
      const shouldShowPushNotificationNudgeByPromptType1 = tmpResult4.useShouldShowPushNotificationNudgeByPromptType(
        PermissionPromptType.POST_REACTION_BANNER,
      );
      let prop = null;
      const useSelectedTimeRecurringDismissibleContent = channel(6891).useSelectedTimeRecurringDismissibleContent;
      channel(6891);
      if (tmp5) {
        prop = null;
        if (shouldShowPushNotificationNudgeByPromptType) {
          prop = tmp(2036).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
        }
      }
      const obj2 = { cooldownDurationMs };
      [tmp14, tmp15] = useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true);
      importDefault = tmp15;
      _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true), 2);
      let prop1 = null;
      const useSelectedTimeRecurringDismissibleContent2 = channel(6891).useSelectedTimeRecurringDismissibleContent;
      channel(6891);
      if (tmp5) {
        prop1 = null;
        if (enabled) {
          prop1 = null;
          if (shouldShowPushNotificationNudgeByPromptType1) {
            prop1 = null;
            if (null == tmp14) {
              prop1 = tmp(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
            }
          }
        }
      }
      const obj3 = { cooldownDurationMs };
      const tmp12Result = _slicedToArray(useSelectedTimeRecurringDismissibleContent2(prop1, obj3, undefined, true), 2);
      dependencyMap = tmp20;
      const items1 = [tmp15];
      const first = tmp12Result[0];
      const items2 = [tmp12Result[1]];
      const tmp21 = closure_4(() => _undefined(ContentDismissActionType.USER_DISMISS), items1);
      const tmp22 = closure_4(() => closure_2(ContentDismissActionType.USER_DISMISS), items2);
      if (tmp14 === channel(2036).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
        const obj4 = {
          promptType: PermissionPromptType.CHANNEL_BANNER,
          location: constants2.CHANNEL_BANNER,
          surface: constants5.CHANNEL_BANNER,
          body: intl2.string(channel(1126).t["/6SnPw"]),
          onDismiss: tmp21,
        };
        intl2 = tmp(1126).intl;
        tmp27 = closure_17(closure_21, obj4);
      } else {
        tmp27 = null;
        if (first === channel(2036).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
          const obj5 = {
            promptType: PermissionPromptType.POST_REACTION_BANNER,
            location: constants2.POST_REACTION,
            surface: constants5.POST_REACTION_BANNER,
            body: intl.string(channel(1126).t.VS6ey0),
            onDismiss: tmp22,
          };
          intl = tmp(1126).intl;
          tmp27 = closure_17(closure_21, obj5);
        }
      }
      return tmp27;
    };
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default tmp6;
