// === Module 19719: getActivityContainerPIPStylesSpec ===

// Module 19719 (getActivityContainerPIPStylesSpec)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5896 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10507 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){let[EmbeddedActivityOrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel]=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:EmbeddedActivityOrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.PORTRAIT||nonNullPipOrientationLockState===EmbeddedActivityOrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};})" }, EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState, ActivityPanelConstants.LANDSCAPE_ACTIVITY_ASPECT_RATIO, roundToNearestPixelDefault];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function getActivityContainerPipStylesSpec(isLandscape) {
  ({ pipWidth, pipHeight, pipOrientationLockState } = isLandscape);
  if (pipOrientationLockState == null) {
    pipOrientationLockState = _undefined.UNLOCKED;
  }
  if (pipOrientationLockState === _undefined.PORTRAIT) {
    const result = pipWidth * c1;
    let marginTop = -1 * _undefined2(result / 2);
    let marginLeft = 0;
    let shouldVerticallyCenter = true;
    let shouldHorizontallyCenter = false;
    const height = result;
    let width = pipWidth;
  } else {
    width = height * c1;
    marginLeft = -1 * _undefined2(width / 2);
    marginTop = 0;
    shouldVerticallyCenter = false;
    shouldHorizontallyCenter = true;
  }
  return { width, height, shouldHorizontallyCenter, shouldVerticallyCenter, marginLeft, marginTop };
}
const items1 = [tmp3, tmp4, tmp5];
getActivityContainerPipStylesSpec.__closure = items1;
getActivityContainerPipStylesSpec.__workletHash = 7491412556331;
getActivityContainerPipStylesSpec.__initData = tmp2;
let result = size.fileFinishedImporting("modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx");

export default getActivityContainerPipStylesSpec;