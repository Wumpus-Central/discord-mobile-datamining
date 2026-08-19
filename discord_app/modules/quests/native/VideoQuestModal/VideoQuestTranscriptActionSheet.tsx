// === Module 14507: VideoQuestTranscriptActionSheet ===

// Module 14507 (VideoQuestTranscriptActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import noop from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import _toPropertyKey from "_toPropertyKey" /* 7455 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ FetchStatus: c5, useVideoQuestUIStore: closure_6 } = _toPropertyKey);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 100 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  const tmp = callback3();
  const tmp2 = callback((transcript) => transcript.transcript);
  importDefault = tmp2;
  let items = [quest, tmp2];
  const effect = React.useEffect(() => {
    const questAsset = quest(dependencyMap[7]).getQuestAsset(quest, quest(dependencyMap[7]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == closure_1 || closure_1.questId !== quest.id;
    if (!tmp6) {
      tmp6 = closure_1.fetchStatus === closure_1_5.NONE;
    }
    if (!tmp6) {
      let tmp9 = closure_1.fetchStatus === closure_1_5.SUCCESS;
      if (tmp9) {
        let url;
        if (questAsset != null) {
          url = questAsset.url;
        }
        tmp9 = url !== closure_1.url;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      const videoTranscript = quest(dependencyMap[8]).fetchVideoTranscript(quest, true);
      const tmpResult = quest(dependencyMap[8]);
    }
    const obj = quest(dependencyMap[7]);
  }, items);
  let text;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = React.useMemo(() => {
    let text;
    if (closure_1 != null) {
      text = closure_1.text;
    }
    if (null == text) {
      let items = [];
    } else {
      const parts = closure_1.text.split("\n");
      const mapped = parts.map((item, index) => item.trim());
      items = mapped.filter((item, index) => item.length > 0);
    }
    return items;
  }, items1);
  let obj = { title: null };
  const intl = quest(1236).intl;
  obj[0] = intl.string(quest(1236).t["1YS80z"]);
  obj[1] = callback2(quest(6949).BottomSheetTitleHeader, obj);
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  obj1 = { spacing: 16, style: tmp.content, children: null };
  let fetchStatus;
  if (tmp2 != null) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp7Result = fetchStatus === constants.FETCHING;
  if (tmp7Result) {
    const obj2 = { style: null, size: "large" };
    obj2[0] = tmp.loadingSpinner;
    tmp7Result = callback2(ActivityIndicator, obj2);
  }
  const items2 = [tmp7Result, memo.length > 0 && memo.map((item, index) => callback(quest(table[14]).Text, { variant: "heading-md/normal", color: "text-muted", children: item }, index))];
  obj1[2] = items2;
  obj[1] = callback(quest(4733).Stack, obj1);
  obj[2] = callback2(quest(6952).BottomSheetScrollView, obj);
  return callback2(quest(7175).ActionSheet, obj);
};