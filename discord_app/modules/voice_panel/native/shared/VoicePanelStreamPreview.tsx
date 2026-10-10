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
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(5379).Button);
const OPACITY_TIMING = { duration: 200 };
const createStyles = fn(5092);
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
  ? function VoicePanelStreamPreview(mode) {
      const cResult = mode(576).c(26);
      mode = mode.mode;
      const stream = mode.stream;
      ({ disabled, onPress, layout } = mode);
      const tmp4 = closure_12();
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
      const previewUrl = stream(11174)(guildId, channelId, ownerId).previewUrl;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStreamingStore, AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stream) {
        const fn = function u() {
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
      const tmp6 = stream(11174);
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
            tmp3 = closure_11;
            obj1.opacity = obj2.withTiming(num, closure_11);
          }
          return obj1;
        }
      }
      const tmpResult2 = mode(4850);
      M.__closure = { mode, withTiming: mode(5093).withTiming, OPACITY_TIMING };
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
                          if (cResult[17] === tmp22) {
                            let tmp28 = cResult[18];
                          }
                          if (cResult[19] === layout) {
                            if (cResult[20] === onPress) {
                              if (cResult[21] === tmp4.roundedCard) {
                                if (cResult[22] === tmp16) {
                                  if (cResult[23] === tmp17) {
                                    if (cResult[24] === tmp28) {
                                      let tmp31 = cResult[25];
                                    }
                                    return tmp31;
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
                          const items2 = [tmp17, tmp28];
                          obj3.children = items2;
                          const tmp34 = closure_8(closure_9, obj3);
                          cResult[19] = layout;
                          cResult[20] = onPress;
                          cResult[21] = tmp4.roundedCard;
                          cResult[22] = tmp16;
                          cResult[23] = tmp17;
                          cResult[24] = tmp28;
                          cResult[25] = tmp34;
                          tmp31 = tmp34;
                        }
                      }
                      const obj4 = { style: animatedStyle, layout, children: cResult[14] };
                      const tmp30 = closure_7(tmp5(6761), obj4);
                      cResult[15] = animatedStyle;
                      cResult[16] = layout;
                      cResult[17] = cResult[14];
                      cResult[18] = tmp30;
                      tmp28 = tmp30;
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
            obj5.children = closure_7(tmp(5088).Text, obj6);
            let tmp23Result = closure_7(closure_4, obj5);
          } else {
            const obj7 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
            const intl = tmp(1126).intl;
            obj7.text = intl.string(tmp(1126).t["7Xq/nV"]);
            obj7.onPress = onPress;
            tmp23Result = closure_7(closure_10, obj7);
          }
          cResult[8] = disabled;
          cResult[9] = ownStreamTextContainer;
          cResult[10] = layout;
          cResult[11] = onPress;
          ({ ownStreamText: tmp3[12], ownStreamTextContainer } = tmp4);
          cResult[13] = ownStreamTextContainer;
          cResult[14] = tmp23Result;
        }
      }
      let tmp18 = null;
      if (null != previewUrl) {
        const obj8 = { layout, style: tmp4.streamPreviewImage, children: null };
        const obj9 = { source: null, style: null, resizeMode: "cover" };
        const obj10 = { uri: previewUrl };
        obj9.source = obj10;
        obj9.style = closure_3.absoluteFill;
        obj8.children = closure_7(tmp5(6156), obj9);
        tmp18 = closure_7(tmp5(6761), obj8);
        const tmp5Result = tmp5(6761);
      }
      cResult[4] = layout;
      cResult[5] = tmp4.streamPreviewImage;
      cResult[6] = previewUrl;
      cResult[7] = tmp18;
      tmp17 = tmp18;
      let obj2 = { mode, withTiming: mode(5093).withTiming, OPACITY_TIMING };
    }
  : function VoicePanelStreamPreview(mode) {
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
      const previewUrl = stream(11174)(guildId, channelId, ownerId).previewUrl;
      const tmp4 = stream(11174);
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
          obj3 = { opacity: timing.withTiming(num, closure_11) };
        }
        return obj3;
      };
      let obj2 = mode(4850);
      fn.__closure = { mode, withTiming: mode(5093).withTiming, OPACITY_TIMING };
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
        const obj5 = { layout, style: tmp.streamPreviewImage, children: null };
        const obj6 = { source: null, style: null, resizeMode: "cover" };
        const obj7 = { uri: previewUrl };
        obj6.source = obj7;
        obj6.style = closure_3.absoluteFill;
        obj5.children = closure_7(tmp2(6156), obj6);
        tmp14 = closure_7(tmp2(6761), obj5);
        const tmp2Result = tmp2(6761);
      }
      const items2 = [tmp14];
      const obj8 = { style: animatedStyle, layout, children: null };
      let obj3 = { mode, withTiming: mode(5093).withTiming, OPACITY_TIMING };
      if (stateFromStores) {
        const obj9 = { style: tmp.ownStreamTextContainer, children: null };
        const obj10 = {
          variant: "text-sm/semibold",
          color: "text-overlay-light",
          style: tmp.ownStreamText,
          children: null,
        };
        const intl2 = tmp8(1126).intl;
        obj10.children = intl2.string(tmp8(1126).t["ro/HN8"]);
        obj9.children = closure_7(tmp8(5088).Text, obj10);
        let tmp18Result = closure_7(closure_4, obj9);
      } else {
        const obj11 = { layout, disabled, text: null, size: "sm", variant: "primary-overlay", onPress: null };
        const intl = tmp8(1126).intl;
        obj11.text = intl.string(tmp8(1126).t["7Xq/nV"]);
        obj11.onPress = onPress;
        tmp18Result = closure_7(closure_10, obj11);
      }
      obj8.children = tmp18Result;
      items2[1] = closure_7(stream(6761), obj8);
      obj4.children = items2;
      return closure_8(closure_9, obj4);
    };
