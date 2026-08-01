// === Module 11516: ChatInputNotificationNudgeImpl ===

// Module 11516 (ChatInputNotificationNudgeImpl)
import _slicedToArray from "_slicedToArray";
import noop from "getOrRefreshPushSyncToken";
import { View } from "_requestPushNotificationPermission";
import storeThread from "storeThread";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { PermissionPromptType } from "set";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import EventActionType from "EventActionType";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let unpackModuleId;
const require = arg1;
function ChatInputNotificationNudgeImpl(onDismiss) {
  let importDefault;
  let require;
  let surface;
  ({ promptType: require, location: importDefault, surface } = onDismiss);
  onDismiss = onDismiss.onDismiss;
  let obj = require(surface[12]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "ChatInputNotificationNudge" }).enabled;
  const tmp3 = callback5(enabled);
  const items = [surface];
  callback3(() => {
    let obj = outer1_1(surface[13]);
    obj = { action: outer1_15.IMPRESSION, prompt_type: surface };
    obj.track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  const items1 = [tmp3.container, ];
  let containerRefreshShadow = enabled;
  if (enabled) {
    containerRefreshShadow = tmp3.containerRefreshShadow;
  }
  obj = { style: items1, children: null };
  items1[1] = containerRefreshShadow;
  obj = { style: tmp3.iconContainer, children: null };
  const obj1 = { size: "sm", color: null };
  obj1[1] = importDefault(surface[11]).colors.ICON_STRONG;
  obj[1] = callback4(require(surface[14]).BellSlashIcon, obj1);
  const items2 = [callback4(View, obj), , ];
  const obj2 = { style: tmp3.contentContainer, children: null };
  let str = "text-md/medium";
  if (enabled) {
    str = "text-sm/medium";
  }
  const obj3 = { variant: str, color: null, children: null };
  let str2 = "text-strong";
  if (enabled) {
    str2 = "text-default";
  }
  obj3[1] = str2;
  obj3[2] = onDismiss.body;
  const items3 = [callback4(require(surface[15]).Text, obj3), ];
  const obj4 = {
    hitSlop: 8,
    onPress() {
      let obj = outer1_0(surface[17]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(outer1_14.ALLOW_TO_REQUEST, closure_1, outer1_11);
      obj = { action: outer1_15.ACCEPT, prompt_type: surface };
      outer1_1(surface[13]).track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
    },
    style: tmp3.ctaButton,
    accessibilityRole: "button",
    children: null
  };
  let str3 = "text-sm/semibold";
  if (enabled) {
    str3 = "text-xs/medium";
  }
  const obj5 = { variant: str3, color: "text-brand", children: null };
  const intl = tmp(tmp2[18]).intl;
  obj5[2] = intl.string(require(surface[18]).t["+7MDbQ"]);
  obj4[4] = callback4(require(surface[15]).Text, obj5);
  items3[1] = callback4(require(surface[16]).PressableOpacity, obj4);
  obj2[1] = items3;
  items2[1] = closure_18(View, obj2);
  const obj6 = {
    onPress() {
      let obj = outer1_0(surface[19]);
      const result = obj.setPushPermissionReactivationSeen(closure_0);
      obj = { action: outer1_15.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      outer1_1(surface[13]).track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl2 = tmp(tmp2[18]).intl;
  obj6[3] = intl2.string(require(surface[18]).t.WAI6xu);
  obj6[4] = callback4(require(surface[20]).XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = callback4(require(surface[16]).PressableHighlight, obj6);
  obj[1] = items2;
  return closure_18(View, obj);
}
({ useCallback: c4, useEffect: c5 } = noop);
({ AnalyticEvents: c10, NOOP: unpackModuleId } = ME);
({ EventActionLocation: map1, EventActionType: closure_14, NotificationNudgeAnalyticsAction: closure_15, NotificationNudgeSurface: closure_16 } = EventActionType);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = createCacheKey.createStyles((arg0) => {
  let obj = { display: "flex", flexDirection: "row", padding: importDefault(712).space.PX_12, backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, alignItems: "center", borderTopWidth: importDefault(712).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: importDefault(712).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: importDefault(712).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: importDefault(712).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM, gap: null };
  let num;
  if (arg0) {
    num = 12;
  }
  obj = { container: obj, containerRefreshShadow: null, iconContainer: null, contentContainer: null, ctaButton: null };
  obj[10] = num;
  obj = {};
  const merged = Object.assign(tmp(712).shadows.SHADOW_MEDIUM);
  obj[1] = obj;
  let num2 = 10;
  if (arg0) {
    num2 = 0;
  }
  const obj1 = { padding: num2, backgroundColor: null, borderRadius: null };
  let str = "transparent";
  if (!arg0) {
    str = tmp(712).colors.BACKGROUND_MOD_STRONG;
  }
  obj1[1] = str;
  obj1[2] = importDefault(712).radii.round;
  obj[2] = obj1;
  let num3 = 0;
  if (!arg0) {
    num3 = tmp(712).space.PX_12;
  }
  obj[3] = { flex: 1, marginLeft: num3 };
  obj[4] = { alignSelf: "flex-start" };
  return obj;
});
let c20 = 604800000;
let result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  let tmp13;
  let tmp14;
  channel = channel.channel;
  let importDefault;
  let dependencyMap;
  let obj = channel(589);
  const items = [storeThread, updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      let isMutedResult = outer1_7.isMuted(tmp.id);
    } else {
      isMutedResult = outer1_8.isChannelMuted(guildId, tmp.id);
    }
    return isMutedResult;
  });
  let tmp5 = !stateFromStores;
  if (!stateFromStores) {
    tmp5 = !importDefault(11336)(channel);
  }
  let tmpResult = tmp(11519);
  const shouldShowPushNotificationNudgeByPromptType = tmpResult.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.CHANNEL_BANNER);
  tmpResult = tmp(11519);
  const shouldShowPushNotificationNudgeByPromptType1 = tmpResult.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
  const tmp4 = importDefault;
  const tmp4Result = importDefault(11528);
  let prop = null;
  if (tmp5) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = tmp(1358).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  obj = { cooldownDurationMs: c20 };
  const tmp10 = c20;
  const tmp11 = callback;
  const tmpResult1 = channel(8451);
  [tmp13, tmp14] = callback(channel(8451).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  importDefault = tmp14;
  const tmp12 = callback(channel(8451).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  let prop1 = null;
  if (tmp5) {
    prop1 = null;
    if (tmp4Result.useConfig({ location: "ChatInputNotificationNudge" }).enabled) {
      prop1 = null;
      if (shouldShowPushNotificationNudgeByPromptType1) {
        prop1 = null;
        if (null == tmp13) {
          prop1 = tmp(1358).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  obj = { cooldownDurationMs: tmp10 };
  const tmp11Result = tmp11(channel(8451).useSelectedTimeRecurringDismissibleContent(prop1, obj, undefined, true), 2);
  dependencyMap = tmp17;
  const items1 = [tmp14];
  const items2 = [tmp11Result[1]];
  const tmpResult2 = channel(8451);
  const tmp18 = callback2(() => _undefined(outer1_12.USER_DISMISS), items1);
  if (tmp13 === channel(1358).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    const obj1 = { promptType: null, location: null, surface: null, body: null, onDismiss: null };
    obj1[0] = tmp6.CHANNEL_BANNER;
    obj1[1] = constants.CHANNEL_BANNER;
    obj1[2] = constants2.CHANNEL_BANNER;
    const intl2 = tmp(1236).intl;
    obj1[3] = intl2.string(tmp(1236).t["/6SnPw"]);
    obj1[4] = tmp18;
    let tmp24 = callback4(ChatInputNotificationNudgeImpl, obj1);
  } else {
    tmp24 = null;
    if (tmp11Result[0] === tmp(1358).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      const obj2 = { promptType: null, location: null, surface: null, body: null, onDismiss: null };
      obj2[0] = tmp6.POST_REACTION_BANNER;
      obj2[1] = constants.POST_REACTION;
      obj2[2] = constants2.POST_REACTION_BANNER;
      const intl = tmp(1236).intl;
      obj2[3] = intl.string(tmp(1236).t.VS6ey0);
      obj2[4] = tmp19;
      tmp24 = callback4(ChatInputNotificationNudgeImpl, obj2);
    }
  }
  return tmp24;
};