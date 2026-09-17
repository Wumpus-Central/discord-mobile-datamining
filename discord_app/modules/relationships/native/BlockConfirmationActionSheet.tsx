// discord_app/modules/relationships/native/BlockConfirmationActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import _modDef4596 from "../../../../_runtime/metro/04596__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import _modDef8333 from "../../../../_runtime/metro/08333__.js";
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
      const obj = {
        start: 0 === index,
        end: length.length - 1 === index,
        icon: closure_1_14(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon.icon }),
        label: icon.text(),
        subLabel: icon.subtext(),
        accessible: true,
        accessibilityLabel: icon.a11yLabel(),
      };
      return closure_1_14(TableRow.TableRow, obj, index);
    }),
  });
}
const View = fn(17).View;
const UserRemediationAction = fn(9197).UserRemediationAction;
const RestrictionConfirmationConstants = fn(11536);
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: c10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_11 } =
  RestrictionConfirmationConstants);
const Constants = fn(1074);
({ HelpdeskArticles: closure_12, AnalyticEvents: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4640);
let obj = {
  button: { alignContent: "center", textAlign: "center" },
  tableContainer: { marginBottom: nativeDefault.space.PX_16 },
  otherOptions: null,
  headerText: null,
  container: null,
  header: null,
  avatarContainer: null,
  avatarIconContainer: null,
  avatar: null,
  footerText: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.otherOptions = { marginBottom: nativeDefault.space.PX_24 };
obj.headerText = { textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj.container = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj5 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_16 };
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
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
let obj7 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj.footerText = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
let obj8 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let items = [
  {
    icon: _modDef8333,
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
let obj9 = {
  icon: _modDef8333,
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
  icon: _modDef8333,
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
let obj10 = {
  icon: _modDef8333,
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
  icon: _modDef4596,
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
let obj11 = {
  icon: _modDef4596,
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
  const tmp = closure_16();
  const bottom = channelId(1612)().bottom;
  items = [channelId(7296).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp4 = channelId(7276);
  [tmp6, c5] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj = userId(504);
  const items3 = [RelationshipStore];
  const items4 = [userId];
  const stateFromStores1 = userId(504).useStateFromStores(items3, () => RelationshipStore.isIgnored(userId), items4);
  let obj2 = userId(504);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = userId(504).useStateFromStores(
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
  let tmp13Result2 = null;
  if (null != stateFromStores) {
    const obj4 = { value: tmp4(items).analyticsLocations, children: null };
    const obj5 = {
      onDismiss() {
        channelId(1241).track(constants3.USER_REMEDIATION_ACTION, {
          action: constants.DISMISS_BLOCK,
          location: "user-profile-context-menu",
        });
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
    obj5.startHeight = sum1 + tmp2(576).space.PX_24;
    const obj6 = { paddingBottom: tmp2(576).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    obj5.bodyStyles = obj6;
    const obj7 = { style: tmp.header, children: null };
    const obj8 = { style: tmp.avatarContainer, children: null };
    const obj9 = {
      guildId: "Array",
      user: stateFromStores,
      animate: null,
      size: tmp7(1177).AvatarSizes.XLARGE,
      style: tmp.avatar,
    };
    const items8 = [closure_14(tmp7(1177).Avatar, obj9)];
    const obj10 = { style: tmp.avatarIconContainer, children: null };
    const obj11 = { size: tmp7(1177).Icon.Sizes.MEDIUM, source: tmp2(8066) };
    obj10.children = closure_14(tmp7(1177).Icon, obj11);
    items8[1] = closure_14(c5, obj10);
    obj8.children = items8;
    const items9 = [closure_15(c5, obj8), ,];
    const obj12 = {
      style: tmp.headerText,
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: null,
    };
    const intl = tmp7(1115).intl;
    const obj13 = { username: tmp2(4792).getName(stateFromStores2, channelId, stateFromStores) };
    obj12.children = intl.format(tmp7(1115).t.CIbzHR, obj13);
    items9[1] = closure_14(tmp7(4636).Text, obj12);
    const obj14 = {
      style: tmp.headerText,
      variant: "heading-md/medium",
      color: "text-default",
      accessibilityRole: "header",
      children: null,
    };
    const intl2 = tmp7(1115).intl;
    obj14.children = intl2.string(tmp7(1115).t.S70jou);
    items9[2] = closure_14(tmp7(4636).Text, obj14);
    obj7.children = items9;
    const items10 = [closure_15(c5, obj7), , ,];
    const obj15 = { style: tmp.tableContainer, children: closure_14(BlockedInformationTable, {}) };
    items10[1] = closure_14(c5, obj15);
    let tmp13Result = !stateFromStores1;
    if (!stateFromStores1) {
      const obj16 = { style: tmp.otherOptions, children: null };
      const obj17 = { title: null, hasIcons: true, children: null };
      const intl3 = tmp7(1115).intl;
      obj17.title = intl3.string(tmp7(1115).t["+BJTcB"]);
      const obj18 = { icon: null, label: null, subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
      const obj19 = { size: tmp7(1177).Icon.Sizes.MEDIUM, source: tmp2(7081) };
      obj18.icon = closure_14(tmp7(1177).Icon, obj19);
      const intl4 = tmp7(1115).intl;
      obj18.label = intl4.string(tmp7(1115).t.hC8tcc);
      const intl5 = tmp7(1115).intl;
      obj18.subLabel = intl5.string(tmp7(1115).t.If89rE);
      const intl6 = tmp7(1115).intl;
      obj18.accessibilityLabel = intl6.string(tmp7(1115).t["8qGQsM"]);
      obj18.onPress = function onPress() {
        AnalyticsUtilsDefault.track(constants.USER_REMEDIATION_ACTION, {
          action: UserRemediationAction.GOTO_IGNORE,
          location: "user-profile-context-menu",
        });
        const obj2 = { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" };
        const obj3 = ActionSheetActionCreatorsDefault;
        const tmp2 = asyncRequireImpl(11538, dependencyMap.paths);
        obj3.openLazy(
          tmp2,
          closure_2_10,
          {
            userId,
            channelId,
            onSuccess,
            onIgnore,
            impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION,
          },
          "replaceTopSheet",
        );
      };
      obj17.children = closure_14(tmp7(5693).TableRow, obj18);
      obj16.children = closure_14(tmp7(5775).TableRowGroup, obj17);
      tmp13Result = closure_14(tmp19, obj16);
    }
    const obj20 = { children: null };
    items10[2] = tmp13Result;
    const obj21 = { style: tmp.button, children: null };
    const obj22 = { size: "lg", variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1115).intl;
    obj22.text = intl7.string(tmp7(1115).t.l4Emac);
    obj22.onPress = function onPress() {
      _undefined(true);
      let obj = RelationshipActionCreatorsDefault;
      const obj2 = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.blockUser(userId, { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET }).then(() => {
        const result = channelId(8553).showBlockSuccessToast(userId, closure_1_1);
        if (onSuccess != null) {
          onSuccess();
        }
        const obj = channelId(8553);
        channelId(4607).hideActionSheet();
        const tmpResult = channelId(4607);
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const blockUserResult = obj.blockUser(userId, {
        location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET,
      });
      AnalyticsUtilsDefault.track(constants.BLOCK_USER_CONFIRMED);
      const tmp2Result = AnalyticsUtilsDefault;
    };
    obj22.disabled = tmp6;
    obj22.loading = tmp6;
    const items11 = [closure_14(tmp7(5062).Button, obj22)];
    const obj23 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default", children: null };
    const intl8 = tmp7(1115).intl;
    const obj24 = {
      articleLink() {
        channelId(4607).hideActionSheet();
        const obj = channelId(4607);
        const articleURL = channelId(2025).getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
        const obj2 = channelId(2025);
        channelId(4334).openURL(articleURL);
      },
    };
    obj23.children = intl8.format(tmp7(1115).t.CpTgBn, obj24);
    items11[1] = closure_14(tmp7(4636).Text, obj23);
    obj21.children = items11;
    items10[3] = closure_15(c5, obj21);
    obj20.children = items10;
    obj5.children = closure_15(tmp7(6738).BottomSheetScrollView, obj20);
    obj4.children = closure_14(tmp7(7264).BottomSheet, obj5);
    tmp13Result2 = closure_14(tmp7(7276).AnalyticsLocationProvider, obj4);
    let tmp2Result = tmp2(4792);
  }
  return tmp13Result2;
});
