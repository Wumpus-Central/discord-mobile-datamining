// === Module 11874: ConjureSubagentMark ===

// Module 11874 (ConjureSubagentMark)
import nativeDefault from "native" /* 587 */;
import ConjureSubagentMarks from "ConjureSubagentMarks" /* 11919 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function mark(key) {
  obj = { key };
  const merged = Object.assign(obj[key]);
  obj.name = ConjureSubagentMarks.subagentMarkName(key);
  return obj;
}
let obj = { snail: { Illocon: fn(11875).SnailIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 }, goat: null, frog: null, bunny: null, cat: null, caterpillar: null, butterfly: null, dog: null, spider: null, bee: null, bot: null };
let obj2 = { Illocon: fn(11875).SnailIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.goat = { Illocon: fn(11879).GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
const obj3 = { Illocon: fn(11879).GoatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
obj.frog = { Illocon: fn(11883).FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
const obj4 = { Illocon: fn(11883).FrogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
obj.bunny = { Illocon: fn(11887).BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
const obj5 = { Illocon: fn(11887).BunnyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
obj.cat = { Illocon: fn(11891).CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
const obj6 = { Illocon: fn(11891).CatIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PINK_40 };
obj.caterpillar = { Illocon: fn(11895).CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
const obj7 = { Illocon: fn(11895).CaterpillarIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_GREEN_40 };
obj.butterfly = { Illocon: fn(11899).ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
const obj8 = { Illocon: fn(11899).ButterflyIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
obj.dog = { Illocon: fn(11903).DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
const obj9 = { Illocon: fn(11903).DogIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.spider = { Illocon: fn(11907).SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
const obj10 = { Illocon: fn(11907).SpiderIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_ORANGE_40 };
obj.bee = { Illocon: fn(11911).BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
const obj11 = { Illocon: fn(11911).BeeIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_YELLOW_40 };
obj.bot = { Illocon: fn(11915).BotIllocon, tint: nativeDefault.unsafe_rawColors.ILLO_PURPLE_40 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureSubagentMark.tsx");

export const familiarMark = function familiarMark(helperMark) {
  obj = ConjureSubagentMarks;
  let tmp3;
  if (obj.isConjureSubagentMarkKey(helperMark)) {
    const obj2 = { key: helperMark };
    const merged = Object.assign(obj[helperMark]);
    obj2.name = ConjureSubagentMarks.subagentMarkName(helperMark);
    tmp3 = obj2;
    const tmpResult = ConjureSubagentMarks;
  }
  return tmp3;
};
export const subagentIllocons = function subagentIllocons(arr) {
  const map = new Map();
  const result = ConjureSubagentMarks.assignSubagentMarkKeys(arr);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let result1 = map.set(tmp5[0], mark(tmp5[1]));
    continue;
  }
  return map;
};