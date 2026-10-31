// === Module 18062: HomeDrawerAnimations ===

// Module 18062 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import size from "module_2" /* 2 */;

const obj = { duration: 200, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
const obj2 = { duration: 100, easing: null };
const Easing2 = ReanimatedRexport.Easing;
const Easing3 = ReanimatedRexport.Easing;
obj2.easing = Easing2.out(Easing3.poly(4));
const obj3 = { duration: 180, easing: null };
const Easing4 = ReanimatedRexport.Easing;
obj3.easing = Easing4.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj2;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj3;