// === Module 10596: IgnoredInformationTable ===

// Module 10596 (IgnoredInformationTable)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import registerAssetDefault from "registerAsset" /* 4332 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import registerAssetDefault2 from "registerAsset" /* 8933 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { UserRemediationAction } from "ClearFriendRequestFilters" /* 9737 */;
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY" /* 10594 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function IgnoredInformationTable() {
  return callback2(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((item, index) => {
      const obj = { size: callback(1297).Icon.Sizes.MEDIUM, source: item.icon };
      obj[2] = callback2(callback(1297).Icon, obj);
      obj[3] = item.text();
      obj[4] = item.subtext();
      obj[6] = item.a11yLabel();
      return callback2(callback(6291).TableRow, obj, index);
    })
  });
}
let c4 = importAllResult;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: c9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: c10 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ AnalyticEvents: unpackModuleId, HelpdeskArticles: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { marginBottom: ThemesDefault.space.PX_16 };
obj[1] = obj;
const createCacheKey = { marginBottom: ThemesDefault.space.PX_24 };
obj[2] = createCacheKey;
obj[3] = { textAlign: "center" };
obj[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_4 };
obj[5] = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
obj[6] = { marginBottom: ThemesDefault.space.PX_16 };
obj[7] = { position: "relative", alignSelf: "center", marginBottom: ThemesDefault.space.PX_16 };
obj[8] = { position: "absolute", bottom: -8, right: -8, padding: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
obj[9] = { alignSelf: "center" };
obj[10] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = createCacheKey.createStyles(obj);
let items = [
  {
    icon: registerAssetDefault2,
    text() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.ruhGkg);
    },
    subtext() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["/FWKKC"]);
    },
    a11yLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.QAzPrp);
    }
  },
