// === Module 9817: BlockConfirmationActionSheet ===

// Module 9817 (BlockConfirmationActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import AssetRegistryDefault from "AssetRegistry" /* 4814 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import UserActionCreators from "UserActionCreators" /* 7852 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7856 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import RelationshipConstants from "RelationshipConstants" /* 9435 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 9816 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let unpackModuleId;
const View = react_native.View;
const UserRemediationAction = RelationshipConstants.UserRemediationAction;
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: c10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: unpackModuleId } = RestrictionConfirmationConstants);
({ HelpdeskArticles: closure_12, AnalyticEvents: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: obj2, otherOptions: obj3, headerText: { textAlign: "center" }, container: obj4, header: obj5, avatarContainer: obj6, avatarIconContainer: rect, avatar: { alignSelf: "center" }, footerText: obj7 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj6 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj7 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
let obj8 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.fjFJFV);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["8SIMPz"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.qHsrGS);
  }
};
let items = [obj8, , ];
let obj9 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.QCrmqS);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t.TKDMoN);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.WR1Mbe);
  }
};
items[1] = obj9;
let obj10 = {
  icon: AssetRegistryDefault,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t["lkm/a8"]);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.lfrNw0);
  }
};
items[2] = obj10;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let length;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {
      hasIcons: true,
      children: items.map((icon, index) => {
          let Icon;
          let obj2;
          const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_14(Icon, obj2), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
          const TableRow = TableRow2.TableRow;
          obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
          Icon = native.Icon;
          return closure_1_14(TableRow, obj, index);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const tmp7 = authStore2(TableRowGroup, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let length;
  let obj = {
    hasIcons: true,
    children: items.map((icon, index) => {
      let Icon;
      let obj2;
      const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_14(Icon, obj2), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
      const TableRow = TableRow2.TableRow;
      obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      Icon = native.Icon;
      return closure_1_14(TableRow, obj, index);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return authStore2(TableRowGroup, obj);
});
const memoResult = react.memo(function BlockConfirmationActionSheet(userId) {
  let BottomSheetScrollView;
  let CIbzHR;
  let Icon;
  let Icon2;
  let TableRow;
  let TableRowGroup;
  let _undefined;
  let c5;
  let constants2;
  let constants3;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items11;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj17;
  let obj18;
  let obj19;
  let obj20;
  let obj24;
  let obj5;
  let obj6;
  let onBlock;
  let onIgnore;
  let onSuccess;
  let sum1;
  let tmp2Result;
  let tmp6;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: _slicedToArray, onSuccess: react } = userId);
  c5 = undefined;
  const tmp = closure_16();
  const tmp2 = channelId;
  const bottom = channelId(1618)().bottom;
  const tmp4 = channelId(6657);
  items = [channelId(6681).IGNORE_CONFIRMATION_ACTION_SHEET];
  const analyticsLocations = tmp4(items).analyticsLocations;
  [tmp6, c5] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj2 = userId(504);
  const items3 = [RelationshipStore];
  const items4 = [userId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => RelationshipStore.isIgnored(userId), items4);
  let obj3 = userId(504);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj3.useStateFromStores(items5, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = UserActionCreators;
      const user = obj.getUser(userId);
    }
  }, items7);
  let tmp13Result2 = null;
  if (null != stateFromStores) {
    const obj4 = { value: analyticsLocations, children: closure_14(BottomSheet, obj5) };
    const AnalyticsLocationProvider = tmp7(6657).AnalyticsLocationProvider;
    let num = 485;
    obj5 = {
      onDismiss() {
          const obj = channelId(dependencyMap[26]);
          const obj2 = { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" };
          obj.track(constants3.USER_REMEDIATION_ACTION, obj2);
        },
      scrollable: true,
      startHeight: sum1 + tmp2(587).space.PX_24,
      bodyStyles: obj6,
      children: closure_15(BottomSheetScrollView, obj20)
    };
    BottomSheet = tmp7(6645).BottomSheet;
    if (!stateFromStores1) {
      num = closure_11;
    }
    const sum = num + bottom;
    sum1 = sum + tmp2(587).space.PX_24;
    obj6 = { paddingBottom: tmp2(587).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    const obj7 = { style: tmp.header, children: items9 };
    const obj8 = { style: tmp.avatarContainer, children: items8 };
    BottomSheetScrollView = tmp7(6112).BottomSheetScrollView;
    const obj9 = { guildId: "Array", user: stateFromStores, animate: null, size: userId(1188).AvatarSizes.XLARGE, style: tmp.avatar };
    const Avatar = tmp7(1188).Avatar;
    items8 = [closure_14(Avatar, obj9), ];
    const obj10 = { style: tmp.avatarIconContainer, children: closure_14(Icon, obj11) };
    obj11 = { size: userId(1188).Icon.Sizes.MEDIUM, source: tmp2(7589) };
    Icon = tmp7(1188).Icon;
    items8[1] = closure_14(c5, obj10);
    items9 = [closure_15(c5, obj8), , ];
    const obj12 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: format(CIbzHR, obj13) };
    const Text = tmp7(4886).Text;
    const intl = tmp7(1126).intl;
    format = intl.format;
    obj13 = { username: tmp2Result.getName(stateFromStores2, channelId, stateFromStores) };
    CIbzHR = tmp7(1126).t.CIbzHR;
    tmp2Result = tmp2(5042);
    items9[1] = closure_14(Text, obj12);
    const obj14 = { style: tmp.headerText, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: intl2.string(userId(1126).t.S70jou) };
    const Text2 = tmp7(4886).Text;
    intl2 = tmp7(1126).intl;
    items9[2] = closure_14(Text2, obj14);
    const items10 = [closure_15(c5, obj7), , , ];
    const obj15 = { style: tmp.tableContainer, children: closure_14(closure_18, {}) };
    items10[1] = closure_14(c5, obj15);
    let tmp13Result = !stateFromStores1;
    if (tmp13Result) {
      const obj16 = { style: tmp.otherOptions, children: closure_14(TableRowGroup, obj17) };
      obj17 = { title: intl3.string(userId(1126).t["+BJTcB"]), hasIcons: true, children: closure_14(TableRow, obj18) };
      TableRowGroup = tmp7(6074).TableRowGroup;
      intl3 = tmp7(1126).intl;
      obj18 = {
        icon: closure_14(Icon2, obj19),
        label: intl4.string(userId(1126).t.hC8tcc),
        subLabel: intl5.string(userId(1126).t.If89rE),
        accessibilityLabel: intl6.string(userId(1126).t["8qGQsM"]),
        onPress() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" };
              obj.track(map1.USER_REMEDIATION_ACTION, obj2);
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const tmp3 = asyncRequire(9818, dependencyMap.paths);
              const obj3 = { userId, channelId, onBlock: dependencyMap, onSuccess: react, onIgnore: _slicedToArray, impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION };
              openLazy(tmp3, authStore, obj3, "replaceTopSheet");
            },
        arrow: true
      };
      TableRow = tmp7(5993).TableRow;
      obj19 = { size: userId(1188).Icon.Sizes.MEDIUM, source: tmp2(6457) };
      Icon2 = tmp7(1188).Icon;
      intl4 = tmp7(1126).intl;
      intl5 = tmp7(1126).intl;
      intl6 = tmp7(1126).intl;
      tmp13Result = closure_14(tmp19, obj16);
    }
    obj20 = { children: items10 };
    items10[2] = tmp13Result;
    const obj21 = { style: tmp.button, children: items11 };
    const obj22 = {
      size: "lg",
      variant: "destructive",
      text: intl7.string(userId(1126).t.l4Emac),
      onPress() {
          _undefined(true);
          let obj = RelationshipActionCreatorsDefault;
          const obj2 = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
          const blockUserResult = obj.blockUser(userId, obj2);
          blockUserResult.then(() => {
            const obj = channelId(dependencyMap[38]);
            const result = obj.showBlockSuccessToast(userId, closure_1_1);
            if (onSuccess != null) {
              onSuccess();
            }
            const tmpResult = channelId(dependencyMap[32]);
            tmpResult.hideActionSheet();
          });
          if (dependencyMap != null) {
            dependencyMap();
          }
          const tmp2Result = AnalyticsUtilsDefault;
          tmp2Result.track(map1.BLOCK_USER_CONFIRMED);
        },
      disabled: tmp6,
      loading: tmp6
    };
    const Button = tmp7(5594).Button;
    intl7 = tmp7(1126).intl;
    items11 = [closure_14(Button, obj22), ];
    const obj23 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default", children: intl8.format(userId(1126).t.CpTgBn, obj24) };
    const Text3 = tmp7(4886).Text;
    intl8 = tmp7(1126).intl;
    obj24 = {
      articleLink() {
          const obj = channelId(dependencyMap[32]);
          obj.hideActionSheet();
          const obj2 = channelId(dependencyMap[39]);
          const articleURL = obj2.getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj3 = channelId(dependencyMap[40]);
          obj3.openURL(articleURL);
        }
    };
    items11[1] = closure_14(Text3, obj23);
    items10[3] = closure_15(c5, obj21);
    tmp13Result2 = closure_14(AnalyticsLocationProvider, obj4);
  }
  return tmp13Result2;
});
let result = size.fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default memoResult;