// === Module 12568: GuildPowerupsCard ===

// Module 12568 (GuildPowerupsCard)
import nativeDefault from "native" /* 576 */;
import Card from "Card" /* 5607 */;
import noop from "module_19" /* 19 */;
import n from "module_672" /* 672 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { cardActive: null, cardExpiring: null, cardRemoving: null };
createStyles = { borderColor: null };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.GREEN_360);
createStyles.borderColor = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
createStyles.cardActive = createStyles;
const obj1 = { borderColor: null };
const alphaResult = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj1.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createStyles.cardExpiring = obj1;
const obj2 = { borderColor: null };
const alphaResult1 = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj2.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createStyles.cardRemoving = obj2;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.assign({ children: 0, containerStyle: 0, status: 0, style: 0 }));
  const tmp2 = closure_4();
  let obj = { style: containerStyle, children: null };
  obj = { border: "faint", radius: 16, shadow: "none" };
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
  obj.style = items;
  obj.children = children;
  obj.children = jsx(Card.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View border="faint" radius={16} shadow="none" />;
};