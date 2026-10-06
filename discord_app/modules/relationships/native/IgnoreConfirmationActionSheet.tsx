// === Module 9831: IgnoreConfirmationActionSheet ===

// Module 9831 (IgnoreConfirmationActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import AssetRegistryDefault from "AssetRegistry" /* 4820 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import UserActionCreators from "UserActionCreators" /* 7863 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7867 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9447 */;
import RelationshipConstants from "RelationshipConstants" /* 9448 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 9829 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let unpackModuleId;
const View = react_native.View;
const UserRemediationAction = RelationshipConstants.UserRemediationAction;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: c9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: c10 } = RestrictionConfirmationConstants);
({ AnalyticEvents: unpackModuleId, HelpdeskArticles: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: obj2, otherOptions: obj3, subTitle: { textAlign: "center" }, title: obj4, container: obj5, header: obj6, avatarContainer: obj7, avatarIconContainer: rect, avatar: { alignSelf: "center" }, destructiveIcon: obj8 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_4 };
obj5 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj6 = { marginBottom: nativeDefault.space.PX_16 };
obj7 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = createStyles(obj);
let obj9 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.ruhGkg);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["/FWKKC"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.QAzPrp);
  }
};
let items = [obj9, , ];
let obj10 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.N9v3eq);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t.ddpuJg);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.PYR8jT);
  }
};
items[1] = obj10;
let obj11 = {
  icon: AssetRegistryDefault,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t["4ycGE0"]);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t["/XoqE6"]);
  }
};
items[2] = obj11;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
          const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_13(Icon, obj2), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
          const TableRow = TableRow2.TableRow;
          obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
          Icon = native.Icon;
          return closure_1_13(TableRow, obj, index);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const tmp7 = map1(TableRowGroup, obj2);
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
      const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_13(Icon, obj2), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
      const TableRow = TableRow2.TableRow;
      obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      Icon = native.Icon;
      return closure_1_13(TableRow, obj, index);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return map1(TableRowGroup, obj);
});
const memoResult = react.memo(function IgnoreConfirmationActionSheet(userId) {
  let BottomSheetScrollView;
  let Icon;
  let Icon2;
  let TableRow;
  let TableRowGroup;
  let Text3;
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
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj17;
  let obj18;
  let obj19;
  let obj20;
  let obj24;
  let obj25;
  let obj4;
  let obj5;
  let obj8;
  let onBlock;
  let onIgnore;
  let onSuccess;
  let prop;
  let sum1;
  let tmp3;
  let tmp4Result;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: _slicedToArray, onSuccess: react } = userId);
  c5 = undefined;
  let tmp = closure_15();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c5] = tmp2;
  const bottom = channelId(1618)().bottom;
  items = [];
  const tmp6 = channelId(6664);
  items[0] = channelId(6688).IGNORE_CONFIRMATION_ACTION_SHEET;
  const analyticsLocations = tmp6(items).analyticsLocations;
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj2 = userId(504);
  const items3 = [stateFromStores];
  const items4 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = UserActionCreators;
      const user = obj.getUser(userId);
    }
  }, items5);
  let tmp12Result = null;
  if (null != stateFromStores) {
    function handleClose() {
      const obj = channelId(dependencyMap[23]);
      const obj2 = { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" };
      obj.track(constants2.USER_REMEDIATION_ACTION, obj2);
    }
    let obj3 = { value: analyticsLocations, children: closure_13(BottomSheet, obj4) };
    const AnalyticsLocationProvider = tmp7(6664).AnalyticsLocationProvider;
    obj4 = { onDismiss: handleClose, scrollable: true, startHeight: sum1 + channelId(587).space.PX_24, bodyStyles: obj5, children: closure_14(BottomSheetScrollView, obj8) };
    BottomSheet = tmp7(6652).BottomSheet;
    const sum = closure_10 + bottom;
    sum1 = sum + tmp4(587).space.PX_24;
    obj5 = { paddingBottom: channelId(587).space.PX_16 + bottom };
    const merged = Object.assign(tmp.container);
    const obj6 = { style: tmp.header, children: items7 };
    const obj7 = { style: tmp.avatarContainer, children: items6 };
    BottomSheetScrollView = tmp7(6119).BottomSheetScrollView;
    const Avatar = tmp7(1188).Avatar;
    obj8 = { children: items8 };
    const obj9 = { guildId: stateFromStores1, user: stateFromStores, animate: false, size: userId(1188).AvatarSizes.XLARGE, style: tmp.avatar };
    items6 = [closure_13(Avatar, obj9), ];
    const obj10 = { style: tmp.avatarIconContainer, children: closure_13(Icon, obj11) };
    obj11 = { size: userId(1188).Icon.Sizes.MEDIUM, source: channelId(6464) };
    Icon = tmp7(1188).Icon;
    items6[1] = closure_13(c5, obj10);
    items7 = [closure_14(c5, obj7), , ];
    const obj12 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: format(prop, obj13) };
    const Text = tmp7(4892).Text;
    const intl = tmp7(1126).intl;
    format = intl.format;
    obj13 = { username: tmp4Result.getName(stateFromStores1, channelId, stateFromStores) };
    prop = tmp7(1126).t["WrQD/Y"];
    tmp4Result = channelId(5048);
    items7[1] = closure_13(Text, obj12);
    const obj14 = { style: tmp.subTitle, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: intl2.string(userId(1126).t.JKL1u1) };
    const Text2 = tmp7(4892).Text;
    intl2 = tmp7(1126).intl;
    items7[2] = closure_13(Text2, obj14);
    items8 = [closure_14(c5, obj6), , , ];
    const obj15 = { style: tmp.tableContainer, children: closure_13(closure_17, {}) };
    items8[1] = closure_13(c5, obj15);
    const obj16 = { style: tmp.otherOptions, children: closure_13(TableRowGroup, obj17) };
    obj17 = { title: intl3.string(userId(1126).t["1v01gh"]), hasIcons: true, children: closure_13(TableRow, obj18) };
    TableRowGroup = tmp7(6081).TableRowGroup;
    intl3 = tmp7(1126).intl;
    obj18 = {
      icon: closure_13(Icon2, obj19),
      label: intl4.string(userId(1126).t.bwxY30),
      variant: "danger",
      subLabel: closure_13(Text3, obj20),
      accessibilityLabel: intl6.string(userId(1126).t["fZ+p9C"]),
      onPress() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { action: UserRemediationAction.GOTO_BLOCK, location: "user-profile-context-menu" };
          obj.track(unpackModuleId.USER_REMEDIATION_ACTION, obj2);
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const tmp3 = asyncRequire(9830, dependencyMap.paths);
          const obj3 = { userId, channelId, onBlock: dependencyMap, onIgnore: _slicedToArray, onSuccess: react, impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION };
          openLazy(tmp3, React4, obj3, "replaceTopSheet");
        },
      arrow: true
    };
    TableRow = tmp7(6000).TableRow;
    obj19 = { size: userId(1188).Icon.Sizes.MEDIUM, source: channelId(7600), color: tmp.destructiveIcon.color };
    Icon2 = tmp7(1188).Icon;
    intl4 = tmp7(1126).intl;
    obj20 = { variant: "text-xs/medium", color: "text-feedback-critical", children: intl5.string(userId(1126).t.NTnf1T) };
    Text3 = tmp7(4892).Text;
    intl5 = tmp7(1126).intl;
    intl6 = tmp7(1126).intl;
    items8[2] = closure_13(c5, obj16);
    const obj21 = { style: tmp.button, children: items9 };
    const obj22 = {
      size: "lg",
      text: intl7.string(userId(1126).t.ytCpKs),
      onPress() {
          const tmp = _undefined(true);
          let obj = RelationshipActionCreatorsDefault;
          const ignoreUserResult = obj.ignoreUser(userId, AnalyticsLocationDefault.IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
          ignoreUserResult.then(() => {
            if (onSuccess != null) {
              tmp();
            }
            const obj = channelId(dependencyMap[31]);
            obj.hideActionSheet();
          });
          if (_slicedToArray != null) {
            _slicedToArray();
          }
          const tmp2Result = AnalyticsUtilsDefault;
          tmp2Result.track(unpackModuleId.IGNORE_USER_CONFIRMED);
        },
      disabled: tmp3,
      loading: tmp3
    };
    const Button = tmp7(5601).Button;
    intl7 = tmp7(1126).intl;
    items9 = [closure_13(Button, obj22), ];
    const obj23 = { onPress: handleClose, style: obj24, variant: "text-sm/normal", color: "text-default", children: intl8.format(userId(1126).t.iX9qtL, obj25) };
    obj24 = { textAlign: "center", marginTop: channelId(587).space.PX_12, paddingBottom: channelId(587).space.PX_4 };
    const Text4 = tmp7(4892).Text;
    intl8 = tmp7(1126).intl;
    obj25 = {
      articleLink() {
          const obj = channelId(dependencyMap[31]);
          obj.hideActionSheet();
          const obj2 = channelId(dependencyMap[37]);
          const articleURL = obj2.getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj3 = channelId(dependencyMap[38]);
          obj3.openURL(articleURL);
        }
    };
    items9[1] = closure_13(Text4, obj23);
    items8[3] = closure_14(c5, obj21);
    tmp12Result = closure_13(AnalyticsLocationProvider, obj3);
  }
  return tmp12Result;
});
const result = size.fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default memoResult;