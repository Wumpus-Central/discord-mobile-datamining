// discord_app/modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NUFChannelIllustrationDefault from "NUFChannelIllustration.tsx";
import NUFTemplateV2Default from "NUFTemplateV2.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const tmp = markAsDismissed;
      let obj = markAsDismissed(576);
      const cResult = obj.c(13);
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (cResult[0] !== markAsDismissed) {
        const fn = function o() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.UNKNOWN);
          }
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== markAsDismissed) {
        const fn2 = function u() {
          let tmpResult;
          if (markAsDismissed != null) {
            tmpResult = tmp(ContentDismissActionType.UNKNOWN);
          }
          return tmpResult;
        };
        cResult[2] = markAsDismissed;
        cResult[3] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = jsx(NUFChannelIllustrationDefault, {});
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.Ay9424);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.mufH2P);
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.BddRzS);
        cResult[4] = tmp12;
        cResult[5] = stringResult;
        cResult[6] = stringResult1;
        cResult[7] = stringResult2;
        tmp9 = stringResult2;
        tmp8 = stringResult1;
        tmp7 = stringResult;
        tmp6 = tmp12;
      } else {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        const tmp19 = jsx(NUFTemplateV2Default, {
          illustration: tmp6,
          title: tmp7,
          description: tmp8,
          CTALabel: tmp9,
          onCTAPress: tmp4,
        });
        cResult[8] = tmp4;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        let tmp20;
        if (cResult[11] === tmp16) {
          tmp20 = cResult[12];
        }
        return tmp20;
      }
      const tmp21 = jsx(tmp(6652).BottomSheet, { onDismiss: tmp5, startExpanded: true, children: tmp16 });
      cResult[10] = tmp5;
      cResult[11] = tmp16;
      cResult[12] = tmp21;
      tmp20 = tmp21;
    }
  : (markAsDismissed) => {
      let intl;
      let intl2;
      let intl3;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const items = [markAsDismissed];
      const callback = react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.UNKNOWN);
        }
      }, items);
      BottomSheet = markAsDismissed(6652).BottomSheet;
      ({
        illustration: null,
        title: intl.string(markAsDismissed(1126).t.Ay9424),
        description: intl2.string(markAsDismissed(1126).t.mufH2P),
        CTALabel: intl3.string(markAsDismissed(1126).t.BddRzS),
        onCTAPress: callback,
      });
      const tmp2 = NUFTemplateV2Default;
      intl = markAsDismissed(1126).intl;
      intl2 = markAsDismissed(1126).intl;
      intl3 = markAsDismissed(1126).intl;
      return (
        <BottomSheet
          onDismiss={function onDismiss() {
            let tmpResult;
            if (markAsDismissed != null) {
              tmpResult = tmp(ContentDismissActionType.UNKNOWN);
            }
            return tmpResult;
          }}
          startExpanded
        >
          {null}
        </BottomSheet>
      );
    };
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default tmp2;
