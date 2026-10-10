// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
import HTTPUtils from "../../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const cResult = url(576).c(6);
      let obj = url(576);
      const questAsset = url(9184).getQuestAsset(quest, url(9184).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
      url = undefined;
      if (questAsset != null) {
        url = questAsset.url;
      }
      const obj2 = url(9184);
      [tmp5, dependencyMap] = noop.useState(constants.NONE);
      const tmp4 = _slicedToArray(noop.useState(constants.NONE), 2);
      [tmp7, _slicedToArray] = noop.useState(null);
      if (cResult[0] !== url) {
        const fn = function n() {
          if (null != url) {
            const HTTP = HTTPUtils.HTTP;
            let obj = { url: tmp, rejectWithError: true };
            value = HTTP.get(obj);
            value
              .then((text) => {
                try {
                  closure_1_2(url(15402).parseVtt(text.text).cues);
                  dependencyMap(constants.SUCCESS);
                  const obj = url(15402);
                } catch (err) {
                  dependencyMap(constants.ERROR);
                }
              })
              .catch(() => {
                dependencyMap(constants.ERROR);
              });
            const nextPromise = value.then((text) => {
              try {
                closure_1_2(url(15402).parseVtt(text.text).cues);
                dependencyMap(constants.SUCCESS);
                const obj = url(15402);
              } catch (err) {
                dependencyMap(constants.ERROR);
              }
            });
          } else {
            dependencyMap(constants.NONE);
          }
        };
        const items = [url];
        cResult[0] = url;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[3] === tmp7) {
        if (cResult[4] === tmp5) {
          let tmp11 = cResult[5];
        }
        return tmp11;
      }
      const obj4 = { captions: tmp7, status: tmp5 };
      cResult[3] = tmp7;
      cResult[4] = tmp5;
      cResult[5] = obj4;
      tmp11 = obj4;
      const tmp6 = _slicedToArray(noop.useState(null), 2);
    }
  : (quest) => {
      const questAsset = url(9184).getQuestAsset(quest, url(9184).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
      url = undefined;
      if (questAsset != null) {
        url = questAsset.url;
      }
      let obj = url(9184);
      [tmp4, dependencyMap] = noop.useState(constants.NONE);
      const captions = _slicedToArray(noop.useState(null), 2);
      _slicedToArray = captions[1];
      const items = [url];
      const effect = noop.useEffect(() => {
        if (null != url) {
          const HTTP = HTTPUtils.HTTP;
          let obj = { url: tmp, rejectWithError: true };
          value = HTTP.get(obj);
          value
            .then((text) => {
              try {
                closure_1_2(url(15402).parseVtt(text.text).cues);
                dependencyMap(constants.SUCCESS);
                const obj = url(15402);
              } catch (err) {
                dependencyMap(constants.ERROR);
              }
            })
            .catch(() => {
              dependencyMap(constants.ERROR);
            });
          const nextPromise = value.then((text) => {
            try {
              closure_1_2(url(15402).parseVtt(text.text).cues);
              dependencyMap(constants.SUCCESS);
              const obj = url(15402);
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
