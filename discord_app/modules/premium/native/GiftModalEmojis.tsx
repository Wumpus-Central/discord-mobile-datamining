// discord_app/modules/premium/native/GiftModalEmojis.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, emojiName, importDefault;

const View = react_native.View;
const jsx = Fragment.jsx;
let items = [
  [100, 0, -40],
  [120, 40, -10],
  [100, 80, 10],
  [180, 20, 20],
  [140, 95, 15],
  [250, 0, 0],
  [250, 80, -20],
  [400, 90, 10],
  [400, 20, -20],
  [410, 0, 40],
];
let closure_7 = createStyles.createStyles({
  emojisContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    paddingBottom: 210,
  },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiName) => {
      let closure_1;
      let src;
      let tmp5;
      const obj = emojiName(576);
      const cResult = obj.c(9);
      emojiName = emojiName.emojiName;
      const randomizeSizing = emojiName.randomizeSizing;
      const tmp3 = undefined !== randomizeSizing && randomizeSizing;
      importDefault = tmp3;
      const tmp4 = closure_7();
      if (cResult[0] !== emojiName) {
        const obj2 = EmojiUtilsDefault;
        const uRL = obj2.getURL(emojiName);
        let num = 0;
        cResult[0] = emojiName;
        cResult[1] = uRL;
        tmp5 = uRL;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] === emojiName) {
        if (cResult[3] === tmp5) {
          let tmp8;
          if (cResult[4] === tmp3) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp4.emojisContainer) {
            let tmp10;
            if (cResult[7] === tmp8) {
              tmp10 = cResult[8];
            }
            return tmp10;
          }
          const tmp13 = <View style={tmp4.emojisContainer}>{tmp8}</View>;
          cResult[6] = tmp4.emojisContainer;
          cResult[7] = tmp8;
          cResult[8] = tmp13;
          tmp10 = tmp13;
        }
      }
      const mapped = items.map((item, index) => {
        let tmp2;
        let tmp3;
        let tmp4;
        [tmp2, tmp3, tmp4] = item;
        const rect = { position: "absolute", top: "" + tmp2 + "%", left: "" + tmp3 + "%", transform: items };
        _slicedToArray(item, 3);
        EmojiDefault;
        items = [{ rotate: "" + tmp4 + "deg" }];
        let num = 1;
        ({ rotate: "" + tmp4 + "deg" });
        if (closure_1) {
          const _Math = Math;
          num = 1.5 * Math.random() + 0.5;
        }
        items[1] = { scale: num };
        return <tmp6 key={"" + index + "-" + emojiName} src={src} name={emojiName} style={rect} forceTextEmoji />;
      });
      cResult[2] = emojiName;
      cResult[3] = tmp5;
      cResult[4] = tmp3;
      cResult[5] = mapped;
      tmp8 = mapped;
    }
  : (emojiName) => {
      let src;
      emojiName = emojiName.emojiName;
      let flag = emojiName.randomizeSizing;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      const obj = flag(4527);
      dependencyMap = obj.getURL(emojiName);
      return (
        <View style={tmp.emojisContainer}>
          {items.map((item, index) => {
            let tmp2;
            let tmp3;
            let tmp4;
            [tmp2, tmp3, tmp4] = item;
            const rect = { position: "absolute", top: "" + tmp2 + "%", left: "" + tmp3 + "%", transform: items };
            _slicedToArray(item, 3);
            EmojiDefault;
            items = [{ rotate: "" + tmp4 + "deg" }];
            let num = 1;
            ({ rotate: "" + tmp4 + "deg" });
            if (flag) {
              const _Math = Math;
              num = 1.5 * Math.random() + 0.5;
            }
            items[1] = { scale: num };
            return <tmp6 key={"" + index + "-" + emojiName} src={src} name={emojiName} style={rect} forceTextEmoji />;
          })}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default tmp3;
