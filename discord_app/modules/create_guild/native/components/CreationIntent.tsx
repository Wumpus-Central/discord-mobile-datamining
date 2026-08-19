// discord_app/modules/create_guild/native/components/CreationIntent.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import SCREEN_READER_ENABLED_GETTER from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import NUXGuildTemplatesAnalytics from "../CreateGuildConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: error, NUXGuildTemplatesAnalytics: closure_8 } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: c9, AnalyticsLocations: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { flex: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
createCacheKey[4] = { lineHeight: 18, textAlign: "center" };
createCacheKey[5] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[6] = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let closure_14 = Math.random() < 0.5;
let result = require("obj132").fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  ({ guildTemplate: require, trigger } = arg0);
  function onPress(isCommunityIntent) {
    trigger(arr[12]);
    let obj = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj[1] = flag;
    obj.track(closure_1_9.GUILD_CREATION_INTENT_SELECTED, obj);
    obj = { guildTemplate: user, isCommunityIntent };
    arr = arr.push(closure_1_6.CREATE_SERVER, obj);
    if (closure_1_7.NUF === trigger) {
      let obj3 = require(tmp2[11]);
      obj3.trackNUFStep(closure_1_8.STEP_CREATION_INTENT, closure_1_8.STEP_GUILD_CREATE, { skip: false });
      let tmpResult = trigger(tmp2[12]);
      let id;
      if (user != null) {
        id = user.id;
      }
      obj1 = { guild_template_name: null };
      obj1[0] = id;
      tmpResult.track(closure_1_9.CREATE_GUILD_VIEWED, obj1);
    } else if (tmp8.IN_APP === tmp7) {
      tmpResult = trigger(tmp2[12]);
      const obj2 = { type: "Create Guild Step 2", location_section: null };
      obj2[1] = closure_1_10.CREATE_JOIN_GUILD_MODAL;
      tmpResult.track(closure_1_9.OPEN_MODAL, obj2);
      obj3 = { location_section: null, guild_template_name: null };
      obj3[0] = closure_1_10.CREATE_JOIN_GUILD_MODAL;
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      obj3[1] = id1;
      trigger(tmp2[12]).track(closure_1_9.CREATE_GUILD_VIEWED, obj3);
      const tmpResult1 = trigger(tmp2[12]);
    }
  }
  let tmp = callback3();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  obj1 = SCREEN_READER_ENABLED_GETTER;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      require(arr[10]);
      const obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (closure_1_7.NUF === trigger) {
      require(arr[11]).trackNUFStep(closure_1_8.STEP_GUILD_TEMPLATE, closure_1_8.STEP_CREATION_INTENT, { skip: false });
      const obj2 = require(arr[11]);
    } else if (tmp2.IN_APP === tmp) {
      trigger(arr[12]).track(closure_1_9.OPEN_MODAL, { type: "Server Intent Discovery" });
      const obj = trigger(arr[12]);
    }
  }, items1);
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
  const tmp13 = trigger(11491);
  const obj6 = { Icon: null, message: null, onPress: null };
  const tmp14 = AccountAgeTier10LargeBadge;
  if (closure_14) {
    obj6[0] = tmp14.ChairIllocon;
    const intl5 = getSystemLocale.intl;
    obj6[1] = intl5.string(getSystemLocale.t.uE7zcu);
    obj6[2] = function onPress() {
      onPress(false);
    };
    const items4 = [callback(tmp13, obj6), ];
    const obj7 = { Icon: null, message: null, onPress: null };
    let tmp12Result = trigger(11491);
    obj7[0] = AccountAgeTier10LargeBadge.WorldIllocon;
    const intl6 = getSystemLocale.intl;
    obj7[1] = intl6.string(getSystemLocale.t.h9Q1lG);
    obj7[2] = function onPress() {
      onPress(true);
    };
    items4[1] = callback(tmp12Result, obj7);
    obj5[1] = items4;
    let tmp16 = obj5;
  } else {
    obj6[0] = tmp14.WorldIllocon;
    const intl3 = getSystemLocale.intl;
    obj6[1] = intl3.string(getSystemLocale.t.h9Q1lG);
    obj6[2] = function onPress() {
      onPress(true);
    };
    const items5 = [callback(tmp13, obj6), ];
    const obj8 = { Icon: null, message: null, onPress: null };
    tmp12Result = trigger(11491);
    obj8[0] = AccountAgeTier10LargeBadge.ChairIllocon;
    const intl4 = getSystemLocale.intl;
    obj8[1] = intl4.string(getSystemLocale.t.uE7zcu);
    obj8[2] = function onPress() {
      onPress(false);
    };
    items5[1] = callback(tmp12Result, obj8);
    obj5[1] = items5;
    tmp16 = obj5;
  }
  obj4[1] = callback2(TableRowGroupTitle.TableRowGroup, tmp16);
  items3[1] = callback(ref, obj4);
  const obj9 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = getSystemLocale.intl;
  obj9[3] = intl7.format(getSystemLocale.t["SMc+Gz"], {
    onSkip(contactSyncAccount) {
      onPress(null);
    }
  });
  items3[2] = callback(Text.Text, obj9);
  obj[1] = items3;
  obj[4] = callback2(onPress, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};