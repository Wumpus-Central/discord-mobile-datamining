// === Module 15025: VoicePanelStreamPreview ===

// Module 15025 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 575 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6837 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12179 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6834 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import module_1652_mod from "module_1652" /* 1652 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let module_1652 = module_1652_mod;
let closure_9 = module_1652.createAnimatedComponent(Pressable);
let module_1652 = module_1652_mod;
let closure_10 = module_1652.createAnimatedComponent(fn(5754).Button);
let closure_11 = { duration: 200 };
const createStyles = fn(5141);
let obj = { roundedCard: null, streamPreviewImage: null, ownStreamTextContainer: null, ownStreamText: null };
let size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.roundedCard = size;
obj.streamPreviewImage = { position: "absolute", width: "100%", height: "100%", opacity: 0.5 };
obj.ownStreamTextContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj.ownStreamText = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "(function VoicePanelStreamPreviewTsx1(){let[mode,withTiming,OPACITY_TIMING]=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export function VoicePanelStreamPreview(stream) {
  stream = stream.stream;
  _require = stream;
  ({ disabled, onPress, layout } = stream);
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
  const previewUrl = useFetchStreamPreviewDefault(guildId, channelId, ownerId).previewUrl;
  items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != _undefined;
    if (tmp2) {
      tmp2 = _undefined.ownerId === AuthenticationStore.getId();
    }
    if (tmp2) {
      tmp2 = null == ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream(StreamKeyUtils.encodeStreamKey(_undefined));
    }
    return tmp2;
  }, items1);
  let obj = require("initialize");
  const items2 = [closure_13, stream.mode, require("timing/timing").withTiming, closure_11];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items2;
  class VoicePanelStreamPreviewTsx1 {
    constructor() {
      obj = closure_0;
      if (null == closure_0) {
        obj1 = { opacity: 1 };
      } else {
        tmp = closure_1;
        num = 1;
        str = "pip";
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj1 = { opacity: null };
        tmp2 = closure_2;
        obj1.opacity = tmp(num, closure_2);
      }
      return obj1;
    }
  }
  const items3 = [tmp11, tmp12, tmp13];
  VoicePanelStreamPreviewTsx1.__closure = items3;
  VoicePanelStreamPreviewTsx1.__workletHash = 4349610028794;
  VoicePanelStreamPreviewTsx1.__initData = tmp10;
  const obj3 = { layout, onPress, style: tmp.roundedCard, disabled: null, accessible: false, children: null };
  let tmp17 = disabled;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelStreamPreviewTsx1);
  if (!disabled) {
    tmp17 = stateFromStores;
  }
  obj3.disabled = tmp17;
  let tmp18 = null;
  if (null != previewUrl) {
    const obj4 = { layout, style: tmp.streamPreviewImage, children: null };
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: previewUrl };
    obj5.source = obj6;
    obj5.style = absoluteFill.absoluteFill;
    obj4.children = closure_7(tmp2(5837), obj5);
    tmp18 = closure_7(tmp2(1652).View, obj4);
  }
  const items4 = [tmp18, ];
  const obj7 = { layout, children: null };
  const obj8 = { style: animatedStyle, children: null };
  if (stateFromStores) {
    const obj9 = { style: tmp.ownStreamTextContainer, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: null };
    const intl2 = tmp8(1113).intl;
    obj10.children = intl2.string(tmp8(1113).t["ro/HN8"]);
    obj9.children = closure_7(tmp8(5747).Text, obj10);
    let tmp21Result = closure_7(closure_4, obj9);
  } else {
    const obj11 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
    const intl = tmp8(1113).intl;
    obj11.text = intl.string(tmp8(1113).t["7Xq/nV"]);
    obj11.onPress = onPress;
    tmp21Result = closure_7(closure_10, obj11);
  }
  obj8.children = tmp21Result;
  obj7.children = closure_7(module_1652.View, obj8);
  items4[1] = closure_7(module_1652.View, obj7);
  obj3.children = items4;
  return closure_8(closure_9, obj3);
}