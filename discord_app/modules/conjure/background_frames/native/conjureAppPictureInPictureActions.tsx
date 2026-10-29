// === Module 18973: conjureAppPictureInPictureActions ===

// Module 18973 (conjureAppPictureInPictureActions)
import _modDef3864 from "module_3864" /* 3864 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7351 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11585 */;
import getConjureAppSoundButtonDefault from "getConjureAppSoundButton" /* 14313 */;
import closeFrameDefault from "closeFrame" /* 14314 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18561 */;
import FramesStore from "FramesStore" /* 6833 */;

require = fn;
function getConjureAppPictureInPictureActions(stateFromStores, appName, arg2) {
  _require = stateFromStores;
  const obj = { label: null, IconComponent: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.formatToPlainString(_modDef3864.dPf03z, { appName });
  obj.IconComponent = require("WindowLaunchIcon").WindowLaunchIcon;
  obj.onPress = function onPress() {
    return conjureBackgroundFrames.returnToConjureFrameSurface(closure_0);
  };
  const items = [obj];
  if (arg2) {
    items.push(getConjureAppSoundButtonDefault(stateFromStores.id, stateFromStores.data.userMuted));
  }
  const obj3 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
  const intl2 = tmp(1125).intl;
  obj3.label = intl2.string(require("util").t.VkMnR2);
  obj3.IconComponent = require("DoorExitIcon").DoorExitIcon;
  obj3.onPress = function onPress() {
    return closeFrameDefault(stateFromStores.id);
  };
  items.push(obj3);
  return items;
}
const asLaunched = fn(6834).asLaunched;
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