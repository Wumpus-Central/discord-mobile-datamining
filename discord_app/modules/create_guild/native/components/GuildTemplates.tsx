// discord_app/modules/create_guild/native/components/GuildTemplates.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import GuildTemplateId from "../../CreateGuildConstants.tsx";
import NUXGuildTemplatesAnalytics from "../CreateGuildConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GuildTemplatesHeader() {
  const tmp = callback5();
  let obj = { style: tmp.headerContainer, children: null };
  obj = {
    style: tmp.headerTitle,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["5HZu07"]);
  const items = [callback3(Text.Text, obj)];
  obj = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t["/k/L/j"]);
  items[1] = callback3(Text.Text, obj);
  obj[1] = items;
  return callback4(closure_5, obj);
}
function GuildTemplatesJoinFooter(trigger) {
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  dependencyMap = undefined;
  const tmp = callback5();
  let obj = trigger(1483);
  dependencyMap = obj.useNavigation();
  if (trigger === constants2.NUF) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.INo2NK);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.riOUtB);
  }
  const items = [onHeightChange];
  obj = {
    style: items1,
    onLayout: React.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items),
    children: null,
  };
  items1 = [tmp.footerSafeAreaContainer, { paddingBottom: onHeightChange(1611)().bottom }];
  obj = { style: tmp.footerContainer, children: null };
  obj1 = {
    style: tmp.footerTitle,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = tmp2(1114).intl;
  obj1[3] = intl3.string(trigger(1114).t["N+Mi/U"]);
  const items2 = [
    callback3(trigger(4556).Text, obj1),
    callback3(trigger(4975).Button, {
      variant: "primary",
      grow: true,
      text: stringResult,
      onPress() {
        if (closure_1_10.NUF === trigger) {
          let obj = trigger(arr[15]);
          obj.trackNUFStep(closure_1_11.STEP_GUILD_TEMPLATE, closure_1_11.STEP_GUILD_JOIN, { skip: false });
          onHeightChange(arr[16]).track(closure_1_12.JOIN_GUILD_VIEWED);
          const obj2 = onHeightChange(arr[16]);
        } else if (tmp2.IN_APP === tmp) {
          obj = { location_section: null };
          obj[0] = closure_1_13.CREATE_JOIN_GUILD_MODAL;
          onHeightChange(arr[16]).track(closure_1_12.JOIN_GUILD_VIEWED, obj);
          const obj3 = onHeightChange(arr[16]);
        }
        arr = arr.push(closure_1_9.JOIN_SERVER, {});
      },
    }),
  ];
  obj[1] = items2;
  obj[2] = callback4(closure_5, obj);
  return callback3(closure_5, obj);
}
function GuildTemplatesItem(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: guildTemplate(12711).GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    },
  };
  return callback3(onGuildTemplatePress(12324), obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ getGuildTemplatesMap: error, GuildTemplateId: closure_8 } = GuildTemplateId);
({
  CreateGuildModalStates: c9,
  GuildTemplateTriggers: c10,
  NUXGuildTemplatesAnalytics: unpackModuleId,
} = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: closure_12, AnalyticsLocations: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = {
  flex: { flex: 1 },
  contentContainer: null,
  scrollContainer: null,
  sections: null,
  headerContainer: null,
  headerTitle: null,
  headerDescription: null,
  footerSafeAreaContainer: null,
  footerContainer: null,
  footerTitle: null,
};
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
createCacheKey[4] = { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 };
createCacheKey[5] = { textAlign: "center", marginBottom: 8 };
createCacheKey[6] = { lineHeight: 18, textAlign: "center" };
let obj2 = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
createCacheKey[7] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
createCacheKey[8] = { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" };
createCacheKey[9] = { alignSelf: "center", textAlign: "center" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj3 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default function GuildTemplates(trigger) {
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  let callback;
  let React;
  function onGuildTemplatePress(guildTemplate) {
    let obj = { guildTemplate, trigger };
    if (trigger === closure_1_10.IN_APP) {
      obj = { template_name: null };
      obj[0] = guildTemplate.id;
      _location(fromStep[16]).track(closure_1_12.GUILD_TEMPLATE_SELECTED, obj);
      const obj2 = _location(fromStep[16]);
    }
  }
  const tmp = callback5();
  let obj = trigger(fromStep[12]);
  callback = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = React.useEffect(() => {
    if (closure_1_10.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      if (fromStep == null) {
        STEP_REGISTRATION = closure_1_11.STEP_REGISTRATION;
      }
      trigger(fromStep[15]).trackNUFStep(STEP_REGISTRATION, closure_1_11.STEP_GUILD_TEMPLATE, { skip: false });
      const obj2 = trigger(fromStep[15]);
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: null };
      obj[1] = str;
      _location(fromStep[16]).track(closure_1_12.OPEN_MODAL, obj);
      const obj3 = _location(fromStep[16]);
    }
  }, items);
  const first = callback(React.useState(callback2()), 1)[0];
  [tmp5, c4] = callback(React.useState(110), 2);
  callback = React.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  obj = { top: true, left: true, right: true, style: items1, children: null };
  items1 = [,];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { style: tmp.flex, children: null };
  obj1 = { style: tmp.scrollContainer, contentContainerStyle: obj2, children: null };
  const tmp4 = callback(React.useState(110), 2);
  const items2 = [callback3(GuildTemplatesHeader, {})];
  let obj3 = { style: tmp.sections, children: null };
  obj2 = { paddingBottom: tmp5 + _location(fromStep[13])().bottom + 16 };
  const items3 = [
    callback3(trigger(fromStep[20]).TableRowGroup, { hasIcons: true, children: callback3(GuildTemplatesItem, obj5) }),
  ];
  const obj6 = { title: null, hasIcons: true, children: null };
  const intl = trigger(fromStep[11]).intl;
  obj6[0] = intl.string(trigger(fromStep[11]).t.JGDkfg);
  const items4 = [
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.GAMING], onGuildTemplatePress }),
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress }),
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.STUDY], onGuildTemplatePress }),
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress }),
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.CREATORS], onGuildTemplatePress }),
    callback3(GuildTemplatesItem, { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress }),
  ];
  obj6[2] = items4;
  items3[1] = callback4(trigger(fromStep[20]).TableRowGroup, obj6);
  obj3[1] = items3;
  items2[1] = callback4(closure_5, obj3);
  obj1[2] = items2;
  const items5 = [
    callback4(closure_6, obj1),
    callback3(GuildTemplatesJoinFooter, { trigger, onHeightChange: callback }),
  ];
  obj[1] = items5;
  obj[4] = callback4(closure_5, obj);
  return callback3(trigger(fromStep[19]).SafeAreaPaddingView, obj);
}
