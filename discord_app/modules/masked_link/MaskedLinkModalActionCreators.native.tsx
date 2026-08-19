// === Module 12423: ? ===

// Module 12423
import useAlertStore from "useAlertStore" /* 4657 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = React.lazy(() => callback(paths[3])(paths[2], paths.paths));
    useAlertStore.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};