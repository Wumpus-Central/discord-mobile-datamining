// discord_app/modules/vibegrations/native/VibegrationsAppChannelView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import FramesNativeManagerDefault from "../../frames/native/FramesNativeManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FramesConstants = fn(9511);
({ EmbeddedSurfaceType: closure_8, FrameLayoutModes: closure_9, isLaunched: c10 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  let obj = { container: null, centered: null, copy: null };
  obj = { flex: 1, paddingBottom };
  obj.container = obj;
  obj = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_12,
  };
  obj.centered = obj;
  obj.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  channel = channel.channel;
  _require = channel;
  let disallowGesture;
  let first;
  noop = undefined;
  closure_7 = undefined;
  let tmp2 = disallowGesture;
  let container = closure_13(disallowGesture(disallowGesture[9])());
  let InlineFrameView = _require;
  let obj = require("VibegrationsUtils");
  let result = obj.vibegrationsAppIdFromTopic(channel.topic);
  const guild_id = channel.guild_id;
  disallowGesture = guild_id;
  let obj1 = noop;
  const tmp4 = first(noop.useState(false), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const items = [channel.id, guild_id];
  const memo = noop.useMemo(() => ({ type: constants.APP_CHANNEL, channelId: id.id, guildId: disallowGesture }), items);
  const tmp7 = disallowGesture(tmp2[11])(result, memo);
  const id2 = tmp7;
  let id = null;
  if (null != tmp7) {
    id = null;
    if (closure_10(tmp7)) {
      id = tmp7;
    }
  }
  const items1 = [result, first, tmp7, memo];
  const effect = obj1.useEffect(() => {
    if (null != disallowGesture) {
      if (!first) {
        if (null == closure_6) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            let obj = FramesNativeManagerDefault;
            obj.leaveFrame(mainFrame.id);
          }
          obj = { applicationId: tmp, surface: memo };
          FramesActionCreatorsDefault.launchFrame(obj).catch(() => closure_1_4(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj);
        }
      }
    }
  }, items1);
  closure_7 = obj1.useRef(null);
  const items2 = [tmp7];
  const effect1 = obj1.useEffect(() => {
    id = undefined;
    if (id2 != null) {
      id = id2.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
  }, items2);
  const effect2 = obj1.useEffect(
    () => () => {
      if (null != ref.current) {
        disallowGesture(disallowGesture[12]).leaveFrame(tmp.current);
        const obj = disallowGesture(disallowGesture[12]);
      }
    },
    [],
  );
  _require = tmp13;
  obj1.useContext(tmp(tmp2[8])).disallowGesture;
  const context = obj1.useContext(InlineFrameView(tmp2[8]).MainTabsChannelScreenStackContext);
  disallowGesture = undefined;
  if (context != null) {
    disallowGesture = context.disallowGesture;
  }
  if (disallowGesture == null) {
    disallowGesture = null;
  }
  const items3 = [null != id, disallowGesture, disallowGesture];
  const effect3 = obj1.useEffect(() => {
    if (closure_0) {
      let result = disallowGesture.set(true);
      if (disallowGesture != null) {
        let result1 = disallowGesture.set(true);
      }
      return () => {
        const result = closure_1_1.set(false);
        if (closure_1_2 != null) {
          const result1 = closure_1_2.set(false);
        }
      };
    }
  }, items3);
  if (null == result) {
    return null;
  } else if (null != id) {
    obj = { style: null, children: null };
    container = container.container;
    obj.style = container;
    InlineFrameView = InlineFrameView(tmp2[14]).InlineFrameView;
    obj = { frameId: null, layoutMode: null };
    id = id.id;
    obj.frameId = id;
    obj.layoutMode = constants2.FOCUSED;
    tmp2 = closure_11(InlineFrameView, obj);
    obj.children = tmp2;
    let tmp21 = closure_11(id2, obj);
  } else if (first) {
    obj1 = { style: container.centered, children: null };
    let obj2 = { style: container.copy, children: null };
    const obj3 = { variant: "heading-lg/bold", color: "text-default", children: channel.name };
    const items4 = [closure_11(InlineFrameView(tmp2[15]).Text, obj3)];
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = InlineFrameView(tmp2[16]).intl;
    obj4.children = intl.string(tmp(tmp2[17]).QM4w4h);
    items4[1] = closure_11(InlineFrameView(tmp2[15]).Text, obj4);
    obj2.children = items4;
    const items5 = [closure_12(id2, obj2)];
    const obj5 = { variant: "primary", text: null, onPress: null };
    const intl2 = InlineFrameView(tmp2[16]).intl;
    obj5.text = intl2.string(tmp(tmp2[17]).jLMpUv);
    obj5.onPress = tmp17;
    items5[1] = closure_11(InlineFrameView(tmp2[18]).Button, obj5);
    obj1.children = items5;
    tmp21 = closure_12(id2, obj1);
  } else {
    const obj6 = { style: container.centered, children: closure_11(memo, {}) };
    tmp21 = closure_11(id2, obj6);
  }
}
