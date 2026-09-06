// === Module 12241: ChatInputActionButtonApps ===

// Module 12241 (ChatInputActionButtonApps)
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 12099 */;
import AppLauncherOnboardingChatInputButtonAnimation from "AppLauncherOnboardingChatInputButtonAnimation" /* 12242 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ChatInputActionType = fn(11962).ChatInputActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default noop.memo(function ChatInputActionButtonApps(onPress) {
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowBotsBanner = undefined;
  canShowOnboarding = undefined;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  let ref = canShowBotsBanner.useRef(null);
  let obj = { channelId: channel.id };
  const tmp4 = onPress(ref[4])(obj);
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
        let obj = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: null };
        const _Date2 = Date;
        obj.timeMs = Date.now();
        let guild_id;
        if (channel != null) {
          guild_id = tmp13.guild_id;
        }
        obj.guildId = guild_id;
        obj.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj);
        tmp13 = channel;
      } else if (canShowAppsOrActivitiesBanner) {
        obj = { channelId: channel.id, timeMs: null, guildId: null, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding: null };
        const _Date = Date;
        obj.timeMs = Date.now();
        let guild_id1;
        if (channel != null) {
          guild_id1 = tmp5.guild_id;
        }
        obj.guildId = guild_id1;
        obj.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result1 = obj.setTriggeredOnboardingContentMetadata(obj);
        tmp5 = channel;
      }
      if (willShowGlobalSearchOnboarding) {
        const obj1 = { channelId: channel.id, timeMs: null, guildId: null, canShowAppsOrActivitiesBanner: null, canShowBotsBanner: null, willShowGlobalSearchOnboarding: true };
        const _Date3 = Date;
        obj1.timeMs = Date.now();
        let guild_id2;
        if (channel != null) {
          guild_id2 = tmp22.guild_id;
        }
        obj1.guildId = guild_id2;
        obj1.canShowAppsOrActivitiesBanner = canShowAppsOrActivitiesBanner;
        obj1.canShowBotsBanner = tmp;
        const result2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata(obj1);
        tmp22 = channel;
      }
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        channel(ref[5]).setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
      tmp = canShowBotsBanner;
    }
  }, items);
  let tmp9 = null;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      obj = { channelId: channel.id };
      tmp9 = canShowOnboarding(channel(tmp3[6]).AppLauncherOnboardingChatInputButtonAnimation, obj);
    }
  }
  let obj1 = { children: null };
  const items1 = [tmp9, ];
  const obj2 = {
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
      const obj = { ref };
      const result = obj.setAccessibilityFocus(obj);
    },
    IconComponent: channel(ref[9]).AppLauncherButtonIcon,
    accessibilityLabel: null,
    accessibilityState: null
  };
  const intl = channel(tmp3[10]).intl;
  obj2.accessibilityLabel = intl.string(channel(ref[10]).t.rugBPp);
  obj2.accessibilityState = { expanded: active };
  items1[1] = canShowOnboarding(onPress(ref[7]), obj2);
  obj1.children = items1;
  return ref(canShowAppsOrActivitiesBanner, obj1);
});