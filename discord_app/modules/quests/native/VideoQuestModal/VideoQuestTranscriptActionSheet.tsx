// === Module 14981: VideoQuestTranscriptActionSheet ===

// Module 14981 (VideoQuestTranscriptActionSheet)
import ThemesDefault from "Themes" /* 709 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import closure_3 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import _toPropertyKey from "_toPropertyKey" /* 7460 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ FetchStatus: c5, useVideoQuestUIStore: closure_6 } = _toPropertyKey);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { content: null, loadingSpinner: null };
createCacheKey = { paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 100 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  importDefault = undefined;
  const tmp = callback3();
  const tmp2 = callback((transcript) => transcript.transcript);
  importDefault = tmp2;
  let items = [quest, tmp2];
  const effect = React.useEffect(() => {
    const questAsset = quest(closure_1_2[7]).getQuestAsset(quest, quest(closure_1_2[7]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == closure_1 || tmp5.questId !== tmp3.id;
    if (!tmp6) {
      tmp6 = tmp5.fetchStatus === closure_1_5.NONE;
    }
    if (!tmp6) {
      let tmp9 = tmp5.fetchStatus === closure_1_5.SUCCESS;
      if (tmp9) {
        let url;
        if (questAsset != null) {
          url = questAsset.url;
        }
        tmp9 = url !== tmp5.url;
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      const videoTranscript = quest(closure_1_2[8]).fetchVideoTranscript(tmp3, true);
      const tmpResult = quest(closure_1_2[8]);
    }
  }, items);
  let text;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = React.useMemo(() => {
    let text;
    if (closure_1 != null) {
      text = tmp.text;
    }
    if (null == text) {
      let items = [];
    } else {
      const parts = tmp.text.split("\n");
      const mapped = parts.map((str) => str.trim());
      items = mapped.filter((arg0) => arg0.length > 0);
      const str = tmp.text;
    }
    return items;
  }, items1);
  let obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = quest(1233).intl;
  obj[0] = intl.string(quest(1233).t["1YS80z"]);
  obj[1] = callback2(quest(5629).BottomSheetTitleHeader, obj);
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
    tmp7Result = tmp7(ActivityIndicator, obj2);
  }
  const items2 = [tmp7Result, memo.length > 0 && memo.map((children) => callback(quest(table[14]).Text, { variant: "heading-md/normal", color: "text-muted", children }, arg1))];
  obj1[2] = items2;
  obj[1] = closure_8(quest(4926).Stack, obj1);
  obj[2] = callback2(quest(5632).BottomSheetScrollView, obj);
  return callback2(quest(5997).ActionSheet, obj);
};