// === Module 12408: ChatInputNotificationNudgeImpl ===

// Module 12408 (ChatInputNotificationNudgeImpl)
import ThemesDefault from "Themes" /* 576 */;
import useIsAppDMDefault from "useIsAppDM" /* 12145 */;
import apexExperimentDefault from "apexExperiment" /* 12420 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "storeThread" /* 4201 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4741 */;
import { PermissionPromptType } from "set" /* 12409 */;
import ME from "ME" /* 1074 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import EventActionType from "EventActionType" /* 12410 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function ChatInputNotificationNudgeImpl(children) {
  ({ promptType: require, location: importDefault, surface } = children);
  const onDismiss = children.onDismiss;
  const tmp = callback6();
  const items = [surface];
  callback3(() => {
    let obj = closure_1_1(surface[12]);
    obj = { action: closure_1_15.IMPRESSION, prompt_type: surface };
    obj.track(closure_1_10.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  let obj = { style: items1, children: null };
  items1 = [, ];
  ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp);
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "sm", color: importDefault(surface[11]).colors.ICON_STRONG };
  obj[1] = callback4(require(surface[13]).BellSlashIcon, obj);
  const items2 = [callback4(View, obj), , ];
  obj1 = { style: tmp.contentContainer, children: null };
  const items3 = [callback4(require(surface[14]).Text, { variant: "text-sm/medium", color: "text-default", children: children.body }), ];
  const obj2 = {
    hitSlop: 8,
    onPress() {
      let obj = closure_1_0(surface[16]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(closure_1_14.ALLOW_TO_REQUEST, closure_1, closure_1_11);
      obj = { action: closure_1_15.ACCEPT, prompt_type: surface };
      closure_1_1(surface[12]).track(closure_1_10.CONTEXTUAL_REMINDER_ACTION, obj);
    },
    style: tmp.ctaButton,
    accessibilityRole: "button",
    children: null
  };
  const obj3 = { variant: "text-xs/medium", color: "text-brand", children: null };
  const intl = require(surface[17]).intl;
  obj3[2] = intl.string(require(surface[17]).t["+7MDbQ"]);
  obj2[4] = callback4(require(surface[14]).Text, obj3);
  items3[1] = callback4(require(surface[15]).PressableOpacity, obj2);
  obj1[1] = items3;
  items2[1] = callback5(View, obj1);
  const obj4 = {
    onPress() {
      let obj = closure_1_0(surface[18]);
      const result = obj.setPushPermissionReactivationSeen(closure_0);
      obj = { action: closure_1_15.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      closure_1_1(surface[12]).track(closure_1_10.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl2 = require(surface[17]).intl;
  obj4[3] = intl2.string(require(surface[17]).t.WAI6xu);
  obj4[4] = callback4(require(surface[19]).XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = callback4(require(surface[15]).PressableHighlight, obj4);
  obj[1] = items2;
  return callback5(View, obj);
}
({ useCallback: c4, useEffect: c5 } = noop);
({ AnalyticEvents: c10, NOOP: unpackModuleId } = ME);
({ EventActionLocation: map1, EventActionType: closure_14, NotificationNudgeAnalyticsAction: closure_15, NotificationNudgeSurface: closure_16 } = EventActionType);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = createCacheKey.createStyles(() => {
  let obj = { container: null, containerRefreshShadow: null, iconContainer: null, contentContainer: null, ctaButton: null };
  obj = { display: "flex", flexDirection: "row", padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, alignItems: "center", borderTopWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM, gap: 12 };
  obj[0] = obj;
  obj = {};
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_MEDIUM);
  obj[1] = obj;
  obj[2] = { backgroundColor: "transparent", borderRadius: ThemesDefault.radii.round };
  obj[3] = { flex: 1 };
  obj[4] = { alignSelf: "flex-start" };
  return obj;
});
let c20 = 604800000;
let result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  channel = channel.channel;
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = channel(504);
  const items = [closure_7, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      let isMutedResult = closure_1_7.isMuted(tmp.id);
    } else {
      isMutedResult = closure_1_8.isChannelMuted(guildId, tmp.id);
    }
    return isMutedResult;
  });
  let tmp5 = !stateFromStores;
  if (!stateFromStores) {
    tmp5 = !useIsAppDMDefault(channel);
  }
  let tmpResult = tmp(12411);
  const shouldShowPushNotificationNudgeByPromptType = tmpResult.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.CHANNEL_BANNER);
  tmpResult = tmp(12411);
  const shouldShowPushNotificationNudgeByPromptType1 = tmpResult.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
  const tmp4 = importDefault;
  const tmp4Result = apexExperimentDefault;
  let prop = null;
  if (tmp5) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  obj = { cooldownDurationMs: c20 };
  const tmp10 = c20;
  const tmp11 = callback;
  const tmpResult1 = channel(7388);
  [tmp13, tmp14] = callback(channel(7388).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  importDefault = tmp14;
  const tmp12 = callback(channel(7388).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
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
  const tmp18 = callback2(() => _undefined(closure_1_12.USER_DISMISS), items1);
  if (tmp13 === channel(1943).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    obj1 = { promptType: null, location: null, surface: null, body: null, onDismiss: null };
    obj1[0] = tmp6.CHANNEL_BANNER;
    obj1[1] = constants.CHANNEL_BANNER;
    obj1[2] = constants2.CHANNEL_BANNER;
    const intl2 = tmp(1114).intl;
    obj1[3] = intl2.string(tmp(1114).t["/6SnPw"]);
    obj1[4] = tmp18;
    let tmp24 = callback4(ChatInputNotificationNudgeImpl, obj1);
  } else {
    tmp24 = null;
    if (tmp11Result[0] === tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      const obj2 = { promptType: null, location: null, surface: null, body: null, onDismiss: null };
      obj2[0] = tmp6.POST_REACTION_BANNER;
      obj2[1] = constants.POST_REACTION;
      obj2[2] = constants2.POST_REACTION_BANNER;
      const intl = tmp(1114).intl;
      obj2[3] = intl.string(tmp(1114).t.VS6ey0);
      obj2[4] = tmp19;
      tmp24 = callback4(ChatInputNotificationNudgeImpl, obj2);
    }
  }
  return tmp24;
};