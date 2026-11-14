// discord_app/modules/app_channels/native/AppChannel.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import conjureDMAppChannel from "../../conjure/app_channel/conjureDMAppChannel.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ConjurePreviewActionCreators from "../../conjure/preview/ConjurePreviewActionCreators.tsx";
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat.tsx";
import ConjureAppIconTileDefault from "../../conjure/projects/native/ConjureAppIconTile.tsx";
import useChannelContentGate from "../../chat/native/useChannelContentGate.tsx";
import getInlineFramePresentationDefault from "../../frames/native/getInlineFramePresentation.tsx";
import FrameSurfaceState from "../../frames/native/FrameSurfaceState.tsx";
import useChannelAppFrameTeardownDefault from "../../frames/useChannelAppFrameTeardown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function OpenAppChannel(applicationId) {
  applicationId = applicationId.applicationId;
  ({ channel, surface, headerVisible } = applicationId);
  if (headerVisible === undefined) {
    headerVisible = true;
  }
  let top;
  let id;
  const insets = headerVisible(top[7])().insets;
  top = insets.top;
  const bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  items = [top, bottom, left, right, headerVisible];
  const memo = bottom.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, headerVisible);
  }, items);
  const obj = bottom;
  const tmp3 = closure_9(headerVisible(top[6])());
  ({ frame, state } = headerVisible(top[9])({ applicationId, surface }));
  headerVisible(top[10])(applicationId, surface);
  const tmp5 = headerVisible(top[9])({ applicationId, surface });
  headerVisible(top[11])(state === applicationId(top[9]).FrameLifecycleState.Launched);
  const tmp7 = headerVisible(top[11]);
  let tmp11 = null;
  if (state === applicationId(top[9]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  headerVisible(top[12])(tmp11);
  const tmp10 = headerVisible(top[12]);
  let id1;
  const isConjureChannelCandidate = applicationId(top[13]).useIsConjureChannelCandidate(channel, "AppChannel");
  if (frame != null) {
    id1 = frame.id;
  }
  id = channel.id;
  const items1 = [id];
  const tmp8Result = applicationId(top[13]);
  const callback = obj.useCallback((id) => {
    transitionToChannel.transitionToMessage(id, id.id);
  }, items1);
  if (applicationId(top[9]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: null };
    const obj3 = { frameId: frame.id, level: tmp8(tmp2[16]).FrameStackLevel.WithinAppContent, presentation: memo };
    const items2 = [id(tmp(tmp2[15]), obj3), ,];
    let tmp25Result = null;
    if (tmp14Result) {
      const obj4 = {
        onReload() {
          return ConjurePreviewActionCreators.reloadConjureAppFrames(applicationId);
        },
      };
      tmp25Result = tmp25(tmp8(tmp2[17]).ConjureFrameUpdateBarContent, obj4);
    }
    items2[1] = tmp25Result;
    let tmp25Result2 = null;
    if (isConjureChannelCandidate) {
      const obj5 = { channelId: id, onOpenChat: callback };
      tmp25Result2 = tmp25(tmp(tmp2[19]), obj5);
    }
    items2[2] = tmp25Result2;
    obj2.children = items2;
    return closure_7(left, obj2);
  } else if (tmp8(tmp2[9]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj6 = { description: null };
    const intl5 = tmp8(tmp2[21]).intl;
    obj6.description = intl5.string(tmp8(tmp2[21]).t["2KIDX+"]);
    return id(tmp8(tmp2[20]).FrameSurfaceExplanation, obj6);
  } else if (tmp8(tmp2[9]).FrameLifecycleState.NoApplication === state) {
    const obj7 = { description: null };
    const intl4 = tmp8(tmp2[21]).intl;
    obj7.description = intl4.string(tmp8(tmp2[21]).t.izggZO);
    return id(tmp8(tmp2[20]).FrameSurfaceExplanation, obj7);
  } else if (tmp8(tmp2[9]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj8 = { description: null };
    const intl3 = tmp8(tmp2[21]).intl;
    obj8.description = intl3.string(tmp8(tmp2[21]).t["iUWcU/"]);
    return id(tmp8(tmp2[20]).FrameSurfaceExplanation, obj8);
  } else if (tmp8(tmp2[9]).FrameLifecycleState.Error === state) {
    const obj9 = { heading: null, error: null };
    const intl = tmp8(tmp2[21]).intl;
    obj9.heading = intl.string(tmp8(tmp2[21]).t.VquUff);
    const intl2 = tmp8(tmp2[21]).intl;
    obj9.error = intl2.string(tmp8(tmp2[21]).t["Sd9D/R"]);
    return id(tmp8(tmp2[20]).FrameSurfaceExplanation, obj9);
  } else {
    return id(tmp8(tmp2[20]).FrameSurfaceLoading, {});
  }
  tmp14Result = right(id1);
}
function ClosedAppChannel(arg0) {
  ({ applicationId, onLaunch } = arg0);
  const tmp = closure_8();
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
    let tmp4Result = timestampProducer(tmp11, obj2);
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
      obj7.children = timestampProducer(ConjureAppIconTileDefault, { applicationId: null, name: null, size: 64 });
      tmp4Result = timestampProducer(View, obj7);
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
  obj14.action = timestampProducer(components_Button_Button.Button, obj15);
  return timestampProducer(FrameSurfaceState.FrameSurfaceExplanation, obj14);
}
function AppChannel(arg0) {
  ({ applicationId, channel } = arg0);
  items = [,];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = noop.useMemo(
    () => ({
      type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
      channelId: channel.id,
      guildId: channel.guild_id,
    }),
    items,
  );
  if (tmp2.isClosed) {
    const obj2 = { applicationId, onLaunch: tmp3 };
    let tmp4Result = closure_6(ClosedAppChannel, obj2);
  } else {
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj3.surface = memo;
    tmp4Result = closure_6(OpenAppChannel, obj3);
  }
  return tmp4Result;
}
const View = fn(17).View;
let closure_5 = fn(19430).useConjureFrameUpdateAvailable;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let createStyles = fn(5306);
let obj2 = { icon: null };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.icon = size;
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5306);
let closure_9 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default function ConnectedAppChannel(channel) {
  channel = channel.channel;
  application_id = channel.application_id;
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
    result = timestampProducer(FrameSurfaceState.FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    result = timestampProducer(AppChannel, obj3);
  }
  return result;
}
