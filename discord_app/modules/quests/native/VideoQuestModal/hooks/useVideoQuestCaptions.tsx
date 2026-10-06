// === Module 14964: useVideoQuestCaptions ===

// Module 14964 (useVideoQuestCaptions)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let url;
  let obj = url(576);
  const cResult = obj.c(6);
  const obj2 = url(10013);
  const questAsset = obj2.getQuestAsset(quest, url(10013).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  [tmp5, dependencyMap] = _slicedToArray(react.useState(constants.NONE), 2);
  const tmp4 = _slicedToArray(react.useState(constants.NONE), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [tmp7, _slicedToArray] = tmp6;
  if (cResult[0] !== url) {
    const fn = function n() {
      if (null != url) {
        const HTTP = HTTPUtils.HTTP;
        let obj = { url: tmp, rejectWithError: true };
        const value = HTTP.get(obj);
        const nextPromise = value.then((text) => {
          try {
            const obj = url(dependencyMap[6]);
            closure_1_2(obj.parseVtt(text.text).cues);
            closure_1_1(constants.SUCCESS);
          } catch (err) {
            closure_1_1(constants.ERROR);
          }
        });
        nextPromise.catch(() => {
          closure_1_1(constants.ERROR);
        });
      } else {
        dependencyMap(constants.NONE);
      }
    };
    const items = [url];
    cResult[0] = url;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[3] === tmp7) {
    let tmp11;
    if (cResult[4] === tmp5) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj4 = { captions: tmp7, status: tmp5 };
  cResult[3] = tmp7;
  cResult[4] = tmp5;
  cResult[5] = obj4;
  tmp11 = obj4;
}) : ((quest) => {
  let captions;
  let closure_2;
  let tmp4;
  let url;
  let obj = url(10013);
  const questAsset = obj.getQuestAsset(quest, url(10013).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  [tmp4, dependencyMap] = react.useState(constants.NONE);
  _slicedToArray(react.useState(constants.NONE), 2);
  [captions, _slicedToArray] = react.useState(null);
  const items = [url];
  const effect = react.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      let obj = { url: tmp, rejectWithError: true };
      const value = HTTP.get(obj);
      const nextPromise = value.then((text) => {
        try {
          const obj = url(dependencyMap[6]);
          closure_1_2(obj.parseVtt(text.text).cues);
          closure_1_1(constants.SUCCESS);
        } catch (err) {
          closure_1_1(constants.ERROR);
        }
      });
      nextPromise.catch(() => {
        closure_1_1(constants.ERROR);
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions, status };
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = tmp2;