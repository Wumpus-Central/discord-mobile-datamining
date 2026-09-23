// === Module 17153: VibegrationsAppChannelView ===

// Module 17153 (VibegrationsAppChannelView)
import nativeDefault from "native" /* 576 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7784 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 9391 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9641 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9650 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9389 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13648 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FramesConstants = fn(9390);
({ FrameLayoutModes: closure_9, isLaunched: c10 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4827);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 }, copy: null };
  const obj2 = { flex: 1, paddingBottom };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  importDefault = undefined;
  let guild_id;
  let first;
  noop = undefined;
  let id;
  closure_7 = undefined;
  closure_8 = undefined;
  let id2;
  let tmp = importDefault;
  let tmp2 = guild_id;
  let items3 = closure_13(require("useSystemKeyboardHeight")());
  let tmp3 = id;
  let result = id(guild_id[10]).vibegrationsAppIdFromTopic(id.topic);
  importDefault = result;
  guild_id = id.guild_id;
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const items = [id.id, guild_id];
  const memo = noop.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: id.id, guildId: guild_id }), items);
  const tmp8 = tmp(tmp2[12])(result, memo);
  id = tmp8;
  let id1 = null;
  if (null != tmp8) {
    id1 = null;
    if (closure_10(tmp8)) {
      id1 = tmp8;
    }
  }
  const items1 = [result, first, tmp8, memo];
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
  closure_8 = obj2.useRef(id.id);
  const items2 = [tmp8, id.id];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
    closure_8.current = id.id;
  }, items2);
  const effect2 = obj2.useEffect(() => () => {
    let isChatOpenResult = null == ref.current;
    if (!isChatOpenResult) {
      isChatOpenResult = ref2.isChatOpen(ref2.current);
    }
    if (!isChatOpenResult) {
      c1(guild_id[13]).leaveFrame(ref.current);
      const obj = c1(guild_id[13]);
    }
  }, []);
  tmp(tmp2[15])(null != id1);
  id2 = id.id;
  [][0] = id2;
  const callback = obj2.useCallback(() => closure_4(false), []);
  if (null == result) {
    return null;
  } else if (null != id1) {
    let obj3 = { style: items3.container, children: null };
    const obj4 = { frameId: null, layoutMode: null };
    id1 = id1.id;
    obj4.frameId = id1;
    obj4.layoutMode = id2.FOCUSED;
    tmp3 = closure_11(tmp3(tmp2[18]).InlineFrameView, obj4);
    items3 = [tmp3, ];
    tmp = tmp(tmp2[19]);
    const obj5 = { channelId: null, onOpenChat: null };
    id = id.id;
    obj5.channelId = id;
    obj5.onOpenChat = tmp16;
    tmp2 = closure_11(tmp, obj5);
    items3[1] = tmp2;
    obj3.children = items3;
    let tmp20 = closure_12(id, obj3);
  } else if (first) {
    const obj6 = { style: items3.centered, children: null };
    const obj7 = { style: items3.copy, children: null };
    const obj8 = { variant: "heading-lg/bold", color: "text-default", children: id.name };
    const items4 = [closure_11(tmp3(tmp2[20]).Text, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = tmp3(tmp2[21]).intl;
    obj9.children = intl.string(tmp(tmp2[22]).QM4w4h);
    items4[1] = closure_11(tmp3(tmp2[20]).Text, obj9);
    obj7.children = items4;
    const items5 = [closure_12(id, obj7), ];
    const obj10 = { variant: "primary", text: null, onPress: null };
    const intl2 = tmp3(tmp2[21]).intl;
    obj10.text = intl2.string(tmp(tmp2[22]).jLMpUv);
    obj10.onPress = callback;
    items5[1] = closure_11(tmp3(tmp2[23]).Button, obj10);
    obj6.children = items5;
    tmp20 = closure_12(id, obj6);
  } else {
    const obj11 = { style: items3.centered, children: closure_11(memo, {}) };
    tmp20 = closure_11(id, obj11);
  }
  let obj = id(guild_id[10]);
};