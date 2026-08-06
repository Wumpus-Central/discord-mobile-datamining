// discord_app/modules/create_guild/native/components/CreationIntent.tsx
import set from "set";
import get_ActivityIndicator from "ListSelectionItem";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { AccountAgeTier10LargeBadge } from "../../../../design/assets/native.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { TableRowGroupTitle } from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { SCREEN_READER_ENABLED_GETTER } from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: error, NUXGuildTemplatesAnalytics: metroImportAll } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: c9, AnalyticsLocations: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { contentContainer: null, scrollContainer: null, headerContainer: null, headerTitle: null, headerDescription: null, sections: null, skipDescription: null };
createCacheKey = { flex: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
createCacheKey[4] = { lineHeight: 18, textAlign: "center" };
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[5] = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[6] = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_14 = Math.random() < 0.5;
let obj2 = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
let result = require("NUXGuildTemplatesAnalytics").fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  let require;
  let trigger;
  ({ guildTemplate: require, trigger } = arg0);
  let dependencyMap;
  let isScreenReaderEnabled;
  let ref;
  function onPress(isCommunityIntent) {
    let obj = trigger(arr[12]);
    obj = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj[1] = flag;
    obj.track(outer1_9.GUILD_CREATION_INTENT_SELECTED, obj);
    obj = { guildTemplate: closure_0, isCommunityIntent };
    arr = arr.push(outer1_6.CREATE_SERVER, obj);
    if (outer1_7.NUF === trigger) {
      let obj3 = outer1_0(tmp2[11]);
      obj3.trackNUFStep(outer1_8.STEP_CREATION_INTENT, outer1_8.STEP_GUILD_CREATE, { skip: false });
      let tmpResult = tmp(tmp2[12]);
      let id;
      if (tmp5 != null) {
        id = tmp5.id;
      }
      const obj1 = { guild_template_name: null };
      obj1[0] = id;
      tmpResult.track(tmp3.CREATE_GUILD_VIEWED, obj1);
    } else if (tmp8.IN_APP === tmp7) {
      tmpResult = tmp(tmp2[12]);
      const obj2 = { type: "Create Guild Step 2", location_section: null };
      obj2[1] = outer1_10.CREATE_JOIN_GUILD_MODAL;
      tmpResult.track(tmp3.OPEN_MODAL, obj2);
      obj3 = { location_section: null, guild_template_name: null };
      obj3[0] = outer1_10.CREATE_JOIN_GUILD_MODAL;
      let id1;
      if (tmp5 != null) {
        id1 = tmp5.id;
      }
      obj3[1] = id1;
      tmp(tmp2[12]).track(tmp3.CREATE_GUILD_VIEWED, obj3);
      const tmpResult1 = tmp(tmp2[12]);
    }
  }
  let tmp = createCacheKey();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  let obj1 = SCREEN_READER_ENABLED_GETTER;
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = outer1_0(arr[10]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (outer1_7.NUF === trigger) {
      outer1_0(arr[11]).trackNUFStep(outer1_8.STEP_GUILD_TEMPLATE, outer1_8.STEP_CREATION_INTENT, { skip: false });
      const obj2 = outer1_0(arr[11]);
    } else if (tmp2.IN_APP === tmp) {
      trigger(arr[12]).track(outer1_9.OPEN_MODAL, { type: "Server Intent Discovery" });
      const obj = trigger(arr[12]);
    }
  }, items1);
  obj = { top: true, style: tmp.contentContainer, children: null };
  obj = { style: tmp.scrollContainer, children: null };
  obj1 = { style: tmp.headerContainer, children: null };
  let obj2 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj2[5] = intl.string(getSystemLocale.t.f3MvGS);
  const items2 = [callback(Text.Text, obj2), ];
  let obj3 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj3[3] = intl2.string(getSystemLocale.t.nOzc7w);
  items2[1] = callback(Text.Text, obj3);
  obj1[1] = items2;
  const items3 = [callback2(ref, obj1), , ];
  const obj4 = { style: tmp.sections, children: null };
  const obj5 = { hasIcons: true, children: null };
  const tmp13 = trigger(11614);
  const obj6 = { Icon: null, message: null, onPress: null };
  const tmp14 = AccountAgeTier10LargeBadge;
  if (closure_14) {
    obj6[0] = tmp14.ChairIllocon;
    const intl5 = tmp2(1236).intl;
    obj6[1] = intl5.string(tmp2(1236).t.uE7zcu);
    obj6[2] = function onPress() {
      onPress(false);
    };
    const items4 = [tmp8(tmp13, obj6), ];
    const obj7 = { Icon: null, message: null, onPress: null };
    let tmp12Result = tmp12(11614);
    obj7[0] = tmp2(5948).WorldIllocon;
    const intl6 = tmp2(1236).intl;
    obj7[1] = intl6.string(tmp2(1236).t.h9Q1lG);
    obj7[2] = function onPress() {
      onPress(true);
    };
    items4[1] = tmp8(tmp12Result, obj7);
    obj5[1] = items4;
    let tmp16 = obj5;
  } else {
    obj6[0] = tmp14.WorldIllocon;
    const intl3 = tmp2(1236).intl;
    obj6[1] = intl3.string(tmp2(1236).t.h9Q1lG);
    obj6[2] = function onPress() {
      onPress(true);
    };
    const items5 = [tmp8(tmp13, obj6), ];
    const obj8 = { Icon: null, message: null, onPress: null };
    tmp12Result = tmp12(11614);
    obj8[0] = tmp2(5948).ChairIllocon;
    const intl4 = tmp2(1236).intl;
    obj8[1] = intl4.string(tmp2(1236).t.uE7zcu);
    obj8[2] = function onPress() {
      onPress(false);
    };
    items5[1] = tmp8(tmp12Result, obj8);
    obj5[1] = items5;
    tmp16 = obj5;
  }
  obj4[1] = callback2(TableRowGroupTitle.TableRowGroup, tmp16);
  items3[1] = callback(ref, obj4);
  const obj9 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = tmp2(1236).intl;
  obj9[3] = intl7.format(getSystemLocale.t["SMc+Gz"], {
    onSkip(arg0) {
      onPress(null);
    }
  });
  items3[2] = callback(Text.Text, obj9);
  obj[1] = items3;
  obj[2] = callback2(onPress, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};