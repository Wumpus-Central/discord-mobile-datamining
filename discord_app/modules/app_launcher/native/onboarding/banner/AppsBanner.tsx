// === Module 11739: AppsBanner ===

// Module 11739 (AppsBanner)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import BannerBaseDefault from "BannerBase" /* 11737 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppsBaner() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { text: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.sjRwMJ);
    const tmp8 = jsx(BannerBaseDefault, { text: null });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function AppsBaner() {
  const obj = { text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.sjRwMJ);
  return jsx(BannerBaseDefault, { text: null });
});