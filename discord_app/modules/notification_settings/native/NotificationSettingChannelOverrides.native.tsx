import _slicedToArray from "_slicedToArray";
import importAllResult from "TableRowInner";
import { View } from "AccessibilityAnnouncer";
import { isGuildReadableType } from "createChannelRecord";
import setIndex from "setIndex";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "getChannelIcon";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ ChannelTypes: c10, NotificationSettingsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { container: null, searchContainer: null };
obj = { marginHorizontal: require("Themes").space.PX_8, flex: 1 };
obj[0] = obj;
createCacheKey = { paddingVertical: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function NotificationSettingChannelOverrides(arg0) {
  let navigation;
  let require;
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = callback2();
  let obj = require(stateFromStores[11]);
  const items = [setIndex];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCategories(closure_0));
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const memo = channels.useMemo(() => {
    const channels = navigation(stateFromStores[13])(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = outer1_6(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === outer1_10.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != dependencyMap[channel.id];
        }
        if (tmp3) {
          tmp3 = dependencyMap[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== _slicedToArray) {
          if (null != str) {
            const obj = outer1_0(outer1_2[14]);
            const formatted = outer1_0(outer1_2[14]).computeChannelName(channel, outer1_9, outer1_8).toLowerCase();
            const str3 = outer1_0(outer1_2[14]).computeChannelName(channel, outer1_9, outer1_8);
            return outer1_1(outer1_2[15])(str.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((channel) => channel.channel);
    const sections = [channels.length];
    return { channels, sections };
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        if (channels.length > 0) {
          const intl2 = outer1_0(stateFromStores[16]).intl;
          const obj = { count: null };
          obj[0] = length;
          let formatToPlainStringResult = intl2.formatToPlainString(outer1_0(stateFromStores[16]).t.ZGVL3g, obj);
        } else {
          const intl = outer1_0(stateFromStores[16]).intl;
          formatToPlainStringResult = intl.string(outer1_0(stateFromStores[16]).t.f5cMAg);
        }
        const AccessibilityAnnouncer = outer1_0(stateFromStores[17]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const callback = channels.useCallback((arg0, arg1) => {
    let closure_0 = tmp;
    let obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
    obj = { IconComponent: null };
    obj[0] = outer1_0(stateFromStores[21]).getChannelIconComponent(channels[arg1]);
    obj[0] = outer1_12(outer1_0(stateFromStores[20]).TableRowIcon, obj);
    obj[1] = 0 === arg1;
    obj[2] = arg1 === channels.length - 1;
    const obj3 = outer1_0(stateFromStores[21]);
    obj[3] = outer1_0(stateFromStores[14]).computeChannelName(channels[arg1], outer1_9, outer1_8);
    obj[6] = function onPress() {
      outer1_1.push(outer2_11.CHANNEL_OVERRIDE, { channelId: tmp.id });
    };
    return outer1_12(outer1_0(stateFromStores[19]).TableRow, obj);
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.searchContainer, children: null };
  const tmp10 = navigation(stateFromStores[18])();
  const tmp5 = navigation;
  const obj1 = { placeholder: null, onChange: null };
  let intl = require(stateFromStores[16]).intl;
  obj1[0] = intl.string(require(stateFromStores[16]).t["5h0QOP"]);
  obj1[1] = tmp6[1];
  obj[1] = callback(require(stateFromStores[23]).SearchField, obj1);
  const items4 = [callback(View, obj), ];
  if (0 === channels.length) {
    const obj2 = { Illustration: null, title: null, body: null };
    obj2[0] = tmp2(tmp3[25]).NoResults;
    let intl2 = tmp2(tmp3[16]).intl;
    obj2[1] = intl2.string(tmp2(tmp3[16]).t.wM7uRI);
    const intl3 = tmp2(tmp3[16]).intl;
    obj2[2] = intl3.string(tmp2(tmp3[16]).t.f5cMAg);
    let tmp15Result = tmp15(tmp2(tmp3[24]).EmptyState, obj2);
  } else {
    let obj3 = { sections: null, renderItem: null, itemSize: null, insetEnd: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true };
    obj3[0] = memo.sections;
    obj3[1] = callback;
    obj3[2] = tmp10;
    obj3[3] = navigation(stateFromStores[12])().insets.bottom;
    obj3[5] = tmp12;
    tmp15Result = tmp15(tmp5(tmp3[26]), obj3);
  }
  items4[1] = tmp15Result;
  obj[1] = items4;
  return closure_13(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;