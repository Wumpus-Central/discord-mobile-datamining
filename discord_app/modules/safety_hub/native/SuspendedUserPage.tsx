// discord_app/modules/safety_hub/native/SuspendedUserPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef7728 from "../../../../_runtime/metro/07728__.js";
import SafetyHubPageDefault from "SafetyHubPage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(7512);
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: null,
  text: null,
  link: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  flexDirection: "column",
  height: "100%",
};
obj2.header = {
  backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT,
  flexDirection: "row",
  paddingVertical: nativeDefault.space.PX_8,
  alignItems: "center",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT,
  flexDirection: "row",
  paddingVertical: nativeDefault.space.PX_8,
  alignItems: "center",
};
obj2.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SuspendedUserSafetyHubPage() {
      const cResult = c.c(13);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function s() {
          return ageCheckStatus.getAgeCheckStatus();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function onClose() {
          AuthenticationActionCreatorsDefault.closeSuspendedUser();
        }
        cResult[2] = onClose;
        let tmp9 = onClose;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function openLearnMore() {
          LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        }
        cResult[3] = openLearnMore;
        let tmp10 = openLearnMore;
      } else {
        tmp10 = cResult[3];
      }
      if ((cResult[4] === stateFromStores) !== constants.VERIFIED) {
        if (cResult[5] === tmp4.header) {
          if (cResult[6] === tmp4.link) {
            if (cResult[7] === tmp4.text) {
              let tmp12 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp21 = React5(SafetyHubPageDefault, { visible: true });
              cResult[9] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[9];
            }
            if (cResult[10] === tmp4.container) {
              if (cResult[11] === tmp12) {
                let tmp22 = cResult[12];
              }
              return tmp22;
            }
            const rect = { top: true, right: true, left: true, children: null };
            const obj2 = { style: tmp4.container, children: null };
            const items1 = [tmp12, tmp18];
            obj2.children = items1;
            rect.children = closure_1_8(View, obj2);
            const tmp26 = React5(common_SafeAreaView.SafeAreaPaddingView, rect);
            cResult[10] = tmp4.container;
            cResult[11] = tmp12;
            cResult[12] = tmp26;
            tmp22 = tmp26;
          }
        }
      }
      let tmp13 = tmp11;
      if (stateFromStores !== constants.VERIFIED) {
        const obj3 = { style: tmp4.header, children: null };
        const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
        const intl = util.intl;
        obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
        obj4.onPress = tmp9;
        obj4.icon = _modDef7728;
        const items2 = [React5(IconButton.IconButton, obj4)];
        const obj5 = {
          style: tmp4.text,
          onPress: tmp10,
          variant: "text-xs/medium",
          color: "control-critical-primary-text-default",
          children: null,
        };
        const intl2 = util.intl;
        const items3 = [intl2.string(util.t["MG+Bzb"]), " "];
        const obj6 = {
          style: tmp4.link,
          variant: "text-xs/medium",
          color: "control-critical-primary-text-default",
          children: null,
        };
        const intl3 = util.intl;
        obj6.children = intl3.string(util.t["9JceHN"]);
        items3[2] = React5(Text_Text.Text, obj6);
        obj5.children = items3;
        items2[1] = closure_1_8(Text_Text.Text, obj5);
        obj3.children = items2;
        tmp13 = closure_1_8(View, obj3);
      }
      cResult[4] = stateFromStores !== constants.VERIFIED;
      cResult[5] = tmp4.header;
      cResult[6] = tmp4.link;
      cResult[7] = tmp4.text;
      cResult[8] = tmp13;
      tmp12 = tmp13;
      const tmpResult = initialize;
    }
  : function SuspendedUserSafetyHubPage() {
      const tmp = closure_9();
      const items = [SafetyHubStore];
      let tmp6Result =
        initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
      const obj2 = { style: tmp.container, children: null };
      if (tmp6Result) {
        const obj3 = { style: tmp.header, children: null };
        const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
        const intl = util.intl;
        obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
        obj4.onPress = function onClose() {
          AuthenticationActionCreatorsDefault.closeSuspendedUser();
        };
        obj4.icon = _modDef7728;
        const items1 = [React5(IconButton.IconButton, obj4)];
        const obj5 = {
          style: tmp.text,
          onPress: function openLearnMore() {
            LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
          },
          variant: "text-xs/medium",
          color: "control-critical-primary-text-default",
          children: null,
        };
        const intl2 = util.intl;
        const items2 = [intl2.string(util.t["MG+Bzb"]), " "];
        const obj6 = {
          style: tmp.link,
          variant: "text-xs/medium",
          color: "control-critical-primary-text-default",
          children: null,
        };
        const intl3 = util.intl;
        obj6.children = intl3.string(util.t["9JceHN"]);
        items2[2] = React5(Text_Text.Text, obj6);
        obj5.children = items2;
        items1[1] = closure_1_8(Text_Text.Text, obj5);
        obj3.children = items1;
        tmp6Result = closure_1_8(View, obj3);
      }
      const rect = { top: true, right: true, left: true, children: null };
      const items3 = [tmp6Result, React5(SafetyHubPageDefault, { visible: true })];
      obj2.children = items3;
      rect.children = closure_1_8(View, obj2);
      return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
    };
