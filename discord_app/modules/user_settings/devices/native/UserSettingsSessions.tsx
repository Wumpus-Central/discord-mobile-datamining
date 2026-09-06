// === Module 14948: UserSettingsSessions ===

// Module 14948 (UserSettingsSessions)
import nativeDefault from "native" /* 576 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import _modDef10064 from "module_10064" /* 10064 */;
import _modDef12264 from "module_12264" /* 12264 */;
import AuthSessionsActionCreators from "AuthSessionsActionCreators" /* 14949 */;
import _modDef14950 from "module_14950" /* 14950 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

const _modDef6992 = tmp10(6992);
require = fn;
function UserSettingsSessions() {
  const tmp = closure_13();
  let obj = otherSessions(14671);
  let authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  let obj1 = otherSessions(504);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, importDefault] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const authSessions = otherSessions(dependencyMap[11]).fetchAuthSessions();
    const timeout = setTimeout(() => closure_1_1(true), 500);
    return () => {
      clearTimeout(closure_0);
      AuthSessionsActionCreators.clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp16 = null;
    if (tmp7) {
      obj = { style: tmp.loading, children: closure_10(closure_5, {}) };
      tmp16 = closure_10(closure_6, obj);
    }
    let tmp20Result = tmp16;
  } else {
    obj = { spacing: 24, style: tmp.list, children: null };
    obj1 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp2(1114).intl;
    obj1.title = intl5.string(tmp2(1114).t.LLS19o);
    let tmp21Result = null;
    if (null != currentSession) {
      const obj2 = { session: currentSession, current: true };
      tmp21Result = tmp21(SessionInfo, obj2);
    }
    obj1.children = tmp21Result;
    const items1 = [closure_10(tmp2(5687).TableRowGroup, obj1), , ];
    if (otherSessions.length > 0) {
      const obj3 = { title: null, hasIcons: true, children: null };
      const intl = tmp2(1114).intl;
      obj3.title = intl.string(tmp2(1114).t.xx1MWc);
      const items2 = [otherSessions.map((session) => closure_1_10(SessionInfo, { session }, session.id_hash)), tmp21(UnknownLegacySessionsInfo, {})];
      obj3.children = items2;
      tmp20Result = tmp20(tmp2(5687).TableRowGroup, obj3);
    } else {
      let mfaEnabled;
      if (stateFromStores != null) {
        mfaEnabled = stateFromStores.mfaEnabled;
      }
      tmp20Result = null;
    }
    items1[1] = tmp20Result;
    tmp21Result = null;
    if (otherSessions.length > 0) {
      const obj4 = { start: true, end: true, variant: "danger", label: null, subLabel: null, onPress: null };
      const intl2 = tmp2(1114).intl;
      obj4.label = intl2.string(tmp2(1114).t.cLmmeY);
      const intl3 = tmp2(1114).intl;
      obj4.subLabel = intl3.string(tmp2(1114).t.OTXyaf);
      obj4.onPress = function onPress() {
        return AuthSessionsActionCreators.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
      };
      tmp21Result = tmp21(tmp2(5605).TableRow, obj4);
    }
    items1[2] = tmp21Result;
    obj.children = items1;
    tmp20Result = tmp20(tmp2(4973).Stack, obj);
  }
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { bottom: true, children: null };
  const obj7 = { variant: "text-sm/medium", style: tmp.description, children: null };
  const intl4 = tmp2(1114).intl;
  obj7.children = intl4.string(otherSessions(1114).t.zZp618);
  const items3 = [closure_10(otherSessions(4556).Text, obj7), tmp20Result];
  obj6.children = items3;
  obj5.children = closure_11(otherSessions(7123).SafeAreaPaddingView, obj6);
  return closure_10(closure_7, obj5);
}
function SessionInfo(session) {
  session = session.session;
  const current = session.current;
  const tmp = closure_13();
  const client_info = session.client_info;
  let _location;
  if (client_info != null) {
    _location = client_info.location;
  }
  if (_location == null) {
    const client_info2 = session.client_info;
    let ip;
    if (client_info2 != null) {
      ip = client_info2.ip;
    }
    _location = ip;
  }
  const client_info3 = session.client_info;
  if (client_info3 != null) {
    const platform = client_info3.platform;
  }
  const client_info4 = session.client_info;
  let os;
  if (client_info4 != null) {
    os = client_info4.os;
  }
  let trimmed;
  if (os != null) {
    trimmed = os.toLowerCase().trim();
    const str = os.toLowerCase();
  }
  if (null !== trimmed) {
    if (undefined !== trimmed) {
      if ("" !== trimmed) {
        if ("ios" !== trimmed) {
          if ("android" !== trimmed) {
            if ("horizon os" === trimmed) {
              let obj = { text: os, iconSource: _modDef10064, IconComponent: session(14951).VrHeadsetIcon };
              let tmp9 = session;
            } else {
              obj = { text: os, iconSource: _modDef14950, IconComponent: session(8879).ScreenIcon };
              tmp9 = session;
            }
          }
        }
        obj = { text: os, iconSource: _modDef10064, IconComponent: session(6960).MobilePhoneIcon };
        tmp9 = session;
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        formatDateResult = tmp9(14671).formatDate(session.approx_last_used_time);
        const tmp9Result = tmp9(14671);
      }
      const items = [text, platform];
      const found = items.filter(tmp9(1369).isNotNullish);
      let tmp18 = null;
      if (!current) {
        const obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
        const intl2 = tmp9(1114).intl;
        obj1.accessibilityLabel = intl2.string(tmp9(1114).t.E4MJNt);
        obj1.onPress = function onPress() {
          return AuthSessionsActionCreators.logOutSessions(session.id_hash);
        };
        obj1.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
        const obj2 = { style: tmp.logoutButton, source: _modDef6992 };
        obj1.children = closure_10(tmp9(1178).Icon, obj2);
        tmp18 = closure_10(tmp9(5123).PressableOpacity, obj1);
      }
      const obj3 = { style: tmp.sessionInfo, accessible: true, children: null };
      const obj4 = { style: tmp.sessionInfoRow, children: null };
      const obj5 = { variant: "text-md/semibold", children: found[0] };
      const items1 = [closure_10(tmp9(4556).Text, obj5), ];
      let tmp22Result = found.length > 1;
      if (tmp22Result) {
        const obj6 = { children: null };
        const obj7 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp.sessionInfoRowSpacing, children: "\u00B7" };
        const items2 = [tmp20(tmp9(4556).Text, obj7), ];
        const obj8 = { variant: "text-md/semibold", children: found[1] };
        items2[1] = tmp20(tmp9(4556).Text, obj8);
        obj6.children = items2;
        tmp22Result = tmp22(closure_12, obj6);
      }
      items1[1] = tmp22Result;
      obj4.children = items1;
      obj3.children = closure_11(closure_6, obj4);
      let tmp20Result = tmp20(tmp21, obj3);
      const obj9 = { icon: null, label: null, subLabel: null, trailing: null };
      const obj10 = { source: iconSource, IconComponent };
      obj9.icon = closure_10(tmp9(5605).TableRow.Icon, obj10);
      obj9.label = tmp20Result;
      tmp20Result = null != _location;
      if (tmp20Result) {
        const obj11 = { style: tmp.sessionInfoRow, children: null };
        const obj12 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
        obj11.children = tmp20(tmp9(4556).Text, obj12);
        tmp20Result = tmp20(tmp21, obj11);
      }
      const items3 = [tmp20Result, ];
      let tmp20Result1 = null != formatDateResult;
      if (tmp20Result1) {
        const obj13 = { style: tmp.sessionInfoRow, children: null };
        const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: formatDateResult };
        obj13.children = tmp20(tmp9(4556).Text, obj14);
        tmp20Result1 = tmp20(tmp21, obj13);
      }
      const obj15 = { accessible: true, children: null };
      items3[1] = tmp20Result1;
      obj15.children = items3;
      obj9.subLabel = closure_11(closure_6, obj15);
      obj9.trailing = tmp18;
      return closure_10(tmp9(5605).TableRow, obj9);
    }
  }
  const obj16 = { text: null, iconSource: null, IconComponent: null };
  const intl = session(1114).intl;
  obj16.text = intl.string(session(1114).t.cDHCNY);
  obj16.iconSource = _modDef14950;
  obj16.IconComponent = session(8879).ScreenIcon;
  tmp9 = session;
  obj = obj16;
}
function UnknownLegacySessionsInfo() {
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  obj = { icon: null, label: null, subLabel: null };
  obj = { variant: "translucent", source: _modDef12264 };
  obj.icon = closure_10(require("TableRow").TableRow.Icon, obj);
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.iUa0sn);
  const intl2 = require("util").intl;
  obj.subLabel = intl2.format(require("util").t["044+8i"], {
    onClick() {
      UserSettingsModalActionCreatorsDefault.setSection(constants.ACCOUNT);
      closure_0.push(constants.ACCOUNT);
    }
  });
  return closure_10(require("TableRow").TableRow, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 }, detailsText: null, container: null, loading: null, sessionInfo: null, sessionInfoRow: null, sessionInfoRowSpacing: null, logoutButton: null, list: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
createStyles.fontWeight = "500";
createStyles.detailsText = createStyles;
createStyles.container = { display: "flex", flex: 1 };
createStyles.loading = { marginTop: 16 };
createStyles.sessionInfo = { display: "flex" };
createStyles.sessionInfoRow = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
createStyles.sessionInfoRowSpacing = { marginHorizontal: 4 };
createStyles.logoutButton = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.list = { paddingHorizontal: 16 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return closure_1_10(UserSettingsSessions, {});
};