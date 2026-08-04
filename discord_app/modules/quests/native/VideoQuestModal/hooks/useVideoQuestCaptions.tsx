// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let closure_4 = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = require("resolveAsset").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  let dependencyMap;
  let tmp4;
  const questAsset = url(9490).getQuestAsset(quest, url(9490).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(9490);
  [tmp4, dependencyMap] = callback(React.useState(constants.NONE), 2);
  const captions = callback(React.useState(null), 2);
  callback = captions[1];
  const items = [url];
  const effect = React.useEffect(() => {
    if (null != url) {
      const HTTP = url(outer1_1[3]).HTTP;
      const obj = { url: null, rejectWithError: true };
      obj[0] = tmp;
      const value = HTTP.get(obj);
      value.then((text) => {
        try {
          callback2(outer1_0(outer1_1[4]).parseVtt(text.text).cues);
          callback(outer1_4.SUCCESS);
        } catch (err) {
          callback(outer1_4.ERROR);
        }
      }).catch(() => {
        callback(outer1_4.ERROR);
      });
      const nextPromise = value.then((text) => {
        try {
          callback2(outer1_0(outer1_1[4]).parseVtt(text.text).cues);
          callback(outer1_4.SUCCESS);
        } catch (err) {
          callback(outer1_4.ERROR);
        }
      });
    } else {
      callback(outer1_4.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};