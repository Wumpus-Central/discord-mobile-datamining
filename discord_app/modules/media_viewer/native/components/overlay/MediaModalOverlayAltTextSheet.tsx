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
const createStyles = fn(4638);
const obj2 = { container: { padding: nativeDefault.space.PX_16 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx",
);

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
  obj3.children = jsx(Text_Text.Text, {
    accessibilityRole: "text",
    variant: "text-md/normal",
    children: children.description,
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { header: null, contentStyles: null, children: null });
}
