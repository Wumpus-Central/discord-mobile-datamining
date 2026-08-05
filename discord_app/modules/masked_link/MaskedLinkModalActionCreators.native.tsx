// discord_app/modules/masked_link/MaskedLinkModalActionCreators.native.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { useAlertStore } from "../../design/components/AlertModal/native/useAlertStore.native.tsx";

const require = arg1;
const result = require("MaskedLinkModal").fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    let isProtocol;
    let onConfirm;
    let trustUrl;
    let url;
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = React.lazy(() => callback(paths[3])(paths[2], paths.paths));
    useAlertStore.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};