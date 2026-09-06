// discord_app/modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import Icon from "../../../../design/void/Icon/native/Icon.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import InfoBoxDefault from "../../authorized_apps/native/InfoBox.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const IconDefault = Icon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default function ConnectedApplicationIdentity(identity) {
  identity = identity.identity;
  _require = identity;
  const token = identity.token;
  let str;
  _slicedToArray = undefined;
  noop = undefined;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  let obj = require("createStyles");
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(require("ConnectedAccount").readStyles);
  let obj1 = noop;
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  [tmp6, c4] = _slicedToArray(noop.useState(flag), 2);
  let intl = tmp2(tmp3[7]).intl;
  const formatResult = intl.format(require("util").t.VgqIPj, { provider: str });
  noop = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj1.useCallback(() => {
    let obj = { children: null };
    const items = [React5(native.Spacer, { size: 8 }), , ,];
    obj = { variant: "text-md/medium", children: null };
    const intl = util.intl;
    obj = { provider: str };
    obj.children = intl.format(util.t.VgqIPj, obj);
    items[1] = React5(Text_Text.Text, obj);
    items[2] = React5(native.Spacer, { size: 16 });
    const obj1 = { children: null };
    const intl2 = util.intl;
    obj1.children = intl2.format(util.t.COW3Xn, { platformName: str });
    items[3] = React5(InfoBoxDefault, obj1);
    obj.children = items;
    const obj2 = { platformName: str };
    const tmp2 = React6(View, obj);
    const obj3 = {
      title: null,
      body: null,
      cancelText: null,
      children: null,
      confirmText: null,
      onConfirm: null,
      confirmColor: null,
    };
    const intl3 = util.intl;
    obj3.title = intl3.formatToPlainString(util.t.U5x12f, { name: str });
    obj3.body = body;
    const intl4 = util.intl;
    obj3.cancelText = intl4.string(util.t["ETE/oC"]);
    obj3.children = tmp2;
    const intl5 = util.intl;
    obj3.confirmText = intl5.string(util.t.ppppRJ);
    obj3.onConfirm = function onConfirm() {
      if (null != token) {
        closure_0(application[12]).handleDeleteApp(tmp);
        const obj = closure_0(application[12]);
      }
    };
    obj3.confirmColor = common_AlertDefault.Colors.RED;
    AlertActionCreatorsDefault.show(obj3);
  }, items);
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = obj1.useMemo(() => {
    const obj = { id: application_id.application_id, icon: null, size: null, botIconFirst: false };
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    obj.icon = icon;
    obj.size = Icon.getIconSize(IconDefault.Sizes.LARGE);
    return obj.getApplicationIconSource(obj);
  }, items1);
  _require = str((connection_visible) => {
    c2 = 0;
    c4 = 0;
    c3 = 0;
    return (function* (arg0) {
      closure_1 = tmp3;
      v3(connection_visible);
      token(application[16]);
      const obj1 = { connection_visible };
      yield obj1.updateApplicationIdentityConfig(
        connection_visible.application_id,
        connection_visible.provider_issued_user_id,
        obj1,
      );
      if (1 === tmp7) {
        c3 = 0;
        const profile = connection_visible.profile;
        connection_visible = undefined;
        if (profile != null) {
          connection_visible = profile.connection_visible;
        }
        v3(true === connection_visible);
        v3 = 3;
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    })();
  });
  const profile2 = identity.profile;
  let connection_visible;
  if (profile2 != null) {
    connection_visible = profile2.connection_visible;
  }
  const items2 = [connection_visible, ,];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    obj = {
      accessible: true,
      accessibilityLabel: application.name,
      style: null,
      size: null,
      source: null,
      disableColor: true,
    };
    const items3 = [,];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj.style = items3;
    obj.size = token(tmp3[15]).Sizes.LARGE;
    obj.source = memo;
    const tmp15 = token(tmp3[15]);
    obj = { spacing: 8, direction: "horizontal", align: "center", children: null };
    obj1 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      hitSlop: null,
      disabled: null,
      children: null,
    };
    let intl2 = tmp2(tmp3[7]).intl;
    obj1.accessibilityLabel = intl2.string(tmp2(tmp3[7]).t["DT39A+"]);
    obj1.onPress = callback;
    obj1.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
    obj1.disabled = null == token;
    let obj2 = { style: legacyClassComponentStyles.deleteConnectionIcon, source: null };
    const tmp16 = closure_7(token(tmp3[15]), obj);
    obj2.source = token(tmp3[19]);
    obj1.children = closure_7(token(tmp3[15]), obj2);
    obj.children = closure_7(tmp2(tmp3[18]).PressableOpacity, obj1);
    let obj3 = { style: legacyClassComponentStyles.container, children: null };
    const obj4 = { style: legacyClassComponentStyles.connectedAccountItem, children: null };
    const obj5 = { style: legacyClassComponentStyles.connectedAccountTopContainer, children: null };
    const tmp17 = token(tmp3[15]);
    const obj6 = { label: application.name, icon: tmp16, trailing: closure_7(tmp2(tmp3[17]).Stack, obj) };
    obj5.children = closure_7(tmp2(tmp3[20]).TableRow, obj6);
    const items4 = [closure_7(View, obj5)];
    const obj7 = { style: legacyClassComponentStyles.connectedAccountContentContainer, children: null };
    const obj8 = { hasIcons: false, children: null };
    const obj9 = { label: null, value: null, onValueChange: null };
    let intl3 = tmp2(tmp3[7]).intl;
    obj9.label = intl3.string(tmp2(tmp3[7]).t.f7yOAX);
    obj9.value = tmp6;
    obj9.onValueChange = tmp12;
    obj8.children = closure_7(tmp2(tmp3[22]).TableSwitchRow, obj9);
    obj7.children = closure_7(tmp2(tmp3[21]).TableRowGroup, obj8);
    items4[1] = closure_7(View, obj7);
    obj4.children = items4;
    obj3.children = closure_8(View, obj4);
    return closure_7(View, obj3);
  }
  const tmp5 = _slicedToArray(noop.useState(flag), 2);
}
