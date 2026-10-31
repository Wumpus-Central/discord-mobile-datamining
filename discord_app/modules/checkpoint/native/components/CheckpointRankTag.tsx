// discord_app/modules/checkpoint/native/components/CheckpointRankTag.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckpointCustomizationUtils from "../../CheckpointCustomizationUtils.tsx";
import inlineStyles from "../../../../../_runtime/08031_inlineStyles.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6066).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
const obj2 = {
  hidden: { opacity: 0 },
  text: {
    color: nativeDefault.colors.BLACK,
    paddingVertical: 2,
    paddingHorizontal: nativeDefault.space.PX_8,
    fontSize: 14,
    lineHeight: 18,
  },
  shape: { position: "absolute", top: 0, left: 0 },
  shapeChamferBottomRight: null,
};
let obj4 = { transform: null };
let items = [{ scaleY: -1 }];
obj4.transform = items;
obj2.shapeChamferBottomRight = obj4;
let closure_9 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default function CheckpointRankTag(chamferCorner) {
  let str = chamferCorner.chamferCorner;
  if (str === undefined) {
    str = "top-right";
  }
  c0 = undefined;
  const tmp = closure_9();
  [size, c0] = noop.useState(null);
  const items = [chamferCorner.style];
  let hidden = null == size;
  const callback = noop.useCallback((nativeEvent) => {
    ({ width: c0, height: closure_1 } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      let width;
      if (arg0 != null) {
        width = size.width;
      }
      if (width !== _undefined) {
        const size1 = { width: tmp2, height };
        size = size1;
      } else {
        height = undefined;
        if (size != null) {
          height = size.height;
        }
      }
      return size;
    });
  }, []);
  if (hidden) {
    hidden = tmp.hidden;
  }
  const obj = { style: items, onLayout: callback, children: null };
  items[1] = hidden;
  let tmp7Result = null != size;
  if (tmp7Result) {
    let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
    ({ width: obj2.width, height: obj2.height } = size);
    const items1 = [tmp.shape];
    let shapeChamferBottomRight = "bottom-right" === str;
    if (shapeChamferBottomRight) {
      shapeChamferBottomRight = tmp.shapeChamferBottomRight;
    }
    items1[1] = shapeChamferBottomRight;
    size1.style = items1;
    const obj3 = { points: null, fill: null };
    const tmp10 = inlineStylesDefault;
    obj3.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 5.5);
    obj3.fill = CHECKPOINT_PRIMARY;
    size1.children = React5(inlineStyles.Polygon, obj3);
    tmp7Result = React5(tmp10, size1);
  }
  const items2 = [tmp7Result];
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.text, children: null };
  const items3 = ["#", chamferCorner.rank];
  obj5.children = items3;
  items2[1] = React6(Text_Text.Text, obj5);
  obj.children = items2;
  return React6(View, obj);
}
