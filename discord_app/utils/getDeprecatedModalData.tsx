// discord_app/utils/getDeprecatedModalData.tsx
import AccessibilityStore from "../modules/a11y/AccessibilityStore.tsx";

const ModalAnimation = fn(1074).ModalAnimation;
const size = fn(2);
const result = size.fileFinishedImporting("utils/getDeprecatedModalData.tsx");

export default function getDeprecatedModalData(modal, key, props) {
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
  const obj = {
    key: str,
    modal,
    animation: null,
    shouldPersistUnderModals: null,
    props: null,
    backdropStyle: null,
    backdropInstant: null,
    disableAnimation: null,
    closable: null,
    label: null,
    callbacks: null,
  };
  const animation = key.animation;
  if (animation != null) {
    obj.animation = animation;
    let flag = key.shouldPersistUnderModals;
    if (flag == null) {
      flag = false;
    }
    obj.shouldPersistUnderModals = flag;
    obj.props = props;
    let backdropStyle = key.backdropStyle;
    if (backdropStyle == null) {
      backdropStyle = null;
    }
    obj.backdropStyle = backdropStyle;
    let flag2 = key.backdropInstant;
    if (flag2 == null) {
      flag2 = false;
    }
    obj.backdropInstant = flag2;
    let flag3 = key.disableAnimation;
    if (flag3 == null) {
      flag3 = false;
    }
    obj.disableAnimation = flag3;
    const closable = key.closable;
    let closable2 = typeof closable !== "boolean";
    if (typeof closable === "boolean") {
      closable2 = key.closable;
    }
    obj.closable = closable2;
    let str2 = key.label;
    if (str2 == null) {
      str2 = "";
    }
    obj.label = str2;
    obj.callbacks = {};
    return obj;
  }
}
