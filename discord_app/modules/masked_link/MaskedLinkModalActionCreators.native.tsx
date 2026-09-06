// discord_app/modules/masked_link/MaskedLinkModalActionCreators.native.tsx
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[2], paths.paths));
    useAlertStore.openAlert(
      "masked-link",
      <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />,
      onCancel,
    );
  },
};
