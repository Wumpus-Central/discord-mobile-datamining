// === Module 19079: getActivityContainerPIPStylesSpec ===

// Module 19079 (getActivityContainerPIPStylesSpec)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import size from "module_2" /* 2 */;

const LANDSCAPE_ACTIVITY_ASPECT_RATIO = ActivityPanelConstants.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
const fn = function t(isLandscape) {
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  if (pipOrientationLockState == null) {
    pipOrientationLockState = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
  }
  if (pipOrientationLockState === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT) {
    const result = pipWidth * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    let marginTop = -1 * roundToNearestPixelDefault(result / 2);
    let marginLeft = 0;
    let shouldVerticallyCenter = true;
    let shouldHorizontallyCenter = false;
    const height = result;
    let width = pipWidth;
  } else {
    width = height * LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    marginLeft = -1 * roundToNearestPixelDefault(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
};
fn.__closure = { EmbeddedActivityOrientationLockState: EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState, LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixel: roundToNearestPixelDefault };
fn.__workletHash = 5930488590770;
fn.__initData = { code: "function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{EmbeddedActivityOrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:EmbeddedActivityOrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT||nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}" };
let result = size.fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default fn;