// === Module 13983: ChatInputGuardRequiredLobbyApplicationAuthorization ===

// Module 13983 (ChatInputGuardRequiredLobbyApplicationAuthorization)
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5704 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13971 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_4 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default noop.memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } = requiredLinkedLobbyApplication);
  if (!showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      if (null != iconSource) {
        const obj = { style: tmp.icon, source: iconSource };
        const tmp6 = jsx(FastImageDefault, { style: tmp.icon, source: iconSource });
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        const obj2 = { type: "simple-action", icon: tmp6, message: null };
        const intl3 = connectionEntrypointUrl(1114).intl;
        const obj3 = { name: requiredLinkedLobbyApplication.name };
        obj2.message = intl3.format(connectionEntrypointUrl(1114).t["SU2mY/"], obj3);
        return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp6, message: null });
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        const obj4 = { type: "simple-action", icon: tmp6, message: null, actionLabel: null, actionOnPress: null };
        const intl = connectionEntrypointUrl(1114).intl;
        const obj5 = { name: requiredLinkedLobbyApplication.name };
        obj4.message = intl.format(connectionEntrypointUrl(1114).t.EvDn1D, obj5);
        let stringResult;
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp11(1114).intl;
          stringResult = intl2.string(tmp11(1114).t.S0W8Z5);
        }
        obj4.actionLabel = stringResult;
        let fn;
        if (null != connectionEntrypointUrl) {
          fn = () => LinkingDefault.openURLExternally(connectionEntrypointUrl);
        }
        obj4.actionOnPress = fn;
        return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp6, message: null, actionLabel: null, actionOnPress: null });
      }
    }
  }
  return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
});