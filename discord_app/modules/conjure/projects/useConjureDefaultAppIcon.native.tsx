// discord_app/modules/conjure/projects/useConjureDefaultAppIcon.native.tsx
import conjureDefaultAppIcon2 from "conjureDefaultAppIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureDefaultAppIcon.native.tsx");

export default function useConjureDefaultAppIcon(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  token = require("useToken").useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const items = [arg0, arg1, token];
  return noop.useMemo(() => {
    const conjureDefaultAppIcon = conjureDefaultAppIcon2.getConjureDefaultAppIcon(closure_0, closure_1);
    const obj2 = { character: conjureDefaultAppIcon.character };
    const merged = Object.assign(
      conjureDefaultAppIcon2.getConjureDefaultAppIconColors(conjureDefaultAppIcon.color, token),
    );
    return obj2;
  }, items);
}
