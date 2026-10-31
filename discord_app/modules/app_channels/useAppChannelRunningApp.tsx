// === Module 14398: useAppChannelRunningApp ===

// Module 14398 (useAppChannelRunningApp)
import FramesStore from "FramesStore" /* 6846 */;

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1072).ChannelTypes;
const FramesConstants = fn(6847);
({ asLaunched: hasOwnProperty, getFrameSurfaceForChannel: metroRequire } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default function useAppChannelRunningApp(arg0) {
  _require = arg0;
  const items = [FramesStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (type.type === ChannelTypes.GUILD_APP) {
      tmp2 = timestampProducer(tmp);
    }
    let tmp4;
    if (null != tmp2) {
      const first = FramesStore.getFramesForSurface(tmp2)[0];
      let id;
      if (first != null) {
        id = first.id;
      }
      tmp4 = id;
    }
    if (tmp4 == null) {
      tmp4 = null;
    }
    return tmp4;
  }, items1);
  let obj = require("initialize");
  let tmp4 = stateFromStores(14399)(stateFromStores);
  const items2 = [FramesStore];
  const items3 = [stateFromStores];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
    let data;
    if (tmp != null) {
      data = tmp.data;
    }
    let audible;
    if (data != null) {
      audible = data.audible;
    }
    const obj = { audible: true === audible, userMuted: null };
    let userMuted;
    if (data != null) {
      userMuted = data.userMuted;
    }
    obj.userMuted = true === userMuted;
    return obj;
  }, items3);
  const obj3 = { frameId: stateFromStores, runningLabel: null, audible: null, userMuted: null };
  let stringResult = null;
  ({ audible, userMuted } = stateFromStoresObject);
  if (tmp4) {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t["1yCkJY"]);
  }
  obj3.runningLabel = stringResult;
  obj3.audible = audible;
  obj3.userMuted = userMuted;
  return obj3;
};