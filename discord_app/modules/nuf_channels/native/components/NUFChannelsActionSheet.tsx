// discord_app/modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx
import NUFActionSheetTemplateDefault from "NUFTemplateV2.tsx";
import NUFChannelIllustrationDefault from "NUFChannelIllustration.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    closure_1_1(closure_1_2[3]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(closure_1_4.UNKNOWN);
    }
  }, items);
  let obj = {
    onDismiss() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(closure_1_4.UNKNOWN);
      }
      return tmpResult;
    },
    startExpanded: true,
    children: null
  };
  obj = { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null };
  const intl = markAsDismissed(1236).intl;
  obj[1] = intl.string(markAsDismissed(1236).t.Ay9424);
  const intl2 = markAsDismissed(1236).intl;
  obj[2] = intl2.string(markAsDismissed(1236).t.mufH2P);
  const intl3 = markAsDismissed(1236).intl;
  obj[3] = intl3.string(markAsDismissed(1236).t.BddRzS);
  obj[4] = callback;
  obj[2] = jsx(NUFActionSheetTemplateDefault, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(5574).BottomSheet, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
};