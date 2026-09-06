// discord_app/modules/search/native/components/list/rows/MediaGridItem.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: metroRequire } = get_ActivityIndicator);
const SearchMediaTypes = fn(7878).SearchMediaTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, avatar: null, card: null };
obj = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.container = obj;
obj.avatar = { position: "absolute", top: 8, right: 8 };
obj.card = { padding: 0 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = {
  code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}",
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
  let obj = ref;
  ref = ref.useRef(null);
  let obj1 = media(onPress[7]);
  const items = [ChannelStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
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
  let tmp3Result = tmp3(tmp4[8]);
  sharedValue = tmp3Result.useSharedValue(animate ? constants.HIDDEN : constants.VISIBLE);
  tmp3Result = tmp3(tmp4[8]);
  const fn = function f() {
    const obj = { opacity: null };
    value = sharedValue.get();
    obj.opacity = timing.withTiming(value, timingPresets.timingStandard);
    return obj;
  };
  obj = { withTiming: tmp3(tmp4[9]).withTiming, opacity: sharedValue, timingStandard: tmp3(tmp4[10]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 9644750191833;
  fn.__initData = __initData;
  const items3 = [sharedValue];
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = obj.useMemo(() => {
    size = { width: size, height: size };
    return size;
  }, items4);
  obj = { style: null, children: null };
  const items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj.style = items5;
  obj1 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: null };
  let tmp14Result = media.type === SearchMediaTypes.EMBED;
  if (tmp14Result) {
    const obj2 = {
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
    obj2.authorId = media.author.id;
    obj2.scale = scale;
    obj2.containerHeight = size;
    obj2.containerWidth = size;
    tmp14Result = closure_9(tmp3(tmp4[11]).SearchEmbedMediaImage, obj2);
  }
  const items6 = [tmp14Result, , , ,];
  tmp14Result = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp14Result) {
    const obj3 = {
      attachment: null,
      channelId: null,
      authorId: null,
      scale: null,
      containerHeight: null,
      containerWidth: null,
    };
    ({ attachment: obj9.attachment, channelId: obj9.channelId } = media);
    obj3.authorId = media.author.id;
    obj3.scale = scale;
    obj3.containerHeight = size;
    obj3.containerWidth = size;
    tmp14Result = closure_9(tmp3(tmp4[11]).SearchAttachmentMediaImage, obj3);
  }
  items6[1] = tmp14Result;
  let tmp14Result1 = media.type === SearchMediaTypes.AUDIO;
  if (tmp14Result1) {
    size = { height: null, width: null };
    size.height = size;
    size.width = size;
    tmp14Result1 = closure_9(tmp3(tmp4[11]).SearchSoundMediaImage, size);
  }
  items6[2] = tmp14Result1;
  let tmp14Result2 = media.type === SearchMediaTypes.COMPONENT;
  if (tmp14Result2) {
    const obj4 = {
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
    obj4.authorId = media.author.id;
    obj4.isBot = media.author.bot;
    obj4.scale = scale;
    obj4.containerHeight = size;
    obj4.containerWidth = size;
    tmp14Result2 = closure_9(tmp3(tmp4[11]).SearchComponentMediaImage, obj4);
  }
  items6[3] = tmp14Result2;
  let tmp14Result3 = null != memo;
  if (tmp14Result3) {
    const obj5 = { style: tmp.avatar, children: null };
    const obj6 = { shadow: "low", style: tmp.card, children: null };
    const obj7 = {
      source: memo,
      size: tmp3(tmp4[13]).AvatarSizes.XSMALL,
      avatarDecoration: media.author.avatarDecoration,
    };
    obj6.children = closure_9(tmp3(tmp4[13]).Avatar, obj7);
    obj5.children = closure_9(tmp3(tmp4[12]).Card, obj6);
    tmp14Result3 = closure_9(stateFromStores, obj5);
  }
  items6[4] = tmp14Result3;
  obj1.children = items6;
  obj.children = closure_10(sharedValue, obj1);
  return closure_9(size(onPress[8]).View, obj);
});
