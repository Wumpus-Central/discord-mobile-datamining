// === Module 17539: HomeDrawerAnimations ===

// Module 17539 (HomeDrawerAnimations)
import _mod1653 from "module_1653" /* 1653 */;
import size from "module_2" /* 2 */;

const obj = { duration: 200, easing: null };
const Easing = _mod1653.Easing;
obj.easing = Easing.out(_mod1653.Easing.cubic);
const obj2 = { duration: 100, easing: null };
const Easing2 = _mod1653.Easing;
const Easing3 = _mod1653.Easing;
obj2.easing = Easing2.out(Easing3.poly(4));
const obj3 = { duration: 180, easing: null };
const Easing4 = _mod1653.Easing;
obj3.easing = Easing4.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj2;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj3;