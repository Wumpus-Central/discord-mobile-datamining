// discord_app/modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { isGuildReadableType } from "../../../records/ChannelRecord.tsx";
import setIndex from "../../../stores/GuildCategoryStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
({ ChannelTypes: c10, NotificationSettingsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { marginHorizontal: ThemesDefault.space.PX_8, flex: 1 };
obj[0] = obj;
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function NotificationSettingChannelOverrides(arg0) {
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = callback2();
  let obj = require(stateFromStores[11]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getCategories(closure_0));
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const memo = channels.useMemo(() => {
    channels = navigation(stateFromStores[13])(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = closure_1_6(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === closure_1_10.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != dependencyMap[channel.id];
        }
        if (tmp3) {
          tmp3 = dependencyMap[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== closure_3) {
          if (null != closure_3) {
            const obj = closure_1_0(stateFromStores[14]);
            const formatted = closure_1_0(stateFromStores[14]).computeChannelName(channel, closure_1_9, closure_1_8).toLowerCase();
            const str3 = closure_1_0(stateFromStores[14]).computeChannelName(channel, closure_1_9, closure_1_8);
            return navigation(stateFromStores[15])(closure_3.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((item, index) => item.channel);
    const sections = [channels.length];
    return { channels, sections };
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        if (channels.length > 0) {
          const intl2 = require(stateFromStores[16]).intl;
          const obj = { count: null };
          obj[0] = length;
          let formatToPlainStringResult = intl2.formatToPlainString(require(stateFromStores[16]).t.ZGVL3g, obj);
        } else {
          const intl = require(stateFromStores[16]).intl;
          formatToPlainStringResult = intl.string(require(stateFromStores[16]).t.f5cMAg);
        }
        const AccessibilityAnnouncer = require(stateFromStores[17]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const callback = channels.useCallback((arg0, arg1) => {
    closure_0 = tmp;
    const obj = { IconComponent: require(stateFromStores[21]).getChannelIconComponent(channels[arg1]) };
    obj[0] = closure_1_12(require(stateFromStores[20]).TableRowIcon, obj);
    obj[1] = 0 === arg1;
    obj[2] = arg1 === channels.length - 1;
    const obj3 = require(stateFromStores[21]);
    obj[3] = require(stateFromStores[14]).computeChannelName(channels[arg1], closure_1_9, closure_1_8);
    obj[6] = function onPress() {
      navigation.push(closure_2_11.CHANNEL_OVERRIDE, { channelId: id.id });
    };
    return closure_1_12(require(stateFromStores[19]).TableRow, obj);
  }, items3);
  obj = { style: tmp.searchContainer, children: null };
  const tmp10 = navigation(stateFromStores[18])();
  obj1 = { placeholder: null, onChange: null };
  let intl = require(stateFromStores[16]).intl;
  obj1[0] = intl.string(require(stateFromStores[16]).t["5h0QOP"]);
  obj1[1] = tmp6[1];
  obj[1] = callback(require(stateFromStores[23]).SearchField, obj1);
  const items4 = [callback(View, obj), ];
  if (0 === channels.length) {
    const obj2 = { Illustration: null, title: null, body: null };
    obj2[0] = require(tmp3[25]).NoResults;
    let intl2 = require(tmp3[16]).intl;
    obj2[1] = intl2.string(require(tmp3[16]).t.wM7uRI);
    const intl3 = require(tmp3[16]).intl;
    obj2[2] = intl3.string(require(tmp3[16]).t.f5cMAg);
    let tmp15Result = tmp15(require(tmp3[24]).EmptyState, obj2);
  } else {
    let obj3 = { sections: null, renderItem: null, itemSize: null, insetEnd: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true };
    obj3[0] = memo.sections;
    obj3[1] = callback;
    obj3[2] = tmp10;
    obj3[3] = navigation(stateFromStores[12])().insets.bottom;
    obj3[5] = tmp12;
    tmp15Result = tmp15(navigation(tmp3[26]), obj3);
  }
  items4[1] = tmp15Result;
  obj[1] = items4;
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;