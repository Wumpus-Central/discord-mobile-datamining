// discord_app/modules/masked_link/MaskedLinkModalActionCreators.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import react from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = Fragment.jsx;
let obj = {
  show(onCancel) {
    let isProtocol;
    let onConfirm;
    let paths;
    let trustUrl;
    let url;
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    react.lazy(() => require("asyncRequire")(paths[2], paths.paths));
    const obj = useAlertStore;
    obj.openAlert(
      "masked-link",
      <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />,
      onCancel,
    );
  },
};
const result = size.fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default obj;
