// discord_app/modules/user_settings/connections/native/ConnectedAccount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native2 from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import _modDef3098 from "../../../application_account_linking/ApplicationAccountLinking.messages.js";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../../actions/ConnectedAccountsActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef7237 from "../../../../../_runtime/metro/07237__.js";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import InfoBoxDefault from "../../authorized_apps/native/InfoBox.tsx";
import shouldWarnConnectedAccountTwoWayDefault from "../../../connections/shouldWarnConnectedAccountTwoWay.tsx";
import XboxTwoWayLinkUpsell from "two_way_link/xbox/XboxTwoWayLinkUpsell.tsx";
import PlayStationTwoWayLinkUpsell from "two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function Integration(integration) {
  integration = integration.integration;
  importDefault = undefined;
  legacyClassComponentStyles = integration(4756).useLegacyClassComponentStyles(legacyClassComponentStyles);
  const obj = integration(4756);
  [tmp5, c1] = noop.useState();
  const tmp4 = _slicedToArray(noop.useState(), 2);
  const items = [ConnectedAccountsStore];
  const items1 = [integration.id];
  const stateFromStores = integration(504).useStateFromStores(
    items,
    () => ConnectedAccountsStore.isJoining(integration.id),
    items1,
  );
  const obj2 = integration(504);
  const items2 = [GuildStore];
  const items3 = [integration.guild.id];
  const tmp7 =
    null == integration(504).useStateFromStores(items2, () => GuildStore.getGuild(integration.guild.id), items3);
  if (!tmp7) {
    let tmp12 = tmp5 === integration.id;
    if (tmp12) {
      const obj4 = {
        style: legacyClassComponentStyles.integrationErrorText,
        variant: "text-sm/medium",
        color: "text-feedback-critical",
        children: null,
      };
      const intl2 = tmp(1115).intl;
      obj4.children = intl2.string(tmp(1115).t.fEptJP);
      tmp12 = closure_14(tmp(4752).Text, obj4);
    }
    const obj5 = { style: legacyClassComponentStyles.integrationContainer, children: null };
    const obj6 = { style: legacyClassComponentStyles.integrationContainerInternal, children: null };
    const obj7 = {
      guild: integration.guild,
      size: tmp(5801).GuildIconSizes.SMALL,
      style: legacyClassComponentStyles.integrationGuildIcon,
    };
    const items4 = [closure_14(GuildIconDefault, obj7), ,];
    const obj8 = { style: legacyClassComponentStyles.integrationTextRowContainer, children: null };
    const obj9 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
    const items5 = [closure_14(tmp(4752).Text, obj9)];
    value = PlatformsDefault.get(integration.type);
    let platformUserUrl;
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(integration.account);
      }
    }
    const obj10 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: platformUserUrl };
    items5[1] = closure_14(tmp(4752).Text, obj10);
    obj8.children = items5;
    items4[1] = closure_15(View, obj8);
    items4[2] = tmp7;
    obj6.children = items4;
    const items6 = [closure_15(View, obj6), tmp12];
    obj5.children = items6;
    return closure_15(View, obj5);
  } else {
    const obj11 = { style: legacyClassComponentStyles.integrationJoinButton, children: null };
    let obj13 = {
      size: "sm",
      variant: "secondary",
      onPress() {
        ConnectedAccountsActionCreatorsDefault.joinServer(integration.id, () => {
          closure_1_1(id.id);
        });
      },
      disabled: stateFromStores,
      text: null,
    };
    const intl = tmp(1115).intl;
    const string = intl.string;
    let RXvQQu = tmp(1115).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj13.text = stringResult;
    obj13 = closure_14(tmp(5186).Button, obj13);
    obj11.children = obj13;
    closure_14(View, obj11);
  }
  const obj3 = integration(504);
}
function RowSwitch(label) {
  const merged = Object.assign(label, Object.assign({ label: 0 }));
  const merged1 = Object.assign(merged);
  return closure_1_14(TableSwitchRow.TableSwitchRow, { label: label.label });
}
const View = fn(17).View;
const Constants = fn(1074);
({
  FRIEND_SYNC_PLATFORM_TYPES: closure_9,
  ACTIVITY_PLATFORM_TYPES: c10,
  PlatformTypes: closure_11,
  HelpdeskArticles: closure_12,
  Fonts,
} = Constants);
const MetadataFields = fn(5625).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  platformIcon: { marginRight: 4 },
  connectedApplicationIdentityIcon: null,
  deleteConnectionIcon: null,
  container: null,
  connectedAccountItem: null,
  connectedAccountTopContainer: null,
  connectedAccountContentContainer: null,
  integrationContainer: null,
  integrationContainerInternal: null,
  integrationTextRowContainer: null,
  integrationErrorText: null,
  integrationCategoryLabel: null,
  integrationGuildIcon: null,
  integrationJoinButton: null,
  divider: null,
  alertInfoBox: null,
  alertBodyText: null,
  metadataContainer: null,
  metadataItemsContainer: null,
  metadataRefreshButton: null,
  metadataRefreshButtonDisabled: null,
  metadataRefreshIcon: null,
  metadataBannerContainer: null,
  newBadge: null,
  rowDivider: null,
  addDetailsButton: null,
  learnMoreButton: null,
  relinkButton: null,
  relinkText: null,
};
let obj3 = { borderRadius: null, marginRight: 4 };
const native = fn(1177);
obj3.borderRadius = native.getIconSize(fn(1177).Icon.Sizes.LARGE);
obj2.connectedApplicationIdentityIcon = obj3;
obj2.deleteConnectionIcon = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.container = { marginHorizontal: 8, marginVertical: 4 };
let obj5 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.connectedAccountItem = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
let obj6 = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
obj2.connectedAccountTopContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  borderTopRightRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
};
obj2.connectedAccountContentContainer = { marginTop: 8, gap: 8 };
let obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  borderTopRightRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
};
obj2.integrationContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
obj2.integrationContainerInternal = { alignItems: "center", flexDirection: "row" };
obj2.integrationTextRowContainer = { alignItems: "flex-start", flexDirection: "column", flex: 1 };
obj2.integrationErrorText = { alignItems: "center", marginTop: 4, marginBottom: 8 };
obj2.integrationCategoryLabel = { marginVertical: 0 };
obj2.integrationGuildIcon = { margin: 8 };
obj2.integrationJoinButton = { alignSelf: "center", marginEnd: 8, marginStart: 8 };
let obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
obj2.divider = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 1,
  marginVertical: 8,
  marginHorizontal: 16,
};
obj2.alertInfoBox = { marginTop: 8 };
let merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.alertBodyText = { marginTop: 16 };
let obj10 = { marginTop: 16 };
let obj9 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
obj2.metadataContainer = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
obj2.metadataItemsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  paddingRight: 8,
  flexShrink: 1,
};
obj2.metadataRefreshButton = { alignSelf: "center", marginLeft: "auto" };
obj2.metadataRefreshButtonDisabled = { opacity: 0.5 };
obj2.metadataRefreshIcon = { height: 16, width: 16 };
obj2.metadataBannerContainer = {
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 14,
};
obj2.newBadge = { marginRight: 4 };
obj2.rowDivider = { flexBasis: "100%", height: 12 };
obj2.addDetailsButton = { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 };
obj2.learnMoreButton = { paddingHorizontal: 16, flexGrow: 0 };
let obj11 = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
obj2.relinkButton = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round };
obj2.relinkText = { marginTop: 8 };
let legacyClassComponentStyles = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class ConnectedAccount extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = {
      isVisible: 1 === applyArgumentsResult.props.account.visibility,
      isMetadataVisible: 1 === applyArgumentsResult.props.account.metadataVisibility,
      inProgressVisibility: null,
      inProgressMetadataVisibility: null,
      showActivity: applyArgumentsResult.props.account.showActivity,
      friendSync: applyArgumentsResult.props.account.friendSync,
      metadataRefreshing: false,
      metadataAlreadyRefreshed: false,
    };
    applyArgumentsResult.state = obj;
    applyArgumentsResult.handleDisconnect = function handleDisconnect() {
      const tmp2 = legacyClassComponentStyles(applyArgumentsResult.context);
      const account = applyArgumentsResult.props.account;
      value = PlatformsDefault.get(account.type);
      const intl = util.intl;
      const formatResult = intl.format(util.t.VgqIPj, { provider: value.name });
      let tmp8;
      if (shouldWarnConnectedAccountTwoWayDefault(account)) {
        const obj3 = { children: null };
        const obj4 = { style: tmp2.alertBodyText, variant: "text-md/medium", children: formatResult };
        const items = [closure_2_14(Text_Text.Text, obj4)];
        const obj5 = { style: tmp2.alertInfoBox, children: null };
        const intl2 = util.intl;
        const obj6 = { platformName: value.name };
        obj5.children = intl2.format(util.t.COW3Xn, obj6);
        items[1] = closure_2_14(InfoBoxDefault, obj5);
        obj3.children = items;
        tmp8 = __initData(View, obj3);
        const tmp3Result = InfoBoxDefault;
      }
      const obj2 = { provider: value.name };
      const obj7 = {
        title: null,
        body: null,
        cancelText: null,
        children: null,
        confirmText: null,
        onConfirm: null,
        confirmColor: null,
      };
      const intl3 = util.intl;
      obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: value.name });
      obj7.body = formatResult;
      const intl4 = util.intl;
      obj7.cancelText = intl4.string(util.t["ETE/oC"]);
      obj7.children = tmp8;
      const intl5 = util.intl;
      obj7.confirmText = intl5.string(util.t.ppppRJ);
      obj7.onConfirm = applyArgumentsResult.handleConfirmDisconnectAccount;
      obj7.confirmColor = common_AlertDefault.Colors.RED;
      AlertActionCreatorsDefault.show(obj7);
      const obj8 = { name: value.name };
      const tmp3Result2 = AlertActionCreatorsDefault;
    };
    applyArgumentsResult.handleConfirmDisconnectAccount = function handleConfirmDisconnectAccount() {
      const account = applyArgumentsResult.props.account;
      ConnectedAccountsActionCreatorsDefault.disconnect(account.type, account.id);
    };
    closure_129_0 = undefined;
    closure_129_1 = applyArgumentsResult;
    closure_129_0 = closure_3(async (isVisible) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0) => {
        closure_129_0 = isVisible;
        const account = importDefault.props.account;
        let num5 = 0;
        if (isVisible) {
          num5 = 1;
        }
        if (isVisible) {
          if (!account.verified) {
            importDefault.setState({ inProgressVisibility: num5 });
            closure_1(tmp3[26])({ platformType: account.type });
            c5 = 3;
            return { value: undefined, done: true };
          }
        }
        importDefault.setState({ isVisible });
        await closure_1(tmp3[13]).setVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ isVisible: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleVisibilityChange = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_130_0 = undefined;
    closure_130_1 = applyArgumentsResult;
    closure_130_0 = closure_3(async (isMetadataVisible) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0) => {
        closure_129_0 = isMetadataVisible;
        const account = importDefault.props.account;
        let num5 = 0;
        if (isMetadataVisible) {
          num5 = 1;
        }
        if (isMetadataVisible) {
          if (!account.verified) {
            importDefault.setState({ inProgressMetadataVisibility: num5 });
            closure_1(tmp3[26])({ platformType: account.type });
            c5 = 3;
            return { value: undefined, done: true };
          }
        }
        importDefault.setState({ isMetadataVisible });
        await closure_1(tmp3[13]).setMetadataVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ isMetadataVisible: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleMetadataVisibilityChange = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_131_0 = undefined;
    closure_131_1 = applyArgumentsResult;
    closure_131_0 = closure_3(async (friendSync) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0) => {
        closure_129_0 = friendSync;
        const account = importDefault.props.account;
        importDefault.setState({ friendSync });
        await closure_1(tmp3[13]).setFriendSync(account.type, account.id, friendSync);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ friendSync: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleFriendSyncChange = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_132_0 = undefined;
    closure_132_1 = applyArgumentsResult;
    closure_132_0 = closure_3(async (showActivity) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0) => {
        closure_129_0 = showActivity;
        const account = importDefault.props.account;
        importDefault.setState({ showActivity });
        await closure_1(tmp3[13]).setShowActivity(account.type, account.id, showActivity);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ showActivity: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleShowActivityChange = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = ConnectedAccount.prototype;
prototype["componentDidUpdate"] = function componentDidUpdate(account) {
  const self = this;
  account = this.props.account;
  if (account.account !== account) {
    const obj4 = {};
    const merged = Object.assign(self.state);
    obj4.isVisible = 1 === account.visibility;
    obj4.isMetadataVisible = 1 === account.metadataVisibility;
    ({ showActivity: obj3.showActivity, friendSync: obj3.friendSync } = account);
    if (account.verified) {
      ({ inProgressVisibility, inProgressMetadataVisibility } = self.state);
      if (null != inProgressVisibility) {
        obj4.isVisible = 1 === inProgressVisibility;
        obj4.inProgressVisibility = null;
        ConnectedAccountsActionCreatorsDefault.setVisibility(account.type, account.id, inProgressVisibility);
      }
      if (null != inProgressMetadataVisibility) {
        obj4.isMetadataVisible = 1 === inProgressMetadataVisibility;
        obj4.inProgressMetadataVisibility = null;
        const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(
          account.type,
          account.id,
          inProgressMetadataVisibility,
        );
      }
    }
    self.setState(obj4);
  }
};
prototype["renderUpsell"] = function renderUpsell() {
  const account = this.props.account;
  if (account.twoWayLink) {
    return null;
  } else if (account.type === constants.XBOX) {
    let tmp2 = closure_1_14(XboxTwoWayLinkUpsell.XboxTwoWayLinkUpsell, {});
  } else if (account.type === tmp.PLAYSTATION) {
    tmp2 = closure_1_14(PlayStationTwoWayLinkUpsell.PlayStationTwoWayLinkUpsell, {});
  }
};
prototype["renderVisibilityCheckRow"] = function renderVisibilityCheckRow() {
  const obj = { label: null, value: null, onValueChange: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.f7yOAX);
  obj.value = this.state.isVisible;
  obj.onValueChange = this.handleVisibilityChange;
  return closure_1_14(RowSwitch, obj);
};
prototype["renderMetadataVisibilityCheckRow"] = function renderMetadataVisibilityCheckRow() {
  const self = this;
  value = PlatformsDefault.get(this.props.account.type);
  let hasMetadata;
  if (value != null) {
    hasMetadata = value.hasMetadata;
  }
  if (true !== hasMetadata) {
    return null;
  } else {
    const obj2 = { label: null, value: null, disabled: null, onValueChange: null };
    ({ isMetadataVisible, isVisible } = self.state);
    const intl = util.intl;
    obj2.label = intl.string(util.t.FYKGsL);
    obj2.value = isMetadataVisible;
    obj2.disabled = !isVisible;
    obj2.onValueChange = self.handleMetadataVisibilityChange;
    return closure_1_14(RowSwitch, obj2);
  }
};
prototype["renderMetadata"] = function renderMetadata() {
  const self = this;
  let tmp = legacyClassComponentStyles(this.context);
  const props = this.props;
  const account = props.account;
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  let stringResult = dependencyMap;
  const createdAtDate = account(5624).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], props.locale);
  const type = account.type;
  if (constants.REDDIT === type) {
    let redditMetadataItems = tmp2(11826).generateRedditMetadataItems(metadata);
    const tmp2Result = tmp2(11826);
  } else if (constants.STEAM === type) {
    redditMetadataItems = tmp2(11826).generateSteamMetadataItems(metadata);
    const tmp2Result6 = tmp2(11826);
  } else {
    if (constants.BLUESKY !== type) {
      if (constants.TWITTER !== type) {
        if (constants.MASTODON !== type) {
          if (constants.EBAY === type) {
            redditMetadataItems = tmp2(11826).generateEbayMetadataItems(metadata);
            const tmp2Result7 = tmp2(11826);
          } else if (constants.PAYPAL === type) {
            redditMetadataItems = tmp2(11826).generatePaypalMetadataItems(metadata);
            const tmp2Result8 = tmp2(11826);
          } else {
            redditMetadataItems = [];
            if (constants.TIKTOK === type) {
              redditMetadataItems = tmp2(11826).generateTikTokMetadataItems(metadata);
              const tmp2Result9 = tmp2(11826);
            }
          }
        }
      }
    }
    redditMetadataItems = tmp2(11826).generateTwitterMetadataItems(metadata);
    const tmp2Result10 = tmp2(11826);
  }
  if (null !== createdAtDate) {
    let obj = { variant: "text-xs/normal", color: "interactive-text-default", children: null };
    const intl = tmp2(1115).intl;
    const obj3 = { date: createdAtDate };
    obj.children = intl.format(tmp2(1115).t["9rfonh"], obj3);
    redditMetadataItems.push(closure_14(tmp2(4752).Text, obj, MetadataFields.CREATED_AT));
  }
  let intl2 = self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed;
  function handleRefresh() {
    self.setState({ metadataRefreshing: true });
    ConnectedAccountsActionCreatorsDefault.refresh(account.type, account.id).finally(() => {
      const timerId = setTimeout(() => {
        state.setState({ metadataRefreshing: false, metadataAlreadyRefreshed: true });
      }, 2000);
    });
  }
  if (0 === redditMetadataItems.length) {
    value = self(5500).get(account.type);
    let hasMetadata;
    if (value != null) {
      hasMetadata = value.hasMetadata;
    }
    if (true !== hasMetadata) {
      return null;
    } else {
      const obj4 = { style: null, children: null };
      const items = [,];
      ({ metadataContainer: arr4[0], metadataBannerContainer: arr4[1] } = tmp);
      obj4.style = items;
      const obj5 = { text: null, style: null };
      const intl4 = tmp2(1115).intl;
      obj5.text = intl4.string(tmp2(1115).t.y2b7CA);
      obj5.style = tmp.newBadge;
      const items1 = [closure_14(tmp2(1177).TextBadge, obj5), , , ,];
      const obj6 = { variant: "text-xs/normal", children: null };
      const intl5 = tmp2(1115).intl;
      obj6.children = intl5.string(tmp2(1115).t.eH16Gn);
      items1[1] = closure_14(tmp2(4752).Text, obj6);
      const obj7 = { style: tmp.rowDivider };
      items1[2] = closure_14(View, obj7);
      let obj8 = { style: tmp.addDetailsButton, children: null };
      let string = tmp2(5186).Button;
      const intl6 = tmp2(1115).intl;
      const string2 = intl6.string;
      let Button = tmp2(1115).t;
      if (self.state.metadataAlreadyRefreshed) {
        let string2Result = string2(Button.i4jeWR);
      } else {
        string2Result = string2(Button["LVh3/5"]);
      }
      const obj9 = { text: string2Result, size: "sm", onPress: handleRefresh, disabled: intl2 };
      obj8.children = closure_14(string, obj9);
      items1[3] = closure_14(View, obj8);
      const obj10 = { style: tmp.learnMoreButton, children: null };
      Button = tmp2(5186).Button;
      const obj11 = { text: null, variant: "secondary", size: "sm", onPress: null };
      intl2 = tmp2(1115).intl;
      string = intl2.string;
      stringResult = string(tmp2(1115).t["8O0mlf"]);
      obj11.text = stringResult;
      obj11.onPress = function onPress() {
        const obj = self(4451);
        return obj.openURL(self(2108).getArticleURL(constants.CONNECTION_DETAILS));
      };
      tmp = closure_14(Button, obj11);
      obj10.children = tmp;
      obj8 = closure_14(View, obj10);
      items1[4] = obj8;
      obj4.children = items1;
      closure_15(View, obj4);
    }
    const obj13 = self(5500);
  } else {
    const obj12 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      hitSlop: null,
      onPress: null,
      disabled: null,
      style: null,
      children: null,
    };
    const intl3 = tmp2(1115).intl;
    obj12.accessibilityLabel = intl3.string(tmp2(1115).t.wzzjk9);
    obj12.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
    obj12.onPress = handleRefresh;
    obj12.disabled = intl2;
    const items2 = [tmp.metadataRefreshButton];
    let metadataRefreshButtonDisabled = intl2;
    if (intl2) {
      metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
    }
    items2[1] = metadataRefreshButtonDisabled;
    obj12.style = items2;
    const obj14 = { style: tmp.metadataRefreshIcon, size: tmp2(1177).Icon.Sizes.SMALL, source: null };
    if (self.state.metadataAlreadyRefreshed) {
      let tmp9Result = tmp9(10912);
    } else {
      tmp9Result = tmp9(15248);
    }
    obj14.source = tmp9Result;
    obj12.children = closure_14(tmp2(1177).Icon, obj14);
    const obj15 = { style: tmp.metadataContainer, children: null };
    const obj16 = { style: tmp.metadataItemsContainer, children: redditMetadataItems };
    const items3 = [closure_14(View, obj16), closure_14(tmp2(5339).PressableOpacity, obj12)];
    obj15.children = items3;
    return closure_15(View, obj15);
  }
  const obj2 = account(5624);
};
prototype["renderFriendSyncCheckRow"] = function renderFriendSyncCheckRow() {
  let tmp2 = null;
  if (set.has(obj.get(this.props.account.type).type)) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["+KCMSi"]);
    obj2.value = this.state.friendSync;
    obj2.onValueChange = this.handleFriendSyncChange;
    tmp2 = closure_1_14(RowSwitch, obj2);
  }
  return tmp2;
};
prototype["renderActivityCheckRow"] = function renderActivityCheckRow() {
  value = PlatformsDefault.get(this.props.account.type);
  let tmp3 = null;
  if (set2.has(value.type)) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    const obj3 = { platform: value.name };
    obj2.label = intl.formatToPlainString(util.t["6u6J0q"], obj3);
    obj2.value = this.state.showActivity;
    obj2.onValueChange = this.handleShowActivityChange;
    tmp3 = closure_1_14(RowSwitch, obj2);
  }
  return tmp3;
};
prototype["renderIntegrationsRow"] = function renderIntegrationsRow() {
  const tmp = legacyClassComponentStyles(this.context);
  const account = this.props.account;
  let tmp2 = null;
  if (account.integrations.length > 0) {
    tmp2 = null;
    if (!account.revoked) {
      const obj = { children: null };
      const obj2 = { style: tmp.divider };
      const items = [closure_1_14(View, obj2)];
      const obj3 = { style: { paddingHorizontal: 16, paddingVertical: 8 }, children: null };
      const obj4 = {
        style: tmp.integrationCategoryLabel,
        variant: "eyebrow",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.fOe3fZ);
      const items1 = [closure_1_14(Text_Text.Text, obj4)];
      const integrations = account.integrations;
      items1[1] = integrations.map((integration) => closure_1_14(Integration, { integration }, integration.id));
      obj3.children = items1;
      items[1] = __initData(View, obj3);
      obj.children = items;
      tmp2 = __initData(View, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = legacyClassComponentStyles(this.context);
  const props = this.props;
  const account = props.account;
  value = PlatformsDefault.get(account.type);
  const migrationData = value.migrationData;
  let migrationExperimentEnabled;
  if (migrationData != null) {
    migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile");
  }
  if (migrationExperimentEnabled) {
    const intl = util.intl;
    const obj2 = { platformName: account.name };
    let name = intl.format(_modDef3098.Glhokn, obj2);
  } else {
    name = account.name;
  }
  const obj3 = {
    accessible: true,
    accessibilityLabel: value.name,
    style: tmp.platformIcon,
    size: native2.Icon.Sizes.LARGE,
    source: null,
    disableColor: true,
  };
  const obj4 = AvatarUtils;
  const icon = value.icon;
  obj3.source = obj4.makeSource(shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
  const obj6 = { spacing: 8, direction: "horizontal", align: "center", children: null };
  const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.string(util.t["DT39A+"]);
  obj7.onPress = self.handleDisconnect;
  obj7.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
  const tmp7Result = closure_1_14(native2.Icon, obj3);
  obj7.children = closure_1_14(native2.Icon, { style: tmp.deleteConnectionIcon, source: _modDef7237 });
  obj6.children = closure_1_14(Pressables.PressableOpacity, obj7);
  const obj8 = { style: tmp.deleteConnectionIcon, source: _modDef7237 };
  const result = self.renderIntegrationsRow();
  const result1 = self.renderFriendSyncCheckRow();
  const result2 = self.renderActivityCheckRow();
  const result3 = self.renderMetadataVisibilityCheckRow();
  const obj9 = { style: tmp.container, children: null };
  const obj10 = { style: tmp.connectedAccountItem, children: null };
  const obj11 = { style: tmp.connectedAccountTopContainer, children: null };
  const result4 = self.renderVisibilityCheckRow();
  obj11.children = closure_1_14(TableRow.TableRow, {
    label: name,
    icon: tmp7Result,
    trailing: closure_1_14(Stack_Stack.Stack, obj6),
  });
  const items = [closure_1_14(View, obj11)];
  const obj12 = { style: tmp.connectedAccountContentContainer, children: null };
  const items1 = [self.renderUpsell(), self.renderMetadata(), ,];
  const obj13 = { hasIcons: false, children: null };
  const items2 = [result4, result3, result2, result1];
  obj13.children = items2;
  items1[2] = __initData(TableRowGroup.TableRowGroup, obj13);
  items1[3] = result;
  obj12.children = items1;
  items[1] = __initData(View, obj12);
  obj10.children = items;
  obj9.children = __initData(View, obj10);
  return closure_1_14(View, obj9);
};
ConnectedAccount.contextType = fn(4466).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default ConnectedAccount;
export const readStyles = legacyClassComponentStyles;
