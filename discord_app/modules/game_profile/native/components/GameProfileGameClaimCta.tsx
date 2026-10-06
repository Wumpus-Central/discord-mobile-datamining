// discord_app/modules/game_profile/native/components/GameProfileGameClaimCta.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import MobileWebHandoffLinkingDefault from "../../../mobile_web_handoff/native/MobileWebHandoffLinking.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, trackAction;

const RelativeMarketingURLs = Constants.RelativeMarketingURLs;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackAction) => {
      let tmp4;
      let tmp7;
      let obj = trackAction(576);
      const cResult = obj.c(5);
      trackAction = trackAction.trackAction;
      const game = trackAction.game;
      if (cResult[0] !== trackAction) {
        let closure_0 = _asyncToGenerator(async () => {
          let obj5;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  v3(v3(dependencyMap[6]).GameProfileTrackActionActions.ClaimGame);
                  c1 = 1;
                  v3 = 1;
                  const obj4 = {
                    value: obj5.redirectDeveloperPortalWithHandoffToken(
                      constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
                      v3(dependencyMap[8]).LoginHandoffSource.GAME_CLAIM,
                    ),
                    done: false,
                  };
                  obj5 = MobileWebHandoffLinkingDefault;
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
            } catch (tmp4) {
              v3 = 3;
              throw tmp4;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[0] = trackAction;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const linkedApplications = game.linkedApplications;
      let someResult;
      if (linkedApplications != null) {
        someResult = linkedApplications.some(
          (type) => type.type === trackAction(dependencyMap[9]).GameLinkTypes.OFFICIAL,
        );
      }
      if (someResult == null) {
        let tmp9;
        let tmp11;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(trackAction(1126).t["mqg+to"]);
          cResult[2] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const tmp13 = jsx(trackAction(5601).Button, { variant: "secondary", size: "md", text: tmp9, onPress: tmp4 });
          cResult[3] = tmp4;
          cResult[4] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[4];
        }
        tmp7 = tmp11;
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  : (trackAction) => {
      let tmp3;
      trackAction = trackAction.trackAction;
      const items = [trackAction];
      const linkedApplications = trackAction.game.linkedApplications;
      let someResult;
      const callback = react.useCallback(
        _asyncToGenerator(async () => {
          let v1;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  trackAction(v3(dependencyMap[6]).GameProfileTrackActionActions.ClaimGame);
                  const obj5 = v1(dependencyMap[7]);
                  v1 = 1;
                  v3 = 1;
                  const obj4 = {
                    value: obj5.redirectDeveloperPortalWithHandoffToken(
                      constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY,
                      v3(dependencyMap[8]).LoginHandoffSource.GAME_CLAIM,
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
                return { value: "IconComponent", done: null };
              }
            } catch (tmp4) {
              v3 = 3;
              throw tmp4;
            }
          }
        }),
        items,
      );
      if (linkedApplications != null) {
        someResult = linkedApplications.some(
          (type) => type.type === trackAction(dependencyMap[9]).GameLinkTypes.OFFICIAL,
        );
      }
      if (someResult == null) {
        const Button = trackAction(5601).Button;
        const intl = trackAction(1126).intl;
        tmp3 = (
          <Button variant="secondary" size="md" text={intl.string(trackAction(1126).t["mqg+to"])} onPress={callback} />
        );
      } else {
        tmp3 = null;
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default tmp2;
