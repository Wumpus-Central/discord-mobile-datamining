// discord_app/modules/user_settings/connections/native/ConnectedAccount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native2 from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import _modDef3010 from "../../../application_account_linking/ApplicationAccountLinking.messages.js";
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
import _modDef6992 from "../../../../../_runtime/metro/06992__.js";
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
  let obj = integration(4560);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(createStyles);
  [tmp5, c1] = _slicedToArray(noop.useState(), 2);
  let obj1 = integration(504);
  const items = [ConnectedAccountsStore];
  const items1 = [integration.id];
  const stateFromStores = obj1.useStateFromStores(
    items,
    () => ConnectedAccountsStore.isJoining(integration.id),
    items1,
  );
  let obj2 = integration(504);
  const items2 = [GuildStore];
  const items3 = [integration.guild.id];
  const tmp7 = null == obj2.useStateFromStores(items2, () => GuildStore.getGuild(integration.guild.id), items3);
  if (!tmp7) {
    let tmp12 = tmp5 === integration.id;
    if (tmp12) {
      obj = {
        style: legacyClassComponentStyles.integrationErrorText,
        variant: "text-sm/medium",
        color: "text-feedback-critical",
        children: null,
      };
      const intl2 = tmp(1114).intl;
      obj.children = intl2.string(tmp(1114).t.fEptJP);
      tmp12 = closure_14(tmp(4556).Text, obj);
    }
    obj = { style: legacyClassComponentStyles.integrationContainer, children: null };
    obj1 = { style: legacyClassComponentStyles.integrationContainerInternal, children: null };
    obj2 = {
      guild: integration.guild,
      size: tmp(5584).GuildIconSizes.SMALL,
      style: legacyClassComponentStyles.integrationGuildIcon,
    };
    const items4 = [closure_14(GuildIconDefault, obj2), ,];
    const obj3 = { style: legacyClassComponentStyles.integrationTextRowContainer, children: null };
    const obj4 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
    const items5 = [closure_14(tmp(4556).Text, obj4)];
    value = PlatformsDefault.get(integration.type);
    let platformUserUrl;
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(integration.account);
      }
    }
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: platformUserUrl };
    items5[1] = closure_14(tmp(4556).Text, obj5);
    obj3.children = items5;
    items4[1] = closure_15(View, obj3);
    items4[2] = tmp7;
    obj1.children = items4;
    const items6 = [closure_15(View, obj1), tmp12];
    obj.children = items6;
    return closure_15(View, obj);
  } else {
    const obj6 = { style: legacyClassComponentStyles.integrationJoinButton, children: null };
    let obj7 = {
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
    const intl = tmp(1114).intl;
    const string = intl.string;
    let RXvQQu = tmp(1114).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj7.text = stringResult;
    obj7 = closure_14(tmp(4975).Button, obj7);
    obj6.children = obj7;
    closure_14(View, obj6);
  }
  const tmp4 = _slicedToArray(noop.useState(), 2);
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
const MetadataFields = fn(5408).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles = { borderRadius: null, marginRight: 4 };
let native = fn(1178);
createStyles.borderRadius = native.getIconSize(fn(1178).Icon.Sizes.LARGE);
createStyles.connectedApplicationIdentityIcon = createStyles;
createStyles.deleteConnectionIcon = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.container = { marginHorizontal: 8, marginVertical: 4 };
let obj1 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.connectedAccountItem = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
native = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  borderTopRightRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
};
createStyles.connectedAccountTopContainer = native;
createStyles.connectedAccountContentContainer = { marginTop: 8, gap: 8 };
let obj2 = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
createStyles.integrationContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
createStyles.integrationContainerInternal = { alignItems: "center", flexDirection: "row" };
createStyles.integrationTextRowContainer = { alignItems: "flex-start", flexDirection: "column", flex: 1 };
createStyles.integrationErrorText = { alignItems: "center", marginTop: 4, marginBottom: 8 };
createStyles.integrationCategoryLabel = { marginVertical: 0 };
createStyles.integrationGuildIcon = { margin: 8 };
createStyles.integrationJoinButton = { alignSelf: "center", marginEnd: 8, marginStart: 8 };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
createStyles.divider = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 1,
  marginVertical: 8,
  marginHorizontal: 16,
};
createStyles.alertInfoBox = { marginTop: 8 };
let merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
createStyles.alertBodyText = { marginTop: 16 };
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
let obj6 = { marginTop: 16 };
createStyles.metadataContainer = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
createStyles.metadataItemsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  paddingRight: 8,
  flexShrink: 1,
};
createStyles.metadataRefreshButton = { alignSelf: "center", marginLeft: "auto" };
createStyles.metadataRefreshButtonDisabled = { opacity: 0.5 };
createStyles.metadataRefreshIcon = { height: 16, width: 16 };
createStyles.metadataBannerContainer = {
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 14,
};
createStyles.newBadge = { marginRight: 4 };
createStyles.rowDivider = { flexBasis: "100%", height: 12 };
createStyles.addDetailsButton = { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 };
createStyles.learnMoreButton = { paddingHorizontal: 16, flexGrow: 0 };
let obj7 = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
createStyles.relinkButton = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round };
createStyles.relinkText = { marginTop: 8 };
createStyles = createStyles.createLegacyClassComponentStyles(createStyles);
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
      const tmp2 = createStyles(applyArgumentsResult.context);
      const account = applyArgumentsResult.props.account;
      let obj = PlatformsDefault;
      value = obj.get(account.type);
      const intl = util.intl;
      obj = { provider: value.name };
      const formatResult = intl.format(util.t.VgqIPj, obj);
      let tmp8;
      if (shouldWarnConnectedAccountTwoWayDefault(account)) {
        obj = { children: null };
        const obj1 = { style: tmp2.alertBodyText, variant: "text-md/medium", children: formatResult };
        const items = [closure_2_14(Text_Text.Text, obj1)];
        const obj2 = { style: tmp2.alertInfoBox, children: null };
        let tmp3Result = InfoBoxDefault;
        const intl2 = util.intl;
        const obj3 = { platformName: value.name };
        obj2.children = intl2.format(util.t.COW3Xn, obj3);
        items[1] = closure_2_14(tmp3Result, obj2);
        obj.children = items;
        tmp8 = __initData(View, obj);
      }
      tmp3Result = AlertActionCreatorsDefault;
      const obj4 = {
        title: null,
        body: null,
        cancelText: null,
        children: null,
        confirmText: null,
        onConfirm: null,
        confirmColor: null,
      };
      const intl3 = util.intl;
      obj4.title = intl3.formatToPlainString(util.t.U5x12f, { name: value.name });
      obj4.body = formatResult;
      const intl4 = util.intl;
      obj4.cancelText = intl4.string(util.t["ETE/oC"]);
      obj4.children = tmp8;
      const intl5 = util.intl;
      obj4.confirmText = intl5.string(util.t.ppppRJ);
      obj4.onConfirm = applyArgumentsResult.handleConfirmDisconnectAccount;
      obj4.confirmColor = common_AlertDefault.Colors.RED;
      tmp3Result.show(obj4);
      const obj5 = { name: value.name };
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
        let obj6 = closure_1(tmp3[13]);
        await obj6.setVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          obj6 = { isVisible: !closure_129_0 };
          closure_130_1.setState(obj6);
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
        let obj6 = closure_1(tmp3[13]);
        await obj6.setMetadataVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          obj6 = { isMetadataVisible: !closure_129_0 };
          closure_130_1.setState(obj6);
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
    let obj = {};
    const merged = Object.assign(self.state);
    obj.isVisible = 1 === account.visibility;
    obj.isMetadataVisible = 1 === account.metadataVisibility;
    ({ showActivity: obj3.showActivity, friendSync: obj3.friendSync } = account);
    if (account.verified) {
      ({ inProgressVisibility, inProgressMetadataVisibility } = self.state);
      if (null != inProgressVisibility) {
        obj.isVisible = 1 === inProgressVisibility;
        obj.inProgressVisibility = null;
        obj = ConnectedAccountsActionCreatorsDefault;
        obj.setVisibility(account.type, account.id, inProgressVisibility);
      }
      if (null != inProgressMetadataVisibility) {
        obj.isMetadataVisible = 1 === inProgressMetadataVisibility;
        obj.inProgressMetadataVisibility = null;
        const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(
          account.type,
          account.id,
          inProgressMetadataVisibility,
        );
      }
    }
    self.setState(obj);
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
  let obj = PlatformsDefault;
  value = obj.get(this.props.account.type);
  let hasMetadata;
  if (value != null) {
    hasMetadata = value.hasMetadata;
  }
  if (true !== hasMetadata) {
    return null;
  } else {
    obj = { label: null, value: null, disabled: null, onValueChange: null };
    ({ isMetadataVisible, isVisible } = self.state);
    const intl = util.intl;
    obj.label = intl.string(util.t.FYKGsL);
    obj.value = isMetadataVisible;
    obj.disabled = !isVisible;
    obj.onValueChange = self.handleMetadataVisibilityChange;
    return closure_1_14(RowSwitch, obj);
  }
};
prototype["renderMetadata"] = function renderMetadata() {
  const self = this;
  let tmp = createStyles(this.context);
  const props = this.props;
  const account = props.account;
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  let stringResult = dependencyMap;
  let obj1 = account(5407);
  const createdAtDate = obj1.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], props.locale);
  const type = account.type;
  if (constants.REDDIT === type) {
    let tmp2Result = tmp2(11575);
    let redditMetadataItems = tmp2Result.generateRedditMetadataItems(metadata);
  } else if (constants.STEAM === type) {
    tmp2Result = tmp2(11575);
    redditMetadataItems = tmp2Result.generateSteamMetadataItems(metadata);
  } else {
    if (constants.BLUESKY !== type) {
      if (constants.TWITTER !== type) {
        if (constants.MASTODON !== type) {
          if (constants.EBAY === type) {
            redditMetadataItems = tmp2(11575).generateEbayMetadataItems(metadata);
            const tmp2Result1 = tmp2(11575);
          } else if (constants.PAYPAL === type) {
            redditMetadataItems = tmp2(11575).generatePaypalMetadataItems(metadata);
            const tmp2Result2 = tmp2(11575);
          } else {
            redditMetadataItems = [];
            if (constants.TIKTOK === type) {
              redditMetadataItems = tmp2(11575).generateTikTokMetadataItems(metadata);
              const tmp2Result3 = tmp2(11575);
            }
          }
        }
      }
    }
    redditMetadataItems = tmp2(11575).generateTwitterMetadataItems(metadata);
    const tmp2Result4 = tmp2(11575);
  }
  if (null !== createdAtDate) {
    let obj = { variant: "text-xs/normal", color: "interactive-text-default", children: null };
    const intl = tmp2(1114).intl;
    obj = { date: createdAtDate };
    obj.children = intl.format(tmp2(1114).t["9rfonh"], obj);
    redditMetadataItems.push(closure_14(tmp2(4556).Text, obj, MetadataFields.CREATED_AT));
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
    let obj12 = self(5283);
    value = obj12.get(account.type);
    let hasMetadata;
    if (value != null) {
      hasMetadata = value.hasMetadata;
    }
    if (true !== hasMetadata) {
      return null;
    } else {
      obj1 = { style: null, children: null };
      const items = [,];
      ({ metadataContainer: arr4[0], metadataBannerContainer: arr4[1] } = tmp);
      obj1.style = items;
      const obj2 = { text: null, style: null };
      const intl4 = tmp2(1114).intl;
      obj2.text = intl4.string(tmp2(1114).t.y2b7CA);
      obj2.style = tmp.newBadge;
      const items1 = [closure_14(tmp2(1178).TextBadge, obj2), , , ,];
      const obj3 = { variant: "text-xs/normal", children: null };
      const intl5 = tmp2(1114).intl;
      obj3.children = intl5.string(tmp2(1114).t.eH16Gn);
      items1[1] = closure_14(tmp2(4556).Text, obj3);
      const obj4 = { style: tmp.rowDivider };
      items1[2] = closure_14(View, obj4);
      let obj5 = { style: tmp.addDetailsButton, children: null };
      let string = tmp2(4975).Button;
      const intl6 = tmp2(1114).intl;
      const string2 = intl6.string;
      let Button = tmp2(1114).t;
      if (self.state.metadataAlreadyRefreshed) {
        let string2Result = string2(Button.i4jeWR);
      } else {
        string2Result = string2(Button["LVh3/5"]);
      }
      const obj6 = { text: string2Result, size: "sm", onPress: handleRefresh, disabled: intl2 };
      obj5.children = closure_14(string, obj6);
      items1[3] = closure_14(View, obj5);
      const obj7 = { style: tmp.learnMoreButton, children: null };
      Button = tmp2(4975).Button;
      const obj8 = { text: null, variant: "secondary", size: "sm", onPress: null };
      intl2 = tmp2(1114).intl;
      string = intl2.string;
      stringResult = string(tmp2(1114).t["8O0mlf"]);
      obj8.text = stringResult;
      obj8.onPress = function onPress() {
        const obj = self(4255);
        return obj.openURL(self(2024).getArticleURL(constants.CONNECTION_DETAILS));
      };
      tmp = closure_14(Button, obj8);
      obj7.children = tmp;
      obj5 = closure_14(View, obj7);
      items1[4] = obj5;
      obj1.children = items1;
      closure_15(View, obj1);
    }
  } else {
    const obj9 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      hitSlop: null,
      onPress: null,
      disabled: null,
      style: null,
      children: null,
    };
    const intl3 = tmp2(1114).intl;
    obj9.accessibilityLabel = intl3.string(tmp2(1114).t.wzzjk9);
    obj9.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
    obj9.onPress = handleRefresh;
    obj9.disabled = intl2;
    const items2 = [tmp.metadataRefreshButton];
    let metadataRefreshButtonDisabled = intl2;
    if (intl2) {
      metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
    }
    items2[1] = metadataRefreshButtonDisabled;
    obj9.style = items2;
    const obj10 = { style: tmp.metadataRefreshIcon, size: tmp2(1178).Icon.Sizes.SMALL, source: null };
    if (self.state.metadataAlreadyRefreshed) {
      let tmp9Result = tmp9(10652);
    } else {
      tmp9Result = tmp9(14970);
    }
    obj10.source = tmp9Result;
    obj9.children = closure_14(tmp2(1178).Icon, obj10);
    const obj11 = { style: tmp.metadataContainer, children: null };
    obj12 = { style: tmp.metadataItemsContainer, children: redditMetadataItems };
    const items3 = [closure_14(View, obj12), closure_14(tmp2(5123).PressableOpacity, obj9)];
    obj11.children = items3;
    return closure_15(View, obj11);
  }
};
prototype["renderFriendSyncCheckRow"] = function renderFriendSyncCheckRow() {
  let obj = PlatformsDefault;
  let tmp2 = null;
  if (set.has(obj.get(this.props.account.type).type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["+KCMSi"]);
    obj.value = this.state.friendSync;
    obj.onValueChange = this.handleFriendSyncChange;
    tmp2 = closure_1_14(RowSwitch, obj);
  }
  return tmp2;
};
prototype["renderActivityCheckRow"] = function renderActivityCheckRow() {
  let obj = PlatformsDefault;
  value = obj.get(this.props.account.type);
  let tmp3 = null;
  if (set2.has(value.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj = { platform: value.name };
    obj.label = intl.formatToPlainString(util.t["6u6J0q"], obj);
    obj.value = this.state.showActivity;
    obj.onValueChange = this.handleShowActivityChange;
    tmp3 = closure_1_14(RowSwitch, obj);
  }
  return tmp3;
};
prototype["renderIntegrationsRow"] = function renderIntegrationsRow() {
  const tmp = createStyles(this.context);
  const account = this.props.account;
  let tmp2 = null;
  if (account.integrations.length > 0) {
    tmp2 = null;
    if (!account.revoked) {
      let obj = { children: null };
      obj = { style: tmp.divider };
      const items = [closure_1_14(View, obj)];
      obj = { style: { paddingHorizontal: 16, paddingVertical: 8 }, children: null };
      const obj1 = {
        style: tmp.integrationCategoryLabel,
        variant: "eyebrow",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj1.children = intl.string(util.t.fOe3fZ);
      const items1 = [closure_1_14(Text_Text.Text, obj1)];
      const integrations = account.integrations;
      items1[1] = integrations.map((integration) => closure_1_14(Integration, { integration }, integration.id));
      obj.children = items1;
      items[1] = __initData(View, obj);
      obj.children = items;
      tmp2 = __initData(View, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = createStyles(this.context);
  const props = this.props;
  const account = props.account;
  let obj = PlatformsDefault;
  value = obj.get(account.type);
  const migrationData = value.migrationData;
  let migrationExperimentEnabled;
  if (migrationData != null) {
    migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile");
  }
  if (migrationExperimentEnabled) {
    const intl = util.intl;
    obj = { platformName: account.name };
    let name = intl.format(_modDef3010.Glhokn, obj);
  } else {
    name = account.name;
  }
  obj = {
    accessible: true,
    accessibilityLabel: value.name,
    style: tmp.platformIcon,
    size: native2.Icon.Sizes.LARGE,
    source: null,
    disableColor: true,
  };
  let obj3 = AvatarUtils;
  let obj4 = shared;
  const icon = value.icon;
  obj.source = obj3.makeSource(obj4.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
  closure_1_14(native2.Icon, obj);
  const obj1 = { spacing: 8, direction: "horizontal", align: "center", children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.string(util.t["DT39A+"]);
  obj2.onPress = self.handleDisconnect;
  obj2.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
  obj3 = { style: tmp.deleteConnectionIcon, source: _modDef6992 };
  obj2.children = closure_1_14(native2.Icon, obj3);
  obj1.children = closure_1_14(Pressables.PressableOpacity, obj2);
  const tmp7Result = closure_1_14(Stack_Stack.Stack, obj1);
  const result = self.renderIntegrationsRow();
  const result1 = self.renderFriendSyncCheckRow();
  const result2 = self.renderActivityCheckRow();
  const result3 = self.renderMetadataVisibilityCheckRow();
  obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.connectedAccountItem, children: null };
  const obj6 = { style: tmp.connectedAccountTopContainer, children: null };
  const result4 = self.renderVisibilityCheckRow();
  obj6.children = closure_1_14(TableRow.TableRow, { label: name, icon: tmp7Result, trailing: tmp7Result });
  const items = [closure_1_14(View, obj6)];
  const obj7 = { style: tmp.connectedAccountContentContainer, children: null };
  const items1 = [self.renderUpsell(), self.renderMetadata(), ,];
  const obj8 = { hasIcons: false, children: null };
  const items2 = [result4, result3, result2, result1];
  obj8.children = items2;
  items1[2] = __initData(TableRowGroup.TableRowGroup, obj8);
  items1[3] = result;
  obj7.children = items1;
  items[1] = __initData(View, obj7);
  obj5.children = items;
  obj4.children = __initData(View, obj5);
  return closure_1_14(View, obj4);
};
ConnectedAccount.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default ConnectedAccount;
export const readStyles = createStyles;
