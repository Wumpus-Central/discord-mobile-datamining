// discord_app/modules/relationships/native/BlockConfirmationActionSheet.tsx
import asyncRequireImpl from "asyncRequireImpl";
import importAllResult from "context";
import { View } from "Button";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserRemediationAction } from "ClearFriendRequestFilters";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import ME from "ME";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";
import { TableRowGroupTitle } from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const require = arg1;
function BlockedInformationTable() {
  let obj = { hasIcons: true, children: null };
  obj[1] = items.map((icon) => {
    let obj = { start: 0 === arg1, end: length.length - 1 === arg1, icon: null, label: null, subLabel: null, accessible: true, accessibilityLabel: null };
    obj = { size: null, source: null };
    obj[0] = callback(1297).Icon.Sizes.MEDIUM;
    obj[1] = icon.icon;
    obj[2] = callback2(callback(1297).Icon, obj);
    obj[3] = icon.text();
    obj[4] = icon.subtext();
    obj[6] = icon.a11yLabel();
    return callback2(callback(5374).TableRow, obj, arg1);
  });
  return callback2(TableRowGroupTitle.TableRowGroup, obj);
}
let c4 = importAllResult;
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: c10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: unpackModuleId } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ HelpdeskArticles: closure_12, AnalyticEvents: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: null, otherOptions: null, headerText: null, container: null, header: null, avatarContainer: null, avatarIconContainer: null, avatar: null, footerText: null };
obj = { marginBottom: require("Themes").space.PX_16 };
obj[1] = obj;
createCacheKey = { marginBottom: require("Themes").space.PX_24 };
obj[2] = createCacheKey;
obj[3] = { textAlign: "center" };
obj[4] = { flex: 1, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16 };
let obj2 = { flex: 1, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16 };
obj[5] = { marginBottom: require("Themes").space.PX_16 };
let obj3 = { marginBottom: require("Themes").space.PX_16 };
obj[6] = { position: "relative", alignSelf: "center", marginBottom: require("Themes").space.PX_16 };
let obj4 = { position: "relative", alignSelf: "center", marginBottom: require("Themes").space.PX_16 };
obj[7] = { position: "absolute", bottom: -8, right: -8, padding: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round };
obj[8] = { alignSelf: "center" };
let obj5 = { position: "absolute", bottom: -8, right: -8, padding: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round };
obj[9] = { textAlign: "center", marginTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_4 };
let closure_16 = createCacheKey.createStyles(obj);
let obj6 = { textAlign: "center", marginTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_4 };
let items = [
  {
    icon: require("registerAsset"),
    text() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.fjFJFV);
    },
    subtext() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["8SIMPz"]);
    },
    a11yLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.qHsrGS);
    }
  },
