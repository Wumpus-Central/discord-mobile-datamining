// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError from "../TwoWayLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const XboxLinkModalScenes = fn(8735).XboxLinkModalScenes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      const cResult = c.c(5);
      onClose = onClose.onClose;
      const navigation = useNavigation.useNavigation();
      const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.INwPCV);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.GyXRRz);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp6 = stringResult;
        tmp7 = stringResult1;
      } else {
        [tmp6, tmp7] = cResult;
      }
      if (cResult[2] === onClose) {
        if (cResult[3] === connectRetry) {
          let tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = jsx(TwoWayLinkError.TwoWayLinkError, { title: tmp6, body: tmp7, onClose, onRetry: connectRetry });
      cResult[2] = onClose;
      cResult[3] = connectRetry;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : (onClose) => {
      const navigation = useNavigation.useNavigation();
      const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
      const obj3 = { title: null, body: null, onClose: null, onRetry: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.INwPCV);
      const intl2 = util.intl;
      obj3.body = intl2.string(util.t.GyXRRz);
      obj3.onClose = onClose.onClose;
      obj3.onRetry = connectRetry;
      return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
    };
