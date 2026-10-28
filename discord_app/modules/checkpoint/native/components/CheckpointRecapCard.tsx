// discord_app/modules/checkpoint/native/components/CheckpointRecapCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointCharacterAccessibilityUtils from "../../CheckpointCharacterAccessibilityUtils.tsx";
import CheckpointCardColors from "../../CheckpointCardColors.tsx";
import CheckpointStatNumberDefault from "CheckpointStatNumber.tsx";
import CheckpointCardFrameDefault from "card/CheckpointCardFrame.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let c6 = 268;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
let c8 = 2026;
const CheckpointStatNumber = fn(13213);
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
const createStyles = fn(5004);
let obj = { year: null };
const rect1 = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: null };
let items = [{ rotate: "90deg" }];
rect1.transform = items;
obj.year = rect1;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointRecapCard(arg0) {
      const cResult = c.c(18);
      ({ character, maxHeight } = arg0);
      const tmp4 = closure_9();
      let num = 1;
      if (null != maxHeight) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
      }
      if (cResult[0] !== character) {
        const cardColors = CheckpointCardColors.getCardColors(character);
        cResult[0] = character;
        cResult[1] = cardColors;
        let tmp7 = cardColors;
        const tmpResult = CheckpointCardColors;
      } else {
        tmp7 = cResult[1];
      }
      const primaryBackgroundColor = tmp7.primaryBackgroundColor;
      if (cResult[2] !== character) {
        let checkpointCharacterAccessibilityLabel = null;
        if (null != character) {
          checkpointCharacterAccessibilityLabel =
            CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(character);
          const tmpResult2 = CheckpointCharacterAccessibilityUtils;
        }
        cResult[2] = character;
        cResult[3] = checkpointCharacterAccessibilityLabel;
        let tmp9 = checkpointCharacterAccessibilityLabel;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== primaryBackgroundColor) {
        const obj2 = { value, color: primaryBackgroundColor, size: 64 };
        const tmp15 = jsx(CheckpointStatNumberDefault, { value, color: primaryBackgroundColor, size: 64 });
        cResult[4] = primaryBackgroundColor;
        cResult[5] = tmp15;
        let tmp11 = tmp15;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4.year) {
        if (cResult[7] === tmp11) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] === character) {
          if (cResult[10] === num) {
            if (cResult[11] === tmp16) {
              let tmp18 = cResult[12];
            }
            if (null == tmp9) {
              if (cResult[13] !== tmp18) {
                const obj3 = {
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                  children: tmp18,
                };
                const tmp31 = (
                  <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
                    {tmp18}
                  </View>
                );
                cResult[13] = tmp18;
                cResult[14] = tmp31;
              }
            } else {
              if (cResult[15] === tmp9) {
                if (cResult[16] === tmp18) {
                  let tmp24 = cResult[17];
                }
                return tmp24;
              }
              const obj4 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp9, children: tmp18 };
              const tmp27 = (
                <View accessible accessibilityRole="image" accessibilityLabel={tmp9}>
                  {tmp18}
                </View>
              );
              cResult[15] = tmp9;
              cResult[16] = tmp18;
              cResult[17] = tmp27;
              tmp24 = tmp27;
            }
          }
        }
        const obj5 = {
          character,
          canvasWidth: 200,
          canvasHeight,
          scale: num,
          clydeSize: 28,
          characterLayout: rect,
          children: tmp16,
        };
        const tmp23 = jsx(CheckpointCardFrameDefault, {
          character,
          canvasWidth: 200,
          canvasHeight,
          scale: num,
          clydeSize: 28,
          characterLayout: rect,
          children: tmp16,
        });
        cResult[9] = character;
        cResult[10] = num;
        cResult[11] = tmp16;
        cResult[12] = tmp23;
        tmp18 = tmp23;
      }
      const tmp17 = <View style={tmp4.year}>{tmp11}</View>;
      cResult[6] = tmp4.year;
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      tmp16 = tmp17;
      const obj6 = { style: tmp4.year, children: tmp11 };
    }
  : function CheckpointRecapCard(character) {
      character = character.character;
      const maxHeight = character.maxHeight;
      let num = 1;
      if (null != maxHeight) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
      }
      const tmp = closure_9();
      const items = [character];
      const memo = noop.useMemo(() => {
        let checkpointCharacterAccessibilityLabel = null;
        if (null != character) {
          checkpointCharacterAccessibilityLabel =
            CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(tmp);
        }
        return checkpointCharacterAccessibilityLabel;
      }, items);
      const obj2 = {
        character,
        canvasWidth: 200,
        canvasHeight,
        scale: num,
        clydeSize: 28,
        characterLayout: rect,
        children: null,
      };
      const obj3 = { style: tmp.year, children: null };
      let obj = character(8661);
      obj3.children = jsx(CheckpointStatNumberDefault, {
        value,
        color: obj.getCardColors(character).primaryBackgroundColor,
        size: 64,
      });
      obj2.children = <View style={tmp.year}>{null}</View>;
      const tmp8 = (
        <tmp6
          character={character}
          canvasWidth={200}
          canvasHeight={canvasHeight}
          scale={num}
          clydeSize={28}
          characterLayout={rect}
        >
          {null}
        </tmp6>
      );
      if (null == memo) {
        const obj5 = {
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: tmp8,
        };
        let obj6 = obj5;
      } else {
        obj6 = { accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp8 };
      }
      return <View {...obj6} />;
    };
