// === Module 10205: ChannelVoiceChat ===

// Module 10205 (ChannelVoiceChat)
import nativeDefault from "native" /* 576 */;
import MessageManagerDefault from "MessageManager" /* 10071 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const useIsVoiceChatFocused = fn(9597).useIsVoiceChatFocused;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
const obj = { chat: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" }, chatHeaderSpacer: null, chatHeader: null, chatHeaderBackIconContainer: null, chatHeaderTitleContainer: null, safeAreaTop: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
obj.chatHeaderSpacer = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const rect = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj.chatHeader = rect;
obj.chatHeaderBackIconContainer = { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" };
obj.chatHeaderTitleContainer = { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 };
let obj4 = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.safeAreaTop = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let flag = channel.inModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const tmp2 = useIsVoiceChatFocused();
  const items = [id, guild_id];
  const effect = noop.useEffect(() => {
    const messages = MessageManagerDefault.fetchMessages({ guildId: guild_id, channelId: id });
  }, items);
  const tmp6 = guild_id(1611)();
  const top = tmp6.top;
  ({ left, right } = tmp6);
  const voiceChatNavigationContext = id(9719).useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = tmp4(12).noop;
  }
  const obj2 = id(9719);
  const isConnectedToVoiceChannel = id(9601).useIsConnectedToVoiceChannel(channel.channel);
  const tmp7Result = id(9601);
  let str = "no-hide-descendants";
  guild_id(4571)();
  if (tmp2) {
    str = "yes";
  }
  const obj3 = { importantForAccessibility: str, accessibilityElementsHidden: !tmp2, style: null, children: null };
  const items1 = [tmp.chat, ];
  let tmp15;
  if (!flag) {
    const obj4 = { paddingLeft: left, paddingRight: right };
    tmp15 = obj4;
  }
  items1[1] = tmp15;
  obj3.style = items1;
  const items2 = [closure_6(guild_id(5206), { absolute: true, tall: true }), ];
  const obj5 = { guildId: guild_id, channelId: id, children: null };
  let tmp16Result = null;
  if (!flag) {
    const obj6 = { hidden: !tmp2, animated: true, barStyle: null };
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      tmp7(4488);
      str2 = "dark-content";
    }
    obj6.barStyle = str2;
    tmp16Result = closure_6(tmp4(9611), obj6);
    const tmp19 = !tmp2;
    const tmp4Result = tmp4(9611);
  }
  const items3 = [tmp16Result, , , , ];
  const items4 = [tmp.safeAreaTop, ];
  const obj7 = { height: top, display: null };
  let str3;
  if (flag) {
    str3 = "none";
  }
  obj7.display = str3;
  items4[1] = obj7;
  items3[1] = closure_6(View, { style: items4 });
  const items5 = [tmp.chatHeaderSpacer, ];
  let str4;
  if (flag) {
    str4 = "none";
  }
  items5[1] = { display: str4 };
  items3[2] = closure_6(View, { style: items5 });
  items3[3] = closure_6(guild_id(11474), { guildId: guild_id, channelId: id, chatInputRef: noop.useRef(null), screenIndex: "voice-panel" });
  const items6 = [tmp.chatHeader, ];
  const obj8 = { top, display: null };
  let str5;
  if (flag) {
    str5 = "none";
  }
  const obj9 = { style: items6, children: null };
  obj8.display = str5;
  items6[1] = obj8;
  const obj10 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: null, style: null, children: null };
  const intl = tmp7(1114).intl;
  obj10.accessibilityLabel = intl.string(id(1114).t["13/7kX"]);
  obj10.style = tmp.chatHeaderBackIconContainer;
  const ref = noop.useRef(null);
  obj10.children = closure_6(id(1176).Icon, { source: guild_id(11709), size: id(1176).Icon.Sizes.MEDIUM });
  const items7 = [closure_6(id(5204).PressableOpacity, obj10), ];
  const obj11 = { source: guild_id(11709), size: id(1176).Icon.Sizes.MEDIUM };
  items7[1] = closure_6(View, { style: tmp.chatHeaderTitleContainer, children: closure_6(id(12904).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj9.children = items7;
  items3[4] = closure_7(View, obj9);
  obj5.children = items3;
  items2[1] = closure_7(id(10206).ChannelContainer, obj5);
  obj3.children = items2;
  return closure_7(View, obj3);
});