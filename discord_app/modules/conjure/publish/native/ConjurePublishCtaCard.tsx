// discord_app/modules/conjure/publish/native/ConjurePublishCtaCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useConjurePublishAction from "../useConjurePublishAction.tsx";
import ConjurePublishSheetDefault from "ConjurePublishSheet.tsx";
import conjurePublishCard from "../conjurePublishCard.tsx";
import ConjureTipInlineCalloutDefault from "../../tips/native/ConjureTipInlineCallout.tsx";
import ConjurePublishRatingDefault from "ConjurePublishRating.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const useConjurePublishActionDefault = useConjurePublishAction;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PublishCta(projectId) {
      const cResult = projectId(576).c(7);
      projectId = projectId.projectId;
      const publish = projectId.publish;
      const context = noop.useContext(projectId(11816).ConjurePublishActionContext);
      if (cResult[0] === context) {
        if (cResult[1] === projectId) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === publish.label) {
          if (cResult[4] === publish.publishing) {
            if (cResult[5] === tmp5) {
              let tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
        const obj2 = { direction: "horizontal", children: null };
        const obj5 = { text: null, variant: "primary", size: "sm", loading: null, onPress: null };
        ({ label: obj3.text, publishing: obj3.loading } = publish);
        obj5.onPress = tmp5;
        obj2.children = closure_4(tmp(5230).Button, obj5);
        const tmp8 = closure_4(tmp(5964).Stack, obj2);
        cResult[3] = publish.label;
        cResult[4] = publish.publishing;
        cResult[5] = tmp5;
        cResult[6] = tmp8;
        tmp6 = tmp8;
      }
      const fn = function u() {
        if (null != context) {
          ConjurePublishSheetDefault(projectId, tmp.guildId, "card");
        }
      };
      cResult[0] = context;
      cResult[1] = projectId;
      cResult[2] = fn;
      tmp5 = fn;
      const obj = projectId(576);
    }
  : function PublishCta(arg0) {
      ({ projectId: require, publish } = arg0);
      closure_1 = noop.useContext(useConjurePublishAction.ConjurePublishActionContext);
      const obj = {
        direction: "horizontal",
        children: closure_4(components_Button_Button.Button, {
          text: publish.label,
          variant: "primary",
          size: "sm",
          loading: publish.publishing,
          onPress() {
            if (null != closure_1) {
              ConjurePublishSheetDefault(require, tmp.guildId, "card");
            }
          },
        }),
      };
      return closure_4(Stack_Stack.Stack, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishCtaCard(arg0) {
      const cResult = c.c(5);
      ({ projectId, turnId, cta } = arg0);
      const tmp5 = useConjurePublishActionDefault(projectId);
      if (cResult[0] === cta) {
        if (cResult[1] === projectId) {
          if (cResult[2] === tmp5) {
            if (cResult[3] === turnId) {
              let tmp6 = cResult[4];
            }
            return tmp6;
          }
        }
      }
      let tmp8Result2 = null;
      if (null != tmp5) {
        tmp8Result2 = null;
        if (tmpResult.isConjurePublishCtaVisible(tmp5, cta)) {
          const obj2 = { projectId, publish: tmp5 };
          const items = [React4(closure_6, obj2)];
          let tmp8Result = null;
          if (null != turnId) {
            const obj3 = { projectId, turnId, cta, status: tmp5.status };
            tmp8Result = React4(ConjurePublishRatingDefault, obj3, turnId);
          }
          const obj4 = { children: null };
          const obj5 = { spacing: 12, children: null };
          items[1] = tmp8Result;
          obj5.children = items;
          obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
          tmp8Result2 = React4(ConjureTipInlineCalloutDefault, obj4);
          const tmp4Result = ConjureTipInlineCalloutDefault;
        }
        tmpResult = conjurePublishCard;
      }
      cResult[0] = cta;
      cResult[1] = projectId;
      cResult[2] = tmp5;
      cResult[3] = turnId;
      cResult[4] = tmp8Result2;
      tmp6 = tmp8Result2;
    }
  : function ConjurePublishCtaCard(arg0) {
      ({ projectId, turnId, cta } = arg0);
      const tmp3 = useConjurePublishActionDefault(projectId);
      let tmp6Result2 = null;
      if (null != tmp3) {
        tmp6Result2 = null;
        if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
          const obj2 = { projectId, publish: tmp3 };
          const items = [React4(closure_6, obj2)];
          let tmp6Result = null;
          if (null != turnId) {
            const obj3 = { projectId, turnId, cta, status: tmp3.status };
            tmp6Result = React4(ConjurePublishRatingDefault, obj3, turnId);
          }
          const obj4 = { children: null };
          const obj5 = { spacing: 12, children: null };
          items[1] = tmp6Result;
          obj5.children = items;
          obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
          tmp6Result2 = React4(ConjureTipInlineCalloutDefault, obj4);
          const tmpResult = ConjureTipInlineCalloutDefault;
        }
        obj = conjurePublishCard;
      }
      return tmp6Result2;
    };
