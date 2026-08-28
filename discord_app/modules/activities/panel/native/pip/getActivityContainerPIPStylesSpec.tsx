// === Module 16531: OrientationLockState ===

// Module 16531 (OrientationLockState)
import set from "set" /* 2 */;
import items3 from "items3" /* 4474 */;
import ActivityPanelModes from "ActivityPanelModes" /* 9405 */;
import tDefault from "t" /* 10668 */;

const OrientationLockState = items3.OrientationLockState;
const LANDSCAPE_ACTIVITY_ASPECT_RATIO = ActivityPanelModes.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
const fn = function t(isLandscape) {
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  if (pipOrientationLockState == null) {
    pipOrientationLockState = OrientationLockState.UNLOCKED;
  }
  if (pipOrientationLockState === OrientationLockState.PORTRAIT) {
    const result = pipWidth * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    let marginTop = -1 * tDefault(result / 2);
    let marginLeft = 0;
    let shouldVerticallyCenter = true;
    let shouldHorizontallyCenter = false;
    const height = result;
    let width = pipWidth;
  } else {
    width = height * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    marginLeft = -1 * tDefault(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
};
fn.__closure = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: tDefault };
fn.__workletHash = 7141745103186;
fn.__initData = { code: "function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}" };
const obj = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: tDefault };
let result = set.fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default fn;