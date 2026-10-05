// === Module 14958: VideoQuestTranscriptActionSheet ===

// Module 14958 (VideoQuestTranscriptActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import react from "react" /* 19 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7189 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
({ FetchStatus: hasOwnProperty, useVideoQuestUIStore: metroRequire } = VideoQuestUIStore);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { content: obj2, loadingSpinner: { height: 100 } };
obj2 = { paddingBottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx");

export default function VideoQuestTranscriptActionSheet(quest) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Stack;
  let closure_1;
  let intl;
  let items2;
  let obj2;
  let obj3;
  let obj4;
  const f119068 = (children, index) => {
    const obj = { variant: "heading-md/normal", color: "text-muted", children };
    return closure_1_7(quest(dependencyMap[14]).Text, obj, index);
  };
  quest = quest.quest;
  const tmp = closure_9();
  const tmp2 = closure_6((transcript) => transcript.transcript);
  importDefault = tmp2;
  let items = [quest, tmp2];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const effect = react.useEffect(() => {
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
    let tmp6 = null == closure_1 || closure_1.questId !== quest.id || closure_1.fetchStatus === hasOwnProperty.NONE;
    if (!tmp6) {
      let tmp9 = closure_1.fetchStatus === hasOwnProperty.SUCCESS;
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
      const tmpResult = QuestActionCreators;
      const videoTranscript = tmpResult.fetchVideoTranscript(quest, true);
    }
  }, items);
  let text;
  const useMemo = react.useMemo;
  if (tmp2 != null) {
    text = tmp2.text;
  }
  const items1 = [text];
  const memo = useMemo(() => {
    let items;
    let text;
    if (closure_1 != null) {
      text = closure_1.text;
    }
    if (null == text) {
      items = [];
    } else {
      const str = closure_1.text;
      const parts = str.split("\n");
      const mapped = parts.map((item) => item.trim());
      items = mapped.filter((item) => item.length > 0);
    }
    return items;
  }, items1);
  let obj = { scrollable: true, header: closure_7(BottomSheetTitleHeader, obj2), children: closure_7(BottomSheetScrollView, obj3) };
  const ActionSheet = quest(6701).ActionSheet;
  obj2 = { title: intl.string(quest(1126).t["1YS80z"]) };
  BottomSheetTitleHeader = quest(6644).BottomSheetTitleHeader;
  intl = quest(1126).intl;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: closure_8(Stack, obj4) };
  BottomSheetScrollView = quest(6112).BottomSheetScrollView;
  let fetchStatus;
  obj4 = { spacing: 16, style: tmp.content, children: items2 };
  Stack = quest(5593).Stack;
  if (tmp2 != null) {
    fetchStatus = tmp2.fetchStatus;
  }
  let tmp7Result = fetchStatus === constants.FETCHING;
  if (tmp7Result) {
    const obj5 = { style: tmp.loadingSpinner, size: "large" };
    tmp7Result = closure_7(ActivityIndicator, obj5);
  }
  items2 = [tmp7Result, memo.length > 0 && memo.map(f119068)];
  memo.length > 0 && memo.map(f119068);
  return closure_7(ActionSheet, obj);
};