// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";

const require = arg1;
let closure_4 = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  const questAsset = url(10860).getQuestAsset(quest, url(10860).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(10860);
  [tmp4, dependencyMap] = callback(React.useState(constants.NONE), 2);
  const captions = callback(React.useState(null), 2);
  callback = captions[1];
  const items = [url];
  const effect = React.useEffect(() => {
    if (null != url) {
      const HTTP = url(closure_1_1[3]).HTTP;
      const obj = { url: null, rejectWithError: true };
      obj[0] = tmp;
      const value = HTTP.get(obj);
      value.then((text) => {
        try {
          callback2(closure_1_0(closure_1_1[4]).parseVtt(text.text).cues);
          callback(closure_1_4.SUCCESS);
        } catch (err) {
          callback(closure_1_4.ERROR);
        }
      }).catch(() => {
        callback(closure_1_4.ERROR);
      });
      const nextPromise = value.then((text) => {
        try {
          callback2(closure_1_0(closure_1_1[4]).parseVtt(text.text).cues);
          callback(closure_1_4.SUCCESS);
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