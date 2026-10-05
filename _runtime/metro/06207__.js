// _runtime/metro/06207__.js
let set;

export const isComposedGesture = function isComposedGesture(gesture) {
  return "handlerTags" in gesture;
};
export const prepareRelations = function prepareRelations(config, handlerTag) {
  let items;
  let items1;
  let items2;
  const f91571 = (handlerTags) => {
    if ("handlerTags" in handlerTags) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [];
      handlerTags[0] = handlerTags.handlerTag;
    }
    return handlerTags;
  };
  const simultaneousWith1 = config.simultaneousWith;
  let closure_0 = handlerTag;
  if (simultaneousWith1) {
    const _Array = Array;
    if (Array.isArray(simultaneousWith1)) {
      const item = simultaneousWith1.forEach(function processSingleGesture(externalSimultaneousHandlers) {
        let prop;
        if ("handlerTags" in externalSimultaneousHandlers) {
          prop = externalSimultaneousHandlers.externalSimultaneousHandlers;
        } else {
          prop = externalSimultaneousHandlers.gestureRelations.simultaneousHandlers;
        }
        if (!prop.includes(handlerTag)) {
          prop.push(handlerTag);
        }
      });
    } else {
      let prop;
      if ("handlerTags" in simultaneousWith1) {
        prop = simultaneousWith1.externalSimultaneousHandlers;
      } else {
        prop = simultaneousWith1.gestureRelations.simultaneousHandlers;
      }
      if (!prop.includes(handlerTag)) {
        prop.push(handlerTag);
      }
    }
  }
  const simultaneousWith = config.simultaneousWith;
  if (simultaneousWith) {
    let flatMapResult;
    const _Array2 = Array;
    if (Array.isArray(simultaneousWith)) {
      flatMapResult = simultaneousWith.flatMap(f91571);
    } else if ("handlerTags" in simultaneousWith) {
      flatMapResult = simultaneousWith.handlerTags;
    } else {
      flatMapResult = [simultaneousWith.handlerTag];
    }
    items = flatMapResult;
  } else {
    items = [];
  }
  const requireToFail = config.requireToFail;
  const obj = { simultaneousHandlers: items, waitFor: items1, blocksHandlers: items2 };
  if (requireToFail) {
    let flatMapResult1;
    const _Array3 = Array;
    if (Array.isArray(requireToFail)) {
      flatMapResult1 = requireToFail.flatMap(f91571);
    } else if ("handlerTags" in requireToFail) {
      flatMapResult1 = requireToFail.handlerTags;
    } else {
      flatMapResult1 = [requireToFail.handlerTag];
    }
    items1 = flatMapResult1;
  } else {
    items1 = [];
  }
  const block = config.block;
  if (block) {
    let flatMapResult2;
    const _Array4 = Array;
    if (Array.isArray(block)) {
      flatMapResult2 = block.flatMap(f91571);
    } else if ("handlerTags" in block) {
      flatMapResult2 = block.handlerTags;
    } else {
      flatMapResult2 = [block.handlerTag];
    }
    items2 = flatMapResult2;
  } else {
    items2 = [];
  }
  return obj;
};
export const containsDuplicates = function containsDuplicates(flatMapResult) {
  set = new Set(flatMapResult);
  return set.size !== flatMapResult.length;
};
