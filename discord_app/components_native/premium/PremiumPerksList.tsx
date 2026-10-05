// === Module 15569: PremiumPerksList ===

// Module 15569 (PremiumPerksList)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 }, perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 }, perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 }, perkIconContainer: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
obj2.perkIconContainer = size;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((perks) => {
  const cResult = require("c").c(12);
  perkInfoTextContainer = perks.perks;
  const tmp2 = closure_5();
  _require = tmp2;
  if (cResult[0] === perkInfoTextContainer) {
    if (cResult[1] === tmp2.perkIconContainer) {
      if (cResult[2] === tmp2.perkInfoContainer) {
        if (cResult[3] === tmp2.perkInfoTextContainer) {
          if (cResult[9] === tmp2.perkListContainer) {
            if (cResult[10] === tmp4) {
              let tmp8 = cResult[11];
            }
            return tmp8;
          }
          const obj2 = { style: tmp3, children: cResult[4] };
          const tmp11 = closure_3(View, obj2);
          cResult[9] = tmp2.perkListContainer;
          cResult[10] = cResult[4];
          cResult[11] = tmp11;
          tmp8 = tmp11;
        }
      }
    }
  }
  if (cResult[5] === tmp2.perkIconContainer) {
    if (cResult[6] === tmp2.perkInfoContainer) {
      if (cResult[7] === tmp2.perkInfoTextContainer) {
        let tmp5 = cResult[8];
      }
      const mapped = perkInfoTextContainer.map(tmp5);
      cResult[0] = perkInfoTextContainer;
      cResult[1] = tmp2.perkIconContainer;
      ({ perkInfoContainer: tmp[2], perkInfoTextContainer } = tmp2);
      cResult[3] = perkInfoTextContainer;
      cResult[4] = mapped;
    }
  }
  const fn = function p(children, arg1) {
    const obj = { style: closure_0.perkInfoContainer, children: null };
    const items = [React3(View, { style: closure_0.perkIconContainer, children: React3(children.IconComponent, { size: "md" }) }), ];
    const obj3 = { style: closure_0.perkInfoTextContainer, children: null };
    const items1 = [React3(Text_Text.Text, { variant: "text-md/bold", color: "text-strong", children: children.label }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: children.description })];
    obj3.children = items1;
    items[1] = React4(View, obj3);
    obj.children = items;
    return React4(View, obj, arg1);
  };
  cResult[5] = tmp2.perkIconContainer;
  cResult[6] = tmp2.perkInfoContainer;
  cResult[7] = tmp2.perkInfoTextContainer;
  cResult[8] = fn;
  tmp5 = fn;
  let obj = require("c");
}) : ((perks) => {
  perks = perks.perks;
  const tmp = closure_5();
  closure_0 = tmp;
  return closure_3(View, {
    style: tmp.perkListContainer,
    children: perks.map((children, index) => {
      const obj = { style: closure_0.perkInfoContainer, children: null };
      const items = [React3(View, { style: closure_0.perkIconContainer, children: React3(children.IconComponent, { size: "md" }) }), ];
      const obj3 = { style: closure_0.perkInfoTextContainer, children: null };
      const items1 = [React3(Text_Text.Text, { variant: "text-md/bold", color: "text-strong", children: children.label }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: children.description })];
      obj3.children = items1;
      items[1] = React4(View, obj3);
      obj.children = items;
      return React4(View, obj, index);
    })
  });
});