,

];
let obj7 = {
  icon: require("registerAsset"),
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.fjFJFV);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8SIMPz"]);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.qHsrGS);
  }
};
items[1] = {
  icon: require("registerAsset"),
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.QCrmqS);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TKDMoN);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WR1Mbe);
  }
};
let obj8 = {
  icon: require("registerAsset"),
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.QCrmqS);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TKDMoN);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.WR1Mbe);
  }
};
items[2] = {
  icon: require("registerAsset"),
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lkm/a8"]);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfrNw0);
  }
};
let obj9 = {
  icon: require("registerAsset"),
  text() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lkm/a8"]);
  },
  subtext() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfrNw0);
  }
};
const memoResult = importAllResult.memo(function BlockConfirmationActionSheet(userId) {
  let c5;
  let asyncRequireImpl;
  let closure_4;
  let dependencyMap;
  let tmp6;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: asyncRequireImpl, onSuccess: closure_4 } = userId);
  c5 = undefined;
  let stateFromStores;
  let tmp = callback4();
  const bottom = channelId(1609)().bottom;
  const items = [channelId(5748).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp4 = channelId(5728);
  [tmp6, c5] = callback(importAllResult.useState(false), 2);
  let obj = userId(589);
  const items1 = [mergeGuildAvatar];
  const items2 = [userId];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_8.getUser(userId), items2);
  let obj1 = userId(589);
  const items3 = [upsertRelationship];
  const items4 = [userId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => outer1_7.isIgnored(userId), items4);
  let obj2 = userId(589);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj2.useStateFromStores(items5, () => {
    const channel = stateFromStores.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(outer1_2[22]).getUser(userId);
      const obj = userId(outer1_2[22]);
    }
  }, items7);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { value: null, children: null };
    obj[0] = tmp4(items).analyticsLocations;
    obj = { onDismiss: null, scrollable: true, startHeight: null, bodyStyles: null, children: null };
    obj[0] = function onDismiss() {
      let obj = channelId(698);
      obj = { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" };
      obj.track(constants3.USER_REMEDIATION_ACTION, obj);
    };
    let num = 485;
    if (!stateFromStores1) {
      num = closure_11;
    }
    const sum = num + bottom;
    const sum1 = sum + tmp2(712).space.PX_24;
    obj[2] = sum1 + tmp2(712).space.PX_24;
    obj1 = { paddingBottom: null };
    obj1[0] = tmp2(712).space.PX_24 + bottom;
    const merged = Object.assign(tmp.container);
    obj[3] = obj1;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.avatarContainer;
    const obj4 = { guildId: "Array", user: false, animate: null, size: null, style: 0 };
    obj4[1] = stateFromStores;
    obj4[3] = tmp7(1297).AvatarSizes.XLARGE;
    obj4[4] = tmp.avatar;
    const items8 = [closure_14(tmp7(1297).Avatar, obj4), ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.avatarIconContainer;
    const obj6 = { size: null, source: null };
    obj6[0] = tmp7(1297).Icon.Sizes.MEDIUM;
    obj6[1] = tmp2(8587);
    obj5[1] = closure_14(tmp7(1297).Icon, obj6);
    items8[1] = closure_14(c5, obj5);
    obj3[1] = items8;
    const items9 = [callback3(c5, obj3), , ];
    const obj7 = { style: null, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj7[0] = tmp.headerText;
    const intl = tmp7(1236).intl;
    const obj8 = { username: null };
    obj8[0] = tmp2(4493).getName(stateFromStores2, channelId, stateFromStores);
    obj7[4] = intl.format(tmp7(1236).t.CIbzHR, obj8);
    items9[1] = closure_14(tmp7(4299).Text, obj7);
    const obj9 = { style: null, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    obj9[0] = tmp.headerText;
    const intl2 = tmp7(1236).intl;
    obj9[4] = intl2.string(tmp7(1236).t.S70jou);
    items9[2] = closure_14(tmp7(4299).Text, obj9);
    obj2[1] = items9;
    const items10 = [callback3(c5, obj2), , , ];
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.tableContainer;
    obj10[1] = closure_14(BlockedInformationTable, {});
    items10[1] = closure_14(c5, obj10);
    tmp13Result = !stateFromStores1;
    if (!stateFromStores1) {
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.otherOptions;
      const obj12 = { title: null, hasIcons: true, children: null };
      const intl3 = tmp7(1236).intl;
      obj12[0] = intl3.string(tmp7(1236).t["+BJTcB"]);
      const obj13 = { icon: null, label: null, subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
      const obj14 = { size: null, source: null };
      obj14[0] = tmp7(1297).Icon.Sizes.MEDIUM;
      obj14[1] = tmp2(8496);
      obj13[0] = tmp13(tmp7(1297).Icon, obj14);
      const intl4 = tmp7(1236).intl;
      obj13[1] = intl4.string(tmp7(1236).t.hC8tcc);
      const intl5 = tmp7(1236).intl;
      obj13[2] = intl5.string(tmp7(1236).t.If89rE);
      const intl6 = tmp7(1236).intl;
      obj13[3] = intl6.string(tmp7(1236).t["8qGQsM"]);
      obj13[4] = function onPress() {
        let obj = channelId(outer1_2[24]);
        obj = { action: outer1_9.GOTO_IGNORE, location: "user-profile-context-menu" };
        obj.track(outer1_13.USER_REMEDIATION_ACTION, obj);
        const obj3 = channelId(outer1_2[30]);
        obj = { userId, channelId, onSuccess: closure_4, onIgnore: asyncRequireImpl, impressionName: userId(outer1_2[33]).ImpressionNames.IGNORE_USER_CONFIRMATION };
        obj3.openLazy(userId(outer1_2[32])(outer1_2[31], outer1_2.paths), outer1_10, obj, "replaceTopSheet");
      };
      obj12[2] = tmp13(tmp7(5374).TableRow, obj13);
      obj11[1] = tmp13(tmp7(5767).TableRowGroup, obj12);
      tmp13Result = tmp13(tmp19, obj11);
    }
    const obj15 = { children: null };
    items10[2] = tmp13Result;
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.button;
    const obj17 = { size: "lg", variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1236).intl;
    obj17[2] = intl7.string(tmp7(1236).t.l4Emac);
    obj17[3] = function onPress() {
      _undefined(true);
      let obj = channelId(outer1_2[35]);
      obj = { location: channelId(outer1_2[20]).BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.blockUser(userId, obj).then(() => {
        const result = outer1_1(outer1_2[36]).showBlockSuccessToast(closure_0, closure_1);
        if (callback != null) {
          callback();
        }
        const obj = outer1_1(outer1_2[36]);
        const tmp = outer1_1;
        const tmp2 = outer1_2;
        outer1_1(outer1_2[30]).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const blockUserResult = obj.blockUser(userId, obj);
      let tmp2 = channelId;
      const tmp3 = outer1_2;
      channelId(outer1_2[24]).track(outer1_13.BLOCK_USER_CONFIRMED);
    };
    obj17[4] = tmp6;
    obj17[5] = tmp6;
    const items11 = [closure_14(tmp7(4714).Button, obj17), ];
    const obj18 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj18[0] = tmp.footerText;
    const intl8 = tmp7(1236).intl;
    const obj19 = { articleLink: null };
    obj19[0] = function articleLink() {
      channelId(4271).hideActionSheet();
      const obj = channelId(4271);
      const articleURL = channelId(1974).getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
      const obj2 = channelId(1974);
      channelId(3998).openURL(articleURL);
    };
    obj18[3] = intl8.format(tmp7(1236).t.CpTgBn, obj19);
    items11[1] = closure_14(tmp7(4299).Text, obj18);
    obj16[1] = items11;
    items10[3] = callback3(c5, obj16);
    obj15[0] = items10;
    obj[4] = callback3(tmp7(5399).BottomSheetScrollView, obj15);
    obj[1] = closure_14(tmp7(5397).BottomSheet, obj);
    tmp13Result = tmp13(tmp7(5728).AnalyticsLocationProvider, obj);
    const tmp2Result = tmp2(4493);
  }
  return tmp13Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default memoResult;