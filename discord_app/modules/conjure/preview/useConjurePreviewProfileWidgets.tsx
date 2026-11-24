// discord_app/modules/conjure/preview/useConjurePreviewProfileWidgets.tsx
import UserProfileApplicationWidgetTypes from "../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewProfileWidgets.tsx");

export default function useConjurePreviewProfileWidgets(arg0, arg1, applicationId) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = applicationId;
  items = [arg0];
  const effect = stateFromStoresArray.useEffect(() => {
    maybeFetchUserProfileDefault(closure_0);
  }, items);
  const items1 = [stateFromStores];
  const items2 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items1,
    () => {
      const userProfile = UserProfileStore.getUserProfile(closure_0);
      let widgets;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
      return widgets;
    },
    items2,
  );
  const obj = require("initialize");
  const items3 = [ConjureProjectStore];
  const items4 = [arg1];
  stateFromStores = require("initialize").useStateFromStores(
    items3,
    () => {
      let tmp2 = null;
      if (null != closure_1) {
        const project = ConjureProjectStore.getProject(tmp);
        application_id = undefined;
        if (project != null) {
          application_id = project.application_id;
        }
        if (application_id == null) {
          application_id = null;
        }
        tmp2 = application_id;
      }
      return tmp2;
    },
    items4,
  );
  const items5 = [stateFromStoresArray, applicationId, stateFromStores];
  return stateFromStoresArray.useMemo(() => {
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget({ applicationId });
    items = [
      applicationWidget,
      ...stateFromStoresArray.filter((applicationId) => {
        let tmp = applicationId instanceof closure_0(closure_2[5]).ApplicationWidget;
        if (tmp) {
          let tmp3 = applicationId.applicationId === applicationId;
          if (!tmp3) {
            tmp3 = applicationId.applicationId === stateFromStores;
          }
          tmp = tmp3;
        }
        return !tmp;
      }),
    ];
    return items;
  }, items5);
}
