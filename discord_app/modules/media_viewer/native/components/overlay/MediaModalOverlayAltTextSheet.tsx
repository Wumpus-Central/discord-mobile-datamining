// === Module 11016: MediaModalOverlayAltTextSheet ===

// Module 11016 (MediaModalOverlayAltTextSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6565 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6566 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11017 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { container: { padding: nativeDefault.space.PX_16 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(children) {
  const tmp = closure_3();
  const messagePreviewCollapsedheight = useMessagePreviewHeight.useMessagePreviewCollapsedheight();
  let num = 70;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  const obj3 = { header: null, contentStyles: null, children: null };
  const obj4 = { title: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.J3IOO1);
  obj3.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj3.contentStyles = items;
  obj3.children = jsx(Text_Text.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(Sheet_BottomSheet.BottomSheet, { header: null, contentStyles: null, children: null });
};