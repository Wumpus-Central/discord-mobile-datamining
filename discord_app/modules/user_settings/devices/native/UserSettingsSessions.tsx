// discord_app/modules/user_settings/devices/native/UserSettingsSessions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import _modDef10308 from "../../../../../_runtime/metro/10308__.js";
import _modDef12506 from "../../../../../_runtime/metro/12506__.js";
import AuthSessionsActionCreators from "../../../auth_sessions/AuthSessionsActionCreators.tsx";
import _modDef15168 from "../../../../../_runtime/metro/15168__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

const _modDef7188 = tmp10(7188);
require = fn;
function UserSettingsSessions() {
  const tmp = closure_13();
  let authSessions = otherSessions(14886).useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  const obj = otherSessions(14886);
  const items = [UserStore];
  const stateFromStores = otherSessions(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = otherSessions(504);
  [tmp7, importDefault] = noop.useState(false);
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
      const obj3 = { style: tmp.loading, children: closure_10(closure_5, {}) };
      tmp16 = closure_10(closure_6, obj3);
    }
    let tmp20Result2 = tmp16;
  } else {
    const obj4 = { spacing: 24, style: tmp.list, children: null };
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl5 = otherSessions(1115).intl;
    obj5.title = intl5.string(otherSessions(1115).t.LLS19o);
    let tmp21Result = null;
    if (null != currentSession) {
      const obj6 = { session: currentSession, current: true };
      tmp21Result = closure_10(SessionInfo, obj6);
    }
    obj5.children = tmp21Result;
    const items1 = [closure_10(otherSessions(5857).TableRowGroup, obj5), ,];
    if (otherSessions.length > 0) {
      const obj7 = { title: null, hasIcons: true, children: null };
      const intl = otherSessions(1115).intl;
      obj7.title = intl.string(otherSessions(1115).t.xx1MWc);
      const items2 = [
        otherSessions.map((session) => closure_1_10(SessionInfo, { session }, session.id_hash)),
        closure_10(UnknownLegacySessionsInfo, {}),
      ];
      obj7.children = items2;
      let tmp20Result = closure_11(otherSessions(5857).TableRowGroup, obj7);
    } else {
      let mfaEnabled;
      if (stateFromStores != null) {
        mfaEnabled = stateFromStores.mfaEnabled;
      }
      tmp20Result = null;
    }
    items1[1] = tmp20Result;
    let tmp21Result2 = null;
    if (otherSessions.length > 0) {
      const obj8 = { start: true, end: true, variant: "danger", label: null, subLabel: null, onPress: null };
      const intl2 = otherSessions(1115).intl;
      obj8.label = intl2.string(otherSessions(1115).t.cLmmeY);
      const intl3 = otherSessions(1115).intl;
      obj8.subLabel = intl3.string(otherSessions(1115).t.OTXyaf);
      obj8.onPress = function onPress() {
        return AuthSessionsActionCreators.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
      };
      tmp21Result2 = closure_10(otherSessions(5775).TableRow, obj8);
    }
    items1[2] = tmp21Result2;
    obj4.children = items1;
    tmp20Result2 = closure_11(otherSessions(5142).Stack, obj4);
  }
  const obj9 = { style: tmp.container, children: null };
  const obj10 = { bottom: true, children: null };
  const obj11 = { variant: "text-sm/medium", style: tmp.description, children: null };
  const intl4 = otherSessions(1115).intl;
  obj11.children = intl4.string(otherSessions(1115).t.zZp618);
  const items3 = [closure_10(otherSessions(4718).Text, obj11), tmp20Result2];
  obj10.children = items3;
  obj9.children = closure_11(otherSessions(7319).SafeAreaPaddingView, obj10);
  return closure_10(closure_7, obj9);
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
              const obj2 = { text: os, iconSource: _modDef10308, IconComponent: session(15169).VrHeadsetIcon };
              let tmp9 = session;
              let obj = obj2;
            } else {
              obj = { text: os, iconSource: _modDef15168, IconComponent: session(9121).ScreenIcon };
              tmp9 = session;
            }
          }
        }
        const obj3 = { text: os, iconSource: _modDef10308, IconComponent: session(7154).MobilePhoneIcon };
        tmp9 = session;
        obj = obj3;
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        formatDateResult = tmp9(14886).formatDate(session.approx_last_used_time);
        const tmp9Result = tmp9(14886);
      }
      const items = [text, platform];
      const found = items.filter(tmp9(1370).isNotNullish);
      let tmp18 = null;
      if (!current) {
        const obj4 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          hitSlop: null,
          children: null,
        };
        const intl2 = tmp9(1115).intl;
        obj4.accessibilityLabel = intl2.string(tmp9(1115).t.E4MJNt);
        obj4.onPress = function onPress() {
          return AuthSessionsActionCreators.logOutSessions(session.id_hash);
        };
        obj4.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
        const obj5 = { style: tmp.logoutButton, source: _modDef7188 };
        obj4.children = closure_10(tmp9(1177).Icon, obj5);
        tmp18 = closure_10(tmp9(5292).PressableOpacity, obj4);
      }
      const obj6 = { style: tmp.sessionInfo, accessible: true, children: null };
      const obj7 = { style: tmp.sessionInfoRow, children: null };
      const obj8 = { variant: "text-md/semibold", children: found[0] };
      const items1 = [closure_10(tmp9(4718).Text, obj8)];
      let tmp22Result = found.length > 1;
      if (tmp22Result) {
        const obj9 = { children: null };
        const obj10 = {
          variant: "text-md/semibold",
          accessibilityLabel: ",",
          style: tmp.sessionInfoRowSpacing,
          children: "\u00B7",
        };
        const items2 = [closure_10(tmp9(4718).Text, obj10)];
        const obj11 = { variant: "text-md/semibold", children: found[1] };
        items2[1] = closure_10(tmp9(4718).Text, obj11);
        obj9.children = items2;
        tmp22Result = closure_11(closure_12, obj9);
      }
      items1[1] = tmp22Result;
      obj7.children = items1;
      obj6.children = closure_11(closure_6, obj7);
      const obj12 = { icon: null, label: null, subLabel: null, trailing: null };
      const obj13 = { source: iconSource, IconComponent };
      obj12.icon = closure_10(tmp9(5775).TableRow.Icon, obj13);
      obj12.label = closure_10(closure_6, obj6);
      let tmp20Result3 = null != _location;
      if (tmp20Result3) {
        const obj14 = { style: tmp.sessionInfoRow, children: null };
        const obj15 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
        obj14.children = closure_10(tmp9(4718).Text, obj15);
        tmp20Result3 = closure_10(closure_6, obj14);
      }
      const items3 = [tmp20Result3];
      let tmp20Result4 = null != formatDateResult;
      if (tmp20Result4) {
        const obj16 = { style: tmp.sessionInfoRow, children: null };
        const obj17 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          style: tmp.detailsText,
          children: formatDateResult,
        };
        obj16.children = closure_10(tmp9(4718).Text, obj17);
        tmp20Result4 = closure_10(closure_6, obj16);
      }
      const obj18 = { accessible: true, children: null };
      items3[1] = tmp20Result4;
      obj18.children = items3;
      obj12.subLabel = closure_11(closure_6, obj18);
      obj12.trailing = tmp18;
      return closure_10(tmp9(5775).TableRow, obj12);
    }
  }
  const obj19 = { text: null, iconSource: null, IconComponent: null };
  const intl = session(1115).intl;
  obj19.text = intl.string(session(1115).t.cDHCNY);
  obj19.iconSource = _modDef15168;
  obj19.IconComponent = session(9121).ScreenIcon;
  tmp9 = session;
  obj = obj19;
}
function UnknownLegacySessionsInfo() {
  _require = require("useNavigation").useNavigation();
  const obj2 = { icon: null, label: null, subLabel: null };
  const obj = require("useNavigation");
  obj2.icon = closure_10(require("TableRow").TableRow.Icon, { variant: "translucent", source: _modDef12506 });
  const intl = require("util").intl;
  obj2.label = intl.string(require("util").t.iUa0sn);
  const intl2 = require("util").intl;
  obj2.subLabel = intl2.format(require("util").t["044+8i"], {
    onClick() {
      UserSettingsModalActionCreatorsDefault.setSection(constants.ACCOUNT);
      closure_0.push(constants.ACCOUNT);
    },
  });
  return closure_10(require("TableRow").TableRow, obj2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ UserSettingsSections: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 },
  detailsText: null,
  container: null,
  loading: null,
  sessionInfo: null,
  sessionInfoRow: null,
  sessionInfoRowSpacing: null,
  logoutButton: null,
  list: null,
};
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3.fontWeight = "500";
obj2.detailsText = obj3;
obj2.container = { display: "flex", flex: 1 };
obj2.loading = { marginTop: 16 };
obj2.sessionInfo = { display: "flex" };
obj2.sessionInfoRow = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
obj2.sessionInfoRowSpacing = { marginHorizontal: 4 };
obj2.logoutButton = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.list = { paddingHorizontal: 16 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return closure_1_10(UserSettingsSessions, {});
}
