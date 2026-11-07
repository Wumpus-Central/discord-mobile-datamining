// === Module 13870: useCheckpointCharacterOutfitPreload ===

// Module 13870 (useCheckpointCharacterOutfitPreload)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterOutfitPreload.tsx");

export function useCheckpointCharacterOutfitPreload(arg0) {
  ({ visibleDataBinding, requestedDataBinding } = arg0);
  let checkpointCharacterOutfitImageProperty;
  _slicedToArray = undefined;
  visibleDataBinding = undefined;
  const tmp = _slicedToArray(visibleDataBinding.useState({}), 2);
  _require = tmp[1];
  checkpointCharacterOutfitImageProperty = require("CheckpointCharacterDataBinding").getCheckpointCharacterOutfitImageProperty(requestedDataBinding.outfitID);
  let tmp3;
  if (null != checkpointCharacterOutfitImageProperty) {
    tmp3 = requestedDataBinding[checkpointCharacterOutfitImageProperty];
  }
  _slicedToArray = tmp3;
  let tmp4 = null == checkpointCharacterOutfitImageProperty;
  if (!tmp4) {
    let tmp5;
    if (visibleDataBinding != null) {
      tmp5 = visibleDataBinding[checkpointCharacterOutfitImageProperty];
    }
    tmp4 = tmp5 === tmp3;
  }
  if (!tmp4) {
    tmp4 = tmp[0][checkpointCharacterOutfitImageProperty] === tmp3;
  }
  if (visibleDataBinding == null) {
    visibleDataBinding = requestedDataBinding;
  }
  const obj3 = {
    dataBinding: null,
    isOutfitPreloaded: tmp4,
    onDataBindingChange: visibleDataBinding.useMemo(() => {
      let obj = {};
      const prop = closure_0(checkpointCharacterOutfitImageProperty[2]).CHECKPOINT_CHARACTER_OUTFIT_IMAGE_PROPERTIES;
      let item = prop.forEach((item) => {
        obj[item] = (arg0) => {
          item = arg0;
          item((arg0) => {
            let tmp3 = arg0;
            if (arg0[closure_0] !== closure_0) {
              obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = tmp2;
              tmp3 = obj;
            }
            return tmp3;
          });
        };
      });
      return obj;
    }, [])
  };
  items = [visibleDataBinding, checkpointCharacterOutfitImageProperty, tmp3];
  obj3.dataBinding = visibleDataBinding.useMemo(() => {
    if (null != checkpointCharacterOutfitImageProperty) {
      if (visibleDataBinding[checkpointCharacterOutfitImageProperty] !== closure_2) {
        let obj = {};
        const merged = Object.assign(visibleDataBinding);
        obj[checkpointCharacterOutfitImageProperty] = tmp3;
      }
      return obj;
    }
    obj = visibleDataBinding;
  }, items);
  return obj3;
}