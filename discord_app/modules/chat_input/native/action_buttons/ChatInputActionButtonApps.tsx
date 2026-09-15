// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import AppLauncherOnboardingActionCreators from "../../../app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx";
import AppLauncherOnboardingChatInputButtonAnimation from "../../../app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ChatInputActionType = fn(12096).ChatInputActionType;
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
  const tmp4 = onPress(ref[4])({ channelId: channel.id });
  ({ canShowOnboarding, canShowBotsBanner } = tmp4);
  const canShowAppsOrActivitiesBanner = tmp4.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp4.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp4.fromTriggeredOnboarding;
  }
  ref = obj.useRef(-1);
  const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, , ,];
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
        const obj2 = {
          channelId: channel.id,
          timeMs: null,
          guildId: null,
          canShowBotsBanner: true,
          canShowAppsOrActivitiesBanner: false,
          willShowGlobalSearchOnboarding: null,
        };
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
        const obj4 = {
          channelId: channel.id,
          timeMs: null,
          guildId: null,
          canShowBotsBanner: false,
          canShowAppsOrActivitiesBanner: true,
          willShowGlobalSearchOnboarding: null,
        };
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
        const obj6 = {
          channelId: channel.id,
          timeMs: null,
          guildId: null,
          canShowAppsOrActivitiesBanner: null,
          canShowBotsBanner: null,
          willShowGlobalSearchOnboarding: true,
        };
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
        channel(ref[5]).setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  let tmp9 = null;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      let obj3 = { channelId: channel.id };
      tmp9 = canShowOnboarding(channel(tmp3[6]).AppLauncherOnboardingChatInputButtonAnimation, obj3);
    }
  }
  let obj4 = { children: null };
  const items1 = [tmp9];
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
    IconComponent: channel(ref[9]).AppLauncherButtonIcon,
    accessibilityLabel: null,
    accessibilityState: null,
  };
  const intl = channel(tmp3[10]).intl;
  obj5.accessibilityLabel = intl.string(channel(ref[10]).t.rugBPp);
  obj5.accessibilityState = { expanded: active };
  items1[1] = canShowOnboarding(onPress(ref[7]), obj5);
  obj4.children = items1;
  return ref(canShowAppsOrActivitiesBanner, obj4);
});
