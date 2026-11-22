// === Module 18572: ConjurePlanExperiences ===

// Module 18572 (ConjurePlanExperiences)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import Text_Text from "Text/Text" /* 5504 */;
import AppsIcon2 from "AppsIcon" /* 7704 */;
import conjurePlanExperienceSurfaces from "conjurePlanExperienceSurfaces" /* 18557 */;
import conjurePlanFormat from "conjurePlanFormat" /* 18565 */;
import conjurePlanExperienceSections from "conjurePlanExperienceSections" /* 18573 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 18579 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function InfoBlock(children) {
  let flag = children.channels;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  items = [tmp.infoBlock, ];
  if (flag) {
    flag = tmp.channelsBlock;
  }
  obj = { style: items, children: null };
  items[1] = flag;
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "body-sm/normal", color: "text-muted", accessibilityRole: "header", children: children.caption }), children.children];
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
      obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children }) };
      return hasOwnProperty(View, obj, children);
    })
  });
}
function ChannelRow(arg0) {
  ({ name, description } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.infoRow, accessible: true, accessibilityLabel: "" + name + ", " + description, children: null };
  const obj2 = { style: tmp.iconBox, children: hasOwnProperty(AppsIcon2.AppsIcon, { size: "xs", color: nativeDefault.colors.ICON_STRONG }) };
  items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.infoText, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: name }), hasOwnProperty(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children: description })];
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
      obj = { name: description.name, size: "body-sm", prefix: conjurePlanFormat.conjurePlanCommandPrefix(description) };
      const children = [closure_1_5(ConjurePlanCommandText.ConjurePlanCommandMention, obj), ];
      let combined = null;
      if ("" !== str2) {
        const _HermesInternal = HermesInternal;
        combined = " " + str2;
      }
      children[1] = combined;
      return closure_1_6(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", children }, index);
    })
  });
}
function ExperienceBlocks(arg0) {
  ({ proposal, experience } = arg0);
  ({ showsRequirements, guild } = arg0);
  const tmp = closure_8();
  if ("frame" === experience.kind) {
    const result = conjurePlanExperienceSurfaces.conjurePlanExperiencePlacement(proposal, experience);
    if (null == result) {
      items = [];
    } else {
      const items1 = [];
      if (result.channels.length > 0) {
        const obj2 = { channels: true, caption: null, children: null };
        const intl2 = util.intl;
        const obj4 = { count: result.channels.length };
        obj2.caption = intl2.formatToPlainString(_modDef4190.w8F5sy, obj4);
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
        obj6.caption = intl3.string(_modDef4190.MY6UGJ);
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
    if (showsRequirements) {
      const items4 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, 0);
      const result2 = conjurePlanExperienceSections.conjurePlanRequirementGroups(proposal, guild);
      HermesBuiltin.arraySpread(result2.map((caption) => {
        obj = { caption: caption.caption, children: closure_1_5(Chips, { labels: caption.labels }) };
        return closure_1_5(InfoBlock, obj, caption.key);
      }), arraySpreadResult);
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
      items = [hasOwnProperty(Text_Text.Text, { variant: "body-md/normal", color: "text-default", style: closure_1.bullet, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: "\u2022" }), ];
      const obj3 = { variant: "body-md/normal", color: "text-default", style: closure_1.listText, children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, { text, commandNames, size: "body-md" }) };
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj, index);
    })
  });
}
function ComponentSection(arg0) {
  ({ experience, inServer, bullets, preview, commandNames } = arg0);
  ({ proposal, showsRequirements, guild } = arg0);
  const tmp = closure_8();
  obj = conjurePlanExperienceSections;
  if (obj.conjurePlanExperienceIsApp(experience)) {
    let AppsIcon = AppsIcon2.AppsIcon;
  } else {
    AppsIcon = obj[experience.kind];
  }
  const result = conjurePlanExperienceSections.conjurePlanExperienceKindNote(experience, inServer);
  const obj2 = { style: tmp.component, children: null };
  const obj3 = { style: tmp.componentHeader, children: null };
  const obj4 = { style: tmp.iconBox, children: null };
  const tmp2Result = conjurePlanExperienceSections;
  obj4.children = hasOwnProperty(AppsIcon, { size: "xs", color: nativeDefault.colors.ICON_STRONG });
  items = [hasOwnProperty(View, obj4), ];
  const obj6 = { variant: "body-md/medium", color: "text-strong", accessibilityRole: "header", children: null };
  const obj5 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
  obj6.children = conjurePlanExperienceSections.conjurePlanExperienceKindLabel(experience, inServer);
  items[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), , , , ];
  let tmp8Result = null;
  if (null != result) {
    const obj7 = { variant: "body-sm/normal", color: "text-muted", children: result };
    tmp8Result = hasOwnProperty(Text_Text.Text, obj7);
  }
  items1[1] = tmp8Result;
  let tmp8Result3 = null;
  if (null != preview) {
    const obj8 = { style: tmp.preview, children: preview };
    tmp8Result3 = hasOwnProperty(View, obj8);
  }
  items1[2] = tmp8Result3;
  if ("automod" === experience.kind) {
    if (1 === bullets.length) {
      const obj9 = { variant: "body-md/normal", color: "text-default", children: null };
      const obj10 = { text: bullets[0], commandNames, size: "body-md" };
      obj9.children = hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj10);
      let tmp8Result4 = hasOwnProperty(Text_Text.Text, obj9);
    }
    items1[3] = tmp8Result4;
    const obj11 = { proposal, experience, showsRequirements, guild };
    items1[4] = hasOwnProperty(ExperienceBlocks, obj11);
    obj2.children = items1;
    return timestampProducer(View, obj2);
  }
  tmp8Result4 = null;
  if (bullets.length > 0) {
    const obj12 = { bullets, commandNames };
    tmp8Result4 = hasOwnProperty(Bullets, obj12);
  }
  const tmp2Result2 = conjurePlanExperienceSections;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { frame: fn(7040).GameControllerIcon, overlay_widget: fn(18271).WindowTopIcon, user_widget: fn(13050).UserCircleIcon, bot: fn(12179).RobotIcon, commands: fn(12179).RobotIcon, automod: fn(10133).ShieldIcon };
const createStyles = fn(4913);
let obj3 = { intro: { gap: nativeDefault.space.PX_8 }, divider: null, component: null, componentHeader: null, iconBox: null, preview: null, listItem: null, bullet: null, listText: null, infoBlocks: null, infoBlock: null, channelsBlock: null, infoRows: null, infoRow: null, infoText: null, chips: null, chip: null };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj3.divider = { marginVertical: nativeDefault.space.PX_24, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { marginVertical: nativeDefault.space.PX_24, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj3.component = { gap: nativeDefault.space.PX_12 };
let obj6 = { gap: nativeDefault.space.PX_12 };
obj3.componentHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20 };
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
let obj12 = { gap: nativeDefault.space.PX_12 };
obj3.infoRows = { gap: nativeDefault.space.PX_8 };
const obj13 = { gap: nativeDefault.space.PX_8 };
obj3.infoRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
const obj14 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj3.infoText = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
const obj15 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
obj3.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
const obj16 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj3.chip = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanExperiences.tsx");

export default function ConjurePlanExperiences(arg0) {
  ({ inServer: require, guild: importDefault, proposal } = arg0);
  ({ renderPreview: noop, commandNames } = arg0);
  closure_6 = undefined;
  ({ appName, intro } = arg0);
  const tmp = closure_8();
  const divider = tmp;
  let experiences = proposal.experiences;
  if (experiences == null) {
    experiences = [];
  }
  const result = require("conjurePlanExperienceSections").conjurePlanDisplayedSections(experiences, commandNames);
  obj = require("conjurePlanExperienceSections");
  closure_6 = require("conjurePlanExperienceSections").conjurePlanRequirementsSectionId(result);
  const obj2 = { children: null };
  const obj3 = { style: tmp.intro, children: null };
  items = [divider(require("Text/Text").Heading, { variant: "heading-lg/semibold", color: "text-strong", children: appName }), intro];
  obj3.children = items;
  const items1 = [
    closure_6(commandNames, obj3),
    result.map((bullets) => {
      const experience = bullets.experience;
      obj = { children: null };
      items = [hasOwnProperty(View, { style: divider.divider }), hasOwnProperty(ComponentSection, { experience, inServer, bullets: bullets.bullets, preview: closure_1_3(experience), proposal, commandNames, showsRequirements: experience.id === closure_6, guild })];
      obj.children = items;
      return timestampProducer(noop.Fragment, obj, experience.id);
    })
  ];
  obj2.children = items1;
  return closure_6(commandNames, obj2);
};