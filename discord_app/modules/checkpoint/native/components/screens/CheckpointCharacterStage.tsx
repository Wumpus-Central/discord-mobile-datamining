// === Module 13027: CheckpointCharacterStage ===

// Module 13027 (CheckpointCharacterStage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod5077 from "module_5077" /* 5077 */;
import useInitialValueDefault from "useInitialValue" /* 5635 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6397 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13028 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13195 */;
import useCheckpointCharacterLoadedTextureNames from "useCheckpointCharacterLoadedTextureNames" /* 13197 */;
import useCheckpointCharacterTextureSwaps from "useCheckpointCharacterTextureSwaps" /* 13198 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13015 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj2 = { container: { flexGrow: 1 }, rive: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.rive = {};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(stage) {
  const cResult = c.c(25);
  stage = stage.stage;
  const tmp4 = closure_8();
  const size = useWindowDimensionsDefault();
  let str = "MobilePortrait";
  if (size.width > size.height) {
    str = "MobileLandscape";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return CheckpointStore.selectedCharacterTraits;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === str) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === stage) {
        let tmp10 = cResult[5];
      }
      ({ faceID, headwearID, shoesID, wearableID, chapterID } = tmp10);
      if (cResult[6] === chapterID) {
        if (cResult[7] === faceID) {
          if (cResult[8] === headwearID) {
            if (cResult[9] === str) {
              if (cResult[10] === shoesID) {
                if (cResult[11] === wearableID) {
                  let tmp12 = cResult[12];
                }
                const checkpointCharacterLoadedTextureNames = useCheckpointCharacterLoadedTextureNames.useCheckpointCharacterLoadedTextureNames(tmp12);
                if (cResult[13] !== checkpointCharacterLoadedTextureNames) {
                  const checkpointCharacterReferencedAssets = CheckpointCharacterReferencedAssets.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames);
                  cResult[13] = checkpointCharacterLoadedTextureNames;
                  cResult[14] = checkpointCharacterReferencedAssets;
                  let tmp15 = checkpointCharacterReferencedAssets;
                  const tmpResult8 = CheckpointCharacterReferencedAssets;
                } else {
                  tmp15 = cResult[14];
                }
                const tmp17 = useInitialValueDefault(tmp15);
                const tmpResult7 = useCheckpointCharacterLoadedTextureNames;
                [tmp22, tmp23] = noop.useState(null);
                const tmp21 = _slicedToArray(noop.useState(null), 2);
                const checkpointCharacterTextureSwaps = useCheckpointCharacterTextureSwaps.useCheckpointCharacterTextureSwaps(tmp22, tmp15, tmp17);
                if (cResult[15] !== stateFromStores) {
                  const checkpointCharacterAccessibilityLabel = CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(stateFromStores);
                  cResult[15] = stateFromStores;
                  cResult[16] = checkpointCharacterAccessibilityLabel;
                  let tmp25 = checkpointCharacterAccessibilityLabel;
                  const tmpResult10 = CheckpointCharacterAccessibilityUtils;
                } else {
                  tmp25 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp17) {
                    if (cResult[19] === tmp4.rive) {
                      let tmp27 = cResult[20];
                    }
                    if (cResult[21] === tmp4.container) {
                      if (cResult[22] === tmp25) {
                        if (cResult[23] === tmp27) {
                          let tmp30 = cResult[24];
                        }
                        return tmp30;
                      }
                    }
                    const obj2 = { style: tmp4.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp25, children: tmp27 };
                    const tmp33 = <hasOwnProperty style={tmp4.container} accessible accessibilityRole="image" accessibilityLabel={tmp25}>{tmp27}</hasOwnProperty>;
                    cResult[21] = tmp4.container;
                    cResult[22] = tmp25;
                    cResult[23] = tmp27;
                    cResult[24] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const obj3 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp17, onRiveFileChange: tmp23, dataBinding: tmp10, style: tmp4.rive };
                const tmp29 = jsx(_mod5077.CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp17, onRiveFileChange: tmp23, dataBinding: tmp10, style: tmp4.rive });
                cResult[17] = tmp10;
                cResult[18] = tmp17;
                cResult[19] = tmp4.rive;
                cResult[20] = tmp29;
                tmp27 = tmp29;
                const tmpResult9 = useCheckpointCharacterTextureSwaps;
              }
            }
          }
        }
      }
      const obj4 = { faceID, headwearID, shoesID, wearableID };
      const checkpointCharacterVisibleTextureNames = CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames(obj4, chapterID, str);
      cResult[6] = chapterID;
      cResult[7] = faceID;
      cResult[8] = headwearID;
      cResult[9] = str;
      cResult[10] = shoesID;
      cResult[11] = wearableID;
      cResult[12] = checkpointCharacterVisibleTextureNames;
      tmp12 = checkpointCharacterVisibleTextureNames;
      const tmpResult11 = CheckpointCharacterReferencedAssets;
    }
  }
  const tmpResult = initialize;
  const checkpointCharacterDataBinding = CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding(stage, stateFromStores, str);
  cResult[2] = str;
  cResult[3] = stateFromStores;
  cResult[4] = stage;
  cResult[5] = checkpointCharacterDataBinding;
  tmp10 = checkpointCharacterDataBinding;
  const tmpResult12 = CheckpointCharacterDataBinding;
}) : (function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  let str;
  let stateFromStores;
  let faceID;
  let headwearID;
  let shoesID;
  let wearableID;
  let chapterID;
  let checkpointCharacterLoadedTextureNames;
  const tmp = checkpointCharacterLoadedTextureNames();
  const size = str(stateFromStores[8])();
  str = "MobilePortrait";
  if (size.width > size.height) {
    str = "MobileLandscape";
  }
  const items = [wearableID];
  stateFromStores = stage(stateFromStores[9]).useStateFromStores(items, () => wearableID.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str];
  const memo = headwearID.useMemo(() => CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding(stage, stateFromStores, str), items1);
  faceID = memo.faceID;
  headwearID = memo.headwearID;
  shoesID = memo.shoesID;
  wearableID = memo.wearableID;
  chapterID = memo.chapterID;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, str];
  const memo1 = headwearID.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames({ faceID, headwearID, shoesID, wearableID }, chapterID, str), items2);
  const obj = stage(stateFromStores[9]);
  const tmp2 = str;
  checkpointCharacterLoadedTextureNames = stage(stateFromStores[12]).useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames];
  const memo2 = headwearID.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames), items3);
  const tmp9 = tmp2(stateFromStores[13])(memo2);
  const obj2 = stage(stateFromStores[12]);
  [tmp11, tmp12] = faceID(headwearID.useState(null), 2);
  const tmp10 = faceID(headwearID.useState(null), 2);
  const checkpointCharacterTextureSwaps = stage(stateFromStores[14]).useCheckpointCharacterTextureSwaps(tmp11, memo2, tmp9);
  const obj4 = { style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  const obj3 = stage(stateFromStores[14]);
  obj4.accessibilityLabel = stage(stateFromStores[15]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj4.children = chapterID(stage(stateFromStores[16]).CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp9, onRiveFileChange: tmp12, dataBinding: memo, style: tmp.rive });
  return chapterID(shoesID, obj4);
});