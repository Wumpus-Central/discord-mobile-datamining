// === Module 11262: BlockConfirmationActionSheet ===

// Module 11262 (BlockConfirmationActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import _modDef5732 from "module_5732" /* 5732 */;
import TableRow from "TableRow" /* 6969 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import UserActionCreators from "UserActionCreators" /* 8744 */;
import _modDef8748 from "module_8748" /* 8748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
function BlockedInformationTable() {
  return collapsedCategories(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_18(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon.icon }), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
      return closure_1_18(TableRow.TableRow, obj, index);
    })
  });
}
const View = fn(17).View;
const UserRemediationAction = fn(7483).UserRemediationAction;
const RestrictionConfirmationConstants = fn(11261);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_11, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_12, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: map1 } = RestrictionConfirmationConstants);
const Constants = fn(1072);
({ HelpdeskArticles: closure_14, AnalyticEvents: closure_15, RelationshipTypes: closure_16 } = Constants);
const SafetyToastType = fn(7484).SafetyToastType;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5009);
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: { marginBottom: nativeDefault.space.PX_16 }, otherOptions: null, headerText: null, container: null, header: null, avatarContainer: null, avatarIconContainer: null, avatar: null, footerText: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.otherOptions = { marginBottom: nativeDefault.space.PX_24 };
obj.headerText = { textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj.container = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj5 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_16 };
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
obj.avatar = { alignSelf: "center" };
let obj7 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj.footerText = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let closure_20 = createStyles.createStyles(obj);
let obj8 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let items = [
  {
    icon: _modDef8748,
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
    }
  },
,

];
let obj9 = {
  icon: _modDef8748,
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
  }
};
items[1] = {
  icon: _modDef8748,
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
  }
};
let obj10 = {
  icon: _modDef8748,
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
  }
};
items[2] = {
  icon: _modDef5732,
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
  }
};
let obj11 = {
  icon: _modDef5732,
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
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default noop.memo(function BlockConfirmationActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: asyncGeneratorStep, onSuccess: _slicedToArray } = userId);
  noop = undefined;
  const tmp = closure_20();
  const bottom = channelId(1626)().bottom;
  items = [channelId(7345).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp4 = channelId(7320);
  [tmp6, c5] = noop.useState(false);
  closure_6 = channelId(10126)();
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
  const stateFromStores2 = userId(504).useStateFromStores(items5, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items7);
  let tmp13Result2 = null;
  if (null != stateFromStores) {
    let obj4 = { value: tmp4(items).analyticsLocations, children: null };
    let obj5 = {
      onDismiss: function handleClose() {
          channelId(onBlock[27]).track(constants3.USER_REMEDIATION_ACTION, { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" });
        },
      scrollable: true,
      startHeight: null,
      bodyStyles: null,
      children: null
    };
    let num = 485;
    if (!stateFromStores1) {
      num = closure_13;
    }
    const sum = num + bottom;
    const sum1 = sum + tmp2(575).space.PX_24;
    obj5.startHeight = sum1 + tmp2(575).space.PX_24;
    let obj6 = { paddingBottom: tmp2(575).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    obj5.bodyStyles = obj6;
    const obj7 = { style: tmp.header, children: null };
    let obj8 = { style: tmp.avatarContainer, children: null };
    const obj9 = { guildId: "Array", user: stateFromStores, animate: null, size: tmp7(1188).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [closure_18(tmp7(1188).Avatar, obj9), ];
    const obj10 = { style: tmp.avatarIconContainer, children: null };
    const obj11 = { size: tmp7(1188).Icon.Sizes.MEDIUM, source: tmp2(8763) };
    obj10.children = closure_18(tmp7(1188).Icon, obj11);
    items8[1] = closure_18(closure_6, obj10);
    obj8.children = items8;
    const items9 = [closure_19(closure_6, obj8), , ];
    const obj12 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp7(1114).intl;
    const obj13 = { username: tmp2(6036).getName(stateFromStores2, channelId, stateFromStores) };
    obj12.children = intl.format(tmp7(1114).t.CIbzHR, obj13);
    items9[1] = closure_18(tmp7(5619).Text, obj12);
    const obj14 = { style: tmp.headerText, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    const intl2 = tmp7(1114).intl;
    obj14.children = intl2.string(tmp7(1114).t.S70jou);
    items9[2] = closure_18(tmp7(5619).Text, obj14);
    obj7.children = items9;
    const items10 = [closure_19(closure_6, obj7), , , ];
    const obj15 = { style: tmp.tableContainer, children: closure_18(BlockedInformationTable, {}) };
    items10[1] = closure_18(closure_6, obj15);
    let tmp13Result = !stateFromStores1;
    if (!stateFromStores1) {
      const obj16 = { style: tmp.otherOptions, children: null };
      const obj17 = { title: null, hasIcons: true, children: null };
      const intl3 = tmp7(1114).intl;
      obj17.title = intl3.string(tmp7(1114).t["+BJTcB"]);
      const obj18 = { icon: null, label: null, subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
      const obj19 = { size: tmp7(1188).Icon.Sizes.MEDIUM, source: tmp2(7130) };
      obj18.icon = closure_18(tmp7(1188).Icon, obj19);
      const intl4 = tmp7(1114).intl;
      obj18.label = intl4.string(tmp7(1114).t.hC8tcc);
      const intl5 = tmp7(1114).intl;
      obj18.subLabel = intl5.string(tmp7(1114).t.If89rE);
      const intl6 = tmp7(1114).intl;
      obj18.accessibilityLabel = intl6.string(tmp7(1114).t["8qGQsM"]);
      obj18.onPress = function onPress() {
        AnalyticsUtilsDefault.track(constants.USER_REMEDIATION_ACTION, { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" });
        const obj2 = { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" };
        const obj3 = ActionSheetActionCreatorsDefault;
        const tmp2 = asyncRequireImpl(11263, dependencyMap.paths);
        obj3.openLazy(tmp2, closure_2_12, { userId, channelId, onBlock, onSuccess, onIgnore, impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION }, "replaceTopSheet");
      };
      obj17.children = closure_18(tmp7(6969).TableRow, obj18);
      obj16.children = closure_18(tmp7(7054).TableRowGroup, obj17);
      tmp13Result = closure_18(tmp19, obj16);
    }
    const obj20 = { children: null };
    items10[2] = tmp13Result;
    const obj21 = { style: tmp.button, children: null };
    const obj22 = { size: "lg", variant: "destructive", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1114).intl;
    obj22.text = intl7.string(tmp7(1114).t.l4Emac);
    obj22.onPress = function onPress() {
      _undefined(true);
      let obj2 = { userId, context: null, type: null };
      let obj = RelationshipActionCreatorsDefault;
      obj2.context = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
      obj2.type = constants2.BLOCKED;
      const obj3 = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.addRelationship(obj2).then(asyncGeneratorStep(async () => {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                if (obj8.getIsScreenReaderEnabled()) {
                  v1 = 1;
                  dependencyMap = 1;
                  const obj6 = { value: closure_2_6(tmp4(7489).getSafetyToastTypeContent(constants.BLOCK_SUCCESS, userId, channelId)), done: false };
                  return obj6;
                } else {
                  const result = v1(7490).showBlockSuccessToast(userId, channelId);
                  const obj2 = v1(7490);
                }
                obj8 = tmp4(5269);
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj = { value, done: true };
              return obj;
            }
            if (closure_128_4 != null) {
              tmp11();
            }
            v1(5253).hideActionSheet(closure_1_11);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp24) {
            dependencyMap = tmp;
            throw tmp24;
          }
        }
      }));
      if (onBlock != null) {
        onBlock();
      }
      const addRelationshipResult = obj.addRelationship(obj2);
      AnalyticsUtilsDefault.track(constants.BLOCK_USER_CONFIRMED);
      const tmp2Result = AnalyticsUtilsDefault;
    };
    obj22.disabled = tmp6;
    obj22.loading = tmp6;
    const items11 = [closure_18(tmp7(5629).Button, obj22), ];
    const obj23 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default", children: null };
    const intl8 = tmp7(1114).intl;
    const obj24 = {
      articleLink: function handleHelpCenter() {
          channelId(onBlock[33]).hideActionSheet();
          const obj = channelId(onBlock[33]);
          const articleURL = channelId(onBlock[42]).getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(onBlock[42]);
          channelId(onBlock[43]).openURL(articleURL);
        }
    };
    obj23.children = intl8.format(tmp7(1114).t.CpTgBn, obj24);
    items11[1] = closure_18(tmp7(5619).Text, obj23);
    obj21.children = items11;
    items10[3] = closure_19(closure_6, obj21);
    obj20.children = items10;
    obj5.children = closure_19(tmp7(5270).BottomSheetScrollView, obj20);
    obj4.children = closure_18(tmp7(5267).BottomSheet, obj5);
    tmp13Result2 = closure_18(tmp7(7320).AnalyticsLocationProvider, obj4);
    let tmp2Result = tmp2(6036);
  }
  return tmp13Result2;
});