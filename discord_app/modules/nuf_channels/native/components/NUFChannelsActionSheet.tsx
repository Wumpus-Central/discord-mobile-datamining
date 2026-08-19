// === Module 12647: NUFChannelsActionSheet ===

// Module 12647 (NUFChannelsActionSheet)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import NUFActionSheetTemplateDefault from "NUFActionSheetTemplate" /* 12648 */;
import NUFChannelIllustrationDefault from "NUFChannelIllustration" /* 12649 */;
import noop from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.UNKNOWN);
    }
  }, items);
  let obj = { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null };
  const intl = markAsDismissed(1236).intl;
  obj[1] = intl.string(markAsDismissed(1236).t.Ay9424);
  const intl2 = markAsDismissed(1236).intl;
  obj[2] = intl2.string(markAsDismissed(1236).t.mufH2P);
  const intl3 = markAsDismissed(1236).intl;
  obj[3] = intl3.string(markAsDismissed(1236).t.BddRzS);
  obj[4] = callback;
  obj[2] = jsx(NUFActionSheetTemplateDefault, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(6950).BottomSheet, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
};