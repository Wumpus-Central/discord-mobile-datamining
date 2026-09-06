// discord_app/modules/create_guild/native/components/CreationIntent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import native from "../../../../design/assets/native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import NewUserAnalyticsUtils from "../../../nuf/native/NewUserAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(6980);
({
  CreateGuildModalStates: metroRequire,
  GuildTemplateTriggers: closure_7,
  NUXGuildTemplatesAnalytics: closure_8,
} = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsLocations: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  contentContainer: null,
  scrollContainer: null,
  headerContainer: null,
  headerTitle: null,
  headerDescription: null,
  sections: null,
  skipDescription: null,
};
createStyles = { flex: 1, marginTop: fn(5682).NAV_BAR_HEIGHT };
createStyles.contentContainer = createStyles;
createStyles.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.headerContainer = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
createStyles.headerTitle = { textAlign: "center", marginBottom: 8 };
createStyles.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj1 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.skipDescription = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
let closure_13 = createStyles.createStyles(createStyles);
let closure_14 = Math.random() < 0.5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  ({ guildTemplate: require, trigger } = arg0);
  function onPress(isCommunityIntent) {
    let obj = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj.is_community = flag;
    obj.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj);
    obj = { guildTemplate, isCommunityIntent };
    closure_2.push(constants.CREATE_SERVER, obj);
    if (constants2.NUF === trigger) {
      let obj3 = NewUserAnalyticsUtils;
      obj3.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, { skip: false });
      let tmpResult = tmp(1242);
      let id;
      if (tmp5 != null) {
        id = tmp5.id;
      }
      const obj1 = { guild_template_name: id };
      tmpResult.track(tmp3.CREATE_GUILD_VIEWED, obj1);
    } else if (tmp8.IN_APP === tmp7) {
      tmpResult = tmp(1242);
      const obj2 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      tmpResult.track(tmp3.OPEN_MODAL, obj2);
      obj3 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL, guild_template_name: null };
      let id1;
      if (tmp5 != null) {
        id1 = tmp5.id;
      }
      obj3.guild_template_name = id1;
      tmp(1242).track(tmp3.CREATE_GUILD_VIEWED, obj3);
      const tmpResult1 = tmp(1242);
    }
  }
  let tmp = closure_13();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  let obj1 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, {
        skip: false,
      });
    } else if (tmp2.IN_APP === tmp) {
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, { type: "Server Intent Discovery" });
    }
  }, items1);
  const rect = { top: true, left: true, right: true, style: tmp.contentContainer, children: null };
  obj = { style: tmp.scrollContainer, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = {
    ref,
    style: tmp.headerTitle,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.f3MvGS);
  const items2 = [closure_11(Text_Text.Text, obj1)];
  let obj2 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.nOzc7w);
  items2[1] = closure_11(Text_Text.Text, obj2);
  obj.children = items2;
  const items3 = [closure_12(ref, obj), ,];
  let obj3 = { style: tmp.sections, children: null };
  const obj4 = { hasIcons: true, children: null };
  const tmp13 = trigger(12324);
  const obj5 = { Icon: null, message: null, onPress: null };
  const tmp14 = native;
  if (closure_14) {
    obj5.Icon = tmp14.ChairIllocon;
    const intl5 = tmp2(1114).intl;
    obj5.message = intl5.string(tmp2(1114).t.uE7zcu);
    obj5.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [tmp8(tmp13, obj5)];
    const obj6 = { Icon: null, message: null, onPress: null };
    let tmp12Result = tmp12(12324);
    obj6.Icon = tmp2(5692).WorldIllocon;
    const intl6 = tmp2(1114).intl;
    obj6.message = intl6.string(tmp2(1114).t.h9Q1lG);
    obj6.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = tmp8(tmp12Result, obj6);
    obj4.children = items4;
    let tmp16 = obj4;
  } else {
    obj5.Icon = tmp14.WorldIllocon;
    const intl3 = tmp2(1114).intl;
    obj5.message = intl3.string(tmp2(1114).t.h9Q1lG);
    obj5.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [tmp8(tmp13, obj5)];
    const obj7 = { Icon: null, message: null, onPress: null };
    tmp12Result = tmp12(12324);
    obj7.Icon = tmp2(5692).ChairIllocon;
    const intl4 = tmp2(1114).intl;
    obj7.message = intl4.string(tmp2(1114).t.uE7zcu);
    obj7.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = tmp8(tmp12Result, obj7);
    obj4.children = items5;
    tmp16 = obj4;
  }
  obj3.children = closure_12(TableRowGroup.TableRowGroup, tmp16);
  items3[1] = closure_11(ref, obj3);
  const obj8 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = tmp2(1114).intl;
  obj8.children = intl7.format(util.t["SMc+Gz"], {
    onSkip() {
      onPress(null);
    },
  });
  items3[2] = closure_11(Text_Text.Text, obj8);
  obj.children = items3;
  rect.children = closure_12(onPress, obj);
  return closure_11(common_SafeAreaView.SafeAreaPaddingView, rect);
}
