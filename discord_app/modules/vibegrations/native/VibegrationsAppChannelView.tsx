// === Module 15965: VibegrationsAppChannelView ===

// Module 15965 (VibegrationsAppChannelView)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "map" /* 10677 */;
import FrameLayoutModes from "FrameLayoutModes" /* 10678 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ EmbeddedSurfaceType: closure_8, FrameLayoutModes: c9, isLaunched: c10 } = FrameLayoutModes);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles((paddingBottom) => {
  obj = { container: obj, centered: null, copy: null };
  obj = { flex: 1, paddingBottom };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_12 };
  obj[1] = obj;
  obj[2] = { alignItems: "center", gap: ThemesDefault.space.PX_4 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  channel = channel.channel;
  let _require = channel;
  let disallowGesture;
  disallowGesture = undefined;
  let first;
  let React;
  let memo;
  closure_6 = undefined;
  closure_7 = undefined;
  let tmp2 = disallowGesture;
  let container = callback4(disallowGesture(disallowGesture[9])());
  let InlineFrameView = _require;
  let obj = _require(disallowGesture[10]);
  let result = obj.vibegrationsAppIdFromTopic(channel.topic);
  disallowGesture = result;
  const guild_id = channel.guild_id;
  disallowGesture = guild_id;
  obj1 = React;
  const tmp4 = first(React.useState(false), 2);
  first = tmp4[0];
  React = tmp4[1];
  const items = [channel.id, guild_id];
  memo = React.useMemo(() => ({ type: closure_1_8.APP_CHANNEL, channelId: id.id, guildId: disallowGesture }), items);
  const tmp7 = disallowGesture(tmp2[11])(result, memo);
  closure_6 = tmp7;
  let id = null;
  if (null != tmp7) {
    id = null;
    if (callback(tmp7)) {
      id = tmp7;
    }
  }
  const items1 = [result, first, tmp7, memo];
  const effect = obj1.useEffect(() => {
    if (null != disallowGesture) {
      if (!first) {
        if (null == closure_6) {
          mainFrame = mainFrame.getMainFrame();
          if (null != mainFrame) {
            let obj = disallowGesture(disallowGesture[12]);
            obj.leaveFrame(mainFrame.id);
          }
          obj = { applicationId: null, surface: null };
          obj[0] = tmp;
          obj[1] = memo;
          const obj2 = disallowGesture(disallowGesture[13]);
          disallowGesture(disallowGesture[13]).launchFrame(obj).catch(() => callback(true));
          const launchFrameResult = disallowGesture(disallowGesture[13]).launchFrame(obj);
        }
      }
    }
  }, items1);
  closure_7 = obj1.useRef(null);
  const items2 = [tmp7];
  const effect1 = obj1.useEffect(() => {
    let id;
    if (id2 != null) {
      id = id2.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
  }, items2);
  const effect2 = obj1.useEffect(() => () => {
    if (null != ref.current) {
      closure_1_1(closure_1_2[12]).leaveFrame(tmp.current);
      const obj = closure_1_1(closure_1_2[12]);
    }
  }, []);
  _require = tmp13;
  disallowGesture = undefined;
  disallowGesture = undefined;
  disallowGesture = obj1.useContext(tmp(tmp2[8])).disallowGesture;
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
        const result = closure_1.set(false);
        if (closure_2 != null) {
          const result1 = closure_2.set(false);
        }
      };
    }
  }, items3);
  if (null == result) {
    return null;
  } else if (null != id) {
    obj = { style: null, children: null };
    container = container.container;
    obj[0] = container;
    InlineFrameView = InlineFrameView(tmp2[14]).InlineFrameView;
    obj = { frameId: null, layoutMode: null };
    id = id.id;
    obj[0] = id;
    obj[1] = constants.FOCUSED;
    tmp2 = callback2(InlineFrameView, obj);
    obj[1] = tmp2;
    let tmp21 = callback2(closure_6, obj);
  } else if (first) {
    obj1 = { style: null, children: null };
    obj1[0] = container.centered;
    let obj2 = { style: null, children: null };
    obj2[0] = container.copy;
    const obj3 = { variant: "heading-lg/bold", color: "text-default", children: null };
    obj3[2] = channel.name;
    const items4 = [callback2(InlineFrameView(tmp2[15]).Text, obj3), ];
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = InlineFrameView(tmp2[16]).intl;
    obj4[2] = intl.string(tmp(tmp2[17]).QM4w4h);
    items4[1] = callback2(InlineFrameView(tmp2[15]).Text, obj4);
    obj2[1] = items4;
    const items5 = [callback3(closure_6, obj2), ];
    const obj5 = { variant: "primary", text: null, onPress: null };
    const intl2 = InlineFrameView(tmp2[16]).intl;
    obj5[1] = intl2.string(tmp(tmp2[17]).jLMpUv);
    obj5[2] = tmp17;
    items5[1] = callback2(InlineFrameView(tmp2[18]).Button, obj5);
    obj1[1] = items5;
    tmp21 = callback3(closure_6, obj1);
  } else {
    const obj6 = { style: null, children: null };
    obj6[0] = container.centered;
    obj6[1] = callback2(memo, {});
    tmp21 = callback2(closure_6, obj6);
  }
};