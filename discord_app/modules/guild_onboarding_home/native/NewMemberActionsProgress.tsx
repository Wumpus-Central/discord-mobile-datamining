// discord_app/modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildOnboardingHomeSettingsStore from "../GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "../GuildOnboardingMemberActionStore.tsx";

const require = fn;
function ProgressBar(percent) {
  const tmp = closure_12();
  let obj = { style: tmp.progressBackground, children: null };
  obj = { style: null, colors: null, useAngle: true, angle: -90 };
  const items = [tmp.progressForeground];
  obj = { width: "" + percent.percent + "%" };
  items[1] = obj;
  obj.style = items;
  obj.colors = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
  obj.children = closure_1_10(LinearGradientDefault, obj);
  return closure_1_10(View, obj);
}
const View = fn(17).View;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: { padding: 16 },
  horizontal: { flexDirection: "row", alignItems: "center" },
  spaceBetween: { justifyContent: "space-between" },
  spaceBelow: { marginBottom: 8 },
  progressBackground: null,
  progressForeground: null,
};
createStyles = {
  borderRadius: nativeDefault.radii.round,
  height: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
createStyles.progressBackground = createStyles;
createStyles.progressForeground = {
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
  height: 8,
};
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  const tmp = closure_12();
  let obj = guildId(stateFromStores1[11]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId),
    items1,
  );
  let obj1 = guildId(stateFromStores1[11]);
  const items2 = [GuildOnboardingMemberActionStore];
  stateFromStores1 = obj1.useStateFromStores(items2, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(guildId),
  );
  let obj2 = guildId(stateFromStores1[11]);
  const items3 = [GuildMemberStore];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.length;
  }
  if (num == null) {
    num = 0;
  }
  const items4 = [stateFromStores1, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        closure_0 = 0;
        const item = stateFromStores.forEach((item) => {
          if (null != stateFromStores1[item.channelId]) {
            closure_0 = closure_0 + 1;
          }
        });
        return closure_0;
      }
    }
    return 0;
  }, items4);
  let num2;
  if (stateFromStores2 != null) {
    num2 = stateFromStores2.flags;
  }
  if (num2 == null) {
    num2 = 0;
  }
  let tmp7 = null;
  if (!tmp2Result.hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
    tmp7 = null;
    if (0 !== num) {
      tmp7 = null;
      if (memo + num !== 0) {
        obj = {
          accessibilityRole: "button",
          activeOpacity: 0.4,
          style: tmp.container,
          onPress() {
            guildId(stateFromStores1[14]).transitionTo(constants.GUILD_HOME);
          },
          children: null,
        };
        obj = { style: null, children: null };
        const items5 = [, ,];
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        obj.style = items5;
        obj1 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp2(tmp3[16]).intl;
        obj1.children = intl.string(tmp2(tmp3[16]).t.LhlgY9);
        const items6 = [closure_10(tmp2(tmp3[15]).Text, obj1)];
        obj2 = { style: tmp.horizontal, children: null };
        const obj3 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: memo };
        const items7 = [
          closure_10(tmp2(tmp3[15]).Text, obj3),
          closure_10(tmp2(tmp3[15]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }),
          ,
        ];
        const obj4 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: num };
        items7[2] = closure_10(tmp2(tmp3[15]).Text, obj4);
        const obj5 = { size: tmp2(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores(tmp3[18]) };
        items7[3] = closure_10(tmp2(tmp3[17]).Icon, obj5);
        obj2.children = items7;
        items6[1] = closure_11(View, obj2);
        obj.children = items6;
        const items8 = [closure_11(View, obj)];
        const obj6 = { percent: (memo / num) * 100 + 3 };
        items8[1] = closure_10(ProgressBar, obj6);
        obj.children = items8;
        tmp7 = closure_11(tmp2(tmp3[13]).PressableOpacity, obj);
      }
    }
  }
  return tmp7;
};
