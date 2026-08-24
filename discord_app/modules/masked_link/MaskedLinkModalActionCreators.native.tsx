// discord_app/modules/masked_link/MaskedLinkModalActionCreators.native.tsx
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import closure_2 from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
const result = require("set").fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = React.lazy(() => callback(paths[3])(paths[2], paths.paths));
    useAlertStore.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};