// === Module 8896: GameProfileGameClaimCta ===

// Module 8896 (GameProfileGameClaimCta)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

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
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            trackAction(v3(8686).GameProfileTrackActionActions.ClaimGame);
            let obj1 = v1(7316);
            v1 = 1;
            v3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        v3 = tmp;
        throw tmp11;
      }
    }
  }), items);
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[6]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    let obj = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl = trackAction(1114).intl;
    obj.text = intl.string(trackAction(1114).t["mqg+to"]);
    obj.onPress = callback;
    let tmp3 = jsx(trackAction(4975).Button, { variant: "secondary", size: "md", text: null, onPress: null });
  } else {
    tmp3 = null;
  }
  return tmp3;
};