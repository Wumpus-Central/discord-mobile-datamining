// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx
import getAvatarURL from "getAvatarURL";
import get_ActivityIndicator from "getSystemLocale";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";
import ME from "ME";
import jsxProd from "EntityBorderAppIcon";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let map1;
let unpackModuleId;
let require = arg1;
({ View: c4, ActivityIndicator: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ AnalyticsPages: c9, UserSettingsSections: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_24 = require("Themes").space.PX_24;
createCacheKey = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 }, container: null, headerDescription: null, appListHeader: null };
createCacheKey = { paddingHorizontal: 16, paddingTop: require("Themes").space.PX_24 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { marginTop: 12 };
createCacheKey[5] = { marginTop: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("recomputeFromAppTokens").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(navigation[12]);
  let items = [recomputeFromAppTokens];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  let obj1 = require(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = require(navigation[14]);
  const focusEffect = obj2.useFocusEffect(React.useCallback(() => appAuthTokens(navigation[15]).fetch(), []));
  let items1 = [navigation];
  React = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = appAuthTokens(navigation[19]);
    obj = { id: item.application.id, icon: item.application.icon };
    const applicationIconSource = obj.getApplicationIconSource(obj);
    obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
    obj[0] = outer1_11(appAuthTokens(navigation[21]), { iconSource: applicationIconSource, iconBorderRadius: 6 });
    obj[1] = item.application.name;
    obj[2] = function onPress() {
      let obj = appAuthTokens(navigation[22]);
      obj.setSection(outer2_10.AUTHORIZED_APP);
      let obj1 = item(navigation[23]);
      obj = { destinationPane: outer2_10.AUTHORIZED_APP, source: obj, applicationId: item.application.id };
      obj = { page: outer2_9.USER_SETTINGS };
      const result = obj1.trackUserSettingsPaneViewed(obj);
      obj1 = { oauth2Token: item };
      outer1_2.push(outer2_10.AUTHORIZED_APP, obj1);
    };
    obj[4] = 0 === index;
    obj[5] = index === item.numItems - 1;
    return outer1_11(tmp(navigation[20]).TableRow, obj, item.id);
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      function renderHeader() {
        let obj = { children: null };
        obj = { children: null };
        obj = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
        const intl = tmp(navigation[17]).intl;
        obj[2] = intl.string(tmp(navigation[17]).t.HU3RFw);
        const items = [outer1_11(tmp(navigation[16]).Text, obj), ];
        const obj1 = { style: tmp.headerDescription, variant: "heading-sm/medium", children: null };
        const intl2 = tmp(navigation[17]).intl;
        obj1[2] = intl2.string(tmp(navigation[17]).t.Nu5Yi0);
        items[1] = outer1_11(tmp(navigation[16]).Text, obj1);
        obj[0] = items;
        const items1 = [outer1_12(outer1_4, obj), ];
        const obj2 = { style: tmp.appListHeader, children: null };
        const obj3 = { title: null };
        const intl3 = tmp(navigation[17]).intl;
        obj3[0] = intl3.string(tmp(navigation[17]).t.PHjkRE);
        obj2[1] = outer1_11(tmp(navigation[18]).TableRowGroupTitle, obj3);
        items1[1] = outer1_11(outer1_4, obj2);
        obj[0] = items1;
        return outer1_12(outer1_13, obj);
      }
      if (0 === appAuthTokens.length) {
        obj = { style: null, children: null };
        obj[0] = tmp.emptyContainer;
        const items2 = [renderHeader(), ];
        obj = { color: "mobile-text-heading-primary", style: null, variant: "heading-md/extrabold", children: null };
        obj[1] = tmp.emptyText;
        let intl = tmp3(tmp2[17]).intl;
        obj[3] = intl.string(tmp3(tmp2[17]).t["E+SM6T"]);
        items2[1] = callback(tmp3(tmp2[16]).Text, obj);
        obj[1] = items2;
        let tmp10 = callback2(closure_4, obj);
      } else {
        obj1 = { contentContainerStyle: null, ListHeaderComponent: null, renderItem: null, data: null };
        const items3 = [tmp.container, ];
        obj2 = { paddingBottom: null };
        obj2[0] = appAuthTokens(navigation[11])().bottom + PX_24;
        items3[1] = obj2;
        obj1[0] = items3;
        obj1[1] = renderHeader();
        obj1[2] = function renderItem(item) {
          return callback({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj1[3] = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp10 = callback(closure_6, obj1);
      }
    }
    return tmp10;
  }
  tmp10 = callback(closure_5, { style: tmp.spinner, animating: true, size: "large" });
};
export const DisclosureIcon = function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return React.useMemo(() => {
    if (disclosure(outer1_2[7]).ApplicationDisclosureType.IP_LOCATION === disclosure) {
      let obj = { style: null, size: "xs" };
      obj[0] = style;
      return outer1_11(tmp2(tmp3[8]).GlobeEarthIcon, obj);
    } else if (tmp2(tmp3[7]).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === tmp) {
      obj = { style: null, size: "xs" };
      obj[0] = style;
      return outer1_11(tmp2(tmp3[9]).EmbedIcon, obj);
    } else {
      obj = { style: null, size: "xs" };
      obj[0] = style;
      return outer1_11(tmp2(tmp3[10]).CircleInformationIcon, obj);
    }
    tmp = disclosure;
  }, items);
};