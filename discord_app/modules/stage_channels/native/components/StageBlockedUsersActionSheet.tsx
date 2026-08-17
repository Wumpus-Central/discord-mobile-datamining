// discord_app/modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "markAllUserIdListsStale" /* 4030 */;
import closure_7 from "buildStageChannelUserRoles" /* 4990 */;
import { STAGE_BLOCKED_USERS_SHEET_KEY as closure_8 } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function RestrictedUser(guildId) {
  ({ participant, channelId: require } = guildId);
  let user;
  const tmp = callback3();
  user = participant.user;
  let speaker = participant.speaker;
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.isModerator(user.id, closure_0));
  obj1 = initialize;
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_6.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId.guildId);
  const intl = getSystemLocale.intl;
  if (speaker) {
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t.LqMmG2);
  } else {
    stringResult = tmp7;
    if (stateFromStores) {
      const intl2 = tmp2(1236).intl;
      stringResult = intl2.string(tmp2(1236).t.GMZqSi);
    }
  }
  obj = { style: tmp.userContainer, children: null };
  obj = { style: tmp.avatarContainer, children: null };
  obj1 = { source: avatarSource, size: tmp2(1297).AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const items2 = [callback(Button.CutoutableAvatarImage, obj1), ];
  if (speaker) {
    const obj2 = { style: null, children: null };
    const items3 = [tmp.iconContainer];
    obj2[0] = items3;
    const obj3 = { style: null, source: null, color: null };
    obj3[0] = tmp.icon;
    obj3[1] = user(8122);
    obj3[2] = user(712).unsafe_rawColors.WHITE;
    obj2[1] = tmp11(tmp2(1297).Icon, obj3);
    speaker = tmp11(tmp10, obj2);
  }
  items2[1] = speaker;
  obj[1] = items2;
  const items4 = [closure_10(View, obj), ];
  const obj4 = { style: tmp.flex, children: null };
  const items5 = [callback(Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: str.toString() }), ];
  const user2 = participant.user;
  const hasUniqueUsernameResult = user2.hasUniqueUsername();
  let tmp9Result = !hasUniqueUsernameResult;
  if (!hasUniqueUsernameResult) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
    const items6 = ["#", participant.user.discriminator];
    obj6[2] = items6;
    tmp9Result = tmp9(tmp2(4734).Text, obj6);
  }
  items5[1] = tmp9Result;
  obj4[1] = items5;
  const items7 = [closure_10(View, obj4), ];
  const obj7 = { style: tmp.flex, children: null };
  const obj8 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: null };
  const intl4 = tmp2(1236).intl;
  const string = intl4.string;
  const t = tmp2(1236).t;
  if (stateFromStores1) {
    let stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  const obj9 = { children: null };
  obj8[1] = stringResult1;
  const items8 = [callback(Button.LegacyText, obj8), ];
  const items9 = [" ", "| ", stringResult];
  items8[1] = closure_10(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: items9 });
  obj7[1] = items8;
  items7[1] = closure_10(View, obj7);
  obj9[0] = items7;
  items4[1] = closure_10(View, obj9);
  obj[1] = items4;
  return closure_10(View, obj);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = callback3();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      let obj = { style: null, children: null };
      obj[0] = tmp.header;
      obj = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
      obj[0] = tmp.title;
      const intl3 = getSystemLocale.intl;
      obj[4] = intl3.string(getSystemLocale.t.Uzdyho);
      const items = [callback(Text.Text, obj), ];
      obj1 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj1[0] = tmp.description;
      const intl4 = getSystemLocale.intl;
      obj1[3] = intl4.string(getSystemLocale.t["P/KFXz"]);
      items[1] = callback(Text.Text, obj1);
      obj[1] = items;
      let obj6 = obj;
    }
    return tmp2(tmp3, obj6);
  }
  if (ignoredUserCount > 0) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    const obj2 = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.title;
    const intl = getSystemLocale.intl;
    const obj3 = { number: null };
    obj3[0] = ignoredUserCount;
    obj2[4] = intl.format(getSystemLocale.t.wvygk8, obj3);
    const items1 = [callback(Text.Text, obj2), ];
    const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj4[0] = tmp.description;
    const intl2 = getSystemLocale.intl;
    const obj5 = { number: null };
    obj5[0] = ignoredUserCount;
    obj4[3] = intl2.format(getSystemLocale.t.Ri3o33, obj5);
    items1[1] = callback(Text.Text, obj4);
    obj[1] = items1;
    obj6 = obj;
  } else {
    obj6 = { style: null, children: null };
    obj6[0] = tmp.header;
    const obj7 = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj7[0] = tmp.title;
    const intl5 = getSystemLocale.intl;
    const obj8 = { number: null };
    obj8[0] = blockedUserCount;
    obj7[4] = intl5.format(getSystemLocale.t.HviVA9, obj8);
    const items2 = [callback(Text.Text, obj7), ];
    const obj9 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj9[0] = tmp.description;
    const intl6 = getSystemLocale.intl;
    const obj10 = { number: null };
    obj10[0] = blockedUserCount;
    obj9[3] = intl6.format(getSystemLocale.t["28qZMU"], obj10);
    items2[1] = callback(Text.Text, obj9);
    obj6[1] = items2;
  }
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 16 }, buttons: null, userContainer: null, avatarContainer: null, avatar: null, iconContainer: null, icon: null, flex: null, blocked: null, ignored: null };
createCacheKey = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingVertical: 8 };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginVertical: 8, width: "100%" };
createCacheKey[6] = { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 };
createCacheKey[7] = { opacity: 0.5 };
createCacheKey[8] = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[9] = { height: 12, width: 12 };
createCacheKey[10] = { display: "flex", flexDirection: "row" };
let obj1 = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[11] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
let obj2 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey[12] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj3 = { color: ThemesDefault.colors.TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  channel = channel.channel;
  const onAccept = channel.onAccept;
  dependencyMap = undefined;
  let items1;
  const tmp = callback3();
  const tmp2 = items1(React.useState(0), 2);
  dependencyMap = tmp2[1];
  let obj = channel(8123);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  obj1 = channel(8123);
  const stageIgnoredUsers = obj1.useStageIgnoredUsers(channel.id);
  const callback = React.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { bottom: true, style: tmp.buttons, onLayout: callback, children: null };
  obj = { text: null, onPress: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.mbD50D);
  obj[1] = function onPress() {
    onAccept(channel);
    onAccept(4342).hideActionSheet(closure_1_8);
  };
  const items = [callback(channel(4745).Button, obj), ];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl2 = channel(1236).intl;
  obj1[1] = intl2.string(channel(1236).t.CZGqeT);
  obj1[2] = function handleDismiss() {
    onAccept(4342).hideActionSheet(closure_8);
  };
  items[1] = callback(channel(4745).Button, obj1);
  obj[3] = items;
  items1 = [];
  HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
  const obj2 = { scrollable: true, header: callback(StageBlockedUsersActionSheetHeader, { blockedUserCount: stageBlockedUsers.length, ignoredUserCount: stageIgnoredUsers.length }), footer: callback2(channel(6803).SafeAreaPaddingView, obj), children: null };
  const obj3 = { inActionSheet: true, contentContainerStyle: tmp.container, accessibilityLabel: null, sections: null, renderItem: null, itemSize: null };
  const tmp4 = callback2(channel(6803).SafeAreaPaddingView, obj);
  const intl3 = channel(1236).intl;
  obj3[2] = intl3.string(channel(1236).t["3VoRLH"]);
  const items2 = [items1.length];
  obj3[3] = items2;
  obj3[4] = function renderItem(arg0, arg1) {
    return closure_1_9(closure_1_12, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
  };
  obj3[5] = function itemSize() {
    return 48;
  };
  const items3 = [callback(onAccept(8124), obj3), callback(View, { style: { height: tmp2[0] } })];
  obj2[3] = items3;
  return callback2(channel(6950).BottomSheet, obj2);
};