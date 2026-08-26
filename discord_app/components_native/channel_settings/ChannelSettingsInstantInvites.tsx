// === Module 16248: ConnectedChannelSettingsInstantInvites ===

// Module 16248 (ConnectedChannelSettingsInstantInvites)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _modDef8749 from "module_8749" /* 8749 */;
import registerAssetDefault from "registerAsset" /* 9919 */;
import registerAssetDefault2 from "registerAsset" /* 9920 */;
import _modDef16249 from "module_16249" /* 16249 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "normalizeChannelPropertyForCompare" /* 8235 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import { ChannelSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { content: null, gap: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let tmp = callback2();
  const _require = tmp;
  let tmp2 = importDefault;
  let obj = dependencyMap;
  [tmp4, importDefault] = invites(memo.useState(undefined), 2);
  let items = [tmp];
  let tmpResult = _require;
  const callback = memo.useCallback((arg0) => {
    callback(arg0 + lib.gap.height);
  }, items);
  obj1 = _require(589);
  const items1 = [memo1];
  dependencyMap = obj1.useStateFromStores(items1, () => memo1.getChannel());
  let obj2 = _require(589);
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
  const items4 = [closure_7];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items4, () => {
    if (null != closure_2) {
      const sortedLinkedChannelsForGuild = closure_1_7.getSortedLinkedChannelsForGuild(tmp.guild_id);
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
    callback(8234).setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      let obj = { invite: null };
      obj[0] = tmp.data;
      let tmp5 = closure_1_9(closure_1_1(9902), obj);
    } else {
      obj = { channel: null };
      obj[0] = tmp.data;
      tmp5 = closure_1_9(lib(9902).LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      obj = { lightSource: null, darkSource: null, title: null, body: null };
      obj[0] = registerAssetDefault;
      obj[1] = registerAssetDefault2;
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
      obj1[5] = useSafeAreaInsetsDefault().bottom;
      obj[1] = callback(_modDef8749, obj1);
      let tmp16Result = callback(stateFromStoresArray, obj);
    }
  }
  obj2 = { style: tmp.content, children: null };
  tmp = callback;
  const items8 = [callback(tmpResult(5994).SceneLoadingIndicator, {}), ];
  tmpResult = null;
  if (memo1.length > 0) {
    tmp2 = _modDef16249;
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