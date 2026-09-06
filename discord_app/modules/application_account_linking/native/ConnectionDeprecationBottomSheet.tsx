// === Module 16940: ConnectionDeprecationBottomSheet ===

// Module 16940 (ConnectionDeprecationBottomSheet)
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import themes from "themes" /* 4269 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Icon from "Icon" /* 4977 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 7165 */;
import GameIcon from "GameIcon" /* 7172 */;
import AccountLinkManager from "AccountLinkManager" /* 16941 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

const IconDefault = Icon;
const GameIconDefault = GameIcon;

require = fn;
function ConnectionIcon(arg0) {
  ({ platform, theme } = arg0);
  const tmp = closure_10();
  let obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const icon = platform.icon;
  obj = { style: tmp.iconContainer, children: null };
  const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = { size: null, source: null, disableColor: true, style: null };
  obj.size = Icon.IconSizes.CUSTOM;
  obj.source = source;
  obj.style = tmp.connectionIcon;
  obj.children = React6(IconDefault, obj);
  return React6(View, obj);
}
function ApplicationIcon(application) {
  application = application.application;
  let obj = { style: closure_10().iconContainer, children: null };
  let tmpResult = null;
  if (null != application) {
    obj = { game: application, size: GameIcon.GameIconSizes.NORMAL };
    tmpResult = React6(GameIconDefault, obj);
  }
  obj.children = tmpResult;
  return React6(View, obj);
}
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, content: null, text: null, connectionIcon: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.text = { textAlign: "center" };
createStyles.connectionIcon = { height: 48, width: 48 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let onSuccess;
  const tmp = closure_10();
  let obj = require("native");
  const theme = obj.useThemeContext().theme;
  let obj1 = require("initialize");
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
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
    let tmp4Result = markAsDismissed(tmp3[11]);
    value = tmp4Result.get(stateFromStores);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const items1 = [onSuccess];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ApplicationStore.getApplication(replacedBy));
  startAuthorization = markAsDismissed(tmp3[12])(stateFromStores1).startAuthorization;
  tmp4Result = markAsDismissed(tmp3[13]);
  analyticsLocations = tmp4Result(markAsDismissed(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  onSuccess = startAuthorization.useCallback(() => {
    const obj = {
      applicationId: replacedBy,
      onSuccess() {
        markAsDismissed(paths[16]).openLazy(closure_1_0(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj);
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  if (null != value) {
    if (null != stateFromStores1) {
      obj = {
        startExpanded: true,
        contentStyles: tmp.content,
        header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: null }),
        onDismiss() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            },
        children: null
      };
      obj = { spacing: 24, style: null, children: null };
      obj1 = { paddingBottom: markAsDismissed(replacedBy[9])().bottom };
      obj.style = obj1;
      const obj2 = { justify: "center", align: "center", direction: "horizontal", children: null };
      const obj3 = { theme, platform: value };
      const items4 = [closure_8(ConnectionIcon, obj3), , ];
      const obj4 = { theme };
      items4[1] = closure_8(require("RobloxConnectionCoachmark").UnionIcon, obj4);
      const obj5 = { application: stateFromStores1 };
      items4[2] = closure_8(ApplicationIcon, obj5);
      obj2.children = items4;
      const items5 = [closure_9(require("Stack/Stack").Stack, obj2), , ];
      const obj6 = { justify: "center", children: null };
      const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: null };
      const intl = require("util").intl;
      obj7.children = intl.string(markAsDismissed(tmp3[25]).vycLU2);
      const items6 = [closure_8(require("Text/Text").Text, obj7), ];
      const obj8 = { variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = require("util").intl;
      const obj9 = {
        connectionName: value.name,
        orbCount: 200,
        orbsIconHook() {
              return closure_1_8(require("OrbsIcon").OrbsIcon, { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG });
            }
      };
      obj8.children = intl2.format(markAsDismissed(tmp3[25]).qV9zT6, obj9);
      items6[1] = closure_8(require("Text/Text").Text, obj8);
      obj6.children = items6;
      items5[1] = closure_9(require("Stack/Stack").Stack, obj6);
      const obj10 = { children: null };
      const obj11 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl3 = require("util").intl;
      obj11.text = intl3.string(markAsDismissed(tmp3[25]).ZeOhh9);
      const obj12 = { size: "sm", color: markAsDismissed(tmp3[7]).colors.WHITE };
      obj11.icon = closure_8(require("WindowLaunchIcon").WindowLaunchIcon, obj12);
      obj11.onPress = tmp11;
      const items7 = [closure_8(require("components/Button/Button").Button, obj11), ];
      const obj13 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl4 = require("util").intl;
      obj13.text = intl4.string(require("util").t.TulDPl);
      obj13.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      };
      items7[1] = closure_8(require("components/Button/Button").Button, obj13);
      obj10.children = items7;
      items5[2] = closure_9(require("Stack/Stack").Stack, obj10);
      obj.children = items5;
      obj.children = closure_9(require("Stack/Stack").Stack, obj);
      return closure_8(require("Sheet/BottomSheet").BottomSheet, obj);
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
  const getOrFetchApplication = deprecatedPlatformTypes(7168).useGetOrFetchApplication(replacedBy);
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