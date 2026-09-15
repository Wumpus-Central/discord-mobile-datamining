// discord_app/modules/search/native/components/list/rows/MediaGridItem.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: metroRequire } = get_ActivityIndicator);
const SearchMediaTypes = fn(7985).SearchMediaTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4639);
let obj = {
  container: {
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  avatar: { position: "absolute", top: 8, right: 8 },
  card: { padding: 0 },
};
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = {
  code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}",
};
const obj3 = {
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default noop.memo(function MediaGridItem(media) {
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
  const stateFromStores = media(onPress[7]).useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
  const items1 = [media.author];
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
  const obj2 = media(onPress[7]);
  sharedValue = media(onPress[8]).useSharedValue(animate ? constants.HIDDEN : constants.VISIBLE);
  const tmp3Result = media(onPress[8]);
  const fn = function f() {
    const obj = { opacity: null };
    value = sharedValue.get();
    obj.opacity = timing.withTiming(value, timingPresets.timingStandard);
    return obj;
  };
  const tmp3Result2 = media(onPress[8]);
  fn.__closure = {
    withTiming: media(onPress[9]).withTiming,
    opacity: sharedValue,
    timingStandard: media(onPress[10]).timingStandard,
  };
  fn.__workletHash = 9644750191833;
  fn.__initData = __initData;
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
    const obj6 = {
      sources: null,
      embed: null,
      messageId: null,
      channelId: null,
      authorId: null,
      scale: null,
      containerHeight: null,
      containerWidth: null,
    };
    ({ sources: obj8.sources, embed: obj8.embed, messageId: obj8.messageId, channelId: obj8.channelId } = media);
    obj6.authorId = media.author.id;
    obj6.scale = scale;
    obj6.containerHeight = size;
    obj6.containerWidth = size;
    tmp14Result = closure_9(tmp3(tmp4[11]).SearchEmbedMediaImage, obj6);
  }
  const items6 = [tmp14Result, , , ,];
  let tmp14Result5 = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp14Result5) {
    const obj7 = {
      attachment: null,
      channelId: null,
      authorId: null,
      scale: null,
      containerHeight: null,
      containerWidth: null,
    };
    ({ attachment: obj9.attachment, channelId: obj9.channelId } = media);
    obj7.authorId = media.author.id;
    obj7.scale = scale;
    obj7.containerHeight = size;
    obj7.containerWidth = size;
    tmp14Result5 = closure_9(tmp3(tmp4[11]).SearchAttachmentMediaImage, obj7);
  }
  items6[1] = tmp14Result5;
  let tmp14Result6 = media.type === SearchMediaTypes.AUDIO;
  if (tmp14Result6) {
    const size1 = { height: size, width: size };
    tmp14Result6 = closure_9(tmp3(tmp4[11]).SearchSoundMediaImage, size1);
  }
  items6[2] = tmp14Result6;
  let tmp14Result7 = media.type === SearchMediaTypes.COMPONENT;
  if (tmp14Result7) {
    const obj10 = {
      unfurledMediaItem: null,
      sources: null,
      channelId: null,
      authorId: null,
      isBot: null,
      scale: null,
      containerHeight: null,
      containerWidth: null,
    };
    ({ unfurledMediaItem: obj11.unfurledMediaItem, sources: obj11.sources, channelId: obj11.channelId } = media);
    obj10.authorId = media.author.id;
    obj10.isBot = media.author.bot;
    obj10.scale = scale;
    obj10.containerHeight = size;
    obj10.containerWidth = size;
    tmp14Result7 = closure_9(tmp3(tmp4[11]).SearchComponentMediaImage, obj10);
  }
  items6[3] = tmp14Result7;
  let tmp14Result8 = null != memo;
  if (tmp14Result8) {
    const obj12 = { style: tmp.avatar, children: null };
    const obj13 = { shadow: "low", style: tmp.card, children: null };
    const obj14 = {
      source: memo,
      size: tmp3(tmp4[13]).AvatarSizes.XSMALL,
      avatarDecoration: media.author.avatarDecoration,
    };
    obj13.children = closure_9(tmp3(tmp4[13]).Avatar, obj14);
    obj12.children = closure_9(tmp3(tmp4[12]).Card, obj13);
    tmp14Result8 = closure_9(stateFromStores, obj12);
  }
  items6[4] = tmp14Result8;
  obj5.children = items6;
  obj4.children = closure_10(sharedValue, obj5);
  return closure_9(size(onPress[8]).View, obj4);
});
