// === Module 19203: VoicePanelDockStatusViews ===

// Module 19203 (VoicePanelDockStatusViews)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import spring_spring from "spring/spring" /* 5939 */;
import useChannelName from "useChannelName" /* 5954 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7219 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14856 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
let closure_12 = fn(19202).useDockUserPlayingSoundboardId;
const VoicePanelDockConstants = fn(12009);
({ DOCK_FADE_TIMING: map1, DOCK_TILE_RADIUS, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const sum = DOCK_TILE_SIZE + 4;
const createStyles = fn(5306);
let obj = { face: null, avatar: null, avatarImage: null, ring: null, halo: null, haloDisc: null, guildIcon: null, guildIconAsset: null, avatarShadow: null, titleRow: null, title: null, soundboardEmoji: null, soundboardEmojiText: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.face = obj3;
let size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_SIZE / 2, overflow: "hidden" };
obj.avatar = size;
obj.avatarImage = { width: "100%", height: "100%" };
const size1 = { position: "absolute", top: "50%", left: "50%", marginTop: null, marginLeft: null, width: sum, height: sum, borderRadius: sum / 2, borderWidth: 1 };
let result = -sum / 2;
size1.marginTop = result;
size1.marginLeft = result;
obj.ring = size1;
obj.halo = { position: "absolute", top: "50%", left: "50%", width: 50, height: 50, marginTop: -25, marginLeft: -25 };
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderRadius = 25;
obj.haloDisc = obj4;
const size2 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
obj.guildIcon = size2;
obj.guildIconAsset = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS };
const size3 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
obj.avatarShadow = size3;
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: VoicePanelDockConstants.DOCK_GLYPH_GAP };
obj.title = { flexShrink: 1 };
obj.soundboardEmoji = { width: 16, height: 16 };
const PlatformUtils = fn(1380);
let num;
if (PlatformUtils.isIOS()) {
  num = 16;
}
obj.soundboardEmojiText = { height: 16, fontSize: num, lineHeight: 20 };
let closure_18 = createStyles.createStyles(obj);
let closure_19 = { code: "(function VoicePanelDockStatusViewsTsx1(){let[contentFade]=this.__closure;return{opacity:contentFade.get()};})" };
let closure_20 = { code: "(function VoicePanelDockStatusViewsTsx2(){let[progress,DOCK_TILE_SIZE,RING_BOX]=this.__closure;const value=progress.get();const startScale=DOCK_TILE_SIZE/RING_BOX;return{opacity:Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_21 = noop.memo(function DockSpeakingRing(speaking) {
  speaking = speaking.speaking;
  _require = speaking;
  let ICON_VOICE_SPEAKING = speaking.color;
  if (ICON_VOICE_SPEAKING === undefined) {
    ICON_VOICE_SPEAKING = nativeDefault.colors.ICON_VOICE_SPEAKING;
  }
  const tmp3 = closure_18();
  const token = require("useToken").useToken(ICON_VOICE_SPEAKING);
  let obj = require("useToken");
  const sharedValue = require("module_1655").useSharedValue(0);
  items = [sharedValue, speaking];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  const obj2 = require("module_1655");
  const items1 = [closure_20, sharedValue, DOCK_TILE_SIZE, closure_17];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items1;
  class VoicePanelDockStatusViewsTsx2 {
    constructor() {
      value = closure_0.get();
      result = closure_1 / closure_2;
      obj = { opacity: Math.min(2 * value, 1), transform: null };
      obj1 = { scale: result + (1 - result) * value };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp9, tmp10, tmp11];
  VoicePanelDockStatusViewsTsx2.__closure = items2;
  VoicePanelDockStatusViewsTsx2.__workletHash = 15493241536198;
  VoicePanelDockStatusViewsTsx2.__initData = tmp8;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockStatusViewsTsx2);
  const obj4 = { style: null, pointerEvents: "none" };
  const items3 = [tmp3.ring, { borderColor: token }, animatedStyle];
  obj4.style = items3;
  return closure_15(_modDef1655.View, obj4);
});
let closure_22 = { code: "(function VoicePanelDockStatusViewsTsx3(){let[progress,RING_BOX,HALO_SPEAKING_SIZE]=this.__closure;const value=progress.get();const startScale=RING_BOX/HALO_SPEAKING_SIZE;return{opacity:0.15*Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_23 = noop.memo(function DockSpeakerHalo(isSpeaking) {
  isSpeaking = isSpeaking.isSpeaking;
  _require = isSpeaking;
  let ICON_VOICE_SPEAKING = isSpeaking.color;
  if (ICON_VOICE_SPEAKING === undefined) {
    ICON_VOICE_SPEAKING = nativeDefault.colors.ICON_VOICE_SPEAKING;
  }
  const tmp3 = closure_18();
  const token = require("useToken").useToken(ICON_VOICE_SPEAKING);
  let obj = require("useToken");
  const voicePanelDockSpeakerLevelProps = require("useVoicePanelDockLevelProps").useVoicePanelDockSpeakerLevelProps();
  const obj2 = require("useVoicePanelDockLevelProps");
  const sharedValue = require("module_1655").useSharedValue(0);
  items = [sharedValue, isSpeaking];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  const obj3 = require("module_1655");
  const items1 = [closure_22, sharedValue, closure_17, 42];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  class VoicePanelDockStatusViewsTsx3 {
    constructor() {
      value = closure_0.get();
      result = closure_1 / closure_2;
      obj = { opacity: 0.15 * Math.min(2 * value, 1), transform: null };
      obj1 = { scale: result + (1 - result) * value };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  VoicePanelDockStatusViewsTsx3.__closure = items2;
  VoicePanelDockStatusViewsTsx3.__workletHash = 4795763946999;
  VoicePanelDockStatusViewsTsx3.__initData = tmp9;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockStatusViewsTsx3);
  const obj5 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp3.halo, animatedStyle];
  obj5.style = items3;
  const obj6 = { style: StyleSheet.absoluteFill, userId: isSpeaking.userId };
  const obj4 = require("module_1655");
  const merged = Object.assign(voicePanelDockSpeakerLevelProps);
  obj6.minScale = 0.84;
  obj6.maxScale = 1;
  const obj7 = { style: null };
  const items4 = [tmp3.haloDisc, { backgroundColor: token }];
  obj7.style = items4;
  obj6.children = closure_15(View, obj7);
  obj5.children = closure_15(LiveVoiceLevelViewDefault, obj6);
  return closure_15(_modDef1655.View, obj5);
});
let closure_24 = { code: "(function VoicePanelDockStatusViewsTsx4(){let[interpolate,dim,dimmedOpacity]=this.__closure;return{opacity:interpolate(dim.get(),[0,1],[1,dimmedOpacity])};})" };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusViews.tsx");

export function DockChannelIcon(streaming) {
  streaming = streaming.streaming;
  let channelId;
  let guildId;
  const tmp = closure_18();
  const tmp4Result = guildId(19204)(channelId(575).Shadow.SHADOW_MEDIUM);
  const context = noop.useContext(guildId(11984));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp4 = guildId(19204);
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj = channelId(504);
  const items2 = [ChannelStore, UserStore];
  const items3 = [channelId, guildId];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => {
    if (null != guildId) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      let first;
      if (channel != null) {
        const recipients = channel.recipients;
        if (recipients != null) {
          first = recipients[0];
        }
      }
      let user = null;
      if (null != first) {
        user = UserStore.getUser(first);
      }
      return user;
    }
  }, items3);
  if (null != stateFromStores) {
    const obj3 = { style: null, children: null };
    const items4 = [tmp.guildIcon, ];
    const obj4 = { boxShadow: tmp4Result };
    items4[1] = obj4;
    obj3.style = items4;
    const obj5 = { streaming, children: null };
    const obj6 = { guild: stateFromStores, size: null, style: null };
    const tmp2Result = tmp2(19205);
    obj6.size = tmp5(7720).GuildIconSizes.SMALL_32;
    obj6.style = tmp.guildIconAsset;
    obj5.children = closure_15(tmp2(7720), obj6);
    obj3.children = closure_15(tmp2Result, obj5);
    let tmp13 = closure_15(View, obj3);
    const tmp2Result3 = tmp2(7720);
  } else {
    tmp13 = null;
    if (null != stateFromStores1) {
      const obj7 = { style: null, children: null };
      const items5 = [tmp.avatarShadow, ];
      const obj8 = { boxShadow: tmp4Result };
      items5[1] = obj8;
      obj7.style = items5;
      const obj9 = { streaming, children: null };
      const obj10 = { user: stateFromStores1, guildId: "Array", size: tmp5(1187).AvatarSizes.REFRESH_MEDIUM_32 };
      obj9.children = closure_15(tmp5(1187).Avatar, obj10);
      obj7.children = closure_15(tmp2(19205), obj9);
      tmp13 = closure_15(View, obj7);
      const tmp2Result4 = tmp2(19205);
    }
  }
  return tmp13;
}
export function DockChannelTitle() {
  const tmp = closure_18();
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => isRoleRequiredDefault(ChannelStore.getChannel(channelId)), items1);
  let obj = channelId(504);
  const items2 = [ChannelStore, UserStore, RelationshipStore];
  const items3 = [channelId];
  const obj3 = { style: tmp.titleRow, children: null };
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      let channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    } else {
      const intl = util.intl;
      channelName = intl.string(util.t.zLZPmk);
    }
    return channelName;
  }, items3);
  if (stateFromStores) {
    let VoiceNormalIcon = tmp4(8094).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(7432).VoiceNormalIcon;
  }
  const obj2 = channelId(504);
  const items4 = [closure_15(VoiceNormalIcon, { size: "sm", color: nativeDefault.colors.ICON_DEFAULT }), closure_15(channelId(5929).Text, { variant: "body-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 })];
  obj3.children = items4;
  return closure_16(View, obj3);
}
export function DockUserTitle(userId) {
  userId = userId.userId;
  _require = userId;
  importDefault = undefined;
  let sharedValue;
  noop = undefined;
  const tmp = closure_18();
  const context = noop.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  items = [UserStore];
  const items1 = [userId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  const obj2 = require("initialize");
  let name = require("NicknameUtils").useName(context.guildId, channelId, stateFromStores);
  const tmp7 = closure_12(channelId, userId);
  importDefault = tmp7;
  const obj3 = require("NicknameUtils");
  const items2 = [SoundboardStore];
  const items3 = [tmp7];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let soundById;
    if (null != closure_1) {
      soundById = SoundboardStore.getSoundById(tmp);
    }
    return soundById;
  }, items3);
  let soundId;
  if (stateFromStores1 != null) {
    soundId = stateFromStores1.soundId;
  }
  if (soundId == null) {
    soundId = null;
  }
  const obj4 = require("initialize");
  sharedValue = require("module_1655").useSharedValue(1);
  noop = obj.useRef(true);
  const items4 = [sharedValue, soundId];
  const effect = obj.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(timing_timing.withTiming(1, state));
    }
  }, items4);
  const tmp5Result = require("module_1655");
  const items5 = [closure_19, sharedValue];
  _require = undefined;
  [tmp12, tmp13] = items5;
  class VoicePanelDockStatusViewsTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp13];
  VoicePanelDockStatusViewsTsx1.__closure = items6;
  VoicePanelDockStatusViewsTsx1.__workletHash = 9926830297549;
  VoicePanelDockStatusViewsTsx1.__initData = tmp12;
  let tmp15 = null != stateFromStores1;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockStatusViewsTsx1);
  if (tmp15) {
    tmp15 = null != stateFromStores1.emojiId || null != stateFromStores1.emojiName;
    const tmp16 = null != stateFromStores1.emojiId || null != stateFromStores1.emojiName;
  }
  const obj5 = { style: null, children: null };
  const items7 = [tmp.titleRow, animatedStyle];
  obj5.style = items7;
  let tmp19Result = null;
  if (null != stateFromStores1) {
    tmp19Result = null;
    if (tmp15) {
      const obj6 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
      ({ soundboardEmoji: obj8.fastImageStyle, soundboardEmojiText: obj8.textEmojiStyle } = tmp);
      obj6.src = tmp2(tmp3[30])(stateFromStores1, 16);
      let str = stateFromStores1.emojiName;
      if (str == null) {
        str = "";
      }
      obj6.name = str;
      tmp19Result = closure_15(tmp2(tmp3[29]), obj6);
      const tmp2Result = tmp2(tmp3[29]);
    }
  }
  const items8 = [tmp19Result, ];
  let str2 = "text-default";
  if (userId.dimmed) {
    str2 = "text-default";
    if (null == stateFromStores1) {
      str2 = "text-subtle";
    }
  }
  const obj7 = { variant: "body-md/medium", color: str2, lineClamp: 1, style: tmp.title, children: null };
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  obj7.children = name;
  items8[1] = closure_15(require("Text/Text").Text, obj7);
  obj5.children = items8;
  return closure_16(require("module_1655").View, obj5);
}
export function DockFace(userId) {
  userId = userId.userId;
  _require = userId;
  const dimmed = userId.dimmed;
  importDefault = dimmed;
  let entered = userId.entered;
  let stateFromStores;
  let sharedValue;
  const tmp = closure_18();
  const context = stateFromStores.useContext(VoicePanelStateContextDefault);
  const guildId = context.guildId;
  dependencyMap = guildId;
  items = [UserStore];
  const items1 = [userId];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  const obj2 = require("initialize");
  const items2 = [SpeakingStore];
  const items3 = [userId];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => SpeakingStore.isSpeaking(c0), items3);
  const tmp8 = null != closure_12(context.channelId, userId);
  if (tmp8) {
    const REDESIGN_INPUT_CONTROL_SELECTED = tmp2(575).colors.REDESIGN_INPUT_CONTROL_SELECTED;
  }
  let tmp9 = stateFromStores1;
  if (!stateFromStores1) {
    tmp9 = tmp8;
  }
  const items4 = [stateFromStores, guildId];
  const memo = obj.useMemo(() => {
    let avatarSource;
    if (stateFromStores != null) {
      avatarSource = stateFromStores.getAvatarSource(c2, false, DOCK_TILE_SIZE);
    }
    return avatarSource;
  }, items4);
  const obj3 = require("initialize");
  let num = 0;
  if (dimmed) {
    num = 1;
  }
  sharedValue = require("module_1655").useSharedValue(num);
  const items5 = [sharedValue, dimmed];
  const effect = obj.useEffect(() => {
    let num = 0;
    if (c1) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, state));
  }, items5);
  const tmp5Result = require("module_1655");
  const items6 = [closure_24, require("module_1655").interpolate, sharedValue, 0.5];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items6;
  class VoicePanelDockStatusViewsTsx4 {
    constructor() {
      obj = { opacity: null };
      items = [1];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items7 = [tmp14, tmp15, tmp16];
  VoicePanelDockStatusViewsTsx4.__closure = items7;
  VoicePanelDockStatusViewsTsx4.__workletHash = 4994476425561;
  VoicePanelDockStatusViewsTsx4.__initData = tmp13;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockStatusViewsTsx4);
  const obj4 = { style: null, pointerEvents: "none", children: null };
  const items8 = [tmp.face, animatedStyle];
  obj4.style = items8;
  let tmp19 = entered;
  if (entered) {
    const obj5 = { userId, isSpeaking: tmp9, color: REDESIGN_INPUT_CONTROL_SELECTED };
    tmp19 = closure_15(closure_23, obj5);
  }
  const items9 = [tmp19, , ];
  if (entered) {
    const obj6 = { speaking: tmp9, color: REDESIGN_INPUT_CONTROL_SELECTED };
    entered = closure_15(closure_21, obj6);
  }
  items9[1] = entered;
  let tmp24 = null;
  if (null != memo) {
    const obj7 = { style: tmp.avatar, children: null };
    const obj8 = { style: tmp.avatarImage, source: memo };
    obj7.children = closure_15(tmp2(6020), obj8);
    tmp24 = closure_15(View, obj7);
  }
  items9[2] = tmp24;
  obj4.children = items9;
  return closure_16(_modDef1655.View, obj4);
}