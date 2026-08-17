// discord_app/modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default function ConnectedApplicationIdentity(identity) {
  identity = identity.identity;
  let _require = identity;
  const token = identity.token;
  let application;
  let str;
  let callback;
  let React;
  application = undefined;
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
  let obj = _require(application[5]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_require(application[6]).readStyles);
  obj1 = React;
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  [tmp6, c4] = callback(React.useState(flag), 2);
  let intl = tmp2(tmp3[7]).intl;
  const formatResult = intl.format(_require(application[7]).t.VgqIPj, { provider: str });
  React = formatResult;
  let items = [str, formatResult, token];
  let icon;
  callback = obj1.useCallback(() => {
    let obj = { children: null };
    const items = [closure_1_7(lib(application[8]).Spacer, { size: 8 }), , , ];
    obj = { variant: "text-md/medium", children: null };
    const intl = lib(application[7]).intl;
    obj = { provider: str };
    obj[1] = intl.format(lib(application[7]).t.VgqIPj, obj);
    items[1] = closure_1_7(lib(application[9]).Text, obj);
    items[2] = closure_1_7(lib(application[8]).Spacer, { size: 16 });
    obj1 = { children: null };
    const intl2 = lib(application[7]).intl;
    obj1[0] = intl2.format(lib(application[7]).t.COW3Xn, { platformName: str });
    items[3] = closure_1_7(token(application[10]), obj1);
    obj[0] = items;
    const obj2 = { platformName: str };
    const tmp = token(application[10]);
    const tmp2 = closure_1_8(closure_1_6, obj);
    const obj3 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl3 = lib(application[7]).intl;
    obj3[0] = intl3.formatToPlainString(lib(application[7]).t.U5x12f, { name: str });
    obj3[1] = c5;
    const intl4 = lib(application[7]).intl;
    obj3[2] = intl4.string(lib(application[7]).t["ETE/oC"]);
    obj3[3] = tmp2;
    const intl5 = lib(application[7]).intl;
    obj3[4] = intl5.string(lib(application[7]).t.ppppRJ);
    obj3[5] = function onConfirm() {
      if (null != closure_1) {
        closure_1_0(closure_1_2[12]).handleDeleteApp(tmp);
        const obj = closure_1_0(closure_1_2[12]);
      }
    };
    obj3[6] = token(application[13]).Colors.RED;
    token(application[11]).show(obj3);
  }, items);
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  _require = undefined;
  const memo = obj1.useMemo(() => {
    let obj = token(application[14]);
    obj = { id: lib.application_id, icon: null, size: null, botIconFirst: false };
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    obj[1] = icon;
    obj[2] = lib(application[15]).getIconSize(token(application[15]).Sizes.LARGE);
    return obj.getApplicationIconSource(obj);
  }, items1);
  _require = str((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c4 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_1 = tmp3;
      v0(closure_0);
      c3 = 1;
      obj1 = token(application[16]);
      obj1 = { connection_visible: null };
      obj1[0] = closure_0;
      yield obj1.updateApplicationIdentityConfig(closure_0.application_id, closure_0.provider_issued_user_id, obj1);
      if (1 === tmp7) {
        c3 = 0;
        const profile = closure_0.profile;
        let connection_visible;
        if (profile != null) {
          connection_visible = profile.connection_visible;
        }
        v0(true === connection_visible);
        v0 = 3;
        const tmp9 = v0;
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
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
    obj = { accessible: true, accessibilityLabel: null, style: null, size: null, source: null, disableColor: true };
    obj[1] = application.name;
    const items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj[2] = items3;
    obj[3] = token(tmp3[15]).Sizes.LARGE;
    obj[4] = memo;
    const tmp15 = token(tmp3[15]);
    obj = { spacing: 8, direction: "horizontal", align: "center", children: null };
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, disabled: null, children: null };
    let intl2 = tmp2(tmp3[7]).intl;
    obj1[1] = intl2.string(tmp2(tmp3[7]).t["DT39A+"]);
    obj1[2] = callback;
    obj1[3] = { top: 5, left: 5, bottom: 5, right: 5 };
    obj1[4] = null == token;
    let obj2 = { style: null, source: null };
    obj2[0] = legacyClassComponentStyles.deleteConnectionIcon;
    const tmp16 = callback2(token(tmp3[15]), obj);
    obj2[1] = token(tmp3[19]);
    obj1[5] = callback2(token(tmp3[15]), obj2);
    obj[3] = callback2(tmp2(tmp3[18]).PressableOpacity, obj1);
    let obj3 = { style: null, children: null };
    obj3[0] = legacyClassComponentStyles.container;
    const obj4 = { style: null, children: null };
    obj4[0] = legacyClassComponentStyles.connectedAccountItem;
    const obj5 = { style: null, children: null };
    obj5[0] = legacyClassComponentStyles.connectedAccountTopContainer;
    const tmp17 = token(tmp3[15]);
    const obj6 = { label: null, icon: null, trailing: null };
    obj6[0] = application.name;
    obj6[1] = tmp16;
    obj6[2] = callback2(tmp2(tmp3[17]).Stack, obj);
    obj5[1] = callback2(tmp2(tmp3[20]).TableRow, obj6);
    const items4 = [callback2(View, obj5), ];
    const obj7 = { style: null, children: null };
    obj7[0] = { marginVertical: 8 };
    const obj8 = { label: null, value: null, onValueChange: null };
    let intl3 = tmp2(tmp3[7]).intl;
    obj8[0] = intl3.string(tmp2(tmp3[7]).t.f7yOAX);
    obj8[1] = tmp6;
    obj8[2] = tmp12;
    obj7[1] = callback2(tmp2(tmp3[21]).TableSwitchRow, obj8);
    items4[1] = callback2(View, obj7);
    obj4[1] = items4;
    obj3[1] = callback3(View, obj4);
    return callback2(View, obj3);
  }
  const tmp5 = callback(React.useState(flag), 2);
};