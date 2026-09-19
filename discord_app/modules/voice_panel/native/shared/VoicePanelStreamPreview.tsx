// === Module 13329: VoicePanelStreamPreview ===

// Module 13329 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4757 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4492 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(5186).Button);
const OPACITY_TIMING = { duration: 200 };
const createStyles = fn(4756);
let obj = { roundedCard: null, streamPreviewImage: null, ownStreamTextContainer: null, ownStreamText: null };
let size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.roundedCard = size;
obj.streamPreviewImage = { position: "absolute", width: "100%", height: "100%", opacity: 0.5 };
obj.ownStreamTextContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj.ownStreamText = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
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
  const previewUrl = stream(10318)(guildId, channelId, ownerId).previewUrl;
  const tmp4 = stream(10318);
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = mode(504).useStateFromStores(items, () => {
    let tmp2 = null != stream;
    if (tmp2) {
      tmp2 = stream.ownerId === AuthenticationStore.getId();
    }
    if (tmp2) {
      tmp2 = null == ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream(StreamKeyUtils.encodeStreamKey(stream));
    }
    return tmp2;
  }, items1);
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
        tmp3 = closure_10;
        obj1.opacity = obj2.withTiming(num, closure_10);
      }
      return obj1;
    }
  }
  let obj2 = mode(4492);
  T.__closure = { mode, withTiming: mode(4757).withTiming, OPACITY_TIMING };
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
    const obj5 = { layout, source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: previewUrl };
    obj5.source = obj6;
    obj5.style = tmp.streamPreviewImage;
    tmp14 = closure_6(tmp2(4492).Image, obj5);
  }
  const items2 = [tmp14, ];
  const obj7 = { style: animatedStyle, layout, children: null };
  let obj3 = { mode, withTiming: mode(4757).withTiming, OPACITY_TIMING };
  if (stateFromStores) {
    const obj8 = { style: tmp.ownStreamTextContainer, children: null };
    const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: null };
    const intl2 = tmp8(1115).intl;
    obj9.children = intl2.string(tmp8(1115).t["ro/HN8"]);
    obj8.children = closure_6(tmp8(4752).Text, obj9);
    let tmp16Result = closure_6(closure_3, obj8);
  } else {
    const obj10 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
    const intl = tmp8(1115).intl;
    obj10.text = intl.string(tmp8(1115).t["7Xq/nV"]);
    obj10.onPress = onPress;
    tmp16Result = closure_6(closure_9, obj10);
  }
  obj7.children = tmp16Result;
  items2[1] = closure_6(stream(7313), obj7);
  obj4.children = items2;
  return closure_7(closure_8, obj4);
};