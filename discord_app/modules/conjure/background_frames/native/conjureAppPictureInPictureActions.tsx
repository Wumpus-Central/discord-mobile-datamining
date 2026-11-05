// === Module 19429: conjureAppPictureInPictureActions ===

// Module 19429 (conjureAppPictureInPictureActions)
import _modDef3995 from "module_3995" /* 3995 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7502 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11068 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 12031 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 14407 */;
import getConjureAppSoundButtonDefault from "getConjureAppSoundButton" /* 14621 */;
import closeFrameDefault from "closeFrame" /* 14622 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 16626 */;
import FramesStore from "FramesStore" /* 6984 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;

require = fn;
function getConjureAppPictureInPictureActions(id, c8, c9) {
  _require = id;
  let obj = { label: null, IconComponent: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.formatToPlainString(_modDef3995.dPf03z, { appName });
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
  items = [obj];
  if (c9) {
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
const asLaunched = fn(6985).asLaunched;
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
export function showConjureAppPictureInPictureActions(c0, c8) {
  const tmp = asLaunched(FramesStore.getFrame(c0));
  if (null != tmp) {
    const obj2 = { key: "ConjureAppPictureInPicture", header: null, options: null, hasIcons: true };
    const obj3 = { title };
    obj2.header = obj3;
    const obj = Sheet_showSimpleActionSheet;
    obj2.options = getConjureAppPictureInPictureActions(tmp, title, 2 === EmbeddedAppShimExperiment.getEmbeddedAppShimVersion(ConjureAppPictureInPicture));
    const result = obj.showSimpleActionSheet(obj2);
  }
}