// discord_app/modules/relationships/native/IgnoreConfirmationActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import registerAssetDefault from "../../../../_runtime/04336_registerAsset.js";
import TableRowGroupTitle from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import registerAssetDefault2 from "../../../../_runtime/08970_registerAsset.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/ChannelStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import { UserRemediationAction } from "../RelationshipConstants.tsx";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "RestrictionConfirmationConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function IgnoredInformationTable() {
  return callback2(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: length.length - 1 === arg1, icon: null, label: null, subLabel: null, accessible: true, accessibilityLabel: null };
      obj = { size: callback(1297).Icon.Sizes.MEDIUM, source: icon.icon };
      obj[2] = callback2(callback(1297).Icon, obj);
      obj[3] = icon.text();
      obj[4] = icon.subtext();
      obj[6] = icon.a11yLabel();
      return callback2(callback(6322).TableRow, obj, arg1);
    })
  });
}
let c4 = importAllResult;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: c9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: c10 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ AnalyticEvents: unpackModuleId, HelpdeskArticles: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: null, otherOptions: null, subTitle: null, title: null, container: null, header: null, avatarContainer: null, avatarIconContainer: null, avatar: null, destructiveIcon: null };
obj = { marginBottom: ThemesDefault.space.PX_16 };
obj[1] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_24 };
obj[2] = createCacheKey;
obj[3] = { textAlign: "center" };
obj[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_4 };
let obj2 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_4 };
obj[5] = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
let obj3 = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
obj[6] = { marginBottom: ThemesDefault.space.PX_16 };
let obj4 = { marginBottom: ThemesDefault.space.PX_16 };
obj[7] = { position: "relative", alignSelf: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj5 = { position: "relative", alignSelf: "center", marginBottom: ThemesDefault.space.PX_16 };
obj[8] = { position: "absolute", bottom: -8, right: -8, padding: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
obj[9] = { alignSelf: "center" };
let obj6 = { position: "absolute", bottom: -8, right: -8, padding: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
obj[10] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = createCacheKey.createStyles(obj);
let obj7 = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
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
let obj8 = {
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
};
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
let obj9 = {
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
let obj10 = {
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
  let stateFromStores;
  const tmp = callback3();
  [tmp3, c4] = callback(undefined.useState(false), 2);
  const bottom = channelId(1629)().bottom;
  let tmp2 = callback(undefined.useState(false), 2);
  items = [channelId(7197).IGNORE_CONFIRMATION_ACTION_SHEET];
  let obj = userId(589);
  const items1 = [closure_7];
  const items2 = [userId];
  stateFromStores = obj.useStateFromStores(items1, () => closure_1_7.getUser(userId), items2);
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
      const user = userId(closure_1_2[22]).getUser(userId);
      const obj = userId(closure_1_2[22]);
    }
  }, items5);
  let tmp12Result = null;
  if (null != stateFromStores) {
    function handleClose() {
      let obj = channelId(698);
      obj = { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" };
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
    const items6 = [closure_13(tmp7(1297).Avatar, obj5), ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.avatarIconContainer;
    const obj7 = { size: null, source: null };
    obj7[0] = tmp7(1297).Icon.Sizes.MEDIUM;
    obj7[1] = tmp4(8643);
    obj6[1] = closure_13(tmp7(1297).Icon, obj7);
    items6[1] = closure_13(stateFromStores, obj6);
    obj3[1] = items6;
    const items7 = [closure_14(stateFromStores, obj3), , ];
    const obj8 = { style: null, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj8[0] = tmp.title;
    const intl = tmp7(1236).intl;
    const obj9 = { username: null };
    obj9[0] = tmp4(4801).getName(stateFromStores1, channelId, stateFromStores);
    obj8[4] = intl.format(tmp7(1236).t["WrQD/Y"], obj9);
    items7[1] = closure_13(tmp7(4739).Text, obj8);
    const obj10 = { style: null, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    obj10[0] = tmp.subTitle;
    const intl2 = tmp7(1236).intl;
    obj10[4] = intl2.string(tmp7(1236).t.JKL1u1);
    items7[2] = closure_13(tmp7(4739).Text, obj10);
    obj2[1] = items7;
    const items8 = [closure_14(stateFromStores, obj2), , , ];
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.tableContainer;
    obj11[1] = closure_13(IgnoredInformationTable, {});
    items8[1] = closure_13(stateFromStores, obj11);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.otherOptions;
    const obj13 = { title: null, hasIcons: true, children: null };
    const intl3 = tmp7(1236).intl;
    obj13[0] = intl3.string(tmp7(1236).t["1v01gh"]);
    const obj14 = { icon: null, label: null, variant: "danger", subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
    const obj15 = { size: null, source: null, color: null };
    obj15[0] = tmp7(1297).Icon.Sizes.MEDIUM;
    obj15[1] = tmp4(8979);
    obj15[2] = tmp.destructiveIcon.color;
    obj14[0] = closure_13(tmp7(1297).Icon, obj15);
    const intl4 = tmp7(1236).intl;
    obj14[1] = intl4.string(tmp7(1236).t.bwxY30);
    const obj16 = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    const intl5 = tmp7(1236).intl;
    obj16[2] = intl5.string(tmp7(1236).t.NTnf1T);
    obj14[3] = closure_13(tmp7(4739).Text, obj16);
    const intl6 = tmp7(1236).intl;
    obj14[4] = intl6.string(tmp7(1236).t["fZ+p9C"]);
    obj14[5] = function onPress() {
      let obj = channelId(closure_1_2[21]);
      obj = { action: closure_1_8.GOTO_BLOCK, location: "user-profile-context-menu" };
      obj.track(closure_1_11.USER_REMEDIATION_ACTION, obj);
      const obj3 = channelId(closure_1_2[29]);
      obj = { userId, channelId, onSuccess: closure_3, impressionName: userId(closure_1_2[32]).ImpressionNames.BLOCK_USER_CONFIRMATION };
      obj3.openLazy(userId(closure_1_2[31])(closure_1_2[30], closure_1_2.paths), closure_1_9, obj, "replaceTopSheet");
    };
    obj13[2] = closure_13(tmp7(6322).TableRow, obj14);
    obj12[1] = closure_13(tmp7(6317).TableRowGroup, obj13);
    items8[2] = closure_13(stateFromStores, obj12);
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.button;
    const obj18 = { size: "lg", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1236).intl;
    obj18[1] = intl7.string(tmp7(1236).t.ytCpKs);
    obj18[2] = function onPress() {
      _undefined(true);
      const obj = channelId(closure_1_2[34]);
      const tmp2 = channelId;
      const tmp3 = closure_1_2;
      channelId(closure_1_2[34]).ignoreUser(userId, channelId(closure_1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then(() => {
        if (closure_3 != null) {
          tmp();
        }
        closure_1_1(closure_1_2[29]).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const ignoreUserResult = channelId(closure_1_2[34]).ignoreUser(userId, channelId(closure_1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      tmp2(tmp3[21]).track(closure_1_11.IGNORE_USER_CONFIRMED);
    };
    obj18[3] = tmp3;
    obj18[4] = tmp3;
    const items9 = [closure_13(tmp7(4750).Button, obj18), ];
    const obj19 = { onPress: null, style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj19[0] = handleClose;
    const obj20 = { textAlign: "center", marginTop: null, paddingBottom: null };
    obj20[1] = tmp4(712).space.PX_12;
    obj20[2] = tmp4(712).space.PX_4;
    obj19[1] = obj20;
    const intl8 = tmp7(1236).intl;
    const obj21 = { articleLink: null };
    obj21[0] = function articleLink() {
      channelId(4346).hideActionSheet();
      const obj = channelId(4346);
      const articleURL = channelId(1994).getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
      const obj2 = channelId(1994);
      channelId(4093).openURL(articleURL);
    };
    obj19[4] = intl8.format(tmp7(1236).t.iX9qtL, obj21);
    items9[1] = closure_13(tmp7(4739).Text, obj19);
    obj17[1] = items9;
    items8[3] = closure_14(stateFromStores, obj17);
    obj4[0] = items8;
    obj[4] = closure_14(tmp7(6990).BottomSheetScrollView, obj4);
    obj[1] = closure_13(tmp7(6988).BottomSheet, obj);
    tmp12Result = tmp12(tmp7(7177).AnalyticsLocationProvider, obj);
    const tmp20 = stateFromStores1;
    const tmp4Result = tmp4(4801);
  }
  return tmp12Result;
});
const result = require("set").fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default memoResult;