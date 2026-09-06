// === Module 15154: VideoQuestTranscriptActionSheet ===

// Module 15154 (VideoQuestTranscriptActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import QuestActionCreators from "QuestActionCreators" /* 11276 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const VideoQuestUIStore = fn(7705);
({ FetchStatus: hasOwnProperty, useVideoQuestUIStore: metroRequire } = VideoQuestUIStore);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { content: null, loadingSpinner: null };
createStyles = { paddingBottom: nativeDefault.space.PX_8 };
createStyles.content = createStyles;
createStyles.loadingSpinner = { height: 100 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const tmp2 = closure_6((transcript) => transcript.transcript);
  importDefault = tmp2;
  let items = [quest, tmp2];
  const effect = noop.useEffect(() => {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == closure_1 || tmp5.questId !== tmp3.id;
    if (!tmp6) {
      tmp6 = tmp5.fetchStatus === constants.NONE;
    }
    if (!tmp6) {
      let tmp9 = tmp5.fetchStatus === constants.SUCCESS;
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
      const videoTranscript = QuestActionCreators.fetchVideoTranscript(tmp3, true);
      const tmpResult = QuestActionCreators;
    }
  }, items);
  let text;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = noop.useMemo(() => {
    let text;
    if (closure_1 != null) {
      text = tmp.text;
    }
    if (null == text) {
      let items = [];
    } else {
      const parts = tmp.text.split("\n");
      const mapped = parts.map((item) => item.trim());
      items = mapped.filter((item) => item.length > 0);
    }
    return items;
  }, items1);
  let obj = { scrollable: true, header: null, children: null };
  obj = { title: null };
  const intl = quest(1114).intl;
  obj.title = intl.string(quest(1114).t["1YS80z"]);
  obj.header = closure_7(quest(7149).BottomSheetTitleHeader, obj);
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj1 = { spacing: 16, style: tmp.content, children: null };
  let fetchStatus;
  if (tmp2 != null) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp7Result = fetchStatus === constants.FETCHING;
  if (tmp7Result) {
    const obj2 = { style: tmp.loadingSpinner, size: "large" };
    tmp7Result = tmp7(ActivityIndicator, obj2);
  }
  const items2 = [tmp7Result, memo.length > 0 && memo.map((children, index) => closure_1_7(quest(dependencyMap[14]).Text, { variant: "heading-md/normal", color: "text-muted", children }, index))];
  obj1.children = items2;
  obj.children = closure_8(quest(4973).Stack, obj1);
  obj.children = closure_7(quest(6627).BottomSheetScrollView, obj);
  return closure_7(quest(7198).ActionSheet, obj);
};