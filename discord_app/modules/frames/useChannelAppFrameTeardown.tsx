// === Module 18975: useChannelAppFrameTeardown ===

// Module 18975 (useChannelAppFrameTeardown)
import leaveFrame from "leaveFrame" /* 11031 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import FramesStore from "FramesStore" /* 6926 */;

const require = globalThis.__r;

require = fn;
const getFrameSurfaceForChannel = fn(6927).getFrameSurfaceForChannel;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default function useChannelAppFrameTeardown(id) {
  _require = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  items = [id];
  memo = memo.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = getFrameSurfaceForChannel(tmp);
    }
    return tmp2;
  }, items);
  const items1 = [stateFromStores, PermissionStore];
  const items2 = [id];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(id);
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
    }
    return canResult;
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = memo.useEffect(() => {
    if (null != memo) {
      if (!stateFromStores) {
        const framesForSurface = FramesStore.getFramesForSurface(tmp);
        for (const item10010 of framesForSurface) {
          let obj = leaveFrame;
          let leaveFrameResult = obj.leaveFrame(item10010.id);
          continue;
        }
      }
    }
  }, items3);
};