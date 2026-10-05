// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import intl3 from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError2 from "../TwoWayLinkError.tsx";
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let navigation, onClose;

const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(5);
      onClose = onClose.onClose;
      const obj2 = useNavigation;
      navigation = obj2.useNavigation();
      const obj3 = useConnectRetry;
      const connectRetry = obj3.useConnectRetry(navigation, constants.PRE_CONNECT);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["8YK70c"]);
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t.moyYLf);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp6 = stringResult;
        tmp7 = stringResult1;
      } else {
        [tmp6, tmp7] = cResult;
      }
      if (cResult[2] === onClose) {
        let tmp10;
        if (cResult[3] === connectRetry) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = jsx(TwoWayLinkError2.TwoWayLinkError, { title: tmp6, body: tmp7, onClose, onRetry: connectRetry });
      cResult[2] = onClose;
      cResult[3] = connectRetry;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : (onClose) => {
      onClose = onClose.onClose;
      const obj = useNavigation;
      navigation = obj.useNavigation();
      const obj2 = useConnectRetry;
      const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
      const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
      const intl = intl3.intl;
      const intl2 = intl3.intl;
      return (
        <TwoWayLinkError
          title={intl.string(intl3.t["8YK70c"])}
          body={intl2.string(intl3.t.moyYLf)}
          onClose={onClose}
          onRetry={connectRetry}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx",
);

export default tmp3;
