// === Module 12710: GuildTemplates ===

// Module 12710 (GuildTemplates)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import ListSelectionItemDefault from "ListSelectionItem" /* 12324 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12683 */;
import CreateGuildIcons from "CreateGuildIcons" /* 12711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildTemplatesHeader() {
  const tmp = closure_16();
  let obj = { style: tmp.headerContainer, children: null };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["5HZu07"]);
  const items = [closure_1_14(Text_Text.Text, obj), ];
  obj = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t["/k/L/j"]);
  items[1] = closure_1_14(Text_Text.Text, obj);
  obj.children = items;
  return __initData(hasOwnProperty, obj);
}
function GuildTemplatesJoinFooter(trigger) {
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp = closure_16();
  let obj = trigger(1483);
  dependencyMap = obj.useNavigation();
  if (trigger === constants3.NUF) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.INo2NK);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.riOUtB);
  }
  const items = [onHeightChange];
  obj = {
    style: null,
    onLayout: noop.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items),
    children: null
  };
  const items1 = [tmp.footerSafeAreaContainer, { paddingBottom: onHeightChange(1611)().bottom }];
  obj.style = items1;
  obj = { style: tmp.footerContainer, children: null };
  const obj1 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1114).intl;
  obj1.children = intl3.string(trigger(1114).t["N+Mi/U"]);
  const items2 = [
    closure_14(trigger(4556).Text, obj1),
    closure_14(trigger(4975).Button, {
      variant: "primary",
      grow: true,
      text: stringResult,
      onPress() {
        if (constants3.NUF === trigger) {
          let obj = NewUserAnalyticsUtils;
          obj.trackNUFStep(constants4.STEP_GUILD_TEMPLATE, constants4.STEP_GUILD_JOIN, { skip: false });
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED);
        } else if (tmp2.IN_APP === tmp) {
          obj = { location_section: constants6.CREATE_JOIN_GUILD_MODAL };
          AnalyticsUtilsDefault.track(constants5.JOIN_GUILD_VIEWED, obj);
        }
        closure_2.push(constants2.JOIN_SERVER, {});
      }
    })
  ];
  obj.children = items2;
  obj.children = closure_15(closure_5, obj);
  return closure_14(closure_5, obj);
}
function GuildTemplatesItem(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: CreateGuildIcons.GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  };
  return closure_1_14(ListSelectionItemDefault, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
let CreateGuildConstants = fn(12707);
({ getGuildTemplatesMap: closure_7, GuildTemplateId: closure_8 } = CreateGuildConstants);
CreateGuildConstants = fn(6980);
({ CreateGuildModalStates: closure_9, GuildTemplateTriggers: c10, NUXGuildTemplatesAnalytics: closure_11 } = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, AnalyticsLocations: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, contentContainer: null, scrollContainer: null, sections: null, headerContainer: null, headerTitle: null, headerDescription: null, footerSafeAreaContainer: null, footerContainer: null, footerTitle: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT };
createStyles.contentContainer = createStyles;
createStyles.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj1 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
createStyles.headerContainer = { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 };
createStyles.headerTitle = { textAlign: "center", marginBottom: 8 };
createStyles.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
createStyles.footerSafeAreaContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
createStyles.footerContainer = { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" };
createStyles.footerTitle = { alignSelf: "center", textAlign: "center" };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default function GuildTemplates(trigger) {
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  noop = undefined;
  function onGuildTemplatePress(guildTemplate) {
    let obj = { guildTemplate, trigger };
    closure_3.push(constants2.CREATION_INTENT, obj);
    if (trigger === constants3.IN_APP) {
      obj = { template_name: guildTemplate.id };
      AnalyticsUtilsDefault.track(constants5.GUILD_TEMPLATE_SELECTED, obj);
    }
  }
  const tmp = closure_16();
  let obj = trigger(fromStep[12]);
  _slicedToArray = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = noop.useEffect(() => {
    if (constants3.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      if (fromStep == null) {
        STEP_REGISTRATION = constants4.STEP_REGISTRATION;
      }
      NewUserAnalyticsUtils.trackNUFStep(STEP_REGISTRATION, constants4.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      AnalyticsUtilsDefault.track(constants5.OPEN_MODAL, obj);
    }
  }, items);
  const first = _slicedToArray(noop.useState(closure_7()), 1)[0];
  [tmp5, c4] = _slicedToArray(noop.useState(110), 2);
  const callback = noop.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  const rect = { top: true, left: true, right: true, style: null, children: null };
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  rect.style = items1;
  obj = { style: tmp.flex, children: null };
  obj = { style: tmp.scrollContainer, contentContainerStyle: null, children: null };
  const tmp4 = _slicedToArray(noop.useState(110), 2);
  obj.contentContainerStyle = { paddingBottom: tmp5 + _location(fromStep[13])().bottom + 16 };
  const items2 = [closure_14(GuildTemplatesHeader, {}), ];
  let obj2 = { style: tmp.sections, children: null };
  let obj3 = { hasIcons: true, children: closure_14(GuildTemplatesItem, { guildTemplate: first[constants.CREATE], onGuildTemplatePress }) };
  const items3 = [closure_14(trigger(fromStep[20]).TableRowGroup, obj3), ];
  const obj5 = { title: null, hasIcons: true, children: null };
  const intl = trigger(fromStep[11]).intl;
  obj5.title = intl.string(trigger(fromStep[11]).t.JGDkfg);
  const items4 = [closure_14(GuildTemplatesItem, { guildTemplate: first[constants.GAMING], onGuildTemplatePress }), closure_14(GuildTemplatesItem, { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress }), closure_14(GuildTemplatesItem, { guildTemplate: first[constants.STUDY], onGuildTemplatePress }), closure_14(GuildTemplatesItem, { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress }), closure_14(GuildTemplatesItem, { guildTemplate: first[constants.CREATORS], onGuildTemplatePress }), closure_14(GuildTemplatesItem, { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress })];
  obj5.children = items4;
  items3[1] = closure_15(trigger(fromStep[20]).TableRowGroup, obj5);
  obj2.children = items3;
  items2[1] = closure_15(closure_5, obj2);
  obj.children = items2;
  const items5 = [closure_15(closure_6, obj), closure_14(GuildTemplatesJoinFooter, { trigger, onHeightChange: callback })];
  obj.children = items5;
  rect.children = closure_15(closure_5, obj);
  return closure_14(trigger(fromStep[19]).SafeAreaPaddingView, rect);
};