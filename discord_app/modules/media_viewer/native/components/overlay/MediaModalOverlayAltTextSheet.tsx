// === Module 11098: MediaViewerAltTextSheet ===

// Module 11098 (MediaViewerAltTextSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4444 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5589 */;
import Background from "Background" /* 5590 */;
import useMessagePreviewHeightStore from "useMessagePreviewHeightStore" /* 11099 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(children) {
  let obj = useMessagePreviewHeightStore;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  const tmp = callback();
  let num = 70;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = { header: null, contentStyles: null, children: null };
  obj = { title: null };
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(getSystemLocale.t.J3IOO1);
  obj[0] = jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj[1] = items;
  obj[2] = jsx(Text.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(Background.BottomSheet, { title: null });
};