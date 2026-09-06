// === Module 13768: NUFChannelsActionSheet ===

// Module 13768 (NUFChannelsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 13769 */;
import NUFChannelIllustrationDefault from "NUFChannelIllustration" /* 13770 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
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
    children: null
  };
  obj = { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null };
  const intl = markAsDismissed(1114).intl;
  obj.title = intl.string(markAsDismissed(1114).t.Ay9424);
  const intl2 = markAsDismissed(1114).intl;
  obj.description = intl2.string(markAsDismissed(1114).t.mufH2P);
  const intl3 = markAsDismissed(1114).intl;
  obj.CTALabel = intl3.string(markAsDismissed(1114).t.BddRzS);
  obj.onCTAPress = callback;
  obj.children = jsx(NUFTemplateV2Default, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(7150).BottomSheet, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
};