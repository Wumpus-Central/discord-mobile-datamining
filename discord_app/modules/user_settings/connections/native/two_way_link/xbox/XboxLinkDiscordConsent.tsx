// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../../Constants.tsx";
import XboxLinkConstants from "XboxLinkConstants.tsx";
import GameConsoleConstants from "../../../../../game_console/GameConsoleConstants.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const XBOX_CLIENT_SCOPES = GameConsoleConstants.XBOX_CLIENT_SCOPES;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let callbackCode;
      let callbackState;
      let tmp5;
      let tmp6;
      const obj = navigation(576);
      const cResult = obj.c(9);
      ({ callbackCode, callbackState } = arg0);
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function s() {
          navigation.push(XboxLinkModalScenes.SUCCESS);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn2 = function k() {
          navigation.push(XboxLinkModalScenes.ERROR);
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === callbackCode) {
        if (cResult[5] === callbackState) {
          if (cResult[6] === tmp6) {
            let tmp7;
            if (cResult[7] === tmp5) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
      const TwoWayLinkDiscordConsent = tmp(8782).TwoWayLinkDiscordConsent;
      const tmp8 = (
        <TwoWayLinkDiscordConsent
          platformType={PlatformTypes.XBOX}
          callbackCode={callbackCode}
          callbackState={callbackState}
          clientId={navigation(8783).ConsoleOAuthApplications.XBOX_APPLICATION_ID}
          scopes={XBOX_CLIENT_SCOPES}
          onNext={tmp5}
          onError={tmp6}
        />
      );
      cResult[4] = callbackCode;
      cResult[5] = callbackState;
      cResult[6] = tmp6;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let callbackCode;
      let callbackState;
      navigation = undefined;
      ({ callbackCode, callbackState } = arg0);
      const obj = navigation(1490);
      navigation = obj.useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = react.useCallback(() => {
        navigation.push(XboxLinkModalScenes.SUCCESS);
      }, items);
      const callback1 = react.useCallback(() => {
        navigation.push(XboxLinkModalScenes.ERROR);
      }, items1);
      const TwoWayLinkDiscordConsent = navigation(8782).TwoWayLinkDiscordConsent;
      return (
        <TwoWayLinkDiscordConsent
          platformType={PlatformTypes.XBOX}
          callbackCode={callbackCode}
          callbackState={callbackState}
          clientId={navigation(8783).ConsoleOAuthApplications.XBOX_APPLICATION_ID}
          scopes={XBOX_CLIENT_SCOPES}
          onNext={callback}
          onError={callback1}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx",
);

export default tmp2;
