// discord_app/modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../../../../screen/useWindowDimensions.native.tsx";
import CheckpointConstants from "../../../../../CheckpointConstants.tsx";
import EmojiDefault from "../../../../../../emojis/native/Emoji.tsx";
import _mod13000 from "../../../../../../../../_runtime/metro/13000__.js";
import AccessibilityStore from "../../../../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

function transformMatrix(items, rotation) {
  let point = rotation.rotation;
  if (point === undefined) {
    point = { x: 0, y: 0, z: 0 };
  }
  let translation = rotation.translation;
  if (translation === undefined) {
    translation = { x: 0, y: 0, z: 0 };
  }
  let point2 = rotation.skew;
  if (point2 === undefined) {
    point2 = { x: 0, y: 0, z: 0 };
  }
  const mat4 = _mod13000.mat4;
  const obj = mat4.create();
  const mat42 = _mod13000.mat4;
  mat42.copy(obj, items);
  const mat43 = _mod13000.mat4;
  mat43.rotateX(obj, obj, point.x);
  const mat44 = _mod13000.mat4;
  mat44.rotateY(obj, obj, point.y);
  const mat45 = _mod13000.mat4;
  mat45.rotateZ(obj, obj, point.z);
  const mat46 = _mod13000.mat4;
  items = [, ,];
  ({ x: arr[0], y: arr[1], z: arr[2] } = translation);
  mat46.translate(obj, obj, items);
  const mat47 = _mod13000.mat4;
  const mat48 = _mod13000.mat4;
  mat48.multiply(obj, obj, mat47.fromValues(1, point2.y, 0, 0, point2.x, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
  return Array.from(obj);
}
const View = _mod17.View;
const jsx = jsxProd.jsx;
let items = [
  0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 0, 0.739239513874054, -0.6734426617622375, 0,
  -0.8322767019271851, 0.37332993745803833, 0.4098050892353058, 0, -83.22766876220703, 37.33299255371094,
  -59.01948928833008, 1,
];
let items1 = [
  0.8322767019271851, -0.37332993745803833, -0.4098050892353058, 0, 0, 0.739239513874054, -0.6734426617622375, 0,
  0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 55.436038970947266, 56.0490608215332,
  -38.474815368652344, 1,
];
let transformMatrixResult = transformMatrix(items, { skew: { x: 0.2, y: 0.03, z: 0 } });
let transformMatrixResult1 = transformMatrix(items1, {
  rotation: { x: 0, y: 0.02, z: 0.015 },
  translation: { x: -1, y: 1, z: 0 },
  skew: { x: 0, y: 0.035, z: 0 },
});
let obj = {
  container: { position: "relative", width: 200, height: 200 },
  emoji: {
    position: "absolute",
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: CheckpointConstants.CHECKPOINT_PRIMARY,
    overflow: "hidden",
  },
  customEmoji: { width: 196, height: 196 },
  textEmoji: null,
  topFace: null,
  leftFace: null,
  rightFace: null,
};
let PlatformUtils = PlatformUtils_mod;
let num = 196;
if (PlatformUtils.isIOS()) {
  num = 200;
}
let obj2 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
let PlatformUtils = PlatformUtils_mod;
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 229.99999999999997;
}
obj2.lineHeight = num2;
obj2.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj2;
let obj3 = { transform: null };
let obj4 = { matrix: null };
let PlatformUtils = PlatformUtils_mod;
PlatformUtils.isIOS();
obj4.matrix = [
  0.8322767019271851, -0.37332993745803833, -0.4098050892353058, 0, 0.5543603897094727, 0.560490608215332,
  0.6152518391609192, 0, 0, -0.739239513874054, 0.6734426617622375, 0, 0, -73.9239501953125, -32.65573501586914, 1,
];
let items2 = [obj4];
obj3.transform = items2;
obj.topFace = obj3;
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  transformMatrixResult = items;
}
let obj5 = { transform: null };
let items3 = [{ matrix: transformMatrixResult }];
obj5.transform = items3;
obj.leftFace = obj5;
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  transformMatrixResult1 = items1;
}
let obj6 = { transform: null };
const items4 = [{ matrix: transformMatrixResult1 }];
obj6.transform = items4;
obj.rightFace = obj6;
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiCube(emoji) {
      const cResult = emoji(576).c(27);
      emoji = emoji.emoji;
      const style = emoji.style;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = emoji(576);
      const stateFromStores = emoji(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === emoji.animated) {
        if (cResult[3] === emoji.id) {
          if (cResult[4] === stateFromStores) {
            let tmp8 = cResult[5];
          }
          importDefault = tmp8;
          const tmp13 = closure_6();
          dependencyMap = tmp13;
          const result = useWindowDimensionsDefault().width / 392;
          if (cResult[6] !== result) {
            const obj2 = { transform: null };
            const obj4 = { scale: result };
            const items1 = [obj4];
            obj2.transform = items1;
            cResult[6] = result;
            cResult[7] = obj2;
            let tmp16 = obj2;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] === style) {
            if (cResult[9] === tmp13.container) {
              if (cResult[10] === tmp16) {
                let tmp17 = cResult[11];
              }
              if (cResult[12] === tmp13.leftFace) {
                if (cResult[13] === tmp13.rightFace) {
                  if (cResult[14] === tmp13.topFace) {
                    let arr4 = cResult[15];
                  }
                  if (cResult[16] === emoji.id) {
                    if (cResult[17] === emoji.name) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp13.customEmoji) {
                          if (cResult[20] === tmp13.emoji) {
                            if (cResult[21] === tmp13.textEmoji) {
                              if (cResult[22] === arr4) {
                                let tmp18 = cResult[23];
                              }
                              if (cResult[24] === tmp17) {
                                if (cResult[25] === tmp18) {
                                  let tmp20 = cResult[26];
                                }
                                return tmp20;
                              }
                              const obj5 = { style: tmp17, children: tmp18 };
                              const tmp23 = <View style={tmp17}>{tmp18}</View>;
                              cResult[24] = tmp17;
                              cResult[25] = tmp18;
                              cResult[26] = tmp23;
                              tmp20 = tmp23;
                            }
                          }
                        }
                      }
                    }
                  }
                  const mapped = arr4.map((item, index) => {
                    const obj = {
                      style: null,
                      fastImageStyle: closure_2.customEmoji,
                      textEmojiStyle: closure_2.textEmoji,
                      name: null,
                      src: null,
                    };
                    const items = [closure_2.emoji, item];
                    obj.style = items;
                    let str = "";
                    if (null == emoji.id) {
                      str = emoji.name;
                    }
                    obj.name = str;
                    obj.src = src;
                    return jsx(
                      EmojiDefault,
                      {
                        style: null,
                        fastImageStyle: closure_2.customEmoji,
                        textEmojiStyle: closure_2.textEmoji,
                        name: null,
                        src: null,
                      },
                      index,
                    );
                  });
                  cResult[16] = emoji.id;
                  cResult[17] = emoji.name;
                  cResult[18] = tmp8;
                  cResult[19] = tmp13.customEmoji;
                  cResult[20] = tmp13.emoji;
                  cResult[21] = tmp13.textEmoji;
                  cResult[22] = arr4;
                  cResult[23] = mapped;
                  tmp18 = mapped;
                }
              }
              const items2 = [, ,];
              ({ topFace: arr5[0], leftFace: arr5[1], rightFace: arr5[2] } = tmp13);
              cResult[12] = tmp13.leftFace;
              cResult[13] = tmp13.rightFace;
              cResult[14] = tmp13.topFace;
              cResult[15] = items2;
              arr4 = items2;
            }
          }
          const items3 = [tmp13.container, tmp16, style];
          cResult[8] = style;
          cResult[9] = tmp13.container;
          cResult[10] = tmp16;
          cResult[11] = items3;
          tmp17 = items3;
        }
      }
      let emojiURL;
      if (null != emoji.id) {
        const obj6 = { id: emoji.id, animated: null, size: 48 };
        let tmp11 = !stateFromStores;
        if (!stateFromStores) {
          tmp11 = true === emoji.animated;
        }
        obj6.animated = tmp11;
        emojiURL = AvatarUtilsDefault.getEmojiURL(obj6);
      }
      cResult[2] = emoji.animated;
      cResult[3] = emoji.id;
      cResult[4] = stateFromStores;
      cResult[5] = emojiURL;
      tmp8 = emojiURL;
      const tmpResult = emoji(504);
    }
  : function EmojiCube(emoji) {
      emoji = emoji.emoji;
      dependencyMap = undefined;
      let items = [AccessibilityStore];
      const stateFromStores = emoji(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let emojiURL;
      if (null != emoji.id) {
        const obj3 = { id: emoji.id, animated: null, size: 48 };
        let tmp5 = !stateFromStores;
        if (!stateFromStores) {
          tmp5 = true === emoji.animated;
        }
        obj3.animated = tmp5;
        emojiURL = emojiURL(1417).getEmojiURL(obj3);
        const obj2 = emojiURL(1417);
      }
      const tmp6 = closure_6();
      dependencyMap = tmp6;
      const obj4 = { style: null, children: null };
      const items1 = [tmp6.container, ,];
      const obj5 = { transform: null };
      let obj = emoji(504);
      const items2 = [{ scale: emojiURL(1499)().width / 392 }];
      obj5.transform = items2;
      items1[1] = obj5;
      items1[2] = emoji.style;
      obj4.style = items1;
      const items3 = [, ,];
      ({ topFace: arr4[0], leftFace: arr4[1], rightFace: arr4[2] } = tmp6);
      obj4.children = items3.map((item, index) => {
        const obj = {
          style: null,
          fastImageStyle: closure_2.customEmoji,
          textEmojiStyle: closure_2.textEmoji,
          name: null,
          src: null,
        };
        const items = [closure_2.emoji, item];
        obj.style = items;
        let str = "";
        if (null == emoji.id) {
          str = emoji.name;
        }
        obj.name = str;
        obj.src = emojiURL;
        return jsx(
          EmojiDefault,
          {
            style: null,
            fastImageStyle: closure_2.customEmoji,
            textEmojiStyle: closure_2.textEmoji,
            name: null,
            src: null,
          },
          index,
        );
      });
      return <View style={null}>{null}</View>;
    };
