// === Module 9395: GameDescription ===

// Module 9395 (GameDescription)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5271 */;
import groupDescriptionRuns from "groupDescriptionRuns" /* 9396 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let closure_4 = createStyles.createStyles({ italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } });
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionTextRun(arg0) {
  const cResult = c.c(7);
  ({ run, styles } = arg0);
  ({ text, bold, italic, underline } = run);
  if (!bold) {
    if (!italic) {
      if (!underline) {
        return text;
      }
    }
  }
  let str = "text-md/normal";
  if (bold) {
    str = "text-md/bold";
  }
  let italic1;
  if (italic) {
    italic1 = styles.italic;
  }
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  if (cResult[0] === italic1) {
    if (cResult[1] === underline1) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === str) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === text) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { variant: str, color: "none", style: tmp6, children: text };
    const tmp9 = jsx(Text_Text.Text, { variant: str, color: "none", style: tmp6, children: text });
    cResult[3] = str;
    cResult[4] = tmp6;
    cResult[5] = text;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const items = [italic1, underline1];
  cResult[0] = italic1;
  cResult[1] = underline1;
  cResult[2] = items;
  tmp6 = items;
}) : (function DescriptionTextRun(arg0) {
  ({ run, styles } = arg0);
  ({ text, bold, italic, underline } = run);
  if (!bold) {
    if (!italic) {
      let tmp = text;
    }
    return tmp;
  }
  let str = "text-md/normal";
  if (bold) {
    str = "text-md/bold";
  }
  const obj = { variant: str, color: "none", style: null, children: null };
  let italic1;
  if (italic) {
    italic1 = styles.italic;
  }
  const items = [italic1, ];
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  items[1] = underline1;
  obj.style = items;
  obj.children = text;
  tmp = jsx(Text_Text.Text, { variant: str, color: "none", style: null, children: null });
});
ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionHeadingRun(arg0) {
  const cResult = c.c(7);
  ({ run, styles } = arg0);
  ({ text, italic, underline } = run);
  if (!italic) {
    if (!underline) {
      return text;
    }
  }
  const tmp4 = groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[arg0.heading];
  let italic1;
  if (italic) {
    italic1 = styles.italic;
  }
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  if (cResult[0] === italic1) {
    if (cResult[1] === underline1) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === text) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const obj2 = { variant: tmp4, color: "none", style: tmp7, children: text };
    const tmp10 = jsx(Text_Text.Text, { variant: tmp4, color: "none", style: tmp7, children: text });
    cResult[3] = tmp4;
    cResult[4] = tmp7;
    cResult[5] = text;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const items = [italic1, underline1];
  cResult[0] = italic1;
  cResult[1] = underline1;
  cResult[2] = items;
  tmp7 = items;
}) : (function DescriptionHeadingRun(arg0) {
  ({ run, styles } = arg0);
  ({ text, italic, underline } = run);
  if (italic) {
    const obj = { variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[tmp], color: "none", style: null, children: null };
    let italic1;
    if (italic) {
      italic1 = styles.italic;
    }
    const items = [italic1, ];
    let underline1;
    if (underline) {
      underline1 = styles.underline;
    }
    items[1] = underline1;
    obj.style = items;
    obj.children = text;
    let tmp3Result = jsx(Text_Text.Text, { variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[tmp], color: "none", style: null, children: null });
  } else {
    tmp3Result = text;
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDescription.tsx");

export const GameDescription = ReactCompilerGating.isReactCompilerEnabled() ? (function GameDescription(runs) {
  let groupDescriptionRunsResult = _require;
  let mapped = dependencyMap;
  const cResult = require("c").c(5);
  runs = runs.runs;
  const tmp3 = closure_4();
  _require = tmp3;
  if (cResult[0] === runs) {
    if (cResult[1] === tmp3) {
      return cResult[2];
    }
  }
  if (cResult[3] !== tmp3) {
    const fn = function p(heading, id) {
      if (null != heading.heading) {
        heading = heading.heading;
        const obj2 = { variant: styles(9396).GAME_DESCRIPTION_HEADING_VARIANTS[heading], color: "mobile-text-heading-primary", children: null };
        const runs = heading.runs;
        obj2.children = runs.map((run, index) => <closure_6 key={index} run={run} heading={heading} styles={styles} />);
        return jsx(styles(5271).Heading, { variant: styles(9396).GAME_DESCRIPTION_HEADING_VARIANTS[heading], color: "mobile-text-heading-primary", children: null }, id);
      } else {
        const obj = { children: null };
        const runs1 = heading.runs;
        obj.children = runs1.map((run, index) => <closure_2_5 key={index} run={run} styles={heading} />);
        return < key={id}>{null}</>;
      }
    };
    cResult[3] = tmp3;
    cResult[4] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[4];
  }
  const result = groupDescriptionRunsResult(9396);
  groupDescriptionRunsResult = result.groupDescriptionRuns(runs);
  mapped = groupDescriptionRunsResult.map(tmp4);
  cResult[0] = runs;
  cResult[1] = tmp3;
  cResult[2] = mapped;
}) : (function GameDescription(runs) {
  _require = closure_4();
  let obj = require("groupDescriptionRuns");
  return require("groupDescriptionRuns").groupDescriptionRuns(runs.runs).map((heading, index) => {
    if (null != heading.heading) {
      heading = heading.heading;
      const obj2 = { variant: styles(9396).GAME_DESCRIPTION_HEADING_VARIANTS[heading], color: "mobile-text-heading-primary", children: null };
      const runs = heading.runs;
      obj2.children = runs.map((run, index) => <closure_6 key={index} run={run} heading={heading} styles={styles} />);
      return jsx(styles(5271).Heading, { variant: styles(9396).GAME_DESCRIPTION_HEADING_VARIANTS[heading], color: "mobile-text-heading-primary", children: null }, index);
    } else {
      const obj = { children: null };
      const runs1 = heading.runs;
      obj.children = runs1.map((run, index) => <closure_2_5 key={index} run={run} styles={heading} />);
      return < key={index}>{null}</>;
    }
  });
});