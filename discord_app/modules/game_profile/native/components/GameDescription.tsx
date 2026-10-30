// discord_app/modules/game_profile/native/components/GameDescription.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import groupDescriptionRuns from "../../groupDescriptionRuns.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DescriptionTextRun(arg0) {
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
  const items = [italic1];
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  items[1] = underline1;
  obj.style = items;
  obj.children = text;
  tmp = jsx(Text_Text.Text, { variant: str, color: "none", style: null, children: null });
}
function DescriptionHeadingRun(arg0) {
  ({ run, styles } = arg0);
  ({ text, italic, underline } = run);
  if (italic) {
    const obj = {
      variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[tmp],
      color: "none",
      style: null,
      children: null,
    };
    let italic1;
    if (italic) {
      italic1 = styles.italic;
    }
    const items = [italic1];
    let underline1;
    if (underline) {
      underline1 = styles.underline;
    }
    items[1] = underline1;
    obj.style = items;
    obj.children = text;
    let tmp3Result = jsx(Text_Text.Text, {
      variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[tmp],
      color: "none",
      style: null,
      children: null,
    });
  } else {
    tmp3Result = text;
  }
  return tmp3Result;
}
function DescriptionSegment(styles) {
  ({ segment, heading } = styles);
  styles = styles.styles;
  const trackAction = styles.trackAction;
  const runs = segment.runs;
  const mapped = runs.map((run, index) => {
    if (null == heading) {
      const obj2 = { run, styles };
      let tmp5 = <DescriptionTextRun key={index} run={run} styles={styles} />;
    } else {
      const obj = { run, heading: tmp, styles };
      tmp5 = <DescriptionHeadingRun key={index} run={run} heading={tmp} styles={styles} />;
    }
    return tmp5;
  });
  const link = segment.link;
  let tmp3Result = mapped;
  if (null != link) {
    let str = "text-md/normal";
    if (null != heading) {
      str = tmp4(tmp5[4]).GAME_DESCRIPTION_HEADING_VARIANTS[heading];
    }
    let obj = {
      variant: str,
      color: "text-link",
      accessibilityRole: "link",
      style: styles.underline,
      onPress() {
        trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
        MaskedLinkUtils.handleClick({ href: link });
      },
      children: mapped,
    };
    tmp3Result = link(heading(styles[3]).Text, obj);
    tmp4 = heading;
    tmp5 = styles;
  }
  return tmp3Result;
}
function DescriptionGroup(arg0) {
  ({ group, styles: require, trackAction: dependencyMap } = arg0);
  const heading = group.heading;
  const segments = group.segments;
  const mapped = segments.map((segment, index) => (
    <DescriptionSegment key={index} segment={segment} heading={heading} styles={styles} trackAction={trackAction} />
  ));
  let tmp2 = mapped;
  if (null != heading) {
    const obj = {
      variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[heading],
      color: "mobile-text-heading-primary",
      children: mapped,
    };
    tmp2 = jsx(Text_Text.Heading, {
      variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[heading],
      color: "mobile-text-heading-primary",
      children: mapped,
    });
  }
  return tmp2;
}
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_4 = createStyles.createStyles({
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameDescription.tsx");

export function GameDescription(runs) {
  runs = runs.runs;
  const trackAction = runs.trackAction;
  noop = closure_4();
  const items = [runs];
  const memo = noop.useMemo(() => groupDescriptionRuns.groupDescriptionRuns(runs), items);
  return memo.map((group, index) => (
    <DescriptionGroup key={index} group={group} styles={styles} trackAction={trackAction} />
  ));
}