,

];
items[1] = {
  icon: registerAssetDefault2,
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N9v3eq);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ddpuJg);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PYR8jT);
  }
};
items[2] = {
  icon: registerAssetDefault,
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["4ycGE0"]);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/XoqE6"]);
  }
};
const memoResult = importAllResult.memo(function IgnoreConfirmationActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onIgnore: dependencyMap, onSuccess: closure_3 } = userId);
  const tmp = callback3();
  [tmp3, c4] = callback(undefined.useState(false), 2);
  const bottom = channelId(1629)().bottom;
  const tmp2 = callback(undefined.useState(false), 2);
  items = [channelId(7159).IGNORE_CONFIRMATION_ACTION_SHEET];
  let obj = userId(589);
  const items1 = [closure_7];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_1_7.getUser(userId), items2);
  obj1 = userId(589);
  const items3 = [closure_6];
  const items4 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => {
    const channel = closure_1_6.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(dependencyMap[22]).getUser(userId);
      const obj = userId(dependencyMap[22]);
    }
  }, items5);
  let tmp12Result = null;
  if (null != stateFromStores) {
    function handleClose() {
      channelId(698);
      const obj = { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" };
      obj.track(constants2.USER_REMEDIATION_ACTION, obj);
    }
    obj = { value: null, children: null };
    obj[0] = tmp6(items).analyticsLocations;
    obj = { onDismiss: null, scrollable: true, startHeight: null, bodyStyles: null, children: null };
    obj[0] = handleClose;
    const sum = closure_10 + bottom;
    const sum1 = sum + tmp4(712).space.PX_24;
    obj[2] = sum1 + tmp4(712).space.PX_24;
    obj1 = { paddingBottom: null };
    obj1[0] = tmp4(712).space.PX_16 + bottom;
    const merged = Object.assign(tmp.container);
    obj[3] = obj1;
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.avatarContainer;
    const obj4 = { children: null };
    const obj5 = { guildId: null, user: null, animate: false, size: null, style: null };
    obj5[0] = stateFromStores1;
    obj5[1] = stateFromStores;
    obj5[3] = tmp7(1297).AvatarSizes.XLARGE;
    obj5[4] = tmp.avatar;
    const items6 = [callback(tmp7(1297).Avatar, obj5), ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.avatarIconContainer;
    const obj7 = { size: null, source: null };
    obj7[0] = tmp7(1297).Icon.Sizes.MEDIUM;
    obj7[1] = tmp4(8606);
    obj6[1] = callback(tmp7(1297).Icon, obj7);
    items6[1] = callback(stateFromStores, obj6);
    obj3[1] = items6;
    const items7 = [callback2(stateFromStores, obj3), , ];
    const obj8 = { style: null, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj8[0] = tmp.title;
    const intl = tmp7(1236).intl;
    const obj9 = { username: null };
    obj9[0] = tmp4(4796).getName(stateFromStores1, channelId, stateFromStores);
    obj8[4] = intl.format(tmp7(1236).t["WrQD/Y"], obj9);
    items7[1] = callback(tmp7(4734).Text, obj8);
    const obj10 = { style: null, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    obj10[0] = tmp.subTitle;
    const intl2 = tmp7(1236).intl;
    obj10[4] = intl2.string(tmp7(1236).t.JKL1u1);
    items7[2] = callback(tmp7(4734).Text, obj10);
    obj2[1] = items7;
    const items8 = [callback2(stateFromStores, obj2), , , ];
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.tableContainer;
    obj11[1] = callback(IgnoredInformationTable, {});
    items8[1] = callback(stateFromStores, obj11);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.otherOptions;
    const obj13 = { title: null, hasIcons: true, children: null };
    const intl3 = tmp7(1236).intl;
    obj13[0] = intl3.string(tmp7(1236).t["1v01gh"]);
    const obj14 = { icon: null, label: null, variant: "danger", subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
    const obj15 = { size: null, source: null, color: null };
    obj15[0] = tmp7(1297).Icon.Sizes.MEDIUM;
    obj15[1] = tmp4(8942);
    obj15[2] = tmp.destructiveIcon.color;
    obj14[0] = callback(tmp7(1297).Icon, obj15);
    const intl4 = tmp7(1236).intl;
    obj14[1] = intl4.string(tmp7(1236).t.bwxY30);
    const obj16 = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    const intl5 = tmp7(1236).intl;
    obj16[2] = intl5.string(tmp7(1236).t.NTnf1T);
    obj14[3] = callback(tmp7(4734).Text, obj16);
    const intl6 = tmp7(1236).intl;
    obj14[4] = intl6.string(tmp7(1236).t["fZ+p9C"]);
    obj14[5] = function onPress() {
      channelId(dependencyMap[21]);
      let obj = { action: UserRemediationAction.GOTO_BLOCK, location: "user-profile-context-menu" };
      obj.track(closure_1_11.USER_REMEDIATION_ACTION, obj);
      const obj3 = channelId(dependencyMap[29]);
      obj = { userId, channelId, onSuccess: closure_3, impressionName: userId(dependencyMap[32]).ImpressionNames.BLOCK_USER_CONFIRMATION };
      obj3.openLazy(userId(dependencyMap[31])(dependencyMap[30], dependencyMap.paths), closure_1_9, obj, "replaceTopSheet");
    };
    obj13[2] = callback(tmp7(6291).TableRow, obj14);
    obj12[1] = callback(tmp7(6286).TableRowGroup, obj13);
    items8[2] = callback(stateFromStores, obj12);
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.button;
    const obj18 = { size: "lg", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1236).intl;
    obj18[1] = intl7.string(tmp7(1236).t.ytCpKs);
    obj18[2] = function onPress() {
      _undefined(true);
      const obj = channelId(closure_1_2[34]);
      channelId(closure_1_2[34]).ignoreUser(userId, channelId(closure_1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then((result) => {
        if (closure_3 != null) {
          tmp();
        }
        channelId(closure_1_2[29]).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const ignoreUserResult = channelId(closure_1_2[34]).ignoreUser(userId, channelId(closure_1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      channelId(closure_1_2[21]).track(closure_1_11.IGNORE_USER_CONFIRMED);
      const tmp2Result = channelId(closure_1_2[21]);
    };
    obj18[3] = tmp3;
    obj18[4] = tmp3;
    const items9 = [callback(tmp7(4745).Button, obj18), ];
    const obj19 = { onPress: null, style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj19[0] = handleClose;
    const obj20 = { textAlign: "center", marginTop: null, paddingBottom: null };
    obj20[1] = tmp4(712).space.PX_12;
    obj20[2] = tmp4(712).space.PX_4;
    obj19[1] = obj20;
    const intl8 = tmp7(1236).intl;
    const obj21 = { articleLink: null };
    obj21[0] = function articleLink() {
      channelId(4342).hideActionSheet();
      const obj = channelId(4342);
      const articleURL = channelId(1993).getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
      const obj2 = channelId(1993);
      channelId(4090).openURL(articleURL);
    };
    obj19[4] = intl8.format(tmp7(1236).t.iX9qtL, obj21);
    items9[1] = callback(tmp7(4734).Text, obj19);
    obj17[1] = items9;
    items8[3] = callback2(stateFromStores, obj17);
    obj4[0] = items8;
    obj[4] = callback2(tmp7(6952).BottomSheetScrollView, obj4);
    obj[1] = callback(tmp7(6950).BottomSheet, obj);
    tmp12Result = callback(tmp7(7139).AnalyticsLocationProvider, obj);
    const tmp4Result = tmp4(4796);
  }
  return tmp12Result;
});
const result = require("obj132").fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default memoResult;