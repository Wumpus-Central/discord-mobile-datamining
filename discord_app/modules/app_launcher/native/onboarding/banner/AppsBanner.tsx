// discord_app/modules/app_launcher/native/onboarding/banner/AppsBanner.tsx
import util from "../../../../../intl/index.native.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const obj = { text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.sjRwMJ);
  return jsx(BannerBaseDefault, { text: null });
}
