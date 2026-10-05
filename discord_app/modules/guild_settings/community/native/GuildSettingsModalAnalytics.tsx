// discord_app/modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import MobileWebHandoffLinkingDefault from "../../../mobile_web_handoff/native/MobileWebHandoffLinking.tsx";
import GuildSettingsAnalyticsCardDefault from "GuildSettingsAnalyticsCard.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

const require = globalThis.__r;

const require = fn;
const ScrollView = fn(17).ScrollView;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, RelativeMarketingURLs: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1 }, content: { padding: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = require("c").c(28);
      guildId = guildId.guildId;
      _require = guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function p() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const tmpResult = require("initialize");
      const guildAnalyticsOverview = require("GuildSettingsAnalyticsUtils").useGuildAnalyticsOverview(guildId);
      ({ analytics, notice } = guildAnalyticsOverview);
      if (cResult[2] !== guildId) {
        _require = asyncGeneratorStep(async () => {
          if (guild_id === 2) {
            guild_id = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              guild_id = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  guild_id = 3;
                  throw value;
                } else if (arg0 === 2) {
                  guild_id = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj4 = { guild_id };
                  AnalyticsUtilsDefault.track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
                  const result = closure_2_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guild_id);
                  c1 = 1;
                  guild_id = 1;
                  const obj6 = {
                    value: MobileWebHandoffLinkingDefault.redirectDeveloperPortalWithHandoffToken(
                      result,
                      guild_id(6824).LoginHandoffSource.GUILD_ANALYTICS_SETTING,
                    ),
                    done: false,
                  };
                  return obj6;
                }
              } else if (arg0 === 1) {
                guild_id = 3;
                throw value;
              } else if (arg0 === 2) {
                guild_id = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                guild_id = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp5) {
              guild_id = tmp;
              throw tmp5;
            }
          }
        });
        const fn2 = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[2] = guildId;
        cResult[3] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === contentContainerStyle) {
        if (cResult[5] === tmp4.content) {
          let tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
          const intl = tmp(1126).intl;
          obj2.children = intl.string(tmp(1126).t.NIZ60a).trim();
          const tmp16 = closure_9(tmp(4886).Text, obj2);
          cResult[7] = tmp16;
          let tmp14 = tmp16;
          const str = intl.string(tmp(1126).t.NIZ60a);
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== notice) {
          if (null == notice) {
            cResult[8] = notice;
            cResult[9] = null;
            let tmp17 = null;
          } else {
            if ("critical" === notice.type) {
              let INFO = tmp(1188).HelpMessageTypes.ERROR;
            } else {
              INFO = tmp(1188).HelpMessageTypes.INFO;
            }
            let obj3 = { messageType: INFO, children: notice.message };
            closure_9(tmp(1188).HelpMessage, obj3);
          }
        } else {
          tmp17 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
          const intl2 = tmp(1126).intl;
          obj4.children = intl2.string(tmp(1126).t.A5vswv);
          const tmp23 = closure_9(tmp(4886).Text, obj4);
          cResult[10] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[10];
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp(1126).t.Uskgxx);
          cResult[11] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[11];
        }
        if (cResult[12] !== tmp10) {
          let obj5 = { text: tmp24, onPress: tmp10 };
          const tmp28 = closure_9(tmp(5594).Button, obj5);
          cResult[12] = tmp10;
          cResult[13] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] === analytics) {
          if (cResult[15] === stateFromStores) {
            let tmp29 = cResult[16];
          }
          if (cResult[17] === tmp26) {
            if (cResult[18] === tmp29) {
              if (cResult[19] === tmp17) {
                let tmp48 = cResult[20];
              }
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp48) {
                  if (cResult[23] === tmp13) {
                    let tmp52 = cResult[24];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp58 = closure_9(tmp(6536).NavScrim, {});
                    cResult[25] = tmp58;
                    let tmp56 = tmp58;
                  } else {
                    tmp56 = cResult[25];
                  }
                  if (cResult[26] !== tmp52) {
                    let obj6 = { children: null };
                    const items1 = [tmp52, tmp56];
                    obj6.children = items1;
                    const tmp62 = closure_10(closure_11, obj6);
                    cResult[26] = tmp52;
                    cResult[27] = tmp62;
                    let tmp59 = tmp62;
                  } else {
                    tmp59 = cResult[27];
                  }
                  return tmp59;
                }
              }
              const obj7 = { style: tmp12, contentContainerStyle: tmp13, children: tmp48 };
              const tmp55 = closure_9(ScrollView, obj7);
              cResult[21] = tmp4.container;
              cResult[22] = tmp48;
              cResult[23] = tmp13;
              cResult[24] = tmp55;
              tmp52 = tmp55;
            }
          }
          const obj8 = { spacing: nativeDefault.space.PX_16, children: null };
          const items2 = [tmp14, tmp17, tmp21, tmp26, tmp29];
          obj8.children = items2;
          const tmp51 = closure_10(tmp(5593).Stack, obj8);
          cResult[17] = tmp26;
          cResult[18] = tmp29;
          cResult[19] = tmp17;
          cResult[20] = tmp51;
          tmp48 = tmp51;
        }
        let tmp30 = null;
        if (null != analytics) {
          const obj9 = { spacing: nativeDefault.space.PX_8, children: null };
          const obj10 = { metricKey: "visitors", title: null, description: null };
          const intl4 = tmp(1126).intl;
          obj10.title = intl4.string(tmp(1126).t.i0NorT);
          const intl5 = tmp(1126).intl;
          obj10.description = intl5.string(tmp(1126).t.KiRbLJ);
          const tmp34 = GuildSettingsAnalyticsCardDefault;
          const merged = Object.assign(
            tmp(17853).getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores),
          );
          const items3 = [closure_9(tmp34, obj10), , ,];
          const obj11 = { metricKey: "communicators", title: null, description: null };
          const tmpResult7 = tmp(17853);
          const intl6 = tmp(1126).intl;
          obj11.title = intl6.string(tmp(1126).t.DDAHdQ);
          const intl7 = tmp(1126).intl;
          obj11.description = intl7.string(tmp(1126).t.HxWUkU);
          const tmp37 = GuildSettingsAnalyticsCardDefault;
          const merged1 = Object.assign(
            tmp(17853).getGuildAnalyticsCardProps(
              analytics.communicators,
              analytics.communicatorsChange,
              stateFromStores,
            ),
          );
          items3[1] = closure_9(tmp37, obj11);
          const obj12 = { metricKey: "new_members", title: null };
          const tmpResult8 = tmp(17853);
          const intl8 = tmp(1126).intl;
          obj12.title = intl8.string(tmp(1126).t.hYeOqC);
          const tmp40 = GuildSettingsAnalyticsCardDefault;
          const merged2 = Object.assign(
            tmp(17853).getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores),
          );
          items3[2] = closure_9(tmp40, obj12);
          const obj13 = { metricKey: "new_member_retention", title: null, description: null };
          const tmpResult9 = tmp(17853);
          const intl9 = tmp(1126).intl;
          obj13.title = intl9.string(tmp(1126).t.jj7OPw);
          const intl10 = tmp(1126).intl;
          obj13.description = intl10.string(tmp(1126).t.MQCslz);
          const tmpResult10 = tmp(17853);
          const merged3 = Object.assign(
            tmpResult10.getGuildAnalyticsCardProps(
              analytics.pctRetained,
              analytics.pctRetainedChange,
              stateFromStores,
              true,
            ),
          );
          items3[3] = closure_9(GuildSettingsAnalyticsCardDefault, obj13);
          obj9.children = items3;
          tmp30 = closure_10(tmp(5593).Stack, obj9);
        }
        cResult[14] = analytics;
        cResult[15] = stateFromStores;
        cResult[16] = tmp30;
        tmp29 = tmp30;
      }
      const items4 = [tmp4.content, contentContainerStyle];
      cResult[4] = contentContainerStyle;
      cResult[5] = tmp4.content;
      cResult[6] = items4;
      tmp13 = items4;
      const tmpResult6 = require("GuildSettingsAnalyticsUtils");
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const tmp = closure_12();
      const items = [LocaleStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => locale.locale);
      let obj = guildId(504);
      const guildAnalyticsOverview = guildId(17853).useGuildAnalyticsOverview(guildId);
      ({ analytics, notice } = guildAnalyticsOverview);
      const items1 = [guildId];
      let obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
      const items2 = [tmp.content, guildId.contentContainerStyle];
      obj3.contentContainerStyle = items2;
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: null };
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
                  const obj6 = {
                    value: v1(6820).redirectDeveloperPortalWithHandoffToken(
                      result,
                      v3(6824).LoginHandoffSource.GUILD_ANALYTICS_SETTING,
                    ),
                    done: false,
                  };
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
                return { value: "IconComponent", done: null };
              }
            } catch (tmp5) {
              v3 = tmp;
              throw tmp5;
            }
          }
        }),
        items1,
      );
      let obj4 = { spacing: nativeDefault.space.PX_16, children: null };
      let obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl = guildId(1126).intl;
      let obj2 = guildId(17853);
      obj5.children = intl.string(guildId(1126).t.NIZ60a).trim();
      const items3 = [closure_9(guildId(4886).Text, obj5), , , ,];
      if (null == notice) {
        items3[1] = null;
        let obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl2 = tmp2(1126).intl;
        obj6.children = intl2.string(tmp2(1126).t.A5vswv);
        items3[2] = closure_9(tmp2(4886).Text, obj6);
        const obj7 = { text: null, onPress: null };
        const intl3 = tmp2(1126).intl;
        obj7.text = intl3.string(tmp2(1126).t.Uskgxx);
        obj7.onPress = callback;
        items3[3] = closure_9(tmp2(5594).Button, obj7);
        let tmp7Result = null;
        if (null != analytics) {
          const obj8 = { spacing: nativeDefault.space.PX_8, children: null };
          const obj9 = { metricKey: "visitors", title: null, description: null };
          const intl4 = tmp2(1126).intl;
          obj9.title = intl4.string(tmp2(1126).t.i0NorT);
          const intl5 = tmp2(1126).intl;
          obj9.description = intl5.string(tmp2(1126).t.KiRbLJ);
          const tmp11Result = GuildSettingsAnalyticsCardDefault;
          const merged = Object.assign(
            tmp2(17853).getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores),
          );
          const items4 = [closure_9(tmp11Result, obj9), , ,];
          const obj10 = { metricKey: "communicators", title: null, description: null };
          const tmp2Result = tmp2(17853);
          const intl6 = tmp2(1126).intl;
          obj10.title = intl6.string(tmp2(1126).t.DDAHdQ);
          const intl7 = tmp2(1126).intl;
          obj10.description = intl7.string(tmp2(1126).t.HxWUkU);
          const tmp11Result4 = GuildSettingsAnalyticsCardDefault;
          const merged1 = Object.assign(
            tmp2(17853).getGuildAnalyticsCardProps(
              analytics.communicators,
              analytics.communicatorsChange,
              stateFromStores,
            ),
          );
          items4[1] = closure_9(tmp11Result4, obj10);
          const obj11 = { metricKey: "new_members", title: null };
          const tmp2Result4 = tmp2(17853);
          const intl8 = tmp2(1126).intl;
          obj11.title = intl8.string(tmp2(1126).t.hYeOqC);
          const tmp11Result5 = GuildSettingsAnalyticsCardDefault;
          const merged2 = Object.assign(
            tmp2(17853).getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores),
          );
          items4[2] = closure_9(tmp11Result5, obj11);
          const obj12 = { metricKey: "new_member_retention", title: null, description: null };
          const tmp2Result5 = tmp2(17853);
          const intl9 = tmp2(1126).intl;
          obj12.title = intl9.string(tmp2(1126).t.jj7OPw);
          const intl10 = tmp2(1126).intl;
          obj12.description = intl10.string(tmp2(1126).t.MQCslz);
          const tmp2Result6 = tmp2(17853);
          const merged3 = Object.assign(
            tmp2Result6.getGuildAnalyticsCardProps(
              analytics.pctRetained,
              analytics.pctRetainedChange,
              stateFromStores,
              true,
            ),
          );
          items4[3] = closure_9(GuildSettingsAnalyticsCardDefault, obj12);
          obj8.children = items4;
          tmp7Result = closure_10(tmp2(5593).Stack, obj8);
          const tmp11Result6 = GuildSettingsAnalyticsCardDefault;
        }
        const obj13 = { children: null };
        items3[4] = tmp7Result;
        obj4.children = items3;
        obj3.children = closure_10(guildId(5593).Stack, obj4);
        const items5 = [closure_9(ScrollView, obj3), closure_9(tmp2(6536).NavScrim, {})];
        obj13.children = items5;
        return closure_10(closure_11, obj13);
      } else {
        if ("critical" === notice.type) {
          let INFO = tmp2(1188).HelpMessageTypes.ERROR;
        } else {
          INFO = tmp2(1188).HelpMessageTypes.INFO;
        }
        const obj14 = { messageType: INFO, children: null };
        notice = notice.message;
        obj14.children = notice;
        closure_9(tmp2(1188).HelpMessage, obj14);
      }
      const str = intl.string(guildId(1126).t.NIZ60a);
    };
