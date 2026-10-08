// discord_app/design/components/Modal/native/Modal.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../Navigator/native/NavigatorConstants.native.tsx";
import Navigator from "../../Navigator/native/Navigator.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = ReactCompilerGating.isReactCompilerEnabled()
  ? function Modal(arg0) {
      const cResult = c.c(5);
      const sum = NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top;
      if (cResult[0] !== sum) {
        const obj2 = { height: sum };
        cResult[0] = sum;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp6) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const obj3 = {};
      const merged = Object.assign(arg0);
      obj3.headerStyle = tmp6;
      const tmp9 = jsx(Navigator.Navigator, {});
      cResult[2] = arg0;
      cResult[3] = tmp6;
      cResult[4] = tmp9;
      tmp7 = tmp9;
      const tmp4 = useSafeAreaInsetsDefault();
    }
  : function Modal(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const tmp = useSafeAreaInsetsDefault();
      obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
      return jsx(Navigator.Navigator, {});
    };
