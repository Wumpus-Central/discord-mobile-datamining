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
({ View: c3, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(5601).Button);
const OPACITY_TIMING = { duration: 200 };
const createStyles = fn(4896);
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
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: 'function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==="pip"?0:1,OPACITY_TIMING)};}',
};
const __initData2 = {
  code: "function VoicePanelStreamPreviewTsx2(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}",
};
const ReactCompilerGating = fn(558);
let obj4 = {
  textAlign: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? (mode) => {
      const cResult = mode(576).c(26);
      mode = mode.mode;
      const stream = mode.stream;
      ({ disabled, onPress, layout } = mode);
      const tmp4 = closure_11();
      let guildId;
      let obj = mode(576);
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
      const previewUrl = stream(9759)(guildId, channelId, ownerId).previewUrl;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStreamingStore, AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stream) {
        const fn = function c() {
          let tmp2 = null != stream;
          if (tmp2) {
            tmp2 = stream.ownerId === AuthenticationStore.getId();
          }
          if (tmp2) {
            tmp2 =
              null ==
              ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream(
                StreamKeyUtils.encodeStreamKey(stream),
              );
          }
          return tmp2;
        };
        const items1 = [stream];
        cResult[1] = stream;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp14 = items1;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[2];
        tmp14 = cResult[3];
      }
      const tmp6 = stream(9759);
      ownStreamTextContainer = mode(504).useStateFromStores(first, tmp13, tmp14);
      const tmpResult = mode(504);
      class M {
        constructor() {
          obj = mode;
          if (null == mode) {
            obj1 = { opacity: 1 };
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[14]);
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
      const tmpResult2 = mode(4618);
      M.__closure = { mode, withTiming: mode(4897).withTiming, OPACITY_TIMING };
      M.__workletHash = 8648991604611;
      M.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(M);
      let tmp16 = disabled;
      if (!disabled) {
        tmp16 = ownStreamTextContainer;
      }
      if (cResult[4] === layout) {
        if (cResult[5] === tmp4.streamPreviewImage) {
          if (cResult[6] === previewUrl) {
            let tmp17 = cResult[7];
          }
          if (cResult[8] === disabled) {
            if (cResult[9] === ownStreamTextContainer) {
              if (cResult[10] === layout) {
                if (cResult[11] === onPress) {
                  if (cResult[12] === tmp4.ownStreamText) {
                    if (cResult[13] === tmp4.ownStreamTextContainer) {
                      if (cResult[15] === animatedStyle) {
                        if (cResult[16] === layout) {
                          if (cResult[17] === tmp20) {
                            let tmp26 = cResult[18];
                          }
                          if (cResult[19] === layout) {
                            if (cResult[20] === onPress) {
                              if (cResult[21] === tmp4.roundedCard) {
                                if (cResult[22] === tmp16) {
                                  if (cResult[23] === tmp17) {
                                    if (cResult[24] === tmp26) {
                                      let tmp29 = cResult[25];
                                    }
                                    return tmp29;
                                  }
                                }
                              }
                            }
                          }
                          let obj3 = {
                            layout,
                            onPress,
                            style: tmp4.roundedCard,
                            disabled: tmp16,
                            accessible: false,
                            children: null,
                          };
                          const items2 = [tmp17, tmp26];
                          obj3.children = items2;
                          const tmp32 = closure_7(closure_8, obj3);
                          cResult[19] = layout;
                          cResult[20] = onPress;
                          cResult[21] = tmp4.roundedCard;
                          cResult[22] = tmp16;
                          cResult[23] = tmp17;
                          cResult[24] = tmp26;
                          cResult[25] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                      const obj4 = { style: animatedStyle, layout, children: cResult[14] };
                      const tmp28 = closure_6(tmp5(6577), obj4);
                      cResult[15] = animatedStyle;
                      cResult[16] = layout;
                      cResult[17] = cResult[14];
                      cResult[18] = tmp28;
                      tmp26 = tmp28;
                    }
                  }
                }
              }
            }
          }
          if (ownStreamTextContainer) {
            const obj5 = { style: tmp4.ownStreamTextContainer, children: null };
            const obj6 = {
              variant: "text-sm/semibold",
              color: "text-overlay-light",
              style: tmp4.ownStreamText,
              children: null,
            };
            const intl2 = tmp(1126).intl;
            obj6.children = intl2.string(tmp(1126).t["ro/HN8"]);
            obj5.children = closure_6(tmp(4892).Text, obj6);
            let tmp21Result = closure_6(closure_3, obj5);
          } else {
            const obj7 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
            const intl = tmp(1126).intl;
            obj7.text = intl.string(tmp(1126).t["7Xq/nV"]);
            obj7.onPress = onPress;
            tmp21Result = closure_6(closure_9, obj7);
          }
          cResult[8] = disabled;
          cResult[9] = ownStreamTextContainer;
          cResult[10] = layout;
          cResult[11] = onPress;
          ({ ownStreamText: tmp3[12], ownStreamTextContainer } = tmp4);
          cResult[13] = ownStreamTextContainer;
          cResult[14] = tmp21Result;
        }
      }
      let tmp18 = null;
      if (null != previewUrl) {
        const obj8 = { layout, source: null, style: null, resizeMode: "cover" };
        const obj9 = { uri: previewUrl };
        obj8.source = obj9;
        obj8.style = tmp4.streamPreviewImage;
        tmp18 = closure_6(tmp5(4618).Image, obj8);
      }
      cResult[4] = layout;
      cResult[5] = tmp4.streamPreviewImage;
      cResult[6] = previewUrl;
      cResult[7] = tmp18;
      tmp17 = tmp18;
      let obj2 = { mode, withTiming: mode(4897).withTiming, OPACITY_TIMING };
    }
  : (mode) => {
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
      const previewUrl = stream(9759)(guildId, channelId, ownerId).previewUrl;
      const tmp4 = stream(9759);
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
              ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream(
                StreamKeyUtils.encodeStreamKey(stream),
              );
          }
          return tmp2;
        },
        items1,
      );
      let obj = mode(504);
      const fn = function v() {
        if (null == mode) {
          let obj3 = { opacity: 1 };
        } else {
          let num = 1;
          if ("pip" === mode.get()) {
            num = 0;
          }
          obj3 = { opacity: timing.withTiming(num, closure_10) };
        }
        return obj3;
      };
      let obj2 = mode(4618);
      fn.__closure = { mode, withTiming: mode(4897).withTiming, OPACITY_TIMING };
      fn.__workletHash = 1723503693792;
      fn.__initData = __initData2;
      const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: null, accessible: false, children: null };
      let tmp13 = disabled;
      const animatedStyle = obj2.useAnimatedStyle(fn);
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
        tmp14 = closure_6(tmp2(4618).Image, obj5);
      }
      const items2 = [tmp14];
      const obj7 = { style: animatedStyle, layout, children: null };
      let obj3 = { mode, withTiming: mode(4897).withTiming, OPACITY_TIMING };
      if (stateFromStores) {
        const obj8 = { style: tmp.ownStreamTextContainer, children: null };
        const obj9 = {
          variant: "text-sm/semibold",
          color: "text-overlay-light",
          style: tmp.ownStreamText,
          children: null,
        };
        const intl2 = tmp8(1126).intl;
        obj9.children = intl2.string(tmp8(1126).t["ro/HN8"]);
        obj8.children = closure_6(tmp8(4892).Text, obj9);
        let tmp16Result = closure_6(closure_3, obj8);
      } else {
        const obj10 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
        const intl = tmp8(1126).intl;
        obj10.text = intl.string(tmp8(1126).t["7Xq/nV"]);
        obj10.onPress = onPress;
        tmp16Result = closure_6(closure_9, obj10);
      }
      obj7.children = tmp16Result;
      items2[1] = closure_6(stream(6577), obj7);
      obj4.children = items2;
      return closure_7(closure_8, obj4);
    };
