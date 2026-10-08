// discord_app/modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildOnboardingHomeSettingsStore from "../GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "../GuildOnboardingMemberActionStore.tsx";

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const GuildMemberFlags = fn(4693).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { padding: 16 },
  horizontal: { flexDirection: "row", alignItems: "center" },
  spaceBetween: { justifyContent: "space-between" },
  spaceBelow: { marginBottom: 8 },
  progressBackground: {
    borderRadius: nativeDefault.radii.round,
    height: 8,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  },
  progressForeground: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.round,
  height: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.progressForeground = {
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
  height: 8,
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProgressBar(percent) {
      const cResult = c.c(11);
      const tmp3 = closure_12();
      const combined = "" + percent.percent + "%";
      if (cResult[0] !== combined) {
        const obj2 = { width: combined };
        cResult[0] = combined;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp3.progressForeground) {
        if (cResult[3] === tmp5) {
          let tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
          cResult[5] = items;
          let tmp7 = items;
        } else {
          tmp7 = cResult[5];
        }
        if (cResult[6] !== tmp6) {
          const obj3 = { style: tmp6, colors: tmp7, useAngle: true, angle: -90 };
          const tmp11 = collapsed(LinearGradientDefault, obj3);
          cResult[6] = tmp6;
          cResult[7] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[7];
        }
        if (cResult[8] === tmp3.progressBackground) {
          if (cResult[9] === tmp8) {
            let tmp12 = cResult[10];
          }
          return tmp12;
        }
        const obj4 = { style: tmp3.progressBackground, children: tmp8 };
        const tmp15 = collapsed(View, obj4);
        cResult[8] = tmp3.progressBackground;
        cResult[9] = tmp8;
        cResult[10] = tmp15;
        tmp12 = tmp15;
      }
      const items1 = [tmp3.progressForeground, tmp5];
      cResult[2] = tmp3.progressForeground;
      cResult[3] = tmp5;
      cResult[4] = items1;
      tmp6 = items1;
    }
  : function ProgressBar(percent) {
      const tmp = closure_12();
      const obj = { style: tmp.progressBackground, children: null };
      const obj2 = { style: null, colors: null, useAngle: true, angle: -90 };
      const items = [tmp.progressForeground];
      const obj3 = { width: "" + percent.percent + "%" };
      items[1] = obj3;
      obj2.style = items;
      obj2.colors = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
      obj.children = collapsed(LinearGradientDefault, obj2);
      return collapsed(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  const tmp = closure_12();
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(stateFromStores1[13]).useStateFromStores(
    items,
    () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId),
    items1,
  );
  const obj = guildId(stateFromStores1[13]);
  const items2 = [GuildOnboardingMemberActionStore];
  stateFromStores1 = guildId(stateFromStores1[13]).useStateFromStores(items2, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(guildId),
  );
  const obj2 = guildId(stateFromStores1[13]);
  const items3 = [GuildMemberStore];
  const stateFromStores2 = guildId(stateFromStores1[13]).useStateFromStores(items3, () =>
    GuildMemberStore.getSelfMember(guildId),
  );
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
  const obj3 = guildId(stateFromStores1[13]);
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
        const obj4 = {
          accessibilityRole: "button",
          activeOpacity: 0.4,
          style: tmp.container,
          onPress() {
            guildId(stateFromStores1[16]).transitionTo(constants.GUILD_HOME);
          },
          children: null,
        };
        const obj5 = { style: null, children: null };
        const items5 = [, ,];
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        obj5.style = items5;
        const obj6 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp2(tmp3[18]).intl;
        obj6.children = intl.string(tmp2(tmp3[18]).t.LhlgY9);
        const items6 = [closure_10(tmp2(tmp3[17]).Text, obj6)];
        const obj7 = { style: tmp.horizontal, children: null };
        const obj8 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: memo };
        const items7 = [
          closure_10(tmp2(tmp3[17]).Text, obj8),
          closure_10(tmp2(tmp3[17]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }),
          ,
        ];
        const obj9 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: num };
        items7[2] = closure_10(tmp2(tmp3[17]).Text, obj9);
        const obj10 = { size: tmp2(tmp3[19]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores(tmp3[20]) };
        items7[3] = closure_10(tmp2(tmp3[19]).Icon, obj10);
        obj7.children = items7;
        items6[1] = closure_11(View, obj7);
        obj5.children = items6;
        const items8 = [closure_11(View, obj5)];
        const obj11 = { percent: (memo / num) * 100 + 3 };
        items8[1] = closure_10(closure_13, obj11);
        obj4.children = items8;
        tmp7 = closure_11(tmp2(tmp3[15]).PressableOpacity, obj4);
      }
    }
  }
  return tmp7;
};
