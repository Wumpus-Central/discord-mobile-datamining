// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3317 from "../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import CalendarIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import useIsCheckpointWide from "../../../useIsCheckpointWide.tsx";
import CheckpointGlobalStatNumberDefault from "../../CheckpointGlobalStatNumber.tsx";
import CheckpointCountUpStatNumberDefault from "../../CheckpointCountUpStatNumber.tsx";
import CheckpointNumberUtils from "../../../CheckpointNumberUtils.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import _modDef14525 from "../../../../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef14526 from "../../../../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const useIsCheckpointWideDefault = useIsCheckpointWide;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
  wideContainer: null,
  wideImageContainer: null,
  wideImage: null,
  wideCopy: null,
};
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.wideContainer = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH,
};
let obj5 = {
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH,
};
obj.wideImageContainer = {
  width: "50%",
  alignSelf: "stretch",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: nativeDefault.space.PX_32,
};
obj.wideImage = { maxHeight: 480 };
let obj6 = {
  width: "50%",
  alignSelf: "stretch",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: nativeDefault.space.PX_32,
};
obj.wideCopy = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx",
);

export default function CheckpointGameTimeStatsScreen() {
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let prop;
    if (globalStats != null) {
      const games = globalStats.games;
      if (games != null) {
        prop = games.numUsersPlayedEveryDay;
      }
    }
    return prop;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.totalDaysPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl = util.intl;
  const string = intl.string;
  const tmp2Result = _modDef3317;
  if (rounded <= 0 && null != stateFromStores1) {
    let stringResult = string(tmp2Result["dx4+NI"]);
  } else {
    stringResult = string(tmp2Result["4N5p4D"]);
  }
  let formatToPlainStringResult;
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3317.uKOgr9, obj3);
    }
  }
  const obj4 = { centered: tmp4, children: null };
  const obj5 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: null };
  const obj6 = { style: tmp4 ? tmp.wideImageContainer : tmp.imageContainer, children: null };
  const tmp5Result = CheckpointStatsUtils;
  const obj7 = { animatedUri: null, staticUri: null, style: null };
  const tmp2Result5 = CheckpointScreenDefault;
  obj7.animatedUri = _modDef14525;
  obj7.staticUri = _modDef14526;
  const items2 = [tmp.image];
  let wideImage = tmp4;
  if (tmp4) {
    wideImage = tmp.wideImage;
  }
  items2[1] = wideImage;
  obj7.style = items2;
  obj6.children = timestampProducer(CheckpointApngPlayerDefault, obj7);
  const items3 = [timestampProducer(View, obj6)];
  const obj8 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: null };
  const obj9 = { style: tmp.title, children: null };
  const items4 = [timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
  const obj11 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp2Result6 = CheckpointApngPlayerDefault;
  obj11.children = stringResult.toLocaleUpperCase();
  items4[1] = timestampProducer(CheckpointTextDefault, obj11);
  obj9.children = items4;
  const items5 = [metroImportDefault(View, obj9), ,];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj12 = { value: stateFromStores1 };
    let tmp14Result = timestampProducer(CheckpointGlobalStatNumberDefault, obj12);
  } else {
    const obj13 = {
      accessible: true,
      accessibilityLabel: CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("gameDays", rounded),
      style: tmp.number,
      children: null,
    };
    const obj14 = { end: rounded };
    obj13.children = timestampProducer(CheckpointCountUpStatNumberDefault, obj14);
    tmp14Result = timestampProducer(View, obj13);
    const tmp5Result2 = CheckpointNumberUtils;
  }
  items5[1] = tmp14Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp2Result7 = CheckpointTextDefault;
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    let stringResult1 = intl5.string(_modDef3317["7nfXWu"]);
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj16 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
        return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
      },
    };
    stringResult1 = intl4.format(_modDef3317["4FXB/m"], obj16);
  } else {
    const intl3 = util.intl;
    const obj17 = { numDays: rounded };
    stringResult1 = intl3.format(_modDef3317.iCKjh6, obj17);
  }
  obj15.children = stringResult1;
  items5[2] = timestampProducer(CheckpointTextDefault, obj15);
  obj8.children = items5;
  items3[1] = metroImportDefault(View, obj8);
  obj5.children = items3;
  obj4.children = metroImportDefault(View, obj5);
  return timestampProducer(tmp2Result5, obj4);
}
