// discord_app/modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx
import MessageLoadingSpinnerDefault from "../../../../../components_native/common/MessageLoadingSpinner.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default noop.memo(() => {
  const tmp = closure_3();
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
