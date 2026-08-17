// _runtime/07100_FlashList.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import FlashList from "07039_FlashList.js";

const Animated = get_ActivityIndicator.Animated;

export default Animated.createAnimatedComponent(FlashList.FlashList);