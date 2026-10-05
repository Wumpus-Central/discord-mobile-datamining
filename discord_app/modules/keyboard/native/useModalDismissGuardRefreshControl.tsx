// discord_app/modules/keyboard/native/useModalDismissGuardRefreshControl.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PortalKeyboardModalContext from "PortalKeyboardModalContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function noop() {}
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = PortalKeyboardModalContext;
      const isPortalKeyboardInModal = obj2.useIsPortalKeyboardInModal();
      if (cResult[0] !== isPortalKeyboardInModal) {
        let tmp6;
        if (isPortalKeyboardInModal) {
          const tmpResult = PlatformUtils;
          if (tmpResult.isIOS()) {
            tmp6 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
          }
        }
        cResult[0] = isPortalKeyboardInModal;
        cResult[1] = tmp6;
        tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let isPortalKeyboardInModal;
      let obj = isPortalKeyboardInModal(9926);
      isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
      const items = [isPortalKeyboardInModal];
      return react.useMemo(() => {
        let tmp;
        if (isPortalKeyboardInModal) {
          const obj = PlatformUtils;
          if (obj.isIOS()) {
            tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
          }
        }
        return tmp;
      }, items);
    };
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = tmp2;
