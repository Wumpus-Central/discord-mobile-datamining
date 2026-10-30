// discord_app/modules/conjure/templates/useConjureTemplatePrepare.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const prepareTemplate = fn(10830).prepareTemplate;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/templates/useConjureTemplatePrepare.tsx");

export default function useConjureTemplatePrepare(arg0, arg1, arg2) {
  noop = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const items = [arg0, arg1, arg2];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      prepareTemplate(closure_0, closure_1);
    }
  }, items);
}
