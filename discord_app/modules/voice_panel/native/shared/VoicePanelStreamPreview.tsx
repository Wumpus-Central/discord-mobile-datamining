// === Module 12137: VoicePanelStreamPreview ===

// Module 12137 (VoicePanelStreamPreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_4 from "reset" /* 4652 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "module_4115" /* 4115 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ View: c3, Pressable } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = importDefaultResult.createAnimatedComponent(Pressable);
let closure_9 = importDefaultResult.createAnimatedComponent(require("Button").Button);
let closure_10 = { duration: 200 };
let obj = { roundedCard: null, streamPreviewImage: null, ownStreamTextContainer: null, ownStreamText: null };
obj = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj[0] = obj;
obj[1] = { position: "absolute", width: "100%", height: "100%", opacity: 0.5 };
const importDefaultResult1 = importDefaultResult;
obj[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, borderRadius: ThemesDefault.radii.sm, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
obj[3] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, borderRadius: ThemesDefault.radii.sm, marginHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = function VoicePanelStreamPreview(mode) {
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = callback2();
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
  const previewUrl = stream(12138)(guildId, channelId, ownerId).previewUrl;
  let obj = mode(589);
  const items = [closure_4, closure_5];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != stream;
    if (tmp2) {
      tmp2 = tmp.ownerId === closure_1_5.getId();
    }
    if (tmp2) {
      tmp2 = null == closure_1_4.getStreamerActiveStreamMetadataForStream(mode(closure_1_2[11]).encodeStreamKey(tmp));
      const obj = mode(closure_1_2[11]);
    }
    return tmp2;
  }, items1);
  obj1 = mode(4115);
  class T {
    constructor() {
      obj = mode;
      if (null == mode) {
        obj = { opacity: 1 };
      } else {
        tmp = mode;
        tmp2 = closure_1_2;
        obj2 = mode(closure_1_2[12]);
        num = 1;
        str = "pip";
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj = { opacity: null };
        tmp3 = closure_1_10;
        obj[0] = obj2.withTiming(num, closure_1_10);
      }
      return obj;
    }
  }
  obj = { mode, withTiming: mode(4664).withTiming, OPACITY_TIMING: closure_10 };
  T.__closure = obj;
  T.__workletHash = 15496474861955;
  T.__initData = closure_12;
  obj = { layout, onPress, style: tmp.roundedCard, disabled: null, accessible: false, children: null };
  let tmp13 = disabled;
  const animatedStyle = obj1.useAnimatedStyle(T);
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  obj[3] = tmp13;
  let tmp14 = null;
  if (null != previewUrl) {
    obj1 = { layout: null, source: null, style: null, resizeMode: "cover" };
    obj1[0] = layout;
    let obj2 = { uri: null };
    obj2[0] = previewUrl;
    obj1[1] = obj2;
    obj1[2] = tmp.streamPreviewImage;
    tmp14 = callback(tmp2(4115).Image, obj1);
  }
  const items2 = [tmp14, ];
  const obj3 = { style: animatedStyle, layout, children: null };
  const tmp11 = closure_7;
  const tmp12 = closure_8;
  const tmp4 = stream(12138);
  if (stateFromStores) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.ownStreamTextContainer;
    const obj5 = { variant: "text-sm/semibold", color: "text-overlay-light", style: null, children: null };
    obj5[2] = tmp.ownStreamText;
    const intl2 = tmp8(1236).intl;
    obj5[3] = intl2.string(tmp8(1236).t["ro/HN8"]);
    obj4[1] = tmp16(tmp8(4734).Text, obj5);
    let tmp16Result = tmp16(closure_3, obj4);
  } else {
    const obj6 = { layout: null, disabled: null, text: null, size: "sm", variant: "primary-overlay", onPress: null };
    obj6[0] = layout;
    obj6[1] = disabled;
    const intl = tmp8(1236).intl;
    obj6[2] = intl.string(tmp8(1236).t["7Xq/nV"]);
    obj6[5] = onPress;
    tmp16Result = tmp16(closure_9, obj6);
  }
  obj3[2] = tmp16Result;
  items2[1] = callback(stream(8125), obj3);
  obj[5] = items2;
  return tmp11(tmp12, obj);
};