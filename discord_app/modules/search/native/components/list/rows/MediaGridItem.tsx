// === Module 19091: MediaGridItem ===

// Module 19091 (MediaGridItem)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: closure_6 } = get_ActivityIndicator);
const SearchMediaTypes = fn(9917).SearchMediaTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
const obj = { container: { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, avatar: { position: "absolute", top: 8, right: 8 }, card: { padding: 0 } };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_13 = { code: "(function MediaGridItemTsx1(){let[withTiming,opacity,timingStandard]=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};})" };
let obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default noop.memo(function MediaGridItem(media) {
  media = media.media;
  _require = media;
  let size = media.size;
  importDefault = size;
  const onPress = media.onPress;
  dependencyMap = onPress;
  let ref;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = closure_11();
  const scale = closure_6().scale;
  ref = ref.useRef(null);
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
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
    _undefined2({ media, originView: ref.current });
  }, items2);
  const obj2 = require("initialize");
  sharedValue = require("module_1652").useSharedValue(animate ? constants.HIDDEN : constants.VISIBLE);
  const tmp3Result = require("module_1652");
  const items3 = [closure_13, require("timing/timing").withTiming, sharedValue, require("timingPresets").timingStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items3;
  class MediaGridItemTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items4 = [tmp12, tmp13, tmp14];
  MediaGridItemTsx1.__closure = items4;
  MediaGridItemTsx1.__workletHash = 6522710444704;
  MediaGridItemTsx1.__initData = tmp11;
  const items5 = [sharedValue];
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaGridItemTsx1);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items5);
  const items6 = [size];
  const memo1 = obj.useMemo(() => {
    const size = { width: _undefined, height: _undefined };
    return size;
  }, items6);
  const obj3 = { style: null, children: null };
  const items7 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj3.style = items7;
  const obj4 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: null };
  let tmp18Result = media.type === SearchMediaTypes.EMBED;
  if (tmp18Result) {
    const obj5 = { sources: null, embed: null, messageId: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ sources: obj7.sources, embed: obj7.embed, messageId: obj7.messageId, channelId: obj7.channelId } = media);
    obj5.authorId = media.author.id;
    obj5.scale = scale;
    obj5.containerHeight = size;
    obj5.containerWidth = size;
    tmp18Result = closure_9(tmp3(19092).SearchEmbedMediaImage, obj5);
  }
  const items8 = [tmp18Result, , , , ];
  let tmp18Result5 = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp18Result5) {
    const obj6 = { attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null };
    ({ attachment: obj8.attachment, channelId: obj8.channelId } = media);
    obj6.authorId = media.author.id;
    obj6.scale = scale;
    obj6.containerHeight = size;
    obj6.containerWidth = size;
    tmp18Result5 = closure_9(tmp3(19092).SearchAttachmentMediaImage, obj6);
  }
  items8[1] = tmp18Result5;
  let tmp18Result6 = media.type === SearchMediaTypes.AUDIO;
  if (tmp18Result6) {
    const size1 = { height: size, width: size };
    tmp18Result6 = closure_9(tmp3(19092).SearchSoundMediaImage, size1);
  }
  items8[2] = tmp18Result6;
  let tmp18Result7 = media.type === SearchMediaTypes.COMPONENT;
  if (tmp18Result7) {
    const obj9 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: null, isBot: null, scale: null, containerHeight: null, containerWidth: null };
    ({ unfurledMediaItem: obj10.unfurledMediaItem, sources: obj10.sources, channelId: obj10.channelId } = media);
    obj9.authorId = media.author.id;
    obj9.isBot = media.author.bot;
    obj9.scale = scale;
    obj9.containerHeight = size;
    obj9.containerWidth = size;
    tmp18Result7 = closure_9(tmp3(19092).SearchComponentMediaImage, obj9);
  }
  items8[3] = tmp18Result7;
  let tmp18Result8 = null != memo;
  if (tmp18Result8) {
    const obj11 = { style: tmp.avatar, children: null };
    const obj12 = { shadow: "low", style: tmp.card, children: null };
    const obj13 = { source: memo, size: tmp3(1187).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    obj12.children = closure_9(tmp3(1187).Avatar, obj13);
    obj11.children = closure_9(tmp3(7040).Card, obj12);
    tmp18Result8 = closure_9(stateFromStores, obj11);
  }
  items8[4] = tmp18Result8;
  obj4.children = items8;
  obj3.children = closure_10(sharedValue, obj4);
  return closure_9(_modDef1652.View, obj3);
});