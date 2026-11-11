// discord_app/modules/waterwheels/interest/native/InterestCoverTitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function wrapCoverTitle(memo, widths, width, arg3) {
  let num = bound;
  if (bound === undefined) {
    num = 1;
  }
  items = [1];
  HermesBuiltin.arraySpread(widths, 1);
  bound = Math.max(c7, Math.min(num, width / Math.max.apply(items)));
  const items1 = [];
  let str = "";
  let num2 = 0;
  const entries = memo.entries();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    let tmp8 = tmp7[1];
    let result = widths[tmp7[0]] * bound;
    let tmp11 = ``.length > 0;
    if (tmp11) {
      tmp11 = num2 + result > width;
    }
    if (tmp11) {
      let arr = items1.push(str);
      str = "";
      num2 = 0;
    }
    let str2 = "";
    if (str.length > 0) {
      str2 = " ";
    }
    str = str + (str2 + tmp8);
    num2 = num2 + result;
    continue;
  }
  if (str.length > 0) {
    items1.push(str);
  }
  if (items1.length > arg3) {
    const diff = arg3 - 1;
    items1[diff] = `${arr2[tmp21]}…`;
  }
  tmp4 = entries[Symbol.iterator]();
  return { scale: bound, lines: items1.slice(0, arg3) };
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let c7 = 0.75;
const createStyles = fn(5243);
let closure_8 = createStyles.createStyles((width, scale, height, paddingBottom) => {
  const obj = {
    container: { width, alignItems: "center", justifyContent: "center" },
    lines: { height, paddingBottom, justifyContent: "center" },
    scaled: null,
    measure: { position: "absolute", opacity: 0, width: 10000 },
    line: { textAlign: "center" },
  };
  const obj3 = { width: width / scale, transform: null };
  items = [{ scale }];
  obj3.transform = items;
  obj.scaled = obj3;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestCoverTitle.tsx");

export default function InterestCoverTitle(name) {
  name = name.name;
  const width = name.width;
  const maxHeight = name.maxHeight;
  let num = name.maxLines;
  if (num === undefined) {
    num = 3;
  }
  let flag = name.alignLastBaseline;
  if (flag === undefined) {
    flag = false;
  }
  const onHeightChange = name.onHeightChange;
  c7 = undefined;
  c8 = undefined;
  let num3;
  let line;
  items = [name];
  const memo = num.useMemo(
    () => name.trim().split(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/),
    items,
  );
  let isMatch = 1 === memo.length;
  if (!isMatch) {
    isMatch =
      /(?:[\u1100-\u11FF\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u302E\u302F\u3038-\u303B\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u3131-\u318E\u31F0-\u321E\u3260-\u327E\u32D0-\u32FE\u3300-\u3357\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67]|\uD83C\uDE00|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/.test(
        name,
      );
    const obj2 =
      /(?:[\u1100-\u11FF\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u302E\u302F\u3038-\u303B\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u3131-\u318E\u31F0-\u321E\u3260-\u327E\u32D0-\u32FE\u3300-\u3357\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67]|\uD83C\uDE00|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/;
  }
  [tmp3, c7] = maxHeight(num.useState(null), 2);
  let name1;
  if (tmp3 != null) {
    name1 = tmp3.name;
  }
  let tmp5 = null;
  if (name1 === name) {
    tmp5 = tmp3;
  }
  c8 = tmp5;
  const items1 = [isMatch, tmp5, memo, width, maxHeight, num];
  const memo1 = obj.useMemo(() => {
    if (!isMatch) {
      if (null != _undefined2) {
        const tmp10 = wrapCoverTitle(memo, _undefined2.widths, width, num);
        let tmp3Result = tmp10;
        if (null != maxHeight) {
          tmp3Result = tmp10;
          if (_undefined2.height > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const bound = Math.min(tmp10.scale, maxHeight / (_undefined2.height * tmp10.lines.length));
            const widths = _undefined2.widths;
            const _Math4 = Math;
            tmp3Result = wrapCoverTitle(
              memo,
              widths,
              width,
              Math.max(1, Math.min(num, Math.floor(maxHeight / (_undefined2.height * c7)))),
              bound,
            );
          }
        }
        return tmp3Result;
      }
    }
    return null;
  }, items1);
  let num2 = 0;
  if (flag) {
    num2 = 0;
    if (null != tmp5) {
      num2 = 0;
      if (null != memo1) {
        num2 = tmp5.descender * (1 - memo1.scale);
      }
    }
  }
  num3 = null;
  if (null != memo1) {
    num3 = null;
    if (null != tmp5) {
      num3 = tmp5.height * memo1.lines.length * memo1.scale + num2;
    }
  }
  const items2 = [num3, onHeightChange];
  const effect = obj.useEffect(() => {
    if (null != num3) {
      if (onHeightChange != null) {
        tmp2(tmp);
      }
    }
  }, items2);
  const items3 = [name, memo];
  let num4;
  const callback = obj.useCallback((nativeEvent) => {
    const lines = nativeEvent.nativeEvent.lines;
    if (lines.length === memo.length) {
      const obj = { name, widths: lines.map((width) => width.width), height: null, descender: null };
      const first = lines[0];
      num = undefined;
      if (first != null) {
        num = first.height;
      }
      if (num == null) {
        num = 0;
      }
      obj.height = num;
      const first1 = lines[0];
      let num2;
      if (first1 != null) {
        num2 = first1.descender;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.descender = num2;
      _undefined(obj);
    }
  }, items3);
  if (memo1 != null) {
    num4 = memo1.scale;
  }
  if (num4 == null) {
    num4 = 1;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const tmp9Result = c8(width, num4, num3, num2);
  line = tmp9Result;
  if (isMatch) {
    const obj3 = { accessible: true, accessibilityLabel: name, style: tmp9Result.container, children: null };
    const obj4 = {
      accessible: false,
      variant: "body-xs/semibold",
      color: "text-overlay-light",
      lineClamp: 2,
      ellipsizeMode: "tail",
      onLayout(nativeEvent) {
        let tmpResult;
        if (onHeightChange != null) {
          tmpResult = tmp(nativeEvent.nativeEvent.layout.height);
        }
        return tmpResult;
      },
      style: tmp9Result.line,
      children: name,
    };
    obj3.children = memo(name(width[5]).Text, obj4);
    let tmp11Result = memo(onHeightChange, obj3);
  } else {
    const obj5 = { accessible: true, accessibilityLabel: name, style: tmp9Result.container, children: null };
    const obj6 = {
      accessible: false,
      importantForAccessibility: "no-hide-descendants",
      variant: "body-xs/semibold",
      color: "text-overlay-light",
      onTextLayout: callback,
      style: null,
      children: null,
    };
    const items4 = [,];
    ({ measure: arr6[0], line: arr6[1] } = tmp9Result);
    obj6.style = items4;
    const mapped = memo.map((item) => "" + item + "\u00A0");
    obj6.children = mapped.join("\n");
    const items5 = [memo(name(width[5]).Text, obj6)];
    let tmp13Result = null != memo1 && null != tmp5;
    if (tmp13Result) {
      const obj7 = { style: tmp9Result.lines, children: null };
      const obj8 = { style: tmp9Result.scaled, children: null };
      let lines = memo1.lines;
      obj8.children = lines.map((children, index) =>
        hasOwnProperty(
          Text_Text.Text,
          {
            accessible: false,
            variant: "body-xs/semibold",
            color: "text-overlay-light",
            lineClamp: 1,
            ellipsizeMode: "tail",
            style: line.line,
            children,
          },
          index,
        ),
      );
      obj7.children = tmp13(tmp12, obj8);
      tmp13Result = tmp13(tmp12, obj7);
    }
    items5[1] = tmp13Result;
    obj5.children = items5;
    tmp11Result = isMatch(tmp12, obj5);
  }
  return tmp11Result;
}
export const COVER_TITLE_LINES = 3;
export const COVER_TITLE_MIN_SCALE = 0.75;
export { wrapCoverTitle };
