// === Module 19822: VoicePanelDockStatusViews ===

// Module 19822 (VoicePanelDockStatusViews)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import spring_spring from "spring/spring" /* 5876 */;
import useChannelName from "useChannelName" /* 5891 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7156 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11924 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14746 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildStore from "GuildStore" /* 5114 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import SpeakingStore from "SpeakingStore" /* 6878 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const VoicePanelDockConstants = fn(11948);
({ DOCK_FADE_TIMING: closure_11, DOCK_TILE_RADIUS, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const sum = DOCK_TILE_SIZE + 4;
const createStyles = fn(5243);
let obj = { face: null, avatar: null, avatarImage: null, ring: null, halo: null, haloDisc: null, guildIcon: null, guildIconAsset: null, avatarShadow: null, titleRow: null, title: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj.face = obj3;
let size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_SIZE / 2, overflow: "hidden" };
obj.avatar = size;
obj.avatarImage = { width: "100%", height: "100%" };
const size1 = { position: "absolute", top: "50%", left: "50%", marginTop: null, marginLeft: null, width: sum, height: sum, borderRadius: sum / 2, borderWidth: 1, borderColor: nativeDefault.colors.ICON_VOICE_SPEAKING };
let result = -sum / 2;
size1.marginTop = result;
size1.marginLeft = result;
obj.ring = size1;
obj.halo = { position: "absolute", top: "50%", left: "50%", width: 50, height: 50, marginTop: -25, marginLeft: -25 };
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderRadius = 25;
obj4.backgroundColor = nativeDefault.colors.ICON_VOICE_SPEAKING;
obj.haloDisc = obj4;
const size2 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
obj.guildIcon = size2;
obj.guildIconAsset = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS };
const size3 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
obj.avatarShadow = size3;
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: VoicePanelDockConstants.DOCK_GLYPH_GAP };
obj.title = { flexShrink: 1 };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = { code: "(function VoicePanelDockStatusViewsTsx1(){let[progress,DOCK_TILE_SIZE,RING_BOX]=this.__closure;const value=progress.get();const startScale=DOCK_TILE_SIZE/RING_BOX;return{opacity:Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_18 = noop.memo(function DockSpeakingRing(speaking) {
  speaking = speaking.speaking;
  _require = speaking;
  const tmp = closure_16();
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [sharedValue, speaking];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  let obj = require("module_1652");
  const items1 = [closure_17, sharedValue, DOCK_TILE_SIZE, closure_15];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  class VoicePanelDockStatusViewsTsx1 {
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
  const items2 = [tmp6, tmp7, tmp8];
  VoicePanelDockStatusViewsTsx1.__closure = items2;
  VoicePanelDockStatusViewsTsx1.__workletHash = 3561359542085;
  VoicePanelDockStatusViewsTsx1.__initData = tmp5;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockStatusViewsTsx1);
  const obj3 = { style: null, pointerEvents: "none" };
  const items3 = [tmp.ring, animatedStyle];
  obj3.style = items3;
  return closure_13(_modDef1652.View, obj3);
});
let closure_19 = { code: "(function VoicePanelDockStatusViewsTsx2(){let[progress,RING_BOX,HALO_SPEAKING_SIZE]=this.__closure;const value=progress.get();const startScale=RING_BOX/HALO_SPEAKING_SIZE;return{opacity:0.15*Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_20 = noop.memo(function DockSpeakerHalo(isSpeaking) {
  isSpeaking = isSpeaking.isSpeaking;
  _require = isSpeaking;
  const tmp = closure_16();
  const voicePanelDockSpeakerLevelProps = require("useVoicePanelDockLevelProps").useVoicePanelDockSpeakerLevelProps();
  let obj = require("useVoicePanelDockLevelProps");
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [sharedValue, isSpeaking];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(spring_spring.withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  const obj2 = require("module_1652");
  const items1 = [closure_19, sharedValue, closure_15, 42];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class VoicePanelDockStatusViewsTsx2 {
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
  const items2 = [tmp7, tmp8, tmp9];
  VoicePanelDockStatusViewsTsx2.__closure = items2;
  VoicePanelDockStatusViewsTsx2.__workletHash = 13095623805046;
  VoicePanelDockStatusViewsTsx2.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockStatusViewsTsx2);
  const obj4 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp.halo, animatedStyle];
  obj4.style = items3;
  const obj5 = { style: StyleSheet.absoluteFill, userId: isSpeaking.userId };
  const obj3 = require("module_1652");
  const merged = Object.assign(voicePanelDockSpeakerLevelProps);
  obj5.minScale = 0.84;
  obj5.maxScale = 1;
  obj5.children = closure_13(View, { style: tmp.haloDisc });
  obj4.children = closure_13(LiveVoiceLevelViewDefault, obj5);
  return closure_13(_modDef1652.View, obj4);
});
let closure_21 = { code: "(function VoicePanelDockStatusViewsTsx3(){let[interpolate,dim,dimmedOpacity]=this.__closure;return{opacity:interpolate(dim.get(),[0,1],[1,dimmedOpacity])};})" };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusViews.tsx");

export function DockChannelIcon(streaming) {
  streaming = streaming.streaming;
  let channelId;
  let guildId;
  const tmp = closure_16();
  const tmp4Result = guildId(19823)(channelId(575).Shadow.SHADOW_MEDIUM);
  const context = noop.useContext(guildId(11924));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp4 = guildId(19823);
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
    const tmp2Result = tmp2(19824);
    obj6.size = tmp5(7654).GuildIconSizes.SMALL_32;
    obj6.style = tmp.guildIconAsset;
    obj5.children = closure_13(tmp2(7654), obj6);
    obj3.children = closure_13(tmp2Result, obj5);
    let tmp13 = closure_13(View, obj3);
    const tmp2Result3 = tmp2(7654);
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
      obj9.children = closure_13(tmp5(1187).Avatar, obj10);
      obj7.children = closure_13(tmp2(19824), obj9);
      tmp13 = closure_13(View, obj7);
      const tmp2Result4 = tmp2(19824);
    }
  }
  return tmp13;
}
export function DockChannelTitle() {
  const tmp = closure_16();
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
    let VoiceNormalIcon = tmp4(8029).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(7368).VoiceNormalIcon;
  }
  const obj2 = channelId(504);
  const items4 = [closure_13(VoiceNormalIcon, { size: "sm", color: nativeDefault.colors.ICON_DEFAULT }), closure_13(channelId(5866).Text, { variant: "body-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 })];
  obj3.children = items4;
  return closure_14(View, obj3);
}
export function DockUserTitle(userId) {
  userId = userId.userId;
  const tmp = closure_16();
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ channelId, guildId } = context);
  items = [UserStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj = userId(504);
  const obj3 = { style: tmp.titleRow, children: null };
  const name = userId(6288).useName(guildId, channelId, stateFromStores);
  let str = "text-default";
  if (userId.dimmed) {
    str = "text-subtle";
  }
  obj3.children = closure_13(userId(5866).Text, { variant: "body-md/medium", color: str, lineClamp: 1, style: tmp.title, children: name });
  return closure_13(View, obj3);
}
export function DockFace(userId) {
  userId = userId.userId;
  _require = userId;
  const dimmed = userId.dimmed;
  importDefault = dimmed;
  let entered = userId.entered;
  let stateFromStores;
  let sharedValue;
  const tmp = closure_16();
  const guildId = stateFromStores.useContext(VoicePanelStateContextDefault).guildId;
  dependencyMap = guildId;
  items = [UserStore];
  const items1 = [userId];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(c0), items1);
  let obj = stateFromStores;
  const obj2 = require("initialize");
  const items2 = [SpeakingStore];
  const items3 = [userId];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => SpeakingStore.isSpeaking(c0), items3);
  const items4 = [stateFromStores, guildId];
  const memo = stateFromStores.useMemo(() => {
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
  sharedValue = require("module_1652").useSharedValue(num);
  const items5 = [sharedValue, dimmed];
  const effect = obj.useEffect(() => {
    let num = 0;
    if (c1) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, closure_2_11));
  }, items5);
  const obj4 = require("module_1652");
  const items6 = [closure_21, require("module_1652").interpolate, sharedValue, 0.5];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items6;
  class VoicePanelDockStatusViewsTsx3 {
    constructor() {
      obj = { opacity: null };
      items = [1];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items7 = [tmp11, tmp12, tmp13];
  VoicePanelDockStatusViewsTsx3.__closure = items7;
  VoicePanelDockStatusViewsTsx3.__workletHash = 11079329802718;
  VoicePanelDockStatusViewsTsx3.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockStatusViewsTsx3);
  const obj5 = { style: null, pointerEvents: "none", children: null };
  const items8 = [tmp.face, animatedStyle];
  obj5.style = items8;
  let tmp16 = entered;
  if (entered) {
    const obj6 = { userId, isSpeaking: stateFromStores1 };
    tmp16 = closure_13(closure_20, obj6);
  }
  const items9 = [tmp16, , ];
  if (entered) {
    const obj7 = { speaking: stateFromStores1 };
    entered = closure_13(closure_18, obj7);
  }
  items9[1] = entered;
  let tmp21 = null;
  if (null != memo) {
    const obj8 = { style: tmp.avatar, children: null };
    const obj9 = { style: tmp.avatarImage, source: memo };
    obj8.children = closure_13(tmp2(5957), obj9);
    tmp21 = closure_13(View, obj8);
  }
  items9[2] = tmp21;
  obj5.children = items9;
  return closure_14(_modDef1652.View, obj5);
}