// discord_app/modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Pressable);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(5629).Button);
const OPACITY_TIMING = { duration: 200 };
const createStyles = fn(5009);
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
obj.ownStreamTextContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  borderRadius: nativeDefault.radii.sm,
  marginHorizontal: nativeDefault.space.PX_16,
};
let obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  borderRadius: nativeDefault.radii.sm,
  marginHorizontal: nativeDefault.space.PX_16,
};
obj.ownStreamText = {
  textAlign: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export function VoicePanelStreamPreview(mode) {
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_12();
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
  const previewUrl = stream(12003)(guildId, channelId, ownerId).previewUrl;
  const tmp4 = stream(12003);
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = mode(504).useStateFromStores(
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
  let obj = mode(504);
  class T {
    constructor() {
      obj = mode;
      if (null == mode) {
        obj1 = { opacity: 1 };
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[12]);
        num = 1;
        str = "pip";
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj1 = { opacity: null };
        tmp3 = closure_11;
        obj1.opacity = obj2.withTiming(num, closure_11);
      }
      return obj1;
    }
  }
  let obj2 = mode(5090);
  T.__closure = { mode, withTiming: mode(5249).withTiming, OPACITY_TIMING };
  T.__workletHash = 15496474861955;
  T.__initData = __initData;
  const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: null, accessible: false, children: null };
  let tmp13 = disabled;
  const animatedStyle = obj2.useAnimatedStyle(T);
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  obj4.disabled = tmp13;
  let tmp14 = null;
  if (null != previewUrl) {
    const obj5 = { layout, style: tmp.streamPreviewImage, children: null };
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: previewUrl };
    obj6.source = obj7;
    obj6.style = absoluteFill.absoluteFill;
    obj5.children = closure_7(tmp2(5712), obj6);
    tmp14 = closure_7(tmp2(7235), obj5);
    const tmp2Result = tmp2(7235);
  }
  const items2 = [tmp14];
  const obj8 = { layout, children: null };
  let obj3 = { mode, withTiming: mode(5249).withTiming, OPACITY_TIMING };
  const obj9 = { style: animatedStyle, children: null };
  const tmp2Result3 = stream(7235);
  if (stateFromStores) {
    const obj10 = { style: tmp.ownStreamTextContainer, children: null };
    const obj11 = {
      variant: "text-sm/semibold",
      color: "text-overlay-light",
      style: tmp.ownStreamText,
      children: null,
    };
    const intl2 = tmp8(1114).intl;
    obj11.children = intl2.string(tmp8(1114).t["ro/HN8"]);
    obj10.children = closure_7(tmp8(5619).Text, obj11);
    let tmp18Result = closure_7(closure_4, obj10);
  } else {
    const obj12 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
    const intl = tmp8(1114).intl;
    obj12.text = intl.string(tmp8(1114).t["7Xq/nV"]);
    obj12.onPress = onPress;
    tmp18Result = closure_7(closure_10, obj12);
  }
  obj9.children = tmp18Result;
  obj8.children = closure_7(stream(7235), obj9);
  items2[1] = closure_7(tmp2Result3, obj8);
  obj4.children = items2;
  return closure_8(closure_9, obj4);
}
