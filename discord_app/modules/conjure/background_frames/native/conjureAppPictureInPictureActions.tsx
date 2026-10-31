// === Module 19116: conjureAppPictureInPictureActions ===

// Module 19116 (conjureAppPictureInPictureActions)
import _modDef3868 from "module_3868" /* 3868 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7364 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11824 */;
import getConjureAppSoundButtonDefault from "getConjureAppSoundButton" /* 14381 */;
import closeFrameDefault from "closeFrame" /* 14382 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18662 */;
import FramesStore from "FramesStore" /* 6846 */;

require = fn;
function getConjureAppPictureInPictureActions(id, appName, arg2) {
  _require = id;
  const obj = { label: null, IconComponent: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.formatToPlainString(_modDef3868.dPf03z, { appName });
  obj.IconComponent = require("WindowLaunchIcon").WindowLaunchIcon;
  obj.onPress = function onPress() {
    return conjureBackgroundFrames.returnToConjureFrameSurface(closure_0);
  };
  const items = [obj];
  if (arg2) {
    items.push(getConjureAppSoundButtonDefault(id.id, id.data.userMuted));
  }
  const obj3 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
  const intl2 = tmp(1113).intl;
  obj3.label = intl2.string(require("util").t.VkMnR2);
  obj3.IconComponent = require("DoorExitIcon").DoorExitIcon;
  obj3.onPress = function onPress() {
    return closeFrameDefault(id.id);
  };
  items.push(obj3);
  return items;
}
const asLaunched = fn(6847).asLaunched;
const ConjureAppPictureInPicture = "ConjureAppPictureInPicture";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureActions.tsx");

export const CONJURE_APP_PICTURE_IN_PICTURE_LOCATION = "ConjureAppPictureInPicture";
export { getConjureAppPictureInPictureActions };
export function showConjureAppPictureInPictureActions(frameId, title) {
  const tmp = asLaunched(FramesStore.getFrame(frameId));
  if (null != tmp) {
    const obj2 = { key: "ConjureAppPictureInPicture", header: null, options: null, hasIcons: true };
    const obj3 = { title };
    obj2.header = obj3;
    const obj = Sheet_showSimpleActionSheet;
    obj2.options = getConjureAppPictureInPictureActions(tmp, title, 2 === EmbeddedAppShimExperiment.getEmbeddedAppShimVersion(ConjureAppPictureInPicture));
    const result = obj.showSimpleActionSheet(obj2);
  }
}