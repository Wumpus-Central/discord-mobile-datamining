// discord_app/modules/media_engine/VideoGuardBannerPresenter.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import dispatcherDefault from "../toast/native/ToastActionCreators.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import articleURL from "VideoGuardExperiment.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function VideoGuardBannerContent() {
  let obj = { variant: "text-sm/normal", style: callback2().toastText, children: null };
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.UoW002), " ", ];
  const intl2 = getSystemLocale.intl;
  obj = { helpdeskArticle: articleURL.VIDEO_GUARD_HELP_ARTICLE_URL };
  items[2] = intl2.format(getSystemLocale.t.BPDKoA, obj);
  obj[2] = items;
  return callback(Text.Text, obj);
}
noopAll;
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { toastText: null };
createCacheKey = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/media_engine/VideoGuardBannerPresenter.native.tsx");

export const presentVideoGuardBanner = function presentVideoGuardBanner() {
  let obj = dispatcherDefault;
  obj = {
    key: "VIDEO_GUARD_BANNER",
    content() {
      return callback(closure_6, {});
    },
    toastDurationMs: 6000,
    position: "top"
  };
  obj.open(obj);
};