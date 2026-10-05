// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import BottomSheetTitleHeader2 from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useMessagePreviewHeight from "../../useMessagePreviewHeight.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let BottomSheet, description;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (description) => {
      let first;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(11);
      description = description.description;
      const tmp4 = closure_3();
      const obj2 = useMessagePreviewHeight;
      const messagePreviewCollapsedheight = obj2.useMessagePreviewCollapsedheight();
      let num = 70;
      const obj3 = useIsScreenLandscape;
      if (!obj3.useIsScreenLandscape()) {
        num = messagePreviewCollapsedheight + 20 + 50;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
        const intl = intl2.intl;
        const tmp8 = <BottomSheetTitleHeader title={intl.string(intl2.t.J3IOO1)} />;
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== num) {
        const obj5 = { minHeight: num };
        cResult[1] = num;
        cResult[2] = obj5;
        tmp9 = obj5;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp10;
        let tmp11;
        if (cResult[4] === tmp9) {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== description) {
          const tmp13 = jsx(Text_Text.Text, {
            accessibilityRole: "text",
            variant: "text-md/normal",
            children: description,
          });
          cResult[6] = description;
          cResult[7] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === tmp10) {
          let tmp14;
          if (cResult[9] === tmp11) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
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
    }
  : (description) => {
      let intl;
      description = description.description;
      const tmp = closure_3();
      const obj = useMessagePreviewHeight;
      const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
      let num = 70;
      const obj2 = useIsScreenLandscape;
      if (!obj2.useIsScreenLandscape()) {
        num = messagePreviewCollapsedheight + 20 + 50;
      }
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      ({ title: intl.string(intl2.t.J3IOO1) });
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl2.intl;
      const items = [tmp.container, { minHeight: num }];
      return (
        <BottomSheet header={null} contentStyles={items}>
          {null}
        </BottomSheet>
      );
    };
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx",
);

export default tmp3;
