// discord_app/modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NUFChannelIllustrationDefault from "NUFChannelIllustration.tsx";
import NUFTemplateV2Default from "NUFTemplateV2.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(13);
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (cResult[0] !== markAsDismissed) {
        const fn = function o() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (markAsDismissed != null) {
            tmp2(ContentDismissActionType.UNKNOWN);
          }
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        let tmp4 = fn;
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
        let tmp5 = fn2;
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
        let tmp9 = stringResult2;
        let tmp8 = stringResult1;
        let tmp7 = stringResult;
        let tmp6 = tmp12;
      } else {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        const obj2 = { illustration: tmp6, title: tmp7, description: tmp8, CTALabel: tmp9, onCTAPress: tmp4 };
        const tmp19 = jsx(NUFTemplateV2Default, {
          illustration: tmp6,
          title: tmp7,
          description: tmp8,
          CTALabel: tmp9,
          onCTAPress: tmp4,
        });
        cResult[8] = tmp4;
        cResult[9] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp16) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
      const tmp21 = jsx(markAsDismissed(6645).BottomSheet, { onDismiss: tmp5, startExpanded: true, children: tmp16 });
      cResult[10] = tmp5;
      cResult[11] = tmp16;
      cResult[12] = tmp21;
      tmp20 = tmp21;
      let obj = markAsDismissed(576);
    }
  : (markAsDismissed) => {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const items = [markAsDismissed];
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.UNKNOWN);
        }
      }, items);
      let obj = {
        onDismiss() {
          let tmpResult;
          if (markAsDismissed != null) {
            tmpResult = tmp(ContentDismissActionType.UNKNOWN);
          }
          return tmpResult;
        },
        startExpanded: true,
        children: null,
      };
      const obj2 = {
        illustration: jsx(NUFChannelIllustrationDefault, {}),
        title: null,
        description: null,
        CTALabel: null,
        onCTAPress: null,
      };
      const intl = markAsDismissed(1126).intl;
      obj2.title = intl.string(markAsDismissed(1126).t.Ay9424);
      const intl2 = markAsDismissed(1126).intl;
      obj2.description = intl2.string(markAsDismissed(1126).t.mufH2P);
      const intl3 = markAsDismissed(1126).intl;
      obj2.CTALabel = intl3.string(markAsDismissed(1126).t.BddRzS);
      obj2.onCTAPress = callback;
      obj.children = jsx(NUFTemplateV2Default, {
        illustration: jsx(NUFChannelIllustrationDefault, {}),
        title: null,
        description: null,
        CTALabel: null,
        onCTAPress: null,
      });
      return jsx(markAsDismissed(6645).BottomSheet, {
        onDismiss() {
          let tmpResult;
          if (markAsDismissed != null) {
            tmpResult = tmp(ContentDismissActionType.UNKNOWN);
          }
          return tmpResult;
        },
        startExpanded: true,
        children: null,
      });
    };
