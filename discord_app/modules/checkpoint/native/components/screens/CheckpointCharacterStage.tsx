// === Module 13258: CheckpointCharacterStage ===

// Module 13258 (CheckpointCharacterStage)
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13260 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13426 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13428 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = { container: { flexGrow: 1 }, rive: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.rive = {};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(isActive) {
  const cResult = width(576).c(33);
  ({ stage, characterBottomInset } = isActive);
  const tmp4 = closure_8();
  const context = noop.useContext(height(13259));
  const size = height(1497)();
  width = size.width;
  height = size.height;
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  if (cResult[0] === height) {
    if (cResult[1] === width) {
      let tmp7 = cResult[2];
    }
    const tmp8 = tmp5(5636)(tmp7);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [CheckpointStore];
      const fn2 = function x() {
        return CheckpointStore.selectedCharacterTraits;
      };
      cResult[3] = items;
      cResult[4] = fn2;
      let tmp11 = fn2;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp11);
    if (cResult[5] === characterBottomInset) {
      if (cResult[6] === height) {
        if (cResult[7] === str) {
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === stage) {
              if (cResult[10] === tmp8) {
                let tmp14 = cResult[11];
              }
              ({ faceID, headwearID, shoesID, wearableID, chapterID } = tmp14);
              if (cResult[12] === chapterID) {
                if (cResult[13] === faceID) {
                  if (cResult[14] === headwearID) {
                    if (cResult[15] === str) {
                      if (cResult[16] === shoesID) {
                        if (cResult[17] === wearableID) {
                          let tmp16 = cResult[18];
                        }
                        const checkpointCharacterLoadedTextureNames = tmp(13429).useCheckpointCharacterLoadedTextureNames(tmp16);
                        if (cResult[19] === checkpointCharacterLoadedTextureNames) {
                          if (cResult[20] === tmp8) {
                            let tmp19 = cResult[21];
                          }
                          const tmp21 = tmp5(5636)(tmp19);
                          [tmp25, tmp26] = noop.useState(null);
                          const tmp24 = _slicedToArray(noop.useState(null), 2);
                          const checkpointCharacterTextureSwaps = tmp(13430).useCheckpointCharacterTextureSwaps(tmp25, tmp19, tmp21);
                          if (cResult[22] !== stateFromStores) {
                            const checkpointCharacterAccessibilityLabel = tmp(6421).getCheckpointCharacterAccessibilityLabel(stateFromStores);
                            cResult[22] = stateFromStores;
                            cResult[23] = checkpointCharacterAccessibilityLabel;
                            let tmp29 = checkpointCharacterAccessibilityLabel;
                            const tmpResult9 = tmp(6421);
                          } else {
                            tmp29 = cResult[23];
                          }
                          if (cResult[24] === tmp14) {
                            if (cResult[25] === tmp21) {
                              if (cResult[26] === tmp4.rive) {
                                let tmp31 = cResult[27];
                              }
                              if (cResult[28] === tmp4.container) {
                                if (cResult[29] === tmp31) {
                                  if (cResult[30] === tmp28) {
                                    if (cResult[31] === tmp29) {
                                      let tmp34 = cResult[32];
                                    }
                                    return tmp34;
                                  }
                                }
                              }
                              const obj3 = { ref: tmp28, style: tmp4.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp29, children: tmp31 };
                              const tmp37 = <closure_5 ref={tmp28} style={tmp4.container} accessible accessibilityRole="image" accessibilityLabel={tmp29}>{tmp31}</closure_5>;
                              cResult[28] = tmp4.container;
                              cResult[29] = tmp31;
                              cResult[30] = tmp28;
                              cResult[31] = tmp29;
                              cResult[32] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                          const obj4 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp21, onRiveFileChange: tmp26, dataBinding: tmp14, style: tmp4.rive };
                          const tmp33 = jsx(tmp(5078).CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp21, onRiveFileChange: tmp26, dataBinding: tmp14, style: tmp4.rive });
                          cResult[24] = tmp14;
                          cResult[25] = tmp21;
                          cResult[26] = tmp4.rive;
                          cResult[27] = tmp33;
                          tmp31 = tmp33;
                          const tmpResult8 = tmp(13430);
                        }
                        const tmpResult7 = tmp(13429);
                        const checkpointCharacterReferencedAssets = tmp(13428).getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, tmp8);
                        cResult[19] = checkpointCharacterLoadedTextureNames;
                        cResult[20] = tmp8;
                        cResult[21] = checkpointCharacterReferencedAssets;
                        tmp19 = checkpointCharacterReferencedAssets;
                        const tmpResult10 = tmp(13428);
                      }
                    }
                  }
                }
              }
              const obj5 = { faceID, headwearID, shoesID, wearableID };
              const checkpointCharacterVisibleTextureNames = tmp(13428).getCheckpointCharacterVisibleTextureNames(obj5, chapterID, str);
              cResult[12] = chapterID;
              cResult[13] = faceID;
              cResult[14] = headwearID;
              cResult[15] = str;
              cResult[16] = shoesID;
              cResult[17] = wearableID;
              cResult[18] = checkpointCharacterVisibleTextureNames;
              tmp16 = checkpointCharacterVisibleTextureNames;
              const tmpResult11 = tmp(13428);
            }
          }
        }
      }
    }
    const tmpResult = tmp(504);
    const obj6 = { stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale: tmp8 };
    const checkpointCharacterDataBinding = tmp(13426).getCheckpointCharacterDataBinding(obj6);
    cResult[5] = characterBottomInset;
    cResult[6] = height;
    cResult[7] = str;
    cResult[8] = stateFromStores;
    cResult[9] = stage;
    cResult[10] = tmp8;
    cResult[11] = checkpointCharacterDataBinding;
    tmp14 = checkpointCharacterDataBinding;
    const tmpResult12 = tmp(13426);
  }
  const fn = function n() {
    return CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(width, height);
  };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = fn;
  tmp7 = fn;
  const obj = width(576);
}) : (function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const characterBottomInset = stage.characterBottomInset;
  let width;
  let str;
  let textureScale;
  let stateFromStores;
  let faceID;
  let headwearID;
  let shoesID;
  let wearableID;
  let chapterID;
  let checkpointCharacterLoadedTextureNames;
  const tmp = headwearID();
  const context = str.useContext(characterBottomInset(width[8]));
  const size = characterBottomInset(width[9])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[11])(() => CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(width, height));
  textureScale = tmp5;
  const items = [stateFromStores];
  stateFromStores = stage(width[12]).useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str, characterBottomInset, height, tmp5];
  const memo = obj.useMemo(() => CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({ stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale }), items1);
  faceID = memo.faceID;
  headwearID = memo.headwearID;
  shoesID = memo.shoesID;
  wearableID = memo.wearableID;
  chapterID = memo.chapterID;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, str];
  const memo1 = obj.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames({ faceID, headwearID, shoesID, wearableID }, chapterID, str), items2);
  const obj2 = stage(width[12]);
  checkpointCharacterLoadedTextureNames = stage(width[15]).useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo2 = obj.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, closure_5), items3);
  const tmp12 = characterBottomInset(width[11])(memo2);
  const obj3 = stage(width[15]);
  [tmp14, tmp15] = height(str.useState(null), 2);
  const tmp13 = height(str.useState(null), 2);
  const checkpointCharacterTextureSwaps = stage(width[16]).useCheckpointCharacterTextureSwaps(tmp14, memo2, tmp12);
  let tmp19;
  if (stage.isActive) {
    tmp19 = context;
  }
  const obj5 = { ref: tmp19, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  const obj4 = stage(width[16]);
  const tmp18 = textureScale;
  obj5.accessibilityLabel = stage(width[17]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj5.children = faceID(stage(width[18]).CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp12, onRiveFileChange: tmp15, dataBinding: memo, style: tmp.rive });
  return faceID(tmp18, obj5);
});