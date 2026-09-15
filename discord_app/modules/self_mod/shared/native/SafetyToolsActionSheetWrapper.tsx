// === Module 11537: SafetyToolsActionSheetWrapper ===

// Module 11537 (SafetyToolsActionSheetWrapper)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  let stateFromStores;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[3]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { showGradient: true, startExpanded: true, header: null, children: null };
    const obj3 = { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId };
    obj2.header = jsx(onClose(tmp2[5]), { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId });
    obj2.children = children;
    tmp5 = jsx(channelId(tmp2[4]).BottomSheet, { showGradient: true, startExpanded: true, header: null, children: null });
  }
  return tmp5;
};