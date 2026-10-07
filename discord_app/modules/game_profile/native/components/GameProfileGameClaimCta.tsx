// === Module 8594: GameProfileGameClaimCta ===

// Module 8594 (GameProfileGameClaimCta)
import MobileWebHandoffLinkingDefault from "MobileWebHandoffLinking" /* 6830 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const RelativeMarketingURLs = fn(1085).RelativeMarketingURLs;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((trackAction) => {
  let Button = _require;
  let tmp = dependencyMap;
  const cResult = require("c").c(5);
  trackAction = trackAction.trackAction;
  _require = trackAction;
  if (cResult[0] !== trackAction) {
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
              v3(v3(8352).GameProfileTrackActionActions.ClaimGame);
              c1 = 1;
              v3 = 1;
              const obj4 = { value: MobileWebHandoffLinkingDefault.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, v3(6834).LoginHandoffSource.GAME_CLAIM), done: false };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[0] = trackAction;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === closure_0(1985).GameLinkTypes.OFFICIAL);
  }
  if (someResult != null) {
    if (someResult) {
      return null;
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = Button(1126).intl;
    const stringResult = intl.string(Button(1126).t["mqg+to"]);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    Button = Button(5601).Button;
    let obj2 = { variant: "secondary", size: "md", text: tmp7, onPress: tmp3 };
    tmp = <Button variant="secondary" size="md" text={tmp7} onPress={tmp3} />;
    cResult[3] = tmp3;
    cResult[4] = tmp;
  }
  let obj = require("c");
}) : ((trackAction) => {
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            trackAction(v3(8352).GameProfileTrackActionActions.ClaimGame);
            v1 = 1;
            v3 = 1;
            const obj4 = { value: v1(6830).redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, v3(6834).LoginHandoffSource.GAME_CLAIM), done: false };
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp5) {
        v3 = tmp;
        throw tmp5;
      }
    }
  }), items);
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[9]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    let obj = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl = trackAction(1126).intl;
    obj.text = intl.string(trackAction(1126).t["mqg+to"]);
    obj.onPress = callback;
    let tmp3 = jsx(trackAction(5601).Button, { variant: "secondary", size: "md", text: null, onPress: null });
  } else {
    tmp3 = null;
  }
  return tmp3;
});