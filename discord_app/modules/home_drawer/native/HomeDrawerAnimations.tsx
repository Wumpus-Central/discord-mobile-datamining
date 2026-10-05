// discord_app/modules/home_drawer/native/HomeDrawerAnimations.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let Easing;
let Easing3;
let Easing5;
let Easing6;
let Easing7;
let out;
let out2;
const obj = { duration: 200, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
Easing = ReanimatedRexport.Easing;
const obj2 = { duration: 200, easing: out(Easing3.poly(4)) };
const Easing2 = ReanimatedRexport.Easing;
out = Easing2.out;
Easing3 = ReanimatedRexport.Easing;
const obj3 = { duration: 100, easing: out2(Easing5.poly(4)) };
const Easing4 = ReanimatedRexport.Easing;
out2 = Easing4.out;
Easing5 = ReanimatedRexport.Easing;
const obj4 = { duration: 180, easing: Easing6.bezier(0, 0, 0.2, 1) };
Easing6 = ReanimatedRexport.Easing;
const obj5 = { duration: 200, easing: Easing7.bezier(0, 0, 0.2, 1) };
Easing7 = ReanimatedRexport.Easing;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj2;
export const HOME_DRAWER_FLING_THROW_TIMING = obj3;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj4;
export const HOME_DRAWER_UNSNAP_TIMING = obj5;
