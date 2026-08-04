// discord_app/modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { icon: null };
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  if (!requiredLinkedLobbyApplication.showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
      let tmp8Result;
      if (null != iconSource) {
        let obj = { style: null, source: null };
        obj[0] = tmp.icon;
        obj[1] = iconSource;
        tmp8Result = tmp8(Image, obj);
      }
      obj = { type: "simple-action", icon: null, message: null, actionLabel: null, actionOnPress: null };
      obj[1] = tmp8Result;
      const intl = connectionEntrypointUrl(1236).intl;
      obj = { name: null };
      obj[0] = requiredLinkedLobbyApplication.name;
      obj[2] = intl.format(connectionEntrypointUrl(1236).t.EvDn1D, obj);
      let stringResult;
      if (null != connectionEntrypointUrl) {
        const intl2 = tmp5(1236).intl;
        stringResult = intl2.string(tmp5(1236).t.S0W8Z5);
      }
      obj[3] = stringResult;
      let fn;
      if (null != connectionEntrypointUrl) {
        fn = () => outer1_1(outer1_2[7]).openURLExternally(connectionEntrypointUrl);
      }
      obj[4] = fn;
      return jsx(importDefault(11553), { name: null });
    }
  }
  return jsx(importDefault(11553), { type: "simple-action", message: "" });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;