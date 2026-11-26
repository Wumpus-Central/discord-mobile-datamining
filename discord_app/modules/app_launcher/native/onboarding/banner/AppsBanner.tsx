// === Module 13026: AppsBanner ===

// Module 13026 (AppsBanner)
import util from "util" /* 1112 */;
import BannerBaseDefault from "BannerBase" /* 13024 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const obj = { text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.sjRwMJ);
  return jsx(BannerBaseDefault, { text: null });
};