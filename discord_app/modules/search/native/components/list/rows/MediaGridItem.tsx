// === Module 17360: MediaGridItem ===

// Module 17360 (MediaGridItem)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5093 */;
import timingPresets from "timingPresets" /* 5096 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: metroRequire } = get_ActivityIndicator);
const SearchMediaTypes = fn(9312).SearchMediaTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, avatar: { position: "absolute", top: 8, right: 8 }, card: { padding: 0 } };
let closure_11 = createStyles.createStyles(obj);
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const __initData2 = { code: "function MediaGridItemTsx2(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaGridItem(media) {
  const cResult = media(ref[8]).c(63);
  media = media.media;
  ({ size, containerStyle, onPress } = media);
  const tmp4 = closure_11();
  const scale = closure_6().scale;
  ref = sharedValue.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== media.channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(media.channelId);
    };
    cResult[1] = media.channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = media(ref[8]);
  const obj2 = sharedValue;
  const stateFromStores = media(ref[9]).useStateFromStores(first, tmp8);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === guild_id) {
    if (cResult[6] === media) {
      class B {
        constructor() {
          obj = { media, originView: closure_2.current };
          tmp = onPress(obj);
          return;
        }
      }
      sharedValue = tmp(tmp2[10]).useSharedValue(media.animate ? tmp14.HIDDEN : tmp14.VISIBLE);
      const tmpResult3 = tmp(tmp2[10]);
      class N {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[11]);
          value = closure_3.get();
          obj.opacity = obj2.withTiming(value, closure_0(closure_2[12]).timingStandard);
          return obj;
        }
      }
      const obj3 = { withTiming: tmp(tmp2[11]).withTiming, opacity: sharedValue, timingStandard: tmp(tmp2[12]).timingStandard };
      N.__closure = obj3;
      N.__workletHash = 9644750191833;
      N.__initData = __initData;
      const animatedStyle = tmp(tmp2[10]).useAnimatedStyle(N);
      if (cResult[9] !== sharedValue) {
        class O {
          constructor() {
            result = closure_3.set(closure_12.VISIBLE);
            return;
          }
        }
        const items1 = [];
        class B {
          constructor() {
            obj = { media, originView: closure_2.current };
            tmp = onPress(obj);
            return;
          }
        }
        cResult[9] = sharedValue;
        class N {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[11]);
            value = closure_3.get();
            obj.opacity = obj2.withTiming(value, closure_0(closure_2[12]).timingStandard);
            return obj;
          }
        }
        cResult[11] = items1;
        let tmp19 = items1;
      } else {
        class O {
          constructor() {
            result = closure_3.set(closure_12.VISIBLE);
            return;
          }
        }
        tmp19 = cResult[11];
      }
      const effect = obj2.useEffect(O, tmp19);
      if (cResult[12] !== size) {
        class O {
          constructor() {
            result = closure_3.set(closure_12.VISIBLE);
            return;
          }
        }
        tmp22[0] = size;
        class B {
          constructor() {
            obj = { media, originView: closure_2.current };
            tmp = onPress(obj);
            return;
          }
        }
        cResult[12] = size;
        class N {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[11]);
            value = closure_3.get();
            obj.opacity = obj2.withTiming(value, closure_0(closure_2[12]).timingStandard);
            return obj;
          }
        }
      } else {
        class O {
          constructor() {
            result = closure_3.set(closure_12.VISIBLE);
            return;
          }
        }
      }
      if (cResult[14] === animatedStyle) {
        class O {
          constructor() {
            result = closure_3.set(closure_12.VISIBLE);
            return;
          }
        }
      }
      const items2 = [tmp4.container, containerStyle, tmp22, animatedStyle];
      cResult[14] = animatedStyle;
      cResult[15] = containerStyle;
      cResult[16] = tmp22;
      cResult[17] = tmp4.container;
      cResult[18] = items2;
      const tmpResult4 = tmp(tmp2[10]);
    }
    class B {
      constructor() {
        obj = { media, originView: closure_2.current };
        tmp = onPress(obj);
        return;
      }
    }
    cResult[6] = media;
    cResult[8] = B;
  }
  const author = media.author;
  if (stateFromStores != null) {
    class O {
      constructor() {
        result = closure_3.set(closure_12.VISIBLE);
        return;
      }
    }
  }
  const avatarSource = author.getAvatarSource(undefined);
  if (stateFromStores != null) {
    class O {
      constructor() {
        result = closure_3.set(closure_12.VISIBLE);
        return;
      }
    }
  }
  cResult[3] = undefined;
  cResult[4] = media.author;
  cResult[5] = avatarSource;
  const tmpResult = media(ref[9]);
}) : (function MediaGridItem(media) {
  media = media.media;
  let size = media.size;
  const onPress = media.onPress;
  let ref;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = closure_11();
  const scale = closure_6().scale;
  ref = ref.useRef(null);
  const items = [ChannelStore];
  const stateFromStores = media(onPress[9]).useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
  const items1 = [media.author, ];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = ref.useMemo(() => {
    const author = media.author;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const items2 = [media, onPress];
  const callback = obj.useCallback(() => {
    onPress({ media, originView: ref.current });
  }, items2);
  const obj2 = media(onPress[9]);
  sharedValue = media(onPress[10]).useSharedValue(animate ? constants.HIDDEN : constants.VISIBLE);
  const tmp3Result = media(onPress[10]);
  const fn = function f() {
    const obj = { opacity: null };
    value = sharedValue.get();
    obj.opacity = timing.withTiming(value, timingPresets.timingStandard);
    return obj;
  };
  const tmp3Result2 = media(onPress[10]);
  fn.__closure = { withTiming: media(onPress[11]).withTiming, opacity: sharedValue, timingStandard: media(onPress[12]).timingStandard };
  fn.__workletHash = 10968342083642;
  fn.__initData = __initData2;
  const items3 = [sharedValue];
  const animatedStyle = tmp3Result2.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = obj.useMemo(() => {
    size = { width: size, height: size };
    return size;
  }, items4);
  const obj4 = { style: null, children: null };
  const items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj4.style = items5;
  const obj5 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: null };
  let tmp14Result = media.type === SearchMediaTypes.EMBED;
  if (tmp14Result) {
    const obj6 = { sources: null, embed: null, messageId: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ sources: obj8.sources, embed: obj8.embed, messageId: obj8.messageId, channelId: obj8.channelId } = media);
    obj6.authorId = media.author.id;
    obj6.scale = scale;
    obj6.containerHeight = size;
    obj6.containerWidth = size;
    tmp14Result = closure_9(tmp3(tmp4[13]).SearchEmbedMediaImage, obj6);
  }
  const items6 = [tmp14Result, , , , ];
  let tmp14Result5 = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp14Result5) {
    const obj7 = { attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ attachment: obj9.attachment, channelId: obj9.channelId } = media);
    obj7.authorId = media.author.id;
    obj7.scale = scale;
    obj7.containerHeight = size;
    obj7.containerWidth = size;
    tmp14Result5 = closure_9(tmp3(tmp4[13]).SearchAttachmentMediaImage, obj7);
  }
  items6[1] = tmp14Result5;
  let tmp14Result6 = media.type === SearchMediaTypes.AUDIO;
  if (tmp14Result6) {
    const size1 = { height: size, width: size };
    tmp14Result6 = closure_9(tmp3(tmp4[13]).SearchSoundMediaImage, size1);
  }
  items6[2] = tmp14Result6;
  let tmp14Result7 = media.type === SearchMediaTypes.COMPONENT;
  if (tmp14Result7) {
    const obj10 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: null, isBot: null, scale: null, containerHeight: null, containerWidth: null };
    ({ unfurledMediaItem: obj11.unfurledMediaItem, sources: obj11.sources, channelId: obj11.channelId } = media);
    obj10.authorId = media.author.id;
    obj10.isBot = media.author.bot;
    obj10.scale = scale;
    obj10.containerHeight = size;
    obj10.containerWidth = size;
    tmp14Result7 = closure_9(tmp3(tmp4[13]).SearchComponentMediaImage, obj10);
  }
  items6[3] = tmp14Result7;
  let tmp14Result8 = null != memo;
  if (tmp14Result8) {
    const obj12 = { style: tmp.avatar, children: null };
    const obj13 = { shadow: "low", style: tmp.card, children: null };
    const obj14 = { source: memo, size: tmp3(tmp4[15]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    obj13.children = closure_9(tmp3(tmp4[15]).Avatar, obj14);
    obj12.children = closure_9(tmp3(tmp4[14]).Card, obj13);
    tmp14Result8 = closure_9(stateFromStores, obj12);
  }
  items6[4] = tmp14Result8;
  obj5.children = items6;
  obj4.children = closure_10(sharedValue, obj5);
  return closure_9(size(onPress[10]).View, obj4);
}));