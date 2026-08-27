// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx
import closure_2 from "../../../../../../../_runtime/00019_noop.js";
import { XboxLinkModalScenes } from "XboxLinkConstants.tsx";
import { PlatformTypes } from "../../../../../../Constants.tsx";
import { XBOX_CLIENT_SCOPES } from "../../../../../game_console/GameConsoleConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(closure_1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(closure_1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9236).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(navigation(9235).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9236).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};