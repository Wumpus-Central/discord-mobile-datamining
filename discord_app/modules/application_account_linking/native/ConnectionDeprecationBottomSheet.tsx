// === Module 17419: ConnectionDeprecationBottomSheet ===

// Module 17419 (ConnectionDeprecationBottomSheet)
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import themes from "themes" /* 4465 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import Icon from "Icon" /* 5189 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 7412 */;
import GameIcon from "GameIcon" /* 7419 */;
import AccountLinkManager from "AccountLinkManager" /* 17420 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;

const require = globalThis.__r;
const IconDefault = Icon;
const GameIconDefault = GameIcon;

require = fn;
function ConnectionIcon(arg0) {
  ({ platform, theme } = arg0);
  const tmp = closure_10();
  const isThemeDarkResult = themes.isThemeDark(theme);
  const icon = platform.icon;
  const obj3 = { style: tmp.iconContainer, children: null };
  const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  const obj4 = { size: null, source: null, disableColor: true, style: null };
  obj4.size = Icon.IconSizes.CUSTOM;
  obj4.source = source;
  obj4.style = tmp.connectionIcon;
  obj3.children = React6(IconDefault, obj4);
  return React6(View, obj3);
}
function ApplicationIcon(application) {
  application = application.application;
  const obj = { style: closure_10().iconContainer, children: null };
  let tmpResult = null;
  if (null != application) {
    const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
    tmpResult = React6(GameIconDefault, obj2);
  }
  obj.children = tmpResult;
  return React6(View, obj);
}
const View = fn(17).View;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, content: { paddingHorizontal: nativeDefault.space.PX_16 }, text: { textAlign: "center" }, connectionIcon: { height: 48, width: 48 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let onSuccess;
  const tmp = closure_10();
  const theme = require("native").useThemeContext().theme;
  let obj = require("native");
  const items = [ConnectedAccountsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.find((type) => closure_1_0.includes(type.type));
    let type;
    if (found != null) {
      type = found.type;
    }
    return type;
  });
  value = null;
  if (null != stateFromStores) {
    value = markAsDismissed(tmp3[11]).get(stateFromStores);
    const tmp4Result = markAsDismissed(tmp3[11]);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  let obj2 = require("initialize");
  const items1 = [onSuccess];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ApplicationStore.getApplication(replacedBy));
  startAuthorization = markAsDismissed(tmp3[12])(stateFromStores1).startAuthorization;
  const tmp2Result = require("initialize");
  analyticsLocations = markAsDismissed(replacedBy[13])(markAsDismissed(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  onSuccess = startAuthorization.useCallback(() => {
    const result = AccountLinkManager.claimIncentivizedAccountLinkingReward({
      applicationId: replacedBy,
      onSuccess() {
        markAsDismissed(paths[16]).openLazy(closure_1_0(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    });
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  if (null != value) {
    if (null != stateFromStores1) {
      const obj3 = {
        startExpanded: true,
        contentStyles: tmp.content,
        header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null }),
        onDismiss() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            },
        children: null
      };
      const obj4 = { spacing: 24, style: null, children: null };
      const obj5 = { paddingBottom: markAsDismissed(replacedBy[9])().bottom };
      obj4.style = obj5;
      const obj6 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const obj7 = { theme, platform: value };
      const items4 = [closure_8(ConnectionIcon, obj7), , ];
      const obj8 = { theme };
      items4[1] = closure_8(require("RobloxConnectionCoachmark").UnionIcon, obj8);
      const obj9 = { application: stateFromStores1 };
      items4[2] = closure_8(ApplicationIcon, obj9);
      obj6.children = items4;
      const items5 = [closure_9(require("Stack/Stack").Stack, obj6), , ];
      const obj10 = { justify: "center", children: null };
      const obj11 = { variant: "heading-xl/bold", style: tmp.text, children: null };
      const intl = require("util").intl;
      obj11.children = intl.string(markAsDismissed(tmp3[25]).vycLU2);
      const items6 = [closure_8(require("Text/Text").Text, obj11), ];
      const obj12 = { variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = require("util").intl;
      const obj13 = {
        connectionName: value.name,
        orbCount: 200,
        orbsIconHook() {
              return closure_1_8(require("OrbsIcon").OrbsIcon, { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG });
            }
      };
      obj12.children = intl2.format(markAsDismissed(tmp3[25]).qV9zT6, obj13);
      items6[1] = closure_8(require("Text/Text").Text, obj12);
      obj10.children = items6;
      items5[1] = closure_9(require("Stack/Stack").Stack, obj10);
      const obj14 = { children: null };
      const obj15 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = require("util").intl;
      obj15.text = intl3.string(markAsDismissed(tmp3[25]).ZeOhh9);
      const obj16 = { size: "sm", color: markAsDismissed(tmp3[7]).colors.WHITE };
      obj15.icon = closure_8(require("WindowLaunchIcon").WindowLaunchIcon, obj16);
      obj15.onPress = tmp11;
      const items7 = [closure_8(require("components/Button/Button").Button, obj15), ];
      const obj17 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = require("util").intl;
      obj17.text = intl4.string(require("util").t.TulDPl);
      obj17.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      };
      items7[1] = closure_8(require("components/Button/Button").Button, obj17);
      obj14.children = items7;
      items5[2] = closure_9(require("Stack/Stack").Stack, obj14);
      obj4.children = items5;
      obj3.children = closure_9(require("Stack/Stack").Stack, obj4);
      return closure_8(require("Sheet/BottomSheet").BottomSheet, obj3);
    }
  }
  return false;
};
export const useShouldShowConnectionDeprecationBottomSheet = function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
  deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = deprecatedPlatformTypes(504).useStateFromStoresObject(items, () => {
    const obj = { fetchingConnections: ConnectedAccountsStore.isFetching(), matchingPlatform: null };
    const accounts = ConnectedAccountsStore.getAccounts();
    const mapped = accounts.map((type) => closure_1_1(closure_1_2[11]).get(type.type));
    obj.matchingPlatform = mapped.find((migrationData) => {
      migrationData = migrationData.migrationData;
      let migrationExperimentEnabled;
      if (migrationData != null) {
        migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
      }
      if (migrationExperimentEnabled) {
        migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
      }
      return migrationExperimentEnabled;
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let obj = deprecatedPlatformTypes(504);
  let replacedBy;
  if (matchingPlatform != null) {
    let migrationData = matchingPlatform.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = deprecatedPlatformTypes(7415).useGetOrFetchApplication(replacedBy);
  const tmp5 = useStartAuthorizeDefault(getOrFetchApplication);
  ({ hasAlreadyLinked, canStartAuthorization } = tmp5);
  if (!fetchingConnections) {
    fetchingConnections = !tmp5.fetched;
  }
  if (!fetchingConnections) {
    fetchingConnections = !canStartAuthorization;
  }
  if (!fetchingConnections) {
    fetchingConnections = null == getOrFetchApplication;
  }
  let tmp6 = !fetchingConnections;
  if (!fetchingConnections) {
    tmp6 = !hasAlreadyLinked;
  }
  return tmp6;
};