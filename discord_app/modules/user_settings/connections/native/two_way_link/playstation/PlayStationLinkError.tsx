// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../../Constants.tsx";
import intl4 from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError2 from "../TwoWayLinkError.tsx";
import PlayStationLinkConstants from "PlayStationLinkConstants.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const AbortCodes = Constants.AbortCodes;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let errorCode;
      let onClose;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      ({ onClose, errorCode } = arg0);
      const obj2 = useNavigation;
      navigation = obj2.useNavigation();
      const obj3 = useConnectRetry;
      const connectRetry = obj3.useConnectRetry(navigation, constants.PRE_CONNECT);
      if (cResult[0] !== errorCode) {
        let stringResult;
        if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t["3dIn2A"]);
        } else {
          const intl = intl4.intl;
          stringResult = intl.string(intl4.t.qE9nqE);
        }
        cResult[0] = errorCode;
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult1 = intl3.string(intl4.t.eY3qHd);
        cResult[2] = stringResult1;
        tmp9 = stringResult1;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        if (cResult[4] === onClose) {
          let tmp11;
          if (cResult[5] === connectRetry) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      const tmp12 = jsx(TwoWayLinkError2.TwoWayLinkError, { title: tmp9, body: tmp6, onClose, onRetry: connectRetry });
      cResult[3] = tmp6;
      cResult[4] = onClose;
      cResult[5] = connectRetry;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (arg0) => {
      let errorCode;
      let onClose;
      let stringResult;
      ({ onClose, errorCode } = arg0);
      const obj = useNavigation;
      navigation = obj.useNavigation();
      const obj2 = useConnectRetry;
      const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
      if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
        const intl2 = intl4.intl;
        stringResult = intl2.string(intl4.t["3dIn2A"]);
      } else {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.qE9nqE);
      }
      const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
      const intl3 = intl4.intl;
      return (
        <TwoWayLinkError
          title={intl3.string(intl4.t.eY3qHd)}
          body={stringResult}
          onClose={onClose}
          onRetry={connectRetry}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx",
);

export const PlayStationLinkError = tmp3;
