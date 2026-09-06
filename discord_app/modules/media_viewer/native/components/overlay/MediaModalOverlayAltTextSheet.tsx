// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useMessagePreviewHeight from "../../useMessagePreviewHeight.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx",
);

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
  obj.children = jsx(Text_Text.Text, {
    accessibilityRole: "text",
    variant: "text-md/normal",
    children: children.description,
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { title: null });
}
