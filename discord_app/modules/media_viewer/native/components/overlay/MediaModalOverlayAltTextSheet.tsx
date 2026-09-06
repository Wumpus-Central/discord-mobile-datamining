// === Module 11536: MediaModalOverlayAltTextSheet ===

// Module 11536 (MediaModalOverlayAltTextSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11537 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(children) {
  let obj = useMessagePreviewHeight;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  const tmp = closure_3();
  let num = 70;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = { header: null, contentStyles: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.J3IOO1);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj.contentStyles = items;
  obj.children = jsx(Text_Text.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(Sheet_BottomSheet.BottomSheet, { title: null });
};