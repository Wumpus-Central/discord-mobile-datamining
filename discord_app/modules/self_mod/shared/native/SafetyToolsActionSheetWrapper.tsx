// === Module 9835: SafetyToolsActionSheetWrapper ===

// Module 9835 (SafetyToolsActionSheetWrapper)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let children;
  let first;
  let hasHeaderBack;
  let headerTitle;
  let onClose;
  let recipientId;
  let stateFromStores;
  let tmp6;
  let warningId;
  let warningType;
  const obj = channelId(stateFromStores[4]);
  const cResult = obj.c(16);
  ({ headerTitle, hasHeaderBack, channelId } = arg0);
  ({ warningId, warningType, recipientId, children, onClose } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channelId(stateFromStores[5]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    let tmp8;
    let tmp9;
    if (cResult[4] === onClose) {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    const effect = react.useEffect(tmp8, tmp9);
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === channelId) {
        if (cResult[9] === children) {
          if (cResult[10] === hasHeaderBack) {
            if (cResult[11] === headerTitle) {
              if (cResult[12] === recipientId) {
                if (cResult[13] === warningId) {
                  let tmp12;
                  if (cResult[14] === warningType) {
                    tmp12 = cResult[15];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
    }
    let tmp13 = null;
    if (null != stateFromStores) {
      BottomSheet = channelId(tmp2[6]).BottomSheet;
      tmp13 = <BottomSheet showGradient startExpanded header={null}>{children}</BottomSheet>;
    }
    cResult[7] = stateFromStores;
    cResult[8] = channelId;
    cResult[9] = children;
    cResult[10] = hasHeaderBack;
    cResult[11] = headerTitle;
    cResult[12] = recipientId;
    cResult[13] = warningId;
    cResult[14] = warningType;
    cResult[15] = tmp13;
    tmp12 = tmp13;
  }
  class T {
    constructor() {
      if (null == stateFromStores) {
        onClose();
      }
    }
  }
  const items1 = [stateFromStores, onClose];
  cResult[3] = stateFromStores;
  cResult[4] = onClose;
  cResult[5] = T;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = T;
}) : ((channelId) => {
  let children;
  let hasHeaderBack;
  let headerTitle;
  let recipientId;
  let warningId;
  let warningType;
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  let stateFromStores;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  const items = [ChannelStore];
  const obj = channelId(stateFromStores[5]);
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp5 = null;
  const tmp = channelId;
  if (null != stateFromStores) {
    BottomSheet = tmp(tmp2[6]).BottomSheet;
    tmp5 = <BottomSheet showGradient startExpanded header={null}>{children}</BottomSheet>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default tmp2;