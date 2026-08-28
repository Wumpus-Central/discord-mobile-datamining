// _runtime/05684_isComposedGesture.js
arg5.isComposedGesture = function isComposedGesture(gesture) {
  return "handlerTags" in gesture;
};
arg5.prepareRelations = function prepareRelations(config, closure_2) {
  let simultaneousWith = config.simultaneousWith;
  closure_0 = closure_2;
  if (simultaneousWith) {
    const _Array = Array;
    if (Array.isArray(simultaneousWith)) {
      const item = simultaneousWith.forEach(function processSingleGesture(externalSimultaneousHandlers) {
        if ("handlerTags" in externalSimultaneousHandlers) {
          let prop = externalSimultaneousHandlers.externalSimultaneousHandlers;
        } else {
          prop = externalSimultaneousHandlers.gestureRelations.simultaneousHandlers;
        }
        if (!prop.includes(closure_0)) {
          prop.push(closure_0);
        }
      });
    } else {
      if ("handlerTags" in simultaneousWith) {
        let prop = simultaneousWith.externalSimultaneousHandlers;
      } else {
        prop = simultaneousWith.gestureRelations.simultaneousHandlers;
      }
      if (!prop.includes(closure_2)) {
        prop.push(closure_2);
      }
    }
  }
  simultaneousWith = config.simultaneousWith;
  if (simultaneousWith) {
    const _Array2 = Array;
    if (Array.isArray(simultaneousWith)) {
      let flatMapResult = simultaneousWith.flatMap((handlerTags) => {
        if ("handlerTags" in handlerTags) {
          handlerTags = handlerTags.handlerTags;
        } else {
          handlerTags = [handlerTags.handlerTag];
        }
        return handlerTags;
      });
    } else if ("handlerTags" in simultaneousWith) {
      flatMapResult = simultaneousWith.handlerTags;
    } else {
      flatMapResult = [simultaneousWith.handlerTag];
    }
  } else {
    const obj = { simultaneousHandlers: null, waitFor: null, blocksHandlers: null };
    obj[0] = [];
    const requireToFail = config.requireToFail;
    if (requireToFail) {
      const _Array3 = Array;
      if (Array.isArray(requireToFail)) {
        let flatMapResult1 = requireToFail.flatMap((handlerTags) => {
          if ("handlerTags" in handlerTags) {
            handlerTags = handlerTags.handlerTags;
          } else {
            handlerTags = [handlerTags.handlerTag];
          }
          return handlerTags;
        });
      } else if ("handlerTags" in requireToFail) {
        flatMapResult1 = requireToFail.handlerTags;
      } else {
        flatMapResult1 = [requireToFail.handlerTag];
      }
    } else {
      obj[1] = [];
      const block = config.block;
      if (block) {
        const _Array4 = Array;
        if (Array.isArray(block)) {
          let flatMapResult2 = block.flatMap((handlerTags) => {
            if ("handlerTags" in handlerTags) {
              handlerTags = handlerTags.handlerTags;
            } else {
              handlerTags = [handlerTags.handlerTag];
            }
            return handlerTags;
          });
        } else if ("handlerTags" in block) {
          flatMapResult2 = block.handlerTags;
        } else {
          flatMapResult2 = [block.handlerTag];
        }
      } else {
        obj[2] = [];
        return obj;
      }
    }
  }
};
arg5.containsDuplicates = function containsDuplicates(flatMapResult) {
  return new Set(flatMapResult).size !== flatMapResult.length;
};