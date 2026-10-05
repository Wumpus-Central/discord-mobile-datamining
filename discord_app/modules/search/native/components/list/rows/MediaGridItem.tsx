// === Module 16838: MediaGridItem ===

// Module 16838 (MediaGridItem)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let media;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: metroRequire } = react_native);
const SearchMediaTypes = SearchConstants.SearchMediaTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2, avatar: { position: "absolute", top: 8, right: 8 }, card: { padding: 0 } };
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles.createStyles(obj);
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const __initData2 = { code: "function MediaGridItemTsx2(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  let containerStyle;
  let first;
  let onPress;
  let ref;
  let sharedValue;
  let tmp8;
  const tmp = media;
  let obj = media(ref[8]);
  const cResult = obj.c(63);
  media = media.media;
  ({ size, containerStyle, onPress } = media);
  const animate = media.animate;
  const tmp4 = closure_11();
  const scale = closure_6().scale;
  ref = sharedValue.useRef(null);
  const obj2 = sharedValue;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== media.channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(media.channelId);
    };
    cResult[1] = media.channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(ref[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let guild_id;
  const tmp10 = cResult[3];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp10 === guild_id) {
    if (cResult[6] === media) {
      let tmp21;
      const tmpResult3 = tmp(ref[10]);
      class B {
        constructor() {
          const obj = { media, originView: ref.current };
          onPress(obj);
        }
      }
      sharedValue = tmpResult3.useSharedValue(animate ? tmp15.HIDDEN : tmp15.VISIBLE);
      const tmpResult4 = tmp(ref[10]);
      class N {
        constructor() {
          let value;
          let withTiming;
          const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
          withTiming = timing.withTiming;
          timing;
          value = sharedValue.get();
          return obj;
        }
      }
      const useAnimatedStyle = tmpResult4.useAnimatedStyle;
      N.__closure = { withTiming: tmp(ref[11]).withTiming, opacity: sharedValue, timingStandard: tmp(ref[12]).timingStandard };
      N.__workletHash = 9644750191833;
      N.__initData = __initData;
      const obj3 = { withTiming: tmp(ref[11]).withTiming, opacity: sharedValue, timingStandard: tmp(ref[12]).timingStandard };
      const animatedStyle = useAnimatedStyle(N);
      if (cResult[9] !== sharedValue) {
        class O {
          constructor() {
            const result = sharedValue.set(constants.VISIBLE);
          }
        }
        const items1 = [];
        class B {
          constructor() {
            const obj = { media, originView: ref.current };
            onPress(obj);
          }
        }
        cResult[9] = sharedValue;
        class N {
          constructor() {
            let value;
            let withTiming;
            const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
            withTiming = timing.withTiming;
            timing;
            value = sharedValue.get();
            return obj;
          }
        }
        cResult[11] = items1;
        tmp21 = items1;
      } else {
        class O {
          constructor() {
            const result = sharedValue.set(constants.VISIBLE);
          }
        }
        tmp21 = cResult[11];
      }
      const effect = obj2.useEffect(O, tmp21);
      if (cResult[12] !== size) {
        class O {
          constructor() {
            const result = sharedValue.set(constants.VISIBLE);
          }
        }
        tmp24[0] = size;
        class B {
          constructor() {
            const obj = { media, originView: ref.current };
            onPress(obj);
          }
        }
        cResult[12] = size;
        class N {
          constructor() {
            let value;
            let withTiming;
            const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
            withTiming = timing.withTiming;
            timing;
            value = sharedValue.get();
            return obj;
          }
        }
      } else {
        class O {
          constructor() {
            const result = sharedValue.set(constants.VISIBLE);
          }
        }
      }
      if (cResult[14] === animatedStyle) {
        class O {
          constructor() {
            const result = sharedValue.set(constants.VISIBLE);
          }
        }
      }
      const items2 = [tmp4.container, containerStyle, tmp24, animatedStyle];
      cResult[14] = animatedStyle;
      cResult[15] = containerStyle;
      cResult[16] = tmp24;
      cResult[17] = tmp4.container;
      cResult[18] = items2;
    }
    class B {
      constructor() {
        const obj = { media, originView: ref.current };
        onPress(obj);
      }
    }
    cResult[6] = media;
    cResult[8] = B;
  }
  const author = media.author;
  const getAvatarSource = author.getAvatarSource;
  if (stateFromStores != null) {
    class O {
      constructor() {
        const result = sharedValue.set(constants.VISIBLE);
      }
    }
  }
  const avatarSource = getAvatarSource(undefined);
  if (stateFromStores != null) {
    class O {
      constructor() {
        const result = sharedValue.set(constants.VISIBLE);
      }
    }
  }
  cResult[3] = undefined;
  cResult[4] = media.author;
  cResult[5] = avatarSource;
}) : ((media) => {
  let Avatar;
  let Card;
  let animate;
  let containerStyle;
  let items5;
  let items6;
  let obj13;
  let obj14;
  let obj5;
  let tmp16;
  media = media.media;
  size = media.size;
  const onPress = media.onPress;
  let ref;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = closure_11();
  const scale = closure_6().scale;
  let obj = ref;
  ref = ref.useRef(null);
  const items = [ChannelStore];
  const obj2 = media(onPress[9]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
  const items1 = [media.author, ];
  let guild_id;
  const useMemo = ref.useMemo;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = useMemo(() => {
    const author = media.author;
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items1);
  const items2 = [media, onPress];
  const callback = obj.useCallback(() => {
    const obj = { media, originView: ref.current };
    onPress(obj);
  }, items2);
  const tmp3Result = media(onPress[10]);
  sharedValue = tmp3Result.useSharedValue(animate ? constants.HIDDEN : constants.VISIBLE);
  const fn = function f() {
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
    withTiming = timing.withTiming;
    timing;
    value = sharedValue.get();
    return obj;
  };
  const tmp3Result2 = media(onPress[10]);
  fn.__closure = { withTiming: media(onPress[11]).withTiming, opacity: sharedValue, timingStandard: media(onPress[12]).timingStandard };
  fn.__workletHash = 10968342083642;
  fn.__initData = __initData2;
  const items3 = [sharedValue];
  ({ withTiming: media(onPress[11]).withTiming, opacity: sharedValue, timingStandard: media(onPress[12]).timingStandard });
  const animatedStyle = tmp3Result2.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = obj.useMemo(() => {
    size = { width: size, height: size };
    return size;
  }, items4);
  const obj4 = { style: items5, children: closure_10(tmp16, obj5) };
  items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  let tmp14Result = media.type === SearchMediaTypes.EMBED;
  obj5 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: items6 };
  const View = size(tmp4[10]).View;
  tmp16 = sharedValue;
  if (tmp14Result) {
    const obj6 = { sources: null, embed: null, messageId: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ sources: obj8.sources, embed: obj8.embed, messageId: obj8.messageId, channelId: obj8.channelId } = media);
    tmp14Result = closure_9(tmp3(tmp4[13]).SearchEmbedMediaImage, obj6);
  }
  items6 = [tmp14Result, , , , ];
  let tmp14Result5 = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp14Result5) {
    const obj7 = { attachment: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ attachment: obj9.attachment, channelId: obj9.channelId } = media);
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
    const obj10 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: media.author.id, isBot: media.author.bot, scale, containerHeight: size, containerWidth: size };
    ({ unfurledMediaItem: obj11.unfurledMediaItem, sources: obj11.sources, channelId: obj11.channelId } = media);
    tmp14Result7 = closure_9(tmp3(tmp4[13]).SearchComponentMediaImage, obj10);
  }
  items6[3] = tmp14Result7;
  let tmp14Result8 = null != memo;
  if (tmp14Result8) {
    const obj12 = { style: tmp.avatar, children: closure_9(Card, obj13) };
    obj13 = { shadow: "low", style: tmp.card, children: closure_9(Avatar, obj14) };
    Card = tmp3(tmp4[14]).Card;
    obj14 = { source: memo, size: media(onPress[15]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    Avatar = tmp3(tmp4[15]).Avatar;
    tmp14Result8 = closure_9(stateFromStores, obj12);
  }
  items6[4] = tmp14Result8;
  return closure_9(View, obj4);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;