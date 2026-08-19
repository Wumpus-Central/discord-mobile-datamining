// === Module 14498: useVideoQuestCaptions ===

// Module 14498 (useVideoQuestCaptions)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
let closure_4 = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  const questAsset = url(10486).getQuestAsset(quest, url(10486).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(10486);
  [tmp4, dependencyMap] = callback(React.useState(constants.NONE), 2);
  const captions = callback(React.useState(null), 2);
  callback = captions[1];
  const items = [url];
  const effect = React.useEffect(() => {
    if (null != url) {
      const HTTP = url(dependencyMap[3]).HTTP;
      let obj = { url: null, rejectWithError: true };
      obj[0] = tmp;
      const value = HTTP.get(obj);
      value.then((result) => {
        try {
          callback2(url(closure_1_1[4]).parseVtt(result.text).cues);
          callback(closure_1_4.SUCCESS);
          const obj = url(closure_1_1[4]);
        } catch (err) {
          callback(closure_1_4.ERROR);
        }
      }).catch((error) => {
        callback(closure_1_4.ERROR);
      });
      const nextPromise = value.then((result) => {
        try {
          callback2(url(closure_1_1[4]).parseVtt(result.text).cues);
          callback(closure_1_4.SUCCESS);
          const obj = url(closure_1_1[4]);
        } catch (err) {
          callback(closure_1_4.ERROR);
        }
      });
    } else {
      callback(closure_1_4.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};