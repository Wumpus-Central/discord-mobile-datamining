// === Module 12460: ChatInputGuardRequiredLobbyApplicationAuthorization ===

// Module 12460 (ChatInputGuardRequiredLobbyApplicationAuthorization)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12448 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_5 = createStyles.createStyles(obj);
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
        let obj = { style: tmp.icon, source: iconSource };
        const tmp5 = <Image style={tmp.icon} source={iconSource} />;
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        obj = { type: "simple-action", icon: tmp5, message: null };
        const intl3 = connectionEntrypointUrl(1114).intl;
        obj = { name: requiredLinkedLobbyApplication.name };
        obj.message = intl3.format(connectionEntrypointUrl(1114).t["SU2mY/"], obj);
        return jsx(ChatInputGuardDefault, { name: requiredLinkedLobbyApplication.name });
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        const obj1 = { type: "simple-action", icon: tmp5, message: null, actionLabel: null, actionOnPress: null };
        const intl = connectionEntrypointUrl(1114).intl;
        const obj2 = { name: requiredLinkedLobbyApplication.name };
        obj1.message = intl.format(connectionEntrypointUrl(1114).t.EvDn1D, obj2);
        let stringResult;
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp10(1114).intl;
          stringResult = intl2.string(tmp10(1114).t.S0W8Z5);
        }
        obj1.actionLabel = stringResult;
        let fn;
        if (null != connectionEntrypointUrl) {
          fn = () => LinkingDefault.openURLExternally(connectionEntrypointUrl);
        }
        obj1.actionOnPress = fn;
        return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp5, message: null, actionLabel: null, actionOnPress: null });
      }
    }
  }
  return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
});