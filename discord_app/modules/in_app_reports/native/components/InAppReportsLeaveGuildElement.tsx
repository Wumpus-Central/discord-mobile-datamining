// === Module 12734: InAppReportsLeaveGuildElement ===

// Module 12734 (InAppReportsLeaveGuildElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import AlertDefault from "Alert" /* 5790 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild, onConfirm;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let closure_4;
  let reportId;
  let tmp5;
  let tmp7;
  let tmp8;
  const tmp = guild;
  let obj = guild(reportId[5]);
  const cResult = obj.c(19);
  guild = guild.guild;
  const addCallback = guild.addCallback;
  reportId = guild.reportId;
  let obj2 = react;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, _slicedToArray] = tmp4;
  react = tmp6;
  if (cResult[0] !== (null != guild)) {
    const fn = function s() {
      _slicedToArray(!closure_4);
    };
    const items = [null != guild];
    cResult[0] = null != guild;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = obj2.useEffect(tmp7, tmp8);
  if (cResult[3] === addCallback) {
    if (cResult[4] === guild) {
      let tmp10;
      if (cResult[5] === reportId) {
        tmp10 = cResult[6];
      }
      onConfirm = tmp10;
      let name1;
      const tmp11 = cResult[7];
      if (guild != null) {
        name1 = guild.name;
      }
      if (tmp11 === name1) {
        let tmp13;
        let tmp17;
        let tmp16;
        let tmp22;
        let tmp26;
        if (cResult[8] === tmp10) {
          tmp13 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[9]).intl;
          const stringResult = intl.string(tmp(reportId[9]).t.cU96ip);
          let intl2 = tmp(tmp2[9]).intl;
          const stringResult1 = intl2.string(tmp(reportId[9]).t.rJGMXU);
          cResult[10] = stringResult;
          class A {
            constructor() {
              let TB1og8;
              let formatToPlainString;
              let intl;
              let intl3;
              let intl4;
              let name;
              const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl5.intl;
              const intl2 = intl5.intl;
              formatToPlainString = intl2.formatToPlainString;
              name = undefined;
              TB1og8 = intl5.t.TB1og8;
              if (guild != null) {
                name = guild.name;
              }
              intl3 = intl5.intl;
              intl4 = intl5.intl;
              show(obj);
            }
          }
          cResult[11] = stringResult1;
          tmp17 = stringResult1;
          tmp16 = stringResult;
        } else {
          tmp16 = cResult[10];
          tmp17 = cResult[11];
        }
        const tmp20 = cResult[12];
        class A {
          constructor() {
            let TB1og8;
            let formatToPlainString;
            let intl;
            let intl3;
            let intl4;
            let name;
            const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl5.intl;
            const intl2 = intl5.intl;
            formatToPlainString = intl2.formatToPlainString;
            name = undefined;
            TB1og8 = intl5.t.TB1og8;
            if (guild != null) {
              name = guild.name;
            }
            intl3 = intl5.intl;
            intl4 = intl5.intl;
            show(obj);
          }
        }
        if (tmp20 !== undefined) {
          let name;
          let intl3 = tmp(tmp2[9]).intl;
          let formatToPlainString = intl3.formatToPlainString;
          let name2;
          const prop = tmp(tmp2[9]).t["26mR6/"];
          if (guild != null) {
            name2 = guild.name;
          }
          const obj3 = { guildName: name2 };
          const formatToPlainStringResult = formatToPlainString(prop, obj3);
          class A {
            constructor() {
              let TB1og8;
              let formatToPlainString;
              let intl;
              let intl3;
              let intl4;
              let name;
              const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl5.intl;
              const intl2 = intl5.intl;
              formatToPlainString = intl2.formatToPlainString;
              name = undefined;
              TB1og8 = intl5.t.TB1og8;
              if (guild != null) {
                name = guild.name;
              }
              intl3 = intl5.intl;
              intl4 = intl5.intl;
              show(obj);
            }
          }
          if (guild != null) {
            name = guild.name;
          }
          cResult[12] = name;
          cResult[13] = formatToPlainStringResult;
          tmp22 = formatToPlainStringResult;
        } else {
          tmp22 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = jsx(tmp(reportId[11]).DoorExitIcon, { color: "text-feedback-critical" });
          cResult[14] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[14];
        }
        if (cResult[15] === tmp13) {
          if (cResult[16] === tmp5) {
            let tmp29;
            if (cResult[17] === tmp22) {
              tmp29 = cResult[18];
            }
            return tmp29;
          }
        }
        const tmp32 = jsx(addCallback(reportId[12]), { title: tmp16, disabledTitle: tmp17, description: tmp22, disabled: tmp5, variant: "danger", onPress: tmp13, icon: tmp26 });
        cResult[15] = tmp13;
        cResult[16] = tmp5;
        cResult[17] = tmp22;
        cResult[18] = tmp32;
        tmp29 = tmp32;
      }
      let name3;
      if (guild != null) {
        name3 = guild.name;
      }
      class A {
        constructor() {
          let TB1og8;
          let formatToPlainString;
          let intl;
          let intl3;
          let intl4;
          let name;
          const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl5.intl;
          const intl2 = intl5.intl;
          formatToPlainString = intl2.formatToPlainString;
          name = undefined;
          TB1og8 = intl5.t.TB1og8;
          if (guild != null) {
            name = guild.name;
          }
          intl3 = intl5.intl;
          intl4 = intl5.intl;
          show(obj);
        }
      }
      cResult[7] = name3;
      cResult[8] = tmp10;
      cResult[9] = A;
      tmp13 = A;
    }
  }
  const fn2 = function f() {
    let id;
    if (null != guild) {
      addCallback(() => {
        const obj = addCallback(reportId[6]);
        return obj.leaveGuild(id.id);
      });
      let obj = AppAnalyticsUtilsDefault;
      const obj2 = { guild_id: tmp.id, report_id: reportId };
      obj.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
      _slicedToArray(true);
    }
  };
  cResult[3] = addCallback;
  cResult[4] = guild;
  cResult[5] = reportId;
  cResult[6] = fn2;
  tmp10 = fn2;
}) : ((guild) => {
  let closure_3;
  let closure_4;
  let first;
  guild = guild.guild;
  const addCallback = guild.addCallback;
  const reportId = guild.reportId;
  _slicedToArray = undefined;
  react = undefined;
  [first, _slicedToArray] = react.useState(false);
  const tmp3 = null != guild;
  react = tmp3;
  const items = [tmp3];
  const effect = react.useEffect(() => {
    closure_3(!closure_4);
  }, items);
  const items1 = [addCallback, reportId, guild];
  onConfirm = react.useCallback(() => {
    let id;
    if (null != guild) {
      addCallback(() => {
        const obj = addCallback(reportId[6]);
        return obj.leaveGuild(id.id);
      });
      let obj = AppAnalyticsUtilsDefault;
      const obj2 = { guild_id: tmp.id, report_id: reportId };
      obj.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
      closure_3(true);
    }
  }, items1);
  addCallback(reportId[12]);
  let intl = guild(reportId[9]).intl;
  let intl2 = guild(reportId[9]).intl;
  let intl3 = guild(reportId[9]).intl;
  let formatToPlainString = intl3.formatToPlainString;
  let name;
  const prop = guild(reportId[9]).t["26mR6/"];
  if (guild != null) {
    name = guild.name;
  }
  return <tmp7 title={intl.string(guild(reportId[9]).t.cU96ip)} disabledTitle={intl2.string(guild(reportId[9]).t.rJGMXU)} description={formatToPlainString(prop, { guildName: name })} disabled={first} variant="danger" onPress={function onPress() {
    let TB1og8;
    let formatToPlainString;
    let intl;
    let intl3;
    let intl4;
    let name;
    const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl5.intl;
    const intl2 = intl5.intl;
    formatToPlainString = intl2.formatToPlainString;
    name = undefined;
    TB1og8 = intl5.t.TB1og8;
    if (guild != null) {
      name = guild.name;
    }
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    show(obj);
  }} icon={null} />;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default tmp2;