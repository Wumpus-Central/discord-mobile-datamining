// discord_app/modules/user_settings/connections/native/ConnectedAccount.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button2 from "../../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../../design/shared.tsx";
import getAvatarURL from "../../../../utils/AvatarUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import getPlatformUserUrlDefault from "../../../../lib/Platforms.tsx";
import callbackDefault from "../../../../actions/ConnectedAccountsActionCreators.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import XboxTwoWayLinkUpsell from "two_way_link/xbox/XboxTwoWayLinkUpsell.tsx";
import PlayStationTwoWayLinkUpsell from "two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/ConnectedAccountsStore.tsx";
import closure_8 from "../../../../stores/GuildStore.tsx";
import ME from "../../../../Constants.tsx";
import { MetadataFields } from "../../../connections/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import Button from "../../../../design/void/native.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

require = arg1;
function Integration(integration) {
  integration = integration.integration;
  importDefault = undefined;
  let obj = integration(4478);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(createCacheKey);
  [tmp5, c1] = callback2(importAllResult.useState(), 2);
  obj1 = integration(589);
  const items = [closure_7];
  const items1 = [integration.id];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_7.isJoining(integration.id), items1);
  let obj2 = integration(589);
  const items2 = [closure_8];
  const items3 = [integration.guild.id];
  const tmp7 = null == obj2.useStateFromStores(items2, () => closure_1_8.getGuild(integration.guild.id), items3);
  if (!tmp7) {
    let tmp12 = tmp5 === integration.id;
    if (tmp12) {
      obj = { style: null, variant: "text-sm/medium", color: "text-feedback-critical", children: null };
      obj[0] = legacyClassComponentStyles.integrationErrorText;
      const intl2 = tmp(1236).intl;
      obj[3] = intl2.string(tmp(1236).t.fEptJP);
      tmp12 = callback3(tmp(4474).Text, obj);
    }
    obj = { style: null, children: null };
    obj[0] = legacyClassComponentStyles.integrationContainer;
    obj1 = { style: null, children: null };
    obj1[0] = legacyClassComponentStyles.integrationContainerInternal;
    obj2 = { guild: null, size: null, style: null };
    obj2[0] = integration.guild;
    obj2[1] = tmp(6004).GuildIconSizes.SMALL;
    obj2[2] = legacyClassComponentStyles.integrationGuildIcon;
    const items4 = [callback3(GuildIconSizesDefault, obj2), ,];
    const obj3 = { style: null, children: null };
    obj3[0] = legacyClassComponentStyles.integrationTextRowContainer;
    const obj4 = { lineClamp: 1, variant: "text-sm/medium", children: null };
    obj4[2] = integration.guild.name;
    const items5 = [callback3(tmp(4474).Text, obj4)];
    const tmp16 = callback3;
    const tmp18 = GuildIconSizesDefault;
    const value = getPlatformUserUrlDefault.get(integration.type);
    let platformUserUrl;
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(integration.account);
      }
    }
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: null };
    obj5[3] = platformUserUrl;
    items5[1] = tmp16(tmp(4474).Text, obj5);
    obj3[1] = items5;
    items4[1] = closure_15(View, obj3);
    items4[2] = tmp7;
    obj1[1] = items4;
    const items6 = [closure_15(View, obj1), tmp12];
    obj[1] = items6;
    return closure_15(View, obj);
  } else {
    const obj6 = { style: null, children: null };
    obj6[0] = legacyClassComponentStyles.integrationJoinButton;
    let obj7 = { size: "sm", variant: "secondary", onPress: null, disabled: null, text: null };
    obj7[2] = function onPress() {
      _undefined(closure_1_2[13]).joinServer(integration.id, () => {
        callback(id.id);
      });
    };
    obj7[3] = stateFromStores;
    const intl = tmp(1236).intl;
    const string = intl.string;
    let RXvQQu = tmp(1236).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj7[4] = stringResult;
    obj7 = tmp8(tmp(4928).Button, obj7);
    obj6[1] = obj7;
    callback3(View, obj6);
    const tmp9 = View;
  }
}
function RowSwitch(label) {
  const merged = Object.assign(label, Object.create(null));
  const merged1 = Object.assign(merged);
  return callback3(TableSwitchRow.TableSwitchRow, { label: label.label });
}
let c5 = importAllResult;
({
  FRIEND_SYNC_PLATFORM_TYPES: c9,
  ACTIVITY_PLATFORM_TYPES: c10,
  PlatformTypes: unpackModuleId,
  HelpdeskArticles: closure_12,
  Fonts,
} = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = {
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
createCacheKey = { borderRadius: null, marginRight: 4 };
createCacheKey[0] = Button.getIconSize(require("Button").Icon.Sizes.LARGE);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 10, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { marginHorizontal: 8, marginVertical: 4 };
let obj1 = { marginRight: 10, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[4] = {
  borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
Button = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  borderTopRightRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
};
createCacheKey[5] = Button;
createCacheKey[6] = { marginTop: 8, gap: 8 };
let obj2 = {
  borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
createCacheKey[7] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
createCacheKey[8] = { alignItems: "center", flexDirection: "row" };
createCacheKey[9] = { alignItems: "flex-start", flexDirection: "column", flex: 1 };
createCacheKey[10] = { alignItems: "center", marginTop: 4, marginBottom: 8 };
createCacheKey[11] = { marginVertical: 0 };
createCacheKey[12] = { margin: 8 };
createCacheKey[13] = { alignSelf: "center", marginEnd: 8, marginStart: 8 };
let obj4 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
  marginTop: 12,
  paddingVertical: 4,
  borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  flexDirection: "column",
  alignItems: "center",
};
createCacheKey[14] = {
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  height: 1,
  marginVertical: 8,
  marginHorizontal: 16,
};
createCacheKey[15] = { marginTop: 8 };
let obj5 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
let obj6 = { marginTop: 16 };
let merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 16));
createCacheKey[16] = obj6;
createCacheKey[17] = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
createCacheKey[18] = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "flex-start",
  paddingRight: 8,
  flexShrink: 1,
};
createCacheKey[19] = { alignSelf: "center", marginLeft: "auto" };
createCacheKey[20] = { opacity: 0.5 };
createCacheKey[21] = { height: 16, width: 16 };
createCacheKey[22] = {
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 14,
};
createCacheKey[23] = { marginRight: 4 };
createCacheKey[24] = { flexBasis: "100%", height: 12 };
createCacheKey[25] = { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 };
createCacheKey[26] = { paddingHorizontal: 16, flexGrow: 0 };
let obj7 = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.xs,
  padding: 8,
  marginLeft: 16,
  marginRight: 16,
};
createCacheKey[27] = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round };
createCacheKey[28] = { marginTop: 8 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
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
      const tmp2 = closure_1_16(lib.context);
      const account = lib.props.account;
      let obj = applyArgumentsResult(closure_1_2[19]);
      const value = obj.get(account.type);
      const intl = lib(closure_1_2[16]).intl;
      obj = { provider: value.name };
      const formatResult = intl.format(lib(closure_1_2[16]).t.VgqIPj, obj);
      let tmp8;
      if (applyArgumentsResult(closure_1_2[22])(account)) {
        obj = { children: null };
        obj1 = { style: null, variant: "text-md/medium", children: null };
        obj1[0] = tmp2.alertBodyText;
        obj1[2] = formatResult;
        const items = [closure_1_14(tmp6(tmp4[17]).Text, obj1)];
        const obj2 = { style: null, children: null };
        obj2[0] = tmp2.alertInfoBox;
        let tmp3Result = tmp3(tmp4[23]);
        const intl2 = tmp6(tmp4[16]).intl;
        const obj3 = { platformName: null };
        obj3[0] = value.name;
        obj2[1] = intl2.format(tmp6(tmp4[16]).t.COW3Xn, obj3);
        items[1] = closure_1_14(tmp3Result, obj2);
        obj[0] = items;
        tmp8 = closure_1_15(closure_1_6, obj);
      }
      tmp3Result = tmp3(tmp4[24]);
      const obj4 = {
        title: null,
        body: null,
        cancelText: null,
        children: null,
        confirmText: null,
        onConfirm: null,
        confirmColor: null,
      };
      const intl3 = tmp6(tmp4[16]).intl;
      obj4[0] = intl3.formatToPlainString(lib(closure_1_2[16]).t.U5x12f, { name: value.name });
      obj4[1] = formatResult;
      const intl4 = tmp6(tmp4[16]).intl;
      obj4[2] = intl4.string(lib(closure_1_2[16]).t["ETE/oC"]);
      obj4[3] = tmp8;
      const intl5 = tmp6(tmp4[16]).intl;
      obj4[4] = intl5.string(lib(closure_1_2[16]).t.ppppRJ);
      obj4[5] = lib.handleConfirmDisconnectAccount;
      obj4[6] = applyArgumentsResult(closure_1_2[25]).Colors.RED;
      tmp3Result.show(obj4);
    };
    applyArgumentsResult.handleConfirmDisconnectAccount = function handleConfirmDisconnectAccount() {
      const account = lib.props.account;
      applyArgumentsResult(closure_1_2[13]).disconnect(account.type, account.id);
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (function* (arg0) {
        closure_2 = tmp3;
        const account = closure_1_1.props.account;
        let num5 = 0;
        if (closure_0) {
          num5 = 1;
        }
        if (closure_0) {
          if (!account.verified) {
            obj1 = { inProgressVisibility: null };
            obj1[0] = num5;
            closure_1_1.setState(obj1);
            const obj2 = { platformType: null };
            obj2[0] = account.type;
            closure_1_1(closure_1_2[26])(obj2);
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = undefined;
            return obj3;
          }
        }
        const obj4 = { isVisible: null };
        obj4[0] = closure_0;
        closure_1_1.setState(obj4);
        c3 = 1;
        let obj6 = closure_1_1(closure_1_2[13]);
        yield obj6.setVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          obj6 = { isVisible: null };
          obj6[0] = !closure_0;
          state.setState(obj6);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    applyArgumentsResult.handleVisibilityChange = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (function* (arg0) {
        closure_2 = tmp3;
        const account = closure_1_1.props.account;
        let num5 = 0;
        if (closure_0) {
          num5 = 1;
        }
        if (closure_0) {
          if (!account.verified) {
            obj1 = { inProgressMetadataVisibility: null };
            obj1[0] = num5;
            closure_1_1.setState(obj1);
            const obj2 = { platformType: null };
            obj2[0] = account.type;
            closure_1_1(closure_1_2[26])(obj2);
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = undefined;
            return obj3;
          }
        }
        const obj4 = { isMetadataVisible: null };
        obj4[0] = closure_0;
        closure_1_1.setState(obj4);
        c3 = 1;
        let obj6 = closure_1_1(closure_1_2[13]);
        yield obj6.setMetadataVisibility(account.type, account.id, num5);
        if (1 === tmp7) {
          c3 = 0;
          obj6 = { isMetadataVisible: null };
          obj6[0] = !closure_0;
          state.setState(obj6);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    applyArgumentsResult.handleMetadataVisibilityChange = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (function* (arg0) {
        closure_2 = tmp3;
        const account = closure_1_1.props.account;
        obj1 = { friendSync: null };
        obj1[0] = closure_0;
        closure_1_1.setState(obj1);
        c3 = 1;
        yield closure_1_1(closure_1_2[13]).setFriendSync(account.type, account.id, closure_0);
        if (1 === tmp7) {
          c3 = 0;
          const obj3 = { friendSync: null };
          obj3[0] = !closure_0;
          state.setState(obj3);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    applyArgumentsResult.handleFriendSyncChange = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (function* (arg0) {
        closure_2 = tmp3;
        const account = closure_1_1.props.account;
        obj1 = { showActivity: null };
        obj1[0] = closure_0;
        closure_1_1.setState(obj1);
        c3 = 1;
        yield closure_1_1(closure_1_2[13]).setShowActivity(account.type, account.id, closure_0);
        if (1 === tmp7) {
          c3 = 0;
          const obj3 = { showActivity: null };
          obj3[0] = !closure_0;
          state.setState(obj3);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    applyArgumentsResult.handleShowActivityChange = function () {
      const self = this;
      const apply = closure_0.apply;
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
        obj = callbackDefault;
        obj.setVisibility(account.type, account.id, inProgressVisibility);
      }
      if (null != inProgressMetadataVisibility) {
        obj.isMetadataVisible = 1 === inProgressMetadataVisibility;
        obj.inProgressMetadataVisibility = null;
        const result = callbackDefault.setMetadataVisibility(account.type, account.id, inProgressMetadataVisibility);
        const obj2 = callbackDefault;
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
    let tmp2 = callback3(XboxTwoWayLinkUpsell.XboxTwoWayLinkUpsell, {});
  } else {
    tmp2 = null;
    if (account.type === tmp.PLAYSTATION) {
      tmp2 = callback3(PlayStationTwoWayLinkUpsell.PlayStationTwoWayLinkUpsell, {});
    }
  }
};
prototype["renderVisibilityCheckRow"] = function renderVisibilityCheckRow() {
  const obj = { label: null, value: null, onValueChange: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.f7yOAX);
  obj[1] = this.state.isVisible;
  obj[2] = this.handleVisibilityChange;
  return callback3(RowSwitch, obj);
};
prototype["renderMetadataVisibilityCheckRow"] = function renderMetadataVisibilityCheckRow() {
  const self = this;
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(this.props.account.type);
  let hasMetadata;
  if (value != null) {
    hasMetadata = value.hasMetadata;
  }
  if (true !== hasMetadata) {
    return null;
  } else {
    obj = { label: null, value: null, disabled: null, onValueChange: null };
    ({ isMetadataVisible, isVisible } = self.state);
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.FYKGsL);
    obj[1] = isMetadataVisible;
    obj[2] = !isVisible;
    obj[3] = self.handleMetadataVisibilityChange;
    return callback3(RowSwitch, obj);
  }
};
prototype["renderMetadata"] = function renderMetadata() {
  let self = this;
  self = this;
  let tmp = createCacheKey(this.context);
  const props = this.props;
  const account = props.account;
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  let stringResult = dependencyMap;
  obj1 = account(5351);
  const createdAtDate = obj1.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], props.locale);
  const type = account.type;
  if (constants.REDDIT === type) {
    let tmp2Result = tmp2(11174);
    let redditMetadataItems = tmp2Result.generateRedditMetadataItems(metadata);
  } else if (tmp6.STEAM === type) {
    tmp2Result = tmp2(11174);
    redditMetadataItems = tmp2Result.generateSteamMetadataItems(metadata);
  } else {
    if (tmp6.BLUESKY !== type) {
      if (tmp6.TWITTER !== type) {
        if (tmp6.MASTODON !== type) {
          if (tmp6.EBAY === type) {
            redditMetadataItems = tmp2(11174).generateEbayMetadataItems(metadata);
            const tmp2Result1 = tmp2(11174);
          } else if (tmp6.PAYPAL === type) {
            redditMetadataItems = tmp2(11174).generatePaypalMetadataItems(metadata);
            const tmp2Result2 = tmp2(11174);
          } else {
            redditMetadataItems = [];
            if (tmp6.TIKTOK === type) {
              redditMetadataItems = tmp2(11174).generateTikTokMetadataItems(metadata);
              const tmp2Result3 = tmp2(11174);
            }
          }
        }
      }
    }
    redditMetadataItems = tmp2(11174).generateTwitterMetadataItems(metadata);
    const tmp2Result4 = tmp2(11174);
  }
  if (null !== createdAtDate) {
    let obj = { variant: "text-xs/normal", color: "interactive-text-default", children: null };
    const intl = tmp2(1236).intl;
    obj = { date: null };
    obj[0] = createdAtDate;
    obj[2] = intl.format(tmp2(1236).t["9rfonh"], obj);
    redditMetadataItems.push(callback3(tmp2(4474).Text, obj, MetadataFields.CREATED_AT));
  }
  let intl2 = self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed;
  function handleRefresh() {
    self.setState({ metadataRefreshing: true });
    const obj = self(closure_1_2[13]);
    self(closure_1_2[13])
      .refresh(account.type, account.id)
      .finally(() => {
        const timerId = setTimeout(() => {
          state.setState({ metadataRefreshing: false, metadataAlreadyRefreshed: true });
        }, 2000);
      });
  }
  if (0 === redditMetadataItems.length) {
    let obj12 = self(5227);
    const value = obj12.get(account.type);
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
      obj1[0] = items;
      const obj2 = { text: null, style: null };
      const intl4 = tmp2(1236).intl;
      obj2[0] = intl4.string(tmp2(1236).t.y2b7CA);
      obj2[1] = tmp.newBadge;
      const items1 = [callback3(tmp2(1297).TextBadge, obj2), , , ,];
      const obj3 = { variant: "text-xs/normal", children: null };
      const intl5 = tmp2(1236).intl;
      obj3[1] = intl5.string(tmp2(1236).t.eH16Gn);
      items1[1] = callback3(tmp2(4474).Text, obj3);
      const obj4 = { style: null };
      obj4[0] = tmp.rowDivider;
      items1[2] = callback3(View, obj4);
      let obj5 = { style: null, children: null };
      obj5[0] = tmp.addDetailsButton;
      let string = tmp2(4928).Button;
      const intl6 = tmp2(1236).intl;
      const string2 = intl6.string;
      let Button = tmp2(1236).t;
      if (self.state.metadataAlreadyRefreshed) {
        let string2Result = string2(Button.i4jeWR);
      } else {
        string2Result = string2(Button["LVh3/5"]);
      }
      const obj6 = { text: null, size: "sm", onPress: null, disabled: null };
      obj6[0] = string2Result;
      obj6[2] = handleRefresh;
      obj6[3] = intl2;
      obj5[1] = callback3(string, obj6);
      items1[3] = callback3(View, obj5);
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.learnMoreButton;
      Button = tmp2(4928).Button;
      const obj8 = { text: null, variant: "secondary", size: "sm", onPress: null };
      intl2 = tmp2(1236).intl;
      string = intl2.string;
      stringResult = string(tmp2(1236).t["8O0mlf"]);
      obj8[0] = stringResult;
      obj8[3] = function onPress() {
        const obj = self(4190);
        return obj.openURL(self(1995).getArticleURL(constants.CONNECTION_DETAILS));
      };
      tmp = tmp23(Button, obj8);
      obj7[1] = tmp;
      obj5 = tmp23(tmp22, obj7);
      items1[4] = obj5;
      obj1[1] = items1;
      callback4(View, obj1);
      const tmp21 = callback4;
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
    const intl3 = tmp2(1236).intl;
    obj9[1] = intl3.string(tmp2(1236).t.wzzjk9);
    obj9[2] = { top: 8, right: 8, bottom: 8, left: 8 };
    obj9[3] = handleRefresh;
    obj9[4] = intl2;
    const items2 = [tmp.metadataRefreshButton];
    let metadataRefreshButtonDisabled = intl2;
    if (intl2) {
      metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
    }
    items2[1] = metadataRefreshButtonDisabled;
    obj9[5] = items2;
    const obj10 = { style: null, size: null, source: null };
    obj10[0] = tmp.metadataRefreshIcon;
    obj10[1] = tmp2(1297).Icon.Sizes.SMALL;
    if (self.state.metadataAlreadyRefreshed) {
      let tmp9Result = tmp9(10445);
    } else {
      tmp9Result = tmp9(14576);
    }
    obj10[2] = tmp9Result;
    obj9[6] = callback3(tmp2(1297).Icon, obj10);
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.metadataContainer;
    obj12 = { style: null, children: null };
    obj12[0] = tmp.metadataItemsContainer;
    obj12[1] = redditMetadataItems;
    const items3 = [callback3(View, obj12), callback3(tmp2(5068).PressableOpacity, obj9)];
    obj11[1] = items3;
    return callback4(View, obj11);
  }
};
prototype["renderFriendSyncCheckRow"] = function renderFriendSyncCheckRow() {
  let obj = getPlatformUserUrlDefault;
  let tmp2 = null;
  if (set.has(obj.get(this.props.account.type).type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["+KCMSi"]);
    obj[1] = this.state.friendSync;
    obj[2] = this.handleFriendSyncChange;
    tmp2 = callback3(RowSwitch, obj);
  }
  return tmp2;
};
prototype["renderActivityCheckRow"] = function renderActivityCheckRow() {
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(this.props.account.type);
  let tmp3 = null;
  if (set2.has(value.type)) {
    obj = { label: null, value: null, onValueChange: null };
    const intl = getSystemLocale.intl;
    obj = { platform: null };
    obj[0] = value.name;
    obj[0] = intl.formatToPlainString(getSystemLocale.t["6u6J0q"], obj);
    obj[1] = this.state.showActivity;
    obj[2] = this.handleShowActivityChange;
    tmp3 = callback3(RowSwitch, obj);
  }
  return tmp3;
};
prototype["renderIntegrationsRow"] = function renderIntegrationsRow() {
  const tmp = createCacheKey(this.context);
  const account = this.props.account;
  let tmp2 = null;
  if (account.integrations.length > 0) {
    tmp2 = null;
    if (!account.revoked) {
      let obj = { children: null };
      obj = { style: null };
      obj[0] = tmp.divider;
      const items = [callback3(View, obj)];
      obj = { style: null, children: null };
      obj[0] = { paddingHorizontal: 16, paddingVertical: 8 };
      obj1 = { style: null, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
      obj1[0] = tmp.integrationCategoryLabel;
      const intl = getSystemLocale.intl;
      obj1[3] = intl.string(getSystemLocale.t.fOe3fZ);
      const items1 = [callback3(Text.Text, obj1)];
      const integrations = account.integrations;
      items1[1] = integrations.map((id) => callback(closure_17, { integration: id }, id.id));
      obj[1] = items1;
      items[1] = callback4(View, obj);
      obj[0] = items;
      tmp2 = callback4(View, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = createCacheKey(this.context);
  const props = this.props;
  const account = props.account;
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(account.type);
  const migrationData = value.migrationData;
  let migrationExperimentEnabled;
  if (migrationData != null) {
    migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile");
  }
  if (migrationExperimentEnabled) {
    const intl = getSystemLocale.intl;
    obj = { platformName: null };
    obj[0] = account.name;
    let name = intl.format(tmp2(2983).Glhokn, obj);
  } else {
    name = account.name;
  }
  obj = {
    accessible: true,
    accessibilityLabel: value.name,
    style: tmp.platformIcon,
    size: Button2.Icon.Sizes.LARGE,
    source: null,
    disableColor: true,
  };
  let obj3 = getAvatarURL;
  let obj4 = AccessibilityAnnouncer;
  const icon = value.icon;
  obj[4] = obj3.makeSource(obj4.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
  let tmp7Result = tmp7(Button2.Icon, obj);
  obj1 = { spacing: 8, direction: "horizontal", align: "center", children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl2 = tmp8(1236).intl;
  obj2[1] = intl2.string(getSystemLocale.t["DT39A+"]);
  obj2[2] = self.handleDisconnect;
  obj2[3] = { top: 5, left: 5, bottom: 5, right: 5 };
  obj3 = { style: tmp.deleteConnectionIcon, source: tmp2(7764) };
  obj2[4] = closure_14(Button2.Icon, obj3);
  obj1[3] = closure_14(PressableBase.PressableOpacity, obj2);
  tmp7Result = tmp7(tmp8(4926).Stack, obj1);
  const result = self.renderIntegrationsRow();
  const result1 = self.renderFriendSyncCheckRow();
  const result2 = self.renderActivityCheckRow();
  const result3 = self.renderMetadataVisibilityCheckRow();
  obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.connectedAccountItem, children: null };
  const obj6 = { style: tmp.connectedAccountTopContainer, children: null };
  const result4 = self.renderVisibilityCheckRow();
  obj6[1] = closure_14(TableRowInner.TableRow, { label: name, icon: tmp7Result, trailing: tmp7Result });
  const items = [closure_14(View, obj6)];
  const obj7 = { style: tmp.connectedAccountContentContainer, children: null };
  const items1 = [self.renderUpsell(), self.renderMetadata(), ,];
  const items2 = [result4, result3, result2, result1];
  items1[2] = callback4(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: items2 });
  items1[3] = result;
  obj7[1] = items1;
  items[1] = callback4(View, obj7);
  obj5[1] = items;
  obj4[1] = callback4(View, obj5);
  return closure_14(View, obj4);
};
ConnectedAccount.contextType = require("ManaContext").ThemeContext;
let obj8 = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round };
let result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default ConnectedAccount;
export const readStyles = createCacheKey;
