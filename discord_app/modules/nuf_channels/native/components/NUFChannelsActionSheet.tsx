// === Module 13857: NUFChannelsActionSheet ===

// Module 13857 (NUFChannelsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 13858 */;
import NUFChannelIllustrationDefault from "NUFChannelIllustration" /* 13859 */;
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
  const obj2 = { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null };
  const intl = markAsDismissed(1114).intl;
  obj2.title = intl.string(markAsDismissed(1114).t.Ay9424);
  const intl2 = markAsDismissed(1114).intl;
  obj2.description = intl2.string(markAsDismissed(1114).t.mufH2P);
  const intl3 = markAsDismissed(1114).intl;
  obj2.CTALabel = intl3.string(markAsDismissed(1114).t.BddRzS);
  obj2.onCTAPress = callback;
  obj.children = jsx(NUFTemplateV2Default, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(7253).BottomSheet, {
    onDismiss() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(ContentDismissActionType.UNKNOWN);
      }
      return tmpResult;
    },
    startExpanded: true,
    children: null
  });
};