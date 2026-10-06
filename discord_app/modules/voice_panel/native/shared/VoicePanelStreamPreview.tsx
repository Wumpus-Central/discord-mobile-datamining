// === Module 12880: VoicePanelStreamPreview ===

// Module 12880 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4897 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4948 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4618 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let c3;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: c3, Pressable } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(components_Button_Button.Button);
const OPACITY_TIMING = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { roundedCard: size, streamPreviewImage: { position: "absolute", width: "100%", height: "100%", opacity: 0.5 }, ownStreamTextContainer: obj2, ownStreamText: obj3 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj3 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const __initData = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()===\"pip\"?0:1,OPACITY_TIMING)};}" };
const __initData2 = { code: "function VoicePanelStreamPreviewTsx2(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let Text;
  let disabled;
  let first;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj6;
  let obj9;
  let onPress;
  let tmp13;
  let tmp14;
  let obj = mode(576);
  const cResult = obj.c(26);
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp4 = closure_11();
  let guildId;
  const tmp6 = stream(9759);
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
  const previewUrl = tmp6(guildId, channelId, ownerId).previewUrl;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stream) {
    const fn = function c() {
      let tmp2 = null != stream && stream.ownerId === AuthenticationStore.getId();
      if (tmp2) {
        const getStreamerActiveStreamMetadataForStream = ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream;
        const obj = StreamKeyUtils;
        tmp2 = null == getStreamerActiveStreamMetadataForStream(obj.encodeStreamKey(stream));
      }
      return tmp2;
    };
    const items1 = [stream];
    cResult[1] = stream;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = mode(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp13, tmp14);
  const tmpResult2 = mode(4618);
  class M {
    constructor() {
      let obj2;
      if (null == mode) {
        obj2 = { opacity: 1 };
      } else {
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if ("pip" === mode.get()) {
          num = 0;
        }
        obj2 = { opacity: withTiming(num, OPACITY_TIMING) };
      }
      return obj2;
    }
  }
  let obj2 = { mode, withTiming: tmp(4897).withTiming, OPACITY_TIMING };
  M.__closure = obj2;
  M.__workletHash = 8648991604611;
  M.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(M);
  if (cResult[4] === layout) {
    if (cResult[5] === tmp4.streamPreviewImage) {
      let tmp18;
      let tmp22Result;
      if (cResult[6] === previewUrl) {
        tmp18 = cResult[7];
      }
      if (cResult[8] === disabled) {
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === layout) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp4.ownStreamText) {
                let tmp21;
                if (cResult[13] === tmp4.ownStreamTextContainer) {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === animatedStyle) {
                  if (cResult[16] === layout) {
                    let tmp26;
                    if (cResult[17] === tmp21) {
                      tmp26 = cResult[18];
                    }
                    if (cResult[19] === layout) {
                      if (cResult[20] === onPress) {
                        if (cResult[21] === tmp4.roundedCard) {
                          if (cResult[22] === (disabled || stateFromStores)) {
                            if (cResult[23] === tmp18) {
                              let tmp29;
                              if (cResult[24] === tmp26) {
                                tmp29 = cResult[25];
                              }
                              return tmp29;
                            }
                          }
                        }
                      }
                    }
                    const obj3 = { layout, onPress, style: tmp4.roundedCard, disabled: disabled || stateFromStores, accessible: false, children: items2 };
                    items2 = [tmp18, tmp26];
                    const tmp32 = closure_7(closure_8, obj3);
                    cResult[19] = layout;
                    cResult[20] = onPress;
                    cResult[21] = tmp4.roundedCard;
                    cResult[22] = disabled || stateFromStores;
                    cResult[23] = tmp18;
                    cResult[24] = tmp26;
                    cResult[25] = tmp32;
                    tmp29 = tmp32;
                  }
                }
                const obj4 = { style: animatedStyle, layout, children: tmp21 };
                const tmp28 = closure_6(stream(6577), obj4);
                cResult[15] = animatedStyle;
                cResult[16] = layout;
                cResult[17] = tmp21;
                cResult[18] = tmp28;
                tmp26 = tmp28;
              }
            }
          }
        }
      }
      if (stateFromStores) {
        const obj5 = { style: tmp4.ownStreamTextContainer, children: closure_6(Text, obj6) };
        obj6 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp4.ownStreamText, children: intl2.string(mode(1126).t["ro/HN8"]) };
        Text = tmp(4892).Text;
        intl2 = tmp(1126).intl;
        tmp22Result = closure_6(closure_3, obj5);
      } else {
        const obj7 = { layout, disabled, text: intl.string(mode(1126).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
        intl = tmp(1126).intl;
        tmp22Result = closure_6(closure_9, obj7);
      }
      cResult[8] = disabled;
      cResult[9] = stateFromStores;
      cResult[10] = layout;
      cResult[11] = onPress;
      cResult[12] = tmp4.ownStreamText;
      cResult[13] = tmp4.ownStreamTextContainer;
      cResult[14] = tmp22Result;
      tmp21 = tmp22Result;
    }
  }
  let tmp19 = null;
  if (null != previewUrl) {
    const obj8 = { layout, source: obj9, style: tmp4.streamPreviewImage, resizeMode: "cover" };
    obj9 = { uri: previewUrl };
    tmp19 = closure_6(tmp5(4618).Image, obj8);
  }
  cResult[4] = layout;
  cResult[5] = tmp4.streamPreviewImage;
  cResult[6] = previewUrl;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : ((mode) => {
  let Text;
  let disabled;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj6;
  let obj9;
  let onPress;
  let tmp13;
  let tmp16Result;
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_11();
  let tmp2 = stream;
  let guildId;
  const tmp4 = stream(9759);
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
  const previewUrl = tmp4(guildId, channelId, ownerId).previewUrl;
  let obj = mode(504);
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != stream && stream.ownerId === AuthenticationStore.getId();
    if (tmp2) {
      const getStreamerActiveStreamMetadataForStream = ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream;
      const obj = StreamKeyUtils;
      tmp2 = null == getStreamerActiveStreamMetadataForStream(obj.encodeStreamKey(stream));
    }
    return tmp2;
  }, items1);
  let obj2 = mode(4618);
  const fn = function v() {
    let obj2;
    if (null == mode) {
      obj2 = { opacity: 1 };
    } else {
      const withTiming = timing.withTiming;
      let num = 1;
      timing;
      if ("pip" === mode.get()) {
        num = 0;
      }
      obj2 = { opacity: withTiming(num, OPACITY_TIMING) };
    }
    return obj2;
  };
  fn.__closure = { mode, withTiming: mode(4897).withTiming, OPACITY_TIMING };
  fn.__workletHash = 1723503693792;
  fn.__initData = __initData2;
  const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: tmp13, accessible: false, children: items2 };
  tmp13 = disabled;
  ({ mode, withTiming: mode(4897).withTiming, OPACITY_TIMING });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  let tmp14 = null;
  if (null != previewUrl) {
    const obj5 = { layout, source: obj6, style: tmp.streamPreviewImage, resizeMode: "cover" };
    obj6 = { uri: previewUrl };
    tmp14 = closure_6(tmp2(4618).Image, obj5);
  }
  items2 = [tmp14, ];
  const obj7 = { style: animatedStyle, layout, children: tmp16Result };
  const tmp2Result = tmp2(6577);
  if (stateFromStores) {
    const obj8 = { style: tmp.ownStreamTextContainer, children: closure_6(Text, obj9) };
    obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: intl2.string(mode(1126).t["ro/HN8"]) };
    Text = tmp8(4892).Text;
    intl2 = tmp8(1126).intl;
    tmp16Result = closure_6(closure_3, obj8);
  } else {
    const obj10 = { layout, disabled, text: intl.string(mode(1126).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
    intl = tmp8(1126).intl;
    tmp16Result = closure_6(closure_9, obj10);
  }
  items2[1] = closure_6(tmp2Result, obj7);
  return closure_7(closure_8, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = tmp6;