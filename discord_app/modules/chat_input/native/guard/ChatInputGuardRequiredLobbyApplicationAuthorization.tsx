// discord_app/modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { ChatInputGuard } from "ChatInputGuard.tsx";

const require = arg1;
let obj = { icon: null };
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  let shouldRelaunchLinkedLobbyApplication;
  let showLinkedLobbyApplicationLoadingIndicator;
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } = requiredLinkedLobbyApplication);
  if (!showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      if (null != iconSource) {
        let obj = { style: null, source: null };
        obj[0] = tmp.icon;
        obj[1] = iconSource;
        const tmp5 = <Image style={null} source={null} />;
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        obj = { type: "simple-action", icon: null, message: null };
        obj[1] = tmp5;
        const intl3 = connectionEntrypointUrl(1236).intl;
        obj = { name: null };
        obj[0] = requiredLinkedLobbyApplication.name;
        obj[2] = intl3.format(connectionEntrypointUrl(1236).t["SU2mY/"], obj);
        return jsx(ChatInputGuard, { name: null });
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        const obj1 = { type: "simple-action", icon: null, message: null, actionLabel: null, actionOnPress: null };
        obj1[1] = tmp5;
        const intl = connectionEntrypointUrl(1236).intl;
        const obj2 = { name: null };
        obj2[0] = requiredLinkedLobbyApplication.name;
        obj1[2] = intl.format(connectionEntrypointUrl(1236).t.EvDn1D, obj2);
        let stringResult;
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp10(1236).intl;
          stringResult = intl2.string(tmp10(1236).t.S0W8Z5);
        }
        obj1[3] = stringResult;
        let fn;
        if (null != connectionEntrypointUrl) {
          fn = () => outer1_1(outer1_2[7]).openURLExternally(connectionEntrypointUrl);
        }
        obj1[4] = fn;
        return jsx(ChatInputGuard, { type: "simple-action", icon: null, message: null, actionLabel: null, actionOnPress: null });
      }
    }
  }
  return jsx(ChatInputGuard, { type: "simple-action", message: "" });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;