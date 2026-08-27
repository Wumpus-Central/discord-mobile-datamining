// === Module 4678: getDeprecatedModalData ===

// Module 4678 (getDeprecatedModalData)
import closure_0 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import { ModalAnimation } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("utils/getDeprecatedModalData.tsx");

export default function getDeprecatedModalData(modal, key) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  let str = key.key;
  if (str == null) {
    str = tmp;
  }
  if (str == null) {
    str = "modal";
  }
  const obj = { key: str, modal, animation: null, shouldPersistUnderModals: null, props: null, backdropStyle: null, backdropInstant: null, disableAnimation: null, closable: null, label: null, callbacks: null };
  const animation = key.animation;
  if (animation != null) {
    obj[2] = animation;
    let flag = key.shouldPersistUnderModals;
    if (flag == null) {
      flag = false;
    }
    obj[3] = flag;
    obj[4] = arg2;
    let backdropStyle = key.backdropStyle;
    if (backdropStyle == null) {
      backdropStyle = null;
    }
    obj[5] = backdropStyle;
    let flag2 = key.backdropInstant;
    if (flag2 == null) {
      flag2 = false;
    }
    obj[6] = flag2;
    let flag3 = key.disableAnimation;
    if (flag3 == null) {
      flag3 = false;
    }
    obj[7] = flag3;
    const closable = key.closable;
    let closable2 = typeof closable !== "boolean";
    if (typeof closable === "boolean") {
      closable2 = key.closable;
    }
    obj[8] = closable2;
    let str2 = key.label;
    if (str2 == null) {
      str2 = "";
    }
    obj[9] = str2;
    obj[10] = {};
    return obj;
  }
};