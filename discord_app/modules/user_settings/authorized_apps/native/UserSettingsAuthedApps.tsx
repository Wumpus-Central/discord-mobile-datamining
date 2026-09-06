// === Module 14938: UserSettingsAuthedApps ===

// Module 14938 (UserSettingsAuthedApps)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4515 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8886 */;
import applications from "applications" /* 9241 */;
import EmbedIcon from "EmbedIcon" /* 9431 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const FetchState = fn(7107).FetchState;
const Constants = fn(1074);
({ AnalyticsPages: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_24 = nativeDefault.space.PX_24;
fn(4560);
let createStyles = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 }, container: null, headerDescription: null, appListHeader: null };
createStyles = { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.headerDescription = { marginTop: 12 };
createStyles.appListHeader = { marginTop: 24 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  const tmp = closure_15();
  _require = tmp;
  let obj = require("initialize");
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  let obj1 = require("useNavigation");
  navigation = obj1.useNavigation();
  let obj2 = require("Link");
  const focusEffect = obj2.useFocusEffect(noop.useCallback(() => appAuthTokens(navigation[15]).fetch(), []));
  let items1 = [navigation];
  noop = noop.useCallback((item) => {
    item = item.item;
    const index = item.index;
    appAuthTokens(navigation[19]);
    let obj = { id: item.application.id, icon: item.application.icon };
    const applicationIconSource = obj.getApplicationIconSource(obj);
    obj = {
      icon: closure_1_11(appAuthTokens(navigation[21]), { iconSource: applicationIconSource, iconBorderRadius: 6 }),
      label: item.application.name,
      onPress() {
        let obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants2.AUTHORIZED_APP);
        let obj1 = UserSettingsUtils;
        obj = { destinationPane: constants2.AUTHORIZED_APP, source: null, applicationId: item.application.id };
        obj = { page: constants.USER_SETTINGS };
        obj.source = obj;
        const result = obj1.trackUserSettingsPaneViewed(obj);
        obj1 = { oauth2Token: item };
        navigation.push(constants2.AUTHORIZED_APP, obj1);
      },
      arrow: true,
      start: 0 === index,
      end: index === item.numItems - 1
    };
    return closure_1_11(closure_0(navigation[20]).TableRow, obj, item.id);
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      function renderHeader() {
        let obj = { children: null };
        obj = { children: null };
        obj = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
        const intl = util.intl;
        obj.children = intl.string(util.t.HU3RFw);
        const items = [closure_2_11(Text_Text.Text, obj), ];
        const obj1 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
        const intl2 = util.intl;
        obj1.children = intl2.string(util.t.Nu5Yi0);
        items[1] = closure_2_11(Text_Text.Text, obj1);
        obj.children = items;
        const items1 = [closure_2_12(React4, obj), ];
        const obj2 = { style: closure_0.appListHeader, children: null };
        const obj3 = { title: null };
        const intl3 = util.intl;
        obj3.title = intl3.string(util.t.PHjkRE);
        obj2.children = closure_2_11(TableRowGroup.TableRowGroupTitle, obj3);
        items1[1] = closure_2_11(React4, obj2);
        obj.children = items1;
        return closure_2_12(map1, obj);
      }
      if (0 === appAuthTokens.length) {
        obj = { style: tmp.emptyContainer, children: null };
        const items2 = [renderHeader(), ];
        obj = { color: "mobile-text-heading-primary", style: tmp.emptyText, variant: "heading-md/extrabold", children: null };
        let intl = tmp3(tmp2[17]).intl;
        obj.children = intl.string(tmp3(tmp2[17]).t["E+SM6T"]);
        items2[1] = closure_11(tmp3(tmp2[16]).Text, obj);
        obj.children = items2;
        let tmp10 = closure_12(closure_4, obj);
      } else {
        obj1 = { contentContainerStyle: null, ListHeaderComponent: null, renderItem: null, data: null };
        const items3 = [tmp.container, ];
        obj2 = { paddingBottom: appAuthTokens(navigation[11])().bottom + PX_24 };
        items3[1] = obj2;
        obj1.contentContainerStyle = items3;
        obj1.ListHeaderComponent = renderHeader();
        obj1.renderItem = function renderItem(item) {
          return closure_3({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj1.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp10 = closure_11(closure_6, obj1);
      }
    }
    return tmp10;
  }
  tmp10 = closure_11(closure_5, { style: tmp.spinner, animating: true, size: "large" });
  let obj3 = { style: tmp.spinner, animating: true, size: "large" };
};
export const DisclosureIcon = function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return noop.useMemo(() => {
    if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
      let obj = { style, size: "xs" };
      return closure_2_11(GlobeEarthIcon.GlobeEarthIcon, obj);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
      obj = { style, size: "xs" };
      return closure_2_11(EmbedIcon.EmbedIcon, obj);
    } else {
      obj = { style, size: "xs" };
      return closure_2_11(CircleInformationIcon.CircleInformationIcon, obj);
    }
  }, items);
};