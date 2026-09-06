// === Module 11399: SafetyToolsActionSheetWrapper ===

// Module 11399 (SafetyToolsActionSheetWrapper)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  let stateFromStores;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  let obj = channelId(stateFromStores[3]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { showGradient: true, startExpanded: true, header: null, children: null };
    obj = { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId };
    obj.header = jsx(onClose(tmp2[5]), { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId });
    obj.children = children;
    tmp5 = jsx(channelId(tmp2[4]).BottomSheet, { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId });
  }
  return tmp5;
};