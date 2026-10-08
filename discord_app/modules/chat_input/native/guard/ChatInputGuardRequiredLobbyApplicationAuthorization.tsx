// discord_app/modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
        const cResult = connectionEntrypointUrl(576).c(22);
        requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
        ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } =
          requiredLinkedLobbyApplication);
        const tmp4 = closure_4();
        if (!showLinkedLobbyApplicationLoadingIndicator) {
          if (null != requiredLinkedLobbyApplication) {
            if (cResult[1] !== requiredLinkedLobbyApplication) {
              const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
              cResult[1] = requiredLinkedLobbyApplication;
              cResult[2] = iconSource;
              let tmp6 = iconSource;
            } else {
              tmp6 = cResult[2];
            }
            if (cResult[3] === tmp6) {
              if (cResult[4] === tmp4) {
                let tmp8 = cResult[5];
              }
              if (shouldRelaunchLinkedLobbyApplication) {
                if (cResult[6] !== requiredLinkedLobbyApplication.name) {
                  const intl3 = tmp(1126).intl;
                  const obj2 = { name: requiredLinkedLobbyApplication.name };
                  const formatResult = intl3.format(tmp(1126).t["SU2mY/"], obj2);
                  cResult[6] = requiredLinkedLobbyApplication.name;
                  cResult[7] = formatResult;
                  let tmp21 = formatResult;
                } else {
                  tmp21 = cResult[7];
                }
                if (cResult[8] === tmp8) {
                  if (cResult[9] === tmp21) {
                    let tmp23 = cResult[10];
                  }
                  return tmp23;
                }
                const obj3 = { type: "simple-action", icon: tmp8, message: tmp21 };
                const tmp26 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp8, message: tmp21 });
                cResult[8] = tmp8;
                cResult[9] = tmp21;
                cResult[10] = tmp26;
                tmp23 = tmp26;
              } else {
                connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
                if (cResult[11] !== requiredLinkedLobbyApplication.name) {
                  const intl = tmp(1126).intl;
                  const obj4 = { name: requiredLinkedLobbyApplication.name };
                  const formatResult1 = intl.format(tmp(1126).t.EvDn1D, obj4);
                  cResult[11] = requiredLinkedLobbyApplication.name;
                  cResult[12] = formatResult1;
                  let tmp12 = formatResult1;
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
                  let tmp14 = stringResult;
                } else {
                  tmp14 = cResult[14];
                }
                if (cResult[15] !== connectionEntrypointUrl) {
                  let fn;
                  if (null != connectionEntrypointUrl) {
                    fn = () => LinkingDefault.openURLExternally(connectionEntrypointUrl);
                  }
                  cResult[15] = connectionEntrypointUrl;
                  cResult[16] = fn;
                  let tmp16 = fn;
                } else {
                  tmp16 = cResult[16];
                }
                if (cResult[17] === tmp8) {
                  if (cResult[18] === tmp12) {
                    if (cResult[19] === tmp14) {
                      if (cResult[20] === tmp16) {
                        let tmp17 = cResult[21];
                      }
                      return tmp17;
                    }
                  }
                }
                const obj5 = {
                  type: "simple-action",
                  icon: tmp8,
                  message: tmp12,
                  actionLabel: tmp14,
                  actionOnPress: tmp16,
                };
                const tmp20 = jsx(ChatInputGuardDefault, {
                  type: "simple-action",
                  icon: tmp8,
                  message: tmp12,
                  actionLabel: tmp14,
                  actionOnPress: tmp16,
                });
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
              const obj6 = { style: tmp4.icon, source: tmp6 };
              tmp9 = jsx(FastImageDefault, { style: tmp4.icon, source: tmp6 });
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
          let first = tmp30;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
        requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
        let connectionEntrypointUrl;
        ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } =
          requiredLinkedLobbyApplication);
        if (!showLinkedLobbyApplicationLoadingIndicator) {
          if (null != requiredLinkedLobbyApplication) {
            const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
            if (null != iconSource) {
              const obj = { style: tmp.icon, source: iconSource };
              const tmp6 = jsx(FastImageDefault, { style: tmp.icon, source: iconSource });
            }
            if (shouldRelaunchLinkedLobbyApplication) {
              const obj2 = { type: "simple-action", icon: tmp6, message: null };
              const intl3 = connectionEntrypointUrl(1126).intl;
              const obj3 = { name: requiredLinkedLobbyApplication.name };
              obj2.message = intl3.format(connectionEntrypointUrl(1126).t["SU2mY/"], obj3);
              return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp6, message: null });
            } else {
              connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
              const obj4 = { type: "simple-action", icon: tmp6, message: null, actionLabel: null, actionOnPress: null };
              const intl = connectionEntrypointUrl(1126).intl;
              const obj5 = { name: requiredLinkedLobbyApplication.name };
              obj4.message = intl.format(connectionEntrypointUrl(1126).t.EvDn1D, obj5);
              let stringResult;
              if (null != connectionEntrypointUrl) {
                const intl2 = tmp11(1126).intl;
                stringResult = intl2.string(tmp11(1126).t.S0W8Z5);
              }
              obj4.actionLabel = stringResult;
              let fn;
              if (null != connectionEntrypointUrl) {
                fn = () => LinkingDefault.openURLExternally(connectionEntrypointUrl);
              }
              obj4.actionOnPress = fn;
              return jsx(ChatInputGuardDefault, {
                type: "simple-action",
                icon: tmp6,
                message: null,
                actionLabel: null,
                actionOnPress: null,
              });
            }
          }
        }
        return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
      },
);
