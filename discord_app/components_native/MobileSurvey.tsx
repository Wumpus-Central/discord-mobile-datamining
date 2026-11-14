// === Module 19795: MobileSurvey ===

// Module 19795 (MobileSurvey)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import LinkingDefault from "Linking" /* 6012 */;
import useAlertStore from "useAlertStore" /* 6270 */;
import noop from "module_19" /* 19 */;
import SurveyStore from "SurveyStore" /* 6890 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  items = [SurveyStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != combined) {
      const obj2 = { type: "survey", promotion_id: tmp.id };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      stateFromStores(18356).surveySeen(tmp.key);
      const _HermesInternal = HermesInternal;
      combined = "mobile-survey-" + tmp.key;
      const obj4 = stateFromStores(6270);
      const obj6 = { title: null, content: null, actions: null };
      ({ prompt: obj5.title, body } = tmp);
      obj6.content = body;
      const obj7 = { variant: "primary", text: tmp.cta, icon: null, iconPosition: "end", onPress: null };
      const obj8 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
      obj7.icon = closure_1_6(stateFromStores(15195).WindowLaunchIcon, obj8);
      obj7.onPress = function onPress() {
        LinkingDefault.openURL(combined.url);
        stateFromStores(18356).surveyHide(combined.key, false);
      };
      items = [closure_1_6(stateFromStores(6274).AlertActionButton, obj7), ];
      if (null != tmp.secondary_cta) {
        if ("" !== tmp.secondary_cta) {
          let secondary_cta = tmp.secondary_cta;
        }
        const obj9 = { children: null };
        const obj15 = {
          variant: "secondary",
          text: secondary_cta,
          onPress() {
                return stateFromStores(18356).surveyHide(combined.key, true);
              }
        };
        items[1] = closure_1_6(tmp13, obj15);
        obj9.children = items;
        obj6.actions = closure_1_8(closure_1_7, obj9);
        obj4.openAlert(combined, closure_1_6(stateFromStores(6274).AlertModal, obj6), undefined, { dismissable: false });
        return () => useAlertStore.dismissAlert(combined);
      }
      const intl = stateFromStores(1113).intl;
      secondary_cta = intl.string(stateFromStores(1113).t.f3Pet9);
      const obj3 = stateFromStores(18356);
    }
  }, items1);
  return null;
};