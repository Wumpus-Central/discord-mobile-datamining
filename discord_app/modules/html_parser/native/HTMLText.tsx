// discord_app/modules/html_parser/native/HTMLText.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import groupHTMLTextRuns from "../groupHTMLTextRuns.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function TextRun(arg0) {
  ({ run, styles, textVariant } = arg0);
  ({ text, bold, italic, underline, heading } = run);
  ({ boldTextVariant, headingVariants } = arg0);
  if (!italic) {
    if (!underline) {
      return text;
    }
  }
  if (null != heading) {
    textVariant = headingVariants[heading];
  } else if (bold) {
    textVariant = boldTextVariant;
  }
  const obj = { variant: textVariant, color: "none", style: null, children: null };
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
  return jsx(Text_Text.Text, { variant: textVariant, color: "none", style: null, children: null });
}
function RunSegment(arg0) {
  ({ segment, heading, styles } = arg0);
  let linkColor = Object.assign(arg0, Object.assign({ segment: 0, heading: 0, styles: 0 }));
  const runs = segment.runs;
  const mapped = runs.map((run, index) => (
    <TextRun
      key={index}
      run={run}
      styles={styles}
      textVariant={linkColor.textVariant}
      boldTextVariant={linkColor.boldTextVariant}
      headingVariants={linkColor.headingVariants}
    />
  ));
  const link = segment.link;
  if (null == link) {
    return mapped;
  } else {
    if (null == heading) {
      let textVariant = linkColor.textVariant;
    } else {
      textVariant = linkColor.headingVariants[heading];
    }
    let obj = {
      variant: textVariant,
      color: null,
      accessibilityRole: "link",
      style: null,
      onPress: null,
      children: null,
    };
    linkColor = linkColor.linkColor;
    obj.color = linkColor;
    styles = styles.underline;
    obj.style = styles;
    obj.onPress = function onPress() {
      const onLinkPress = linkColor.onLinkPress;
      if (onLinkPress != null) {
        onLinkPress(link);
      }
      MaskedLinkUtils.handleClick({ href: link });
      const obj2 = { href: link };
    };
    obj.children = mapped;
    jsx(styles(linkColor[3]).Text, {
      variant: textVariant,
      color: null,
      accessibilityRole: "link",
      style: null,
      onPress: null,
      children: null,
    });
  }
}
function RunGroup(arg0) {
  ({ group, styles: require } = arg0);
  let merged = Object.assign(arg0, Object.assign({ group: 0, styles: 0 }));
  const heading = group.heading;
  const segments = group.segments;
  const mapped = segments.map((segment, index) => {
    merged = Object.assign(merged);
    return <RunSegment key={index} segment={segment} heading={heading} styles={styles} />;
  });
  let tmp3 = mapped;
  if (null != heading) {
    const obj = { variant: merged.headingVariants[heading], color: merged.headingColor, children: mapped };
    tmp3 = jsx(require("Text/Text").Heading, {
      variant: merged.headingVariants[heading],
      color: merged.headingColor,
      children: mapped,
    });
  }
  return tmp3;
}
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles({
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/html_parser/native/HTMLText.tsx");

export function HTMLText(onLinkPress) {
  const runs = onLinkPress.runs;
  let DEFAULT_TEXT_VARIANT = onLinkPress.textVariant;
  if (DEFAULT_TEXT_VARIANT === undefined) {
    DEFAULT_TEXT_VARIANT = runs(9434).DEFAULT_TEXT_VARIANT;
  }
  let DEFAULT_BOLD_TEXT_VARIANT = onLinkPress.boldTextVariant;
  if (DEFAULT_BOLD_TEXT_VARIANT === undefined) {
    DEFAULT_BOLD_TEXT_VARIANT = runs(9434).DEFAULT_BOLD_TEXT_VARIANT;
  }
  let DEFAULT_HEADING_VARIANTS = onLinkPress.headingVariants;
  if (DEFAULT_HEADING_VARIANTS === undefined) {
    DEFAULT_HEADING_VARIANTS = runs(9434).DEFAULT_HEADING_VARIANTS;
  }
  let native = onLinkPress.headingColor;
  if (native === undefined) {
    native = runs(9434).DEFAULT_HEADING_COLORS.native;
  }
  let DEFAULT_LINK_COLOR = onLinkPress.linkColor;
  if (DEFAULT_LINK_COLOR === undefined) {
    DEFAULT_LINK_COLOR = runs(9434).DEFAULT_LINK_COLOR;
  }
  noop = undefined;
  dependencyMap = closure_4();
  const items = [runs];
  const memo = noop.useMemo(() => groupHTMLTextRuns.groupHTMLTextRuns(runs), items);
  noop = {
    textVariant: DEFAULT_TEXT_VARIANT,
    boldTextVariant: DEFAULT_BOLD_TEXT_VARIANT,
    headingVariants: DEFAULT_HEADING_VARIANTS,
    headingColor: native,
    linkColor: DEFAULT_LINK_COLOR,
    onLinkPress: onLinkPress.onLinkPress,
  };
  return memo.map((group, index) => {
    const merged = Object.assign(closure_2);
    return <RunGroup key={index} group={group} styles={styles} />;
  });
}
