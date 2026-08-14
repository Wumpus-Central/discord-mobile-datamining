// discord_app/modules/media_engine/VideoGuardBannerPresenter.native.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { dispatcher } from "../toast/native/ToastActionCreators.tsx";
import { articleURL } from "VideoGuardExperiment.tsx";

let c3;
let c4;
const require = arg1;
function VideoGuardBannerContent() {
  let obj = { variant: "text-sm/normal", style: createCacheKey().toastText, children: null };
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.UoW002), " ", ];
  const intl2 = getSystemLocale.intl;
  obj = { helpdeskArticle: null };
  obj[0] = articleURL.VIDEO_GUARD_HELP_ARTICLE_URL;
  items[2] = intl2.format(getSystemLocale.t.BPDKoA, obj);
  obj[2] = items;
  return callback(Text.Text, obj);
}
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { toastText: null };
createCacheKey = { marginRight: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/media_engine/VideoGuardBannerPresenter.native.tsx");

export const presentVideoGuardBanner = function presentVideoGuardBanner() {
  let obj = dispatcher;
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