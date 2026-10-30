// === Module 13589: CheckpointIntroScreen ===

// Module 13589 (CheckpointIntroScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointStore2 from "CheckpointStore" /* 13386 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13590 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 13591 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

const View = _mod17.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, year: null, globe: null, descriptions: null };
let obj2 = { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
obj.year = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.globe = { width: 75, height: 56 };
let obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.descriptions = { gap: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default function CheckpointIntroScreen() {
  let tmp = closure_8();
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let tmp = CheckpointStore.fetchState !== constants.SUCCESS;
    if (!tmp) {
      tmp = null != CheckpointStore.stats;
    }
    return tmp;
  });
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.year, children: null };
  const items1 = [timestampProducer(CheckpointStatNumberDefault, { value: "2026", size: 96, isStepHeading: true }), ];
  let tmp5Result = !stateFromStores;
  if (!stateFromStores) {
    const obj4 = { style: tmp.globe };
    tmp5Result = timestampProducer(CheckpointGlobeAnimationDefault, obj4);
  }
  items1[1] = tmp5Result;
  obj3.children = items1;
  const items2 = [React5(View, obj3), ];
  const obj5 = { style: tmp.descriptions, children: null };
  const tmp7 = CheckpointScreenDefault;
  const intl = util.intl;
  const tmp6Result3 = _modDef3091;
  const tmp6Result = CheckpointTextDefault;
  const items3 = [timestampProducer(tmp6Result, { variant: "heading-lg/medium", children: intl.string(stateFromStores ? tmp6Result3["7YmUVu"] : tmp6Result3["Fyr+NW"]) }), ];
  let tmp5Result2 = !stateFromStores;
  if (!stateFromStores) {
    const obj7 = { variant: "heading-lg/medium", children: null };
    const intl2 = util.intl;
    obj7.children = intl2.string(_modDef3091["2GRr6H"]);
    tmp5Result2 = timestampProducer(CheckpointTextDefault, obj7);
    const tmp6Result4 = CheckpointTextDefault;
  }
  const obj8 = { children: null };
  items3[1] = tmp5Result2;
  obj5.children = items3;
  items2[1] = React5(View, obj5);
  obj2.children = items2;
  obj8.children = React5(View, obj2);
  return timestampProducer(tmp7, obj8);
};