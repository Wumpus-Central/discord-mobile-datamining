// === Module 10076: ChannelVoiceChat ===

// Module 10076 (ChannelVoiceChat)
import nativeDefault from "native" /* 576 */;
import MessageManagerDefault from "MessageManager" /* 9941 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const useIsVoiceChatFocused = fn(9467).useIsVoiceChatFocused;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { chat: null, chatHeaderSpacer: null, chatHeader: null, chatHeaderBackIconContainer: null, chatHeaderTitleContainer: null, safeAreaTop: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
obj.chat = obj;
const createStyles = { height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.chatHeaderSpacer = createStyles;
const rect = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj.chatHeader = rect;
obj.chatHeaderBackIconContainer = { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" };
obj.chatHeaderTitleContainer = { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 };
obj.safeAreaTop = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let obj2 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
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
  let obj = noop;
  const items = [id, guild_id];
  const effect = noop.useEffect(() => {
    const obj = { guildId: guild_id, channelId: id };
    const messages = obj.fetchMessages(obj);
  }, items);
  const tmp6 = guild_id(1611)();
  const top = tmp6.top;
  ({ left, right } = tmp6);
  let obj1 = id(9589);
  const voiceChatNavigationContext = obj1.useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = tmp4(12).noop;
  }
  const isConnectedToVoiceChannel = id(9471).useIsConnectedToVoiceChannel(channel.channel);
  const tmp7Result = id(9471);
  let str = "no-hide-descendants";
  const ref = obj.useRef(null);
  if (tmp2) {
    str = "yes";
  }
  obj = { importantForAccessibility: str, accessibilityElementsHidden: !tmp2, style: null, children: null };
  const items1 = [tmp.chat, ];
  let tmp15;
  if (!flag) {
    obj = { paddingLeft: left, paddingRight: right };
    tmp15 = obj;
  }
  items1[1] = tmp15;
  obj.style = items1;
  const items2 = [closure_6(guild_id(5125), { absolute: true, tall: true }), ];
  obj1 = { guildId: guild_id, channelId: id, children: null };
  let tmp16Result = null;
  if (!flag) {
    const obj2 = { hidden: !tmp2, animated: true, barStyle: null };
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      str2 = "dark-content";
    }
    obj2.barStyle = str2;
    tmp16Result = tmp16(tmp4(9481), obj2);
    const tmp19 = !tmp2;
    const tmp4Result = tmp4(9481);
  }
  const items3 = [tmp16Result, , , , ];
  const items4 = [tmp.safeAreaTop, ];
  const obj3 = { height: top, display: null };
  let str4;
  if (flag) {
    str4 = "none";
  }
  obj3.display = str4;
  items4[1] = obj3;
  items3[1] = closure_6(View, { style: items4 });
  const items5 = [tmp.chatHeaderSpacer, ];
  let str5;
  if (flag) {
    str5 = "none";
  }
  items5[1] = { display: str5 };
  items3[2] = closure_6(View, { style: items5 });
  items3[3] = closure_6(guild_id(11340), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
  const items6 = [tmp.chatHeader, ];
  const obj4 = { top, display: null };
  let str6;
  if (flag) {
    str6 = "none";
  }
  const obj5 = { style: items6, children: null };
  obj4.display = str6;
  items6[1] = obj4;
  const obj6 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: null, style: null, children: null };
  const intl = tmp7(1114).intl;
  obj6.accessibilityLabel = intl.string(id(1114).t["13/7kX"]);
  obj6.style = tmp.chatHeaderBackIconContainer;
  const tmp12 = guild_id(4495)();
  obj6.children = closure_6(id(1178).Icon, { source: guild_id(11579), size: id(1178).Icon.Sizes.MEDIUM });
  const items7 = [closure_6(id(5123).PressableOpacity, obj6), ];
  const obj7 = { source: guild_id(11579), size: id(1178).Icon.Sizes.MEDIUM };
  items7[1] = closure_6(View, { style: tmp.chatHeaderTitleContainer, children: closure_6(id(12774).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj5.children = items7;
  items3[4] = closure_7(View, obj5);
  obj1.children = items3;
  items2[1] = closure_7(id(10077).ChannelContainer, obj1);
  obj.children = items2;
  return closure_7(View, obj);
});