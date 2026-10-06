// discord_app/modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import MobileWebHandoffLinkingDefault from "../../../mobile_web_handoff/native/MobileWebHandoffLinking.tsx";
import GuildSettingsAnalyticsCardDefault from "GuildSettingsAnalyticsCard.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, guildId;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
({ AnalyticEvents: metroImportDefault, RelativeMarketingURLs: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let obj = { container: { flex: 1 }, content: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let analytics;
      let intl10;
      let intl2;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items1;
      let items2;
      let items3;
      let locale;
      let notice;
      let str;
      let tmp10;
      let tmp5;
      let tmp6;
      let obj = guildId(576);
      const cResult = obj.c(28);
      guildId = guildId.guildId;
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
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult6 = guildId(17899);
      const guildAnalyticsOverview = tmpResult6.useGuildAnalyticsOverview(guildId);
      ({ analytics, notice } = guildAnalyticsOverview);
      if (cResult[2] !== guildId) {
        let closure_0 = _asyncToGenerator(async () => {
          let guild_id;
          if (guild_id === 2) {
            guild_id = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const obj5 = AnalyticsUtilsDefault;
                  obj5.track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
                  const redirectDeveloperPortalWithHandoffToken =
                    MobileWebHandoffLinkingDefault.redirectDeveloperPortalWithHandoffToken;
                  const result = closure_2_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guild_id);
                  c1 = 1;
                  guild_id = 1;
                  const obj6 = {
                    value: redirectDeveloperPortalWithHandoffToken(
                      result,
                      guild_id(dependencyMap[14]).LoginHandoffSource.GUILD_ANALYTICS_SETTING,
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
            } catch (tmp4) {
              guild_id = 3;
              throw tmp4;
            }
          }
        });
        const fn2 = function () {
          return closure_0(...arguments);
        };
        cResult[2] = guildId;
        cResult[3] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === contentContainerStyle) {
        let tmp13;
        let tmp14;
        let tmp17;
        let tmp20;
        let tmp23;
        let tmp25;
        if (cResult[5] === tmp4.content) {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-sm/medium", color: "text-default", children: str.trim() };
          const Text = tmp(4892).Text;
          const intl = tmp(1126).intl;
          str = intl.string(tmp(1126).t.NIZ60a);
          const tmp16 = closure_9(Text, obj2);
          cResult[7] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== notice) {
          let tmp19Result = null;
          if (null != notice) {
            let INFO;
            const HelpMessage = tmp(1188).HelpMessage;
            if ("critical" === notice.type) {
              INFO = tmp(1188).HelpMessageTypes.ERROR;
            } else {
              INFO = tmp(1188).HelpMessageTypes.INFO;
            }
            let obj3 = { messageType: INFO, children: notice.message };
            tmp19Result = closure_9(HelpMessage, obj3);
          }
          cResult[8] = notice;
          cResult[9] = tmp19Result;
          tmp17 = tmp19Result;
        } else {
          tmp17 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(guildId(1126).t.A5vswv) };
          const Text2 = tmp(4892).Text;
          intl2 = tmp(1126).intl;
          const tmp22 = closure_9(Text2, obj4);
          cResult[10] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[10];
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(guildId(1126).t.Uskgxx);
          cResult[11] = stringResult;
          tmp23 = stringResult;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] !== tmp10) {
          let obj5 = { text: tmp23, onPress: tmp10 };
          const tmp27 = closure_9(guildId(5601).Button, obj5);
          cResult[12] = tmp10;
          cResult[13] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[13];
        }
        if (cResult[14] === analytics) {
          let tmp28;
          if (cResult[15] === stateFromStores) {
            tmp28 = cResult[16];
          }
          if (cResult[17] === tmp25) {
            if (cResult[18] === tmp28) {
              let tmp47;
              if (cResult[19] === tmp17) {
                tmp47 = cResult[20];
              }
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp47) {
                  let tmp51;
                  let tmp55;
                  let tmp58;
                  if (cResult[23] === tmp13) {
                    tmp51 = cResult[24];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp57 = closure_9(guildId(6543).NavScrim, {});
                    cResult[25] = tmp57;
                    tmp55 = tmp57;
                  } else {
                    tmp55 = cResult[25];
                  }
                  if (cResult[26] !== tmp51) {
                    let obj6 = { children: items1 };
                    items1 = [tmp51, tmp55];
                    const tmp61 = closure_10(closure_11, obj6);
                    cResult[26] = tmp51;
                    cResult[27] = tmp61;
                    tmp58 = tmp61;
                  } else {
                    tmp58 = cResult[27];
                  }
                  return tmp58;
                }
              }
              const obj7 = { style: tmp12, contentContainerStyle: tmp13, children: tmp47 };
              const tmp54 = closure_9(ScrollView, obj7);
              cResult[21] = tmp4.container;
              cResult[22] = tmp47;
              cResult[23] = tmp13;
              cResult[24] = tmp54;
              tmp51 = tmp54;
            }
          }
          const obj8 = { spacing: nativeDefault.space.PX_16, children: items2 };
          const Stack2 = tmp(5600).Stack;
          items2 = [tmp14, tmp17, tmp20, tmp25, tmp28];
          const tmp50 = closure_10(Stack2, obj8);
          cResult[17] = tmp25;
          cResult[18] = tmp28;
          cResult[19] = tmp17;
          cResult[20] = tmp50;
          tmp47 = tmp50;
        }
        let tmp29 = null;
        if (null != analytics) {
          const obj9 = { spacing: nativeDefault.space.PX_8, children: items3 };
          const Stack = tmp(5600).Stack;
          const obj10 = {
            metricKey: "visitors",
            title: intl4.string(guildId(1126).t.i0NorT),
            description: intl5.string(guildId(1126).t.KiRbLJ),
          };
          const tmp33 = GuildSettingsAnalyticsCardDefault;
          intl4 = tmp(1126).intl;
          intl5 = tmp(1126).intl;
          const tmpResult7 = guildId(17899);
          const merged = Object.assign(
            tmpResult7.getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores),
          );
          items3 = [closure_9(tmp33, obj10), , ,];
          const obj11 = {
            metricKey: "communicators",
            title: intl6.string(guildId(1126).t.DDAHdQ),
            description: intl7.string(guildId(1126).t.HxWUkU),
          };
          const tmp36 = GuildSettingsAnalyticsCardDefault;
          intl6 = tmp(1126).intl;
          intl7 = tmp(1126).intl;
          const tmpResult8 = guildId(17899);
          const merged1 = Object.assign(
            tmpResult8.getGuildAnalyticsCardProps(
              analytics.communicators,
              analytics.communicatorsChange,
              stateFromStores,
            ),
          );
          items3[1] = closure_9(tmp36, obj11);
          const obj12 = { metricKey: "new_members", title: intl8.string(guildId(1126).t.hYeOqC) };
          const tmp39 = GuildSettingsAnalyticsCardDefault;
          intl8 = tmp(1126).intl;
          const tmpResult9 = guildId(17899);
          const merged2 = Object.assign(
            tmpResult9.getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores),
          );
          items3[2] = closure_9(tmp39, obj12);
          const obj13 = {
            metricKey: "new_member_retention",
            title: intl9.string(guildId(1126).t.jj7OPw),
            description: intl10.string(guildId(1126).t.MQCslz),
          };
          const tmp42 = GuildSettingsAnalyticsCardDefault;
          intl9 = tmp(1126).intl;
          intl10 = tmp(1126).intl;
          const tmpResult10 = guildId(17899);
          const merged3 = Object.assign(
            tmpResult10.getGuildAnalyticsCardProps(
              analytics.pctRetained,
              analytics.pctRetainedChange,
              stateFromStores,
              true,
            ),
          );
          items3[3] = closure_9(tmp42, obj13);
          tmp29 = closure_10(Stack, obj9);
        }
        cResult[14] = analytics;
        cResult[15] = stateFromStores;
        cResult[16] = tmp29;
        tmp28 = tmp29;
      }
      const items4 = [tmp4.content, contentContainerStyle];
      cResult[4] = contentContainerStyle;
      cResult[5] = tmp4.content;
      cResult[6] = items4;
      tmp13 = items4;
    }
  : (guildId) => {
      let Stack;
      let analytics;
      let intl10;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items2;
      let items3;
      let items4;
      let items5;
      let locale;
      let notice;
      let obj4;
      let str;
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp = closure_12();
      const tmp2 = guildId;
      let obj = guildId(504);
      const items = [LocaleStore];
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      let obj2 = guildId(17899);
      const guildAnalyticsOverview = obj2.useGuildAnalyticsOverview(guildId);
      ({ analytics, notice } = guildAnalyticsOverview);
      const items1 = [guildId];
      let obj3 = { style: tmp.container, contentContainerStyle: items2, children: closure_10(Stack, obj4) };
      items2 = [tmp.content, contentContainerStyle];
      const callback = react.useCallback(
        _asyncToGenerator(async () => {
          let v1;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const obj5 = v1(dependencyMap[12]);
                  obj5.track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
                  const redirectDeveloperPortalWithHandoffToken = v1(
                    dependencyMap[13],
                  ).redirectDeveloperPortalWithHandoffToken;
                  const tmp13 = v1(dependencyMap[13]);
                  const result = closure_1_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guildId);
                  v1 = 1;
                  v3 = 1;
                  const obj6 = {
                    value: redirectDeveloperPortalWithHandoffToken(
                      result,
                      v3(dependencyMap[14]).LoginHandoffSource.GUILD_ANALYTICS_SETTING,
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
            } catch (tmp4) {
              v3 = 3;
              throw tmp4;
            }
          }
        }),
        items1,
      );
      obj4 = { spacing: nativeDefault.space.PX_16, children: items3 };
      Stack = guildId(5600).Stack;
      let obj5 = { variant: "text-sm/medium", color: "text-default", children: str.trim() };
      const Text = guildId(4892).Text;
      const intl = guildId(1126).intl;
      str = intl.string(guildId(1126).t.NIZ60a);
      items3 = [closure_9(Text, obj5), , , ,];
      let tmp9Result = null;
      if (null != notice) {
        let INFO;
        const HelpMessage = tmp2(1188).HelpMessage;
        if ("critical" === notice.type) {
          INFO = tmp2(1188).HelpMessageTypes.ERROR;
        } else {
          INFO = tmp2(1188).HelpMessageTypes.INFO;
        }
        let obj6 = { messageType: INFO, children: notice.message };
        tmp9Result = closure_9(HelpMessage, obj6);
      }
      items3[1] = tmp9Result;
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(tmp2(1126).t.A5vswv) };
      const Text2 = tmp2(4892).Text;
      intl2 = tmp2(1126).intl;
      items3[2] = closure_9(Text2, obj7);
      const obj8 = { text: intl3.string(tmp2(1126).t.Uskgxx), onPress: callback };
      const Button = tmp2(5601).Button;
      intl3 = tmp2(1126).intl;
      items3[3] = closure_9(Button, obj8);
      let tmp7Result = null;
      if (null != analytics) {
        const obj9 = { spacing: nativeDefault.space.PX_8, children: items4 };
        const Stack2 = tmp2(5600).Stack;
        const obj10 = {
          metricKey: "visitors",
          title: intl4.string(tmp2(1126).t.i0NorT),
          description: intl5.string(tmp2(1126).t.KiRbLJ),
        };
        const tmp11Result = GuildSettingsAnalyticsCardDefault;
        intl4 = tmp2(1126).intl;
        intl5 = tmp2(1126).intl;
        const tmp2Result = tmp2(17899);
        const merged = Object.assign(
          tmp2Result.getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores),
        );
        items4 = [closure_9(tmp11Result, obj10), , ,];
        const obj11 = {
          metricKey: "communicators",
          title: intl6.string(tmp2(1126).t.DDAHdQ),
          description: intl7.string(tmp2(1126).t.HxWUkU),
        };
        const tmp11Result4 = GuildSettingsAnalyticsCardDefault;
        intl6 = tmp2(1126).intl;
        intl7 = tmp2(1126).intl;
        const tmp2Result4 = tmp2(17899);
        const merged1 = Object.assign(
          tmp2Result4.getGuildAnalyticsCardProps(
            analytics.communicators,
            analytics.communicatorsChange,
            stateFromStores,
          ),
        );
        items4[1] = closure_9(tmp11Result4, obj11);
        const obj12 = { metricKey: "new_members", title: intl8.string(tmp2(1126).t.hYeOqC) };
        const tmp11Result5 = GuildSettingsAnalyticsCardDefault;
        intl8 = tmp2(1126).intl;
        const tmp2Result5 = tmp2(17899);
        const merged2 = Object.assign(
          tmp2Result5.getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores),
        );
        items4[2] = closure_9(tmp11Result5, obj12);
        const obj13 = {
          metricKey: "new_member_retention",
          title: intl9.string(tmp2(1126).t.jj7OPw),
          description: intl10.string(tmp2(1126).t.MQCslz),
        };
        const tmp11Result6 = GuildSettingsAnalyticsCardDefault;
        intl9 = tmp2(1126).intl;
        intl10 = tmp2(1126).intl;
        const tmp2Result6 = tmp2(17899);
        const merged3 = Object.assign(
          tmp2Result6.getGuildAnalyticsCardProps(
            analytics.pctRetained,
            analytics.pctRetainedChange,
            stateFromStores,
            true,
          ),
        );
        items4[3] = closure_9(tmp11Result6, obj13);
        tmp7Result = closure_10(Stack2, obj9);
      }
      const obj14 = { children: items5 };
      items3[4] = tmp7Result;
      items5 = [closure_9(ScrollView, obj3), closure_9(tmp2(6543).NavScrim, {})];
      return closure_10(closure_11, obj14);
    };
let result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx");

export default tmp4;
