// discord_app/modules/oauth2/native/IntegrationTypeSelector.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserPlusIcon from "../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import ServerIcon from "../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  container: { alignItems: "center", flexDirection: "column" },
  header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" },
  rows: null,
  divider: null,
  learnMore: null,
  descriptionContainer: null,
  descriptionMainContainer: null,
  appIcon: null,
  appIconMask: null,
  loadingIcon: null,
};
createStyles = { alignSelf: "stretch", borderRadius: nativeDefault.radii.sm };
createStyles.rows = createStyles;
createStyles.divider = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: -1 * StyleSheet.hairlineWidth,
};
createStyles.learnMore = { marginVertical: 16 };
let obj1 = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: -1 * StyleSheet.hairlineWidth,
};
createStyles.descriptionContainer = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: "100%",
  borderRadius: nativeDefault.radii.sm,
};
createStyles.descriptionMainContainer = { padding: 8 };
let size = { height: 82, width: 82, borderRadius: nativeDefault.radii.xl };
createStyles.appIcon = size;
const obj2 = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: "100%",
  borderRadius: nativeDefault.radii.sm,
};
createStyles.appIconMask = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
const obj3 = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
createStyles.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  application = application.application;
  const onSelect = application.onSelect;
  const tmp = createStyles();
  let items = [,];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = noop.useMemo(() => {
    const obj = { id: application.id, icon: application.icon };
    return obj.getApplicationIconSource(obj);
  }, items);
  const items1 = [application.integrationTypesConfig];
  const memo1 = noop.useMemo(() => {
    let obj = {
      type: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
      icon: UserPlusIcon.UserPlusIcon,
      label: null,
      subLabel: null,
      beta: false,
    };
    const intl = util.intl;
    obj.label = intl.string(util.t.aCg60P);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.YeiIUZ);
    const items = [obj];
    obj = {
      type: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL,
      icon: ServerIcon.ServerIcon,
      label: null,
      subLabel: null,
      beta: false,
    };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.E64YCz);
    const intl4 = util.intl;
    obj.subLabel = intl4.string(util.t.bbtoKm);
    items[1] = obj;
    return items.filter((item) => {
      const integrationTypesConfig = application.integrationTypesConfig;
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
    let obj = { style: tmp.appIcon, source: memo };
    let tmp5 = closure_5(onSelect(memo1[10]), obj);
    let tmp6 = closure_5;
  } else {
    obj = { style: null };
    const items2 = [,];
    ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
    obj.style = items2;
    tmp5 = closure_5(closure_4, obj);
    tmp6 = closure_5;
  }
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.header, children: null };
  const items3 = [
    tmp6(closure_4, { style: tmp.appIconMask, children: tmp5 }),
    tmp6(application(memo1[11]).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  let tmp6Result = null != application.description;
  if (tmp6Result) {
    const obj4 = { hideName: true, application, viewContainerStyle: null, mainContainerStyle: null };
    ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle } = tmp);
    tmp6Result = tmp6(onSelect(tmp13[12]), obj4);
  }
  items3[2] = tmp6Result;
  obj1.children = items3;
  const items4 = [closure_6(closure_4, obj1)];
  const obj5 = {
    style: tmp.rows,
    children: tmp6(application(memo1[13]).TableRowGroup, {
      hasIcons: true,
      children: memo1.map((icon, index) => {
        const obj = {
          icon: closure_1_5(icon.icon, { color: "interactive-text-default" }),
          label: null,
          subLabel: null,
          onPress() {
            return onSelect(icon.type);
          },
          start: 0 === index,
          end: index === memo1.length - 1,
          arrow: true,
          trailing: null,
        };
        ({ label: obj.label, subLabel: obj.subLabel } = icon);
        let tmpResult;
        if (icon.beta) {
          tmpResult = tmp(application(memo1[15]).BetaTag, {});
        }
        obj.trailing = tmpResult;
        return closure_1_5(application(memo1[14]).TableRow, obj, icon.type);
      }),
    }),
  };
  items4[1] = tmp6(closure_4, obj5);
  obj.children = items4;
  return closure_6(closure_4, obj);
}
export const useStyles = createStyles;
