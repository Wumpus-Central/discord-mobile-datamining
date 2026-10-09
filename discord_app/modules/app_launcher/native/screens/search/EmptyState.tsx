// discord_app/modules/app_launcher/native/screens/search/EmptyState.tsx
import util from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({
  container: { position: "relative", justifyContent: "center", alignItems: "center" },
  textContainer: { justifyContent: "center", width: "100%" },
  text: { marginTop: 16, textAlign: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyState(showsGenericMessage) {
      const cResult = showsGenericMessage(576).c(14);
      showsGenericMessage = showsGenericMessage.showsGenericMessage;
      let tmp4 = undefined !== showsGenericMessage;
      if (tmp4) {
        tmp4 = showsGenericMessage;
      }
      showsGenericMessage = tmp4;
      const tmp5 = closure_5();
      const obj = showsGenericMessage(576);
      const logAppLauncherEmptyStateView = showsGenericMessage(11681).useLogAppLauncherEmptyStateView(
        tmp(10588).AppLauncherEmptyStateType.SEARCH_EMPTY,
        showsGenericMessage.query,
      );
      if (cResult[0] !== tmp4) {
        const fn = function o() {
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (showsGenericMessage) {
            let stringResult = string(t.aOkFv8);
          } else {
            stringResult = string(t.LSNOYf);
          }
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(stringResult, "polite");
        };
        const items = [tmp4];
        cResult[0] = tmp4;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      if (cResult[3] !== tmp4) {
        let intl = tmp(1126).intl;
        let string = intl.string;
        let aOkFv8 = tmp(1126).t;
        if (tmp4) {
          aOkFv8 = aOkFv8.aOkFv8;
          let stringResult = string(aOkFv8);
        } else {
          stringResult = string(aOkFv8.LSNOYf);
        }
        cResult[3] = tmp4;
        cResult[4] = stringResult;
      } else {
        if (cResult[5] === tmp5.text) {
          if (cResult[6] === tmp10) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] === tmp5.textContainer) {
            if (cResult[9] === tmp13) {
              let tmp16 = cResult[10];
            }
            if (cResult[11] === tmp5.container) {
              if (cResult[12] === tmp16) {
                let tmp20 = cResult[13];
              }
              return tmp20;
            }
            const obj2 = { style: tmp5.container, children: tmp16 };
            const tmp23 = <View style={tmp5.container}>{tmp16}</View>;
            cResult[11] = tmp5.container;
            cResult[12] = tmp16;
            cResult[13] = tmp23;
            tmp20 = tmp23;
          }
          const obj3 = { style: tmp5.textContainer, children: tmp13 };
          const tmp19 = <View style={tmp5.textContainer}>{tmp13}</View>;
          cResult[8] = tmp5.textContainer;
          cResult[9] = tmp13;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
        const obj4 = { style: tmp5.text, variant: "text-sm/medium", color: "text-default", children: cResult[4] };
        const tmp15 = jsx(tmp(5087).Text, {
          style: tmp5.text,
          variant: "text-sm/medium",
          color: "text-default",
          children: cResult[4],
        });
        cResult[5] = tmp5.text;
        cResult[6] = cResult[4];
        cResult[7] = tmp15;
        tmp13 = tmp15;
      }
      const tmpResult = showsGenericMessage(11681);
    }
  : function EmptyState(showsGenericMessage) {
      let flag = showsGenericMessage.showsGenericMessage;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_5();
      const logAppLauncherEmptyStateView = flag(11681).useLogAppLauncherEmptyStateView(
        flag(10588).AppLauncherEmptyStateType.SEARCH_EMPTY,
        showsGenericMessage.query,
      );
      const items = [flag];
      const effect = noop.useEffect(() => {
        const intl = util.intl;
        const string = intl.string;
        const t = util.t;
        if (flag) {
          let stringResult = string(t.aOkFv8);
        } else {
          stringResult = string(t.LSNOYf);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult, "polite");
      }, items);
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.textContainer, children: null };
      const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
      let intl = flag(1126).intl;
      let string = intl.string;
      let t = flag(1126).t;
      if (flag) {
        let stringResult = string(t.aOkFv8);
      } else {
        stringResult = string(t.LSNOYf);
      }
      obj4.children = stringResult;
      obj3.children = jsx(flag(5087).Text, {
        style: tmp.text,
        variant: "text-sm/medium",
        color: "text-default",
        children: null,
      });
      obj2.children = <View style={tmp.textContainer}>{null}</View>;
      return <View style={tmp.container}>{null}</View>;
    };
