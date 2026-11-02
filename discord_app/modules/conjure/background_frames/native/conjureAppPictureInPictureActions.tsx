// === Module 19122: conjureAppPictureInPictureActions ===

// Module 19122 (conjureAppPictureInPictureActions)
import _modDef3868 from "module_3868" /* 3868 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7364 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11825 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 14175 */;
import getConjureAppSoundButtonDefault from "getConjureAppSoundButton" /* 14396 */;
import closeFrameDefault from "closeFrame" /* 14397 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 16366 */;
import FramesStore from "FramesStore" /* 6846 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

require = fn;
function getConjureAppPictureInPictureActions(id, appName, arg2) {
  _require = id;
  let obj = { label: null, IconComponent: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.formatToPlainString(_modDef3868.dPf03z, { appName });
  obj.IconComponent = require("WindowLaunchIcon").WindowLaunchIcon;
  obj.onPress = function onPress() {
    if (obj.isConjurePreviewSurface(id.surface)) {
      const result = ConjureProjectStore.findProjectByApplicationId(id.applicationId);
      if (null != result) {
        openConjureProjectInBuilderDefault(result);
      }
    } else {
      const result1 = conjureBackgroundFrames.returnToConjureFrameSurface(id);
      const tmp2Result = conjureBackgroundFrames;
    }
    obj = conjurePreviewSurface;
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
export function openConjureAppPictureInPictureFrame(surface) {
  if (obj.isConjurePreviewSurface(surface.surface)) {
    const result = ConjureProjectStore.findProjectByApplicationId(surface.applicationId);
    if (null != result) {
      openConjureProjectInBuilderDefault(result);
    }
  } else {
    const result1 = conjureBackgroundFrames.returnToConjureFrameSurface(surface);
    const tmpResult = conjureBackgroundFrames;
  }
  obj = conjurePreviewSurface;
}
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