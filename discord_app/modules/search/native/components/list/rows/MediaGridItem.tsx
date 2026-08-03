import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchMediaTypes } from "MessageEmbedTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ View: c4, Pressable: c5, useWindowDimensions: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { container: null, avatar: null, card: null };
obj = { borderRadius: require("Themes").radii.xs, overflow: "hidden", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[0] = obj;
obj[1] = { position: "absolute", top: 8, right: 8 };
obj[2] = { padding: 0 };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_13 = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const memoResult = importAllResult.memo(function MediaGridItem(media) {
  let animate;
  let containerStyle;
  media = media.media;
  const size = media.size;
  const onPress = media.onPress;
  let ref;
  let stateFromStores;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = callback2();
  const scale = callback().scale;
  let obj = ref;
  ref = ref.useRef(null);
  let obj1 = media(onPress[7]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getChannel(media.channelId));
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
  callback = obj.useCallback(() => {
    onPress({ media, originView: ref.current });
  }, items2);
  let tmp3Result = tmp3(tmp4[8]);
  sharedValue = tmp3Result.useSharedValue(animate ? tmp9.HIDDEN : tmp9.VISIBLE);
  tmp3Result = tmp3(tmp4[8]);
  const fn = function f() {
    const obj = { opacity: null };
    const value = sharedValue.get();
    obj[0] = media(onPress[9]).withTiming(value, media(onPress[10]).timingStandard);
    return obj;
  };
  obj = { withTiming: tmp3(tmp4[9]).withTiming, opacity: sharedValue, timingStandard: tmp3(tmp4[10]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 9644750191833;
  fn.__initData = closure_13;
  const items3 = [sharedValue];
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(outer1_12.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = obj.useMemo(() => ({ width: size, height: size }), items4);
  obj = { style: items5, children: null };
  items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj1 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: null };
  let tmp14Result = media.type === SearchMediaTypes.EMBED;
  if (tmp14Result) {
    const obj2 = { sources: null, embed: null, messageId: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ sources: obj8[0], embed: obj8[1], messageId: obj8[2], channelId: obj8[3] } = media);
    obj2[4] = media.author.id;
    obj2[5] = scale;
    obj2[6] = size;
    obj2[7] = size;
    tmp14Result = tmp14(tmp3(tmp4[11]).SearchEmbedMediaImage, obj2);
  }
  const items6 = [tmp14Result, , , , ];
  tmp14Result = media.type === tmp17.ATTACHMENT;
  if (tmp14Result) {
    const obj3 = { attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ attachment: obj9[0], channelId: obj9[1] } = media);
    obj3[2] = media.author.id;
    obj3[3] = scale;
    obj3[4] = size;
    obj3[5] = size;
    tmp14Result = tmp14(tmp3(tmp4[11]).SearchAttachmentMediaImage, obj3);
  }
  items6[1] = tmp14Result;
  let tmp14Result1 = media.type === tmp17.AUDIO;
  if (tmp14Result1) {
    const obj4 = { height: null, width: null };
    obj4[0] = size;
    obj4[1] = size;
    tmp14Result1 = tmp14(tmp3(tmp4[11]).SearchSoundMediaImage, obj4);
  }
  items6[2] = tmp14Result1;
  let tmp14Result2 = media.type === tmp17.COMPONENT;
  if (tmp14Result2) {
    const obj5 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: null, isBot: null, scale: null, containerHeight: null, containerWidth: null };
    ({ unfurledMediaItem: obj11[0], sources: obj11[1], channelId: obj11[2] } = media);
    obj5[3] = media.author.id;
    obj5[4] = media.author.bot;
    obj5[5] = scale;
    obj5[6] = size;
    obj5[7] = size;
    tmp14Result2 = tmp14(tmp3(tmp4[11]).SearchComponentMediaImage, obj5);
  }
  items6[3] = tmp14Result2;
  let tmp14Result3 = null != memo;
  if (tmp14Result3) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.avatar;
    const obj7 = { shadow: "low", style: null, children: null };
    obj7[1] = tmp.card;
    const obj8 = { source: null, size: null, avatarDecoration: null };
    obj8[0] = memo;
    obj8[1] = tmp3(tmp4[13]).AvatarSizes.XSMALL;
    obj8[2] = media.author.avatarDecoration;
    obj7[2] = tmp14(tmp3(tmp4[13]).Avatar, obj8);
    obj6[1] = tmp14(tmp3(tmp4[12]).Card, obj7);
    tmp14Result3 = tmp14(stateFromStores, obj6);
  }
  items6[4] = tmp14Result3;
  obj1[4] = items6;
  obj[1] = closure_10(sharedValue, obj1);
  return closure_9(size(onPress[8]).View, obj);
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;