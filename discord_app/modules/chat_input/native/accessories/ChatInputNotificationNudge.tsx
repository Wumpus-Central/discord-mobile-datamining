// discord_app/modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useIsAppDMDefault from "../../../app_dms/useIsAppDM.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../actions/native/PushNotificationActionCreators.tsx";
import PostReactionPermissionNudgeExperimentDefault from "../../../nuf/native/PostReactionPermissionNudgeExperiment.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
function ChatInputNotificationNudgeImpl(children) {
  ({ promptType: require, location: importDefault, surface } = children);
  const onDismiss = children.onDismiss;
  const tmp = closure_19();
  const items = [surface];
  closure_5(() => {
    const obj = { action: constants4.IMPRESSION, prompt_type: surface };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  let obj = { style: null, children: null };
  const items1 = [,];
  ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp);
  obj.style = items1;
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "sm", color: require("native").colors.ICON_STRONG };
  obj.children = closure_17(require("BellSlashIcon").BellSlashIcon, obj);
  const items2 = [closure_17(View, obj), ,];
  const obj1 = { style: tmp.contentContainer, children: null };
  const items3 = [
    closure_17(require("Text/Text").Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: children.body,
    }),
  ];
  const obj2 = {
    hitSlop: 8,
    onPress() {
      let obj = NotificationPermissionUtil;
      const pushNotificationPermission = obj.requestPushNotificationPermission(
        constants3.ALLOW_TO_REQUEST,
        closure_1_1,
        closure_2_11,
      );
      obj = { action: constants4.ACCEPT, prompt_type: surface };
      AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
    },
    style: tmp.ctaButton,
    accessibilityRole: "button",
    children: null,
  };
  const obj3 = { variant: "text-xs/medium", color: "text-brand", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t["+7MDbQ"]);
  obj2.children = closure_17(require("Text/Text").Text, obj3);
  items3[1] = closure_17(require("Pressables").PressableOpacity, obj2);
  obj1.children = items3;
  items2[1] = closure_18(View, obj1);
  const obj4 = {
    onPress() {
      let obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(closure_1_0);
      obj = { action: constants4.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl2 = require("util").intl;
  obj4.accessibilityLabel = intl2.string(require("util").t.WAI6xu);
  obj4.children = closure_17(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = closure_17(require("Pressables").PressableHighlight, obj4);
  obj.children = items2;
  return closure_18(View, obj);
}
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const PermissionPromptType = fn(12409).PermissionPromptType;
const Constants = fn(1074);
({ AnalyticEvents: c10, NOOP: closure_11 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const NotificationPermissionConstants = fn(12410);
({
  EventActionLocation: map1,
  EventActionType: closure_14,
  NotificationNudgeAnalyticsAction: closure_15,
  NotificationNudgeSurface: closure_16,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4560);
let closure_19 = createStyles.createStyles(() => {
  let obj = {
    container: null,
    containerRefreshShadow: null,
    iconContainer: null,
    contentContainer: null,
    ctaButton: null,
  };
  obj = {
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
  obj.container = obj;
  obj = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
  obj.containerRefreshShadow = obj;
  obj.iconContainer = { backgroundColor: "transparent", borderRadius: nativeDefault.radii.round };
  obj.contentContainer = { flex: 1 };
  obj.ctaButton = { alignSelf: "flex-start" };
  return obj;
});
let c20 = 604800000;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  channel = channel.channel;
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = channel(504);
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      let isMutedResult = JoinedThreadsStore.isMuted(tmp.id);
    } else {
      isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, tmp.id);
    }
    return isMutedResult;
  });
  let tmp5 = !stateFromStores;
  if (!stateFromStores) {
    tmp5 = !useIsAppDMDefault(channel);
  }
  let tmpResult = tmp(12411);
  const shouldShowPushNotificationNudgeByPromptType = tmpResult.useShouldShowPushNotificationNudgeByPromptType(
    PermissionPromptType.CHANNEL_BANNER,
  );
  tmpResult = tmp(12411);
  const shouldShowPushNotificationNudgeByPromptType1 = tmpResult.useShouldShowPushNotificationNudgeByPromptType(
    PermissionPromptType.POST_REACTION_BANNER,
  );
  const tmp4Result = PostReactionPermissionNudgeExperimentDefault;
  let prop = null;
  if (tmp5) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  obj = { cooldownDurationMs };
  const tmp10 = cooldownDurationMs;
  const tmp11 = _slicedToArray;
  const tmpResult1 = channel(7388);
  [tmp13, tmp14] = _slicedToArray(
    channel(7388).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true),
    2,
  );
  importDefault = tmp14;
  const tmp12 = _slicedToArray(channel(7388).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  let prop1 = null;
  if (tmp5) {
    prop1 = null;
    if (tmp4Result.useConfig({ location: "ChatInputNotificationNudge" }).enabled) {
      prop1 = null;
      if (shouldShowPushNotificationNudgeByPromptType1) {
        prop1 = null;
        if (null == tmp13) {
          prop1 = tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  obj = { cooldownDurationMs: tmp10 };
  const tmp11Result = tmp11(channel(7388).useSelectedTimeRecurringDismissibleContent(prop1, obj, undefined, true), 2);
  dependencyMap = tmp17;
  const items1 = [tmp14];
  const items2 = [tmp11Result[1]];
  const tmpResult2 = channel(7388);
  const tmp18 = closure_4(() => _undefined(ContentDismissActionType.USER_DISMISS), items1);
  if (tmp13 === channel(1943).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    const obj1 = {
      promptType: tmp6.CHANNEL_BANNER,
      location: constants2.CHANNEL_BANNER,
      surface: constants5.CHANNEL_BANNER,
      body: null,
      onDismiss: null,
    };
    const intl2 = tmp(1114).intl;
    obj1.body = intl2.string(tmp(1114).t["/6SnPw"]);
    obj1.onDismiss = tmp18;
    let tmp24 = closure_17(ChatInputNotificationNudgeImpl, obj1);
  } else {
    tmp24 = null;
    if (tmp11Result[0] === tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      const obj2 = {
        promptType: tmp6.POST_REACTION_BANNER,
        location: constants2.POST_REACTION,
        surface: constants5.POST_REACTION_BANNER,
        body: null,
        onDismiss: null,
      };
      const intl = tmp(1114).intl;
      obj2.body = intl.string(tmp(1114).t.VS6ey0);
      obj2.onDismiss = tmp19;
      tmp24 = closure_17(ChatInputNotificationNudgeImpl, obj2);
    }
  }
  return tmp24;
}
