// === Module 12131: ChatInputGuardRequiredLobbyApplicationAuthorization ===

// Module 12131 (ChatInputGuardRequiredLobbyApplicationAuthorization)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4571 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let requiredLinkedLobbyApplication;

let size;
const Image = react_native.Image;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((requiredLinkedLobbyApplication) => {
  let connectionEntrypointUrl;
  let first;
  let shouldRelaunchLinkedLobbyApplication;
  let showLinkedLobbyApplicationLoadingIndicator;
  let obj = connectionEntrypointUrl(576);
  const cResult = obj.c(22);
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } = requiredLinkedLobbyApplication);
  const tmp4 = closure_5();
  if (!showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      let tmp6;
      if (cResult[1] !== requiredLinkedLobbyApplication) {
        const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
        cResult[1] = requiredLinkedLobbyApplication;
        cResult[2] = iconSource;
        tmp6 = iconSource;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        let tmp8;
        if (cResult[4] === tmp4) {
          tmp8 = cResult[5];
        }
        if (shouldRelaunchLinkedLobbyApplication) {
          let tmp21;
          if (cResult[6] !== requiredLinkedLobbyApplication.name) {
            const intl3 = tmp(1126).intl;
            const obj2 = { name: requiredLinkedLobbyApplication.name };
            const formatResult = intl3.format(connectionEntrypointUrl(1126).t["SU2mY/"], obj2);
            cResult[6] = requiredLinkedLobbyApplication.name;
            cResult[7] = formatResult;
            tmp21 = formatResult;
          } else {
            tmp21 = cResult[7];
          }
          if (cResult[8] === tmp8) {
            let tmp23;
            if (cResult[9] === tmp21) {
              tmp23 = cResult[10];
            }
            return tmp23;
          }
          const tmp26 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp8, message: tmp21 });
          cResult[8] = tmp8;
          cResult[9] = tmp21;
          cResult[10] = tmp26;
          tmp23 = tmp26;
        } else {
          let tmp12;
          let tmp14;
          let tmp16;
          connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
          if (cResult[11] !== requiredLinkedLobbyApplication.name) {
            const intl = tmp(1126).intl;
            const obj4 = { name: requiredLinkedLobbyApplication.name };
            const formatResult1 = intl.format(connectionEntrypointUrl(1126).t.EvDn1D, obj4);
            cResult[11] = requiredLinkedLobbyApplication.name;
            cResult[12] = formatResult1;
            tmp12 = formatResult1;
          } else {
            tmp12 = cResult[12];
          }
          if (cResult[13] !== connectionEntrypointUrl) {
            let stringResult;
            if (null != connectionEntrypointUrl) {
              const intl2 = tmp(1126).intl;
              stringResult = intl2.string(tmp(1126).t.S0W8Z5);
            }
            cResult[13] = connectionEntrypointUrl;
            cResult[14] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[14];
          }
          if (cResult[15] !== connectionEntrypointUrl) {
            let fn;
            if (null != connectionEntrypointUrl) {
              fn = () => {
                const obj = LinkingDefault;
                return obj.openURLExternally(connectionEntrypointUrl);
              };
            }
            cResult[15] = connectionEntrypointUrl;
            cResult[16] = fn;
            tmp16 = fn;
          } else {
            tmp16 = cResult[16];
          }
          if (cResult[17] === tmp8) {
            if (cResult[18] === tmp12) {
              if (cResult[19] === tmp14) {
                let tmp17;
                if (cResult[20] === tmp16) {
                  tmp17 = cResult[21];
                }
                return tmp17;
              }
            }
          }
          const tmp20 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp8, message: tmp12, actionLabel: tmp14, actionOnPress: tmp16 });
          cResult[17] = tmp8;
          cResult[18] = tmp12;
          cResult[19] = tmp14;
          cResult[20] = tmp16;
          cResult[21] = tmp20;
          tmp17 = tmp20;
        }
      }
      let tmp9;
      if (null != tmp6) {
        tmp9 = <Image style={tmp4.icon} source={tmp6} />;
      }
      cResult[3] = tmp6;
      cResult[4] = tmp4;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp30 = jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
    cResult[0] = tmp30;
    first = tmp30;
  } else {
    first = cResult[0];
  }
  return first;
}) : ((requiredLinkedLobbyApplication) => {
  let shouldRelaunchLinkedLobbyApplication;
  let showLinkedLobbyApplicationLoadingIndicator;
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } = requiredLinkedLobbyApplication);
  if (!showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      let tmp5;
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      if (null != iconSource) {
        tmp5 = <Image style={tmp.icon} source={iconSource} />;
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        ChatInputGuardDefault;
        const intl3 = connectionEntrypointUrl(1126).intl;
        const obj3 = { name: requiredLinkedLobbyApplication.name };
        return <tmp15 type="simple-action" icon={tmp5} message={intl3.format(connectionEntrypointUrl(1126).t["SU2mY/"], obj3)} />;
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        ChatInputGuardDefault;
        const intl = connectionEntrypointUrl(1126).intl;
        let stringResult;
        const obj5 = { name: requiredLinkedLobbyApplication.name };
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp10(1126).intl;
          stringResult = intl2.string(tmp10(1126).t.S0W8Z5);
        }
        let fn;
        if (null != connectionEntrypointUrl) {
          fn = () => {
            const obj = LinkingDefault;
            return obj.openURLExternally(connectionEntrypointUrl);
          };
        }
        return <tmp9 type="simple-action" icon={tmp5} message={intl.format(connectionEntrypointUrl(1126).t.EvDn1D, obj5)} actionLabel={stringResult} actionOnPress={fn} />;
      }
    }
  }
  return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;