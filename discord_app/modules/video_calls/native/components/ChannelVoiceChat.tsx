import importAllResult from "registerAsset";
import { View } from "getSystemLocale";
import { useIsVoiceChatFocused } from "VoiceChatDrawerState";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { chat: null, chatHeaderSpacer: null, chatHeader: null, chatHeaderBackIconContainer: null, chatHeaderTitleContainer: null, safeAreaTop: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignSelf: "stretch" };
obj[0] = obj;
createCacheKey = { height: 44, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj[3] = { width: 32, height: 32, alignItems: "flex-start", justifyContent: "center" };
obj[4] = { alignSelf: "stretch", flex: 1, justifyContent: "center", marginStart: 16 };
let obj2 = { flexDirection: "row", alignSelf: "stretch", height: 44, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "flex-start", position: "absolute", left: 0, right: 0, paddingHorizontal: 16 };
obj[5] = { alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let closure_8 = createCacheKey.createStyles(obj);
let obj3 = { alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((channel) => {
  let left;
  let right;
  channel = channel.channel;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let flag = channel.inModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  const tmp2 = useIsVoiceChatFocused();
  let obj = importAllResult;
  const items = [id, guild_id];
  const effect = importAllResult.useEffect(() => {
    let obj = guild_id(outer1_2[6]);
    obj = { guildId: guild_id, channelId: id };
    const messages = obj.fetchMessages(obj);
  }, items);
  const tmp6 = guild_id(1581)();
  const top = tmp6.top;
  ({ left, right } = tmp6);
  let obj1 = id(10393);
  const voiceChatNavigationContext = obj1.useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = tmp4(12).noop;
  }
  const isConnectedToVoiceChannel = id(10392).useIsConnectedToVoiceChannel(channel.channel);
  const tmp7Result = id(10392);
  let str = "no-hide-descendants";
  const ref = obj.useRef(null);
  if (tmp2) {
    str = "yes";
  }
  obj = { importantForAccessibility: str, accessibilityElementsHidden: !tmp2, style: null, children: null };
  const items1 = [tmp.chat, ];
  let tmp15;
  if (!flag) {
    obj = { paddingLeft: null, paddingRight: null };
    obj[0] = left;
    obj[1] = right;
    tmp15 = obj;
  }
  items1[1] = tmp15;
  obj[2] = items1;
  const items2 = [callback(guild_id(4785), { absolute: true, tall: true }), ];
  obj1 = { guildId: guild_id, channelId: id, children: null };
  let tmp16Result = null;
  if (!flag) {
    const obj2 = { hidden: null, animated: true, barStyle: null };
    obj2[0] = !tmp2;
    if (isConnectedToVoiceChannel) {
      let str2 = "light-content";
    } else {
      str2 = "dark-content";
    }
    obj2[2] = str2;
    tmp16Result = tmp16(tmp4(7657), obj2);
    const tmp19 = !tmp2;
    const tmp4Result = tmp4(7657);
  }
  const items3 = [tmp16Result, , , , ];
  const items4 = [tmp.safeAreaTop, ];
  const obj3 = { height: top, display: null };
  let str4;
  if (flag) {
    str4 = "none";
  }
  obj3[1] = str4;
  items4[1] = obj3;
  items3[1] = callback(View, { style: items4 });
  const items5 = [tmp.chatHeaderSpacer, ];
  let str5;
  if (flag) {
    str5 = "none";
  }
  items5[1] = { display: str5 };
  items3[2] = callback(View, { style: items5 });
  items3[3] = callback(guild_id(10566), { guildId: guild_id, channelId: id, chatInputRef: ref, screenIndex: "voice-panel" });
  const items6 = [tmp.chatHeader, ];
  const obj4 = { top, display: null };
  let str6;
  if (flag) {
    str6 = "none";
  }
  const obj5 = { style: items6, children: null };
  obj4[1] = str6;
  items6[1] = obj4;
  const obj6 = { accessibilityRole: "button", onPress: openVoice, accessibilityLabel: null, style: null, children: null };
  const intl = tmp7(1236).intl;
  obj6[2] = intl.string(id(1236).t["13/7kX"]);
  obj6[3] = tmp.chatHeaderBackIconContainer;
  const obj7 = { source: null, size: null };
  obj7[0] = guild_id(10183);
  obj7[1] = id(1297).Icon.Sizes.MEDIUM;
  obj6[4] = callback(id(1297).Icon, obj7);
  const items7 = [callback(id(4783).PressableOpacity, obj6), ];
  const tmp12 = guild_id(4191)();
  items7[1] = callback(View, { style: tmp.chatHeaderTitleContainer, children: callback(id(11983).ChannelTitle, { guildId: guild_id, channelId: id }) });
  obj5[1] = items7;
  items3[4] = closure_7(View, obj5);
  obj1[2] = items3;
  items2[1] = closure_7(id(10394).ChannelContainer, obj1);
  obj[3] = items2;
  return closure_7(View, obj);
});
const result = require("VoiceChatDrawerState").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChat.tsx");

export default memoResult;