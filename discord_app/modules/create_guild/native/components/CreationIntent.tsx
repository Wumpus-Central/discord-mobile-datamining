// === Module 12963: CreationIntent ===

// Module 12963 (CreationIntent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useNavigation from "useNavigation" /* 1484 */;
import Text_Text from "Text/Text" /* 4752 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5171 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5180 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import native from "native" /* 5904 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7363 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12934 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(7218);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7, NUXGuildTemplatesAnalytics: closure_8 } = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsLocations: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { contentContainer: { flex: 1, marginTop: fn(5894).NAV_BAR_HEIGHT }, scrollContainer: null, headerContainer: null, headerTitle: null, headerDescription: null, sections: null, skipDescription: null };
let obj3 = { flex: 1, marginTop: fn(5894).NAV_BAR_HEIGHT };
obj2.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContainer = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.skipDescription = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = Math.random() < 0.5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  ({ guildTemplate: require, trigger } = arg0);
  function onPress(isCommunityIntent) {
    const obj2 = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj2.is_community = flag;
    AnalyticsUtilsDefault.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj2);
    closure_2.push(constants.CREATE_SERVER, { guildTemplate, isCommunityIntent });
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, { skip: false });
      let id;
      if (guildTemplate != null) {
        id = guildTemplate.id;
      }
      const obj5 = { guild_template_name: id };
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj5);
      const tmpResult = AnalyticsUtilsDefault;
    } else if (tmp8.IN_APP === tmp7) {
      const obj6 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, obj6);
      const tmpResult3 = AnalyticsUtilsDefault;
      const obj7 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL, guild_template_name: null };
      let id1;
      if (guildTemplate != null) {
        id1 = guildTemplate.id;
      }
      obj7.guild_template_name = id1;
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj7);
      const tmpResult4 = AnalyticsUtilsDefault;
    }
    const obj3 = { guildTemplate, isCommunityIntent };
  }
  let tmp = closure_13();
  dependencyMap = useNavigation.useNavigation();
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, { type: "Server Intent Discovery" });
    }
  }, items1);
  const rect = { top: true, left: true, right: true, style: tmp.contentContainer, children: null };
  let obj3 = { style: tmp.scrollContainer, children: null };
  let obj4 = { style: tmp.headerContainer, children: null };
  let obj5 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.f3MvGS);
  const items2 = [closure_11(Text_Text.Text, obj5), ];
  let obj6 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.nOzc7w);
  items2[1] = closure_11(Text_Text.Text, obj6);
  obj4.children = items2;
  const items3 = [closure_12(ref, obj4), , ];
  let obj7 = { style: tmp.sections, children: null };
  const obj8 = { hasIcons: true, children: null };
  const tmp13 = trigger(12576);
  const obj9 = { Icon: null, message: null, onPress: null };
  const tmp14 = native;
  if (closure_14) {
    obj9.Icon = tmp14.ChairIllocon;
    const intl5 = util.intl;
    obj9.message = intl5.string(util.t.uE7zcu);
    obj9.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [closure_11(tmp13, obj9), ];
    const obj10 = { Icon: native.WorldIllocon, message: null, onPress: null };
    const intl6 = util.intl;
    obj10.message = intl6.string(util.t.h9Q1lG);
    obj10.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = closure_11(trigger(12576), obj10);
    obj8.children = items4;
    let tmp16 = obj8;
    const tmp12Result = trigger(12576);
  } else {
    obj9.Icon = tmp14.WorldIllocon;
    const intl3 = util.intl;
    obj9.message = intl3.string(util.t.h9Q1lG);
    obj9.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [closure_11(tmp13, obj9), ];
    const obj11 = { Icon: native.ChairIllocon, message: null, onPress: null };
    const intl4 = util.intl;
    obj11.message = intl4.string(util.t.uE7zcu);
    obj11.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = closure_11(trigger(12576), obj11);
    obj8.children = items5;
    tmp16 = obj8;
    const tmp12Result2 = trigger(12576);
  }
  obj7.children = closure_12(TableRowGroup.TableRowGroup, tmp16);
  items3[1] = closure_11(ref, obj7);
  const obj12 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = util.intl;
  obj12.children = intl7.format(util.t["SMc+Gz"], {
    onSkip() {
      onPress(null);
    }
  });
  items3[2] = closure_11(Text_Text.Text, obj12);
  obj3.children = items3;
  rect.children = closure_12(onPress, obj3);
  return closure_11(common_SafeAreaView.SafeAreaPaddingView, rect);
};