// discord_app/modules/relationships/native/BlockConfirmationActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4517 from "../../../../_runtime/metro/04517__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import _modDef8185 from "../../../../_runtime/metro/08185__.js";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function BlockedInformationTable() {
  return closure_1_14(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      let obj = {
        start: 0 === index,
        end: length.length - 1 === index,
        icon: null,
        label: null,
        subLabel: null,
        accessible: true,
        accessibilityLabel: null,
      };
      obj = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = closure_1_14(native.Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessibilityLabel = icon.a11yLabel();
      return closure_1_14(TableRow.TableRow, obj, index);
    }),
  });
}
const View = fn(17).View;
const UserRemediationAction = fn(9043).UserRemediationAction;
const RestrictionConfirmationConstants = fn(11382);
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: c10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_11 } =
  RestrictionConfirmationConstants);
const Constants = fn(1074);
({ HelpdeskArticles: closure_12, AnalyticEvents: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = {
  button: { alignContent: "center", textAlign: "center" },
  tableContainer: null,
  otherOptions: null,
  headerText: null,
  container: null,
  header: null,
  avatarContainer: null,
  avatarIconContainer: null,
  avatar: null,
  footerText: null,
};
obj = { marginBottom: nativeDefault.space.PX_16 };
obj.tableContainer = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_24 };
obj.otherOptions = createStyles;
obj.headerText = { textAlign: "center" };
obj.container = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_16 };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
const rect = {
  position: "absolute",
  bottom: -8,
  right: -8,
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
obj.avatarIconContainer = rect;
obj.avatar = { alignSelf: "center" };
let obj4 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj.footerText = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
let obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let items = [
  {
    icon: _modDef8185,
    text() {
      const intl = util.intl;
      return intl.string(util.t.fjFJFV);
    },
    subtext() {
      const intl = util.intl;
      return intl.string(util.t["8SIMPz"]);
    },
    a11yLabel() {
      const intl = util.intl;
      return intl.string(util.t.qHsrGS);
    },
  },
  ,
];
let obj6 = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.fjFJFV);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["8SIMPz"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.qHsrGS);
  },
};
items[1] = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.QCrmqS);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.TKDMoN);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.WR1Mbe);
  },
};
let obj7 = {
  icon: _modDef8185,
  text() {
    const intl = util.intl;
    return intl.string(util.t.QCrmqS);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.TKDMoN);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.WR1Mbe);
  },
};
items[2] = {
  icon: _modDef4517,
  text() {
    const intl = util.intl;
    return intl.string(util.t["lkm/a8"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.lfrNw0);
  },
};
let obj8 = {
  icon: _modDef4517,
  text() {
    const intl = util.intl;
    return intl.string(util.t["lkm/a8"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.lfrNw0);
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default noop.memo(function BlockConfirmationActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: _slicedToArray, onSuccess: noop } = userId);
  c5 = undefined;
  let tmp = closure_16();
  const bottom = channelId(1611)().bottom;
  items = [channelId(7182).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp4 = channelId(7162);
  [tmp6, c5] = _slicedToArray(noop.useState(false), 2);
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj1 = userId(504);
  const items3 = [RelationshipStore];
  const items4 = [userId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => RelationshipStore.isIgnored(userId), items4);
  let obj2 = userId(504);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj2.useStateFromStores(
    items5,
    () => {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    },
    items6,
  );
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items7);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { value: tmp4(items).analyticsLocations, children: null };
    obj = {
      onDismiss() {
        channelId(1242);
        const obj = { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" };
        obj.track(constants3.USER_REMEDIATION_ACTION, obj);
      },
      scrollable: true,
      startHeight: null,
      bodyStyles: null,
      children: null,
    };
    let num = 485;
    if (!stateFromStores1) {
      num = closure_11;
    }
    const sum = num + bottom;
    const sum1 = sum + tmp2(576).space.PX_24;
    obj.startHeight = sum1 + tmp2(576).space.PX_24;
    obj1 = { paddingBottom: tmp2(576).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    obj2 = { style: tmp.header, children: null };
    let obj3 = { style: tmp.avatarContainer, children: null };
    const obj4 = {
      guildId: "Array",
      user: stateFromStores,
      animate: null,
      size: tmp7(1178).AvatarSizes.XLARGE,
      style: tmp.avatar,
    };
    const items8 = [closure_14(tmp7(1178).Avatar, obj4)];
    const obj5 = { style: tmp.avatarIconContainer, children: null };
    const obj6 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp2(7930) };
    obj5.children = closure_14(tmp7(1178).Icon, obj6);
    items8[1] = closure_14(c5, obj5);
    obj3.children = items8;
    const items9 = [closure_15(c5, obj3), ,];
    const obj7 = {
      style: tmp.headerText,
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: null,
    };
    const intl = tmp7(1114).intl;
    const obj8 = { username: tmp2(4712).getName(stateFromStores2, channelId, stateFromStores) };
    obj7.children = intl.format(tmp7(1114).t.CIbzHR, obj8);
    items9[1] = closure_14(tmp7(4556).Text, obj7);
    const obj9 = {
      style: tmp.headerText,
      variant: "heading-md/medium",
      color: "text-default",
      accessibilityRole: "header",
      children: null,
    };
    const intl2 = tmp7(1114).intl;
    obj9.children = intl2.string(tmp7(1114).t.S70jou);
    items9[2] = closure_14(tmp7(4556).Text, obj9);
    obj2.children = items9;
    const items10 = [closure_15(c5, obj2), , ,];
    const obj10 = { style: tmp.tableContainer, children: closure_14(BlockedInformationTable, {}) };
    items10[1] = closure_14(c5, obj10);
    tmp13Result = !stateFromStores1;
    if (!stateFromStores1) {
      const obj11 = { style: tmp.otherOptions, children: null };
      const obj12 = { title: null, hasIcons: true, children: null };
      const intl3 = tmp7(1114).intl;
      obj12.title = intl3.string(tmp7(1114).t["+BJTcB"]);
      const obj13 = { icon: null, label: null, subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
      const obj14 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp2(6969) };
      obj13.icon = tmp13(tmp7(1178).Icon, obj14);
      const intl4 = tmp7(1114).intl;
      obj13.label = intl4.string(tmp7(1114).t.hC8tcc);
      const intl5 = tmp7(1114).intl;
      obj13.subLabel = intl5.string(tmp7(1114).t.If89rE);
      const intl6 = tmp7(1114).intl;
      obj13.accessibilityLabel = intl6.string(tmp7(1114).t["8qGQsM"]);
      obj13.onPress = function onPress() {
        let obj = { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" };
        obj.track(constants.USER_REMEDIATION_ACTION, obj);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj = {
          userId,
          channelId,
          onSuccess,
          onIgnore,
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION,
        };
        obj3.openLazy(asyncRequireImpl(11384, dependencyMap.paths), closure_2_10, obj, "replaceTopSheet");
      };
      obj12.children = tmp13(tmp7(5605).TableRow, obj13);
      obj11.children = tmp13(tmp7(5687).TableRowGroup, obj12);
      tmp13Result = tmp13(tmp19, obj11);
    }
    const obj15 = { children: null };
    items10[2] = tmp13Result;
    const obj16 = { style: tmp.button, children: null };
    const obj17 = { size: "lg", variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1114).intl;
    obj17.text = intl7.string(tmp7(1114).t.l4Emac);
    obj17.onPress = function onPress() {
      _undefined(true);
      let obj = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.blockUser(userId, obj).then(() => {
        const result = channelId(8404).showBlockSuccessToast(userId, closure_1_1);
        if (onSuccess != null) {
          onSuccess();
        }
        const obj = channelId(8404);
        channelId(4527).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const blockUserResult = obj.blockUser(userId, obj);
      AnalyticsUtilsDefault.track(constants.BLOCK_USER_CONFIRMED);
    };
    obj17.disabled = tmp6;
    obj17.loading = tmp6;
    const items11 = [closure_14(tmp7(4975).Button, obj17)];
    const obj18 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default", children: null };
    const intl8 = tmp7(1114).intl;
    const obj19 = {
      articleLink() {
        channelId(4527).hideActionSheet();
        const obj = channelId(4527);
        const articleURL = channelId(2024).getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
        const obj2 = channelId(2024);
        channelId(4255).openURL(articleURL);
      },
    };
    obj18.children = intl8.format(tmp7(1114).t.CpTgBn, obj19);
    items11[1] = closure_14(tmp7(4556).Text, obj18);
    obj16.children = items11;
    items10[3] = closure_15(c5, obj16);
    obj15.children = items10;
    obj.children = closure_15(tmp7(6627).BottomSheetScrollView, obj15);
    obj.children = closure_14(tmp7(7150).BottomSheet, obj);
    tmp13Result = tmp13(tmp7(7162).AnalyticsLocationProvider, obj);
    const tmp2Result = tmp2(4712);
  }
  return tmp13Result;
});
