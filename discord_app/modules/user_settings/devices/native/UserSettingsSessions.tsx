// discord_app/modules/user_settings/devices/native/UserSettingsSessions.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/07764_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10147_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/11831_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/14556_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
function UserSettingsSessions() {
  const tmp = callback4();
  let obj = otherSessions(14325);
  let authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  obj1 = otherSessions(589);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, importDefault] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const authSessions = otherSessions(closure_1_2[11]).fetchAuthSessions();
    const timeout = setTimeout(() => callback(true), 500);
    return () => {
      clearTimeout(closure_0);
      otherSessions(closure_2_2[11]).clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp16 = null;
    if (tmp7) {
      obj = { style: null, children: null };
      obj[0] = tmp.loading;
      obj[1] = callback2(closure_5, {});
      tmp16 = callback2(closure_6, obj);
    }
    let tmp20Result = tmp16;
  } else {
    obj = { spacing: 24, style: null, children: null };
    obj[1] = tmp.list;
    obj1 = { title: null, hasIcons: true, children: null };
    const intl5 = tmp2(1236).intl;
    obj1[0] = intl5.string(tmp2(1236).t.LLS19o);
    let tmp21Result = null;
    if (null != currentSession) {
      const obj2 = { session: null, current: true };
      obj2[0] = currentSession;
      tmp21Result = tmp21(SessionInfo, obj2);
    }
    obj1[2] = tmp21Result;
    const items1 = [callback2(tmp2(5992).TableRowGroup, obj1), , ];
    if (otherSessions.length > 0) {
      const obj3 = { title: null, hasIcons: true, children: null };
      const intl = tmp2(1236).intl;
      obj3[0] = intl.string(tmp2(1236).t.xx1MWc);
      const items2 = [otherSessions.map((id_hash) => callback(closure_15, { session: id_hash }, id_hash.id_hash)), tmp21(UnknownLegacySessionsInfo, {})];
      obj3[2] = items2;
      tmp20Result = tmp20(tmp2(5992).TableRowGroup, obj3);
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
      const intl2 = tmp2(1236).intl;
      obj4[3] = intl2.string(tmp2(1236).t.cLmmeY);
      const intl3 = tmp2(1236).intl;
      obj4[4] = intl3.string(tmp2(1236).t.OTXyaf);
      obj4[5] = function onPress() {
        return otherSessions(closure_1_2[11]).logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
      };
      tmp21Result = tmp21(tmp2(5599).TableRow, obj4);
    }
    items1[2] = tmp21Result;
    obj[2] = items1;
    tmp20Result = tmp20(tmp2(4926).Stack, obj);
  }
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { bottom: true, children: null };
  const obj7 = { variant: "text-sm/medium", style: tmp.description, children: null };
  const intl4 = tmp2(1236).intl;
  obj7[2] = intl4.string(otherSessions(1236).t.zZp618);
  const items3 = [callback2(otherSessions(4474).Text, obj7), tmp20Result];
  obj6[1] = items3;
  obj5[1] = callback3(otherSessions(5553).SafeAreaPaddingView, obj6);
  return callback2(closure_7, obj5);
}
function SessionInfo(session) {
  session = session.session;
  const current = session.current;
  const tmp = callback4();
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
              let obj = { text: null, iconSource: null, IconComponent: null };
              obj[0] = os;
              obj[1] = registerAssetDefault2;
              obj[2] = session(14557).VrHeadsetIcon;
              let tmp9 = session;
              let tmp10 = importDefault;
            } else {
              obj = { text: null, iconSource: null, IconComponent: null };
              obj[0] = os;
              obj[1] = registerAssetDefault4;
              obj[2] = session(12636).ScreenIcon;
              tmp9 = session;
              tmp10 = importDefault;
            }
          }
        }
        obj = { text: null, iconSource: null, IconComponent: null };
        obj[0] = os;
        obj[1] = registerAssetDefault2;
        obj[2] = session(7733).MobilePhoneIcon;
        tmp9 = session;
        tmp10 = importDefault;
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        formatDateResult = tmp9(14325).formatDate(session.approx_last_used_time);
        const tmp9Result = tmp9(14325);
      }
      const items = [text, platform];
      const found = items.filter(tmp9(1471).isNotNullish);
      let tmp18 = null;
      if (!current) {
        obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
        const intl2 = tmp9(1236).intl;
        obj1[1] = intl2.string(tmp9(1236).t.E4MJNt);
        obj1[2] = function onPress() {
          return session(closure_1_2[11]).logOutSessions(session.id_hash);
        };
        obj1[3] = { top: 5, left: 5, bottom: 5, right: 5 };
        const obj2 = { style: null, source: null };
        obj2[0] = tmp.logoutButton;
        obj2[1] = registerAssetDefault;
        obj1[4] = callback2(tmp9(1297).Icon, obj2);
        tmp18 = callback2(tmp9(5068).PressableOpacity, obj1);
      }
      const obj3 = { style: null, accessible: true, children: null };
      obj3[0] = tmp.sessionInfo;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.sessionInfoRow;
      const obj5 = { variant: "text-md/semibold", children: null };
      obj5[1] = found[0];
      const items1 = [callback2(tmp9(4474).Text, obj5), ];
      let tmp22Result = found.length > 1;
      if (tmp22Result) {
        const obj6 = { children: null };
        const obj7 = { variant: "text-md/semibold", accessibilityLabel: ",", style: null, children: "\u00B7" };
        obj7[2] = tmp.sessionInfoRowSpacing;
        const items2 = [tmp20(tmp9(4474).Text, obj7), ];
        const obj8 = { variant: "text-md/semibold", children: null };
        obj8[1] = found[1];
        items2[1] = tmp20(tmp9(4474).Text, obj8);
        obj6[0] = items2;
        tmp22Result = tmp22(closure_12, obj6);
      }
      items1[1] = tmp22Result;
      obj4[1] = items1;
      obj3[2] = closure_11(closure_6, obj4);
      let tmp20Result = tmp20(tmp21, obj3);
      const obj9 = { icon: null, label: null, subLabel: null, trailing: null };
      const obj10 = { source: null, IconComponent: null };
      obj10[0] = iconSource;
      obj10[1] = IconComponent;
      obj9[0] = callback2(tmp9(5599).TableRow.Icon, obj10);
      obj9[1] = tmp20Result;
      tmp20Result = null != _location;
      if (tmp20Result) {
        const obj11 = { style: null, children: null };
        obj11[0] = tmp.sessionInfoRow;
        const obj12 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj12[2] = tmp.detailsText;
        obj12[3] = _location;
        obj11[1] = tmp20(tmp9(4474).Text, obj12);
        tmp20Result = tmp20(tmp21, obj11);
      }
      const items3 = [tmp20Result, ];
      let tmp20Result1 = null != formatDateResult;
      if (tmp20Result1) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.sessionInfoRow;
        const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj14[2] = tmp.detailsText;
        obj14[3] = formatDateResult;
        obj13[1] = tmp20(tmp9(4474).Text, obj14);
        tmp20Result1 = tmp20(tmp21, obj13);
      }
      const obj15 = { accessible: true, children: null };
      items3[1] = tmp20Result1;
      obj15[1] = items3;
      obj9[2] = closure_11(closure_6, obj15);
      obj9[3] = tmp18;
      return callback2(tmp9(5599).TableRow, obj9);
    }
  }
  const obj16 = { text: null, iconSource: null, IconComponent: null };
  const intl = session(1236).intl;
  obj16[0] = intl.string(session(1236).t.cDHCNY);
  obj16[1] = registerAssetDefault4;
  obj16[2] = session(12636).ScreenIcon;
  tmp9 = session;
  tmp10 = importDefault;
  obj = obj16;
}
function UnknownLegacySessionsInfo() {
  let obj = useNavigation;
  _require = obj.useNavigation();
  obj = { icon: null, label: null, subLabel: null };
  obj = { variant: "translucent", source: registerAssetDefault3 };
  obj[0] = callback2(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow.Icon, obj);
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx").t.iUa0sn);
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl2.format(require("../../../../intl/index.native.tsx").t["044+8i"], {
    onClick() {
      closure_1_1(closure_1_2[24]).setSection(closure_1_9.ACCOUNT);
      const obj = closure_1_1(closure_1_2[24]);
    }
  });
  return callback2(require("../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj);
}
({ ActivityIndicator: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ UserSettingsSections: c9, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 }, detailsText: null, container: null, loading: null, sessionInfo: null, sessionInfoRow: null, sessionInfoRowSpacing: null, logoutButton: null, list: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey.fontWeight = "500";
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flex: 1 };
createCacheKey[3] = { marginTop: 16 };
createCacheKey[4] = { display: "flex" };
createCacheKey[5] = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
createCacheKey[6] = { marginHorizontal: 4 };
createCacheKey[7] = { marginRight: 10, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[8] = { paddingHorizontal: 16 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginRight: 10, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return callback2(UserSettingsSessions, {});
};