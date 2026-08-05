// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(children) {
  let obj = require("../../useMessagePreviewHeight.tsx") /* useMessagePreviewHeightStore */;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  const tmp = createCacheKey();
  let num = 70;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = { header: null, contentStyles: null, children: null };
  obj = { title: null };
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.J3IOO1);
  obj[0] = jsx(require("../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj[1] = items;
  obj[2] = jsx(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(require("../../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, { title: null });
};