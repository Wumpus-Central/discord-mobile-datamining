// === Module 17173: getActivityContainerPIPStylesSpec ===

// Module 17173 (getActivityContainerPIPStylesSpec)
import Constants from "Constants" /* 2011 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants.OrientationLockState;
const LANDSCAPE_ACTIVITY_ASPECT_RATIO = ActivityPanelConstants.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
const fn = function t(isLandscape) {
  let height;
  let marginLeft;
  let marginTop;
  let pipHeight;
  let pipOrientationLockState;
  let pipWidth;
  let shouldHorizontallyCenter;
  let shouldVerticallyCenter;
  let width;
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  isLandscape = isLandscape.isLandscape;
  if (pipOrientationLockState == null) {
    pipOrientationLockState = OrientationLockState.UNLOCKED;
  }
  if (pipOrientationLockState === OrientationLockState.PORTRAIT) {
    const result = pipWidth * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    marginTop = -1 * roundToNearestPixelDefault(result / 2);
    marginLeft = 0;
    shouldVerticallyCenter = true;
    shouldHorizontallyCenter = false;
    height = result;
    width = pipWidth;
  } else {
    width = height * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    marginLeft = -1 * roundToNearestPixelDefault(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
};
fn.__closure = { OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: roundToNearestPixelDefault };
fn.__workletHash = 7141745103186;
fn.__initData = { code: "function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}" };
({ OrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: roundToNearestPixelDefault });
let result = size.fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default fn;