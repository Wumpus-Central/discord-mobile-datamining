// === Module 16024: HomeDrawerAnimations ===

// Module 16024 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import size from "module_2" /* 2 */;

let obj = { duration: 280, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
obj = { duration: 180, easing: null };
const Easing2 = ReanimatedRexport.Easing;
obj.easing = Easing2.out(ReanimatedRexport.Easing.cubic);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj;