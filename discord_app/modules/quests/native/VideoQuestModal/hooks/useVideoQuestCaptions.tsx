// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
import HTTPUtils from "../../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  const questAsset = url(11285).getQuestAsset(quest, url(11285).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(11285);
  [tmp4, dependencyMap] = _slicedToArray(noop.useState(constants.NONE), 2);
  const captions = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = captions[1];
  const items = [url];
  const effect = noop.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      const obj = { url: tmp, rejectWithError: true };
      value = HTTP.get(obj);
      value
        .then((text) => {
          try {
            closure_1_2(url(15146).parseVtt(text.text).cues);
            dependencyMap(constants.SUCCESS);
          } catch (err) {
            dependencyMap(constants.ERROR);
          }
        })
        .catch(() => {
          dependencyMap(constants.ERROR);
        });
      const nextPromise = value.then((text) => {
        try {
          closure_1_2(url(15146).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};
