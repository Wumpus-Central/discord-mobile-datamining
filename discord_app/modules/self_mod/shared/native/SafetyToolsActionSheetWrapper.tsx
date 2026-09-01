// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  let stateFromStores;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  let obj = channelId(stateFromStores[3]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { showGradient: true, startExpanded: true, header: null, children: null };
    obj = { recipientId: null, warningId: null, warningType: null, hasBackButton: null, title: null, channelId: null };
    obj[0] = recipientId;
    obj[1] = warningId;
    obj[2] = warningType;
    obj[3] = hasHeaderBack;
    obj[4] = headerTitle;
    obj[5] = channelId;
    obj[2] = jsx(onClose(tmp2[5]), {
      recipientId: null,
      warningId: null,
      warningType: null,
      hasBackButton: null,
      title: null,
      channelId: null,
    });
    obj[3] = children;
    tmp5 = jsx(channelId(tmp2[4]).BottomSheet, {
      recipientId: null,
      warningId: null,
      warningType: null,
      hasBackButton: null,
      title: null,
      channelId: null,
    });
  }
  return tmp5;
}
