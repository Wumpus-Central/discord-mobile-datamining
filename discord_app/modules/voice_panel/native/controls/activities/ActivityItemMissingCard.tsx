// discord_app/modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
function ActivityItemEmptyCard(activity) {
  activity = activity.activity;
  const application = activity.application;
  let channelId;
  const context = noop.useContext(application(channelId[6]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  const targetDimensions = layoutManager.getTargetDimensions(undefined);
  ({ width, height } = targetDimensions);
  const analyticsLocations = application(channelId[7])().analyticsLocations;
  const items = [activity.launchId, analyticsLocations, application, channelId];
  const callback = noop.useCallback(
    analyticsLocations(function* () {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj1 = {
                channelId,
                applicationId: application.id,
                launchId: activity.launchId,
                inputApplication: application,
                analyticsLocations,
              };
              c1 = 1;
              v3 = 1;
              const obj2 = { value: v3(closure_1_2[8]).maybeJoinEmbeddedActivity(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    }),
    items,
  );
  let obj = { applicationId: activity.applicationId, size: width, names: ["embedded_background"] };
  const tmp = closure_8();
  obj = { activeOpacity: 0.7, onPress: callback, style: tmp.disabledActivity, children: null };
  obj = { imageBackground: application(channelId[9])(obj), aspectRatio: width / height };
  const items1 = [
    closure_6(application(channelId[11]), obj),
    closure_6(application(channelId[12]), {
      channelId,
      applicationId: application.id,
      applicationName: application.name,
    }),
  ];
  obj.children = items1;
  return closure_7(activity(channelId[10]).PressableOpacity, obj);
}
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let obj = { loadingActivity: null, disabledActivity: null };
let size = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.loadingActivity = size;
const size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.disabledActivity = size1;
let closure_8 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default noop.memo(function ActivityItemMissingCard(arg0) {
  ({ activity, application } = arg0);
  if (null != activity) {
    if (null != application) {
      let obj = { activity, application };
      let tmp4 = timestampProducer(ActivityItemEmptyCard, obj);
    }
    return tmp4;
  }
  obj = { style: closure_8().loadingActivity, children: null };
  const tmp = closure_8();
  obj.children = timestampProducer(ActivityIndicator, { size: "large" });
  tmp4 = timestampProducer(NativeViewDefault, obj);
});
