// === Module 19844: GuildSettingsModalAnalytics ===

// Module 19844 (GuildSettingsModalAnalytics)
import nativeDefault from "native" /* 575 */;
import GuildSettingsAnalyticsCardDefault from "GuildSettingsAnalyticsCard" /* 19864 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const Constants = fn(1072);
({ AnalyticEvents: closure_7, RelativeMarketingURLs: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1 }, content: { padding: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx");

export default function GuildSettingsModalAnalytics(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_12();
  const items = [LocaleStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => locale.locale);
  let obj = guildId(504);
  const guildAnalyticsOverview = guildId(19845).useGuildAnalyticsOverview(guildId);
  ({ analytics, notice } = guildAnalyticsOverview);
  const items1 = [guildId];
  let obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items2 = [tmp.content, guildId.contentContainerStyle];
  obj3.contentContainerStyle = items2;
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { guild_id: guildId };
            v1(1252).track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
            const obj5 = v1(1252);
            const result = closure_1_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guildId);
            v1 = 1;
            v3 = 1;
            const obj6 = { value: v1(7503).redirectDeveloperPortalWithHandoffToken(result, v3(7507).LoginHandoffSource.GUILD_ANALYTICS_SETTING), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp5) {
        v3 = tmp;
        throw tmp5;
      }
    }
  }), items1);
  let obj4 = { spacing: nativeDefault.space.PX_16, children: null };
  let obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildId(1113).intl;
  let obj2 = guildId(19845);
  obj5.children = intl.string(guildId(1113).t.NIZ60a).trim();
  const items3 = [closure_9(guildId(5624).Text, obj5), , , , ];
  let tmp9Result = null;
  if (null != notice) {
    ({ type: obj6.type, message: obj6.message, role: obj6.role } = notice);
    tmp9Result = closure_9(tmp2(8025).InlineNotice, { type: null, message: null, role: null });
    const obj7 = { type: null, message: null, role: null };
  }
  items3[1] = tmp9Result;
  const obj8 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1113).intl;
  obj8.children = intl2.string(guildId(1113).t.A5vswv);
  items3[2] = closure_9(guildId(5624).Text, obj8);
  const obj9 = { text: null, onPress: null };
  const intl3 = tmp2(1113).intl;
  obj9.text = intl3.string(guildId(1113).t.Uskgxx);
  obj9.onPress = callback;
  items3[3] = closure_9(guildId(5634).Button, obj9);
  let tmp7Result = null;
  if (null != analytics) {
    const obj10 = { spacing: nativeDefault.space.PX_8, children: null };
    const obj11 = { metricKey: "visitors", title: null, description: null };
    const intl4 = tmp2(1113).intl;
    obj11.title = intl4.string(tmp2(1113).t.i0NorT);
    const intl5 = tmp2(1113).intl;
    obj11.description = intl5.string(tmp2(1113).t.KiRbLJ);
    const tmp11Result = GuildSettingsAnalyticsCardDefault;
    const merged = Object.assign(tmp2(19845).getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores));
    const items4 = [closure_9(tmp11Result, obj11), , , ];
    const obj12 = { metricKey: "communicators", title: null, description: null };
    const tmp2Result = tmp2(19845);
    const intl6 = tmp2(1113).intl;
    obj12.title = intl6.string(tmp2(1113).t.DDAHdQ);
    const intl7 = tmp2(1113).intl;
    obj12.description = intl7.string(tmp2(1113).t.HxWUkU);
    const tmp11Result4 = GuildSettingsAnalyticsCardDefault;
    const merged1 = Object.assign(tmp2(19845).getGuildAnalyticsCardProps(analytics.communicators, analytics.communicatorsChange, stateFromStores));
    items4[1] = closure_9(tmp11Result4, obj12);
    const obj13 = { metricKey: "new_members", title: null };
    const tmp2Result4 = tmp2(19845);
    const intl8 = tmp2(1113).intl;
    obj13.title = intl8.string(tmp2(1113).t.hYeOqC);
    const tmp11Result5 = GuildSettingsAnalyticsCardDefault;
    const merged2 = Object.assign(tmp2(19845).getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores));
    items4[2] = closure_9(tmp11Result5, obj13);
    const obj14 = { metricKey: "new_member_retention", title: null, description: null };
    const tmp2Result5 = tmp2(19845);
    const intl9 = tmp2(1113).intl;
    obj14.title = intl9.string(tmp2(1113).t.jj7OPw);
    const intl10 = tmp2(1113).intl;
    obj14.description = intl10.string(tmp2(1113).t.MQCslz);
    const tmp2Result6 = tmp2(19845);
    const merged3 = Object.assign(tmp2Result6.getGuildAnalyticsCardProps(analytics.pctRetained, analytics.pctRetainedChange, stateFromStores, true));
    items4[3] = closure_9(GuildSettingsAnalyticsCardDefault, obj14);
    obj10.children = items4;
    tmp7Result = closure_10(tmp2(6027).Stack, obj10);
    const tmp11Result6 = GuildSettingsAnalyticsCardDefault;
  }
  const obj15 = { children: null };
  items3[4] = tmp7Result;
  obj4.children = items3;
  obj3.children = closure_10(guildId(6027).Stack, obj4);
  const items5 = [closure_9(ScrollView, obj3), closure_9(guildId(5606).NavScrim, {})];
  obj15.children = items5;
  return closure_10(closure_11, obj15);
};