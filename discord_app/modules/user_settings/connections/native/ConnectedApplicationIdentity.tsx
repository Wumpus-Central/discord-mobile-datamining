// === Module 15078: ConnectedApplicationIdentity ===

// Module 15078 (ConnectedApplicationIdentity)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4634 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4982 */;
import Icon from "Icon" /* 5062 */;
import common_AlertDefault from "common/Alert" /* 5079 */;
import InfoBoxDefault from "InfoBox" /* 9602 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
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
  const legacyClassComponentStyles = require("createStyles").useLegacyClassComponentStyles(require("ConnectedAccount").readStyles);
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = require("createStyles");
  [tmp6, c4] = noop.useState(flag);
  let intl = tmp2(tmp3[7]).intl;
  const formatResult = intl.format(require("util").t.VgqIPj, { provider: str });
  noop = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj2.useCallback(() => {
    let obj = { children: null };
    const items = [React5(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: null };
    const intl = util.intl;
    obj2.children = intl.format(util.t.VgqIPj, { provider: str });
    items[1] = React5(Text_Text.Text, obj2);
    items[2] = React5(native.Spacer, { size: 16 });
    const obj4 = { children: null };
    const intl2 = util.intl;
    obj4.children = intl2.format(util.t.COW3Xn, { platformName: str });
    items[3] = React5(InfoBoxDefault, obj4);
    obj.children = items;
    const obj3 = { provider: str };
    const obj5 = { platformName: str };
    const tmp2 = React6(View, obj);
    const obj7 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl3 = util.intl;
    obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: str });
    obj7.body = body;
    const intl4 = util.intl;
    obj7.cancelText = intl4.string(util.t["ETE/oC"]);
    obj7.children = tmp2;
    const intl5 = util.intl;
    obj7.confirmText = intl5.string(util.t.ppppRJ);
    obj7.onConfirm = function onConfirm() {
      if (null != token) {
        closure_0(application[12]).handleDeleteApp(tmp);
        const obj = closure_0(application[12]);
      }
    };
    obj7.confirmColor = common_AlertDefault.Colors.RED;
    AlertActionCreatorsDefault.show(obj7);
  }, items);
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = obj2.useMemo(() => {
    const obj2 = { id: application_id.application_id, icon: null, size: null, botIconFirst: false };
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    obj2.icon = icon;
    const obj = AvatarUtilsDefault;
    obj2.size = Icon.getIconSize(IconDefault.Sizes.LARGE);
    return obj.getApplicationIconSource(obj2);
  }, items1);
  _require = str((connection_visible) => {
    c2 = 0;
    c4 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_1 = tmp3;
      v3(connection_visible);
      yield token(application[16]).updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, { connection_visible });
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
  const items2 = [connection_visible, , ];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    let obj3 = { accessible: true, accessibilityLabel: application.name, style: null, size: null, source: null, disableColor: true };
    const items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj3.style = items3;
    obj3.size = token(tmp3[15]).Sizes.LARGE;
    obj3.source = memo;
    const tmp15 = token(tmp3[15]);
    let obj4 = { spacing: 8, direction: "horizontal", align: "center", children: null };
    let obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, disabled: null, children: null };
    let intl2 = tmp2(tmp3[7]).intl;
    obj5.accessibilityLabel = intl2.string(tmp2(tmp3[7]).t["DT39A+"]);
    obj5.onPress = callback;
    obj5.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
    obj5.disabled = null == token;
    const obj6 = { style: legacyClassComponentStyles.deleteConnectionIcon, source: null };
    const tmp16 = closure_7(token(tmp3[15]), obj3);
    obj6.source = token(tmp3[19]);
    obj5.children = closure_7(token(tmp3[15]), obj6);
    obj4.children = closure_7(tmp2(tmp3[18]).PressableOpacity, obj5);
    let obj7 = { style: legacyClassComponentStyles.container, children: null };
    const obj8 = { style: legacyClassComponentStyles.connectedAccountItem, children: null };
    const obj9 = { style: legacyClassComponentStyles.connectedAccountTopContainer, children: null };
    const tmp17 = token(tmp3[15]);
    const obj10 = { label: application.name, icon: tmp16, trailing: closure_7(tmp2(tmp3[17]).Stack, obj4) };
    obj9.children = closure_7(tmp2(tmp3[20]).TableRow, obj10);
    const items4 = [closure_7(View, obj9), ];
    const obj11 = { style: legacyClassComponentStyles.connectedAccountContentContainer, children: null };
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, value: null, onValueChange: null };
    let intl3 = tmp2(tmp3[7]).intl;
    obj13.label = intl3.string(tmp2(tmp3[7]).t.f7yOAX);
    obj13.value = tmp6;
    obj13.onValueChange = tmp12;
    obj12.children = closure_7(tmp2(tmp3[22]).TableSwitchRow, obj13);
    obj11.children = closure_7(tmp2(tmp3[21]).TableRowGroup, obj12);
    items4[1] = closure_7(View, obj11);
    obj8.children = items4;
    obj7.children = closure_8(View, obj8);
    return closure_7(View, obj7);
  }
  const tmp5 = _slicedToArray(noop.useState(flag), 2);
};