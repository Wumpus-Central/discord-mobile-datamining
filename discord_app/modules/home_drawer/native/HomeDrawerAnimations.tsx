// discord_app/modules/home_drawer/native/HomeDrawerAnimations.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { duration: 200, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
obj = { duration: 200, easing: null };
const Easing2 = ReanimatedRexport.Easing;
const Easing3 = ReanimatedRexport.Easing;
obj.easing = Easing2.out(Easing3.poly(4));
obj = { duration: 100, easing: null };
const Easing4 = ReanimatedRexport.Easing;
const Easing5 = ReanimatedRexport.Easing;
obj.easing = Easing4.out(Easing5.poly(4));
const obj1 = { duration: 180, easing: null };
const Easing6 = ReanimatedRexport.Easing;
obj1.easing = Easing6.bezier(0, 0, 0.2, 1);
const obj2 = { duration: 200, easing: null };
const Easing7 = ReanimatedRexport.Easing;
obj2.easing = Easing7.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj1;
export const HOME_DRAWER_UNSNAP_TIMING = obj2;
