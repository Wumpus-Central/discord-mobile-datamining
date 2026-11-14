// === Module 14267: CheckpointBackground ===

// Module 14267 (CheckpointBackground)
import noop from "module_19" /* 19 */;

let closure_3 = fn(6377).CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default function CheckpointBackground(gradientStartColor) {
  gradientStartColor = gradientStartColor.gradientStartColor;
  if (gradientStartColor === undefined) {
    gradientStartColor = closure_3[0];
  }
  const tmp2 = closure_8();
  items = [gradientStartColor];
  const obj = { children: null };
  const memo = noop.useMemo(() => {
    items = [gradientStartColor, closure_3[1]];
    return items;
  }, items);
  const items1 = [closure_5(gradientStartColor(5893), { colors: memo, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp2.background }), ];
  const obj3 = { source: null, style: null, resizeMode: "cover" };
  const obj4 = { uri: gradientStartColor(14268) };
  obj3.source = obj4;
  obj3.style = tmp2.background;
  items1[1] = closure_5(gradientStartColor(6020), obj3);
  obj.children = items1;
  return closure_7(closure_6, obj);
};