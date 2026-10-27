// discord_app/modules/conjure/publish_schedule/native/ConjurePublishScheduleProposalCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3831 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import useConjurePublishScheduleProposalDefault from "../useConjurePublishScheduleProposal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/conjure/publish_schedule/native/ConjurePublishScheduleProposalCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishScheduleProposalCard(arg0) {
      const cResult = c.c(22);
      ({ projectId, proposal, current } = arg0);
      const tmp5 = useConjurePublishScheduleProposalDefault(projectId, proposal, current);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl = util.intl;
        obj2.children = intl.string(_modDef3831.ZtfX9V);
        const tmp8 = React3(Text_Text.Text, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp5.summary) {
        const obj3 = { variant: "text-md/medium", color: "text-default", children: tmp5.summary };
        const tmp11 = React3(Text_Text.Text, obj3);
        cResult[1] = tmp5.summary;
        cResult[2] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp5.firstPublish) {
        let tmp13 = null;
        if (null != tmp5.firstPublish) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp5.firstPublish };
          tmp13 = React3(Text_Text.Text, obj4);
        }
        cResult[3] = tmp5.firstPublish;
        cResult[4] = tmp13;
        let tmp12 = tmp13;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj5.children = intl2.string(_modDef3831.cxNHma);
        const tmp17 = React3(Text_Text.Text, obj5);
        cResult[5] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp5.status) {
        let tmp19 = null;
        if ("on" === tmp5.status) {
          const obj6 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: null };
          const intl3 = util.intl;
          obj6.children = intl3.string(_modDef3831.k4IRsm);
          tmp19 = React3(Text_Text.Text, obj6);
        }
        cResult[6] = tmp5.status;
        cResult[7] = tmp19;
        let tmp18 = tmp19;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === tmp5.error) {
        if (cResult[9] === tmp5.status) {
          let tmp21 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp18) {
              if (cResult[14] === tmp21) {
                let tmp24 = cResult[15];
              }
              if (cResult[16] === tmp5.onTurnOn) {
                if (cResult[17] === tmp5.status) {
                  let tmp27 = cResult[18];
                }
                if (cResult[19] === tmp24) {
                  if (cResult[20] === tmp27) {
                    let tmp30 = cResult[21];
                  }
                  return tmp30;
                }
                const obj7 = { children: null };
                const obj8 = { direction: "vertical", spacing: 8, children: null };
                const items = [first, tmp24, tmp27];
                obj8.children = items;
                obj7.children = React4(Stack_Stack.Stack, obj8);
                const tmp34 = React3(ConjureNativeCardSurfaceDefault, obj7);
                cResult[19] = tmp24;
                cResult[20] = tmp27;
                cResult[21] = tmp34;
                tmp30 = tmp34;
                const tmp4Result = ConjureNativeCardSurfaceDefault;
              }
              let tmp28 = null;
              if (null != tmp5.onTurnOn) {
                const obj9 = { text: null, variant: "secondary", loading: null, disabled: null, onPress: null };
                const intl4 = util.intl;
                obj9.text = intl4.string(_modDef3831.EuhBSG);
                obj9.loading = "sending" === tmp5.status;
                obj9.disabled = "sending" === tmp5.status;
                obj9.onPress = tmp5.onTurnOn;
                tmp28 = React3(components_Button_Button.Button, obj9);
              }
              cResult[16] = tmp5.onTurnOn;
              cResult[17] = tmp5.status;
              cResult[18] = tmp28;
              tmp27 = tmp28;
            }
          }
        }
        const obj10 = { direction: "vertical", spacing: 4, children: null };
        const items1 = [tmp9, tmp12, tmp15, tmp18, tmp21];
        obj10.children = items1;
        const tmp26 = React4(Stack_Stack.Stack, obj10);
        cResult[11] = tmp9;
        cResult[12] = tmp12;
        cResult[13] = tmp18;
        cResult[14] = tmp21;
        cResult[15] = tmp26;
        tmp24 = tmp26;
      }
      let tmp22 = null;
      if ("error" === tmp5.status) {
        const obj11 = {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          accessibilityRole: "alert",
          children: tmp5.error,
        };
        tmp22 = React3(Text_Text.Text, obj11);
      }
      cResult[8] = tmp5.error;
      cResult[9] = tmp5.status;
      cResult[10] = tmp22;
      tmp21 = tmp22;
    }
  : function ConjurePublishScheduleProposalCard(arg0) {
      ({ projectId, proposal, current } = arg0);
      const tmp3 = useConjurePublishScheduleProposalDefault(projectId, proposal, current);
      const obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl = util.intl;
      obj.children = intl.string(_modDef3831.ZtfX9V);
      const items = [React3(Text_Text.Text, obj), ,];
      const items1 = [
        React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: tmp3.summary }),
        ,
        ,
        ,
      ];
      let tmp4Result = null;
      if (null != tmp3.firstPublish) {
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp3.firstPublish };
        tmp4Result = React3(Text_Text.Text, obj3);
      }
      items1[1] = tmp4Result;
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(_modDef3831.cxNHma);
      items1[2] = React3(Text_Text.Text, obj4);
      let tmp4Result4 = null;
      if ("on" === tmp3.status) {
        const obj5 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: null };
        const intl3 = util.intl;
        obj5.children = intl3.string(_modDef3831.k4IRsm);
        tmp4Result4 = React3(Text_Text.Text, obj5);
      }
      items1[3] = tmp4Result4;
      let tmp4Result5 = null;
      if ("error" === tmp3.status) {
        const obj6 = {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          accessibilityRole: "alert",
          children: tmp3.error,
        };
        tmp4Result5 = React3(Text_Text.Text, obj6);
      }
      items1[4] = tmp4Result5;
      items[1] = React4(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
      let tmp4Result6 = null;
      if (null != tmp3.onTurnOn) {
        const obj7 = { text: null, variant: "secondary", loading: null, disabled: null, onPress: null };
        const intl4 = util.intl;
        obj7.text = intl4.string(_modDef3831.EuhBSG);
        obj7.loading = "sending" === tmp3.status;
        obj7.disabled = "sending" === tmp3.status;
        obj7.onPress = tmp3.onTurnOn;
        tmp4Result6 = React3(components_Button_Button.Button, obj7);
      }
      const obj2 = { variant: "text-md/medium", color: "text-default", children: tmp3.summary };
      const tmp5 = ConjureNativeCardSurfaceDefault;
      items[2] = tmp4Result6;
      return React3(tmp5, {
        children: React4(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
      });
    };
