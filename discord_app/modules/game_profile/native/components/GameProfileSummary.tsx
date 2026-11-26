// discord_app/modules/game_profile/native/components/GameProfileSummary.tsx
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import findTextStart from "../../../html_parser/index.tsx";
import GameProfileSummaryUtils from "GameProfileSummaryUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let closure_8 = createStyles.createStyles({
  container: { flexDirection: "column", overflow: "hidden" },
  measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  ({ game, trackAction } = arg0);
  showToggle = undefined;
  let memo;
  let memo1;
  let memo2;
  let fontScale;
  let width;
  closure_9 = undefined;
  closure_11 = undefined;
  let first1;
  let candidate;
  let tmp = width();
  const gameProfileSummaryExpansion = trackAction(showToggle[5]).useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, showToggle } = gameProfileSummaryExpansion);
  let setHasOverflow = gameProfileSummaryExpansion.setHasOverflow;
  let description = game.summaryLocalized;
  if (description == null) {
    description = game.description;
  }
  items = [description];
  memo = description.useMemo(() => {
    if (null != description) {
      let parseHTMLFromTextResult = findTextStart.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [memo];
  memo1 = description.useMemo(() => {
    const mapped = memo.map((text) => text.text);
    return mapped.join("");
  }, items1);
  const items2 = [memo];
  memo2 = description.useMemo(() => {
    const mapped = memo.map((text) => {
      items = [text.text.length, "" + +text.bold + +text.italic + +text.underline, ,];
      let str = text.heading;
      if (str == null) {
        str = "";
      }
      items[2] = str;
      items[3] = null != text.link;
      return items.join(":");
    });
    return mapped.join("|");
  }, items2);
  const items3 = [memo1, memo2];
  const memo3 = description.useMemo(() => {
    let num = 0;
    const sum = memo1 + memo2;
    const iter = sum[Symbol.iterator]();
    while (iter !== undefined) {
      let _Math = Math;
      let imulResult = Math.imul(num, 31);
      num = (imulResult + nextResult.charCodeAt(0)) | 0;
      continue;
    }
    return num;
  }, items3);
  let obj = trackAction(showToggle[5]);
  fontScale = trackAction(showToggle[7]).useFontScale();
  const tmp9 = setHasOverflow(description.useState(0), 2);
  width = tmp9[0];
  closure_9 = tmp9[1];
  const items4 = [width];
  const callback = description.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.width);
    if (rounded !== first) {
      closure_9(rounded);
    }
  }, items4);
  const tmp12 = setHasOverflow(description.useState(), 2);
  first1 = tmp12[0];
  closure_11 = tmp12[1];
  let text;
  if (first1 != null) {
    text = first1.text;
  }
  let tmp15;
  if (text === memo1) {
    if (first1.formatting === memo2) {
      if (first1.width === width) {
        if (first1.fontScale === fontScale) {
          tmp15 = first1;
        }
      }
    }
  }
  first1 = tmp15;
  candidate = undefined;
  if (tmp15 != null) {
    candidate = tmp15.candidate;
  }
  const items5 = [memo, candidate];
  const memo4 = obj2.useMemo(() => {
    if (null != candidate) {
      let truncateSummaryRunsResult = GameProfileSummaryUtils.truncateSummaryRuns(memo, tmp.end);
    } else {
      truncateSummaryRunsResult = [];
    }
    return truncateSummaryRunsResult;
  }, items5);
  if (!isExpanded) {
    if (null != tmp15) {
      if (null == candidate) {
        let lines = tmp15.lines;
        let substr = lines.slice(0, 3);
        let mapped = substr.map((text) => text.text);
        const joined = mapped.join("");
        let sum = joined.trimEnd() + tmp2(tmp3[8]).SUMMARY_ELLIPSIS;
        const trimEndResult = joined.trimEnd();
      }
    }
  }
  if (isExpanded) {
    let tmp21 = memo;
  } else {
    let fitted;
    if (candidate != null) {
      fitted = candidate.fitted;
    }
    tmp21 = memo4;
  }
  const items6 = [trackAction];
  const callback1 = obj2.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
  }, items6);
  const items7 = [memo1, memo2, width, fontScale, setHasOverflow, tmp15, first1, showToggle];
  const items8 = [candidate, tmp15, memo1];
  const callback2 = obj2.useCallback((nativeEvent) => {
    if (first > 0) {
      items = [];
      HermesBuiltin.arraySpread(nativeEvent.nativeEvent.lines, 0);
      if (items.length > 0) {
        if (0 === str.trim().length) {
          items.pop();
          while (items.length > 0) {
            let str2 = items[items.length - 1].text;
            if (0 !== str2.trim().length) {
              break;
            }
          }
        }
        str = items[items.length - 1].text;
      }
      closure_0 = tmp2;
      const substr = items.slice(0, 3);
      setHasOverflow(items.length > 3);
      setHasOverflow = trackAction(showToggle[8]).getSummaryLineEnd(memo1, substr);
      closure_11((arg0) => {
        let tmp = arg0;
        lines = arg0;
        if (lines) {
          if (tmp === first1) {
            if (null != tmp) {
              return tmp;
            }
          }
        }
        let tmp5;
        if (tmp2) {
          const obj2 = { text: memo1, formatting: memo2, width, fontScale, lines: substr, candidate: null };
          let tmp13;
          if (null != closure_2) {
            const obj3 = {};
            const merged = Object.assign(closure_2);
            obj3.fitted = false;
            tmp13 = obj3;
          }
          obj2.candidate = tmp13;
          tmp5 = obj2;
        }
        tmp = tmp5;
        tmp2 = lines;
      });
      const obj = trackAction(showToggle[8]);
    }
  }, items7);
  if (0 === memo.length) {
    return null;
  } else {
    const intl = tmp2(tmp3[10]).intl;
    const t = tmp2(tmp3[10]).t;
    const stringResult = intl.string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    let obj3 = { style: tmp.container, onLayout: callback, children: null };
    let tmp28 = null;
    if (!isExpanded) {
      tmp28 = null;
      if (width > 0) {
        tmp28 = null;
        if (null == candidate) {
          let obj4 = {
            style: tmp.measurement,
            pointerEvents: "none",
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            children: null,
          };
          let obj5 = {
            variant: "body-md/normal",
            color: "interactive-text-active",
            onTextLayout: callback2,
            children: null,
          };
          const obj6 = { runs: memo, onLinkPress: callback1 };
          obj5.children = memo2(tmp2(tmp3[12]).HTMLText, obj6);
          obj4.children = memo2(tmp2(tmp3[11]).Text, obj5);
          const items9 = [memo3, width, fontScale];
          tmp28 = memo2(tmp27, obj4, items9.join(":"));
        }
      }
    }
    const items10 = [tmp28, , ,];
    let tmp30 = null;
    if (!isExpanded) {
      tmp30 = null;
      if (width > 0) {
        tmp30 = null;
        if (null != candidate) {
          const obj7 = {
            style: tmp.measurement,
            pointerEvents: "none",
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            children: null,
          };
          const obj8 = {
            variant: "body-md/normal",
            color: "interactive-text-active",
            onTextLayout: tmp24,
            children: null,
          };
          const obj9 = { runs: memo4 };
          obj8.children = memo2(tmp2(tmp3[12]).HTMLText, obj9);
          obj7.children = memo2(tmp2(tmp3[11]).Text, obj8);
          tmp30 = memo2(tmp27, obj7);
        }
      }
    }
    items10[1] = tmp30;
    const obj10 = { accessible: null != sum, accessibilityRole: null, accessibilityLabel: null, children: null };
    let str3;
    if (null != sum) {
      str3 = "text";
    }
    obj10.accessibilityRole = str3;
    obj10.accessibilityLabel = sum;
    const obj11 = {
      variant: "body-md/normal",
      color: "interactive-text-active",
      lineClamp: 3,
      accessible: null == sum,
      accessibilityLabel: sum,
      accessibilityElementsHidden: null != sum,
      importantForAccessibility: null,
      children: null,
    };
    let str4 = "auto";
    if (null != sum) {
      str4 = "no-hide-descendants";
    }
    obj11.importantForAccessibility = str4;
    const obj12 = { runs: tmp21, onLinkPress: callback1, linksAccessible: null == sum };
    obj11.children = memo2(tmp2(tmp3[12]).HTMLText, obj12);
    obj10.children = memo2(tmp2(tmp3[11]).Text, obj11);
    items10[2] = memo2(memo, obj10);
    let tmp32Result = null;
    if (showToggle) {
      const obj13 = {
        onPress: gameProfileSummaryExpansion.toggleExpanded,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: null,
        children: null,
      };
      const obj14 = { expanded: isExpanded };
      obj13.accessibilityState = obj14;
      const obj15 = { variant: "body-md/medium", color: "text-brand", children: stringResult };
      obj13.children = tmp32(tmp2(tmp3[11]).Text, obj15);
      tmp32Result = tmp32(memo1, obj13);
    }
    items10[3] = tmp32Result;
    obj3.children = items10;
    return fontScale(memo, obj3);
  }
  const tmp2Result = trackAction(showToggle[7]);
}
