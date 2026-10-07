// discord_app/modules/conjure/plan/native/ConjurePlanWidget.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import UserProfileApplicationWidgetTypes from "../../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import UserProfileApplicationWidgetCardDefault from "../../../user_profile/native/UserProfileApplicationWidgetCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(16);
      ({ applicationId, rendererProps } = arg0);
      const tmp4 = closure_7();
      const tmp6 = UserProfileSharedStylesDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function p() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[2] !== applicationId) {
        const obj2 = { applicationId };
        const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
        cResult[2] = applicationId;
        cResult[3] = applicationWidget;
        let tmp11 = applicationWidget;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl = util.intl;
        obj3.children = intl.string(_modDef3753.ove4zH);
        const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[4] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[4];
      }
      if (cResult[5] === tmp6.card) {
        if (cResult[6] === tmp4.card) {
          let tmp20 = cResult[7];
        }
        if (cResult[8] === rendererProps) {
          if (cResult[9] === tmp20) {
            if (cResult[10] === stateFromStores) {
              if (cResult[11] === tmp11) {
                let tmp21 = cResult[12];
              }
              const _Symbol = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
                const intl2 = util.intl;
                obj4.children = intl2.string(_modDef3753.XcIrHx);
                const tmp26 = hasOwnProperty(Text_Text.Text, obj4);
                cResult[13] = tmp26;
                let tmp24 = tmp26;
              } else {
                tmp24 = cResult[13];
              }
              if (cResult[14] !== tmp21) {
                const obj5 = { direction: "vertical", spacing: 4, children: null };
                const items1 = [tmp17, tmp21, tmp24];
                obj5.children = items1;
                const tmp29 = timestampProducer(Stack_Stack.Stack, obj5);
                cResult[14] = tmp21;
                cResult[15] = tmp29;
                let tmp27 = tmp29;
              } else {
                tmp27 = cResult[15];
              }
              return tmp27;
            }
          }
        }
        const obj6 = { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp20 };
        const tmp23 = hasOwnProperty(UserProfileApplicationWidgetCardDefault, obj6);
        cResult[8] = rendererProps;
        cResult[9] = tmp20;
        cResult[10] = stateFromStores;
        cResult[11] = tmp11;
        cResult[12] = tmp23;
        tmp21 = tmp23;
      }
      const items2 = [tmp6.card, tmp4.card];
      cResult[5] = tmp6.card;
      cResult[6] = tmp4.card;
      cResult[7] = items2;
      tmp20 = items2;
      const tmpResult = initialize;
    }
  : (applicationId) => {
      applicationId = applicationId.applicationId;
      const tmp = closure_7();
      const tmp2 = UserProfileSharedStylesDefault();
      const items = [AuthenticationStore];
      const items1 = [applicationId];
      const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
      const memo = noop.useMemo(() => {
        const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget({ applicationId });
        return applicationWidget;
      }, items1);
      const obj2 = { direction: "vertical", spacing: 4, children: null };
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl = applicationId(1126).intl;
      obj3.children = intl.string(_modDef3753.ove4zH);
      const items2 = [closure_5(applicationId(4892).Text, obj3), ,];
      const obj4 = {
        userId: stateFromStores,
        widget: memo,
        rendererProps: applicationId.rendererProps,
        cardStyle: null,
      };
      const items3 = [tmp2.card, tmp.card];
      obj4.cardStyle = items3;
      items2[1] = closure_5(UserProfileApplicationWidgetCardDefault, obj4);
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl2 = applicationId(1126).intl;
      obj5.children = intl2.string(_modDef3753.XcIrHx);
      items2[2] = closure_5(applicationId(4892).Text, obj5);
      obj2.children = items2;
      return closure_6(applicationId(5600).Stack, obj2);
    };
