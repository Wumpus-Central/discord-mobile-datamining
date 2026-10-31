// === Module 16843: UserSettingsAuthedApps ===

// Module 16843 (UserSettingsAuthedApps)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7161 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9041 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9050 */;
import applications from "applications" /* 9746 */;
import EmbedIcon from "EmbedIcon" /* 14609 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7276 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const FetchState = fn(7276).FetchState;
const Constants = fn(1072);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { spinner: { padding: nativeDefault.space.PX_16 }, emptyText: null, headerDescription: null, appListHeader: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.emptyText = { marginTop: nativeDefault.space.PX_16 };
const obj4 = { marginTop: nativeDefault.space.PX_16 };
obj2.headerDescription = { marginTop: nativeDefault.space.PX_8 };
const obj5 = { marginTop: nativeDefault.space.PX_8 };
obj2.appListHeader = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return noop.useMemo(() => {
    if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
      const obj2 = { style, size: "xs" };
      return closure_2_10(GlobeEarthIcon.GlobeEarthIcon, obj2);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
      const obj3 = { style, size: "xs" };
      return closure_2_10(EmbedIcon.EmbedIcon, obj3);
    } else {
      const obj = { style, size: "xs" };
      return closure_2_10(CircleInformationIcon.CircleInformationIcon, obj);
    }
  }, items);
}
export function useAuthorizedApps() {
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = appAuthTokens(504).useStateFromStoresObject(items, () => ({ fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() }));
  appAuthTokens = stateFromStoresObject.appAuthTokens;
  const obj = appAuthTokens(504);
  const focusEffect = appAuthTokens(1498).useFocusEffect(noop.useCallback(() => closure_1(dependencyMap[13]).fetch(), []));
  closure_1 = tmp3;
  const items1 = [appAuthTokens, stateFromStoresObject.fetchState !== FetchState.FETCHED];
  const obj2 = appAuthTokens(1498);
  return {
    loading: stateFromStoresObject.fetchState !== FetchState.FETCHED,
    apps: noop.useMemo(() => {
      const items = [];
      if (closure_1) {
        let sorted = items;
      } else {
        HermesBuiltin.arraySpread(appAuthTokens, 0);
        sorted = items.sort((id, id2) => Number(id2.id) - Number(id.id));
      }
      return sorted;
    }, items1)
  };
}
export function AuthorizedAppsHeader() {
  const tmp = closure_12();
  const obj = { style: tmp.appListHeader, children: null };
  const obj2 = { color: "text-strong", variant: "heading-md/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["f6kk+r"]);
  const items = [closure_1_10(Text_Text.Heading, obj2), ];
  const obj3 = { style: tmp.headerDescription, color: "text-default", variant: "text-sm/normal", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.G9JfLg);
  items[1] = closure_1_10(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_11(React4, obj);
}
export function AuthorizedAppsEmpty(loading) {
  const tmp = closure_12();
  if (loading.loading) {
    const obj2 = { style: tmp.spinner, animating: true, size: "large" };
    let tmp2Result = closure_1_10(hasOwnProperty, obj2);
  } else {
    const obj = { color: "text-default", style: tmp.emptyText, variant: "text-sm/normal", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["E+SM6T"]);
    tmp2Result = closure_1_10(Text_Text.Text, obj);
  }
  return tmp2Result;
}
export function AuthorizedAppRow(app) {
  app = app.app;
  ({ start, end } = app);
  importDefault = app(1497).useNavigation();
  const obj2 = {
    icon: closure_10(TableRowApplicationIconDefault, { application: app.application }),
    label: app.application.name,
    onPress: function handleAppPress() {
      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: app.application.id };
      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
      closure_1.push(constants2.AUTHORIZED_APP, { oauth2Token: app });
    },
    arrow: true,
    start,
    end
  };
  return closure_10(app(6975).TableRow, obj2);
}