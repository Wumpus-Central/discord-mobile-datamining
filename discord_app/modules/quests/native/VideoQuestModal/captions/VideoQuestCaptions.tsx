// === Module 15144: VideoQuestCaptions ===

// Module 15144 (VideoQuestCaptions)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "n" /* 672 */;

const require = arg1;
createCacheKey = { container: null, captionBox: null, captionText: null };
createCacheKey = { position: "absolute", bottom: ThemesDefault.space.PX_32, left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "flex-end" };
createCacheKey[0] = createCacheKey;
let obj1 = { backgroundColor: null, padding: null, borderRadius: null, overflow: "hidden" };
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK);
obj1[0] = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.35).hex();
obj1[1] = ThemesDefault.space.PX_8;
obj1[2] = ThemesDefault.radii.sm;
createCacheKey[1] = obj1;
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.35);
createCacheKey[2] = { color: ThemesDefault.colors.WHITE, textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { color: ThemesDefault.colors.WHITE, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = function VideoQuestCaptions(currentTime) {
  currentTime = currentTime.currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  let captions;
  const tmp = callback();
  let obj = currentTime(captions[6]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  captions = videoQuestCaptions.captions;
  const items = [captions, currentTime, flag];
  const memo = React.useMemo(() => {
    let findActiveCaptionResult = null;
    if (null != captions) {
      findActiveCaptionResult = null;
      if (flag) {
        findActiveCaptionResult = currentTime(captions[7]).findActiveCaption(tmp, currentTime);
        const obj = currentTime(captions[7]);
      }
    }
    return findActiveCaptionResult;
  }, items);
  let tmp6 = null;
  if ("success" === videoQuestCaptions.status) {
    tmp6 = null;
    if (null != memo) {
      obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, children: null };
      const items1 = [tmp.container, style];
      obj[0] = items1;
      obj = { style: null, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2, children: null };
      obj[0] = tmp.captionBox;
      obj1 = { variant: "heading-sm/medium", style: null, children: null };
      obj1[1] = tmp.captionText;
      obj1[2] = memo.text;
      obj[4] = jsx(currentTime(tmp3[9]).Text, { variant: "heading-sm/medium", style: null, children: null });
      obj[4] = jsx(flag(tmp3[8]), { style: null, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2, children: null });
      tmp6 = <View style={null} blurTheme="dark" blurStyle="default" blurAmount={0.2}>{null}</View>;
      const tmp10 = flag(tmp3[8]);
    }
  }
  return tmp6;
};