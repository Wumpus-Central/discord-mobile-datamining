// === Module 15932: OrientationLockState ===

// Module 15932 (OrientationLockState)
import { OrientationLockState } from "items3";
import { LANDSCAPE_ACTIVITY_ASPECT_RATIO } from "ActivityPanelModes";

const fn = function t(isLandscape) {
  let pipHeight;
  let pipOrientationLockState;
  let pipWidth;
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  if (pipOrientationLockState == null) {
    pipOrientationLockState = OrientationLockState.UNLOCKED;
  }
  if (pipOrientationLockState === OrientationLockState.PORTRAIT) {
    const result = pipWidth * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    let marginTop = -1 * importDefault(10070)(result / 2);
    let marginLeft = 0;
    let shouldVerticallyCenter = true;
    let shouldHorizontallyCenter = false;
    const height = result;
    let width = pipWidth;
  } else {
    width = height * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    marginLeft = -1 * importDefault(10070)(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
};
fn.__closure = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: require("t") };
fn.__workletHash = 7141745103186;
fn.__initData = { code: "function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}" };
const obj = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: require("t") };
let result = require("t").fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default fn;