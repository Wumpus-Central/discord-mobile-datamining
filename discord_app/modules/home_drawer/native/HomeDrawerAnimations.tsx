// === Module 16367: HomeDrawerAnimations ===

// Module 16367 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import size from "module_2" /* 2 */;

const obj = { duration: 200, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
const obj2 = { duration: 200, easing: null };
const Easing2 = ReanimatedRexport.Easing;
const Easing3 = ReanimatedRexport.Easing;
obj2.easing = Easing2.out(Easing3.poly(4));
const obj3 = { duration: 100, easing: null };
const Easing4 = ReanimatedRexport.Easing;
const Easing5 = ReanimatedRexport.Easing;
obj3.easing = Easing4.out(Easing5.poly(4));
const obj4 = { duration: 180, easing: null };
const Easing6 = ReanimatedRexport.Easing;
obj4.easing = Easing6.bezier(0, 0, 0.2, 1);
const obj5 = { duration: 200, easing: null };
const Easing7 = ReanimatedRexport.Easing;
obj5.easing = Easing7.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj2;
export const HOME_DRAWER_FLING_THROW_TIMING = obj3;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj4;
export const HOME_DRAWER_UNSNAP_TIMING = obj5;