// === Module 11560: ResourceChannelButtons ===

// Module 11560 (ResourceChannelButtons)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { wrapper: null, buttonWrapper: null, spacer: null, iconColor: null };
createCacheKey = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { width: 8 };
createCacheKey[3] = { color: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.WHITE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  let navigation;
  let first;
  let callback;
  let React;
  let obj = channel(first[6]);
  navigation = obj.useNavigation();
  const tmp4 = createCacheKey();
  let obj1 = channel(first[7]);
  const tmp5 = callback(obj1.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
  first = tmp5[0];
  callback = tmp7;
  const items = [channel.guild_id, navigation];
  React = React.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = channel(first[8]).selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    obj = { style: null, children: null };
    obj[0] = tmp4.wrapper;
    let tmp11 = null != first;
    if (tmp11) {
      obj = { style: null, children: null };
      obj[0] = tmp4.buttonWrapper;
      obj1 = { variant: "secondary", text: null, icon: null, onPress: null, grow: true };
      obj1[1] = first.title;
      const obj2 = { color: null, source: null };
      obj2[0] = tmp4.iconColor.color;
      obj2[1] = navigation(tmp2[11]);
      obj1[2] = callback2(tmp(tmp2[10]).Icon, obj2);
      obj1[3] = function onPress() {
        return callback(first.channelId);
      };
      obj[1] = callback2(tmp(tmp2[9]).Button, obj1);
      tmp11 = callback2(tmp10, obj);
    }
    const items1 = [tmp11, , ];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj3 = { style: null };
      obj3[0] = tmp4.spacer;
      tmp14 = callback2(tmp10, obj3);
    }
    items1[1] = tmp14;
    let tmp16 = null != tmp7;
    if (tmp16) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp4.buttonWrapper;
      const obj5 = { text: null, icon: null, iconPosition: "end", onPress: null, grow: true };
      obj5[0] = tmp7.title;
      const obj6 = { color: null, source: null };
      obj6[0] = tmp4.iconColor.color;
      obj6[1] = navigation(tmp2[12]);
      obj5[1] = callback2(tmp(tmp2[10]).Icon, obj6);
      obj5[3] = function onPress() {
        return callback(_undefined.channelId);
      };
      obj4[1] = callback2(tmp(tmp2[9]).Button, obj5);
      tmp16 = callback2(tmp10, obj4);
    }
    items1[2] = tmp16;
    obj[1] = items1;
    let tmp9Result = closure_7(tmp10, obj);
    const tmp9 = closure_7;
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};