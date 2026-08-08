// discord_app/modules/forums/native/ForumPostActionBar.tsx
import _slicedToArray from "_slicedToArray";
import Text from "Text";
import { View } from "getSystemLocale";
import initialize from "initialize";
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticsSections } from "ME";
import jsxProd from "LinkIcon";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { actionBarContainer: null, actionRow: null, reactionRow: null, actionButton: null, actionButtonsContainer: null, lastActionButton: null, buttonText: null };
createCacheKey = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
createCacheKey[3] = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: require("Themes").radii.xs, borderWidth: 1, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[4] = { justifyContent: "flex-end" };
createCacheKey[5] = { marginRight: 0 };
createCacheKey[6] = { marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: require("Themes").radii.xs, borderWidth: 1, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  channel = channel.channel;
  let stateFromStores1;
  let dependencyMap;
  let width;
  let React;
  const tmp = createCacheKey();
  let obj = channel(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getChannel(channel.parent_id));
  let obj1 = channel(5920);
  const firstMessage = obj1.useFirstForumPostMessage(channel).firstMessage;
  let obj2 = channel(589);
  const items1 = [storeThread];
  stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_7.hasJoined(channel.id));
  dependencyMap = channel.getGuildId();
  let obj3 = channel(589);
  const items2 = [initialize];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = outer1_6.isLurking(tmp);
    }
    return isLurkingResult;
  });
  width = stateFromStores1(1474)().width;
  const tmp7 = width(React.useState(0), 2);
  React = tmp7[1];
  const items3 = [width];
  const callback = React.useCallback((nativeEvent) => {
    callback(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  let obj4 = channel(8391);
  obj = { style: null, children: null };
  const items4 = [tmp.actionBarContainer, obj4.useGradientTop()];
  obj[0] = items4;
  let tmp11 = null != firstMessage;
  if (tmp11) {
    obj = { style: null, children: null };
    obj[0] = tmp.reactionRow;
    obj1 = { thread: null, parentChannel: null, firstMessage: null, containerWidth: null };
    obj1[0] = channel;
    obj1[1] = stateFromStores;
    obj1[2] = firstMessage;
    obj1[3] = tmp7[0];
    obj[1] = callback(tmp2(10395).ForumPostActionBarReactions, obj1);
    tmp11 = callback(tmp10, obj);
  }
  const items5 = [tmp11, ];
  obj2 = { style: items6, onLayout: callback, children: null };
  items6 = [, ];
  ({ actionRow: arr7[0], actionButtonsContainer: arr7[1] } = tmp);
  if (stateFromStores2) {
    const items7 = [tmp13, , ];
    obj3 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl4 = tmp2(1236).intl;
    obj3[1] = intl4.string(tmp2(1236).t.WqhZss);
    obj3[2] = tmp.actionButton;
    obj3[3] = function onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        let obj = channel(8610);
        obj = { section: null };
        obj[0] = outer1_9.CHANNEL_HEADER;
        const result = obj.handleCopyLinkForumPost(guildId, channel.id, obj);
      }
    };
    obj3[4] = callback(tmp2(4247).LinkIcon, { size: "xs" });
    items7[1] = callback(tmp2(4846).PressableOpacity, obj3);
    obj4 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl5 = tmp2(1236).intl;
    obj4[1] = intl5.string(tmp2(1236).t.nFP4oa);
    const items8 = [, ];
    ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
    obj4[2] = items8;
    obj4[3] = function onPress() {
      let obj = stateFromStores1(6917);
      obj = { channelId: channel.id, messageId: null, flash: true, jumpType: null };
      obj[1] = stateFromStores1(11).castChannelIdAsMessageId(channel.id);
      obj[3] = channel(4235).JumpType.ANIMATED;
      obj.jumpToMessage(obj);
    };
    obj4[4] = callback(tmp2(10396).ArrowLargeUpIcon, { size: "xs" });
    items7[2] = callback(tmp2(4846).PressableOpacity, obj4);
    obj2[2] = items7;
    items5[1] = tmp9(tmp10, obj2);
    obj[1] = items5;
    return tmp9(tmp10, obj);
  } else {
    let items9 = function handleFollow() {
      const result = channel(8610).handleToggleFollowForumPost(channel, stateFromStores1);
    };
    const obj5 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    let intl = tmp2(1236).intl;
    let Text = intl.string;
    let t = tmp2(1236).t;
    if (stateFromStores1) {
      obj5[1] = Text(t.G3ooHD);
      obj5[2] = tmp.actionButton;
      obj5[3] = items9;
      intl = callback;
      items9 = [callback(tmp2(4255).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      Text = tmp2(4299).Text;
      const obj6 = { style: null, variant: "text-sm/semibold", color: "text-brand", children: null };
      const items10 = [tmp.buttonText];
      obj6[0] = items10;
      const intl3 = tmp2(1236).intl;
      obj6[3] = intl3.string(tmp2(1236).t["OtF+lC"]);
      t = callback(Text, obj6);
      items9[1] = t;
      obj5[4] = items9;
      let tmp15 = obj5;
    } else {
      obj5[1] = Text(t["DjZ+6E"]);
      obj5[2] = tmp.actionButton;
      obj5[3] = items9;
      const items11 = [callback(tmp2(9136).BellIcon, { size: "xs" }), ];
      const obj7 = { style: null, variant: "text-sm/semibold", color: "interactive-text-default", children: null };
      obj7[0] = tmp.buttonText;
      const intl2 = tmp2(1236).intl;
      obj7[3] = intl2.string(tmp2(1236).t["0rQinA"]);
      items11[1] = callback(tmp2(4299).Text, obj7);
      obj5[4] = items11;
      tmp15 = obj5;
    }
    tmp9(tmp2(4846).PressableOpacity, tmp15);
  }
};