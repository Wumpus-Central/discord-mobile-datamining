// discord_app/modules/conjure/plan/native/ConjurePlanExperiences.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppsIcon2 from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import conjurePlanExperienceSurfaces from "../conjurePlanExperienceSurfaces.tsx";
import conjurePlanFormat from "../conjurePlanFormat.tsx";
import conjurePlanExperienceSections from "../conjurePlanExperienceSections.tsx";
import ConjurePlanCommandText from "ConjurePlanCommandText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function InfoBlock(children) {
  let flag = children.channels;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const items = [tmp.infoBlock];
  if (flag) {
    flag = tmp.channelsBlock;
  }
  obj = { style: items, children: null };
  items[1] = flag;
  const items1 = [
    hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      accessibilityRole: "header",
      children: children.caption,
    }),
    children.children,
  ];
  obj.children = items1;
  return timestampProducer(View, obj);
}
function Chips(labels) {
  labels = labels.labels;
  const tmp = closure_8();
  const chip = tmp;
  return closure_5(View, {
    style: tmp.chips,
    children: labels.map((children) => {
      obj = {
        style: chip.chip,
        children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children }),
      };
      return hasOwnProperty(View, obj, children);
    }),
  });
}
function ChannelRow(arg0) {
  ({ name, description } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.infoRow, accessible: true, accessibilityLabel: "" + name + ", " + description, children: null };
  const obj2 = {
    style: tmp.iconBox,
    children: hasOwnProperty(AppsIcon2.AppsIcon, { size: "xs", color: nativeDefault.colors.ICON_STRONG }),
  };
  const items = [hasOwnProperty(View, obj2)];
  const obj4 = { style: tmp.infoText, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: name }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: description }),
  ];
  obj4.children = items1;
  items[1] = timestampProducer(View, obj4);
  obj.children = items;
  return timestampProducer(View, obj);
}
function CommandList(commands) {
  commands = commands.commands;
  return hasOwnProperty(View, {
    style: closure_8().infoRows,
    children: commands.map((description, index) => {
      let str2;
      if (description.description != null) {
        str2 = str.trim();
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = {
        name: description.name,
        size: "text-sm",
        prefix: conjurePlanFormat.conjurePlanCommandPrefix(description),
      };
      const children = [closure_1_5(ConjurePlanCommandText.ConjurePlanCommandMention, obj)];
      let combined = null;
      if ("" !== str2) {
        const _HermesInternal = HermesInternal;
        combined = " " + str2;
      }
      children[1] = combined;
      return closure_1_6(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children }, index);
    }),
  });
}
function ExperienceBlocks(showsRequirements) {
  ({ proposal, experience } = showsRequirements);
  const tmp = closure_8();
  if ("frame" === experience.kind) {
    const result = conjurePlanExperienceSurfaces.conjurePlanExperiencePlacement(proposal, experience);
    if (null == result) {
      let items = [];
    } else {
      const items1 = [];
      if (result.channels.length > 0) {
        const obj2 = { channels: true, caption: null, children: null };
        const intl2 = util.intl;
        const obj4 = { count: result.channels.length };
        obj2.caption = intl2.formatToPlainString(_modDef3865.w8F5sy, obj4);
        const obj5 = { style: tmp.infoRows, children: null };
        const channels = result.channels;
        obj5.children = channels.map((description) => {
          const name = description.name;
          return closure_1_5(ChannelRow, { name, description: description.description }, name);
        });
        obj2.children = hasOwnProperty(View, obj5);
        items1.push(hasOwnProperty(InfoBlock, obj2, "channels"));
      }
      const result1 = conjurePlanExperienceSections.conjurePlanFrameFeatures(result);
      items = items1;
      if (result1.length > 0) {
        const obj6 = { caption: null, children: null };
        const intl3 = util.intl;
        obj6.caption = intl3.string(_modDef3865.MY6UGJ);
        const obj7 = { labels: result1 };
        obj6.children = hasOwnProperty(Chips, obj7);
        items1.push(hasOwnProperty(InfoBlock, obj6, "features"));
        items = items1;
      }
      const tmp3Result = conjurePlanExperienceSections;
    }
  } else {
    let tmp2 = "bot" !== experience.kind;
    if (tmp2) {
      tmp2 = "commands" !== experience.kind;
    }
    let items2 = [];
    if (!tmp2) {
      if (0 === proposal.commands.length) {
        let items3 = [];
      } else {
        const obj8 = { caption: null, children: null };
        const intl = util.intl;
        obj8.caption = intl.string(util.t["0hKkS+"]);
        const obj9 = { commands: proposal.commands };
        obj8.children = hasOwnProperty(CommandList, obj9);
        items3 = [hasOwnProperty(InfoBlock, obj8, "commands")];
      }
      items2 = items3;
    }
    let arr5 = items2;
    if (showsRequirements.showsRequirements) {
      const items4 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, 0);
      const result2 = conjurePlanExperienceSections.conjurePlanRequirementGroups(proposal);
      HermesBuiltin.arraySpread(
        result2.map((caption) => {
          obj = { caption: caption.caption, children: closure_1_5(Chips, { labels: caption.labels }) };
          return closure_1_5(InfoBlock, obj, caption.key);
        }),
        arraySpreadResult,
      );
      arr5 = items4;
    }
    let tmp15 = null;
    if (arr5.length > 0) {
      const obj10 = { style: tmp.infoBlocks, children: arr5 };
      tmp15 = hasOwnProperty(View, obj10);
    }
    return tmp15;
  }
}
function Bullets(arg0) {
  ({ bullets, commandNames: require } = arg0);
  closure_1 = closure_8();
  return closure_5(View, {
    children: bullets.map((text, index) => {
      obj = { style: closure_1.listItem, children: null };
      const items = [
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-default",
          style: closure_1.bullet,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: "\u2022",
        }),
      ];
      const obj3 = {
        variant: "text-md/normal",
        color: "text-default",
        style: closure_1.listText,
        children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, {
          text,
          commandNames,
          size: "text-md",
        }),
      };
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj, index);
    }),
  });
}
function ComponentSection(arg0) {
  ({ experience, bullets, preview, commandNames } = arg0);
  ({ proposal, showsRequirements } = arg0);
  const tmp = closure_8();
  obj = conjurePlanExperienceSections;
  const result = obj.conjurePlanExperienceIsApp(experience);
  if (result) {
    let AppsIcon = AppsIcon2.AppsIcon;
  } else {
    AppsIcon = obj[experience.kind];
  }
  const obj2 = { style: tmp.component, children: null };
  const obj3 = { style: tmp.componentHeader, children: null };
  const obj4 = {
    style: tmp.iconBox,
    children: hasOwnProperty(AppsIcon, { size: "xs", color: nativeDefault.colors.ICON_STRONG }),
  };
  const items = [hasOwnProperty(View, obj4)];
  const intl = util.intl;
  if (result) {
    let BM4Ymz = _modDef3865.BM4Ymz;
  } else {
    BM4Ymz = conjurePlanExperienceSections.CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind];
  }
  const obj5 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
  items[1] = hasOwnProperty(Text_Text.Text, {
    variant: "text-md/medium",
    color: "text-strong",
    accessibilityRole: "header",
    children: intl.string(BM4Ymz),
  });
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), , ,];
  let tmp8Result = null;
  if (null != preview) {
    const obj7 = { style: tmp.preview, children: preview };
    tmp8Result = hasOwnProperty(View, obj7);
  }
  items1[1] = tmp8Result;
  if ("automod" === experience.kind) {
    if (1 === bullets.length) {
      const obj8 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj9 = { text: bullets[0], commandNames, size: "text-md" };
      obj8.children = hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj9);
      let tmp8Result2 = hasOwnProperty(Text_Text.Text, obj8);
    }
    items1[2] = tmp8Result2;
    const obj10 = { proposal, experience, showsRequirements };
    items1[3] = hasOwnProperty(ExperienceBlocks, obj10);
    obj2.children = items1;
    return timestampProducer(View, obj2);
  }
  tmp8Result2 = null;
  if (bullets.length > 0) {
    const obj11 = { bullets, commandNames };
    tmp8Result2 = hasOwnProperty(Bullets, obj11);
  }
  const obj6 = {
    variant: "text-md/medium",
    color: "text-strong",
    accessibilityRole: "header",
    children: intl.string(BM4Ymz),
  };
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  frame: fn(9707).GameControllerIcon,
  overlay_widget: fn(12701).WindowTopIcon,
  user_widget: fn(10785).UserCircleIcon,
  bot: fn(12408).RobotIcon,
  commands: fn(12408).RobotIcon,
  automod: fn(11255).ShieldIcon,
};
const createStyles = fn(5009);
let obj3 = {
  intro: { gap: nativeDefault.space.PX_8 },
  divider: null,
  component: null,
  componentHeader: null,
  iconBox: null,
  preview: null,
  listItem: null,
  bullet: null,
  listText: null,
  infoBlocks: null,
  infoBlock: null,
  channelsBlock: null,
  infoRows: null,
  infoRow: null,
  infoText: null,
  chips: null,
  chip: null,
};
let obj4 = { gap: nativeDefault.space.PX_8 };
obj3.divider = {
  marginVertical: nativeDefault.space.PX_24,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj5 = {
  marginVertical: nativeDefault.space.PX_24,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj3.component = { gap: nativeDefault.space.PX_12 };
let obj6 = { gap: nativeDefault.space.PX_12 };
obj3.componentHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = {
  alignItems: "center",
  justifyContent: "center",
  width: nativeDefault.space.PX_20,
  height: nativeDefault.space.PX_20,
};
obj3.iconBox = size;
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj3.preview = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.listItem = { flexDirection: "row" };
let obj8 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.bullet = { width: nativeDefault.space.PX_24, paddingStart: nativeDefault.space.PX_8 };
obj3.listText = { flex: 1, minWidth: 0 };
let obj9 = { width: nativeDefault.space.PX_24, paddingStart: nativeDefault.space.PX_8 };
obj3.infoBlocks = { gap: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_12 };
let obj10 = { gap: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_12 };
obj3.infoBlock = { gap: nativeDefault.space.PX_8 };
let obj11 = { gap: nativeDefault.space.PX_8 };
obj3.channelsBlock = { gap: nativeDefault.space.PX_12 };
const obj12 = { gap: nativeDefault.space.PX_12 };
obj3.infoRows = { gap: nativeDefault.space.PX_8 };
const obj13 = { gap: nativeDefault.space.PX_8 };
obj3.infoRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
const obj14 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj3.infoText = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
const obj15 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
obj3.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
const obj16 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj3.chip = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_8 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanExperiences.tsx");

export default function ConjurePlanExperiences(proposal) {
  proposal = proposal.proposal;
  ({ renderPreview: importDefault, commandNames } = proposal);
  closure_4 = undefined;
  ({ appName, intro } = proposal);
  const tmp = closure_8();
  const divider = tmp;
  let experiences = proposal.experiences;
  if (experiences == null) {
    experiences = [];
  }
  const result = proposal(commandNames[15]).conjurePlanDisplayedSections(experiences, commandNames);
  obj = proposal(commandNames[15]);
  closure_4 = proposal(commandNames[15]).conjurePlanRequirementsSectionId(result);
  const obj2 = { children: null };
  const obj3 = { style: tmp.intro, children: null };
  let items = [
    closure_5(proposal(commandNames[10]).Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: appName,
    }),
    intro,
  ];
  obj3.children = items;
  const items1 = [
    closure_6(closure_4, obj3),
    result.map((bullets) => {
      const experience = bullets.experience;
      obj = { children: null };
      const items = [
        hasOwnProperty(View, { style: divider.divider }),
        hasOwnProperty(ComponentSection, {
          experience,
          bullets: bullets.bullets,
          preview: importDefault(experience),
          proposal,
          commandNames,
          showsRequirements: experience.id === closure_4,
        }),
      ];
      obj.children = items;
      return timestampProducer(noop.Fragment, obj, experience.id);
    }),
  ];
  obj2.children = items1;
  return closure_6(closure_4, obj2);
}
