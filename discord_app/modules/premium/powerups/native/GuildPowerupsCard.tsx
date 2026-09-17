// === Module 12720: GuildPowerupsCard ===

// Module 12720 (GuildPowerupsCard)
import nativeDefault from "native" /* 576 */;
import Card from "Card" /* 5695 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_672" /* 672 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = { cardActive: null, cardExpiring: null, cardRemoving: null };
const obj3 = { borderColor: null };
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.GREEN_360);
obj3.borderColor = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
obj2.cardActive = obj3;
const obj4 = { borderColor: null };
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj4.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj2.cardExpiring = obj4;
const obj5 = { borderColor: null };
let n = n_mod;
const alphaResult1 = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj5.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj2.cardRemoving = obj5;
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.assign({ children: 0, containerStyle: 0, status: 0, style: 0 }));
  const tmp2 = closure_4();
  const obj = { style: containerStyle, children: null };
  const obj2 = { border: "faint", radius: 16, shadow: "none" };
  const merged1 = Object.assign(merged);
  let type;
  if (status != null) {
    type = status.type;
  }
  const items = ["active" === type && tmp2.cardActive, , , ];
  let type1;
  if (status != null) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp2.cardExpiring;
  let type2;
  if (status != null) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp2.cardRemoving;
  items[3] = style;
  obj2.style = items;
  obj2.children = children;
  obj.children = jsx(Card.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View style={containerStyle}>{null}</View>;
};