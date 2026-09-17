// discord_app/modules/game_profile/native/components/GameProfileGameClaimCta.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const RelativeMarketingURLs = fn(1074).RelativeMarketingURLs;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default function GameProfileGameClaimCta(trackAction) {
  trackAction = trackAction.trackAction;
  const items = [trackAction];
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  const callback = noop.useCallback(
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              trackAction(v3(8833).GameProfileTrackActionActions.ClaimGame);
              v1 = 1;
              v3 = 1;
              const obj4 = {
                value: v1(7430).redirectDeveloperPortalWithHandoffToken(
                  constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
                  v3(7434).LoginHandoffSource.GAME_CLAIM,
                ),
                done: false,
              };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    }),
    items,
  );
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[7]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    let obj = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl = trackAction(1115).intl;
    obj.text = intl.string(trackAction(1115).t["mqg+to"]);
    obj.onPress = callback;
    let tmp3 = jsx(trackAction(5062).Button, { variant: "secondary", size: "md", text: null, onPress: null });
  } else {
    tmp3 = null;
  }
  return tmp3;
}
