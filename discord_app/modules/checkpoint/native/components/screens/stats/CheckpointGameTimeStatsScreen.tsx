// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3091 from "../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import CalendarIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
};
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx",
);

export default function CheckpointGameTimeStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
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
  const tmp11 = _modDef3091;
  if (rounded <= 0 && null != stateFromStores1) {
    let stringResult = string(tmp11["dx4+NI"]);
    let tmp12 = importDefault;
  } else {
    stringResult = string(tmp11["4N5p4D"]);
    tmp12 = importDefault;
  }
  let formatToPlainStringResult;
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3091).uKOgr9, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.imageContainer, children: null };
  const tmp2Result = CheckpointStatsUtils;
  const obj6 = { animatedUri: null, staticUri: null, style: null };
  const tmp12Result = tmp12(13585);
  obj6.animatedUri = tmp12(13630);
  obj6.staticUri = tmp12(13631);
  obj6.style = tmp.image;
  obj5.children = timestampProducer(tmp12(13592), obj6);
  const items2 = [timestampProducer(View, obj5)];
  const obj7 = { style: tmp.copy, children: null };
  const obj8 = { style: tmp.title, children: null };
  const items3 = [timestampProducer(CalendarIcon.CalendarIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp12Result4 = tmp12(13592);
  obj10.children = stringResult.toLocaleUpperCase();
  items3[1] = timestampProducer(tmp12(13587), obj10);
  obj8.children = items3;
  const items4 = [React5(View, obj8), ,];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    let tmp14Result = timestampProducer(tmp12(13599), obj11);
  } else {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + rounded + " " + stringResult;
    obj12.style = tmp.number;
    const obj13 = { end: rounded };
    obj12.children = timestampProducer(tmp12(13600), obj13);
    tmp14Result = timestampProducer(View, obj12);
  }
  items4[1] = tmp14Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp12Result5 = tmp12(13587);
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    const obj15 = { numUsers: CheckpointStatsUtils.formatCheckpointCompactNumber(stateFromStores1) };
    let formatToPlainStringResult1 = intl5.formatToPlainString(tmp12(3091)["N32w+2"], obj15);
    const tmp2Result2 = CheckpointStatsUtils;
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj16 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
        return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
      },
    };
    formatToPlainStringResult1 = intl4.format(tmp12(3091)["4FXB/m"], obj16);
  } else {
    const intl3 = util.intl;
    const obj17 = { numDays: rounded };
    formatToPlainStringResult1 = intl3.format(tmp12(3091).iCKjh6, obj17);
  }
  const obj18 = { children: null };
  obj14.children = formatToPlainStringResult1;
  items4[2] = timestampProducer(tmp12(13587), obj14);
  obj7.children = items4;
  items2[1] = React5(View, obj7);
  obj4.children = items2;
  obj18.children = React5(View, obj4);
  return timestampProducer(tmp12Result, obj18);
}
