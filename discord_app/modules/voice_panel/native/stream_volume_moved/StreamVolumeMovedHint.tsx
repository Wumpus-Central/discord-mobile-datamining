// discord_app/modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedHint.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import StreamVolumeMovedStore from "StreamVolumeMovedStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_6 = fn(15763).clearStreamVolumeMovedHint;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { container: null, pill: null };
const rect = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_8,
};
obj2.container = rect;
obj2.pill = {
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function StreamVolumeMovedHintTsx1(){let[interpolate,longPressProgress,PRESSED_SCALE]=this.__closure;return{transform:[{scale:interpolate(longPressProgress.get(),[0,1],[1,PRESSED_SCALE])}]};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedHint.tsx");

export default function StreamVolumeMovedHint(streamKey) {
  streamKey = streamKey.streamKey;
  _require = streamKey;
  const tmp = closure_8();
  items = [
    closure_9,
    require("../../../../../_runtime/metro/01655__.js").interpolate,
    streamKey.longPressProgress,
    0.9,
  ];
  _require = undefined;
  state = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class StreamVolumeMovedHintTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: null };
      items = [1];
      items[1] = closure_2;
      obj1.scale = closure_0(closure_1.get(), [0, 1], items);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let items1 = [tmp5, tmp6, tmp7];
  StreamVolumeMovedHintTsx1.__closure = items1;
  StreamVolumeMovedHintTsx1.__workletHash = 3187140271576;
  StreamVolumeMovedHintTsx1.__initData = tmp4;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(StreamVolumeMovedHintTsx1);
  state = StreamVolumeMovedStore.useState((hintStreamKey) => hintStreamKey.hintStreamKey === c0);
  const intl = tmp2(1113).intl;
  const stringResult = intl.string(require("util").t["6nKlgr"]);
  dependencyMap = stringResult;
  const items2 = [streamKey];
  const effect = noop.useEffect(() => () => closure_2_6(_undefined), items2);
  const items3 = [state, stringResult];
  const effect1 = noop.useEffect(() => {
    if (state) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(c2);
    }
  }, items3);
  let tmp13 = null;
  if (state) {
    let obj2 = { style: tmp.container, pointerEvents: "none", children: null };
    const obj3 = { style: null, children: null };
    const items4 = [tmp.pill, animatedStyle];
    obj3.style = items4;
    const obj4 = { variant: "body-md/semibold", color: "text-overlay-light", children: stringResult };
    obj3.children = jsx(tmp2(5929).Text, {
      variant: "body-md/semibold",
      color: "text-overlay-light",
      children: stringResult,
    });
    obj2.children = jsx(state(1655).View, { style: null, children: null });
    tmp13 = (
      <View style={tmp.container} pointerEvents="none">
        {null}
      </View>
    );
  }
  return tmp13;
}
