// discord_app/modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { width: 8 };
createCacheKey[3] = { color: ThemesDefault.colors.WHITE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  let first;
  let callback;
  let React;
  let obj = channel(first[6]);
  const navigation = obj.useNavigation();
  const tmp4 = callback3();
  obj1 = channel(first[7]);
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
      tmp11 = callback2(View, obj);
    }
    const items1 = [tmp11, , ];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj3 = { style: null };
      obj3[0] = tmp4.spacer;
      tmp14 = callback2(View, obj3);
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
        return callback(channelId.channelId);
      };
      obj4[1] = callback2(tmp(tmp2[9]).Button, obj5);
      tmp16 = callback2(View, obj4);
    }
    items1[2] = tmp16;
    obj[1] = items1;
    let tmp9Result = callback(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};