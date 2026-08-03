// === Module 9012: styles ===

// Module 9012 (styles)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "column" }, header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" }, rows: null, divider: null, learnMore: null, descriptionContainer: null, descriptionMainContainer: null, appIcon: null, appIconMask: null, loadingIcon: null };
createCacheKey = { alignSelf: "stretch", borderRadius: require("Themes").radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
createCacheKey[4] = { marginVertical: 16 };
let obj1 = { height: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
createCacheKey[5] = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: require("Themes").radii.sm };
createCacheKey[6] = { padding: 8 };
const obj2 = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: require("Themes").radii.sm };
createCacheKey[7] = { height: 82, width: 82, borderRadius: require("Themes").radii.xl };
const obj3 = { height: 82, width: 82, borderRadius: require("Themes").radii.xl };
createCacheKey[8] = { padding: 4, borderRadius: require("Themes").radii.xl + 4 };
let obj4 = { padding: 4, borderRadius: require("Themes").radii.xl + 4 };
createCacheKey[9] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  application = application.application;
  const onSelect = application.onSelect;
  let memo1;
  const tmp = createCacheKey();
  let items = [, ];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = React.useMemo(() => {
    let obj = onSelect(memo1[5]);
    obj = { id: application.id, icon: application.icon };
    return obj.getApplicationIconSource(obj);
  }, items);
  const items1 = [application.integrationTypesConfig];
  memo1 = React.useMemo(() => {
    let obj = { type: application(memo1[6]).ApplicationIntegrationType.USER_INSTALL, icon: application(memo1[7]).UserPlusIcon, label: null, subLabel: null, beta: false };
    const intl = application(memo1[8]).intl;
    obj[2] = intl.string(application(memo1[8]).t.aCg60P);
    const intl2 = application(memo1[8]).intl;
    obj[3] = intl2.string(application(memo1[8]).t.YeiIUZ);
    const items = [obj, ];
    obj = { type: application(memo1[6]).ApplicationIntegrationType.GUILD_INSTALL, icon: application(memo1[9]).ServerIcon, label: null, subLabel: null, beta: false };
    const intl3 = application(memo1[8]).intl;
    obj[2] = intl3.string(application(memo1[8]).t.E64YCz);
    const intl4 = application(memo1[8]).intl;
    obj[3] = intl4.string(application(memo1[8]).t.bbtoKm);
    items[1] = obj;
    return items.filter((arg0) => {
      const integrationTypesConfig = obj.integrationTypesConfig;
      let oauth2InstallParams;
      if (integrationTypesConfig != null) {
        if (integrationTypesConfig[arg0.type] != null) {
          oauth2InstallParams = tmp3.oauth2InstallParams;
        }
      }
      return null != oauth2InstallParams;
    });
  }, items1);
  if (null != memo) {
    let obj = { style: null, source: null };
    obj[0] = tmp.appIcon;
    obj[1] = memo;
    let tmp5 = callback(onSelect(memo1[10]), obj);
    let tmp6 = callback;
  } else {
    obj = { style: null };
    const items2 = [, ];
    ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
    obj[0] = items2;
    tmp5 = callback(closure_4, obj);
    tmp6 = callback;
  }
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.header, children: null };
  const items3 = [tmp6(closure_4, { style: tmp.appIconMask, children: tmp5 }), tmp6(application(memo1[11]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp6Result = null != application.description;
  if (tmp6Result) {
    const obj4 = { hideName: true, application: null, viewContainerStyle: null, mainContainerStyle: null };
    obj4[1] = application;
    ({ descriptionContainer: obj7[2], descriptionMainContainer: obj7[3] } = tmp);
    tmp6Result = tmp6(onSelect(tmp13[12]), obj4);
  }
  items3[2] = tmp6Result;
  obj1[1] = items3;
  const items4 = [closure_6(closure_4, obj1), ];
  const obj5 = { style: tmp.rows, children: null };
  const obj6 = { hasIcons: true, children: null };
  obj6[1] = memo1.map((icon) => {
    let closure_0 = icon;
    const obj = { icon: null, label: null, subLabel: null, onPress: null, start: null, end: null, arrow: true, trailing: null };
    obj[0] = outer1_5(icon.icon, { color: "interactive-text-default" });
    ({ label: obj[1], subLabel: obj[2] } = icon);
    obj[3] = function onPress() {
      return outer1_1(icon.type);
    };
    obj[4] = 0 === arg1;
    obj[5] = arg1 === memo1.length - 1;
    let tmpResult;
    if (icon.beta) {
      tmpResult = tmp(application(memo1[15]).BetaTag, {});
    }
    obj[7] = tmpResult;
    return outer1_5(application(memo1[14]).TableRow, obj, icon.type);
  });
  obj5[1] = tmp6(application(memo1[13]).TableRowGroup, obj6);
  items4[1] = tmp6(closure_4, obj5);
  obj[1] = items4;
  return closure_6(closure_4, obj);
};
export const useStyles = createCacheKey;