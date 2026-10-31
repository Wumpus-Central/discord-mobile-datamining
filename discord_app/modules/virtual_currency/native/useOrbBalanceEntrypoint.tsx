// discord_app/modules/virtual_currency/native/useOrbBalanceEntrypoint.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_5 = fn(16888).ORB_WALLET_ACTION_SHEET_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/useOrbBalanceEntrypoint.tsx");

export function useOrbBalanceEntrypoint(location) {
  let isOrbchievementsMobileEnabled;
  isOrbchievementsMobileEnabled = isOrbchievementsMobileEnabled(16905).useIsOrbchievementsMobileEnabled({
    location: location.location,
  });
  let obj = isOrbchievementsMobileEnabled(16905);
  const orbChallengeUnreadState = isOrbchievementsMobileEnabled(16891).useOrbChallengeUnreadState({
    enabled: isOrbchievementsMobileEnabled,
  });
  const items = [isOrbchievementsMobileEnabled];
  ({ hasUnreadUpdate, notificationType } = orbChallengeUnreadState);
  let obj2 = isOrbchievementsMobileEnabled(16891);
  return {
    isOrbchievementsEnabled: isOrbchievementsMobileEnabled,
    hasUnreadUpdate,
    notificationType,
    openBalanceWidgetActionSheet: noop.useCallback((arg0) => {
      closure_0 = isOrbchievementsMobileEnabled;
      let str = "BalanceWidgetActionSheet";
      let obj = ActionSheetActionCreatorsDefault;
      if (isOrbchievementsMobileEnabled) {
        str = closure_5;
      }
      obj.openLazy(
        asyncGeneratorStep(async () => {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              v3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const tmp15 = v3(closure_1_2[5]);
                  if (closure_0) {
                    c1 = 2;
                    v3 = 1;
                    const obj4 = { value: tmp15(closure_1_2[4], closure_1_2.paths), done: false };
                    return obj4;
                  } else {
                    c1 = 1;
                    v3 = 1;
                    const obj5 = { value: tmp15(closure_1_2[6], closure_1_2.paths), done: false };
                    return obj5;
                  }
                }
              } else {
                if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    v3 = 3;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                }
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              }
            } catch (tmp7) {
              v3 = tmp;
              throw tmp7;
            }
          }
        }),
        str,
        arg0,
      );
    }, items),
  };
}
