// === Module 19388: DateOfBirthGateModal ===

// Module 19388 (DateOfBirthGateModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import ageGateNavigationCallbacks from "ageGateNavigationCallbacks" /* 19386 */;
import ExistingUserAgeGateDefault from "ExistingUserAgeGate" /* 19389 */;
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm" /* 19391 */;
import noop from "module_19" /* 19 */;

require = fn;
const AgeGateSource = fn(1097).AgeGateSource;
const AgeGate = fn(19385).ExistingUserAgeGateScreens;
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
      fn = () => {

      };
    }
    let obj2 = {};
    let obj3 = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE, impressionProperties: { existing_user: true }, headerLeft: null, headerTitle: null, render: null };
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
    obj3.headerTitle = ageGateNavigationCallbacks.renderHeaderTitle;
    obj3.render = function render(arg0, arg1) {
      closure_1 = arg1;
      if (closure_0 === constants.NSFW_SERVER_INVITE) {
        if (obj.isIOS()) {
          let fn = () => {
            closure_1.push(NSFWGateGuild.NSFWGateGuild);
            const obj2 = { text: null, variant: "success" };
            const intl = closure_0(1113).intl;
            obj2.text = intl.string(closure_0(1113).t.gUiIGZ);
            closure_2_1(5712).open("AGE_GATE_AGE_VERIFIED", obj2);
          };
        }
        let obj2 = { onSuccess: fn, onClose: null, source: null };
        obj = source(1375);
        obj2.onClose = source(19386).onGateClose;
        obj2.source = tmp;
        return jsx(ExistingUserAgeGateDefault, { onSuccess: fn, onClose: null, source: null });
      }
      fn = () => {
        const result = closure_0(6739).closeAgeGateModalAfterSubmit();
        const obj = closure_0(6739);
        const obj3 = { text: null, variant: "success" };
        const intl = closure_0(1113).intl;
        obj3.text = intl.string(closure_0(1113).t.gUiIGZ);
        closure_2_1(5712).open("AGE_GATE_AGE_VERIFIED", obj3);
        if (closure_0 === constants.FAMILY_CENTER) {
          closure_2_1(7717).initialPageLoad();
          const tmp3Result = closure_2_1(7717);
        }
        const obj2 = closure_2_1(5712);
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
      }
    };
    const obj4 = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = source;
        return jsx(ExistingUserAgeGateConfirmDefault, {});
      }
    };
    obj2[NSFWGateGuild.Blocked] = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(18018), {});
      }
    };
    const obj6 = { headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, headerLeft: null, render: null };
    const obj5 = {
      fullscreen: true,
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(18018), {});
      }
    };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
    obj6.render = function render() {
      const obj = { onClose: source(19386).onGateClose };
      return closure_1_6(closure_1_1(7387), obj);
    };
    obj2[NSFWGateGuild.NSFWGateGuild] = obj6;
    return obj2;
  }, items);
  let intl = source(1113).intl;
  obj.headerBackTitle = intl.string(source(1113).t["13/7kX"]);
  return jsx(source(7169).Navigator, { screens: null, initialRouteName: AgeGate.AgeGate, headerBackTitle: null });
};