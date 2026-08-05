// discord_app/modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx
import noop from "noop";
import { ActivityIndicator } from "get ActivityIndicator";
import _toPropertyKey from "_toPropertyKey";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ FetchStatus: c5, useVideoQuestUIStore: closure_6 } = _toPropertyKey);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: null, loadingSpinner: null };
createCacheKey = { paddingBottom: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 100 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("_toPropertyKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  let importDefault;
  const tmp = createCacheKey();
  const tmp2 = callback((transcript) => transcript.transcript);
  importDefault = tmp2;
  let items = [quest, tmp2];
  const effect = React.useEffect(() => {
    const questAsset = quest(outer1_2[7]).getQuestAsset(quest, quest(outer1_2[7]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == c1 || tmp5.questId !== tmp3.id;
    if (!tmp6) {
      tmp6 = tmp5.fetchStatus === outer1_5.NONE;
    }
    if (!tmp6) {
      let tmp9 = tmp5.fetchStatus === outer1_5.SUCCESS;
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
      const videoTranscript = quest(outer1_2[8]).fetchVideoTranscript(tmp3, true);
      const tmpResult = quest(outer1_2[8]);
    }
  }, items);
  let text;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = React.useMemo(() => {
    let text;
    if (c1 != null) {
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
  const intl = quest(1236).intl;
  obj[0] = intl.string(quest(1236).t["1YS80z"]);
  obj[1] = callback2(quest(5337).BottomSheetTitleHeader, obj);
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsets().bottom }, children: null };
  const obj1 = { spacing: 16, style: tmp.content, children: null };
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
  obj[1] = closure_8(quest(4693).Stack, obj1);
  obj[2] = callback2(quest(5340).BottomSheetScrollView, obj);
  return callback2(quest(5646).ActionSheet, obj);
};