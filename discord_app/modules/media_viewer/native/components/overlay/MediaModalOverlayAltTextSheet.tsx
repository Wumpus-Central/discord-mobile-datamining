// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useMessagePreviewHeight from "../../useMessagePreviewHeight.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: { padding: nativeDefault.space.PX_16 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (description) => {
      const cResult = c.c(11);
      description = description.description;
      const tmp4 = closure_3();
      const messagePreviewCollapsedheight = useMessagePreviewHeight.useMessagePreviewCollapsedheight();
      let num = 70;
      if (!obj3.useIsScreenLandscape()) {
        num = messagePreviewCollapsedheight + 20 + 50;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { title: null };
        const intl = util.intl;
        obj4.title = intl.string(util.t.J3IOO1);
        const tmp8 = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== num) {
        const obj5 = { minHeight: num };
        cResult[1] = num;
        cResult[2] = obj5;
        let tmp9 = obj5;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp9) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] !== description) {
          const obj6 = { accessibilityRole: "text", variant: "text-md/normal", children: description };
          const tmp13 = jsx(Text_Text.Text, {
            accessibilityRole: "text",
            variant: "text-md/normal",
            children: description,
          });
          cResult[6] = description;
          cResult[7] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === tmp10) {
          if (cResult[9] === tmp11) {
            let tmp14 = cResult[10];
          }
          return tmp14;
        }
        const obj7 = { header: first, contentStyles: tmp10, children: tmp11 };
        const tmp16 = jsx(Sheet_BottomSheet.BottomSheet, { header: first, contentStyles: tmp10, children: tmp11 });
        cResult[8] = tmp10;
        cResult[9] = tmp11;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const items = [tmp4.container, tmp9];
      cResult[3] = tmp4.container;
      cResult[4] = tmp9;
      cResult[5] = items;
      tmp10 = items;
      obj3 = useIsScreenLandscape;
    }
  : (children) => {
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
    };
