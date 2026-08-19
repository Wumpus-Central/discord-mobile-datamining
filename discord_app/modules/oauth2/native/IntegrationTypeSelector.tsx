// === Module 9812: styles ===

// Module 9812 (styles)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let createCacheKey = { alignSelf: "stretch", borderRadius: ThemesDefault.radii.sm };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
createCacheKey[4] = { marginVertical: 16 };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { padding: 8 };
createCacheKey[7] = { height: 82, width: 82, borderRadius: ThemesDefault.radii.xl };
createCacheKey[8] = { padding: 4, borderRadius: ThemesDefault.radii.xl + 4 };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  application = application.application;
  const onSelect = application.onSelect;
  const tmp = createCacheKey();
  let items = [, ];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = React.useMemo(() => {
    onSelect(memo1[5]);
    const obj = { id: application.id, icon: application.icon };
    return obj.getApplicationIconSource(obj);
  }, items);
  const items1 = [application.integrationTypesConfig];
  const memo1 = React.useMemo(() => {
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
    return items.filter((item, index) => {
      const integrationTypesConfig = obj.integrationTypesConfig;
      let oauth2InstallParams;
      if (integrationTypesConfig != null) {
        if (integrationTypesConfig[item.type] != null) {
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
  const items4 = [callback(closure_4, obj1), ];
  const obj5 = {
    style: tmp.rows,
    children: tmp6(application(memo1[13]).TableRowGroup, {
      hasIcons: true,
      children: memo1.map((item, index) => {
        closure_0 = item;
        const obj = {
          icon: closure_1_5(item.icon, { color: "interactive-text-default" }),
          label: null,
          subLabel: null,
          onPress() {
            return onSelect(item.type);
          },
          start: 0 === index,
          end: index === memo1.length - 1,
          arrow: true,
          trailing: null
        };
        ({ label: obj[1], subLabel: obj[2] } = item);
        let tmpResult;
        if (item.beta) {
          tmpResult = closure_1_5(application(memo1[15]).BetaTag, {});
        }
        obj[7] = tmpResult;
        return closure_1_5(application(memo1[14]).TableRow, obj, item.type);
      })
    })
  };
  items4[1] = tmp6(closure_4, obj5);
  obj[1] = items4;
  return callback(closure_4, obj);
};
export const useStyles = createCacheKey;