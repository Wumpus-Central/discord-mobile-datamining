// discord_app/modules/vibegrations/native/VibegrationsAppChannelView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import FramesNativeManagerDefault from "../../frames/native/FramesNativeManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import VibegrationsAppChannelsStore from "../stores/VibegrationsAppChannelsStore.tsx";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FramesConstants = fn(9749);
({ EmbeddedSurfaceType: closure_9, FrameLayoutModes: c10, isLaunched: closure_11 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4722);
let closure_14 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { flex: 1, paddingBottom },
    centered: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: nativeDefault.space.PX_24,
      gap: nativeDefault.space.PX_12,
    },
    copy: null,
  };
  const obj2 = { flex: 1, paddingBottom };
  const obj3 = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_12,
  };
  obj.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let guild_id;
  let first;
  noop = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let tmp2 = guild_id;
  let container = closure_14(require("useSystemKeyboardHeight")());
  let InlineFrameView = channel;
  const result = channel(guild_id[10]).vibegrationsAppIdFromTopic(channel.topic);
  importDefault = result;
  guild_id = channel.guild_id;
  const tmp4 = first(noop.useState(false), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const items = [channel.id, guild_id];
  const memo = noop.useMemo(() => ({ type: constants.APP_CHANNEL, channelId: channel.id, guildId: guild_id }), items);
  const tmp7 = require("useFrameBySurface")(result, memo);
  let id = null;
  if (null != tmp7) {
    id = null;
    if (closure_11(tmp7)) {
      id = tmp7;
    }
  }
  const items1 = [result, first, tmp7, memo];
  const effect = obj2.useEffect(() => {
    if (null != c1) {
      if (!first) {
        if (null == closure_6) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            FramesNativeManagerDefault.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId: tmp, surface: memo };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_4(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
        }
      }
    }
  }, items1);
  closure_7 = obj2.useRef(null);
  closure_8 = obj2.useRef(channel.id);
  const items2 = [tmp7, channel.id];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
    closure_8.current = channel.id;
  }, items2);
  const effect2 = obj2.useEffect(
    () => () => {
      let isChatOpenResult = null == ref.current;
      if (!isChatOpenResult) {
        isChatOpenResult = ref2.isChatOpen(ref2.current);
      }
      if (!isChatOpenResult) {
        c1(guild_id[12]).leaveFrame(ref.current);
        const obj = c1(guild_id[12]);
      }
    },
    [],
  );
  require("useVibegrationsDisallowSwipeExit")(null != id);
  if (null == result) {
    return null;
  } else if (null != id) {
    let obj3 = { style: null, children: null };
    container = container.container;
    obj3.style = container;
    InlineFrameView = InlineFrameView(tmp2[15]).InlineFrameView;
    const obj4 = { frameId: null, layoutMode: null };
    id = id.id;
    obj4.frameId = id;
    obj4.layoutMode = constants2.FOCUSED;
    tmp2 = closure_12(InlineFrameView, obj4);
    obj3.children = tmp2;
    let tmp18 = closure_12(id, obj3);
  } else if (first) {
    const obj5 = { style: container.centered, children: null };
    const obj6 = { style: container.copy, children: null };
    const obj7 = { variant: "heading-lg/bold", color: "text-default", children: channel.name };
    const items3 = [closure_12(InlineFrameView(tmp2[16]).Text, obj7)];
    const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = InlineFrameView(tmp2[17]).intl;
    obj8.children = intl.string(tmp(tmp2[18]).QM4w4h);
    items3[1] = closure_12(InlineFrameView(tmp2[16]).Text, obj8);
    obj6.children = items3;
    const items4 = [closure_13(id, obj6)];
    const obj9 = { variant: "primary", text: null, onPress: null };
    const intl2 = InlineFrameView(tmp2[17]).intl;
    obj9.text = intl2.string(tmp(tmp2[18]).jLMpUv);
    obj9.onPress = tmp14;
    items4[1] = closure_12(InlineFrameView(tmp2[19]).Button, obj9);
    obj5.children = items4;
    tmp18 = closure_13(id, obj5);
  } else {
    const obj10 = { style: container.centered, children: closure_12(memo, {}) };
    tmp18 = closure_12(id, obj10);
  }
  let obj = channel(guild_id[10]);
}
