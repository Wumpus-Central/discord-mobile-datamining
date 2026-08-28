// === Module 9293: styles ===

// Module 9293 (styles)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "column" }, header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" }, rows: null, divider: null, learnMore: null, descriptionContainer: null, descriptionMainContainer: null, appIcon: null, appIconMask: null, loadingIcon: null };
createCacheKey = { alignSelf: "stretch", borderRadius: ThemesDefault.radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
createCacheKey[4] = { marginVertical: 16 };
let obj1 = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { padding: 8 };
const obj2 = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[7] = { height: 82, width: 82, borderRadius: ThemesDefault.radii.xl };
const obj3 = { height: 82, width: 82, borderRadius: ThemesDefault.radii.xl };
createCacheKey[8] = { padding: 4, borderRadius: ThemesDefault.radii.xl + 4 };
let obj4 = { padding: 4, borderRadius: ThemesDefault.radii.xl + 4 };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
const result = require("set").fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

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
  obj1 = { style: tmp.header, children: null };
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
  const obj5 = {
    style: tmp.rows,
    children: tmp6(application(memo1[13]).TableRowGroup, {
      hasIcons: true,
      children: memo1.map((icon) => {
        closure_0 = icon;
        const obj = {
          icon: closure_1_5(icon.icon, { color: "interactive-text-default" }),
          label: null,
          subLabel: null,
          onPress() {
            return closure_1_1(icon.type);
          },
          start: 0 === arg1,
          end: arg1 === memo1.length - 1,
          arrow: true,
          trailing: null
        };
        ({ label: obj[1], subLabel: obj[2] } = icon);
        let tmpResult;
        if (icon.beta) {
          tmpResult = tmp(application(memo1[15]).BetaTag, {});
        }
        obj[7] = tmpResult;
        return closure_1_5(application(memo1[14]).TableRow, obj, icon.type);
      })
    })
  };
  items4[1] = tmp6(closure_4, obj5);
  obj[1] = items4;
  return closure_6(closure_4, obj);
};
export const useStyles = createCacheKey;