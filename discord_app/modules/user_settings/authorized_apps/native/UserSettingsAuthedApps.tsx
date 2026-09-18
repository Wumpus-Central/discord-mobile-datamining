// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import applications from "../../../../../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx";
import EmbedIcon from "../../../../design/components/Icon/native/redesign/generated/EmbedIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../../oauth2/AuthorizedAppsStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const FetchState = fn(7303).FetchState;
const Constants = fn(1074);
({ AnalyticsPages: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4722);
let obj2 = {
  spinner: { padding: 16 },
  emptyText: { marginTop: 24 },
  emptyContainer: { padding: 16 },
  container: { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 },
  headerDescription: { marginTop: 12 },
  appListHeader: { marginTop: 24 },
};
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  const tmp = closure_15();
  _require = tmp;
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    fetchState: authStore.getFetchState(),
    appAuthTokens: authStore.getNewestTokensForNonChildrenApplications(),
  }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  let obj = require("initialize");
  navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => appAuthTokens(navigation[15]).fetch(), []));
  let items1 = [navigation];
  noop = noop.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const applicationIconSource = appAuthTokens(navigation[19]).getApplicationIconSource({
      id: item.application.id,
      icon: item.application.icon,
    });
    let obj = appAuthTokens(navigation[19]);
    const obj2 = { id: item.application.id, icon: item.application.icon };
    return closure_1_11(
      closure_0(navigation[20]).TableRow,
      {
        icon: closure_1_11(appAuthTokens(navigation[21]), { iconSource: applicationIconSource, iconBorderRadius: 6 }),
        label: item.application.name,
        onPress() {
          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
          const obj3 = {
            destinationPane: constants2.AUTHORIZED_APP,
            source: { page: constants.USER_SETTINGS },
            applicationId: item.application.id,
          };
          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
        },
        arrow: true,
        start: 0 === index,
        end: index === item.numItems - 1,
      },
      item.id,
    );
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      function renderHeader() {
        const obj = { children: null };
        const obj2 = { children: null };
        const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.HU3RFw);
        const items = [closure_2_11(Text_Text.Text, obj3)];
        const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(util.t.Nu5Yi0);
        items[1] = closure_2_11(Text_Text.Text, obj4);
        obj2.children = items;
        const items1 = [closure_2_12(React4, obj2)];
        const obj5 = { style: closure_0.appListHeader, children: null };
        const obj6 = { title: null };
        const intl3 = util.intl;
        obj6.title = intl3.string(util.t.PHjkRE);
        obj5.children = closure_2_11(TableRowGroup.TableRowGroupTitle, obj6);
        items1[1] = closure_2_11(React4, obj5);
        obj.children = items1;
        return closure_2_12(map1, obj);
      }
      if (0 === appAuthTokens.length) {
        let obj4 = { style: tmp.emptyContainer, children: null };
        const items2 = [renderHeader()];
        let obj5 = {
          color: "mobile-text-heading-primary",
          style: tmp.emptyText,
          variant: "heading-md/extrabold",
          children: null,
        };
        let intl = tmp3(tmp2[17]).intl;
        obj5.children = intl.string(tmp3(tmp2[17]).t["E+SM6T"]);
        items2[1] = closure_11(tmp3(tmp2[16]).Text, obj5);
        obj4.children = items2;
        let tmp10 = closure_12(closure_4, obj4);
      } else {
        let obj6 = { contentContainerStyle: null, ListHeaderComponent: null, renderItem: null, data: null };
        const items3 = [tmp.container];
        const obj7 = { paddingBottom: appAuthTokens(navigation[11])().bottom + PX_24 };
        items3[1] = obj7;
        obj6.contentContainerStyle = items3;
        obj6.ListHeaderComponent = renderHeader();
        obj6.renderItem = function renderItem(item) {
          return closure_3({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj6.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp10 = closure_11(closure_6, obj6);
      }
    }
    return tmp10;
  }
  tmp10 = closure_11(closure_5, { style: tmp.spinner, animating: true, size: "large" });
  let obj3 = require("Link");
  const obj8 = { style: tmp.spinner, animating: true, size: "large" };
}
export const DisclosureIcon = function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return noop.useMemo(() => {
    if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
      const obj2 = { style, size: "xs" };
      return closure_2_11(GlobeEarthIcon.GlobeEarthIcon, obj2);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
      const obj3 = { style, size: "xs" };
      return closure_2_11(EmbedIcon.EmbedIcon, obj3);
    } else {
      const obj = { style, size: "xs" };
      return closure_2_11(CircleInformationIcon.CircleInformationIcon, obj);
    }
  }, items);
};
