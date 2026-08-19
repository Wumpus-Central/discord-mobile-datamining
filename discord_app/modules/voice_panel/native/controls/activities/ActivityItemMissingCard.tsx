// === Module 16362: ActivityItemEmptyCard ===

// Module 16362 (ActivityItemEmptyCard)
import ThemesDefault from "Themes" /* 712 */;
import obj132Default from "obj132" /* 7190 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function ActivityItemEmptyCard(activity) {
  activity = activity.activity;
  const application = activity.application;
  let channelId;
  const context = importAllResult.useContext(application(channelId[6]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  const targetDimensions = layoutManager.getTargetDimensions(undefined);
  ({ width, height } = targetDimensions);
  const analyticsLocations = application(channelId[7])().analyticsLocations;
  const items = [activity.launchId, analyticsLocations, application, channelId];
  const callback = importAllResult.useCallback(analyticsLocations(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === id) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = { channelId: null, applicationId: null, launchId: null, inputApplication: null, analyticsLocations: null };
            obj1[0] = channelId;
            obj1[1] = id.id;
            obj1[2] = v0.launchId;
            obj1[3] = id;
            obj1[4] = analyticsLocations;
            id = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = v0(channelId[8]).maybeJoinEmbeddedActivity(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  }), items);
  const tmp = callback3();
  let obj = { activeOpacity: 0.7, onPress: callback, style: tmp.disabledActivity, children: null };
  obj = { imageBackground: application(channelId[9])(obj), aspectRatio: width / height };
  const items1 = [callback(application(channelId[11]), obj), callback(application(channelId[12]), { channelId, applicationId: application.id, applicationName: application.name })];
  obj[3] = items1;
  return callback2(activity(channelId[10]).PressableOpacity, obj);
}
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
const createCacheKey = { width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ActivityItemMissingCard(arg0) {
  ({ activity, application } = arg0);
  if (null != activity) {
    if (null != application) {
      let obj = { activity: null, application: null };
      obj[0] = activity;
      obj[1] = application;
      let tmp4 = callback(ActivityItemEmptyCard, obj);
    }
    return tmp4;
  }
  obj = { style: callback3().loadingActivity, children: null };
  const tmp = callback3();
  obj[1] = callback(ActivityIndicator, { size: "large" });
  tmp4 = callback(obj132Default, obj);
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default memoResult;