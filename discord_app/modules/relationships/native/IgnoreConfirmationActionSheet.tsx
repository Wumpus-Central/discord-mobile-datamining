// === Module 11384: IgnoreConfirmationActionSheet ===

// Module 11384 (IgnoreConfirmationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4517 from "module_4517" /* 4517 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import UserActionCreators from "UserActionCreators" /* 8181 */;
import _modDef8185 from "module_8185" /* 8185 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function IgnoredInformationTable() {
  return map1(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      let obj = { start: 0 === index, end: length.length - 1 === index, icon: null, label: null, subLabel: null, accessible: true, accessibilityLabel: null };
      obj = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = closure_1_13(native.Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessibilityLabel = icon.a11yLabel();
      return closure_1_13(TableRow.TableRow, obj, index);
    })
  });
}
const View = fn(17).View;
const UserRemediationAction = fn(9043).UserRemediationAction;
const RestrictionConfirmationConstants = fn(11382);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: c10 } = RestrictionConfirmationConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, HelpdeskArticles: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: null, otherOptions: null, subTitle: null, title: null, container: null, header: null, avatarContainer: null, avatarIconContainer: null, avatar: null, destructiveIcon: null };
obj = { marginBottom: nativeDefault.space.PX_16 };
obj.tableContainer = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_24 };
obj.otherOptions = createStyles;
obj.subTitle = { textAlign: "center" };
obj.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_4 };
let obj2 = { textAlign: "center", marginBottom: nativeDefault.space.PX_4 };
obj.container = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
obj.avatar = { alignSelf: "center" };
let obj5 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj.destructiveIcon = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = createStyles.createStyles(obj);
let obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let items = [
  {
    icon: _modDef8185,
    text() {
      const intl = util.intl;
      return intl.string(util.t.ruhGkg);
    },
    subtext() {
      const intl = util.intl;
      return intl.string(util.t["/FWKKC"]);
    },
    a11yLabel() {
      const intl = util.intl;
      return intl.string(util.t.QAzPrp);
    }
  },
,

];
let obj7 = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.ruhGkg);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["/FWKKC"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.QAzPrp);
  }
};
items[1] = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.N9v3eq);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.ddpuJg);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.PYR8jT);
  }
};
let obj8 = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.N9v3eq);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.ddpuJg);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.PYR8jT);
  }
};
items[2] = {
  icon: _modDef4517,
  text() {
    const intl = util.intl;
    return intl.string(util.t["4ycGE0"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t["/XoqE6"]);
  }
};
let obj9 = {
  icon: _modDef4517,
  text() {
    const intl = util.intl;
    return intl.string(util.t["4ycGE0"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t["/XoqE6"]);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default noop.memo(function IgnoreConfirmationActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onIgnore: dependencyMap, onSuccess: _slicedToArray } = userId);
  noop = undefined;
  const tmp = closure_15();
  [tmp3, c4] = _slicedToArray(noop.useState(false), 2);
  const bottom = channelId(1611)().bottom;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  items = [channelId(7182).IGNORE_CONFIRMATION_ACTION_SHEET];
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj1 = userId(504);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items5);
  let tmp12Result = null;
  if (null != stateFromStores) {
    function handleClose() {
      channelId(1242);
      const obj = { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" };
      obj.track(constants2.USER_REMEDIATION_ACTION, obj);
    }
    obj = { value: tmp6(items).analyticsLocations, children: null };
    obj = { onDismiss: handleClose, scrollable: true, startHeight: null, bodyStyles: null, children: null };
    const sum = closure_10 + bottom;
    const sum1 = sum + tmp4(576).space.PX_24;
    obj.startHeight = sum1 + tmp4(576).space.PX_24;
    obj1 = { paddingBottom: tmp4(576).space.PX_16 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    let obj2 = { style: tmp.header, children: null };
    let obj3 = { style: tmp.avatarContainer, children: null };
    const obj4 = { children: null };
    const obj5 = { guildId: stateFromStores1, user: stateFromStores, animate: false, size: tmp7(1178).AvatarSizes.XLARGE, style: tmp.avatar };
    const items6 = [closure_13(tmp7(1178).Avatar, obj5), ];
    const obj6 = { style: tmp.avatarIconContainer, children: null };
    const obj7 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp4(6969) };
    obj6.children = closure_13(tmp7(1178).Icon, obj7);
    items6[1] = closure_13(stateFromStores, obj6);
    obj3.children = items6;
    const items7 = [closure_14(stateFromStores, obj3), , ];
    const obj8 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp7(1114).intl;
    const obj9 = { username: tmp4(4712).getName(stateFromStores1, channelId, stateFromStores) };
    obj8.children = intl.format(tmp7(1114).t["WrQD/Y"], obj9);
    items7[1] = closure_13(tmp7(4556).Text, obj8);
    const obj10 = { style: tmp.subTitle, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    const intl2 = tmp7(1114).intl;
    obj10.children = intl2.string(tmp7(1114).t.JKL1u1);
    items7[2] = closure_13(tmp7(4556).Text, obj10);
    obj2.children = items7;
    const items8 = [closure_14(stateFromStores, obj2), , , ];
    const obj11 = { style: tmp.tableContainer, children: closure_13(IgnoredInformationTable, {}) };
    items8[1] = closure_13(stateFromStores, obj11);
    const obj12 = { style: tmp.otherOptions, children: null };
    const obj13 = { title: null, hasIcons: true, children: null };
    const intl3 = tmp7(1114).intl;
    obj13.title = intl3.string(tmp7(1114).t["1v01gh"]);
    const obj14 = { icon: null, label: null, variant: "danger", subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
    const obj15 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp4(7930), color: tmp.destructiveIcon.color };
    obj14.icon = closure_13(tmp7(1178).Icon, obj15);
    const intl4 = tmp7(1114).intl;
    obj14.label = intl4.string(tmp7(1114).t.bwxY30);
    const obj16 = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    const intl5 = tmp7(1114).intl;
    obj16.children = intl5.string(tmp7(1114).t.NTnf1T);
    obj14.subLabel = closure_13(tmp7(4556).Text, obj16);
    const intl6 = tmp7(1114).intl;
    obj14.accessibilityLabel = intl6.string(tmp7(1114).t["fZ+p9C"]);
    obj14.onPress = function onPress() {
      let obj = { action: UserRemediationAction.GOTO_BLOCK, location: "user-profile-context-menu" };
      obj.track(constants.USER_REMEDIATION_ACTION, obj);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj = { userId, channelId, onSuccess, impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION };
      obj3.openLazy(asyncRequireImpl(11383, dependencyMap.paths), React7, obj, "replaceTopSheet");
    };
    obj13.children = closure_13(tmp7(5605).TableRow, obj14);
    obj12.children = closure_13(tmp7(5687).TableRowGroup, obj13);
    items8[2] = closure_13(stateFromStores, obj12);
    const obj17 = { style: tmp.button, children: null };
    const obj18 = { size: "lg", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1114).intl;
    obj18.text = intl7.string(tmp7(1114).t.ytCpKs);
    obj18.onPress = function onPress() {
      _undefined(true);
      RelationshipActionCreatorsDefault.ignoreUser(userId, AnalyticsLocationDefault.IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then(() => {
        if (onSuccess != null) {
          tmp();
        }
        channelId(4527).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const ignoreUserResult = RelationshipActionCreatorsDefault.ignoreUser(userId, AnalyticsLocationDefault.IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      AnalyticsUtilsDefault.track(constants.IGNORE_USER_CONFIRMED);
      const tmp2Result = AnalyticsUtilsDefault;
    };
    obj18.disabled = tmp3;
    obj18.loading = tmp3;
    const items9 = [closure_13(tmp7(4975).Button, obj18), ];
    const obj19 = { onPress: handleClose, style: null, variant: "text-sm/normal", color: "text-default", children: null };
    const obj20 = { textAlign: "center", marginTop: tmp4(576).space.PX_12, paddingBottom: tmp4(576).space.PX_4 };
    obj19.style = obj20;
    const intl8 = tmp7(1114).intl;
    const obj21 = {
      articleLink() {
          channelId(4527).hideActionSheet();
          const obj = channelId(4527);
          const articleURL = channelId(2024).getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(2024);
          channelId(4255).openURL(articleURL);
        }
    };
    obj19.children = intl8.format(tmp7(1114).t.iX9qtL, obj21);
    items9[1] = closure_13(tmp7(4556).Text, obj19);
    obj17.children = items9;
    items8[3] = closure_14(stateFromStores, obj17);
    obj4.children = items8;
    obj.children = closure_14(tmp7(6627).BottomSheetScrollView, obj4);
    obj.children = closure_13(tmp7(7150).BottomSheet, obj);
    tmp12Result = closure_13(tmp7(7162).AnalyticsLocationProvider, obj);
    const tmp4Result = tmp4(4712);
  }
  return tmp12Result;
});