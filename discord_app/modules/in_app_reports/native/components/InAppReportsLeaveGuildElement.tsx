// discord_app/modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(reportId[5]).c(19);
      guild = guild.guild;
      reportId = guild.reportId;
      let obj = guild(reportId[5]);
      let obj2 = noop;
      [tmp5, _slicedToArray] = noop.useState(false);
      noop = tmp6;
      if (cResult[0] !== (null != guild)) {
        const fn = function s() {
          _slicedToArray(!closure_4);
        };
        const items = [tmp6];
        cResult[0] = tmp6;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = obj2.useEffect(tmp7, tmp8);
      if (cResult[3] === guild.addCallback) {
        if (cResult[4] === guild) {
          if (cResult[5] === reportId) {
            let tmp10 = cResult[6];
          }
          onConfirm = tmp10;
          let name1;
          if (guild != null) {
            name1 = guild.name;
          }
          if (cResult[7] === name1) {
            if (cResult[8] === tmp10) {
              let tmp12 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[9]).intl;
              const stringResult = intl.string(tmp(tmp2[9]).t.cU96ip);
              let intl2 = tmp(tmp2[9]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[9]).t.rJGMXU);
              cResult[10] = stringResult;
              class A {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_1;
                  obj = closure_1(closure_2[8]);
                  obj1 = {
                    title: null,
                    body: null,
                    confirmText: null,
                    cancelText: null,
                    onConfirm: null,
                    confirmColor: null,
                  };
                  tmp3 = closure_0;
                  intl = closure_0(closure_2[9]).intl;
                  obj1.title = intl.string(closure_0(closure_2[9]).t.J2TBi3);
                  intl2 = closure_0(closure_2[9]).intl;
                  name = undefined;
                  if (guild != null) {
                    name = guild.name;
                  }
                  obj1.body = intl2.formatToPlainString(closure_0(closure_2[9]).t.TB1og8, { name });
                  intl3 = tmp3(tmp2[9]).intl;
                  obj1.confirmText = intl3.string(tmp3(tmp2[9]).t.p89ACt);
                  intl4 = tmp3(tmp2[9]).intl;
                  obj1.cancelText = intl4.string(tmp3(tmp2[9]).t.gm1Vej);
                  obj1.onConfirm = closure_5;
                  obj1.confirmColor = tmp(tmp2[10]).Colors.RED;
                  showResult = obj.show(obj1);
                  return;
                }
              }
              cResult[11] = stringResult1;
              let tmp16 = stringResult1;
              let tmp15 = stringResult;
            } else {
              tmp15 = cResult[10];
              tmp16 = cResult[11];
            }
            class A {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_1;
                obj = closure_1(closure_2[8]);
                obj1 = {
                  title: null,
                  body: null,
                  confirmText: null,
                  cancelText: null,
                  onConfirm: null,
                  confirmColor: null,
                };
                tmp3 = closure_0;
                intl = closure_0(closure_2[9]).intl;
                obj1.title = intl.string(closure_0(closure_2[9]).t.J2TBi3);
                intl2 = closure_0(closure_2[9]).intl;
                name = undefined;
                if (guild != null) {
                  name = guild.name;
                }
                obj1.body = intl2.formatToPlainString(closure_0(closure_2[9]).t.TB1og8, { name });
                intl3 = tmp3(tmp2[9]).intl;
                obj1.confirmText = intl3.string(tmp3(tmp2[9]).t.p89ACt);
                intl4 = tmp3(tmp2[9]).intl;
                obj1.cancelText = intl4.string(tmp3(tmp2[9]).t.gm1Vej);
                obj1.onConfirm = closure_5;
                obj1.confirmColor = tmp(tmp2[10]).Colors.RED;
                showResult = obj.show(obj1);
                return;
              }
            }
            if (cResult[12] !== undefined) {
              let intl3 = tmp(tmp2[9]).intl;
              let name2;
              if (guild != null) {
                name2 = guild.name;
              }
              const obj3 = { guildName: name2 };
              const formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[9]).t["26mR6/"], obj3);
              class A {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_1;
                  obj = closure_1(closure_2[8]);
                  obj1 = {
                    title: null,
                    body: null,
                    confirmText: null,
                    cancelText: null,
                    onConfirm: null,
                    confirmColor: null,
                  };
                  tmp3 = closure_0;
                  intl = closure_0(closure_2[9]).intl;
                  obj1.title = intl.string(closure_0(closure_2[9]).t.J2TBi3);
                  intl2 = closure_0(closure_2[9]).intl;
                  name = undefined;
                  if (guild != null) {
                    name = guild.name;
                  }
                  obj1.body = intl2.formatToPlainString(closure_0(closure_2[9]).t.TB1og8, { name });
                  intl3 = tmp3(tmp2[9]).intl;
                  obj1.confirmText = intl3.string(tmp3(tmp2[9]).t.p89ACt);
                  intl4 = tmp3(tmp2[9]).intl;
                  obj1.cancelText = intl4.string(tmp3(tmp2[9]).t.gm1Vej);
                  obj1.onConfirm = closure_5;
                  obj1.confirmColor = tmp(tmp2[10]).Colors.RED;
                  showResult = obj.show(obj1);
                  return;
                }
              }
              if (guild != null) {
                let name = guild.name;
              }
              cResult[12] = name;
              cResult[13] = formatToPlainStringResult;
              let tmp20 = formatToPlainStringResult;
            } else {
              tmp20 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp25 = jsx(tmp(tmp2[11]).DoorExitIcon, { color: "text-feedback-critical" });
              cResult[14] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] === tmp12) {
              if (cResult[16] === tmp5) {
                if (cResult[17] === tmp20) {
                  let tmp26 = cResult[18];
                }
                return tmp26;
              }
            }
            const obj4 = {
              title: tmp15,
              disabledTitle: tmp16,
              description: tmp20,
              disabled: tmp5,
              variant: "danger",
              onPress: tmp12,
              icon: tmp23,
            };
            const tmp29 = jsx(addCallback(tmp2[12]), {
              title: tmp15,
              disabledTitle: tmp16,
              description: tmp20,
              disabled: tmp5,
              variant: "danger",
              onPress: tmp12,
              icon: tmp23,
            });
            cResult[15] = tmp12;
            cResult[16] = tmp5;
            cResult[17] = tmp20;
            cResult[18] = tmp29;
            tmp26 = tmp29;
          }
          let name3;
          if (guild != null) {
            name3 = guild.name;
          }
          class A {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_1;
              obj = closure_1(closure_2[8]);
              obj1 = {
                title: null,
                body: null,
                confirmText: null,
                cancelText: null,
                onConfirm: null,
                confirmColor: null,
              };
              tmp3 = closure_0;
              intl = closure_0(closure_2[9]).intl;
              obj1.title = intl.string(closure_0(closure_2[9]).t.J2TBi3);
              intl2 = closure_0(closure_2[9]).intl;
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              obj1.body = intl2.formatToPlainString(closure_0(closure_2[9]).t.TB1og8, { name });
              intl3 = tmp3(tmp2[9]).intl;
              obj1.confirmText = intl3.string(tmp3(tmp2[9]).t.p89ACt);
              intl4 = tmp3(tmp2[9]).intl;
              obj1.cancelText = intl4.string(tmp3(tmp2[9]).t.gm1Vej);
              obj1.onConfirm = closure_5;
              obj1.confirmColor = tmp(tmp2[10]).Colors.RED;
              showResult = obj.show(obj1);
              return;
            }
          }
          cResult[7] = name3;
          cResult[8] = tmp10;
          cResult[9] = A;
          tmp12 = A;
        }
      }
      const fn2 = function f() {
        if (null != guild) {
          addCallback(() => addCallback(reportId[6]).leaveGuild(id.id));
          const obj2 = { guild_id: tmp.id, report_id: reportId };
          AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
          _slicedToArray(true);
        }
      };
      cResult[3] = guild.addCallback;
      cResult[4] = guild;
      cResult[5] = reportId;
      cResult[6] = fn2;
      tmp10 = fn2;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : (guild) => {
      guild = guild.guild;
      const reportId = guild.reportId;
      _slicedToArray = undefined;
      noop = undefined;
      [obj.disabled, _slicedToArray] = noop.useState(false);
      noop = tmp2;
      const items = [null != guild];
      const effect = noop.useEffect(() => {
        closure_3(!closure_4);
      }, items);
      const items1 = [guild.addCallback, reportId, guild];
      onConfirm = noop.useCallback(() => {
        if (null != guild) {
          addCallback(() => addCallback(reportId[6]).leaveGuild(id.id));
          const obj2 = { guild_id: tmp.id, report_id: reportId };
          AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
          closure_3(true);
        }
      }, items1);
      let obj = {
        title: null,
        disabledTitle: null,
        description: null,
        disabled: null,
        variant: "danger",
        onPress: null,
        icon: null,
      };
      let intl = guild(reportId[9]).intl;
      obj.title = intl.string(guild(reportId[9]).t.cU96ip);
      let intl2 = guild(reportId[9]).intl;
      obj.disabledTitle = intl2.string(guild(reportId[9]).t.rJGMXU);
      let intl3 = guild(reportId[9]).intl;
      let name;
      if (guild != null) {
        name = guild.name;
      }
      obj.description = intl3.formatToPlainString(guild(reportId[9]).t["26mR6/"], { guildName: name });
      obj.onPress = function onPress() {
        const obj2 = {
          title: null,
          body: null,
          confirmText: null,
          cancelText: null,
          onConfirm: null,
          confirmColor: null,
        };
        const intl = util.intl;
        obj2.title = intl.string(util.t.J2TBi3);
        const intl2 = util.intl;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        obj2.body = intl2.formatToPlainString(util.t.TB1og8, { name });
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t.p89ACt);
        const intl4 = util.intl;
        obj2.cancelText = intl4.string(util.t.gm1Vej);
        obj2.onConfirm = onConfirm;
        obj2.confirmColor = common_AlertDefault.Colors.RED;
        actions_AlertActionCreatorsDefault.show(obj2);
      };
      obj.icon = jsx(guild(reportId[11]).DoorExitIcon, { color: "text-feedback-critical" });
      return jsx(guild.addCallback(reportId[12]), {
        title: null,
        disabledTitle: null,
        description: null,
        disabled: null,
        variant: "danger",
        onPress: null,
        icon: null,
      });
    };
