// === Module 18658: AppChannel ===

// Module 18658 (AppChannel)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import FastImageDefault from "FastImage" /* 5717 */;
import transitionToChannel from "transitionToChannel" /* 5756 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6878 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6881 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9829 */;
import useChannelContentGate from "useChannelContentGate" /* 11215 */;
import ConjureAppIconTileDefault from "ConjureAppIconTile" /* 11340 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12096 */;
import FrameSurfaceState from "FrameSurfaceState" /* 18671 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 18673 */;
import noop from "module_19" /* 19 */;

require = fn;
function OpenAppChannel(arg0) {
  ({ applicationId, channel, surface, headerVisible } = arg0);
  if (headerVisible === undefined) {
    headerVisible = true;
  }
  let top;
  let bottom;
  let id;
  const insets = top(bottom[6])().insets;
  top = insets.top;
  bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  const items = [top, bottom, left, right, headerVisible];
  const memo = left.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, headerVisible);
  }, items);
  const obj = left;
  const tmp3 = closure_8(top(bottom[5])());
  ({ state, frame } = top(bottom[8])({ applicationId, surface }));
  top(bottom[9])(applicationId, surface);
  const tmp5 = top(bottom[8])({ applicationId, surface });
  top(bottom[10])(state === headerVisible(bottom[8]).FrameLifecycleState.Launched);
  const tmp7 = top(bottom[10]);
  let tmp11 = null;
  if (state === headerVisible(bottom[8]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  top(bottom[11])(tmp11);
  const tmp10 = top(bottom[11]);
  id = channel.id;
  const items1 = [id];
  const isConjureChannelCandidate = headerVisible(bottom[12]).useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = obj.useCallback((id) => {
    transitionToChannel.transitionToMessage(id, id.id);
  }, items1);
  if (headerVisible(bottom[8]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: null };
    const obj3 = { frameId: frame.id, level: tmp8(tmp2[15]).FrameStackLevel.WithinAppContent, presentation: memo };
    const items2 = [id(tmp(tmp2[14]), obj3), ];
    let tmp22Result = null;
    if (isConjureChannelCandidate) {
      const obj4 = { channelId: id, onOpenChat: callback };
      tmp22Result = id(tmp(tmp2[16]), obj4);
    }
    items2[1] = tmp22Result;
    obj2.children = items2;
    return closure_6(right, obj2);
  } else if (tmp8(tmp2[8]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj5 = { description: null };
    const intl5 = tmp8(tmp2[18]).intl;
    obj5.description = intl5.string(tmp8(tmp2[18]).t["2KIDX+"]);
    return id(tmp8(tmp2[17]).FrameSurfaceExplanation, obj5);
  } else if (tmp8(tmp2[8]).FrameLifecycleState.NoApplication === state) {
    const obj6 = { description: null };
    const intl4 = tmp8(tmp2[18]).intl;
    obj6.description = intl4.string(tmp8(tmp2[18]).t.izggZO);
    return id(tmp8(tmp2[17]).FrameSurfaceExplanation, obj6);
  } else if (tmp8(tmp2[8]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj7 = { description: null };
    const intl3 = tmp8(tmp2[18]).intl;
    obj7.description = intl3.string(tmp8(tmp2[18]).t["iUWcU/"]);
    return id(tmp8(tmp2[17]).FrameSurfaceExplanation, obj7);
  } else if (tmp8(tmp2[8]).FrameLifecycleState.Error === state) {
    const obj8 = { heading: null, error: null };
    const intl = tmp8(tmp2[18]).intl;
    obj8.heading = intl.string(tmp8(tmp2[18]).t.VquUff);
    const intl2 = tmp8(tmp2[18]).intl;
    obj8.error = intl2.string(tmp8(tmp2[18]).t["Sd9D/R"]);
    return id(tmp8(tmp2[17]).FrameSurfaceExplanation, obj8);
  } else {
    return id(tmp8(tmp2[17]).FrameSurfaceLoading, {});
  }
  const tmp8Result = headerVisible(bottom[12]);
}
function ClosedAppChannel(arg0) {
  ({ applicationId, onLaunch } = arg0);
  const tmp = closure_7();
  const data = ApplicationActionCreators.useApplication(applicationId).data;
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  if (null != icon) {
    const obj2 = { source: null, style: null };
    const tmp11 = FastImageDefault;
    ({ id: obj6.id, icon: obj6.icon } = data);
    obj2.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 64 });
    obj2.style = tmp.icon;
    let tmp4Result = hasOwnProperty(tmp11, obj2);
    const obj4 = { id: null, icon: null, size: 64 };
  } else {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    tmp4Result = null;
    if (null != conjureProjectId) {
      const obj7 = { style: tmp.icon, children: null };
      ({ id: obj3.applicationId, name: obj3.name } = data);
      obj7.children = hasOwnProperty(ConjureAppIconTileDefault, { applicationId: null, name: null, size: 64 });
      tmp4Result = hasOwnProperty(View, obj7);
      const obj8 = { applicationId: null, name: null, size: 64 };
    }
  }
  const obj14 = { icon: tmp4Result, heading: null, action: null };
  let name;
  if (data != null) {
    name = data.name;
  }
  obj14.heading = name;
  const obj15 = { text: null, onPress: null };
  const intl = util.intl;
  obj15.text = intl.string(util.t.PPYvuv);
  obj15.onPress = onLaunch;
  obj14.action = hasOwnProperty(components_Button_Button.Button, obj15);
  return hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj14);
}
function AppChannel(arg0) {
  ({ applicationId, channel } = arg0);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = noop.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id }), items);
  if (tmp2.isClosed) {
    const obj2 = { applicationId, onLaunch: tmp3 };
    let tmp4Result = closure_5(ClosedAppChannel, obj2);
  } else {
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj3.surface = memo;
    tmp4Result = closure_5(OpenAppChannel, obj3);
  }
  return tmp4Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(5014);
let obj2 = { icon: null };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.icon = size;
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5014);
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default function ConnectedAppChannel(channel) {
  channel = channel.channel;
  let application_id = channel.application_id;
  if (application_id == null) {
    application_id = obj.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  obj = conjureDMAppChannel;
  const channelContentGate = useChannelContentGate.useChannelContentGate(channel.guild_id, channel);
  if (null != channelContentGate) {
    let result = useChannelContentGate.renderChannelContentGate(channelContentGate);
    const tmpResult2 = useChannelContentGate;
  } else if (null == application_id) {
    const obj2 = { heading: null, description: null };
    const intl = util.intl;
    obj2.heading = intl.string(util.t.tU5fiM);
    const intl2 = util.intl;
    obj2.description = intl2.string(util.t.E94mJf);
    result = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    result = hasOwnProperty(AppChannel, obj3);
  }
  return result;
};