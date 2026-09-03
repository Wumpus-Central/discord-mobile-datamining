// === Module 12884: GameProfileGameClaimCta ===

// Module 12884 (GameProfileGameClaimCta)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { RelativeMarketingURLs } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default function GameProfileGameClaimCta(trackAction) {
  trackAction = trackAction.trackAction;
  const items = [trackAction];
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  callback = React.useCallback(callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0(v0(closure_1_2[4]).GameProfileTrackActionActions.ClaimGame);
            obj1 = v02(closure_1_2[5]);
            v02 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.redirectDeveloperPortalWithHandoffToken(closure_1_5.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        v0 = tmp;
        throw tmp11;
      }
    }
  }), items);
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(table[6]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    let obj = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl = trackAction(1233).intl;
    obj[2] = intl.string(trackAction(1233).t["mqg+to"]);
    obj[3] = callback;
    let tmp3 = jsx(trackAction(4929).Button, { variant: "secondary", size: "md", text: null, onPress: null });
  } else {
    tmp3 = null;
  }
  return tmp3;
};