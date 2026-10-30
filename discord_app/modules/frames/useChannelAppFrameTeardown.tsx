// discord_app/modules/frames/useChannelAppFrameTeardown.tsx
import leaveFrame from "leaveFrame.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import FramesStore from "FramesStore.tsx";

const require = globalThis.__r;

require = fn;
const getFrameSurfaceForChannel = fn(6841).getFrameSurfaceForChannel;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default function useChannelAppFrameTeardown(id) {
  _require = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [id];
  memo = memo.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = getFrameSurfaceForChannel(tmp);
    }
    return tmp2;
  }, items);
  const items1 = [stateFromStores, PermissionStore];
  const items2 = [id];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      const channel = ChannelStore.getChannel(id);
      let canResult = null != channel;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      return canResult;
    },
    items2,
  );
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
}
