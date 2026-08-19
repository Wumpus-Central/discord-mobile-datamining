// === Module 11404: ? ===

// Module 11404
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ChatInputActionType } from "TextAreaCta" /* 11149 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
const memoResult = importAllResult.memo(function ChatInputActionButtonApps(onPress) {
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowBotsBanner = undefined;
  canShowOnboarding = undefined;
  closure_7 = undefined;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  const ref = canShowBotsBanner.useRef(null);
  let obj = { channelId: channel.id };
  const tmp4 = onPress(ref[4])(obj);
  ({ canShowOnboarding, canShowBotsBanner } = tmp4);
  const canShowAppsOrActivitiesBanner = tmp4.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp4.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp4.fromTriggeredOnboarding;
  }
  closure_7 = obj.useRef(-1);
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
        let obj = { channelId: null, timeMs: null, guildId: null, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: null };
        obj[0] = channel.id;
        const _Date2 = Date;
        obj[1] = Date.now();
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj[2] = guild_id;
        obj[5] = willShowGlobalSearchOnboarding;
        const result = channel(ref[5]).setTriggeredOnboardingContentMetadata(obj);
        const obj3 = channel(ref[5]);
      } else if (canShowAppsOrActivitiesBanner) {
        channel(ref[5]);
        obj = { channelId: null, timeMs: null, guildId: null, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding: null };
        obj[0] = channel.id;
        const _Date = Date;
        obj[1] = Date.now();
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        obj[2] = guild_id1;
        obj[5] = willShowGlobalSearchOnboarding;
        const result1 = obj.setTriggeredOnboardingContentMetadata(obj);
      }
      if (willShowGlobalSearchOnboarding) {
        obj1 = { channelId: null, timeMs: null, guildId: null, canShowAppsOrActivitiesBanner: null, canShowBotsBanner: null, willShowGlobalSearchOnboarding: true };
        obj1[0] = channel.id;
        const _Date3 = Date;
        obj1[1] = Date.now();
        let guild_id2;
        if (channel != null) {
          guild_id2 = channel.guild_id;
        }
        obj1[2] = guild_id2;
        obj1[3] = canShowAppsOrActivitiesBanner;
        obj1[4] = canShowBotsBanner;
        const result2 = channel(ref[5]).setTriggeredOnboardingContentMetadata(obj1);
        const obj5 = channel(ref[5]);
      }
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        callback(table[5]).setLastSeenTimeMs();
      }, channel(ref[6]).APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  let tmp9 = null;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      obj = { channelId: null };
      obj[0] = channel.id;
      tmp9 = canShowOnboarding(channel(tmp3[6]).AppLauncherOnboardingChatInputButtonAnimation, obj);
    }
  }
  obj1 = { children: null };
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
      onPress(arg0, willShowGlobalSearchOnboarding.APPS, ref);
      channel(ref[8]);
      const obj = { ref };
      const result = obj.setAccessibilityFocus(obj);
    },
    IconComponent: channel(ref[9]).AppLauncherButtonIcon,
    accessibilityLabel: null,
    accessibilityState: null
  };
  const intl = channel(tmp3[10]).intl;
  obj2[9] = intl.string(channel(ref[10]).t.rugBPp);
  obj2[10] = { expanded: active };
  items1[1] = canShowOnboarding(onPress(ref[7]), obj2);
  obj1[0] = items1;
  return closure_7(canShowAppsOrActivitiesBanner, obj1);
});
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default memoResult;