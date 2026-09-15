// === Module 16739: VibegrationsSubagentMark ===

// Module 16739 (VibegrationsSubagentMark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3591 from "module_3591" /* 3591 */;
import BeeIllocon from "BeeIllocon" /* 5898 */;
import BotIllocon from "BotIllocon" /* 5908 */;
import BunnyIllocon from "BunnyIllocon" /* 5924 */;
import ButterflyIllocon from "ButterflyIllocon" /* 5926 */;
import CatIllocon from "CatIllocon" /* 5934 */;
import CaterpillarIllocon from "CaterpillarIllocon" /* 5936 */;
import DogIllocon from "DogIllocon" /* 6034 */;
import FrogIllocon from "FrogIllocon" /* 6110 */;
import GoatIllocon from "GoatIllocon" /* 6282 */;
import SnailIllocon from "SnailIllocon" /* 6572 */;
import SpiderIllocon from "SpiderIllocon" /* 6586 */;
import size from "module_2" /* 2 */;

function marks() {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj = { key: "snail", Illocon: SnailIllocon.SnailIllocon, tint: unsafe_rawColors.ILLO_YELLOW_40, name: null };
  const intl = util.intl;
  obj.name = intl.string(_modDef3591["2l3AEQ"]);
  const items = [obj, , , , , , , , , , ];
  const obj2 = { key: "goat", Illocon: GoatIllocon.GoatIllocon, tint: unsafe_rawColors.ILLO_ORANGE_40, name: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(_modDef3591["+FPL+I"]);
  items[1] = obj2;
  const obj3 = { key: "frog", Illocon: FrogIllocon.FrogIllocon, tint: unsafe_rawColors.ILLO_GREEN_40, name: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(_modDef3591.w4GOfR);
  items[2] = obj3;
  const obj4 = { key: "bunny", Illocon: BunnyIllocon.BunnyIllocon, tint: unsafe_rawColors.ILLO_PINK_40, name: null };
  const intl4 = util.intl;
  obj4.name = intl4.string(_modDef3591.XmZT9M);
  items[3] = obj4;
  const obj5 = { key: "cat", Illocon: CatIllocon.CatIllocon, tint: unsafe_rawColors.ILLO_PINK_40, name: null };
  const intl5 = util.intl;
  obj5.name = intl5.string(_modDef3591.NnydwQ);
  items[4] = obj5;
  const obj6 = { key: "caterpillar", Illocon: CaterpillarIllocon.CaterpillarIllocon, tint: unsafe_rawColors.ILLO_GREEN_40, name: null };
  const intl6 = util.intl;
  obj6.name = intl6.string(_modDef3591["4iXcNT"]);
  items[5] = obj6;
  const obj7 = { key: "butterfly", Illocon: ButterflyIllocon.ButterflyIllocon, tint: unsafe_rawColors.ILLO_PURPLE_40, name: null };
  const intl7 = util.intl;
  obj7.name = intl7.string(_modDef3591.DoTGt5);
  items[6] = obj7;
  const obj8 = { key: "dog", Illocon: DogIllocon.DogIllocon, tint: unsafe_rawColors.ILLO_YELLOW_40, name: null };
  const intl8 = util.intl;
  obj8.name = intl8.string(_modDef3591["9zxqmP"]);
  items[7] = obj8;
  const obj9 = { key: "spider", Illocon: SpiderIllocon.SpiderIllocon, tint: unsafe_rawColors.ILLO_ORANGE_40, name: null };
  const intl9 = util.intl;
  obj9.name = intl9.string(_modDef3591.HF0T3L);
  items[8] = obj9;
  const obj10 = { key: "bee", Illocon: BeeIllocon.BeeIllocon, tint: unsafe_rawColors.ILLO_YELLOW_40, name: null };
  const intl10 = util.intl;
  obj10.name = intl10.string(_modDef3591.XTzDga);
  items[9] = obj10;
  const obj11 = { key: "bot", Illocon: BotIllocon.BotIllocon, tint: unsafe_rawColors.ILLO_PURPLE_40, name: null };
  const intl11 = util.intl;
  obj11.name = intl11.string(_modDef3591.abtC2b);
  items[10] = obj11;
  return items;
}
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSubagentMark.tsx");

export const familiarMark = function familiarMark(helperMark) {
  closure_0 = helperMark;
  return marks().find((key) => key.key === closure_0);
};
export const subagentIllocons = function subagentIllocons(arr) {
  let length;
  arr = marks();
  c1 = 0;
  let str = arr[0];
  if (str == null) {
    str = "";
  }
  let num = 0;
  let num2 = 0;
  if (0 < str.length) {
    do {
      let result = (31 * num2 + str.charCodeAt(num)) % arr.length;
      c1 = result;
      num = num + 1;
      num2 = result;
      length = str.length;
    } while (num < length);
  }
  const map = new Map();
  const item = arr.forEach((item, index) => {
    const result = map.set(item, arr[(c1 + index) % arr.length]);
  });
  return map;
};