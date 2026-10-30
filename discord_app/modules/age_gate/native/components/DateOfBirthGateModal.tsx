// discord_app/modules/age_gate/native/components/DateOfBirthGateModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ageGateNavigationCallbacks from "ageGateNavigationCallbacks.tsx";
import ExistingUserAgeGateDefault from "ExistingUserAgeGate.tsx";
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const AgeGateSource = fn(1098).AgeGateSource;
const AgeGate = fn(19328).ExistingUserAgeGateScreens;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateOfBirthGateModal.tsx");

export default function DateOfBirthGateModal(source) {
  source = source.source;
  let obj = { screens: null, initialRouteName: AgeGate.AgeGate, headerBackTitle: null };
  const items = [source];
  obj.screens = noop.useMemo(() => {
    let fn = ageGateNavigationCallbacks.generateOnBack(source);
    if (fn == null) {
      fn = () => {};
    }
    let obj2 = {};
    let obj3 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: null,
      headerTitle: null,
      render: null,
    };
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
    obj3.headerTitle = ageGateNavigationCallbacks.renderHeaderTitle;
    obj3.render = function render(arg0, arg1) {
      closure_1 = arg1;
      if (closure_0 === constants.NSFW_SERVER_INVITE) {
        if (obj.isIOS()) {
          let fn = () => {
            closure_1.push(NSFWGateGuild.NSFWGateGuild);
            const obj2 = { text: null, variant: "success" };
            const intl = closure_0(1114).intl;
            obj2.text = intl.string(closure_0(1114).t.gUiIGZ);
            closure_2_1(5707).open("AGE_GATE_AGE_VERIFIED", obj2);
          };
        }
        let obj2 = { onSuccess: fn, onClose: null, source: null };
        obj = source(1376);
        obj2.onClose = source(19329).onGateClose;
        obj2.source = tmp;
        return jsx(ExistingUserAgeGateDefault, { onSuccess: fn, onClose: null, source: null });
      }
      fn = () => {
        const result = closure_0(6733).closeAgeGateModalAfterSubmit();
        const obj = closure_0(6733);
        const obj3 = { text: null, variant: "success" };
        const intl = closure_0(1114).intl;
        obj3.text = intl.string(closure_0(1114).t.gUiIGZ);
        closure_2_1(5707).open("AGE_GATE_AGE_VERIFIED", obj3);
        if (closure_0 === constants.FAMILY_CENTER) {
          closure_2_1(7710).initialPageLoad();
          const tmp3Result = closure_2_1(7710);
        }
        const obj2 = closure_2_1(5707);
      };
    };
    obj2[NSFWGateGuild.AgeGate] = obj3;
    const tmpResult = NavigatorHeader;
    obj2[NSFWGateGuild.AgeGateConfirm] = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = source;
        return jsx(ExistingUserAgeGateConfirmDefault, {});
      },
    };
    const obj4 = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = source;
        return jsx(ExistingUserAgeGateConfirmDefault, {});
      },
    };
    obj2[NSFWGateGuild.Blocked] = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(17975), {});
      },
    };
    const obj6 = { headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, headerLeft: null, render: null };
    const obj5 = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(17975), {});
      },
    };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
    obj6.render = function render() {
      const obj = { onClose: source(19329).onGateClose };
      return closure_1_6(closure_1_1(7381), obj);
    };
    obj2[NSFWGateGuild.NSFWGateGuild] = obj6;
    return obj2;
  }, items);
  let intl = source(1114).intl;
  obj.headerBackTitle = intl.string(source(1114).t["13/7kX"]);
  return jsx(source(7163).Navigator, { screens: null, initialRouteName: AgeGate.AgeGate, headerBackTitle: null });
}
