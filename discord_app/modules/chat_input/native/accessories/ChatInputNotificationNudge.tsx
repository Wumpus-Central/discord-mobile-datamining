// discord_app/modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useIsAppDMDefault from "../../../app_dms/useIsAppDM.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../actions/native/PushNotificationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const PostReactionPermissionNudgeExperimentDefault = tmp4(12674);
require = fn;
function ChatInputNotificationNudgeImpl(children) {
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
    onPress() {
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
    onPress() {
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
}
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const PermissionPromptType = fn(12663).PermissionPromptType;
const Constants = fn(1074);
({ AnalyticEvents: c10, NOOP: closure_11 } = Constants);
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const NotificationPermissionConstants = fn(12664);
({
  EventActionLocation: map1,
  EventActionType: closure_14,
  NotificationNudgeAnalyticsAction: closure_15,
  NotificationNudgeSurface: closure_16,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4756);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
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
  const shouldShowPushNotificationNudgeByPromptType = channel(12665).useShouldShowPushNotificationNudgeByPromptType(
    PermissionPromptType.CHANNEL_BANNER,
  );
  const tmpResult = channel(12665);
  const tmp4Result = PostReactionPermissionNudgeExperimentDefault;
  const shouldShowPushNotificationNudgeByPromptType1 = channel(12665).useShouldShowPushNotificationNudgeByPromptType(
    PermissionPromptType.POST_REACTION_BANNER,
  );
  const tmpResult4 = channel(12665);
  let prop = null;
  if (tmp5) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = tmp(2027).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  const obj2 = { cooldownDurationMs };
  const tmpResult5 = channel(7630);
  [tmp13, tmp14] = channel(7630).useSelectedTimeRecurringDismissibleContent(
    prop,
    { cooldownDurationMs },
    undefined,
    true,
  );
  importDefault = tmp14;
  const tmp12 = _slicedToArray(
    channel(7630).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs }, undefined, true),
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
          prop1 = tmp(2027).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  const tmp11Result = _slicedToArray(
    channel(7630).useSelectedTimeRecurringDismissibleContent(prop1, { cooldownDurationMs }, undefined, true),
    2,
  );
  dependencyMap = tmp17;
  const items1 = [tmp14];
  const items2 = [tmp11Result[1]];
  const obj3 = { cooldownDurationMs };
  const tmpResult6 = channel(7630);
  const tmp18 = closure_4(() => _undefined(ContentDismissActionType.USER_DISMISS), items1);
  if (tmp13 === channel(2027).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    const obj4 = {
      promptType: PermissionPromptType.CHANNEL_BANNER,
      location: constants2.CHANNEL_BANNER,
      surface: constants5.CHANNEL_BANNER,
      body: null,
      onDismiss: null,
    };
    const intl2 = tmp(1115).intl;
    obj4.body = intl2.string(tmp(1115).t["/6SnPw"]);
    obj4.onDismiss = tmp18;
    let tmp24 = closure_17(ChatInputNotificationNudgeImpl, obj4);
  } else {
    tmp24 = null;
    if (tmp11Result[0] === tmp(2027).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      const obj5 = {
        promptType: PermissionPromptType.POST_REACTION_BANNER,
        location: constants2.POST_REACTION,
        surface: constants5.POST_REACTION_BANNER,
        body: null,
        onDismiss: null,
      };
      const intl = tmp(1115).intl;
      obj5.body = intl.string(tmp(1115).t.VS6ey0);
      obj5.onDismiss = tmp19;
      tmp24 = closure_17(ChatInputNotificationNudgeImpl, obj5);
    }
  }
  return tmp24;
}
