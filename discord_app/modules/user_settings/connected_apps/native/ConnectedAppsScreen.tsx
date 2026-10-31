// === Module 16832: ConnectedAppsScreen ===

// Module 16832 (ConnectedAppsScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Card from "Card" /* 6977 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 14991 */;
import ConnectedApplicationIdentityDefault from "ConnectedApplicationIdentity" /* 16833 */;
import ConnectedAccountDefault from "ConnectedAccount" /* 16834 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 16843 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7276 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import LocaleStore from "LocaleStore" /* 2062 */;

const _modDef4287 = tmp2(4287);
require = fn;
function ConnectionsSection(onAdd) {
  onAdd = onAdd.onAdd;
  const tmp = closure_14();
  _require = tmp;
  importDefault = useThemeDefault();
  const emptyStatePlatforms = require("ConnectionsHooks").useEmptyStatePlatforms();
  let obj = require("ConnectionsHooks");
  const items = [LocaleStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => locale2.locale);
  let obj2 = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => id.getId());
  let obj3 = require("initialize");
  const items2 = [ConnectedAccountsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => ({ fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const obj4 = require("initialize");
  const items3 = [AuthorizedAppsStore];
  const authorizedApps = require("initialize").useStateFromStoresObject(items3, () => ({ authorizedApps: newestTokensForNonChildrenApplications.getNewestTokensForNonChildrenApplications() })).authorizedApps;
  const tmp7 = useConnectionFilteredAppIdentitiesDefault(stateFromStores, { includeHidden: true });
  const prop = tmp7.filteredAppIdentities;
  let tmp8 = accounts.length > 0;
  if (!tmp8) {
    tmp8 = prop.length > 0;
  }
  const obj5 = require("initialize");
  const focusEffect = require("Link").useFocusEffect(authorizedApps.useCallback(() => {
    const response = theme(locale[15]).fetch();
  }, []));
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { children: null };
  const obj8 = { style: tmp.header, children: null };
  const obj9 = { style: tmp.title, variant: "heading-md/semibold", color: "text-strong", children: null };
  const intl = tmp4(1113).intl;
  obj9.children = intl.string(require("util").t["3fe7U5"]);
  const items4 = [closure_11(require("Text/Text").Heading, obj9), ];
  const obj10 = { variant: "text-sm/medium", color: "text-link", style: tmp.addAction, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = tmp4(1113).intl;
  obj10.accessibilityLabel = intl2.string(require("util").t.Zhcj9X);
  obj10.onPress = onAdd;
  const intl3 = tmp4(1113).intl;
  obj10.children = intl3.string(require("util").t.OYkgVk);
  items4[1] = closure_11(require("Text/Text").Text, obj10);
  obj8.children = items4;
  const items5 = [closure_12(closure_5, obj8), ];
  const obj11 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl4 = tmp4(1113).intl;
  obj11.children = intl4.string(_modDef4287["0y44+Q"]);
  items5[1] = closure_11(require("Text/Text").Text, obj11);
  obj7.children = items5;
  const items6 = [closure_12(closure_5, obj7), ];
  if (tmp8) {
    const obj12 = { spacing: 16, children: null };
    const items7 = [
      prop.map((identity) => {
          const obj = { identity, token: authorizedApps.find((application) => application.application.id === identity.application_id) };
          return closure_2_11(ConnectedApplicationIdentityDefault, obj, "" + identity.application_id + "-" + identity.provider_issued_user_id);
        }),
      accounts.map((account) => closure_2_11(ConnectedAccountDefault, { theme, locale, account }, account.id))
    ];
    obj12.children = items7;
    let tmp12Result = closure_12(tmp4(6027).Stack, obj12);
  } else {
    if (!fetching) {
      if (!tmp7.isLoading) {
        const obj13 = { style: tmp.tiles, children: null };
        const substr = emptyStatePlatforms.slice(0, 4);
        const items8 = [
          substr.map((accessibilityLabel) => {
                  const type = accessibilityLabel.type;
                  const icon = accessibilityLabel.icon;
                  const obj = {
                    variant: "secondary",
                    border: "none",
                    radius: 12,
                    style: tile.tile,
                    accessibilityLabel: accessibilityLabel.name,
                    onPress() {
                      closure_1(9720)({ platformType: type, location: constants.CONNECTIONS_EMPTY_STATE });
                      const result = type(16842).trackEmptyStateCardClicked({ platformType: type });
                    },
                    children: null
                  };
                  const tmp3 = FastImageDefault;
                  const obj2 = AvatarUtils;
                  obj.children = closure_2_11(tmp3, { source: obj2.makeSource(shared.isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG), style: tile.icon, resizeMode: "contain", accessible: false });
                  return closure_2_11(Card.Card, obj, type);
                }),

        ];
        const obj14 = { style: tmp.moreButton, children: null };
        const obj15 = { variant: "secondary", size: "lg", grow: true, text: null, onPress: null };
        const intl5 = tmp4(1113).intl;
        obj15.text = intl5.string(tmp4(1113).t["UKOtz+"]);
        obj15.onPress = onAdd;
        obj14.children = closure_11(tmp4(5634).Button, obj15);
        items8[1] = closure_11(closure_5, obj14);
        obj13.children = items8;
        tmp12Result = closure_12(closure_5, obj13);
      }
    }
    tmp12Result = closure_11(closure_4, {});
  }
  items6[1] = tmp12Result;
  obj6.children = items6;
  return closure_12(closure_5, obj6);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticsLocations = fn(1072).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 }, section: null, header: null, title: null, tiles: null, tile: null, moreButton: null, addAction: null, icon: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
obj2.section = { marginBottom: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.title = { flex: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.tiles = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.tile = { flex: 1, minHeight: nativeDefault.space.PX_48, padding: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj2.moreButton = { flex: 2 };
let obj7 = { flex: 1, minHeight: nativeDefault.space.PX_48, padding: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj2.addAction = { paddingVertical: nativeDefault.space.PX_12 + 1, paddingLeft: nativeDefault.space.PX_24 };
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj2.icon = size;
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connected_apps/native/ConnectedAppsScreen.tsx");

export default function ConnectedAppsScreen() {
  const tmp = closure_14();
  const authorizedApps = apps(16843).useAuthorizedApps();
  apps = authorizedApps.apps;
  let obj = apps(16843);
  const stackNavigation = apps(1497).useStackNavigation();
  const items = [stackNavigation];
  const callback = noop.useCallback(() => {
    stackNavigation(paths[32]).openLazy(apps(paths[34])(paths[33], paths.paths), "AddConnection");
  }, []);
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = { title: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.lrVuZO);
    stackNavigation.setOptions(obj);
  }, items);
  const obj3 = { contentContainerStyle: null, ListHeaderComponent: null, ListEmptyComponent: null, data: null, renderItem: null, keyExtractor: null };
  const items1 = [tmp.container, ];
  const obj2 = apps(1497);
  items1[1] = { paddingBottom: stackNavigation(1625)().bottom + stackNavigation(575).space.PX_24 };
  obj3.contentContainerStyle = items1;
  const obj5 = { children: null };
  const items2 = [closure_11(ConnectionsSection, { onAdd: callback }), closure_11(apps(16843).AuthorizedAppsHeader, {})];
  obj5.children = items2;
  obj3.ListHeaderComponent = closure_12(closure_13, obj5);
  obj3.ListEmptyComponent = closure_11(apps(16843).AuthorizedAppsEmpty, { loading: authorizedApps.loading });
  obj3.data = apps;
  obj3.renderItem = function renderItem(app) {
    const index = app.index;
    return closure_2_11(UserSettingsAuthedApps.AuthorizedAppRow, { app: app.item, start: 0 === index, end: index === apps.length - 1 });
  };
  obj3.keyExtractor = function keyExtractor(id) {
    return id.id;
  };
  return closure_11(apps(7294).FlashList, obj3);
};