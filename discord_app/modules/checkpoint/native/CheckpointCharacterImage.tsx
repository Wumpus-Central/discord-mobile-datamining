// discord_app/modules/checkpoint/native/CheckpointCharacterImage.tsx
import checkpoint_CheckpointMessageComponentUtils from "../CheckpointMessageComponentUtils.tsx";
import NativePermissionManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import showSharePreparingModal from "../../share/native/showSharePreparingModal.tsx";
import NativeCheckpointCharacterImageModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeCheckpointCharacterImageModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function writeCharacterImage() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _writeCharacterImage() {
  const fullSizeCharacterLayerUrls =
    checkpoint_CheckpointMessageComponentUtils.getFullSizeCharacterLayerUrls(closure_0);
  await NativeCheckpointCharacterImageModuleDefault.writeCharacterImage(
    fullSizeCharacterLayerUrls,
    checkpoint_CheckpointMessageComponentUtils.MAX_CHARACTER_LAYER_PIXEL_SIZE,
  );
  return value;
};
let closure_9 = async function _saveCheckpointCharacterImage(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c3 = 1;
          if (PlatformUtils) {
            c4 = 2;
            c5 = 1;
            const obj5 = {
              value: NativePermissionManagerModuleDefault.requestExternalStorageAuthorization(),
              done: false,
            };
            return obj5;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          const obj6 = { title: null, body: null, isDismissable: true };
          const intl = closure_130_0(closure_130_2[10]).intl;
          obj6.title = intl.string(closure_130_0(closure_130_2[10]).t.cV3alD);
          const intl2 = closure_130_0(closure_130_2[10]).intl;
          obj6.body = intl2.string(closure_130_0(closure_130_2[10]).t.r4Zjzv);
          closure_130_1(closure_130_2[9]).show(obj6);
          c5 = 3;
          const obj7 = closure_130_1(closure_130_2[9]);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (value !== closure_130_4.AUTHORIZED) {
            const _Error = Error;
            const error = new Error("Storage permission denied");
            throw error;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_129_1 = value;
            c4 = 4;
            c5 = 1;
            const obj11 = { value: closure_130_1(closure_130_2[6]).saveImage(closure_129_1), done: false };
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_0(closure_130_2[8]).presentImageSaved();
          c3 = 0;
          const obj = closure_130_0(closure_130_2[8]);
        }
        c3 = 0;
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
      c4 = 3;
      c5 = 1;
      const obj13 = { value: closure_130_7(closure_129_0), done: false };
      return obj13;
    } catch (tmp37) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp37;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_10 = async function _shareCheckpointCharacterImage(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_2 = undefined;
          closure_129_1 = { isCancelled: false };
          const obj7 = {
            onCancel() {
              closure_1_1.isCancelled = true;
            },
          };
          closure_129_2 = showSharePreparingModal.showSharePreparingModal(obj7);
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: writeCharacterImage(closure_0), done: false };
          return obj8;
        }
      } else {
        if (1 === tmp8) {
          c3 = 0;
          closure_129_0 = null;
          closure_129_2();
          if (closure_129_1.isCancelled) {
            c5 = 3;
          } else if (null == closure_129_0) {
            const obj9 = { title: null, body: null, isDismissable: true };
            const intl = closure_130_0(closure_130_2[10]).intl;
            obj9.title = intl.string(closure_130_0(closure_130_2[10]).t.iufib1);
            const intl2 = closure_130_0(closure_130_2[10]).intl;
            obj9.body = intl2.string(closure_130_0(closure_130_2[10]).t.fEptJP);
            closure_130_1(closure_130_2[9]).show(obj9);
            const obj11 = closure_130_1(closure_130_2[9]);
          }
          if (obj3.isAndroid()) {
            c4 = 3;
            c5 = 1;
            const obj10 = { value: closure_130_0(closure_130_2[12]).sleep(closure_130_5), done: false };
            return obj10;
          }
          obj3 = closure_130_0(closure_130_2[4]);
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_129_0 = value;
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        const obj14 = { url: closure_129_0 };
        closure_130_0(closure_130_2[13]).showShareActionSheet(obj14, "checkpoint_character_image");
        const obj4 = closure_130_0(closure_130_2[13]);
      }
    } catch (tmp30) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp30;
      } else {
        c4 = tmp;
      }
    }
  }
};
const NativePermissionStatus = fn(6496).NativePermissionStatus;
let closure_5 = fn(9721).SHARE_SHEET_PRESENT_DELAY_MS;
let PlatformUtils = fn(1378);
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  PlatformUtils = fn(17).Platform.constants.Version <= 28;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/CheckpointCharacterImage.tsx");

export function saveCheckpointCharacterImage() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function shareCheckpointCharacterImage() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
