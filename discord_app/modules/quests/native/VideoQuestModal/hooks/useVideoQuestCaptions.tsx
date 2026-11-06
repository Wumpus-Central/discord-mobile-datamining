// === Module 17385: useVideoQuestCaptions ===

// Module 17385 (useVideoQuestCaptions)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export (quest) => {
  const questAsset = url(9801).getQuestAsset(quest, url(9801).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(9801);
  [tmp4, dependencyMap] = noop.useState(constants.NONE);
  const captions = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = captions[1];
  items = [url];
  const effect = noop.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      let obj = { url: tmp, rejectWithError: true };
      value = HTTP.get(obj);
      value.then((text) => {
        try {
          closure_1_2(url(17386).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
          const obj = url(17386);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      }).catch(() => {
        dependencyMap(constants.ERROR);
      });
      const nextPromise = value.then((text) => {
        try {
          closure_1_2(url(17386).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
          const obj = url(17386);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions: captions[0], status };
}