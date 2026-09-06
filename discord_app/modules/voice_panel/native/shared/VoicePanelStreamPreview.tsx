// discord_app/modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(4975).Button);
const OPACITY_TIMING = { duration: 200 };
const createStyles = fn(4560);
let obj = { roundedCard: null, streamPreviewImage: null, ownStreamTextContainer: null, ownStreamText: null };
let size = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
obj.roundedCard = size;
obj.streamPreviewImage = { position: "absolute", width: "100%", height: "100%", opacity: 0.5 };
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  borderRadius: nativeDefault.radii.sm,
  marginHorizontal: nativeDefault.space.PX_16,
};
obj.ownStreamTextContainer = obj;
obj.ownStreamText = {
  textAlign: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = function VoicePanelStreamPreview(mode) {
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_11();
  let guildId;
  if (stream != null) {
    guildId = stream.guildId;
  }
  let channelId;
  if (stream != null) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (stream != null) {
    ownerId = stream.ownerId;
  }
  const previewUrl = stream(10062)(guildId, channelId, ownerId).previewUrl;
  let obj = mode(504);
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let tmp2 = null != stream;
      if (tmp2) {
        tmp2 = stream.ownerId === AuthenticationStore.getId();
      }
      if (tmp2) {
        tmp2 =
          null ==
          ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream(StreamKeyUtils.encodeStreamKey(stream));
      }
      return tmp2;
    },
    items1,
  );
  let obj1 = mode(4296);
  class T {
    constructor() {
      obj = mode;
      if (null == mode) {
        obj = { opacity: 1 };
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[12]);
        num = 1;
        str = "pip";
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj = { opacity: null };
        tmp3 = closure_10;
        obj.opacity = obj2.withTiming(num, closure_10);
      }
      return obj;
    }
  }
  obj = { mode, withTiming: mode(4561).withTiming, OPACITY_TIMING };
  T.__closure = obj;
  T.__workletHash = 15496474861955;
  T.__initData = __initData;
  obj = { layout, onPress, style: tmp.roundedCard, disabled: null, accessible: false, children: null };
  let tmp13 = disabled;
  const animatedStyle = obj1.useAnimatedStyle(T);
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  obj.disabled = tmp13;
  let tmp14 = null;
  if (null != previewUrl) {
    obj1 = { layout, source: null, style: null, resizeMode: "cover" };
    let obj2 = { uri: previewUrl };
    obj1.source = obj2;
    obj1.style = tmp.streamPreviewImage;
    tmp14 = closure_6(tmp2(4296).Image, obj1);
  }
  const items2 = [tmp14];
  const obj3 = { style: animatedStyle, layout, children: null };
  const tmp4 = stream(10062);
  if (stateFromStores) {
    const obj4 = { style: tmp.ownStreamTextContainer, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: null };
    const intl2 = tmp8(1114).intl;
    obj5.children = intl2.string(tmp8(1114).t["ro/HN8"]);
    obj4.children = closure_6(tmp8(4556).Text, obj5);
    let tmp16Result = closure_6(closure_3, obj4);
  } else {
    const obj6 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
    const intl = tmp8(1114).intl;
    obj6.text = intl.string(tmp8(1114).t["7Xq/nV"]);
    obj6.onPress = onPress;
    tmp16Result = closure_6(closure_9, obj6);
  }
  obj3.children = tmp16Result;
  items2[1] = closure_6(stream(7073), obj3);
  obj.children = items2;
  return closure_7(closure_8, obj);
};
