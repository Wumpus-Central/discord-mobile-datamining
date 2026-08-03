// === Module 12411: ? ===

// Module 12411
import noop from "noop";
import { jsx } from "jsxProd";

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
    require(4596) /* useAlertStore */.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};