// discord_app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
import _slicedToArray from "_slicedToArray";
import FastestList.android from "../../modules/fastest_list/FastestList.android.tsx";
import { View } from "SceneLoadingIndicator";
import normalizeChannelPropertyForCompare from "normalizeChannelPropertyForCompare";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useSafeAreaInsets } from "../../modules/safe_area/useSafeAreaInsets.native.tsx";

let c10;
let c9;
let require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { content: null, gap: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let importDefault;
  let tmp4;
  let tmp = createCacheKey();
  const require = tmp;
  let tmp2 = importDefault;
  let obj = dependencyMap;
  [tmp4, importDefault] = invites(memo.useState(undefined), 2);
  let items = [tmp];
  let tmpResult = require;
  const callback = memo.useCallback((arg0) => {

  }, items);
  let obj1 = initialize;
  const items1 = [memo1];
  dependencyMap = obj1.useStateFromStores(items1, () => memo1.getChannel());
  let obj2 = initialize;
  const items2 = [memo1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => memo1.getInvites());
  invites = stateFromStoresObject.invites;
  const loading = stateFromStoresObject.loading;
  const items3 = [invites];
  memo = memo.useMemo(() => {
    const values = Object.values(invites);
    return values.sort((inviter, inviter2) => {
      inviter = inviter.inviter;
      let str;
      if (inviter != null) {
        str = inviter.username;
      }
      if (str == null) {
        str = "";
      }
      const formatted = str.toLowerCase();
      inviter2 = inviter2.inviter;
      let str2;
      if (inviter2 != null) {
        str2 = inviter2.username;
      }
      if (str2 == null) {
        str2 = "";
      }
      return formatted.localeCompare(str2.toLowerCase());
    });
  }, items3);
  const tmp3 = invites(memo.useState(undefined), 2);
  const items4 = [ensureGuildLoaded];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items4, () => {
    if (null != closure_2) {
      const sortedLinkedChannelsForGuild = outer1_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
      let found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
    } else {
      found = [];
    }
    return found;
  });
  const items5 = [memo, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items5);
  const items6 = [memo1.length];
  const effect = memo.useEffect(() => {
    callback(8016).setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      let obj = { invite: null };
      obj[0] = tmp.data;
      let tmp5 = outer1_9(outer1_1(9685), obj);
    } else {
      obj = { channel: null };
      obj[0] = tmp.data;
      tmp5 = outer1_9(tmp(9685).LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      obj = { lightSource: null, darkSource: null, title: null, body: null };
      obj[0] = tmp2(9702);
      obj[1] = tmp2(9703);
      const intl = tmpResult(1236).intl;
      obj[2] = intl.string(tmpResult(1236).t["+nLJkZ"]);
      const intl2 = tmpResult(1236).intl;
      obj[3] = intl2.string(tmpResult(1236).t.F53CAc);
      return callback(tmpResult(1297).EmptyState, obj);
    }
  }
  if (!loading) {
    if (null != tmp4) {
      obj = { style: null, children: null };
      obj[0] = tmp.content;
      obj1 = { sections: null, estimatedListSize: "windowSize", itemSize: null, renderItem: null, insetStart: null, insetEnd: null };
      obj1[0] = items6;
      obj1[2] = tmp4;
      obj1[3] = callback1;
      obj1[4] = tmp.gap.height;
      obj1[5] = useSafeAreaInsets().bottom;
      obj[1] = callback(tmp2(8526), obj1);
      let tmp16Result = callback(stateFromStoresArray, obj);
    }
  }
  obj2 = { style: tmp.content, children: null };
  tmp = callback;
  const items8 = [callback(tmpResult(5822).SceneLoadingIndicator, {}), ];
  tmpResult = null;
  if (memo1.length > 0) {
    tmp2 = tmp2(15886);
    obj = { item: null, onMeasured: null };
    memo1 = memo1[0];
    obj[0] = memo1;
    obj[1] = callback;
    tmpResult = tmp(tmp2, obj);
  }
  items8[1] = tmpResult;
  obj2[1] = items8;
  tmp16Result = closure_10(stateFromStoresArray, obj2);
};